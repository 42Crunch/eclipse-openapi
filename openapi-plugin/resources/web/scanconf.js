var zp = Object.defineProperty;
var Ap = (e, t, n) => t in e ? zp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var De = (e, t, n) => Ap(e, typeof t != "symbol" ? t + "" : t, n);
import { j as a, f as P, v as Rp, w as Rt, c as gn, b as dd, i as Jn, a as Np, p as Mp, x as qp, r as Fp, t as Lp, l as Bp, u as Hp, e as S, T as x, S as ut, y as Up, z as Vp, A as Wp, C as dr, D as ta, E as na, F as ra, G as oa, H as ia, B as fd, I as sa, J as hd, O as aa, K as la, m as pd, R as $t, L as fs, M as ye, N as Gp, Q as Kp, d as Xp, s as Yp, U as Qp, V as Jp, g as Zp, P as eg, h as tg, W as ng, k as rg } from "./TriangleExclamation.D0e1MsJn.js";
import { a as Zn, S as og } from "./SearchSidebar.DKKcvfvE.js";
import { q as ig, v as Ao, x as sg, y as gd, t as Rn, r as Nn, o as Nt, f as ca, D as ua, z as md, A as qr, B as yd, C as vd, i as da, d as Or, F as ag, G as Nl, H as xd, I as lg, J as cg, K as ug, E as dg, g as fg, j as hg } from "./variables.pW_DOBkM.js";
import { l as pg, c as gg } from "./slice.DMxzMSHa.js";
import { l as mg, e as yg, c as st, s as bd, H as vg } from "./index.B9X4ewit.js";
import { l as xg, p as bg, c as kd, b as kg, A as wg, d as Sg, e as jg, G as Cg, L as _g, f as Eg, g as Og, h as Tg, i as $g, j as Ig, k as Dg, m as Pg, n as zg, o as Ag, R as Rg, T as Ng, P as Mg, C as qg, I as Fg, q as Lg, r as Bg, t as Hg, u as Ug, v as Vg, w as Wg, x as wd, y as Gg, z as Kg, S as Sd } from "./index.BN7TlfY6.js";
import { c as Xg, w as ei, s as ti, o as Yg } from "./listener.vgvTfpyF.js";
import { t as Qg, o as er, s as oe, T as Jg, f as Zg, a as Ml, l as ql, F as dt, I as rt, c as et, b as Fl, d as Ll } from "./Textarea.CtD_GwOm.js";
import { S as Fr } from "./AngleDown.CaeaMDqj.js";
import { S as em } from "./AngleUp.COZ6HPtA.js";
import { D as tr, S as tm } from "./DescriptionTooltip.Cq977ZHq.js";
import { S as jd, P as nm } from "./ProgressButton.BunSwTSP.js";
import { T as kt, C as rm } from "./Tabs.Ir0F6yfI.js";
import { C as mn, B as nr, a as Ro, T as Cd } from "./CollapsibleCard.wMWRWA__.js";
import { d as _d, F as Ed, a as ie, u as yn, b as vn, c as Lr } from "./index.esm.B-IUgjj6.js";
import { S as ni } from "./ExclamationCircle.Cal4AUVQ.js";
import { a as ri, u as oi } from "./downshift.esm.Qr9p8HjF.js";
import { S as om } from "./Check.ChIlL3ks.js";
import { P as im, R as sm, T as am, a as lm, C as cm } from "./index.NGfVEL4v.js";
import { a as um, S as Od } from "./Switch.DpHxbObh.js";
import { S as Qe } from "./TrashCan.C6TcXDL5.js";
import { S as Bl } from "./Select.D_kX0UId.js";
import { o as dm, s as fm } from "./listener.BFeJqLAd.js";
import { S as Br } from "./index.DRpgec5V.js";
import { E as Jt } from "./Banner.C66VmuCw.js";
const Td = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M192 456c0 13.3-10.7 24-24 24H96c-53.02 0-96-42.98-96-96V128c0-53.02 42.98-96 96-96h72c13.3 0 24 10.74 24 24 0 13.25-10.7 24-24 24H96c-26.4 0-48 21.6-48 48v256c0 26.4 21.6 48 48 48h72c13.3 0 24 10.7 24 24m313.5-216.4-127.1-136c-9.094-9.688-24.28-10.12-33.91-1.031-9.656 9.062-10.12 24.25-1.031 33.91L432.4 232H183.1c-12.4 0-23.1 10.8-23.1 24s10.75 24 23.1 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C348.2 413.8 354.1 416 359.1 416c6.375 0 12.75-2.531 17.47-7.562l127.1-136C514.2 263.2 514.2 248.8 505.5 239.6" }) }), $d = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M200 32h-80c-30.93 0-56 25.07-56 56v77.5a39.84 39.84 0 0 1-11.67 28.17L7 239c-4.5 4.5-7 10.6-7 17 0 6.375 2.5 12.5 7 17l45.33 45.33A39.78 39.78 0 0 1 64 346.5V424c0 30.9 25.07 56 56 56h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-4.4 0-8-3.6-8-8v-77.5c0-23.44-9.337-45.91-25.95-62.45L57.88 256l28.18-28.05C102.7 211.4 112 188.9 112 165.5V88c0-4.4 3.6-8 8-8h80c13.3 0 24-10.75 24-24s-10.7-24-24-24m369 207-45.33-45.33A39.78 39.78 0 0 1 512 165.5V88c0-30.93-25.1-56-56-56h-80c-13.3 0-24 10.75-24 23.1S362.7 80 375.1 80H456c4.4 0 8 3.6 8 8v77.5c0 23.37 9.284 45.78 25.81 62.31L517.1 256l-28.19 28.19C473.3 300.7 464 323.1 464 346.5V424c0 4.4-3.6 8-8 8h-80c-13.3 0-24 10.7-24 23.1s10.7 24.9 23.1 24.9H456c30.93 0 56-25.07 56-56v-77.5a39.84 39.84 0 0 1 11.67-28.17L569 273c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17" }) }), hm = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M235.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32" }) }), Id = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6s28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48" }) }), pm = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h140.1l67.9 67.9V320c0 8.8-7.2 16-16 16m-192 48h192c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9l-67.8-67.9c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64M64 128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-32h-48v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h32v-48z" }) }), gm = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M64 368c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48m0-160c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48m0-64c-26.51 0-48-21.5-48-48 0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.5-21.49 48-48 48" }) }), mm = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "m568.1 303-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 296H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 387.7 448 393.8 448 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97M360 384c-13.25 0-24 10.74-24 24v40c0 8.836-7.164 16-16 16H64.02c-8.836 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v72c0 13.25 10.74 24 23.1 24s25.8-10.7 25.8-24v-93.4c0-16.98-6.742-33.26-18.75-45.26L290.62 18.7C278.6 6.742 262.3 0 245.4 0H63.1C28.65 0-.002 28.66 0 64l.007 384c.001 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64v-40c0-13.3-10.7-24-24-24" }) }), ym = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40zm48-40v-48H40v48zm144 40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40zm48-40v-48h-48v48zM0 232c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40zm40 0v48h48v-48zm192 88c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40zm48-40v-48h-48v48zM0 72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40zm40 0v48h48V72zm192 88c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40zm48-40V72h-48v48z" }) }), vm = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M336 144c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m0 208c-9.5 0-18.8-.7-27.9-2.2l-28 26.3c-3.6 5.4-9.7 7.9-16.1 7.9h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24V376c0-6.4 2.529-12.5 7.029-17L162.2 203.9c-1.4-9.1-2.2-18.4-2.2-27.9C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176m0-48c70.7 0 128-57.3 128-128S406.7 48 336 48s-128 57.3-128 128c0 6.9.5 13.7 1.6 20.3l3.8 24.2L47.1 385.9V464h64v-64h64v-64h79l37.4-37.4 24.2 3.8c6.6 1.1 13.4 1.6 20.3 1.6" }) }), xm = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M24.52 38.13a48.02 48.02 0 0 1 48.51.91L361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87M48 432l288-176L48 80z" }) }), Hr = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M432 256c0 13.3-10.7 24-24 24H248v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200 440V280H40c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160V72c0-13.25 10.75-23.99 24-23.99S248 58.75 248 72v160h160c13.3 0 24 10.8 24 24" }) }), bm = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M0 416c0 13.3 10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-80c-35.8 0-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56m-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64m76.3-56c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24z" }) }), km = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm200 248v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24" }) }), Dd = P.createContext({
  dragDropManager: void 0
});
function qe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Hl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ul = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Vl = {
  INIT: "@@redux/INIT" + Ul(),
  REPLACE: "@@redux/REPLACE" + Ul()
};
function wm(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Pd(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(qe(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(qe(1));
    return n(Pd)(e, t);
  }
  if (typeof e != "function")
    throw new Error(qe(2));
  var o = e, i = t, s = [], l = s, c = !1;
  function u() {
    l === s && (l = s.slice());
  }
  function d() {
    if (c)
      throw new Error(qe(3));
    return i;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(qe(4));
    if (c)
      throw new Error(qe(5));
    var y = !0;
    return u(), l.push(g), function() {
      if (y) {
        if (c)
          throw new Error(qe(6));
        y = !1, u();
        var w = l.indexOf(g);
        l.splice(w, 1), s = null;
      }
    };
  }
  function f(g) {
    if (!wm(g))
      throw new Error(qe(7));
    if (typeof g.type > "u")
      throw new Error(qe(8));
    if (c)
      throw new Error(qe(9));
    try {
      c = !0, i = o(i, g);
    } finally {
      c = !1;
    }
    for (var y = s = l, v = 0; v < y.length; v++) {
      var w = y[v];
      w();
    }
    return g;
  }
  function h(g) {
    if (typeof g != "function")
      throw new Error(qe(10));
    o = g, f({
      type: Vl.REPLACE
    });
  }
  function m() {
    var g, y = p;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(w) {
        if (typeof w != "object" || w === null)
          throw new Error(qe(11));
        function b() {
          w.next && w.next(d());
        }
        b();
        var k = y(b);
        return {
          unsubscribe: k
        };
      }
    }, g[Hl] = function() {
      return this;
    }, g;
  }
  return f({
    type: Vl.INIT
  }), r = {
    dispatch: f,
    subscribe: p,
    getState: d,
    replaceReducer: h
  }, r[Hl] = m, r;
}
function K(e, t, ...n) {
  if (Sm() && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    let r;
    if (t === void 0)
      r = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let o = 0;
      r = new Error(t.replace(/%s/g, function() {
        return n[o++];
      })), r.name = "Invariant Violation";
    }
    throw r.framesToPop = 1, r;
  }
}
function Sm() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function jm(e, t, n) {
  return t.split(".").reduce(
    (r, o) => r && r[o] ? r[o] : n || null,
    e
  );
}
function Cm(e, t) {
  return e.filter(
    (n) => n !== t
  );
}
function zd(e) {
  return typeof e == "object";
}
function _m(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (i) => {
    n.set(i, n.has(i) ? n.get(i) + 1 : 1);
  };
  e.forEach(r), t.forEach(r);
  const o = [];
  return n.forEach((i, s) => {
    i === 1 && o.push(s);
  }), o;
}
function Em(e, t) {
  return e.filter(
    (n) => t.indexOf(n) > -1
  );
}
const fa = "dnd-core/INIT_COORDS", ii = "dnd-core/BEGIN_DRAG", ha = "dnd-core/PUBLISH_DRAG_SOURCE", si = "dnd-core/HOVER", ai = "dnd-core/DROP", li = "dnd-core/END_DRAG";
function Wl(e, t) {
  return {
    type: fa,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
const Om = {
  type: fa,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Tm(e) {
  return function(n = [], r = {
    publishSource: !0
  }) {
    const { publishSource: o = !0, clientOffset: i, getSourceClientOffset: s } = r, l = e.getMonitor(), c = e.getRegistry();
    e.dispatch(Wl(i)), $m(n, l, c);
    const u = Pm(n, l);
    if (u == null) {
      e.dispatch(Om);
      return;
    }
    let d = null;
    if (i) {
      if (!s)
        throw new Error("getSourceClientOffset must be defined");
      Im(s), d = s(u);
    }
    e.dispatch(Wl(i, d));
    const f = c.getSource(u).beginDrag(l, u);
    if (f == null)
      return;
    Dm(f), c.pinSource(u);
    const h = c.getSourceType(u);
    return {
      type: ii,
      payload: {
        itemType: h,
        item: f,
        sourceId: u,
        clientOffset: i || null,
        sourceClientOffset: d || null,
        isSourcePublic: !!o
      }
    };
  };
}
function $m(e, t, n) {
  K(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(r) {
    K(n.getSource(r), "Expected sourceIds to be registered.");
  });
}
function Im(e) {
  K(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Dm(e) {
  K(zd(e), "Item must be an object.");
}
function Pm(e, t) {
  let n = null;
  for (let r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break;
    }
  return n;
}
function zm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Am(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      zm(e, o, n[o]);
    });
  }
  return e;
}
function Rm(e) {
  return function(n = {}) {
    const r = e.getMonitor(), o = e.getRegistry();
    Nm(r), Fm(r).forEach((s, l) => {
      const c = Mm(s, l, o, r), u = {
        type: ai,
        payload: {
          dropResult: Am({}, n, c)
        }
      };
      e.dispatch(u);
    });
  };
}
function Nm(e) {
  K(e.isDragging(), "Cannot call drop while not dragging."), K(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Mm(e, t, n, r) {
  const o = n.getTarget(e);
  let i = o ? o.drop(r, e) : void 0;
  return qm(i), typeof i > "u" && (i = t === 0 ? {} : r.getDropResult()), i;
}
function qm(e) {
  K(typeof e > "u" || zd(e), "Drop result must either be an object or undefined.");
}
function Fm(e) {
  const t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Lm(e) {
  return function() {
    const n = e.getMonitor(), r = e.getRegistry();
    Bm(n);
    const o = n.getSourceId();
    return o != null && (r.getSource(o, !0).endDrag(n, o), r.unpinSource()), {
      type: li
    };
  };
}
function Bm(e) {
  K(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function hs(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(
    (n) => n === t
  ) : e === t;
}
function Hm(e) {
  return function(n, { clientOffset: r } = {}) {
    Um(n);
    const o = n.slice(0), i = e.getMonitor(), s = e.getRegistry(), l = i.getItemType();
    return Wm(o, s, l), Vm(o, i, s), Gm(o, i, s), {
      type: si,
      payload: {
        targetIds: o,
        clientOffset: r || null
      }
    };
  };
}
function Um(e) {
  K(Array.isArray(e), "Expected targetIds to be an array.");
}
function Vm(e, t, n) {
  K(t.isDragging(), "Cannot call hover while not dragging."), K(!t.didDrop(), "Cannot call hover after drop.");
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    K(e.lastIndexOf(o) === r, "Expected targetIds to be unique in the passed array.");
    const i = n.getTarget(o);
    K(i, "Expected targetIds to be registered.");
  }
}
function Wm(e, t, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r], i = t.getTargetType(o);
    hs(i, n) || e.splice(r, 1);
  }
}
function Gm(e, t, n) {
  e.forEach(function(r) {
    n.getTarget(r).hover(t, r);
  });
}
function Km(e) {
  return function() {
    if (e.getMonitor().isDragging())
      return {
        type: ha
      };
  };
}
function Xm(e) {
  return {
    beginDrag: Tm(e),
    publishDragSource: Km(e),
    hover: Hm(e),
    drop: Rm(e),
    endDrag: Lm(e)
  };
}
class Ym {
  receiveBackend(t) {
    this.backend = t;
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
    const t = this, { dispatch: n } = this.store;
    function r(i) {
      return (...s) => {
        const l = i.apply(t, s);
        typeof l < "u" && n(l);
      };
    }
    const o = Xm(this);
    return Object.keys(o).reduce((i, s) => {
      const l = o[s];
      return i[s] = r(l), i;
    }, {});
  }
  dispatch(t) {
    this.store.dispatch(t);
  }
  constructor(t, n) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      const r = this.store.getState().refCount > 0;
      this.backend && (r && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !r && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange);
  }
}
function Qm(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Ad(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Jm(e) {
  const { clientOffset: t, initialClientOffset: n, initialSourceClientOffset: r } = e;
  return !t || !n || !r ? null : Ad(Qm(t, r), n);
}
function Zm(e) {
  const { clientOffset: t, initialClientOffset: n } = e;
  return !t || !n ? null : Ad(t, n);
}
const kr = [], pa = [];
kr.__IS_NONE__ = !0;
pa.__IS_ALL__ = !0;
function ey(e, t) {
  return e === kr ? !1 : e === pa || typeof t > "u" ? !0 : Em(t, e).length > 0;
}
class ty {
  subscribeToStateChange(t, n = {}) {
    const { handlerIds: r } = n;
    K(typeof t == "function", "listener must be a function."), K(typeof r > "u" || Array.isArray(r), "handlerIds, when specified, must be an array of strings.");
    let o = this.store.getState().stateId;
    const i = () => {
      const s = this.store.getState(), l = s.stateId;
      try {
        l === o || l === o + 1 && !ey(s.dirtyHandlerIds, r) || t();
      } finally {
        o = l;
      }
    };
    return this.store.subscribe(i);
  }
  subscribeToOffsetChange(t) {
    K(typeof t == "function", "listener must be a function.");
    let n = this.store.getState().dragOffset;
    const r = () => {
      const o = this.store.getState().dragOffset;
      o !== n && (n = o, t());
    };
    return this.store.subscribe(r);
  }
  canDragSource(t) {
    if (!t)
      return !1;
    const n = this.registry.getSource(t);
    return K(n, `Expected to find a valid source. sourceId=${t}`), this.isDragging() ? !1 : n.canDrag(this, t);
  }
  canDropOnTarget(t) {
    if (!t)
      return !1;
    const n = this.registry.getTarget(t);
    if (K(n, `Expected to find a valid target. targetId=${t}`), !this.isDragging() || this.didDrop())
      return !1;
    const r = this.registry.getTargetType(t), o = this.getItemType();
    return hs(r, o) && n.canDrop(this, t);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(t) {
    if (!t)
      return !1;
    const n = this.registry.getSource(t, !0);
    if (K(n, `Expected to find a valid source. sourceId=${t}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    const r = this.registry.getSourceType(t), o = this.getItemType();
    return r !== o ? !1 : n.isDragging(this, t);
  }
  isOverTarget(t, n = {
    shallow: !1
  }) {
    if (!t)
      return !1;
    const { shallow: r } = n;
    if (!this.isDragging())
      return !1;
    const o = this.registry.getTargetType(t), i = this.getItemType();
    if (i && !hs(o, i))
      return !1;
    const s = this.getTargetIds();
    if (!s.length)
      return !1;
    const l = s.indexOf(t);
    return r ? l === s.length - 1 : l > -1;
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
    return Jm(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return Zm(this.store.getState().dragOffset);
  }
  constructor(t, n) {
    this.store = t, this.registry = n;
  }
}
const Gl = typeof global < "u" ? global : self, Rd = Gl.MutationObserver || Gl.WebKitMutationObserver;
function Nd(e) {
  return function() {
    const n = setTimeout(o, 0), r = setInterval(o, 50);
    function o() {
      clearTimeout(n), clearInterval(r), e();
    }
  };
}
function ny(e) {
  let t = 1;
  const n = new Rd(e), r = document.createTextNode("");
  return n.observe(r, {
    characterData: !0
  }), function() {
    t = -t, r.data = t;
  };
}
const ry = typeof Rd == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  ny
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  Nd
);
class oy {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(t) {
    const { queue: n, requestFlush: r } = this;
    n.length || (r(), this.flushing = !0), n[n.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const n = this.index;
        if (this.index++, t[n].call(), this.index > this.capacity) {
          for (let r = 0, o = t.length - this.index; r < o; r++)
            t[r] = t[r + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = ry(this.flush), this.requestErrorThrow = Nd(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class iy {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, n) {
    this.onError = t, this.release = n, this.task = null;
  }
}
class sy {
  create(t) {
    const n = this.freeTasks, r = n.length ? n.pop() : new iy(
      this.onError,
      (o) => n[n.length] = o
    );
    return r.task = t, r;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const Md = new oy(), ay = new sy(Md.registerPendingError);
function ly(e) {
  Md.enqueueTask(ay.create(e));
}
const ga = "dnd-core/ADD_SOURCE", ma = "dnd-core/ADD_TARGET", ya = "dnd-core/REMOVE_SOURCE", ci = "dnd-core/REMOVE_TARGET";
function cy(e) {
  return {
    type: ga,
    payload: {
      sourceId: e
    }
  };
}
function uy(e) {
  return {
    type: ma,
    payload: {
      targetId: e
    }
  };
}
function dy(e) {
  return {
    type: ya,
    payload: {
      sourceId: e
    }
  };
}
function fy(e) {
  return {
    type: ci,
    payload: {
      targetId: e
    }
  };
}
function hy(e) {
  K(typeof e.canDrag == "function", "Expected canDrag to be a function."), K(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), K(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function py(e) {
  K(typeof e.canDrop == "function", "Expected canDrop to be a function."), K(typeof e.hover == "function", "Expected hover to be a function."), K(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function ps(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(
      (n) => ps(n, !1)
    );
    return;
  }
  K(typeof e == "string" || typeof e == "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var Le;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(Le || (Le = {}));
let gy = 0;
function my() {
  return gy++;
}
function yy(e) {
  const t = my().toString();
  switch (e) {
    case Le.SOURCE:
      return `S${t}`;
    case Le.TARGET:
      return `T${t}`;
    default:
      throw new Error(`Unknown Handler Role: ${e}`);
  }
}
function Kl(e) {
  switch (e[0]) {
    case "S":
      return Le.SOURCE;
    case "T":
      return Le.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${e}`);
  }
}
function Xl(e, t) {
  const n = e.entries();
  let r = !1;
  do {
    const { done: o, value: [, i] } = n.next();
    if (i === t)
      return !0;
    r = !!o;
  } while (!r);
  return !1;
}
class vy {
  addSource(t, n) {
    ps(t), hy(n);
    const r = this.addHandler(Le.SOURCE, t, n);
    return this.store.dispatch(cy(r)), r;
  }
  addTarget(t, n) {
    ps(t, !0), py(n);
    const r = this.addHandler(Le.TARGET, t, n);
    return this.store.dispatch(uy(r)), r;
  }
  containsHandler(t) {
    return Xl(this.dragSources, t) || Xl(this.dropTargets, t);
  }
  getSource(t, n = !1) {
    return K(this.isSourceId(t), "Expected a valid source ID."), n && t === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(t);
  }
  getTarget(t) {
    return K(this.isTargetId(t), "Expected a valid target ID."), this.dropTargets.get(t);
  }
  getSourceType(t) {
    return K(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t);
  }
  getTargetType(t) {
    return K(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t);
  }
  isSourceId(t) {
    return Kl(t) === Le.SOURCE;
  }
  isTargetId(t) {
    return Kl(t) === Le.TARGET;
  }
  removeSource(t) {
    K(this.getSource(t), "Expected an existing source."), this.store.dispatch(dy(t)), ly(() => {
      this.dragSources.delete(t), this.types.delete(t);
    });
  }
  removeTarget(t) {
    K(this.getTarget(t), "Expected an existing target."), this.store.dispatch(fy(t)), this.dropTargets.delete(t), this.types.delete(t);
  }
  pinSource(t) {
    const n = this.getSource(t);
    K(n, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = n;
  }
  unpinSource() {
    K(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(t, n, r) {
    const o = yy(t);
    return this.types.set(o, n), t === Le.SOURCE ? this.dragSources.set(o, r) : t === Le.TARGET && this.dropTargets.set(o, r), o;
  }
  constructor(t) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = t;
  }
}
const xy = (e, t) => e === t;
function by(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function ky(e, t, n = xy) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; ++r)
    if (!n(e[r], t[r]))
      return !1;
  return !0;
}
function wy(e = kr, t) {
  switch (t.type) {
    case si:
      break;
    case ga:
    case ma:
    case ci:
    case ya:
      return kr;
    case ii:
    case ha:
    case li:
    case ai:
    default:
      return pa;
  }
  const { targetIds: n = [], prevTargetIds: r = [] } = t.payload, o = _m(n, r);
  if (!(o.length > 0 || !ky(n, r)))
    return kr;
  const s = r[r.length - 1], l = n[n.length - 1];
  return s !== l && (s && o.push(s), l && o.push(l)), o;
}
function Sy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function jy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Sy(e, o, n[o]);
    });
  }
  return e;
}
const Yl = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Cy(e = Yl, t) {
  const { payload: n } = t;
  switch (t.type) {
    case fa:
    case ii:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case si:
      return by(e.clientOffset, n.clientOffset) ? e : jy({}, e, {
        clientOffset: n.clientOffset
      });
    case li:
    case ai:
      return Yl;
    default:
      return e;
  }
}
function _y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      _y(e, o, n[o]);
    });
  }
  return e;
}
const Ey = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function Oy(e = Ey, t) {
  const { payload: n } = t;
  switch (t.type) {
    case ii:
      return wn({}, e, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case ha:
      return wn({}, e, {
        isSourcePublic: !0
      });
    case si:
      return wn({}, e, {
        targetIds: n.targetIds
      });
    case ci:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : wn({}, e, {
        targetIds: Cm(e.targetIds, n.targetId)
      });
    case ai:
      return wn({}, e, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case li:
      return wn({}, e, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e;
  }
}
function Ty(e = 0, t) {
  switch (t.type) {
    case ga:
    case ma:
      return e + 1;
    case ya:
    case ci:
      return e - 1;
    default:
      return e;
  }
}
function $y(e = 0) {
  return e + 1;
}
function Iy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Dy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Iy(e, o, n[o]);
    });
  }
  return e;
}
function Py(e = {}, t) {
  return {
    dirtyHandlerIds: wy(e.dirtyHandlerIds, {
      type: t.type,
      payload: Dy({}, t.payload, {
        prevTargetIds: jm(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Cy(e.dragOffset, t),
    refCount: Ty(e.refCount, t),
    dragOperation: Oy(e.dragOperation, t),
    stateId: $y(e.stateId)
  };
}
function zy(e, t = void 0, n = {}, r = !1) {
  const o = Ay(r), i = new ty(o, new vy(o)), s = new Ym(o, i), l = e(s, t, n);
  return s.receiveBackend(l), s;
}
function Ay(e) {
  const t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Pd(Py, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function Ry(e, t) {
  if (e == null) return {};
  var n = Ny(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ny(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
let Ql = 0;
const Oo = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var My = /* @__PURE__ */ P.memo(function(t) {
  var { children: n } = t, r = Ry(t, [
    "children"
  ]);
  const [o, i] = qy(r);
  return P.useEffect(() => {
    if (i) {
      const s = qd();
      return ++Ql, () => {
        --Ql === 0 && (s[Oo] = null);
      };
    }
  }, []), /* @__PURE__ */ a.jsx(Dd.Provider, {
    value: o,
    children: n
  });
});
function qy(e) {
  if ("manager" in e)
    return [
      {
        dragDropManager: e.manager
      },
      !1
    ];
  const t = Fy(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [
    t,
    n
  ];
}
function Fy(e, t = qd(), n, r) {
  const o = t;
  return o[Oo] || (o[Oo] = {
    dragDropManager: zy(e, t, n, r)
  }), o[Oo];
}
function qd() {
  return typeof global < "u" ? global : window;
}
var Li, Jl;
function Ly() {
  return Jl || (Jl = 1, Li = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var r, o, i;
      if (Array.isArray(t)) {
        if (r = t.length, r != n.length) return !1;
        for (o = r; o-- !== 0; )
          if (!e(t[o], n[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (i = Object.keys(t), r = i.length, r !== Object.keys(n).length) return !1;
      for (o = r; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
      for (o = r; o-- !== 0; ) {
        var s = i[o];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Li;
}
var By = Ly();
const Hy = /* @__PURE__ */ Rp(By), sn = typeof window < "u" ? P.useLayoutEffect : P.useEffect;
function Uy(e, t, n) {
  const [r, o] = P.useState(
    () => t(e)
  ), i = P.useCallback(() => {
    const s = t(e);
    Hy(r, s) || (o(s), n && n());
  }, [
    r,
    e,
    n
  ]);
  return sn(i), [
    r,
    i
  ];
}
function Vy(e, t, n) {
  const [r, o] = Uy(e, t, n);
  return sn(function() {
    const s = e.getHandlerId();
    if (s != null)
      return e.subscribeToStateChange(o, {
        handlerIds: [
          s
        ]
      });
  }, [
    e,
    o
  ]), r;
}
function Fd(e, t, n) {
  return Vy(
    t,
    e || (() => ({})),
    () => n.reconnect()
  );
}
function Ld(e, t) {
  const n = [];
  return typeof e != "function" && n.push(e), P.useMemo(() => typeof e == "function" ? e() : e, n);
}
function Wy(e) {
  return P.useMemo(
    () => e.hooks.dragSource(),
    [
      e
    ]
  );
}
function Gy(e) {
  return P.useMemo(
    () => e.hooks.dragPreview(),
    [
      e
    ]
  );
}
let Bi = !1, Hi = !1;
class Ky {
  receiveHandlerId(t) {
    this.sourceId = t;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    K(!Bi, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Bi = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      Bi = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    K(!Hi, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Hi = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      Hi = !1;
    }
  }
  subscribeToStateChange(t, n) {
    return this.internalMonitor.subscribeToStateChange(t, n);
  }
  isDraggingSource(t) {
    return this.internalMonitor.isDraggingSource(t);
  }
  isOverTarget(t, n) {
    return this.internalMonitor.isOverTarget(t, n);
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
  subscribeToOffsetChange(t) {
    return this.internalMonitor.subscribeToOffsetChange(t);
  }
  canDragSource(t) {
    return this.internalMonitor.canDragSource(t);
  }
  canDropOnTarget(t) {
    return this.internalMonitor.canDropOnTarget(t);
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
  constructor(t) {
    this.sourceId = null, this.internalMonitor = t.getMonitor();
  }
}
let Ui = !1;
class Xy {
  receiveHandlerId(t) {
    this.targetId = t;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(t, n) {
    return this.internalMonitor.subscribeToStateChange(t, n);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    K(!Ui, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return Ui = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Ui = !1;
    }
  }
  isOver(t) {
    return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, t) : !1;
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
  constructor(t) {
    this.targetId = null, this.internalMonitor = t.getMonitor();
  }
}
function Yy(e, t, n) {
  const r = n.getRegistry(), o = r.addTarget(e, t);
  return [
    o,
    () => r.removeTarget(o)
  ];
}
function Qy(e, t, n) {
  const r = n.getRegistry(), o = r.addSource(e, t);
  return [
    o,
    () => r.removeSource(o)
  ];
}
function gs(e, t, n, r) {
  let o;
  if (o !== void 0)
    return !!o;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  const i = Object.keys(e), s = Object.keys(t);
  if (i.length !== s.length)
    return !1;
  const l = Object.prototype.hasOwnProperty.bind(t);
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    if (!l(u))
      return !1;
    const d = e[u], p = t[u];
    if (o = void 0, o === !1 || o === void 0 && d !== p)
      return !1;
  }
  return !0;
}
function ms(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Jy(e) {
  if (typeof e.type == "string")
    return;
  const t = e.type.displayName || e.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function Zy(e) {
  return (t = null, n = null) => {
    if (!P.isValidElement(t)) {
      const i = t;
      return e(i, n), i;
    }
    const r = t;
    return Jy(r), ev(r, n ? (i) => e(i, n) : e);
  };
}
function Bd(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    if (n.endsWith("Ref"))
      t[n] = e[n];
    else {
      const o = Zy(r);
      t[n] = () => o;
    }
  }), t;
}
function Zl(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function ev(e, t) {
  const n = e.ref;
  return K(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? P.cloneElement(e, {
    ref: (r) => {
      Zl(n, r), Zl(t, r);
    }
  }) : P.cloneElement(e, {
    ref: t
  });
}
class tv {
  receiveHandlerId(t) {
    this.handlerId !== t && (this.handlerId = t, this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(t) {
    this.dragSourceOptionsInternal = t;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(t) {
    this.dragPreviewOptionsInternal = t;
  }
  reconnect() {
    const t = this.reconnectDragSource();
    this.reconnectDragPreview(t);
  }
  reconnectDragSource() {
    const t = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return n && this.disconnectDragSource(), this.handlerId ? t ? (n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = t, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, t, this.dragSourceOptions)), n) : (this.lastConnectedDragSource = t, n) : n;
  }
  reconnectDragPreview(t = !1) {
    const n = this.dragPreview, r = t || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (r && this.disconnectDragPreview(), !!this.handlerId) {
      if (!n) {
        this.lastConnectedDragPreview = n;
        return;
      }
      r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions));
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
    return !gs(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !gs(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
  constructor(t) {
    this.hooks = Bd({
      dragSource: (n, r) => {
        this.clearDragSource(), this.dragSourceOptions = r || null, ms(n) ? this.dragSourceRef = n : this.dragSourceNode = n, this.reconnectDragSource();
      },
      dragPreview: (n, r) => {
        this.clearDragPreview(), this.dragPreviewOptions = r || null, ms(n) ? this.dragPreviewRef = n : this.dragPreviewNode = n, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = t;
  }
}
class nv {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    t && this.disconnectDropTarget();
    const n = this.dropTarget;
    if (this.handlerId) {
      if (!n) {
        this.lastConnectedDropTarget = n;
        return;
      }
      t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
    }
  }
  receiveHandlerId(t) {
    t !== this.handlerId && (this.handlerId = t, this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(t) {
    this.dropTargetOptionsInternal = t;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !gs(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
  constructor(t) {
    this.hooks = Bd({
      dropTarget: (n, r) => {
        this.clearDropTarget(), this.dropTargetOptions = r, ms(n) ? this.dropTargetRef = n : this.dropTargetNode = n, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = t;
  }
}
function rr() {
  const { dragDropManager: e } = P.useContext(Dd);
  return K(e != null, "Expected drag drop context"), e;
}
function rv(e, t) {
  const n = rr(), r = P.useMemo(
    () => new tv(n.getBackend()),
    [
      n
    ]
  );
  return sn(() => (r.dragSourceOptions = e || null, r.reconnect(), () => r.disconnectDragSource()), [
    r,
    e
  ]), sn(() => (r.dragPreviewOptions = t || null, r.reconnect(), () => r.disconnectDragPreview()), [
    r,
    t
  ]), r;
}
function ov() {
  const e = rr();
  return P.useMemo(
    () => new Ky(e),
    [
      e
    ]
  );
}
class iv {
  beginDrag() {
    const t = this.spec, n = this.monitor;
    let r = null;
    return typeof t.item == "object" ? r = t.item : typeof t.item == "function" ? r = t.item(n) : r = {}, r ?? null;
  }
  canDrag() {
    const t = this.spec, n = this.monitor;
    return typeof t.canDrag == "boolean" ? t.canDrag : typeof t.canDrag == "function" ? t.canDrag(n) : !0;
  }
  isDragging(t, n) {
    const r = this.spec, o = this.monitor, { isDragging: i } = r;
    return i ? i(o) : n === t.getSourceId();
  }
  endDrag() {
    const t = this.spec, n = this.monitor, r = this.connector, { end: o } = t;
    o && o(n.getItem(), n), r.reconnect();
  }
  constructor(t, n, r) {
    this.spec = t, this.monitor = n, this.connector = r;
  }
}
function sv(e, t, n) {
  const r = P.useMemo(
    () => new iv(e, t, n),
    [
      t,
      n
    ]
  );
  return P.useEffect(() => {
    r.spec = e;
  }, [
    e
  ]), r;
}
function av(e) {
  return P.useMemo(() => {
    const t = e.type;
    return K(t != null, "spec.type must be defined"), t;
  }, [
    e
  ]);
}
function lv(e, t, n) {
  const r = rr(), o = sv(e, t, n), i = av(e);
  sn(function() {
    if (i != null) {
      const [l, c] = Qy(i, o, r);
      return t.receiveHandlerId(l), n.receiveHandlerId(l), c;
    }
  }, [
    r,
    t,
    n,
    o,
    i
  ]);
}
function cv(e, t) {
  const n = Ld(e);
  K(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const r = ov(), o = rv(n.options, n.previewOptions);
  return lv(n, r, o), [
    Fd(n.collect, r, o),
    Wy(o),
    Gy(o)
  ];
}
function uv(e) {
  return P.useMemo(
    () => e.hooks.dropTarget(),
    [
      e
    ]
  );
}
function dv(e) {
  const t = rr(), n = P.useMemo(
    () => new nv(t.getBackend()),
    [
      t
    ]
  );
  return sn(() => (n.dropTargetOptions = e || null, n.reconnect(), () => n.disconnectDropTarget()), [
    e
  ]), n;
}
function fv() {
  const e = rr();
  return P.useMemo(
    () => new Xy(e),
    [
      e
    ]
  );
}
function hv(e) {
  const { accept: t } = e;
  return P.useMemo(() => (K(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [
    t
  ]), [
    t
  ]);
}
class pv {
  canDrop() {
    const t = this.spec, n = this.monitor;
    return t.canDrop ? t.canDrop(n.getItem(), n) : !0;
  }
  hover() {
    const t = this.spec, n = this.monitor;
    t.hover && t.hover(n.getItem(), n);
  }
  drop() {
    const t = this.spec, n = this.monitor;
    if (t.drop)
      return t.drop(n.getItem(), n);
  }
  constructor(t, n) {
    this.spec = t, this.monitor = n;
  }
}
function gv(e, t) {
  const n = P.useMemo(
    () => new pv(e, t),
    [
      t
    ]
  );
  return P.useEffect(() => {
    n.spec = e;
  }, [
    e
  ]), n;
}
function mv(e, t, n) {
  const r = rr(), o = gv(e, t), i = hv(e);
  sn(function() {
    const [l, c] = Yy(i, o, r);
    return t.receiveHandlerId(l), n.receiveHandlerId(l), c;
  }, [
    r,
    t,
    o,
    n,
    i.map(
      (s) => s.toString()
    ).join("|")
  ]);
}
function Hd(e, t) {
  const n = Ld(e), r = fv(), o = dv(n.options);
  return mv(n, r, o), [
    Fd(n.collect, r, o),
    uv(o)
  ];
}
function Ud(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
function yv(e, t) {
  return e.filter(
    (n) => n !== t
  );
}
function vv(e, t) {
  const n = /* @__PURE__ */ new Set(), r = (i) => n.add(i);
  e.forEach(r), t.forEach(r);
  const o = [];
  return n.forEach(
    (i) => o.push(i)
  ), o;
}
class xv {
  enter(t) {
    const n = this.entered.length, r = (o) => this.isNodeInDocument(o) && (!o.contains || o.contains(t));
    return this.entered = vv(this.entered.filter(r), [
      t
    ]), n === 0 && this.entered.length > 0;
  }
  leave(t) {
    const n = this.entered.length;
    return this.entered = yv(this.entered.filter(this.isNodeInDocument), t), n > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(t) {
    this.entered = [], this.isNodeInDocument = t;
  }
}
class bv {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((t) => {
      Object.defineProperty(this.item, t, {
        configurable: !0,
        enumerable: !0,
        get() {
          return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`), null;
        }
      });
    });
  }
  loadDataTransfer(t) {
    if (t) {
      const n = {};
      Object.keys(this.config.exposeProperties).forEach((r) => {
        const o = this.config.exposeProperties[r];
        o != null && (n[r] = {
          value: o(t, this.config.matchesTypes),
          configurable: !0,
          enumerable: !0
        });
      }), Object.defineProperties(this.item, n);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(t, n) {
    return n === t.getSourceId();
  }
  endDrag() {
  }
  constructor(t) {
    this.config = t, this.item = {}, this.initializeExposedProperties();
  }
}
const Vd = "__NATIVE_FILE__", Wd = "__NATIVE_URL__", Gd = "__NATIVE_TEXT__", Kd = "__NATIVE_HTML__", ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Vd,
  HTML: Kd,
  TEXT: Gd,
  URL: Wd
}, Symbol.toStringTag, { value: "Module" }));
function Vi(e, t, n) {
  const r = t.reduce(
    (o, i) => o || e.getData(i),
    ""
  );
  return r ?? n;
}
const ys = {
  [Vd]: {
    exposeProperties: {
      files: (e) => Array.prototype.slice.call(e.files),
      items: (e) => e.items,
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Files"
    ]
  },
  [Kd]: {
    exposeProperties: {
      html: (e, t) => Vi(e, t, ""),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [Wd]: {
    exposeProperties: {
      urls: (e, t) => Vi(e, t, "").split(`
`),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [Gd]: {
    exposeProperties: {
      text: (e, t) => Vi(e, t, ""),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function kv(e, t) {
  const n = ys[e];
  if (!n)
    throw new Error(`native type ${e} has no configuration`);
  const r = new bv(n);
  return r.loadDataTransfer(t), r;
}
function Wi(e) {
  if (!e)
    return null;
  const t = Array.prototype.slice.call(e.types || []);
  return Object.keys(ys).filter((n) => {
    const r = ys[n];
    return r != null && r.matchesTypes ? r.matchesTypes.some(
      (o) => t.indexOf(o) > -1
    ) : !1;
  })[0] || null;
}
const wv = Ud(
  () => /firefox/i.test(navigator.userAgent)
), Xd = Ud(
  () => !!window.safari
);
class tc {
  interpolate(t) {
    const { xs: n, ys: r, c1s: o, c2s: i, c3s: s } = this;
    let l = n.length - 1;
    if (t === n[l])
      return r[l];
    let c = 0, u = s.length - 1, d;
    for (; c <= u; ) {
      d = Math.floor(0.5 * (c + u));
      const h = n[d];
      if (h < t)
        c = d + 1;
      else if (h > t)
        u = d - 1;
      else
        return r[d];
    }
    l = Math.max(0, u);
    const p = t - n[l], f = p * p;
    return r[l] + o[l] * p + i[l] * f + s[l] * p * f;
  }
  constructor(t, n) {
    const { length: r } = t, o = [];
    for (let h = 0; h < r; h++)
      o.push(h);
    o.sort(
      (h, m) => t[h] < t[m] ? -1 : 1
    );
    const i = [], s = [];
    let l, c;
    for (let h = 0; h < r - 1; h++)
      l = t[h + 1] - t[h], c = n[h + 1] - n[h], i.push(l), s.push(c / l);
    const u = [
      s[0]
    ];
    for (let h = 0; h < i.length - 1; h++) {
      const m = s[h], g = s[h + 1];
      if (m * g <= 0)
        u.push(0);
      else {
        l = i[h];
        const y = i[h + 1], v = l + y;
        u.push(3 * v / ((v + y) / m + (v + l) / g));
      }
    }
    u.push(s[s.length - 1]);
    const d = [], p = [];
    let f;
    for (let h = 0; h < u.length - 1; h++) {
      f = s[h];
      const m = u[h], g = 1 / i[h], y = m + u[h + 1] - f - f;
      d.push((f - m - y) * g), p.push(y * g * g);
    }
    this.xs = t, this.ys = n, this.c1s = u, this.c2s = d, this.c3s = p;
  }
}
const Sv = 1;
function Yd(e) {
  const t = e.nodeType === Sv ? e : e.parentElement;
  if (!t)
    return null;
  const { top: n, left: r } = t.getBoundingClientRect();
  return {
    x: r,
    y: n
  };
}
function oo(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function jv(e) {
  var t;
  return e.nodeName === "IMG" && (wv() || !(!((t = document.documentElement) === null || t === void 0) && t.contains(e)));
}
function Cv(e, t, n, r) {
  let o = e ? t.width : n, i = e ? t.height : r;
  return Xd() && e && (i /= window.devicePixelRatio, o /= window.devicePixelRatio), {
    dragPreviewWidth: o,
    dragPreviewHeight: i
  };
}
function _v(e, t, n, r, o) {
  const i = jv(t), l = Yd(i ? e : t), c = {
    x: n.x - l.x,
    y: n.y - l.y
  }, { offsetWidth: u, offsetHeight: d } = e, { anchorX: p, anchorY: f } = r, { dragPreviewWidth: h, dragPreviewHeight: m } = Cv(i, t, u, d), g = () => {
    let j = new tc([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      c.y,
      // Align at the center
      c.y / d * m,
      // Dock to the bottom
      c.y + m - d
    ]).interpolate(f);
    return Xd() && i && (j += (window.devicePixelRatio - 1) * m), j;
  }, y = () => new tc([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    c.x,
    // Align at the center
    c.x / u * h,
    // Dock to the right
    c.x + h - u
  ]).interpolate(p), { offsetX: v, offsetY: w } = o, b = v === 0 || v, k = w === 0 || w;
  return {
    x: b ? v : y(),
    y: k ? w : g()
  };
}
class Ev {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var t;
    return !((t = this.globalContext) === null || t === void 0) && t.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var t;
    return ((t = this.optionsArgs) === null || t === void 0 ? void 0 : t.rootElement) || this.window;
  }
  constructor(t, n) {
    this.ownerDocument = null, this.globalContext = t, this.optionsArgs = n;
  }
}
function Ov(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ov(e, o, n[o]);
    });
  }
  return e;
}
class Tv {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var t, n;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((t = this.dragStartSourceIds) === null || t === void 0 ? void 0 : t.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const t = this.rootElement;
    if (t !== void 0) {
      if (t.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      t.__isReactDndBackendSetUp = !0, this.addEventListeners(t);
    }
  }
  teardown() {
    const t = this.rootElement;
    if (t !== void 0 && (t.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var n;
      (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(t, n, r) {
    return this.sourcePreviewNodeOptions.set(t, r), this.sourcePreviewNodes.set(t, n), () => {
      this.sourcePreviewNodes.delete(t), this.sourcePreviewNodeOptions.delete(t);
    };
  }
  connectDragSource(t, n, r) {
    this.sourceNodes.set(t, n), this.sourceNodeOptions.set(t, r);
    const o = (s) => this.handleDragStart(s, t), i = (s) => this.handleSelectStart(s);
    return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", o), n.addEventListener("selectstart", i), () => {
      this.sourceNodes.delete(t), this.sourceNodeOptions.delete(t), n.removeEventListener("dragstart", o), n.removeEventListener("selectstart", i), n.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(t, n) {
    const r = (s) => this.handleDragEnter(s, t), o = (s) => this.handleDragOver(s, t), i = (s) => this.handleDrop(s, t);
    return n.addEventListener("dragenter", r), n.addEventListener("dragover", o), n.addEventListener("drop", i), () => {
      n.removeEventListener("dragenter", r), n.removeEventListener("dragover", o), n.removeEventListener("drop", i);
    };
  }
  addEventListeners(t) {
    t.addEventListener && (t.addEventListener("dragstart", this.handleTopDragStart), t.addEventListener("dragstart", this.handleTopDragStartCapture, !0), t.addEventListener("dragend", this.handleTopDragEndCapture, !0), t.addEventListener("dragenter", this.handleTopDragEnter), t.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.addEventListener("dragover", this.handleTopDragOver), t.addEventListener("dragover", this.handleTopDragOverCapture, !0), t.addEventListener("drop", this.handleTopDrop), t.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(t) {
    t.removeEventListener && (t.removeEventListener("dragstart", this.handleTopDragStart), t.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), t.removeEventListener("dragend", this.handleTopDragEndCapture, !0), t.removeEventListener("dragenter", this.handleTopDragEnter), t.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.removeEventListener("dragover", this.handleTopDragOver), t.removeEventListener("dragover", this.handleTopDragOverCapture, !0), t.removeEventListener("drop", this.handleTopDrop), t.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    const t = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(t);
    return nc({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, n || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const t = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(t);
    return nc({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, n || {});
  }
  isDraggingNativeItem() {
    const t = this.monitor.getItemType();
    return Object.keys(ec).some(
      (n) => ec[n] === t
    );
  }
  beginDragNativeItem(t, n) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = kv(t, n), this.currentNativeHandle = this.registry.addSource(t, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(t) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = t;
    const n = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var r;
      return (r = this.rootElement) === null || r === void 0 ? void 0 : r.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, n);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var t;
        (t = this.window) === null || t === void 0 || t.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(t, n) {
    t.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
  }
  handleDragEnter(t, n) {
    this.dragEnterTargetIds.unshift(n);
  }
  handleDragOver(t, n) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
  }
  handleDrop(t, n) {
    this.dropTargetIds.unshift(n);
  }
  constructor(t, n, r) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (o) => {
      const i = this.sourceNodes.get(o);
      return i && Yd(i) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (o) => !!(o && this.document && this.document.body && this.document.body.contains(o)), this.endDragIfSourceWasRemovedFromDOM = () => {
      const o = this.currentDragSourceNode;
      o == null || this.isNodeInDocument(o) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (o) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(o || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (o) => {
      if (o.defaultPrevented)
        return;
      const { dragStartSourceIds: i } = this;
      this.dragStartSourceIds = null;
      const s = oo(o);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(i || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: s
      });
      const { dataTransfer: l } = o, c = Wi(l);
      if (this.monitor.isDragging()) {
        if (l && typeof l.setDragImage == "function") {
          const d = this.monitor.getSourceId(), p = this.sourceNodes.get(d), f = this.sourcePreviewNodes.get(d) || p;
          if (f) {
            const { anchorX: h, anchorY: m, offsetX: g, offsetY: y } = this.getCurrentSourcePreviewNodeOptions(), b = _v(p, f, s, {
              anchorX: h,
              anchorY: m
            }, {
              offsetX: g,
              offsetY: y
            });
            l.setDragImage(f, b.x, b.y);
          }
        }
        try {
          l == null || l.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(o.target);
        const { captureDraggingState: u } = this.getCurrentSourcePreviewNodeOptions();
        u ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (c)
        this.beginDragNativeItem(c);
      else {
        if (l && !l.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
          return;
        o.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (o) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(o.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(o.target) || this.monitor.isDragging())
        return;
      const { dataTransfer: l } = o, c = Wi(l);
      c && this.beginDragNativeItem(c, l);
    }, this.handleTopDragEnter = (o) => {
      const { dragEnterTargetIds: i } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = o.altKey, i.length > 0 && this.actions.hover(i, {
        clientOffset: oo(o)
      }), i.some(
        (l) => this.monitor.canDropOnTarget(l)
      ) && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (o) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(o.dataTransfer);
      }
    }, this.handleTopDragOver = (o) => {
      const { dragOverTargetIds: i } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = o.altKey, this.lastClientOffset = oo(o), this.scheduleHover(i), (i || []).some(
        (l) => this.monitor.canDropOnTarget(l)
      ) ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (o) => {
      this.isDraggingNativeItem() && o.preventDefault(), this.enterLeaveCounter.leave(o.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (o) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        o.preventDefault(), (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(o.dataTransfer);
      } else Wi(o.dataTransfer) && o.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (o) => {
      const { dropTargetIds: i } = this;
      this.dropTargetIds = [], this.actions.hover(i, {
        clientOffset: oo(o)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (o) => {
      const i = o.target;
      typeof i.dragDrop == "function" && (i.tagName === "INPUT" || i.tagName === "SELECT" || i.tagName === "TEXTAREA" || i.isContentEditable || (o.preventDefault(), i.dragDrop()));
    }, this.options = new Ev(n, r), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new xv(this.isNodeInDocument);
  }
}
const $v = function(t, n, r) {
  return new Tv(t, n, r);
}, va = Rt("scanconf/runScan"), Qd = Rt("scanconf/runFullScan"), ui = Rt(
  "scanconf/showScanconfOperation"
), Jd = Rt("scanconf/loadUpdatedScanconf"), di = Rt("scanconf/loadPlaybook"), Iv = Rt("http/sendHttpRequest"), Dv = Rt("http/showHttpResponse"), Pv = Rt("http/showHttpError"), zv = {
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
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
}, Zd = gn({
  name: "scanconf",
  initialState: zv,
  reducers: {
    saveScanconf: (e) => {
    },
    saveSettings: (e, { payload: t }) => {
      e.playbook.runtimeConfiguration = { ...e.playbook.runtimeConfiguration, ...t };
    },
    saveRequest: (e, {
      payload: { ref: t, stage: n }
    }) => {
      t.type === "operation" ? e.playbook.operations[t.id].request = n : e.playbook.requests && (e.playbook.requests[t.id] = n);
    },
    removeRequest: (e, { payload: t }) => {
      var n;
      t.type === "request" && ((n = e.playbook.requests) == null ? void 0 : n[t.id]) !== void 0 && delete e.playbook.requests[t.id];
    },
    saveCredential: (e, {
      payload: { group: t, id: n, credential: r }
    }) => {
      var i;
      const o = Object.keys(r.methods || {})[0];
      e.selectedSubcredential !== void 0 && ((i = r == null ? void 0 : r.methods) == null ? void 0 : i[e.selectedSubcredential]) === void 0 && (e.selectedSubcredential = o), r.methods[r.default] === void 0 && (r.default = o), e.playbook.authenticationDetails[t][n] = r;
    },
    saveEnvironment: (e, {
      payload: { name: t, environment: n }
    }) => {
      e.playbook.environments[t] = n;
    },
    addCredential: (e, {
      payload: { credentialGroup: t, id: n, credential: r }
    }) => {
      e.playbook.authenticationDetails[t] === void 0 && (e.playbook.authenticationDetails[t] = {}), e.playbook.authenticationDetails[t][n] = r;
    },
    removeCredential: (e, { payload: { credentialGroup: t, id: n } }) => {
      var r, o;
      if (delete e.playbook.authenticationDetails[t][n], e.selectedCredentialGroup === t && e.selectedCredential === n) {
        const i = (r = Object.keys(
          e.playbook.authenticationDetails[t]
        )) == null ? void 0 : r[0];
        if (i) {
          e.selectedCredential = i;
          const s = (o = Object.keys(
            e.playbook.authenticationDetails[t][i].methods
          )) == null ? void 0 : o[0];
          s && (e.selectedSubcredential = s);
        } else
          e.selectedCredential = void 0, e.selectedSubcredential = void 0;
      }
    },
    selectCredential: (e, { payload: t }) => {
      var n, r, o;
      e.selectedCredentialGroup = t.group, e.selectedCredential = t.credential, e.selectedSubcredential = Object.keys(
        ((o = (r = (n = e.playbook.authenticationDetails) == null ? void 0 : n[t.group]) == null ? void 0 : r[t.credential]) == null ? void 0 : o.methods) || {}
      )[0];
    },
    selectSubcredential: (e, { payload: t }) => {
      e.selectedSubcredential = t;
    },
    addAuthorizationTest: (e, {
      payload: { id: t, test: n }
    }) => {
      e.playbook.authorizationTests[t] = n;
    },
    saveAuthorizationTest: (e, {
      payload: { id: t, test: n }
    }) => {
      e.playbook.authorizationTests[t] = n;
    },
    removeAuthorizationTest: (e, { payload: { id: t } }) => {
      var n;
      delete e.playbook.authorizationTests[t], e.selectedAuthorizationTest = (n = Object.keys(e.playbook.authorizationTests)) == null ? void 0 : n[0];
    },
    selectAuthorizationTest: (e, { payload: { id: t } }) => {
      e.selectedAuthorizationTest = t;
    },
    saveOperationReference: (e, {
      payload: { location: t, reference: n }
    }) => {
      io(e.playbook, t)[t.stageIndex] = n;
    },
    addStage: (e, {
      payload: { container: t, stage: n }
    }) => {
      io(e.playbook, t).push(n);
    },
    moveStage: (e, {
      payload: { location: t, to: n }
    }) => {
      Nv(io(e.playbook, t), t.stageIndex, n);
    },
    removeStage: (e, { payload: t }) => {
      io(e.playbook, t).splice(t.stageIndex, 1);
    },
    updateOperationAuthorizationTests: (e, {
      payload: { operationId: t, authorizationTests: n }
    }) => {
      e.playbook.operations[t].authorizationTests = n;
    },
    customizeOperation: (e, { payload: t }) => {
      e.playbook.operations[t].customized = !0;
    },
    removeCustomizationForOperation: (e, { payload: t }) => {
      e.playbook.operations[t].customTests = void 0, e.playbook.operations[t].authorizationTests = [], e.playbook.operations[t].before = [], e.playbook.operations[t].after = [], e.playbook.operations[t].scenarios = [
        {
          key: "happy.path",
          requests: [
            {
              fuzzing: !0,
              ref: { type: "operation", id: t }
            }
          ],
          fuzzing: !0
        }
      ], e.playbook.operations[t].customized = !1;
    },
    createVariable: (e, {
      payload: { name: t, location: n, jsonPointer: r, ref: o, statusCode: i }
    }) => {
      const s = o.type === "operation" ? e.playbook.operations[o.id].request : e.playbook.requests[o.id], l = Ao(i), c = s.responses[i] ? i : l !== void 0 && s.responses[l] ? l : "default";
      s.responses[c] === void 0 && (s.responses[c] = {
        variableAssignments: {},
        expectations: c
      }), s.responses[c].variableAssignments[t] = {
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
    e.addCase(di, (t, { payload: { oas: n, playbook: r } }) => {
      var o, i, s, l, c;
      t.oas = n, t.playbook = r, t.servers = ig(n), t.selectedCredentialGroup = 0, t.selectedCredential = (i = Object.keys(((o = r == null ? void 0 : r.authenticationDetails) == null ? void 0 : o[0]) || {})) == null ? void 0 : i[0], t.selectedCredential !== void 0 && (t.selectedSubcredential = (l = Object.keys(
        (s = r == null ? void 0 : r.authenticationDetails[0][t.selectedCredential]) == null ? void 0 : s.methods
      )) == null ? void 0 : l[0]), t.selectedAuthorizationTest = (c = Object.keys((r == null ? void 0 : r.authorizationTests) || {})) == null ? void 0 : c[0];
    });
  }
});
function io(e, t) {
  return t.container === "operationScenarios" ? e.operations[t.operationId].scenarios[t.scenarioIndex].requests : t.container === "operationBefore" ? e.operations[t.operationId].before : t.container === "operationAfter" ? e.operations[t.operationId].after : t.container === "globalBefore" ? e.before : t.container === "globalAfter" ? e.after : t.container === "credential" ? e.authenticationDetails[t.group][t.credentialId].methods[t.subCredentialId].requests : null;
}
const {
  saveSettings: ef,
  saveEnvironment: tf,
  saveScanconf: h4,
  addCredential: xa,
  removeCredential: ba,
  addStage: Mt,
  moveStage: qt,
  removeStage: Ft,
  saveOperationReference: Lt,
  saveCredential: ka,
  selectCredential: No,
  selectSubcredential: Mo,
  addAuthorizationTest: nf,
  saveAuthorizationTest: rf,
  removeAuthorizationTest: of,
  selectAuthorizationTest: rc,
  saveRequest: Ur,
  removeRequest: sf,
  updateOperationAuthorizationTests: vs,
  customizeOperation: Av,
  removeCustomizationForOperation: af,
  createVariable: wa
} = Zd.actions, Rv = Zd.reducer;
function Nv(e, t, n) {
  const r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    const o = n < 0 ? e.length + n : n, [i] = e.splice(t, 1);
    e.splice(o, 0, i);
  }
}
const Mv = {}, lf = gn({
  name: "generalError",
  initialState: Mv,
  reducers: {
    showGeneralError: (e, t) => {
      e.error = t.payload;
    }
  }
}), qv = dd, { showGeneralError: vt } = lf.actions, Fv = lf.reducer;
function fi(e, t) {
  if (e.auth.length === 0)
    return t;
  const [n, ...r] = e.auth, o = Mn(t), i = Mn(o.results);
  return fi({ auth: r }, i.auth[n].execution);
}
function Kt(e, t) {
  return Mn(fi(e, t));
}
function ht(e, t) {
  return Mn(Kt(e, t).results);
}
function oc(e, t) {
  const n = e.auth.slice(0, -1);
  return Mn(Mn(fi({ auth: n }, t)).results);
}
const cf = {
  "playbook-started": function(e, t, n) {
    fi(e, t).push({
      name: n.name,
      status: "pending",
      results: []
    });
  },
  "request-started": function(e, t, n) {
    Kt(e, t).results.push({
      ref: n.ref,
      auth: {},
      variablesAssigned: [],
      status: "pending"
    });
  },
  "auth-started": function(e, t, n) {
    ht(e, t).auth[n.name] = {
      execution: []
    }, e.auth.push(n.name);
  },
  "auth-finished": function(e, t, n) {
    e.auth.pop();
  },
  "auth-aborted": function(e, t, n) {
    const r = e.auth.pop();
    ht(e, t).auth[r].error = n.error;
  },
  "playbook-finished": function(e, t, n) {
    Kt(e, t).status = "success";
  },
  "playbook-aborted": function(e, t, n) {
    const r = Kt(e, t);
    r.status = "failure", r.error = n.error;
  },
  "payload-variables-substituted": function(e, t, n) {
    ht(e, t).variablesReplaced = {
      stack: n.stack,
      found: n.found,
      missing: n.missing
    };
  },
  "credential-variables-substituted": function(e, t, n) {
    const r = oc(e, t);
    r.auth[n.name].result = n.result, r.auth[n.name].variables = {
      missing: n.missing,
      found: n.found,
      stack: n.stack
    };
  },
  "credential-retrieved-from-cache": function(e, t, n) {
    const r = oc(e, t);
    r.auth[n.name].result = n.result;
  },
  "http-request-prepared": function(e, t, n) {
    const r = ht(e, t);
    r.httpRequest = n.request, r.operationId = n.operationId;
  },
  "http-request-prepare-error": function(e, t, n) {
    const r = ht(e, t);
    r.httpRequestPrepareError = n.error, r.status = "failure", Kt(e, t).status = "failure";
  },
  "http-response-received": function(e, t, n) {
    const r = ht(e, t);
    r.httpResponse = n.response, r.status = "success";
  },
  "http-error-received": function(e, t, n) {
    const r = ht(e, t);
    r.httpError = n.error, r.status = "failure", Kt(e, t).status = "failure";
  },
  "variables-assigned": function(e, t, n) {
    ht(e, t).variablesAssigned.push(...n.assignments);
  },
  "response-processing-error": function(e, t, n) {
    const r = ht(e, t);
    r.responseProcessingError = n.error, r.status = "failure", Kt(e, t).status = "failure";
  }
};
function hi({
  tryCurrent: e,
  tryResult: t
}, n) {
  cf[n.event](e, t, n);
}
function pi({
  mockCurrent: e,
  mockResult: t
}, n) {
  cf[n.event](e, t, n);
}
function Mn(e) {
  return e[e.length - 1];
}
function Ke(e, t) {
  return e.filter((n) => n.name === t).pop();
}
const Lv = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: []
}, uf = gn({
  name: "auth",
  initialState: Lv,
  reducers: {
    startTryAuthentication: (e, { payload: t }) => {
    },
    resetTryAuthentication: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addTryAuthenticationStep: (e, { payload: t }) => {
      hi(e, t);
    },
    resetMockAuthRequestsExecution: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [];
    },
    addMockAuthRequestsExecutionStep: (e, { payload: t }) => {
      pi(e, t);
    }
  },
  extraReducers: (e) => {
    e.addMatcher(
      Jn(
        No,
        Mo,
        ka,
        xa,
        ba
      ),
      (t, n) => {
        t.tryCurrent = { auth: [] }, t.tryResult = [];
      }
    );
  }
}), {
  startTryAuthentication: df,
  resetTryAuthentication: Bv,
  addTryAuthenticationStep: Gi,
  resetMockAuthRequestsExecution: Hv,
  addMockAuthRequestsExecutionStep: Uv
} = uf.actions, Vv = uf.reducer, Wv = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  selected: "before"
}, ff = gn({
  name: "global",
  initialState: Wv,
  reducers: {
    selectGlobal: (e, { payload: t }) => {
      e.selected = t, e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    startTryGlobal: (e, { payload: t }) => {
    },
    resetTryGlobal: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addTryGlobalStep: (e, { payload: t }) => {
      hi(e, t);
    },
    resetMockGlobal: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [];
    },
    addMockGlobalStep: (e, { payload: t }) => {
      pi(e, t);
    }
  }
}), {
  selectGlobal: hf,
  startTryGlobal: xs,
  resetTryGlobal: Gv,
  addTryGlobalStep: Kv,
  resetMockGlobal: Xv,
  addMockGlobalStep: Yv
} = ff.actions, Qv = ff.reducer, Jv = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  scenarioId: 0
}, pf = gn({
  name: "operations",
  initialState: Jv,
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
      pi(e, t);
    },
    startTryExecution: (e, { payload: t }) => {
    },
    resetTryExecution: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addTryExecutionStep: (e, { payload: t }) => {
      hi(e, t);
    }
  },
  extraReducers: (e) => {
    e.addCase(ui, (t, { payload: { oas: n, path: r, method: o } }) => {
      t.operationId = void 0;
    });
  }
}), {
  setOperationId: bs,
  setScenarioId: gf,
  resetMockOperationExecution: Zv,
  startTryExecution: mf,
  addMockOperationExecutionStep: ex,
  resetTryExecution: tx,
  addTryExecutionStep: nx
} = pf.actions, rx = pf.reducer, ox = {
  tryCurrent: { auth: [] },
  tryResult: [],
  mockCurrent: { auth: [] },
  mockResult: [],
  mockMissingVariables: []
}, yf = gn({
  name: "requests",
  initialState: ox,
  reducers: {
    setRequestId: (e, { payload: t }) => {
      e.ref = t, e.tryResult = [];
    },
    executeRequest: (e, t) => {
    },
    resetExecuteRequest: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addExecutionStep: (e, { payload: t }) => {
      hi(e, t);
    },
    resetMockRequestExecution: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [], e.mockMissingVariables = [];
    },
    addMockRequestExecutionStep: (e, { payload: t }) => {
      pi(e, t), (t.event === "payload-variables-substituted" || t.event === "credential-variables-substituted") && e.mockMissingVariables.push(...t.missing.map((n) => n.name));
    }
  },
  extraReducers: (e) => {
    e.addCase(ui, (t, { payload: { oas: n, path: r, method: o } }) => {
      const i = sg(n, r, o), s = gd(i == null ? void 0 : i.operationId, r, o);
      t.ref = { id: s, type: "operation" };
    });
  }
}), {
  setRequestId: Zt,
  resetExecuteRequest: ix,
  addExecutionStep: sx,
  executeRequest: Sa,
  resetMockRequestExecution: ax,
  addMockRequestExecutionStep: lx
} = yf.actions, cx = yf.reducer, ux = {
  changes: [],
  scanconf: "",
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: { "/": { get: { responses: {} } } }
  },
  updating: !1
}, vf = gn({
  name: "scanconfUpdate",
  initialState: ux,
  reducers: {
    showChanges: (e, t) => {
      e.changes = t.payload.changes, e.scanconf = t.payload.scanconf, e.oas = t.payload.oas, e.updating = !1;
    },
    updateScanconf: (e) => {
      e.updating = !0;
    },
    skipScanconfUpdate: (e) => {
    }
  }
}), { updateScanconf: xf, showChanges: dx, skipScanconfUpdate: bf } = vf.actions, fx = vf.reducer, hx = {
  theme: Lp,
  client: Xg,
  scanconf: Rv,
  scanconfUpdate: fx,
  operations: rx,
  requests: cx,
  auth: Vv,
  router: Fp,
  env: yg,
  prefs: bg,
  config: gg,
  global: Qv,
  generalError: Fv,
  confirmationDialog: qp
}, px = {
  changeTheme: Mp,
  showHttpError: Pv,
  showHttpResponse: Dv,
  showScanconfOperation: ui,
  loadUpdatedScanconf: Jd,
  loadEnv: mg,
  loadConfig: pg,
  loadPrefs: xg,
  showGeneralError: vt
}, gx = (e, t) => Np({
  reducer: hx,
  middleware: (n) => n().prepend(e.middleware).concat(Bp),
  preloadedState: {
    theme: t
  }
}), fe = () => Hp(), Q = dd;
function Ee({ isOpen: e, setOpen: t, ...n }) {
  return t !== void 0 && e !== void 0 ? kf({ ...n, isOpen: e, setOpen: t }) : mx({ ...n });
}
function mx({
  defaultOpen: e,
  ...t
}) {
  const [n, r] = P.useState(e !== void 0 ? e : !0);
  return kf({ ...t, isOpen: n, setOpen: r });
}
function kf({
  isOpen: e,
  setOpen: t,
  title: n,
  count: r,
  menu: o,
  children: i
}) {
  return /* @__PURE__ */ a.jsxs(yx, { children: [
    /* @__PURE__ */ a.jsxs(
      vx,
      {
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), t(!e);
        },
        children: [
          e ? /* @__PURE__ */ a.jsx(em, {}) : /* @__PURE__ */ a.jsx(Fr, {}),
          /* @__PURE__ */ a.jsxs(xx, { children: [
            typeof n == "string" ? /* @__PURE__ */ a.jsx(bx, { children: n }) : n,
            !!r && /* @__PURE__ */ a.jsx(jx, { children: r }),
            o && /* @__PURE__ */ a.jsx(kx, { children: o })
          ] })
        ]
      }
    ),
    e && /* @__PURE__ */ a.jsxs(wx, { children: [
      /* @__PURE__ */ a.jsx(Sx, {}),
      /* @__PURE__ */ a.jsx("div", { children: i })
    ] })
  ] });
}
const yx = S.div`
  margin-top: 8px;
  margin-bottom: 8px;
`, vx = S.div`
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
`, xx = S.div`
  flex: 1;
  display: flex;
  gap: 8px;
`, bx = S.div`
  font-size: 14px;
  font-weight: 600;
`, kx = S.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, wx = S.div`
  display: flex;
  flex-direction: row;
  > div:last-child {
    flex: 1;
    margin-left: 8px;
  }
`, Sx = S.div`
  width: 2px;
  background-color: var(${x.border});
  margin: 0px 6px;
`, jx = S.span`
  background-color: var(${x.badgeBackground});
  color: var(${x.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`;
function Cx({ title: e, icon: t }) {
  return /* @__PURE__ */ a.jsxs(_x, { children: [
    t,
    /* @__PURE__ */ a.jsx("div", { children: e }),
    /* @__PURE__ */ a.jsx("hr", {})
  ] });
}
const _x = S.div`
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
function wr({
  message: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a.jsxs(Ox, { ...n, children: [
    /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(ut, {}) }),
      /* @__PURE__ */ a.jsx("span", { children: e })
    ] }),
    t && /* @__PURE__ */ a.jsx("div", { children: t })
  ] });
}
const Ex = S.div`
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
`, Ox = S(Ex)`
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
`;
var ja = "ContextMenu", [Tx, p4] = Vp(ja, [
  kd
]), Ie = kd(), [$x, wf] = Tx(ja), Sf = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: i = !0 } = e, [s, l] = P.useState(!1), c = Ie(t), u = Up(r), d = P.useCallback(
    (p) => {
      l(p), u(p);
    },
    [u]
  );
  return /* @__PURE__ */ a.jsx(
    $x,
    {
      scope: t,
      open: s,
      onOpenChange: d,
      modal: i,
      children: /* @__PURE__ */ a.jsx(
        kg,
        {
          ...c,
          dir: o,
          open: s,
          onOpenChange: d,
          modal: i,
          children: n
        }
      )
    }
  );
};
Sf.displayName = ja;
var jf = "ContextMenuTrigger", Cf = P.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, i = wf(jf, n), s = Ie(n), l = P.useRef({ x: 0, y: 0 }), c = P.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...l.current })
    }), u = P.useRef(0), d = P.useCallback(
      () => window.clearTimeout(u.current),
      []
    ), p = (f) => {
      l.current = { x: f.clientX, y: f.clientY }, i.onOpenChange(!0);
    };
    return P.useEffect(() => d, [d]), P.useEffect(() => void (r && d()), [r, d]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(wg, { ...s, virtualRef: c }),
      /* @__PURE__ */ a.jsx(
        Wp.span,
        {
          "data-state": i.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : dr(e.onContextMenu, (f) => {
            d(), p(f), f.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : dr(
            e.onPointerDown,
            so((f) => {
              d(), u.current = window.setTimeout(() => p(f), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : dr(e.onPointerMove, so(d)),
          onPointerCancel: r ? e.onPointerCancel : dr(e.onPointerCancel, so(d)),
          onPointerUp: r ? e.onPointerUp : dr(e.onPointerUp, so(d))
        }
      )
    ] });
  }
);
Cf.displayName = jf;
var Ix = "ContextMenuPortal", _f = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Ie(t);
  return /* @__PURE__ */ a.jsx(Sg, { ...r, ...n });
};
_f.displayName = Ix;
var Ef = "ContextMenuContent", Of = P.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = wf(Ef, n), i = Ie(n), s = P.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      jg,
      {
        ...i,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (l) => {
          var c;
          (c = e.onCloseAutoFocus) == null || c.call(e, l), !l.defaultPrevented && s.current && l.preventDefault(), s.current = !1;
        },
        onInteractOutside: (l) => {
          var c;
          (c = e.onInteractOutside) == null || c.call(e, l), !l.defaultPrevented && !o.modal && (s.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Of.displayName = Ef;
var Dx = "ContextMenuGroup", Px = P.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
    return /* @__PURE__ */ a.jsx(Cg, { ...o, ...r, ref: t });
  }
);
Px.displayName = Dx;
var zx = "ContextMenuLabel", Ax = P.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
    return /* @__PURE__ */ a.jsx(_g, { ...o, ...r, ref: t });
  }
);
Ax.displayName = zx;
var Rx = "ContextMenuItem", Tf = P.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
    return /* @__PURE__ */ a.jsx(Eg, { ...o, ...r, ref: t });
  }
);
Tf.displayName = Rx;
var Nx = "ContextMenuCheckboxItem", Mx = P.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
  return /* @__PURE__ */ a.jsx(Og, { ...o, ...r, ref: t });
});
Mx.displayName = Nx;
var qx = "ContextMenuRadioGroup", Fx = P.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
  return /* @__PURE__ */ a.jsx(Tg, { ...o, ...r, ref: t });
});
Fx.displayName = qx;
var Lx = "ContextMenuRadioItem", Bx = P.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
  return /* @__PURE__ */ a.jsx($g, { ...o, ...r, ref: t });
});
Bx.displayName = Lx;
var Hx = "ContextMenuItemIndicator", Ux = P.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
  return /* @__PURE__ */ a.jsx(Ig, { ...o, ...r, ref: t });
});
Ux.displayName = Hx;
var Vx = "ContextMenuSeparator", Wx = P.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
  return /* @__PURE__ */ a.jsx(Dg, { ...o, ...r, ref: t });
});
Wx.displayName = Vx;
var Gx = "ContextMenuArrow", Kx = P.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
    return /* @__PURE__ */ a.jsx(Pg, { ...o, ...r, ref: t });
  }
);
Kx.displayName = Gx;
var Xx = "ContextMenuSubTrigger", Yx = P.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
  return /* @__PURE__ */ a.jsx(zg, { ...o, ...r, ref: t });
});
Yx.displayName = Xx;
var Qx = "ContextMenuSubContent", Jx = P.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ie(n);
  return /* @__PURE__ */ a.jsx(
    Ag,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Jx.displayName = Qx;
function so(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var Zx = Sf, eb = Cf, tb = _f, nb = Of, rb = Tf;
function ob({
  children: e,
  menu: t
}) {
  return /* @__PURE__ */ a.jsxs(Zx, { children: [
    /* @__PURE__ */ a.jsx(eb, { asChild: !0, className: "menu", children: e }),
    /* @__PURE__ */ a.jsx(tb, { children: /* @__PURE__ */ a.jsx(ib, { children: t }) })
  ] });
}
const ib = S(nb)`
  margin: 4px;
  background-color: var(${x.dropdownBackground});
  border: 1px solid var(${x.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${x.computedTwo});
`, ic = S(rb)`
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
function Vr({
  onSubmit: e,
  defaultValues: t,
  trigger: n,
  title: r,
  description: o,
  schema: i,
  children: s,
  noOverflow: l,
  open: c,
  onOpenChange: u
}) {
  const d = _d({
    values: t,
    resolver: i !== void 0 ? Qg(i) : void 0
  }), [p, f] = P.useState(!1), h = c ?? p, m = u ?? f;
  return P.useEffect(() => {
    h && d.reset();
  }, [h]), /* @__PURE__ */ a.jsxs(ta, { open: h, onOpenChange: m, children: [
    n && /* @__PURE__ */ a.jsx(na, { asChild: !0, children: n }),
    /* @__PURE__ */ a.jsxs(ra, { children: [
      /* @__PURE__ */ a.jsx(ab, {}),
      /* @__PURE__ */ a.jsx(lb, { $noOverflow: l, children: /* @__PURE__ */ a.jsx(Ed, { ...d, children: /* @__PURE__ */ a.jsxs(
        sb,
        {
          onSubmit: d.handleSubmit((g) => {
            e(g), m(!1);
          }),
          children: [
            r && /* @__PURE__ */ a.jsx(oa, { children: r }),
            o && /* @__PURE__ */ a.jsx(ia, { children: o }),
            /* @__PURE__ */ a.jsx(cb, { children: s }),
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
              /* @__PURE__ */ a.jsx(fd, { type: "submit", children: "Ok" }),
              /* @__PURE__ */ a.jsx(sa, { asChild: !0, children: /* @__PURE__ */ a.jsx(hd, { children: "Cancel" }) })
            ] })
          ]
        }
      ) }) })
    ] })
  ] });
}
const sb = S.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, ab = S(aa)`
  background-color: var(${x.computedTwo});
  position: fixed;
  inset: 0;
`, lb = S(la)`
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
`, cb = S.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
`;
function pe({
  label: e,
  name: t,
  disabled: n,
  password: r,
  description: o
}) {
  const {
    field: i,
    fieldState: { error: s, invalid: l }
  } = ie({
    name: t
  });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(ub, { children: /* @__PURE__ */ a.jsxs(db, { $invalid: l, children: [
      /* @__PURE__ */ a.jsxs(hb, { children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("span", { children: e }),
          " ",
          n && /* @__PURE__ */ a.jsx("span", { children: "(read only)" })
        ] }),
        o && /* @__PURE__ */ a.jsx(tr, { children: o })
      ] }),
      /* @__PURE__ */ a.jsx(fb, { ...i, disabled: n, type: r ? "password" : "text" })
    ] }) }),
    s && /* @__PURE__ */ a.jsx(pb, { children: s == null ? void 0 : s.message })
  ] });
}
const ub = S.div`
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
`, db = S.div`
  height: 40px;
  background-color: var(${x.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ $invalid: e }) => e ? `border: 1px solid var(${x.errorBorder});` : `border: 1px solid var(${x.border});
         &:focus-within {
           border: 1px solid var(${x.focusBorder});
         }
      `}
`, fb = S.input`
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
`, hb = S.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${x.inputPlaceholderForeground});
`, pb = S.div`
  color: var(${x.errorForeground});
`;
function gb({
  open: e,
  onOpenChange: t,
  onCreateVariable: n,
  jsonPointer: r
}) {
  const o = {
    varname: "",
    jsonPointer: r
  }, i = [], s = er({
    varname: oe().min(1).regex(Rn(), {
      message: Nn
    }).refine((c) => !i.includes(c), {
      message: "Already exists"
    }),
    jsonPointer: oe().min(1)
  }), l = (c) => {
    n(c.varname, c.jsonPointer);
  };
  return /* @__PURE__ */ a.jsx(
    Vr,
    {
      title: "Create variable",
      defaultValues: o,
      schema: s,
      onSubmit: l,
      open: e,
      onOpenChange: t,
      children: /* @__PURE__ */ a.jsxs(mb, { children: [
        /* @__PURE__ */ a.jsx(pe, { label: "Name", name: "varname" }),
        /* @__PURE__ */ a.jsx(Jg, { label: "JSON Pointer", name: "jsonPointer" })
      ] })
    }
  );
}
const mb = S.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function $f({
  value: e,
  menuHandlers: t
}) {
  return /* @__PURE__ */ a.jsx(Ca, { path: [], value: e, trailingComma: !1, menuHandlers: t });
}
function Ca({
  value: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  return typeof e == "object" ? Array.isArray(e) ? /* @__PURE__ */ a.jsx(
    vb,
    {
      array: e,
      path: r,
      menuHandlers: n,
      trailingComma: t
    }
  ) : /* @__PURE__ */ a.jsx(
    yb,
    {
      object: e,
      path: r,
      menuHandlers: n,
      trailingComma: t
    }
  ) : /* @__PURE__ */ a.jsx(
    xb,
    {
      value: e,
      path: r,
      menuHandlers: n,
      trailingComma: t
    }
  );
}
function yb({
  object: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  if (e === null)
    return /* @__PURE__ */ a.jsx("code", { children: "null" });
  const o = Object.entries(e);
  return o.length === 0 ? /* @__PURE__ */ a.jsx("code", { children: t ? "{}," : "{}" }) : /* @__PURE__ */ a.jsxs(If, { children: [
    /* @__PURE__ */ a.jsx("code", { children: "{" }),
    /* @__PURE__ */ a.jsx("div", { style: { marginLeft: "20px" }, children: o.map(([i, s], l, c) => /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("code", { children: `"${i}": ` }),
      /* @__PURE__ */ a.jsx(
        Ca,
        {
          value: s,
          path: [...r, i],
          menuHandlers: n,
          trailingComma: l < c.length - 1
        }
      )
    ] }, i)) }),
    /* @__PURE__ */ a.jsx("code", { children: t ? "}," : "}" })
  ] });
}
function vb({
  array: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  return /* @__PURE__ */ a.jsxs(If, { children: [
    /* @__PURE__ */ a.jsx("code", { children: "[" }),
    /* @__PURE__ */ a.jsx("div", { style: { marginLeft: "20px" }, children: e.map((o, i) => /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
      Ca,
      {
        value: o,
        path: [...r, i],
        menuHandlers: n,
        trailingComma: i < e.length - 1
      }
    ) }, i)) }),
    /* @__PURE__ */ a.jsx("code", { children: t ? "]," : "]" })
  ] });
}
function xb({
  value: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  const o = JSON.stringify(e), [i, s] = P.useState(!1), l = /* @__PURE__ */ a.jsxs(bb, { children: [
    /* @__PURE__ */ a.jsx("span", { children: o }),
    t && /* @__PURE__ */ a.jsx("span", { children: "," })
  ] });
  if (n) {
    const c = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(ic, { onSelect: () => n.onCopy(o), children: [
        /* @__PURE__ */ a.jsx(pm, {}),
        "Copy"
      ] }),
      /* @__PURE__ */ a.jsxs(ic, { onSelect: () => s(!0), children: [
        /* @__PURE__ */ a.jsx($d, {}),
        "Create variable"
      ] })
    ] }), u = Nt.joinJsonPointer(r);
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        gb,
        {
          open: i,
          onOpenChange: s,
          jsonPointer: u,
          onCreateVariable: n.onCreateVariable
        }
      ),
      /* @__PURE__ */ a.jsx(ob, { menu: c, children: l })
    ] });
  } else
    return l;
}
const If = S.div`
  code {
    color: var(${x.foreground});
    background-color: var(${x.background});
    border: none;
    padding: none;
  }
`, bb = S.span`
  & > span:first-child {
    &:hover {
      background-color: var(${x.computedOne});
    }
  }
`;
function kb({
  request: e,
  requestRef: t,
  statusCode: n
}) {
  return /* @__PURE__ */ a.jsx(Cb, { children: Sb(e) ? /* @__PURE__ */ a.jsx(wb, { body: e.body, requestRef: t, statusCode: n }) : /* @__PURE__ */ a.jsx(jb, { children: (e == null ? void 0 : e.body) !== void 0 && `${e.body}` }) });
}
function wb({
  body: e,
  requestRef: t,
  statusCode: n
}) {
  const r = fe();
  try {
    return /* @__PURE__ */ a.jsx(
      $f,
      {
        value: JSON.parse(e),
        menuHandlers: {
          onCopy: (o) => {
            navigator.clipboard.writeText(o);
          },
          onCreateVariable: (o, i) => {
            t !== void 0 && n !== void 0 && r(
              wa({
                name: o,
                location: "request",
                jsonPointer: i,
                ref: t,
                statusCode: n
              })
            );
          }
        }
      }
    );
  } catch {
  }
}
function Sb(e) {
  for (const [t, n] of Object.entries(e.headers))
    if (t.toLowerCase() === "content-type" && n.includes("json"))
      return !0;
  return !1;
}
const jb = S.div``, Cb = S.div`
  padding: 4px 8px;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  max-height: 400px;
  overflow-y: auto;
`;
function _b({ headers: e }) {
  return /* @__PURE__ */ a.jsxs(Eb, { children: [
    /* @__PURE__ */ a.jsxs(Ob, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" })
    ] }),
    Object.entries(e).map(([t, n], r) => /* @__PURE__ */ a.jsxs(Tb, { children: [
      /* @__PURE__ */ a.jsx("div", { children: t }),
      /* @__PURE__ */ a.jsx("div", { children: n })
    ] }, r))
  ] });
}
const Eb = S.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`, Ob = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Tb = S.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function $b({
  operationId: e,
  request: t,
  defaultCollapsed: n,
  requestRef: r,
  statusCode: o
}) {
  return /* @__PURE__ */ a.jsx(Ib, { children: /* @__PURE__ */ a.jsxs(mn, { defaultCollapsed: n, children: [
    /* @__PURE__ */ a.jsxs(nr, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ a.jsx(
        Td,
        {
          style: {
            width: 14,
            minWidth: 14,
            height: 14,
            minHeight: 14,
            fill: `var(${x.foreground})`
          }
        }
      ),
      /* @__PURE__ */ a.jsx(Db, { children: t.method }),
      /* @__PURE__ */ a.jsx(Pb, { children: t.url })
    ] }),
    /* @__PURE__ */ a.jsx(
      kt,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ a.jsx(sc, { children: /* @__PURE__ */ a.jsx(kb, { request: t, requestRef: r, statusCode: o }) }),
            disabled: t.body === void 0
          },
          {
            id: "headers",
            title: "Headers",
            content: /* @__PURE__ */ a.jsx(sc, { children: /* @__PURE__ */ a.jsx(_b, { headers: t.headers }) })
          }
        ]
      }
    )
  ] }) });
}
const Ib = S.div`
  > div {
    background-color: var(${x.background});
  }
`, Db = S.div`
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
`, Pb = S.div`
  line-break: anywhere;
`, sc = S.div`
  padding: 8px;
`;
function zb({
  name: e,
  value: t,
  variables: n,
  hasMissing: r
}) {
  var o, i;
  return /* @__PURE__ */ a.jsxs(mn, { children: [
    /* @__PURE__ */ a.jsx(nr, { style: { gap: "8px" }, children: /* @__PURE__ */ a.jsxs(Ro, { children: [
      /* @__PURE__ */ a.jsx($d, {}),
      "Credential value",
      r && /* @__PURE__ */ a.jsx(ni, { style: { fill: `var(${x.errorForeground})` } }),
      r && /* @__PURE__ */ a.jsxs(Ab, { children: [
        "Missing ",
        (i = (o = n == null ? void 0 : n.missing) == null ? void 0 : o.map((s) => `{{${s.name}}}`)) == null ? void 0 : i.join(", ")
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(Rb, { children: t })
  ] });
}
const Ab = S.div`
  color: var(${x.errorForeground});
  border-radius: 4px;
`, Rb = S.div`
  font-family: monospace;
  padding: 8px;
  line-break: anywhere;
`;
function Nb({
  results: e
}) {
  const t = Fb(e);
  return /* @__PURE__ */ a.jsx(Mb, { children: /* @__PURE__ */ a.jsxs(mn, { children: [
    /* @__PURE__ */ a.jsxs(nr, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ a.jsx(Ro, { children: /* @__PURE__ */ a.jsx(vm, {}) }),
      t.map((n, r) => /* @__PURE__ */ a.jsxs(Ro, { children: [
        n.name,
        Bb(n)
      ] }, r))
    ] }),
    /* @__PURE__ */ a.jsx(qb, { children: t.map((n, r) => /* @__PURE__ */ a.jsxs($t.Fragment, { children: [
      n.execution[0] && /* @__PURE__ */ a.jsx(Df, { playbook: n.execution[0] }),
      n.value && /* @__PURE__ */ a.jsx(
        zb,
        {
          name: n.name,
          value: n.value,
          variables: n.variables,
          hasMissing: n.hasMissingVariables
        }
      ),
      n.error && /* @__PURE__ */ a.jsx(wr, { message: n.error })
    ] }, r)) })
  ] }) });
}
const Mb = S.div`
  > div {
    background-color: var(${x.background});
  }
`, qb = S.div`
  padding: 8px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
function Fb(e) {
  return Object.entries(e).map(([t, n]) => {
    var o, i;
    const r = (i = (o = n == null ? void 0 : n.variables) == null ? void 0 : o.missing) == null ? void 0 : i.length;
    return {
      name: t,
      value: n.result,
      error: n.error,
      execution: n.execution,
      status: Lb(n),
      hasMissingVariables: r !== void 0 && r > 0,
      variables: n.variables
    };
  });
}
function Lb(e) {
  var n;
  return e.error !== void 0 ? "failure" : ((n = e.execution) == null ? void 0 : n.some((r) => r.status === "pending")) ? "pending" : e.result !== void 0 ? "success" : "failure";
}
function Bb({
  status: e,
  hasMissingVariables: t
}) {
  return e === "failure" || t ? /* @__PURE__ */ a.jsx(ni, { style: { fill: `var(${x.errorForeground})` } }) : e === "pending" ? /* @__PURE__ */ a.jsx(Ub, {}) : /* @__PURE__ */ a.jsx(Id, {});
}
const Hb = pd`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, Ub = S(jd)`
  animation: ${Hb} 2s infinite linear;
  transition: width 0.2s linear;
`;
function Vb({
  response: e,
  requestRef: t,
  statusCode: n
}) {
  return /* @__PURE__ */ a.jsx(Gb, { children: Xb(e) ? /* @__PURE__ */ a.jsx(Wb, { body: e.body, requestRef: t, statusCode: n }) : /* @__PURE__ */ a.jsx(Kb, { children: e == null ? void 0 : e.body }) });
}
function Wb({
  body: e,
  requestRef: t,
  statusCode: n
}) {
  const r = fe();
  try {
    return /* @__PURE__ */ a.jsx(
      $f,
      {
        value: JSON.parse(e),
        menuHandlers: {
          onCopy: (o) => {
            navigator.clipboard.writeText(o);
          },
          onCreateVariable: (o, i) => {
            t !== void 0 && n !== void 0 && r(
              wa({
                name: o,
                location: "response",
                jsonPointer: i,
                ref: t,
                statusCode: n
              })
            );
          }
        }
      }
    );
  } catch {
  }
}
const Gb = S.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  padding: 8px;
  max-height: 400px;
  overflow-y: auto;
`, Kb = S.div``;
function Xb(e) {
  for (const [t, n] of e.headers)
    if (t.toLowerCase() === "content-type" && n.includes("json"))
      return !0;
  return !1;
}
function Yb({ headers: e }) {
  return /* @__PURE__ */ a.jsxs(Qb, { children: [
    /* @__PURE__ */ a.jsxs(Jb, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" })
    ] }),
    e.map(([t, n], r) => /* @__PURE__ */ a.jsxs(Zb, { children: [
      /* @__PURE__ */ a.jsx("div", { children: t }),
      /* @__PURE__ */ a.jsx("div", { children: n })
    ] }, r))
  ] });
}
const Qb = S.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 2fr 5fr;
`, Jb = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Zb = S.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function ek({ assignment: e }) {
  return /* @__PURE__ */ a.jsxs(ik, { children: [
    /* @__PURE__ */ a.jsxs(sk, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsx(ak, { children: e.flatMap((t, n) => tk(t.id, t.assignments, n)) })
  ] });
}
function tk(e, t, n) {
  return t.map((r, o) => /* @__PURE__ */ a.jsx($t.Fragment, { children: r.error !== void 0 ? rk(e, r) : nk(e, r) }, `${n}-${o}`));
}
function nk(e, t) {
  return /* @__PURE__ */ a.jsxs($t.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { children: t.name }),
    /* @__PURE__ */ a.jsx("div", { children: `${t.value}` }),
    /* @__PURE__ */ a.jsx("div", {})
  ] });
}
function rk(e, t) {
  return /* @__PURE__ */ a.jsxs($t.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { children: t.name }),
    /* @__PURE__ */ a.jsx("div", { children: ok(t.assignment, t.error) }),
    /* @__PURE__ */ a.jsx(lk, { children: /* @__PURE__ */ a.jsx(ut, {}) })
  ] });
}
function ok(e, t) {
  return e.in == "body" ? `${e.path.type === "jsonPath" ? "JsonPath" : "JsonPointer"} "${e.path.value}" is ${t} in the ${e.from} ${e.in}` : `Name "${e.name}" is ${t} in the ${e.from} ${e.in}`;
}
const ik = S.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 10em 1fr 2em;
  row-gap: 4px;
`, sk = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ak = S.div`
  display: contents;
  > div {
    padding-left: 8px;
    padding-right: 8px;
    line-break: anywhere;
  }
`, lk = S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  & > svg {
    fill: var(${x.errorForeground});
    padding-right: 4px;
  }
`;
function ck({
  response: e,
  variables: t,
  requestRef: n
}) {
  const r = dk(t);
  return /* @__PURE__ */ a.jsx(uk, { children: /* @__PURE__ */ a.jsxs(mn, { children: [
    /* @__PURE__ */ a.jsxs(nr, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ a.jsx(
        Td,
        {
          style: {
            width: 14,
            minWidth: 14,
            height: 14,
            minHeight: 14,
            fill: `var(${x.foreground})`,
            transform: "rotate(180deg)"
          }
        }
      ),
      /* @__PURE__ */ a.jsxs(Ro, { children: [
        `${e == null ? void 0 : e.statusCode} ${e == null ? void 0 : e.statusMessage}`,
        r && /* @__PURE__ */ a.jsx(
          ut,
          {
            style: { fill: `var(${x.errorForeground})` }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      kt,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ a.jsx(
              Vb,
              {
                response: e,
                requestRef: n,
                statusCode: e.statusCode
              }
            )
          },
          {
            id: "headers",
            title: "Headers",
            content: /* @__PURE__ */ a.jsx(Yb, { headers: e == null ? void 0 : e.headers })
          },
          {
            id: "variables-assigned",
            title: "Variables",
            content: /* @__PURE__ */ a.jsx(ek, { assignment: t || [] }),
            counter: ac(t),
            counterKind: r ? "error" : "normal",
            disabled: t === void 0 || ac(t) === 0
          }
        ]
      }
    )
  ] }) });
}
const uk = S.div`
  > div {
    background-color: var(${x.background});
  }
`;
function ac(e) {
  return e !== void 0 ? e.map((t) => t.assignments.length).reduce((t, n) => t = t + n, 0) : 0;
}
function dk(e) {
  return !!(e != null && e.map((t) => t.assignments.some((n) => n.error !== void 0)).some((t) => t));
}
function fk({ operation: e }) {
  var t;
  return /* @__PURE__ */ a.jsxs(hk, { children: [
    e.ref && /* @__PURE__ */ a.jsx(
      Cx,
      {
        icon: pk(e.status),
        title: `${e.ref.type}/${e.ref.id}`
      }
    ),
    Object.keys(e.auth).length > 0 && /* @__PURE__ */ a.jsx(Nb, { results: e.auth }),
    e.httpRequestPrepareError !== void 0 && /* @__PURE__ */ a.jsx(wr, { message: "Failed to prepare HTTP request for sending", children: e.httpRequestPrepareError }),
    e.httpRequest !== void 0 && /* @__PURE__ */ a.jsx(
      $b,
      {
        operationId: e.operationId,
        request: e.httpRequest,
        statusCode: (t = e == null ? void 0 : e.httpResponse) == null ? void 0 : t.statusCode,
        requestRef: e.ref
      }
    ),
    e.httpError !== void 0 && /* @__PURE__ */ a.jsxs(wr, { message: "HTTP Error", children: [
      e.httpError.code,
      " ",
      e.httpError.message
    ] }),
    e.httpResponse !== void 0 && e.httpResponse !== null && /* @__PURE__ */ a.jsx(
      ck,
      {
        response: e.httpResponse,
        variables: e.variablesAssigned,
        requestRef: e.ref
      }
    ),
    e.responseProcessingError !== void 0 && /* @__PURE__ */ a.jsx(wr, { message: e.responseProcessingError })
  ] });
}
const hk = S.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
function pk(e) {
  return e === "success" ? /* @__PURE__ */ a.jsx(hm, {}) : e === "failure" ? /* @__PURE__ */ a.jsx(tm, { style: { fill: `var(${x.errorForeground})` } }) : /* @__PURE__ */ a.jsx(mk, {});
}
const gk = pd`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, mk = S(jd)`
  animation: ${gk} 2s infinite linear;
  transition: width 0.2s linear;
`;
function Df({
  playbook: e,
  collapsible: t
}) {
  const [n, r] = P.useState(!1);
  P.useEffect(() => {
    r(
      e.status === "failure" || e.status === "pending" || e.name === "Scenario" || e.name === "Request"
    );
  }, [e.status]);
  const o = e.results.map((i, s) => /* @__PURE__ */ a.jsx(fk, { operation: i }, s));
  return t ? /* @__PURE__ */ a.jsx(
    Ee,
    {
      isOpen: n,
      setOpen: r,
      title: /* @__PURE__ */ a.jsx(yk, { children: e.name || "" }),
      children: /* @__PURE__ */ a.jsx(lc, { children: o })
    }
  ) : /* @__PURE__ */ a.jsx(lc, { children: o });
}
const lc = S.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`, yk = S.div`
  opacity: 0.8;
`;
function qn({
  result: e,
  collapsible: t
}) {
  return /* @__PURE__ */ a.jsx(vk, { children: e.map((n, r) => /* @__PURE__ */ a.jsx(Df, { playbook: n, collapsible: t }, r)) });
}
const vk = S.div``;
function Pf(e) {
  const t = Nt.simpleClone(e), n = Object.keys(e.methods).map((r) => ({ key: r, value: e.methods[r] }));
  return {
    ...t,
    ttl: cc(t.ttl),
    tti: cc(t.tti),
    methods: n
  };
}
function zf(e) {
  const t = {};
  for (const { key: n, value: r } of e.methods)
    t[n] = r;
  return {
    ...e,
    ttl: uc(e.ttl),
    tti: uc(e.tti),
    methods: t
  };
}
function cc(e) {
  return e === void 0 ? "" : e;
}
function uc(e) {
  return e === "" ? void 0 : e;
}
function xk(e) {
  return e ? e.label : "";
}
function qo({
  name: e,
  options: t,
  placeholder: n,
  label: r,
  description: o
}) {
  const { field: i } = ie({
    name: e,
    rules: { required: !0 }
  }), s = kk(t, i.value), l = (c) => {
    i.onChange(c == null ? void 0 : c.value);
  };
  return /* @__PURE__ */ a.jsx(
    bk,
    {
      options: t,
      placeholder: n,
      label: r,
      selected: s == null ? void 0 : s.value,
      onSelectedItemChange: l,
      description: o
    }
  );
}
function bk({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o,
  description: i
}) {
  var p;
  const s = (p = e.filter((f) => f.value === r)) == null ? void 0 : p[0], { isOpen: l, getToggleButtonProps: c, getMenuProps: u, getItemProps: d } = ri({
    items: e,
    itemToString: xk,
    selectedItem: s || null,
    onSelectedItemChange: ({ selectedItem: f }) => {
      o(f);
    }
  });
  return /* @__PURE__ */ a.jsxs(wk, { children: [
    /* @__PURE__ */ a.jsxs(Sk, { children: [
      /* @__PURE__ */ a.jsxs(jk, { children: [
        /* @__PURE__ */ a.jsx("div", { children: n !== void 0 && /* @__PURE__ */ a.jsx("span", { children: n }) }),
        i && /* @__PURE__ */ a.jsx(tr, { children: i })
      ] }),
      /* @__PURE__ */ a.jsxs(Ck, { ...c(), children: [
        /* @__PURE__ */ a.jsx("span", { children: s ? s.label : t ?? "" }),
        /* @__PURE__ */ a.jsx(Fr, {})
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(_k, { ...u(), $isOpen: l, children: l && e.map((f, h) => /* @__PURE__ */ a.jsx("li", { ...d({ item: f, index: h }), children: /* @__PURE__ */ a.jsx("span", { children: f.label }) }, `${f.value}${h}`)) })
  ] });
}
function kk(e, t) {
  var n;
  return (n = e.filter((r) => r.value === t)) == null ? void 0 : n[0];
}
const wk = S.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, Sk = S.div`
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
`, jk = S.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${x.inputPlaceholderForeground});
`, Ck = S.div`
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
`, _k = S.ul`
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
`, Ek = [
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
  "microseconds",
  "nanoseconds"
], Sn = (e, t) => `((?<${e}>\\d*[\\.]?\\d+)${t})?`, Ok = new RegExp(
  [
    "^",
    "(?<signed>[-+])?",
    Sn("hours", "h"),
    Sn("minutes", "m"),
    Sn("seconds", "s"),
    Sn("milliseconds", "ms"),
    Sn("microseconds", "us|µs|μs"),
    Sn("nanoseconds", "ns"),
    "$"
  ].join("")
), Tk = {
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
function ks(e) {
  const t = Ok.exec(e);
  if (!t || !t.groups)
    return;
  let n;
  for (const r of Ek)
    if (t.groups[r]) {
      const o = Tk[r]($k(t.groups[r]));
      n === void 0 ? n = o === void 0 ? void 0 : o : n = o === void 0 ? n : n + o;
    }
  return n;
}
function $k(e) {
  if (e !== void 0)
    return parseFloat(e);
}
function Ik({
  credential: e,
  saveCredential: t
}) {
  const n = er({
    type: oe(),
    in: oe(),
    name: oe(),
    ttl: Ml([
      ql(""),
      oe().refine((r) => ks(r) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    tti: Ml([
      ql(""),
      oe().refine((r) => ks(r) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    default: oe(),
    methods: Zg()
  });
  return /* @__PURE__ */ a.jsx(
    dt,
    {
      data: e,
      saveData: t,
      wrapFormData: Pf,
      unwrapFormData: zf,
      schema: n,
      children: /* @__PURE__ */ a.jsx(Dk, {})
    }
  );
}
function Dk() {
  const { getValues: e } = yn(), t = e("methods") || [], n = e("type");
  return /* @__PURE__ */ a.jsxs(Pk, { children: [
    /* @__PURE__ */ a.jsx(pe, { label: "Type", name: "type", disabled: !0 }),
    n !== "basic" && n !== "bearer" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(pe, { label: "Location", name: "in", disabled: !0 }),
      /* @__PURE__ */ a.jsx(pe, { label: "Name", name: "name", disabled: !0 })
    ] }),
    /* @__PURE__ */ a.jsx(
      pe,
      {
        label: "TTL",
        name: "ttl"
      }
    ),
    /* @__PURE__ */ a.jsx(
      pe,
      {
        label: "TTI",
        name: "tti"
      }
    ),
    /* @__PURE__ */ a.jsx(
      qo,
      {
        label: "Default credential name",
        name: "default",
        options: t.map((r) => ({ label: r.key, value: r.key }))
      }
    )
  ] });
}
const Pk = S.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function wt({
  children: e,
  icon: t
}) {
  return /* @__PURE__ */ a.jsxs(Rg, { children: [
    /* @__PURE__ */ a.jsx(Ng, { asChild: !0, className: "menu", children: /* @__PURE__ */ a.jsx(zk, { children: t === "sliders" ? /* @__PURE__ */ a.jsx(bm, {}) : /* @__PURE__ */ a.jsx(gm, {}) }) }),
    /* @__PURE__ */ a.jsx(Mg, { children: /* @__PURE__ */ a.jsx(Ak, { side: "bottom", align: "end", children: e }) })
  ] });
}
function dc() {
  return /* @__PURE__ */ a.jsx(Mk, { children: /* @__PURE__ */ a.jsx(om, {}) });
}
const zk = S.span`
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
`, Ak = S(qg)`
  margin: 4px;
  background-color: var(${x.dropdownBackground});
  border: 1px solid var(${x.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${x.computedTwo});
`, Bt = S(Fg)`
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
`, fc = S(Lg)`
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
`, Rk = S(Bg)`
  height: 1px;
  background-color: var(${x.border});
  margin: 5px;
`, Nk = S(Hg)`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
`, Mk = S(Ug)`
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
function Af({ name: e }) {
  const { field: t } = ie({
    name: e
  });
  return /* @__PURE__ */ a.jsx(um, { value: t.value, onChange: (n) => t.onChange(n) });
}
function or({
  options: e,
  placeholder: t,
  selected: n,
  onSelectedItemChange: r,
  bottomMenu: o
}) {
  var f;
  const i = (f = e.filter((h) => h.value === n)) == null ? void 0 : f[0];
  function s(h) {
    return h ? h.label : "";
  }
  function l(h) {
    return (h == null ? void 0 : h.disabled) === !0;
  }
  const { isOpen: c, getToggleButtonProps: u, getMenuProps: d, getItemProps: p } = ri({
    items: e,
    isItemDisabled: l,
    itemToString: s,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: h }) => {
      r(h);
    }
  });
  return /* @__PURE__ */ a.jsxs(qk, { onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ a.jsx(Fk, { children: /* @__PURE__ */ a.jsxs(Lk, { ...u(), children: [
      i === void 0 && t !== void 0 && /* @__PURE__ */ a.jsx(Bk, { children: t }),
      i !== void 0 && /* @__PURE__ */ a.jsx(Hk, { children: i.label }),
      /* @__PURE__ */ a.jsx(Fr, {})
    ] }) }),
    /* @__PURE__ */ a.jsxs(Uk, { ...d(), $isOpen: c, children: [
      c && e.map((h, m) => /* @__PURE__ */ a.jsx("li", { ...p({ item: h, index: m }), children: /* @__PURE__ */ a.jsx("span", { children: h.label }) }, `${h.value}${m}`)),
      c && o
    ] })
  ] });
}
const qk = S.div`
  position: relative;
`, Fk = S.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, Lk = S.div`
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
`, Bk = S.span`
  color: var(${x.inputPlaceholderForeground});
`, Hk = S.span``, Uk = S.ul`
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
function To({
  name: e,
  options: t,
  label: n,
  description: r,
  placeholder: o
}) {
  const { field: i } = ie({
    name: e
  });
  return /* @__PURE__ */ a.jsxs(Vk, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "label", children: n }),
    /* @__PURE__ */ a.jsx(
      or,
      {
        placeholder: o,
        options: t,
        selected: i.value,
        onSelectedItemChange: (s) => {
          s && i.onChange(s.value);
        }
      }
    )
  ] });
}
const Vk = S.div`
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
function Wk({
  add: e,
  responseCodes: t,
  existingCodes: n
}) {
  const r = { code: "200" }, o = (i) => {
    e({
      key: i.code,
      value: {
        expectations: {
          httpStatus: Yk(i.code)
        },
        variableAssignments: []
      }
    });
  };
  return /* @__PURE__ */ a.jsx(
    Vr,
    {
      title: "Add response processing",
      defaultValues: r,
      onSubmit: o,
      noOverflow: !0,
      trigger: /* @__PURE__ */ a.jsx(Jk, { children: /* @__PURE__ */ a.jsx(Hr, {}) }),
      children: /* @__PURE__ */ a.jsx(Gk, { responseCodes: t, existingCodes: n })
    }
  );
}
function Gk({
  responseCodes: e,
  existingCodes: t
}) {
  return /* @__PURE__ */ a.jsx(Qk, { children: /* @__PURE__ */ a.jsx(
    To,
    {
      label: "HTTP response code",
      placeholder: "",
      name: "code",
      options: Kk(e, t)
    }
  ) });
}
function Kk(e, t) {
  return e.filter((n) => !t.includes(n)).map((n) => ({ label: Xk(n), value: n }));
}
function Xk(e) {
  return e in hc ? hc[e] : e;
}
function Yk(e) {
  return /^\d+$/.test(e) ? parseInt(e, 10) : e;
}
const hc = {
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
}, Qk = S.div`
  > div > div {
    padding: 4px;
  }
`, Jk = S.button`
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
function Zk(e) {
  return e ? e.label : "";
}
function en({
  name: e,
  options: t,
  placeholder: n
}) {
  const { field: r } = ie({
    name: e,
    rules: { required: !0 }
  }), o = t0(t, r.value), i = (s) => {
    r.onChange(s == null ? void 0 : s.value);
  };
  return /* @__PURE__ */ a.jsx(
    e0,
    {
      options: t,
      placeholder: n,
      selected: o == null ? void 0 : o.value,
      onSelectedItemChange: i
    }
  );
}
function e0({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o
}) {
  var d;
  const i = (d = e.filter((p) => p.value === r)) == null ? void 0 : d[0], { isOpen: s, getToggleButtonProps: l, getMenuProps: c, getItemProps: u } = ri({
    items: e,
    itemToString: Zk,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      o(p);
    }
  });
  return /* @__PURE__ */ a.jsxs(n0, { children: [
    /* @__PURE__ */ a.jsx(r0, { children: /* @__PURE__ */ a.jsxs(o0, { ...l(), children: [
      /* @__PURE__ */ a.jsx("span", { children: i ? i.label : t ?? "" }),
      /* @__PURE__ */ a.jsx(Fr, {})
    ] }) }),
    /* @__PURE__ */ a.jsx(i0, { ...c(), $isOpen: s, children: s && e.map((p, f) => /* @__PURE__ */ a.jsx("li", { ...u({ item: p, index: f }), children: /* @__PURE__ */ a.jsx("span", { children: p.label }) }, `${p.value}${f}`)) })
  ] });
}
function t0(e, t) {
  var n;
  return (n = e.filter((r) => r.value === t)) == null ? void 0 : n[0];
}
const n0 = S.div`
  position: relative;
`, r0 = S.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, o0 = S.div`
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
`, i0 = S.ul`
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
function tn({
  label: e,
  name: t,
  disabled: n,
  password: r,
  style: o
}) {
  const {
    field: i,
    fieldState: { error: s, invalid: l }
  } = ie({
    name: t
  });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(s0, { style: o, children: /* @__PURE__ */ a.jsx(
      "input",
      {
        ...i,
        disabled: n,
        type: r ? "password" : "text",
        style: { width: "100%" }
      }
    ) }),
    s && /* @__PURE__ */ a.jsx(a0, { children: s == null ? void 0 : s.message })
  ] });
}
const s0 = S.div`
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
`, a0 = S.div`
  color: var(${x.errorForeground});
`;
function l0({
  name: e,
  index: t
}) {
  const { fields: n, append: r, remove: o } = vn({
    name: `responses.${t}.value.variableAssignments`
  });
  return /* @__PURE__ */ a.jsx(c0, { children: /* @__PURE__ */ a.jsxs(u0, { children: [
    /* @__PURE__ */ a.jsxs(f0, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ a.jsx("div", { children: "From" }),
      /* @__PURE__ */ a.jsx("div", { children: "Location" }),
      /* @__PURE__ */ a.jsx("div", { children: "Type" }),
      /* @__PURE__ */ a.jsx("div", { children: "Name or Path" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsxs(d0, { children: [
      n.map((i, s) => /* @__PURE__ */ a.jsx(
        h0,
        {
          name: `responses.${t}.value.variableAssignments.${s}`,
          remove: () => {
            o(s);
          }
        },
        i.id
      )),
      /* @__PURE__ */ a.jsx(x0, { append: r })
    ] })
  ] }) });
}
const c0 = S.div`
  margin: 8px 4px;
`, u0 = S.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: repeat(5, 1fr) 1em;
`, d0 = S.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${x.border});
  }
`, f0 = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function h0({ name: e, remove: t }) {
  const { getValues: n } = yn(), r = n(`${e}.value.in`), o = n(`${e}.value.from`);
  return /* @__PURE__ */ a.jsxs(g0, { children: [
    /* @__PURE__ */ a.jsx(tn, { name: `${e}.key`, label: "name" }),
    r === "body" && /* @__PURE__ */ a.jsx(m0, { name: e }, `${e}-value`),
    r !== "body" && o === "request" && /* @__PURE__ */ a.jsx(y0, { name: e }, `${e}-value`),
    r !== "body" && o === "response" && /* @__PURE__ */ a.jsx(v0, { name: e }, `${e}-value`),
    /* @__PURE__ */ a.jsx(
      p0,
      {
        onClick: (i) => {
          i.preventDefault(), i.stopPropagation(), t();
        },
        children: /* @__PURE__ */ a.jsx(Qe, {})
      }
    )
  ] });
}
const p0 = S.button`
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
`, g0 = S.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`;
function m0({ name: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      en,
      {
        name: `${e}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(en, { name: `${e}.value.in`, options: [{ value: "body", label: "body" }] }),
    /* @__PURE__ */ a.jsx(
      en,
      {
        name: `${e}.value.path.type`,
        options: [
          { value: "jsonPointer", label: "jsonPointer" },
          { value: "jsonPath", label: "jsonPath" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(tn, { name: `${e}.value.path.value`, label: "path" })
  ] });
}
function y0({ name: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      en,
      {
        name: `${e}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      en,
      {
        name: `${e}.value.in`,
        options: [
          { value: "query", label: "query" },
          { value: "header", label: "header" },
          { value: "cookie", label: "cookie" },
          { value: "path", label: "path" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx("div", {}),
    /* @__PURE__ */ a.jsx(tn, { name: `${e}.value.name`, label: "name" })
  ] });
}
function v0({ name: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      en,
      {
        name: `${e}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      en,
      {
        name: `${e}.value.in`,
        options: [
          { value: "header", label: "header" },
          { value: "cookie", label: "cookie" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx("div", {}),
    /* @__PURE__ */ a.jsx(tn, { name: `${e}.value.name`, label: "name" })
  ] });
}
function x0({ append: e }) {
  return /* @__PURE__ */ a.jsx("div", { style: { gridColumn: "span 2" }, children: /* @__PURE__ */ a.jsx("div", { style: { padding: "4px 8px" }, children: /* @__PURE__ */ a.jsx(
    or,
    {
      placeholder: "Add new variable",
      options: [
        { value: "body", label: "Extract value from body" },
        { value: "params", label: "Extract value from query, header, cookie or path" }
      ],
      onSelectedItemChange: (t) => {
        (t == null ? void 0 : t.value) === "body" ? e(
          {
            key: "varname",
            value: {
              from: "response",
              in: "body",
              contentType: "json",
              path: { type: "jsonPointer", value: "/" }
            }
          },
          { shouldFocus: !0 }
        ) : (t == null ? void 0 : t.value) === "params" && e(
          {
            key: "varname",
            value: {
              from: "response",
              in: "header",
              name: "name"
            }
          },
          { shouldFocus: !0 }
        );
      }
    }
  ) }) });
}
function gi({
  responseCodes: e,
  editable: t
}) {
  var u;
  const { fields: n, prepend: r, remove: o } = vn({
    name: "responses"
  }), [i, s] = P.useState((u = n == null ? void 0 : n[0]) == null ? void 0 : u.id);
  P.useEffect(() => {
    var d;
    s((d = n == null ? void 0 : n[0]) == null ? void 0 : d.id);
  }, [n]);
  const l = n.map((d) => d.key), c = n.map((d, p) => ({
    id: d.id,
    title: d.key,
    menu: t ? /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsxs(Bt, { onClick: (f) => f.stopPropagation(), onSelect: () => o(p), children: [
      /* @__PURE__ */ a.jsx(Qe, {}),
      "Delete"
    ] }) }) : void 0,
    content: /* @__PURE__ */ a.jsx(l0, { name: d.key, index: p })
  }));
  return /* @__PURE__ */ a.jsx(b0, { children: /* @__PURE__ */ a.jsx(
    kt,
    {
      round: !0,
      activeTab: i,
      setActiveTab: s,
      tabs: c,
      menu: t ? /* @__PURE__ */ a.jsx(
        Wk,
        {
          add: r,
          responseCodes: e,
          existingCodes: l
        }
      ) : void 0
    }
  ) });
}
const b0 = S.div`
  margin-top: 4px;
`;
function k0({ append: e }) {
  return /* @__PURE__ */ a.jsxs(w0, { children: [
    /* @__PURE__ */ a.jsx(
      S0,
      {
        placeholder: "Add new entry",
        value: "",
        onChange: (t) => {
          e({ key: t.target.value, value: "", type: "string" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ a.jsx(j0, {})
  ] });
}
const w0 = S.div`
  display: contents;
`, S0 = S.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  margin-right: 10px;
  padding: 4px 8px;
  &::placeholder {
    color: var(${x.inputPlaceholderForeground});
  }
`, j0 = S.div`
  grid-column: span 3;
`, Rf = P.createContext(null);
function C0(e, t) {
  return { getTheme: function() {
    return t ?? null;
  } };
}
function ze() {
  const e = P.useContext(Rf);
  return e == null && function(t, ...n) {
    const r = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
    o.append("code", t);
    for (const i of n) o.append("v", i);
    throw r.search = o.toString(), Error(`Minified Lexical error #${t}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(8), e;
}
function M(e, ...t) {
  const n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of t) r.append("v", o);
  throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Je = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, _0 = Je && "documentMode" in document ? document.documentMode : null, We = Je && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Ot = Je && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Fo = !(!Je || !("InputEvent" in window) || _0) && "getTargetRanges" in new window.InputEvent("input"), Tr = Je && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Fn = Je && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, E0 = Je && /Android/.test(navigator.userAgent), Nf = Je && /^(?=.*Chrome).*/i.test(navigator.userAgent), pc = Je && E0 && Nf, Lo = Je && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Nf;
function Bo(...e) {
  const t = [];
  for (const n of e) if (n && typeof n == "string") for (const [r] of n.matchAll(/\S+/g)) t.push(r);
  return t;
}
const O0 = 1, T0 = 3, $0 = 9, I0 = 11, an = 0, Mf = 1, Ln = 2, D0 = 0, P0 = 1, z0 = 2, Ho = 4, Uo = 8, _a = 128, A0 = 1792 | (112 | (3 | Ho | Uo) | _a), Ea = 1, Oa = 2, Ta = 3, $a = 4, Ia = 5, Da = 6, mi = Tr || Fn || Lo ? " " : "​", xt = `

`, R0 = Ot ? " " : mi, qf = "֑-߿יִ-﷽ﹰ-ﻼ", Ff = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", N0 = new RegExp("^[^" + Ff + "]*[" + qf + "]"), M0 = new RegExp("^[^" + qf + "]*[" + Ff + "]"), ln = { bold: 1, capitalize: 1024, code: 16, highlight: _a, italic: 2, lowercase: 256, strikethrough: Ho, subscript: 32, superscript: 64, underline: Uo, uppercase: 512 }, q0 = { directionless: 1, unmergeable: 2 }, gc = { center: Oa, end: Da, justify: $a, left: Ea, right: Ta, start: Ia }, F0 = { [Oa]: "center", [Da]: "end", [$a]: "justify", [Ea]: "left", [Ta]: "right", [Ia]: "start" }, L0 = { normal: 0, segmented: 2, token: 1 }, B0 = { [D0]: "normal", [z0]: "segmented", [P0]: "token" }, H0 = "$";
function Lf(e, t, n, r, o, i) {
  let s = e.getFirstChild();
  for (; s !== null; ) {
    const l = s.__key;
    s.__parent === t && (N(s) && Lf(s, l, n, r, o, i), n.has(l) || i.delete(l), o.push(l)), s = s.getNextSibling();
  }
}
const U0 = 100;
let ws = !1, Pa = 0;
function V0(e) {
  Pa = e.timeStamp;
}
function Ki(e, t, n) {
  const r = e.nodeName === "BR", o = t.__lexicalLineBreak;
  return o && (e === o || r && e.previousSibling === o) || r && Ci(e, n) !== void 0;
}
function W0(e, t, n) {
  const r = lt(He(n));
  let o = null, i = null;
  r !== null && r.anchorNode === e && (o = r.anchorOffset, i = r.focusOffset);
  const s = e.nodeValue;
  s !== null && Qa(t, s, o, i, !1);
}
function G0(e, t, n) {
  if (q(e)) {
    const r = e.anchor.getNode();
    if (r.is(n) && e.format !== r.getFormat()) return !1;
  }
  return St(t) && n.isAttached();
}
function K0(e, t, n, r) {
  for (let o = e; o && !Uw(o); o = Qr(o)) {
    const i = Ci(o, t);
    if (i !== void 0) {
      const s = me(i, n);
      if (s) return re(s) || !Ae(o) ? void 0 : [o, s];
    } else if (o === r) return [r, zh(n)];
  }
}
function Bf(e, t, n) {
  ws = !0;
  const r = performance.now() - Pa > U0;
  try {
    Ne(e, () => {
      const o = U() || function(f) {
        return f.getEditorState().read(() => {
          const h = U();
          return h !== null ? h.clone() : null;
        });
      }(e), i = /* @__PURE__ */ new Map(), s = e.getRootElement(), l = e._editorState, c = e._blockCursorElement;
      let u = !1, d = "";
      for (let f = 0; f < t.length; f++) {
        const h = t[f], m = h.type, g = h.target, y = K0(g, e, l, s);
        if (!y) continue;
        const [v, w] = y;
        if (m === "characterData") r && F(w) && St(g) && G0(o, g, w) && W0(g, w, e);
        else if (m === "childList") {
          u = !0;
          const b = h.addedNodes;
          for (let j = 0; j < b.length; j++) {
            const _ = b[j], $ = Dh(_), D = _.parentNode;
            if (D != null && _ !== c && $ === null && !Ki(_, D, e)) {
              if (Ot) {
                const O = (Ae(_) ? _.innerText : null) || _.nodeValue;
                O && (d += O);
              }
              D.removeChild(_);
            }
          }
          const k = h.removedNodes, E = k.length;
          if (E > 0) {
            let j = 0;
            for (let _ = 0; _ < E; _++) {
              const $ = k[_];
              (Ki($, g, e) || c === $) && (g.appendChild($), j++);
            }
            E !== j && i.set(v, w);
          }
        }
      }
      if (i.size > 0) for (const [f, h] of i) h.reconcileObservedMutation(f, e);
      const p = n.takeRecords();
      if (p.length > 0) {
        for (let f = 0; f < p.length; f++) {
          const h = p[f], m = h.addedNodes, g = h.target;
          for (let y = 0; y < m.length; y++) {
            const v = m[y], w = v.parentNode;
            w == null || v.nodeName !== "BR" || Ki(v, g, e) || w.removeChild(v);
          }
        }
        n.takeRecords();
      }
      o !== null && (u && Me(o), Ot && Mh(e) && o.insertRawText(d));
    });
  } finally {
    ws = !1;
  }
}
function Hf(e) {
  const t = e._observer;
  t !== null && Bf(e, t.takeRecords(), t);
}
function Uf(e) {
  (function(t) {
    Pa === 0 && He(t).addEventListener("textInput", V0, !0);
  })(e), e._observer = new MutationObserver((t, n) => {
    Bf(e, t, n);
  });
}
class za {
  constructor(t, n = /* @__PURE__ */ new Map(), r = void 0, o = /* @__PURE__ */ new Map(), i = void 0) {
    this.node = t, this.sharedConfigMap = n, this.unknownState = r, this.knownState = o;
    const s = i !== void 0 ? i : function(l, c, u) {
      let d = u.size;
      if (c) for (const p in c) {
        const f = l.get(p);
        f && u.has(f) || d++;
      }
      return d;
    }(n, r, o);
    this.size = s;
  }
  getValue(t) {
    const n = this.knownState.get(t);
    if (n !== void 0) return n;
    this.sharedConfigMap.set(t.key, t);
    let r = t.defaultValue;
    if (this.unknownState && t.key in this.unknownState) {
      const o = this.unknownState[t.key];
      o !== void 0 && (r = t.parse(o)), this.updateFromKnown(t, r);
    }
    return r;
  }
  getInternalState() {
    return [this.unknownState, this.knownState];
  }
  toJSON() {
    const t = { ...this.unknownState };
    for (const [n, r] of this.knownState) n.isEqual(r, n.defaultValue) ? delete t[n.key] : t[n.key] = n.unparse(r);
    return ao(t) ? { [H0]: t } : {};
  }
  getWritable(t) {
    if (this.node === t) return this;
    const n = new Map(this.knownState), r = ao(o = this.unknownState) && { ...o };
    var o;
    if (r) for (const i of n.keys()) delete r[i.key];
    return new za(t, this.sharedConfigMap, ao(r), n, this.size);
  }
  updateFromKnown(t, n) {
    const r = t.key;
    this.sharedConfigMap.set(r, t);
    const { knownState: o, unknownState: i } = this;
    o.has(t) || i && r in i || this.size++, o.set(t, n);
  }
  updateFromUnknown(t, n) {
    const r = this.sharedConfigMap.get(t);
    r ? this.updateFromKnown(r, r.parse(n)) : (this.unknownState = this.unknownState || {}, t in this.unknownState || this.size++, this.unknownState[t] = n);
  }
  updateFromJSON(t) {
    const { knownState: n } = this;
    for (const r of n.keys()) n.set(r, r.defaultValue);
    if (this.size = n.size, this.unknownState = {}, t) for (const [r, o] of Object.entries(t)) this.updateFromUnknown(r, o);
    this.unknownState = ao(this.unknownState);
  }
}
function ao(e) {
  if (e) for (const t in e) return e;
}
function X0(e) {
  const t = e.getWritable(), n = t.__state ? t.__state.getWritable(t) : new za(t);
  return t.__state = n, n;
}
function mc(e, t) {
  const n = e.__mode, r = e.__format, o = e.__style, i = t.__mode, s = t.__format, l = t.__style, c = e.__state, u = t.__state;
  return (n === null || n === i) && (r === null || r === s) && (o === null || o === l) && (e.__state === null || c === u || function(d, p) {
    if (d === p) return !0;
    if (d && p && d.size !== p.size) return !1;
    const f = /* @__PURE__ */ new Set(), h = (g, y) => {
      for (const [v, w] of g.knownState) {
        if (f.has(v.key)) continue;
        f.add(v.key);
        const b = y ? y.getValue(v) : v.defaultValue;
        if (b !== w && !v.isEqual(b, w)) return !0;
      }
      return !1;
    }, m = (g, y) => {
      const { unknownState: v } = g, w = y ? y.unknownState : void 0;
      if (v) {
        for (const [b, k] of Object.entries(v)) if (!f.has(b) && (f.add(b), k !== (w ? w[b] : void 0))) return !0;
      }
      return !1;
    };
    return !(d && h(d, p) || p && h(p, d) || d && m(d, p) || p && m(p, d));
  }(c, u));
}
function yc(e, t) {
  const n = e.mergeWithSibling(t), r = ue()._normalizedNodes;
  return r.add(e.__key), r.add(t.__key), n;
}
function vc(e) {
  let t, n, r = e;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (t = r.getPreviousSibling()) !== null && F(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (mc(t, r)) {
          r = yc(t, r);
          break;
        }
        break;
      }
      t.remove();
    }
    for (; (n = r.getNextSibling()) !== null && F(n) && n.isSimpleText() && !n.isUnmergeable(); ) {
      if (n.__text !== "") {
        if (mc(r, n)) {
          r = yc(r, n);
          break;
        }
        break;
      }
      n.remove();
    }
  } else r.remove();
}
function Ss(e) {
  return xc(e.anchor), xc(e.focus), e;
}
function xc(e) {
  for (; e.type === "element"; ) {
    const t = e.getNode(), n = e.offset;
    let r, o;
    if (n === t.getChildrenSize() ? (r = t.getChildAtIndex(n - 1), o = !0) : (r = t.getChildAtIndex(n), o = !1), F(r)) {
      e.set(r.__key, o ? r.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!N(r)) break;
    e.set(r.__key, o ? r.getChildrenSize() : 0, "element", !0);
  }
}
let It, $e, $r, yi, js, Cs, cn, Ye, _s, Ir, ge = "", Oe = "", tt = null, nt = "", mt = "", Vf = !1, Dr = !1, $o = null;
function Vo(e, t) {
  const n = cn.get(e);
  if (t !== null) {
    const r = Ts(e);
    r.parentNode === t && t.removeChild(r);
  }
  if (Ye.has(e) || $e._keyToDOMMap.delete(e), N(n)) {
    const r = Go(n, cn);
    Es(r, 0, r.length - 1, null);
  }
  n !== void 0 && Ja(Ir, $r, yi, n, "destroyed");
}
function Es(e, t, n, r) {
  let o = t;
  for (; o <= n; ++o) {
    const i = e[o];
    i !== void 0 && Vo(i, r);
  }
}
function Gt(e, t) {
  e.setProperty("text-align", t);
}
const Y0 = "40px";
function Wf(e, t) {
  const n = It.theme.indent;
  if (typeof n == "string") {
    const o = e.classList.contains(n);
    t > 0 && !o ? e.classList.add(n) : t < 1 && o && e.classList.remove(n);
  }
  const r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || Y0;
  e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * ${r})`);
}
function Gf(e, t) {
  const n = e.style;
  t === 0 ? Gt(n, "") : t === Ea ? Gt(n, "left") : t === Oa ? Gt(n, "center") : t === Ta ? Gt(n, "right") : t === $a ? Gt(n, "justify") : t === Ia ? Gt(n, "start") : t === Da && Gt(n, "end");
}
function Wo(e, t) {
  const n = Ye.get(e);
  n === void 0 && M(60);
  const r = n.createDOM(It, $e);
  if (function(o, i, s) {
    const l = s._keyToDOMMap;
    (function(c, u, d) {
      const p = `__lexicalKey_${u._key}`;
      c[p] = d;
    })(i, s, o), l.set(o, i);
  }(e, r, $e), F(n) ? r.setAttribute("data-lexical-text", "true") : re(n) && r.setAttribute("data-lexical-decorator", "true"), N(n)) {
    const o = n.__indent, i = n.__size;
    if (o !== 0 && Wf(r, o), i !== 0) {
      const l = i - 1;
      (function(c, u, d, p) {
        const f = Oe;
        Oe = "", Os(c, d, 0, u, d.getDOMSlot(p)), Xf(d, p), Oe = f;
      })(Go(n, Ye), l, n, r);
    }
    const s = n.__format;
    s !== 0 && Gf(r, s), n.isInline() || Kf(null, n, r), _i(n) && (ge += xt, mt += xt);
  } else {
    const o = n.getTextContent();
    if (re(n)) {
      const i = n.decorate($e, It);
      i !== null && Yf(e, i), r.contentEditable = "false";
    } else F(n) && (n.isDirectionless() || (Oe += o));
    ge += o, mt += o;
  }
  return t !== null && t.insertChild(r), Ja(Ir, $r, yi, n, "created"), r;
}
function Os(e, t, n, r, o) {
  const i = ge;
  ge = "";
  let s = n;
  for (; s <= r; ++s) {
    Wo(e[s], o);
    const l = Ye.get(e[s]);
    l !== null && F(l) && (tt === null && (tt = l.getFormat()), nt === "" && (nt = l.getStyle()));
  }
  _i(t) && (ge += xt), o.element.__lexicalTextContent = ge, ge = i + ge;
}
function bc(e, t) {
  if (e) {
    const n = e.__last;
    if (n) {
      const r = t.get(n);
      if (r) return Cr(r) ? "line-break" : re(r) && r.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function Kf(e, t, n) {
  const r = bc(e, cn), o = bc(t, Ye);
  r !== o && t.getDOMSlot(n).setManagedLineBreak(o);
}
function Xf(e, t) {
  const n = t.__lexicalDirTextContent || "", r = t.__lexicalDir || "";
  if (n !== Oe || r !== $o) {
    const o = Oe === "", i = o ? $o : function(s) {
      return N0.test(s) ? "rtl" : M0.test(s) ? "ltr" : null;
    }(Oe);
    if (i !== r) {
      const s = t.classList, l = It.theme;
      let c = r !== null ? l[r] : void 0, u = i !== null ? l[i] : void 0;
      if (c !== void 0) {
        if (typeof c == "string") {
          const d = Bo(c);
          c = l[r] = d;
        }
        s.remove(...c);
      }
      if (i === null || o && i === "ltr") t.removeAttribute("dir");
      else {
        if (u !== void 0) {
          if (typeof u == "string") {
            const d = Bo(u);
            u = l[i] = d;
          }
          u !== void 0 && s.add(...u);
        }
        t.dir = i;
      }
      Dr || (e.getWritable().__dir = i);
    }
    $o = i, t.__lexicalDirTextContent = Oe, t.__lexicalDir = i;
  }
}
function Q0(e, t, n) {
  const r = Oe;
  var o;
  Oe = "", tt = null, nt = "", function(i, s, l) {
    const c = ge, u = i.__size, d = s.__size;
    ge = "";
    const p = l.element;
    if (u === 1 && d === 1) {
      const f = i.__first, h = s.__first;
      if (f === h) vr(f, p);
      else {
        const g = Ts(f), y = Wo(h, null);
        try {
          p.replaceChild(y, g);
        } catch (v) {
          if (typeof v == "object" && v != null) {
            const w = `${v.toString()} Parent: ${p.tagName}, new child: {tag: ${y.tagName} key: ${h}}, old child: {tag: ${g.tagName}, key: ${f}}.`;
            throw new Error(w);
          }
          throw v;
        }
        Vo(f, null);
      }
      const m = Ye.get(h);
      F(m) && (tt === null && (tt = m.getFormat()), nt === "" && (nt = m.getStyle()));
    } else {
      const f = Go(i, cn), h = Go(s, Ye);
      if (f.length !== u && M(227), h.length !== d && M(228), u === 0) d !== 0 && Os(h, s, 0, d - 1, l);
      else if (d === 0) {
        if (u !== 0) {
          const m = l.after == null && l.before == null && l.element.__lexicalLineBreak == null;
          Es(f, 0, u - 1, m ? null : p), m && (p.textContent = "");
        }
      } else (function(m, g, y, v, w, b) {
        const k = v - 1, E = w - 1;
        let j, _, $ = b.getFirstChild(), D = 0, O = 0;
        for (; D <= k && O <= E; ) {
          const T = g[D], A = y[O];
          if (T === A) $ = Xi(vr(A, b.element)), D++, O++;
          else {
            j === void 0 && (j = new Set(g)), _ === void 0 && (_ = new Set(y));
            const H = _.has(T), V = j.has(A);
            if (H) if (V) {
              const L = Hn($e, A);
              L === $ ? $ = Xi(vr(A, b.element)) : (b.withBefore($).insertChild(L), vr(A, b.element)), D++, O++;
            } else Wo(A, b.withBefore($)), O++;
            else $ = Xi(Ts(T)), Vo(T, b.element), D++;
          }
          const R = Ye.get(A);
          R !== null && F(R) && (tt === null && (tt = R.getFormat()), nt === "" && (nt = R.getStyle()));
        }
        const C = D > k, I = O > E;
        if (C && !I) {
          const T = y[E + 1], A = T === void 0 ? null : $e.getElementByKey(T);
          Os(y, m, O, E, b.withBefore(A));
        } else I && !C && Es(g, D, k, b.element);
      })(s, f, h, u, d, l);
    }
    _i(s) && (ge += xt), p.__lexicalTextContent = ge, ge = c + ge;
  }(e, t, t.getDOMSlot(n)), Xf(t, n), o = t, tt == null || tt === o.__textFormat || Dr || o.setTextFormat(tt), function(i) {
    nt === "" || nt === i.__textStyle || Dr || i.setTextStyle(nt);
  }(t), Oe = r;
}
function Go(e, t) {
  const n = [];
  let r = e.__first;
  for (; r !== null; ) {
    const o = t.get(r);
    o === void 0 && M(101), n.push(r), r = o.__next;
  }
  return n;
}
function vr(e, t) {
  const n = cn.get(e);
  let r = Ye.get(e);
  n !== void 0 && r !== void 0 || M(61);
  const o = Vf || Cs.has(e) || js.has(e), i = Hn($e, e);
  if (n === r && !o) {
    if (N(n)) {
      const s = i.__lexicalTextContent;
      s !== void 0 && (ge += s, mt += s);
      const l = i.__lexicalDirTextContent;
      l !== void 0 && (Oe += l);
    } else {
      const s = n.getTextContent();
      F(n) && !n.isDirectionless() && (Oe += s), mt += s, ge += s;
    }
    return i;
  }
  if (n !== r && o && Ja(Ir, $r, yi, r, "updated"), r.updateDOM(n, i, It)) {
    const s = Wo(e, null);
    return t === null && M(62), t.replaceChild(s, i), Vo(e, null), s;
  }
  if (N(n) && N(r)) {
    const s = r.__indent;
    s !== n.__indent && Wf(i, s);
    const l = r.__format;
    l !== n.__format && Gf(i, l), o && (Q0(n, r, i), Te(r) || r.isInline() || Kf(n, r, i)), _i(r) && (ge += xt, mt += xt);
  } else {
    const s = r.getTextContent();
    if (re(r)) {
      const l = r.decorate($e, It);
      l !== null && Yf(e, l);
    } else F(r) && !r.isDirectionless() && (Oe += s);
    ge += s, mt += s;
  }
  if (!Dr && Te(r) && r.__cachedText !== mt) {
    const s = r.getWritable();
    s.__cachedText = mt, r = s;
  }
  return i;
}
function Yf(e, t) {
  let n = $e._pendingDecorators;
  const r = $e._decorators;
  if (n === null) {
    if (r[e] === t) return;
    n = Ph($e);
  }
  n[e] = t;
}
function Xi(e) {
  let t = e.nextSibling;
  return t !== null && t === $e._blockCursorElement && (t = t.nextSibling), t;
}
function J0(e, t, n, r, o, i) {
  ge = "", mt = "", Oe = "", Vf = r === Ln, $o = null, $e = n, It = n._config, $r = n._nodes, yi = $e._listeners.mutation, js = o, Cs = i, cn = e._nodeMap, Ye = t._nodeMap, Dr = t._readOnly, _s = new Map(n._keyToDOMMap);
  const s = /* @__PURE__ */ new Map();
  return Ir = s, vr("root", null), $e = void 0, $r = void 0, js = void 0, Cs = void 0, cn = void 0, Ye = void 0, It = void 0, _s = void 0, Ir = void 0, s;
}
function Ts(e) {
  const t = _s.get(e);
  return t === void 0 && M(75, e), t;
}
function Z0(e) {
  return {};
}
const Qf = {}, ew = {}, nn = {}, In = {}, $s = {}, Dn = {}, Aa = {}, Is = {}, Pr = {}, zr = {}, Yt = {}, Ra = {}, Na = {}, tw = {}, Jf = {}, nw = {}, Zf = {}, rw = {}, eh = {}, th = {}, Ar = {}, ow = {}, nh = {}, rh = {}, oh = {}, ih = {}, sh = {}, ah = {}, iw = {}, sw = {}, Ma = {}, qa = {}, Ds = {}, aw = {}, lw = {}, lo = {}, co = {}, cw = {}, lh = {}, uw = {}, pt = Object.freeze({}), Ps = 30, zs = [["keydown", function(e, t) {
  if (Sr = e.timeStamp, As = e.key, t.isComposing()) return;
  const { key: n, shiftKey: r, ctrlKey: o, metaKey: i, altKey: s } = e;
  if (!B(t, tw, e) && n != null) {
    if (Yi && jn(As)) return Ne(t, () => {
      uo(t, Qi);
    }), Yi = !1, void (Qi = "");
    if (function(l, c, u, d) {
      return Kc(l) && !c && !d && !u;
    }(n, o, s, i)) B(t, Jf, e);
    else if (function(l, c, u, d, p) {
      return Kc(l) && !d && !u && (c || p);
    }(n, o, r, s, i)) B(t, nw, e);
    else if (function(l, c, u, d) {
      return Gc(l) && !c && !d && !u;
    }(n, o, s, i)) B(t, Zf, e);
    else if (function(l, c, u, d, p) {
      return Gc(l) && !d && !u && (c || p);
    }(n, o, r, s, i)) B(t, rw, e);
    else if (/* @__PURE__ */ function(l, c, u) {
      return /* @__PURE__ */ function(d) {
        return d === "ArrowUp";
      }(l) && !c && !u;
    }(n, o, i)) B(t, eh, e);
    else if (/* @__PURE__ */ function(l, c, u) {
      return /* @__PURE__ */ function(d) {
        return d === "ArrowDown";
      }(l) && !c && !u;
    }(n, o, i)) B(t, th, e);
    else if (function(l, c) {
      return Xc(l) && c;
    }(n, r)) jr = !0, B(t, Ar, e);
    else if (/* @__PURE__ */ function(l) {
      return l === " ";
    }(n)) B(t, ow, e);
    else if (function(l, c) {
      return We && c && l.toLowerCase() === "o";
    }(n, o)) e.preventDefault(), jr = !0, B(t, In, !0);
    else if (function(l, c) {
      return Xc(l) && !c;
    }(n, r)) jr = !1, B(t, Ar, e);
    else if (function(l, c, u, d) {
      return We ? !c && !u && (jn(l) || l.toLowerCase() === "h" && d) : d || c || u ? !1 : jn(l);
    }(n, s, i, o)) jn(n) ? B(t, nh, e) : (e.preventDefault(), B(t, nn, !0));
    else if (/* @__PURE__ */ function(l) {
      return l === "Escape";
    }(n)) B(t, rh, e);
    else if (function(l, c, u, d, p) {
      return We ? !(u || d || p) && (hr(l) || l.toLowerCase() === "d" && c) : c || d || p ? !1 : hr(l);
    }(n, o, r, s, i)) hr(n) ? B(t, oh, e) : (e.preventDefault(), B(t, nn, !1));
    else if (function(l, c, u) {
      return jn(l) && (We ? c : u);
    }(n, s, o)) e.preventDefault(), B(t, Pr, !0);
    else if (function(l, c, u) {
      return hr(l) && (We ? c : u);
    }(n, s, o)) e.preventDefault(), B(t, Pr, !1);
    else if (function(l, c) {
      return We && c && jn(l);
    }(n, i)) e.preventDefault(), B(t, zr, !0);
    else if (function(l, c, u) {
      return We && (c && hr(l) || u && l.toLowerCase() === "k");
    }(n, i, o)) e.preventDefault(), B(t, zr, !1);
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "b" && !c && xr(u, d);
    }(n, s, i, o)) e.preventDefault(), B(t, Yt, "bold");
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "u" && !c && xr(u, d);
    }(n, s, i, o)) e.preventDefault(), B(t, Yt, "underline");
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "i" && !c && xr(u, d);
    }(n, s, i, o)) e.preventDefault(), B(t, Yt, "italic");
    else if (/* @__PURE__ */ function(l, c, u, d) {
      return l === "Tab" && !c && !u && !d;
    }(n, s, o, i)) B(t, ih, e);
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "z" && !c && xr(u, d);
    }(n, r, i, o)) e.preventDefault(), B(t, Ra, void 0);
    else if (function(l, c, u, d) {
      return We ? l.toLowerCase() === "z" && u && c : l.toLowerCase() === "y" && d || l.toLowerCase() === "z" && d && c;
    }(n, r, i, o)) e.preventDefault(), B(t, Na, void 0);
    else {
      const l = t._editorState._selection;
      l === null || q(l) ? !Ot && Yc(n, i, o) && (e.preventDefault(), B(t, Ds, e)) : function(c, u, d, p) {
        return u ? !1 : c.toLowerCase() === "c" ? We ? d : p : !1;
      }(n, r, i, o) ? (e.preventDefault(), B(t, Ma, e)) : function(c, u, d, p) {
        return u ? !1 : c.toLowerCase() === "x" ? We ? d : p : !1;
      }(n, r, i, o) ? (e.preventDefault(), B(t, qa, e)) : Yc(n, i, o) && (e.preventDefault(), B(t, Ds, e));
    }
    /* @__PURE__ */ (function(l, c, u, d) {
      return l || c || u || d;
    })(o, r, s, i) && B(t, uw, e);
  }
}], ["pointerdown", function(e, t) {
  const n = e.target, r = e.pointerType;
  Jr(n) && r !== "touch" && e.button === 0 && Ne(t, () => {
    Uc(n) || (Ns = !0);
  });
}], ["compositionstart", function(e, t) {
  Ne(t, () => {
    const n = U();
    if (q(n) && !t.isComposing()) {
      const r = n.anchor, o = n.anchor.getNode();
      ke(r.key), (e.timeStamp < Sr + Ps || r.type === "element" || !n.isCollapsed() || o.getFormat() !== n.format || F(o) && o.getStyle() !== n.style) && B(t, Dn, R0);
    }
  });
}], ["compositionend", function(e, t) {
  Ot ? fr = !0 : Fn || !Tr && !Lo ? Ne(t, () => {
    uo(t, e.data);
  }) : (Yi = !0, Qi = e.data);
}], ["input", function(e, t) {
  e.stopPropagation(), Ne(t, () => {
    if (Ae(e.target) && Uc(e.target)) return;
    const n = U(), r = e.data, o = hh(e);
    if (r != null && q(n) && dh(n, o, r, e.timeStamp, !1)) {
      fr && (uo(t, r), fr = !1);
      const i = n.anchor.getNode(), s = lt(He(t));
      if (s === null) return;
      const l = n.isBackward(), c = l ? n.anchor.offset : n.focus.offset, u = l ? n.focus.offset : n.anchor.offset;
      Fo && !n.isCollapsed() && F(i) && s.anchorNode !== null && i.getTextContent().slice(0, c) + r + i.getTextContent().slice(c + u) === Nh(s.anchorNode) || B(t, Dn, r);
      const d = r.length;
      Ot && d > 1 && e.inputType === "insertCompositionText" && !t.isComposing() && (n.anchor.offset -= d), Tr || Fn || Lo || !t.isComposing() || (Sr = 0, ke(null));
    } else
      Ya(!1, t, r !== null ? r : void 0), fr && (uo(t, r || void 0), fr = !1);
    (function() {
      Se();
      const i = ue();
      Hf(i);
    })();
  }, { event: e }), En = null;
}], ["click", function(e, t) {
  Ne(t, () => {
    const n = U(), r = lt(He(t)), o = Gr();
    if (r) {
      if (q(n)) {
        const i = n.anchor, s = i.getNode();
        if (i.type === "element" && i.offset === 0 && n.isCollapsed() && !Te(s) && de().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && n.is(o)) r.removeAllRanges(), n.dirty = !0;
        else if (e.detail === 3 && !n.isCollapsed() && s !== n.focus.getNode()) {
          const l = function(c, u) {
            let d = c;
            for (; d !== de() && d != null; ) {
              if (u(d)) return d;
              d = d.getParent();
            }
            return null;
          }(s, (c) => N(c) && !c.isInline());
          N(l) && l.select(0);
        }
      } else if (e.pointerType === "touch") {
        const i = r.anchorNode;
        (Ae(i) || St(i)) && Me(Ha(o, r, t, e));
      }
    }
    B(t, ew, e);
  });
}], ["cut", pt], ["copy", pt], ["dragstart", pt], ["dragover", pt], ["dragend", pt], ["paste", pt], ["focus", pt], ["blur", pt], ["drop", pt]];
Fo && zs.push(["beforeinput", (e, t) => function(n, r) {
  const o = n.inputType, i = hh(n);
  o === "deleteCompositionText" || Ot && Mh(r) || o !== "insertCompositionText" && Ne(r, () => {
    const s = U();
    if (o === "deleteContentBackward") {
      if (s === null) {
        const h = Gr();
        if (!q(h)) return;
        Me(h.clone());
      }
      if (q(s)) {
        const h = s.anchor.key === s.focus.key;
        if (l = n.timeStamp, As === "MediaLast" && l < Sr + Ps && r.isComposing() && h) {
          if (ke(null), Sr = 0, setTimeout(() => {
            Ne(r, () => {
              ke(null);
            });
          }, Ps), q(s)) {
            const m = s.anchor.getNode();
            m.markDirty(), F(m) || M(142), fh(s, m);
          }
        } else {
          ke(null), n.preventDefault();
          const m = s.anchor.getNode(), g = m.getTextContent(), y = m.canInsertTextAfter(), v = s.anchor.offset === 0 && s.focus.offset === g.length;
          let w = pc && h && !v && y;
          if (w && s.isCollapsed() && (w = !re(Aw(s.anchor, !0))), !w) {
            B(r, nn, !0);
            const b = U();
            pc && q(b) && b.isCollapsed() && (Xt = b, setTimeout(() => Xt = null));
          }
        }
        return;
      }
    }
    var l;
    if (!q(s)) return;
    const c = n.data;
    En !== null && Ya(!1, r, En), s.dirty && En === null || !s.isCollapsed() || Te(s.anchor.getNode()) || i === null || s.applyDOMRange(i), En = null;
    const u = s.anchor, d = s.focus, p = u.getNode(), f = d.getNode();
    if (o !== "insertText" && o !== "insertTranspose") switch (n.preventDefault(), o) {
      case "insertFromYank":
      case "insertFromDrop":
      case "insertReplacementText":
        B(r, Dn, n);
        break;
      case "insertFromComposition":
        ke(null), B(r, Dn, n);
        break;
      case "insertLineBreak":
        ke(null), B(r, In, !1);
        break;
      case "insertParagraph":
        ke(null), jr && !Fn ? (jr = !1, B(r, In, !1)) : B(r, $s, void 0);
        break;
      case "insertFromPaste":
      case "insertFromPasteAsQuotation":
        B(r, Aa, n);
        break;
      case "deleteByComposition":
        (function(h, m) {
          return h !== m || N(h) || N(m) || !h.isToken() || !m.isToken();
        })(p, f) && B(r, Is, n);
        break;
      case "deleteByDrag":
      case "deleteByCut":
        B(r, Is, n);
        break;
      case "deleteContent":
        B(r, nn, !1);
        break;
      case "deleteWordBackward":
        B(r, Pr, !0);
        break;
      case "deleteWordForward":
        B(r, Pr, !1);
        break;
      case "deleteHardLineBackward":
      case "deleteSoftLineBackward":
        B(r, zr, !0);
        break;
      case "deleteContentForward":
      case "deleteHardLineForward":
      case "deleteSoftLineForward":
        B(r, zr, !1);
        break;
      case "formatStrikeThrough":
        B(r, Yt, "strikethrough");
        break;
      case "formatBold":
        B(r, Yt, "bold");
        break;
      case "formatItalic":
        B(r, Yt, "italic");
        break;
      case "formatUnderline":
        B(r, Yt, "underline");
        break;
      case "historyUndo":
        B(r, Ra, void 0);
        break;
      case "historyRedo":
        B(r, Na, void 0);
    }
    else {
      if (c === `
`) n.preventDefault(), B(r, In, !1);
      else if (c === xt) n.preventDefault(), B(r, $s, void 0);
      else if (c == null && n.dataTransfer) {
        const h = n.dataTransfer.getData("text/plain");
        n.preventDefault(), s.insertRawText(h);
      } else c != null && dh(s, i, c, n.timeStamp, !0) ? (n.preventDefault(), B(r, Dn, c)) : En = c;
      ch = n.timeStamp;
    }
  });
}(e, t)]);
let Sr = 0, As = null, ch = 0, En = null;
const Ko = /* @__PURE__ */ new WeakMap();
let Rs = !1, Ns = !1, jr = !1, fr = !1, Yi = !1, Qi = "", Xt = null, uh = [0, "", 0, "root", 0];
function dh(e, t, n, r, o) {
  const i = e.anchor, s = e.focus, l = i.getNode(), c = ue(), u = lt(He(c)), d = u !== null ? u.anchorNode : null, p = i.key, f = c.getElementByKey(p), h = n.length;
  return p !== s.key || !F(l) || (!o && (!Fo || ch < r + 50) || l.isDirty() && h < 2 || Ah(n)) && i.offset !== s.offset && !l.isComposing() || On(l) || l.isDirty() && h > 1 || (o || !Fo) && f !== null && !l.isComposing() && d !== Bn(f) || u !== null && t !== null && (!t.collapsed || t.startContainer !== u.anchorNode || t.startOffset !== u.anchorOffset) || l.getFormat() !== e.format || l.getStyle() !== e.style || function(m, g) {
    if (g.isSegmented()) return !0;
    if (!m.isCollapsed()) return !1;
    const y = m.anchor.offset, v = g.getParentOrThrow(), w = g.isToken();
    return y === 0 ? !g.canInsertTextBefore() || !v.canInsertTextBefore() && !g.isComposing() || w || function(b) {
      const k = b.getPreviousSibling();
      return (F(k) || N(k) && k.isInline()) && !k.canInsertTextAfter();
    }(g) : y === g.getTextContentSize() && (!g.canInsertTextAfter() || !v.canInsertTextAfter() && !g.isComposing() || w);
  }(e, l);
}
function kc(e, t) {
  return St(e) && e.nodeValue !== null && t !== 0 && t !== e.nodeValue.length;
}
function wc(e, t, n) {
  const { anchorNode: r, anchorOffset: o, focusNode: i, focusOffset: s } = e;
  Rs && (Rs = !1, kc(r, o) && kc(i, s) && !Xt) || Ne(t, () => {
    if (!n) return void Me(null);
    if (!Si(t, r, i)) return;
    let l = U();
    if (Xt && q(l) && l.isCollapsed()) {
      const c = l.anchor, u = Xt.anchor;
      (c.key === u.key && c.offset === u.offset + 1 || c.offset === 1 && u.getNode().is(c.getNode().getPreviousSibling())) && (l = Xt.clone(), Me(l));
    }
    if (Xt = null, q(l)) {
      const c = l.anchor, u = c.getNode();
      if (l.isCollapsed()) {
        e.type === "Range" && e.anchorNode === e.focusNode && (l.dirty = !0);
        const d = He(t).event, p = d ? d.timeStamp : performance.now(), [f, h, m, g, y] = uh, v = de(), w = t.isComposing() === !1 && v.getTextContent() === "";
        if (p < y + 200 && c.offset === m && c.key === g) Io(l, f, h);
        else if (c.type === "text") F(u) || M(141), fh(l, u);
        else if (c.type === "element" && !w) {
          N(u) || M(259);
          const b = c.getNode();
          b.isEmpty() ? function(k, E) {
            const j = E.getTextFormat(), _ = E.getTextStyle();
            Io(k, j, _);
          }(l, b) : Io(l, 0, "");
        }
      } else {
        const d = c.key, p = l.focus.key, f = l.getNodes(), h = f.length, m = l.isBackward(), g = m ? s : o, y = m ? o : s, v = m ? p : d, w = m ? d : p;
        let b = A0, k = !1;
        for (let E = 0; E < h; E++) {
          const j = f[E], _ = j.getTextContentSize();
          if (F(j) && _ !== 0 && !(E === 0 && j.__key === v && g === _ || E === h - 1 && j.__key === w && y === 0) && (k = !0, b &= j.getFormat(), b === 0)) break;
        }
        l.format = k ? b : 0;
      }
    }
    B(t, Qf, void 0);
  });
}
function Io(e, t, n) {
  e.format === t && e.style === n || (e.format = t, e.style = n, e.dirty = !0);
}
function fh(e, t) {
  Io(e, t.getFormat(), t.getStyle());
}
function hh(e) {
  if (!e.getTargetRanges) return null;
  const t = e.getTargetRanges();
  return t.length === 0 ? null : t[0];
}
function uo(e, t) {
  const n = e._compositionKey;
  if (ke(null), n !== null && t != null) {
    if (t === "") {
      const r = me(n), o = Bn(e.getElementByKey(n));
      return void (o !== null && o.nodeValue !== null && F(r) && Qa(r, o.nodeValue, null, null, !0));
    }
    if (t[t.length - 1] === `
`) {
      const r = U();
      if (q(r)) {
        const o = r.focus;
        return r.anchor.set(o.key, o.offset, o.type), void B(e, Ar, null);
      }
    }
  }
  Ya(!0, e, t);
}
function ph(e) {
  let t = e.__lexicalEventHandles;
  return t === void 0 && (t = [], e.__lexicalEventHandles = t), t;
}
const Pn = /* @__PURE__ */ new Map();
function gh(e) {
  const t = Fw(e.target);
  if (t === null) return;
  const n = Ih(t.anchorNode);
  if (n === null) return;
  Ns && (Ns = !1, Ne(n, () => {
    const c = Gr(), u = t.anchorNode;
    (Ae(u) || St(u)) && Me(Ha(c, t, n, e));
  }));
  const r = Xa(n), o = r[r.length - 1], i = o._key, s = Pn.get(i), l = s || o;
  l !== n && wc(t, l, !1), wc(t, n, !0), n !== o ? Pn.set(i, n) : s && Pn.delete(i);
}
function Sc(e) {
  e._lexicalHandled = !0;
}
function jc(e) {
  return e._lexicalHandled === !0;
}
function dw(e) {
  const t = e.ownerDocument, n = Ko.get(t);
  if (n === void 0) return;
  const r = n - 1;
  r >= 0 || M(164), Ko.set(t, r), r === 0 && t.removeEventListener("selectionchange", gh);
  const o = ji(e);
  Ga(o) ? (function(s) {
    if (s._parentEditor !== null) {
      const l = Xa(s), c = l[l.length - 1]._key;
      Pn.get(c) === s && Pn.delete(c);
    } else Pn.delete(s._key);
  }(o), e.__lexicalEditor = null) : o && M(198);
  const i = ph(e);
  for (let s = 0; s < i.length; s++) i[s]();
  e.__lexicalEventHandles = [];
}
function Ms(e, t, n) {
  Se();
  const r = e.__key, o = e.getParent();
  if (o === null) return;
  const i = function(l) {
    const c = U();
    if (!q(c) || !N(l)) return c;
    const { anchor: u, focus: d } = c, p = u.getNode(), f = d.getNode();
    return Fs(p, l) && u.set(l.__key, 0, "element"), Fs(f, l) && d.set(l.__key, 0, "element"), c;
  }(e);
  let s = !1;
  if (q(i) && t) {
    const l = i.anchor, c = i.focus;
    l.key === r && (Yo(l, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0), c.key === r && (Yo(c, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0);
  } else Ba(i) && t && e.isSelected() && e.selectPrevious();
  if (q(i) && t && !s) {
    const l = e.getIndexWithinParent();
    rn(e), Xo(i, o, l, -1);
  } else rn(e);
  n || Vt(o) || o.canBeEmpty() || !o.isEmpty() || Ms(o, t), t && i && Te(o) && o.isEmpty() && o.selectEnd();
}
class vi {
  static getType() {
    M(64, this.name);
  }
  static clone(t) {
    M(65, this.name);
  }
  afterCloneFrom(t) {
    this.__parent = t.__parent, this.__next = t.__next, this.__prev = t.__prev, this.__state = t.__state;
  }
  constructor(t) {
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), Pw(this, t);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    M(137, this.constructor.name);
  }
  isAttached() {
    let t = this.__key;
    for (; t !== null; ) {
      if (t === "root") return !0;
      const n = me(t);
      if (n === null) break;
      t = n.__parent;
    }
    return !1;
  }
  isSelected(t) {
    const n = t || U();
    if (n == null) return !1;
    const r = n.getNodes().some((o) => o.__key === this.__key);
    if (F(this)) return r;
    if (q(n) && n.anchor.type === "element" && n.focus.type === "element") {
      if (n.isCollapsed()) return !1;
      const o = this.getParent();
      if (re(this) && this.isInline() && o) {
        const i = n.isBackward() ? n.focus : n.anchor;
        if (o.is(i.getNode()) && i.offset === o.getChildrenSize() && this.is(o.getLastChild())) return !1;
      }
    }
    return r;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    const t = this.getParent();
    if (t === null) return -1;
    let n = t.getFirstChild(), r = 0;
    for (; n !== null; ) {
      if (this.is(n)) return r;
      r++, n = n.getNextSibling();
    }
    return -1;
  }
  getParent() {
    const t = this.getLatest().__parent;
    return t === null ? null : me(t);
  }
  getParentOrThrow() {
    const t = this.getParent();
    return t === null && M(66, this.__key), t;
  }
  getTopLevelElement() {
    let t = this;
    for (; t !== null; ) {
      const n = t.getParent();
      if (Vt(n)) return N(t) || t === this && re(t) || M(194), t;
      t = n;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const t = this.getTopLevelElement();
    return t === null && M(67, this.__key), t;
  }
  getParents() {
    const t = [];
    let n = this.getParent();
    for (; n !== null; ) t.push(n), n = n.getParent();
    return t;
  }
  getParentKeys() {
    const t = [];
    let n = this.getParent();
    for (; n !== null; ) t.push(n.__key), n = n.getParent();
    return t;
  }
  getPreviousSibling() {
    const t = this.getLatest().__prev;
    return t === null ? null : me(t);
  }
  getPreviousSiblings() {
    const t = [], n = this.getParent();
    if (n === null) return t;
    let r = n.getFirstChild();
    for (; r !== null && !r.is(this); ) t.push(r), r = r.getNextSibling();
    return t;
  }
  getNextSibling() {
    const t = this.getLatest().__next;
    return t === null ? null : me(t);
  }
  getNextSiblings() {
    const t = [];
    let n = this.getNextSibling();
    for (; n !== null; ) t.push(n), n = n.getNextSibling();
    return t;
  }
  getCommonAncestor(t) {
    const n = N(this) ? this : this.getParent(), r = N(t) ? t : t.getParent(), o = n && r ? Po(n, r) : null;
    return o ? o.commonAncestor : null;
  }
  is(t) {
    return t != null && this.__key === t.__key;
  }
  isBefore(t) {
    const n = Po(this, t);
    return n !== null && (n.type === "descendant" || (n.type === "branch" ? Hh(n) === -1 : (n.type !== "same" && n.type !== "ancestor" && M(279), !1)));
  }
  isParentOf(t) {
    const n = Po(this, t);
    return n !== null && n.type === "ancestor";
  }
  getNodesBetween(t) {
    const n = this.isBefore(t), r = [], o = /* @__PURE__ */ new Set();
    let i = this;
    for (; i !== null; ) {
      const s = i.__key;
      if (o.has(s) || (o.add(s), r.push(i)), i === t) break;
      const l = N(i) ? n ? i.getFirstChild() : i.getLastChild() : null;
      if (l !== null) {
        i = l;
        continue;
      }
      const c = n ? i.getNextSibling() : i.getPreviousSibling();
      if (c !== null) {
        i = c;
        continue;
      }
      const u = i.getParentOrThrow();
      if (o.has(u.__key) || r.push(u), u === t) break;
      let d = null, p = u;
      do {
        if (p === null && M(68), d = n ? p.getNextSibling() : p.getPreviousSibling(), p = p.getParent(), p === null) break;
        d !== null || o.has(p.__key) || r.push(p);
      } while (d === null);
      i = d;
    }
    return n || r.reverse(), r;
  }
  isDirty() {
    const t = ue()._dirtyLeaves;
    return t !== null && t.has(this.__key);
  }
  getLatest() {
    const t = me(this.__key);
    return t === null && M(113), t;
  }
  getWritable() {
    Se();
    const t = Ut(), n = ue(), r = t._nodeMap, o = this.__key, i = this.getLatest(), s = n._cloneNotNeeded, l = U();
    if (l !== null && l.setCachedNodes(null), s.has(o)) return Jo(i), i;
    const c = Fh(i);
    return s.add(o), Jo(c), r.set(o, c), c;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(t, n) {
    M(70);
  }
  updateDOM(t, n, r) {
    M(71);
  }
  exportDOM(t) {
    return { element: this.createDOM(t._config, t) };
  }
  exportJSON() {
    const t = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...t };
  }
  static importJSON(t) {
    M(18, this.name);
  }
  updateFromJSON(t) {
    return function(n, r) {
      const o = n.getWritable();
      return (r || o.__state) && X0(n).updateFromJSON(r), o;
    }(this, t.$);
  }
  static transform() {
    return null;
  }
  remove(t) {
    Ms(this, !0, t);
  }
  replace(t, n) {
    Se();
    let r = U();
    r !== null && (r = r.clone()), rs(this, t);
    const o = this.getLatest(), i = this.__key, s = t.__key, l = t.getWritable(), c = this.getParentOrThrow().getWritable(), u = c.__size;
    rn(l);
    const d = o.getPreviousSibling(), p = o.getNextSibling(), f = o.__prev, h = o.__next, m = o.__parent;
    if (Ms(o, !1, !0), d === null ? c.__first = s : d.getWritable().__next = s, l.__prev = f, p === null ? c.__last = s : p.getWritable().__prev = s, l.__next = h, l.__parent = m, c.__size = u, n && (N(this) && N(l) || M(139), this.getChildren().forEach((g) => {
      l.append(g);
    })), q(r)) {
      Me(r);
      const g = r.anchor, y = r.focus;
      g.key === i && Oc(g, l), y.key === i && Oc(y, l);
    }
    return _t() === i && ke(s), l;
  }
  insertAfter(t, n = !0) {
    Se(), rs(this, t);
    const r = this.getWritable(), o = t.getWritable(), i = o.getParent(), s = U();
    let l = !1, c = !1;
    if (i !== null) {
      const h = t.getIndexWithinParent();
      if (rn(o), q(s)) {
        const m = i.__key, g = s.anchor, y = s.focus;
        l = g.type === "element" && g.key === m && g.offset === h + 1, c = y.type === "element" && y.key === m && y.offset === h + 1;
      }
    }
    const u = this.getNextSibling(), d = this.getParentOrThrow().getWritable(), p = o.__key, f = r.__next;
    if (u === null ? d.__last = p : u.getWritable().__prev = p, d.__size++, r.__next = p, o.__next = f, o.__prev = r.__key, o.__parent = r.__parent, n && q(s)) {
      const h = this.getIndexWithinParent();
      Xo(s, d, h + 1);
      const m = d.__key;
      l && s.anchor.set(m, h + 2, "element"), c && s.focus.set(m, h + 2, "element");
    }
    return t;
  }
  insertBefore(t, n = !0) {
    Se(), rs(this, t);
    const r = this.getWritable(), o = t.getWritable(), i = o.__key;
    rn(o);
    const s = this.getPreviousSibling(), l = this.getParentOrThrow().getWritable(), c = r.__prev, u = this.getIndexWithinParent();
    s === null ? l.__first = i : s.getWritable().__next = i, l.__size++, r.__prev = i, o.__prev = c, o.__next = r.__key, o.__parent = r.__parent;
    const d = U();
    return n && q(d) && Xo(d, this.getParentOrThrow(), u), t;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return Be();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(t, n) {
    Se();
    const r = this.getPreviousSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select(0, 0);
    if (N(r)) return r.select();
    if (!F(r)) {
      const i = r.getIndexWithinParent() + 1;
      return o.select(i, i);
    }
    return r.select(t, n);
  }
  selectNext(t, n) {
    Se();
    const r = this.getNextSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select();
    if (N(r)) return r.select(0, 0);
    if (!F(r)) {
      const i = r.getIndexWithinParent();
      return o.select(i, i);
    }
    return r.select(t, n);
  }
  markDirty() {
    this.getWritable();
  }
  reconcileObservedMutation(t, n) {
    this.markDirty();
  }
}
class ir extends vi {
  static getType() {
    return "linebreak";
  }
  static clone(t) {
    return new ir(t.__key);
  }
  constructor(t) {
    super(t);
  }
  getTextContent() {
    return `
`;
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
    return { br: (t) => function(n) {
      const r = n.parentElement;
      if (r !== null && Jc(r)) {
        const o = r.firstChild;
        if (o === n || o.nextSibling === n && fo(o)) {
          const i = r.lastChild;
          if (i === n || i.previousSibling === n && fo(i)) return !0;
        }
      }
      return !1;
    }(t) || function(n) {
      const r = n.parentElement;
      if (r !== null && Jc(r)) {
        const o = r.firstChild;
        if (o === n || o.nextSibling === n && fo(o)) return !1;
        const i = r.lastChild;
        if (i === n || i.previousSibling === n && fo(i)) return !0;
      }
      return !1;
    }(t) ? null : { conversion: fw, priority: 0 } };
  }
  static importJSON(t) {
    return un().updateFromJSON(t);
  }
}
function fw(e) {
  return { node: un() };
}
function un() {
  return Ei(new ir());
}
function Cr(e) {
  return e instanceof ir;
}
function fo(e) {
  return St(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function Ji(e, t) {
  return 16 & t ? "code" : t & _a ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function Zi(e, t) {
  return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function mh(e, t, n, r, o) {
  const i = r.classList;
  let s = zn(o, "base");
  s !== void 0 && i.add(...s), s = zn(o, "underlineStrikethrough");
  let l = !1;
  const c = t & Uo && t & Ho;
  s !== void 0 && (n & Uo && n & Ho ? (l = !0, c || i.add(...s)) : c && i.remove(...s));
  for (const u in ln) {
    const d = ln[u];
    if (s = zn(o, u), s !== void 0) if (n & d) {
      if (l && (u === "underline" || u === "strikethrough")) {
        t & d && i.remove(...s);
        continue;
      }
      t & d && (!c || u !== "underline") && u !== "strikethrough" || i.add(...s);
    } else t & d && i.remove(...s);
  }
}
function yh(e, t, n) {
  const r = t.firstChild, o = n.isComposing(), i = e + (o ? mi : "");
  if (r == null) t.textContent = i;
  else {
    const s = r.nodeValue;
    if (s !== i) if (o || Ot) {
      const [l, c, u] = function(d, p) {
        const f = d.length, h = p.length;
        let m = 0, g = 0;
        for (; m < f && m < h && d[m] === p[m]; ) m++;
        for (; g + m < f && g + m < h && d[f - g - 1] === p[h - g - 1]; ) g++;
        return [m, f - m - g, p.slice(m, h - g)];
      }(s, i);
      c !== 0 && r.deleteData(l, c), r.insertData(l, u);
    } else r.nodeValue = i;
  }
}
function Cc(e, t, n, r, o, i) {
  yh(o, e, t);
  const s = i.theme.text;
  s !== void 0 && mh(0, 0, r, e, s);
}
function ho(e, t) {
  const n = document.createElement(t);
  return n.appendChild(e), n;
}
class Ht extends vi {
  static getType() {
    return "text";
  }
  static clone(t) {
    return new Ht(t.__text, t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__text = t.__text, this.__format = t.__format, this.__style = t.__style, this.__mode = t.__mode, this.__detail = t.__detail;
  }
  constructor(t = "", n) {
    super(n), this.__text = t, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    const t = this.getLatest();
    return B0[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === _t();
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
  hasFormat(t) {
    const n = ln[t];
    return !!(this.getFormat() & n);
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, n) {
    return Qo(this.getLatest().__format, t, n);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(t, n) {
    const r = this.__format, o = Ji(0, r), i = Zi(0, r), s = o === null ? i : o, l = document.createElement(s);
    let c = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), o !== null && (c = document.createElement(i), l.appendChild(c)), Cc(c, this, 0, r, this.__text, t);
    const u = this.__style;
    return u !== "" && (l.style.cssText = u), l;
  }
  updateDOM(t, n, r) {
    const o = this.__text, i = t.__format, s = this.__format, l = Ji(0, i), c = Ji(0, s), u = Zi(0, i), d = Zi(0, s);
    if ((l === null ? u : l) !== (c === null ? d : c)) return !0;
    if (l === c && u !== d) {
      const g = n.firstChild;
      g == null && M(48);
      const y = document.createElement(d);
      return Cc(y, this, 0, s, o, r), n.replaceChild(y, g), !1;
    }
    let p = n;
    c !== null && l !== null && (p = n.firstChild, p == null && M(49)), yh(o, p, this);
    const f = r.theme.text;
    f !== void 0 && i !== s && mh(0, i, s, p, f);
    const h = t.__style, m = this.__style;
    return h !== m && (n.style.cssText = m), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: mw, priority: 0 }), b: () => ({ conversion: pw, priority: 0 }), code: () => ({ conversion: gt, priority: 0 }), em: () => ({ conversion: gt, priority: 0 }), i: () => ({ conversion: gt, priority: 0 }), mark: () => ({ conversion: gt, priority: 0 }), s: () => ({ conversion: gt, priority: 0 }), span: () => ({ conversion: hw, priority: 0 }), strong: () => ({ conversion: gt, priority: 0 }), sub: () => ({ conversion: gt, priority: 0 }), sup: () => ({ conversion: gt, priority: 0 }), u: () => ({ conversion: gt, priority: 0 }) };
  }
  static importJSON(t) {
    return ce().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextContent(t.text).setFormat(t.format).setDetail(t.detail).setMode(t.mode).setStyle(t.style);
  }
  exportDOM(t) {
    let { element: n } = super.exportDOM(t);
    return Ae(n) || M(132), n.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? n.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? n.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (n.style.textTransform = "capitalize"), this.hasFormat("bold") && (n = ho(n, "b")), this.hasFormat("italic") && (n = ho(n, "i")), this.hasFormat("strikethrough") && (n = ho(n, "s")), this.hasFormat("underline") && (n = ho(n, "u")), { element: n };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(t, n) {
  }
  setFormat(t) {
    const n = this.getWritable();
    return n.__format = typeof t == "string" ? ln[t] : t, n;
  }
  setDetail(t) {
    const n = this.getWritable();
    return n.__detail = typeof t == "string" ? q0[t] : t, n;
  }
  setStyle(t) {
    const n = this.getWritable();
    return n.__style = t, n;
  }
  toggleFormat(t) {
    const n = Qo(this.getFormat(), t, null);
    return this.setFormat(n);
  }
  toggleDirectionless() {
    const t = this.getWritable();
    return t.__detail ^= 1, t;
  }
  toggleUnmergeable() {
    const t = this.getWritable();
    return t.__detail ^= 2, t;
  }
  setMode(t) {
    const n = L0[t];
    if (this.__mode === n) return this;
    const r = this.getWritable();
    return r.__mode = n, r;
  }
  setTextContent(t) {
    if (this.__text === t) return this;
    const n = this.getWritable();
    return n.__text = t, n;
  }
  select(t, n) {
    Se();
    let r = t, o = n;
    const i = U(), s = this.getTextContent(), l = this.__key;
    if (typeof s == "string") {
      const c = s.length;
      r === void 0 && (r = c), o === void 0 && (o = c);
    } else r = 0, o = 0;
    if (!q(i)) return bh(l, r, l, o, "text", "text");
    {
      const c = _t();
      c !== i.anchor.key && c !== i.focus.key || ke(l), i.setTextNodeRange(this, r, this, o);
    }
    return i;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    const t = this.getTextContentSize();
    return this.select(t, t);
  }
  spliceText(t, n, r, o) {
    const i = this.getWritable(), s = i.__text, l = r.length;
    let c = t;
    c < 0 && (c = l + c, c < 0 && (c = 0));
    const u = U();
    if (o && q(u)) {
      const p = t + l;
      u.setTextNodeRange(i, p, i, p);
    }
    const d = s.slice(0, c) + r + s.slice(c + n);
    return i.__text = d, i;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...t) {
    Se();
    const n = this.getLatest(), r = n.getTextContent();
    if (r === "") return [];
    const o = n.__key, i = _t(), s = r.length;
    t.sort(($, D) => $ - D), t.push(s);
    const l = [], c = t.length;
    for (let $ = 0, D = 0; $ < s && D <= c; D++) {
      const O = t[D];
      O > $ && (l.push(r.slice($, O)), $ = O);
    }
    const u = l.length;
    if (u === 1) return [n];
    const d = l[0], p = n.getParent();
    let f;
    const h = n.getFormat(), m = n.getStyle(), g = n.__detail;
    let y = !1, v = null, w = null;
    const b = U();
    if (q(b)) {
      const [$, D] = b.isBackward() ? [b.focus, b.anchor] : [b.anchor, b.focus];
      $.type === "text" && $.key === o && (v = $), D.type === "text" && D.key === o && (w = D);
    }
    n.isSegmented() ? (f = ce(d), f.__format = h, f.__style = m, f.__detail = g, y = !0) : (f = n.getWritable(), f.__text = d);
    const k = [f];
    for (let $ = 1; $ < u; $++) {
      const D = ce(l[$]);
      D.__format = h, D.__style = m, D.__detail = g;
      const O = D.__key;
      i === o && ke(O), k.push(D);
    }
    const E = v ? v.offset : null, j = w ? w.offset : null;
    let _ = 0;
    for (const $ of k) {
      if (!v && !w) break;
      const D = _ + $.getTextContentSize();
      if (v !== null && E !== null && E <= D && E >= _ && (v.set($.getKey(), E - _, "text"), E < D && (v = null)), w !== null && j !== null && j <= D && j >= _) {
        w.set($.getKey(), j - _, "text");
        break;
      }
      _ = D;
    }
    if (p !== null) {
      (function(O) {
        const C = O.getPreviousSibling(), I = O.getNextSibling();
        C !== null && Jo(C), I !== null && Jo(I);
      })(this);
      const $ = p.getWritable(), D = this.getIndexWithinParent();
      y ? ($.splice(D, 0, k), this.remove()) : $.splice(D, 1, k), q(b) && Xo(b, p, D, u - 1);
    }
    return k;
  }
  mergeWithSibling(t) {
    const n = t === this.getPreviousSibling();
    n || t === this.getNextSibling() || M(50);
    const r = this.__key, o = t.__key, i = this.__text, s = i.length;
    _t() === o && ke(r);
    const l = U();
    if (q(l)) {
      const p = l.anchor, f = l.focus;
      p !== null && p.key === o && Ac(p, n, r, t, s), f !== null && f.key === o && Ac(f, n, r, t, s);
    }
    const c = t.__text, u = n ? c + i : i + c;
    this.setTextContent(u);
    const d = this.getWritable();
    return t.remove(), d;
  }
  isTextEntity() {
    return !1;
  }
}
function hw(e) {
  return { forChild: Fa(e.style), node: null };
}
function pw(e) {
  const t = e, n = t.style.fontWeight === "normal";
  return { forChild: Fa(t.style, n ? void 0 : "bold"), node: null };
}
const _c = /* @__PURE__ */ new WeakMap();
function gw(e) {
  if (!Ae(e)) return !1;
  if (e.nodeName === "PRE") return !0;
  const t = e.style.whiteSpace;
  return typeof t == "string" && t.startsWith("pre");
}
function mw(e) {
  const t = e;
  e.parentElement === null && M(129);
  let n = t.textContent || "";
  if (function(r) {
    let o, i = r.parentNode;
    const s = [r];
    for (; i !== null && (o = _c.get(i)) === void 0 && !gw(i); ) s.push(i), i = i.parentNode;
    const l = o === void 0 ? i : o;
    for (let c = 0; c < s.length; c++) _c.set(s[c], l);
    return l;
  }(t) !== null) {
    const r = n.split(/(\r?\n|\t)/), o = [], i = r.length;
    for (let s = 0; s < i; s++) {
      const l = r[s];
      l === `
` || l === `\r
` ? o.push(un()) : l === "	" ? o.push(La()) : l !== "" && o.push(ce(l));
    }
    return { node: o };
  }
  if (n = n.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), n === "") return { node: null };
  if (n[0] === " ") {
    let r = t, o = !0;
    for (; r !== null && (r = Ec(r, !1)) !== null; ) {
      const i = r.textContent || "";
      if (i.length > 0) {
        /[ \t\n]$/.test(i) && (n = n.slice(1)), o = !1;
        break;
      }
    }
    o && (n = n.slice(1));
  }
  if (n[n.length - 1] === " ") {
    let r = t, o = !0;
    for (; r !== null && (r = Ec(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        o = !1;
        break;
      }
    o && (n = n.slice(0, n.length - 1));
  }
  return n === "" ? { node: null } : { node: ce(n) };
}
function Ec(e, t) {
  let n = e;
  for (; ; ) {
    let r;
    for (; (r = t ? n.nextSibling : n.previousSibling) === null; ) {
      const i = n.parentElement;
      if (i === null) return null;
      n = i;
    }
    if (n = r, Ae(n)) {
      const i = n.style.display;
      if (i === "" && !Lw(n) || i !== "" && !i.startsWith("inline")) return null;
    }
    let o = n;
    for (; (o = t ? n.firstChild : n.lastChild) !== null; ) n = o;
    if (St(n)) return n;
    if (n.nodeName === "BR") return null;
  }
}
const yw = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function gt(e) {
  const t = yw[e.nodeName.toLowerCase()];
  return t === void 0 ? { node: null } : { forChild: Fa(e.style, t), node: null };
}
function ce(e = "") {
  return Ei(new Ht(e));
}
function F(e) {
  return e instanceof Ht;
}
function Fa(e, t) {
  const n = e.fontWeight, r = e.textDecoration.split(" "), o = n === "700" || n === "bold", i = r.includes("line-through"), s = e.fontStyle === "italic", l = r.includes("underline"), c = e.verticalAlign;
  return (u) => (F(u) && (o && !u.hasFormat("bold") && u.toggleFormat("bold"), i && !u.hasFormat("strikethrough") && u.toggleFormat("strikethrough"), s && !u.hasFormat("italic") && u.toggleFormat("italic"), l && !u.hasFormat("underline") && u.toggleFormat("underline"), c !== "sub" || u.hasFormat("subscript") || u.toggleFormat("subscript"), c !== "super" || u.hasFormat("superscript") || u.toggleFormat("superscript"), t && !u.hasFormat(t) && u.toggleFormat(t)), u);
}
class Wr extends Ht {
  static getType() {
    return "tab";
  }
  static clone(t) {
    return new Wr(t.__key);
  }
  constructor(t) {
    super("	", t), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(t) {
    const n = super.createDOM(t), r = zn(t.theme, "tab");
    return r !== void 0 && n.classList.add(...r), n;
  }
  static importJSON(t) {
    return La().updateFromJSON(t);
  }
  setTextContent(t) {
    return t !== "	" && t !== "" && M(126), super.setTextContent(t);
  }
  setDetail(t) {
    return t !== 2 && M(127), this;
  }
  setMode(t) {
    return t !== "normal" && M(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function La() {
  return Ei(new Wr());
}
function vw(e) {
  return e instanceof Wr;
}
class xw {
  constructor(t, n, r) {
    this._selection = null, this.key = t, this.offset = n, this.type = r;
  }
  is(t) {
    return this.key === t.key && this.offset === t.offset && this.type === t.type;
  }
  isBefore(t) {
    return this.key === t.key ? this.offset < t.offset : Bh(ot(Pt(this, "next")), ot(Pt(t, "next"))) < 0;
  }
  getNode() {
    const t = me(this.key);
    return t === null && M(20), t;
  }
  set(t, n, r, o) {
    const i = this._selection, s = this.key;
    o && this.key === t && this.offset === n && this.type === r || (this.key = t, this.offset = n, this.type = r, Kr() || (_t() === s && ke(t), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
  }
}
function at(e, t, n) {
  return new xw(e, t, n);
}
function es(e, t) {
  let n = t.__key, r = e.offset, o = "element";
  if (F(t)) {
    o = "text";
    const i = t.getTextContentSize();
    r > i && (r = i);
  } else if (!N(t)) {
    const i = t.getNextSibling();
    if (F(i)) n = i.__key, r = 0, o = "text";
    else {
      const s = t.getParent();
      s && (n = s.__key, r = t.getIndexWithinParent() + 1);
    }
  }
  e.set(n, r, o);
}
function Oc(e, t) {
  if (N(t)) {
    const n = t.getLastDescendant();
    N(n) || F(n) ? es(e, n) : es(e, t);
  } else es(e, t);
}
class xi {
  constructor(t) {
    this._cachedNodes = null, this._nodes = t, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(t) {
    this._cachedNodes = t;
  }
  is(t) {
    if (!Ba(t)) return !1;
    const n = this._nodes, r = t._nodes;
    return n.size === r.size && Array.from(n).every((o) => r.has(o));
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
  add(t) {
    this.dirty = !0, this._nodes.add(t), this._cachedNodes = null;
  }
  delete(t) {
    this.dirty = !0, this._nodes.delete(t), this._cachedNodes = null;
  }
  clear() {
    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
  }
  has(t) {
    return this._nodes.has(t);
  }
  clone() {
    return new xi(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(t) {
  }
  insertText() {
  }
  insertNodes(t) {
    const n = this.getNodes(), r = n.length, o = n[r - 1];
    let i;
    if (F(o)) i = o.select();
    else {
      const s = o.getIndexWithinParent() + 1;
      i = o.getParentOrThrow().select(s, s);
    }
    i.insertNodes(t);
    for (let s = 0; s < r; s++) n[s].remove();
  }
  getNodes() {
    const t = this._cachedNodes;
    if (t !== null) return t;
    const n = this._nodes, r = [];
    for (const o of n) {
      const i = me(o);
      i !== null && r.push(i);
    }
    return Kr() || (this._cachedNodes = r), r;
  }
  getTextContent() {
    const t = this.getNodes();
    let n = "";
    for (let r = 0; r < t.length; r++) n += t[r].getTextContent();
    return n;
  }
  deleteNodes() {
    const t = this.getNodes();
    if ((U() || Gr()) === this && t[0]) {
      const n = je(t[0], "next");
      Zw(pn(n, n));
    }
    for (const n of t) n.remove();
  }
}
function q(e) {
  return e instanceof xn;
}
class xn {
  constructor(t, n, r, o) {
    this.anchor = t, this.focus = n, t._selection = this, n._selection = this, this._cachedNodes = null, this.format = r, this.style = o, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(t) {
    this._cachedNodes = t;
  }
  is(t) {
    return !!q(t) && this.anchor.is(t.anchor) && this.focus.is(t.focus) && this.format === t.format && this.style === t.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    const t = this._cachedNodes;
    if (t !== null) return t;
    const n = function(r) {
      const o = [], [i, s] = r.getTextSlices();
      i && o.push(i.caret.origin);
      const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
      for (const u of r) if (it(u)) {
        const { origin: d } = u;
        o.length === 0 ? l.add(d) : (c.add(d), o.push(d));
      } else {
        const { origin: d } = u;
        N(d) && c.has(d) || o.push(d);
      }
      if (s && o.push(s.caret.origin), Un(r.focus) && N(r.focus.origin) && r.focus.getNodeAtCaret() === null) for (let u = Dt(r.focus.origin, "previous"); it(u) && l.has(u.origin) && !u.origin.isEmpty() && u.origin.is(o[o.length - 1]); u = nl(u)) l.delete(u.origin), o.pop();
      for (; o.length > 1; ) {
        const u = o[o.length - 1];
        if (!N(u) || c.has(u) || u.isEmpty() || l.has(u)) break;
        o.pop();
      }
      if (o.length === 0 && r.isCollapsed()) {
        const u = ot(r.anchor), d = ot(r.anchor.getFlipped()), p = (h) => on(h) ? h.origin : h.getNodeAtCaret(), f = p(u) || p(d) || (r.anchor.getNodeAtCaret() ? u.origin : d.origin);
        o.push(f);
      }
      return o;
    }(Vh(ru(this), "next"));
    return Kr() || (this._cachedNodes = n), n;
  }
  setTextNodeRange(t, n, r, o) {
    this.anchor.set(t.__key, n, "text"), this.focus.set(r.__key, o, "text");
  }
  getTextContent() {
    const t = this.getNodes();
    if (t.length === 0) return "";
    const n = t[0], r = t[t.length - 1], o = this.anchor, i = this.focus, s = o.isBefore(i), [l, c] = qs(this);
    let u = "", d = !0;
    for (let p = 0; p < t.length; p++) {
      const f = t[p];
      if (N(f) && !f.isInline()) d || (u += `
`), d = !f.isEmpty();
      else if (d = !1, F(f)) {
        let h = f.getTextContent();
        f === n ? f === r ? o.type === "element" && i.type === "element" && i.offset !== o.offset || (h = l < c ? h.slice(l, c) : h.slice(c, l)) : h = s ? h.slice(l) : h.slice(c) : f === r && (h = s ? h.slice(0, c) : h.slice(0, l)), u += h;
      } else !re(f) && !Cr(f) || f === r && this.isCollapsed() || (u += f.getTextContent());
    }
    return u;
  }
  applyDOMRange(t) {
    const n = ue(), r = n.getEditorState()._selection, o = xh(t.startContainer, t.startOffset, t.endContainer, t.endOffset, n, r);
    if (o === null) return;
    const [i, s] = o;
    this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(s.key, s.offset, s.type, !0), Ss(this);
  }
  clone() {
    const t = this.anchor, n = this.focus;
    return new xn(at(t.key, t.offset, t.type), at(n.key, n.offset, n.type), this.format, this.style);
  }
  toggleFormat(t) {
    this.format = Qo(this.format, t, null), this.dirty = !0;
  }
  setStyle(t) {
    this.style = t, this.dirty = !0;
  }
  hasFormat(t) {
    const n = ln[t];
    return !!(this.format & n);
  }
  insertRawText(t) {
    const n = t.split(/(\r?\n|\t)/), r = [], o = n.length;
    for (let i = 0; i < o; i++) {
      const s = n[i];
      s === `
` || s === `\r
` ? r.push(un()) : s === "	" ? r.push(La()) : r.push(ce(s));
    }
    this.insertNodes(r);
  }
  insertText(t) {
    const n = this.anchor, r = this.focus, o = this.format, i = this.style;
    let s = n, l = r;
    !this.isCollapsed() && r.isBefore(n) && (s = r, l = n), s.type === "element" && function(y, v, w, b) {
      const k = y.getNode(), E = k.getChildAtIndex(y.offset), j = ce(), _ = Te(k) ? Be().append(j) : j;
      j.setFormat(w), j.setStyle(b), E === null ? k.append(_) : E.insertBefore(_), y.is(v) && v.set(j.__key, 0, "text"), y.set(j.__key, 0, "text");
    }(s, l, o, i), l.type === "element" && Nr(l, ot(Pt(l, "next")));
    const c = s.offset;
    let u = l.offset;
    const d = this.getNodes(), p = d.length;
    let f = d[0];
    F(f) || M(26);
    const h = f.getTextContent().length, m = f.getParentOrThrow();
    let g = d[p - 1];
    if (p === 1 && l.type === "element" && (u = h, l.set(s.key, u, "text")), this.isCollapsed() && c === h && (f.isSegmented() || f.isToken() || !f.canInsertTextAfter() || !m.canInsertTextAfter() && f.getNextSibling() === null)) {
      let y = f.getNextSibling();
      if (F(y) && y.canInsertTextBefore() && !On(y) || (y = ce(), y.setFormat(o), y.setStyle(i), m.canInsertTextAfter() ? f.insertAfter(y) : m.insertAfter(y)), y.select(0, 0), f = y, t !== "") return void this.insertText(t);
    } else if (this.isCollapsed() && c === 0 && (f.isSegmented() || f.isToken() || !f.canInsertTextBefore() || !m.canInsertTextBefore() && f.getPreviousSibling() === null)) {
      let y = f.getPreviousSibling();
      if (F(y) && !On(y) || (y = ce(), y.setFormat(o), m.canInsertTextBefore() ? f.insertBefore(y) : m.insertBefore(y)), y.select(), f = y, t !== "") return void this.insertText(t);
    } else if (f.isSegmented() && c !== h) {
      const y = ce(f.getTextContent());
      y.setFormat(o), f.replace(y), f = y;
    } else if (!this.isCollapsed() && t !== "") {
      const y = g.getParent();
      if (!m.canInsertTextBefore() || !m.canInsertTextAfter() || N(y) && (!y.canInsertTextBefore() || !y.canInsertTextAfter())) return this.insertText(""), vh(this.anchor, this.focus, null), void this.insertText(t);
    }
    if (p === 1) {
      if (f.isToken()) {
        const b = ce(t);
        return b.select(), void f.replace(b);
      }
      const y = f.getFormat(), v = f.getStyle();
      if (c !== u || y === o && v === i) {
        if (vw(f)) {
          const b = ce(t);
          return b.setFormat(o), b.setStyle(i), b.select(), void f.replace(b);
        }
      } else {
        if (f.getTextContent() !== "") {
          const b = ce(t);
          if (b.setFormat(o), b.setStyle(i), b.select(), c === 0) f.insertBefore(b, !1);
          else {
            const [k] = f.splitText(c);
            k.insertAfter(b, !1);
          }
          return void (b.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= t.length));
        }
        f.setFormat(o), f.setStyle(i);
      }
      const w = u - c;
      f = f.spliceText(c, w, t, !0), f.getTextContent() === "" ? f.remove() : this.anchor.type === "text" && (f.isComposing() ? this.anchor.offset -= t.length : (this.format = y, this.style = v));
    } else {
      const y = /* @__PURE__ */ new Set([...f.getParentKeys(), ...g.getParentKeys()]), v = N(f) ? f : f.getParentOrThrow();
      let w = N(g) ? g : g.getParentOrThrow(), b = g;
      if (!v.is(w) && w.isInline()) do
        b = w, w = w.getParentOrThrow();
      while (w.isInline());
      if (l.type === "text" && (u !== 0 || g.getTextContent() === "") || l.type === "element" && g.getIndexWithinParent() < u) if (F(g) && !g.isToken() && u !== g.getTextContentSize()) {
        if (g.isSegmented()) {
          const $ = ce(g.getTextContent());
          g.replace($), g = $;
        }
        Te(l.getNode()) || l.type !== "text" || (g = g.spliceText(0, u, "")), y.add(g.__key);
      } else {
        const $ = g.getParentOrThrow();
        $.canBeEmpty() || $.getChildrenSize() !== 1 ? g.remove() : $.remove();
      }
      else y.add(g.__key);
      const k = w.getChildren(), E = new Set(d), j = v.is(w), _ = v.isInline() && f.getNextSibling() === null ? v : f;
      for (let $ = k.length - 1; $ >= 0; $--) {
        const D = k[$];
        if (D.is(f) || N(D) && D.isParentOf(f)) break;
        D.isAttached() && (!E.has(D) || D.is(b) ? j || _.insertAfter(D, !1) : D.remove());
      }
      if (!j) {
        let $ = w, D = null;
        for (; $ !== null; ) {
          const O = $.getChildren(), C = O.length;
          (C === 0 || O[C - 1].is(D)) && (y.delete($.__key), D = $), $ = $.getParent();
        }
      }
      if (f.isToken()) if (c === h) f.select();
      else {
        const $ = ce(t);
        $.select(), f.replace($);
      }
      else f = f.spliceText(c, h - c, t, !0), f.getTextContent() === "" ? f.remove() : f.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= t.length);
      for (let $ = 1; $ < p; $++) {
        const D = d[$], O = D.__key;
        y.has(O) || D.remove();
      }
    }
  }
  removeText() {
    const t = U() === this;
    zo(this, e1(ru(this))), t && U() !== this && Me(this);
  }
  formatText(t, n = null) {
    if (this.isCollapsed()) return this.toggleFormat(t), void ke(null);
    const r = this.getNodes(), o = [];
    for (const k of r) F(k) && o.push(k);
    const i = (k) => {
      r.forEach((E) => {
        if (N(E)) {
          const j = E.getFormatFlags(t, k);
          E.setTextFormat(j);
        }
      });
    }, s = o.length;
    if (s === 0) return this.toggleFormat(t), ke(null), void i(n);
    const l = this.anchor, c = this.focus, u = this.isBackward(), d = u ? c : l, p = u ? l : c;
    let f = 0, h = o[0], m = d.type === "element" ? 0 : d.offset;
    if (d.type === "text" && m === h.getTextContentSize() && (f = 1, h = o[1], m = 0), h == null) return;
    const g = h.getFormatFlags(t, n);
    i(g);
    const y = s - 1;
    let v = o[y];
    const w = p.type === "text" ? p.offset : v.getTextContentSize();
    if (h.is(v)) {
      if (m === w) return;
      if (On(h) || m === 0 && w === h.getTextContentSize()) h.setFormat(g);
      else {
        const k = h.splitText(m, w), E = m === 0 ? k[0] : k[1];
        E.setFormat(g), d.type === "text" && d.set(E.__key, 0, "text"), p.type === "text" && p.set(E.__key, w - m, "text");
      }
      return void (this.format = g);
    }
    m === 0 || On(h) || ([, h] = h.splitText(m), m = 0), h.setFormat(g);
    const b = v.getFormatFlags(t, g);
    w > 0 && (w === v.getTextContentSize() || On(v) || ([v] = v.splitText(w)), v.setFormat(b));
    for (let k = f + 1; k < y; k++) {
      const E = o[k], j = E.getFormatFlags(t, b);
      E.setFormat(j);
    }
    d.type === "text" && d.set(h.__key, m, "text"), p.type === "text" && p.set(v.__key, w, "text"), this.format = g | b;
  }
  insertNodes(t) {
    if (t.length === 0) return;
    if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
      this.insertParagraph();
      const m = U();
      return q(m) || M(134), m.insertNodes(t);
    }
    const n = (this.isBackward() ? this.focus : this.anchor).getNode(), r = is(n, Ct), o = t[t.length - 1];
    if (N(r) && "__language" in r) {
      if ("__language" in t[0]) this.insertText(t[0].getTextContent());
      else {
        const m = ts(this);
        r.splice(m, 0, t), o.selectEnd();
      }
      return;
    }
    if (!t.some((m) => (N(m) || re(m)) && !m.isInline())) {
      N(r) || M(211, n.constructor.name, n.getType());
      const m = ts(this);
      return r.splice(m, 0, t), void o.selectEnd();
    }
    const i = function(m) {
      const g = Be();
      let y = null;
      for (let v = 0; v < m.length; v++) {
        const w = m[v], b = Cr(w);
        if (b || re(w) && w.isInline() || N(w) && w.isInline() || F(w) || w.isParentRequired()) {
          if (y === null && (y = w.createParentElementNode(), g.append(y), b)) continue;
          y !== null && y.append(w);
        } else g.append(w), y = null;
      }
      return g;
    }(t), s = i.getLastDescendant(), l = i.getChildren(), c = !N(r) || !r.isEmpty() ? this.insertParagraph() : null, u = l[l.length - 1];
    let d = l[0];
    var p;
    N(p = d) && Ct(p) && !p.isEmpty() && N(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (N(r) || M(211, n.constructor.name, n.getType()), r.append(...d.getChildren()), d = l[1]), d && (r === null && M(212, n.constructor.name, n.getType()), function(m, g, y) {
      const v = g.getParentOrThrow().getLastChild();
      let w = g;
      const b = [g];
      for (; w !== v; ) w.getNextSibling() || M(140), w = w.getNextSibling(), b.push(w);
      let k = m;
      for (const E of b) k = k.insertAfter(E);
    }(r, d));
    const f = is(s, Ct);
    c && N(f) && (c.canMergeWhenEmpty() || Ct(u)) && (f.append(...c.getChildren()), c.remove()), N(r) && r.isEmpty() && r.remove(), s.selectEnd();
    const h = N(r) ? r.getLastChild() : null;
    Cr(h) && f !== r && h.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const s = Be();
      return de().splice(this.anchor.offset, 0, [s]), s.select(), s;
    }
    const t = ts(this), n = is(this.anchor.getNode(), Ct);
    N(n) || M(213);
    const r = n.getChildAtIndex(t), o = r ? [r, ...r.getNextSiblings()] : [], i = n.insertNewAfter(this, !1);
    return i ? (i.append(...o), i.selectStart(), i) : null;
  }
  insertLineBreak(t) {
    const n = un();
    if (this.insertNodes([n]), t) {
      const r = n.getParentOrThrow(), o = n.getIndexWithinParent();
      r.select(o, o);
    }
  }
  extract() {
    const t = this.getNodes(), n = t.length, r = n - 1, o = this.anchor, i = this.focus;
    let s = t[0], l = t[r];
    const [c, u] = qs(this);
    if (n === 0) return [];
    if (n === 1) {
      if (F(s) && !this.isCollapsed()) {
        const p = c > u ? u : c, f = c > u ? c : u, h = s.splitText(p, f), m = p === 0 ? h[0] : h[1];
        return m != null ? [m] : [];
      }
      return [s];
    }
    const d = o.isBefore(i);
    if (F(s)) {
      const p = d ? c : u;
      p === s.getTextContentSize() ? t.shift() : p !== 0 && ([, s] = s.splitText(p), t[0] = s);
    }
    if (F(l)) {
      const p = l.getTextContent().length, f = d ? u : c;
      f === 0 ? t.pop() : f !== p && ([l] = l.splitText(f), t[r] = l);
    }
    return t;
  }
  modify(t, n, r) {
    if (Rc(this, t, n, r)) return;
    const o = t === "move", i = ue(), s = lt(He(i));
    if (!s) return;
    const l = i._blockCursorElement, c = i._rootElement, u = this.focus.getNode();
    if (c === null || l === null || !N(u) || u.isInline() || u.canBeEmpty() || Ls(l, i, c), this.dirty) {
      let d = Hn(i, this.anchor.key), p = Hn(i, this.focus.key);
      this.anchor.type === "text" && (d = Bn(d)), this.focus.type === "text" && (p = Bn(p)), d && p && wh(s, d, this.anchor.offset, p, this.focus.offset);
    }
    if (function(d, p, f, h) {
      d.modify(p, f, h);
    }(s, t, n ? "backward" : "forward", r), s.rangeCount > 0) {
      const d = s.getRangeAt(0), p = this.anchor.getNode(), f = Te(p) ? p : Mw(p);
      if (this.applyDOMRange(d), this.dirty = !0, !o) {
        const h = this.getNodes(), m = [];
        let g = !1;
        for (let y = 0; y < h.length; y++) {
          const v = h[y];
          Fs(v, f) ? m.push(v) : g = !0;
        }
        if (g && m.length > 0) if (n) {
          const y = m[0];
          N(y) ? y.selectStart() : y.getParentOrThrow().selectStart();
        } else {
          const y = m[m.length - 1];
          N(y) ? y.selectEnd() : y.getParentOrThrow().selectEnd();
        }
        s.anchorNode === d.startContainer && s.anchorOffset === d.startOffset || function(y) {
          const v = y.focus, w = y.anchor, b = w.key, k = w.offset, E = w.type;
          w.set(v.key, v.offset, v.type, !0), v.set(b, k, E, !0);
        }(this);
      }
    }
    r === "lineboundary" && Rc(this, t, n, r, "decorators");
  }
  forwardDeletion(t, n, r) {
    if (!r && (t.type === "element" && N(n) && t.offset === n.getChildrenSize() || t.type === "text" && t.offset === n.getTextContentSize())) {
      const o = n.getParent(), i = n.getNextSibling() || (o === null ? null : o.getNextSibling());
      if (N(i) && i.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(t) {
    const n = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let o = r.getNode();
      if (this.forwardDeletion(r, o, t)) return;
      const i = ol(Pt(r, t ? "previous" : "next"));
      if (i.getTextSlices().every((l) => l === null || l.distance === 0)) {
        let l = { type: "initial" };
        for (const c of i.iterNodeCarets("shadowRoot")) if (it(c)) {
          if (!c.origin.isInline()) {
            if (c.origin.isShadowRoot()) {
              if (l.type === "merge-block") break;
              if (N(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                const u = ot(c);
                zo(this, pn(u, u)), i.anchor.origin.remove();
              }
              return;
            }
            l.type !== "merge-next-block" && l.type !== "merge-block" || (l = { block: l.block, caret: c, type: "merge-block" });
          }
        } else {
          if (l.type === "merge-block") break;
          if (Un(c)) {
            if (N(c.origin)) {
              if (c.origin.isInline()) {
                if (!c.origin.isParentOf(i.anchor.origin)) break;
              } else l = { block: c.origin, type: "merge-next-block" };
              continue;
            }
            if (re(c.origin)) {
              if (!c.origin.isIsolated()) if (l.type === "merge-next-block" && (c.origin.isKeyboardSelectable() || !c.origin.isInline()) && N(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                i.anchor.origin.remove();
                const u = kh();
                u.add(c.origin.getKey()), Me(u);
              } else c.origin.remove();
              return;
            }
            break;
          }
        }
        if (l.type === "merge-block") {
          const { caret: c, block: u } = l;
          return zo(this, pn(!c.origin.isEmpty() && u.isEmpty() ? il(je(u, c.direction)) : i.anchor, c)), this.removeText();
        }
      }
      const s = this.focus;
      if (this.modify("extend", t, "character"), this.isCollapsed()) {
        if (t && r.offset === 0 && $c(this, r.getNode())) return;
      } else {
        const l = s.type === "text" ? s.getNode() : null;
        if (o = r.type === "text" ? r.getNode() : null, l !== null && l.isSegmented()) {
          const c = s.offset, u = l.getTextContentSize();
          if (l.is(o) || t && c !== u || !t && c !== 0) return void Ic(l, t, c);
        } else if (o !== null && o.isSegmented()) {
          const c = r.offset, u = o.getTextContentSize();
          if (o.is(l) || t && c !== 0 || !t && c !== u) return void Ic(o, t, c);
        }
        (function(c, u) {
          const d = c.anchor, p = c.focus, f = d.getNode(), h = p.getNode();
          if (f === h && d.type === "text" && p.type === "text") {
            const m = d.offset, g = p.offset, y = m < g, v = y ? m : g, w = y ? g : m, b = w - 1;
            v !== b && function(k) {
              return !(Ah(k) || bw(k));
            }(f.getTextContent().slice(v, w)) && (u ? p.set(p.key, b, p.type) : d.set(d.key, b, d.type));
          }
        })(this, t);
      }
    }
    if (this.removeText(), t && !n && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && Te(r.getParent()) && r.getPreviousSibling() === null && $c(this, r);
    }
  }
  deleteLine(t) {
    this.isCollapsed() && this.modify("extend", t, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(t) : this.removeText();
  }
  deleteWord(t) {
    if (this.isCollapsed()) {
      const n = this.anchor, r = n.getNode();
      if (this.forwardDeletion(n, r, t)) return;
      this.modify("extend", t, "word");
    }
    this.removeText();
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
function Ba(e) {
  return e instanceof xi;
}
function Tc(e) {
  const t = e.offset;
  if (e.type === "text") return t;
  const n = e.getNode();
  return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function qs(e) {
  const t = e.getStartEndPoints();
  if (t === null) return [0, 0];
  const [n, r] = t;
  return n.type === "element" && r.type === "element" && n.key === r.key && n.offset === r.offset ? [0, 0] : [Tc(n), Tc(r)];
}
function $c(e, t) {
  for (let n = t; n; n = n.getParent()) {
    if (N(n)) {
      if (n.collapseAtStart(e)) return !0;
      if (Vt(n)) break;
    }
    if (n.getPreviousSibling()) break;
  }
  return !1;
}
const bw = (() => {
  try {
    const e = new RegExp("\\p{Emoji}", "u"), t = e.test.bind(e);
    if (t("❤️") && t("#️⃣") && t("👍")) return t;
  } catch {
  }
  return () => !1;
})();
function Ic(e, t, n) {
  const r = e, o = r.getTextContent().split(/(?=\s)/g), i = o.length;
  let s = 0, l = 0;
  for (let u = 0; u < i; u++) {
    const d = u === i - 1;
    if (l = s, s += o[u].length, t && s === n || s > n || d) {
      o.splice(u, 1), d && (l = void 0);
      break;
    }
  }
  const c = o.join("").trim();
  c === "" ? r.remove() : (r.setTextContent(c), r.select(l, l));
}
function Dc(e, t, n, r) {
  let o, i = t;
  if (Ae(e)) {
    let s = !1;
    const l = e.childNodes, c = l.length, u = r._blockCursorElement;
    i === c && (s = !0, i = c - 1);
    let d = l[i], p = !1;
    if (d === u) d = l[i + 1], p = !0;
    else if (u !== null) {
      const f = u.parentNode;
      e === f && t > Array.prototype.indexOf.call(f.children, u) && i--;
    }
    if (o = $n(d), F(o)) i = Wc(o, s);
    else {
      let f = $n(e);
      if (f === null) return null;
      if (N(f)) {
        const h = r.getElementByKey(f.getKey());
        h === null && M(214), [f, i] = f.getDOMSlot(h).resolveChildIndex(f, h, e, t), N(f) || M(215), s && i >= f.getChildrenSize() && (i = Math.max(0, f.getChildrenSize() - 1));
        let g = f.getChildAtIndex(i);
        if (N(g) && function(y, v, w) {
          const b = y.getParent();
          return w === null || b === null || !b.canBeEmpty() || b !== w.getNode();
        }(g, 0, n)) {
          const y = s ? g.getLastDescendant() : g.getFirstDescendant();
          y === null ? f = g : (g = y, f = N(g) ? g : g.getParentOrThrow()), i = 0;
        }
        F(g) ? (o = g, f = null, i = Wc(g, s)) : g !== f && s && !p && (N(f) || M(216), i = Math.min(f.getChildrenSize(), i + 1));
      } else {
        const h = f.getIndexWithinParent();
        i = t === 0 && re(f) && $n(e) === f ? h : h + 1, f = f.getParentOrThrow();
      }
      if (N(f)) return at(f.__key, i, "element");
    }
  } else o = $n(e);
  return F(o) ? at(o.__key, i, "text") : null;
}
function Pc(e, t, n) {
  const r = e.offset, o = e.getNode();
  if (r === 0) {
    const i = o.getPreviousSibling(), s = o.getParent();
    if (t) {
      if ((n || !t) && i === null && N(s) && s.isInline()) {
        const l = s.getPreviousSibling();
        F(l) && e.set(l.__key, l.getTextContent().length, "text");
      }
    } else N(i) && !n && i.isInline() ? e.set(i.__key, i.getChildrenSize(), "element") : F(i) && e.set(i.__key, i.getTextContent().length, "text");
  } else if (r === o.getTextContent().length) {
    const i = o.getNextSibling(), s = o.getParent();
    if (t && N(i) && i.isInline()) e.set(i.__key, 0, "element");
    else if ((n || t) && i === null && N(s) && s.isInline() && !s.canInsertTextAfter()) {
      const l = s.getNextSibling();
      F(l) && e.set(l.__key, 0, "text");
    }
  }
}
function vh(e, t, n) {
  if (e.type === "text" && t.type === "text") {
    const r = e.isBefore(t), o = e.is(t);
    Pc(e, r, o), Pc(t, !r, o), o && t.set(e.key, e.offset, e.type);
    const i = ue();
    if (i.isComposing() && i._compositionKey !== e.key && q(n)) {
      const s = n.anchor, l = n.focus;
      e.set(s.key, s.offset, s.type, !0), t.set(l.key, l.offset, l.type, !0);
    }
  }
}
function xh(e, t, n, r, o, i) {
  if (e === null || n === null || !Si(o, e, n)) return null;
  const s = Dc(e, t, q(i) ? i.anchor : null, o);
  if (s === null) return null;
  const l = Dc(n, r, q(i) ? i.focus : null, o);
  if (l === null) return null;
  if (s.type === "element" && l.type === "element") {
    const c = $n(e), u = $n(n);
    if (re(c) && re(u)) return null;
  }
  return vh(s, l, i), [s, l];
}
function bh(e, t, n, r, o, i) {
  const s = Ut(), l = new xn(at(e, t, o), at(n, r, i), 0, "");
  return l.dirty = !0, s._selection = l, l;
}
function kw() {
  const e = at("root", 0, "element"), t = at("root", 0, "element");
  return new xn(e, t, 0, "");
}
function kh() {
  return new xi(/* @__PURE__ */ new Set());
}
function Ha(e, t, n, r) {
  const o = n._window;
  if (o === null) return null;
  const i = r || o.event, s = i ? i.type : void 0, l = s === "selectionchange", c = !ws && (l || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && i && i.detail === 3 || s === "drop" || s === void 0);
  let u, d, p, f;
  if (q(e) && !c) return e.clone();
  if (t === null) return null;
  if (u = t.anchorNode, d = t.focusNode, p = t.anchorOffset, f = t.focusOffset, l && q(e) && !Si(n, u, d)) return e.clone();
  const h = xh(u, p, d, f, n, e);
  if (h === null) return null;
  const [m, g] = h;
  return new xn(m, g, q(e) ? e.format : 0, q(e) ? e.style : "");
}
function U() {
  return Ut()._selection;
}
function Gr() {
  return ue()._editorState._selection;
}
function Xo(e, t, n, r = 1) {
  const o = e.anchor, i = e.focus, s = o.getNode(), l = i.getNode();
  if (!t.is(s) && !t.is(l)) return;
  const c = t.__key;
  if (e.isCollapsed()) {
    const u = o.offset;
    if (n <= u && r > 0 || n < u && r < 0) {
      const d = Math.max(0, u + r);
      o.set(c, d, "element"), i.set(c, d, "element"), zc(e);
    }
  } else {
    const u = e.isBackward(), d = u ? i : o, p = d.getNode(), f = u ? o : i, h = f.getNode();
    if (t.is(p)) {
      const m = d.offset;
      (n <= m && r > 0 || n < m && r < 0) && d.set(c, Math.max(0, m + r), "element");
    }
    if (t.is(h)) {
      const m = f.offset;
      (n <= m && r > 0 || n < m && r < 0) && f.set(c, Math.max(0, m + r), "element");
    }
  }
  zc(e);
}
function zc(e) {
  const t = e.anchor, n = t.offset, r = e.focus, o = r.offset, i = t.getNode(), s = r.getNode();
  if (e.isCollapsed()) {
    if (!N(i)) return;
    const l = i.getChildrenSize(), c = n >= l, u = c ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(n);
    if (F(u)) {
      let d = 0;
      c && (d = u.getTextContentSize()), t.set(u.__key, d, "text"), r.set(u.__key, d, "text");
    }
  } else {
    if (N(i)) {
      const l = i.getChildrenSize(), c = n >= l, u = c ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(n);
      if (F(u)) {
        let d = 0;
        c && (d = u.getTextContentSize()), t.set(u.__key, d, "text");
      }
    }
    if (N(s)) {
      const l = s.getChildrenSize(), c = o >= l, u = c ? s.getChildAtIndex(l - 1) : s.getChildAtIndex(o);
      if (F(u)) {
        let d = 0;
        c && (d = u.getTextContentSize()), r.set(u.__key, d, "text");
      }
    }
  }
}
function Yo(e, t, n, r, o) {
  let i = null, s = 0, l = null;
  r !== null ? (i = r.__key, F(r) ? (s = r.getTextContentSize(), l = "text") : N(r) && (s = r.getChildrenSize(), l = "element")) : o !== null && (i = o.__key, F(o) ? l = "text" : N(o) && (l = "element")), i !== null && l !== null ? e.set(i, s, l) : (s = t.getIndexWithinParent(), s === -1 && (s = n.getChildrenSize()), e.set(n.__key, s, "element"));
}
function Ac(e, t, n, r, o) {
  e.type === "text" ? e.set(n, e.offset + (t ? 0 : o), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function wh(e, t, n, r, o) {
  try {
    e.setBaseAndExtent(t, n, r, o);
  } catch {
  }
}
function ww(e, t, n, r, o, i, s) {
  const l = r.anchorNode, c = r.focusNode, u = r.anchorOffset, d = r.focusOffset, p = document.activeElement;
  if (o.has("collaboration") && p !== i || p !== null && $h(p)) return;
  if (!q(t)) return void (e !== null && Si(n, l, c) && r.removeAllRanges());
  const f = t.anchor, h = t.focus, m = f.key, g = h.key, y = Hn(n, m), v = Hn(n, g), w = f.offset, b = h.offset, k = t.format, E = t.style, j = t.isCollapsed();
  let _ = y, $ = v, D = !1;
  if (f.type === "text") {
    _ = Bn(y);
    const R = f.getNode();
    D = R.getFormat() !== k || R.getStyle() !== E;
  } else q(e) && e.anchor.type === "text" && (D = !0);
  var O, C, I, T, A;
  if (h.type === "text" && ($ = Bn(v)), _ !== null && $ !== null && (j && (e === null || D || q(e) && (e.format !== k || e.style !== E)) && (O = k, C = E, I = w, T = m, A = performance.now(), uh = [O, C, I, T, A]), u !== w || d !== b || l !== _ || c !== $ || r.type === "Range" && j || (p !== null && i.contains(p) || i.focus({ preventScroll: !0 }), f.type === "element"))) {
    if (wh(r, _, w, $, b), !o.has("skip-scroll-into-view") && t.isCollapsed() && i !== null && i === document.activeElement) {
      const R = q(t) && t.anchor.type === "element" ? _.childNodes[w] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
      if (R !== null) {
        let H;
        if (R instanceof Text) {
          const V = document.createRange();
          V.selectNode(R), H = V.getBoundingClientRect();
        } else H = R.getBoundingClientRect();
        (function(V, L, ee) {
          const Y = qh(ee), se = Za(Y);
          if (Y === null || se === null) return;
          let { top: we, bottom: ft } = L, be = 0, Re = 0, J = ee;
          for (; J !== null; ) {
            const G = J === Y.body;
            if (G) be = 0, Re = He(V).innerHeight;
            else {
              const he = J.getBoundingClientRect();
              be = he.top, Re = he.bottom;
            }
            let Z = 0;
            if (we < be ? Z = -(be - we) : ft > Re && (Z = ft - Re), Z !== 0) if (G) se.scrollBy(0, Z);
            else {
              const he = J.scrollTop;
              J.scrollTop += Z;
              const Ze = J.scrollTop - he;
              we -= Ze, ft -= Ze;
            }
            if (G) break;
            J = Qr(J);
          }
        })(n, H, i);
      }
    }
    Rs = !0;
  }
}
function ts(e) {
  let t = e;
  e.isCollapsed() || t.removeText();
  const n = U();
  q(n) && (t = n), q(t) || M(161);
  const r = t.anchor;
  let o = r.getNode(), i = r.offset;
  for (; !Ct(o); ) {
    const s = o;
    if ([o, i] = Sw(o, i), s.is(o)) break;
  }
  return i;
}
function Sw(e, t) {
  const n = e.getParent();
  if (!n) {
    const o = Be();
    return de().append(o), o.select(), [de(), 0];
  }
  if (F(e)) {
    const o = e.splitText(t);
    if (o.length === 0) return [n, e.getIndexWithinParent()];
    const i = t === 0 ? 0 : 1;
    return [n, o[0].getIndexWithinParent() + i];
  }
  if (!N(e) || t === 0) return [n, e.getIndexWithinParent()];
  const r = e.getChildAtIndex(t);
  if (r) {
    const o = new xn(at(e.__key, t, "element"), at(e.__key, t, "element"), 0, ""), i = e.insertNewAfter(o);
    i && i.append(r, ...r.getNextSiblings());
  }
  return [n, e.getIndexWithinParent() + 1];
}
function Rc(e, t, n, r, o = "decorators-and-blocks") {
  if (t === "move" && r === "character" && !e.isCollapsed()) {
    const [d, p] = n === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
    return p.set(d.key, d.offset, d.type), !0;
  }
  const i = Pt(e.focus, n ? "previous" : "next"), s = r === "lineboundary", l = t === "move";
  let c = i, u = o === "decorators-and-blocks";
  if (!Uh(c)) {
    for (const d of c) {
      u = !1;
      const { origin: p } = d;
      if (!re(p) || p.isIsolated() || (c = d, !s || !p.isInline())) break;
    }
    if (u) for (const d of ol(i).iterNodeCarets(t === "extend" ? "shadowRoot" : "root")) {
      if (it(d)) d.origin.isInline() || (c = d);
      else {
        if (N(d.origin)) continue;
        re(d.origin) && !d.origin.isInline() && (c = d);
      }
      break;
    }
  }
  if (c === i) return !1;
  if (l && !s && re(c.origin) && c.origin.isKeyboardSelectable()) {
    const d = kh();
    return d.add(c.origin.getKey()), Me(d), !0;
  }
  return c = ot(c), l && Nr(e.anchor, c), Nr(e.focus, c), u || !s;
}
let ve = null, xe = null, Pe = !1, ns = !1, Do = 0;
const Nc = { characterData: !0, childList: !0, subtree: !0 };
function Kr() {
  return Pe || ve !== null && ve._readOnly;
}
function Se() {
  Pe && M(13);
}
function Sh() {
  Do > 99 && M(14);
}
function Ut() {
  return ve === null && M(195, jh()), ve;
}
function ue() {
  return xe === null && M(196, jh()), xe;
}
function jh() {
  let e = 0;
  const t = /* @__PURE__ */ new Set(), n = wi.version;
  if (typeof window < "u") for (const o of document.querySelectorAll("[contenteditable]")) {
    const i = ji(o);
    if (Ga(i)) e++;
    else if (i) {
      let s = String(i.constructor.version || "<0.17.1");
      s === n && (s += " (separately built, likely a bundler configuration issue)"), t.add(s);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
  return t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`), r;
}
function jw() {
  return xe;
}
function Mc(e, t, n) {
  const r = t.__type, o = function(l, c) {
    const u = l._nodes.get(c);
    return u === void 0 && M(30, c), u;
  }(e, r);
  let i = n.get(r);
  i === void 0 && (i = Array.from(o.transforms), n.set(r, i));
  const s = i.length;
  for (let l = 0; l < s && (i[l](t), t.isAttached()); l++) ;
}
function qc(e, t) {
  return e !== void 0 && e.__key !== t && e.isAttached();
}
function Ch(e, t) {
  if (!t) return;
  const n = e._updateTags;
  let r = t;
  Array.isArray(t) || (r = [t]);
  for (const o of r) n.add(o);
}
function _h(e, t) {
  const n = e.type, r = t.get(n);
  r === void 0 && M(17, n);
  const o = r.klass;
  e.type !== o.getType() && M(18, o.name);
  const i = o.importJSON(e), s = e.children;
  if (N(i) && Array.isArray(s)) for (let l = 0; l < s.length; l++) {
    const c = _h(s[l], t);
    i.append(c);
  }
  return i;
}
function Fc(e, t, n) {
  const r = ve, o = Pe, i = xe;
  ve = t, Pe = !0, xe = e;
  try {
    return n();
  } finally {
    ve = r, Pe = o, xe = i;
  }
}
function yt(e, t) {
  const n = e._pendingEditorState, r = e._rootElement, o = e._headless || r === null;
  if (n === null) return;
  const i = e._editorState, s = i._selection, l = n._selection, c = e._dirtyType !== an, u = ve, d = Pe, p = xe, f = e._updating, h = e._observer;
  let m = null;
  if (e._pendingEditorState = null, e._editorState = n, !o && c && h !== null) {
    xe = e, ve = n, Pe = !1, e._updating = !0;
    try {
      const j = e._dirtyType, _ = e._dirtyElements, $ = e._dirtyLeaves;
      h.disconnect(), m = J0(i, n, e, j, _, $);
    } catch (j) {
      if (j instanceof Error && e._onError(j), ns) throw j;
      return Th(e, null, r, n), Uf(e), e._dirtyType = Ln, ns = !0, yt(e, i), void (ns = !1);
    } finally {
      h.observe(r, Nc), e._updating = f, ve = u, Pe = d, xe = p;
    }
  }
  n._readOnly || (n._readOnly = !0);
  const g = e._dirtyLeaves, y = e._dirtyElements, v = e._normalizedNodes, w = e._updateTags, b = e._deferred;
  c && (e._dirtyType = an, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), function(j, _) {
    const $ = j._decorators;
    let D = j._pendingDecorators || $;
    const O = _._nodeMap;
    let C;
    for (C in D) O.has(C) || (D === $ && (D = Ph(j)), delete D[C]);
  }(e, n);
  const k = o ? null : lt(He(e));
  if (e._editable && k !== null && (c || l === null || l.dirty) && r !== null && !w.has("skip-dom-selection")) {
    xe = e, ve = n;
    try {
      if (h !== null && h.disconnect(), c || l === null || l.dirty) {
        const j = e._blockCursorElement;
        j !== null && Ls(j, e, r), ww(s, l, e, k, w, r);
      }
      (function(j, _, $) {
        let D = j._blockCursorElement;
        if (q($) && $.isCollapsed() && $.anchor.type === "element" && _.contains(document.activeElement)) {
          const O = $.anchor, C = O.getNode(), I = O.offset;
          let T = !1, A = null;
          if (I === C.getChildrenSize())
            os(C.getChildAtIndex(I - 1)) && (T = !0);
          else {
            const R = C.getChildAtIndex(I);
            if (R !== null && os(R)) {
              const H = R.getPreviousSibling();
              (H === null || os(H)) && (T = !0, A = j.getElementByKey(R.__key));
            }
          }
          if (T) {
            const R = j.getElementByKey(C.__key);
            return D === null && (j._blockCursorElement = D = function(H) {
              const V = H.theme, L = document.createElement("div");
              L.contentEditable = "false", L.setAttribute("data-lexical-cursor", "true");
              let ee = V.blockCursor;
              if (ee !== void 0) {
                if (typeof ee == "string") {
                  const Y = Bo(ee);
                  ee = V.blockCursor = Y;
                }
                ee !== void 0 && L.classList.add(...ee);
              }
              return L;
            }(j._config)), _.style.caretColor = "transparent", void (A === null ? R.appendChild(D) : R.insertBefore(D, A));
          }
        }
        D !== null && Ls(D, j, _);
      })(e, r, l);
    } finally {
      h !== null && h.observe(r, Nc), xe = p, ve = u;
    }
  }
  m !== null && function(j, _, $, D, O) {
    const C = Array.from(j._listeners.mutation), I = C.length;
    for (let T = 0; T < I; T++) {
      const [A, R] = C[T], H = _.get(R);
      H !== void 0 && A(H, { dirtyLeaves: D, prevEditorState: O, updateTags: $ });
    }
  }(e, m, w, g, i), q(l) || l === null || s !== null && s.is(l) || e.dispatchCommand(Qf, void 0);
  const E = e._pendingDecorators;
  E !== null && (e._decorators = E, e._pendingDecorators = null, _r("decorator", e, !0, E)), function(j, _, $) {
    const D = Vc(_), O = Vc($);
    D !== O && _r("textcontent", j, !0, O);
  }(e, t || i, n), _r("update", e, !0, { dirtyElements: y, dirtyLeaves: g, editorState: n, mutatedNodes: m, normalizedNodes: v, prevEditorState: t || i, tags: w }), function(j, _) {
    if (j._deferred = [], _.length !== 0) {
      const $ = j._updating;
      j._updating = !0;
      try {
        for (let D = 0; D < _.length; D++) _[D]();
      } finally {
        j._updating = $;
      }
    }
  }(e, b), function(j) {
    const _ = j._updates;
    if (_.length !== 0) {
      const $ = _.shift();
      if ($) {
        const [D, O] = $;
        Ua(j, D, O);
      }
    }
  }(e);
}
function _r(e, t, n, ...r) {
  const o = t._updating;
  t._updating = n;
  try {
    const i = Array.from(t._listeners[e]);
    for (let s = 0; s < i.length; s++) i[s].apply(null, r);
  } finally {
    t._updating = o;
  }
}
function Lc(e, t) {
  const n = e._updates;
  let r = t || !1;
  for (; n.length !== 0; ) {
    const o = n.shift();
    if (o) {
      const [i, s] = o;
      let l;
      if (s !== void 0) {
        if (l = s.onUpdate, s.skipTransforms && (r = !0), s.discrete) {
          const c = e._pendingEditorState;
          c === null && M(191), c._flushSync = !0;
        }
        l && e._deferred.push(l), Ch(e, s.tag);
      }
      i();
    }
  }
  return r;
}
function Ua(e, t, n) {
  const r = e._updateTags;
  let o, i = !1, s = !1;
  n !== void 0 && (o = n.onUpdate, Ch(e, n.tag), i = n.skipTransforms || !1, s = n.discrete || !1), o && e._deferred.push(o);
  const l = e._editorState;
  let c = e._pendingEditorState, u = !1;
  (c === null || c._readOnly) && (c = e._pendingEditorState = Eh(c || l), u = !0), c._flushSync = s;
  const d = ve, p = Pe, f = xe, h = e._updating;
  ve = c, Pe = !1, e._updating = !0, xe = e;
  const m = e._headless || e.getRootElement() === null;
  try {
    u && (m ? l._selection !== null && (c._selection = l._selection.clone()) : c._selection = function(w, b) {
      const k = w.getEditorState()._selection, E = lt(He(w));
      return q(k) || k == null ? Ha(k, E, w, b) : k.clone();
    }(e, n && n.event || null));
    const y = e._compositionKey;
    t(), i = Lc(e, i), function(w, b) {
      const k = b.getEditorState()._selection, E = w._selection;
      if (q(E)) {
        const j = E.anchor, _ = E.focus;
        let $;
        if (j.type === "text" && ($ = j.getNode(), $.selectionTransform(k, E)), _.type === "text") {
          const D = _.getNode();
          $ !== D && D.selectionTransform(k, E);
        }
      }
    }(c, e), e._dirtyType !== an && (i ? function(w, b) {
      const k = b._dirtyLeaves, E = w._nodeMap;
      for (const j of k) {
        const _ = E.get(j);
        F(_) && _.isAttached() && _.isSimpleText() && !_.isUnmergeable() && vc(_);
      }
    }(c, e) : function(w, b) {
      const k = b._dirtyLeaves, E = b._dirtyElements, j = w._nodeMap, _ = _t(), $ = /* @__PURE__ */ new Map();
      let D = k, O = D.size, C = E, I = C.size;
      for (; O > 0 || I > 0; ) {
        if (O > 0) {
          b._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const T of D) {
            const A = j.get(T);
            F(A) && A.isAttached() && A.isSimpleText() && !A.isUnmergeable() && vc(A), A !== void 0 && qc(A, _) && Mc(b, A, $), k.add(T);
          }
          if (D = b._dirtyLeaves, O = D.size, O > 0) {
            Do++;
            continue;
          }
        }
        b._dirtyLeaves = /* @__PURE__ */ new Set(), b._dirtyElements = /* @__PURE__ */ new Map(), C.delete("root") && C.set("root", !0);
        for (const T of C) {
          const A = T[0], R = T[1];
          if (E.set(A, R), !R) continue;
          const H = j.get(A);
          H !== void 0 && qc(H, _) && Mc(b, H, $);
        }
        D = b._dirtyLeaves, O = D.size, C = b._dirtyElements, I = C.size, Do++;
      }
      b._dirtyLeaves = k, b._dirtyElements = E;
    }(c, e), Lc(e), function(w, b, k, E) {
      const j = w._nodeMap, _ = b._nodeMap, $ = [];
      for (const [D] of E) {
        const O = _.get(D);
        O !== void 0 && (O.isAttached() || (N(O) && Lf(O, D, j, _, $, E), j.has(D) || E.delete(D), $.push(D)));
      }
      for (const D of $) _.delete(D);
      for (const D of k) {
        const O = _.get(D);
        O === void 0 || O.isAttached() || (j.has(D) || k.delete(D), _.delete(D));
      }
    }(l, c, e._dirtyLeaves, e._dirtyElements)), y !== e._compositionKey && (c._flushSync = !0);
    const v = c._selection;
    if (q(v)) {
      const w = c._nodeMap, b = v.anchor.key, k = v.focus.key;
      w.get(b) !== void 0 && w.get(k) !== void 0 || M(19);
    } else Ba(v) && v._nodes.size === 0 && (c._selection = null);
  } catch (y) {
    return y instanceof Error && e._onError(y), e._pendingEditorState = l, e._dirtyType = Ln, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), void yt(e);
  } finally {
    ve = d, Pe = p, xe = f, e._updating = h, Do = 0;
  }
  e._dirtyType !== an || e._deferred.length > 0 || function(y, v) {
    const w = v.getEditorState()._selection, b = y._selection;
    if (b !== null) {
      if (b.dirty || !b.is(w)) return !0;
    } else if (w !== null) return !0;
    return !1;
  }(c, e) ? c._flushSync ? (c._flushSync = !1, yt(e)) : u && Iw(() => {
    yt(e);
  }) : (c._flushSync = !1, u && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function Ne(e, t, n) {
  xe === e && n === void 0 ? t() : Ua(e, t, n);
}
class Er {
  constructor(t, n, r) {
    this.element = t, this.before = n || null, this.after = r || null;
  }
  withBefore(t) {
    return new Er(this.element, t, this.after);
  }
  withAfter(t) {
    return new Er(this.element, this.before, t);
  }
  withElement(t) {
    return this.element === t ? this : new Er(t, this.before, this.after);
  }
  insertChild(t) {
    const n = this.before || this.getManagedLineBreak();
    return n !== null && n.parentElement !== this.element && M(222), this.element.insertBefore(t, n), this;
  }
  removeChild(t) {
    return t.parentElement !== this.element && M(223), this.element.removeChild(t), this;
  }
  replaceChild(t, n) {
    return n.parentElement !== this.element && M(224), this.element.replaceChild(t, n), this;
  }
  getFirstChild() {
    const t = this.after ? this.after.nextSibling : this.element.firstChild;
    return t === this.before || t === this.getManagedLineBreak() ? null : t;
  }
  getManagedLineBreak() {
    return this.element.__lexicalLineBreak || null;
  }
  setManagedLineBreak(t) {
    if (t === null) this.removeManagedLineBreak();
    else {
      const n = t === "decorator" && (Fn || Tr);
      this.insertManagedLineBreak(n);
    }
  }
  removeManagedLineBreak() {
    const t = this.getManagedLineBreak();
    if (t) {
      const n = this.element, r = t.nodeName === "IMG" ? t.nextSibling : null;
      r && n.removeChild(r), n.removeChild(t), n.__lexicalLineBreak = void 0;
    }
  }
  insertManagedLineBreak(t) {
    const n = this.getManagedLineBreak();
    if (n) {
      if (t === (n.nodeName === "IMG")) return;
      this.removeManagedLineBreak();
    }
    const r = this.element, o = this.before, i = document.createElement("br");
    if (r.insertBefore(i, o), t) {
      const s = document.createElement("img");
      s.setAttribute("data-lexical-linebreak", "true"), s.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", s.alt = "", r.insertBefore(s, i), r.__lexicalLineBreak = s;
    } else r.__lexicalLineBreak = i;
  }
  getFirstChildOffset() {
    let t = 0;
    for (let n = this.after; n !== null; n = n.previousSibling) t++;
    return t;
  }
  resolveChildIndex(t, n, r, o) {
    if (r === this.element) {
      const c = this.getFirstChildOffset();
      return [t, Math.min(c + t.getChildrenSize(), Math.max(c, o))];
    }
    const i = Bc(n, r);
    i.push(o);
    const s = Bc(n, this.element);
    let l = t.getIndexWithinParent();
    for (let c = 0; c < s.length; c++) {
      const u = i[c], d = s[c];
      if (u === void 0 || u < d) break;
      if (u > d) {
        l += 1;
        break;
      }
    }
    return [t.getParentOrThrow(), l];
  }
}
function Bc(e, t) {
  const n = [];
  let r = t;
  for (; r !== e && r !== null; r = t.parentNode) {
    let o = 0;
    for (let i = r.previousSibling; i !== null; i = i.previousSibling) o++;
    n.push(o);
  }
  return r !== e && M(225), n.reverse();
}
class bi extends vi {
  constructor(t) {
    super(t), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__first = t.__first, this.__last = t.__last, this.__size = t.__size, this.__indent = t.__indent, this.__format = t.__format, this.__style = t.__style, this.__dir = t.__dir, this.__textFormat = t.__textFormat, this.__textStyle = t.__textStyle;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const t = this.getFormat();
    return F0[t] || "";
  }
  getStyle() {
    return this.getLatest().__style;
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    const t = [];
    let n = this.getFirstChild();
    for (; n !== null; ) t.push(n), n = n.getNextSibling();
    return t;
  }
  getChildrenKeys() {
    const t = [];
    let n = this.getFirstChild();
    for (; n !== null; ) t.push(n.__key), n = n.getNextSibling();
    return t;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    const t = ue()._dirtyElements;
    return t !== null && t.has(this.__key);
  }
  isLastChild() {
    const t = this.getLatest(), n = this.getParentOrThrow().getLastChild();
    return n !== null && n.is(t);
  }
  getAllTextNodes() {
    const t = [];
    let n = this.getFirstChild();
    for (; n !== null; ) {
      if (F(n) && t.push(n), N(n)) {
        const r = n.getAllTextNodes();
        t.push(...r);
      }
      n = n.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; N(t); ) {
      const n = t.getFirstChild();
      if (n === null) break;
      t = n;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; N(t); ) {
      const n = t.getLastChild();
      if (n === null) break;
      t = n;
    }
    return t;
  }
  getDescendantByIndex(t) {
    const n = this.getChildren(), r = n.length;
    if (t >= r) {
      const i = n[r - 1];
      return N(i) && i.getLastDescendant() || i || null;
    }
    const o = n[t];
    return N(o) && o.getFirstDescendant() || o || null;
  }
  getFirstChild() {
    const t = this.getLatest().__first;
    return t === null ? null : me(t);
  }
  getFirstChildOrThrow() {
    const t = this.getFirstChild();
    return t === null && M(45, this.__key), t;
  }
  getLastChild() {
    const t = this.getLatest().__last;
    return t === null ? null : me(t);
  }
  getLastChildOrThrow() {
    const t = this.getLastChild();
    return t === null && M(96, this.__key), t;
  }
  getChildAtIndex(t) {
    const n = this.getChildrenSize();
    let r, o;
    if (t < n / 2) {
      for (r = this.getFirstChild(), o = 0; r !== null && o <= t; ) {
        if (o === t) return r;
        r = r.getNextSibling(), o++;
      }
      return null;
    }
    for (r = this.getLastChild(), o = n - 1; r !== null && o >= t; ) {
      if (o === t) return r;
      r = r.getPreviousSibling(), o--;
    }
    return null;
  }
  getTextContent() {
    let t = "";
    const n = this.getChildren(), r = n.length;
    for (let o = 0; o < r; o++) {
      const i = n[o];
      t += i.getTextContent(), N(i) && o !== r - 1 && !i.isInline() && (t += xt);
    }
    return t;
  }
  getTextContentSize() {
    let t = 0;
    const n = this.getChildren(), r = n.length;
    for (let o = 0; o < r; o++) {
      const i = n[o];
      t += i.getTextContentSize(), N(i) && o !== r - 1 && !i.isInline() && (t += xt.length);
    }
    return t;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  hasFormat(t) {
    if (t !== "") {
      const n = gc[t];
      return !!(this.getFormat() & n);
    }
    return !1;
  }
  hasTextFormat(t) {
    const n = ln[t];
    return !!(this.getTextFormat() & n);
  }
  getFormatFlags(t, n) {
    return Qo(this.getLatest().__textFormat, t, n);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(t, n) {
    Se();
    const r = U();
    let o = t, i = n;
    const s = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && n === 0) {
        const c = this.getFirstChild();
        if (F(c) || N(c)) return c.select(0, 0);
      } else if (!(t !== void 0 && t !== s || n !== void 0 && n !== s)) {
        const c = this.getLastChild();
        if (F(c) || N(c)) return c.select();
      }
    }
    o === void 0 && (o = s), i === void 0 && (i = s);
    const l = this.__key;
    return q(r) ? (r.anchor.set(l, o, "element"), r.focus.set(l, i, "element"), r.dirty = !0, r) : bh(l, o, l, i, "element", "element");
  }
  selectStart() {
    const t = this.getFirstDescendant();
    return t ? t.selectStart() : this.select();
  }
  selectEnd() {
    const t = this.getLastDescendant();
    return t ? t.selectEnd() : this.select();
  }
  clear() {
    const t = this.getWritable();
    return this.getChildren().forEach((n) => n.remove()), t;
  }
  append(...t) {
    return this.splice(this.getChildrenSize(), 0, t);
  }
  setDirection(t) {
    const n = this.getWritable();
    return n.__dir = t, n;
  }
  setFormat(t) {
    return this.getWritable().__format = t !== "" ? gc[t] : 0, this;
  }
  setStyle(t) {
    return this.getWritable().__style = t || "", this;
  }
  setTextFormat(t) {
    const n = this.getWritable();
    return n.__textFormat = t, n;
  }
  setTextStyle(t) {
    const n = this.getWritable();
    return n.__textStyle = t, n;
  }
  setIndent(t) {
    return this.getWritable().__indent = t, this;
  }
  splice(t, n, r) {
    const o = r.length, i = this.getChildrenSize(), s = this.getWritable();
    t + n <= i || M(226, String(t), String(n), String(i));
    const l = s.__key, c = [], u = [], d = this.getChildAtIndex(t + n);
    let p = null, f = i - n + o;
    if (t !== 0) if (t === i) p = this.getLastChild();
    else {
      const m = this.getChildAtIndex(t);
      m !== null && (p = m.getPreviousSibling());
    }
    if (n > 0) {
      let m = p === null ? this.getFirstChild() : p.getNextSibling();
      for (let g = 0; g < n; g++) {
        m === null && M(100);
        const y = m.getNextSibling(), v = m.__key;
        rn(m.getWritable()), u.push(v), m = y;
      }
    }
    let h = p;
    for (let m = 0; m < o; m++) {
      const g = r[m];
      h !== null && g.is(h) && (p = h = h.getPreviousSibling());
      const y = g.getWritable();
      y.__parent === l && f--, rn(y);
      const v = g.__key;
      if (h === null) s.__first = v, y.__prev = null;
      else {
        const w = h.getWritable();
        w.__next = v, y.__prev = w.__key;
      }
      g.__key === l && M(76), y.__parent = l, c.push(v), h = g;
    }
    if (t + n === i)
      h !== null && (h.getWritable().__next = null, s.__last = h.__key);
    else if (d !== null) {
      const m = d.getWritable();
      if (h !== null) {
        const g = h.getWritable();
        m.__prev = h.__key, g.__next = d.__key;
      } else m.__prev = null;
    }
    if (s.__size = f, u.length) {
      const m = U();
      if (q(m)) {
        const g = new Set(u), y = new Set(c), { anchor: v, focus: w } = m;
        Hc(v, g, y) && Yo(v, v.getNode(), this, p, d), Hc(w, g, y) && Yo(w, w.getNode(), this, p, d), f !== 0 || this.canBeEmpty() || Vt(this) || this.remove();
      }
    }
    return s;
  }
  getDOMSlot(t) {
    return new Er(t);
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    if (Ae(n)) {
      const r = this.getIndent();
      r > 0 && (n.style.paddingInlineStart = 40 * r + "px");
      const o = this.getDirection();
      o && (n.dir = o);
    }
    return { element: n };
  }
  exportJSON() {
    const t = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, n = this.getTextFormat(), r = this.getTextStyle();
    return n !== 0 && (t.textFormat = n), r !== "" && (t.textStyle = r), t;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setFormat(t.format).setIndent(t.indent).setDirection(t.direction).setTextFormat(t.textFormat || 0).setTextStyle(t.textStyle || "");
  }
  insertNewAfter(t, n) {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart(t) {
    return !1;
  }
  excludeFromCopy(t) {
    return !1;
  }
  canReplaceWith(t) {
    return !0;
  }
  canInsertAfter(t) {
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
  canMergeWith(t) {
    return !1;
  }
  extractWithChild(t, n, r) {
    return !1;
  }
  canMergeWhenEmpty() {
    return !1;
  }
  reconcileObservedMutation(t, n) {
    const r = this.getDOMSlot(t);
    let o = r.getFirstChild();
    for (let i = this.getFirstChild(); i; i = i.getNextSibling()) {
      const s = n.getElementByKey(i.getKey());
      s !== null && (o == null ? (r.insertChild(s), o = s) : o !== s && r.replaceChild(s, o), o = o.nextSibling);
    }
  }
}
function N(e) {
  return e instanceof bi;
}
function Hc(e, t, n) {
  let r = e.getNode();
  for (; r; ) {
    const o = r.__key;
    if (t.has(o) && !n.has(o)) return !0;
    r = r.getParent();
  }
  return !1;
}
class Cw extends vi {
  decorate(t, n) {
    M(47);
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
}
function re(e) {
  return e instanceof Cw;
}
class Xr extends bi {
  static getType() {
    return "root";
  }
  static clone() {
    return new Xr();
  }
  constructor() {
    super("root"), this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    M(51);
  }
  getTextContent() {
    const t = this.__cachedText;
    return !Kr() && ue()._dirtyType !== an || t === null ? super.getTextContent() : t;
  }
  remove() {
    M(52);
  }
  replace(t) {
    M(53);
  }
  insertBefore(t) {
    M(54);
  }
  insertAfter(t) {
    M(55);
  }
  updateDOM(t, n) {
    return !1;
  }
  splice(t, n, r) {
    for (const o of r) N(o) || re(o) || M(282);
    return super.splice(t, n, r);
  }
  static importJSON(t) {
    return de().updateFromJSON(t);
  }
  collapseAtStart() {
    return !0;
  }
}
function Te(e) {
  return e instanceof Xr;
}
function Eh(e) {
  return new ki(new Map(e._nodeMap));
}
function Va() {
  return new ki(/* @__PURE__ */ new Map([["root", new Xr()]]));
}
function Oh(e) {
  const t = e.exportJSON(), n = e.constructor;
  if (t.type !== n.getType() && M(130, n.name), N(e)) {
    const r = t.children;
    Array.isArray(r) || M(59, n.name);
    const o = e.getChildren();
    for (let i = 0; i < o.length; i++) {
      const s = Oh(o[i]);
      r.push(s);
    }
  }
  return t;
}
class ki {
  constructor(t, n) {
    this._nodeMap = t, this._selection = n || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(t, n) {
    return Fc(n && n.editor || null, this, t);
  }
  clone(t) {
    const n = new ki(this._nodeMap, t === void 0 ? this._selection : t);
    return n._readOnly = !0, n;
  }
  toJSON() {
    return Fc(null, this, () => ({ root: Oh(de()) }));
  }
}
class _w extends bi {
  static getType() {
    return "artificial";
  }
  createDOM(t) {
    return document.createElement("div");
  }
}
class Yr extends bi {
  static getType() {
    return "paragraph";
  }
  static clone(t) {
    return new Yr(t.__key);
  }
  createDOM(t) {
    const n = document.createElement("p"), r = zn(t.theme, "paragraph");
    return r !== void 0 && n.classList.add(...r), n;
  }
  updateDOM(t, n, r) {
    return !1;
  }
  static importDOM() {
    return { p: (t) => ({ conversion: Ew, priority: 0 }) };
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    if (Ae(n)) {
      this.isEmpty() && n.append(document.createElement("br"));
      const r = this.getFormatType();
      n.style.textAlign = r;
    }
    return { element: n };
  }
  static importJSON(t) {
    return Be().updateFromJSON(t);
  }
  exportJSON() {
    return { ...super.exportJSON(), textFormat: this.getTextFormat(), textStyle: this.getTextStyle() };
  }
  insertNewAfter(t, n) {
    const r = Be();
    r.setTextFormat(t.format), r.setTextStyle(t.style);
    const o = this.getDirection();
    return r.setDirection(o), r.setFormat(this.getFormatType()), r.setStyle(this.getStyle()), this.insertAfter(r, n), r;
  }
  collapseAtStart() {
    const t = this.getChildren();
    if (t.length === 0 || F(t[0]) && t[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function Ew(e) {
  const t = Be();
  return e.style && (t.setFormat(e.style.textAlign), Hw(e, t)), { node: t };
}
function Be() {
  return Ei(new Yr());
}
function Ow(e) {
  return e instanceof Yr;
}
const ae = 0, Wa = 1;
function Th(e, t, n, r) {
  const o = e._keyToDOMMap;
  o.clear(), e._editorState = Va(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = an, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
  const i = e._observer;
  i !== null && (i.disconnect(), e._observer = null), t !== null && (t.textContent = ""), n !== null && (n.textContent = "", o.set("root", n));
}
function Tw(e) {
  const t = e || {}, n = jw(), r = t.theme || {}, o = e === void 0 ? n : t.parentEditor || null, i = t.disableEvents || !1, s = Va(), l = t.namespace || (o !== null ? o._config.namespace : Rh()), c = t.editorState, u = [Xr, Ht, ir, Wr, Yr, _w, ...t.nodes || []], { onError: d, html: p } = t, f = t.editable === void 0 || t.editable;
  let h;
  if (e === void 0 && n !== null) h = n._nodes;
  else {
    h = /* @__PURE__ */ new Map();
    for (let g = 0; g < u.length; g++) {
      let y = u[g], v = null, w = null;
      if (typeof y != "function") {
        const j = y;
        y = j.replace, v = j.with, w = j.withKlass || null;
      }
      const b = y.getType(), k = y.transform(), E = /* @__PURE__ */ new Set();
      k !== null && E.add(k), h.set(b, { exportDOM: p && p.export ? p.export.get(y) : void 0, klass: y, replace: v, replaceWithKlass: w, transforms: E });
    }
  }
  const m = new wi(s, o, h, { disableEvents: i, namespace: l, theme: r }, d || console.error, function(g, y) {
    const v = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), b = (k) => {
      Object.keys(k).forEach((E) => {
        let j = v.get(E);
        j === void 0 && (j = [], v.set(E, j)), j.push(k[E]);
      });
    };
    return g.forEach((k) => {
      const E = k.klass.importDOM;
      if (E == null || w.has(E)) return;
      w.add(E);
      const j = E.call(k.klass);
      j !== null && b(j);
    }), y && b(y), v;
  }(h, p ? p.import : void 0), f, e);
  return c !== void 0 && (m._pendingEditorState = c, m._dirtyType = Ln), m;
}
class wi {
  constructor(t, n, r, o, i, s, l, c) {
    this._createEditorArgs = c, this._parentEditor = n, this._rootElement = null, this._editorState = t, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = o, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = an, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Rh(), this._onError = i, this._htmlConversions = s, this._editable = l, this._headless = n !== null && n._headless, this._window = null, this._blockCursorElement = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(t) {
    const n = this._listeners.update;
    return n.add(t), () => {
      n.delete(t);
    };
  }
  registerEditableListener(t) {
    const n = this._listeners.editable;
    return n.add(t), () => {
      n.delete(t);
    };
  }
  registerDecoratorListener(t) {
    const n = this._listeners.decorator;
    return n.add(t), () => {
      n.delete(t);
    };
  }
  registerTextContentListener(t) {
    const n = this._listeners.textcontent;
    return n.add(t), () => {
      n.delete(t);
    };
  }
  registerRootListener(t) {
    const n = this._listeners.root;
    return t(this._rootElement, null), n.add(t), () => {
      t(null, this._rootElement), n.delete(t);
    };
  }
  registerCommand(t, n, r) {
    r === void 0 && M(35);
    const o = this._commands;
    o.has(t) || o.set(t, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const i = o.get(t);
    i === void 0 && M(36, String(t));
    const s = i[r];
    return s.add(n), () => {
      s.delete(n), i.every((l) => l.size === 0) && o.delete(t);
    };
  }
  registerMutationListener(t, n, r) {
    const o = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(t)).klass, i = this._listeners.mutation;
    i.set(n, o);
    const s = r && r.skipInitialization;
    return s !== void 0 && s || this.initializeMutationListener(n, o), () => {
      i.delete(n);
    };
  }
  getRegisteredNode(t) {
    const n = this._nodes.get(t.getType());
    return n === void 0 && M(37, t.name), n;
  }
  resolveRegisteredNodeAfterReplacements(t) {
    for (; t.replaceWithKlass; ) t = this.getRegisteredNode(t.replaceWithKlass);
    return t;
  }
  initializeMutationListener(t, n) {
    const r = this._editorState, o = eu(r).get(n.getType());
    if (!o) return;
    const i = /* @__PURE__ */ new Map();
    for (const s of o.keys()) i.set(s, "created");
    i.size > 0 && t(i, { dirtyLeaves: /* @__PURE__ */ new Set(), prevEditorState: r, updateTags: /* @__PURE__ */ new Set(["registerMutationListener"]) });
  }
  registerNodeTransformToKlass(t, n) {
    const r = this.getRegisteredNode(t);
    return r.transforms.add(n), r;
  }
  registerNodeTransform(t, n) {
    const r = this.registerNodeTransformToKlass(t, n), o = [r], i = r.replaceWithKlass;
    if (i != null) {
      const s = this.registerNodeTransformToKlass(i, n);
      o.push(s);
    }
    return function(s, l) {
      const c = eu(s.getEditorState()), u = [];
      for (const d of l) {
        const p = c.get(d);
        p && u.push(p);
      }
      u.length !== 0 && s.update(() => {
        for (const d of u) for (const p of d.keys()) {
          const f = me(p);
          f && f.markDirty();
        }
      }, s._pendingEditorState === null ? { tag: "history-merge" } : void 0);
    }(this, o.map((s) => s.klass.getType())), () => {
      o.forEach((s) => s.transforms.delete(n));
    };
  }
  hasNode(t) {
    return this._nodes.has(t.getType());
  }
  hasNodes(t) {
    return t.every(this.hasNode.bind(this));
  }
  dispatchCommand(t, n) {
    return B(this, t, n);
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
  setRootElement(t) {
    const n = this._rootElement;
    if (t !== n) {
      const r = zn(this._config.theme, "root"), o = this._pendingEditorState || this._editorState;
      if (this._rootElement = t, Th(this, n, t, o), n !== null && (this._config.disableEvents || dw(n), r != null && n.classList.remove(...r)), t !== null) {
        const i = Za(t), s = t.style;
        s.userSelect = "text", s.whiteSpace = "pre-wrap", s.wordBreak = "break-word", t.setAttribute("data-lexical-editor", "true"), this._window = i, this._dirtyType = Ln, Uf(this), this._updateTags.add("history-merge"), yt(this), this._config.disableEvents || function(l, c) {
          const u = l.ownerDocument, d = Ko.get(u);
          (d === void 0 || d < 1) && u.addEventListener("selectionchange", gh), Ko.set(u, (d || 0) + 1), l.__lexicalEditor = c;
          const p = ph(l);
          for (let f = 0; f < zs.length; f++) {
            const [h, m] = zs[f], g = typeof m == "function" ? (y) => {
              jc(y) || (Sc(y), (c.isEditable() || h === "click") && m(y, c));
            } : (y) => {
              if (jc(y)) return;
              Sc(y);
              const v = c.isEditable();
              switch (h) {
                case "cut":
                  return v && B(c, qa, y);
                case "copy":
                  return B(c, Ma, y);
                case "paste":
                  return v && B(c, Aa, y);
                case "dragstart":
                  return v && B(c, ah, y);
                case "dragover":
                  return v && B(c, iw, y);
                case "dragend":
                  return v && B(c, sw, y);
                case "focus":
                  return v && B(c, cw, y);
                case "blur":
                  return v && B(c, lh, y);
                case "drop":
                  return v && B(c, sh, y);
              }
            };
            l.addEventListener(h, g), p.push(() => {
              l.removeEventListener(h, g);
            });
          }
        }(t, this), r != null && t.classList.add(...r);
      } else this._window = null, this._updateTags.add("history-merge"), yt(this);
      _r("root", this, !1, t, n);
    }
  }
  getElementByKey(t) {
    return this._keyToDOMMap.get(t) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(t, n) {
    t.isEmpty() && M(38);
    let r = t;
    r._readOnly && (r = Eh(t), r._selection = t._selection ? t._selection.clone() : null), Hf(this);
    const o = this._pendingEditorState, i = this._updateTags, s = n !== void 0 ? n.tag : null;
    o === null || o.isEmpty() || (s != null && i.add(s), yt(this)), this._pendingEditorState = r, this._dirtyType = Ln, this._dirtyElements.set("root", !1), this._compositionKey = null, s != null && i.add(s), this._updating || yt(this);
  }
  parseEditorState(t, n) {
    return function(r, o, i) {
      const s = Va(), l = ve, c = Pe, u = xe, d = o._dirtyElements, p = o._dirtyLeaves, f = o._cloneNotNeeded, h = o._dirtyType;
      o._dirtyElements = /* @__PURE__ */ new Map(), o._dirtyLeaves = /* @__PURE__ */ new Set(), o._cloneNotNeeded = /* @__PURE__ */ new Set(), o._dirtyType = 0, ve = s, Pe = !1, xe = o;
      try {
        const m = o._nodes;
        _h(r.root, m), i && i(), s._readOnly = !0;
      } catch (m) {
        m instanceof Error && o._onError(m);
      } finally {
        o._dirtyElements = d, o._dirtyLeaves = p, o._cloneNotNeeded = f, o._dirtyType = h, ve = l, Pe = c, xe = u;
      }
      return s;
    }(typeof t == "string" ? JSON.parse(t) : t, this, n);
  }
  read(t) {
    return yt(this), this.getEditorState().read(t, { editor: this });
  }
  update(t, n) {
    (function(r, o, i) {
      r._updating ? r._updates.push([o, i]) : Ua(r, o, i);
    })(this, t, n);
  }
  focus(t, n = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), Ne(this, () => {
      const o = U(), i = de();
      o !== null ? o.dirty || Me(o.clone()) : i.getChildrenSize() !== 0 && (n.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()), Rw("focus"), Nw(() => {
        r.removeAttribute("autocapitalize"), t && t();
      });
    }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const t = this._rootElement;
    t !== null && t.blur();
    const n = lt(this._window);
    n !== null && n.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(t) {
    this._editable !== t && (this._editable = t, _r("editable", this, !0, t));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
wi.version = "0.30.0+prod.esm";
let $w = 1;
const Iw = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
};
function Uc(e) {
  return re(Ka(e));
}
function $h(e) {
  const t = document.activeElement;
  if (!Ae(t)) return !1;
  const n = t.nodeName;
  return re(Ka(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && ji(t) == null);
}
function Si(e, t, n) {
  const r = e.getRootElement();
  try {
    return r !== null && r.contains(t) && r.contains(n) && t !== null && !$h(t) && Ih(t) === e;
  } catch {
    return !1;
  }
}
function Ga(e) {
  return e instanceof wi;
}
function Ih(e) {
  let t = e;
  for (; t != null; ) {
    const n = ji(t);
    if (Ga(n)) return n;
    t = Qr(t);
  }
  return null;
}
function ji(e) {
  return e ? e.__lexicalEditor : null;
}
function On(e) {
  return e.isToken() || e.isSegmented();
}
function St(e) {
  return Jr(e) && e.nodeType === T0;
}
function Dw(e) {
  return Jr(e) && e.nodeType === $0;
}
function Bn(e) {
  let t = e;
  for (; t != null; ) {
    if (St(t)) return t;
    t = t.firstChild;
  }
  return null;
}
function Qo(e, t, n) {
  const r = ln[t];
  if (n !== null && (e & r) == (n & r)) return e;
  let o = e ^ r;
  return t === "subscript" ? o &= -65 : t === "superscript" ? o &= -33 : t === "lowercase" ? (o &= -513, o &= -1025) : t === "uppercase" ? (o &= -257, o &= -1025) : t === "capitalize" && (o &= -257, o &= -513), o;
}
function Pw(e, t) {
  if (t != null) return void (e.__key = t);
  Se(), Sh();
  const n = ue(), r = Ut(), o = "" + $w++;
  r._nodeMap.set(o, e), N(e) ? n._dirtyElements.set(o, !0) : n._dirtyLeaves.add(o), n._cloneNotNeeded.add(o), n._dirtyType = Mf, e.__key = o;
}
function rn(e) {
  const t = e.getParent();
  if (t !== null) {
    const n = e.getWritable(), r = t.getWritable(), o = e.getPreviousSibling(), i = e.getNextSibling();
    if (o === null) if (i !== null) {
      const s = i.getWritable();
      r.__first = i.__key, s.__prev = null;
    } else r.__first = null;
    else {
      const s = o.getWritable();
      if (i !== null) {
        const l = i.getWritable();
        l.__prev = s.__key, s.__next = l.__key;
      } else s.__next = null;
      n.__prev = null;
    }
    if (i === null) if (o !== null) {
      const s = o.getWritable();
      r.__last = o.__key, s.__next = null;
    } else r.__last = null;
    else {
      const s = i.getWritable();
      if (o !== null) {
        const l = o.getWritable();
        l.__next = s.__key, s.__prev = l.__key;
      } else s.__prev = null;
      n.__next = null;
    }
    r.__size--, n.__parent = null;
  }
}
function Jo(e) {
  Sh();
  const t = e.getLatest(), n = t.__parent, r = Ut(), o = ue(), i = r._nodeMap, s = o._dirtyElements;
  n !== null && function(c, u, d) {
    let p = c;
    for (; p !== null; ) {
      if (d.has(p)) return;
      const f = u.get(p);
      if (f === void 0) break;
      d.set(p, !1), p = f.__parent;
    }
  }(n, i, s);
  const l = t.__key;
  o._dirtyType = Mf, N(e) ? s.set(l, !0) : o._dirtyLeaves.add(l);
}
function ke(e) {
  Se();
  const t = ue(), n = t._compositionKey;
  if (e !== n) {
    if (t._compositionKey = e, n !== null) {
      const r = me(n);
      r !== null && r.getWritable();
    }
    if (e !== null) {
      const r = me(e);
      r !== null && r.getWritable();
    }
  }
}
function _t() {
  return Kr() ? null : ue()._compositionKey;
}
function me(e, t) {
  const n = (t || Ut())._nodeMap.get(e);
  return n === void 0 ? null : n;
}
function Dh(e, t) {
  const n = Ci(e, ue());
  return n !== void 0 ? me(n, t) : null;
}
function Ci(e, t) {
  return e[`__lexicalKey_${t._key}`];
}
function Ka(e, t) {
  let n = e;
  for (; n != null; ) {
    const r = Dh(n, t);
    if (r !== null) return r;
    n = Qr(n);
  }
  return null;
}
function Ph(e) {
  const t = e._decorators, n = Object.assign({}, t);
  return e._pendingDecorators = n, n;
}
function Vc(e) {
  return e.read(() => de().getTextContent());
}
function de() {
  return zh(Ut());
}
function zh(e) {
  return e._nodeMap.get("root");
}
function Me(e) {
  Se();
  const t = Ut();
  e !== null && (e.dirty = !0, e.setCachedNodes(null)), t._selection = e;
}
function $n(e) {
  const t = ue(), n = function(r, o) {
    let i = r;
    for (; i != null; ) {
      const s = Ci(i, o);
      if (s !== void 0) return s;
      i = Qr(i);
    }
    return null;
  }(e, t);
  return n === null ? e === t.getRootElement() ? me("root") : null : me(n);
}
function Wc(e, t) {
  return t ? e.getTextContentSize() : 0;
}
function Ah(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function Xa(e) {
  const t = [];
  let n = e;
  for (; n !== null; ) t.push(n), n = n._parentEditor;
  return t;
}
function Rh() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Nh(e) {
  return St(e) ? e.nodeValue : null;
}
function Ya(e, t, n) {
  const r = lt(He(t));
  if (r === null) return;
  const o = r.anchorNode;
  let { anchorOffset: i, focusOffset: s } = r;
  if (o !== null) {
    let l = Nh(o);
    const c = Ka(o);
    if (l !== null && F(c)) {
      if (l === mi && n) {
        const u = n.length;
        l = n, i = u, s = u;
      }
      l !== null && Qa(c, l, i, s, e);
    }
  }
}
function Qa(e, t, n, r, o) {
  let i = e;
  if (i.isAttached() && (o || !i.isDirty())) {
    const s = i.isComposing();
    let l = t;
    (s || o) && t[t.length - 1] === mi && (l = t.slice(0, -1));
    const c = i.getTextContent();
    if (o || l !== c) {
      if (l === "") {
        if (ke(null), Tr || Fn || Lo) i.remove();
        else {
          const g = ue();
          setTimeout(() => {
            g.update(() => {
              i.isAttached() && i.remove();
            });
          }, 20);
        }
        return;
      }
      const u = i.getParent(), d = Gr(), p = i.getTextContentSize(), f = _t(), h = i.getKey();
      if (i.isToken() || f !== null && h === f && !s || q(d) && (u !== null && !u.canInsertTextBefore() && d.anchor.offset === 0 || d.anchor.key === e.__key && d.anchor.offset === 0 && !i.canInsertTextBefore() && !s || d.focus.key === e.__key && d.focus.offset === p && !i.canInsertTextAfter() && !s)) return void i.markDirty();
      const m = U();
      if (!q(m) || n === null || r === null) return void i.setTextContent(l);
      if (m.setTextNodeRange(i, n, i, r), i.isSegmented()) {
        const g = ce(i.getTextContent());
        i.replace(g), i = g;
      }
      i.setTextContent(l);
    }
  }
}
function Gc(e) {
  return e === "ArrowLeft";
}
function Kc(e) {
  return e === "ArrowRight";
}
function xr(e, t) {
  return We ? e : t;
}
function Xc(e) {
  return e === "Enter";
}
function jn(e) {
  return e === "Backspace";
}
function hr(e) {
  return e === "Delete";
}
function Yc(e, t, n) {
  return e.toLowerCase() === "a" && xr(t, n);
}
function zw(e) {
  const t = de();
  if (q(e)) {
    const n = e.anchor, r = e.focus, o = n.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    return n.set(o.getKey(), 0, "element"), r.set(o.getKey(), o.getChildrenSize(), "element"), Ss(e), e;
  }
  {
    const n = t.select(0, t.getChildrenSize());
    return Me(Ss(n)), n;
  }
}
function zn(e, t) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  const n = e.__lexicalClassNameCache, r = n[t];
  if (r !== void 0) return r;
  const o = e[t];
  if (typeof o == "string") {
    const i = Bo(o);
    return n[t] = i, i;
  }
  return o;
}
function Ja(e, t, n, r, o) {
  if (n.size === 0) return;
  const i = r.__type, s = r.__key, l = t.get(i);
  l === void 0 && M(33, i);
  const c = l.klass;
  let u = e.get(c);
  u === void 0 && (u = /* @__PURE__ */ new Map(), e.set(c, u));
  const d = u.get(s), p = d === "destroyed" && o === "created";
  (d === void 0 || p) && u.set(s, p ? "updated" : o);
}
function Qc(e, t, n) {
  const r = e.getParent();
  let o = n, i = e;
  return r !== null && (n === 0 && (o = i.getIndexWithinParent(), i = r)), i.getChildAtIndex(o - 1);
}
function Aw(e, t) {
  const n = e.offset;
  if (e.type === "element")
    return Qc(e.getNode(), t, n);
  {
    const r = e.getNode();
    if (n === 0 || !t) {
      const o = r.getPreviousSibling();
      return o === null ? Qc(r.getParentOrThrow(), t, r.getIndexWithinParent() + 0) : o;
    }
  }
  return null;
}
function Mh(e) {
  const t = He(e).event, n = t && t.inputType;
  return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
}
function B(e, t, n) {
  return function(r, o, i) {
    const s = Xa(r);
    for (let l = 4; l >= 0; l--) for (let c = 0; c < s.length; c++) {
      const u = s[c], d = u._commands.get(o);
      if (d !== void 0) {
        const p = d[l];
        if (p !== void 0) {
          const f = Array.from(p), h = f.length;
          let m = !1;
          if (Ne(u, () => {
            for (let g = 0; g < h; g++) if (f[g](i, r)) return void (m = !0);
          }), m) return m;
        }
      }
    }
    return !1;
  }(e, t, n);
}
function _i(e) {
  return !Te(e) && !e.isLastChild() && !e.isInline();
}
function Hn(e, t) {
  const n = e._keyToDOMMap.get(t);
  return n === void 0 && M(75, t), n;
}
function Qr(e) {
  const t = e.assignedSlot || e.parentElement;
  return Bs(t) ? t.host : t;
}
function qh(e) {
  return Dw(e) ? e : Ae(e) ? e.ownerDocument : null;
}
function Rw(e) {
  Se(), ue()._updateTags.add(e);
}
function Nw(e) {
  Se(), ue()._deferred.push(e);
}
function Fs(e, t) {
  let n = e.getParent();
  for (; n !== null; ) {
    if (n.is(t)) return !0;
    n = n.getParent();
  }
  return !1;
}
function Za(e) {
  const t = qh(e);
  return t ? t.defaultView : null;
}
function He(e) {
  const t = e._window;
  return t === null && M(78), t;
}
function Mw(e) {
  let t = e.getParentOrThrow();
  for (; t !== null; ) {
    if (Vt(t)) return t;
    t = t.getParentOrThrow();
  }
  return t;
}
function Vt(e) {
  return Te(e) || N(e) && e.isShadowRoot();
}
function Ei(e) {
  const t = ue(), n = e.constructor.getType(), r = t._nodes.get(n);
  r === void 0 && M(200, e.constructor.name, n);
  const { replace: o, replaceWithKlass: i } = r;
  if (o !== null) {
    const s = o(e), l = s.constructor;
    return i !== null ? s instanceof i || M(201, i.name, i.getType(), l.name, l.getType(), e.constructor.name, n) : s instanceof e.constructor && l !== e.constructor || M(202, l.name, l.getType(), e.constructor.name, n), s.__key === e.__key && M(203, e.constructor.name, n, l.name, l.getType()), s;
  }
  return e;
}
function rs(e, t) {
  !Te(e.getParent()) || N(t) || re(t) || M(99);
}
function qw(e) {
  const t = me(e);
  return t === null && M(63, e), t;
}
function os(e) {
  return (re(e) || N(e) && !e.canBeEmpty()) && !e.isInline();
}
function Ls(e, t, n) {
  n.style.removeProperty("caret-color"), t._blockCursorElement = null;
  const r = e.parentElement;
  r !== null && r.removeChild(e);
}
function lt(e) {
  return Je ? (e || window).getSelection() : null;
}
function Fw(e) {
  const t = Za(e);
  return t ? t.getSelection() : null;
}
function Ae(e) {
  return Jr(e) && e.nodeType === O0;
}
function Jr(e) {
  return typeof e == "object" && e !== null && "nodeType" in e && typeof e.nodeType == "number";
}
function Bs(e) {
  return Jr(e) && e.nodeType === I0;
}
function Lw(e) {
  const t = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return e.nodeName.match(t) !== null;
}
function Jc(e) {
  const t = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return e.nodeName.match(t) !== null;
}
function Ct(e) {
  if (re(e) && !e.isInline()) return !0;
  if (!N(e) || Vt(e)) return !1;
  const t = e.getFirstChild(), n = t === null || Cr(t) || F(t) || t.isInline();
  return !e.isInline() && e.canBeEmpty() !== !1 && n;
}
function is(e, t) {
  let n = e;
  for (; n !== null && n.getParent() !== null && !t(n); ) n = n.getParentOrThrow();
  return t(n) ? n : null;
}
const Zc = /* @__PURE__ */ new WeakMap(), Bw = /* @__PURE__ */ new Map();
function eu(e) {
  if (!e._readOnly && e.isEmpty()) return Bw;
  e._readOnly || M(192);
  let t = Zc.get(e);
  return t || (t = function(n) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of n._nodeMap) {
      const s = i.__type;
      let l = r.get(s);
      l || (l = /* @__PURE__ */ new Map(), r.set(s, l)), l.set(o, i);
    }
    return r;
  }(e), Zc.set(e, t)), t;
}
function Fh(e) {
  const t = e.constructor.clone(e);
  return t.afterCloneFrom(e), t;
}
function Hw(e, t) {
  const n = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(n / 40);
  t.setIndent(r);
}
function Uw(e) {
  return e.__lexicalUnmanaged === !0;
}
const Vw = { next: "previous", previous: "next" };
class el {
  constructor(t) {
    this.origin = t;
  }
  [Symbol.iterator]() {
    return Lh({ hasNext: Un, initial: this.getAdjacentCaret(), map: (t) => t, step: (t) => t.getAdjacentCaret() });
  }
  getAdjacentCaret() {
    return je(this.getNodeAtCaret(), this.direction);
  }
  getSiblingCaret() {
    return je(this.origin, this.direction);
  }
  remove() {
    const t = this.getNodeAtCaret();
    return t && t.remove(), this;
  }
  replaceOrInsert(t, n) {
    const r = this.getNodeAtCaret();
    return t.is(this.origin) || t.is(r) || (r === null ? this.insert(t) : r.replace(t, n)), this;
  }
  splice(t, n, r = "next") {
    const o = r === this.direction ? n : Array.from(n).reverse();
    let i = this;
    const s = this.getParentAtCaret(), l = /* @__PURE__ */ new Map();
    for (let c = i.getAdjacentCaret(); c !== null && l.size < t; c = c.getAdjacentCaret()) {
      const u = c.origin.getWritable();
      l.set(u.getKey(), u);
    }
    for (const c of o) {
      if (l.size > 0) {
        const u = i.getNodeAtCaret();
        if (u) {
          if (l.delete(u.getKey()), l.delete(c.getKey()), !(u.is(c) || i.origin.is(c))) {
            const d = c.getParent();
            d && d.is(s) && c.remove(), u.replace(c);
          }
        } else u === null && M(263, Array.from(l).join(" "));
      } else i.insert(c);
      i = je(c, this.direction);
    }
    for (const c of l.values()) c.remove();
    return this;
  }
}
class Rr extends el {
  constructor() {
    super(...arguments);
    De(this, "type", "child");
  }
  getLatest() {
    const n = this.origin.getLatest();
    return n === this.origin ? this : Dt(n, this.direction);
  }
  getParentCaret(n = "root") {
    return je(tl(this.getParentAtCaret(), n), this.direction);
  }
  getFlipped() {
    const n = sr(this.direction);
    return je(this.getNodeAtCaret(), n) || Dt(this.origin, n);
  }
  getParentAtCaret() {
    return this.origin;
  }
  getChildCaret() {
    return this;
  }
  isSameNodeCaret(n) {
    return n instanceof Rr && this.direction === n.direction && this.origin.is(n.origin);
  }
  isSamePointCaret(n) {
    return this.isSameNodeCaret(n);
  }
}
const Ww = { root: Te, shadowRoot: Vt };
function sr(e) {
  return Vw[e];
}
function tl(e, t = "root") {
  return Ww[t](e) ? null : e;
}
class dn extends el {
  constructor() {
    super(...arguments);
    De(this, "type", "sibling");
  }
  getLatest() {
    const n = this.origin.getLatest();
    return n === this.origin ? this : je(n, this.direction);
  }
  getSiblingCaret() {
    return this;
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return N(this.origin) ? Dt(this.origin, this.direction) : null;
  }
  getParentCaret(n = "root") {
    return je(tl(this.getParentAtCaret(), n), this.direction);
  }
  getFlipped() {
    const n = sr(this.direction);
    return je(this.getNodeAtCaret(), n) || Dt(this.origin.getParentOrThrow(), n);
  }
  isSamePointCaret(n) {
    return n instanceof dn && this.direction === n.direction && this.origin.is(n.origin);
  }
  isSameNodeCaret(n) {
    return (n instanceof dn || n instanceof fn) && this.direction === n.direction && this.origin.is(n.origin);
  }
}
class fn extends el {
  constructor(n, r) {
    super(n);
    De(this, "type", "text");
    this.offset = r;
  }
  getLatest() {
    const n = this.origin.getLatest();
    return n === this.origin ? this : hn(n, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(n = "root") {
    return je(tl(this.getParentAtCaret(), n), this.direction);
  }
  getFlipped() {
    return hn(this.origin, sr(this.direction), this.offset);
  }
  isSamePointCaret(n) {
    return n instanceof fn && this.direction === n.direction && this.origin.is(n.origin) && this.offset === n.offset;
  }
  isSameNodeCaret(n) {
    return (n instanceof dn || n instanceof fn) && this.direction === n.direction && this.origin.is(n.origin);
  }
  getSiblingCaret() {
    return je(this.origin, this.direction);
  }
}
function on(e) {
  return e instanceof fn;
}
function Un(e) {
  return e instanceof dn;
}
function it(e) {
  return e instanceof Rr;
}
const Gw = { next: class extends fn {
  constructor() {
    super(...arguments);
    De(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(t) {
    return this.origin.insertAfter(t), this;
  }
}, previous: class extends fn {
  constructor() {
    super(...arguments);
    De(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(t) {
    return this.origin.insertBefore(t), this;
  }
} }, Kw = { next: class extends dn {
  constructor() {
    super(...arguments);
    De(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(t) {
    return this.origin.insertAfter(t), this;
  }
}, previous: class extends dn {
  constructor() {
    super(...arguments);
    De(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(t) {
    return this.origin.insertBefore(t), this;
  }
} }, Xw = { next: class extends Rr {
  constructor() {
    super(...arguments);
    De(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(t) {
    return this.origin.splice(0, 0, [t]), this;
  }
}, previous: class extends Rr {
  constructor() {
    super(...arguments);
    De(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(t) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [t]), this;
  }
} };
function je(e, t) {
  return e ? new Kw[t](e) : null;
}
function hn(e, t, n) {
  return e ? new Gw[t](e, Oi(e, n)) : null;
}
function Oi(e, t) {
  const n = e.getTextContentSize();
  let r = t === "next" ? n : t === "previous" ? 0 : t;
  return (r < 0 || r > n) && (function(o, ...i) {
    const s = new URL("https://lexical.dev/docs/error"), l = new URLSearchParams();
    l.append("code", o);
    for (const c of i) l.append("v", c);
    s.search = l.toString(), console.warn(`Minified Lexical warning #${o}; visit ${s.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(284, String(t), String(n), e.getKey()), r = r < 0 ? 0 : n), r;
}
function tu(e, t) {
  return new Qw(e, t);
}
function Dt(e, t) {
  return N(e) ? new Xw[t](e) : null;
}
function Yw(e) {
  return e && e.getChildCaret() || e;
}
function nl(e) {
  return e && Yw(e.getAdjacentCaret());
}
class rl {
  constructor(t, n, r) {
    De(this, "type", "node-caret-range");
    this.anchor = t, this.focus = n, this.direction = r;
  }
  getLatest() {
    const t = this.anchor.getLatest(), n = this.focus.getLatest();
    return t === this.anchor && n === this.focus ? this : new rl(t, n, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const t = (o) => {
      const i = this[o].getLatest();
      return on(i) ? function(s, l) {
        const { direction: c, origin: u } = s, d = Oi(u, l === "focus" ? sr(c) : c);
        return tu(s, d - s.offset);
      }(i, o) : null;
    }, n = t("anchor"), r = t("focus");
    if (n && r) {
      const { caret: o } = n, { caret: i } = r;
      if (o.isSameNodeCaret(i)) return [tu(o, i.offset - o.offset), null];
    }
    return [n, r];
  }
  iterNodeCarets(t = "root") {
    const n = on(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), r = this.focus.getLatest(), o = on(r), i = (s) => s.isSameNodeCaret(r) ? null : nl(s) || s.getParentCaret(t);
    return Lh({ hasNext: (s) => s !== null && !(o && r.isSameNodeCaret(s)), initial: n.isSameNodeCaret(r) ? null : i(n), map: (s) => s, step: i });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class Qw {
  constructor(t, n) {
    De(this, "type", "slice");
    this.caret = t, this.distance = n;
  }
  getSliceIndices() {
    const { distance: t, caret: { offset: n } } = this, r = n + t;
    return r < n ? [r, n] : [n, r];
  }
  getTextContent() {
    const [t, n] = this.getSliceIndices();
    return this.caret.origin.getTextContent().slice(t, n);
  }
  getTextContentSize() {
    return Math.abs(this.distance);
  }
  removeTextSlice() {
    const { caret: { origin: t, direction: n } } = this, [r, o] = this.getSliceIndices(), i = t.getTextContent();
    return hn(t.setTextContent(i.slice(0, r) + i.slice(o)), n, r);
  }
}
function ol(e) {
  return pn(e, je(de(), e.direction));
}
function Jw(e) {
  return pn(e, e);
}
function pn(e, t) {
  return e.direction !== t.direction && M(265), new rl(e, t, e.direction);
}
function Lh(e) {
  const { initial: t, hasNext: n, step: r, map: o } = e;
  let i = t;
  return { [Symbol.iterator]() {
    return this;
  }, next() {
    if (!n(i)) return { done: !0, value: void 0 };
    const s = { done: !1, value: o(i) };
    return i = r(i), s;
  } };
}
function Bh(e, t) {
  const n = Po(e.origin, t.origin);
  switch (n === null && M(275, e.origin.getKey(), t.origin.getKey()), n.type) {
    case "same": {
      const r = e.type === "text", o = t.type === "text";
      return r && o ? function(i, s) {
        return Math.sign(i - s);
      }(e.offset, t.offset) : e.type === t.type ? 0 : r ? -1 : o ? 1 : e.type === "child" ? -1 : 1;
    }
    case "ancestor":
      return e.type === "child" ? -1 : 1;
    case "descendant":
      return t.type === "child" ? 1 : -1;
    case "branch":
      return Hh(n);
  }
}
function Hh(e) {
  const { a: t, b: n } = e, r = t.__key, o = n.__key;
  let i = t, s = n;
  for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
    if (i.__key === o) return -1;
    if (s.__key === r) return 1;
  }
  return i === null ? 1 : -1;
}
function po(e, t) {
  return t.is(e);
}
function nu(e) {
  return N(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function Po(e, t) {
  if (e.is(t)) return { commonAncestor: e, type: "same" };
  const n = /* @__PURE__ */ new Map();
  for (let [r, o] = nu(e); r; o = r, r = r.getParent()) n.set(r, o);
  for (let [r, o] = nu(t); r; o = r, r = r.getParent()) {
    const i = n.get(r);
    if (i !== void 0) return i === null ? (po(e, r) || M(276), { commonAncestor: r, type: "ancestor" }) : o === null ? (po(t, r) || M(277), { commonAncestor: r, type: "descendant" }) : ((N(i) || po(e, i)) && (N(o) || po(t, o)) && r.is(i.getParent()) && r.is(o.getParent()) || M(278), { a: i, b: o, commonAncestor: r, type: "branch" });
  }
  return null;
}
function Pt(e, t) {
  const { type: n, key: r, offset: o } = e, i = qw(e.key);
  return n === "text" ? (F(i) || M(266, i.getType(), r), hn(i, t, o)) : (N(i) || M(267, i.getType(), r), t1(i, e.offset, t));
}
function Nr(e, t) {
  const { origin: n, direction: r } = t, o = r === "next";
  on(t) ? e.set(n.getKey(), t.offset, "text") : Un(t) ? F(n) ? e.set(n.getKey(), Oi(n, r), "text") : e.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent() + (o ? 1 : 0), "element") : (it(t) && N(n) || M(268), e.set(n.getKey(), o ? 0 : n.getChildrenSize(), "element"));
}
function Zw(e) {
  const t = U(), n = q(t) ? t : kw();
  return zo(n, e), Me(n), n;
}
function zo(e, t) {
  Nr(e.anchor, t.anchor), Nr(e.focus, t.focus);
}
function ru(e) {
  const { anchor: t, focus: n } = e, r = Pt(t, "next"), o = Pt(n, "next"), i = Bh(r, o) <= 0 ? "next" : "previous";
  return pn(Vn(r, i), Vn(o, i));
}
function il(e) {
  const { direction: t, origin: n } = e, r = je(n, sr(t)).getNodeAtCaret();
  return r ? je(r, t) : Dt(n.getParentOrThrow(), t);
}
function ou(e, t = "root") {
  const n = [e];
  for (let r = it(e) ? e.getParentCaret(t) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(t)) n.push(il(r));
  return n;
}
function ss(e) {
  return !!e && e.origin.isAttached();
}
function e1(e, t = "removeEmptySlices") {
  if (e.isCollapsed()) return e;
  const n = "root", r = "next";
  let o = t;
  const i = Vh(e, r), s = ou(i.anchor, n), l = ou(i.focus.getFlipped(), n), c = /* @__PURE__ */ new Set(), u = [];
  for (const m of i.iterNodeCarets(n)) if (it(m)) c.add(m.origin.getKey());
  else if (Un(m)) {
    const { origin: g } = m;
    N(g) && !c.has(g.getKey()) || u.push(g);
  }
  for (const m of u) m.remove();
  for (const m of i.getTextSlices()) {
    if (!m) continue;
    const { origin: g } = m.caret, y = g.getTextContentSize(), v = il(je(g, r)), w = g.getMode();
    if (Math.abs(m.distance) === y && o === "removeEmptySlices" || w === "token" && m.distance !== 0) v.remove();
    else if (m.distance !== 0) {
      o = "removeEmptySlices";
      let b = m.removeTextSlice();
      const k = m.caret.origin;
      if (w === "segmented") {
        const E = b.origin, j = ce(E.getTextContent()).setStyle(E.getStyle()).setFormat(E.getFormat());
        v.replaceOrInsert(j), b = hn(j, r, b.offset);
      }
      k.is(s[0].origin) && (s[0] = b), k.is(l[0].origin) && (l[0] = b.getFlipped());
    }
  }
  let d, p;
  for (const m of s) if (ss(m)) {
    d = ot(m);
    break;
  }
  for (const m of l) if (ss(m)) {
    p = ot(m);
    break;
  }
  const f = function(m, g, y) {
    if (!m || !g) return null;
    const v = m.getParentAtCaret(), w = g.getParentAtCaret();
    if (!v || !w) return null;
    const b = v.getParents().reverse();
    b.push(v);
    const k = w.getParents().reverse();
    k.push(w);
    const E = Math.min(b.length, k.length);
    let j;
    for (j = 0; j < E && b[j] === k[j]; j++) ;
    const _ = (O, C) => {
      let I;
      for (let T = j; T < O.length; T++) {
        const A = O[T];
        if (Vt(A)) return;
        !I && C(A) && (I = A);
      }
      return I;
    }, $ = _(b, Ct), D = $ && _(k, (O) => y.has(O.getKey()) && Ct(O));
    return $ && D ? [$, D] : null;
  }(d, p, c);
  if (f) {
    const [m, g] = f;
    Dt(m, "previous").splice(0, g.getChildren()), g.remove();
  }
  const h = [d, p, ...s, ...l].find(ss);
  if (h)
    return Jw(Vn(ot(h), e.direction));
  M(269, JSON.stringify(s.map((m) => m.origin.__key)));
}
function ot(e) {
  const t = function(o) {
    let i = o;
    for (; it(i); ) {
      const s = nl(i);
      if (!it(s)) break;
      i = s;
    }
    return i;
  }(e.getLatest()), { direction: n } = t;
  if (F(t.origin)) return on(t) ? t : hn(t.origin, n, n);
  const r = t.getAdjacentCaret();
  return Un(r) && F(r.origin) ? hn(r.origin, n, sr(n)) : t;
}
function Uh(e) {
  return on(e) && e.offset !== Oi(e.origin, e.direction);
}
function Vn(e, t) {
  return e.direction === t ? e : e.getFlipped();
}
function Vh(e, t) {
  return e.direction === t ? e : pn(Vn(e.focus, t), Vn(e.anchor, t));
}
function t1(e, t, n) {
  let r = Dt(e, "next");
  for (let o = 0; o < t; o++) {
    const i = r.getAdjacentCaret();
    if (i === null) break;
    r = i;
  }
  return Vn(r, n);
}
const Wh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, n1 = Wh ? P.useLayoutEffect : P.useEffect, go = { tag: "history-merge" };
function sl({ initialConfig: e, children: t }) {
  const n = P.useMemo(() => {
    const { theme: r, namespace: o, nodes: i, onError: s, editorState: l, html: c } = e, u = C0(null, r), d = Tw({ editable: e.editable, html: c, namespace: o, nodes: i, onError: (p) => s(p, d), theme: r });
    return function(p, f) {
      if (f !== null) {
        if (f === void 0) p.update(() => {
          const h = de();
          if (h.isEmpty()) {
            const m = Be();
            h.append(m);
            const g = Wh ? document.activeElement : null;
            (U() !== null || g !== null && g === p.getRootElement()) && m.select();
          }
        }, go);
        else if (f !== null) switch (typeof f) {
          case "string": {
            const h = p.parseEditorState(f);
            p.setEditorState(h, go);
            break;
          }
          case "object":
            p.setEditorState(f, go);
            break;
          case "function":
            p.update(() => {
              de().isEmpty() && f(p);
            }, go);
        }
      }
    }(d, l), [d, u];
  }, []);
  return n1(() => {
    const r = e.editable, [o] = n;
    o.setEditable(r === void 0 || r);
  }, []), a.jsx(Rf.Provider, { value: n, children: t });
}
function r1() {
  return de().getTextContent();
}
function o1(e, t = !0) {
  if (e) return !1;
  let n = r1();
  return t && (n = n.trim()), n === "";
}
function i1(e) {
  if (!o1(e, !1)) return !1;
  const t = de().getChildren(), n = t.length;
  if (n > 1) return !1;
  for (let r = 0; r < n; r++) {
    const o = t[r];
    if (re(o)) return !1;
    if (N(o)) {
      if (!Ow(o) || o.__indent !== 0) return !1;
      const i = o.getChildren(), s = i.length;
      for (let l = 0; l < s; l++) {
        const c = i[r];
        if (!F(c)) return !1;
      }
    }
  }
  return !0;
}
function Gh(e) {
  return () => i1(e);
}
function s1(e, ...t) {
  const n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of t) r.append("v", o);
  throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function a1(e, t, n, r) {
  const o = (s) => s instanceof n, i = (s) => {
    const l = ce(s.getTextContent());
    l.setFormat(s.getFormat()), s.replace(l);
  };
  return [e.registerNodeTransform(Ht, (s) => {
    if (!s.isSimpleText()) return;
    let l, c = s.getPreviousSibling(), u = s.getTextContent(), d = s;
    if (F(c)) {
      const f = c.getTextContent(), h = t(f + u);
      if (o(c)) {
        if (h === null || ((m) => m.getLatest().__mode)(c) !== 0) return void i(c);
        {
          const m = h.end - f.length;
          if (m > 0) {
            const g = f + u.slice(0, m);
            if (c.select(), c.setTextContent(g), m === u.length) s.remove();
            else {
              const y = u.slice(m);
              s.setTextContent(y);
            }
            return;
          }
        }
      } else if (h === null || h.start < f.length) return;
    }
    let p = 0;
    for (; ; ) {
      l = t(u);
      let f, h = l === null ? "" : u.slice(l.end);
      if (u = h, h === "") {
        const g = d.getNextSibling();
        if (F(g)) {
          h = d.getTextContent() + g.getTextContent();
          const y = t(h);
          if (y === null) return void (o(g) ? i(g) : g.markDirty());
          if (y.start !== 0) return;
        }
      }
      if (l === null) return;
      if (l.start === 0 && F(c) && c.isTextEntity()) {
        p += l.end;
        continue;
      }
      l.start === 0 ? [f, d] = d.splitText(l.end) : [, f, d] = d.splitText(l.start + p, l.end + p), f === void 0 && s1(165, "nodeToReplace");
      const m = r(f);
      if (m.setFormat(f.getFormat()), f.replace(m), d == null) return;
      p = 0, c = m;
    }
  }), e.registerNodeTransform(n, (s) => {
    const l = s.getTextContent(), c = t(l);
    if (c === null || c.start !== 0) return void i(s);
    if (l.length > c.end) return void s.splitText(c.end);
    const u = s.getPreviousSibling();
    F(u) && u.isTextEntity() && (i(u), i(s));
    const d = s.getNextSibling();
    F(d) && d.isTextEntity() && (i(d), o(s) && i(s));
  })];
}
function l1(e, t) {
  const n = e.getStartEndPoints();
  if (t.isSelected(e) && !t.isSegmented() && !t.isToken() && n !== null) {
    const [r, o] = n, i = e.isBackward(), s = r.getNode(), l = o.getNode(), c = t.is(s), u = t.is(l);
    if (c || u) {
      const [d, p] = qs(e), f = s.is(l), h = t.is(i ? l : s), m = t.is(i ? s : l);
      let g, y = 0;
      return f ? (y = d > p ? p : d, g = d > p ? d : p) : h ? (y = i ? p : d, g = void 0) : m && (y = 0, g = i ? d : p), t.__text = t.__text.slice(y, g), t;
    }
  }
  return t;
}
function iu(e, t) {
  const n = Pt(e.focus, t ? "previous" : "next");
  if (Uh(n)) return !1;
  for (const r of ol(n)) {
    if (it(r)) return !r.origin.isInline();
    if (!N(r.origin)) {
      if (re(r.origin)) return !0;
      break;
    }
  }
  return !1;
}
function c1(e, t, n, r) {
  e.modify(t ? "extend" : "move", n, r);
}
function u1(e) {
  const t = e.anchor.getNode();
  return (Te(t) ? t : t.getParentOrThrow()).getDirection() === "rtl";
}
function su(e, t, n) {
  const r = u1(e);
  c1(e, t, n ? !r : r, "character");
}
const Kh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, d1 = Kh && "documentMode" in document ? document.documentMode : null;
!(!Kh || !("InputEvent" in window) || d1) && "getTargetRanges" in new window.InputEvent("input");
function zt(...e) {
  return () => {
    for (let t = e.length - 1; t >= 0; t--) e[t]();
    e.length = 0;
  };
}
function Xh(e, t) {
  return e !== null && Object.getPrototypeOf(e).constructor.name === t.name;
}
const Yh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? P.useLayoutEffect : P.useEffect;
function f1({ editor: e, ariaActiveDescendant: t, ariaAutoComplete: n, ariaControls: r, ariaDescribedBy: o, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: l, ariaLabel: c, ariaLabelledBy: u, ariaMultiline: d, ariaOwns: p, ariaRequired: f, autoCapitalize: h, className: m, id: g, role: y = "textbox", spellCheck: v = !0, style: w, tabIndex: b, "data-testid": k, ...E }, j) {
  const [_, $] = P.useState(e.isEditable()), D = P.useCallback((C) => {
    C && C.ownerDocument && C.ownerDocument.defaultView ? e.setRootElement(C) : e.setRootElement(null);
  }, [e]), O = P.useMemo(() => /* @__PURE__ */ function(...C) {
    return (I) => {
      C.forEach((T) => {
        typeof T == "function" ? T(I) : T != null && (T.current = I);
      });
    };
  }(j, D), [D, j]);
  return Yh(() => ($(e.isEditable()), e.registerEditableListener((C) => {
    $(C);
  })), [e]), a.jsx("div", { "aria-activedescendant": _ ? t : void 0, "aria-autocomplete": _ ? n : "none", "aria-controls": _ ? r : void 0, "aria-describedby": o, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": _ && y === "combobox" ? !!s : void 0, ...l != null ? { "aria-invalid": l } : {}, "aria-label": c, "aria-labelledby": u, "aria-multiline": d, "aria-owns": _ ? p : void 0, "aria-readonly": !_ || void 0, "aria-required": f, autoCapitalize: h, className: m, contentEditable: _, "data-testid": k, id: g, ref: O, role: _ ? y : void 0, spellCheck: v, style: w, tabIndex: b, ...E });
}
const h1 = P.forwardRef(f1);
function au(e) {
  return e.getEditorState().read(Gh(e.isComposing()));
}
const al = P.forwardRef(p1);
function p1(e, t) {
  const { placeholder: n, ...r } = e, [o] = ze();
  return a.jsxs(a.Fragment, { children: [a.jsx(h1, { editor: o, ...r, ref: t }), n != null && a.jsx(g1, { editor: o, content: n })] });
}
function g1({ content: e, editor: t }) {
  const n = function(s) {
    const [l, c] = P.useState(() => au(s));
    return Yh(() => {
      function u() {
        const d = au(s);
        c(d);
      }
      return u(), zt(s.registerUpdateListener(() => {
        u();
      }), s.registerEditableListener(() => {
        u();
      }));
    }, [s]), l;
  }(t), [r, o] = P.useState(t.isEditable());
  if (P.useLayoutEffect(() => (o(t.isEditable()), t.registerEditableListener((s) => {
    o(s);
  })), [t]), !n) return null;
  let i = null;
  return typeof e == "function" ? i = e(r) : e !== null && (i = e), i === null ? null : a.jsx("div", { "aria-hidden": !0, children: i });
}
function Hs(e, t) {
  return Hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Hs(e, t);
}
var lu = { error: null }, m1 = function(e) {
  var t, n;
  function r() {
    for (var i, s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
    return (i = e.call.apply(e, [this].concat(l)) || this).state = lu, i.resetErrorBoundary = function() {
      for (var u, d = arguments.length, p = new Array(d), f = 0; f < d; f++) p[f] = arguments[f];
      i.props.onReset == null || (u = i.props).onReset.apply(u, p), i.reset();
    }, i;
  }
  n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, Hs(t, n), r.getDerivedStateFromError = function(i) {
    return { error: i };
  };
  var o = r.prototype;
  return o.reset = function() {
    this.setState(lu);
  }, o.componentDidCatch = function(i, s) {
    var l, c;
    (l = (c = this.props).onError) == null || l.call(c, i, s);
  }, o.componentDidUpdate = function(i, s) {
    var l, c, u, d, p = this.state.error, f = this.props.resetKeys;
    p !== null && s.error !== null && ((u = i.resetKeys) === void 0 && (u = []), (d = f) === void 0 && (d = []), u.length !== d.length || u.some(function(h, m) {
      return !Object.is(h, d[m]);
    })) && ((l = (c = this.props).onResetKeysChange) == null || l.call(c, i.resetKeys, f), this.reset());
  }, o.render = function() {
    var i = this.state.error, s = this.props, l = s.fallbackRender, c = s.FallbackComponent, u = s.fallback;
    if (i !== null) {
      var d = { error: i, resetErrorBoundary: this.resetErrorBoundary };
      if (P.isValidElement(u)) return u;
      if (typeof l == "function") return l(d);
      if (c) return P.createElement(c, d);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, r;
}(P.Component);
function ll({ children: e, onError: t }) {
  return a.jsx(m1, { fallback: a.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: t, children: e });
}
const mo = 0, Us = 1, Vs = 2, Ge = 0, y1 = 1, cu = 2, v1 = 3, x1 = 4;
function b1(e, t, n, r, o) {
  if (e === null || n.size === 0 && r.size === 0 && !o) return Ge;
  const i = t._selection, s = e._selection;
  if (o) return y1;
  if (!(q(i) && q(s) && s.isCollapsed() && i.isCollapsed())) return Ge;
  const l = function(v, w, b) {
    const k = v._nodeMap, E = [];
    for (const j of w) {
      const _ = k.get(j);
      _ !== void 0 && E.push(_);
    }
    for (const [j, _] of b) {
      if (!_) continue;
      const $ = k.get(j);
      $ === void 0 || Te($) || E.push($);
    }
    return E;
  }(t, n, r);
  if (l.length === 0) return Ge;
  if (l.length > 1) {
    const v = t._nodeMap, w = v.get(i.anchor.key), b = v.get(s.anchor.key);
    return w && b && !e._nodeMap.has(w.__key) && F(w) && w.__text.length === 1 && i.anchor.offset === 1 ? cu : Ge;
  }
  const c = l[0], u = e._nodeMap.get(c.__key);
  if (!F(u) || !F(c) || u.__mode !== c.__mode) return Ge;
  const d = u.__text, p = c.__text;
  if (d === p) return Ge;
  const f = i.anchor, h = s.anchor;
  if (f.key !== h.key || f.type !== "text") return Ge;
  const m = f.offset, g = h.offset, y = p.length - d.length;
  return y === 1 && g === m - 1 ? cu : y === -1 && g === m + 1 ? v1 : y === -1 && g === m ? x1 : Ge;
}
function k1(e, t) {
  let n = Date.now(), r = Ge;
  return (o, i, s, l, c, u) => {
    const d = Date.now();
    if (u.has("historic")) return r = Ge, n = d, Vs;
    const p = b1(o, i, l, c, e.isComposing()), f = (() => {
      const h = s === null || s.editor === e, m = u.has("history-push");
      if (!m && h && u.has("history-merge")) return mo;
      if (o === null) return Us;
      const g = i._selection;
      return l.size > 0 || c.size > 0 ? m === !1 && p !== Ge && p === r && d < n + t && h || l.size === 1 && function(y, v, w) {
        const b = v._nodeMap.get(y), k = w._nodeMap.get(y), E = v._selection, j = w._selection;
        return !(q(E) && q(j) && E.anchor.type === "element" && E.focus.type === "element" && j.anchor.type === "text" && j.focus.type === "text" || !F(b) || !F(k) || b.__parent !== k.__parent) && JSON.stringify(v.read(() => b.exportJSON())) === JSON.stringify(w.read(() => k.exportJSON()));
      }(Array.from(l)[0], o, i) ? mo : Us : g !== null ? mo : Vs;
    })();
    return n = d, r = p, f;
  };
}
function uu(e) {
  e.undoStack = [], e.redoStack = [], e.current = null;
}
function w1(e, t, n) {
  const r = k1(e, n);
  return zt(e.registerCommand(Ra, () => (function(i, s) {
    const l = s.redoStack, c = s.undoStack;
    if (c.length !== 0) {
      const u = s.current, d = c.pop();
      u !== null && (l.push(u), i.dispatchCommand(lo, !0)), c.length === 0 && i.dispatchCommand(co, !1), s.current = d || null, d && d.editor.setEditorState(d.editorState, { tag: "historic" });
    }
  }(e, t), !0), ae), e.registerCommand(Na, () => (function(i, s) {
    const l = s.redoStack, c = s.undoStack;
    if (l.length !== 0) {
      const u = s.current;
      u !== null && (c.push(u), i.dispatchCommand(co, !0));
      const d = l.pop();
      l.length === 0 && i.dispatchCommand(lo, !1), s.current = d || null, d && d.editor.setEditorState(d.editorState, { tag: "historic" });
    }
  }(e, t), !0), ae), e.registerCommand(aw, () => (uu(t), !1), ae), e.registerCommand(lw, () => (uu(t), e.dispatchCommand(lo, !1), e.dispatchCommand(co, !1), !0), ae), e.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: l, dirtyElements: c, tags: u }) => {
    const d = t.current, p = t.redoStack, f = t.undoStack, h = d === null ? null : d.editorState;
    if (d !== null && i === h) return;
    const m = r(s, i, d, l, c, u);
    if (m === Us) p.length !== 0 && (t.redoStack = [], e.dispatchCommand(lo, !1)), d !== null && (f.push({ ...d }), e.dispatchCommand(co, !0));
    else if (m === Vs) return;
    t.current = { editor: e, editorState: i };
  }));
}
function S1() {
  return { current: null, redoStack: [], undoStack: [] };
}
function cl({ delay: e, externalHistoryState: t }) {
  const [n] = ze();
  return function(r, o, i = 1e3) {
    const s = P.useMemo(() => o || S1(), [o]);
    P.useEffect(() => w1(r, s, i), [i, r, s]);
  }(n, t, e), null;
}
const j1 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? P.useLayoutEffect : P.useEffect;
function C1(e) {
  return { initialValueFn: () => e.isEditable(), subscribe: (t) => e.registerEditableListener(t) };
}
function _1() {
  return function(e) {
    const [t] = ze(), n = P.useMemo(() => e(t), [t, e]), [r, o] = P.useState(() => n.initialValueFn()), i = P.useRef(r);
    return j1(() => {
      const { initialValueFn: s, subscribe: l } = n, c = s();
      return i.current !== c && (i.current = c, o(c)), l((u) => {
        i.current = u, o(u);
      });
    }, [n, e]), r;
  }(C1);
}
function E1(e) {
  const t = window.location.origin, n = (r) => {
    if (r.origin !== t) return;
    const o = e.getRootElement();
    if (document.activeElement !== o) return;
    const i = r.data;
    if (typeof i == "string") {
      let s;
      try {
        s = JSON.parse(i);
      } catch {
        return;
      }
      if (s && s.protocol === "nuanria_messaging" && s.type === "request") {
        const l = s.payload;
        if (l && l.functionId === "makeChanges") {
          const c = l.args;
          if (c) {
            const [u, d, p, f, h, m] = c;
            e.update(() => {
              const g = U();
              if (q(g)) {
                const y = g.anchor;
                let v = y.getNode(), w = 0, b = 0;
                if (F(v) && u >= 0 && d >= 0 && (w = u, b = u + d, g.setTextNodeRange(v, w, v, b)), w === b && p === "" || (g.insertRawText(p), v = y.getNode()), F(v)) {
                  w = f, b = f + h;
                  const k = v.getTextContentSize();
                  w = w > k ? k : w, b = b > k ? k : b, g.setTextNodeRange(v, w, v, b);
                }
                r.stopImmediatePropagation();
              }
            });
          }
        }
      }
    }
  };
  return window.addEventListener("message", n, !0), () => {
    window.removeEventListener("message", n, !0);
  };
}
function O1(e, t) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const n = document.createElement("div"), r = de().getChildren();
  for (let o = 0; o < r.length; o++)
    Qh(e, r[o], n, t);
  return n.innerHTML;
}
function Qh(e, t, n, r = null) {
  let o = r === null || t.isSelected(r);
  const i = N(t) && t.excludeFromCopy("html");
  let s = t;
  if (r !== null) {
    let h = Fh(t);
    h = F(h) && r !== null ? l1(r, h) : h, s = h;
  }
  const l = N(s) ? s.getChildren() : [], c = e._nodes.get(s.getType());
  let u;
  u = c && c.exportDOM !== void 0 ? c.exportDOM(e, s) : s.exportDOM(e);
  const { element: d, after: p } = u;
  if (!d) return !1;
  const f = document.createDocumentFragment();
  for (let h = 0; h < l.length; h++) {
    const m = l[h], g = Qh(e, m, f, r);
    !o && N(t) && g && t.extractWithChild(m, r, "html") && (o = !0);
  }
  if (o && !i) {
    if ((Ae(d) || Bs(d)) && d.append(f), n.append(d), p) {
      const h = p.call(s, d);
      h && (Bs(d) ? d.replaceChildren(h) : d.replaceWith(h));
    }
  } else n.append(f);
  return o;
}
function T1(e, ...t) {
  const n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of t) r.append("v", o);
  throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function $1(e, t = U()) {
  return t == null && T1(166), q(t) && t.isCollapsed() || t.getNodes().length === 0 ? "" : O1(e, t);
}
function du(e, t) {
  const n = e.getData("text/plain") || e.getData("text/uri-list");
  n != null && t.insertRawText(n);
}
const ar = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, I1 = ar && "documentMode" in document ? document.documentMode : null, D1 = !(!ar || !("InputEvent" in window) || I1) && "getTargetRanges" in new window.InputEvent("input"), P1 = ar && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), fu = ar && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, z1 = ar && /^(?=.*Chrome).*/i.test(navigator.userAgent), A1 = ar && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !z1;
function hu(e, t) {
  t.update(() => {
    if (e !== null) {
      const n = Xh(e, KeyboardEvent) ? null : e.clipboardData, r = U();
      if (r !== null && n != null) {
        e.preventDefault();
        const o = $1(t);
        o !== null && n.setData("text/html", o), n.setData("text/plain", r.getTextContent());
      }
    }
  });
}
function R1(e) {
  return zt(e.registerCommand(nn, (t) => {
    const n = U();
    return !!q(n) && (n.deleteCharacter(t), !0);
  }, ae), e.registerCommand(Pr, (t) => {
    const n = U();
    return !!q(n) && (n.deleteWord(t), !0);
  }, ae), e.registerCommand(zr, (t) => {
    const n = U();
    return !!q(n) && (n.deleteLine(t), !0);
  }, ae), e.registerCommand(Dn, (t) => {
    const n = U();
    if (!q(n)) return !1;
    if (typeof t == "string") n.insertText(t);
    else {
      const r = t.dataTransfer;
      if (r != null) du(r, n);
      else {
        const o = t.data;
        o && n.insertText(o);
      }
    }
    return !0;
  }, ae), e.registerCommand(Is, () => {
    const t = U();
    return !!q(t) && (t.removeText(), !0);
  }, ae), e.registerCommand(In, (t) => {
    const n = U();
    return !!q(n) && (n.insertLineBreak(t), !0);
  }, ae), e.registerCommand($s, () => {
    const t = U();
    return !!q(t) && (t.insertLineBreak(), !0);
  }, ae), e.registerCommand(Zf, (t) => {
    const n = U();
    if (!q(n)) return !1;
    const r = t, o = r.shiftKey;
    return !!iu(n, !0) && (r.preventDefault(), su(n, o, !0), !0);
  }, ae), e.registerCommand(Jf, (t) => {
    const n = U();
    if (!q(n)) return !1;
    const r = t, o = r.shiftKey;
    return !!iu(n, !1) && (r.preventDefault(), su(n, o, !1), !0);
  }, ae), e.registerCommand(nh, (t) => {
    const n = U();
    return !!q(n) && (!fu || navigator.language !== "ko-KR") && (t.preventDefault(), e.dispatchCommand(nn, !0));
  }, ae), e.registerCommand(oh, (t) => {
    const n = U();
    return !!q(n) && (t.preventDefault(), e.dispatchCommand(nn, !1));
  }, ae), e.registerCommand(Ar, (t) => {
    const n = U();
    if (!q(n)) return !1;
    if (t !== null) {
      if ((fu || P1 || A1) && D1) return !1;
      t.preventDefault();
    }
    return e.dispatchCommand(In, !1);
  }, ae), e.registerCommand(Ds, () => (zw(), !0), ae), e.registerCommand(Ma, (t) => {
    const n = U();
    return !!q(n) && (hu(t, e), !0);
  }, ae), e.registerCommand(qa, (t) => {
    const n = U();
    return !!q(n) && (function(r, o) {
      hu(r, o), o.update(() => {
        const i = U();
        q(i) && i.removeText();
      });
    }(t, e), !0);
  }, ae), e.registerCommand(Aa, (t) => {
    const n = U();
    return !!q(n) && (function(r, o) {
      r.preventDefault(), o.update(() => {
        const i = U(), s = Xh(r, ClipboardEvent) ? r.clipboardData : null;
        s != null && q(i) && du(s, i);
      }, { tag: "paste" });
    }(t, e), !0);
  }, ae), e.registerCommand(sh, (t) => {
    const n = U();
    return !!q(n) && (t.preventDefault(), !0);
  }, ae), e.registerCommand(ah, (t) => {
    const n = U();
    return !!q(n) && (t.preventDefault(), !0);
  }, ae));
}
const Ws = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? P.useLayoutEffect : P.useEffect;
function pu(e) {
  return e.getEditorState().read(Gh(e.isComposing()));
}
function ul({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
  const [r] = ze(), o = function(i, s) {
    const [l, c] = P.useState(() => i.getDecorators());
    return Ws(() => i.registerDecoratorListener((u) => {
      fs.flushSync(() => {
        c(u);
      });
    }), [i]), P.useEffect(() => {
      c(i.getDecorators());
    }, [i]), P.useMemo(() => {
      const u = [], d = Object.keys(l);
      for (let p = 0; p < d.length; p++) {
        const f = d[p], h = a.jsx(s, { onError: (g) => i._onError(g), children: a.jsx(P.Suspense, { fallback: null, children: l[f] }) }), m = i.getElementByKey(f);
        m !== null && u.push(fs.createPortal(h, m, f));
      }
      return u;
    }, [s, l, i]);
  }(r, n);
  return function(i) {
    Ws(() => zt(R1(i), E1(i)), [i]);
  }(r), a.jsxs(a.Fragment, { children: [e, a.jsx(N1, { content: t }), o] });
}
function N1({ content: e }) {
  const [t] = ze(), n = function(o) {
    const [i, s] = P.useState(() => pu(o));
    return Ws(() => {
      function l() {
        const c = pu(o);
        s(c);
      }
      return l(), zt(o.registerUpdateListener(() => {
        l();
      }), o.registerEditableListener(() => {
        l();
      }));
    }, [o]), i;
  }(t), r = _1();
  return n ? typeof e == "function" ? e(r) : e : null;
}
function M1() {
  const [e] = ze();
  return P.useEffect(() => e.registerNodeTransform(ir, (t) => {
    t.remove();
  }), [e]), null;
}
const q1 = `background-color: var(${x.badgeBackground}); color: var(${x.badgeForeground}); border-radius: 4px;`, F1 = `background-color: var(${x.badgeBackground}); color: var(${x.badgeForeground}); border-radius: 4px;`;
class At extends Ht {
  constructor(n, r, o) {
    super(n, o);
    De(this, "__exists");
    this.__exists = r;
  }
  static getType() {
    return "variable";
  }
  static clone(n) {
    return new At(n.__text, n.__exists, n.__key);
  }
  static importJSON(n) {
    const r = Gs(n.text, n.exists);
    return r.setFormat(n.format), r.setDetail(n.detail), r.setMode(n.mode), r.setStyle(n.style), r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      exists: this.__exists,
      type: "variable",
      version: 1
    };
  }
  createDOM(n) {
    const r = super.createDOM(n);
    return this.__exists ? r.style.cssText = q1 : r.style.cssText = F1, r.className = "variable", r;
  }
  exportDOM() {
    const n = document.createElement("span");
    return n.setAttribute("data-lexical-variable", "true"), n.textContent = this.__text, { element: n };
  }
  updateDOM(n, r, o) {
    return !0;
  }
  setExists(n) {
    const r = this.getWritable();
    r.__exists = n;
  }
  getExists() {
    return this.getLatest().__exists;
  }
}
function Gs(e, t) {
  return new At(e, t);
}
function L1(e, t, n) {
  const [r] = ze();
  P.useEffect(() => zt(...a1(r, e, t, n)), [n, r, e, t]);
}
const gu = "startTransition", Ks = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, B1 = Ks ? P.useLayoutEffect : P.useEffect;
class H1 {
  constructor(t) {
    this.key = t, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(t) {
    this.ref = { current: t };
  }
}
const mu = (e) => {
  const t = document.getElementById("typeahead-menu");
  if (!t) return;
  const n = t.getBoundingClientRect();
  n.top + n.height > window.innerHeight && t.scrollIntoView({ block: "center" }), n.top < 0 && t.scrollIntoView({ block: "center" }), e.scrollIntoView({ block: "nearest" });
};
function yu(e, t) {
  const n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
  return n.top > r.top && n.top < r.bottom;
}
function U1(e, t, n, r) {
  const [o] = ze();
  P.useEffect(() => {
    if (t != null && e != null) {
      const i = o.getRootElement(), s = i != null ? function(p, f) {
        let h = getComputedStyle(p);
        const m = h.position === "absolute", g = /(auto|scroll)/;
        if (h.position === "fixed") return document.body;
        for (let y = p; y = y.parentElement; ) if (h = getComputedStyle(y), (!m || h.position !== "static") && g.test(h.overflow + h.overflowY + h.overflowX)) return y;
        return document.body;
      }(i) : document.body;
      let l = !1, c = yu(t, s);
      const u = function() {
        l || (window.requestAnimationFrame(function() {
          n(), l = !1;
        }), l = !0);
        const p = yu(t, s);
        p !== c && (c = p, r != null && r(p));
      }, d = new ResizeObserver(n);
      return window.addEventListener("resize", n), document.addEventListener("scroll", u, { capture: !0, passive: !0 }), d.observe(t), () => {
        d.unobserve(t), window.removeEventListener("resize", n), document.removeEventListener("scroll", u, !0);
      };
    }
  }, [t, o, r, n, e]);
}
const vu = Z0();
function V1({ close: e, editor: t, anchorElementRef: n, resolution: r, options: o, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: l = !1, commandPriority: c = Wa, preselectFirstItem: u = !0 }) {
  const [d, p] = P.useState(null), f = r.match && r.match.matchingString;
  P.useEffect(() => {
    u && p(0);
  }, [f, u]);
  const h = P.useCallback((g) => {
    t.update(() => {
      const y = r.match != null && l ? function(v) {
        const w = U();
        if (!q(w) || !w.isCollapsed()) return null;
        const b = w.anchor;
        if (b.type !== "text") return null;
        const k = b.getNode();
        if (!k.isSimpleText()) return null;
        const E = b.offset, j = k.getTextContent().slice(0, E), _ = v.replaceableString.length, $ = E - function(O, C, I) {
          let T = I;
          for (let A = T; A <= C.length; A++) O.slice(-A) === C.substring(0, A) && (T = A);
          return T;
        }(j, v.matchingString, _);
        if ($ < 0) return null;
        let D;
        return $ === 0 ? [D] = k.splitText(E) : [, D] = k.splitText($, E), D;
      }(r.match) : null;
      s(g, y, e, r.match ? r.match.matchingString : "");
    });
  }, [t, l, r.match, s, e]), m = P.useCallback((g) => {
    const y = t.getRootElement();
    y !== null && (y.setAttribute("aria-activedescendant", "typeahead-item-" + g), p(g));
  }, [t]);
  return P.useEffect(() => () => {
    const g = t.getRootElement();
    g !== null && g.removeAttribute("aria-activedescendant");
  }, [t]), B1(() => {
    o === null ? p(null) : d === null && u && m(0);
  }, [o, d, m, u]), P.useEffect(() => zt(t.registerCommand(vu, ({ option: g }) => !(!g.ref || g.ref.current == null) && (mu(g.ref.current), !0), c)), [t, m, c]), P.useEffect(() => zt(t.registerCommand(th, (g) => {
    const y = g;
    if (o !== null && o.length) {
      const v = d === null ? 0 : d !== o.length - 1 ? d + 1 : 0;
      m(v);
      const w = o[v];
      w.ref != null && w.ref.current && t.dispatchCommand(vu, { index: v, option: w }), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, c), t.registerCommand(eh, (g) => {
    const y = g;
    if (o !== null && o.length) {
      const v = d === null ? o.length - 1 : d !== 0 ? d - 1 : o.length - 1;
      m(v);
      const w = o[v];
      w.ref != null && w.ref.current && mu(w.ref.current), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, c), t.registerCommand(rh, (g) => {
    const y = g;
    return y.preventDefault(), y.stopImmediatePropagation(), e(), !0;
  }, c), t.registerCommand(ih, (g) => {
    const y = g;
    return o !== null && d !== null && o[d] != null && (y.preventDefault(), y.stopImmediatePropagation(), h(o[d]), !0);
  }, c), t.registerCommand(Ar, (g) => o !== null && d !== null && o[d] != null && (g !== null && (g.preventDefault(), g.stopImmediatePropagation()), h(o[d]), !0), c)), [h, e, t, o, d, m, c]), i(n, P.useMemo(() => ({ options: o, selectOptionAndCleanUp: h, selectedIndex: d, setHighlightedIndex: p }), [h, d, o]), r.match ? r.match.matchingString : "");
}
function xu(e, t) {
  t != null && (e.className = t), e.setAttribute("aria-label", "Typeahead menu"), e.setAttribute("role", "listbox"), e.style.display = "block", e.style.position = "absolute";
}
function W1({ options: e, onQueryChange: t, onSelectOption: n, onOpen: r, onClose: o, menuRenderFn: i, triggerFn: s, anchorClassName: l, commandPriority: c = Wa, parent: u, preselectFirstItem: d = !0 }) {
  const [p] = ze(), [f, h] = P.useState(null), m = function(v, w, b, k = Ks ? document.body : void 0, E = !0) {
    const [j] = ze(), _ = P.useRef(Ks ? document.createElement("div") : null), $ = P.useCallback(() => {
      if (_.current === null || k === void 0) return;
      _.current.style.top = _.current.style.bottom;
      const C = j.getRootElement(), I = _.current, T = I.firstChild;
      if (C !== null && v !== null) {
        const { left: A, top: R, width: H, height: V } = v.getRect(), L = _.current.offsetHeight;
        if (I.style.top = `${R + L + 3 + (E ? window.pageYOffset : 0)}px`, I.style.left = `${A + window.pageXOffset}px`, I.style.height = `${V}px`, I.style.width = `${H}px`, T !== null) {
          T.style.top = `${R}`;
          const ee = T.getBoundingClientRect(), Y = ee.height, se = ee.width, we = C.getBoundingClientRect();
          A + se > we.right && (I.style.left = `${we.right - se + window.pageXOffset}px`), (R + Y > window.innerHeight || R + Y > we.bottom) && R - we.top > Y + V && (I.style.top = `${R - Y - V + (E ? window.pageYOffset : 0)}px`);
        }
        I.isConnected || (xu(I, b), k.append(I)), I.setAttribute("id", "typeahead-menu"), _.current = I, C.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [j, v, E, b, k]);
    P.useEffect(() => {
      const C = j.getRootElement();
      return v !== null && $(), () => {
        C !== null && C.removeAttribute("aria-controls");
        const I = _.current;
        I !== null && I.isConnected && (I.remove(), I.removeAttribute("id"));
      };
    }, [j, $, v]);
    const D = P.useCallback((C) => {
      v !== null && (C || w(null));
    }, [v, w]);
    U1(v, _.current, $, D);
    const O = _.current;
    return O != null && (xu(O, b), k != null && k.append(O)), _;
  }(f, h, l, u), g = P.useCallback(() => {
    h(null), o != null && f !== null && o();
  }, [o, f]), y = P.useCallback((v) => {
    h(v), r != null && f === null && r(v);
  }, [r, f]);
  return P.useEffect(() => {
    const v = p.registerUpdateListener(() => {
      p.getEditorState().read(() => {
        if (!p.isEditable()) return void g();
        const w = p._window || window, b = w.document.createRange(), k = U(), E = function($) {
          let D = null;
          return $.getEditorState().read(() => {
            const O = U();
            q(O) && (D = function(C) {
              const I = C.anchor;
              if (I.type !== "text") return null;
              const T = I.getNode();
              if (!T.isSimpleText()) return null;
              const A = I.offset;
              return T.getTextContent().slice(0, A);
            }(O));
          }), D;
        }(p);
        if (!q(k) || !k.isCollapsed() || E === null || b === null) return void g();
        const j = s(E, p);
        if (t(j ? j.matchingString : null), j !== null && !function($, D) {
          return D === 0 && $.getEditorState().read(() => {
            const O = U();
            if (q(O)) {
              const C = O.anchor.getNode().getPreviousSibling();
              return F(C) && C.isTextEntity();
            }
            return !1;
          });
        }(p, j.leadOffset) && function(D, O, C) {
          const I = lt(C);
          if (I === null || !I.isCollapsed) return !1;
          const T = I.anchorNode, A = D, R = I.anchorOffset;
          if (T == null || R == null) return !1;
          try {
            O.setStart(T, A), O.setEnd(T, R);
          } catch {
            return !1;
          }
          return !0;
        }(j.leadOffset, b, w) !== null)
          return _ = () => y({ getRect: () => b.getBoundingClientRect(), match: j }), void (gu in $t ? $t[gu](_) : _());
        var _;
        g();
      });
    });
    return () => {
      v();
    };
  }, [p, s, t, f, g, y]), P.useEffect(() => p.registerEditableListener((v) => {
    v || g();
  }), [p, g]), f === null || p === null || m.current === null ? null : a.jsx(V1, { close: g, resolution: f, editor: p, anchorElementRef: m, options: e, menuRenderFn: i, shouldSplitNodeWithQuery: !0, onSelectOption: n, commandPriority: c, preselectFirstItem: d });
}
const G1 = 100;
function K1(e, t) {
  const n = /({{([\w.\-$^}]*))/.exec(e);
  if (n !== null) {
    const r = n[2];
    if (r.length >= t)
      return {
        leadOffset: n.index,
        matchingString: r,
        replaceableString: n[1]
      };
  }
  return null;
}
function X1(e) {
  return K1(e, 0);
}
class Y1 extends H1 {
  constructor(n) {
    super(n);
    De(this, "name");
    this.name = n;
  }
}
function Q1({
  index: e,
  isSelected: t,
  onClick: n,
  onMouseEnter: r,
  option: o
}) {
  let i = "item";
  return t && (i += " selected"), /* @__PURE__ */ a.jsx(
    "li",
    {
      tabIndex: -1,
      className: i,
      ref: o.setRefElement,
      role: "option",
      "aria-selected": t,
      id: "typeahead-item-" + e,
      onMouseEnter: r,
      onClick: n,
      children: /* @__PURE__ */ a.jsx("span", { className: "text", children: o.name })
    },
    o.key
  );
}
function Jh({
  variables: e
}) {
  const [t] = ze(), n = P.useCallback((p) => {
    const f = p.getTextContent().slice(2, -2);
    return Gs(p.getTextContent(), e.includes(f));
  }, []), r = P.useCallback((p) => {
    const f = /({{[\w-$]+}})/.exec(p);
    if (f === null)
      return null;
    const h = f[1].length, m = f.index, g = m + h;
    return {
      start: m,
      end: g
    };
  }, []);
  L1(r, At, n), P.useEffect(() => {
    t.registerMutationListener(
      At,
      (p) => {
        t.update(() => {
          for (let [f, h] of p)
            if (h === "created" || h === "updated") {
              const m = me(f);
              if (m) {
                const g = m.getTextContent().slice(2, -2), y = e.includes(g);
                y !== m.getExists() && m.setExists(y);
              }
            }
        });
      },
      { skipInitialization: !1 }
    );
  }, [t]);
  const [o, i] = P.useState(null), [s, l] = P.useState([]);
  P.useEffect(() => {
    l(
      o !== null ? e.filter((p) => p.toLowerCase().includes(o.toLowerCase())) : e
    );
  }, [e, o]);
  const c = P.useMemo(
    () => s.map((p) => new Y1(p)).slice(0, G1),
    [s]
  ), u = P.useCallback(
    (p, f, h) => {
      t.update(() => {
        const m = Gs("{{" + p.name + "}}", !0);
        f && f.replace(m), m.select(), h();
      });
    },
    [t]
  ), d = P.useCallback(
    (p) => X1(p),
    [t]
  );
  return /* @__PURE__ */ a.jsx(
    W1,
    {
      onQueryChange: i,
      onSelectOption: u,
      triggerFn: d,
      options: c,
      menuRenderFn: (p, { selectedIndex: f, selectOptionAndCleanUp: h, setHighlightedIndex: m }) => p.current && s.length ? fs.createPortal(
        /* @__PURE__ */ a.jsx(J1, { children: /* @__PURE__ */ a.jsx("ul", { children: c.map((g, y) => /* @__PURE__ */ a.jsx(
          Q1,
          {
            index: y,
            isSelected: f === y,
            onClick: () => {
              m(y), h(g);
            },
            onMouseEnter: () => {
              m(y);
            },
            option: g
          },
          g.key
        )) }) }),
        p.current
      ) : null
    }
  );
}
const J1 = S.div`
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
function Ti({
  name: e,
  variables: t,
  encode: n,
  decode: r,
  ...o
}) {
  const { field: i } = ie({
    name: e,
    rules: {
      validate: (c) => {
        if (c instanceof Error)
          return c.message;
      }
    }
  });
  function s(c) {
    console.error(c);
  }
  const l = {
    namespace: "editor",
    editorState: () => {
      const c = Be();
      c.append(ce(n ? n(i.value) : i.value)), de().append(c);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: s,
    nodes: [At]
  };
  return /* @__PURE__ */ a.jsx(Z1, { ...o, onBlur: i.onBlur, children: /* @__PURE__ */ a.jsx(sl, { initialConfig: l, children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      ul,
      {
        contentEditable: /* @__PURE__ */ a.jsx(al, {}),
        placeholder: /* @__PURE__ */ a.jsx("div", {}),
        ErrorBoundary: ll
      }
    ),
    /* @__PURE__ */ a.jsx(cl, {}),
    t !== void 0 && /* @__PURE__ */ a.jsx(Jh, { variables: t }),
    /* @__PURE__ */ a.jsx(eS, { name: e, decode: r }),
    /* @__PURE__ */ a.jsx(M1, {})
  ] }) }) });
}
const Z1 = S.div`
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
function eS({ name: e, decode: t }) {
  const [n] = ze(), { field: r } = ie({
    name: e
  });
  return P.useEffect(() => {
    r.ref({ focus: () => n.focus() });
    const o = n.registerTextContentListener((s) => {
      try {
        r.onChange(t ? t(s) : s);
      } catch (l) {
        r.onChange(l);
      }
    }), i = n.registerCommand(
      lh,
      (s, l) => (r.onBlur(), !1),
      Wa
    );
    return () => {
      o(), i();
    };
  }, [n, r]), null;
}
function tS({
  name: e,
  remove: t,
  variables: n
}) {
  const { control: r } = yn(), {
    field: o,
    fieldState: { error: i }
  } = ie({
    name: `${e}.key`,
    control: r,
    rules: {
      pattern: {
        value: Rn(),
        message: Nn
      }
    }
  }), { field: s } = ie({
    name: `${e}.value`,
    control: r
  }), { field: l } = ie({
    name: `${e}.type`,
    control: r
  }), c = nS(s.value);
  return /* @__PURE__ */ a.jsxs(rS, { children: [
    /* @__PURE__ */ a.jsxs(oS, { children: [
      /* @__PURE__ */ a.jsx(iS, { type: "text", ...o }),
      /* @__PURE__ */ a.jsx(sS, { variables: n, name: `${e}.value` }),
      /* @__PURE__ */ a.jsxs(aS, { ...l, children: [
        /* @__PURE__ */ a.jsx("option", { value: "string", children: "string" }),
        /* @__PURE__ */ a.jsx("option", { value: "number", disabled: !c.has("number"), children: "number" }),
        /* @__PURE__ */ a.jsx("option", { value: "boolean", disabled: !c.has("boolean"), children: "boolean" }),
        /* @__PURE__ */ a.jsx("option", { value: "null", disabled: !c.has("null"), children: "null" })
      ] }),
      /* @__PURE__ */ a.jsx(
        lS,
        {
          onClick: (u) => {
            u.preventDefault(), u.stopPropagation(), t();
          },
          children: /* @__PURE__ */ a.jsx(Qe, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ a.jsxs(cS, { children: [
      /* @__PURE__ */ a.jsx(ni, {}),
      "  ",
      i.message
    ] })
  ] });
}
function nS(e) {
  const t = /* @__PURE__ */ new Set(["string"]);
  try {
    const r = typeof JSON.parse(e);
    r === "number" || r === "boolean" ? t.add(r) : e === "null" && t.add("null");
  } catch {
  }
  return t;
}
const rS = S.div`
  display: contents;
`, oS = S.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, iS = S.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  padding: 4px 8px;
`, sS = S(Ti)`
  flex: 2;
  border-bottom: 1px solid var(${x.border});
  padding: 4px 8px;
`, aS = S.select`
  border: none;
  background: transparent;
  color: var(${x.foreground});
  border-bottom: 1px solid var(${x.border});
  padding: 4px 8px;
`, lS = S.button`
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
`, cS = S.div`
  padding: 4px;
  display: flex;
`;
function uS({ name: e, append: t }) {
  return /* @__PURE__ */ a.jsxs(
    dS,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t({ key: e, value: "", type: "string" }, { shouldFocus: !0 });
      },
      children: [
        /* @__PURE__ */ a.jsx("span", { children: e }),
        /* @__PURE__ */ a.jsx(km, {})
      ]
    }
  );
}
const dS = S.span`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(${x.linkForeground});
  cursor: pointer;
  > svg {
    fill: var(${x.linkForeground});
  }
`;
function Zr({
  name: e,
  variables: t,
  missing: n
}) {
  const { control: r } = yn(), { fields: o, append: i, remove: s } = vn({
    control: r,
    name: e
  });
  return /* @__PURE__ */ a.jsxs(fS, { children: [
    /* @__PURE__ */ a.jsxs(hS, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", { children: "Type" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    o.map((l, c) => /* @__PURE__ */ a.jsx(
      tS,
      {
        name: `${e}.${c}`,
        variables: t,
        remove: () => {
          s(c);
        }
      },
      l.id
    )),
    /* @__PURE__ */ a.jsx(k0, { append: i }),
    n && (n == null ? void 0 : n.length) > 0 && /* @__PURE__ */ a.jsxs(pS, { children: [
      /* @__PURE__ */ a.jsx(ut, {}),
      " ",
      /* @__PURE__ */ a.jsx("span", { className: "message", children: "Unset variables" }),
      n.map((l) => /* @__PURE__ */ a.jsx(uS, { name: l, append: i }, l))
    ] })
  ] });
}
const fS = S.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 7em 2em;
`, hS = S.div`
  display: contents;
  > div {
    background-color: var(${x.computedOne});
    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, pS = S.div`
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
function gS(e, t, n) {
  const r = ca(e, t, n);
  return ((r == null ? void 0 : r.security) ?? e.security ?? []).length > 0;
}
function mS(e) {
  return e = Nt.simpleClone(e), {
    ...e,
    fuzzing: e.fuzzing === !0,
    expectedResponse: e.expectedResponse !== void 0 ? e.expectedResponse : "",
    environment: dl(e.environment),
    responses: fl(e.responses)
  };
}
function yS(e) {
  return {
    ...e,
    fuzzing: e.fuzzing === !0 ? !0 : void 0,
    expectedResponse: e.expectedResponse !== "" ? e.expectedResponse : void 0,
    environment: pl(e.environment),
    responses: hl(e.responses)
  };
}
function vS(e) {
  return e = Nt.simpleClone(e), {
    path: e.request.path,
    method: e.request.method,
    parameters: e.request.parameters,
    body: e.request.body,
    environment: dl(e.environment),
    defaultResponse: e.defaultResponse,
    injectionKey: e.injectionKey,
    fuzzing: e.fuzzing,
    operationId: e.operationId,
    requestOperationId: e.request.operationId,
    responses: fl(e.responses),
    auth: e.auth
  };
}
function xS(e) {
  return e = Nt.simpleClone(e), {
    url: e.request.url,
    method: e.request.method,
    parameters: e.request.parameters,
    body: e.request.body,
    environment: dl(e.environment),
    defaultResponse: e.defaultResponse,
    responses: fl(e.responses)
  };
}
function dl(e) {
  return Object.entries(e || {}).map(([n, r]) => ({
    key: n,
    value: r,
    type: typeof r
  }));
}
function fl(e) {
  return Object.entries(e || {}).map(([t, n]) => ({
    key: t,
    value: {
      ...n,
      variableAssignments: bS(n.variableAssignments)
    }
  }));
}
function hl(e) {
  const t = {};
  for (const { key: n, value: r } of e)
    t[n] = {
      ...r,
      variableAssignments: kS(r.variableAssignments)
    };
  return t;
}
function bS(e) {
  return Object.entries(e || {}).map(([t, n]) => ({
    key: t,
    value: n
  }));
}
function kS(e) {
  const t = {};
  for (const { key: n, value: r } of e)
    t[n] = r;
  return t;
}
function wS(e) {
  return e = Nt.simpleClone(e), {
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
    environment: pl(e.environment),
    defaultResponse: e.defaultResponse,
    responses: hl(e.responses),
    auth: e.auth,
    operationId: e.operationId
  };
}
function SS(e) {
  return e = Nt.simpleClone(e), {
    request: {
      url: e.url,
      method: e.method,
      parameters: e.parameters,
      body: e.body
    },
    environment: pl(e.environment),
    defaultResponse: e.defaultResponse,
    responses: hl(e.responses),
    operationId: void 0
  };
}
function pl(e) {
  const t = {};
  for (const n of e)
    t[n.key] = jS(n.value, n.type);
  return t;
}
function jS(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
function gl({
  name: e,
  options: t,
  placeholder: n
}) {
  const { field: r } = ie({
    name: e
  });
  return /* @__PURE__ */ a.jsx(
    or,
    {
      placeholder: n,
      options: t,
      selected: r.value,
      onSelectedItemChange: (o) => {
        o && r.onChange(o.value);
      }
    }
  );
}
function CS({
  found: e,
  missing: t,
  currentStep: n
}) {
  const r = e !== void 0 ? [...new Map(e.map((i) => [i.name, i])).values()] : void 0, o = t !== void 0 ? [...new Map(t.map((i) => [i.name, i])).values()] : void 0;
  return r == null || r.sort((i, s) => i.name.localeCompare(s.name)), o == null || o.sort((i, s) => i.name.localeCompare(s.name)), /* @__PURE__ */ a.jsxs(TS, { children: [
    /* @__PURE__ */ a.jsxs($S, { children: [
      /* @__PURE__ */ a.jsx("div", {}),
      /* @__PURE__ */ a.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Location where the variable is defined" })
    ] }),
    r == null ? void 0 : r.map((i, s) => ES(i, s, n)),
    o == null ? void 0 : o.map(_S)
  ] });
}
function _S(e, t) {
  return /* @__PURE__ */ a.jsxs(Zh, { children: [
    /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
      ut,
      {
        style: {
          fill: `var(${x.errorForeground})`
        }
      }
    ) }),
    /* @__PURE__ */ a.jsx("div", { children: e.name }),
    /* @__PURE__ */ a.jsx("div", { children: "Variable is not found" })
  ] }, t);
}
function ES(e, t, n) {
  return /* @__PURE__ */ a.jsxs(Zh, { children: [
    /* @__PURE__ */ a.jsx("div", {}),
    /* @__PURE__ */ a.jsx("div", { children: e.name }),
    /* @__PURE__ */ a.jsx("div", { children: OS(e.context, n) })
  ] }, t);
}
function OS(e, t) {
  if (e.type === "global-environment")
    return "Global Environment";
  if (e.type === "built-in")
    return "Built-in";
  if (e.type === "try-inputs")
    return "Try Inputs";
  if (e.type === "stage-environment")
    return `Scenario / Step ${t + 1} / Environment`;
  if (e.type === "request-environment")
    return `Scenario / Step ${t + 1} / Operation / Environment`;
  if (e.type === "playbook-request")
    return `${bu(e.name)} / Step ${e.step + 1} / Operation / Response processing`;
  if (e.type === "playbook-stage")
    return `${bu(e.name)} / Step ${e.step + 1} / Response processing`;
}
function bu(e) {
  if (e === "operationScenarios")
    return "Scenario";
  if (e === "operationBefore")
    return "Before block";
  if (e === "operationAfter")
    return "After block";
  if (e === "before")
    return "Global before block";
  if (e === "after")
    return "Global after block";
  if (e === "credential")
    return "Credential";
}
const TS = S.div`
  display: grid;
  grid-template-columns: 2em 16em 1fr;
  padding: 8px;
  > div > div {
    padding: 4px;
    line-break: anywhere;
  }
`, $S = S.div`
  display: contents;
  > div {
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Zh = S.div`
  display: contents;
`;
function IS({
  stage: e,
  oas: t,
  result: n,
  saveStage: r,
  removeStage: o,
  location: i,
  fuzzing: s,
  operations: l,
  requests: c,
  goToRequest: u,
  stageIndex: d
}) {
  var b, k, E, j;
  const [{ isDragging: p }, f] = cv(() => ({
    type: "stage",
    item: { location: i },
    collect: (_) => ({
      isDragging: !!_.isDragging()
    })
  })), h = e.ref.type === "operation" ? l[e.ref.id] : c[e.ref.id], m = zS(h), g = PS(h), y = [
    ...g.filter((_) => _ !== "default").map((_) => ({ label: _, value: _ }))
  ], v = [
    ...ua,
    ...DS(((b = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : b.stack) || [])
  ], w = Array.from(new Set(((k = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : k.missing) || [])).map(
    (_) => _.name
  );
  return /* @__PURE__ */ a.jsx(
    dt,
    {
      data: e,
      saveData: r,
      wrapFormData: mS,
      unwrapFormData: yS,
      children: /* @__PURE__ */ a.jsxs(AS, { children: [
        /* @__PURE__ */ a.jsx(RS, { children: d + 1 }),
        /* @__PURE__ */ a.jsx(
          NS,
          {
            ref: f,
            style: {
              opacity: p ? 0.5 : 1,
              cursor: p ? "move" : "auto"
            },
            children: /* @__PURE__ */ a.jsxs(mn, { children: [
              /* @__PURE__ */ a.jsxs(MS, { children: [
                /* @__PURE__ */ a.jsxs("span", { children: [
                  e.ref.id,
                  /* @__PURE__ */ a.jsx(
                    Od,
                    {
                      onClick: (_) => {
                        _.preventDefault(), _.stopPropagation(), u(e.ref);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ a.jsxs(qS, { onClick: (_) => _.stopPropagation(), children: [
                  w.length > 0 && /* @__PURE__ */ a.jsx(
                    ku,
                    {
                      message: "Unset variables",
                      description: "There are unset variables in this step of the scenario. You can set their values in the 'Environment' section of the step, or in the 'Response processing' section of the previous steps."
                    }
                  ),
                  h === void 0 && /* @__PURE__ */ a.jsx(
                    ku,
                    {
                      message: `${e.ref.type}/${e.ref.id} is missing`,
                      description: "Target of a reference is missing"
                    }
                  ),
                  /* @__PURE__ */ a.jsxs(FS, { children: [
                    /* @__PURE__ */ a.jsx("span", { children: "Expected Response" }),
                    /* @__PURE__ */ a.jsx(
                      gl,
                      {
                        name: "expectedResponse",
                        options: y,
                        placeholder: m
                      }
                    )
                  ] }),
                  s && /* @__PURE__ */ a.jsxs(LS, { children: [
                    /* @__PURE__ */ a.jsx("span", { children: "Fuzzing" }),
                    /* @__PURE__ */ a.jsx(Af, { name: "fuzzing" })
                  ] }),
                  /* @__PURE__ */ a.jsx(BS, { className: "grab", children: /* @__PURE__ */ a.jsx(ym, {}) }),
                  /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsxs(Bt, { onClick: (_) => _.stopPropagation(), onSelect: o, children: [
                    /* @__PURE__ */ a.jsx(Qe, {}),
                    "Delete"
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ a.jsx(
                kt,
                {
                  tabs: [
                    {
                      id: "environment",
                      title: "Environment",
                      content: /* @__PURE__ */ a.jsx(
                        Zr,
                        {
                          name: "environment",
                          variables: v,
                          missing: w
                        }
                      ),
                      counter: w.length,
                      counterKind: "error"
                    },
                    {
                      id: "responses",
                      title: "Response processing",
                      content: /* @__PURE__ */ a.jsx(gi, { editable: !0, responseCodes: g })
                    },
                    {
                      id: "variables",
                      title: "Context",
                      content: /* @__PURE__ */ a.jsx(
                        CS,
                        {
                          currentStep: d,
                          missing: (E = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : E.missing,
                          found: (j = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : j.found
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
function DS(e) {
  const t = [];
  for (const n of e)
    for (const r of Object.keys(n.env))
      t.includes(r) || t.push(r);
  return t.sort(), t;
}
function PS(e) {
  if (e !== void 0) {
    const t = "scenarios" in e ? e.request.responses : e.responses;
    return Object.keys(t || {}).map((r) => r);
  }
  return [];
}
function zS(e) {
  if (e !== void 0)
    return ("scenarios" in e ? e.request : e).defaultResponse;
}
const AS = S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, RS = S.div`
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  width: 18px;
`, NS = S.div`
  background-color: var(${x.background});
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
`, MS = S.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > span {
    > svg {
      fill: var(${x.linkForeground});
    }
    flex: 1;
    font-weight: 600;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
`, qS = S.div`
  cursor: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`, FS = S.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  > div {
    width: 60px;
    border: 1px solid var(${x.border});
  }
`, LS = S.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`, BS = S.div`
  cursor: grab;
  > svg {
    fill: var(${x.foreground});
  }
`;
function ku({ message: e, description: t }) {
  return /* @__PURE__ */ a.jsx(im, { children: /* @__PURE__ */ a.jsxs(sm, { children: [
    /* @__PURE__ */ a.jsx(am, { asChild: !0, children: /* @__PURE__ */ a.jsxs(HS, { children: [
      /* @__PURE__ */ a.jsx(ut, {}),
      " ",
      /* @__PURE__ */ a.jsx("span", { children: e })
    ] }) }),
    /* @__PURE__ */ a.jsx(lm, { children: /* @__PURE__ */ a.jsx(US, { children: t }) })
  ] }) });
}
const HS = S.div`
  cursor: help;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  color: var(${x.foreground});
  > svg {
    fill: var(${x.foreground});
  }
`, US = S(cm)`
  max-width: 400px;
  color: var(${x.notificationsForeground});
  background-color: var(${x.notificationsBackground});
  border: 1px solid var(${x.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function Wn({
  oas: e,
  stages: t,
  container: n,
  executionResult: r,
  saveStage: o,
  removeStage: i,
  moveStage: s,
  fuzzing: l,
  operations: c,
  requests: u,
  goToRequest: d
}) {
  const p = (g) => (y) => o(g, y), f = (g) => () => i(g), [{ isOver: h }, m] = Hd(() => ({
    accept: "stage",
    collect: (g) => ({
      isOver: !!g.isOver()
    })
  }));
  return t.length === 0 ? null : /* @__PURE__ */ a.jsx(WS, { ref: m, children: t.map((g, y) => {
    var w;
    const v = { ...n, stageIndex: y };
    return /* @__PURE__ */ a.jsxs($t.Fragment, { children: [
      h && /* @__PURE__ */ a.jsx(VS, { moveStage: s, destinationIndex: y }),
      /* @__PURE__ */ a.jsx(
        IS,
        {
          oas: e,
          stage: g,
          result: (w = r == null ? void 0 : r.results) == null ? void 0 : w[y],
          saveStage: p(v),
          removeStage: f(v),
          goToRequest: d,
          location: v,
          fuzzing: l,
          operations: c,
          requests: u,
          stageIndex: y
        }
      )
    ] }, `stage-${y}-${g.ref.type}-${g.ref.id}`);
  }) });
}
function VS({
  destinationIndex: e,
  moveStage: t
}) {
  const [{ isOver: n }, r] = Hd(() => ({
    accept: "stage",
    drop: (o) => t(o.location, e),
    collect: (o) => ({
      isOver: !!o.isOver()
    })
  }));
  return /* @__PURE__ */ a.jsx(GS, { ref: r, $isOver: n });
}
const WS = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, GS = S.div`
  display: flex;
  border: 16px solid var(${x.border});
  opacity: 0.5;
  cursor: pointer;
  ${({ $isOver: e }) => e && "opacity: 1;"}
`;
function KS({
  operationIds: e,
  requestIds: t,
  onSelect: n
}) {
  const i = [];
  i.push(
    ...e.map(
      (h) => ({
        type: "operation",
        id: h
      })
    )
  ), i.push(
    ...t.map(
      (h) => ({
        type: "request",
        id: h
      })
    )
  );
  const [s, l] = P.useState(i), { isOpen: c, getMenuProps: u, getInputProps: d, getItemProps: p, openMenu: f } = oi({
    initialInputValue: "",
    items: s,
    onSelectedItemChange: ({ selectedItem: h }) => {
      h && n(h);
    },
    onInputValueChange: ({ inputValue: h }) => {
      l(
        i.filter((m) => !h || m.id.toLowerCase().includes(h))
      );
    },
    itemToString: (h) => h ? h.id : ""
  });
  return /* @__PURE__ */ a.jsxs(XS, { children: [
    /* @__PURE__ */ a.jsx(
      YS,
      {
        autoFocus: !0,
        ...d({
          onFocus() {
            f();
          }
        }),
        placeholder: "",
        onBlur: (h) => {
          n(void 0);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(QS, { children: /* @__PURE__ */ a.jsx(JS, { ...u(), $isOpen: c, children: c && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(wu, { children: "Operations" }),
      s.map((h, m) => h.type === "operation" ? /* @__PURE__ */ a.jsx(
        "li",
        {
          ...p({
            item: h,
            index: m
          }),
          children: h.id
        },
        `li-${h.type}-${h.id}-${m}`
      ) : null),
      /* @__PURE__ */ a.jsx(wu, { children: "Requests" }),
      s.map((h, m) => h.type === "request" ? /* @__PURE__ */ a.jsx(
        "li",
        {
          ...p({
            item: h,
            index: m
          }),
          children: h.id
        },
        `li-${h.type}-${h.id}-${m}`
      ) : null)
    ] }) }) })
  ] });
}
const XS = S.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${x.border});
`, YS = S.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  &::placeholder {
    color: var(${x.inputPlaceholderForeground});
  }
`, QS = S.div`
  position: relative;
  z-index: 1;
`, JS = S.ul`
  ${({ $isOpen: e }) => e && `border: 1px solid var(${x.dropdownBorder});`}
  background-color: var(${x.dropdownBackground});
  color: var(${x.dropdownForeground});
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
    background-color: var(${x.listHoverBackground});
  }
`, wu = S.div`
  font-weight: 600;
  margin: 4px;
`;
function Gn({
  operationIds: e,
  requestIds: t,
  onSelect: n
}) {
  const [r, o] = P.useState(!1);
  return r ? /* @__PURE__ */ a.jsx(
    KS,
    {
      onSelect: (i) => {
        i !== void 0 && n(i), o(!1);
      },
      requestIds: t,
      operationIds: e
    }
  ) : /* @__PURE__ */ a.jsxs(
    ZS,
    {
      onClick: (i) => {
        i.stopPropagation(), i.preventDefault(), o(!0);
      },
      children: [
        /* @__PURE__ */ a.jsx(Hr, {}),
        " Pick the operation"
      ]
    }
  );
}
const ZS = S.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${x.border});
  color: var(${x.linkForeground});
  > svg {
    fill: var(${x.linkForeground});
  }
`;
function ej({
  onAddCredentialValue: e,
  existing: t
}) {
  const n = { name: "", value: "" }, r = (i) => {
    e(i.name, { credential: i.value, requests: [] });
  }, o = er({
    name: oe().regex(Rn(), {
      message: Nn
    }).refine((i) => !t.includes(i), {
      message: "Already exists"
    }),
    value: oe().min(1)
  });
  return /* @__PURE__ */ a.jsx(
    Vr,
    {
      defaultValues: n,
      onSubmit: r,
      schema: o,
      trigger: /* @__PURE__ */ a.jsx(nj, { children: /* @__PURE__ */ a.jsx(Hr, {}) }),
      children: /* @__PURE__ */ a.jsx(tj, {})
    }
  );
}
function tj() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(rt, { label: "Credential name", name: "name" }),
    /* @__PURE__ */ a.jsx(rt, { label: "Credential value", name: "value" })
  ] });
}
const nj = S.button`
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
function rj({
  group: e,
  credentialId: t
}) {
  const n = fe(), { playbook: r, oas: o, selectedSubcredential: i } = Q((b) => b.scanconf), { mockResult: s } = Q((b) => b.auth), l = Object.keys(r.operations), c = Object.keys(r.requests || {}), u = (b) => n(Ft(b)), d = (b, k) => n(Lt({ location: b, reference: k })), p = (b, k) => n(qt({ location: b, to: k })), f = (b, k) => {
    n(
      Mt({
        container: b,
        stage: {
          ref: k
        }
      })
    );
  }, h = (b) => {
    n(Zt(b)), n(ye(["scanconf", "requests"]));
  }, { fields: m, append: g, remove: y } = vn({
    name: "methods"
  }), { getValues: v } = yn(), w = m.map((b, k) => ({
    id: b.key,
    title: b.key,
    menu: /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsxs(Bt, { onClick: (E) => E.stopPropagation(), onSelect: () => y(k), children: [
      /* @__PURE__ */ a.jsx(Qe, {}),
      "Delete"
    ] }) }),
    content: /* @__PURE__ */ a.jsxs(oj, { value: b.key, children: [
      /* @__PURE__ */ a.jsx(rt, { label: "Credential value", name: `methods.${k}.value.credential` }),
      /* @__PURE__ */ a.jsxs(ij, { children: [
        /* @__PURE__ */ a.jsx(
          Wn,
          {
            oas: o,
            stages: b.value.requests,
            container: {
              container: "credential",
              group: e,
              credentialId: t,
              subCredentialId: b.key
            },
            executionResult: s == null ? void 0 : s[0],
            saveStage: d,
            moveStage: p,
            removeStage: u,
            operations: r.operations,
            requests: r.requests,
            goToRequest: h
          }
        ),
        /* @__PURE__ */ a.jsx(
          Gn,
          {
            operationIds: l,
            requestIds: c,
            onSelect: (E) => f(
              { container: "credential", group: e, credentialId: t, subCredentialId: b.key },
              E
            )
          }
        )
      ] })
    ] })
  }));
  return /* @__PURE__ */ a.jsx(
    kt,
    {
      activeTab: i,
      setActiveTab: (b) => n(Mo(b)),
      tabs: w,
      menu: /* @__PURE__ */ a.jsx(
        ej,
        {
          existing: v("methods").map((b) => b.key),
          onAddCredentialValue: (b, k) => {
            g({ key: b, value: k }), n(Mo(b));
          }
        }
      )
    }
  );
}
const oj = S(rm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, ij = S.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function ep({
  options: e,
  placeholder: t,
  selected: n,
  onSelectedItemChange: r
}) {
  const [o, i] = P.useState(""), [s, l] = P.useState(e);
  P.useEffect(() => {
    l(
      e.filter((f) => o === "" || f.toLowerCase().includes(o.toLowerCase()))
    );
  }, [o, e]);
  const { isOpen: c, getMenuProps: u, getInputProps: d, getItemProps: p } = oi({
    initialInputValue: n,
    items: s,
    onInputValueChange: ({ inputValue: f }) => {
      r(f), i(f !== void 0 ? f : "");
    },
    itemToString: (f) => f || ""
  });
  return /* @__PURE__ */ a.jsxs(sj, { children: [
    /* @__PURE__ */ a.jsx(aj, { ...d(), placeholder: t }),
    /* @__PURE__ */ a.jsx(lj, { $visible: c && s.length > 0, children: /* @__PURE__ */ a.jsx(cj, { ...u(), children: s.map((f, h) => /* @__PURE__ */ a.jsx(
      "li",
      {
        ...p({
          item: f,
          index: h
        }),
        children: f
      },
      `li-${h}`
    )) }) })
  ] });
}
const sj = S.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, aj = S.input`
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
`, lj = S.div`
  position: relative;
  z-index: 1;
  visibility: ${({ $visible: e }) => e ? "visible" : "hidden"};
`, cj = S.ul`
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
function Kn({
  onTry: e,
  onScan: t,
  servers: n,
  host: r,
  menu: o
}) {
  const { scanServer: i, useGlobalBlocks: s, rejectUnauthorized: l } = Vg(
    (g) => g.prefs
  ), c = Wg(), u = (g) => c(wd(g)), d = (g) => c(Gg(g)), p = (g) => c(Kg(g)), f = [...n];
  r && !f.includes(r) && f.unshift(r);
  const [h, m] = P.useState(
    i !== "" ? i : f[0]
  );
  return !f.includes(i) && i !== "" && f.push(i), /* @__PURE__ */ a.jsx(dj, { children: /* @__PURE__ */ a.jsxs(uj, { children: [
    /* @__PURE__ */ a.jsx(
      ep,
      {
        options: f,
        selected: h,
        onSelectedItemChange: (g) => {
          g && (m(g), u(g));
        }
      }
    ),
    /* @__PURE__ */ a.jsxs(
      Su,
      {
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault(), e(h);
        },
        children: [
          /* @__PURE__ */ a.jsx(mm, {}),
          "Try"
        ]
      }
    ),
    t && /* @__PURE__ */ a.jsxs(
      Su,
      {
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault(), t(h);
        },
        children: [
          /* @__PURE__ */ a.jsx(xm, {}),
          "Scan"
        ]
      }
    ),
    o && /* @__PURE__ */ a.jsx(fj, { children: /* @__PURE__ */ a.jsxs(wt, { icon: "sliders", children: [
      /* @__PURE__ */ a.jsx(Nk, { children: "Try settings" }),
      /* @__PURE__ */ a.jsx(Rk, {}),
      /* @__PURE__ */ a.jsxs(
        fc,
        {
          checked: s,
          onCheckedChange: (g) => d(g),
          children: [
            /* @__PURE__ */ a.jsx(dc, {}),
            "Execute global blocks"
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        fc,
        {
          checked: l,
          onCheckedChange: (g) => p(g),
          children: [
            /* @__PURE__ */ a.jsx(dc, {}),
            "Reject untrusted SSL certificates"
          ]
        }
      )
    ] }) })
  ] }) });
}
const uj = S.div`
  border: 1px solid var(${x.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, dj = S.div`
  background-color: var(${x.background});
  color: var(${x.foreground});
`, Su = S.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  color: var(${x.linkForeground});
  > svg {
    fill: var(${x.linkForeground});
  }
`, fj = S.div`
  display: flex;
  padding: 8px 12px;
`;
function hj({ selected: e }) {
  const t = fe(), {
    playbook: { authenticationDetails: n },
    servers: r
  } = Q((u) => u.scanconf), { tryResult: o } = Q((u) => u.auth), i = (u, d, p) => t(ka({ group: parseInt(u), id: d, credential: p })), s = parseInt(e.sectionId), l = e.itemId, c = n[s][l];
  return /* @__PURE__ */ a.jsxs(pj, { children: [
    /* @__PURE__ */ a.jsx(
      Kn,
      {
        servers: r,
        onTry: (u) => {
          t(df(u));
        }
      }
    ),
    /* @__PURE__ */ a.jsx(Ee, { title: "Security Scheme", children: /* @__PURE__ */ a.jsx(
      Ik,
      {
        credential: c,
        saveCredential: (u) => i(e.sectionId, e.itemId, u)
      },
      e.itemId
    ) }),
    /* @__PURE__ */ a.jsx(
      Ee,
      {
        defaultOpen: !1,
        title: "Credentials",
        count: Object.keys(c.methods).length,
        children: /* @__PURE__ */ a.jsx(
          dt,
          {
            data: c,
            saveData: (u) => i(e.sectionId, e.itemId, u),
            wrapFormData: Pf,
            unwrapFormData: zf,
            children: /* @__PURE__ */ a.jsx(rj, { group: s, credentialId: l })
          }
        )
      }
    ),
    o.length > 0 && /* @__PURE__ */ a.jsx(Ee, { title: "Result", children: /* @__PURE__ */ a.jsx(qn, { result: o }) })
  ] });
}
const pj = S.div`
  padding: 8px;
`, Mr = S.button`
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
function gj() {
  const e = Lr({ name: "type" });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(rt, { label: "ID", name: "id" }),
    /* @__PURE__ */ a.jsx(
      Bl,
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
    e !== "basic" && e !== "bearer" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        Bl,
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
      /* @__PURE__ */ a.jsx(rt, { label: "Name", name: "name" })
    ] }),
    /* @__PURE__ */ a.jsx(rt, { label: "Description", name: "description" }),
    /* @__PURE__ */ a.jsx(rt, { label: "Credential name", name: "credentialName" }),
    /* @__PURE__ */ a.jsx(rt, { label: "Credential value", name: "credentialValue" })
  ] });
}
function mj({
  onAddCredential: e,
  existing: t
}) {
  const n = {
    id: "",
    type: "apiKey",
    in: "header",
    name: "",
    description: "",
    credentialName: "",
    credentialValue: ""
  }, r = er({
    id: oe().regex(Rn(), {
      message: Nn
    }).refine((i) => !t.includes(i), {
      message: "Already exists"
    }),
    type: oe(),
    in: oe(),
    name: oe(),
    description: oe(),
    credentialName: oe().regex(Rn(), {
      message: Nn
    }),
    credentialValue: oe().min(1)
  }), o = (i) => {
    const s = {
      [i.credentialName]: {
        credential: i.credentialValue,
        requests: [],
        description: ""
      }
    };
    e(
      i.id,
      i.type === "bearer" || i.type === "basic" ? (
        // skip name and in
        {
          type: i.type,
          default: i.credentialName,
          description: i.description,
          methods: s
        }
      ) : {
        type: i.type,
        default: i.credentialName,
        in: i.in,
        name: i.name,
        description: i.description,
        methods: s
      }
    );
  };
  return /* @__PURE__ */ a.jsx(
    Vr,
    {
      title: "New security scheme",
      defaultValues: n,
      schema: r,
      onSubmit: o,
      trigger: /* @__PURE__ */ a.jsx(Mr, { style: { width: "100%" }, children: "New security scheme" }),
      children: /* @__PURE__ */ a.jsx(gj, {})
    }
  );
}
function yj() {
  const e = fe(), {
    playbook: { authenticationDetails: t },
    selectedCredentialGroup: n,
    selectedCredential: r
  } = Q((s) => s.scanconf), o = (s, l) => {
    e(xa({ credentialGroup: 0, id: s, credential: l })), e(No({ group: 0, credential: s }));
  }, i = t.map((s, l) => {
    const c = l === 0 ? "Default group" : `Group ${l}`, u = Object.entries(s).map(([d, p]) => ({
      id: d,
      label: d,
      menu: /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsxs(
        Bt,
        {
          onClick: (f) => f.stopPropagation(),
          onSelect: () => e(ba({ credentialGroup: l, id: d })),
          children: [
            /* @__PURE__ */ a.jsx(Qe, {}),
            "Delete"
          ]
        }
      ) })
    }));
    return {
      id: `${l}`,
      title: c,
      items: u
    };
  });
  return /* @__PURE__ */ a.jsx(
    Zn,
    {
      title: "security schemes",
      sections: i,
      render: (s) => /* @__PURE__ */ a.jsx(hj, { selected: s }),
      renderButtons: () => /* @__PURE__ */ a.jsx(
        mj,
        {
          existing: Object.keys((t == null ? void 0 : t[0]) || []),
          onAddCredential: o
        }
      ),
      selected: r !== void 0 ? { sectionId: `${n}`, itemId: r } : void 0,
      onSelected: (s) => {
        e(
          No({ group: parseInt(s.sectionId), credential: s.itemId })
        );
      }
    }
  );
}
function vj(e) {
  return () => e({
    actionCreator: Gp,
    effect: async (t, n) => {
      const r = n.getOriginalState().confirmationDialog.actions;
      for (const o of r)
        n.dispatch(o);
    }
  });
}
function tp() {
  return /* @__PURE__ */ new Map();
}
function xj(e, t, n, r) {
  const o = t.ttl !== void 0 ? ks(t.ttl) : void 0;
  if (o !== void 0) {
    const i = `${t.name}/${n}`, s = Date.now() + o;
    e.set(i, { value: r, expiryTime: s });
  }
}
function bj(e, t, n) {
  const r = `${t.name}/${n}`, o = e.get(r);
  if (o && Date.now() < o.expiryTime)
    return o.value;
  e.delete(r);
}
function ml(e, t) {
  return t.type === e.type && t.in === e.in || t.type === "http" && e.type == "basic" && t.in === e.in || t.type === "basic" && e.type == "basic" && t.in === e.in ? !0 : t.type === "http" && t.scheme == "bearer" && e.type === "bearer";
}
function kj(e, t, n) {
  const r = md(e, e.paths[t]), o = qr(e, t, n), i = yd(e, o);
  return vd(e, r, i);
}
async function wj(e, t, n, r, o) {
  try {
    const i = da(e) ? await Sj(e, t, n, r, o) : await jj(e, t, n, r, o);
    for (const { key: s, value: l } of r.parameters.header)
      i.headers[s.toLowerCase()] === void 0 && (i.headers[s] = String(l));
    return [
      {
        method: r.method,
        url: i.url,
        headers: i.headers,
        body: np(i.body)
      },
      void 0
    ];
  } catch (i) {
    return [void 0, `failed to build http request: ${i}`];
  }
}
async function Sj(e, t, n, r, o) {
  var u;
  const i = ca(e, r.path, r.method);
  if (i === void 0)
    throw new Error(`operation not found for ${r.method} ${r.path}`);
  const s = ip(
    r.method,
    r.path,
    i
  ), l = zj(r);
  return Br.buildRequest({
    spec: await _j(e, t),
    operationId: s,
    parameters: Oj(r.parameters, o),
    securities: $j(e, o),
    requestContentType: l,
    requestBody: (u = r.body) == null ? void 0 : u.value
  });
}
async function jj(e, t, n, r, o) {
  const i = qr(e, r.path, r.method);
  if (i === void 0)
    throw new Error(`operation not found for ${r.method} ${r.path}`);
  const s = ip(
    r.method,
    r.path,
    i
  );
  return Br.buildRequest({
    spec: await Ej(e, t),
    operationId: s,
    parameters: Tj(e, r, o),
    securities: Dj((e == null ? void 0 : e.securityDefinitions) || {}, o)
  });
}
async function Cj(e) {
  var n, r, o, i;
  const t = new URLSearchParams(
    ju(e.parameters.query)
  ).toString();
  try {
    const s = ju(e.parameters.header);
    ((n = e.body) == null ? void 0 : n.mediaType) !== void 0 && (s["Content-Type"] = (r = e.body) == null ? void 0 : r.mediaType);
    const l = ((o = e.body) == null ? void 0 : o.mediaType) === "application/x-www-form-urlencoded" ? Pj(e.body.value) : (i = e.body) == null ? void 0 : i.value;
    return [
      {
        method: e.method,
        url: t === "" ? e.url : `${e.url}?${t}`,
        headers: s,
        body: np(l)
      },
      void 0
    ];
  } catch (s) {
    return [void 0, `failed to build http request: ${s}`];
  }
}
async function _j(e, t, n) {
  const r = [{ url: t }], { spec: o, errors: i } = await Br.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, servers: r }))
  });
  return o;
}
async function Ej(e, t, n) {
  const r = new URL(t), o = r.protocol === "https:" ? ["https"] : ["http"], { spec: i, errors: s } = await Br.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, host: r.host, schemes: o }))
  });
  return i;
}
function np(e) {
  if (e !== void 0) {
    {
      if (typeof e == "string")
        return e;
      if (e instanceof FormData)
        return Array.from(e.entries());
    }
    return JSON.stringify(e);
  }
}
function Oj(e, t) {
  const n = ["path", "query", "header", "cookie"], r = rp(e, n);
  for (const { credential: o, value: i } of Object.values(t))
    n.includes(o.in) && o.name !== void 0 && (r[`${o.in}.${o.name}`] = i);
  return r;
}
function Tj(e, t, n) {
  var l;
  const r = ["path", "query", "header"], o = rp(t.parameters, r);
  for (const { credential: c, value: u } of Object.values(n))
    r.includes(c.in) && c.name !== void 0 && (o[`${c.in}.${c.name}`] = u);
  const i = kj(e, t.path, t.method), s = Object.keys(i.body);
  if (s.length > 0) {
    const c = s[0];
    o[`body.${c}`] = (l = t.body) == null ? void 0 : l.value;
  }
  return o;
}
function rp(e, t) {
  const n = {};
  for (const r of t)
    for (const { key: o, value: i } of e[r]) {
      const s = `${r}.${o}`;
      n[s] === void 0 ? n[s] = i : Array.isArray(n[s]) ? n[s].push(i) : n[s] = [n[s], i];
    }
  return n;
}
function $j(e, t) {
  const n = Ij(e), r = op(n, t), o = {};
  for (const i of Object.keys(r)) {
    const s = Or(e, n[i]), l = r[i];
    l !== void 0 && ((s == null ? void 0 : s.type) === "oauth2" || (s == null ? void 0 : s.type) === "openIdConnect" ? o[i] = { token: { access_token: l } } : (s == null ? void 0 : s.type) === "http" && s.scheme !== void 0 && /^basic$/i.test(s.scheme) ? o[i] = sp(l) : o[i] = l);
  }
  return { authorized: o };
}
function Ij(e) {
  var n;
  const t = {};
  for (const [r, o] of Object.entries(((n = e.components) == null ? void 0 : n.securitySchemes) || {})) {
    const i = Or(e, o);
    i !== void 0 && (t[r] = i);
  }
  return t;
}
function Dj(e, t) {
  const n = {}, r = op(e, t);
  for (const o of Object.keys(r)) {
    const i = e[o], s = r[o];
    s !== void 0 && ((i == null ? void 0 : i.type) === "oauth2" ? n[o] = { token: { access_token: s } } : (i == null ? void 0 : i.type) === "basic" ? n[o] = sp(s) : n[o] = s);
  }
  return { authorized: n };
}
function op(e, t) {
  const n = { ...t }, r = {};
  for (const [o, i] of Object.entries(e))
    for (const [s, { credential: l, value: c }] of Object.entries(n))
      if (ml(l, i)) {
        r[o] = c, delete n[s];
        break;
      }
  return r;
}
function ju(e) {
  const t = {};
  for (const { key: n, value: r } of e)
    t[n] = String(r);
  return t;
}
function Pj(e) {
  const t = new URLSearchParams();
  for (const [n, r] of Object.entries(e))
    t.append(n, `${r}`);
  return t.toString();
}
function ip(e, t, n) {
  return Br.helpers.opId(n, t, e);
}
function zj(e) {
  var t, n;
  if (((t = e.body) == null ? void 0 : t.mediaType) === "raw") {
    for (const { key: r, value: o } of e.parameters.header)
      if (r.toLowerCase() === "content-type")
        return String(o);
    return "text/plain";
  }
  return (n = e.body) == null ? void 0 : n.mediaType;
}
function sp(e) {
  if (!e.includes(":"))
    throw new Error(
      "Basic auth credential must contain a username and password separated by a colon"
    );
  const [t, n] = e.split(":", 2);
  return { username: t, password: n };
}
const $i = null;
function Ii() {
  return async () => [$i, void 0];
}
class Aj {
  /**
   * @callback HookCallback
   * @this {*|Jsep} this
   * @param {Jsep} env
   * @returns: void
   */
  /**
   * Adds the given callback to the list of callbacks for the given hook.
   *
   * The callback will be invoked when the hook it is registered for is run.
   *
   * One callback function can be registered to multiple hooks and the same hook multiple times.
   *
   * @param {string|object} name The name of the hook, or an object of callbacks keyed by name
   * @param {HookCallback|boolean} callback The callback function which is given environment variables.
   * @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
   * @public
   */
  add(t, n, r) {
    if (typeof arguments[0] != "string")
      for (let o in arguments[0])
        this.add(o, arguments[0][o], arguments[1]);
    else
      (Array.isArray(t) ? t : [t]).forEach(function(o) {
        this[o] = this[o] || [], n && this[o][r ? "unshift" : "push"](n);
      }, this);
  }
  /**
   * Runs a hook invoking all registered callbacks with the given environment variables.
   *
   * Callbacks will be invoked synchronously and in the order in which they were registered.
   *
   * @param {string} name The name of the hook.
   * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
   * @public
   */
  run(t, n) {
    this[t] = this[t] || [], this[t].forEach(function(r) {
      r.call(n && n.context ? n.context : n, n);
    });
  }
}
class Rj {
  constructor(t) {
    this.jsep = t, this.registered = {};
  }
  /**
   * @callback PluginSetup
   * @this {Jsep} jsep
   * @returns: void
   */
  /**
   * Adds the given plugin(s) to the registry
   *
   * @param {object} plugins
   * @param {string} plugins.name The name of the plugin
   * @param {PluginSetup} plugins.init The init function
   * @public
   */
  register() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    n.forEach((o) => {
      if (typeof o != "object" || !o.name || !o.init)
        throw new Error("Invalid JSEP plugin format");
      this.registered[o.name] || (o.init(this.jsep), this.registered[o.name] = o);
    });
  }
}
class z {
  /**
   * @returns {string}
   */
  static get version() {
    return "1.4.0";
  }
  /**
   * @returns {string}
   */
  static toString() {
    return "JavaScript Expression Parser (JSEP) v" + z.version;
  }
  // ==================== CONFIG ================================
  /**
   * @method addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @returns {Jsep}
   */
  static addUnaryOp(t) {
    return z.max_unop_len = Math.max(t.length, z.max_unop_len), z.unary_ops[t] = 1, z;
  }
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
   * @param {boolean} [isRightAssociative=false] whether operator is right-associative
   * @returns {Jsep}
   */
  static addBinaryOp(t, n, r) {
    return z.max_binop_len = Math.max(t.length, z.max_binop_len), z.binary_ops[t] = n, r ? z.right_associative.add(t) : z.right_associative.delete(t), z;
  }
  /**
   * @method addIdentifierChar
   * @param {string} char The additional character to treat as a valid part of an identifier
   * @returns {Jsep}
   */
  static addIdentifierChar(t) {
    return z.additional_identifier_chars.add(t), z;
  }
  /**
   * @method addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @returns {Jsep}
   */
  static addLiteral(t, n) {
    return z.literals[t] = n, z;
  }
  /**
   * @method removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @returns {Jsep}
   */
  static removeUnaryOp(t) {
    return delete z.unary_ops[t], t.length === z.max_unop_len && (z.max_unop_len = z.getMaxKeyLen(z.unary_ops)), z;
  }
  /**
   * @method removeAllUnaryOps
   * @returns {Jsep}
   */
  static removeAllUnaryOps() {
    return z.unary_ops = {}, z.max_unop_len = 0, z;
  }
  /**
   * @method removeIdentifierChar
   * @param {string} char The additional character to stop treating as a valid part of an identifier
   * @returns {Jsep}
   */
  static removeIdentifierChar(t) {
    return z.additional_identifier_chars.delete(t), z;
  }
  /**
   * @method removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @returns {Jsep}
   */
  static removeBinaryOp(t) {
    return delete z.binary_ops[t], t.length === z.max_binop_len && (z.max_binop_len = z.getMaxKeyLen(z.binary_ops)), z.right_associative.delete(t), z;
  }
  /**
   * @method removeAllBinaryOps
   * @returns {Jsep}
   */
  static removeAllBinaryOps() {
    return z.binary_ops = {}, z.max_binop_len = 0, z;
  }
  /**
   * @method removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @returns {Jsep}
   */
  static removeLiteral(t) {
    return delete z.literals[t], z;
  }
  /**
   * @method removeAllLiterals
   * @returns {Jsep}
   */
  static removeAllLiterals() {
    return z.literals = {}, z;
  }
  // ==================== END CONFIG ============================
  /**
   * @returns {string}
   */
  get char() {
    return this.expr.charAt(this.index);
  }
  /**
   * @returns {number}
   */
  get code() {
    return this.expr.charCodeAt(this.index);
  }
  /**
   * @param {string} expr a string with the passed in express
   * @returns Jsep
   */
  constructor(t) {
    this.expr = t, this.index = 0;
  }
  /**
   * static top-level parser
   * @returns {jsep.Expression}
   */
  static parse(t) {
    return new z(t).parse();
  }
  /**
   * Get the longest key length of any object
   * @param {object} obj
   * @returns {number}
   */
  static getMaxKeyLen(t) {
    return Math.max(0, ...Object.keys(t).map((n) => n.length));
  }
  /**
   * `ch` is a character code in the next three functions
   * @param {number} ch
   * @returns {boolean}
   */
  static isDecimalDigit(t) {
    return t >= 48 && t <= 57;
  }
  /**
   * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
   * @param {string} op_val
   * @returns {number}
   */
  static binaryPrecedence(t) {
    return z.binary_ops[t] || 0;
  }
  /**
   * Looks for start of identifier
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierStart(t) {
    return t >= 65 && t <= 90 || // A...Z
    t >= 97 && t <= 122 || // a...z
    t >= 128 && !z.binary_ops[String.fromCharCode(t)] || // any non-ASCII that is not an operator
    z.additional_identifier_chars.has(String.fromCharCode(t));
  }
  /**
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierPart(t) {
    return z.isIdentifierStart(t) || z.isDecimalDigit(t);
  }
  /**
   * throw error at index of the expression
   * @param {string} message
   * @throws
   */
  throwError(t) {
    const n = new Error(t + " at character " + this.index);
    throw n.index = this.index, n.description = t, n;
  }
  /**
   * Run a given hook
   * @param {string} name
   * @param {jsep.Expression|false} [node]
   * @returns {?jsep.Expression}
   */
  runHook(t, n) {
    if (z.hooks[t]) {
      const r = {
        context: this,
        node: n
      };
      return z.hooks.run(t, r), r.node;
    }
    return n;
  }
  /**
   * Runs a given hook until one returns a node
   * @param {string} name
   * @returns {?jsep.Expression}
   */
  searchHook(t) {
    if (z.hooks[t]) {
      const n = {
        context: this
      };
      return z.hooks[t].find(function(r) {
        return r.call(n.context, n), n.node;
      }), n.node;
    }
  }
  /**
   * Push `index` up to the next non-space character
   */
  gobbleSpaces() {
    let t = this.code;
    for (; t === z.SPACE_CODE || t === z.TAB_CODE || t === z.LF_CODE || t === z.CR_CODE; )
      t = this.expr.charCodeAt(++this.index);
    this.runHook("gobble-spaces");
  }
  /**
   * Top-level method to parse all expressions and returns compound or single node
   * @returns {jsep.Expression}
   */
  parse() {
    this.runHook("before-all");
    const t = this.gobbleExpressions(), n = t.length === 1 ? t[0] : {
      type: z.COMPOUND,
      body: t
    };
    return this.runHook("after-all", n);
  }
  /**
   * top-level parser (but can be reused within as well)
   * @param {number} [untilICode]
   * @returns {jsep.Expression[]}
   */
  gobbleExpressions(t) {
    let n = [], r, o;
    for (; this.index < this.expr.length; )
      if (r = this.code, r === z.SEMCOL_CODE || r === z.COMMA_CODE)
        this.index++;
      else if (o = this.gobbleExpression())
        n.push(o);
      else if (this.index < this.expr.length) {
        if (r === t)
          break;
        this.throwError('Unexpected "' + this.char + '"');
      }
    return n;
  }
  /**
   * The main parsing function.
   * @returns {?jsep.Expression}
   */
  gobbleExpression() {
    const t = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
    return this.gobbleSpaces(), this.runHook("after-expression", t);
  }
  /**
   * Search for the operation portion of the string (e.g. `+`, `===`)
   * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
   * and move down from 3 to 2 to 1 character until a matching binary operation is found
   * then, return that binary operation
   * @returns {string|boolean}
   */
  gobbleBinaryOp() {
    this.gobbleSpaces();
    let t = this.expr.substr(this.index, z.max_binop_len), n = t.length;
    for (; n > 0; ) {
      if (z.binary_ops.hasOwnProperty(t) && (!z.isIdentifierStart(this.code) || this.index + t.length < this.expr.length && !z.isIdentifierPart(this.expr.charCodeAt(this.index + t.length))))
        return this.index += n, t;
      t = t.substr(0, --n);
    }
    return !1;
  }
  /**
   * This function is responsible for gobbling an individual expression,
   * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
   * @returns {?jsep.BinaryExpression}
   */
  gobbleBinaryExpression() {
    let t, n, r, o, i, s, l, c, u;
    if (s = this.gobbleToken(), !s || (n = this.gobbleBinaryOp(), !n))
      return s;
    for (i = {
      value: n,
      prec: z.binaryPrecedence(n),
      right_a: z.right_associative.has(n)
    }, l = this.gobbleToken(), l || this.throwError("Expected expression after " + n), o = [s, i, l]; n = this.gobbleBinaryOp(); ) {
      if (r = z.binaryPrecedence(n), r === 0) {
        this.index -= n.length;
        break;
      }
      i = {
        value: n,
        prec: r,
        right_a: z.right_associative.has(n)
      }, u = n;
      const d = (p) => i.right_a && p.right_a ? r > p.prec : r <= p.prec;
      for (; o.length > 2 && d(o[o.length - 2]); )
        l = o.pop(), n = o.pop().value, s = o.pop(), t = {
          type: z.BINARY_EXP,
          operator: n,
          left: s,
          right: l
        }, o.push(t);
      t = this.gobbleToken(), t || this.throwError("Expected expression after " + u), o.push(i, t);
    }
    for (c = o.length - 1, t = o[c]; c > 1; )
      t = {
        type: z.BINARY_EXP,
        operator: o[c - 1].value,
        left: o[c - 2],
        right: t
      }, c -= 2;
    return t;
  }
  /**
   * An individual part of a binary expression:
   * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
   * @returns {boolean|jsep.Expression}
   */
  gobbleToken() {
    let t, n, r, o;
    if (this.gobbleSpaces(), o = this.searchHook("gobble-token"), o)
      return this.runHook("after-token", o);
    if (t = this.code, z.isDecimalDigit(t) || t === z.PERIOD_CODE)
      return this.gobbleNumericLiteral();
    if (t === z.SQUOTE_CODE || t === z.DQUOTE_CODE)
      o = this.gobbleStringLiteral();
    else if (t === z.OBRACK_CODE)
      o = this.gobbleArray();
    else {
      for (n = this.expr.substr(this.index, z.max_unop_len), r = n.length; r > 0; ) {
        if (z.unary_ops.hasOwnProperty(n) && (!z.isIdentifierStart(this.code) || this.index + n.length < this.expr.length && !z.isIdentifierPart(this.expr.charCodeAt(this.index + n.length)))) {
          this.index += r;
          const i = this.gobbleToken();
          return i || this.throwError("missing unaryOp argument"), this.runHook("after-token", {
            type: z.UNARY_EXP,
            operator: n,
            argument: i,
            prefix: !0
          });
        }
        n = n.substr(0, --r);
      }
      z.isIdentifierStart(t) ? (o = this.gobbleIdentifier(), z.literals.hasOwnProperty(o.name) ? o = {
        type: z.LITERAL,
        value: z.literals[o.name],
        raw: o.name
      } : o.name === z.this_str && (o = {
        type: z.THIS_EXP
      })) : t === z.OPAREN_CODE && (o = this.gobbleGroup());
    }
    return o ? (o = this.gobbleTokenProperty(o), this.runHook("after-token", o)) : this.runHook("after-token", !1);
  }
  /**
   * Gobble properties of of identifiers/strings/arrays/groups.
   * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
   * It also gobbles function calls:
   * e.g. `Math.acos(obj.angle)`
   * @param {jsep.Expression} node
   * @returns {jsep.Expression}
   */
  gobbleTokenProperty(t) {
    this.gobbleSpaces();
    let n = this.code;
    for (; n === z.PERIOD_CODE || n === z.OBRACK_CODE || n === z.OPAREN_CODE || n === z.QUMARK_CODE; ) {
      let r;
      if (n === z.QUMARK_CODE) {
        if (this.expr.charCodeAt(this.index + 1) !== z.PERIOD_CODE)
          break;
        r = !0, this.index += 2, this.gobbleSpaces(), n = this.code;
      }
      this.index++, n === z.OBRACK_CODE ? (t = {
        type: z.MEMBER_EXP,
        computed: !0,
        object: t,
        property: this.gobbleExpression()
      }, t.property || this.throwError('Unexpected "' + this.char + '"'), this.gobbleSpaces(), n = this.code, n !== z.CBRACK_CODE && this.throwError("Unclosed ["), this.index++) : n === z.OPAREN_CODE ? t = {
        type: z.CALL_EXP,
        arguments: this.gobbleArguments(z.CPAREN_CODE),
        callee: t
      } : (n === z.PERIOD_CODE || r) && (r && this.index--, this.gobbleSpaces(), t = {
        type: z.MEMBER_EXP,
        computed: !1,
        object: t,
        property: this.gobbleIdentifier()
      }), r && (t.optional = !0), this.gobbleSpaces(), n = this.code;
    }
    return t;
  }
  /**
   * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
   * keep track of everything in the numeric literal and then calling `parseFloat` on that string
   * @returns {jsep.Literal}
   */
  gobbleNumericLiteral() {
    let t = "", n, r;
    for (; z.isDecimalDigit(this.code); )
      t += this.expr.charAt(this.index++);
    if (this.code === z.PERIOD_CODE)
      for (t += this.expr.charAt(this.index++); z.isDecimalDigit(this.code); )
        t += this.expr.charAt(this.index++);
    if (n = this.char, n === "e" || n === "E") {
      for (t += this.expr.charAt(this.index++), n = this.char, (n === "+" || n === "-") && (t += this.expr.charAt(this.index++)); z.isDecimalDigit(this.code); )
        t += this.expr.charAt(this.index++);
      z.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + t + this.char + ")");
    }
    return r = this.code, z.isIdentifierStart(r) ? this.throwError("Variable names cannot start with a number (" + t + this.char + ")") : (r === z.PERIOD_CODE || t.length === 1 && t.charCodeAt(0) === z.PERIOD_CODE) && this.throwError("Unexpected period"), {
      type: z.LITERAL,
      value: parseFloat(t),
      raw: t
    };
  }
  /**
   * Parses a string literal, staring with single or double quotes with basic support for escape codes
   * e.g. `"hello world"`, `'this is\nJSEP'`
   * @returns {jsep.Literal}
   */
  gobbleStringLiteral() {
    let t = "";
    const n = this.index, r = this.expr.charAt(this.index++);
    let o = !1;
    for (; this.index < this.expr.length; ) {
      let i = this.expr.charAt(this.index++);
      if (i === r) {
        o = !0;
        break;
      } else if (i === "\\")
        switch (i = this.expr.charAt(this.index++), i) {
          case "n":
            t += `
`;
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
          default:
            t += i;
        }
      else
        t += i;
    }
    return o || this.throwError('Unclosed quote after "' + t + '"'), {
      type: z.LITERAL,
      value: t,
      raw: this.expr.substring(n, this.index)
    };
  }
  /**
   * Gobbles only identifiers
   * e.g.: `foo`, `_value`, `$x1`
   * Also, this function checks if that identifier is a literal:
   * (e.g. `true`, `false`, `null`) or `this`
   * @returns {jsep.Identifier}
   */
  gobbleIdentifier() {
    let t = this.code, n = this.index;
    for (z.isIdentifierStart(t) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (t = this.code, z.isIdentifierPart(t)); )
      this.index++;
    return {
      type: z.IDENTIFIER,
      name: this.expr.slice(n, this.index)
    };
  }
  /**
   * Gobbles a list of arguments within the context of a function call
   * or array literal. This function also assumes that the opening character
   * `(` or `[` has already been gobbled, and gobbles expressions and commas
   * until the terminator character `)` or `]` is encountered.
   * e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
   * @param {number} termination
   * @returns {jsep.Expression[]}
   */
  gobbleArguments(t) {
    const n = [];
    let r = !1, o = 0;
    for (; this.index < this.expr.length; ) {
      this.gobbleSpaces();
      let i = this.code;
      if (i === t) {
        r = !0, this.index++, t === z.CPAREN_CODE && o && o >= n.length && this.throwError("Unexpected token " + String.fromCharCode(t));
        break;
      } else if (i === z.COMMA_CODE) {
        if (this.index++, o++, o !== n.length) {
          if (t === z.CPAREN_CODE)
            this.throwError("Unexpected token ,");
          else if (t === z.CBRACK_CODE)
            for (let s = n.length; s < o; s++)
              n.push(null);
        }
      } else if (n.length !== o && o !== 0)
        this.throwError("Expected comma");
      else {
        const s = this.gobbleExpression();
        (!s || s.type === z.COMPOUND) && this.throwError("Expected comma"), n.push(s);
      }
    }
    return r || this.throwError("Expected " + String.fromCharCode(t)), n;
  }
  /**
   * Responsible for parsing a group of things within parentheses `()`
   * that have no identifier in front (so not a function call)
   * This function assumes that it needs to gobble the opening parenthesis
   * and then tries to gobble everything within that parenthesis, assuming
   * that the next thing it should see is the close parenthesis. If not,
   * then the expression probably doesn't have a `)`
   * @returns {boolean|jsep.Expression}
   */
  gobbleGroup() {
    this.index++;
    let t = this.gobbleExpressions(z.CPAREN_CODE);
    if (this.code === z.CPAREN_CODE)
      return this.index++, t.length === 1 ? t[0] : t.length ? {
        type: z.SEQUENCE_EXP,
        expressions: t
      } : !1;
    this.throwError("Unclosed (");
  }
  /**
   * Responsible for parsing Array literals `[1, 2, 3]`
   * This function assumes that it needs to gobble the opening bracket
   * and then tries to gobble the expressions as arguments.
   * @returns {jsep.ArrayExpression}
   */
  gobbleArray() {
    return this.index++, {
      type: z.ARRAY_EXP,
      elements: this.gobbleArguments(z.CBRACK_CODE)
    };
  }
}
const Nj = new Aj();
Object.assign(z, {
  hooks: Nj,
  plugins: new Rj(z),
  // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified
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
  // '.'
  COMMA_CODE: 44,
  // ','
  SQUOTE_CODE: 39,
  // single quote
  DQUOTE_CODE: 34,
  // double quotes
  OPAREN_CODE: 40,
  // (
  CPAREN_CODE: 41,
  // )
  OBRACK_CODE: 91,
  // [
  CBRACK_CODE: 93,
  // ]
  QUMARK_CODE: 63,
  // ?
  SEMCOL_CODE: 59,
  // ;
  COLON_CODE: 58,
  // :
  // Operations
  // ----------
  // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `1` (it really doesn't matter)
  unary_ops: {
    "-": 1,
    "!": 1,
    "~": 1,
    "+": 1
  },
  // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference (higher number = higher precedence)
  // see [Order of operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
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
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(["**"]),
  // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
  additional_identifier_chars: /* @__PURE__ */ new Set(["$", "_"]),
  // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals: {
    true: !0,
    false: !1,
    null: null
  },
  // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str: "this"
});
z.max_unop_len = z.getMaxKeyLen(z.unary_ops);
z.max_binop_len = z.getMaxKeyLen(z.binary_ops);
const bt = (e) => new z(e).parse(), Mj = Object.getOwnPropertyNames(class {
});
Object.getOwnPropertyNames(z).filter((e) => !Mj.includes(e) && bt[e] === void 0).forEach((e) => {
  bt[e] = z[e];
});
bt.Jsep = z;
const qj = "ConditionalExpression";
var Fj = {
  name: "ternary",
  init(e) {
    e.hooks.add("after-expression", function(n) {
      if (n.node && this.code === e.QUMARK_CODE) {
        this.index++;
        const r = n.node, o = this.gobbleExpression();
        if (o || this.throwError("Expected expression"), this.gobbleSpaces(), this.code === e.COLON_CODE) {
          this.index++;
          const i = this.gobbleExpression();
          if (i || this.throwError("Expected expression"), n.node = {
            type: qj,
            test: r,
            consequent: o,
            alternate: i
          }, r.operator && e.binary_ops[r.operator] <= 0.9) {
            let s = r;
            for (; s.right.operator && e.binary_ops[s.right.operator] <= 0.9; )
              s = s.right;
            n.node.test = s.right, s.right = n.node, n.node = r;
          }
        } else
          this.throwError("Expected :");
      }
    });
  }
};
bt.plugins.register(Fj);
const Cu = 47, Lj = 92;
var Bj = {
  name: "regex",
  init(e) {
    e.hooks.add("gobble-token", function(n) {
      if (this.code === Cu) {
        const r = ++this.index;
        let o = !1;
        for (; this.index < this.expr.length; ) {
          if (this.code === Cu && !o) {
            const i = this.expr.slice(r, this.index);
            let s = "";
            for (; ++this.index < this.expr.length; ) {
              const c = this.code;
              if (c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57)
                s += this.char;
              else
                break;
            }
            let l;
            try {
              l = new RegExp(i, s);
            } catch (c) {
              this.throwError(c.message);
            }
            return n.node = {
              type: e.LITERAL,
              value: l,
              raw: this.expr.slice(r - 1, this.index)
            }, n.node = this.gobbleTokenProperty(n.node), n.node;
          }
          this.code === e.OBRACK_CODE ? o = !0 : o && this.code === e.CBRACK_CODE && (o = !1), this.index += this.code === Lj ? 2 : 1;
        }
        this.throwError("Unclosed Regex");
      }
    });
  }
};
const as = 43, Hj = 45, Tn = {
  name: "assignment",
  assignmentOperators: /* @__PURE__ */ new Set(["=", "*=", "**=", "/=", "%=", "+=", "-=", "<<=", ">>=", ">>>=", "&=", "^=", "|=", "||=", "&&=", "??="]),
  updateOperators: [as, Hj],
  assignmentPrecedence: 0.9,
  init(e) {
    const t = [e.IDENTIFIER, e.MEMBER_EXP];
    Tn.assignmentOperators.forEach((r) => e.addBinaryOp(r, Tn.assignmentPrecedence, !0)), e.hooks.add("gobble-token", function(o) {
      const i = this.code;
      Tn.updateOperators.some((s) => s === i && s === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, o.node = {
        type: "UpdateExpression",
        operator: i === as ? "++" : "--",
        argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
        prefix: !0
      }, (!o.node.argument || !t.includes(o.node.argument.type)) && this.throwError(`Unexpected ${o.node.operator}`));
    }), e.hooks.add("after-token", function(o) {
      if (o.node) {
        const i = this.code;
        Tn.updateOperators.some((s) => s === i && s === this.expr.charCodeAt(this.index + 1)) && (t.includes(o.node.type) || this.throwError(`Unexpected ${o.node.operator}`), this.index += 2, o.node = {
          type: "UpdateExpression",
          operator: i === as ? "++" : "--",
          argument: o.node,
          prefix: !1
        });
      }
    }), e.hooks.add("after-expression", function(o) {
      o.node && n(o.node);
    });
    function n(r) {
      Tn.assignmentOperators.has(r.operator) ? (r.type = "AssignmentExpression", n(r.left), n(r.right)) : r.operator || Object.values(r).forEach((o) => {
        o && typeof o == "object" && n(o);
      });
    }
  }
};
bt.plugins.register(Bj, Tn);
bt.addUnaryOp("typeof");
bt.addLiteral("null", null);
bt.addLiteral("undefined", void 0);
const Uj = /* @__PURE__ */ new Set(["constructor", "__proto__", "__defineGetter__", "__defineSetter__"]), ne = {
  /**
   * @param {jsep.Expression} ast
   * @param {Record<string, any>} subs
   */
  evalAst(e, t) {
    switch (e.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        return ne.evalBinaryExpression(e, t);
      case "Compound":
        return ne.evalCompound(e, t);
      case "ConditionalExpression":
        return ne.evalConditionalExpression(e, t);
      case "Identifier":
        return ne.evalIdentifier(e, t);
      case "Literal":
        return ne.evalLiteral(e, t);
      case "MemberExpression":
        return ne.evalMemberExpression(e, t);
      case "UnaryExpression":
        return ne.evalUnaryExpression(e, t);
      case "ArrayExpression":
        return ne.evalArrayExpression(e, t);
      case "CallExpression":
        return ne.evalCallExpression(e, t);
      case "AssignmentExpression":
        return ne.evalAssignmentExpression(e, t);
      default:
        throw SyntaxError("Unexpected expression", e);
    }
  },
  evalBinaryExpression(e, t) {
    return {
      "||": (r, o) => r || o(),
      "&&": (r, o) => r && o(),
      "|": (r, o) => r | o(),
      "^": (r, o) => r ^ o(),
      "&": (r, o) => r & o(),
      // eslint-disable-next-line eqeqeq -- API
      "==": (r, o) => r == o(),
      // eslint-disable-next-line eqeqeq -- API
      "!=": (r, o) => r != o(),
      "===": (r, o) => r === o(),
      "!==": (r, o) => r !== o(),
      "<": (r, o) => r < o(),
      ">": (r, o) => r > o(),
      "<=": (r, o) => r <= o(),
      ">=": (r, o) => r >= o(),
      "<<": (r, o) => r << o(),
      ">>": (r, o) => r >> o(),
      ">>>": (r, o) => r >>> o(),
      "+": (r, o) => r + o(),
      "-": (r, o) => r - o(),
      "*": (r, o) => r * o(),
      "/": (r, o) => r / o(),
      "%": (r, o) => r % o()
    }[e.operator](ne.evalAst(e.left, t), () => ne.evalAst(e.right, t));
  },
  evalCompound(e, t) {
    let n;
    for (let r = 0; r < e.body.length; r++) {
      e.body[r].type === "Identifier" && ["var", "let", "const"].includes(e.body[r].name) && e.body[r + 1] && e.body[r + 1].type === "AssignmentExpression" && (r += 1);
      const o = e.body[r];
      n = ne.evalAst(o, t);
    }
    return n;
  },
  evalConditionalExpression(e, t) {
    return ne.evalAst(e.test, t) ? ne.evalAst(e.consequent, t) : ne.evalAst(e.alternate, t);
  },
  evalIdentifier(e, t) {
    if (Object.hasOwn(t, e.name))
      return t[e.name];
    throw ReferenceError(`${e.name} is not defined`);
  },
  evalLiteral(e) {
    return e.value;
  },
  evalMemberExpression(e, t) {
    const n = String(
      // NOTE: `String(value)` throws error when
      // value has overwritten the toString method to return non-string
      // i.e. `value = {toString: () => []}`
      e.computed ? ne.evalAst(e.property) : e.property.name
      // `object.property` property is Identifier
    ), r = ne.evalAst(e.object, t);
    if (r == null)
      throw TypeError(`Cannot read properties of ${r} (reading '${n}')`);
    if (!Object.hasOwn(r, n) && Uj.has(n))
      throw TypeError(`Cannot read properties of ${r} (reading '${n}')`);
    const o = r[n];
    return typeof o == "function" ? o.bind(r) : o;
  },
  evalUnaryExpression(e, t) {
    return {
      "-": (r) => -ne.evalAst(r, t),
      "!": (r) => !ne.evalAst(r, t),
      "~": (r) => ~ne.evalAst(r, t),
      // eslint-disable-next-line no-implicit-coercion -- API
      "+": (r) => +ne.evalAst(r, t),
      typeof: (r) => typeof ne.evalAst(r, t)
    }[e.operator](e.argument);
  },
  evalArrayExpression(e, t) {
    return e.elements.map((n) => ne.evalAst(n, t));
  },
  evalCallExpression(e, t) {
    const n = e.arguments.map((o) => ne.evalAst(o, t));
    return ne.evalAst(e.callee, t)(...n);
  },
  evalAssignmentExpression(e, t) {
    if (e.left.type !== "Identifier")
      throw SyntaxError("Invalid left-hand side in assignment");
    const n = e.left.name, r = ne.evalAst(e.right, t);
    return t[n] = r, t[n];
  }
};
class Vj {
  /**
   * @param {string} expr Expression to evaluate
   */
  constructor(t) {
    this.code = t, this.ast = bt(this.code);
  }
  /**
   * @param {object} context Object whose items will be added
   *   to evaluation
   * @returns {EvaluatedResult} Result of evaluated code
   */
  runInNewContext(t) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), t);
    return ne.evalAst(this.ast, n);
  }
}
function jt(e, t) {
  return e = e.slice(), e.push(t), e;
}
function Xs(e, t) {
  return t = t.slice(), t.unshift(e), t;
}
class Wj extends Error {
  /**
   * @param {AnyResult} value The evaluated scalar value
   */
  constructor(t) {
    super('JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), this.avoidNew = !0, this.value = t, this.name = "NewError";
  }
}
function te(e, t, n, r, o) {
  if (!(this instanceof te))
    try {
      return new te(e, t, n, r, o);
    } catch (s) {
      if (!s.avoidNew)
        throw s;
      return s.value;
    }
  typeof e == "string" && (o = r, r = n, n = t, t = e, e = null);
  const i = e && typeof e == "object";
  if (e = e || {}, this.json = e.json || n, this.path = e.path || t, this.resultType = e.resultType || "value", this.flatten = e.flatten || !1, this.wrap = Object.hasOwn(e, "wrap") ? e.wrap : !0, this.sandbox = e.sandbox || {}, this.eval = e.eval === void 0 ? "safe" : e.eval, this.ignoreEvalErrors = typeof e.ignoreEvalErrors > "u" ? !1 : e.ignoreEvalErrors, this.parent = e.parent || null, this.parentProperty = e.parentProperty || null, this.callback = e.callback || r || null, this.otherTypeCallback = e.otherTypeCallback || o || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, e.autostart !== !1) {
    const s = {
      path: i ? e.path : t
    };
    i ? "json" in e && (s.json = e.json) : s.json = n;
    const l = this.evaluate(s);
    if (!l || typeof l != "object")
      throw new Wj(l);
    return l;
  }
}
te.prototype.evaluate = function(e, t, n, r) {
  let o = this.parent, i = this.parentProperty, {
    flatten: s,
    wrap: l
  } = this;
  if (this.currResultType = this.resultType, this.currEval = this.eval, this.currSandbox = this.sandbox, n = n || this.callback, this.currOtherTypeCallback = r || this.otherTypeCallback, t = t || this.json, e = e || this.path, e && typeof e == "object" && !Array.isArray(e)) {
    if (!e.path && e.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!Object.hasOwn(e, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    ({
      json: t
    } = e), s = Object.hasOwn(e, "flatten") ? e.flatten : s, this.currResultType = Object.hasOwn(e, "resultType") ? e.resultType : this.currResultType, this.currSandbox = Object.hasOwn(e, "sandbox") ? e.sandbox : this.currSandbox, l = Object.hasOwn(e, "wrap") ? e.wrap : l, this.currEval = Object.hasOwn(e, "eval") ? e.eval : this.currEval, n = Object.hasOwn(e, "callback") ? e.callback : n, this.currOtherTypeCallback = Object.hasOwn(e, "otherTypeCallback") ? e.otherTypeCallback : this.currOtherTypeCallback, o = Object.hasOwn(e, "parent") ? e.parent : o, i = Object.hasOwn(e, "parentProperty") ? e.parentProperty : i, e = e.path;
  }
  if (o = o || null, i = i || null, Array.isArray(e) && (e = te.toPathString(e)), !e && e !== "" || !t)
    return;
  const c = te.toPathArray(e);
  c[0] === "$" && c.length > 1 && c.shift(), this._hasParentSelector = null;
  const u = this._trace(c, t, ["$"], o, i, n).filter(function(d) {
    return d && !d.isParentSelector;
  });
  return u.length ? !l && u.length === 1 && !u[0].hasArrExpr ? this._getPreferredOutput(u[0]) : u.reduce((d, p) => {
    const f = this._getPreferredOutput(p);
    return s && Array.isArray(f) ? d = d.concat(f) : d.push(f), d;
  }, []) : l ? [] : void 0;
};
te.prototype._getPreferredOutput = function(e) {
  const t = this.currResultType;
  switch (t) {
    case "all": {
      const n = Array.isArray(e.path) ? e.path : te.toPathArray(e.path);
      return e.pointer = te.toPointer(n), e.path = typeof e.path == "string" ? e.path : te.toPathString(e.path), e;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return e[t];
    case "path":
      return te.toPathString(e[t]);
    case "pointer":
      return te.toPointer(e.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
te.prototype._handleCallback = function(e, t, n) {
  if (t) {
    const r = this._getPreferredOutput(e);
    e.path = typeof e.path == "string" ? e.path : te.toPathString(e.path), t(r, n, e);
  }
};
te.prototype._trace = function(e, t, n, r, o, i, s, l) {
  let c;
  if (!e.length)
    return c = {
      path: n,
      value: t,
      parent: r,
      parentProperty: o,
      hasArrExpr: s
    }, this._handleCallback(c, i, "value"), c;
  const u = e[0], d = e.slice(1), p = [];
  function f(h) {
    Array.isArray(h) ? h.forEach((m) => {
      p.push(m);
    }) : p.push(h);
  }
  if ((typeof u != "string" || l) && t && Object.hasOwn(t, u))
    f(this._trace(d, t[u], jt(n, u), t, u, i, s));
  else if (u === "*")
    this._walk(t, (h) => {
      f(this._trace(d, t[h], jt(n, h), t, h, i, !0, !0));
    });
  else if (u === "..")
    f(this._trace(d, t, n, r, o, i, s)), this._walk(t, (h) => {
      typeof t[h] == "object" && f(this._trace(e.slice(), t[h], jt(n, h), t, h, i, !0));
    });
  else {
    if (u === "^")
      return this._hasParentSelector = !0, {
        path: n.slice(0, -1),
        expr: d,
        isParentSelector: !0
      };
    if (u === "~")
      return c = {
        path: jt(n, u),
        value: o,
        parent: r,
        parentProperty: null
      }, this._handleCallback(c, i, "property"), c;
    if (u === "$")
      f(this._trace(d, t, n, null, null, i, s));
    else if (/^(-?\d*):(-?\d*):?(\d*)$/u.test(u))
      f(this._slice(u, d, t, n, r, o, i));
    else if (u.indexOf("?(") === 0) {
      if (this.currEval === !1)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      const h = u.replace(/^\?\((.*?)\)$/u, "$1"), m = /@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(h);
      m ? this._walk(t, (g) => {
        const y = [m[2]], v = m[1] ? t[g][m[1]] : t[g];
        this._trace(y, v, n, r, o, i, !0).length > 0 && f(this._trace(d, t[g], jt(n, g), t, g, i, !0));
      }) : this._walk(t, (g) => {
        this._eval(h, t[g], g, n, r, o) && f(this._trace(d, t[g], jt(n, g), t, g, i, !0));
      });
    } else if (u[0] === "(") {
      if (this.currEval === !1)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      f(this._trace(Xs(this._eval(u, t, n.at(-1), n.slice(0, -1), r, o), d), t, n, r, o, i, s));
    } else if (u[0] === "@") {
      let h = !1;
      const m = u.slice(1, -2);
      switch (m) {
        case "scalar":
          (!t || !["object", "function"].includes(typeof t)) && (h = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          typeof t === m && (h = !0);
          break;
        case "integer":
          Number.isFinite(t) && !(t % 1) && (h = !0);
          break;
        case "number":
          Number.isFinite(t) && (h = !0);
          break;
        case "nonFinite":
          typeof t == "number" && !Number.isFinite(t) && (h = !0);
          break;
        case "object":
          t && typeof t === m && (h = !0);
          break;
        case "array":
          Array.isArray(t) && (h = !0);
          break;
        case "other":
          h = this.currOtherTypeCallback(t, n, r, o);
          break;
        case "null":
          t === null && (h = !0);
          break;
        /* c8 ignore next 2 */
        default:
          throw new TypeError("Unknown value type " + m);
      }
      if (h)
        return c = {
          path: n,
          value: t,
          parent: r,
          parentProperty: o
        }, this._handleCallback(c, i, "value"), c;
    } else if (u[0] === "`" && t && Object.hasOwn(t, u.slice(1))) {
      const h = u.slice(1);
      f(this._trace(d, t[h], jt(n, h), t, h, i, s, !0));
    } else if (u.includes(",")) {
      const h = u.split(",");
      for (const m of h)
        f(this._trace(Xs(m, d), t, n, r, o, i, !0));
    } else !l && t && Object.hasOwn(t, u) && f(this._trace(d, t[u], jt(n, u), t, u, i, s, !0));
  }
  if (this._hasParentSelector)
    for (let h = 0; h < p.length; h++) {
      const m = p[h];
      if (m && m.isParentSelector) {
        const g = this._trace(m.expr, t, m.path, r, o, i, s);
        if (Array.isArray(g)) {
          p[h] = g[0];
          const y = g.length;
          for (let v = 1; v < y; v++)
            h++, p.splice(h, 0, g[v]);
        } else
          p[h] = g;
      }
    }
  return p;
};
te.prototype._walk = function(e, t) {
  if (Array.isArray(e)) {
    const n = e.length;
    for (let r = 0; r < n; r++)
      t(r);
  } else e && typeof e == "object" && Object.keys(e).forEach((n) => {
    t(n);
  });
};
te.prototype._slice = function(e, t, n, r, o, i, s) {
  if (!Array.isArray(n))
    return;
  const l = n.length, c = e.split(":"), u = c[2] && Number.parseInt(c[2]) || 1;
  let d = c[0] && Number.parseInt(c[0]) || 0, p = c[1] && Number.parseInt(c[1]) || l;
  d = d < 0 ? Math.max(0, d + l) : Math.min(l, d), p = p < 0 ? Math.max(0, p + l) : Math.min(l, p);
  const f = [];
  for (let h = d; h < p; h += u)
    this._trace(Xs(h, t), n, r, o, i, s, !0).forEach((g) => {
      f.push(g);
    });
  return f;
};
te.prototype._eval = function(e, t, n, r, o, i) {
  this.currSandbox._$_parentProperty = i, this.currSandbox._$_parent = o, this.currSandbox._$_property = n, this.currSandbox._$_root = this.json, this.currSandbox._$_v = t;
  const s = e.includes("@path");
  s && (this.currSandbox._$_path = te.toPathString(r.concat([n])));
  const l = this.currEval + "Script:" + e;
  if (!te.cache[l]) {
    let c = e.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(/@([.\s)[])/gu, "_$_v$1");
    if (s && (c = c.replaceAll("@path", "_$_path")), this.currEval === "safe" || this.currEval === !0 || this.currEval === void 0)
      te.cache[l] = new this.safeVm.Script(c);
    else if (this.currEval === "native")
      te.cache[l] = new this.vm.Script(c);
    else if (typeof this.currEval == "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
      const u = this.currEval;
      te.cache[l] = new u(c);
    } else if (typeof this.currEval == "function")
      te.cache[l] = {
        runInNewContext: (u) => this.currEval(c, u)
      };
    else
      throw new TypeError(`Unknown "eval" property "${this.currEval}"`);
  }
  try {
    return te.cache[l].runInNewContext(this.currSandbox);
  } catch (c) {
    if (this.ignoreEvalErrors)
      return !1;
    throw new Error("jsonPath: " + c.message + ": " + e);
  }
};
te.cache = {};
te.toPathString = function(e) {
  const t = e, n = t.length;
  let r = "$";
  for (let o = 1; o < n; o++)
    /^(~|\^|@.*?\(\))$/u.test(t[o]) || (r += /^[0-9*]+$/u.test(t[o]) ? "[" + t[o] + "]" : "['" + t[o] + "']");
  return r;
};
te.toPointer = function(e) {
  const t = e, n = t.length;
  let r = "";
  for (let o = 1; o < n; o++)
    /^(~|\^|@.*?\(\))$/u.test(t[o]) || (r += "/" + t[o].toString().replaceAll("~", "~0").replaceAll("/", "~1"));
  return r;
};
te.toPathArray = function(e) {
  const {
    cache: t
  } = te;
  if (t[e])
    return t[e].concat();
  const n = [], o = e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu, ";$&;").replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu, function(i, s) {
    return "[#" + (n.push(s) - 1) + "]";
  }).replaceAll(/\[['"]([^'\]]*)['"]\]/gu, function(i, s) {
    return "['" + s.replaceAll(".", "%@%").replaceAll("~", "%%@@%%") + "']";
  }).replaceAll("~", ";~;").replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu, ";").replaceAll("%@%", ".").replaceAll("%%@@%%", "~").replaceAll(/(?:;)?(\^+)(?:;)?/gu, function(i, s) {
    return ";" + s.split("").join(";") + ";";
  }).replaceAll(/;;;|;;/gu, ";..;").replaceAll(/;$|'?\]|'$/gu, "").split(";").map(function(i) {
    const s = i.match(/#(\d+)/u);
    return !s || !s[1] ? i : n[s[1]];
  });
  return t[e] = o, t[e].concat();
};
te.prototype.safeVm = {
  Script: Vj
};
const Gj = function(e, t, n) {
  const r = e.length;
  for (let o = 0; o < r; o++) {
    const i = e[o];
    n(i) && t.push(e.splice(o--, 1)[0]);
  }
};
class Kj {
  /**
   * @param {string} expr Expression to evaluate
   */
  constructor(t) {
    this.code = t;
  }
  /**
   * @param {object} context Object whose items will be added
   *   to evaluation
   * @returns {EvaluatedResult} Result of evaluated code
   */
  runInNewContext(t) {
    let n = this.code;
    const r = Object.keys(t), o = [];
    Gj(r, o, (u) => typeof t[u] == "function");
    const i = r.map((u) => t[u]);
    n = o.reduce((u, d) => {
      let p = t[d].toString();
      return /function/u.test(p) || (p = "function " + p), "var " + d + "=" + p + ";" + u;
    }, "") + n, !/(['"])use strict\1/u.test(n) && !r.includes("arguments") && (n = "var arguments = undefined;" + n), n = n.replace(/;\s*$/u, "");
    const l = n.lastIndexOf(";"), c = l !== -1 ? n.slice(0, l + 1) + " return " + n.slice(l + 1) : " return " + n;
    return new Function(...r, c)(...i);
  }
}
te.prototype.vm = {
  Script: Kj
};
var ls = {}, pr = {}, yo = {}, _u;
function yl() {
  if (_u) return yo;
  _u = 1, Object.defineProperty(yo, "__esModule", { value: !0 }), yo.pathMatch = e;
  function e(t, n) {
    return !!(n === t || t.indexOf(n) === 0 && (n[n.length - 1] === "/" || t.startsWith(n) && t[n.length] === "/"));
  }
  return yo;
}
var vo = {}, xo = {};
function Xj(e, t) {
  return e.endsWith(t) ? e.length === t.length || e[e.length - t.length - 1] === "." : !1;
}
function Yj(e, t) {
  const n = e.length - t.length - 2, r = e.lastIndexOf(".", n);
  return r === -1 ? e : e.slice(r + 1);
}
function Qj(e, t, n) {
  if (n.validHosts !== null) {
    const o = n.validHosts;
    for (const i of o)
      if (
        /*@__INLINE__*/
        Xj(t, i)
      )
        return i;
  }
  let r = 0;
  if (t.startsWith("."))
    for (; r < t.length && t[r] === "."; )
      r += 1;
  return e.length === t.length - r ? null : (
    /*@__INLINE__*/
    Yj(t, e)
  );
}
function Jj(e, t) {
  return e.slice(0, -t.length - 1);
}
function Eu(e, t) {
  let n = 0, r = e.length, o = !1;
  if (!t) {
    if (e.startsWith("data:"))
      return null;
    for (; n < e.length && e.charCodeAt(n) <= 32; )
      n += 1;
    for (; r > n + 1 && e.charCodeAt(r - 1) <= 32; )
      r -= 1;
    if (e.charCodeAt(n) === 47 && e.charCodeAt(n + 1) === 47)
      n += 2;
    else {
      const u = e.indexOf(":/", n);
      if (u !== -1) {
        const d = u - n, p = e.charCodeAt(n), f = e.charCodeAt(n + 1), h = e.charCodeAt(n + 2), m = e.charCodeAt(n + 3), g = e.charCodeAt(n + 4);
        if (!(d === 5 && p === 104 && f === 116 && h === 116 && m === 112 && g === 115)) {
          if (!(d === 4 && p === 104 && f === 116 && h === 116 && m === 112)) {
            if (!(d === 3 && p === 119 && f === 115 && h === 115)) {
              if (!(d === 2 && p === 119 && f === 115)) for (let y = n; y < u; y += 1) {
                const v = e.charCodeAt(y) | 32;
                if (!(v >= 97 && v <= 122 || // [a, z]
                v >= 48 && v <= 57 || // [0, 9]
                v === 46 || // '.'
                v === 45 || // '-'
                v === 43))
                  return null;
              }
            }
          }
        }
        for (n = u + 2; e.charCodeAt(n) === 47; )
          n += 1;
      }
    }
    let s = -1, l = -1, c = -1;
    for (let u = n; u < r; u += 1) {
      const d = e.charCodeAt(u);
      if (d === 35 || // '#'
      d === 47 || // '/'
      d === 63) {
        r = u;
        break;
      } else d === 64 ? s = u : d === 93 ? l = u : d === 58 ? c = u : d >= 65 && d <= 90 && (o = !0);
    }
    if (s !== -1 && s > n && s < r && (n = s + 1), e.charCodeAt(n) === 91)
      return l !== -1 ? e.slice(n + 1, l).toLowerCase() : null;
    c !== -1 && c > n && c < r && (r = c);
  }
  for (; r > n + 1 && e.charCodeAt(r - 1) === 46; )
    r -= 1;
  const i = n !== 0 || r !== e.length ? e.slice(n, r) : e;
  return o ? i.toLowerCase() : i;
}
function Zj(e) {
  if (e.length < 7 || e.length > 15)
    return !1;
  let t = 0;
  for (let n = 0; n < e.length; n += 1) {
    const r = e.charCodeAt(n);
    if (r === 46)
      t += 1;
    else if (r < 48 || r > 57)
      return !1;
  }
  return t === 3 && e.charCodeAt(0) !== 46 && e.charCodeAt(e.length - 1) !== 46;
}
function eC(e) {
  if (e.length < 3)
    return !1;
  let t = e.startsWith("[") ? 1 : 0, n = e.length;
  if (e[n - 1] === "]" && (n -= 1), n - t > 39)
    return !1;
  let r = !1;
  for (; t < n; t += 1) {
    const o = e.charCodeAt(t);
    if (o === 58)
      r = !0;
    else if (!(o >= 48 && o <= 57 || // 0-9
    o >= 97 && o <= 102 || // a-f
    o >= 65 && o <= 90))
      return !1;
  }
  return r;
}
function tC(e) {
  return eC(e) || Zj(e);
}
function Ou(e) {
  return e >= 97 && e <= 122 || e >= 48 && e <= 57 || e > 127;
}
function Tu(e) {
  if (e.length > 255 || e.length === 0 || /*@__INLINE__*/
  !Ou(e.charCodeAt(0)) && e.charCodeAt(0) !== 46 && // '.' (dot)
  e.charCodeAt(0) !== 95)
    return !1;
  let t = -1, n = -1;
  const r = e.length;
  for (let o = 0; o < r; o += 1) {
    const i = e.charCodeAt(o);
    if (i === 46) {
      if (
        // Check that previous label is < 63 bytes long (64 = 63 + '.')
        o - t > 64 || // Check that previous character was not already a '.'
        n === 46 || // Check that the previous label does not end with a '-' (dash)
        n === 45 || // Check that the previous label does not end with a '_' (underscore)
        n === 95
      )
        return !1;
      t = o;
    } else if (!/*@__INLINE__*/
    (Ou(i) || i === 45 || i === 95))
      return !1;
    n = i;
  }
  return (
    // Check that last label is shorter than 63 chars
    r - t - 1 <= 63 && // Check that the last character is an allowed trailing label character.
    // Since we already checked that the char is a valid hostname character,
    // we only need to check that it's different from '-'.
    n !== 45
  );
}
function ap({ allowIcannDomains: e = !0, allowPrivateDomains: t = !1, detectIp: n = !0, extractHostname: r = !0, mixedInputs: o = !0, validHosts: i = null, validateHostname: s = !0 }) {
  return {
    allowIcannDomains: e,
    allowPrivateDomains: t,
    detectIp: n,
    extractHostname: r,
    mixedInputs: o,
    validHosts: i,
    validateHostname: s
  };
}
const nC = (
  /*@__INLINE__*/
  ap({})
);
function rC(e) {
  return e === void 0 ? nC : (
    /*@__INLINE__*/
    ap(e)
  );
}
function oC(e, t) {
  return t.length === e.length ? "" : e.slice(0, -t.length - 1);
}
function lp() {
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
function eo(e) {
  e.domain = null, e.domainWithoutSuffix = null, e.hostname = null, e.isIcann = null, e.isIp = null, e.isPrivate = null, e.publicSuffix = null, e.subdomain = null;
}
function lr(e, t, n, r, o) {
  const i = (
    /*@__INLINE__*/
    rC(r)
  );
  return typeof e != "string" || (i.extractHostname ? i.mixedInputs ? o.hostname = Eu(e, Tu(e)) : o.hostname = Eu(e, !1) : o.hostname = e, t === 0 || o.hostname === null) || i.detectIp && (o.isIp = tC(o.hostname), o.isIp) ? o : i.validateHostname && i.extractHostname && !Tu(o.hostname) ? (o.hostname = null, o) : (n(o.hostname, i, o), t === 2 || o.publicSuffix === null || (o.domain = Qj(o.publicSuffix, o.hostname, i), t === 3 || o.domain === null) || (o.subdomain = oC(o.hostname, o.domain), t === 4) || (o.domainWithoutSuffix = Jj(o.domain, o.publicSuffix)), o);
}
function iC(e, t, n) {
  if (!t.allowPrivateDomains && e.length > 3) {
    const r = e.length - 1, o = e.charCodeAt(r), i = e.charCodeAt(r - 1), s = e.charCodeAt(r - 2), l = e.charCodeAt(r - 3);
    if (o === 109 && i === 111 && s === 99 && l === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "com", !0;
    if (o === 103 && i === 114 && s === 111 && l === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "org", !0;
    if (o === 117 && i === 100 && s === 101 && l === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "edu", !0;
    if (o === 118 && i === 111 && s === 103 && l === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "gov", !0;
    if (o === 116 && i === 101 && s === 110 && l === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "net", !0;
    if (o === 101 && i === 100 && s === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "de", !0;
  }
  return !1;
}
const sC = /* @__PURE__ */ function() {
  const e = [1, {}], t = [2, {}], n = [0, { city: e }];
  return [0, { ck: [0, { www: e }], jp: [0, { kawasaki: n, kitakyushu: n, kobe: n, nagoya: n, sapporo: n, sendai: n, yokohama: n }], dev: [0, { hrsn: [0, { psl: [0, { wc: [0, { ignored: t, sub: [0, { ignored: t }] }] }] }] }] }];
}(), aC = /* @__PURE__ */ function() {
  const e = [1, {}], t = [2, {}], n = [1, { com: e, edu: e, gov: e, net: e, org: e }], r = [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e }], o = [0, { "*": t }], i = [2, { s: o }], s = [0, { relay: t }], l = [2, { id: t }], c = [1, { gov: e }], u = [0, { "transfer-webapp": t }], d = [0, { notebook: t, studio: t }], p = [0, { labeling: t, notebook: t, studio: t }], f = [0, { notebook: t }], h = [0, { labeling: t, notebook: t, "notebook-fips": t, studio: t }], m = [0, { notebook: t, "notebook-fips": t, studio: t, "studio-fips": t }], g = [0, { "*": e }], y = [1, { co: t }], v = [0, { objects: t }], w = [2, { nodes: t }], b = [0, { my: o }], k = [0, { s3: t, "s3-accesspoint": t, "s3-website": t }], E = [0, { s3: t, "s3-accesspoint": t }], j = [0, { direct: t }], _ = [0, { "webview-assets": t }], $ = [0, { vfs: t, "webview-assets": t }], D = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": _, cloud9: $ }], O = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: E, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": _, cloud9: $ }], C = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": _, cloud9: $ }], I = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t }], T = [0, { s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-website": t }], A = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: T, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": _, cloud9: $ }], R = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: T, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-deprecated": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": _, cloud9: $ }], H = [0, { s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t }], V = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: H, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t }], L = [0, { auth: t }], ee = [0, { auth: t, "auth-fips": t }], Y = [0, { "auth-fips": t }], se = [0, { apps: t }], we = [0, { paas: t }], ft = [2, { eu: t }], be = [0, { app: t }], Re = [0, { site: t }], J = [1, { com: e, edu: e, net: e, org: e }], G = [0, { j: t }], Z = [0, { dyn: t }], he = [1, { co: e, com: e, edu: e, gov: e, net: e, org: e }], Ze = [0, { p: t }], Il = [0, { user: t }], Dl = [0, { shop: t }], ur = [0, { cdn: t }], Mi = [0, { cust: t, reservd: t }], Pl = [0, { cust: t }], qi = [0, { s3: t }], zl = [1, { biz: e, com: e, edu: e, gov: e, info: e, net: e, org: e }], Fi = [0, { ipfs: t }], no = [1, { framer: t }], Al = [0, { forgot: t }], le = [1, { gs: e }], Rl = [0, { nes: e }], W = [1, { k12: e, cc: e, lib: e }], ro = [1, { cc: e, lib: e }];
  return [0, { ac: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, drr: t, feedback: t, forms: t }], ad: e, ae: [1, { ac: e, co: e, gov: e, mil: e, net: e, org: e, sch: e }], aero: [1, { airline: e, airport: e, "accident-investigation": e, "accident-prevention": e, aerobatic: e, aeroclub: e, aerodrome: e, agents: e, "air-surveillance": e, "air-traffic-control": e, aircraft: e, airtraffic: e, ambulance: e, association: e, author: e, ballooning: e, broker: e, caa: e, cargo: e, catering: e, certification: e, championship: e, charter: e, civilaviation: e, club: e, conference: e, consultant: e, consulting: e, control: e, council: e, crew: e, design: e, dgca: e, educator: e, emergency: e, engine: e, engineer: e, entertainment: e, equipment: e, exchange: e, express: e, federation: e, flight: e, freight: e, fuel: e, gliding: e, government: e, groundhandling: e, group: e, hanggliding: e, homebuilt: e, insurance: e, journal: e, journalist: e, leasing: e, logistics: e, magazine: e, maintenance: e, marketplace: e, media: e, microlight: e, modelling: e, navigation: e, parachuting: e, paragliding: e, "passenger-association": e, pilot: e, press: e, production: e, recreation: e, repbody: e, res: e, research: e, rotorcraft: e, safety: e, scientist: e, services: e, show: e, skydiving: e, software: e, student: e, taxi: e, trader: e, trading: e, trainer: e, union: e, workinggroup: e, works: e }], af: n, ag: [1, { co: e, com: e, net: e, nom: e, org: e, obj: t }], ai: [1, { com: e, net: e, off: e, org: e, uwu: t, framer: t }], al: r, am: [1, { co: e, com: e, commune: e, net: e, org: e, radio: t }], ao: [1, { co: e, ed: e, edu: e, gov: e, gv: e, it: e, og: e, org: e, pb: e }], aq: e, ar: [1, { bet: e, com: e, coop: e, edu: e, gob: e, gov: e, int: e, mil: e, musica: e, mutual: e, net: e, org: e, seg: e, senasa: e, tur: e }], arpa: [1, { e164: e, home: e, "in-addr": e, ip6: e, iris: e, uri: e, urn: e }], as: c, asia: [1, { cloudns: t, daemon: t, dix: t }], at: [1, { ac: [1, { sth: e }], co: e, gv: e, or: e, funkfeuer: [0, { wien: t }], futurecms: [0, { "*": t, ex: o, in: o }], futurehosting: t, futuremailing: t, ortsinfo: [0, { ex: o, kunden: o }], biz: t, info: t, "123webseite": t, priv: t, myspreadshop: t, "12hp": t, "2ix": t, "4lima": t, "lima-city": t }], au: [1, { asn: e, com: [1, { cloudlets: [0, { mel: t }], myspreadshop: t }], edu: [1, { act: e, catholic: e, nsw: [1, { schools: e }], nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }], gov: [1, { qld: e, sa: e, tas: e, vic: e, wa: e }], id: e, net: e, org: e, conf: e, oz: e, act: e, nsw: e, nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }], aw: [1, { com: e }], ax: e, az: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, int: e, mil: e, name: e, net: e, org: e, pp: e, pro: e }], ba: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, rs: t }], bb: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, net: e, org: e, store: e, tv: e }], bd: g, be: [1, { ac: e, cloudns: t, webhosting: t, interhostsolutions: [0, { cloud: t }], kuleuven: [0, { ezproxy: t }], "123website": t, myspreadshop: t, transurl: o }], bf: c, bg: [1, { 0: e, 1: e, 2: e, 3: e, 4: e, 5: e, 6: e, 7: e, 8: e, 9: e, a: e, b: e, c: e, d: e, e, f: e, g: e, h: e, i: e, j: e, k: e, l: e, m: e, n: e, o: e, p: e, q: e, r: e, s: e, t: e, u: e, v: e, w: e, x: e, y: e, z: e, barsy: t }], bh: n, bi: [1, { co: e, com: e, edu: e, or: e, org: e }], biz: [1, { activetrail: t, "cloud-ip": t, cloudns: t, jozi: t, dyndns: t, "for-better": t, "for-more": t, "for-some": t, "for-the": t, selfip: t, webhop: t, orx: t, mmafan: t, myftp: t, "no-ip": t, dscloud: t }], bj: [1, { africa: e, agro: e, architectes: e, assur: e, avocats: e, co: e, com: e, eco: e, econo: e, edu: e, info: e, loisirs: e, money: e, net: e, org: e, ote: e, restaurant: e, resto: e, tourism: e, univ: e }], bm: n, bn: [1, { com: e, edu: e, gov: e, net: e, org: e, co: t }], bo: [1, { com: e, edu: e, gob: e, int: e, mil: e, net: e, org: e, tv: e, web: e, academia: e, agro: e, arte: e, blog: e, bolivia: e, ciencia: e, cooperativa: e, democracia: e, deporte: e, ecologia: e, economia: e, empresa: e, indigena: e, industria: e, info: e, medicina: e, movimiento: e, musica: e, natural: e, nombre: e, noticias: e, patria: e, plurinacional: e, politica: e, profesional: e, pueblo: e, revista: e, salud: e, tecnologia: e, tksat: e, transporte: e, wiki: e }], br: [1, { "9guacu": e, abc: e, adm: e, adv: e, agr: e, aju: e, am: e, anani: e, aparecida: e, app: e, arq: e, art: e, ato: e, b: e, barueri: e, belem: e, bet: e, bhz: e, bib: e, bio: e, blog: e, bmd: e, boavista: e, bsb: e, campinagrande: e, campinas: e, caxias: e, cim: e, cng: e, cnt: e, com: [1, { simplesite: t }], contagem: e, coop: e, coz: e, cri: e, cuiaba: e, curitiba: e, def: e, des: e, det: e, dev: e, ecn: e, eco: e, edu: e, emp: e, enf: e, eng: e, esp: e, etc: e, eti: e, far: e, feira: e, flog: e, floripa: e, fm: e, fnd: e, fortal: e, fot: e, foz: e, fst: e, g12: e, geo: e, ggf: e, goiania: e, gov: [1, { ac: e, al: e, am: e, ap: e, ba: e, ce: e, df: e, es: e, go: e, ma: e, mg: e, ms: e, mt: e, pa: e, pb: e, pe: e, pi: e, pr: e, rj: e, rn: e, ro: e, rr: e, rs: e, sc: e, se: e, sp: e, to: e }], gru: e, imb: e, ind: e, inf: e, jab: e, jampa: e, jdf: e, joinville: e, jor: e, jus: e, leg: [1, { ac: t, al: t, am: t, ap: t, ba: t, ce: t, df: t, es: t, go: t, ma: t, mg: t, ms: t, mt: t, pa: t, pb: t, pe: t, pi: t, pr: t, rj: t, rn: t, ro: t, rr: t, rs: t, sc: t, se: t, sp: t, to: t }], leilao: e, lel: e, log: e, londrina: e, macapa: e, maceio: e, manaus: e, maringa: e, mat: e, med: e, mil: e, morena: e, mp: e, mus: e, natal: e, net: e, niteroi: e, nom: g, not: e, ntr: e, odo: e, ong: e, org: e, osasco: e, palmas: e, poa: e, ppg: e, pro: e, psc: e, psi: e, pvh: e, qsl: e, radio: e, rec: e, recife: e, rep: e, ribeirao: e, rio: e, riobranco: e, riopreto: e, salvador: e, sampa: e, santamaria: e, santoandre: e, saobernardo: e, saogonca: e, seg: e, sjc: e, slg: e, slz: e, sorocaba: e, srv: e, taxi: e, tc: e, tec: e, teo: e, the: e, tmp: e, trd: e, tur: e, tv: e, udi: e, vet: e, vix: e, vlog: e, wiki: e, zlg: e }], bs: [1, { com: e, edu: e, gov: e, net: e, org: e, we: t }], bt: n, bv: e, bw: [1, { ac: e, co: e, gov: e, net: e, org: e }], by: [1, { gov: e, mil: e, com: e, of: e, mediatech: t }], bz: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, za: t, mydns: t, gsj: t }], ca: [1, { ab: e, bc: e, mb: e, nb: e, nf: e, nl: e, ns: e, nt: e, nu: e, on: e, pe: e, qc: e, sk: e, yk: e, gc: e, barsy: t, awdev: o, co: t, "no-ip": t, myspreadshop: t, box: t }], cat: e, cc: [1, { cleverapps: t, cloudns: t, ftpaccess: t, "game-server": t, myphotos: t, scrapping: t, twmail: t, csx: t, fantasyleague: t, spawn: [0, { instances: t }] }], cd: c, cf: e, cg: e, ch: [1, { square7: t, cloudns: t, cloudscale: [0, { cust: t, lpg: v, rma: v }], flow: [0, { ae: [0, { alp1: t }], appengine: t }], "linkyard-cloud": t, gotdns: t, dnsking: t, "123website": t, myspreadshop: t, firenet: [0, { "*": t, svc: o }], "12hp": t, "2ix": t, "4lima": t, "lima-city": t }], ci: [1, { ac: e, "xn--aroport-bya": e, aéroport: e, asso: e, co: e, com: e, ed: e, edu: e, go: e, gouv: e, int: e, net: e, or: e, org: e }], ck: g, cl: [1, { co: e, gob: e, gov: e, mil: e, cloudns: t }], cm: [1, { co: e, com: e, gov: e, net: e }], cn: [1, { ac: e, com: [1, { amazonaws: [0, { "cn-north-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t }], "cn-northwest-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: E, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t }], compute: o, airflow: [0, { "cn-north-1": o, "cn-northwest-1": o }], eb: [0, { "cn-north-1": t, "cn-northwest-1": t }], elb: o }], sagemaker: [0, { "cn-north-1": d, "cn-northwest-1": d }] }], edu: e, gov: e, mil: e, net: e, org: e, "xn--55qx5d": e, 公司: e, "xn--od0alg": e, 網絡: e, "xn--io0a7i": e, 网络: e, ah: e, bj: e, cq: e, fj: e, gd: e, gs: e, gx: e, gz: e, ha: e, hb: e, he: e, hi: e, hk: e, hl: e, hn: e, jl: e, js: e, jx: e, ln: e, mo: e, nm: e, nx: e, qh: e, sc: e, sd: e, sh: [1, { as: t }], sn: e, sx: e, tj: e, tw: e, xj: e, xz: e, yn: e, zj: e, "canva-apps": t, canvasite: b, myqnapcloud: t, quickconnect: j }], co: [1, { com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e, carrd: t, crd: t, otap: o, leadpages: t, lpages: t, mypi: t, xmit: o, firewalledreplit: l, repl: l, supabase: t }], com: [1, { a2hosted: t, cpserver: t, adobeaemcloud: [2, { dev: o }], africa: t, airkitapps: t, "airkitapps-au": t, aivencloud: t, alibabacloudcs: t, kasserver: t, amazonaws: [0, { "af-south-1": D, "ap-east-1": O, "ap-northeast-1": C, "ap-northeast-2": C, "ap-northeast-3": D, "ap-south-1": C, "ap-south-2": I, "ap-southeast-1": C, "ap-southeast-2": C, "ap-southeast-3": I, "ap-southeast-4": I, "ap-southeast-5": [0, { "execute-api": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t }], "ca-central-1": A, "ca-west-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: T, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t }], "eu-central-1": C, "eu-central-2": I, "eu-north-1": O, "eu-south-1": D, "eu-south-2": I, "eu-west-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": _, cloud9: $ }], "eu-west-2": O, "eu-west-3": D, "il-central-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": _, cloud9: [0, { vfs: t }] }], "me-central-1": I, "me-south-1": O, "sa-east-1": D, "us-east-1": [2, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: T, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-deprecated": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": _, cloud9: $ }], "us-east-2": R, "us-gov-east-1": V, "us-gov-west-1": V, "us-west-1": A, "us-west-2": R, compute: o, "compute-1": o, airflow: [0, { "af-south-1": o, "ap-east-1": o, "ap-northeast-1": o, "ap-northeast-2": o, "ap-northeast-3": o, "ap-south-1": o, "ap-south-2": o, "ap-southeast-1": o, "ap-southeast-2": o, "ap-southeast-3": o, "ap-southeast-4": o, "ca-central-1": o, "ca-west-1": o, "eu-central-1": o, "eu-central-2": o, "eu-north-1": o, "eu-south-1": o, "eu-south-2": o, "eu-west-1": o, "eu-west-2": o, "eu-west-3": o, "il-central-1": o, "me-central-1": o, "me-south-1": o, "sa-east-1": o, "us-east-1": o, "us-east-2": o, "us-west-1": o, "us-west-2": o }], s3: t, "s3-1": t, "s3-ap-east-1": t, "s3-ap-northeast-1": t, "s3-ap-northeast-2": t, "s3-ap-northeast-3": t, "s3-ap-south-1": t, "s3-ap-southeast-1": t, "s3-ap-southeast-2": t, "s3-ca-central-1": t, "s3-eu-central-1": t, "s3-eu-north-1": t, "s3-eu-west-1": t, "s3-eu-west-2": t, "s3-eu-west-3": t, "s3-external-1": t, "s3-fips-us-gov-east-1": t, "s3-fips-us-gov-west-1": t, "s3-global": [0, { accesspoint: [0, { mrap: t }] }], "s3-me-south-1": t, "s3-sa-east-1": t, "s3-us-east-2": t, "s3-us-gov-east-1": t, "s3-us-gov-west-1": t, "s3-us-west-1": t, "s3-us-west-2": t, "s3-website-ap-northeast-1": t, "s3-website-ap-southeast-1": t, "s3-website-ap-southeast-2": t, "s3-website-eu-west-1": t, "s3-website-sa-east-1": t, "s3-website-us-east-1": t, "s3-website-us-gov-west-1": t, "s3-website-us-west-1": t, "s3-website-us-west-2": t, elb: o }], amazoncognito: [0, { "af-south-1": L, "ap-east-1": L, "ap-northeast-1": L, "ap-northeast-2": L, "ap-northeast-3": L, "ap-south-1": L, "ap-south-2": L, "ap-southeast-1": L, "ap-southeast-2": L, "ap-southeast-3": L, "ap-southeast-4": L, "ap-southeast-5": L, "ca-central-1": L, "ca-west-1": L, "eu-central-1": L, "eu-central-2": L, "eu-north-1": L, "eu-south-1": L, "eu-south-2": L, "eu-west-1": L, "eu-west-2": L, "eu-west-3": L, "il-central-1": L, "me-central-1": L, "me-south-1": L, "sa-east-1": L, "us-east-1": ee, "us-east-2": ee, "us-gov-east-1": Y, "us-gov-west-1": Y, "us-west-1": ee, "us-west-2": ee }], amplifyapp: t, awsapprunner: o, awsapps: t, elasticbeanstalk: [2, { "af-south-1": t, "ap-east-1": t, "ap-northeast-1": t, "ap-northeast-2": t, "ap-northeast-3": t, "ap-south-1": t, "ap-southeast-1": t, "ap-southeast-2": t, "ap-southeast-3": t, "ca-central-1": t, "eu-central-1": t, "eu-north-1": t, "eu-south-1": t, "eu-west-1": t, "eu-west-2": t, "eu-west-3": t, "il-central-1": t, "me-south-1": t, "sa-east-1": t, "us-east-1": t, "us-east-2": t, "us-gov-east-1": t, "us-gov-west-1": t, "us-west-1": t, "us-west-2": t }], awsglobalaccelerator: t, siiites: t, appspacehosted: t, appspaceusercontent: t, "on-aptible": t, myasustor: t, "balena-devices": t, boutir: t, bplaced: t, cafjs: t, "canva-apps": t, "cdn77-storage": t, br: t, cn: t, de: t, eu: t, jpn: t, mex: t, ru: t, sa: t, uk: t, us: t, za: t, "clever-cloud": [0, { services: o }], dnsabr: t, "ip-ddns": t, jdevcloud: t, wpdevcloud: t, "cf-ipfs": t, "cloudflare-ipfs": t, trycloudflare: t, co: t, devinapps: o, builtwithdark: t, datadetect: [0, { demo: t, instance: t }], dattolocal: t, dattorelay: t, dattoweb: t, mydatto: t, digitaloceanspaces: o, discordsays: t, discordsez: t, drayddns: t, dreamhosters: t, durumis: t, mydrobo: t, blogdns: t, cechire: t, dnsalias: t, dnsdojo: t, doesntexist: t, dontexist: t, doomdns: t, "dyn-o-saur": t, dynalias: t, "dyndns-at-home": t, "dyndns-at-work": t, "dyndns-blog": t, "dyndns-free": t, "dyndns-home": t, "dyndns-ip": t, "dyndns-mail": t, "dyndns-office": t, "dyndns-pics": t, "dyndns-remote": t, "dyndns-server": t, "dyndns-web": t, "dyndns-wiki": t, "dyndns-work": t, "est-a-la-maison": t, "est-a-la-masion": t, "est-le-patron": t, "est-mon-blogueur": t, "from-ak": t, "from-al": t, "from-ar": t, "from-ca": t, "from-ct": t, "from-dc": t, "from-de": t, "from-fl": t, "from-ga": t, "from-hi": t, "from-ia": t, "from-id": t, "from-il": t, "from-in": t, "from-ks": t, "from-ky": t, "from-ma": t, "from-md": t, "from-mi": t, "from-mn": t, "from-mo": t, "from-ms": t, "from-mt": t, "from-nc": t, "from-nd": t, "from-ne": t, "from-nh": t, "from-nj": t, "from-nm": t, "from-nv": t, "from-oh": t, "from-ok": t, "from-or": t, "from-pa": t, "from-pr": t, "from-ri": t, "from-sc": t, "from-sd": t, "from-tn": t, "from-tx": t, "from-ut": t, "from-va": t, "from-vt": t, "from-wa": t, "from-wi": t, "from-wv": t, "from-wy": t, getmyip: t, gotdns: t, "hobby-site": t, homelinux: t, homeunix: t, iamallama: t, "is-a-anarchist": t, "is-a-blogger": t, "is-a-bookkeeper": t, "is-a-bulls-fan": t, "is-a-caterer": t, "is-a-chef": t, "is-a-conservative": t, "is-a-cpa": t, "is-a-cubicle-slave": t, "is-a-democrat": t, "is-a-designer": t, "is-a-doctor": t, "is-a-financialadvisor": t, "is-a-geek": t, "is-a-green": t, "is-a-guru": t, "is-a-hard-worker": t, "is-a-hunter": t, "is-a-landscaper": t, "is-a-lawyer": t, "is-a-liberal": t, "is-a-libertarian": t, "is-a-llama": t, "is-a-musician": t, "is-a-nascarfan": t, "is-a-nurse": t, "is-a-painter": t, "is-a-personaltrainer": t, "is-a-photographer": t, "is-a-player": t, "is-a-republican": t, "is-a-rockstar": t, "is-a-socialist": t, "is-a-student": t, "is-a-teacher": t, "is-a-techie": t, "is-a-therapist": t, "is-an-accountant": t, "is-an-actor": t, "is-an-actress": t, "is-an-anarchist": t, "is-an-artist": t, "is-an-engineer": t, "is-an-entertainer": t, "is-certified": t, "is-gone": t, "is-into-anime": t, "is-into-cars": t, "is-into-cartoons": t, "is-into-games": t, "is-leet": t, "is-not-certified": t, "is-slick": t, "is-uberleet": t, "is-with-theband": t, "isa-geek": t, "isa-hockeynut": t, issmarterthanyou: t, "likes-pie": t, likescandy: t, "neat-url": t, "saves-the-whales": t, selfip: t, "sells-for-less": t, "sells-for-u": t, servebbs: t, "simple-url": t, "space-to-rent": t, "teaches-yoga": t, writesthisblog: t, ddnsfree: t, ddnsgeek: t, giize: t, gleeze: t, kozow: t, loseyourip: t, ooguy: t, theworkpc: t, mytuleap: t, "tuleap-partners": t, encoreapi: t, evennode: [0, { "eu-1": t, "eu-2": t, "eu-3": t, "eu-4": t, "us-1": t, "us-2": t, "us-3": t, "us-4": t }], onfabrica: t, "fastly-edge": t, "fastly-terrarium": t, "fastvps-server": t, mydobiss: t, firebaseapp: t, fldrv: t, forgeblocks: t, framercanvas: t, "freebox-os": t, freeboxos: t, freemyip: t, aliases121: t, gentapps: t, gentlentapis: t, githubusercontent: t, "0emm": o, appspot: [2, { r: o }], blogspot: t, codespot: t, googleapis: t, googlecode: t, pagespeedmobilizer: t, withgoogle: t, withyoutube: t, grayjayleagues: t, hatenablog: t, hatenadiary: t, herokuapp: t, gr: t, smushcdn: t, wphostedmail: t, wpmucdn: t, pixolino: t, "apps-1and1": t, "live-website": t, dopaas: t, "hosted-by-previder": we, hosteur: [0, { "rag-cloud": t, "rag-cloud-ch": t }], "ik-server": [0, { jcloud: t, "jcloud-ver-jpc": t }], jelastic: [0, { demo: t }], massivegrid: we, wafaicloud: [0, { jed: t, ryd: t }], webadorsite: t, joyent: [0, { cns: o }], lpusercontent: t, linode: [0, { members: t, nodebalancer: o }], linodeobjects: o, linodeusercontent: [0, { ip: t }], localtonet: t, lovableproject: t, barsycenter: t, barsyonline: t, modelscape: t, mwcloudnonprod: t, polyspace: t, mazeplay: t, miniserver: t, atmeta: t, fbsbx: se, meteorapp: ft, routingthecloud: t, mydbserver: t, hostedpi: t, "mythic-beasts": [0, { caracal: t, customer: t, fentiger: t, lynx: t, ocelot: t, oncilla: t, onza: t, sphinx: t, vs: t, x: t, yali: t }], nospamproxy: [0, { cloud: [2, { o365: t }] }], "4u": t, nfshost: t, "3utilities": t, blogsyte: t, ciscofreak: t, damnserver: t, ddnsking: t, ditchyourip: t, dnsiskinky: t, dynns: t, geekgalaxy: t, "health-carereform": t, homesecuritymac: t, homesecuritypc: t, myactivedirectory: t, mysecuritycamera: t, myvnc: t, "net-freaks": t, onthewifi: t, point2this: t, quicksytes: t, securitytactics: t, servebeer: t, servecounterstrike: t, serveexchange: t, serveftp: t, servegame: t, servehalflife: t, servehttp: t, servehumour: t, serveirc: t, servemp3: t, servep2p: t, servepics: t, servequake: t, servesarcasm: t, stufftoread: t, unusualperson: t, workisboring: t, myiphost: t, observableusercontent: [0, { static: t }], simplesite: t, orsites: t, operaunite: t, "customer-oci": [0, { "*": t, oci: o, ocp: o, ocs: o }], oraclecloudapps: o, oraclegovcloudapps: o, "authgear-staging": t, authgearapps: t, skygearapp: t, outsystemscloud: t, ownprovider: t, pgfog: t, pagexl: t, gotpantheon: t, paywhirl: o, upsunapp: t, "postman-echo": t, prgmr: [0, { xen: t }], pythonanywhere: ft, qa2: t, "alpha-myqnapcloud": t, "dev-myqnapcloud": t, mycloudnas: t, mynascloud: t, myqnapcloud: t, qualifioapp: t, ladesk: t, qbuser: t, quipelements: o, rackmaze: t, "readthedocs-hosted": t, rhcloud: t, onrender: t, render: be, "subsc-pay": t, "180r": t, dojin: t, sakuratan: t, sakuraweb: t, x0: t, code: [0, { builder: o, "dev-builder": o, "stg-builder": o }], salesforce: [0, { platform: [0, { "code-builder-stg": [0, { test: [0, { "001": o }] }] }] }], logoip: t, scrysec: t, "firewall-gateway": t, myshopblocks: t, myshopify: t, shopitsite: t, "1kapp": t, appchizi: t, applinzi: t, sinaapp: t, vipsinaapp: t, streamlitapp: t, "try-snowplow": t, "playstation-cloud": t, myspreadshop: t, "w-corp-staticblitz": t, "w-credentialless-staticblitz": t, "w-staticblitz": t, "stackhero-network": t, stdlib: [0, { api: t }], strapiapp: [2, { media: t }], "streak-link": t, streaklinks: t, streakusercontent: t, "temp-dns": t, dsmynas: t, familyds: t, mytabit: t, taveusercontent: t, "tb-hosting": Re, reservd: t, thingdustdata: t, "townnews-staging": t, typeform: [0, { pro: t }], hk: t, it: t, "deus-canvas": t, vultrobjects: o, wafflecell: t, hotelwithflight: t, "reserve-online": t, cprapid: t, pleskns: t, remotewd: t, wiardweb: [0, { pages: t }], wixsite: t, wixstudio: t, messwithdns: t, "woltlab-demo": t, wpenginepowered: [2, { js: t }], xnbay: [2, { u2: t, "u2-local": t }], yolasite: t }], coop: e, cr: [1, { ac: e, co: e, ed: e, fi: e, go: e, or: e, sa: e }], cu: [1, { com: e, edu: e, gob: e, inf: e, nat: e, net: e, org: e }], cv: [1, { com: e, edu: e, id: e, int: e, net: e, nome: e, org: e, publ: e }], cw: J, cx: [1, { gov: e, cloudns: t, ath: t, info: t, assessments: t, calculators: t, funnels: t, paynow: t, quizzes: t, researched: t, tests: t }], cy: [1, { ac: e, biz: e, com: [1, { scaleforce: G }], ekloges: e, gov: e, ltd: e, mil: e, net: e, org: e, press: e, pro: e, tm: e }], cz: [1, { contentproxy9: [0, { rsc: t }], realm: t, e4: t, co: t, metacentrum: [0, { cloud: o, custom: t }], muni: [0, { cloud: [0, { flt: t, usr: t }] }] }], de: [1, { bplaced: t, square7: t, com: t, cosidns: Z, dnsupdater: t, "dynamisches-dns": t, "internet-dns": t, "l-o-g-i-n": t, ddnss: [2, { dyn: t, dyndns: t }], "dyn-ip24": t, dyndns1: t, "home-webserver": [2, { dyn: t }], "myhome-server": t, dnshome: t, fuettertdasnetz: t, isteingeek: t, istmein: t, lebtimnetz: t, leitungsen: t, traeumtgerade: t, frusky: o, goip: t, "xn--gnstigbestellen-zvb": t, günstigbestellen: t, "xn--gnstigliefern-wob": t, günstigliefern: t, "hs-heilbronn": [0, { it: [0, { pages: t, "pages-research": t }] }], "dyn-berlin": t, "in-berlin": t, "in-brb": t, "in-butter": t, "in-dsl": t, "in-vpn": t, iservschule: t, "mein-iserv": t, schulplattform: t, schulserver: t, "test-iserv": t, keymachine: t, "git-repos": t, "lcube-server": t, "svn-repos": t, barsy: t, webspaceconfig: t, "123webseite": t, rub: t, "ruhr-uni-bochum": [2, { noc: [0, { io: t }] }], logoip: t, "firewall-gateway": t, "my-gateway": t, "my-router": t, spdns: t, speedpartner: [0, { customer: t }], myspreadshop: t, "taifun-dns": t, "12hp": t, "2ix": t, "4lima": t, "lima-city": t, "dd-dns": t, "dray-dns": t, draydns: t, "dyn-vpn": t, dynvpn: t, "mein-vigor": t, "my-vigor": t, "my-wan": t, "syno-ds": t, "synology-diskstation": t, "synology-ds": t, uberspace: o, "virtual-user": t, virtualuser: t, "community-pro": t, diskussionsbereich: t }], dj: e, dk: [1, { biz: t, co: t, firm: t, reg: t, store: t, "123hjemmeside": t, myspreadshop: t }], dm: he, do: [1, { art: e, com: e, edu: e, gob: e, gov: e, mil: e, net: e, org: e, sld: e, web: e }], dz: [1, { art: e, asso: e, com: e, edu: e, gov: e, net: e, org: e, pol: e, soc: e, tm: e }], ec: [1, { com: e, edu: e, fin: e, gob: e, gov: e, info: e, k12: e, med: e, mil: e, net: e, org: e, pro: e, base: t, official: t }], edu: [1, { rit: [0, { "git-pages": t }] }], ee: [1, { aip: e, com: e, edu: e, fie: e, gov: e, lib: e, med: e, org: e, pri: e, riik: e }], eg: [1, { ac: e, com: e, edu: e, eun: e, gov: e, info: e, me: e, mil: e, name: e, net: e, org: e, sci: e, sport: e, tv: e }], er: g, es: [1, { com: e, edu: e, gob: e, nom: e, org: e, "123miweb": t, myspreadshop: t }], et: [1, { biz: e, com: e, edu: e, gov: e, info: e, name: e, net: e, org: e }], eu: [1, { airkitapps: t, cloudns: t, dogado: [0, { jelastic: t }], barsy: t, spdns: t, transurl: o, diskstation: t }], fi: [1, { aland: e, dy: t, "xn--hkkinen-5wa": t, häkkinen: t, iki: t, cloudplatform: [0, { fi: t }], datacenter: [0, { demo: t, paas: t }], kapsi: t, "123kotisivu": t, myspreadshop: t }], fj: [1, { ac: e, biz: e, com: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }], fk: g, fm: [1, { com: e, edu: e, net: e, org: e, radio: t, user: o }], fo: e, fr: [1, { asso: e, com: e, gouv: e, nom: e, prd: e, tm: e, avoues: e, cci: e, greta: e, "huissier-justice": e, "en-root": t, "fbx-os": t, fbxos: t, "freebox-os": t, freeboxos: t, goupile: t, "123siteweb": t, "on-web": t, "chirurgiens-dentistes-en-france": t, dedibox: t, aeroport: t, avocat: t, chambagri: t, "chirurgiens-dentistes": t, "experts-comptables": t, medecin: t, notaires: t, pharmacien: t, port: t, veterinaire: t, myspreadshop: t, ynh: t }], ga: e, gb: e, gd: [1, { edu: e, gov: e }], ge: [1, { com: e, edu: e, gov: e, net: e, org: e, pvt: e, school: e }], gf: e, gg: [1, { co: e, net: e, org: e, botdash: t, kaas: t, stackit: t, panel: [2, { daemon: t }] }], gh: [1, { com: e, edu: e, gov: e, mil: e, org: e }], gi: [1, { com: e, edu: e, gov: e, ltd: e, mod: e, org: e }], gl: [1, { co: e, com: e, edu: e, net: e, org: e, biz: t }], gm: e, gn: [1, { ac: e, com: e, edu: e, gov: e, net: e, org: e }], gov: e, gp: [1, { asso: e, com: e, edu: e, mobi: e, net: e, org: e }], gq: e, gr: [1, { com: e, edu: e, gov: e, net: e, org: e, barsy: t, simplesite: t }], gs: e, gt: [1, { com: e, edu: e, gob: e, ind: e, mil: e, net: e, org: e }], gu: [1, { com: e, edu: e, gov: e, guam: e, info: e, net: e, org: e, web: e }], gw: e, gy: he, hk: [1, { com: e, edu: e, gov: e, idv: e, net: e, org: e, "xn--ciqpn": e, 个人: e, "xn--gmqw5a": e, 個人: e, "xn--55qx5d": e, 公司: e, "xn--mxtq1m": e, 政府: e, "xn--lcvr32d": e, 敎育: e, "xn--wcvs22d": e, 教育: e, "xn--gmq050i": e, 箇人: e, "xn--uc0atv": e, 組織: e, "xn--uc0ay4a": e, 組织: e, "xn--od0alg": e, 網絡: e, "xn--zf0avx": e, 網络: e, "xn--mk0axi": e, 组織: e, "xn--tn0ag": e, 组织: e, "xn--od0aq3b": e, 网絡: e, "xn--io0a7i": e, 网络: e, inc: t, ltd: t }], hm: e, hn: [1, { com: e, edu: e, gob: e, mil: e, net: e, org: e }], hr: [1, { com: e, from: e, iz: e, name: e, brendly: Dl }], ht: [1, { adult: e, art: e, asso: e, com: e, coop: e, edu: e, firm: e, gouv: e, info: e, med: e, net: e, org: e, perso: e, pol: e, pro: e, rel: e, shop: e, rt: t }], hu: [1, { 2e3: e, agrar: e, bolt: e, casino: e, city: e, co: e, erotica: e, erotika: e, film: e, forum: e, games: e, hotel: e, info: e, ingatlan: e, jogasz: e, konyvelo: e, lakas: e, media: e, news: e, org: e, priv: e, reklam: e, sex: e, shop: e, sport: e, suli: e, szex: e, tm: e, tozsde: e, utazas: e, video: e }], id: [1, { ac: e, biz: e, co: e, desa: e, go: e, mil: e, my: e, net: e, or: e, ponpes: e, sch: e, web: e, zone: t }], ie: [1, { gov: e, myspreadshop: t }], il: [1, { ac: e, co: [1, { ravpage: t, mytabit: t, tabitorder: t }], gov: e, idf: e, k12: e, muni: e, net: e, org: e }], "xn--4dbrk0ce": [1, { "xn--4dbgdty6c": e, "xn--5dbhl8d": e, "xn--8dbq2a": e, "xn--hebda8b": e }], ישראל: [1, { אקדמיה: e, ישוב: e, צהל: e, ממשל: e }], im: [1, { ac: e, co: [1, { ltd: e, plc: e }], com: e, net: e, org: e, tt: e, tv: e }], in: [1, { "5g": e, "6g": e, ac: e, ai: e, am: e, bihar: e, biz: e, business: e, ca: e, cn: e, co: e, com: e, coop: e, cs: e, delhi: e, dr: e, edu: e, er: e, firm: e, gen: e, gov: e, gujarat: e, ind: e, info: e, int: e, internet: e, io: e, me: e, mil: e, net: e, nic: e, org: e, pg: e, post: e, pro: e, res: e, travel: e, tv: e, uk: e, up: e, us: e, cloudns: t, barsy: t, web: t, supabase: t }], info: [1, { cloudns: t, "dynamic-dns": t, "barrel-of-knowledge": t, "barrell-of-knowledge": t, dyndns: t, "for-our": t, "groks-the": t, "groks-this": t, "here-for-more": t, knowsitall: t, selfip: t, webhop: t, barsy: t, mayfirst: t, mittwald: t, mittwaldserver: t, typo3server: t, dvrcam: t, ilovecollege: t, "no-ip": t, forumz: t, nsupdate: t, dnsupdate: t, "v-info": t }], int: [1, { eu: e }], io: [1, { 2038: t, co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e, "on-acorn": o, myaddr: t, apigee: t, "b-data": t, beagleboard: t, bitbucket: t, bluebite: t, boxfuse: t, brave: i, browsersafetymark: t, bubble: ur, bubbleapps: t, bigv: [0, { uk0: t }], cleverapps: t, cloudbeesusercontent: t, dappnode: [0, { dyndns: t }], darklang: t, definima: t, dedyn: t, "fh-muenster": t, shw: t, forgerock: [0, { id: t }], github: t, gitlab: t, lolipop: t, "hasura-app": t, hostyhosting: t, hypernode: t, moonscale: o, beebyte: we, beebyteapp: [0, { sekd1: t }], jele: t, webthings: t, loginline: t, barsy: t, azurecontainer: o, ngrok: [2, { ap: t, au: t, eu: t, in: t, jp: t, sa: t, us: t }], nodeart: [0, { stage: t }], pantheonsite: t, pstmn: [2, { mock: t }], protonet: t, qcx: [2, { sys: o }], qoto: t, vaporcloud: t, myrdbx: t, "rb-hosting": Re, "on-k3s": o, "on-rio": o, readthedocs: t, resindevice: t, resinstaging: [0, { devices: t }], hzc: t, sandcats: t, scrypted: [0, { client: t }], "mo-siemens": t, lair: se, stolos: o, musician: t, utwente: t, edugit: t, telebit: t, thingdust: [0, { dev: Mi, disrec: Mi, prod: Pl, testing: Mi }], tickets: t, webflow: t, webflowtest: t, editorx: t, wixstudio: t, basicserver: t, virtualserver: t }], iq: r, ir: [1, { ac: e, co: e, gov: e, id: e, net: e, org: e, sch: e, "xn--mgba3a4f16a": e, ایران: e, "xn--mgba3a4fra": e, ايران: e, arvanedge: t }], is: e, it: [1, { edu: e, gov: e, abr: e, abruzzo: e, "aosta-valley": e, aostavalley: e, bas: e, basilicata: e, cal: e, calabria: e, cam: e, campania: e, "emilia-romagna": e, emiliaromagna: e, emr: e, "friuli-v-giulia": e, "friuli-ve-giulia": e, "friuli-vegiulia": e, "friuli-venezia-giulia": e, "friuli-veneziagiulia": e, "friuli-vgiulia": e, "friuliv-giulia": e, "friulive-giulia": e, friulivegiulia: e, "friulivenezia-giulia": e, friuliveneziagiulia: e, friulivgiulia: e, fvg: e, laz: e, lazio: e, lig: e, liguria: e, lom: e, lombardia: e, lombardy: e, lucania: e, mar: e, marche: e, mol: e, molise: e, piedmont: e, piemonte: e, pmn: e, pug: e, puglia: e, sar: e, sardegna: e, sardinia: e, sic: e, sicilia: e, sicily: e, taa: e, tos: e, toscana: e, "trentin-sud-tirol": e, "xn--trentin-sd-tirol-rzb": e, "trentin-süd-tirol": e, "trentin-sudtirol": e, "xn--trentin-sdtirol-7vb": e, "trentin-südtirol": e, "trentin-sued-tirol": e, "trentin-suedtirol": e, trentino: e, "trentino-a-adige": e, "trentino-aadige": e, "trentino-alto-adige": e, "trentino-altoadige": e, "trentino-s-tirol": e, "trentino-stirol": e, "trentino-sud-tirol": e, "xn--trentino-sd-tirol-c3b": e, "trentino-süd-tirol": e, "trentino-sudtirol": e, "xn--trentino-sdtirol-szb": e, "trentino-südtirol": e, "trentino-sued-tirol": e, "trentino-suedtirol": e, "trentinoa-adige": e, trentinoaadige: e, "trentinoalto-adige": e, trentinoaltoadige: e, "trentinos-tirol": e, trentinostirol: e, "trentinosud-tirol": e, "xn--trentinosd-tirol-rzb": e, "trentinosüd-tirol": e, trentinosudtirol: e, "xn--trentinosdtirol-7vb": e, trentinosüdtirol: e, "trentinosued-tirol": e, trentinosuedtirol: e, "trentinsud-tirol": e, "xn--trentinsd-tirol-6vb": e, "trentinsüd-tirol": e, trentinsudtirol: e, "xn--trentinsdtirol-nsb": e, trentinsüdtirol: e, "trentinsued-tirol": e, trentinsuedtirol: e, tuscany: e, umb: e, umbria: e, "val-d-aosta": e, "val-daosta": e, "vald-aosta": e, valdaosta: e, "valle-aosta": e, "valle-d-aosta": e, "valle-daosta": e, valleaosta: e, "valled-aosta": e, valledaosta: e, "vallee-aoste": e, "xn--valle-aoste-ebb": e, "vallée-aoste": e, "vallee-d-aoste": e, "xn--valle-d-aoste-ehb": e, "vallée-d-aoste": e, valleeaoste: e, "xn--valleaoste-e7a": e, valléeaoste: e, valleedaoste: e, "xn--valledaoste-ebb": e, valléedaoste: e, vao: e, vda: e, ven: e, veneto: e, ag: e, agrigento: e, al: e, alessandria: e, "alto-adige": e, altoadige: e, an: e, ancona: e, "andria-barletta-trani": e, "andria-trani-barletta": e, andriabarlettatrani: e, andriatranibarletta: e, ao: e, aosta: e, aoste: e, ap: e, aq: e, aquila: e, ar: e, arezzo: e, "ascoli-piceno": e, ascolipiceno: e, asti: e, at: e, av: e, avellino: e, ba: e, balsan: e, "balsan-sudtirol": e, "xn--balsan-sdtirol-nsb": e, "balsan-südtirol": e, "balsan-suedtirol": e, bari: e, "barletta-trani-andria": e, barlettatraniandria: e, belluno: e, benevento: e, bergamo: e, bg: e, bi: e, biella: e, bl: e, bn: e, bo: e, bologna: e, bolzano: e, "bolzano-altoadige": e, bozen: e, "bozen-sudtirol": e, "xn--bozen-sdtirol-2ob": e, "bozen-südtirol": e, "bozen-suedtirol": e, br: e, brescia: e, brindisi: e, bs: e, bt: e, bulsan: e, "bulsan-sudtirol": e, "xn--bulsan-sdtirol-nsb": e, "bulsan-südtirol": e, "bulsan-suedtirol": e, bz: e, ca: e, cagliari: e, caltanissetta: e, "campidano-medio": e, campidanomedio: e, campobasso: e, "carbonia-iglesias": e, carboniaiglesias: e, "carrara-massa": e, carraramassa: e, caserta: e, catania: e, catanzaro: e, cb: e, ce: e, "cesena-forli": e, "xn--cesena-forl-mcb": e, "cesena-forlì": e, cesenaforli: e, "xn--cesenaforl-i8a": e, cesenaforlì: e, ch: e, chieti: e, ci: e, cl: e, cn: e, co: e, como: e, cosenza: e, cr: e, cremona: e, crotone: e, cs: e, ct: e, cuneo: e, cz: e, "dell-ogliastra": e, dellogliastra: e, en: e, enna: e, fc: e, fe: e, fermo: e, ferrara: e, fg: e, fi: e, firenze: e, florence: e, fm: e, foggia: e, "forli-cesena": e, "xn--forl-cesena-fcb": e, "forlì-cesena": e, forlicesena: e, "xn--forlcesena-c8a": e, forlìcesena: e, fr: e, frosinone: e, ge: e, genoa: e, genova: e, go: e, gorizia: e, gr: e, grosseto: e, "iglesias-carbonia": e, iglesiascarbonia: e, im: e, imperia: e, is: e, isernia: e, kr: e, "la-spezia": e, laquila: e, laspezia: e, latina: e, lc: e, le: e, lecce: e, lecco: e, li: e, livorno: e, lo: e, lodi: e, lt: e, lu: e, lucca: e, macerata: e, mantova: e, "massa-carrara": e, massacarrara: e, matera: e, mb: e, mc: e, me: e, "medio-campidano": e, mediocampidano: e, messina: e, mi: e, milan: e, milano: e, mn: e, mo: e, modena: e, monza: e, "monza-brianza": e, "monza-e-della-brianza": e, monzabrianza: e, monzaebrianza: e, monzaedellabrianza: e, ms: e, mt: e, na: e, naples: e, napoli: e, no: e, novara: e, nu: e, nuoro: e, og: e, ogliastra: e, "olbia-tempio": e, olbiatempio: e, or: e, oristano: e, ot: e, pa: e, padova: e, padua: e, palermo: e, parma: e, pavia: e, pc: e, pd: e, pe: e, perugia: e, "pesaro-urbino": e, pesarourbino: e, pescara: e, pg: e, pi: e, piacenza: e, pisa: e, pistoia: e, pn: e, po: e, pordenone: e, potenza: e, pr: e, prato: e, pt: e, pu: e, pv: e, pz: e, ra: e, ragusa: e, ravenna: e, rc: e, re: e, "reggio-calabria": e, "reggio-emilia": e, reggiocalabria: e, reggioemilia: e, rg: e, ri: e, rieti: e, rimini: e, rm: e, rn: e, ro: e, roma: e, rome: e, rovigo: e, sa: e, salerno: e, sassari: e, savona: e, si: e, siena: e, siracusa: e, so: e, sondrio: e, sp: e, sr: e, ss: e, "xn--sdtirol-n2a": e, südtirol: e, suedtirol: e, sv: e, ta: e, taranto: e, te: e, "tempio-olbia": e, tempioolbia: e, teramo: e, terni: e, tn: e, to: e, torino: e, tp: e, tr: e, "trani-andria-barletta": e, "trani-barletta-andria": e, traniandriabarletta: e, tranibarlettaandria: e, trapani: e, trento: e, treviso: e, trieste: e, ts: e, turin: e, tv: e, ud: e, udine: e, "urbino-pesaro": e, urbinopesaro: e, va: e, varese: e, vb: e, vc: e, ve: e, venezia: e, venice: e, verbania: e, vercelli: e, verona: e, vi: e, "vibo-valentia": e, vibovalentia: e, vicenza: e, viterbo: e, vr: e, vs: e, vt: e, vv: e, "12chars": t, ibxos: t, iliadboxos: t, neen: [0, { jc: t }], "123homepage": t, "16-b": t, "32-b": t, "64-b": t, myspreadshop: t, syncloud: t }], je: [1, { co: e, net: e, org: e, of: t }], jm: g, jo: [1, { agri: e, ai: e, com: e, edu: e, eng: e, fm: e, gov: e, mil: e, net: e, org: e, per: e, phd: e, sch: e, tv: e }], jobs: e, jp: [1, { ac: e, ad: e, co: e, ed: e, go: e, gr: e, lg: e, ne: [1, { aseinet: Il, gehirn: t, ivory: t, "mail-box": t, mints: t, mokuren: t, opal: t, sakura: t, sumomo: t, topaz: t }], or: e, aichi: [1, { aisai: e, ama: e, anjo: e, asuke: e, chiryu: e, chita: e, fuso: e, gamagori: e, handa: e, hazu: e, hekinan: e, higashiura: e, ichinomiya: e, inazawa: e, inuyama: e, isshiki: e, iwakura: e, kanie: e, kariya: e, kasugai: e, kira: e, kiyosu: e, komaki: e, konan: e, kota: e, mihama: e, miyoshi: e, nishio: e, nisshin: e, obu: e, oguchi: e, oharu: e, okazaki: e, owariasahi: e, seto: e, shikatsu: e, shinshiro: e, shitara: e, tahara: e, takahama: e, tobishima: e, toei: e, togo: e, tokai: e, tokoname: e, toyoake: e, toyohashi: e, toyokawa: e, toyone: e, toyota: e, tsushima: e, yatomi: e }], akita: [1, { akita: e, daisen: e, fujisato: e, gojome: e, hachirogata: e, happou: e, higashinaruse: e, honjo: e, honjyo: e, ikawa: e, kamikoani: e, kamioka: e, katagami: e, kazuno: e, kitaakita: e, kosaka: e, kyowa: e, misato: e, mitane: e, moriyoshi: e, nikaho: e, noshiro: e, odate: e, oga: e, ogata: e, semboku: e, yokote: e, yurihonjo: e }], aomori: [1, { aomori: e, gonohe: e, hachinohe: e, hashikami: e, hiranai: e, hirosaki: e, itayanagi: e, kuroishi: e, misawa: e, mutsu: e, nakadomari: e, noheji: e, oirase: e, owani: e, rokunohe: e, sannohe: e, shichinohe: e, shingo: e, takko: e, towada: e, tsugaru: e, tsuruta: e }], chiba: [1, { abiko: e, asahi: e, chonan: e, chosei: e, choshi: e, chuo: e, funabashi: e, futtsu: e, hanamigawa: e, ichihara: e, ichikawa: e, ichinomiya: e, inzai: e, isumi: e, kamagaya: e, kamogawa: e, kashiwa: e, katori: e, katsuura: e, kimitsu: e, kisarazu: e, kozaki: e, kujukuri: e, kyonan: e, matsudo: e, midori: e, mihama: e, minamiboso: e, mobara: e, mutsuzawa: e, nagara: e, nagareyama: e, narashino: e, narita: e, noda: e, oamishirasato: e, omigawa: e, onjuku: e, otaki: e, sakae: e, sakura: e, shimofusa: e, shirako: e, shiroi: e, shisui: e, sodegaura: e, sosa: e, tako: e, tateyama: e, togane: e, tohnosho: e, tomisato: e, urayasu: e, yachimata: e, yachiyo: e, yokaichiba: e, yokoshibahikari: e, yotsukaido: e }], ehime: [1, { ainan: e, honai: e, ikata: e, imabari: e, iyo: e, kamijima: e, kihoku: e, kumakogen: e, masaki: e, matsuno: e, matsuyama: e, namikata: e, niihama: e, ozu: e, saijo: e, seiyo: e, shikokuchuo: e, tobe: e, toon: e, uchiko: e, uwajima: e, yawatahama: e }], fukui: [1, { echizen: e, eiheiji: e, fukui: e, ikeda: e, katsuyama: e, mihama: e, minamiechizen: e, obama: e, ohi: e, ono: e, sabae: e, sakai: e, takahama: e, tsuruga: e, wakasa: e }], fukuoka: [1, { ashiya: e, buzen: e, chikugo: e, chikuho: e, chikujo: e, chikushino: e, chikuzen: e, chuo: e, dazaifu: e, fukuchi: e, hakata: e, higashi: e, hirokawa: e, hisayama: e, iizuka: e, inatsuki: e, kaho: e, kasuga: e, kasuya: e, kawara: e, keisen: e, koga: e, kurate: e, kurogi: e, kurume: e, minami: e, miyako: e, miyama: e, miyawaka: e, mizumaki: e, munakata: e, nakagawa: e, nakama: e, nishi: e, nogata: e, ogori: e, okagaki: e, okawa: e, oki: e, omuta: e, onga: e, onojo: e, oto: e, saigawa: e, sasaguri: e, shingu: e, shinyoshitomi: e, shonai: e, soeda: e, sue: e, tachiarai: e, tagawa: e, takata: e, toho: e, toyotsu: e, tsuiki: e, ukiha: e, umi: e, usui: e, yamada: e, yame: e, yanagawa: e, yukuhashi: e }], fukushima: [1, { aizubange: e, aizumisato: e, aizuwakamatsu: e, asakawa: e, bandai: e, date: e, fukushima: e, furudono: e, futaba: e, hanawa: e, higashi: e, hirata: e, hirono: e, iitate: e, inawashiro: e, ishikawa: e, iwaki: e, izumizaki: e, kagamiishi: e, kaneyama: e, kawamata: e, kitakata: e, kitashiobara: e, koori: e, koriyama: e, kunimi: e, miharu: e, mishima: e, namie: e, nango: e, nishiaizu: e, nishigo: e, okuma: e, omotego: e, ono: e, otama: e, samegawa: e, shimogo: e, shirakawa: e, showa: e, soma: e, sukagawa: e, taishin: e, tamakawa: e, tanagura: e, tenei: e, yabuki: e, yamato: e, yamatsuri: e, yanaizu: e, yugawa: e }], gifu: [1, { anpachi: e, ena: e, gifu: e, ginan: e, godo: e, gujo: e, hashima: e, hichiso: e, hida: e, higashishirakawa: e, ibigawa: e, ikeda: e, kakamigahara: e, kani: e, kasahara: e, kasamatsu: e, kawaue: e, kitagata: e, mino: e, minokamo: e, mitake: e, mizunami: e, motosu: e, nakatsugawa: e, ogaki: e, sakahogi: e, seki: e, sekigahara: e, shirakawa: e, tajimi: e, takayama: e, tarui: e, toki: e, tomika: e, wanouchi: e, yamagata: e, yaotsu: e, yoro: e }], gunma: [1, { annaka: e, chiyoda: e, fujioka: e, higashiagatsuma: e, isesaki: e, itakura: e, kanna: e, kanra: e, katashina: e, kawaba: e, kiryu: e, kusatsu: e, maebashi: e, meiwa: e, midori: e, minakami: e, naganohara: e, nakanojo: e, nanmoku: e, numata: e, oizumi: e, ora: e, ota: e, shibukawa: e, shimonita: e, shinto: e, showa: e, takasaki: e, takayama: e, tamamura: e, tatebayashi: e, tomioka: e, tsukiyono: e, tsumagoi: e, ueno: e, yoshioka: e }], hiroshima: [1, { asaminami: e, daiwa: e, etajima: e, fuchu: e, fukuyama: e, hatsukaichi: e, higashihiroshima: e, hongo: e, jinsekikogen: e, kaita: e, kui: e, kumano: e, kure: e, mihara: e, miyoshi: e, naka: e, onomichi: e, osakikamijima: e, otake: e, saka: e, sera: e, seranishi: e, shinichi: e, shobara: e, takehara: e }], hokkaido: [1, { abashiri: e, abira: e, aibetsu: e, akabira: e, akkeshi: e, asahikawa: e, ashibetsu: e, ashoro: e, assabu: e, atsuma: e, bibai: e, biei: e, bifuka: e, bihoro: e, biratori: e, chippubetsu: e, chitose: e, date: e, ebetsu: e, embetsu: e, eniwa: e, erimo: e, esan: e, esashi: e, fukagawa: e, fukushima: e, furano: e, furubira: e, haboro: e, hakodate: e, hamatonbetsu: e, hidaka: e, higashikagura: e, higashikawa: e, hiroo: e, hokuryu: e, hokuto: e, honbetsu: e, horokanai: e, horonobe: e, ikeda: e, imakane: e, ishikari: e, iwamizawa: e, iwanai: e, kamifurano: e, kamikawa: e, kamishihoro: e, kamisunagawa: e, kamoenai: e, kayabe: e, kembuchi: e, kikonai: e, kimobetsu: e, kitahiroshima: e, kitami: e, kiyosato: e, koshimizu: e, kunneppu: e, kuriyama: e, kuromatsunai: e, kushiro: e, kutchan: e, kyowa: e, mashike: e, matsumae: e, mikasa: e, minamifurano: e, mombetsu: e, moseushi: e, mukawa: e, muroran: e, naie: e, nakagawa: e, nakasatsunai: e, nakatombetsu: e, nanae: e, nanporo: e, nayoro: e, nemuro: e, niikappu: e, niki: e, nishiokoppe: e, noboribetsu: e, numata: e, obihiro: e, obira: e, oketo: e, okoppe: e, otaru: e, otobe: e, otofuke: e, otoineppu: e, oumu: e, ozora: e, pippu: e, rankoshi: e, rebun: e, rikubetsu: e, rishiri: e, rishirifuji: e, saroma: e, sarufutsu: e, shakotan: e, shari: e, shibecha: e, shibetsu: e, shikabe: e, shikaoi: e, shimamaki: e, shimizu: e, shimokawa: e, shinshinotsu: e, shintoku: e, shiranuka: e, shiraoi: e, shiriuchi: e, sobetsu: e, sunagawa: e, taiki: e, takasu: e, takikawa: e, takinoue: e, teshikaga: e, tobetsu: e, tohma: e, tomakomai: e, tomari: e, toya: e, toyako: e, toyotomi: e, toyoura: e, tsubetsu: e, tsukigata: e, urakawa: e, urausu: e, uryu: e, utashinai: e, wakkanai: e, wassamu: e, yakumo: e, yoichi: e }], hyogo: [1, { aioi: e, akashi: e, ako: e, amagasaki: e, aogaki: e, asago: e, ashiya: e, awaji: e, fukusaki: e, goshiki: e, harima: e, himeji: e, ichikawa: e, inagawa: e, itami: e, kakogawa: e, kamigori: e, kamikawa: e, kasai: e, kasuga: e, kawanishi: e, miki: e, minamiawaji: e, nishinomiya: e, nishiwaki: e, ono: e, sanda: e, sannan: e, sasayama: e, sayo: e, shingu: e, shinonsen: e, shiso: e, sumoto: e, taishi: e, taka: e, takarazuka: e, takasago: e, takino: e, tamba: e, tatsuno: e, toyooka: e, yabu: e, yashiro: e, yoka: e, yokawa: e }], ibaraki: [1, { ami: e, asahi: e, bando: e, chikusei: e, daigo: e, fujishiro: e, hitachi: e, hitachinaka: e, hitachiomiya: e, hitachiota: e, ibaraki: e, ina: e, inashiki: e, itako: e, iwama: e, joso: e, kamisu: e, kasama: e, kashima: e, kasumigaura: e, koga: e, miho: e, mito: e, moriya: e, naka: e, namegata: e, oarai: e, ogawa: e, omitama: e, ryugasaki: e, sakai: e, sakuragawa: e, shimodate: e, shimotsuma: e, shirosato: e, sowa: e, suifu: e, takahagi: e, tamatsukuri: e, tokai: e, tomobe: e, tone: e, toride: e, tsuchiura: e, tsukuba: e, uchihara: e, ushiku: e, yachiyo: e, yamagata: e, yawara: e, yuki: e }], ishikawa: [1, { anamizu: e, hakui: e, hakusan: e, kaga: e, kahoku: e, kanazawa: e, kawakita: e, komatsu: e, nakanoto: e, nanao: e, nomi: e, nonoichi: e, noto: e, shika: e, suzu: e, tsubata: e, tsurugi: e, uchinada: e, wajima: e }], iwate: [1, { fudai: e, fujisawa: e, hanamaki: e, hiraizumi: e, hirono: e, ichinohe: e, ichinoseki: e, iwaizumi: e, iwate: e, joboji: e, kamaishi: e, kanegasaki: e, karumai: e, kawai: e, kitakami: e, kuji: e, kunohe: e, kuzumaki: e, miyako: e, mizusawa: e, morioka: e, ninohe: e, noda: e, ofunato: e, oshu: e, otsuchi: e, rikuzentakata: e, shiwa: e, shizukuishi: e, sumita: e, tanohata: e, tono: e, yahaba: e, yamada: e }], kagawa: [1, { ayagawa: e, higashikagawa: e, kanonji: e, kotohira: e, manno: e, marugame: e, mitoyo: e, naoshima: e, sanuki: e, tadotsu: e, takamatsu: e, tonosho: e, uchinomi: e, utazu: e, zentsuji: e }], kagoshima: [1, { akune: e, amami: e, hioki: e, isa: e, isen: e, izumi: e, kagoshima: e, kanoya: e, kawanabe: e, kinko: e, kouyama: e, makurazaki: e, matsumoto: e, minamitane: e, nakatane: e, nishinoomote: e, satsumasendai: e, soo: e, tarumizu: e, yusui: e }], kanagawa: [1, { aikawa: e, atsugi: e, ayase: e, chigasaki: e, ebina: e, fujisawa: e, hadano: e, hakone: e, hiratsuka: e, isehara: e, kaisei: e, kamakura: e, kiyokawa: e, matsuda: e, minamiashigara: e, miura: e, nakai: e, ninomiya: e, odawara: e, oi: e, oiso: e, sagamihara: e, samukawa: e, tsukui: e, yamakita: e, yamato: e, yokosuka: e, yugawara: e, zama: e, zushi: e }], kochi: [1, { aki: e, geisei: e, hidaka: e, higashitsuno: e, ino: e, kagami: e, kami: e, kitagawa: e, kochi: e, mihara: e, motoyama: e, muroto: e, nahari: e, nakamura: e, nankoku: e, nishitosa: e, niyodogawa: e, ochi: e, okawa: e, otoyo: e, otsuki: e, sakawa: e, sukumo: e, susaki: e, tosa: e, tosashimizu: e, toyo: e, tsuno: e, umaji: e, yasuda: e, yusuhara: e }], kumamoto: [1, { amakusa: e, arao: e, aso: e, choyo: e, gyokuto: e, kamiamakusa: e, kikuchi: e, kumamoto: e, mashiki: e, mifune: e, minamata: e, minamioguni: e, nagasu: e, nishihara: e, oguni: e, ozu: e, sumoto: e, takamori: e, uki: e, uto: e, yamaga: e, yamato: e, yatsushiro: e }], kyoto: [1, { ayabe: e, fukuchiyama: e, higashiyama: e, ide: e, ine: e, joyo: e, kameoka: e, kamo: e, kita: e, kizu: e, kumiyama: e, kyotamba: e, kyotanabe: e, kyotango: e, maizuru: e, minami: e, minamiyamashiro: e, miyazu: e, muko: e, nagaokakyo: e, nakagyo: e, nantan: e, oyamazaki: e, sakyo: e, seika: e, tanabe: e, uji: e, ujitawara: e, wazuka: e, yamashina: e, yawata: e }], mie: [1, { asahi: e, inabe: e, ise: e, kameyama: e, kawagoe: e, kiho: e, kisosaki: e, kiwa: e, komono: e, kumano: e, kuwana: e, matsusaka: e, meiwa: e, mihama: e, minamiise: e, misugi: e, miyama: e, nabari: e, shima: e, suzuka: e, tado: e, taiki: e, taki: e, tamaki: e, toba: e, tsu: e, udono: e, ureshino: e, watarai: e, yokkaichi: e }], miyagi: [1, { furukawa: e, higashimatsushima: e, ishinomaki: e, iwanuma: e, kakuda: e, kami: e, kawasaki: e, marumori: e, matsushima: e, minamisanriku: e, misato: e, murata: e, natori: e, ogawara: e, ohira: e, onagawa: e, osaki: e, rifu: e, semine: e, shibata: e, shichikashuku: e, shikama: e, shiogama: e, shiroishi: e, tagajo: e, taiwa: e, tome: e, tomiya: e, wakuya: e, watari: e, yamamoto: e, zao: e }], miyazaki: [1, { aya: e, ebino: e, gokase: e, hyuga: e, kadogawa: e, kawaminami: e, kijo: e, kitagawa: e, kitakata: e, kitaura: e, kobayashi: e, kunitomi: e, kushima: e, mimata: e, miyakonojo: e, miyazaki: e, morotsuka: e, nichinan: e, nishimera: e, nobeoka: e, saito: e, shiiba: e, shintomi: e, takaharu: e, takanabe: e, takazaki: e, tsuno: e }], nagano: [1, { achi: e, agematsu: e, anan: e, aoki: e, asahi: e, azumino: e, chikuhoku: e, chikuma: e, chino: e, fujimi: e, hakuba: e, hara: e, hiraya: e, iida: e, iijima: e, iiyama: e, iizuna: e, ikeda: e, ikusaka: e, ina: e, karuizawa: e, kawakami: e, kiso: e, kisofukushima: e, kitaaiki: e, komagane: e, komoro: e, matsukawa: e, matsumoto: e, miasa: e, minamiaiki: e, minamimaki: e, minamiminowa: e, minowa: e, miyada: e, miyota: e, mochizuki: e, nagano: e, nagawa: e, nagiso: e, nakagawa: e, nakano: e, nozawaonsen: e, obuse: e, ogawa: e, okaya: e, omachi: e, omi: e, ookuwa: e, ooshika: e, otaki: e, otari: e, sakae: e, sakaki: e, saku: e, sakuho: e, shimosuwa: e, shinanomachi: e, shiojiri: e, suwa: e, suzaka: e, takagi: e, takamori: e, takayama: e, tateshina: e, tatsuno: e, togakushi: e, togura: e, tomi: e, ueda: e, wada: e, yamagata: e, yamanouchi: e, yasaka: e, yasuoka: e }], nagasaki: [1, { chijiwa: e, futsu: e, goto: e, hasami: e, hirado: e, iki: e, isahaya: e, kawatana: e, kuchinotsu: e, matsuura: e, nagasaki: e, obama: e, omura: e, oseto: e, saikai: e, sasebo: e, seihi: e, shimabara: e, shinkamigoto: e, togitsu: e, tsushima: e, unzen: e }], nara: [1, { ando: e, gose: e, heguri: e, higashiyoshino: e, ikaruga: e, ikoma: e, kamikitayama: e, kanmaki: e, kashiba: e, kashihara: e, katsuragi: e, kawai: e, kawakami: e, kawanishi: e, koryo: e, kurotaki: e, mitsue: e, miyake: e, nara: e, nosegawa: e, oji: e, ouda: e, oyodo: e, sakurai: e, sango: e, shimoichi: e, shimokitayama: e, shinjo: e, soni: e, takatori: e, tawaramoto: e, tenkawa: e, tenri: e, uda: e, yamatokoriyama: e, yamatotakada: e, yamazoe: e, yoshino: e }], niigata: [1, { aga: e, agano: e, gosen: e, itoigawa: e, izumozaki: e, joetsu: e, kamo: e, kariwa: e, kashiwazaki: e, minamiuonuma: e, mitsuke: e, muika: e, murakami: e, myoko: e, nagaoka: e, niigata: e, ojiya: e, omi: e, sado: e, sanjo: e, seiro: e, seirou: e, sekikawa: e, shibata: e, tagami: e, tainai: e, tochio: e, tokamachi: e, tsubame: e, tsunan: e, uonuma: e, yahiko: e, yoita: e, yuzawa: e }], oita: [1, { beppu: e, bungoono: e, bungotakada: e, hasama: e, hiji: e, himeshima: e, hita: e, kamitsue: e, kokonoe: e, kuju: e, kunisaki: e, kusu: e, oita: e, saiki: e, taketa: e, tsukumi: e, usa: e, usuki: e, yufu: e }], okayama: [1, { akaiwa: e, asakuchi: e, bizen: e, hayashima: e, ibara: e, kagamino: e, kasaoka: e, kibichuo: e, kumenan: e, kurashiki: e, maniwa: e, misaki: e, nagi: e, niimi: e, nishiawakura: e, okayama: e, satosho: e, setouchi: e, shinjo: e, shoo: e, soja: e, takahashi: e, tamano: e, tsuyama: e, wake: e, yakage: e }], okinawa: [1, { aguni: e, ginowan: e, ginoza: e, gushikami: e, haebaru: e, higashi: e, hirara: e, iheya: e, ishigaki: e, ishikawa: e, itoman: e, izena: e, kadena: e, kin: e, kitadaito: e, kitanakagusuku: e, kumejima: e, kunigami: e, minamidaito: e, motobu: e, nago: e, naha: e, nakagusuku: e, nakijin: e, nanjo: e, nishihara: e, ogimi: e, okinawa: e, onna: e, shimoji: e, taketomi: e, tarama: e, tokashiki: e, tomigusuku: e, tonaki: e, urasoe: e, uruma: e, yaese: e, yomitan: e, yonabaru: e, yonaguni: e, zamami: e }], osaka: [1, { abeno: e, chihayaakasaka: e, chuo: e, daito: e, fujiidera: e, habikino: e, hannan: e, higashiosaka: e, higashisumiyoshi: e, higashiyodogawa: e, hirakata: e, ibaraki: e, ikeda: e, izumi: e, izumiotsu: e, izumisano: e, kadoma: e, kaizuka: e, kanan: e, kashiwara: e, katano: e, kawachinagano: e, kishiwada: e, kita: e, kumatori: e, matsubara: e, minato: e, minoh: e, misaki: e, moriguchi: e, neyagawa: e, nishi: e, nose: e, osakasayama: e, sakai: e, sayama: e, sennan: e, settsu: e, shijonawate: e, shimamoto: e, suita: e, tadaoka: e, taishi: e, tajiri: e, takaishi: e, takatsuki: e, tondabayashi: e, toyonaka: e, toyono: e, yao: e }], saga: [1, { ariake: e, arita: e, fukudomi: e, genkai: e, hamatama: e, hizen: e, imari: e, kamimine: e, kanzaki: e, karatsu: e, kashima: e, kitagata: e, kitahata: e, kiyama: e, kouhoku: e, kyuragi: e, nishiarita: e, ogi: e, omachi: e, ouchi: e, saga: e, shiroishi: e, taku: e, tara: e, tosu: e, yoshinogari: e }], saitama: [1, { arakawa: e, asaka: e, chichibu: e, fujimi: e, fujimino: e, fukaya: e, hanno: e, hanyu: e, hasuda: e, hatogaya: e, hatoyama: e, hidaka: e, higashichichibu: e, higashimatsuyama: e, honjo: e, ina: e, iruma: e, iwatsuki: e, kamiizumi: e, kamikawa: e, kamisato: e, kasukabe: e, kawagoe: e, kawaguchi: e, kawajima: e, kazo: e, kitamoto: e, koshigaya: e, kounosu: e, kuki: e, kumagaya: e, matsubushi: e, minano: e, misato: e, miyashiro: e, miyoshi: e, moroyama: e, nagatoro: e, namegawa: e, niiza: e, ogano: e, ogawa: e, ogose: e, okegawa: e, omiya: e, otaki: e, ranzan: e, ryokami: e, saitama: e, sakado: e, satte: e, sayama: e, shiki: e, shiraoka: e, soka: e, sugito: e, toda: e, tokigawa: e, tokorozawa: e, tsurugashima: e, urawa: e, warabi: e, yashio: e, yokoze: e, yono: e, yorii: e, yoshida: e, yoshikawa: e, yoshimi: e }], shiga: [1, { aisho: e, gamo: e, higashiomi: e, hikone: e, koka: e, konan: e, kosei: e, koto: e, kusatsu: e, maibara: e, moriyama: e, nagahama: e, nishiazai: e, notogawa: e, omihachiman: e, otsu: e, ritto: e, ryuoh: e, takashima: e, takatsuki: e, torahime: e, toyosato: e, yasu: e }], shimane: [1, { akagi: e, ama: e, gotsu: e, hamada: e, higashiizumo: e, hikawa: e, hikimi: e, izumo: e, kakinoki: e, masuda: e, matsue: e, misato: e, nishinoshima: e, ohda: e, okinoshima: e, okuizumo: e, shimane: e, tamayu: e, tsuwano: e, unnan: e, yakumo: e, yasugi: e, yatsuka: e }], shizuoka: [1, { arai: e, atami: e, fuji: e, fujieda: e, fujikawa: e, fujinomiya: e, fukuroi: e, gotemba: e, haibara: e, hamamatsu: e, higashiizu: e, ito: e, iwata: e, izu: e, izunokuni: e, kakegawa: e, kannami: e, kawanehon: e, kawazu: e, kikugawa: e, kosai: e, makinohara: e, matsuzaki: e, minamiizu: e, mishima: e, morimachi: e, nishiizu: e, numazu: e, omaezaki: e, shimada: e, shimizu: e, shimoda: e, shizuoka: e, susono: e, yaizu: e, yoshida: e }], tochigi: [1, { ashikaga: e, bato: e, haga: e, ichikai: e, iwafune: e, kaminokawa: e, kanuma: e, karasuyama: e, kuroiso: e, mashiko: e, mibu: e, moka: e, motegi: e, nasu: e, nasushiobara: e, nikko: e, nishikata: e, nogi: e, ohira: e, ohtawara: e, oyama: e, sakura: e, sano: e, shimotsuke: e, shioya: e, takanezawa: e, tochigi: e, tsuga: e, ujiie: e, utsunomiya: e, yaita: e }], tokushima: [1, { aizumi: e, anan: e, ichiba: e, itano: e, kainan: e, komatsushima: e, matsushige: e, mima: e, minami: e, miyoshi: e, mugi: e, nakagawa: e, naruto: e, sanagochi: e, shishikui: e, tokushima: e, wajiki: e }], tokyo: [1, { adachi: e, akiruno: e, akishima: e, aogashima: e, arakawa: e, bunkyo: e, chiyoda: e, chofu: e, chuo: e, edogawa: e, fuchu: e, fussa: e, hachijo: e, hachioji: e, hamura: e, higashikurume: e, higashimurayama: e, higashiyamato: e, hino: e, hinode: e, hinohara: e, inagi: e, itabashi: e, katsushika: e, kita: e, kiyose: e, kodaira: e, koganei: e, kokubunji: e, komae: e, koto: e, kouzushima: e, kunitachi: e, machida: e, meguro: e, minato: e, mitaka: e, mizuho: e, musashimurayama: e, musashino: e, nakano: e, nerima: e, ogasawara: e, okutama: e, ome: e, oshima: e, ota: e, setagaya: e, shibuya: e, shinagawa: e, shinjuku: e, suginami: e, sumida: e, tachikawa: e, taito: e, tama: e, toshima: e }], tottori: [1, { chizu: e, hino: e, kawahara: e, koge: e, kotoura: e, misasa: e, nanbu: e, nichinan: e, sakaiminato: e, tottori: e, wakasa: e, yazu: e, yonago: e }], toyama: [1, { asahi: e, fuchu: e, fukumitsu: e, funahashi: e, himi: e, imizu: e, inami: e, johana: e, kamiichi: e, kurobe: e, nakaniikawa: e, namerikawa: e, nanto: e, nyuzen: e, oyabe: e, taira: e, takaoka: e, tateyama: e, toga: e, tonami: e, toyama: e, unazuki: e, uozu: e, yamada: e }], wakayama: [1, { arida: e, aridagawa: e, gobo: e, hashimoto: e, hidaka: e, hirogawa: e, inami: e, iwade: e, kainan: e, kamitonda: e, katsuragi: e, kimino: e, kinokawa: e, kitayama: e, koya: e, koza: e, kozagawa: e, kudoyama: e, kushimoto: e, mihama: e, misato: e, nachikatsuura: e, shingu: e, shirahama: e, taiji: e, tanabe: e, wakayama: e, yuasa: e, yura: e }], yamagata: [1, { asahi: e, funagata: e, higashine: e, iide: e, kahoku: e, kaminoyama: e, kaneyama: e, kawanishi: e, mamurogawa: e, mikawa: e, murayama: e, nagai: e, nakayama: e, nanyo: e, nishikawa: e, obanazawa: e, oe: e, oguni: e, ohkura: e, oishida: e, sagae: e, sakata: e, sakegawa: e, shinjo: e, shirataka: e, shonai: e, takahata: e, tendo: e, tozawa: e, tsuruoka: e, yamagata: e, yamanobe: e, yonezawa: e, yuza: e }], yamaguchi: [1, { abu: e, hagi: e, hikari: e, hofu: e, iwakuni: e, kudamatsu: e, mitou: e, nagato: e, oshima: e, shimonoseki: e, shunan: e, tabuse: e, tokuyama: e, toyota: e, ube: e, yuu: e }], yamanashi: [1, { chuo: e, doshi: e, fuefuki: e, fujikawa: e, fujikawaguchiko: e, fujiyoshida: e, hayakawa: e, hokuto: e, ichikawamisato: e, kai: e, kofu: e, koshu: e, kosuge: e, "minami-alps": e, minobu: e, nakamichi: e, nanbu: e, narusawa: e, nirasaki: e, nishikatsura: e, oshino: e, otsuki: e, showa: e, tabayama: e, tsuru: e, uenohara: e, yamanakako: e, yamanashi: e }], "xn--ehqz56n": e, 三重: e, "xn--1lqs03n": e, 京都: e, "xn--qqqt11m": e, 佐賀: e, "xn--f6qx53a": e, 兵庫: e, "xn--djrs72d6uy": e, 北海道: e, "xn--mkru45i": e, 千葉: e, "xn--0trq7p7nn": e, 和歌山: e, "xn--5js045d": e, 埼玉: e, "xn--kbrq7o": e, 大分: e, "xn--pssu33l": e, 大阪: e, "xn--ntsq17g": e, 奈良: e, "xn--uisz3g": e, 宮城: e, "xn--6btw5a": e, 宮崎: e, "xn--1ctwo": e, 富山: e, "xn--6orx2r": e, 山口: e, "xn--rht61e": e, 山形: e, "xn--rht27z": e, 山梨: e, "xn--nit225k": e, 岐阜: e, "xn--rht3d": e, 岡山: e, "xn--djty4k": e, 岩手: e, "xn--klty5x": e, 島根: e, "xn--kltx9a": e, 広島: e, "xn--kltp7d": e, 徳島: e, "xn--c3s14m": e, 愛媛: e, "xn--vgu402c": e, 愛知: e, "xn--efvn9s": e, 新潟: e, "xn--1lqs71d": e, 東京: e, "xn--4pvxs": e, 栃木: e, "xn--uuwu58a": e, 沖縄: e, "xn--zbx025d": e, 滋賀: e, "xn--8pvr4u": e, 熊本: e, "xn--5rtp49c": e, 石川: e, "xn--ntso0iqx3a": e, 神奈川: e, "xn--elqq16h": e, 福井: e, "xn--4it168d": e, 福岡: e, "xn--klt787d": e, 福島: e, "xn--rny31h": e, 秋田: e, "xn--7t0a264c": e, 群馬: e, "xn--uist22h": e, 茨城: e, "xn--8ltr62k": e, 長崎: e, "xn--2m4a15e": e, 長野: e, "xn--32vp30h": e, 青森: e, "xn--4it797k": e, 静岡: e, "xn--5rtq34k": e, 香川: e, "xn--k7yn95e": e, 高知: e, "xn--tor131o": e, 鳥取: e, "xn--d5qv7z876c": e, 鹿児島: e, kawasaki: g, kitakyushu: g, kobe: g, nagoya: g, sapporo: g, sendai: g, yokohama: g, buyshop: t, fashionstore: t, handcrafted: t, kawaiishop: t, supersale: t, theshop: t, "0am": t, "0g0": t, "0j0": t, "0t0": t, mydns: t, pgw: t, wjg: t, usercontent: t, angry: t, babyblue: t, babymilk: t, backdrop: t, bambina: t, bitter: t, blush: t, boo: t, boy: t, boyfriend: t, but: t, candypop: t, capoo: t, catfood: t, cheap: t, chicappa: t, chillout: t, chips: t, chowder: t, chu: t, ciao: t, cocotte: t, coolblog: t, cranky: t, cutegirl: t, daa: t, deca: t, deci: t, digick: t, egoism: t, fakefur: t, fem: t, flier: t, floppy: t, fool: t, frenchkiss: t, girlfriend: t, girly: t, gloomy: t, gonna: t, greater: t, hacca: t, heavy: t, her: t, hiho: t, hippy: t, holy: t, hungry: t, icurus: t, itigo: t, jellybean: t, kikirara: t, kill: t, kilo: t, kuron: t, littlestar: t, lolipopmc: t, lolitapunk: t, lomo: t, lovepop: t, lovesick: t, main: t, mods: t, mond: t, mongolian: t, moo: t, namaste: t, nikita: t, nobushi: t, noor: t, oops: t, parallel: t, parasite: t, pecori: t, peewee: t, penne: t, pepper: t, perma: t, pigboat: t, pinoko: t, punyu: t, pupu: t, pussycat: t, pya: t, raindrop: t, readymade: t, sadist: t, schoolbus: t, secret: t, staba: t, stripper: t, sub: t, sunnyday: t, thick: t, tonkotsu: t, under: t, upper: t, velvet: t, verse: t, versus: t, vivian: t, watson: t, weblike: t, whitesnow: t, zombie: t, hateblo: t, hatenablog: t, hatenadiary: t, "2-d": t, bona: t, crap: t, daynight: t, eek: t, flop: t, halfmoon: t, jeez: t, matrix: t, mimoza: t, netgamers: t, nyanta: t, o0o0: t, rdy: t, rgr: t, rulez: t, sakurastorage: [0, { isk01: qi, isk02: qi }], saloon: t, sblo: t, skr: t, tank: t, "uh-oh": t, undo: t, webaccel: [0, { rs: t, user: t }], websozai: t, xii: t }], ke: [1, { ac: e, co: e, go: e, info: e, me: e, mobi: e, ne: e, or: e, sc: e }], kg: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, us: t }], kh: g, ki: zl, km: [1, { ass: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e, tm: e, asso: e, coop: e, gouv: e, medecin: e, notaires: e, pharmaciens: e, presse: e, veterinaire: e }], kn: [1, { edu: e, gov: e, net: e, org: e }], kp: [1, { com: e, edu: e, gov: e, org: e, rep: e, tra: e }], kr: [1, { ac: e, ai: e, co: e, es: e, go: e, hs: e, io: e, it: e, kg: e, me: e, mil: e, ms: e, ne: e, or: e, pe: e, re: e, sc: e, busan: e, chungbuk: e, chungnam: e, daegu: e, daejeon: e, gangwon: e, gwangju: e, gyeongbuk: e, gyeonggi: e, gyeongnam: e, incheon: e, jeju: e, jeonbuk: e, jeonnam: e, seoul: e, ulsan: e, c01: t, "eliv-dns": t }], kw: [1, { com: e, edu: e, emb: e, gov: e, ind: e, net: e, org: e }], ky: J, kz: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, jcloud: t }], la: [1, { com: e, edu: e, gov: e, info: e, int: e, net: e, org: e, per: e, bnr: t }], lb: n, lc: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, oy: t }], li: e, lk: [1, { ac: e, assn: e, com: e, edu: e, gov: e, grp: e, hotel: e, int: e, ltd: e, net: e, ngo: e, org: e, sch: e, soc: e, web: e }], lr: n, ls: [1, { ac: e, biz: e, co: e, edu: e, gov: e, info: e, net: e, org: e, sc: e }], lt: c, lu: [1, { "123website": t }], lv: [1, { asn: e, com: e, conf: e, edu: e, gov: e, id: e, mil: e, net: e, org: e }], ly: [1, { com: e, edu: e, gov: e, id: e, med: e, net: e, org: e, plc: e, sch: e }], ma: [1, { ac: e, co: e, gov: e, net: e, org: e, press: e }], mc: [1, { asso: e, tm: e }], md: [1, { ir: t }], me: [1, { ac: e, co: e, edu: e, gov: e, its: e, net: e, org: e, priv: e, c66: t, craft: t, edgestack: t, filegear: t, glitch: t, "filegear-sg": t, lohmus: t, barsy: t, mcdir: t, brasilia: t, ddns: t, dnsfor: t, hopto: t, loginto: t, noip: t, webhop: t, soundcast: t, tcp4: t, vp4: t, diskstation: t, dscloud: t, i234: t, myds: t, synology: t, transip: Re, nohost: t }], mg: [1, { co: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e }], mh: e, mil: e, mk: [1, { com: e, edu: e, gov: e, inf: e, name: e, net: e, org: e }], ml: [1, { ac: e, art: e, asso: e, com: e, edu: e, gouv: e, gov: e, info: e, inst: e, net: e, org: e, pr: e, presse: e }], mm: g, mn: [1, { edu: e, gov: e, org: e, nyc: t }], mo: n, mobi: [1, { barsy: t, dscloud: t }], mp: [1, { ju: t }], mq: e, mr: c, ms: [1, { com: e, edu: e, gov: e, net: e, org: e, minisite: t }], mt: J, mu: [1, { ac: e, co: e, com: e, gov: e, net: e, or: e, org: e }], museum: e, mv: [1, { aero: e, biz: e, com: e, coop: e, edu: e, gov: e, info: e, int: e, mil: e, museum: e, name: e, net: e, org: e, pro: e }], mw: [1, { ac: e, biz: e, co: e, com: e, coop: e, edu: e, gov: e, int: e, net: e, org: e }], mx: [1, { com: e, edu: e, gob: e, net: e, org: e }], my: [1, { biz: e, com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e }], mz: [1, { ac: e, adv: e, co: e, edu: e, gov: e, mil: e, net: e, org: e }], na: [1, { alt: e, co: e, com: e, gov: e, net: e, org: e }], name: [1, { her: Al, his: Al }], nc: [1, { asso: e, nom: e }], ne: e, net: [1, { adobeaemcloud: t, "adobeio-static": t, adobeioruntime: t, akadns: t, akamai: t, "akamai-staging": t, akamaiedge: t, "akamaiedge-staging": t, akamaihd: t, "akamaihd-staging": t, akamaiorigin: t, "akamaiorigin-staging": t, akamaized: t, "akamaized-staging": t, edgekey: t, "edgekey-staging": t, edgesuite: t, "edgesuite-staging": t, alwaysdata: t, myamaze: t, cloudfront: t, appudo: t, "atlassian-dev": [0, { prod: ur }], myfritz: t, onavstack: t, shopselect: t, blackbaudcdn: t, boomla: t, bplaced: t, square7: t, cdn77: [0, { r: t }], "cdn77-ssl": t, gb: t, hu: t, jp: t, se: t, uk: t, clickrising: t, "ddns-ip": t, "dns-cloud": t, "dns-dynamic": t, cloudaccess: t, cloudflare: [2, { cdn: t }], cloudflareanycast: ur, cloudflarecn: ur, cloudflareglobal: ur, ctfcloud: t, "feste-ip": t, "knx-server": t, "static-access": t, cryptonomic: o, dattolocal: t, mydatto: t, debian: t, definima: t, deno: t, "at-band-camp": t, blogdns: t, "broke-it": t, buyshouses: t, dnsalias: t, dnsdojo: t, "does-it": t, dontexist: t, dynalias: t, dynathome: t, endofinternet: t, "from-az": t, "from-co": t, "from-la": t, "from-ny": t, "gets-it": t, "ham-radio-op": t, homeftp: t, homeip: t, homelinux: t, homeunix: t, "in-the-band": t, "is-a-chef": t, "is-a-geek": t, "isa-geek": t, "kicks-ass": t, "office-on-the": t, podzone: t, "scrapper-site": t, selfip: t, "sells-it": t, servebbs: t, serveftp: t, thruhere: t, webhop: t, casacam: t, dynu: t, dynv6: t, twmail: t, ru: t, channelsdvr: [2, { u: t }], fastly: [0, { freetls: t, map: t, prod: [0, { a: t, global: t }], ssl: [0, { a: t, b: t, global: t }] }], fastlylb: [2, { map: t }], edgeapp: t, "keyword-on": t, "live-on": t, "server-on": t, "cdn-edges": t, heteml: t, cloudfunctions: t, "grafana-dev": t, iobb: t, moonscale: t, "in-dsl": t, "in-vpn": t, oninferno: t, botdash: t, "apps-1and1": t, ipifony: t, cloudjiffy: [2, { "fra1-de": t, "west1-us": t }], elastx: [0, { "jls-sto1": t, "jls-sto2": t, "jls-sto3": t }], massivegrid: [0, { paas: [0, { "fr-1": t, "lon-1": t, "lon-2": t, "ny-1": t, "ny-2": t, "sg-1": t }] }], saveincloud: [0, { jelastic: t, "nordeste-idc": t }], scaleforce: G, kinghost: t, uni5: t, krellian: t, ggff: t, localcert: t, localhostcert: t, localto: o, barsy: t, memset: t, "azure-api": t, "azure-mobile": t, azureedge: t, azurefd: t, azurestaticapps: [2, { 1: t, 2: t, 3: t, 4: t, 5: t, 6: t, 7: t, centralus: t, eastasia: t, eastus2: t, westeurope: t, westus2: t }], azurewebsites: t, cloudapp: t, trafficmanager: t, windows: [0, { core: [0, { blob: t }], servicebus: t }], mynetname: [0, { sn: t }], routingthecloud: t, bounceme: t, ddns: t, "eating-organic": t, mydissent: t, myeffect: t, mymediapc: t, mypsx: t, mysecuritycamera: t, nhlfan: t, "no-ip": t, pgafan: t, privatizehealthinsurance: t, redirectme: t, serveblog: t, serveminecraft: t, sytes: t, dnsup: t, hicam: t, "now-dns": t, ownip: t, vpndns: t, cloudycluster: t, ovh: [0, { hosting: o, webpaas: o }], rackmaze: t, myradweb: t, in: t, "subsc-pay": t, squares: t, schokokeks: t, "firewall-gateway": t, seidat: t, senseering: t, siteleaf: t, mafelo: t, myspreadshop: t, "vps-host": [2, { jelastic: [0, { atl: t, njs: t, ric: t }] }], srcf: [0, { soc: t, user: t }], supabase: t, dsmynas: t, familyds: t, ts: [2, { c: o }], torproject: [2, { pages: t }], vusercontent: t, "reserve-online": t, "community-pro": t, meinforum: t, yandexcloud: [2, { storage: t, website: t }], za: t }], nf: [1, { arts: e, com: e, firm: e, info: e, net: e, other: e, per: e, rec: e, store: e, web: e }], ng: [1, { com: e, edu: e, gov: e, i: e, mil: e, mobi: e, name: e, net: e, org: e, sch: e, biz: [2, { co: t, dl: t, go: t, lg: t, on: t }], col: t, firm: t, gen: t, ltd: t, ngo: t, plc: t }], ni: [1, { ac: e, biz: e, co: e, com: e, edu: e, gob: e, in: e, info: e, int: e, mil: e, net: e, nom: e, org: e, web: e }], nl: [1, { co: t, "hosting-cluster": t, gov: t, khplay: t, "123website": t, myspreadshop: t, transurl: o, cistron: t, demon: t }], no: [1, { fhs: e, folkebibl: e, fylkesbibl: e, idrett: e, museum: e, priv: e, vgs: e, dep: e, herad: e, kommune: e, mil: e, stat: e, aa: le, ah: le, bu: le, fm: le, hl: le, hm: le, "jan-mayen": le, mr: le, nl: le, nt: le, of: le, ol: le, oslo: le, rl: le, sf: le, st: le, svalbard: le, tm: le, tr: le, va: le, vf: le, akrehamn: e, "xn--krehamn-dxa": e, åkrehamn: e, algard: e, "xn--lgrd-poac": e, ålgård: e, arna: e, bronnoysund: e, "xn--brnnysund-m8ac": e, brønnøysund: e, brumunddal: e, bryne: e, drobak: e, "xn--drbak-wua": e, drøbak: e, egersund: e, fetsund: e, floro: e, "xn--flor-jra": e, florø: e, fredrikstad: e, hokksund: e, honefoss: e, "xn--hnefoss-q1a": e, hønefoss: e, jessheim: e, jorpeland: e, "xn--jrpeland-54a": e, jørpeland: e, kirkenes: e, kopervik: e, krokstadelva: e, langevag: e, "xn--langevg-jxa": e, langevåg: e, leirvik: e, mjondalen: e, "xn--mjndalen-64a": e, mjøndalen: e, "mo-i-rana": e, mosjoen: e, "xn--mosjen-eya": e, mosjøen: e, nesoddtangen: e, orkanger: e, osoyro: e, "xn--osyro-wua": e, osøyro: e, raholt: e, "xn--rholt-mra": e, råholt: e, sandnessjoen: e, "xn--sandnessjen-ogb": e, sandnessjøen: e, skedsmokorset: e, slattum: e, spjelkavik: e, stathelle: e, stavern: e, stjordalshalsen: e, "xn--stjrdalshalsen-sqb": e, stjørdalshalsen: e, tananger: e, tranby: e, vossevangen: e, aarborte: e, aejrie: e, afjord: e, "xn--fjord-lra": e, åfjord: e, agdenes: e, akershus: Rl, aknoluokta: e, "xn--koluokta-7ya57h": e, ákŋoluokta: e, al: e, "xn--l-1fa": e, ål: e, alaheadju: e, "xn--laheadju-7ya": e, álaheadju: e, alesund: e, "xn--lesund-hua": e, ålesund: e, alstahaug: e, alta: e, "xn--lt-liac": e, áltá: e, alvdal: e, amli: e, "xn--mli-tla": e, åmli: e, amot: e, "xn--mot-tla": e, åmot: e, andasuolo: e, andebu: e, andoy: e, "xn--andy-ira": e, andøy: e, ardal: e, "xn--rdal-poa": e, årdal: e, aremark: e, arendal: e, "xn--s-1fa": e, ås: e, aseral: e, "xn--seral-lra": e, åseral: e, asker: e, askim: e, askoy: e, "xn--asky-ira": e, askøy: e, askvoll: e, asnes: e, "xn--snes-poa": e, åsnes: e, audnedaln: e, aukra: e, aure: e, aurland: e, "aurskog-holand": e, "xn--aurskog-hland-jnb": e, "aurskog-høland": e, austevoll: e, austrheim: e, averoy: e, "xn--avery-yua": e, averøy: e, badaddja: e, "xn--bdddj-mrabd": e, bådåddjå: e, "xn--brum-voa": e, bærum: e, bahcavuotna: e, "xn--bhcavuotna-s4a": e, báhcavuotna: e, bahccavuotna: e, "xn--bhccavuotna-k7a": e, báhccavuotna: e, baidar: e, "xn--bidr-5nac": e, báidár: e, bajddar: e, "xn--bjddar-pta": e, bájddar: e, balat: e, "xn--blt-elab": e, bálát: e, balestrand: e, ballangen: e, balsfjord: e, bamble: e, bardu: e, barum: e, batsfjord: e, "xn--btsfjord-9za": e, båtsfjord: e, bearalvahki: e, "xn--bearalvhki-y4a": e, bearalváhki: e, beardu: e, beiarn: e, berg: e, bergen: e, berlevag: e, "xn--berlevg-jxa": e, berlevåg: e, bievat: e, "xn--bievt-0qa": e, bievát: e, bindal: e, birkenes: e, bjarkoy: e, "xn--bjarky-fya": e, bjarkøy: e, bjerkreim: e, bjugn: e, bodo: e, "xn--bod-2na": e, bodø: e, bokn: e, bomlo: e, "xn--bmlo-gra": e, bømlo: e, bremanger: e, bronnoy: e, "xn--brnny-wuac": e, brønnøy: e, budejju: e, buskerud: Rl, bygland: e, bykle: e, cahcesuolo: e, "xn--hcesuolo-7ya35b": e, čáhcesuolo: e, davvenjarga: e, "xn--davvenjrga-y4a": e, davvenjárga: e, davvesiida: e, deatnu: e, dielddanuorri: e, divtasvuodna: e, divttasvuotna: e, donna: e, "xn--dnna-gra": e, dønna: e, dovre: e, drammen: e, drangedal: e, dyroy: e, "xn--dyry-ira": e, dyrøy: e, eid: e, eidfjord: e, eidsberg: e, eidskog: e, eidsvoll: e, eigersund: e, elverum: e, enebakk: e, engerdal: e, etne: e, etnedal: e, evenassi: e, "xn--eveni-0qa01ga": e, evenášši: e, evenes: e, "evje-og-hornnes": e, farsund: e, fauske: e, fedje: e, fet: e, finnoy: e, "xn--finny-yua": e, finnøy: e, fitjar: e, fjaler: e, fjell: e, fla: e, "xn--fl-zia": e, flå: e, flakstad: e, flatanger: e, flekkefjord: e, flesberg: e, flora: e, folldal: e, forde: e, "xn--frde-gra": e, førde: e, forsand: e, fosnes: e, "xn--frna-woa": e, fræna: e, frana: e, frei: e, frogn: e, froland: e, frosta: e, froya: e, "xn--frya-hra": e, frøya: e, fuoisku: e, fuossko: e, fusa: e, fyresdal: e, gaivuotna: e, "xn--givuotna-8ya": e, gáivuotna: e, galsa: e, "xn--gls-elac": e, gálsá: e, gamvik: e, gangaviika: e, "xn--ggaviika-8ya47h": e, gáŋgaviika: e, gaular: e, gausdal: e, giehtavuoatna: e, gildeskal: e, "xn--gildeskl-g0a": e, gildeskål: e, giske: e, gjemnes: e, gjerdrum: e, gjerstad: e, gjesdal: e, gjovik: e, "xn--gjvik-wua": e, gjøvik: e, gloppen: e, gol: e, gran: e, grane: e, granvin: e, gratangen: e, grimstad: e, grong: e, grue: e, gulen: e, guovdageaidnu: e, ha: e, "xn--h-2fa": e, hå: e, habmer: e, "xn--hbmer-xqa": e, hábmer: e, hadsel: e, "xn--hgebostad-g3a": e, hægebostad: e, hagebostad: e, halden: e, halsa: e, hamar: e, hamaroy: e, hammarfeasta: e, "xn--hmmrfeasta-s4ac": e, hámmárfeasta: e, hammerfest: e, hapmir: e, "xn--hpmir-xqa": e, hápmir: e, haram: e, hareid: e, harstad: e, hasvik: e, hattfjelldal: e, haugesund: e, hedmark: [0, { os: e, valer: e, "xn--vler-qoa": e, våler: e }], hemne: e, hemnes: e, hemsedal: e, hitra: e, hjartdal: e, hjelmeland: e, hobol: e, "xn--hobl-ira": e, hobøl: e, hof: e, hol: e, hole: e, holmestrand: e, holtalen: e, "xn--holtlen-hxa": e, holtålen: e, hordaland: [0, { os: e }], hornindal: e, horten: e, hoyanger: e, "xn--hyanger-q1a": e, høyanger: e, hoylandet: e, "xn--hylandet-54a": e, høylandet: e, hurdal: e, hurum: e, hvaler: e, hyllestad: e, ibestad: e, inderoy: e, "xn--indery-fya": e, inderøy: e, iveland: e, ivgu: e, jevnaker: e, jolster: e, "xn--jlster-bya": e, jølster: e, jondal: e, kafjord: e, "xn--kfjord-iua": e, kåfjord: e, karasjohka: e, "xn--krjohka-hwab49j": e, kárášjohka: e, karasjok: e, karlsoy: e, karmoy: e, "xn--karmy-yua": e, karmøy: e, kautokeino: e, klabu: e, "xn--klbu-woa": e, klæbu: e, klepp: e, kongsberg: e, kongsvinger: e, kraanghke: e, "xn--kranghke-b0a": e, kråanghke: e, kragero: e, "xn--krager-gya": e, kragerø: e, kristiansand: e, kristiansund: e, krodsherad: e, "xn--krdsherad-m8a": e, krødsherad: e, "xn--kvfjord-nxa": e, kvæfjord: e, "xn--kvnangen-k0a": e, kvænangen: e, kvafjord: e, kvalsund: e, kvam: e, kvanangen: e, kvinesdal: e, kvinnherad: e, kviteseid: e, kvitsoy: e, "xn--kvitsy-fya": e, kvitsøy: e, laakesvuemie: e, "xn--lrdal-sra": e, lærdal: e, lahppi: e, "xn--lhppi-xqa": e, láhppi: e, lardal: e, larvik: e, lavagis: e, lavangen: e, leangaviika: e, "xn--leagaviika-52b": e, leaŋgaviika: e, lebesby: e, leikanger: e, leirfjord: e, leka: e, leksvik: e, lenvik: e, lerdal: e, lesja: e, levanger: e, lier: e, lierne: e, lillehammer: e, lillesand: e, lindas: e, "xn--linds-pra": e, lindås: e, lindesnes: e, loabat: e, "xn--loabt-0qa": e, loabát: e, lodingen: e, "xn--ldingen-q1a": e, lødingen: e, lom: e, loppa: e, lorenskog: e, "xn--lrenskog-54a": e, lørenskog: e, loten: e, "xn--lten-gra": e, løten: e, lund: e, lunner: e, luroy: e, "xn--lury-ira": e, lurøy: e, luster: e, lyngdal: e, lyngen: e, malatvuopmi: e, "xn--mlatvuopmi-s4a": e, málatvuopmi: e, malselv: e, "xn--mlselv-iua": e, målselv: e, malvik: e, mandal: e, marker: e, marnardal: e, masfjorden: e, masoy: e, "xn--msy-ula0h": e, måsøy: e, "matta-varjjat": e, "xn--mtta-vrjjat-k7af": e, "mátta-várjjat": e, meland: e, meldal: e, melhus: e, meloy: e, "xn--mely-ira": e, meløy: e, meraker: e, "xn--merker-kua": e, meråker: e, midsund: e, "midtre-gauldal": e, moareke: e, "xn--moreke-jua": e, moåreke: e, modalen: e, modum: e, molde: e, "more-og-romsdal": [0, { heroy: e, sande: e }], "xn--mre-og-romsdal-qqb": [0, { "xn--hery-ira": e, sande: e }], "møre-og-romsdal": [0, { herøy: e, sande: e }], moskenes: e, moss: e, mosvik: e, muosat: e, "xn--muost-0qa": e, muosát: e, naamesjevuemie: e, "xn--nmesjevuemie-tcba": e, nååmesjevuemie: e, "xn--nry-yla5g": e, nærøy: e, namdalseid: e, namsos: e, namsskogan: e, nannestad: e, naroy: e, narviika: e, narvik: e, naustdal: e, navuotna: e, "xn--nvuotna-hwa": e, návuotna: e, "nedre-eiker": e, nesna: e, nesodden: e, nesseby: e, nesset: e, nissedal: e, nittedal: e, "nord-aurdal": e, "nord-fron": e, "nord-odal": e, norddal: e, nordkapp: e, nordland: [0, { bo: e, "xn--b-5ga": e, bø: e, heroy: e, "xn--hery-ira": e, herøy: e }], "nordre-land": e, nordreisa: e, "nore-og-uvdal": e, notodden: e, notteroy: e, "xn--nttery-byae": e, nøtterøy: e, odda: e, oksnes: e, "xn--ksnes-uua": e, øksnes: e, omasvuotna: e, oppdal: e, oppegard: e, "xn--oppegrd-ixa": e, oppegård: e, orkdal: e, orland: e, "xn--rland-uua": e, ørland: e, orskog: e, "xn--rskog-uua": e, ørskog: e, orsta: e, "xn--rsta-fra": e, ørsta: e, osen: e, osteroy: e, "xn--ostery-fya": e, osterøy: e, ostfold: [0, { valer: e }], "xn--stfold-9xa": [0, { "xn--vler-qoa": e }], østfold: [0, { våler: e }], "ostre-toten": e, "xn--stre-toten-zcb": e, "østre-toten": e, overhalla: e, "ovre-eiker": e, "xn--vre-eiker-k8a": e, "øvre-eiker": e, oyer: e, "xn--yer-zna": e, øyer: e, oygarden: e, "xn--ygarden-p1a": e, øygarden: e, "oystre-slidre": e, "xn--ystre-slidre-ujb": e, "øystre-slidre": e, porsanger: e, porsangu: e, "xn--porsgu-sta26f": e, porsáŋgu: e, porsgrunn: e, rade: e, "xn--rde-ula": e, råde: e, radoy: e, "xn--rady-ira": e, radøy: e, "xn--rlingen-mxa": e, rælingen: e, rahkkeravju: e, "xn--rhkkervju-01af": e, ráhkkerávju: e, raisa: e, "xn--risa-5na": e, ráisa: e, rakkestad: e, ralingen: e, rana: e, randaberg: e, rauma: e, rendalen: e, rennebu: e, rennesoy: e, "xn--rennesy-v1a": e, rennesøy: e, rindal: e, ringebu: e, ringerike: e, ringsaker: e, risor: e, "xn--risr-ira": e, risør: e, rissa: e, roan: e, rodoy: e, "xn--rdy-0nab": e, rødøy: e, rollag: e, romsa: e, romskog: e, "xn--rmskog-bya": e, rømskog: e, roros: e, "xn--rros-gra": e, røros: e, rost: e, "xn--rst-0na": e, røst: e, royken: e, "xn--ryken-vua": e, røyken: e, royrvik: e, "xn--ryrvik-bya": e, røyrvik: e, ruovat: e, rygge: e, salangen: e, salat: e, "xn--slat-5na": e, sálat: e, "xn--slt-elab": e, sálát: e, saltdal: e, samnanger: e, sandefjord: e, sandnes: e, sandoy: e, "xn--sandy-yua": e, sandøy: e, sarpsborg: e, sauda: e, sauherad: e, sel: e, selbu: e, selje: e, seljord: e, siellak: e, sigdal: e, siljan: e, sirdal: e, skanit: e, "xn--sknit-yqa": e, skánit: e, skanland: e, "xn--sknland-fxa": e, skånland: e, skaun: e, skedsmo: e, ski: e, skien: e, skierva: e, "xn--skierv-uta": e, skiervá: e, skiptvet: e, skjak: e, "xn--skjk-soa": e, skjåk: e, skjervoy: e, "xn--skjervy-v1a": e, skjervøy: e, skodje: e, smola: e, "xn--smla-hra": e, smøla: e, snaase: e, "xn--snase-nra": e, snåase: e, snasa: e, "xn--snsa-roa": e, snåsa: e, snillfjord: e, snoasa: e, sogndal: e, sogne: e, "xn--sgne-gra": e, søgne: e, sokndal: e, sola: e, solund: e, somna: e, "xn--smna-gra": e, sømna: e, "sondre-land": e, "xn--sndre-land-0cb": e, "søndre-land": e, songdalen: e, "sor-aurdal": e, "xn--sr-aurdal-l8a": e, "sør-aurdal": e, "sor-fron": e, "xn--sr-fron-q1a": e, "sør-fron": e, "sor-odal": e, "xn--sr-odal-q1a": e, "sør-odal": e, "sor-varanger": e, "xn--sr-varanger-ggb": e, "sør-varanger": e, sorfold: e, "xn--srfold-bya": e, sørfold: e, sorreisa: e, "xn--srreisa-q1a": e, sørreisa: e, sortland: e, sorum: e, "xn--srum-gra": e, sørum: e, spydeberg: e, stange: e, stavanger: e, steigen: e, steinkjer: e, stjordal: e, "xn--stjrdal-s1a": e, stjørdal: e, stokke: e, "stor-elvdal": e, stord: e, stordal: e, storfjord: e, strand: e, stranda: e, stryn: e, sula: e, suldal: e, sund: e, sunndal: e, surnadal: e, sveio: e, svelvik: e, sykkylven: e, tana: e, telemark: [0, { bo: e, "xn--b-5ga": e, bø: e }], time: e, tingvoll: e, tinn: e, tjeldsund: e, tjome: e, "xn--tjme-hra": e, tjøme: e, tokke: e, tolga: e, tonsberg: e, "xn--tnsberg-q1a": e, tønsberg: e, torsken: e, "xn--trna-woa": e, træna: e, trana: e, tranoy: e, "xn--trany-yua": e, tranøy: e, troandin: e, trogstad: e, "xn--trgstad-r1a": e, trøgstad: e, tromsa: e, tromso: e, "xn--troms-zua": e, tromsø: e, trondheim: e, trysil: e, tvedestrand: e, tydal: e, tynset: e, tysfjord: e, tysnes: e, "xn--tysvr-vra": e, tysvær: e, tysvar: e, ullensaker: e, ullensvang: e, ulvik: e, unjarga: e, "xn--unjrga-rta": e, unjárga: e, utsira: e, vaapste: e, vadso: e, "xn--vads-jra": e, vadsø: e, "xn--vry-yla5g": e, værøy: e, vaga: e, "xn--vg-yiab": e, vågå: e, vagan: e, "xn--vgan-qoa": e, vågan: e, vagsoy: e, "xn--vgsy-qoa0j": e, vågsøy: e, vaksdal: e, valle: e, vang: e, vanylven: e, vardo: e, "xn--vard-jra": e, vardø: e, varggat: e, "xn--vrggt-xqad": e, várggát: e, varoy: e, vefsn: e, vega: e, vegarshei: e, "xn--vegrshei-c0a": e, vegårshei: e, vennesla: e, verdal: e, verran: e, vestby: e, vestfold: [0, { sande: e }], vestnes: e, "vestre-slidre": e, "vestre-toten": e, vestvagoy: e, "xn--vestvgy-ixa6o": e, vestvågøy: e, vevelstad: e, vik: e, vikna: e, vindafjord: e, voagat: e, volda: e, voss: e, co: t, "123hjemmeside": t, myspreadshop: t }], np: g, nr: zl, nu: [1, { merseine: t, mine: t, shacknet: t, enterprisecloud: t }], nz: [1, { ac: e, co: e, cri: e, geek: e, gen: e, govt: e, health: e, iwi: e, kiwi: e, maori: e, "xn--mori-qsa": e, māori: e, mil: e, net: e, org: e, parliament: e, school: e, cloudns: t }], om: [1, { co: e, com: e, edu: e, gov: e, med: e, museum: e, net: e, org: e, pro: e }], onion: e, org: [1, { altervista: t, pimienta: t, poivron: t, potager: t, sweetpepper: t, cdn77: [0, { c: t, rsc: t }], "cdn77-secure": [0, { origin: [0, { ssl: t }] }], ae: t, cloudns: t, "ip-dynamic": t, ddnss: t, dpdns: t, duckdns: t, tunk: t, blogdns: t, blogsite: t, boldlygoingnowhere: t, dnsalias: t, dnsdojo: t, doesntexist: t, dontexist: t, doomdns: t, dvrdns: t, dynalias: t, dyndns: [2, { go: t, home: t }], endofinternet: t, endoftheinternet: t, "from-me": t, "game-host": t, gotdns: t, "hobby-site": t, homedns: t, homeftp: t, homelinux: t, homeunix: t, "is-a-bruinsfan": t, "is-a-candidate": t, "is-a-celticsfan": t, "is-a-chef": t, "is-a-geek": t, "is-a-knight": t, "is-a-linux-user": t, "is-a-patsfan": t, "is-a-soxfan": t, "is-found": t, "is-lost": t, "is-saved": t, "is-very-bad": t, "is-very-evil": t, "is-very-good": t, "is-very-nice": t, "is-very-sweet": t, "isa-geek": t, "kicks-ass": t, misconfused: t, podzone: t, readmyblog: t, selfip: t, sellsyourhome: t, servebbs: t, serveftp: t, servegame: t, "stuff-4-sale": t, webhop: t, accesscam: t, camdvr: t, freeddns: t, mywire: t, webredirect: t, twmail: t, eu: [2, { al: t, asso: t, at: t, au: t, be: t, bg: t, ca: t, cd: t, ch: t, cn: t, cy: t, cz: t, de: t, dk: t, edu: t, ee: t, es: t, fi: t, fr: t, gr: t, hr: t, hu: t, ie: t, il: t, in: t, int: t, is: t, it: t, jp: t, kr: t, lt: t, lu: t, lv: t, me: t, mk: t, mt: t, my: t, net: t, ng: t, nl: t, no: t, nz: t, pl: t, pt: t, ro: t, ru: t, se: t, si: t, sk: t, tr: t, uk: t, us: t }], fedorainfracloud: t, fedorapeople: t, fedoraproject: [0, { cloud: t, os: be, stg: [0, { os: be }] }], freedesktop: t, hatenadiary: t, hepforge: t, "in-dsl": t, "in-vpn": t, js: t, barsy: t, mayfirst: t, routingthecloud: t, bmoattachments: t, "cable-modem": t, collegefan: t, couchpotatofries: t, hopto: t, mlbfan: t, myftp: t, mysecuritycamera: t, nflfan: t, "no-ip": t, "read-books": t, ufcfan: t, zapto: t, dynserv: t, "now-dns": t, "is-local": t, httpbin: t, pubtls: t, jpn: t, "my-firewall": t, myfirewall: t, spdns: t, "small-web": t, dsmynas: t, familyds: t, teckids: qi, tuxfamily: t, diskstation: t, hk: t, us: t, toolforge: t, wmcloud: t, wmflabs: t, za: t }], pa: [1, { abo: e, ac: e, com: e, edu: e, gob: e, ing: e, med: e, net: e, nom: e, org: e, sld: e }], pe: [1, { com: e, edu: e, gob: e, mil: e, net: e, nom: e, org: e }], pf: [1, { com: e, edu: e, org: e }], pg: g, ph: [1, { com: e, edu: e, gov: e, i: e, mil: e, net: e, ngo: e, org: e, cloudns: t }], pk: [1, { ac: e, biz: e, com: e, edu: e, fam: e, gkp: e, gob: e, gog: e, gok: e, gop: e, gos: e, gov: e, net: e, org: e, web: e }], pl: [1, { com: e, net: e, org: e, agro: e, aid: e, atm: e, auto: e, biz: e, edu: e, gmina: e, gsm: e, info: e, mail: e, media: e, miasta: e, mil: e, nieruchomosci: e, nom: e, pc: e, powiat: e, priv: e, realestate: e, rel: e, sex: e, shop: e, sklep: e, sos: e, szkola: e, targi: e, tm: e, tourism: e, travel: e, turystyka: e, gov: [1, { ap: e, griw: e, ic: e, is: e, kmpsp: e, konsulat: e, kppsp: e, kwp: e, kwpsp: e, mup: e, mw: e, oia: e, oirm: e, oke: e, oow: e, oschr: e, oum: e, pa: e, pinb: e, piw: e, po: e, pr: e, psp: e, psse: e, pup: e, rzgw: e, sa: e, sdn: e, sko: e, so: e, sr: e, starostwo: e, ug: e, ugim: e, um: e, umig: e, upow: e, uppo: e, us: e, uw: e, uzs: e, wif: e, wiih: e, winb: e, wios: e, witd: e, wiw: e, wkz: e, wsa: e, wskr: e, wsse: e, wuoz: e, wzmiuw: e, zp: e, zpisdn: e }], augustow: e, "babia-gora": e, bedzin: e, beskidy: e, bialowieza: e, bialystok: e, bielawa: e, bieszczady: e, boleslawiec: e, bydgoszcz: e, bytom: e, cieszyn: e, czeladz: e, czest: e, dlugoleka: e, elblag: e, elk: e, glogow: e, gniezno: e, gorlice: e, grajewo: e, ilawa: e, jaworzno: e, "jelenia-gora": e, jgora: e, kalisz: e, karpacz: e, kartuzy: e, kaszuby: e, katowice: e, "kazimierz-dolny": e, kepno: e, ketrzyn: e, klodzko: e, kobierzyce: e, kolobrzeg: e, konin: e, konskowola: e, kutno: e, lapy: e, lebork: e, legnica: e, lezajsk: e, limanowa: e, lomza: e, lowicz: e, lubin: e, lukow: e, malbork: e, malopolska: e, mazowsze: e, mazury: e, mielec: e, mielno: e, mragowo: e, naklo: e, nowaruda: e, nysa: e, olawa: e, olecko: e, olkusz: e, olsztyn: e, opoczno: e, opole: e, ostroda: e, ostroleka: e, ostrowiec: e, ostrowwlkp: e, pila: e, pisz: e, podhale: e, podlasie: e, polkowice: e, pomorskie: e, pomorze: e, prochowice: e, pruszkow: e, przeworsk: e, pulawy: e, radom: e, "rawa-maz": e, rybnik: e, rzeszow: e, sanok: e, sejny: e, skoczow: e, slask: e, slupsk: e, sosnowiec: e, "stalowa-wola": e, starachowice: e, stargard: e, suwalki: e, swidnica: e, swiebodzin: e, swinoujscie: e, szczecin: e, szczytno: e, tarnobrzeg: e, tgory: e, turek: e, tychy: e, ustka: e, walbrzych: e, warmia: e, warszawa: e, waw: e, wegrow: e, wielun: e, wlocl: e, wloclawek: e, wodzislaw: e, wolomin: e, wroclaw: e, zachpomor: e, zagan: e, zarow: e, zgora: e, zgorzelec: e, art: t, gliwice: t, krakow: t, poznan: t, wroc: t, zakopane: t, beep: t, "ecommerce-shop": t, cfolks: t, dfirma: t, dkonto: t, you2: t, shoparena: t, homesklep: t, sdscloud: t, unicloud: t, lodz: t, pabianice: t, plock: t, sieradz: t, skierniewice: t, zgierz: t, krasnik: t, leczna: t, lubartow: t, lublin: t, poniatowa: t, swidnik: t, co: t, torun: t, simplesite: t, myspreadshop: t, gda: t, gdansk: t, gdynia: t, med: t, sopot: t, bielsko: t }], pm: [1, { own: t, name: t }], pn: [1, { co: e, edu: e, gov: e, net: e, org: e }], post: e, pr: [1, { biz: e, com: e, edu: e, gov: e, info: e, isla: e, name: e, net: e, org: e, pro: e, ac: e, est: e, prof: e }], pro: [1, { aaa: e, aca: e, acct: e, avocat: e, bar: e, cpa: e, eng: e, jur: e, law: e, med: e, recht: e, "12chars": t, cloudns: t, barsy: t, ngrok: t }], ps: [1, { com: e, edu: e, gov: e, net: e, org: e, plo: e, sec: e }], pt: [1, { com: e, edu: e, gov: e, int: e, net: e, nome: e, org: e, publ: e, "123paginaweb": t }], pw: [1, { gov: e, cloudns: t, x443: t }], py: [1, { com: e, coop: e, edu: e, gov: e, mil: e, net: e, org: e }], qa: [1, { com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e, sch: e }], re: [1, { asso: e, com: e, netlib: t, can: t }], ro: [1, { arts: e, com: e, firm: e, info: e, nom: e, nt: e, org: e, rec: e, store: e, tm: e, www: e, co: t, shop: t, barsy: t }], rs: [1, { ac: e, co: e, edu: e, gov: e, in: e, org: e, brendly: Dl, barsy: t, ox: t }], ru: [1, { ac: t, edu: t, gov: t, int: t, mil: t, eurodir: t, adygeya: t, bashkiria: t, bir: t, cbg: t, com: t, dagestan: t, grozny: t, kalmykia: t, kustanai: t, marine: t, mordovia: t, msk: t, mytis: t, nalchik: t, nov: t, pyatigorsk: t, spb: t, vladikavkaz: t, vladimir: t, na4u: t, mircloud: t, myjino: [2, { hosting: o, landing: o, spectrum: o, vps: o }], cldmail: [0, { hb: t }], mcdir: [2, { vps: t }], mcpre: t, net: t, org: t, pp: t, lk3: t, ras: t }], rw: [1, { ac: e, co: e, coop: e, gov: e, mil: e, net: e, org: e }], sa: [1, { com: e, edu: e, gov: e, med: e, net: e, org: e, pub: e, sch: e }], sb: n, sc: n, sd: [1, { com: e, edu: e, gov: e, info: e, med: e, net: e, org: e, tv: e }], se: [1, { a: e, ac: e, b: e, bd: e, brand: e, c: e, d: e, e, f: e, fh: e, fhsk: e, fhv: e, g: e, h: e, i: e, k: e, komforb: e, kommunalforbund: e, komvux: e, l: e, lanbib: e, m: e, n: e, naturbruksgymn: e, o: e, org: e, p: e, parti: e, pp: e, press: e, r: e, s: e, t: e, tm: e, u: e, w: e, x: e, y: e, z: e, com: t, iopsys: t, "123minsida": t, itcouldbewor: t, myspreadshop: t }], sg: [1, { com: e, edu: e, gov: e, net: e, org: e, enscaled: t }], sh: [1, { com: e, gov: e, mil: e, net: e, org: e, hashbang: t, botda: t, platform: [0, { ent: t, eu: t, us: t }], now: t }], si: [1, { f5: t, gitapp: t, gitpage: t }], sj: e, sk: e, sl: n, sm: e, sn: [1, { art: e, com: e, edu: e, gouv: e, org: e, perso: e, univ: e }], so: [1, { com: e, edu: e, gov: e, me: e, net: e, org: e, surveys: t }], sr: e, ss: [1, { biz: e, co: e, com: e, edu: e, gov: e, me: e, net: e, org: e, sch: e }], st: [1, { co: e, com: e, consulado: e, edu: e, embaixada: e, mil: e, net: e, org: e, principe: e, saotome: e, store: e, helioho: t, kirara: t, noho: t }], su: [1, { abkhazia: t, adygeya: t, aktyubinsk: t, arkhangelsk: t, armenia: t, ashgabad: t, azerbaijan: t, balashov: t, bashkiria: t, bryansk: t, bukhara: t, chimkent: t, dagestan: t, "east-kazakhstan": t, exnet: t, georgia: t, grozny: t, ivanovo: t, jambyl: t, kalmykia: t, kaluga: t, karacol: t, karaganda: t, karelia: t, khakassia: t, krasnodar: t, kurgan: t, kustanai: t, lenug: t, mangyshlak: t, mordovia: t, msk: t, murmansk: t, nalchik: t, navoi: t, "north-kazakhstan": t, nov: t, obninsk: t, penza: t, pokrovsk: t, sochi: t, spb: t, tashkent: t, termez: t, togliatti: t, troitsk: t, tselinograd: t, tula: t, tuva: t, vladikavkaz: t, vladimir: t, vologda: t }], sv: [1, { com: e, edu: e, gob: e, org: e, red: e }], sx: c, sy: r, sz: [1, { ac: e, co: e, org: e }], tc: e, td: e, tel: e, tf: [1, { sch: t }], tg: e, th: [1, { ac: e, co: e, go: e, in: e, mi: e, net: e, or: e, online: t, shop: t }], tj: [1, { ac: e, biz: e, co: e, com: e, edu: e, go: e, gov: e, int: e, mil: e, name: e, net: e, nic: e, org: e, test: e, web: e }], tk: e, tl: c, tm: [1, { co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e }], tn: [1, { com: e, ens: e, fin: e, gov: e, ind: e, info: e, intl: e, mincom: e, nat: e, net: e, org: e, perso: e, tourism: e, orangecloud: t }], to: [1, { 611: t, com: e, edu: e, gov: e, mil: e, net: e, org: e, oya: t, x0: t, quickconnect: j, vpnplus: t }], tr: [1, { av: e, bbs: e, bel: e, biz: e, com: e, dr: e, edu: e, gen: e, gov: e, info: e, k12: e, kep: e, mil: e, name: e, net: e, org: e, pol: e, tel: e, tsk: e, tv: e, web: e, nc: c }], tt: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }], tv: [1, { "better-than": t, dyndns: t, "on-the-web": t, "worse-than": t, from: t, sakura: t }], tw: [1, { club: e, com: [1, { mymailer: t }], ebiz: e, edu: e, game: e, gov: e, idv: e, mil: e, net: e, org: e, url: t, mydns: t }], tz: [1, { ac: e, co: e, go: e, hotel: e, info: e, me: e, mil: e, mobi: e, ne: e, or: e, sc: e, tv: e }], ua: [1, { com: e, edu: e, gov: e, in: e, net: e, org: e, cherkassy: e, cherkasy: e, chernigov: e, chernihiv: e, chernivtsi: e, chernovtsy: e, ck: e, cn: e, cr: e, crimea: e, cv: e, dn: e, dnepropetrovsk: e, dnipropetrovsk: e, donetsk: e, dp: e, if: e, "ivano-frankivsk": e, kh: e, kharkiv: e, kharkov: e, kherson: e, khmelnitskiy: e, khmelnytskyi: e, kiev: e, kirovograd: e, km: e, kr: e, kropyvnytskyi: e, krym: e, ks: e, kv: e, kyiv: e, lg: e, lt: e, lugansk: e, luhansk: e, lutsk: e, lv: e, lviv: e, mk: e, mykolaiv: e, nikolaev: e, od: e, odesa: e, odessa: e, pl: e, poltava: e, rivne: e, rovno: e, rv: e, sb: e, sebastopol: e, sevastopol: e, sm: e, sumy: e, te: e, ternopil: e, uz: e, uzhgorod: e, uzhhorod: e, vinnica: e, vinnytsia: e, vn: e, volyn: e, yalta: e, zakarpattia: e, zaporizhzhe: e, zaporizhzhia: e, zhitomir: e, zhytomyr: e, zp: e, zt: e, cc: t, inf: t, ltd: t, cx: t, ie: t, biz: t, co: t, pp: t, v: t }], ug: [1, { ac: e, co: e, com: e, edu: e, go: e, gov: e, mil: e, ne: e, or: e, org: e, sc: e, us: e }], uk: [1, { ac: e, co: [1, { bytemark: [0, { dh: t, vm: t }], layershift: G, barsy: t, barsyonline: t, retrosnub: Pl, "nh-serv": t, "no-ip": t, adimo: t, myspreadshop: t }], gov: [1, { api: t, campaign: t, service: t }], ltd: e, me: e, net: e, nhs: e, org: [1, { glug: t, lug: t, lugs: t, affinitylottery: t, raffleentry: t, weeklylottery: t }], plc: e, police: e, sch: g, conn: t, copro: t, hosp: t, "independent-commission": t, "independent-inquest": t, "independent-inquiry": t, "independent-panel": t, "independent-review": t, "public-inquiry": t, "royal-commission": t, pymnt: t, barsy: t, nimsite: t, oraclegovcloudapps: o }], us: [1, { dni: e, isa: e, nsn: e, ak: W, al: W, ar: W, as: W, az: W, ca: W, co: W, ct: W, dc: W, de: [1, { cc: e, lib: t }], fl: W, ga: W, gu: W, hi: ro, ia: W, id: W, il: W, in: W, ks: W, ky: W, la: W, ma: [1, { k12: [1, { chtr: e, paroch: e, pvt: e }], cc: e, lib: e }], md: W, me: W, mi: [1, { k12: e, cc: e, lib: e, "ann-arbor": e, cog: e, dst: e, eaton: e, gen: e, mus: e, tec: e, washtenaw: e }], mn: W, mo: W, ms: W, mt: W, nc: W, nd: ro, ne: W, nh: W, nj: W, nm: W, nv: W, ny: W, oh: W, ok: W, or: W, pa: W, pr: W, ri: ro, sc: W, sd: ro, tn: W, tx: W, ut: W, va: W, vi: W, vt: W, wa: W, wi: W, wv: [1, { cc: e }], wy: W, cloudns: t, "is-by": t, "land-4-sale": t, "stuff-4-sale": t, heliohost: t, enscaled: [0, { phx: t }], mircloud: t, ngo: t, golffan: t, noip: t, pointto: t, freeddns: t, srv: [2, { gh: t, gl: t }], platterp: t, servername: t }], uy: [1, { com: e, edu: e, gub: e, mil: e, net: e, org: e }], uz: [1, { co: e, com: e, net: e, org: e }], va: e, vc: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, gv: [2, { d: t }], "0e": o, mydns: t }], ve: [1, { arts: e, bib: e, co: e, com: e, e12: e, edu: e, emprende: e, firm: e, gob: e, gov: e, info: e, int: e, mil: e, net: e, nom: e, org: e, rar: e, rec: e, store: e, tec: e, web: e }], vg: [1, { edu: e }], vi: [1, { co: e, com: e, k12: e, net: e, org: e }], vn: [1, { ac: e, ai: e, biz: e, com: e, edu: e, gov: e, health: e, id: e, info: e, int: e, io: e, name: e, net: e, org: e, pro: e, angiang: e, bacgiang: e, backan: e, baclieu: e, bacninh: e, "baria-vungtau": e, bentre: e, binhdinh: e, binhduong: e, binhphuoc: e, binhthuan: e, camau: e, cantho: e, caobang: e, daklak: e, daknong: e, danang: e, dienbien: e, dongnai: e, dongthap: e, gialai: e, hagiang: e, haiduong: e, haiphong: e, hanam: e, hanoi: e, hatinh: e, haugiang: e, hoabinh: e, hungyen: e, khanhhoa: e, kiengiang: e, kontum: e, laichau: e, lamdong: e, langson: e, laocai: e, longan: e, namdinh: e, nghean: e, ninhbinh: e, ninhthuan: e, phutho: e, phuyen: e, quangbinh: e, quangnam: e, quangngai: e, quangninh: e, quangtri: e, soctrang: e, sonla: e, tayninh: e, thaibinh: e, thainguyen: e, thanhhoa: e, thanhphohochiminh: e, thuathienhue: e, tiengiang: e, travinh: e, tuyenquang: e, vinhlong: e, vinhphuc: e, yenbai: e }], vu: J, wf: [1, { biz: t, sch: t }], ws: [1, { com: e, edu: e, gov: e, net: e, org: e, advisor: o, cloud66: t, dyndns: t, mypets: t }], yt: [1, { org: t }], "xn--mgbaam7a8h": e, امارات: e, "xn--y9a3aq": e, հայ: e, "xn--54b7fta0cc": e, বাংলা: e, "xn--90ae": e, бг: e, "xn--mgbcpq6gpa1a": e, البحرين: e, "xn--90ais": e, бел: e, "xn--fiqs8s": e, 中国: e, "xn--fiqz9s": e, 中國: e, "xn--lgbbat1ad8j": e, الجزائر: e, "xn--wgbh1c": e, مصر: e, "xn--e1a4c": e, ею: e, "xn--qxa6a": e, ευ: e, "xn--mgbah1a3hjkrd": e, موريتانيا: e, "xn--node": e, გე: e, "xn--qxam": e, ελ: e, "xn--j6w193g": [1, { "xn--gmqw5a": e, "xn--55qx5d": e, "xn--mxtq1m": e, "xn--wcvs22d": e, "xn--uc0atv": e, "xn--od0alg": e }], 香港: [1, { 個人: e, 公司: e, 政府: e, 教育: e, 組織: e, 網絡: e }], "xn--2scrj9c": e, ಭಾರತ: e, "xn--3hcrj9c": e, ଭାରତ: e, "xn--45br5cyl": e, ভাৰত: e, "xn--h2breg3eve": e, भारतम्: e, "xn--h2brj9c8c": e, भारोत: e, "xn--mgbgu82a": e, ڀارت: e, "xn--rvc1e0am3e": e, ഭാരതം: e, "xn--h2brj9c": e, भारत: e, "xn--mgbbh1a": e, بارت: e, "xn--mgbbh1a71e": e, بھارت: e, "xn--fpcrj9c3d": e, భారత్: e, "xn--gecrj9c": e, ભારત: e, "xn--s9brj9c": e, ਭਾਰਤ: e, "xn--45brj9c": e, ভারত: e, "xn--xkc2dl3a5ee0h": e, இந்தியா: e, "xn--mgba3a4f16a": e, ایران: e, "xn--mgba3a4fra": e, ايران: e, "xn--mgbtx2b": e, عراق: e, "xn--mgbayh7gpa": e, الاردن: e, "xn--3e0b707e": e, 한국: e, "xn--80ao21a": e, қаз: e, "xn--q7ce6a": e, ລາວ: e, "xn--fzc2c9e2c": e, ලංකා: e, "xn--xkc2al3hye2a": e, இலங்கை: e, "xn--mgbc0a9azcg": e, المغرب: e, "xn--d1alf": e, мкд: e, "xn--l1acc": e, мон: e, "xn--mix891f": e, 澳門: e, "xn--mix082f": e, 澳门: e, "xn--mgbx4cd0ab": e, مليسيا: e, "xn--mgb9awbf": e, عمان: e, "xn--mgbai9azgqp6j": e, پاکستان: e, "xn--mgbai9a5eva00b": e, پاكستان: e, "xn--ygbi2ammx": e, فلسطين: e, "xn--90a3ac": [1, { "xn--80au": e, "xn--90azh": e, "xn--d1at": e, "xn--c1avg": e, "xn--o1ac": e, "xn--o1ach": e }], срб: [1, { ак: e, обр: e, од: e, орг: e, пр: e, упр: e }], "xn--p1ai": e, рф: e, "xn--wgbl6a": e, قطر: e, "xn--mgberp4a5d4ar": e, السعودية: e, "xn--mgberp4a5d4a87g": e, السعودیة: e, "xn--mgbqly7c0a67fbc": e, السعودیۃ: e, "xn--mgbqly7cvafr": e, السعوديه: e, "xn--mgbpl2fh": e, سودان: e, "xn--yfro4i67o": e, 新加坡: e, "xn--clchc0ea0b2g2a9gcd": e, சிங்கப்பூர்: e, "xn--ogbpf8fl": e, سورية: e, "xn--mgbtf8fl": e, سوريا: e, "xn--o3cw4h": [1, { "xn--o3cyx2a": e, "xn--12co0c3b4eva": e, "xn--m3ch0j3a": e, "xn--h3cuzk1di": e, "xn--12c1fe0br": e, "xn--12cfi8ixb8l": e }], ไทย: [1, { ทหาร: e, ธุรกิจ: e, เน็ต: e, รัฐบาล: e, ศึกษา: e, องค์กร: e }], "xn--pgbs0dh": e, تونس: e, "xn--kpry57d": e, 台灣: e, "xn--kprw13d": e, 台湾: e, "xn--nnx388a": e, 臺灣: e, "xn--j1amh": e, укр: e, "xn--mgb2ddes": e, اليمن: e, xxx: e, ye: r, za: [0, { ac: e, agric: e, alt: e, co: e, edu: e, gov: e, grondar: e, law: e, mil: e, net: e, ngo: e, nic: e, nis: e, nom: e, org: e, school: e, tm: e, web: e }], zm: [1, { ac: e, biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, net: e, org: e, sch: e }], zw: [1, { ac: e, co: e, gov: e, mil: e, org: e }], aaa: e, aarp: e, abb: e, abbott: e, abbvie: e, abc: e, able: e, abogado: e, abudhabi: e, academy: [1, { official: t }], accenture: e, accountant: e, accountants: e, aco: e, actor: e, ads: e, adult: e, aeg: e, aetna: e, afl: e, africa: e, agakhan: e, agency: e, aig: e, airbus: e, airforce: e, airtel: e, akdn: e, alibaba: e, alipay: e, allfinanz: e, allstate: e, ally: e, alsace: e, alstom: e, amazon: e, americanexpress: e, americanfamily: e, amex: e, amfam: e, amica: e, amsterdam: e, analytics: e, android: e, anquan: e, anz: e, aol: e, apartments: e, app: [1, { adaptable: t, aiven: t, beget: o, brave: i, clerk: t, clerkstage: t, wnext: t, csb: [2, { preview: t }], convex: t, deta: t, ondigitalocean: t, easypanel: t, encr: t, evervault: s, expo: [2, { staging: t }], edgecompute: t, "on-fleek": t, flutterflow: t, e2b: t, framer: t, hosted: o, run: o, web: t, hasura: t, botdash: t, loginline: t, lovable: t, medusajs: t, messerli: t, netfy: t, netlify: t, ngrok: t, "ngrok-free": t, developer: o, noop: t, northflank: o, upsun: o, replit: l, nyat: t, snowflake: [0, { "*": t, privatelink: o }], streamlit: t, storipress: t, telebit: t, typedream: t, vercel: t, bookonline: t, wdh: t, windsurf: t, zeabur: t, zerops: o }], apple: e, aquarelle: e, arab: e, aramco: e, archi: e, army: e, art: e, arte: e, asda: e, associates: e, athleta: e, attorney: e, auction: e, audi: e, audible: e, audio: e, auspost: e, author: e, auto: e, autos: e, aws: [1, { sagemaker: [0, { "ap-northeast-1": p, "ap-northeast-2": p, "ap-south-1": p, "ap-southeast-1": p, "ap-southeast-2": p, "ca-central-1": h, "eu-central-1": p, "eu-west-1": p, "eu-west-2": p, "us-east-1": h, "us-east-2": h, "us-west-2": h, "af-south-1": d, "ap-east-1": d, "ap-northeast-3": d, "ap-south-2": f, "ap-southeast-3": d, "ap-southeast-4": f, "ca-west-1": [0, { notebook: t, "notebook-fips": t }], "eu-central-2": d, "eu-north-1": d, "eu-south-1": d, "eu-south-2": d, "eu-west-3": d, "il-central-1": d, "me-central-1": d, "me-south-1": d, "sa-east-1": d, "us-gov-east-1": m, "us-gov-west-1": m, "us-west-1": [0, { notebook: t, "notebook-fips": t, studio: t }], experiments: o }], repost: [0, { private: o }], on: [0, { "ap-northeast-1": u, "ap-southeast-1": u, "ap-southeast-2": u, "eu-central-1": u, "eu-north-1": u, "eu-west-1": u, "us-east-1": u, "us-east-2": u, "us-west-2": u }] }], axa: e, azure: e, baby: e, baidu: e, banamex: e, band: e, bank: e, bar: e, barcelona: e, barclaycard: e, barclays: e, barefoot: e, bargains: e, baseball: e, basketball: [1, { aus: t, nz: t }], bauhaus: e, bayern: e, bbc: e, bbt: e, bbva: e, bcg: e, bcn: e, beats: e, beauty: e, beer: e, bentley: e, berlin: e, best: e, bestbuy: e, bet: e, bharti: e, bible: e, bid: e, bike: e, bing: e, bingo: e, bio: e, black: e, blackfriday: e, blockbuster: e, blog: e, bloomberg: e, blue: e, bms: e, bmw: e, bnpparibas: e, boats: e, boehringer: e, bofa: e, bom: e, bond: e, boo: e, book: e, booking: e, bosch: e, bostik: e, boston: e, bot: e, boutique: e, box: e, bradesco: e, bridgestone: e, broadway: e, broker: e, brother: e, brussels: e, build: [1, { v0: t, windsurf: t }], builders: [1, { cloudsite: t }], business: y, buy: e, buzz: e, bzh: e, cab: e, cafe: e, cal: e, call: e, calvinklein: e, cam: e, camera: e, camp: [1, { emf: [0, { at: t }] }], canon: e, capetown: e, capital: e, capitalone: e, car: e, caravan: e, cards: e, care: e, career: e, careers: e, cars: e, casa: [1, { nabu: [0, { ui: t }] }], case: e, cash: e, casino: e, catering: e, catholic: e, cba: e, cbn: e, cbre: e, center: e, ceo: e, cern: e, cfa: e, cfd: e, chanel: e, channel: e, charity: e, chase: e, chat: e, cheap: e, chintai: e, christmas: e, chrome: e, church: e, cipriani: e, circle: e, cisco: e, citadel: e, citi: e, citic: e, city: e, claims: e, cleaning: e, click: e, clinic: e, clinique: e, clothing: e, cloud: [1, { convex: t, elementor: t, encoway: [0, { eu: t }], statics: o, ravendb: t, axarnet: [0, { "es-1": t }], diadem: t, jelastic: [0, { vip: t }], jele: t, "jenv-aruba": [0, { aruba: [0, { eur: [0, { it1: t }] }], it1: t }], keliweb: [2, { cs: t }], oxa: [2, { tn: t, uk: t }], primetel: [2, { uk: t }], reclaim: [0, { ca: t, uk: t, us: t }], trendhosting: [0, { ch: t, de: t }], jotelulu: t, kuleuven: t, laravel: t, linkyard: t, magentosite: o, matlab: t, observablehq: t, perspecta: t, vapor: t, "on-rancher": o, scw: [0, { baremetal: [0, { "fr-par-1": t, "fr-par-2": t, "nl-ams-1": t }], "fr-par": [0, { cockpit: t, fnc: [2, { functions: t }], k8s: w, s3: t, "s3-website": t, whm: t }], instances: [0, { priv: t, pub: t }], k8s: t, "nl-ams": [0, { cockpit: t, k8s: w, s3: t, "s3-website": t, whm: t }], "pl-waw": [0, { cockpit: t, k8s: w, s3: t, "s3-website": t }], scalebook: t, smartlabeling: t }], servebolt: t, onstackit: [0, { runs: t }], trafficplex: t, "unison-services": t, urown: t, voorloper: t, zap: t }], club: [1, { cloudns: t, jele: t, barsy: t }], clubmed: e, coach: e, codes: [1, { owo: o }], coffee: e, college: e, cologne: e, commbank: e, community: [1, { nog: t, ravendb: t, myforum: t }], company: e, compare: e, computer: e, comsec: e, condos: e, construction: e, consulting: e, contact: e, contractors: e, cooking: e, cool: [1, { elementor: t, de: t }], corsica: e, country: e, coupon: e, coupons: e, courses: e, cpa: e, credit: e, creditcard: e, creditunion: e, cricket: e, crown: e, crs: e, cruise: e, cruises: e, cuisinella: e, cymru: e, cyou: e, dad: e, dance: e, data: e, date: e, dating: e, datsun: e, day: e, dclk: e, dds: e, deal: e, dealer: e, deals: e, degree: e, delivery: e, dell: e, deloitte: e, delta: e, democrat: e, dental: e, dentist: e, desi: e, design: [1, { graphic: t, bss: t }], dev: [1, { "12chars": t, myaddr: t, panel: t, lcl: o, lclstage: o, stg: o, stgstage: o, pages: t, r2: t, workers: t, deno: t, "deno-staging": t, deta: t, evervault: s, fly: t, githubpreview: t, gateway: o, hrsn: [2, { psl: [0, { sub: t, wc: [0, { "*": t, sub: o }] }] }], botdash: t, inbrowser: o, "is-a-good": t, "is-a": t, iserv: t, runcontainers: t, localcert: [0, { user: o }], loginline: t, barsy: t, mediatech: t, modx: t, ngrok: t, "ngrok-free": t, "is-a-fullstack": t, "is-cool": t, "is-not-a": t, localplayer: t, xmit: t, "platter-app": t, replit: [2, { archer: t, bones: t, canary: t, global: t, hacker: t, id: t, janeway: t, kim: t, kira: t, kirk: t, odo: t, paris: t, picard: t, pike: t, prerelease: t, reed: t, riker: t, sisko: t, spock: t, staging: t, sulu: t, tarpit: t, teams: t, tucker: t, wesley: t, worf: t }], crm: [0, { d: o, w: o, wa: o, wb: o, wc: o, wd: o, we: o, wf: o }], vercel: t, webhare: o }], dhl: e, diamonds: e, diet: e, digital: [1, { cloudapps: [2, { london: t }] }], direct: [1, { libp2p: t }], directory: e, discount: e, discover: e, dish: e, diy: e, dnp: e, docs: e, doctor: e, dog: e, domains: e, dot: e, download: e, drive: e, dtv: e, dubai: e, dunlop: e, dupont: e, durban: e, dvag: e, dvr: e, earth: e, eat: e, eco: e, edeka: e, education: y, email: [1, { crisp: [0, { on: t }], tawk: Ze, tawkto: Ze }], emerck: e, energy: e, engineer: e, engineering: e, enterprises: e, epson: e, equipment: e, ericsson: e, erni: e, esq: e, estate: [1, { compute: o }], eurovision: e, eus: [1, { party: Il }], events: [1, { koobin: t, co: t }], exchange: e, expert: e, exposed: e, express: e, extraspace: e, fage: e, fail: e, fairwinds: e, faith: e, family: e, fan: e, fans: e, farm: [1, { storj: t }], farmers: e, fashion: e, fast: e, fedex: e, feedback: e, ferrari: e, ferrero: e, fidelity: e, fido: e, film: e, final: e, finance: e, financial: y, fire: e, firestone: e, firmdale: e, fish: e, fishing: e, fit: e, fitness: e, flickr: e, flights: e, flir: e, florist: e, flowers: e, fly: e, foo: e, food: e, football: e, ford: e, forex: e, forsale: e, forum: e, foundation: e, fox: e, free: e, fresenius: e, frl: e, frogans: e, frontier: e, ftr: e, fujitsu: e, fun: e, fund: e, furniture: e, futbol: e, fyi: e, gal: e, gallery: e, gallo: e, gallup: e, game: e, games: [1, { pley: t, sheezy: t }], gap: e, garden: e, gay: [1, { pages: t }], gbiz: e, gdn: [1, { cnpy: t }], gea: e, gent: e, genting: e, george: e, ggee: e, gift: e, gifts: e, gives: e, giving: e, glass: e, gle: e, global: [1, { appwrite: t }], globo: e, gmail: e, gmbh: e, gmo: e, gmx: e, godaddy: e, gold: e, goldpoint: e, golf: e, goo: e, goodyear: e, goog: [1, { cloud: t, translate: t, usercontent: o }], google: e, gop: e, got: e, grainger: e, graphics: e, gratis: e, green: e, gripe: e, grocery: e, group: [1, { discourse: t }], gucci: e, guge: e, guide: e, guitars: e, guru: e, hair: e, hamburg: e, hangout: e, haus: e, hbo: e, hdfc: e, hdfcbank: e, health: [1, { hra: t }], healthcare: e, help: e, helsinki: e, here: e, hermes: e, hiphop: e, hisamitsu: e, hitachi: e, hiv: e, hkt: e, hockey: e, holdings: e, holiday: e, homedepot: e, homegoods: e, homes: e, homesense: e, honda: e, horse: e, hospital: e, host: [1, { cloudaccess: t, freesite: t, easypanel: t, fastvps: t, myfast: t, tempurl: t, wpmudev: t, jele: t, mircloud: t, wp2: t, half: t }], hosting: [1, { opencraft: t }], hot: e, hotels: e, hotmail: e, house: e, how: e, hsbc: e, hughes: e, hyatt: e, hyundai: e, ibm: e, icbc: e, ice: e, icu: e, ieee: e, ifm: e, ikano: e, imamat: e, imdb: e, immo: e, immobilien: e, inc: e, industries: e, infiniti: e, ing: e, ink: e, institute: e, insurance: e, insure: e, international: e, intuit: e, investments: e, ipiranga: e, irish: e, ismaili: e, ist: e, istanbul: e, itau: e, itv: e, jaguar: e, java: e, jcb: e, jeep: e, jetzt: e, jewelry: e, jio: e, jll: e, jmp: e, jnj: e, joburg: e, jot: e, joy: e, jpmorgan: e, jprs: e, juegos: e, juniper: e, kaufen: e, kddi: e, kerryhotels: e, kerryproperties: e, kfh: e, kia: e, kids: e, kim: e, kindle: e, kitchen: e, kiwi: e, koeln: e, komatsu: e, kosher: e, kpmg: e, kpn: e, krd: [1, { co: t, edu: t }], kred: e, kuokgroup: e, kyoto: e, lacaixa: e, lamborghini: e, lamer: e, lancaster: e, land: e, landrover: e, lanxess: e, lasalle: e, lat: e, latino: e, latrobe: e, law: e, lawyer: e, lds: e, lease: e, leclerc: e, lefrak: e, legal: e, lego: e, lexus: e, lgbt: e, lidl: e, life: e, lifeinsurance: e, lifestyle: e, lighting: e, like: e, lilly: e, limited: e, limo: e, lincoln: e, link: [1, { myfritz: t, cyon: t, dweb: o, inbrowser: o, nftstorage: Fi, mypep: t, storacha: Fi, w3s: Fi }], live: [1, { aem: t, hlx: t, ewp: o }], living: e, llc: e, llp: e, loan: e, loans: e, locker: e, locus: e, lol: [1, { omg: t }], london: e, lotte: e, lotto: e, love: e, lpl: e, lplfinancial: e, ltd: e, ltda: e, lundbeck: e, luxe: e, luxury: e, madrid: e, maif: e, maison: e, makeup: e, man: e, management: e, mango: e, map: e, market: e, marketing: e, markets: e, marriott: e, marshalls: e, mattel: e, mba: e, mckinsey: e, med: e, media: no, meet: e, melbourne: e, meme: e, memorial: e, men: e, menu: [1, { barsy: t, barsyonline: t }], merck: e, merckmsd: e, miami: e, microsoft: e, mini: e, mint: e, mit: e, mitsubishi: e, mlb: e, mls: e, mma: e, mobile: e, moda: e, moe: e, moi: e, mom: [1, { ind: t }], monash: e, money: e, monster: e, mormon: e, mortgage: e, moscow: e, moto: e, motorcycles: e, mov: e, movie: e, msd: e, mtn: e, mtr: e, music: e, nab: e, nagoya: e, navy: e, nba: e, nec: e, netbank: e, netflix: e, network: [1, { alces: o, co: t, arvo: t, azimuth: t, tlon: t }], neustar: e, new: e, news: [1, { noticeable: t }], next: e, nextdirect: e, nexus: e, nfl: e, ngo: e, nhk: e, nico: e, nike: e, nikon: e, ninja: e, nissan: e, nissay: e, nokia: e, norton: e, now: e, nowruz: e, nowtv: e, nra: e, nrw: e, ntt: e, nyc: e, obi: e, observer: e, office: e, okinawa: e, olayan: e, olayangroup: e, ollo: e, omega: e, one: [1, { kin: o, service: t }], ong: [1, { obl: t }], onl: e, online: [1, { eero: t, "eero-stage": t, websitebuilder: t, barsy: t }], ooo: e, open: e, oracle: e, orange: [1, { tech: t }], organic: e, origins: e, osaka: e, otsuka: e, ott: e, ovh: [1, { nerdpol: t }], page: [1, { aem: t, hlx: t, hlx3: t, translated: t, codeberg: t, heyflow: t, prvcy: t, rocky: t, pdns: t, plesk: t }], panasonic: e, paris: e, pars: e, partners: e, parts: e, party: e, pay: e, pccw: e, pet: e, pfizer: e, pharmacy: e, phd: e, philips: e, phone: e, photo: e, photography: e, photos: no, physio: e, pics: e, pictet: e, pictures: [1, { 1337: t }], pid: e, pin: e, ping: e, pink: e, pioneer: e, pizza: [1, { ngrok: t }], place: y, play: e, playstation: e, plumbing: e, plus: e, pnc: e, pohl: e, poker: e, politie: e, porn: e, pramerica: e, praxi: e, press: e, prime: e, prod: e, productions: e, prof: e, progressive: e, promo: e, properties: e, property: e, protection: e, pru: e, prudential: e, pub: [1, { id: o, kin: o, barsy: t }], pwc: e, qpon: e, quebec: e, quest: e, racing: e, radio: e, read: e, realestate: e, realtor: e, realty: e, recipes: e, red: e, redstone: e, redumbrella: e, rehab: e, reise: e, reisen: e, reit: e, reliance: e, ren: e, rent: e, rentals: e, repair: e, report: e, republican: e, rest: e, restaurant: e, review: e, reviews: e, rexroth: e, rich: e, richardli: e, ricoh: e, ril: e, rio: e, rip: [1, { clan: t }], rocks: [1, { myddns: t, stackit: t, "lima-city": t, webspace: t }], rodeo: e, rogers: e, room: e, rsvp: e, rugby: e, ruhr: e, run: [1, { appwrite: o, development: t, ravendb: t, liara: [2, { iran: t }], servers: t, build: o, code: o, database: o, migration: o, onporter: t, repl: t, stackit: t, val: [0, { express: t, web: t }], wix: t }], rwe: e, ryukyu: e, saarland: e, safe: e, safety: e, sakura: e, sale: e, salon: e, samsclub: e, samsung: e, sandvik: e, sandvikcoromant: e, sanofi: e, sap: e, sarl: e, sas: e, save: e, saxo: e, sbi: e, sbs: e, scb: e, schaeffler: e, schmidt: e, scholarships: e, school: e, schule: e, schwarz: e, science: e, scot: [1, { gov: [2, { service: t }] }], search: e, seat: e, secure: e, security: e, seek: e, select: e, sener: e, services: [1, { loginline: t }], seven: e, sew: e, sex: e, sexy: e, sfr: e, shangrila: e, sharp: e, shell: e, shia: e, shiksha: e, shoes: e, shop: [1, { base: t, hoplix: t, barsy: t, barsyonline: t, shopware: t }], shopping: e, shouji: e, show: e, silk: e, sina: e, singles: e, site: [1, { square: t, canva: b, cloudera: o, convex: t, cyon: t, fastvps: t, figma: t, heyflow: t, jele: t, jouwweb: t, loginline: t, barsy: t, notion: t, omniwe: t, opensocial: t, madethis: t, platformsh: o, tst: o, byen: t, srht: t, novecore: t, cpanel: t, wpsquared: t }], ski: e, skin: e, sky: e, skype: e, sling: e, smart: e, smile: e, sncf: e, soccer: e, social: e, softbank: e, software: e, sohu: e, solar: e, solutions: e, song: e, sony: e, soy: e, spa: e, space: [1, { myfast: t, heiyu: t, hf: [2, { static: t }], "app-ionos": t, project: t, uber: t, xs4all: t }], sport: e, spot: e, srl: e, stada: e, staples: e, star: e, statebank: e, statefarm: e, stc: e, stcgroup: e, stockholm: e, storage: e, store: [1, { barsy: t, sellfy: t, shopware: t, storebase: t }], stream: e, studio: e, study: e, style: e, sucks: e, supplies: e, supply: e, support: [1, { barsy: t }], surf: e, surgery: e, suzuki: e, swatch: e, swiss: e, sydney: e, systems: [1, { knightpoint: t }], tab: e, taipei: e, talk: e, taobao: e, target: e, tatamotors: e, tatar: e, tattoo: e, tax: e, taxi: e, tci: e, tdk: e, team: [1, { discourse: t, jelastic: t }], tech: [1, { cleverapps: t }], technology: y, temasek: e, tennis: e, teva: e, thd: e, theater: e, theatre: e, tiaa: e, tickets: e, tienda: e, tips: e, tires: e, tirol: e, tjmaxx: e, tjx: e, tkmaxx: e, tmall: e, today: [1, { prequalifyme: t }], tokyo: e, tools: [1, { addr: Z, myaddr: t }], top: [1, { ntdll: t, wadl: o }], toray: e, toshiba: e, total: e, tours: e, town: e, toyota: e, toys: e, trade: e, trading: e, training: e, travel: e, travelers: e, travelersinsurance: e, trust: e, trv: e, tube: e, tui: e, tunes: e, tushu: e, tvs: e, ubank: e, ubs: e, unicom: e, university: e, uno: e, uol: e, ups: e, vacations: e, vana: e, vanguard: e, vegas: e, ventures: e, verisign: e, versicherung: e, vet: e, viajes: e, video: e, vig: e, viking: e, villas: e, vin: e, vip: e, virgin: e, visa: e, vision: e, viva: e, vivo: e, vlaanderen: e, vodka: e, volvo: e, vote: e, voting: e, voto: e, voyage: e, wales: e, walmart: e, walter: e, wang: e, wanggou: e, watch: e, watches: e, weather: e, weatherchannel: e, webcam: e, weber: e, website: no, wed: e, wedding: e, weibo: e, weir: e, whoswho: e, wien: e, wiki: no, williamhill: e, win: e, windows: e, wine: e, winners: e, wme: e, wolterskluwer: e, woodside: e, work: e, works: e, world: e, wow: e, wtc: e, wtf: e, xbox: e, xerox: e, xihuan: e, xin: e, "xn--11b4c3d": e, कॉम: e, "xn--1ck2e1b": e, セール: e, "xn--1qqw23a": e, 佛山: e, "xn--30rr7y": e, 慈善: e, "xn--3bst00m": e, 集团: e, "xn--3ds443g": e, 在线: e, "xn--3pxu8k": e, 点看: e, "xn--42c2d9a": e, คอม: e, "xn--45q11c": e, 八卦: e, "xn--4gbrim": e, موقع: e, "xn--55qw42g": e, 公益: e, "xn--55qx5d": e, 公司: e, "xn--5su34j936bgsg": e, 香格里拉: e, "xn--5tzm5g": e, 网站: e, "xn--6frz82g": e, 移动: e, "xn--6qq986b3xl": e, 我爱你: e, "xn--80adxhks": e, москва: e, "xn--80aqecdr1a": e, католик: e, "xn--80asehdb": e, онлайн: e, "xn--80aswg": e, сайт: e, "xn--8y0a063a": e, 联通: e, "xn--9dbq2a": e, קום: e, "xn--9et52u": e, 时尚: e, "xn--9krt00a": e, 微博: e, "xn--b4w605ferd": e, 淡马锡: e, "xn--bck1b9a5dre4c": e, ファッション: e, "xn--c1avg": e, орг: e, "xn--c2br7g": e, नेट: e, "xn--cck2b3b": e, ストア: e, "xn--cckwcxetd": e, アマゾン: e, "xn--cg4bki": e, 삼성: e, "xn--czr694b": e, 商标: e, "xn--czrs0t": e, 商店: e, "xn--czru2d": e, 商城: e, "xn--d1acj3b": e, дети: e, "xn--eckvdtc9d": e, ポイント: e, "xn--efvy88h": e, 新闻: e, "xn--fct429k": e, 家電: e, "xn--fhbei": e, كوم: e, "xn--fiq228c5hs": e, 中文网: e, "xn--fiq64b": e, 中信: e, "xn--fjq720a": e, 娱乐: e, "xn--flw351e": e, 谷歌: e, "xn--fzys8d69uvgm": e, 電訊盈科: e, "xn--g2xx48c": e, 购物: e, "xn--gckr3f0f": e, クラウド: e, "xn--gk3at1e": e, 通販: e, "xn--hxt814e": e, 网店: e, "xn--i1b6b1a6a2e": e, संगठन: e, "xn--imr513n": e, 餐厅: e, "xn--io0a7i": e, 网络: e, "xn--j1aef": e, ком: e, "xn--jlq480n2rg": e, 亚马逊: e, "xn--jvr189m": e, 食品: e, "xn--kcrx77d1x4a": e, 飞利浦: e, "xn--kput3i": e, 手机: e, "xn--mgba3a3ejt": e, ارامكو: e, "xn--mgba7c0bbn0a": e, العليان: e, "xn--mgbab2bd": e, بازار: e, "xn--mgbca7dzdo": e, ابوظبي: e, "xn--mgbi4ecexp": e, كاثوليك: e, "xn--mgbt3dhd": e, همراه: e, "xn--mk1bu44c": e, 닷컴: e, "xn--mxtq1m": e, 政府: e, "xn--ngbc5azd": e, شبكة: e, "xn--ngbe9e0a": e, بيتك: e, "xn--ngbrx": e, عرب: e, "xn--nqv7f": e, 机构: e, "xn--nqv7fs00ema": e, 组织机构: e, "xn--nyqy26a": e, 健康: e, "xn--otu796d": e, 招聘: e, "xn--p1acf": [1, { "xn--90amc": t, "xn--j1aef": t, "xn--j1ael8b": t, "xn--h1ahn": t, "xn--j1adp": t, "xn--c1avg": t, "xn--80aaa0cvac": t, "xn--h1aliz": t, "xn--90a1af": t, "xn--41a": t }], рус: [1, { биз: t, ком: t, крым: t, мир: t, мск: t, орг: t, самара: t, сочи: t, спб: t, я: t }], "xn--pssy2u": e, 大拿: e, "xn--q9jyb4c": e, みんな: e, "xn--qcka1pmc": e, グーグル: e, "xn--rhqv96g": e, 世界: e, "xn--rovu88b": e, 書籍: e, "xn--ses554g": e, 网址: e, "xn--t60b56a": e, 닷넷: e, "xn--tckwe": e, コム: e, "xn--tiq49xqyj": e, 天主教: e, "xn--unup4y": e, 游戏: e, "xn--vermgensberater-ctb": e, vermögensberater: e, "xn--vermgensberatung-pwb": e, vermögensberatung: e, "xn--vhquv": e, 企业: e, "xn--vuq861b": e, 信息: e, "xn--w4r85el8fhu5dnra": e, 嘉里大酒店: e, "xn--w4rs40l": e, 嘉里: e, "xn--xhq521b": e, 广东: e, "xn--zfr164b": e, 政务: e, xyz: [1, { botdash: t, telebit: o }], yachts: e, yahoo: e, yamaxun: e, yandex: e, yodobashi: e, yoga: e, yokohama: e, you: e, youtube: e, yun: e, zappos: e, zara: e, zero: e, zip: e, zone: [1, { cloud66: t, triton: o, stackit: t, lima: t }], zuerich: e }];
}();
function $u(e, t, n, r) {
  let o = null, i = t;
  for (; i !== void 0 && ((i[0] & r) !== 0 && (o = {
    index: n + 1,
    isIcann: i[0] === 1,
    isPrivate: i[0] === 2
  }), n !== -1); ) {
    const s = i[1];
    i = Object.prototype.hasOwnProperty.call(s, e[n]) ? s[e[n]] : s["*"], n -= 1;
  }
  return o;
}
function cr(e, t, n) {
  var r;
  if (iC(e, t, n))
    return;
  const o = e.split("."), i = (t.allowPrivateDomains ? 2 : 0) | (t.allowIcannDomains ? 1 : 0), s = $u(o, sC, o.length - 1, i);
  if (s !== null) {
    n.isIcann = s.isIcann, n.isPrivate = s.isPrivate, n.publicSuffix = o.slice(s.index + 1).join(".");
    return;
  }
  const l = $u(o, aC, o.length - 1, i);
  if (l !== null) {
    n.isIcann = l.isIcann, n.isPrivate = l.isPrivate, n.publicSuffix = o.slice(l.index).join(".");
    return;
  }
  n.isIcann = !1, n.isPrivate = !1, n.publicSuffix = (r = o[o.length - 1]) !== null && r !== void 0 ? r : null;
}
const ct = lp();
function lC(e, t = {}) {
  return lr(e, 5, cr, t, lp());
}
function cC(e, t = {}) {
  return eo(ct), lr(e, 0, cr, t, ct).hostname;
}
function uC(e, t = {}) {
  return eo(ct), lr(e, 2, cr, t, ct).publicSuffix;
}
function dC(e, t = {}) {
  return eo(ct), lr(e, 3, cr, t, ct).domain;
}
function fC(e, t = {}) {
  return eo(ct), lr(e, 4, cr, t, ct).subdomain;
}
function hC(e, t = {}) {
  return eo(ct), lr(e, 5, cr, t, ct).domainWithoutSuffix;
}
const pC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDomain: dC,
  getDomainWithoutSuffix: hC,
  getHostname: cC,
  getPublicSuffix: uC,
  getSubdomain: fC,
  parse: lC
}, Symbol.toStringTag, { value: "Module" })), gC = /* @__PURE__ */ Kp(pC);
var Iu;
function Di() {
  if (Iu) return xo;
  Iu = 1, Object.defineProperty(xo, "__esModule", { value: !0 }), xo.getPublicSuffix = o;
  const e = gC, t = ["local", "example", "invalid", "localhost", "test"], n = ["localhost", "invalid"], r = {
    allowSpecialUseDomain: !1,
    ignoreError: !1
  };
  function o(i, s = {}) {
    s = { ...r, ...s };
    const l = i.split("."), c = l[l.length - 1], u = !!s.allowSpecialUseDomain, d = !!s.ignoreError;
    if (u && c !== void 0 && t.includes(c)) {
      if (l.length > 1)
        return `${l[l.length - 2]}.${c}`;
      if (n.includes(c))
        return c;
    }
    if (!d && c !== void 0 && t.includes(c))
      throw new Error(`Cookie has domain set to the public suffix "${c}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
    const p = (0, e.getDomain)(i, {
      allowIcannDomains: !0,
      allowPrivateDomains: !0
    });
    if (p)
      return p;
  }
  return xo;
}
var Du;
function cp() {
  if (Du) return vo;
  Du = 1, Object.defineProperty(vo, "__esModule", { value: !0 }), vo.permuteDomain = t;
  const e = Di();
  function t(n, r) {
    const o = (0, e.getPublicSuffix)(n, {
      allowSpecialUseDomain: r
    });
    if (!o)
      return;
    if (o == n)
      return [n];
    n.slice(-1) == "." && (n = n.slice(0, -1));
    const s = n.slice(0, -(o.length + 1)).split(".").reverse();
    let l = o;
    const c = [l];
    for (; s.length; )
      l = `${s.shift()}.${l}`, c.push(l);
    return c;
  }
  return vo;
}
var gr = {}, Pu;
function vl() {
  if (Pu) return gr;
  Pu = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.Store = void 0;
  class e {
    constructor() {
      this.synchronous = !1;
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookie(n, r, o, i) {
      throw new Error("findCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookies(n, r, o = !1, i) {
      throw new Error("findCookies is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    putCookie(n, r) {
      throw new Error("putCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    updateCookie(n, r, o) {
      throw new Error("updateCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookie(n, r, o, i) {
      throw new Error("removeCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookies(n, r, o) {
      throw new Error("removeCookies is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeAllCookies(n) {
      throw new Error("removeAllCookies is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getAllCookies(n) {
      throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
    }
  }
  return gr.Store = e, gr;
}
var cs = {}, zu;
function Pi() {
  return zu || (zu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.safeToString = e.objectToString = void 0, e.createPromiseCallback = i, e.inOperator = s;
    const t = (l) => Object.prototype.toString.call(l);
    e.objectToString = t;
    const n = (l, c) => typeof l.join != "function" ? (0, e.objectToString)(l) : (c.add(l), l.map((d) => d == null || c.has(d) ? "" : r(d, c)).join()), r = (l, c = /* @__PURE__ */ new WeakSet()) => typeof l != "object" || l === null ? String(l) : typeof l.toString == "function" ? Array.isArray(l) ? (
      // Arrays have a weird custom toString that we need to replicate
      n(l, c)
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      String(l)
    ) : (0, e.objectToString)(l), o = (l) => r(l);
    e.safeToString = o;
    function i(l) {
      let c, u, d;
      const p = new Promise((f, h) => {
        u = f, d = h;
      });
      return typeof l == "function" ? c = (f, h) => {
        try {
          f ? l(f) : l(null, h);
        } catch (m) {
          d(m instanceof Error ? m : new Error());
        }
      } : c = (f, h) => {
        try {
          f ? d(f) : u(h);
        } catch (m) {
          d(m instanceof Error ? m : new Error());
        }
      }, {
        promise: p,
        callback: c,
        resolve: (f) => (c(null, f), p),
        reject: (f) => (c(f), p)
      };
    }
    function s(l, c) {
      return l in c;
    }
  }(cs)), cs;
}
var Au;
function up() {
  if (Au) return pr;
  Au = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.MemoryCookieStore = void 0;
  const e = yl(), t = cp(), n = vl(), r = Pi();
  class o extends n.Store {
    /**
     * Create a new {@link MemoryCookieStore}.
     */
    constructor() {
      super(), this.synchronous = !0, this.idx = /* @__PURE__ */ Object.create(null);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookie(s, l, c, u) {
      var f, h;
      const d = (0, r.createPromiseCallback)(u);
      if (s == null || l == null || c == null)
        return d.resolve(void 0);
      const p = (h = (f = this.idx[s]) == null ? void 0 : f[l]) == null ? void 0 : h[c];
      return d.resolve(p);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookies(s, l, c = !1, u) {
      typeof c == "function" && (u = c, c = !0);
      const d = [], p = (0, r.createPromiseCallback)(u);
      if (!s)
        return p.resolve([]);
      let f;
      l ? f = function(y) {
        for (const v in y)
          if ((0, e.pathMatch)(l, v)) {
            const w = y[v];
            for (const b in w) {
              const k = w[b];
              k && d.push(k);
            }
          }
      } : f = function(y) {
        for (const v in y) {
          const w = y[v];
          for (const b in w) {
            const k = w[b];
            k && d.push(k);
          }
        }
      };
      const h = (0, t.permuteDomain)(s, c) || [s], m = this.idx;
      return h.forEach((g) => {
        const y = m[g];
        y && f(y);
      }), p.resolve(d);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    putCookie(s, l) {
      const c = (0, r.createPromiseCallback)(l), { domain: u, path: d, key: p } = s;
      if (u == null || d == null || p == null)
        return c.resolve(void 0);
      const f = this.idx[u] ?? /* @__PURE__ */ Object.create(null);
      this.idx[u] = f;
      const h = f[d] ?? /* @__PURE__ */ Object.create(null);
      return f[d] = h, h[p] = s, c.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    updateCookie(s, l, c) {
      if (c)
        this.putCookie(l, c);
      else
        return this.putCookie(l);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookie(s, l, c, u) {
      var p, f;
      const d = (0, r.createPromiseCallback)(u);
      return (f = (p = this.idx[s]) == null ? void 0 : p[l]) == null || delete f[c], d.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookies(s, l, c) {
      const u = (0, r.createPromiseCallback)(c), d = this.idx[s];
      return d && (l ? delete d[l] : delete this.idx[s]), u.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeAllCookies(s) {
      const l = (0, r.createPromiseCallback)(s);
      return this.idx = /* @__PURE__ */ Object.create(null), l.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getAllCookies(s) {
      const l = (0, r.createPromiseCallback)(s), c = [], u = this.idx;
      return Object.keys(u).forEach((p) => {
        const f = u[p] ?? {};
        Object.keys(f).forEach((m) => {
          const g = f[m] ?? {};
          Object.keys(g).forEach((v) => {
            const w = g[v];
            w != null && c.push(w);
          });
        });
      }), c.sort((p, f) => (p.creationIndex || 0) - (f.creationIndex || 0)), l.resolve(c);
    }
  }
  return pr.MemoryCookieStore = o, pr;
}
var Fe = {}, Ru;
function Zo() {
  if (Ru) return Fe;
  Ru = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.ParameterError = void 0, Fe.isNonEmptyString = t, Fe.isDate = n, Fe.isEmptyString = r, Fe.isString = o, Fe.isObject = i, Fe.isInteger = s, Fe.validate = l;
  const e = Pi();
  function t(u) {
    return o(u) && u !== "";
  }
  function n(u) {
    return u instanceof Date && s(u.getTime());
  }
  function r(u) {
    return u === "" || u instanceof String && u.toString() === "";
  }
  function o(u) {
    return typeof u == "string" || u instanceof String;
  }
  function i(u) {
    return (0, e.objectToString)(u) === "[object Object]";
  }
  function s(u) {
    return typeof u == "number" && u % 1 === 0;
  }
  function l(u, d, p) {
    if (u)
      return;
    const f = typeof d == "function" ? d : void 0;
    let h = typeof d == "function" ? p : d;
    i(h) || (h = "[object Object]");
    const m = new c((0, e.safeToString)(h));
    if (f)
      f(m);
    else
      throw m;
  }
  class c extends Error {
  }
  return Fe.ParameterError = c, Fe;
}
var mr = {}, Nu;
function dp() {
  return Nu || (Nu = 1, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.version = void 0, mr.version = "5.1.2"), mr;
}
var bo = {}, us = {}, Mu;
function xl() {
  return Mu || (Mu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IP_V6_REGEX_OBJECT = e.PrefixSecurityEnum = void 0, e.PrefixSecurityEnum = {
      SILENT: "silent",
      STRICT: "strict",
      DISABLED: "unsafe-disabled"
    }, Object.freeze(e.PrefixSecurityEnum);
    const t = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
    e.IP_V6_REGEX_OBJECT = new RegExp(`^${t}$`);
  }(us)), us;
}
var qu;
function zi() {
  if (qu) return bo;
  qu = 1, Object.defineProperty(bo, "__esModule", { value: !0 }), bo.canonicalDomain = n;
  const e = xl();
  function t(r) {
    return new URL(`http://${r}`).hostname;
  }
  function n(r) {
    if (r == null)
      return;
    let o = r.trim().replace(/^\./, "");
    return e.IP_V6_REGEX_OBJECT.test(o) ? (o.startsWith("[") || (o = "[" + o), o.endsWith("]") || (o = o + "]"), t(o).slice(1, -1)) : /[^\u0001-\u007f]/.test(o) ? t(o) : o.toLowerCase();
  }
  return bo;
}
var Ue = {}, ko = {}, Fu;
function fp() {
  if (Fu) return ko;
  Fu = 1, Object.defineProperty(ko, "__esModule", { value: !0 }), ko.formatDate = e;
  function e(t) {
    return t.toUTCString();
  }
  return ko;
}
var wo = {}, Lu;
function hp() {
  if (Lu) return wo;
  Lu = 1, Object.defineProperty(wo, "__esModule", { value: !0 }), wo.parseDate = i;
  const e = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, t = {
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
  function n(s, l, c, u) {
    let d = 0;
    for (; d < s.length; ) {
      const p = s.charCodeAt(d);
      if (p <= 47 || p >= 58)
        break;
      d++;
    }
    if (!(d < l || d > c) && !(!u && d != s.length))
      return parseInt(s.slice(0, d), 10);
  }
  function r(s) {
    const l = s.split(":"), c = [0, 0, 0];
    if (l.length === 3) {
      for (let u = 0; u < 3; u++) {
        const d = u == 2, p = l[u];
        if (p === void 0)
          return;
        const f = n(p, 1, 2, d);
        if (f === void 0)
          return;
        c[u] = f;
      }
      return c;
    }
  }
  function o(s) {
    switch (s = String(s).slice(0, 3).toLowerCase(), s) {
      case "jan":
        return t.jan;
      case "feb":
        return t.feb;
      case "mar":
        return t.mar;
      case "apr":
        return t.apr;
      case "may":
        return t.may;
      case "jun":
        return t.jun;
      case "jul":
        return t.jul;
      case "aug":
        return t.aug;
      case "sep":
        return t.sep;
      case "oct":
        return t.oct;
      case "nov":
        return t.nov;
      case "dec":
        return t.dec;
      default:
        return;
    }
  }
  function i(s) {
    if (!s)
      return;
    const l = s.split(e);
    let c, u, d, p, f, h;
    for (let m = 0; m < l.length; m++) {
      const g = (l[m] ?? "").trim();
      if (g.length) {
        if (d === void 0) {
          const y = r(g);
          if (y) {
            c = y[0], u = y[1], d = y[2];
            continue;
          }
        }
        if (p === void 0) {
          const y = n(g, 1, 2, !0);
          if (y !== void 0) {
            p = y;
            continue;
          }
        }
        if (f === void 0) {
          const y = o(g);
          if (y !== void 0) {
            f = y;
            continue;
          }
        }
        if (h === void 0) {
          const y = n(g, 2, 4, !0);
          y !== void 0 && (h = y, h >= 70 && h <= 99 ? h += 1900 : h >= 0 && h <= 69 && (h += 2e3));
        }
      }
    }
    if (!(p === void 0 || f === void 0 || h === void 0 || c === void 0 || u === void 0 || d === void 0 || p < 1 || p > 31 || h < 1601 || c > 23 || u > 59 || d > 59))
      return new Date(Date.UTC(h, f, p, c, u, d));
  }
  return wo;
}
var Bu;
function Ys() {
  if (Bu) return Ue;
  Bu = 1;
  var e = Ue && Ue.__createBinding || (Object.create ? function(b, k, E, j) {
    j === void 0 && (j = E);
    var _ = Object.getOwnPropertyDescriptor(k, E);
    (!_ || ("get" in _ ? !k.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
      return k[E];
    } }), Object.defineProperty(b, j, _);
  } : function(b, k, E, j) {
    j === void 0 && (j = E), b[j] = k[E];
  }), t = Ue && Ue.__setModuleDefault || (Object.create ? function(b, k) {
    Object.defineProperty(b, "default", { enumerable: !0, value: k });
  } : function(b, k) {
    b.default = k;
  }), n = Ue && Ue.__importStar || function(b) {
    if (b && b.__esModule) return b;
    var k = {};
    if (b != null) for (var E in b) E !== "default" && Object.prototype.hasOwnProperty.call(b, E) && e(k, b, E);
    return t(k, b), k;
  };
  Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.Cookie = void 0;
  /*!
   * Copyright (c) 2015-2020, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   */
  const r = Di(), o = n(Zo()), i = Pi(), s = fp(), l = hp(), c = zi(), u = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, d = /[\x20-\x3A\x3C-\x7E]+/, p = /[\x00-\x1F]/, f = [`
`, "\r", "\0"];
  function h(b) {
    if (o.isEmptyString(b))
      return b;
    for (let k = 0; k < f.length; k++) {
      const E = f[k], j = E ? b.indexOf(E) : -1;
      j !== -1 && (b = b.slice(0, j));
    }
    return b;
  }
  function m(b, k) {
    b = h(b);
    let E = b.indexOf("=");
    if (k)
      E === 0 && (b = b.substring(1), E = b.indexOf("="));
    else if (E <= 0)
      return;
    let j, _;
    if (E <= 0 ? (j = "", _ = b.trim()) : (j = b.slice(0, E).trim(), _ = b.slice(E + 1).trim()), p.test(j) || p.test(_))
      return;
    const $ = new w();
    return $.key = j, $.value = _, $;
  }
  function g(b, k) {
    if (o.isEmptyString(b) || !o.isString(b))
      return;
    b = b.trim();
    const E = b.indexOf(";"), j = E === -1 ? b : b.slice(0, E), _ = m(j, (k == null ? void 0 : k.loose) ?? !1);
    if (!_)
      return;
    if (E === -1)
      return _;
    const $ = b.slice(E + 1).trim();
    if ($.length === 0)
      return _;
    const D = $.split(";");
    for (; D.length; ) {
      const O = (D.shift() ?? "").trim();
      if (O.length === 0)
        continue;
      const C = O.indexOf("=");
      let I, T;
      switch (C === -1 ? (I = O, T = null) : (I = O.slice(0, C), T = O.slice(C + 1)), I = I.trim().toLowerCase(), T && (T = T.trim()), I) {
        case "expires":
          if (T) {
            const A = (0, l.parseDate)(T);
            A && (_.expires = A);
          }
          break;
        case "max-age":
          if (T && /^-?[0-9]+$/.test(T)) {
            const A = parseInt(T, 10);
            _.setMaxAge(A);
          }
          break;
        case "domain":
          if (T) {
            const A = T.trim().replace(/^\./, "");
            A && (_.domain = A.toLowerCase());
          }
          break;
        case "path":
          _.path = T && T[0] === "/" ? T : null;
          break;
        case "secure":
          _.secure = !0;
          break;
        case "httponly":
          _.httpOnly = !0;
          break;
        case "samesite":
          switch (T ? T.toLowerCase() : "") {
            case "strict":
              _.sameSite = "strict";
              break;
            case "lax":
              _.sameSite = "lax";
              break;
            case "none":
              _.sameSite = "none";
              break;
            default:
              _.sameSite = void 0;
              break;
          }
          break;
        default:
          _.extensions = _.extensions || [], _.extensions.push(O);
          break;
      }
    }
    return _;
  }
  function y(b) {
    if (!b || o.isEmptyString(b))
      return;
    let k;
    if (typeof b == "string")
      try {
        k = JSON.parse(b);
      } catch {
        return;
      }
    else
      k = b;
    const E = new w();
    return w.serializableProperties.forEach((j) => {
      if (k && typeof k == "object" && (0, i.inOperator)(j, k)) {
        const _ = k[j];
        if (_ === void 0 || (0, i.inOperator)(j, v) && _ === v[j])
          return;
        switch (j) {
          case "key":
          case "value":
          case "sameSite":
            typeof _ == "string" && (E[j] = _);
            break;
          case "expires":
          case "creation":
          case "lastAccessed":
            typeof _ == "number" || typeof _ == "string" || _ instanceof Date ? E[j] = k[j] == "Infinity" ? "Infinity" : new Date(_) : _ === null && (E[j] = null);
            break;
          case "maxAge":
            (typeof _ == "number" || _ === "Infinity" || _ === "-Infinity") && (E[j] = _);
            break;
          case "domain":
          case "path":
            (typeof _ == "string" || _ === null) && (E[j] = _);
            break;
          case "secure":
          case "httpOnly":
            typeof _ == "boolean" && (E[j] = _);
            break;
          case "extensions":
            Array.isArray(_) && _.every(($) => typeof $ == "string") && (E[j] = _);
            break;
          case "hostOnly":
          case "pathIsDefault":
            (typeof _ == "boolean" || _ === null) && (E[j] = _);
            break;
        }
      }
    }), E;
  }
  const v = {
    // the order in which the RFC has them:
    key: "",
    value: "",
    expires: "Infinity",
    maxAge: null,
    domain: null,
    path: null,
    secure: !1,
    httpOnly: !1,
    extensions: null,
    // set by the CookieJar:
    hostOnly: null,
    pathIsDefault: null,
    creation: null,
    lastAccessed: null,
    sameSite: void 0
  };
  class w {
    /**
     * Create a new Cookie instance.
     * @public
     * @param options - The attributes to set on the cookie
     */
    constructor(k = {}) {
      this.key = k.key ?? v.key, this.value = k.value ?? v.value, this.expires = k.expires ?? v.expires, this.maxAge = k.maxAge ?? v.maxAge, this.domain = k.domain ?? v.domain, this.path = k.path ?? v.path, this.secure = k.secure ?? v.secure, this.httpOnly = k.httpOnly ?? v.httpOnly, this.extensions = k.extensions ?? v.extensions, this.creation = k.creation ?? v.creation, this.hostOnly = k.hostOnly ?? v.hostOnly, this.pathIsDefault = k.pathIsDefault ?? v.pathIsDefault, this.lastAccessed = k.lastAccessed ?? v.lastAccessed, this.sameSite = k.sameSite ?? v.sameSite, this.creation = k.creation ?? /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
        configurable: !1,
        enumerable: !1,
        // important for assert.deepEqual checks
        writable: !0,
        value: ++w.cookiesCreated
      }), this.creationIndex = w.cookiesCreated;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      const k = Date.now(), E = this.hostOnly != null ? this.hostOnly.toString() : "?", j = this.creation && this.creation !== "Infinity" ? `${String(k - this.creation.getTime())}ms` : "?", _ = this.lastAccessed && this.lastAccessed !== "Infinity" ? `${String(k - this.lastAccessed.getTime())}ms` : "?";
      return `Cookie="${this.toString()}; hostOnly=${E}; aAge=${_}; cAge=${j}"`;
    }
    /**
     * For convenience in using `JSON.stringify(cookie)`. Returns a plain-old Object that can be JSON-serialized.
     *
     * @remarks
     * - Any `Date` properties (such as {@link Cookie.expires}, {@link Cookie.creation}, and {@link Cookie.lastAccessed}) are exported in ISO format (`Date.toISOString()`).
     *
     *  - Custom Cookie properties are discarded. In tough-cookie 1.x, since there was no {@link Cookie.toJSON} method explicitly defined, all enumerable properties were captured.
     *      If you want a property to be serialized, add the property name to {@link Cookie.serializableProperties}.
     */
    toJSON() {
      const k = {};
      for (const E of w.serializableProperties) {
        const j = this[E];
        if (j !== v[E])
          switch (E) {
            case "key":
            case "value":
            case "sameSite":
              typeof j == "string" && (k[E] = j);
              break;
            case "expires":
            case "creation":
            case "lastAccessed":
              typeof j == "number" || typeof j == "string" || j instanceof Date ? k[E] = j == "Infinity" ? "Infinity" : new Date(j).toISOString() : j === null && (k[E] = null);
              break;
            case "maxAge":
              (typeof j == "number" || j === "Infinity" || j === "-Infinity") && (k[E] = j);
              break;
            case "domain":
            case "path":
              (typeof j == "string" || j === null) && (k[E] = j);
              break;
            case "secure":
            case "httpOnly":
              typeof j == "boolean" && (k[E] = j);
              break;
            case "extensions":
              Array.isArray(j) && (k[E] = j);
              break;
            case "hostOnly":
            case "pathIsDefault":
              (typeof j == "boolean" || j === null) && (k[E] = j);
              break;
          }
      }
      return k;
    }
    /**
     * Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.
     * @public
     */
    clone() {
      return y(this.toJSON());
    }
    /**
     * Validates cookie attributes for semantic correctness. Useful for "lint" checking any `Set-Cookie` headers you generate.
     * For now, it returns a boolean, but eventually could return a reason string.
     *
     * @remarks
     * Works for a few things, but is by no means comprehensive.
     *
     * @beta
     */
    validate() {
      if (!this.value || !u.test(this.value) || this.expires != "Infinity" && !(this.expires instanceof Date) && !(0, l.parseDate)(this.expires) || this.maxAge != null && this.maxAge !== "Infinity" && (this.maxAge === "-Infinity" || this.maxAge <= 0) || this.path != null && !d.test(this.path))
        return !1;
      const k = this.cdomain();
      return !(k && (k.match(/\.$/) || (0, r.getPublicSuffix)(k) == null));
    }
    /**
     * Sets the 'Expires' attribute on a cookie.
     *
     * @remarks
     * When given a `string` value it will be parsed with {@link parseDate}. If the value can't be parsed as a cookie date
     * then the 'Expires' attribute will be set to `"Infinity"`.
     *
     * @param exp - the new value for the 'Expires' attribute of the cookie.
     */
    setExpires(k) {
      k instanceof Date ? this.expires = k : this.expires = (0, l.parseDate)(k) || "Infinity";
    }
    /**
     * Sets the 'Max-Age' attribute (in seconds) on a cookie.
     *
     * @remarks
     * Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it can be serialized to JSON.
     *
     * @param age - the new value for the 'Max-Age' attribute (in seconds).
     */
    setMaxAge(k) {
      k === 1 / 0 ? this.maxAge = "Infinity" : k === -1 / 0 ? this.maxAge = "-Infinity" : this.maxAge = k;
    }
    /**
     * Encodes to a `Cookie` header value (specifically, the {@link Cookie.key} and {@link Cookie.value} properties joined with "=").
     * @public
     */
    cookieString() {
      const k = this.value || "";
      return this.key ? `${this.key}=${k}` : k;
    }
    /**
     * Encodes to a `Set-Cookie header` value.
     * @public
     */
    toString() {
      let k = this.cookieString();
      return this.expires != "Infinity" && this.expires instanceof Date && (k += `; Expires=${(0, s.formatDate)(this.expires)}`), this.maxAge != null && this.maxAge != 1 / 0 && (k += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (k += `; Domain=${this.domain}`), this.path && (k += `; Path=${this.path}`), this.secure && (k += "; Secure"), this.httpOnly && (k += "; HttpOnly"), this.sameSite && this.sameSite !== "none" && (this.sameSite.toLowerCase() === w.sameSiteCanonical.lax.toLowerCase() ? k += `; SameSite=${w.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === w.sameSiteCanonical.strict.toLowerCase() ? k += `; SameSite=${w.sameSiteCanonical.strict}` : k += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((E) => {
        k += `; ${E}`;
      }), k;
    }
    /**
     * Computes the TTL relative to now (milliseconds).
     *
     * @remarks
     * - `Infinity` is returned for cookies without an explicit expiry
     *
     * - `0` is returned if the cookie is expired.
     *
     * - Otherwise a time-to-live in milliseconds is returned.
     *
     * @param now - passing an explicit value is mostly used for testing purposes since this defaults to the `Date.now()`
     * @public
     */
    TTL(k = Date.now()) {
      if (this.maxAge != null && typeof this.maxAge == "number")
        return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
      const E = this.expires;
      return E === "Infinity" ? 1 / 0 : ((E == null ? void 0 : E.getTime()) ?? k) - (k || Date.now());
    }
    /**
     * Computes the absolute unix-epoch milliseconds that this cookie expires.
     *
     * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
     * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
     *
     * If Expires ({@link Cookie.expires}) is set, that's returned.
     *
     * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
     */
    expiryTime(k) {
      if (this.maxAge != null) {
        const E = k || this.lastAccessed || /* @__PURE__ */ new Date(), j = typeof this.maxAge == "number" ? this.maxAge : -1 / 0, _ = j <= 0 ? -1 / 0 : j * 1e3;
        return E === "Infinity" ? 1 / 0 : E.getTime() + _;
      }
      return this.expires == "Infinity" ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
    }
    /**
     * Similar to {@link Cookie.expiryTime}, computes the absolute unix-epoch milliseconds that this cookie expires and returns it as a Date.
     *
     * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
     * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
     *
     * If Expires ({@link Cookie.expires}) is set, that's returned.
     *
     * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
     */
    expiryDate(k) {
      const E = this.expiryTime(k);
      return E == 1 / 0 ? /* @__PURE__ */ new Date(2147483647e3) : E == -1 / 0 ? /* @__PURE__ */ new Date(0) : E == null ? void 0 : new Date(E);
    }
    /**
     * Indicates if the cookie has been persisted to a store or not.
     * @public
     */
    isPersistent() {
      return this.maxAge != null || this.expires != "Infinity";
    }
    /**
     * Calls {@link canonicalDomain} with the {@link Cookie.domain} property.
     * @public
     */
    canonicalizedDomain() {
      return (0, c.canonicalDomain)(this.domain);
    }
    /**
     * Alias for {@link Cookie.canonicalizedDomain}
     * @public
     */
    cdomain() {
      return (0, c.canonicalDomain)(this.domain);
    }
    /**
     * Parses a string into a Cookie object.
     *
     * @remarks
     * Note: when parsing a `Cookie` header it must be split by ';' before each Cookie string can be parsed.
     *
     * @example
     * ```
     * // parse a `Set-Cookie` header
     * const setCookieHeader = 'a=bcd; Expires=Tue, 18 Oct 2011 07:05:03 GMT'
     * const cookie = Cookie.parse(setCookieHeader)
     * cookie.key === 'a'
     * cookie.value === 'bcd'
     * cookie.expires === new Date(Date.parse('Tue, 18 Oct 2011 07:05:03 GMT'))
     * ```
     *
     * @example
     * ```
     * // parse a `Cookie` header
     * const cookieHeader = 'name=value; name2=value2; name3=value3'
     * const cookies = cookieHeader.split(';').map(Cookie.parse)
     * cookies[0].name === 'name'
     * cookies[0].value === 'value'
     * cookies[1].name === 'name2'
     * cookies[1].value === 'value2'
     * cookies[2].name === 'name3'
     * cookies[2].value === 'value3'
     * ```
     *
     * @param str - The `Set-Cookie` header or a Cookie string to parse.
     * @param options - Configures `strict` or `loose` mode for cookie parsing
     */
    static parse(k, E) {
      return g(k, E);
    }
    /**
     * Does the reverse of {@link Cookie.toJSON}.
     *
     * @remarks
     * Any Date properties (such as .expires, .creation, and .lastAccessed) are parsed via Date.parse, not tough-cookie's parseDate, since ISO timestamps are being handled at this layer.
     *
     * @example
     * ```
     * const json = JSON.stringify({
     *   key: 'alpha',
     *   value: 'beta',
     *   domain: 'example.com',
     *   path: '/foo',
     *   expires: '2038-01-19T03:14:07.000Z',
     * })
     * const cookie = Cookie.fromJSON(json)
     * cookie.key === 'alpha'
     * cookie.value === 'beta'
     * cookie.domain === 'example.com'
     * cookie.path === '/foo'
     * cookie.expires === new Date(Date.parse('2038-01-19T03:14:07.000Z'))
     * ```
     *
     * @param str - An unparsed JSON string or a value that has already been parsed as JSON
     */
    static fromJSON(k) {
      return y(k);
    }
  }
  return Ue.Cookie = w, w.cookiesCreated = 0, w.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1
  }, w.sameSiteCanonical = {
    strict: "Strict",
    lax: "Lax"
  }, w.serializableProperties = [
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
  ], Ue;
}
var So = {}, Hu;
function pp() {
  if (Hu) return So;
  Hu = 1, Object.defineProperty(So, "__esModule", { value: !0 }), So.cookieCompare = t;
  const e = 2147483647e3;
  function t(n, r) {
    let o;
    const i = n.path ? n.path.length : 0;
    if (o = (r.path ? r.path.length : 0) - i, o !== 0)
      return o;
    const l = n.creation && n.creation instanceof Date ? n.creation.getTime() : e, c = r.creation && r.creation instanceof Date ? r.creation.getTime() : e;
    return o = l - c, o !== 0 || (o = (n.creationIndex || 0) - (r.creationIndex || 0)), o;
  }
  return So;
}
var Ve = {}, jo = {}, Uu;
function gp() {
  if (Uu) return jo;
  Uu = 1, Object.defineProperty(jo, "__esModule", { value: !0 }), jo.defaultPath = e;
  function e(t) {
    if (!t || t.slice(0, 1) !== "/")
      return "/";
    if (t === "/")
      return t;
    const n = t.lastIndexOf("/");
    return n === 0 ? "/" : t.slice(0, n);
  }
  return jo;
}
var Co = {}, Vu;
function mp() {
  if (Vu) return Co;
  Vu = 1, Object.defineProperty(Co, "__esModule", { value: !0 }), Co.domainMatch = n;
  const e = zi(), t = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
  function n(r, o, i) {
    if (r == null || o == null)
      return;
    let s, l;
    if (i !== !1 ? (s = (0, e.canonicalDomain)(r), l = (0, e.canonicalDomain)(o)) : (s = r, l = o), s == null || l == null)
      return;
    if (s == l)
      return !0;
    const c = s.lastIndexOf(l);
    return c <= 0 || s.length !== l.length + c || s.substring(c - 1, c) !== "." ? !1 : !t.test(s);
  }
  return Co;
}
var Wu;
function mC() {
  if (Wu) return Ve;
  Wu = 1;
  var e = Ve && Ve.__createBinding || (Object.create ? function(O, C, I, T) {
    T === void 0 && (T = I);
    var A = Object.getOwnPropertyDescriptor(C, I);
    (!A || ("get" in A ? !C.__esModule : A.writable || A.configurable)) && (A = { enumerable: !0, get: function() {
      return C[I];
    } }), Object.defineProperty(O, T, A);
  } : function(O, C, I, T) {
    T === void 0 && (T = I), O[T] = C[I];
  }), t = Ve && Ve.__setModuleDefault || (Object.create ? function(O, C) {
    Object.defineProperty(O, "default", { enumerable: !0, value: C });
  } : function(O, C) {
    O.default = C;
  }), n = Ve && Ve.__importStar || function(O) {
    if (O && O.__esModule) return O;
    var C = {};
    if (O != null) for (var I in O) I !== "default" && Object.prototype.hasOwnProperty.call(O, I) && e(C, O, I);
    return t(C, O), C;
  };
  Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.CookieJar = void 0;
  const r = Di(), o = n(Zo()), i = Zo(), s = vl(), l = up(), c = yl(), u = Ys(), d = Pi(), p = zi(), f = xl(), h = gp(), m = mp(), g = pp(), y = dp(), v = {
    loose: !1,
    sameSiteContext: void 0,
    ignoreError: !1,
    http: !0
  }, w = {
    http: !0,
    expire: !0,
    allPaths: !1,
    sameSiteContext: void 0,
    sort: void 0
  }, b = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
  function k(O) {
    if (O && typeof O == "object" && "hostname" in O && typeof O.hostname == "string" && "pathname" in O && typeof O.pathname == "string" && "protocol" in O && typeof O.protocol == "string")
      return {
        hostname: O.hostname,
        pathname: O.pathname,
        protocol: O.protocol
      };
    if (typeof O == "string")
      try {
        return new URL(decodeURI(O));
      } catch {
        return new URL(O);
      }
    else
      throw new i.ParameterError("`url` argument is not a string or URL.");
  }
  function E(O) {
    const C = String(O).toLowerCase();
    if (C === "none" || C === "lax" || C === "strict")
      return C;
  }
  function j(O) {
    return !(typeof O.key == "string" && O.key.startsWith("__Secure-")) || O.secure;
  }
  function _(O) {
    return !(typeof O.key == "string" && O.key.startsWith("__Host-")) || !!(O.secure && O.hostOnly && O.path != null && O.path === "/");
  }
  function $(O) {
    const C = O.toLowerCase();
    switch (C) {
      case f.PrefixSecurityEnum.STRICT:
      case f.PrefixSecurityEnum.SILENT:
      case f.PrefixSecurityEnum.DISABLED:
        return C;
      default:
        return f.PrefixSecurityEnum.SILENT;
    }
  }
  class D {
    /**
     * Creates a new `CookieJar` instance.
     *
     * @remarks
     * - If a custom store is not passed to the constructor, an in-memory store ({@link MemoryCookieStore} will be created and used.
     * - If a boolean value is passed as the `options` parameter, this is equivalent to passing `{ rejectPublicSuffixes: <value> }`
     *
     * @param store - a custom {@link Store} implementation (defaults to {@link MemoryCookieStore})
     * @param options - configures how cookies are processed by the cookie jar
     */
    constructor(C, I) {
      typeof I == "boolean" && (I = { rejectPublicSuffixes: I }), this.rejectPublicSuffixes = (I == null ? void 0 : I.rejectPublicSuffixes) ?? !0, this.enableLooseMode = (I == null ? void 0 : I.looseMode) ?? !1, this.allowSpecialUseDomain = (I == null ? void 0 : I.allowSpecialUseDomain) ?? !0, this.prefixSecurity = $((I == null ? void 0 : I.prefixSecurity) ?? "silent"), this.store = C ?? new l.MemoryCookieStore();
    }
    callSync(C) {
      if (!this.store.synchronous)
        throw new Error("CookieJar store is not synchronous; use async API instead.");
      let I = null, T;
      try {
        C.call(this, (A, R) => {
          I = A, T = R;
        });
      } catch (A) {
        I = A;
      }
      if (I)
        throw I;
      return T;
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    setCookie(C, I, T, A) {
      typeof T == "function" && (A = T, T = void 0);
      const R = (0, d.createPromiseCallback)(A), H = R.callback;
      let V;
      try {
        if (typeof I == "string" && o.validate(o.isNonEmptyString(I), A, (0, d.safeToString)(T)), V = k(I), typeof I == "function")
          return R.reject(new Error("No URL was specified"));
        if (typeof T == "function" && (T = v), o.validate(typeof H == "function", H), !o.isNonEmptyString(C) && !o.isObject(C) && C instanceof String && C.length == 0)
          return R.resolve(void 0);
      } catch (J) {
        return R.reject(J);
      }
      const L = (0, p.canonicalDomain)(V.hostname) ?? null, ee = (T == null ? void 0 : T.loose) || this.enableLooseMode;
      let Y = null;
      if (T != null && T.sameSiteContext && (Y = E(T.sameSiteContext), !Y))
        return R.reject(new Error(b));
      if (typeof C == "string" || C instanceof String) {
        const J = u.Cookie.parse(C.toString(), { loose: ee });
        if (!J) {
          const G = new Error("Cookie failed to parse");
          return T != null && T.ignoreError ? R.resolve(void 0) : R.reject(G);
        }
        C = J;
      } else if (!(C instanceof u.Cookie)) {
        const J = new Error("First argument to setCookie must be a Cookie object or string");
        return T != null && T.ignoreError ? R.resolve(void 0) : R.reject(J);
      }
      const se = (T == null ? void 0 : T.now) || /* @__PURE__ */ new Date();
      if (this.rejectPublicSuffixes && C.domain)
        try {
          const J = C.cdomain();
          if ((typeof J == "string" ? (0, r.getPublicSuffix)(J, {
            allowSpecialUseDomain: this.allowSpecialUseDomain,
            ignoreError: T == null ? void 0 : T.ignoreError
          }) : null) == null && !f.IP_V6_REGEX_OBJECT.test(C.domain)) {
            const Z = new Error("Cookie has domain set to a public suffix");
            return T != null && T.ignoreError ? R.resolve(void 0) : R.reject(Z);
          }
        } catch (J) {
          return T != null && T.ignoreError ? R.resolve(void 0) : (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            R.reject(J)
          );
        }
      if (C.domain) {
        if (!(0, m.domainMatch)(L ?? void 0, C.cdomain() ?? void 0, !1)) {
          const J = new Error(`Cookie not in this host's domain. Cookie:${C.cdomain() ?? "null"} Request:${L ?? "null"}`);
          return T != null && T.ignoreError ? R.resolve(void 0) : R.reject(J);
        }
        C.hostOnly == null && (C.hostOnly = !1);
      } else
        C.hostOnly = !0, C.domain = L;
      if ((!C.path || C.path[0] !== "/") && (C.path = (0, h.defaultPath)(V.pathname), C.pathIsDefault = !0), (T == null ? void 0 : T.http) === !1 && C.httpOnly) {
        const J = new Error("Cookie is HttpOnly and this isn't an HTTP API");
        return T.ignoreError ? R.resolve(void 0) : R.reject(J);
      }
      if (C.sameSite !== "none" && C.sameSite !== void 0 && Y && Y === "none") {
        const J = new Error("Cookie is SameSite but this is a cross-origin request");
        return T != null && T.ignoreError ? R.resolve(void 0) : R.reject(J);
      }
      const we = this.prefixSecurity === f.PrefixSecurityEnum.SILENT;
      if (!(this.prefixSecurity === f.PrefixSecurityEnum.DISABLED)) {
        let J = !1, G;
        if (j(C) ? _(C) || (J = !0, G = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (J = !0, G = "Cookie has __Secure prefix but Secure attribute is not set"), J)
          return T != null && T.ignoreError || we ? R.resolve(void 0) : R.reject(new Error(G));
      }
      const be = this.store;
      be.updateCookie || (be.updateCookie = async function(J, G, Z) {
        return this.putCookie(G).then(() => Z == null ? void 0 : Z(null), (he) => Z == null ? void 0 : Z(he));
      });
      const Re = function(G, Z) {
        if (G) {
          H(G);
          return;
        }
        const he = function(Ze) {
          Ze ? H(Ze) : typeof C == "string" ? H(null, void 0) : H(null, C);
        };
        if (Z) {
          if (T && "http" in T && T.http === !1 && Z.httpOnly) {
            G = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), T.ignoreError ? H(null, void 0) : H(G);
            return;
          }
          C instanceof u.Cookie && (C.creation = Z.creation, C.creationIndex = Z.creationIndex, C.lastAccessed = se, be.updateCookie(Z, C, he));
        } else
          C instanceof u.Cookie && (C.creation = C.lastAccessed = se, be.putCookie(C, he));
      };
      return be.findCookie(C.domain, C.path, C.key, Re), R.promise;
    }
    /**
     * Synchronously attempt to set the {@link Cookie} in the {@link CookieJar}.
     *
     * <strong>Note:</strong> Only works if the configured {@link Store} is also synchronous.
     *
     * @remarks
     * - If successfully persisted, the {@link Cookie} will have updated
     *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
     *     properties.
     *
     * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
     *     atttribute on the cookie string. The {@link Cookie.domain} property is set to the
     *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
     *     exact hostname match (not a {@link domainMatch} as per usual)
     *
     * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when storing the cookie.
     * @public
     */
    setCookieSync(C, I, T) {
      const A = T ? this.setCookie.bind(this, C, I, T) : this.setCookie.bind(this, C, I);
      return this.callSync(A);
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getCookies(C, I, T) {
      typeof I == "function" ? (T = I, I = w) : I === void 0 && (I = w);
      const A = (0, d.createPromiseCallback)(T), R = A.callback;
      let H;
      try {
        typeof C == "string" && o.validate(o.isNonEmptyString(C), R, C), H = k(C), o.validate(o.isObject(I), R, (0, d.safeToString)(I)), o.validate(typeof R == "function", R);
      } catch (G) {
        return A.reject(G);
      }
      const V = (0, p.canonicalDomain)(H.hostname), L = H.pathname || "/", ee = H.protocol && (H.protocol == "https:" || H.protocol == "wss:");
      let Y = 0;
      if (I.sameSiteContext) {
        const G = E(I.sameSiteContext);
        if (G == null)
          return A.reject(new Error(b));
        if (Y = u.Cookie.sameSiteLevel[G], !Y)
          return A.reject(new Error(b));
      }
      const se = I.http ?? !0, we = Date.now(), ft = I.expire ?? !0, be = I.allPaths ?? !1, Re = this.store;
      function J(G) {
        if (G.hostOnly) {
          if (G.domain != V)
            return !1;
        } else if (!(0, m.domainMatch)(V ?? void 0, G.domain ?? void 0, !1))
          return !1;
        if (!be && typeof G.path == "string" && !(0, c.pathMatch)(L, G.path) || G.secure && !ee || G.httpOnly && !se)
          return !1;
        if (Y) {
          let he;
          if (G.sameSite === "lax" ? he = u.Cookie.sameSiteLevel.lax : G.sameSite === "strict" ? he = u.Cookie.sameSiteLevel.strict : he = u.Cookie.sameSiteLevel.none, he > Y)
            return !1;
        }
        const Z = G.expiryTime();
        return ft && Z != null && Z <= we ? (Re.removeCookie(G.domain, G.path, G.key, () => {
        }), !1) : !0;
      }
      return Re.findCookies(V, be ? null : L, this.allowSpecialUseDomain, (G, Z) => {
        if (G) {
          R(G);
          return;
        }
        if (Z == null) {
          R(null, []);
          return;
        }
        Z = Z.filter(J), "sort" in I && I.sort !== !1 && (Z = Z.sort(g.cookieCompare));
        const he = /* @__PURE__ */ new Date();
        for (const Ze of Z)
          Ze.lastAccessed = he;
        R(null, Z);
      }), A.promise;
    }
    /**
     * Synchronously retrieve the list of cookies that can be sent in a Cookie header for the
     * current URL.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - The array of cookies returned will be sorted according to {@link cookieCompare}.
     *
     * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookiesSync(C, I) {
      return this.callSync(this.getCookies.bind(this, C, I)) ?? [];
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getCookieString(C, I, T) {
      typeof I == "function" && (T = I, I = void 0);
      const A = (0, d.createPromiseCallback)(T), R = function(H, V) {
        H ? A.callback(H) : A.callback(null, V == null ? void 0 : V.sort(g.cookieCompare).map((L) => L.cookieString()).join("; "));
      };
      return this.getCookies(C, I, R), A.promise;
    }
    /**
     * Synchronous version of `.getCookieString()`. Accepts the same options as `.getCookies()` but returns a string suitable for a
     * `Cookie` header rather than an Array.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookieStringSync(C, I) {
      return this.callSync(I ? this.getCookieString.bind(this, C, I) : this.getCookieString.bind(this, C)) ?? "";
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getSetCookieStrings(C, I, T) {
      typeof I == "function" && (T = I, I = void 0);
      const A = (0, d.createPromiseCallback)(T), R = function(H, V) {
        H ? A.callback(H) : A.callback(null, V == null ? void 0 : V.map((L) => L.toString()));
      };
      return this.getCookies(C, I, R), A.promise;
    }
    /**
     * Synchronous version of `.getSetCookieStrings()`. Returns an array of strings suitable for `Set-Cookie` headers.
     * Accepts the same options as `.getCookies()`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getSetCookieStringsSync(C, I = {}) {
      return this.callSync(this.getSetCookieStrings.bind(this, C, I)) ?? [];
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    serialize(C) {
      const I = (0, d.createPromiseCallback)(C);
      let T = this.store.constructor.name;
      o.isObject(T) && (T = null);
      const A = {
        // The version of tough-cookie that serialized this jar. Generally a good
        // practice since future versions can make data import decisions based on
        // known past behavior. When/if this matters, use `semver`.
        version: `tough-cookie@${y.version}`,
        // add the store type, to make humans happy:
        storeType: T,
        // CookieJar configuration:
        rejectPublicSuffixes: this.rejectPublicSuffixes,
        enableLooseMode: this.enableLooseMode,
        allowSpecialUseDomain: this.allowSpecialUseDomain,
        prefixSecurity: $(this.prefixSecurity),
        // this gets filled from getAllCookies:
        cookies: []
      };
      return typeof this.store.getAllCookies != "function" ? I.reject(new Error("store does not support getAllCookies and cannot be serialized")) : (this.store.getAllCookies((R, H) => {
        if (R) {
          I.callback(R);
          return;
        }
        if (H == null) {
          I.callback(null, A);
          return;
        }
        A.cookies = H.map((V) => {
          const L = V.toJSON();
          return delete L.creationIndex, L;
        }), I.callback(null, A);
      }), I.promise);
    }
    /**
     * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     */
    serializeSync() {
      return this.callSync((C) => {
        this.serialize(C);
      });
    }
    /**
     * Alias of {@link CookieJar.serializeSync}. Allows the cookie to be serialized
     * with `JSON.stringify(cookieJar)`.
     */
    toJSON() {
      return this.serializeSync();
    }
    /**
     * Use the class method CookieJar.deserialize instead of calling this directly
     * @internal
     */
    _importCookies(C, I) {
      let T;
      if (C && typeof C == "object" && (0, d.inOperator)("cookies", C) && Array.isArray(C.cookies) && (T = C.cookies), !T) {
        I(new Error("serialized jar has no cookies array"), void 0);
        return;
      }
      T = T.slice();
      const A = (R) => {
        if (R) {
          I(R, void 0);
          return;
        }
        if (Array.isArray(T)) {
          if (!T.length) {
            I(R, this);
            return;
          }
          let H;
          try {
            H = u.Cookie.fromJSON(T.shift());
          } catch (V) {
            I(V instanceof Error ? V : new Error(), void 0);
            return;
          }
          if (H === void 0) {
            A(null);
            return;
          }
          this.store.putCookie(H, A);
        }
      };
      A(null);
    }
    /**
     * @internal
     */
    _importCookiesSync(C) {
      this.callSync(this._importCookies.bind(this, C));
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    clone(C, I) {
      typeof C == "function" && (I = C, C = void 0);
      const T = (0, d.createPromiseCallback)(I), A = T.callback;
      return this.serialize((R, H) => R ? T.reject(R) : D.deserialize(H ?? "", C, A)), T.promise;
    }
    /**
     * @internal
     */
    _cloneSync(C) {
      const I = C && typeof C != "function" ? this.clone.bind(this, C) : this.clone.bind(this);
      return this.callSync((T) => {
        I(T);
      });
    }
    /**
     * Produces a deep clone of this CookieJar. Modifications to the original do
     * not affect the clone, and vice versa.
     *
     * <strong>Note</strong>: Only works if both the configured Store and destination
     * Store are synchronous.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - Transferring between store types is supported so long as the source
     *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
     *
     * @param newStore - The target {@link Store} to clone cookies into.
     */
    cloneSync(C) {
      if (!C)
        return this._cloneSync();
      if (!C.synchronous)
        throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
      return this._cloneSync(C);
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    removeAllCookies(C) {
      const I = (0, d.createPromiseCallback)(C), T = I.callback, A = this.store;
      return typeof A.removeAllCookies == "function" && A.removeAllCookies !== s.Store.prototype.removeAllCookies ? (A.removeAllCookies(T), I.promise) : (A.getAllCookies((R, H) => {
        if (R) {
          T(R);
          return;
        }
        if (H || (H = []), H.length === 0) {
          T(null, void 0);
          return;
        }
        let V = 0;
        const L = [], ee = function(se) {
          if (se && L.push(se), V++, V === H.length) {
            L[0] ? T(L[0]) : T(null, void 0);
            return;
          }
        };
        H.forEach((Y) => {
          A.removeCookie(Y.domain, Y.path, Y.key, ee);
        });
      }), I.promise);
    }
    /**
     * Removes all cookies from the CookieJar.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - This is a new backwards-compatible feature of tough-cookie version 2.5,
     *     so not all Stores will implement it efficiently. For Stores that do not
     *     implement `removeAllCookies`, the fallback is to call `removeCookie` after
     *     `getAllCookies`.
     *
     * - If `getAllCookies` fails or isn't implemented in the Store, an error is returned.
     *
     * - If one or more of the `removeCookie` calls fail, only the first error is returned.
     */
    removeAllCookiesSync() {
      this.callSync((C) => {
        this.removeAllCookies(C);
      });
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    static deserialize(C, I, T) {
      typeof I == "function" && (T = I, I = void 0);
      const A = (0, d.createPromiseCallback)(T);
      let R;
      if (typeof C == "string")
        try {
          R = JSON.parse(C);
        } catch (Y) {
          return A.reject(Y instanceof Error ? Y : new Error());
        }
      else
        R = C;
      const H = (Y) => R && typeof R == "object" && (0, d.inOperator)(Y, R) ? R[Y] : void 0, V = (Y) => {
        const se = H(Y);
        return typeof se == "boolean" ? se : void 0;
      }, L = (Y) => {
        const se = H(Y);
        return typeof se == "string" ? se : void 0;
      }, ee = new D(I, {
        rejectPublicSuffixes: V("rejectPublicSuffixes"),
        looseMode: V("enableLooseMode"),
        allowSpecialUseDomain: V("allowSpecialUseDomain"),
        prefixSecurity: $(L("prefixSecurity") ?? "silent")
      });
      return ee._importCookies(R, (Y) => {
        if (Y) {
          A.callback(Y);
          return;
        }
        A.callback(null, ee);
      }), A.promise;
    }
    /**
     * A new CookieJar is created and the serialized {@link Cookie} values are added to
     * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
     * the order in which they appear in the serialization.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param strOrObj - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     */
    static deserializeSync(C, I) {
      const T = typeof C == "string" ? JSON.parse(C) : C, A = (L) => T && typeof T == "object" && (0, d.inOperator)(L, T) ? T[L] : void 0, R = (L) => {
        const ee = A(L);
        return typeof ee == "boolean" ? ee : void 0;
      }, H = (L) => {
        const ee = A(L);
        return typeof ee == "string" ? ee : void 0;
      }, V = new D(I, {
        rejectPublicSuffixes: R("rejectPublicSuffixes"),
        looseMode: R("enableLooseMode"),
        allowSpecialUseDomain: R("allowSpecialUseDomain"),
        prefixSecurity: $(H("prefixSecurity") ?? "silent")
      });
      if (!V.store.synchronous)
        throw new Error("CookieJar store is not synchronous; use async API instead.");
      return V._importCookiesSync(T), V;
    }
    /**
     * Alias of {@link CookieJar.deserializeSync}.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param jsonString - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     */
    static fromJSON(C, I) {
      return D.deserializeSync(C, I);
    }
  }
  return Ve.CookieJar = D, Ve;
}
var _o = {}, Gu;
function yC() {
  if (Gu) return _o;
  Gu = 1, Object.defineProperty(_o, "__esModule", { value: !0 }), _o.permutePath = e;
  function e(t) {
    if (t === "/")
      return ["/"];
    const n = [t];
    for (; t.length > 1; ) {
      const r = t.lastIndexOf("/");
      if (r === 0)
        break;
      t = t.slice(0, r), n.push(t);
    }
    return n.push("/"), n;
  }
  return _o;
}
var Ku;
function vC() {
  return Ku || (Ku = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.permutePath = e.parseDate = e.formatDate = e.domainMatch = e.defaultPath = e.CookieJar = e.cookieCompare = e.Cookie = e.PrefixSecurityEnum = e.canonicalDomain = e.version = e.ParameterError = e.Store = e.getPublicSuffix = e.permuteDomain = e.pathMatch = e.MemoryCookieStore = void 0, e.parse = b, e.fromJSON = k;
    var t = up();
    Object.defineProperty(e, "MemoryCookieStore", { enumerable: !0, get: function() {
      return t.MemoryCookieStore;
    } });
    var n = yl();
    Object.defineProperty(e, "pathMatch", { enumerable: !0, get: function() {
      return n.pathMatch;
    } });
    var r = cp();
    Object.defineProperty(e, "permuteDomain", { enumerable: !0, get: function() {
      return r.permuteDomain;
    } });
    var o = Di();
    Object.defineProperty(e, "getPublicSuffix", { enumerable: !0, get: function() {
      return o.getPublicSuffix;
    } });
    var i = vl();
    Object.defineProperty(e, "Store", { enumerable: !0, get: function() {
      return i.Store;
    } });
    var s = Zo();
    Object.defineProperty(e, "ParameterError", { enumerable: !0, get: function() {
      return s.ParameterError;
    } });
    var l = dp();
    Object.defineProperty(e, "version", { enumerable: !0, get: function() {
      return l.version;
    } });
    var c = zi();
    Object.defineProperty(e, "canonicalDomain", { enumerable: !0, get: function() {
      return c.canonicalDomain;
    } });
    var u = xl();
    Object.defineProperty(e, "PrefixSecurityEnum", { enumerable: !0, get: function() {
      return u.PrefixSecurityEnum;
    } });
    var d = Ys();
    Object.defineProperty(e, "Cookie", { enumerable: !0, get: function() {
      return d.Cookie;
    } });
    var p = pp();
    Object.defineProperty(e, "cookieCompare", { enumerable: !0, get: function() {
      return p.cookieCompare;
    } });
    var f = mC();
    Object.defineProperty(e, "CookieJar", { enumerable: !0, get: function() {
      return f.CookieJar;
    } });
    var h = gp();
    Object.defineProperty(e, "defaultPath", { enumerable: !0, get: function() {
      return h.defaultPath;
    } });
    var m = mp();
    Object.defineProperty(e, "domainMatch", { enumerable: !0, get: function() {
      return m.domainMatch;
    } });
    var g = fp();
    Object.defineProperty(e, "formatDate", { enumerable: !0, get: function() {
      return g.formatDate;
    } });
    var y = hp();
    Object.defineProperty(e, "parseDate", { enumerable: !0, get: function() {
      return y.parseDate;
    } });
    var v = yC();
    Object.defineProperty(e, "permutePath", { enumerable: !0, get: function() {
      return v.permutePath;
    } });
    const w = Ys();
    function b(E, j) {
      return w.Cookie.parse(E, j);
    }
    function k(E) {
      return w.Cookie.fromJSON(E);
    }
  }(ls)), ls;
}
var yp = vC();
function Xu(e, t, n, r, o) {
  const i = [];
  if (t === void 0)
    return [[], void 0];
  const s = xC(t, r);
  for (const [l, c] of s) {
    const [u, d] = kC(
      { ...e, responseCode: l },
      c,
      n,
      r,
      o
    );
    if (d !== void 0)
      return [
        void 0,
        `failed to assign variables for response code: ${l}: ${d}`
      ];
    i.push(u);
  }
  return [i, void 0];
}
function xC(e, t) {
  const n = [], r = Object.keys(e).sort(EC);
  for (const o of r)
    bC(o, t) && n.push([o, e[o]]);
  return n;
}
function bC(e, t) {
  return t === $i || t.statusCode.toString() === e || Ao(t.statusCode) === e || e === "default";
}
function kC(e, t, n, r, o) {
  const i = {}, s = [];
  for (const [l, c] of Object.entries(t.variableAssignments || {})) {
    const [u, d] = wC(c, n, r, o);
    d !== void 0 ? s.push({ name: l, error: d, value: void 0, assignment: c }) : u === void 0 ? s.push({ name: l, error: "not found", value: void 0, assignment: c }) : (i[l] = u, s.push({ name: l, value: u, error: void 0 }));
  }
  return [{ id: e, env: i, assignments: s }, void 0];
}
function wC(e, t, n, r) {
  var o, i;
  if (n === $i)
    return ["foo", void 0];
  if (e.in === "body" && ((o = e == null ? void 0 : e.path) == null ? void 0 : o.type) == "jsonPointer")
    return e.from === "request" ? Yu(t.body, e.path.value) : Yu(n.body, e.path.value);
  if (e.in === "body" && ((i = e == null ? void 0 : e.path) == null ? void 0 : i.type) == "jsonPath")
    return e.from === "request" ? Qu(t.body, e.path.value) : Qu(n.body, e.path.value);
  if (e.in === "header")
    return e.from === "request" ? SC(t.headers, e.name) : jC(n.headers, e.name);
  if (e.in === "cookie")
    return e.from === "request" ? _C(t.headers, e.name) : CC(n.headers, e.name);
  if (e.in === "query") {
    if (e.from === "request")
      return Ju(r.query, e.name);
  } else if (e.in === "path" && e.from === "request")
    return Ju(r.path, e.name);
  return [void 0, `unsupported assignment: from ${e.from} in ${e.in}`];
}
function Yu(e, t) {
  try {
    const n = JSON.parse(e), r = Nt.find(n, t);
    return typeof r == "object" ? [void 0, "must be a primitive value"] : [r, void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Pointer "${t}": ${n}`];
  }
}
function Qu(e, t) {
  try {
    const n = JSON.parse(e), r = te({ json: n, path: t });
    return typeof (r == null ? void 0 : r[0]) == "object" ? [void 0, "must be a primitive value"] : [r == null ? void 0 : r[0], void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Path "${t}": ${n}`];
  }
}
function SC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (n.toLowerCase() === t.toLowerCase())
      return [r, void 0];
  return [void 0, "not found"];
}
function jC(e, t) {
  for (const [n, r] of e)
    if (n.toLowerCase() === t.toLowerCase())
      return [r, void 0];
  return [void 0, "not found"];
}
function CC(e, t) {
  for (const [n, r] of e)
    if (n.toLowerCase() === "set-cookie") {
      const o = yp.Cookie.parse(r);
      if (o !== void 0 && o.key === t)
        return [o.value, void 0];
    }
  return [void 0, "not found"];
}
function _C(e, t) {
  for (const [n, r] of Object.entries(e))
    if (n.toLowerCase() === "cookie") {
      const o = r.split("; ");
      for (const i of o) {
        const s = yp.Cookie.parse(i);
        if (s !== void 0 && s.key === t)
          return [s.value, void 0];
      }
    }
  return [void 0, "not found"];
}
function Ju(e, t) {
  for (const { key: n, value: r } of e)
    if (n === t)
      return [r, void 0];
  return [void 0, "not found"];
}
function EC(e, t) {
  const n = {
    default: 0,
    "1XX": 1,
    "2XX": 2,
    "3XX": 3,
    "4XX": 4,
    "5XX": 5
  }, r = e in n ? n[e] : Number.MAX_SAFE_INTEGER, o = t in n ? n[t] : Number.MAX_SAFE_INTEGER;
  return r - o;
}
function Zu(e) {
  const t = [];
  for (const { assignments: n } of e)
    for (const r of n)
      r.error !== void 0 && t.push(r);
  return t;
}
async function* OC(e, t, n, r, o, i, s = []) {
  const l = tp(), c = [bp(r, i)], u = [];
  for (const { name: d, requests: p } of o) {
    const f = yield* vp(
      d,
      l,
      e,
      t,
      n,
      r,
      p,
      [...c, ...s, ...u],
      0
    );
    if (f === void 0)
      break;
    u.push(...f);
  }
  return u;
}
async function* vp(e, t, n, r, o, i, s, l, c) {
  var d;
  const u = [];
  if (yield { event: "playbook-started", name: e }, c >= 5) {
    yield {
      event: "playbook-aborted",
      error: "Maximum playbook execution depth is reached"
    };
    return;
  }
  for (let p = 0; p < s.length; p++) {
    const f = s[p];
    if (f.ref === void 0) {
      yield {
        event: "playbook-aborted",
        error: "non-reference requests are not supported"
      };
      return;
    }
    const h = $C(i, f.ref);
    if (h === void 0) {
      yield {
        event: "playbook-aborted",
        error: `request not found: ${f.ref.type}/${f.ref.id}`
      };
      return;
    }
    yield { event: "request-started", ref: f.ref };
    const m = h.operationId === void 0 ? void 0 : h.auth, g = yield* xp(
      t,
      n,
      r,
      o,
      i,
      m,
      [...l, ...u],
      c
    );
    if (g === void 0) {
      yield {
        event: "http-request-prepare-error",
        error: "Failed to retrieve credentials"
      };
      return;
    }
    const y = Nl(
      "stage-environment",
      f.environment || {},
      [...l, ...u]
    ), v = {
      id: { type: "stage-environment" },
      env: y.value,
      // FIXME can we make replaceEnvVariables return assignments?
      assignments: []
    }, w = [...l, ...u, v], b = Nl(
      "request-environment",
      h.environment || {},
      w
    ), k = {
      id: { type: "request-environment" },
      env: b.value,
      assignments: []
    }, E = h.operationId !== void 0 ? (d = xd(r, h.operationId)) == null ? void 0 : d.operation : void 0, j = lg(r, h.request, E, [
      ...l,
      ...u,
      k,
      v
    ]), _ = [
      ...b.missing,
      ...y.missing,
      ...j.missing
    ];
    if (yield {
      event: "payload-variables-substituted",
      stack: [...w, k],
      found: [...b.found, ...y.found, ...j.found],
      missing: _
    }, _.length > 0) {
      yield {
        event: "http-request-prepare-error",
        error: `failed to replace request variables: ${cg(_)}`
      };
      return;
    }
    const [$, D] = "operationId" in j.value ? await wj(r, o, h.operationId, j.value, g) : await Cj(j.value);
    if (D !== void 0) {
      yield { event: "http-request-prepare-error", error: D };
      return;
    }
    yield {
      event: "http-request-prepared",
      request: $,
      operationId: h.operationId
    };
    const [O, C] = await n($);
    if (C !== void 0) {
      yield { event: "http-error-received", error: C };
      return;
    }
    if (yield { event: "http-response-received", response: O }, O !== $i) {
      if (f.expectedResponse !== void 0) {
        if (String(O == null ? void 0 : O.statusCode) !== f.expectedResponse && Ao(O.statusCode) !== f.expectedResponse && h.defaultResponse !== "default") {
          yield {
            event: "response-processing-error",
            error: `HTTP response code "${O == null ? void 0 : O.statusCode}" does not match expected stage response code "${f.expectedResponse}"`
          };
          return;
        }
      } else if (String(O == null ? void 0 : O.statusCode) !== h.defaultResponse && Ao(O.statusCode) !== h.defaultResponse && h.defaultResponse !== "default") {
        yield {
          event: "response-processing-error",
          error: `HTTP response code "${O == null ? void 0 : O.statusCode}" does not match default response code "${h.defaultResponse}"`
        };
        return;
      }
    }
    const [I, T] = Xu(
      { type: "playbook-request", name: e, step: p, responseCode: "default" },
      h.responses,
      $,
      O,
      j.value.parameters
    );
    if (T !== void 0) {
      yield {
        event: "response-processing-error",
        error: T
      };
      return;
    }
    u.push(...I), yield { event: "variables-assigned", assignments: I };
    const A = Zu(I);
    if (A.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${A.map((L) => L.name).join(", ")}`
      };
      return;
    }
    const [R, H] = Xu(
      { type: "playbook-stage", name: e, step: p, responseCode: "default" },
      f.responses,
      $,
      O,
      j.value.parameters
    );
    if (H !== void 0) {
      yield {
        event: "response-processing-error",
        error: H
      };
      return;
    }
    yield { event: "variables-assigned", assignments: R };
    const V = Zu(R);
    if (V.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${V.map((L) => L.name).join(", ")}`
      };
      return;
    }
    u.push(...R);
  }
  return yield { event: "playbook-finished" }, u;
}
async function* xp(e, t, n, r, o, i, s, l) {
  const c = {};
  if (i === void 0)
    return c;
  for (const u of i) {
    yield { event: "auth-started", name: u };
    const [d, p] = u.split("/"), f = o.authenticationDetails[0][d];
    if (f === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const h = p === void 0 ? f.default : p, m = f.methods[h];
    if (m === void 0) {
      yield {
        event: "auth-aborted",
        error: `credential: "${d}/${h}" is not found`
      };
      return;
    }
    if (f === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const g = bj(e, f, h);
    if (g !== void 0)
      yield {
        event: "credential-retrieved-from-cache",
        name: u,
        result: g
      }, c[u] = { credential: f, value: g };
    else {
      const y = yield* TC(
        e,
        t,
        n,
        r,
        o,
        u,
        m,
        s,
        l
      );
      if (y === void 0) {
        yield {
          event: "auth-aborted",
          error: `Failed to get value for the credential: "${d}"`
        };
        return;
      }
      xj(e, f, h, y), c[u] = { credential: f, value: y };
    }
    yield { event: "auth-finished" };
  }
  return c;
}
async function* TC(e, t, n, r, o, i, s, l, c) {
  const u = [...l];
  if (s.requests !== void 0) {
    const p = yield* vp(
      i,
      e,
      t,
      n,
      r,
      o,
      s.requests,
      l,
      c + 1
    );
    if (p === void 0)
      return void 0;
    u.push(...p);
  }
  const d = ag(s.credential, u);
  return d.missing.length, yield {
    event: "credential-variables-substituted",
    name: i,
    result: d.value,
    stack: u,
    found: d.found,
    missing: d.missing
  }, d.value;
}
function bn(e, t) {
  const n = {}, r = {}, o = [];
  for (const [i, s] of Object.entries(e.variables))
    s.from === "hardcoded" ? n[i] = s.value : s.from === "environment" && (t.secrets.hasOwnProperty(s.name) ? (n[i] = t.secrets[s.name], r[s.name] = t.secrets[s.name]) : t.default.hasOwnProperty(s.name) ? (n[i] = t.default[s.name], r[s.name] = t.default[s.name]) : !s.required && s.default !== void 0 ? n[i] = s.default : s.required && o.push(s.name));
  return {
    environment: { id: { type: "global-environment" }, assignments: [], env: n },
    simple: r,
    missing: o
  };
}
function bp(e, t) {
  var o, i;
  const n = ((o = e.runtimeConfiguration) == null ? void 0 : o.environment) || "default", { environment: r } = bn(
    ((i = e == null ? void 0 : e.environments) == null ? void 0 : i[n]) || { variables: {} },
    t
  );
  return r;
}
function $C(e, t) {
  var n, r;
  return t.type === "operation" ? (n = e.operations[t.id]) == null ? void 0 : n.request : (r = e.requests) == null ? void 0 : r[t.id];
}
function IC(e, t) {
  return () => e({
    matcher: Jn(
      ye,
      bs,
      gf,
      Lt,
      Mt,
      qt,
      Ft
    ),
    effect: async (n, r) => {
      const {
        scanconf: {
          playbook: { before: o, after: i, operations: s }
        },
        operations: { scenarioId: l, operationId: c },
        router: {
          current: [u, d]
        }
      } = r.getState();
      if (u !== "scanconf" || d !== "operations" || c === void 0)
        return;
      r.cancelActiveListeners(), await r.delay(1e3);
      const p = s[c], f = [
        { name: "before", requests: o },
        { name: "operationBefore", requests: p.before },
        { name: "operationScenarios", requests: p.scenarios[l].requests },
        { name: "operationAfter", requests: p.after },
        { name: "after", requests: i }
      ].filter((h) => h.requests.length > 0);
      await kn(
        r.getState(),
        Ii(),
        r.dispatch,
        Zv,
        ex,
        f,
        "http://localhost"
      );
    }
  });
}
function DC(e, t) {
  return () => e({
    matcher: Jn(ye, Zt, Ur),
    effect: async (n, r) => {
      const {
        requests: { ref: o },
        scanconf: {
          playbook: { before: i, after: s }
        },
        router: {
          current: [l, c]
        },
        prefs: { useGlobalBlocks: u }
      } = r.getState();
      l !== "scanconf" || c !== "requests" || (r.cancelActiveListeners(), await r.delay(1e3), await kn(
        r.getState(),
        Ii(),
        r.dispatch,
        ax,
        lx,
        [
          { name: "Global Before", requests: u ? i : [] },
          { name: "Request", requests: [{ ref: o }] },
          { name: "Global After", requests: u ? s : [] }
        ],
        "http://localhost"
      ));
    }
  });
}
function PC(e, t) {
  return () => e({
    matcher: Jn(
      ye,
      Lt,
      No,
      Mo,
      Mt,
      qt,
      Ft
    ),
    effect: async (n, r) => {
      var p, f, h, m;
      const {
        scanconf: {
          playbook: o,
          selectedCredentialGroup: i,
          selectedCredential: s,
          selectedSubcredential: l
        },
        router: {
          current: [c, u]
        }
      } = r.getState();
      if (c !== "scanconf" || u !== "auth" || (r.cancelActiveListeners(), await r.delay(1e3), s === void 0 || l === void 0))
        return;
      const d = (m = (h = (f = (p = o == null ? void 0 : o.authenticationDetails) == null ? void 0 : p[i]) == null ? void 0 : f[s]) == null ? void 0 : h.methods) == null ? void 0 : m[l];
      d === void 0 || d.requests === void 0 || d.requests.length === 0 || await kn(
        r.getState(),
        Ii(),
        r.dispatch,
        Hv,
        Uv,
        [{ name: "auth", requests: d.requests }],
        "http://localhost"
      );
    }
  });
}
function zC(e, t) {
  return () => e({
    matcher: Jn(
      ye,
      hf,
      Mt,
      qt,
      Ft,
      Lt
    ),
    effect: async (n, r) => {
      const {
        scanconf: {
          playbook: { before: o, after: i }
        },
        global: { selected: s },
        router: {
          current: [l, c]
        }
      } = r.getState();
      if (l !== "scanconf" || c !== "global")
        return;
      r.cancelActiveListeners(), await r.delay(1e3);
      const u = s === "before" ? [{ name: "Global Before", requests: o }] : [{ name: "Global After", requests: i }];
      await kn(
        r.getState(),
        Ii(),
        r.dispatch,
        Xv,
        Yv,
        u,
        "http://localhost"
      );
    }
  });
}
function AC(e, t) {
  return () => e({
    actionCreator: mf,
    effect: async ({ payload: n }, r) => {
      const {
        scanconf: {
          playbook: { before: o, after: i, operations: s }
        },
        operations: { scenarioId: l, operationId: c },
        prefs: { useGlobalBlocks: u, rejectUnauthorized: d }
      } = r.getState(), p = s[c], f = [
        { name: "Global Before", requests: u ? o : [] },
        { name: "Before", requests: p.before },
        { name: "Scenario", requests: p.scenarios[l].requests },
        { name: "After", requests: p.after },
        { name: "Global After", requests: u ? i : [] }
      ].filter((h) => h.requests.length > 0);
      await kn(
        r.getState(),
        ei(
          { https: { rejectUnauthorized: d } },
          (h, m, g) => r.dispatch(ti({ id: h, request: m, config: g }))
        ),
        r.dispatch,
        tx,
        nx,
        f,
        n
      );
    }
  });
}
function RC(e, t) {
  return () => e({
    actionCreator: df,
    effect: async ({ payload: n }, r) => {
      const {
        scanconf: { oas: o, playbook: i, selectedCredential: s, selectedSubcredential: l },
        env: { data: c },
        prefs: { rejectUnauthorized: u }
      } = r.getState();
      if (s === void 0 || l === void 0)
        return;
      const d = [bp(i, c)];
      r.dispatch(Bv()), r.dispatch(Gi({ event: "playbook-started", name: "" })), r.dispatch(Gi({ event: "request-started" }));
      for await (const p of xp(
        tp(),
        ei(
          { https: { rejectUnauthorized: u } },
          (f, h, m) => r.dispatch(ti({ id: f, request: h, config: m }))
        ),
        o,
        n,
        i,
        [`${s}/${l}`],
        d,
        0
      ))
        r.dispatch(Gi(p));
    }
  });
}
function NC(e, t) {
  return () => e({
    actionCreator: Sa,
    effect: async ({ payload: { inputs: n, server: r } }, o) => {
      const {
        requests: { ref: i },
        scanconf: {
          playbook: { before: s, after: l }
        },
        prefs: { useGlobalBlocks: c, rejectUnauthorized: u }
      } = o.getState(), d = [
        { name: "Global Before", requests: c ? s : [] },
        { name: "Request", requests: [{ ref: i }] },
        { name: "Global After", requests: c ? l : [] }
      ].filter((p) => p.requests.length > 0);
      await kn(
        o.getState(),
        ei(
          { https: { rejectUnauthorized: u } },
          (p, f, h) => o.dispatch(ti({ id: p, request: f, config: h }))
        ),
        o.dispatch,
        ix,
        sx,
        d,
        r,
        [{ id: { type: "try-inputs" }, env: n, assignments: [] }]
      );
    }
  });
}
function MC(e, t) {
  return () => e({
    actionCreator: xs,
    effect: async ({ payload: n }, r) => {
      const {
        scanconf: {
          playbook: { before: o, after: i }
        },
        global: { selected: s },
        prefs: { rejectUnauthorized: l }
      } = r.getState(), c = s === "before" ? [{ name: "Global Before", requests: o }] : [{ name: "Global After", requests: i }];
      await kn(
        r.getState(),
        ei(
          { https: { rejectUnauthorized: l } },
          (u, d, p) => r.dispatch(ti({ id: u, request: d, config: p }))
        ),
        r.dispatch,
        Gv,
        Kv,
        c,
        n
      );
    }
  });
}
async function kn(e, t, n, r, o, i, s, l = []) {
  n(r());
  for await (const c of OC(
    t,
    e.scanconf.oas,
    s,
    e.scanconf.playbook,
    i,
    e.env.data,
    l
  ))
    n(o(c));
}
function bl(e, t) {
  const [n, r] = qC(e, t);
  return r == null ? [n, void 0] : [
    void 0,
    r.map((o) => ({
      message: o.message.slice(-1).join(": "),
      pointer: st.joinJsonPointer(o.path)
    }))
  ];
}
function qC(e, t) {
  return Ce({
    before: Tt(e, t, t.before || [], Xn),
    after: Tt(e, t, t.after || [], Xn),
    operations: Xe(e, t, t.operations || {}, HC),
    authenticationDetails: Tt(e, t, t.authenticationDetails === void 0 || t.authenticationDetails.length === 0 ? [{}] : t.authenticationDetails, n_),
    runtimeConfiguration: FC(e, t, t.runtimeConfiguration || {}),
    customizations: X(t.customizations),
    environments: Xe(e, t, t.environments || {}, LC),
    authorizationTests: Xe(e, t, t.authorizationTests || {}, s_),
    requests: Xe(e, t, t.requests || {}, KC)
  });
}
function FC(e, t, n) {
  return [{ ...n }, void 0];
}
function LC(e, t, n) {
  return Ce({
    variables: Xe(e, t, n.variables || {}, BC)
  });
}
function BC(e, t, n) {
  return n.from === "environment" ? Ce({
    name: X(n.name),
    from: X(n.from),
    required: X(n.required),
    default: X(n.default)
  }) : n.from === "hardcoded" ? Ce({
    from: X(n.from),
    value: X(n.value)
  }) : Wt("unknown env from");
}
function HC(e, t, n) {
  return Ce({
    request: kl(e, t, n.request, n.operationId),
    operationId: X(n.operationId),
    before: Tt(e, t, n.before || [], Xn),
    after: Tt(e, t, n.after || [], Xn),
    authorizationTests: X(n.authorizationTests || []),
    scenarios: Tt(e, t, n.scenarios || [], i_),
    customTests: X(n.customTests),
    customized: X(UC(n))
  });
}
function UC(e) {
  var d, p;
  const t = (p = (d = e.scenarios) == null ? void 0 : d[0]) == null ? void 0 : p.requests, n = t == null ? void 0 : t[0], r = e.customTests && e.customTests.length > 0, o = e.authorizationTests && e.authorizationTests.length > 0, i = e.before && e.before.length > 0, s = e.after && e.after.length > 0, l = e.scenarios && e.scenarios.length > 1, c = t && t.length > 1, u = n !== void 0 && VC(n);
  return r || o || i || s || l || c || u;
}
function VC(e) {
  const t = e.environment && Object.keys(e.environment).length > 0, n = e.auth && e.auth.length > 0, r = e.responses && Object.keys(e.responses).length > 0, o = "expectedResponse" in e;
  return t || n || r || o;
}
function Xn(e, t, n) {
  return n.$ref !== void 0 ? WC(e, t, n) : kl(e, t, n);
}
function WC(e, t, n) {
  return Ce({
    responses: Xe(e, t, n.responses || {}, wl),
    auth: X(n.auth || []),
    ref: t_(e, t, n.$ref),
    fuzzing: X(n.fuzzing),
    environment: Sl(e, t, n.environment || {}),
    injectionKey: X(n.injectionKey),
    expectedResponse: X(n.expectedResponse)
  });
}
function kl(e, t, n, r) {
  return Ce({
    responses: Xe(e, t, n.responses || {}, wl),
    fuzzing: X(n.fuzzing),
    auth: X(n.auth || []),
    environment: Sl(e, t, n.environment || {}),
    injectionKey: X(n.injectionKey),
    ref: X(void 0),
    defaultResponse: X(n.defaultResponse),
    request: XC(e, t, n.request, r),
    operationId: X(r)
  });
}
function GC(e, t, n) {
  return Ce({
    operationId: [void 0, void 0],
    responses: Xe(e, t, n.responses || {}, wl),
    environment: Sl(e, t, n.environment || {}),
    defaultResponse: X(n.defaultResponse),
    request: YC(e, t, n.request)
  });
}
function KC(e, t, n) {
  return n.operationId === void 0 ? GC(e, t, n) : kl(e, t, n, n.operationId);
}
function XC(e, t, n, r) {
  return n.type === "42c" ? QC(e, t, n, r) : Wt(`unknown request type: ${n.type}`);
}
function YC(e, t, n) {
  return n.type === "42c" ? JC(e, t, n) : Wt(`unknown request type: ${n.type}`);
}
function QC(e, t, n, r) {
  var s, l;
  const o = ((s = n == null ? void 0 : n.details) == null ? void 0 : s.operationId) || r;
  if (o === void 0)
    return [
      void 0,
      to("Unable to parse request that has no operationId set", void 0, ["details"])
    ];
  const i = xd(e, o);
  return i === void 0 ? Wt(`Unable to find in the OpenAPI file an operation with operationId: "${o}"`) : Ce({
    operationId: X(o),
    path: X(i.path),
    method: X(i.method.toLowerCase()),
    parameters: wp(e, t, (n == null ? void 0 : n.details) || {}),
    body: kp(e, t, (l = n == null ? void 0 : n.details) == null ? void 0 : l.requestBody)
  });
}
function JC(e, t, n) {
  var r;
  return Ce({
    url: X(n.details.url),
    method: X(n.details.method.toLowerCase()),
    parameters: wp(e, t, (n == null ? void 0 : n.details) || {}),
    body: kp(e, t, (r = n == null ? void 0 : n.details) == null ? void 0 : r.requestBody)
  });
}
function kp(e, t, n) {
  return n == null ? [void 0, void 0] : n.mode === "json" ? [{ mediaType: "application/json", value: n.json }, void 0] : n.mode === "urlencoded" ? [
    { mediaType: "application/x-www-form-urlencoded", value: ZC(n.urlencoded) },
    void 0
  ] : n.mode === "raw" ? [{ mediaType: "raw", value: n.raw }, void 0] : [void 0, void 0];
}
function ZC(e) {
  return Object.entries(e).reduce((t, [n, r]) => (t[n] = r.value, t), {});
}
function wp(e, t, n) {
  return Ce({
    cookie: Eo(e, t, n.cookies || []),
    path: Eo(e, t, n.paths || []),
    query: Eo(e, t, n.queries || []),
    header: Eo(e, t, n.headers || [])
  });
}
function Eo(e, t, n) {
  return [
    n.map(({ key: r, value: o }) => ({ key: r, value: o })),
    void 0
  ];
}
function wl(e, t, n) {
  return Ce({
    expectations: X(n.expectations),
    variableAssignments: Xe(e, t, n.variableAssignments || {}, e_)
  });
}
function e_(e, t, n) {
  var r, o;
  return n.in === "body" && (n.from == "response" || n.from == "request") ? [
    {
      in: n.in,
      from: n.from,
      contentType: "json",
      path: {
        type: (r = n.path) == null ? void 0 : r.type,
        value: (o = n.path) == null ? void 0 : o.value
      }
    },
    void 0
  ] : (n.in === "header" || n.in === "query" || n.in === "cookie") && (n.from == "response" || n.from == "request") ? [
    {
      in: n.in,
      from: n.from,
      name: n.name
    },
    void 0
  ] : Wt("unexpected assignment");
}
function Sl(e, t, n) {
  return [n, void 0];
}
function t_(e, t, n) {
  if (n === void 0)
    return [void 0, void 0];
  const r = st.parseJsonPointer(n);
  return r.length === 2 && r[0] === "requests" ? [{ type: "request", id: String(r[1]) }, void 0] : r.length === 3 && r[0] === "operations" && r[2] === "request" ? [{ type: "operation", id: String(r[1]) }, void 0] : Wt(`unexpected stage $ref, must point to operations or requests: ${n}`);
}
function n_(e, t, n) {
  return n.$ref !== void 0 ? Wt(`external credential refs are not supported: ${n.$ref}`) : Xe(e, t, n, r_);
}
function r_(e, t, n) {
  return Ce({
    in: X(n.in),
    type: X(n.type),
    name: X(n.name),
    default: X(n.default),
    ttl: X(n.ttl),
    tti: X(n.tti),
    methods: Xe(e, t, n.credentials || {}, o_),
    description: X(n.description)
  });
}
function o_(e, t, n) {
  return Ce({
    description: X(n.description),
    requests: Tt(e, t, n.requests || [], Xn),
    credential: X(n.credential)
  });
}
function i_(e, t, n) {
  return Ce({
    requests: Tt(e, t, n.requests || [], Xn),
    key: X(n.key),
    fuzzing: X(n.fuzzing)
  });
}
function s_(e, t, n) {
  const r = n.source === null ? [] : n.source, o = n.target === null ? [] : n.target;
  return r.some((i) => typeof i != "string") || o.some((i) => typeof i != "string") ? Wt("only strings are allowed, embedding Credential objects is not supported yet") : Ce({
    key: X(n.key),
    source: X(r),
    target: X(o)
  });
}
function to(e, t, n) {
  let r = [];
  return n !== void 0 && (typeof n == "string" || typeof n == "number") ? r = [`${n}`] : n !== void 0 && Array.isArray(n) && (r = [...n]), t === void 0 ? [{ message: [e], path: r }] : t.map((o) => ({
    message: [e, ...o.message],
    path: [...r, ...o.path]
  }));
}
function Wt(e, t, n) {
  return [void 0, to(e, t, n)];
}
function Ce(e) {
  const t = [], n = {};
  for (const [r, o] of Object.entries(e)) {
    const [i, s] = o;
    s !== void 0 ? t.push(...to("failed to parse", s, [r])) : n[r] = i;
  }
  return t.length > 0 ? [void 0, t] : [n, void 0];
}
function X(e) {
  return [e, void 0];
}
function Xe(e, t, n, r) {
  const o = [], i = {}, s = Object.entries(n).map(([l, c]) => [l, r(e, t, c)]);
  for (const [l, c] of s) {
    const [u, d] = c;
    d !== void 0 ? o.push(...to("failed to parse", d, [l])) : i[l] = u;
  }
  return o.length > 0 ? [void 0, o] : [i, void 0];
}
function Tt(e, t, n, r) {
  const o = [], i = [], s = (n || []).map((l) => r(e, t, l));
  for (const [l, c] of s.entries()) {
    const [u, d] = c;
    d !== void 0 ? o.push(...to("failed to parse", d, [l])) : i.push(u);
  }
  return o.length > 0 ? [void 0, o] : [i, void 0];
}
function Ai(e, t) {
  const n = t.runtimeConfiguration, r = t.customizations, o = t.environments, [i, s] = a_(e, t, t.authenticationDetails);
  if (s !== void 0)
    return [void 0, `failed to serialize authentication details: ${s}`];
  const [l, c] = u_(e, t);
  if (c !== void 0)
    return [void 0, `failed to serialize operations: ${c}`];
  const [u, d] = m_(e, t, t.requests);
  if (d !== void 0)
    return [void 0, `unable to serialize requests: ${d}`];
  const [p, f] = Yn(e, t, t.before);
  if (f !== void 0)
    return [void 0, `unable to serialize before: ${f}`];
  const [h, m] = Yn(e, t, t.after);
  return m !== void 0 ? [void 0, `unable to serialize after: ${m}`] : [
    {
      version: "2.0.0",
      runtimeConfiguration: n,
      customizations: r,
      environments: o,
      operations: l,
      before: br(p),
      after: br(h),
      authenticationDetails: i,
      authorizationTests: br(t.authorizationTests),
      requests: br(u)
    },
    void 0
  ];
}
function br(e) {
  return e instanceof Array ? e.length > 0 ? e : void 0 : Object.keys(e).length > 0 ? e : void 0;
}
function a_(e, t, n) {
  const r = [];
  for (const o of n) {
    const [i, s] = l_(e, t, o);
    if (s !== void 0)
      return [void 0, "xxx"];
    r.push(i);
  }
  return [r.length === 1 && Object.keys(r[0]).length === 0 ? [] : r, void 0];
}
function l_(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(n)) {
    const [s, l] = c_(e, t, i.methods);
    if (l !== void 0)
      return [void 0, "xxx"];
    r[o] = {
      type: i.type,
      in: i.in,
      name: i.name,
      ttl: i.ttl,
      tti: i.tti,
      default: i.default,
      description: i.description,
      credentials: s
    };
  }
  return [r, void 0];
}
function c_(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(n)) {
    const [s, l] = Yn(e, t, i.requests || []);
    if (l !== void 0)
      return [void 0, `failed to serialize requests: ${l}`];
    r[o] = {
      credential: i.credential,
      description: i.description,
      requests: s.length > 0 ? s : void 0
    };
  }
  return [r, void 0];
}
function u_(e, t) {
  const n = {};
  for (const [r, o] of Object.entries(t.operations)) {
    const [i, s] = d_(e, t, o);
    if (s !== void 0)
      return [void 0, `unable to serialize operation '${r}: ${s}'`];
    n[r] = i;
  }
  return [n, void 0];
}
function d_(e, t, n) {
  const [r, o] = jl(e, t, n.request, n.operationId);
  if (o !== void 0)
    return [void 0, `failed to serialize request: ${o}`];
  const [i, s] = p_(e, t, n);
  if (s !== void 0)
    return [void 0, `failed to serialize scenarios: ${s}`];
  const [l, c] = Yn(e, t, n.before);
  if (c !== void 0)
    return [void 0, `failed to serialize before: ${c}`];
  const [u, d] = Yn(e, t, n.after);
  return d !== void 0 ? [void 0, `failed to serialize after: ${d}`] : [
    {
      operationId: n.operationId,
      request: r,
      before: l.length > 0 ? l : void 0,
      after: u.length > 0 ? u : void 0,
      ...i,
      customTests: n.customTests,
      authorizationTests: br(n.authorizationTests)
    },
    void 0
  ];
}
function f_(e, t, n) {
  const [r, o] = _l(e, t, n.responses);
  if (o !== void 0)
    return [void 0, `failed to serialize responses: ${o}`];
  const [i, s] = y_(n.ref);
  return s !== void 0 ? [void 0, `failed to serialize responses: ${s}`] : [{
    fuzzing: n.fuzzing,
    $ref: i,
    auth: Sp(n.auth),
    expectedResponse: n.expectedResponse,
    environment: Cl(n.environment),
    responses: r
  }, void 0];
}
function jl(e, t, n, r) {
  const [o, i] = v_(e, t, n.request, r);
  if (i !== void 0)
    return [void 0, `failed to serialize request: ${i}`];
  const [s, l] = _l(e, t, n.responses);
  return l !== void 0 ? [void 0, `failed to serialize responses: ${l}`] : [{
    operationId: r || n.request.operationId,
    fuzzing: n.fuzzing,
    auth: Sp(n.auth),
    request: o,
    defaultResponse: n.defaultResponse,
    environment: Cl(n.environment),
    responses: s
  }, void 0];
}
function h_(e, t, n) {
  const [r, o] = x_(e, t, n.request);
  if (o !== void 0)
    return [void 0, `failed to serialize request: ${o}`];
  const [i, s] = _l(e, t, n.responses);
  return s !== void 0 ? [void 0, `failed to serialize responses: ${s}`] : [{
    request: r,
    defaultResponse: n.defaultResponse,
    environment: Cl(n.environment),
    responses: i
  }, void 0];
}
function Sp(e) {
  if (!(e === void 0 || e.length === 0))
    return e;
}
function p_(e, t, n) {
  const r = [];
  for (const o of n.scenarios) {
    const [i, s] = g_(e, t, o);
    if (s !== void 0)
      return [void 0, `unable to serialize scenario: ${s}`];
    r.push(i);
  }
  return [{ scenarios: r }, void 0];
}
function g_(e, t, n) {
  const [r, o] = Yn(e, t, n.requests);
  return o !== void 0 ? [void 0, `unable to serialize requests: ${o}`] : [
    {
      key: "happy.path",
      requests: r,
      fuzzing: n.fuzzing
    },
    void 0
  ];
}
function Yn(e, t, n) {
  const r = [];
  for (const o of n)
    if (o.ref === void 0) {
      const [i, s] = jl(e, t, o, o.operationId);
      if (s !== void 0)
        return [void 0, `unable to serialize stage: ${s}`];
      r.push(i);
    } else {
      const [i, s] = f_(e, t, o);
      if (s !== void 0)
        return [void 0, `unable to serialize stage reference: ${s}`];
      r.push(i);
    }
  return [r, void 0];
}
function m_(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(n || {}))
    if (i.operationId === void 0) {
      const [s, l] = h_(e, t, i);
      if (l !== void 0)
        return [void 0, `unable to serialize request: ${l}`];
      r[o] = s;
    } else {
      const [s, l] = jl(e, t, i, i.operationId);
      if (l !== void 0)
        return [void 0, `unable to serialize request: ${l}`];
      r[o] = s;
    }
  return [r, void 0];
}
function y_(e) {
  return e.type === "operation" ? ["#" + st.joinJsonPointer(["operations", e.id, "request"]), void 0] : e.type === "request" ? ["#" + st.joinJsonPointer(["requests", e.id]), void 0] : [void 0, `Unable to serialize unknown $ref type: ${e}`];
}
function Cl(e) {
  if (!(e === void 0 || Object.keys(e).length === 0))
    return e;
}
function v_(e, t, n, r) {
  const o = {
    operationId: r,
    method: n.method.toUpperCase(),
    url: `{{host}}${n.path}`,
    headers: Et(e, t, n.parameters.header),
    queries: Et(e, t, n.parameters.query),
    paths: Et(e, t, n.parameters.path),
    cookies: Et(e, t, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? o.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? o.requestBody = {
    mode: "urlencoded",
    urlencoded: jp(n.body.value)
  } : n.body.mediaType === "raw" && (o.requestBody = {
    mode: "raw",
    raw: n.body.value
  })), [
    {
      type: "42c",
      details: o
    },
    void 0
  ];
}
function x_(e, t, n) {
  const r = {
    //operationId: operation.operationId,
    method: n.method.toUpperCase(),
    url: n.url,
    headers: Et(e, t, n.parameters.header),
    queries: Et(e, t, n.parameters.query),
    paths: Et(e, t, n.parameters.path),
    cookies: Et(e, t, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? r.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? r.requestBody = {
    mode: "urlencoded",
    urlencoded: jp(n.body.value)
  } : n.body.mediaType === "raw" && (r.requestBody = {
    mode: "raw",
    raw: n.body.value
  })), [
    {
      type: "42c",
      details: r
    },
    void 0
  ];
}
function _l(e, t, n) {
  const r = {}, o = Object.entries(n || {});
  if (o.length === 0)
    return [void 0, void 0];
  for (const [i, s] of o)
    r[i] = {
      expectations: s.expectations,
      variableAssignments: b_(s.variableAssignments)
    };
  return [r, void 0];
}
function Et(e, t, n) {
  if (n.length !== 0)
    return n;
}
function b_(e) {
  if (Object.keys(e || {}).length !== 0)
    return e;
}
function jp(e) {
  return Object.entries(e).reduce((t, [n, r]) => (t[n] = { value: r }, t), {});
}
function Ri(e) {
  var n;
  const t = ((n = e.runtimeConfiguration) == null ? void 0 : n.environment) || "default";
  return e.environments[t];
}
function k_(e, t) {
  const n = Qn(e.before || [], t).map((s) => ({ container: "globalBefore", stageIndex: s })), r = Qn(e.after || [], t).map((s) => ({ container: "globalAfter", stageIndex: s })), o = Object.entries(e.operations || {}).flatMap(([s, l]) => s !== t ? w_(l, s, t) : []), i = (e.authenticationDetails || []).flatMap(
    // TODO: handle credentials that contain just a $ref
    (s, l) => Object.entries(s).flatMap(([c, u]) => j_(u, c, l, t))
  );
  return [...n, ...r, ...i, ...o];
}
function w_(e, t, n) {
  const r = Qn(e.before || [], n).map((s) => ({ container: "operationBefore", operationId: t, stageIndex: s })), o = Qn(e.after || [], n).map((s) => ({ container: "operationAfter", operationId: t, stageIndex: s })), i = e.scenarios.flatMap((s, l) => S_(s, t, l, n));
  return [...r, ...i, ...o];
}
function S_(e, t, n, r) {
  return Qn(e.requests || [], r).map((o) => ({
    container: "operationScenarios",
    operationId: t,
    scenarioIndex: n,
    stageIndex: o
  }));
}
function j_(e, t, n, r) {
  return Object.entries(e.credentials).flatMap(([o, i]) => Qn(i.requests || [], r).map((s) => ({
    container: "credential",
    group: n,
    credentialId: t,
    subCredentialId: o,
    stageIndex: s
  })));
}
function Qn(e, t) {
  const n = "#" + st.joinJsonPointer(["operations", t, "request"]);
  return e.map((r, o) => {
    if (C_(r) && r.$ref === n)
      return o;
  }).filter((r) => r !== void 0);
}
function C_(e) {
  return "$ref" in e;
}
function __(e, t) {
  const n = [];
  for (const r of e)
    for (const o of t)
      E_(r, o) && n.push({
        type: "operation-renamed",
        path: r.path,
        method: r.method,
        oldOperationId: o.operationId,
        newOperationId: r.operationId
      });
  return n;
}
function E_(e, t) {
  return e.path === t.path && e.method === t.method;
}
function O_(e, t) {
  const n = T_(e, t), r = $_(e, t), o = __(n, r), i = n.filter((c) => !o.some((u) => u.newOperationId === c.operationId)), s = r.filter((c) => !o.some((u) => u.oldOperationId === c.operationId)), l = D_(e, t);
  return [...i, ...s, ...o, ...l];
}
function T_(e, t) {
  const n = t.operations || {};
  return Cp(e).filter((r) => !n[r.operationId]).map((r) => ({
    type: "operation-added",
    ...r
  }));
}
function $_(e, t) {
  var l, c;
  const n = t.operations || {}, r = Cp(e).map((u) => u.operationId), i = Object.keys(n).filter((u) => !r.includes(u)), s = [];
  for (const u of i) {
    const d = (c = (l = I_(u, t)) == null ? void 0 : l.request) == null ? void 0 : c.request;
    if ((d == null ? void 0 : d.type) === "42c" && d.details.url.startsWith("{{host}}")) {
      const p = d.details.method.toLowerCase(), f = d.details.url.substring(8);
      s.push({
        type: "operation-removed",
        operationId: u,
        method: p,
        path: f,
        references: k_(t, u)
      });
    } else
      throw new Error(`Unsupported operation: operationId: ${u}, request ${JSON.stringify(d)}`);
  }
  return s;
}
function Cp(e) {
  return ug(e).map(([n, r, o]) => ({
    path: n,
    method: r,
    operationId: gd(o.operationId, n, r)
  }));
}
function I_(e, t) {
  var n;
  return (n = t.operations) == null ? void 0 : n[e];
}
function D_(e, t) {
  const n = t.authenticationDetails || [{}];
  return n.length === 0 ? [] : P_(e).filter((r) => !n[0][r]).map((r) => ({
    type: "security-added",
    schema: r
  }));
}
function P_(e) {
  var t;
  if (da(e)) {
    const n = (t = e.components) == null ? void 0 : t.securitySchemes;
    return n ? Object.keys(n) : [];
  } else {
    const n = e.securityDefinitions;
    return n ? Object.keys(n) : [];
  }
}
function z_(e, t) {
  const n = st.simpleClone(e);
  for (const r of t)
    r.container === "globalBefore" ? yr(n.before, r.stageIndex) : r.container === "globalAfter" ? yr(n.after, r.stageIndex) : r.container === "operationBefore" ? yr(n.operations[r.operationId].before, r.stageIndex) : r.container === "operationAfter" ? yr(n.operations[r.operationId].after, r.stageIndex) : r.container === "operationScenarios" && yr(n.operations[r.operationId].scenarios[r.scenarioIndex].requests, r.stageIndex);
  return A_(n), n;
}
function yr(e, t) {
  e && (e[t] = void 0);
}
function A_(e) {
  Cn(e.before), Cn(e.after);
  for (const t of Object.values(e.operations || {})) {
    Cn(t.before), Cn(t.after);
    for (const n of t.scenarios)
      Cn(n.requests);
  }
  for (const t of e.authenticationDetails || [])
    for (const n of Object.values(t))
      for (const r of Object.values(n.credentials))
        Cn(r.requests);
}
function Cn(e) {
  if (e !== void 0)
    for (let t = e.length - 1; t >= 0; t--)
      e[t] === void 0 && e.splice(t, 1);
}
function R_(e, t, n) {
  const r = st.simpleClone(e);
  _n(r.before, t, n), _n(r.after, t, n);
  for (const o of Object.values(r.operations || {})) {
    _n(o.before, t, n), _n(o.after, t, n);
    for (const i of o.scenarios)
      _n(i.requests, t, n);
  }
  for (const o of r.authenticationDetails || [])
    for (const i of Object.values(o))
      for (const s of Object.values(i.credentials))
        _n(s.requests, t, n);
  return r;
}
function _n(e, t, n) {
  for (const r of e || [])
    r.$ref === t && (r.$ref = n);
}
function N_(e, t, n, r) {
  let o = st.simpleClone(t);
  for (const i of r)
    i.type === "operation-added" ? o = M_(e, o, n, i) : i.type === "operation-removed" ? o = q_(e, o, n, i) : i.type === "operation-renamed" ? o = F_(o, i) : i.type === "security-added" && (o = L_(e, o, n, i));
  return o;
}
function M_(e, t, n, r) {
  const o = n.operations[r.operationId];
  return t.operations[r.operationId] = o, t;
}
function q_(e, t, n, r) {
  return delete t.operations[r.operationId], z_(t, r.references);
}
function F_(e, t) {
  var i, s;
  const n = e.operations[t.oldOperationId];
  n.operationId = t.newOperationId, n.request.operationId = t.newOperationId, ((s = (i = n.request) == null ? void 0 : i.request) == null ? void 0 : s.type) === "42c" && (n.request.request.details.operationId = t.newOperationId), delete e.operations[t.oldOperationId], e.operations[t.newOperationId] = n;
  const r = "#" + st.joinJsonPointer(["operations", t.oldOperationId, "request"]), o = "#" + st.joinJsonPointer(["operations", t.newOperationId, "request"]);
  return R_(e, r, o);
}
function L_(e, t, n, r) {
  t.authenticationDetails || (t.authenticationDetails = [], t.authenticationDetails.push({}));
  const o = r.schema;
  return t.authenticationDetails[0][o] = n.authenticationDetails[0][o], t;
}
function B_(e) {
  return () => e({
    actionCreator: ui,
    effect: async ({ payload: { oas: t, scanconf: n } }, r) => {
      const [o, i] = Qs(n);
      if (i !== void 0) {
        r.dispatch(
          vt({ message: `Failed to parse scan configuration: ${i}` })
        ), r.dispatch(ye(["general-error"]));
        return;
      }
      const s = O_(t, o);
      if (s.length > 0) {
        r.dispatch(dx({ scanconf: n, oas: t, changes: s })), r.dispatch(ye(["scanconf-update"]));
        return;
      }
      const [l, c] = bl(t, o);
      if (c !== void 0) {
        const u = c.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        r.dispatch(vt({ message: u })), r.dispatch(ye(["general-error"]));
        return;
      }
      r.dispatch(di({ playbook: l, oas: t })), r.dispatch(ye(["scanconf", "requests"]));
    }
  });
}
function H_(e, t) {
  return () => e({
    actionCreator: Jd,
    effect: async ({ payload: { oas: n, scanconf: r } }, o) => {
      const { changes: i, scanconf: s } = o.getState().scanconfUpdate, [l, c] = Qs(s);
      if (c !== void 0) {
        o.dispatch(
          vt({
            message: `Failed to parse original scan configuration: ${c}`
          })
        ), o.dispatch(ye(["general-error"]));
        return;
      }
      const [u, d] = Qs(r);
      if (d !== void 0) {
        o.dispatch(
          vt({
            message: `Failed to parse updated scan configuration: ${d}`
          })
        ), o.dispatch(ye(["general-error"]));
        return;
      }
      const p = N_(n, l, u, i), [f, h] = bl(n, p);
      if (h !== void 0) {
        const m = h.map((g) => `${g.message}: ${g.pointer}`).join(" ");
        o.dispatch(vt({ message: m })), o.dispatch(ye(["general-error"]));
        return;
      }
      t.postMessage({
        command: "saveScanconf",
        payload: JSON.stringify(p, null, 2)
      }), o.dispatch(di({ playbook: f, oas: n })), o.dispatch(ye(["scanconf", "requests"]));
    }
  });
}
function Qs(e) {
  try {
    return [JSON.parse(e), void 0];
  } catch (t) {
    return [void 0, `${t}`];
  }
}
const U_ = (e, t) => ({
  runScan: () => e({
    actionCreator: va,
    effect: async (n, r) => {
      t.postMessage({
        command: "runScan",
        payload: n.payload
      });
    }
  }),
  runFullScan: () => e({
    actionCreator: Qd,
    effect: async (n, r) => {
      t.postMessage({
        command: "runFullScan",
        payload: n.payload
      });
    }
  }),
  saveScanconf: () => e({
    matcher: Jn(
      Ur,
      ef,
      ka,
      xa,
      ba,
      Mt,
      qt,
      Ft,
      Lt,
      tf,
      sf,
      rf,
      of,
      nf,
      vs,
      wa,
      af
    ),
    effect: async (n, r) => {
      const { scanconf: o } = r.getState(), [i, s] = Ai(o.oas, o.playbook);
      if (s !== void 0)
        return;
      const l = JSON.stringify(i, null, 2);
      t.postMessage({
        command: "saveScanconf",
        payload: l
      });
    }
  }),
  sendHttpRequest: () => e({
    actionCreator: Iv,
    effect: async (n, r) => {
      const { id: o, request: i, config: s } = n.payload;
      t.postMessage({ command: "sendHttpRequest", payload: { id: o, request: i, config: s } });
    }
  }),
  showEnvWindow: () => e({
    actionCreator: bd,
    effect: async (n, r) => {
      t.postMessage({ command: "showEnvWindow", payload: void 0 });
    }
  }),
  savePrefs: () => e({
    actionCreator: wd,
    effect: async (n, r) => {
      const { prefs: o } = r.getState();
      t.postMessage({
        command: "savePrefs",
        payload: o
      });
    }
  }),
  openLink: dm(e, t),
  updateScanconf: () => e({
    actionCreator: xf,
    effect: async (n, r) => {
      t.postMessage({
        command: "updateScanconf",
        payload: void 0
      });
    }
  })
});
function V_(e) {
  return () => e({
    actionCreator: bf,
    effect: async (t, n) => {
      const { oas: r, scanconf: o } = n.getState().scanconfUpdate, [i, s] = W_(o);
      if (s !== void 0) {
        n.dispatch(
          vt({ message: `Failed to parse scan configuration: ${s}` })
        ), n.dispatch(ye(["general-error"]));
        return;
      }
      const [l, c] = bl(r, i);
      if (c !== void 0) {
        const u = c.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        n.dispatch(vt({ message: u })), n.dispatch(ye(["general-error"]));
        return;
      }
      n.dispatch(di({ playbook: l, oas: r })), n.dispatch(ye(["scanconf", "operations"]));
    }
  });
}
function W_(e) {
  try {
    return [JSON.parse(e), void 0];
  } catch (t) {
    return [void 0, `${t}`];
  }
}
const _p = Xp(), _e = _p.startListening;
function G_(e, t) {
  const n = AC(_e), r = IC(_e), o = DC(_e), i = NC(_e), s = PC(_e), l = RC(_e), c = MC(_e), u = zC(_e), d = U_(_e, e);
  return fm(_e, t), Yp({
    ...d,
    executeTryScenarioListener: n,
    executeMockScenarioListener: r,
    executeRequestListener: i,
    executeMockRequestListener: o,
    executeMockAuthRequestsListener: s,
    executeTryAuthenticationListener: l,
    executeTryGlobalListener: c,
    executeMockGlobalListener: u,
    executeSendHttpRequestListener: Yg(_e, e),
    executeConfirmationAccept: vj(_e),
    executeShowScanconfOperationListener: B_(_e),
    executeLoadUpdatedScanconfListener: H_(_e, e),
    executeSkipScanconfUpdate: V_(_e)
  }), _p;
}
function K_({
  operationId: e,
  goToRequest: t
}) {
  const n = fe(), { playbook: r, oas: o } = Q((y) => y.scanconf), { scenarioId: i, mockResult: s } = Q((y) => y.operations), l = r.operations[e].scenarios, c = Object.keys(r.operations), u = Object.keys(r.requests || {}), d = (y) => n(gf(y)), p = (y, v) => n(Lt({ location: y, reference: v })), f = (y) => n(Ft(y)), h = (y, v) => n(qt({ location: y, to: v })), m = (y, v) => {
    n(
      Mt({
        container: y,
        stage: {
          ref: v
        }
      })
    );
  }, g = l.map((y, v) => ({
    id: `${v}`,
    title: y.key,
    /* not implemented
    menu: (
      <Menu>
        <MenuItem onSelect={() => undefined}>Delete</MenuItem>
      </Menu>
    ),
    */
    content: /* @__PURE__ */ a.jsxs(X_, { children: [
      /* @__PURE__ */ a.jsx(
        Wn,
        {
          oas: o,
          stages: y.requests,
          container: { container: "operationScenarios", operationId: e, scenarioIndex: v },
          executionResult: Ke(s, "operationScenarios"),
          saveStage: p,
          moveStage: h,
          removeStage: f,
          operations: r.operations,
          requests: r.requests,
          goToRequest: t,
          fuzzing: !0
        }
      ),
      /* @__PURE__ */ a.jsx(Y_, { children: /* @__PURE__ */ a.jsx(
        Gn,
        {
          operationIds: c,
          requestIds: u,
          onSelect: (w) => m({ container: "operationScenarios", operationId: e, scenarioIndex: v }, w)
        }
      ) })
    ] })
  }));
  return /* @__PURE__ */ a.jsx(
    kt,
    {
      activeTab: `${i}`,
      setActiveTab: (y) => d(parseInt(y)),
      tabs: g
    }
  );
}
const X_ = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`, Y_ = S.div`
  margin-left: 18px;
`;
function Q_({
  authorizationTests: e,
  onSelect: t
}) {
  const o = e, [i, s] = P.useState(o), { isOpen: l, getMenuProps: c, getInputProps: u, getItemProps: d, openMenu: p } = oi({
    initialInputValue: "",
    items: i,
    onSelectedItemChange: ({ selectedItem: f }) => {
      f && t(f);
    },
    onInputValueChange: ({ inputValue: f }) => {
      s(
        o.filter((h) => !f || h.toLowerCase().includes(f))
      );
    },
    itemToString: (f) => f || ""
  });
  return /* @__PURE__ */ a.jsxs(J_, { children: [
    /* @__PURE__ */ a.jsx(
      Z_,
      {
        autoFocus: !0,
        ...u({
          onFocus() {
            p();
          }
        }),
        placeholder: "",
        onBlur: (f) => {
          t(void 0);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(e2, { children: /* @__PURE__ */ a.jsx(t2, { ...c(), $isOpen: l, children: l && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      i.map((f, h) => /* @__PURE__ */ a.jsx(
        "li",
        {
          ...d({
            item: f,
            index: h
          }),
          children: f
        },
        `li-${h}`
      )),
      i.length === 0 && /* @__PURE__ */ a.jsx("li", { children: "No more tests available" })
    ] }) }) })
  ] });
}
const J_ = S.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${x.border});
`, Z_ = S.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  &::placeholder {
    color: var(${x.inputPlaceholderForeground});
  }
`, e2 = S.div`
  position: relative;
  z-index: 1;
`, t2 = S.ul`
  ${({ $isOpen: e }) => e && `border: 1px solid var(${x.dropdownBorder});`}
  background-color: var(${x.dropdownBackground});
  color: var(${x.dropdownForeground});
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
    background-color: var(${x.listHoverBackground});
  }
`;
function n2({
  authorizationTests: e,
  auth: t,
  existing: n,
  credentials: r,
  onSelect: o
}) {
  const [i, s] = P.useState(!1), c = Object.entries(e).filter(([u, d]) => o2(r, t, d.source[0])).map(([u]) => u).filter((u) => !n.includes(u));
  return i ? /* @__PURE__ */ a.jsx(
    Q_,
    {
      onSelect: (u) => {
        u !== void 0 && o(u), s(!1);
      },
      authorizationTests: c
    }
  ) : /* @__PURE__ */ a.jsxs(
    r2,
    {
      onClick: (u) => {
        u.stopPropagation(), u.preventDefault(), s(!0);
      },
      children: [
        /* @__PURE__ */ a.jsx(Hr, {}),
        " Add authorization test"
      ]
    }
  );
}
const r2 = S.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${x.border});
  color: var(${x.linkForeground});
  > svg {
    fill: var(${x.linkForeground});
  }
`;
function o2(e, t, n) {
  return t !== void 0 && t.some((r) => {
    var i;
    const o = (i = e[r]) == null ? void 0 : i.default;
    return n === r || n === `${r}/${o}`;
  });
}
function i2({
  authorizationTests: e,
  removeTest: t
}) {
  return /* @__PURE__ */ a.jsx(s2, { children: e.map((n, r) => /* @__PURE__ */ a.jsxs(a2, { children: [
    /* @__PURE__ */ a.jsx("div", { children: n }),
    /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsxs(Bt, { onClick: (o) => o.stopPropagation(), onSelect: () => t(n), children: [
      /* @__PURE__ */ a.jsx(Qe, {}),
      "Delete"
    ] }) })
  ] }, r)) });
}
const s2 = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, a2 = S.div`
  border: 1px solid var(${x.border});
  background-color: var(${x.background});
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
function Ep(e, t) {
  if (e.operations !== void 0)
    for (const n of Object.keys(e == null ? void 0 : e.operations))
      n !== t && (e.operations[n].scenarios = [], e.operations[n].before = [], e.operations[n].after = [], e.operations[n].customTests = [], e.operations[n].authorizationTests = []);
  return JSON.stringify(e, null, 2);
}
function El(e, t, n, r, o) {
  return t === "api-token" && n == "docker" && r && (o === "darwin" || o === "win32") && (e.toLowerCase().startsWith("https://localhost") || e.toLowerCase().startsWith("http://localhost")) ? e.replace(/localhost/i, "host.docker.internal") : e;
}
function Ni({
  path: e,
  method: t,
  operationId: n,
  children: r
}) {
  return /* @__PURE__ */ a.jsxs(l2, { children: [
    n && /* @__PURE__ */ a.jsxs(c2, { children: [
      n,
      /* @__PURE__ */ a.jsx(Od, {})
    ] }),
    /* @__PURE__ */ a.jsxs(u2, { children: [
      /* @__PURE__ */ a.jsx(d2, { children: t }),
      /* @__PURE__ */ a.jsx(f2, { children: e })
    ] }),
    r
  ] });
}
const l2 = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-break: anywhere;
`, c2 = S.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  > svg {
    fill: var(${x.linkForeground});
  }
`, u2 = S.div`
  display: flex;
  gap: 4px;
`, d2 = S.div`
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
`, f2 = S.div``;
function h2({ operationId: e }) {
  var E, j, _;
  const t = fe(), { oas: n, playbook: r, servers: o } = Q(($) => $.scanconf), i = Q(($) => $.config.data), { mockResult: s, tryResult: l } = Q(($) => $.operations), c = Q(($) => $.env.data), u = ($) => t(Ft($)), d = ($, D) => t(Lt({ location: $, reference: D })), p = ($, D) => t(qt({ location: $, to: D })), f = ($, D) => {
    t(
      Mt({
        container: $,
        stage: {
          ref: D
        }
      })
    );
  }, h = ($) => {
    t(Zt($)), t(ye(["scanconf", "requests"]));
  }, m = Object.keys(r.operations), g = Object.keys(r.requests || {}), y = r.operations[e], v = Ke(s, "before"), w = Ke(s, "after"), {
    simple: b,
    environment: {
      env: { host: k }
    }
  } = bn(Ri(r), c);
  return y === void 0 ? /* @__PURE__ */ a.jsx(
    Jt,
    {
      message: `Unable to find operation with operationId "${e}" in scan configuration`,
      children: /* @__PURE__ */ a.jsx("p", { children: "Verify if the OpenAPI file contains operations that were added after the scan configuration was created. If needed, consider deleting and recreating the scan configuration." })
    }
  ) : /* @__PURE__ */ a.jsxs(p2, { children: [
    /* @__PURE__ */ a.jsx(
      Kn,
      {
        menu: !0,
        servers: o,
        host: k,
        onTry: ($) => {
          t(mf($));
        },
        onScan: ($) => {
          const D = El(
            $,
            i.platformAuthType,
            i.scanRuntime,
            i.docker.replaceLocalhost,
            i.platform
          ), [O, C] = Ai(n, r);
          if (C !== void 0) {
            console.log("failed to serialize", C);
            return;
          }
          t(
            va({
              path: y.request.request.path,
              method: y.request.request.method,
              operationId: e,
              env: {
                SCAN42C_HOST: D,
                ...b
              },
              scanconf: Ep(O, e)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      g2,
      {
        onClick: ($) => {
          $.stopPropagation(), $.preventDefault(), h({ type: "operation", id: e });
        },
        children: /* @__PURE__ */ a.jsx(
          Ni,
          {
            operationId: e,
            path: y.request.request.path,
            method: y.request.request.method
          }
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ee,
      {
        defaultOpen: !1,
        title: "Authorization Tests",
        count: y.authorizationTests.length,
        children: /* @__PURE__ */ a.jsxs(ds, { children: [
          /* @__PURE__ */ a.jsx(
            i2,
            {
              authorizationTests: y.authorizationTests,
              removeTest: ($) => {
                const D = y.authorizationTests.filter((O) => O !== $);
                t(
                  vs({
                    operationId: e,
                    authorizationTests: D
                  })
                );
              }
            }
          ),
          /* @__PURE__ */ a.jsx(
            n2,
            {
              authorizationTests: r.authorizationTests,
              existing: y.authorizationTests,
              auth: y.request.auth,
              credentials: r.authenticationDetails[0],
              onSelect: ($) => {
                t(
                  vs({
                    operationId: e,
                    authorizationTests: [...y.authorizationTests, $]
                  })
                );
              }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ a.jsx(Ee, { defaultOpen: !1, title: "Before", count: (E = y.before) == null ? void 0 : E.length, children: /* @__PURE__ */ a.jsxs(ds, { children: [
      /* @__PURE__ */ a.jsx(
        Wn,
        {
          oas: n,
          stages: y.before,
          container: { container: "operationBefore", operationId: e },
          executionResult: Ke(s, "operationBefore"),
          saveStage: d,
          moveStage: p,
          removeStage: u,
          operations: r.operations,
          requests: r.requests,
          goToRequest: h
        }
      ),
      /* @__PURE__ */ a.jsx(
        Gn,
        {
          operationIds: m,
          requestIds: g,
          onSelect: ($) => f({ container: "operationBefore", operationId: e }, $)
        }
      )
    ] }) }),
    /* @__PURE__ */ a.jsx(Ee, { title: "Scenarios", count: (j = y.scenarios) == null ? void 0 : j.length, children: /* @__PURE__ */ a.jsx(K_, { operationId: e, goToRequest: h }) }),
    /* @__PURE__ */ a.jsx(Ee, { defaultOpen: !1, title: "After", count: (_ = y.after) == null ? void 0 : _.length, children: /* @__PURE__ */ a.jsxs(ds, { children: [
      /* @__PURE__ */ a.jsx(
        Wn,
        {
          oas: n,
          stages: y.after,
          container: { container: "operationAfter", operationId: e },
          executionResult: Ke(s, "operationAfter"),
          saveStage: d,
          removeStage: u,
          moveStage: p,
          operations: r.operations,
          requests: r.requests,
          goToRequest: h
        }
      ),
      /* @__PURE__ */ a.jsx(
        Gn,
        {
          operationIds: m,
          requestIds: g,
          onSelect: ($) => f({ container: "operationAfter", operationId: e }, $)
        }
      )
    ] }) }),
    (v == null ? void 0 : v.status) === "failure" && /* @__PURE__ */ a.jsx(Jt, { message: "Check Global Before block" }),
    (w == null ? void 0 : w.status) === "failure" && /* @__PURE__ */ a.jsx(Jt, { message: "Check Global After block" }),
    l.length > 0 && /* @__PURE__ */ a.jsx(Ee, { title: "Result", children: /* @__PURE__ */ a.jsx(qn, { result: l, collapsible: !0 }) })
  ] });
}
const p2 = S.div`
  padding: 8px;
`, ds = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, g2 = S.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 8px;
  border: 1px solid var(${x.border});
  border-radius: 2px;
  cursor: pointer;
`, Op = S.button`
  cursor: pointer;
  background-color: var(${x.buttonSecondaryBackground});
  color: var(${x.buttonSecondaryForeground});
  border: 1px solid var(${x.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${x.buttonSecondaryHoverBackground});
  }
`;
function m2({
  onAddScenario: e,
  operations: t
}) {
  const n = Object.entries(t).filter(([l, c]) => !c.customized).map(([l, c]) => l), [r, o] = P.useState(!1), [i, s] = P.useState(
    void 0
  );
  return /* @__PURE__ */ a.jsxs(
    ta,
    {
      open: r,
      onOpenChange: (l) => {
        o(l);
      },
      children: [
        /* @__PURE__ */ a.jsx(na, { asChild: !0, children: /* @__PURE__ */ a.jsx(Mr, { style: { width: "100%" }, children: "New scenario" }) }),
        /* @__PURE__ */ a.jsxs(ra, { children: [
          /* @__PURE__ */ a.jsx(x2, {}),
          /* @__PURE__ */ a.jsx(b2, { children: /* @__PURE__ */ a.jsxs(y2, { children: [
            /* @__PURE__ */ a.jsx(oa, { children: "New Scenario" }),
            /* @__PURE__ */ a.jsx(ia, { children: "Add happy path scenario for an operation" }),
            /* @__PURE__ */ a.jsx(v2, { children: /* @__PURE__ */ a.jsx(
              ep,
              {
                options: n,
                placeholder: "Select operation",
                onSelectedItemChange: (l) => {
                  s(l);
                }
              }
            ) }),
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
              /* @__PURE__ */ a.jsx(
                Mr,
                {
                  onClick: () => {
                    i != null && n.includes(i) && (e(i), o(!1));
                  },
                  children: "Add"
                }
              ),
              /* @__PURE__ */ a.jsx(sa, { asChild: !0, children: /* @__PURE__ */ a.jsx(Op, { children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
const y2 = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, v2 = S.div`
  border: 1px solid var(${x.border});
`, x2 = S(aa)`
  background-color: var(${x.computedTwo});
  position: fixed;
  inset: 0;
`, b2 = S(la)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${x.background});
  color: var(${x.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function k2() {
  const e = fe(), t = Q((l) => l.operations.operationId), n = (l) => e(bs(l)), r = (l) => e(Av(l)), {
    playbook: { operations: o }
  } = Q((l) => l.scanconf), s = [
    {
      id: "operations",
      title: "Operations",
      items: Object.entries(o).filter(([l, c]) => c.customized).map(([l, c]) => ({
        id: l,
        label: l,
        menu: /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsx(
          Bt,
          {
            onClick: (u) => u.stopPropagation(),
            onSelect: () => e(
              Qp({
                title: "Delete scenario",
                message: `Are you sure you want to delete scenario for operation "${l}"?`,
                actions: [
                  af(l),
                  // if removing the current operation, clear the operationId
                  bs(t === l ? void 0 : t)
                ]
              })
            ),
            children: "Delete"
          }
        ) }) })
      }))
    }
  ];
  return /* @__PURE__ */ a.jsx(
    Zn,
    {
      title: "operations",
      noSectionTitles: !0,
      selected: t ? { sectionId: "operations", itemId: t } : void 0,
      sections: s,
      onSelected: (l) => n(l.itemId),
      render: (l) => /* @__PURE__ */ a.jsx(h2, { operationId: l.itemId }, l.itemId),
      renderEmpty: () => /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h2", { children: "Scenarios" }),
        /* @__PURE__ */ a.jsx("p", { children: "Scan scenarios let you test operations that involve complex request flows" }),
        /* @__PURE__ */ a.jsx("p", { children: "Scenarios let you set up exact request and response sequences, ensuring resources are created or deleted as needed for testing specific API operations. Additionally, you can extract values from responses and pass them between subsequent operations." })
      ] }),
      renderButtons: () => /* @__PURE__ */ a.jsx(
        m2,
        {
          operations: o,
          onAddScenario: (l) => {
            n(l), r(l);
          }
        }
      )
    }
  );
}
function w2(e) {
  return e ? e.label : "";
}
function ed({
  name: e,
  options: t,
  placeholder: n,
  label: r
}) {
  const { field: o } = ie({
    name: e,
    rules: { required: !0 }
  }), i = j2(t, o.value), s = (l) => {
    o.onChange(l == null ? void 0 : l.value);
  };
  return /* @__PURE__ */ a.jsx(
    S2,
    {
      options: t,
      placeholder: n,
      label: r,
      selected: i == null ? void 0 : i.value,
      onSelectedItemChange: s
    }
  );
}
function S2({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o
}) {
  var d;
  const i = (d = e.filter((p) => p.value === r)) == null ? void 0 : d[0], { isOpen: s, getToggleButtonProps: l, getMenuProps: c, getItemProps: u } = ri({
    items: e,
    itemToString: w2,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      o(p);
    }
  });
  return /* @__PURE__ */ a.jsxs(C2, { children: [
    /* @__PURE__ */ a.jsxs(_2, { children: [
      n !== void 0 && /* @__PURE__ */ a.jsx("div", { children: n }),
      /* @__PURE__ */ a.jsxs(E2, { ...l(), children: [
        /* @__PURE__ */ a.jsx("span", { children: i ? i.label : t ?? "" }),
        /* @__PURE__ */ a.jsx(Fr, {})
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(O2, { ...c(), $isOpen: s, children: s && e.map((p, f) => /* @__PURE__ */ a.jsx("li", { ...u({ item: p, index: f }), children: /* @__PURE__ */ a.jsx("span", { children: p.label }) }, `${p.value}${f}`)) })
  ] });
}
function j2(e, t) {
  var n;
  return (n = e.filter((r) => r.value === t)) == null ? void 0 : n[0];
}
const C2 = S.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, _2 = S.div`
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
`, E2 = S.div`
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
`, O2 = S.ul`
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
`;
function T2({
  onAddExternalRequest: e
}) {
  const t = _d({
    defaultValues: {
      id: "",
      method: "post",
      url: "http://localhost:8080/",
      mode: "json"
    },
    mode: "onChange"
  }), n = vg.map((s) => ({ value: s, label: s.toUpperCase() })), [r, o] = P.useState(!1), i = (s) => {
    e(s.id, s.method, s.url, s.mode);
  };
  return /* @__PURE__ */ a.jsxs(
    ta,
    {
      open: r,
      onOpenChange: (s) => {
        o(s), s && t.reset();
      },
      children: [
        /* @__PURE__ */ a.jsx(na, { asChild: !0, children: /* @__PURE__ */ a.jsx(P2, { children: /* @__PURE__ */ a.jsx(Hr, {}) }) }),
        /* @__PURE__ */ a.jsxs(ra, { children: [
          /* @__PURE__ */ a.jsx(I2, {}),
          /* @__PURE__ */ a.jsx(D2, { children: /* @__PURE__ */ a.jsx(Ed, { ...t, children: /* @__PURE__ */ a.jsxs(
            $2,
            {
              onSubmit: (s) => {
                t.handleSubmit(i)(s), s.preventDefault(), o(!1);
              },
              children: [
                /* @__PURE__ */ a.jsx(oa, { children: "New External Request" }),
                /* @__PURE__ */ a.jsx(ia, { children: "Add new external request" }),
                /* @__PURE__ */ a.jsx(rt, { label: "Request ID", name: "id" }),
                /* @__PURE__ */ a.jsx(rt, { label: "URL", name: "url" }),
                /* @__PURE__ */ a.jsx(ed, { label: "Method", name: "method", options: n }),
                /* @__PURE__ */ a.jsx(
                  ed,
                  {
                    label: "Content type",
                    name: "mode",
                    options: [
                      { value: "json", label: "application/json" },
                      { value: "urlencoded", label: "application/x-www-form-urlencoded" }
                    ]
                  }
                ),
                /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
                  /* @__PURE__ */ a.jsx(Mr, { type: "submit", children: "Add" }),
                  /* @__PURE__ */ a.jsx(sa, { asChild: !0, children: /* @__PURE__ */ a.jsx(Op, { children: "Cancel" }) })
                ] })
              ]
            }
          ) }) })
        ] })
      ]
    }
  );
}
const $2 = S.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, I2 = S(aa)`
  background-color: var(${x.computedTwo});
  position: fixed;
  inset: 0;
`, D2 = S(la)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${x.background});
  color: var(${x.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, P2 = S.button`
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
function Tp({ name: e, variables: t }) {
  const {
    field: { value: n }
  } = ie({
    name: e
  });
  function r(i) {
    console.error(i);
  }
  const o = {
    namespace: "editor",
    editorState: () => {
      const i = JSON.stringify(n, null, 2), s = Be(), l = i.split(`
`);
      for (let c = 0; c < l.length; c++)
        s.append(ce(l[c])), c < l.length - 1 && s.append(un());
      de().append(s);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: r,
    nodes: [At]
  };
  return /* @__PURE__ */ a.jsx(A2, { children: /* @__PURE__ */ a.jsxs(sl, { initialConfig: o, children: [
    /* @__PURE__ */ a.jsx(
      ul,
      {
        contentEditable: /* @__PURE__ */ a.jsx(al, {}),
        placeholder: /* @__PURE__ */ a.jsx("div", {}),
        ErrorBoundary: ll
      }
    ),
    /* @__PURE__ */ a.jsx(cl, {}),
    /* @__PURE__ */ a.jsx(Jh, { variables: t }),
    /* @__PURE__ */ a.jsx(z2, { name: e })
  ] }) });
}
function z2({ name: e }) {
  const [t] = ze(), [n, r] = P.useState(void 0), { field: o } = ie({
    name: e
  });
  return P.useEffect(() => {
    let i;
    return t.registerTextContentListener((s) => {
      i !== void 0 && clearTimeout(i);
      try {
        o.onChange(JSON.parse(s)), r(void 0);
      } catch (l) {
        i = setTimeout(() => {
          l instanceof SyntaxError ? r(l.message) : r(`${l}`);
        }, 500);
      }
    });
  }, [t, o]), n === void 0 ? /* @__PURE__ */ a.jsxs(td, { children: [
    "Valid JSON",
    /* @__PURE__ */ a.jsx(
      Id,
      {
        style: {
          fill: `var(${x.foreground})`
        }
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs(td, { $error: !0, children: [
    n,
    /* @__PURE__ */ a.jsx(
      ni,
      {
        style: {
          fill: `var(${x.errorForeground})`
        }
      }
    )
  ] });
}
const A2 = S.div`
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
`, td = S.div`
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
function R2({
  name: e,
  password: t
}) {
  const { field: n } = ie({
    name: e
  });
  return /* @__PURE__ */ a.jsx("input", { ...n, type: t ? "password" : "text" });
}
function nd({
  name: e,
  variables: t
}) {
  const { fields: n, append: r, remove: o } = vn({
    name: e
  });
  return /* @__PURE__ */ a.jsx(q2, { children: /* @__PURE__ */ a.jsxs(F2, { children: [
    /* @__PURE__ */ a.jsxs(B2, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsx(L2, { children: n.map((i, s) => /* @__PURE__ */ a.jsx(
      H2,
      {
        name: `${e}.${s}`,
        variables: t,
        remove: () => {
          o(s);
        }
      },
      i.id
    )) }),
    /* @__PURE__ */ a.jsx(N2, { append: r })
  ] }) });
}
function N2({ append: e }) {
  return /* @__PURE__ */ a.jsx(
    M2,
    {
      placeholder: "name",
      value: "",
      onChange: (t) => {
        e({ key: t.target.value, value: "" }, { shouldFocus: !0 });
      }
    }
  );
}
const M2 = S.input`
  grid-column: span 3;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  margin-right: 10px;
  padding: 4px 8px;
`, q2 = S.div`
  margin: 8px 4px;
`, F2 = S.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, L2 = S.div`
  display: contents;
`, B2 = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function H2({
  name: e,
  variables: t,
  remove: n
}) {
  return /* @__PURE__ */ a.jsxs(V2, { children: [
    /* @__PURE__ */ a.jsx(R2, { name: `${e}.key` }),
    /* @__PURE__ */ a.jsx(Ti, { name: `${e}.value`, variables: t }),
    /* @__PURE__ */ a.jsx(
      U2,
      {
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), n();
        },
        children: /* @__PURE__ */ a.jsx(Qe, {})
      }
    )
  ] });
}
const U2 = S.button`
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
`, V2 = S.div`
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
function W2({
  requestRef: e,
  stage: t,
  saveRequest: n,
  defaultCollapsed: r,
  variables: o
}) {
  const i = K2(t);
  return /* @__PURE__ */ a.jsx($p, { children: /* @__PURE__ */ a.jsx(
    dt,
    {
      data: t,
      saveData: n,
      wrapFormData: xS,
      unwrapFormData: SS,
      children: /* @__PURE__ */ a.jsxs(mn, { defaultCollapsed: r, children: [
        /* @__PURE__ */ a.jsxs(Cd, { children: [
          /* @__PURE__ */ a.jsx("span", { children: e.id }),
          /* @__PURE__ */ a.jsxs(J2, { children: [
            /* @__PURE__ */ a.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ a.jsx(gl, { name: "defaultResponse", options: i })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs(nr, { children: [
          /* @__PURE__ */ a.jsx(Q2, { children: t.request.method }),
          /* @__PURE__ */ a.jsx(Y2, { onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ a.jsx(Ti, { variables: o, name: "url" }) })
        ] }),
        /* @__PURE__ */ a.jsx(G2, { stage: t, variables: o })
      ] })
    }
  ) });
}
function G2({
  stage: e,
  variables: t
}) {
  return /* @__PURE__ */ a.jsx($p, { children: /* @__PURE__ */ a.jsx(
    kt,
    {
      tabs: [
        {
          id: "body",
          title: "Body",
          content: /* @__PURE__ */ a.jsx(Tp, { variables: t, name: "body.value" }),
          disabled: e.request.body === void 0
        },
        {
          id: "query",
          title: "Query",
          content: /* @__PURE__ */ a.jsx(nd, { name: "parameters.query", variables: t })
        },
        {
          id: "header",
          title: "Headers",
          content: /* @__PURE__ */ a.jsx(nd, { name: "parameters.header", variables: t })
        },
        {
          id: "responses",
          title: "Response processing",
          content: /* @__PURE__ */ a.jsx(gi, { editable: !0, responseCodes: X2 })
        }
      ]
    }
  ) });
}
function K2(e) {
  return Object.keys(e.responses || {}).map((t) => ({ label: t, value: t }));
}
const X2 = [
  "100",
  "101",
  "200",
  "201",
  "202",
  "203",
  "204",
  "205",
  "206",
  "300",
  "301",
  "302",
  "303",
  "304",
  "305",
  "307",
  "400",
  "401",
  "402",
  "403",
  "404",
  "405",
  "406",
  "407",
  "408",
  "409",
  "410",
  "411",
  "412",
  "413",
  "414",
  "415",
  "416",
  "417",
  "426",
  "500",
  "501",
  "502",
  "503",
  "504",
  "505"
], $p = S.div`
  > div {
    background-color: var(${x.background});
  }
`, Y2 = S.div`
  flex: 1;
  background-color: var(${x.background});
  border: 1px solid var(${x.border});
`, Q2 = S.div`
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
`, J2 = S.div`
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
function Z2({
  request: e,
  requestRef: t
}) {
  var b, k, E;
  const n = Q((j) => j.prefs.useGlobalBlocks), {
    tryResult: r,
    mockResult: o,
    mockMissingVariables: i
  } = Q((j) => j.requests), s = fe(), { playbook: l, servers: c } = Q((j) => j.scanconf), u = Q((j) => j.env.data), d = (j, _) => s(Sa({ server: j, inputs: _ })), p = (j) => s(Ur({ ref: t, stage: j })), f = Ke(o, "Global Before"), h = Ke(o, "Global After"), m = Ke(o, "Request"), g = [
    ...ua,
    ...sE(((E = (k = (b = m == null ? void 0 : m.results) == null ? void 0 : b[0]) == null ? void 0 : k.variablesReplaced) == null ? void 0 : E.stack) || [])
  ], [y, v] = P.useState({}), {
    environment: {
      env: { host: w }
    }
  } = bn(Ri(l), u);
  return P.useEffect(() => {
    const j = { ...y };
    for (const _ of Object.keys(j))
      i.includes(_) || delete j[_];
    for (const _ of i)
      j[_] === void 0 && (j[_] = "");
    v(j);
  }, [i]), /* @__PURE__ */ a.jsxs(eE, { children: [
    /* @__PURE__ */ a.jsx(
      Kn,
      {
        servers: c,
        host: w,
        onTry: (j) => d(j, y),
        menu: !0
      }
    ),
    /* @__PURE__ */ a.jsxs(Ee, { title: "Request", children: [
      /* @__PURE__ */ a.jsx(
        W2,
        {
          defaultCollapsed: !1,
          variables: g,
          requestRef: t,
          stage: e,
          saveRequest: p
        }
      ),
      /* @__PURE__ */ a.jsxs(iE, { children: [
        "Unset variables",
        /* @__PURE__ */ a.jsx(tr, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ a.jsx(oE, { children: /* @__PURE__ */ a.jsx(
        dt,
        {
          wrapFormData: tE,
          unwrapFormData: nE,
          data: y,
          saveData: (j) => v(j),
          children: /* @__PURE__ */ a.jsx(Zr, { name: "env" })
        }
      ) })
    ] }),
    n && (f == null ? void 0 : f.status) === "failure" && /* @__PURE__ */ a.jsx(rd, { children: /* @__PURE__ */ a.jsx(Jt, { message: "Check Global Before block" }) }),
    n && (h == null ? void 0 : h.status) === "failure" && /* @__PURE__ */ a.jsx(rd, { children: /* @__PURE__ */ a.jsx(Jt, { message: "Check Global After block" }) }),
    r.length > 0 && /* @__PURE__ */ a.jsx(Ee, { title: "Result", children: /* @__PURE__ */ a.jsx(qn, { result: r, collapsible: n }) })
  ] });
}
const eE = S.div`
  padding: 8px;
`, rd = S.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function tE(e) {
  return {
    env: Object.entries(e).map(([t, n]) => ({ key: t, value: n, type: typeof n }))
  };
}
function nE(e) {
  const t = {};
  for (const { key: n, value: r, type: o } of e.env)
    t[n] = rE(r, o);
  return t;
}
function rE(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
const oE = S.div`
  border: 1px solid var(${x.border});
  background-color: var(${x.background});
`, iE = S.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function sE(e) {
  const t = [];
  for (const n of e)
    for (const r of Object.keys(n.env))
      t.includes(r) || t.push(r);
  return t.sort(), t;
}
const aE = { type: "string" };
function lE({
  name: e,
  schema: t,
  onDelete: n,
  variables: r,
  isDefinedInOpenAPI: o
}) {
  const {
    fieldState: { error: i }
  } = ie({ name: `${e}.value` }), { field: s } = ie({ name: `${e}.key` });
  return /* @__PURE__ */ a.jsxs(cE, { children: [
    /* @__PURE__ */ a.jsxs(dE, { children: [
      s.value,
      !o && /* @__PURE__ */ a.jsx(tr, { icon: "exclamation", children: "Parameter is not defined in the OpenAPI specification for this API" })
    ] }),
    /* @__PURE__ */ a.jsx(
      Ti,
      {
        name: `${e}.value`,
        variables: r,
        encode: (l) => hE(t || aE, l),
        decode: (l) => pE(t, l)
      }
    ),
    /* @__PURE__ */ a.jsx(
      fE,
      {
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), n();
        },
        children: /* @__PURE__ */ a.jsx(Qe, {})
      }
    ),
    i && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(uE, { children: [
        /* @__PURE__ */ a.jsx(ut, {}),
        /* @__PURE__ */ a.jsx("span", { children: i.message })
      ] }),
      /* @__PURE__ */ a.jsx("div", {})
    ] })
  ] });
}
const cE = S.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, uE = S.div`
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
`, dE = S.div`
  flex: 1;
  border-bottom: 1px solid var(${x.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, fE = S.button`
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
function hE(e, t) {
  if (t === void 0)
    return "";
  const n = e.type;
  return n === void 0 || n === "string" || n === "number" || n === "integer" || n === "boolean" ? `${t}` : JSON.stringify(t);
}
function pE(e, t) {
  const n = (e == null ? void 0 : e.type) || "string";
  if (t.match(dg()) || n === "string")
    return t;
  if (n === "integer")
    return gE(t);
  if (n === "number")
    return mE(t);
  if (n === "boolean") {
    if (t === "true" || t === "false")
      return t === "true";
    throw new Error("failed to convert to 'boolean'");
  }
  if (n === "object" || n === "array")
    return yE(t);
  throw new Error(`failed to convert, unsupported type: ${n}`);
}
function gE(e) {
  const t = Number.parseInt(e, 10);
  if (isNaN(t))
    throw new Error("failed to convert to 'integer'");
  return t;
}
function mE(e) {
  const t = Number.parseFloat(e);
  if (isNaN(t))
    throw new Error("failed to convert to 'number'");
  return t;
}
function yE(e) {
  try {
    return JSON.parse(e);
  } catch (t) {
    throw new Error(`failed to convert: ${t}`);
  }
}
function vE({
  options: e,
  placeholder: t,
  selected: n,
  onSelectedItemChange: r
}) {
  const [o, i] = P.useState(""), [s, l] = P.useState(e);
  P.useEffect(() => {
    l(
      e.filter((h) => o === "" || h.toLowerCase().includes(o.toLowerCase()))
    );
  }, [o, e]);
  const { isOpen: c, getMenuProps: u, getInputProps: d, getItemProps: p, reset: f } = oi({
    initialInputValue: n,
    items: s,
    onSelectedItemChange: ({ selectedItem: h }) => {
      f(), r(h);
    },
    onInputValueChange: ({ inputValue: h }) => {
      i(h !== void 0 ? h : "");
    },
    itemToString: (h) => h || ""
  });
  return /* @__PURE__ */ a.jsxs(xE, { children: [
    /* @__PURE__ */ a.jsx(
      bE,
      {
        ...d({
          onKeyDown: (h) => {
            (h.key === "Enter" || h.key === "Tab") && (r(o), i(""), f());
          }
        }),
        placeholder: t
      }
    ),
    /* @__PURE__ */ a.jsx(kE, { $visible: c && (s.length > 0 || o.length > 0), children: /* @__PURE__ */ a.jsxs(wE, { ...u(), children: [
      s.map((h, m) => /* @__PURE__ */ a.jsx(
        "li",
        {
          ...p({
            item: h,
            index: m
          }),
          children: h
        },
        `li-${m}`
      )),
      o.length > 0 && s.length === 0 && /* @__PURE__ */ a.jsx(
        "li",
        {
          onClick: (h) => {
            h.stopPropagation(), h.preventDefault(), r(o), i(""), f();
          },
          children: o
        }
      )
    ] }) })
  ] });
}
const xE = S.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${x.focusBorder});
  }
  border: 1px solid transparent;
`, bE = S.input`
  background: transparent;
  border: none;
  color: var(${x.foreground});
  &::placeholder {
    color: var(${x.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, kE = S.div`
  position: relative;
  z-index: 1;
  visibility: ${({ $visible: e }) => e ? "visible" : "hidden"};
`, wE = S.ul`
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
function SE({
  name: e,
  group: t,
  onSelection: n,
  placeholder: r,
  allowUnknown: o
}) {
  const i = Lr({ name: e }), s = Object.keys(t), l = i.map(({ key: d }) => d), c = Object.entries(t).map(([d, p]) => ({
    name: d,
    isArray: jE(p)
  })).filter(({ isArray: d }) => d).map(({ name: d }) => d), u = s.filter(
    (d) => c.includes(d) || !l.includes(d)
  );
  return /* @__PURE__ */ a.jsx(CE, { children: /* @__PURE__ */ a.jsxs("div", { children: [
    o && /* @__PURE__ */ a.jsx(
      vE,
      {
        placeholder: r,
        options: s.filter((d) => u.includes(d)),
        onSelectedItemChange: (d) => {
          d && n(d, t[d]);
        }
      }
    ),
    !o && /* @__PURE__ */ a.jsx(
      or,
      {
        placeholder: r,
        options: s.map((d) => ({
          label: d,
          value: d,
          disabled: !u.includes(d)
        })),
        onSelectedItemChange: (d) => {
          d && n(d.value, t[d.value]);
        }
      }
    )
  ] }) });
}
function jE(e) {
  var t;
  return "type" in e && e.type === "array" || "schema" in e && ((t = e.schema) == null ? void 0 : t.type) === "array";
}
const CE = S.div`
  display: flex;
  margin-right: 10px;
  > div {
    flex: 1;
  }
`;
function Qt({
  oas: e,
  name: t,
  group: n,
  placeholder: r,
  variables: o,
  allowUnknown: i
}) {
  const { fields: s, append: l, remove: c } = vn({
    name: t
  }), u = async (d, p) => {
    l({ key: d, value: "" }, { shouldFocus: !0 });
  };
  return /* @__PURE__ */ a.jsxs(IE, { children: [
    /* @__PURE__ */ a.jsxs(DE, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsxs(PE, { children: [
      s.map((d, p) => /* @__PURE__ */ a.jsx(
        lE,
        {
          name: `${t}.${p}`,
          schema: EE(e, n, d.key),
          onDelete: () => c(p),
          variables: o,
          isDefinedInOpenAPI: _E(n, d.key)
        },
        d.id
      )),
      /* @__PURE__ */ a.jsx(
        SE,
        {
          placeholder: r,
          name: t,
          group: n,
          onSelection: u,
          allowUnknown: i
        }
      )
    ] })
  ] });
}
function _E(e, t) {
  return e[t] !== void 0;
}
function EE(e, t, n) {
  if (t[n]) {
    const r = t[n];
    return OE(r) ? $E(e, r) : TE(r);
  }
}
function OE(e) {
  var t;
  return "type" in e && e.type === "array" || "schema" in e && ((t = e.schema) == null ? void 0 : t.type) === "array";
}
function TE(e) {
  if ("schema" in e)
    return e.schema;
  if ("type" in e)
    return e;
}
function $E(e, t) {
  var n;
  if ("schema" in t && ((n = t.schema) == null ? void 0 : n.type) === "array")
    return Or(e, t.schema.items);
  if ("type" in t && t.type === "array")
    return Or(e, t.items);
}
const IE = S.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, DE = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, PE = S.div`
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
function zE(e, t, n) {
  const r = md(e, e.paths[t]), o = qr(e, t, n), i = yd(e, o);
  return vd(e, r, i);
}
function AE(e, t, n) {
  const r = qr(e, t, n);
  return ((r == null ? void 0 : r.security) ?? e.security ?? []).length > 0;
}
function RE(e, t, n) {
  var s, l;
  const r = qr(e, t, n), o = (r == null ? void 0 : r.security) ?? e.security ?? [], i = [];
  for (const c of o) {
    const u = {};
    for (const d of Object.keys(c))
      (s = e == null ? void 0 : e.securityDefinitions) != null && s[d] && (u[d] = (l = e == null ? void 0 : e.securityDefinitions) == null ? void 0 : l[d]);
    i.push(u);
  }
  return i;
}
function NE({
  scheme: e,
  schemeName: t,
  credentials: n,
  value: r,
  onChange: o
}) {
  const i = fe(), l = FE(n).filter(
    ({ credential: c }) => ml(c, e)
  ).map(({ name: c }) => ({ label: c, value: c }));
  return /* @__PURE__ */ a.jsx(ME, { children: /* @__PURE__ */ a.jsx(
    or,
    {
      placeholder: "",
      options: l,
      selected: r,
      onSelectedItemChange: (c) => c && o(c.value),
      bottomMenu: /* @__PURE__ */ a.jsxs(
        qE,
        {
          onClick: (c) => {
            c.stopPropagation(), c.preventDefault(), i(ye(["scanconf", "auth"]));
          },
          children: [
            "Manage authentication ",
            /* @__PURE__ */ a.jsx(Sd, {})
          ]
        }
      )
    }
  ) });
}
const ME = S.div``, qE = S.li`
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
function FE(e) {
  return Object.entries(e).map(([t, n]) => Object.entries(n.methods || {}).map(([r, o]) => ({ name: n.default === r ? t : `${t}/${r}`, credential: n }))).flat();
}
function LE({
  requirement: e,
  credentials: t,
  values: n,
  setValues: r
}) {
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: Object.keys(e).sort().map((o) => {
    const i = e[o];
    return /* @__PURE__ */ a.jsxs(BE, { children: [
      /* @__PURE__ */ a.jsxs(HE, { children: [
        'Credential for "',
        o,
        '"'
      ] }),
      /* @__PURE__ */ a.jsx(
        NE,
        {
          value: n[o],
          scheme: i,
          schemeName: o,
          credentials: t,
          onChange: (s) => {
            const l = { ...n };
            s !== void 0 ? l[o] = s : l[o] = "", r(l);
          }
        }
      )
    ] }, o);
  }) });
}
const BE = S.div`
  display: contents;
`, HE = S.div`
  display: flex;
  align-items: center;
`;
function UE({
  security: e,
  value: t,
  setValue: n
}) {
  const r = e.map((o, i) => ({
    value: i,
    label: Object.keys(o).sort().join(", ")
  }));
  return /* @__PURE__ */ a.jsxs(VE, { children: [
    /* @__PURE__ */ a.jsx(WE, { children: "Security scheme(s)" }),
    /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
      or,
      {
        options: r,
        selected: t,
        onSelectedItemChange: (o) => o && n(o.value)
      }
    ) })
  ] });
}
const VE = S.div`
  display: contents;
`, WE = S.div`
  display: flex;
  align-items: center;
`;
function Ip({
  oas: e,
  security: t,
  credentials: n
}) {
  const { field: r } = ie({
    name: "auth"
  }), o = YE(t, n, r.value), i = o.reduce(
    (c, u) => c.relevance > u.relevance ? c : u
  ), [s, l] = P.useState(
    i.requirementIndex
  );
  return /* @__PURE__ */ a.jsxs(GE, { children: [
    /* @__PURE__ */ a.jsxs(KE, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" })
    ] }),
    /* @__PURE__ */ a.jsxs(XE, { children: [
      /* @__PURE__ */ a.jsx(
        UE,
        {
          security: t,
          value: s,
          setValue: (c) => {
            l(c), r.onChange(Object.values(o[c].matches));
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        LE,
        {
          requirement: t[s],
          credentials: n,
          values: o[s].matches,
          setValues: (c) => {
            const u = Object.values(c);
            r.onChange(u);
          }
        }
      )
    ] })
  ] });
}
const GE = S.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`, KE = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, XE = S.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${x.border});
  }
`;
function YE(e, t, n) {
  const r = QE(t, n);
  return e.map((o, i) => {
    const s = ZE(o, r), l = Object.keys(o).length, c = Object.keys(s).length;
    return {
      requirementIndex: i,
      matches: s,
      relevance: c / l
    };
  });
}
function QE(e, t) {
  const n = {};
  for (const r of t) {
    const o = JE(e, r);
    o !== void 0 && (n[r] = o);
  }
  return n;
}
function JE(e, t) {
  for (const [n, r] of Object.entries(e)) {
    if (n === t)
      return r;
    for (const [o, i] of Object.entries(r.methods))
      if (`${n}/${o}` === t)
        return r;
  }
}
function ZE(e, t) {
  const n = { ...t }, r = {};
  for (const [o, i] of Object.entries(e))
    for (const [s, l] of Object.entries(n))
      if (ml(l, i)) {
        r[o] = s, delete n[s];
        break;
      }
  return r;
}
function eO({ name: e }) {
  const {
    field: { value: t }
  } = ie({ name: e });
  function n(o) {
    console.error(o);
  }
  const r = {
    namespace: "editor",
    editorState: () => {
      const o = Be(), i = t.split(`
`);
      for (let s = 0; s < i.length; s++)
        o.append(ce(i[s])), s < i.length - 1 && o.append(un());
      de().append(o);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: n,
    nodes: [At]
  };
  return /* @__PURE__ */ a.jsx(nO, { children: /* @__PURE__ */ a.jsxs(sl, { initialConfig: r, children: [
    /* @__PURE__ */ a.jsx(
      ul,
      {
        contentEditable: /* @__PURE__ */ a.jsx(al, {}),
        placeholder: /* @__PURE__ */ a.jsx("div", {}),
        ErrorBoundary: ll
      }
    ),
    /* @__PURE__ */ a.jsx(cl, {}),
    /* @__PURE__ */ a.jsx(tO, { name: e })
  ] }) });
}
function tO({ name: e }) {
  const [t] = ze(), { field: n } = ie({
    name: e
  });
  return P.useEffect(() => t.registerTextContentListener((r) => {
    n.onChange(r);
  }), [t, n]), null;
}
const nO = S.div`
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
function rO({
  oas: e,
  requestBody: t,
  variables: n
}) {
  const {
    field: { value: r }
  } = ie({ name: "body.mediaType" });
  return t === void 0 ? null : /* @__PURE__ */ a.jsxs(oO, { children: [
    r === "raw" && /* @__PURE__ */ a.jsx(eO, { name: "body.value" }),
    r !== "raw" && /* @__PURE__ */ a.jsx(Tp, { variables: n, name: "body.value" })
  ] });
}
const oO = S.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
function od(e) {
  return JSON.stringify(e, null, 2);
}
function id(e) {
  try {
    return JSON.parse(e);
  } catch (t) {
    return new Error(`failed to convert: ${t}`);
  }
}
function iO({
  oas: e,
  group: t,
  variables: n
}) {
  const { control: r } = yn(), {
    field: o,
    fieldState: { error: i }
  } = ie({
    name: "body.value",
    control: r,
    rules: {
      validate: (c) => lO(c)
    }
  }), [s, l] = P.useState(od(o.value));
  return P.useEffect(() => {
    o.value instanceof Error || JSON.stringify(id(s)) !== JSON.stringify(o.value) && l(od(o.value));
  }, [o.value, s]), /* @__PURE__ */ a.jsxs(sO, { children: [
    /* @__PURE__ */ a.jsx(
      "textarea",
      {
        rows: 10,
        onChange: (c) => {
          o.onChange(id(c.target.value)), l(c.target.value);
        },
        onBlur: o.onBlur,
        value: s,
        ref: o.ref
      }
    ),
    i && /* @__PURE__ */ a.jsxs(aO, { children: [
      /* @__PURE__ */ a.jsx(ut, {}),
      " ",
      i.message
    ] })
  ] });
}
const sO = S.div`
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
`, aO = S.div`
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
function lO(e) {
  if (e instanceof Error)
    return e.message;
}
function cO({
  oas: e,
  path: t,
  method: n,
  credentials: r,
  settings: o,
  availableVariables: i
}) {
  const { getValues: s } = yn(), l = s("body") !== void 0, c = da(e) ? uO(e, r, t, n, i, l) : dO(e, r, t, n, i, l);
  return /* @__PURE__ */ a.jsx(kt, { tabs: c });
}
function uO(e, t, n, r, o, i) {
  const s = fg(e, n, r), l = ca(e, n, r), c = Or(
    e,
    l == null ? void 0 : l.requestBody
  ), u = Lr({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ a.jsx(rO, { oas: e, requestBody: c, variables: o }),
      disabled: c === void 0 || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ a.jsx(
        Ip,
        {
          oas: e,
          credentials: t,
          security: hg(e, n, r)
        }
      ),
      disabled: !gS(e, n, r)
    },
    {
      id: "path",
      title: "Path",
      content: /* @__PURE__ */ a.jsx(
        Qt,
        {
          oas: e,
          group: s.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: An(s.path, u.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ a.jsx(
        Qt,
        {
          oas: e,
          group: s.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: An(s.query, u.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ a.jsx(
        Qt,
        {
          oas: e,
          group: s.header,
          name: "parameters.header",
          placeholder: "Add new header",
          variables: o,
          allowUnknown: !0
        }
      )
    },
    {
      id: "cookie",
      title: "Cookie",
      content: /* @__PURE__ */ a.jsx(
        Qt,
        {
          oas: e,
          group: s.cookie,
          name: "parameters.cookie",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: An(s.cookie, u.cookie)
    },
    {
      id: "environment",
      title: "Environment",
      content: /* @__PURE__ */ a.jsx(Zr, { name: "environment", variables: o })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ a.jsx(gi, {})
    }
  ];
}
function dO(e, t, n, r, o, i) {
  const s = zE(e, n, r), l = Lr({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ a.jsx(iO, { oas: e, group: s.body, variables: o }),
      disabled: An(s.body, l.body) || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ a.jsx(
        Ip,
        {
          oas: e,
          credentials: t,
          security: RE(e, n, r)
        }
      ),
      disabled: !AE(e, n, r)
    },
    // multipart form-data are not supported for now
    // {
    //   id: "formData",
    //   title: "Form",
    //   content: (
    //     <ParameterGroup
    //       oas={oas}
    //       group={parameters.formData}
    //       name={"parameters.formData"}
    //       placeholder="Add new entry"
    //       variables={availableVariables}
    //     />
    //   ),
    //   disabled: hasNoParameters(parameters.formData) || !isBodyPresent,
    // },
    {
      id: "path",
      title: "Path",
      content: /* @__PURE__ */ a.jsx(
        Qt,
        {
          oas: e,
          group: s.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: An(s.path, l.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ a.jsx(
        Qt,
        {
          oas: e,
          group: s.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: An(s.query, l.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ a.jsx(
        Qt,
        {
          oas: e,
          group: s.header,
          name: "parameters.header",
          placeholder: "Add new header",
          variables: o,
          allowUnknown: !0
        }
      )
    },
    {
      id: "environment",
      title: "Environment",
      content: /* @__PURE__ */ a.jsx(Zr, { name: "environment", variables: o })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ a.jsx(gi, {})
    }
  ];
}
function An(e, t) {
  return (e === void 0 || Object.keys(e).length === 0) && (t === void 0 || t.length === 0);
}
function fO({
  oas: e,
  requestRef: t,
  stage: n,
  credentials: r,
  saveRequest: o,
  defaultCollapsed: i,
  availableVariables: s
}) {
  const l = hO(n);
  return /* @__PURE__ */ a.jsx(pO, { children: /* @__PURE__ */ a.jsx(
    dt,
    {
      data: n,
      saveData: o,
      wrapFormData: vS,
      unwrapFormData: wS,
      children: /* @__PURE__ */ a.jsxs(mn, { defaultCollapsed: i, children: [
        /* @__PURE__ */ a.jsxs(Cd, { children: [
          /* @__PURE__ */ a.jsx("span", { children: t.id }),
          /* @__PURE__ */ a.jsxs(yO, { children: [
            /* @__PURE__ */ a.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ a.jsx(gl, { name: "defaultResponse", options: l })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs(nr, { children: [
          /* @__PURE__ */ a.jsx(gO, { children: n.request.method }),
          /* @__PURE__ */ a.jsx(mO, { children: n.request.path })
        ] }),
        /* @__PURE__ */ a.jsx(
          cO,
          {
            oas: e,
            credentials: r,
            method: n.request.method,
            path: n.request.path,
            availableVariables: s
          }
        )
      ] })
    }
  ) });
}
function hO(e) {
  return Object.keys(e.responses || {}).map((t) => ({ label: t, value: t }));
}
const pO = S.div`
  > div {
    background-color: var(${x.background});
  }
`, gO = S.div`
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
`, mO = S.div``, yO = S.div`
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
function vO({
  request: e,
  requestRef: t
}) {
  var _, $, D;
  const n = fe(), { oas: r, playbook: o, servers: i } = Q((O) => O.scanconf), s = Q((O) => O.config.data), l = Q((O) => O.env.data), c = Q((O) => O.prefs.useGlobalBlocks), {
    tryResult: u,
    mockResult: d,
    mockMissingVariables: p
  } = Q((O) => O.requests), f = (O, C) => n(Sa({ server: O, inputs: C })), h = (O) => n(Ur({ ref: t, stage: O })), m = o.authenticationDetails[0], g = Ke(d, "Global Before"), y = Ke(d, "Global After"), v = Ke(d, "Request"), w = [
    ...ua,
    ...CO(((D = ($ = (_ = v == null ? void 0 : v.results) == null ? void 0 : _[0]) == null ? void 0 : $.variablesReplaced) == null ? void 0 : D.stack) || [])
  ], [b, k] = P.useState({}), {
    simple: E,
    environment: {
      env: { host: j }
    }
  } = bn(Ri(o), l);
  return P.useEffect(() => {
    const O = { ...b };
    for (const C of Object.keys(O))
      p.includes(C) || delete O[C];
    for (const C of p)
      O[C] === void 0 && (O[C] = "");
    k(O);
  }, [p]), /* @__PURE__ */ a.jsxs(xO, { children: [
    /* @__PURE__ */ a.jsx(
      Kn,
      {
        menu: !0,
        servers: i,
        host: j,
        onTry: (O) => f(O, b),
        onScan: (O) => {
          const C = El(
            O,
            s.platformAuthType,
            s.scanRuntime,
            s.docker.replaceLocalhost,
            s.platform
          ), [I, T] = Ai(r, o);
          if (T !== void 0) {
            console.log("failed to serialize", T);
            return;
          }
          n(
            va({
              path: e.request.path,
              method: e.request.method,
              operationId: e.operationId,
              env: {
                SCAN42C_HOST: C,
                ...E
              },
              scanconf: Ep(I, e.operationId)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ a.jsxs(Ee, { title: "Request", children: [
      /* @__PURE__ */ a.jsx(
        fO,
        {
          defaultCollapsed: !1,
          oas: r,
          credentials: m,
          availableVariables: w,
          requestRef: t,
          stage: e,
          saveRequest: h
        }
      ),
      /* @__PURE__ */ a.jsxs(jO, { children: [
        "Unset variables",
        /* @__PURE__ */ a.jsx(tr, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ a.jsx(SO, { children: /* @__PURE__ */ a.jsx(
        dt,
        {
          wrapFormData: bO,
          unwrapFormData: kO,
          data: b,
          saveData: (O) => k(O),
          children: /* @__PURE__ */ a.jsx(Zr, { name: "env" })
        }
      ) })
    ] }),
    c && (g == null ? void 0 : g.status) === "failure" && /* @__PURE__ */ a.jsx(sd, { children: /* @__PURE__ */ a.jsx(Jt, { message: "Check Global Before block" }) }),
    c && (y == null ? void 0 : y.status) === "failure" && /* @__PURE__ */ a.jsx(sd, { children: /* @__PURE__ */ a.jsx(Jt, { message: "Check Global After block" }) }),
    u.length > 0 && /* @__PURE__ */ a.jsx(Ee, { title: "Result", children: /* @__PURE__ */ a.jsx(qn, { result: u, collapsible: c }) })
  ] });
}
const xO = S.div`
  padding: 8px;
`;
function bO(e) {
  return {
    env: Object.entries(e).map(([t, n]) => ({ key: t, value: n, type: typeof n }))
  };
}
function kO(e) {
  const t = {};
  for (const { key: n, value: r, type: o } of e.env)
    t[n] = wO(r, o);
  return t;
}
function wO(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
const SO = S.div`
  border: 1px solid var(${x.border});
  background-color: var(${x.background});
`, jO = S.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`, sd = S.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function CO(e) {
  const t = [];
  for (const n of e)
    for (const r of Object.keys(n.env))
      t.includes(r) || t.push(r);
  return t.sort(), t;
}
function _O({ requestRef: e }) {
  var r;
  const { playbook: t } = Q((o) => o.scanconf), n = e.type === "operation" ? t.operations[e.id].request : (r = t.requests) == null ? void 0 : r[e.id];
  return n === void 0 ? /* @__PURE__ */ a.jsxs("div", { children: [
    "Unable to locate the request, failed to resolve: ",
    JSON.stringify(e)
  ] }) : n.operationId === void 0 ? /* @__PURE__ */ a.jsx(Z2, { requestRef: e, request: n }) : /* @__PURE__ */ a.jsx(vO, { requestRef: e, request: n });
}
function EO() {
  var y;
  const e = fe(), { oas: t, playbook: n, servers: r } = Q((v) => v.scanconf), o = Q((v) => v.requests.ref), i = Q((v) => v.config.data), s = Q((v) => v.env.data), l = Q((v) => v.prefs.scanServer), c = ({ sectionId: v, itemId: w }) => {
    e(Zt({ type: v === "operation" ? "operation" : "request", id: w }));
  }, u = (v) => {
    var w;
    if ((o == null ? void 0 : o.type) === "request" && o.id === v) {
      const b = (w = Object.keys(n.operations)) == null ? void 0 : w[0];
      b !== void 0 && e(Zt({ type: "operation", id: b }));
    }
    e(sf({ type: "request", id: v }));
  }, d = Object.keys(n.operations).map((v) => ({ id: v, label: v })), p = Object.entries(n.requests || {}).filter(([v, w]) => w.operationId !== void 0).map(([v, w]) => ({ id: v, label: v })), f = Object.entries(n.requests || {}).filter(([v, w]) => w.operationId === void 0).map(([v, w]) => ({
    id: v,
    label: v,
    menu: /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsx(Bt, { onClick: (b) => b.stopPropagation(), onSelect: () => u(v), children: "Delete" }) })
  }));
  let h;
  (o == null ? void 0 : o.type) === "operation" && n.operations[o.id] !== void 0 ? h = { itemId: o.id, sectionId: "operation" } : (o == null ? void 0 : o.type) === "request" && ((y = n.requests) == null ? void 0 : y[o.id]) !== void 0 && (n.requests[o.id].operationId !== void 0 ? h = { itemId: o.id, sectionId: "requests" } : h = { itemId: o.id, sectionId: "external" });
  const m = [
    {
      id: "operation",
      title: "Operations",
      items: d
    },
    {
      id: "request",
      title: "Requests",
      items: p
    },
    {
      id: "external",
      title: "External Requests",
      items: f,
      menu: /* @__PURE__ */ a.jsx(
        T2,
        {
          onAddExternalRequest: (v, w, b, k) => {
            e(
              Ur({
                ref: { id: v, type: "request" },
                stage: $O(w, b, k)
              })
            ), e(Zt({ type: "request", id: v }));
          }
        }
      )
    }
  ], g = (v) => {
    const w = El(
      v,
      i.platformAuthType,
      i.scanRuntime,
      i.docker.replaceLocalhost,
      i.platform
    ), [b, k] = Ai(t, n);
    if (k !== void 0) {
      console.log("failed to serialize", k);
      return;
    }
    const { simple: E } = bn(Ri(n), s);
    e(
      Qd({
        env: {
          SCAN42C_HOST: w,
          ...E
        },
        scanconf: JSON.stringify(b, null, 2)
      })
    );
  };
  return /* @__PURE__ */ a.jsx(
    Zn,
    {
      title: "operations",
      selected: h,
      sections: m,
      onSelected: c,
      renderButtons: () => /* @__PURE__ */ a.jsx(
        fd,
        {
          style: { width: "100%" },
          onClick: (v) => {
            v.preventDefault(), v.stopPropagation(), g(l || r[0]);
          },
          children: "Scan all operations"
        }
      ),
      hideEmptySections: !0,
      render: (v) => /* @__PURE__ */ a.jsx(
        _O,
        {
          requestRef: { type: v.sectionId, id: v.itemId }
        },
        `${v.sectionId}-${v.itemId}`
      )
    }
  );
}
function Dp(e) {
  return ["post", "put", "patch"].includes(e);
}
function OO(e, t) {
  if (Dp(e))
    return {
      mediaType: t === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json",
      value: {}
    };
}
function TO(e, t) {
  return Dp(e) ? [
    {
      key: "Content-Type",
      value: t === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json"
    }
  ] : [];
}
function $O(e, t, n) {
  return {
    operationId: void 0,
    defaultResponse: "200",
    request: {
      url: t,
      method: e,
      parameters: {
        header: TO(e, n),
        path: [],
        query: [],
        cookie: []
      },
      body: OO(e, n)
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
function IO({ append: e }) {
  return /* @__PURE__ */ a.jsx(DO, { children: /* @__PURE__ */ a.jsx(
    PO,
    {
      placeholder: "name",
      value: "",
      onChange: (t) => {
        e(
          {
            key: t.target.value,
            value: {
              name: "SCAN42C_",
              default: "",
              required: !1,
              from: "environment"
            }
          },
          { shouldFocus: !0 }
        );
      }
    }
  ) });
}
const DO = S.div`
  grid-column: span 5;
  display: flex;
`, PO = S.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${x.border});
  color: var(${x.foreground});
  padding: 4px 8px;
`;
function zO({ missing: e }) {
  const t = fe(), { fields: n, append: r, remove: o } = vn({
    name: "variables"
  });
  return /* @__PURE__ */ a.jsxs(AO, { children: [
    /* @__PURE__ */ a.jsxs(NO, { children: [
      /* @__PURE__ */ a.jsxs(qO, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Name" }),
        /* @__PURE__ */ a.jsx("div", {}),
        /* @__PURE__ */ a.jsx("div", { children: "Source environment variable" }),
        /* @__PURE__ */ a.jsx("div", { children: "Default value" }),
        /* @__PURE__ */ a.jsx("div", { children: "Required" }),
        /* @__PURE__ */ a.jsx("div", {})
      ] }),
      /* @__PURE__ */ a.jsx(MO, { children: n.map((i, s) => {
        const l = e !== void 0 && e.includes(i.value.name);
        return /* @__PURE__ */ a.jsx(
          FO,
          {
            missing: l,
            name: `variables.${s}`,
            remove: () => {
              o(s);
            }
          },
          i.id
        );
      }) }),
      /* @__PURE__ */ a.jsx(IO, { append: r })
    ] }),
    /* @__PURE__ */ a.jsx(RO, { children: /* @__PURE__ */ a.jsxs(
      VO,
      {
        onClick: (i) => {
          i.stopPropagation(), i.preventDefault(), t(bd());
        },
        children: [
          "Manage IDE Environment ",
          /* @__PURE__ */ a.jsx(Sd, {})
        ]
      }
    ) })
  ] });
}
const AO = S.div``, RO = S.div`
  padding-top: 8px;
  margin: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
`, NO = S.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 10em 1.5em 1fr 1fr 5em 1em;
`, MO = S.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${x.border});
  }
`, qO = S.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${x.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function FO({
  name: e,
  remove: t,
  missing: n
}) {
  const r = Lr({ name: `${e}.value.required` });
  return /* @__PURE__ */ a.jsxs(UO, { children: [
    /* @__PURE__ */ a.jsx(tn, { name: `${e}.key`, label: "name" }),
    /* @__PURE__ */ a.jsx(LO, { children: n && /* @__PURE__ */ a.jsx(ut, {}) }),
    /* @__PURE__ */ a.jsx(tn, { name: `${e}.value.name`, label: "name" }),
    r ? /* @__PURE__ */ a.jsx("div", {}) : /* @__PURE__ */ a.jsx(tn, { name: `${e}.value.default`, label: "default", disabled: r }),
    /* @__PURE__ */ a.jsx(BO, { children: /* @__PURE__ */ a.jsx(Af, { name: `${e}.value.required` }) }),
    /* @__PURE__ */ a.jsx(
      HO,
      {
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), t();
        },
        children: /* @__PURE__ */ a.jsx(Qe, {})
      }
    )
  ] });
}
const LO = S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(${x.errorForeground});
    padding-right: 4px;
  }
`, BO = S.div`
  display: flex;
`, HO = S.button`
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
`, UO = S.div`
  display: contents;
  &:hover > :last-child {
    visibility: visible;
  }
`, VO = S.div`
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
function WO({ name: e }) {
  const t = fe(), {
    playbook: { environments: n }
  } = Q((c) => c.scanconf), r = Q((c) => c.env.data), [o, i] = P.useState("environment"), s = n[e], { missing: l } = bn(s, r);
  return /* @__PURE__ */ a.jsx(
    dt,
    {
      wrapFormData: GO,
      unwrapFormData: KO,
      data: s,
      saveData: (c) => t(tf({ name: e, environment: c })),
      children: /* @__PURE__ */ a.jsx(
        kt,
        {
          round: !0,
          activeTab: o,
          setActiveTab: i,
          menu: /* @__PURE__ */ a.jsx(tr, { children: "Use data from the external sources (such as secrets) to set Scan variables" }),
          tabs: [
            {
              id: "environment",
              title: "External inputs",
              content: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                /* @__PURE__ */ a.jsx(zO, { missing: l }),
                l.length > 0 && /* @__PURE__ */ a.jsx(
                  wr,
                  {
                    message: "Some of the required variables are not set, create these in the IDE Environment: " + l.join(", ")
                  }
                )
              ] })
            }
            // {
            //   id: "constants",
            //   title: "Constants",
            //   content: <ConstantEnvironment name="constants" />,
            // },
          ]
        }
      )
    }
  );
}
function GO(e) {
  return {
    variables: Object.entries(e.variables).filter(([t, n]) => n.from === "environment").map(([t, n]) => ({ key: t, value: n })),
    constants: Object.entries(e.variables).filter(([t, n]) => n.from === "hardcoded").map(([t, n]) => ({
      key: t,
      value: n.value,
      type: typeof n.value
    }))
  };
}
function KO(e) {
  const t = {
    variables: {}
  };
  for (const { key: n, value: r } of e.variables)
    t.variables[n] = r;
  for (const { key: n, value: r, type: o } of e.constants)
    t.variables[n] = {
      from: "hardcoded",
      value: XO(r, o)
    };
  return t;
}
function XO(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
function YO() {
  const [e, t] = P.useState("default"), {
    playbook: { environments: n }
  } = Q((i) => i.scanconf), o = [
    {
      id: "environment",
      title: "Environment",
      items: Object.keys(n).map((i) => ({ id: i, label: i }))
    }
  ];
  return /* @__PURE__ */ a.jsx(
    Zn,
    {
      title: "environments",
      noSectionTitles: !0,
      selected: e ? { sectionId: "environment", itemId: e } : void 0,
      sections: o,
      onSelected: (i) => t(i.itemId),
      render: (i) => /* @__PURE__ */ a.jsx(WO, { name: i.itemId }, i.itemId)
    }
  );
}
function QO() {
  const e = fe(), { oas: t, playbook: n, servers: r } = Q((g) => g.scanconf), { selected: o } = Q((g) => g.global), { tryResult: i, mockResult: s } = Q((g) => g.global), l = (g) => e(Ft(g)), c = (g, y) => e(Lt({ location: g, reference: y })), u = (g, y) => e(qt({ location: g, to: y })), d = (g, y) => {
    e(
      Mt({
        container: g,
        stage: {
          ref: y
        }
      })
    );
  }, p = (g) => {
    e(Zt(g)), e(ye(["scanconf", "requests"]));
  }, f = Object.keys(n.operations), h = Object.keys(n.requests || {}), m = [
    {
      id: "general",
      title: "General",
      items: [
        { id: "before", label: "Global Before" },
        { id: "after", label: "Global After" }
      ]
    }
  ];
  return /* @__PURE__ */ a.jsx(
    Zn,
    {
      title: "items",
      selected: { sectionId: "general", itemId: o },
      onSelected: (g) => e(hf(g.itemId)),
      noSectionTitles: !0,
      sections: m,
      render: (g) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        (g == null ? void 0 : g.itemId) === "before" && /* @__PURE__ */ a.jsxs(ad, { children: [
          /* @__PURE__ */ a.jsx(
            Kn,
            {
              servers: r,
              onTry: (y) => {
                e(xs(y));
              }
            }
          ),
          /* @__PURE__ */ a.jsx(
            Wn,
            {
              oas: t,
              stages: n.before,
              container: { container: "globalBefore" },
              executionResult: s == null ? void 0 : s[0],
              saveStage: c,
              moveStage: u,
              removeStage: l,
              operations: n.operations,
              requests: n.requests,
              goToRequest: p
            }
          ),
          /* @__PURE__ */ a.jsx(
            Gn,
            {
              operationIds: f,
              requestIds: h,
              onSelect: (y) => d({ container: "globalBefore" }, y)
            }
          ),
          i.length > 0 && /* @__PURE__ */ a.jsx(Ee, { title: "Result", children: /* @__PURE__ */ a.jsx(qn, { result: i }) })
        ] }, "before"),
        (g == null ? void 0 : g.itemId) === "after" && /* @__PURE__ */ a.jsxs(ad, { children: [
          /* @__PURE__ */ a.jsx(
            Kn,
            {
              servers: r,
              onTry: (y) => {
                e(xs(y));
              }
            }
          ),
          /* @__PURE__ */ a.jsx(
            Wn,
            {
              oas: t,
              stages: n.after,
              container: { container: "globalAfter" },
              executionResult: void 0,
              saveStage: c,
              removeStage: l,
              moveStage: u,
              operations: n.operations,
              requests: n.requests,
              goToRequest: p
            }
          ),
          /* @__PURE__ */ a.jsx(
            Gn,
            {
              operationIds: f,
              requestIds: h,
              onSelect: (y) => d({ container: "globalAfter" }, y)
            }
          ),
          i.length > 0 && /* @__PURE__ */ a.jsx(Ee, { title: "Result", children: /* @__PURE__ */ a.jsx(qn, { result: i }) })
        ] }, "after")
      ] })
    }
  );
}
const ad = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`, Ol = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  //max-width: 560px;
`, Tl = S.div`
  font-weight: 700;
  margin-bottom: 16px;
`, $l = er({
  environment: oe(),
  logLevel: oe(),
  logDestination: oe(),
  requestFlowrate: et.number(),
  requestTimeout: et.number(),
  requestTlsInsecureSkipVerify: Fl(),
  responseFollowRedirection: Fl(),
  maxScanDuration: et.number(),
  reportMaxIssues: et.number(),
  reportMaxSize: et.number(),
  responseMaxBodySizeScan: et.number(),
  reportMaxHttpResponseSizeHappyPath: et.number(),
  reportMaxBodySizeHappyPath: et.number(),
  reportMaxBodySizeTest: et.number(),
  reportMaxHttpResponseSizeTest: et.number()
});
function JO(e) {
  return {
    ...e,
    logLevel: e.logLevel !== void 0 ? e.logLevel : ""
  };
}
function ZO(e) {
  return { ...e, logLevel: e.logLevel !== "" ? e.logLevel : void 0 };
}
function eT() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Tl, { children: "Default environment" }),
    /* @__PURE__ */ a.jsx(Ol, { children: /* @__PURE__ */ a.jsx(pe, { name: "environment", label: "Default environment", disabled: !0 }) })
  ] });
}
const Js = {
  id: "environment",
  label: "Environment settings",
  schema: $l,
  form: eT
};
function tT() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Tl, { children: "Logging settings" }),
    /* @__PURE__ */ a.jsxs(Ol, { children: [
      /* @__PURE__ */ a.jsx(
        qo,
        {
          name: "logLevel",
          label: "Log level",
          options: [
            { value: "debug", label: "debug" },
            { value: "info", label: "info" },
            { value: "error", label: "error" },
            { value: "critical", label: "critical" }
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "logDestination",
          label: "Log destination",
          description: "The destination where Conformance Scan pushes all logs that it produces during a scan. The possible values are 'stdout', 'files', and 'platform'. You can select multiple outputs by adding the character + between the values."
        }
      )
    ] })
  ] });
}
const Zs = {
  id: "logging",
  label: "Logging settings",
  schema: $l,
  form: tT
};
function nT() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Tl, { children: "General settings" }),
    /* @__PURE__ */ a.jsxs(Ol, { children: [
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "requestFlowrate",
          label: "Flow rate",
          description: "How long the scan waits (in milliseconds) before it sends the next request to the API. This setting defines the constant flow rate that the scan uses."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "requestTimeout",
          label: "Timeout",
          description: "The maximum time (in seconds) that the scan waits for a response from the API. We do not recommend setting the timeout value to 0, because this switches the timeout off completely. This means that if something goes wrong, the scan might run indefinitely."
        }
      ),
      /* @__PURE__ */ a.jsx(
        qo,
        {
          name: "requestTlsInsecureSkipVerify",
          label: "Skip TLS verification",
          options: [
            { value: !0, label: "true" },
            { value: !1, label: "false" }
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        qo,
        {
          name: "responseFollowRedirection",
          label: "Follow redirects",
          description: "Define if the scan follows redirects (HTTP 3XX) it receives as responses to the tests requests",
          options: [
            { value: !0, label: "true" },
            { value: !1, label: "false" }
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "maxScanDuration",
          label: "Maximum scan duration",
          description: "How long the scan runs in total (in seconds) before it stops, even if the whole API was not yet scanned. This limit ensures that the scan process will not run indefinitely even if there was an unexpected error causing a loop in the process."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "reportMaxSize",
          label: "Max scan report size",
          description: "The maximum scan report size (in bytes). The scan stops when the size limit is reached."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "reportMaxIssues",
          label: "Max reported issues",
          description: "The maximum number of problems that Conformance Scan can uncover and include in the scan report before it must stop. This setting helps to control the report size: you can iterate on scanning your API, and as you fix the problems found in previous scans, the scan keeps including subsequently discovered problems."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "responseMaxBodySizeScan",
          label: "Max size for a response body",
          description: "The maximum body size (in bytes) that Conformance Scan consumes from an API response, to avoid massive memory consumption."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "reportMaxHttpResponseSizeHappyPath",
          label: "Max stored happy path response size",
          description: "The maximum size (in bytes) of the HTTP responses received for a happy path request that is included in the scan report."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "reportMaxBodySizeHappyPath",
          label: "Max stored response body size for happy path requests",
          description: "The maximum response body size (in bytes) that the scan includes in the scan report for a happy path request."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "reportMaxBodySizeTest",
          label: "Max stored response body size for test requests",
          description: "The maximum response body size (in bytes) that the scan includes in the scan report for a test request."
        }
      ),
      /* @__PURE__ */ a.jsx(
        pe,
        {
          name: "reportMaxHttpResponseSizeTest",
          label: "Max stored response size for test requests",
          description: "The maximum size (in bytes) of the HTTP responses received for a test request that is included in the scan report."
        }
      )
    ] })
  ] });
}
const ea = {
  id: "general",
  label: "General settings",
  schema: $l,
  form: nT
}, rT = [
  {
    id: "logging",
    title: "Logging",
    items: [Zs]
  },
  {
    id: "environment",
    title: "Environment",
    items: [Js]
  },
  {
    id: "general",
    title: "General",
    items: [ea]
  }
], oT = {
  [ea.id]: ea,
  [Zs.id]: Zs,
  [Js.id]: Js
};
function iT() {
  const e = fe(), t = Q(
    (n) => n.scanconf.playbook.runtimeConfiguration
  );
  return /* @__PURE__ */ a.jsx(
    og,
    {
      noSectionTitles: !0,
      sections: rT,
      defaultSelection: { sectionId: "logging", itemId: "logging" },
      render: (n) => {
        const { id: r, form: o, schema: i } = oT[n.itemId];
        return /* @__PURE__ */ a.jsx(
          dt,
          {
            schema: i,
            wrapFormData: JO,
            unwrapFormData: ZO,
            data: t || {},
            saveData: (s) => e(ef(s)),
            children: /* @__PURE__ */ a.jsx(o, {})
          }
        );
      }
    }
  );
}
function sT() {
  const {
    playbook: { environments: e, runtimeConfiguration: t }
  } = Q((o) => o.scanconf), n = Q((o) => o.env.data);
  if (e == null || t == null)
    return /* @__PURE__ */ a.jsx(ld, { children: "Environment" });
  const { missing: r } = bn(e[(t == null ? void 0 : t.environment) || "default"], n);
  return /* @__PURE__ */ a.jsxs(ld, { children: [
    "Environment",
    r.length > 0 && /* @__PURE__ */ a.jsx(ut, {})
  ] });
}
const ld = S.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > svg {
    fill: var(${x.errorForeground});
    padding-right: 4px;
  }
`;
function Pp({ credentials: e }) {
  const t = aT(e).map(({ name: n }) => ({ label: n, value: n }));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      To,
      {
        label: "Type",
        name: "key",
        options: [
          { value: "authentication-swapping-bola", label: "BOLA" },
          { value: "authentication-swapping-bfla", label: "BFLA" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(To, { label: "Source", name: "source.0", options: t }),
    /* @__PURE__ */ a.jsx(To, { label: "Target", name: "target.0", options: t })
  ] });
}
function aT(e) {
  return Object.entries(e).map(([t, n]) => Object.entries(n.methods || {}).map(([r, o]) => ({ name: `${t}/${r}`, credential: n }))).flat();
}
function lT({
  selected: e,
  credentials: t
}) {
  const n = fe(), {
    playbook: { authorizationTests: r }
  } = Q((s) => s.scanconf), o = (s, l) => n(rf({ id: s, test: l })), i = r[e.itemId];
  return /* @__PURE__ */ a.jsxs(cT, { children: [
    /* @__PURE__ */ a.jsx("h4", { children: e.itemId }),
    /* @__PURE__ */ a.jsx(
      dt,
      {
        data: i,
        wrapFormData: (s) => s,
        unwrapFormData: (s) => s,
        saveData: (s) => o(e.itemId, s),
        children: /* @__PURE__ */ a.jsx(Pp, { credentials: t })
      }
    )
  ] });
}
const cT = S.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function uT({
  onAddTest: e,
  existing: t,
  credentials: n
}) {
  const r = {
    id: "",
    key: "authentication-swapping-bola",
    source: [""],
    target: [""]
  }, o = er({
    id: oe().regex(Rn(), {
      message: Nn
    }).refine((s) => !t.includes(s), {
      message: "Already exists"
    }),
    key: oe(),
    source: Ll(oe().min(1)),
    target: Ll(oe().min(1))
  }), i = (s) => {
    e(s.id, { key: s.key, source: s.source, target: s.target });
  };
  return /* @__PURE__ */ a.jsx(
    Vr,
    {
      title: "New authorization test",
      defaultValues: r,
      schema: o,
      onSubmit: i,
      trigger: /* @__PURE__ */ a.jsx(Mr, { style: { width: "100%" }, children: "New authorization test" }),
      children: /* @__PURE__ */ a.jsxs(dT, { children: [
        /* @__PURE__ */ a.jsx(pe, { label: "Test ID", name: "id" }),
        /* @__PURE__ */ a.jsx(Pp, { credentials: n })
      ] })
    }
  );
}
const dT = S.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function fT() {
  const e = fe(), {
    playbook: { authorizationTests: t, authenticationDetails: n },
    selectedAuthorizationTest: r
  } = Q((l) => l.scanconf), o = (l, c) => {
    e(nf({ id: l, test: c })), e(rc({ id: l }));
  }, s = [
    {
      id: "authorizationTests",
      title: "Authorization Tests",
      items: Object.keys(t).map((l) => ({
        id: l,
        label: l,
        menu: /* @__PURE__ */ a.jsx(wt, { children: /* @__PURE__ */ a.jsxs(
          Bt,
          {
            onClick: (c) => c.stopPropagation(),
            onSelect: () => e(of({ id: l })),
            children: [
              /* @__PURE__ */ a.jsx(Qe, {}),
              "Delete"
            ]
          }
        ) })
      }))
    }
  ];
  return /* @__PURE__ */ a.jsx(
    Zn,
    {
      title: "tests",
      sections: s,
      render: (l) => /* @__PURE__ */ a.jsx(lT, { selected: l, credentials: n[0] }),
      renderEmpty: () => /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h2", { children: "Authorization Tests" }),
        /* @__PURE__ */ a.jsx("p", { children: "BOLA and BFLA tests" }),
        /* @__PURE__ */ a.jsx("p", { children: "Define advanced security tests, such as testing how your API implementation handles BOLA/IDOR (Broken Object Level Authorization, also known as Insecure Direct Object Reference) attack or BFLA (Broken Function Level Authorization)" })
      ] }),
      renderButtons: () => /* @__PURE__ */ a.jsx(
        uT,
        {
          credentials: n[0],
          existing: Object.keys(t),
          onAddTest: o
        }
      ),
      selected: r !== void 0 ? { sectionId: "authorizationTests", itemId: r } : void 0,
      onSelected: (l) => {
        e(rc({ id: l.itemId }));
      }
    }
  );
}
function hT({ change: e }) {
  return /* @__PURE__ */ a.jsx(pT, { children: /* @__PURE__ */ a.jsx(Ni, { path: e.path, method: e.method, operationId: e.operationId }) });
}
const pT = S.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`;
function gT({ change: e }) {
  return /* @__PURE__ */ a.jsx(mT, { children: /* @__PURE__ */ a.jsx(Ni, { path: e.path, method: e.method, operationId: e.operationId, children: e.references.length > 0 && /* @__PURE__ */ a.jsxs(yT, { children: [
    "References in ",
    e.references.length,
    " locations will be removed"
  ] }) }) });
}
const mT = S.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`, yT = S.div`
  padding: 8px;
  background-color: var(${x.background});
`;
function vT({ change: e }) {
  return /* @__PURE__ */ a.jsx(xT, { children: /* @__PURE__ */ a.jsx(Ni, { path: e.path, method: e.method, operationId: e.oldOperationId, children: /* @__PURE__ */ a.jsxs(bT, { children: [
    '"',
    e.oldOperationId,
    '" renamed to "',
    e.newOperationId,
    '"'
  ] }) }) });
}
const xT = S.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`, bT = S.div`
  padding: 8px;
  background-color: var(${x.background});
`;
function kT({ change: e }) {
  return /* @__PURE__ */ a.jsx(wT, { children: e.schema });
}
const wT = S.div`
  border: 1px solid var(${x.border});
  padding: 8px;
  background-color: var(${x.computedOne});
`;
function ST() {
  const e = fe(), { changes: t, updating: n } = Q((l) => l.scanconfUpdate), r = t.filter((l) => l.type === "operation-added"), o = t.filter((l) => l.type === "operation-removed"), i = t.filter((l) => l.type === "operation-renamed"), s = t.filter((l) => l.type === "security-added");
  return /* @__PURE__ */ a.jsxs(jT, { children: [
    /* @__PURE__ */ a.jsx("div", { children: "Your OpenAPI file has deviated from your scan configuration." }),
    /* @__PURE__ */ a.jsx("div", { children: "Please update your scan configuration to reflect the changes in your OpenAPI file. If you decide to ignore the changes, the scan will be performed using the old configuration." }),
    /* @__PURE__ */ a.jsxs(_T, { children: [
      r.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Added:" }),
        r.map((l, c) => /* @__PURE__ */ a.jsx(hT, { change: l }, c))
      ] }),
      o.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Removed:" }),
        o.map((l, c) => /* @__PURE__ */ a.jsx(gT, { change: l }, c))
      ] }),
      i.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "OperationId changed:" }),
        i.map((l, c) => /* @__PURE__ */ a.jsx(vT, { change: l }, c))
      ] }),
      s.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Security scheme added:" }),
        s.map((l, c) => /* @__PURE__ */ a.jsx(kT, { change: l }, c))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs(CT, { children: [
      /* @__PURE__ */ a.jsx(
        nm,
        {
          label: "Update",
          waiting: n,
          onClick: () => e(xf())
        }
      ),
      /* @__PURE__ */ a.jsx(hd, { disabled: n, onClick: () => e(bf()), children: "Skip" })
    ] })
  ] });
}
const jT = S.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow: auto;
`, CT = S.div`
  display: flex;
  gap: 8px;
  padding-bottom: 32px;
`, _T = S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
function ET() {
  const e = qv((t) => t.generalError.error);
  return /* @__PURE__ */ a.jsx(TT, { children: /* @__PURE__ */ a.jsx(OT, { children: e == null ? void 0 : e.message }) });
}
const OT = S.div`
  border: 1px solid var(${x.errorBorder});
  color: var(${x.errorForeground});
  background-color: var(${x.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, TT = S.div`
  padding: 8px;
`;
function cd(e) {
  const t = {
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
  return n || IT("Link"), a.jsxs(a.Fragment, {
    children: [a.jsx(t.h1, {
      children: "What is API Conformance Scan"
    }), `
`, a.jsx(t.p, {
      children: `API Conformance Scan is a dynamic API testing tool designed to ensure that your API implementation aligns with its OpenAPI/Swagger definition.
By comparing the documented API specification with the actual implementation, Scan helps you identify any discrepancies or inconsistencies.`
    }), `
`, a.jsx(t.p, {
      children: `To achieve this, Scan generates a multitude of requests that deviate from the declared OpenAPI file and sends them to your server.
The tool then evaluates each response, providing insights into how well your API implementation matches its documented counterpart.`
    }), `
`, a.jsx(t.h2, {
      children: "Video tutorial"
    }), `
`, a.jsxs(t.p, {
      children: ["For a quick introduction to API Conformance Scan, watch our ", a.jsx(n, {
        href: "https://42crunch.com/tutorial-security-conformance-scan-openapi-swagger-extension-vs-code/",
        children: "video tutorial"
      }), "."]
    }), `
`, a.jsx(t.h1, {
      children: "Getting Started"
    }), `
`, a.jsx(t.h2, {
      children: "Default configuration"
    }), `
`, a.jsx(t.p, {
      children: `When you run Scan for the first time, it generates a default configuration for your OpenAPI file.
This initial setup produces a set of "happy path" requests, one for every operation defined in your OpenAPI specification.`
    }), `
`, a.jsx(t.p, {
      children: 'The contents of each "happy path" request is available to you in the "Operations" tab of the Scan UI.'
    }), `
`, a.jsx(t.p, {
      children: `These "happy path" requests serve as the foundation for testing, establishing a reliable baseline of expected behavior for each operation.
At the start of a test for each operation Scan expects to successfully execute a "happy path" request before running the rest of the test.`
    }), `
`, a.jsx(t.p, {
      children: `This default configuration is suitable for simple operations; however, more complex operations may require customizations
to ensure effective testing.`
    }), `
`, a.jsx(t.h2, {
      children: "Customizing defaults"
    }), `
`, a.jsx(t.h3, {
      children: "Operations"
    }), `
`, a.jsx(t.p, {
      children: `You can change the default happy path requests by modifying their payloads within the Operations tab.
Additionally, you can configure authentication details and fine-tune the body and parameters
of each operation either directly or utilize variable expressions.`
    }), `
`, a.jsx(t.h3, {
      children: "Scenarios"
    }), `
`, a.jsx(t.p, {
      children: `When your API operation relies on pre-existing resources or requires post-execution cleanup,
Scenarios come into play. This is particularly useful when you need to set up certain conditions
before executing an operation and then tear them down afterwards.`
    }), `
`, a.jsx(t.p, {
      children: `A great example of this is the "update user" operation, which updates a user object.
Before calling this operation, you'd typically want to ensure that the user object exists and after the update, remove it.
Scenarios enable you to achieve this by adding operations to the "Before" block (e.g., creating the user),
using the resulting resource in the happy path of the scenario, and then performing cleanup in the "After" block (e.g., deleting the user).`
    }), `
`, a.jsx(t.p, {
      children: 'You can create a Scenario for any operation defined in your OpenAPI in the "Scenarios" tab.'
    }), `
`, a.jsx(t.h2, {
      children: "Trying operations"
    }), `
`, a.jsx(t.p, {
      children: "Before launching your scan, you may want to execute individual Operations or Scenarios to ensure they can be successfully run by the Scan."
    }), `
`, a.jsx(t.p, {
      children: 'To facilitate this process, the Scan UI provides a "Try" feature.'
    }), `
`, a.jsx(t.p, {
      children: `When you click "Try" on an Operation or Scenario, the Scan UI will send relevant requests to the server and allow
you to inspect the details of the payload sent and the response received.`
    }), `
`, a.jsx(t.h2, {
      children: "Starting the Scan"
    }), `
`, a.jsx(t.p, {
      children: `You can initiate scanning from the "Operations" tab in the Scan UI, where you have two options to do that:
scan the entire API by clicking the "Scan all operations" button at the bottom of the list,
or click the "Scan" button at the top of a currently selected operation to test just that one operation.`
    }), `
`, a.jsx(t.h1, {
      children: "User Interface"
    }), `
`, a.jsx(t.h2, {
      children: "Operations"
    }), `
`, a.jsx(t.p, {
      children: `Operations tab shows all operations defined in your OpenAPI file. Details of a request configured in this tab are used as a "happy path" request,
if not overriden by a Scenario for this request.`
    }), `
`, a.jsxs(t.p, {
      children: [`You can edit details of a request body and parameters by editing them here.
You can also use variable expressions (such as `, a.jsx(t.code, {
        children: "{{name}}"
      }), `) to substitute parameters or parts of
the body with values from a variables.`]
    }), `
`, a.jsx(t.h3, {
      children: "Environment"
    }), `
`, a.jsx(t.p, {
      children: `The Environment tab in each Operation allows you to define variables that can be used in variable
expressions in request bodies and parameters.`
    }), `
`, a.jsx(t.p, {
      children: `You can also use variable expression within the VALUE field of environment entries,
creating values that combine other existing variables and constants.`
    }), `
`, a.jsxs(t.p, {
      children: ["For instance, by defining an environment variable ", a.jsx(t.code, {
        children: "username"
      }), " with a value like ", a.jsx(t.code, {
        children: "user-{{$randomuint}}@company.com"
      }), `,
you can set its actual value to something like `, a.jsx(t.code, {
        children: "user-555@company.com"
      }), "."]
    }), `
`, a.jsx(t.h3, {
      children: "Response processing"
    }), `
`, a.jsx(t.p, {
      children: `The Response Processing feature allows you to extract specific values from an operation's responses and
store them in variables, which can then be used in subsequent operations (particularly useful when multiple operations are part of a Scenario).`
    }), `
`, a.jsx(t.p, {
      children: `To achieve this, you can define response processing statements that specify what information to extract,
where to find it, and where to store the retrieved data. These statements are organized by response code, so if your operation returns multiple
possible codes (e.g., 200, 400, 5XX), you can create separate groups for each.`
    }), `
`, a.jsx(t.p, {
      children: `Each response processing statement consists of a name of the variable where the extracted information will be stored, as well as a source,
specifying the location where Scan should look for the desired information, such as request
or response body, headers, cookies, path or query string parameters.`
    }), `
`, a.jsx(t.p, {
      children: `Additionally, if you're extracting a value from a request or response body, you can use
JsonPointer or JsonPath to pinpoint the exact location of the value you're looking for.`
    }), `
`, a.jsx(t.h3, {
      children: "Unset variables"
    }), `
`, a.jsx(t.p, {
      children: `In an Operation, every variable expression must resolve to a value before
the Operation can be executed. However, it is possible to reference variables
that do not have a value set.`
    }), `
`, a.jsx(t.p, {
      children: `Unset variables in an Operation may be useful when you plan to use the same
Operation in multiple Scenarios, each providing a different set of values
for every variable used in the Operation.`
    }), `
`, a.jsx(t.p, {
      children: `However, if an Operation contains an unset variable, you cannot utilize the
'Try' feature to test the Operation without first providing a value for it.`
    }), `
`, a.jsx(t.p, {
      children: `To resolve this issue, Scan UI lists all required variables for the Operation
in "Unset variables" and enables you to provide values for them, allowing you
to use the 'Try' feature.`
    }), `
`, a.jsx(t.p, {
      children: "Please note that test inputs are not saved to the scan configuration."
    }), `
`, a.jsx(t.h2, {
      children: "Scenarios"
    }), `
`, a.jsx(t.p, {
      children: `Use scenarios to create complex sequences of operations to implement a "happy path" request for any operation
that cannot be tested with a single request defined in the Operations tab.`
    }), `
`, a.jsx(t.p, {
      children: 'If you define a scenario for an operation, it will be used to perform a "happy path" request instead of the one defined in the Operations tab.'
    }), `
`, a.jsx(t.p, {
      children: "Additionally, if an operation has a defined scenario, you can still use it as is in other scenarios."
    }), `
`, a.jsx(t.h3, {
      children: "Happy path scenario"
    }), `
`, a.jsx(t.p, {
      children: `The  "happy path" scenario is the only type of scenario you can currently create in Scan.
In future versions of Scan, we plan to introduce additional scenario types.`
    }), `
`, a.jsx(t.p, {
      children: `This scenario contains operation references that should be performed in order to execute the test.
When creating a new scenario, it will initially contain just one reference to the operation selected during scenario creation.`
    }), `
`, a.jsx(t.p, {
      children: `You can add more operation references to the scenario by clicking the "Pick operation" button.
These references can also be reordered within the scenario using drag-and-drop functionality.`
    }), `
`, a.jsx(t.p, {
      children: `Each operation reference within a scenario has its own distinct response processing configuration and
environment variables, which take precedence over those defined at the operation level.`
    }), `
`, a.jsx(t.h3, {
      children: "Before and after blocks"
    }), `
`, a.jsx(t.p, {
      children: `Before and after blocks are used to define operations that should be executed before and after the happy path scenario,
and serve mainly as setup and cleanup steps.`
    }), `
`, a.jsx(t.p, {
      children: `The "Before" and "After" blocks in Scan allow you to define operations that should be executed before and after your Scenario.
These blocks primarily serve as setup and cleanup steps. These blocks are shared between all scenarios.`
    }), `
`, a.jsx(t.h3, {
      children: "Autorization tests"
    }), `
`, a.jsx(t.p, {
      children: `The Authorization Tests section enables you to apply Broken Object Level Authorization (BOLA)
and Broken Function Level Authorization (BLFA) tests, as defined in the global Tests section, to your scenario.`
    }), `
`, a.jsx(t.h2, {
      children: "Global blocks"
    }), `
`, a.jsx(t.p, {
      children: `The Global Before and After blocks provide an opportunity to execute setup and cleanup steps at the Scan level.
These blocks are run only once, respectively, before and after the entire scan execution, allowing you to perform
global initialization and cleanup tasks.`
    }), `
`, a.jsx(t.h2, {
      children: "Authentication"
    }), `
`, a.jsx(t.p, {
      children: `Certain operations may require authentication to function properly.
Configure authentication settings in the Scan UI's Authentication section.`
    }), `
`, a.jsx(t.h3, {
      children: "Security schemes"
    }), `
`, a.jsx(t.p, {
      children: `A "Security Scheme" describes the type of authentication required by an operation,
closely following the contents of the relevant OpenAPI's Security Scheme.`
    }), `
`, a.jsx(t.p, {
      children: `These security schemes define the authentication requirements and how they should be sent.
For example, you can specify using an API key and sending it in a specific HTTP header.`
    }), `
`, a.jsx(t.h3, {
      children: "Credentials"
    }), `
`, a.jsx(t.p, {
      children: `Credentials are primarily related to authorization aspects of your operations.
Although all operations might share the same authentication type, some may have different authorization requirements.`
    }), `
`, a.jsx(t.p, {
      children: "For example, while most operations might be accessible to ordinary users, others might require admin privileges."
    }), `
`, a.jsx(t.p, {
      children: `To effectively test such APIs, you can create distinct Credentials for "ordinary" and
"admin" users, configuring respective operations to use one or the other.`
    }), `
`, a.jsx(t.h3, {
      children: "Secrets"
    }), `
`, a.jsx(t.p, {
      children: "You may need to use secrets like passwords or API keys as credential values."
    }), `
`, a.jsx(t.p, {
      children: "The best practice is to avoid storing these sensitive values directly in your scan configuration."
    }), `
`, a.jsx(t.p, {
      children: `Instead, consider using variables to access secret values received from external sources.
You can create a variable using the "External inputs" feature in the global Environment section of the scan configuration
and then utilize variable expression to inject the value into your credential.`
    }), `
`, a.jsxs(t.p, {
      children: ['For instance, you could create an entry in "External inputs" to define the ', a.jsx(t.code, {
        children: "password1"
      }), ` variable,
and then set credential value to `, a.jsx(t.code, {
        children: "{{password1}}"
      }), "."]
    }), `
`, a.jsx(t.h3, {
      children: "Dynamic identities"
    }), `
`, a.jsx(t.p, {
      children: "In certain situations, you may need to set identities dynamically using information from one or multiple API calls."
    }), `
`, a.jsx(t.p, {
      children: 'A common example is when all operations in an API require authentication with a token returned by a "login" operation.'
    }), `
`, a.jsxs(t.p, {
      children: [`To achieve this, you can add a call to the "login" operation within credential, extract the token from its
response and store it in a variable named `, a.jsx(t.code, {
        children: "token"
      }), ". Then, use the expression ", a.jsx(t.code, {
        children: "{{token}}"
      }), ` in the credential value to access
the dynamically retrieved token.`]
    }), `
`, a.jsx(t.p, {
      children: "You can leverage operations defined in the OpenAPI to retrieve credentials or create external operations to call APIs that are not part of it."
    }), `
`, a.jsx(t.h2, {
      children: "Tests"
    }), `
`, a.jsx(t.p, {
      children: `The Tests section enables you to define Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BLFA) tests,
which can be applied to your scenarios and API operations.`
    }), `
`, a.jsx(t.h2, {
      children: "Environment"
    }), `
`, a.jsx(t.h3, {
      children: "External inputs"
    }), `
`, a.jsx(t.p, {
      children: "The External Inputs section in the Environment allows you to use data from external sources in your Scan configuration."
    }), `
`, a.jsx(t.p, {
      children: "You can provide input values from outside the Scan using:"
    }), `
`, a.jsxs(t.ul, {
      children: [`
`, a.jsxs(t.li, {
        children: [`
`, a.jsx(t.p, {
          children: "The Environment data stored in the IDE"
        }), `
`]
      }), `
`, a.jsxs(t.li, {
        children: [`
`, a.jsx(t.p, {
          children: "Docker container environment variables, if running the Scan with Docker or ScanD Manager outside of the IDE"
        }), `
`]
      }), `
`]
    }), `
`, a.jsx(t.p, {
      children: `Each entry in this section defines a variable name that can be used in the Scan configuration "Name" and the corresponding environment
variable to pass the value to the Scan configuration "Source environment variable".`
    }), `
`, a.jsx(t.p, {
      children: `These entries are marked as either required or not. For non-required entries, you can specify a default value that will be us
ed if an external value is not provided.`
    }), `
`, a.jsxs(t.p, {
      children: [a.jsx(t.strong, {
        children: "Important"
      }), ": You must provide values for all required external inputs before running the scan, otherwise it will fail."]
    }), `
`, a.jsx(t.h2, {
      children: "Settings"
    }), `
`, a.jsx(t.p, {
      children: "The Settings section allows you to customize the behavior of your Scan."
    }), `
`, a.jsx(t.h3, {
      children: "Logging configuration"
    }), `
`, a.jsx(t.p, {
      children: `In this section, you can configure the logging level and log destination to control the verbosity and output location
of logs generated during the scan.`
    }), `
`, a.jsx(t.h3, {
      children: "Environment settings"
    }), `
`, a.jsx(t.p, {
      children: "Choose your global environment settings for scanning."
    }), `
`, a.jsx(t.p, {
      children: 'By default, a "default" environment is created, but you can also create additional environments and switch between them.'
    }), `
`, a.jsx(t.h1, {
      children: "General Concepts"
    }), `
`, a.jsx(t.h2, {
      children: "Variable substitution"
    }), `
`, a.jsx(t.p, {
      children: "Variable substitution is a powerful feature that enables dynamic changes to your requests and responses."
    }), `
`, a.jsx(t.h3, {
      children: "Syntax"
    }), `
`, a.jsxs(t.p, {
      children: ["Variable substitution uses variable expressions, which look like this: ", a.jsx(t.code, {
        children: "{{variable_name}}"
      }), "."]
    }), `
`, a.jsx(t.h3, {
      children: "Definition of variables"
    }), `
`, a.jsx(t.p, {
      children: "You can define variables in the following sections:"
    }), `
`, a.jsxs(t.ul, {
      children: [`
`, a.jsx(t.li, {
        children: "Global environment section"
      }), `
`, a.jsx(t.li, {
        children: "Operation environment section"
      }), `
`, a.jsx(t.li, {
        children: "Scenario environment section"
      }), `
`, a.jsx(t.li, {
        children: "Response processing section of the Operation or Scenario"
      }), `
`]
    }), `
`, a.jsx(t.h3, {
      children: "Usage"
    }), `
`, a.jsx(t.p, {
      children: "Variables can be used in various parts of your requests and responses, including:"
    }), `
`, a.jsxs(t.ul, {
      children: [`
`, a.jsx(t.li, {
        children: "Request body"
      }), `
`, a.jsx(t.li, {
        children: "Request parameters"
      }), `
`, a.jsx(t.li, {
        children: "Response processing"
      }), `
`, a.jsx(t.li, {
        children: "Identites"
      }), `
`]
    }), `
`, a.jsx(t.p, {
      children: "When performing variable substitution, the lookup order is as follows: scenario variables, operation variable, global variables."
    }), `
`, a.jsx(t.h3, {
      children: "Variable types"
    }), `
`, a.jsxs(t.p, {
      children: ["Variables have types, which are defined in the Environment section. You can use variables with types ", a.jsx(t.code, {
        children: "string"
      }), ", ", a.jsx(t.code, {
        children: "number"
      }), ", ", a.jsx(t.code, {
        children: "boolean"
      }), ", or ", a.jsx(t.code, {
        children: "null"
      }), "."]
    }), `
`, a.jsx(t.h3, {
      children: "Variables in JSON"
    }), `
`, a.jsx(t.p, {
      children: `When substituting variables in the request body, always quote
the variable expression, even if you're substituting a number or boolean.`
    }), `
`, a.jsx(t.p, {
      children: "After substitution, the actual type of the variable is used in the request."
    }), `
`, a.jsxs(t.p, {
      children: ["For example, if you define a variable ", a.jsx(t.code, {
        children: "age"
      }), ` with a numeric value of 10, and use it in a request body like this:
`, a.jsx(t.code, {
        children: '{ "user_ age": "{{age}}"}'
      }), " the resulting JSON will be ", a.jsx(t.code, {
        children: '{ "user_age": 10 }'
      }), "."]
    }), `
`, a.jsx(t.h2, {
      children: "Built-in variables"
    }), `
`, a.jsx(t.p, {
      children: "There are a number of built in variables that you can use in your scan configuration."
    }), `
`, a.jsxs(t.ul, {
      children: [`
`, a.jsxs(t.li, {
        children: [a.jsx(t.code, {
          children: "$randomString"
        }), ":  Generates a random alphanumeric string of 20 characters"]
      }), `
`, a.jsxs(t.li, {
        children: [a.jsx(t.code, {
          children: "$randomuint"
        }), ": Generates a random uint32 integer"]
      }), `
`, a.jsxs(t.li, {
        children: [a.jsx(t.code, {
          children: "$uuid"
        }), ": Generates a unique UUID"]
      }), `
`, a.jsxs(t.li, {
        children: [a.jsx(t.code, {
          children: "$timestamp"
        }), ": Generates the current time in UNIX format"]
      }), `
`, a.jsxs(t.li, {
        children: [a.jsx(t.code, {
          children: "$timestamp3339"
        }), ": Generates the current date and time as defined in RFC 3339"]
      }), `
`, a.jsxs(t.li, {
        children: [a.jsx(t.code, {
          children: "$randomFromSchema"
        }), ": Generates the values based on the schema defined in your OpenAPI definition"]
      }), `
`]
    }), `
`, a.jsx(t.h2, {
      children: "Keeping configuration in sync with OpenAPI"
    }), `
`, a.jsx(t.p, {
      children: `The scan configuration must be kept in sync with the OpenAPI file it is based on,
as it is crucial for accurate and comprehensive testing. To help users keep
their scan configuration in sync, the Scan UI checks if the scan configuration
matches the OpenAPI file, and in the presence of changes, offers to update the scan configuration
accordingly.`
    }), `
`, a.jsx(t.p, {
      children: "The types of changes that the Scan UI can handle are:"
    }), `
`, a.jsxs(t.ul, {
      children: [`
`, a.jsx(t.li, {
        children: "Adding new operations to the OpenAPI file"
      }), `
`, a.jsx(t.li, {
        children: "Removing operations from the OpenAPI file"
      }), `
`, a.jsxs(t.li, {
        children: ["Renaming operations (changing their ", a.jsx(t.code, {
          children: "operationId"
        }), ")"]
      }), `
`, a.jsx(t.li, {
        children: "Adding new security schemes to the OpenAPI file"
      }), `
`]
    }), `
`, a.jsx(t.p, {
      children: `However, changes to the schemas describing operation payloads (body, parameters, etc),
adding or removing parameters, etc. are not handled by the Scan UI, as these can be customized by the user.`
    }), `
`, a.jsx(t.p, {
      children: `If such changes are made to the OpenAPI file, the user must make appropriate changes to
the scan configuration manually.`
    }), `
`, a.jsx(t.p, {
      children: `When changes are detected, the Scan UI will prompt you to update the
scan configuration to reflect the modifications made to the OpenAPI file.`
    })]
  });
}
function $T(e = {}) {
  const { wrapper: t } = e.components || {};
  return t ? a.jsx(t, {
    ...e,
    children: a.jsx(cd, {
      ...e
    })
  }) : cd(e);
}
function IT(e, t) {
  throw new Error("Expected component `" + e + "` to be defined: you likely forgot to import, pass, or provide it.");
}
function DT() {
  const e = P.useRef(null), t = AT(e);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(RT, { children: t.map((n, r) => /* @__PURE__ */ a.jsx(
      NT,
      {
        $level: n.level,
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), n.element.scrollIntoView({ behavior: "smooth" });
        },
        children: n.title
      },
      r
    )) }),
    /* @__PURE__ */ a.jsx(MT, { ref: e, $expanded: !0, children: /* @__PURE__ */ a.jsx($T, { components: { Link: PT } }) })
  ] });
}
function PT({ href: e, children: t }) {
  const n = fe();
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation(), n(Jp(e));
      },
      href: e,
      children: t
    }
  );
}
function zT(e) {
  switch (e) {
    case "H1":
      return 1;
    case "H2":
      return 2;
    case "H3":
      return 3;
  }
}
const AT = (e) => {
  const [t, n] = P.useState([]);
  return P.useEffect(() => {
    const r = [];
    if (e.current !== null) {
      for (const o of e.current.querySelectorAll("h1, h2, h3"))
        if (o.textContent) {
          const i = o.textContent, s = zT(o.tagName);
          r.push({ title: i, element: o, level: s });
        }
    }
    n(r);
  }, [e]), t;
}, RT = S.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: var(${x.background});
`, NT = S.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(${x.listHoverBackground});
  }

  ${({ $level: e }) => e === 1 && `
    font-weight: 600;
    font-size: 16px;
    padding: 8px 8px;
  `}

  ${({ $level: e }) => e === 2 && `
    font-weight: 500;
    font-size: 14px;
    padding: 4px 16px;
  `}

  ${({ $level: e }) => e === 3 && `
    font-weight: 400;
    font-size: 12px;
    padding: 4px 32px;
  `}
`, MT = S.div`
  position: absolute;
  ${({ $expanded: e }) => e ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${x.computedOne});
  padding: 16px;
  overflow-y: auto;
  code {
    background-color: unset;
    padding: 0;
    border-radius: 0;
  }
`, ud = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ a.jsx("div", {})
  },
  {
    id: "general-error",
    title: "An error has occurred",
    element: /* @__PURE__ */ a.jsx(ET, {}),
    navigation: !1,
    when: vt
  },
  {
    id: "scanconf-update",
    title: "Scan configuration is outdated",
    element: /* @__PURE__ */ a.jsx(ST, {}),
    navigation: !1
  },
  {
    id: "scanconf",
    title: "Scanconf",
    element: /* @__PURE__ */ a.jsx("div", { children: "Main" }),
    children: [
      {
        id: "requests",
        title: "Operations",
        element: /* @__PURE__ */ a.jsx(EO, {})
      },
      {
        id: "operations",
        title: "Scenarios",
        element: /* @__PURE__ */ a.jsx(k2, {})
      },
      {
        id: "global",
        title: "Global blocks",
        element: /* @__PURE__ */ a.jsx(QO, {})
      },
      {
        id: "auth",
        title: "Authentication",
        element: /* @__PURE__ */ a.jsx(yj, {})
      },
      {
        id: "authorizationTests",
        title: "Tests",
        element: /* @__PURE__ */ a.jsx(fT, {})
      },
      {
        id: "environments",
        title: /* @__PURE__ */ a.jsx(sT, {}),
        element: /* @__PURE__ */ a.jsx(YO, {})
      },
      {
        id: "settings",
        title: "Settings",
        element: /* @__PURE__ */ a.jsx(iT, {})
      },
      {
        id: "help",
        title: "Help",
        element: /* @__PURE__ */ a.jsx(DT, {})
      }
    ]
  }
];
function qT(e, t) {
  const n = gx(G_(e, ud), t);
  Zp.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ a.jsx($t.StrictMode, { children: /* @__PURE__ */ a.jsx(eg, { store: n, children: /* @__PURE__ */ a.jsx(tg.Provider, { value: ud, children: /* @__PURE__ */ a.jsx(My, { backend: $v, children: /* @__PURE__ */ a.jsx(ng, {}) }) }) }) })
  ), window.addEventListener("message", rg(n, px));
}
window.renderWebView = qT;
