var lf = Object.defineProperty;
var uf = (t, e, n) => e in t ? lf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Di = (t, e, n) => uf(t, typeof e != "symbol" ? e + "" : e, n);
import { j as s, e as b, Z as zc, y as Nt, c as sn, b as Nc, i as Bn, a as cf, n as df, u as pf, l as mf, t as hf, r as ff, q as y, T as f, S as nt, W as Rc, R as Hn, _ as oa, $ as Pc, a0 as se, a1 as gf, d as vf, s as yf, a2 as kf, f as jf, P as bf, g as xf, a3 as wf, m as Sf } from "./TriangleExclamation.9XEPiFVq.js";
import { a as Un, S as Cf } from "./SearchSidebar.PJ3CRcnu.js";
import { f as _f, k as vr, g as Ya, m as Ac, l as Tf, e as Ef, c as pe, n as Of, a as Ar, o as $f, p as Df, d as In, q as Mc, r as Mr, t as Fc, v as Lc, i as Fr, w as qc, x as If, y as zf, s as Bc, H as Nf } from "./slice.BMh66IVW.js";
import { l as Rf, c as Pf } from "./index.2Ky_SM2o.js";
import { l as Af, p as Mf, c as Hc, A as Ff, d as Lf, G as qf, L as Bf, e as Hf, f as Uf, g as Vf, h as Wf, i as Gf, j as Kf, k as Jf, m as Yf, n as Xf, o as Qf, q as Zf, r as eg, t as tg, u as ng, F as og, C as rg, I as ig, v as ag, w as sg, x as lg, y as ug, R as cg, T as dg, P as pg, z as mg, B as hg, a as Uc, D as fg, E as gg, S as Vc } from "./index.RnhKC_Rz.js";
import { c as vg, w as Lr, s as qr, o as yg } from "./listener.BrNsDJU6.js";
import { t as kg, B as Wc, D as Vn, o as Wn, s as K, T as jg, S as bg, a as Ml, l as Fl, d as xg, F as ot, I as Ge, c as ut, f as Ll, b as ql } from "./Button.Bto4eoJs.js";
import { S as Fo } from "./AngleDown.DrmFfjuG.js";
import { S as wg } from "./AngleUp.BybJo-l1.js";
import { S as Gc, P as Sg } from "./ProgressButton.Cb1FbE6Z.js";
import { T as ft, $ as Cg } from "./Tabs.Bl72ehkQ.js";
import { C as ln, B as Gn, a as yr, T as Kc } from "./CollapsibleCard.Ba7WMPNk.js";
import { c as Jc, P as Kn, a as Ke, f as _g, u as Xa, b as Qa, S as Tg, D as Eg, g as Og, e as $g, h as Ii, i as Dg } from "./index.C_HIaeXA.js";
import { l as Lo, m as qo, S as Ue, D as Za, r as Bl, n as Ig, o as zg, q as Ng, E as Rg } from "./variables.D_ud6PiV.js";
import { d as Yc, F as Xc, a as Q, u as un, b as cn, c as Bo } from "./index.esm.DW1oUrXc.js";
import { S as Br } from "./ExclamationCircle.D7uJcz_8.js";
import { a as Hr, u as Ur } from "./downshift.esm.lZ6ze3ym.js";
import { S as Pg } from "./Check.CqQKP8F4.js";
import { C as Ag, P as Mg, R as Fg, T as Lg, a as qg } from "./index.DbE_TRgE.js";
import { a as Bg, S as Qc } from "./Switch.Bg7S5iCV.js";
import { S as Hl } from "./Select.DfSCZPBK.js";
import { o as Hg, s as Ug } from "./listener.nEdih1i-.js";
import { S as Ho, r as Vg } from "./index.C0hlp2T2.js";
import { E as Yt } from "./Banner.tXk4sjI7.js";
const Zc = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M192 456c0 13.3-10.7 24-24 24H96c-53.02 0-96-42.98-96-96V128c0-53.02 42.98-96 96-96h72c13.3 0 24 10.74 24 24 0 13.25-10.7 24-24 24H96c-26.4 0-48 21.6-48 48v256c0 26.4 21.6 48 48 48h72c13.3 0 24 10.7 24 24zm313.5-216.4-127.1-136c-9.094-9.688-24.28-10.12-33.91-1.031-9.656 9.062-10.12 24.25-1.031 33.91L432.4 232H183.1c-12.4 0-23.1 10.8-23.1 24s10.75 24 23.1 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C348.2 413.8 354.1 416 359.1 416c6.375 0 12.75-2.531 17.47-7.562l127.1-136C514.2 263.2 514.2 248.8 505.5 239.6z" }) }), ed = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M200 32h-80c-30.93 0-56 25.07-56 56v77.5a39.84 39.84 0 0 1-11.67 28.17L7 239c-4.5 4.5-7 10.6-7 17 0 6.375 2.5 12.5 7 17l45.33 45.33A39.783 39.783 0 0 1 64 346.5V424c0 30.9 25.07 56 56 56h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-4.4 0-8-3.6-8-8v-77.5c0-23.44-9.337-45.91-25.95-62.45L57.88 256l28.18-28.05C102.7 211.4 112 188.9 112 165.5V88c0-4.4 3.6-8 8-8h80c13.3 0 24-10.75 24-24s-10.7-24-24-24zm369 207-45.33-45.33A39.783 39.783 0 0 1 512 165.5V88c0-30.93-25.1-56-56-56h-80c-13.3 0-24 10.75-24 23.1S362.7 80 375.1 80H456c4.4 0 8 3.6 8 8v77.5c0 23.37 9.284 45.78 25.81 62.31L517.1 256l-28.19 28.19C473.3 300.7 464 323.1 464 346.5V424c0 4.4-3.6 8-8 8h-80c-13.3 0-24 10.7-24 23.1s10.7 24.9 23.1 24.9H456c30.93 0 56-25.07 56-56v-77.5a39.84 39.84 0 0 1 11.67-28.17L569 273c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17z" }) }), Wg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M235.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" }) }), td = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" }) }), Gg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h140.1l67.9 67.9V320c0 8.8-7.2 16-16 16zm-192 48h192c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9l-67.8-67.9c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-32h-48v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h32v-48H64z" }) }), Kg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M64 368c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48zm0-160c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48zm0-64c-26.51 0-48-21.5-48-48 0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.5-21.49 48-48 48z" }) }), Jg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "m568.1 303-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 296H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 387.7 448 393.8 448 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97zM360 384c-13.25 0-24 10.74-24 24v40c0 8.836-7.164 16-16 16H64.02c-8.836 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v72c0 13.25 10.74 24 23.1 24s25.8-10.7 25.8-24v-93.4c0-16.98-6.742-33.26-18.75-45.26L290.62 18.7C278.6 6.742 262.3 0 245.4 0H63.1C28.65 0-.002 28.66 0 64l.006 384c.002 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64v-40c0-13.3-10.7-24-24-24z" }) }), Yg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zm48-40v-48H40v48h48zm144 40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 232c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40v-48zm40 0v48h48v-48H40zm192 88c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40V72zm40 0v48h48V72H40zm192 88c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40V72h-48v48h48z" }) }), Xg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M336 144c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm0 208c-9.5 0-18.8-.7-27.9-2.2l-28 26.3c-3.6 5.4-9.7 7.9-16.1 7.9h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24V376c0-6.4 2.529-12.5 7.029-17L162.2 203.9c-1.4-9.1-2.2-18.4-2.2-27.9C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176zm0-48c70.7 0 128-57.3 128-128S406.7 48 336 48s-128 57.3-128 128c0 6.9.5 13.7 1.6 20.3l3.8 24.2L47.1 385.9V464h64v-64h64v-64h79l37.4-37.4 24.2 3.8c6.6 1.1 13.4 1.6 20.3 1.6z" }) }), Qg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M24.52 38.13a48.019 48.019 0 0 1 48.51.91L361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87zM48 432l288-176L48 80v352z" }) }), Uo = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M432 256c0 13.3-10.7 24-24 24H248v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200 440V280H40c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160V72c0-13.25 10.75-23.99 24-23.99S248 58.75 248 72v160h160c13.3 0 24 10.8 24 24z" }) }), Zg = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M0 416c0 13.3 10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm32-80c-35.8 0-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56zm-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H268.3z" }) }), ev = (t) => /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ s.jsx("path", { d: "M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm200 248v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" }) }), nd = b.createContext({
  dragDropManager: void 0
});
function Me(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ul = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), zi = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Vl = {
  INIT: "@@redux/INIT" + zi(),
  REPLACE: "@@redux/REPLACE" + zi(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + zi();
  }
};
function tv(t) {
  if (typeof t != "object" || t === null) return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function od(t, e, n) {
  var o;
  if (typeof e == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Me(0));
  if (typeof e == "function" && typeof n > "u" && (n = e, e = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Me(1));
    return n(od)(t, e);
  }
  if (typeof t != "function")
    throw new Error(Me(2));
  var r = t, i = e, a = [], l = a, u = !1;
  function c() {
    l === a && (l = a.slice());
  }
  function d() {
    if (u)
      throw new Error(Me(3));
    return i;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Me(4));
    if (u)
      throw new Error(Me(5));
    var k = !0;
    return c(), l.push(g), function() {
      if (k) {
        if (u)
          throw new Error(Me(6));
        k = !1, c();
        var S = l.indexOf(g);
        l.splice(S, 1), a = null;
      }
    };
  }
  function h(g) {
    if (!tv(g))
      throw new Error(Me(7));
    if (typeof g.type > "u")
      throw new Error(Me(8));
    if (u)
      throw new Error(Me(9));
    try {
      u = !0, i = r(i, g);
    } finally {
      u = !1;
    }
    for (var k = a = l, j = 0; j < k.length; j++) {
      var S = k[j];
      S();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function")
      throw new Error(Me(10));
    r = g, h({
      type: Vl.REPLACE
    });
  }
  function v() {
    var g, k = p;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(S) {
        if (typeof S != "object" || S === null)
          throw new Error(Me(11));
        function w() {
          S.next && S.next(d());
        }
        w();
        var $ = k(w);
        return {
          unsubscribe: $
        };
      }
    }, g[Ul] = function() {
      return this;
    }, g;
  }
  return h({
    type: Vl.INIT
  }), o = {
    dispatch: h,
    subscribe: p,
    getState: d,
    replaceReducer: m
  }, o[Ul] = v, o;
}
function F(t, e, ...n) {
  if (nv() && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    let o;
    if (e === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      let r = 0;
      o = new Error(e.replace(/%s/g, function() {
        return n[r++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
function nv() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function ov(t, e, n) {
  return e.split(".").reduce(
    (o, r) => o && o[r] ? o[r] : n || null,
    t
  );
}
function rv(t, e) {
  return t.filter(
    (n) => n !== e
  );
}
function rd(t) {
  return typeof t == "object";
}
function iv(t, e) {
  const n = /* @__PURE__ */ new Map(), o = (i) => {
    n.set(i, n.has(i) ? n.get(i) + 1 : 1);
  };
  t.forEach(o), e.forEach(o);
  const r = [];
  return n.forEach((i, a) => {
    i === 1 && r.push(a);
  }), r;
}
function av(t, e) {
  return t.filter(
    (n) => e.indexOf(n) > -1
  );
}
const es = "dnd-core/INIT_COORDS", Vr = "dnd-core/BEGIN_DRAG", ts = "dnd-core/PUBLISH_DRAG_SOURCE", Wr = "dnd-core/HOVER", Gr = "dnd-core/DROP", Kr = "dnd-core/END_DRAG";
function Wl(t, e) {
  return {
    type: es,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
const sv = {
  type: es,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function lv(t) {
  return function(n = [], o = {
    publishSource: !0
  }) {
    const { publishSource: r = !0, clientOffset: i, getSourceClientOffset: a } = o, l = t.getMonitor(), u = t.getRegistry();
    t.dispatch(Wl(i)), uv(n, l, u);
    const c = pv(n, l);
    if (c == null) {
      t.dispatch(sv);
      return;
    }
    let d = null;
    if (i) {
      if (!a)
        throw new Error("getSourceClientOffset must be defined");
      cv(a), d = a(c);
    }
    t.dispatch(Wl(i, d));
    const h = u.getSource(c).beginDrag(l, c);
    if (h == null)
      return;
    dv(h), u.pinSource(c);
    const m = u.getSourceType(c);
    return {
      type: Vr,
      payload: {
        itemType: m,
        item: h,
        sourceId: c,
        clientOffset: i || null,
        sourceClientOffset: d || null,
        isSourcePublic: !!r
      }
    };
  };
}
function uv(t, e, n) {
  F(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(o) {
    F(n.getSource(o), "Expected sourceIds to be registered.");
  });
}
function cv(t) {
  F(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function dv(t) {
  F(rd(t), "Item must be an object.");
}
function pv(t, e) {
  let n = null;
  for (let o = t.length - 1; o >= 0; o--)
    if (e.canDragSource(t[o])) {
      n = t[o];
      break;
    }
  return n;
}
function mv(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function hv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      mv(t, r, n[r]);
    });
  }
  return t;
}
function fv(t) {
  return function(n = {}) {
    const o = t.getMonitor(), r = t.getRegistry();
    gv(o), kv(o).forEach((a, l) => {
      const u = vv(a, l, r, o), c = {
        type: Gr,
        payload: {
          dropResult: hv({}, n, u)
        }
      };
      t.dispatch(c);
    });
  };
}
function gv(t) {
  F(t.isDragging(), "Cannot call drop while not dragging."), F(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function vv(t, e, n, o) {
  const r = n.getTarget(t);
  let i = r ? r.drop(o, t) : void 0;
  return yv(i), typeof i > "u" && (i = e === 0 ? {} : o.getDropResult()), i;
}
function yv(t) {
  F(typeof t > "u" || rd(t), "Drop result must either be an object or undefined.");
}
function kv(t) {
  const e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function jv(t) {
  return function() {
    const n = t.getMonitor(), o = t.getRegistry();
    bv(n);
    const r = n.getSourceId();
    return r != null && (o.getSource(r, !0).endDrag(n, r), o.unpinSource()), {
      type: Kr
    };
  };
}
function bv(t) {
  F(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function ra(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(
    (n) => n === e
  ) : t === e;
}
function xv(t) {
  return function(n, { clientOffset: o } = {}) {
    wv(n);
    const r = n.slice(0), i = t.getMonitor(), a = t.getRegistry(), l = i.getItemType();
    return Cv(r, a, l), Sv(r, i, a), _v(r, i, a), {
      type: Wr,
      payload: {
        targetIds: r,
        clientOffset: o || null
      }
    };
  };
}
function wv(t) {
  F(Array.isArray(t), "Expected targetIds to be an array.");
}
function Sv(t, e, n) {
  F(e.isDragging(), "Cannot call hover while not dragging."), F(!e.didDrop(), "Cannot call hover after drop.");
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    F(t.lastIndexOf(r) === o, "Expected targetIds to be unique in the passed array.");
    const i = n.getTarget(r);
    F(i, "Expected targetIds to be registered.");
  }
}
function Cv(t, e, n) {
  for (let o = t.length - 1; o >= 0; o--) {
    const r = t[o], i = e.getTargetType(r);
    ra(i, n) || t.splice(o, 1);
  }
}
function _v(t, e, n) {
  t.forEach(function(o) {
    n.getTarget(o).hover(e, o);
  });
}
function Tv(t) {
  return function() {
    if (t.getMonitor().isDragging())
      return {
        type: ts
      };
  };
}
function Ev(t) {
  return {
    beginDrag: lv(t),
    publishDragSource: Tv(t),
    hover: xv(t),
    drop: fv(t),
    endDrag: jv(t)
  };
}
class Ov {
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
    const e = this, { dispatch: n } = this.store;
    function o(i) {
      return (...a) => {
        const l = i.apply(e, a);
        typeof l < "u" && n(l);
      };
    }
    const r = Ev(this);
    return Object.keys(r).reduce((i, a) => {
      const l = r[a];
      return i[a] = o(l), i;
    }, {});
  }
  dispatch(e) {
    this.store.dispatch(e);
  }
  constructor(e, n) {
    this.isSetUp = !1, this.handleRefCountChange = () => {
      const o = this.store.getState().refCount > 0;
      this.backend && (o && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !o && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1));
    }, this.store = e, this.monitor = n, e.subscribe(this.handleRefCountChange);
  }
}
function $v(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function id(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function Dv(t) {
  const { clientOffset: e, initialClientOffset: n, initialSourceClientOffset: o } = t;
  return !e || !n || !o ? null : id($v(e, o), n);
}
function Iv(t) {
  const { clientOffset: e, initialClientOffset: n } = t;
  return !e || !n ? null : id(e, n);
}
const go = [], ns = [];
go.__IS_NONE__ = !0;
ns.__IS_ALL__ = !0;
function zv(t, e) {
  return t === go ? !1 : t === ns || typeof e > "u" ? !0 : av(e, t).length > 0;
}
class Nv {
  subscribeToStateChange(e, n = {}) {
    const { handlerIds: o } = n;
    F(typeof e == "function", "listener must be a function."), F(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
    let r = this.store.getState().stateId;
    const i = () => {
      const a = this.store.getState(), l = a.stateId;
      try {
        l === r || l === r + 1 && !zv(a.dirtyHandlerIds, o) || e();
      } finally {
        r = l;
      }
    };
    return this.store.subscribe(i);
  }
  subscribeToOffsetChange(e) {
    F(typeof e == "function", "listener must be a function.");
    let n = this.store.getState().dragOffset;
    const o = () => {
      const r = this.store.getState().dragOffset;
      r !== n && (n = r, e());
    };
    return this.store.subscribe(o);
  }
  canDragSource(e) {
    if (!e)
      return !1;
    const n = this.registry.getSource(e);
    return F(n, `Expected to find a valid source. sourceId=${e}`), this.isDragging() ? !1 : n.canDrag(this, e);
  }
  canDropOnTarget(e) {
    if (!e)
      return !1;
    const n = this.registry.getTarget(e);
    if (F(n, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop())
      return !1;
    const o = this.registry.getTargetType(e), r = this.getItemType();
    return ra(o, r) && n.canDrop(this, e);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(e) {
    if (!e)
      return !1;
    const n = this.registry.getSource(e, !0);
    if (F(n, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic())
      return !1;
    const o = this.registry.getSourceType(e), r = this.getItemType();
    return o !== r ? !1 : n.isDragging(this, e);
  }
  isOverTarget(e, n = {
    shallow: !1
  }) {
    if (!e)
      return !1;
    const { shallow: o } = n;
    if (!this.isDragging())
      return !1;
    const r = this.registry.getTargetType(e), i = this.getItemType();
    if (i && !ra(r, i))
      return !1;
    const a = this.getTargetIds();
    if (!a.length)
      return !1;
    const l = a.indexOf(e);
    return o ? l === a.length - 1 : l > -1;
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
    return Dv(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return Iv(this.store.getState().dragOffset);
  }
  constructor(e, n) {
    this.store = e, this.registry = n;
  }
}
const Gl = typeof global < "u" ? global : self, ad = Gl.MutationObserver || Gl.WebKitMutationObserver;
function sd(t) {
  return function() {
    const n = setTimeout(r, 0), o = setInterval(r, 50);
    function r() {
      clearTimeout(n), clearInterval(o), t();
    }
  };
}
function Rv(t) {
  let e = 1;
  const n = new ad(t), o = document.createTextNode("");
  return n.observe(o, {
    characterData: !0
  }), function() {
    e = -e, o.data = e;
  };
}
const Pv = typeof ad == "function" ? (
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
  Rv
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
  sd
);
class Av {
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
  enqueueTask(e) {
    const { queue: n, requestFlush: o } = this;
    n.length || (o(), this.flushing = !0), n[n.length] = e;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: e } = this;
      for (; this.index < e.length; ) {
        const n = this.index;
        if (this.index++, e[n].call(), this.index > this.capacity) {
          for (let o = 0, r = e.length - this.index; o < r; o++)
            e[o] = e[o + this.index];
          e.length -= this.index, this.index = 0;
        }
      }
      e.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (e) => {
      this.pendingErrors.push(e), this.requestErrorThrow();
    }, this.requestFlush = Pv(this.flush), this.requestErrorThrow = sd(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Mv {
  call() {
    try {
      this.task && this.task();
    } catch (e) {
      this.onError(e);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(e, n) {
    this.onError = e, this.release = n, this.task = null;
  }
}
class Fv {
  create(e) {
    const n = this.freeTasks, o = n.length ? n.pop() : new Mv(
      this.onError,
      (r) => n[n.length] = r
    );
    return o.task = e, o;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const ld = new Av(), Lv = new Fv(ld.registerPendingError);
function qv(t) {
  ld.enqueueTask(Lv.create(t));
}
const os = "dnd-core/ADD_SOURCE", rs = "dnd-core/ADD_TARGET", is = "dnd-core/REMOVE_SOURCE", Jr = "dnd-core/REMOVE_TARGET";
function Bv(t) {
  return {
    type: os,
    payload: {
      sourceId: t
    }
  };
}
function Hv(t) {
  return {
    type: rs,
    payload: {
      targetId: t
    }
  };
}
function Uv(t) {
  return {
    type: is,
    payload: {
      sourceId: t
    }
  };
}
function Vv(t) {
  return {
    type: Jr,
    payload: {
      targetId: t
    }
  };
}
function Wv(t) {
  F(typeof t.canDrag == "function", "Expected canDrag to be a function."), F(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), F(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function Gv(t) {
  F(typeof t.canDrop == "function", "Expected canDrop to be a function."), F(typeof t.hover == "function", "Expected hover to be a function."), F(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function ia(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(
      (n) => ia(n, !1)
    );
    return;
  }
  F(typeof t == "string" || typeof t == "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var Fe;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})(Fe || (Fe = {}));
let Kv = 0;
function Jv() {
  return Kv++;
}
function Yv(t) {
  const e = Jv().toString();
  switch (t) {
    case Fe.SOURCE:
      return `S${e}`;
    case Fe.TARGET:
      return `T${e}`;
    default:
      throw new Error(`Unknown Handler Role: ${t}`);
  }
}
function Kl(t) {
  switch (t[0]) {
    case "S":
      return Fe.SOURCE;
    case "T":
      return Fe.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${t}`);
  }
}
function Jl(t, e) {
  const n = t.entries();
  let o = !1;
  do {
    const { done: r, value: [, i] } = n.next();
    if (i === e)
      return !0;
    o = !!r;
  } while (!o);
  return !1;
}
class Xv {
  addSource(e, n) {
    ia(e), Wv(n);
    const o = this.addHandler(Fe.SOURCE, e, n);
    return this.store.dispatch(Bv(o)), o;
  }
  addTarget(e, n) {
    ia(e, !0), Gv(n);
    const o = this.addHandler(Fe.TARGET, e, n);
    return this.store.dispatch(Hv(o)), o;
  }
  containsHandler(e) {
    return Jl(this.dragSources, e) || Jl(this.dropTargets, e);
  }
  getSource(e, n = !1) {
    return F(this.isSourceId(e), "Expected a valid source ID."), n && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
  }
  getTarget(e) {
    return F(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
  }
  getSourceType(e) {
    return F(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
  }
  getTargetType(e) {
    return F(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
  }
  isSourceId(e) {
    return Kl(e) === Fe.SOURCE;
  }
  isTargetId(e) {
    return Kl(e) === Fe.TARGET;
  }
  removeSource(e) {
    F(this.getSource(e), "Expected an existing source."), this.store.dispatch(Uv(e)), qv(() => {
      this.dragSources.delete(e), this.types.delete(e);
    });
  }
  removeTarget(e) {
    F(this.getTarget(e), "Expected an existing target."), this.store.dispatch(Vv(e)), this.dropTargets.delete(e), this.types.delete(e);
  }
  pinSource(e) {
    const n = this.getSource(e);
    F(n, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = n;
  }
  unpinSource() {
    F(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(e, n, o) {
    const r = Yv(e);
    return this.types.set(r, n), e === Fe.SOURCE ? this.dragSources.set(r, o) : e === Fe.TARGET && this.dropTargets.set(r, o), r;
  }
  constructor(e) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
  }
}
const Qv = (t, e) => t === e;
function Zv(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function ey(t, e, n = Qv) {
  if (t.length !== e.length)
    return !1;
  for (let o = 0; o < t.length; ++o)
    if (!n(t[o], e[o]))
      return !1;
  return !0;
}
function ty(t = go, e) {
  switch (e.type) {
    case Wr:
      break;
    case os:
    case rs:
    case Jr:
    case is:
      return go;
    case Vr:
    case ts:
    case Kr:
    case Gr:
    default:
      return ns;
  }
  const { targetIds: n = [], prevTargetIds: o = [] } = e.payload, r = iv(n, o);
  if (!(r.length > 0 || !ey(n, o)))
    return go;
  const a = o[o.length - 1], l = n[n.length - 1];
  return a !== l && (a && r.push(a), l && r.push(l)), r;
}
function ny(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function oy(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ny(t, r, n[r]);
    });
  }
  return t;
}
const Yl = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function ry(t = Yl, e) {
  const { payload: n } = e;
  switch (e.type) {
    case es:
    case Vr:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Wr:
      return Zv(t.clientOffset, n.clientOffset) ? t : oy({}, t, {
        clientOffset: n.clientOffset
      });
    case Kr:
    case Gr:
      return Yl;
    default:
      return t;
  }
}
function iy(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function gn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      iy(t, r, n[r]);
    });
  }
  return t;
}
const ay = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function sy(t = ay, e) {
  const { payload: n } = e;
  switch (e.type) {
    case Vr:
      return gn({}, t, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case ts:
      return gn({}, t, {
        isSourcePublic: !0
      });
    case Wr:
      return gn({}, t, {
        targetIds: n.targetIds
      });
    case Jr:
      return t.targetIds.indexOf(n.targetId) === -1 ? t : gn({}, t, {
        targetIds: rv(t.targetIds, n.targetId)
      });
    case Gr:
      return gn({}, t, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Kr:
      return gn({}, t, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return t;
  }
}
function ly(t = 0, e) {
  switch (e.type) {
    case os:
    case rs:
      return t + 1;
    case is:
    case Jr:
      return t - 1;
    default:
      return t;
  }
}
function uy(t = 0) {
  return t + 1;
}
function cy(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function dy(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      cy(t, r, n[r]);
    });
  }
  return t;
}
function py(t = {}, e) {
  return {
    dirtyHandlerIds: ty(t.dirtyHandlerIds, {
      type: e.type,
      payload: dy({}, e.payload, {
        prevTargetIds: ov(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: ry(t.dragOffset, e),
    refCount: ly(t.refCount, e),
    dragOperation: sy(t.dragOperation, e),
    stateId: uy(t.stateId)
  };
}
function my(t, e = void 0, n = {}, o = !1) {
  const r = hy(o), i = new Nv(r, new Xv(r)), a = new Ov(r, i), l = t(a, e, n);
  return a.receiveBackend(l), a;
}
function hy(t) {
  const e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return od(py, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function fy(t, e) {
  if (t == null) return {};
  var n = gy(t, e), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      o = i[r], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
function gy(t, e) {
  if (t == null) return {};
  var n = {}, o = Object.keys(t), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
let Xl = 0;
const dr = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var vy = /* @__PURE__ */ b.memo(function(e) {
  var { children: n } = e, o = fy(e, [
    "children"
  ]);
  const [r, i] = yy(o);
  return b.useEffect(() => {
    if (i) {
      const a = ud();
      return ++Xl, () => {
        --Xl === 0 && (a[dr] = null);
      };
    }
  }, []), /* @__PURE__ */ s.jsx(nd.Provider, {
    value: r,
    children: n
  });
});
function yy(t) {
  if ("manager" in t)
    return [
      {
        dragDropManager: t.manager
      },
      !1
    ];
  const e = ky(t.backend, t.context, t.options, t.debugMode), n = !t.context;
  return [
    e,
    n
  ];
}
function ky(t, e = ud(), n, o) {
  const r = e;
  return r[dr] || (r[dr] = {
    dragDropManager: my(t, e, n, o)
  }), r[dr];
}
function ud() {
  return typeof global < "u" ? global : window;
}
var jy = function t(e, n) {
  if (e === n) return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor) return !1;
    var o, r, i;
    if (Array.isArray(e)) {
      if (o = e.length, o != n.length) return !1;
      for (r = o; r-- !== 0; )
        if (!t(e[r], n[r])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === n.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === n.toString();
    if (i = Object.keys(e), o = i.length, o !== Object.keys(n).length) return !1;
    for (r = o; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, i[r])) return !1;
    for (r = o; r-- !== 0; ) {
      var a = i[r];
      if (!t(e[a], n[a])) return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
};
const by = /* @__PURE__ */ zc(jy), nn = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function xy(t, e, n) {
  const [o, r] = b.useState(
    () => e(t)
  ), i = b.useCallback(() => {
    const a = e(t);
    by(o, a) || (r(a), n && n());
  }, [
    o,
    t,
    n
  ]);
  return nn(i), [
    o,
    i
  ];
}
function wy(t, e, n) {
  const [o, r] = xy(t, e, n);
  return nn(function() {
    const a = t.getHandlerId();
    if (a != null)
      return t.subscribeToStateChange(r, {
        handlerIds: [
          a
        ]
      });
  }, [
    t,
    r
  ]), o;
}
function cd(t, e, n) {
  return wy(
    e,
    t || (() => ({})),
    () => n.reconnect()
  );
}
function dd(t, e) {
  const n = [];
  return typeof t != "function" && n.push(t), b.useMemo(() => typeof t == "function" ? t() : t, n);
}
function Sy(t) {
  return b.useMemo(
    () => t.hooks.dragSource(),
    [
      t
    ]
  );
}
function Cy(t) {
  return b.useMemo(
    () => t.hooks.dragPreview(),
    [
      t
    ]
  );
}
let Ni = !1, Ri = !1;
class _y {
  receiveHandlerId(e) {
    this.sourceId = e;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    F(!Ni, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Ni = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      Ni = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    F(!Ri, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Ri = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      Ri = !1;
    }
  }
  subscribeToStateChange(e, n) {
    return this.internalMonitor.subscribeToStateChange(e, n);
  }
  isDraggingSource(e) {
    return this.internalMonitor.isDraggingSource(e);
  }
  isOverTarget(e, n) {
    return this.internalMonitor.isOverTarget(e, n);
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
let Pi = !1;
class Ty {
  receiveHandlerId(e) {
    this.targetId = e;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(e, n) {
    return this.internalMonitor.subscribeToStateChange(e, n);
  }
  canDrop() {
    if (!this.targetId)
      return !1;
    F(!Pi, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return Pi = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Pi = !1;
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
function Ey(t, e, n) {
  const o = n.getRegistry(), r = o.addTarget(t, e);
  return [
    r,
    () => o.removeTarget(r)
  ];
}
function Oy(t, e, n) {
  const o = n.getRegistry(), r = o.addSource(t, e);
  return [
    r,
    () => o.removeSource(r)
  ];
}
function aa(t, e, n, o) {
  let r;
  if (r !== void 0)
    return !!r;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  const i = Object.keys(t), a = Object.keys(e);
  if (i.length !== a.length)
    return !1;
  const l = Object.prototype.hasOwnProperty.bind(e);
  for (let u = 0; u < i.length; u++) {
    const c = i[u];
    if (!l(c))
      return !1;
    const d = t[c], p = e[c];
    if (r = void 0, r === !1 || r === void 0 && d !== p)
      return !1;
  }
  return !0;
}
function sa(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function $y(t) {
  if (typeof t.type == "string")
    return;
  const e = t.type.displayName || t.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function Dy(t) {
  return (e = null, n = null) => {
    if (!b.isValidElement(e)) {
      const i = e;
      return t(i, n), i;
    }
    const o = e;
    return $y(o), Iy(o, n ? (i) => t(i, n) : t);
  };
}
function pd(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const o = t[n];
    if (n.endsWith("Ref"))
      e[n] = t[n];
    else {
      const r = Dy(o);
      e[n] = () => r;
    }
  }), e;
}
function Ql(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function Iy(t, e) {
  const n = t.ref;
  return F(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? b.cloneElement(t, {
    ref: (o) => {
      Ql(n, o), Ql(e, o);
    }
  }) : b.cloneElement(t, {
    ref: e
  });
}
class zy {
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
    const e = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    return n && this.disconnectDragSource(), this.handlerId ? e ? (n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = e, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, e, this.dragSourceOptions)), n) : (this.lastConnectedDragSource = e, n) : n;
  }
  reconnectDragPreview(e = !1) {
    const n = this.dragPreview, o = e || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (o && this.disconnectDragPreview(), !!this.handlerId) {
      if (!n) {
        this.lastConnectedDragPreview = n;
        return;
      }
      o && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions));
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
    return !aa(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !aa(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
    this.hooks = pd({
      dragSource: (n, o) => {
        this.clearDragSource(), this.dragSourceOptions = o || null, sa(n) ? this.dragSourceRef = n : this.dragSourceNode = n, this.reconnectDragSource();
      },
      dragPreview: (n, o) => {
        this.clearDragPreview(), this.dragPreviewOptions = o || null, sa(n) ? this.dragPreviewRef = n : this.dragPreviewNode = n, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
  }
}
class Ny {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    e && this.disconnectDropTarget();
    const n = this.dropTarget;
    if (this.handlerId) {
      if (!n) {
        this.lastConnectedDropTarget = n;
        return;
      }
      e && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
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
    return !aa(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
    this.hooks = pd({
      dropTarget: (n, o) => {
        this.clearDropTarget(), this.dropTargetOptions = o, sa(n) ? this.dropTargetRef = n : this.dropTargetNode = n, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
  }
}
function Jn() {
  const { dragDropManager: t } = b.useContext(nd);
  return F(t != null, "Expected drag drop context"), t;
}
function Ry(t, e) {
  const n = Jn(), o = b.useMemo(
    () => new zy(n.getBackend()),
    [
      n
    ]
  );
  return nn(() => (o.dragSourceOptions = t || null, o.reconnect(), () => o.disconnectDragSource()), [
    o,
    t
  ]), nn(() => (o.dragPreviewOptions = e || null, o.reconnect(), () => o.disconnectDragPreview()), [
    o,
    e
  ]), o;
}
function Py() {
  const t = Jn();
  return b.useMemo(
    () => new _y(t),
    [
      t
    ]
  );
}
class Ay {
  beginDrag() {
    const e = this.spec, n = this.monitor;
    let o = null;
    return typeof e.item == "object" ? o = e.item : typeof e.item == "function" ? o = e.item(n) : o = {}, o ?? null;
  }
  canDrag() {
    const e = this.spec, n = this.monitor;
    return typeof e.canDrag == "boolean" ? e.canDrag : typeof e.canDrag == "function" ? e.canDrag(n) : !0;
  }
  isDragging(e, n) {
    const o = this.spec, r = this.monitor, { isDragging: i } = o;
    return i ? i(r) : n === e.getSourceId();
  }
  endDrag() {
    const e = this.spec, n = this.monitor, o = this.connector, { end: r } = e;
    r && r(n.getItem(), n), o.reconnect();
  }
  constructor(e, n, o) {
    this.spec = e, this.monitor = n, this.connector = o;
  }
}
function My(t, e, n) {
  const o = b.useMemo(
    () => new Ay(t, e, n),
    [
      e,
      n
    ]
  );
  return b.useEffect(() => {
    o.spec = t;
  }, [
    t
  ]), o;
}
function Fy(t) {
  return b.useMemo(() => {
    const e = t.type;
    return F(e != null, "spec.type must be defined"), e;
  }, [
    t
  ]);
}
function Ly(t, e, n) {
  const o = Jn(), r = My(t, e, n), i = Fy(t);
  nn(function() {
    if (i != null) {
      const [l, u] = Oy(i, r, o);
      return e.receiveHandlerId(l), n.receiveHandlerId(l), u;
    }
  }, [
    o,
    e,
    n,
    r,
    i
  ]);
}
function qy(t, e) {
  const n = dd(t);
  F(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const o = Py(), r = Ry(n.options, n.previewOptions);
  return Ly(n, o, r), [
    cd(n.collect, o, r),
    Sy(r),
    Cy(r)
  ];
}
function By(t) {
  return b.useMemo(
    () => t.hooks.dropTarget(),
    [
      t
    ]
  );
}
function Hy(t) {
  const e = Jn(), n = b.useMemo(
    () => new Ny(e.getBackend()),
    [
      e
    ]
  );
  return nn(() => (n.dropTargetOptions = t || null, n.reconnect(), () => n.disconnectDropTarget()), [
    t
  ]), n;
}
function Uy() {
  const t = Jn();
  return b.useMemo(
    () => new Ty(t),
    [
      t
    ]
  );
}
function Vy(t) {
  const { accept: e } = t;
  return b.useMemo(() => (F(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [
    e
  ]), [
    e
  ]);
}
class Wy {
  canDrop() {
    const e = this.spec, n = this.monitor;
    return e.canDrop ? e.canDrop(n.getItem(), n) : !0;
  }
  hover() {
    const e = this.spec, n = this.monitor;
    e.hover && e.hover(n.getItem(), n);
  }
  drop() {
    const e = this.spec, n = this.monitor;
    if (e.drop)
      return e.drop(n.getItem(), n);
  }
  constructor(e, n) {
    this.spec = e, this.monitor = n;
  }
}
function Gy(t, e) {
  const n = b.useMemo(
    () => new Wy(t, e),
    [
      e
    ]
  );
  return b.useEffect(() => {
    n.spec = t;
  }, [
    t
  ]), n;
}
function Ky(t, e, n) {
  const o = Jn(), r = Gy(t, e), i = Vy(t);
  nn(function() {
    const [l, u] = Ey(i, r, o);
    return e.receiveHandlerId(l), n.receiveHandlerId(l), u;
  }, [
    o,
    e,
    r,
    n,
    i.map(
      (a) => a.toString()
    ).join("|")
  ]);
}
function md(t, e) {
  const n = dd(t), o = Uy(), r = Hy(n.options);
  return Ky(n, o, r), [
    cd(n.collect, o, r),
    By(r)
  ];
}
function hd(t) {
  let e = null;
  return () => (e == null && (e = t()), e);
}
function Jy(t, e) {
  return t.filter(
    (n) => n !== e
  );
}
function Yy(t, e) {
  const n = /* @__PURE__ */ new Set(), o = (i) => n.add(i);
  t.forEach(o), e.forEach(o);
  const r = [];
  return n.forEach(
    (i) => r.push(i)
  ), r;
}
class Xy {
  enter(e) {
    const n = this.entered.length, o = (r) => this.isNodeInDocument(r) && (!r.contains || r.contains(e));
    return this.entered = Yy(this.entered.filter(o), [
      e
    ]), n === 0 && this.entered.length > 0;
  }
  leave(e) {
    const n = this.entered.length;
    return this.entered = Jy(this.entered.filter(this.isNodeInDocument), e), n > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(e) {
    this.entered = [], this.isNodeInDocument = e;
  }
}
class Qy {
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
      const n = {};
      Object.keys(this.config.exposeProperties).forEach((o) => {
        const r = this.config.exposeProperties[o];
        r != null && (n[o] = {
          value: r(e, this.config.matchesTypes),
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
  isDragging(e, n) {
    return n === e.getSourceId();
  }
  endDrag() {
  }
  constructor(e) {
    this.config = e, this.item = {}, this.initializeExposedProperties();
  }
}
const fd = "__NATIVE_FILE__", gd = "__NATIVE_URL__", vd = "__NATIVE_TEXT__", yd = "__NATIVE_HTML__", Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: fd,
  HTML: yd,
  TEXT: vd,
  URL: gd
}, Symbol.toStringTag, { value: "Module" }));
function Ai(t, e, n) {
  const o = e.reduce(
    (r, i) => r || t.getData(i),
    ""
  );
  return o ?? n;
}
const la = {
  [fd]: {
    exposeProperties: {
      files: (t) => Array.prototype.slice.call(t.files),
      items: (t) => t.items,
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Files"
    ]
  },
  [yd]: {
    exposeProperties: {
      html: (t, e) => Ai(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [gd]: {
    exposeProperties: {
      urls: (t, e) => Ai(t, e, "").split(`
`),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [vd]: {
    exposeProperties: {
      text: (t, e) => Ai(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function Zy(t, e) {
  const n = la[t];
  if (!n)
    throw new Error(`native type ${t} has no configuration`);
  const o = new Qy(n);
  return o.loadDataTransfer(e), o;
}
function Mi(t) {
  if (!t)
    return null;
  const e = Array.prototype.slice.call(t.types || []);
  return Object.keys(la).filter((n) => {
    const o = la[n];
    return o != null && o.matchesTypes ? o.matchesTypes.some(
      (r) => e.indexOf(r) > -1
    ) : !1;
  })[0] || null;
}
const ek = hd(
  () => /firefox/i.test(navigator.userAgent)
), kd = hd(
  () => !!window.safari
);
class eu {
  interpolate(e) {
    const { xs: n, ys: o, c1s: r, c2s: i, c3s: a } = this;
    let l = n.length - 1;
    if (e === n[l])
      return o[l];
    let u = 0, c = a.length - 1, d;
    for (; u <= c; ) {
      d = Math.floor(0.5 * (u + c));
      const m = n[d];
      if (m < e)
        u = d + 1;
      else if (m > e)
        c = d - 1;
      else
        return o[d];
    }
    l = Math.max(0, c);
    const p = e - n[l], h = p * p;
    return o[l] + r[l] * p + i[l] * h + a[l] * p * h;
  }
  constructor(e, n) {
    const { length: o } = e, r = [];
    for (let m = 0; m < o; m++)
      r.push(m);
    r.sort(
      (m, v) => e[m] < e[v] ? -1 : 1
    );
    const i = [], a = [];
    let l, u;
    for (let m = 0; m < o - 1; m++)
      l = e[m + 1] - e[m], u = n[m + 1] - n[m], i.push(l), a.push(u / l);
    const c = [
      a[0]
    ];
    for (let m = 0; m < i.length - 1; m++) {
      const v = a[m], g = a[m + 1];
      if (v * g <= 0)
        c.push(0);
      else {
        l = i[m];
        const k = i[m + 1], j = l + k;
        c.push(3 * j / ((j + k) / v + (j + l) / g));
      }
    }
    c.push(a[a.length - 1]);
    const d = [], p = [];
    let h;
    for (let m = 0; m < c.length - 1; m++) {
      h = a[m];
      const v = c[m], g = 1 / i[m], k = v + c[m + 1] - h - h;
      d.push((h - v - k) * g), p.push(k * g * g);
    }
    this.xs = e, this.ys = n, this.c1s = c, this.c2s = d, this.c3s = p;
  }
}
const tk = 1;
function jd(t) {
  const e = t.nodeType === tk ? t : t.parentElement;
  if (!e)
    return null;
  const { top: n, left: o } = e.getBoundingClientRect();
  return {
    x: o,
    y: n
  };
}
function or(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function nk(t) {
  var e;
  return t.nodeName === "IMG" && (ek() || !(!((e = document.documentElement) === null || e === void 0) && e.contains(t)));
}
function ok(t, e, n, o) {
  let r = t ? e.width : n, i = t ? e.height : o;
  return kd() && t && (i /= window.devicePixelRatio, r /= window.devicePixelRatio), {
    dragPreviewWidth: r,
    dragPreviewHeight: i
  };
}
function rk(t, e, n, o, r) {
  const i = nk(e), l = jd(i ? t : e), u = {
    x: n.x - l.x,
    y: n.y - l.y
  }, { offsetWidth: c, offsetHeight: d } = t, { anchorX: p, anchorY: h } = o, { dragPreviewWidth: m, dragPreviewHeight: v } = ok(i, e, c, d), g = () => {
    let O = new eu([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / d * v,
      // Dock to the bottom
      u.y + v - d
    ]).interpolate(h);
    return kd() && i && (O += (window.devicePixelRatio - 1) * v), O;
  }, k = () => new eu([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    u.x,
    // Align at the center
    u.x / c * m,
    // Dock to the right
    u.x + m - c
  ]).interpolate(p), { offsetX: j, offsetY: S } = r, w = j === 0 || j, $ = S === 0 || S;
  return {
    x: w ? j : k(),
    y: $ ? S : g()
  };
}
class ik {
  get window() {
    if (this.globalContext)
      return this.globalContext;
    if (typeof window < "u")
      return window;
  }
  get document() {
    var e;
    return !((e = this.globalContext) === null || e === void 0) && e.document ? this.globalContext.document : this.window ? this.window.document : void 0;
  }
  get rootElement() {
    var e;
    return ((e = this.optionsArgs) === null || e === void 0 ? void 0 : e.rootElement) || this.window;
  }
  constructor(e, n) {
    this.ownerDocument = null, this.globalContext = e, this.optionsArgs = n;
  }
}
function ak(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function tu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ak(t, r, n[r]);
    });
  }
  return t;
}
class sk {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var e, n;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((e = this.dragStartSourceIds) === null || e === void 0 ? void 0 : e.length) || 0,
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
    const e = this.rootElement;
    if (e !== void 0) {
      if (e.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      e.__isReactDndBackendSetUp = !0, this.addEventListeners(e);
    }
  }
  teardown() {
    const e = this.rootElement;
    if (e !== void 0 && (e.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
      var n;
      (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(e, n, o) {
    return this.sourcePreviewNodeOptions.set(e, o), this.sourcePreviewNodes.set(e, n), () => {
      this.sourcePreviewNodes.delete(e), this.sourcePreviewNodeOptions.delete(e);
    };
  }
  connectDragSource(e, n, o) {
    this.sourceNodes.set(e, n), this.sourceNodeOptions.set(e, o);
    const r = (a) => this.handleDragStart(a, e), i = (a) => this.handleSelectStart(a);
    return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", r), n.addEventListener("selectstart", i), () => {
      this.sourceNodes.delete(e), this.sourceNodeOptions.delete(e), n.removeEventListener("dragstart", r), n.removeEventListener("selectstart", i), n.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(e, n) {
    const o = (a) => this.handleDragEnter(a, e), r = (a) => this.handleDragOver(a, e), i = (a) => this.handleDrop(a, e);
    return n.addEventListener("dragenter", o), n.addEventListener("dragover", r), n.addEventListener("drop", i), () => {
      n.removeEventListener("dragenter", o), n.removeEventListener("dragover", r), n.removeEventListener("drop", i);
    };
  }
  addEventListeners(e) {
    e.addEventListener && (e.addEventListener("dragstart", this.handleTopDragStart), e.addEventListener("dragstart", this.handleTopDragStartCapture, !0), e.addEventListener("dragend", this.handleTopDragEndCapture, !0), e.addEventListener("dragenter", this.handleTopDragEnter), e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.addEventListener("dragover", this.handleTopDragOver), e.addEventListener("dragover", this.handleTopDragOverCapture, !0), e.addEventListener("drop", this.handleTopDrop), e.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(e) {
    e.removeEventListener && (e.removeEventListener("dragstart", this.handleTopDragStart), e.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), e.removeEventListener("dragend", this.handleTopDragEndCapture, !0), e.removeEventListener("dragenter", this.handleTopDragEnter), e.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), e.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), e.removeEventListener("dragover", this.handleTopDragOver), e.removeEventListener("dragover", this.handleTopDragOverCapture, !0), e.removeEventListener("drop", this.handleTopDrop), e.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    const e = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(e);
    return tu({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, n || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const e = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(e);
    return tu({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, n || {});
  }
  isDraggingNativeItem() {
    const e = this.monitor.getItemType();
    return Object.keys(Zl).some(
      (n) => Zl[n] === e
    );
  }
  beginDragNativeItem(e, n) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = Zy(e, n), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(e) {
    this.clearCurrentDragSourceNode(), this.currentDragSourceNode = e;
    const n = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var o;
      return (o = this.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
    }, n);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (this.currentDragSourceNode = null, this.rootElement) {
        var e;
        (e = this.window) === null || e === void 0 || e.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
      }
      return this.mouseMoveTimeoutTimer = null, !0;
    }
    return !1;
  }
  handleDragStart(e, n) {
    e.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
  }
  handleDragEnter(e, n) {
    this.dragEnterTargetIds.unshift(n);
  }
  handleDragOver(e, n) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
  }
  handleDrop(e, n) {
    this.dropTargetIds.unshift(n);
  }
  constructor(e, n, o) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map(), this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map(), this.sourceNodes = /* @__PURE__ */ new Map(), this.sourceNodeOptions = /* @__PURE__ */ new Map(), this.dragStartSourceIds = null, this.dropTargetIds = [], this.dragEnterTargetIds = [], this.currentNativeSource = null, this.currentNativeHandle = null, this.currentDragSourceNode = null, this.altKeyPressed = !1, this.mouseMoveTimeoutTimer = null, this.asyncEndDragFrameId = null, this.dragOverTargetIds = null, this.lastClientOffset = null, this.hoverRafId = null, this.getSourceClientOffset = (r) => {
      const i = this.sourceNodes.get(r);
      return i && jd(i) || null;
    }, this.endDragNativeItem = () => {
      this.isDraggingNativeItem() && (this.actions.endDrag(), this.currentNativeHandle && this.registry.removeSource(this.currentNativeHandle), this.currentNativeHandle = null, this.currentNativeSource = null);
    }, this.isNodeInDocument = (r) => !!(r && this.document && this.document.body && this.document.body.contains(r)), this.endDragIfSourceWasRemovedFromDOM = () => {
      const r = this.currentDragSourceNode;
      r == null || this.isNodeInDocument(r) || (this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover());
    }, this.scheduleHover = (r) => {
      this.hoverRafId === null && typeof requestAnimationFrame < "u" && (this.hoverRafId = requestAnimationFrame(() => {
        this.monitor.isDragging() && this.actions.hover(r || [], {
          clientOffset: this.lastClientOffset
        }), this.hoverRafId = null;
      }));
    }, this.cancelHover = () => {
      this.hoverRafId !== null && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this.hoverRafId), this.hoverRafId = null);
    }, this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode(), this.dragStartSourceIds = [];
    }, this.handleTopDragStart = (r) => {
      if (r.defaultPrevented)
        return;
      const { dragStartSourceIds: i } = this;
      this.dragStartSourceIds = null;
      const a = or(r);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(i || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: a
      });
      const { dataTransfer: l } = r, u = Mi(l);
      if (this.monitor.isDragging()) {
        if (l && typeof l.setDragImage == "function") {
          const d = this.monitor.getSourceId(), p = this.sourceNodes.get(d), h = this.sourcePreviewNodes.get(d) || p;
          if (h) {
            const { anchorX: m, anchorY: v, offsetX: g, offsetY: k } = this.getCurrentSourcePreviewNodeOptions(), w = rk(p, h, a, {
              anchorX: m,
              anchorY: v
            }, {
              offsetX: g,
              offsetY: k
            });
            l.setDragImage(h, w.x, w.y);
          }
        }
        try {
          l == null || l.setData("application/json", {});
        } catch {
        }
        this.setCurrentDragSourceNode(r.target);
        const { captureDraggingState: c } = this.getCurrentSourcePreviewNodeOptions();
        c ? this.actions.publishDragSource() : setTimeout(
          () => this.actions.publishDragSource(),
          0
        );
      } else if (u)
        this.beginDragNativeItem(u);
      else {
        if (l && !l.types && (r.target && !r.target.hasAttribute || !r.target.hasAttribute("draggable")))
          return;
        r.preventDefault();
      }
    }, this.handleTopDragEndCapture = () => {
      this.clearCurrentDragSourceNode() && this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleTopDragEnterCapture = (r) => {
      if (this.dragEnterTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(r.dataTransfer);
      }
      if (!this.enterLeaveCounter.enter(r.target) || this.monitor.isDragging())
        return;
      const { dataTransfer: l } = r, u = Mi(l);
      u && this.beginDragNativeItem(u, l);
    }, this.handleTopDragEnter = (r) => {
      const { dragEnterTargetIds: i } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = r.altKey, i.length > 0 && this.actions.hover(i, {
        clientOffset: or(r)
      }), i.some(
        (l) => this.monitor.canDropOnTarget(l)
      ) && (r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = this.getCurrentDropEffect()));
    }, this.handleTopDragOverCapture = (r) => {
      if (this.dragOverTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(r.dataTransfer);
      }
    }, this.handleTopDragOver = (r) => {
      const { dragOverTargetIds: i } = this;
      if (this.dragOverTargetIds = [], !this.monitor.isDragging()) {
        r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = "none");
        return;
      }
      this.altKeyPressed = r.altKey, this.lastClientOffset = or(r), this.scheduleHover(i), (i || []).some(
        (l) => this.monitor.canDropOnTarget(l)
      ) ? (r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = this.getCurrentDropEffect())) : this.isDraggingNativeItem() ? r.preventDefault() : (r.preventDefault(), r.dataTransfer && (r.dataTransfer.dropEffect = "none"));
    }, this.handleTopDragLeaveCapture = (r) => {
      this.isDraggingNativeItem() && r.preventDefault(), this.enterLeaveCounter.leave(r.target) && (this.isDraggingNativeItem() && setTimeout(
        () => this.endDragNativeItem(),
        0
      ), this.cancelHover());
    }, this.handleTopDropCapture = (r) => {
      if (this.dropTargetIds = [], this.isDraggingNativeItem()) {
        var i;
        r.preventDefault(), (i = this.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(r.dataTransfer);
      } else Mi(r.dataTransfer) && r.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (r) => {
      const { dropTargetIds: i } = this;
      this.dropTargetIds = [], this.actions.hover(i, {
        clientOffset: or(r)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (r) => {
      const i = r.target;
      typeof i.dragDrop == "function" && (i.tagName === "INPUT" || i.tagName === "SELECT" || i.tagName === "TEXTAREA" || i.isContentEditable || (r.preventDefault(), i.dragDrop()));
    }, this.options = new ik(n, o), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new Xy(this.isNodeInDocument);
  }
}
const lk = function(e, n, o) {
  return new sk(e, n, o);
}, as = Nt("scanconf/runScan"), bd = Nt("scanconf/runFullScan"), Yr = Nt(
  "scanconf/showScanconfOperation"
), xd = Nt("scanconf/loadUpdatedScanconf"), Xr = Nt("scanconf/loadPlaybook"), uk = Nt("http/sendHttpRequest"), ck = Nt("http/showHttpResponse"), dk = Nt("http/showHttpError"), pk = {
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
}, wd = sn({
  name: "scanconf",
  initialState: pk,
  reducers: {
    saveScanconf: (t) => {
    },
    saveSettings: (t, { payload: e }) => {
      t.playbook.runtimeConfiguration = { ...t.playbook.runtimeConfiguration, ...e };
    },
    saveRequest: (t, {
      payload: { ref: e, stage: n }
    }) => {
      e.type === "operation" ? t.playbook.operations[e.id].request = n : t.playbook.requests && (t.playbook.requests[e.id] = n);
    },
    removeRequest: (t, { payload: e }) => {
      var n;
      e.type === "request" && ((n = t.playbook.requests) == null ? void 0 : n[e.id]) !== void 0 && delete t.playbook.requests[e.id];
    },
    saveCredential: (t, {
      payload: { group: e, id: n, credential: o }
    }) => {
      var i;
      const r = Object.keys(o.methods || {})[0];
      t.selectedSubcredential !== void 0 && ((i = o == null ? void 0 : o.methods) == null ? void 0 : i[t.selectedSubcredential]) === void 0 && (t.selectedSubcredential = r), o.methods[o.default] === void 0 && (o.default = r), t.playbook.authenticationDetails[e][n] = o;
    },
    saveEnvironment: (t, {
      payload: { name: e, environment: n }
    }) => {
      t.playbook.environments[e] = n;
    },
    addCredential: (t, {
      payload: { credentialGroup: e, id: n, credential: o }
    }) => {
      t.playbook.authenticationDetails[e] === void 0 && (t.playbook.authenticationDetails[e] = {}), t.playbook.authenticationDetails[e][n] = o;
    },
    removeCredential: (t, { payload: { credentialGroup: e, id: n } }) => {
      var o, r;
      if (delete t.playbook.authenticationDetails[e][n], t.selectedCredentialGroup === e && t.selectedCredential === n) {
        const i = (o = Object.keys(
          t.playbook.authenticationDetails[e]
        )) == null ? void 0 : o[0];
        if (i) {
          t.selectedCredential = i;
          const a = (r = Object.keys(
            t.playbook.authenticationDetails[e][i].methods
          )) == null ? void 0 : r[0];
          a && (t.selectedSubcredential = a);
        } else
          t.selectedCredential = void 0, t.selectedSubcredential = void 0;
      }
    },
    selectCredential: (t, { payload: e }) => {
      var n, o, r;
      t.selectedCredentialGroup = e.group, t.selectedCredential = e.credential, t.selectedSubcredential = Object.keys(
        ((r = (o = (n = t.playbook.authenticationDetails) == null ? void 0 : n[e.group]) == null ? void 0 : o[e.credential]) == null ? void 0 : r.methods) || {}
      )[0];
    },
    selectSubcredential: (t, { payload: e }) => {
      t.selectedSubcredential = e;
    },
    addAuthorizationTest: (t, {
      payload: { id: e, test: n }
    }) => {
      t.playbook.authorizationTests[e] = n;
    },
    saveAuthorizationTest: (t, {
      payload: { id: e, test: n }
    }) => {
      t.playbook.authorizationTests[e] = n;
    },
    removeAuthorizationTest: (t, { payload: { id: e } }) => {
      var n;
      delete t.playbook.authorizationTests[e], t.selectedAuthorizationTest = (n = Object.keys(t.playbook.authorizationTests)) == null ? void 0 : n[0];
    },
    selectAuthorizationTest: (t, { payload: { id: e } }) => {
      t.selectedAuthorizationTest = e;
    },
    saveOperationReference: (t, {
      payload: { location: e, reference: n }
    }) => {
      rr(t.playbook, e)[e.stageIndex] = n;
    },
    addStage: (t, {
      payload: { container: e, stage: n }
    }) => {
      rr(t.playbook, e).push(n);
    },
    moveStage: (t, {
      payload: { location: e, to: n }
    }) => {
      fk(rr(t.playbook, e), e.stageIndex, n);
    },
    removeStage: (t, { payload: e }) => {
      rr(t.playbook, e).splice(e.stageIndex, 1);
    },
    updateOperationAuthorizationTests: (t, {
      payload: { operationId: e, authorizationTests: n }
    }) => {
      t.playbook.operations[e].authorizationTests = n;
    },
    customizeOperation: (t, { payload: e }) => {
      t.playbook.operations[e].customized = !0;
    },
    createVariable: (t, {
      payload: { name: e, location: n, jsonPointer: o, ref: r, statusCode: i }
    }) => {
      const a = r.type === "operation" ? t.playbook.operations[r.id].request : t.playbook.requests[r.id], l = vr(i), u = a.responses[i] ? i : l !== void 0 && a.responses[l] ? l : "default";
      a.responses[u] === void 0 && (a.responses[u] = {
        variableAssignments: {},
        expectations: u
      }), a.responses[u].variableAssignments[e] = {
        from: n,
        in: "body",
        contentType: "json",
        path: {
          type: "jsonPointer",
          value: o
        }
      };
    }
  },
  extraReducers: (t) => {
    t.addCase(Xr, (e, { payload: { oas: n, playbook: o } }) => {
      var r, i, a, l, u;
      e.oas = n, e.playbook = o, e.servers = _f(n), e.selectedCredentialGroup = 0, e.selectedCredential = (i = Object.keys(((r = o == null ? void 0 : o.authenticationDetails) == null ? void 0 : r[0]) || {})) == null ? void 0 : i[0], e.selectedCredential !== void 0 && (e.selectedSubcredential = (l = Object.keys(
        (a = o == null ? void 0 : o.authenticationDetails[0][e.selectedCredential]) == null ? void 0 : a.methods
      )) == null ? void 0 : l[0]), e.selectedAuthorizationTest = (u = Object.keys((o == null ? void 0 : o.authorizationTests) || {})) == null ? void 0 : u[0];
    });
  }
});
function rr(t, e) {
  return e.container === "operationScenarios" ? t.operations[e.operationId].scenarios[e.scenarioIndex].requests : e.container === "operationBefore" ? t.operations[e.operationId].before : e.container === "operationAfter" ? t.operations[e.operationId].after : e.container === "globalBefore" ? t.before : e.container === "globalAfter" ? t.after : e.container === "credential" ? t.authenticationDetails[e.group][e.credentialId].methods[e.subCredentialId].requests : null;
}
const {
  saveSettings: Sd,
  saveEnvironment: Cd,
  saveScanconf: HD,
  addCredential: ss,
  removeCredential: ls,
  addStage: Rt,
  moveStage: Pt,
  removeStage: At,
  saveOperationReference: Mt,
  saveCredential: us,
  selectCredential: kr,
  selectSubcredential: jr,
  addAuthorizationTest: _d,
  saveAuthorizationTest: Td,
  removeAuthorizationTest: Ed,
  selectAuthorizationTest: nu,
  saveRequest: Vo,
  removeRequest: Od,
  updateOperationAuthorizationTests: ua,
  customizeOperation: mk,
  createVariable: cs
} = wd.actions, hk = wd.reducer;
function fk(t, e, n) {
  const o = e < 0 ? t.length + e : e;
  if (o >= 0 && o < t.length) {
    const r = n < 0 ? t.length + n : n, [i] = t.splice(e, 1);
    t.splice(r, 0, i);
  }
}
const gk = {}, $d = sn({
  name: "generalError",
  initialState: gk,
  reducers: {
    showGeneralError: (t, e) => {
      t.error = e.payload;
    }
  }
}), vk = Nc, { showGeneralError: mt } = $d.actions, yk = $d.reducer;
function Qr(t, e) {
  if (t.auth.length === 0)
    return e;
  const [n, ...o] = t.auth, r = zn(e), i = zn(r.results);
  return Qr({ auth: o }, i.auth[n].execution);
}
function Kt(t, e) {
  return zn(Qr(t, e));
}
function ct(t, e) {
  return zn(Kt(t, e).results);
}
function ou(t, e) {
  const n = t.auth.slice(0, -1);
  return zn(zn(Qr({ auth: n }, e)).results);
}
const Dd = {
  "playbook-started": function(t, e, n) {
    Qr(t, e).push({
      name: n.name,
      status: "pending",
      results: []
    });
  },
  "request-started": function(t, e, n) {
    Kt(t, e).results.push({
      ref: n.ref,
      auth: {},
      variablesAssigned: [],
      status: "pending"
    });
  },
  "auth-started": function(t, e, n) {
    ct(t, e).auth[n.name] = {
      execution: []
    }, t.auth.push(n.name);
  },
  "auth-finished": function(t, e, n) {
    t.auth.pop();
  },
  "auth-aborted": function(t, e, n) {
    const o = t.auth.pop();
    ct(t, e).auth[o].error = n.error;
  },
  "playbook-finished": function(t, e, n) {
    Kt(t, e).status = "success";
  },
  "playbook-aborted": function(t, e, n) {
    const o = Kt(t, e);
    o.status = "failure", o.error = n.error;
  },
  "payload-variables-substituted": function(t, e, n) {
    ct(t, e).variablesReplaced = {
      stack: n.stack,
      found: n.found,
      missing: n.missing
    };
  },
  "credential-variables-substituted": function(t, e, n) {
    const o = ou(t, e);
    o.auth[n.name].result = n.result, o.auth[n.name].variables = {
      missing: n.missing,
      found: n.found,
      stack: n.stack
    };
  },
  "credential-retrieved-from-cache": function(t, e, n) {
    const o = ou(t, e);
    o.auth[n.name].result = n.result;
  },
  "http-request-prepared": function(t, e, n) {
    const o = ct(t, e);
    o.httpRequest = n.request, o.operationId = n.operationId;
  },
  "http-request-prepare-error": function(t, e, n) {
    const o = ct(t, e);
    o.httpRequestPrepareError = n.error, o.status = "failure", Kt(t, e).status = "failure";
  },
  "http-response-received": function(t, e, n) {
    const o = ct(t, e);
    o.httpResponse = n.response, o.status = "success";
  },
  "http-error-received": function(t, e, n) {
    const o = ct(t, e);
    o.httpError = n.error, o.status = "failure", Kt(t, e).status = "failure";
  },
  "variables-assigned": function(t, e, n) {
    ct(t, e).variablesAssigned.push(...n.assignments);
  },
  "response-processing-error": function(t, e, n) {
    const o = ct(t, e);
    o.responseProcessingError = n.error, o.status = "failure", Kt(t, e).status = "failure";
  }
};
function Zr({
  tryCurrent: t,
  tryResult: e
}, n) {
  Dd[n.event](t, e, n);
}
function ei({
  mockCurrent: t,
  mockResult: e
}, n) {
  Dd[n.event](t, e, n);
}
function zn(t) {
  return t[t.length - 1];
}
function qe(t, e) {
  return t.filter((n) => n.name === e).pop();
}
const kk = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: []
}, Id = sn({
  name: "auth",
  initialState: kk,
  reducers: {
    startTryAuthentication: (t, { payload: e }) => {
    },
    resetTryAuthentication: (t) => {
      t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    addTryAuthenticationStep: (t, { payload: e }) => {
      Zr(t, e);
    },
    resetMockAuthRequestsExecution: (t) => {
      t.mockCurrent = { auth: [] }, t.mockResult = [];
    },
    addMockAuthRequestsExecutionStep: (t, { payload: e }) => {
      ei(t, e);
    }
  },
  extraReducers: (t) => {
    t.addMatcher(
      Bn(
        kr,
        jr,
        us,
        ss,
        ls
      ),
      (e, n) => {
        e.tryCurrent = { auth: [] }, e.tryResult = [];
      }
    );
  }
}), {
  startTryAuthentication: zd,
  resetTryAuthentication: jk,
  addTryAuthenticationStep: Fi,
  resetMockAuthRequestsExecution: bk,
  addMockAuthRequestsExecutionStep: xk
} = Id.actions, wk = Id.reducer, Sk = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  selected: "before"
}, Nd = sn({
  name: "global",
  initialState: Sk,
  reducers: {
    selectGlobal: (t, { payload: e }) => {
      t.selected = e, t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    startTryGlobal: (t, { payload: e }) => {
    },
    resetTryGlobal: (t) => {
      t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    addTryGlobalStep: (t, { payload: e }) => {
      Zr(t, e);
    },
    resetMockGlobal: (t) => {
      t.mockCurrent = { auth: [] }, t.mockResult = [];
    },
    addMockGlobalStep: (t, { payload: e }) => {
      ei(t, e);
    }
  }
}), {
  selectGlobal: Rd,
  startTryGlobal: ca,
  resetTryGlobal: Ck,
  addTryGlobalStep: _k,
  resetMockGlobal: Tk,
  addMockGlobalStep: Ek
} = Nd.actions, Ok = Nd.reducer, $k = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  scenarioId: 0
}, Pd = sn({
  name: "operations",
  initialState: $k,
  reducers: {
    setOperationId: (t, { payload: e }) => {
      t.operationId = e, t.scenarioId = 0, t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    setScenarioId: (t, { payload: e }) => {
      t.scenarioId = e, t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    resetMockOperationExecution: (t) => {
      t.mockCurrent = { auth: [] }, t.mockResult = [];
    },
    addMockOperationExecutionStep: (t, { payload: e }) => {
      ei(t, e);
    },
    startTryExecution: (t, { payload: e }) => {
    },
    resetTryExecution: (t) => {
      t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    addTryExecutionStep: (t, { payload: e }) => {
      Zr(t, e);
    }
  },
  extraReducers: (t) => {
    t.addCase(Yr, (e, { payload: { oas: n, path: o, method: r } }) => {
      e.operationId = void 0;
    });
  }
}), {
  setOperationId: Ad,
  setScenarioId: Md,
  resetMockOperationExecution: Dk,
  startTryExecution: Fd,
  addMockOperationExecutionStep: Ik,
  resetTryExecution: zk,
  addTryExecutionStep: Nk
} = Pd.actions, Rk = Pd.reducer, Pk = {
  tryCurrent: { auth: [] },
  tryResult: [],
  mockCurrent: { auth: [] },
  mockResult: [],
  mockMissingVariables: []
}, Ld = sn({
  name: "requests",
  initialState: Pk,
  reducers: {
    setRequestId: (t, { payload: e }) => {
      t.ref = e, t.tryResult = [];
    },
    executeRequest: (t, e) => {
    },
    resetExecuteRequest: (t) => {
      t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    addExecutionStep: (t, { payload: e }) => {
      Zr(t, e);
    },
    resetMockRequestExecution: (t) => {
      t.mockCurrent = { auth: [] }, t.mockResult = [], t.mockMissingVariables = [];
    },
    addMockRequestExecutionStep: (t, { payload: e }) => {
      ei(t, e), (e.event === "payload-variables-substituted" || e.event === "credential-variables-substituted") && t.mockMissingVariables.push(...e.missing.map((n) => n.name));
    }
  },
  extraReducers: (t) => {
    t.addCase(Yr, (e, { payload: { oas: n, path: o, method: r } }) => {
      const i = Ya(n, o, r), a = Ac(i == null ? void 0 : i.operationId, o, r);
      e.ref = { id: a, type: "operation" };
    });
  }
}), {
  setRequestId: Xt,
  resetExecuteRequest: Ak,
  addExecutionStep: Mk,
  executeRequest: ds,
  resetMockRequestExecution: Fk,
  addMockRequestExecutionStep: Lk
} = Ld.actions, qk = Ld.reducer, Bk = {
  changes: [],
  scanconf: "",
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: { "/": { get: { responses: {} } } }
  },
  updating: !1
}, qd = sn({
  name: "scanconfUpdate",
  initialState: Bk,
  reducers: {
    showChanges: (t, e) => {
      t.changes = e.payload.changes, t.scanconf = e.payload.scanconf, t.oas = e.payload.oas, t.updating = !1;
    },
    updateScanconf: (t) => {
      t.updating = !0;
    },
    skipScanconfUpdate: (t) => {
    }
  }
}), { updateScanconf: Bd, showChanges: Hk, skipScanconfUpdate: Hd } = qd.actions, Uk = qd.reducer, Vk = {
  theme: hf,
  client: vg,
  scanconf: hk,
  scanconfUpdate: Uk,
  operations: Rk,
  requests: qk,
  auth: wk,
  router: ff,
  env: Ef,
  prefs: Mf,
  config: Pf,
  global: Ok,
  generalError: yk
}, Wk = {
  changeTheme: df,
  showHttpError: dk,
  showHttpResponse: ck,
  showScanconfOperation: Yr,
  loadUpdatedScanconf: xd,
  loadEnv: Tf,
  loadConfig: Rf,
  loadPrefs: Af,
  showGeneralError: mt
}, Gk = (t, e) => cf({
  reducer: Vk,
  middleware: (n) => n().prepend(t.middleware).concat(mf),
  preloadedState: {
    theme: e
  }
}), oe = () => pf(), q = Nc;
function Se({ isOpen: t, setOpen: e, ...n }) {
  return e !== void 0 && t !== void 0 ? Ud({ ...n, isOpen: t, setOpen: e }) : Kk({ ...n });
}
function Kk({
  defaultOpen: t,
  ...e
}) {
  const [n, o] = b.useState(t !== void 0 ? t : !0);
  return Ud({ ...e, isOpen: n, setOpen: o });
}
function Ud({
  isOpen: t,
  setOpen: e,
  title: n,
  count: o,
  menu: r,
  children: i
}) {
  return /* @__PURE__ */ s.jsxs(Jk, { children: [
    /* @__PURE__ */ s.jsxs(
      Yk,
      {
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), e(!t);
        },
        children: [
          t ? /* @__PURE__ */ s.jsx(wg, {}) : /* @__PURE__ */ s.jsx(Fo, {}),
          /* @__PURE__ */ s.jsxs(Xk, { children: [
            typeof n == "string" ? /* @__PURE__ */ s.jsx(Qk, { children: n }) : n,
            !!o && /* @__PURE__ */ s.jsx(nj, { children: o }),
            r && /* @__PURE__ */ s.jsx(Zk, { children: r })
          ] })
        ]
      }
    ),
    t && /* @__PURE__ */ s.jsxs(ej, { children: [
      /* @__PURE__ */ s.jsx(tj, {}),
      /* @__PURE__ */ s.jsx("div", { children: i })
    ] })
  ] });
}
const Jk = y.div`
  margin-top: 8px;
  margin-bottom: 8px;
`, Yk = y.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  margin-bottom: 8px;
  & > svg {
    fill: var(${f.foreground});
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
`, Xk = y.div`
  flex: 1;
  display: flex;
  gap: 8px;
`, Qk = y.div`
  font-size: 14px;
  font-weight: 600;
`, Zk = y.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, ej = y.div`
  display: flex;
  flex-direction: row;
  > div:last-child {
    flex: 1;
    margin-left: 8px;
  }
`, tj = y.div`
  width: 2px;
  background-color: var(${f.border});
  margin: 0px 6px;
`, nj = y.span`
  background-color: var(${f.badgeBackground});
  color: var(${f.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`;
function oj({ title: t, icon: e }) {
  return /* @__PURE__ */ s.jsxs(rj, { children: [
    e,
    /* @__PURE__ */ s.jsx("div", { children: t }),
    /* @__PURE__ */ s.jsx("hr", {})
  ] });
}
const rj = y.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  opacity: 0.8;
  font-size: 90%;

  & > svg {
    fill: var(${f.foreground});
  }

  & > hr {
    flex: 1;
    border: none;
    border-top: 1px solid var(${f.border});
  }
`;
function vo({
  message: t,
  children: e,
  ...n
}) {
  return /* @__PURE__ */ s.jsxs(aj, { ...n, children: [
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(nt, {}) }),
      /* @__PURE__ */ s.jsx("span", { children: t })
    ] }),
    e && /* @__PURE__ */ s.jsx("div", { children: e })
  ] });
}
const ij = y.div`
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
      fill: var(${f.foreground});
    }
  }
  border: 1px solid var(${f.border});
  border-radius: 2px;
  color: var(${f.foreground});
  padding: 8px;
  gap: 8px;
`, aj = y(ij)`
  border: 1px solid var(${f.errorBorder});
  background-color: var(${f.errorBackground});
  color: var(${f.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${f.errorForeground});
    }
  }
`;
var ps = "ContextMenu", [sj, UD] = Jc(ps, [
  Hc
]), Ce = Hc(), [lj, Vd] = sj(ps), Wd = (t) => {
  const { __scopeContextMenu: e, children: n, onOpenChange: o, dir: r, modal: i = !0 } = t, [a, l] = b.useState(!1), u = Ce(e), c = _g(o), d = b.useCallback(
    (p) => {
      l(p), c(p);
    },
    [c]
  );
  return /* @__PURE__ */ s.jsx(
    lj,
    {
      scope: e,
      open: a,
      onOpenChange: d,
      modal: i,
      children: /* @__PURE__ */ s.jsx(
        Qf,
        {
          ...u,
          dir: r,
          open: a,
          onOpenChange: d,
          modal: i,
          children: n
        }
      )
    }
  );
};
Wd.displayName = ps;
var Gd = "ContextMenuTrigger", Kd = b.forwardRef(
  (t, e) => {
    const { __scopeContextMenu: n, disabled: o = !1, ...r } = t, i = Vd(Gd, n), a = Ce(n), l = b.useRef({ x: 0, y: 0 }), u = b.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...l.current })
    }), c = b.useRef(0), d = b.useCallback(
      () => window.clearTimeout(c.current),
      []
    ), p = (h) => {
      l.current = { x: h.clientX, y: h.clientY }, i.onOpenChange(!0);
    };
    return b.useEffect(() => d, [d]), b.useEffect(() => void (o && d()), [o, d]), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(Ff, { ...a, virtualRef: u }),
      /* @__PURE__ */ s.jsx(
        Kn.span,
        {
          "data-state": i.open ? "open" : "closed",
          "data-disabled": o ? "" : void 0,
          ...r,
          ref: e,
          style: { WebkitTouchCallout: "none", ...t.style },
          onContextMenu: o ? t.onContextMenu : Ke(t.onContextMenu, (h) => {
            d(), p(h), h.preventDefault();
          }),
          onPointerDown: o ? t.onPointerDown : Ke(
            t.onPointerDown,
            ir((h) => {
              d(), c.current = window.setTimeout(() => p(h), 700);
            })
          ),
          onPointerMove: o ? t.onPointerMove : Ke(t.onPointerMove, ir(d)),
          onPointerCancel: o ? t.onPointerCancel : Ke(t.onPointerCancel, ir(d)),
          onPointerUp: o ? t.onPointerUp : Ke(t.onPointerUp, ir(d))
        }
      )
    ] });
  }
);
Kd.displayName = Gd;
var uj = "ContextMenuPortal", Jd = (t) => {
  const { __scopeContextMenu: e, ...n } = t, o = Ce(e);
  return /* @__PURE__ */ s.jsx(Zf, { ...o, ...n });
};
Jd.displayName = uj;
var Yd = "ContextMenuContent", Xd = b.forwardRef(
  (t, e) => {
    const { __scopeContextMenu: n, ...o } = t, r = Vd(Yd, n), i = Ce(n), a = b.useRef(!1);
    return /* @__PURE__ */ s.jsx(
      Lf,
      {
        ...i,
        ...o,
        ref: e,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (l) => {
          var u;
          (u = t.onCloseAutoFocus) == null || u.call(t, l), !l.defaultPrevented && a.current && l.preventDefault(), a.current = !1;
        },
        onInteractOutside: (l) => {
          var u;
          (u = t.onInteractOutside) == null || u.call(t, l), !l.defaultPrevented && !r.modal && (a.current = !0);
        },
        style: {
          ...t.style,
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
Xd.displayName = Yd;
var cj = "ContextMenuGroup", dj = b.forwardRef(
  (t, e) => {
    const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
    return /* @__PURE__ */ s.jsx(qf, { ...r, ...o, ref: e });
  }
);
dj.displayName = cj;
var pj = "ContextMenuLabel", mj = b.forwardRef(
  (t, e) => {
    const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
    return /* @__PURE__ */ s.jsx(Bf, { ...r, ...o, ref: e });
  }
);
mj.displayName = pj;
var hj = "ContextMenuItem", Qd = b.forwardRef(
  (t, e) => {
    const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
    return /* @__PURE__ */ s.jsx(Hf, { ...r, ...o, ref: e });
  }
);
Qd.displayName = hj;
var fj = "ContextMenuCheckboxItem", gj = b.forwardRef((t, e) => {
  const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
  return /* @__PURE__ */ s.jsx(Uf, { ...r, ...o, ref: e });
});
gj.displayName = fj;
var vj = "ContextMenuRadioGroup", yj = b.forwardRef((t, e) => {
  const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
  return /* @__PURE__ */ s.jsx(Vf, { ...r, ...o, ref: e });
});
yj.displayName = vj;
var kj = "ContextMenuRadioItem", jj = b.forwardRef((t, e) => {
  const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
  return /* @__PURE__ */ s.jsx(Wf, { ...r, ...o, ref: e });
});
jj.displayName = kj;
var bj = "ContextMenuItemIndicator", xj = b.forwardRef((t, e) => {
  const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
  return /* @__PURE__ */ s.jsx(Gf, { ...r, ...o, ref: e });
});
xj.displayName = bj;
var wj = "ContextMenuSeparator", Sj = b.forwardRef((t, e) => {
  const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
  return /* @__PURE__ */ s.jsx(Kf, { ...r, ...o, ref: e });
});
Sj.displayName = wj;
var Cj = "ContextMenuArrow", _j = b.forwardRef(
  (t, e) => {
    const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
    return /* @__PURE__ */ s.jsx(Jf, { ...r, ...o, ref: e });
  }
);
_j.displayName = Cj;
var Tj = "ContextMenuSubTrigger", Ej = b.forwardRef((t, e) => {
  const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
  return /* @__PURE__ */ s.jsx(Yf, { ...r, ...o, ref: e });
});
Ej.displayName = Tj;
var Oj = "ContextMenuSubContent", $j = b.forwardRef((t, e) => {
  const { __scopeContextMenu: n, ...o } = t, r = Ce(n);
  return /* @__PURE__ */ s.jsx(
    Xf,
    {
      ...r,
      ...o,
      ref: e,
      style: {
        ...t.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
$j.displayName = Oj;
function ir(t) {
  return (e) => e.pointerType !== "mouse" ? t(e) : void 0;
}
var Dj = Wd, Ij = Kd, zj = Jd, Nj = Xd, Rj = Qd;
function Pj({
  children: t,
  menu: e
}) {
  return /* @__PURE__ */ s.jsxs(Dj, { children: [
    /* @__PURE__ */ s.jsx(Ij, { asChild: !0, className: "menu", children: t }),
    /* @__PURE__ */ s.jsx(zj, { children: /* @__PURE__ */ s.jsx(Aj, { children: e }) })
  ] });
}
const Aj = y(Nj)`
  margin: 4px;
  background-color: var(${f.dropdownBackground});
  border: 1px solid var(${f.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${f.computedTwo});
`, ru = y(Rj)`
  margin: 2px;
  color: var(${f.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${f.listActiveSelectionBackground});
    color: var(${f.listActiveSelectionForeground});
  }
  > svg {
    fill: var(${f.foreground});
  }
`;
var ms = "Dialog", [Zd, VD] = Jc(ms), [Mj, Ve] = Zd(ms), ep = (t) => {
  const {
    __scopeDialog: e,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: a = !0
  } = t, l = b.useRef(null), u = b.useRef(null), [c = !1, d] = $g({
    prop: o,
    defaultProp: r,
    onChange: i
  });
  return /* @__PURE__ */ s.jsx(
    Mj,
    {
      scope: e,
      triggerRef: l,
      contentRef: u,
      contentId: Ii(),
      titleId: Ii(),
      descriptionId: Ii(),
      open: c,
      onOpenChange: d,
      onOpenToggle: b.useCallback(() => d((p) => !p), [d]),
      modal: a,
      children: n
    }
  );
};
ep.displayName = ms;
var tp = "DialogTrigger", np = b.forwardRef(
  (t, e) => {
    const { __scopeDialog: n, ...o } = t, r = Ve(tp, n), i = Xa(e, r.triggerRef);
    return /* @__PURE__ */ s.jsx(
      Kn.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": gs(r.open),
        ...o,
        ref: i,
        onClick: Ke(t.onClick, r.onOpenToggle)
      }
    );
  }
);
np.displayName = tp;
var hs = "DialogPortal", [Fj, op] = Zd(hs, {
  forceMount: void 0
}), rp = (t) => {
  const { __scopeDialog: e, forceMount: n, children: o, container: r } = t, i = Ve(hs, e);
  return /* @__PURE__ */ s.jsx(Fj, { scope: e, forceMount: n, children: b.Children.map(o, (a) => /* @__PURE__ */ s.jsx(Qa, { present: n || i.open, children: /* @__PURE__ */ s.jsx(Dg, { asChild: !0, container: r, children: a }) })) });
};
rp.displayName = hs;
var br = "DialogOverlay", ip = b.forwardRef(
  (t, e) => {
    const n = op(br, t.__scopeDialog), { forceMount: o = n.forceMount, ...r } = t, i = Ve(br, t.__scopeDialog);
    return i.modal ? /* @__PURE__ */ s.jsx(Qa, { present: o || i.open, children: /* @__PURE__ */ s.jsx(Lj, { ...r, ref: e }) }) : null;
  }
);
ip.displayName = br;
var Lj = b.forwardRef(
  (t, e) => {
    const { __scopeDialog: n, ...o } = t, r = Ve(br, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ s.jsx(eg, { as: Tg, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ s.jsx(
        Kn.div,
        {
          "data-state": gs(r.open),
          ...o,
          ref: e,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), on = "DialogContent", ap = b.forwardRef(
  (t, e) => {
    const n = op(on, t.__scopeDialog), { forceMount: o = n.forceMount, ...r } = t, i = Ve(on, t.__scopeDialog);
    return /* @__PURE__ */ s.jsx(Qa, { present: o || i.open, children: i.modal ? /* @__PURE__ */ s.jsx(qj, { ...r, ref: e }) : /* @__PURE__ */ s.jsx(Bj, { ...r, ref: e }) });
  }
);
ap.displayName = on;
var qj = b.forwardRef(
  (t, e) => {
    const n = Ve(on, t.__scopeDialog), o = b.useRef(null), r = Xa(e, n.contentRef, o);
    return b.useEffect(() => {
      const i = o.current;
      if (i) return tg(i);
    }, []), /* @__PURE__ */ s.jsx(
      sp,
      {
        ...t,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ke(t.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Ke(t.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: Ke(
          t.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Bj = b.forwardRef(
  (t, e) => {
    const n = Ve(on, t.__scopeDialog), o = b.useRef(!1), r = b.useRef(!1);
    return /* @__PURE__ */ s.jsx(
      sp,
      {
        ...t,
        ref: e,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, l;
          (a = t.onCloseAutoFocus) == null || a.call(t, i), i.defaultPrevented || (o.current || (l = n.triggerRef.current) == null || l.focus(), i.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (i) => {
          var u, c;
          (u = t.onInteractOutside) == null || u.call(t, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const a = i.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
        }
      }
    );
  }
), sp = b.forwardRef(
  (t, e) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: i, ...a } = t, l = Ve(on, n), u = b.useRef(null), c = Xa(e, u);
    return ng(), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        og,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ s.jsx(
            Eg,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": gs(l.open),
              ...a,
              ref: c,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(Hj, { titleId: l.titleId }),
        /* @__PURE__ */ s.jsx(Vj, { contentRef: u, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), fs = "DialogTitle", lp = b.forwardRef(
  (t, e) => {
    const { __scopeDialog: n, ...o } = t, r = Ve(fs, n);
    return /* @__PURE__ */ s.jsx(Kn.h2, { id: r.titleId, ...o, ref: e });
  }
);
lp.displayName = fs;
var up = "DialogDescription", cp = b.forwardRef(
  (t, e) => {
    const { __scopeDialog: n, ...o } = t, r = Ve(up, n);
    return /* @__PURE__ */ s.jsx(Kn.p, { id: r.descriptionId, ...o, ref: e });
  }
);
cp.displayName = up;
var dp = "DialogClose", pp = b.forwardRef(
  (t, e) => {
    const { __scopeDialog: n, ...o } = t, r = Ve(dp, n);
    return /* @__PURE__ */ s.jsx(
      Kn.button,
      {
        type: "button",
        ...o,
        ref: e,
        onClick: Ke(t.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
pp.displayName = dp;
function gs(t) {
  return t ? "open" : "closed";
}
var mp = "DialogTitleWarning", [WD, hp] = Og(mp, {
  contentName: on,
  titleName: fs,
  docsSlug: "dialog"
}), Hj = ({ titleId: t }) => {
  const e = hp(mp), n = `\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;
  return b.useEffect(() => {
    t && (document.getElementById(t) || console.error(n));
  }, [n, t]), null;
}, Uj = "DialogDescriptionWarning", Vj = ({ contentRef: t, descriptionId: e }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${hp(Uj).contentName}}.`;
  return b.useEffect(() => {
    var i;
    const r = (i = t.current) == null ? void 0 : i.getAttribute("aria-describedby");
    e && r && (document.getElementById(e) || console.warn(o));
  }, [o, t, e]), null;
}, vs = ep, ys = np, ks = rp, js = ip, bs = ap, xs = lp, ws = cp, Ss = pp;
const fp = y.button`
  cursor: pointer;
  background-color: var(${f.buttonSecondaryBackground});
  color: var(${f.buttonSecondaryForeground});
  border: 1px solid var(${f.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${f.buttonSecondaryHoverBackground});
  }
`;
function Wo({
  onSubmit: t,
  defaultValues: e,
  trigger: n,
  title: o,
  description: r,
  schema: i,
  children: a,
  noOverflow: l,
  open: u,
  onOpenChange: c
}) {
  const d = Yc({
    values: e,
    resolver: i !== void 0 ? kg(i) : void 0
  }), [p, h] = b.useState(!1), m = u ?? p, v = c ?? h;
  return b.useEffect(() => {
    m && d.reset();
  }, [m]), /* @__PURE__ */ s.jsxs(vs, { open: m, onOpenChange: v, children: [
    n && /* @__PURE__ */ s.jsx(ys, { asChild: !0, children: n }),
    /* @__PURE__ */ s.jsxs(ks, { children: [
      /* @__PURE__ */ s.jsx(Gj, {}),
      /* @__PURE__ */ s.jsx(Kj, { $noOverflow: l, children: /* @__PURE__ */ s.jsx(Xc, { ...d, children: /* @__PURE__ */ s.jsxs(
        Wj,
        {
          onSubmit: d.handleSubmit((g) => {
            t(g), v(!1);
          }),
          children: [
            o && /* @__PURE__ */ s.jsx(xs, { children: o }),
            r && /* @__PURE__ */ s.jsx(ws, { children: r }),
            /* @__PURE__ */ s.jsx(Jj, { children: a }),
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
              /* @__PURE__ */ s.jsx(Wc, { type: "submit", children: "Ok" }),
              /* @__PURE__ */ s.jsx(Ss, { asChild: !0, children: /* @__PURE__ */ s.jsx(fp, { children: "Cancel" }) })
            ] })
          ]
        }
      ) }) })
    ] })
  ] });
}
const Wj = y.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Gj = y(js)`
  background-color: var(${f.computedTwo});
  position: fixed;
  inset: 0;
`, Kj = y(bs)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  ${({ $noOverflow: t }) => !t && "overflow-y: auto;"}
  background-color: var(${f.background});
  color: var(${f.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, Jj = y.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
`;
function le({
  label: t,
  name: e,
  disabled: n,
  password: o,
  description: r
}) {
  const {
    field: i,
    fieldState: { error: a, invalid: l }
  } = Q({
    name: e
  });
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Yj, { children: /* @__PURE__ */ s.jsxs(Xj, { invalid: l, children: [
      /* @__PURE__ */ s.jsxs(Zj, { children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("span", { children: t }),
          " ",
          n && /* @__PURE__ */ s.jsx("span", { children: "(read only)" })
        ] }),
        r && /* @__PURE__ */ s.jsx(Vn, { children: r })
      ] }),
      /* @__PURE__ */ s.jsx(Qj, { ...i, disabled: n, type: o ? "password" : "text" })
    ] }) }),
    a && /* @__PURE__ */ s.jsx(eb, { children: a == null ? void 0 : a.message })
  ] });
}
const Yj = y.div`
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
`, Xj = y.div`
  height: 40px;
  background-color: var(${f.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: t }) => t ? `border: 1px solid var(${f.errorBorder});` : `border: 1px solid var(${f.border});
         &:focus-within {
           border: 1px solid var(${f.focusBorder});
         }
      `}
`, Qj = y.input`
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${f.foreground});
  &::placeholder {
    color: var(${f.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, Zj = y.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${f.inputPlaceholderForeground});
`, eb = y.div`
  color: var(${f.errorForeground});
`;
function tb({
  open: t,
  onOpenChange: e,
  onCreateVariable: n,
  jsonPointer: o
}) {
  const r = {
    varname: "",
    jsonPointer: o
  }, i = [], a = Wn({
    varname: K().min(1).regex(Lo(), {
      message: qo
    }).refine((u) => !i.includes(u), {
      message: "Already exists"
    }),
    jsonPointer: K().min(1)
  }), l = (u) => {
    n(u.varname, u.jsonPointer);
  };
  return /* @__PURE__ */ s.jsx(
    Wo,
    {
      title: "Create variable",
      defaultValues: r,
      schema: a,
      onSubmit: l,
      open: t,
      onOpenChange: e,
      children: /* @__PURE__ */ s.jsxs(nb, { children: [
        /* @__PURE__ */ s.jsx(le, { label: "Name", name: "varname" }),
        /* @__PURE__ */ s.jsx(jg, { label: "JSON Pointer", name: "jsonPointer" })
      ] })
    }
  );
}
const nb = y.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function gp({
  value: t,
  menuHandlers: e
}) {
  return /* @__PURE__ */ s.jsx(Cs, { path: [], value: t, trailingComma: !1, menuHandlers: e });
}
function Cs({
  value: t,
  trailingComma: e,
  menuHandlers: n,
  path: o
}) {
  return typeof t == "object" ? Array.isArray(t) ? /* @__PURE__ */ s.jsx(
    rb,
    {
      array: t,
      path: o,
      menuHandlers: n,
      trailingComma: e
    }
  ) : /* @__PURE__ */ s.jsx(
    ob,
    {
      object: t,
      path: o,
      menuHandlers: n,
      trailingComma: e
    }
  ) : /* @__PURE__ */ s.jsx(
    ib,
    {
      value: t,
      path: o,
      menuHandlers: n,
      trailingComma: e
    }
  );
}
function ob({
  object: t,
  trailingComma: e,
  menuHandlers: n,
  path: o
}) {
  if (t === null)
    return /* @__PURE__ */ s.jsx("code", { children: "null" });
  const r = Object.entries(t);
  return r.length === 0 ? /* @__PURE__ */ s.jsx("code", { children: e ? "{}," : "{}" }) : /* @__PURE__ */ s.jsxs(vp, { children: [
    /* @__PURE__ */ s.jsx("code", { children: "{" }),
    /* @__PURE__ */ s.jsx("div", { style: { marginLeft: "20px" }, children: r.map(([i, a], l, u) => /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("code", { children: `"${i}": ` }),
      /* @__PURE__ */ s.jsx(
        Cs,
        {
          value: a,
          path: [...o, i],
          menuHandlers: n,
          trailingComma: l < u.length - 1
        }
      )
    ] }, i)) }),
    /* @__PURE__ */ s.jsx("code", { children: e ? "}," : "}" })
  ] });
}
function rb({
  array: t,
  trailingComma: e,
  menuHandlers: n,
  path: o
}) {
  return /* @__PURE__ */ s.jsxs(vp, { children: [
    /* @__PURE__ */ s.jsx("code", { children: "[" }),
    /* @__PURE__ */ s.jsx("div", { style: { marginLeft: "20px" }, children: t.map((r, i) => /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(
      Cs,
      {
        value: r,
        path: [...o, i],
        menuHandlers: n,
        trailingComma: i < t.length - 1
      }
    ) }, i)) }),
    /* @__PURE__ */ s.jsx("code", { children: e ? "]," : "]" })
  ] });
}
function ib({
  value: t,
  trailingComma: e,
  menuHandlers: n,
  path: o
}) {
  const r = JSON.stringify(t), [i, a] = b.useState(!1), l = /* @__PURE__ */ s.jsxs(ab, { children: [
    /* @__PURE__ */ s.jsx("span", { children: r }),
    e && /* @__PURE__ */ s.jsx("span", { children: "," })
  ] });
  if (n) {
    const u = /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(ru, { onSelect: () => n.onCopy(r), children: [
        /* @__PURE__ */ s.jsx(Gg, {}),
        "Copy"
      ] }),
      /* @__PURE__ */ s.jsxs(ru, { onSelect: () => a(!0), children: [
        /* @__PURE__ */ s.jsx(ed, {}),
        "Create variable"
      ] })
    ] }), c = pe.joinJsonPointer(o);
    return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        tb,
        {
          open: i,
          onOpenChange: a,
          jsonPointer: c,
          onCreateVariable: n.onCreateVariable
        }
      ),
      /* @__PURE__ */ s.jsx(Pj, { menu: u, children: l })
    ] });
  } else
    return l;
}
const vp = y.div`
  code {
    color: var(${f.foreground});
    background-color: var(${f.background});
    border: none;
    padding: none;
  }
`, ab = y.span`
  & > span:first-child {
    &:hover {
      background-color: var(${f.computedOne});
    }
  }
`;
function sb({
  request: t,
  requestRef: e,
  statusCode: n
}) {
  return /* @__PURE__ */ s.jsx(db, { children: ub(t) ? /* @__PURE__ */ s.jsx(lb, { body: t.body, requestRef: e, statusCode: n }) : /* @__PURE__ */ s.jsx(cb, { children: (t == null ? void 0 : t.body) !== void 0 && `${t.body}` }) });
}
function lb({
  body: t,
  requestRef: e,
  statusCode: n
}) {
  const o = oe();
  try {
    return /* @__PURE__ */ s.jsx(
      gp,
      {
        value: JSON.parse(t),
        menuHandlers: {
          onCopy: (r) => {
            navigator.clipboard.writeText(r);
          },
          onCreateVariable: (r, i) => {
            e !== void 0 && n !== void 0 && o(
              cs({
                name: r,
                location: "request",
                jsonPointer: i,
                ref: e,
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
function ub(t) {
  for (const [e, n] of Object.entries(t.headers))
    if (e.toLowerCase() === "content-type" && n.includes("json"))
      return !0;
  return !1;
}
const cb = y.div``, db = y.div`
  padding: 4px 8px;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  max-height: 400px;
  overflow-y: auto;
`;
function pb({ headers: t }) {
  return /* @__PURE__ */ s.jsxs(mb, { children: [
    /* @__PURE__ */ s.jsxs(hb, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Value" })
    ] }),
    Object.entries(t).map(([e, n], o) => /* @__PURE__ */ s.jsxs(fb, { children: [
      /* @__PURE__ */ s.jsx("div", { children: e }),
      /* @__PURE__ */ s.jsx("div", { children: n })
    ] }, o))
  ] });
}
const mb = y.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`, hb = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, fb = y.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function gb({
  operationId: t,
  request: e,
  defaultCollapsed: n,
  requestRef: o,
  statusCode: r
}) {
  return /* @__PURE__ */ s.jsx(vb, { children: /* @__PURE__ */ s.jsxs(ln, { defaultCollapsed: n, children: [
    /* @__PURE__ */ s.jsxs(Gn, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ s.jsx(
        Zc,
        {
          style: {
            width: 14,
            minWidth: 14,
            height: 14,
            minHeight: 14,
            fill: `var(${f.foreground})`
          }
        }
      ),
      /* @__PURE__ */ s.jsx(yb, { children: e.method }),
      /* @__PURE__ */ s.jsx(kb, { children: e.url })
    ] }),
    /* @__PURE__ */ s.jsx(
      ft,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ s.jsx(iu, { children: /* @__PURE__ */ s.jsx(sb, { request: e, requestRef: o, statusCode: r }) }),
            disabled: e.body === void 0
          },
          {
            id: "headers",
            title: "Headers",
            content: /* @__PURE__ */ s.jsx(iu, { children: /* @__PURE__ */ s.jsx(pb, { headers: e.headers }) })
          }
        ]
      }
    )
  ] }) });
}
const vb = y.div`
  > div {
    background-color: var(${f.background});
  }
`, yb = y.div`
  background-color: var(${f.badgeBackground});
  color: var(${f.badgeForeground});
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
`, kb = y.div`
  line-break: anywhere;
`, iu = y.div`
  padding: 8px;
`;
function jb({
  name: t,
  value: e,
  variables: n,
  hasMissing: o
}) {
  var r, i;
  return /* @__PURE__ */ s.jsxs(ln, { children: [
    /* @__PURE__ */ s.jsx(Gn, { style: { gap: "8px" }, children: /* @__PURE__ */ s.jsxs(yr, { children: [
      /* @__PURE__ */ s.jsx(ed, {}),
      "Credential value",
      o && /* @__PURE__ */ s.jsx(Br, { style: { fill: `var(${f.errorForeground})` } }),
      o && /* @__PURE__ */ s.jsxs(bb, { children: [
        "Missing ",
        (i = (r = n == null ? void 0 : n.missing) == null ? void 0 : r.map((a) => `{{${a.name}}}`)) == null ? void 0 : i.join(", ")
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx(xb, { children: e })
  ] });
}
const bb = y.div`
  color: var(${f.errorForeground});
  border-radius: 4px;
`, xb = y.div`
  font-family: monospace;
  padding: 8px;
  line-break: anywhere;
`;
function wb({
  results: t
}) {
  const e = _b(t);
  return /* @__PURE__ */ s.jsx(Sb, { children: /* @__PURE__ */ s.jsxs(ln, { children: [
    /* @__PURE__ */ s.jsxs(Gn, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ s.jsx(yr, { children: /* @__PURE__ */ s.jsx(Xg, {}) }),
      e.map((n, o) => /* @__PURE__ */ s.jsxs(yr, { children: [
        n.name,
        Eb(n)
      ] }, o))
    ] }),
    /* @__PURE__ */ s.jsx(Cb, { children: e.map((n, o) => /* @__PURE__ */ s.jsxs(Hn.Fragment, { children: [
      n.execution[0] && /* @__PURE__ */ s.jsx(yp, { playbook: n.execution[0] }),
      n.value && /* @__PURE__ */ s.jsx(
        jb,
        {
          name: n.name,
          value: n.value,
          variables: n.variables,
          hasMissing: n.hasMissingVariables
        }
      ),
      n.error && /* @__PURE__ */ s.jsx(vo, { message: n.error })
    ] }, o)) })
  ] }) });
}
const Sb = y.div`
  > div {
    background-color: var(${f.background});
  }
`, Cb = y.div`
  padding: 8px;
  display: flex;
  flex-flow column;
  gap: 8px;
`;
function _b(t) {
  return Object.entries(t).map(([e, n]) => {
    var r, i;
    const o = (i = (r = n == null ? void 0 : n.variables) == null ? void 0 : r.missing) == null ? void 0 : i.length;
    return {
      name: e,
      value: n.result,
      error: n.error,
      execution: n.execution,
      status: Tb(n),
      hasMissingVariables: o !== void 0 && o > 0,
      variables: n.variables
    };
  });
}
function Tb(t) {
  var n;
  return t.error !== void 0 ? "failure" : ((n = t.execution) == null ? void 0 : n.some((o) => o.status === "pending")) ? "pending" : t.result !== void 0 ? "success" : "failure";
}
function Eb({
  status: t,
  hasMissingVariables: e
}) {
  return t === "failure" || e ? /* @__PURE__ */ s.jsx(Br, { style: { fill: `var(${f.errorForeground})` } }) : t === "pending" ? /* @__PURE__ */ s.jsx($b, {}) : /* @__PURE__ */ s.jsx(td, {});
}
const Ob = Rc`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, $b = y(Gc)`
  animation: ${Ob} 2s infinite linear;
  transition: width 0.2s linear;
`;
function Db({
  response: t,
  requestRef: e,
  statusCode: n
}) {
  return /* @__PURE__ */ s.jsx(zb, { children: Rb(t) ? /* @__PURE__ */ s.jsx(Ib, { body: t.body, requestRef: e, statusCode: n }) : /* @__PURE__ */ s.jsx(Nb, { children: t == null ? void 0 : t.body }) });
}
function Ib({
  body: t,
  requestRef: e,
  statusCode: n
}) {
  const o = oe();
  try {
    return /* @__PURE__ */ s.jsx(
      gp,
      {
        value: JSON.parse(t),
        menuHandlers: {
          onCopy: (r) => {
            navigator.clipboard.writeText(r);
          },
          onCreateVariable: (r, i) => {
            e !== void 0 && n !== void 0 && o(
              cs({
                name: r,
                location: "response",
                jsonPointer: i,
                ref: e,
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
const zb = y.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  padding: 8px;
  max-height: 400px;
  overflow-y: auto;
`, Nb = y.div``;
function Rb(t) {
  for (const [e, n] of t.headers)
    if (e.toLowerCase() === "content-type" && n.includes("json"))
      return !0;
  return !1;
}
function Pb({ headers: t }) {
  return /* @__PURE__ */ s.jsxs(Ab, { children: [
    /* @__PURE__ */ s.jsxs(Mb, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Value" })
    ] }),
    t.map(([e, n], o) => /* @__PURE__ */ s.jsxs(Fb, { children: [
      /* @__PURE__ */ s.jsx("div", { children: e }),
      /* @__PURE__ */ s.jsx("div", { children: n })
    ] }, o))
  ] });
}
const Ab = y.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 2fr 5fr;
`, Mb = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Fb = y.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function Lb({ assignment: t }) {
  return /* @__PURE__ */ s.jsxs(Vb, { children: [
    /* @__PURE__ */ s.jsxs(Wb, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Value" }),
      /* @__PURE__ */ s.jsx("div", {})
    ] }),
    /* @__PURE__ */ s.jsx(Gb, { children: t.flatMap((e, n) => qb(e.id, e.assignments, n)) })
  ] });
}
function qb(t, e, n) {
  return e.map((o, r) => /* @__PURE__ */ s.jsx(Hn.Fragment, { children: o.error !== void 0 ? Hb(t, o) : Bb(t, o) }, `${n}-${r}`));
}
function Bb(t, e) {
  return /* @__PURE__ */ s.jsxs(Hn.Fragment, { children: [
    /* @__PURE__ */ s.jsx("div", { children: e.name }),
    /* @__PURE__ */ s.jsx("div", { children: `${e.value}` }),
    /* @__PURE__ */ s.jsx("div", {})
  ] });
}
function Hb(t, e) {
  return /* @__PURE__ */ s.jsxs(Hn.Fragment, { children: [
    /* @__PURE__ */ s.jsx("div", { children: e.name }),
    /* @__PURE__ */ s.jsx("div", { children: Ub(e.assignment, e.error) }),
    /* @__PURE__ */ s.jsx(Kb, { children: /* @__PURE__ */ s.jsx(nt, {}) })
  ] });
}
function Ub(t, e) {
  return t.in == "body" ? `${t.path.type === "jsonPath" ? "JsonPath" : "JsonPointer"} "${t.path.value}" is ${e} in the ${t.from} ${t.in}` : `Name "${t.name}" is ${e} in the ${t.from} ${t.in}`;
}
const Vb = y.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 10em 1fr 2em;
  row-gap: 4px;
`, Wb = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Gb = y.div`
  display: contents;
  > div {
    padding-left: 8px;
    padding-right: 8px;
    line-break: anywhere;
  }
`, Kb = y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  & > svg {
    fill: var(${f.errorForeground});
    padding-right: 4px;
  }
`;
function Jb({
  response: t,
  variables: e,
  requestRef: n
}) {
  const o = Xb(e);
  return /* @__PURE__ */ s.jsx(Yb, { children: /* @__PURE__ */ s.jsxs(ln, { children: [
    /* @__PURE__ */ s.jsxs(Gn, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ s.jsx(
        Zc,
        {
          style: {
            width: 14,
            minWidth: 14,
            height: 14,
            minHeight: 14,
            fill: `var(${f.foreground})`,
            transform: "rotate(180deg)"
          }
        }
      ),
      /* @__PURE__ */ s.jsxs(yr, { children: [
        `${t == null ? void 0 : t.statusCode} ${t == null ? void 0 : t.statusMessage}`,
        o && /* @__PURE__ */ s.jsx(
          nt,
          {
            style: { fill: `var(${f.errorForeground})` }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(
      ft,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ s.jsx(
              Db,
              {
                response: t,
                requestRef: n,
                statusCode: t.statusCode
              }
            )
          },
          {
            id: "headers",
            title: "Headers",
            content: /* @__PURE__ */ s.jsx(Pb, { headers: t == null ? void 0 : t.headers })
          },
          {
            id: "variables-assigned",
            title: "Variables",
            content: /* @__PURE__ */ s.jsx(Lb, { assignment: e || [] }),
            counter: au(e),
            counterKind: o ? "error" : "normal",
            disabled: e === void 0 || au(e) === 0
          }
        ]
      }
    )
  ] }) });
}
const Yb = y.div`
  > div {
    background-color: var(${f.background});
  }
`;
function au(t) {
  return t !== void 0 ? t.map((e) => e.assignments.length).reduce((e, n) => e = e + n, 0) : 0;
}
function Xb(t) {
  return !!(t != null && t.map((e) => e.assignments.some((n) => n.error !== void 0)).some((e) => e));
}
function Qb({ operation: t }) {
  var e;
  return /* @__PURE__ */ s.jsxs(Zb, { children: [
    t.ref && /* @__PURE__ */ s.jsx(
      oj,
      {
        icon: ex(t.status),
        title: `${t.ref.type}/${t.ref.id}`
      }
    ),
    Object.keys(t.auth).length > 0 && /* @__PURE__ */ s.jsx(wb, { results: t.auth }),
    t.httpRequestPrepareError !== void 0 && /* @__PURE__ */ s.jsx(vo, { message: "Failed to prepare HTTP request for sending", children: t.httpRequestPrepareError }),
    t.httpRequest !== void 0 && /* @__PURE__ */ s.jsx(
      gb,
      {
        operationId: t.operationId,
        request: t.httpRequest,
        statusCode: (e = t == null ? void 0 : t.httpResponse) == null ? void 0 : e.statusCode,
        requestRef: t.ref
      }
    ),
    t.httpError !== void 0 && /* @__PURE__ */ s.jsxs(vo, { message: "HTTP Error", children: [
      t.httpError.code,
      " ",
      t.httpError.message
    ] }),
    t.httpResponse !== void 0 && t.httpResponse !== null && /* @__PURE__ */ s.jsx(
      Jb,
      {
        response: t.httpResponse,
        variables: t.variablesAssigned,
        requestRef: t.ref
      }
    ),
    t.responseProcessingError !== void 0 && /* @__PURE__ */ s.jsx(vo, { message: t.responseProcessingError })
  ] });
}
const Zb = y.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
function ex(t) {
  return t === "success" ? /* @__PURE__ */ s.jsx(Wg, {}) : t === "failure" ? /* @__PURE__ */ s.jsx(bg, { style: { fill: `var(${f.errorForeground})` } }) : /* @__PURE__ */ s.jsx(nx, {});
}
const tx = Rc`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, nx = y(Gc)`
  animation: ${tx} 2s infinite linear;
  transition: width 0.2s linear;
`;
function yp({
  playbook: t,
  collapsible: e
}) {
  const [n, o] = b.useState(!1);
  b.useEffect(() => {
    o(
      t.status === "failure" || t.status === "pending" || t.name === "Scenario" || t.name === "Request"
    );
  }, [t.status]);
  const r = t.results.map((i, a) => /* @__PURE__ */ s.jsx(Qb, { operation: i }, a));
  return e ? /* @__PURE__ */ s.jsx(
    Se,
    {
      isOpen: n,
      setOpen: o,
      title: /* @__PURE__ */ s.jsx(ox, { children: t.name || "" }),
      children: /* @__PURE__ */ s.jsx(su, { children: r })
    }
  ) : /* @__PURE__ */ s.jsx(su, { children: r });
}
const su = y.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`, ox = y.div`
  opacity: 0.8;
`;
function Nn({
  result: t,
  collapsible: e
}) {
  return /* @__PURE__ */ s.jsx(rx, { children: t.map((n, o) => /* @__PURE__ */ s.jsx(yp, { playbook: n, collapsible: e }, o)) });
}
const rx = y.div``;
function kp(t) {
  const e = pe.simpleClone(t), n = Object.keys(t.methods).map((o) => ({ key: o, value: t.methods[o] }));
  return {
    ...e,
    ttl: lu(e.ttl),
    tti: lu(e.tti),
    methods: n
  };
}
function jp(t) {
  const e = {};
  for (const { key: n, value: o } of t.methods)
    e[n] = o;
  return {
    ...t,
    ttl: uu(t.ttl),
    tti: uu(t.tti),
    methods: e
  };
}
function lu(t) {
  return t === void 0 ? "" : t;
}
function uu(t) {
  return t === "" ? void 0 : t;
}
function ix(t) {
  return t ? t.label : "";
}
function xr({
  name: t,
  options: e,
  placeholder: n,
  label: o,
  description: r
}) {
  const { field: i } = Q({
    name: t,
    rules: { required: !0 }
  }), a = sx(e, i.value), l = (u) => {
    i.onChange(u == null ? void 0 : u.value);
  };
  return /* @__PURE__ */ s.jsx(
    ax,
    {
      options: e,
      placeholder: n,
      label: o,
      selected: a == null ? void 0 : a.value,
      onSelectedItemChange: l,
      description: r
    }
  );
}
function ax({
  options: t,
  placeholder: e,
  label: n,
  selected: o,
  onSelectedItemChange: r,
  description: i
}) {
  var p;
  const a = (p = t.filter((h) => h.value === o)) == null ? void 0 : p[0], { isOpen: l, getToggleButtonProps: u, getMenuProps: c, getItemProps: d } = Hr({
    items: t,
    itemToString: ix,
    selectedItem: a || null,
    onSelectedItemChange: ({ selectedItem: h }) => {
      r(h);
    }
  });
  return /* @__PURE__ */ s.jsxs(lx, { children: [
    /* @__PURE__ */ s.jsxs(ux, { children: [
      /* @__PURE__ */ s.jsxs(cx, { children: [
        /* @__PURE__ */ s.jsx("div", { children: n !== void 0 && /* @__PURE__ */ s.jsx("span", { children: n }) }),
        i && /* @__PURE__ */ s.jsx(Vn, { children: i })
      ] }),
      /* @__PURE__ */ s.jsxs(dx, { ...u(), children: [
        /* @__PURE__ */ s.jsx("span", { children: a ? a.label : e ?? "" }),
        /* @__PURE__ */ s.jsx(Fo, {})
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(px, { ...c(), isOpen: l, children: l && t.map((h, m) => /* @__PURE__ */ s.jsx("li", { ...d({ item: h, index: m }), children: /* @__PURE__ */ s.jsx("span", { children: h.label }) }, `${h.value}${m}`)) })
  ] });
}
function sx(t, e) {
  var n;
  return (n = t.filter((o) => o.value === e)) == null ? void 0 : n[0];
}
const lx = y.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, ux = y.div`
  height: 40px;
  background-color: var(${f.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${f.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${f.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${f.inputPlaceholderForeground});
  }
`, cx = y.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${f.inputPlaceholderForeground});
`, dx = y.div`
  display: flex;
  color: var(${f.foreground});
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
    fill: var(${f.foreground});
  }
`, px = y.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
  ${({ isOpen: t }) => t && `
    border: 1px solid var(${f.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${f.listHoverBackground});
  }
`, mx = [
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
  "microseconds",
  "nanoseconds"
], vn = (t, e) => `((?<${t}>\\d*[\\.]?\\d+)${e})?`, hx = new RegExp(
  [
    "^",
    "(?<signed>[-+])?",
    vn("hours", "h"),
    vn("minutes", "m"),
    vn("seconds", "s"),
    vn("milliseconds", "ms"),
    vn("microseconds", "us|µs|μs"),
    vn("nanoseconds", "ns"),
    "$"
  ].join("")
), fx = {
  hours: function(t) {
    return t === void 0 ? void 0 : t * 36e5;
  },
  minutes: function(t) {
    return t === void 0 ? void 0 : t * 6e4;
  },
  seconds: function(t) {
    return t === void 0 ? void 0 : t * 1e3;
  },
  milliseconds: function(t) {
    return t === void 0 ? void 0 : t;
  },
  microseconds: function(t) {
    return t === void 0 ? void 0 : 0;
  },
  nanoseconds: function(t) {
    return t === void 0 ? void 0 : 0;
  }
};
function da(t) {
  const e = hx.exec(t);
  if (!e || !e.groups)
    return;
  let n;
  for (const o of mx)
    if (e.groups[o]) {
      const r = fx[o](gx(e.groups[o]));
      n === void 0 ? n = r === void 0 ? void 0 : r : n = r === void 0 ? n : n + r;
    }
  return n;
}
function gx(t) {
  if (t !== void 0)
    return parseFloat(t);
}
function vx({
  credential: t,
  saveCredential: e
}) {
  const n = Wn({
    type: K(),
    in: K(),
    name: K(),
    ttl: Ml([
      Fl(""),
      K().refine((o) => da(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    tti: Ml([
      Fl(""),
      K().refine((o) => da(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    default: K(),
    methods: xg()
  });
  return /* @__PURE__ */ s.jsx(
    ot,
    {
      data: t,
      saveData: e,
      wrapFormData: kp,
      unwrapFormData: jp,
      schema: n,
      children: /* @__PURE__ */ s.jsx(yx, {})
    }
  );
}
function yx() {
  const { getValues: t } = un(), e = t("methods") || [], n = t("type");
  return /* @__PURE__ */ s.jsxs(kx, { children: [
    /* @__PURE__ */ s.jsx(le, { label: "Type", name: "type", disabled: !0 }),
    n !== "basic" && n !== "bearer" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(le, { label: "Location", name: "in", disabled: !0 }),
      /* @__PURE__ */ s.jsx(le, { label: "Name", name: "name", disabled: !0 })
    ] }),
    /* @__PURE__ */ s.jsx(
      le,
      {
        label: "TTL",
        name: "ttl"
      }
    ),
    /* @__PURE__ */ s.jsx(
      le,
      {
        label: "TTI",
        name: "tti"
      }
    ),
    /* @__PURE__ */ s.jsx(
      xr,
      {
        label: "Default credential name",
        name: "default",
        options: e.map((o) => ({ label: o.key, value: o.key }))
      }
    )
  ] });
}
const kx = y.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function Ft({
  children: t,
  icon: e
}) {
  return /* @__PURE__ */ s.jsxs(cg, { children: [
    /* @__PURE__ */ s.jsx(dg, { asChild: !0, className: "menu", children: /* @__PURE__ */ s.jsx(jx, { children: e === "sliders" ? /* @__PURE__ */ s.jsx(Zg, {}) : /* @__PURE__ */ s.jsx(Kg, {}) }) }),
    /* @__PURE__ */ s.jsx(pg, { children: /* @__PURE__ */ s.jsx(bx, { side: "bottom", align: "end", children: t }) })
  ] });
}
function cu() {
  return /* @__PURE__ */ s.jsx(Sx, { children: /* @__PURE__ */ s.jsx(Pg, {}) });
}
const jx = y.span`
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
    fill: var(${f.foreground});
  }
`, bx = y(rg)`
  margin: 4px;
  background-color: var(${f.dropdownBackground});
  border: 1px solid var(${f.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${f.computedTwo});
`, dn = y(ig)`
  margin: 2px;
  color: var(${f.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${f.listActiveSelectionBackground});
    color: var(${f.listActiveSelectionForeground});
  }
  > svg {
    fill: var(${f.foreground});
  }
`, du = y(ag)`
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
    background-color: var(${f.listActiveSelectionBackground});
    color: var(${f.listActiveSelectionForeground});
  }
`, xx = y(sg)`
  height: 1px;
  background-color: var(${f.border});
  margin: 5px;
`, wx = y(lg)`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
`, Sx = y(ug)`
  position: absolute;
  left: 15px;
  width: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > svg {
    fill: var(${f.foreground});
  }
`;
function bp({ name: t }) {
  const { field: e } = Q({
    name: t
  });
  return /* @__PURE__ */ s.jsx(Bg, { value: e.value, onChange: (n) => e.onChange(n) });
}
function Yn({
  options: t,
  placeholder: e,
  selected: n,
  onSelectedItemChange: o,
  bottomMenu: r
}) {
  var h;
  const i = (h = t.filter((m) => m.value === n)) == null ? void 0 : h[0];
  function a(m) {
    return m ? m.label : "";
  }
  function l(m) {
    return (m == null ? void 0 : m.disabled) === !0;
  }
  const { isOpen: u, getToggleButtonProps: c, getMenuProps: d, getItemProps: p } = Hr({
    items: t,
    isItemDisabled: l,
    itemToString: a,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: m }) => {
      o(m);
    }
  });
  return /* @__PURE__ */ s.jsxs(Cx, { onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ s.jsx(_x, { children: /* @__PURE__ */ s.jsxs(Tx, { ...c(), children: [
      i === void 0 && e !== void 0 && /* @__PURE__ */ s.jsx(Ex, { children: e }),
      i !== void 0 && /* @__PURE__ */ s.jsx(Ox, { children: i.label }),
      /* @__PURE__ */ s.jsx(Fo, {})
    ] }) }),
    /* @__PURE__ */ s.jsxs($x, { ...d(), isOpen: u, children: [
      u && t.map((m, v) => /* @__PURE__ */ s.jsx("li", { ...p({ item: m, index: v }), children: /* @__PURE__ */ s.jsx("span", { children: m.label }) }, `${m.value}${v}`)),
      u && r
    ] })
  ] });
}
const Cx = y.div`
  position: relative;
`, _x = y.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${f.focusBorder});
  }
  border: 1px solid transparent;
`, Tx = y.div`
  display: flex;
  color: var(${f.foreground});
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
    fill: var(${f.foreground});
  }
`, Ex = y.span`
  color: var(${f.inputPlaceholderForeground});
`, Ox = y.span``, $x = y.ul`
  max-height: 250px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
  ${({ isOpen: t }) => t && `
    border: 1px solid var(${f.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }

  & > li:hover {
    background-color: var(${f.listHoverBackground});
  }

  & > li[aria-disabled="true"] {
    color: var(${f.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`;
function pr({
  name: t,
  options: e,
  label: n,
  description: o,
  placeholder: r
}) {
  const { field: i } = Q({
    name: t
  });
  return /* @__PURE__ */ s.jsxs(Dx, { children: [
    /* @__PURE__ */ s.jsx("div", { className: "label", children: n }),
    /* @__PURE__ */ s.jsx(
      Yn,
      {
        placeholder: r,
        options: e,
        selected: i.value,
        onSelectedItemChange: (a) => {
          a && i.onChange(a.value);
        }
      }
    )
  ] });
}
const Dx = y.div`
  background-color: var(${f.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${f.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${f.focusBorder});
  }
  > div.label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${f.inputPlaceholderForeground});
  }
`;
function Ix({
  add: t,
  responseCodes: e,
  existingCodes: n
}) {
  const o = { code: "200" }, r = (i) => {
    t({
      key: i.code,
      value: {
        expectations: {
          httpStatus: Px(i.code)
        },
        variableAssignments: []
      }
    });
  };
  return /* @__PURE__ */ s.jsx(
    Wo,
    {
      title: "Add response processing",
      defaultValues: o,
      onSubmit: r,
      noOverflow: !0,
      trigger: /* @__PURE__ */ s.jsx(Mx, { children: /* @__PURE__ */ s.jsx(Uo, {}) }),
      children: /* @__PURE__ */ s.jsx(zx, { responseCodes: e, existingCodes: n })
    }
  );
}
function zx({
  responseCodes: t,
  existingCodes: e
}) {
  return /* @__PURE__ */ s.jsx(Ax, { children: /* @__PURE__ */ s.jsx(
    pr,
    {
      label: "HTTP response code",
      placeholder: "",
      name: "code",
      options: Nx(t, e)
    }
  ) });
}
function Nx(t, e) {
  return t.filter((n) => !e.includes(n)).map((n) => ({ label: Rx(n), value: n }));
}
function Rx(t) {
  return t in pu ? pu[t] : t;
}
function Px(t) {
  return /^\d+$/.test(t) ? parseInt(t, 10) : t;
}
const pu = {
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
}, Ax = y.div`
  > div > div {
    padding: 4px;
  }
`, Mx = y.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${f.linkForeground});
    &:hover {
      fill: var(${f.linkActiveForeground});
    }
  }
`;
function Fx(t) {
  return t ? t.label : "";
}
function Qt({
  name: t,
  options: e,
  placeholder: n
}) {
  const { field: o } = Q({
    name: t,
    rules: { required: !0 }
  }), r = qx(e, o.value), i = (a) => {
    o.onChange(a == null ? void 0 : a.value);
  };
  return /* @__PURE__ */ s.jsx(
    Lx,
    {
      options: e,
      placeholder: n,
      selected: r == null ? void 0 : r.value,
      onSelectedItemChange: i
    }
  );
}
function Lx({
  options: t,
  placeholder: e,
  label: n,
  selected: o,
  onSelectedItemChange: r
}) {
  var d;
  const i = (d = t.filter((p) => p.value === o)) == null ? void 0 : d[0], { isOpen: a, getToggleButtonProps: l, getMenuProps: u, getItemProps: c } = Hr({
    items: t,
    itemToString: Fx,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      r(p);
    }
  });
  return /* @__PURE__ */ s.jsxs(Bx, { children: [
    /* @__PURE__ */ s.jsx(Hx, { children: /* @__PURE__ */ s.jsxs(Ux, { ...l(), children: [
      /* @__PURE__ */ s.jsx("span", { children: i ? i.label : e ?? "" }),
      /* @__PURE__ */ s.jsx(Fo, {})
    ] }) }),
    /* @__PURE__ */ s.jsx(Vx, { ...u(), isOpen: a, children: a && t.map((p, h) => /* @__PURE__ */ s.jsx("li", { ...c({ item: p, index: h }), children: /* @__PURE__ */ s.jsx("span", { children: p.label }) }, `${p.value}${h}`)) })
  ] });
}
function qx(t, e) {
  var n;
  return (n = t.filter((o) => o.value === e)) == null ? void 0 : n[0];
}
const Bx = y.div`
  position: relative;
`, Hx = y.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${f.focusBorder});
  }
  border: 1px solid transparent;
`, Ux = y.div`
  display: flex;
  color: var(${f.foreground});
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
    fill: var(${f.foreground});
  }
`, Vx = y.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
  ${({ isOpen: t }) => t && `
    border: 1px solid var(${f.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${f.listHoverBackground});
  }
`;
function Zt({
  label: t,
  name: e,
  disabled: n,
  password: o,
  style: r
}) {
  const {
    field: i,
    fieldState: { error: a, invalid: l }
  } = Q({
    name: e
  });
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Wx, { style: r, children: /* @__PURE__ */ s.jsx(
      "input",
      {
        ...i,
        disabled: n,
        type: o ? "password" : "text",
        style: { width: "100%" }
      }
    ) }),
    a && /* @__PURE__ */ s.jsx(Gx, { children: a == null ? void 0 : a.message })
  ] });
}
const Wx = y.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${f.foreground});
    &::placeholder {
      color: var(${f.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, Gx = y.div`
  color: var(${f.errorForeground});
`;
function Kx({
  name: t,
  index: e
}) {
  const { fields: n, append: o, remove: r } = cn({
    name: `responses.${e}.value.variableAssignments`
  });
  return /* @__PURE__ */ s.jsx(Jx, { children: /* @__PURE__ */ s.jsxs(Yx, { children: [
    /* @__PURE__ */ s.jsxs(Qx, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ s.jsx("div", { children: "From" }),
      /* @__PURE__ */ s.jsx("div", { children: "Location" }),
      /* @__PURE__ */ s.jsx("div", { children: "Type" }),
      /* @__PURE__ */ s.jsx("div", { children: "Name or Path" }),
      /* @__PURE__ */ s.jsx("div", {})
    ] }),
    /* @__PURE__ */ s.jsxs(Xx, { children: [
      n.map((i, a) => /* @__PURE__ */ s.jsx(
        Zx,
        {
          name: `responses.${e}.value.variableAssignments.${a}`,
          remove: () => {
            r(a);
          }
        },
        i.id
      )),
      /* @__PURE__ */ s.jsx(i0, { append: o })
    ] })
  ] }) });
}
const Jx = y.div`
  margin: 8px 4px;
`, Yx = y.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: repeat(5, 1fr) 1em;
`, Xx = y.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${f.border});
  }
`, Qx = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function Zx({ name: t, remove: e }) {
  const { getValues: n } = un(), o = n(`${t}.value.in`), r = n(`${t}.value.from`);
  return /* @__PURE__ */ s.jsxs(t0, { children: [
    /* @__PURE__ */ s.jsx(Zt, { name: `${t}.key`, label: "name" }),
    o === "body" && /* @__PURE__ */ s.jsx(n0, { name: t }, `${t}-value`),
    o !== "body" && r === "request" && /* @__PURE__ */ s.jsx(o0, { name: t }, `${t}-value`),
    o !== "body" && r === "response" && /* @__PURE__ */ s.jsx(r0, { name: t }, `${t}-value`),
    /* @__PURE__ */ s.jsx(
      e0,
      {
        onClick: (i) => {
          i.preventDefault(), i.stopPropagation(), e();
        },
        children: /* @__PURE__ */ s.jsx(Ue, {})
      }
    )
  ] });
}
const e0 = y.button`
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
    fill: var(${f.foreground});
  }
`, t0 = y.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`;
function n0({ name: t }) {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      Qt,
      {
        name: `${t}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(Qt, { name: `${t}.value.in`, options: [{ value: "body", label: "body" }] }),
    /* @__PURE__ */ s.jsx(
      Qt,
      {
        name: `${t}.value.path.type`,
        options: [
          { value: "jsonPointer", label: "jsonPointer" },
          { value: "jsonPath", label: "jsonPath" }
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(Zt, { name: `${t}.value.path.value`, label: "path" })
  ] });
}
function o0({ name: t }) {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      Qt,
      {
        name: `${t}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      Qt,
      {
        name: `${t}.value.in`,
        options: [
          { value: "query", label: "query" },
          { value: "header", label: "header" },
          { value: "cookie", label: "cookie" },
          { value: "path", label: "path" }
        ]
      }
    ),
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx(Zt, { name: `${t}.value.name`, label: "name" })
  ] });
}
function r0({ name: t }) {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      Qt,
      {
        name: `${t}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      Qt,
      {
        name: `${t}.value.in`,
        options: [
          { value: "header", label: "header" },
          { value: "cookie", label: "cookie" }
        ]
      }
    ),
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx(Zt, { name: `${t}.value.name`, label: "name" })
  ] });
}
function i0({ append: t }) {
  return /* @__PURE__ */ s.jsx("div", { style: { gridColumn: "span 2" }, children: /* @__PURE__ */ s.jsx("div", { style: { padding: "4px 8px" }, children: /* @__PURE__ */ s.jsx(
    Yn,
    {
      placeholder: "Add new variable",
      options: [
        { value: "body", label: "Extract value from body" },
        { value: "params", label: "Extract value from query, header, cookie or path" }
      ],
      onSelectedItemChange: (e) => {
        (e == null ? void 0 : e.value) === "body" ? t(
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
        ) : (e == null ? void 0 : e.value) === "params" && t(
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
function ti({
  responseCodes: t,
  editable: e
}) {
  var c;
  const { fields: n, prepend: o, remove: r } = cn({
    name: "responses"
  }), [i, a] = b.useState((c = n == null ? void 0 : n[0]) == null ? void 0 : c.id);
  b.useEffect(() => {
    var d;
    a((d = n == null ? void 0 : n[0]) == null ? void 0 : d.id);
  }, [n]);
  const l = n.map((d) => d.key), u = n.map((d, p) => ({
    id: d.id,
    title: d.key,
    menu: e ? /* @__PURE__ */ s.jsx(Ft, { children: /* @__PURE__ */ s.jsxs(dn, { onClick: (h) => h.stopPropagation(), onSelect: () => r(p), children: [
      /* @__PURE__ */ s.jsx(Ue, {}),
      "Delete"
    ] }) }) : void 0,
    content: /* @__PURE__ */ s.jsx(Kx, { name: d.key, index: p })
  }));
  return /* @__PURE__ */ s.jsx(a0, { children: /* @__PURE__ */ s.jsx(
    ft,
    {
      round: !0,
      activeTab: i,
      setActiveTab: a,
      tabs: u,
      menu: e ? /* @__PURE__ */ s.jsx(
        Ix,
        {
          add: o,
          responseCodes: t,
          existingCodes: l
        }
      ) : void 0
    }
  ) });
}
const a0 = y.div`
  margin-top: 4px;
`;
function s0({ append: t }) {
  return /* @__PURE__ */ s.jsxs(l0, { children: [
    /* @__PURE__ */ s.jsx(
      u0,
      {
        placeholder: "Add new entry",
        value: "",
        onChange: (e) => {
          t({ key: e.target.value, value: "", type: "string" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ s.jsx(c0, {})
  ] });
}
const l0 = y.div`
  display: contents;
`, u0 = y.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${f.border});
  color: var(${f.foreground});
  margin-right: 10px;
  padding: 4px 8px;
  &::placeholder {
    color: var(${f.inputPlaceholderForeground});
  }
`, c0 = y.div`
  grid-column: span 3;
`;
var xp = {}, ni = {}, wp = b;
function d0(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++) e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let Sp = wp.createContext(null);
ni.LexicalComposerContext = Sp;
ni.createLexicalComposerContext = function(t, e) {
  let n = null;
  return t != null && (n = t[1]), { getTheme: function() {
    return e ?? (n != null ? n.getTheme() : null);
  } };
};
ni.useLexicalComposerContext = function() {
  let t = wp.useContext(Sp);
  return t == null && d0(8), t;
};
const p0 = ni;
var Ne = p0, x = {};
let oi = {}, Cp = {}, Tn = {}, yo = {}, pa = {}, En = {}, _s = {}, ma = {}, Eo = {}, Oo = {}, St = {}, Ts = {}, Es = {}, _p = {}, Tp = {}, Ep = {}, Op = {}, $p = {}, Dp = {}, Ip = {}, wr = {}, zp = {}, Np = {}, Rp = {}, Pp = {}, Ap = {}, Mp = {}, Fp = {}, Lp = {}, qp = {}, Os = {}, $s = {}, ha = {}, Bp = {}, Hp = {}, Up = {};
function E(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++) e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m0 = rt && "documentMode" in document ? document.documentMode : null, fe = rt && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Ot = rt && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Sr = rt && "InputEvent" in window && !m0 ? "getTargetRanges" in new window.InputEvent("input") : !1, Ds = rt && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), ri = rt && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, h0 = rt && /Android/.test(navigator.userAgent), f0 = rt && /^(?=.*Chrome).*/i.test(navigator.userAgent), Is = rt && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !f0, ii = Ds || ri || Is ? " " : "​", g0 = Ot ? " " : ii, v0 = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/, y0 = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, Tt = { bold: 1, code: 16, highlight: 128, italic: 2, strikethrough: 4, subscript: 32, superscript: 64, underline: 8 }, k0 = { directionless: 1, unmergeable: 2 }, mu = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, j0 = { 2: "center", 6: "end", 4: "justify", 1: "left", 3: "right", 5: "start" }, b0 = { normal: 0, segmented: 2, token: 1 }, x0 = { 0: "normal", 2: "segmented", 1: "token" }, fa = !1, zs = 0;
function w0(t) {
  zs = t.timeStamp;
}
function Li(t, e, n) {
  return e.__lexicalLineBreak === t || t[`__lexicalKey_${n._key}`] !== void 0;
}
function S0(t) {
  return t.getEditorState().read(() => {
    let e = W();
    return e !== null ? e.clone() : null;
  });
}
function Vp(t, e, n) {
  fa = !0;
  let o = 100 < performance.now() - zs;
  try {
    ze(t, () => {
      let r = W() || S0(t);
      var i = /* @__PURE__ */ new Map(), a = t.getRootElement(), l = t._editorState, u = t._blockCursorElement;
      let c = !1, d = "";
      for (var p = 0; p < e.length; p++) {
        var h = e[p], m = h.type, v = h.target, g = Ko(v, l);
        if (!(g === null && v !== a || Z(g))) {
          if (m === "characterData") {
            if (h = o && D(g)) e: {
              h = r, m = v;
              var k = g;
              if (M(h)) {
                var j = h.anchor.getNode();
                if (j.is(k) && h.format !== j.getFormat()) {
                  h = !1;
                  break e;
                }
              }
              h = m.nodeType === 3 && k.isAttached();
            }
            h && (k = it(t._window), m = h = null, k !== null && k.anchorNode === v && (h = k.anchorOffset, m = k.focusOffset), v = v.nodeValue, v !== null && Ms(g, v, h, m, !1));
          } else if (m === "childList") {
            for (c = !0, m = h.addedNodes, k = 0; k < m.length; k++) {
              j = m[k];
              var S = Xp(j), w = j.parentNode;
              w == null || j === u || S !== null || j.nodeName === "BR" && Li(j, w, t) || (Ot && (S = j.innerText || j.nodeValue) && (d += S), w.removeChild(j));
            }
            if (h = h.removedNodes, m = h.length, 0 < m) {
              for (k = 0, j = 0; j < m; j++) w = h[j], (w.nodeName === "BR" && Li(w, v, t) || u === w) && (v.appendChild(w), k++);
              m !== k && (v === a && (g = l._nodeMap.get("root")), i.set(v, g));
            }
          }
        }
      }
      if (0 < i.size) for (let [
        $,
        B
      ] of i) if (C(B)) for (i = B.getChildrenKeys(), a = $.firstChild, l = 0; l < i.length; l++) u = t.getElementByKey(i[l]), u !== null && (a == null ? ($.appendChild(u), a = u) : a !== u && $.replaceChild(u, a), a = a.nextSibling);
      else D(B) && B.markDirty();
      if (i = n.takeRecords(), 0 < i.length) {
        for (a = 0; a < i.length; a++) for (u = i[a], l = u.addedNodes, u = u.target, p = 0; p < l.length; p++) g = l[p], v = g.parentNode, v == null || g.nodeName !== "BR" || Li(g, u, t) || v.removeChild(g);
        n.takeRecords();
      }
      r !== null && (c && (r.dirty = !0, et(r)), Ot && tm(t) && r.insertRawText(d));
    });
  } finally {
    fa = !1;
  }
}
function Wp(t) {
  let e = t._observer;
  if (e !== null) {
    let n = e.takeRecords();
    Vp(t, n, e);
  }
}
function Gp(t) {
  zs === 0 && si(t).addEventListener("textInput", w0, !0), t._observer = new MutationObserver((e, n) => {
    Vp(t, e, n);
  });
}
function hu(t, e) {
  let n = t.__mode, o = t.__format;
  t = t.__style;
  let r = e.__mode, i = e.__format;
  return e = e.__style, (n === null || n === r) && (o === null || o === i) && (t === null || t === e);
}
function fu(t, e) {
  let n = t.mergeWithSibling(e), o = J()._normalizedNodes;
  return o.add(t.__key), o.add(e.__key), n;
}
function Kp(t) {
  if (t.__text === "" && t.isSimpleText() && !t.isUnmergeable()) t.remove();
  else {
    for (var e; (e = t.getPreviousSibling()) !== null && D(e) && e.isSimpleText() && !e.isUnmergeable(); ) if (e.__text === "") e.remove();
    else {
      hu(e, t) && (t = fu(e, t));
      break;
    }
    for (var n; (n = t.getNextSibling()) !== null && D(n) && n.isSimpleText() && !n.isUnmergeable(); ) if (n.__text === "") n.remove();
    else {
      hu(t, n) && fu(t, n);
      break;
    }
  }
}
function Jp(t) {
  return gu(t.anchor), gu(t.focus), t;
}
function gu(t) {
  for (; t.type === "element"; ) {
    var e = t.getNode(), n = t.offset;
    if (n === e.getChildrenSize() ? (e = e.getChildAtIndex(n - 1), n = !0) : (e = e.getChildAtIndex(n), n = !1), D(e)) {
      t.set(e.__key, n ? e.getTextContentSize() : 0, "text");
      break;
    } else if (!C(e)) break;
    t.set(e.__key, n ? e.getChildrenSize() : 0, "element");
  }
}
let C0 = 1, _0 = typeof queueMicrotask == "function" ? queueMicrotask : (t) => {
  Promise.resolve().then(t);
};
function Ns(t) {
  let e = document.activeElement;
  if (e === null) return !1;
  let n = e.nodeName;
  return Z(Ko(t)) && (n === "INPUT" || n === "TEXTAREA" || e.contentEditable === "true" && e.__lexicalEditor == null);
}
function Go(t, e, n) {
  let o = t.getRootElement();
  try {
    return o !== null && o.contains(e) && o.contains(n) && e !== null && !Ns(e) && Rs(e) === t;
  } catch {
    return !1;
  }
}
function Rs(t) {
  for (; t != null; ) {
    let e = t.__lexicalEditor;
    if (e != null) return e;
    t = ai(t);
  }
  return null;
}
function ga(t) {
  return t.isToken() || t.isSegmented();
}
function Cr(t) {
  for (; t != null; ) {
    if (t.nodeType === 3) return t;
    t = t.firstChild;
  }
  return null;
}
function va(t, e, n) {
  let o = Tt[e];
  return n !== null && (t & o) === (n & o) || (t ^= o, e === "subscript" ? t &= ~Tt.superscript : e === "superscript" && (t &= ~Tt.subscript)), t;
}
function Yp(t, e) {
  if (e != null) t.__key = e;
  else {
    we(), 99 < zo && E(14), e = J();
    var n = at(), o = "" + C0++;
    n._nodeMap.set(o, t), C(t) ? e._dirtyElements.set(o, !0) : e._dirtyLeaves.add(o), e._cloneNotNeeded.add(o), e._dirtyType = 1, t.__key = o;
  }
}
function en(t) {
  var e = t.getParent();
  if (e !== null) {
    let r = t.getWritable();
    e = e.getWritable();
    var n = t.getPreviousSibling();
    if (t = t.getNextSibling(), n === null) if (t !== null) {
      var o = t.getWritable();
      e.__first = t.__key, o.__prev = null;
    } else e.__first = null;
    else {
      if (o = n.getWritable(), t !== null) {
        let i = t.getWritable();
        i.__prev = o.__key, o.__next = i.__key;
      } else o.__next = null;
      r.__prev = null;
    }
    t === null ? n !== null ? (t = n.getWritable(), e.__last = n.__key, t.__next = null) : e.__last = null : (t = t.getWritable(), n !== null ? (n = n.getWritable(), n.__next = t.__key, t.__prev = n.__key) : t.__prev = null, r.__next = null), e.__size--, r.__parent = null;
  }
}
function _r(t) {
  99 < zo && E(14);
  var e = t.getLatest(), n = e.__parent, o = at();
  let r = J(), i = o._nodeMap;
  if (o = r._dirtyElements, n !== null) e: for (; n !== null; ) {
    if (o.has(n)) break e;
    let a = i.get(n);
    if (a === void 0) break;
    o.set(n, !1), n = a.__parent;
  }
  e = e.__key, r._dirtyType = 1, C(t) ? o.set(e, !0) : r._dirtyLeaves.add(e);
}
function ae(t) {
  we();
  var e = J();
  let n = e._compositionKey;
  t !== n && (e._compositionKey = t, n !== null && (e = ge(n), e !== null && e.getWritable()), t !== null && (t = ge(t), t !== null && t.getWritable()));
}
function Ct() {
  return eo() ? null : J()._compositionKey;
}
function ge(t, e) {
  return t = (e || at())._nodeMap.get(t), t === void 0 ? null : t;
}
function Xp(t, e) {
  let n = J();
  return t = t[`__lexicalKey_${n._key}`], t !== void 0 ? ge(t, e) : null;
}
function Ko(t, e) {
  for (; t != null; ) {
    let n = Xp(t, e);
    if (n !== null) return n;
    t = ai(t);
  }
  return null;
}
function Qp(t) {
  let e = Object.assign({}, t._decorators);
  return t._pendingDecorators = e;
}
function vu(t) {
  return t.read(() => Ie().getTextContent());
}
function T0(t, e) {
  ze(t, () => {
    var n = at();
    if (!n.isEmpty()) if (e === "root") Ie().markDirty();
    else {
      n = n._nodeMap;
      for (let [, o] of n) o.markDirty();
    }
  }, t._pendingEditorState === null ? { tag: "history-merge" } : void 0);
}
function Ie() {
  return at()._nodeMap.get("root");
}
function et(t) {
  we();
  let e = at();
  t !== null && (t.dirty = !0, t.setCachedNodes(null)), e._selection = t;
}
function Sn(t) {
  var e = J(), n;
  e: {
    for (n = t; n != null; ) {
      let o = n[`__lexicalKey_${e._key}`];
      if (o !== void 0) {
        n = o;
        break e;
      }
      n = ai(n);
    }
    n = null;
  }
  return n === null ? (e = e.getRootElement(), t === e ? ge("root") : null) : ge(n);
}
function Zp(t) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
}
function Ps(t) {
  let e = [];
  for (; t !== null; ) e.push(t), t = t._parentEditor;
  return e;
}
function em() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function As(t, e, n) {
  if (e = it(e._window), e !== null) {
    var o = e.anchorNode, { anchorOffset: r, focusOffset: i } = e;
    if (o !== null && (e = o.nodeType === 3 ? o.nodeValue : null, o = Ko(o), e !== null && D(o))) {
      if (e === ii && n) {
        let a = n.length;
        e = n, i = r = a;
      }
      e !== null && Ms(o, e, r, i, t);
    }
  }
}
function Ms(t, e, n, o, r) {
  let i = t;
  if (i.isAttached() && (r || !i.isDirty())) {
    let c = i.isComposing(), d = e;
    if ((c || r) && e[e.length - 1] === ii && (d = e.slice(0, -1)), e = i.getTextContent(), r || d !== e) if (d === "") if (ae(null), Ds || ri || Is) i.remove();
    else {
      let p = J();
      setTimeout(() => {
        p.update(() => {
          i.isAttached() && i.remove();
        });
      }, 20);
    }
    else {
      r = i.getParent(), e = Zn();
      var a = i.getTextContentSize(), l = Ct(), u = i.getKey();
      i.isToken() || l !== null && u === l && !c || M(e) && (r !== null && !r.canInsertTextBefore() && e.anchor.offset === 0 || e.anchor.key === t.__key && e.anchor.offset === 0 && !i.canInsertTextBefore() && !c || e.focus.key === t.__key && e.focus.offset === a && !i.canInsertTextAfter() && !c) ? i.markDirty() : (t = W(), M(t) && n !== null && o !== null && (t.setTextNodeRange(i, n, i, o), i.isSegmented() && (n = i.getTextContent(), n = he(n), i.replace(n), i = n)), i.setTextContent(d));
    }
  }
}
function E0(t, e) {
  if (e.isSegmented()) return !0;
  if (!t.isCollapsed()) return !1;
  t = t.anchor.offset;
  let n = e.getParentOrThrow(), o = e.isToken();
  return t === 0 ? ((t = !e.canInsertTextBefore() || !n.canInsertTextBefore() || o) || (e = e.getPreviousSibling(), t = (D(e) || C(e) && e.isInline()) && !e.canInsertTextAfter()), t) : t === e.getTextContentSize() ? !e.canInsertTextAfter() || !n.canInsertTextAfter() || o : !1;
}
function ko(t, e) {
  t.__lexicalClassNameCache === void 0 && (t.__lexicalClassNameCache = {});
  let n = t.__lexicalClassNameCache, o = n[e];
  return o !== void 0 ? o : (t = t[e], typeof t == "string" ? (t = t.split(" "), n[e] = t) : t);
}
function Fs(t, e, n, o, r) {
  n.size !== 0 && (n = o.__type, o = o.__key, e = e.get(n), e === void 0 && E(33, n), n = e.klass, e = t.get(n), e === void 0 && (e = /* @__PURE__ */ new Map(), t.set(n, e)), t = e.get(o), n = t === "destroyed" && r === "created", (t === void 0 || n) && e.set(o, n ? "updated" : r));
}
function yu(t, e, n) {
  let o = t.getParent(), r = n;
  return o !== null && (e && n === 0 ? (r = t.getIndexWithinParent(), t = o) : e || n !== t.getChildrenSize() || (r = t.getIndexWithinParent() + 1, t = o)), t.getChildAtIndex(e ? r - 1 : r);
}
function ya(t, e) {
  var n = t.offset;
  return t.type === "element" ? (t = t.getNode(), yu(t, e, n)) : (t = t.getNode(), e && n === 0 || !e && n === t.getTextContentSize() ? (n = e ? t.getPreviousSibling() : t.getNextSibling(), n === null ? yu(t.getParentOrThrow(), e, t.getIndexWithinParent() + (e ? 0 : 1)) : n) : null);
}
function tm(t) {
  return t = (t = si(t).event) && t.inputType, t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function Tr(t) {
  return !De(t) && !t.isLastChild() && !t.isInline();
}
function Er(t, e) {
  return t = t._keyToDOMMap.get(e), t === void 0 && E(75, e), t;
}
function ai(t) {
  return t = t.assignedSlot || t.parentElement, t !== null && t.nodeType === 11 ? t.host : t;
}
function Or(t, e) {
  for (t = t.getParent(); t !== null; ) {
    if (t.is(e)) return !0;
    t = t.getParent();
  }
  return !1;
}
function si(t) {
  return t = t._window, t === null && E(78), t;
}
function nm(t) {
  for (t = t.getParentOrThrow(); t !== null && !$t(t); ) t = t.getParentOrThrow();
  return t;
}
function $t(t) {
  return De(t) || C(t) && t.isShadowRoot();
}
function om(t) {
  return t = t.constructor.clone(t), Yp(t, null), t;
}
function Jo(t) {
  var e = J();
  let n = t.constructor.getType();
  return e = e._nodes.get(n), e === void 0 && E(97), e = e.replace, e !== null ? (e = e(t), e instanceof t.constructor || E(98), e) : t;
}
function qi(t, e) {
  t = t.getParent(), !De(t) || C(e) || Z(e) || E(99);
}
function Bi(t) {
  return (Z(t) || C(t) && !t.canBeEmpty()) && !t.isInline();
}
function ka(t, e, n) {
  n.style.removeProperty("caret-color"), e._blockCursorElement = null, e = t.parentElement, e !== null && e.removeChild(t);
}
function it(t) {
  return rt ? (t || window).getSelection() : null;
}
function li(t) {
  return t.nodeType === 1;
}
function xn(t) {
  if (Z(t) && !t.isInline()) return !0;
  if (!C(t) || $t(t)) return !1;
  var e = t.getFirstChild();
  return e = e === null || an(e) || D(e) || e.isInline(), !t.isInline() && t.canBeEmpty() !== !1 && e;
}
function Hi(t, e) {
  for (; t !== null && t.getParent() !== null && !e(t); ) t = t.getParentOrThrow();
  return e(t) ? t : null;
}
function rm(t, e, n, o, r, i) {
  for (t = t.getFirstChild(); t !== null; ) {
    let a = t.__key;
    t.__parent === e && (C(t) && rm(t, a, n, o, r, i), n.has(a) || i.delete(a), r.push(a)), t = t.getNextSibling();
  }
}
function O0(t, e, n, o) {
  t = t._nodeMap, e = e._nodeMap;
  let r = [];
  for (let [i] of o) {
    let a = e.get(i);
    a === void 0 || a.isAttached() || (C(a) && rm(a, i, t, e, r, o), t.has(i) || o.delete(i), r.push(i));
  }
  for (let i of r) e.delete(i);
  for (let i of n) o = e.get(i), o === void 0 || o.isAttached() || (t.has(i) || n.delete(i), e.delete(i));
}
let ie = "", xe = "", pt = "", Dt, ve, $o, im = !1, Ls = !1, ui, mr = null, ja, ba, rn, It, xa, Do;
function hr(t, e) {
  let n = rn.get(t);
  if (e !== null) {
    let o = Ca(t);
    o.parentNode === e && e.removeChild(o);
  }
  It.has(t) || ve._keyToDOMMap.delete(t), C(n) && (t = $r(n, rn), wa(t, 0, t.length - 1, null)), n !== void 0 && Fs(Do, $o, ui, n, "destroyed");
}
function wa(t, e, n, o) {
  for (; e <= n; ++e) {
    let r = t[e];
    r !== void 0 && hr(r, o);
  }
}
function Wt(t, e) {
  t.setProperty("text-align", e);
}
function am(t, e) {
  var n = Dt.theme.indent;
  if (typeof n == "string") {
    let o = t.classList.contains(n);
    0 < e && !o ? t.classList.add(n) : 1 > e && o && t.classList.remove(n);
  }
  n = getComputedStyle(t).getPropertyValue("--lexical-indent-base-value") || "40px", t.style.setProperty("padding-inline-start", e === 0 ? "" : `calc(${e} * ${n})`);
}
function sm(t, e) {
  t = t.style, e === 0 ? Wt(t, "") : e === 1 ? Wt(t, "left") : e === 2 ? Wt(t, "center") : e === 3 ? Wt(t, "right") : e === 4 ? Wt(t, "justify") : e === 5 ? Wt(t, "start") : e === 6 && Wt(t, "end");
}
function fr(t, e, n) {
  let o = It.get(t);
  o === void 0 && E(60);
  let r = o.createDOM(Dt, ve);
  var i = ve._keyToDOMMap;
  if (r["__lexicalKey_" + ve._key] = t, i.set(t, r), D(o) ? r.setAttribute("data-lexical-text", "true") : Z(o) && r.setAttribute("data-lexical-decorator", "true"), C(o)) {
    if (t = o.__indent, i = o.__size, t !== 0 && am(r, t), i !== 0) {
      --i, t = $r(o, It);
      var a = xe;
      xe = "", Sa(t, o, 0, i, r, null), um(o, r), xe = a;
    }
    t = o.__format, t !== 0 && sm(r, t), o.isInline() || lm(null, o, r), Tr(o) && (ie += `

`, pt += `

`);
  } else i = o.getTextContent(), Z(o) ? (a = o.decorate(ve, Dt), a !== null && cm(t, a), r.contentEditable = "false") : D(o) && (o.isDirectionless() || (xe += i)), ie += i, pt += i;
  return e !== null && (n != null ? e.insertBefore(r, n) : (n = e.__lexicalLineBreak, n != null ? e.insertBefore(r, n) : e.appendChild(r))), Fs(Do, $o, ui, o, "created"), r;
}
function Sa(t, e, n, o, r, i) {
  let a = ie;
  for (ie = ""; n <= o; ++n) fr(t[n], r, i);
  Tr(e) && (ie += `

`), r.__lexicalTextContent = ie, ie = a + ie;
}
function ku(t, e) {
  return t = e.get(t), an(t) || Z(t) && t.isInline();
}
function lm(t, e, n) {
  t = t !== null && (t.__size === 0 || ku(t.__last, rn)), e = e.__size === 0 || ku(e.__last, It), t ? e || (e = n.__lexicalLineBreak, e != null && n.removeChild(e), n.__lexicalLineBreak = null) : e && (e = document.createElement("br"), n.__lexicalLineBreak = e, n.appendChild(e));
}
function um(t, e) {
  var n = e.__lexicalDir;
  if (e.__lexicalDirTextContent !== xe || n !== mr) {
    let i = xe === "";
    if (i) var o = mr;
    else o = xe, o = v0.test(o) ? "rtl" : y0.test(o) ? "ltr" : null;
    if (o !== n) {
      let a = e.classList, l = Dt.theme;
      var r = n !== null ? l[n] : void 0;
      let u = o !== null ? l[o] : void 0;
      r !== void 0 && (typeof r == "string" && (r = r.split(" "), r = l[n] = r), a.remove(...r)), o === null || i && o === "ltr" ? e.removeAttribute("dir") : (u !== void 0 && (typeof u == "string" && (n = u.split(" "), u = l[o] = n), u !== void 0 && a.add(...u)), e.dir = o), Ls || (t.getWritable().__dir = o);
    }
    mr = o, e.__lexicalDirTextContent = xe, e.__lexicalDir = o;
  }
}
function $r(t, e) {
  let n = [];
  for (t = t.__first; t !== null; ) {
    let o = e.get(t);
    o === void 0 && E(101), n.push(t), t = o.__next;
  }
  return n;
}
function po(t, e) {
  var n = rn.get(t), o = It.get(t);
  n !== void 0 && o !== void 0 || E(61);
  var r = im || ba.has(t) || ja.has(t);
  let i = Er(ve, t);
  if (n === o && !r) return C(n) ? (o = i.__lexicalTextContent, o !== void 0 && (ie += o, pt += o), o = i.__lexicalDirTextContent, o !== void 0 && (xe += o)) : (o = n.getTextContent(), D(n) && !n.isDirectionless() && (xe += o), pt += o, ie += o), i;
  if (n !== o && r && Fs(Do, $o, ui, o, "updated"), o.updateDOM(n, i, Dt)) return o = fr(t, null, null), e === null && E(62), e.replaceChild(o, i), hr(t, null), o;
  if (C(n) && C(o)) {
    if (t = o.__indent, t !== n.__indent && am(i, t), t = o.__format, t !== n.__format && sm(i, t), r) {
      t = xe, xe = "", r = ie;
      var a = n.__size, l = o.__size;
      if (ie = "", a === 1 && l === 1) {
        var u = n.__first;
        if (e = o.__first, u === e) po(u, i);
        else {
          var c = Ca(u);
          e = fr(e, null, null), i.replaceChild(e, c), hr(u, null);
        }
      } else {
        e = $r(n, rn);
        var d = $r(o, It);
        if (a === 0) l !== 0 && Sa(d, o, 0, l - 1, i, null);
        else if (l === 0) a !== 0 && (u = i.__lexicalLineBreak == null, wa(e, 0, a - 1, u ? null : i), u && (i.textContent = ""));
        else {
          var p = e;
          e = d, d = a - 1, a = l - 1;
          let m = i.firstChild, v = 0;
          for (l = 0; v <= d && l <= a; ) {
            var h = p[v];
            let g = e[l];
            if (h === g) m = Ui(po(g, i)), v++, l++;
            else {
              u === void 0 && (u = new Set(p)), c === void 0 && (c = new Set(e));
              let k = c.has(h), j = u.has(g);
              k ? (j ? (h = Er(ve, g), h === m ? m = Ui(po(g, i)) : (m != null ? i.insertBefore(h, m) : i.appendChild(h), po(g, i)), v++) : fr(g, i, m), l++) : (m = Ui(Ca(h)), hr(h, i), v++);
            }
          }
          u = v > d, c = l > a, u && !c ? (u = e[a + 1], u = u === void 0 ? null : ve.getElementByKey(u), Sa(e, o, l, a, i, u)) : c && !u && wa(p, v, d, i);
        }
      }
      Tr(o) && (ie += `

`), i.__lexicalTextContent = ie, ie = r + ie, um(o, i), xe = t, De(o) || o.isInline() || lm(n, o, i);
    }
    Tr(o) && (ie += `

`, pt += `

`);
  } else n = o.getTextContent(), Z(o) ? (r = o.decorate(ve, Dt), r !== null && cm(t, r)) : D(o) && !o.isDirectionless() && (xe += n), ie += n, pt += n;
  return !Ls && De(o) && o.__cachedText !== pt && (o.getWritable().__cachedText = pt), i;
}
function cm(t, e) {
  let n = ve._pendingDecorators, o = ve._decorators;
  if (n === null) {
    if (o[t] === e) return;
    n = Qp(ve);
  }
  n[t] = e;
}
function Ui(t) {
  return t = t.nextSibling, t !== null && t === ve._blockCursorElement && (t = t.nextSibling), t;
}
function Ca(t) {
  let e = xa.get(t);
  return e === void 0 && E(75, t), e;
}
let dt = Object.freeze({}), _a = [["keydown", A0], ["pointerdown", D0], ["compositionstart", R0], ["compositionend", P0], ["input", N0], ["click", $0], ["cut", dt], ["copy", dt], ["dragstart", dt], ["dragover", dt], ["dragend", dt], ["paste", dt], ["focus", dt], ["blur", dt], ["drop", dt]];
Sr && _a.push(["beforeinput", (t, e) => z0(t, e)]);
let Io = 0, dm = 0, pm = 0, wn = null, jo = 0, Ta = !1, Ea = !1, bo = !1, mo = !1, mm = [0, "", 0, "root", 0];
function hm(t, e, n, o, r) {
  let i = t.anchor, a = t.focus, l = i.getNode();
  var u = J();
  let c = it(u._window), d = c !== null ? c.anchorNode : null, p = i.key;
  u = u.getElementByKey(p);
  let h = n.length;
  return p !== a.key || !D(l) || (!r && (!Sr || pm < o + 50) || l.isDirty() && 2 > h || Zp(n)) && i.offset !== a.offset && !l.isComposing() || ga(l) || l.isDirty() && 1 < h || (r || !Sr) && u !== null && !l.isComposing() && d !== Cr(u) || c !== null && e !== null && (!e.collapsed || e.startContainer !== c.anchorNode || e.startOffset !== c.anchorOffset) || l.getFormat() !== t.format || l.getStyle() !== t.style || E0(t, l);
}
function ju(t, e) {
  return t !== null && t.nodeValue !== null && t.nodeType === 3 && e !== 0 && e !== t.nodeValue.length;
}
function bu(t, e, n) {
  let { anchorNode: o, anchorOffset: r, focusNode: i, focusOffset: a } = t;
  Ta && (Ta = !1, ju(o, r) && ju(i, a)) || ze(e, () => {
    if (!n) et(null);
    else if (Go(e, o, i)) {
      var l = W();
      if (M(l)) {
        var u = l.anchor, c = u.getNode();
        if (l.isCollapsed()) {
          t.type === "Range" && t.anchorNode === t.focusNode && (l.dirty = !0);
          var d = si(e).event;
          d = d ? d.timeStamp : performance.now();
          let [g, k, j, S, w] = mm;
          var p = Ie();
          p = e.isComposing() === !1 && p.getTextContent() === "", d < w + 200 && u.offset === j && u.key === S ? (l.format = g, l.style = k) : u.type === "text" ? (D(c) || E(141), l.format = c.getFormat(), l.style = c.getStyle()) : u.type !== "element" || p || (l.format = 0, l.style = "");
        } else {
          var h = u.key, m = l.focus.key;
          u = l.getNodes(), c = u.length;
          var v = l.isBackward();
          d = v ? a : r, p = v ? r : a;
          let g = v ? m : h;
          h = v ? h : m, m = 255, v = !1;
          for (let k = 0; k < c; k++) {
            let j = u[k], S = j.getTextContentSize();
            if (D(j) && S !== 0 && !(k === 0 && j.__key === g && d === S || k === c - 1 && j.__key === h && p === 0) && (v = !0, m &= j.getFormat(), m === 0)) break;
          }
          l.format = v ? m : 0;
        }
      }
      T(e, oi, void 0);
    }
  });
}
function $0(t, e) {
  ze(e, () => {
    let n = W();
    var o = it(e._window);
    let r = Zn();
    if (o) if (M(n)) {
      let a = n.anchor;
      var i = a.getNode();
      a.type === "element" && a.offset === 0 && n.isCollapsed() && !De(i) && Ie().getChildrenSize() === 1 && i.getTopLevelElementOrThrow().isEmpty() && r !== null && n.is(r) ? (o.removeAllRanges(), n.dirty = !0) : t.detail !== 3 || n.isCollapsed() || (o = n.focus.getNode(), i !== o && (C(i) ? i.select(0) : i.getParentOrThrow().select(0)));
    } else t.pointerType === "touch" && (i = o.anchorNode, i !== null && (i = i.nodeType, i === 1 || i === 3)) && (o = qs(r, o, e, t), et(o));
    T(e, Cp, t);
  });
}
function D0(t, e) {
  let n = t.target;
  t = t.pointerType, n instanceof Node && t !== "touch" && ze(e, () => {
    Z(Ko(n)) || (Ea = !0);
  });
}
function fm(t) {
  return t.getTargetRanges ? (t = t.getTargetRanges(), t.length === 0 ? null : t[0]) : null;
}
function I0(t, e) {
  return t !== e || C(t) || C(e) || !t.isToken() || !e.isToken();
}
function z0(t, e) {
  let n = t.inputType, o = fm(t);
  n === "deleteCompositionText" || Ot && tm(e) || n !== "insertCompositionText" && ze(e, () => {
    let r = W();
    if (n === "deleteContentBackward") {
      if (r === null) {
        var i = Zn();
        if (!M(i)) return;
        et(i.clone());
      }
      if (M(r)) {
        h0 && ae(r.anchor.key), dm === 229 && t.timeStamp < Io + 30 && e.isComposing() && r.anchor.key === r.focus.key ? (ae(null), Io = 0, setTimeout(() => {
          ze(e, () => {
            ae(null);
          });
        }, 30), M(r) && (i = r.anchor.getNode(), i.markDirty(), r.format = i.getFormat(), D(i) || E(142), r.style = i.getStyle()), 1 >= r.anchor.getNode().getTextContent().length && (t.preventDefault(), T(e, Tn, !0))) : (ae(null), t.preventDefault(), T(e, Tn, !0));
        return;
      }
    }
    if (M(r)) {
      i = t.data, wn !== null && As(!1, e, wn), r.dirty && wn === null || !r.isCollapsed() || De(r.anchor.getNode()) || o === null || r.applyDOMRange(o), wn = null;
      var a = r.focus, l = r.anchor.getNode();
      if (a = a.getNode(), n === "insertText" || n === "insertTranspose") i === `
` ? (t.preventDefault(), T(e, yo, !1)) : i === `

` ? (t.preventDefault(), T(e, pa, void 0)) : i == null && t.dataTransfer ? (i = t.dataTransfer.getData("text/plain"), t.preventDefault(), r.insertRawText(i)) : i != null && hm(r, o, i, t.timeStamp, !0) ? (t.preventDefault(), T(e, En, i)) : wn = i, pm = t.timeStamp;
      else switch (t.preventDefault(), n) {
        case "insertFromYank":
        case "insertFromDrop":
        case "insertReplacementText":
          T(e, En, t);
          break;
        case "insertFromComposition":
          ae(null), T(e, En, t);
          break;
        case "insertLineBreak":
          ae(null), T(e, yo, !1);
          break;
        case "insertParagraph":
          ae(null), bo && !ri ? (bo = !1, T(e, yo, !1)) : T(e, pa, void 0);
          break;
        case "insertFromPaste":
        case "insertFromPasteAsQuotation":
          T(e, _s, t);
          break;
        case "deleteByComposition":
          I0(l, a) && T(
            e,
            ma,
            t
          );
          break;
        case "deleteByDrag":
        case "deleteByCut":
          T(e, ma, t);
          break;
        case "deleteContent":
          T(e, Tn, !1);
          break;
        case "deleteWordBackward":
          T(e, Eo, !0);
          break;
        case "deleteWordForward":
          T(e, Eo, !1);
          break;
        case "deleteHardLineBackward":
        case "deleteSoftLineBackward":
          T(e, Oo, !0);
          break;
        case "deleteContentForward":
        case "deleteHardLineForward":
        case "deleteSoftLineForward":
          T(e, Oo, !1);
          break;
        case "formatStrikeThrough":
          T(e, St, "strikethrough");
          break;
        case "formatBold":
          T(e, St, "bold");
          break;
        case "formatItalic":
          T(e, St, "italic");
          break;
        case "formatUnderline":
          T(e, St, "underline");
          break;
        case "historyUndo":
          T(e, Ts, void 0);
          break;
        case "historyRedo":
          T(e, Es, void 0);
      }
    }
  });
}
function N0(t, e) {
  t.stopPropagation(), ze(e, () => {
    var n = W(), o = t.data, r = fm(t);
    if (o != null && M(n) && hm(n, r, o, t.timeStamp, !1)) {
      mo && (Oa(e, o), mo = !1);
      var i = n.anchor, a = i.getNode();
      if (r = it(e._window), r === null) return;
      let l = i.offset;
      (i = Sr && !n.isCollapsed() && D(a) && r.anchorNode !== null) && (a = a.getTextContent().slice(0, l) + o + a.getTextContent().slice(l + n.focus.offset), r = r.anchorNode, i = a === (r.nodeType === 3 ? r.nodeValue : null)), i || T(e, En, o), o = o.length, Ot && 1 < o && t.inputType === "insertCompositionText" && !e.isComposing() && (n.anchor.offset -= o), Ds || ri || Is || !e.isComposing() || (Io = 0, ae(null));
    } else As(!1, e, o !== null ? o : void 0), mo && (Oa(e, o || void 0), mo = !1);
    we(), n = J(), Wp(n);
  }), wn = null;
}
function R0(t, e) {
  ze(e, () => {
    let n = W();
    if (M(n) && !e.isComposing()) {
      let o = n.anchor, r = n.anchor.getNode();
      ae(o.key), (t.timeStamp < Io + 30 || o.type === "element" || !n.isCollapsed() || r.getFormat() !== n.format || D(r) && r.getStyle() !== n.style) && T(e, En, g0);
    }
  });
}
function Oa(t, e) {
  var n = t._compositionKey;
  if (ae(null), n !== null && e != null) {
    if (e === "") {
      e = ge(n), t = Cr(t.getElementByKey(n)), t !== null && t.nodeValue !== null && D(e) && Ms(e, t.nodeValue, null, null, !0);
      return;
    }
    if (e[e.length - 1] === `
` && (n = W(), M(n))) {
      e = n.focus, n.anchor.set(e.key, e.offset, e.type), T(t, wr, null);
      return;
    }
  }
  As(!0, t, e);
}
function P0(t, e) {
  Ot ? mo = !0 : ze(e, () => {
    Oa(e, t.data);
  });
}
function A0(t, e) {
  if (Io = t.timeStamp, dm = t.keyCode, !e.isComposing()) {
    var { keyCode: n, shiftKey: o, ctrlKey: r, metaKey: i, altKey: a } = t;
    if (!T(e, _p, t)) {
      if (n !== 39 || r || i || a) if (n !== 39 || a || o || !r && !i) if (n !== 37 || r || i || a) if (n !== 37 || a || o || !r && !i) if (n !== 38 || r || i) if (n !== 40 || r || i) if (n === 13 && o) bo = !0, T(e, wr, t);
      else if (n === 32) T(e, zp, t);
      else if (fe && r && n === 79) t.preventDefault(), bo = !0, T(e, yo, !0);
      else if (n !== 13 || o) {
        var l = fe ? a || i ? !1 : n === 8 || n === 72 && r : r || a || i ? !1 : n === 8;
        l ? n === 8 ? T(e, Np, t) : (t.preventDefault(), T(e, Tn, !0)) : n === 27 ? T(
          e,
          Rp,
          t
        ) : (l = fe ? o || a || i ? !1 : n === 46 || n === 68 && r : r || a || i ? !1 : n === 46, l ? n === 46 ? T(e, Pp, t) : (t.preventDefault(), T(e, Tn, !1)) : n === 8 && (fe ? a : r) ? (t.preventDefault(), T(e, Eo, !0)) : n === 46 && (fe ? a : r) ? (t.preventDefault(), T(e, Eo, !1)) : fe && i && n === 8 ? (t.preventDefault(), T(e, Oo, !0)) : fe && i && n === 46 ? (t.preventDefault(), T(e, Oo, !1)) : n === 66 && !a && (fe ? i : r) ? (t.preventDefault(), T(e, St, "bold")) : n === 85 && !a && (fe ? i : r) ? (t.preventDefault(), T(e, St, "underline")) : n === 73 && !a && (fe ? i : r) ? (t.preventDefault(), T(e, St, "italic")) : n !== 9 || a || r || i ? n === 90 && !o && (fe ? i : r) ? (t.preventDefault(), T(e, Ts, void 0)) : (l = fe ? n === 90 && i && o : n === 89 && r || n === 90 && r && o, l ? (t.preventDefault(), T(e, Es, void 0)) : Yo(e._editorState._selection) ? (l = o ? !1 : n === 67 ? fe ? i : r : !1, l ? (t.preventDefault(), T(e, Os, t)) : (l = o ? !1 : n === 88 ? fe ? i : r : !1, l ? (t.preventDefault(), T(e, $s, t)) : n === 65 && (fe ? i : r) && (t.preventDefault(), T(e, ha, t)))) : !Ot && n === 65 && (fe ? i : r) && (t.preventDefault(), T(e, ha, t))) : T(e, Ap, t));
      } else bo = !1, T(e, wr, t);
      else T(e, Ip, t);
      else T(e, Dp, t);
      else T(e, $p, t);
      else T(e, Op, t);
      else T(e, Ep, t);
      else T(e, Tp, t);
      (r || o || a || i) && T(e, Up, t);
    }
  }
}
function gm(t) {
  let e = t.__lexicalEventHandles;
  return e === void 0 && (e = [], t.__lexicalEventHandles = e), e;
}
let On = /* @__PURE__ */ new Map();
function vm(t) {
  var e = t.target;
  let n = it(e == null ? null : e.nodeType === 9 ? e.defaultView : e.ownerDocument.defaultView);
  if (n !== null) {
    var o = Rs(n.anchorNode);
    if (o !== null) {
      Ea && (Ea = !1, ze(o, () => {
        var l = Zn(), u = n.anchorNode;
        u !== null && (u = u.nodeType, u === 1 || u === 3) && (l = qs(l, n, o, t), et(l));
      })), e = Ps(o), e = e[e.length - 1];
      var r = e._key, i = On.get(r), a = i || e;
      a !== o && bu(n, a, !1), bu(n, o, !0), o !== e ? On.set(r, o) : i && On.delete(r);
    }
  }
}
function M0(t, e) {
  jo === 0 && t.ownerDocument.addEventListener("selectionchange", vm), jo++, t.__lexicalEditor = e;
  let n = gm(t);
  for (let o = 0; o < _a.length; o++) {
    let [r, i] = _a[o], a = typeof i == "function" ? (l) => {
      l._lexicalHandled !== !0 && (l._lexicalHandled = !0, e.isEditable() && i(l, e));
    } : (l) => {
      if (l._lexicalHandled !== !0 && (l._lexicalHandled = !0, e.isEditable())) switch (r) {
        case "cut":
          return T(e, $s, l);
        case "copy":
          return T(e, Os, l);
        case "paste":
          return T(e, _s, l);
        case "dragstart":
          return T(e, Fp, l);
        case "dragover":
          return T(e, Lp, l);
        case "dragend":
          return T(
            e,
            qp,
            l
          );
        case "focus":
          return T(e, Bp, l);
        case "blur":
          return T(e, Hp, l);
        case "drop":
          return T(e, Mp, l);
      }
    };
    t.addEventListener(r, a), n.push(() => {
      t.removeEventListener(r, a);
    });
  }
}
function $a(t, e, n) {
  we();
  var o = t.__key;
  let r = t.getParent();
  if (r !== null) {
    var i = W();
    if (M(i) && C(t)) {
      var { anchor: a, focus: l } = i, u = a.getNode(), c = l.getNode();
      Or(u, t) && a.set(t.__key, 0, "element"), Or(c, t) && l.set(t.__key, 0, "element");
    }
    if (u = i, c = !1, M(u) && e) {
      i = u.anchor;
      let d = u.focus;
      i.key === o && (Ir(i, t, r, t.getPreviousSibling(), t.getNextSibling()), c = !0), d.key === o && (Ir(d, t, r, t.getPreviousSibling(), t.getNextSibling()), c = !0);
    } else Yo(u) && e && t.isSelected() && t.selectPrevious();
    M(u) && e && !c ? (o = t.getIndexWithinParent(), en(t), Dr(u, r, o, -1)) : en(t), n || $t(r) || r.canBeEmpty() || !r.isEmpty() || $a(r, e), e && De(r) && r.isEmpty() && r.selectEnd();
  }
}
class ci {
  static getType() {
    E(64, this.name);
  }
  static clone() {
    E(65, this.name);
  }
  constructor(e) {
    this.__type = this.constructor.getType(), this.__next = this.__prev = this.__parent = null, Yp(this, e);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    E(137, this.constructor.name);
  }
  isAttached() {
    for (var e = this.__key; e !== null; ) {
      if (e === "root") return !0;
      if (e = ge(e), e === null) break;
      e = e.__parent;
    }
    return !1;
  }
  isSelected(e) {
    if (e = e || W(), e == null) return !1;
    let n = e.getNodes().some((o) => o.__key === this.__key);
    return D(this) ? n : M(e) && e.anchor.type === "element" && e.focus.type === "element" && e.anchor.key === e.focus.key && e.anchor.offset === e.focus.offset ? !1 : n;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    var e = this.getParent();
    if (e === null) return -1;
    e = e.getFirstChild();
    let n = 0;
    for (; e !== null; ) {
      if (this.is(e)) return n;
      n++, e = e.getNextSibling();
    }
    return -1;
  }
  getParent() {
    let e = this.getLatest().__parent;
    return e === null ? null : ge(e);
  }
  getParentOrThrow() {
    let e = this.getParent();
    return e === null && E(66, this.__key), e;
  }
  getTopLevelElement() {
    let e = this;
    for (; e !== null; ) {
      let n = e.getParent();
      if ($t(n)) return C(e) || E(138), e;
      e = n;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    let e = this.getTopLevelElement();
    return e === null && E(67, this.__key), e;
  }
  getParents() {
    let e = [], n = this.getParent();
    for (; n !== null; ) e.push(n), n = n.getParent();
    return e;
  }
  getParentKeys() {
    let e = [], n = this.getParent();
    for (; n !== null; ) e.push(n.__key), n = n.getParent();
    return e;
  }
  getPreviousSibling() {
    let e = this.getLatest().__prev;
    return e === null ? null : ge(e);
  }
  getPreviousSiblings() {
    let e = [];
    var n = this.getParent();
    if (n === null) return e;
    for (n = n.getFirstChild(); n !== null && !n.is(this); ) e.push(n), n = n.getNextSibling();
    return e;
  }
  getNextSibling() {
    let e = this.getLatest().__next;
    return e === null ? null : ge(e);
  }
  getNextSiblings() {
    let e = [], n = this.getNextSibling();
    for (; n !== null; ) e.push(n), n = n.getNextSibling();
    return e;
  }
  getCommonAncestor(e) {
    let n = this.getParents();
    var o = e.getParents();
    C(this) && n.unshift(this), C(e) && o.unshift(e), e = n.length;
    var r = o.length;
    if (e === 0 || r === 0 || n[e - 1] !== o[r - 1]) return null;
    for (o = new Set(o), r = 0; r < e; r++) {
      let i = n[r];
      if (o.has(i)) return i;
    }
    return null;
  }
  is(e) {
    return e == null ? !1 : this.__key === e.__key;
  }
  isBefore(e) {
    if (this === e) return !1;
    if (e.isParentOf(this)) return !0;
    if (this.isParentOf(e)) return !1;
    var n = this.getCommonAncestor(e);
    let o = this;
    for (; ; ) {
      var r = o.getParentOrThrow();
      if (r === n) {
        r = o.getIndexWithinParent();
        break;
      }
      o = r;
    }
    for (o = e; ; ) {
      if (e = o.getParentOrThrow(), e === n) {
        n = o.getIndexWithinParent();
        break;
      }
      o = e;
    }
    return r < n;
  }
  isParentOf(e) {
    let n = this.__key;
    if (n === e.__key) return !1;
    for (; e !== null; ) {
      if (e.__key === n) return !0;
      e = e.getParent();
    }
    return !1;
  }
  getNodesBetween(e) {
    let n = this.isBefore(e), o = [], r = /* @__PURE__ */ new Set();
    for (var i = this; ; ) {
      var a = i.__key;
      if (r.has(a) || (r.add(a), o.push(i)), i === e) break;
      if (a = C(i) ? n ? i.getFirstChild() : i.getLastChild() : null, a !== null) i = a;
      else if (a = n ? i.getNextSibling() : i.getPreviousSibling(), a !== null) i = a;
      else {
        if (i = i.getParentOrThrow(), r.has(i.__key) || o.push(i), i === e) break;
        a = i;
        do
          a === null && E(68), i = n ? a.getNextSibling() : a.getPreviousSibling(), a = a.getParent(), a !== null && (i !== null || r.has(a.__key) || o.push(a));
        while (i === null);
      }
    }
    return n || o.reverse(), o;
  }
  isDirty() {
    let e = J()._dirtyLeaves;
    return e !== null && e.has(this.__key);
  }
  getLatest() {
    let e = ge(this.__key);
    return e === null && E(113), e;
  }
  getWritable() {
    we();
    var e = at(), n = J();
    e = e._nodeMap;
    let o = this.__key, r = this.getLatest(), i = r.__parent;
    n = n._cloneNotNeeded;
    var a = W();
    return a !== null && a.setCachedNodes(null), n.has(o) ? (_r(r), r) : (a = r.constructor.clone(r), a.__parent = i, a.__next = r.__next, a.__prev = r.__prev, C(r) && C(a) ? (a.__first = r.__first, a.__last = r.__last, a.__size = r.__size, a.__indent = r.__indent, a.__format = r.__format, a.__dir = r.__dir) : D(r) && D(a) && (a.__format = r.__format, a.__style = r.__style, a.__mode = r.__mode, a.__detail = r.__detail), n.add(o), a.__key = o, _r(a), e.set(o, a), a);
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM() {
    E(70);
  }
  updateDOM() {
    E(71);
  }
  exportDOM(e) {
    return { element: this.createDOM(e._config, e) };
  }
  exportJSON() {
    E(72);
  }
  static importJSON() {
    E(18, this.name);
  }
  static transform() {
    return null;
  }
  remove(e) {
    $a(this, !0, e);
  }
  replace(e, n) {
    we();
    var o = W();
    o !== null && (o = o.clone()), qi(this, e);
    let r = this.getLatest(), i = this.__key, a = e.__key, l = e.getWritable();
    e = this.getParentOrThrow().getWritable();
    let u = e.__size;
    en(l);
    let c = r.getPreviousSibling(), d = r.getNextSibling(), p = r.__prev, h = r.__next, m = r.__parent;
    return $a(r, !1, !0), c === null ? e.__first = a : c.getWritable().__next = a, l.__prev = p, d === null ? e.__last = a : d.getWritable().__prev = a, l.__next = h, l.__parent = m, e.__size = u, n && (C(this) && C(l) || E(139), this.getChildren().forEach((v) => {
      l.append(v);
    })), M(o) && (et(o), n = o.anchor, o = o.focus, n.key === i && Cu(n, l), o.key === i && Cu(o, l)), Ct() === i && ae(a), l;
  }
  insertAfter(e, n = !0) {
    we(), qi(this, e);
    var o = this.getWritable();
    let r = e.getWritable();
    var i = r.getParent();
    let a = W();
    var l = !1, u = !1;
    if (i !== null) {
      var c = e.getIndexWithinParent();
      en(r), M(a) && (u = i.__key, l = a.anchor, i = a.focus, l = l.type === "element" && l.key === u && l.offset === c + 1, u = i.type === "element" && i.key === u && i.offset === c + 1);
    }
    i = this.getNextSibling(), c = this.getParentOrThrow().getWritable();
    let d = r.__key, p = o.__next;
    return i === null ? c.__last = d : i.getWritable().__prev = d, c.__size++, o.__next = d, r.__next = p, r.__prev = o.__key, r.__parent = o.__parent, n && M(a) && (n = this.getIndexWithinParent(), Dr(a, c, n + 1), o = c.__key, l && a.anchor.set(o, n + 2, "element"), u && a.focus.set(o, n + 2, "element")), e;
  }
  insertBefore(e, n = !0) {
    we(), qi(this, e);
    var o = this.getWritable();
    let r = e.getWritable(), i = r.__key;
    en(r);
    let a = this.getPreviousSibling(), l = this.getParentOrThrow().getWritable(), u = o.__prev, c = this.getIndexWithinParent();
    return a === null ? l.__first = i : a.getWritable().__next = i, l.__size++, o.__prev = i, r.__prev = u, r.__next = o.__key, r.__parent = o.__parent, o = W(), n && M(o) && (n = this.getParentOrThrow(), Dr(
      o,
      n,
      c
    )), e;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return ht();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(e, n) {
    we();
    let o = this.getPreviousSibling(), r = this.getParentOrThrow();
    return o === null ? r.select(0, 0) : C(o) ? o.select() : D(o) ? o.select(e, n) : (e = o.getIndexWithinParent() + 1, r.select(e, e));
  }
  selectNext(e, n) {
    we();
    let o = this.getNextSibling(), r = this.getParentOrThrow();
    return o === null ? r.select() : C(o) ? o.select(0, 0) : D(o) ? o.select(e, n) : (e = o.getIndexWithinParent(), r.select(e, e));
  }
  markDirty() {
    this.getWritable();
  }
}
function F0(t, e, n) {
  n = n || e.getParentOrThrow().getLastChild();
  let o = e;
  for (e = [e]; o !== n; ) o.getNextSibling() || E(140), o = o.getNextSibling(), e.push(o);
  for (let r of e) t = t.insertAfter(r);
}
class Xn extends ci {
  static getType() {
    return "linebreak";
  }
  static clone(e) {
    return new Xn(e.__key);
  }
  constructor(e) {
    super(e);
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
  static importDOM() {
    return { br: (e) => {
      e: {
        var n = e.parentElement;
        if (n !== null) {
          let o = n.firstChild;
          if ((o === e || o.nextSibling === e && xu(o)) && (n = n.lastChild, n === e || n.previousSibling === e && xu(n))) {
            e = !0;
            break e;
          }
        }
        e = !1;
      }
      return e ? null : { conversion: L0, priority: 0 };
    } };
  }
  static importJSON() {
    return Rn();
  }
  exportJSON() {
    return {
      type: "linebreak",
      version: 1
    };
  }
}
function L0() {
  return { node: Rn() };
}
function Rn() {
  return Jo(new Xn());
}
function an(t) {
  return t instanceof Xn;
}
function xu(t) {
  return t.nodeType === 3 && /^( |\t|\r?\n)+$/.test(t.textContent || "");
}
function Vi(t, e) {
  return e & 16 ? "code" : e & 128 ? "mark" : e & 32 ? "sub" : e & 64 ? "sup" : null;
}
function Wi(t, e) {
  return e & 1 ? "strong" : e & 2 ? "em" : "span";
}
function Gi(t, e, n, o, r) {
  t = o.classList, o = ko(r, "base"), o !== void 0 && t.add(...o), o = ko(r, "underlineStrikethrough");
  let i = !1, a = e & 8 && e & 4;
  var l = n & 8 && n & 4;
  o !== void 0 && (l ? (i = !0, a || t.add(...o)) : a && t.remove(...o));
  for (let u in Tt) l = Tt[u], o = ko(r, u), o !== void 0 && (n & l ? !i || u !== "underline" && u !== "strikethrough" ? (!(e & l) || a && u === "underline" || u === "strikethrough") && t.add(...o) : e & l && t.remove(...o) : e & l && t.remove(...o));
}
function Ki(t, e, n) {
  let o = e.firstChild;
  if (n = n.isComposing(), t += n ? ii : "", o == null) e.textContent = t;
  else if (e = o.nodeValue, e !== t) if (n || Ot) {
    n = e.length;
    let r = t.length, i = 0, a = 0;
    for (; i < n && i < r && e[i] === t[i]; ) i++;
    for (; a + i < n && a + i < r && e[n - a - 1] === t[r - a - 1]; ) a++;
    t = [i, n - i - a, t.slice(i, r - a)];
    let [l, u, c] = t;
    u !== 0 && o.deleteData(l, u), o.insertData(l, c);
  } else o.nodeValue = t;
}
function ar(t, e) {
  return e = document.createElement(e), e.appendChild(t), e;
}
class pn extends ci {
  static getType() {
    return "text";
  }
  static clone(e) {
    return new pn(e.__text, e.__key);
  }
  constructor(e, n) {
    super(n), this.__text = e, this.__format = 0, this.__style = "", this.__detail = this.__mode = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    let e = this.getLatest();
    return x0[e.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Ct();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return (this.getLatest().__detail & 1) !== 0;
  }
  isUnmergeable() {
    return (this.getLatest().__detail & 2) !== 0;
  }
  hasFormat(e) {
    return e = Tt[e], (this.getFormat() & e) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(e, n) {
    let o = this.getLatest().__format;
    return va(o, e, n);
  }
  canHaveFormat() {
    return !0;
  }
  createDOM(e) {
    var n = this.__format, o = Vi(this, n);
    let r = Wi(this, n), i = document.createElement(o === null ? r : o), a = i;
    return this.hasFormat("code") && i.setAttribute("spellcheck", "false"), o !== null && (a = document.createElement(r), i.appendChild(a)), o = a, Ki(this.__text, o, this), e = e.theme.text, e !== void 0 && Gi(r, 0, n, o, e), n = this.__style, n !== "" && (i.style.cssText = n), i;
  }
  updateDOM(e, n, o) {
    let r = this.__text;
    var i = e.__format, a = this.__format, l = Vi(this, i);
    let u = Vi(this, a);
    var c = Wi(this, i);
    let d = Wi(this, a);
    return (l === null ? c : l) !== (u === null ? d : u) ? !0 : l === u && c !== d ? (i = n.firstChild, i == null && E(48), e = l = document.createElement(d), Ki(r, e, this), o = o.theme.text, o !== void 0 && Gi(d, 0, a, e, o), n.replaceChild(
      l,
      i
    ), !1) : (c = n, u !== null && l !== null && (c = n.firstChild, c == null && E(49)), Ki(r, c, this), o = o.theme.text, o !== void 0 && i !== a && Gi(d, i, a, c, o), a = this.__style, e.__style !== a && (n.style.cssText = a), !1);
  }
  static importDOM() {
    return {
      "#text": () => ({ conversion: H0, priority: 0 }),
      b: () => ({ conversion: B0, priority: 0 }),
      code: () => ({ conversion: jt, priority: 0 }),
      em: () => ({ conversion: jt, priority: 0 }),
      i: () => ({ conversion: jt, priority: 0 }),
      s: () => ({ conversion: jt, priority: 0 }),
      span: () => ({ conversion: q0, priority: 0 }),
      strong: () => ({ conversion: jt, priority: 0 }),
      sub: () => ({ conversion: jt, priority: 0 }),
      sup: () => ({ conversion: jt, priority: 0 }),
      u: () => ({ conversion: jt, priority: 0 })
    };
  }
  static importJSON(e) {
    let n = he(e.text);
    return n.setFormat(e.format), n.setDetail(e.detail), n.setMode(e.mode), n.setStyle(e.style), n;
  }
  exportDOM(e) {
    return { element: e } = super.exportDOM(e), e !== null && li(e) || E(132), e.style.whiteSpace = "pre-wrap", this.hasFormat("bold") && (e = ar(e, "b")), this.hasFormat("italic") && (e = ar(e, "i")), this.hasFormat("strikethrough") && (e = ar(e, "s")), this.hasFormat("underline") && (e = ar(e, "u")), { element: e };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), type: "text", version: 1 };
  }
  selectionTransform() {
  }
  setFormat(e) {
    let n = this.getWritable();
    return n.__format = typeof e == "string" ? Tt[e] : e, n;
  }
  setDetail(e) {
    let n = this.getWritable();
    return n.__detail = typeof e == "string" ? k0[e] : e, n;
  }
  setStyle(e) {
    let n = this.getWritable();
    return n.__style = e, n;
  }
  toggleFormat(e) {
    let n = this.getFormat();
    return e = va(n, e, null), this.setFormat(e);
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
    if (e = b0[e], this.__mode === e) return this;
    let n = this.getWritable();
    return n.__mode = e, n;
  }
  setTextContent(e) {
    if (this.__text === e) return this;
    let n = this.getWritable();
    return n.__text = e, n;
  }
  select(e, n) {
    we();
    let o = W();
    var r = this.getTextContent();
    let i = this.__key;
    if (typeof r == "string" ? (r = r.length, e === void 0 && (e = r), n === void 0 && (n = r)) : n = e = 0, M(o)) r = Ct(), r !== o.anchor.key && r !== o.focus.key || ae(i), o.setTextNodeRange(
      this,
      e,
      this,
      n
    );
    else return bm(i, e, i, n, "text", "text");
    return o;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    let e = this.getTextContentSize();
    return this.select(e, e);
  }
  spliceText(e, n, o, r) {
    let i = this.getWritable(), a = i.__text, l = o.length, u = e;
    0 > u && (u = l + u, 0 > u && (u = 0));
    let c = W();
    return r && M(c) && (e += l, c.setTextNodeRange(i, e, i, e)), n = a.slice(0, u) + o + a.slice(u + n), i.__text = n, i;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...e) {
    we();
    var n = this.getLatest(), o = n.getTextContent(), r = n.__key, i = Ct(), a = new Set(e);
    e = [];
    for (var l = o.length, u = "", c = 0; c < l; c++) u !== "" && a.has(c) && (e.push(u), u = ""), u += o[c];
    if (u !== "" && e.push(u), a = e.length, a === 0) return [];
    if (e[0] === o) return [n];
    var d = e[0];
    o = n.getParentOrThrow(), c = n.getFormat();
    let p = n.getStyle(), h = n.__detail;
    l = !1, n.isSegmented() ? (u = he(d), u.__format = c, u.__style = p, u.__detail = h, l = !0) : (u = n.getWritable(), u.__text = d), n = W(), u = [u], d = d.length;
    for (let g = 1; g < a; g++) {
      var m = e[g], v = m.length;
      m = he(m).getWritable(), m.__format = c, m.__style = p, m.__detail = h;
      let k = m.__key;
      if (v = d + v, M(n)) {
        let j = n.anchor, S = n.focus;
        j.key === r && j.type === "text" && j.offset > d && j.offset <= v && (j.key = k, j.offset -= d, n.dirty = !0), S.key === r && S.type === "text" && S.offset > d && S.offset <= v && (S.key = k, S.offset -= d, n.dirty = !0);
      }
      i === r && ae(k), d = v, u.push(m);
    }
    return r = this.getPreviousSibling(), i = this.getNextSibling(), r !== null && _r(r), i !== null && _r(i), r = o.getWritable(), i = this.getIndexWithinParent(), l ? (r.splice(i, 0, u), this.remove()) : r.splice(i, 1, u), M(n) && Dr(n, o, i, a - 1), u;
  }
  mergeWithSibling(e) {
    var n = e === this.getPreviousSibling();
    n || e === this.getNextSibling() || E(50);
    var o = this.__key;
    let r = e.__key, i = this.__text, a = i.length;
    Ct() === r && ae(o);
    let l = W();
    if (M(l)) {
      let u = l.anchor, c = l.focus;
      u !== null && u.key === r && (Iu(u, n, o, e, a), l.dirty = !0), c !== null && c.key === r && (Iu(c, n, o, e, a), l.dirty = !0);
    }
    return o = e.__text, this.setTextContent(n ? o + i : i + o), n = this.getWritable(), e.remove(), n;
  }
  isTextEntity() {
    return !1;
  }
}
function q0(t) {
  let e = t.style.fontWeight === "700", n = t.style.textDecoration === "line-through", o = t.style.fontStyle === "italic", r = t.style.textDecoration === "underline", i = t.style.verticalAlign;
  return { forChild: (a) => (D(a) && (e && a.toggleFormat("bold"), n && a.toggleFormat("strikethrough"), o && a.toggleFormat("italic"), r && a.toggleFormat("underline"), i === "sub" && a.toggleFormat("subscript"), i === "super" && a.toggleFormat("superscript")), a), node: null };
}
function B0(t) {
  let e = t.style.fontWeight === "normal";
  return { forChild: (n) => (D(n) && !e && n.toggleFormat("bold"), n), node: null };
}
let wu = /* @__PURE__ */ new WeakMap();
function H0(t) {
  t.parentElement === null && E(129);
  for (var e = t.textContent || "", n, o = t.parentNode, r = [t]; o !== null && (n = wu.get(o)) === void 0 && !(o.nodeName === "PRE" || o.nodeType === 1 && o.style !== void 0 && o.style.whiteSpace !== void 0 && o.style.whiteSpace.startsWith("pre")); ) r.push(o), o = o.parentNode;
  for (n = n === void 0 ? o : n, o = 0; o < r.length; o++) wu.set(r[o], n);
  if (n !== null) {
    for (e = e.split(/(\r?\n|\t)/), t = [], r = e.length, n = 0; n < r; n++) o = e[n], o === `
` || o === `\r
` ? t.push(Rn()) : o === "	" ? t.push(di()) : o !== "" && t.push(he(o));
    return { node: t };
  }
  if (e = e.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), e === "") return { node: null };
  if (e[0] === " ") {
    for (r = t, n = !0; r !== null && (r = Su(r, !1)) !== null; ) if (o = r.textContent || "", 0 < o.length) {
      /[ \t\n]$/.test(o) && (e = e.slice(1)), n = !1;
      break;
    }
    n && (e = e.slice(1));
  }
  if (e[e.length - 1] === " ") {
    for (r = !0; t !== null && (t = Su(t, !0)) !== null; ) if (0 < (t.textContent || "").replace(/^( |\t|\r?\n)+/, "").length) {
      r = !1;
      break;
    }
    r && (e = e.slice(0, e.length - 1));
  }
  return e === "" ? { node: null } : { node: he(e) };
}
let U0 = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");
function Su(t, e) {
  for (; ; ) {
    for (var n = void 0; (n = e ? t.nextSibling : t.previousSibling) === null; ) if (t = t.parentElement, t === null) return null;
    if (t = n, t.nodeType === 1 && (n = t.style.display, n === "" && t.nodeName.match(U0) === null || n !== "" && !n.startsWith("inline"))) return null;
    for (; (n = e ? t.firstChild : t.lastChild) !== null; ) t = n;
    if (t.nodeType === 3) return t;
    if (t.nodeName === "BR") return null;
  }
}
let V0 = { code: "code", em: "italic", i: "italic", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function jt(t) {
  let e = V0[t.nodeName.toLowerCase()];
  return e === void 0 ? { node: null } : { forChild: (n) => (D(n) && !n.hasFormat(e) && n.toggleFormat(e), n), node: null };
}
function he(t = "") {
  return Jo(new pn(t));
}
function D(t) {
  return t instanceof pn;
}
class Qn extends pn {
  static getType() {
    return "tab";
  }
  static clone(e) {
    let n = new Qn(e.__key);
    return n.__text = e.__text, n.__format = e.__format, n.__style = e.__style, n;
  }
  constructor(e) {
    super("	", e), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    let n = di();
    return n.setFormat(e.format), n.setStyle(e.style), n;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "tab", version: 1 };
  }
  setTextContent() {
    E(126);
  }
  setDetail() {
    E(127);
  }
  setMode() {
    E(128);
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function di() {
  return Jo(new Qn());
}
function ym(t) {
  return t instanceof Qn;
}
class W0 {
  constructor(e, n, o) {
    this._selection = null, this.key = e, this.offset = n, this.type = o;
  }
  is(e) {
    return this.key === e.key && this.offset === e.offset && this.type === e.type;
  }
  isBefore(e) {
    let n = this.getNode(), o = e.getNode(), r = this.offset;
    if (e = e.offset, C(n)) {
      var i = n.getDescendantByIndex(r);
      n = i ?? n;
    }
    return C(o) && (i = o.getDescendantByIndex(e), o = i ?? o), n === o ? r < e : n.isBefore(o);
  }
  getNode() {
    let e = ge(this.key);
    return e === null && E(20), e;
  }
  set(e, n, o) {
    let r = this._selection, i = this.key;
    this.key = e, this.offset = n, this.type = o, eo() || (Ct() === i && ae(e), r !== null && (r.setCachedNodes(null), r.dirty = !0));
  }
}
function He(t, e, n) {
  return new W0(t, e, n);
}
function Ji(t, e) {
  let n = e.__key, o = t.offset, r = "element";
  if (D(e)) r = "text", e = e.getTextContentSize(), o > e && (o = e);
  else if (!C(e)) {
    var i = e.getNextSibling();
    D(i) ? (n = i.__key, o = 0, r = "text") : (i = e.getParent()) && (n = i.__key, o = e.getIndexWithinParent() + 1);
  }
  t.set(n, o, r);
}
function Cu(t, e) {
  if (C(e)) {
    let n = e.getLastDescendant();
    C(n) || D(n) ? Ji(t, n) : Ji(t, e);
  } else Ji(t, e);
}
function _u(t, e, n, o) {
  let r = t.getNode(), i = r.getChildAtIndex(t.offset), a = he(), l = De(r) ? ht().append(a) : a;
  a.setFormat(n), a.setStyle(o), i === null ? r.append(l) : i.insertBefore(l), t.is(e) && e.set(a.__key, 0, "text"), t.set(a.__key, 0, "text");
}
function xt(t, e, n, o) {
  t.key = e, t.offset = n, t.type = o;
}
class pi {
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
    if (!Yo(e)) return !1;
    let n = this._nodes, o = e._nodes;
    return n.size === o.size && Array.from(n).every((r) => o.has(r));
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
    return new pi(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText() {
  }
  insertText() {
  }
  insertNodes(e) {
    let n = this.getNodes(), o = n.length;
    var r = n[o - 1];
    if (D(r)) r = r.select();
    else {
      let i = r.getIndexWithinParent() + 1;
      r = r.getParentOrThrow().select(i, i);
    }
    for (r.insertNodes(e), e = 0; e < o; e++) n[e].remove();
  }
  getNodes() {
    var e = this._cachedNodes;
    if (e !== null) return e;
    var n = this._nodes;
    e = [];
    for (let o of n) n = ge(o), n !== null && e.push(n);
    return eo() || (this._cachedNodes = e), e;
  }
  getTextContent() {
    let e = this.getNodes(), n = "";
    for (let o = 0; o < e.length; o++) n += e[o].getTextContent();
    return n;
  }
}
function M(t) {
  return t instanceof Lt;
}
class Lt {
  constructor(e, n, o, r) {
    this.anchor = e, this.focus = n, e._selection = this, n._selection = this, this._cachedNodes = null, this.format = o, this.style = r, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(e) {
    this._cachedNodes = e;
  }
  is(e) {
    return M(e) ? this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style : !1;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    var e = this._cachedNodes;
    if (e !== null) return e;
    e = this.anchor;
    var n = this.focus, o = e.isBefore(n), r = o ? e : n;
    o = o ? n : e, e = r.getNode(), n = o.getNode();
    let i = r.offset;
    return r = o.offset, C(e) && (o = e.getDescendantByIndex(i), e = o ?? e), C(n) && (o = n.getDescendantByIndex(r), o !== null && o !== e && n.getChildAtIndex(r) === o && (o = o.getPreviousSibling()), n = o ?? n), e = e.is(n) ? C(e) && 0 < e.getChildrenSize() ? [] : [e] : e.getNodesBetween(n), eo() || (this._cachedNodes = e), e;
  }
  setTextNodeRange(e, n, o, r) {
    xt(this.anchor, e.__key, n, "text"), xt(this.focus, o.__key, r, "text"), this._cachedNodes = null, this.dirty = !0;
  }
  getTextContent() {
    let e = this.getNodes();
    if (e.length === 0) return "";
    let n = e[0], o = e[e.length - 1], r = this.anchor, i = this.focus, a = r.isBefore(i), [l, u] = Da(this), c = "", d = !0;
    for (let p = 0; p < e.length; p++) {
      let h = e[p];
      if (C(h) && !h.isInline()) d || (c += `
`), d = !h.isEmpty();
      else if (d = !1, D(h)) {
        let m = h.getTextContent();
        h === n ? h === o ? (r.type !== "element" || i.type !== "element" || i.offset === r.offset) && (m = l < u ? m.slice(l, u) : m.slice(u, l)) : m = a ? m.slice(l) : m.slice(u) : h === o && (m = a ? m.slice(0, u) : m.slice(0, l)), c += m;
      } else !Z(h) && !an(h) || h === o && this.isCollapsed() || (c += h.getTextContent());
    }
    return c;
  }
  applyDOMRange(e) {
    let n = J(), o = n.getEditorState()._selection;
    if (e = jm(e.startContainer, e.startOffset, e.endContainer, e.endOffset, n, o), e !== null) {
      var [r, i] = e;
      xt(this.anchor, r.key, r.offset, r.type), xt(this.focus, i.key, i.offset, i.type), this._cachedNodes = null;
    }
  }
  clone() {
    let e = this.anchor, n = this.focus;
    return new Lt(He(e.key, e.offset, e.type), He(n.key, n.offset, n.type), this.format, this.style);
  }
  toggleFormat(e) {
    this.format = va(this.format, e, null), this.dirty = !0;
  }
  setStyle(e) {
    this.style = e, this.dirty = !0;
  }
  hasFormat(e) {
    return (this.format & Tt[e]) !== 0;
  }
  insertRawText(e) {
    e = e.split(/(\r?\n|\t)/);
    let n = [], o = e.length;
    for (let r = 0; r < o; r++) {
      let i = e[r];
      i === `
` || i === `\r
` ? n.push(Rn()) : i === "	" ? n.push(di()) : n.push(he(i));
    }
    this.insertNodes(n);
  }
  insertText(e) {
    var n = this.anchor, o = this.focus, r = this.isCollapsed() || n.isBefore(o), i = this.format, a = this.style;
    r && n.type === "element" ? _u(n, o, i, a) : r || o.type !== "element" || _u(o, n, i, a);
    var l = this.getNodes(), u = l.length, c = r ? o : n;
    o = (r ? n : o).offset;
    var d = c.offset;
    n = l[0], D(n) || E(26), r = n.getTextContent().length;
    var p = n.getParentOrThrow(), h = l[u - 1];
    if (this.isCollapsed() && o === r && (n.isSegmented() || n.isToken() || !n.canInsertTextAfter() || !p.canInsertTextAfter() && n.getNextSibling() === null)) {
      var m = n.getNextSibling();
      if (D(m) && m.canInsertTextBefore() && !ga(m) || (m = he(), m.setFormat(i), p.canInsertTextAfter() ? n.insertAfter(m) : p.insertAfter(m)), m.select(0, 0), n = m, e !== "") {
        this.insertText(e);
        return;
      }
    } else if (this.isCollapsed() && o === 0 && (n.isSegmented() || n.isToken() || !n.canInsertTextBefore() || !p.canInsertTextBefore() && n.getPreviousSibling() === null)) {
      if (m = n.getPreviousSibling(), (!D(m) || ga(m)) && (m = he(), m.setFormat(i), p.canInsertTextBefore() ? n.insertBefore(m) : p.insertBefore(m)), m.select(), n = m, e !== "") {
        this.insertText(e);
        return;
      }
    } else if (n.isSegmented() && o !== r) p = he(n.getTextContent()), p.setFormat(i), n.replace(p), n = p;
    else if (!(this.isCollapsed() || e === "" || (m = h.getParent(), p.canInsertTextBefore() && p.canInsertTextAfter() && (!C(m) || m.canInsertTextBefore() && m.canInsertTextAfter())))) {
      this.insertText(""), km(this.anchor, this.focus, null), this.insertText(e);
      return;
    }
    if (u === 1) if (n.isToken()) e = he(e), e.select(), n.replace(e);
    else {
      if (l = n.getFormat(), u = n.getStyle(), o === d && (l !== i || u !== a)) if (n.getTextContent() === "") n.setFormat(i), n.setStyle(a);
      else {
        l = he(e), l.setFormat(i), l.setStyle(a), l.select(), o === 0 ? n.insertBefore(l, !1) : ([u] = n.splitText(o), u.insertAfter(l, !1)), l.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length);
        return;
      }
      else if (ym(n)) {
        e = he(e), e.setFormat(i), e.setStyle(a), e.select(), n.replace(e);
        return;
      }
      n = n.spliceText(o, d - o, e, !0), n.getTextContent() === "" ? n.remove() : this.anchor.type === "text" && (n.isComposing() ? this.anchor.offset -= e.length : (this.format = l, this.style = u));
    }
    else {
      if (i = /* @__PURE__ */ new Set([...n.getParentKeys(), ...h.getParentKeys()]), m = C(n) ? n : n.getParentOrThrow(), a = C(h) ? h : h.getParentOrThrow(), p = h, !m.is(a) && a.isInline())
        do
          p = a, a = a.getParentOrThrow();
        while (a.isInline());
      if (c.type === "text" && (d !== 0 || h.getTextContent() === "") || c.type === "element" && h.getIndexWithinParent() < d) if (D(h) && !h.isToken() && d !== h.getTextContentSize()) {
        if (h.isSegmented()) {
          var v = he(h.getTextContent());
          h.replace(v), h = v;
        }
        De(c.getNode()) || c.type !== "text" || (h = h.spliceText(0, d, "")), i.add(h.__key);
      } else c = h.getParentOrThrow(), c.canBeEmpty() || c.getChildrenSize() !== 1 ? h.remove() : c.remove();
      else i.add(h.__key);
      for (c = a.getChildren(), d = new Set(l), h = m.is(a), m = m.isInline() && n.getNextSibling() === null ? m : n, v = c.length - 1; 0 <= v; v--) {
        let g = c[v];
        if (g.is(n) || C(g) && g.isParentOf(n)) break;
        g.isAttached() && (!d.has(g) || g.is(p) ? h || m.insertAfter(g, !1) : g.remove());
      }
      if (!h) for (c = a, a = null; c !== null; )
        d = c.getChildren(), h = d.length, (h === 0 || d[h - 1].is(a)) && (i.delete(c.__key), a = c), c = c.getParent();
      for (n.isToken() ? o === r ? n.select() : (e = he(e), e.select(), n.replace(e)) : (n = n.spliceText(o, r - o, e, !0), n.getTextContent() === "" ? n.remove() : n.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length)), e = 1; e < u; e++) n = l[e], i.has(n.__key) || n.remove();
    }
  }
  removeText() {
    this.insertText("");
  }
  formatText(e) {
    if (this.isCollapsed()) this.toggleFormat(e), ae(null);
    else {
      var n = this.getNodes(), o = [];
      for (var r of n) D(r) && o.push(r);
      var i = o.length;
      if (i === 0) this.toggleFormat(e), ae(null);
      else {
        r = this.anchor;
        var a = this.focus, l = this.isBackward();
        n = l ? a : r, r = l ? r : a;
        var u = 0, c = o[0];
        if (a = n.type === "element" ? 0 : n.offset, n.type === "text" && a === c.getTextContentSize() && (u = 1, c = o[1], a = 0), c != null) {
          l = c.getFormatFlags(e, null);
          var d = i - 1, p = o[d];
          if (i = r.type === "text" ? r.offset : p.getTextContentSize(), c.is(p)) a !== i && (a === 0 && i === c.getTextContentSize() ? c.setFormat(l) : (e = c.splitText(a, i), e = a === 0 ? e[0] : e[1], e.setFormat(l), n.type === "text" && n.set(e.__key, 0, "text"), r.type === "text" && r.set(e.__key, i - a, "text")), this.format = l);
          else {
            a !== 0 && ([, c] = c.splitText(a), a = 0), c.setFormat(l);
            var h = p.getFormatFlags(e, l);
            for (0 < i && (i !== p.getTextContentSize() && ([p] = p.splitText(i)), p.setFormat(h)), u += 1; u < d; u++) {
              let m = o[u];
              if (!m.isToken()) {
                let v = m.getFormatFlags(e, h);
                m.setFormat(v);
              }
            }
            n.type === "text" && n.set(c.__key, a, "text"), r.type === "text" && r.set(p.__key, i, "text"), this.format = l | h;
          }
        }
      }
    }
  }
  insertNodes(e) {
    if (e.length !== 0) {
      if (this.anchor.key === "root") {
        this.insertParagraph();
        var n = W();
        return M(n) || E(134), n.insertNodes(e);
      }
      n = this.isBackward() ? this.focus : this.anchor;
      var o = Hi(n.getNode(), xn);
      if (n = e[e.length - 1], "__language" in o && C(o)) if ("__language" in e[0]) this.insertText(e[0].getTextContent());
      else {
        var r = Yi(this);
        o.splice(r, 0, e), n.selectEnd();
      }
      else if (e.some((l) => (C(l) || Z(l)) && !l.isInline())) {
        n = Y0(e), e = n.getLastDescendant();
        var i = n.getChildren();
        n = C(o) && o.isEmpty() ? null : this.insertParagraph(), r = i[i.length - 1];
        var a = i[0];
        ((l) => C(l) && xn(l) && !l.isEmpty() && C(o) && (!o.isEmpty() || "__value" in o && "__checked" in o))(a) && (C(o) || E(135), o.append(...a.getChildren()), a = i[1]), a && F0(o, a), i = Hi(e, xn), n && C(i) && ("__value" in n && "__checked" in n || xn(r)) && (i.append(...n.getChildren()), n.remove()), C(o) && o.isEmpty() && o.remove(), e.selectEnd(), e = C(o) ? o.getLastChild() : null, an(e) && i !== o && e.remove();
      } else C(o) || E(135), r = Yi(this), o.splice(r, 0, e), n.selectEnd();
    }
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      var e = ht();
      return Ie().splice(this.anchor.offset, 0, [e]), e.select(), e;
    }
    var n = Yi(this);
    return e = Hi(this.anchor.getNode(), xn), C(e) || E(136), n = (n = e.getChildAtIndex(n)) ? [n, ...n.getNextSiblings()] : [], (e = e.insertNewAfter(this, !1)) ? (e.append(...n), e.selectStart(), e) : null;
  }
  insertLineBreak(e) {
    var n = Rn();
    this.insertNodes([n]), e && (e = n.getParentOrThrow(), n = n.getIndexWithinParent(), e.select(n, n));
  }
  extract() {
    var e = this.getNodes(), n = e.length, o = n - 1, r = this.anchor;
    let i = this.focus;
    var a = e[0];
    let l = e[o], [u, c] = Da(this);
    return n === 0 ? [] : n === 1 ? D(a) && !this.isCollapsed() ? (e = u > c ? c : u, o = a.splitText(e, u > c ? u : c), e = e === 0 ? o[0] : o[1], e != null ? [e] : []) : [a] : (n = r.isBefore(i), D(a) && (r = n ? u : c, r === a.getTextContentSize() ? e.shift() : r !== 0 && ([, a] = a.splitText(r), e[0] = a)), D(l) && (a = l.getTextContent().length, n = n ? c : u, n === 0 ? e.pop() : n !== a && ([l] = l.splitText(n), e[o] = l)), e);
  }
  modify(e, n, o) {
    var r = this.focus, i = this.anchor, a = e === "move", l = ya(r, n);
    if (Z(l) && !l.isIsolated()) a && l.isKeyboardSelectable() ? (n = Ia(), n.add(l.__key), et(n)) : (e = n ? l.getPreviousSibling() : l.getNextSibling(), D(e) ? (l = e.__key, n = n ? e.getTextContent().length : 0, r.set(l, n, "text"), a && i.set(l, n, "text")) : (o = l.getParentOrThrow(), C(e) ? (o = e.__key, l = n ? e.getChildrenSize() : 0) : (l = l.getIndexWithinParent(), o = o.__key, n || l++), r.set(o, l, "element"), a && i.set(o, l, "element")));
    else if (i = J(), r = it(i._window)) {
      var u = i._blockCursorElement, c = i._rootElement;
      if (c === null || u === null || !C(l) || l.isInline() || l.canBeEmpty() || ka(u, i, c), r.modify(e, n ? "backward" : "forward", o), 0 < r.rangeCount && (l = r.getRangeAt(0), i = this.anchor.getNode(), i = De(i) ? i : nm(i), this.applyDOMRange(l), this.dirty = !0, !a)) {
        for (a = this.getNodes(), e = [], o = !1, u = 0; u < a.length; u++) c = a[u], Or(c, i) ? e.push(c) : o = !0;
        o && 0 < e.length && (n ? (n = e[0], C(n) ? n.selectStart() : n.getParentOrThrow().selectStart()) : (n = e[e.length - 1], C(n) ? n.selectEnd() : n.getParentOrThrow().selectEnd())), (r.anchorNode !== l.startContainer || r.anchorOffset !== l.startOffset) && (n = this.focus, a = this.anchor, r = a.key, l = a.offset, i = a.type, xt(a, n.key, n.offset, n.type), xt(n, r, l, i), this._cachedNodes = null);
      }
    }
  }
  deleteCharacter(e) {
    let n = this.isCollapsed();
    if (this.isCollapsed()) {
      var o = this.anchor, r = this.focus, i = o.getNode();
      if (!e && (o.type === "element" && C(i) && o.offset === i.getChildrenSize() || o.type === "text" && o.offset === i.getTextContentSize())) {
        var a = i.getParent();
        if (a = i.getNextSibling() || (a === null ? null : a.getNextSibling()), C(a) && a.isShadowRoot()) return;
      }
      if (a = ya(r, e), Z(a) && !a.isIsolated()) {
        a.isKeyboardSelectable() && C(i) && i.getChildrenSize() === 0 ? (i.remove(), e = Ia(), e.add(a.__key), et(e)) : (a.remove(), J().dispatchCommand(oi, void 0));
        return;
      }
      if (!e && C(a) && C(i) && i.isEmpty()) {
        i.remove(), a.selectStart();
        return;
      }
      if (this.modify("extend", e, "character"), this.isCollapsed()) {
        if (e && o.offset === 0 && (o.type === "element" ? o.getNode() : o.getNode().getParentOrThrow()).collapseAtStart(this)) return;
      } else {
        if (a = r.type === "text" ? r.getNode() : null, i = o.type === "text" ? o.getNode() : null, a !== null && a.isSegmented()) {
          if (o = r.offset, r = a.getTextContentSize(), a.is(i) || e && o !== r || !e && o !== 0) {
            Eu(a, e, o);
            return;
          }
        } else if (i !== null && i.isSegmented() && (o = o.offset, r = i.getTextContentSize(), i.is(a) || e && o !== 0 || !e && o !== r)) {
          Eu(i, e, o);
          return;
        }
        if (i = this.anchor, a = this.focus, o = i.getNode(), r = a.getNode(), o === r && i.type === "text" && a.type === "text") {
          var l = i.offset, u = a.offset;
          let c = l < u;
          r = c ? l : u, u = c ? u : l, l = u - 1, r !== l && (o = o.getTextContent().slice(r, u), Zp(o) || (e ? a.offset = l : i.offset = l));
        }
      }
    }
    this.removeText(), e && !n && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0 && (e = this.anchor.getNode(), e.isEmpty() && De(e.getParent()) && e.getIndexWithinParent() === 0 && e.collapseAtStart(this));
  }
  deleteLine(e) {
    this.isCollapsed() && (this.anchor.type === "text" && this.modify("extend", e, "lineboundary"), (e ? this.focus : this.anchor).offset === 0 && this.modify("extend", e, "character")), this.removeText();
  }
  deleteWord(e) {
    this.isCollapsed() && this.modify("extend", e, "word"), this.removeText();
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
function Yo(t) {
  return t instanceof pi;
}
function Tu(t) {
  let e = t.offset;
  return t.type === "text" ? e : (t = t.getNode(), e === t.getChildrenSize() ? t.getTextContent().length : 0);
}
function Da(t) {
  if (t = t.getStartEndPoints(), t === null) return [0, 0];
  let [e, n] = t;
  return e.type === "element" && n.type === "element" && e.key === n.key && e.offset === n.offset ? [0, 0] : [Tu(e), Tu(n)];
}
function Eu(t, e, n) {
  let o = t.getTextContent().split(/(?=\s)/g), r = o.length, i = 0, a = 0;
  for (let l = 0; l < r; l++) {
    let u = o[l], c = l === r - 1;
    if (a = i, i += u.length, e && i === n || i > n || c) {
      o.splice(l, 1), c && (a = void 0);
      break;
    }
  }
  e = o.join("").trim(), e === "" ? t.remove() : (t.setTextContent(e), t.select(a, a));
}
function Ou(t, e, n, o) {
  var r = e;
  if (t.nodeType === 1) {
    let l = !1;
    var i = t.childNodes, a = i.length;
    r === a && (l = !0, r = a - 1);
    let u = i[r];
    if (a = !1, u === o._blockCursorElement ? (u = i[r + 1], a = !0) : o._blockCursorElement !== null && r--, o = Sn(u), D(o)) r = l ? o.getTextContentSize() : 0;
    else {
      if (i = Sn(t), i === null) return null;
      if (C(i) ? (t = i.getChildAtIndex(r), (e = C(t)) && (e = t.getParent(), e = n === null || e === null || !e.canBeEmpty() || e !== n.getNode()), e && (n = l ? t.getLastDescendant() : t.getFirstDescendant(), n === null ? (i = t, r = 0) : (t = n, i = C(t) ? t : t.getParentOrThrow())), D(t) ? (o = t, i = null, r = l ? t.getTextContentSize() : 0) : t !== i && l && !a && r++) : (r = i.getIndexWithinParent(), r = e === 0 && Z(i) && Sn(t) === i ? r : r + 1, i = i.getParentOrThrow()), C(i)) return He(i.__key, r, "element");
    }
  } else o = Sn(t);
  return D(o) ? He(o.__key, r, "text") : null;
}
function $u(t, e, n) {
  var o = t.offset, r = t.getNode();
  o === 0 ? (o = r.getPreviousSibling(), r = r.getParent(), e ? (n || !e) && o === null && C(r) && r.isInline() && (e = r.getPreviousSibling(), D(e) && (t.key = e.__key, t.offset = e.getTextContent().length)) : C(o) && !n && o.isInline() ? (t.key = o.__key, t.offset = o.getChildrenSize(), t.type = "element") : D(o) && (t.key = o.__key, t.offset = o.getTextContent().length)) : o === r.getTextContent().length && (o = r.getNextSibling(), r = r.getParent(), e && C(o) && o.isInline() ? (t.key = o.__key, t.offset = 0, t.type = "element") : (n || e) && o === null && C(r) && r.isInline() && !r.canInsertTextAfter() && (e = r.getNextSibling(), D(e) && (t.key = e.__key, t.offset = 0)));
}
function km(t, e, n) {
  if (t.type === "text" && e.type === "text") {
    var o = t.isBefore(e);
    let r = t.is(e);
    $u(t, o, r), $u(e, !o, r), r && (e.key = t.key, e.offset = t.offset, e.type = t.type), o = J(), o.isComposing() && o._compositionKey !== t.key && M(n) && (o = n.anchor, n = n.focus, xt(t, o.key, o.offset, o.type), xt(e, n.key, n.offset, n.type));
  }
}
function jm(t, e, n, o, r, i) {
  return t === null || n === null || !Go(r, t, n) || (e = Ou(t, e, M(i) ? i.anchor : null, r), e === null) || (o = Ou(n, o, M(i) ? i.focus : null, r), o === null || e.type === "element" && o.type === "element" && (t = Sn(t), n = Sn(n), Z(t) && Z(n))) ? null : (km(e, o, i), [e, o]);
}
function bm(t, e, n, o, r, i) {
  let a = at();
  return t = new Lt(He(t, e, r), He(n, o, i), 0, ""), t.dirty = !0, a._selection = t;
}
function Ia() {
  return new pi(/* @__PURE__ */ new Set());
}
function G0(t) {
  let e = t.getEditorState()._selection, n = it(t._window);
  return M(e) || e == null ? qs(e, n, t, null) : e.clone();
}
function qs(t, e, n, o) {
  var r = n._window;
  if (r === null) return null;
  var i = (r = o || r.event) ? r.type : void 0;
  o = i === "selectionchange", r = !fa && (o || i === "beforeinput" || i === "compositionstart" || i === "compositionend" || i === "click" && r && r.detail === 3 || i === "drop" || i === void 0);
  let a;
  if (!M(t) || r) {
    if (e === null) return null;
    if (r = e.anchorNode, i = e.focusNode, a = e.anchorOffset, e = e.focusOffset, o && M(t) && !Go(n, r, i)) return t.clone();
  } else return t.clone();
  if (n = jm(r, a, i, e, n, t), n === null) return null;
  let [l, u] = n;
  return new Lt(l, u, M(t) ? t.format : 0, M(t) ? t.style : "");
}
function W() {
  return at()._selection;
}
function Zn() {
  return J()._editorState._selection;
}
function Dr(t, e, n, o = 1) {
  var r = t.anchor, i = t.focus, a = r.getNode(), l = i.getNode();
  if (e.is(a) || e.is(l)) {
    if (a = e.__key, t.isCollapsed())
      e = r.offset, (n <= e && 0 < o || n < e && 0 > o) && (n = Math.max(0, e + o), r.set(a, n, "element"), i.set(a, n, "element"), Du(t));
    else {
      let c = t.isBackward();
      l = c ? i : r;
      var u = l.getNode();
      r = c ? r : i, i = r.getNode(), e.is(u) && (u = l.offset, (n <= u && 0 < o || n < u && 0 > o) && l.set(a, Math.max(0, u + o), "element")), e.is(i) && (e = r.offset, (n <= e && 0 < o || n < e && 0 > o) && r.set(a, Math.max(0, e + o), "element"));
    }
    Du(t);
  }
}
function Du(t) {
  var e = t.anchor, n = e.offset;
  let o = t.focus;
  var r = o.offset, i = e.getNode(), a = o.getNode();
  if (t.isCollapsed()) C(i) && (a = i.getChildrenSize(), a = (r = n >= a) ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(n), D(a) && (n = 0, r && (n = a.getTextContentSize()), e.set(a.__key, n, "text"), o.set(a.__key, n, "text")));
  else {
    if (C(i)) {
      let l = i.getChildrenSize();
      n = (t = n >= l) ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(n), D(n) && (i = 0, t && (i = n.getTextContentSize()), e.set(n.__key, i, "text"));
    }
    C(a) && (n = a.getChildrenSize(), r = (e = r >= n) ? a.getChildAtIndex(n - 1) : a.getChildAtIndex(r), D(r) && (a = 0, e && (a = r.getTextContentSize()), o.set(r.__key, a, "text")));
  }
}
function K0(t, e) {
  if (e = e.getEditorState()._selection, t = t._selection, M(t)) {
    var n = t.anchor;
    let o = t.focus, r;
    n.type === "text" && (r = n.getNode(), r.selectionTransform(e, t)), o.type === "text" && (n = o.getNode(), r !== n && n.selectionTransform(e, t));
  }
}
function Ir(t, e, n, o, r) {
  let i = null, a = 0, l = null;
  o !== null ? (i = o.__key, D(o) ? (a = o.getTextContentSize(), l = "text") : C(o) && (a = o.getChildrenSize(), l = "element")) : r !== null && (i = r.__key, D(r) ? l = "text" : C(r) && (l = "element")), i !== null && l !== null ? t.set(i, a, l) : (a = e.getIndexWithinParent(), a === -1 && (a = n.getChildrenSize()), t.set(n.__key, a, "element"));
}
function Iu(t, e, n, o, r) {
  t.type === "text" ? (t.key = n, e || (t.offset += r)) : t.offset > o.getIndexWithinParent() && --t.offset;
}
function Yi(t) {
  t.isCollapsed() || t.removeText();
  var e = t.anchor;
  for (t = e.getNode(), e = e.offset; !xn(t); ) [t, e] = J0(t, e);
  return e;
}
function J0(t, e) {
  var n = t.getParent();
  if (!n) return n = ht(), Ie().append(n), n.select(), [Ie(), 0];
  if (D(t)) {
    var o = t.splitText(e);
    return o.length === 0 ? [n, t.getIndexWithinParent()] : (t = e === 0 ? 0 : 1, t = o[0].getIndexWithinParent() + t, [n, t]);
  }
  return !C(t) || e === 0 ? [n, t.getIndexWithinParent()] : ((o = t.getChildAtIndex(e)) && (e = new Lt(He(t.__key, e, "element"), He(t.__key, e, "element"), 0, ""), (e = t.insertNewAfter(e)) && e.append(o, ...o.getNextSiblings())), [n, t.getIndexWithinParent() + 1]);
}
function Y0(t) {
  let e = ht(), n = null;
  for (let o = 0; o < t.length; o++) {
    let r = t[o], i = an(r);
    if (i || Z(r) && r.isInline() || C(r) && r.isInline() || D(r) || r.isParentRequired()) {
      if (n === null && (n = r.createParentElementNode(), e.append(n), i)) continue;
      n !== null && n.append(r);
    } else e.append(r), n = null;
  }
  return e;
}
let ce = null, de = null, Ee = !1, Xi = !1, zo = 0, zu = { characterData: !0, childList: !0, subtree: !0 };
function eo() {
  return Ee || ce !== null && ce._readOnly;
}
function we() {
  Ee && E(13);
}
function at() {
  return ce === null && E(15), ce;
}
function J() {
  return de === null && E(16), de;
}
function Nu(t, e, n) {
  var o = e.__type;
  let r = t._nodes.get(o);
  for (r === void 0 && E(30, o), t = n.get(o), t === void 0 && (t = Array.from(r.transforms), n.set(o, t)), n = t.length, o = 0; o < n && (t[o](e), e.isAttached()); o++) ;
}
function X0(t, e) {
  e = e._dirtyLeaves, t = t._nodeMap;
  for (let n of e) e = t.get(n), D(e) && e.isAttached() && e.isSimpleText() && !e.isUnmergeable() && Kp(e);
}
function Q0(t, e) {
  let n = e._dirtyLeaves, o = e._dirtyElements;
  t = t._nodeMap;
  let r = Ct(), i = /* @__PURE__ */ new Map();
  var a = n;
  let l = a.size;
  for (var u = o, c = u.size; 0 < l || 0 < c; ) {
    if (0 < l) {
      e._dirtyLeaves = /* @__PURE__ */ new Set();
      for (let d of a) a = t.get(d), D(a) && a.isAttached() && a.isSimpleText() && !a.isUnmergeable() && Kp(a), a !== void 0 && a !== void 0 && a.__key !== r && a.isAttached() && Nu(e, a, i), n.add(d);
      if (a = e._dirtyLeaves, l = a.size, 0 < l) {
        zo++;
        continue;
      }
    }
    e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map();
    for (let d of u) u = d[0], c = d[1], (u === "root" || c) && (a = t.get(u), a !== void 0 && a !== void 0 && a.__key !== r && a.isAttached() && Nu(e, a, i), o.set(u, c));
    a = e._dirtyLeaves, l = a.size, u = e._dirtyElements, c = u.size, zo++;
  }
  e._dirtyLeaves = n, e._dirtyElements = o;
}
function Bs(t, e) {
  var n = t.type, o = e.get(n);
  if (o === void 0 && E(17, n), n = o.klass, t.type !== n.getType() && E(18, n.name), n = n.importJSON(t), t = t.children, C(n) && Array.isArray(t)) for (o = 0; o < t.length; o++) {
    let r = Bs(t[o], e);
    n.append(r);
  }
  return n;
}
function Ru(t, e) {
  let n = ce, o = Ee, r = de;
  ce = t, Ee = !0, de = null;
  try {
    return e();
  } finally {
    ce = n, Ee = o, de = r;
  }
}
function tn(t, e) {
  let n = t._pendingEditorState, o = t._rootElement, r = t._headless || o === null;
  if (n !== null) {
    var i = t._editorState, a = i._selection, l = n._selection, u = t._dirtyType !== 0, c = ce, d = Ee, p = de, h = t._updating, m = t._observer, v = null;
    if (t._pendingEditorState = null, t._editorState = n, !r && u && m !== null) {
      de = t, ce = n, Ee = !1, t._updating = !0;
      try {
        let Y = t._dirtyType, ke = t._dirtyElements, je = t._dirtyLeaves;
        m.disconnect();
        var g = Y, k = ke, j = je;
        xe = pt = ie = "", im = g === 2, mr = null, ve = t, Dt = t._config, $o = t._nodes, ui = ve._listeners.mutation, ja = k, ba = j, rn = i._nodeMap, It = n._nodeMap, Ls = n._readOnly, xa = new Map(t._keyToDOMMap);
        let We = /* @__PURE__ */ new Map();
        Do = We, po("root", null), Do = xa = Dt = It = rn = ba = ja = $o = ve = void 0, v = We;
      } catch (Y) {
        if (Y instanceof Error && t._onError(Y), Xi) throw Y;
        Cm(t, null, o, n), Gp(t), t._dirtyType = 2, Xi = !0, tn(t, i), Xi = !1;
        return;
      } finally {
        m.observe(o, zu), t._updating = h, ce = c, Ee = d, de = p;
      }
    }
    n._readOnly || (n._readOnly = !0);
    var S = t._dirtyLeaves, w = t._dirtyElements, $ = t._normalizedNodes, B = t._updateTags, O = t._deferred;
    u && (t._dirtyType = 0, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), t._normalizedNodes = /* @__PURE__ */ new Set(), t._updateTags = /* @__PURE__ */ new Set());
    var A = t._decorators, N = t._pendingDecorators || A, re = n._nodeMap, I;
    for (I in N) re.has(I) || (N === A && (N = Qp(t)), delete N[I]);
    var R = r ? null : it(t._window);
    if (t._editable && R !== null && (u || l === null || l.dirty)) {
      de = t, ce = n;
      try {
        if (m !== null && m.disconnect(), u || l === null || l.dirty) {
          let Y = t._blockCursorElement;
          Y !== null && ka(Y, t, o);
          e: {
            let ke = R.anchorNode, je = R.focusNode, We = R.anchorOffset, uo = R.focusOffset, Re = document.activeElement;
            if (!(B.has("collaboration") && Re !== o || Re !== null && Ns(Re))) if (M(l)) {
              var Oe = l.anchor, lt = l.focus, ro = Oe.key, io = lt.key, ao = Er(t, ro), so = Er(t, io), vt = Oe.offset, zl = lt.offset, Ci = l.format, _i = l.style, Nl = l.isCollapsed(), lo = ao, Zo = so, Ti = !1;
              if (Oe.type === "text") {
                lo = Cr(ao);
                let Pe = Oe.getNode();
                Ti = Pe.getFormat() !== Ci || Pe.getStyle() !== _i;
              } else M(a) && a.anchor.type === "text" && (Ti = !0);
              if (lt.type === "text" && (Zo = Cr(so)), lo !== null && Zo !== null) {
                if (Nl && (a === null || Ti || M(a) && (a.format !== Ci || a.style !== _i))) {
                  var rf = performance.now();
                  mm = [Ci, _i, vt, ro, rf];
                }
                if (We === vt && uo === zl && ke === lo && je === Zo && (R.type !== "Range" || !Nl) && (Re !== null && o.contains(Re) || o.focus({ preventScroll: !0 }), Oe.type !== "element")) break e;
                try {
                  R.setBaseAndExtent(lo, vt, Zo, zl);
                } catch {
                }
                if (!B.has("skip-scroll-into-view") && l.isCollapsed() && o !== null && o === document.activeElement) {
                  let Pe = l instanceof Lt && l.anchor.type === "element" ? lo.childNodes[vt] || null : 0 < R.rangeCount ? R.getRangeAt(0) : null;
                  if (Pe !== null) {
                    let Ae;
                    if (Pe instanceof Text) {
                      let $e = document.createRange();
                      $e.selectNode(Pe), Ae = $e.getBoundingClientRect();
                    } else Ae = Pe.getBoundingClientRect();
                    let kt = o.ownerDocument, Ut = kt.defaultView;
                    if (Ut !== null) for (var { top: Ei, bottom: Oi } = Ae, er, tr, yt = o; yt !== null; ) {
                      let $e = yt === kt.body;
                      if ($e) er = 0, tr = si(t).innerHeight;
                      else {
                        let nr = yt.getBoundingClientRect();
                        er = nr.top, tr = nr.bottom;
                      }
                      let Vt = 0;
                      if (Ei < er ? Vt = -(er - Ei) : Oi > tr && (Vt = Oi - tr), Vt !== 0) if ($e) Ut.scrollBy(0, Vt);
                      else {
                        let nr = yt.scrollTop;
                        yt.scrollTop += Vt;
                        let Al = yt.scrollTop - nr;
                        Ei -= Al, Oi -= Al;
                      }
                      if ($e) break;
                      yt = ai(yt);
                    }
                  }
                }
                Ta = !0;
              }
            } else a !== null && Go(t, ke, je) && R.removeAllRanges();
          }
        }
        e: {
          let Y = t._blockCursorElement;
          if (M(l) && l.isCollapsed() && l.anchor.type === "element" && o.contains(document.activeElement)) {
            let ke = l.anchor, je = ke.getNode(), We = ke.offset, uo = je.getChildrenSize(), Re = !1, Pe = null;
            if (We === uo) {
              let Ae = je.getChildAtIndex(We - 1);
              Bi(Ae) && (Re = !0);
            } else {
              let Ae = je.getChildAtIndex(We);
              if (Bi(Ae)) {
                let kt = Ae.getPreviousSibling();
                (kt === null || Bi(kt)) && (Re = !0, Pe = t.getElementByKey(Ae.__key));
              }
            }
            if (Re) {
              let Ae = t.getElementByKey(je.__key);
              if (Y === null) {
                let kt = t._config.theme, Ut = document.createElement("div");
                Ut.contentEditable = "false", Ut.setAttribute("data-lexical-cursor", "true");
                let $e = kt.blockCursor;
                if ($e !== void 0) {
                  if (typeof $e == "string") {
                    let Vt = $e.split(" ");
                    $e = kt.blockCursor = Vt;
                  }
                  $e !== void 0 && Ut.classList.add(...$e);
                }
                t._blockCursorElement = Y = Ut;
              }
              o.style.caretColor = "transparent", Pe === null ? Ae.appendChild(Y) : Ae.insertBefore(Y, Pe);
              break e;
            }
          }
          Y !== null && ka(Y, t, o);
        }
        m !== null && m.observe(o, zu);
      } finally {
        de = p, ce = c;
      }
    }
    if (v !== null) {
      var af = v;
      let Y = Array.from(t._listeners.mutation), ke = Y.length;
      for (let je = 0; je < ke; je++) {
        let [We, uo] = Y[je], Re = af.get(uo);
        Re !== void 0 && We(Re, { dirtyLeaves: S, prevEditorState: i, updateTags: B });
      }
    }
    M(l) || l === null || a !== null && a.is(l) || t.dispatchCommand(oi, void 0);
    var $i = t._pendingDecorators;
    $i !== null && (t._decorators = $i, t._pendingDecorators = null, xo("decorator", t, !0, $i));
    var sf = vu(e || i), Rl = vu(n);
    if (sf !== Rl && xo("textcontent", t, !0, Rl), xo("update", t, !0, { dirtyElements: w, dirtyLeaves: S, editorState: n, normalizedNodes: $, prevEditorState: e || i, tags: B }), t._deferred = [], O.length !== 0) {
      let Y = t._updating;
      t._updating = !0;
      try {
        for (let ke = 0; ke < O.length; ke++) O[ke]();
      } finally {
        t._updating = Y;
      }
    }
    var Pl = t._updates;
    if (Pl.length !== 0) {
      let Y = Pl.shift();
      if (Y) {
        let [ke, je] = Y;
        xm(t, ke, je);
      }
    }
  }
}
function xo(t, e, n, ...o) {
  let r = e._updating;
  e._updating = n;
  try {
    let i = Array.from(e._listeners[t]);
    for (t = 0; t < i.length; t++) i[t].apply(null, o);
  } finally {
    e._updating = r;
  }
}
function T(t, e, n) {
  if (t._updating === !1 || de !== t) {
    let i = !1;
    return t.update(() => {
      i = T(t, e, n);
    }), i;
  }
  let o = Ps(t);
  for (let i = 4; 0 <= i; i--) for (let a = 0; a < o.length; a++) {
    var r = o[a]._commands.get(e);
    if (r !== void 0 && (r = r[i], r !== void 0)) {
      r = Array.from(r);
      let l = r.length;
      for (let u = 0; u < l; u++) if (r[u](n, t) === !0) return !0;
    }
  }
  return !1;
}
function Pu(t, e) {
  let n = t._updates;
  for (e = e || !1; n.length !== 0; ) {
    var o = n.shift();
    if (o) {
      let [r, i] = o, a;
      i !== void 0 && (o = i.onUpdate, a = i.tag, i.skipTransforms && (e = !0), o && t._deferred.push(o), a && t._updateTags.add(a)), r();
    }
  }
  return e;
}
function xm(t, e, n) {
  let o = t._updateTags;
  var r, i = r = !1;
  if (n !== void 0) {
    var a = n.onUpdate;
    r = n.tag, r != null && o.add(r), r = n.skipTransforms || !1, i = n.discrete || !1;
  }
  a && t._deferred.push(a), n = t._editorState, a = t._pendingEditorState;
  let l = !1;
  (a === null || a._readOnly) && (a = t._pendingEditorState = new hi(new Map((a || n)._nodeMap)), l = !0), a._flushSync = i, i = ce;
  let u = Ee, c = de, d = t._updating;
  ce = a, Ee = !1, t._updating = !0, de = t;
  try {
    l && (t._headless ? n._selection !== null && (a._selection = n._selection.clone()) : a._selection = G0(t));
    let p = t._compositionKey;
    e(), r = Pu(t, r), K0(a, t), t._dirtyType !== 0 && (r ? X0(a, t) : Q0(a, t), Pu(t), O0(n, a, t._dirtyLeaves, t._dirtyElements)), p !== t._compositionKey && (a._flushSync = !0);
    let h = a._selection;
    if (M(h)) {
      let m = a._nodeMap, v = h.focus.key;
      m.get(h.anchor.key) !== void 0 && m.get(v) !== void 0 || E(19);
    } else Yo(h) && h._nodes.size === 0 && (a._selection = null);
  } catch (p) {
    p instanceof Error && t._onError(p), t._pendingEditorState = n, t._dirtyType = 2, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements.clear(), tn(t);
    return;
  } finally {
    ce = i, Ee = u, de = c, t._updating = d, zo = 0;
  }
  t._dirtyType !== 0 || Z0(a, t) ? a._flushSync ? (a._flushSync = !1, tn(t)) : l && _0(() => {
    tn(t);
  }) : (a._flushSync = !1, l && (o.clear(), t._deferred = [], t._pendingEditorState = null));
}
function ze(t, e, n) {
  t._updating ? t._updates.push([e, n]) : xm(t, e, n);
}
class wm extends ci {
  constructor(e) {
    super(e);
  }
  decorate() {
    E(47);
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
function Z(t) {
  return t instanceof wm;
}
class mi extends ci {
  constructor(e) {
    super(e), this.__last = this.__first = null, this.__indent = this.__format = this.__size = 0, this.__dir = null;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    let e = this.getFormat();
    return j0[e] || "";
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    let e = [], n = this.getFirstChild();
    for (; n !== null; ) e.push(n), n = n.getNextSibling();
    return e;
  }
  getChildrenKeys() {
    let e = [], n = this.getFirstChild();
    for (; n !== null; ) e.push(n.__key), n = n.getNextSibling();
    return e;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    let e = J()._dirtyElements;
    return e !== null && e.has(this.__key);
  }
  isLastChild() {
    let e = this.getLatest(), n = this.getParentOrThrow().getLastChild();
    return n !== null && n.is(e);
  }
  getAllTextNodes() {
    let e = [], n = this.getFirstChild();
    for (; n !== null; ) {
      if (D(n) && e.push(n), C(n)) {
        let o = n.getAllTextNodes();
        e.push(...o);
      }
      n = n.getNextSibling();
    }
    return e;
  }
  getFirstDescendant() {
    let e = this.getFirstChild();
    for (; e !== null; ) {
      if (C(e)) {
        let n = e.getFirstChild();
        if (n !== null) {
          e = n;
          continue;
        }
      }
      break;
    }
    return e;
  }
  getLastDescendant() {
    let e = this.getLastChild();
    for (; e !== null; ) {
      if (C(e)) {
        let n = e.getLastChild();
        if (n !== null) {
          e = n;
          continue;
        }
      }
      break;
    }
    return e;
  }
  getDescendantByIndex(e) {
    let n = this.getChildren(), o = n.length;
    return e >= o ? (e = n[o - 1], C(e) && e.getLastDescendant() || e || null) : (e = n[e], C(e) && e.getFirstDescendant() || e || null);
  }
  getFirstChild() {
    let e = this.getLatest().__first;
    return e === null ? null : ge(e);
  }
  getFirstChildOrThrow() {
    let e = this.getFirstChild();
    return e === null && E(45, this.__key), e;
  }
  getLastChild() {
    let e = this.getLatest().__last;
    return e === null ? null : ge(e);
  }
  getLastChildOrThrow() {
    let e = this.getLastChild();
    return e === null && E(96, this.__key), e;
  }
  getChildAtIndex(e) {
    var n = this.getChildrenSize();
    let o;
    if (e < n / 2) {
      for (o = this.getFirstChild(), n = 0; o !== null && n <= e; ) {
        if (n === e) return o;
        o = o.getNextSibling(), n++;
      }
      return null;
    }
    for (o = this.getLastChild(), --n; o !== null && n >= e; ) {
      if (n === e) return o;
      o = o.getPreviousSibling(), n--;
    }
    return null;
  }
  getTextContent() {
    let e = "", n = this.getChildren(), o = n.length;
    for (let r = 0; r < o; r++) {
      let i = n[r];
      e += i.getTextContent(), C(i) && r !== o - 1 && !i.isInline() && (e += `

`);
    }
    return e;
  }
  getTextContentSize() {
    let e = 0, n = this.getChildren(), o = n.length;
    for (let r = 0; r < o; r++) {
      let i = n[r];
      e += i.getTextContentSize(), C(i) && r !== o - 1 && !i.isInline() && (e += 2);
    }
    return e;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  hasFormat(e) {
    return e !== "" ? (e = mu[e], (this.getFormat() & e) !== 0) : !1;
  }
  select(e, n) {
    we();
    let o = W(), r = e, i = n;
    var a = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (e === 0 && n === 0) {
        if (e = this.getFirstChild(), D(e) || C(e)) return e.select(0, 0);
      } else if (!(e !== void 0 && e !== a || n !== void 0 && n !== a) && (e = this.getLastChild(), D(e) || C(e))) return e.select();
    }
    if (r === void 0 && (r = a), i === void 0 && (i = a), a = this.__key, M(o)) o.anchor.set(a, r, "element"), o.focus.set(a, i, "element"), o.dirty = !0;
    else return bm(a, r, a, i, "element", "element");
    return o;
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
    return this.getChildren().forEach((n) => n.remove()), e;
  }
  append(...e) {
    return this.splice(
      this.getChildrenSize(),
      0,
      e
    );
  }
  setDirection(e) {
    let n = this.getWritable();
    return n.__dir = e, n;
  }
  setFormat(e) {
    return this.getWritable().__format = e !== "" ? mu[e] : 0, this;
  }
  setIndent(e) {
    return this.getWritable().__indent = e, this;
  }
  splice(e, n, o) {
    let r = o.length, i = this.getChildrenSize(), a = this.getWritable(), l = a.__key;
    var u = [], c = [];
    let d = this.getChildAtIndex(e + n), p = null, h = i - n + r;
    if (e !== 0) if (e === i) p = this.getLastChild();
    else {
      var m = this.getChildAtIndex(e);
      m !== null && (p = m.getPreviousSibling());
    }
    if (0 < n) {
      var v = p === null ? this.getFirstChild() : p.getNextSibling();
      for (m = 0; m < n; m++) {
        v === null && E(100);
        var g = v.getNextSibling(), k = v.__key;
        v = v.getWritable(), en(v), c.push(k), v = g;
      }
    }
    for (m = p, g = 0; g < r; g++) {
      k = o[g], m !== null && k.is(m) && (p = m = m.getPreviousSibling()), v = k.getWritable(), v.__parent === l && h--, en(v);
      let j = k.__key;
      m === null ? (a.__first = j, v.__prev = null) : (m = m.getWritable(), m.__next = j, v.__prev = m.__key), k.__key === l && E(76), v.__parent = l, u.push(j), m = k;
    }
    if (e + n === i ? m !== null && (m.getWritable().__next = null, a.__last = m.__key) : d !== null && (e = d.getWritable(), m !== null ? (n = m.getWritable(), e.__prev = m.__key, n.__next = d.__key) : e.__prev = null), a.__size = h, c.length && (e = W(), M(e))) {
      c = new Set(c), u = new Set(u);
      let { anchor: j, focus: S } = e;
      Au(j, c, u) && Ir(j, j.getNode(), this, p, d), Au(S, c, u) && Ir(S, S.getNode(), this, p, d), h !== 0 || this.canBeEmpty() || $t(this) || this.remove();
    }
    return a;
  }
  exportJSON() {
    return { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), type: "element", version: 1 };
  }
  insertNewAfter() {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart() {
    return !1;
  }
  excludeFromCopy() {
    return !1;
  }
  canExtractContents() {
    return !0;
  }
  canReplaceWith() {
    return !0;
  }
  canInsertAfter() {
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
  canMergeWith() {
    return !1;
  }
  extractWithChild() {
    return !1;
  }
}
function C(t) {
  return t instanceof mi;
}
function Au(t, e, n) {
  for (t = t.getNode(); t; ) {
    let o = t.__key;
    if (e.has(o) && !n.has(o)) return !0;
    t = t.getParent();
  }
  return !1;
}
class to extends mi {
  static getType() {
    return "root";
  }
  static clone() {
    return new to();
  }
  constructor() {
    super("root"), this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    E(51);
  }
  getTextContent() {
    let e = this.__cachedText;
    return !eo() && J()._dirtyType !== 0 || e === null ? super.getTextContent() : e;
  }
  remove() {
    E(52);
  }
  replace() {
    E(53);
  }
  insertBefore() {
    E(54);
  }
  insertAfter() {
    E(55);
  }
  updateDOM() {
    return !1;
  }
  append(...e) {
    for (let n = 0; n < e.length; n++) {
      let o = e[n];
      C(o) || Z(o) || E(56);
    }
    return super.append(...e);
  }
  static importJSON(e) {
    let n = Ie();
    return n.setFormat(e.format), n.setIndent(e.indent), n.setDirection(e.direction), n;
  }
  exportJSON() {
    return { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), type: "root", version: 1 };
  }
  collapseAtStart() {
    return !0;
  }
}
function De(t) {
  return t instanceof to;
}
function Z0(t, e) {
  if (e = e.getEditorState()._selection, t = t._selection, t !== null) {
    if (t.dirty || !t.is(e)) return !0;
  } else if (e !== null) return !0;
  return !1;
}
function Hs() {
  return new hi(/* @__PURE__ */ new Map([["root", new to()]]));
}
function Sm(t) {
  let e = t.exportJSON();
  var n = t.constructor;
  if (e.type !== n.getType() && E(130, n.name), C(t)) {
    let o = e.children;
    for (Array.isArray(o) || E(59, n.name), t = t.getChildren(), n = 0; n < t.length; n++) {
      let r = Sm(t[n]);
      o.push(r);
    }
  }
  return e;
}
class hi {
  constructor(e, n) {
    this._nodeMap = e, this._selection = n || null, this._readOnly = this._flushSync = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(e) {
    return Ru(this, e);
  }
  clone(e) {
    return e = new hi(this._nodeMap, e === void 0 ? this._selection : e), e._readOnly = !0, e;
  }
  toJSON() {
    return Ru(this, () => ({ root: Sm(Ie()) }));
  }
}
class no extends mi {
  static getType() {
    return "paragraph";
  }
  static clone(e) {
    return new no(e.__key);
  }
  createDOM(e) {
    let n = document.createElement("p");
    return e = ko(e.theme, "paragraph"), e !== void 0 && n.classList.add(...e), n;
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return { p: () => ({ conversion: ew, priority: 0 }) };
  }
  exportDOM(e) {
    if ({ element: e } = super.exportDOM(e), e && li(e)) {
      this.isEmpty() && e.append(document.createElement("br"));
      var n = this.getFormatType();
      e.style.textAlign = n, (n = this.getDirection()) && (e.dir = n), n = this.getIndent(), 0 < n && (e.style.textIndent = `${20 * n}px`);
    }
    return { element: e };
  }
  static importJSON(e) {
    let n = ht();
    return n.setFormat(e.format), n.setIndent(e.indent), n.setDirection(e.direction), n;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "paragraph", version: 1 };
  }
  insertNewAfter(e, n) {
    e = ht();
    let o = this.getDirection();
    return e.setDirection(o), this.insertAfter(e, n), e;
  }
  collapseAtStart() {
    let e = this.getChildren();
    if (e.length === 0 || D(e[0]) && e[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function ew(t) {
  let e = ht();
  return t.style && (e.setFormat(t.style.textAlign), t = parseInt(t.style.textIndent, 10) / 20, 0 < t && e.setIndent(t)), { node: e };
}
function ht() {
  return Jo(new no());
}
function Cm(t, e, n, o) {
  let r = t._keyToDOMMap;
  r.clear(), t._editorState = Hs(), t._pendingEditorState = o, t._compositionKey = null, t._dirtyType = 0, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements.clear(), t._normalizedNodes = /* @__PURE__ */ new Set(), t._updateTags = /* @__PURE__ */ new Set(), t._updates = [], t._blockCursorElement = null, o = t._observer, o !== null && (o.disconnect(), t._observer = null), e !== null && (e.textContent = ""), n !== null && (n.textContent = "", r.set("root", n));
}
function tw(t, e) {
  let n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = (i) => {
    Object.keys(i).forEach((a) => {
      let l = n.get(a);
      l === void 0 && (l = [], n.set(a, l)), l.push(i[a]);
    });
  };
  return t.forEach((i) => {
    i = i.klass.importDOM != null ? i.klass.importDOM.bind(i.klass) : null, i == null || o.has(i) || (o.add(i), i = i(), i !== null && r(i));
  }), e && r(e), n;
}
class nw {
  constructor(e, n, o, r, i, a, l) {
    this._parentEditor = n, this._rootElement = null, this._editorState = e, this._compositionKey = this._pendingEditorState = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = o, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = em(), this._onError = i, this._htmlConversions = a, this._editable = l, this._headless = n !== null && n._headless, this._blockCursorElement = this._window = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(e) {
    let n = this._listeners.update;
    return n.add(e), () => {
      n.delete(e);
    };
  }
  registerEditableListener(e) {
    let n = this._listeners.editable;
    return n.add(e), () => {
      n.delete(e);
    };
  }
  registerDecoratorListener(e) {
    let n = this._listeners.decorator;
    return n.add(e), () => {
      n.delete(e);
    };
  }
  registerTextContentListener(e) {
    let n = this._listeners.textcontent;
    return n.add(e), () => {
      n.delete(e);
    };
  }
  registerRootListener(e) {
    let n = this._listeners.root;
    return e(this._rootElement, null), n.add(e), () => {
      e(null, this._rootElement), n.delete(e);
    };
  }
  registerCommand(e, n, o) {
    o === void 0 && E(35);
    let r = this._commands;
    r.has(e) || r.set(e, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    let i = r.get(e);
    i === void 0 && E(36, String(e));
    let a = i[o];
    return a.add(n), () => {
      a.delete(n), i.every((l) => l.size === 0) && r.delete(e);
    };
  }
  registerMutationListener(e, n) {
    this._nodes.get(e.getType()) === void 0 && E(37, e.name);
    let o = this._listeners.mutation;
    return o.set(n, e), () => {
      o.delete(n);
    };
  }
  registerNodeTransformToKlass(e, n) {
    var o = e.getType();
    return o = this._nodes.get(o), o === void 0 && E(37, e.name), o.transforms.add(n), o;
  }
  registerNodeTransform(e, n) {
    var o = this.registerNodeTransformToKlass(e, n);
    let r = [o];
    return o = o.replaceWithKlass, o != null && (o = this.registerNodeTransformToKlass(o, n), r.push(o)), T0(this, e.getType()), () => {
      r.forEach((i) => i.transforms.delete(n));
    };
  }
  hasNode(e) {
    return this._nodes.has(e.getType());
  }
  hasNodes(e) {
    return e.every(this.hasNode.bind(this));
  }
  dispatchCommand(e, n) {
    return T(this, e, n);
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
    let n = this._rootElement;
    if (e !== n) {
      let a = ko(this._config.theme, "root");
      var o = this._pendingEditorState || this._editorState;
      if (this._rootElement = e, Cm(this, n, e, o), n !== null) {
        if (!this._config.disableEvents) {
          jo !== 0 && (jo--, jo === 0 && n.ownerDocument.removeEventListener("selectionchange", vm));
          var r = n.__lexicalEditor;
          if (r != null) {
            if (r._parentEditor !== null) {
              var i = Ps(r);
              i = i[i.length - 1]._key, On.get(i) === r && On.delete(i);
            } else On.delete(r._key);
            n.__lexicalEditor = null;
          }
          for (r = gm(n), i = 0; i < r.length; i++) r[i]();
          n.__lexicalEventHandles = [];
        }
        a != null && n.classList.remove(...a);
      }
      e !== null ? (o = (o = e.ownerDocument) && o.defaultView || null, r = e.style, r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute(
        "data-lexical-editor",
        "true"
      ), this._window = o, this._dirtyType = 2, Gp(this), this._updateTags.add("history-merge"), tn(this), this._config.disableEvents || M0(e, this), a != null && e.classList.add(...a)) : (this._editorState = o, this._window = this._pendingEditorState = null), xo("root", this, !1, e, n);
    }
  }
  getElementByKey(e) {
    return this._keyToDOMMap.get(e) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(e, n) {
    e.isEmpty() && E(38), Wp(this);
    let o = this._pendingEditorState, r = this._updateTags;
    n = n !== void 0 ? n.tag : null, o === null || o.isEmpty() || (n != null && r.add(n), tn(this)), this._pendingEditorState = e, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, n != null && r.add(n), tn(this);
  }
  parseEditorState(e, n) {
    e = typeof e == "string" ? JSON.parse(e) : e;
    let o = Hs(), r = ce, i = Ee, a = de, l = this._dirtyElements, u = this._dirtyLeaves, c = this._cloneNotNeeded, d = this._dirtyType;
    this._dirtyElements = /* @__PURE__ */ new Map(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyType = 0, ce = o, Ee = !1, de = this;
    try {
      Bs(e.root, this._nodes), n && n(), o._readOnly = !0;
    } catch (p) {
      p instanceof Error && this._onError(p);
    } finally {
      this._dirtyElements = l, this._dirtyLeaves = u, this._cloneNotNeeded = c, this._dirtyType = d, ce = r, Ee = i, de = a;
    }
    return o;
  }
  update(e, n) {
    ze(this, e, n);
  }
  focus(e, n = {}) {
    let o = this._rootElement;
    o !== null && (o.setAttribute("autocapitalize", "off"), ze(this, () => {
      let r = W(), i = Ie();
      r !== null ? r.dirty = !0 : i.getChildrenSize() !== 0 && (n.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd());
    }, { onUpdate: () => {
      o.removeAttribute("autocapitalize"), e && e();
    }, tag: "focus" }), this._pendingEditorState === null && o.removeAttribute("autocapitalize"));
  }
  blur() {
    var e = this._rootElement;
    e !== null && e.blur(), e = it(this._window), e !== null && e.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(e) {
    this._editable !== e && (this._editable = e, xo("editable", this, !0, e));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
x.$addUpdateTag = function(t) {
  we(), J()._updateTags.add(t);
};
x.$applyNodeReplacement = Jo;
x.$copyNode = om;
x.$createLineBreakNode = Rn;
x.$createNodeSelection = Ia;
x.$createParagraphNode = ht;
x.$createPoint = He;
x.$createRangeSelection = function() {
  let t = He("root", 0, "element"), e = He("root", 0, "element");
  return new Lt(t, e, 0, "");
};
x.$createTabNode = di;
x.$createTextNode = he;
x.$getAdjacentNode = ya;
x.$getCharacterOffsets = Da;
x.$getEditor = function() {
  return J();
};
x.$getNearestNodeFromDOMNode = Ko;
x.$getNearestRootOrShadowRoot = nm;
x.$getNodeByKey = ge;
x.$getPreviousSelection = Zn;
x.$getRoot = Ie;
x.$getSelection = W;
x.$getTextContent = function() {
  let t = W();
  return t === null ? "" : t.getTextContent();
};
x.$hasAncestor = Or;
x.$hasUpdateTag = function(t) {
  return J()._updateTags.has(t);
};
x.$insertNodes = function(t) {
  let e = W() || Zn();
  e === null && (e = Ie().selectEnd()), e.insertNodes(t);
};
x.$isBlockElementNode = function(t) {
  return C(t) && !t.isInline();
};
x.$isDecoratorNode = Z;
x.$isElementNode = C;
x.$isInlineElementOrDecoratorNode = function(t) {
  return C(t) && t.isInline() || Z(t) && t.isInline();
};
x.$isLeafNode = function(t) {
  return D(t) || an(t) || Z(t);
};
x.$isLineBreakNode = an;
x.$isNodeSelection = Yo;
x.$isParagraphNode = function(t) {
  return t instanceof no;
};
x.$isRangeSelection = M;
x.$isRootNode = De;
x.$isRootOrShadowRoot = $t;
x.$isTabNode = ym;
x.$isTextNode = D;
x.$nodesOfType = function(t) {
  var e = at();
  let n = e._readOnly, o = t.getType();
  e = e._nodeMap;
  let r = [];
  for (let [, i] of e) i instanceof t && i.__type === o && (n || i.isAttached()) && r.push(i);
  return r;
};
x.$normalizeSelection__EXPERIMENTAL = Jp;
x.$parseSerializedNode = function(t) {
  return Bs(t, J()._nodes);
};
x.$selectAll = function() {
  var t = Ie();
  t = t.select(0, t.getChildrenSize()), et(Jp(t));
};
x.$setCompositionKey = ae;
x.$setSelection = et;
x.$splitNode = function(t, e) {
  let n = t.getChildAtIndex(e);
  n == null && (n = t), $t(t) && E(102);
  let o = (a) => {
    const l = a.getParentOrThrow(), u = $t(l), c = a !== n || u ? om(a) : a;
    if (u) return C(a) && C(c) || E(133), a.insertAfter(c), [a, c, c];
    const [d, p, h] = o(l);
    return a = a.getNextSiblings(), h.append(c, ...a), [d, p, c];
  }, [r, i] = o(n);
  return [r, i];
};
x.BLUR_COMMAND = Hp;
x.CAN_REDO_COMMAND = {};
x.CAN_UNDO_COMMAND = {};
x.CLEAR_EDITOR_COMMAND = {};
x.CLEAR_HISTORY_COMMAND = {};
x.CLICK_COMMAND = Cp;
x.COMMAND_PRIORITY_CRITICAL = 4;
x.COMMAND_PRIORITY_EDITOR = 0;
x.COMMAND_PRIORITY_HIGH = 3;
x.COMMAND_PRIORITY_LOW = 1;
x.COMMAND_PRIORITY_NORMAL = 2;
x.CONTROLLED_TEXT_INSERTION_COMMAND = En;
x.COPY_COMMAND = Os;
x.CUT_COMMAND = $s;
x.DELETE_CHARACTER_COMMAND = Tn;
x.DELETE_LINE_COMMAND = Oo;
x.DELETE_WORD_COMMAND = Eo;
x.DRAGEND_COMMAND = qp;
x.DRAGOVER_COMMAND = Lp;
x.DRAGSTART_COMMAND = Fp;
x.DROP_COMMAND = Mp;
x.DecoratorNode = wm;
x.ElementNode = mi;
x.FOCUS_COMMAND = Bp;
x.FORMAT_ELEMENT_COMMAND = {};
x.FORMAT_TEXT_COMMAND = St;
x.INDENT_CONTENT_COMMAND = {};
x.INSERT_LINE_BREAK_COMMAND = yo;
x.INSERT_PARAGRAPH_COMMAND = pa;
x.INSERT_TAB_COMMAND = {};
x.KEY_ARROW_DOWN_COMMAND = Ip;
x.KEY_ARROW_LEFT_COMMAND = Op;
x.KEY_ARROW_RIGHT_COMMAND = Tp;
x.KEY_ARROW_UP_COMMAND = Dp;
x.KEY_BACKSPACE_COMMAND = Np;
x.KEY_DELETE_COMMAND = Pp;
x.KEY_DOWN_COMMAND = _p;
x.KEY_ENTER_COMMAND = wr;
x.KEY_ESCAPE_COMMAND = Rp;
x.KEY_MODIFIER_COMMAND = Up;
x.KEY_SPACE_COMMAND = zp;
x.KEY_TAB_COMMAND = Ap;
x.LineBreakNode = Xn;
x.MOVE_TO_END = Ep;
x.MOVE_TO_START = $p;
x.OUTDENT_CONTENT_COMMAND = {};
x.PASTE_COMMAND = _s;
x.ParagraphNode = no;
x.REDO_COMMAND = Es;
x.REMOVE_TEXT_COMMAND = ma;
x.RootNode = to;
x.SELECTION_CHANGE_COMMAND = oi;
x.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = {};
x.SELECT_ALL_COMMAND = ha;
x.TabNode = Qn;
x.TextNode = pn;
x.UNDO_COMMAND = Ts;
x.createCommand = function() {
  return {};
};
x.createEditor = function(t) {
  var e = t || {}, n = de, o = e.theme || {};
  let r = t === void 0 ? n : e.parentEditor || null, i = e.disableEvents || !1, a = Hs(), l = e.namespace || (r !== null ? r._config.namespace : em()), u = e.editorState, c = [to, pn, Xn, Qn, no, ...e.nodes || []], { onError: d, html: p } = e;
  if (e = e.editable !== void 0 ? e.editable : !0, t === void 0 && n !== null) t = n._nodes;
  else for (t = /* @__PURE__ */ new Map(), n = 0; n < c.length; n++) {
    let m = c[n], v = null;
    var h = null;
    typeof m != "function" && (h = m, m = h.replace, v = h.with, h = h.withKlass || null);
    let g = m.getType(), k = m.transform(), j = /* @__PURE__ */ new Set();
    k !== null && j.add(k), t.set(g, { exportDOM: p && p.export ? p.export.get(m) : void 0, klass: m, replace: v, replaceWithKlass: h, transforms: j });
  }
  return o = new nw(a, r, t, { disableEvents: i, namespace: l, theme: o }, d || console.error, tw(t, p ? p.import : void 0), e), u !== void 0 && (o._pendingEditorState = u, o._dirtyType = 2), o;
};
x.getNearestEditorFromDOMNode = Rs;
x.isCurrentlyReadOnlyMode = eo;
x.isHTMLAnchorElement = function(t) {
  return li(t) && t.tagName === "A";
};
x.isHTMLElement = li;
x.isSelectionCapturedInDecoratorInput = Ns;
x.isSelectionWithinEditor = Go;
const ow = x;
var U = ow, Mu = Ne, ho = U, zr = b;
let _m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
var rw = _m ? zr.useLayoutEffect : zr.useEffect;
let sr = { tag: "history-merge" };
function iw(t, e) {
  if (e !== null) {
    if (e === void 0) t.update(() => {
      var n = ho.$getRoot();
      if (n.isEmpty()) {
        let o = ho.$createParagraphNode();
        n.append(o), n = _m ? document.activeElement : null, (ho.$getSelection() !== null || n !== null && n === t.getRootElement()) && o.select();
      }
    }, sr);
    else if (e !== null) switch (typeof e) {
      case "string":
        let n = t.parseEditorState(e);
        t.setEditorState(n, sr);
        break;
      case "object":
        t.setEditorState(e, sr);
        break;
      case "function":
        t.update(() => {
          ho.$getRoot().isEmpty() && e(t);
        }, sr);
    }
  }
}
xp.LexicalComposer = function({ initialConfig: t, children: e }) {
  let n = zr.useMemo(() => {
    const { theme: o, namespace: r, editor__DEPRECATED: i, nodes: a, onError: l, editorState: u, html: c } = t, d = Mu.createLexicalComposerContext(null, o);
    let p = i || null;
    if (p === null) {
      const h = ho.createEditor({ editable: t.editable, html: c, namespace: r, nodes: a, onError: (m) => l(m, h), theme: o });
      iw(h, u), p = h;
    }
    return [p, d];
  }, []);
  return rw(() => {
    let o = t.editable, [r] = n;
    r.setEditable(o !== void 0 ? o : !0);
  }, []), zr.createElement(
    Mu.LexicalComposerContext.Provider,
    { value: n },
    e
  );
};
const aw = xp;
var Us = aw, Tm = {}, sw = Ne, wo = b;
function za() {
  return za = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e], o;
      for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, za.apply(this, arguments);
}
var lw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? wo.useLayoutEffect : wo.useEffect;
Tm.ContentEditable = function({ ariaActiveDescendant: t, ariaAutoComplete: e, ariaControls: n, ariaDescribedBy: o, ariaExpanded: r, ariaLabel: i, ariaLabelledBy: a, ariaMultiline: l, ariaOwns: u, ariaRequired: c, autoCapitalize: d, className: p, id: h, role: m = "textbox", spellCheck: v = !0, style: g, tabIndex: k, "data-testid": j, ...S }) {
  let [w] = sw.useLexicalComposerContext(), [$, B] = wo.useState(!1), O = wo.useCallback((A) => {
    w.setRootElement(A);
  }, [w]);
  return lw(() => (B(w.isEditable()), w.registerEditableListener((A) => {
    B(A);
  })), [w]), wo.createElement(
    "div",
    za({}, S, { "aria-activedescendant": $ ? t : void 0, "aria-autocomplete": $ ? e : "none", "aria-controls": $ ? n : void 0, "aria-describedby": o, "aria-expanded": $ && m === "combobox" ? !!r : void 0, "aria-label": i, "aria-labelledby": a, "aria-multiline": l, "aria-owns": $ ? u : void 0, "aria-readonly": $ ? void 0 : !0, "aria-required": c, autoCapitalize: d, className: p, contentEditable: $, "data-testid": j, id: h, ref: O, role: m, spellCheck: v, style: g, tabIndex: k })
  );
};
const uw = Tm;
var Vs = uw, So = b;
function Na(t, e) {
  return Na = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Na(t, e);
}
function cw(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Na(t, e);
}
function dw(t, e) {
  return t === void 0 && (t = []), e === void 0 && (e = []), t.length !== e.length || t.some(function(n, o) {
    return !Object.is(n, e[o]);
  });
}
var Fu = { error: null }, pw = function(t) {
  function e() {
    for (var o, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    return o = t.call.apply(t, [this].concat(i)) || this, o.state = Fu, o.resetErrorBoundary = function() {
      for (var l, u = arguments.length, c = Array(u), d = 0; d < u; d++) c[d] = arguments[d];
      o.props.onReset == null || (l = o.props).onReset.apply(l, c), o.reset();
    }, o;
  }
  cw(e, t), e.getDerivedStateFromError = function(o) {
    return { error: o };
  };
  var n = e.prototype;
  return n.reset = function() {
    this.setState(Fu);
  }, n.componentDidCatch = function(o, r) {
    var i, a;
    (i = (a = this.props).onError) == null || i.call(a, o, r);
  }, n.componentDidUpdate = function(o, r) {
    var i = this.props.resetKeys;
    if (this.state.error !== null && r.error !== null && dw(o.resetKeys, i)) {
      var a, l;
      (a = (l = this.props).onResetKeysChange) == null || a.call(l, o.resetKeys, i), this.reset();
    }
  }, n.render = function() {
    var o = this.state.error, r = this.props, i = r.fallbackRender, a = r.FallbackComponent;
    if (r = r.fallback, o !== null) {
      if (o = { error: o, resetErrorBoundary: this.resetErrorBoundary }, So.isValidElement(r)) return r;
      if (typeof i == "function") return i(o);
      if (a) return So.createElement(a, o);
      throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, e;
}(So.Component), mw = function({ children: t, onError: e }) {
  return So.createElement(pw, { fallback: So.createElement("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" } }, "An error was thrown."), onError: e }, t);
};
const hw = mw;
var fw = hw;
const Ws = /* @__PURE__ */ zc(fw);
var Gs = {}, Ks = {}, ee = {}, me = {}, z = U;
let Nr = /* @__PURE__ */ new Map();
function Lu(t) {
  for (; t != null; ) {
    if (t.nodeType === Node.TEXT_NODE) return t;
    t = t.firstChild;
  }
  return null;
}
function qu(t) {
  let e = t.parentNode;
  if (e == null) throw Error("Should never happen");
  return [e, Array.from(e.childNodes).indexOf(t)];
}
function Em(t) {
  let e = {};
  t = t.split(";");
  for (let n of t) if (n !== "") {
    let [o, r] = n.split(/:([^]+)/);
    o && r && (e[o.trim()] = r.trim());
  }
  return e;
}
function Rr(t) {
  let e = Nr.get(t);
  return e === void 0 && (e = Em(t), Nr.set(t, e)), e;
}
function gw(t) {
  let e = "";
  for (let n in t) n && (e += `${n}: ${t[n]};`);
  return e;
}
function yn(t, e) {
  let n = Rr("getStyle" in t ? t.getStyle() : t.style);
  e = Object.entries(e).reduce((r, [i, a]) => (a instanceof Function ? r[i] = a(n[i]) : a === null ? delete r[i] : r[i] = a, r), { ...n });
  let o = gw(e);
  t.setStyle(o), Nr.set(o, e);
}
function vw(t) {
  for (; t !== null && !z.$isRootOrShadowRoot(t); ) {
    let e = t.getLatest(), n = t.getParent();
    e.getChildrenSize() === 0 && t.remove(!0), t = n;
  }
}
function Qi(t, e, n, o, r = null) {
  if (e.length !== 0) {
    var i = e[0], a = /* @__PURE__ */ new Map(), l = [];
    i = z.$isElementNode(i) ? i : i.getParentOrThrow(), i.isInline() && (i = i.getParentOrThrow());
    for (var u = !1; i !== null; ) {
      var c = i.getPreviousSibling();
      if (c !== null) {
        i = c, u = !0;
        break;
      }
      if (i = i.getParentOrThrow(), z.$isRootOrShadowRoot(i)) break;
    }
    c = /* @__PURE__ */ new Set();
    for (var d = 0; d < n; d++) {
      var p = e[d];
      z.$isElementNode(p) && p.getChildrenSize() === 0 && c.add(p.getKey());
    }
    var h = /* @__PURE__ */ new Set();
    for (d = 0; d < n; d++) {
      p = e[d];
      var m = p.getParent();
      if (m !== null && m.isInline() && (m = m.getParent()), m !== null && z.$isLeafNode(p) && !h.has(p.getKey())) {
        if (p = m.getKey(), a.get(p) === void 0) {
          let v = o();
          v.setFormat(m.getFormatType()), v.setIndent(m.getIndent()), l.push(v), a.set(p, v), m.getChildren().forEach((g) => {
            v.append(g), h.add(g.getKey()), z.$isElementNode(g) && g.getChildrenKeys().forEach((k) => h.add(k));
          }), vw(m);
        }
      } else if (c.has(p.getKey())) {
        if (!z.$isElementNode(p)) throw Error("Expected node in emptyElements to be an ElementNode");
        m = o(), m.setFormat(p.getFormatType()), m.setIndent(p.getIndent()), l.push(m), p.remove(!0);
      }
    }
    if (r !== null) for (e = 0; e < l.length; e++) r.append(l[e]);
    if (e = null, z.$isRootOrShadowRoot(i)) if (u) if (r !== null) i.insertAfter(r);
    else for (r = l.length - 1; 0 <= r; r--) i.insertAfter(l[r]);
    else if (u = i.getFirstChild(), z.$isElementNode(u) && (i = u), u === null) if (r) i.append(r);
    else for (r = 0; r < l.length; r++) u = l[r], i.append(u), e = u;
    else if (r !== null) u.insertBefore(r);
    else for (i = 0; i < l.length; i++) r = l[i], u.insertBefore(r), e = r;
    else if (r) i.insertAfter(r);
    else for (r = l.length - 1; 0 <= r; r--) u = l[r], i.insertAfter(u), e = u;
    l = z.$getPreviousSelection(), z.$isRangeSelection(l) && l.anchor.getNode().isAttached() && l.focus.getNode().isAttached() ? z.$setSelection(l.clone()) : e !== null ? e.selectEnd() : t.dirty = !0;
  }
}
function Om(t, e, n, o) {
  t.modify(e ? "extend" : "move", n, o);
}
function $m(t) {
  return t = t.anchor.getNode(), (z.$isRootNode(t) ? t : t.getParentOrThrow()).getDirection() === "rtl";
}
function Zi(t) {
  if (z.$isDecoratorNode(t) || !z.$isElementNode(t) || z.$isRootOrShadowRoot(t)) return !1;
  var e = t.getFirstChild();
  return e = e === null || z.$isLineBreakNode(e) || z.$isTextNode(e) || e.isInline(), !t.isInline() && t.canBeEmpty() !== !1 && e;
}
me.$addNodeStyle = function(t) {
  t = t.getStyle();
  let e = Em(t);
  Nr.set(t, e);
};
me.$cloneWithProperties = function(t) {
  let e = t.constructor.clone(t);
  return e.__parent = t.__parent, e.__next = t.__next, e.__prev = t.__prev, z.$isElementNode(t) && z.$isElementNode(e) ? (e.__first = t.__first, e.__last = t.__last, e.__size = t.__size, e.__format = t.__format, e.__indent = t.__indent, e.__dir = t.__dir, e) : (z.$isTextNode(t) && z.$isTextNode(e) && (e.__format = t.__format, e.__style = t.__style, e.__mode = t.__mode, e.__detail = t.__detail), e);
};
me.$getSelectionStyleValueForProperty = function(t, e, n = "") {
  let o = null, r = t.getNodes();
  var i = t.anchor, a = t.focus, l = t.isBackward();
  let u = l ? a.offset : i.offset;
  if (i = l ? a.getNode() : i.getNode(), t.isCollapsed() && t.style !== "" && (t = Rr(t.style), t !== null && e in t)) return t[e];
  for (t = 0; t < r.length; t++) {
    var c = r[t];
    if ((t === 0 || u !== 0 || !c.is(i)) && z.$isTextNode(c)) {
      if (a = e, l = n, c = c.getStyle(), c = Rr(c), a = c !== null && c[a] || l, o === null) o = a;
      else if (o !== a) {
        o = "";
        break;
      }
    }
  }
  return o === null ? n : o;
};
me.$isAtNodeEnd = function(t) {
  if (t.type === "text") return t.offset === t.getNode().getTextContentSize();
  let e = t.getNode();
  if (!z.$isElementNode(e)) throw Error("isAtNodeEnd: node must be a TextNode or ElementNode");
  return t.offset === e.getChildrenSize();
};
me.$isParentElementRTL = $m;
me.$moveCaretSelection = Om;
me.$moveCharacter = function(t, e, n) {
  let o = $m(t);
  Om(t, e, n ? !o : o, "character");
};
me.$patchStyleText = function(t, e) {
  var n = t.getNodes(), o = n.length, r = t.getStartEndPoints();
  if (r !== null) {
    var [i, a] = r;
    --o, r = n[0];
    var l = n[o];
    if (t.isCollapsed() && z.$isRangeSelection(t)) yn(t, e);
    else {
      var u = r.getTextContent().length, c = a.offset, d = i.offset, p = i.isBefore(a), h = p ? d : c;
      t = p ? c : d;
      var m = p ? i.type : a.type, v = p ? a.type : i.type;
      if (p = p ? a.key : i.key, z.$isTextNode(r) && h === u) {
        let g = r.getNextSibling();
        z.$isTextNode(g) && (h = d = 0, r = g);
      }
      if (n.length === 1) z.$isTextNode(r) && r.canHaveFormat() && (h = m === "element" ? 0 : d > c ? c : d, t = v === "element" ? u : d > c ? d : c, h !== t && (h === 0 && t === u ? (yn(r, e), r.select(h, t)) : (n = r.splitText(h, t), n = h === 0 ? n[0] : n[1], yn(n, e), n.select(0, t - h))));
      else for (z.$isTextNode(r) && h < r.getTextContentSize() && r.canHaveFormat() && (h !== 0 && (r = r.splitText(h)[1], h = 0, i.set(r.getKey(), h, "text")), yn(r, e)), z.$isTextNode(l) && l.canHaveFormat() && (h = l.getTextContent().length, l.__key !== p && t !== 0 && (t = h), t !== h && ([l] = l.splitText(t)), t === 0 && v !== "element" || yn(l, e)), t = 1; t < o; t++) h = n[t], v = h.getKey(), z.$isTextNode(h) && h.canHaveFormat() && v !== r.getKey() && v !== l.getKey() && !h.isToken() && yn(h, e);
    }
  }
};
me.$selectAll = function(t) {
  let e = t.anchor;
  t = t.focus;
  var n = e.getNode().getTopLevelElementOrThrow().getParentOrThrow();
  let o = n.getFirstDescendant();
  n = n.getLastDescendant();
  let r = "element", i = "element", a = 0;
  z.$isTextNode(o) ? r = "text" : z.$isElementNode(o) || o === null || (o = o.getParentOrThrow()), z.$isTextNode(n) ? (i = "text", a = n.getTextContentSize()) : z.$isElementNode(n) || n === null || (n = n.getParentOrThrow()), o && n && (e.set(o.getKey(), 0, r), t.set(n.getKey(), a, i));
};
me.$setBlocksType = function(t, e) {
  if (t !== null) {
    var n = t.getStartEndPoints();
    if (n = n ? n[0] : null, n !== null && n.key === "root") e = e(), t = z.$getRoot(), (n = t.getFirstChild()) ? n.replace(e, !0) : t.append(e);
    else {
      if (t = t.getNodes(), n !== null) {
        for (n = n.getNode(); n !== null && n.getParent() !== null && !Zi(n); ) n = n.getParentOrThrow();
        n = Zi(n) ? n : null;
      } else n = !1;
      for (n && t.indexOf(n) === -1 && t.push(n), n = 0; n < t.length; n++) {
        let o = t[n];
        if (!Zi(o)) continue;
        if (!z.$isElementNode(o)) throw Error("Expected block node to be an ElementNode");
        let r = e();
        r.setFormat(o.getFormatType()), r.setIndent(o.getIndent()), o.replace(r, !0);
      }
    }
  }
};
me.$shouldOverrideDefaultCharacterSelection = function(t, e) {
  return t = z.$getAdjacentNode(t.focus, e), z.$isDecoratorNode(t) && !t.isIsolated() || z.$isElementNode(t) && !t.isInline() && !t.canBeEmpty();
};
me.$sliceSelectedTextNodeContent = function(t, e) {
  var n = t.getStartEndPoints();
  if (e.isSelected(t) && !e.isSegmented() && !e.isToken() && n !== null) {
    let [l, u] = n;
    n = t.isBackward();
    var o = l.getNode(), r = u.getNode(), i = e.is(o), a = e.is(r);
    if (i || a) {
      let [c, d] = z.$getCharacterOffsets(t);
      t = o.is(r), i = e.is(n ? r : o), r = e.is(n ? o : r), o = 0, a = void 0, t ? (o = c > d ? d : c, a = c > d ? c : d) : i ? (o = n ? d : c, a = void 0) : r && (n = n ? c : d, o = 0, a = n), e.__text = e.__text.slice(o, a);
    }
  }
  return e;
};
me.$wrapNodes = function(t, e, n = null) {
  var o = t.getStartEndPoints(), r = o ? o[0] : null;
  o = t.getNodes();
  let i = o.length;
  if (r !== null && (i === 0 || i === 1 && r.type === "element" && r.getNode().getChildrenSize() === 0)) {
    t = r.type === "text" ? r.getNode().getParentOrThrow() : r.getNode(), o = t.getChildren();
    let l = e();
    l.setFormat(t.getFormatType()), l.setIndent(t.getIndent()), o.forEach((u) => l.append(u)), n && (l = n.append(l)), t.replace(l);
  } else {
    r = null;
    var a = [];
    for (let l = 0; l < i; l++) {
      let u = o[l];
      z.$isRootOrShadowRoot(u) ? (Qi(t, a, a.length, e, n), a = [], r = u) : r === null || r !== null && z.$hasAncestor(u, r) ? a.push(u) : (Qi(t, a, a.length, e, n), a = [u]);
    }
    Qi(t, a, a.length, e, n);
  }
};
me.createDOMRange = function(t, e, n, o, r) {
  let i = e.getKey(), a = o.getKey(), l = document.createRange(), u = t.getElementByKey(i);
  if (t = t.getElementByKey(a), z.$isTextNode(e) && (u = Lu(u)), z.$isTextNode(o) && (t = Lu(t)), e === void 0 || o === void 0 || u === null || t === null) return null;
  u.nodeName === "BR" && ([u, n] = qu(u)), t.nodeName === "BR" && ([t, r] = qu(t)), e = u.firstChild, u === t && e != null && e.nodeName === "BR" && n === 0 && r === 0 && (r = 1);
  try {
    l.setStart(u, n), l.setEnd(t, r);
  } catch {
    return null;
  }
  return !l.collapsed || n === r && i === a || (l.setStart(t, r), l.setEnd(
    u,
    n
  )), l;
};
me.createRectsFromDOMRange = function(t, e) {
  var n = t.getRootElement();
  if (n === null) return [];
  t = n.getBoundingClientRect(), n = getComputedStyle(n), n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), e = Array.from(e.getClientRects());
  let o = e.length;
  e.sort((i, a) => {
    let l = i.top - a.top;
    return 3 >= Math.abs(l) ? i.left - a.left : l;
  });
  let r;
  for (let i = 0; i < o; i++) {
    let a = e[i], l = a.width + n === t.width;
    r && r.top <= a.top && r.top + r.height > a.top && r.left + r.width > a.left || l ? (e.splice(i--, 1), o--) : r = a;
  }
  return e;
};
me.getStyleObjectFromCSS = Rr;
me.trimTextContentFromAnchor = function(t, e, n) {
  let o = e.getNode();
  if (z.$isElementNode(o)) {
    var r = o.getDescendantByIndex(e.offset);
    r !== null && (o = r);
  }
  for (; 0 < n && o !== null; ) {
    z.$isElementNode(o) && (r = o.getLastDescendant(), r !== null && (o = r));
    var i = o.getPreviousSibling(), a = 0;
    if (i === null) {
      r = o.getParentOrThrow();
      for (var l = r.getPreviousSibling(); l === null; ) {
        if (r = r.getParent(), r === null) {
          i = null;
          break;
        }
        l = r.getPreviousSibling();
      }
      r !== null && (a = r.isInline() ? 0 : 2, i = l);
    }
    if (l = o.getTextContent(), l === "" && z.$isElementNode(o) && !o.isInline() && (l = `

`), r = l.length, !z.$isTextNode(o) || n >= r) l = o.getParent(), o.remove(), l == null || l.getChildrenSize() !== 0 || z.$isRootNode(l) || l.remove(), n -= r + a, o = i;
    else {
      let u = o.getKey();
      a = t.getEditorState().read(() => {
        const d = z.$getNodeByKey(u);
        return z.$isTextNode(d) && d.isSimpleText() ? d.getTextContent() : null;
      }), i = r - n;
      let c = l.slice(0, i);
      a !== null && a !== l ? (n = z.$getPreviousSelection(), r = o, o.isSimpleText() ? o.setTextContent(a) : (r = z.$createTextNode(a), o.replace(r)), z.$isRangeSelection(n) && n.isCollapsed() && (n = n.anchor.offset, r.select(n, n))) : o.isSimpleText() ? (a = e.key === u, l = e.offset, l < n && (l = r), n = a ? l - n : 0, r = a ? l : i, a && n === 0 ? ([n] = o.splitText(n, r), n.remove()) : ([, n] = o.splitText(n, r), n.remove())) : (n = z.$createTextNode(c), o.replace(n)), n = 0;
    }
  }
};
const yw = me;
var fi = yw, Dm = fi, G = U;
function kw(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++) e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Im(...t) {
  return () => {
    t.forEach((e) => e());
  };
}
let jw = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
function zm(t, e, n) {
  function o() {
    if (a === null) throw Error("Unexpected null rootDOMNode");
    if (l === null) throw Error("Unexpected null parentDOMNode");
    let { left: h, top: m } = a.getBoundingClientRect();
    var v = l;
    let g = Dm.createRectsFromDOMRange(t, e);
    d.isConnected || v.append(d), v = !1;
    for (let S = 0; S < g.length; S++) {
      var k = g[S];
      let w = c[S] || document.createElement("div"), $ = w.style;
      $.position !== "absolute" && ($.position = "absolute", v = !0);
      var j = `${k.left - h}px`;
      $.left !== j && ($.left = j, v = !0), j = `${k.top - m}px`, $.top !== j && (w.style.top = j, v = !0), j = `${k.width}px`, $.width !== j && (w.style.width = j, v = !0), k = `${k.height}px`, $.height !== k && (w.style.height = k, v = !0), w.parentNode !== d && (d.append(w), v = !0), c[S] = w;
    }
    for (; c.length > g.length; ) c.pop();
    v && n(c);
  }
  function r() {
    a = l = null, u !== null && u.disconnect(), u = null, d.remove();
    for (let h of c) h.remove();
    c = [];
  }
  function i() {
    let h = t.getRootElement();
    if (h === null) return r();
    let m = h.parentElement;
    if (!(m instanceof HTMLElement)) return r();
    r(), a = h, l = m, u = new MutationObserver((v) => {
      let g = t.getRootElement(), k = g && g.parentElement;
      if (g !== a || k !== l) return i();
      for (let j of v) if (!d.contains(j.target)) return o();
    }), u.observe(m, jw), o();
  }
  let a = null, l = null, u = null, c = [], d = document.createElement("div"), p = t.registerRootListener(i);
  return () => {
    p(), r();
  };
}
function Nm(t, e) {
  for (let n of e) if (t.type.startsWith(n)) return !0;
  return !1;
}
let Rm = (t, e) => {
  for (; t !== G.$getRoot() && t != null; ) {
    if (e(t)) return t;
    t = t.getParent();
  }
  return null;
};
ee.$splitNode = G.$splitNode;
ee.isHTMLAnchorElement = G.isHTMLAnchorElement;
ee.isHTMLElement = G.isHTMLElement;
ee.$dfs = function(t, e) {
  let n = [];
  t = (t || G.$getRoot()).getLatest(), e = e || (G.$isElementNode(t) ? t.getLastDescendant() : t);
  for (var o = t, r = 0; (o = o.getParent()) !== null; ) r++;
  for (o = r; t !== null && !t.is(e); ) if (n.push({ depth: o, node: t }), G.$isElementNode(t) && 0 < t.getChildrenSize()) t = t.getFirstChild(), o++;
  else for (r = null; r === null && t !== null; ) r = t.getNextSibling(), r === null ? (t = t.getParent(), o--) : t = r;
  return t !== null && t.is(e) && n.push({ depth: o, node: t }), n;
};
ee.$filter = function(t, e) {
  let n = [];
  for (let o = 0; o < t.length; o++) {
    let r = e(t[o]);
    r !== null && n.push(r);
  }
  return n;
};
ee.$findMatchingParent = Rm;
ee.$getNearestBlockElementAncestorOrThrow = function(t) {
  let e = Rm(t, (n) => G.$isElementNode(n) && !n.isInline());
  return G.$isElementNode(e) || kw(4, t.__key), e;
};
ee.$getNearestNodeOfType = function(t, e) {
  for (; t != null; ) {
    if (t instanceof e) return t;
    t = t.getParent();
  }
  return null;
};
ee.$insertFirst = function(t, e) {
  let n = t.getFirstChild();
  n !== null ? n.insertBefore(e) : t.append(e);
};
ee.$insertNodeToNearestRoot = function(t) {
  var e = G.$getSelection() || G.$getPreviousSelection();
  if (G.$isRangeSelection(e)) {
    var { focus: n } = e;
    if (e = n.getNode(), n = n.offset, G.$isRootOrShadowRoot(e)) n = e.getChildAtIndex(n), n == null ? e.append(t) : n.insertBefore(t), t.selectNext();
    else {
      let o, r;
      G.$isTextNode(e) ? (o = e.getParentOrThrow(), r = e.getIndexWithinParent(), 0 < n && (r += 1, e.splitText(n))) : (o = e, r = n), [, e] = G.$splitNode(o, r), e.insertBefore(t), e.selectStart();
    }
  } else e != null ? (e = e.getNodes(), e[e.length - 1].getTopLevelElementOrThrow().insertAfter(t)) : G.$getRoot().append(t), e = G.$createParagraphNode(), t.insertAfter(e), e.select();
  return t.getLatest();
};
ee.$restoreEditorState = function(t, e) {
  let n = /* @__PURE__ */ new Map(), o = t._pendingEditorState;
  for (let [r, i] of e._nodeMap) {
    let a = Dm.$cloneWithProperties(i);
    if (G.$isTextNode(a)) {
      if (!G.$isTextNode(i)) throw Error("Expected node be a TextNode");
      a.__text = i.__text;
    }
    n.set(r, a);
  }
  o && (o._nodeMap = n), t._dirtyType = 2, t = e._selection, G.$setSelection(t === null ? null : t.clone());
};
ee.$wrapNodeInElement = function(t, e) {
  return e = e(), t.replace(e), e.append(t), e;
};
ee.addClassNamesToElement = function(t, ...e) {
  e.forEach((n) => {
    typeof n == "string" && (n = n.split(" ").filter((o) => o !== ""), t.classList.add(...n));
  });
};
ee.isMimeType = Nm;
ee.markSelection = function(t, e) {
  function n(u) {
    u.read(() => {
      var c = G.$getSelection();
      if (G.$isRangeSelection(c)) {
        var { anchor: d, focus: p } = c;
        c = d.getNode();
        var h = c.getKey(), m = d.offset, v = p.getNode(), g = v.getKey(), k = p.offset, j = t.getElementByKey(h), S = t.getElementByKey(g);
        if (h = o === null || j === null || m !== r || h !== o.getKey() || c !== o && (!(o instanceof G.TextNode) || c.updateDOM(o, j, t._config)), g = i === null || S === null || k !== a || g !== i.getKey() || v !== i && (!(i instanceof G.TextNode) || v.updateDOM(i, S, t._config)), h || g) {
          j = t.getElementByKey(d.getNode().getKey());
          var w = t.getElementByKey(p.getNode().getKey());
          if (j !== null && w !== null && j.tagName === "SPAN" && w.tagName === "SPAN") {
            if (g = document.createRange(), p.isBefore(d) ? (h = w, S = p.offset, w = j, j = d.offset) : (h = j, S = d.offset, j = p.offset), h = h.firstChild, h === null || (w = w.firstChild, w === null)) throw Error("Expected text node to be first child of span");
            g.setStart(h, S), g.setEnd(w, j), l(), l = zm(t, g, ($) => {
              for (let B of $) {
                let O = B.style;
                O.background !== "Highlight" && (O.background = "Highlight"), O.color !== "HighlightText" && (O.color = "HighlightText"), O.zIndex !== "-1" && (O.zIndex = "-1"), O.pointerEvents !== "none" && (O.pointerEvents = "none"), O.marginTop !== "-1.5px" && (O.marginTop = "-1.5px"), O.paddingTop !== "4px" && (O.paddingTop = "4px"), O.paddingBottom !== "0px" && (O.paddingBottom = "0px");
              }
              e !== void 0 && e($);
            });
          }
        }
        o = c, r = m, i = v, a = k;
      } else a = i = r = o = null, l(), l = () => {
      };
    });
  }
  let o = null, r = null, i = null, a = null, l = () => {
  };
  return n(t.getEditorState()), Im(t.registerUpdateListener(({ editorState: u }) => n(u)), l, () => {
    l();
  });
};
ee.mediaFileReader = function(t, e) {
  let n = t[Symbol.iterator]();
  return new Promise((o, r) => {
    let i = [], a = () => {
      const { done: l, value: u } = n.next();
      if (l) return o(i);
      const c = new FileReader();
      c.addEventListener("error", r), c.addEventListener("load", () => {
        const d = c.result;
        typeof d == "string" && i.push({ file: u, result: d }), a();
      }), Nm(u, e) ? c.readAsDataURL(u) : a();
    };
    a();
  });
};
ee.mergeRegister = Im;
ee.objectKlassEquals = function(t, e) {
  return t !== null ? Object.getPrototypeOf(t).constructor.name === e.name : !1;
};
ee.positionNodeOnRange = zm;
ee.registerNestedElementResolver = function(t, e, n, o) {
  return t.registerNodeTransform(e, (r) => {
    e: {
      for (var i = r.getChildren(), a = 0; a < i.length; a++) if (i[a] instanceof e) {
        i = null;
        break e;
      }
      for (i = r; i !== null; ) if (a = i, i = i.getParent(), i instanceof e) {
        i = { child: a, parent: i };
        break e;
      }
      i = null;
    }
    if (i !== null) {
      const { child: l, parent: u } = i;
      if (l.is(r)) {
        if (o(u, r), r = l.getNextSiblings(), i = r.length, u.insertAfter(l), i !== 0) {
          a = n(u), l.insertAfter(a);
          for (let c = 0; c < i; c++) a.append(r[c]);
        }
        u.canBeEmpty() || u.getChildrenSize() !== 0 || u.remove();
      }
    }
  });
};
ee.removeClassNamesFromElement = function(t, ...e) {
  e.forEach((n) => {
    typeof n == "string" && t.classList.remove(...n.split(" "));
  });
};
const bw = ee;
var mn = bw, xw = mn, V = U;
function ww(t, e, n, o, r) {
  if (t === null || n.size === 0 && o.size === 0 && !r) return 0;
  var i = e._selection, a = t._selection;
  if (r) return 1;
  if (!(V.$isRangeSelection(i) && V.$isRangeSelection(a) && a.isCollapsed() && i.isCollapsed())) return 0;
  r = e._nodeMap;
  let l = [];
  for (let u of n) n = r.get(u), n !== void 0 && l.push(n);
  for (let [u, c] of o) c && (o = r.get(u), o === void 0 || V.$isRootNode(o) || l.push(o));
  return l.length === 0 ? 0 : 1 < l.length ? (o = e._nodeMap, e = o.get(i.anchor.key), a = o.get(a.anchor.key), e && a && !t._nodeMap.has(e.__key) && V.$isTextNode(e) && e.__text.length === 1 && i.anchor.offset === 1 ? 2 : 0) : (e = l[0], t = t._nodeMap.get(e.__key), !V.$isTextNode(t) || !V.$isTextNode(e) || t.__mode !== e.__mode || (t = t.__text, e = e.__text, t === e) || (i = i.anchor, a = a.anchor, i.key !== a.key || i.type !== "text") ? 0 : (i = i.offset, a = a.offset, t = e.length - t.length, t === 1 && a === i - 1 ? 2 : t === -1 && a === i + 1 ? 3 : t === -1 && a === i ? 4 : 0));
}
function Sw(t, e) {
  let n = Date.now(), o = 0;
  return (r, i, a, l, u, c) => {
    let d = Date.now();
    if (c.has("historic")) return o = 0, n = d, 2;
    let p = ww(r, i, l, u, t.isComposing()), h = (() => {
      var m = a === null || a.editor === t, v = c.has("history-push");
      if (!v && m && c.has("history-merge")) return 0;
      if (r === null) return 1;
      var g = i._selection;
      if (!(0 < l.size || 0 < u.size)) return g !== null ? 0 : 2;
      if (v === !1 && p !== 0 && p === o && d < n + e && m) return 0;
      if (l.size === 1) {
        {
          v = Array.from(l)[0], m = r._nodeMap.get(v), v = i._nodeMap.get(v), g = r._selection;
          let k = i._selection, j = !1;
          V.$isRangeSelection(g) && V.$isRangeSelection(k) && (j = g.anchor.type === "element" && g.focus.type === "element" && k.anchor.type === "text" && k.focus.type === "text"), m = !j && V.$isTextNode(m) && V.$isTextNode(v) ? m.__type === v.__type && m.__text === v.__text && m.__mode === v.__mode && m.__detail === v.__detail && m.__style === v.__style && m.__format === v.__format && m.__parent === v.__parent : !1;
        }
        if (m) return 0;
      }
      return 1;
    })();
    return n = d, o = p, h;
  };
}
Ks.createEmptyHistoryState = function() {
  return { current: null, redoStack: [], undoStack: [] };
};
Ks.registerHistory = function(t, e, n) {
  let o = Sw(t, n);
  n = ({ editorState: a, prevEditorState: l, dirtyLeaves: u, dirtyElements: c, tags: d }) => {
    const p = e.current, h = e.redoStack, m = e.undoStack, v = p === null ? null : p.editorState;
    if (p === null || a !== v) {
      if (l = o(l, a, p, u, c, d), l === 1) h.length !== 0 && (e.redoStack = [], t.dispatchCommand(V.CAN_REDO_COMMAND, !1)), p !== null && (m.push({ ...p }), t.dispatchCommand(V.CAN_UNDO_COMMAND, !0));
      else if (l === 2) return;
      e.current = { editor: t, editorState: a };
    }
  };
  let r = xw.mergeRegister(t.registerCommand(
    V.UNDO_COMMAND,
    () => {
      let a = e.redoStack, l = e.undoStack;
      if (l.length !== 0) {
        let u = e.current, c = l.pop();
        u !== null && (a.push(u), t.dispatchCommand(V.CAN_REDO_COMMAND, !0)), l.length === 0 && t.dispatchCommand(V.CAN_UNDO_COMMAND, !1), e.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
      }
      return !0;
    },
    V.COMMAND_PRIORITY_EDITOR
  ), t.registerCommand(V.REDO_COMMAND, () => {
    let a = e.redoStack;
    var l = e.undoStack;
    if (a.length !== 0) {
      let u = e.current;
      u !== null && (l.push(u), t.dispatchCommand(V.CAN_UNDO_COMMAND, !0)), l = a.pop(), a.length === 0 && t.dispatchCommand(V.CAN_REDO_COMMAND, !1), e.current = l || null, l && l.editor.setEditorState(l.editorState, { tag: "historic" });
    }
    return !0;
  }, V.COMMAND_PRIORITY_EDITOR), t.registerCommand(V.CLEAR_EDITOR_COMMAND, () => (e.undoStack = [], e.redoStack = [], e.current = null, !1), V.COMMAND_PRIORITY_EDITOR), t.registerCommand(V.CLEAR_HISTORY_COMMAND, () => (e.undoStack = [], e.redoStack = [], e.current = null, t.dispatchCommand(V.CAN_REDO_COMMAND, !1), t.dispatchCommand(V.CAN_UNDO_COMMAND, !1), !0), V.COMMAND_PRIORITY_EDITOR), t.registerUpdateListener(n)), i = t.registerUpdateListener(n);
  return () => {
    r(), i();
  };
};
const Cw = Ks;
var _w = Cw, Tw = Ne, Ra = _w, Bu = b;
function Ew(t, e, n = 1e3) {
  let o = Bu.useMemo(() => e || Ra.createEmptyHistoryState(), [e]);
  Bu.useEffect(() => Ra.registerHistory(t, o, n), [n, t, o]);
}
Gs.createEmptyHistoryState = Ra.createEmptyHistoryState;
Gs.HistoryPlugin = function({ externalHistoryState: t }) {
  let [e] = Tw.useLexicalComposerContext();
  return Ew(e, t), null;
};
const Ow = Gs;
var Js = Ow, Pm = {}, $w = Ne, Co = b, Dw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Co.useLayoutEffect : Co.useEffect;
function Iw(t) {
  let [e] = $w.useLexicalComposerContext(), n = Co.useMemo(() => t(e), [e, t]), o = Co.useRef(n.initialValueFn()), [r, i] = Co.useState(o.current);
  return Dw(() => {
    let { initialValueFn: a, subscribe: l } = n, u = a();
    return o.current !== u && (o.current = u, i(u)), l((c) => {
      o.current = c, i(c);
    });
  }, [n, t]), r;
}
function zw(t) {
  return { initialValueFn: () => t.isEditable(), subscribe: (e) => t.registerEditableListener(e) };
}
var Nw = function() {
  return Iw(zw);
};
const Rw = Nw;
var Pw = Rw, qt = {}, be = U;
function Ys(t, e = !0) {
  return t ? !1 : (t = Am(), e && (t = t.trim()), t === "");
}
function Am() {
  return be.$getRoot().getTextContent();
}
function Mm(t) {
  if (!Ys(t, !1)) return !1;
  t = be.$getRoot().getChildren();
  let e = t.length;
  if (1 < e) return !1;
  for (let o = 0; o < e; o++) {
    var n = t[o];
    if (be.$isDecoratorNode(n)) return !1;
    if (be.$isElementNode(n)) {
      if (!be.$isParagraphNode(n) || n.__indent !== 0) return !1;
      n = n.getChildren();
      let r = n.length;
      for (let i = 0; i < r; i++) if (!be.$isTextNode(n[o])) return !1;
    }
  }
  return !0;
}
qt.$canShowPlaceholder = Mm;
qt.$canShowPlaceholderCurry = function(t) {
  return () => Mm(t);
};
qt.$findTextIntersectionFromCharacters = function(t, e) {
  var n = t.getFirstChild();
  t = 0;
  e: for (; n !== null; ) {
    if (be.$isElementNode(n)) {
      var o = n.getFirstChild();
      if (o !== null) {
        n = o;
        continue;
      }
    } else if (be.$isTextNode(n)) {
      if (o = n.getTextContentSize(), t + o > e) return { node: n, offset: e - t };
      t += o;
    }
    if (o = n.getNextSibling(), o !== null) n = o;
    else {
      for (n = n.getParent(); n !== null; ) {
        if (o = n.getNextSibling(), o !== null) {
          n = o;
          continue e;
        }
        n = n.getParent();
      }
      break;
    }
  }
  return null;
};
qt.$isRootTextContentEmpty = Ys;
qt.$isRootTextContentEmptyCurry = function(t, e) {
  return () => Ys(t, e);
};
qt.$rootTextContent = Am;
qt.registerLexicalTextEntity = function(t, e, n, o) {
  let r = (a) => {
    const l = be.$createTextNode(a.getTextContent());
    l.setFormat(a.getFormat()), a.replace(l);
  }, i = t.registerNodeTransform(be.TextNode, (a) => {
    if (a.isSimpleText()) {
      var l = a.getPreviousSibling(), u = a.getTextContent(), c = a;
      if (be.$isTextNode(l)) {
        var d = l.getTextContent(), p = e(d + u);
        if (l instanceof n) {
          if (p === null || l.getLatest().__mode !== 0) {
            r(l);
            return;
          }
          if (p = p.end - d.length, 0 < p) {
            c = u.slice(0, p), c = d + c, l.select(), l.setTextContent(c), p === u.length ? a.remove() : (l = u.slice(p), a.setTextContent(l));
            return;
          }
        } else if (p === null || p.start < d.length) return;
      }
      for (; ; ) {
        if (a = e(u), u = p = a === null ? "" : u.slice(a.end), p === "") {
          if (d = c.getNextSibling(), be.$isTextNode(d)) {
            if (p = c.getTextContent() + d.getTextContent(), p = e(p), p === null) {
              d instanceof n ? r(d) : d.markDirty();
              break;
            } else if (p.start !== 0) break;
          }
        } else if (d = e(p), d !== null && d.start === 0) break;
        if (a === null) break;
        if (a.start === 0 && be.$isTextNode(l) && l.isTextEntity()) continue;
        let h;
        if (a.start === 0 ? [h, c] = c.splitText(a.end) : [, h, c] = c.splitText(a.start, a.end), a = o(h), a.setFormat(h.getFormat()), h.replace(a), c == null) break;
      }
    }
  });
  return t = t.registerNodeTransform(n, (a) => {
    var l = a.getTextContent();
    const u = e(l);
    u === null || u.start !== 0 ? r(a) : l.length > u.end ? a.splitText(u.end) : (l = a.getPreviousSibling(), be.$isTextNode(l) && l.isTextEntity() && (r(l), r(a)), l = a.getNextSibling(), be.$isTextNode(l) && l.isTextEntity() && (r(l), a instanceof n && r(a)));
  }), [i, t];
};
const Aw = qt;
var Fm = Aw, Lm = {}, lr = U;
Lm.registerDragonSupport = function(t) {
  let e = window.location.origin, n = (o) => {
    if (o.origin === e) {
      var r = t.getRootElement();
      if (document.activeElement === r && (r = o.data, typeof r == "string")) {
        try {
          var i = JSON.parse(r);
        } catch {
          return;
        }
        if (i && i.protocol === "nuanria_messaging" && i.type === "request" && (i = i.payload) && i.functionId === "makeChanges" && (i = i.args)) {
          const [a, l, u, c, d] = i;
          t.update(() => {
            const p = lr.$getSelection();
            if (lr.$isRangeSelection(p)) {
              var h = p.anchor;
              let m = h.getNode(), v = 0, g = 0;
              lr.$isTextNode(m) && 0 <= a && 0 <= l && (v = a, g = a + l, p.setTextNodeRange(m, v, m, g)), (v !== g || u !== "") && (p.insertRawText(u), m = h.getNode()), lr.$isTextNode(m) && (v = c, g = c + d, h = m.getTextContentSize(), v = v > h ? h : v, g = g > h ? h : g, p.setTextNodeRange(m, v, m, g)), o.stopImmediatePropagation();
            }
          });
        }
      }
    }
  };
  return window.addEventListener("message", n, !0), () => {
    window.removeEventListener("message", n, !0);
  };
};
const Mw = Lm;
var Fw = Mw, qm = {}, gt = {}, Xs = {}, Hu = fi, Lw = mn, Cn = U;
function Bm(t, e, n, o = null) {
  let r = o !== null ? e.isSelected(o) : !0, i = Cn.$isElementNode(e) && e.excludeFromCopy("html");
  var a = e;
  o !== null && (a = Hu.$cloneWithProperties(e), a = Cn.$isTextNode(a) && o !== null ? Hu.$sliceSelectedTextNodeContent(o, a) : a);
  let l = Cn.$isElementNode(a) ? a.getChildren() : [];
  var u = t._nodes.get(a.getType());
  u = u && u.exportDOM !== void 0 ? u.exportDOM(t, a) : a.exportDOM(t);
  let { element: c, after: d } = u;
  if (!c) return !1;
  u = document.createDocumentFragment();
  for (let p = 0; p < l.length; p++) {
    let h = l[p], m = Bm(t, h, u, o);
    !r && Cn.$isElementNode(e) && m && e.extractWithChild(h, o, "html") && (r = !0);
  }
  return r && !i ? (Lw.isHTMLElement(c) && c.append(u), n.append(c), d && (t = d.call(a, c)) && c.replaceWith(t)) : n.append(u), r;
}
let Hm = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function Um(t, e, n = /* @__PURE__ */ new Map(), o) {
  let r = [];
  if (Hm.has(t.nodeName)) return r;
  let i = null;
  var a, { nodeName: l } = t, u = e._htmlConversions.get(l.toLowerCase());
  if (l = null, u !== void 0) for (a of u) u = a(t), u !== null && (l === null || (l.priority || 0) < (u.priority || 0)) && (l = u);
  if (l = (a = l !== null ? l.conversion : null) ? a(t) : null, a = null, l !== null) {
    if (a = l.after, u = l.node, i = Array.isArray(u) ? u[u.length - 1] : u, i !== null) {
      for (var [, c] of n) if (i = c(i, o), !i) break;
      i && r.push(...Array.isArray(u) ? u : [i]);
    }
    l.forChild != null && n.set(t.nodeName, l.forChild);
  }
  for (t = t.childNodes, o = [], c = 0; c < t.length; c++) o.push(...Um(t[c], e, new Map(n), i));
  return a != null && (o = a(o)), i == null ? r = r.concat(o) : Cn.$isElementNode(i) && i.append(...o), r;
}
Xs.$generateHtmlFromNodes = function(t, e) {
  if (typeof document > "u" || typeof window > "u" && typeof oa.window > "u") throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  let n = document.createElement("div"), o = Cn.$getRoot().getChildren();
  for (let r = 0; r < o.length; r++) Bm(t, o[r], n, e);
  return n.innerHTML;
};
Xs.$generateNodesFromDOM = function(t, e) {
  e = e.body ? e.body.childNodes : [];
  let n = [];
  for (let r = 0; r < e.length; r++) {
    var o = e[r];
    Hm.has(o.nodeName) || (o = Um(o, t), o !== null && (n = n.concat(o)));
  }
  return n;
};
const qw = Xs;
var Bw = qw, Vm = Bw, Pa = fi, Hw = mn, te = U;
function Uu(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++) e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let Wm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Gm(t) {
  let e = te.$getSelection();
  if (e == null) throw Error("Expected valid LexicalSelection");
  return te.$isRangeSelection(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : Vm.$generateHtmlFromNodes(t, e);
}
function Km(t) {
  let e = te.$getSelection();
  if (e == null) throw Error("Expected valid LexicalSelection");
  return te.$isRangeSelection(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify(Ym(t, e));
}
function Aa(t, e, n) {
  t.dispatchCommand(te.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, { nodes: e, selection: n }) || n.insertNodes(e);
}
function Jm(t, e, n, o = []) {
  let r = e !== null ? n.isSelected(e) : !0, i = te.$isElementNode(n) && n.excludeFromCopy("html");
  var a = n;
  if (e !== null) {
    var l = Pa.$cloneWithProperties(n);
    a = l = te.$isTextNode(l) && e !== null ? Pa.$sliceSelectedTextNodeContent(e, l) : l;
  }
  let u = te.$isElementNode(a) ? a.getChildren() : [];
  var c = a;
  l = c.exportJSON();
  var d = c.constructor;
  for (l.type !== d.getType() && Uu(58, d.name), te.$isElementNode(c) && (Array.isArray(l.children) || Uu(59, d.name)), te.$isTextNode(a) && (a = a.__text, 0 < a.length ? l.text = a : r = !1), a = 0; a < u.length; a++) c = u[a], d = Jm(t, e, c, l.children), !r && te.$isElementNode(n) && d && n.extractWithChild(c, e, "clone") && (r = !0);
  if (r && !i) o.push(l);
  else if (Array.isArray(l.children)) for (t = 0; t < l.children.length; t++) o.push(l.children[t]);
  return r;
}
function Ym(t, e) {
  let n = [], o = te.$getRoot().getChildren();
  for (let r = 0; r < o.length; r++) Jm(t, e, o[r], n);
  return { namespace: t._config.namespace, nodes: n };
}
function Xm(t) {
  let e = [];
  for (let n = 0; n < t.length; n++) {
    let o = te.$parseSerializedNode(t[n]);
    te.$isTextNode(o) && Pa.$addNodeStyle(o), e.push(o);
  }
  return e;
}
let kn = null;
function Vu(t, e) {
  var n = Wm ? (t._window || window).getSelection() : null;
  if (!n) return !1;
  var o = n.anchorNode;
  if (n = n.focusNode, o !== null && n !== null && !te.isSelectionWithinEditor(t, o, n) || (e.preventDefault(), e = e.clipboardData, o = te.$getSelection(), e === null || o === null)) return !1;
  n = Gm(t), t = Km(t);
  let r = "";
  return o !== null && (r = o.getTextContent()), n !== null && e.setData("text/html", n), t !== null && e.setData("application/x-lexical-editor", t), e.setData("text/plain", r), !0;
}
gt.$generateJSONFromSelectedNodes = Ym;
gt.$generateNodesFromSerializedNodes = Xm;
gt.$getHtmlContent = Gm;
gt.$getLexicalContent = Km;
gt.$insertDataTransferForPlainText = function(t, e) {
  t = t.getData("text/plain") || t.getData("text/uri-list"), t != null && e.insertRawText(t);
};
gt.$insertDataTransferForRichText = function(t, e, n) {
  var o = t.getData("application/x-lexical-editor");
  if (o) try {
    let i = JSON.parse(o);
    if (i.namespace === n._config.namespace && Array.isArray(i.nodes)) {
      let a = Xm(i.nodes);
      return Aa(n, a, e);
    }
  } catch {
  }
  if (o = t.getData("text/html")) try {
    var r = new DOMParser().parseFromString(o, "text/html");
    let i = Vm.$generateNodesFromDOM(n, r);
    return Aa(n, i, e);
  } catch {
  }
  if (t = t.getData("text/plain") || t.getData("text/uri-list"), t != null) if (te.$isRangeSelection(e)) for (t = t.split(/(\r?\n|\t)/), t[t.length - 1] === "" && t.pop(), n = 0; n < t.length; n++) r = t[n], r === `
` || r === `\r
` ? e.insertParagraph() : r === "	" ? e.insertNodes([te.$createTabNode()]) : e.insertText(r);
  else e.insertRawText(t);
};
gt.$insertGeneratedNodes = Aa;
gt.copyToClipboard = async function(t, e) {
  if (kn !== null) return !1;
  if (e !== null) return new Promise((a) => {
    t.update(() => {
      a(Vu(t, e));
    });
  });
  var n = t.getRootElement();
  let o = t._window == null ? window.document : t._window.document, r = Wm ? (t._window || window).getSelection() : null;
  if (n === null || r === null) return !1;
  let i = o.createElement("span");
  return i.style.cssText = "position: fixed; top: -1000px;", i.append(o.createTextNode("#")), n.append(i), n = new Range(), n.setStart(i, 0), n.setEnd(i, 1), r.removeAllRanges(), r.addRange(n), new Promise((a) => {
    let l = t.registerCommand(te.COPY_COMMAND, (u) => (Hw.objectKlassEquals(u, ClipboardEvent) && (l(), kn !== null && (window.clearTimeout(kn), kn = null), a(Vu(t, u))), !0), te.COMMAND_PRIORITY_CRITICAL);
    kn = window.setTimeout(() => {
      l(), kn = null, a(!1);
    }, 50), o.execCommand("copy"), i.remove();
  });
};
const Uw = gt;
var Vw = Uw, Qs = Vw, ur = fi, Ww = mn, _ = U;
let oo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gw = oo && "documentMode" in document ? document.documentMode : null, Kw = oo && "InputEvent" in window && !Gw ? "getTargetRanges" in new window.InputEvent("input") : !1, Jw = oo && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Yw = oo && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Xw = oo && /^(?=.*Chrome).*/i.test(navigator.userAgent), Qw = oo && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Xw;
function Qm(t, e) {
  e.update(() => {
    if (t !== null) {
      let n = t instanceof KeyboardEvent ? null : t.clipboardData, o = _.$getSelection();
      if (o !== null && n != null) {
        t.preventDefault();
        let r = Qs.$getHtmlContent(e);
        r !== null && n.setData("text/html", r), n.setData("text/plain", o.getTextContent());
      }
    }
  });
}
function Zw(t, e) {
  t.preventDefault(), e.update(() => {
    let n = _.$getSelection(), { clipboardData: o } = t;
    o != null && _.$isRangeSelection(n) && Qs.$insertDataTransferForPlainText(o, n);
  }, { tag: "paste" });
}
function eS(t, e) {
  Qm(t, e), e.update(() => {
    let n = _.$getSelection();
    _.$isRangeSelection(n) && n.removeText();
  });
}
qm.registerPlainText = function(t) {
  return Ww.mergeRegister(
    t.registerCommand(_.DELETE_CHARACTER_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (n.deleteCharacter(e), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.DELETE_WORD_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (n.deleteWord(e), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.DELETE_LINE_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (n.deleteLine(e), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.CONTROLLED_TEXT_INSERTION_COMMAND, (e) => {
      const n = _.$getSelection();
      if (!_.$isRangeSelection(n)) return !1;
      if (typeof e == "string") n.insertText(e);
      else {
        const o = e.dataTransfer;
        o != null ? Qs.$insertDataTransferForPlainText(o, n) : (e = e.data) && n.insertText(e);
      }
      return !0;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.REMOVE_TEXT_COMMAND, () => {
      const e = _.$getSelection();
      return _.$isRangeSelection(e) ? (e.removeText(), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(
      _.INSERT_LINE_BREAK_COMMAND,
      (e) => {
        const n = _.$getSelection();
        return _.$isRangeSelection(n) ? (n.insertLineBreak(e), !0) : !1;
      },
      _.COMMAND_PRIORITY_EDITOR
    ),
    t.registerCommand(_.INSERT_PARAGRAPH_COMMAND, () => {
      const e = _.$getSelection();
      return _.$isRangeSelection(e) ? (e.insertLineBreak(), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.KEY_ARROW_LEFT_COMMAND, (e) => {
      const n = _.$getSelection();
      if (!_.$isRangeSelection(n)) return !1;
      const o = e.shiftKey;
      return ur.$shouldOverrideDefaultCharacterSelection(n, !0) ? (e.preventDefault(), ur.$moveCharacter(
        n,
        o,
        !0
      ), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.KEY_ARROW_RIGHT_COMMAND, (e) => {
      const n = _.$getSelection();
      if (!_.$isRangeSelection(n)) return !1;
      const o = e.shiftKey;
      return ur.$shouldOverrideDefaultCharacterSelection(n, !1) ? (e.preventDefault(), ur.$moveCharacter(n, o, !1), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.KEY_BACKSPACE_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (e.preventDefault(), t.dispatchCommand(_.DELETE_CHARACTER_COMMAND, !0)) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.KEY_DELETE_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (e.preventDefault(), t.dispatchCommand(_.DELETE_CHARACTER_COMMAND, !1)) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.KEY_ENTER_COMMAND, (e) => {
      const n = _.$getSelection();
      if (!_.$isRangeSelection(n)) return !1;
      if (e !== null) {
        if ((Yw || Jw || Qw) && Kw) return !1;
        e.preventDefault();
      }
      return t.dispatchCommand(_.INSERT_LINE_BREAK_COMMAND, !1);
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.SELECT_ALL_COMMAND, () => (_.$selectAll(), !0), _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.COPY_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (Qm(e, t), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.CUT_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (eS(e, t), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.PASTE_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (Zw(e, t), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.DROP_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (e.preventDefault(), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(_.DRAGSTART_COMMAND, (e) => {
      const n = _.$getSelection();
      return _.$isRangeSelection(n) ? (e.preventDefault(), !0) : !1;
    }, _.COMMAND_PRIORITY_EDITOR)
  );
};
const tS = qm;
var nS = tS, Zm = Ne, oS = Pw, Le = b, rS = Fm, eh = mn, Wu = Pc, iS = Fw, aS = nS, Zs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Le.useLayoutEffect : Le.useEffect;
function Gu(t) {
  return t.getEditorState().read(rS.$canShowPlaceholderCurry(t.isComposing()));
}
function sS(t) {
  let [e, n] = Le.useState(() => Gu(t));
  return Zs(() => {
    function o() {
      let r = Gu(t);
      n(r);
    }
    return o(), eh.mergeRegister(t.registerUpdateListener(() => {
      o();
    }), t.registerEditableListener(() => {
      o();
    }));
  }, [t]), e;
}
function lS(t, e) {
  let [n, o] = Le.useState(() => t.getDecorators());
  return Zs(() => t.registerDecoratorListener((r) => {
    Wu.flushSync(() => {
      o(r);
    });
  }), [t]), Le.useEffect(() => {
    o(t.getDecorators());
  }, [t]), Le.useMemo(() => {
    let r = [], i = Object.keys(n);
    for (let a = 0; a < i.length; a++) {
      let l = i[a], u = Le.createElement(e, { onError: (d) => t._onError(d) }, Le.createElement(Le.Suspense, { fallback: null }, n[l])), c = t.getElementByKey(l);
      c !== null && r.push(Wu.createPortal(u, c, l));
    }
    return r;
  }, [e, n, t]);
}
function uS(t) {
  Zs(() => eh.mergeRegister(aS.registerPlainText(t), iS.registerDragonSupport(t)), [t]);
}
function cS({ content: t }) {
  var [e] = Zm.useLexicalComposerContext();
  e = sS(e);
  let n = oS();
  return e ? typeof t == "function" ? t(n) : t : null;
}
Pm.PlainTextPlugin = function({ contentEditable: t, placeholder: e, ErrorBoundary: n }) {
  let [o] = Zm.useLexicalComposerContext();
  return n = lS(o, n), uS(o), Le.createElement(Le.Fragment, null, t, Le.createElement(cS, { content: e }), n);
};
const dS = Pm;
var el = dS;
function pS() {
  const [t] = Ne.useLexicalComposerContext();
  return b.useEffect(() => t.registerNodeTransform(U.LineBreakNode, (e) => {
    e.remove();
  }), [t]), null;
}
const mS = `background-color: var(${f.badgeBackground}); color: var(${f.badgeForeground}); border-radius: 4px;`, hS = `background-color: var(${f.badgeBackground}); color: var(${f.badgeForeground}); border-radius: 4px;`;
class zt extends U.TextNode {
  constructor(n, o, r) {
    super(n, r);
    Di(this, "__exists");
    this.__exists = o;
  }
  static getType() {
    return "variable";
  }
  static clone(n) {
    return new zt(n.__text, n.__exists, n.__key);
  }
  static importJSON(n) {
    const o = Pr(n.text, n.exists);
    return o.setFormat(n.format), o.setDetail(n.detail), o.setMode(n.mode), o.setStyle(n.style), o;
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
    const o = super.createDOM(n);
    return this.__exists ? o.style.cssText = mS : o.style.cssText = hS, o.className = "variable", o;
  }
  exportDOM() {
    const n = document.createElement("span");
    return n.setAttribute("data-lexical-variable", "true"), n.textContent = this.__text, { element: n };
  }
  updateDOM(n, o, r) {
    return !0;
  }
  setExists(n) {
    const o = this.getWritable();
    o.__exists = n;
  }
  getExists() {
    return this.getLatest().__exists;
  }
}
function Pr(t, e) {
  return new zt(t, e);
}
var Bt = {}, tl = Ne, ue = U, X = b, Ku = mn, fS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? X.useLayoutEffect : X.useEffect;
class gS {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
}
let Ju = (t) => {
  const e = document.getElementById("typeahead-menu");
  if (e) {
    var n = e.getBoundingClientRect();
    n.top + n.height > window.innerHeight && e.scrollIntoView({ block: "center" }), 0 > n.top && e.scrollIntoView({ block: "center" }), t.scrollIntoView({ block: "nearest" });
  }
};
function vS(t) {
  var e = ue.$getSelection();
  if (!ue.$isRangeSelection(e) || !e.isCollapsed()) return null;
  var n = e.anchor;
  if (n.type !== "text" || (e = n.getNode(), !e.isSimpleText())) return null;
  n = n.offset;
  let o = e.getTextContent().slice(0, n);
  var r = t.matchingString;
  t = t.replaceableString.length;
  for (let a = t; a <= r.length; a++) o.substr(-a) === r.substr(0, a) && (t = a);
  if (t = n - t, 0 > t) return null;
  let i;
  return t === 0 ? [i] = e.splitText(n) : [, i] = e.splitText(t, n), i;
}
function yS(t, e) {
  let n = getComputedStyle(t), o = n.position === "absolute";
  if (e = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n.position === "fixed") return document.body;
  for (; t = t.parentElement; ) if (n = getComputedStyle(t), (!o || n.position !== "static") && e.test(n.overflow + n.overflowY + n.overflowX)) return t;
  return document.body;
}
function Yu(t, e) {
  return t = t.getBoundingClientRect(), e = e.getBoundingClientRect(), t.top > e.top && t.top < e.bottom;
}
function th(t, e, n, o) {
  let [r] = tl.useLexicalComposerContext();
  X.useEffect(() => {
    if (e != null && t != null) {
      let i = r.getRootElement(), a = i != null ? yS(i, !1) : document.body, l = !1, u = Yu(e, a), c = function() {
        l || (window.requestAnimationFrame(function() {
          n(), l = !1;
        }), l = !0);
        const p = Yu(e, a);
        p !== u && (u = p, o != null && o(p));
      }, d = new ResizeObserver(n);
      return window.addEventListener("resize", n), document.addEventListener("scroll", c, { capture: !0, passive: !0 }), d.observe(e), () => {
        d.unobserve(e), window.removeEventListener("resize", n), document.removeEventListener(
          "scroll",
          c,
          !0
        );
      };
    }
  }, [e, r, o, n, t]);
}
let Xu = ue.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function kS({ close: t, editor: e, anchorElementRef: n, resolution: o, options: r, menuRenderFn: i, onSelectOption: a, shouldSplitNodeWithQuery: l = !1, commandPriority: u = ue.COMMAND_PRIORITY_LOW }) {
  let [c, d] = X.useState(null);
  X.useEffect(() => {
    d(0);
  }, [o.match && o.match.matchingString]);
  let p = X.useCallback((v) => {
    e.update(() => {
      const g = o.match != null && l ? vS(o.match) : null;
      a(v, g, t, o.match ? o.match.matchingString : "");
    });
  }, [e, l, o.match, a, t]), h = X.useCallback((v) => {
    const g = e.getRootElement();
    g !== null && (g.setAttribute(
      "aria-activedescendant",
      "typeahead-item-" + v
    ), d(v));
  }, [e]);
  X.useEffect(() => () => {
    let v = e.getRootElement();
    v !== null && v.removeAttribute("aria-activedescendant");
  }, [e]), fS(() => {
    r === null ? d(null) : c === null && h(0);
  }, [r, c, h]), X.useEffect(() => Ku.mergeRegister(e.registerCommand(Xu, ({ option: v }) => v.ref && v.ref.current != null ? (Ju(v.ref.current), !0) : !1, u)), [e, h, u]), X.useEffect(() => Ku.mergeRegister(e.registerCommand(ue.KEY_ARROW_DOWN_COMMAND, (v) => {
    if (r !== null && r.length && c !== null) {
      let g = c !== r.length - 1 ? c + 1 : 0;
      h(g);
      let k = r[g];
      k.ref != null && k.ref.current && e.dispatchCommand(Xu, { index: g, option: k }), v.preventDefault(), v.stopImmediatePropagation();
    }
    return !0;
  }, u), e.registerCommand(ue.KEY_ARROW_UP_COMMAND, (v) => {
    if (r !== null && r.length && c !== null) {
      var g = c !== 0 ? c - 1 : r.length - 1;
      h(g), g = r[g], g.ref != null && g.ref.current && Ju(g.ref.current), v.preventDefault(), v.stopImmediatePropagation();
    }
    return !0;
  }, u), e.registerCommand(ue.KEY_ESCAPE_COMMAND, (v) => (v.preventDefault(), v.stopImmediatePropagation(), t(), !0), u), e.registerCommand(ue.KEY_TAB_COMMAND, (v) => r === null || c === null || r[c] == null ? !1 : (v.preventDefault(), v.stopImmediatePropagation(), p(r[c]), !0), u), e.registerCommand(ue.KEY_ENTER_COMMAND, (v) => r === null || c === null || r[c] == null ? !1 : (v !== null && (v.preventDefault(), v.stopImmediatePropagation()), p(r[c]), !0), u)), [p, t, e, r, c, h, u]);
  let m = X.useMemo(() => ({ options: r, selectOptionAndCleanUp: p, selectedIndex: c, setHighlightedIndex: d }), [p, c, r]);
  return i(n, m, o.match ? o.match.matchingString : "");
}
function jS(t, e, n, o = document.body) {
  let [r] = tl.useLexicalComposerContext(), i = X.useRef(document.createElement("div")), a = X.useCallback(
    () => {
      i.current.style.top = i.current.style.bottom;
      const u = r.getRootElement(), c = i.current;
      var d = c.firstChild;
      if (u !== null && t !== null) {
        const { left: h, top: m, width: v, height: g } = t.getRect();
        if (c.style.top = `${m + window.pageYOffset + i.current.offsetHeight + 3}px`, c.style.left = `${h + window.pageXOffset}px`, c.style.height = `${g}px`, c.style.width = `${v}px`, d !== null) {
          d.style.top = `${m}`;
          var p = d.getBoundingClientRect();
          d = p.height, p = p.width;
          const k = u.getBoundingClientRect();
          h + p > k.right && (c.style.left = `${k.right - p + window.pageXOffset}px`), (m + d > window.innerHeight || m + d > k.bottom) && m - k.top > d && (c.style.top = `${m - d + window.pageYOffset - g}px`);
        }
        c.isConnected || (n != null && (c.className = n), c.setAttribute("aria-label", "Typeahead menu"), c.setAttribute("id", "typeahead-menu"), c.setAttribute("role", "listbox"), c.style.display = "block", c.style.position = "absolute", o.append(c)), i.current = c, u.setAttribute("aria-controls", "typeahead-menu");
      }
    },
    [r, t, n, o]
  );
  X.useEffect(() => {
    let u = r.getRootElement();
    if (t !== null) return a(), () => {
      u !== null && u.removeAttribute("aria-controls");
      let c = i.current;
      c !== null && c.isConnected && c.remove();
    };
  }, [r, a, t]);
  let l = X.useCallback((u) => {
    t !== null && (u || e(null));
  }, [t, e]);
  return th(t, i.current, a, l), i;
}
function bS(t, e, n) {
  var o = n.getSelection();
  if (o === null || !o.isCollapsed || (n = o.anchorNode, o = o.anchorOffset, n == null || o == null)) return !1;
  try {
    e.setStart(n, t), e.setEnd(n, o);
  } catch {
    return !1;
  }
  return !0;
}
function xS(t) {
  let e = null;
  return t.getEditorState().read(() => {
    var n = ue.$getSelection();
    if (ue.$isRangeSelection(n)) {
      var o = n.anchor;
      o.type !== "text" ? e = null : (n = o.getNode(), n.isSimpleText() ? (o = o.offset, e = n.getTextContent().slice(0, o)) : e = null);
    }
  }), e;
}
function wS(t, e) {
  return e !== 0 ? !1 : t.getEditorState().read(() => {
    var n = ue.$getSelection();
    return ue.$isRangeSelection(n) ? (n = n.anchor.getNode().getPreviousSibling(), ue.$isTextNode(n) && n.isTextEntity()) : !1;
  });
}
function SS(t) {
  X.startTransition ? X.startTransition(t) : t();
}
let CS = ue.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
Bt.LexicalTypeaheadMenuPlugin = function({ options: t, onQueryChange: e, onSelectOption: n, onOpen: o, onClose: r, menuRenderFn: i, triggerFn: a, anchorClassName: l, commandPriority: u = ue.COMMAND_PRIORITY_LOW, parent: c }) {
  let [d] = tl.useLexicalComposerContext(), [p, h] = X.useState(null);
  l = jS(p, h, l, c);
  let m = X.useCallback(() => {
    h(null), r != null && p !== null && r();
  }, [r, p]), v = X.useCallback((g) => {
    h(g), o != null && p === null && o(g);
  }, [o, p]);
  return X.useEffect(() => {
    let g = d.registerUpdateListener(() => {
      d.getEditorState().read(() => {
        const k = d._window || window, j = k.document.createRange(), S = ue.$getSelection(), w = xS(d);
        if (ue.$isRangeSelection(S) && S.isCollapsed() && w !== null && j !== null) {
          var $ = a(w, d);
          e($ ? $.matchingString : null), $ === null || wS(d, $.leadOffset) || bS($.leadOffset, j, k) === null ? m() : SS(() => v({ getRect: () => j.getBoundingClientRect(), match: $ }));
        } else m();
      });
    });
    return () => {
      g();
    };
  }, [d, a, e, p, m, v]), p === null || d === null ? null : X.createElement(kS, { close: m, resolution: p, editor: d, anchorElementRef: l, options: t, menuRenderFn: i, shouldSplitNodeWithQuery: !0, onSelectOption: n, commandPriority: u });
};
Bt.MenuOption = gS;
Bt.PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
Bt.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = CS;
Bt.getScrollParent = function(t, e) {
  let n = getComputedStyle(t), o = n.position === "absolute";
  if (e = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n.position === "fixed") return document.body;
  for (; t = t.parentElement; ) if (n = getComputedStyle(t), (!o || n.position !== "static") && e.test(n.overflow + n.overflowY + n.overflowX)) return t;
  return document.body;
};
Bt.useBasicTypeaheadTriggerMatch = function(t, { minLength: e = 1, maxLength: n = 75 }) {
  return X.useCallback((o) => {
    if (o = new RegExp("(^|\\s|\\()([" + t + "]((?:[^" + (t + `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;\\s]){0,`) + n + "}))$").exec(o), o !== null) {
      let r = o[1], i = o[3];
      if (i.length >= e) return { leadOffset: o.index + r.length, matchingString: i, replaceableString: o[2] };
    }
    return null;
  }, [n, e, t]);
};
Bt.useDynamicPositioning = th;
const _S = Bt;
var nh = _S, oh = {}, TS = Ne, ES = Fm, OS = mn, $S = b;
oh.useLexicalTextEntity = function(t, e, n) {
  let [o] = TS.useLexicalComposerContext();
  $S.useEffect(() => OS.mergeRegister(...ES.registerLexicalTextEntity(o, t, e, n)), [n, o, t, e]);
};
const DS = oh;
var IS = DS;
const zS = 100;
function NS(t, e) {
  const n = /({{([\w.\-$^}]*))/.exec(t);
  if (n !== null) {
    const o = n[2];
    if (o.length >= e)
      return {
        leadOffset: n.index,
        matchingString: o,
        replaceableString: n[1]
      };
  }
  return null;
}
function RS(t) {
  return NS(t, 0);
}
class PS extends nh.MenuOption {
  constructor(n) {
    super(n);
    Di(this, "name");
    this.name = n;
  }
}
function AS({
  index: t,
  isSelected: e,
  onClick: n,
  onMouseEnter: o,
  option: r
}) {
  let i = "item";
  return e && (i += " selected"), /* @__PURE__ */ s.jsx(
    "li",
    {
      tabIndex: -1,
      className: i,
      ref: r.setRefElement,
      role: "option",
      "aria-selected": e,
      id: "typeahead-item-" + t,
      onMouseEnter: o,
      onClick: n,
      children: /* @__PURE__ */ s.jsx("span", { className: "text", children: r.name })
    },
    r.key
  );
}
function rh({
  variables: t
}) {
  const [e] = Ne.useLexicalComposerContext(), n = b.useCallback(
    (p) => {
      const h = p.getTextContent().slice(2, -2);
      return Pr(p.getTextContent(), t.includes(h));
    },
    [t]
  ), o = b.useCallback((p) => {
    const h = /({{[\w-$]+}})/.exec(p);
    if (h === null)
      return null;
    const m = h[1].length, v = h.index, g = v + m;
    return {
      start: v,
      end: g
    };
  }, []);
  IS.useLexicalTextEntity(o, zt, n), b.useEffect(() => {
    e.update(() => {
      const p = U.$nodesOfType(zt);
      for (const h of p) {
        const m = h.getTextContent().slice(2, -2);
        h.setExists(t.includes(m));
      }
    });
  }, [t, e]);
  const [r, i] = b.useState(null), [a, l] = b.useState([]);
  b.useEffect(() => {
    l(
      r !== null ? t.filter((p) => p.toLowerCase().includes(r.toLowerCase())) : t
    );
  }, [t, r]);
  const u = b.useMemo(
    () => a.map((p) => new PS(p)).slice(0, zS),
    [a]
  ), c = b.useCallback(
    (p, h, m) => {
      e.update(() => {
        const v = Pr("{{" + p.name + "}}", !0);
        h && h.replace(v), v.select(), m();
      });
    },
    [e]
  ), d = b.useCallback(
    (p) => RS(p),
    [e]
  );
  return /* @__PURE__ */ s.jsx(
    nh.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: i,
      onSelectOption: c,
      triggerFn: d,
      options: u,
      menuRenderFn: (p, { selectedIndex: h, selectOptionAndCleanUp: m, setHighlightedIndex: v }) => p.current && a.length ? Pc.createPortal(
        /* @__PURE__ */ s.jsx(MS, { children: /* @__PURE__ */ s.jsx("ul", { children: u.map((g, k) => /* @__PURE__ */ s.jsx(
          AS,
          {
            index: k,
            isSelected: h === k,
            onClick: () => {
              v(k), m(g);
            },
            onMouseEnter: () => {
              v(k);
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
const MS = y.div`
  margin-top: 20px;
  background-color: var(${f.dropdownBackground});
  border: 1px solid var(${f.dropdownBorder});
  min-width: 150px;
  padding: 4px;

  > ul {
    padding: 0;
    list-style: none;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;

    > li.selected {
      background-color: var(${f.listActiveSelectionBackground});
      color: var(${f.listActiveSelectionForeground});
    }

    > li:hover {
      //background-color: var(${f.listHoverBackground});
    }

    > li {
      margin: 2px;
      color: var(${f.dropdownForeground});
      display: flex;
      gap: 8px;
      align-items: center;
      user-select: none;
    }
  }

  > ul::-webkit-scrollbar {
    width: 4px;
  }
`, FS = /({{[\w\-$]+}})/;
function nl(t) {
  return (typeof t == "string" ? t : `${t}`).split(FS).map((o, r) => r % 2 !== 0 ? Pr(o, !1) : U.$createTextNode(o));
}
function ih({ onFocus: t }) {
  const [e] = Ne.useLexicalComposerContext();
  return b.useEffect(() => {
    let n = null;
    e.registerCommand(
      U.BLUR_COMMAND,
      () => (n !== null && clearTimeout(n), n = setTimeout(() => {
        t(!1);
      }, 100), !1),
      U.COMMAND_PRIORITY_EDITOR
    ), e.registerCommand(
      U.FOCUS_COMMAND,
      () => (n !== null && (clearTimeout(n), n = null), t(!0), !1),
      U.COMMAND_PRIORITY_EDITOR
    );
  }, []), null;
}
function gi({
  name: t,
  variables: e,
  encode: n,
  decode: o,
  ...r
}) {
  const { field: i } = Q({
    name: t,
    rules: {
      validate: (d) => {
        if (d instanceof Error)
          return d.message;
      }
    }
  });
  function a(d) {
    console.error(d);
  }
  const l = {
    namespace: "editor",
    editorState: () => {
      const d = U.$createParagraphNode();
      d.append(...nl(n ? n(i.value) : i.value)), U.$getRoot().append(d);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: a,
    nodes: [zt]
  }, [u, c] = b.useState(!1);
  return /* @__PURE__ */ s.jsx(LS, { ...r, onBlur: i.onBlur, children: /* @__PURE__ */ s.jsx(Us.LexicalComposer, { initialConfig: l, children: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      el.PlainTextPlugin,
      {
        contentEditable: /* @__PURE__ */ s.jsx(Vs.ContentEditable, {}),
        placeholder: /* @__PURE__ */ s.jsx("div", {}),
        ErrorBoundary: Ws
      }
    ),
    /* @__PURE__ */ s.jsx(Js.HistoryPlugin, {}),
    u && e !== void 0 && /* @__PURE__ */ s.jsx(rh, { variables: e }),
    /* @__PURE__ */ s.jsx(qS, { name: t, decode: o }),
    /* @__PURE__ */ s.jsx(ih, { onFocus: (d) => c(d) }),
    /* @__PURE__ */ s.jsx(pS, {})
  ] }) }) });
}
const LS = y.div`
  background: transparent;
  padding: 2px;
  color: var(${f.foreground});
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
function qS({ name: t, decode: e }) {
  const [n] = Ne.useLexicalComposerContext(), { field: o } = Q({
    name: t
  });
  return b.useEffect(() => {
    o.ref({ focus: () => n.focus() });
    const r = n.registerTextContentListener((a) => {
      try {
        o.onChange(e ? e(a) : a);
      } catch (l) {
        o.onChange(l);
      }
    }), i = n.registerCommand(
      U.BLUR_COMMAND,
      (a, l) => (o.onBlur(), !1),
      U.COMMAND_PRIORITY_LOW
    );
    return () => {
      r(), i();
    };
  }, [n, o]), null;
}
function BS({
  name: t,
  remove: e,
  variables: n
}) {
  const { control: o } = un(), {
    field: r,
    fieldState: { error: i }
  } = Q({
    name: `${t}.key`,
    control: o,
    rules: {
      pattern: {
        value: Lo(),
        message: qo
      }
    }
  }), { field: a } = Q({
    name: `${t}.value`,
    control: o
  }), { field: l } = Q({
    name: `${t}.type`,
    control: o
  }), u = HS(a.value);
  return /* @__PURE__ */ s.jsxs(US, { children: [
    /* @__PURE__ */ s.jsxs(VS, { children: [
      /* @__PURE__ */ s.jsx(WS, { type: "text", ...r }),
      /* @__PURE__ */ s.jsx(GS, { variables: n, name: `${t}.value` }),
      /* @__PURE__ */ s.jsxs(KS, { ...l, children: [
        /* @__PURE__ */ s.jsx("option", { value: "string", children: "string" }),
        /* @__PURE__ */ s.jsx("option", { value: "number", disabled: !u.has("number"), children: "number" }),
        /* @__PURE__ */ s.jsx("option", { value: "boolean", disabled: !u.has("boolean"), children: "boolean" }),
        /* @__PURE__ */ s.jsx("option", { value: "null", disabled: !u.has("null"), children: "null" })
      ] }),
      /* @__PURE__ */ s.jsx(
        JS,
        {
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), e();
          },
          children: /* @__PURE__ */ s.jsx(Ue, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ s.jsxs(YS, { children: [
      /* @__PURE__ */ s.jsx(Br, {}),
      "  ",
      i.message
    ] })
  ] });
}
function HS(t) {
  const e = /* @__PURE__ */ new Set(["string"]);
  try {
    const o = typeof JSON.parse(t);
    o === "number" || o === "boolean" ? e.add(o) : t === "null" && e.add("null");
  } catch {
  }
  return e;
}
const US = y.div`
  display: contents;
`, VS = y.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, WS = y.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${f.border});
  color: var(${f.foreground});
  padding: 4px 8px;
`, GS = y(gi)`
  flex: 2;
  border-bottom: 1px solid var(${f.border});
  padding: 4px 8px;
`, KS = y.select`
  border: none;
  background: transparent;
  color: var(${f.foreground});
  border-bottom: 1px solid var(${f.border});
  padding: 4px 8px;
`, JS = y.button`
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
    fill: var(${f.foreground});
  }
`, YS = y.div`
  padding: 4px;
  display: flex;
`;
function XS({ name: t, append: e }) {
  return /* @__PURE__ */ s.jsxs(
    QS,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), e({ key: t, value: "", type: "string" }, { shouldFocus: !0 });
      },
      children: [
        /* @__PURE__ */ s.jsx("span", { children: t }),
        /* @__PURE__ */ s.jsx(ev, {})
      ]
    }
  );
}
const QS = y.span`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(${f.linkForeground});
  cursor: pointer;
  > svg {
    fill: var(${f.linkForeground});
  }
`;
function Xo({
  name: t,
  variables: e,
  missing: n
}) {
  const { control: o } = un(), { fields: r, append: i, remove: a } = cn({
    control: o,
    name: t
  });
  return /* @__PURE__ */ s.jsxs(ZS, { children: [
    /* @__PURE__ */ s.jsxs(eC, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Value" }),
      /* @__PURE__ */ s.jsx("div", { children: "Type" }),
      /* @__PURE__ */ s.jsx("div", {})
    ] }),
    r.map((l, u) => /* @__PURE__ */ s.jsx(
      BS,
      {
        name: `${t}.${u}`,
        variables: e,
        remove: () => {
          a(u);
        }
      },
      l.id
    )),
    /* @__PURE__ */ s.jsx(s0, { append: i }),
    n && (n == null ? void 0 : n.length) > 0 && /* @__PURE__ */ s.jsxs(tC, { children: [
      /* @__PURE__ */ s.jsx(nt, {}),
      " ",
      /* @__PURE__ */ s.jsx("span", { className: "message", children: "Unset variables" }),
      n.map((l) => /* @__PURE__ */ s.jsx(XS, { name: l, append: i }, l))
    ] })
  ] });
}
const ZS = y.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 7em 2em;
`, eC = y.div`
  display: contents;
  > div {
    background-color: var(${f.computedOne});
    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, tC = y.div`
  margin-top: 8px;
  padding: 8px;
  border: 1px solid var(${f.border});
  grid-column: span 3;
  display: flex;
  align-items: center;
  gap: 6px;
  > svg {
    fill: var(${f.errorForeground});
  }
  > span.message {
    color: var(${f.errorForeground});
  }
`;
function nC(t, e, n) {
  const o = Of(t, t.paths[e]), r = Ar(t, e, n), i = $f(t, r);
  return Df(t, o, i);
}
function oC(t, e, n) {
  const o = Ar(t, e, n);
  return ((o == null ? void 0 : o.security) ?? t.security ?? []).length > 0;
}
function rC(t, e, n) {
  var a, l, u, c;
  const o = Ar(t, e, n), r = (o == null ? void 0 : o.security) ?? t.security ?? [], i = [];
  for (const d of r) {
    const p = {};
    for (const h of Object.keys(d))
      if ((l = (a = t == null ? void 0 : t.components) == null ? void 0 : a.securitySchemes) != null && l[h]) {
        const m = In(t, (c = (u = t == null ? void 0 : t.components) == null ? void 0 : u.securitySchemes) == null ? void 0 : c[h]);
        m !== void 0 && (p[h] = m);
      }
    i.push(p);
  }
  return i;
}
function iC(t) {
  return t = pe.simpleClone(t), {
    ...t,
    fuzzing: t.fuzzing === !0,
    expectedResponse: t.expectedResponse !== void 0 ? t.expectedResponse : "",
    environment: ol(t.environment),
    responses: rl(t.responses)
  };
}
function aC(t) {
  return {
    ...t,
    fuzzing: t.fuzzing === !0 ? !0 : void 0,
    expectedResponse: t.expectedResponse !== "" ? t.expectedResponse : void 0,
    environment: al(t.environment),
    responses: il(t.responses)
  };
}
function sC(t) {
  return t = pe.simpleClone(t), {
    path: t.request.path,
    method: t.request.method,
    parameters: t.request.parameters,
    body: t.request.body,
    environment: ol(t.environment),
    defaultResponse: t.defaultResponse,
    injectionKey: t.injectionKey,
    fuzzing: t.fuzzing,
    operationId: t.operationId,
    requestOperationId: t.request.operationId,
    responses: rl(t.responses),
    auth: t.auth
  };
}
function lC(t) {
  return t = pe.simpleClone(t), {
    url: t.request.url,
    method: t.request.method,
    parameters: t.request.parameters,
    body: t.request.body,
    environment: ol(t.environment),
    defaultResponse: t.defaultResponse,
    responses: rl(t.responses)
  };
}
function ol(t) {
  return Object.entries(t || {}).map(([n, o]) => ({
    key: n,
    value: o,
    type: typeof o
  }));
}
function rl(t) {
  return Object.entries(t || {}).map(([e, n]) => ({
    key: e,
    value: {
      ...n,
      variableAssignments: uC(n.variableAssignments)
    }
  }));
}
function il(t) {
  const e = {};
  for (const { key: n, value: o } of t)
    e[n] = {
      ...o,
      variableAssignments: cC(o.variableAssignments)
    };
  return e;
}
function uC(t) {
  return Object.entries(t || {}).map(([e, n]) => ({
    key: e,
    value: n
  }));
}
function cC(t) {
  const e = {};
  for (const { key: n, value: o } of t)
    e[n] = o;
  return e;
}
function dC(t) {
  return t = pe.simpleClone(t), {
    ref: void 0,
    request: {
      path: t.path,
      method: t.method,
      parameters: t.parameters,
      body: t.body,
      operationId: t.requestOperationId
    },
    fuzzing: t.fuzzing,
    injectionKey: t.injectionKey,
    environment: al(t.environment),
    defaultResponse: t.defaultResponse,
    responses: il(t.responses),
    auth: t.auth,
    operationId: t.operationId
  };
}
function pC(t) {
  return t = pe.simpleClone(t), {
    request: {
      url: t.url,
      method: t.method,
      parameters: t.parameters,
      body: t.body
    },
    environment: al(t.environment),
    defaultResponse: t.defaultResponse,
    responses: il(t.responses),
    operationId: void 0
  };
}
function al(t) {
  const e = {};
  for (const n of t)
    e[n.key] = mC(n.value, n.type);
  return e;
}
function mC(t, e) {
  if (e !== "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return `${t}`;
}
function sl({
  name: t,
  options: e,
  placeholder: n
}) {
  const { field: o } = Q({
    name: t
  });
  return /* @__PURE__ */ s.jsx(
    Yn,
    {
      placeholder: n,
      options: e,
      selected: o.value,
      onSelectedItemChange: (r) => {
        r && o.onChange(r.value);
      }
    }
  );
}
function hC({
  found: t,
  missing: e,
  currentStep: n
}) {
  const o = t !== void 0 ? [...new Map(t.map((i) => [i.name, i])).values()] : void 0, r = e !== void 0 ? [...new Map(e.map((i) => [i.name, i])).values()] : void 0;
  return o == null || o.sort((i, a) => i.name.localeCompare(a.name)), r == null || r.sort((i, a) => i.name.localeCompare(a.name)), /* @__PURE__ */ s.jsxs(yC, { children: [
    /* @__PURE__ */ s.jsxs(kC, { children: [
      /* @__PURE__ */ s.jsx("div", {}),
      /* @__PURE__ */ s.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Location where the variable is defined" })
    ] }),
    o == null ? void 0 : o.map((i, a) => gC(i, a, n)),
    r == null ? void 0 : r.map(fC)
  ] });
}
function fC(t, e) {
  return /* @__PURE__ */ s.jsxs(ah, { children: [
    /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(
      nt,
      {
        style: {
          fill: `var(${f.errorForeground})`
        }
      }
    ) }),
    /* @__PURE__ */ s.jsx("div", { children: t.name }),
    /* @__PURE__ */ s.jsx("div", { children: "Variable is not found" })
  ] }, e);
}
function gC(t, e, n) {
  return /* @__PURE__ */ s.jsxs(ah, { children: [
    /* @__PURE__ */ s.jsx("div", {}),
    /* @__PURE__ */ s.jsx("div", { children: t.name }),
    /* @__PURE__ */ s.jsx("div", { children: vC(t.context, n) })
  ] }, e);
}
function vC(t, e) {
  if (t.type === "global-environment")
    return "Global Environment";
  if (t.type === "built-in")
    return "Built-in";
  if (t.type === "try-inputs")
    return "Try Inputs";
  if (t.type === "stage-environment")
    return `Scenario / Step ${e + 1} / Environment`;
  if (t.type === "request-environment")
    return `Scenario / Step ${e + 1} / Operation / Environment`;
  if (t.type === "playbook-request")
    return `${Qu(t.name)} / Step ${t.step + 1} / Operation / Response processing`;
  if (t.type === "playbook-stage")
    return `${Qu(t.name)} / Step ${t.step + 1} / Response processing`;
}
function Qu(t) {
  if (t === "operationScenarios")
    return "Scenario";
  if (t === "operationBefore")
    return "Before block";
  if (t === "operationAfter")
    return "After block";
  if (t === "before")
    return "Global before block";
  if (t === "after")
    return "Global after block";
  if (t === "credential")
    return "Credential";
}
const yC = y.div`
  display: grid;
  grid-template-columns: 2em 16em 1fr;
  padding: 8px;
  > div > div {
    padding: 4px;
    line-break: anywhere;
  }
`, kC = y.div`
  display: contents;
  > div {
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ah = y.div`
  display: contents;
`;
function jC({
  stage: t,
  oas: e,
  result: n,
  saveStage: o,
  removeStage: r,
  location: i,
  fuzzing: a,
  operations: l,
  requests: u,
  goToRequest: c,
  stageIndex: d
}) {
  var w, $, B, O;
  const [{ isDragging: p }, h] = qy(() => ({
    type: "stage",
    item: { location: i },
    collect: (A) => ({
      isDragging: !!A.isDragging()
    })
  })), m = t.ref.type === "operation" ? l[t.ref.id] : u[t.ref.id], v = wC(m), g = xC(m), k = [
    ...g.filter((A) => A !== "default").map((A) => ({ label: A, value: A }))
  ], j = [
    ...Za,
    ...bC(((w = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : w.stack) || [])
  ], S = Array.from(new Set((($ = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : $.missing) || [])).map(
    (A) => A.name
  );
  return /* @__PURE__ */ s.jsx(
    ot,
    {
      data: t,
      saveData: o,
      wrapFormData: iC,
      unwrapFormData: aC,
      children: /* @__PURE__ */ s.jsxs(SC, { children: [
        /* @__PURE__ */ s.jsx(CC, { children: d + 1 }),
        /* @__PURE__ */ s.jsx(
          _C,
          {
            ref: h,
            style: {
              opacity: p ? 0.5 : 1,
              cursor: p ? "move" : "auto"
            },
            children: /* @__PURE__ */ s.jsxs(ln, { children: [
              /* @__PURE__ */ s.jsxs(TC, { children: [
                /* @__PURE__ */ s.jsxs("span", { children: [
                  t.ref.id,
                  /* @__PURE__ */ s.jsx(
                    Qc,
                    {
                      onClick: (A) => {
                        A.preventDefault(), A.stopPropagation(), c(t.ref);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsxs(EC, { onClick: (A) => A.stopPropagation(), children: [
                  S.length > 0 && /* @__PURE__ */ s.jsx(
                    Zu,
                    {
                      message: "Unset variables",
                      description: "There are unset variables in this step of the scenario. You can set their values in the 'Environment' section of the step, or in the 'Response processing' section of the previous steps."
                    }
                  ),
                  m === void 0 && /* @__PURE__ */ s.jsx(
                    Zu,
                    {
                      message: `${t.ref.type}/${t.ref.id} is missing`,
                      description: "Target of a reference is missing"
                    }
                  ),
                  /* @__PURE__ */ s.jsxs(OC, { children: [
                    /* @__PURE__ */ s.jsx("span", { children: "Expected Response" }),
                    /* @__PURE__ */ s.jsx(
                      sl,
                      {
                        name: "expectedResponse",
                        options: k,
                        placeholder: v
                      }
                    )
                  ] }),
                  a && /* @__PURE__ */ s.jsxs($C, { children: [
                    /* @__PURE__ */ s.jsx("span", { children: "Fuzzing" }),
                    /* @__PURE__ */ s.jsx(bp, { name: "fuzzing" })
                  ] }),
                  /* @__PURE__ */ s.jsx(DC, { className: "grab", children: /* @__PURE__ */ s.jsx(Yg, {}) }),
                  /* @__PURE__ */ s.jsx(Ft, { children: /* @__PURE__ */ s.jsxs(dn, { onClick: (A) => A.stopPropagation(), onSelect: r, children: [
                    /* @__PURE__ */ s.jsx(Ue, {}),
                    "Delete"
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ s.jsx(
                ft,
                {
                  tabs: [
                    {
                      id: "environment",
                      title: "Environment",
                      content: /* @__PURE__ */ s.jsx(
                        Xo,
                        {
                          name: "environment",
                          variables: j,
                          missing: S
                        }
                      ),
                      counter: S.length,
                      counterKind: "error"
                    },
                    {
                      id: "responses",
                      title: "Response processing",
                      content: /* @__PURE__ */ s.jsx(ti, { editable: !0, responseCodes: g })
                    },
                    {
                      id: "variables",
                      title: "Context",
                      content: /* @__PURE__ */ s.jsx(
                        hC,
                        {
                          currentStep: d,
                          missing: (B = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : B.missing,
                          found: (O = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : O.found
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
function bC(t) {
  const e = [];
  for (const n of t)
    for (const o of Object.keys(n.env))
      e.includes(o) || e.push(o);
  return e.sort(), e;
}
function xC(t) {
  if (t !== void 0) {
    const e = "scenarios" in t ? t.request.responses : t.responses;
    return Object.keys(e || {}).map((o) => o);
  }
  return [];
}
function wC(t) {
  if (t !== void 0)
    return ("scenarios" in t ? t.request : t).defaultResponse;
}
const SC = y.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, CC = y.div`
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  width: 18px;
`, _C = y.div`
  background-color: var(${f.background});
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
`, TC = y.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > span {
    > svg {
      fill: var(${f.linkForeground});
    }
    flex: 1;
    font-weight: 600;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
`, EC = y.div`
  cursor: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`, OC = y.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  > div {
    width: 60px;
    border: 1px solid var(${f.border});
  }
`, $C = y.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`, DC = y.div`
  cursor: grab;
  > svg {
    fill: var(${f.foreground});
  }
`;
function Zu({ message: t, description: e }) {
  return /* @__PURE__ */ s.jsx(Mg, { children: /* @__PURE__ */ s.jsxs(Fg, { children: [
    /* @__PURE__ */ s.jsx(Lg, { asChild: !0, children: /* @__PURE__ */ s.jsxs(IC, { children: [
      /* @__PURE__ */ s.jsx(nt, {}),
      " ",
      /* @__PURE__ */ s.jsx("span", { children: t })
    ] }) }),
    /* @__PURE__ */ s.jsx(qg, { children: /* @__PURE__ */ s.jsx(zC, { children: e }) })
  ] }) });
}
const IC = y.div`
  cursor: help;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  color: var(${f.foreground});
  > svg {
    fill: var(${f.foreground});
  }
`, zC = y(Ag)`
  max-width: 400px;
  color: var(${f.notificationsForeground});
  background-color: var(${f.notificationsBackground});
  border: 1px solid var(${f.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function Pn({
  oas: t,
  stages: e,
  container: n,
  executionResult: o,
  saveStage: r,
  removeStage: i,
  moveStage: a,
  fuzzing: l,
  operations: u,
  requests: c,
  goToRequest: d
}) {
  const p = (g) => (k) => r(g, k), h = (g) => () => i(g), [{ isOver: m }, v] = md(() => ({
    accept: "stage",
    collect: (g) => ({
      isOver: !!g.isOver()
    })
  }));
  return e.length === 0 ? null : /* @__PURE__ */ s.jsx(RC, { ref: v, children: e.map((g, k) => {
    var S;
    const j = { ...n, stageIndex: k };
    return /* @__PURE__ */ s.jsxs(Hn.Fragment, { children: [
      m && /* @__PURE__ */ s.jsx(NC, { moveStage: a, destinationIndex: k }),
      /* @__PURE__ */ s.jsx(
        jC,
        {
          oas: t,
          stage: g,
          result: (S = o == null ? void 0 : o.results) == null ? void 0 : S[k],
          saveStage: p(j),
          removeStage: h(j),
          goToRequest: d,
          location: j,
          fuzzing: l,
          operations: u,
          requests: c,
          stageIndex: k
        }
      )
    ] }, `stage-${k}-${g.ref.type}-${g.ref.id}`);
  }) });
}
function NC({
  destinationIndex: t,
  moveStage: e
}) {
  const [{ isOver: n }, o] = md(() => ({
    accept: "stage",
    drop: (r) => e(r.location, t),
    collect: (r) => ({
      isOver: !!r.isOver()
    })
  }));
  return /* @__PURE__ */ s.jsx(PC, { ref: o, isOver: n });
}
const RC = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, PC = y.div`
  display: flex;
  border: 16px solid var(${f.border});
  opacity: 0.5;
  cursor: pointer;
  ${({ isOver: t }) => t && "opacity: 1;"}
`;
function AC({
  operationIds: t,
  requestIds: e,
  onSelect: n
}) {
  const o = "", r = "", i = [];
  i.push(
    ...t.map(
      (m) => ({
        type: "operation",
        id: m
      })
    )
  ), i.push(
    ...e.map(
      (m) => ({
        type: "request",
        id: m
      })
    )
  );
  const [a, l] = b.useState(i), { isOpen: u, getMenuProps: c, getInputProps: d, getItemProps: p, openMenu: h } = Ur({
    initialInputValue: o,
    items: a,
    onSelectedItemChange: ({ selectedItem: m }) => {
      m && n(m);
    },
    onInputValueChange: ({ inputValue: m }) => {
      l(
        i.filter((v) => !m || v.id.toLowerCase().includes(m))
      );
    },
    itemToString: (m) => m ? m.id : ""
  });
  return /* @__PURE__ */ s.jsxs(MC, { children: [
    /* @__PURE__ */ s.jsx(
      FC,
      {
        autoFocus: !0,
        ...d({
          onFocus() {
            h();
          }
        }),
        placeholder: r,
        onBlur: (m) => {
          n(void 0);
        }
      }
    ),
    /* @__PURE__ */ s.jsx(LC, { children: /* @__PURE__ */ s.jsx(qC, { ...c(), isOpen: u, children: u && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(ec, { children: "Operations" }),
      a.map((m, v) => m.type === "operation" ? /* @__PURE__ */ s.jsx(
        "li",
        {
          ...p({
            item: m,
            index: v
          }),
          children: m.id
        },
        `li-${m.type}-${m.id}-${v}`
      ) : null),
      /* @__PURE__ */ s.jsx(ec, { children: "Requests" }),
      a.map((m, v) => m.type === "request" ? /* @__PURE__ */ s.jsx(
        "li",
        {
          ...p({
            item: m,
            index: v
          }),
          children: m.id
        },
        `li-${m.type}-${m.id}-${v}`
      ) : null)
    ] }) }) })
  ] });
}
const MC = y.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${f.border});
`, FC = y.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${f.border});
  color: var(${f.foreground});
  &::placeholder {
    color: var(${f.inputPlaceholderForeground});
  }
`, LC = y.div`
  position: relative;
  z-index: 1;
`, qC = y.ul`
  ${({ isOpen: t }) => t && `border: 1px solid var(${f.dropdownBorder});`}
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
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
    background-color: var(${f.listHoverBackground});
  }
`, ec = y.div`
  font-weight: 600;
  margin: 4px;
`;
function An({
  operationIds: t,
  requestIds: e,
  onSelect: n
}) {
  const [o, r] = b.useState(!1);
  return o ? /* @__PURE__ */ s.jsx(
    AC,
    {
      onSelect: (i) => {
        i !== void 0 && n(i), r(!1);
      },
      requestIds: e,
      operationIds: t
    }
  ) : /* @__PURE__ */ s.jsxs(
    BC,
    {
      onClick: (i) => {
        i.stopPropagation(), i.preventDefault(), r(!0);
      },
      children: [
        /* @__PURE__ */ s.jsx(Uo, {}),
        " Pick the operation"
      ]
    }
  );
}
const BC = y.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${f.border});
  color: var(${f.linkForeground});
  > svg {
    fill: var(${f.linkForeground});
  }
`;
function HC({
  onAddCredentialValue: t,
  existing: e
}) {
  const n = { name: "", value: "" }, o = (i) => {
    t(i.name, { credential: i.value, requests: [] });
  }, r = Wn({
    name: K().regex(Lo(), {
      message: qo
    }).refine((i) => !e.includes(i), {
      message: "Already exists"
    }),
    value: K().min(1)
  });
  return /* @__PURE__ */ s.jsx(
    Wo,
    {
      defaultValues: n,
      onSubmit: o,
      schema: r,
      trigger: /* @__PURE__ */ s.jsx(VC, { children: /* @__PURE__ */ s.jsx(Uo, {}) }),
      children: /* @__PURE__ */ s.jsx(UC, {})
    }
  );
}
function UC() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Ge, { label: "Credential name", name: "name" }),
    /* @__PURE__ */ s.jsx(Ge, { label: "Credential value", name: "value" })
  ] });
}
const VC = y.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${f.linkForeground});
    &:hover {
      fill: var(${f.linkActiveForeground});
    }
  }
`;
function WC({
  group: t,
  credentialId: e
}) {
  const n = oe(), { playbook: o, oas: r, selectedSubcredential: i } = q((w) => w.scanconf), { mockResult: a } = q((w) => w.auth), l = Object.keys(o.operations), u = Object.keys(o.requests || {}), c = (w) => n(At(w)), d = (w, $) => n(Mt({ location: w, reference: $ })), p = (w, $) => n(Pt({ location: w, to: $ })), h = (w, $) => {
    n(
      Rt({
        container: w,
        stage: {
          ref: $
        }
      })
    );
  }, m = (w) => {
    n(Xt(w)), n(se(["scanconf", "requests"]));
  }, { fields: v, append: g, remove: k } = cn({
    name: "methods"
  }), { getValues: j } = un(), S = v.map((w, $) => ({
    id: w.key,
    title: w.key,
    menu: /* @__PURE__ */ s.jsx(Ft, { children: /* @__PURE__ */ s.jsxs(dn, { onClick: (B) => B.stopPropagation(), onSelect: () => k($), children: [
      /* @__PURE__ */ s.jsx(Ue, {}),
      "Delete"
    ] }) }),
    content: /* @__PURE__ */ s.jsxs(GC, { value: w.key, children: [
      /* @__PURE__ */ s.jsx(Ge, { label: "Credential value", name: `methods.${$}.value.credential` }),
      /* @__PURE__ */ s.jsxs(KC, { children: [
        /* @__PURE__ */ s.jsx(
          Pn,
          {
            oas: r,
            stages: w.value.requests,
            container: {
              container: "credential",
              group: t,
              credentialId: e,
              subCredentialId: w.key
            },
            executionResult: a == null ? void 0 : a[0],
            saveStage: d,
            moveStage: p,
            removeStage: c,
            operations: o.operations,
            requests: o.requests,
            goToRequest: m
          }
        ),
        /* @__PURE__ */ s.jsx(
          An,
          {
            operationIds: l,
            requestIds: u,
            onSelect: (B) => h(
              { container: "credential", group: t, credentialId: e, subCredentialId: w.key },
              B
            )
          }
        )
      ] })
    ] })
  }));
  return /* @__PURE__ */ s.jsx(
    ft,
    {
      activeTab: i,
      setActiveTab: (w) => n(jr(w)),
      tabs: S,
      menu: /* @__PURE__ */ s.jsx(
        HC,
        {
          existing: j("methods").map((w) => w.key),
          onAddCredentialValue: (w, $) => {
            g({ key: w, value: $ }), n(jr(w));
          }
        }
      )
    }
  );
}
const GC = y(Cg)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, KC = y.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function sh({
  options: t,
  placeholder: e,
  selected: n,
  onSelectedItemChange: o
}) {
  const [r, i] = b.useState(""), [a, l] = b.useState(t);
  b.useEffect(() => {
    l(
      t.filter((h) => r === "" || h.toLowerCase().includes(r.toLowerCase()))
    );
  }, [r, t]);
  const { isOpen: u, getMenuProps: c, getInputProps: d, getItemProps: p } = Ur({
    initialInputValue: n,
    items: a,
    onInputValueChange: ({ inputValue: h }) => {
      o(h), i(h !== void 0 ? h : "");
    },
    itemToString: (h) => h || ""
  });
  return /* @__PURE__ */ s.jsxs(JC, { children: [
    /* @__PURE__ */ s.jsx(YC, { ...d(), placeholder: e }),
    /* @__PURE__ */ s.jsx(XC, { visible: u && a.length > 0, children: /* @__PURE__ */ s.jsx(QC, { ...c(), children: a.map((h, m) => /* @__PURE__ */ s.jsx(
      "li",
      {
        ...p({
          item: h,
          index: m
        }),
        children: h
      },
      `li-${m}`
    )) }) })
  ] });
}
const JC = y.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${f.focusBorder});
  }
  border: 1px solid transparent;
`, YC = y.input`
  background: transparent;
  border: none;
  color: var(${f.foreground});
  padding: 4px;
  &::placeholder {
    color: var(${f.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, XC = y.div`
  position: relative;
  z-index: 1;
  visibility: ${({ visible: t }) => t ? "visible" : "hidden"};
`, QC = y.ul`
  border: 1px solid var(${f.dropdownBorder});
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
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
    background-color: var(${f.listHoverBackground});
  }
`;
function Mn({
  onTry: t,
  onScan: e,
  servers: n,
  host: o,
  menu: r
}) {
  const { scanServer: i, useGlobalBlocks: a, rejectUnauthorized: l } = mg(
    (g) => g.prefs
  ), u = hg(), c = (g) => u(Uc(g)), d = (g) => u(fg(g)), p = (g) => u(gg(g)), h = [...n];
  o && !h.includes(o) && h.unshift(o);
  const [m, v] = b.useState(
    i !== "" ? i : h[0]
  );
  return !h.includes(i) && i !== "" && h.push(i), /* @__PURE__ */ s.jsx(e1, { children: /* @__PURE__ */ s.jsxs(ZC, { children: [
    /* @__PURE__ */ s.jsx(
      sh,
      {
        options: h,
        selected: m,
        onSelectedItemChange: (g) => {
          g && (v(g), c(g));
        }
      }
    ),
    /* @__PURE__ */ s.jsxs(
      tc,
      {
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault(), t(m);
        },
        children: [
          /* @__PURE__ */ s.jsx(Jg, {}),
          "Try"
        ]
      }
    ),
    e && /* @__PURE__ */ s.jsxs(
      tc,
      {
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault(), e(m);
        },
        children: [
          /* @__PURE__ */ s.jsx(Qg, {}),
          "Scan"
        ]
      }
    ),
    r && /* @__PURE__ */ s.jsx(t1, { children: /* @__PURE__ */ s.jsxs(Ft, { icon: "sliders", children: [
      /* @__PURE__ */ s.jsx(wx, { children: "Try settings" }),
      /* @__PURE__ */ s.jsx(xx, {}),
      /* @__PURE__ */ s.jsxs(
        du,
        {
          checked: a,
          onCheckedChange: (g) => d(g),
          children: [
            /* @__PURE__ */ s.jsx(cu, {}),
            "Execute global blocks"
          ]
        }
      ),
      /* @__PURE__ */ s.jsxs(
        du,
        {
          checked: l,
          onCheckedChange: (g) => p(g),
          children: [
            /* @__PURE__ */ s.jsx(cu, {}),
            "Reject untrusted SSL certificates"
          ]
        }
      )
    ] }) })
  ] }) });
}
const ZC = y.div`
  border: 1px solid var(${f.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, e1 = y.div`
  background-color: var(${f.background});
  color: var(${f.foreground});
`, tc = y.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  color: var(${f.linkForeground});
  > svg {
    fill: var(${f.linkForeground});
  }
`, t1 = y.div`
  display: flex;
  padding: 8px 12px;
`;
function n1({ selected: t }) {
  const e = oe(), {
    playbook: { authenticationDetails: n },
    servers: o
  } = q((c) => c.scanconf), { tryResult: r } = q((c) => c.auth), i = (c, d, p) => e(us({ group: parseInt(c), id: d, credential: p })), a = parseInt(t.sectionId), l = t.itemId, u = n[a][l];
  return /* @__PURE__ */ s.jsxs(o1, { children: [
    /* @__PURE__ */ s.jsx(
      Mn,
      {
        servers: o,
        onTry: (c) => {
          e(zd(c));
        }
      }
    ),
    /* @__PURE__ */ s.jsx(Se, { title: "Security Scheme", children: /* @__PURE__ */ s.jsx(
      vx,
      {
        credential: u,
        saveCredential: (c) => i(t.sectionId, t.itemId, c)
      },
      t.itemId
    ) }),
    /* @__PURE__ */ s.jsx(
      Se,
      {
        defaultOpen: !1,
        title: "Credentials",
        count: Object.keys(u.methods).length,
        children: /* @__PURE__ */ s.jsx(
          ot,
          {
            data: u,
            saveData: (c) => i(t.sectionId, t.itemId, c),
            wrapFormData: kp,
            unwrapFormData: jp,
            children: /* @__PURE__ */ s.jsx(WC, { group: a, credentialId: l })
          }
        )
      }
    ),
    r.length > 0 && /* @__PURE__ */ s.jsx(Se, { title: "Result", children: /* @__PURE__ */ s.jsx(Nn, { result: r }) })
  ] });
}
const o1 = y.div`
  padding: 8px;
`, No = y.button`
  cursor: pointer;
  background-color: var(${f.buttonBackground});
  color: var(${f.buttonForeground});
  border: 1px solid var(${f.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${f.focusBorder});
  }
`;
function r1() {
  const t = Bo({ name: "type" });
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Ge, { label: "ID", name: "id" }),
    /* @__PURE__ */ s.jsx(
      Hl,
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
    t !== "basic" && t !== "bearer" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        Hl,
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
      /* @__PURE__ */ s.jsx(Ge, { label: "Name", name: "name" })
    ] }),
    /* @__PURE__ */ s.jsx(Ge, { label: "Description", name: "description" }),
    /* @__PURE__ */ s.jsx(Ge, { label: "Credential name", name: "credentialName" }),
    /* @__PURE__ */ s.jsx(Ge, { label: "Credential value", name: "credentialValue" })
  ] });
}
function i1({
  onAddCredential: t,
  existing: e
}) {
  const n = {
    id: "",
    type: "apiKey",
    in: "header",
    name: "",
    description: "",
    credentialName: "",
    credentialValue: ""
  }, o = Wn({
    id: K().regex(Lo(), {
      message: qo
    }).refine((i) => !e.includes(i), {
      message: "Already exists"
    }),
    type: K(),
    in: K(),
    name: K(),
    description: K(),
    credentialName: K().regex(/^\w+$/),
    credentialValue: K().min(1)
  }), r = (i) => {
    const a = {
      [i.credentialName]: {
        credential: i.credentialValue,
        requests: [],
        description: ""
      }
    };
    t(
      i.id,
      i.type === "bearer" || i.type === "basic" ? (
        // skip name and in
        {
          type: i.type,
          default: i.credentialName,
          description: i.description,
          methods: a
        }
      ) : {
        type: i.type,
        default: i.credentialName,
        in: i.in,
        name: i.name,
        description: i.description,
        methods: a
      }
    );
  };
  return /* @__PURE__ */ s.jsx(
    Wo,
    {
      title: "New security scheme",
      defaultValues: n,
      schema: o,
      onSubmit: r,
      trigger: /* @__PURE__ */ s.jsx(No, { style: { width: "100%" }, children: "New security scheme" }),
      children: /* @__PURE__ */ s.jsx(r1, {})
    }
  );
}
function a1() {
  const t = oe(), {
    playbook: { authenticationDetails: e },
    selectedCredentialGroup: n,
    selectedCredential: o
  } = q((a) => a.scanconf), r = (a, l) => {
    t(ss({ credentialGroup: 0, id: a, credential: l })), t(kr({ group: 0, credential: a }));
  }, i = e.map((a, l) => {
    const u = l === 0 ? "Default group" : `Group ${l}`, c = Object.entries(a).map(([d, p]) => ({
      id: d,
      label: d,
      menu: /* @__PURE__ */ s.jsx(Ft, { children: /* @__PURE__ */ s.jsxs(
        dn,
        {
          onClick: (h) => h.stopPropagation(),
          onSelect: () => t(ls({ credentialGroup: l, id: d })),
          children: [
            /* @__PURE__ */ s.jsx(Ue, {}),
            "Delete"
          ]
        }
      ) })
    }));
    return {
      id: `${l}`,
      title: u,
      items: c
    };
  });
  return /* @__PURE__ */ s.jsx(
    Un,
    {
      title: "security schemes",
      sections: i,
      render: (a) => /* @__PURE__ */ s.jsx(n1, { selected: a }),
      renderButtons: () => /* @__PURE__ */ s.jsx(
        i1,
        {
          existing: Object.keys((e == null ? void 0 : e[0]) || []),
          onAddCredential: r
        }
      ),
      selected: o !== void 0 ? { sectionId: `${n}`, itemId: o } : void 0,
      onSelected: (a) => {
        t(
          kr({ group: parseInt(a.sectionId), credential: a.itemId })
        );
      }
    }
  );
}
function lh() {
  return /* @__PURE__ */ new Map();
}
function s1(t, e, n, o) {
  const r = e.ttl !== void 0 ? da(e.ttl) : void 0;
  if (r !== void 0) {
    const i = `${e.name}/${n}`, a = Date.now() + r;
    t.set(i, { value: o, expiryTime: a });
  }
}
function l1(t, e, n) {
  const o = `${e.name}/${n}`, r = t.get(o);
  if (r && Date.now() < r.expiryTime)
    return r.value;
  t.delete(o);
}
function ll(t, e) {
  return e.type === t.type && e.in === t.in || e.type === "http" && t.type == "basic" && e.in === t.in || e.type === "basic" && t.type == "basic" && e.in === t.in ? !0 : e.type === "http" && e.scheme == "bearer" && t.type === "bearer";
}
function u1(t, e, n) {
  const o = Mc(t, t.paths[e]), r = Mr(t, e, n), i = Fc(t, r);
  return Lc(t, o, i);
}
async function c1(t, e, n, o, r) {
  try {
    const i = Fr(t) ? await d1(t, e, n, o, r) : await p1(t, e, n, o, r);
    for (const { key: a, value: l } of o.parameters.header)
      i.headers[a.toLowerCase()] === void 0 && (i.headers[a] = String(l));
    return [
      {
        method: o.method,
        url: i.url,
        headers: i.headers,
        body: uh(i.body)
      },
      void 0
    ];
  } catch (i) {
    return [void 0, `failed to build http request: ${i}`];
  }
}
async function d1(t, e, n, o, r) {
  var c;
  const i = Ya(t, o.path, o.method);
  if (i === void 0)
    throw new Error(`operation not found for ${o.method} ${o.path}`);
  const a = ph(
    o.method,
    o.path,
    i
  ), l = x1(o);
  return Ho.buildRequest({
    spec: await h1(t, e),
    operationId: a,
    parameters: g1(o.parameters, r),
    securities: y1(t, r),
    requestContentType: l,
    requestBody: (c = o.body) == null ? void 0 : c.value
  });
}
async function p1(t, e, n, o, r) {
  const i = Ya(t, o.path, o.method);
  if (i === void 0)
    throw new Error(`operation not found for ${o.method} ${o.path}`);
  const a = ph(
    o.method,
    o.path,
    i
  );
  return Ho.buildRequest({
    spec: await f1(t, e),
    operationId: a,
    parameters: v1(t, o, r),
    securities: j1((t == null ? void 0 : t.securityDefinitions) || {}, r)
  });
}
async function m1(t) {
  var n, o, r, i;
  const e = new URLSearchParams(
    nc(t.parameters.query)
  ).toString();
  try {
    const a = nc(t.parameters.header);
    ((n = t.body) == null ? void 0 : n.mediaType) !== void 0 && (a["Content-Type"] = (o = t.body) == null ? void 0 : o.mediaType);
    const l = ((r = t.body) == null ? void 0 : r.mediaType) === "application/x-www-form-urlencoded" ? b1(t.body.value) : (i = t.body) == null ? void 0 : i.value;
    return [
      {
        method: t.method,
        url: e === "" ? t.url : `${t.url}?${e}`,
        headers: a,
        body: uh(l)
      },
      void 0
    ];
  } catch (a) {
    return [void 0, `failed to build http request: ${a}`];
  }
}
async function h1(t, e, n) {
  const o = [{ url: e }], { spec: r, errors: i } = await Ho.resolve({
    spec: JSON.parse(JSON.stringify({ ...t, servers: o }))
  });
  return r;
}
async function f1(t, e, n) {
  const o = new URL(e), r = o.protocol === "https:" ? ["https"] : ["http"], { spec: i, errors: a } = await Ho.resolve({
    spec: JSON.parse(JSON.stringify({ ...t, host: o.host, schemes: r }))
  });
  return i;
}
function uh(t) {
  if (t !== void 0) {
    {
      if (typeof t == "string")
        return t;
      if (t instanceof FormData)
        return Array.from(t.entries());
    }
    return JSON.stringify(t);
  }
}
function g1(t, e) {
  const n = ["path", "query", "header", "cookie"], o = ch(t, n);
  for (const { credential: r, value: i } of Object.values(e))
    n.includes(r.in) && r.name !== void 0 && (o[`${r.in}.${r.name}`] = i);
  return o;
}
function v1(t, e, n) {
  var l;
  const o = ["path", "query", "header"], r = ch(e.parameters, o);
  for (const { credential: u, value: c } of Object.values(n))
    o.includes(u.in) && u.name !== void 0 && (r[`${u.in}.${u.name}`] = c);
  const i = u1(t, e.path, e.method), a = Object.keys(i.body);
  if (a.length > 0) {
    const u = a[0];
    r[`body.${u}`] = (l = e.body) == null ? void 0 : l.value;
  }
  return r;
}
function ch(t, e) {
  const n = {};
  for (const o of e)
    for (const { key: r, value: i } of t[o]) {
      const a = `${o}.${r}`;
      n[a] === void 0 ? n[a] = i : Array.isArray(n[a]) ? n[a].push(i) : n[a] = [n[a], i];
    }
  return n;
}
function y1(t, e) {
  const n = k1(t), o = dh(n, e), r = {};
  for (const i of Object.keys(o)) {
    const a = In(t, n[i]), l = o[i];
    (a == null ? void 0 : a.type) === "oauth2" || (a == null ? void 0 : a.type) === "openIdConnect" ? r[i] = { token: { access_token: l } } : r[i] = l;
  }
  return { authorized: r };
}
function k1(t) {
  var n;
  const e = {};
  for (const [o, r] of Object.entries(((n = t.components) == null ? void 0 : n.securitySchemes) || {})) {
    const i = In(t, r);
    i !== void 0 && (e[o] = i);
  }
  return e;
}
function j1(t, e) {
  const n = {}, o = dh(t, e);
  for (const r of Object.keys(o)) {
    const i = t[r], a = o[r];
    (i == null ? void 0 : i.type) === "oauth" ? n[r] = { token: { access_token: a } } : n[r] = a;
  }
  return { authorized: n };
}
function dh(t, e) {
  const n = { ...e }, o = {};
  for (const [r, i] of Object.entries(t))
    for (const [a, { credential: l, value: u }] of Object.entries(n))
      if (ll(l, i)) {
        o[r] = u, delete n[a];
        break;
      }
  return o;
}
function nc(t) {
  const e = {};
  for (const { key: n, value: o } of t)
    e[n] = String(o);
  return e;
}
function b1(t) {
  const e = new URLSearchParams();
  for (const [n, o] of Object.entries(t))
    e.append(n, `${o}`);
  return e.toString();
}
function ph(t, e, n) {
  return Ho.helpers.opId(n, e, t);
}
function x1(t) {
  var e, n;
  if (((e = t.body) == null ? void 0 : e.mediaType) === "raw") {
    for (const { key: o, value: r } of t.parameters.header)
      if (o.toLowerCase() === "content-type")
        return String(r);
    return "text/plain";
  }
  return (n = t.body) == null ? void 0 : n.mediaType;
}
const vi = null;
function yi() {
  return async () => [vi, void 0];
}
function Je(t) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Je(t);
}
function mh(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function w1(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
  }
}
function hh(t, e, n) {
  return e && w1(t.prototype, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function S1(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && Po(t, e);
}
function Ro(t) {
  return Ro = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ro(t);
}
function Po(t, e) {
  return Po = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Po(t, e);
}
function fh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _o(t, e, n) {
  return fh() ? _o = Reflect.construct.bind() : _o = function(r, i, a) {
    var l = [null];
    l.push.apply(l, i);
    var u = Function.bind.apply(r, l), c = new u();
    return a && Po(c, a.prototype), c;
  }, _o.apply(null, arguments);
}
function C1(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Ma(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ma = function(o) {
    if (o === null || !C1(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(o)) return e.get(o);
      e.set(o, r);
    }
    function r() {
      return _o(o, arguments, Ro(this).constructor);
    }
    return r.prototype = Object.create(o.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Po(r, o);
  }, Ma(t);
}
function _1(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function T1(t, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _1(t);
}
function E1(t) {
  var e = fh();
  return function() {
    var o = Ro(t), r;
    if (e) {
      var i = Ro(this).constructor;
      r = Reflect.construct(o, arguments, i);
    } else
      r = o.apply(this, arguments);
    return T1(this, r);
  };
}
function O1(t) {
  return $1(t) || D1(t) || gh(t) || I1();
}
function $1(t) {
  if (Array.isArray(t)) return Fa(t);
}
function D1(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function gh(t, e) {
  if (t) {
    if (typeof t == "string") return Fa(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fa(t, e);
  }
}
function Fa(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
  return o;
}
function I1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z1(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = gh(t)) || e) {
      n && (t = n);
      var o = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return o >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[o++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, a = !1, l;
  return {
    s: function() {
      n = n.call(t);
    },
    n: function() {
      var u = n.next();
      return i = u.done, u;
    },
    e: function(u) {
      a = !0, l = u;
    },
    f: function() {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
  };
}
var Te = Object.prototype.hasOwnProperty;
function Gt(t, e) {
  return t = t.slice(), t.push(e), t;
}
function La(t, e) {
  return e = e.slice(), e.unshift(t), e;
}
var N1 = /* @__PURE__ */ function(t) {
  S1(n, t);
  var e = E1(n);
  function n(o) {
    var r;
    return mh(this, n), r = e.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), r.avoidNew = !0, r.value = o, r.name = "NewError", r;
  }
  return hh(n);
}(/* @__PURE__ */ Ma(Error));
function H(t, e, n, o, r) {
  if (!(this instanceof H))
    try {
      return new H(t, e, n, o, r);
    } catch (u) {
      if (!u.avoidNew)
        throw u;
      return u.value;
    }
  typeof t == "string" && (r = o, o = n, n = e, e = t, t = null);
  var i = t && Je(t) === "object";
  if (t = t || {}, this.json = t.json || n, this.path = t.path || e, this.resultType = t.resultType || "value", this.flatten = t.flatten || !1, this.wrap = Te.call(t, "wrap") ? t.wrap : !0, this.sandbox = t.sandbox || {}, this.preventEval = t.preventEval || !1, this.parent = t.parent || null, this.parentProperty = t.parentProperty || null, this.callback = t.callback || o || null, this.otherTypeCallback = t.otherTypeCallback || r || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, t.autostart !== !1) {
    var a = {
      path: i ? t.path : e
    };
    i ? "json" in t && (a.json = t.json) : a.json = n;
    var l = this.evaluate(a);
    if (!l || Je(l) !== "object")
      throw new N1(l);
    return l;
  }
}
H.prototype.evaluate = function(t, e, n, o) {
  var r = this, i = this.parent, a = this.parentProperty, l = this.flatten, u = this.wrap;
  if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, n = n || this.callback, this.currOtherTypeCallback = o || this.otherTypeCallback, e = e || this.json, t = t || this.path, t && Je(t) === "object" && !Array.isArray(t)) {
    if (!t.path && t.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!Te.call(t, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    var c = t;
    e = c.json, l = Te.call(t, "flatten") ? t.flatten : l, this.currResultType = Te.call(t, "resultType") ? t.resultType : this.currResultType, this.currSandbox = Te.call(t, "sandbox") ? t.sandbox : this.currSandbox, u = Te.call(t, "wrap") ? t.wrap : u, this.currPreventEval = Te.call(t, "preventEval") ? t.preventEval : this.currPreventEval, n = Te.call(t, "callback") ? t.callback : n, this.currOtherTypeCallback = Te.call(t, "otherTypeCallback") ? t.otherTypeCallback : this.currOtherTypeCallback, i = Te.call(t, "parent") ? t.parent : i, a = Te.call(t, "parentProperty") ? t.parentProperty : a, t = t.path;
  }
  if (i = i || null, a = a || null, Array.isArray(t) && (t = H.toPathString(t)), !(!t && t !== "" || !e)) {
    var d = H.toPathArray(t);
    d[0] === "$" && d.length > 1 && d.shift(), this._hasParentSelector = null;
    var p = this._trace(d, e, ["$"], i, a, n).filter(function(h) {
      return h && !h.isParentSelector;
    });
    return p.length ? !u && p.length === 1 && !p[0].hasArrExpr ? this._getPreferredOutput(p[0]) : p.reduce(function(h, m) {
      var v = r._getPreferredOutput(m);
      return l && Array.isArray(v) ? h = h.concat(v) : h.push(v), h;
    }, []) : u ? [] : void 0;
  }
};
H.prototype._getPreferredOutput = function(t) {
  var e = this.currResultType;
  switch (e) {
    case "all": {
      var n = Array.isArray(t.path) ? t.path : H.toPathArray(t.path);
      return t.pointer = H.toPointer(n), t.path = typeof t.path == "string" ? t.path : H.toPathString(t.path), t;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return t[e];
    case "path":
      return H.toPathString(t[e]);
    case "pointer":
      return H.toPointer(t.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
H.prototype._handleCallback = function(t, e, n) {
  if (e) {
    var o = this._getPreferredOutput(t);
    t.path = typeof t.path == "string" ? t.path : H.toPathString(t.path), e(o, n, t);
  }
};
H.prototype._trace = function(t, e, n, o, r, i, a, l) {
  var u = this, c;
  if (!t.length)
    return c = {
      path: n,
      value: e,
      parent: o,
      parentProperty: r,
      hasArrExpr: a
    }, this._handleCallback(c, i, "value"), c;
  var d = t[0], p = t.slice(1), h = [];
  function m(R) {
    Array.isArray(R) ? R.forEach(function(Oe) {
      h.push(Oe);
    }) : h.push(R);
  }
  if ((typeof d != "string" || l) && e && Te.call(e, d))
    m(this._trace(p, e[d], Gt(n, d), e, d, i, a));
  else if (d === "*")
    this._walk(e, function(R) {
      m(u._trace(p, e[R], Gt(n, R), e, R, i, !0, !0));
    });
  else if (d === "..")
    m(this._trace(p, e, n, o, r, i, a)), this._walk(e, function(R) {
      Je(e[R]) === "object" && m(u._trace(t.slice(), e[R], Gt(n, R), e, R, i, !0));
    });
  else {
    if (d === "^")
      return this._hasParentSelector = !0, {
        path: n.slice(0, -1),
        expr: p,
        isParentSelector: !0
      };
    if (d === "~")
      return c = {
        path: Gt(n, d),
        value: r,
        parent: o,
        parentProperty: null
      }, this._handleCallback(c, i, "property"), c;
    if (d === "$")
      m(this._trace(p, e, n, null, null, i, a));
    else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(d))
      m(this._slice(d, p, e, n, o, r, i));
    else if (d.indexOf("?(") === 0) {
      if (this.currPreventEval)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      var v = d.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1");
      this._walk(e, function(R) {
        u._eval(v, e[R], R, n, o, r) && m(u._trace(p, e[R], Gt(n, R), e, R, i, !0));
      });
    } else if (d[0] === "(") {
      if (this.currPreventEval)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      m(this._trace(La(this._eval(d, e, n[n.length - 1], n.slice(0, -1), o, r), p), e, n, o, r, i, a));
    } else if (d[0] === "@") {
      var g = !1, k = d.slice(1, -2);
      switch (k) {
        case "scalar":
          (!e || !["object", "function"].includes(Je(e))) && (g = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          Je(e) === k && (g = !0);
          break;
        case "integer":
          Number.isFinite(e) && !(e % 1) && (g = !0);
          break;
        case "number":
          Number.isFinite(e) && (g = !0);
          break;
        case "nonFinite":
          typeof e == "number" && !Number.isFinite(e) && (g = !0);
          break;
        case "object":
          e && Je(e) === k && (g = !0);
          break;
        case "array":
          Array.isArray(e) && (g = !0);
          break;
        case "other":
          g = this.currOtherTypeCallback(e, n, o, r);
          break;
        case "null":
          e === null && (g = !0);
          break;
        default:
          throw new TypeError("Unknown value type " + k);
      }
      if (g)
        return c = {
          path: n,
          value: e,
          parent: o,
          parentProperty: r
        }, this._handleCallback(c, i, "value"), c;
    } else if (d[0] === "`" && e && Te.call(e, d.slice(1))) {
      var j = d.slice(1);
      m(this._trace(p, e[j], Gt(n, j), e, j, i, a, !0));
    } else if (d.includes(",")) {
      var S = d.split(","), w = z1(S), $;
      try {
        for (w.s(); !($ = w.n()).done; ) {
          var B = $.value;
          m(this._trace(La(B, p), e, n, o, r, i, !0));
        }
      } catch (R) {
        w.e(R);
      } finally {
        w.f();
      }
    } else !l && e && Te.call(e, d) && m(this._trace(p, e[d], Gt(n, d), e, d, i, a, !0));
  }
  if (this._hasParentSelector)
    for (var O = 0; O < h.length; O++) {
      var A = h[O];
      if (A && A.isParentSelector) {
        var N = this._trace(A.expr, e, A.path, o, r, i, a);
        if (Array.isArray(N)) {
          h[O] = N[0];
          for (var re = N.length, I = 1; I < re; I++)
            O++, h.splice(O, 0, N[I]);
        } else
          h[O] = N;
      }
    }
  return h;
};
H.prototype._walk = function(t, e) {
  if (Array.isArray(t))
    for (var n = t.length, o = 0; o < n; o++)
      e(o);
  else t && Je(t) === "object" && Object.keys(t).forEach(function(r) {
    e(r);
  });
};
H.prototype._slice = function(t, e, n, o, r, i, a) {
  if (Array.isArray(n)) {
    var l = n.length, u = t.split(":"), c = u[2] && Number.parseInt(u[2]) || 1, d = u[0] && Number.parseInt(u[0]) || 0, p = u[1] && Number.parseInt(u[1]) || l;
    d = d < 0 ? Math.max(0, d + l) : Math.min(l, d), p = p < 0 ? Math.max(0, p + l) : Math.min(l, p);
    for (var h = [], m = d; m < p; m += c) {
      var v = this._trace(La(m, e), n, o, r, i, a, !0);
      v.forEach(function(g) {
        h.push(g);
      });
    }
    return h;
  }
};
H.prototype._eval = function(t, e, n, o, r, i) {
  this.currSandbox._$_parentProperty = i, this.currSandbox._$_parent = r, this.currSandbox._$_property = n, this.currSandbox._$_root = this.json, this.currSandbox._$_v = e;
  var a = t.includes("@path");
  a && (this.currSandbox._$_path = H.toPathString(o.concat([n])));
  var l = "script:" + t;
  if (!H.cache[l]) {
    var u = t.replace(/@parentProperty/g, "_$_parentProperty").replace(/@parent/g, "_$_parent").replace(/@property/g, "_$_property").replace(/@root/g, "_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
    a && (u = u.replace(/@path/g, "_$_path")), H.cache[l] = new this.vm.Script(u);
  }
  try {
    return H.cache[l].runInNewContext(this.currSandbox);
  } catch (c) {
    throw new Error("jsonPath: " + c.message + ": " + t);
  }
};
H.cache = {};
H.toPathString = function(t) {
  for (var e = t, n = e.length, o = "$", r = 1; r < n; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[r]) || (o += /^[\*0-9]+$/.test(e[r]) ? "[" + e[r] + "]" : "['" + e[r] + "']");
  return o;
};
H.toPointer = function(t) {
  for (var e = t, n = e.length, o = "", r = 1; r < n; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[r]) || (o += "/" + e[r].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
  return o;
};
H.toPathArray = function(t) {
  var e = H.cache;
  if (e[t])
    return e[t].concat();
  var n = [], o = t.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function(i, a) {
    return "[#" + (n.push(a) - 1) + "]";
  }).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function(i, a) {
    return "['" + a.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function(i, a) {
    return ";" + a.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, ""), r = o.split(";").map(function(i) {
    var a = i.match(/#([0-9]+)/);
    return !a || !a[1] ? i : n[a[1]];
  });
  return e[t] = r, e[t].concat();
};
var R1 = function(e, n, o) {
  for (var r = e.length, i = 0; i < r; i++) {
    var a = e[i];
    o(a) && n.push(e.splice(i--, 1)[0]);
  }
}, P1 = /* @__PURE__ */ function() {
  function t(e) {
    mh(this, t), this.code = e;
  }
  return hh(t, [{
    key: "runInNewContext",
    value: function(n) {
      var o = this.code, r = Object.keys(n), i = [];
      R1(r, i, function(d) {
        return typeof n[d] == "function";
      });
      var a = r.map(function(d, p) {
        return n[d];
      }), l = i.reduce(function(d, p) {
        var h = n[p].toString();
        return /function/.test(h) || (h = "function " + h), "var " + p + "=" + h + ";" + d;
      }, "");
      o = l + o, !/(["'])use strict\1/.test(o) && !r.includes("arguments") && (o = "var arguments = undefined;" + o), o = o.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
      var u = o.lastIndexOf(";"), c = u > -1 ? o.slice(0, u + 1) + " return " + o.slice(u + 1) : " return " + o;
      return _o(Function, r.concat([c])).apply(void 0, O1(a));
    }
  }]), t;
}();
H.prototype.vm = {
  Script: P1
};
const $n = 2147483647, Ye = 36, ul = 1, Ao = 26, A1 = 38, M1 = 700, vh = 72, yh = 128, kh = "-", F1 = /^xn--/, L1 = /[^\0-\x7F]/, q1 = /[\x2E\u3002\uFF0E\uFF61]/g, B1 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, ea = Ye - ul, Xe = Math.floor, ta = String.fromCharCode;
function wt(t) {
  throw new RangeError(B1[t]);
}
function H1(t, e) {
  const n = [];
  let o = t.length;
  for (; o--; )
    n[o] = e(t[o]);
  return n;
}
function jh(t, e) {
  const n = t.split("@");
  let o = "";
  n.length > 1 && (o = n[0] + "@", t = n[1]), t = t.replace(q1, ".");
  const r = t.split("."), i = H1(r, e).join(".");
  return o + i;
}
function cl(t) {
  const e = [];
  let n = 0;
  const o = t.length;
  for (; n < o; ) {
    const r = t.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < o) {
      const i = t.charCodeAt(n++);
      (i & 64512) == 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
const bh = (t) => String.fromCodePoint(...t), U1 = function(t) {
  return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : Ye;
}, oc = function(t, e) {
  return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
}, xh = function(t, e, n) {
  let o = 0;
  for (t = n ? Xe(t / M1) : t >> 1, t += Xe(t / e); t > ea * Ao >> 1; o += Ye)
    t = Xe(t / ea);
  return Xe(o + (ea + 1) * t / (t + A1));
}, dl = function(t) {
  const e = [], n = t.length;
  let o = 0, r = yh, i = vh, a = t.lastIndexOf(kh);
  a < 0 && (a = 0);
  for (let l = 0; l < a; ++l)
    t.charCodeAt(l) >= 128 && wt("not-basic"), e.push(t.charCodeAt(l));
  for (let l = a > 0 ? a + 1 : 0; l < n; ) {
    const u = o;
    for (let d = 1, p = Ye; ; p += Ye) {
      l >= n && wt("invalid-input");
      const h = U1(t.charCodeAt(l++));
      h >= Ye && wt("invalid-input"), h > Xe(($n - o) / d) && wt("overflow"), o += h * d;
      const m = p <= i ? ul : p >= i + Ao ? Ao : p - i;
      if (h < m)
        break;
      const v = Ye - m;
      d > Xe($n / v) && wt("overflow"), d *= v;
    }
    const c = e.length + 1;
    i = xh(o - u, c, u == 0), Xe(o / c) > $n - r && wt("overflow"), r += Xe(o / c), o %= c, e.splice(o++, 0, r);
  }
  return String.fromCodePoint(...e);
}, pl = function(t) {
  const e = [];
  t = cl(t);
  const n = t.length;
  let o = yh, r = 0, i = vh;
  for (const u of t)
    u < 128 && e.push(ta(u));
  const a = e.length;
  let l = a;
  for (a && e.push(kh); l < n; ) {
    let u = $n;
    for (const d of t)
      d >= o && d < u && (u = d);
    const c = l + 1;
    u - o > Xe(($n - r) / c) && wt("overflow"), r += (u - o) * c, o = u;
    for (const d of t)
      if (d < o && ++r > $n && wt("overflow"), d === o) {
        let p = r;
        for (let h = Ye; ; h += Ye) {
          const m = h <= i ? ul : h >= i + Ao ? Ao : h - i;
          if (p < m)
            break;
          const v = p - m, g = Ye - m;
          e.push(
            ta(oc(m + v % g, 0))
          ), p = Xe(v / g);
        }
        e.push(ta(oc(p, 0))), i = xh(r, c, l === a), r = 0, ++l;
      }
    ++r, ++o;
  }
  return e.join("");
}, wh = function(t) {
  return jh(t, function(e) {
    return F1.test(e) ? dl(e.slice(4).toLowerCase()) : e;
  });
}, Sh = function(t) {
  return jh(t, function(e) {
    return L1.test(e) ? "xn--" + pl(e) : e;
  });
}, V1 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: cl,
    encode: bh
  },
  decode: dl,
  encode: pl,
  toASCII: Sh,
  toUnicode: wh
}, W1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: dl,
  default: V1,
  encode: pl,
  toASCII: Sh,
  toUnicode: wh,
  ucs2decode: cl,
  ucs2encode: bh
}, Symbol.toStringTag, { value: "Module" })), Ch = /* @__PURE__ */ gf(W1);
var G1 = function(e, n) {
  if (n = n.split(":")[0], e = +e, !e) return !1;
  switch (n) {
    case "http":
    case "ws":
      return e !== 80;
    case "https":
    case "wss":
      return e !== 443;
    case "ftp":
      return e !== 21;
    case "gopher":
      return e !== 70;
    case "file":
      return !1;
  }
  return e !== 0;
}, ml = {}, K1 = Object.prototype.hasOwnProperty, J1;
function rc(t) {
  try {
    return decodeURIComponent(t.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function ic(t) {
  try {
    return encodeURIComponent(t);
  } catch {
    return null;
  }
}
function Y1(t) {
  for (var e = /([^=?#&]+)=?([^&]*)/g, n = {}, o; o = e.exec(t); ) {
    var r = rc(o[1]), i = rc(o[2]);
    r === null || i === null || r in n || (n[r] = i);
  }
  return n;
}
function X1(t, e) {
  e = e || "";
  var n = [], o, r;
  typeof e != "string" && (e = "?");
  for (r in t)
    if (K1.call(t, r)) {
      if (o = t[r], !o && (o === null || o === J1 || isNaN(o)) && (o = ""), r = ic(r), o = ic(o), r === null || o === null) continue;
      n.push(r + "=" + o);
    }
  return n.length ? e + n.join("&") : "";
}
ml.stringify = X1;
ml.parse = Y1;
var _h = G1, ki = ml, Q1 = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, Th = /[\n\r\t]/g, Z1 = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, Eh = /:\d+$/, e_ = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, t_ = /^[a-zA-Z]:/;
function hl(t) {
  return (t || "").toString().replace(Q1, "");
}
var qa = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(e, n) {
    return Qe(n.protocol) ? e.replace(/\\/g, "/") : e;
  },
  ["/", "pathname"],
  // Extract from the back.
  ["@", "auth", 1],
  // Extract from the front.
  [NaN, "host", void 0, 1, 1],
  // Set left over value.
  [/:(\d*)$/, "port", void 0, 1],
  // RegExp the back.
  [NaN, "hostname", void 0, 1, 1]
  // Set left over.
], ac = { hash: 1, query: 1 };
function Oh(t) {
  var e;
  typeof window < "u" ? e = window : typeof oa < "u" ? e = oa : typeof self < "u" ? e = self : e = {};
  var n = e.location || {};
  t = t || n;
  var o = {}, r = typeof t, i;
  if (t.protocol === "blob:")
    o = new tt(unescape(t.pathname), {});
  else if (r === "string") {
    o = new tt(t, {});
    for (i in ac) delete o[i];
  } else if (r === "object") {
    for (i in t)
      i in ac || (o[i] = t[i]);
    o.slashes === void 0 && (o.slashes = Z1.test(t.href));
  }
  return o;
}
function Qe(t) {
  return t === "file:" || t === "ftp:" || t === "http:" || t === "https:" || t === "ws:" || t === "wss:";
}
function $h(t, e) {
  t = hl(t), t = t.replace(Th, ""), e = e || {};
  var n = e_.exec(t), o = n[1] ? n[1].toLowerCase() : "", r = !!n[2], i = !!n[3], a = 0, l;
  return r ? i ? (l = n[2] + n[3] + n[4], a = n[2].length + n[3].length) : (l = n[2] + n[4], a = n[2].length) : i ? (l = n[3] + n[4], a = n[3].length) : l = n[4], o === "file:" ? a >= 2 && (l = l.slice(2)) : Qe(o) ? l = n[4] : o ? r && (l = l.slice(2)) : a >= 2 && Qe(e.protocol) && (l = n[4]), {
    protocol: o,
    slashes: r || Qe(o),
    slashesCount: a,
    rest: l
  };
}
function n_(t, e) {
  if (t === "") return e;
  for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), o = n.length, r = n[o - 1], i = !1, a = 0; o--; )
    n[o] === "." ? n.splice(o, 1) : n[o] === ".." ? (n.splice(o, 1), a++) : a && (o === 0 && (i = !0), n.splice(o, 1), a--);
  return i && n.unshift(""), (r === "." || r === "..") && n.push(""), n.join("/");
}
function tt(t, e, n) {
  if (t = hl(t), t = t.replace(Th, ""), !(this instanceof tt))
    return new tt(t, e, n);
  var o, r, i, a, l, u, c = qa.slice(), d = typeof e, p = this, h = 0;
  for (d !== "object" && d !== "string" && (n = e, e = null), n && typeof n != "function" && (n = ki.parse), e = Oh(e), r = $h(t || "", e), o = !r.protocol && !r.slashes, p.slashes = r.slashes || o && e.slashes, p.protocol = r.protocol || e.protocol || "", t = r.rest, (r.protocol === "file:" && (r.slashesCount !== 2 || t_.test(t)) || !r.slashes && (r.protocol || r.slashesCount < 2 || !Qe(p.protocol))) && (c[3] = [/(.*)/, "pathname"]); h < c.length; h++) {
    if (a = c[h], typeof a == "function") {
      t = a(t, p);
      continue;
    }
    i = a[0], u = a[1], i !== i ? p[u] = t : typeof i == "string" ? (l = i === "@" ? t.lastIndexOf(i) : t.indexOf(i), ~l && (typeof a[2] == "number" ? (p[u] = t.slice(0, l), t = t.slice(l + a[2])) : (p[u] = t.slice(l), t = t.slice(0, l)))) : (l = i.exec(t)) && (p[u] = l[1], t = t.slice(0, l.index)), p[u] = p[u] || o && a[3] && e[u] || "", a[4] && (p[u] = p[u].toLowerCase());
  }
  n && (p.query = n(p.query)), o && e.slashes && p.pathname.charAt(0) !== "/" && (p.pathname !== "" || e.pathname !== "") && (p.pathname = n_(p.pathname, e.pathname)), p.pathname.charAt(0) !== "/" && Qe(p.protocol) && (p.pathname = "/" + p.pathname), _h(p.port, p.protocol) || (p.host = p.hostname, p.port = ""), p.username = p.password = "", p.auth && (l = p.auth.indexOf(":"), ~l ? (p.username = p.auth.slice(0, l), p.username = encodeURIComponent(decodeURIComponent(p.username)), p.password = p.auth.slice(l + 1), p.password = encodeURIComponent(decodeURIComponent(p.password))) : p.username = encodeURIComponent(decodeURIComponent(p.auth)), p.auth = p.password ? p.username + ":" + p.password : p.username), p.origin = p.protocol !== "file:" && Qe(p.protocol) && p.host ? p.protocol + "//" + p.host : "null", p.href = p.toString();
}
function o_(t, e, n) {
  var o = this;
  switch (t) {
    case "query":
      typeof e == "string" && e.length && (e = (n || ki.parse)(e)), o[t] = e;
      break;
    case "port":
      o[t] = e, _h(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname, o[t] = "");
      break;
    case "hostname":
      o[t] = e, o.port && (e += ":" + o.port), o.host = e;
      break;
    case "host":
      o[t] = e, Eh.test(e) ? (e = e.split(":"), o.port = e.pop(), o.hostname = e.join(":")) : (o.hostname = e, o.port = "");
      break;
    case "protocol":
      o.protocol = e.toLowerCase(), o.slashes = !n;
      break;
    case "pathname":
    case "hash":
      if (e) {
        var r = t === "pathname" ? "/" : "#";
        o[t] = e.charAt(0) !== r ? r + e : e;
      } else
        o[t] = e;
      break;
    case "username":
    case "password":
      o[t] = encodeURIComponent(e);
      break;
    case "auth":
      var i = e.indexOf(":");
      ~i ? (o.username = e.slice(0, i), o.username = encodeURIComponent(decodeURIComponent(o.username)), o.password = e.slice(i + 1), o.password = encodeURIComponent(decodeURIComponent(o.password))) : o.username = encodeURIComponent(decodeURIComponent(e));
  }
  for (var a = 0; a < qa.length; a++) {
    var l = qa[a];
    l[4] && (o[l[1]] = o[l[1]].toLowerCase());
  }
  return o.auth = o.password ? o.username + ":" + o.password : o.username, o.origin = o.protocol !== "file:" && Qe(o.protocol) && o.host ? o.protocol + "//" + o.host : "null", o.href = o.toString(), o;
}
function r_(t) {
  (!t || typeof t != "function") && (t = ki.stringify);
  var e, n = this, o = n.host, r = n.protocol;
  r && r.charAt(r.length - 1) !== ":" && (r += ":");
  var i = r + (n.protocol && n.slashes || Qe(n.protocol) ? "//" : "");
  return n.username ? (i += n.username, n.password && (i += ":" + n.password), i += "@") : n.password ? (i += ":" + n.password, i += "@") : n.protocol !== "file:" && Qe(n.protocol) && !o && n.pathname !== "/" && (i += "@"), (o[o.length - 1] === ":" || Eh.test(n.hostname) && !n.port) && (o += ":"), i += o + n.pathname, e = typeof n.query == "object" ? t(n.query) : n.query, e && (i += e.charAt(0) !== "?" ? "?" + e : e), n.hash && (i += n.hash), i;
}
tt.prototype = { set: o_, toString: r_ };
tt.extractProtocol = $h;
tt.location = Oh;
tt.trimLeft = hl;
tt.qs = ki;
var i_ = tt, fl = {}, Dh = {};
const a_ = [
  "ac",
  "com.ac",
  "edu.ac",
  "gov.ac",
  "net.ac",
  "mil.ac",
  "org.ac",
  "ad",
  "nom.ad",
  "ae",
  "co.ae",
  "net.ae",
  "org.ae",
  "sch.ae",
  "ac.ae",
  "gov.ae",
  "mil.ae",
  "aero",
  "accident-investigation.aero",
  "accident-prevention.aero",
  "aerobatic.aero",
  "aeroclub.aero",
  "aerodrome.aero",
  "agents.aero",
  "aircraft.aero",
  "airline.aero",
  "airport.aero",
  "air-surveillance.aero",
  "airtraffic.aero",
  "air-traffic-control.aero",
  "ambulance.aero",
  "amusement.aero",
  "association.aero",
  "author.aero",
  "ballooning.aero",
  "broker.aero",
  "caa.aero",
  "cargo.aero",
  "catering.aero",
  "certification.aero",
  "championship.aero",
  "charter.aero",
  "civilaviation.aero",
  "club.aero",
  "conference.aero",
  "consultant.aero",
  "consulting.aero",
  "control.aero",
  "council.aero",
  "crew.aero",
  "design.aero",
  "dgca.aero",
  "educator.aero",
  "emergency.aero",
  "engine.aero",
  "engineer.aero",
  "entertainment.aero",
  "equipment.aero",
  "exchange.aero",
  "express.aero",
  "federation.aero",
  "flight.aero",
  "fuel.aero",
  "gliding.aero",
  "government.aero",
  "groundhandling.aero",
  "group.aero",
  "hanggliding.aero",
  "homebuilt.aero",
  "insurance.aero",
  "journal.aero",
  "journalist.aero",
  "leasing.aero",
  "logistics.aero",
  "magazine.aero",
  "maintenance.aero",
  "media.aero",
  "microlight.aero",
  "modelling.aero",
  "navigation.aero",
  "parachuting.aero",
  "paragliding.aero",
  "passenger-association.aero",
  "pilot.aero",
  "press.aero",
  "production.aero",
  "recreation.aero",
  "repbody.aero",
  "res.aero",
  "research.aero",
  "rotorcraft.aero",
  "safety.aero",
  "scientist.aero",
  "services.aero",
  "show.aero",
  "skydiving.aero",
  "software.aero",
  "student.aero",
  "trader.aero",
  "trading.aero",
  "trainer.aero",
  "union.aero",
  "workinggroup.aero",
  "works.aero",
  "af",
  "gov.af",
  "com.af",
  "org.af",
  "net.af",
  "edu.af",
  "ag",
  "com.ag",
  "org.ag",
  "net.ag",
  "co.ag",
  "nom.ag",
  "ai",
  "off.ai",
  "com.ai",
  "net.ai",
  "org.ai",
  "al",
  "com.al",
  "edu.al",
  "gov.al",
  "mil.al",
  "net.al",
  "org.al",
  "am",
  "co.am",
  "com.am",
  "commune.am",
  "net.am",
  "org.am",
  "ao",
  "ed.ao",
  "gv.ao",
  "og.ao",
  "co.ao",
  "pb.ao",
  "it.ao",
  "aq",
  "ar",
  "bet.ar",
  "com.ar",
  "coop.ar",
  "edu.ar",
  "gob.ar",
  "gov.ar",
  "int.ar",
  "mil.ar",
  "musica.ar",
  "mutual.ar",
  "net.ar",
  "org.ar",
  "senasa.ar",
  "tur.ar",
  "arpa",
  "e164.arpa",
  "in-addr.arpa",
  "ip6.arpa",
  "iris.arpa",
  "uri.arpa",
  "urn.arpa",
  "as",
  "gov.as",
  "asia",
  "at",
  "ac.at",
  "co.at",
  "gv.at",
  "or.at",
  "sth.ac.at",
  "au",
  "com.au",
  "net.au",
  "org.au",
  "edu.au",
  "gov.au",
  "asn.au",
  "id.au",
  "info.au",
  "conf.au",
  "oz.au",
  "act.au",
  "nsw.au",
  "nt.au",
  "qld.au",
  "sa.au",
  "tas.au",
  "vic.au",
  "wa.au",
  "act.edu.au",
  "catholic.edu.au",
  "nsw.edu.au",
  "nt.edu.au",
  "qld.edu.au",
  "sa.edu.au",
  "tas.edu.au",
  "vic.edu.au",
  "wa.edu.au",
  "qld.gov.au",
  "sa.gov.au",
  "tas.gov.au",
  "vic.gov.au",
  "wa.gov.au",
  "schools.nsw.edu.au",
  "aw",
  "com.aw",
  "ax",
  "az",
  "com.az",
  "net.az",
  "int.az",
  "gov.az",
  "org.az",
  "edu.az",
  "info.az",
  "pp.az",
  "mil.az",
  "name.az",
  "pro.az",
  "biz.az",
  "ba",
  "com.ba",
  "edu.ba",
  "gov.ba",
  "mil.ba",
  "net.ba",
  "org.ba",
  "bb",
  "biz.bb",
  "co.bb",
  "com.bb",
  "edu.bb",
  "gov.bb",
  "info.bb",
  "net.bb",
  "org.bb",
  "store.bb",
  "tv.bb",
  "*.bd",
  "be",
  "ac.be",
  "bf",
  "gov.bf",
  "bg",
  "a.bg",
  "b.bg",
  "c.bg",
  "d.bg",
  "e.bg",
  "f.bg",
  "g.bg",
  "h.bg",
  "i.bg",
  "j.bg",
  "k.bg",
  "l.bg",
  "m.bg",
  "n.bg",
  "o.bg",
  "p.bg",
  "q.bg",
  "r.bg",
  "s.bg",
  "t.bg",
  "u.bg",
  "v.bg",
  "w.bg",
  "x.bg",
  "y.bg",
  "z.bg",
  "0.bg",
  "1.bg",
  "2.bg",
  "3.bg",
  "4.bg",
  "5.bg",
  "6.bg",
  "7.bg",
  "8.bg",
  "9.bg",
  "bh",
  "com.bh",
  "edu.bh",
  "net.bh",
  "org.bh",
  "gov.bh",
  "bi",
  "co.bi",
  "com.bi",
  "edu.bi",
  "or.bi",
  "org.bi",
  "biz",
  "bj",
  "asso.bj",
  "barreau.bj",
  "gouv.bj",
  "bm",
  "com.bm",
  "edu.bm",
  "gov.bm",
  "net.bm",
  "org.bm",
  "bn",
  "com.bn",
  "edu.bn",
  "gov.bn",
  "net.bn",
  "org.bn",
  "bo",
  "com.bo",
  "edu.bo",
  "gob.bo",
  "int.bo",
  "org.bo",
  "net.bo",
  "mil.bo",
  "tv.bo",
  "web.bo",
  "academia.bo",
  "agro.bo",
  "arte.bo",
  "blog.bo",
  "bolivia.bo",
  "ciencia.bo",
  "cooperativa.bo",
  "democracia.bo",
  "deporte.bo",
  "ecologia.bo",
  "economia.bo",
  "empresa.bo",
  "indigena.bo",
  "industria.bo",
  "info.bo",
  "medicina.bo",
  "movimiento.bo",
  "musica.bo",
  "natural.bo",
  "nombre.bo",
  "noticias.bo",
  "patria.bo",
  "politica.bo",
  "profesional.bo",
  "plurinacional.bo",
  "pueblo.bo",
  "revista.bo",
  "salud.bo",
  "tecnologia.bo",
  "tksat.bo",
  "transporte.bo",
  "wiki.bo",
  "br",
  "9guacu.br",
  "abc.br",
  "adm.br",
  "adv.br",
  "agr.br",
  "aju.br",
  "am.br",
  "anani.br",
  "aparecida.br",
  "app.br",
  "arq.br",
  "art.br",
  "ato.br",
  "b.br",
  "barueri.br",
  "belem.br",
  "bhz.br",
  "bib.br",
  "bio.br",
  "blog.br",
  "bmd.br",
  "boavista.br",
  "bsb.br",
  "campinagrande.br",
  "campinas.br",
  "caxias.br",
  "cim.br",
  "cng.br",
  "cnt.br",
  "com.br",
  "contagem.br",
  "coop.br",
  "coz.br",
  "cri.br",
  "cuiaba.br",
  "curitiba.br",
  "def.br",
  "des.br",
  "det.br",
  "dev.br",
  "ecn.br",
  "eco.br",
  "edu.br",
  "emp.br",
  "enf.br",
  "eng.br",
  "esp.br",
  "etc.br",
  "eti.br",
  "far.br",
  "feira.br",
  "flog.br",
  "floripa.br",
  "fm.br",
  "fnd.br",
  "fortal.br",
  "fot.br",
  "foz.br",
  "fst.br",
  "g12.br",
  "geo.br",
  "ggf.br",
  "goiania.br",
  "gov.br",
  "ac.gov.br",
  "al.gov.br",
  "am.gov.br",
  "ap.gov.br",
  "ba.gov.br",
  "ce.gov.br",
  "df.gov.br",
  "es.gov.br",
  "go.gov.br",
  "ma.gov.br",
  "mg.gov.br",
  "ms.gov.br",
  "mt.gov.br",
  "pa.gov.br",
  "pb.gov.br",
  "pe.gov.br",
  "pi.gov.br",
  "pr.gov.br",
  "rj.gov.br",
  "rn.gov.br",
  "ro.gov.br",
  "rr.gov.br",
  "rs.gov.br",
  "sc.gov.br",
  "se.gov.br",
  "sp.gov.br",
  "to.gov.br",
  "gru.br",
  "imb.br",
  "ind.br",
  "inf.br",
  "jab.br",
  "jampa.br",
  "jdf.br",
  "joinville.br",
  "jor.br",
  "jus.br",
  "leg.br",
  "lel.br",
  "log.br",
  "londrina.br",
  "macapa.br",
  "maceio.br",
  "manaus.br",
  "maringa.br",
  "mat.br",
  "med.br",
  "mil.br",
  "morena.br",
  "mp.br",
  "mus.br",
  "natal.br",
  "net.br",
  "niteroi.br",
  "*.nom.br",
  "not.br",
  "ntr.br",
  "odo.br",
  "ong.br",
  "org.br",
  "osasco.br",
  "palmas.br",
  "poa.br",
  "ppg.br",
  "pro.br",
  "psc.br",
  "psi.br",
  "pvh.br",
  "qsl.br",
  "radio.br",
  "rec.br",
  "recife.br",
  "rep.br",
  "ribeirao.br",
  "rio.br",
  "riobranco.br",
  "riopreto.br",
  "salvador.br",
  "sampa.br",
  "santamaria.br",
  "santoandre.br",
  "saobernardo.br",
  "saogonca.br",
  "seg.br",
  "sjc.br",
  "slg.br",
  "slz.br",
  "sorocaba.br",
  "srv.br",
  "taxi.br",
  "tc.br",
  "tec.br",
  "teo.br",
  "the.br",
  "tmp.br",
  "trd.br",
  "tur.br",
  "tv.br",
  "udi.br",
  "vet.br",
  "vix.br",
  "vlog.br",
  "wiki.br",
  "zlg.br",
  "bs",
  "com.bs",
  "net.bs",
  "org.bs",
  "edu.bs",
  "gov.bs",
  "bt",
  "com.bt",
  "edu.bt",
  "gov.bt",
  "net.bt",
  "org.bt",
  "bv",
  "bw",
  "co.bw",
  "org.bw",
  "by",
  "gov.by",
  "mil.by",
  "com.by",
  "of.by",
  "bz",
  "com.bz",
  "net.bz",
  "org.bz",
  "edu.bz",
  "gov.bz",
  "ca",
  "ab.ca",
  "bc.ca",
  "mb.ca",
  "nb.ca",
  "nf.ca",
  "nl.ca",
  "ns.ca",
  "nt.ca",
  "nu.ca",
  "on.ca",
  "pe.ca",
  "qc.ca",
  "sk.ca",
  "yk.ca",
  "gc.ca",
  "cat",
  "cc",
  "cd",
  "gov.cd",
  "cf",
  "cg",
  "ch",
  "ci",
  "org.ci",
  "or.ci",
  "com.ci",
  "co.ci",
  "edu.ci",
  "ed.ci",
  "ac.ci",
  "net.ci",
  "go.ci",
  "asso.ci",
  "aéroport.ci",
  "int.ci",
  "presse.ci",
  "md.ci",
  "gouv.ci",
  "*.ck",
  "!www.ck",
  "cl",
  "co.cl",
  "gob.cl",
  "gov.cl",
  "mil.cl",
  "cm",
  "co.cm",
  "com.cm",
  "gov.cm",
  "net.cm",
  "cn",
  "ac.cn",
  "com.cn",
  "edu.cn",
  "gov.cn",
  "net.cn",
  "org.cn",
  "mil.cn",
  "公司.cn",
  "网络.cn",
  "網絡.cn",
  "ah.cn",
  "bj.cn",
  "cq.cn",
  "fj.cn",
  "gd.cn",
  "gs.cn",
  "gz.cn",
  "gx.cn",
  "ha.cn",
  "hb.cn",
  "he.cn",
  "hi.cn",
  "hl.cn",
  "hn.cn",
  "jl.cn",
  "js.cn",
  "jx.cn",
  "ln.cn",
  "nm.cn",
  "nx.cn",
  "qh.cn",
  "sc.cn",
  "sd.cn",
  "sh.cn",
  "sn.cn",
  "sx.cn",
  "tj.cn",
  "xj.cn",
  "xz.cn",
  "yn.cn",
  "zj.cn",
  "hk.cn",
  "mo.cn",
  "tw.cn",
  "co",
  "arts.co",
  "com.co",
  "edu.co",
  "firm.co",
  "gov.co",
  "info.co",
  "int.co",
  "mil.co",
  "net.co",
  "nom.co",
  "org.co",
  "rec.co",
  "web.co",
  "com",
  "coop",
  "cr",
  "ac.cr",
  "co.cr",
  "ed.cr",
  "fi.cr",
  "go.cr",
  "or.cr",
  "sa.cr",
  "cu",
  "com.cu",
  "edu.cu",
  "org.cu",
  "net.cu",
  "gov.cu",
  "inf.cu",
  "cv",
  "com.cv",
  "edu.cv",
  "int.cv",
  "nome.cv",
  "org.cv",
  "cw",
  "com.cw",
  "edu.cw",
  "net.cw",
  "org.cw",
  "cx",
  "gov.cx",
  "cy",
  "ac.cy",
  "biz.cy",
  "com.cy",
  "ekloges.cy",
  "gov.cy",
  "ltd.cy",
  "mil.cy",
  "net.cy",
  "org.cy",
  "press.cy",
  "pro.cy",
  "tm.cy",
  "cz",
  "de",
  "dj",
  "dk",
  "dm",
  "com.dm",
  "net.dm",
  "org.dm",
  "edu.dm",
  "gov.dm",
  "do",
  "art.do",
  "com.do",
  "edu.do",
  "gob.do",
  "gov.do",
  "mil.do",
  "net.do",
  "org.do",
  "sld.do",
  "web.do",
  "dz",
  "art.dz",
  "asso.dz",
  "com.dz",
  "edu.dz",
  "gov.dz",
  "org.dz",
  "net.dz",
  "pol.dz",
  "soc.dz",
  "tm.dz",
  "ec",
  "com.ec",
  "info.ec",
  "net.ec",
  "fin.ec",
  "k12.ec",
  "med.ec",
  "pro.ec",
  "org.ec",
  "edu.ec",
  "gov.ec",
  "gob.ec",
  "mil.ec",
  "edu",
  "ee",
  "edu.ee",
  "gov.ee",
  "riik.ee",
  "lib.ee",
  "med.ee",
  "com.ee",
  "pri.ee",
  "aip.ee",
  "org.ee",
  "fie.ee",
  "eg",
  "com.eg",
  "edu.eg",
  "eun.eg",
  "gov.eg",
  "mil.eg",
  "name.eg",
  "net.eg",
  "org.eg",
  "sci.eg",
  "*.er",
  "es",
  "com.es",
  "nom.es",
  "org.es",
  "gob.es",
  "edu.es",
  "et",
  "com.et",
  "gov.et",
  "org.et",
  "edu.et",
  "biz.et",
  "name.et",
  "info.et",
  "net.et",
  "eu",
  "fi",
  "aland.fi",
  "fj",
  "ac.fj",
  "biz.fj",
  "com.fj",
  "gov.fj",
  "info.fj",
  "mil.fj",
  "name.fj",
  "net.fj",
  "org.fj",
  "pro.fj",
  "*.fk",
  "com.fm",
  "edu.fm",
  "net.fm",
  "org.fm",
  "fm",
  "fo",
  "fr",
  "asso.fr",
  "com.fr",
  "gouv.fr",
  "nom.fr",
  "prd.fr",
  "tm.fr",
  "aeroport.fr",
  "avocat.fr",
  "avoues.fr",
  "cci.fr",
  "chambagri.fr",
  "chirurgiens-dentistes.fr",
  "experts-comptables.fr",
  "geometre-expert.fr",
  "greta.fr",
  "huissier-justice.fr",
  "medecin.fr",
  "notaires.fr",
  "pharmacien.fr",
  "port.fr",
  "veterinaire.fr",
  "ga",
  "gb",
  "edu.gd",
  "gov.gd",
  "gd",
  "ge",
  "com.ge",
  "edu.ge",
  "gov.ge",
  "org.ge",
  "mil.ge",
  "net.ge",
  "pvt.ge",
  "gf",
  "gg",
  "co.gg",
  "net.gg",
  "org.gg",
  "gh",
  "com.gh",
  "edu.gh",
  "gov.gh",
  "org.gh",
  "mil.gh",
  "gi",
  "com.gi",
  "ltd.gi",
  "gov.gi",
  "mod.gi",
  "edu.gi",
  "org.gi",
  "gl",
  "co.gl",
  "com.gl",
  "edu.gl",
  "net.gl",
  "org.gl",
  "gm",
  "gn",
  "ac.gn",
  "com.gn",
  "edu.gn",
  "gov.gn",
  "org.gn",
  "net.gn",
  "gov",
  "gp",
  "com.gp",
  "net.gp",
  "mobi.gp",
  "edu.gp",
  "org.gp",
  "asso.gp",
  "gq",
  "gr",
  "com.gr",
  "edu.gr",
  "net.gr",
  "org.gr",
  "gov.gr",
  "gs",
  "gt",
  "com.gt",
  "edu.gt",
  "gob.gt",
  "ind.gt",
  "mil.gt",
  "net.gt",
  "org.gt",
  "gu",
  "com.gu",
  "edu.gu",
  "gov.gu",
  "guam.gu",
  "info.gu",
  "net.gu",
  "org.gu",
  "web.gu",
  "gw",
  "gy",
  "co.gy",
  "com.gy",
  "edu.gy",
  "gov.gy",
  "net.gy",
  "org.gy",
  "hk",
  "com.hk",
  "edu.hk",
  "gov.hk",
  "idv.hk",
  "net.hk",
  "org.hk",
  "公司.hk",
  "教育.hk",
  "敎育.hk",
  "政府.hk",
  "個人.hk",
  "个��.hk",
  "箇人.hk",
  "網络.hk",
  "网络.hk",
  "组織.hk",
  "網絡.hk",
  "网絡.hk",
  "组织.hk",
  "組織.hk",
  "組织.hk",
  "hm",
  "hn",
  "com.hn",
  "edu.hn",
  "org.hn",
  "net.hn",
  "mil.hn",
  "gob.hn",
  "hr",
  "iz.hr",
  "from.hr",
  "name.hr",
  "com.hr",
  "ht",
  "com.ht",
  "shop.ht",
  "firm.ht",
  "info.ht",
  "adult.ht",
  "net.ht",
  "pro.ht",
  "org.ht",
  "med.ht",
  "art.ht",
  "coop.ht",
  "pol.ht",
  "asso.ht",
  "edu.ht",
  "rel.ht",
  "gouv.ht",
  "perso.ht",
  "hu",
  "co.hu",
  "info.hu",
  "org.hu",
  "priv.hu",
  "sport.hu",
  "tm.hu",
  "2000.hu",
  "agrar.hu",
  "bolt.hu",
  "casino.hu",
  "city.hu",
  "erotica.hu",
  "erotika.hu",
  "film.hu",
  "forum.hu",
  "games.hu",
  "hotel.hu",
  "ingatlan.hu",
  "jogasz.hu",
  "konyvelo.hu",
  "lakas.hu",
  "media.hu",
  "news.hu",
  "reklam.hu",
  "sex.hu",
  "shop.hu",
  "suli.hu",
  "szex.hu",
  "tozsde.hu",
  "utazas.hu",
  "video.hu",
  "id",
  "ac.id",
  "biz.id",
  "co.id",
  "desa.id",
  "go.id",
  "mil.id",
  "my.id",
  "net.id",
  "or.id",
  "ponpes.id",
  "sch.id",
  "web.id",
  "ie",
  "gov.ie",
  "il",
  "ac.il",
  "co.il",
  "gov.il",
  "idf.il",
  "k12.il",
  "muni.il",
  "net.il",
  "org.il",
  "im",
  "ac.im",
  "co.im",
  "com.im",
  "ltd.co.im",
  "net.im",
  "org.im",
  "plc.co.im",
  "tt.im",
  "tv.im",
  "in",
  "co.in",
  "firm.in",
  "net.in",
  "org.in",
  "gen.in",
  "ind.in",
  "nic.in",
  "ac.in",
  "edu.in",
  "res.in",
  "gov.in",
  "mil.in",
  "info",
  "int",
  "eu.int",
  "io",
  "com.io",
  "iq",
  "gov.iq",
  "edu.iq",
  "mil.iq",
  "com.iq",
  "org.iq",
  "net.iq",
  "ir",
  "ac.ir",
  "co.ir",
  "gov.ir",
  "id.ir",
  "net.ir",
  "org.ir",
  "sch.ir",
  "ایران.ir",
  "ايران.ir",
  "is",
  "net.is",
  "com.is",
  "edu.is",
  "gov.is",
  "org.is",
  "int.is",
  "it",
  "gov.it",
  "edu.it",
  "abr.it",
  "abruzzo.it",
  "aosta-valley.it",
  "aostavalley.it",
  "bas.it",
  "basilicata.it",
  "cal.it",
  "calabria.it",
  "cam.it",
  "campania.it",
  "emilia-romagna.it",
  "emiliaromagna.it",
  "emr.it",
  "friuli-v-giulia.it",
  "friuli-ve-giulia.it",
  "friuli-vegiulia.it",
  "friuli-venezia-giulia.it",
  "friuli-veneziagiulia.it",
  "friuli-vgiulia.it",
  "friuliv-giulia.it",
  "friulive-giulia.it",
  "friulivegiulia.it",
  "friulivenezia-giulia.it",
  "friuliveneziagiulia.it",
  "friulivgiulia.it",
  "fvg.it",
  "laz.it",
  "lazio.it",
  "lig.it",
  "liguria.it",
  "lom.it",
  "lombardia.it",
  "lombardy.it",
  "lucania.it",
  "mar.it",
  "marche.it",
  "mol.it",
  "molise.it",
  "piedmont.it",
  "piemonte.it",
  "pmn.it",
  "pug.it",
  "puglia.it",
  "sar.it",
  "sardegna.it",
  "sardinia.it",
  "sic.it",
  "sicilia.it",
  "sicily.it",
  "taa.it",
  "tos.it",
  "toscana.it",
  "trentin-sud-tirol.it",
  "trentin-süd-tirol.it",
  "trentin-sudtirol.it",
  "trentin-südtirol.it",
  "trentin-sued-tirol.it",
  "trentin-suedtirol.it",
  "trentino-a-adige.it",
  "trentino-aadige.it",
  "trentino-alto-adige.it",
  "trentino-altoadige.it",
  "trentino-s-tirol.it",
  "trentino-stirol.it",
  "trentino-sud-tirol.it",
  "trentino-süd-tirol.it",
  "trentino-sudtirol.it",
  "trentino-südtirol.it",
  "trentino-sued-tirol.it",
  "trentino-suedtirol.it",
  "trentino.it",
  "trentinoa-adige.it",
  "trentinoaadige.it",
  "trentinoalto-adige.it",
  "trentinoaltoadige.it",
  "trentinos-tirol.it",
  "trentinostirol.it",
  "trentinosud-tirol.it",
  "trentinosüd-tirol.it",
  "trentinosudtirol.it",
  "trentinosüdtirol.it",
  "trentinosued-tirol.it",
  "trentinosuedtirol.it",
  "trentinsud-tirol.it",
  "trentinsüd-tirol.it",
  "trentinsudtirol.it",
  "trentinsüdtirol.it",
  "trentinsued-tirol.it",
  "trentinsuedtirol.it",
  "tuscany.it",
  "umb.it",
  "umbria.it",
  "val-d-aosta.it",
  "val-daosta.it",
  "vald-aosta.it",
  "valdaosta.it",
  "valle-aosta.it",
  "valle-d-aosta.it",
  "valle-daosta.it",
  "valleaosta.it",
  "valled-aosta.it",
  "valledaosta.it",
  "vallee-aoste.it",
  "vallée-aoste.it",
  "vallee-d-aoste.it",
  "vallée-d-aoste.it",
  "valleeaoste.it",
  "valléeaoste.it",
  "valleedaoste.it",
  "valléedaoste.it",
  "vao.it",
  "vda.it",
  "ven.it",
  "veneto.it",
  "ag.it",
  "agrigento.it",
  "al.it",
  "alessandria.it",
  "alto-adige.it",
  "altoadige.it",
  "an.it",
  "ancona.it",
  "andria-barletta-trani.it",
  "andria-trani-barletta.it",
  "andriabarlettatrani.it",
  "andriatranibarletta.it",
  "ao.it",
  "aosta.it",
  "aoste.it",
  "ap.it",
  "aq.it",
  "aquila.it",
  "ar.it",
  "arezzo.it",
  "ascoli-piceno.it",
  "ascolipiceno.it",
  "asti.it",
  "at.it",
  "av.it",
  "avellino.it",
  "ba.it",
  "balsan-sudtirol.it",
  "balsan-südtirol.it",
  "balsan-suedtirol.it",
  "balsan.it",
  "bari.it",
  "barletta-trani-andria.it",
  "barlettatraniandria.it",
  "belluno.it",
  "benevento.it",
  "bergamo.it",
  "bg.it",
  "bi.it",
  "biella.it",
  "bl.it",
  "bn.it",
  "bo.it",
  "bologna.it",
  "bolzano-altoadige.it",
  "bolzano.it",
  "bozen-sudtirol.it",
  "bozen-südtirol.it",
  "bozen-suedtirol.it",
  "bozen.it",
  "br.it",
  "brescia.it",
  "brindisi.it",
  "bs.it",
  "bt.it",
  "bulsan-sudtirol.it",
  "bulsan-südtirol.it",
  "bulsan-suedtirol.it",
  "bulsan.it",
  "bz.it",
  "ca.it",
  "cagliari.it",
  "caltanissetta.it",
  "campidano-medio.it",
  "campidanomedio.it",
  "campobasso.it",
  "carbonia-iglesias.it",
  "carboniaiglesias.it",
  "carrara-massa.it",
  "carraramassa.it",
  "caserta.it",
  "catania.it",
  "catanzaro.it",
  "cb.it",
  "ce.it",
  "cesena-forli.it",
  "cesena-forlì.it",
  "cesenaforli.it",
  "cesenaforlì.it",
  "ch.it",
  "chieti.it",
  "ci.it",
  "cl.it",
  "cn.it",
  "co.it",
  "como.it",
  "cosenza.it",
  "cr.it",
  "cremona.it",
  "crotone.it",
  "cs.it",
  "ct.it",
  "cuneo.it",
  "cz.it",
  "dell-ogliastra.it",
  "dellogliastra.it",
  "en.it",
  "enna.it",
  "fc.it",
  "fe.it",
  "fermo.it",
  "ferrara.it",
  "fg.it",
  "fi.it",
  "firenze.it",
  "florence.it",
  "fm.it",
  "foggia.it",
  "forli-cesena.it",
  "forlì-cesena.it",
  "forlicesena.it",
  "forlìcesena.it",
  "fr.it",
  "frosinone.it",
  "ge.it",
  "genoa.it",
  "genova.it",
  "go.it",
  "gorizia.it",
  "gr.it",
  "grosseto.it",
  "iglesias-carbonia.it",
  "iglesiascarbonia.it",
  "im.it",
  "imperia.it",
  "is.it",
  "isernia.it",
  "kr.it",
  "la-spezia.it",
  "laquila.it",
  "laspezia.it",
  "latina.it",
  "lc.it",
  "le.it",
  "lecce.it",
  "lecco.it",
  "li.it",
  "livorno.it",
  "lo.it",
  "lodi.it",
  "lt.it",
  "lu.it",
  "lucca.it",
  "macerata.it",
  "mantova.it",
  "massa-carrara.it",
  "massacarrara.it",
  "matera.it",
  "mb.it",
  "mc.it",
  "me.it",
  "medio-campidano.it",
  "mediocampidano.it",
  "messina.it",
  "mi.it",
  "milan.it",
  "milano.it",
  "mn.it",
  "mo.it",
  "modena.it",
  "monza-brianza.it",
  "monza-e-della-brianza.it",
  "monza.it",
  "monzabrianza.it",
  "monzaebrianza.it",
  "monzaedellabrianza.it",
  "ms.it",
  "mt.it",
  "na.it",
  "naples.it",
  "napoli.it",
  "no.it",
  "novara.it",
  "nu.it",
  "nuoro.it",
  "og.it",
  "ogliastra.it",
  "olbia-tempio.it",
  "olbiatempio.it",
  "or.it",
  "oristano.it",
  "ot.it",
  "pa.it",
  "padova.it",
  "padua.it",
  "palermo.it",
  "parma.it",
  "pavia.it",
  "pc.it",
  "pd.it",
  "pe.it",
  "perugia.it",
  "pesaro-urbino.it",
  "pesarourbino.it",
  "pescara.it",
  "pg.it",
  "pi.it",
  "piacenza.it",
  "pisa.it",
  "pistoia.it",
  "pn.it",
  "po.it",
  "pordenone.it",
  "potenza.it",
  "pr.it",
  "prato.it",
  "pt.it",
  "pu.it",
  "pv.it",
  "pz.it",
  "ra.it",
  "ragusa.it",
  "ravenna.it",
  "rc.it",
  "re.it",
  "reggio-calabria.it",
  "reggio-emilia.it",
  "reggiocalabria.it",
  "reggioemilia.it",
  "rg.it",
  "ri.it",
  "rieti.it",
  "rimini.it",
  "rm.it",
  "rn.it",
  "ro.it",
  "roma.it",
  "rome.it",
  "rovigo.it",
  "sa.it",
  "salerno.it",
  "sassari.it",
  "savona.it",
  "si.it",
  "siena.it",
  "siracusa.it",
  "so.it",
  "sondrio.it",
  "sp.it",
  "sr.it",
  "ss.it",
  "suedtirol.it",
  "südtirol.it",
  "sv.it",
  "ta.it",
  "taranto.it",
  "te.it",
  "tempio-olbia.it",
  "tempioolbia.it",
  "teramo.it",
  "terni.it",
  "tn.it",
  "to.it",
  "torino.it",
  "tp.it",
  "tr.it",
  "trani-andria-barletta.it",
  "trani-barletta-andria.it",
  "traniandriabarletta.it",
  "tranibarlettaandria.it",
  "trapani.it",
  "trento.it",
  "treviso.it",
  "trieste.it",
  "ts.it",
  "turin.it",
  "tv.it",
  "ud.it",
  "udine.it",
  "urbino-pesaro.it",
  "urbinopesaro.it",
  "va.it",
  "varese.it",
  "vb.it",
  "vc.it",
  "ve.it",
  "venezia.it",
  "venice.it",
  "verbania.it",
  "vercelli.it",
  "verona.it",
  "vi.it",
  "vibo-valentia.it",
  "vibovalentia.it",
  "vicenza.it",
  "viterbo.it",
  "vr.it",
  "vs.it",
  "vt.it",
  "vv.it",
  "je",
  "co.je",
  "net.je",
  "org.je",
  "*.jm",
  "jo",
  "com.jo",
  "org.jo",
  "net.jo",
  "edu.jo",
  "sch.jo",
  "gov.jo",
  "mil.jo",
  "name.jo",
  "jobs",
  "jp",
  "ac.jp",
  "ad.jp",
  "co.jp",
  "ed.jp",
  "go.jp",
  "gr.jp",
  "lg.jp",
  "ne.jp",
  "or.jp",
  "aichi.jp",
  "akita.jp",
  "aomori.jp",
  "chiba.jp",
  "ehime.jp",
  "fukui.jp",
  "fukuoka.jp",
  "fukushima.jp",
  "gifu.jp",
  "gunma.jp",
  "hiroshima.jp",
  "hokkaido.jp",
  "hyogo.jp",
  "ibaraki.jp",
  "ishikawa.jp",
  "iwate.jp",
  "kagawa.jp",
  "kagoshima.jp",
  "kanagawa.jp",
  "kochi.jp",
  "kumamoto.jp",
  "kyoto.jp",
  "mie.jp",
  "miyagi.jp",
  "miyazaki.jp",
  "nagano.jp",
  "nagasaki.jp",
  "nara.jp",
  "niigata.jp",
  "oita.jp",
  "okayama.jp",
  "okinawa.jp",
  "osaka.jp",
  "saga.jp",
  "saitama.jp",
  "shiga.jp",
  "shimane.jp",
  "shizuoka.jp",
  "tochigi.jp",
  "tokushima.jp",
  "tokyo.jp",
  "tottori.jp",
  "toyama.jp",
  "wakayama.jp",
  "yamagata.jp",
  "yamaguchi.jp",
  "yamanashi.jp",
  "栃木.jp",
  "愛知.jp",
  "愛媛.jp",
  "兵庫.jp",
  "熊本.jp",
  "茨城.jp",
  "北海道.jp",
  "千葉.jp",
  "和歌山.jp",
  "長崎.jp",
  "長野.jp",
  "新潟.jp",
  "青森.jp",
  "静岡.jp",
  "東京.jp",
  "石川.jp",
  "埼玉.jp",
  "三重.jp",
  "京都.jp",
  "佐賀.jp",
  "大分.jp",
  "大阪.jp",
  "奈良.jp",
  "宮城.jp",
  "宮崎.jp",
  "富山.jp",
  "山口.jp",
  "山形.jp",
  "山梨.jp",
  "岩手.jp",
  "岐阜.jp",
  "岡山.jp",
  "島根.jp",
  "広島.jp",
  "徳島.jp",
  "沖縄.jp",
  "滋賀.jp",
  "神奈川.jp",
  "福井.jp",
  "福岡.jp",
  "福島.jp",
  "秋田.jp",
  "群馬.jp",
  "香川.jp",
  "高知.jp",
  "鳥取.jp",
  "鹿児島.jp",
  "*.kawasaki.jp",
  "*.kitakyushu.jp",
  "*.kobe.jp",
  "*.nagoya.jp",
  "*.sapporo.jp",
  "*.sendai.jp",
  "*.yokohama.jp",
  "!city.kawasaki.jp",
  "!city.kitakyushu.jp",
  "!city.kobe.jp",
  "!city.nagoya.jp",
  "!city.sapporo.jp",
  "!city.sendai.jp",
  "!city.yokohama.jp",
  "aisai.aichi.jp",
  "ama.aichi.jp",
  "anjo.aichi.jp",
  "asuke.aichi.jp",
  "chiryu.aichi.jp",
  "chita.aichi.jp",
  "fuso.aichi.jp",
  "gamagori.aichi.jp",
  "handa.aichi.jp",
  "hazu.aichi.jp",
  "hekinan.aichi.jp",
  "higashiura.aichi.jp",
  "ichinomiya.aichi.jp",
  "inazawa.aichi.jp",
  "inuyama.aichi.jp",
  "isshiki.aichi.jp",
  "iwakura.aichi.jp",
  "kanie.aichi.jp",
  "kariya.aichi.jp",
  "kasugai.aichi.jp",
  "kira.aichi.jp",
  "kiyosu.aichi.jp",
  "komaki.aichi.jp",
  "konan.aichi.jp",
  "kota.aichi.jp",
  "mihama.aichi.jp",
  "miyoshi.aichi.jp",
  "nishio.aichi.jp",
  "nisshin.aichi.jp",
  "obu.aichi.jp",
  "oguchi.aichi.jp",
  "oharu.aichi.jp",
  "okazaki.aichi.jp",
  "owariasahi.aichi.jp",
  "seto.aichi.jp",
  "shikatsu.aichi.jp",
  "shinshiro.aichi.jp",
  "shitara.aichi.jp",
  "tahara.aichi.jp",
  "takahama.aichi.jp",
  "tobishima.aichi.jp",
  "toei.aichi.jp",
  "togo.aichi.jp",
  "tokai.aichi.jp",
  "tokoname.aichi.jp",
  "toyoake.aichi.jp",
  "toyohashi.aichi.jp",
  "toyokawa.aichi.jp",
  "toyone.aichi.jp",
  "toyota.aichi.jp",
  "tsushima.aichi.jp",
  "yatomi.aichi.jp",
  "akita.akita.jp",
  "daisen.akita.jp",
  "fujisato.akita.jp",
  "gojome.akita.jp",
  "hachirogata.akita.jp",
  "happou.akita.jp",
  "higashinaruse.akita.jp",
  "honjo.akita.jp",
  "honjyo.akita.jp",
  "ikawa.akita.jp",
  "kamikoani.akita.jp",
  "kamioka.akita.jp",
  "katagami.akita.jp",
  "kazuno.akita.jp",
  "kitaakita.akita.jp",
  "kosaka.akita.jp",
  "kyowa.akita.jp",
  "misato.akita.jp",
  "mitane.akita.jp",
  "moriyoshi.akita.jp",
  "nikaho.akita.jp",
  "noshiro.akita.jp",
  "odate.akita.jp",
  "oga.akita.jp",
  "ogata.akita.jp",
  "semboku.akita.jp",
  "yokote.akita.jp",
  "yurihonjo.akita.jp",
  "aomori.aomori.jp",
  "gonohe.aomori.jp",
  "hachinohe.aomori.jp",
  "hashikami.aomori.jp",
  "hiranai.aomori.jp",
  "hirosaki.aomori.jp",
  "itayanagi.aomori.jp",
  "kuroishi.aomori.jp",
  "misawa.aomori.jp",
  "mutsu.aomori.jp",
  "nakadomari.aomori.jp",
  "noheji.aomori.jp",
  "oirase.aomori.jp",
  "owani.aomori.jp",
  "rokunohe.aomori.jp",
  "sannohe.aomori.jp",
  "shichinohe.aomori.jp",
  "shingo.aomori.jp",
  "takko.aomori.jp",
  "towada.aomori.jp",
  "tsugaru.aomori.jp",
  "tsuruta.aomori.jp",
  "abiko.chiba.jp",
  "asahi.chiba.jp",
  "chonan.chiba.jp",
  "chosei.chiba.jp",
  "choshi.chiba.jp",
  "chuo.chiba.jp",
  "funabashi.chiba.jp",
  "futtsu.chiba.jp",
  "hanamigawa.chiba.jp",
  "ichihara.chiba.jp",
  "ichikawa.chiba.jp",
  "ichinomiya.chiba.jp",
  "inzai.chiba.jp",
  "isumi.chiba.jp",
  "kamagaya.chiba.jp",
  "kamogawa.chiba.jp",
  "kashiwa.chiba.jp",
  "katori.chiba.jp",
  "katsuura.chiba.jp",
  "kimitsu.chiba.jp",
  "kisarazu.chiba.jp",
  "kozaki.chiba.jp",
  "kujukuri.chiba.jp",
  "kyonan.chiba.jp",
  "matsudo.chiba.jp",
  "midori.chiba.jp",
  "mihama.chiba.jp",
  "minamiboso.chiba.jp",
  "mobara.chiba.jp",
  "mutsuzawa.chiba.jp",
  "nagara.chiba.jp",
  "nagareyama.chiba.jp",
  "narashino.chiba.jp",
  "narita.chiba.jp",
  "noda.chiba.jp",
  "oamishirasato.chiba.jp",
  "omigawa.chiba.jp",
  "onjuku.chiba.jp",
  "otaki.chiba.jp",
  "sakae.chiba.jp",
  "sakura.chiba.jp",
  "shimofusa.chiba.jp",
  "shirako.chiba.jp",
  "shiroi.chiba.jp",
  "shisui.chiba.jp",
  "sodegaura.chiba.jp",
  "sosa.chiba.jp",
  "tako.chiba.jp",
  "tateyama.chiba.jp",
  "togane.chiba.jp",
  "tohnosho.chiba.jp",
  "tomisato.chiba.jp",
  "urayasu.chiba.jp",
  "yachimata.chiba.jp",
  "yachiyo.chiba.jp",
  "yokaichiba.chiba.jp",
  "yokoshibahikari.chiba.jp",
  "yotsukaido.chiba.jp",
  "ainan.ehime.jp",
  "honai.ehime.jp",
  "ikata.ehime.jp",
  "imabari.ehime.jp",
  "iyo.ehime.jp",
  "kamijima.ehime.jp",
  "kihoku.ehime.jp",
  "kumakogen.ehime.jp",
  "masaki.ehime.jp",
  "matsuno.ehime.jp",
  "matsuyama.ehime.jp",
  "namikata.ehime.jp",
  "niihama.ehime.jp",
  "ozu.ehime.jp",
  "saijo.ehime.jp",
  "seiyo.ehime.jp",
  "shikokuchuo.ehime.jp",
  "tobe.ehime.jp",
  "toon.ehime.jp",
  "uchiko.ehime.jp",
  "uwajima.ehime.jp",
  "yawatahama.ehime.jp",
  "echizen.fukui.jp",
  "eiheiji.fukui.jp",
  "fukui.fukui.jp",
  "ikeda.fukui.jp",
  "katsuyama.fukui.jp",
  "mihama.fukui.jp",
  "minamiechizen.fukui.jp",
  "obama.fukui.jp",
  "ohi.fukui.jp",
  "ono.fukui.jp",
  "sabae.fukui.jp",
  "sakai.fukui.jp",
  "takahama.fukui.jp",
  "tsuruga.fukui.jp",
  "wakasa.fukui.jp",
  "ashiya.fukuoka.jp",
  "buzen.fukuoka.jp",
  "chikugo.fukuoka.jp",
  "chikuho.fukuoka.jp",
  "chikujo.fukuoka.jp",
  "chikushino.fukuoka.jp",
  "chikuzen.fukuoka.jp",
  "chuo.fukuoka.jp",
  "dazaifu.fukuoka.jp",
  "fukuchi.fukuoka.jp",
  "hakata.fukuoka.jp",
  "higashi.fukuoka.jp",
  "hirokawa.fukuoka.jp",
  "hisayama.fukuoka.jp",
  "iizuka.fukuoka.jp",
  "inatsuki.fukuoka.jp",
  "kaho.fukuoka.jp",
  "kasuga.fukuoka.jp",
  "kasuya.fukuoka.jp",
  "kawara.fukuoka.jp",
  "keisen.fukuoka.jp",
  "koga.fukuoka.jp",
  "kurate.fukuoka.jp",
  "kurogi.fukuoka.jp",
  "kurume.fukuoka.jp",
  "minami.fukuoka.jp",
  "miyako.fukuoka.jp",
  "miyama.fukuoka.jp",
  "miyawaka.fukuoka.jp",
  "mizumaki.fukuoka.jp",
  "munakata.fukuoka.jp",
  "nakagawa.fukuoka.jp",
  "nakama.fukuoka.jp",
  "nishi.fukuoka.jp",
  "nogata.fukuoka.jp",
  "ogori.fukuoka.jp",
  "okagaki.fukuoka.jp",
  "okawa.fukuoka.jp",
  "oki.fukuoka.jp",
  "omuta.fukuoka.jp",
  "onga.fukuoka.jp",
  "onojo.fukuoka.jp",
  "oto.fukuoka.jp",
  "saigawa.fukuoka.jp",
  "sasaguri.fukuoka.jp",
  "shingu.fukuoka.jp",
  "shinyoshitomi.fukuoka.jp",
  "shonai.fukuoka.jp",
  "soeda.fukuoka.jp",
  "sue.fukuoka.jp",
  "tachiarai.fukuoka.jp",
  "tagawa.fukuoka.jp",
  "takata.fukuoka.jp",
  "toho.fukuoka.jp",
  "toyotsu.fukuoka.jp",
  "tsuiki.fukuoka.jp",
  "ukiha.fukuoka.jp",
  "umi.fukuoka.jp",
  "usui.fukuoka.jp",
  "yamada.fukuoka.jp",
  "yame.fukuoka.jp",
  "yanagawa.fukuoka.jp",
  "yukuhashi.fukuoka.jp",
  "aizubange.fukushima.jp",
  "aizumisato.fukushima.jp",
  "aizuwakamatsu.fukushima.jp",
  "asakawa.fukushima.jp",
  "bandai.fukushima.jp",
  "date.fukushima.jp",
  "fukushima.fukushima.jp",
  "furudono.fukushima.jp",
  "futaba.fukushima.jp",
  "hanawa.fukushima.jp",
  "higashi.fukushima.jp",
  "hirata.fukushima.jp",
  "hirono.fukushima.jp",
  "iitate.fukushima.jp",
  "inawashiro.fukushima.jp",
  "ishikawa.fukushima.jp",
  "iwaki.fukushima.jp",
  "izumizaki.fukushima.jp",
  "kagamiishi.fukushima.jp",
  "kaneyama.fukushima.jp",
  "kawamata.fukushima.jp",
  "kitakata.fukushima.jp",
  "kitashiobara.fukushima.jp",
  "koori.fukushima.jp",
  "koriyama.fukushima.jp",
  "kunimi.fukushima.jp",
  "miharu.fukushima.jp",
  "mishima.fukushima.jp",
  "namie.fukushima.jp",
  "nango.fukushima.jp",
  "nishiaizu.fukushima.jp",
  "nishigo.fukushima.jp",
  "okuma.fukushima.jp",
  "omotego.fukushima.jp",
  "ono.fukushima.jp",
  "otama.fukushima.jp",
  "samegawa.fukushima.jp",
  "shimogo.fukushima.jp",
  "shirakawa.fukushima.jp",
  "showa.fukushima.jp",
  "soma.fukushima.jp",
  "sukagawa.fukushima.jp",
  "taishin.fukushima.jp",
  "tamakawa.fukushima.jp",
  "tanagura.fukushima.jp",
  "tenei.fukushima.jp",
  "yabuki.fukushima.jp",
  "yamato.fukushima.jp",
  "yamatsuri.fukushima.jp",
  "yanaizu.fukushima.jp",
  "yugawa.fukushima.jp",
  "anpachi.gifu.jp",
  "ena.gifu.jp",
  "gifu.gifu.jp",
  "ginan.gifu.jp",
  "godo.gifu.jp",
  "gujo.gifu.jp",
  "hashima.gifu.jp",
  "hichiso.gifu.jp",
  "hida.gifu.jp",
  "higashishirakawa.gifu.jp",
  "ibigawa.gifu.jp",
  "ikeda.gifu.jp",
  "kakamigahara.gifu.jp",
  "kani.gifu.jp",
  "kasahara.gifu.jp",
  "kasamatsu.gifu.jp",
  "kawaue.gifu.jp",
  "kitagata.gifu.jp",
  "mino.gifu.jp",
  "minokamo.gifu.jp",
  "mitake.gifu.jp",
  "mizunami.gifu.jp",
  "motosu.gifu.jp",
  "nakatsugawa.gifu.jp",
  "ogaki.gifu.jp",
  "sakahogi.gifu.jp",
  "seki.gifu.jp",
  "sekigahara.gifu.jp",
  "shirakawa.gifu.jp",
  "tajimi.gifu.jp",
  "takayama.gifu.jp",
  "tarui.gifu.jp",
  "toki.gifu.jp",
  "tomika.gifu.jp",
  "wanouchi.gifu.jp",
  "yamagata.gifu.jp",
  "yaotsu.gifu.jp",
  "yoro.gifu.jp",
  "annaka.gunma.jp",
  "chiyoda.gunma.jp",
  "fujioka.gunma.jp",
  "higashiagatsuma.gunma.jp",
  "isesaki.gunma.jp",
  "itakura.gunma.jp",
  "kanna.gunma.jp",
  "kanra.gunma.jp",
  "katashina.gunma.jp",
  "kawaba.gunma.jp",
  "kiryu.gunma.jp",
  "kusatsu.gunma.jp",
  "maebashi.gunma.jp",
  "meiwa.gunma.jp",
  "midori.gunma.jp",
  "minakami.gunma.jp",
  "naganohara.gunma.jp",
  "nakanojo.gunma.jp",
  "nanmoku.gunma.jp",
  "numata.gunma.jp",
  "oizumi.gunma.jp",
  "ora.gunma.jp",
  "ota.gunma.jp",
  "shibukawa.gunma.jp",
  "shimonita.gunma.jp",
  "shinto.gunma.jp",
  "showa.gunma.jp",
  "takasaki.gunma.jp",
  "takayama.gunma.jp",
  "tamamura.gunma.jp",
  "tatebayashi.gunma.jp",
  "tomioka.gunma.jp",
  "tsukiyono.gunma.jp",
  "tsumagoi.gunma.jp",
  "ueno.gunma.jp",
  "yoshioka.gunma.jp",
  "asaminami.hiroshima.jp",
  "daiwa.hiroshima.jp",
  "etajima.hiroshima.jp",
  "fuchu.hiroshima.jp",
  "fukuyama.hiroshima.jp",
  "hatsukaichi.hiroshima.jp",
  "higashihiroshima.hiroshima.jp",
  "hongo.hiroshima.jp",
  "jinsekikogen.hiroshima.jp",
  "kaita.hiroshima.jp",
  "kui.hiroshima.jp",
  "kumano.hiroshima.jp",
  "kure.hiroshima.jp",
  "mihara.hiroshima.jp",
  "miyoshi.hiroshima.jp",
  "naka.hiroshima.jp",
  "onomichi.hiroshima.jp",
  "osakikamijima.hiroshima.jp",
  "otake.hiroshima.jp",
  "saka.hiroshima.jp",
  "sera.hiroshima.jp",
  "seranishi.hiroshima.jp",
  "shinichi.hiroshima.jp",
  "shobara.hiroshima.jp",
  "takehara.hiroshima.jp",
  "abashiri.hokkaido.jp",
  "abira.hokkaido.jp",
  "aibetsu.hokkaido.jp",
  "akabira.hokkaido.jp",
  "akkeshi.hokkaido.jp",
  "asahikawa.hokkaido.jp",
  "ashibetsu.hokkaido.jp",
  "ashoro.hokkaido.jp",
  "assabu.hokkaido.jp",
  "atsuma.hokkaido.jp",
  "bibai.hokkaido.jp",
  "biei.hokkaido.jp",
  "bifuka.hokkaido.jp",
  "bihoro.hokkaido.jp",
  "biratori.hokkaido.jp",
  "chippubetsu.hokkaido.jp",
  "chitose.hokkaido.jp",
  "date.hokkaido.jp",
  "ebetsu.hokkaido.jp",
  "embetsu.hokkaido.jp",
  "eniwa.hokkaido.jp",
  "erimo.hokkaido.jp",
  "esan.hokkaido.jp",
  "esashi.hokkaido.jp",
  "fukagawa.hokkaido.jp",
  "fukushima.hokkaido.jp",
  "furano.hokkaido.jp",
  "furubira.hokkaido.jp",
  "haboro.hokkaido.jp",
  "hakodate.hokkaido.jp",
  "hamatonbetsu.hokkaido.jp",
  "hidaka.hokkaido.jp",
  "higashikagura.hokkaido.jp",
  "higashikawa.hokkaido.jp",
  "hiroo.hokkaido.jp",
  "hokuryu.hokkaido.jp",
  "hokuto.hokkaido.jp",
  "honbetsu.hokkaido.jp",
  "horokanai.hokkaido.jp",
  "horonobe.hokkaido.jp",
  "ikeda.hokkaido.jp",
  "imakane.hokkaido.jp",
  "ishikari.hokkaido.jp",
  "iwamizawa.hokkaido.jp",
  "iwanai.hokkaido.jp",
  "kamifurano.hokkaido.jp",
  "kamikawa.hokkaido.jp",
  "kamishihoro.hokkaido.jp",
  "kamisunagawa.hokkaido.jp",
  "kamoenai.hokkaido.jp",
  "kayabe.hokkaido.jp",
  "kembuchi.hokkaido.jp",
  "kikonai.hokkaido.jp",
  "kimobetsu.hokkaido.jp",
  "kitahiroshima.hokkaido.jp",
  "kitami.hokkaido.jp",
  "kiyosato.hokkaido.jp",
  "koshimizu.hokkaido.jp",
  "kunneppu.hokkaido.jp",
  "kuriyama.hokkaido.jp",
  "kuromatsunai.hokkaido.jp",
  "kushiro.hokkaido.jp",
  "kutchan.hokkaido.jp",
  "kyowa.hokkaido.jp",
  "mashike.hokkaido.jp",
  "matsumae.hokkaido.jp",
  "mikasa.hokkaido.jp",
  "minamifurano.hokkaido.jp",
  "mombetsu.hokkaido.jp",
  "moseushi.hokkaido.jp",
  "mukawa.hokkaido.jp",
  "muroran.hokkaido.jp",
  "naie.hokkaido.jp",
  "nakagawa.hokkaido.jp",
  "nakasatsunai.hokkaido.jp",
  "nakatombetsu.hokkaido.jp",
  "nanae.hokkaido.jp",
  "nanporo.hokkaido.jp",
  "nayoro.hokkaido.jp",
  "nemuro.hokkaido.jp",
  "niikappu.hokkaido.jp",
  "niki.hokkaido.jp",
  "nishiokoppe.hokkaido.jp",
  "noboribetsu.hokkaido.jp",
  "numata.hokkaido.jp",
  "obihiro.hokkaido.jp",
  "obira.hokkaido.jp",
  "oketo.hokkaido.jp",
  "okoppe.hokkaido.jp",
  "otaru.hokkaido.jp",
  "otobe.hokkaido.jp",
  "otofuke.hokkaido.jp",
  "otoineppu.hokkaido.jp",
  "oumu.hokkaido.jp",
  "ozora.hokkaido.jp",
  "pippu.hokkaido.jp",
  "rankoshi.hokkaido.jp",
  "rebun.hokkaido.jp",
  "rikubetsu.hokkaido.jp",
  "rishiri.hokkaido.jp",
  "rishirifuji.hokkaido.jp",
  "saroma.hokkaido.jp",
  "sarufutsu.hokkaido.jp",
  "shakotan.hokkaido.jp",
  "shari.hokkaido.jp",
  "shibecha.hokkaido.jp",
  "shibetsu.hokkaido.jp",
  "shikabe.hokkaido.jp",
  "shikaoi.hokkaido.jp",
  "shimamaki.hokkaido.jp",
  "shimizu.hokkaido.jp",
  "shimokawa.hokkaido.jp",
  "shinshinotsu.hokkaido.jp",
  "shintoku.hokkaido.jp",
  "shiranuka.hokkaido.jp",
  "shiraoi.hokkaido.jp",
  "shiriuchi.hokkaido.jp",
  "sobetsu.hokkaido.jp",
  "sunagawa.hokkaido.jp",
  "taiki.hokkaido.jp",
  "takasu.hokkaido.jp",
  "takikawa.hokkaido.jp",
  "takinoue.hokkaido.jp",
  "teshikaga.hokkaido.jp",
  "tobetsu.hokkaido.jp",
  "tohma.hokkaido.jp",
  "tomakomai.hokkaido.jp",
  "tomari.hokkaido.jp",
  "toya.hokkaido.jp",
  "toyako.hokkaido.jp",
  "toyotomi.hokkaido.jp",
  "toyoura.hokkaido.jp",
  "tsubetsu.hokkaido.jp",
  "tsukigata.hokkaido.jp",
  "urakawa.hokkaido.jp",
  "urausu.hokkaido.jp",
  "uryu.hokkaido.jp",
  "utashinai.hokkaido.jp",
  "wakkanai.hokkaido.jp",
  "wassamu.hokkaido.jp",
  "yakumo.hokkaido.jp",
  "yoichi.hokkaido.jp",
  "aioi.hyogo.jp",
  "akashi.hyogo.jp",
  "ako.hyogo.jp",
  "amagasaki.hyogo.jp",
  "aogaki.hyogo.jp",
  "asago.hyogo.jp",
  "ashiya.hyogo.jp",
  "awaji.hyogo.jp",
  "fukusaki.hyogo.jp",
  "goshiki.hyogo.jp",
  "harima.hyogo.jp",
  "himeji.hyogo.jp",
  "ichikawa.hyogo.jp",
  "inagawa.hyogo.jp",
  "itami.hyogo.jp",
  "kakogawa.hyogo.jp",
  "kamigori.hyogo.jp",
  "kamikawa.hyogo.jp",
  "kasai.hyogo.jp",
  "kasuga.hyogo.jp",
  "kawanishi.hyogo.jp",
  "miki.hyogo.jp",
  "minamiawaji.hyogo.jp",
  "nishinomiya.hyogo.jp",
  "nishiwaki.hyogo.jp",
  "ono.hyogo.jp",
  "sanda.hyogo.jp",
  "sannan.hyogo.jp",
  "sasayama.hyogo.jp",
  "sayo.hyogo.jp",
  "shingu.hyogo.jp",
  "shinonsen.hyogo.jp",
  "shiso.hyogo.jp",
  "sumoto.hyogo.jp",
  "taishi.hyogo.jp",
  "taka.hyogo.jp",
  "takarazuka.hyogo.jp",
  "takasago.hyogo.jp",
  "takino.hyogo.jp",
  "tamba.hyogo.jp",
  "tatsuno.hyogo.jp",
  "toyooka.hyogo.jp",
  "yabu.hyogo.jp",
  "yashiro.hyogo.jp",
  "yoka.hyogo.jp",
  "yokawa.hyogo.jp",
  "ami.ibaraki.jp",
  "asahi.ibaraki.jp",
  "bando.ibaraki.jp",
  "chikusei.ibaraki.jp",
  "daigo.ibaraki.jp",
  "fujishiro.ibaraki.jp",
  "hitachi.ibaraki.jp",
  "hitachinaka.ibaraki.jp",
  "hitachiomiya.ibaraki.jp",
  "hitachiota.ibaraki.jp",
  "ibaraki.ibaraki.jp",
  "ina.ibaraki.jp",
  "inashiki.ibaraki.jp",
  "itako.ibaraki.jp",
  "iwama.ibaraki.jp",
  "joso.ibaraki.jp",
  "kamisu.ibaraki.jp",
  "kasama.ibaraki.jp",
  "kashima.ibaraki.jp",
  "kasumigaura.ibaraki.jp",
  "koga.ibaraki.jp",
  "miho.ibaraki.jp",
  "mito.ibaraki.jp",
  "moriya.ibaraki.jp",
  "naka.ibaraki.jp",
  "namegata.ibaraki.jp",
  "oarai.ibaraki.jp",
  "ogawa.ibaraki.jp",
  "omitama.ibaraki.jp",
  "ryugasaki.ibaraki.jp",
  "sakai.ibaraki.jp",
  "sakuragawa.ibaraki.jp",
  "shimodate.ibaraki.jp",
  "shimotsuma.ibaraki.jp",
  "shirosato.ibaraki.jp",
  "sowa.ibaraki.jp",
  "suifu.ibaraki.jp",
  "takahagi.ibaraki.jp",
  "tamatsukuri.ibaraki.jp",
  "tokai.ibaraki.jp",
  "tomobe.ibaraki.jp",
  "tone.ibaraki.jp",
  "toride.ibaraki.jp",
  "tsuchiura.ibaraki.jp",
  "tsukuba.ibaraki.jp",
  "uchihara.ibaraki.jp",
  "ushiku.ibaraki.jp",
  "yachiyo.ibaraki.jp",
  "yamagata.ibaraki.jp",
  "yawara.ibaraki.jp",
  "yuki.ibaraki.jp",
  "anamizu.ishikawa.jp",
  "hakui.ishikawa.jp",
  "hakusan.ishikawa.jp",
  "kaga.ishikawa.jp",
  "kahoku.ishikawa.jp",
  "kanazawa.ishikawa.jp",
  "kawakita.ishikawa.jp",
  "komatsu.ishikawa.jp",
  "nakanoto.ishikawa.jp",
  "nanao.ishikawa.jp",
  "nomi.ishikawa.jp",
  "nonoichi.ishikawa.jp",
  "noto.ishikawa.jp",
  "shika.ishikawa.jp",
  "suzu.ishikawa.jp",
  "tsubata.ishikawa.jp",
  "tsurugi.ishikawa.jp",
  "uchinada.ishikawa.jp",
  "wajima.ishikawa.jp",
  "fudai.iwate.jp",
  "fujisawa.iwate.jp",
  "hanamaki.iwate.jp",
  "hiraizumi.iwate.jp",
  "hirono.iwate.jp",
  "ichinohe.iwate.jp",
  "ichinoseki.iwate.jp",
  "iwaizumi.iwate.jp",
  "iwate.iwate.jp",
  "joboji.iwate.jp",
  "kamaishi.iwate.jp",
  "kanegasaki.iwate.jp",
  "karumai.iwate.jp",
  "kawai.iwate.jp",
  "kitakami.iwate.jp",
  "kuji.iwate.jp",
  "kunohe.iwate.jp",
  "kuzumaki.iwate.jp",
  "miyako.iwate.jp",
  "mizusawa.iwate.jp",
  "morioka.iwate.jp",
  "ninohe.iwate.jp",
  "noda.iwate.jp",
  "ofunato.iwate.jp",
  "oshu.iwate.jp",
  "otsuchi.iwate.jp",
  "rikuzentakata.iwate.jp",
  "shiwa.iwate.jp",
  "shizukuishi.iwate.jp",
  "sumita.iwate.jp",
  "tanohata.iwate.jp",
  "tono.iwate.jp",
  "yahaba.iwate.jp",
  "yamada.iwate.jp",
  "ayagawa.kagawa.jp",
  "higashikagawa.kagawa.jp",
  "kanonji.kagawa.jp",
  "kotohira.kagawa.jp",
  "manno.kagawa.jp",
  "marugame.kagawa.jp",
  "mitoyo.kagawa.jp",
  "naoshima.kagawa.jp",
  "sanuki.kagawa.jp",
  "tadotsu.kagawa.jp",
  "takamatsu.kagawa.jp",
  "tonosho.kagawa.jp",
  "uchinomi.kagawa.jp",
  "utazu.kagawa.jp",
  "zentsuji.kagawa.jp",
  "akune.kagoshima.jp",
  "amami.kagoshima.jp",
  "hioki.kagoshima.jp",
  "isa.kagoshima.jp",
  "isen.kagoshima.jp",
  "izumi.kagoshima.jp",
  "kagoshima.kagoshima.jp",
  "kanoya.kagoshima.jp",
  "kawanabe.kagoshima.jp",
  "kinko.kagoshima.jp",
  "kouyama.kagoshima.jp",
  "makurazaki.kagoshima.jp",
  "matsumoto.kagoshima.jp",
  "minamitane.kagoshima.jp",
  "nakatane.kagoshima.jp",
  "nishinoomote.kagoshima.jp",
  "satsumasendai.kagoshima.jp",
  "soo.kagoshima.jp",
  "tarumizu.kagoshima.jp",
  "yusui.kagoshima.jp",
  "aikawa.kanagawa.jp",
  "atsugi.kanagawa.jp",
  "ayase.kanagawa.jp",
  "chigasaki.kanagawa.jp",
  "ebina.kanagawa.jp",
  "fujisawa.kanagawa.jp",
  "hadano.kanagawa.jp",
  "hakone.kanagawa.jp",
  "hiratsuka.kanagawa.jp",
  "isehara.kanagawa.jp",
  "kaisei.kanagawa.jp",
  "kamakura.kanagawa.jp",
  "kiyokawa.kanagawa.jp",
  "matsuda.kanagawa.jp",
  "minamiashigara.kanagawa.jp",
  "miura.kanagawa.jp",
  "nakai.kanagawa.jp",
  "ninomiya.kanagawa.jp",
  "odawara.kanagawa.jp",
  "oi.kanagawa.jp",
  "oiso.kanagawa.jp",
  "sagamihara.kanagawa.jp",
  "samukawa.kanagawa.jp",
  "tsukui.kanagawa.jp",
  "yamakita.kanagawa.jp",
  "yamato.kanagawa.jp",
  "yokosuka.kanagawa.jp",
  "yugawara.kanagawa.jp",
  "zama.kanagawa.jp",
  "zushi.kanagawa.jp",
  "aki.kochi.jp",
  "geisei.kochi.jp",
  "hidaka.kochi.jp",
  "higashitsuno.kochi.jp",
  "ino.kochi.jp",
  "kagami.kochi.jp",
  "kami.kochi.jp",
  "kitagawa.kochi.jp",
  "kochi.kochi.jp",
  "mihara.kochi.jp",
  "motoyama.kochi.jp",
  "muroto.kochi.jp",
  "nahari.kochi.jp",
  "nakamura.kochi.jp",
  "nankoku.kochi.jp",
  "nishitosa.kochi.jp",
  "niyodogawa.kochi.jp",
  "ochi.kochi.jp",
  "okawa.kochi.jp",
  "otoyo.kochi.jp",
  "otsuki.kochi.jp",
  "sakawa.kochi.jp",
  "sukumo.kochi.jp",
  "susaki.kochi.jp",
  "tosa.kochi.jp",
  "tosashimizu.kochi.jp",
  "toyo.kochi.jp",
  "tsuno.kochi.jp",
  "umaji.kochi.jp",
  "yasuda.kochi.jp",
  "yusuhara.kochi.jp",
  "amakusa.kumamoto.jp",
  "arao.kumamoto.jp",
  "aso.kumamoto.jp",
  "choyo.kumamoto.jp",
  "gyokuto.kumamoto.jp",
  "kamiamakusa.kumamoto.jp",
  "kikuchi.kumamoto.jp",
  "kumamoto.kumamoto.jp",
  "mashiki.kumamoto.jp",
  "mifune.kumamoto.jp",
  "minamata.kumamoto.jp",
  "minamioguni.kumamoto.jp",
  "nagasu.kumamoto.jp",
  "nishihara.kumamoto.jp",
  "oguni.kumamoto.jp",
  "ozu.kumamoto.jp",
  "sumoto.kumamoto.jp",
  "takamori.kumamoto.jp",
  "uki.kumamoto.jp",
  "uto.kumamoto.jp",
  "yamaga.kumamoto.jp",
  "yamato.kumamoto.jp",
  "yatsushiro.kumamoto.jp",
  "ayabe.kyoto.jp",
  "fukuchiyama.kyoto.jp",
  "higashiyama.kyoto.jp",
  "ide.kyoto.jp",
  "ine.kyoto.jp",
  "joyo.kyoto.jp",
  "kameoka.kyoto.jp",
  "kamo.kyoto.jp",
  "kita.kyoto.jp",
  "kizu.kyoto.jp",
  "kumiyama.kyoto.jp",
  "kyotamba.kyoto.jp",
  "kyotanabe.kyoto.jp",
  "kyotango.kyoto.jp",
  "maizuru.kyoto.jp",
  "minami.kyoto.jp",
  "minamiyamashiro.kyoto.jp",
  "miyazu.kyoto.jp",
  "muko.kyoto.jp",
  "nagaokakyo.kyoto.jp",
  "nakagyo.kyoto.jp",
  "nantan.kyoto.jp",
  "oyamazaki.kyoto.jp",
  "sakyo.kyoto.jp",
  "seika.kyoto.jp",
  "tanabe.kyoto.jp",
  "uji.kyoto.jp",
  "ujitawara.kyoto.jp",
  "wazuka.kyoto.jp",
  "yamashina.kyoto.jp",
  "yawata.kyoto.jp",
  "asahi.mie.jp",
  "inabe.mie.jp",
  "ise.mie.jp",
  "kameyama.mie.jp",
  "kawagoe.mie.jp",
  "kiho.mie.jp",
  "kisosaki.mie.jp",
  "kiwa.mie.jp",
  "komono.mie.jp",
  "kumano.mie.jp",
  "kuwana.mie.jp",
  "matsusaka.mie.jp",
  "meiwa.mie.jp",
  "mihama.mie.jp",
  "minamiise.mie.jp",
  "misugi.mie.jp",
  "miyama.mie.jp",
  "nabari.mie.jp",
  "shima.mie.jp",
  "suzuka.mie.jp",
  "tado.mie.jp",
  "taiki.mie.jp",
  "taki.mie.jp",
  "tamaki.mie.jp",
  "toba.mie.jp",
  "tsu.mie.jp",
  "udono.mie.jp",
  "ureshino.mie.jp",
  "watarai.mie.jp",
  "yokkaichi.mie.jp",
  "furukawa.miyagi.jp",
  "higashimatsushima.miyagi.jp",
  "ishinomaki.miyagi.jp",
  "iwanuma.miyagi.jp",
  "kakuda.miyagi.jp",
  "kami.miyagi.jp",
  "kawasaki.miyagi.jp",
  "marumori.miyagi.jp",
  "matsushima.miyagi.jp",
  "minamisanriku.miyagi.jp",
  "misato.miyagi.jp",
  "murata.miyagi.jp",
  "natori.miyagi.jp",
  "ogawara.miyagi.jp",
  "ohira.miyagi.jp",
  "onagawa.miyagi.jp",
  "osaki.miyagi.jp",
  "rifu.miyagi.jp",
  "semine.miyagi.jp",
  "shibata.miyagi.jp",
  "shichikashuku.miyagi.jp",
  "shikama.miyagi.jp",
  "shiogama.miyagi.jp",
  "shiroishi.miyagi.jp",
  "tagajo.miyagi.jp",
  "taiwa.miyagi.jp",
  "tome.miyagi.jp",
  "tomiya.miyagi.jp",
  "wakuya.miyagi.jp",
  "watari.miyagi.jp",
  "yamamoto.miyagi.jp",
  "zao.miyagi.jp",
  "aya.miyazaki.jp",
  "ebino.miyazaki.jp",
  "gokase.miyazaki.jp",
  "hyuga.miyazaki.jp",
  "kadogawa.miyazaki.jp",
  "kawaminami.miyazaki.jp",
  "kijo.miyazaki.jp",
  "kitagawa.miyazaki.jp",
  "kitakata.miyazaki.jp",
  "kitaura.miyazaki.jp",
  "kobayashi.miyazaki.jp",
  "kunitomi.miyazaki.jp",
  "kushima.miyazaki.jp",
  "mimata.miyazaki.jp",
  "miyakonojo.miyazaki.jp",
  "miyazaki.miyazaki.jp",
  "morotsuka.miyazaki.jp",
  "nichinan.miyazaki.jp",
  "nishimera.miyazaki.jp",
  "nobeoka.miyazaki.jp",
  "saito.miyazaki.jp",
  "shiiba.miyazaki.jp",
  "shintomi.miyazaki.jp",
  "takaharu.miyazaki.jp",
  "takanabe.miyazaki.jp",
  "takazaki.miyazaki.jp",
  "tsuno.miyazaki.jp",
  "achi.nagano.jp",
  "agematsu.nagano.jp",
  "anan.nagano.jp",
  "aoki.nagano.jp",
  "asahi.nagano.jp",
  "azumino.nagano.jp",
  "chikuhoku.nagano.jp",
  "chikuma.nagano.jp",
  "chino.nagano.jp",
  "fujimi.nagano.jp",
  "hakuba.nagano.jp",
  "hara.nagano.jp",
  "hiraya.nagano.jp",
  "iida.nagano.jp",
  "iijima.nagano.jp",
  "iiyama.nagano.jp",
  "iizuna.nagano.jp",
  "ikeda.nagano.jp",
  "ikusaka.nagano.jp",
  "ina.nagano.jp",
  "karuizawa.nagano.jp",
  "kawakami.nagano.jp",
  "kiso.nagano.jp",
  "kisofukushima.nagano.jp",
  "kitaaiki.nagano.jp",
  "komagane.nagano.jp",
  "komoro.nagano.jp",
  "matsukawa.nagano.jp",
  "matsumoto.nagano.jp",
  "miasa.nagano.jp",
  "minamiaiki.nagano.jp",
  "minamimaki.nagano.jp",
  "minamiminowa.nagano.jp",
  "minowa.nagano.jp",
  "miyada.nagano.jp",
  "miyota.nagano.jp",
  "mochizuki.nagano.jp",
  "nagano.nagano.jp",
  "nagawa.nagano.jp",
  "nagiso.nagano.jp",
  "nakagawa.nagano.jp",
  "nakano.nagano.jp",
  "nozawaonsen.nagano.jp",
  "obuse.nagano.jp",
  "ogawa.nagano.jp",
  "okaya.nagano.jp",
  "omachi.nagano.jp",
  "omi.nagano.jp",
  "ookuwa.nagano.jp",
  "ooshika.nagano.jp",
  "otaki.nagano.jp",
  "otari.nagano.jp",
  "sakae.nagano.jp",
  "sakaki.nagano.jp",
  "saku.nagano.jp",
  "sakuho.nagano.jp",
  "shimosuwa.nagano.jp",
  "shinanomachi.nagano.jp",
  "shiojiri.nagano.jp",
  "suwa.nagano.jp",
  "suzaka.nagano.jp",
  "takagi.nagano.jp",
  "takamori.nagano.jp",
  "takayama.nagano.jp",
  "tateshina.nagano.jp",
  "tatsuno.nagano.jp",
  "togakushi.nagano.jp",
  "togura.nagano.jp",
  "tomi.nagano.jp",
  "ueda.nagano.jp",
  "wada.nagano.jp",
  "yamagata.nagano.jp",
  "yamanouchi.nagano.jp",
  "yasaka.nagano.jp",
  "yasuoka.nagano.jp",
  "chijiwa.nagasaki.jp",
  "futsu.nagasaki.jp",
  "goto.nagasaki.jp",
  "hasami.nagasaki.jp",
  "hirado.nagasaki.jp",
  "iki.nagasaki.jp",
  "isahaya.nagasaki.jp",
  "kawatana.nagasaki.jp",
  "kuchinotsu.nagasaki.jp",
  "matsuura.nagasaki.jp",
  "nagasaki.nagasaki.jp",
  "obama.nagasaki.jp",
  "omura.nagasaki.jp",
  "oseto.nagasaki.jp",
  "saikai.nagasaki.jp",
  "sasebo.nagasaki.jp",
  "seihi.nagasaki.jp",
  "shimabara.nagasaki.jp",
  "shinkamigoto.nagasaki.jp",
  "togitsu.nagasaki.jp",
  "tsushima.nagasaki.jp",
  "unzen.nagasaki.jp",
  "ando.nara.jp",
  "gose.nara.jp",
  "heguri.nara.jp",
  "higashiyoshino.nara.jp",
  "ikaruga.nara.jp",
  "ikoma.nara.jp",
  "kamikitayama.nara.jp",
  "kanmaki.nara.jp",
  "kashiba.nara.jp",
  "kashihara.nara.jp",
  "katsuragi.nara.jp",
  "kawai.nara.jp",
  "kawakami.nara.jp",
  "kawanishi.nara.jp",
  "koryo.nara.jp",
  "kurotaki.nara.jp",
  "mitsue.nara.jp",
  "miyake.nara.jp",
  "nara.nara.jp",
  "nosegawa.nara.jp",
  "oji.nara.jp",
  "ouda.nara.jp",
  "oyodo.nara.jp",
  "sakurai.nara.jp",
  "sango.nara.jp",
  "shimoichi.nara.jp",
  "shimokitayama.nara.jp",
  "shinjo.nara.jp",
  "soni.nara.jp",
  "takatori.nara.jp",
  "tawaramoto.nara.jp",
  "tenkawa.nara.jp",
  "tenri.nara.jp",
  "uda.nara.jp",
  "yamatokoriyama.nara.jp",
  "yamatotakada.nara.jp",
  "yamazoe.nara.jp",
  "yoshino.nara.jp",
  "aga.niigata.jp",
  "agano.niigata.jp",
  "gosen.niigata.jp",
  "itoigawa.niigata.jp",
  "izumozaki.niigata.jp",
  "joetsu.niigata.jp",
  "kamo.niigata.jp",
  "kariwa.niigata.jp",
  "kashiwazaki.niigata.jp",
  "minamiuonuma.niigata.jp",
  "mitsuke.niigata.jp",
  "muika.niigata.jp",
  "murakami.niigata.jp",
  "myoko.niigata.jp",
  "nagaoka.niigata.jp",
  "niigata.niigata.jp",
  "ojiya.niigata.jp",
  "omi.niigata.jp",
  "sado.niigata.jp",
  "sanjo.niigata.jp",
  "seiro.niigata.jp",
  "seirou.niigata.jp",
  "sekikawa.niigata.jp",
  "shibata.niigata.jp",
  "tagami.niigata.jp",
  "tainai.niigata.jp",
  "tochio.niigata.jp",
  "tokamachi.niigata.jp",
  "tsubame.niigata.jp",
  "tsunan.niigata.jp",
  "uonuma.niigata.jp",
  "yahiko.niigata.jp",
  "yoita.niigata.jp",
  "yuzawa.niigata.jp",
  "beppu.oita.jp",
  "bungoono.oita.jp",
  "bungotakada.oita.jp",
  "hasama.oita.jp",
  "hiji.oita.jp",
  "himeshima.oita.jp",
  "hita.oita.jp",
  "kamitsue.oita.jp",
  "kokonoe.oita.jp",
  "kuju.oita.jp",
  "kunisaki.oita.jp",
  "kusu.oita.jp",
  "oita.oita.jp",
  "saiki.oita.jp",
  "taketa.oita.jp",
  "tsukumi.oita.jp",
  "usa.oita.jp",
  "usuki.oita.jp",
  "yufu.oita.jp",
  "akaiwa.okayama.jp",
  "asakuchi.okayama.jp",
  "bizen.okayama.jp",
  "hayashima.okayama.jp",
  "ibara.okayama.jp",
  "kagamino.okayama.jp",
  "kasaoka.okayama.jp",
  "kibichuo.okayama.jp",
  "kumenan.okayama.jp",
  "kurashiki.okayama.jp",
  "maniwa.okayama.jp",
  "misaki.okayama.jp",
  "nagi.okayama.jp",
  "niimi.okayama.jp",
  "nishiawakura.okayama.jp",
  "okayama.okayama.jp",
  "satosho.okayama.jp",
  "setouchi.okayama.jp",
  "shinjo.okayama.jp",
  "shoo.okayama.jp",
  "soja.okayama.jp",
  "takahashi.okayama.jp",
  "tamano.okayama.jp",
  "tsuyama.okayama.jp",
  "wake.okayama.jp",
  "yakage.okayama.jp",
  "aguni.okinawa.jp",
  "ginowan.okinawa.jp",
  "ginoza.okinawa.jp",
  "gushikami.okinawa.jp",
  "haebaru.okinawa.jp",
  "higashi.okinawa.jp",
  "hirara.okinawa.jp",
  "iheya.okinawa.jp",
  "ishigaki.okinawa.jp",
  "ishikawa.okinawa.jp",
  "itoman.okinawa.jp",
  "izena.okinawa.jp",
  "kadena.okinawa.jp",
  "kin.okinawa.jp",
  "kitadaito.okinawa.jp",
  "kitanakagusuku.okinawa.jp",
  "kumejima.okinawa.jp",
  "kunigami.okinawa.jp",
  "minamidaito.okinawa.jp",
  "motobu.okinawa.jp",
  "nago.okinawa.jp",
  "naha.okinawa.jp",
  "nakagusuku.okinawa.jp",
  "nakijin.okinawa.jp",
  "nanjo.okinawa.jp",
  "nishihara.okinawa.jp",
  "ogimi.okinawa.jp",
  "okinawa.okinawa.jp",
  "onna.okinawa.jp",
  "shimoji.okinawa.jp",
  "taketomi.okinawa.jp",
  "tarama.okinawa.jp",
  "tokashiki.okinawa.jp",
  "tomigusuku.okinawa.jp",
  "tonaki.okinawa.jp",
  "urasoe.okinawa.jp",
  "uruma.okinawa.jp",
  "yaese.okinawa.jp",
  "yomitan.okinawa.jp",
  "yonabaru.okinawa.jp",
  "yonaguni.okinawa.jp",
  "zamami.okinawa.jp",
  "abeno.osaka.jp",
  "chihayaakasaka.osaka.jp",
  "chuo.osaka.jp",
  "daito.osaka.jp",
  "fujiidera.osaka.jp",
  "habikino.osaka.jp",
  "hannan.osaka.jp",
  "higashiosaka.osaka.jp",
  "higashisumiyoshi.osaka.jp",
  "higashiyodogawa.osaka.jp",
  "hirakata.osaka.jp",
  "ibaraki.osaka.jp",
  "ikeda.osaka.jp",
  "izumi.osaka.jp",
  "izumiotsu.osaka.jp",
  "izumisano.osaka.jp",
  "kadoma.osaka.jp",
  "kaizuka.osaka.jp",
  "kanan.osaka.jp",
  "kashiwara.osaka.jp",
  "katano.osaka.jp",
  "kawachinagano.osaka.jp",
  "kishiwada.osaka.jp",
  "kita.osaka.jp",
  "kumatori.osaka.jp",
  "matsubara.osaka.jp",
  "minato.osaka.jp",
  "minoh.osaka.jp",
  "misaki.osaka.jp",
  "moriguchi.osaka.jp",
  "neyagawa.osaka.jp",
  "nishi.osaka.jp",
  "nose.osaka.jp",
  "osakasayama.osaka.jp",
  "sakai.osaka.jp",
  "sayama.osaka.jp",
  "sennan.osaka.jp",
  "settsu.osaka.jp",
  "shijonawate.osaka.jp",
  "shimamoto.osaka.jp",
  "suita.osaka.jp",
  "tadaoka.osaka.jp",
  "taishi.osaka.jp",
  "tajiri.osaka.jp",
  "takaishi.osaka.jp",
  "takatsuki.osaka.jp",
  "tondabayashi.osaka.jp",
  "toyonaka.osaka.jp",
  "toyono.osaka.jp",
  "yao.osaka.jp",
  "ariake.saga.jp",
  "arita.saga.jp",
  "fukudomi.saga.jp",
  "genkai.saga.jp",
  "hamatama.saga.jp",
  "hizen.saga.jp",
  "imari.saga.jp",
  "kamimine.saga.jp",
  "kanzaki.saga.jp",
  "karatsu.saga.jp",
  "kashima.saga.jp",
  "kitagata.saga.jp",
  "kitahata.saga.jp",
  "kiyama.saga.jp",
  "kouhoku.saga.jp",
  "kyuragi.saga.jp",
  "nishiarita.saga.jp",
  "ogi.saga.jp",
  "omachi.saga.jp",
  "ouchi.saga.jp",
  "saga.saga.jp",
  "shiroishi.saga.jp",
  "taku.saga.jp",
  "tara.saga.jp",
  "tosu.saga.jp",
  "yoshinogari.saga.jp",
  "arakawa.saitama.jp",
  "asaka.saitama.jp",
  "chichibu.saitama.jp",
  "fujimi.saitama.jp",
  "fujimino.saitama.jp",
  "fukaya.saitama.jp",
  "hanno.saitama.jp",
  "hanyu.saitama.jp",
  "hasuda.saitama.jp",
  "hatogaya.saitama.jp",
  "hatoyama.saitama.jp",
  "hidaka.saitama.jp",
  "higashichichibu.saitama.jp",
  "higashimatsuyama.saitama.jp",
  "honjo.saitama.jp",
  "ina.saitama.jp",
  "iruma.saitama.jp",
  "iwatsuki.saitama.jp",
  "kamiizumi.saitama.jp",
  "kamikawa.saitama.jp",
  "kamisato.saitama.jp",
  "kasukabe.saitama.jp",
  "kawagoe.saitama.jp",
  "kawaguchi.saitama.jp",
  "kawajima.saitama.jp",
  "kazo.saitama.jp",
  "kitamoto.saitama.jp",
  "koshigaya.saitama.jp",
  "kounosu.saitama.jp",
  "kuki.saitama.jp",
  "kumagaya.saitama.jp",
  "matsubushi.saitama.jp",
  "minano.saitama.jp",
  "misato.saitama.jp",
  "miyashiro.saitama.jp",
  "miyoshi.saitama.jp",
  "moroyama.saitama.jp",
  "nagatoro.saitama.jp",
  "namegawa.saitama.jp",
  "niiza.saitama.jp",
  "ogano.saitama.jp",
  "ogawa.saitama.jp",
  "ogose.saitama.jp",
  "okegawa.saitama.jp",
  "omiya.saitama.jp",
  "otaki.saitama.jp",
  "ranzan.saitama.jp",
  "ryokami.saitama.jp",
  "saitama.saitama.jp",
  "sakado.saitama.jp",
  "satte.saitama.jp",
  "sayama.saitama.jp",
  "shiki.saitama.jp",
  "shiraoka.saitama.jp",
  "soka.saitama.jp",
  "sugito.saitama.jp",
  "toda.saitama.jp",
  "tokigawa.saitama.jp",
  "tokorozawa.saitama.jp",
  "tsurugashima.saitama.jp",
  "urawa.saitama.jp",
  "warabi.saitama.jp",
  "yashio.saitama.jp",
  "yokoze.saitama.jp",
  "yono.saitama.jp",
  "yorii.saitama.jp",
  "yoshida.saitama.jp",
  "yoshikawa.saitama.jp",
  "yoshimi.saitama.jp",
  "aisho.shiga.jp",
  "gamo.shiga.jp",
  "higashiomi.shiga.jp",
  "hikone.shiga.jp",
  "koka.shiga.jp",
  "konan.shiga.jp",
  "kosei.shiga.jp",
  "koto.shiga.jp",
  "kusatsu.shiga.jp",
  "maibara.shiga.jp",
  "moriyama.shiga.jp",
  "nagahama.shiga.jp",
  "nishiazai.shiga.jp",
  "notogawa.shiga.jp",
  "omihachiman.shiga.jp",
  "otsu.shiga.jp",
  "ritto.shiga.jp",
  "ryuoh.shiga.jp",
  "takashima.shiga.jp",
  "takatsuki.shiga.jp",
  "torahime.shiga.jp",
  "toyosato.shiga.jp",
  "yasu.shiga.jp",
  "akagi.shimane.jp",
  "ama.shimane.jp",
  "gotsu.shimane.jp",
  "hamada.shimane.jp",
  "higashiizumo.shimane.jp",
  "hikawa.shimane.jp",
  "hikimi.shimane.jp",
  "izumo.shimane.jp",
  "kakinoki.shimane.jp",
  "masuda.shimane.jp",
  "matsue.shimane.jp",
  "misato.shimane.jp",
  "nishinoshima.shimane.jp",
  "ohda.shimane.jp",
  "okinoshima.shimane.jp",
  "okuizumo.shimane.jp",
  "shimane.shimane.jp",
  "tamayu.shimane.jp",
  "tsuwano.shimane.jp",
  "unnan.shimane.jp",
  "yakumo.shimane.jp",
  "yasugi.shimane.jp",
  "yatsuka.shimane.jp",
  "arai.shizuoka.jp",
  "atami.shizuoka.jp",
  "fuji.shizuoka.jp",
  "fujieda.shizuoka.jp",
  "fujikawa.shizuoka.jp",
  "fujinomiya.shizuoka.jp",
  "fukuroi.shizuoka.jp",
  "gotemba.shizuoka.jp",
  "haibara.shizuoka.jp",
  "hamamatsu.shizuoka.jp",
  "higashiizu.shizuoka.jp",
  "ito.shizuoka.jp",
  "iwata.shizuoka.jp",
  "izu.shizuoka.jp",
  "izunokuni.shizuoka.jp",
  "kakegawa.shizuoka.jp",
  "kannami.shizuoka.jp",
  "kawanehon.shizuoka.jp",
  "kawazu.shizuoka.jp",
  "kikugawa.shizuoka.jp",
  "kosai.shizuoka.jp",
  "makinohara.shizuoka.jp",
  "matsuzaki.shizuoka.jp",
  "minamiizu.shizuoka.jp",
  "mishima.shizuoka.jp",
  "morimachi.shizuoka.jp",
  "nishiizu.shizuoka.jp",
  "numazu.shizuoka.jp",
  "omaezaki.shizuoka.jp",
  "shimada.shizuoka.jp",
  "shimizu.shizuoka.jp",
  "shimoda.shizuoka.jp",
  "shizuoka.shizuoka.jp",
  "susono.shizuoka.jp",
  "yaizu.shizuoka.jp",
  "yoshida.shizuoka.jp",
  "ashikaga.tochigi.jp",
  "bato.tochigi.jp",
  "haga.tochigi.jp",
  "ichikai.tochigi.jp",
  "iwafune.tochigi.jp",
  "kaminokawa.tochigi.jp",
  "kanuma.tochigi.jp",
  "karasuyama.tochigi.jp",
  "kuroiso.tochigi.jp",
  "mashiko.tochigi.jp",
  "mibu.tochigi.jp",
  "moka.tochigi.jp",
  "motegi.tochigi.jp",
  "nasu.tochigi.jp",
  "nasushiobara.tochigi.jp",
  "nikko.tochigi.jp",
  "nishikata.tochigi.jp",
  "nogi.tochigi.jp",
  "ohira.tochigi.jp",
  "ohtawara.tochigi.jp",
  "oyama.tochigi.jp",
  "sakura.tochigi.jp",
  "sano.tochigi.jp",
  "shimotsuke.tochigi.jp",
  "shioya.tochigi.jp",
  "takanezawa.tochigi.jp",
  "tochigi.tochigi.jp",
  "tsuga.tochigi.jp",
  "ujiie.tochigi.jp",
  "utsunomiya.tochigi.jp",
  "yaita.tochigi.jp",
  "aizumi.tokushima.jp",
  "anan.tokushima.jp",
  "ichiba.tokushima.jp",
  "itano.tokushima.jp",
  "kainan.tokushima.jp",
  "komatsushima.tokushima.jp",
  "matsushige.tokushima.jp",
  "mima.tokushima.jp",
  "minami.tokushima.jp",
  "miyoshi.tokushima.jp",
  "mugi.tokushima.jp",
  "nakagawa.tokushima.jp",
  "naruto.tokushima.jp",
  "sanagochi.tokushima.jp",
  "shishikui.tokushima.jp",
  "tokushima.tokushima.jp",
  "wajiki.tokushima.jp",
  "adachi.tokyo.jp",
  "akiruno.tokyo.jp",
  "akishima.tokyo.jp",
  "aogashima.tokyo.jp",
  "arakawa.tokyo.jp",
  "bunkyo.tokyo.jp",
  "chiyoda.tokyo.jp",
  "chofu.tokyo.jp",
  "chuo.tokyo.jp",
  "edogawa.tokyo.jp",
  "fuchu.tokyo.jp",
  "fussa.tokyo.jp",
  "hachijo.tokyo.jp",
  "hachioji.tokyo.jp",
  "hamura.tokyo.jp",
  "higashikurume.tokyo.jp",
  "higashimurayama.tokyo.jp",
  "higashiyamato.tokyo.jp",
  "hino.tokyo.jp",
  "hinode.tokyo.jp",
  "hinohara.tokyo.jp",
  "inagi.tokyo.jp",
  "itabashi.tokyo.jp",
  "katsushika.tokyo.jp",
  "kita.tokyo.jp",
  "kiyose.tokyo.jp",
  "kodaira.tokyo.jp",
  "koganei.tokyo.jp",
  "kokubunji.tokyo.jp",
  "komae.tokyo.jp",
  "koto.tokyo.jp",
  "kouzushima.tokyo.jp",
  "kunitachi.tokyo.jp",
  "machida.tokyo.jp",
  "meguro.tokyo.jp",
  "minato.tokyo.jp",
  "mitaka.tokyo.jp",
  "mizuho.tokyo.jp",
  "musashimurayama.tokyo.jp",
  "musashino.tokyo.jp",
  "nakano.tokyo.jp",
  "nerima.tokyo.jp",
  "ogasawara.tokyo.jp",
  "okutama.tokyo.jp",
  "ome.tokyo.jp",
  "oshima.tokyo.jp",
  "ota.tokyo.jp",
  "setagaya.tokyo.jp",
  "shibuya.tokyo.jp",
  "shinagawa.tokyo.jp",
  "shinjuku.tokyo.jp",
  "suginami.tokyo.jp",
  "sumida.tokyo.jp",
  "tachikawa.tokyo.jp",
  "taito.tokyo.jp",
  "tama.tokyo.jp",
  "toshima.tokyo.jp",
  "chizu.tottori.jp",
  "hino.tottori.jp",
  "kawahara.tottori.jp",
  "koge.tottori.jp",
  "kotoura.tottori.jp",
  "misasa.tottori.jp",
  "nanbu.tottori.jp",
  "nichinan.tottori.jp",
  "sakaiminato.tottori.jp",
  "tottori.tottori.jp",
  "wakasa.tottori.jp",
  "yazu.tottori.jp",
  "yonago.tottori.jp",
  "asahi.toyama.jp",
  "fuchu.toyama.jp",
  "fukumitsu.toyama.jp",
  "funahashi.toyama.jp",
  "himi.toyama.jp",
  "imizu.toyama.jp",
  "inami.toyama.jp",
  "johana.toyama.jp",
  "kamiichi.toyama.jp",
  "kurobe.toyama.jp",
  "nakaniikawa.toyama.jp",
  "namerikawa.toyama.jp",
  "nanto.toyama.jp",
  "nyuzen.toyama.jp",
  "oyabe.toyama.jp",
  "taira.toyama.jp",
  "takaoka.toyama.jp",
  "tateyama.toyama.jp",
  "toga.toyama.jp",
  "tonami.toyama.jp",
  "toyama.toyama.jp",
  "unazuki.toyama.jp",
  "uozu.toyama.jp",
  "yamada.toyama.jp",
  "arida.wakayama.jp",
  "aridagawa.wakayama.jp",
  "gobo.wakayama.jp",
  "hashimoto.wakayama.jp",
  "hidaka.wakayama.jp",
  "hirogawa.wakayama.jp",
  "inami.wakayama.jp",
  "iwade.wakayama.jp",
  "kainan.wakayama.jp",
  "kamitonda.wakayama.jp",
  "katsuragi.wakayama.jp",
  "kimino.wakayama.jp",
  "kinokawa.wakayama.jp",
  "kitayama.wakayama.jp",
  "koya.wakayama.jp",
  "koza.wakayama.jp",
  "kozagawa.wakayama.jp",
  "kudoyama.wakayama.jp",
  "kushimoto.wakayama.jp",
  "mihama.wakayama.jp",
  "misato.wakayama.jp",
  "nachikatsuura.wakayama.jp",
  "shingu.wakayama.jp",
  "shirahama.wakayama.jp",
  "taiji.wakayama.jp",
  "tanabe.wakayama.jp",
  "wakayama.wakayama.jp",
  "yuasa.wakayama.jp",
  "yura.wakayama.jp",
  "asahi.yamagata.jp",
  "funagata.yamagata.jp",
  "higashine.yamagata.jp",
  "iide.yamagata.jp",
  "kahoku.yamagata.jp",
  "kaminoyama.yamagata.jp",
  "kaneyama.yamagata.jp",
  "kawanishi.yamagata.jp",
  "mamurogawa.yamagata.jp",
  "mikawa.yamagata.jp",
  "murayama.yamagata.jp",
  "nagai.yamagata.jp",
  "nakayama.yamagata.jp",
  "nanyo.yamagata.jp",
  "nishikawa.yamagata.jp",
  "obanazawa.yamagata.jp",
  "oe.yamagata.jp",
  "oguni.yamagata.jp",
  "ohkura.yamagata.jp",
  "oishida.yamagata.jp",
  "sagae.yamagata.jp",
  "sakata.yamagata.jp",
  "sakegawa.yamagata.jp",
  "shinjo.yamagata.jp",
  "shirataka.yamagata.jp",
  "shonai.yamagata.jp",
  "takahata.yamagata.jp",
  "tendo.yamagata.jp",
  "tozawa.yamagata.jp",
  "tsuruoka.yamagata.jp",
  "yamagata.yamagata.jp",
  "yamanobe.yamagata.jp",
  "yonezawa.yamagata.jp",
  "yuza.yamagata.jp",
  "abu.yamaguchi.jp",
  "hagi.yamaguchi.jp",
  "hikari.yamaguchi.jp",
  "hofu.yamaguchi.jp",
  "iwakuni.yamaguchi.jp",
  "kudamatsu.yamaguchi.jp",
  "mitou.yamaguchi.jp",
  "nagato.yamaguchi.jp",
  "oshima.yamaguchi.jp",
  "shimonoseki.yamaguchi.jp",
  "shunan.yamaguchi.jp",
  "tabuse.yamaguchi.jp",
  "tokuyama.yamaguchi.jp",
  "toyota.yamaguchi.jp",
  "ube.yamaguchi.jp",
  "yuu.yamaguchi.jp",
  "chuo.yamanashi.jp",
  "doshi.yamanashi.jp",
  "fuefuki.yamanashi.jp",
  "fujikawa.yamanashi.jp",
  "fujikawaguchiko.yamanashi.jp",
  "fujiyoshida.yamanashi.jp",
  "hayakawa.yamanashi.jp",
  "hokuto.yamanashi.jp",
  "ichikawamisato.yamanashi.jp",
  "kai.yamanashi.jp",
  "kofu.yamanashi.jp",
  "koshu.yamanashi.jp",
  "kosuge.yamanashi.jp",
  "minami-alps.yamanashi.jp",
  "minobu.yamanashi.jp",
  "nakamichi.yamanashi.jp",
  "nanbu.yamanashi.jp",
  "narusawa.yamanashi.jp",
  "nirasaki.yamanashi.jp",
  "nishikatsura.yamanashi.jp",
  "oshino.yamanashi.jp",
  "otsuki.yamanashi.jp",
  "showa.yamanashi.jp",
  "tabayama.yamanashi.jp",
  "tsuru.yamanashi.jp",
  "uenohara.yamanashi.jp",
  "yamanakako.yamanashi.jp",
  "yamanashi.yamanashi.jp",
  "ke",
  "ac.ke",
  "co.ke",
  "go.ke",
  "info.ke",
  "me.ke",
  "mobi.ke",
  "ne.ke",
  "or.ke",
  "sc.ke",
  "kg",
  "org.kg",
  "net.kg",
  "com.kg",
  "edu.kg",
  "gov.kg",
  "mil.kg",
  "*.kh",
  "ki",
  "edu.ki",
  "biz.ki",
  "net.ki",
  "org.ki",
  "gov.ki",
  "info.ki",
  "com.ki",
  "km",
  "org.km",
  "nom.km",
  "gov.km",
  "prd.km",
  "tm.km",
  "edu.km",
  "mil.km",
  "ass.km",
  "com.km",
  "coop.km",
  "asso.km",
  "presse.km",
  "medecin.km",
  "notaires.km",
  "pharmaciens.km",
  "veterinaire.km",
  "gouv.km",
  "kn",
  "net.kn",
  "org.kn",
  "edu.kn",
  "gov.kn",
  "kp",
  "com.kp",
  "edu.kp",
  "gov.kp",
  "org.kp",
  "rep.kp",
  "tra.kp",
  "kr",
  "ac.kr",
  "co.kr",
  "es.kr",
  "go.kr",
  "hs.kr",
  "kg.kr",
  "mil.kr",
  "ms.kr",
  "ne.kr",
  "or.kr",
  "pe.kr",
  "re.kr",
  "sc.kr",
  "busan.kr",
  "chungbuk.kr",
  "chungnam.kr",
  "daegu.kr",
  "daejeon.kr",
  "gangwon.kr",
  "gwangju.kr",
  "gyeongbuk.kr",
  "gyeonggi.kr",
  "gyeongnam.kr",
  "incheon.kr",
  "jeju.kr",
  "jeonbuk.kr",
  "jeonnam.kr",
  "seoul.kr",
  "ulsan.kr",
  "kw",
  "com.kw",
  "edu.kw",
  "emb.kw",
  "gov.kw",
  "ind.kw",
  "net.kw",
  "org.kw",
  "ky",
  "com.ky",
  "edu.ky",
  "net.ky",
  "org.ky",
  "kz",
  "org.kz",
  "edu.kz",
  "net.kz",
  "gov.kz",
  "mil.kz",
  "com.kz",
  "la",
  "int.la",
  "net.la",
  "info.la",
  "edu.la",
  "gov.la",
  "per.la",
  "com.la",
  "org.la",
  "lb",
  "com.lb",
  "edu.lb",
  "gov.lb",
  "net.lb",
  "org.lb",
  "lc",
  "com.lc",
  "net.lc",
  "co.lc",
  "org.lc",
  "edu.lc",
  "gov.lc",
  "li",
  "lk",
  "gov.lk",
  "sch.lk",
  "net.lk",
  "int.lk",
  "com.lk",
  "org.lk",
  "edu.lk",
  "ngo.lk",
  "soc.lk",
  "web.lk",
  "ltd.lk",
  "assn.lk",
  "grp.lk",
  "hotel.lk",
  "ac.lk",
  "lr",
  "com.lr",
  "edu.lr",
  "gov.lr",
  "org.lr",
  "net.lr",
  "ls",
  "ac.ls",
  "biz.ls",
  "co.ls",
  "edu.ls",
  "gov.ls",
  "info.ls",
  "net.ls",
  "org.ls",
  "sc.ls",
  "lt",
  "gov.lt",
  "lu",
  "lv",
  "com.lv",
  "edu.lv",
  "gov.lv",
  "org.lv",
  "mil.lv",
  "id.lv",
  "net.lv",
  "asn.lv",
  "conf.lv",
  "ly",
  "com.ly",
  "net.ly",
  "gov.ly",
  "plc.ly",
  "edu.ly",
  "sch.ly",
  "med.ly",
  "org.ly",
  "id.ly",
  "ma",
  "co.ma",
  "net.ma",
  "gov.ma",
  "org.ma",
  "ac.ma",
  "press.ma",
  "mc",
  "tm.mc",
  "asso.mc",
  "md",
  "me",
  "co.me",
  "net.me",
  "org.me",
  "edu.me",
  "ac.me",
  "gov.me",
  "its.me",
  "priv.me",
  "mg",
  "org.mg",
  "nom.mg",
  "gov.mg",
  "prd.mg",
  "tm.mg",
  "edu.mg",
  "mil.mg",
  "com.mg",
  "co.mg",
  "mh",
  "mil",
  "mk",
  "com.mk",
  "org.mk",
  "net.mk",
  "edu.mk",
  "gov.mk",
  "inf.mk",
  "name.mk",
  "ml",
  "com.ml",
  "edu.ml",
  "gouv.ml",
  "gov.ml",
  "net.ml",
  "org.ml",
  "presse.ml",
  "*.mm",
  "mn",
  "gov.mn",
  "edu.mn",
  "org.mn",
  "mo",
  "com.mo",
  "net.mo",
  "org.mo",
  "edu.mo",
  "gov.mo",
  "mobi",
  "mp",
  "mq",
  "mr",
  "gov.mr",
  "ms",
  "com.ms",
  "edu.ms",
  "gov.ms",
  "net.ms",
  "org.ms",
  "mt",
  "com.mt",
  "edu.mt",
  "net.mt",
  "org.mt",
  "mu",
  "com.mu",
  "net.mu",
  "org.mu",
  "gov.mu",
  "ac.mu",
  "co.mu",
  "or.mu",
  "museum",
  "academy.museum",
  "agriculture.museum",
  "air.museum",
  "airguard.museum",
  "alabama.museum",
  "alaska.museum",
  "amber.museum",
  "ambulance.museum",
  "american.museum",
  "americana.museum",
  "americanantiques.museum",
  "americanart.museum",
  "amsterdam.museum",
  "and.museum",
  "annefrank.museum",
  "anthro.museum",
  "anthropology.museum",
  "antiques.museum",
  "aquarium.museum",
  "arboretum.museum",
  "archaeological.museum",
  "archaeology.museum",
  "architecture.museum",
  "art.museum",
  "artanddesign.museum",
  "artcenter.museum",
  "artdeco.museum",
  "arteducation.museum",
  "artgallery.museum",
  "arts.museum",
  "artsandcrafts.museum",
  "asmatart.museum",
  "assassination.museum",
  "assisi.museum",
  "association.museum",
  "astronomy.museum",
  "atlanta.museum",
  "austin.museum",
  "australia.museum",
  "automotive.museum",
  "aviation.museum",
  "axis.museum",
  "badajoz.museum",
  "baghdad.museum",
  "bahn.museum",
  "bale.museum",
  "baltimore.museum",
  "barcelona.museum",
  "baseball.museum",
  "basel.museum",
  "baths.museum",
  "bauern.museum",
  "beauxarts.museum",
  "beeldengeluid.museum",
  "bellevue.museum",
  "bergbau.museum",
  "berkeley.museum",
  "berlin.museum",
  "bern.museum",
  "bible.museum",
  "bilbao.museum",
  "bill.museum",
  "birdart.museum",
  "birthplace.museum",
  "bonn.museum",
  "boston.museum",
  "botanical.museum",
  "botanicalgarden.museum",
  "botanicgarden.museum",
  "botany.museum",
  "brandywinevalley.museum",
  "brasil.museum",
  "bristol.museum",
  "british.museum",
  "britishcolumbia.museum",
  "broadcast.museum",
  "brunel.museum",
  "brussel.museum",
  "brussels.museum",
  "bruxelles.museum",
  "building.museum",
  "burghof.museum",
  "bus.museum",
  "bushey.museum",
  "cadaques.museum",
  "california.museum",
  "cambridge.museum",
  "can.museum",
  "canada.museum",
  "capebreton.museum",
  "carrier.museum",
  "cartoonart.museum",
  "casadelamoneda.museum",
  "castle.museum",
  "castres.museum",
  "celtic.museum",
  "center.museum",
  "chattanooga.museum",
  "cheltenham.museum",
  "chesapeakebay.museum",
  "chicago.museum",
  "children.museum",
  "childrens.museum",
  "childrensgarden.museum",
  "chiropractic.museum",
  "chocolate.museum",
  "christiansburg.museum",
  "cincinnati.museum",
  "cinema.museum",
  "circus.museum",
  "civilisation.museum",
  "civilization.museum",
  "civilwar.museum",
  "clinton.museum",
  "clock.museum",
  "coal.museum",
  "coastaldefence.museum",
  "cody.museum",
  "coldwar.museum",
  "collection.museum",
  "colonialwilliamsburg.museum",
  "coloradoplateau.museum",
  "columbia.museum",
  "columbus.museum",
  "communication.museum",
  "communications.museum",
  "community.museum",
  "computer.museum",
  "computerhistory.museum",
  "comunicações.museum",
  "contemporary.museum",
  "contemporaryart.museum",
  "convent.museum",
  "copenhagen.museum",
  "corporation.museum",
  "correios-e-telecomunicações.museum",
  "corvette.museum",
  "costume.museum",
  "countryestate.museum",
  "county.museum",
  "crafts.museum",
  "cranbrook.museum",
  "creation.museum",
  "cultural.museum",
  "culturalcenter.museum",
  "culture.museum",
  "cyber.museum",
  "cymru.museum",
  "dali.museum",
  "dallas.museum",
  "database.museum",
  "ddr.museum",
  "decorativearts.museum",
  "delaware.museum",
  "delmenhorst.museum",
  "denmark.museum",
  "depot.museum",
  "design.museum",
  "detroit.museum",
  "dinosaur.museum",
  "discovery.museum",
  "dolls.museum",
  "donostia.museum",
  "durham.museum",
  "eastafrica.museum",
  "eastcoast.museum",
  "education.museum",
  "educational.museum",
  "egyptian.museum",
  "eisenbahn.museum",
  "elburg.museum",
  "elvendrell.museum",
  "embroidery.museum",
  "encyclopedic.museum",
  "england.museum",
  "entomology.museum",
  "environment.museum",
  "environmentalconservation.museum",
  "epilepsy.museum",
  "essex.museum",
  "estate.museum",
  "ethnology.museum",
  "exeter.museum",
  "exhibition.museum",
  "family.museum",
  "farm.museum",
  "farmequipment.museum",
  "farmers.museum",
  "farmstead.museum",
  "field.museum",
  "figueres.museum",
  "filatelia.museum",
  "film.museum",
  "fineart.museum",
  "finearts.museum",
  "finland.museum",
  "flanders.museum",
  "florida.museum",
  "force.museum",
  "fortmissoula.museum",
  "fortworth.museum",
  "foundation.museum",
  "francaise.museum",
  "frankfurt.museum",
  "franziskaner.museum",
  "freemasonry.museum",
  "freiburg.museum",
  "fribourg.museum",
  "frog.museum",
  "fundacio.museum",
  "furniture.museum",
  "gallery.museum",
  "garden.museum",
  "gateway.museum",
  "geelvinck.museum",
  "gemological.museum",
  "geology.museum",
  "georgia.museum",
  "giessen.museum",
  "glas.museum",
  "glass.museum",
  "gorge.museum",
  "grandrapids.museum",
  "graz.museum",
  "guernsey.museum",
  "halloffame.museum",
  "hamburg.museum",
  "handson.museum",
  "harvestcelebration.museum",
  "hawaii.museum",
  "health.museum",
  "heimatunduhren.museum",
  "hellas.museum",
  "helsinki.museum",
  "hembygdsforbund.museum",
  "heritage.museum",
  "histoire.museum",
  "historical.museum",
  "historicalsociety.museum",
  "historichouses.museum",
  "historisch.museum",
  "historisches.museum",
  "history.museum",
  "historyofscience.museum",
  "horology.museum",
  "house.museum",
  "humanities.museum",
  "illustration.museum",
  "imageandsound.museum",
  "indian.museum",
  "indiana.museum",
  "indianapolis.museum",
  "indianmarket.museum",
  "intelligence.museum",
  "interactive.museum",
  "iraq.museum",
  "iron.museum",
  "isleofman.museum",
  "jamison.museum",
  "jefferson.museum",
  "jerusalem.museum",
  "jewelry.museum",
  "jewish.museum",
  "jewishart.museum",
  "jfk.museum",
  "journalism.museum",
  "judaica.museum",
  "judygarland.museum",
  "juedisches.museum",
  "juif.museum",
  "karate.museum",
  "karikatur.museum",
  "kids.museum",
  "koebenhavn.museum",
  "koeln.museum",
  "kunst.museum",
  "kunstsammlung.museum",
  "kunstunddesign.museum",
  "labor.museum",
  "labour.museum",
  "lajolla.museum",
  "lancashire.museum",
  "landes.museum",
  "lans.museum",
  "läns.museum",
  "larsson.museum",
  "lewismiller.museum",
  "lincoln.museum",
  "linz.museum",
  "living.museum",
  "livinghistory.museum",
  "localhistory.museum",
  "london.museum",
  "losangeles.museum",
  "louvre.museum",
  "loyalist.museum",
  "lucerne.museum",
  "luxembourg.museum",
  "luzern.museum",
  "mad.museum",
  "madrid.museum",
  "mallorca.museum",
  "manchester.museum",
  "mansion.museum",
  "mansions.museum",
  "manx.museum",
  "marburg.museum",
  "maritime.museum",
  "maritimo.museum",
  "maryland.museum",
  "marylhurst.museum",
  "media.museum",
  "medical.museum",
  "medizinhistorisches.museum",
  "meeres.museum",
  "memorial.museum",
  "mesaverde.museum",
  "michigan.museum",
  "midatlantic.museum",
  "military.museum",
  "mill.museum",
  "miners.museum",
  "mining.museum",
  "minnesota.museum",
  "missile.museum",
  "missoula.museum",
  "modern.museum",
  "moma.museum",
  "money.museum",
  "monmouth.museum",
  "monticello.museum",
  "montreal.museum",
  "moscow.museum",
  "motorcycle.museum",
  "muenchen.museum",
  "muenster.museum",
  "mulhouse.museum",
  "muncie.museum",
  "museet.museum",
  "museumcenter.museum",
  "museumvereniging.museum",
  "music.museum",
  "national.museum",
  "nationalfirearms.museum",
  "nationalheritage.museum",
  "nativeamerican.museum",
  "naturalhistory.museum",
  "naturalhistorymuseum.museum",
  "naturalsciences.museum",
  "nature.museum",
  "naturhistorisches.museum",
  "natuurwetenschappen.museum",
  "naumburg.museum",
  "naval.museum",
  "nebraska.museum",
  "neues.museum",
  "newhampshire.museum",
  "newjersey.museum",
  "newmexico.museum",
  "newport.museum",
  "newspaper.museum",
  "newyork.museum",
  "niepce.museum",
  "norfolk.museum",
  "north.museum",
  "nrw.museum",
  "nyc.museum",
  "nyny.museum",
  "oceanographic.museum",
  "oceanographique.museum",
  "omaha.museum",
  "online.museum",
  "ontario.museum",
  "openair.museum",
  "oregon.museum",
  "oregontrail.museum",
  "otago.museum",
  "oxford.museum",
  "pacific.museum",
  "paderborn.museum",
  "palace.museum",
  "paleo.museum",
  "palmsprings.museum",
  "panama.museum",
  "paris.museum",
  "pasadena.museum",
  "pharmacy.museum",
  "philadelphia.museum",
  "philadelphiaarea.museum",
  "philately.museum",
  "phoenix.museum",
  "photography.museum",
  "pilots.museum",
  "pittsburgh.museum",
  "planetarium.museum",
  "plantation.museum",
  "plants.museum",
  "plaza.museum",
  "portal.museum",
  "portland.museum",
  "portlligat.museum",
  "posts-and-telecommunications.museum",
  "preservation.museum",
  "presidio.museum",
  "press.museum",
  "project.museum",
  "public.museum",
  "pubol.museum",
  "quebec.museum",
  "railroad.museum",
  "railway.museum",
  "research.museum",
  "resistance.museum",
  "riodejaneiro.museum",
  "rochester.museum",
  "rockart.museum",
  "roma.museum",
  "russia.museum",
  "saintlouis.museum",
  "salem.museum",
  "salvadordali.museum",
  "salzburg.museum",
  "sandiego.museum",
  "sanfrancisco.museum",
  "santabarbara.museum",
  "santacruz.museum",
  "santafe.museum",
  "saskatchewan.museum",
  "satx.museum",
  "savannahga.museum",
  "schlesisches.museum",
  "schoenbrunn.museum",
  "schokoladen.museum",
  "school.museum",
  "schweiz.museum",
  "science.museum",
  "scienceandhistory.museum",
  "scienceandindustry.museum",
  "sciencecenter.museum",
  "sciencecenters.museum",
  "science-fiction.museum",
  "sciencehistory.museum",
  "sciences.museum",
  "sciencesnaturelles.museum",
  "scotland.museum",
  "seaport.museum",
  "settlement.museum",
  "settlers.museum",
  "shell.museum",
  "sherbrooke.museum",
  "sibenik.museum",
  "silk.museum",
  "ski.museum",
  "skole.museum",
  "society.museum",
  "sologne.museum",
  "soundandvision.museum",
  "southcarolina.museum",
  "southwest.museum",
  "space.museum",
  "spy.museum",
  "square.museum",
  "stadt.museum",
  "stalbans.museum",
  "starnberg.museum",
  "state.museum",
  "stateofdelaware.museum",
  "station.museum",
  "steam.museum",
  "steiermark.museum",
  "stjohn.museum",
  "stockholm.museum",
  "stpetersburg.museum",
  "stuttgart.museum",
  "suisse.museum",
  "surgeonshall.museum",
  "surrey.museum",
  "svizzera.museum",
  "sweden.museum",
  "sydney.museum",
  "tank.museum",
  "tcm.museum",
  "technology.museum",
  "telekommunikation.museum",
  "television.museum",
  "texas.museum",
  "textile.museum",
  "theater.museum",
  "time.museum",
  "timekeeping.museum",
  "topology.museum",
  "torino.museum",
  "touch.museum",
  "town.museum",
  "transport.museum",
  "tree.museum",
  "trolley.museum",
  "trust.museum",
  "trustee.museum",
  "uhren.museum",
  "ulm.museum",
  "undersea.museum",
  "university.museum",
  "usa.museum",
  "usantiques.museum",
  "usarts.museum",
  "uscountryestate.museum",
  "usculture.museum",
  "usdecorativearts.museum",
  "usgarden.museum",
  "ushistory.museum",
  "ushuaia.museum",
  "uslivinghistory.museum",
  "utah.museum",
  "uvic.museum",
  "valley.museum",
  "vantaa.museum",
  "versailles.museum",
  "viking.museum",
  "village.museum",
  "virginia.museum",
  "virtual.museum",
  "virtuel.museum",
  "vlaanderen.museum",
  "volkenkunde.museum",
  "wales.museum",
  "wallonie.museum",
  "war.museum",
  "washingtondc.museum",
  "watchandclock.museum",
  "watch-and-clock.museum",
  "western.museum",
  "westfalen.museum",
  "whaling.museum",
  "wildlife.museum",
  "williamsburg.museum",
  "windmill.museum",
  "workshop.museum",
  "york.museum",
  "yorkshire.museum",
  "yosemite.museum",
  "youth.museum",
  "zoological.museum",
  "zoology.museum",
  "ירושלים.museum",
  "иком.museum",
  "mv",
  "aero.mv",
  "biz.mv",
  "com.mv",
  "coop.mv",
  "edu.mv",
  "gov.mv",
  "info.mv",
  "int.mv",
  "mil.mv",
  "museum.mv",
  "name.mv",
  "net.mv",
  "org.mv",
  "pro.mv",
  "mw",
  "ac.mw",
  "biz.mw",
  "co.mw",
  "com.mw",
  "coop.mw",
  "edu.mw",
  "gov.mw",
  "int.mw",
  "museum.mw",
  "net.mw",
  "org.mw",
  "mx",
  "com.mx",
  "org.mx",
  "gob.mx",
  "edu.mx",
  "net.mx",
  "my",
  "biz.my",
  "com.my",
  "edu.my",
  "gov.my",
  "mil.my",
  "name.my",
  "net.my",
  "org.my",
  "mz",
  "ac.mz",
  "adv.mz",
  "co.mz",
  "edu.mz",
  "gov.mz",
  "mil.mz",
  "net.mz",
  "org.mz",
  "na",
  "info.na",
  "pro.na",
  "name.na",
  "school.na",
  "or.na",
  "dr.na",
  "us.na",
  "mx.na",
  "ca.na",
  "in.na",
  "cc.na",
  "tv.na",
  "ws.na",
  "mobi.na",
  "co.na",
  "com.na",
  "org.na",
  "name",
  "nc",
  "asso.nc",
  "nom.nc",
  "ne",
  "net",
  "nf",
  "com.nf",
  "net.nf",
  "per.nf",
  "rec.nf",
  "web.nf",
  "arts.nf",
  "firm.nf",
  "info.nf",
  "other.nf",
  "store.nf",
  "ng",
  "com.ng",
  "edu.ng",
  "gov.ng",
  "i.ng",
  "mil.ng",
  "mobi.ng",
  "name.ng",
  "net.ng",
  "org.ng",
  "sch.ng",
  "ni",
  "ac.ni",
  "biz.ni",
  "co.ni",
  "com.ni",
  "edu.ni",
  "gob.ni",
  "in.ni",
  "info.ni",
  "int.ni",
  "mil.ni",
  "net.ni",
  "nom.ni",
  "org.ni",
  "web.ni",
  "nl",
  "no",
  "fhs.no",
  "vgs.no",
  "fylkesbibl.no",
  "folkebibl.no",
  "museum.no",
  "idrett.no",
  "priv.no",
  "mil.no",
  "stat.no",
  "dep.no",
  "kommune.no",
  "herad.no",
  "aa.no",
  "ah.no",
  "bu.no",
  "fm.no",
  "hl.no",
  "hm.no",
  "jan-mayen.no",
  "mr.no",
  "nl.no",
  "nt.no",
  "of.no",
  "ol.no",
  "oslo.no",
  "rl.no",
  "sf.no",
  "st.no",
  "svalbard.no",
  "tm.no",
  "tr.no",
  "va.no",
  "vf.no",
  "gs.aa.no",
  "gs.ah.no",
  "gs.bu.no",
  "gs.fm.no",
  "gs.hl.no",
  "gs.hm.no",
  "gs.jan-mayen.no",
  "gs.mr.no",
  "gs.nl.no",
  "gs.nt.no",
  "gs.of.no",
  "gs.ol.no",
  "gs.oslo.no",
  "gs.rl.no",
  "gs.sf.no",
  "gs.st.no",
  "gs.svalbard.no",
  "gs.tm.no",
  "gs.tr.no",
  "gs.va.no",
  "gs.vf.no",
  "akrehamn.no",
  "åkrehamn.no",
  "algard.no",
  "ålgård.no",
  "arna.no",
  "brumunddal.no",
  "bryne.no",
  "bronnoysund.no",
  "brønnøysund.no",
  "drobak.no",
  "drøbak.no",
  "egersund.no",
  "fetsund.no",
  "floro.no",
  "florø.no",
  "fredrikstad.no",
  "hokksund.no",
  "honefoss.no",
  "hønefoss.no",
  "jessheim.no",
  "jorpeland.no",
  "jørpeland.no",
  "kirkenes.no",
  "kopervik.no",
  "krokstadelva.no",
  "langevag.no",
  "langevåg.no",
  "leirvik.no",
  "mjondalen.no",
  "mjøndalen.no",
  "mo-i-rana.no",
  "mosjoen.no",
  "mosjøen.no",
  "nesoddtangen.no",
  "orkanger.no",
  "osoyro.no",
  "osøyro.no",
  "raholt.no",
  "råholt.no",
  "sandnessjoen.no",
  "sandnessjøen.no",
  "skedsmokorset.no",
  "slattum.no",
  "spjelkavik.no",
  "stathelle.no",
  "stavern.no",
  "stjordalshalsen.no",
  "stjørdalshalsen.no",
  "tananger.no",
  "tranby.no",
  "vossevangen.no",
  "afjord.no",
  "åfjord.no",
  "agdenes.no",
  "al.no",
  "ål.no",
  "alesund.no",
  "ålesund.no",
  "alstahaug.no",
  "alta.no",
  "áltá.no",
  "alaheadju.no",
  "álaheadju.no",
  "alvdal.no",
  "amli.no",
  "åmli.no",
  "amot.no",
  "åmot.no",
  "andebu.no",
  "andoy.no",
  "andøy.no",
  "andasuolo.no",
  "ardal.no",
  "årdal.no",
  "aremark.no",
  "arendal.no",
  "ås.no",
  "aseral.no",
  "åseral.no",
  "asker.no",
  "askim.no",
  "askvoll.no",
  "askoy.no",
  "askøy.no",
  "asnes.no",
  "åsnes.no",
  "audnedaln.no",
  "aukra.no",
  "aure.no",
  "aurland.no",
  "aurskog-holand.no",
  "aurskog-høland.no",
  "austevoll.no",
  "austrheim.no",
  "averoy.no",
  "averøy.no",
  "balestrand.no",
  "ballangen.no",
  "balat.no",
  "bálát.no",
  "balsfjord.no",
  "bahccavuotna.no",
  "báhccavuotna.no",
  "bamble.no",
  "bardu.no",
  "beardu.no",
  "beiarn.no",
  "bajddar.no",
  "bájddar.no",
  "baidar.no",
  "báidár.no",
  "berg.no",
  "bergen.no",
  "berlevag.no",
  "berlevåg.no",
  "bearalvahki.no",
  "bearalváhki.no",
  "bindal.no",
  "birkenes.no",
  "bjarkoy.no",
  "bjarkøy.no",
  "bjerkreim.no",
  "bjugn.no",
  "bodo.no",
  "bodø.no",
  "badaddja.no",
  "bådåddjå.no",
  "budejju.no",
  "bokn.no",
  "bremanger.no",
  "bronnoy.no",
  "brønnøy.no",
  "bygland.no",
  "bykle.no",
  "barum.no",
  "bærum.no",
  "bo.telemark.no",
  "bø.telemark.no",
  "bo.nordland.no",
  "bø.nordland.no",
  "bievat.no",
  "bievát.no",
  "bomlo.no",
  "bømlo.no",
  "batsfjord.no",
  "båtsfjord.no",
  "bahcavuotna.no",
  "báhcavuotna.no",
  "dovre.no",
  "drammen.no",
  "drangedal.no",
  "dyroy.no",
  "dyrøy.no",
  "donna.no",
  "dønna.no",
  "eid.no",
  "eidfjord.no",
  "eidsberg.no",
  "eidskog.no",
  "eidsvoll.no",
  "eigersund.no",
  "elverum.no",
  "enebakk.no",
  "engerdal.no",
  "etne.no",
  "etnedal.no",
  "evenes.no",
  "evenassi.no",
  "evenášši.no",
  "evje-og-hornnes.no",
  "farsund.no",
  "fauske.no",
  "fuossko.no",
  "fuoisku.no",
  "fedje.no",
  "fet.no",
  "finnoy.no",
  "finnøy.no",
  "fitjar.no",
  "fjaler.no",
  "fjell.no",
  "flakstad.no",
  "flatanger.no",
  "flekkefjord.no",
  "flesberg.no",
  "flora.no",
  "fla.no",
  "flå.no",
  "folldal.no",
  "forsand.no",
  "fosnes.no",
  "frei.no",
  "frogn.no",
  "froland.no",
  "frosta.no",
  "frana.no",
  "fræna.no",
  "froya.no",
  "frøya.no",
  "fusa.no",
  "fyresdal.no",
  "forde.no",
  "førde.no",
  "gamvik.no",
  "gangaviika.no",
  "gáŋgaviika.no",
  "gaular.no",
  "gausdal.no",
  "gildeskal.no",
  "gildeskål.no",
  "giske.no",
  "gjemnes.no",
  "gjerdrum.no",
  "gjerstad.no",
  "gjesdal.no",
  "gjovik.no",
  "gjøvik.no",
  "gloppen.no",
  "gol.no",
  "gran.no",
  "grane.no",
  "granvin.no",
  "gratangen.no",
  "grimstad.no",
  "grong.no",
  "kraanghke.no",
  "kråanghke.no",
  "grue.no",
  "gulen.no",
  "hadsel.no",
  "halden.no",
  "halsa.no",
  "hamar.no",
  "hamaroy.no",
  "habmer.no",
  "hábmer.no",
  "hapmir.no",
  "hápmir.no",
  "hammerfest.no",
  "hammarfeasta.no",
  "hámmárfeasta.no",
  "haram.no",
  "hareid.no",
  "harstad.no",
  "hasvik.no",
  "aknoluokta.no",
  "ákŋoluokta.no",
  "hattfjelldal.no",
  "aarborte.no",
  "haugesund.no",
  "hemne.no",
  "hemnes.no",
  "hemsedal.no",
  "heroy.more-og-romsdal.no",
  "herøy.møre-og-romsdal.no",
  "heroy.nordland.no",
  "herøy.nordland.no",
  "hitra.no",
  "hjartdal.no",
  "hjelmeland.no",
  "hobol.no",
  "hobøl.no",
  "hof.no",
  "hol.no",
  "hole.no",
  "holmestrand.no",
  "holtalen.no",
  "holtålen.no",
  "hornindal.no",
  "horten.no",
  "hurdal.no",
  "hurum.no",
  "hvaler.no",
  "hyllestad.no",
  "hagebostad.no",
  "hægebostad.no",
  "hoyanger.no",
  "høyanger.no",
  "hoylandet.no",
  "høylandet.no",
  "ha.no",
  "hå.no",
  "ibestad.no",
  "inderoy.no",
  "inderøy.no",
  "iveland.no",
  "jevnaker.no",
  "jondal.no",
  "jolster.no",
  "jølster.no",
  "karasjok.no",
  "karasjohka.no",
  "kárášjohka.no",
  "karlsoy.no",
  "galsa.no",
  "gálsá.no",
  "karmoy.no",
  "karmøy.no",
  "kautokeino.no",
  "guovdageaidnu.no",
  "klepp.no",
  "klabu.no",
  "klæbu.no",
  "kongsberg.no",
  "kongsvinger.no",
  "kragero.no",
  "kragerø.no",
  "kristiansand.no",
  "kristiansund.no",
  "krodsherad.no",
  "krødsherad.no",
  "kvalsund.no",
  "rahkkeravju.no",
  "ráhkkerávju.no",
  "kvam.no",
  "kvinesdal.no",
  "kvinnherad.no",
  "kviteseid.no",
  "kvitsoy.no",
  "kvitsøy.no",
  "kvafjord.no",
  "kvæfjord.no",
  "giehtavuoatna.no",
  "kvanangen.no",
  "kvænangen.no",
  "navuotna.no",
  "návuotna.no",
  "kafjord.no",
  "kåfjord.no",
  "gaivuotna.no",
  "gáivuotna.no",
  "larvik.no",
  "lavangen.no",
  "lavagis.no",
  "loabat.no",
  "loabát.no",
  "lebesby.no",
  "davvesiida.no",
  "leikanger.no",
  "leirfjord.no",
  "leka.no",
  "leksvik.no",
  "lenvik.no",
  "leangaviika.no",
  "leaŋgaviika.no",
  "lesja.no",
  "levanger.no",
  "lier.no",
  "lierne.no",
  "lillehammer.no",
  "lillesand.no",
  "lindesnes.no",
  "lindas.no",
  "lindås.no",
  "lom.no",
  "loppa.no",
  "lahppi.no",
  "láhppi.no",
  "lund.no",
  "lunner.no",
  "luroy.no",
  "lurøy.no",
  "luster.no",
  "lyngdal.no",
  "lyngen.no",
  "ivgu.no",
  "lardal.no",
  "lerdal.no",
  "lærdal.no",
  "lodingen.no",
  "lødingen.no",
  "lorenskog.no",
  "lørenskog.no",
  "loten.no",
  "løten.no",
  "malvik.no",
  "masoy.no",
  "måsøy.no",
  "muosat.no",
  "muosát.no",
  "mandal.no",
  "marker.no",
  "marnardal.no",
  "masfjorden.no",
  "meland.no",
  "meldal.no",
  "melhus.no",
  "meloy.no",
  "meløy.no",
  "meraker.no",
  "meråker.no",
  "moareke.no",
  "moåreke.no",
  "midsund.no",
  "midtre-gauldal.no",
  "modalen.no",
  "modum.no",
  "molde.no",
  "moskenes.no",
  "moss.no",
  "mosvik.no",
  "malselv.no",
  "målselv.no",
  "malatvuopmi.no",
  "málatvuopmi.no",
  "namdalseid.no",
  "aejrie.no",
  "namsos.no",
  "namsskogan.no",
  "naamesjevuemie.no",
  "nååmesjevuemie.no",
  "laakesvuemie.no",
  "nannestad.no",
  "narvik.no",
  "narviika.no",
  "naustdal.no",
  "nedre-eiker.no",
  "nes.akershus.no",
  "nes.buskerud.no",
  "nesna.no",
  "nesodden.no",
  "nesseby.no",
  "unjarga.no",
  "unjárga.no",
  "nesset.no",
  "nissedal.no",
  "nittedal.no",
  "nord-aurdal.no",
  "nord-fron.no",
  "nord-odal.no",
  "norddal.no",
  "nordkapp.no",
  "davvenjarga.no",
  "davvenjárga.no",
  "nordre-land.no",
  "nordreisa.no",
  "raisa.no",
  "ráisa.no",
  "nore-og-uvdal.no",
  "notodden.no",
  "naroy.no",
  "nærøy.no",
  "notteroy.no",
  "nøtterøy.no",
  "odda.no",
  "oksnes.no",
  "øksnes.no",
  "oppdal.no",
  "oppegard.no",
  "oppegård.no",
  "orkdal.no",
  "orland.no",
  "ørland.no",
  "orskog.no",
  "ørskog.no",
  "orsta.no",
  "ørsta.no",
  "os.hedmark.no",
  "os.hordaland.no",
  "osen.no",
  "osteroy.no",
  "osterøy.no",
  "ostre-toten.no",
  "østre-toten.no",
  "overhalla.no",
  "ovre-eiker.no",
  "øvre-eiker.no",
  "oyer.no",
  "øyer.no",
  "oygarden.no",
  "øygarden.no",
  "oystre-slidre.no",
  "øystre-slidre.no",
  "porsanger.no",
  "porsangu.no",
  "porsáŋgu.no",
  "porsgrunn.no",
  "radoy.no",
  "radøy.no",
  "rakkestad.no",
  "rana.no",
  "ruovat.no",
  "randaberg.no",
  "rauma.no",
  "rendalen.no",
  "rennebu.no",
  "rennesoy.no",
  "rennesøy.no",
  "rindal.no",
  "ringebu.no",
  "ringerike.no",
  "ringsaker.no",
  "rissa.no",
  "risor.no",
  "risør.no",
  "roan.no",
  "rollag.no",
  "rygge.no",
  "ralingen.no",
  "rælingen.no",
  "rodoy.no",
  "rødøy.no",
  "romskog.no",
  "rømskog.no",
  "roros.no",
  "røros.no",
  "rost.no",
  "røst.no",
  "royken.no",
  "røyken.no",
  "royrvik.no",
  "røyrvik.no",
  "rade.no",
  "råde.no",
  "salangen.no",
  "siellak.no",
  "saltdal.no",
  "salat.no",
  "sálát.no",
  "sálat.no",
  "samnanger.no",
  "sande.more-og-romsdal.no",
  "sande.møre-og-romsdal.no",
  "sande.vestfold.no",
  "sandefjord.no",
  "sandnes.no",
  "sandoy.no",
  "sandøy.no",
  "sarpsborg.no",
  "sauda.no",
  "sauherad.no",
  "sel.no",
  "selbu.no",
  "selje.no",
  "seljord.no",
  "sigdal.no",
  "siljan.no",
  "sirdal.no",
  "skaun.no",
  "skedsmo.no",
  "ski.no",
  "skien.no",
  "skiptvet.no",
  "skjervoy.no",
  "skjervøy.no",
  "skierva.no",
  "skiervá.no",
  "skjak.no",
  "skjåk.no",
  "skodje.no",
  "skanland.no",
  "skånland.no",
  "skanit.no",
  "skánit.no",
  "smola.no",
  "smøla.no",
  "snillfjord.no",
  "snasa.no",
  "snåsa.no",
  "snoasa.no",
  "snaase.no",
  "snåase.no",
  "sogndal.no",
  "sokndal.no",
  "sola.no",
  "solund.no",
  "songdalen.no",
  "sortland.no",
  "spydeberg.no",
  "stange.no",
  "stavanger.no",
  "steigen.no",
  "steinkjer.no",
  "stjordal.no",
  "stjørdal.no",
  "stokke.no",
  "stor-elvdal.no",
  "stord.no",
  "stordal.no",
  "storfjord.no",
  "omasvuotna.no",
  "strand.no",
  "stranda.no",
  "stryn.no",
  "sula.no",
  "suldal.no",
  "sund.no",
  "sunndal.no",
  "surnadal.no",
  "sveio.no",
  "svelvik.no",
  "sykkylven.no",
  "sogne.no",
  "søgne.no",
  "somna.no",
  "sømna.no",
  "sondre-land.no",
  "søndre-land.no",
  "sor-aurdal.no",
  "sør-aurdal.no",
  "sor-fron.no",
  "sør-fron.no",
  "sor-odal.no",
  "sør-odal.no",
  "sor-varanger.no",
  "sør-varanger.no",
  "matta-varjjat.no",
  "mátta-várjjat.no",
  "sorfold.no",
  "sørfold.no",
  "sorreisa.no",
  "sørreisa.no",
  "sorum.no",
  "sørum.no",
  "tana.no",
  "deatnu.no",
  "time.no",
  "tingvoll.no",
  "tinn.no",
  "tjeldsund.no",
  "dielddanuorri.no",
  "tjome.no",
  "tjøme.no",
  "tokke.no",
  "tolga.no",
  "torsken.no",
  "tranoy.no",
  "tranøy.no",
  "tromso.no",
  "tromsø.no",
  "tromsa.no",
  "romsa.no",
  "trondheim.no",
  "troandin.no",
  "trysil.no",
  "trana.no",
  "træna.no",
  "trogstad.no",
  "trøgstad.no",
  "tvedestrand.no",
  "tydal.no",
  "tynset.no",
  "tysfjord.no",
  "divtasvuodna.no",
  "divttasvuotna.no",
  "tysnes.no",
  "tysvar.no",
  "tysvær.no",
  "tonsberg.no",
  "tønsberg.no",
  "ullensaker.no",
  "ullensvang.no",
  "ulvik.no",
  "utsira.no",
  "vadso.no",
  "vadsø.no",
  "cahcesuolo.no",
  "čáhcesuolo.no",
  "vaksdal.no",
  "valle.no",
  "vang.no",
  "vanylven.no",
  "vardo.no",
  "vardø.no",
  "varggat.no",
  "várggát.no",
  "vefsn.no",
  "vaapste.no",
  "vega.no",
  "vegarshei.no",
  "vegårshei.no",
  "vennesla.no",
  "verdal.no",
  "verran.no",
  "vestby.no",
  "vestnes.no",
  "vestre-slidre.no",
  "vestre-toten.no",
  "vestvagoy.no",
  "vestvågøy.no",
  "vevelstad.no",
  "vik.no",
  "vikna.no",
  "vindafjord.no",
  "volda.no",
  "voss.no",
  "varoy.no",
  "værøy.no",
  "vagan.no",
  "vågan.no",
  "voagat.no",
  "vagsoy.no",
  "vågsøy.no",
  "vaga.no",
  "vågå.no",
  "valer.ostfold.no",
  "våler.østfold.no",
  "valer.hedmark.no",
  "våler.hedmark.no",
  "*.np",
  "nr",
  "biz.nr",
  "info.nr",
  "gov.nr",
  "edu.nr",
  "org.nr",
  "net.nr",
  "com.nr",
  "nu",
  "nz",
  "ac.nz",
  "co.nz",
  "cri.nz",
  "geek.nz",
  "gen.nz",
  "govt.nz",
  "health.nz",
  "iwi.nz",
  "kiwi.nz",
  "maori.nz",
  "mil.nz",
  "māori.nz",
  "net.nz",
  "org.nz",
  "parliament.nz",
  "school.nz",
  "om",
  "co.om",
  "com.om",
  "edu.om",
  "gov.om",
  "med.om",
  "museum.om",
  "net.om",
  "org.om",
  "pro.om",
  "onion",
  "org",
  "pa",
  "ac.pa",
  "gob.pa",
  "com.pa",
  "org.pa",
  "sld.pa",
  "edu.pa",
  "net.pa",
  "ing.pa",
  "abo.pa",
  "med.pa",
  "nom.pa",
  "pe",
  "edu.pe",
  "gob.pe",
  "nom.pe",
  "mil.pe",
  "org.pe",
  "com.pe",
  "net.pe",
  "pf",
  "com.pf",
  "org.pf",
  "edu.pf",
  "*.pg",
  "ph",
  "com.ph",
  "net.ph",
  "org.ph",
  "gov.ph",
  "edu.ph",
  "ngo.ph",
  "mil.ph",
  "i.ph",
  "pk",
  "com.pk",
  "net.pk",
  "edu.pk",
  "org.pk",
  "fam.pk",
  "biz.pk",
  "web.pk",
  "gov.pk",
  "gob.pk",
  "gok.pk",
  "gon.pk",
  "gop.pk",
  "gos.pk",
  "info.pk",
  "pl",
  "com.pl",
  "net.pl",
  "org.pl",
  "aid.pl",
  "agro.pl",
  "atm.pl",
  "auto.pl",
  "biz.pl",
  "edu.pl",
  "gmina.pl",
  "gsm.pl",
  "info.pl",
  "mail.pl",
  "miasta.pl",
  "media.pl",
  "mil.pl",
  "nieruchomosci.pl",
  "nom.pl",
  "pc.pl",
  "powiat.pl",
  "priv.pl",
  "realestate.pl",
  "rel.pl",
  "sex.pl",
  "shop.pl",
  "sklep.pl",
  "sos.pl",
  "szkola.pl",
  "targi.pl",
  "tm.pl",
  "tourism.pl",
  "travel.pl",
  "turystyka.pl",
  "gov.pl",
  "ap.gov.pl",
  "ic.gov.pl",
  "is.gov.pl",
  "us.gov.pl",
  "kmpsp.gov.pl",
  "kppsp.gov.pl",
  "kwpsp.gov.pl",
  "psp.gov.pl",
  "wskr.gov.pl",
  "kwp.gov.pl",
  "mw.gov.pl",
  "ug.gov.pl",
  "um.gov.pl",
  "umig.gov.pl",
  "ugim.gov.pl",
  "upow.gov.pl",
  "uw.gov.pl",
  "starostwo.gov.pl",
  "pa.gov.pl",
  "po.gov.pl",
  "psse.gov.pl",
  "pup.gov.pl",
  "rzgw.gov.pl",
  "sa.gov.pl",
  "so.gov.pl",
  "sr.gov.pl",
  "wsa.gov.pl",
  "sko.gov.pl",
  "uzs.gov.pl",
  "wiih.gov.pl",
  "winb.gov.pl",
  "pinb.gov.pl",
  "wios.gov.pl",
  "witd.gov.pl",
  "wzmiuw.gov.pl",
  "piw.gov.pl",
  "wiw.gov.pl",
  "griw.gov.pl",
  "wif.gov.pl",
  "oum.gov.pl",
  "sdn.gov.pl",
  "zp.gov.pl",
  "uppo.gov.pl",
  "mup.gov.pl",
  "wuoz.gov.pl",
  "konsulat.gov.pl",
  "oirm.gov.pl",
  "augustow.pl",
  "babia-gora.pl",
  "bedzin.pl",
  "beskidy.pl",
  "bialowieza.pl",
  "bialystok.pl",
  "bielawa.pl",
  "bieszczady.pl",
  "boleslawiec.pl",
  "bydgoszcz.pl",
  "bytom.pl",
  "cieszyn.pl",
  "czeladz.pl",
  "czest.pl",
  "dlugoleka.pl",
  "elblag.pl",
  "elk.pl",
  "glogow.pl",
  "gniezno.pl",
  "gorlice.pl",
  "grajewo.pl",
  "ilawa.pl",
  "jaworzno.pl",
  "jelenia-gora.pl",
  "jgora.pl",
  "kalisz.pl",
  "kazimierz-dolny.pl",
  "karpacz.pl",
  "kartuzy.pl",
  "kaszuby.pl",
  "katowice.pl",
  "kepno.pl",
  "ketrzyn.pl",
  "klodzko.pl",
  "kobierzyce.pl",
  "kolobrzeg.pl",
  "konin.pl",
  "konskowola.pl",
  "kutno.pl",
  "lapy.pl",
  "lebork.pl",
  "legnica.pl",
  "lezajsk.pl",
  "limanowa.pl",
  "lomza.pl",
  "lowicz.pl",
  "lubin.pl",
  "lukow.pl",
  "malbork.pl",
  "malopolska.pl",
  "mazowsze.pl",
  "mazury.pl",
  "mielec.pl",
  "mielno.pl",
  "mragowo.pl",
  "naklo.pl",
  "nowaruda.pl",
  "nysa.pl",
  "olawa.pl",
  "olecko.pl",
  "olkusz.pl",
  "olsztyn.pl",
  "opoczno.pl",
  "opole.pl",
  "ostroda.pl",
  "ostroleka.pl",
  "ostrowiec.pl",
  "ostrowwlkp.pl",
  "pila.pl",
  "pisz.pl",
  "podhale.pl",
  "podlasie.pl",
  "polkowice.pl",
  "pomorze.pl",
  "pomorskie.pl",
  "prochowice.pl",
  "pruszkow.pl",
  "przeworsk.pl",
  "pulawy.pl",
  "radom.pl",
  "rawa-maz.pl",
  "rybnik.pl",
  "rzeszow.pl",
  "sanok.pl",
  "sejny.pl",
  "slask.pl",
  "slupsk.pl",
  "sosnowiec.pl",
  "stalowa-wola.pl",
  "skoczow.pl",
  "starachowice.pl",
  "stargard.pl",
  "suwalki.pl",
  "swidnica.pl",
  "swiebodzin.pl",
  "swinoujscie.pl",
  "szczecin.pl",
  "szczytno.pl",
  "tarnobrzeg.pl",
  "tgory.pl",
  "turek.pl",
  "tychy.pl",
  "ustka.pl",
  "walbrzych.pl",
  "warmia.pl",
  "warszawa.pl",
  "waw.pl",
  "wegrow.pl",
  "wielun.pl",
  "wlocl.pl",
  "wloclawek.pl",
  "wodzislaw.pl",
  "wolomin.pl",
  "wroclaw.pl",
  "zachpomor.pl",
  "zagan.pl",
  "zarow.pl",
  "zgora.pl",
  "zgorzelec.pl",
  "pm",
  "pn",
  "gov.pn",
  "co.pn",
  "org.pn",
  "edu.pn",
  "net.pn",
  "post",
  "pr",
  "com.pr",
  "net.pr",
  "org.pr",
  "gov.pr",
  "edu.pr",
  "isla.pr",
  "pro.pr",
  "biz.pr",
  "info.pr",
  "name.pr",
  "est.pr",
  "prof.pr",
  "ac.pr",
  "pro",
  "aaa.pro",
  "aca.pro",
  "acct.pro",
  "avocat.pro",
  "bar.pro",
  "cpa.pro",
  "eng.pro",
  "jur.pro",
  "law.pro",
  "med.pro",
  "recht.pro",
  "ps",
  "edu.ps",
  "gov.ps",
  "sec.ps",
  "plo.ps",
  "com.ps",
  "org.ps",
  "net.ps",
  "pt",
  "net.pt",
  "gov.pt",
  "org.pt",
  "edu.pt",
  "int.pt",
  "publ.pt",
  "com.pt",
  "nome.pt",
  "pw",
  "co.pw",
  "ne.pw",
  "or.pw",
  "ed.pw",
  "go.pw",
  "belau.pw",
  "py",
  "com.py",
  "coop.py",
  "edu.py",
  "gov.py",
  "mil.py",
  "net.py",
  "org.py",
  "qa",
  "com.qa",
  "edu.qa",
  "gov.qa",
  "mil.qa",
  "name.qa",
  "net.qa",
  "org.qa",
  "sch.qa",
  "re",
  "asso.re",
  "com.re",
  "nom.re",
  "ro",
  "arts.ro",
  "com.ro",
  "firm.ro",
  "info.ro",
  "nom.ro",
  "nt.ro",
  "org.ro",
  "rec.ro",
  "store.ro",
  "tm.ro",
  "www.ro",
  "rs",
  "ac.rs",
  "co.rs",
  "edu.rs",
  "gov.rs",
  "in.rs",
  "org.rs",
  "ru",
  "rw",
  "ac.rw",
  "co.rw",
  "coop.rw",
  "gov.rw",
  "mil.rw",
  "net.rw",
  "org.rw",
  "sa",
  "com.sa",
  "net.sa",
  "org.sa",
  "gov.sa",
  "med.sa",
  "pub.sa",
  "edu.sa",
  "sch.sa",
  "sb",
  "com.sb",
  "edu.sb",
  "gov.sb",
  "net.sb",
  "org.sb",
  "sc",
  "com.sc",
  "gov.sc",
  "net.sc",
  "org.sc",
  "edu.sc",
  "sd",
  "com.sd",
  "net.sd",
  "org.sd",
  "edu.sd",
  "med.sd",
  "tv.sd",
  "gov.sd",
  "info.sd",
  "se",
  "a.se",
  "ac.se",
  "b.se",
  "bd.se",
  "brand.se",
  "c.se",
  "d.se",
  "e.se",
  "f.se",
  "fh.se",
  "fhsk.se",
  "fhv.se",
  "g.se",
  "h.se",
  "i.se",
  "k.se",
  "komforb.se",
  "kommunalforbund.se",
  "komvux.se",
  "l.se",
  "lanbib.se",
  "m.se",
  "n.se",
  "naturbruksgymn.se",
  "o.se",
  "org.se",
  "p.se",
  "parti.se",
  "pp.se",
  "press.se",
  "r.se",
  "s.se",
  "t.se",
  "tm.se",
  "u.se",
  "w.se",
  "x.se",
  "y.se",
  "z.se",
  "sg",
  "com.sg",
  "net.sg",
  "org.sg",
  "gov.sg",
  "edu.sg",
  "per.sg",
  "sh",
  "com.sh",
  "net.sh",
  "gov.sh",
  "org.sh",
  "mil.sh",
  "si",
  "sj",
  "sk",
  "sl",
  "com.sl",
  "net.sl",
  "edu.sl",
  "gov.sl",
  "org.sl",
  "sm",
  "sn",
  "art.sn",
  "com.sn",
  "edu.sn",
  "gouv.sn",
  "org.sn",
  "perso.sn",
  "univ.sn",
  "so",
  "com.so",
  "edu.so",
  "gov.so",
  "me.so",
  "net.so",
  "org.so",
  "sr",
  "ss",
  "biz.ss",
  "com.ss",
  "edu.ss",
  "gov.ss",
  "me.ss",
  "net.ss",
  "org.ss",
  "sch.ss",
  "st",
  "co.st",
  "com.st",
  "consulado.st",
  "edu.st",
  "embaixada.st",
  "mil.st",
  "net.st",
  "org.st",
  "principe.st",
  "saotome.st",
  "store.st",
  "su",
  "sv",
  "com.sv",
  "edu.sv",
  "gob.sv",
  "org.sv",
  "red.sv",
  "sx",
  "gov.sx",
  "sy",
  "edu.sy",
  "gov.sy",
  "net.sy",
  "mil.sy",
  "com.sy",
  "org.sy",
  "sz",
  "co.sz",
  "ac.sz",
  "org.sz",
  "tc",
  "td",
  "tel",
  "tf",
  "tg",
  "th",
  "ac.th",
  "co.th",
  "go.th",
  "in.th",
  "mi.th",
  "net.th",
  "or.th",
  "tj",
  "ac.tj",
  "biz.tj",
  "co.tj",
  "com.tj",
  "edu.tj",
  "go.tj",
  "gov.tj",
  "int.tj",
  "mil.tj",
  "name.tj",
  "net.tj",
  "nic.tj",
  "org.tj",
  "test.tj",
  "web.tj",
  "tk",
  "tl",
  "gov.tl",
  "tm",
  "com.tm",
  "co.tm",
  "org.tm",
  "net.tm",
  "nom.tm",
  "gov.tm",
  "mil.tm",
  "edu.tm",
  "tn",
  "com.tn",
  "ens.tn",
  "fin.tn",
  "gov.tn",
  "ind.tn",
  "info.tn",
  "intl.tn",
  "mincom.tn",
  "nat.tn",
  "net.tn",
  "org.tn",
  "perso.tn",
  "tourism.tn",
  "to",
  "com.to",
  "gov.to",
  "net.to",
  "org.to",
  "edu.to",
  "mil.to",
  "tr",
  "av.tr",
  "bbs.tr",
  "bel.tr",
  "biz.tr",
  "com.tr",
  "dr.tr",
  "edu.tr",
  "gen.tr",
  "gov.tr",
  "info.tr",
  "mil.tr",
  "k12.tr",
  "kep.tr",
  "name.tr",
  "net.tr",
  "org.tr",
  "pol.tr",
  "tel.tr",
  "tsk.tr",
  "tv.tr",
  "web.tr",
  "nc.tr",
  "gov.nc.tr",
  "tt",
  "co.tt",
  "com.tt",
  "org.tt",
  "net.tt",
  "biz.tt",
  "info.tt",
  "pro.tt",
  "int.tt",
  "coop.tt",
  "jobs.tt",
  "mobi.tt",
  "travel.tt",
  "museum.tt",
  "aero.tt",
  "name.tt",
  "gov.tt",
  "edu.tt",
  "tv",
  "tw",
  "edu.tw",
  "gov.tw",
  "mil.tw",
  "com.tw",
  "net.tw",
  "org.tw",
  "idv.tw",
  "game.tw",
  "ebiz.tw",
  "club.tw",
  "網路.tw",
  "組織.tw",
  "商業.tw",
  "tz",
  "ac.tz",
  "co.tz",
  "go.tz",
  "hotel.tz",
  "info.tz",
  "me.tz",
  "mil.tz",
  "mobi.tz",
  "ne.tz",
  "or.tz",
  "sc.tz",
  "tv.tz",
  "ua",
  "com.ua",
  "edu.ua",
  "gov.ua",
  "in.ua",
  "net.ua",
  "org.ua",
  "cherkassy.ua",
  "cherkasy.ua",
  "chernigov.ua",
  "chernihiv.ua",
  "chernivtsi.ua",
  "chernovtsy.ua",
  "ck.ua",
  "cn.ua",
  "cr.ua",
  "crimea.ua",
  "cv.ua",
  "dn.ua",
  "dnepropetrovsk.ua",
  "dnipropetrovsk.ua",
  "donetsk.ua",
  "dp.ua",
  "if.ua",
  "ivano-frankivsk.ua",
  "kh.ua",
  "kharkiv.ua",
  "kharkov.ua",
  "kherson.ua",
  "khmelnitskiy.ua",
  "khmelnytskyi.ua",
  "kiev.ua",
  "kirovograd.ua",
  "km.ua",
  "kr.ua",
  "krym.ua",
  "ks.ua",
  "kv.ua",
  "kyiv.ua",
  "lg.ua",
  "lt.ua",
  "lugansk.ua",
  "lutsk.ua",
  "lv.ua",
  "lviv.ua",
  "mk.ua",
  "mykolaiv.ua",
  "nikolaev.ua",
  "od.ua",
  "odesa.ua",
  "odessa.ua",
  "pl.ua",
  "poltava.ua",
  "rivne.ua",
  "rovno.ua",
  "rv.ua",
  "sb.ua",
  "sebastopol.ua",
  "sevastopol.ua",
  "sm.ua",
  "sumy.ua",
  "te.ua",
  "ternopil.ua",
  "uz.ua",
  "uzhgorod.ua",
  "vinnica.ua",
  "vinnytsia.ua",
  "vn.ua",
  "volyn.ua",
  "yalta.ua",
  "zaporizhzhe.ua",
  "zaporizhzhia.ua",
  "zhitomir.ua",
  "zhytomyr.ua",
  "zp.ua",
  "zt.ua",
  "ug",
  "co.ug",
  "or.ug",
  "ac.ug",
  "sc.ug",
  "go.ug",
  "ne.ug",
  "com.ug",
  "org.ug",
  "uk",
  "ac.uk",
  "co.uk",
  "gov.uk",
  "ltd.uk",
  "me.uk",
  "net.uk",
  "nhs.uk",
  "org.uk",
  "plc.uk",
  "police.uk",
  "*.sch.uk",
  "us",
  "dni.us",
  "fed.us",
  "isa.us",
  "kids.us",
  "nsn.us",
  "ak.us",
  "al.us",
  "ar.us",
  "as.us",
  "az.us",
  "ca.us",
  "co.us",
  "ct.us",
  "dc.us",
  "de.us",
  "fl.us",
  "ga.us",
  "gu.us",
  "hi.us",
  "ia.us",
  "id.us",
  "il.us",
  "in.us",
  "ks.us",
  "ky.us",
  "la.us",
  "ma.us",
  "md.us",
  "me.us",
  "mi.us",
  "mn.us",
  "mo.us",
  "ms.us",
  "mt.us",
  "nc.us",
  "nd.us",
  "ne.us",
  "nh.us",
  "nj.us",
  "nm.us",
  "nv.us",
  "ny.us",
  "oh.us",
  "ok.us",
  "or.us",
  "pa.us",
  "pr.us",
  "ri.us",
  "sc.us",
  "sd.us",
  "tn.us",
  "tx.us",
  "ut.us",
  "vi.us",
  "vt.us",
  "va.us",
  "wa.us",
  "wi.us",
  "wv.us",
  "wy.us",
  "k12.ak.us",
  "k12.al.us",
  "k12.ar.us",
  "k12.as.us",
  "k12.az.us",
  "k12.ca.us",
  "k12.co.us",
  "k12.ct.us",
  "k12.dc.us",
  "k12.de.us",
  "k12.fl.us",
  "k12.ga.us",
  "k12.gu.us",
  "k12.ia.us",
  "k12.id.us",
  "k12.il.us",
  "k12.in.us",
  "k12.ks.us",
  "k12.ky.us",
  "k12.la.us",
  "k12.ma.us",
  "k12.md.us",
  "k12.me.us",
  "k12.mi.us",
  "k12.mn.us",
  "k12.mo.us",
  "k12.ms.us",
  "k12.mt.us",
  "k12.nc.us",
  "k12.ne.us",
  "k12.nh.us",
  "k12.nj.us",
  "k12.nm.us",
  "k12.nv.us",
  "k12.ny.us",
  "k12.oh.us",
  "k12.ok.us",
  "k12.or.us",
  "k12.pa.us",
  "k12.pr.us",
  "k12.sc.us",
  "k12.tn.us",
  "k12.tx.us",
  "k12.ut.us",
  "k12.vi.us",
  "k12.vt.us",
  "k12.va.us",
  "k12.wa.us",
  "k12.wi.us",
  "k12.wy.us",
  "cc.ak.us",
  "cc.al.us",
  "cc.ar.us",
  "cc.as.us",
  "cc.az.us",
  "cc.ca.us",
  "cc.co.us",
  "cc.ct.us",
  "cc.dc.us",
  "cc.de.us",
  "cc.fl.us",
  "cc.ga.us",
  "cc.gu.us",
  "cc.hi.us",
  "cc.ia.us",
  "cc.id.us",
  "cc.il.us",
  "cc.in.us",
  "cc.ks.us",
  "cc.ky.us",
  "cc.la.us",
  "cc.ma.us",
  "cc.md.us",
  "cc.me.us",
  "cc.mi.us",
  "cc.mn.us",
  "cc.mo.us",
  "cc.ms.us",
  "cc.mt.us",
  "cc.nc.us",
  "cc.nd.us",
  "cc.ne.us",
  "cc.nh.us",
  "cc.nj.us",
  "cc.nm.us",
  "cc.nv.us",
  "cc.ny.us",
  "cc.oh.us",
  "cc.ok.us",
  "cc.or.us",
  "cc.pa.us",
  "cc.pr.us",
  "cc.ri.us",
  "cc.sc.us",
  "cc.sd.us",
  "cc.tn.us",
  "cc.tx.us",
  "cc.ut.us",
  "cc.vi.us",
  "cc.vt.us",
  "cc.va.us",
  "cc.wa.us",
  "cc.wi.us",
  "cc.wv.us",
  "cc.wy.us",
  "lib.ak.us",
  "lib.al.us",
  "lib.ar.us",
  "lib.as.us",
  "lib.az.us",
  "lib.ca.us",
  "lib.co.us",
  "lib.ct.us",
  "lib.dc.us",
  "lib.fl.us",
  "lib.ga.us",
  "lib.gu.us",
  "lib.hi.us",
  "lib.ia.us",
  "lib.id.us",
  "lib.il.us",
  "lib.in.us",
  "lib.ks.us",
  "lib.ky.us",
  "lib.la.us",
  "lib.ma.us",
  "lib.md.us",
  "lib.me.us",
  "lib.mi.us",
  "lib.mn.us",
  "lib.mo.us",
  "lib.ms.us",
  "lib.mt.us",
  "lib.nc.us",
  "lib.nd.us",
  "lib.ne.us",
  "lib.nh.us",
  "lib.nj.us",
  "lib.nm.us",
  "lib.nv.us",
  "lib.ny.us",
  "lib.oh.us",
  "lib.ok.us",
  "lib.or.us",
  "lib.pa.us",
  "lib.pr.us",
  "lib.ri.us",
  "lib.sc.us",
  "lib.sd.us",
  "lib.tn.us",
  "lib.tx.us",
  "lib.ut.us",
  "lib.vi.us",
  "lib.vt.us",
  "lib.va.us",
  "lib.wa.us",
  "lib.wi.us",
  "lib.wy.us",
  "pvt.k12.ma.us",
  "chtr.k12.ma.us",
  "paroch.k12.ma.us",
  "ann-arbor.mi.us",
  "cog.mi.us",
  "dst.mi.us",
  "eaton.mi.us",
  "gen.mi.us",
  "mus.mi.us",
  "tec.mi.us",
  "washtenaw.mi.us",
  "uy",
  "com.uy",
  "edu.uy",
  "gub.uy",
  "mil.uy",
  "net.uy",
  "org.uy",
  "uz",
  "co.uz",
  "com.uz",
  "net.uz",
  "org.uz",
  "va",
  "vc",
  "com.vc",
  "net.vc",
  "org.vc",
  "gov.vc",
  "mil.vc",
  "edu.vc",
  "ve",
  "arts.ve",
  "bib.ve",
  "co.ve",
  "com.ve",
  "e12.ve",
  "edu.ve",
  "firm.ve",
  "gob.ve",
  "gov.ve",
  "info.ve",
  "int.ve",
  "mil.ve",
  "net.ve",
  "nom.ve",
  "org.ve",
  "rar.ve",
  "rec.ve",
  "store.ve",
  "tec.ve",
  "web.ve",
  "vg",
  "vi",
  "co.vi",
  "com.vi",
  "k12.vi",
  "net.vi",
  "org.vi",
  "vn",
  "com.vn",
  "net.vn",
  "org.vn",
  "edu.vn",
  "gov.vn",
  "int.vn",
  "ac.vn",
  "biz.vn",
  "info.vn",
  "name.vn",
  "pro.vn",
  "health.vn",
  "vu",
  "com.vu",
  "edu.vu",
  "net.vu",
  "org.vu",
  "wf",
  "ws",
  "com.ws",
  "net.ws",
  "org.ws",
  "gov.ws",
  "edu.ws",
  "yt",
  "امارات",
  "հայ",
  "বাংলা",
  "бг",
  "البحرين",
  "бел",
  "中国",
  "中國",
  "الجزائر",
  "مصر",
  "ею",
  "ευ",
  "موريتانيا",
  "გე",
  "ελ",
  "香港",
  "公司.香港",
  "教育.香港",
  "政府.香港",
  "個人.香港",
  "網絡.香港",
  "組織.香港",
  "ಭಾರತ",
  "ଭାରତ",
  "ভাৰত",
  "भारतम्",
  "भारोत",
  "ڀارت",
  "ഭാരതം",
  "भारत",
  "بارت",
  "بھارت",
  "భారత్",
  "ભારત",
  "ਭਾਰਤ",
  "ভারত",
  "இந்தியா",
  "ایران",
  "ايران",
  "عراق",
  "الاردن",
  "한국",
  "қаз",
  "ລາວ",
  "ලංකා",
  "இலங்கை",
  "المغرب",
  "мкд",
  "мон",
  "澳門",
  "澳门",
  "مليسيا",
  "عمان",
  "پاکستان",
  "پاكستان",
  "فلسطين",
  "срб",
  "пр.срб",
  "орг.срб",
  "обр.срб",
  "од.срб",
  "упр.срб",
  "ак.срб",
  "рф",
  "قطر",
  "السعودية",
  "السعودیة",
  "السعودیۃ",
  "السعوديه",
  "سودان",
  "新加坡",
  "சிங்கப்பூர்",
  "سورية",
  "سوريا",
  "ไทย",
  "ศึกษา.ไทย",
  "ธุรกิจ.ไทย",
  "รัฐบาล.ไทย",
  "ทหาร.ไทย",
  "เน็ต.ไทย",
  "องค์กร.ไทย",
  "تونس",
  "台灣",
  "台湾",
  "臺灣",
  "укр",
  "اليمن",
  "xxx",
  "ye",
  "com.ye",
  "edu.ye",
  "gov.ye",
  "net.ye",
  "mil.ye",
  "org.ye",
  "ac.za",
  "agric.za",
  "alt.za",
  "co.za",
  "edu.za",
  "gov.za",
  "grondar.za",
  "law.za",
  "mil.za",
  "net.za",
  "ngo.za",
  "nic.za",
  "nis.za",
  "nom.za",
  "org.za",
  "school.za",
  "tm.za",
  "web.za",
  "zm",
  "ac.zm",
  "biz.zm",
  "co.zm",
  "com.zm",
  "edu.zm",
  "gov.zm",
  "info.zm",
  "mil.zm",
  "net.zm",
  "org.zm",
  "sch.zm",
  "zw",
  "ac.zw",
  "co.zw",
  "gov.zw",
  "mil.zw",
  "org.zw",
  "aaa",
  "aarp",
  "abarth",
  "abb",
  "abbott",
  "abbvie",
  "abc",
  "able",
  "abogado",
  "abudhabi",
  "academy",
  "accenture",
  "accountant",
  "accountants",
  "aco",
  "actor",
  "adac",
  "ads",
  "adult",
  "aeg",
  "aetna",
  "afl",
  "africa",
  "agakhan",
  "agency",
  "aig",
  "airbus",
  "airforce",
  "airtel",
  "akdn",
  "alfaromeo",
  "alibaba",
  "alipay",
  "allfinanz",
  "allstate",
  "ally",
  "alsace",
  "alstom",
  "amazon",
  "americanexpress",
  "americanfamily",
  "amex",
  "amfam",
  "amica",
  "amsterdam",
  "analytics",
  "android",
  "anquan",
  "anz",
  "aol",
  "apartments",
  "app",
  "apple",
  "aquarelle",
  "arab",
  "aramco",
  "archi",
  "army",
  "art",
  "arte",
  "asda",
  "associates",
  "athleta",
  "attorney",
  "auction",
  "audi",
  "audible",
  "audio",
  "auspost",
  "author",
  "auto",
  "autos",
  "avianca",
  "aws",
  "axa",
  "azure",
  "baby",
  "baidu",
  "banamex",
  "bananarepublic",
  "band",
  "bank",
  "bar",
  "barcelona",
  "barclaycard",
  "barclays",
  "barefoot",
  "bargains",
  "baseball",
  "basketball",
  "bauhaus",
  "bayern",
  "bbc",
  "bbt",
  "bbva",
  "bcg",
  "bcn",
  "beats",
  "beauty",
  "beer",
  "bentley",
  "berlin",
  "best",
  "bestbuy",
  "bet",
  "bharti",
  "bible",
  "bid",
  "bike",
  "bing",
  "bingo",
  "bio",
  "black",
  "blackfriday",
  "blockbuster",
  "blog",
  "bloomberg",
  "blue",
  "bms",
  "bmw",
  "bnpparibas",
  "boats",
  "boehringer",
  "bofa",
  "bom",
  "bond",
  "boo",
  "book",
  "booking",
  "bosch",
  "bostik",
  "boston",
  "bot",
  "boutique",
  "box",
  "bradesco",
  "bridgestone",
  "broadway",
  "broker",
  "brother",
  "brussels",
  "bugatti",
  "build",
  "builders",
  "business",
  "buy",
  "buzz",
  "bzh",
  "cab",
  "cafe",
  "cal",
  "call",
  "calvinklein",
  "cam",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "capitalone",
  "car",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cars",
  "casa",
  "case",
  "cash",
  "casino",
  "catering",
  "catholic",
  "cba",
  "cbn",
  "cbre",
  "cbs",
  "center",
  "ceo",
  "cern",
  "cfa",
  "cfd",
  "chanel",
  "channel",
  "charity",
  "chase",
  "chat",
  "cheap",
  "chintai",
  "christmas",
  "chrome",
  "church",
  "cipriani",
  "circle",
  "cisco",
  "citadel",
  "citi",
  "citic",
  "city",
  "cityeats",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clinique",
  "clothing",
  "cloud",
  "club",
  "clubmed",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "comcast",
  "commbank",
  "community",
  "company",
  "compare",
  "computer",
  "comsec",
  "condos",
  "construction",
  "consulting",
  "contact",
  "contractors",
  "cooking",
  "cookingchannel",
  "cool",
  "corsica",
  "country",
  "coupon",
  "coupons",
  "courses",
  "cpa",
  "credit",
  "creditcard",
  "creditunion",
  "cricket",
  "crown",
  "crs",
  "cruise",
  "cruises",
  "cuisinella",
  "cymru",
  "cyou",
  "dabur",
  "dad",
  "dance",
  "data",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "dds",
  "deal",
  "dealer",
  "deals",
  "degree",
  "delivery",
  "dell",
  "deloitte",
  "delta",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "dhl",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "discover",
  "dish",
  "diy",
  "dnp",
  "docs",
  "doctor",
  "dog",
  "domains",
  "dot",
  "download",
  "drive",
  "dtv",
  "dubai",
  "dunlop",
  "dupont",
  "durban",
  "dvag",
  "dvr",
  "earth",
  "eat",
  "eco",
  "edeka",
  "education",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epson",
  "equipment",
  "ericsson",
  "erni",
  "esq",
  "estate",
  "etisalat",
  "eurovision",
  "eus",
  "events",
  "exchange",
  "expert",
  "exposed",
  "express",
  "extraspace",
  "fage",
  "fail",
  "fairwinds",
  "faith",
  "family",
  "fan",
  "fans",
  "farm",
  "farmers",
  "fashion",
  "fast",
  "fedex",
  "feedback",
  "ferrari",
  "ferrero",
  "fiat",
  "fidelity",
  "fido",
  "film",
  "final",
  "finance",
  "financial",
  "fire",
  "firestone",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "flickr",
  "flights",
  "flir",
  "florist",
  "flowers",
  "fly",
  "foo",
  "food",
  "foodnetwork",
  "football",
  "ford",
  "forex",
  "forsale",
  "forum",
  "foundation",
  "fox",
  "free",
  "fresenius",
  "frl",
  "frogans",
  "frontdoor",
  "frontier",
  "ftr",
  "fujitsu",
  "fun",
  "fund",
  "furniture",
  "futbol",
  "fyi",
  "gal",
  "gallery",
  "gallo",
  "gallup",
  "game",
  "games",
  "gap",
  "garden",
  "gay",
  "gbiz",
  "gdn",
  "gea",
  "gent",
  "genting",
  "george",
  "ggee",
  "gift",
  "gifts",
  "gives",
  "giving",
  "glass",
  "gle",
  "global",
  "globo",
  "gmail",
  "gmbh",
  "gmo",
  "gmx",
  "godaddy",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goodyear",
  "goog",
  "google",
  "gop",
  "got",
  "grainger",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "grocery",
  "group",
  "guardian",
  "gucci",
  "guge",
  "guide",
  "guitars",
  "guru",
  "hair",
  "hamburg",
  "hangout",
  "haus",
  "hbo",
  "hdfc",
  "hdfcbank",
  "health",
  "healthcare",
  "help",
  "helsinki",
  "here",
  "hermes",
  "hgtv",
  "hiphop",
  "hisamitsu",
  "hitachi",
  "hiv",
  "hkt",
  "hockey",
  "holdings",
  "holiday",
  "homedepot",
  "homegoods",
  "homes",
  "homesense",
  "honda",
  "horse",
  "hospital",
  "host",
  "hosting",
  "hot",
  "hoteles",
  "hotels",
  "hotmail",
  "house",
  "how",
  "hsbc",
  "hughes",
  "hyatt",
  "hyundai",
  "ibm",
  "icbc",
  "ice",
  "icu",
  "ieee",
  "ifm",
  "ikano",
  "imamat",
  "imdb",
  "immo",
  "immobilien",
  "inc",
  "industries",
  "infiniti",
  "ing",
  "ink",
  "institute",
  "insurance",
  "insure",
  "international",
  "intuit",
  "investments",
  "ipiranga",
  "irish",
  "ismaili",
  "ist",
  "istanbul",
  "itau",
  "itv",
  "jaguar",
  "java",
  "jcb",
  "jeep",
  "jetzt",
  "jewelry",
  "jio",
  "jll",
  "jmp",
  "jnj",
  "joburg",
  "jot",
  "joy",
  "jpmorgan",
  "jprs",
  "juegos",
  "juniper",
  "kaufen",
  "kddi",
  "kerryhotels",
  "kerrylogistics",
  "kerryproperties",
  "kfh",
  "kia",
  "kids",
  "kim",
  "kinder",
  "kindle",
  "kitchen",
  "kiwi",
  "koeln",
  "komatsu",
  "kosher",
  "kpmg",
  "kpn",
  "krd",
  "kred",
  "kuokgroup",
  "kyoto",
  "lacaixa",
  "lamborghini",
  "lamer",
  "lancaster",
  "lancia",
  "land",
  "landrover",
  "lanxess",
  "lasalle",
  "lat",
  "latino",
  "latrobe",
  "law",
  "lawyer",
  "lds",
  "lease",
  "leclerc",
  "lefrak",
  "legal",
  "lego",
  "lexus",
  "lgbt",
  "lidl",
  "life",
  "lifeinsurance",
  "lifestyle",
  "lighting",
  "like",
  "lilly",
  "limited",
  "limo",
  "lincoln",
  "linde",
  "link",
  "lipsy",
  "live",
  "living",
  "llc",
  "llp",
  "loan",
  "loans",
  "locker",
  "locus",
  "loft",
  "lol",
  "london",
  "lotte",
  "lotto",
  "love",
  "lpl",
  "lplfinancial",
  "ltd",
  "ltda",
  "lundbeck",
  "luxe",
  "luxury",
  "macys",
  "madrid",
  "maif",
  "maison",
  "makeup",
  "man",
  "management",
  "mango",
  "map",
  "market",
  "marketing",
  "markets",
  "marriott",
  "marshalls",
  "maserati",
  "mattel",
  "mba",
  "mckinsey",
  "med",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "men",
  "menu",
  "merckmsd",
  "miami",
  "microsoft",
  "mini",
  "mint",
  "mit",
  "mitsubishi",
  "mlb",
  "mls",
  "mma",
  "mobile",
  "moda",
  "moe",
  "moi",
  "mom",
  "monash",
  "money",
  "monster",
  "mormon",
  "mortgage",
  "moscow",
  "moto",
  "motorcycles",
  "mov",
  "movie",
  "msd",
  "mtn",
  "mtr",
  "music",
  "mutual",
  "nab",
  "nagoya",
  "natura",
  "navy",
  "nba",
  "nec",
  "netbank",
  "netflix",
  "network",
  "neustar",
  "new",
  "news",
  "next",
  "nextdirect",
  "nexus",
  "nfl",
  "ngo",
  "nhk",
  "nico",
  "nike",
  "nikon",
  "ninja",
  "nissan",
  "nissay",
  "nokia",
  "northwesternmutual",
  "norton",
  "now",
  "nowruz",
  "nowtv",
  "nra",
  "nrw",
  "ntt",
  "nyc",
  "obi",
  "observer",
  "office",
  "okinawa",
  "olayan",
  "olayangroup",
  "oldnavy",
  "ollo",
  "omega",
  "one",
  "ong",
  "onl",
  "online",
  "ooo",
  "open",
  "oracle",
  "orange",
  "organic",
  "origins",
  "osaka",
  "otsuka",
  "ott",
  "ovh",
  "page",
  "panasonic",
  "paris",
  "pars",
  "partners",
  "parts",
  "party",
  "passagens",
  "pay",
  "pccw",
  "pet",
  "pfizer",
  "pharmacy",
  "phd",
  "philips",
  "phone",
  "photo",
  "photography",
  "photos",
  "physio",
  "pics",
  "pictet",
  "pictures",
  "pid",
  "pin",
  "ping",
  "pink",
  "pioneer",
  "pizza",
  "place",
  "play",
  "playstation",
  "plumbing",
  "plus",
  "pnc",
  "pohl",
  "poker",
  "politie",
  "porn",
  "pramerica",
  "praxi",
  "press",
  "prime",
  "prod",
  "productions",
  "prof",
  "progressive",
  "promo",
  "properties",
  "property",
  "protection",
  "pru",
  "prudential",
  "pub",
  "pwc",
  "qpon",
  "quebec",
  "quest",
  "racing",
  "radio",
  "read",
  "realestate",
  "realtor",
  "realty",
  "recipes",
  "red",
  "redstone",
  "redumbrella",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "reliance",
  "ren",
  "rent",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rexroth",
  "rich",
  "richardli",
  "ricoh",
  "ril",
  "rio",
  "rip",
  "rocher",
  "rocks",
  "rodeo",
  "rogers",
  "room",
  "rsvp",
  "rugby",
  "ruhr",
  "run",
  "rwe",
  "ryukyu",
  "saarland",
  "safe",
  "safety",
  "sakura",
  "sale",
  "salon",
  "samsclub",
  "samsung",
  "sandvik",
  "sandvikcoromant",
  "sanofi",
  "sap",
  "sarl",
  "sas",
  "save",
  "saxo",
  "sbi",
  "sbs",
  "sca",
  "scb",
  "schaeffler",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scot",
  "search",
  "seat",
  "secure",
  "security",
  "seek",
  "select",
  "sener",
  "services",
  "ses",
  "seven",
  "sew",
  "sex",
  "sexy",
  "sfr",
  "shangrila",
  "sharp",
  "shaw",
  "shell",
  "shia",
  "shiksha",
  "shoes",
  "shop",
  "shopping",
  "shouji",
  "show",
  "showtime",
  "silk",
  "sina",
  "singles",
  "site",
  "ski",
  "skin",
  "sky",
  "skype",
  "sling",
  "smart",
  "smile",
  "sncf",
  "soccer",
  "social",
  "softbank",
  "software",
  "sohu",
  "solar",
  "solutions",
  "song",
  "sony",
  "soy",
  "spa",
  "space",
  "sport",
  "spot",
  "srl",
  "stada",
  "staples",
  "star",
  "statebank",
  "statefarm",
  "stc",
  "stcgroup",
  "stockholm",
  "storage",
  "store",
  "stream",
  "studio",
  "study",
  "style",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "swatch",
  "swiss",
  "sydney",
  "systems",
  "tab",
  "taipei",
  "talk",
  "taobao",
  "target",
  "tatamotors",
  "tatar",
  "tattoo",
  "tax",
  "taxi",
  "tci",
  "tdk",
  "team",
  "tech",
  "technology",
  "temasek",
  "tennis",
  "teva",
  "thd",
  "theater",
  "theatre",
  "tiaa",
  "tickets",
  "tienda",
  "tiffany",
  "tips",
  "tires",
  "tirol",
  "tjmaxx",
  "tjx",
  "tkmaxx",
  "tmall",
  "today",
  "tokyo",
  "tools",
  "top",
  "toray",
  "toshiba",
  "total",
  "tours",
  "town",
  "toyota",
  "toys",
  "trade",
  "trading",
  "training",
  "travel",
  "travelchannel",
  "travelers",
  "travelersinsurance",
  "trust",
  "trv",
  "tube",
  "tui",
  "tunes",
  "tushu",
  "tvs",
  "ubank",
  "ubs",
  "unicom",
  "university",
  "uno",
  "uol",
  "ups",
  "vacations",
  "vana",
  "vanguard",
  "vegas",
  "ventures",
  "verisign",
  "versicherung",
  "vet",
  "viajes",
  "video",
  "vig",
  "viking",
  "villas",
  "vin",
  "vip",
  "virgin",
  "visa",
  "vision",
  "viva",
  "vivo",
  "vlaanderen",
  "vodka",
  "volkswagen",
  "volvo",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vuelos",
  "wales",
  "walmart",
  "walter",
  "wang",
  "wanggou",
  "watch",
  "watches",
  "weather",
  "weatherchannel",
  "webcam",
  "weber",
  "website",
  "wedding",
  "weibo",
  "weir",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "windows",
  "wine",
  "winners",
  "wme",
  "wolterskluwer",
  "woodside",
  "work",
  "works",
  "world",
  "wow",
  "wtc",
  "wtf",
  "xbox",
  "xerox",
  "xfinity",
  "xihuan",
  "xin",
  "कॉम",
  "セール",
  "佛山",
  "慈善",
  "集团",
  "在线",
  "点看",
  "คอม",
  "八卦",
  "موقع",
  "公益",
  "公司",
  "香格里拉",
  "网站",
  "移动",
  "我爱你",
  "москва",
  "католик",
  "онлайн",
  "сайт",
  "联通",
  "קום",
  "时尚",
  "微博",
  "淡马锡",
  "ファッション",
  "орг",
  "नेट",
  "ストア",
  "アマゾン",
  "삼성",
  "商标",
  "商店",
  "商城",
  "дети",
  "ポイント",
  "新闻",
  "家電",
  "كوم",
  "中文网",
  "中信",
  "娱乐",
  "谷歌",
  "電訊盈科",
  "购物",
  "クラウド",
  "通販",
  "网店",
  "संगठन",
  "餐厅",
  "网络",
  "ком",
  "亚马逊",
  "诺基亚",
  "食品",
  "飞利浦",
  "手机",
  "ارامكو",
  "العليان",
  "اتصالات",
  "بازار",
  "ابوظبي",
  "كاثوليك",
  "همراه",
  "닷컴",
  "政府",
  "شبكة",
  "بيتك",
  "عرب",
  "机构",
  "组织机构",
  "健康",
  "招聘",
  "рус",
  "大拿",
  "みんな",
  "グーグル",
  "世界",
  "書籍",
  "网址",
  "닷넷",
  "コム",
  "天主教",
  "游戏",
  "vermögensberater",
  "vermögensberatung",
  "企业",
  "信息",
  "嘉里大酒店",
  "嘉里",
  "广东",
  "政务",
  "xyz",
  "yachts",
  "yahoo",
  "yamaxun",
  "yandex",
  "yodobashi",
  "yoga",
  "yokohama",
  "you",
  "youtube",
  "yun",
  "zappos",
  "zara",
  "zero",
  "zip",
  "zone",
  "zuerich",
  "cc.ua",
  "inf.ua",
  "ltd.ua",
  "611.to",
  "graphox.us",
  "*.devcdnaccesso.com",
  "adobeaemcloud.com",
  "*.dev.adobeaemcloud.com",
  "hlx.live",
  "adobeaemcloud.net",
  "hlx.page",
  "hlx3.page",
  "beep.pl",
  "airkitapps.com",
  "airkitapps-au.com",
  "airkitapps.eu",
  "aivencloud.com",
  "barsy.ca",
  "*.compute.estate",
  "*.alces.network",
  "kasserver.com",
  "altervista.org",
  "alwaysdata.net",
  "cloudfront.net",
  "*.compute.amazonaws.com",
  "*.compute-1.amazonaws.com",
  "*.compute.amazonaws.com.cn",
  "us-east-1.amazonaws.com",
  "cn-north-1.eb.amazonaws.com.cn",
  "cn-northwest-1.eb.amazonaws.com.cn",
  "elasticbeanstalk.com",
  "ap-northeast-1.elasticbeanstalk.com",
  "ap-northeast-2.elasticbeanstalk.com",
  "ap-northeast-3.elasticbeanstalk.com",
  "ap-south-1.elasticbeanstalk.com",
  "ap-southeast-1.elasticbeanstalk.com",
  "ap-southeast-2.elasticbeanstalk.com",
  "ca-central-1.elasticbeanstalk.com",
  "eu-central-1.elasticbeanstalk.com",
  "eu-west-1.elasticbeanstalk.com",
  "eu-west-2.elasticbeanstalk.com",
  "eu-west-3.elasticbeanstalk.com",
  "sa-east-1.elasticbeanstalk.com",
  "us-east-1.elasticbeanstalk.com",
  "us-east-2.elasticbeanstalk.com",
  "us-gov-west-1.elasticbeanstalk.com",
  "us-west-1.elasticbeanstalk.com",
  "us-west-2.elasticbeanstalk.com",
  "*.elb.amazonaws.com",
  "*.elb.amazonaws.com.cn",
  "awsglobalaccelerator.com",
  "s3.amazonaws.com",
  "s3-ap-northeast-1.amazonaws.com",
  "s3-ap-northeast-2.amazonaws.com",
  "s3-ap-south-1.amazonaws.com",
  "s3-ap-southeast-1.amazonaws.com",
  "s3-ap-southeast-2.amazonaws.com",
  "s3-ca-central-1.amazonaws.com",
  "s3-eu-central-1.amazonaws.com",
  "s3-eu-west-1.amazonaws.com",
  "s3-eu-west-2.amazonaws.com",
  "s3-eu-west-3.amazonaws.com",
  "s3-external-1.amazonaws.com",
  "s3-fips-us-gov-west-1.amazonaws.com",
  "s3-sa-east-1.amazonaws.com",
  "s3-us-gov-west-1.amazonaws.com",
  "s3-us-east-2.amazonaws.com",
  "s3-us-west-1.amazonaws.com",
  "s3-us-west-2.amazonaws.com",
  "s3.ap-northeast-2.amazonaws.com",
  "s3.ap-south-1.amazonaws.com",
  "s3.cn-north-1.amazonaws.com.cn",
  "s3.ca-central-1.amazonaws.com",
  "s3.eu-central-1.amazonaws.com",
  "s3.eu-west-2.amazonaws.com",
  "s3.eu-west-3.amazonaws.com",
  "s3.us-east-2.amazonaws.com",
  "s3.dualstack.ap-northeast-1.amazonaws.com",
  "s3.dualstack.ap-northeast-2.amazonaws.com",
  "s3.dualstack.ap-south-1.amazonaws.com",
  "s3.dualstack.ap-southeast-1.amazonaws.com",
  "s3.dualstack.ap-southeast-2.amazonaws.com",
  "s3.dualstack.ca-central-1.amazonaws.com",
  "s3.dualstack.eu-central-1.amazonaws.com",
  "s3.dualstack.eu-west-1.amazonaws.com",
  "s3.dualstack.eu-west-2.amazonaws.com",
  "s3.dualstack.eu-west-3.amazonaws.com",
  "s3.dualstack.sa-east-1.amazonaws.com",
  "s3.dualstack.us-east-1.amazonaws.com",
  "s3.dualstack.us-east-2.amazonaws.com",
  "s3-website-us-east-1.amazonaws.com",
  "s3-website-us-west-1.amazonaws.com",
  "s3-website-us-west-2.amazonaws.com",
  "s3-website-ap-northeast-1.amazonaws.com",
  "s3-website-ap-southeast-1.amazonaws.com",
  "s3-website-ap-southeast-2.amazonaws.com",
  "s3-website-eu-west-1.amazonaws.com",
  "s3-website-sa-east-1.amazonaws.com",
  "s3-website.ap-northeast-2.amazonaws.com",
  "s3-website.ap-south-1.amazonaws.com",
  "s3-website.ca-central-1.amazonaws.com",
  "s3-website.eu-central-1.amazonaws.com",
  "s3-website.eu-west-2.amazonaws.com",
  "s3-website.eu-west-3.amazonaws.com",
  "s3-website.us-east-2.amazonaws.com",
  "t3l3p0rt.net",
  "tele.amune.org",
  "apigee.io",
  "siiites.com",
  "appspacehosted.com",
  "appspaceusercontent.com",
  "appudo.net",
  "on-aptible.com",
  "user.aseinet.ne.jp",
  "gv.vc",
  "d.gv.vc",
  "user.party.eus",
  "pimienta.org",
  "poivron.org",
  "potager.org",
  "sweetpepper.org",
  "myasustor.com",
  "cdn.prod.atlassian-dev.net",
  "translated.page",
  "myfritz.net",
  "onavstack.net",
  "*.awdev.ca",
  "*.advisor.ws",
  "ecommerce-shop.pl",
  "b-data.io",
  "backplaneapp.io",
  "balena-devices.com",
  "rs.ba",
  "*.banzai.cloud",
  "app.banzaicloud.io",
  "*.backyards.banzaicloud.io",
  "base.ec",
  "official.ec",
  "buyshop.jp",
  "fashionstore.jp",
  "handcrafted.jp",
  "kawaiishop.jp",
  "supersale.jp",
  "theshop.jp",
  "shopselect.net",
  "base.shop",
  "*.beget.app",
  "betainabox.com",
  "bnr.la",
  "bitbucket.io",
  "blackbaudcdn.net",
  "of.je",
  "bluebite.io",
  "boomla.net",
  "boutir.com",
  "boxfuse.io",
  "square7.ch",
  "bplaced.com",
  "bplaced.de",
  "square7.de",
  "bplaced.net",
  "square7.net",
  "shop.brendly.rs",
  "browsersafetymark.io",
  "uk0.bigv.io",
  "dh.bytemark.co.uk",
  "vm.bytemark.co.uk",
  "cafjs.com",
  "mycd.eu",
  "drr.ac",
  "uwu.ai",
  "carrd.co",
  "crd.co",
  "ju.mp",
  "ae.org",
  "br.com",
  "cn.com",
  "com.de",
  "com.se",
  "de.com",
  "eu.com",
  "gb.net",
  "hu.net",
  "jp.net",
  "jpn.com",
  "mex.com",
  "ru.com",
  "sa.com",
  "se.net",
  "uk.com",
  "uk.net",
  "us.com",
  "za.bz",
  "za.com",
  "ar.com",
  "hu.com",
  "kr.com",
  "no.com",
  "qc.com",
  "uy.com",
  "africa.com",
  "gr.com",
  "in.net",
  "web.in",
  "us.org",
  "co.com",
  "aus.basketball",
  "nz.basketball",
  "radio.am",
  "radio.fm",
  "c.la",
  "certmgr.org",
  "cx.ua",
  "discourse.group",
  "discourse.team",
  "cleverapps.io",
  "clerk.app",
  "clerkstage.app",
  "*.lcl.dev",
  "*.lclstage.dev",
  "*.stg.dev",
  "*.stgstage.dev",
  "clickrising.net",
  "c66.me",
  "cloud66.ws",
  "cloud66.zone",
  "jdevcloud.com",
  "wpdevcloud.com",
  "cloudaccess.host",
  "freesite.host",
  "cloudaccess.net",
  "cloudcontrolled.com",
  "cloudcontrolapp.com",
  "*.cloudera.site",
  "pages.dev",
  "trycloudflare.com",
  "workers.dev",
  "wnext.app",
  "co.ca",
  "*.otap.co",
  "co.cz",
  "c.cdn77.org",
  "cdn77-ssl.net",
  "r.cdn77.net",
  "rsc.cdn77.org",
  "ssl.origin.cdn77-secure.org",
  "cloudns.asia",
  "cloudns.biz",
  "cloudns.club",
  "cloudns.cc",
  "cloudns.eu",
  "cloudns.in",
  "cloudns.info",
  "cloudns.org",
  "cloudns.pro",
  "cloudns.pw",
  "cloudns.us",
  "cnpy.gdn",
  "codeberg.page",
  "co.nl",
  "co.no",
  "webhosting.be",
  "hosting-cluster.nl",
  "ac.ru",
  "edu.ru",
  "gov.ru",
  "int.ru",
  "mil.ru",
  "test.ru",
  "dyn.cosidns.de",
  "dynamisches-dns.de",
  "dnsupdater.de",
  "internet-dns.de",
  "l-o-g-i-n.de",
  "dynamic-dns.info",
  "feste-ip.net",
  "knx-server.net",
  "static-access.net",
  "realm.cz",
  "*.cryptonomic.net",
  "cupcake.is",
  "curv.dev",
  "*.customer-oci.com",
  "*.oci.customer-oci.com",
  "*.ocp.customer-oci.com",
  "*.ocs.customer-oci.com",
  "cyon.link",
  "cyon.site",
  "fnwk.site",
  "folionetwork.site",
  "platform0.app",
  "daplie.me",
  "localhost.daplie.me",
  "dattolocal.com",
  "dattorelay.com",
  "dattoweb.com",
  "mydatto.com",
  "dattolocal.net",
  "mydatto.net",
  "biz.dk",
  "co.dk",
  "firm.dk",
  "reg.dk",
  "store.dk",
  "dyndns.dappnode.io",
  "*.dapps.earth",
  "*.bzz.dapps.earth",
  "builtwithdark.com",
  "demo.datadetect.com",
  "instance.datadetect.com",
  "edgestack.me",
  "ddns5.com",
  "debian.net",
  "deno.dev",
  "deno-staging.dev",
  "dedyn.io",
  "deta.app",
  "deta.dev",
  "*.rss.my.id",
  "*.diher.solutions",
  "discordsays.com",
  "discordsez.com",
  "jozi.biz",
  "dnshome.de",
  "online.th",
  "shop.th",
  "drayddns.com",
  "shoparena.pl",
  "dreamhosters.com",
  "mydrobo.com",
  "drud.io",
  "drud.us",
  "duckdns.org",
  "bip.sh",
  "bitbridge.net",
  "dy.fi",
  "tunk.org",
  "dyndns-at-home.com",
  "dyndns-at-work.com",
  "dyndns-blog.com",
  "dyndns-free.com",
  "dyndns-home.com",
  "dyndns-ip.com",
  "dyndns-mail.com",
  "dyndns-office.com",
  "dyndns-pics.com",
  "dyndns-remote.com",
  "dyndns-server.com",
  "dyndns-web.com",
  "dyndns-wiki.com",
  "dyndns-work.com",
  "dyndns.biz",
  "dyndns.info",
  "dyndns.org",
  "dyndns.tv",
  "at-band-camp.net",
  "ath.cx",
  "barrel-of-knowledge.info",
  "barrell-of-knowledge.info",
  "better-than.tv",
  "blogdns.com",
  "blogdns.net",
  "blogdns.org",
  "blogsite.org",
  "boldlygoingnowhere.org",
  "broke-it.net",
  "buyshouses.net",
  "cechire.com",
  "dnsalias.com",
  "dnsalias.net",
  "dnsalias.org",
  "dnsdojo.com",
  "dnsdojo.net",
  "dnsdojo.org",
  "does-it.net",
  "doesntexist.com",
  "doesntexist.org",
  "dontexist.com",
  "dontexist.net",
  "dontexist.org",
  "doomdns.com",
  "doomdns.org",
  "dvrdns.org",
  "dyn-o-saur.com",
  "dynalias.com",
  "dynalias.net",
  "dynalias.org",
  "dynathome.net",
  "dyndns.ws",
  "endofinternet.net",
  "endofinternet.org",
  "endoftheinternet.org",
  "est-a-la-maison.com",
  "est-a-la-masion.com",
  "est-le-patron.com",
  "est-mon-blogueur.com",
  "for-better.biz",
  "for-more.biz",
  "for-our.info",
  "for-some.biz",
  "for-the.biz",
  "forgot.her.name",
  "forgot.his.name",
  "from-ak.com",
  "from-al.com",
  "from-ar.com",
  "from-az.net",
  "from-ca.com",
  "from-co.net",
  "from-ct.com",
  "from-dc.com",
  "from-de.com",
  "from-fl.com",
  "from-ga.com",
  "from-hi.com",
  "from-ia.com",
  "from-id.com",
  "from-il.com",
  "from-in.com",
  "from-ks.com",
  "from-ky.com",
  "from-la.net",
  "from-ma.com",
  "from-md.com",
  "from-me.org",
  "from-mi.com",
  "from-mn.com",
  "from-mo.com",
  "from-ms.com",
  "from-mt.com",
  "from-nc.com",
  "from-nd.com",
  "from-ne.com",
  "from-nh.com",
  "from-nj.com",
  "from-nm.com",
  "from-nv.com",
  "from-ny.net",
  "from-oh.com",
  "from-ok.com",
  "from-or.com",
  "from-pa.com",
  "from-pr.com",
  "from-ri.com",
  "from-sc.com",
  "from-sd.com",
  "from-tn.com",
  "from-tx.com",
  "from-ut.com",
  "from-va.com",
  "from-vt.com",
  "from-wa.com",
  "from-wi.com",
  "from-wv.com",
  "from-wy.com",
  "ftpaccess.cc",
  "fuettertdasnetz.de",
  "game-host.org",
  "game-server.cc",
  "getmyip.com",
  "gets-it.net",
  "go.dyndns.org",
  "gotdns.com",
  "gotdns.org",
  "groks-the.info",
  "groks-this.info",
  "ham-radio-op.net",
  "here-for-more.info",
  "hobby-site.com",
  "hobby-site.org",
  "home.dyndns.org",
  "homedns.org",
  "homeftp.net",
  "homeftp.org",
  "homeip.net",
  "homelinux.com",
  "homelinux.net",
  "homelinux.org",
  "homeunix.com",
  "homeunix.net",
  "homeunix.org",
  "iamallama.com",
  "in-the-band.net",
  "is-a-anarchist.com",
  "is-a-blogger.com",
  "is-a-bookkeeper.com",
  "is-a-bruinsfan.org",
  "is-a-bulls-fan.com",
  "is-a-candidate.org",
  "is-a-caterer.com",
  "is-a-celticsfan.org",
  "is-a-chef.com",
  "is-a-chef.net",
  "is-a-chef.org",
  "is-a-conservative.com",
  "is-a-cpa.com",
  "is-a-cubicle-slave.com",
  "is-a-democrat.com",
  "is-a-designer.com",
  "is-a-doctor.com",
  "is-a-financialadvisor.com",
  "is-a-geek.com",
  "is-a-geek.net",
  "is-a-geek.org",
  "is-a-green.com",
  "is-a-guru.com",
  "is-a-hard-worker.com",
  "is-a-hunter.com",
  "is-a-knight.org",
  "is-a-landscaper.com",
  "is-a-lawyer.com",
  "is-a-liberal.com",
  "is-a-libertarian.com",
  "is-a-linux-user.org",
  "is-a-llama.com",
  "is-a-musician.com",
  "is-a-nascarfan.com",
  "is-a-nurse.com",
  "is-a-painter.com",
  "is-a-patsfan.org",
  "is-a-personaltrainer.com",
  "is-a-photographer.com",
  "is-a-player.com",
  "is-a-republican.com",
  "is-a-rockstar.com",
  "is-a-socialist.com",
  "is-a-soxfan.org",
  "is-a-student.com",
  "is-a-teacher.com",
  "is-a-techie.com",
  "is-a-therapist.com",
  "is-an-accountant.com",
  "is-an-actor.com",
  "is-an-actress.com",
  "is-an-anarchist.com",
  "is-an-artist.com",
  "is-an-engineer.com",
  "is-an-entertainer.com",
  "is-by.us",
  "is-certified.com",
  "is-found.org",
  "is-gone.com",
  "is-into-anime.com",
  "is-into-cars.com",
  "is-into-cartoons.com",
  "is-into-games.com",
  "is-leet.com",
  "is-lost.org",
  "is-not-certified.com",
  "is-saved.org",
  "is-slick.com",
  "is-uberleet.com",
  "is-very-bad.org",
  "is-very-evil.org",
  "is-very-good.org",
  "is-very-nice.org",
  "is-very-sweet.org",
  "is-with-theband.com",
  "isa-geek.com",
  "isa-geek.net",
  "isa-geek.org",
  "isa-hockeynut.com",
  "issmarterthanyou.com",
  "isteingeek.de",
  "istmein.de",
  "kicks-ass.net",
  "kicks-ass.org",
  "knowsitall.info",
  "land-4-sale.us",
  "lebtimnetz.de",
  "leitungsen.de",
  "likes-pie.com",
  "likescandy.com",
  "merseine.nu",
  "mine.nu",
  "misconfused.org",
  "mypets.ws",
  "myphotos.cc",
  "neat-url.com",
  "office-on-the.net",
  "on-the-web.tv",
  "podzone.net",
  "podzone.org",
  "readmyblog.org",
  "saves-the-whales.com",
  "scrapper-site.net",
  "scrapping.cc",
  "selfip.biz",
  "selfip.com",
  "selfip.info",
  "selfip.net",
  "selfip.org",
  "sells-for-less.com",
  "sells-for-u.com",
  "sells-it.net",
  "sellsyourhome.org",
  "servebbs.com",
  "servebbs.net",
  "servebbs.org",
  "serveftp.net",
  "serveftp.org",
  "servegame.org",
  "shacknet.nu",
  "simple-url.com",
  "space-to-rent.com",
  "stuff-4-sale.org",
  "stuff-4-sale.us",
  "teaches-yoga.com",
  "thruhere.net",
  "traeumtgerade.de",
  "webhop.biz",
  "webhop.info",
  "webhop.net",
  "webhop.org",
  "worse-than.tv",
  "writesthisblog.com",
  "ddnss.de",
  "dyn.ddnss.de",
  "dyndns.ddnss.de",
  "dyndns1.de",
  "dyn-ip24.de",
  "home-webserver.de",
  "dyn.home-webserver.de",
  "myhome-server.de",
  "ddnss.org",
  "definima.net",
  "definima.io",
  "ondigitalocean.app",
  "*.digitaloceanspaces.com",
  "bci.dnstrace.pro",
  "ddnsfree.com",
  "ddnsgeek.com",
  "giize.com",
  "gleeze.com",
  "kozow.com",
  "loseyourip.com",
  "ooguy.com",
  "theworkpc.com",
  "casacam.net",
  "dynu.net",
  "accesscam.org",
  "camdvr.org",
  "freeddns.org",
  "mywire.org",
  "webredirect.org",
  "myddns.rocks",
  "blogsite.xyz",
  "dynv6.net",
  "e4.cz",
  "eero.online",
  "eero-stage.online",
  "elementor.cloud",
  "elementor.cool",
  "en-root.fr",
  "mytuleap.com",
  "tuleap-partners.com",
  "encr.app",
  "encoreapi.com",
  "onred.one",
  "staging.onred.one",
  "eu.encoway.cloud",
  "eu.org",
  "al.eu.org",
  "asso.eu.org",
  "at.eu.org",
  "au.eu.org",
  "be.eu.org",
  "bg.eu.org",
  "ca.eu.org",
  "cd.eu.org",
  "ch.eu.org",
  "cn.eu.org",
  "cy.eu.org",
  "cz.eu.org",
  "de.eu.org",
  "dk.eu.org",
  "edu.eu.org",
  "ee.eu.org",
  "es.eu.org",
  "fi.eu.org",
  "fr.eu.org",
  "gr.eu.org",
  "hr.eu.org",
  "hu.eu.org",
  "ie.eu.org",
  "il.eu.org",
  "in.eu.org",
  "int.eu.org",
  "is.eu.org",
  "it.eu.org",
  "jp.eu.org",
  "kr.eu.org",
  "lt.eu.org",
  "lu.eu.org",
  "lv.eu.org",
  "mc.eu.org",
  "me.eu.org",
  "mk.eu.org",
  "mt.eu.org",
  "my.eu.org",
  "net.eu.org",
  "ng.eu.org",
  "nl.eu.org",
  "no.eu.org",
  "nz.eu.org",
  "paris.eu.org",
  "pl.eu.org",
  "pt.eu.org",
  "q-a.eu.org",
  "ro.eu.org",
  "ru.eu.org",
  "se.eu.org",
  "si.eu.org",
  "sk.eu.org",
  "tr.eu.org",
  "uk.eu.org",
  "us.eu.org",
  "eurodir.ru",
  "eu-1.evennode.com",
  "eu-2.evennode.com",
  "eu-3.evennode.com",
  "eu-4.evennode.com",
  "us-1.evennode.com",
  "us-2.evennode.com",
  "us-3.evennode.com",
  "us-4.evennode.com",
  "twmail.cc",
  "twmail.net",
  "twmail.org",
  "mymailer.com.tw",
  "url.tw",
  "onfabrica.com",
  "apps.fbsbx.com",
  "ru.net",
  "adygeya.ru",
  "bashkiria.ru",
  "bir.ru",
  "cbg.ru",
  "com.ru",
  "dagestan.ru",
  "grozny.ru",
  "kalmykia.ru",
  "kustanai.ru",
  "marine.ru",
  "mordovia.ru",
  "msk.ru",
  "mytis.ru",
  "nalchik.ru",
  "nov.ru",
  "pyatigorsk.ru",
  "spb.ru",
  "vladikavkaz.ru",
  "vladimir.ru",
  "abkhazia.su",
  "adygeya.su",
  "aktyubinsk.su",
  "arkhangelsk.su",
  "armenia.su",
  "ashgabad.su",
  "azerbaijan.su",
  "balashov.su",
  "bashkiria.su",
  "bryansk.su",
  "bukhara.su",
  "chimkent.su",
  "dagestan.su",
  "east-kazakhstan.su",
  "exnet.su",
  "georgia.su",
  "grozny.su",
  "ivanovo.su",
  "jambyl.su",
  "kalmykia.su",
  "kaluga.su",
  "karacol.su",
  "karaganda.su",
  "karelia.su",
  "khakassia.su",
  "krasnodar.su",
  "kurgan.su",
  "kustanai.su",
  "lenug.su",
  "mangyshlak.su",
  "mordovia.su",
  "msk.su",
  "murmansk.su",
  "nalchik.su",
  "navoi.su",
  "north-kazakhstan.su",
  "nov.su",
  "obninsk.su",
  "penza.su",
  "pokrovsk.su",
  "sochi.su",
  "spb.su",
  "tashkent.su",
  "termez.su",
  "togliatti.su",
  "troitsk.su",
  "tselinograd.su",
  "tula.su",
  "tuva.su",
  "vladikavkaz.su",
  "vladimir.su",
  "vologda.su",
  "channelsdvr.net",
  "u.channelsdvr.net",
  "edgecompute.app",
  "fastly-terrarium.com",
  "fastlylb.net",
  "map.fastlylb.net",
  "freetls.fastly.net",
  "map.fastly.net",
  "a.prod.fastly.net",
  "global.prod.fastly.net",
  "a.ssl.fastly.net",
  "b.ssl.fastly.net",
  "global.ssl.fastly.net",
  "fastvps-server.com",
  "fastvps.host",
  "myfast.host",
  "fastvps.site",
  "myfast.space",
  "fedorainfracloud.org",
  "fedorapeople.org",
  "cloud.fedoraproject.org",
  "app.os.fedoraproject.org",
  "app.os.stg.fedoraproject.org",
  "conn.uk",
  "copro.uk",
  "hosp.uk",
  "mydobiss.com",
  "fh-muenster.io",
  "filegear.me",
  "filegear-au.me",
  "filegear-de.me",
  "filegear-gb.me",
  "filegear-ie.me",
  "filegear-jp.me",
  "filegear-sg.me",
  "firebaseapp.com",
  "fireweb.app",
  "flap.id",
  "onflashdrive.app",
  "fldrv.com",
  "fly.dev",
  "edgeapp.net",
  "shw.io",
  "flynnhosting.net",
  "forgeblocks.com",
  "id.forgerock.io",
  "framer.app",
  "framercanvas.com",
  "*.frusky.de",
  "ravpage.co.il",
  "0e.vc",
  "freebox-os.com",
  "freeboxos.com",
  "fbx-os.fr",
  "fbxos.fr",
  "freebox-os.fr",
  "freeboxos.fr",
  "freedesktop.org",
  "freemyip.com",
  "wien.funkfeuer.at",
  "*.futurecms.at",
  "*.ex.futurecms.at",
  "*.in.futurecms.at",
  "futurehosting.at",
  "futuremailing.at",
  "*.ex.ortsinfo.at",
  "*.kunden.ortsinfo.at",
  "*.statics.cloud",
  "independent-commission.uk",
  "independent-inquest.uk",
  "independent-inquiry.uk",
  "independent-panel.uk",
  "independent-review.uk",
  "public-inquiry.uk",
  "royal-commission.uk",
  "campaign.gov.uk",
  "service.gov.uk",
  "api.gov.uk",
  "gehirn.ne.jp",
  "usercontent.jp",
  "gentapps.com",
  "gentlentapis.com",
  "lab.ms",
  "cdn-edges.net",
  "ghost.io",
  "gsj.bz",
  "githubusercontent.com",
  "githubpreview.dev",
  "github.io",
  "gitlab.io",
  "gitapp.si",
  "gitpage.si",
  "glitch.me",
  "nog.community",
  "co.ro",
  "shop.ro",
  "lolipop.io",
  "angry.jp",
  "babyblue.jp",
  "babymilk.jp",
  "backdrop.jp",
  "bambina.jp",
  "bitter.jp",
  "blush.jp",
  "boo.jp",
  "boy.jp",
  "boyfriend.jp",
  "but.jp",
  "candypop.jp",
  "capoo.jp",
  "catfood.jp",
  "cheap.jp",
  "chicappa.jp",
  "chillout.jp",
  "chips.jp",
  "chowder.jp",
  "chu.jp",
  "ciao.jp",
  "cocotte.jp",
  "coolblog.jp",
  "cranky.jp",
  "cutegirl.jp",
  "daa.jp",
  "deca.jp",
  "deci.jp",
  "digick.jp",
  "egoism.jp",
  "fakefur.jp",
  "fem.jp",
  "flier.jp",
  "floppy.jp",
  "fool.jp",
  "frenchkiss.jp",
  "girlfriend.jp",
  "girly.jp",
  "gloomy.jp",
  "gonna.jp",
  "greater.jp",
  "hacca.jp",
  "heavy.jp",
  "her.jp",
  "hiho.jp",
  "hippy.jp",
  "holy.jp",
  "hungry.jp",
  "icurus.jp",
  "itigo.jp",
  "jellybean.jp",
  "kikirara.jp",
  "kill.jp",
  "kilo.jp",
  "kuron.jp",
  "littlestar.jp",
  "lolipopmc.jp",
  "lolitapunk.jp",
  "lomo.jp",
  "lovepop.jp",
  "lovesick.jp",
  "main.jp",
  "mods.jp",
  "mond.jp",
  "mongolian.jp",
  "moo.jp",
  "namaste.jp",
  "nikita.jp",
  "nobushi.jp",
  "noor.jp",
  "oops.jp",
  "parallel.jp",
  "parasite.jp",
  "pecori.jp",
  "peewee.jp",
  "penne.jp",
  "pepper.jp",
  "perma.jp",
  "pigboat.jp",
  "pinoko.jp",
  "punyu.jp",
  "pupu.jp",
  "pussycat.jp",
  "pya.jp",
  "raindrop.jp",
  "readymade.jp",
  "sadist.jp",
  "schoolbus.jp",
  "secret.jp",
  "staba.jp",
  "stripper.jp",
  "sub.jp",
  "sunnyday.jp",
  "thick.jp",
  "tonkotsu.jp",
  "under.jp",
  "upper.jp",
  "velvet.jp",
  "verse.jp",
  "versus.jp",
  "vivian.jp",
  "watson.jp",
  "weblike.jp",
  "whitesnow.jp",
  "zombie.jp",
  "heteml.net",
  "cloudapps.digital",
  "london.cloudapps.digital",
  "pymnt.uk",
  "homeoffice.gov.uk",
  "ro.im",
  "goip.de",
  "run.app",
  "a.run.app",
  "web.app",
  "*.0emm.com",
  "appspot.com",
  "*.r.appspot.com",
  "codespot.com",
  "googleapis.com",
  "googlecode.com",
  "pagespeedmobilizer.com",
  "publishproxy.com",
  "withgoogle.com",
  "withyoutube.com",
  "*.gateway.dev",
  "cloud.goog",
  "translate.goog",
  "*.usercontent.goog",
  "cloudfunctions.net",
  "blogspot.ae",
  "blogspot.al",
  "blogspot.am",
  "blogspot.ba",
  "blogspot.be",
  "blogspot.bg",
  "blogspot.bj",
  "blogspot.ca",
  "blogspot.cf",
  "blogspot.ch",
  "blogspot.cl",
  "blogspot.co.at",
  "blogspot.co.id",
  "blogspot.co.il",
  "blogspot.co.ke",
  "blogspot.co.nz",
  "blogspot.co.uk",
  "blogspot.co.za",
  "blogspot.com",
  "blogspot.com.ar",
  "blogspot.com.au",
  "blogspot.com.br",
  "blogspot.com.by",
  "blogspot.com.co",
  "blogspot.com.cy",
  "blogspot.com.ee",
  "blogspot.com.eg",
  "blogspot.com.es",
  "blogspot.com.mt",
  "blogspot.com.ng",
  "blogspot.com.tr",
  "blogspot.com.uy",
  "blogspot.cv",
  "blogspot.cz",
  "blogspot.de",
  "blogspot.dk",
  "blogspot.fi",
  "blogspot.fr",
  "blogspot.gr",
  "blogspot.hk",
  "blogspot.hr",
  "blogspot.hu",
  "blogspot.ie",
  "blogspot.in",
  "blogspot.is",
  "blogspot.it",
  "blogspot.jp",
  "blogspot.kr",
  "blogspot.li",
  "blogspot.lt",
  "blogspot.lu",
  "blogspot.md",
  "blogspot.mk",
  "blogspot.mr",
  "blogspot.mx",
  "blogspot.my",
  "blogspot.nl",
  "blogspot.no",
  "blogspot.pe",
  "blogspot.pt",
  "blogspot.qa",
  "blogspot.re",
  "blogspot.ro",
  "blogspot.rs",
  "blogspot.ru",
  "blogspot.se",
  "blogspot.sg",
  "blogspot.si",
  "blogspot.sk",
  "blogspot.sn",
  "blogspot.td",
  "blogspot.tw",
  "blogspot.ug",
  "blogspot.vn",
  "goupile.fr",
  "gov.nl",
  "awsmppl.com",
  "günstigbestellen.de",
  "günstigliefern.de",
  "fin.ci",
  "free.hr",
  "caa.li",
  "ua.rs",
  "conf.se",
  "hs.zone",
  "hs.run",
  "hashbang.sh",
  "hasura.app",
  "hasura-app.io",
  "pages.it.hs-heilbronn.de",
  "hepforge.org",
  "herokuapp.com",
  "herokussl.com",
  "ravendb.cloud",
  "myravendb.com",
  "ravendb.community",
  "ravendb.me",
  "development.run",
  "ravendb.run",
  "homesklep.pl",
  "secaas.hk",
  "hoplix.shop",
  "orx.biz",
  "biz.gl",
  "col.ng",
  "firm.ng",
  "gen.ng",
  "ltd.ng",
  "ngo.ng",
  "edu.scot",
  "sch.so",
  "hostyhosting.io",
  "häkkinen.fi",
  "*.moonscale.io",
  "moonscale.net",
  "iki.fi",
  "ibxos.it",
  "iliadboxos.it",
  "impertrixcdn.com",
  "impertrix.com",
  "smushcdn.com",
  "wphostedmail.com",
  "wpmucdn.com",
  "tempurl.host",
  "wpmudev.host",
  "dyn-berlin.de",
  "in-berlin.de",
  "in-brb.de",
  "in-butter.de",
  "in-dsl.de",
  "in-dsl.net",
  "in-dsl.org",
  "in-vpn.de",
  "in-vpn.net",
  "in-vpn.org",
  "biz.at",
  "info.at",
  "info.cx",
  "ac.leg.br",
  "al.leg.br",
  "am.leg.br",
  "ap.leg.br",
  "ba.leg.br",
  "ce.leg.br",
  "df.leg.br",
  "es.leg.br",
  "go.leg.br",
  "ma.leg.br",
  "mg.leg.br",
  "ms.leg.br",
  "mt.leg.br",
  "pa.leg.br",
  "pb.leg.br",
  "pe.leg.br",
  "pi.leg.br",
  "pr.leg.br",
  "rj.leg.br",
  "rn.leg.br",
  "ro.leg.br",
  "rr.leg.br",
  "rs.leg.br",
  "sc.leg.br",
  "se.leg.br",
  "sp.leg.br",
  "to.leg.br",
  "pixolino.com",
  "na4u.ru",
  "iopsys.se",
  "ipifony.net",
  "iservschule.de",
  "mein-iserv.de",
  "schulplattform.de",
  "schulserver.de",
  "test-iserv.de",
  "iserv.dev",
  "iobb.net",
  "mel.cloudlets.com.au",
  "cloud.interhostsolutions.be",
  "users.scale.virtualcloud.com.br",
  "mycloud.by",
  "alp1.ae.flow.ch",
  "appengine.flow.ch",
  "es-1.axarnet.cloud",
  "diadem.cloud",
  "vip.jelastic.cloud",
  "jele.cloud",
  "it1.eur.aruba.jenv-aruba.cloud",
  "it1.jenv-aruba.cloud",
  "keliweb.cloud",
  "cs.keliweb.cloud",
  "oxa.cloud",
  "tn.oxa.cloud",
  "uk.oxa.cloud",
  "primetel.cloud",
  "uk.primetel.cloud",
  "ca.reclaim.cloud",
  "uk.reclaim.cloud",
  "us.reclaim.cloud",
  "ch.trendhosting.cloud",
  "de.trendhosting.cloud",
  "jele.club",
  "amscompute.com",
  "clicketcloud.com",
  "dopaas.com",
  "hidora.com",
  "paas.hosted-by-previder.com",
  "rag-cloud.hosteur.com",
  "rag-cloud-ch.hosteur.com",
  "jcloud.ik-server.com",
  "jcloud-ver-jpc.ik-server.com",
  "demo.jelastic.com",
  "kilatiron.com",
  "paas.massivegrid.com",
  "jed.wafaicloud.com",
  "lon.wafaicloud.com",
  "ryd.wafaicloud.com",
  "j.scaleforce.com.cy",
  "jelastic.dogado.eu",
  "fi.cloudplatform.fi",
  "demo.datacenter.fi",
  "paas.datacenter.fi",
  "jele.host",
  "mircloud.host",
  "paas.beebyte.io",
  "sekd1.beebyteapp.io",
  "jele.io",
  "cloud-fr1.unispace.io",
  "jc.neen.it",
  "cloud.jelastic.open.tim.it",
  "jcloud.kz",
  "upaas.kazteleport.kz",
  "cloudjiffy.net",
  "fra1-de.cloudjiffy.net",
  "west1-us.cloudjiffy.net",
  "jls-sto1.elastx.net",
  "jls-sto2.elastx.net",
  "jls-sto3.elastx.net",
  "faststacks.net",
  "fr-1.paas.massivegrid.net",
  "lon-1.paas.massivegrid.net",
  "lon-2.paas.massivegrid.net",
  "ny-1.paas.massivegrid.net",
  "ny-2.paas.massivegrid.net",
  "sg-1.paas.massivegrid.net",
  "jelastic.saveincloud.net",
  "nordeste-idc.saveincloud.net",
  "j.scaleforce.net",
  "jelastic.tsukaeru.net",
  "sdscloud.pl",
  "unicloud.pl",
  "mircloud.ru",
  "jelastic.regruhosting.ru",
  "enscaled.sg",
  "jele.site",
  "jelastic.team",
  "orangecloud.tn",
  "j.layershift.co.uk",
  "phx.enscaled.us",
  "mircloud.us",
  "myjino.ru",
  "*.hosting.myjino.ru",
  "*.landing.myjino.ru",
  "*.spectrum.myjino.ru",
  "*.vps.myjino.ru",
  "jotelulu.cloud",
  "*.triton.zone",
  "*.cns.joyent.com",
  "js.org",
  "kaas.gg",
  "khplay.nl",
  "ktistory.com",
  "kapsi.fi",
  "keymachine.de",
  "kinghost.net",
  "uni5.net",
  "knightpoint.systems",
  "koobin.events",
  "oya.to",
  "kuleuven.cloud",
  "ezproxy.kuleuven.be",
  "co.krd",
  "edu.krd",
  "krellian.net",
  "webthings.io",
  "git-repos.de",
  "lcube-server.de",
  "svn-repos.de",
  "leadpages.co",
  "lpages.co",
  "lpusercontent.com",
  "lelux.site",
  "co.business",
  "co.education",
  "co.events",
  "co.financial",
  "co.network",
  "co.place",
  "co.technology",
  "app.lmpm.com",
  "linkyard.cloud",
  "linkyard-cloud.ch",
  "members.linode.com",
  "*.nodebalancer.linode.com",
  "*.linodeobjects.com",
  "ip.linodeusercontent.com",
  "we.bs",
  "*.user.localcert.dev",
  "localzone.xyz",
  "loginline.app",
  "loginline.dev",
  "loginline.io",
  "loginline.services",
  "loginline.site",
  "servers.run",
  "lohmus.me",
  "krasnik.pl",
  "leczna.pl",
  "lubartow.pl",
  "lublin.pl",
  "poniatowa.pl",
  "swidnik.pl",
  "glug.org.uk",
  "lug.org.uk",
  "lugs.org.uk",
  "barsy.bg",
  "barsy.co.uk",
  "barsyonline.co.uk",
  "barsycenter.com",
  "barsyonline.com",
  "barsy.club",
  "barsy.de",
  "barsy.eu",
  "barsy.in",
  "barsy.info",
  "barsy.io",
  "barsy.me",
  "barsy.menu",
  "barsy.mobi",
  "barsy.net",
  "barsy.online",
  "barsy.org",
  "barsy.pro",
  "barsy.pub",
  "barsy.ro",
  "barsy.shop",
  "barsy.site",
  "barsy.support",
  "barsy.uk",
  "*.magentosite.cloud",
  "mayfirst.info",
  "mayfirst.org",
  "hb.cldmail.ru",
  "cn.vu",
  "mazeplay.com",
  "mcpe.me",
  "mcdir.me",
  "mcdir.ru",
  "mcpre.ru",
  "vps.mcdir.ru",
  "mediatech.by",
  "mediatech.dev",
  "hra.health",
  "miniserver.com",
  "memset.net",
  "messerli.app",
  "*.cloud.metacentrum.cz",
  "custom.metacentrum.cz",
  "flt.cloud.muni.cz",
  "usr.cloud.muni.cz",
  "meteorapp.com",
  "eu.meteorapp.com",
  "co.pl",
  "*.azurecontainer.io",
  "azurewebsites.net",
  "azure-mobile.net",
  "cloudapp.net",
  "azurestaticapps.net",
  "1.azurestaticapps.net",
  "centralus.azurestaticapps.net",
  "eastasia.azurestaticapps.net",
  "eastus2.azurestaticapps.net",
  "westeurope.azurestaticapps.net",
  "westus2.azurestaticapps.net",
  "csx.cc",
  "mintere.site",
  "forte.id",
  "mozilla-iot.org",
  "bmoattachments.org",
  "net.ru",
  "org.ru",
  "pp.ru",
  "hostedpi.com",
  "customer.mythic-beasts.com",
  "caracal.mythic-beasts.com",
  "fentiger.mythic-beasts.com",
  "lynx.mythic-beasts.com",
  "ocelot.mythic-beasts.com",
  "oncilla.mythic-beasts.com",
  "onza.mythic-beasts.com",
  "sphinx.mythic-beasts.com",
  "vs.mythic-beasts.com",
  "x.mythic-beasts.com",
  "yali.mythic-beasts.com",
  "cust.retrosnub.co.uk",
  "ui.nabu.casa",
  "pony.club",
  "of.fashion",
  "in.london",
  "of.london",
  "from.marketing",
  "with.marketing",
  "for.men",
  "repair.men",
  "and.mom",
  "for.mom",
  "for.one",
  "under.one",
  "for.sale",
  "that.win",
  "from.work",
  "to.work",
  "cloud.nospamproxy.com",
  "netlify.app",
  "4u.com",
  "ngrok.io",
  "nh-serv.co.uk",
  "nfshost.com",
  "*.developer.app",
  "noop.app",
  "*.northflank.app",
  "*.build.run",
  "*.code.run",
  "*.database.run",
  "*.migration.run",
  "noticeable.news",
  "dnsking.ch",
  "mypi.co",
  "n4t.co",
  "001www.com",
  "ddnslive.com",
  "myiphost.com",
  "forumz.info",
  "16-b.it",
  "32-b.it",
  "64-b.it",
  "soundcast.me",
  "tcp4.me",
  "dnsup.net",
  "hicam.net",
  "now-dns.net",
  "ownip.net",
  "vpndns.net",
  "dynserv.org",
  "now-dns.org",
  "x443.pw",
  "now-dns.top",
  "ntdll.top",
  "freeddns.us",
  "crafting.xyz",
  "zapto.xyz",
  "nsupdate.info",
  "nerdpol.ovh",
  "blogsyte.com",
  "brasilia.me",
  "cable-modem.org",
  "ciscofreak.com",
  "collegefan.org",
  "couchpotatofries.org",
  "damnserver.com",
  "ddns.me",
  "ditchyourip.com",
  "dnsfor.me",
  "dnsiskinky.com",
  "dvrcam.info",
  "dynns.com",
  "eating-organic.net",
  "fantasyleague.cc",
  "geekgalaxy.com",
  "golffan.us",
  "health-carereform.com",
  "homesecuritymac.com",
  "homesecuritypc.com",
  "hopto.me",
  "ilovecollege.info",
  "loginto.me",
  "mlbfan.org",
  "mmafan.biz",
  "myactivedirectory.com",
  "mydissent.net",
  "myeffect.net",
  "mymediapc.net",
  "mypsx.net",
  "mysecuritycamera.com",
  "mysecuritycamera.net",
  "mysecuritycamera.org",
  "net-freaks.com",
  "nflfan.org",
  "nhlfan.net",
  "no-ip.ca",
  "no-ip.co.uk",
  "no-ip.net",
  "noip.us",
  "onthewifi.com",
  "pgafan.net",
  "point2this.com",
  "pointto.us",
  "privatizehealthinsurance.net",
  "quicksytes.com",
  "read-books.org",
  "securitytactics.com",
  "serveexchange.com",
  "servehumour.com",
  "servep2p.com",
  "servesarcasm.com",
  "stufftoread.com",
  "ufcfan.org",
  "unusualperson.com",
  "workisboring.com",
  "3utilities.com",
  "bounceme.net",
  "ddns.net",
  "ddnsking.com",
  "gotdns.ch",
  "hopto.org",
  "myftp.biz",
  "myftp.org",
  "myvnc.com",
  "no-ip.biz",
  "no-ip.info",
  "no-ip.org",
  "noip.me",
  "redirectme.net",
  "servebeer.com",
  "serveblog.net",
  "servecounterstrike.com",
  "serveftp.com",
  "servegame.com",
  "servehalflife.com",
  "servehttp.com",
  "serveirc.com",
  "serveminecraft.net",
  "servemp3.com",
  "servepics.com",
  "servequake.com",
  "sytes.net",
  "webhop.me",
  "zapto.org",
  "stage.nodeart.io",
  "pcloud.host",
  "nyc.mn",
  "static.observableusercontent.com",
  "cya.gg",
  "omg.lol",
  "cloudycluster.net",
  "omniwe.site",
  "service.one",
  "nid.io",
  "opensocial.site",
  "opencraft.hosting",
  "orsites.com",
  "operaunite.com",
  "tech.orange",
  "authgear-staging.com",
  "authgearapps.com",
  "skygearapp.com",
  "outsystemscloud.com",
  "*.webpaas.ovh.net",
  "*.hosting.ovh.net",
  "ownprovider.com",
  "own.pm",
  "*.owo.codes",
  "ox.rs",
  "oy.lc",
  "pgfog.com",
  "pagefrontapp.com",
  "pagexl.com",
  "*.paywhirl.com",
  "bar0.net",
  "bar1.net",
  "bar2.net",
  "rdv.to",
  "art.pl",
  "gliwice.pl",
  "krakow.pl",
  "poznan.pl",
  "wroc.pl",
  "zakopane.pl",
  "pantheonsite.io",
  "gotpantheon.com",
  "mypep.link",
  "perspecta.cloud",
  "lk3.ru",
  "on-web.fr",
  "bc.platform.sh",
  "ent.platform.sh",
  "eu.platform.sh",
  "us.platform.sh",
  "*.platformsh.site",
  "*.tst.site",
  "platter-app.com",
  "platter-app.dev",
  "platterp.us",
  "pdns.page",
  "plesk.page",
  "pleskns.com",
  "dyn53.io",
  "onporter.run",
  "co.bn",
  "postman-echo.com",
  "pstmn.io",
  "mock.pstmn.io",
  "httpbin.org",
  "prequalifyme.today",
  "xen.prgmr.com",
  "priv.at",
  "prvcy.page",
  "*.dweb.link",
  "protonet.io",
  "chirurgiens-dentistes-en-france.fr",
  "byen.site",
  "pubtls.org",
  "pythonanywhere.com",
  "eu.pythonanywhere.com",
  "qoto.io",
  "qualifioapp.com",
  "qbuser.com",
  "cloudsite.builders",
  "instances.spawn.cc",
  "instantcloud.cn",
  "ras.ru",
  "qa2.com",
  "qcx.io",
  "*.sys.qcx.io",
  "dev-myqnapcloud.com",
  "alpha-myqnapcloud.com",
  "myqnapcloud.com",
  "*.quipelements.com",
  "vapor.cloud",
  "vaporcloud.io",
  "rackmaze.com",
  "rackmaze.net",
  "g.vbrplsbx.io",
  "*.on-k3s.io",
  "*.on-rancher.cloud",
  "*.on-rio.io",
  "readthedocs.io",
  "rhcloud.com",
  "app.render.com",
  "onrender.com",
  "repl.co",
  "id.repl.co",
  "repl.run",
  "resindevice.io",
  "devices.resinstaging.io",
  "hzc.io",
  "wellbeingzone.eu",
  "wellbeingzone.co.uk",
  "adimo.co.uk",
  "itcouldbewor.se",
  "git-pages.rit.edu",
  "rocky.page",
  "биз.рус",
  "ком.рус",
  "крым.рус",
  "мир.рус",
  "мск.рус",
  "орг.рус",
  "самара.рус",
  "сочи.рус",
  "спб.рус",
  "я.рус",
  "*.builder.code.com",
  "*.dev-builder.code.com",
  "*.stg-builder.code.com",
  "sandcats.io",
  "logoip.de",
  "logoip.com",
  "fr-par-1.baremetal.scw.cloud",
  "fr-par-2.baremetal.scw.cloud",
  "nl-ams-1.baremetal.scw.cloud",
  "fnc.fr-par.scw.cloud",
  "functions.fnc.fr-par.scw.cloud",
  "k8s.fr-par.scw.cloud",
  "nodes.k8s.fr-par.scw.cloud",
  "s3.fr-par.scw.cloud",
  "s3-website.fr-par.scw.cloud",
  "whm.fr-par.scw.cloud",
  "priv.instances.scw.cloud",
  "pub.instances.scw.cloud",
  "k8s.scw.cloud",
  "k8s.nl-ams.scw.cloud",
  "nodes.k8s.nl-ams.scw.cloud",
  "s3.nl-ams.scw.cloud",
  "s3-website.nl-ams.scw.cloud",
  "whm.nl-ams.scw.cloud",
  "k8s.pl-waw.scw.cloud",
  "nodes.k8s.pl-waw.scw.cloud",
  "s3.pl-waw.scw.cloud",
  "s3-website.pl-waw.scw.cloud",
  "scalebook.scw.cloud",
  "smartlabeling.scw.cloud",
  "dedibox.fr",
  "schokokeks.net",
  "gov.scot",
  "service.gov.scot",
  "scrysec.com",
  "firewall-gateway.com",
  "firewall-gateway.de",
  "my-gateway.de",
  "my-router.de",
  "spdns.de",
  "spdns.eu",
  "firewall-gateway.net",
  "my-firewall.org",
  "myfirewall.org",
  "spdns.org",
  "seidat.net",
  "sellfy.store",
  "senseering.net",
  "minisite.ms",
  "magnet.page",
  "biz.ua",
  "co.ua",
  "pp.ua",
  "shiftcrypto.dev",
  "shiftcrypto.io",
  "shiftedit.io",
  "myshopblocks.com",
  "myshopify.com",
  "shopitsite.com",
  "shopware.store",
  "mo-siemens.io",
  "1kapp.com",
  "appchizi.com",
  "applinzi.com",
  "sinaapp.com",
  "vipsinaapp.com",
  "siteleaf.net",
  "bounty-full.com",
  "alpha.bounty-full.com",
  "beta.bounty-full.com",
  "small-web.org",
  "vp4.me",
  "try-snowplow.com",
  "srht.site",
  "stackhero-network.com",
  "musician.io",
  "novecore.site",
  "static.land",
  "dev.static.land",
  "sites.static.land",
  "storebase.store",
  "vps-host.net",
  "atl.jelastic.vps-host.net",
  "njs.jelastic.vps-host.net",
  "ric.jelastic.vps-host.net",
  "playstation-cloud.com",
  "apps.lair.io",
  "*.stolos.io",
  "spacekit.io",
  "customer.speedpartner.de",
  "myspreadshop.at",
  "myspreadshop.com.au",
  "myspreadshop.be",
  "myspreadshop.ca",
  "myspreadshop.ch",
  "myspreadshop.com",
  "myspreadshop.de",
  "myspreadshop.dk",
  "myspreadshop.es",
  "myspreadshop.fi",
  "myspreadshop.fr",
  "myspreadshop.ie",
  "myspreadshop.it",
  "myspreadshop.net",
  "myspreadshop.nl",
  "myspreadshop.no",
  "myspreadshop.pl",
  "myspreadshop.se",
  "myspreadshop.co.uk",
  "api.stdlib.com",
  "storj.farm",
  "utwente.io",
  "soc.srcf.net",
  "user.srcf.net",
  "temp-dns.com",
  "supabase.co",
  "supabase.in",
  "supabase.net",
  "su.paba.se",
  "*.s5y.io",
  "*.sensiosite.cloud",
  "syncloud.it",
  "dscloud.biz",
  "direct.quickconnect.cn",
  "dsmynas.com",
  "familyds.com",
  "diskstation.me",
  "dscloud.me",
  "i234.me",
  "myds.me",
  "synology.me",
  "dscloud.mobi",
  "dsmynas.net",
  "familyds.net",
  "dsmynas.org",
  "familyds.org",
  "vpnplus.to",
  "direct.quickconnect.to",
  "tabitorder.co.il",
  "taifun-dns.de",
  "beta.tailscale.net",
  "ts.net",
  "gda.pl",
  "gdansk.pl",
  "gdynia.pl",
  "med.pl",
  "sopot.pl",
  "site.tb-hosting.com",
  "edugit.io",
  "s3.teckids.org",
  "telebit.app",
  "telebit.io",
  "*.telebit.xyz",
  "gwiddle.co.uk",
  "*.firenet.ch",
  "*.svc.firenet.ch",
  "reservd.com",
  "thingdustdata.com",
  "cust.dev.thingdust.io",
  "cust.disrec.thingdust.io",
  "cust.prod.thingdust.io",
  "cust.testing.thingdust.io",
  "reservd.dev.thingdust.io",
  "reservd.disrec.thingdust.io",
  "reservd.testing.thingdust.io",
  "tickets.io",
  "arvo.network",
  "azimuth.network",
  "tlon.network",
  "torproject.net",
  "pages.torproject.net",
  "bloxcms.com",
  "townnews-staging.com",
  "tbits.me",
  "12hp.at",
  "2ix.at",
  "4lima.at",
  "lima-city.at",
  "12hp.ch",
  "2ix.ch",
  "4lima.ch",
  "lima-city.ch",
  "trafficplex.cloud",
  "de.cool",
  "12hp.de",
  "2ix.de",
  "4lima.de",
  "lima-city.de",
  "1337.pictures",
  "clan.rip",
  "lima-city.rocks",
  "webspace.rocks",
  "lima.zone",
  "*.transurl.be",
  "*.transurl.eu",
  "*.transurl.nl",
  "site.transip.me",
  "tuxfamily.org",
  "dd-dns.de",
  "diskstation.eu",
  "diskstation.org",
  "dray-dns.de",
  "draydns.de",
  "dyn-vpn.de",
  "dynvpn.de",
  "mein-vigor.de",
  "my-vigor.de",
  "my-wan.de",
  "syno-ds.de",
  "synology-diskstation.de",
  "synology-ds.de",
  "typedream.app",
  "pro.typeform.com",
  "uber.space",
  "*.uberspace.de",
  "hk.com",
  "hk.org",
  "ltd.hk",
  "inc.hk",
  "name.pm",
  "sch.tf",
  "biz.wf",
  "sch.wf",
  "org.yt",
  "virtualuser.de",
  "virtual-user.de",
  "upli.io",
  "urown.cloud",
  "dnsupdate.info",
  "lib.de.us",
  "2038.io",
  "vercel.app",
  "vercel.dev",
  "now.sh",
  "router.management",
  "v-info.info",
  "voorloper.cloud",
  "neko.am",
  "nyaa.am",
  "be.ax",
  "cat.ax",
  "es.ax",
  "eu.ax",
  "gg.ax",
  "mc.ax",
  "us.ax",
  "xy.ax",
  "nl.ci",
  "xx.gl",
  "app.gp",
  "blog.gt",
  "de.gt",
  "to.gt",
  "be.gy",
  "cc.hn",
  "blog.kg",
  "io.kg",
  "jp.kg",
  "tv.kg",
  "uk.kg",
  "us.kg",
  "de.ls",
  "at.md",
  "de.md",
  "jp.md",
  "to.md",
  "indie.porn",
  "vxl.sh",
  "ch.tc",
  "me.tc",
  "we.tc",
  "nyan.to",
  "at.vg",
  "blog.vu",
  "dev.vu",
  "me.vu",
  "v.ua",
  "*.vultrobjects.com",
  "wafflecell.com",
  "*.webhare.dev",
  "reserve-online.net",
  "reserve-online.com",
  "bookonline.app",
  "hotelwithflight.com",
  "wedeploy.io",
  "wedeploy.me",
  "wedeploy.sh",
  "remotewd.com",
  "pages.wiardweb.com",
  "wmflabs.org",
  "toolforge.org",
  "wmcloud.org",
  "panel.gg",
  "daemon.panel.gg",
  "messwithdns.com",
  "woltlab-demo.com",
  "myforum.community",
  "community-pro.de",
  "diskussionsbereich.de",
  "community-pro.net",
  "meinforum.net",
  "affinitylottery.org.uk",
  "raffleentry.org.uk",
  "weeklylottery.org.uk",
  "wpenginepowered.com",
  "js.wpenginepowered.com",
  "wixsite.com",
  "editorx.io",
  "half.host",
  "xnbay.com",
  "u2.xnbay.com",
  "u2-local.xnbay.com",
  "cistron.nl",
  "demon.nl",
  "xs4all.space",
  "yandexcloud.net",
  "storage.yandexcloud.net",
  "website.yandexcloud.net",
  "official.academy",
  "yolasite.com",
  "ybo.faith",
  "yombo.me",
  "homelink.one",
  "ybo.party",
  "ybo.review",
  "ybo.science",
  "ybo.trade",
  "ynh.fr",
  "nohost.me",
  "noho.st",
  "za.net",
  "za.org",
  "bss.design",
  "basicserver.io",
  "virtualserver.io",
  "enterprisecloud.nu"
];
(function(t) {
  var e = Ch, n = {};
  n.rules = a_.map(function(o) {
    return {
      rule: o,
      suffix: o.replace(/^(\*\.|\!)/, ""),
      punySuffix: -1,
      wildcard: o.charAt(0) === "*",
      exception: o.charAt(0) === "!"
    };
  }), n.endsWith = function(o, r) {
    return o.indexOf(r, o.length - r.length) !== -1;
  }, n.findRule = function(o) {
    var r = e.toASCII(o);
    return n.rules.reduce(function(i, a) {
      return a.punySuffix === -1 && (a.punySuffix = e.toASCII(a.suffix)), !n.endsWith(r, "." + a.punySuffix) && r !== a.punySuffix ? i : a;
    }, null);
  }, t.errorCodes = {
    DOMAIN_TOO_SHORT: "Domain name too short.",
    DOMAIN_TOO_LONG: "Domain name too long. It should be no more than 255 chars.",
    LABEL_STARTS_WITH_DASH: "Domain name label can not start with a dash.",
    LABEL_ENDS_WITH_DASH: "Domain name label can not end with a dash.",
    LABEL_TOO_LONG: "Domain name label should be at most 63 chars long.",
    LABEL_TOO_SHORT: "Domain name label should be at least 1 character long.",
    LABEL_INVALID_CHARS: "Domain name label can only contain alphanumeric characters or dashes."
  }, n.validate = function(o) {
    var r = e.toASCII(o);
    if (r.length < 1)
      return "DOMAIN_TOO_SHORT";
    if (r.length > 255)
      return "DOMAIN_TOO_LONG";
    for (var i = r.split("."), a, l = 0; l < i.length; ++l) {
      if (a = i[l], !a.length)
        return "LABEL_TOO_SHORT";
      if (a.length > 63)
        return "LABEL_TOO_LONG";
      if (a.charAt(0) === "-")
        return "LABEL_STARTS_WITH_DASH";
      if (a.charAt(a.length - 1) === "-")
        return "LABEL_ENDS_WITH_DASH";
      if (!/^[a-z0-9\-]+$/.test(a))
        return "LABEL_INVALID_CHARS";
    }
  }, t.parse = function(o) {
    if (typeof o != "string")
      throw new TypeError("Domain name must be a string.");
    var r = o.slice(0).toLowerCase();
    r.charAt(r.length - 1) === "." && (r = r.slice(0, r.length - 1));
    var i = n.validate(r);
    if (i)
      return {
        input: o,
        error: {
          message: t.errorCodes[i],
          code: i
        }
      };
    var a = {
      input: o,
      tld: null,
      sld: null,
      domain: null,
      subdomain: null,
      listed: !1
    }, l = r.split(".");
    if (l[l.length - 1] === "local")
      return a;
    var u = function() {
      return /xn--/.test(r) && (a.domain && (a.domain = e.toASCII(a.domain)), a.subdomain && (a.subdomain = e.toASCII(a.subdomain))), a;
    }, c = n.findRule(r);
    if (!c)
      return l.length < 2 ? a : (a.tld = l.pop(), a.sld = l.pop(), a.domain = [a.sld, a.tld].join("."), l.length && (a.subdomain = l.pop()), u());
    a.listed = !0;
    var d = c.suffix.split("."), p = l.slice(0, l.length - d.length);
    return c.exception && p.push(d.shift()), a.tld = d.join("."), !p.length || (c.wildcard && (d.unshift(p.pop()), a.tld = d.join(".")), !p.length) || (a.sld = p.pop(), a.domain = [a.sld, a.tld].join("."), p.length && (a.subdomain = p.join("."))), u();
  }, t.get = function(o) {
    return o && t.parse(o).domain || null;
  }, t.isValid = function(o) {
    var r = t.parse(o);
    return !!(r.domain && r.listed);
  };
})(Dh);
/*!
 * Copyright (c) 2018, Salesforce.com, Inc.
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
const s_ = Dh, sc = [
  "local",
  "example",
  "invalid",
  "localhost",
  "test"
], l_ = ["localhost", "invalid"];
function u_(t, e = {}) {
  const n = t.split("."), o = n[n.length - 1], r = !!e.allowSpecialUseDomain, i = !!e.ignoreError;
  if (r && sc.includes(o)) {
    if (n.length > 1)
      return `${n[n.length - 2]}.${o}`;
    if (l_.includes(o))
      return `${o}`;
  }
  if (!i && sc.includes(o))
    throw new Error(
      `Cookie has domain set to the public suffix "${o}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`
    );
  return s_.get(t);
}
fl.getPublicSuffix = u_;
var gl = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
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
let c_ = class {
  constructor() {
    this.synchronous = !1;
  }
  findCookie(e, n, o, r) {
    throw new Error("findCookie is not implemented");
  }
  findCookies(e, n, o, r) {
    throw new Error("findCookies is not implemented");
  }
  putCookie(e, n) {
    throw new Error("putCookie is not implemented");
  }
  updateCookie(e, n, o) {
    throw new Error("updateCookie is not implemented");
  }
  removeCookie(e, n, o, r) {
    throw new Error("removeCookie is not implemented");
  }
  removeCookies(e, n, o) {
    throw new Error("removeCookies is not implemented");
  }
  removeAllCookies(e) {
    throw new Error("removeAllCookies is not implemented");
  }
  getAllCookies(e) {
    throw new Error(
      "getAllCookies is not implemented (therefore jar cannot be serialized)"
    );
  }
};
gl.Store = c_;
var vl = {}, ji = {};
ji.fromCallback = function(t) {
  return Object.defineProperty(function() {
    if (typeof arguments[arguments.length - 1] == "function") t.apply(this, arguments);
    else
      return new Promise((e, n) => {
        arguments[arguments.length] = (o, r) => {
          if (o) return n(o);
          e(r);
        }, arguments.length++, t.apply(this, arguments);
      });
  }, "name", { value: t.name });
};
ji.fromPromise = function(t) {
  return Object.defineProperty(function() {
    const e = arguments[arguments.length - 1];
    if (typeof e != "function") return t.apply(this, arguments);
    delete arguments[arguments.length - 1], arguments.length--, t.apply(this, arguments).then((n) => e(null, n), e);
  }, "name", { value: t.name });
};
var Ih = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
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
const d_ = fl;
function p_(t, e) {
  const n = d_.getPublicSuffix(t, {
    allowSpecialUseDomain: e
  });
  if (!n)
    return null;
  if (n == t)
    return [t];
  t.slice(-1) == "." && (t = t.slice(0, -1));
  const r = t.slice(0, -(n.length + 1)).split(".").reverse();
  let i = n;
  const a = [i];
  for (; r.length; )
    i = `${r.shift()}.${i}`, a.push(i);
  return a;
}
Ih.permuteDomain = p_;
var yl = {};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
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
function m_(t, e) {
  return e === t || t.indexOf(e) === 0 && (e.substr(-1) === "/" || t.substr(e.length, 1) === "/");
}
yl.pathMatch = m_;
var bi = {};
function zh() {
  try {
    return Vg;
  } catch {
    return null;
  }
}
function h_() {
  return Symbol.for("nodejs.util.inspect.custom");
}
function f_(t) {
  const n = (t.requireUtil || zh)();
  return n ? n.inspect.custom : null;
}
bi.getUtilInspect = function(e, n = {}) {
  const r = (n.requireUtil || zh)();
  return function(a, l, u) {
    return r ? r.inspect(a, l, u) : e(a);
  };
};
bi.getCustomInspectSymbol = function(e = {}) {
  return (e.lookupCustomInspectSymbol || h_)() || f_(e);
};
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
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
const { fromCallback: g_ } = ji, v_ = gl.Store, y_ = Ih.permuteDomain, k_ = yl.pathMatch, { getCustomInspectSymbol: j_, getUtilInspect: b_ } = bi;
let Ba = class extends v_ {
  constructor() {
    super(), this.synchronous = !0, this.idx = /* @__PURE__ */ Object.create(null);
    const e = j_();
    e && (this[e] = this.inspect);
  }
  inspect() {
    return `{ idx: ${{ inspect: b_(Nh) }.inspect(this.idx, !1, 2)} }`;
  }
  findCookie(e, n, o, r) {
    return !this.idx[e] || !this.idx[e][n] ? r(null, void 0) : r(null, this.idx[e][n][o] || null);
  }
  findCookies(e, n, o, r) {
    const i = [];
    if (typeof o == "function" && (r = o, o = !0), !e)
      return r(null, []);
    let a;
    n ? a = function(d) {
      Object.keys(d).forEach((p) => {
        if (k_(n, p)) {
          const h = d[p];
          for (const m in h)
            i.push(h[m]);
        }
      });
    } : a = function(d) {
      for (const p in d) {
        const h = d[p];
        for (const m in h)
          i.push(h[m]);
      }
    };
    const l = y_(e, o) || [e], u = this.idx;
    l.forEach((c) => {
      const d = u[c];
      d && a(d);
    }), r(null, i);
  }
  putCookie(e, n) {
    this.idx[e.domain] || (this.idx[e.domain] = /* @__PURE__ */ Object.create(null)), this.idx[e.domain][e.path] || (this.idx[e.domain][e.path] = /* @__PURE__ */ Object.create(null)), this.idx[e.domain][e.path][e.key] = e, n(null);
  }
  updateCookie(e, n, o) {
    this.putCookie(n, o);
  }
  removeCookie(e, n, o, r) {
    this.idx[e] && this.idx[e][n] && this.idx[e][n][o] && delete this.idx[e][n][o], r(null);
  }
  removeCookies(e, n, o) {
    return this.idx[e] && (n ? delete this.idx[e][n] : delete this.idx[e]), o(null);
  }
  removeAllCookies(e) {
    return this.idx = /* @__PURE__ */ Object.create(null), e(null);
  }
  getAllCookies(e) {
    const n = [], o = this.idx;
    Object.keys(o).forEach((i) => {
      Object.keys(o[i]).forEach((l) => {
        Object.keys(o[i][l]).forEach((c) => {
          c !== null && n.push(o[i][l][c]);
        });
      });
    }), n.sort((i, a) => (i.creationIndex || 0) - (a.creationIndex || 0)), e(null, n);
  }
};
[
  "findCookie",
  "findCookies",
  "putCookie",
  "updateCookie",
  "removeCookie",
  "removeCookies",
  "removeAllCookies",
  "getAllCookies"
].forEach((t) => {
  Ba.prototype[t] = g_(
    Ba.prototype[t]
  );
});
vl.MemoryCookieStore = Ba;
function Nh(t) {
  const e = Object.keys(t);
  if (e.length === 0)
    return "[Object: null prototype] {}";
  let n = `[Object: null prototype] {
`;
  return Object.keys(t).forEach((o, r) => {
    n += x_(o, t[o]), r < e.length - 1 && (n += ","), n += `
`;
  }), n += "}", n;
}
function x_(t, e) {
  const n = "  ";
  let o = `${n}'${t}': [Object: null prototype] {
`;
  return Object.keys(e).forEach((r, i, a) => {
    o += w_(r, e[r]), i < a.length - 1 && (o += ","), o += `
`;
  }), o += `${n}}`, o;
}
function w_(t, e) {
  const n = "    ";
  let o = `${n}'${t}': [Object: null prototype] {
`;
  return Object.keys(e).forEach((r, i, a) => {
    const l = e[r];
    o += `      ${r}: ${l.inspect()}`, i < a.length - 1 && (o += ","), o += `
`;
  }), o += `${n}}`, o;
}
vl.inspectFallback = Nh;
var st = {};
const S_ = Object.prototype.toString;
function Rh(t) {
  return typeof t == "function";
}
function Ph(t) {
  return Ah(t) && t !== "";
}
function C_(t) {
  return Mh(t, Date) && E_(t.getTime());
}
function __(t) {
  return t === "" || t instanceof String && t.toString() === "";
}
function Ah(t) {
  return typeof t == "string" || t instanceof String;
}
function kl(t) {
  return S_.call(t) === "[object Object]";
}
function Mh(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function T_(t) {
  return Ph(t) || kl(t) && "hostname" in t && "pathname" in t && "protocol" in t || Mh(t, URL);
}
function E_(t) {
  return typeof t == "number" && t % 1 === 0;
}
function O_(t, e, n) {
  if (Rh(e) || (n = e, e = null), kl(n) || (n = { Error: "Failed Check" }), !t)
    if (e)
      e(new Ha(n));
    else
      throw new Ha(n);
}
class Ha extends Error {
  constructor(...e) {
    super(...e);
  }
}
st.ParameterError = Ha;
st.isFunction = Rh;
st.isNonEmptyString = Ph;
st.isDate = C_;
st.isEmptyString = __;
st.isString = Ah;
st.isObject = kl;
st.isUrlStringOrObject = T_;
st.validate = O_;
var $_ = "4.1.4";
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
const lc = Ch, D_ = i_, jl = fl, I_ = gl.Store, z_ = vl.MemoryCookieStore, N_ = yl.pathMatch, P = st, R_ = $_, { fromCallback: Fh } = ji, { getCustomInspectSymbol: P_ } = bi, A_ = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, uc = /[\x00-\x1F]/, cc = [`
`, "\r", "\0"], M_ = /[\x20-\x3A\x3C-\x7E]+/, F_ = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, L_ = {
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
}, Ua = 2147483647e3, q_ = 0, dc = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function pc(t) {
  P.validate(P.isNonEmptyString(t), t);
  const e = String(t).toLowerCase();
  return e === "none" || e === "lax" || e === "strict" ? e : null;
}
const _n = Object.freeze({
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
}), B_ = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/, H_ = `
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
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), Lh = new RegExp(`^${H_}$`);
function Va(t, e, n, o) {
  let r = 0;
  for (; r < t.length; ) {
    const i = t.charCodeAt(r);
    if (i <= 47 || i >= 58)
      break;
    r++;
  }
  return r < e || r > n || !o && r != t.length ? null : parseInt(t.substr(0, r), 10);
}
function U_(t) {
  const e = t.split(":"), n = [0, 0, 0];
  if (e.length !== 3)
    return null;
  for (let o = 0; o < 3; o++) {
    const r = o == 2, i = Va(e[o], 1, 2, r);
    if (i === null)
      return null;
    n[o] = i;
  }
  return n;
}
function V_(t) {
  t = String(t).substr(0, 3).toLowerCase();
  const e = L_[t];
  return e >= 0 ? e : null;
}
function gr(t) {
  if (!t)
    return;
  const e = t.split(F_);
  if (!e)
    return;
  let n = null, o = null, r = null, i = null, a = null, l = null;
  for (let u = 0; u < e.length; u++) {
    const c = e[u].trim();
    if (!c.length)
      continue;
    let d;
    if (r === null && (d = U_(c), d)) {
      n = d[0], o = d[1], r = d[2];
      continue;
    }
    if (i === null && (d = Va(c, 1, 2, !0), d !== null)) {
      i = d;
      continue;
    }
    if (a === null && (d = V_(c), d !== null)) {
      a = d;
      continue;
    }
    l === null && (d = Va(c, 2, 4, !0), d !== null && (l = d, l >= 70 && l <= 99 ? l += 1900 : l >= 0 && l <= 69 && (l += 2e3)));
  }
  if (!(i === null || a === null || l === null || r === null || i < 1 || i > 31 || l < 1601 || n > 23 || o > 59 || r > 59))
    return new Date(Date.UTC(l, a, i, n, o, r));
}
function W_(t) {
  return P.validate(P.isDate(t), t), t.toUTCString();
}
function Mo(t) {
  return t == null ? null : (t = t.trim().replace(/^\./, ""), Lh.test(t) && (t = t.replace("[", "").replace("]", "")), lc && /[^\u0001-\u007f]/.test(t) && (t = lc.toASCII(t)), t.toLowerCase());
}
function mc(t, e, n) {
  if (t == null || e == null)
    return null;
  if (n !== !1 && (t = Mo(t), e = Mo(e)), t == e)
    return !0;
  const o = t.lastIndexOf(e);
  return !(o <= 0 || t.length !== e.length + o || t.substr(o - 1, 1) !== "." || B_.test(t));
}
function G_(t) {
  if (!t || t.substr(0, 1) !== "/")
    return "/";
  if (t === "/")
    return t;
  const e = t.lastIndexOf("/");
  return e === 0 ? "/" : t.slice(0, e);
}
function K_(t) {
  if (P.isEmptyString(t)) return t;
  for (let e = 0; e < cc.length; e++) {
    const n = t.indexOf(cc[e]);
    n !== -1 && (t = t.substr(0, n));
  }
  return t;
}
function J_(t, e) {
  t = K_(t), P.validate(P.isString(t), t);
  let n = t.indexOf("=");
  if (e)
    n === 0 && (t = t.substr(1), n = t.indexOf("="));
  else if (n <= 0)
    return;
  let o, r;
  if (n <= 0 ? (o = "", r = t.trim()) : (o = t.substr(0, n).trim(), r = t.substr(n + 1).trim()), uc.test(o) || uc.test(r))
    return;
  const i = new ne();
  return i.key = o, i.value = r, i;
}
function Y_(t, e) {
  if ((!e || typeof e != "object") && (e = {}), P.isEmptyString(t) || !P.isString(t))
    return null;
  t = t.trim();
  const n = t.indexOf(";"), o = n === -1 ? t : t.substr(0, n), r = J_(o, !!e.loose);
  if (!r)
    return;
  if (n === -1)
    return r;
  const i = t.slice(n + 1).trim();
  if (i.length === 0)
    return r;
  const a = i.split(";");
  for (; a.length; ) {
    const l = a.shift().trim();
    if (l.length === 0)
      continue;
    const u = l.indexOf("=");
    let c, d;
    switch (u === -1 ? (c = l, d = null) : (c = l.substr(0, u), d = l.substr(u + 1)), c = c.trim().toLowerCase(), d && (d = d.trim()), c) {
      case "expires":
        if (d) {
          const h = gr(d);
          h && (r.expires = h);
        }
        break;
      case "max-age":
        if (d && /^-?[0-9]+$/.test(d)) {
          const h = parseInt(d, 10);
          r.setMaxAge(h);
        }
        break;
      case "domain":
        if (d) {
          const h = d.trim().replace(/^\./, "");
          h && (r.domain = h.toLowerCase());
        }
        break;
      case "path":
        r.path = d && d[0] === "/" ? d : null;
        break;
      case "secure":
        r.secure = !0;
        break;
      case "httponly":
        r.httpOnly = !0;
        break;
      case "samesite":
        switch (d ? d.toLowerCase() : "") {
          case "strict":
            r.sameSite = "strict";
            break;
          case "lax":
            r.sameSite = "lax";
            break;
          case "none":
            r.sameSite = "none";
            break;
          default:
            r.sameSite = void 0;
            break;
        }
        break;
      default:
        r.extensions = r.extensions || [], r.extensions.push(l);
        break;
    }
  }
  return r;
}
function X_(t) {
  return P.validate(P.isObject(t), t), !t.key.startsWith("__Secure-") || t.secure;
}
function Q_(t) {
  return P.validate(P.isObject(t)), !t.key.startsWith("__Host-") || t.secure && t.hostOnly && t.path != null && t.path === "/";
}
function qh(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch (n) {
    return n;
  }
  return e;
}
function bl(t) {
  if (!t || P.isEmptyString(t))
    return null;
  let e;
  if (typeof t == "string") {
    if (e = qh(t), e instanceof Error)
      return null;
  } else
    e = t;
  const n = new ne();
  for (let o = 0; o < ne.serializableProperties.length; o++) {
    const r = ne.serializableProperties[o];
    e[r] === void 0 || e[r] === To[r] || (r === "expires" || r === "creation" || r === "lastAccessed" ? e[r] === null ? n[r] = null : n[r] = e[r] == "Infinity" ? "Infinity" : new Date(e[r]) : n[r] = e[r]);
  }
  return n;
}
function hc(t, e) {
  P.validate(P.isObject(t), t), P.validate(P.isObject(e), e);
  let n = 0;
  const o = t.path ? t.path.length : 0;
  if (n = (e.path ? e.path.length : 0) - o, n !== 0)
    return n;
  const i = t.creation ? t.creation.getTime() : Ua, a = e.creation ? e.creation.getTime() : Ua;
  return n = i - a, n !== 0 || (n = t.creationIndex - e.creationIndex), n;
}
function fc(t) {
  if (t instanceof Object)
    return t;
  try {
    t = decodeURI(t);
  } catch {
  }
  return D_(t);
}
const To = {
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
class ne {
  constructor(e = {}) {
    const n = P_();
    n && (this[n] = this.inspect), Object.assign(this, To, e), this.creation = this.creation || /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
      configurable: !1,
      enumerable: !1,
      // important for assert.deepEqual checks
      writable: !0,
      value: ++ne.cookiesCreated
    });
  }
  inspect() {
    const e = Date.now(), n = this.hostOnly != null ? this.hostOnly : "?", o = this.creation ? `${e - this.creation.getTime()}ms` : "?", r = this.lastAccessed ? `${e - this.lastAccessed.getTime()}ms` : "?";
    return `Cookie="${this.toString()}; hostOnly=${n}; aAge=${r}; cAge=${o}"`;
  }
  toJSON() {
    const e = {};
    for (const n of ne.serializableProperties)
      this[n] !== To[n] && (n === "expires" || n === "creation" || n === "lastAccessed" ? this[n] === null ? e[n] = null : e[n] = this[n] == "Infinity" ? "Infinity" : this[n].toISOString() : n === "maxAge" ? this[n] !== null && (e[n] = this[n] == 1 / 0 || this[n] == -1 / 0 ? this[n].toString() : this[n]) : this[n] !== To[n] && (e[n] = this[n]));
    return e;
  }
  clone() {
    return bl(this.toJSON());
  }
  validate() {
    if (!A_.test(this.value) || this.expires != 1 / 0 && !(this.expires instanceof Date) && !gr(this.expires) || this.maxAge != null && this.maxAge <= 0 || this.path != null && !M_.test(this.path))
      return !1;
    const e = this.cdomain();
    return !(e && (e.match(/\.$/) || jl.getPublicSuffix(e) == null));
  }
  setExpires(e) {
    e instanceof Date ? this.expires = e : this.expires = gr(e) || "Infinity";
  }
  setMaxAge(e) {
    e === 1 / 0 || e === -1 / 0 ? this.maxAge = e.toString() : this.maxAge = e;
  }
  cookieString() {
    let e = this.value;
    return e == null && (e = ""), this.key === "" ? e : `${this.key}=${e}`;
  }
  // gives Set-Cookie header format
  toString() {
    let e = this.cookieString();
    if (this.expires != 1 / 0 && (this.expires instanceof Date ? e += `; Expires=${W_(this.expires)}` : e += `; Expires=${this.expires}`), this.maxAge != null && this.maxAge != 1 / 0 && (e += `; Max-Age=${this.maxAge}`), this.domain && !this.hostOnly && (e += `; Domain=${this.domain}`), this.path && (e += `; Path=${this.path}`), this.secure && (e += "; Secure"), this.httpOnly && (e += "; HttpOnly"), this.sameSite && this.sameSite !== "none") {
      const n = ne.sameSiteCanonical[this.sameSite.toLowerCase()];
      e += `; SameSite=${n || this.sameSite}`;
    }
    return this.extensions && this.extensions.forEach((n) => {
      e += `; ${n}`;
    }), e;
  }
  // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  // S5.3 says to give the "latest representable date" for which we use Infinity
  // For "expired" we use 0
  TTL(e) {
    if (this.maxAge != null)
      return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
    let n = this.expires;
    return n != 1 / 0 ? (n instanceof Date || (n = gr(n) || 1 / 0), n == 1 / 0 ? 1 / 0 : n.getTime() - (e || Date.now())) : 1 / 0;
  }
  // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  expiryTime(e) {
    if (this.maxAge != null) {
      const n = e || this.creation || /* @__PURE__ */ new Date(), o = this.maxAge <= 0 ? -1 / 0 : this.maxAge * 1e3;
      return n.getTime() + o;
    }
    return this.expires == 1 / 0 ? 1 / 0 : this.expires.getTime();
  }
  // expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere), except it returns a Date
  expiryDate(e) {
    const n = this.expiryTime(e);
    return n == 1 / 0 ? new Date(Ua) : n == -1 / 0 ? new Date(q_) : new Date(n);
  }
  // This replaces the "persistent-flag" parts of S5.3 step 3
  isPersistent() {
    return this.maxAge != null || this.expires != 1 / 0;
  }
  // Mostly S5.1.2 and S5.2.3:
  canonicalizedDomain() {
    return this.domain == null ? null : Mo(this.domain);
  }
  cdomain() {
    return this.canonicalizedDomain();
  }
}
ne.cookiesCreated = 0;
ne.parse = Y_;
ne.fromJSON = bl;
ne.serializableProperties = Object.keys(To);
ne.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
ne.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};
function gc(t) {
  if (t != null) {
    const e = t.toLowerCase();
    switch (e) {
      case _n.STRICT:
      case _n.SILENT:
      case _n.DISABLED:
        return e;
    }
  }
  return _n.SILENT;
}
class Ze {
  constructor(e, n = { rejectPublicSuffixes: !0 }) {
    typeof n == "boolean" && (n = { rejectPublicSuffixes: n }), P.validate(P.isObject(n), n), this.rejectPublicSuffixes = n.rejectPublicSuffixes, this.enableLooseMode = !!n.looseMode, this.allowSpecialUseDomain = typeof n.allowSpecialUseDomain == "boolean" ? n.allowSpecialUseDomain : !0, this.store = e || new z_(), this.prefixSecurity = gc(n.prefixSecurity), this._cloneSync = bt("clone"), this._importCookiesSync = bt("_importCookies"), this.getCookiesSync = bt("getCookies"), this.getCookieStringSync = bt("getCookieString"), this.getSetCookieStringsSync = bt("getSetCookieStrings"), this.removeAllCookiesSync = bt("removeAllCookies"), this.setCookieSync = bt("setCookie"), this.serializeSync = bt("serialize");
  }
  setCookie(e, n, o, r) {
    P.validate(P.isUrlStringOrObject(n), r, o);
    let i;
    if (P.isFunction(n))
      return r = n, r(new Error("No URL was specified"));
    const a = fc(n);
    if (P.isFunction(o) && (r = o, o = {}), P.validate(P.isFunction(r), r), !P.isNonEmptyString(e) && !P.isObject(e) && e instanceof String && e.length == 0)
      return r(null);
    const l = Mo(a.hostname), u = o.loose || this.enableLooseMode;
    let c = null;
    if (o.sameSiteContext && (c = pc(o.sameSiteContext), !c))
      return r(new Error(dc));
    if (typeof e == "string" || e instanceof String) {
      if (e = ne.parse(e, { loose: u }), !e)
        return i = new Error("Cookie failed to parse"), r(o.ignoreError ? null : i);
    } else if (!(e instanceof ne))
      return i = new Error(
        "First argument to setCookie must be a Cookie object or string"
      ), r(o.ignoreError ? null : i);
    const d = o.now || /* @__PURE__ */ new Date();
    if (this.rejectPublicSuffixes && e.domain && jl.getPublicSuffix(e.cdomain(), {
      allowSpecialUseDomain: this.allowSpecialUseDomain,
      ignoreError: o.ignoreError
    }) == null && !Lh.test(e.domain))
      return i = new Error("Cookie has domain set to a public suffix"), r(o.ignoreError ? null : i);
    if (e.domain) {
      if (!mc(l, e.cdomain(), !1))
        return i = new Error(
          `Cookie not in this host's domain. Cookie:${e.cdomain()} Request:${l}`
        ), r(o.ignoreError ? null : i);
      e.hostOnly == null && (e.hostOnly = !1);
    } else
      e.hostOnly = !0, e.domain = l;
    if ((!e.path || e.path[0] !== "/") && (e.path = G_(a.pathname), e.pathIsDefault = !0), o.http === !1 && e.httpOnly)
      return i = new Error("Cookie is HttpOnly and this isn't an HTTP API"), r(o.ignoreError ? null : i);
    if (e.sameSite !== "none" && e.sameSite !== void 0 && c && c === "none")
      return i = new Error(
        "Cookie is SameSite but this is a cross-origin request"
      ), r(o.ignoreError ? null : i);
    const p = this.prefixSecurity === _n.SILENT;
    if (!(this.prefixSecurity === _n.DISABLED)) {
      let g = !1, k;
      if (X_(e) ? Q_(e) || (g = !0, k = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (g = !0, k = "Cookie has __Secure prefix but Secure attribute is not set"), g)
        return r(
          o.ignoreError || p ? null : new Error(k)
        );
    }
    const m = this.store;
    m.updateCookie || (m.updateCookie = function(g, k, j) {
      this.putCookie(k, j);
    });
    function v(g, k) {
      if (g)
        return r(g);
      const j = function(S) {
        if (S)
          return r(S);
        r(null, e);
      };
      if (k) {
        if (o.http === !1 && k.httpOnly)
          return g = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), r(o.ignoreError ? null : g);
        e.creation = k.creation, e.creationIndex = k.creationIndex, e.lastAccessed = d, m.updateCookie(k, e, j);
      } else
        e.creation = e.lastAccessed = d, m.putCookie(e, j);
    }
    m.findCookie(e.domain, e.path, e.key, v);
  }
  // RFC6365 S5.4
  getCookies(e, n, o) {
    P.validate(P.isUrlStringOrObject(e), o, e);
    const r = fc(e);
    P.isFunction(n) && (o = n, n = {}), P.validate(P.isObject(n), o, n), P.validate(P.isFunction(o), o);
    const i = Mo(r.hostname), a = r.pathname || "/";
    let l = n.secure;
    l == null && r.protocol && (r.protocol == "https:" || r.protocol == "wss:") && (l = !0);
    let u = 0;
    if (n.sameSiteContext) {
      const g = pc(n.sameSiteContext);
      if (u = ne.sameSiteLevel[g], !u)
        return o(new Error(dc));
    }
    let c = n.http;
    c == null && (c = !0);
    const d = n.now || Date.now(), p = n.expire !== !1, h = !!n.allPaths, m = this.store;
    function v(g) {
      if (g.hostOnly) {
        if (g.domain != i)
          return !1;
      } else if (!mc(i, g.domain, !1))
        return !1;
      return !h && !N_(a, g.path) || g.secure && !l || g.httpOnly && !c || u && ne.sameSiteLevel[g.sameSite || "none"] > u ? !1 : p && g.expiryTime() <= d ? (m.removeCookie(g.domain, g.path, g.key, () => {
      }), !1) : !0;
    }
    m.findCookies(
      i,
      h ? null : a,
      this.allowSpecialUseDomain,
      (g, k) => {
        if (g)
          return o(g);
        k = k.filter(v), n.sort !== !1 && (k = k.sort(hc));
        const j = /* @__PURE__ */ new Date();
        for (const S of k)
          S.lastAccessed = j;
        o(null, k);
      }
    );
  }
  getCookieString(...e) {
    const n = e.pop();
    P.validate(P.isFunction(n), n);
    const o = function(r, i) {
      r ? n(r) : n(
        null,
        i.sort(hc).map((a) => a.cookieString()).join("; ")
      );
    };
    e.push(o), this.getCookies.apply(this, e);
  }
  getSetCookieStrings(...e) {
    const n = e.pop();
    P.validate(P.isFunction(n), n);
    const o = function(r, i) {
      r ? n(r) : n(
        null,
        i.map((a) => a.toString())
      );
    };
    e.push(o), this.getCookies.apply(this, e);
  }
  serialize(e) {
    P.validate(P.isFunction(e), e);
    let n = this.store.constructor.name;
    P.isObject(n) && (n = null);
    const o = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${R_}`,
      // add the store type, to make humans happy:
      storeType: n,
      // CookieJar configuration:
      rejectPublicSuffixes: !!this.rejectPublicSuffixes,
      enableLooseMode: !!this.enableLooseMode,
      allowSpecialUseDomain: !!this.allowSpecialUseDomain,
      prefixSecurity: gc(this.prefixSecurity),
      // this gets filled from getAllCookies:
      cookies: []
    };
    if (!(this.store.getAllCookies && typeof this.store.getAllCookies == "function"))
      return e(
        new Error(
          "store does not support getAllCookies and cannot be serialized"
        )
      );
    this.store.getAllCookies((r, i) => r ? e(r) : (o.cookies = i.map((a) => (a = a instanceof ne ? a.toJSON() : a, delete a.creationIndex, a)), e(null, o)));
  }
  toJSON() {
    return this.serializeSync();
  }
  // use the class method CookieJar.deserialize instead of calling this directly
  _importCookies(e, n) {
    let o = e.cookies;
    if (!o || !Array.isArray(o))
      return n(new Error("serialized jar has no cookies array"));
    o = o.slice();
    const r = (i) => {
      if (i)
        return n(i);
      if (!o.length)
        return n(i, this);
      let a;
      try {
        a = bl(o.shift());
      } catch (l) {
        return n(l);
      }
      if (a === null)
        return r(null);
      this.store.putCookie(a, r);
    };
    r();
  }
  clone(e, n) {
    arguments.length === 1 && (n = e, e = null), this.serialize((o, r) => {
      if (o)
        return n(o);
      Ze.deserialize(r, e, n);
    });
  }
  cloneSync(e) {
    if (arguments.length === 0)
      return this._cloneSync();
    if (!e.synchronous)
      throw new Error(
        "CookieJar clone destination store is not synchronous; use async API instead."
      );
    return this._cloneSync(e);
  }
  removeAllCookies(e) {
    P.validate(P.isFunction(e), e);
    const n = this.store;
    if (typeof n.removeAllCookies == "function" && n.removeAllCookies !== I_.prototype.removeAllCookies)
      return n.removeAllCookies(e);
    n.getAllCookies((o, r) => {
      if (o)
        return e(o);
      if (r.length === 0)
        return e(null);
      let i = 0;
      const a = [];
      function l(u) {
        if (u && a.push(u), i++, i === r.length)
          return e(a.length ? a[0] : null);
      }
      r.forEach((u) => {
        n.removeCookie(
          u.domain,
          u.path,
          u.key,
          l
        );
      });
    });
  }
  static deserialize(e, n, o) {
    arguments.length !== 3 && (o = n, n = null), P.validate(P.isFunction(o), o);
    let r;
    if (typeof e == "string") {
      if (r = qh(e), r instanceof Error)
        return o(r);
    } else
      r = e;
    const i = new Ze(n, {
      rejectPublicSuffixes: r.rejectPublicSuffixes,
      looseMode: r.enableLooseMode,
      allowSpecialUseDomain: r.allowSpecialUseDomain,
      prefixSecurity: r.prefixSecurity
    });
    i._importCookies(r, (a) => {
      if (a)
        return o(a);
      o(null, i);
    });
  }
  static deserializeSync(e, n) {
    const o = typeof e == "string" ? JSON.parse(e) : e, r = new Ze(n, {
      rejectPublicSuffixes: o.rejectPublicSuffixes,
      looseMode: o.enableLooseMode
    });
    if (!r.store.synchronous)
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    return r._importCookiesSync(o), r;
  }
}
Ze.fromJSON = Ze.deserializeSync;
[
  "_importCookies",
  "clone",
  "getCookies",
  "getCookieString",
  "getSetCookieStrings",
  "removeAllCookies",
  "serialize",
  "setCookie"
].forEach((t) => {
  Ze.prototype[t] = Fh(Ze.prototype[t]);
});
Ze.deserialize = Fh(Ze.deserialize);
function bt(t) {
  return function(...e) {
    if (!this.store.synchronous)
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    let n, o;
    if (this[t](...e, (r, i) => {
      n = r, o = i;
    }), n)
      throw n;
    return o;
  };
}
var Bh = ne;
jl.getPublicSuffix;
P.ParameterError;
function vc(t, e, n, o, r) {
  const i = [];
  if (e === void 0)
    return [[], void 0];
  const a = Z_(e, o);
  for (const [l, u] of a) {
    const [c, d] = tT(
      { ...t, responseCode: l },
      u,
      n,
      o,
      r
    );
    if (d !== void 0)
      return [
        void 0,
        `failed to assign variables for response code: ${l}: ${d}`
      ];
    i.push(c);
  }
  return [i, void 0];
}
function Z_(t, e) {
  const n = [], o = Object.keys(t).sort(sT);
  for (const r of o)
    eT(r, e) && n.push([r, t[r]]);
  return n;
}
function eT(t, e) {
  return e === vi || e.statusCode.toString() === t || vr(e.statusCode) === t || t === "default";
}
function tT(t, e, n, o, r) {
  const i = {}, a = [];
  for (const [l, u] of Object.entries(e.variableAssignments || {})) {
    const [c, d] = nT(u, n, o, r);
    d !== void 0 ? a.push({ name: l, error: d, value: void 0, assignment: u }) : c === void 0 ? a.push({ name: l, error: "not found", value: void 0, assignment: u }) : (i[l] = c, a.push({ name: l, value: c, error: void 0 }));
  }
  return [{ id: t, env: i, assignments: a }, void 0];
}
function nT(t, e, n, o) {
  var r, i;
  if (n === vi)
    return ["foo", void 0];
  if (t.in === "body" && ((r = t == null ? void 0 : t.path) == null ? void 0 : r.type) == "jsonPointer")
    return t.from === "request" ? yc(e.body, t.path.value) : yc(n.body, t.path.value);
  if (t.in === "body" && ((i = t == null ? void 0 : t.path) == null ? void 0 : i.type) == "jsonPath")
    return t.from === "request" ? kc(e.body, t.path.value) : kc(n.body, t.path.value);
  if (t.in === "header")
    return t.from === "request" ? oT(e.headers, t.name) : rT(n.headers, t.name);
  if (t.in === "cookie")
    return t.from === "request" ? aT(e.headers, t.name) : iT(n.headers, t.name);
  if (t.in === "query") {
    if (t.from === "request")
      return jc(o.query, t.name);
  } else if (t.in === "path" && t.from === "request")
    return jc(o.path, t.name);
  return [void 0, `unsupported assignment: from ${t.from} in ${t.in}`];
}
function yc(t, e) {
  try {
    const n = JSON.parse(t), o = pe.find(n, e);
    return typeof o == "object" ? [void 0, "must be a primitive value"] : [o, void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Pointer "${e}": ${n}`];
  }
}
function kc(t, e) {
  try {
    const n = JSON.parse(t), o = H({ json: n, path: e });
    return typeof (o == null ? void 0 : o[0]) == "object" ? [void 0, "must be a primitive value"] : [o == null ? void 0 : o[0], void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Path "${e}": ${n}`];
  }
}
function oT(t, e) {
  for (const [n, o] of Object.entries(t))
    if (n.toLowerCase() === e.toLowerCase())
      return [o, void 0];
  return [void 0, "not found"];
}
function rT(t, e) {
  for (const [n, o] of t)
    if (n.toLowerCase() === e.toLowerCase())
      return [o, void 0];
  return [void 0, "not found"];
}
function iT(t, e) {
  for (const [n, o] of t)
    if (n.toLowerCase() === "set-cookie") {
      const r = Bh.parse(o);
      if (r !== void 0 && r.key === e)
        return [r.value, void 0];
    }
  return [void 0, "not found"];
}
function aT(t, e) {
  for (const [n, o] of Object.entries(t))
    if (n.toLowerCase() === "cookie") {
      const r = o.split("; ");
      for (const i of r) {
        const a = Bh.parse(i);
        if (a !== void 0 && a.key === e)
          return [a.value, void 0];
      }
    }
  return [void 0, "not found"];
}
function jc(t, e) {
  for (const { key: n, value: o } of t)
    if (n === e)
      return [o, void 0];
  return [void 0, "not found"];
}
function sT(t, e) {
  const n = {
    default: 0,
    "1XX": 1,
    "2XX": 2,
    "3XX": 3,
    "4XX": 4,
    "5XX": 5
  }, o = t in n ? n[t] : Number.MAX_SAFE_INTEGER, r = e in n ? n[e] : Number.MAX_SAFE_INTEGER;
  return o - r;
}
function bc(t) {
  const e = [];
  for (const { assignments: n } of t)
    for (const o of n)
      o.error !== void 0 && e.push(o);
  return e;
}
async function* lT(t, e, n, o, r, i, a = []) {
  const l = lh(), u = [Vh(o, i)], c = [];
  for (const { name: d, requests: p } of r) {
    const h = yield* Hh(
      d,
      l,
      t,
      e,
      n,
      o,
      p,
      [...u, ...a, ...c],
      0
    );
    if (h === void 0)
      break;
    c.push(...h);
  }
  return c;
}
async function* Hh(t, e, n, o, r, i, a, l, u) {
  var d;
  const c = [];
  if (yield { event: "playbook-started", name: t }, u >= 5) {
    yield {
      event: "playbook-aborted",
      error: "Maximum playbook execution depth is reached"
    };
    return;
  }
  for (let p = 0; p < a.length; p++) {
    const h = a[p];
    if (h.ref === void 0) {
      yield {
        event: "playbook-aborted",
        error: "non-reference requests are not supported"
      };
      return;
    }
    const m = cT(i, h.ref);
    if (m === void 0) {
      yield {
        event: "playbook-aborted",
        error: `request not found: ${h.ref.type}/${h.ref.id}`
      };
      return;
    }
    yield { event: "request-started", ref: h.ref };
    const v = m.operationId === void 0 ? void 0 : m.auth, g = yield* Uh(
      e,
      n,
      o,
      r,
      i,
      v,
      [...l, ...c],
      u
    );
    if (g === void 0) {
      yield {
        event: "http-request-prepare-error",
        error: "Failed to retrieve credentials"
      };
      return;
    }
    const k = Bl(
      "stage-environment",
      h.environment || {},
      [...l, ...c]
    ), j = {
      id: { type: "stage-environment" },
      env: k.value,
      // FIXME can we make replaceEnvVariables return assignments?
      assignments: []
    }, S = [...l, ...c, j], w = Bl(
      "request-environment",
      m.environment || {},
      S
    ), $ = {
      id: { type: "request-environment" },
      env: w.value,
      assignments: []
    }, B = m.operationId !== void 0 ? (d = qc(o, m.operationId)) == null ? void 0 : d.operation : void 0, O = Ig(o, m.request, B, [
      ...l,
      ...c,
      $,
      j
    ]), A = [
      ...w.missing,
      ...k.missing,
      ...O.missing
    ];
    if (yield {
      event: "payload-variables-substituted",
      stack: [...S, $],
      found: [...w.found, ...k.found, ...O.found],
      missing: A
    }, A.length > 0) {
      yield {
        event: "http-request-prepare-error",
        error: `failed to replace request variables: ${zg(A)}`
      };
      return;
    }
    const [N, re] = "operationId" in O.value ? await c1(o, r, m.operationId, O.value, g) : await m1(O.value);
    if (re !== void 0) {
      yield { event: "http-request-prepare-error", error: re };
      return;
    }
    yield {
      event: "http-request-prepared",
      request: N,
      operationId: m.operationId
    };
    const [I, R] = await n(N);
    if (R !== void 0) {
      yield { event: "http-error-received", error: R };
      return;
    }
    if (yield { event: "http-response-received", response: I }, I !== vi) {
      if (h.expectedResponse !== void 0) {
        if (String(I == null ? void 0 : I.statusCode) !== h.expectedResponse && vr(I.statusCode) !== h.expectedResponse && m.defaultResponse !== "default") {
          yield {
            event: "response-processing-error",
            error: `HTTP response code "${I == null ? void 0 : I.statusCode}" does not match expected stage response code "${h.expectedResponse}"`
          };
          return;
        }
      } else if (String(I == null ? void 0 : I.statusCode) !== m.defaultResponse && vr(I.statusCode) !== m.defaultResponse && m.defaultResponse !== "default") {
        yield {
          event: "response-processing-error",
          error: `HTTP response code "${I == null ? void 0 : I.statusCode}" does not match default response code "${m.defaultResponse}"`
        };
        return;
      }
    }
    const [Oe, lt] = vc(
      { type: "playbook-request", name: t, step: p, responseCode: "default" },
      m.responses,
      N,
      I,
      O.value.parameters
    );
    if (lt !== void 0) {
      yield {
        event: "response-processing-error",
        error: lt
      };
      return;
    }
    c.push(...Oe), yield { event: "variables-assigned", assignments: Oe };
    const ro = bc(Oe);
    if (ro.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${ro.map((vt) => vt.name).join(", ")}`
      };
      return;
    }
    const [io, ao] = vc(
      { type: "playbook-stage", name: t, step: p, responseCode: "default" },
      h.responses,
      N,
      I,
      O.value.parameters
    );
    if (ao !== void 0) {
      yield {
        event: "response-processing-error",
        error: ao
      };
      return;
    }
    yield { event: "variables-assigned", assignments: io };
    const so = bc(io);
    if (so.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${so.map((vt) => vt.name).join(", ")}`
      };
      return;
    }
    c.push(...io);
  }
  return yield { event: "playbook-finished" }, c;
}
async function* Uh(t, e, n, o, r, i, a, l) {
  const u = {};
  if (i === void 0)
    return u;
  for (const c of i) {
    yield { event: "auth-started", name: c };
    const [d, p] = c.split("/"), h = r.authenticationDetails[0][d];
    if (h === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const m = p === void 0 ? h.default : p, v = h.methods[m];
    if (v === void 0) {
      yield {
        event: "auth-aborted",
        error: `credential: "${d}/${m}" is not found`
      };
      return;
    }
    if (h === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const g = l1(t, h, m);
    if (g !== void 0)
      yield {
        event: "credential-retrieved-from-cache",
        name: c,
        result: g
      }, u[c] = { credential: h, value: g };
    else {
      const k = yield* uT(
        t,
        e,
        n,
        o,
        r,
        c,
        v,
        a,
        l
      );
      if (k === void 0) {
        yield {
          event: "auth-aborted",
          error: `Failed to get value for the credential: "${d}"`
        };
        return;
      }
      s1(t, h, m, k), u[c] = { credential: h, value: k };
    }
    yield { event: "auth-finished" };
  }
  return u;
}
async function* uT(t, e, n, o, r, i, a, l, u) {
  const c = [...l];
  if (a.requests !== void 0) {
    const p = yield* Hh(
      i,
      t,
      e,
      n,
      o,
      r,
      a.requests,
      l,
      u + 1
    );
    if (p === void 0)
      return void 0;
    c.push(...p);
  }
  const d = Ng(a.credential, c);
  return d.missing.length, yield {
    event: "credential-variables-substituted",
    name: i,
    result: d.value,
    stack: c,
    found: d.found,
    missing: d.missing
  }, d.value;
}
function hn(t, e) {
  const n = {}, o = {}, r = [];
  for (const [i, a] of Object.entries(t.variables))
    a.from === "hardcoded" ? n[i] = a.value : a.from === "environment" && (e.secrets.hasOwnProperty(a.name) ? (n[i] = e.secrets[a.name], o[a.name] = e.secrets[a.name]) : e.default.hasOwnProperty(a.name) ? (n[i] = e.default[a.name], o[a.name] = e.default[a.name]) : !a.required && a.default !== void 0 ? n[i] = a.default : a.required && r.push(a.name));
  return {
    environment: { id: { type: "global-environment" }, assignments: [], env: n },
    simple: o,
    missing: r
  };
}
function Vh(t, e) {
  var r, i;
  const n = ((r = t.runtimeConfiguration) == null ? void 0 : r.environment) || "default", { environment: o } = hn(
    ((i = t == null ? void 0 : t.environments) == null ? void 0 : i[n]) || { variables: {} },
    e
  );
  return o;
}
function cT(t, e) {
  var n, o;
  return e.type === "operation" ? (n = t.operations[e.id]) == null ? void 0 : n.request : (o = t.requests) == null ? void 0 : o[e.id];
}
function dT(t, e) {
  return () => t({
    matcher: Bn(
      se,
      Ad,
      Md,
      Mt,
      Rt,
      Pt,
      At
    ),
    effect: async (n, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i, operations: a }
        },
        operations: { scenarioId: l, operationId: u },
        router: {
          current: [c, d]
        }
      } = o.getState();
      if (c !== "scanconf" || d !== "operations" || u === void 0)
        return;
      o.cancelActiveListeners(), await o.delay(1e3);
      const p = a[u], h = [
        { name: "before", requests: r },
        { name: "operationBefore", requests: p.before },
        { name: "operationScenarios", requests: p.scenarios[l].requests },
        { name: "operationAfter", requests: p.after },
        { name: "after", requests: i }
      ].filter((m) => m.requests.length > 0);
      await fn(
        o.getState(),
        yi(),
        o.dispatch,
        Dk,
        Ik,
        h,
        "http://localhost"
      );
    }
  });
}
function pT(t, e) {
  return () => t({
    matcher: Bn(se, Xt, Vo),
    effect: async (n, o) => {
      const {
        requests: { ref: r },
        scanconf: {
          playbook: { before: i, after: a }
        },
        router: {
          current: [l, u]
        },
        prefs: { useGlobalBlocks: c }
      } = o.getState();
      l !== "scanconf" || u !== "requests" || (o.cancelActiveListeners(), await o.delay(1e3), await fn(
        o.getState(),
        yi(),
        o.dispatch,
        Fk,
        Lk,
        [
          { name: "Global Before", requests: c ? i : [] },
          { name: "Request", requests: [{ ref: r }] },
          { name: "Global After", requests: c ? a : [] }
        ],
        "http://localhost"
      ));
    }
  });
}
function mT(t, e) {
  return () => t({
    matcher: Bn(
      se,
      Mt,
      kr,
      jr,
      Rt,
      Pt,
      At
    ),
    effect: async (n, o) => {
      var p, h, m, v;
      const {
        scanconf: {
          playbook: r,
          selectedCredentialGroup: i,
          selectedCredential: a,
          selectedSubcredential: l
        },
        router: {
          current: [u, c]
        }
      } = o.getState();
      if (u !== "scanconf" || c !== "auth" || (o.cancelActiveListeners(), await o.delay(1e3), a === void 0 || l === void 0))
        return;
      const d = (v = (m = (h = (p = r == null ? void 0 : r.authenticationDetails) == null ? void 0 : p[i]) == null ? void 0 : h[a]) == null ? void 0 : m.methods) == null ? void 0 : v[l];
      d === void 0 || d.requests === void 0 || d.requests.length === 0 || await fn(
        o.getState(),
        yi(),
        o.dispatch,
        bk,
        xk,
        [{ name: "auth", requests: d.requests }],
        "http://localhost"
      );
    }
  });
}
function hT(t, e) {
  return () => t({
    matcher: Bn(
      se,
      Rd,
      Rt,
      Pt,
      At,
      Mt
    ),
    effect: async (n, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i }
        },
        global: { selected: a },
        router: {
          current: [l, u]
        }
      } = o.getState();
      if (l !== "scanconf" || u !== "global")
        return;
      o.cancelActiveListeners(), await o.delay(1e3);
      const c = a === "before" ? [{ name: "Global Before", requests: r }] : [{ name: "Global After", requests: i }];
      await fn(
        o.getState(),
        yi(),
        o.dispatch,
        Tk,
        Ek,
        c,
        "http://localhost"
      );
    }
  });
}
function fT(t, e) {
  return () => t({
    actionCreator: Fd,
    effect: async ({ payload: n }, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i, operations: a }
        },
        operations: { scenarioId: l, operationId: u },
        prefs: { useGlobalBlocks: c, rejectUnauthorized: d }
      } = o.getState(), p = a[u], h = [
        { name: "Global Before", requests: c ? r : [] },
        { name: "Before", requests: p.before },
        { name: "Scenario", requests: p.scenarios[l].requests },
        { name: "After", requests: p.after },
        { name: "Global After", requests: c ? i : [] }
      ].filter((m) => m.requests.length > 0);
      await fn(
        o.getState(),
        Lr(
          { https: { rejectUnauthorized: d } },
          (m, v, g) => o.dispatch(qr({ id: m, request: v, config: g }))
        ),
        o.dispatch,
        zk,
        Nk,
        h,
        n
      );
    }
  });
}
function gT(t, e) {
  return () => t({
    actionCreator: zd,
    effect: async ({ payload: n }, o) => {
      const {
        scanconf: { oas: r, playbook: i, selectedCredential: a, selectedSubcredential: l },
        env: { data: u },
        prefs: { rejectUnauthorized: c }
      } = o.getState();
      if (a === void 0 || l === void 0)
        return;
      const d = [Vh(i, u)];
      o.dispatch(jk()), o.dispatch(Fi({ event: "playbook-started", name: "" })), o.dispatch(Fi({ event: "request-started" }));
      for await (const p of Uh(
        lh(),
        Lr(
          { https: { rejectUnauthorized: c } },
          (h, m, v) => o.dispatch(qr({ id: h, request: m, config: v }))
        ),
        r,
        n,
        i,
        [`${a}/${l}`],
        d,
        0
      ))
        o.dispatch(Fi(p));
    }
  });
}
function vT(t, e) {
  return () => t({
    actionCreator: ds,
    effect: async ({ payload: { inputs: n, server: o } }, r) => {
      const {
        requests: { ref: i },
        scanconf: {
          playbook: { before: a, after: l }
        },
        prefs: { useGlobalBlocks: u, rejectUnauthorized: c }
      } = r.getState(), d = [
        { name: "Global Before", requests: u ? a : [] },
        { name: "Request", requests: [{ ref: i }] },
        { name: "Global After", requests: u ? l : [] }
      ].filter((p) => p.requests.length > 0);
      await fn(
        r.getState(),
        Lr(
          { https: { rejectUnauthorized: c } },
          (p, h, m) => r.dispatch(qr({ id: p, request: h, config: m }))
        ),
        r.dispatch,
        Ak,
        Mk,
        d,
        o,
        [{ id: { type: "try-inputs" }, env: n, assignments: [] }]
      );
    }
  });
}
function yT(t, e) {
  return () => t({
    actionCreator: ca,
    effect: async ({ payload: n }, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i }
        },
        global: { selected: a },
        prefs: { rejectUnauthorized: l }
      } = o.getState(), u = a === "before" ? [{ name: "Global Before", requests: r }] : [{ name: "Global After", requests: i }];
      await fn(
        o.getState(),
        Lr(
          { https: { rejectUnauthorized: l } },
          (c, d, p) => o.dispatch(qr({ id: c, request: d, config: p }))
        ),
        o.dispatch,
        Ck,
        _k,
        u,
        n
      );
    }
  });
}
async function fn(t, e, n, o, r, i, a, l = []) {
  n(o());
  for await (const u of lT(
    e,
    t.scanconf.oas,
    a,
    t.scanconf.playbook,
    i,
    t.env.data,
    l
  ))
    n(r(u));
}
function xl(t, e) {
  const [n, o] = kT(t, e);
  return o == null ? [n, void 0] : [
    void 0,
    o.map((r) => ({
      message: r.message.slice(-1).join(": "),
      pointer: pe.joinJsonPointer(r.path)
    }))
  ];
}
function kT(t, e) {
  return ye({
    before: Et(t, e, e.before || [], Fn),
    after: Et(t, e, e.after || [], Fn),
    operations: Be(t, e, e.operations || {}, wT),
    authenticationDetails: Et(t, e, e.authenticationDetails === void 0 || e.authenticationDetails.length === 0 ? [{}] : e.authenticationDetails, PT),
    runtimeConfiguration: jT(t, e, e.runtimeConfiguration || {}),
    customizations: L(e.customizations),
    environments: Be(t, e, e.environments || {}, bT),
    authorizationTests: Be(t, e, e.authorizationTests || {}, LT),
    requests: Be(t, e, e.requests || {}, ET)
  });
}
function jT(t, e, n) {
  return [{ ...n }, void 0];
}
function bT(t, e, n) {
  return ye({
    variables: Be(t, e, n.variables || {}, xT)
  });
}
function xT(t, e, n) {
  return n.from === "environment" ? ye({
    name: L(n.name),
    from: L(n.from),
    required: L(n.required),
    default: L(n.default)
  }) : n.from === "hardcoded" ? ye({
    from: L(n.from),
    value: L(n.value)
  }) : Ht("unknown env from");
}
function wT(t, e, n) {
  return ye({
    request: wl(t, e, n.request, n.operationId),
    operationId: L(n.operationId),
    before: Et(t, e, n.before || [], Fn),
    after: Et(t, e, n.after || [], Fn),
    authorizationTests: L(n.authorizationTests || []),
    scenarios: Et(t, e, n.scenarios || [], FT),
    customTests: L(n.customTests),
    customized: L(ST(n))
  });
}
function ST(t) {
  var d, p;
  const e = (p = (d = t.scenarios) == null ? void 0 : d[0]) == null ? void 0 : p.requests, n = e == null ? void 0 : e[0], o = t.customTests && t.customTests.length > 0, r = t.authorizationTests && t.authorizationTests.length > 0, i = t.before && t.before.length > 0, a = t.after && t.after.length > 0, l = t.scenarios && t.scenarios.length > 1, u = e && e.length > 1, c = n !== void 0 && CT(n);
  return o || r || i || a || l || u || c;
}
function CT(t) {
  const e = t.environment && Object.keys(t.environment).length > 0, n = t.auth && t.auth.length > 0, o = t.responses && Object.keys(t.responses).length > 0, r = "expectedResponse" in t;
  return e || n || o || r;
}
function Fn(t, e, n) {
  return n.$ref !== void 0 ? _T(t, e, n) : wl(t, e, n);
}
function _T(t, e, n) {
  return ye({
    responses: Be(t, e, n.responses || {}, Sl),
    auth: L(n.auth || []),
    ref: RT(t, e, n.$ref),
    fuzzing: L(n.fuzzing),
    environment: Cl(t, e, n.environment || {}),
    injectionKey: L(n.injectionKey),
    expectedResponse: L(n.expectedResponse)
  });
}
function wl(t, e, n, o) {
  return ye({
    responses: Be(t, e, n.responses || {}, Sl),
    fuzzing: L(n.fuzzing),
    auth: L(n.auth || []),
    environment: Cl(t, e, n.environment || {}),
    injectionKey: L(n.injectionKey),
    ref: L(void 0),
    defaultResponse: L(n.defaultResponse),
    request: OT(t, e, n.request, o),
    operationId: L(o)
  });
}
function TT(t, e, n) {
  return ye({
    operationId: [void 0, void 0],
    responses: Be(t, e, n.responses || {}, Sl),
    environment: Cl(t, e, n.environment || {}),
    defaultResponse: L(n.defaultResponse),
    request: $T(t, e, n.request)
  });
}
function ET(t, e, n) {
  return n.operationId === void 0 ? TT(t, e, n) : wl(t, e, n, n.operationId);
}
function OT(t, e, n, o) {
  return n.type === "42c" ? DT(t, e, n, o) : Ht(`unknown request type: ${n.type}`);
}
function $T(t, e, n) {
  return n.type === "42c" ? IT(t, e, n) : Ht(`unknown request type: ${n.type}`);
}
function DT(t, e, n, o) {
  var a, l;
  const r = ((a = n == null ? void 0 : n.details) == null ? void 0 : a.operationId) || o;
  if (r === void 0)
    return [
      void 0,
      Qo("Unable to parse request that has no operationId set", void 0, ["details"])
    ];
  const i = qc(t, r);
  return i === void 0 ? Ht(`Unable to find in the OpenAPI file an operation with operationId: "${r}"`) : ye({
    operationId: L(r),
    path: L(i.path),
    method: L(i.method.toLowerCase()),
    parameters: Gh(t, e, (n == null ? void 0 : n.details) || {}),
    body: Wh(t, e, (l = n == null ? void 0 : n.details) == null ? void 0 : l.requestBody)
  });
}
function IT(t, e, n) {
  var o;
  return ye({
    url: L(n.details.url),
    method: L(n.details.method.toLowerCase()),
    parameters: Gh(t, e, (n == null ? void 0 : n.details) || {}),
    body: Wh(t, e, (o = n == null ? void 0 : n.details) == null ? void 0 : o.requestBody)
  });
}
function Wh(t, e, n) {
  return n == null ? [void 0, void 0] : n.mode === "json" ? [{ mediaType: "application/json", value: n.json }, void 0] : n.mode === "urlencoded" ? [
    { mediaType: "application/x-www-form-urlencoded", value: zT(n.urlencoded) },
    void 0
  ] : n.mode === "raw" ? [{ mediaType: "raw", value: n.raw }, void 0] : [void 0, void 0];
}
function zT(t) {
  return Object.entries(t).reduce((e, [n, o]) => (e[n] = o.value, e), {});
}
function Gh(t, e, n) {
  return ye({
    cookie: cr(t, e, n.cookies || []),
    path: cr(t, e, n.paths || []),
    query: cr(t, e, n.queries || []),
    header: cr(t, e, n.headers || [])
  });
}
function cr(t, e, n) {
  return [
    n.map(({ key: o, value: r }) => ({ key: o, value: r })),
    void 0
  ];
}
function Sl(t, e, n) {
  return ye({
    expectations: L(n.expectations),
    variableAssignments: Be(t, e, n.variableAssignments || {}, NT)
  });
}
function NT(t, e, n) {
  var o, r;
  return n.in === "body" && (n.from == "response" || n.from == "request") ? [
    {
      in: n.in,
      from: n.from,
      contentType: "json",
      path: {
        type: (o = n.path) == null ? void 0 : o.type,
        value: (r = n.path) == null ? void 0 : r.value
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
  ] : Ht("unexpected assignment");
}
function Cl(t, e, n) {
  return [n, void 0];
}
function RT(t, e, n) {
  if (n === void 0)
    return [void 0, void 0];
  const o = pe.parseJsonPointer(n);
  return o.length === 2 && o[0] === "requests" ? [{ type: "request", id: String(o[1]) }, void 0] : o.length === 3 && o[0] === "operations" && o[2] === "request" ? [{ type: "operation", id: String(o[1]) }, void 0] : Ht(`unexpected stage $ref, must point to operations or requests: ${n}`);
}
function PT(t, e, n) {
  return n.$ref !== void 0 ? Ht(`external credential refs are not supported: ${n.$ref}`) : Be(t, e, n, AT);
}
function AT(t, e, n) {
  return ye({
    in: L(n.in),
    type: L(n.type),
    name: L(n.name),
    default: L(n.default),
    ttl: L(n.ttl),
    tti: L(n.tti),
    methods: Be(t, e, n.credentials || {}, MT),
    description: L(n.description)
  });
}
function MT(t, e, n) {
  return ye({
    description: L(n.description),
    requests: Et(t, e, n.requests || [], Fn),
    credential: L(n.credential)
  });
}
function FT(t, e, n) {
  return ye({
    requests: Et(t, e, n.requests || [], Fn),
    key: L(n.key),
    fuzzing: L(n.fuzzing)
  });
}
function LT(t, e, n) {
  const o = n.source === null ? [] : n.source, r = n.target === null ? [] : n.target;
  return o.some((i) => typeof i != "string") || r.some((i) => typeof i != "string") ? Ht("only strings are allowed, embedding Credential objects is not supported yet") : ye({
    key: L(n.key),
    source: L(o),
    target: L(r)
  });
}
function Qo(t, e, n) {
  let o = [];
  return n !== void 0 && (typeof n == "string" || typeof n == "number") ? o = [`${n}`] : n !== void 0 && Array.isArray(n) && (o = [...n]), e === void 0 ? [{ message: [t], path: o }] : e.map((r) => ({
    message: [t, ...r.message],
    path: [...o, ...r.path]
  }));
}
function Ht(t, e, n) {
  return [void 0, Qo(t, e, n)];
}
function ye(t) {
  const e = [], n = {};
  for (const [o, r] of Object.entries(t)) {
    const [i, a] = r;
    a !== void 0 ? e.push(...Qo("failed to parse", a, [o])) : n[o] = i;
  }
  return e.length > 0 ? [void 0, e] : [n, void 0];
}
function L(t) {
  return [t, void 0];
}
function Be(t, e, n, o) {
  const r = [], i = {}, a = Object.entries(n).map(([l, u]) => [l, o(t, e, u)]);
  for (const [l, u] of a) {
    const [c, d] = u;
    d !== void 0 ? r.push(...Qo("failed to parse", d, [l])) : i[l] = c;
  }
  return r.length > 0 ? [void 0, r] : [i, void 0];
}
function Et(t, e, n, o) {
  const r = [], i = [], a = (n || []).map((l) => o(t, e, l));
  for (const [l, u] of a.entries()) {
    const [c, d] = u;
    d !== void 0 ? r.push(...Qo("failed to parse", d, [l])) : i.push(c);
  }
  return r.length > 0 ? [void 0, r] : [i, void 0];
}
function xi(t, e) {
  const n = e.runtimeConfiguration, o = e.customizations, r = e.environments, [i, a] = qT(t, e, e.authenticationDetails);
  if (a !== void 0)
    return [void 0, `failed to serialize authentication details: ${a}`];
  const [l, u] = UT(t, e);
  if (u !== void 0)
    return [void 0, `failed to serialize operations: ${u}`];
  const [c, d] = YT(t, e, e.requests);
  if (d !== void 0)
    return [void 0, `unable to serialize requests: ${d}`];
  const [p, h] = Ln(t, e, e.before);
  if (h !== void 0)
    return [void 0, `unable to serialize before: ${h}`];
  const [m, v] = Ln(t, e, e.after);
  return v !== void 0 ? [void 0, `unable to serialize after: ${v}`] : [
    {
      version: "2.0.0",
      runtimeConfiguration: n,
      customizations: o,
      environments: r,
      operations: l,
      before: fo(p),
      after: fo(m),
      authenticationDetails: i,
      authorizationTests: fo(e.authorizationTests),
      requests: fo(c)
    },
    void 0
  ];
}
function fo(t) {
  return t instanceof Array ? t.length > 0 ? t : void 0 : Object.keys(t).length > 0 ? t : void 0;
}
function qT(t, e, n) {
  const o = [];
  for (const r of n) {
    const [i, a] = BT(t, e, r);
    if (a !== void 0)
      return [void 0, "xxx"];
    o.push(i);
  }
  return [o.length === 1 && Object.keys(o[0]).length === 0 ? [] : o, void 0];
}
function BT(t, e, n) {
  const o = {};
  for (const [r, i] of Object.entries(n)) {
    const [a, l] = HT(t, e, i.methods);
    if (l !== void 0)
      return [void 0, "xxx"];
    o[r] = {
      type: i.type,
      in: i.in,
      name: i.name,
      ttl: i.ttl,
      tti: i.tti,
      default: i.default,
      description: i.description,
      credentials: a
    };
  }
  return [o, void 0];
}
function HT(t, e, n) {
  const o = {};
  for (const [r, i] of Object.entries(n)) {
    const [a, l] = Ln(t, e, i.requests || []);
    if (l !== void 0)
      return [void 0, `failed to serialize requests: ${l}`];
    o[r] = {
      credential: i.credential,
      description: i.description,
      requests: a.length > 0 ? a : void 0
    };
  }
  return [o, void 0];
}
function UT(t, e) {
  const n = {};
  for (const [o, r] of Object.entries(e.operations)) {
    const [i, a] = VT(t, e, r);
    if (a !== void 0)
      return [void 0, `unable to serialize operation '${o}: ${a}'`];
    n[o] = i;
  }
  return [n, void 0];
}
function VT(t, e, n) {
  const [o, r] = _l(t, e, n.request, n.operationId);
  if (r !== void 0)
    return [void 0, `failed to serialize request: ${r}`];
  const [i, a] = KT(t, e, n);
  if (a !== void 0)
    return [void 0, `failed to serialize scenarios: ${a}`];
  const [l, u] = Ln(t, e, n.before);
  if (u !== void 0)
    return [void 0, `failed to serialize before: ${u}`];
  const [c, d] = Ln(t, e, n.after);
  return d !== void 0 ? [void 0, `failed to serialize after: ${d}`] : [
    {
      operationId: n.operationId,
      request: o,
      before: l.length > 0 ? l : void 0,
      after: c.length > 0 ? c : void 0,
      ...i,
      customTests: n.customTests,
      authorizationTests: fo(n.authorizationTests)
    },
    void 0
  ];
}
function WT(t, e, n) {
  const [o, r] = El(t, e, n.responses);
  if (r !== void 0)
    return [void 0, `failed to serialize responses: ${r}`];
  const [i, a] = XT(n.ref);
  return a !== void 0 ? [void 0, `failed to serialize responses: ${a}`] : [{
    fuzzing: n.fuzzing,
    $ref: i,
    auth: Kh(n.auth),
    expectedResponse: n.expectedResponse,
    environment: Tl(n.environment),
    responses: o
  }, void 0];
}
function _l(t, e, n, o) {
  const [r, i] = QT(t, e, n.request, o);
  if (i !== void 0)
    return [void 0, `failed to serialize request: ${i}`];
  const [a, l] = El(t, e, n.responses);
  return l !== void 0 ? [void 0, `failed to serialize responses: ${l}`] : [{
    operationId: o || n.request.operationId,
    fuzzing: n.fuzzing,
    auth: Kh(n.auth),
    request: r,
    defaultResponse: n.defaultResponse,
    environment: Tl(n.environment),
    responses: a
  }, void 0];
}
function GT(t, e, n) {
  const [o, r] = ZT(t, e, n.request);
  if (r !== void 0)
    return [void 0, `failed to serialize request: ${r}`];
  const [i, a] = El(t, e, n.responses);
  return a !== void 0 ? [void 0, `failed to serialize responses: ${a}`] : [{
    request: o,
    defaultResponse: n.defaultResponse,
    environment: Tl(n.environment),
    responses: i
  }, void 0];
}
function Kh(t) {
  if (!(t === void 0 || t.length === 0))
    return t;
}
function KT(t, e, n) {
  const o = [];
  for (const r of n.scenarios) {
    const [i, a] = JT(t, e, r);
    if (a !== void 0)
      return [void 0, `unable to serialize scenario: ${a}`];
    o.push(i);
  }
  return [{ scenarios: o }, void 0];
}
function JT(t, e, n) {
  const [o, r] = Ln(t, e, n.requests);
  return r !== void 0 ? [void 0, `unable to serialize requests: ${r}`] : [
    {
      key: "happy.path",
      requests: o,
      fuzzing: n.fuzzing
    },
    void 0
  ];
}
function Ln(t, e, n) {
  const o = [];
  for (const r of n)
    if (r.ref === void 0) {
      const [i, a] = _l(t, e, r, r.operationId);
      if (a !== void 0)
        return [void 0, `unable to serialize stage: ${a}`];
      o.push(i);
    } else {
      const [i, a] = WT(t, e, r);
      if (a !== void 0)
        return [void 0, `unable to serialize stage reference: ${a}`];
      o.push(i);
    }
  return [o, void 0];
}
function YT(t, e, n) {
  const o = {};
  for (const [r, i] of Object.entries(n || {}))
    if (i.operationId === void 0) {
      const [a, l] = GT(t, e, i);
      if (l !== void 0)
        return [void 0, `unable to serialize request: ${l}`];
      o[r] = a;
    } else {
      const [a, l] = _l(t, e, i, i.operationId);
      if (l !== void 0)
        return [void 0, `unable to serialize request: ${l}`];
      o[r] = a;
    }
  return [o, void 0];
}
function XT(t) {
  return t.type === "operation" ? ["#" + pe.joinJsonPointer(["operations", t.id, "request"]), void 0] : t.type === "request" ? ["#" + pe.joinJsonPointer(["requests", t.id]), void 0] : [void 0, `Unable to serialize unknown $ref type: ${t}`];
}
function Tl(t) {
  if (!(t === void 0 || Object.keys(t).length === 0))
    return t;
}
function QT(t, e, n, o) {
  const r = {
    operationId: o,
    method: n.method.toUpperCase(),
    url: `{{host}}${n.path}`,
    headers: _t(t, e, n.parameters.header),
    queries: _t(t, e, n.parameters.query),
    paths: _t(t, e, n.parameters.path),
    cookies: _t(t, e, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? r.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? r.requestBody = {
    mode: "urlencoded",
    urlencoded: Jh(n.body.value)
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
function ZT(t, e, n) {
  const o = {
    //operationId: operation.operationId,
    method: n.method.toUpperCase(),
    url: n.url,
    headers: _t(t, e, n.parameters.header),
    queries: _t(t, e, n.parameters.query),
    paths: _t(t, e, n.parameters.path),
    cookies: _t(t, e, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? o.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? o.requestBody = {
    mode: "urlencoded",
    urlencoded: Jh(n.body.value)
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
function El(t, e, n) {
  const o = {}, r = Object.entries(n || {});
  if (r.length === 0)
    return [void 0, void 0];
  for (const [i, a] of r)
    o[i] = {
      expectations: a.expectations,
      variableAssignments: eE(a.variableAssignments)
    };
  return [o, void 0];
}
function _t(t, e, n) {
  if (n.length !== 0)
    return n;
}
function eE(t) {
  if (Object.keys(t || {}).length !== 0)
    return t;
}
function Jh(t) {
  return Object.entries(t).reduce((e, [n, o]) => (e[n] = { value: o }, e), {});
}
function wi(t) {
  var n;
  const e = ((n = t.runtimeConfiguration) == null ? void 0 : n.environment) || "default";
  return t.environments[e];
}
function tE(t, e) {
  const n = qn(t.before || [], e).map((a) => ({ container: "globalBefore", stageIndex: a })), o = qn(t.after || [], e).map((a) => ({ container: "globalAfter", stageIndex: a })), r = Object.entries(t.operations || {}).flatMap(([a, l]) => a !== e ? nE(l, a, e) : []), i = (t.authenticationDetails || []).flatMap(
    // TODO: handle credentials that contain just a $ref
    (a, l) => Object.entries(a).flatMap(([u, c]) => rE(c, u, l, e))
  );
  return [...n, ...o, ...i, ...r];
}
function nE(t, e, n) {
  const o = qn(t.before || [], n).map((a) => ({ container: "operationBefore", operationId: e, stageIndex: a })), r = qn(t.after || [], n).map((a) => ({ container: "operationAfter", operationId: e, stageIndex: a })), i = t.scenarios.flatMap((a, l) => oE(a, e, l, n));
  return [...o, ...i, ...r];
}
function oE(t, e, n, o) {
  return qn(t.requests || [], o).map((r) => ({
    container: "operationScenarios",
    operationId: e,
    scenarioIndex: n,
    stageIndex: r
  }));
}
function rE(t, e, n, o) {
  return Object.entries(t.credentials).flatMap(([r, i]) => qn(i.requests || [], o).map((a) => ({
    container: "credential",
    group: n,
    credentialId: e,
    subCredentialId: r,
    stageIndex: a
  })));
}
function qn(t, e) {
  const n = "#" + pe.joinJsonPointer(["operations", e, "request"]);
  return t.map((o, r) => {
    if (iE(o) && o.$ref === n)
      return r;
  }).filter((o) => o !== void 0);
}
function iE(t) {
  return "$ref" in t;
}
function aE(t, e) {
  const n = [];
  for (const o of t)
    for (const r of e)
      sE(o, r) && n.push({
        type: "operation-renamed",
        path: o.path,
        method: o.method,
        oldOperationId: r.operationId,
        newOperationId: o.operationId
      });
  return n;
}
function sE(t, e) {
  return t.path === e.path && t.method === e.method;
}
function lE(t, e) {
  const n = uE(t, e), o = cE(t, e), r = aE(n, o), i = n.filter((u) => !r.some((c) => c.newOperationId === u.operationId)), a = o.filter((u) => !r.some((c) => c.oldOperationId === u.operationId)), l = pE(t, e);
  return [...i, ...a, ...r, ...l];
}
function uE(t, e) {
  const n = e.operations || {};
  return Yh(t).filter((o) => !n[o.operationId]).map((o) => ({
    type: "operation-added",
    ...o
  }));
}
function cE(t, e) {
  var l, u;
  const n = e.operations || {}, o = Yh(t).map((c) => c.operationId), i = Object.keys(n).filter((c) => !o.includes(c)), a = [];
  for (const c of i) {
    const d = (u = (l = dE(c, e)) == null ? void 0 : l.request) == null ? void 0 : u.request;
    if ((d == null ? void 0 : d.type) === "42c" && d.details.url.startsWith("{{host}}")) {
      const p = d.details.method.toLowerCase(), h = d.details.url.substring(8);
      a.push({
        type: "operation-removed",
        operationId: c,
        method: p,
        path: h,
        references: tE(e, c)
      });
    } else
      throw new Error(`Unsupported operation: operationId: ${c}, request ${JSON.stringify(d)}`);
  }
  return a;
}
function Yh(t) {
  return (Fr(t) ? If(t) : zf(t)).map(([n, o, r]) => ({
    path: n,
    method: o,
    operationId: Ac(r.operationId, n, o)
  }));
}
function dE(t, e) {
  var n;
  return (n = e.operations) == null ? void 0 : n[t];
}
function pE(t, e) {
  const n = e.authenticationDetails || [{}];
  return n.length === 0 ? [] : mE(t).filter((o) => !n[0][o]).map((o) => ({
    type: "security-added",
    schema: o
  }));
}
function mE(t) {
  var e;
  if (Fr(t)) {
    const n = (e = t.components) == null ? void 0 : e.securitySchemes;
    return n ? Object.keys(n) : [];
  } else {
    const n = t.securityDefinitions;
    return n ? Object.keys(n) : [];
  }
}
function hE(t, e) {
  const n = pe.simpleClone(t);
  for (const o of e)
    o.container === "globalBefore" ? co(n.before, o.stageIndex) : o.container === "globalAfter" ? co(n.after, o.stageIndex) : o.container === "operationBefore" ? co(n.operations[o.operationId].before, o.stageIndex) : o.container === "operationAfter" ? co(n.operations[o.operationId].after, o.stageIndex) : o.container === "operationScenarios" && co(n.operations[o.operationId].scenarios[o.scenarioIndex].requests, o.stageIndex);
  return fE(n), n;
}
function co(t, e) {
  t && (t[e] = void 0);
}
function fE(t) {
  jn(t.before), jn(t.after);
  for (const e of Object.values(t.operations || {})) {
    jn(e.before), jn(e.after);
    for (const n of e.scenarios)
      jn(n.requests);
  }
  for (const e of t.authenticationDetails || [])
    for (const n of Object.values(e))
      for (const o of Object.values(n.credentials))
        jn(o.requests);
}
function jn(t) {
  if (t !== void 0)
    for (let e = t.length - 1; e >= 0; e--)
      t[e] === void 0 && t.splice(e, 1);
}
function gE(t, e, n) {
  const o = pe.simpleClone(t);
  bn(o.before, e, n), bn(o.after, e, n);
  for (const r of Object.values(o.operations || {})) {
    bn(r.before, e, n), bn(r.after, e, n);
    for (const i of r.scenarios)
      bn(i.requests, e, n);
  }
  for (const r of o.authenticationDetails || [])
    for (const i of Object.values(r))
      for (const a of Object.values(i.credentials))
        bn(a.requests, e, n);
  return o;
}
function bn(t, e, n) {
  for (const o of t || [])
    o.$ref === e && (o.$ref = n);
}
function vE(t, e, n, o) {
  let r = pe.simpleClone(e);
  for (const i of o)
    i.type === "operation-added" ? r = yE(t, r, n, i) : i.type === "operation-removed" ? r = kE(t, r, n, i) : i.type === "operation-renamed" ? r = jE(r, i) : i.type === "security-added" && (r = bE(t, r, n, i));
  return r;
}
function yE(t, e, n, o) {
  const r = n.operations[o.operationId];
  return e.operations[o.operationId] = r, e;
}
function kE(t, e, n, o) {
  return delete e.operations[o.operationId], hE(e, o.references);
}
function jE(t, e) {
  var i, a;
  const n = t.operations[e.oldOperationId];
  n.operationId = e.newOperationId, n.request.operationId = e.newOperationId, ((a = (i = n.request) == null ? void 0 : i.request) == null ? void 0 : a.type) === "42c" && (n.request.request.details.operationId = e.newOperationId), delete t.operations[e.oldOperationId], t.operations[e.newOperationId] = n;
  const o = "#" + pe.joinJsonPointer(["operations", e.oldOperationId, "request"]), r = "#" + pe.joinJsonPointer(["operations", e.newOperationId, "request"]);
  return gE(t, o, r);
}
function bE(t, e, n, o) {
  e.authenticationDetails || (e.authenticationDetails = [], e.authenticationDetails.push({}));
  const r = o.schema;
  return e.authenticationDetails[0][r] = n.authenticationDetails[0][r], e;
}
function xE(t) {
  return () => t({
    actionCreator: Yr,
    effect: async ({ payload: { oas: e, scanconf: n } }, o) => {
      const [r, i] = Wa(n);
      if (i !== void 0) {
        o.dispatch(
          mt({ message: `Failed to parse scan configuration: ${i}` })
        ), o.dispatch(se(["general-error"]));
        return;
      }
      const a = lE(e, r);
      if (a.length > 0) {
        o.dispatch(Hk({ scanconf: n, oas: e, changes: a })), o.dispatch(se(["scanconf-update"]));
        return;
      }
      const [l, u] = xl(e, r);
      if (u !== void 0) {
        const c = u.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        o.dispatch(mt({ message: c })), o.dispatch(se(["general-error"]));
        return;
      }
      o.dispatch(Xr({ playbook: l, oas: e })), o.dispatch(se(["scanconf", "requests"]));
    }
  });
}
function wE(t, e) {
  return () => t({
    actionCreator: xd,
    effect: async ({ payload: { oas: n, scanconf: o } }, r) => {
      const { changes: i, scanconf: a } = r.getState().scanconfUpdate, [l, u] = Wa(a);
      if (u !== void 0) {
        r.dispatch(
          mt({
            message: `Failed to parse original scan configuration: ${u}`
          })
        ), r.dispatch(se(["general-error"]));
        return;
      }
      const [c, d] = Wa(o);
      if (d !== void 0) {
        r.dispatch(
          mt({
            message: `Failed to parse updated scan configuration: ${d}`
          })
        ), r.dispatch(se(["general-error"]));
        return;
      }
      const p = vE(n, l, c, i), [h, m] = xl(n, p);
      if (m !== void 0) {
        const v = m.map((g) => `${g.message}: ${g.pointer}`).join(" ");
        r.dispatch(mt({ message: v })), r.dispatch(se(["general-error"]));
        return;
      }
      e.postMessage({
        command: "saveScanconf",
        payload: JSON.stringify(p, null, 2)
      }), r.dispatch(Xr({ playbook: h, oas: n })), r.dispatch(se(["scanconf", "requests"]));
    }
  });
}
function Wa(t) {
  try {
    return [JSON.parse(t), void 0];
  } catch (e) {
    return [void 0, `${e}`];
  }
}
const SE = (t, e) => ({
  runScan: () => t({
    actionCreator: as,
    effect: async (n, o) => {
      e.postMessage({
        command: "runScan",
        payload: n.payload
      });
    }
  }),
  runFullScan: () => t({
    actionCreator: bd,
    effect: async (n, o) => {
      e.postMessage({
        command: "runFullScan",
        payload: n.payload
      });
    }
  }),
  saveScanconf: () => t({
    matcher: Bn(
      Vo,
      Sd,
      us,
      ss,
      ls,
      Rt,
      Pt,
      At,
      Mt,
      Cd,
      Od,
      Td,
      Ed,
      _d,
      ua,
      cs
    ),
    effect: async (n, o) => {
      const { scanconf: r } = o.getState(), [i, a] = xi(r.oas, r.playbook);
      if (a !== void 0)
        return;
      const l = JSON.stringify(i, null, 2);
      e.postMessage({
        command: "saveScanconf",
        payload: l
      });
    }
  }),
  sendHttpRequest: () => t({
    actionCreator: uk,
    effect: async (n, o) => {
      const { id: r, request: i, config: a } = n.payload;
      e.postMessage({ command: "sendHttpRequest", payload: { id: r, request: i, config: a } });
    }
  }),
  showEnvWindow: () => t({
    actionCreator: Bc,
    effect: async (n, o) => {
      e.postMessage({ command: "showEnvWindow", payload: void 0 });
    }
  }),
  savePrefs: () => t({
    actionCreator: Uc,
    effect: async (n, o) => {
      const { prefs: r } = o.getState();
      e.postMessage({
        command: "savePrefs",
        payload: r
      });
    }
  }),
  openLink: Hg(t, e),
  updateScanconf: () => t({
    actionCreator: Bd,
    effect: async (n, o) => {
      e.postMessage({
        command: "updateScanconf",
        payload: void 0
      });
    }
  })
});
function CE(t) {
  return () => t({
    actionCreator: Hd,
    effect: async (e, n) => {
      const { oas: o, scanconf: r } = n.getState().scanconfUpdate, [i, a] = _E(r);
      if (a !== void 0) {
        n.dispatch(
          mt({ message: `Failed to parse scan configuration: ${a}` })
        ), n.dispatch(se(["general-error"]));
        return;
      }
      const [l, u] = xl(o, i);
      if (u !== void 0) {
        const c = u.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        n.dispatch(mt({ message: c })), n.dispatch(se(["general-error"]));
        return;
      }
      n.dispatch(Xr({ playbook: l, oas: o })), n.dispatch(se(["scanconf", "operations"]));
    }
  });
}
function _E(t) {
  try {
    return [JSON.parse(t), void 0];
  } catch (e) {
    return [void 0, `${e}`];
  }
}
const Xh = vf(), _e = Xh.startListening;
function TE(t, e) {
  const n = fT(_e), o = dT(_e), r = pT(_e), i = vT(_e), a = mT(_e), l = gT(_e), u = yT(_e), c = hT(_e), d = SE(_e, t);
  return Ug(_e, e), yf({
    ...d,
    executeTryScenarioListener: n,
    executeMockScenarioListener: o,
    executeRequestListener: i,
    executeMockRequestListener: r,
    executeMockAuthRequestsListener: a,
    executeTryAuthenticationListener: l,
    executeTryGlobalListener: u,
    executeMockGlobalListener: c,
    executeSendHttpRequestListener: yg(_e, t),
    executeShowScanconfOperationListener: xE(_e),
    executeLoadUpdatedScanconfListener: wE(_e, t),
    executeSkipScanconfUpdate: CE(_e)
  }), Xh;
}
function EE({
  operationId: t,
  goToRequest: e
}) {
  const n = oe(), { playbook: o, oas: r } = q((k) => k.scanconf), { scenarioId: i, mockResult: a } = q((k) => k.operations), l = o.operations[t].scenarios, u = Object.keys(o.operations), c = Object.keys(o.requests || {}), d = (k) => n(Md(k)), p = (k, j) => n(Mt({ location: k, reference: j })), h = (k) => n(At(k)), m = (k, j) => n(Pt({ location: k, to: j })), v = (k, j) => {
    n(
      Rt({
        container: k,
        stage: {
          ref: j
        }
      })
    );
  }, g = l.map((k, j) => ({
    id: `${j}`,
    title: k.key,
    /* not implemented
    menu: (
      <Menu>
        <MenuItem onSelect={() => undefined}>Delete</MenuItem>
      </Menu>
    ),
    */
    content: /* @__PURE__ */ s.jsxs(OE, { children: [
      /* @__PURE__ */ s.jsx(
        Pn,
        {
          oas: r,
          stages: k.requests,
          container: { container: "operationScenarios", operationId: t, scenarioIndex: j },
          executionResult: qe(a, "operationScenarios"),
          saveStage: p,
          moveStage: m,
          removeStage: h,
          operations: o.operations,
          requests: o.requests,
          goToRequest: e,
          fuzzing: !0
        }
      ),
      /* @__PURE__ */ s.jsx($E, { children: /* @__PURE__ */ s.jsx(
        An,
        {
          operationIds: u,
          requestIds: c,
          onSelect: (S) => v({ container: "operationScenarios", operationId: t, scenarioIndex: j }, S)
        }
      ) })
    ] })
  }));
  return /* @__PURE__ */ s.jsx(
    ft,
    {
      activeTab: `${i}`,
      setActiveTab: (k) => d(parseInt(k)),
      tabs: g
    }
  );
}
const OE = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`, $E = y.div`
  margin-left: 18px;
`;
function DE({
  authorizationTests: t,
  onSelect: e
}) {
  const n = "", o = "", r = t, [i, a] = b.useState(r), { isOpen: l, getMenuProps: u, getInputProps: c, getItemProps: d, openMenu: p } = Ur({
    initialInputValue: n,
    items: i,
    onSelectedItemChange: ({ selectedItem: h }) => {
      h && e(h);
    },
    onInputValueChange: ({ inputValue: h }) => {
      a(
        r.filter((m) => !h || m.toLowerCase().includes(h))
      );
    },
    itemToString: (h) => h || ""
  });
  return /* @__PURE__ */ s.jsxs(IE, { children: [
    /* @__PURE__ */ s.jsx(
      zE,
      {
        autoFocus: !0,
        ...c({
          onFocus() {
            p();
          }
        }),
        placeholder: o,
        onBlur: (h) => {
          e(void 0);
        }
      }
    ),
    /* @__PURE__ */ s.jsx(NE, { children: /* @__PURE__ */ s.jsx(RE, { ...u(), isOpen: l, children: l && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      i.map((h, m) => /* @__PURE__ */ s.jsx(
        "li",
        {
          ...d({
            item: h,
            index: m
          }),
          children: h
        },
        `li-${m}`
      )),
      i.length === 0 && /* @__PURE__ */ s.jsx("li", { children: "No more tests available" })
    ] }) }) })
  ] });
}
const IE = y.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${f.border});
`, zE = y.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${f.border});
  color: var(${f.foreground});
  &::placeholder {
    color: var(${f.inputPlaceholderForeground});
  }
`, NE = y.div`
  position: relative;
  z-index: 1;
`, RE = y.ul`
  ${({ isOpen: t }) => t && `border: 1px solid var(${f.dropdownBorder});`}
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
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
    background-color: var(${f.listHoverBackground});
  }
`;
function PE({
  authorizationTests: t,
  auth: e,
  existing: n,
  credentials: o,
  onSelect: r
}) {
  const [i, a] = b.useState(!1), u = Object.entries(t).filter(([c, d]) => ME(o, e, d.source[0])).map(([c]) => c).filter((c) => !n.includes(c));
  return i ? /* @__PURE__ */ s.jsx(
    DE,
    {
      onSelect: (c) => {
        c !== void 0 && r(c), a(!1);
      },
      authorizationTests: u
    }
  ) : /* @__PURE__ */ s.jsxs(
    AE,
    {
      onClick: (c) => {
        c.stopPropagation(), c.preventDefault(), a(!0);
      },
      children: [
        /* @__PURE__ */ s.jsx(Uo, {}),
        " Add authorization test"
      ]
    }
  );
}
const AE = y.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${f.border});
  color: var(${f.linkForeground});
  > svg {
    fill: var(${f.linkForeground});
  }
`;
function ME(t, e, n) {
  return e !== void 0 && e.some((o) => {
    var i;
    const r = (i = t[o]) == null ? void 0 : i.default;
    return n === o || n === `${o}/${r}`;
  });
}
function FE({
  authorizationTests: t,
  removeTest: e
}) {
  return /* @__PURE__ */ s.jsx(LE, { children: t.map((n, o) => /* @__PURE__ */ s.jsxs(qE, { children: [
    /* @__PURE__ */ s.jsx("div", { children: n }),
    /* @__PURE__ */ s.jsx(Ft, { children: /* @__PURE__ */ s.jsxs(dn, { onClick: (r) => r.stopPropagation(), onSelect: () => e(n), children: [
      /* @__PURE__ */ s.jsx(Ue, {}),
      "Delete"
    ] }) })
  ] }, o)) });
}
const LE = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, qE = y.div`
  border: 1px solid var(${f.border});
  background-color: var(${f.background});
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
function Qh(t, e) {
  if (t.operations !== void 0)
    for (const n of Object.keys(t == null ? void 0 : t.operations))
      n !== e && (t.operations[n].scenarios = [], t.operations[n].before = [], t.operations[n].after = [], t.operations[n].customTests = [], t.operations[n].authorizationTests = []);
  return JSON.stringify(t, null, 2);
}
function Ol(t, e, n, o, r) {
  return e === "api-token" && n == "docker" && o && (r === "darwin" || r === "win32") && (t.toLowerCase().startsWith("https://localhost") || t.toLowerCase().startsWith("http://localhost")) ? t.replace(/localhost/i, "host.docker.internal") : t;
}
function Si({
  path: t,
  method: e,
  operationId: n,
  children: o
}) {
  return /* @__PURE__ */ s.jsxs(BE, { children: [
    n && /* @__PURE__ */ s.jsxs(HE, { children: [
      n,
      /* @__PURE__ */ s.jsx(Qc, {})
    ] }),
    /* @__PURE__ */ s.jsxs(UE, { children: [
      /* @__PURE__ */ s.jsx(VE, { children: e }),
      /* @__PURE__ */ s.jsx(WE, { children: t })
    ] }),
    o
  ] });
}
const BE = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-break: anywhere;
`, HE = y.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  > svg {
    fill: var(${f.linkForeground});
  }
`, UE = y.div`
  display: flex;
  gap: 4px;
`, VE = y.div`
  background-color: var(${f.badgeBackground});
  color: var(${f.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, WE = y.div``;
function GE({ operationId: t }) {
  var B, O, A;
  const e = oe(), { oas: n, playbook: o, servers: r } = q((N) => N.scanconf), i = q((N) => N.config.data), { mockResult: a, tryResult: l } = q((N) => N.operations), u = q((N) => N.env.data), c = (N) => e(At(N)), d = (N, re) => e(Mt({ location: N, reference: re })), p = (N, re) => e(Pt({ location: N, to: re })), h = (N, re) => {
    e(
      Rt({
        container: N,
        stage: {
          ref: re
        }
      })
    );
  }, m = (N) => {
    e(Xt(N)), e(se(["scanconf", "requests"]));
  }, v = Object.keys(o.operations), g = Object.keys(o.requests || {}), k = o.operations[t], j = qe(a, "before"), S = qe(a, "after"), {
    simple: w,
    environment: {
      env: { host: $ }
    }
  } = hn(wi(o), u);
  return k === void 0 ? /* @__PURE__ */ s.jsx(
    Yt,
    {
      message: `Unable to find operation with operationId "${t}" in scan configuration`,
      children: /* @__PURE__ */ s.jsx("p", { children: "Verify if the OpenAPI file contains operations that were added after the scan configuration was created. If needed, consider deleting and recreating the scan configuration." })
    }
  ) : /* @__PURE__ */ s.jsxs(KE, { children: [
    /* @__PURE__ */ s.jsx(
      Mn,
      {
        menu: !0,
        servers: r,
        host: $,
        onTry: (N) => {
          e(Fd(N));
        },
        onScan: (N) => {
          const re = Ol(
            N,
            i.platformAuthType,
            i.scanRuntime,
            i.docker.replaceLocalhost,
            i.platform
          ), [I, R] = xi(n, o);
          if (R !== void 0) {
            console.log("failed to serialize", R);
            return;
          }
          e(
            as({
              path: k.request.request.path,
              method: k.request.request.method,
              operationId: t,
              env: {
                SCAN42C_HOST: re,
                ...w
              },
              scanconf: Qh(I, t)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ s.jsx(
      JE,
      {
        onClick: (N) => {
          N.stopPropagation(), N.preventDefault(), m({ type: "operation", id: t });
        },
        children: /* @__PURE__ */ s.jsx(
          Si,
          {
            operationId: t,
            path: k.request.request.path,
            method: k.request.request.method
          }
        )
      }
    ),
    /* @__PURE__ */ s.jsx(
      Se,
      {
        defaultOpen: !1,
        title: "Authorization Tests",
        count: k.authorizationTests.length,
        children: /* @__PURE__ */ s.jsxs(na, { children: [
          /* @__PURE__ */ s.jsx(
            FE,
            {
              authorizationTests: k.authorizationTests,
              removeTest: (N) => {
                const re = k.authorizationTests.filter((I) => I !== N);
                e(
                  ua({
                    operationId: t,
                    authorizationTests: re
                  })
                );
              }
            }
          ),
          /* @__PURE__ */ s.jsx(
            PE,
            {
              authorizationTests: o.authorizationTests,
              existing: k.authorizationTests,
              auth: k.request.auth,
              credentials: o.authenticationDetails[0],
              onSelect: (N) => {
                e(
                  ua({
                    operationId: t,
                    authorizationTests: [...k.authorizationTests, N]
                  })
                );
              }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(Se, { defaultOpen: !1, title: "Before", count: (B = k.before) == null ? void 0 : B.length, children: /* @__PURE__ */ s.jsxs(na, { children: [
      /* @__PURE__ */ s.jsx(
        Pn,
        {
          oas: n,
          stages: k.before,
          container: { container: "operationBefore", operationId: t },
          executionResult: qe(a, "operationBefore"),
          saveStage: d,
          moveStage: p,
          removeStage: c,
          operations: o.operations,
          requests: o.requests,
          goToRequest: m
        }
      ),
      /* @__PURE__ */ s.jsx(
        An,
        {
          operationIds: v,
          requestIds: g,
          onSelect: (N) => h({ container: "operationBefore", operationId: t }, N)
        }
      )
    ] }) }),
    /* @__PURE__ */ s.jsx(Se, { title: "Scenarios", count: (O = k.scenarios) == null ? void 0 : O.length, children: /* @__PURE__ */ s.jsx(EE, { operationId: t, goToRequest: m }) }),
    /* @__PURE__ */ s.jsx(Se, { defaultOpen: !1, title: "After", count: (A = k.after) == null ? void 0 : A.length, children: /* @__PURE__ */ s.jsxs(na, { children: [
      /* @__PURE__ */ s.jsx(
        Pn,
        {
          oas: n,
          stages: k.after,
          container: { container: "operationAfter", operationId: t },
          executionResult: qe(a, "operationAfter"),
          saveStage: d,
          removeStage: c,
          moveStage: p,
          operations: o.operations,
          requests: o.requests,
          goToRequest: m
        }
      ),
      /* @__PURE__ */ s.jsx(
        An,
        {
          operationIds: v,
          requestIds: g,
          onSelect: (N) => h({ container: "operationAfter", operationId: t }, N)
        }
      )
    ] }) }),
    (j == null ? void 0 : j.status) === "failure" && /* @__PURE__ */ s.jsx(Yt, { message: "Check Global Before block" }),
    (S == null ? void 0 : S.status) === "failure" && /* @__PURE__ */ s.jsx(Yt, { message: "Check Global After block" }),
    l.length > 0 && /* @__PURE__ */ s.jsx(Se, { title: "Result", children: /* @__PURE__ */ s.jsx(Nn, { result: l, collapsible: !0 }) })
  ] });
}
const KE = y.div`
  padding: 8px;
`, na = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, JE = y.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 8px;
  border: 1px solid var(${f.border});
  border-radius: 2px;
  cursor: pointer;
`, Zh = y.button`
  cursor: pointer;
  background-color: var(${f.buttonSecondaryBackground});
  color: var(${f.buttonSecondaryForeground});
  border: 1px solid var(${f.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${f.buttonSecondaryHoverBackground});
  }
`;
function YE({
  onAddScenario: t,
  operations: e
}) {
  const n = Object.entries(e).filter(([l, u]) => !u.customized).map(([l, u]) => l), [o, r] = b.useState(!1), [i, a] = b.useState(
    void 0
  );
  return /* @__PURE__ */ s.jsxs(
    vs,
    {
      open: o,
      onOpenChange: (l) => {
        r(l);
      },
      children: [
        /* @__PURE__ */ s.jsx(ys, { asChild: !0, children: /* @__PURE__ */ s.jsx(No, { style: { width: "100%" }, children: "New scenario" }) }),
        /* @__PURE__ */ s.jsxs(ks, { children: [
          /* @__PURE__ */ s.jsx(ZE, {}),
          /* @__PURE__ */ s.jsx(eO, { children: /* @__PURE__ */ s.jsxs(XE, { children: [
            /* @__PURE__ */ s.jsx(xs, { children: "New Scenario" }),
            /* @__PURE__ */ s.jsx(ws, { children: "Add happy path scenario for an operation" }),
            /* @__PURE__ */ s.jsx(QE, { children: /* @__PURE__ */ s.jsx(
              sh,
              {
                options: n,
                placeholder: "Select operation",
                onSelectedItemChange: (l) => {
                  a(l);
                }
              }
            ) }),
            /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
              /* @__PURE__ */ s.jsx(
                No,
                {
                  onClick: () => {
                    i != null && n.includes(i) && (t(i), r(!1));
                  },
                  children: "Add"
                }
              ),
              /* @__PURE__ */ s.jsx(Ss, { asChild: !0, children: /* @__PURE__ */ s.jsx(Zh, { children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
const XE = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, QE = y.div`
  border: 1px solid var(${f.border});
`, ZE = y(js)`
  background-color: var(${f.computedTwo});
  position: fixed;
  inset: 0;
`, eO = y(bs)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${f.background});
  color: var(${f.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function tO() {
  const t = oe(), e = q((l) => l.operations.operationId), n = (l) => t(Ad(l)), o = (l) => t(mk(l)), {
    playbook: { operations: r }
  } = q((l) => l.scanconf), a = [
    {
      id: "operations",
      title: "Operations",
      items: Object.entries(r).filter(([l, u]) => u.customized).map(([l, u]) => ({ id: l, label: l }))
    }
  ];
  return /* @__PURE__ */ s.jsx(
    Un,
    {
      title: "operations",
      noSectionTitles: !0,
      selected: e ? { sectionId: "operations", itemId: e } : void 0,
      sections: a,
      onSelected: (l) => n(l.itemId),
      render: (l) => /* @__PURE__ */ s.jsx(GE, { operationId: l.itemId }, l.itemId),
      renderEmpty: () => /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h2", { children: "Scenarios" }),
        /* @__PURE__ */ s.jsx("p", { children: "Scan scenarios let you test operations that involve complex request flows" }),
        /* @__PURE__ */ s.jsx("p", { children: "Scenarios let you set up exact request and response sequences, ensuring resources are created or deleted as needed for testing specific API operations. Additionally, you can extract values from responses and pass them between subsequent operations." })
      ] }),
      renderButtons: () => /* @__PURE__ */ s.jsx(
        YE,
        {
          operations: r,
          onAddScenario: (l) => {
            n(l), o(l);
          }
        }
      )
    }
  );
}
function nO(t) {
  return t ? t.label : "";
}
function xc({
  name: t,
  options: e,
  placeholder: n,
  label: o
}) {
  const { field: r } = Q({
    name: t,
    rules: { required: !0 }
  }), i = rO(e, r.value), a = (l) => {
    r.onChange(l == null ? void 0 : l.value);
  };
  return /* @__PURE__ */ s.jsx(
    oO,
    {
      options: e,
      placeholder: n,
      label: o,
      selected: i == null ? void 0 : i.value,
      onSelectedItemChange: a
    }
  );
}
function oO({
  options: t,
  placeholder: e,
  label: n,
  selected: o,
  onSelectedItemChange: r
}) {
  var d;
  const i = (d = t.filter((p) => p.value === o)) == null ? void 0 : d[0], { isOpen: a, getToggleButtonProps: l, getMenuProps: u, getItemProps: c } = Hr({
    items: t,
    itemToString: nO,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      r(p);
    }
  });
  return /* @__PURE__ */ s.jsxs(iO, { children: [
    /* @__PURE__ */ s.jsxs(aO, { children: [
      n !== void 0 && /* @__PURE__ */ s.jsx("div", { children: n }),
      /* @__PURE__ */ s.jsxs(sO, { ...l(), children: [
        /* @__PURE__ */ s.jsx("span", { children: i ? i.label : e ?? "" }),
        /* @__PURE__ */ s.jsx(Fo, {})
      ] })
    ] }),
    /* @__PURE__ */ s.jsx(lO, { ...u(), isOpen: a, children: a && t.map((p, h) => /* @__PURE__ */ s.jsx("li", { ...c({ item: p, index: h }), children: /* @__PURE__ */ s.jsx("span", { children: p.label }) }, `${p.value}${h}`)) })
  ] });
}
function rO(t, e) {
  var n;
  return (n = t.filter((o) => o.value === e)) == null ? void 0 : n[0];
}
const iO = y.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, aO = y.div`
  height: 40px;
  background-color: var(${f.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${f.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${f.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${f.inputPlaceholderForeground});
  }
`, sO = y.div`
  display: flex;
  color: var(${f.foreground});
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
    fill: var(${f.foreground});
  }
`, lO = y.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
  ${({ isOpen: t }) => t && `
    border: 1px solid var(${f.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${f.listHoverBackground});
  }
`;
function uO({
  onAddExternalRequest: t
}) {
  const e = Yc({
    defaultValues: {
      id: "",
      method: "post",
      url: "http://localhost:8080/",
      mode: "json"
    },
    mode: "onChange"
  }), n = Nf.map((a) => ({ value: a, label: a.toUpperCase() })), [o, r] = b.useState(!1), i = (a) => {
    t(a.id, a.method, a.url, a.mode);
  };
  return /* @__PURE__ */ s.jsxs(
    vs,
    {
      open: o,
      onOpenChange: (a) => {
        r(a), a && e.reset();
      },
      children: [
        /* @__PURE__ */ s.jsx(ys, { asChild: !0, children: /* @__PURE__ */ s.jsx(mO, { children: /* @__PURE__ */ s.jsx(Uo, {}) }) }),
        /* @__PURE__ */ s.jsxs(ks, { children: [
          /* @__PURE__ */ s.jsx(dO, {}),
          /* @__PURE__ */ s.jsx(pO, { children: /* @__PURE__ */ s.jsx(Xc, { ...e, children: /* @__PURE__ */ s.jsxs(
            cO,
            {
              onSubmit: (a) => {
                e.handleSubmit(i)(a), a.preventDefault(), r(!1);
              },
              children: [
                /* @__PURE__ */ s.jsx(xs, { children: "New External Request" }),
                /* @__PURE__ */ s.jsx(ws, { children: "Add new external request" }),
                /* @__PURE__ */ s.jsx(Ge, { label: "Request ID", name: "id" }),
                /* @__PURE__ */ s.jsx(Ge, { label: "URL", name: "url" }),
                /* @__PURE__ */ s.jsx(xc, { label: "Method", name: "method", options: n }),
                /* @__PURE__ */ s.jsx(
                  xc,
                  {
                    label: "Content type",
                    name: "mode",
                    options: [
                      { value: "json", label: "application/json" },
                      { value: "urlencoded", label: "application/x-www-form-urlencoded" }
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
                  /* @__PURE__ */ s.jsx(No, { type: "submit", children: "Add" }),
                  /* @__PURE__ */ s.jsx(Ss, { asChild: !0, children: /* @__PURE__ */ s.jsx(Zh, { children: "Cancel" }) })
                ] })
              ]
            }
          ) }) })
        ] })
      ]
    }
  );
}
const cO = y.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, dO = y(js)`
  background-color: var(${f.computedTwo});
  position: fixed;
  inset: 0;
`, pO = y(bs)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${f.background});
  color: var(${f.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, mO = y.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${f.linkForeground});
    &:hover {
      fill: var(${f.linkActiveForeground});
    }
  }
`;
function ef({ name: t, variables: e }) {
  const {
    field: { value: n }
  } = Q({
    name: t
  });
  function o(l) {
    console.error(l);
  }
  const r = {
    namespace: "editor",
    editorState: () => {
      const l = JSON.stringify(n, null, 2), u = U.$createParagraphNode(), c = l.split(`
`);
      for (let d = 0; d < c.length; d++)
        u.append(...nl(c[d])), d < c.length - 1 && u.append(U.$createLineBreakNode());
      U.$getRoot().append(u);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: o,
    nodes: [zt]
  }, [i, a] = b.useState(!1);
  return /* @__PURE__ */ s.jsx(fO, { children: /* @__PURE__ */ s.jsxs(Us.LexicalComposer, { initialConfig: r, children: [
    /* @__PURE__ */ s.jsx(
      el.PlainTextPlugin,
      {
        contentEditable: /* @__PURE__ */ s.jsx(Vs.ContentEditable, {}),
        placeholder: /* @__PURE__ */ s.jsx("div", {}),
        ErrorBoundary: Ws
      }
    ),
    /* @__PURE__ */ s.jsx(Js.HistoryPlugin, {}),
    i && /* @__PURE__ */ s.jsx(rh, { variables: e }),
    /* @__PURE__ */ s.jsx(hO, { name: t }),
    /* @__PURE__ */ s.jsx(ih, { onFocus: (l) => a(l) })
  ] }) });
}
function hO({ name: t }) {
  const [e] = Ne.useLexicalComposerContext(), [n, o] = b.useState(void 0), { field: r } = Q({
    name: t
  });
  return b.useEffect(() => {
    let i;
    return e.registerTextContentListener((a) => {
      i !== void 0 && clearTimeout(i);
      try {
        r.onChange(JSON.parse(a)), o(void 0);
      } catch (l) {
        i = setTimeout(() => {
          l instanceof SyntaxError ? o(l.message) : o(`${l}`);
        }, 500);
      }
    });
  }, [e, r]), n === void 0 ? /* @__PURE__ */ s.jsxs(wc, { children: [
    "Valid JSON",
    /* @__PURE__ */ s.jsx(
      td,
      {
        style: {
          fill: `var(${f.foreground})`
        }
      }
    )
  ] }) : /* @__PURE__ */ s.jsxs(wc, { error: !0, children: [
    n,
    /* @__PURE__ */ s.jsx(
      Br,
      {
        style: {
          fill: `var(${f.errorForeground})`
        }
      }
    )
  ] });
}
const fO = y.div`
  color: var(${f.foreground});
  background-color: var(${f.background});
  border: 1px solid var(${f.border});

  &:focus-within {
    //border: 1px solid var(${f.focusBorder});
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
`, wc = y.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding: 2px 4px;
  border-top: 1px solid var(${f.border});
  line-break: anywhere;
  color: ${({ error: t }) => t ? `var(${f.errorForeground})` : `var(${f.foreground})`};
  background-color: ${({ error: t }) => t ? `var(${f.errorBackground})` : `var(${f.background})`};
`;
function gO({
  name: t,
  password: e
}) {
  const { field: n } = Q({
    name: t
  });
  return /* @__PURE__ */ s.jsx("input", { ...n, type: e ? "password" : "text" });
}
function Sc({
  name: t,
  variables: e
}) {
  const { fields: n, append: o, remove: r } = cn({
    name: t
  });
  return /* @__PURE__ */ s.jsx(kO, { children: /* @__PURE__ */ s.jsxs(jO, { children: [
    /* @__PURE__ */ s.jsxs(xO, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Value" }),
      /* @__PURE__ */ s.jsx("div", {})
    ] }),
    /* @__PURE__ */ s.jsx(bO, { children: n.map((i, a) => /* @__PURE__ */ s.jsx(
      wO,
      {
        name: `${t}.${a}`,
        variables: e,
        remove: () => {
          r(a);
        }
      },
      i.id
    )) }),
    /* @__PURE__ */ s.jsx(vO, { append: o })
  ] }) });
}
function vO({ append: t }) {
  return /* @__PURE__ */ s.jsx(
    yO,
    {
      placeholder: "name",
      value: "",
      onChange: (e) => {
        t({ key: e.target.value, value: "" }, { shouldFocus: !0 });
      }
    }
  );
}
const yO = y.input`
  grid-column: span 3;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${f.border});
  color: var(${f.foreground});
  margin-right: 10px;
  padding: 4px 8px;
`, kO = y.div`
  margin: 8px 4px;
`, jO = y.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, bO = y.div`
  display: contents;
`, xO = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function wO({
  name: t,
  variables: e,
  remove: n
}) {
  return /* @__PURE__ */ s.jsxs(CO, { children: [
    /* @__PURE__ */ s.jsx(gO, { name: `${t}.key` }),
    /* @__PURE__ */ s.jsx(gi, { name: `${t}.value`, variables: e }),
    /* @__PURE__ */ s.jsx(
      SO,
      {
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), n();
        },
        children: /* @__PURE__ */ s.jsx(Ue, {})
      }
    )
  ] });
}
const SO = y.button`
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
    fill: var(${f.foreground});
  }
`, CO = y.div`
  display: contents;
  > input,
  > div {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(${f.border});
    color: var(${f.foreground});
    padding: 4px 8px;
  }
  &:hover > :last-child {
    visibility: visible;
  }
`;
function _O({
  requestRef: t,
  stage: e,
  saveRequest: n,
  defaultCollapsed: o,
  variables: r
}) {
  const i = EO(e);
  return /* @__PURE__ */ s.jsx(tf, { children: /* @__PURE__ */ s.jsx(
    ot,
    {
      data: e,
      saveData: n,
      wrapFormData: lC,
      unwrapFormData: pC,
      children: /* @__PURE__ */ s.jsxs(ln, { defaultCollapsed: o, children: [
        /* @__PURE__ */ s.jsxs(Kc, { children: [
          /* @__PURE__ */ s.jsx("span", { children: t.id }),
          /* @__PURE__ */ s.jsxs(IO, { children: [
            /* @__PURE__ */ s.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ s.jsx(sl, { name: "defaultResponse", options: i })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs(Gn, { children: [
          /* @__PURE__ */ s.jsx(DO, { children: e.request.method }),
          /* @__PURE__ */ s.jsx($O, { onClick: (a) => a.stopPropagation(), children: /* @__PURE__ */ s.jsx(gi, { variables: r, name: "url" }) })
        ] }),
        /* @__PURE__ */ s.jsx(TO, { stage: e, variables: r })
      ] })
    }
  ) });
}
function TO({
  stage: t,
  variables: e
}) {
  return /* @__PURE__ */ s.jsx(tf, { children: /* @__PURE__ */ s.jsx(
    ft,
    {
      tabs: [
        {
          id: "body",
          title: "Body",
          content: /* @__PURE__ */ s.jsx(ef, { variables: e, name: "body.value" }),
          disabled: t.request.body === void 0
        },
        {
          id: "query",
          title: "Query",
          content: /* @__PURE__ */ s.jsx(Sc, { name: "parameters.query", variables: e })
        },
        {
          id: "header",
          title: "Headers",
          content: /* @__PURE__ */ s.jsx(Sc, { name: "parameters.header", variables: e })
        },
        {
          id: "responses",
          title: "Response processing",
          content: /* @__PURE__ */ s.jsx(ti, { editable: !0, responseCodes: OO })
        }
      ]
    }
  ) });
}
function EO(t) {
  return Object.keys(t.responses || {}).map((e) => ({ label: e, value: e }));
}
const OO = [
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
], tf = y.div`
  > div {
    background-color: var(${f.background});
  }
`, $O = y.div`
  flex: 1;
  background-color: var(${f.background});
  border: 1px solid var(${f.border});
`, DO = y.div`
  background-color: var(${f.badgeBackground});
  color: var(${f.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, IO = y.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${f.border});
  }
`;
function zO({
  request: t,
  requestRef: e
}) {
  var w, $, B;
  const n = q((O) => O.prefs.useGlobalBlocks), {
    tryResult: o,
    mockResult: r,
    mockMissingVariables: i
  } = q((O) => O.requests), a = oe(), { playbook: l, servers: u } = q((O) => O.scanconf), c = q((O) => O.env.data), d = (O, A) => a(ds({ server: O, inputs: A })), p = (O) => a(Vo({ ref: e, stage: O })), h = qe(r, "Global Before"), m = qe(r, "Global After"), v = qe(r, "Request"), g = [
    ...Za,
    ...LO(((B = ($ = (w = v == null ? void 0 : v.results) == null ? void 0 : w[0]) == null ? void 0 : $.variablesReplaced) == null ? void 0 : B.stack) || [])
  ], [k, j] = b.useState({}), {
    environment: {
      env: { host: S }
    }
  } = hn(wi(l), c);
  return b.useEffect(() => {
    const O = { ...k };
    for (const A of Object.keys(O))
      i.includes(A) || delete O[A];
    for (const A of i)
      O[A] === void 0 && (O[A] = "");
    j(O);
  }, [i]), /* @__PURE__ */ s.jsxs(NO, { children: [
    /* @__PURE__ */ s.jsx(
      Mn,
      {
        servers: u,
        host: S,
        onTry: (O) => d(O, k),
        menu: !0
      }
    ),
    /* @__PURE__ */ s.jsxs(Se, { title: "Request", children: [
      /* @__PURE__ */ s.jsx(
        _O,
        {
          defaultCollapsed: !1,
          variables: g,
          requestRef: e,
          stage: t,
          saveRequest: p
        }
      ),
      /* @__PURE__ */ s.jsxs(FO, { children: [
        "Unset variables",
        /* @__PURE__ */ s.jsx(Vn, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ s.jsx(MO, { children: /* @__PURE__ */ s.jsx(
        ot,
        {
          wrapFormData: RO,
          unwrapFormData: PO,
          data: k,
          saveData: (O) => j(O),
          children: /* @__PURE__ */ s.jsx(Xo, { name: "env" })
        }
      ) })
    ] }),
    n && (h == null ? void 0 : h.status) === "failure" && /* @__PURE__ */ s.jsx(Cc, { children: /* @__PURE__ */ s.jsx(Yt, { message: "Check Global Before block" }) }),
    n && (m == null ? void 0 : m.status) === "failure" && /* @__PURE__ */ s.jsx(Cc, { children: /* @__PURE__ */ s.jsx(Yt, { message: "Check Global After block" }) }),
    o.length > 0 && /* @__PURE__ */ s.jsx(Se, { title: "Result", children: /* @__PURE__ */ s.jsx(Nn, { result: o, collapsible: n }) })
  ] });
}
const NO = y.div`
  padding: 8px;
`, Cc = y.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function RO(t) {
  return {
    env: Object.entries(t).map(([e, n]) => ({ key: e, value: n, type: typeof n }))
  };
}
function PO(t) {
  const e = {};
  for (const { key: n, value: o, type: r } of t.env)
    e[n] = AO(o, r);
  return e;
}
function AO(t, e) {
  if (e !== "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return `${t}`;
}
const MO = y.div`
  border: 1px solid var(${f.border});
  background-color: var(${f.background});
`, FO = y.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function LO(t) {
  const e = [];
  for (const n of t)
    for (const o of Object.keys(n.env))
      e.includes(o) || e.push(o);
  return e.sort(), e;
}
const qO = { type: "string" };
function BO({
  name: t,
  schema: e,
  onDelete: n,
  variables: o,
  isDefinedInOpenAPI: r
}) {
  const {
    fieldState: { error: i }
  } = Q({ name: `${t}.value` }), { field: a } = Q({ name: `${t}.key` });
  return /* @__PURE__ */ s.jsxs(HO, { children: [
    /* @__PURE__ */ s.jsxs(VO, { children: [
      a.value,
      !r && /* @__PURE__ */ s.jsx(Vn, { icon: "exclamation", children: "Parameter is not defined in the OpenAPI specification for this API" })
    ] }),
    /* @__PURE__ */ s.jsx(
      gi,
      {
        name: `${t}.value`,
        variables: o,
        encode: (l) => GO(e || qO, l),
        decode: (l) => KO(e, l)
      }
    ),
    /* @__PURE__ */ s.jsx(
      WO,
      {
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), n();
        },
        children: /* @__PURE__ */ s.jsx(Ue, {})
      }
    ),
    i && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsxs(UO, { children: [
        /* @__PURE__ */ s.jsx(nt, {}),
        /* @__PURE__ */ s.jsx("span", { children: i.message })
      ] }),
      /* @__PURE__ */ s.jsx("div", {})
    ] })
  ] });
}
const HO = y.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, UO = y.div`
  color: var(${f.errorForeground});
  background-color: var(${f.errorBackground});
  border: none !important;
  align-items: center;
  > svg {
    fill: var(${f.errorForeground});
  }
  display: flex;
  gap: 4px;
  grid-column: span 2;
`, VO = y.div`
  flex: 1;
  border-bottom: 1px solid var(${f.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, WO = y.button`
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
    fill: var(${f.foreground});
  }
`;
function GO(t, e) {
  if (e === void 0)
    return "";
  const n = t.type;
  return n === void 0 || n === "string" || n === "number" || n === "integer" || n === "boolean" ? `${e}` : JSON.stringify(e);
}
function KO(t, e) {
  const n = (t == null ? void 0 : t.type) || "string";
  if (e.match(Rg()) || n === "string")
    return e;
  if (n === "integer")
    return JO(e);
  if (n === "number")
    return YO(e);
  if (n === "boolean") {
    if (e === "true" || e === "false")
      return e === "true";
    throw new Error("failed to convert to 'boolean'");
  }
  if (n === "object" || n === "array")
    return XO(e);
  throw new Error(`failed to convert, unsupported type: ${n}`);
}
function JO(t) {
  const e = Number.parseInt(t, 10);
  if (isNaN(e))
    throw new Error("failed to convert to 'integer'");
  return e;
}
function YO(t) {
  const e = Number.parseFloat(t);
  if (isNaN(e))
    throw new Error("failed to convert to 'number'");
  return e;
}
function XO(t) {
  try {
    return JSON.parse(t);
  } catch (e) {
    throw new Error(`failed to convert: ${e}`);
  }
}
function QO({
  options: t,
  placeholder: e,
  selected: n,
  onSelectedItemChange: o
}) {
  const [r, i] = b.useState(""), [a, l] = b.useState(t);
  b.useEffect(() => {
    l(
      t.filter((m) => r === "" || m.toLowerCase().includes(r.toLowerCase()))
    );
  }, [r, t]);
  const { isOpen: u, getMenuProps: c, getInputProps: d, getItemProps: p, reset: h } = Ur({
    initialInputValue: n,
    items: a,
    onSelectedItemChange: ({ selectedItem: m }) => {
      h(), o(m);
    },
    onInputValueChange: ({ inputValue: m }) => {
      i(m !== void 0 ? m : "");
    },
    itemToString: (m) => m || ""
  });
  return /* @__PURE__ */ s.jsxs(ZO, { children: [
    /* @__PURE__ */ s.jsx(
      e$,
      {
        ...d({
          onKeyDown: (m) => {
            (m.key === "Enter" || m.key === "Tab") && (o(r), i(""), h());
          }
        }),
        placeholder: e
      }
    ),
    /* @__PURE__ */ s.jsx(t$, { visible: u && (a.length > 0 || r.length > 0), children: /* @__PURE__ */ s.jsxs(n$, { ...c(), children: [
      a.map((m, v) => /* @__PURE__ */ s.jsx(
        "li",
        {
          ...p({
            item: m,
            index: v
          }),
          children: m
        },
        `li-${v}`
      )),
      r.length > 0 && a.length === 0 && /* @__PURE__ */ s.jsx(
        "li",
        {
          onClick: (m) => {
            m.stopPropagation(), m.preventDefault(), o(r), i(""), h();
          },
          children: r
        }
      )
    ] }) })
  ] });
}
const ZO = y.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${f.focusBorder});
  }
  border: 1px solid transparent;
`, e$ = y.input`
  background: transparent;
  border: none;
  color: var(${f.foreground});
  &::placeholder {
    color: var(${f.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, t$ = y.div`
  position: relative;
  z-index: 1;
  visibility: ${({ visible: t }) => t ? "visible" : "hidden"};
`, n$ = y.ul`
  border: 1px solid var(${f.dropdownBorder});
  background-color: var(${f.dropdownBackground});
  color: var(${f.dropdownForeground});
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
    background-color: var(${f.listHoverBackground});
  }
`;
function o$({
  name: t,
  group: e,
  onSelection: n,
  placeholder: o,
  allowUnknown: r
}) {
  const i = Bo({ name: t }), a = Object.keys(e), l = i.map(({ key: d }) => d), u = Object.entries(e).map(([d, p]) => ({
    name: d,
    isArray: r$(p)
  })).filter(({ isArray: d }) => d).map(({ name: d }) => d), c = a.filter(
    (d) => u.includes(d) || !l.includes(d)
  );
  return /* @__PURE__ */ s.jsx(i$, { children: /* @__PURE__ */ s.jsxs("div", { children: [
    r && /* @__PURE__ */ s.jsx(
      QO,
      {
        placeholder: o,
        options: a.filter((d) => c.includes(d)),
        onSelectedItemChange: (d) => {
          d && n(d, e[d]);
        }
      }
    ),
    !r && /* @__PURE__ */ s.jsx(
      Yn,
      {
        placeholder: o,
        options: a.map((d) => ({
          label: d,
          value: d,
          disabled: !c.includes(d)
        })),
        onSelectedItemChange: (d) => {
          d && n(d.value, e[d.value]);
        }
      }
    )
  ] }) });
}
function r$(t) {
  var e;
  return "type" in t && t.type === "array" || "schema" in t && ((e = t.schema) == null ? void 0 : e.type) === "array";
}
const i$ = y.div`
  display: flex;
  margin-right: 10px;
  > div {
    flex: 1;
  }
`;
function Jt({
  oas: t,
  name: e,
  group: n,
  placeholder: o,
  variables: r,
  allowUnknown: i
}) {
  const { fields: a, append: l, remove: u } = cn({
    name: e
  }), c = async (d, p) => {
    l({ key: d, value: "" }, { shouldFocus: !0 });
  };
  return /* @__PURE__ */ s.jsxs(d$, { children: [
    /* @__PURE__ */ s.jsxs(p$, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Value" }),
      /* @__PURE__ */ s.jsx("div", {})
    ] }),
    /* @__PURE__ */ s.jsxs(m$, { children: [
      a.map((d, p) => /* @__PURE__ */ s.jsx(
        BO,
        {
          name: `${e}.${p}`,
          schema: s$(t, n, d.key),
          onDelete: () => u(p),
          variables: r,
          isDefinedInOpenAPI: a$(n, d.key)
        },
        d.id
      )),
      /* @__PURE__ */ s.jsx(
        o$,
        {
          placeholder: o,
          name: e,
          group: n,
          onSelection: c,
          allowUnknown: i
        }
      )
    ] })
  ] });
}
function a$(t, e) {
  return t[e] !== void 0;
}
function s$(t, e, n) {
  if (e[n]) {
    const o = e[n];
    return l$(o) ? c$(t, o) : u$(o);
  }
}
function l$(t) {
  var e;
  return "type" in t && t.type === "array" || "schema" in t && ((e = t.schema) == null ? void 0 : e.type) === "array";
}
function u$(t) {
  if ("schema" in t)
    return t.schema;
  if ("type" in t)
    return t;
}
function c$(t, e) {
  var n;
  if ("schema" in e && ((n = e.schema) == null ? void 0 : n.type) === "array")
    return In(t, e.schema.items);
  if ("type" in e && e.type === "array")
    return In(t, e.items);
}
const d$ = y.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, p$ = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, m$ = y.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${f.border});
  }
  & > div > div:last-child {
    padding: 2px 5px;
  }
  // for now keep with of a new entry selector to 1 column
  // & > div:last-child {
  //   grid-column: span 3;
  // }
`;
function h$(t, e, n) {
  const o = Mc(t, t.paths[e]), r = Mr(t, e, n), i = Fc(t, r);
  return Lc(t, o, i);
}
function f$(t, e, n) {
  const o = Mr(t, e, n);
  return ((o == null ? void 0 : o.security) ?? t.security ?? []).length > 0;
}
function g$(t, e, n) {
  var a, l;
  const o = Mr(t, e, n), r = (o == null ? void 0 : o.security) ?? t.security ?? [], i = [];
  for (const u of r) {
    const c = {};
    for (const d of Object.keys(u))
      (a = t == null ? void 0 : t.securityDefinitions) != null && a[d] && (c[d] = (l = t == null ? void 0 : t.securityDefinitions) == null ? void 0 : l[d]);
    i.push(c);
  }
  return i;
}
function v$({
  scheme: t,
  schemeName: e,
  credentials: n,
  value: o,
  onChange: r
}) {
  const i = oe(), l = j$(n).filter(
    ({ credential: u }) => ll(u, t)
  ).map(({ name: u }) => ({ label: u, value: u }));
  return /* @__PURE__ */ s.jsx(y$, { children: /* @__PURE__ */ s.jsx(
    Yn,
    {
      placeholder: "",
      options: l,
      selected: o,
      onSelectedItemChange: (u) => u && r(u.value),
      bottomMenu: /* @__PURE__ */ s.jsxs(
        k$,
        {
          onClick: (u) => {
            u.stopPropagation(), u.preventDefault(), i(se(["scanconf", "auth"]));
          },
          children: [
            "Manage authentication ",
            /* @__PURE__ */ s.jsx(Vc, {})
          ]
        }
      )
    }
  ) });
}
const y$ = y.div``, k$ = y.li`
  color: var(${f.linkForeground});
  &:hover {
    color: var(${f.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function j$(t) {
  return Object.entries(t).map(([e, n]) => Object.entries(n.methods || {}).map(([o, r]) => ({ name: n.default === o ? e : `${e}/${o}`, credential: n }))).flat();
}
function b$({
  requirement: t,
  credentials: e,
  values: n,
  setValues: o
}) {
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: Object.keys(t).sort().map((r) => {
    const i = t[r];
    return /* @__PURE__ */ s.jsxs(x$, { children: [
      /* @__PURE__ */ s.jsxs(w$, { children: [
        'Credential for "',
        r,
        '"'
      ] }),
      /* @__PURE__ */ s.jsx(
        v$,
        {
          value: n[r],
          scheme: i,
          schemeName: r,
          credentials: e,
          onChange: (a) => {
            const l = { ...n };
            a !== void 0 ? l[r] = a : l[r] = "", o(l);
          }
        }
      )
    ] }, r);
  }) });
}
const x$ = y.div`
  display: contents;
`, w$ = y.div`
  display: flex;
  align-items: center;
`;
function S$({
  security: t,
  value: e,
  setValue: n
}) {
  const o = t.map((r, i) => ({
    value: i,
    label: Object.keys(r).sort().join(", ")
  }));
  return /* @__PURE__ */ s.jsxs(C$, { children: [
    /* @__PURE__ */ s.jsx(_$, { children: "Security scheme(s)" }),
    /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(
      Yn,
      {
        options: o,
        selected: e,
        onSelectedItemChange: (r) => r && n(r.value)
      }
    ) })
  ] });
}
const C$ = y.div`
  display: contents;
`, _$ = y.div`
  display: flex;
  align-items: center;
`;
function nf({
  oas: t,
  security: e,
  credentials: n
}) {
  const { field: o } = Q({
    name: "auth"
  }), r = $$(e, n, o.value), i = r.reduce(
    (u, c) => u.relevance > c.relevance ? u : c
  ), [a, l] = b.useState(
    i.requirementIndex
  );
  return /* @__PURE__ */ s.jsxs(T$, { children: [
    /* @__PURE__ */ s.jsxs(E$, { children: [
      /* @__PURE__ */ s.jsx("div", { children: "Name" }),
      /* @__PURE__ */ s.jsx("div", { children: "Value" })
    ] }),
    /* @__PURE__ */ s.jsxs(O$, { children: [
      /* @__PURE__ */ s.jsx(
        S$,
        {
          security: e,
          value: a,
          setValue: (u) => {
            l(u), o.onChange(Object.values(r[u].matches));
          }
        }
      ),
      /* @__PURE__ */ s.jsx(
        b$,
        {
          requirement: e[a],
          credentials: n,
          values: r[a].matches,
          setValues: (u) => {
            const c = Object.values(u);
            o.onChange(c);
          }
        }
      )
    ] })
  ] });
}
const T$ = y.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`, E$ = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, O$ = y.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${f.border});
  }
`;
function $$(t, e, n) {
  const o = D$(e, n);
  return t.map((r, i) => {
    const a = z$(r, o), l = Object.keys(r).length, u = Object.keys(a).length;
    return {
      requirementIndex: i,
      matches: a,
      relevance: u / l
    };
  });
}
function D$(t, e) {
  const n = {};
  for (const o of e) {
    const r = I$(t, o);
    r !== void 0 && (n[o] = r);
  }
  return n;
}
function I$(t, e) {
  for (const [n, o] of Object.entries(t)) {
    if (n === e)
      return o;
    for (const [r, i] of Object.entries(o.methods))
      if (`${n}/${r}` === e)
        return o;
  }
}
function z$(t, e) {
  const n = { ...e }, o = {};
  for (const [r, i] of Object.entries(t))
    for (const [a, l] of Object.entries(n))
      if (ll(l, i)) {
        o[r] = a, delete n[a];
        break;
      }
  return o;
}
function N$({ name: t }) {
  const {
    field: { value: e }
  } = Q({ name: t });
  function n(r) {
    console.error(r);
  }
  const o = {
    namespace: "editor",
    editorState: () => {
      const r = U.$createParagraphNode(), i = e.split(`
`);
      for (let a = 0; a < i.length; a++)
        r.append(...nl(i[a])), a < i.length - 1 && r.append(U.$createLineBreakNode());
      U.$getRoot().append(r);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: n,
    nodes: [zt]
  };
  return /* @__PURE__ */ s.jsx(P$, { children: /* @__PURE__ */ s.jsxs(Us.LexicalComposer, { initialConfig: o, children: [
    /* @__PURE__ */ s.jsx(
      el.PlainTextPlugin,
      {
        contentEditable: /* @__PURE__ */ s.jsx(Vs.ContentEditable, {}),
        placeholder: /* @__PURE__ */ s.jsx("div", {}),
        ErrorBoundary: Ws
      }
    ),
    /* @__PURE__ */ s.jsx(Js.HistoryPlugin, {}),
    /* @__PURE__ */ s.jsx(R$, { name: t })
  ] }) });
}
function R$({ name: t }) {
  const [e] = Ne.useLexicalComposerContext(), { field: n } = Q({
    name: t
  });
  return b.useEffect(() => e.registerTextContentListener((o) => {
    n.onChange(o);
  }), [e, n]), null;
}
const P$ = y.div`
  color: var(${f.foreground});
  background-color: var(${f.background});
  border: 1px solid var(${f.border});

  &:focus-within {
    //border: 1px solid var(${f.focusBorder});
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
function A$({
  oas: t,
  requestBody: e,
  variables: n
}) {
  const {
    field: { value: o }
  } = Q({ name: "body.mediaType" });
  return e === void 0 ? null : /* @__PURE__ */ s.jsxs(M$, { children: [
    o === "raw" && /* @__PURE__ */ s.jsx(N$, { name: "body.value" }),
    o !== "raw" && /* @__PURE__ */ s.jsx(ef, { variables: n, name: "body.value" })
  ] });
}
const M$ = y.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
function _c(t) {
  return JSON.stringify(t, null, 2);
}
function Tc(t) {
  try {
    return JSON.parse(t);
  } catch (e) {
    return new Error(`failed to convert: ${e}`);
  }
}
function F$({
  oas: t,
  group: e,
  variables: n
}) {
  const { control: o } = un(), {
    field: r,
    fieldState: { error: i }
  } = Q({
    name: "body.value",
    control: o,
    rules: {
      validate: (u) => B$(u)
    }
  }), [a, l] = b.useState(_c(r.value));
  return b.useEffect(() => {
    r.value instanceof Error || JSON.stringify(Tc(a)) !== JSON.stringify(r.value) && l(_c(r.value));
  }, [r.value, a]), /* @__PURE__ */ s.jsxs(L$, { children: [
    /* @__PURE__ */ s.jsx(
      "textarea",
      {
        rows: 10,
        onChange: (u) => {
          r.onChange(Tc(u.target.value)), l(u.target.value);
        },
        onBlur: r.onBlur,
        value: a,
        ref: r.ref
      }
    ),
    i && /* @__PURE__ */ s.jsxs(q$, { children: [
      /* @__PURE__ */ s.jsx(nt, {}),
      " ",
      i.message
    ] })
  ] });
}
const L$ = y.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${f.foreground});
    background-color: var(${f.background});
    border: 1px solid var(${f.border});
    padding: 4px;
  }
`, q$ = y.div`
  display: flex;
  align-items: center;
  color: var(${f.errorForeground});
  > svg {
    fill: var(${f.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
function B$(t) {
  if (t instanceof Error)
    return t.message;
}
function H$({
  oas: t,
  path: e,
  method: n,
  credentials: o,
  settings: r,
  availableVariables: i
}) {
  const { getValues: a } = un(), l = a("body") !== void 0, u = Fr(t) ? U$(t, o, e, n, i, l) : V$(t, o, e, n, i, l);
  return /* @__PURE__ */ s.jsx(ft, { tabs: u });
}
function U$(t, e, n, o, r, i) {
  const a = nC(t, n, o), l = Ar(t, n, o), u = In(t, l == null ? void 0 : l.requestBody), c = Bo({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ s.jsx(A$, { oas: t, requestBody: u, variables: r }),
      disabled: u === void 0 || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ s.jsx(
        nf,
        {
          oas: t,
          credentials: e,
          security: rC(t, n, o)
        }
      ),
      disabled: !oC(t, n, o)
    },
    {
      id: "path",
      title: "Path",
      content: /* @__PURE__ */ s.jsx(
        Jt,
        {
          oas: t,
          group: a.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: Dn(a.path, c.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ s.jsx(
        Jt,
        {
          oas: t,
          group: a.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: Dn(a.query, c.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ s.jsx(
        Jt,
        {
          oas: t,
          group: a.header,
          name: "parameters.header",
          placeholder: "Add new header",
          variables: r,
          allowUnknown: !0
        }
      )
    },
    {
      id: "cookie",
      title: "Cookie",
      content: /* @__PURE__ */ s.jsx(
        Jt,
        {
          oas: t,
          group: a.cookie,
          name: "parameters.cookie",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: Dn(a.cookie, c.cookie)
    },
    {
      id: "environment",
      title: "Environment",
      content: /* @__PURE__ */ s.jsx(Xo, { name: "environment", variables: r })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ s.jsx(ti, {})
    }
  ];
}
function V$(t, e, n, o, r, i) {
  const a = h$(t, n, o), l = Bo({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ s.jsx(F$, { oas: t, group: a.body, variables: r }),
      disabled: Dn(a.body, l.body) || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ s.jsx(
        nf,
        {
          oas: t,
          credentials: e,
          security: g$(t, n, o)
        }
      ),
      disabled: !f$(t, n, o)
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
      content: /* @__PURE__ */ s.jsx(
        Jt,
        {
          oas: t,
          group: a.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: Dn(a.path, l.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ s.jsx(
        Jt,
        {
          oas: t,
          group: a.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: Dn(a.query, l.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ s.jsx(
        Jt,
        {
          oas: t,
          group: a.header,
          name: "parameters.header",
          placeholder: "Add new header",
          variables: r,
          allowUnknown: !0
        }
      )
    },
    {
      id: "environment",
      title: "Environment",
      content: /* @__PURE__ */ s.jsx(Xo, { name: "environment", variables: r })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ s.jsx(ti, {})
    }
  ];
}
function Dn(t, e) {
  return (t === void 0 || Object.keys(t).length === 0) && (e === void 0 || e.length === 0);
}
function W$({
  oas: t,
  requestRef: e,
  stage: n,
  credentials: o,
  saveRequest: r,
  defaultCollapsed: i,
  availableVariables: a
}) {
  const l = G$(n);
  return /* @__PURE__ */ s.jsx(K$, { children: /* @__PURE__ */ s.jsx(
    ot,
    {
      data: n,
      saveData: r,
      wrapFormData: sC,
      unwrapFormData: dC,
      children: /* @__PURE__ */ s.jsxs(ln, { defaultCollapsed: i, children: [
        /* @__PURE__ */ s.jsxs(Kc, { children: [
          /* @__PURE__ */ s.jsx("span", { children: e.id }),
          /* @__PURE__ */ s.jsxs(X$, { children: [
            /* @__PURE__ */ s.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ s.jsx(sl, { name: "defaultResponse", options: l })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs(Gn, { children: [
          /* @__PURE__ */ s.jsx(J$, { children: n.request.method }),
          /* @__PURE__ */ s.jsx(Y$, { children: n.request.path })
        ] }),
        /* @__PURE__ */ s.jsx(
          H$,
          {
            oas: t,
            credentials: o,
            method: n.request.method,
            path: n.request.path,
            availableVariables: a
          }
        )
      ] })
    }
  ) });
}
function G$(t) {
  return Object.keys(t.responses || {}).map((e) => ({ label: e, value: e }));
}
const K$ = y.div`
  > div {
    background-color: var(${f.background});
  }
`, J$ = y.div`
  background-color: var(${f.badgeBackground});
  color: var(${f.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, Y$ = y.div``, X$ = y.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${f.border});
  }
`;
function Q$({
  request: t,
  requestRef: e
}) {
  var A, N, re;
  const n = oe(), { oas: o, playbook: r, servers: i } = q((I) => I.scanconf), a = q((I) => I.config.data), l = q((I) => I.env.data), u = q((I) => I.prefs.useGlobalBlocks), {
    tryResult: c,
    mockResult: d,
    mockMissingVariables: p
  } = q((I) => I.requests), h = (I, R) => n(ds({ server: I, inputs: R })), m = (I) => n(Vo({ ref: e, stage: I })), v = r.authenticationDetails[0], g = qe(d, "Global Before"), k = qe(d, "Global After"), j = qe(d, "Request"), S = [
    ...Za,
    ...i2(((re = (N = (A = j == null ? void 0 : j.results) == null ? void 0 : A[0]) == null ? void 0 : N.variablesReplaced) == null ? void 0 : re.stack) || [])
  ], [w, $] = b.useState({}), {
    simple: B,
    environment: {
      env: { host: O }
    }
  } = hn(wi(r), l);
  return b.useEffect(() => {
    const I = { ...w };
    for (const R of Object.keys(I))
      p.includes(R) || delete I[R];
    for (const R of p)
      I[R] === void 0 && (I[R] = "");
    $(I);
  }, [p]), /* @__PURE__ */ s.jsxs(Z$, { children: [
    /* @__PURE__ */ s.jsx(
      Mn,
      {
        menu: !0,
        servers: i,
        host: O,
        onTry: (I) => h(I, w),
        onScan: (I) => {
          const R = Ol(
            I,
            a.platformAuthType,
            a.scanRuntime,
            a.docker.replaceLocalhost,
            a.platform
          ), [Oe, lt] = xi(o, r);
          if (lt !== void 0) {
            console.log("failed to serialize", lt);
            return;
          }
          n(
            as({
              path: t.request.path,
              method: t.request.method,
              operationId: t.operationId,
              env: {
                SCAN42C_HOST: R,
                ...B
              },
              scanconf: Qh(Oe, t.operationId)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ s.jsxs(Se, { title: "Request", children: [
      /* @__PURE__ */ s.jsx(
        W$,
        {
          defaultCollapsed: !1,
          oas: o,
          credentials: v,
          availableVariables: S,
          requestRef: e,
          stage: t,
          saveRequest: m
        }
      ),
      /* @__PURE__ */ s.jsxs(r2, { children: [
        "Unset variables",
        /* @__PURE__ */ s.jsx(Vn, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ s.jsx(o2, { children: /* @__PURE__ */ s.jsx(
        ot,
        {
          wrapFormData: e2,
          unwrapFormData: t2,
          data: w,
          saveData: (I) => $(I),
          children: /* @__PURE__ */ s.jsx(Xo, { name: "env" })
        }
      ) })
    ] }),
    u && (g == null ? void 0 : g.status) === "failure" && /* @__PURE__ */ s.jsx(Ec, { children: /* @__PURE__ */ s.jsx(Yt, { message: "Check Global Before block" }) }),
    u && (k == null ? void 0 : k.status) === "failure" && /* @__PURE__ */ s.jsx(Ec, { children: /* @__PURE__ */ s.jsx(Yt, { message: "Check Global After block" }) }),
    c.length > 0 && /* @__PURE__ */ s.jsx(Se, { title: "Result", children: /* @__PURE__ */ s.jsx(Nn, { result: c, collapsible: u }) })
  ] });
}
const Z$ = y.div`
  padding: 8px;
`;
function e2(t) {
  return {
    env: Object.entries(t).map(([e, n]) => ({ key: e, value: n, type: typeof n }))
  };
}
function t2(t) {
  const e = {};
  for (const { key: n, value: o, type: r } of t.env)
    e[n] = n2(o, r);
  return e;
}
function n2(t, e) {
  if (e !== "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return `${t}`;
}
const o2 = y.div`
  border: 1px solid var(${f.border});
  background-color: var(${f.background});
`, r2 = y.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`, Ec = y.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function i2(t) {
  const e = [];
  for (const n of t)
    for (const o of Object.keys(n.env))
      e.includes(o) || e.push(o);
  return e.sort(), e;
}
function a2({ requestRef: t }) {
  var o;
  const { playbook: e } = q((r) => r.scanconf), n = t.type === "operation" ? e.operations[t.id].request : (o = e.requests) == null ? void 0 : o[t.id];
  return n === void 0 ? /* @__PURE__ */ s.jsxs("div", { children: [
    "Unable to locate the request, failed to resolve: ",
    JSON.stringify(t)
  ] }) : n.operationId === void 0 ? /* @__PURE__ */ s.jsx(zO, { requestRef: t, request: n }) : /* @__PURE__ */ s.jsx(Q$, { requestRef: t, request: n });
}
function s2() {
  var k;
  const t = oe(), { oas: e, playbook: n, servers: o } = q((j) => j.scanconf), r = q((j) => j.requests.ref), i = q((j) => j.config.data), a = q((j) => j.env.data), l = q((j) => j.prefs.scanServer), u = ({ sectionId: j, itemId: S }) => {
    t(Xt({ type: j === "operation" ? "operation" : "request", id: S }));
  }, c = (j) => {
    var S;
    if ((r == null ? void 0 : r.type) === "request" && r.id === j) {
      const w = (S = Object.keys(n.operations)) == null ? void 0 : S[0];
      w !== void 0 && t(Xt({ type: "operation", id: w }));
    }
    t(Od({ type: "request", id: j }));
  }, d = Object.keys(n.operations).map((j) => ({ id: j, label: j })), p = Object.entries(n.requests || {}).filter(([j, S]) => S.operationId !== void 0).map(([j, S]) => ({ id: j, label: j })), h = Object.entries(n.requests || {}).filter(([j, S]) => S.operationId === void 0).map(([j, S]) => ({
    id: j,
    label: j,
    menu: /* @__PURE__ */ s.jsx(Ft, { children: /* @__PURE__ */ s.jsx(dn, { onClick: (w) => w.stopPropagation(), onSelect: () => c(j), children: "Delete" }) })
  }));
  let m;
  (r == null ? void 0 : r.type) === "operation" && n.operations[r.id] !== void 0 ? m = { itemId: r.id, sectionId: "operation" } : (r == null ? void 0 : r.type) === "request" && ((k = n.requests) == null ? void 0 : k[r.id]) !== void 0 && (n.requests[r.id].operationId !== void 0 ? m = { itemId: r.id, sectionId: "requests" } : m = { itemId: r.id, sectionId: "external" });
  const v = [
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
      items: h,
      menu: /* @__PURE__ */ s.jsx(
        uO,
        {
          onAddExternalRequest: (j, S, w, $) => {
            t(
              Vo({
                ref: { id: j, type: "request" },
                stage: {
                  operationId: void 0,
                  defaultResponse: "200",
                  request: {
                    url: w,
                    method: S,
                    parameters: {
                      header: [],
                      path: [],
                      query: [],
                      cookie: []
                    },
                    body: l2(S) ? {
                      mediaType: $ === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json",
                      value: {}
                    } : void 0
                  },
                  responses: {
                    200: {
                      expectations: {
                        httpStatus: 200
                      },
                      variableAssignments: {}
                    }
                  }
                }
              })
            ), t(Xt({ type: "request", id: j }));
          }
        }
      )
    }
  ], g = (j) => {
    const S = Ol(
      j,
      i.platformAuthType,
      i.scanRuntime,
      i.docker.replaceLocalhost,
      i.platform
    ), [w, $] = xi(e, n);
    if ($ !== void 0) {
      console.log("failed to serialize", $);
      return;
    }
    const { simple: B } = hn(wi(n), a);
    t(
      bd({
        env: {
          SCAN42C_HOST: S,
          ...B
        },
        scanconf: JSON.stringify(w, null, 2)
      })
    );
  };
  return /* @__PURE__ */ s.jsx(
    Un,
    {
      title: "operations",
      selected: m,
      sections: v,
      onSelected: u,
      renderButtons: () => /* @__PURE__ */ s.jsx(
        Wc,
        {
          style: { width: "100%" },
          onClick: (j) => {
            j.preventDefault(), j.stopPropagation(), g(l || o[0]);
          },
          children: "Scan all operations"
        }
      ),
      hideEmptySections: !0,
      render: (j) => /* @__PURE__ */ s.jsx(
        a2,
        {
          requestRef: { type: j.sectionId, id: j.itemId }
        },
        `${j.sectionId}-${j.itemId}`
      )
    }
  );
}
function l2(t) {
  return ["post", "put", "patch"].includes(t);
}
function u2({ append: t }) {
  return /* @__PURE__ */ s.jsx(c2, { children: /* @__PURE__ */ s.jsx(
    d2,
    {
      placeholder: "name",
      value: "",
      onChange: (e) => {
        t(
          {
            key: e.target.value,
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
const c2 = y.div`
  grid-column: span 5;
  display: flex;
`, d2 = y.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${f.border});
  color: var(${f.foreground});
  padding: 4px 8px;
`;
function p2({ missing: t }) {
  const e = oe(), { fields: n, append: o, remove: r } = cn({
    name: "variables"
  });
  return /* @__PURE__ */ s.jsxs(m2, { children: [
    /* @__PURE__ */ s.jsxs(f2, { children: [
      /* @__PURE__ */ s.jsxs(v2, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Name" }),
        /* @__PURE__ */ s.jsx("div", {}),
        /* @__PURE__ */ s.jsx("div", { children: "Source environment variable" }),
        /* @__PURE__ */ s.jsx("div", { children: "Default value" }),
        /* @__PURE__ */ s.jsx("div", { children: "Required" }),
        /* @__PURE__ */ s.jsx("div", {})
      ] }),
      /* @__PURE__ */ s.jsx(g2, { children: n.map((i, a) => {
        const l = t !== void 0 && t.includes(i.value.name);
        return /* @__PURE__ */ s.jsx(
          y2,
          {
            missing: l,
            name: `variables.${a}`,
            remove: () => {
              r(a);
            }
          },
          i.id
        );
      }) }),
      /* @__PURE__ */ s.jsx(u2, { append: o })
    ] }),
    /* @__PURE__ */ s.jsx(h2, { children: /* @__PURE__ */ s.jsxs(
      w2,
      {
        onClick: (i) => {
          i.stopPropagation(), i.preventDefault(), e(Bc());
        },
        children: [
          "Manage IDE Environment ",
          /* @__PURE__ */ s.jsx(Vc, {})
        ]
      }
    ) })
  ] });
}
const m2 = y.div``, h2 = y.div`
  padding-top: 8px;
  margin: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
`, f2 = y.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 10em 1.5em 1fr 1fr 5em 1em;
`, g2 = y.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${f.border});
  }
`, v2 = y.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${f.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function y2({
  name: t,
  remove: e,
  missing: n
}) {
  const o = Bo({ name: `${t}.value.required` });
  return /* @__PURE__ */ s.jsxs(x2, { children: [
    /* @__PURE__ */ s.jsx(Zt, { name: `${t}.key`, label: "name" }),
    /* @__PURE__ */ s.jsx(k2, { children: n && /* @__PURE__ */ s.jsx(nt, {}) }),
    /* @__PURE__ */ s.jsx(Zt, { name: `${t}.value.name`, label: "name" }),
    o ? /* @__PURE__ */ s.jsx("div", {}) : /* @__PURE__ */ s.jsx(Zt, { name: `${t}.value.default`, label: "default", disabled: o }),
    /* @__PURE__ */ s.jsx(j2, { children: /* @__PURE__ */ s.jsx(bp, { name: `${t}.value.required` }) }),
    /* @__PURE__ */ s.jsx(
      b2,
      {
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), e();
        },
        children: /* @__PURE__ */ s.jsx(Ue, {})
      }
    )
  ] });
}
const k2 = y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(${f.errorForeground});
    padding-right: 4px;
  }
`, j2 = y.div`
  display: flex;
`, b2 = y.button`
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
    fill: var(${f.foreground});
  }
`, x2 = y.div`
  display: contents;
  &:hover > :last-child {
    visibility: visible;
  }
`, w2 = y.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(${f.linkForeground});
  &:hover {
    color: var(${f.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function S2({ name: t }) {
  const e = oe(), {
    playbook: { environments: n }
  } = q((u) => u.scanconf), o = q((u) => u.env.data), [r, i] = b.useState("environment"), a = n[t], { missing: l } = hn(a, o);
  return /* @__PURE__ */ s.jsx(
    ot,
    {
      wrapFormData: C2,
      unwrapFormData: _2,
      data: a,
      saveData: (u) => e(Cd({ name: t, environment: u })),
      children: /* @__PURE__ */ s.jsx(
        ft,
        {
          round: !0,
          activeTab: r,
          setActiveTab: i,
          menu: /* @__PURE__ */ s.jsx(Vn, { children: "Use data from the external sources (such as secrets) to set Scan variables" }),
          tabs: [
            {
              id: "environment",
              title: "External inputs",
              content: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                /* @__PURE__ */ s.jsx(p2, { missing: l }),
                l.length > 0 && /* @__PURE__ */ s.jsx(
                  vo,
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
function C2(t) {
  return {
    variables: Object.entries(t.variables).filter(([e, n]) => n.from === "environment").map(([e, n]) => ({ key: e, value: n })),
    constants: Object.entries(t.variables).filter(([e, n]) => n.from === "hardcoded").map(([e, n]) => ({
      key: e,
      value: n.value,
      type: typeof n.value
    }))
  };
}
function _2(t) {
  const e = {
    variables: {}
  };
  for (const { key: n, value: o } of t.variables)
    e.variables[n] = o;
  for (const { key: n, value: o, type: r } of t.constants)
    e.variables[n] = {
      from: "hardcoded",
      value: T2(o, r)
    };
  return e;
}
function T2(t, e) {
  if (e !== "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return `${t}`;
}
function E2() {
  const [t, e] = b.useState("default"), {
    playbook: { environments: n }
  } = q((i) => i.scanconf), r = [
    {
      id: "environment",
      title: "Environment",
      items: Object.keys(n).map((i) => ({ id: i, label: i }))
    }
  ];
  return /* @__PURE__ */ s.jsx(
    Un,
    {
      title: "environments",
      noSectionTitles: !0,
      selected: t ? { sectionId: "environment", itemId: t } : void 0,
      sections: r,
      onSelected: (i) => e(i.itemId),
      render: (i) => /* @__PURE__ */ s.jsx(S2, { name: i.itemId }, i.itemId)
    }
  );
}
function O2() {
  const t = oe(), { oas: e, playbook: n, servers: o } = q((g) => g.scanconf), { selected: r } = q((g) => g.global), { tryResult: i, mockResult: a } = q((g) => g.global), l = (g) => t(At(g)), u = (g, k) => t(Mt({ location: g, reference: k })), c = (g, k) => t(Pt({ location: g, to: k })), d = (g, k) => {
    t(
      Rt({
        container: g,
        stage: {
          ref: k
        }
      })
    );
  }, p = (g) => {
    t(Xt(g)), t(se(["scanconf", "requests"]));
  }, h = Object.keys(n.operations), m = Object.keys(n.requests || {}), v = [
    {
      id: "general",
      title: "General",
      items: [
        { id: "before", label: "Global Before" },
        { id: "after", label: "Global After" }
      ]
    }
  ];
  return /* @__PURE__ */ s.jsx(
    Un,
    {
      title: "items",
      selected: { sectionId: "general", itemId: r },
      onSelected: (g) => t(Rd(g.itemId)),
      noSectionTitles: !0,
      sections: v,
      render: (g) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        (g == null ? void 0 : g.itemId) === "before" && /* @__PURE__ */ s.jsxs(Oc, { children: [
          /* @__PURE__ */ s.jsx(
            Mn,
            {
              servers: o,
              onTry: (k) => {
                t(ca(k));
              }
            }
          ),
          /* @__PURE__ */ s.jsx(
            Pn,
            {
              oas: e,
              stages: n.before,
              container: { container: "globalBefore" },
              executionResult: a == null ? void 0 : a[0],
              saveStage: u,
              moveStage: c,
              removeStage: l,
              operations: n.operations,
              requests: n.requests,
              goToRequest: p
            }
          ),
          /* @__PURE__ */ s.jsx(
            An,
            {
              operationIds: h,
              requestIds: m,
              onSelect: (k) => d({ container: "globalBefore" }, k)
            }
          ),
          i.length > 0 && /* @__PURE__ */ s.jsx(Se, { title: "Result", children: /* @__PURE__ */ s.jsx(Nn, { result: i }) })
        ] }, "before"),
        (g == null ? void 0 : g.itemId) === "after" && /* @__PURE__ */ s.jsxs(Oc, { children: [
          /* @__PURE__ */ s.jsx(
            Mn,
            {
              servers: o,
              onTry: (k) => {
                t(ca(k));
              }
            }
          ),
          /* @__PURE__ */ s.jsx(
            Pn,
            {
              oas: e,
              stages: n.after,
              container: { container: "globalAfter" },
              executionResult: void 0,
              saveStage: u,
              removeStage: l,
              moveStage: c,
              operations: n.operations,
              requests: n.requests,
              goToRequest: p
            }
          ),
          /* @__PURE__ */ s.jsx(
            An,
            {
              operationIds: h,
              requestIds: m,
              onSelect: (k) => d({ container: "globalAfter" }, k)
            }
          ),
          i.length > 0 && /* @__PURE__ */ s.jsx(Se, { title: "Result", children: /* @__PURE__ */ s.jsx(Nn, { result: i }) })
        ] }, "after")
      ] })
    }
  );
}
const Oc = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`, $l = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  //max-width: 560px;
`, Dl = y.div`
  font-weight: 700;
  margin-bottom: 16px;
`, Il = Wn({
  environment: K(),
  logLevel: K(),
  logDestination: K(),
  requestFlowrate: ut.number(),
  requestTimeout: ut.number(),
  requestTlsInsecureSkipVerify: Ll(),
  responseFollowRedirection: Ll(),
  maxScanDuration: ut.number(),
  reportMaxIssues: ut.number(),
  responseMaxBodySizeScan: ut.number(),
  reportMaxHttpResponseSizeHappyPath: ut.number(),
  reportMaxBodySizeHappyPath: ut.number(),
  reportMaxBodySizeTest: ut.number(),
  reportMaxHttpResponseSizeTest: ut.number()
});
function $2(t) {
  return {
    ...t,
    logLevel: t.logLevel !== void 0 ? t.logLevel : ""
  };
}
function D2(t) {
  return { ...t, logLevel: t.logLevel !== "" ? t.logLevel : void 0 };
}
function I2() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Dl, { children: "Default environment" }),
    /* @__PURE__ */ s.jsx($l, { children: /* @__PURE__ */ s.jsx(le, { name: "environment", label: "Default environment", disabled: !0 }) })
  ] });
}
const Ga = {
  id: "environment",
  label: "Environment settings",
  schema: Il,
  form: I2
};
function z2() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Dl, { children: "Logging settings" }),
    /* @__PURE__ */ s.jsxs($l, { children: [
      /* @__PURE__ */ s.jsx(
        xr,
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
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "logDestination",
          label: "Log destination",
          description: "The destination where Conformance Scan pushes all logs that it produces during a scan. The possible values are 'stdout', 'files', and 'platform'. You can select multiple outputs by adding the character + between the values."
        }
      )
    ] })
  ] });
}
const Ka = {
  id: "logging",
  label: "Logging settings",
  schema: Il,
  form: z2
};
function N2() {
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(Dl, { children: "General settings" }),
    /* @__PURE__ */ s.jsxs($l, { children: [
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "requestFlowrate",
          label: "Flow rate",
          description: "How long the scan waits (in milliseconds) before it sends the next request to the API. This setting defines the constant flow rate that the scan uses."
        }
      ),
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "requestTimeout",
          label: "Timeout",
          description: "The maximum time (in seconds) that the scan waits for a response from the API. We do not recommend setting the timeout value to 0, because this switches the timeout off completely. This means that if something goes wrong, the scan might run indefinitely."
        }
      ),
      /* @__PURE__ */ s.jsx(
        xr,
        {
          name: "requestTlsInsecureSkipVerify",
          label: "Skip TLS verification",
          options: [
            { value: !0, label: "true" },
            { value: !1, label: "false" }
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        xr,
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
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "maxScanDuration",
          label: "Maximum scan duration",
          description: "How long the scan runs in total (in seconds) before it stops, even if the whole API was not yet scanned. This limit ensures that the scan process will not run indefinitely even if there was an unexpected error causing a loop in the process."
        }
      ),
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "reportMaxIssues",
          label: "Max reported issues",
          description: "The maximum number of problems that Conformance Scan can uncover and include in the scan report before it must stop. This setting helps to control the report size: you can iterate on scanning your API, and as you fix the problems found in previous scans, the scan keeps including subsequently discovered problems."
        }
      ),
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "responseMaxBodySizeScan",
          label: "Max size for a response body",
          description: "The maximum body size (in bytes) that Conformance Scan consumes from an API response, to avoid massive memory consumption."
        }
      ),
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "reportMaxHttpResponseSizeHappyPath",
          label: "Max stored happy path response size",
          description: "The maximum size (in bytes) of the HTTP responses received for a happy path request that is included in the scan report."
        }
      ),
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "reportMaxBodySizeHappyPath",
          label: "Max stored response body size for happy path requests",
          description: "The maximum response body size (in bytes) that the scan includes in the scan report for a happy path request."
        }
      ),
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "reportMaxBodySizeTest",
          label: "Max stored response body size for test requests",
          description: "The maximum response body size (in bytes) that the scan includes in the scan report for a test request."
        }
      ),
      /* @__PURE__ */ s.jsx(
        le,
        {
          name: "reportMaxHttpResponseSizeTest",
          label: "Max stored response size for test requests",
          description: "The maximum size (in bytes) of the HTTP responses received for a test request that is included in the scan report."
        }
      )
    ] })
  ] });
}
const Ja = {
  id: "general",
  label: "General settings",
  schema: Il,
  form: N2
}, R2 = [
  {
    id: "logging",
    title: "Logging",
    items: [Ka]
  },
  {
    id: "environment",
    title: "Environment",
    items: [Ga]
  },
  {
    id: "general",
    title: "General",
    items: [Ja]
  }
], P2 = {
  [Ja.id]: Ja,
  [Ka.id]: Ka,
  [Ga.id]: Ga
};
function A2() {
  const t = oe(), e = q(
    (n) => n.scanconf.playbook.runtimeConfiguration
  );
  return /* @__PURE__ */ s.jsx(
    Cf,
    {
      noSectionTitles: !0,
      sections: R2,
      defaultSelection: { sectionId: "logging", itemId: "logging" },
      render: (n) => {
        const { id: o, form: r, schema: i } = P2[n.itemId];
        return /* @__PURE__ */ s.jsx(
          ot,
          {
            schema: i,
            wrapFormData: $2,
            unwrapFormData: D2,
            data: e || {},
            saveData: (a) => t(Sd(a)),
            children: /* @__PURE__ */ s.jsx(r, {})
          }
        );
      }
    }
  );
}
function M2() {
  const {
    playbook: { environments: t, runtimeConfiguration: e }
  } = q((r) => r.scanconf), n = q((r) => r.env.data);
  if (t == null || e == null)
    return /* @__PURE__ */ s.jsx($c, { children: "Environment" });
  const { missing: o } = hn(t[(e == null ? void 0 : e.environment) || "default"], n);
  return /* @__PURE__ */ s.jsxs($c, { children: [
    "Environment",
    o.length > 0 && /* @__PURE__ */ s.jsx(nt, {})
  ] });
}
const $c = y.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > svg {
    fill: var(${f.errorForeground});
    padding-right: 4px;
  }
`;
function of({ credentials: t }) {
  const e = F2(t).map(({ name: n }) => ({ label: n, value: n }));
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(
      pr,
      {
        label: "Type",
        name: "key",
        options: [
          { value: "authentication-swapping-bola", label: "BOLA" },
          { value: "authentication-swapping-bfla", label: "BFLA" }
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(pr, { label: "Source", name: "source.0", options: e }),
    /* @__PURE__ */ s.jsx(pr, { label: "Target", name: "target.0", options: e })
  ] });
}
function F2(t) {
  return Object.entries(t).map(([e, n]) => Object.entries(n.methods || {}).map(([o, r]) => ({ name: `${e}/${o}`, credential: n }))).flat();
}
function L2({
  selected: t,
  credentials: e
}) {
  const n = oe(), {
    playbook: { authorizationTests: o }
  } = q((a) => a.scanconf), r = (a, l) => n(Td({ id: a, test: l })), i = o[t.itemId];
  return /* @__PURE__ */ s.jsxs(q2, { children: [
    /* @__PURE__ */ s.jsx("h4", { children: t.itemId }),
    /* @__PURE__ */ s.jsx(
      ot,
      {
        data: i,
        wrapFormData: (a) => a,
        unwrapFormData: (a) => a,
        saveData: (a) => r(t.itemId, a),
        children: /* @__PURE__ */ s.jsx(of, { credentials: e })
      }
    )
  ] });
}
const q2 = y.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function B2({
  onAddTest: t,
  existing: e,
  credentials: n
}) {
  const o = {
    id: "",
    key: "authentication-swapping-bola",
    source: [""],
    target: [""]
  }, r = Wn({
    id: K().regex(Lo(), {
      message: qo
    }).refine((a) => !e.includes(a), {
      message: "Already exists"
    }),
    key: K(),
    source: ql(K().min(1)),
    target: ql(K().min(1))
  }), i = (a) => {
    t(a.id, { key: a.key, source: a.source, target: a.target });
  };
  return /* @__PURE__ */ s.jsx(
    Wo,
    {
      title: "New authorization test",
      defaultValues: o,
      schema: r,
      onSubmit: i,
      trigger: /* @__PURE__ */ s.jsx(No, { style: { width: "100%" }, children: "New authorization test" }),
      children: /* @__PURE__ */ s.jsxs(H2, { children: [
        /* @__PURE__ */ s.jsx(le, { label: "Test ID", name: "id" }),
        /* @__PURE__ */ s.jsx(of, { credentials: n })
      ] })
    }
  );
}
const H2 = y.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function U2() {
  const t = oe(), {
    playbook: { authorizationTests: e, authenticationDetails: n },
    selectedAuthorizationTest: o
  } = q((l) => l.scanconf), r = (l, u) => {
    t(_d({ id: l, test: u })), t(nu({ id: l }));
  }, a = [
    {
      id: "authorizationTests",
      title: "Authorization Tests",
      items: Object.keys(e).map((l) => ({
        id: l,
        label: l,
        menu: /* @__PURE__ */ s.jsx(Ft, { children: /* @__PURE__ */ s.jsxs(
          dn,
          {
            onClick: (u) => u.stopPropagation(),
            onSelect: () => t(Ed({ id: l })),
            children: [
              /* @__PURE__ */ s.jsx(Ue, {}),
              "Delete"
            ]
          }
        ) })
      }))
    }
  ];
  return /* @__PURE__ */ s.jsx(
    Un,
    {
      title: "tests",
      sections: a,
      render: (l) => /* @__PURE__ */ s.jsx(L2, { selected: l, credentials: n[0] }),
      renderEmpty: () => /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsx("h2", { children: "Authorization Tests" }),
        /* @__PURE__ */ s.jsx("p", { children: "BOLA and BFLA tests" }),
        /* @__PURE__ */ s.jsx("p", { children: "Define advanced security tests, such as testing how your API implementation handles BOLA/IDOR (Broken Object Level Authorization, also known as Insecure Direct Object Reference) attack or BFLA (Broken Function Level Authorization)" })
      ] }),
      renderButtons: () => /* @__PURE__ */ s.jsx(
        B2,
        {
          credentials: n[0],
          existing: Object.keys(e),
          onAddTest: r
        }
      ),
      selected: o !== void 0 ? { sectionId: "authorizationTests", itemId: o } : void 0,
      onSelected: (l) => {
        t(nu({ id: l.itemId }));
      }
    }
  );
}
function V2({ change: t }) {
  return /* @__PURE__ */ s.jsx(W2, { children: /* @__PURE__ */ s.jsx(Si, { path: t.path, method: t.method, operationId: t.operationId }) });
}
const W2 = y.div`
  border: 1px solid var(${f.border});
  padding: 8px;
  background-color: var(${f.computedOne});
`;
function G2({ change: t }) {
  return /* @__PURE__ */ s.jsx(K2, { children: /* @__PURE__ */ s.jsx(Si, { path: t.path, method: t.method, operationId: t.operationId, children: t.references.length > 0 && /* @__PURE__ */ s.jsxs(J2, { children: [
    "References in ",
    t.references.length,
    " locations will be removed"
  ] }) }) });
}
const K2 = y.div`
  border: 1px solid var(${f.border});
  padding: 8px;
  background-color: var(${f.computedOne});
`, J2 = y.div`
  padding: 8px;
  background-color: var(${f.background});
`;
function Y2({ change: t }) {
  return /* @__PURE__ */ s.jsx(X2, { children: /* @__PURE__ */ s.jsx(Si, { path: t.path, method: t.method, operationId: t.oldOperationId, children: /* @__PURE__ */ s.jsxs(Q2, { children: [
    '"',
    t.oldOperationId,
    '" renamed to "',
    t.newOperationId,
    '"'
  ] }) }) });
}
const X2 = y.div`
  border: 1px solid var(${f.border});
  padding: 8px;
  background-color: var(${f.computedOne});
`, Q2 = y.div`
  padding: 8px;
  background-color: var(${f.background});
`;
function Z2({ change: t }) {
  return /* @__PURE__ */ s.jsx(eD, { children: t.schema });
}
const eD = y.div`
  border: 1px solid var(${f.border});
  padding: 8px;
  background-color: var(${f.computedOne});
`;
function tD() {
  const t = oe(), { changes: e, updating: n } = q((l) => l.scanconfUpdate), o = e.filter((l) => l.type === "operation-added"), r = e.filter((l) => l.type === "operation-removed"), i = e.filter((l) => l.type === "operation-renamed"), a = e.filter((l) => l.type === "security-added");
  return /* @__PURE__ */ s.jsxs(nD, { children: [
    /* @__PURE__ */ s.jsx("div", { children: "Your OpenAPI file has deviated from your scan configuration." }),
    /* @__PURE__ */ s.jsx("div", { children: "Please update your scan configuration to reflect the changes in your OpenAPI file. If you decide to ignore the changes, the scan will be performed using the old configuration." }),
    /* @__PURE__ */ s.jsxs(rD, { children: [
      o.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Added:" }),
        o.map((l, u) => /* @__PURE__ */ s.jsx(V2, { change: l }, u))
      ] }),
      r.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Removed:" }),
        r.map((l, u) => /* @__PURE__ */ s.jsx(G2, { change: l }, u))
      ] }),
      i.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "OperationId changed:" }),
        i.map((l, u) => /* @__PURE__ */ s.jsx(Y2, { change: l }, u))
      ] }),
      a.length > 0 && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("div", { children: "Security scheme added:" }),
        a.map((l, u) => /* @__PURE__ */ s.jsx(Z2, { change: l }, u))
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs(oD, { children: [
      /* @__PURE__ */ s.jsx(
        Sg,
        {
          label: "Update",
          waiting: n,
          onClick: () => t(Bd())
        }
      ),
      /* @__PURE__ */ s.jsx(fp, { disabled: n, onClick: () => t(Hd()), children: "Skip" })
    ] })
  ] });
}
const nD = y.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, oD = y.div`
  display: flex;
  gap: 8px;
`, rD = y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
function iD() {
  const t = vk((e) => e.generalError.error);
  return /* @__PURE__ */ s.jsx(sD, { children: /* @__PURE__ */ s.jsx(aD, { children: t == null ? void 0 : t.message }) });
}
const aD = y.div`
  border: 1px solid var(${f.errorBorder});
  color: var(${f.errorForeground});
  background-color: var(${f.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, sD = y.div`
  padding: 8px;
`;
function Dc(t) {
  const e = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...t.components
  }, { Link: n } = e;
  return n || uD("Link"), s.jsxs(s.Fragment, {
    children: [s.jsx(e.h1, {
      children: "What is API Conformance Scan"
    }), `
`, s.jsx(e.p, {
      children: `API Conformance Scan is a dynamic API testing tool designed to ensure that your API implementation aligns with its OpenAPI/Swagger definition.\r
By comparing the documented API specification with the actual implementation, Scan helps you identify any discrepancies or inconsistencies.`
    }), `
`, s.jsx(e.p, {
      children: `To achieve this, Scan generates a multitude of requests that deviate from the declared OpenAPI file and sends them to your server.\r
The tool then evaluates each response, providing insights into how well your API implementation matches its documented counterpart.`
    }), `
`, s.jsx(e.h2, {
      children: "Video tutorial"
    }), `
`, s.jsxs(e.p, {
      children: ["For a quick introduction to API Conformance Scan, watch our ", s.jsx(n, {
        href: "https://42crunch.com/tutorial-security-conformance-scan-openapi-swagger-extension-vs-code/",
        children: "video tutorial"
      }), "."]
    }), `
`, s.jsx(e.h1, {
      children: "Getting Started"
    }), `
`, s.jsx(e.h2, {
      children: "Default configuration"
    }), `
`, s.jsx(e.p, {
      children: `When you run Scan for the first time, it generates a default configuration for your OpenAPI file.\r
This initial setup produces a set of "happy path" requests, one for every operation defined in your OpenAPI specification.`
    }), `
`, s.jsx(e.p, {
      children: 'The contents of each "happy path" request is available to you in the "Operations" tab of the Scan UI.'
    }), `
`, s.jsx(e.p, {
      children: `These "happy path" requests serve as the foundation for testing, establishing a reliable baseline of expected behavior for each operation.\r
At the start of a test for each operation Scan expects to successfully execute a "happy path" request before running the rest of the test.`
    }), `
`, s.jsx(e.p, {
      children: `This default configuration is suitable for simple operations; however, more complex operations may require customizations\r
to ensure effective testing.`
    }), `
`, s.jsx(e.h2, {
      children: "Customizing defaults"
    }), `
`, s.jsx(e.h3, {
      children: "Operations"
    }), `
`, s.jsx(e.p, {
      children: `You can change the default happy path requests by modifying their payloads within the Operations tab.\r
Additionally, you can configure authentication details and fine-tune the body and parameters\r
of each operation either directly or utilize variable expressions.`
    }), `
`, s.jsx(e.h3, {
      children: "Scenarios"
    }), `
`, s.jsx(e.p, {
      children: `When your API operation relies on pre-existing resources or requires post-execution cleanup,\r
Scenarios come into play. This is particularly useful when you need to set up certain conditions\r
before executing an operation and then tear them down afterwards.`
    }), `
`, s.jsx(e.p, {
      children: `A great example of this is the "update user" operation, which updates a user object.\r
Before calling this operation, you'd typically want to ensure that the user object exists and after the update, remove it.\r
Scenarios enable you to achieve this by adding operations to the "Before" block (e.g., creating the user),\r
using the resulting resource in the happy path of the scenario, and then performing cleanup in the "After" block (e.g., deleting the user).`
    }), `
`, s.jsx(e.p, {
      children: 'You can create a Scenario for any operation defined in your OpenAPI in the "Scenarios" tab.'
    }), `
`, s.jsx(e.h2, {
      children: "Trying operations"
    }), `
`, s.jsx(e.p, {
      children: "Before launching your scan, you may want to execute individual Operations or Scenarios to ensure they can be successfully run by the Scan."
    }), `
`, s.jsx(e.p, {
      children: 'To facilitate this process, the Scan UI provides a "Try" feature.'
    }), `
`, s.jsx(e.p, {
      children: `When you click "Try" on an Operation or Scenario, the Scan UI will send relevant requests to the server and allow\r
you to inspect the details of the payload sent and the response received.`
    }), `
`, s.jsx(e.h2, {
      children: "Starting the Scan"
    }), `
`, s.jsx(e.p, {
      children: `You can initiate scanning from the "Operations" tab in the Scan UI, where you have two options to do that:\r
scan the entire API by clicking the "Scan all operations" button at the bottom of the list,\r
or click the "Scan" button at the top of a currently selected operation to test just that one operation.`
    }), `
`, s.jsx(e.h1, {
      children: "User Interface"
    }), `
`, s.jsx(e.h2, {
      children: "Operations"
    }), `
`, s.jsx(e.p, {
      children: `Operations tab shows all operations defined in your OpenAPI file. Details of a request configured in this tab are used as a "happy path" request,\r
if not overriden by a Scenario for this request.`
    }), `
`, s.jsxs(e.p, {
      children: [`You can edit details of a request body and parameters by editing them here.\r
You can also use variable expressions (such as `, s.jsx(e.code, {
        children: "{{name}}"
      }), `) to substitute parameters or parts of\r
the body with values from a variables.`]
    }), `
`, s.jsx(e.h3, {
      children: "Environment"
    }), `
`, s.jsx(e.p, {
      children: `The Environment tab in each Operation allows you to define variables that can be used in variable\r
expressions in request bodies and parameters.`
    }), `
`, s.jsx(e.p, {
      children: `You can also use variable expression within the VALUE field of environment entries,\r
creating values that combine other existing variables and constants.`
    }), `
`, s.jsxs(e.p, {
      children: ["For instance, by defining an environment variable ", s.jsx(e.code, {
        children: "username"
      }), " with a value like ", s.jsx(e.code, {
        children: "user-{{$randomuint}}@company.com"
      }), `,\r
you can set its actual value to something like `, s.jsx(e.code, {
        children: "user-555@company.com"
      }), "."]
    }), `
`, s.jsx(e.h3, {
      children: "Response processing"
    }), `
`, s.jsx(e.p, {
      children: `The Response Processing feature allows you to extract specific values from an operation's responses and\r
store them in variables, which can then be used in subsequent operations (particularly useful when multiple operations are part of a Scenario).`
    }), `
`, s.jsx(e.p, {
      children: `To achieve this, you can define response processing statements that specify what information to extract,\r
where to find it, and where to store the retrieved data. These statements are organized by response code, so if your operation returns multiple\r
possible codes (e.g., 200, 400, 5XX), you can create separate groups for each.`
    }), `
`, s.jsx(e.p, {
      children: `Each response processing statement consists of a name of the variable where the extracted information will be stored, as well as a source,\r
specifying the location where Scan should look for the desired information, such as request\r
or response body, headers, cookies, path or query string parameters.`
    }), `
`, s.jsx(e.p, {
      children: `Additionally, if you're extracting a value from a request or response body, you can use\r
JsonPointer or JsonPath to pinpoint the exact location of the value you're looking for.`
    }), `
`, s.jsx(e.h3, {
      children: "Unset variables"
    }), `
`, s.jsx(e.p, {
      children: `In an Operation, every variable expression must resolve to a value before\r
the Operation can be executed. However, it is possible to reference variables\r
that do not have a value set.`
    }), `
`, s.jsx(e.p, {
      children: `Unset variables in an Operation may be useful when you plan to use the same\r
Operation in multiple Scenarios, each providing a different set of values\r
for every variable used in the Operation.`
    }), `
`, s.jsx(e.p, {
      children: `However, if an Operation contains an unset variable, you cannot utilize the\r
'Try' feature to test the Operation without first providing a value for it.`
    }), `
`, s.jsx(e.p, {
      children: `To resolve this issue, Scan UI lists all required variables for the Operation\r
in "Unset variables" and enables you to provide values for them, allowing you\r
to use the 'Try' feature.`
    }), `
`, s.jsx(e.p, {
      children: "Please note that test inputs are not saved to the scan configuration."
    }), `
`, s.jsx(e.h2, {
      children: "Scenarios"
    }), `
`, s.jsx(e.p, {
      children: `Use scenarios to create complex sequences of operations to implement a "happy path" request for any operation\r
that cannot be tested with a single request defined in the Operations tab.`
    }), `
`, s.jsx(e.p, {
      children: 'If you define a scenario for an operation, it will be used to perform a "happy path" request instead of the one defined in the Operations tab.'
    }), `
`, s.jsx(e.p, {
      children: "Additionally, if an operation has a defined scenario, you can still use it as is in other scenarios."
    }), `
`, s.jsx(e.h3, {
      children: "Happy path scenario"
    }), `
`, s.jsx(e.p, {
      children: `The  "happy path" scenario is the only type of scenario you can currently create in Scan.\r
In future versions of Scan, we plan to introduce additional scenario types.`
    }), `
`, s.jsx(e.p, {
      children: `This scenario contains operation references that should be performed in order to execute the test.\r
When creating a new scenario, it will initially contain just one reference to the operation selected during scenario creation.`
    }), `
`, s.jsx(e.p, {
      children: `You can add more operation references to the scenario by clicking the "Pick operation" button.\r
These references can also be reordered within the scenario using drag-and-drop functionality.`
    }), `
`, s.jsx(e.p, {
      children: `Each operation reference within a scenario has its own distinct response processing configuration and\r
environment variables, which take precedence over those defined at the operation level.`
    }), `
`, s.jsx(e.h3, {
      children: "Before and after blocks"
    }), `
`, s.jsx(e.p, {
      children: `Before and after blocks are used to define operations that should be executed before and after the happy path scenario,\r
and serve mainly as setup and cleanup steps.`
    }), `
`, s.jsx(e.p, {
      children: `The "Before" and "After" blocks in Scan allow you to define operations that should be executed before and after your Scenario.\r
These blocks primarily serve as setup and cleanup steps. These blocks are shared between all scenarios.`
    }), `
`, s.jsx(e.h3, {
      children: "Autorization tests"
    }), `
`, s.jsx(e.p, {
      children: `The Authorization Tests section enables you to apply Broken Object Level Authorization (BOLA)\r
and Broken Function Level Authorization (BLFA) tests, as defined in the global Tests section, to your scenario.`
    }), `
`, s.jsx(e.h2, {
      children: "Global blocks"
    }), `
`, s.jsx(e.p, {
      children: `The Global Before and After blocks provide an opportunity to execute setup and cleanup steps at the Scan level.\r
These blocks are run only once, respectively, before and after the entire scan execution, allowing you to perform\r
global initialization and cleanup tasks.`
    }), `
`, s.jsx(e.h2, {
      children: "Authentication"
    }), `
`, s.jsx(e.p, {
      children: `Certain operations may require authentication to function properly.\r
Configure authentication settings in the Scan UI's Authentication section.`
    }), `
`, s.jsx(e.h3, {
      children: "Security schemes"
    }), `
`, s.jsx(e.p, {
      children: `A "Security Scheme" describes the type of authentication required by an operation,\r
closely following the contents of the relevant OpenAPI's Security Scheme.`
    }), `
`, s.jsx(e.p, {
      children: `These security schemes define the authentication requirements and how they should be sent.\r
For example, you can specify using an API key and sending it in a specific HTTP header.`
    }), `
`, s.jsx(e.h3, {
      children: "Credentials"
    }), `
`, s.jsx(e.p, {
      children: `Credentials are primarily related to authorization aspects of your operations.\r
Although all operations might share the same authentication type, some may have different authorization requirements.`
    }), `
`, s.jsx(e.p, {
      children: "For example, while most operations might be accessible to ordinary users, others might require admin privileges."
    }), `
`, s.jsx(e.p, {
      children: `To effectively test such APIs, you can create distinct Credentials for "ordinary" and\r
"admin" users, configuring respective operations to use one or the other.`
    }), `
`, s.jsx(e.h3, {
      children: "Secrets"
    }), `
`, s.jsx(e.p, {
      children: "You may need to use secrets like passwords or API keys as credential values."
    }), `
`, s.jsx(e.p, {
      children: "The best practice is to avoid storing these sensitive values directly in your scan configuration."
    }), `
`, s.jsx(e.p, {
      children: `Instead, consider using variables to access secret values received from external sources.\r
You can create a variable using the "External inputs" feature in the global Environment section of the scan configuration\r
and then utilize variable expression to inject the value into your credential.`
    }), `
`, s.jsxs(e.p, {
      children: ['For instance, you could create an entry in "External inputs" to define the ', s.jsx(e.code, {
        children: "password1"
      }), ` variable,\r
and then set credential value to `, s.jsx(e.code, {
        children: "{{password1}}"
      }), "."]
    }), `
`, s.jsx(e.h3, {
      children: "Dynamic identities"
    }), `
`, s.jsx(e.p, {
      children: "In certain situations, you may need to set identities dynamically using information from one or multiple API calls."
    }), `
`, s.jsx(e.p, {
      children: 'A common example is when all operations in an API require authentication with a token returned by a "login" operation.'
    }), `
`, s.jsxs(e.p, {
      children: [`To achieve this, you can add a call to the "login" operation within credential, extract the token from its\r
response and store it in a variable named `, s.jsx(e.code, {
        children: "token"
      }), ". Then, use the expression ", s.jsx(e.code, {
        children: "{{token}}"
      }), ` in the credential value to access\r
the dynamically retrieved token.`]
    }), `
`, s.jsx(e.p, {
      children: "You can leverage operations defined in the OpenAPI to retrieve credentials or create external operations to call APIs that are not part of it."
    }), `
`, s.jsx(e.h2, {
      children: "Tests"
    }), `
`, s.jsx(e.p, {
      children: `The Tests section enables you to define Broken Object Level Authorization (BOLA) and Broken Function Level Authorization (BLFA) tests,\r
which can be applied to your scenarios and API operations.`
    }), `
`, s.jsx(e.h2, {
      children: "Environment"
    }), `
`, s.jsx(e.h3, {
      children: "External inputs"
    }), `
`, s.jsx(e.p, {
      children: "The External Inputs section in the Environment allows you to use data from external sources in your Scan configuration."
    }), `
`, s.jsx(e.p, {
      children: "You can provide input values from outside the Scan using:"
    }), `
`, s.jsxs(e.ul, {
      children: [`
`, s.jsxs(e.li, {
        children: [`
`, s.jsx(e.p, {
          children: "The Environment data stored in the IDE"
        }), `
`]
      }), `
`, s.jsxs(e.li, {
        children: [`
`, s.jsx(e.p, {
          children: "Docker container environment variables, if running the Scan with Docker or ScanD Manager outside of the IDE"
        }), `
`]
      }), `
`]
    }), `
`, s.jsx(e.p, {
      children: `Each entry in this section defines a variable name that can be used in the Scan configuration "Name" and the corresponding environment\r
variable to pass the value to the Scan configuration "Source environment variable".`
    }), `
`, s.jsx(e.p, {
      children: `These entries are marked as either required or not. For non-required entries, you can specify a default value that will be us\r
ed if an external value is not provided.`
    }), `
`, s.jsxs(e.p, {
      children: [s.jsx(e.strong, {
        children: "Important"
      }), ": You must provide values for all required external inputs before running the scan, otherwise it will fail."]
    }), `
`, s.jsx(e.h2, {
      children: "Settings"
    }), `
`, s.jsx(e.p, {
      children: "The Settings section allows you to customize the behavior of your Scan."
    }), `
`, s.jsx(e.h3, {
      children: "Logging configuration"
    }), `
`, s.jsx(e.p, {
      children: `In this section, you can configure the logging level and log destination to control the verbosity and output location\r
of logs generated during the scan.`
    }), `
`, s.jsx(e.h3, {
      children: "Environment settings"
    }), `
`, s.jsx(e.p, {
      children: "Choose your global environment settings for scanning."
    }), `
`, s.jsx(e.p, {
      children: 'By default, a "default" environment is created, but you can also create additional environments and switch between them.'
    }), `
`, s.jsx(e.h1, {
      children: "General Concepts"
    }), `
`, s.jsx(e.h2, {
      children: "Variable substitution"
    }), `
`, s.jsx(e.p, {
      children: "Variable substitution is a powerful feature that enables dynamic changes to your requests and responses."
    }), `
`, s.jsx(e.h3, {
      children: "Syntax"
    }), `
`, s.jsxs(e.p, {
      children: ["Variable substitution uses variable expressions, which look like this: ", s.jsx(e.code, {
        children: "{{variable_name}}"
      }), "."]
    }), `
`, s.jsx(e.h3, {
      children: "Definition of variables"
    }), `
`, s.jsx(e.p, {
      children: "You can define variables in the following sections:"
    }), `
`, s.jsxs(e.ul, {
      children: [`
`, s.jsx(e.li, {
        children: "Global environment section"
      }), `
`, s.jsx(e.li, {
        children: "Operation environment section"
      }), `
`, s.jsx(e.li, {
        children: "Scenario environment section"
      }), `
`, s.jsx(e.li, {
        children: "Response processing section of the Operation or Scenario"
      }), `
`]
    }), `
`, s.jsx(e.h3, {
      children: "Usage"
    }), `
`, s.jsx(e.p, {
      children: "Variables can be used in various parts of your requests and responses, including:"
    }), `
`, s.jsxs(e.ul, {
      children: [`
`, s.jsx(e.li, {
        children: "Request body"
      }), `
`, s.jsx(e.li, {
        children: "Request parameters"
      }), `
`, s.jsx(e.li, {
        children: "Response processing"
      }), `
`, s.jsx(e.li, {
        children: "Identites"
      }), `
`]
    }), `
`, s.jsx(e.p, {
      children: "When performing variable substitution, the lookup order is as follows: scenario variables, operation variable, global variables."
    }), `
`, s.jsx(e.h3, {
      children: "Variable types"
    }), `
`, s.jsxs(e.p, {
      children: ["Variables have types, which are defined in the Environment section. You can use variables with types ", s.jsx(e.code, {
        children: "string"
      }), ", ", s.jsx(e.code, {
        children: "number"
      }), ", ", s.jsx(e.code, {
        children: "boolean"
      }), ", or ", s.jsx(e.code, {
        children: "null"
      }), "."]
    }), `
`, s.jsx(e.h3, {
      children: "Variables in JSON"
    }), `
`, s.jsx(e.p, {
      children: `When substituting variables in the request body, always quote\r
the variable expression, even if you're substituting a number or boolean.`
    }), `
`, s.jsx(e.p, {
      children: "After substitution, the actual type of the variable is used in the request."
    }), `
`, s.jsxs(e.p, {
      children: ["For example, if you define a variable ", s.jsx(e.code, {
        children: "age"
      }), ` with a numeric value of 10, and use it in a request body like this:\r
`, s.jsx(e.code, {
        children: '{ "user_ age": "{{age}}"}'
      }), " the resulting JSON will be ", s.jsx(e.code, {
        children: '{ "user_age": 10 }'
      }), "."]
    }), `
`, s.jsx(e.h2, {
      children: "Built-in variables"
    }), `
`, s.jsx(e.p, {
      children: "There are a number of built in variables that you can use in your scan configuration."
    }), `
`, s.jsxs(e.ul, {
      children: [`
`, s.jsxs(e.li, {
        children: [s.jsx(e.code, {
          children: "$randomString"
        }), ":  Generates a random alphanumeric string of 20 characters"]
      }), `
`, s.jsxs(e.li, {
        children: [s.jsx(e.code, {
          children: "$randomuint"
        }), ": Generates a random uint32 integer"]
      }), `
`, s.jsxs(e.li, {
        children: [s.jsx(e.code, {
          children: "$uuid"
        }), ": Generates a unique UUID"]
      }), `
`, s.jsxs(e.li, {
        children: [s.jsx(e.code, {
          children: "$timestamp"
        }), ": Generates the current time in UNIX format"]
      }), `
`, s.jsxs(e.li, {
        children: [s.jsx(e.code, {
          children: "$timestamp3339"
        }), ": Generates the current date and time as defined in RFC 3339"]
      }), `
`, s.jsxs(e.li, {
        children: [s.jsx(e.code, {
          children: "$randomFromSchema"
        }), ": Generates the values based on the schema defined in your OpenAPI definition"]
      }), `
`]
    }), `
`, s.jsx(e.h2, {
      children: "Keeping configuration in sync with OpenAPI"
    }), `
`, s.jsx(e.p, {
      children: `The scan configuration must be kept in sync with the OpenAPI file it is based on,\r
as it is crucial for accurate and comprehensive testing. To help users keep\r
their scan configuration in sync, the Scan UI checks if the scan configuration\r
matches the OpenAPI file, and in the presence of changes, offers to update the scan configuration\r
accordingly.`
    }), `
`, s.jsx(e.p, {
      children: "The types of changes that the Scan UI can handle are:"
    }), `
`, s.jsxs(e.ul, {
      children: [`
`, s.jsx(e.li, {
        children: "Adding new operations to the OpenAPI file"
      }), `
`, s.jsx(e.li, {
        children: "Removing operations from the OpenAPI file"
      }), `
`, s.jsxs(e.li, {
        children: ["Renaming operations (changing their ", s.jsx(e.code, {
          children: "operationId"
        }), ")"]
      }), `
`, s.jsx(e.li, {
        children: "Adding new security schemes to the OpenAPI file"
      }), `
`]
    }), `
`, s.jsx(e.p, {
      children: `However, changes to the schemas describing operation payloads (body, parameters, etc),\r
adding or removing parameters, etc. are not handled by the Scan UI, as these can be customized by the user.`
    }), `
`, s.jsx(e.p, {
      children: `If such changes are made to the OpenAPI file, the user must make appropriate changes to\r
the scan configuration manually.`
    }), `
`, s.jsx(e.p, {
      children: `When changes are detected, the Scan UI will prompt you to update the\r
scan configuration to reflect the modifications made to the OpenAPI file.`
    })]
  });
}
function lD(t = {}) {
  const { wrapper: e } = t.components || {};
  return e ? s.jsx(e, {
    ...t,
    children: s.jsx(Dc, {
      ...t
    })
  }) : Dc(t);
}
function uD(t, e) {
  throw new Error("Expected component `" + t + "` to be defined: you likely forgot to import, pass, or provide it.");
}
function cD() {
  const t = b.useRef(null), e = mD(t);
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx(hD, { children: e.map((n, o) => /* @__PURE__ */ s.jsx(
      fD,
      {
        level: n.level,
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), n.element.scrollIntoView({ behavior: "smooth" });
        },
        children: n.title
      },
      o
    )) }),
    /* @__PURE__ */ s.jsx(gD, { ref: t, expanded: !0, children: /* @__PURE__ */ s.jsx(lD, { components: { Link: dD } }) })
  ] });
}
function dD({ href: t, children: e }) {
  const n = oe();
  return /* @__PURE__ */ s.jsx(
    "a",
    {
      onClick: (o) => {
        o.preventDefault(), o.stopPropagation(), n(kf(t));
      },
      href: t,
      children: e
    }
  );
}
function pD(t) {
  switch (t) {
    case "H1":
      return 1;
    case "H2":
      return 2;
    case "H3":
      return 3;
  }
}
const mD = (t) => {
  const [e, n] = b.useState([]);
  return b.useEffect(() => {
    const o = [];
    if (t.current !== null) {
      for (const r of t.current.querySelectorAll("h1, h2, h3"))
        if (r.textContent) {
          const i = r.textContent, a = pD(r.tagName);
          o.push({ title: i, element: r, level: a });
        }
    }
    n(o);
  }, [t]), e;
}, hD = y.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: var(${f.background});
`, fD = y.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(${f.listHoverBackground});
  }

  ${({ level: t }) => t === 1 && `
    font-weight: 600;
    font-size: 16px;
    padding: 8px 8px;
  `}

  ${({ level: t }) => t === 2 && `
    font-weight: 500;
    font-size: 14px;
    padding: 4px 16px;
  `}

  ${({ level: t }) => t === 3 && `
    font-weight: 400;
    font-size: 12px;
    padding: 4px 32px;
  `}
`, gD = y.div`
  position: absolute;
  ${({ expanded: t }) => t ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${f.computedOne});
  padding: 16px;
  overflow-y: auto;
  code {
    background-color: unset;
    padding: 0;
    border-radius: 0;
  }
`, Ic = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ s.jsx("div", {})
  },
  {
    id: "general-error",
    title: "An error has occurred",
    element: /* @__PURE__ */ s.jsx(iD, {}),
    navigation: !1,
    when: mt
  },
  {
    id: "scanconf-update",
    title: "Scan configuration is outdated",
    element: /* @__PURE__ */ s.jsx(tD, {}),
    navigation: !1
  },
  {
    id: "scanconf",
    title: "Scanconf",
    element: /* @__PURE__ */ s.jsx("div", { children: "Main" }),
    children: [
      {
        id: "requests",
        title: "Operations",
        element: /* @__PURE__ */ s.jsx(s2, {})
      },
      {
        id: "operations",
        title: "Scenarios",
        element: /* @__PURE__ */ s.jsx(tO, {})
      },
      {
        id: "global",
        title: "Global blocks",
        element: /* @__PURE__ */ s.jsx(O2, {})
      },
      {
        id: "auth",
        title: "Authentication",
        element: /* @__PURE__ */ s.jsx(a1, {})
      },
      {
        id: "authorizationTests",
        title: "Tests",
        element: /* @__PURE__ */ s.jsx(U2, {})
      },
      {
        id: "environments",
        title: /* @__PURE__ */ s.jsx(M2, {}),
        element: /* @__PURE__ */ s.jsx(E2, {})
      },
      {
        id: "settings",
        title: "Settings",
        element: /* @__PURE__ */ s.jsx(A2, {})
      },
      {
        id: "help",
        title: "Help",
        element: /* @__PURE__ */ s.jsx(cD, {})
      }
    ]
  }
];
function vD(t, e) {
  const n = Gk(TE(t, Ic), e);
  jf(document.getElementById("root")).render(
    /* @__PURE__ */ s.jsx(Hn.StrictMode, { children: /* @__PURE__ */ s.jsx(bf, { store: n, children: /* @__PURE__ */ s.jsx(xf.Provider, { value: Ic, children: /* @__PURE__ */ s.jsx(vy, { backend: lk, children: /* @__PURE__ */ s.jsx(wf, {}) }) }) }) })
  ), window.addEventListener("message", Sf(n, Wk));
}
window.renderWebView = vD;
