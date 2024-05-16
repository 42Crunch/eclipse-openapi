var zf = Object.defineProperty;
var If = (t, e, n) => e in t ? zf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var xi = (t, e, n) => (If(t, typeof e != "symbol" ? e + "" : e, n), n);
import { j as l, e as x, o as wc, p as Tt, c as Xt, b as _c, i as Nn, a as Nf, n as Rf, u as Pf, l as Af, t as Mf, r as Ff, q as v, T as h, S as lt, W as Sc, R as Rn, _ as qe, v as Ji, w as Cc, x as ae, y as Lf, d as qf, s as Bf, f as Hf, P as Uf, g as Vf, N as Wf, m as Kf } from "./TriangleExclamation.DXu4kS4a.js";
import { a as Pn, S as Gf } from "./SearchSidebar.CLqfy2qX.js";
import { f as $c, g as Ua, m as Jf, l as Yf, e as Xf, c as pe, k as Qf, a as $r, n as Zf, o as eh, d as Sn, p as Tc, q as Tr, r as Ec, t as Oc, i as Er, v as Dc, w as th, x as nh, s as zc, H as oh } from "./slice.CWBRDdMB.js";
import { l as rh, c as ih, S as ah } from "./index.CChMyIf-.js";
import { l as sh, p as lh, $ as uh, c as ch, g as dh, h as ph, i as mh, j as fh, d as hh, e as gh, f as yh, k as vh, m as kh, n as bh, o as jh, u as xh, q as wh, a as Ic, r as _h, t as Sh, S as Nc } from "./index.D6snYo-h.js";
import { o as An, s as K, b as Ol, l as Dl, d as Ch, F as Ze, t as $h, I as Me, a as zl } from "./Input.XArzwHh1.js";
import { S as Ro } from "./AngleDown.B1PAEJDo.js";
import { S as Th } from "./AngleUp.D4X3ZBAW.js";
import { S as Rc, P as Eh } from "./ProgressButton.BXGsNRB0.js";
import { T as Et, $ as Oh } from "./Tabs.DmdBV2_q.js";
import { C as Qt, B as Mn, a as cr, T as Pc } from "./CollapsibleCard.C-xTDNmK.js";
import { S as Or } from "./ExclamationCircle.BKeR_1oo.js";
import { $ as Va, b as Wa, c as Ka, d as Ga, e as Ja } from "./index.DFJbX2ak.js";
import { a as Q, u as Zt, d as Ac, F as Mc, b as en, c as Po } from "./index.esm.BXz9bO7M.js";
import { a as Dr, u as zr } from "./downshift.esm.DJR5szcB.js";
import { S as He, l as Ir, m as Nr, D as Ya, r as Il, n as Dh, o as zh, q as Ih, E as Nh } from "./variables.nPa5PKXw.js";
import { a as Rh, S as Fc } from "./Switch.D9TBE_0o.js";
import { $ as Ph, e as Xa, c as Qa, d as so, g as Ah, b as Ao, h as Mh, a as Fh, i as wi, j as Lh } from "./index.C8L7jEdi.js";
import { S as Yi } from "./Select.DP_PMttj.js";
import { o as qh, s as Bh } from "./listener.BByQOU-k.js";
import { S as Mo, r as Hh } from "./index.DONXYp6Y.js";
import { E as _i } from "./Banner.DrLooVOQ.js";
const Lc = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M192 456c0 13.3-10.7 24-24 24H96c-53.02 0-96-42.98-96-96V128c0-53.02 42.98-96 96-96h72c13.3 0 24 10.74 24 24 0 13.25-10.7 24-24 24H96c-26.4 0-48 21.6-48 48v256c0 26.4 21.6 48 48 48h72c13.3 0 24 10.7 24 24zm313.5-216.4-127.1-136c-9.094-9.688-24.28-10.12-33.91-1.031-9.656 9.062-10.12 24.25-1.031 33.91L432.4 232H183.1c-12.4 0-23.1 10.8-23.1 24s10.75 24 23.1 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C348.2 413.8 354.1 416 359.1 416c6.375 0 12.75-2.531 17.47-7.562l127.1-136C514.2 263.2 514.2 248.8 505.5 239.6z" }) }), Uh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M200 32h-80c-30.93 0-56 25.07-56 56v77.5a39.84 39.84 0 0 1-11.67 28.17L7 239c-4.5 4.5-7 10.6-7 17 0 6.375 2.5 12.5 7 17l45.33 45.33A39.783 39.783 0 0 1 64 346.5V424c0 30.9 25.07 56 56 56h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-4.4 0-8-3.6-8-8v-77.5c0-23.44-9.337-45.91-25.95-62.45L57.88 256l28.18-28.05C102.7 211.4 112 188.9 112 165.5V88c0-4.4 3.6-8 8-8h80c13.3 0 24-10.75 24-24s-10.7-24-24-24zm369 207-45.33-45.33A39.783 39.783 0 0 1 512 165.5V88c0-30.93-25.1-56-56-56h-80c-13.3 0-24 10.75-24 23.1S362.7 80 375.1 80H456c4.4 0 8 3.6 8 8v77.5c0 23.37 9.284 45.78 25.81 62.31L517.1 256l-28.19 28.19C473.3 300.7 464 323.1 464 346.5V424c0 4.4-3.6 8-8 8h-80c-13.3 0-24 10.7-24 23.1s10.7 24.9 23.1 24.9H456c30.93 0 56-25.07 56-56v-77.5a39.84 39.84 0 0 1 11.67-28.17L569 273c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17z" }) }), Vh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M235.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" }) }), qc = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" }) }), Bc = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-160c13.25 0 24-10.75 24-24V152c0-13.2-10.7-24-24-24s-24 10.8-24 24v128c0 13.3 10.8 24 24 24zm0 33.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 385.9 238.6 400 256 400s31.44-14.08 31.44-31.44C287.4 351.2 273.4 337.1 256 337.1z" }) }), Wh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-128c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32s-14.9-32-32-32zm33.1-208H238c-39 0-70 31-70 70 0 13 11 24 24 24s24-11 24-24c0-12 9.1-22 21.1-22h51.1c12.9 0 23.8 10 23.8 22 0 8-4 14.1-11 18.1L244 251c-8 5-12 13-12 21v16c0 13 11 24 24 24s24-11 24-24v-2l45.1-28c21-13 34-36 34-60 .9-39-30.1-70-70-70z" }) }), Kh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M64 368c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48zm0-160c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48zm0-64c-26.51 0-48-21.5-48-48 0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.5-21.49 48-48 48z" }) }), Hc = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "m568.1 303-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 296H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 387.7 448 393.8 448 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97zM360 384c-13.25 0-24 10.74-24 24v40c0 8.836-7.164 16-16 16H64.02c-8.836 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v72c0 13.25 10.74 24 23.1 24s25.8-10.7 25.8-24v-93.4c0-16.98-6.742-33.26-18.75-45.26L290.62 18.7C278.6 6.742 262.3 0 245.4 0H63.1C28.65 0-.002 28.66 0 64l.006 384c.002 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64v-40c0-13.3-10.7-24-24-24z" }) }), Gh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zm48-40v-48H40v48h48zm144 40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 232c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40v-48zm40 0v48h48v-48H40zm192 88c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40V72zm40 0v48h48V72H40zm192 88c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40V72h-48v48h48z" }) }), Jh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M336 144c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm0 208c-9.5 0-18.8-.7-27.9-2.2l-28 26.3c-3.6 5.4-9.7 7.9-16.1 7.9h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24V376c0-6.4 2.529-12.5 7.029-17L162.2 203.9c-1.4-9.1-2.2-18.4-2.2-27.9C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176zm0-48c70.7 0 128-57.3 128-128S406.7 48 336 48s-128 57.3-128 128c0 6.9.5 13.7 1.6 20.3l3.8 24.2L47.1 385.9V464h64v-64h64v-64h79l37.4-37.4 24.2 3.8c6.6 1.1 13.4 1.6 20.3 1.6z" }) }), Yh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M24.52 38.13a48.019 48.019 0 0 1 48.51.91L361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87zM48 432l288-176L48 80v352z" }) }), Fo = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M432 256c0 13.3-10.7 24-24 24H248v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200 440V280H40c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160V72c0-13.25 10.75-23.99 24-23.99S248 58.75 248 72v160h160c13.3 0 24 10.8 24 24z" }) }), Xh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M0 416c0 13.3 10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm32-80c-35.8 0-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56zm-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H268.3z" }) }), Qh = (t) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...t, children: /* @__PURE__ */ l.jsx("path", { d: "M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm200 248v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" }) }), Uc = x.createContext({
  dragDropManager: void 0
});
function Re(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
}
var Nl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Si = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Rl = {
  INIT: "@@redux/INIT" + Si(),
  REPLACE: "@@redux/REPLACE" + Si(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Si();
  }
};
function Zh(t) {
  if (typeof t != "object" || t === null)
    return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function Vc(t, e, n) {
  var o;
  if (typeof e == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Re(0));
  if (typeof e == "function" && typeof n > "u" && (n = e, e = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Re(1));
    return n(Vc)(t, e);
  }
  if (typeof t != "function")
    throw new Error(Re(2));
  var r = t, i = e, a = [], s = a, u = !1;
  function c() {
    s === a && (s = a.slice());
  }
  function d() {
    if (u)
      throw new Error(Re(3));
    return i;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Re(4));
    if (u)
      throw new Error(Re(5));
    var k = !0;
    return c(), s.push(g), function() {
      if (k) {
        if (u)
          throw new Error(Re(6));
        k = !1, c();
        var _ = s.indexOf(g);
        s.splice(_, 1), a = null;
      }
    };
  }
  function f(g) {
    if (!Zh(g))
      throw new Error(Re(7));
    if (typeof g.type > "u")
      throw new Error(Re(8));
    if (u)
      throw new Error(Re(9));
    try {
      u = !0, i = r(i, g);
    } finally {
      u = !1;
    }
    for (var k = a = s, b = 0; b < k.length; b++) {
      var _ = k[b];
      _();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function")
      throw new Error(Re(10));
    r = g, f({
      type: Rl.REPLACE
    });
  }
  function y() {
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
      subscribe: function(_) {
        if (typeof _ != "object" || _ === null)
          throw new Error(Re(11));
        function j() {
          _.next && _.next(d());
        }
        j();
        var C = k(j);
        return {
          unsubscribe: C
        };
      }
    }, g[Nl] = function() {
      return this;
    }, g;
  }
  return f({
    type: Rl.INIT
  }), o = {
    dispatch: f,
    subscribe: p,
    getState: d,
    replaceReducer: m
  }, o[Nl] = y, o;
}
function P(t, e, ...n) {
  if (eg() && e === void 0)
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
function eg() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function tg(t, e, n) {
  return e.split(".").reduce(
    (o, r) => o && o[r] ? o[r] : n || null,
    t
  );
}
function ng(t, e) {
  return t.filter(
    (n) => n !== e
  );
}
function Wc(t) {
  return typeof t == "object";
}
function og(t, e) {
  const n = /* @__PURE__ */ new Map(), o = (i) => {
    n.set(i, n.has(i) ? n.get(i) + 1 : 1);
  };
  t.forEach(o), e.forEach(o);
  const r = [];
  return n.forEach((i, a) => {
    i === 1 && r.push(a);
  }), r;
}
function rg(t, e) {
  return t.filter(
    (n) => e.indexOf(n) > -1
  );
}
const Za = "dnd-core/INIT_COORDS", Rr = "dnd-core/BEGIN_DRAG", es = "dnd-core/PUBLISH_DRAG_SOURCE", Pr = "dnd-core/HOVER", Ar = "dnd-core/DROP", Mr = "dnd-core/END_DRAG";
function Pl(t, e) {
  return {
    type: Za,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
const ig = {
  type: Za,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function ag(t) {
  return function(n = [], o = {
    publishSource: !0
  }) {
    const { publishSource: r = !0, clientOffset: i, getSourceClientOffset: a } = o, s = t.getMonitor(), u = t.getRegistry();
    t.dispatch(Pl(i)), sg(n, s, u);
    const c = cg(n, s);
    if (c == null) {
      t.dispatch(ig);
      return;
    }
    let d = null;
    if (i) {
      if (!a)
        throw new Error("getSourceClientOffset must be defined");
      lg(a), d = a(c);
    }
    t.dispatch(Pl(i, d));
    const f = u.getSource(c).beginDrag(s, c);
    if (f == null)
      return;
    ug(f), u.pinSource(c);
    const m = u.getSourceType(c);
    return {
      type: Rr,
      payload: {
        itemType: m,
        item: f,
        sourceId: c,
        clientOffset: i || null,
        sourceClientOffset: d || null,
        isSourcePublic: !!r
      }
    };
  };
}
function sg(t, e, n) {
  P(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(o) {
    P(n.getSource(o), "Expected sourceIds to be registered.");
  });
}
function lg(t) {
  P(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function ug(t) {
  P(Wc(t), "Item must be an object.");
}
function cg(t, e) {
  let n = null;
  for (let o = t.length - 1; o >= 0; o--)
    if (e.canDragSource(t[o])) {
      n = t[o];
      break;
    }
  return n;
}
function dg(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function pg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      dg(t, r, n[r]);
    });
  }
  return t;
}
function mg(t) {
  return function(n = {}) {
    const o = t.getMonitor(), r = t.getRegistry();
    fg(o), yg(o).forEach((a, s) => {
      const u = hg(a, s, r, o), c = {
        type: Ar,
        payload: {
          dropResult: pg({}, n, u)
        }
      };
      t.dispatch(c);
    });
  };
}
function fg(t) {
  P(t.isDragging(), "Cannot call drop while not dragging."), P(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function hg(t, e, n, o) {
  const r = n.getTarget(t);
  let i = r ? r.drop(o, t) : void 0;
  return gg(i), typeof i > "u" && (i = e === 0 ? {} : o.getDropResult()), i;
}
function gg(t) {
  P(typeof t > "u" || Wc(t), "Drop result must either be an object or undefined.");
}
function yg(t) {
  const e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function vg(t) {
  return function() {
    const n = t.getMonitor(), o = t.getRegistry();
    kg(n);
    const r = n.getSourceId();
    return r != null && (o.getSource(r, !0).endDrag(n, r), o.unpinSource()), {
      type: Mr
    };
  };
}
function kg(t) {
  P(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function Xi(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(
    (n) => n === e
  ) : t === e;
}
function bg(t) {
  return function(n, { clientOffset: o } = {}) {
    jg(n);
    const r = n.slice(0), i = t.getMonitor(), a = t.getRegistry(), s = i.getItemType();
    return wg(r, a, s), xg(r, i, a), _g(r, i, a), {
      type: Pr,
      payload: {
        targetIds: r,
        clientOffset: o || null
      }
    };
  };
}
function jg(t) {
  P(Array.isArray(t), "Expected targetIds to be an array.");
}
function xg(t, e, n) {
  P(e.isDragging(), "Cannot call hover while not dragging."), P(!e.didDrop(), "Cannot call hover after drop.");
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    P(t.lastIndexOf(r) === o, "Expected targetIds to be unique in the passed array.");
    const i = n.getTarget(r);
    P(i, "Expected targetIds to be registered.");
  }
}
function wg(t, e, n) {
  for (let o = t.length - 1; o >= 0; o--) {
    const r = t[o], i = e.getTargetType(r);
    Xi(i, n) || t.splice(o, 1);
  }
}
function _g(t, e, n) {
  t.forEach(function(o) {
    n.getTarget(o).hover(e, o);
  });
}
function Sg(t) {
  return function() {
    if (t.getMonitor().isDragging())
      return {
        type: es
      };
  };
}
function Cg(t) {
  return {
    beginDrag: ag(t),
    publishDragSource: Sg(t),
    hover: bg(t),
    drop: mg(t),
    endDrag: vg(t)
  };
}
class $g {
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
        const s = i.apply(e, a);
        typeof s < "u" && n(s);
      };
    }
    const r = Cg(this);
    return Object.keys(r).reduce((i, a) => {
      const s = r[a];
      return i[a] = o(s), i;
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
function Tg(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function Kc(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function Eg(t) {
  const { clientOffset: e, initialClientOffset: n, initialSourceClientOffset: o } = t;
  return !e || !n || !o ? null : Kc(Tg(e, o), n);
}
function Og(t) {
  const { clientOffset: e, initialClientOffset: n } = t;
  return !e || !n ? null : Kc(e, n);
}
const lo = [], ts = [];
lo.__IS_NONE__ = !0;
ts.__IS_ALL__ = !0;
function Dg(t, e) {
  return t === lo ? !1 : t === ts || typeof e > "u" ? !0 : rg(e, t).length > 0;
}
class zg {
  subscribeToStateChange(e, n = {}) {
    const { handlerIds: o } = n;
    P(typeof e == "function", "listener must be a function."), P(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
    let r = this.store.getState().stateId;
    const i = () => {
      const a = this.store.getState(), s = a.stateId;
      try {
        s === r || s === r + 1 && !Dg(a.dirtyHandlerIds, o) || e();
      } finally {
        r = s;
      }
    };
    return this.store.subscribe(i);
  }
  subscribeToOffsetChange(e) {
    P(typeof e == "function", "listener must be a function.");
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
    return P(n, `Expected to find a valid source. sourceId=${e}`), this.isDragging() ? !1 : n.canDrag(this, e);
  }
  canDropOnTarget(e) {
    if (!e)
      return !1;
    const n = this.registry.getTarget(e);
    if (P(n, `Expected to find a valid target. targetId=${e}`), !this.isDragging() || this.didDrop())
      return !1;
    const o = this.registry.getTargetType(e), r = this.getItemType();
    return Xi(o, r) && n.canDrop(this, e);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(e) {
    if (!e)
      return !1;
    const n = this.registry.getSource(e, !0);
    if (P(n, `Expected to find a valid source. sourceId=${e}`), !this.isDragging() || !this.isSourcePublic())
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
    if (i && !Xi(r, i))
      return !1;
    const a = this.getTargetIds();
    if (!a.length)
      return !1;
    const s = a.indexOf(e);
    return o ? s === a.length - 1 : s > -1;
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
    return Eg(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return Og(this.store.getState().dragOffset);
  }
  constructor(e, n) {
    this.store = e, this.registry = n;
  }
}
const Al = typeof global < "u" ? global : self, Gc = Al.MutationObserver || Al.WebKitMutationObserver;
function Jc(t) {
  return function() {
    const n = setTimeout(r, 0), o = setInterval(r, 50);
    function r() {
      clearTimeout(n), clearInterval(o), t();
    }
  };
}
function Ig(t) {
  let e = 1;
  const n = new Gc(t), o = document.createTextNode("");
  return n.observe(o, {
    characterData: !0
  }), function() {
    e = -e, o.data = e;
  };
}
const Ng = typeof Gc == "function" ? (
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
  Ig
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
  Jc
);
class Rg {
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
    }, this.requestFlush = Ng(this.flush), this.requestErrorThrow = Jc(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Pg {
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
class Ag {
  create(e) {
    const n = this.freeTasks, o = n.length ? n.pop() : new Pg(
      this.onError,
      (r) => n[n.length] = r
    );
    return o.task = e, o;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const Yc = new Rg(), Mg = new Ag(Yc.registerPendingError);
function Fg(t) {
  Yc.enqueueTask(Mg.create(t));
}
const ns = "dnd-core/ADD_SOURCE", os = "dnd-core/ADD_TARGET", rs = "dnd-core/REMOVE_SOURCE", Fr = "dnd-core/REMOVE_TARGET";
function Lg(t) {
  return {
    type: ns,
    payload: {
      sourceId: t
    }
  };
}
function qg(t) {
  return {
    type: os,
    payload: {
      targetId: t
    }
  };
}
function Bg(t) {
  return {
    type: rs,
    payload: {
      sourceId: t
    }
  };
}
function Hg(t) {
  return {
    type: Fr,
    payload: {
      targetId: t
    }
  };
}
function Ug(t) {
  P(typeof t.canDrag == "function", "Expected canDrag to be a function."), P(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), P(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function Vg(t) {
  P(typeof t.canDrop == "function", "Expected canDrop to be a function."), P(typeof t.hover == "function", "Expected hover to be a function."), P(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function Qi(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(
      (n) => Qi(n, !1)
    );
    return;
  }
  P(typeof t == "string" || typeof t == "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var Pe;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})(Pe || (Pe = {}));
let Wg = 0;
function Kg() {
  return Wg++;
}
function Gg(t) {
  const e = Kg().toString();
  switch (t) {
    case Pe.SOURCE:
      return `S${e}`;
    case Pe.TARGET:
      return `T${e}`;
    default:
      throw new Error(`Unknown Handler Role: ${t}`);
  }
}
function Ml(t) {
  switch (t[0]) {
    case "S":
      return Pe.SOURCE;
    case "T":
      return Pe.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${t}`);
  }
}
function Fl(t, e) {
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
class Jg {
  addSource(e, n) {
    Qi(e), Ug(n);
    const o = this.addHandler(Pe.SOURCE, e, n);
    return this.store.dispatch(Lg(o)), o;
  }
  addTarget(e, n) {
    Qi(e, !0), Vg(n);
    const o = this.addHandler(Pe.TARGET, e, n);
    return this.store.dispatch(qg(o)), o;
  }
  containsHandler(e) {
    return Fl(this.dragSources, e) || Fl(this.dropTargets, e);
  }
  getSource(e, n = !1) {
    return P(this.isSourceId(e), "Expected a valid source ID."), n && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e);
  }
  getTarget(e) {
    return P(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e);
  }
  getSourceType(e) {
    return P(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e);
  }
  getTargetType(e) {
    return P(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e);
  }
  isSourceId(e) {
    return Ml(e) === Pe.SOURCE;
  }
  isTargetId(e) {
    return Ml(e) === Pe.TARGET;
  }
  removeSource(e) {
    P(this.getSource(e), "Expected an existing source."), this.store.dispatch(Bg(e)), Fg(() => {
      this.dragSources.delete(e), this.types.delete(e);
    });
  }
  removeTarget(e) {
    P(this.getTarget(e), "Expected an existing target."), this.store.dispatch(Hg(e)), this.dropTargets.delete(e), this.types.delete(e);
  }
  pinSource(e) {
    const n = this.getSource(e);
    P(n, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = n;
  }
  unpinSource() {
    P(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(e, n, o) {
    const r = Gg(e);
    return this.types.set(r, n), e === Pe.SOURCE ? this.dragSources.set(r, o) : e === Pe.TARGET && this.dropTargets.set(r, o), r;
  }
  constructor(e) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = e;
  }
}
const Yg = (t, e) => t === e;
function Xg(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function Qg(t, e, n = Yg) {
  if (t.length !== e.length)
    return !1;
  for (let o = 0; o < t.length; ++o)
    if (!n(t[o], e[o]))
      return !1;
  return !0;
}
function Zg(t = lo, e) {
  switch (e.type) {
    case Pr:
      break;
    case ns:
    case os:
    case Fr:
    case rs:
      return lo;
    case Rr:
    case es:
    case Mr:
    case Ar:
    default:
      return ts;
  }
  const { targetIds: n = [], prevTargetIds: o = [] } = e.payload, r = og(n, o);
  if (!(r.length > 0 || !Qg(n, o)))
    return lo;
  const a = o[o.length - 1], s = n[n.length - 1];
  return a !== s && (a && r.push(a), s && r.push(s)), r;
}
function ey(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function ty(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ey(t, r, n[r]);
    });
  }
  return t;
}
const Ll = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function ny(t = Ll, e) {
  const { payload: n } = e;
  switch (e.type) {
    case Za:
    case Rr:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Pr:
      return Xg(t.clientOffset, n.clientOffset) ? t : ty({}, t, {
        clientOffset: n.clientOffset
      });
    case Mr:
    case Ar:
      return Ll;
    default:
      return t;
  }
}
function oy(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function sn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      oy(t, r, n[r]);
    });
  }
  return t;
}
const ry = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function iy(t = ry, e) {
  const { payload: n } = e;
  switch (e.type) {
    case Rr:
      return sn({}, t, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case es:
      return sn({}, t, {
        isSourcePublic: !0
      });
    case Pr:
      return sn({}, t, {
        targetIds: n.targetIds
      });
    case Fr:
      return t.targetIds.indexOf(n.targetId) === -1 ? t : sn({}, t, {
        targetIds: ng(t.targetIds, n.targetId)
      });
    case Ar:
      return sn({}, t, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Mr:
      return sn({}, t, {
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
function ay(t = 0, e) {
  switch (e.type) {
    case ns:
    case os:
      return t + 1;
    case rs:
    case Fr:
      return t - 1;
    default:
      return t;
  }
}
function sy(t = 0) {
  return t + 1;
}
function ly(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function uy(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ly(t, r, n[r]);
    });
  }
  return t;
}
function cy(t = {}, e) {
  return {
    dirtyHandlerIds: Zg(t.dirtyHandlerIds, {
      type: e.type,
      payload: uy({}, e.payload, {
        prevTargetIds: tg(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: ny(t.dragOffset, e),
    refCount: ay(t.refCount, e),
    dragOperation: iy(t.dragOperation, e),
    stateId: sy(t.stateId)
  };
}
function dy(t, e = void 0, n = {}, o = !1) {
  const r = py(o), i = new zg(r, new Jg(r)), a = new $g(r, i), s = t(a, e, n);
  return a.receiveBackend(s), a;
}
function py(t) {
  const e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Vc(cy, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function my(t, e) {
  if (t == null)
    return {};
  var n = fy(t, e), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      o = i[r], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
function fy(t, e) {
  if (t == null)
    return {};
  var n = {}, o = Object.keys(t), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
let ql = 0;
const rr = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var hy = /* @__PURE__ */ x.memo(function(e) {
  var { children: n } = e, o = my(e, [
    "children"
  ]);
  const [r, i] = gy(o);
  return x.useEffect(() => {
    if (i) {
      const a = Xc();
      return ++ql, () => {
        --ql === 0 && (a[rr] = null);
      };
    }
  }, []), /* @__PURE__ */ l.jsx(Uc.Provider, {
    value: r,
    children: n
  });
});
function gy(t) {
  if ("manager" in t)
    return [
      {
        dragDropManager: t.manager
      },
      !1
    ];
  const e = yy(t.backend, t.context, t.options, t.debugMode), n = !t.context;
  return [
    e,
    n
  ];
}
function yy(t, e = Xc(), n, o) {
  const r = e;
  return r[rr] || (r[rr] = {
    dragDropManager: dy(t, e, n, o)
  }), r[rr];
}
function Xc() {
  return typeof global < "u" ? global : window;
}
var vy = function t(e, n) {
  if (e === n)
    return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor)
      return !1;
    var o, r, i;
    if (Array.isArray(e)) {
      if (o = e.length, o != n.length)
        return !1;
      for (r = o; r-- !== 0; )
        if (!t(e[r], n[r]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === n.source && e.flags === n.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === n.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === n.toString();
    if (i = Object.keys(e), o = i.length, o !== Object.keys(n).length)
      return !1;
    for (r = o; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, i[r]))
        return !1;
    for (r = o; r-- !== 0; ) {
      var a = i[r];
      if (!t(e[a], n[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
};
const ky = /* @__PURE__ */ wc(vy), Gt = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function by(t, e, n) {
  const [o, r] = x.useState(
    () => e(t)
  ), i = x.useCallback(() => {
    const a = e(t);
    ky(o, a) || (r(a), n && n());
  }, [
    o,
    t,
    n
  ]);
  return Gt(i), [
    o,
    i
  ];
}
function jy(t, e, n) {
  const [o, r] = by(t, e, n);
  return Gt(function() {
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
function Qc(t, e, n) {
  return jy(
    e,
    t || (() => ({})),
    () => n.reconnect()
  );
}
function Zc(t, e) {
  const n = [
    ...e || []
  ];
  return e == null && typeof t != "function" && n.push(t), x.useMemo(() => typeof t == "function" ? t() : t, n);
}
function xy(t) {
  return x.useMemo(
    () => t.hooks.dragSource(),
    [
      t
    ]
  );
}
function wy(t) {
  return x.useMemo(
    () => t.hooks.dragPreview(),
    [
      t
    ]
  );
}
let Ci = !1, $i = !1;
class _y {
  receiveHandlerId(e) {
    this.sourceId = e;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    P(!Ci, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Ci = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      Ci = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    P(!$i, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return $i = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      $i = !1;
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
let Ti = !1;
class Sy {
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
    P(!Ti, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return Ti = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Ti = !1;
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
function Cy(t, e, n) {
  const o = n.getRegistry(), r = o.addTarget(t, e);
  return [
    r,
    () => o.removeTarget(r)
  ];
}
function $y(t, e, n) {
  const o = n.getRegistry(), r = o.addSource(t, e);
  return [
    r,
    () => o.removeSource(r)
  ];
}
function Zi(t, e, n, o) {
  let r = n ? n.call(o, t, e) : void 0;
  if (r !== void 0)
    return !!r;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  const i = Object.keys(t), a = Object.keys(e);
  if (i.length !== a.length)
    return !1;
  const s = Object.prototype.hasOwnProperty.bind(e);
  for (let u = 0; u < i.length; u++) {
    const c = i[u];
    if (!s(c))
      return !1;
    const d = t[c], p = e[c];
    if (r = n ? n.call(o, d, p, c) : void 0, r === !1 || r === void 0 && d !== p)
      return !1;
  }
  return !0;
}
function ea(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function Ty(t) {
  if (typeof t.type == "string")
    return;
  const e = t.type.displayName || t.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${e} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function Ey(t) {
  return (e = null, n = null) => {
    if (!x.isValidElement(e)) {
      const i = e;
      return t(i, n), i;
    }
    const o = e;
    return Ty(o), Oy(o, n ? (i) => t(i, n) : t);
  };
}
function ed(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const o = t[n];
    if (n.endsWith("Ref"))
      e[n] = t[n];
    else {
      const r = Ey(o);
      e[n] = () => r;
    }
  }), e;
}
function Bl(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function Oy(t, e) {
  const n = t.ref;
  return P(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? x.cloneElement(t, {
    ref: (o) => {
      Bl(n, o), Bl(e, o);
    }
  }) : x.cloneElement(t, {
    ref: e
  });
}
class Dy {
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
    return !Zi(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !Zi(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
    this.hooks = ed({
      dragSource: (n, o) => {
        this.clearDragSource(), this.dragSourceOptions = o || null, ea(n) ? this.dragSourceRef = n : this.dragSourceNode = n, this.reconnectDragSource();
      },
      dragPreview: (n, o) => {
        this.clearDragPreview(), this.dragPreviewOptions = o || null, ea(n) ? this.dragPreviewRef = n : this.dragPreviewNode = n, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = e;
  }
}
class zy {
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
    return !Zi(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
    this.hooks = ed({
      dropTarget: (n, o) => {
        this.clearDropTarget(), this.dropTargetOptions = o, ea(n) ? this.dropTargetRef = n : this.dropTargetNode = n, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = e;
  }
}
function Fn() {
  const { dragDropManager: t } = x.useContext(Uc);
  return P(t != null, "Expected drag drop context"), t;
}
function Iy(t, e) {
  const n = Fn(), o = x.useMemo(
    () => new Dy(n.getBackend()),
    [
      n
    ]
  );
  return Gt(() => (o.dragSourceOptions = t || null, o.reconnect(), () => o.disconnectDragSource()), [
    o,
    t
  ]), Gt(() => (o.dragPreviewOptions = e || null, o.reconnect(), () => o.disconnectDragPreview()), [
    o,
    e
  ]), o;
}
function Ny() {
  const t = Fn();
  return x.useMemo(
    () => new _y(t),
    [
      t
    ]
  );
}
class Ry {
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
function Py(t, e, n) {
  const o = x.useMemo(
    () => new Ry(t, e, n),
    [
      e,
      n
    ]
  );
  return x.useEffect(() => {
    o.spec = t;
  }, [
    t
  ]), o;
}
function Ay(t) {
  return x.useMemo(() => {
    const e = t.type;
    return P(e != null, "spec.type must be defined"), e;
  }, [
    t
  ]);
}
function My(t, e, n) {
  const o = Fn(), r = Py(t, e, n), i = Ay(t);
  Gt(function() {
    if (i != null) {
      const [s, u] = $y(i, r, o);
      return e.receiveHandlerId(s), n.receiveHandlerId(s), u;
    }
  }, [
    o,
    e,
    n,
    r,
    i
  ]);
}
function Fy(t, e) {
  const n = Zc(t, e);
  P(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const o = Ny(), r = Iy(n.options, n.previewOptions);
  return My(n, o, r), [
    Qc(n.collect, o, r),
    xy(r),
    wy(r)
  ];
}
function Ly(t) {
  return x.useMemo(
    () => t.hooks.dropTarget(),
    [
      t
    ]
  );
}
function qy(t) {
  const e = Fn(), n = x.useMemo(
    () => new zy(e.getBackend()),
    [
      e
    ]
  );
  return Gt(() => (n.dropTargetOptions = t || null, n.reconnect(), () => n.disconnectDropTarget()), [
    t
  ]), n;
}
function By() {
  const t = Fn();
  return x.useMemo(
    () => new Sy(t),
    [
      t
    ]
  );
}
function Hy(t) {
  const { accept: e } = t;
  return x.useMemo(() => (P(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [
    e
  ]), [
    e
  ]);
}
class Uy {
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
function Vy(t, e) {
  const n = x.useMemo(
    () => new Uy(t, e),
    [
      e
    ]
  );
  return x.useEffect(() => {
    n.spec = t;
  }, [
    t
  ]), n;
}
function Wy(t, e, n) {
  const o = Fn(), r = Vy(t, e), i = Hy(t);
  Gt(function() {
    const [s, u] = Cy(i, r, o);
    return e.receiveHandlerId(s), n.receiveHandlerId(s), u;
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
function td(t, e) {
  const n = Zc(t, e), o = By(), r = qy(n.options);
  return Wy(n, o, r), [
    Qc(n.collect, o, r),
    Ly(r)
  ];
}
function nd(t) {
  let e = null;
  return () => (e == null && (e = t()), e);
}
function Ky(t, e) {
  return t.filter(
    (n) => n !== e
  );
}
function Gy(t, e) {
  const n = /* @__PURE__ */ new Set(), o = (i) => n.add(i);
  t.forEach(o), e.forEach(o);
  const r = [];
  return n.forEach(
    (i) => r.push(i)
  ), r;
}
class Jy {
  enter(e) {
    const n = this.entered.length, o = (r) => this.isNodeInDocument(r) && (!r.contains || r.contains(e));
    return this.entered = Gy(this.entered.filter(o), [
      e
    ]), n === 0 && this.entered.length > 0;
  }
  leave(e) {
    const n = this.entered.length;
    return this.entered = Ky(this.entered.filter(this.isNodeInDocument), e), n > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(e) {
    this.entered = [], this.isNodeInDocument = e;
  }
}
class Yy {
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
const od = "__NATIVE_FILE__", rd = "__NATIVE_URL__", id = "__NATIVE_TEXT__", ad = "__NATIVE_HTML__", Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: od,
  HTML: ad,
  TEXT: id,
  URL: rd
}, Symbol.toStringTag, { value: "Module" }));
function Ei(t, e, n) {
  const o = e.reduce(
    (r, i) => r || t.getData(i),
    ""
  );
  return o ?? n;
}
const ta = {
  [od]: {
    exposeProperties: {
      files: (t) => Array.prototype.slice.call(t.files),
      items: (t) => t.items,
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Files"
    ]
  },
  [ad]: {
    exposeProperties: {
      html: (t, e) => Ei(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [rd]: {
    exposeProperties: {
      urls: (t, e) => Ei(t, e, "").split(`
`),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [id]: {
    exposeProperties: {
      text: (t, e) => Ei(t, e, ""),
      dataTransfer: (t) => t
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function Xy(t, e) {
  const n = ta[t];
  if (!n)
    throw new Error(`native type ${t} has no configuration`);
  const o = new Yy(n);
  return o.loadDataTransfer(e), o;
}
function Oi(t) {
  if (!t)
    return null;
  const e = Array.prototype.slice.call(t.types || []);
  return Object.keys(ta).filter((n) => {
    const o = ta[n];
    return o != null && o.matchesTypes ? o.matchesTypes.some(
      (r) => e.indexOf(r) > -1
    ) : !1;
  })[0] || null;
}
const Qy = nd(
  () => /firefox/i.test(navigator.userAgent)
), sd = nd(
  () => !!window.safari
);
class Ul {
  interpolate(e) {
    const { xs: n, ys: o, c1s: r, c2s: i, c3s: a } = this;
    let s = n.length - 1;
    if (e === n[s])
      return o[s];
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
    s = Math.max(0, c);
    const p = e - n[s], f = p * p;
    return o[s] + r[s] * p + i[s] * f + a[s] * p * f;
  }
  constructor(e, n) {
    const { length: o } = e, r = [];
    for (let m = 0; m < o; m++)
      r.push(m);
    r.sort(
      (m, y) => e[m] < e[y] ? -1 : 1
    );
    const i = [], a = [];
    let s, u;
    for (let m = 0; m < o - 1; m++)
      s = e[m + 1] - e[m], u = n[m + 1] - n[m], i.push(s), a.push(u / s);
    const c = [
      a[0]
    ];
    for (let m = 0; m < i.length - 1; m++) {
      const y = a[m], g = a[m + 1];
      if (y * g <= 0)
        c.push(0);
      else {
        s = i[m];
        const k = i[m + 1], b = s + k;
        c.push(3 * b / ((b + k) / y + (b + s) / g));
      }
    }
    c.push(a[a.length - 1]);
    const d = [], p = [];
    let f;
    for (let m = 0; m < c.length - 1; m++) {
      f = a[m];
      const y = c[m], g = 1 / i[m], k = y + c[m + 1] - f - f;
      d.push((f - y - k) * g), p.push(k * g * g);
    }
    this.xs = e, this.ys = n, this.c1s = c, this.c2s = d, this.c3s = p;
  }
}
const Zy = 1;
function ld(t) {
  const e = t.nodeType === Zy ? t : t.parentElement;
  if (!e)
    return null;
  const { top: n, left: o } = e.getBoundingClientRect();
  return {
    x: o,
    y: n
  };
}
function Xo(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function ev(t) {
  var e;
  return t.nodeName === "IMG" && (Qy() || !(!((e = document.documentElement) === null || e === void 0) && e.contains(t)));
}
function tv(t, e, n, o) {
  let r = t ? e.width : n, i = t ? e.height : o;
  return sd() && t && (i /= window.devicePixelRatio, r /= window.devicePixelRatio), {
    dragPreviewWidth: r,
    dragPreviewHeight: i
  };
}
function nv(t, e, n, o, r) {
  const i = ev(e), s = ld(i ? t : e), u = {
    x: n.x - s.x,
    y: n.y - s.y
  }, { offsetWidth: c, offsetHeight: d } = t, { anchorX: p, anchorY: f } = o, { dragPreviewWidth: m, dragPreviewHeight: y } = tv(i, e, c, d), g = () => {
    let N = new Ul([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / d * y,
      // Dock to the bottom
      u.y + y - d
    ]).interpolate(f);
    return sd() && i && (N += (window.devicePixelRatio - 1) * y), N;
  }, k = () => new Ul([
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
  ]).interpolate(p), { offsetX: b, offsetY: _ } = r, j = b === 0 || b, C = _ === 0 || _;
  return {
    x: j ? b : k(),
    y: C ? _ : g()
  };
}
class ov {
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
function rv(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Vl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      rv(t, r, n[r]);
    });
  }
  return t;
}
class iv {
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
    return Vl({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, n || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const e = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(e);
    return Vl({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, n || {});
  }
  isDraggingNativeItem() {
    const e = this.monitor.getItemType();
    return Object.keys(Hl).some(
      (n) => Hl[n] === e
    );
  }
  beginDragNativeItem(e, n) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = Xy(e, n), this.currentNativeHandle = this.registry.addSource(e, this.currentNativeSource), this.actions.beginDrag([
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
      return i && ld(i) || null;
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
      const a = Xo(r);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(i || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: a
      });
      const { dataTransfer: s } = r, u = Oi(s);
      if (this.monitor.isDragging()) {
        if (s && typeof s.setDragImage == "function") {
          const d = this.monitor.getSourceId(), p = this.sourceNodes.get(d), f = this.sourcePreviewNodes.get(d) || p;
          if (f) {
            const { anchorX: m, anchorY: y, offsetX: g, offsetY: k } = this.getCurrentSourcePreviewNodeOptions(), j = nv(p, f, a, {
              anchorX: m,
              anchorY: y
            }, {
              offsetX: g,
              offsetY: k
            });
            s.setDragImage(f, j.x, j.y);
          }
        }
        try {
          s == null || s.setData("application/json", {});
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
        if (s && !s.types && (r.target && !r.target.hasAttribute || !r.target.hasAttribute("draggable")))
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
      const { dataTransfer: s } = r, u = Oi(s);
      u && this.beginDragNativeItem(u, s);
    }, this.handleTopDragEnter = (r) => {
      const { dragEnterTargetIds: i } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = r.altKey, i.length > 0 && this.actions.hover(i, {
        clientOffset: Xo(r)
      }), i.some(
        (s) => this.monitor.canDropOnTarget(s)
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
      this.altKeyPressed = r.altKey, this.lastClientOffset = Xo(r), this.scheduleHover(i), (i || []).some(
        (s) => this.monitor.canDropOnTarget(s)
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
      } else
        Oi(r.dataTransfer) && r.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (r) => {
      const { dropTargetIds: i } = this;
      this.dropTargetIds = [], this.actions.hover(i, {
        clientOffset: Xo(r)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (r) => {
      const i = r.target;
      typeof i.dragDrop == "function" && (i.tagName === "INPUT" || i.tagName === "SELECT" || i.tagName === "TEXTAREA" || i.isContentEditable || (r.preventDefault(), i.dragDrop()));
    }, this.options = new ov(n, o), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new Jy(this.isNodeInDocument);
  }
}
const av = function(e, n, o) {
  return new iv(e, n, o);
}, is = Tt("scanconf/runScan"), ud = Tt("scanconf/runFullScan"), Lr = Tt(
  "scanconf/showScanconfOperation"
), cd = Tt("scanconf/loadUpdatedScanconf"), qr = Tt("scanconf/loadPlaybook"), sv = Tt("http/sendHttpRequest"), lv = Tt("http/showHttpResponse"), uv = Tt("http/showHttpError"), cv = {
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
}, dd = Xt({
  name: "scanconf",
  initialState: cv,
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
      Qo(t.playbook, e)[e.stageIndex] = n;
    },
    addStage: (t, {
      payload: { container: e, stage: n }
    }) => {
      Qo(t.playbook, e).push(n);
    },
    moveStage: (t, {
      payload: { location: e, to: n }
    }) => {
      mv(Qo(t.playbook, e), e.stageIndex, n);
    },
    removeStage: (t, { payload: e }) => {
      Qo(t.playbook, e).splice(e.stageIndex, 1);
    },
    updateOperationAuthorizationTests: (t, {
      payload: { operationId: e, authorizationTests: n }
    }) => {
      t.playbook.operations[e].authorizationTests = n;
    },
    customizeOperation: (t, { payload: e }) => {
      t.playbook.operations[e].customized = !0;
    }
  },
  extraReducers: (t) => {
    t.addCase(qr, (e, { payload: { oas: n, playbook: o } }) => {
      var r, i, a, s, u;
      e.oas = n, e.playbook = o, e.servers = $c(n), e.selectedCredentialGroup = 0, e.selectedCredential = (i = Object.keys(((r = o == null ? void 0 : o.authenticationDetails) == null ? void 0 : r[0]) || {})) == null ? void 0 : i[0], e.selectedCredential !== void 0 && (e.selectedSubcredential = (s = Object.keys(
        (a = o == null ? void 0 : o.authenticationDetails[0][e.selectedCredential]) == null ? void 0 : a.methods
      )) == null ? void 0 : s[0]), e.selectedAuthorizationTest = (u = Object.keys((o == null ? void 0 : o.authorizationTests) || {})) == null ? void 0 : u[0];
    });
  }
});
function Qo(t, e) {
  return e.container === "operationScenarios" ? t.operations[e.operationId].scenarios[e.scenarioIndex].requests : e.container === "operationBefore" ? t.operations[e.operationId].before : e.container === "operationAfter" ? t.operations[e.operationId].after : e.container === "globalBefore" ? t.before : e.container === "globalAfter" ? t.after : e.container === "credential" ? t.authenticationDetails[e.group][e.credentialId].methods[e.subCredentialId].requests : null;
}
const {
  saveSettings: pd,
  saveEnvironment: md,
  saveScanconf: G2,
  addCredential: as,
  removeCredential: ss,
  addStage: Ot,
  moveStage: Dt,
  removeStage: zt,
  saveOperationReference: It,
  saveCredential: ls,
  selectCredential: dr,
  selectSubcredential: pr,
  addAuthorizationTest: fd,
  saveAuthorizationTest: hd,
  removeAuthorizationTest: gd,
  selectAuthorizationTest: Wl,
  saveRequest: Lo,
  removeRequest: yd,
  updateOperationAuthorizationTests: na,
  customizeOperation: dv
} = dd.actions, pv = dd.reducer;
function mv(t, e, n) {
  const o = e < 0 ? t.length + e : e;
  if (o >= 0 && o < t.length) {
    const r = n < 0 ? t.length + n : n, [i] = t.splice(e, 1);
    t.splice(r, 0, i);
  }
}
const fv = {}, vd = Xt({
  name: "generalError",
  initialState: fv,
  reducers: {
    showGeneralError: (t, e) => {
      t.error = e.payload;
    }
  }
}), hv = _c, { showGeneralError: at } = vd.actions, gv = vd.reducer;
function Br(t, e) {
  if (t.auth.length === 0)
    return e;
  const [n, ...o] = t.auth, r = Cn(e), i = Cn(r.results);
  return Br({ auth: o }, i.auth[n].execution);
}
function Ht(t, e) {
  return Cn(Br(t, e));
}
function ot(t, e) {
  return Cn(Ht(t, e).results);
}
function Kl(t, e) {
  const n = t.auth.slice(0, -1);
  return Cn(Cn(Br({ auth: n }, e)).results);
}
const kd = {
  "playbook-started": function(t, e, n) {
    Br(t, e).push({
      name: n.name,
      status: "pending",
      results: []
    });
  },
  "request-started": function(t, e, n) {
    Ht(t, e).results.push({
      ref: n.ref,
      auth: {},
      variablesAssigned: [],
      status: "pending"
    });
  },
  "auth-started": function(t, e, n) {
    ot(t, e).auth[n.name] = {
      execution: []
    }, t.auth.push(n.name);
  },
  "auth-finished": function(t, e, n) {
    t.auth.pop();
  },
  "auth-aborted": function(t, e, n) {
    const o = t.auth.pop();
    ot(t, e).auth[o].error = n.error;
  },
  "playbook-finished": function(t, e, n) {
    Ht(t, e).status = "success";
  },
  "playbook-aborted": function(t, e, n) {
    const o = Ht(t, e);
    o.status = "failure", o.error = n.error;
  },
  "payload-variables-substituted": function(t, e, n) {
    ot(t, e).variablesReplaced = {
      stack: n.stack,
      found: n.found,
      missing: n.missing
    };
  },
  "credential-variables-substituted": function(t, e, n) {
    const o = Kl(t, e);
    o.auth[n.name].result = n.result, o.auth[n.name].variables = {
      missing: n.missing,
      found: n.found,
      stack: n.stack
    };
  },
  "credential-retrieved-from-cache": function(t, e, n) {
    const o = Kl(t, e);
    o.auth[n.name].result = n.result;
  },
  "http-request-prepared": function(t, e, n) {
    const o = ot(t, e);
    o.httpRequest = n.request, o.operationId = n.operationId;
  },
  "http-request-prepare-error": function(t, e, n) {
    const o = ot(t, e);
    o.httpRequestPrepareError = n.error, o.status = "failure", Ht(t, e).status = "failure";
  },
  "http-response-received": function(t, e, n) {
    const o = ot(t, e);
    o.httpResponse = n.response, o.status = "success";
  },
  "http-error-received": function(t, e, n) {
    const o = ot(t, e);
    o.httpError = n.error, o.status = "failure", Ht(t, e).status = "failure";
  },
  "variables-assigned": function(t, e, n) {
    ot(t, e).variablesAssigned.push(...n.assignments);
  },
  "response-processing-error": function(t, e, n) {
    const o = ot(t, e);
    o.responseProcessingError = n.error, o.status = "failure", Ht(t, e).status = "failure";
  }
};
function Hr({
  tryCurrent: t,
  tryResult: e
}, n) {
  kd[n.event](t, e, n);
}
function Ur({
  mockCurrent: t,
  mockResult: e
}, n) {
  kd[n.event](t, e, n);
}
function Cn(t) {
  return t[t.length - 1];
}
function no(t, e) {
  return t.filter((n) => n.name === e).pop();
}
const yv = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: []
}, bd = Xt({
  name: "auth",
  initialState: yv,
  reducers: {
    startTryAuthentication: (t, { payload: e }) => {
    },
    resetTryAuthentication: (t) => {
      t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    addTryAuthenticationStep: (t, { payload: e }) => {
      Hr(t, e);
    },
    resetMockAuthRequestsExecution: (t) => {
      t.mockCurrent = { auth: [] }, t.mockResult = [];
    },
    addMockAuthRequestsExecutionStep: (t, { payload: e }) => {
      Ur(t, e);
    }
  },
  extraReducers: (t) => {
    t.addMatcher(
      Nn(
        dr,
        pr,
        ls,
        as,
        ss
      ),
      (e, n) => {
        e.tryCurrent = { auth: [] }, e.tryResult = [];
      }
    );
  }
}), {
  startTryAuthentication: jd,
  resetTryAuthentication: vv,
  addTryAuthenticationStep: Di,
  resetMockAuthRequestsExecution: Gl,
  addMockAuthRequestsExecutionStep: kv
} = bd.actions, bv = bd.reducer, jv = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  selected: "before"
}, xd = Xt({
  name: "global",
  initialState: jv,
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
      Hr(t, e);
    },
    resetMockGlobal: (t) => {
      t.mockCurrent = { auth: [] }, t.mockResult = [];
    },
    addMockGlobalStep: (t, { payload: e }) => {
      Ur(t, e);
    }
  }
}), {
  selectGlobal: wd,
  startTryGlobal: oa,
  resetTryGlobal: xv,
  addTryGlobalStep: wv,
  resetMockGlobal: Jl,
  addMockGlobalStep: _v
} = xd.actions, Sv = xd.reducer, Cv = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  scenarioId: 0
}, _d = Xt({
  name: "operations",
  initialState: Cv,
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
      Ur(t, e);
    },
    startTryExecution: (t, { payload: e }) => {
    },
    resetTryExecution: (t) => {
      t.tryCurrent = { auth: [] }, t.tryResult = [];
    },
    addTryExecutionStep: (t, { payload: e }) => {
      Hr(t, e);
    }
  },
  extraReducers: (t) => {
    t.addCase(Lr, (e, { payload: { oas: n, path: o, method: r } }) => {
      e.operationId = void 0;
    });
  }
}), {
  setOperationId: Sd,
  setScenarioId: Cd,
  resetMockOperationExecution: Yl,
  startTryExecution: $d,
  addMockOperationExecutionStep: $v,
  resetTryExecution: Tv,
  addTryExecutionStep: Ev
} = _d.actions, Ov = _d.reducer, Dv = {
  tryCurrent: { auth: [] },
  tryResult: [],
  mockCurrent: { auth: [] },
  mockResult: [],
  mockMissingVariables: []
}, Td = Xt({
  name: "requests",
  initialState: Dv,
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
      Hr(t, e);
    },
    resetMockRequestExecution: (t) => {
      t.mockCurrent = { auth: [] }, t.mockResult = [], t.mockMissingVariables = [];
    },
    addMockRequestExecutionStep: (t, { payload: e }) => {
      Ur(t, e), (e.event === "payload-variables-substituted" || e.event === "credential-variables-substituted") && t.mockMissingVariables.push(...e.missing.map((n) => n.name));
    }
  },
  extraReducers: (t) => {
    t.addCase(Lr, (e, { payload: { oas: n, path: o, method: r } }) => {
      const i = Ua(n, o, r), a = (i == null ? void 0 : i.operationId) === void 0 ? Jf(o, r) : i.operationId;
      e.ref = { id: a, type: "operation" };
    });
  }
}), {
  setRequestId: Vt,
  resetExecuteRequest: zv,
  addExecutionStep: Iv,
  executeRequest: us,
  resetMockRequestExecution: Xl,
  addMockRequestExecutionStep: Nv
} = Td.actions, Rv = Td.reducer, Pv = {
  changes: [],
  scanconf: "",
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: { "/": { get: { responses: {} } } }
  },
  updating: !1
}, Ed = Xt({
  name: "scanconfUpdate",
  initialState: Pv,
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
}), { updateScanconf: Od, showChanges: Av, skipScanconfUpdate: Dd } = Ed.actions, Mv = Ed.reducer, Fv = {
  theme: Mf,
  scanconf: pv,
  scanconfUpdate: Mv,
  operations: Ov,
  requests: Rv,
  auth: bv,
  router: Ff,
  env: Xf,
  prefs: lh,
  config: ih,
  global: Sv,
  generalError: gv
}, Lv = {
  changeTheme: Rf,
  showHttpError: uv,
  showHttpResponse: lv,
  showScanconfOperation: Lr,
  loadUpdatedScanconf: cd,
  loadEnv: Yf,
  loadConfig: rh,
  loadPrefs: sh,
  showGeneralError: at
}, qv = (t, e) => Nf({
  reducer: Fv,
  middleware: (n) => n().prepend(t.middleware).concat(Af),
  preloadedState: {
    theme: e
  }
}), me = () => Pf(), F = _c;
function xe({ isOpen: t, setOpen: e, ...n }) {
  return e !== void 0 && t !== void 0 ? zd({ ...n, isOpen: t, setOpen: e }) : Bv({ ...n });
}
function Bv({
  defaultOpen: t,
  ...e
}) {
  const [n, o] = x.useState(t !== void 0 ? t : !0);
  return zd({ ...e, isOpen: n, setOpen: o });
}
function zd({
  isOpen: t,
  setOpen: e,
  title: n,
  count: o,
  menu: r,
  children: i
}) {
  return /* @__PURE__ */ l.jsxs(Hv, { children: [
    /* @__PURE__ */ l.jsxs(
      Uv,
      {
        onClick: (a) => {
          a.preventDefault(), a.stopPropagation(), e(!t);
        },
        children: [
          t ? /* @__PURE__ */ l.jsx(Th, {}) : /* @__PURE__ */ l.jsx(Ro, {}),
          /* @__PURE__ */ l.jsxs(Vv, { children: [
            typeof n == "string" ? /* @__PURE__ */ l.jsx(Wv, { children: n }) : n,
            !!o && /* @__PURE__ */ l.jsx(Yv, { children: o }),
            r && /* @__PURE__ */ l.jsx(Kv, { children: r })
          ] })
        ]
      }
    ),
    t && /* @__PURE__ */ l.jsxs(Gv, { children: [
      /* @__PURE__ */ l.jsx(Jv, {}),
      /* @__PURE__ */ l.jsx("div", { children: i })
    ] })
  ] });
}
const Hv = v.div`
  margin-top: 8px;
  margin-bottom: 8px;
`, Uv = v.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  margin-bottom: 8px;
  & > svg {
    fill: var(${h.foreground});
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
`, Vv = v.div`
  flex: 1;
  display: flex;
  gap: 8px;
`, Wv = v.div`
  font-size: 14px;
  font-weight: 600;
`, Kv = v.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, Gv = v.div`
  display: flex;
  flex-direction: row;
  > div:last-child {
    flex: 1;
    margin-left: 8px;
  }
`, Jv = v.div`
  width: 2px;
  background-color: var(${h.border});
  margin: 0px 6px;
`, Yv = v.span`
  background-color: var(${h.badgeBackground});
  color: var(${h.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`;
function Xv({ title: t, icon: e }) {
  return /* @__PURE__ */ l.jsxs(Qv, { children: [
    e,
    /* @__PURE__ */ l.jsx("div", { children: t }),
    /* @__PURE__ */ l.jsx("hr", {})
  ] });
}
const Qv = v.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  opacity: 0.8;
  font-size: 90%;

  & > svg {
    fill: var(${h.foreground});
  }

  & > hr {
    flex: 1;
    border: none;
    border-top: 1px solid var(${h.border});
  }
`;
function uo({
  message: t,
  children: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsxs(ek, { ...n, children: [
    /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(lt, {}) }),
      /* @__PURE__ */ l.jsx("span", { children: t })
    ] }),
    e && /* @__PURE__ */ l.jsx("div", { children: e })
  ] });
}
const Zv = v.div`
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
      fill: var(${h.foreground});
    }
  }
  border: 1px solid var(${h.border});
  border-radius: 2px;
  color: var(${h.foreground});
  padding: 8px;
  gap: 8px;
`, ek = v(Zv)`
  border: 1px solid var(${h.errorBorder});
  background-color: var(${h.errorBackground});
  color: var(${h.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${h.errorForeground});
    }
  }
`;
function tk({ body: t }) {
  return /* @__PURE__ */ l.jsx(nk, { children: `${t}` });
}
const nk = v.div`
  padding: 4px 8px;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
`;
function ok({ headers: t }) {
  return /* @__PURE__ */ l.jsxs(rk, { children: [
    /* @__PURE__ */ l.jsxs(ik, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Name" }),
      /* @__PURE__ */ l.jsx("div", { children: "Value" })
    ] }),
    Object.entries(t).map(([e, n], o) => /* @__PURE__ */ l.jsxs(ak, { children: [
      /* @__PURE__ */ l.jsx("div", { children: e }),
      /* @__PURE__ */ l.jsx("div", { children: n })
    ] }, o))
  ] });
}
const rk = v.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`, ik = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ak = v.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function sk({
  operationId: t,
  request: e,
  defaultCollapsed: n
}) {
  return /* @__PURE__ */ l.jsx(lk, { children: /* @__PURE__ */ l.jsxs(Qt, { defaultCollapsed: n, children: [
    /* @__PURE__ */ l.jsxs(Mn, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ l.jsx(
        Lc,
        {
          style: {
            width: 14,
            minWidth: 14,
            height: 14,
            minHeight: 14,
            fill: `var(${h.foreground})`
          }
        }
      ),
      /* @__PURE__ */ l.jsx(uk, { children: e.method }),
      /* @__PURE__ */ l.jsx(ck, { children: e.url })
    ] }),
    /* @__PURE__ */ l.jsx(
      Et,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ l.jsx(Ql, { children: /* @__PURE__ */ l.jsx(tk, { body: e.body }) }),
            disabled: e.body === void 0
          },
          {
            id: "headers",
            title: "Headers",
            content: /* @__PURE__ */ l.jsx(Ql, { children: /* @__PURE__ */ l.jsx(ok, { headers: e.headers }) })
          }
        ]
      }
    )
  ] }) });
}
const lk = v.div`
  > div {
    background-color: var(${h.background});
  }
`, uk = v.div`
  background-color: var(${h.badgeBackground});
  color: var(${h.badgeForeground});
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
`, ck = v.div`
  line-break: anywhere;
`, Ql = v.div`
  padding: 8px;
`;
function dk({
  name: t,
  value: e,
  variables: n,
  hasMissing: o
}) {
  var r, i;
  return /* @__PURE__ */ l.jsxs(Qt, { children: [
    /* @__PURE__ */ l.jsx(Mn, { style: { gap: "8px" }, children: /* @__PURE__ */ l.jsxs(cr, { children: [
      /* @__PURE__ */ l.jsx(Uh, {}),
      "Credential value",
      o && /* @__PURE__ */ l.jsx(Or, { style: { fill: `var(${h.errorForeground})` } }),
      o && /* @__PURE__ */ l.jsxs(pk, { children: [
        "Missing ",
        (i = (r = n == null ? void 0 : n.missing) == null ? void 0 : r.map((a) => `{{${a.name}}}`)) == null ? void 0 : i.join(", ")
      ] })
    ] }) }),
    /* @__PURE__ */ l.jsx(mk, { children: e })
  ] });
}
const pk = v.div`
  color: var(${h.errorForeground});
  border-radius: 4px;
`, mk = v.div`
  font-family: monospace;
  padding: 8px;
  line-break: anywhere;
`;
function fk({
  results: t
}) {
  const e = yk(t);
  return /* @__PURE__ */ l.jsx(hk, { children: /* @__PURE__ */ l.jsxs(Qt, { children: [
    /* @__PURE__ */ l.jsxs(Mn, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ l.jsx(cr, { children: /* @__PURE__ */ l.jsx(Jh, {}) }),
      e.map((n, o) => /* @__PURE__ */ l.jsxs(cr, { children: [
        n.name,
        kk(n)
      ] }, o))
    ] }),
    /* @__PURE__ */ l.jsx(gk, { children: e.map((n, o) => /* @__PURE__ */ l.jsxs(Rn.Fragment, { children: [
      n.execution[0] && /* @__PURE__ */ l.jsx(Rd, { playbook: n.execution[0] }),
      n.value && /* @__PURE__ */ l.jsx(
        dk,
        {
          name: n.name,
          value: n.value,
          variables: n.variables,
          hasMissing: n.hasMissingVariables
        }
      ),
      n.error && /* @__PURE__ */ l.jsx(uo, { message: n.error })
    ] }, o)) })
  ] }) });
}
const hk = v.div`
  > div {
    background-color: var(${h.background});
  }
`, gk = v.div`
  padding: 8px;
  display: flex;
  flex-flow column;
  gap: 8px;
`;
function yk(t) {
  return Object.entries(t).map(([e, n]) => {
    var r, i;
    const o = (i = (r = n == null ? void 0 : n.variables) == null ? void 0 : r.missing) == null ? void 0 : i.length;
    return {
      name: e,
      value: n.result,
      error: n.error,
      execution: n.execution,
      status: vk(n),
      hasMissingVariables: o !== void 0 && o > 0,
      variables: n.variables
    };
  });
}
function vk(t) {
  var n;
  return t.error !== void 0 ? "failure" : ((n = t.execution) == null ? void 0 : n.some((o) => o.status === "pending")) ? "pending" : t.result !== void 0 ? "success" : "failure";
}
function kk({
  status: t,
  hasMissingVariables: e
}) {
  return t === "failure" || e ? /* @__PURE__ */ l.jsx(Or, { style: { fill: `var(${h.errorForeground})` } }) : t === "pending" ? /* @__PURE__ */ l.jsx(jk, {}) : /* @__PURE__ */ l.jsx(qc, {});
}
const bk = Sc`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, jk = v(Rc)`
  animation: ${bk} 2s infinite linear;
  transition: width 0.2s linear;
`;
function cs({
  value: t,
  trailingComma: e = !1
}) {
  return typeof t == "object" ? Array.isArray(t) ? /* @__PURE__ */ l.jsx(wk, { array: t, trailingComma: e }) : /* @__PURE__ */ l.jsx(xk, { object: t, trailingComma: e }) : /* @__PURE__ */ l.jsx(_k, { value: t, trailingComma: e });
}
function xk({
  object: t,
  trailingComma: e
}) {
  if (t === null)
    return /* @__PURE__ */ l.jsx("code", { children: "null" });
  const n = Object.entries(t);
  return n.length === 0 ? /* @__PURE__ */ l.jsx("code", { children: e ? "{}," : "{}" }) : /* @__PURE__ */ l.jsxs(Id, { children: [
    /* @__PURE__ */ l.jsx("code", { children: "{" }),
    /* @__PURE__ */ l.jsx("div", { style: { marginLeft: "20px" }, children: n.map(([o, r], i, a) => /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsx("code", { children: `"${o}": ` }),
      /* @__PURE__ */ l.jsx(cs, { value: r, trailingComma: i < a.length - 1 })
    ] }, o)) }),
    /* @__PURE__ */ l.jsx("code", { children: e ? "}," : "}" })
  ] });
}
function wk({ array: t, trailingComma: e }) {
  return /* @__PURE__ */ l.jsxs(Id, { children: [
    /* @__PURE__ */ l.jsx("code", { children: "[" }),
    /* @__PURE__ */ l.jsx("div", { style: { marginLeft: "20px" }, children: t.map((n, o) => /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(cs, { value: n, trailingComma: o < t.length - 1 }) }, o)) }),
    /* @__PURE__ */ l.jsx("code", { children: e ? "]," : "]" })
  ] });
}
function _k({ value: t, trailingComma: e }) {
  const n = JSON.stringify(t);
  return /* @__PURE__ */ l.jsx("code", { children: e ? `${n},` : `${n}` });
}
const Id = v.div`
  code {
    color: var(${h.foreground});
    background-color: var(${h.background});
    border: none;
    padding: none;
  }
`;
function Sk({ response: t }) {
  const e = Tk(t);
  return /* @__PURE__ */ l.jsx(Ck, { children: e });
}
const Ck = v.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  padding: 8px;
`;
function $k(t) {
  for (const [e, n] of t.headers)
    if (e.toLowerCase() === "content-type" && n.includes("json"))
      return !0;
  return !1;
}
function Tk(t) {
  if (t.body === void 0 || t.body === "")
    return "";
  if ($k(t))
    try {
      return /* @__PURE__ */ l.jsx(cs, { value: JSON.parse(t.body) });
    } catch {
      return t.body;
    }
  else
    return t.body;
}
function Ek({ headers: t }) {
  return /* @__PURE__ */ l.jsxs(Ok, { children: [
    /* @__PURE__ */ l.jsxs(Dk, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Name" }),
      /* @__PURE__ */ l.jsx("div", { children: "Value" })
    ] }),
    t.map(([e, n], o) => /* @__PURE__ */ l.jsxs(zk, { children: [
      /* @__PURE__ */ l.jsx("div", { children: e }),
      /* @__PURE__ */ l.jsx("div", { children: n })
    ] }, o))
  ] });
}
const Ok = v.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 2fr 5fr;
`, Dk = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, zk = v.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function Ik({ assignment: t }) {
  return /* @__PURE__ */ l.jsxs(Mk, { children: [
    /* @__PURE__ */ l.jsxs(Fk, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Name" }),
      /* @__PURE__ */ l.jsx("div", { children: "Value" }),
      /* @__PURE__ */ l.jsx("div", {})
    ] }),
    /* @__PURE__ */ l.jsx(Lk, { children: t.flatMap((e, n) => Nk(e.id, e.assignments, n)) })
  ] });
}
function Nk(t, e, n) {
  return e.map((o, r) => /* @__PURE__ */ l.jsx(Rn.Fragment, { children: o.error !== void 0 ? Pk(t, o) : Rk(t, o) }, `${n}-${r}`));
}
function Rk(t, e) {
  return /* @__PURE__ */ l.jsxs(Rn.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Nd, { name: e.name, id: t }),
    /* @__PURE__ */ l.jsx("div", { children: `${e.value}` }),
    /* @__PURE__ */ l.jsx("div", {})
  ] });
}
function Pk(t, e) {
  return /* @__PURE__ */ l.jsxs(Rn.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Nd, { name: e.name, id: t }),
    /* @__PURE__ */ l.jsx("div", { children: Ak(e.assignment, e.error) }),
    /* @__PURE__ */ l.jsx(qk, { children: /* @__PURE__ */ l.jsx(lt, {}) })
  ] });
}
function Ak(t, e) {
  return t.in == "body" ? `${t.path.type === "jsonPath" ? "JsonPath" : "JsonPointer"} "${t.path.value}" is ${e} in the ${t.from} ${t.in}` : `Name "${t.name}" is ${e} in the ${t.from} ${t.in}`;
}
function Nd({ name: t, id: e }) {
  return /* @__PURE__ */ l.jsx(Wa, { children: /* @__PURE__ */ l.jsxs(Ka, { children: [
    /* @__PURE__ */ l.jsx(Ga, { asChild: !0, children: /* @__PURE__ */ l.jsx("div", { children: t }) }),
    /* @__PURE__ */ l.jsx(Ja, { children: /* @__PURE__ */ l.jsx(Bk, { children: e }) })
  ] }) });
}
const Mk = v.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 10em 1fr 2em;
  row-gap: 4px;
`, Fk = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Lk = v.div`
  display: contents;
  > div {
    padding-left: 8px;
    padding-right: 8px;
    line-break: anywhere;
  }
`, qk = v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  & > svg {
    fill: var(${h.errorForeground});
    padding-right: 4px;
  }
`, Bk = v(Va)`
  color: var(${h.notificationsForeground});
  background-color: var(${h.notificationsBackground});
  border: 1px solid var(${h.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function Hk({
  response: t,
  variables: e
}) {
  const n = Vk(e);
  return /* @__PURE__ */ l.jsx(Uk, { children: /* @__PURE__ */ l.jsxs(Qt, { children: [
    /* @__PURE__ */ l.jsxs(Mn, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ l.jsx(Lc, { style: { transform: "rotate(180deg)" } }),
      /* @__PURE__ */ l.jsxs(cr, { children: [
        `${t == null ? void 0 : t.statusCode} ${t == null ? void 0 : t.statusMessage}`,
        n && /* @__PURE__ */ l.jsx(
          lt,
          {
            style: { fill: `var(${h.errorForeground})` }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(
      Et,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ l.jsx(Sk, { response: t })
          },
          {
            id: "headers",
            title: "Headers",
            content: /* @__PURE__ */ l.jsx(Ek, { headers: t == null ? void 0 : t.headers })
          },
          {
            id: "variables-assigned",
            title: "Variables",
            content: /* @__PURE__ */ l.jsx(Ik, { assignment: e || [] }),
            counter: Zl(e),
            counterKind: n ? "error" : "normal",
            disabled: e === void 0 || Zl(e) === 0
          }
        ]
      }
    )
  ] }) });
}
const Uk = v.div`
  > div {
    background-color: var(${h.background});
  }
`;
function Zl(t) {
  return t !== void 0 ? t.map((e) => e.assignments.length).reduce((e, n) => e = e + n, 0) : 0;
}
function Vk(t) {
  return !!(t != null && t.map((e) => e.assignments.some((n) => n.error !== void 0)).some((e) => e));
}
function Wk({ operation: t }) {
  return /* @__PURE__ */ l.jsxs(Kk, { children: [
    t.ref && /* @__PURE__ */ l.jsx(
      Xv,
      {
        icon: Gk(t.status),
        title: `${t.ref.type}/${t.ref.id}`
      }
    ),
    Object.keys(t.auth).length > 0 && /* @__PURE__ */ l.jsx(fk, { results: t.auth }),
    t.httpRequestPrepareError !== void 0 && /* @__PURE__ */ l.jsx(uo, { message: "Failed to prepare HTTP request for sending", children: t.httpRequestPrepareError }),
    t.httpRequest !== void 0 && /* @__PURE__ */ l.jsx(sk, { operationId: t.operationId, request: t.httpRequest }),
    t.httpError !== void 0 && /* @__PURE__ */ l.jsx(uo, { message: "HTTP Error", children: t.httpError.message }),
    t.httpResponse !== void 0 && t.httpResponse !== null && /* @__PURE__ */ l.jsx(
      Hk,
      {
        response: t.httpResponse,
        variables: t.variablesAssigned
      }
    ),
    t.responseProcessingError !== void 0 && /* @__PURE__ */ l.jsx(uo, { message: t.responseProcessingError })
  ] });
}
const Kk = v.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
  svg {
    width: 14px;
    height: 14px;
    fill: var(${h.foreground});
  }
`;
function Gk(t) {
  return t === "success" ? /* @__PURE__ */ l.jsx(Vh, {}) : t === "failure" ? /* @__PURE__ */ l.jsx(Bc, { style: { fill: `var(${h.errorForeground})` } }) : /* @__PURE__ */ l.jsx(Yk, {});
}
const Jk = Sc`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, Yk = v(Rc)`
  animation: ${Jk} 2s infinite linear;
  transition: width 0.2s linear;
`;
function Rd({
  playbook: t,
  collapsible: e
}) {
  const [n, o] = x.useState(!1);
  x.useEffect(() => {
    o(
      t.status === "failure" || t.status === "pending" || t.name === "Scenario" || t.name === "Request"
    );
  }, [t.status]);
  const r = t.results.map((i, a) => /* @__PURE__ */ l.jsx(Wk, { operation: i }, a));
  return e ? /* @__PURE__ */ l.jsx(
    xe,
    {
      isOpen: n,
      setOpen: o,
      title: /* @__PURE__ */ l.jsx(Xk, { children: t.name || "" }),
      children: /* @__PURE__ */ l.jsx(eu, { children: r })
    }
  ) : /* @__PURE__ */ l.jsx(eu, { children: r });
}
const eu = v.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`, Xk = v.div`
  opacity: 0.8;
`;
function $n({
  result: t,
  collapsible: e
}) {
  return /* @__PURE__ */ l.jsx(Qk, { children: t.map((n, o) => /* @__PURE__ */ l.jsx(Rd, { playbook: n, collapsible: e }, o)) });
}
const Qk = v.div``;
function Pd(t) {
  const e = pe.simpleClone(t), n = Object.keys(t.methods).map((o) => ({ key: o, value: t.methods[o] }));
  return {
    ...e,
    ttl: tu(e.ttl),
    tti: tu(e.tti),
    methods: n
  };
}
function Ad(t) {
  const e = {};
  for (const { key: n, value: o } of t.methods)
    e[n] = o;
  return {
    ...t,
    ttl: nu(t.ttl),
    tti: nu(t.tti),
    methods: e
  };
}
function tu(t) {
  return t === void 0 ? "" : t;
}
function nu(t) {
  return t === "" ? void 0 : t;
}
function ds({
  description: t,
  icon: e
}) {
  return /* @__PURE__ */ l.jsx(Wa, { children: /* @__PURE__ */ l.jsxs(Ka, { children: [
    /* @__PURE__ */ l.jsx(Ga, { asChild: !0, children: /* @__PURE__ */ l.jsx(Zk, { children: e === "exclamation" ? /* @__PURE__ */ l.jsx(Bc, {}) : /* @__PURE__ */ l.jsx(Wh, {}) }) }),
    /* @__PURE__ */ l.jsx(Ja, { children: /* @__PURE__ */ l.jsx(eb, { children: t }) })
  ] }) });
}
const Zk = v.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(${h.foreground});
  }
`, eb = v(Va)`
  color: var(${h.notificationsForeground});
  background-color: var(${h.notificationsBackground});
  border: 1px solid var(${h.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
  max-width: 500px;
`;
function mn({
  label: t,
  name: e,
  disabled: n,
  password: o,
  description: r
}) {
  const {
    field: i,
    fieldState: { error: a, invalid: s }
  } = Q({
    name: e
  });
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(tb, { children: [
      /* @__PURE__ */ l.jsxs(nb, { invalid: s, children: [
        /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsx("span", { children: t }),
          " ",
          n && /* @__PURE__ */ l.jsx("span", { children: "(read only)" })
        ] }),
        /* @__PURE__ */ l.jsx("input", { ...i, disabled: n, type: o ? "password" : "text" })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: "description", children: r && /* @__PURE__ */ l.jsx(ds, { description: r }) })
    ] }),
    a && /* @__PURE__ */ l.jsx(ob, { children: a == null ? void 0 : a.message })
  ] });
}
const tb = v.div`
  display: flex;
  flow-direction: column;
  > div:first-child {
    flex: 1;
  }
  > div.description {
    width: 0em;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
      fill: var(${h.foreground});
    }
  }
`, nb = v.div`
  height: 40px;
  background-color: var(${h.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: t }) => t ? `border: 1px solid var(${h.errorBorder});` : `border: 1px solid var(${h.border});
         &:focus-within {
           border: 1px solid var(${h.focusBorder});
         }
      `}

  > div {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${h.inputPlaceholderForeground});
  }
  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${h.foreground});
    &::placeholder {
      color: var(${h.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, ob = v.div`
  color: var(${h.errorForeground});
`;
function rb(t) {
  return t ? t.label : "";
}
function ib({
  name: t,
  options: e,
  placeholder: n,
  label: o,
  description: r
}) {
  const { field: i } = Q({
    name: t,
    rules: { required: !0 }
  }), a = sb(e, i.value), s = (u) => {
    i.onChange(u == null ? void 0 : u.value);
  };
  return /* @__PURE__ */ l.jsxs(lb, { children: [
    /* @__PURE__ */ l.jsx(
      ab,
      {
        options: e,
        placeholder: n,
        label: o,
        selected: a == null ? void 0 : a.value,
        onSelectedItemChange: s
      }
    ),
    /* @__PURE__ */ l.jsx("div", { className: "description", children: r && /* @__PURE__ */ l.jsx(ds, { description: r }) })
  ] });
}
function ab({
  options: t,
  placeholder: e,
  label: n,
  selected: o,
  onSelectedItemChange: r
}) {
  var d;
  const i = (d = t.filter((p) => p.value === o)) == null ? void 0 : d[0], { isOpen: a, getToggleButtonProps: s, getMenuProps: u, getItemProps: c } = Dr({
    items: t,
    itemToString: rb,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      r(p);
    }
  });
  return /* @__PURE__ */ l.jsxs(ub, { children: [
    /* @__PURE__ */ l.jsxs(cb, { children: [
      n !== void 0 && /* @__PURE__ */ l.jsx("div", { children: n }),
      /* @__PURE__ */ l.jsxs(db, { ...s(), children: [
        /* @__PURE__ */ l.jsx("span", { children: i ? i.label : e ?? "" }),
        /* @__PURE__ */ l.jsx(Ro, {})
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(pb, { ...u(), isOpen: a, children: a && t.map((p, f) => /* @__PURE__ */ l.jsx("li", { ...c({ item: p, index: f }), children: /* @__PURE__ */ l.jsx("span", { children: p.label }) }, `${p.value}${f}`)) })
  ] });
}
function sb(t, e) {
  var n;
  return (n = t.filter((o) => o.value === e)) == null ? void 0 : n[0];
}
const lb = v.div`
  display: flex;
  flow-direction: column;
  > div:first-child {
    flex: 1;
  }
  > div.description {
    width: 0em;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
      fill: var(${h.foreground});
    }
  }
`, ub = v.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, cb = v.div`
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
`, db = v.div`
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
`, pb = v.ul`
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
  ${({ isOpen: t }) => t && `
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
`, mb = [
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
  "microseconds",
  "nanoseconds"
], ln = (t, e) => `((?<${t}>\\d*[\\.]?\\d+)${e})?`, fb = new RegExp(
  [
    "^",
    "(?<signed>[-+])?",
    ln("hours", "h"),
    ln("minutes", "m"),
    ln("seconds", "s"),
    ln("milliseconds", "ms"),
    ln("microseconds", "us|µs|μs"),
    ln("nanoseconds", "ns"),
    "$"
  ].join("")
), hb = {
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
function ra(t) {
  const e = fb.exec(t);
  if (!e || !e.groups)
    return;
  let n;
  for (const o of mb)
    if (e.groups[o]) {
      const r = hb[o](gb(e.groups[o]));
      n === void 0 ? n = r === void 0 ? void 0 : r : n = r === void 0 ? n : n + r;
    }
  return n;
}
function gb(t) {
  if (t !== void 0)
    return parseFloat(t);
}
function yb({
  credential: t,
  saveCredential: e
}) {
  const n = An({
    type: K(),
    in: K(),
    name: K(),
    ttl: Ol([
      Dl(""),
      K().refine((o) => ra(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    tti: Ol([
      Dl(""),
      K().refine((o) => ra(o) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    default: K(),
    methods: Ch()
  });
  return /* @__PURE__ */ l.jsx(
    Ze,
    {
      data: t,
      saveData: e,
      wrapFormData: Pd,
      unwrapFormData: Ad,
      schema: n,
      children: /* @__PURE__ */ l.jsx(vb, {})
    }
  );
}
function vb() {
  const { getValues: t } = Zt(), e = t("methods") || [], n = t("type");
  return /* @__PURE__ */ l.jsxs(kb, { children: [
    /* @__PURE__ */ l.jsx(mn, { label: "Type", name: "type", disabled: !0 }),
    n !== "basic" && n !== "bearer" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(mn, { label: "Location", name: "in", disabled: !0 }),
      /* @__PURE__ */ l.jsx(mn, { label: "Name", name: "name", disabled: !0 })
    ] }),
    /* @__PURE__ */ l.jsx(
      mn,
      {
        label: "TTL",
        name: "ttl"
      }
    ),
    /* @__PURE__ */ l.jsx(
      mn,
      {
        label: "TTI",
        name: "tti"
      }
    ),
    /* @__PURE__ */ l.jsx(
      ib,
      {
        label: "Default credential value",
        name: "default",
        options: e.map((o) => ({ label: o.key, value: o.key }))
      }
    )
  ] });
}
const kb = v.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function Nt({
  children: t,
  icon: e
}) {
  return /* @__PURE__ */ l.jsxs(hh, { children: [
    /* @__PURE__ */ l.jsx(gh, { asChild: !0, className: "menu", children: /* @__PURE__ */ l.jsx(bb, { children: e === "sliders" ? /* @__PURE__ */ l.jsx(Xh, {}) : /* @__PURE__ */ l.jsx(Kh, {}) }) }),
    /* @__PURE__ */ l.jsx(yh, { children: /* @__PURE__ */ l.jsx(jb, { side: "bottom", align: "end", children: t }) })
  ] });
}
function ou() {
  return /* @__PURE__ */ l.jsx(_b, { children: /* @__PURE__ */ l.jsx(ah, {}) });
}
const bb = v.span`
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
    fill: var(${h.foreground});
  }
`, jb = v(uh)`
  margin: 4px;
  background-color: var(${h.dropdownBackground});
  border: 1px solid var(${h.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${h.computedTwo});
`, tn = v(ch)`
  margin: 2px;
  color: var(${h.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 25px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${h.listActiveSelectionBackground});
    color: var(${h.listActiveSelectionForeground});
  }
  > svg {
    fill: var(${h.foreground});
  }
`, ru = v(dh)`
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
    background-color: var(${h.listActiveSelectionBackground});
    color: var(${h.listActiveSelectionForeground});
  }
`, xb = v(ph)`
  height: 1px;
  background-color: var(${h.border});
  margin: 5px;
`, wb = v(mh)`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
`, _b = v(fh)`
  position: absolute;
  left: 15px;
  width: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > svg {
    fill: var(${h.foreground});
  }
`;
function Md({ name: t }) {
  const { field: e } = Q({
    name: t
  });
  return /* @__PURE__ */ l.jsx(Rh, { value: e.value, onChange: (n) => e.onChange(n) });
}
const Fd = "Dialog", [Ld, J2] = Ph(Fd), [Sb, Ue] = Ld(Fd), Cb = (t) => {
  const { __scopeDialog: e, children: n, open: o, defaultOpen: r, onOpenChange: i, modal: a = !0 } = t, s = x.useRef(null), u = x.useRef(null), [c = !1, d] = Fh({
    prop: o,
    defaultProp: r,
    onChange: i
  });
  return /* @__PURE__ */ x.createElement(Sb, {
    scope: e,
    triggerRef: s,
    contentRef: u,
    contentId: wi(),
    titleId: wi(),
    descriptionId: wi(),
    open: c,
    onOpenChange: d,
    onOpenToggle: x.useCallback(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: a
  }, n);
}, $b = "DialogTrigger", Tb = /* @__PURE__ */ x.forwardRef((t, e) => {
  const { __scopeDialog: n, ...o } = t, r = Ue($b, n), i = Qa(e, r.triggerRef);
  return /* @__PURE__ */ x.createElement(Ao.button, qe({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": ps(r.open)
  }, o, {
    ref: i,
    onClick: so(t.onClick, r.onOpenToggle)
  }));
}), qd = "DialogPortal", [Eb, Bd] = Ld(qd, {
  forceMount: void 0
}), Ob = (t) => {
  const { __scopeDialog: e, forceMount: n, children: o, container: r } = t, i = Ue(qd, e);
  return /* @__PURE__ */ x.createElement(Eb, {
    scope: e,
    forceMount: n
  }, x.Children.map(
    o,
    (a) => /* @__PURE__ */ x.createElement(Xa, {
      present: n || i.open
    }, /* @__PURE__ */ x.createElement(Lh, {
      asChild: !0,
      container: r
    }, a))
  ));
}, ia = "DialogOverlay", Db = /* @__PURE__ */ x.forwardRef((t, e) => {
  const n = Bd(ia, t.__scopeDialog), { forceMount: o = n.forceMount, ...r } = t, i = Ue(ia, t.__scopeDialog);
  return i.modal ? /* @__PURE__ */ x.createElement(Xa, {
    present: o || i.open
  }, /* @__PURE__ */ x.createElement(zb, qe({}, r, {
    ref: e
  }))) : null;
}), zb = /* @__PURE__ */ x.forwardRef((t, e) => {
  const { __scopeDialog: n, ...o } = t, r = Ue(ia, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x.createElement(jh, {
      as: Mh,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ x.createElement(Ao.div, qe({
      "data-state": ps(r.open)
    }, o, {
      ref: e,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), xo = "DialogContent", Ib = /* @__PURE__ */ x.forwardRef((t, e) => {
  const n = Bd(xo, t.__scopeDialog), { forceMount: o = n.forceMount, ...r } = t, i = Ue(xo, t.__scopeDialog);
  return /* @__PURE__ */ x.createElement(Xa, {
    present: o || i.open
  }, i.modal ? /* @__PURE__ */ x.createElement(Nb, qe({}, r, {
    ref: e
  })) : /* @__PURE__ */ x.createElement(Rb, qe({}, r, {
    ref: e
  })));
}), Nb = /* @__PURE__ */ x.forwardRef((t, e) => {
  const n = Ue(xo, t.__scopeDialog), o = x.useRef(null), r = Qa(e, n.contentRef, o);
  return x.useEffect(() => {
    const i = o.current;
    if (i)
      return vh(i);
  }, []), /* @__PURE__ */ x.createElement(Hd, qe({}, t, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: so(t.onCloseAutoFocus, (i) => {
      var a;
      i.preventDefault(), (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: so(t.onPointerDownOutside, (i) => {
      const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
      (a.button === 2 || s) && i.preventDefault();
    }),
    onFocusOutside: so(
      t.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), Rb = /* @__PURE__ */ x.forwardRef((t, e) => {
  const n = Ue(xo, t.__scopeDialog), o = x.useRef(!1), r = x.useRef(!1);
  return /* @__PURE__ */ x.createElement(Hd, qe({}, t, {
    ref: e,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var a;
      if ((a = t.onCloseAutoFocus) === null || a === void 0 || a.call(t, i), !i.defaultPrevented) {
        var s;
        o.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), i.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (i) => {
      var a, s;
      (a = t.onInteractOutside) === null || a === void 0 || a.call(t, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const u = i.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(u)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
    }
  }));
}), Hd = /* @__PURE__ */ x.forwardRef((t, e) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: i, ...a } = t, s = Ue(xo, n), u = x.useRef(null), c = Qa(e, u);
  return kh(), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(bh, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ x.createElement(Ah, qe({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": ps(s.open)
  }, a, {
    ref: c,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
}), Pb = "DialogTitle", Ab = /* @__PURE__ */ x.forwardRef((t, e) => {
  const { __scopeDialog: n, ...o } = t, r = Ue(Pb, n);
  return /* @__PURE__ */ x.createElement(Ao.h2, qe({
    id: r.titleId
  }, o, {
    ref: e
  }));
}), Mb = "DialogDescription", Fb = /* @__PURE__ */ x.forwardRef((t, e) => {
  const { __scopeDialog: n, ...o } = t, r = Ue(Mb, n);
  return /* @__PURE__ */ x.createElement(Ao.p, qe({
    id: r.descriptionId
  }, o, {
    ref: e
  }));
}), Lb = "DialogClose", qb = /* @__PURE__ */ x.forwardRef((t, e) => {
  const { __scopeDialog: n, ...o } = t, r = Ue(Lb, n);
  return /* @__PURE__ */ x.createElement(Ao.button, qe({
    type: "button"
  }, o, {
    ref: e,
    onClick: so(
      t.onClick,
      () => r.onOpenChange(!1)
    )
  }));
});
function ps(t) {
  return t ? "open" : "closed";
}
const ms = Cb, fs = Tb, hs = Ob, gs = Db, ys = Ib, vs = Ab, ks = Fb, bs = qb, Ud = v.button`
  cursor: pointer;
  background-color: var(${h.buttonBackground});
  color: var(${h.buttonForeground});
  border: 1px solid var(${h.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${h.focusBorder});
  }
`, Vd = v.button`
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
function Vr({
  onSubmit: t,
  defaultValues: e,
  trigger: n,
  title: o,
  description: r,
  schema: i,
  children: a,
  noOverflow: s
}) {
  const u = Ac({
    defaultValues: e,
    resolver: i !== void 0 ? $h(i) : void 0
  }), [c, d] = x.useState(!1);
  return /* @__PURE__ */ l.jsxs(
    ms,
    {
      open: c,
      onOpenChange: (p) => {
        d(p), p && u.reset();
      },
      children: [
        /* @__PURE__ */ l.jsx(fs, { asChild: !0, children: n }),
        /* @__PURE__ */ l.jsxs(hs, { children: [
          /* @__PURE__ */ l.jsx(Hb, {}),
          /* @__PURE__ */ l.jsx(Ub, { noOverflow: s, children: /* @__PURE__ */ l.jsx(Mc, { ...u, children: /* @__PURE__ */ l.jsxs(
            Bb,
            {
              onSubmit: u.handleSubmit((p) => {
                t(p), d(!1);
              }),
              children: [
                o && /* @__PURE__ */ l.jsx(vs, { children: o }),
                r && /* @__PURE__ */ l.jsx(ks, { children: r }),
                /* @__PURE__ */ l.jsx(Vb, { children: a }),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
                  /* @__PURE__ */ l.jsx(Ud, { type: "submit", children: "Ok" }),
                  /* @__PURE__ */ l.jsx(bs, { asChild: !0, children: /* @__PURE__ */ l.jsx(Vd, { children: "Cancel" }) })
                ] })
              ]
            }
          ) }) })
        ] })
      ]
    }
  );
}
const Bb = v.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Hb = v(gs)`
  background-color: var(${h.computedTwo});
  position: fixed;
  inset: 0;
`, Ub = v(ys)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  ${({ noOverflow: t }) => !t && "overflow-y: auto;"}
  background-color: var(${h.background});
  color: var(${h.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, Vb = v.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
`;
function Ln({
  options: t,
  placeholder: e,
  selected: n,
  onSelectedItemChange: o,
  bottomMenu: r
}) {
  var f;
  const i = (f = t.filter((m) => m.value === n)) == null ? void 0 : f[0];
  function a(m) {
    return m ? m.label : "";
  }
  function s(m) {
    return (m == null ? void 0 : m.disabled) === !0;
  }
  const { isOpen: u, getToggleButtonProps: c, getMenuProps: d, getItemProps: p } = Dr({
    items: t,
    isItemDisabled: s,
    itemToString: a,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: m }) => {
      o(m);
    }
  });
  return /* @__PURE__ */ l.jsxs(Wb, { onClick: (m) => m.stopPropagation(), children: [
    /* @__PURE__ */ l.jsx(Kb, { children: /* @__PURE__ */ l.jsxs(Gb, { ...c(), children: [
      i === void 0 && e !== void 0 && /* @__PURE__ */ l.jsx(Jb, { children: e }),
      i !== void 0 && /* @__PURE__ */ l.jsx(Yb, { children: i.label }),
      /* @__PURE__ */ l.jsx(Ro, {})
    ] }) }),
    /* @__PURE__ */ l.jsxs(Xb, { ...d(), isOpen: u, children: [
      u && t.map((m, y) => /* @__PURE__ */ l.jsx("li", { ...p({ item: m, index: y }), children: /* @__PURE__ */ l.jsx("span", { children: m.label }) }, `${m.value}${y}`)),
      u && r
    ] })
  ] });
}
const Wb = v.div`
  position: relative;
`, Kb = v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${h.focusBorder});
  }
  border: 1px solid transparent;
`, Gb = v.div`
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
    margin-left: 3px;
    fill: var(${h.foreground});
  }
`, Jb = v.span`
  color: var(${h.inputPlaceholderForeground});
`, Yb = v.span``, Xb = v.ul`
  max-height: 250px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${h.dropdownBackground});
  color: var(${h.dropdownForeground});
  ${({ isOpen: t }) => t && `
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

  & > li[aria-disabled="true"] {
    color: var(${h.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`;
function ir({
  name: t,
  options: e,
  label: n,
  description: o,
  placeholder: r
}) {
  const { field: i } = Q({
    name: t
  });
  return /* @__PURE__ */ l.jsxs(Qb, { children: [
    /* @__PURE__ */ l.jsx("div", { className: "label", children: n }),
    /* @__PURE__ */ l.jsx(
      Ln,
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
const Qb = v.div`
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
  > div.label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${h.inputPlaceholderForeground});
  }
`;
function Zb({
  add: t,
  responseCodes: e,
  existingCodes: n
}) {
  const o = { code: "200" }, r = (i) => {
    t({
      key: i.code,
      value: {
        expectations: {
          httpStatus: oj(i.code)
        },
        variableAssignments: []
      }
    });
  };
  return /* @__PURE__ */ l.jsx(
    Vr,
    {
      title: "Add response processing",
      defaultValues: o,
      onSubmit: r,
      noOverflow: !0,
      trigger: /* @__PURE__ */ l.jsx(ij, { children: /* @__PURE__ */ l.jsx(Fo, {}) }),
      children: /* @__PURE__ */ l.jsx(ej, { responseCodes: e, existingCodes: n })
    }
  );
}
function ej({
  responseCodes: t,
  existingCodes: e
}) {
  return /* @__PURE__ */ l.jsx(rj, { children: /* @__PURE__ */ l.jsx(
    ir,
    {
      label: "HTTP response code",
      placeholder: "",
      name: "code",
      options: tj(t, e)
    }
  ) });
}
function tj(t, e) {
  return t.filter((n) => !e.includes(n)).map((n) => ({ label: nj(n), value: n }));
}
function nj(t) {
  return t in iu ? iu[t] : t;
}
function oj(t) {
  return /^\d+$/.test(t) ? parseInt(t, 10) : t;
}
const iu = {
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
}, rj = v.div`
  > div > div {
    padding: 4px;
  }
`, ij = v.button`
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
function aj(t) {
  return t ? t.label : "";
}
function co({
  name: t,
  options: e,
  placeholder: n
}) {
  const { field: o } = Q({
    name: t,
    rules: { required: !0 }
  }), r = lj(e, o.value), i = (a) => {
    o.onChange(a == null ? void 0 : a.value);
  };
  return /* @__PURE__ */ l.jsx(
    sj,
    {
      options: e,
      placeholder: n,
      selected: r == null ? void 0 : r.value,
      onSelectedItemChange: i
    }
  );
}
function sj({
  options: t,
  placeholder: e,
  label: n,
  selected: o,
  onSelectedItemChange: r
}) {
  var d;
  const i = (d = t.filter((p) => p.value === o)) == null ? void 0 : d[0], { isOpen: a, getToggleButtonProps: s, getMenuProps: u, getItemProps: c } = Dr({
    items: t,
    itemToString: aj,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      r(p);
    }
  });
  return /* @__PURE__ */ l.jsxs(uj, { children: [
    /* @__PURE__ */ l.jsx(cj, { children: /* @__PURE__ */ l.jsxs(dj, { ...s(), children: [
      /* @__PURE__ */ l.jsx("span", { children: i ? i.label : e ?? "" }),
      /* @__PURE__ */ l.jsx(Ro, {})
    ] }) }),
    /* @__PURE__ */ l.jsx(pj, { ...u(), isOpen: a, children: a && t.map((p, f) => /* @__PURE__ */ l.jsx("li", { ...c({ item: p, index: f }), children: /* @__PURE__ */ l.jsx("span", { children: p.label }) }, `${p.value}${f}`)) })
  ] });
}
function lj(t, e) {
  var n;
  return (n = t.filter((o) => o.value === e)) == null ? void 0 : n[0];
}
const uj = v.div`
  position: relative;
`, cj = v.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${h.focusBorder});
  }
  border: 1px solid transparent;
`, dj = v.div`
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
    margin-left: 3px;
    fill: var(${h.foreground});
  }
`, pj = v.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${h.dropdownBackground});
  color: var(${h.dropdownForeground});
  ${({ isOpen: t }) => t && `
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
function kn({
  label: t,
  name: e,
  disabled: n,
  password: o,
  style: r
}) {
  const {
    field: i,
    fieldState: { error: a, invalid: s }
  } = Q({
    name: e
  });
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(mj, { style: r, children: /* @__PURE__ */ l.jsx(
      "input",
      {
        ...i,
        disabled: n,
        type: o ? "password" : "text",
        style: { width: "100%" }
      }
    ) }),
    a && /* @__PURE__ */ l.jsx(fj, { children: a == null ? void 0 : a.message })
  ] });
}
const mj = v.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${h.foreground});
    &::placeholder {
      color: var(${h.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, fj = v.div`
  color: var(${h.errorForeground});
`;
function hj({
  name: t,
  index: e
}) {
  const { fields: n, append: o, remove: r } = en({
    name: `responses.${e}.value.variableAssignments`
  });
  return /* @__PURE__ */ l.jsx(gj, { children: /* @__PURE__ */ l.jsxs(yj, { children: [
    /* @__PURE__ */ l.jsxs(kj, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ l.jsx("div", { children: "From" }),
      /* @__PURE__ */ l.jsx("div", { children: "Location" }),
      /* @__PURE__ */ l.jsx("div", { children: "Type" }),
      /* @__PURE__ */ l.jsx("div", { children: "Name or Path" }),
      /* @__PURE__ */ l.jsx("div", {})
    ] }),
    /* @__PURE__ */ l.jsxs(vj, { children: [
      n.map((i, a) => /* @__PURE__ */ l.jsx(
        bj,
        {
          name: `responses.${e}.value.variableAssignments.${a}`,
          remove: () => {
            r(a);
          }
        },
        i.id
      )),
      /* @__PURE__ */ l.jsx(Sj, { append: o })
    ] })
  ] }) });
}
const gj = v.div`
  margin: 8px 4px;
`, yj = v.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: repeat(5, 1fr) 1em;
`, vj = v.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${h.border});
  }
`, kj = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function bj({ name: t, remove: e }) {
  const { getValues: n } = Zt(), o = n(`${t}.value.in`);
  return /* @__PURE__ */ l.jsxs(xj, { children: [
    /* @__PURE__ */ l.jsx(kn, { name: `${t}.key`, label: "name" }),
    o === "body" ? /* @__PURE__ */ l.jsx(wj, { name: t }, `${t}-value`) : /* @__PURE__ */ l.jsx(_j, { name: t }, `${t}-value`),
    /* @__PURE__ */ l.jsx(
      jj,
      {
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), e();
        },
        children: /* @__PURE__ */ l.jsx(He, {})
      }
    )
  ] });
}
const jj = v.button`
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
    fill: var(${h.foreground});
  }
`, xj = v.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`;
function wj({ name: t }) {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      co,
      {
        name: `${t}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(co, { name: `${t}.value.in`, options: [{ value: "body", label: "body" }] }),
    /* @__PURE__ */ l.jsx(
      co,
      {
        name: `${t}.value.path.type`,
        options: [
          { value: "jsonPointer", label: "jsonPointer" },
          { value: "jsonPath", label: "jsonPath" }
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(kn, { name: `${t}.value.path.value`, label: "path" })
  ] });
}
function _j({ name: t }) {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      co,
      {
        name: `${t}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      co,
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
    /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx(kn, { name: `${t}.value.name`, label: "name" })
  ] });
}
function Sj({ append: t }) {
  return /* @__PURE__ */ l.jsx("div", { style: { gridColumn: "span 2" }, children: /* @__PURE__ */ l.jsx("div", { style: { padding: "4px 8px" }, children: /* @__PURE__ */ l.jsx(
    Ln,
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
function Wr({
  responseCodes: t,
  editable: e
}) {
  var c;
  const { fields: n, prepend: o, remove: r } = en({
    name: "responses"
  }), [i, a] = x.useState((c = n == null ? void 0 : n[0]) == null ? void 0 : c.id);
  x.useEffect(() => {
    var d;
    a((d = n == null ? void 0 : n[0]) == null ? void 0 : d.id);
  }, [n]);
  const s = n.map((d) => d.key), u = n.map((d, p) => ({
    id: d.id,
    title: d.key,
    menu: e ? /* @__PURE__ */ l.jsx(Nt, { children: /* @__PURE__ */ l.jsxs(tn, { onClick: (f) => f.stopPropagation(), onSelect: () => r(p), children: [
      /* @__PURE__ */ l.jsx(He, {}),
      "Delete"
    ] }) }) : void 0,
    content: /* @__PURE__ */ l.jsx(hj, { name: d.key, index: p })
  }));
  return /* @__PURE__ */ l.jsx(Cj, { children: /* @__PURE__ */ l.jsx(
    Et,
    {
      round: !0,
      activeTab: i,
      setActiveTab: a,
      tabs: u,
      menu: e ? /* @__PURE__ */ l.jsx(
        Zb,
        {
          add: o,
          responseCodes: t,
          existingCodes: s
        }
      ) : void 0
    }
  ) });
}
const Cj = v.div`
  margin-top: 4px;
`;
function $j({ append: t }) {
  return /* @__PURE__ */ l.jsxs(Tj, { children: [
    /* @__PURE__ */ l.jsx(
      Ej,
      {
        placeholder: "Add new entry",
        value: "",
        onChange: (e) => {
          t({ key: e.target.value, value: "", type: "string" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ l.jsx(Oj, {})
  ] });
}
const Tj = v.div`
  display: contents;
`, Ej = v.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  margin-right: 10px;
  padding: 4px 8px;
  &::placeholder {
    color: var(${h.inputPlaceholderForeground});
  }
`, Oj = v.div`
  grid-column: span 3;
`;
var Wd = {}, Kr = {}, Kd = x;
function Dj(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++)
    e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let Gd = Kd.createContext(null);
Kr.LexicalComposerContext = Gd;
Kr.createLexicalComposerContext = function(t, e) {
  let n = null;
  return t != null && (n = t[1]), { getTheme: function() {
    return e ?? (n != null ? n.getTheme() : null);
  } };
};
Kr.useLexicalComposerContext = function() {
  let t = Kd.useContext(Gd);
  return t == null && Dj(8), t;
};
const zj = Kr;
var De = zj, w = {};
let Gr = {}, Jd = {}, bn = {}, po = {}, aa = {}, jn = {}, js = {}, sa = {}, wo = {}, _o = {}, vt = {}, xs = {}, ws = {}, Yd = {}, Xd = {}, Qd = {}, Zd = {}, ep = {}, tp = {}, np = {}, mr = {}, op = {}, rp = {}, ip = {}, ap = {}, sp = {}, lp = {}, up = {}, cp = {}, dp = {}, _s = {}, Ss = {}, la = {}, pp = {}, mp = {}, fp = {};
function O(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++)
    e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let et = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ij = et && "documentMode" in document ? document.documentMode : null, fe = et && /Mac|iPod|iPhone|iPad/.test(navigator.platform), wt = et && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), fr = et && "InputEvent" in window && !Ij ? "getTargetRanges" in new window.InputEvent("input") : !1, Cs = et && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Jr = et && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Nj = et && /Android/.test(navigator.userAgent), Rj = et && /^(?=.*Chrome).*/i.test(navigator.userAgent), $s = et && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Rj, Yr = Cs || Jr || $s ? " " : "​", Pj = wt ? " " : Yr, Aj = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/, Mj = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/, jt = { bold: 1, code: 16, highlight: 128, italic: 2, strikethrough: 4, subscript: 32, superscript: 64, underline: 8 }, Fj = { directionless: 1, unmergeable: 2 }, au = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, Lj = { 2: "center", 6: "end", 4: "justify", 1: "left", 3: "right", 5: "start" }, qj = { normal: 0, segmented: 2, token: 1 }, Bj = { 0: "normal", 2: "segmented", 1: "token" }, ua = !1, Ts = 0;
function Hj(t) {
  Ts = t.timeStamp;
}
function zi(t, e, n) {
  return e.__lexicalLineBreak === t || t[`__lexicalKey_${n._key}`] !== void 0;
}
function Uj(t) {
  return t.getEditorState().read(() => {
    let e = W();
    return e !== null ? e.clone() : null;
  });
}
function hp(t, e, n) {
  ua = !0;
  let o = 100 < performance.now() - Ts;
  try {
    Oe(t, () => {
      let r = W() || Uj(t);
      var i = /* @__PURE__ */ new Map(), a = t.getRootElement(), s = t._editorState, u = t._blockCursorElement;
      let c = !1, d = "";
      for (var p = 0; p < e.length; p++) {
        var f = e[p], m = f.type, y = f.target, g = Bo(y, s);
        if (!(g === null && y !== a || Z(g))) {
          if (m === "characterData") {
            if (f = o && D(g))
              e: {
                f = r, m = y;
                var k = g;
                if (R(f)) {
                  var b = f.anchor.getNode();
                  if (b.is(k) && f.format !== b.getFormat()) {
                    f = !1;
                    break e;
                  }
                }
                f = m.nodeType === 3 && k.isAttached();
              }
            f && (k = tt(t._window), m = f = null, k !== null && k.anchorNode === y && (f = k.anchorOffset, m = k.focusOffset), y = y.nodeValue, y !== null && Is(g, y, f, m, !1));
          } else if (m === "childList") {
            for (c = !0, m = f.addedNodes, k = 0; k < m.length; k++) {
              b = m[k];
              var _ = jp(b), j = b.parentNode;
              j == null || b === u || _ !== null || b.nodeName === "BR" && zi(b, j, t) || (wt && (_ = b.innerText || b.nodeValue) && (d += _), j.removeChild(b));
            }
            if (f = f.removedNodes, m = f.length, 0 < m) {
              for (k = 0, b = 0; b < m; b++)
                j = f[b], (j.nodeName === "BR" && zi(j, y, t) || u === j) && (y.appendChild(j), k++);
              m !== k && (y === a && (g = s._nodeMap.get("root")), i.set(y, g));
            }
          }
        }
      }
      if (0 < i.size)
        for (let [
          C,
          L
        ] of i)
          if (S(L))
            for (i = L.getChildrenKeys(), a = C.firstChild, s = 0; s < i.length; s++)
              u = t.getElementByKey(i[s]), u !== null && (a == null ? (C.appendChild(u), a = u) : a !== u && C.replaceChild(u, a), a = a.nextSibling);
          else
            D(L) && L.markDirty();
      if (i = n.takeRecords(), 0 < i.length) {
        for (a = 0; a < i.length; a++)
          for (u = i[a], s = u.addedNodes, u = u.target, p = 0; p < s.length; p++)
            g = s[p], y = g.parentNode, y == null || g.nodeName !== "BR" || zi(g, u, t) || y.removeChild(g);
        n.takeRecords();
      }
      r !== null && (c && (r.dirty = !0, Xe(r)), wt && Sp(t) && r.insertRawText(d));
    });
  } finally {
    ua = !1;
  }
}
function gp(t) {
  let e = t._observer;
  if (e !== null) {
    let n = e.takeRecords();
    hp(t, n, e);
  }
}
function yp(t) {
  Ts === 0 && Qr(t).addEventListener("textInput", Hj, !0), t._observer = new MutationObserver((e, n) => {
    hp(t, e, n);
  });
}
function su(t, e) {
  let n = t.__mode, o = t.__format;
  t = t.__style;
  let r = e.__mode, i = e.__format;
  return e = e.__style, (n === null || n === r) && (o === null || o === i) && (t === null || t === e);
}
function lu(t, e) {
  let n = t.mergeWithSibling(e), o = J()._normalizedNodes;
  return o.add(t.__key), o.add(e.__key), n;
}
function vp(t) {
  if (t.__text === "" && t.isSimpleText() && !t.isUnmergeable())
    t.remove();
  else {
    for (var e; (e = t.getPreviousSibling()) !== null && D(e) && e.isSimpleText() && !e.isUnmergeable(); )
      if (e.__text === "")
        e.remove();
      else {
        su(e, t) && (t = lu(e, t));
        break;
      }
    for (var n; (n = t.getNextSibling()) !== null && D(n) && n.isSimpleText() && !n.isUnmergeable(); )
      if (n.__text === "")
        n.remove();
      else {
        su(t, n) && lu(t, n);
        break;
      }
  }
}
function kp(t) {
  return uu(t.anchor), uu(t.focus), t;
}
function uu(t) {
  for (; t.type === "element"; ) {
    var e = t.getNode(), n = t.offset;
    if (n === e.getChildrenSize() ? (e = e.getChildAtIndex(n - 1), n = !0) : (e = e.getChildAtIndex(n), n = !1), D(e)) {
      t.set(e.__key, n ? e.getTextContentSize() : 0, "text");
      break;
    } else if (!S(e))
      break;
    t.set(e.__key, n ? e.getChildrenSize() : 0, "element");
  }
}
let Vj = 1, Wj = typeof queueMicrotask == "function" ? queueMicrotask : (t) => {
  Promise.resolve().then(t);
};
function Es(t) {
  let e = document.activeElement;
  if (e === null)
    return !1;
  let n = e.nodeName;
  return Z(Bo(t)) && (n === "INPUT" || n === "TEXTAREA" || e.contentEditable === "true" && e.__lexicalEditor == null);
}
function qo(t, e, n) {
  let o = t.getRootElement();
  try {
    return o !== null && o.contains(e) && o.contains(n) && e !== null && !Es(e) && Os(e) === t;
  } catch {
    return !1;
  }
}
function Os(t) {
  for (; t != null; ) {
    let e = t.__lexicalEditor;
    if (e != null)
      return e;
    t = Xr(t);
  }
  return null;
}
function ca(t) {
  return t.isToken() || t.isSegmented();
}
function hr(t) {
  for (; t != null; ) {
    if (t.nodeType === 3)
      return t;
    t = t.firstChild;
  }
  return null;
}
function da(t, e, n) {
  let o = jt[e];
  return n !== null && (t & o) === (n & o) || (t ^= o, e === "subscript" ? t &= ~jt.superscript : e === "superscript" && (t &= ~jt.subscript)), t;
}
function bp(t, e) {
  if (e != null)
    t.__key = e;
  else {
    je(), 99 < To && O(14), e = J();
    var n = nt(), o = "" + Vj++;
    n._nodeMap.set(o, t), S(t) ? e._dirtyElements.set(o, !0) : e._dirtyLeaves.add(o), e._cloneNotNeeded.add(o), e._dirtyType = 1, t.__key = o;
  }
}
function Wt(t) {
  var e = t.getParent();
  if (e !== null) {
    let r = t.getWritable();
    e = e.getWritable();
    var n = t.getPreviousSibling();
    if (t = t.getNextSibling(), n === null)
      if (t !== null) {
        var o = t.getWritable();
        e.__first = t.__key, o.__prev = null;
      } else
        e.__first = null;
    else {
      if (o = n.getWritable(), t !== null) {
        let i = t.getWritable();
        i.__prev = o.__key, o.__next = i.__key;
      } else
        o.__next = null;
      r.__prev = null;
    }
    t === null ? n !== null ? (t = n.getWritable(), e.__last = n.__key, t.__next = null) : e.__last = null : (t = t.getWritable(), n !== null ? (n = n.getWritable(), n.__next = t.__key, t.__prev = n.__key) : t.__prev = null, r.__next = null), e.__size--, r.__parent = null;
  }
}
function gr(t) {
  99 < To && O(14);
  var e = t.getLatest(), n = e.__parent, o = nt();
  let r = J(), i = o._nodeMap;
  if (o = r._dirtyElements, n !== null)
    e:
      for (; n !== null; ) {
        if (o.has(n))
          break e;
        let a = i.get(n);
        if (a === void 0)
          break;
        o.set(n, !1), n = a.__parent;
      }
  e = e.__key, r._dirtyType = 1, S(t) ? o.set(e, !0) : r._dirtyLeaves.add(e);
}
function ie(t) {
  je();
  var e = J();
  let n = e._compositionKey;
  t !== n && (e._compositionKey = t, n !== null && (e = he(n), e !== null && e.getWritable()), t !== null && (t = he(t), t !== null && t.getWritable()));
}
function kt() {
  return Un() ? null : J()._compositionKey;
}
function he(t, e) {
  return t = (e || nt())._nodeMap.get(t), t === void 0 ? null : t;
}
function jp(t, e) {
  let n = J();
  return t = t[`__lexicalKey_${n._key}`], t !== void 0 ? he(t, e) : null;
}
function Bo(t, e) {
  for (; t != null; ) {
    let n = jp(t, e);
    if (n !== null)
      return n;
    t = Xr(t);
  }
  return null;
}
function xp(t) {
  let e = Object.assign({}, t._decorators);
  return t._pendingDecorators = e;
}
function cu(t) {
  return t.read(() => Ee().getTextContent());
}
function Kj(t, e) {
  Oe(t, () => {
    var n = nt();
    if (!n.isEmpty())
      if (e === "root")
        Ee().markDirty();
      else {
        n = n._nodeMap;
        for (let [, o] of n)
          o.markDirty();
      }
  }, t._pendingEditorState === null ? { tag: "history-merge" } : void 0);
}
function Ee() {
  return nt()._nodeMap.get("root");
}
function Xe(t) {
  je();
  let e = nt();
  t !== null && (t.dirty = !0, t.setCachedNodes(null)), e._selection = t;
}
function gn(t) {
  var e = J(), n;
  e: {
    for (n = t; n != null; ) {
      let o = n[`__lexicalKey_${e._key}`];
      if (o !== void 0) {
        n = o;
        break e;
      }
      n = Xr(n);
    }
    n = null;
  }
  return n === null ? (e = e.getRootElement(), t === e ? he("root") : null) : he(n);
}
function wp(t) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
}
function Ds(t) {
  let e = [];
  for (; t !== null; )
    e.push(t), t = t._parentEditor;
  return e;
}
function _p() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function zs(t, e, n) {
  if (e = tt(e._window), e !== null) {
    var o = e.anchorNode, { anchorOffset: r, focusOffset: i } = e;
    if (o !== null && (e = o.nodeType === 3 ? o.nodeValue : null, o = Bo(o), e !== null && D(o))) {
      if (e === Yr && n) {
        let a = n.length;
        e = n, i = r = a;
      }
      e !== null && Is(o, e, r, i, t);
    }
  }
}
function Is(t, e, n, o, r) {
  let i = t;
  if (i.isAttached() && (r || !i.isDirty())) {
    let c = i.isComposing(), d = e;
    if ((c || r) && e[e.length - 1] === Yr && (d = e.slice(0, -1)), e = i.getTextContent(), r || d !== e)
      if (d === "")
        if (ie(null), Cs || Jr || $s)
          i.remove();
        else {
          let p = J();
          setTimeout(() => {
            p.update(() => {
              i.isAttached() && i.remove();
            });
          }, 20);
        }
      else {
        r = i.getParent(), e = Hn();
        var a = i.getTextContentSize(), s = kt(), u = i.getKey();
        i.isToken() || s !== null && u === s && !c || R(e) && (r !== null && !r.canInsertTextBefore() && e.anchor.offset === 0 || e.anchor.key === t.__key && e.anchor.offset === 0 && !i.canInsertTextBefore() && !c || e.focus.key === t.__key && e.focus.offset === a && !i.canInsertTextAfter() && !c) ? i.markDirty() : (t = W(), R(t) && n !== null && o !== null && (t.setTextNodeRange(i, n, i, o), i.isSegmented() && (n = i.getTextContent(), n = de(n), i.replace(n), i = n)), i.setTextContent(d));
      }
  }
}
function Gj(t, e) {
  if (e.isSegmented())
    return !0;
  if (!t.isCollapsed())
    return !1;
  t = t.anchor.offset;
  let n = e.getParentOrThrow(), o = e.isToken();
  return t === 0 ? ((t = !e.canInsertTextBefore() || !n.canInsertTextBefore() || o) || (e = e.getPreviousSibling(), t = (D(e) || S(e) && e.isInline()) && !e.canInsertTextAfter()), t) : t === e.getTextContentSize() ? !e.canInsertTextAfter() || !n.canInsertTextAfter() || o : !1;
}
function mo(t, e) {
  t.__lexicalClassNameCache === void 0 && (t.__lexicalClassNameCache = {});
  let n = t.__lexicalClassNameCache, o = n[e];
  return o !== void 0 ? o : (t = t[e], typeof t == "string" ? (t = t.split(" "), n[e] = t) : t);
}
function Ns(t, e, n, o, r) {
  n.size !== 0 && (n = o.__type, o = o.__key, e = e.get(n), e === void 0 && O(33, n), n = e.klass, e = t.get(n), e === void 0 && (e = /* @__PURE__ */ new Map(), t.set(n, e)), t = e.get(o), n = t === "destroyed" && r === "created", (t === void 0 || n) && e.set(o, n ? "updated" : r));
}
function du(t, e, n) {
  let o = t.getParent(), r = n;
  return o !== null && (e && n === 0 ? (r = t.getIndexWithinParent(), t = o) : e || n !== t.getChildrenSize() || (r = t.getIndexWithinParent() + 1, t = o)), t.getChildAtIndex(e ? r - 1 : r);
}
function pa(t, e) {
  var n = t.offset;
  return t.type === "element" ? (t = t.getNode(), du(t, e, n)) : (t = t.getNode(), e && n === 0 || !e && n === t.getTextContentSize() ? (n = e ? t.getPreviousSibling() : t.getNextSibling(), n === null ? du(t.getParentOrThrow(), e, t.getIndexWithinParent() + (e ? 0 : 1)) : n) : null);
}
function Sp(t) {
  return t = (t = Qr(t).event) && t.inputType, t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function yr(t) {
  return !Te(t) && !t.isLastChild() && !t.isInline();
}
function vr(t, e) {
  return t = t._keyToDOMMap.get(e), t === void 0 && O(75, e), t;
}
function Xr(t) {
  return t = t.assignedSlot || t.parentElement, t !== null && t.nodeType === 11 ? t.host : t;
}
function kr(t, e) {
  for (t = t.getParent(); t !== null; ) {
    if (t.is(e))
      return !0;
    t = t.getParent();
  }
  return !1;
}
function Qr(t) {
  return t = t._window, t === null && O(78), t;
}
function Cp(t) {
  for (t = t.getParentOrThrow(); t !== null && !_t(t); )
    t = t.getParentOrThrow();
  return t;
}
function _t(t) {
  return Te(t) || S(t) && t.isShadowRoot();
}
function $p(t) {
  return t = t.constructor.clone(t), bp(t, null), t;
}
function Ho(t) {
  var e = J();
  let n = t.constructor.getType();
  return e = e._nodes.get(n), e === void 0 && O(97), e = e.replace, e !== null ? (e = e(t), e instanceof t.constructor || O(98), e) : t;
}
function Ii(t, e) {
  t = t.getParent(), !Te(t) || S(e) || Z(e) || O(99);
}
function Ni(t) {
  return (Z(t) || S(t) && !t.canBeEmpty()) && !t.isInline();
}
function ma(t, e, n) {
  n.style.removeProperty("caret-color"), e._blockCursorElement = null, e = t.parentElement, e !== null && e.removeChild(t);
}
function tt(t) {
  return et ? (t || window).getSelection() : null;
}
function Zr(t) {
  return t.nodeType === 1;
}
function fn(t) {
  if (Z(t) && !t.isInline())
    return !0;
  if (!S(t) || _t(t))
    return !1;
  var e = t.getFirstChild();
  return e = e === null || Yt(e) || D(e) || e.isInline(), !t.isInline() && t.canBeEmpty() !== !1 && e;
}
function Ri(t, e) {
  for (; t !== null && t.getParent() !== null && !e(t); )
    t = t.getParentOrThrow();
  return e(t) ? t : null;
}
function Tp(t, e, n, o, r, i) {
  for (t = t.getFirstChild(); t !== null; ) {
    let a = t.__key;
    t.__parent === e && (S(t) && Tp(t, a, n, o, r, i), n.has(a) || i.delete(a), r.push(a)), t = t.getNextSibling();
  }
}
function Jj(t, e, n, o) {
  t = t._nodeMap, e = e._nodeMap;
  let r = [];
  for (let [i] of o) {
    let a = e.get(i);
    a === void 0 || a.isAttached() || (S(a) && Tp(a, i, t, e, r, o), t.has(i) || o.delete(i), r.push(i));
  }
  for (let i of r)
    e.delete(i);
  for (let i of n)
    o = e.get(i), o === void 0 || o.isAttached() || (t.has(i) || n.delete(i), e.delete(i));
}
let re = "", be = "", it = "", St, ge, So, Ep = !1, Rs = !1, ei, ar = null, fa, ha, Jt, Ct, ga, Co;
function sr(t, e) {
  let n = Jt.get(t);
  if (e !== null) {
    let o = ka(t);
    o.parentNode === e && e.removeChild(o);
  }
  Ct.has(t) || ge._keyToDOMMap.delete(t), S(n) && (t = br(n, Jt), ya(t, 0, t.length - 1, null)), n !== void 0 && Ns(Co, So, ei, n, "destroyed");
}
function ya(t, e, n, o) {
  for (; e <= n; ++e) {
    let r = t[e];
    r !== void 0 && sr(r, o);
  }
}
function qt(t, e) {
  t.setProperty("text-align", e);
}
function Op(t, e) {
  var n = St.theme.indent;
  if (typeof n == "string") {
    let o = t.classList.contains(n);
    0 < e && !o ? t.classList.add(n) : 1 > e && o && t.classList.remove(n);
  }
  n = getComputedStyle(t).getPropertyValue("--lexical-indent-base-value") || "40px", t.style.setProperty("padding-inline-start", e === 0 ? "" : `calc(${e} * ${n})`);
}
function Dp(t, e) {
  t = t.style, e === 0 ? qt(t, "") : e === 1 ? qt(t, "left") : e === 2 ? qt(t, "center") : e === 3 ? qt(t, "right") : e === 4 ? qt(t, "justify") : e === 5 ? qt(t, "start") : e === 6 && qt(t, "end");
}
function lr(t, e, n) {
  let o = Ct.get(t);
  o === void 0 && O(60);
  let r = o.createDOM(St, ge);
  var i = ge._keyToDOMMap;
  if (r["__lexicalKey_" + ge._key] = t, i.set(t, r), D(o) ? r.setAttribute("data-lexical-text", "true") : Z(o) && r.setAttribute("data-lexical-decorator", "true"), S(o)) {
    if (t = o.__indent, i = o.__size, t !== 0 && Op(r, t), i !== 0) {
      --i, t = br(o, Ct);
      var a = be;
      be = "", va(t, o, 0, i, r, null), Ip(o, r), be = a;
    }
    t = o.__format, t !== 0 && Dp(r, t), o.isInline() || zp(null, o, r), yr(o) && (re += `

`, it += `

`);
  } else
    i = o.getTextContent(), Z(o) ? (a = o.decorate(ge, St), a !== null && Np(t, a), r.contentEditable = "false") : D(o) && (o.isDirectionless() || (be += i)), re += i, it += i;
  return e !== null && (n != null ? e.insertBefore(r, n) : (n = e.__lexicalLineBreak, n != null ? e.insertBefore(r, n) : e.appendChild(r))), Ns(Co, So, ei, o, "created"), r;
}
function va(t, e, n, o, r, i) {
  let a = re;
  for (re = ""; n <= o; ++n)
    lr(t[n], r, i);
  yr(e) && (re += `

`), r.__lexicalTextContent = re, re = a + re;
}
function pu(t, e) {
  return t = e.get(t), Yt(t) || Z(t) && t.isInline();
}
function zp(t, e, n) {
  t = t !== null && (t.__size === 0 || pu(t.__last, Jt)), e = e.__size === 0 || pu(e.__last, Ct), t ? e || (e = n.__lexicalLineBreak, e != null && n.removeChild(e), n.__lexicalLineBreak = null) : e && (e = document.createElement("br"), n.__lexicalLineBreak = e, n.appendChild(e));
}
function Ip(t, e) {
  var n = e.__lexicalDir;
  if (e.__lexicalDirTextContent !== be || n !== ar) {
    let i = be === "";
    if (i)
      var o = ar;
    else
      o = be, o = Aj.test(o) ? "rtl" : Mj.test(o) ? "ltr" : null;
    if (o !== n) {
      let a = e.classList, s = St.theme;
      var r = n !== null ? s[n] : void 0;
      let u = o !== null ? s[o] : void 0;
      r !== void 0 && (typeof r == "string" && (r = r.split(" "), r = s[n] = r), a.remove(...r)), o === null || i && o === "ltr" ? e.removeAttribute("dir") : (u !== void 0 && (typeof u == "string" && (n = u.split(" "), u = s[o] = n), u !== void 0 && a.add(...u)), e.dir = o), Rs || (t.getWritable().__dir = o);
    }
    ar = o, e.__lexicalDirTextContent = be, e.__lexicalDir = o;
  }
}
function br(t, e) {
  let n = [];
  for (t = t.__first; t !== null; ) {
    let o = e.get(t);
    o === void 0 && O(101), n.push(t), t = o.__next;
  }
  return n;
}
function oo(t, e) {
  var n = Jt.get(t), o = Ct.get(t);
  n !== void 0 && o !== void 0 || O(61);
  var r = Ep || ha.has(t) || fa.has(t);
  let i = vr(ge, t);
  if (n === o && !r)
    return S(n) ? (o = i.__lexicalTextContent, o !== void 0 && (re += o, it += o), o = i.__lexicalDirTextContent, o !== void 0 && (be += o)) : (o = n.getTextContent(), D(n) && !n.isDirectionless() && (be += o), it += o, re += o), i;
  if (n !== o && r && Ns(Co, So, ei, o, "updated"), o.updateDOM(n, i, St))
    return o = lr(t, null, null), e === null && O(62), e.replaceChild(o, i), sr(t, null), o;
  if (S(n) && S(o)) {
    if (t = o.__indent, t !== n.__indent && Op(i, t), t = o.__format, t !== n.__format && Dp(i, t), r) {
      t = be, be = "", r = re;
      var a = n.__size, s = o.__size;
      if (re = "", a === 1 && s === 1) {
        var u = n.__first;
        if (e = o.__first, u === e)
          oo(u, i);
        else {
          var c = ka(u);
          e = lr(e, null, null), i.replaceChild(e, c), sr(u, null);
        }
      } else {
        e = br(n, Jt);
        var d = br(o, Ct);
        if (a === 0)
          s !== 0 && va(d, o, 0, s - 1, i, null);
        else if (s === 0)
          a !== 0 && (u = i.__lexicalLineBreak == null, ya(e, 0, a - 1, u ? null : i), u && (i.textContent = ""));
        else {
          var p = e;
          e = d, d = a - 1, a = s - 1;
          let m = i.firstChild, y = 0;
          for (s = 0; y <= d && s <= a; ) {
            var f = p[y];
            let g = e[s];
            if (f === g)
              m = Pi(oo(g, i)), y++, s++;
            else {
              u === void 0 && (u = new Set(p)), c === void 0 && (c = new Set(e));
              let k = c.has(f), b = u.has(g);
              k ? (b ? (f = vr(ge, g), f === m ? m = Pi(oo(g, i)) : (m != null ? i.insertBefore(f, m) : i.appendChild(f), oo(g, i)), y++) : lr(g, i, m), s++) : (m = Pi(ka(f)), sr(f, i), y++);
            }
          }
          u = y > d, c = s > a, u && !c ? (u = e[a + 1], u = u === void 0 ? null : ge.getElementByKey(u), va(e, o, s, a, i, u)) : c && !u && ya(p, y, d, i);
        }
      }
      yr(o) && (re += `

`), i.__lexicalTextContent = re, re = r + re, Ip(o, i), be = t, Te(o) || o.isInline() || zp(n, o, i);
    }
    yr(o) && (re += `

`, it += `

`);
  } else
    n = o.getTextContent(), Z(o) ? (r = o.decorate(ge, St), r !== null && Np(t, r)) : D(o) && !o.isDirectionless() && (be += n), re += n, it += n;
  return !Rs && Te(o) && o.__cachedText !== it && (o.getWritable().__cachedText = it), i;
}
function Np(t, e) {
  let n = ge._pendingDecorators, o = ge._decorators;
  if (n === null) {
    if (o[t] === e)
      return;
    n = xp(ge);
  }
  n[t] = e;
}
function Pi(t) {
  return t = t.nextSibling, t !== null && t === ge._blockCursorElement && (t = t.nextSibling), t;
}
function ka(t) {
  let e = ga.get(t);
  return e === void 0 && O(75, t), e;
}
let rt = Object.freeze({}), ba = [["keydown", ox], ["pointerdown", Xj], ["compositionstart", tx], ["compositionend", nx], ["input", ex], ["click", Yj], ["cut", rt], ["copy", rt], ["dragstart", rt], ["dragover", rt], ["dragend", rt], ["paste", rt], ["focus", rt], ["blur", rt], ["drop", rt]];
fr && ba.push(["beforeinput", (t, e) => Zj(t, e)]);
let $o = 0, Rp = 0, Pp = 0, hn = null, fo = 0, ja = !1, xa = !1, ho = !1, ro = !1, Ap = [0, "", 0, "root", 0];
function Mp(t, e, n, o, r) {
  let i = t.anchor, a = t.focus, s = i.getNode();
  var u = J();
  let c = tt(u._window), d = c !== null ? c.anchorNode : null, p = i.key;
  u = u.getElementByKey(p);
  let f = n.length;
  return p !== a.key || !D(s) || (!r && (!fr || Pp < o + 50) || s.isDirty() && 2 > f || wp(n)) && i.offset !== a.offset && !s.isComposing() || ca(s) || s.isDirty() && 1 < f || (r || !fr) && u !== null && !s.isComposing() && d !== hr(u) || c !== null && e !== null && (!e.collapsed || e.startContainer !== c.anchorNode || e.startOffset !== c.anchorOffset) || s.getFormat() !== t.format || s.getStyle() !== t.style || Gj(t, s);
}
function mu(t, e) {
  return t !== null && t.nodeValue !== null && t.nodeType === 3 && e !== 0 && e !== t.nodeValue.length;
}
function fu(t, e, n) {
  let { anchorNode: o, anchorOffset: r, focusNode: i, focusOffset: a } = t;
  ja && (ja = !1, mu(o, r) && mu(i, a)) || Oe(e, () => {
    if (!n)
      Xe(null);
    else if (qo(e, o, i)) {
      var s = W();
      if (R(s)) {
        var u = s.anchor, c = u.getNode();
        if (s.isCollapsed()) {
          t.type === "Range" && t.anchorNode === t.focusNode && (s.dirty = !0);
          var d = Qr(e).event;
          d = d ? d.timeStamp : performance.now();
          let [g, k, b, _, j] = Ap;
          var p = Ee();
          p = e.isComposing() === !1 && p.getTextContent() === "", d < j + 200 && u.offset === b && u.key === _ ? (s.format = g, s.style = k) : u.type === "text" ? (D(c) || O(141), s.format = c.getFormat(), s.style = c.getStyle()) : u.type !== "element" || p || (s.format = 0, s.style = "");
        } else {
          var f = u.key, m = s.focus.key;
          u = s.getNodes(), c = u.length;
          var y = s.isBackward();
          d = y ? a : r, p = y ? r : a;
          let g = y ? m : f;
          f = y ? f : m, m = 255, y = !1;
          for (let k = 0; k < c; k++) {
            let b = u[k], _ = b.getTextContentSize();
            if (D(b) && _ !== 0 && !(k === 0 && b.__key === g && d === _ || k === c - 1 && b.__key === f && p === 0) && (y = !0, m &= b.getFormat(), m === 0))
              break;
          }
          s.format = y ? m : 0;
        }
      }
      E(e, Gr, void 0);
    }
  });
}
function Yj(t, e) {
  Oe(e, () => {
    let n = W();
    var o = tt(e._window);
    let r = Hn();
    if (o)
      if (R(n)) {
        let a = n.anchor;
        var i = a.getNode();
        a.type === "element" && a.offset === 0 && n.isCollapsed() && !Te(i) && Ee().getChildrenSize() === 1 && i.getTopLevelElementOrThrow().isEmpty() && r !== null && n.is(r) ? (o.removeAllRanges(), n.dirty = !0) : t.detail !== 3 || n.isCollapsed() || (o = n.focus.getNode(), i !== o && (S(i) ? i.select(0) : i.getParentOrThrow().select(0)));
      } else
        t.pointerType === "touch" && (i = o.anchorNode, i !== null && (i = i.nodeType, i === 1 || i === 3)) && (o = Ps(r, o, e, t), Xe(o));
    E(e, Jd, t);
  });
}
function Xj(t, e) {
  let n = t.target;
  t = t.pointerType, n instanceof Node && t !== "touch" && Oe(e, () => {
    Z(Bo(n)) || (xa = !0);
  });
}
function Fp(t) {
  return t.getTargetRanges ? (t = t.getTargetRanges(), t.length === 0 ? null : t[0]) : null;
}
function Qj(t, e) {
  return t !== e || S(t) || S(e) || !t.isToken() || !e.isToken();
}
function Zj(t, e) {
  let n = t.inputType, o = Fp(t);
  n === "deleteCompositionText" || wt && Sp(e) || n !== "insertCompositionText" && Oe(e, () => {
    let r = W();
    if (n === "deleteContentBackward") {
      if (r === null) {
        var i = Hn();
        if (!R(i))
          return;
        Xe(i.clone());
      }
      if (R(r)) {
        Nj && ie(r.anchor.key), Rp === 229 && t.timeStamp < $o + 30 && e.isComposing() && r.anchor.key === r.focus.key ? (ie(null), $o = 0, setTimeout(() => {
          Oe(e, () => {
            ie(null);
          });
        }, 30), R(r) && (i = r.anchor.getNode(), i.markDirty(), r.format = i.getFormat(), D(i) || O(142), r.style = i.getStyle()), 1 >= r.anchor.getNode().getTextContent().length && (t.preventDefault(), E(e, bn, !0))) : (ie(null), t.preventDefault(), E(e, bn, !0));
        return;
      }
    }
    if (R(r)) {
      i = t.data, hn !== null && zs(!1, e, hn), r.dirty && hn === null || !r.isCollapsed() || Te(r.anchor.getNode()) || o === null || r.applyDOMRange(o), hn = null;
      var a = r.focus, s = r.anchor.getNode();
      if (a = a.getNode(), n === "insertText" || n === "insertTranspose")
        i === `
` ? (t.preventDefault(), E(e, po, !1)) : i === `

` ? (t.preventDefault(), E(e, aa, void 0)) : i == null && t.dataTransfer ? (i = t.dataTransfer.getData("text/plain"), t.preventDefault(), r.insertRawText(i)) : i != null && Mp(r, o, i, t.timeStamp, !0) ? (t.preventDefault(), E(e, jn, i)) : hn = i, Pp = t.timeStamp;
      else
        switch (t.preventDefault(), n) {
          case "insertFromYank":
          case "insertFromDrop":
          case "insertReplacementText":
            E(e, jn, t);
            break;
          case "insertFromComposition":
            ie(null), E(e, jn, t);
            break;
          case "insertLineBreak":
            ie(null), E(e, po, !1);
            break;
          case "insertParagraph":
            ie(null), ho && !Jr ? (ho = !1, E(e, po, !1)) : E(e, aa, void 0);
            break;
          case "insertFromPaste":
          case "insertFromPasteAsQuotation":
            E(e, js, t);
            break;
          case "deleteByComposition":
            Qj(s, a) && E(
              e,
              sa,
              t
            );
            break;
          case "deleteByDrag":
          case "deleteByCut":
            E(e, sa, t);
            break;
          case "deleteContent":
            E(e, bn, !1);
            break;
          case "deleteWordBackward":
            E(e, wo, !0);
            break;
          case "deleteWordForward":
            E(e, wo, !1);
            break;
          case "deleteHardLineBackward":
          case "deleteSoftLineBackward":
            E(e, _o, !0);
            break;
          case "deleteContentForward":
          case "deleteHardLineForward":
          case "deleteSoftLineForward":
            E(e, _o, !1);
            break;
          case "formatStrikeThrough":
            E(e, vt, "strikethrough");
            break;
          case "formatBold":
            E(e, vt, "bold");
            break;
          case "formatItalic":
            E(e, vt, "italic");
            break;
          case "formatUnderline":
            E(e, vt, "underline");
            break;
          case "historyUndo":
            E(e, xs, void 0);
            break;
          case "historyRedo":
            E(e, ws, void 0);
        }
    }
  });
}
function ex(t, e) {
  t.stopPropagation(), Oe(e, () => {
    var n = W(), o = t.data, r = Fp(t);
    if (o != null && R(n) && Mp(n, r, o, t.timeStamp, !1)) {
      ro && (wa(e, o), ro = !1);
      var i = n.anchor, a = i.getNode();
      if (r = tt(e._window), r === null)
        return;
      let s = i.offset;
      (i = fr && !n.isCollapsed() && D(a) && r.anchorNode !== null) && (a = a.getTextContent().slice(0, s) + o + a.getTextContent().slice(s + n.focus.offset), r = r.anchorNode, i = a === (r.nodeType === 3 ? r.nodeValue : null)), i || E(e, jn, o), o = o.length, wt && 1 < o && t.inputType === "insertCompositionText" && !e.isComposing() && (n.anchor.offset -= o), Cs || Jr || $s || !e.isComposing() || ($o = 0, ie(null));
    } else
      zs(!1, e, o !== null ? o : void 0), ro && (wa(e, o || void 0), ro = !1);
    je(), n = J(), gp(n);
  }), hn = null;
}
function tx(t, e) {
  Oe(e, () => {
    let n = W();
    if (R(n) && !e.isComposing()) {
      let o = n.anchor, r = n.anchor.getNode();
      ie(o.key), (t.timeStamp < $o + 30 || o.type === "element" || !n.isCollapsed() || r.getFormat() !== n.format || D(r) && r.getStyle() !== n.style) && E(e, jn, Pj);
    }
  });
}
function wa(t, e) {
  var n = t._compositionKey;
  if (ie(null), n !== null && e != null) {
    if (e === "") {
      e = he(n), t = hr(t.getElementByKey(n)), t !== null && t.nodeValue !== null && D(e) && Is(e, t.nodeValue, null, null, !0);
      return;
    }
    if (e[e.length - 1] === `
` && (n = W(), R(n))) {
      e = n.focus, n.anchor.set(e.key, e.offset, e.type), E(t, mr, null);
      return;
    }
  }
  zs(!0, t, e);
}
function nx(t, e) {
  wt ? ro = !0 : Oe(e, () => {
    wa(e, t.data);
  });
}
function ox(t, e) {
  if ($o = t.timeStamp, Rp = t.keyCode, !e.isComposing()) {
    var { keyCode: n, shiftKey: o, ctrlKey: r, metaKey: i, altKey: a } = t;
    if (!E(e, Yd, t)) {
      if (n !== 39 || r || i || a)
        if (n !== 39 || a || o || !r && !i)
          if (n !== 37 || r || i || a)
            if (n !== 37 || a || o || !r && !i)
              if (n !== 38 || r || i)
                if (n !== 40 || r || i)
                  if (n === 13 && o)
                    ho = !0, E(e, mr, t);
                  else if (n === 32)
                    E(e, op, t);
                  else if (fe && r && n === 79)
                    t.preventDefault(), ho = !0, E(e, po, !0);
                  else if (n !== 13 || o) {
                    var s = fe ? a || i ? !1 : n === 8 || n === 72 && r : r || a || i ? !1 : n === 8;
                    s ? n === 8 ? E(e, rp, t) : (t.preventDefault(), E(e, bn, !0)) : n === 27 ? E(
                      e,
                      ip,
                      t
                    ) : (s = fe ? o || a || i ? !1 : n === 46 || n === 68 && r : r || a || i ? !1 : n === 46, s ? n === 46 ? E(e, ap, t) : (t.preventDefault(), E(e, bn, !1)) : n === 8 && (fe ? a : r) ? (t.preventDefault(), E(e, wo, !0)) : n === 46 && (fe ? a : r) ? (t.preventDefault(), E(e, wo, !1)) : fe && i && n === 8 ? (t.preventDefault(), E(e, _o, !0)) : fe && i && n === 46 ? (t.preventDefault(), E(e, _o, !1)) : n === 66 && !a && (fe ? i : r) ? (t.preventDefault(), E(e, vt, "bold")) : n === 85 && !a && (fe ? i : r) ? (t.preventDefault(), E(e, vt, "underline")) : n === 73 && !a && (fe ? i : r) ? (t.preventDefault(), E(e, vt, "italic")) : n !== 9 || a || r || i ? n === 90 && !o && (fe ? i : r) ? (t.preventDefault(), E(e, xs, void 0)) : (s = fe ? n === 90 && i && o : n === 89 && r || n === 90 && r && o, s ? (t.preventDefault(), E(e, ws, void 0)) : Uo(e._editorState._selection) ? (s = o ? !1 : n === 67 ? fe ? i : r : !1, s ? (t.preventDefault(), E(e, _s, t)) : (s = o ? !1 : n === 88 ? fe ? i : r : !1, s ? (t.preventDefault(), E(e, Ss, t)) : n === 65 && (fe ? i : r) && (t.preventDefault(), E(e, la, t)))) : !wt && n === 65 && (fe ? i : r) && (t.preventDefault(), E(e, la, t))) : E(e, sp, t));
                  } else
                    ho = !1, E(e, mr, t);
                else
                  E(e, np, t);
              else
                E(e, tp, t);
            else
              E(e, ep, t);
          else
            E(e, Zd, t);
        else
          E(e, Qd, t);
      else
        E(e, Xd, t);
      (r || o || a || i) && E(e, fp, t);
    }
  }
}
function Lp(t) {
  let e = t.__lexicalEventHandles;
  return e === void 0 && (e = [], t.__lexicalEventHandles = e), e;
}
let xn = /* @__PURE__ */ new Map();
function qp(t) {
  var e = t.target;
  let n = tt(e == null ? null : e.nodeType === 9 ? e.defaultView : e.ownerDocument.defaultView);
  if (n !== null) {
    var o = Os(n.anchorNode);
    if (o !== null) {
      xa && (xa = !1, Oe(o, () => {
        var s = Hn(), u = n.anchorNode;
        u !== null && (u = u.nodeType, u === 1 || u === 3) && (s = Ps(s, n, o, t), Xe(s));
      })), e = Ds(o), e = e[e.length - 1];
      var r = e._key, i = xn.get(r), a = i || e;
      a !== o && fu(n, a, !1), fu(n, o, !0), o !== e ? xn.set(r, o) : i && xn.delete(r);
    }
  }
}
function rx(t, e) {
  fo === 0 && t.ownerDocument.addEventListener("selectionchange", qp), fo++, t.__lexicalEditor = e;
  let n = Lp(t);
  for (let o = 0; o < ba.length; o++) {
    let [r, i] = ba[o], a = typeof i == "function" ? (s) => {
      s._lexicalHandled !== !0 && (s._lexicalHandled = !0, e.isEditable() && i(s, e));
    } : (s) => {
      if (s._lexicalHandled !== !0 && (s._lexicalHandled = !0, e.isEditable()))
        switch (r) {
          case "cut":
            return E(e, Ss, s);
          case "copy":
            return E(e, _s, s);
          case "paste":
            return E(e, js, s);
          case "dragstart":
            return E(e, up, s);
          case "dragover":
            return E(e, cp, s);
          case "dragend":
            return E(
              e,
              dp,
              s
            );
          case "focus":
            return E(e, pp, s);
          case "blur":
            return E(e, mp, s);
          case "drop":
            return E(e, lp, s);
        }
    };
    t.addEventListener(r, a), n.push(() => {
      t.removeEventListener(r, a);
    });
  }
}
function _a(t, e, n) {
  je();
  var o = t.__key;
  let r = t.getParent();
  if (r !== null) {
    var i = W();
    if (R(i) && S(t)) {
      var { anchor: a, focus: s } = i, u = a.getNode(), c = s.getNode();
      kr(u, t) && a.set(t.__key, 0, "element"), kr(c, t) && s.set(t.__key, 0, "element");
    }
    if (u = i, c = !1, R(u) && e) {
      i = u.anchor;
      let d = u.focus;
      i.key === o && (xr(i, t, r, t.getPreviousSibling(), t.getNextSibling()), c = !0), d.key === o && (xr(d, t, r, t.getPreviousSibling(), t.getNextSibling()), c = !0);
    } else
      Uo(u) && e && t.isSelected() && t.selectPrevious();
    R(u) && e && !c ? (o = t.getIndexWithinParent(), Wt(t), jr(u, r, o, -1)) : Wt(t), n || _t(r) || r.canBeEmpty() || !r.isEmpty() || _a(r, e), e && Te(r) && r.isEmpty() && r.selectEnd();
  }
}
class ti {
  static getType() {
    O(64, this.name);
  }
  static clone() {
    O(65, this.name);
  }
  constructor(e) {
    this.__type = this.constructor.getType(), this.__next = this.__prev = this.__parent = null, bp(this, e);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    O(137, this.constructor.name);
  }
  isAttached() {
    for (var e = this.__key; e !== null; ) {
      if (e === "root")
        return !0;
      if (e = he(e), e === null)
        break;
      e = e.__parent;
    }
    return !1;
  }
  isSelected(e) {
    if (e = e || W(), e == null)
      return !1;
    let n = e.getNodes().some((o) => o.__key === this.__key);
    return D(this) ? n : R(e) && e.anchor.type === "element" && e.focus.type === "element" && e.anchor.key === e.focus.key && e.anchor.offset === e.focus.offset ? !1 : n;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    var e = this.getParent();
    if (e === null)
      return -1;
    e = e.getFirstChild();
    let n = 0;
    for (; e !== null; ) {
      if (this.is(e))
        return n;
      n++, e = e.getNextSibling();
    }
    return -1;
  }
  getParent() {
    let e = this.getLatest().__parent;
    return e === null ? null : he(e);
  }
  getParentOrThrow() {
    let e = this.getParent();
    return e === null && O(66, this.__key), e;
  }
  getTopLevelElement() {
    let e = this;
    for (; e !== null; ) {
      let n = e.getParent();
      if (_t(n))
        return S(e) || O(138), e;
      e = n;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    let e = this.getTopLevelElement();
    return e === null && O(67, this.__key), e;
  }
  getParents() {
    let e = [], n = this.getParent();
    for (; n !== null; )
      e.push(n), n = n.getParent();
    return e;
  }
  getParentKeys() {
    let e = [], n = this.getParent();
    for (; n !== null; )
      e.push(n.__key), n = n.getParent();
    return e;
  }
  getPreviousSibling() {
    let e = this.getLatest().__prev;
    return e === null ? null : he(e);
  }
  getPreviousSiblings() {
    let e = [];
    var n = this.getParent();
    if (n === null)
      return e;
    for (n = n.getFirstChild(); n !== null && !n.is(this); )
      e.push(n), n = n.getNextSibling();
    return e;
  }
  getNextSibling() {
    let e = this.getLatest().__next;
    return e === null ? null : he(e);
  }
  getNextSiblings() {
    let e = [], n = this.getNextSibling();
    for (; n !== null; )
      e.push(n), n = n.getNextSibling();
    return e;
  }
  getCommonAncestor(e) {
    let n = this.getParents();
    var o = e.getParents();
    S(this) && n.unshift(this), S(e) && o.unshift(e), e = n.length;
    var r = o.length;
    if (e === 0 || r === 0 || n[e - 1] !== o[r - 1])
      return null;
    for (o = new Set(o), r = 0; r < e; r++) {
      let i = n[r];
      if (o.has(i))
        return i;
    }
    return null;
  }
  is(e) {
    return e == null ? !1 : this.__key === e.__key;
  }
  isBefore(e) {
    if (this === e)
      return !1;
    if (e.isParentOf(this))
      return !0;
    if (this.isParentOf(e))
      return !1;
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
    if (n === e.__key)
      return !1;
    for (; e !== null; ) {
      if (e.__key === n)
        return !0;
      e = e.getParent();
    }
    return !1;
  }
  getNodesBetween(e) {
    let n = this.isBefore(e), o = [], r = /* @__PURE__ */ new Set();
    for (var i = this; ; ) {
      var a = i.__key;
      if (r.has(a) || (r.add(a), o.push(i)), i === e)
        break;
      if (a = S(i) ? n ? i.getFirstChild() : i.getLastChild() : null, a !== null)
        i = a;
      else if (a = n ? i.getNextSibling() : i.getPreviousSibling(), a !== null)
        i = a;
      else {
        if (i = i.getParentOrThrow(), r.has(i.__key) || o.push(i), i === e)
          break;
        a = i;
        do
          a === null && O(68), i = n ? a.getNextSibling() : a.getPreviousSibling(), a = a.getParent(), a !== null && (i !== null || r.has(a.__key) || o.push(a));
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
    let e = he(this.__key);
    return e === null && O(113), e;
  }
  getWritable() {
    je();
    var e = nt(), n = J();
    e = e._nodeMap;
    let o = this.__key, r = this.getLatest(), i = r.__parent;
    n = n._cloneNotNeeded;
    var a = W();
    return a !== null && a.setCachedNodes(null), n.has(o) ? (gr(r), r) : (a = r.constructor.clone(r), a.__parent = i, a.__next = r.__next, a.__prev = r.__prev, S(r) && S(a) ? (a.__first = r.__first, a.__last = r.__last, a.__size = r.__size, a.__indent = r.__indent, a.__format = r.__format, a.__dir = r.__dir) : D(r) && D(a) && (a.__format = r.__format, a.__style = r.__style, a.__mode = r.__mode, a.__detail = r.__detail), n.add(o), a.__key = o, gr(a), e.set(o, a), a);
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM() {
    O(70);
  }
  updateDOM() {
    O(71);
  }
  exportDOM(e) {
    return { element: this.createDOM(e._config, e) };
  }
  exportJSON() {
    O(72);
  }
  static importJSON() {
    O(18, this.name);
  }
  static transform() {
    return null;
  }
  remove(e) {
    _a(this, !0, e);
  }
  replace(e, n) {
    je();
    var o = W();
    o !== null && (o = o.clone()), Ii(this, e);
    let r = this.getLatest(), i = this.__key, a = e.__key, s = e.getWritable();
    e = this.getParentOrThrow().getWritable();
    let u = e.__size;
    Wt(s);
    let c = r.getPreviousSibling(), d = r.getNextSibling(), p = r.__prev, f = r.__next, m = r.__parent;
    return _a(r, !1, !0), c === null ? e.__first = a : c.getWritable().__next = a, s.__prev = p, d === null ? e.__last = a : d.getWritable().__prev = a, s.__next = f, s.__parent = m, e.__size = u, n && (S(this) && S(s) || O(139), this.getChildren().forEach((y) => {
      s.append(y);
    })), R(o) && (Xe(o), n = o.anchor, o = o.focus, n.key === i && vu(n, s), o.key === i && vu(o, s)), kt() === i && ie(a), s;
  }
  insertAfter(e, n = !0) {
    je(), Ii(this, e);
    var o = this.getWritable();
    let r = e.getWritable();
    var i = r.getParent();
    let a = W();
    var s = !1, u = !1;
    if (i !== null) {
      var c = e.getIndexWithinParent();
      Wt(r), R(a) && (u = i.__key, s = a.anchor, i = a.focus, s = s.type === "element" && s.key === u && s.offset === c + 1, u = i.type === "element" && i.key === u && i.offset === c + 1);
    }
    i = this.getNextSibling(), c = this.getParentOrThrow().getWritable();
    let d = r.__key, p = o.__next;
    return i === null ? c.__last = d : i.getWritable().__prev = d, c.__size++, o.__next = d, r.__next = p, r.__prev = o.__key, r.__parent = o.__parent, n && R(a) && (n = this.getIndexWithinParent(), jr(a, c, n + 1), o = c.__key, s && a.anchor.set(o, n + 2, "element"), u && a.focus.set(o, n + 2, "element")), e;
  }
  insertBefore(e, n = !0) {
    je(), Ii(this, e);
    var o = this.getWritable();
    let r = e.getWritable(), i = r.__key;
    Wt(r);
    let a = this.getPreviousSibling(), s = this.getParentOrThrow().getWritable(), u = o.__prev, c = this.getIndexWithinParent();
    return a === null ? s.__first = i : a.getWritable().__next = i, s.__size++, o.__prev = i, r.__prev = u, r.__next = o.__key, r.__parent = o.__parent, o = W(), n && R(o) && (n = this.getParentOrThrow(), jr(
      o,
      n,
      c
    )), e;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return st();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(e, n) {
    je();
    let o = this.getPreviousSibling(), r = this.getParentOrThrow();
    return o === null ? r.select(0, 0) : S(o) ? o.select() : D(o) ? o.select(e, n) : (e = o.getIndexWithinParent() + 1, r.select(e, e));
  }
  selectNext(e, n) {
    je();
    let o = this.getNextSibling(), r = this.getParentOrThrow();
    return o === null ? r.select() : S(o) ? o.select(0, 0) : D(o) ? o.select(e, n) : (e = o.getIndexWithinParent(), r.select(e, e));
  }
  markDirty() {
    this.getWritable();
  }
}
function ix(t, e, n) {
  n = n || e.getParentOrThrow().getLastChild();
  let o = e;
  for (e = [e]; o !== n; )
    o.getNextSibling() || O(140), o = o.getNextSibling(), e.push(o);
  for (let r of e)
    t = t.insertAfter(r);
}
class qn extends ti {
  static getType() {
    return "linebreak";
  }
  static clone(e) {
    return new qn(e.__key);
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
          if ((o === e || o.nextSibling === e && hu(o)) && (n = n.lastChild, n === e || n.previousSibling === e && hu(n))) {
            e = !0;
            break e;
          }
        }
        e = !1;
      }
      return e ? null : { conversion: ax, priority: 0 };
    } };
  }
  static importJSON() {
    return Tn();
  }
  exportJSON() {
    return {
      type: "linebreak",
      version: 1
    };
  }
}
function ax() {
  return { node: Tn() };
}
function Tn() {
  return Ho(new qn());
}
function Yt(t) {
  return t instanceof qn;
}
function hu(t) {
  return t.nodeType === 3 && /^( |\t|\r?\n)+$/.test(t.textContent || "");
}
function Ai(t, e) {
  return e & 16 ? "code" : e & 128 ? "mark" : e & 32 ? "sub" : e & 64 ? "sup" : null;
}
function Mi(t, e) {
  return e & 1 ? "strong" : e & 2 ? "em" : "span";
}
function Fi(t, e, n, o, r) {
  t = o.classList, o = mo(r, "base"), o !== void 0 && t.add(...o), o = mo(r, "underlineStrikethrough");
  let i = !1, a = e & 8 && e & 4;
  var s = n & 8 && n & 4;
  o !== void 0 && (s ? (i = !0, a || t.add(...o)) : a && t.remove(...o));
  for (let u in jt)
    s = jt[u], o = mo(r, u), o !== void 0 && (n & s ? !i || u !== "underline" && u !== "strikethrough" ? (!(e & s) || a && u === "underline" || u === "strikethrough") && t.add(...o) : e & s && t.remove(...o) : e & s && t.remove(...o));
}
function Li(t, e, n) {
  let o = e.firstChild;
  if (n = n.isComposing(), t += n ? Yr : "", o == null)
    e.textContent = t;
  else if (e = o.nodeValue, e !== t)
    if (n || wt) {
      n = e.length;
      let r = t.length, i = 0, a = 0;
      for (; i < n && i < r && e[i] === t[i]; )
        i++;
      for (; a + i < n && a + i < r && e[n - a - 1] === t[r - a - 1]; )
        a++;
      t = [i, n - i - a, t.slice(i, r - a)];
      let [s, u, c] = t;
      u !== 0 && o.deleteData(s, u), o.insertData(s, c);
    } else
      o.nodeValue = t;
}
function Zo(t, e) {
  return e = document.createElement(e), e.appendChild(t), e;
}
class nn extends ti {
  static getType() {
    return "text";
  }
  static clone(e) {
    return new nn(e.__text, e.__key);
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
    return Bj[e.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === kt();
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
    return e = jt[e], (this.getFormat() & e) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(e, n) {
    let o = this.getLatest().__format;
    return da(o, e, n);
  }
  canHaveFormat() {
    return !0;
  }
  createDOM(e) {
    var n = this.__format, o = Ai(this, n);
    let r = Mi(this, n), i = document.createElement(o === null ? r : o), a = i;
    return this.hasFormat("code") && i.setAttribute("spellcheck", "false"), o !== null && (a = document.createElement(r), i.appendChild(a)), o = a, Li(this.__text, o, this), e = e.theme.text, e !== void 0 && Fi(r, 0, n, o, e), n = this.__style, n !== "" && (i.style.cssText = n), i;
  }
  updateDOM(e, n, o) {
    let r = this.__text;
    var i = e.__format, a = this.__format, s = Ai(this, i);
    let u = Ai(this, a);
    var c = Mi(this, i);
    let d = Mi(this, a);
    return (s === null ? c : s) !== (u === null ? d : u) ? !0 : s === u && c !== d ? (i = n.firstChild, i == null && O(48), e = s = document.createElement(d), Li(r, e, this), o = o.theme.text, o !== void 0 && Fi(d, 0, a, e, o), n.replaceChild(
      s,
      i
    ), !1) : (c = n, u !== null && s !== null && (c = n.firstChild, c == null && O(49)), Li(r, c, this), o = o.theme.text, o !== void 0 && i !== a && Fi(d, i, a, c, o), a = this.__style, e.__style !== a && (n.style.cssText = a), !1);
  }
  static importDOM() {
    return {
      "#text": () => ({ conversion: ux, priority: 0 }),
      b: () => ({ conversion: lx, priority: 0 }),
      code: () => ({ conversion: ft, priority: 0 }),
      em: () => ({ conversion: ft, priority: 0 }),
      i: () => ({ conversion: ft, priority: 0 }),
      s: () => ({ conversion: ft, priority: 0 }),
      span: () => ({ conversion: sx, priority: 0 }),
      strong: () => ({ conversion: ft, priority: 0 }),
      sub: () => ({ conversion: ft, priority: 0 }),
      sup: () => ({ conversion: ft, priority: 0 }),
      u: () => ({ conversion: ft, priority: 0 })
    };
  }
  static importJSON(e) {
    let n = de(e.text);
    return n.setFormat(e.format), n.setDetail(e.detail), n.setMode(e.mode), n.setStyle(e.style), n;
  }
  exportDOM(e) {
    return { element: e } = super.exportDOM(e), e !== null && Zr(e) || O(132), e.style.whiteSpace = "pre-wrap", this.hasFormat("bold") && (e = Zo(e, "b")), this.hasFormat("italic") && (e = Zo(e, "i")), this.hasFormat("strikethrough") && (e = Zo(e, "s")), this.hasFormat("underline") && (e = Zo(e, "u")), { element: e };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), type: "text", version: 1 };
  }
  selectionTransform() {
  }
  setFormat(e) {
    let n = this.getWritable();
    return n.__format = typeof e == "string" ? jt[e] : e, n;
  }
  setDetail(e) {
    let n = this.getWritable();
    return n.__detail = typeof e == "string" ? Fj[e] : e, n;
  }
  setStyle(e) {
    let n = this.getWritable();
    return n.__style = e, n;
  }
  toggleFormat(e) {
    let n = this.getFormat();
    return e = da(n, e, null), this.setFormat(e);
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
    if (e = qj[e], this.__mode === e)
      return this;
    let n = this.getWritable();
    return n.__mode = e, n;
  }
  setTextContent(e) {
    if (this.__text === e)
      return this;
    let n = this.getWritable();
    return n.__text = e, n;
  }
  select(e, n) {
    je();
    let o = W();
    var r = this.getTextContent();
    let i = this.__key;
    if (typeof r == "string" ? (r = r.length, e === void 0 && (e = r), n === void 0 && (n = r)) : n = e = 0, R(o))
      r = kt(), r !== o.anchor.key && r !== o.focus.key || ie(i), o.setTextNodeRange(
        this,
        e,
        this,
        n
      );
    else
      return Vp(i, e, i, n, "text", "text");
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
    let i = this.getWritable(), a = i.__text, s = o.length, u = e;
    0 > u && (u = s + u, 0 > u && (u = 0));
    let c = W();
    return r && R(c) && (e += s, c.setTextNodeRange(i, e, i, e)), n = a.slice(0, u) + o + a.slice(u + n), i.__text = n, i;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...e) {
    je();
    var n = this.getLatest(), o = n.getTextContent(), r = n.__key, i = kt(), a = new Set(e);
    e = [];
    for (var s = o.length, u = "", c = 0; c < s; c++)
      u !== "" && a.has(c) && (e.push(u), u = ""), u += o[c];
    if (u !== "" && e.push(u), a = e.length, a === 0)
      return [];
    if (e[0] === o)
      return [n];
    var d = e[0];
    o = n.getParentOrThrow(), c = n.getFormat();
    let p = n.getStyle(), f = n.__detail;
    s = !1, n.isSegmented() ? (u = de(d), u.__format = c, u.__style = p, u.__detail = f, s = !0) : (u = n.getWritable(), u.__text = d), n = W(), u = [u], d = d.length;
    for (let g = 1; g < a; g++) {
      var m = e[g], y = m.length;
      m = de(m).getWritable(), m.__format = c, m.__style = p, m.__detail = f;
      let k = m.__key;
      if (y = d + y, R(n)) {
        let b = n.anchor, _ = n.focus;
        b.key === r && b.type === "text" && b.offset > d && b.offset <= y && (b.key = k, b.offset -= d, n.dirty = !0), _.key === r && _.type === "text" && _.offset > d && _.offset <= y && (_.key = k, _.offset -= d, n.dirty = !0);
      }
      i === r && ie(k), d = y, u.push(m);
    }
    return r = this.getPreviousSibling(), i = this.getNextSibling(), r !== null && gr(r), i !== null && gr(i), r = o.getWritable(), i = this.getIndexWithinParent(), s ? (r.splice(i, 0, u), this.remove()) : r.splice(i, 1, u), R(n) && jr(n, o, i, a - 1), u;
  }
  mergeWithSibling(e) {
    var n = e === this.getPreviousSibling();
    n || e === this.getNextSibling() || O(50);
    var o = this.__key;
    let r = e.__key, i = this.__text, a = i.length;
    kt() === r && ie(o);
    let s = W();
    if (R(s)) {
      let u = s.anchor, c = s.focus;
      u !== null && u.key === r && (Su(u, n, o, e, a), s.dirty = !0), c !== null && c.key === r && (Su(c, n, o, e, a), s.dirty = !0);
    }
    return o = e.__text, this.setTextContent(n ? o + i : i + o), n = this.getWritable(), e.remove(), n;
  }
  isTextEntity() {
    return !1;
  }
}
function sx(t) {
  let e = t.style.fontWeight === "700", n = t.style.textDecoration === "line-through", o = t.style.fontStyle === "italic", r = t.style.textDecoration === "underline", i = t.style.verticalAlign;
  return { forChild: (a) => (D(a) && (e && a.toggleFormat("bold"), n && a.toggleFormat("strikethrough"), o && a.toggleFormat("italic"), r && a.toggleFormat("underline"), i === "sub" && a.toggleFormat("subscript"), i === "super" && a.toggleFormat("superscript")), a), node: null };
}
function lx(t) {
  let e = t.style.fontWeight === "normal";
  return { forChild: (n) => (D(n) && !e && n.toggleFormat("bold"), n), node: null };
}
let gu = /* @__PURE__ */ new WeakMap();
function ux(t) {
  t.parentElement === null && O(129);
  for (var e = t.textContent || "", n, o = t.parentNode, r = [t]; o !== null && (n = gu.get(o)) === void 0 && !(o.nodeName === "PRE" || o.nodeType === 1 && o.style !== void 0 && o.style.whiteSpace !== void 0 && o.style.whiteSpace.startsWith("pre")); )
    r.push(o), o = o.parentNode;
  for (n = n === void 0 ? o : n, o = 0; o < r.length; o++)
    gu.set(r[o], n);
  if (n !== null) {
    for (e = e.split(/(\r?\n|\t)/), t = [], r = e.length, n = 0; n < r; n++)
      o = e[n], o === `
` || o === `\r
` ? t.push(Tn()) : o === "	" ? t.push(ni()) : o !== "" && t.push(de(o));
    return { node: t };
  }
  if (e = e.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), e === "")
    return { node: null };
  if (e[0] === " ") {
    for (r = t, n = !0; r !== null && (r = yu(r, !1)) !== null; )
      if (o = r.textContent || "", 0 < o.length) {
        /[ \t\n]$/.test(o) && (e = e.slice(1)), n = !1;
        break;
      }
    n && (e = e.slice(1));
  }
  if (e[e.length - 1] === " ") {
    for (r = !0; t !== null && (t = yu(t, !0)) !== null; )
      if (0 < (t.textContent || "").replace(/^( |\t|\r?\n)+/, "").length) {
        r = !1;
        break;
      }
    r && (e = e.slice(0, e.length - 1));
  }
  return e === "" ? { node: null } : { node: de(e) };
}
let cx = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i");
function yu(t, e) {
  for (; ; ) {
    for (var n = void 0; (n = e ? t.nextSibling : t.previousSibling) === null; )
      if (t = t.parentElement, t === null)
        return null;
    if (t = n, t.nodeType === 1 && (n = t.style.display, n === "" && t.nodeName.match(cx) === null || n !== "" && !n.startsWith("inline")))
      return null;
    for (; (n = e ? t.firstChild : t.lastChild) !== null; )
      t = n;
    if (t.nodeType === 3)
      return t;
    if (t.nodeName === "BR")
      return null;
  }
}
let dx = { code: "code", em: "italic", i: "italic", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function ft(t) {
  let e = dx[t.nodeName.toLowerCase()];
  return e === void 0 ? { node: null } : { forChild: (n) => (D(n) && !n.hasFormat(e) && n.toggleFormat(e), n), node: null };
}
function de(t = "") {
  return Ho(new nn(t));
}
function D(t) {
  return t instanceof nn;
}
class Bn extends nn {
  static getType() {
    return "tab";
  }
  static clone(e) {
    let n = new Bn(e.__key);
    return n.__text = e.__text, n.__format = e.__format, n.__style = e.__style, n;
  }
  constructor(e) {
    super("	", e), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    let n = ni();
    return n.setFormat(e.format), n.setStyle(e.style), n;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "tab", version: 1 };
  }
  setTextContent() {
    O(126);
  }
  setDetail() {
    O(127);
  }
  setMode() {
    O(128);
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ni() {
  return Ho(new Bn());
}
function Bp(t) {
  return t instanceof Bn;
}
class px {
  constructor(e, n, o) {
    this._selection = null, this.key = e, this.offset = n, this.type = o;
  }
  is(e) {
    return this.key === e.key && this.offset === e.offset && this.type === e.type;
  }
  isBefore(e) {
    let n = this.getNode(), o = e.getNode(), r = this.offset;
    if (e = e.offset, S(n)) {
      var i = n.getDescendantByIndex(r);
      n = i ?? n;
    }
    return S(o) && (i = o.getDescendantByIndex(e), o = i ?? o), n === o ? r < e : n.isBefore(o);
  }
  getNode() {
    let e = he(this.key);
    return e === null && O(20), e;
  }
  set(e, n, o) {
    let r = this._selection, i = this.key;
    this.key = e, this.offset = n, this.type = o, Un() || (kt() === i && ie(e), r !== null && (r.setCachedNodes(null), r.dirty = !0));
  }
}
function Be(t, e, n) {
  return new px(t, e, n);
}
function qi(t, e) {
  let n = e.__key, o = t.offset, r = "element";
  if (D(e))
    r = "text", e = e.getTextContentSize(), o > e && (o = e);
  else if (!S(e)) {
    var i = e.getNextSibling();
    D(i) ? (n = i.__key, o = 0, r = "text") : (i = e.getParent()) && (n = i.__key, o = e.getIndexWithinParent() + 1);
  }
  t.set(n, o, r);
}
function vu(t, e) {
  if (S(e)) {
    let n = e.getLastDescendant();
    S(n) || D(n) ? qi(t, n) : qi(t, e);
  } else
    qi(t, e);
}
function ku(t, e, n, o) {
  let r = t.getNode(), i = r.getChildAtIndex(t.offset), a = de(), s = Te(r) ? st().append(a) : a;
  a.setFormat(n), a.setStyle(o), i === null ? r.append(s) : i.insertBefore(s), t.is(e) && e.set(a.__key, 0, "text"), t.set(a.__key, 0, "text");
}
function gt(t, e, n, o) {
  t.key = e, t.offset = n, t.type = o;
}
class oi {
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
    if (!Uo(e))
      return !1;
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
    return new oi(new Set(this._nodes));
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
    if (D(r))
      r = r.select();
    else {
      let i = r.getIndexWithinParent() + 1;
      r = r.getParentOrThrow().select(i, i);
    }
    for (r.insertNodes(e), e = 0; e < o; e++)
      n[e].remove();
  }
  getNodes() {
    var e = this._cachedNodes;
    if (e !== null)
      return e;
    var n = this._nodes;
    e = [];
    for (let o of n)
      n = he(o), n !== null && e.push(n);
    return Un() || (this._cachedNodes = e), e;
  }
  getTextContent() {
    let e = this.getNodes(), n = "";
    for (let o = 0; o < e.length; o++)
      n += e[o].getTextContent();
    return n;
  }
}
function R(t) {
  return t instanceof Rt;
}
class Rt {
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
    return R(e) ? this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style : !1;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    var e = this._cachedNodes;
    if (e !== null)
      return e;
    e = this.anchor;
    var n = this.focus, o = e.isBefore(n), r = o ? e : n;
    o = o ? n : e, e = r.getNode(), n = o.getNode();
    let i = r.offset;
    return r = o.offset, S(e) && (o = e.getDescendantByIndex(i), e = o ?? e), S(n) && (o = n.getDescendantByIndex(r), o !== null && o !== e && n.getChildAtIndex(r) === o && (o = o.getPreviousSibling()), n = o ?? n), e = e.is(n) ? S(e) && 0 < e.getChildrenSize() ? [] : [e] : e.getNodesBetween(n), Un() || (this._cachedNodes = e), e;
  }
  setTextNodeRange(e, n, o, r) {
    gt(this.anchor, e.__key, n, "text"), gt(this.focus, o.__key, r, "text"), this._cachedNodes = null, this.dirty = !0;
  }
  getTextContent() {
    let e = this.getNodes();
    if (e.length === 0)
      return "";
    let n = e[0], o = e[e.length - 1], r = this.anchor, i = this.focus, a = r.isBefore(i), [s, u] = Sa(this), c = "", d = !0;
    for (let p = 0; p < e.length; p++) {
      let f = e[p];
      if (S(f) && !f.isInline())
        d || (c += `
`), d = !f.isEmpty();
      else if (d = !1, D(f)) {
        let m = f.getTextContent();
        f === n ? f === o ? (r.type !== "element" || i.type !== "element" || i.offset === r.offset) && (m = s < u ? m.slice(s, u) : m.slice(u, s)) : m = a ? m.slice(s) : m.slice(u) : f === o && (m = a ? m.slice(0, u) : m.slice(0, s)), c += m;
      } else
        !Z(f) && !Yt(f) || f === o && this.isCollapsed() || (c += f.getTextContent());
    }
    return c;
  }
  applyDOMRange(e) {
    let n = J(), o = n.getEditorState()._selection;
    if (e = Up(e.startContainer, e.startOffset, e.endContainer, e.endOffset, n, o), e !== null) {
      var [r, i] = e;
      gt(this.anchor, r.key, r.offset, r.type), gt(this.focus, i.key, i.offset, i.type), this._cachedNodes = null;
    }
  }
  clone() {
    let e = this.anchor, n = this.focus;
    return new Rt(Be(e.key, e.offset, e.type), Be(n.key, n.offset, n.type), this.format, this.style);
  }
  toggleFormat(e) {
    this.format = da(this.format, e, null), this.dirty = !0;
  }
  setStyle(e) {
    this.style = e, this.dirty = !0;
  }
  hasFormat(e) {
    return (this.format & jt[e]) !== 0;
  }
  insertRawText(e) {
    e = e.split(/(\r?\n|\t)/);
    let n = [], o = e.length;
    for (let r = 0; r < o; r++) {
      let i = e[r];
      i === `
` || i === `\r
` ? n.push(Tn()) : i === "	" ? n.push(ni()) : n.push(de(i));
    }
    this.insertNodes(n);
  }
  insertText(e) {
    var n = this.anchor, o = this.focus, r = this.isCollapsed() || n.isBefore(o), i = this.format, a = this.style;
    r && n.type === "element" ? ku(n, o, i, a) : r || o.type !== "element" || ku(o, n, i, a);
    var s = this.getNodes(), u = s.length, c = r ? o : n;
    o = (r ? n : o).offset;
    var d = c.offset;
    n = s[0], D(n) || O(26), r = n.getTextContent().length;
    var p = n.getParentOrThrow(), f = s[u - 1];
    if (this.isCollapsed() && o === r && (n.isSegmented() || n.isToken() || !n.canInsertTextAfter() || !p.canInsertTextAfter() && n.getNextSibling() === null)) {
      var m = n.getNextSibling();
      if (D(m) && m.canInsertTextBefore() && !ca(m) || (m = de(), m.setFormat(i), p.canInsertTextAfter() ? n.insertAfter(m) : p.insertAfter(m)), m.select(0, 0), n = m, e !== "") {
        this.insertText(e);
        return;
      }
    } else if (this.isCollapsed() && o === 0 && (n.isSegmented() || n.isToken() || !n.canInsertTextBefore() || !p.canInsertTextBefore() && n.getPreviousSibling() === null)) {
      if (m = n.getPreviousSibling(), (!D(m) || ca(m)) && (m = de(), m.setFormat(i), p.canInsertTextBefore() ? n.insertBefore(m) : p.insertBefore(m)), m.select(), n = m, e !== "") {
        this.insertText(e);
        return;
      }
    } else if (n.isSegmented() && o !== r)
      p = de(n.getTextContent()), p.setFormat(i), n.replace(p), n = p;
    else if (!(this.isCollapsed() || e === "" || (m = f.getParent(), p.canInsertTextBefore() && p.canInsertTextAfter() && (!S(m) || m.canInsertTextBefore() && m.canInsertTextAfter())))) {
      this.insertText(""), Hp(this.anchor, this.focus, null), this.insertText(e);
      return;
    }
    if (u === 1)
      if (n.isToken())
        e = de(e), e.select(), n.replace(e);
      else {
        if (s = n.getFormat(), u = n.getStyle(), o === d && (s !== i || u !== a))
          if (n.getTextContent() === "")
            n.setFormat(i), n.setStyle(a);
          else {
            s = de(e), s.setFormat(i), s.setStyle(a), s.select(), o === 0 ? n.insertBefore(s, !1) : ([u] = n.splitText(o), u.insertAfter(s, !1)), s.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length);
            return;
          }
        else if (Bp(n)) {
          e = de(e), e.setFormat(i), e.setStyle(a), e.select(), n.replace(e);
          return;
        }
        n = n.spliceText(o, d - o, e, !0), n.getTextContent() === "" ? n.remove() : this.anchor.type === "text" && (n.isComposing() ? this.anchor.offset -= e.length : (this.format = s, this.style = u));
      }
    else {
      if (i = /* @__PURE__ */ new Set([...n.getParentKeys(), ...f.getParentKeys()]), m = S(n) ? n : n.getParentOrThrow(), a = S(f) ? f : f.getParentOrThrow(), p = f, !m.is(a) && a.isInline())
        do
          p = a, a = a.getParentOrThrow();
        while (a.isInline());
      if (c.type === "text" && (d !== 0 || f.getTextContent() === "") || c.type === "element" && f.getIndexWithinParent() < d)
        if (D(f) && !f.isToken() && d !== f.getTextContentSize()) {
          if (f.isSegmented()) {
            var y = de(f.getTextContent());
            f.replace(y), f = y;
          }
          Te(c.getNode()) || c.type !== "text" || (f = f.spliceText(0, d, "")), i.add(f.__key);
        } else
          c = f.getParentOrThrow(), c.canBeEmpty() || c.getChildrenSize() !== 1 ? f.remove() : c.remove();
      else
        i.add(f.__key);
      for (c = a.getChildren(), d = new Set(s), f = m.is(a), m = m.isInline() && n.getNextSibling() === null ? m : n, y = c.length - 1; 0 <= y; y--) {
        let g = c[y];
        if (g.is(n) || S(g) && g.isParentOf(n))
          break;
        g.isAttached() && (!d.has(g) || g.is(p) ? f || m.insertAfter(g, !1) : g.remove());
      }
      if (!f)
        for (c = a, a = null; c !== null; )
          d = c.getChildren(), f = d.length, (f === 0 || d[f - 1].is(a)) && (i.delete(c.__key), a = c), c = c.getParent();
      for (n.isToken() ? o === r ? n.select() : (e = de(e), e.select(), n.replace(e)) : (n = n.spliceText(o, r - o, e, !0), n.getTextContent() === "" ? n.remove() : n.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length)), e = 1; e < u; e++)
        n = s[e], i.has(n.__key) || n.remove();
    }
  }
  removeText() {
    this.insertText("");
  }
  formatText(e) {
    if (this.isCollapsed())
      this.toggleFormat(e), ie(null);
    else {
      var n = this.getNodes(), o = [];
      for (var r of n)
        D(r) && o.push(r);
      var i = o.length;
      if (i === 0)
        this.toggleFormat(e), ie(null);
      else {
        r = this.anchor;
        var a = this.focus, s = this.isBackward();
        n = s ? a : r, r = s ? r : a;
        var u = 0, c = o[0];
        if (a = n.type === "element" ? 0 : n.offset, n.type === "text" && a === c.getTextContentSize() && (u = 1, c = o[1], a = 0), c != null) {
          s = c.getFormatFlags(e, null);
          var d = i - 1, p = o[d];
          if (i = r.type === "text" ? r.offset : p.getTextContentSize(), c.is(p))
            a !== i && (a === 0 && i === c.getTextContentSize() ? c.setFormat(s) : (e = c.splitText(a, i), e = a === 0 ? e[0] : e[1], e.setFormat(s), n.type === "text" && n.set(e.__key, 0, "text"), r.type === "text" && r.set(e.__key, i - a, "text")), this.format = s);
          else {
            a !== 0 && ([, c] = c.splitText(a), a = 0), c.setFormat(s);
            var f = p.getFormatFlags(e, s);
            for (0 < i && (i !== p.getTextContentSize() && ([p] = p.splitText(i)), p.setFormat(f)), u += 1; u < d; u++) {
              let m = o[u];
              if (!m.isToken()) {
                let y = m.getFormatFlags(e, f);
                m.setFormat(y);
              }
            }
            n.type === "text" && n.set(c.__key, a, "text"), r.type === "text" && r.set(p.__key, i, "text"), this.format = s | f;
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
        return R(n) || O(134), n.insertNodes(e);
      }
      n = this.isBackward() ? this.focus : this.anchor;
      var o = Ri(n.getNode(), fn);
      if (n = e[e.length - 1], "__language" in o && S(o))
        if ("__language" in e[0])
          this.insertText(e[0].getTextContent());
        else {
          var r = Bi(this);
          o.splice(r, 0, e), n.selectEnd();
        }
      else if (e.some((s) => (S(s) || Z(s)) && !s.isInline())) {
        n = gx(e), e = n.getLastDescendant();
        var i = n.getChildren();
        n = S(o) && o.isEmpty() ? null : this.insertParagraph(), r = i[i.length - 1];
        var a = i[0];
        ((s) => S(s) && fn(s) && !s.isEmpty() && S(o) && (!o.isEmpty() || "__value" in o && "__checked" in o))(a) && (S(o) || O(135), o.append(...a.getChildren()), a = i[1]), a && ix(o, a), i = Ri(e, fn), n && S(i) && ("__value" in n && "__checked" in n || fn(r)) && (i.append(...n.getChildren()), n.remove()), S(o) && o.isEmpty() && o.remove(), e.selectEnd(), e = S(o) ? o.getLastChild() : null, Yt(e) && i !== o && e.remove();
      } else
        S(o) || O(135), r = Bi(this), o.splice(r, 0, e), n.selectEnd();
    }
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      var e = st();
      return Ee().splice(this.anchor.offset, 0, [e]), e.select(), e;
    }
    var n = Bi(this);
    return e = Ri(this.anchor.getNode(), fn), S(e) || O(136), n = (n = e.getChildAtIndex(n)) ? [n, ...n.getNextSiblings()] : [], (e = e.insertNewAfter(this, !1)) ? (e.append(...n), e.selectStart(), e) : null;
  }
  insertLineBreak(e) {
    var n = Tn();
    this.insertNodes([n]), e && (e = n.getParentOrThrow(), n = n.getIndexWithinParent(), e.select(n, n));
  }
  extract() {
    var e = this.getNodes(), n = e.length, o = n - 1, r = this.anchor;
    let i = this.focus;
    var a = e[0];
    let s = e[o], [u, c] = Sa(this);
    return n === 0 ? [] : n === 1 ? D(a) && !this.isCollapsed() ? (e = u > c ? c : u, o = a.splitText(e, u > c ? u : c), e = e === 0 ? o[0] : o[1], e != null ? [e] : []) : [a] : (n = r.isBefore(i), D(a) && (r = n ? u : c, r === a.getTextContentSize() ? e.shift() : r !== 0 && ([, a] = a.splitText(r), e[0] = a)), D(s) && (a = s.getTextContent().length, n = n ? c : u, n === 0 ? e.pop() : n !== a && ([s] = s.splitText(n), e[o] = s)), e);
  }
  modify(e, n, o) {
    var r = this.focus, i = this.anchor, a = e === "move", s = pa(r, n);
    if (Z(s) && !s.isIsolated())
      a && s.isKeyboardSelectable() ? (n = Ca(), n.add(s.__key), Xe(n)) : (e = n ? s.getPreviousSibling() : s.getNextSibling(), D(e) ? (s = e.__key, n = n ? e.getTextContent().length : 0, r.set(s, n, "text"), a && i.set(s, n, "text")) : (o = s.getParentOrThrow(), S(e) ? (o = e.__key, s = n ? e.getChildrenSize() : 0) : (s = s.getIndexWithinParent(), o = o.__key, n || s++), r.set(o, s, "element"), a && i.set(o, s, "element")));
    else if (i = J(), r = tt(i._window)) {
      var u = i._blockCursorElement, c = i._rootElement;
      if (c === null || u === null || !S(s) || s.isInline() || s.canBeEmpty() || ma(u, i, c), r.modify(e, n ? "backward" : "forward", o), 0 < r.rangeCount && (s = r.getRangeAt(0), i = this.anchor.getNode(), i = Te(i) ? i : Cp(i), this.applyDOMRange(s), this.dirty = !0, !a)) {
        for (a = this.getNodes(), e = [], o = !1, u = 0; u < a.length; u++)
          c = a[u], kr(c, i) ? e.push(c) : o = !0;
        o && 0 < e.length && (n ? (n = e[0], S(n) ? n.selectStart() : n.getParentOrThrow().selectStart()) : (n = e[e.length - 1], S(n) ? n.selectEnd() : n.getParentOrThrow().selectEnd())), (r.anchorNode !== s.startContainer || r.anchorOffset !== s.startOffset) && (n = this.focus, a = this.anchor, r = a.key, s = a.offset, i = a.type, gt(a, n.key, n.offset, n.type), gt(n, r, s, i), this._cachedNodes = null);
      }
    }
  }
  deleteCharacter(e) {
    let n = this.isCollapsed();
    if (this.isCollapsed()) {
      var o = this.anchor, r = this.focus, i = o.getNode();
      if (!e && (o.type === "element" && S(i) && o.offset === i.getChildrenSize() || o.type === "text" && o.offset === i.getTextContentSize())) {
        var a = i.getParent();
        if (a = i.getNextSibling() || (a === null ? null : a.getNextSibling()), S(a) && a.isShadowRoot())
          return;
      }
      if (a = pa(r, e), Z(a) && !a.isIsolated()) {
        a.isKeyboardSelectable() && S(i) && i.getChildrenSize() === 0 ? (i.remove(), e = Ca(), e.add(a.__key), Xe(e)) : (a.remove(), J().dispatchCommand(Gr, void 0));
        return;
      }
      if (!e && S(a) && S(i) && i.isEmpty()) {
        i.remove(), a.selectStart();
        return;
      }
      if (this.modify("extend", e, "character"), this.isCollapsed()) {
        if (e && o.offset === 0 && (o.type === "element" ? o.getNode() : o.getNode().getParentOrThrow()).collapseAtStart(this))
          return;
      } else {
        if (a = r.type === "text" ? r.getNode() : null, i = o.type === "text" ? o.getNode() : null, a !== null && a.isSegmented()) {
          if (o = r.offset, r = a.getTextContentSize(), a.is(i) || e && o !== r || !e && o !== 0) {
            ju(a, e, o);
            return;
          }
        } else if (i !== null && i.isSegmented() && (o = o.offset, r = i.getTextContentSize(), i.is(a) || e && o !== 0 || !e && o !== r)) {
          ju(i, e, o);
          return;
        }
        if (i = this.anchor, a = this.focus, o = i.getNode(), r = a.getNode(), o === r && i.type === "text" && a.type === "text") {
          var s = i.offset, u = a.offset;
          let c = s < u;
          r = c ? s : u, u = c ? u : s, s = u - 1, r !== s && (o = o.getTextContent().slice(r, u), wp(o) || (e ? a.offset = s : i.offset = s));
        }
      }
    }
    this.removeText(), e && !n && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0 && (e = this.anchor.getNode(), e.isEmpty() && Te(e.getParent()) && e.getIndexWithinParent() === 0 && e.collapseAtStart(this));
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
function Uo(t) {
  return t instanceof oi;
}
function bu(t) {
  let e = t.offset;
  return t.type === "text" ? e : (t = t.getNode(), e === t.getChildrenSize() ? t.getTextContent().length : 0);
}
function Sa(t) {
  if (t = t.getStartEndPoints(), t === null)
    return [0, 0];
  let [e, n] = t;
  return e.type === "element" && n.type === "element" && e.key === n.key && e.offset === n.offset ? [0, 0] : [bu(e), bu(n)];
}
function ju(t, e, n) {
  let o = t.getTextContent().split(/(?=\s)/g), r = o.length, i = 0, a = 0;
  for (let s = 0; s < r; s++) {
    let u = o[s], c = s === r - 1;
    if (a = i, i += u.length, e && i === n || i > n || c) {
      o.splice(s, 1), c && (a = void 0);
      break;
    }
  }
  e = o.join("").trim(), e === "" ? t.remove() : (t.setTextContent(e), t.select(a, a));
}
function xu(t, e, n, o) {
  var r = e;
  if (t.nodeType === 1) {
    let s = !1;
    var i = t.childNodes, a = i.length;
    r === a && (s = !0, r = a - 1);
    let u = i[r];
    if (a = !1, u === o._blockCursorElement ? (u = i[r + 1], a = !0) : o._blockCursorElement !== null && r--, o = gn(u), D(o))
      r = s ? o.getTextContentSize() : 0;
    else {
      if (i = gn(t), i === null)
        return null;
      if (S(i) ? (t = i.getChildAtIndex(r), (e = S(t)) && (e = t.getParent(), e = n === null || e === null || !e.canBeEmpty() || e !== n.getNode()), e && (n = s ? t.getLastDescendant() : t.getFirstDescendant(), n === null ? (i = t, r = 0) : (t = n, i = S(t) ? t : t.getParentOrThrow())), D(t) ? (o = t, i = null, r = s ? t.getTextContentSize() : 0) : t !== i && s && !a && r++) : (r = i.getIndexWithinParent(), r = e === 0 && Z(i) && gn(t) === i ? r : r + 1, i = i.getParentOrThrow()), S(i))
        return Be(i.__key, r, "element");
    }
  } else
    o = gn(t);
  return D(o) ? Be(o.__key, r, "text") : null;
}
function wu(t, e, n) {
  var o = t.offset, r = t.getNode();
  o === 0 ? (o = r.getPreviousSibling(), r = r.getParent(), e ? (n || !e) && o === null && S(r) && r.isInline() && (e = r.getPreviousSibling(), D(e) && (t.key = e.__key, t.offset = e.getTextContent().length)) : S(o) && !n && o.isInline() ? (t.key = o.__key, t.offset = o.getChildrenSize(), t.type = "element") : D(o) && (t.key = o.__key, t.offset = o.getTextContent().length)) : o === r.getTextContent().length && (o = r.getNextSibling(), r = r.getParent(), e && S(o) && o.isInline() ? (t.key = o.__key, t.offset = 0, t.type = "element") : (n || e) && o === null && S(r) && r.isInline() && !r.canInsertTextAfter() && (e = r.getNextSibling(), D(e) && (t.key = e.__key, t.offset = 0)));
}
function Hp(t, e, n) {
  if (t.type === "text" && e.type === "text") {
    var o = t.isBefore(e);
    let r = t.is(e);
    wu(t, o, r), wu(e, !o, r), r && (e.key = t.key, e.offset = t.offset, e.type = t.type), o = J(), o.isComposing() && o._compositionKey !== t.key && R(n) && (o = n.anchor, n = n.focus, gt(t, o.key, o.offset, o.type), gt(e, n.key, n.offset, n.type));
  }
}
function Up(t, e, n, o, r, i) {
  return t === null || n === null || !qo(r, t, n) || (e = xu(t, e, R(i) ? i.anchor : null, r), e === null) || (o = xu(n, o, R(i) ? i.focus : null, r), o === null || e.type === "element" && o.type === "element" && (t = gn(t), n = gn(n), Z(t) && Z(n))) ? null : (Hp(e, o, i), [e, o]);
}
function Vp(t, e, n, o, r, i) {
  let a = nt();
  return t = new Rt(Be(t, e, r), Be(n, o, i), 0, ""), t.dirty = !0, a._selection = t;
}
function Ca() {
  return new oi(/* @__PURE__ */ new Set());
}
function mx(t) {
  let e = t.getEditorState()._selection, n = tt(t._window);
  return R(e) || e == null ? Ps(e, n, t, null) : e.clone();
}
function Ps(t, e, n, o) {
  var r = n._window;
  if (r === null)
    return null;
  var i = (r = o || r.event) ? r.type : void 0;
  o = i === "selectionchange", r = !ua && (o || i === "beforeinput" || i === "compositionstart" || i === "compositionend" || i === "click" && r && r.detail === 3 || i === "drop" || i === void 0);
  let a;
  if (!R(t) || r) {
    if (e === null)
      return null;
    if (r = e.anchorNode, i = e.focusNode, a = e.anchorOffset, e = e.focusOffset, o && R(t) && !qo(n, r, i))
      return t.clone();
  } else
    return t.clone();
  if (n = Up(r, a, i, e, n, t), n === null)
    return null;
  let [s, u] = n;
  return new Rt(s, u, R(t) ? t.format : 0, R(t) ? t.style : "");
}
function W() {
  return nt()._selection;
}
function Hn() {
  return J()._editorState._selection;
}
function jr(t, e, n, o = 1) {
  var r = t.anchor, i = t.focus, a = r.getNode(), s = i.getNode();
  if (e.is(a) || e.is(s)) {
    if (a = e.__key, t.isCollapsed())
      e = r.offset, (n <= e && 0 < o || n < e && 0 > o) && (n = Math.max(0, e + o), r.set(a, n, "element"), i.set(a, n, "element"), _u(t));
    else {
      let c = t.isBackward();
      s = c ? i : r;
      var u = s.getNode();
      r = c ? r : i, i = r.getNode(), e.is(u) && (u = s.offset, (n <= u && 0 < o || n < u && 0 > o) && s.set(a, Math.max(0, u + o), "element")), e.is(i) && (e = r.offset, (n <= e && 0 < o || n < e && 0 > o) && r.set(a, Math.max(0, e + o), "element"));
    }
    _u(t);
  }
}
function _u(t) {
  var e = t.anchor, n = e.offset;
  let o = t.focus;
  var r = o.offset, i = e.getNode(), a = o.getNode();
  if (t.isCollapsed())
    S(i) && (a = i.getChildrenSize(), a = (r = n >= a) ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(n), D(a) && (n = 0, r && (n = a.getTextContentSize()), e.set(a.__key, n, "text"), o.set(a.__key, n, "text")));
  else {
    if (S(i)) {
      let s = i.getChildrenSize();
      n = (t = n >= s) ? i.getChildAtIndex(s - 1) : i.getChildAtIndex(n), D(n) && (i = 0, t && (i = n.getTextContentSize()), e.set(n.__key, i, "text"));
    }
    S(a) && (n = a.getChildrenSize(), r = (e = r >= n) ? a.getChildAtIndex(n - 1) : a.getChildAtIndex(r), D(r) && (a = 0, e && (a = r.getTextContentSize()), o.set(r.__key, a, "text")));
  }
}
function fx(t, e) {
  if (e = e.getEditorState()._selection, t = t._selection, R(t)) {
    var n = t.anchor;
    let o = t.focus, r;
    n.type === "text" && (r = n.getNode(), r.selectionTransform(e, t)), o.type === "text" && (n = o.getNode(), r !== n && n.selectionTransform(e, t));
  }
}
function xr(t, e, n, o, r) {
  let i = null, a = 0, s = null;
  o !== null ? (i = o.__key, D(o) ? (a = o.getTextContentSize(), s = "text") : S(o) && (a = o.getChildrenSize(), s = "element")) : r !== null && (i = r.__key, D(r) ? s = "text" : S(r) && (s = "element")), i !== null && s !== null ? t.set(i, a, s) : (a = e.getIndexWithinParent(), a === -1 && (a = n.getChildrenSize()), t.set(n.__key, a, "element"));
}
function Su(t, e, n, o, r) {
  t.type === "text" ? (t.key = n, e || (t.offset += r)) : t.offset > o.getIndexWithinParent() && --t.offset;
}
function Bi(t) {
  t.isCollapsed() || t.removeText();
  var e = t.anchor;
  for (t = e.getNode(), e = e.offset; !fn(t); )
    [t, e] = hx(t, e);
  return e;
}
function hx(t, e) {
  var n = t.getParent();
  if (!n)
    return n = st(), Ee().append(n), n.select(), [Ee(), 0];
  if (D(t)) {
    var o = t.splitText(e);
    return o.length === 0 ? [n, t.getIndexWithinParent()] : (t = e === 0 ? 0 : 1, t = o[0].getIndexWithinParent() + t, [n, t]);
  }
  return !S(t) || e === 0 ? [n, t.getIndexWithinParent()] : ((o = t.getChildAtIndex(e)) && (e = new Rt(Be(t.__key, e, "element"), Be(t.__key, e, "element"), 0, ""), (e = t.insertNewAfter(e)) && e.append(o, ...o.getNextSiblings())), [n, t.getIndexWithinParent() + 1]);
}
function gx(t) {
  let e = st(), n = null;
  for (let o = 0; o < t.length; o++) {
    let r = t[o], i = Yt(r);
    if (i || Z(r) && r.isInline() || S(r) && r.isInline() || D(r) || r.isParentRequired()) {
      if (n === null && (n = r.createParentElementNode(), e.append(n), i))
        continue;
      n !== null && n.append(r);
    } else
      e.append(r), n = null;
  }
  return e;
}
let le = null, ue = null, Se = !1, Hi = !1, To = 0, Cu = { characterData: !0, childList: !0, subtree: !0 };
function Un() {
  return Se || le !== null && le._readOnly;
}
function je() {
  Se && O(13);
}
function nt() {
  return le === null && O(15), le;
}
function J() {
  return ue === null && O(16), ue;
}
function $u(t, e, n) {
  var o = e.__type;
  let r = t._nodes.get(o);
  for (r === void 0 && O(30, o), t = n.get(o), t === void 0 && (t = Array.from(r.transforms), n.set(o, t)), n = t.length, o = 0; o < n && (t[o](e), e.isAttached()); o++)
    ;
}
function yx(t, e) {
  e = e._dirtyLeaves, t = t._nodeMap;
  for (let n of e)
    e = t.get(n), D(e) && e.isAttached() && e.isSimpleText() && !e.isUnmergeable() && vp(e);
}
function vx(t, e) {
  let n = e._dirtyLeaves, o = e._dirtyElements;
  t = t._nodeMap;
  let r = kt(), i = /* @__PURE__ */ new Map();
  var a = n;
  let s = a.size;
  for (var u = o, c = u.size; 0 < s || 0 < c; ) {
    if (0 < s) {
      e._dirtyLeaves = /* @__PURE__ */ new Set();
      for (let d of a)
        a = t.get(d), D(a) && a.isAttached() && a.isSimpleText() && !a.isUnmergeable() && vp(a), a !== void 0 && a !== void 0 && a.__key !== r && a.isAttached() && $u(e, a, i), n.add(d);
      if (a = e._dirtyLeaves, s = a.size, 0 < s) {
        To++;
        continue;
      }
    }
    e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map();
    for (let d of u)
      u = d[0], c = d[1], (u === "root" || c) && (a = t.get(u), a !== void 0 && a !== void 0 && a.__key !== r && a.isAttached() && $u(e, a, i), o.set(u, c));
    a = e._dirtyLeaves, s = a.size, u = e._dirtyElements, c = u.size, To++;
  }
  e._dirtyLeaves = n, e._dirtyElements = o;
}
function As(t, e) {
  var n = t.type, o = e.get(n);
  if (o === void 0 && O(17, n), n = o.klass, t.type !== n.getType() && O(18, n.name), n = n.importJSON(t), t = t.children, S(n) && Array.isArray(t))
    for (o = 0; o < t.length; o++) {
      let r = As(t[o], e);
      n.append(r);
    }
  return n;
}
function Tu(t, e) {
  let n = le, o = Se, r = ue;
  le = t, Se = !0, ue = null;
  try {
    return e();
  } finally {
    le = n, Se = o, ue = r;
  }
}
function Kt(t, e) {
  let n = t._pendingEditorState, o = t._rootElement, r = t._headless || o === null;
  if (n !== null) {
    var i = t._editorState, a = i._selection, s = n._selection, u = t._dirtyType !== 0, c = le, d = Se, p = ue, f = t._updating, m = t._observer, y = null;
    if (t._pendingEditorState = null, t._editorState = n, !r && u && m !== null) {
      ue = t, le = n, Se = !1, t._updating = !0;
      try {
        let Y = t._dirtyType, ye = t._dirtyElements, ve = t._dirtyLeaves;
        m.disconnect();
        var g = Y, k = ye, b = ve;
        be = it = re = "", Ep = g === 2, ar = null, ge = t, St = t._config, So = t._nodes, ei = ge._listeners.mutation, fa = k, ha = b, Jt = i._nodeMap, Ct = n._nodeMap, Rs = n._readOnly, ga = new Map(t._keyToDOMMap);
        let Ve = /* @__PURE__ */ new Map();
        Co = Ve, oo("root", null), Co = ga = St = Ct = Jt = ha = fa = So = ge = void 0, y = Ve;
      } catch (Y) {
        if (Y instanceof Error && t._onError(Y), Hi)
          throw Y;
        Jp(t, null, o, n), yp(t), t._dirtyType = 2, Hi = !0, Kt(t, i), Hi = !1;
        return;
      } finally {
        m.observe(o, Cu), t._updating = f, le = c, Se = d, ue = p;
      }
    }
    n._readOnly || (n._readOnly = !0);
    var _ = t._dirtyLeaves, j = t._dirtyElements, C = t._normalizedNodes, L = t._updateTags, N = t._deferred;
    u && (t._dirtyType = 0, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), t._normalizedNodes = /* @__PURE__ */ new Set(), t._updateTags = /* @__PURE__ */ new Set());
    var te = t._decorators, T = t._pendingDecorators || te, U = n._nodeMap, q;
    for (q in T)
      U.has(q) || (T === te && (T = xp(t)), delete T[q]);
    var A = r ? null : tt(t._window);
    if (t._editable && A !== null && (u || s === null || s.dirty)) {
      ue = t, le = n;
      try {
        if (m !== null && m.disconnect(), u || s === null || s.dirty) {
          let Y = t._blockCursorElement;
          Y !== null && ma(Y, t, o);
          e: {
            let ye = A.anchorNode, ve = A.focusNode, Ve = A.anchorOffset, eo = A.focusOffset, ze = document.activeElement;
            if (!(L.has("collaboration") && ze !== o || ze !== null && Es(ze)))
              if (R(s)) {
                var Fe = s.anchor, an = s.focus, Jn = Fe.key, Yn = an.key, Xn = vr(t, Jn), Qn = vr(t, Yn), dt = Fe.offset, Sl = an.offset, gi = s.format, yi = s.style, Cl = s.isCollapsed(), Zn = Xn, Ko = Qn, vi = !1;
                if (Fe.type === "text") {
                  Zn = hr(Xn);
                  let Ie = Fe.getNode();
                  vi = Ie.getFormat() !== gi || Ie.getStyle() !== yi;
                } else
                  R(a) && a.anchor.type === "text" && (vi = !0);
                if (an.type === "text" && (Ko = hr(Qn)), Zn !== null && Ko !== null) {
                  if (Cl && (a === null || vi || R(a) && (a.format !== gi || a.style !== yi))) {
                    var Ef = performance.now();
                    Ap = [gi, yi, dt, Jn, Ef];
                  }
                  if (Ve === dt && eo === Sl && ye === Zn && ve === Ko && (A.type !== "Range" || !Cl) && (ze !== null && o.contains(ze) || o.focus({ preventScroll: !0 }), Fe.type !== "element"))
                    break e;
                  try {
                    A.setBaseAndExtent(Zn, dt, Ko, Sl);
                  } catch {
                  }
                  if (!L.has("skip-scroll-into-view") && s.isCollapsed() && o !== null && o === document.activeElement) {
                    let Ie = s instanceof Rt && s.anchor.type === "element" ? Zn.childNodes[dt] || null : 0 < A.rangeCount ? A.getRangeAt(0) : null;
                    if (Ie !== null) {
                      let Ne;
                      if (Ie instanceof Text) {
                        let Ce = document.createRange();
                        Ce.selectNode(Ie), Ne = Ce.getBoundingClientRect();
                      } else
                        Ne = Ie.getBoundingClientRect();
                      let mt = o.ownerDocument, Ft = mt.defaultView;
                      if (Ft !== null)
                        for (var { top: ki, bottom: bi } = Ne, Go, Jo, pt = o; pt !== null; ) {
                          let Ce = pt === mt.body;
                          if (Ce)
                            Go = 0, Jo = Qr(t).innerHeight;
                          else {
                            let Yo = pt.getBoundingClientRect();
                            Go = Yo.top, Jo = Yo.bottom;
                          }
                          let Lt = 0;
                          if (ki < Go ? Lt = -(Go - ki) : bi > Jo && (Lt = bi - Jo), Lt !== 0)
                            if (Ce)
                              Ft.scrollBy(0, Lt);
                            else {
                              let Yo = pt.scrollTop;
                              pt.scrollTop += Lt;
                              let El = pt.scrollTop - Yo;
                              ki -= El, bi -= El;
                            }
                          if (Ce)
                            break;
                          pt = Xr(pt);
                        }
                    }
                  }
                  ja = !0;
                }
              } else
                a !== null && qo(t, ye, ve) && A.removeAllRanges();
          }
        }
        e: {
          let Y = t._blockCursorElement;
          if (R(s) && s.isCollapsed() && s.anchor.type === "element" && o.contains(document.activeElement)) {
            let ye = s.anchor, ve = ye.getNode(), Ve = ye.offset, eo = ve.getChildrenSize(), ze = !1, Ie = null;
            if (Ve === eo) {
              let Ne = ve.getChildAtIndex(Ve - 1);
              Ni(Ne) && (ze = !0);
            } else {
              let Ne = ve.getChildAtIndex(Ve);
              if (Ni(Ne)) {
                let mt = Ne.getPreviousSibling();
                (mt === null || Ni(mt)) && (ze = !0, Ie = t.getElementByKey(Ne.__key));
              }
            }
            if (ze) {
              let Ne = t.getElementByKey(ve.__key);
              if (Y === null) {
                let mt = t._config.theme, Ft = document.createElement("div");
                Ft.contentEditable = "false", Ft.setAttribute("data-lexical-cursor", "true");
                let Ce = mt.blockCursor;
                if (Ce !== void 0) {
                  if (typeof Ce == "string") {
                    let Lt = Ce.split(" ");
                    Ce = mt.blockCursor = Lt;
                  }
                  Ce !== void 0 && Ft.classList.add(...Ce);
                }
                t._blockCursorElement = Y = Ft;
              }
              o.style.caretColor = "transparent", Ie === null ? Ne.appendChild(Y) : Ne.insertBefore(Y, Ie);
              break e;
            }
          }
          Y !== null && ma(Y, t, o);
        }
        m !== null && m.observe(o, Cu);
      } finally {
        ue = p, le = c;
      }
    }
    if (y !== null) {
      var Of = y;
      let Y = Array.from(t._listeners.mutation), ye = Y.length;
      for (let ve = 0; ve < ye; ve++) {
        let [Ve, eo] = Y[ve], ze = Of.get(eo);
        ze !== void 0 && Ve(ze, { dirtyLeaves: _, prevEditorState: i, updateTags: L });
      }
    }
    R(s) || s === null || a !== null && a.is(s) || t.dispatchCommand(Gr, void 0);
    var ji = t._pendingDecorators;
    ji !== null && (t._decorators = ji, t._pendingDecorators = null, go("decorator", t, !0, ji));
    var Df = cu(e || i), $l = cu(n);
    if (Df !== $l && go("textcontent", t, !0, $l), go("update", t, !0, { dirtyElements: j, dirtyLeaves: _, editorState: n, normalizedNodes: C, prevEditorState: e || i, tags: L }), t._deferred = [], N.length !== 0) {
      let Y = t._updating;
      t._updating = !0;
      try {
        for (let ye = 0; ye < N.length; ye++)
          N[ye]();
      } finally {
        t._updating = Y;
      }
    }
    var Tl = t._updates;
    if (Tl.length !== 0) {
      let Y = Tl.shift();
      if (Y) {
        let [ye, ve] = Y;
        Wp(t, ye, ve);
      }
    }
  }
}
function go(t, e, n, ...o) {
  let r = e._updating;
  e._updating = n;
  try {
    let i = Array.from(e._listeners[t]);
    for (t = 0; t < i.length; t++)
      i[t].apply(null, o);
  } finally {
    e._updating = r;
  }
}
function E(t, e, n) {
  if (t._updating === !1 || ue !== t) {
    let i = !1;
    return t.update(() => {
      i = E(t, e, n);
    }), i;
  }
  let o = Ds(t);
  for (let i = 4; 0 <= i; i--)
    for (let a = 0; a < o.length; a++) {
      var r = o[a]._commands.get(e);
      if (r !== void 0 && (r = r[i], r !== void 0)) {
        r = Array.from(r);
        let s = r.length;
        for (let u = 0; u < s; u++)
          if (r[u](n, t) === !0)
            return !0;
      }
    }
  return !1;
}
function Eu(t, e) {
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
function Wp(t, e, n) {
  let o = t._updateTags;
  var r, i = r = !1;
  if (n !== void 0) {
    var a = n.onUpdate;
    r = n.tag, r != null && o.add(r), r = n.skipTransforms || !1, i = n.discrete || !1;
  }
  a && t._deferred.push(a), n = t._editorState, a = t._pendingEditorState;
  let s = !1;
  (a === null || a._readOnly) && (a = t._pendingEditorState = new ii(new Map((a || n)._nodeMap)), s = !0), a._flushSync = i, i = le;
  let u = Se, c = ue, d = t._updating;
  le = a, Se = !1, t._updating = !0, ue = t;
  try {
    s && (t._headless ? n._selection !== null && (a._selection = n._selection.clone()) : a._selection = mx(t));
    let p = t._compositionKey;
    e(), r = Eu(t, r), fx(a, t), t._dirtyType !== 0 && (r ? yx(a, t) : vx(a, t), Eu(t), Jj(n, a, t._dirtyLeaves, t._dirtyElements)), p !== t._compositionKey && (a._flushSync = !0);
    let f = a._selection;
    if (R(f)) {
      let m = a._nodeMap, y = f.focus.key;
      m.get(f.anchor.key) !== void 0 && m.get(y) !== void 0 || O(19);
    } else
      Uo(f) && f._nodes.size === 0 && (a._selection = null);
  } catch (p) {
    p instanceof Error && t._onError(p), t._pendingEditorState = n, t._dirtyType = 2, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements.clear(), Kt(t);
    return;
  } finally {
    le = i, Se = u, ue = c, t._updating = d, To = 0;
  }
  t._dirtyType !== 0 || kx(a, t) ? a._flushSync ? (a._flushSync = !1, Kt(t)) : s && Wj(() => {
    Kt(t);
  }) : (a._flushSync = !1, s && (o.clear(), t._deferred = [], t._pendingEditorState = null));
}
function Oe(t, e, n) {
  t._updating ? t._updates.push([e, n]) : Wp(t, e, n);
}
class Kp extends ti {
  constructor(e) {
    super(e);
  }
  decorate() {
    O(47);
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
  return t instanceof Kp;
}
class ri extends ti {
  constructor(e) {
    super(e), this.__last = this.__first = null, this.__indent = this.__format = this.__size = 0, this.__dir = null;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    let e = this.getFormat();
    return Lj[e] || "";
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    let e = [], n = this.getFirstChild();
    for (; n !== null; )
      e.push(n), n = n.getNextSibling();
    return e;
  }
  getChildrenKeys() {
    let e = [], n = this.getFirstChild();
    for (; n !== null; )
      e.push(n.__key), n = n.getNextSibling();
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
      if (D(n) && e.push(n), S(n)) {
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
      if (S(e)) {
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
      if (S(e)) {
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
    return e >= o ? (e = n[o - 1], S(e) && e.getLastDescendant() || e || null) : (e = n[e], S(e) && e.getFirstDescendant() || e || null);
  }
  getFirstChild() {
    let e = this.getLatest().__first;
    return e === null ? null : he(e);
  }
  getFirstChildOrThrow() {
    let e = this.getFirstChild();
    return e === null && O(45, this.__key), e;
  }
  getLastChild() {
    let e = this.getLatest().__last;
    return e === null ? null : he(e);
  }
  getLastChildOrThrow() {
    let e = this.getLastChild();
    return e === null && O(96, this.__key), e;
  }
  getChildAtIndex(e) {
    var n = this.getChildrenSize();
    let o;
    if (e < n / 2) {
      for (o = this.getFirstChild(), n = 0; o !== null && n <= e; ) {
        if (n === e)
          return o;
        o = o.getNextSibling(), n++;
      }
      return null;
    }
    for (o = this.getLastChild(), --n; o !== null && n >= e; ) {
      if (n === e)
        return o;
      o = o.getPreviousSibling(), n--;
    }
    return null;
  }
  getTextContent() {
    let e = "", n = this.getChildren(), o = n.length;
    for (let r = 0; r < o; r++) {
      let i = n[r];
      e += i.getTextContent(), S(i) && r !== o - 1 && !i.isInline() && (e += `

`);
    }
    return e;
  }
  getTextContentSize() {
    let e = 0, n = this.getChildren(), o = n.length;
    for (let r = 0; r < o; r++) {
      let i = n[r];
      e += i.getTextContentSize(), S(i) && r !== o - 1 && !i.isInline() && (e += 2);
    }
    return e;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  hasFormat(e) {
    return e !== "" ? (e = au[e], (this.getFormat() & e) !== 0) : !1;
  }
  select(e, n) {
    je();
    let o = W(), r = e, i = n;
    var a = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (e === 0 && n === 0) {
        if (e = this.getFirstChild(), D(e) || S(e))
          return e.select(0, 0);
      } else if (!(e !== void 0 && e !== a || n !== void 0 && n !== a) && (e = this.getLastChild(), D(e) || S(e)))
        return e.select();
    }
    if (r === void 0 && (r = a), i === void 0 && (i = a), a = this.__key, R(o))
      o.anchor.set(a, r, "element"), o.focus.set(a, i, "element"), o.dirty = !0;
    else
      return Vp(a, r, a, i, "element", "element");
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
    return this.getWritable().__format = e !== "" ? au[e] : 0, this;
  }
  setIndent(e) {
    return this.getWritable().__indent = e, this;
  }
  splice(e, n, o) {
    let r = o.length, i = this.getChildrenSize(), a = this.getWritable(), s = a.__key;
    var u = [], c = [];
    let d = this.getChildAtIndex(e + n), p = null, f = i - n + r;
    if (e !== 0)
      if (e === i)
        p = this.getLastChild();
      else {
        var m = this.getChildAtIndex(e);
        m !== null && (p = m.getPreviousSibling());
      }
    if (0 < n) {
      var y = p === null ? this.getFirstChild() : p.getNextSibling();
      for (m = 0; m < n; m++) {
        y === null && O(100);
        var g = y.getNextSibling(), k = y.__key;
        y = y.getWritable(), Wt(y), c.push(k), y = g;
      }
    }
    for (m = p, g = 0; g < r; g++) {
      k = o[g], m !== null && k.is(m) && (p = m = m.getPreviousSibling()), y = k.getWritable(), y.__parent === s && f--, Wt(y);
      let b = k.__key;
      m === null ? (a.__first = b, y.__prev = null) : (m = m.getWritable(), m.__next = b, y.__prev = m.__key), k.__key === s && O(76), y.__parent = s, u.push(b), m = k;
    }
    if (e + n === i ? m !== null && (m.getWritable().__next = null, a.__last = m.__key) : d !== null && (e = d.getWritable(), m !== null ? (n = m.getWritable(), e.__prev = m.__key, n.__next = d.__key) : e.__prev = null), a.__size = f, c.length && (e = W(), R(e))) {
      c = new Set(c), u = new Set(u);
      let { anchor: b, focus: _ } = e;
      Ou(b, c, u) && xr(b, b.getNode(), this, p, d), Ou(_, c, u) && xr(_, _.getNode(), this, p, d), f !== 0 || this.canBeEmpty() || _t(this) || this.remove();
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
function S(t) {
  return t instanceof ri;
}
function Ou(t, e, n) {
  for (t = t.getNode(); t; ) {
    let o = t.__key;
    if (e.has(o) && !n.has(o))
      return !0;
    t = t.getParent();
  }
  return !1;
}
class Vn extends ri {
  static getType() {
    return "root";
  }
  static clone() {
    return new Vn();
  }
  constructor() {
    super("root"), this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    O(51);
  }
  getTextContent() {
    let e = this.__cachedText;
    return !Un() && J()._dirtyType !== 0 || e === null ? super.getTextContent() : e;
  }
  remove() {
    O(52);
  }
  replace() {
    O(53);
  }
  insertBefore() {
    O(54);
  }
  insertAfter() {
    O(55);
  }
  updateDOM() {
    return !1;
  }
  append(...e) {
    for (let n = 0; n < e.length; n++) {
      let o = e[n];
      S(o) || Z(o) || O(56);
    }
    return super.append(...e);
  }
  static importJSON(e) {
    let n = Ee();
    return n.setFormat(e.format), n.setIndent(e.indent), n.setDirection(e.direction), n;
  }
  exportJSON() {
    return { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), type: "root", version: 1 };
  }
  collapseAtStart() {
    return !0;
  }
}
function Te(t) {
  return t instanceof Vn;
}
function kx(t, e) {
  if (e = e.getEditorState()._selection, t = t._selection, t !== null) {
    if (t.dirty || !t.is(e))
      return !0;
  } else if (e !== null)
    return !0;
  return !1;
}
function Ms() {
  return new ii(/* @__PURE__ */ new Map([["root", new Vn()]]));
}
function Gp(t) {
  let e = t.exportJSON();
  var n = t.constructor;
  if (e.type !== n.getType() && O(130, n.name), S(t)) {
    let o = e.children;
    for (Array.isArray(o) || O(59, n.name), t = t.getChildren(), n = 0; n < t.length; n++) {
      let r = Gp(t[n]);
      o.push(r);
    }
  }
  return e;
}
class ii {
  constructor(e, n) {
    this._nodeMap = e, this._selection = n || null, this._readOnly = this._flushSync = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(e) {
    return Tu(this, e);
  }
  clone(e) {
    return e = new ii(this._nodeMap, e === void 0 ? this._selection : e), e._readOnly = !0, e;
  }
  toJSON() {
    return Tu(this, () => ({ root: Gp(Ee()) }));
  }
}
class Wn extends ri {
  static getType() {
    return "paragraph";
  }
  static clone(e) {
    return new Wn(e.__key);
  }
  createDOM(e) {
    let n = document.createElement("p");
    return e = mo(e.theme, "paragraph"), e !== void 0 && n.classList.add(...e), n;
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return { p: () => ({ conversion: bx, priority: 0 }) };
  }
  exportDOM(e) {
    if ({ element: e } = super.exportDOM(e), e && Zr(e)) {
      this.isEmpty() && e.append(document.createElement("br"));
      var n = this.getFormatType();
      e.style.textAlign = n, (n = this.getDirection()) && (e.dir = n), n = this.getIndent(), 0 < n && (e.style.textIndent = `${20 * n}px`);
    }
    return { element: e };
  }
  static importJSON(e) {
    let n = st();
    return n.setFormat(e.format), n.setIndent(e.indent), n.setDirection(e.direction), n;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "paragraph", version: 1 };
  }
  insertNewAfter(e, n) {
    e = st();
    let o = this.getDirection();
    return e.setDirection(o), this.insertAfter(e, n), e;
  }
  collapseAtStart() {
    let e = this.getChildren();
    if (e.length === 0 || D(e[0]) && e[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null)
        return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null)
        return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function bx(t) {
  let e = st();
  return t.style && (e.setFormat(t.style.textAlign), t = parseInt(t.style.textIndent, 10) / 20, 0 < t && e.setIndent(t)), { node: e };
}
function st() {
  return Ho(new Wn());
}
function Jp(t, e, n, o) {
  let r = t._keyToDOMMap;
  r.clear(), t._editorState = Ms(), t._pendingEditorState = o, t._compositionKey = null, t._dirtyType = 0, t._cloneNotNeeded.clear(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements.clear(), t._normalizedNodes = /* @__PURE__ */ new Set(), t._updateTags = /* @__PURE__ */ new Set(), t._updates = [], t._blockCursorElement = null, o = t._observer, o !== null && (o.disconnect(), t._observer = null), e !== null && (e.textContent = ""), n !== null && (n.textContent = "", r.set("root", n));
}
function jx(t, e) {
  let n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = (i) => {
    Object.keys(i).forEach((a) => {
      let s = n.get(a);
      s === void 0 && (s = [], n.set(a, s)), s.push(i[a]);
    });
  };
  return t.forEach((i) => {
    i = i.klass.importDOM != null ? i.klass.importDOM.bind(i.klass) : null, i == null || o.has(i) || (o.add(i), i = i(), i !== null && r(i));
  }), e && r(e), n;
}
class xx {
  constructor(e, n, o, r, i, a, s) {
    this._parentEditor = n, this._rootElement = null, this._editorState = e, this._compositionKey = this._pendingEditorState = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = o, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = _p(), this._onError = i, this._htmlConversions = a, this._editable = s, this._headless = n !== null && n._headless, this._blockCursorElement = this._window = null;
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
    o === void 0 && O(35);
    let r = this._commands;
    r.has(e) || r.set(e, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    let i = r.get(e);
    i === void 0 && O(36, String(e));
    let a = i[o];
    return a.add(n), () => {
      a.delete(n), i.every((s) => s.size === 0) && r.delete(e);
    };
  }
  registerMutationListener(e, n) {
    this._nodes.get(e.getType()) === void 0 && O(37, e.name);
    let o = this._listeners.mutation;
    return o.set(n, e), () => {
      o.delete(n);
    };
  }
  registerNodeTransformToKlass(e, n) {
    var o = e.getType();
    return o = this._nodes.get(o), o === void 0 && O(37, e.name), o.transforms.add(n), o;
  }
  registerNodeTransform(e, n) {
    var o = this.registerNodeTransformToKlass(e, n);
    let r = [o];
    return o = o.replaceWithKlass, o != null && (o = this.registerNodeTransformToKlass(o, n), r.push(o)), Kj(this, e.getType()), () => {
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
    return E(this, e, n);
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
      let a = mo(this._config.theme, "root");
      var o = this._pendingEditorState || this._editorState;
      if (this._rootElement = e, Jp(this, n, e, o), n !== null) {
        if (!this._config.disableEvents) {
          fo !== 0 && (fo--, fo === 0 && n.ownerDocument.removeEventListener("selectionchange", qp));
          var r = n.__lexicalEditor;
          if (r != null) {
            if (r._parentEditor !== null) {
              var i = Ds(r);
              i = i[i.length - 1]._key, xn.get(i) === r && xn.delete(i);
            } else
              xn.delete(r._key);
            n.__lexicalEditor = null;
          }
          for (r = Lp(n), i = 0; i < r.length; i++)
            r[i]();
          n.__lexicalEventHandles = [];
        }
        a != null && n.classList.remove(...a);
      }
      e !== null ? (o = (o = e.ownerDocument) && o.defaultView || null, r = e.style, r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute(
        "data-lexical-editor",
        "true"
      ), this._window = o, this._dirtyType = 2, yp(this), this._updateTags.add("history-merge"), Kt(this), this._config.disableEvents || rx(e, this), a != null && e.classList.add(...a)) : (this._editorState = o, this._window = this._pendingEditorState = null), go("root", this, !1, e, n);
    }
  }
  getElementByKey(e) {
    return this._keyToDOMMap.get(e) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(e, n) {
    e.isEmpty() && O(38), gp(this);
    let o = this._pendingEditorState, r = this._updateTags;
    n = n !== void 0 ? n.tag : null, o === null || o.isEmpty() || (n != null && r.add(n), Kt(this)), this._pendingEditorState = e, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, n != null && r.add(n), Kt(this);
  }
  parseEditorState(e, n) {
    e = typeof e == "string" ? JSON.parse(e) : e;
    let o = Ms(), r = le, i = Se, a = ue, s = this._dirtyElements, u = this._dirtyLeaves, c = this._cloneNotNeeded, d = this._dirtyType;
    this._dirtyElements = /* @__PURE__ */ new Map(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyType = 0, le = o, Se = !1, ue = this;
    try {
      As(e.root, this._nodes), n && n(), o._readOnly = !0;
    } catch (p) {
      p instanceof Error && this._onError(p);
    } finally {
      this._dirtyElements = s, this._dirtyLeaves = u, this._cloneNotNeeded = c, this._dirtyType = d, le = r, Se = i, ue = a;
    }
    return o;
  }
  update(e, n) {
    Oe(this, e, n);
  }
  focus(e, n = {}) {
    let o = this._rootElement;
    o !== null && (o.setAttribute("autocapitalize", "off"), Oe(this, () => {
      let r = W(), i = Ee();
      r !== null ? r.dirty = !0 : i.getChildrenSize() !== 0 && (n.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd());
    }, { onUpdate: () => {
      o.removeAttribute("autocapitalize"), e && e();
    }, tag: "focus" }), this._pendingEditorState === null && o.removeAttribute("autocapitalize"));
  }
  blur() {
    var e = this._rootElement;
    e !== null && e.blur(), e = tt(this._window), e !== null && e.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(e) {
    this._editable !== e && (this._editable = e, go("editable", this, !0, e));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
w.$addUpdateTag = function(t) {
  je(), J()._updateTags.add(t);
};
w.$applyNodeReplacement = Ho;
w.$copyNode = $p;
w.$createLineBreakNode = Tn;
w.$createNodeSelection = Ca;
w.$createParagraphNode = st;
w.$createPoint = Be;
w.$createRangeSelection = function() {
  let t = Be("root", 0, "element"), e = Be("root", 0, "element");
  return new Rt(t, e, 0, "");
};
w.$createTabNode = ni;
w.$createTextNode = de;
w.$getAdjacentNode = pa;
w.$getCharacterOffsets = Sa;
w.$getEditor = function() {
  return J();
};
w.$getNearestNodeFromDOMNode = Bo;
w.$getNearestRootOrShadowRoot = Cp;
w.$getNodeByKey = he;
w.$getPreviousSelection = Hn;
w.$getRoot = Ee;
w.$getSelection = W;
w.$getTextContent = function() {
  let t = W();
  return t === null ? "" : t.getTextContent();
};
w.$hasAncestor = kr;
w.$hasUpdateTag = function(t) {
  return J()._updateTags.has(t);
};
w.$insertNodes = function(t) {
  let e = W() || Hn();
  e === null && (e = Ee().selectEnd()), e.insertNodes(t);
};
w.$isBlockElementNode = function(t) {
  return S(t) && !t.isInline();
};
w.$isDecoratorNode = Z;
w.$isElementNode = S;
w.$isInlineElementOrDecoratorNode = function(t) {
  return S(t) && t.isInline() || Z(t) && t.isInline();
};
w.$isLeafNode = function(t) {
  return D(t) || Yt(t) || Z(t);
};
w.$isLineBreakNode = Yt;
w.$isNodeSelection = Uo;
w.$isParagraphNode = function(t) {
  return t instanceof Wn;
};
w.$isRangeSelection = R;
w.$isRootNode = Te;
w.$isRootOrShadowRoot = _t;
w.$isTabNode = Bp;
w.$isTextNode = D;
w.$nodesOfType = function(t) {
  var e = nt();
  let n = e._readOnly, o = t.getType();
  e = e._nodeMap;
  let r = [];
  for (let [, i] of e)
    i instanceof t && i.__type === o && (n || i.isAttached()) && r.push(i);
  return r;
};
w.$normalizeSelection__EXPERIMENTAL = kp;
w.$parseSerializedNode = function(t) {
  return As(t, J()._nodes);
};
w.$selectAll = function() {
  var t = Ee();
  t = t.select(0, t.getChildrenSize()), Xe(kp(t));
};
w.$setCompositionKey = ie;
w.$setSelection = Xe;
w.$splitNode = function(t, e) {
  let n = t.getChildAtIndex(e);
  n == null && (n = t), _t(t) && O(102);
  let o = (a) => {
    const s = a.getParentOrThrow(), u = _t(s), c = a !== n || u ? $p(a) : a;
    if (u)
      return S(a) && S(c) || O(133), a.insertAfter(c), [a, c, c];
    const [d, p, f] = o(s);
    return a = a.getNextSiblings(), f.append(c, ...a), [d, p, c];
  }, [r, i] = o(n);
  return [r, i];
};
w.BLUR_COMMAND = mp;
w.CAN_REDO_COMMAND = {};
w.CAN_UNDO_COMMAND = {};
w.CLEAR_EDITOR_COMMAND = {};
w.CLEAR_HISTORY_COMMAND = {};
w.CLICK_COMMAND = Jd;
w.COMMAND_PRIORITY_CRITICAL = 4;
w.COMMAND_PRIORITY_EDITOR = 0;
w.COMMAND_PRIORITY_HIGH = 3;
w.COMMAND_PRIORITY_LOW = 1;
w.COMMAND_PRIORITY_NORMAL = 2;
w.CONTROLLED_TEXT_INSERTION_COMMAND = jn;
w.COPY_COMMAND = _s;
w.CUT_COMMAND = Ss;
w.DELETE_CHARACTER_COMMAND = bn;
w.DELETE_LINE_COMMAND = _o;
w.DELETE_WORD_COMMAND = wo;
w.DRAGEND_COMMAND = dp;
w.DRAGOVER_COMMAND = cp;
w.DRAGSTART_COMMAND = up;
w.DROP_COMMAND = lp;
w.DecoratorNode = Kp;
w.ElementNode = ri;
w.FOCUS_COMMAND = pp;
w.FORMAT_ELEMENT_COMMAND = {};
w.FORMAT_TEXT_COMMAND = vt;
w.INDENT_CONTENT_COMMAND = {};
w.INSERT_LINE_BREAK_COMMAND = po;
w.INSERT_PARAGRAPH_COMMAND = aa;
w.INSERT_TAB_COMMAND = {};
w.KEY_ARROW_DOWN_COMMAND = np;
w.KEY_ARROW_LEFT_COMMAND = Zd;
w.KEY_ARROW_RIGHT_COMMAND = Xd;
w.KEY_ARROW_UP_COMMAND = tp;
w.KEY_BACKSPACE_COMMAND = rp;
w.KEY_DELETE_COMMAND = ap;
w.KEY_DOWN_COMMAND = Yd;
w.KEY_ENTER_COMMAND = mr;
w.KEY_ESCAPE_COMMAND = ip;
w.KEY_MODIFIER_COMMAND = fp;
w.KEY_SPACE_COMMAND = op;
w.KEY_TAB_COMMAND = sp;
w.LineBreakNode = qn;
w.MOVE_TO_END = Qd;
w.MOVE_TO_START = ep;
w.OUTDENT_CONTENT_COMMAND = {};
w.PASTE_COMMAND = js;
w.ParagraphNode = Wn;
w.REDO_COMMAND = ws;
w.REMOVE_TEXT_COMMAND = sa;
w.RootNode = Vn;
w.SELECTION_CHANGE_COMMAND = Gr;
w.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = {};
w.SELECT_ALL_COMMAND = la;
w.TabNode = Bn;
w.TextNode = nn;
w.UNDO_COMMAND = xs;
w.createCommand = function() {
  return {};
};
w.createEditor = function(t) {
  var e = t || {}, n = ue, o = e.theme || {};
  let r = t === void 0 ? n : e.parentEditor || null, i = e.disableEvents || !1, a = Ms(), s = e.namespace || (r !== null ? r._config.namespace : _p()), u = e.editorState, c = [Vn, nn, qn, Bn, Wn, ...e.nodes || []], { onError: d, html: p } = e;
  if (e = e.editable !== void 0 ? e.editable : !0, t === void 0 && n !== null)
    t = n._nodes;
  else
    for (t = /* @__PURE__ */ new Map(), n = 0; n < c.length; n++) {
      let m = c[n], y = null;
      var f = null;
      typeof m != "function" && (f = m, m = f.replace, y = f.with, f = f.withKlass || null);
      let g = m.getType(), k = m.transform(), b = /* @__PURE__ */ new Set();
      k !== null && b.add(k), t.set(g, { exportDOM: p && p.export ? p.export.get(m) : void 0, klass: m, replace: y, replaceWithKlass: f, transforms: b });
    }
  return o = new xx(a, r, t, { disableEvents: i, namespace: s, theme: o }, d || console.error, jx(t, p ? p.import : void 0), e), u !== void 0 && (o._pendingEditorState = u, o._dirtyType = 2), o;
};
w.getNearestEditorFromDOMNode = Os;
w.isCurrentlyReadOnlyMode = Un;
w.isHTMLAnchorElement = function(t) {
  return Zr(t) && t.tagName === "A";
};
w.isHTMLElement = Zr;
w.isSelectionCapturedInDecoratorInput = Es;
w.isSelectionWithinEditor = qo;
const wx = w;
var H = wx, Du = De, io = H, wr = x;
let Yp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
var _x = Yp ? wr.useLayoutEffect : wr.useEffect;
let er = { tag: "history-merge" };
function Sx(t, e) {
  if (e !== null) {
    if (e === void 0)
      t.update(() => {
        var n = io.$getRoot();
        if (n.isEmpty()) {
          let o = io.$createParagraphNode();
          n.append(o), n = Yp ? document.activeElement : null, (io.$getSelection() !== null || n !== null && n === t.getRootElement()) && o.select();
        }
      }, er);
    else if (e !== null)
      switch (typeof e) {
        case "string":
          let n = t.parseEditorState(e);
          t.setEditorState(n, er);
          break;
        case "object":
          t.setEditorState(e, er);
          break;
        case "function":
          t.update(() => {
            io.$getRoot().isEmpty() && e(t);
          }, er);
      }
  }
}
Wd.LexicalComposer = function({ initialConfig: t, children: e }) {
  let n = wr.useMemo(() => {
    const { theme: o, namespace: r, editor__DEPRECATED: i, nodes: a, onError: s, editorState: u, html: c } = t, d = Du.createLexicalComposerContext(null, o);
    let p = i || null;
    if (p === null) {
      const f = io.createEditor({ editable: t.editable, html: c, namespace: r, nodes: a, onError: (m) => s(m, f), theme: o });
      Sx(f, u), p = f;
    }
    return [p, d];
  }, []);
  return _x(() => {
    let o = t.editable, [r] = n;
    r.setEditable(o !== void 0 ? o : !0);
  }, []), wr.createElement(
    Du.LexicalComposerContext.Provider,
    { value: n },
    e
  );
};
const Cx = Wd;
var Fs = Cx, Xp = {}, $x = De, yo = x;
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e], o;
      for (o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, $a.apply(this, arguments);
}
var Tx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? yo.useLayoutEffect : yo.useEffect;
Xp.ContentEditable = function({ ariaActiveDescendant: t, ariaAutoComplete: e, ariaControls: n, ariaDescribedBy: o, ariaExpanded: r, ariaLabel: i, ariaLabelledBy: a, ariaMultiline: s, ariaOwns: u, ariaRequired: c, autoCapitalize: d, className: p, id: f, role: m = "textbox", spellCheck: y = !0, style: g, tabIndex: k, "data-testid": b, ..._ }) {
  let [j] = $x.useLexicalComposerContext(), [C, L] = yo.useState(!1), N = yo.useCallback((te) => {
    j.setRootElement(te);
  }, [j]);
  return Tx(() => (L(j.isEditable()), j.registerEditableListener((te) => {
    L(te);
  })), [j]), yo.createElement(
    "div",
    $a({}, _, { "aria-activedescendant": C ? t : void 0, "aria-autocomplete": C ? e : "none", "aria-controls": C ? n : void 0, "aria-describedby": o, "aria-expanded": C && m === "combobox" ? !!r : void 0, "aria-label": i, "aria-labelledby": a, "aria-multiline": s, "aria-owns": C ? u : void 0, "aria-readonly": C ? void 0 : !0, "aria-required": c, autoCapitalize: d, className: p, contentEditable: C, "data-testid": b, id: f, ref: N, role: m, spellCheck: y, style: g, tabIndex: k })
  );
};
const Ex = Xp;
var Ls = Ex, vo = x;
function Ta(t, e) {
  return Ta = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ta(t, e);
}
function Ox(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Ta(t, e);
}
function Dx(t, e) {
  return t === void 0 && (t = []), e === void 0 && (e = []), t.length !== e.length || t.some(function(n, o) {
    return !Object.is(n, e[o]);
  });
}
var zu = { error: null }, zx = function(t) {
  function e() {
    for (var o, r = arguments.length, i = Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    return o = t.call.apply(t, [this].concat(i)) || this, o.state = zu, o.resetErrorBoundary = function() {
      for (var s, u = arguments.length, c = Array(u), d = 0; d < u; d++)
        c[d] = arguments[d];
      o.props.onReset == null || (s = o.props).onReset.apply(s, c), o.reset();
    }, o;
  }
  Ox(e, t), e.getDerivedStateFromError = function(o) {
    return { error: o };
  };
  var n = e.prototype;
  return n.reset = function() {
    this.setState(zu);
  }, n.componentDidCatch = function(o, r) {
    var i, a;
    (i = (a = this.props).onError) == null || i.call(a, o, r);
  }, n.componentDidUpdate = function(o, r) {
    var i = this.props.resetKeys;
    if (this.state.error !== null && r.error !== null && Dx(o.resetKeys, i)) {
      var a, s;
      (a = (s = this.props).onResetKeysChange) == null || a.call(s, o.resetKeys, i), this.reset();
    }
  }, n.render = function() {
    var o = this.state.error, r = this.props, i = r.fallbackRender, a = r.FallbackComponent;
    if (r = r.fallback, o !== null) {
      if (o = { error: o, resetErrorBoundary: this.resetErrorBoundary }, vo.isValidElement(r))
        return r;
      if (typeof i == "function")
        return i(o);
      if (a)
        return vo.createElement(a, o);
      throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, e;
}(vo.Component), Ix = function({ children: t, onError: e }) {
  return vo.createElement(zx, { fallback: vo.createElement("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" } }, "An error was thrown."), onError: e }, t);
};
const Nx = Ix;
var Rx = Nx;
const qs = /* @__PURE__ */ wc(Rx);
var Bs = {}, Hs = {}, ee = {}, ce = {}, z = H;
let _r = /* @__PURE__ */ new Map();
function Iu(t) {
  for (; t != null; ) {
    if (t.nodeType === Node.TEXT_NODE)
      return t;
    t = t.firstChild;
  }
  return null;
}
function Nu(t) {
  let e = t.parentNode;
  if (e == null)
    throw Error("Should never happen");
  return [e, Array.from(e.childNodes).indexOf(t)];
}
function Qp(t) {
  let e = {};
  t = t.split(";");
  for (let n of t)
    if (n !== "") {
      let [o, r] = n.split(/:([^]+)/);
      o && r && (e[o.trim()] = r.trim());
    }
  return e;
}
function Sr(t) {
  let e = _r.get(t);
  return e === void 0 && (e = Qp(t), _r.set(t, e)), e;
}
function Px(t) {
  let e = "";
  for (let n in t)
    n && (e += `${n}: ${t[n]};`);
  return e;
}
function un(t, e) {
  let n = Sr("getStyle" in t ? t.getStyle() : t.style);
  e = Object.entries(e).reduce((r, [i, a]) => (a instanceof Function ? r[i] = a(n[i]) : a === null ? delete r[i] : r[i] = a, r), { ...n });
  let o = Px(e);
  t.setStyle(o), _r.set(o, e);
}
function Ax(t) {
  for (; t !== null && !z.$isRootOrShadowRoot(t); ) {
    let e = t.getLatest(), n = t.getParent();
    e.getChildrenSize() === 0 && t.remove(!0), t = n;
  }
}
function Ui(t, e, n, o, r = null) {
  if (e.length !== 0) {
    var i = e[0], a = /* @__PURE__ */ new Map(), s = [];
    i = z.$isElementNode(i) ? i : i.getParentOrThrow(), i.isInline() && (i = i.getParentOrThrow());
    for (var u = !1; i !== null; ) {
      var c = i.getPreviousSibling();
      if (c !== null) {
        i = c, u = !0;
        break;
      }
      if (i = i.getParentOrThrow(), z.$isRootOrShadowRoot(i))
        break;
    }
    c = /* @__PURE__ */ new Set();
    for (var d = 0; d < n; d++) {
      var p = e[d];
      z.$isElementNode(p) && p.getChildrenSize() === 0 && c.add(p.getKey());
    }
    var f = /* @__PURE__ */ new Set();
    for (d = 0; d < n; d++) {
      p = e[d];
      var m = p.getParent();
      if (m !== null && m.isInline() && (m = m.getParent()), m !== null && z.$isLeafNode(p) && !f.has(p.getKey())) {
        if (p = m.getKey(), a.get(p) === void 0) {
          let y = o();
          y.setFormat(m.getFormatType()), y.setIndent(m.getIndent()), s.push(y), a.set(p, y), m.getChildren().forEach((g) => {
            y.append(g), f.add(g.getKey()), z.$isElementNode(g) && g.getChildrenKeys().forEach((k) => f.add(k));
          }), Ax(m);
        }
      } else if (c.has(p.getKey())) {
        if (!z.$isElementNode(p))
          throw Error("Expected node in emptyElements to be an ElementNode");
        m = o(), m.setFormat(p.getFormatType()), m.setIndent(p.getIndent()), s.push(m), p.remove(!0);
      }
    }
    if (r !== null)
      for (e = 0; e < s.length; e++)
        r.append(s[e]);
    if (e = null, z.$isRootOrShadowRoot(i))
      if (u)
        if (r !== null)
          i.insertAfter(r);
        else
          for (r = s.length - 1; 0 <= r; r--)
            i.insertAfter(s[r]);
      else if (u = i.getFirstChild(), z.$isElementNode(u) && (i = u), u === null)
        if (r)
          i.append(r);
        else
          for (r = 0; r < s.length; r++)
            u = s[r], i.append(u), e = u;
      else if (r !== null)
        u.insertBefore(r);
      else
        for (i = 0; i < s.length; i++)
          r = s[i], u.insertBefore(r), e = r;
    else if (r)
      i.insertAfter(r);
    else
      for (r = s.length - 1; 0 <= r; r--)
        u = s[r], i.insertAfter(u), e = u;
    s = z.$getPreviousSelection(), z.$isRangeSelection(s) && s.anchor.getNode().isAttached() && s.focus.getNode().isAttached() ? z.$setSelection(s.clone()) : e !== null ? e.selectEnd() : t.dirty = !0;
  }
}
function Zp(t, e, n, o) {
  t.modify(e ? "extend" : "move", n, o);
}
function em(t) {
  return t = t.anchor.getNode(), (z.$isRootNode(t) ? t : t.getParentOrThrow()).getDirection() === "rtl";
}
function Vi(t) {
  if (z.$isDecoratorNode(t) || !z.$isElementNode(t) || z.$isRootOrShadowRoot(t))
    return !1;
  var e = t.getFirstChild();
  return e = e === null || z.$isLineBreakNode(e) || z.$isTextNode(e) || e.isInline(), !t.isInline() && t.canBeEmpty() !== !1 && e;
}
ce.$addNodeStyle = function(t) {
  t = t.getStyle();
  let e = Qp(t);
  _r.set(t, e);
};
ce.$cloneWithProperties = function(t) {
  let e = t.constructor.clone(t);
  return e.__parent = t.__parent, e.__next = t.__next, e.__prev = t.__prev, z.$isElementNode(t) && z.$isElementNode(e) ? (e.__first = t.__first, e.__last = t.__last, e.__size = t.__size, e.__format = t.__format, e.__indent = t.__indent, e.__dir = t.__dir, e) : (z.$isTextNode(t) && z.$isTextNode(e) && (e.__format = t.__format, e.__style = t.__style, e.__mode = t.__mode, e.__detail = t.__detail), e);
};
ce.$getSelectionStyleValueForProperty = function(t, e, n = "") {
  let o = null, r = t.getNodes();
  var i = t.anchor, a = t.focus, s = t.isBackward();
  let u = s ? a.offset : i.offset;
  if (i = s ? a.getNode() : i.getNode(), t.isCollapsed() && t.style !== "" && (t = Sr(t.style), t !== null && e in t))
    return t[e];
  for (t = 0; t < r.length; t++) {
    var c = r[t];
    if ((t === 0 || u !== 0 || !c.is(i)) && z.$isTextNode(c)) {
      if (a = e, s = n, c = c.getStyle(), c = Sr(c), a = c !== null && c[a] || s, o === null)
        o = a;
      else if (o !== a) {
        o = "";
        break;
      }
    }
  }
  return o === null ? n : o;
};
ce.$isAtNodeEnd = function(t) {
  if (t.type === "text")
    return t.offset === t.getNode().getTextContentSize();
  let e = t.getNode();
  if (!z.$isElementNode(e))
    throw Error("isAtNodeEnd: node must be a TextNode or ElementNode");
  return t.offset === e.getChildrenSize();
};
ce.$isParentElementRTL = em;
ce.$moveCaretSelection = Zp;
ce.$moveCharacter = function(t, e, n) {
  let o = em(t);
  Zp(t, e, n ? !o : o, "character");
};
ce.$patchStyleText = function(t, e) {
  var n = t.getNodes(), o = n.length, r = t.getStartEndPoints();
  if (r !== null) {
    var [i, a] = r;
    --o, r = n[0];
    var s = n[o];
    if (t.isCollapsed() && z.$isRangeSelection(t))
      un(t, e);
    else {
      var u = r.getTextContent().length, c = a.offset, d = i.offset, p = i.isBefore(a), f = p ? d : c;
      t = p ? c : d;
      var m = p ? i.type : a.type, y = p ? a.type : i.type;
      if (p = p ? a.key : i.key, z.$isTextNode(r) && f === u) {
        let g = r.getNextSibling();
        z.$isTextNode(g) && (f = d = 0, r = g);
      }
      if (n.length === 1)
        z.$isTextNode(r) && r.canHaveFormat() && (f = m === "element" ? 0 : d > c ? c : d, t = y === "element" ? u : d > c ? d : c, f !== t && (f === 0 && t === u ? (un(r, e), r.select(f, t)) : (n = r.splitText(f, t), n = f === 0 ? n[0] : n[1], un(n, e), n.select(0, t - f))));
      else
        for (z.$isTextNode(r) && f < r.getTextContentSize() && r.canHaveFormat() && (f !== 0 && (r = r.splitText(f)[1], f = 0, i.set(r.getKey(), f, "text")), un(r, e)), z.$isTextNode(s) && s.canHaveFormat() && (f = s.getTextContent().length, s.__key !== p && t !== 0 && (t = f), t !== f && ([s] = s.splitText(t)), t === 0 && y !== "element" || un(s, e)), t = 1; t < o; t++)
          f = n[t], y = f.getKey(), z.$isTextNode(f) && f.canHaveFormat() && y !== r.getKey() && y !== s.getKey() && !f.isToken() && un(f, e);
    }
  }
};
ce.$selectAll = function(t) {
  let e = t.anchor;
  t = t.focus;
  var n = e.getNode().getTopLevelElementOrThrow().getParentOrThrow();
  let o = n.getFirstDescendant();
  n = n.getLastDescendant();
  let r = "element", i = "element", a = 0;
  z.$isTextNode(o) ? r = "text" : z.$isElementNode(o) || o === null || (o = o.getParentOrThrow()), z.$isTextNode(n) ? (i = "text", a = n.getTextContentSize()) : z.$isElementNode(n) || n === null || (n = n.getParentOrThrow()), o && n && (e.set(o.getKey(), 0, r), t.set(n.getKey(), a, i));
};
ce.$setBlocksType = function(t, e) {
  if (t !== null) {
    var n = t.getStartEndPoints();
    if (n = n ? n[0] : null, n !== null && n.key === "root")
      e = e(), t = z.$getRoot(), (n = t.getFirstChild()) ? n.replace(e, !0) : t.append(e);
    else {
      if (t = t.getNodes(), n !== null) {
        for (n = n.getNode(); n !== null && n.getParent() !== null && !Vi(n); )
          n = n.getParentOrThrow();
        n = Vi(n) ? n : null;
      } else
        n = !1;
      for (n && t.indexOf(n) === -1 && t.push(n), n = 0; n < t.length; n++) {
        let o = t[n];
        if (!Vi(o))
          continue;
        if (!z.$isElementNode(o))
          throw Error("Expected block node to be an ElementNode");
        let r = e();
        r.setFormat(o.getFormatType()), r.setIndent(o.getIndent()), o.replace(r, !0);
      }
    }
  }
};
ce.$shouldOverrideDefaultCharacterSelection = function(t, e) {
  return t = z.$getAdjacentNode(t.focus, e), z.$isDecoratorNode(t) && !t.isIsolated() || z.$isElementNode(t) && !t.isInline() && !t.canBeEmpty();
};
ce.$sliceSelectedTextNodeContent = function(t, e) {
  var n = t.getStartEndPoints();
  if (e.isSelected(t) && !e.isSegmented() && !e.isToken() && n !== null) {
    let [s, u] = n;
    n = t.isBackward();
    var o = s.getNode(), r = u.getNode(), i = e.is(o), a = e.is(r);
    if (i || a) {
      let [c, d] = z.$getCharacterOffsets(t);
      t = o.is(r), i = e.is(n ? r : o), r = e.is(n ? o : r), o = 0, a = void 0, t ? (o = c > d ? d : c, a = c > d ? c : d) : i ? (o = n ? d : c, a = void 0) : r && (n = n ? c : d, o = 0, a = n), e.__text = e.__text.slice(o, a);
    }
  }
  return e;
};
ce.$wrapNodes = function(t, e, n = null) {
  var o = t.getStartEndPoints(), r = o ? o[0] : null;
  o = t.getNodes();
  let i = o.length;
  if (r !== null && (i === 0 || i === 1 && r.type === "element" && r.getNode().getChildrenSize() === 0)) {
    t = r.type === "text" ? r.getNode().getParentOrThrow() : r.getNode(), o = t.getChildren();
    let s = e();
    s.setFormat(t.getFormatType()), s.setIndent(t.getIndent()), o.forEach((u) => s.append(u)), n && (s = n.append(s)), t.replace(s);
  } else {
    r = null;
    var a = [];
    for (let s = 0; s < i; s++) {
      let u = o[s];
      z.$isRootOrShadowRoot(u) ? (Ui(t, a, a.length, e, n), a = [], r = u) : r === null || r !== null && z.$hasAncestor(u, r) ? a.push(u) : (Ui(t, a, a.length, e, n), a = [u]);
    }
    Ui(t, a, a.length, e, n);
  }
};
ce.createDOMRange = function(t, e, n, o, r) {
  let i = e.getKey(), a = o.getKey(), s = document.createRange(), u = t.getElementByKey(i);
  if (t = t.getElementByKey(a), z.$isTextNode(e) && (u = Iu(u)), z.$isTextNode(o) && (t = Iu(t)), e === void 0 || o === void 0 || u === null || t === null)
    return null;
  u.nodeName === "BR" && ([u, n] = Nu(u)), t.nodeName === "BR" && ([t, r] = Nu(t)), e = u.firstChild, u === t && e != null && e.nodeName === "BR" && n === 0 && r === 0 && (r = 1);
  try {
    s.setStart(u, n), s.setEnd(t, r);
  } catch {
    return null;
  }
  return !s.collapsed || n === r && i === a || (s.setStart(t, r), s.setEnd(
    u,
    n
  )), s;
};
ce.createRectsFromDOMRange = function(t, e) {
  var n = t.getRootElement();
  if (n === null)
    return [];
  t = n.getBoundingClientRect(), n = getComputedStyle(n), n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), e = Array.from(e.getClientRects());
  let o = e.length;
  e.sort((i, a) => {
    let s = i.top - a.top;
    return 3 >= Math.abs(s) ? i.left - a.left : s;
  });
  let r;
  for (let i = 0; i < o; i++) {
    let a = e[i], s = a.width + n === t.width;
    r && r.top <= a.top && r.top + r.height > a.top && r.left + r.width > a.left || s ? (e.splice(i--, 1), o--) : r = a;
  }
  return e;
};
ce.getStyleObjectFromCSS = Sr;
ce.trimTextContentFromAnchor = function(t, e, n) {
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
      for (var s = r.getPreviousSibling(); s === null; ) {
        if (r = r.getParent(), r === null) {
          i = null;
          break;
        }
        s = r.getPreviousSibling();
      }
      r !== null && (a = r.isInline() ? 0 : 2, i = s);
    }
    if (s = o.getTextContent(), s === "" && z.$isElementNode(o) && !o.isInline() && (s = `

`), r = s.length, !z.$isTextNode(o) || n >= r)
      s = o.getParent(), o.remove(), s == null || s.getChildrenSize() !== 0 || z.$isRootNode(s) || s.remove(), n -= r + a, o = i;
    else {
      let u = o.getKey();
      a = t.getEditorState().read(() => {
        const d = z.$getNodeByKey(u);
        return z.$isTextNode(d) && d.isSimpleText() ? d.getTextContent() : null;
      }), i = r - n;
      let c = s.slice(0, i);
      a !== null && a !== s ? (n = z.$getPreviousSelection(), r = o, o.isSimpleText() ? o.setTextContent(a) : (r = z.$createTextNode(a), o.replace(r)), z.$isRangeSelection(n) && n.isCollapsed() && (n = n.anchor.offset, r.select(n, n))) : o.isSimpleText() ? (a = e.key === u, s = e.offset, s < n && (s = r), n = a ? s - n : 0, r = a ? s : i, a && n === 0 ? ([n] = o.splitText(n, r), n.remove()) : ([, n] = o.splitText(n, r), n.remove())) : (n = z.$createTextNode(c), o.replace(n)), n = 0;
    }
  }
};
const Mx = ce;
var ai = Mx, tm = ai, G = H;
function Fx(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++)
    e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function nm(...t) {
  return () => {
    t.forEach((e) => e());
  };
}
let Lx = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
function om(t, e, n) {
  function o() {
    if (a === null)
      throw Error("Unexpected null rootDOMNode");
    if (s === null)
      throw Error("Unexpected null parentDOMNode");
    let { left: f, top: m } = a.getBoundingClientRect();
    var y = s;
    let g = tm.createRectsFromDOMRange(t, e);
    d.isConnected || y.append(d), y = !1;
    for (let _ = 0; _ < g.length; _++) {
      var k = g[_];
      let j = c[_] || document.createElement("div"), C = j.style;
      C.position !== "absolute" && (C.position = "absolute", y = !0);
      var b = `${k.left - f}px`;
      C.left !== b && (C.left = b, y = !0), b = `${k.top - m}px`, C.top !== b && (j.style.top = b, y = !0), b = `${k.width}px`, C.width !== b && (j.style.width = b, y = !0), k = `${k.height}px`, C.height !== k && (j.style.height = k, y = !0), j.parentNode !== d && (d.append(j), y = !0), c[_] = j;
    }
    for (; c.length > g.length; )
      c.pop();
    y && n(c);
  }
  function r() {
    a = s = null, u !== null && u.disconnect(), u = null, d.remove();
    for (let f of c)
      f.remove();
    c = [];
  }
  function i() {
    let f = t.getRootElement();
    if (f === null)
      return r();
    let m = f.parentElement;
    if (!(m instanceof HTMLElement))
      return r();
    r(), a = f, s = m, u = new MutationObserver((y) => {
      let g = t.getRootElement(), k = g && g.parentElement;
      if (g !== a || k !== s)
        return i();
      for (let b of y)
        if (!d.contains(b.target))
          return o();
    }), u.observe(m, Lx), o();
  }
  let a = null, s = null, u = null, c = [], d = document.createElement("div"), p = t.registerRootListener(i);
  return () => {
    p(), r();
  };
}
function rm(t, e) {
  for (let n of e)
    if (t.type.startsWith(n))
      return !0;
  return !1;
}
let im = (t, e) => {
  for (; t !== G.$getRoot() && t != null; ) {
    if (e(t))
      return t;
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
  for (var o = t, r = 0; (o = o.getParent()) !== null; )
    r++;
  for (o = r; t !== null && !t.is(e); )
    if (n.push({ depth: o, node: t }), G.$isElementNode(t) && 0 < t.getChildrenSize())
      t = t.getFirstChild(), o++;
    else
      for (r = null; r === null && t !== null; )
        r = t.getNextSibling(), r === null ? (t = t.getParent(), o--) : t = r;
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
ee.$findMatchingParent = im;
ee.$getNearestBlockElementAncestorOrThrow = function(t) {
  let e = im(t, (n) => G.$isElementNode(n) && !n.isInline());
  return G.$isElementNode(e) || Fx(4, t.__key), e;
};
ee.$getNearestNodeOfType = function(t, e) {
  for (; t != null; ) {
    if (t instanceof e)
      return t;
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
    if (e = n.getNode(), n = n.offset, G.$isRootOrShadowRoot(e))
      n = e.getChildAtIndex(n), n == null ? e.append(t) : n.insertBefore(t), t.selectNext();
    else {
      let o, r;
      G.$isTextNode(e) ? (o = e.getParentOrThrow(), r = e.getIndexWithinParent(), 0 < n && (r += 1, e.splitText(n))) : (o = e, r = n), [, e] = G.$splitNode(o, r), e.insertBefore(t), e.selectStart();
    }
  } else
    e != null ? (e = e.getNodes(), e[e.length - 1].getTopLevelElementOrThrow().insertAfter(t)) : G.$getRoot().append(t), e = G.$createParagraphNode(), t.insertAfter(e), e.select();
  return t.getLatest();
};
ee.$restoreEditorState = function(t, e) {
  let n = /* @__PURE__ */ new Map(), o = t._pendingEditorState;
  for (let [r, i] of e._nodeMap) {
    let a = tm.$cloneWithProperties(i);
    if (G.$isTextNode(a)) {
      if (!G.$isTextNode(i))
        throw Error("Expected node be a TextNode");
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
ee.isMimeType = rm;
ee.markSelection = function(t, e) {
  function n(u) {
    u.read(() => {
      var c = G.$getSelection();
      if (G.$isRangeSelection(c)) {
        var { anchor: d, focus: p } = c;
        c = d.getNode();
        var f = c.getKey(), m = d.offset, y = p.getNode(), g = y.getKey(), k = p.offset, b = t.getElementByKey(f), _ = t.getElementByKey(g);
        if (f = o === null || b === null || m !== r || f !== o.getKey() || c !== o && (!(o instanceof G.TextNode) || c.updateDOM(o, b, t._config)), g = i === null || _ === null || k !== a || g !== i.getKey() || y !== i && (!(i instanceof G.TextNode) || y.updateDOM(i, _, t._config)), f || g) {
          b = t.getElementByKey(d.getNode().getKey());
          var j = t.getElementByKey(p.getNode().getKey());
          if (b !== null && j !== null && b.tagName === "SPAN" && j.tagName === "SPAN") {
            if (g = document.createRange(), p.isBefore(d) ? (f = j, _ = p.offset, j = b, b = d.offset) : (f = b, _ = d.offset, b = p.offset), f = f.firstChild, f === null || (j = j.firstChild, j === null))
              throw Error("Expected text node to be first child of span");
            g.setStart(f, _), g.setEnd(j, b), s(), s = om(t, g, (C) => {
              for (let L of C) {
                let N = L.style;
                N.background !== "Highlight" && (N.background = "Highlight"), N.color !== "HighlightText" && (N.color = "HighlightText"), N.zIndex !== "-1" && (N.zIndex = "-1"), N.pointerEvents !== "none" && (N.pointerEvents = "none"), N.marginTop !== "-1.5px" && (N.marginTop = "-1.5px"), N.paddingTop !== "4px" && (N.paddingTop = "4px"), N.paddingBottom !== "0px" && (N.paddingBottom = "0px");
              }
              e !== void 0 && e(C);
            });
          }
        }
        o = c, r = m, i = y, a = k;
      } else
        a = i = r = o = null, s(), s = () => {
        };
    });
  }
  let o = null, r = null, i = null, a = null, s = () => {
  };
  return n(t.getEditorState()), nm(t.registerUpdateListener(({ editorState: u }) => n(u)), s, () => {
    s();
  });
};
ee.mediaFileReader = function(t, e) {
  let n = t[Symbol.iterator]();
  return new Promise((o, r) => {
    let i = [], a = () => {
      const { done: s, value: u } = n.next();
      if (s)
        return o(i);
      const c = new FileReader();
      c.addEventListener("error", r), c.addEventListener("load", () => {
        const d = c.result;
        typeof d == "string" && i.push({ file: u, result: d }), a();
      }), rm(u, e) ? c.readAsDataURL(u) : a();
    };
    a();
  });
};
ee.mergeRegister = nm;
ee.objectKlassEquals = function(t, e) {
  return t !== null ? Object.getPrototypeOf(t).constructor.name === e.name : !1;
};
ee.positionNodeOnRange = om;
ee.registerNestedElementResolver = function(t, e, n, o) {
  return t.registerNodeTransform(e, (r) => {
    e: {
      for (var i = r.getChildren(), a = 0; a < i.length; a++)
        if (i[a] instanceof e) {
          i = null;
          break e;
        }
      for (i = r; i !== null; )
        if (a = i, i = i.getParent(), i instanceof e) {
          i = { child: a, parent: i };
          break e;
        }
      i = null;
    }
    if (i !== null) {
      const { child: s, parent: u } = i;
      if (s.is(r)) {
        if (o(u, r), r = s.getNextSiblings(), i = r.length, u.insertAfter(s), i !== 0) {
          a = n(u), s.insertAfter(a);
          for (let c = 0; c < i; c++)
            a.append(r[c]);
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
const qx = ee;
var on = qx, Bx = on, V = H;
function Hx(t, e, n, o, r) {
  if (t === null || n.size === 0 && o.size === 0 && !r)
    return 0;
  var i = e._selection, a = t._selection;
  if (r)
    return 1;
  if (!(V.$isRangeSelection(i) && V.$isRangeSelection(a) && a.isCollapsed() && i.isCollapsed()))
    return 0;
  r = e._nodeMap;
  let s = [];
  for (let u of n)
    n = r.get(u), n !== void 0 && s.push(n);
  for (let [u, c] of o)
    c && (o = r.get(u), o === void 0 || V.$isRootNode(o) || s.push(o));
  return s.length === 0 ? 0 : 1 < s.length ? (o = e._nodeMap, e = o.get(i.anchor.key), a = o.get(a.anchor.key), e && a && !t._nodeMap.has(e.__key) && V.$isTextNode(e) && e.__text.length === 1 && i.anchor.offset === 1 ? 2 : 0) : (e = s[0], t = t._nodeMap.get(e.__key), !V.$isTextNode(t) || !V.$isTextNode(e) || t.__mode !== e.__mode || (t = t.__text, e = e.__text, t === e) || (i = i.anchor, a = a.anchor, i.key !== a.key || i.type !== "text") ? 0 : (i = i.offset, a = a.offset, t = e.length - t.length, t === 1 && a === i - 1 ? 2 : t === -1 && a === i + 1 ? 3 : t === -1 && a === i ? 4 : 0));
}
function Ux(t, e) {
  let n = Date.now(), o = 0;
  return (r, i, a, s, u, c) => {
    let d = Date.now();
    if (c.has("historic"))
      return o = 0, n = d, 2;
    let p = Hx(r, i, s, u, t.isComposing()), f = (() => {
      var m = a === null || a.editor === t, y = c.has("history-push");
      if (!y && m && c.has("history-merge"))
        return 0;
      if (r === null)
        return 1;
      var g = i._selection;
      if (!(0 < s.size || 0 < u.size))
        return g !== null ? 0 : 2;
      if (y === !1 && p !== 0 && p === o && d < n + e && m)
        return 0;
      if (s.size === 1) {
        {
          y = Array.from(s)[0], m = r._nodeMap.get(y), y = i._nodeMap.get(y), g = r._selection;
          let k = i._selection, b = !1;
          V.$isRangeSelection(g) && V.$isRangeSelection(k) && (b = g.anchor.type === "element" && g.focus.type === "element" && k.anchor.type === "text" && k.focus.type === "text"), m = !b && V.$isTextNode(m) && V.$isTextNode(y) ? m.__type === y.__type && m.__text === y.__text && m.__mode === y.__mode && m.__detail === y.__detail && m.__style === y.__style && m.__format === y.__format && m.__parent === y.__parent : !1;
        }
        if (m)
          return 0;
      }
      return 1;
    })();
    return n = d, o = p, f;
  };
}
Hs.createEmptyHistoryState = function() {
  return { current: null, redoStack: [], undoStack: [] };
};
Hs.registerHistory = function(t, e, n) {
  let o = Ux(t, n);
  n = ({ editorState: a, prevEditorState: s, dirtyLeaves: u, dirtyElements: c, tags: d }) => {
    const p = e.current, f = e.redoStack, m = e.undoStack, y = p === null ? null : p.editorState;
    if (p === null || a !== y) {
      if (s = o(s, a, p, u, c, d), s === 1)
        f.length !== 0 && (e.redoStack = [], t.dispatchCommand(V.CAN_REDO_COMMAND, !1)), p !== null && (m.push({ ...p }), t.dispatchCommand(V.CAN_UNDO_COMMAND, !0));
      else if (s === 2)
        return;
      e.current = { editor: t, editorState: a };
    }
  };
  let r = Bx.mergeRegister(t.registerCommand(
    V.UNDO_COMMAND,
    () => {
      let a = e.redoStack, s = e.undoStack;
      if (s.length !== 0) {
        let u = e.current, c = s.pop();
        u !== null && (a.push(u), t.dispatchCommand(V.CAN_REDO_COMMAND, !0)), s.length === 0 && t.dispatchCommand(V.CAN_UNDO_COMMAND, !1), e.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
      }
      return !0;
    },
    V.COMMAND_PRIORITY_EDITOR
  ), t.registerCommand(V.REDO_COMMAND, () => {
    let a = e.redoStack;
    var s = e.undoStack;
    if (a.length !== 0) {
      let u = e.current;
      u !== null && (s.push(u), t.dispatchCommand(V.CAN_UNDO_COMMAND, !0)), s = a.pop(), a.length === 0 && t.dispatchCommand(V.CAN_REDO_COMMAND, !1), e.current = s || null, s && s.editor.setEditorState(s.editorState, { tag: "historic" });
    }
    return !0;
  }, V.COMMAND_PRIORITY_EDITOR), t.registerCommand(V.CLEAR_EDITOR_COMMAND, () => (e.undoStack = [], e.redoStack = [], e.current = null, !1), V.COMMAND_PRIORITY_EDITOR), t.registerCommand(V.CLEAR_HISTORY_COMMAND, () => (e.undoStack = [], e.redoStack = [], e.current = null, t.dispatchCommand(V.CAN_REDO_COMMAND, !1), t.dispatchCommand(V.CAN_UNDO_COMMAND, !1), !0), V.COMMAND_PRIORITY_EDITOR), t.registerUpdateListener(n)), i = t.registerUpdateListener(n);
  return () => {
    r(), i();
  };
};
const Vx = Hs;
var Wx = Vx, Kx = De, Ea = Wx, Ru = x;
function Gx(t, e, n = 1e3) {
  let o = Ru.useMemo(() => e || Ea.createEmptyHistoryState(), [e]);
  Ru.useEffect(() => Ea.registerHistory(t, o, n), [n, t, o]);
}
Bs.createEmptyHistoryState = Ea.createEmptyHistoryState;
Bs.HistoryPlugin = function({ externalHistoryState: t }) {
  let [e] = Kx.useLexicalComposerContext();
  return Gx(e, t), null;
};
const Jx = Bs;
var Us = Jx, am = {}, Yx = De, ko = x, Xx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ko.useLayoutEffect : ko.useEffect;
function Qx(t) {
  let [e] = Yx.useLexicalComposerContext(), n = ko.useMemo(() => t(e), [e, t]), o = ko.useRef(n.initialValueFn()), [r, i] = ko.useState(o.current);
  return Xx(() => {
    let { initialValueFn: a, subscribe: s } = n, u = a();
    return o.current !== u && (o.current = u, i(u)), s((c) => {
      o.current = c, i(c);
    });
  }, [n, t]), r;
}
function Zx(t) {
  return { initialValueFn: () => t.isEditable(), subscribe: (e) => t.registerEditableListener(e) };
}
var e0 = function() {
  return Qx(Zx);
};
const t0 = e0;
var n0 = t0, Pt = {}, ke = H;
function Vs(t, e = !0) {
  return t ? !1 : (t = sm(), e && (t = t.trim()), t === "");
}
function sm() {
  return ke.$getRoot().getTextContent();
}
function lm(t) {
  if (!Vs(t, !1))
    return !1;
  t = ke.$getRoot().getChildren();
  let e = t.length;
  if (1 < e)
    return !1;
  for (let o = 0; o < e; o++) {
    var n = t[o];
    if (ke.$isDecoratorNode(n))
      return !1;
    if (ke.$isElementNode(n)) {
      if (!ke.$isParagraphNode(n) || n.__indent !== 0)
        return !1;
      n = n.getChildren();
      let r = n.length;
      for (let i = 0; i < r; i++)
        if (!ke.$isTextNode(n[o]))
          return !1;
    }
  }
  return !0;
}
Pt.$canShowPlaceholder = lm;
Pt.$canShowPlaceholderCurry = function(t) {
  return () => lm(t);
};
Pt.$findTextIntersectionFromCharacters = function(t, e) {
  var n = t.getFirstChild();
  t = 0;
  e:
    for (; n !== null; ) {
      if (ke.$isElementNode(n)) {
        var o = n.getFirstChild();
        if (o !== null) {
          n = o;
          continue;
        }
      } else if (ke.$isTextNode(n)) {
        if (o = n.getTextContentSize(), t + o > e)
          return { node: n, offset: e - t };
        t += o;
      }
      if (o = n.getNextSibling(), o !== null)
        n = o;
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
Pt.$isRootTextContentEmpty = Vs;
Pt.$isRootTextContentEmptyCurry = function(t, e) {
  return () => Vs(t, e);
};
Pt.$rootTextContent = sm;
Pt.registerLexicalTextEntity = function(t, e, n, o) {
  let r = (a) => {
    const s = ke.$createTextNode(a.getTextContent());
    s.setFormat(a.getFormat()), a.replace(s);
  }, i = t.registerNodeTransform(ke.TextNode, (a) => {
    if (a.isSimpleText()) {
      var s = a.getPreviousSibling(), u = a.getTextContent(), c = a;
      if (ke.$isTextNode(s)) {
        var d = s.getTextContent(), p = e(d + u);
        if (s instanceof n) {
          if (p === null || s.getLatest().__mode !== 0) {
            r(s);
            return;
          }
          if (p = p.end - d.length, 0 < p) {
            c = u.slice(0, p), c = d + c, s.select(), s.setTextContent(c), p === u.length ? a.remove() : (s = u.slice(p), a.setTextContent(s));
            return;
          }
        } else if (p === null || p.start < d.length)
          return;
      }
      for (; ; ) {
        if (a = e(u), u = p = a === null ? "" : u.slice(a.end), p === "") {
          if (d = c.getNextSibling(), ke.$isTextNode(d)) {
            if (p = c.getTextContent() + d.getTextContent(), p = e(p), p === null) {
              d instanceof n ? r(d) : d.markDirty();
              break;
            } else if (p.start !== 0)
              break;
          }
        } else if (d = e(p), d !== null && d.start === 0)
          break;
        if (a === null)
          break;
        if (a.start === 0 && ke.$isTextNode(s) && s.isTextEntity())
          continue;
        let f;
        if (a.start === 0 ? [f, c] = c.splitText(a.end) : [, f, c] = c.splitText(a.start, a.end), a = o(f), a.setFormat(f.getFormat()), f.replace(a), c == null)
          break;
      }
    }
  });
  return t = t.registerNodeTransform(n, (a) => {
    var s = a.getTextContent();
    const u = e(s);
    u === null || u.start !== 0 ? r(a) : s.length > u.end ? a.splitText(u.end) : (s = a.getPreviousSibling(), ke.$isTextNode(s) && s.isTextEntity() && (r(s), r(a)), s = a.getNextSibling(), ke.$isTextNode(s) && s.isTextEntity() && (r(s), a instanceof n && r(a)));
  }), [i, t];
};
const o0 = Pt;
var um = o0, cm = {}, tr = H;
cm.registerDragonSupport = function(t) {
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
          const [a, s, u, c, d] = i;
          t.update(() => {
            const p = tr.$getSelection();
            if (tr.$isRangeSelection(p)) {
              var f = p.anchor;
              let m = f.getNode(), y = 0, g = 0;
              tr.$isTextNode(m) && 0 <= a && 0 <= s && (y = a, g = a + s, p.setTextNodeRange(m, y, m, g)), (y !== g || u !== "") && (p.insertRawText(u), m = f.getNode()), tr.$isTextNode(m) && (y = c, g = c + d, f = m.getTextContentSize(), y = y > f ? f : y, g = g > f ? f : g, p.setTextNodeRange(m, y, m, g)), o.stopImmediatePropagation();
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
const r0 = cm;
var i0 = r0, dm = {}, ut = {}, Ws = {}, Pu = ai, a0 = on, yn = H;
function pm(t, e, n, o = null) {
  let r = o !== null ? e.isSelected(o) : !0, i = yn.$isElementNode(e) && e.excludeFromCopy("html");
  var a = e;
  o !== null && (a = Pu.$cloneWithProperties(e), a = yn.$isTextNode(a) && o !== null ? Pu.$sliceSelectedTextNodeContent(o, a) : a);
  let s = yn.$isElementNode(a) ? a.getChildren() : [];
  var u = t._nodes.get(a.getType());
  u = u && u.exportDOM !== void 0 ? u.exportDOM(t, a) : a.exportDOM(t);
  let { element: c, after: d } = u;
  if (!c)
    return !1;
  u = document.createDocumentFragment();
  for (let p = 0; p < s.length; p++) {
    let f = s[p], m = pm(t, f, u, o);
    !r && yn.$isElementNode(e) && m && e.extractWithChild(f, o, "html") && (r = !0);
  }
  return r && !i ? (a0.isHTMLElement(c) && c.append(u), n.append(c), d && (t = d.call(a, c)) && c.replaceWith(t)) : n.append(u), r;
}
let mm = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function fm(t, e, n = /* @__PURE__ */ new Map(), o) {
  let r = [];
  if (mm.has(t.nodeName))
    return r;
  let i = null;
  var a, { nodeName: s } = t, u = e._htmlConversions.get(s.toLowerCase());
  if (s = null, u !== void 0)
    for (a of u)
      u = a(t), u !== null && (s === null || (s.priority || 0) < (u.priority || 0)) && (s = u);
  if (s = (a = s !== null ? s.conversion : null) ? a(t) : null, a = null, s !== null) {
    if (a = s.after, u = s.node, i = Array.isArray(u) ? u[u.length - 1] : u, i !== null) {
      for (var [, c] of n)
        if (i = c(i, o), !i)
          break;
      i && r.push(...Array.isArray(u) ? u : [i]);
    }
    s.forChild != null && n.set(t.nodeName, s.forChild);
  }
  for (t = t.childNodes, o = [], c = 0; c < t.length; c++)
    o.push(...fm(t[c], e, new Map(n), i));
  return a != null && (o = a(o)), i == null ? r = r.concat(o) : yn.$isElementNode(i) && i.append(...o), r;
}
Ws.$generateHtmlFromNodes = function(t, e) {
  if (typeof document > "u" || typeof window > "u" && typeof Ji.window > "u")
    throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  let n = document.createElement("div"), o = yn.$getRoot().getChildren();
  for (let r = 0; r < o.length; r++)
    pm(t, o[r], n, e);
  return n.innerHTML;
};
Ws.$generateNodesFromDOM = function(t, e) {
  e = e.body ? e.body.childNodes : [];
  let n = [];
  for (let r = 0; r < e.length; r++) {
    var o = e[r];
    mm.has(o.nodeName) || (o = fm(o, t), o !== null && (n = n.concat(o)));
  }
  return n;
};
const s0 = Ws;
var l0 = s0, hm = l0, Oa = ai, u0 = on, ne = H;
function Au(t) {
  let e = new URLSearchParams();
  e.append("code", t);
  for (let n = 1; n < arguments.length; n++)
    e.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${t}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let gm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function ym(t) {
  let e = ne.$getSelection();
  if (e == null)
    throw Error("Expected valid LexicalSelection");
  return ne.$isRangeSelection(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : hm.$generateHtmlFromNodes(t, e);
}
function vm(t) {
  let e = ne.$getSelection();
  if (e == null)
    throw Error("Expected valid LexicalSelection");
  return ne.$isRangeSelection(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify(bm(t, e));
}
function Da(t, e, n) {
  t.dispatchCommand(ne.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, { nodes: e, selection: n }) || n.insertNodes(e);
}
function km(t, e, n, o = []) {
  let r = e !== null ? n.isSelected(e) : !0, i = ne.$isElementNode(n) && n.excludeFromCopy("html");
  var a = n;
  if (e !== null) {
    var s = Oa.$cloneWithProperties(n);
    a = s = ne.$isTextNode(s) && e !== null ? Oa.$sliceSelectedTextNodeContent(e, s) : s;
  }
  let u = ne.$isElementNode(a) ? a.getChildren() : [];
  var c = a;
  s = c.exportJSON();
  var d = c.constructor;
  for (s.type !== d.getType() && Au(58, d.name), ne.$isElementNode(c) && (Array.isArray(s.children) || Au(59, d.name)), ne.$isTextNode(a) && (a = a.__text, 0 < a.length ? s.text = a : r = !1), a = 0; a < u.length; a++)
    c = u[a], d = km(t, e, c, s.children), !r && ne.$isElementNode(n) && d && n.extractWithChild(c, e, "clone") && (r = !0);
  if (r && !i)
    o.push(s);
  else if (Array.isArray(s.children))
    for (t = 0; t < s.children.length; t++)
      o.push(s.children[t]);
  return r;
}
function bm(t, e) {
  let n = [], o = ne.$getRoot().getChildren();
  for (let r = 0; r < o.length; r++)
    km(t, e, o[r], n);
  return { namespace: t._config.namespace, nodes: n };
}
function jm(t) {
  let e = [];
  for (let n = 0; n < t.length; n++) {
    let o = ne.$parseSerializedNode(t[n]);
    ne.$isTextNode(o) && Oa.$addNodeStyle(o), e.push(o);
  }
  return e;
}
let cn = null;
function Mu(t, e) {
  var n = gm ? (t._window || window).getSelection() : null;
  if (!n)
    return !1;
  var o = n.anchorNode;
  if (n = n.focusNode, o !== null && n !== null && !ne.isSelectionWithinEditor(t, o, n) || (e.preventDefault(), e = e.clipboardData, o = ne.$getSelection(), e === null || o === null))
    return !1;
  n = ym(t), t = vm(t);
  let r = "";
  return o !== null && (r = o.getTextContent()), n !== null && e.setData("text/html", n), t !== null && e.setData("application/x-lexical-editor", t), e.setData("text/plain", r), !0;
}
ut.$generateJSONFromSelectedNodes = bm;
ut.$generateNodesFromSerializedNodes = jm;
ut.$getHtmlContent = ym;
ut.$getLexicalContent = vm;
ut.$insertDataTransferForPlainText = function(t, e) {
  t = t.getData("text/plain") || t.getData("text/uri-list"), t != null && e.insertRawText(t);
};
ut.$insertDataTransferForRichText = function(t, e, n) {
  var o = t.getData("application/x-lexical-editor");
  if (o)
    try {
      let i = JSON.parse(o);
      if (i.namespace === n._config.namespace && Array.isArray(i.nodes)) {
        let a = jm(i.nodes);
        return Da(n, a, e);
      }
    } catch {
    }
  if (o = t.getData("text/html"))
    try {
      var r = new DOMParser().parseFromString(o, "text/html");
      let i = hm.$generateNodesFromDOM(n, r);
      return Da(n, i, e);
    } catch {
    }
  if (t = t.getData("text/plain") || t.getData("text/uri-list"), t != null)
    if (ne.$isRangeSelection(e))
      for (t = t.split(/(\r?\n|\t)/), t[t.length - 1] === "" && t.pop(), n = 0; n < t.length; n++)
        r = t[n], r === `
` || r === `\r
` ? e.insertParagraph() : r === "	" ? e.insertNodes([ne.$createTabNode()]) : e.insertText(r);
    else
      e.insertRawText(t);
};
ut.$insertGeneratedNodes = Da;
ut.copyToClipboard = async function(t, e) {
  if (cn !== null)
    return !1;
  if (e !== null)
    return new Promise((a) => {
      t.update(() => {
        a(Mu(t, e));
      });
    });
  var n = t.getRootElement();
  let o = t._window == null ? window.document : t._window.document, r = gm ? (t._window || window).getSelection() : null;
  if (n === null || r === null)
    return !1;
  let i = o.createElement("span");
  return i.style.cssText = "position: fixed; top: -1000px;", i.append(o.createTextNode("#")), n.append(i), n = new Range(), n.setStart(i, 0), n.setEnd(i, 1), r.removeAllRanges(), r.addRange(n), new Promise((a) => {
    let s = t.registerCommand(ne.COPY_COMMAND, (u) => (u0.objectKlassEquals(u, ClipboardEvent) && (s(), cn !== null && (window.clearTimeout(cn), cn = null), a(Mu(t, u))), !0), ne.COMMAND_PRIORITY_CRITICAL);
    cn = window.setTimeout(() => {
      s(), cn = null, a(!1);
    }, 50), o.execCommand("copy"), i.remove();
  });
};
const c0 = ut;
var d0 = c0, Ks = d0, nr = ai, p0 = on, $ = H;
let Kn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m0 = Kn && "documentMode" in document ? document.documentMode : null, f0 = Kn && "InputEvent" in window && !m0 ? "getTargetRanges" in new window.InputEvent("input") : !1, h0 = Kn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), g0 = Kn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, y0 = Kn && /^(?=.*Chrome).*/i.test(navigator.userAgent), v0 = Kn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !y0;
function xm(t, e) {
  e.update(() => {
    if (t !== null) {
      let n = t instanceof KeyboardEvent ? null : t.clipboardData, o = $.$getSelection();
      if (o !== null && n != null) {
        t.preventDefault();
        let r = Ks.$getHtmlContent(e);
        r !== null && n.setData("text/html", r), n.setData("text/plain", o.getTextContent());
      }
    }
  });
}
function k0(t, e) {
  t.preventDefault(), e.update(() => {
    let n = $.$getSelection(), { clipboardData: o } = t;
    o != null && $.$isRangeSelection(n) && Ks.$insertDataTransferForPlainText(o, n);
  }, { tag: "paste" });
}
function b0(t, e) {
  xm(t, e), e.update(() => {
    let n = $.$getSelection();
    $.$isRangeSelection(n) && n.removeText();
  });
}
dm.registerPlainText = function(t) {
  return p0.mergeRegister(
    t.registerCommand($.DELETE_CHARACTER_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (n.deleteCharacter(e), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.DELETE_WORD_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (n.deleteWord(e), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.DELETE_LINE_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (n.deleteLine(e), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.CONTROLLED_TEXT_INSERTION_COMMAND, (e) => {
      const n = $.$getSelection();
      if (!$.$isRangeSelection(n))
        return !1;
      if (typeof e == "string")
        n.insertText(e);
      else {
        const o = e.dataTransfer;
        o != null ? Ks.$insertDataTransferForPlainText(o, n) : (e = e.data) && n.insertText(e);
      }
      return !0;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.REMOVE_TEXT_COMMAND, () => {
      const e = $.$getSelection();
      return $.$isRangeSelection(e) ? (e.removeText(), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand(
      $.INSERT_LINE_BREAK_COMMAND,
      (e) => {
        const n = $.$getSelection();
        return $.$isRangeSelection(n) ? (n.insertLineBreak(e), !0) : !1;
      },
      $.COMMAND_PRIORITY_EDITOR
    ),
    t.registerCommand($.INSERT_PARAGRAPH_COMMAND, () => {
      const e = $.$getSelection();
      return $.$isRangeSelection(e) ? (e.insertLineBreak(), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.KEY_ARROW_LEFT_COMMAND, (e) => {
      const n = $.$getSelection();
      if (!$.$isRangeSelection(n))
        return !1;
      const o = e.shiftKey;
      return nr.$shouldOverrideDefaultCharacterSelection(n, !0) ? (e.preventDefault(), nr.$moveCharacter(
        n,
        o,
        !0
      ), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.KEY_ARROW_RIGHT_COMMAND, (e) => {
      const n = $.$getSelection();
      if (!$.$isRangeSelection(n))
        return !1;
      const o = e.shiftKey;
      return nr.$shouldOverrideDefaultCharacterSelection(n, !1) ? (e.preventDefault(), nr.$moveCharacter(n, o, !1), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.KEY_BACKSPACE_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (e.preventDefault(), t.dispatchCommand($.DELETE_CHARACTER_COMMAND, !0)) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.KEY_DELETE_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (e.preventDefault(), t.dispatchCommand($.DELETE_CHARACTER_COMMAND, !1)) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.KEY_ENTER_COMMAND, (e) => {
      const n = $.$getSelection();
      if (!$.$isRangeSelection(n))
        return !1;
      if (e !== null) {
        if ((g0 || h0 || v0) && f0)
          return !1;
        e.preventDefault();
      }
      return t.dispatchCommand($.INSERT_LINE_BREAK_COMMAND, !1);
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.SELECT_ALL_COMMAND, () => ($.$selectAll(), !0), $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.COPY_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (xm(e, t), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.CUT_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (b0(e, t), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.PASTE_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (k0(e, t), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.DROP_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (e.preventDefault(), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR),
    t.registerCommand($.DRAGSTART_COMMAND, (e) => {
      const n = $.$getSelection();
      return $.$isRangeSelection(n) ? (e.preventDefault(), !0) : !1;
    }, $.COMMAND_PRIORITY_EDITOR)
  );
};
const j0 = dm;
var x0 = j0, wm = De, w0 = n0, Ae = x, _0 = um, _m = on, Fu = Cc, S0 = i0, C0 = x0, Gs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ae.useLayoutEffect : Ae.useEffect;
function Lu(t) {
  return t.getEditorState().read(_0.$canShowPlaceholderCurry(t.isComposing()));
}
function $0(t) {
  let [e, n] = Ae.useState(() => Lu(t));
  return Gs(() => {
    function o() {
      let r = Lu(t);
      n(r);
    }
    return o(), _m.mergeRegister(t.registerUpdateListener(() => {
      o();
    }), t.registerEditableListener(() => {
      o();
    }));
  }, [t]), e;
}
function T0(t, e) {
  let [n, o] = Ae.useState(() => t.getDecorators());
  return Gs(() => t.registerDecoratorListener((r) => {
    Fu.flushSync(() => {
      o(r);
    });
  }), [t]), Ae.useEffect(() => {
    o(t.getDecorators());
  }, [t]), Ae.useMemo(() => {
    let r = [], i = Object.keys(n);
    for (let a = 0; a < i.length; a++) {
      let s = i[a], u = Ae.createElement(e, { onError: (d) => t._onError(d) }, Ae.createElement(Ae.Suspense, { fallback: null }, n[s])), c = t.getElementByKey(s);
      c !== null && r.push(Fu.createPortal(u, c, s));
    }
    return r;
  }, [e, n, t]);
}
function E0(t) {
  Gs(() => _m.mergeRegister(C0.registerPlainText(t), S0.registerDragonSupport(t)), [t]);
}
function O0({ content: t }) {
  var [e] = wm.useLexicalComposerContext();
  e = $0(e);
  let n = w0();
  return e ? typeof t == "function" ? t(n) : t : null;
}
am.PlainTextPlugin = function({ contentEditable: t, placeholder: e, ErrorBoundary: n }) {
  let [o] = wm.useLexicalComposerContext();
  return n = T0(o, n), E0(o), Ae.createElement(Ae.Fragment, null, t, Ae.createElement(O0, { content: e }), n);
};
const D0 = am;
var Js = D0;
function z0() {
  const [t] = De.useLexicalComposerContext();
  return x.useEffect(() => t.registerNodeTransform(H.LineBreakNode, (e) => {
    e.remove();
  }), [t]), null;
}
const I0 = `background-color: var(${h.badgeBackground}); color: var(${h.badgeForeground}); border-radius: 4px;`, N0 = `background-color: var(${h.badgeBackground}); color: var(${h.badgeForeground}); border-radius: 4px;`;
class $t extends H.TextNode {
  constructor(n, o, r) {
    super(n, r);
    xi(this, "__exists");
    this.__exists = o;
  }
  static getType() {
    return "variable";
  }
  static clone(n) {
    return new $t(n.__text, n.__exists, n.__key);
  }
  static importJSON(n) {
    const o = Cr(n.text, n.exists);
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
    return this.__exists ? o.style.cssText = I0 : o.style.cssText = N0, o.className = "variable", o;
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
function Cr(t, e) {
  return new $t(t, e);
}
var At = {}, Ys = De, se = H, X = x, qu = on, R0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? X.useLayoutEffect : X.useEffect;
class P0 {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
}
let Bu = (t) => {
  const e = document.getElementById("typeahead-menu");
  if (e) {
    var n = e.getBoundingClientRect();
    n.top + n.height > window.innerHeight && e.scrollIntoView({ block: "center" }), 0 > n.top && e.scrollIntoView({ block: "center" }), t.scrollIntoView({ block: "nearest" });
  }
};
function A0(t) {
  var e = se.$getSelection();
  if (!se.$isRangeSelection(e) || !e.isCollapsed())
    return null;
  var n = e.anchor;
  if (n.type !== "text" || (e = n.getNode(), !e.isSimpleText()))
    return null;
  n = n.offset;
  let o = e.getTextContent().slice(0, n);
  var r = t.matchingString;
  t = t.replaceableString.length;
  for (let a = t; a <= r.length; a++)
    o.substr(-a) === r.substr(0, a) && (t = a);
  if (t = n - t, 0 > t)
    return null;
  let i;
  return t === 0 ? [i] = e.splitText(n) : [, i] = e.splitText(t, n), i;
}
function M0(t, e) {
  let n = getComputedStyle(t), o = n.position === "absolute";
  if (e = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n.position === "fixed")
    return document.body;
  for (; t = t.parentElement; )
    if (n = getComputedStyle(t), (!o || n.position !== "static") && e.test(n.overflow + n.overflowY + n.overflowX))
      return t;
  return document.body;
}
function Hu(t, e) {
  return t = t.getBoundingClientRect(), e = e.getBoundingClientRect(), t.top > e.top && t.top < e.bottom;
}
function Sm(t, e, n, o) {
  let [r] = Ys.useLexicalComposerContext();
  X.useEffect(() => {
    if (e != null && t != null) {
      let i = r.getRootElement(), a = i != null ? M0(i, !1) : document.body, s = !1, u = Hu(e, a), c = function() {
        s || (window.requestAnimationFrame(function() {
          n(), s = !1;
        }), s = !0);
        const p = Hu(e, a);
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
let Uu = se.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function F0({ close: t, editor: e, anchorElementRef: n, resolution: o, options: r, menuRenderFn: i, onSelectOption: a, shouldSplitNodeWithQuery: s = !1, commandPriority: u = se.COMMAND_PRIORITY_LOW }) {
  let [c, d] = X.useState(null);
  X.useEffect(() => {
    d(0);
  }, [o.match && o.match.matchingString]);
  let p = X.useCallback((y) => {
    e.update(() => {
      const g = o.match != null && s ? A0(o.match) : null;
      a(y, g, t, o.match ? o.match.matchingString : "");
    });
  }, [e, s, o.match, a, t]), f = X.useCallback((y) => {
    const g = e.getRootElement();
    g !== null && (g.setAttribute(
      "aria-activedescendant",
      "typeahead-item-" + y
    ), d(y));
  }, [e]);
  X.useEffect(() => () => {
    let y = e.getRootElement();
    y !== null && y.removeAttribute("aria-activedescendant");
  }, [e]), R0(() => {
    r === null ? d(null) : c === null && f(0);
  }, [r, c, f]), X.useEffect(() => qu.mergeRegister(e.registerCommand(Uu, ({ option: y }) => y.ref && y.ref.current != null ? (Bu(y.ref.current), !0) : !1, u)), [e, f, u]), X.useEffect(() => qu.mergeRegister(e.registerCommand(se.KEY_ARROW_DOWN_COMMAND, (y) => {
    if (r !== null && r.length && c !== null) {
      let g = c !== r.length - 1 ? c + 1 : 0;
      f(g);
      let k = r[g];
      k.ref != null && k.ref.current && e.dispatchCommand(Uu, { index: g, option: k }), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, u), e.registerCommand(se.KEY_ARROW_UP_COMMAND, (y) => {
    if (r !== null && r.length && c !== null) {
      var g = c !== 0 ? c - 1 : r.length - 1;
      f(g), g = r[g], g.ref != null && g.ref.current && Bu(g.ref.current), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, u), e.registerCommand(se.KEY_ESCAPE_COMMAND, (y) => (y.preventDefault(), y.stopImmediatePropagation(), t(), !0), u), e.registerCommand(se.KEY_TAB_COMMAND, (y) => r === null || c === null || r[c] == null ? !1 : (y.preventDefault(), y.stopImmediatePropagation(), p(r[c]), !0), u), e.registerCommand(se.KEY_ENTER_COMMAND, (y) => r === null || c === null || r[c] == null ? !1 : (y !== null && (y.preventDefault(), y.stopImmediatePropagation()), p(r[c]), !0), u)), [p, t, e, r, c, f, u]);
  let m = X.useMemo(() => ({ options: r, selectOptionAndCleanUp: p, selectedIndex: c, setHighlightedIndex: d }), [p, c, r]);
  return i(n, m, o.match ? o.match.matchingString : "");
}
function L0(t, e, n, o = document.body) {
  let [r] = Ys.useLexicalComposerContext(), i = X.useRef(document.createElement("div")), a = X.useCallback(
    () => {
      i.current.style.top = i.current.style.bottom;
      const u = r.getRootElement(), c = i.current;
      var d = c.firstChild;
      if (u !== null && t !== null) {
        const { left: f, top: m, width: y, height: g } = t.getRect();
        if (c.style.top = `${m + window.pageYOffset + i.current.offsetHeight + 3}px`, c.style.left = `${f + window.pageXOffset}px`, c.style.height = `${g}px`, c.style.width = `${y}px`, d !== null) {
          d.style.top = `${m}`;
          var p = d.getBoundingClientRect();
          d = p.height, p = p.width;
          const k = u.getBoundingClientRect();
          f + p > k.right && (c.style.left = `${k.right - p + window.pageXOffset}px`), (m + d > window.innerHeight || m + d > k.bottom) && m - k.top > d && (c.style.top = `${m - d + window.pageYOffset - g}px`);
        }
        c.isConnected || (n != null && (c.className = n), c.setAttribute("aria-label", "Typeahead menu"), c.setAttribute("id", "typeahead-menu"), c.setAttribute("role", "listbox"), c.style.display = "block", c.style.position = "absolute", o.append(c)), i.current = c, u.setAttribute("aria-controls", "typeahead-menu");
      }
    },
    [r, t, n, o]
  );
  X.useEffect(() => {
    let u = r.getRootElement();
    if (t !== null)
      return a(), () => {
        u !== null && u.removeAttribute("aria-controls");
        let c = i.current;
        c !== null && c.isConnected && c.remove();
      };
  }, [r, a, t]);
  let s = X.useCallback((u) => {
    t !== null && (u || e(null));
  }, [t, e]);
  return Sm(t, i.current, a, s), i;
}
function q0(t, e, n) {
  var o = n.getSelection();
  if (o === null || !o.isCollapsed || (n = o.anchorNode, o = o.anchorOffset, n == null || o == null))
    return !1;
  try {
    e.setStart(n, t), e.setEnd(n, o);
  } catch {
    return !1;
  }
  return !0;
}
function B0(t) {
  let e = null;
  return t.getEditorState().read(() => {
    var n = se.$getSelection();
    if (se.$isRangeSelection(n)) {
      var o = n.anchor;
      o.type !== "text" ? e = null : (n = o.getNode(), n.isSimpleText() ? (o = o.offset, e = n.getTextContent().slice(0, o)) : e = null);
    }
  }), e;
}
function H0(t, e) {
  return e !== 0 ? !1 : t.getEditorState().read(() => {
    var n = se.$getSelection();
    return se.$isRangeSelection(n) ? (n = n.anchor.getNode().getPreviousSibling(), se.$isTextNode(n) && n.isTextEntity()) : !1;
  });
}
function U0(t) {
  X.startTransition ? X.startTransition(t) : t();
}
let V0 = se.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
At.LexicalTypeaheadMenuPlugin = function({ options: t, onQueryChange: e, onSelectOption: n, onOpen: o, onClose: r, menuRenderFn: i, triggerFn: a, anchorClassName: s, commandPriority: u = se.COMMAND_PRIORITY_LOW, parent: c }) {
  let [d] = Ys.useLexicalComposerContext(), [p, f] = X.useState(null);
  s = L0(p, f, s, c);
  let m = X.useCallback(() => {
    f(null), r != null && p !== null && r();
  }, [r, p]), y = X.useCallback((g) => {
    f(g), o != null && p === null && o(g);
  }, [o, p]);
  return X.useEffect(() => {
    let g = d.registerUpdateListener(() => {
      d.getEditorState().read(() => {
        const k = d._window || window, b = k.document.createRange(), _ = se.$getSelection(), j = B0(d);
        if (se.$isRangeSelection(_) && _.isCollapsed() && j !== null && b !== null) {
          var C = a(j, d);
          e(C ? C.matchingString : null), C === null || H0(d, C.leadOffset) || q0(C.leadOffset, b, k) === null ? m() : U0(() => y({ getRect: () => b.getBoundingClientRect(), match: C }));
        } else
          m();
      });
    });
    return () => {
      g();
    };
  }, [d, a, e, p, m, y]), p === null || d === null ? null : X.createElement(F0, { close: m, resolution: p, editor: d, anchorElementRef: s, options: t, menuRenderFn: i, shouldSplitNodeWithQuery: !0, onSelectOption: n, commandPriority: u });
};
At.MenuOption = P0;
At.PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
At.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = V0;
At.getScrollParent = function(t, e) {
  let n = getComputedStyle(t), o = n.position === "absolute";
  if (e = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n.position === "fixed")
    return document.body;
  for (; t = t.parentElement; )
    if (n = getComputedStyle(t), (!o || n.position !== "static") && e.test(n.overflow + n.overflowY + n.overflowX))
      return t;
  return document.body;
};
At.useBasicTypeaheadTriggerMatch = function(t, { minLength: e = 1, maxLength: n = 75 }) {
  return X.useCallback((o) => {
    if (o = new RegExp("(^|\\s|\\()([" + t + "]((?:[^" + (t + `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;\\s]){0,`) + n + "}))$").exec(o), o !== null) {
      let r = o[1], i = o[3];
      if (i.length >= e)
        return { leadOffset: o.index + r.length, matchingString: i, replaceableString: o[2] };
    }
    return null;
  }, [n, e, t]);
};
At.useDynamicPositioning = Sm;
const W0 = At;
var Cm = W0, $m = {}, K0 = De, G0 = um, J0 = on, Y0 = x;
$m.useLexicalTextEntity = function(t, e, n) {
  let [o] = K0.useLexicalComposerContext();
  Y0.useEffect(() => J0.mergeRegister(...G0.registerLexicalTextEntity(o, t, e, n)), [n, o, t, e]);
};
const X0 = $m;
var Q0 = X0;
const Z0 = 10;
function ew(t, e) {
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
function tw(t) {
  return ew(t, 0);
}
class nw extends Cm.MenuOption {
  constructor(n) {
    super(n);
    xi(this, "name");
    this.name = n;
  }
}
function ow({
  index: t,
  isSelected: e,
  onClick: n,
  onMouseEnter: o,
  option: r
}) {
  let i = "item";
  return e && (i += " selected"), /* @__PURE__ */ l.jsx(
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
      children: /* @__PURE__ */ l.jsx("span", { className: "text", children: r.name })
    },
    r.key
  );
}
function Tm({
  variables: t
}) {
  const [e] = De.useLexicalComposerContext(), n = x.useCallback(
    (p) => {
      const f = p.getTextContent().slice(2, -2);
      return Cr(p.getTextContent(), t.includes(f));
    },
    [t]
  ), o = x.useCallback((p) => {
    const f = /({{[\w-$]+}})/.exec(p);
    if (f === null)
      return null;
    const m = f[1].length, y = f.index, g = y + m;
    return {
      start: y,
      end: g
    };
  }, []);
  Q0.useLexicalTextEntity(o, $t, n), x.useEffect(() => {
    e.update(() => {
      const p = H.$nodesOfType($t);
      for (const f of p) {
        const m = f.getTextContent().slice(2, -2);
        f.setExists(t.includes(m));
      }
    });
  }, [t]);
  const [r, i] = x.useState(null), [a, s] = x.useState([]);
  x.useEffect(() => {
    s(
      r !== null ? t.filter((p) => p.toLowerCase().includes(r.toLowerCase())) : t
    );
  }, [t, r]);
  const u = x.useMemo(
    () => a.map((p) => new nw(p)).slice(0, Z0),
    [a]
  ), c = x.useCallback(
    (p, f, m) => {
      e.update(() => {
        const y = Cr("{{" + p.name + "}}", !0);
        f && f.replace(y), y.select(), m();
      });
    },
    [e]
  ), d = x.useCallback(
    (p) => tw(p),
    [e]
  );
  return /* @__PURE__ */ l.jsx(
    Cm.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: i,
      onSelectOption: c,
      triggerFn: d,
      options: u,
      menuRenderFn: (p, { selectedIndex: f, selectOptionAndCleanUp: m, setHighlightedIndex: y }) => p.current && a.length ? Cc.createPortal(
        /* @__PURE__ */ l.jsx(rw, { children: /* @__PURE__ */ l.jsx("ul", { children: u.map((g, k) => /* @__PURE__ */ l.jsx(
          ow,
          {
            index: k,
            isSelected: f === k,
            onClick: () => {
              y(k), m(g);
            },
            onMouseEnter: () => {
              y(k);
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
const rw = v.div`
  margin-top: 20px;
  background-color: var(${h.dropdownBackground});
  border: 1px solid var(${h.dropdownBorder});
  min-width: 150px;
  padding: 4px;

  > ul {
    padding: 0;
    list-style: none;
    margin: 0;
    // max-height: 200px;
    // overflow-y: scroll;
    // -ms-overflow-style: none;
    // scrollbar-width: none;

    > li.selected {
      background-color: var(${h.listActiveSelectionBackground});
      color: var(${h.listActiveSelectionForeground});
    }

    > li:hover {
      //background-color: var(${h.listHoverBackground});
    }

    > li {
      margin: 2px;
      color: var(${h.dropdownForeground});
      display: flex;
      gap: 8px;
      align-items: center;

      // margin: 0;
      // min-width: 180px;
      // font-size: 14px;
      // outline: none;
      // cursor: pointer;
      // border-radius: 8px;

      // margin: 0 8px 0 8px;
      // padding: 8px;
      // color: #050505;
      // cursor: pointer;
      // line-height: 16px;
      // font-size: 15px;
      // display: flex;
      // align-content: center;
      // flex-direction: row;
      // flex-shrink: 0;
      // background-color: #fff;
      // border-radius: 8px;
      // border: 0;
    }
  }

  > ul::-webkit-scrollbar {
    // display: none;
  }
`, iw = /({{[\w\-$]+}})/;
function Xs(t) {
  return (typeof t == "string" ? t : `${t}`).split(iw).map((o, r) => r % 2 !== 0 ? Cr(o, !1) : H.$createTextNode(o));
}
function Em({ onFocus: t }) {
  const [e] = De.useLexicalComposerContext();
  return x.useEffect(() => {
    let n = null;
    e.registerCommand(
      H.BLUR_COMMAND,
      () => (n !== null && clearTimeout(n), n = setTimeout(() => {
        t(!1);
      }, 100), !1),
      H.COMMAND_PRIORITY_EDITOR
    ), e.registerCommand(
      H.FOCUS_COMMAND,
      () => (n !== null && (clearTimeout(n), n = null), t(!0), !1),
      H.COMMAND_PRIORITY_EDITOR
    );
  }, []), null;
}
function si({
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
  const s = {
    namespace: "editor",
    editorState: () => {
      const d = H.$createParagraphNode();
      d.append(...Xs(n ? n(i.value) : i.value)), H.$getRoot().append(d);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: a,
    nodes: [$t]
  }, [u, c] = x.useState(!1);
  return /* @__PURE__ */ l.jsx(aw, { ...r, onBlur: i.onBlur, children: /* @__PURE__ */ l.jsx(Fs.LexicalComposer, { initialConfig: s, children: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      Js.PlainTextPlugin,
      {
        contentEditable: /* @__PURE__ */ l.jsx(Ls.ContentEditable, {}),
        placeholder: /* @__PURE__ */ l.jsx("div", {}),
        ErrorBoundary: qs
      }
    ),
    /* @__PURE__ */ l.jsx(Us.HistoryPlugin, {}),
    u && e !== void 0 && /* @__PURE__ */ l.jsx(Tm, { variables: e }),
    /* @__PURE__ */ l.jsx(sw, { name: t, decode: o }),
    /* @__PURE__ */ l.jsx(Em, { onFocus: (d) => c(d) }),
    /* @__PURE__ */ l.jsx(z0, {})
  ] }) }) });
}
const aw = v.div`
  background: transparent;
  padding: 2px;
  color: var(${h.foreground});
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
function sw({ name: t, decode: e }) {
  const [n] = De.useLexicalComposerContext(), { field: o } = Q({
    name: t
  });
  return x.useEffect(() => {
    o.ref({ focus: () => n.focus() });
    const r = n.registerTextContentListener((a) => {
      try {
        o.onChange(e ? e(a) : a);
      } catch (s) {
        o.onChange(s);
      }
    }), i = n.registerCommand(
      H.BLUR_COMMAND,
      (a, s) => (o.onBlur(), !1),
      H.COMMAND_PRIORITY_LOW
    );
    return () => {
      r(), i();
    };
  }, [n, o]), null;
}
function lw({
  name: t,
  remove: e,
  variables: n
}) {
  const { control: o } = Zt(), {
    field: r,
    fieldState: { error: i }
  } = Q({
    name: `${t}.key`,
    control: o,
    rules: {
      pattern: {
        value: Ir(),
        message: Nr
      }
    }
  }), { field: a } = Q({
    name: `${t}.value`,
    control: o
  }), { field: s } = Q({
    name: `${t}.type`,
    control: o
  }), u = uw(a.value);
  return /* @__PURE__ */ l.jsxs(cw, { children: [
    /* @__PURE__ */ l.jsxs(dw, { children: [
      /* @__PURE__ */ l.jsx(pw, { type: "text", ...r }),
      /* @__PURE__ */ l.jsx(mw, { variables: n, name: `${t}.value` }),
      /* @__PURE__ */ l.jsxs(fw, { ...s, children: [
        /* @__PURE__ */ l.jsx("option", { value: "string", children: "string" }),
        /* @__PURE__ */ l.jsx("option", { value: "number", disabled: !u.has("number"), children: "number" }),
        /* @__PURE__ */ l.jsx("option", { value: "boolean", disabled: !u.has("boolean"), children: "boolean" }),
        /* @__PURE__ */ l.jsx("option", { value: "null", disabled: !u.has("null"), children: "null" })
      ] }),
      /* @__PURE__ */ l.jsx(
        hw,
        {
          onClick: (c) => {
            c.preventDefault(), c.stopPropagation(), e();
          },
          children: /* @__PURE__ */ l.jsx(He, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ l.jsxs(gw, { children: [
      /* @__PURE__ */ l.jsx(Or, {}),
      "  ",
      i.message
    ] })
  ] });
}
function uw(t) {
  const e = /* @__PURE__ */ new Set(["string"]);
  try {
    const o = typeof JSON.parse(t);
    o === "number" || o === "boolean" ? e.add(o) : t === "null" && e.add("null");
  } catch {
  }
  return e;
}
const cw = v.div`
  display: contents;
`, dw = v.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, pw = v.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  padding: 4px 8px;
`, mw = v(si)`
  flex: 2;
  border-bottom: 1px solid var(${h.border});
  padding: 4px 8px;
`, fw = v.select`
  border: none;
  background: transparent;
  color: var(${h.foreground});
  border-bottom: 1px solid var(${h.border});
  padding: 4px 8px;
`, hw = v.button`
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
    fill: var(${h.foreground});
  }
`, gw = v.div`
  padding: 4px;
  display: flex;
`;
function yw({ name: t, append: e }) {
  return /* @__PURE__ */ l.jsxs(
    vw,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), e({ key: t, value: "", type: "string" }, { shouldFocus: !0 });
      },
      children: [
        /* @__PURE__ */ l.jsx("span", { children: t }),
        /* @__PURE__ */ l.jsx(Qh, {})
      ]
    }
  );
}
const vw = v.span`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(${h.linkForeground});
  cursor: pointer;
  > svg {
    fill: var(${h.linkForeground});
  }
`;
function Vo({
  name: t,
  variables: e,
  missing: n
}) {
  const { control: o } = Zt(), { fields: r, append: i, remove: a } = en({
    control: o,
    name: t
  });
  return /* @__PURE__ */ l.jsxs(kw, { children: [
    /* @__PURE__ */ l.jsxs(bw, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Name" }),
      /* @__PURE__ */ l.jsx("div", { children: "Value" }),
      /* @__PURE__ */ l.jsx("div", { children: "Type" }),
      /* @__PURE__ */ l.jsx("div", {})
    ] }),
    r.map((s, u) => /* @__PURE__ */ l.jsx(
      lw,
      {
        name: `${t}.${u}`,
        variables: e,
        remove: () => {
          a(u);
        }
      },
      s.id
    )),
    /* @__PURE__ */ l.jsx($j, { append: i }),
    n && (n == null ? void 0 : n.length) > 0 && /* @__PURE__ */ l.jsxs(jw, { children: [
      /* @__PURE__ */ l.jsx(lt, {}),
      " ",
      /* @__PURE__ */ l.jsx("span", { className: "message", children: "Unset variables" }),
      n.map((s) => /* @__PURE__ */ l.jsx(yw, { name: s, append: i }, s))
    ] })
  ] });
}
const kw = v.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 1fr 7em 2em;
`, bw = v.div`
  display: contents;
  > div {
    background-color: var(${h.computedOne});
    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, jw = v.div`
  margin-top: 8px;
  padding: 8px;
  border: 1px solid var(${h.border});
  grid-column: span 3;
  display: flex;
  align-items: center;
  gap: 6px;
  > svg {
    fill: var(${h.errorForeground});
  }
  > span.message {
    color: var(${h.errorForeground});
  }
`;
function xw(t, e, n) {
  const o = Qf(t, t.paths[e]), r = $r(t, e, n), i = Zf(t, r);
  return eh(t, o, i);
}
function ww(t, e, n) {
  const o = $r(t, e, n);
  return ((o == null ? void 0 : o.security) ?? t.security ?? []).length > 0;
}
function _w(t, e, n) {
  var a, s, u, c;
  const o = $r(t, e, n), r = (o == null ? void 0 : o.security) ?? t.security ?? [], i = [];
  for (const d of r) {
    const p = {};
    for (const f of Object.keys(d))
      if ((s = (a = t == null ? void 0 : t.components) == null ? void 0 : a.securitySchemes) != null && s[f]) {
        const m = Sn(t, (c = (u = t == null ? void 0 : t.components) == null ? void 0 : u.securitySchemes) == null ? void 0 : c[f]);
        m !== void 0 && (p[f] = m);
      }
    i.push(p);
  }
  return i;
}
function Sw(t) {
  return t = pe.simpleClone(t), {
    ...t,
    fuzzing: t.fuzzing === !0,
    expectedResponse: t.expectedResponse !== void 0 ? t.expectedResponse : "",
    environment: Qs(t.environment),
    responses: Zs(t.responses)
  };
}
function Cw(t) {
  return {
    ...t,
    fuzzing: t.fuzzing === !0 ? !0 : void 0,
    expectedResponse: t.expectedResponse !== "" ? t.expectedResponse : void 0,
    environment: tl(t.environment),
    responses: el(t.responses)
  };
}
function $w(t) {
  return t = pe.simpleClone(t), {
    path: t.request.path,
    method: t.request.method,
    parameters: t.request.parameters,
    body: t.request.body,
    environment: Qs(t.environment),
    defaultResponse: t.defaultResponse,
    injectionKey: t.injectionKey,
    fuzzing: t.fuzzing,
    operationId: t.operationId,
    requestOperationId: t.request.operationId,
    responses: Zs(t.responses),
    auth: t.auth
  };
}
function Tw(t) {
  return t = pe.simpleClone(t), {
    url: t.request.url,
    method: t.request.method,
    parameters: t.request.parameters,
    body: t.request.body,
    environment: Qs(t.environment),
    defaultResponse: t.defaultResponse,
    responses: Zs(t.responses)
  };
}
function Qs(t) {
  return Object.entries(t || {}).map(([n, o]) => ({
    key: n,
    value: o,
    type: typeof o
  }));
}
function Zs(t) {
  return Object.entries(t || {}).map(([e, n]) => ({
    key: e,
    value: {
      ...n,
      variableAssignments: Ew(n.variableAssignments)
    }
  }));
}
function el(t) {
  const e = {};
  for (const { key: n, value: o } of t)
    e[n] = {
      ...o,
      variableAssignments: Ow(o.variableAssignments)
    };
  return e;
}
function Ew(t) {
  return Object.entries(t || {}).map(([e, n]) => ({
    key: e,
    value: n
  }));
}
function Ow(t) {
  const e = {};
  for (const { key: n, value: o } of t)
    e[n] = o;
  return e;
}
function Dw(t) {
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
    environment: tl(t.environment),
    defaultResponse: t.defaultResponse,
    responses: el(t.responses),
    auth: t.auth,
    operationId: t.operationId
  };
}
function zw(t) {
  return t = pe.simpleClone(t), {
    request: {
      url: t.url,
      method: t.method,
      parameters: t.parameters,
      body: t.body
    },
    environment: tl(t.environment),
    defaultResponse: t.defaultResponse,
    responses: el(t.responses),
    operationId: void 0
  };
}
function tl(t) {
  const e = {};
  for (const n of t)
    e[n.key] = Iw(n.value, n.type);
  return e;
}
function Iw(t, e) {
  if (e !== "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return `${t}`;
}
function nl({
  name: t,
  options: e,
  placeholder: n
}) {
  const { field: o } = Q({
    name: t
  });
  return /* @__PURE__ */ l.jsx(
    Ln,
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
function Nw({
  stage: t,
  oas: e,
  result: n,
  saveStage: o,
  removeStage: r,
  location: i,
  fuzzing: a,
  operations: s,
  requests: u,
  goToRequest: c
}) {
  var _, j;
  const [{ isDragging: d }, p] = Fy(() => ({
    type: "stage",
    item: { location: i },
    collect: (C) => ({
      isDragging: !!C.isDragging()
    })
  })), f = t.ref.type === "operation" ? s[t.ref.id] : u[t.ref.id], m = Aw(f), y = Pw(f), g = [
    ...y.filter((C) => C !== "default").map((C) => ({ label: C, value: C }))
  ], k = [
    ...Ya,
    ...Rw(((_ = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : _.stack) || [])
  ], b = Array.from(new Set(((j = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : j.missing) || [])).map(
    (C) => C.name
  );
  return /* @__PURE__ */ l.jsx(
    Ze,
    {
      data: t,
      saveData: o,
      wrapFormData: Sw,
      unwrapFormData: Cw,
      children: /* @__PURE__ */ l.jsx(
        Mw,
        {
          ref: p,
          style: {
            opacity: d ? 0.5 : 1,
            cursor: d ? "move" : "auto"
          },
          children: /* @__PURE__ */ l.jsxs(Qt, { children: [
            /* @__PURE__ */ l.jsxs(Fw, { children: [
              /* @__PURE__ */ l.jsxs("span", { children: [
                t.ref.id,
                /* @__PURE__ */ l.jsx(
                  Fc,
                  {
                    onClick: (C) => {
                      C.preventDefault(), C.stopPropagation(), c(t.ref);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ l.jsxs(Lw, { onClick: (C) => C.stopPropagation(), children: [
                b.length > 0 && /* @__PURE__ */ l.jsx(
                  Vu,
                  {
                    message: "Unset variables",
                    description: "There are unset variables in this step of the scenario. You can set their values in the 'Environment' section of the step, or in the 'Response processing' section of the previous steps."
                  }
                ),
                f === void 0 && /* @__PURE__ */ l.jsx(
                  Vu,
                  {
                    message: `${t.ref.type}/${t.ref.id} is missing`,
                    description: "Target of a reference is missing"
                  }
                ),
                /* @__PURE__ */ l.jsxs(qw, { children: [
                  /* @__PURE__ */ l.jsx("span", { children: "Expected Response" }),
                  /* @__PURE__ */ l.jsx(
                    nl,
                    {
                      name: "expectedResponse",
                      options: g,
                      placeholder: m
                    }
                  )
                ] }),
                a && /* @__PURE__ */ l.jsxs(Bw, { children: [
                  /* @__PURE__ */ l.jsx("span", { children: "Fuzzing" }),
                  /* @__PURE__ */ l.jsx(Md, { name: "fuzzing" })
                ] }),
                /* @__PURE__ */ l.jsx(Hw, { className: "grab", children: /* @__PURE__ */ l.jsx(Gh, {}) }),
                /* @__PURE__ */ l.jsx(Nt, { children: /* @__PURE__ */ l.jsxs(tn, { onClick: (C) => C.stopPropagation(), onSelect: r, children: [
                  /* @__PURE__ */ l.jsx(He, {}),
                  "Delete"
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ l.jsx(
              Et,
              {
                tabs: [
                  {
                    id: "environment",
                    title: "Environment",
                    content: /* @__PURE__ */ l.jsx(
                      Vo,
                      {
                        name: "environment",
                        variables: k,
                        missing: b
                      }
                    ),
                    counter: b.length,
                    counterKind: "error"
                  },
                  {
                    id: "responses",
                    title: "Response processing",
                    content: /* @__PURE__ */ l.jsx(Wr, { editable: !0, responseCodes: y })
                  }
                  // TODO re-enable when VariableUsed UI is improved
                  // {
                  //   id: "variables",
                  //   title: "Variables used",
                  //   content: (
                  //     <VariableUsed
                  //       missing={result?.variablesReplaced?.missing}
                  //       found={result?.variablesReplaced?.found}
                  //     />
                  //   ),
                  // },
                ]
              }
            )
          ] })
        }
      )
    }
  );
}
function Rw(t) {
  const e = [];
  for (const n of t)
    for (const o of Object.keys(n.env))
      e.includes(o) || e.push(o);
  return e.sort(), e;
}
function Pw(t) {
  if (t !== void 0) {
    const e = "scenarios" in t ? t.request.responses : t.responses;
    return Object.keys(e || {}).map((o) => o);
  }
  return [];
}
function Aw(t) {
  if (t !== void 0)
    return ("scenarios" in t ? t.request : t).defaultResponse;
}
const Mw = v.div`
  background-color: var(${h.background});
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
`, Fw = v.div`
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
`, Lw = v.div`
  cursor: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`, qw = v.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  > div {
    width: 60px;
    border: 1px solid var(${h.border});
  }
`, Bw = v.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`, Hw = v.div`
  cursor: grab;
  > svg {
    fill: var(${h.foreground});
  }
`;
function Vu({ message: t, description: e }) {
  return /* @__PURE__ */ l.jsx(Wa, { children: /* @__PURE__ */ l.jsxs(Ka, { children: [
    /* @__PURE__ */ l.jsx(Ga, { asChild: !0, children: /* @__PURE__ */ l.jsxs(Uw, { children: [
      /* @__PURE__ */ l.jsx(lt, {}),
      " ",
      /* @__PURE__ */ l.jsx("span", { children: t })
    ] }) }),
    /* @__PURE__ */ l.jsx(Ja, { children: /* @__PURE__ */ l.jsx(Vw, { children: e }) })
  ] }) });
}
const Uw = v.div`
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
`, Vw = v(Va)`
  max-width: 400px;
  color: var(${h.notificationsForeground});
  background-color: var(${h.notificationsBackground});
  border: 1px solid var(${h.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function En({
  oas: t,
  stages: e,
  container: n,
  executionResult: o,
  saveStage: r,
  removeStage: i,
  moveStage: a,
  fuzzing: s,
  operations: u,
  requests: c,
  goToRequest: d
}) {
  const p = (g) => (k) => r(g, k), f = (g) => () => i(g), [{ isOver: m }, y] = td(() => ({
    accept: "stage",
    collect: (g) => ({
      isOver: !!g.isOver()
    })
  }));
  return e.length === 0 ? null : /* @__PURE__ */ l.jsx(Kw, { ref: y, children: e.map((g, k) => {
    var _;
    const b = { ...n, stageIndex: k };
    return /* @__PURE__ */ l.jsxs(Rn.Fragment, { children: [
      m && /* @__PURE__ */ l.jsx(Ww, { moveStage: a, destinationIndex: k }),
      /* @__PURE__ */ l.jsx(
        Nw,
        {
          oas: t,
          stage: g,
          result: (_ = o == null ? void 0 : o.results) == null ? void 0 : _[k],
          saveStage: p(b),
          removeStage: f(b),
          goToRequest: d,
          location: b,
          fuzzing: s,
          operations: u,
          requests: c
        }
      )
    ] }, `stage-${k}-${g.ref.type}-${g.ref.id}`);
  }) });
}
function Ww({
  destinationIndex: t,
  moveStage: e
}) {
  const [{ isOver: n }, o] = td(() => ({
    accept: "stage",
    drop: (r) => e(r.location, t),
    collect: (r) => ({
      isOver: !!r.isOver()
    })
  }));
  return /* @__PURE__ */ l.jsx(Gw, { ref: o, isOver: n });
}
const Kw = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Gw = v.div`
  display: flex;
  border: 16px solid var(${h.border});
  opacity: 0.5;
  cursor: pointer;
  ${({ isOver: t }) => t && "opacity: 1;"}
`;
function Jw({
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
  const [a, s] = x.useState(i), { isOpen: u, getMenuProps: c, getInputProps: d, getItemProps: p, openMenu: f } = zr({
    initialInputValue: o,
    items: a,
    onSelectedItemChange: ({ selectedItem: m }) => {
      m && n(m);
    },
    onInputValueChange: ({ inputValue: m }) => {
      s(
        i.filter((y) => !m || y.id.toLowerCase().includes(m))
      );
    },
    itemToString: (m) => m ? m.id : ""
  });
  return /* @__PURE__ */ l.jsxs(Yw, { children: [
    /* @__PURE__ */ l.jsx(
      Xw,
      {
        autoFocus: !0,
        ...d({
          onFocus() {
            f();
          }
        }),
        placeholder: r,
        onBlur: (m) => {
          n(void 0);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(Qw, { children: /* @__PURE__ */ l.jsx(Zw, { ...c(), isOpen: u, children: u && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(Wu, { children: "Operations" }),
      a.map((m, y) => m.type === "operation" ? /* @__PURE__ */ l.jsx(
        "li",
        {
          ...p({
            item: m,
            index: y
          }),
          children: m.id
        },
        `li-${m.type}-${m.id}-${y}`
      ) : null),
      /* @__PURE__ */ l.jsx(Wu, { children: "Requests" }),
      a.map((m, y) => m.type === "request" ? /* @__PURE__ */ l.jsx(
        "li",
        {
          ...p({
            item: m,
            index: y
          }),
          children: m.id
        },
        `li-${m.type}-${m.id}-${y}`
      ) : null)
    ] }) }) })
  ] });
}
const Yw = v.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${h.border});
`, Xw = v.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  &::placeholder {
    color: var(${h.inputPlaceholderForeground});
  }
`, Qw = v.div`
  position: relative;
  z-index: 1;
`, Zw = v.ul`
  ${({ isOpen: t }) => t && `border: 1px solid var(${h.dropdownBorder});`}
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
`, Wu = v.div`
  font-weight: 600;
  margin: 4px;
`;
function On({
  operationIds: t,
  requestIds: e,
  onSelect: n
}) {
  const [o, r] = x.useState(!1);
  return o ? /* @__PURE__ */ l.jsx(
    Jw,
    {
      onSelect: (i) => {
        i !== void 0 && n(i), r(!1);
      },
      requestIds: e,
      operationIds: t
    }
  ) : /* @__PURE__ */ l.jsxs(
    e1,
    {
      onClick: (i) => {
        i.stopPropagation(), i.preventDefault(), r(!0);
      },
      children: [
        /* @__PURE__ */ l.jsx(Fo, {}),
        " Pick the operation"
      ]
    }
  );
}
const e1 = v.div`
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
function t1({
  onAddCredentialValue: t,
  existing: e
}) {
  const n = { name: "", value: "" }, o = (i) => {
    t(i.name, { credential: i.value, requests: [] });
  }, r = An({
    name: K().regex(Ir(), {
      message: Nr
    }).refine((i) => !e.includes(i), {
      message: "Already exists"
    }),
    value: K().min(1)
  });
  return /* @__PURE__ */ l.jsx(
    Vr,
    {
      defaultValues: n,
      onSubmit: o,
      schema: r,
      trigger: /* @__PURE__ */ l.jsx(o1, { children: /* @__PURE__ */ l.jsx(Fo, {}) }),
      children: /* @__PURE__ */ l.jsx(n1, {})
    }
  );
}
function n1() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Me, { label: "Name", name: "name" }),
    /* @__PURE__ */ l.jsx(Me, { label: "Value", name: "value" })
  ] });
}
const o1 = v.button`
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
function r1({
  group: t,
  credentialId: e
}) {
  const n = me(), { playbook: o, oas: r, selectedSubcredential: i } = F((j) => j.scanconf), { mockResult: a } = F((j) => j.auth), s = Object.keys(o.operations), u = Object.keys(o.requests || {}), c = (j) => n(zt(j)), d = (j, C) => n(It({ location: j, reference: C })), p = (j, C) => n(Dt({ location: j, to: C })), f = (j, C) => {
    n(
      Ot({
        container: j,
        stage: {
          ref: C
        }
      })
    );
  }, m = (j) => {
    n(Vt(j)), n(ae(["scanconf", "requests"]));
  }, { fields: y, append: g, remove: k } = en({
    name: "methods"
  }), { getValues: b } = Zt(), _ = y.map((j, C) => ({
    id: j.key,
    title: j.key,
    menu: /* @__PURE__ */ l.jsx(Nt, { children: /* @__PURE__ */ l.jsxs(tn, { onClick: (L) => L.stopPropagation(), onSelect: () => k(C), children: [
      /* @__PURE__ */ l.jsx(He, {}),
      "Delete"
    ] }) }),
    content: /* @__PURE__ */ l.jsxs(i1, { value: j.key, children: [
      /* @__PURE__ */ l.jsx(Me, { label: "Credential value", name: `methods.${C}.value.credential` }),
      /* @__PURE__ */ l.jsxs(a1, { children: [
        /* @__PURE__ */ l.jsx(
          En,
          {
            oas: r,
            stages: j.value.requests,
            container: {
              container: "credential",
              group: t,
              credentialId: e,
              subCredentialId: j.key
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
        /* @__PURE__ */ l.jsx(
          On,
          {
            operationIds: s,
            requestIds: u,
            onSelect: (L) => f(
              { container: "credential", group: t, credentialId: e, subCredentialId: j.key },
              L
            )
          }
        )
      ] })
    ] })
  }));
  return /* @__PURE__ */ l.jsx(
    Et,
    {
      activeTab: i,
      setActiveTab: (j) => n(pr(j)),
      tabs: _,
      menu: /* @__PURE__ */ l.jsx(
        t1,
        {
          existing: b("methods").map((j) => j.key),
          onAddCredentialValue: (j, C) => {
            g({ key: j, value: C }), n(pr(j));
          }
        }
      )
    }
  );
}
const i1 = v(Oh)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, a1 = v.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function Om({
  options: t,
  placeholder: e,
  selected: n,
  onSelectedItemChange: o
}) {
  const [r, i] = x.useState(""), [a, s] = x.useState(t);
  x.useEffect(() => {
    s(
      t.filter((f) => r === "" || f.toLowerCase().includes(r.toLowerCase()))
    );
  }, [r, t]);
  const { isOpen: u, getMenuProps: c, getInputProps: d, getItemProps: p } = zr({
    initialInputValue: n,
    items: a,
    onInputValueChange: ({ inputValue: f }) => {
      o(f), i(f !== void 0 ? f : "");
    },
    itemToString: (f) => f || ""
  });
  return /* @__PURE__ */ l.jsxs(s1, { children: [
    /* @__PURE__ */ l.jsx(l1, { ...d(), placeholder: e }),
    /* @__PURE__ */ l.jsx(u1, { visible: u && a.length > 0, children: /* @__PURE__ */ l.jsx(c1, { ...c(), children: a.map((f, m) => /* @__PURE__ */ l.jsx(
      "li",
      {
        ...p({
          item: f,
          index: m
        }),
        children: f
      },
      `li-${m}`
    )) }) })
  ] });
}
const s1 = v.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${h.focusBorder});
  }
  border: 1px solid transparent;
`, l1 = v.input`
  background: transparent;
  border: none;
  color: var(${h.foreground});
  padding: 4px;
  &::placeholder {
    color: var(${h.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, u1 = v.div`
  position: relative;
  z-index: 1;
  visibility: ${({ visible: t }) => t ? "visible" : "hidden"};
`, c1 = v.ul`
  border: 1px solid var(${h.dropdownBorder});
  background-color: var(${h.dropdownBackground});
  color: var(${h.dropdownForeground});
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
    background-color: var(${h.listHoverBackground});
  }
`;
function Eo({
  onTry: t,
  onScan: e,
  servers: n,
  host: o,
  menu: r
}) {
  const { scanServer: i, useGlobalBlocks: a, rejectUnauthorized: s } = xh(
    (g) => g.prefs
  ), u = wh(), c = (g) => u(Ic(g)), d = (g) => u(_h(g)), p = (g) => u(Sh(g)), f = [...n];
  o && !f.includes(o) && f.unshift(o);
  const [m, y] = x.useState(
    i !== "" ? i : f[0]
  );
  return !f.includes(i) && i !== "" && f.push(i), /* @__PURE__ */ l.jsx(p1, { children: /* @__PURE__ */ l.jsxs(d1, { children: [
    /* @__PURE__ */ l.jsx(
      Om,
      {
        options: f,
        selected: m,
        onSelectedItemChange: (g) => {
          g && (y(g), c(g));
        }
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Ku,
      {
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault(), t(m);
        },
        children: [
          /* @__PURE__ */ l.jsx(Hc, {}),
          "Try"
        ]
      }
    ),
    e && /* @__PURE__ */ l.jsxs(
      Ku,
      {
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault(), e(m);
        },
        children: [
          /* @__PURE__ */ l.jsx(Yh, {}),
          "Scan"
        ]
      }
    ),
    r && /* @__PURE__ */ l.jsx(m1, { children: /* @__PURE__ */ l.jsxs(Nt, { icon: "sliders", children: [
      /* @__PURE__ */ l.jsx(wb, { children: "Try settings" }),
      /* @__PURE__ */ l.jsx(xb, {}),
      /* @__PURE__ */ l.jsxs(
        ru,
        {
          checked: a,
          onCheckedChange: (g) => d(g),
          children: [
            /* @__PURE__ */ l.jsx(ou, {}),
            "Execute global blocks"
          ]
        }
      ),
      /* @__PURE__ */ l.jsxs(
        ru,
        {
          checked: s,
          onCheckedChange: (g) => p(g),
          children: [
            /* @__PURE__ */ l.jsx(ou, {}),
            "Reject untrusted SSL certificates"
          ]
        }
      )
    ] }) })
  ] }) });
}
const d1 = v.div`
  border: 1px solid var(${h.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, p1 = v.div`
  background-color: var(${h.background});
  color: var(${h.foreground});
`, Ku = v.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  color: var(${h.linkForeground});
  > svg {
    fill: var(${h.linkForeground});
  }
`, m1 = v.div`
  display: flex;
  padding: 8px 12px;
`;
function f1({ selected: t }) {
  const e = me(), {
    playbook: { authenticationDetails: n },
    servers: o
  } = F((c) => c.scanconf), { tryResult: r } = F((c) => c.auth), i = (c, d, p) => e(ls({ group: parseInt(c), id: d, credential: p })), a = parseInt(t.sectionId), s = t.itemId, u = n[a][s];
  return /* @__PURE__ */ l.jsxs(h1, { children: [
    /* @__PURE__ */ l.jsx(
      Eo,
      {
        servers: o,
        onTry: (c) => {
          e(jd(c));
        }
      }
    ),
    /* @__PURE__ */ l.jsx(xe, { title: "Credential", children: /* @__PURE__ */ l.jsx(
      yb,
      {
        credential: u,
        saveCredential: (c) => i(t.sectionId, t.itemId, c)
      },
      t.itemId
    ) }),
    /* @__PURE__ */ l.jsx(
      xe,
      {
        defaultOpen: !1,
        title: "Credential values",
        count: Object.keys(u.methods).length,
        children: /* @__PURE__ */ l.jsx(
          Ze,
          {
            data: u,
            saveData: (c) => i(t.sectionId, t.itemId, c),
            wrapFormData: Pd,
            unwrapFormData: Ad,
            children: /* @__PURE__ */ l.jsx(r1, { group: a, credentialId: s })
          }
        )
      }
    ),
    r.length > 0 && /* @__PURE__ */ l.jsx(xe, { title: "Result", children: /* @__PURE__ */ l.jsx($n, { result: r }) })
  ] });
}
const h1 = v.div`
  padding: 8px;
`, Oo = v.button`
  cursor: pointer;
  background-color: var(${h.buttonBackground});
  color: var(${h.buttonForeground});
  border: 1px solid var(${h.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${h.focusBorder});
  }
`;
function g1() {
  const t = Po({ name: "type" });
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Me, { label: "ID", name: "id" }),
    /* @__PURE__ */ l.jsx(
      Yi,
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
    t !== "basic" && t !== "bearer" && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Yi,
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
      /* @__PURE__ */ l.jsx(Me, { label: "Name", name: "name" })
    ] }),
    /* @__PURE__ */ l.jsx(Me, { label: "Description", name: "description" }),
    /* @__PURE__ */ l.jsx(Me, { label: "Credential Name", name: "credentialName" }),
    /* @__PURE__ */ l.jsx(Me, { label: "Credential Value", name: "credentialValue" })
  ] });
}
function y1({
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
  }, o = An({
    id: K().regex(Ir(), {
      message: Nr
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
  return /* @__PURE__ */ l.jsx(
    Vr,
    {
      title: "New credential",
      defaultValues: n,
      schema: o,
      onSubmit: r,
      trigger: /* @__PURE__ */ l.jsx(Oo, { style: { width: "100%" }, children: "New credential" }),
      children: /* @__PURE__ */ l.jsx(g1, {})
    }
  );
}
function v1() {
  const t = me(), {
    playbook: { authenticationDetails: e },
    selectedCredentialGroup: n,
    selectedCredential: o
  } = F((a) => a.scanconf), r = (a, s) => {
    t(as({ credentialGroup: 0, id: a, credential: s })), t(dr({ group: 0, credential: a }));
  }, i = e.map((a, s) => {
    const u = s === 0 ? "Default credential group" : `Credential group ${s}`, c = Object.entries(a).map(([d, p]) => ({
      id: d,
      label: d,
      menu: /* @__PURE__ */ l.jsx(Nt, { children: /* @__PURE__ */ l.jsxs(
        tn,
        {
          onClick: (f) => f.stopPropagation(),
          onSelect: () => t(ss({ credentialGroup: s, id: d })),
          children: [
            /* @__PURE__ */ l.jsx(He, {}),
            "Delete"
          ]
        }
      ) })
    }));
    return {
      id: `${s}`,
      title: u,
      items: c
    };
  });
  return /* @__PURE__ */ l.jsx(
    Pn,
    {
      title: "credentials",
      sections: i,
      render: (a) => /* @__PURE__ */ l.jsx(f1, { selected: a }),
      renderButtons: () => /* @__PURE__ */ l.jsx(
        y1,
        {
          existing: Object.keys((e == null ? void 0 : e[0]) || []),
          onAddCredential: r
        }
      ),
      selected: o !== void 0 ? { sectionId: `${n}`, itemId: o } : void 0,
      onSelected: (a) => {
        t(
          dr({ group: parseInt(a.sectionId), credential: a.itemId })
        );
      }
    }
  );
}
function Dm() {
  return /* @__PURE__ */ new Map();
}
function k1(t, e, n, o) {
  const r = e.ttl !== void 0 ? ra(e.ttl) : void 0;
  if (r !== void 0) {
    const i = `${e.name}/${n}`, a = Date.now() + r;
    t.set(i, { value: o, expiryTime: a });
  }
}
function b1(t, e, n) {
  const o = `${e.name}/${n}`, r = t.get(o);
  if (r && Date.now() < r.expiryTime)
    return r.value;
  t.delete(o);
}
function ol(t, e) {
  return e.type === t.type && e.in === t.in || e.type === "http" && t.type == "basic" && e.in === t.in || e.type === "basic" && t.type == "basic" && e.in === t.in ? !0 : e.type === "http" && e.scheme == "bearer" && t.type === "bearer";
}
function j1(t, e, n) {
  const o = Tc(t, t.paths[e]), r = Tr(t, e, n), i = Ec(t, r);
  return Oc(t, o, i);
}
async function x1(t, e, n, o, r) {
  try {
    const i = Er(t) ? await w1(t, e, n, o, r) : await _1(t, e, n, o, r);
    for (const { key: a, value: s } of o.parameters.header)
      i.headers[a.toLowerCase()] === void 0 && (i.headers[a] = String(s));
    return [
      {
        method: o.method,
        url: i.url,
        headers: i.headers,
        body: zm(i.body)
      },
      void 0
    ];
  } catch (i) {
    return [void 0, `failed to build http request: ${i}`];
  }
}
async function w1(t, e, n, o, r) {
  var c;
  const i = Ua(t, o.path, o.method);
  if (i === void 0)
    throw new Error(`operation not found for ${o.method} ${o.path}`);
  const a = Rm(
    o.method,
    o.path,
    i
  ), s = N1(o);
  return Mo.buildRequest({
    spec: await C1(t, e),
    operationId: a,
    parameters: T1(o.parameters, r),
    securities: O1(t, r),
    requestContentType: s,
    requestBody: (c = o.body) == null ? void 0 : c.value
  });
}
async function _1(t, e, n, o, r) {
  const i = Ua(t, o.path, o.method);
  if (i === void 0)
    throw new Error(`operation not found for ${o.method} ${o.path}`);
  const a = Rm(
    o.method,
    o.path,
    i
  );
  return Mo.buildRequest({
    spec: await $1(t, e),
    operationId: a,
    parameters: E1(t, o, r),
    securities: z1((t == null ? void 0 : t.securityDefinitions) || {}, r)
  });
}
async function S1(t) {
  var n, o, r, i;
  const e = new URLSearchParams(
    Gu(t.parameters.query)
  ).toString();
  try {
    const a = Gu(t.parameters.header);
    ((n = t.body) == null ? void 0 : n.mediaType) !== void 0 && (a["Content-Type"] = (o = t.body) == null ? void 0 : o.mediaType);
    const s = ((r = t.body) == null ? void 0 : r.mediaType) === "application/x-www-form-urlencoded" ? I1(t.body.value) : (i = t.body) == null ? void 0 : i.value;
    return [
      {
        method: t.method,
        url: e === "" ? t.url : `${t.url}?${e}`,
        headers: a,
        body: zm(s)
      },
      void 0
    ];
  } catch (a) {
    return [void 0, `failed to build http request: ${a}`];
  }
}
async function C1(t, e, n) {
  const o = [{ url: e }], { spec: r, errors: i } = await Mo.resolve({
    spec: JSON.parse(JSON.stringify({ ...t, servers: o }))
  });
  return r;
}
async function $1(t, e, n) {
  const o = new URL(e), r = o.protocol === "https:" ? ["https"] : ["http"], { spec: i, errors: a } = await Mo.resolve({
    spec: JSON.parse(JSON.stringify({ ...t, host: o.host, schemes: r }))
  });
  return i;
}
function zm(t) {
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
function T1(t, e) {
  const n = ["path", "query", "header", "cookie"], o = Im(t, n);
  for (const { credential: r, value: i } of Object.values(e))
    n.includes(r.in) && r.name !== void 0 && (o[`${r.in}.${r.name}`] = i);
  return o;
}
function E1(t, e, n) {
  var s;
  const o = ["path", "query", "header"], r = Im(e.parameters, o);
  for (const { credential: u, value: c } of Object.values(n))
    o.includes(u.in) && u.name !== void 0 && (r[`${u.in}.${u.name}`] = c);
  const i = j1(t, e.path, e.method), a = Object.keys(i.body);
  if (a.length > 0) {
    const u = a[0];
    r[`body.${u}`] = (s = e.body) == null ? void 0 : s.value;
  }
  return r;
}
function Im(t, e) {
  const n = {};
  for (const o of e)
    for (const { key: r, value: i } of t[o]) {
      const a = `${o}.${r}`;
      n[a] === void 0 ? n[a] = i : Array.isArray(n[a]) ? n[a].push(i) : n[a] = [n[a], i];
    }
  return n;
}
function O1(t, e) {
  const n = D1(t), o = Nm(n, e), r = {};
  for (const i of Object.keys(o)) {
    const a = Sn(t, n[i]), s = o[i];
    (a == null ? void 0 : a.type) === "oauth2" || (a == null ? void 0 : a.type) === "openIdConnect" ? r[i] = { token: { access_token: s } } : r[i] = s;
  }
  return { authorized: r };
}
function D1(t) {
  var n;
  const e = {};
  for (const [o, r] of Object.entries(((n = t.components) == null ? void 0 : n.securitySchemes) || {})) {
    const i = Sn(t, r);
    i !== void 0 && (e[o] = i);
  }
  return e;
}
function z1(t, e) {
  const n = {}, o = Nm(t, e);
  for (const r of Object.keys(o)) {
    const i = t[r], a = o[r];
    (i == null ? void 0 : i.type) === "oauth" ? n[r] = { token: { access_token: a } } : n[r] = a;
  }
  return { authorized: n };
}
function Nm(t, e) {
  const n = { ...e }, o = {};
  for (const [r, i] of Object.entries(t))
    for (const [a, { credential: s, value: u }] of Object.entries(n))
      if (ol(s, i)) {
        o[r] = u, delete n[a];
        break;
      }
  return o;
}
function Gu(t) {
  const e = {};
  for (const { key: n, value: o } of t)
    e[n] = String(o);
  return e;
}
function I1(t) {
  const e = new URLSearchParams();
  for (const [n, o] of Object.entries(t))
    e.append(n, `${o}`);
  return e.toString();
}
function Rm(t, e, n) {
  return Mo.helpers.opId(n, e, t);
}
function N1(t) {
  var e, n;
  if (((e = t.body) == null ? void 0 : e.mediaType) === "raw") {
    for (const { key: o, value: r } of t.parameters.header)
      if (o.toLowerCase() === "content-type")
        return String(r);
    return "text/plain";
  }
  return (n = t.body) == null ? void 0 : n.mediaType;
}
const li = null;
function We(t) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, We(t);
}
function Pm(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ju(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
  }
}
function Am(t, e, n) {
  return e && Ju(t.prototype, e), n && Ju(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function R1(t, e) {
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
  }), e && zo(t, e);
}
function Do(t) {
  return Do = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Do(t);
}
function zo(t, e) {
  return zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, zo(t, e);
}
function Mm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function bo(t, e, n) {
  return Mm() ? bo = Reflect.construct.bind() : bo = function(r, i, a) {
    var s = [null];
    s.push.apply(s, i);
    var u = Function.bind.apply(r, s), c = new u();
    return a && zo(c, a.prototype), c;
  }, bo.apply(null, arguments);
}
function P1(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function za(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return za = function(o) {
    if (o === null || !P1(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(o))
        return e.get(o);
      e.set(o, r);
    }
    function r() {
      return bo(o, arguments, Do(this).constructor);
    }
    return r.prototype = Object.create(o.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), zo(r, o);
  }, za(t);
}
function A1(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function M1(t, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return A1(t);
}
function F1(t) {
  var e = Mm();
  return function() {
    var o = Do(t), r;
    if (e) {
      var i = Do(this).constructor;
      r = Reflect.construct(o, arguments, i);
    } else
      r = o.apply(this, arguments);
    return M1(this, r);
  };
}
function L1(t) {
  return q1(t) || B1(t) || Fm(t) || H1();
}
function q1(t) {
  if (Array.isArray(t))
    return Ia(t);
}
function B1(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Fm(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ia(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ia(t, e);
  }
}
function Ia(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, o = new Array(e); n < e; n++)
    o[n] = t[n];
  return o;
}
function H1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U1(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Fm(t)) || e && t && typeof t.length == "number") {
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
  var i = !0, a = !1, s;
  return {
    s: function() {
      n = n.call(t);
    },
    n: function() {
      var u = n.next();
      return i = u.done, u;
    },
    e: function(u) {
      a = !0, s = u;
    },
    f: function() {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a)
          throw s;
      }
    }
  };
}
var _e = Object.prototype.hasOwnProperty;
function Bt(t, e) {
  return t = t.slice(), t.push(e), t;
}
function Na(t, e) {
  return e = e.slice(), e.unshift(t), e;
}
var V1 = /* @__PURE__ */ function(t) {
  R1(n, t);
  var e = F1(n);
  function n(o) {
    var r;
    return Pm(this, n), r = e.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), r.avoidNew = !0, r.value = o, r.name = "NewError", r;
  }
  return Am(n);
}(/* @__PURE__ */ za(Error));
function B(t, e, n, o, r) {
  if (!(this instanceof B))
    try {
      return new B(t, e, n, o, r);
    } catch (u) {
      if (!u.avoidNew)
        throw u;
      return u.value;
    }
  typeof t == "string" && (r = o, o = n, n = e, e = t, t = null);
  var i = t && We(t) === "object";
  if (t = t || {}, this.json = t.json || n, this.path = t.path || e, this.resultType = t.resultType || "value", this.flatten = t.flatten || !1, this.wrap = _e.call(t, "wrap") ? t.wrap : !0, this.sandbox = t.sandbox || {}, this.preventEval = t.preventEval || !1, this.parent = t.parent || null, this.parentProperty = t.parentProperty || null, this.callback = t.callback || o || null, this.otherTypeCallback = t.otherTypeCallback || r || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, t.autostart !== !1) {
    var a = {
      path: i ? t.path : e
    };
    i ? "json" in t && (a.json = t.json) : a.json = n;
    var s = this.evaluate(a);
    if (!s || We(s) !== "object")
      throw new V1(s);
    return s;
  }
}
B.prototype.evaluate = function(t, e, n, o) {
  var r = this, i = this.parent, a = this.parentProperty, s = this.flatten, u = this.wrap;
  if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, n = n || this.callback, this.currOtherTypeCallback = o || this.otherTypeCallback, e = e || this.json, t = t || this.path, t && We(t) === "object" && !Array.isArray(t)) {
    if (!t.path && t.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!_e.call(t, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    var c = t;
    e = c.json, s = _e.call(t, "flatten") ? t.flatten : s, this.currResultType = _e.call(t, "resultType") ? t.resultType : this.currResultType, this.currSandbox = _e.call(t, "sandbox") ? t.sandbox : this.currSandbox, u = _e.call(t, "wrap") ? t.wrap : u, this.currPreventEval = _e.call(t, "preventEval") ? t.preventEval : this.currPreventEval, n = _e.call(t, "callback") ? t.callback : n, this.currOtherTypeCallback = _e.call(t, "otherTypeCallback") ? t.otherTypeCallback : this.currOtherTypeCallback, i = _e.call(t, "parent") ? t.parent : i, a = _e.call(t, "parentProperty") ? t.parentProperty : a, t = t.path;
  }
  if (i = i || null, a = a || null, Array.isArray(t) && (t = B.toPathString(t)), !(!t && t !== "" || !e)) {
    var d = B.toPathArray(t);
    d[0] === "$" && d.length > 1 && d.shift(), this._hasParentSelector = null;
    var p = this._trace(d, e, ["$"], i, a, n).filter(function(f) {
      return f && !f.isParentSelector;
    });
    return p.length ? !u && p.length === 1 && !p[0].hasArrExpr ? this._getPreferredOutput(p[0]) : p.reduce(function(f, m) {
      var y = r._getPreferredOutput(m);
      return s && Array.isArray(y) ? f = f.concat(y) : f.push(y), f;
    }, []) : u ? [] : void 0;
  }
};
B.prototype._getPreferredOutput = function(t) {
  var e = this.currResultType;
  switch (e) {
    case "all": {
      var n = Array.isArray(t.path) ? t.path : B.toPathArray(t.path);
      return t.pointer = B.toPointer(n), t.path = typeof t.path == "string" ? t.path : B.toPathString(t.path), t;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return t[e];
    case "path":
      return B.toPathString(t[e]);
    case "pointer":
      return B.toPointer(t.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
B.prototype._handleCallback = function(t, e, n) {
  if (e) {
    var o = this._getPreferredOutput(t);
    t.path = typeof t.path == "string" ? t.path : B.toPathString(t.path), e(o, n, t);
  }
};
B.prototype._trace = function(t, e, n, o, r, i, a, s) {
  var u = this, c;
  if (!t.length)
    return c = {
      path: n,
      value: e,
      parent: o,
      parentProperty: r,
      hasArrExpr: a
    }, this._handleCallback(c, i, "value"), c;
  var d = t[0], p = t.slice(1), f = [];
  function m(A) {
    Array.isArray(A) ? A.forEach(function(Fe) {
      f.push(Fe);
    }) : f.push(A);
  }
  if ((typeof d != "string" || s) && e && _e.call(e, d))
    m(this._trace(p, e[d], Bt(n, d), e, d, i, a));
  else if (d === "*")
    this._walk(e, function(A) {
      m(u._trace(p, e[A], Bt(n, A), e, A, i, !0, !0));
    });
  else if (d === "..")
    m(this._trace(p, e, n, o, r, i, a)), this._walk(e, function(A) {
      We(e[A]) === "object" && m(u._trace(t.slice(), e[A], Bt(n, A), e, A, i, !0));
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
        path: Bt(n, d),
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
      var y = d.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1");
      this._walk(e, function(A) {
        u._eval(y, e[A], A, n, o, r) && m(u._trace(p, e[A], Bt(n, A), e, A, i, !0));
      });
    } else if (d[0] === "(") {
      if (this.currPreventEval)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      m(this._trace(Na(this._eval(d, e, n[n.length - 1], n.slice(0, -1), o, r), p), e, n, o, r, i, a));
    } else if (d[0] === "@") {
      var g = !1, k = d.slice(1, -2);
      switch (k) {
        case "scalar":
          (!e || !["object", "function"].includes(We(e))) && (g = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          We(e) === k && (g = !0);
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
          e && We(e) === k && (g = !0);
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
    } else if (d[0] === "`" && e && _e.call(e, d.slice(1))) {
      var b = d.slice(1);
      m(this._trace(p, e[b], Bt(n, b), e, b, i, a, !0));
    } else if (d.includes(",")) {
      var _ = d.split(","), j = U1(_), C;
      try {
        for (j.s(); !(C = j.n()).done; ) {
          var L = C.value;
          m(this._trace(Na(L, p), e, n, o, r, i, !0));
        }
      } catch (A) {
        j.e(A);
      } finally {
        j.f();
      }
    } else
      !s && e && _e.call(e, d) && m(this._trace(p, e[d], Bt(n, d), e, d, i, a, !0));
  }
  if (this._hasParentSelector)
    for (var N = 0; N < f.length; N++) {
      var te = f[N];
      if (te && te.isParentSelector) {
        var T = this._trace(te.expr, e, te.path, o, r, i, a);
        if (Array.isArray(T)) {
          f[N] = T[0];
          for (var U = T.length, q = 1; q < U; q++)
            N++, f.splice(N, 0, T[q]);
        } else
          f[N] = T;
      }
    }
  return f;
};
B.prototype._walk = function(t, e) {
  if (Array.isArray(t))
    for (var n = t.length, o = 0; o < n; o++)
      e(o);
  else
    t && We(t) === "object" && Object.keys(t).forEach(function(r) {
      e(r);
    });
};
B.prototype._slice = function(t, e, n, o, r, i, a) {
  if (Array.isArray(n)) {
    var s = n.length, u = t.split(":"), c = u[2] && Number.parseInt(u[2]) || 1, d = u[0] && Number.parseInt(u[0]) || 0, p = u[1] && Number.parseInt(u[1]) || s;
    d = d < 0 ? Math.max(0, d + s) : Math.min(s, d), p = p < 0 ? Math.max(0, p + s) : Math.min(s, p);
    for (var f = [], m = d; m < p; m += c) {
      var y = this._trace(Na(m, e), n, o, r, i, a, !0);
      y.forEach(function(g) {
        f.push(g);
      });
    }
    return f;
  }
};
B.prototype._eval = function(t, e, n, o, r, i) {
  this.currSandbox._$_parentProperty = i, this.currSandbox._$_parent = r, this.currSandbox._$_property = n, this.currSandbox._$_root = this.json, this.currSandbox._$_v = e;
  var a = t.includes("@path");
  a && (this.currSandbox._$_path = B.toPathString(o.concat([n])));
  var s = "script:" + t;
  if (!B.cache[s]) {
    var u = t.replace(/@parentProperty/g, "_$_parentProperty").replace(/@parent/g, "_$_parent").replace(/@property/g, "_$_property").replace(/@root/g, "_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
    a && (u = u.replace(/@path/g, "_$_path")), B.cache[s] = new this.vm.Script(u);
  }
  try {
    return B.cache[s].runInNewContext(this.currSandbox);
  } catch (c) {
    throw new Error("jsonPath: " + c.message + ": " + t);
  }
};
B.cache = {};
B.toPathString = function(t) {
  for (var e = t, n = e.length, o = "$", r = 1; r < n; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[r]) || (o += /^[\*0-9]+$/.test(e[r]) ? "[" + e[r] + "]" : "['" + e[r] + "']");
  return o;
};
B.toPointer = function(t) {
  for (var e = t, n = e.length, o = "", r = 1; r < n; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[r]) || (o += "/" + e[r].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
  return o;
};
B.toPathArray = function(t) {
  var e = B.cache;
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
var W1 = function(e, n, o) {
  for (var r = e.length, i = 0; i < r; i++) {
    var a = e[i];
    o(a) && n.push(e.splice(i--, 1)[0]);
  }
}, K1 = /* @__PURE__ */ function() {
  function t(e) {
    Pm(this, t), this.code = e;
  }
  return Am(t, [{
    key: "runInNewContext",
    value: function(n) {
      var o = this.code, r = Object.keys(n), i = [];
      W1(r, i, function(d) {
        return typeof n[d] == "function";
      });
      var a = r.map(function(d, p) {
        return n[d];
      }), s = i.reduce(function(d, p) {
        var f = n[p].toString();
        return /function/.test(f) || (f = "function " + f), "var " + p + "=" + f + ";" + d;
      }, "");
      o = s + o, !/(["'])use strict\1/.test(o) && !r.includes("arguments") && (o = "var arguments = undefined;" + o), o = o.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
      var u = o.lastIndexOf(";"), c = u > -1 ? o.slice(0, u + 1) + " return " + o.slice(u + 1) : " return " + o;
      return bo(Function, r.concat([c])).apply(void 0, L1(a));
    }
  }]), t;
}();
B.prototype.vm = {
  Script: K1
};
const wn = 2147483647, Ke = 36, rl = 1, Io = 26, G1 = 38, J1 = 700, Lm = 72, qm = 128, Bm = "-", Y1 = /^xn--/, X1 = /[^\0-\x7F]/, Q1 = /[\x2E\u3002\uFF0E\uFF61]/g, Z1 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Wi = Ke - rl, Ge = Math.floor, Ki = String.fromCharCode;
function yt(t) {
  throw new RangeError(Z1[t]);
}
function e_(t, e) {
  const n = [];
  let o = t.length;
  for (; o--; )
    n[o] = e(t[o]);
  return n;
}
function Hm(t, e) {
  const n = t.split("@");
  let o = "";
  n.length > 1 && (o = n[0] + "@", t = n[1]), t = t.replace(Q1, ".");
  const r = t.split("."), i = e_(r, e).join(".");
  return o + i;
}
function il(t) {
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
const Um = (t) => String.fromCodePoint(...t), t_ = function(t) {
  return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : Ke;
}, Yu = function(t, e) {
  return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
}, Vm = function(t, e, n) {
  let o = 0;
  for (t = n ? Ge(t / J1) : t >> 1, t += Ge(t / e); t > Wi * Io >> 1; o += Ke)
    t = Ge(t / Wi);
  return Ge(o + (Wi + 1) * t / (t + G1));
}, al = function(t) {
  const e = [], n = t.length;
  let o = 0, r = qm, i = Lm, a = t.lastIndexOf(Bm);
  a < 0 && (a = 0);
  for (let s = 0; s < a; ++s)
    t.charCodeAt(s) >= 128 && yt("not-basic"), e.push(t.charCodeAt(s));
  for (let s = a > 0 ? a + 1 : 0; s < n; ) {
    const u = o;
    for (let d = 1, p = Ke; ; p += Ke) {
      s >= n && yt("invalid-input");
      const f = t_(t.charCodeAt(s++));
      f >= Ke && yt("invalid-input"), f > Ge((wn - o) / d) && yt("overflow"), o += f * d;
      const m = p <= i ? rl : p >= i + Io ? Io : p - i;
      if (f < m)
        break;
      const y = Ke - m;
      d > Ge(wn / y) && yt("overflow"), d *= y;
    }
    const c = e.length + 1;
    i = Vm(o - u, c, u == 0), Ge(o / c) > wn - r && yt("overflow"), r += Ge(o / c), o %= c, e.splice(o++, 0, r);
  }
  return String.fromCodePoint(...e);
}, sl = function(t) {
  const e = [];
  t = il(t);
  const n = t.length;
  let o = qm, r = 0, i = Lm;
  for (const u of t)
    u < 128 && e.push(Ki(u));
  const a = e.length;
  let s = a;
  for (a && e.push(Bm); s < n; ) {
    let u = wn;
    for (const d of t)
      d >= o && d < u && (u = d);
    const c = s + 1;
    u - o > Ge((wn - r) / c) && yt("overflow"), r += (u - o) * c, o = u;
    for (const d of t)
      if (d < o && ++r > wn && yt("overflow"), d === o) {
        let p = r;
        for (let f = Ke; ; f += Ke) {
          const m = f <= i ? rl : f >= i + Io ? Io : f - i;
          if (p < m)
            break;
          const y = p - m, g = Ke - m;
          e.push(
            Ki(Yu(m + y % g, 0))
          ), p = Ge(y / g);
        }
        e.push(Ki(Yu(p, 0))), i = Vm(r, c, s === a), r = 0, ++s;
      }
    ++r, ++o;
  }
  return e.join("");
}, Wm = function(t) {
  return Hm(t, function(e) {
    return Y1.test(e) ? al(e.slice(4).toLowerCase()) : e;
  });
}, Km = function(t) {
  return Hm(t, function(e) {
    return X1.test(e) ? "xn--" + sl(e) : e;
  });
}, n_ = {
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
    decode: il,
    encode: Um
  },
  decode: al,
  encode: sl,
  toASCII: Km,
  toUnicode: Wm
}, o_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: al,
  default: n_,
  encode: sl,
  toASCII: Km,
  toUnicode: Wm,
  ucs2decode: il,
  ucs2encode: Um
}, Symbol.toStringTag, { value: "Module" })), Gm = /* @__PURE__ */ Lf(o_);
var r_ = function(e, n) {
  if (n = n.split(":")[0], e = +e, !e)
    return !1;
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
}, ll = {}, i_ = Object.prototype.hasOwnProperty, a_;
function Xu(t) {
  try {
    return decodeURIComponent(t.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function Qu(t) {
  try {
    return encodeURIComponent(t);
  } catch {
    return null;
  }
}
function s_(t) {
  for (var e = /([^=?#&]+)=?([^&]*)/g, n = {}, o; o = e.exec(t); ) {
    var r = Xu(o[1]), i = Xu(o[2]);
    r === null || i === null || r in n || (n[r] = i);
  }
  return n;
}
function l_(t, e) {
  e = e || "";
  var n = [], o, r;
  typeof e != "string" && (e = "?");
  for (r in t)
    if (i_.call(t, r)) {
      if (o = t[r], !o && (o === null || o === a_ || isNaN(o)) && (o = ""), r = Qu(r), o = Qu(o), r === null || o === null)
        continue;
      n.push(r + "=" + o);
    }
  return n.length ? e + n.join("&") : "";
}
ll.stringify = l_;
ll.parse = s_;
var Jm = r_, ui = ll, u_ = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, Ym = /[\n\r\t]/g, c_ = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, Xm = /:\d+$/, d_ = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, p_ = /^[a-zA-Z]:/;
function ul(t) {
  return (t || "").toString().replace(u_, "");
}
var Ra = [
  ["#", "hash"],
  // Extract from the back.
  ["?", "query"],
  // Extract from the back.
  function(e, n) {
    return Je(n.protocol) ? e.replace(/\\/g, "/") : e;
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
], Zu = { hash: 1, query: 1 };
function Qm(t) {
  var e;
  typeof window < "u" ? e = window : typeof Ji < "u" ? e = Ji : typeof self < "u" ? e = self : e = {};
  var n = e.location || {};
  t = t || n;
  var o = {}, r = typeof t, i;
  if (t.protocol === "blob:")
    o = new Qe(unescape(t.pathname), {});
  else if (r === "string") {
    o = new Qe(t, {});
    for (i in Zu)
      delete o[i];
  } else if (r === "object") {
    for (i in t)
      i in Zu || (o[i] = t[i]);
    o.slashes === void 0 && (o.slashes = c_.test(t.href));
  }
  return o;
}
function Je(t) {
  return t === "file:" || t === "ftp:" || t === "http:" || t === "https:" || t === "ws:" || t === "wss:";
}
function Zm(t, e) {
  t = ul(t), t = t.replace(Ym, ""), e = e || {};
  var n = d_.exec(t), o = n[1] ? n[1].toLowerCase() : "", r = !!n[2], i = !!n[3], a = 0, s;
  return r ? i ? (s = n[2] + n[3] + n[4], a = n[2].length + n[3].length) : (s = n[2] + n[4], a = n[2].length) : i ? (s = n[3] + n[4], a = n[3].length) : s = n[4], o === "file:" ? a >= 2 && (s = s.slice(2)) : Je(o) ? s = n[4] : o ? r && (s = s.slice(2)) : a >= 2 && Je(e.protocol) && (s = n[4]), {
    protocol: o,
    slashes: r || Je(o),
    slashesCount: a,
    rest: s
  };
}
function m_(t, e) {
  if (t === "")
    return e;
  for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), o = n.length, r = n[o - 1], i = !1, a = 0; o--; )
    n[o] === "." ? n.splice(o, 1) : n[o] === ".." ? (n.splice(o, 1), a++) : a && (o === 0 && (i = !0), n.splice(o, 1), a--);
  return i && n.unshift(""), (r === "." || r === "..") && n.push(""), n.join("/");
}
function Qe(t, e, n) {
  if (t = ul(t), t = t.replace(Ym, ""), !(this instanceof Qe))
    return new Qe(t, e, n);
  var o, r, i, a, s, u, c = Ra.slice(), d = typeof e, p = this, f = 0;
  for (d !== "object" && d !== "string" && (n = e, e = null), n && typeof n != "function" && (n = ui.parse), e = Qm(e), r = Zm(t || "", e), o = !r.protocol && !r.slashes, p.slashes = r.slashes || o && e.slashes, p.protocol = r.protocol || e.protocol || "", t = r.rest, (r.protocol === "file:" && (r.slashesCount !== 2 || p_.test(t)) || !r.slashes && (r.protocol || r.slashesCount < 2 || !Je(p.protocol))) && (c[3] = [/(.*)/, "pathname"]); f < c.length; f++) {
    if (a = c[f], typeof a == "function") {
      t = a(t, p);
      continue;
    }
    i = a[0], u = a[1], i !== i ? p[u] = t : typeof i == "string" ? (s = i === "@" ? t.lastIndexOf(i) : t.indexOf(i), ~s && (typeof a[2] == "number" ? (p[u] = t.slice(0, s), t = t.slice(s + a[2])) : (p[u] = t.slice(s), t = t.slice(0, s)))) : (s = i.exec(t)) && (p[u] = s[1], t = t.slice(0, s.index)), p[u] = p[u] || o && a[3] && e[u] || "", a[4] && (p[u] = p[u].toLowerCase());
  }
  n && (p.query = n(p.query)), o && e.slashes && p.pathname.charAt(0) !== "/" && (p.pathname !== "" || e.pathname !== "") && (p.pathname = m_(p.pathname, e.pathname)), p.pathname.charAt(0) !== "/" && Je(p.protocol) && (p.pathname = "/" + p.pathname), Jm(p.port, p.protocol) || (p.host = p.hostname, p.port = ""), p.username = p.password = "", p.auth && (s = p.auth.indexOf(":"), ~s ? (p.username = p.auth.slice(0, s), p.username = encodeURIComponent(decodeURIComponent(p.username)), p.password = p.auth.slice(s + 1), p.password = encodeURIComponent(decodeURIComponent(p.password))) : p.username = encodeURIComponent(decodeURIComponent(p.auth)), p.auth = p.password ? p.username + ":" + p.password : p.username), p.origin = p.protocol !== "file:" && Je(p.protocol) && p.host ? p.protocol + "//" + p.host : "null", p.href = p.toString();
}
function f_(t, e, n) {
  var o = this;
  switch (t) {
    case "query":
      typeof e == "string" && e.length && (e = (n || ui.parse)(e)), o[t] = e;
      break;
    case "port":
      o[t] = e, Jm(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname, o[t] = "");
      break;
    case "hostname":
      o[t] = e, o.port && (e += ":" + o.port), o.host = e;
      break;
    case "host":
      o[t] = e, Xm.test(e) ? (e = e.split(":"), o.port = e.pop(), o.hostname = e.join(":")) : (o.hostname = e, o.port = "");
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
  for (var a = 0; a < Ra.length; a++) {
    var s = Ra[a];
    s[4] && (o[s[1]] = o[s[1]].toLowerCase());
  }
  return o.auth = o.password ? o.username + ":" + o.password : o.username, o.origin = o.protocol !== "file:" && Je(o.protocol) && o.host ? o.protocol + "//" + o.host : "null", o.href = o.toString(), o;
}
function h_(t) {
  (!t || typeof t != "function") && (t = ui.stringify);
  var e, n = this, o = n.host, r = n.protocol;
  r && r.charAt(r.length - 1) !== ":" && (r += ":");
  var i = r + (n.protocol && n.slashes || Je(n.protocol) ? "//" : "");
  return n.username ? (i += n.username, n.password && (i += ":" + n.password), i += "@") : n.password ? (i += ":" + n.password, i += "@") : n.protocol !== "file:" && Je(n.protocol) && !o && n.pathname !== "/" && (i += "@"), (o[o.length - 1] === ":" || Xm.test(n.hostname) && !n.port) && (o += ":"), i += o + n.pathname, e = typeof n.query == "object" ? t(n.query) : n.query, e && (i += e.charAt(0) !== "?" ? "?" + e : e), n.hash && (i += n.hash), i;
}
Qe.prototype = { set: f_, toString: h_ };
Qe.extractProtocol = Zm;
Qe.location = Qm;
Qe.trimLeft = ul;
Qe.qs = ui;
var g_ = Qe, cl = {}, ef = {};
const y_ = [
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
  var e = Gm, n = {};
  n.rules = y_.map(function(o) {
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
    for (var i = r.split("."), a, s = 0; s < i.length; ++s) {
      if (a = i[s], !a.length)
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
    }, s = r.split(".");
    if (s[s.length - 1] === "local")
      return a;
    var u = function() {
      return /xn--/.test(r) && (a.domain && (a.domain = e.toASCII(a.domain)), a.subdomain && (a.subdomain = e.toASCII(a.subdomain))), a;
    }, c = n.findRule(r);
    if (!c)
      return s.length < 2 ? a : (a.tld = s.pop(), a.sld = s.pop(), a.domain = [a.sld, a.tld].join("."), s.length && (a.subdomain = s.pop()), u());
    a.listed = !0;
    var d = c.suffix.split("."), p = s.slice(0, s.length - d.length);
    return c.exception && p.push(d.shift()), a.tld = d.join("."), !p.length || (c.wildcard && (d.unshift(p.pop()), a.tld = d.join(".")), !p.length) || (a.sld = p.pop(), a.domain = [a.sld, a.tld].join("."), p.length && (a.subdomain = p.join("."))), u();
  }, t.get = function(o) {
    return o && t.parse(o).domain || null;
  }, t.isValid = function(o) {
    var r = t.parse(o);
    return !!(r.domain && r.listed);
  };
})(ef);
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
const v_ = ef, ec = [
  "local",
  "example",
  "invalid",
  "localhost",
  "test"
], k_ = ["localhost", "invalid"];
function b_(t, e = {}) {
  const n = t.split("."), o = n[n.length - 1], r = !!e.allowSpecialUseDomain, i = !!e.ignoreError;
  if (r && ec.includes(o)) {
    if (n.length > 1)
      return `${n[n.length - 2]}.${o}`;
    if (k_.includes(o))
      return `${o}`;
  }
  if (!i && ec.includes(o))
    throw new Error(
      `Cookie has domain set to the public suffix "${o}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain:true, rejectPublicSuffixes: false}.`
    );
  return v_.get(t);
}
cl.getPublicSuffix = b_;
var dl = {};
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
let j_ = class {
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
dl.Store = j_;
var pl = {}, ci = {};
ci.fromCallback = function(t) {
  return Object.defineProperty(function() {
    if (typeof arguments[arguments.length - 1] == "function")
      t.apply(this, arguments);
    else
      return new Promise((e, n) => {
        arguments[arguments.length] = (o, r) => {
          if (o)
            return n(o);
          e(r);
        }, arguments.length++, t.apply(this, arguments);
      });
  }, "name", { value: t.name });
};
ci.fromPromise = function(t) {
  return Object.defineProperty(function() {
    const e = arguments[arguments.length - 1];
    if (typeof e != "function")
      return t.apply(this, arguments);
    delete arguments[arguments.length - 1], arguments.length--, t.apply(this, arguments).then((n) => e(null, n), e);
  }, "name", { value: t.name });
};
var tf = {};
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
const x_ = cl;
function w_(t, e) {
  const n = x_.getPublicSuffix(t, {
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
tf.permuteDomain = w_;
var ml = {};
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
function __(t, e) {
  return e === t || t.indexOf(e) === 0 && (e.substr(-1) === "/" || t.substr(e.length, 1) === "/");
}
ml.pathMatch = __;
var di = {};
function nf() {
  try {
    return Hh;
  } catch {
    return null;
  }
}
function S_() {
  return Symbol.for("nodejs.util.inspect.custom");
}
function C_(t) {
  const n = (t.requireUtil || nf)();
  return n ? n.inspect.custom : null;
}
di.getUtilInspect = function(e, n = {}) {
  const r = (n.requireUtil || nf)();
  return function(a, s, u) {
    return r ? r.inspect(a, s, u) : e(a);
  };
};
di.getCustomInspectSymbol = function(e = {}) {
  return (e.lookupCustomInspectSymbol || S_)() || C_(e);
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
const { fromCallback: $_ } = ci, T_ = dl.Store, E_ = tf.permuteDomain, O_ = ml.pathMatch, { getCustomInspectSymbol: D_, getUtilInspect: z_ } = di;
let Pa = class extends T_ {
  constructor() {
    super(), this.synchronous = !0, this.idx = /* @__PURE__ */ Object.create(null);
    const e = D_();
    e && (this[e] = this.inspect);
  }
  inspect() {
    return `{ idx: ${{ inspect: z_(of) }.inspect(this.idx, !1, 2)} }`;
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
        if (O_(n, p)) {
          const f = d[p];
          for (const m in f)
            i.push(f[m]);
        }
      });
    } : a = function(d) {
      for (const p in d) {
        const f = d[p];
        for (const m in f)
          i.push(f[m]);
      }
    };
    const s = E_(e, o) || [e], u = this.idx;
    s.forEach((c) => {
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
      Object.keys(o[i]).forEach((s) => {
        Object.keys(o[i][s]).forEach((c) => {
          c !== null && n.push(o[i][s][c]);
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
  Pa.prototype[t] = $_(
    Pa.prototype[t]
  );
});
pl.MemoryCookieStore = Pa;
function of(t) {
  const e = Object.keys(t);
  if (e.length === 0)
    return "[Object: null prototype] {}";
  let n = `[Object: null prototype] {
`;
  return Object.keys(t).forEach((o, r) => {
    n += I_(o, t[o]), r < e.length - 1 && (n += ","), n += `
`;
  }), n += "}", n;
}
function I_(t, e) {
  const n = "  ";
  let o = `${n}'${t}': [Object: null prototype] {
`;
  return Object.keys(e).forEach((r, i, a) => {
    o += N_(r, e[r]), i < a.length - 1 && (o += ","), o += `
`;
  }), o += `${n}}`, o;
}
function N_(t, e) {
  const n = "    ";
  let o = `${n}'${t}': [Object: null prototype] {
`;
  return Object.keys(e).forEach((r, i, a) => {
    const s = e[r];
    o += `      ${r}: ${s.inspect()}`, i < a.length - 1 && (o += ","), o += `
`;
  }), o += `${n}}`, o;
}
pl.inspectFallback = of;
var ct = {};
function rf(t) {
  return typeof t == "function";
}
function R_(t) {
  return af(t) && t !== "";
}
function P_(t) {
  return M_(t, Date) && F_(t.getTime());
}
function A_(t) {
  return t === "" || t instanceof String && t.toString() === "";
}
function af(t) {
  return typeof t == "string" || t instanceof String;
}
function sf(t) {
  return toString.call(t) === "[object Object]";
}
function M_(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function F_(t) {
  return typeof t == "number" && t % 1 === 0;
}
function L_(t, e, n) {
  if (rf(e) || (n = e, e = null), sf(n) || (n = { Error: "Failed Check" }), !t)
    if (e)
      e(new Aa(n));
    else
      throw new Aa(n);
}
class Aa extends Error {
  constructor(...e) {
    super(...e);
  }
}
ct.ParameterError = Aa;
ct.isFunction = rf;
ct.isNonEmptyString = R_;
ct.isDate = P_;
ct.isEmptyString = A_;
ct.isString = af;
ct.isObject = sf;
ct.validate = L_;
var q_ = "4.1.3";
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
const tc = Gm, B_ = g_, fl = cl, H_ = dl.Store, U_ = pl.MemoryCookieStore, V_ = ml.pathMatch, I = ct, W_ = q_, { fromCallback: lf } = ci, { getCustomInspectSymbol: K_ } = di, G_ = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, nc = /[\x00-\x1F]/, oc = [`
`, "\r", "\0"], J_ = /[\x20-\x3A\x3C-\x7E]+/, Y_ = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, X_ = {
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
}, Ma = 2147483647e3, Q_ = 0, rc = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function ic(t) {
  I.validate(I.isNonEmptyString(t), t);
  const e = String(t).toLowerCase();
  return e === "none" || e === "lax" || e === "strict" ? e : null;
}
const vn = Object.freeze({
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
}), Z_ = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/, eS = `
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
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), uf = new RegExp(`^${eS}$`);
function Fa(t, e, n, o) {
  let r = 0;
  for (; r < t.length; ) {
    const i = t.charCodeAt(r);
    if (i <= 47 || i >= 58)
      break;
    r++;
  }
  return r < e || r > n || !o && r != t.length ? null : parseInt(t.substr(0, r), 10);
}
function tS(t) {
  const e = t.split(":"), n = [0, 0, 0];
  if (e.length !== 3)
    return null;
  for (let o = 0; o < 3; o++) {
    const r = o == 2, i = Fa(e[o], 1, 2, r);
    if (i === null)
      return null;
    n[o] = i;
  }
  return n;
}
function nS(t) {
  t = String(t).substr(0, 3).toLowerCase();
  const e = X_[t];
  return e >= 0 ? e : null;
}
function ur(t) {
  if (!t)
    return;
  const e = t.split(Y_);
  if (!e)
    return;
  let n = null, o = null, r = null, i = null, a = null, s = null;
  for (let u = 0; u < e.length; u++) {
    const c = e[u].trim();
    if (!c.length)
      continue;
    let d;
    if (r === null && (d = tS(c), d)) {
      n = d[0], o = d[1], r = d[2];
      continue;
    }
    if (i === null && (d = Fa(c, 1, 2, !0), d !== null)) {
      i = d;
      continue;
    }
    if (a === null && (d = nS(c), d !== null)) {
      a = d;
      continue;
    }
    s === null && (d = Fa(c, 2, 4, !0), d !== null && (s = d, s >= 70 && s <= 99 ? s += 1900 : s >= 0 && s <= 69 && (s += 2e3)));
  }
  if (!(i === null || a === null || s === null || r === null || i < 1 || i > 31 || s < 1601 || n > 23 || o > 59 || r > 59))
    return new Date(Date.UTC(s, a, i, n, o, r));
}
function oS(t) {
  return I.validate(I.isDate(t), t), t.toUTCString();
}
function No(t) {
  return t == null ? null : (t = t.trim().replace(/^\./, ""), uf.test(t) && (t = t.replace("[", "").replace("]", "")), tc && /[^\u0001-\u007f]/.test(t) && (t = tc.toASCII(t)), t.toLowerCase());
}
function ac(t, e, n) {
  if (t == null || e == null)
    return null;
  if (n !== !1 && (t = No(t), e = No(e)), t == e)
    return !0;
  const o = t.lastIndexOf(e);
  return !(o <= 0 || t.length !== e.length + o || t.substr(o - 1, 1) !== "." || Z_.test(t));
}
function rS(t) {
  if (!t || t.substr(0, 1) !== "/")
    return "/";
  if (t === "/")
    return t;
  const e = t.lastIndexOf("/");
  return e === 0 ? "/" : t.slice(0, e);
}
function iS(t) {
  if (I.isEmptyString(t))
    return t;
  for (let e = 0; e < oc.length; e++) {
    const n = t.indexOf(oc[e]);
    n !== -1 && (t = t.substr(0, n));
  }
  return t;
}
function aS(t, e) {
  t = iS(t), I.validate(I.isString(t), t);
  let n = t.indexOf("=");
  if (e)
    n === 0 && (t = t.substr(1), n = t.indexOf("="));
  else if (n <= 0)
    return;
  let o, r;
  if (n <= 0 ? (o = "", r = t.trim()) : (o = t.substr(0, n).trim(), r = t.substr(n + 1).trim()), nc.test(o) || nc.test(r))
    return;
  const i = new oe();
  return i.key = o, i.value = r, i;
}
function sS(t, e) {
  if ((!e || typeof e != "object") && (e = {}), I.isEmptyString(t) || !I.isString(t))
    return null;
  t = t.trim();
  const n = t.indexOf(";"), o = n === -1 ? t : t.substr(0, n), r = aS(o, !!e.loose);
  if (!r)
    return;
  if (n === -1)
    return r;
  const i = t.slice(n + 1).trim();
  if (i.length === 0)
    return r;
  const a = i.split(";");
  for (; a.length; ) {
    const s = a.shift().trim();
    if (s.length === 0)
      continue;
    const u = s.indexOf("=");
    let c, d;
    switch (u === -1 ? (c = s, d = null) : (c = s.substr(0, u), d = s.substr(u + 1)), c = c.trim().toLowerCase(), d && (d = d.trim()), c) {
      case "expires":
        if (d) {
          const f = ur(d);
          f && (r.expires = f);
        }
        break;
      case "max-age":
        if (d && /^-?[0-9]+$/.test(d)) {
          const f = parseInt(d, 10);
          r.setMaxAge(f);
        }
        break;
      case "domain":
        if (d) {
          const f = d.trim().replace(/^\./, "");
          f && (r.domain = f.toLowerCase());
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
        r.extensions = r.extensions || [], r.extensions.push(s);
        break;
    }
  }
  return r;
}
function lS(t) {
  return I.validate(I.isObject(t), t), !t.key.startsWith("__Secure-") || t.secure;
}
function uS(t) {
  return I.validate(I.isObject(t)), !t.key.startsWith("__Host-") || t.secure && t.hostOnly && t.path != null && t.path === "/";
}
function cf(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch (n) {
    return n;
  }
  return e;
}
function hl(t) {
  if (!t || I.isEmptyString(t))
    return null;
  let e;
  if (typeof t == "string") {
    if (e = cf(t), e instanceof Error)
      return null;
  } else
    e = t;
  const n = new oe();
  for (let o = 0; o < oe.serializableProperties.length; o++) {
    const r = oe.serializableProperties[o];
    e[r] === void 0 || e[r] === jo[r] || (r === "expires" || r === "creation" || r === "lastAccessed" ? e[r] === null ? n[r] = null : n[r] = e[r] == "Infinity" ? "Infinity" : new Date(e[r]) : n[r] = e[r]);
  }
  return n;
}
function sc(t, e) {
  I.validate(I.isObject(t), t), I.validate(I.isObject(e), e);
  let n = 0;
  const o = t.path ? t.path.length : 0;
  if (n = (e.path ? e.path.length : 0) - o, n !== 0)
    return n;
  const i = t.creation ? t.creation.getTime() : Ma, a = e.creation ? e.creation.getTime() : Ma;
  return n = i - a, n !== 0 || (n = t.creationIndex - e.creationIndex), n;
}
function lc(t) {
  if (t instanceof Object)
    return t;
  try {
    t = decodeURI(t);
  } catch {
  }
  return B_(t);
}
const jo = {
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
class oe {
  constructor(e = {}) {
    const n = K_();
    n && (this[n] = this.inspect), Object.assign(this, jo, e), this.creation = this.creation || /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
      configurable: !1,
      enumerable: !1,
      // important for assert.deepEqual checks
      writable: !0,
      value: ++oe.cookiesCreated
    });
  }
  inspect() {
    const e = Date.now(), n = this.hostOnly != null ? this.hostOnly : "?", o = this.creation ? `${e - this.creation.getTime()}ms` : "?", r = this.lastAccessed ? `${e - this.lastAccessed.getTime()}ms` : "?";
    return `Cookie="${this.toString()}; hostOnly=${n}; aAge=${r}; cAge=${o}"`;
  }
  toJSON() {
    const e = {};
    for (const n of oe.serializableProperties)
      this[n] !== jo[n] && (n === "expires" || n === "creation" || n === "lastAccessed" ? this[n] === null ? e[n] = null : e[n] = this[n] == "Infinity" ? "Infinity" : this[n].toISOString() : n === "maxAge" ? this[n] !== null && (e[n] = this[n] == 1 / 0 || this[n] == -1 / 0 ? this[n].toString() : this[n]) : this[n] !== jo[n] && (e[n] = this[n]));
    return e;
  }
  clone() {
    return hl(this.toJSON());
  }
  validate() {
    if (!G_.test(this.value) || this.expires != 1 / 0 && !(this.expires instanceof Date) && !ur(this.expires) || this.maxAge != null && this.maxAge <= 0 || this.path != null && !J_.test(this.path))
      return !1;
    const e = this.cdomain();
    return !(e && (e.match(/\.$/) || fl.getPublicSuffix(e) == null));
  }
  setExpires(e) {
    e instanceof Date ? this.expires = e : this.expires = ur(e) || "Infinity";
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
    if (this.expires != 1 / 0 && (this.expires instanceof Date ? e += `; Expires=${oS(this.expires)}` : e += `; Expires=${this.expires}`), this.maxAge != null && this.maxAge != 1 / 0 && (e += `; Max-Age=${this.maxAge}`), this.domain && !this.hostOnly && (e += `; Domain=${this.domain}`), this.path && (e += `; Path=${this.path}`), this.secure && (e += "; Secure"), this.httpOnly && (e += "; HttpOnly"), this.sameSite && this.sameSite !== "none") {
      const n = oe.sameSiteCanonical[this.sameSite.toLowerCase()];
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
    return n != 1 / 0 ? (n instanceof Date || (n = ur(n) || 1 / 0), n == 1 / 0 ? 1 / 0 : n.getTime() - (e || Date.now())) : 1 / 0;
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
    return n == 1 / 0 ? new Date(Ma) : n == -1 / 0 ? new Date(Q_) : new Date(n);
  }
  // This replaces the "persistent-flag" parts of S5.3 step 3
  isPersistent() {
    return this.maxAge != null || this.expires != 1 / 0;
  }
  // Mostly S5.1.2 and S5.2.3:
  canonicalizedDomain() {
    return this.domain == null ? null : No(this.domain);
  }
  cdomain() {
    return this.canonicalizedDomain();
  }
}
oe.cookiesCreated = 0;
oe.parse = sS;
oe.fromJSON = hl;
oe.serializableProperties = Object.keys(jo);
oe.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
oe.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};
function uc(t) {
  if (t != null) {
    const e = t.toLowerCase();
    switch (e) {
      case vn.STRICT:
      case vn.SILENT:
      case vn.DISABLED:
        return e;
    }
  }
  return vn.SILENT;
}
class Ye {
  constructor(e, n = { rejectPublicSuffixes: !0 }) {
    typeof n == "boolean" && (n = { rejectPublicSuffixes: n }), I.validate(I.isObject(n), n), this.rejectPublicSuffixes = n.rejectPublicSuffixes, this.enableLooseMode = !!n.looseMode, this.allowSpecialUseDomain = typeof n.allowSpecialUseDomain == "boolean" ? n.allowSpecialUseDomain : !0, this.store = e || new U_(), this.prefixSecurity = uc(n.prefixSecurity), this._cloneSync = ht("clone"), this._importCookiesSync = ht("_importCookies"), this.getCookiesSync = ht("getCookies"), this.getCookieStringSync = ht("getCookieString"), this.getSetCookieStringsSync = ht("getSetCookieStrings"), this.removeAllCookiesSync = ht("removeAllCookies"), this.setCookieSync = ht("setCookie"), this.serializeSync = ht("serialize");
  }
  setCookie(e, n, o, r) {
    I.validate(I.isNonEmptyString(n), r, o);
    let i;
    if (I.isFunction(n))
      return r = n, r(new Error("No URL was specified"));
    const a = lc(n);
    if (I.isFunction(o) && (r = o, o = {}), I.validate(I.isFunction(r), r), !I.isNonEmptyString(e) && !I.isObject(e) && e instanceof String && e.length == 0)
      return r(null);
    const s = No(a.hostname), u = o.loose || this.enableLooseMode;
    let c = null;
    if (o.sameSiteContext && (c = ic(o.sameSiteContext), !c))
      return r(new Error(rc));
    if (typeof e == "string" || e instanceof String) {
      if (e = oe.parse(e, { loose: u }), !e)
        return i = new Error("Cookie failed to parse"), r(o.ignoreError ? null : i);
    } else if (!(e instanceof oe))
      return i = new Error(
        "First argument to setCookie must be a Cookie object or string"
      ), r(o.ignoreError ? null : i);
    const d = o.now || /* @__PURE__ */ new Date();
    if (this.rejectPublicSuffixes && e.domain && fl.getPublicSuffix(e.cdomain(), {
      allowSpecialUseDomain: this.allowSpecialUseDomain,
      ignoreError: o.ignoreError
    }) == null && !uf.test(e.domain))
      return i = new Error("Cookie has domain set to a public suffix"), r(o.ignoreError ? null : i);
    if (e.domain) {
      if (!ac(s, e.cdomain(), !1))
        return i = new Error(
          `Cookie not in this host's domain. Cookie:${e.cdomain()} Request:${s}`
        ), r(o.ignoreError ? null : i);
      e.hostOnly == null && (e.hostOnly = !1);
    } else
      e.hostOnly = !0, e.domain = s;
    if ((!e.path || e.path[0] !== "/") && (e.path = rS(a.pathname), e.pathIsDefault = !0), o.http === !1 && e.httpOnly)
      return i = new Error("Cookie is HttpOnly and this isn't an HTTP API"), r(o.ignoreError ? null : i);
    if (e.sameSite !== "none" && e.sameSite !== void 0 && c && c === "none")
      return i = new Error(
        "Cookie is SameSite but this is a cross-origin request"
      ), r(o.ignoreError ? null : i);
    const p = this.prefixSecurity === vn.SILENT;
    if (!(this.prefixSecurity === vn.DISABLED)) {
      let g = !1, k;
      if (lS(e) ? uS(e) || (g = !0, k = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (g = !0, k = "Cookie has __Secure prefix but Secure attribute is not set"), g)
        return r(
          o.ignoreError || p ? null : new Error(k)
        );
    }
    const m = this.store;
    m.updateCookie || (m.updateCookie = function(g, k, b) {
      this.putCookie(k, b);
    });
    function y(g, k) {
      if (g)
        return r(g);
      const b = function(_) {
        if (_)
          return r(_);
        r(null, e);
      };
      if (k) {
        if (o.http === !1 && k.httpOnly)
          return g = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), r(o.ignoreError ? null : g);
        e.creation = k.creation, e.creationIndex = k.creationIndex, e.lastAccessed = d, m.updateCookie(k, e, b);
      } else
        e.creation = e.lastAccessed = d, m.putCookie(e, b);
    }
    m.findCookie(e.domain, e.path, e.key, y);
  }
  // RFC6365 S5.4
  getCookies(e, n, o) {
    I.validate(I.isNonEmptyString(e), o, e);
    const r = lc(e);
    I.isFunction(n) && (o = n, n = {}), I.validate(I.isObject(n), o, n), I.validate(I.isFunction(o), o);
    const i = No(r.hostname), a = r.pathname || "/";
    let s = n.secure;
    s == null && r.protocol && (r.protocol == "https:" || r.protocol == "wss:") && (s = !0);
    let u = 0;
    if (n.sameSiteContext) {
      const g = ic(n.sameSiteContext);
      if (u = oe.sameSiteLevel[g], !u)
        return o(new Error(rc));
    }
    let c = n.http;
    c == null && (c = !0);
    const d = n.now || Date.now(), p = n.expire !== !1, f = !!n.allPaths, m = this.store;
    function y(g) {
      if (g.hostOnly) {
        if (g.domain != i)
          return !1;
      } else if (!ac(i, g.domain, !1))
        return !1;
      return !f && !V_(a, g.path) || g.secure && !s || g.httpOnly && !c || u && oe.sameSiteLevel[g.sameSite || "none"] > u ? !1 : p && g.expiryTime() <= d ? (m.removeCookie(g.domain, g.path, g.key, () => {
      }), !1) : !0;
    }
    m.findCookies(
      i,
      f ? null : a,
      this.allowSpecialUseDomain,
      (g, k) => {
        if (g)
          return o(g);
        k = k.filter(y), n.sort !== !1 && (k = k.sort(sc));
        const b = /* @__PURE__ */ new Date();
        for (const _ of k)
          _.lastAccessed = b;
        o(null, k);
      }
    );
  }
  getCookieString(...e) {
    const n = e.pop();
    I.validate(I.isFunction(n), n);
    const o = function(r, i) {
      r ? n(r) : n(
        null,
        i.sort(sc).map((a) => a.cookieString()).join("; ")
      );
    };
    e.push(o), this.getCookies.apply(this, e);
  }
  getSetCookieStrings(...e) {
    const n = e.pop();
    I.validate(I.isFunction(n), n);
    const o = function(r, i) {
      r ? n(r) : n(
        null,
        i.map((a) => a.toString())
      );
    };
    e.push(o), this.getCookies.apply(this, e);
  }
  serialize(e) {
    I.validate(I.isFunction(e), e);
    let n = this.store.constructor.name;
    I.isObject(n) && (n = null);
    const o = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${W_}`,
      // add the store type, to make humans happy:
      storeType: n,
      // CookieJar configuration:
      rejectPublicSuffixes: !!this.rejectPublicSuffixes,
      enableLooseMode: !!this.enableLooseMode,
      allowSpecialUseDomain: !!this.allowSpecialUseDomain,
      prefixSecurity: uc(this.prefixSecurity),
      // this gets filled from getAllCookies:
      cookies: []
    };
    if (!(this.store.getAllCookies && typeof this.store.getAllCookies == "function"))
      return e(
        new Error(
          "store does not support getAllCookies and cannot be serialized"
        )
      );
    this.store.getAllCookies((r, i) => r ? e(r) : (o.cookies = i.map((a) => (a = a instanceof oe ? a.toJSON() : a, delete a.creationIndex, a)), e(null, o)));
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
        a = hl(o.shift());
      } catch (s) {
        return n(s);
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
      Ye.deserialize(r, e, n);
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
    I.validate(I.isFunction(e), e);
    const n = this.store;
    if (typeof n.removeAllCookies == "function" && n.removeAllCookies !== H_.prototype.removeAllCookies)
      return n.removeAllCookies(e);
    n.getAllCookies((o, r) => {
      if (o)
        return e(o);
      if (r.length === 0)
        return e(null);
      let i = 0;
      const a = [];
      function s(u) {
        if (u && a.push(u), i++, i === r.length)
          return e(a.length ? a[0] : null);
      }
      r.forEach((u) => {
        n.removeCookie(
          u.domain,
          u.path,
          u.key,
          s
        );
      });
    });
  }
  static deserialize(e, n, o) {
    arguments.length !== 3 && (o = n, n = null), I.validate(I.isFunction(o), o);
    let r;
    if (typeof e == "string") {
      if (r = cf(e), r instanceof Error)
        return o(r);
    } else
      r = e;
    const i = new Ye(n, {
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
    const o = typeof e == "string" ? JSON.parse(e) : e, r = new Ye(n, {
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
Ye.fromJSON = Ye.deserializeSync;
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
  Ye.prototype[t] = lf(Ye.prototype[t]);
});
Ye.deserialize = lf(Ye.deserialize);
function ht(t) {
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
var df = oe;
fl.getPublicSuffix;
I.ParameterError;
function cc(t, e, n, o, r) {
  const i = [];
  if (e === void 0)
    return [[], void 0];
  const a = cS(e, o);
  for (const [s, u] of a) {
    const [c, d] = pS(
      `${t}-${s}`,
      u,
      n,
      o,
      r
    );
    if (d !== void 0)
      return [
        void 0,
        `failed to assign variables for response code: ${s}: ${d}`
      ];
    i.push(c);
  }
  return [i, void 0];
}
function cS(t, e) {
  const n = [], o = Object.keys(t).sort(vS);
  for (const r of o)
    dS(r, e) && n.push([r, t[r]]);
  return n;
}
function dS(t, e) {
  return e === li || e.statusCode.toString() === t || La(e.statusCode) === t;
}
function pS(t, e, n, o, r) {
  const i = {}, a = [];
  for (const [s, u] of Object.entries(e.variableAssignments || {})) {
    const [c, d] = mS(u, n, o, r);
    d !== void 0 ? a.push({ name: s, error: d, value: void 0, assignment: u }) : c === void 0 ? a.push({ name: s, error: "not found", value: void 0, assignment: u }) : (i[s] = c, a.push({ name: s, value: c, error: void 0 }));
  }
  return [{ id: t, env: i, assignments: a }, void 0];
}
function mS(t, e, n, o) {
  var r, i;
  if (n === li)
    return ["foo", void 0];
  if (t.in === "body" && ((r = t == null ? void 0 : t.path) == null ? void 0 : r.type) == "jsonPointer")
    return t.from === "request" ? dc(e.body, t.path.value) : dc(n.body, t.path.value);
  if (t.in === "body" && ((i = t == null ? void 0 : t.path) == null ? void 0 : i.type) == "jsonPath")
    return t.from === "request" ? pc(e.body, t.path.value) : pc(n.body, t.path.value);
  if (t.in === "header")
    return t.from === "request" ? fS(e.headers, t.name) : hS(n.headers, t.name);
  if (t.in === "cookie")
    return t.from === "request" ? yS(e.headers, t.name) : gS(n.headers, t.name);
  if (t.in === "query") {
    if (t.from === "request")
      return mc(o.query, t.name);
  } else if (t.in === "path" && t.from === "request")
    return mc(o.path, t.name);
  return [void 0, `unsupported assignment: from ${t.from} in ${t.in}`];
}
function dc(t, e) {
  try {
    const n = JSON.parse(t), o = pe.find(n, e);
    return typeof o == "object" ? [void 0, "must be a primitive value"] : [o, void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Pointer "${e}": ${n}`];
  }
}
function pc(t, e) {
  try {
    const n = JSON.parse(t), o = B({ json: n, path: e });
    return typeof (o == null ? void 0 : o[0]) == "object" ? [void 0, "must be a primitive value"] : [o == null ? void 0 : o[0], void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Path "${e}": ${n}`];
  }
}
function fS(t, e) {
  for (const [n, o] of Object.entries(t))
    if (n.toLowerCase() === e.toLowerCase())
      return [o, void 0];
  return [void 0, "not found"];
}
function hS(t, e) {
  for (const [n, o] of t)
    if (n.toLowerCase() === e.toLowerCase())
      return [o, void 0];
  return [void 0, "not found"];
}
function gS(t, e) {
  for (const [n, o] of t)
    if (n.toLowerCase() === "set-cookie") {
      const r = df.parse(o);
      if (r !== void 0 && r.key === e)
        return [r.value, void 0];
    }
  return [void 0, "not found"];
}
function yS(t, e) {
  for (const [n, o] of Object.entries(t))
    if (n.toLowerCase() === "cookie") {
      const r = o.split("; ");
      for (const i of r) {
        const a = df.parse(i);
        if (a !== void 0 && a.key === e)
          return [a.value, void 0];
      }
    }
  return [void 0, "not found"];
}
function mc(t, e) {
  for (const { key: n, value: o } of t)
    if (n === e)
      return [o, void 0];
  return [void 0, "not found"];
}
function vS(t, e) {
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
function La(t) {
  return t >= 100 && t <= 199 ? "1XX" : t >= 200 && t <= 299 ? "2XX" : t >= 300 && t <= 399 ? "3XX" : t >= 400 && t <= 499 ? "4XX" : t >= 500 && t <= 599 ? "5XX" : "default";
}
function fc(t) {
  const e = [];
  for (const { assignments: n } of t)
    for (const o of n)
      o.error !== void 0 && e.push(o);
  return e;
}
async function* kS(t, e, n, o, r, i, a = []) {
  const s = Dm(), u = [ff(o, i)], c = [];
  for (const { name: d, requests: p } of r) {
    const f = yield* pf(
      d,
      s,
      t,
      e,
      n,
      o,
      p,
      [...u, ...a, ...c],
      0
    );
    if (f === void 0)
      break;
    c.push(...f);
  }
  return c;
}
async function* pf(t, e, n, o, r, i, a, s, u) {
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
    const f = a[p];
    if (f.ref === void 0) {
      yield {
        event: "playbook-aborted",
        error: "non-reference requests are not supported"
      };
      return;
    }
    const m = jS(i, f.ref);
    if (m === void 0) {
      yield {
        event: "playbook-aborted",
        error: `request not found: ${f.ref.type}/${f.ref.id}`
      };
      return;
    }
    yield { event: "request-started", ref: f.ref };
    const y = m.operationId === void 0 ? void 0 : m.auth, g = yield* mf(
      e,
      n,
      o,
      r,
      i,
      y,
      [...s, ...c],
      u
    );
    if (g === void 0) {
      yield {
        event: "http-request-prepare-error",
        error: "Failed to retrieve credentials"
      };
      return;
    }
    const k = Il(
      "stage-environment",
      f.environment || {},
      [...s, ...c]
    ), b = {
      id: "stage-environment",
      env: k.value,
      // FIXME can we make replaceEnvVariables return assignments?
      assignments: []
    }, _ = [...s, ...c, b], j = Il(
      "request-environment",
      m.environment || {},
      _
    ), C = {
      id: "request-environment",
      env: j.value,
      assignments: []
    }, L = m.operationId !== void 0 ? (d = Dc(o, m.operationId)) == null ? void 0 : d.operation : void 0, N = Dh(o, m.request, L, [
      ...s,
      ...c,
      C,
      b
    ]), te = [
      ...j.missing,
      ...k.missing,
      ...N.missing
    ];
    if (yield {
      event: "payload-variables-substituted",
      stack: [..._, C],
      found: [...j.found, ...k.found, ...N.found],
      missing: te
    }, te.length > 0) {
      yield {
        event: "http-request-prepare-error",
        error: `failed to replace request variables: ${zh(te)}`
      };
      return;
    }
    const [T, U] = "operationId" in N.value ? await x1(o, r, m.operationId, N.value, g) : await S1(N.value);
    if (U !== void 0) {
      yield { event: "http-request-prepare-error", error: U };
      return;
    }
    yield {
      event: "http-request-prepared",
      request: T,
      operationId: m.operationId
    };
    const [q, A] = await n(T);
    if (A !== void 0) {
      yield { event: "http-error-received", error: A };
      return;
    }
    if (yield { event: "http-response-received", response: q }, q !== li) {
      if (f.expectedResponse !== void 0) {
        if (String(q == null ? void 0 : q.statusCode) !== f.expectedResponse && La(q.statusCode) !== f.expectedResponse) {
          yield {
            event: "response-processing-error",
            error: `HTTP response code "${q == null ? void 0 : q.statusCode}" does not match expected stage response code "${f.expectedResponse}"`
          };
          return;
        }
      } else if (String(q == null ? void 0 : q.statusCode) !== m.defaultResponse && La(q.statusCode) !== m.defaultResponse) {
        yield {
          event: "response-processing-error",
          error: `HTTP response code "${q == null ? void 0 : q.statusCode}" does not match default response code "${m.defaultResponse}"`
        };
        return;
      }
    }
    const [Fe, an] = cc(
      `playbook-${t}-step-${p}-request`,
      m.responses,
      T,
      q,
      N.value.parameters
    );
    if (an !== void 0) {
      yield {
        event: "response-processing-error",
        error: an
      };
      return;
    }
    c.push(...Fe), yield { event: "variables-assigned", assignments: Fe };
    const Jn = fc(Fe);
    if (Jn.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${Jn.map((dt) => dt.name).join(", ")}`
      };
      return;
    }
    const [Yn, Xn] = cc(
      `playbook-${t}-step-${p}`,
      f.responses,
      T,
      q,
      N.value.parameters
    );
    if (Xn !== void 0) {
      yield {
        event: "response-processing-error",
        error: Xn
      };
      return;
    }
    yield { event: "variables-assigned", assignments: Yn };
    const Qn = fc(Yn);
    if (Qn.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${Qn.map((dt) => dt.name).join(", ")}`
      };
      return;
    }
    c.push(...Yn);
  }
  return yield { event: "playbook-finished" }, c;
}
async function* mf(t, e, n, o, r, i, a, s) {
  const u = {};
  if (i === void 0)
    return u;
  for (const c of i) {
    yield { event: "auth-started", name: c };
    const [d, p] = c.split("/"), f = r.authenticationDetails[0][d];
    if (f === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const m = p === void 0 ? f.default : p, y = f.methods[m];
    if (y === void 0) {
      yield {
        event: "auth-aborted",
        error: `credential value: "${d}/${m}" is not found`
      };
      return;
    }
    if (f === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const g = b1(t, f, m);
    if (g !== void 0)
      yield {
        event: "credential-retrieved-from-cache",
        name: c,
        result: g
      }, u[c] = { credential: f, value: g };
    else {
      const k = yield* bS(
        t,
        e,
        n,
        o,
        r,
        c,
        y,
        a,
        s
      );
      if (k === void 0) {
        yield {
          event: "auth-aborted",
          error: `Failed to get value for the credential: "${d}"`
        };
        return;
      }
      k1(t, f, m, k), u[c] = { credential: f, value: k };
    }
    yield { event: "auth-finished" };
  }
  return u;
}
async function* bS(t, e, n, o, r, i, a, s, u) {
  const c = [...s];
  if (a.requests !== void 0) {
    const p = yield* pf(
      i,
      t,
      e,
      n,
      o,
      r,
      a.requests,
      s,
      u + 1
    );
    if (p === void 0)
      return void 0;
    c.push(...p);
  }
  const d = Ih(a.credential, c);
  return d.missing.length, yield {
    event: "credential-variables-substituted",
    name: i,
    result: d.value,
    stack: c,
    found: d.found,
    missing: d.missing
  }, d.value;
}
function Gn(t, e) {
  const n = {}, o = {}, r = [];
  for (const [i, a] of Object.entries(t.variables))
    e.secrets.hasOwnProperty(a.name) ? (n[i] = e.secrets[a.name], o[a.name] = e.secrets[a.name]) : e.default.hasOwnProperty(a.name) ? (n[i] = e.default[a.name], o[a.name] = e.default[a.name]) : !a.required && a.default !== void 0 ? n[i] = a.default : a.required && r.push(a.name);
  return {
    environment: { id: "environment", assignments: [], env: n },
    simple: o,
    missing: r
  };
}
function ff(t, e) {
  var r, i;
  const n = ((r = t.runtimeConfiguration) == null ? void 0 : r.environment) || "default", { environment: o } = Gn(
    ((i = t == null ? void 0 : t.environments) == null ? void 0 : i[n]) || { variables: {} },
    e
  );
  return o;
}
function jS(t, e) {
  var n, o;
  return e.type === "operation" ? (n = t.operations[e.id]) == null ? void 0 : n.request : (o = t.requests) == null ? void 0 : o[e.id];
}
function xS(t, e) {
  return () => t({
    matcher: Nn(
      ae,
      Sd,
      Cd,
      It,
      Ot,
      Dt,
      zt
    ),
    effect: async (n, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i, operations: a }
        },
        operations: { scenarioId: s, operationId: u },
        router: {
          current: [c, d]
        }
      } = o.getState();
      if (c !== "scanconf" || d !== "operations" || u === void 0)
        return;
      o.cancelActiveListeners(), o.dispatch(Yl()), await o.delay(1e3);
      const p = a[u], f = [
        { name: "before", requests: r },
        { name: "operationBefore", requests: p.before },
        { name: "operationScenarios", requests: p.scenarios[s].requests },
        { name: "operationAfter", requests: p.after },
        { name: "after", requests: i }
      ].filter((m) => m.requests.length > 0);
      await rn(
        o.getState(),
        pi(),
        o.dispatch,
        Yl,
        $v,
        f,
        "http://localhost"
      );
    }
  });
}
function wS(t, e) {
  return () => t({
    matcher: Nn(ae, Vt, Lo),
    effect: async (n, o) => {
      const {
        requests: { ref: r },
        router: {
          current: [i, a]
        }
      } = o.getState();
      i !== "scanconf" || a !== "requests" || (o.cancelActiveListeners(), o.dispatch(Xl()), await o.delay(1e3), await rn(
        o.getState(),
        pi(),
        o.dispatch,
        Xl,
        Nv,
        [{ name: "requests", requests: [{ ref: r }] }],
        "http://localhost"
      ));
    }
  });
}
function _S(t, e) {
  return () => t({
    matcher: Nn(
      ae,
      It,
      dr,
      pr,
      Ot,
      Dt,
      zt
    ),
    effect: async (n, o) => {
      var p, f, m, y;
      const {
        scanconf: {
          playbook: r,
          selectedCredentialGroup: i,
          selectedCredential: a,
          selectedSubcredential: s
        },
        router: {
          current: [u, c]
        }
      } = o.getState();
      if (u !== "scanconf" || c !== "auth" || (o.cancelActiveListeners(), o.dispatch(Gl()), await o.delay(1e3), a === void 0 || s === void 0))
        return;
      const d = (y = (m = (f = (p = r == null ? void 0 : r.authenticationDetails) == null ? void 0 : p[i]) == null ? void 0 : f[a]) == null ? void 0 : m.methods) == null ? void 0 : y[s];
      d === void 0 || d.requests === void 0 || d.requests.length === 0 || await rn(
        o.getState(),
        pi(),
        o.dispatch,
        Gl,
        kv,
        [{ name: "auth", requests: d.requests }],
        "http://localhost"
      );
    }
  });
}
function SS(t, e) {
  return () => t({
    matcher: Nn(
      ae,
      wd,
      Ot,
      Dt,
      zt,
      It
    ),
    effect: async (n, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i }
        },
        global: { selected: a },
        router: {
          current: [s, u]
        }
      } = o.getState();
      if (s !== "scanconf" || u !== "global")
        return;
      o.cancelActiveListeners(), o.dispatch(Jl()), await o.delay(1e3);
      const c = a === "before" ? [{ name: "Global Before", requests: r }] : [{ name: "Global After", requests: i }];
      await rn(
        o.getState(),
        pi(),
        o.dispatch,
        Jl,
        _v,
        c,
        "http://localhost"
      );
    }
  });
}
function CS(t, e) {
  return () => t({
    actionCreator: $d,
    effect: async ({ payload: n }, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i, operations: a }
        },
        operations: { scenarioId: s, operationId: u },
        prefs: { useGlobalBlocks: c, rejectUnauthorized: d }
      } = o.getState(), p = a[u], f = [
        { name: "Global Before", requests: c ? r : [] },
        { name: "Before", requests: p.before },
        { name: "Scenario", requests: p.scenarios[s].requests },
        { name: "After", requests: p.after },
        { name: "Global After", requests: c ? i : [] }
      ].filter((m) => m.requests.length > 0);
      await rn(
        o.getState(),
        mi(e, { https: { rejectUnauthorized: d } }, o.take),
        o.dispatch,
        Tv,
        Ev,
        f,
        n
      );
    }
  });
}
function $S(t, e) {
  return () => t({
    actionCreator: jd,
    effect: async ({ payload: n }, o) => {
      const {
        scanconf: { oas: r, playbook: i, selectedCredential: a, selectedSubcredential: s },
        env: { data: u },
        prefs: { rejectUnauthorized: c }
      } = o.getState();
      if (a === void 0 || s === void 0)
        return;
      const d = [ff(i, u)];
      o.dispatch(vv()), o.dispatch(Di({ event: "playbook-started", name: "" })), o.dispatch(Di({ event: "request-started" }));
      for await (const p of mf(
        Dm(),
        mi(e, { https: { rejectUnauthorized: c } }, o.take),
        r,
        n,
        i,
        [`${a}/${s}`],
        d,
        0
      ))
        o.dispatch(Di(p));
    }
  });
}
function TS(t, e) {
  return () => t({
    actionCreator: us,
    effect: async ({ payload: { inputs: n, server: o } }, r) => {
      const {
        requests: { ref: i },
        scanconf: {
          playbook: { before: a, after: s }
        },
        prefs: { useGlobalBlocks: u, rejectUnauthorized: c }
      } = r.getState(), d = [
        { name: "Global Before", requests: u ? a : [] },
        { name: "Request", requests: [{ ref: i }] },
        { name: "Global After", requests: u ? s : [] }
      ].filter((p) => p.requests.length > 0);
      await rn(
        r.getState(),
        mi(e, { https: { rejectUnauthorized: c } }, r.take),
        r.dispatch,
        zv,
        Iv,
        d,
        o,
        [{ id: "inputs", env: n, assignments: [] }]
      );
    }
  });
}
function ES(t, e) {
  return () => t({
    actionCreator: oa,
    effect: async ({ payload: n }, o) => {
      const {
        scanconf: {
          playbook: { before: r, after: i }
        },
        global: { selected: a },
        prefs: { rejectUnauthorized: s }
      } = o.getState(), u = a === "before" ? [{ name: "Global Before", requests: r }] : [{ name: "Global After", requests: i }];
      await rn(
        o.getState(),
        mi(e, { https: { rejectUnauthorized: s } }, o.take),
        o.dispatch,
        xv,
        wv,
        u,
        n
      );
    }
  });
}
async function rn(t, e, n, o, r, i, a, s = []) {
  n(o());
  for await (const u of kS(
    e,
    t.scanconf.oas,
    a,
    t.scanconf.playbook,
    i,
    t.env.data,
    s
  ))
    n(r(u));
}
function pi() {
  return async () => [li, void 0];
}
function mi(t, e, n) {
  const o = OS(t, e), r = DS(n);
  return async function(a) {
    const s = o(a);
    return await r(s);
  };
}
function OS(t, e) {
  return (o) => {
    const r = crypto.randomUUID();
    return t.postMessage({
      command: "sendHttpRequest",
      payload: { request: o, id: r, config: e }
    }), r;
  };
}
function DS(t) {
  return async (e) => {
    const [n] = await t((o, r) => {
      var i;
      return (o.type === "http/showHttpResponse" || o.type === "http/showHttpError") && ((i = o == null ? void 0 : o.payload) == null ? void 0 : i.id) === e;
    });
    return n.type === "http/showHttpResponse" ? [n.payload.response, void 0] : [void 0, n.payload.error];
  };
}
function gl(t, e) {
  const [n, o] = zS(t, e);
  return o == null ? [n, void 0] : [
    void 0,
    o.map((r) => ({
      message: r.message.slice(-1).join(": "),
      pointer: pe.joinJsonPointer(r.path)
    }))
  ];
}
function zS(t, e) {
  return we({
    before: xt(t, e, e.before || [], Dn),
    after: xt(t, e, e.after || [], Dn),
    operations: Le(t, e, e.operations || {}, PS),
    authenticationDetails: xt(t, e, e.authenticationDetails === void 0 || e.authenticationDetails.length === 0 ? [{}] : e.authenticationDetails, JS),
    runtimeConfiguration: IS(t, e, e.runtimeConfiguration || {}),
    customizations: M(e.customizations),
    environments: Le(t, e, e.environments || {}, NS),
    authorizationTests: Le(t, e, e.authorizationTests || {}, ZS),
    requests: Le(t, e, e.requests || {}, qS)
  });
}
function IS(t, e, n) {
  return [{ ...n }, void 0];
}
function NS(t, e, n) {
  return we({
    variables: Le(t, e, n.variables || {}, RS)
  });
}
function RS(t, e, n) {
  return n.from !== "environment" ? Mt("unknown env from") : we({
    name: M(n.name),
    from: M(n.from),
    required: M(n.required),
    default: M(n.default)
  });
}
function PS(t, e, n) {
  return we({
    request: yl(t, e, n.request, n.operationId),
    operationId: M(n.operationId),
    before: xt(t, e, n.before || [], Dn),
    after: xt(t, e, n.after || [], Dn),
    authorizationTests: M(n.authorizationTests || []),
    scenarios: xt(t, e, n.scenarios || [], QS),
    customTests: M(n.customTests),
    customized: M(AS(n))
  });
}
function AS(t) {
  var d, p;
  const e = (p = (d = t.scenarios) == null ? void 0 : d[0]) == null ? void 0 : p.requests, n = e == null ? void 0 : e[0], o = t.customTests && t.customTests.length > 0, r = t.authorizationTests && t.authorizationTests.length > 0, i = t.before && t.before.length > 0, a = t.after && t.after.length > 0, s = t.scenarios && t.scenarios.length > 1, u = e && e.length > 1, c = n !== void 0 && MS(n);
  return o || r || i || a || s || u || c;
}
function MS(t) {
  const e = t.environment && Object.keys(t.environment).length > 0, n = t.auth && t.auth.length > 0, o = t.responses && Object.keys(t.responses).length > 0, r = "expectedResponse" in t;
  return e || n || o || r;
}
function Dn(t, e, n) {
  return n.$ref !== void 0 ? FS(t, e, n) : yl(t, e, n);
}
function FS(t, e, n) {
  return we({
    responses: Le(t, e, n.responses || {}, vl),
    auth: M(n.auth || []),
    ref: GS(t, e, n.$ref),
    fuzzing: M(n.fuzzing),
    environment: kl(t, e, n.environment || {}),
    injectionKey: M(n.injectionKey),
    expectedResponse: M(n.expectedResponse)
  });
}
function yl(t, e, n, o) {
  return we({
    responses: Le(t, e, n.responses || {}, vl),
    fuzzing: M(n.fuzzing),
    auth: M(n.auth || []),
    environment: kl(t, e, n.environment || {}),
    injectionKey: M(n.injectionKey),
    ref: M(void 0),
    defaultResponse: M(n.defaultResponse),
    request: BS(t, e, n.request, o),
    operationId: M(o)
  });
}
function LS(t, e, n) {
  return we({
    operationId: [void 0, void 0],
    responses: Le(t, e, n.responses || {}, vl),
    environment: kl(t, e, n.environment || {}),
    defaultResponse: M(n.defaultResponse),
    request: HS(t, e, n.request)
  });
}
function qS(t, e, n) {
  return n.operationId === void 0 ? LS(t, e, n) : yl(t, e, n, n.operationId);
}
function BS(t, e, n, o) {
  return n.type === "42c" ? US(t, e, n, o) : Mt(`unknown request type: ${n.type}`);
}
function HS(t, e, n) {
  return n.type === "42c" ? VS(t, e, n) : Mt(`unknown request type: ${n.type}`);
}
function US(t, e, n, o) {
  var a, s;
  const r = ((a = n == null ? void 0 : n.details) == null ? void 0 : a.operationId) || o;
  if (r === void 0)
    return [
      void 0,
      Wo("Unable to parse request that has no operationId set", void 0, ["details"])
    ];
  const i = Dc(t, r);
  return i === void 0 ? Mt(`Unable to find in the OpenAPI file an operation with operationId: "${r}"`) : we({
    operationId: M(r),
    path: M(i.path),
    method: M(i.method.toLowerCase()),
    parameters: gf(t, e, (n == null ? void 0 : n.details) || {}),
    body: hf(t, e, (s = n == null ? void 0 : n.details) == null ? void 0 : s.requestBody)
  });
}
function VS(t, e, n) {
  var o;
  return we({
    url: M(n.details.url),
    method: M(n.details.method.toLowerCase()),
    parameters: gf(t, e, (n == null ? void 0 : n.details) || {}),
    body: hf(t, e, (o = n == null ? void 0 : n.details) == null ? void 0 : o.requestBody)
  });
}
function hf(t, e, n) {
  return n == null ? [void 0, void 0] : n.mode === "json" ? [{ mediaType: "application/json", value: n.json }, void 0] : n.mode === "urlencoded" ? [
    { mediaType: "application/x-www-form-urlencoded", value: WS(n.urlencoded) },
    void 0
  ] : n.mode === "raw" ? [{ mediaType: "raw", value: n.raw }, void 0] : [void 0, void 0];
}
function WS(t) {
  return Object.entries(t).reduce((e, [n, o]) => (e[n] = o.value, e), {});
}
function gf(t, e, n) {
  return we({
    cookie: or(t, e, n.cookies || []),
    path: or(t, e, n.paths || []),
    query: or(t, e, n.queries || []),
    header: or(t, e, n.headers || [])
  });
}
function or(t, e, n) {
  return [
    n.map(({ key: o, value: r }) => ({ key: o, value: r })),
    void 0
  ];
}
function vl(t, e, n) {
  return we({
    expectations: M(n.expectations),
    variableAssignments: Le(t, e, n.variableAssignments || {}, KS)
  });
}
function KS(t, e, n) {
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
  ] : Mt("unexpected assignment");
}
function kl(t, e, n) {
  return [n, void 0];
}
function GS(t, e, n) {
  if (n === void 0)
    return [void 0, void 0];
  const o = pe.parseJsonPointer(n);
  return o.length === 2 && o[0] === "requests" ? [{ type: "request", id: String(o[1]) }, void 0] : o.length === 3 && o[0] === "operations" && o[2] === "request" ? [{ type: "operation", id: String(o[1]) }, void 0] : Mt(`unexpected stage $ref, must point to operations or requests: ${n}`);
}
function JS(t, e, n) {
  return n.$ref !== void 0 ? Mt(`external credential refs are not supported: ${n.$ref}`) : Le(t, e, n, YS);
}
function YS(t, e, n) {
  return we({
    in: M(n.in),
    type: M(n.type),
    name: M(n.name),
    default: M(n.default),
    ttl: M(n.ttl),
    tti: M(n.tti),
    methods: Le(t, e, n.credentials || {}, XS),
    description: M(n.description)
  });
}
function XS(t, e, n) {
  return we({
    description: M(n.description),
    requests: xt(t, e, n.requests || [], Dn),
    credential: M(n.credential)
  });
}
function QS(t, e, n) {
  return we({
    requests: xt(t, e, n.requests || [], Dn),
    key: M(n.key),
    fuzzing: M(n.fuzzing)
  });
}
function ZS(t, e, n) {
  const o = n.source === null ? [] : n.source, r = n.target === null ? [] : n.target;
  return o.some((i) => typeof i != "string") || r.some((i) => typeof i != "string") ? Mt("only strings are allowed, embedding Credential objects is not supported yet") : we({
    key: M(n.key),
    source: M(o),
    target: M(r)
  });
}
function Wo(t, e, n) {
  let o = [];
  return n !== void 0 && (typeof n == "string" || typeof n == "number") ? o = [`${n}`] : n !== void 0 && Array.isArray(n) && (o = [...n]), e === void 0 ? [{ message: [t], path: o }] : e.map((r) => ({
    message: [t, ...r.message],
    path: [...o, ...r.path]
  }));
}
function Mt(t, e, n) {
  return [void 0, Wo(t, e, n)];
}
function we(t) {
  const e = [], n = {};
  for (const [o, r] of Object.entries(t)) {
    const [i, a] = r;
    a !== void 0 ? e.push(...Wo("failed to parse", a, [o])) : n[o] = i;
  }
  return e.length > 0 ? [void 0, e] : [n, void 0];
}
function M(t) {
  return [t, void 0];
}
function Le(t, e, n, o) {
  const r = [], i = {}, a = Object.entries(n).map(([s, u]) => [s, o(t, e, u)]);
  for (const [s, u] of a) {
    const [c, d] = u;
    d !== void 0 ? r.push(...Wo("failed to parse", d, [s])) : i[s] = c;
  }
  return r.length > 0 ? [void 0, r] : [i, void 0];
}
function xt(t, e, n, o) {
  const r = [], i = [], a = (n || []).map((s) => o(t, e, s));
  for (const [s, u] of a.entries()) {
    const [c, d] = u;
    d !== void 0 ? r.push(...Wo("failed to parse", d, [s])) : i.push(c);
  }
  return r.length > 0 ? [void 0, r] : [i, void 0];
}
function fi(t, e) {
  const n = e.runtimeConfiguration, o = e.customizations, r = e.environments, [i, a] = eC(t, e, e.authenticationDetails);
  if (a !== void 0)
    return [void 0, `failed to serialize authentication details: ${a}`];
  const [s, u] = oC(t, e);
  if (u !== void 0)
    return [void 0, `failed to serialize operations: ${u}`];
  const [c, d] = uC(t, e, e.requests);
  if (d !== void 0)
    return [void 0, `unable to serialize requests: ${d}`];
  const [p, f] = zn(t, e, e.before);
  if (f !== void 0)
    return [void 0, `unable to serialize before: ${f}`];
  const [m, y] = zn(t, e, e.after);
  return y !== void 0 ? [void 0, `unable to serialize after: ${y}`] : [
    {
      version: "2.0.0",
      runtimeConfiguration: n,
      customizations: o,
      environments: r,
      operations: s,
      before: ao(p),
      after: ao(m),
      authenticationDetails: i,
      authorizationTests: ao(e.authorizationTests),
      requests: ao(c)
    },
    void 0
  ];
}
function ao(t) {
  return t instanceof Array ? t.length > 0 ? t : void 0 : Object.keys(t).length > 0 ? t : void 0;
}
function eC(t, e, n) {
  const o = [];
  for (const r of n) {
    const [i, a] = tC(t, e, r);
    if (a !== void 0)
      return [void 0, "xxx"];
    o.push(i);
  }
  return [o.length === 1 && Object.keys(o[0]).length === 0 ? [] : o, void 0];
}
function tC(t, e, n) {
  const o = {};
  for (const [r, i] of Object.entries(n)) {
    const [a, s] = nC(t, e, i.methods);
    if (s !== void 0)
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
function nC(t, e, n) {
  const o = {};
  for (const [r, i] of Object.entries(n)) {
    const [a, s] = zn(t, e, i.requests || []);
    if (s !== void 0)
      return [void 0, `failed to serialize requests: ${s}`];
    o[r] = {
      credential: i.credential,
      description: i.description,
      requests: a.length > 0 ? a : void 0
    };
  }
  return [o, void 0];
}
function oC(t, e) {
  const n = {};
  for (const [o, r] of Object.entries(e.operations)) {
    const [i, a] = rC(t, e, r);
    if (a !== void 0)
      return [void 0, `unable to serialize operation '${o}: ${a}'`];
    n[o] = i;
  }
  return [n, void 0];
}
function rC(t, e, n) {
  const [o, r] = bl(t, e, n.request, n.operationId);
  if (r !== void 0)
    return [void 0, `failed to serialize request: ${r}`];
  const [i, a] = sC(t, e, n);
  if (a !== void 0)
    return [void 0, `failed to serialize scenarios: ${a}`];
  const [s, u] = zn(t, e, n.before);
  if (u !== void 0)
    return [void 0, `failed to serialize before: ${u}`];
  const [c, d] = zn(t, e, n.after);
  return d !== void 0 ? [void 0, `failed to serialize after: ${d}`] : [
    {
      operationId: n.operationId,
      request: o,
      before: s.length > 0 ? s : void 0,
      after: c.length > 0 ? c : void 0,
      ...i,
      customTests: n.customTests,
      authorizationTests: ao(n.authorizationTests)
    },
    void 0
  ];
}
function iC(t, e, n) {
  const [o, r] = xl(t, e, n.responses);
  if (r !== void 0)
    return [void 0, `failed to serialize responses: ${r}`];
  const [i, a] = cC(n.ref);
  return a !== void 0 ? [void 0, `failed to serialize responses: ${a}`] : [{
    fuzzing: n.fuzzing,
    $ref: i,
    auth: yf(n.auth),
    expectedResponse: n.expectedResponse,
    environment: jl(n.environment),
    responses: o
  }, void 0];
}
function bl(t, e, n, o) {
  const [r, i] = dC(t, e, n.request, o);
  if (i !== void 0)
    return [void 0, `failed to serialize request: ${i}`];
  const [a, s] = xl(t, e, n.responses);
  return s !== void 0 ? [void 0, `failed to serialize responses: ${s}`] : [{
    operationId: o || n.request.operationId,
    fuzzing: n.fuzzing,
    auth: yf(n.auth),
    request: r,
    defaultResponse: n.defaultResponse,
    environment: jl(n.environment),
    responses: a
  }, void 0];
}
function aC(t, e, n) {
  const [o, r] = pC(t, e, n.request);
  if (r !== void 0)
    return [void 0, `failed to serialize request: ${r}`];
  const [i, a] = xl(t, e, n.responses);
  return a !== void 0 ? [void 0, `failed to serialize responses: ${a}`] : [{
    request: o,
    defaultResponse: n.defaultResponse,
    environment: jl(n.environment),
    responses: i
  }, void 0];
}
function yf(t) {
  if (!(t === void 0 || t.length === 0))
    return t;
}
function sC(t, e, n) {
  const o = [];
  for (const r of n.scenarios) {
    const [i, a] = lC(t, e, r);
    if (a !== void 0)
      return [void 0, `unable to serialize scenario: ${a}`];
    o.push(i);
  }
  return [{ scenarios: o }, void 0];
}
function lC(t, e, n) {
  const [o, r] = zn(t, e, n.requests);
  return r !== void 0 ? [void 0, `unable to serialize requests: ${r}`] : [
    {
      key: "happy.path",
      requests: o,
      fuzzing: n.fuzzing
    },
    void 0
  ];
}
function zn(t, e, n) {
  const o = [];
  for (const r of n)
    if (r.ref === void 0) {
      const [i, a] = bl(t, e, r, r.operationId);
      if (a !== void 0)
        return [void 0, `unable to serialize stage: ${a}`];
      o.push(i);
    } else {
      const [i, a] = iC(t, e, r);
      if (a !== void 0)
        return [void 0, `unable to serialize stage reference: ${a}`];
      o.push(i);
    }
  return [o, void 0];
}
function uC(t, e, n) {
  const o = {};
  for (const [r, i] of Object.entries(n || {}))
    if (i.operationId === void 0) {
      const [a, s] = aC(t, e, i);
      if (s !== void 0)
        return [void 0, `unable to serialize request: ${s}`];
      o[r] = a;
    } else {
      const [a, s] = bl(t, e, i, i.operationId);
      if (s !== void 0)
        return [void 0, `unable to serialize request: ${s}`];
      o[r] = a;
    }
  return [o, void 0];
}
function cC(t) {
  return t.type === "operation" ? ["#" + pe.joinJsonPointer(["operations", t.id, "request"]), void 0] : t.type === "request" ? ["#" + pe.joinJsonPointer(["requests", t.id]), void 0] : [void 0, `Unable to serialize unknown $ref type: ${t}`];
}
function jl(t) {
  if (!(t === void 0 || Object.keys(t).length === 0))
    return t;
}
function dC(t, e, n, o) {
  const r = {
    operationId: o,
    method: n.method.toUpperCase(),
    url: `{{host}}${n.path}`,
    headers: bt(t, e, n.parameters.header),
    queries: bt(t, e, n.parameters.query),
    paths: bt(t, e, n.parameters.path),
    cookies: bt(t, e, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? r.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? r.requestBody = {
    mode: "urlencoded",
    urlencoded: vf(n.body.value)
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
function pC(t, e, n) {
  const o = {
    //operationId: operation.operationId,
    method: n.method.toUpperCase(),
    url: n.url,
    headers: bt(t, e, n.parameters.header),
    queries: bt(t, e, n.parameters.query),
    paths: bt(t, e, n.parameters.path),
    cookies: bt(t, e, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? o.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? o.requestBody = {
    mode: "urlencoded",
    urlencoded: vf(n.body.value)
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
function xl(t, e, n) {
  const o = {}, r = Object.entries(n || {});
  if (r.length === 0)
    return [void 0, void 0];
  for (const [i, a] of r)
    o[i] = {
      expectations: a.expectations,
      variableAssignments: mC(a.variableAssignments)
    };
  return [o, void 0];
}
function bt(t, e, n) {
  if (n.length !== 0)
    return n;
}
function mC(t) {
  if (Object.keys(t || {}).length !== 0)
    return t;
}
function vf(t) {
  return Object.entries(t).reduce((e, [n, o]) => (e[n] = { value: o }, e), {});
}
function wl(t) {
  var n;
  const e = ((n = t.runtimeConfiguration) == null ? void 0 : n.environment) || "default";
  return t.environments[e];
}
function fC(t, e) {
  const n = In(t.before || [], e).map((a) => ({ container: "globalBefore", stageIndex: a })), o = In(t.after || [], e).map((a) => ({ container: "globalAfter", stageIndex: a })), r = Object.entries(t.operations || {}).flatMap(([a, s]) => a !== e ? hC(s, a, e) : []), i = (t.authenticationDetails || []).flatMap(
    // TODO: handle credentials that contain just a $ref
    (a, s) => Object.entries(a).flatMap(([u, c]) => yC(c, u, s, e))
  );
  return [...n, ...o, ...i, ...r];
}
function hC(t, e, n) {
  const o = In(t.before || [], n).map((a) => ({ container: "operationBefore", operationId: e, stageIndex: a })), r = In(t.after || [], n).map((a) => ({ container: "operationAfter", operationId: e, stageIndex: a })), i = t.scenarios.flatMap((a, s) => gC(a, e, s, n));
  return [...o, ...i, ...r];
}
function gC(t, e, n, o) {
  return In(t.requests || [], o).map((r) => ({
    container: "operationScenarios",
    operationId: e,
    scenarioIndex: n,
    stageIndex: r
  }));
}
function yC(t, e, n, o) {
  return Object.entries(t.credentials).flatMap(([r, i]) => In(i.requests || [], o).map((a) => ({
    container: "credential",
    group: n,
    credentialId: e,
    subCredentialId: r,
    stageIndex: a
  })));
}
function In(t, e) {
  const n = "#" + pe.joinJsonPointer(["operations", e, "request"]);
  return t.map((o, r) => {
    if (vC(o) && o.$ref === n)
      return r;
  }).filter((o) => o !== void 0);
}
function vC(t) {
  return "$ref" in t;
}
function kC(t, e) {
  const n = [];
  for (const o of t)
    for (const r of e)
      bC(o, r) && n.push({
        type: "operation-renamed",
        path: o.path,
        method: o.method,
        oldOperationId: r.operationId,
        newOperationId: o.operationId
      });
  return n;
}
function bC(t, e) {
  return t.path === e.path && t.method === e.method;
}
function jC(t, e) {
  const n = xC(t, e), o = wC(t, e), r = kC(n, o), i = n.filter((u) => !r.some((c) => c.newOperationId === u.operationId)), a = o.filter((u) => !r.some((c) => c.oldOperationId === u.operationId)), s = SC(t, e);
  return [...i, ...a, ...r, ...s];
}
function xC(t, e) {
  const n = e.operations || {};
  return kf(t).filter((o) => !n[o.operationId]).map((o) => ({
    type: "operation-added",
    ...o
  }));
}
function wC(t, e) {
  var s, u;
  const n = e.operations || {}, o = kf(t).map((c) => c.operationId), i = Object.keys(n).filter((c) => !o.includes(c)), a = [];
  for (const c of i) {
    const d = (u = (s = _C(c, e)) == null ? void 0 : s.request) == null ? void 0 : u.request;
    if ((d == null ? void 0 : d.type) === "42c" && d.details.url.startsWith("{{host}}")) {
      const p = d.details.method.toLowerCase(), f = d.details.url.substring(8);
      a.push({
        type: "operation-removed",
        operationId: c,
        method: p,
        path: f,
        references: fC(e, c)
      });
    } else
      throw new Error(`Unsupported operation: operationId: ${c}, request ${JSON.stringify(d)}`);
  }
  return a;
}
function kf(t) {
  return (Er(t) ? th(t) : nh(t)).map(([n, o, r]) => ({
    path: n,
    method: o,
    operationId: r.operationId || RC(n, o)
  }));
}
function _C(t, e) {
  var n;
  return (n = e.operations) == null ? void 0 : n[t];
}
function SC(t, e) {
  const n = e.authenticationDetails || [{}];
  return n.length === 0 ? [] : CC(t).filter((o) => !n[0][o]).map((o) => ({
    type: "security-added",
    schema: o
  }));
}
function CC(t) {
  var e;
  if (Er(t)) {
    const n = (e = t.components) == null ? void 0 : e.securitySchemes;
    return n ? Object.keys(n) : [];
  } else {
    const n = t.securityDefinitions;
    return n ? Object.keys(n) : [];
  }
}
function $C(t, e) {
  const n = pe.simpleClone(t);
  for (const o of e)
    o.container === "globalBefore" ? to(n.before, o.stageIndex) : o.container === "globalAfter" ? to(n.after, o.stageIndex) : o.container === "operationBefore" ? to(n.operations[o.operationId].before, o.stageIndex) : o.container === "operationAfter" ? to(n.operations[o.operationId].after, o.stageIndex) : o.container === "operationScenarios" && to(n.operations[o.operationId].scenarios[o.scenarioIndex].requests, o.stageIndex);
  return TC(n), n;
}
function to(t, e) {
  t && (t[e] = void 0);
}
function TC(t) {
  dn(t.before), dn(t.after);
  for (const e of Object.values(t.operations || {})) {
    dn(e.before), dn(e.after);
    for (const n of e.scenarios)
      dn(n.requests);
  }
  for (const e of t.authenticationDetails || [])
    for (const n of Object.values(e))
      for (const o of Object.values(n.credentials))
        dn(o.requests);
}
function dn(t) {
  if (t !== void 0)
    for (let e = t.length - 1; e >= 0; e--)
      t[e] === void 0 && t.splice(e, 1);
}
function EC(t, e, n) {
  const o = pe.simpleClone(t);
  pn(o.before, e, n), pn(o.after, e, n);
  for (const r of Object.values(o.operations || {})) {
    pn(r.before, e, n), pn(r.after, e, n);
    for (const i of r.scenarios)
      pn(i.requests, e, n);
  }
  for (const r of o.authenticationDetails || [])
    for (const i of Object.values(r))
      for (const a of Object.values(i.credentials))
        pn(a.requests, e, n);
  return o;
}
function pn(t, e, n) {
  for (const o of t || [])
    o.$ref === e && (o.$ref = n);
}
function OC(t, e, n, o) {
  let r = pe.simpleClone(e);
  for (const i of o)
    i.type === "operation-added" ? r = DC(t, r, n, i) : i.type === "operation-removed" ? r = zC(t, r, n, i) : i.type === "operation-renamed" ? r = IC(r, i) : i.type === "security-added" && (r = NC(t, r, n, i));
  return r;
}
function DC(t, e, n, o) {
  const r = n.operations[o.operationId];
  return e.operations[o.operationId] = r, e;
}
function zC(t, e, n, o) {
  return delete e.operations[o.operationId], $C(e, o.references);
}
function IC(t, e) {
  var i, a;
  const n = t.operations[e.oldOperationId];
  n.operationId = e.newOperationId, n.request.operationId = e.newOperationId, ((a = (i = n.request) == null ? void 0 : i.request) == null ? void 0 : a.type) === "42c" && (n.request.request.details.operationId = e.newOperationId), delete t.operations[e.oldOperationId], t.operations[e.newOperationId] = n;
  const o = "#" + pe.joinJsonPointer(["operations", e.oldOperationId, "request"]), r = "#" + pe.joinJsonPointer(["operations", e.newOperationId, "request"]);
  return EC(t, o, r);
}
function NC(t, e, n, o) {
  e.authenticationDetails || (e.authenticationDetails = [], e.authenticationDetails.push({}));
  const r = o.schema;
  return e.authenticationDetails[0][r] = n.authenticationDetails[0][r], e;
}
function RC(t, e) {
  return `${t}:${e}`;
}
function PC(t) {
  return () => t({
    actionCreator: Lr,
    effect: async ({ payload: { oas: e, scanconf: n } }, o) => {
      const [r, i] = qa(n);
      if (i !== void 0) {
        o.dispatch(
          at({ message: `Failed to parse scan configuration: ${i}` })
        ), o.dispatch(ae(["general-error"]));
        return;
      }
      const a = jC(e, r);
      if (a.length > 0) {
        o.dispatch(Av({ scanconf: n, oas: e, changes: a })), o.dispatch(ae(["scanconf-update"]));
        return;
      }
      const [s, u] = gl(e, r);
      if (u !== void 0) {
        const c = u.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        o.dispatch(at({ message: c })), o.dispatch(ae(["general-error"]));
        return;
      }
      o.dispatch(qr({ playbook: s, oas: e })), o.dispatch(ae(["scanconf", "requests"]));
    }
  });
}
function AC(t, e) {
  return () => t({
    actionCreator: cd,
    effect: async ({ payload: { oas: n, scanconf: o } }, r) => {
      const { changes: i, scanconf: a } = r.getState().scanconfUpdate, [s, u] = qa(a);
      if (u !== void 0) {
        r.dispatch(
          at({
            message: `Failed to parse original scan configuration: ${u}`
          })
        ), r.dispatch(ae(["general-error"]));
        return;
      }
      const [c, d] = qa(o);
      if (d !== void 0) {
        r.dispatch(
          at({
            message: `Failed to parse updated scan configuration: ${d}`
          })
        ), r.dispatch(ae(["general-error"]));
        return;
      }
      const p = OC(n, s, c, i), [f, m] = gl(n, p);
      if (m !== void 0) {
        const y = m.map((g) => `${g.message}: ${g.pointer}`).join(" ");
        r.dispatch(at({ message: y })), r.dispatch(ae(["general-error"]));
        return;
      }
      e.postMessage({
        command: "saveScanconf",
        payload: JSON.stringify(p, null, 2)
      }), r.dispatch(qr({ playbook: f, oas: n })), r.dispatch(ae(["scanconf", "requests"]));
    }
  });
}
function qa(t) {
  try {
    return [JSON.parse(t), void 0];
  } catch (e) {
    return [void 0, `${e}`];
  }
}
const MC = (t, e) => ({
  runScan: () => t({
    actionCreator: is,
    effect: async (n, o) => {
      e.postMessage({
        command: "runScan",
        payload: n.payload
      });
    }
  }),
  runFullScan: () => t({
    actionCreator: ud,
    effect: async (n, o) => {
      e.postMessage({
        command: "runFullScan",
        payload: n.payload
      });
    }
  }),
  saveScanconf: () => t({
    matcher: Nn(
      Lo,
      pd,
      ls,
      as,
      ss,
      Ot,
      Dt,
      zt,
      It,
      md,
      yd,
      hd,
      gd,
      fd,
      na
    ),
    effect: async (n, o) => {
      const { scanconf: r } = o.getState(), [i, a] = fi(r.oas, r.playbook);
      if (a !== void 0)
        return;
      const s = JSON.stringify(i, null, 2);
      e.postMessage({
        command: "saveScanconf",
        payload: s
      });
    }
  }),
  sendHttpRequest: () => t({
    actionCreator: sv,
    effect: async (n, o) => {
      const { id: r, request: i, config: a } = n.payload;
      e.postMessage({ command: "sendHttpRequest", payload: { id: r, request: i, config: a } });
    }
  }),
  showEnvWindow: () => t({
    actionCreator: zc,
    effect: async (n, o) => {
      e.postMessage({ command: "showEnvWindow", payload: void 0 });
    }
  }),
  savePrefs: () => t({
    actionCreator: Ic,
    effect: async (n, o) => {
      const { prefs: r } = o.getState();
      e.postMessage({
        command: "savePrefs",
        payload: r
      });
    }
  }),
  openLink: qh(t, e),
  updateScanconf: () => t({
    actionCreator: Od,
    effect: async (n, o) => {
      e.postMessage({
        command: "updateScanconf",
        payload: void 0
      });
    }
  })
});
function FC(t) {
  return () => t({
    actionCreator: Dd,
    effect: async (e, n) => {
      const { oas: o, scanconf: r } = n.getState().scanconfUpdate, [i, a] = LC(r);
      if (a !== void 0) {
        n.dispatch(
          at({ message: `Failed to parse scan configuration: ${a}` })
        ), n.dispatch(ae(["general-error"]));
        return;
      }
      const [s, u] = gl(o, i);
      if (u !== void 0) {
        const c = u.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        n.dispatch(at({ message: c })), n.dispatch(ae(["general-error"]));
        return;
      }
      n.dispatch(qr({ playbook: s, oas: o })), n.dispatch(ae(["scanconf", "operations"]));
    }
  });
}
function LC(t) {
  try {
    return [JSON.parse(t), void 0];
  } catch (e) {
    return [void 0, `${e}`];
  }
}
const bf = qf(), $e = bf.startListening;
function qC(t, e) {
  const n = CS($e, t), o = xS($e), r = wS($e), i = TS($e, t), a = _S($e), s = $S($e, t), u = ES($e, t), c = SS($e), d = MC($e, t);
  return Bh($e, e), Bf({
    ...d,
    executeTryScenarioListener: n,
    executeMockScenarioListener: o,
    executeRequestListener: i,
    executeMockRequestListener: r,
    executeMockAuthRequestsListener: a,
    executeTryAuthenticationListener: s,
    executeTryGlobalListener: u,
    executeMockGlobalListener: c,
    executeShowScanconfOperationListener: PC($e),
    executeLoadUpdatedScanconfListener: AC($e, t),
    executeSkipScanconfUpdate: FC($e)
  }), bf;
}
function BC({
  operationId: t,
  goToRequest: e
}) {
  const n = me(), { playbook: o, oas: r } = F((k) => k.scanconf), { scenarioId: i, mockResult: a } = F((k) => k.operations), s = o.operations[t].scenarios, u = Object.keys(o.operations), c = Object.keys(o.requests || {}), d = (k) => n(Cd(k)), p = (k, b) => n(It({ location: k, reference: b })), f = (k) => n(zt(k)), m = (k, b) => n(Dt({ location: k, to: b })), y = (k, b) => {
    n(
      Ot({
        container: k,
        stage: {
          ref: b
        }
      })
    );
  }, g = s.map((k, b) => ({
    id: `${b}`,
    title: k.key,
    /* not implemented
    menu: (
      <Menu>
        <MenuItem onSelect={() => undefined}>Delete</MenuItem>
      </Menu>
    ),
    */
    content: /* @__PURE__ */ l.jsxs(HC, { children: [
      /* @__PURE__ */ l.jsx(
        En,
        {
          oas: r,
          stages: k.requests,
          container: { container: "operationScenarios", operationId: t, scenarioIndex: b },
          executionResult: no(a, "operationScenarios"),
          saveStage: p,
          moveStage: m,
          removeStage: f,
          operations: o.operations,
          requests: o.requests,
          goToRequest: e,
          fuzzing: !0
        }
      ),
      /* @__PURE__ */ l.jsx(
        On,
        {
          operationIds: u,
          requestIds: c,
          onSelect: (_) => y({ container: "operationScenarios", operationId: t, scenarioIndex: b }, _)
        }
      )
    ] })
  }));
  return /* @__PURE__ */ l.jsx(
    Et,
    {
      activeTab: `${i}`,
      setActiveTab: (k) => d(parseInt(k)),
      tabs: g
    }
  );
}
const HC = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;
function UC({
  authorizationTests: t,
  onSelect: e
}) {
  const n = "", o = "", r = t, [i, a] = x.useState(r), { isOpen: s, getMenuProps: u, getInputProps: c, getItemProps: d, openMenu: p } = zr({
    initialInputValue: n,
    items: i,
    onSelectedItemChange: ({ selectedItem: f }) => {
      f && e(f);
    },
    onInputValueChange: ({ inputValue: f }) => {
      a(
        r.filter((m) => !f || m.toLowerCase().includes(f))
      );
    },
    itemToString: (f) => f || ""
  });
  return /* @__PURE__ */ l.jsxs(VC, { children: [
    /* @__PURE__ */ l.jsx(
      WC,
      {
        autoFocus: !0,
        ...c({
          onFocus() {
            p();
          }
        }),
        placeholder: o,
        onBlur: (f) => {
          e(void 0);
        }
      }
    ),
    /* @__PURE__ */ l.jsx(KC, { children: /* @__PURE__ */ l.jsx(GC, { ...u(), isOpen: s, children: s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      i.map((f, m) => /* @__PURE__ */ l.jsx(
        "li",
        {
          ...d({
            item: f,
            index: m
          }),
          children: f
        },
        `li-${m}`
      )),
      i.length === 0 && /* @__PURE__ */ l.jsx("li", { children: "No more tests available" })
    ] }) }) })
  ] });
}
const VC = v.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${h.border});
`, WC = v.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  &::placeholder {
    color: var(${h.inputPlaceholderForeground});
  }
`, KC = v.div`
  position: relative;
  z-index: 1;
`, GC = v.ul`
  ${({ isOpen: t }) => t && `border: 1px solid var(${h.dropdownBorder});`}
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
function JC({
  authorizationTests: t,
  auth: e,
  existing: n,
  credentials: o,
  onSelect: r
}) {
  const [i, a] = x.useState(!1), u = Object.entries(t).filter(([c, d]) => XC(o, e, d.source[0])).map(([c]) => c).filter((c) => !n.includes(c));
  return i ? /* @__PURE__ */ l.jsx(
    UC,
    {
      onSelect: (c) => {
        c !== void 0 && r(c), a(!1);
      },
      authorizationTests: u
    }
  ) : /* @__PURE__ */ l.jsxs(
    YC,
    {
      onClick: (c) => {
        c.stopPropagation(), c.preventDefault(), a(!0);
      },
      children: [
        /* @__PURE__ */ l.jsx(Fo, {}),
        " Add authorization test"
      ]
    }
  );
}
const YC = v.div`
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
function XC(t, e, n) {
  return e !== void 0 && e.some((o) => {
    var i;
    const r = (i = t[o]) == null ? void 0 : i.default;
    return n === o || n === `${o}/${r}`;
  });
}
function QC({
  authorizationTests: t,
  removeTest: e
}) {
  return /* @__PURE__ */ l.jsx(ZC, { children: t.map((n, o) => /* @__PURE__ */ l.jsxs(e$, { children: [
    /* @__PURE__ */ l.jsx("div", { children: n }),
    /* @__PURE__ */ l.jsx(Nt, { children: /* @__PURE__ */ l.jsxs(tn, { onClick: (r) => r.stopPropagation(), onSelect: () => e(n), children: [
      /* @__PURE__ */ l.jsx(He, {}),
      "Delete"
    ] }) })
  ] }, o)) });
}
const ZC = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, e$ = v.div`
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
function jf(t, e) {
  if (t.operations !== void 0)
    for (const n of Object.keys(t == null ? void 0 : t.operations))
      n !== e && (t.operations[n].scenarios = [], t.operations[n].before = [], t.operations[n].after = [], t.operations[n].customTests = [], t.operations[n].authorizationTests = []);
  return JSON.stringify(t, null, 2);
}
function _l(t, e, n, o) {
  return e == "docker" && n && (o === "darwin" || o === "win32") && (t.toLowerCase().startsWith("https://localhost") || t.toLowerCase().startsWith("http://localhost")) ? t.replace(/localhost/i, "host.docker.internal") : t;
}
function hi({
  path: t,
  method: e,
  operationId: n,
  children: o
}) {
  return /* @__PURE__ */ l.jsxs(t$, { children: [
    n && /* @__PURE__ */ l.jsxs(n$, { children: [
      n,
      /* @__PURE__ */ l.jsx(Fc, {})
    ] }),
    /* @__PURE__ */ l.jsxs(o$, { children: [
      /* @__PURE__ */ l.jsx(r$, { children: e }),
      /* @__PURE__ */ l.jsx(i$, { children: t })
    ] }),
    o
  ] });
}
const t$ = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-break: anywhere;
`, n$ = v.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  > svg {
    fill: var(${h.linkForeground});
  }
`, o$ = v.div`
  display: flex;
  gap: 4px;
`, r$ = v.div`
  background-color: var(${h.badgeBackground});
  color: var(${h.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, i$ = v.div``;
function a$({ operationId: t }) {
  var L, N, te;
  const e = me(), { oas: n, playbook: o, servers: r } = F((T) => T.scanconf), i = F((T) => T.config.data), { mockResult: a, tryResult: s } = F((T) => T.operations), u = F((T) => T.env.data), c = (T) => e(zt(T)), d = (T, U) => e(It({ location: T, reference: U })), p = (T, U) => e(Dt({ location: T, to: U })), f = (T, U) => {
    e(
      Ot({
        container: T,
        stage: {
          ref: U
        }
      })
    );
  }, m = (T) => {
    e(Vt(T)), e(ae(["scanconf", "requests"]));
  }, y = Object.keys(o.operations), g = Object.keys(o.requests || {}), k = o.operations[t], b = no(a, "before"), _ = no(a, "after"), {
    simple: j,
    environment: {
      env: { host: C }
    }
  } = Gn(wl(o), u);
  return k === void 0 ? /* @__PURE__ */ l.jsx(
    _i,
    {
      message: `Unable to find operation with operationId "${t}" in scan configuration`,
      children: /* @__PURE__ */ l.jsx("p", { children: "Verify if the OpenAPI file contains operations that were added after the scan configuration was created. If needed, consider deleting and recreating the scan configuration." })
    }
  ) : /* @__PURE__ */ l.jsxs(s$, { children: [
    /* @__PURE__ */ l.jsx(
      Eo,
      {
        menu: !0,
        servers: r,
        host: C,
        onTry: (T) => {
          e($d(T));
        },
        onScan: (T) => {
          const U = _l(
            T,
            i.scanRuntime,
            i.docker.replaceLocalhost,
            i.platform
          ), [q, A] = fi(n, o);
          if (A !== void 0) {
            console.log("failed to serialize", A);
            return;
          }
          e(
            is({
              path: k.request.request.path,
              method: k.request.request.method,
              operationId: t,
              env: {
                SCAN42C_HOST: U,
                ...j
              },
              scanconf: jf(q, t)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
      l$,
      {
        onClick: (T) => {
          T.stopPropagation(), T.preventDefault(), m({ type: "operation", id: t });
        },
        children: /* @__PURE__ */ l.jsx(
          hi,
          {
            operationId: t,
            path: k.request.request.path,
            method: k.request.request.method
          }
        )
      }
    ),
    (b == null ? void 0 : b.status) === "failure" && /* @__PURE__ */ l.jsx(_i, { message: "Global Before block failed" }),
    (_ == null ? void 0 : _.status) === "failure" && /* @__PURE__ */ l.jsx(_i, { message: "Global After block failed" }),
    /* @__PURE__ */ l.jsx(
      xe,
      {
        defaultOpen: !1,
        title: "Authorization Tests",
        count: k.authorizationTests.length,
        children: /* @__PURE__ */ l.jsxs(Gi, { children: [
          /* @__PURE__ */ l.jsx(
            QC,
            {
              authorizationTests: k.authorizationTests,
              removeTest: (T) => {
                const U = k.authorizationTests.filter((q) => q !== T);
                e(
                  na({
                    operationId: t,
                    authorizationTests: U
                  })
                );
              }
            }
          ),
          /* @__PURE__ */ l.jsx(
            JC,
            {
              authorizationTests: o.authorizationTests,
              existing: k.authorizationTests,
              auth: k.request.auth,
              credentials: o.authenticationDetails[0],
              onSelect: (T) => {
                e(
                  na({
                    operationId: t,
                    authorizationTests: [...k.authorizationTests, T]
                  })
                );
              }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ l.jsx(xe, { defaultOpen: !1, title: "Before", count: (L = k.before) == null ? void 0 : L.length, children: /* @__PURE__ */ l.jsxs(Gi, { children: [
      /* @__PURE__ */ l.jsx(
        En,
        {
          oas: n,
          stages: k.before,
          container: { container: "operationBefore", operationId: t },
          executionResult: no(a, "operationBefore"),
          saveStage: d,
          moveStage: p,
          removeStage: c,
          operations: o.operations,
          requests: o.requests,
          goToRequest: m
        }
      ),
      /* @__PURE__ */ l.jsx(
        On,
        {
          operationIds: y,
          requestIds: g,
          onSelect: (T) => f({ container: "operationBefore", operationId: t }, T)
        }
      )
    ] }) }),
    /* @__PURE__ */ l.jsx(xe, { title: "Scenarios", count: (N = k.scenarios) == null ? void 0 : N.length, children: /* @__PURE__ */ l.jsx(BC, { operationId: t, goToRequest: m }) }),
    /* @__PURE__ */ l.jsx(xe, { defaultOpen: !1, title: "After", count: (te = k.after) == null ? void 0 : te.length, children: /* @__PURE__ */ l.jsxs(Gi, { children: [
      /* @__PURE__ */ l.jsx(
        En,
        {
          oas: n,
          stages: k.after,
          container: { container: "operationAfter", operationId: t },
          executionResult: no(a, "operationAfter"),
          saveStage: d,
          removeStage: c,
          moveStage: p,
          operations: o.operations,
          requests: o.requests,
          goToRequest: m
        }
      ),
      /* @__PURE__ */ l.jsx(
        On,
        {
          operationIds: y,
          requestIds: g,
          onSelect: (T) => f({ container: "operationAfter", operationId: t }, T)
        }
      )
    ] }) }),
    s.length > 0 && /* @__PURE__ */ l.jsx(xe, { title: "Result", children: /* @__PURE__ */ l.jsx($n, { result: s, collapsible: !0 }) })
  ] });
}
const s$ = v.div`
  padding: 8px;
`, Gi = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, l$ = v.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 8px;
  border: 1px solid var(${h.border});
  border-radius: 2px;
  cursor: pointer;
`, xf = v.button`
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
function u$({
  onAddScenario: t,
  operations: e
}) {
  const n = Object.entries(e).filter(([s, u]) => !u.customized).map(([s, u]) => s), [o, r] = x.useState(!1), [i, a] = x.useState(
    void 0
  );
  return /* @__PURE__ */ l.jsxs(
    ms,
    {
      open: o,
      onOpenChange: (s) => {
        r(s);
      },
      children: [
        /* @__PURE__ */ l.jsx(fs, { asChild: !0, children: /* @__PURE__ */ l.jsx(Oo, { style: { width: "100%" }, children: "New scenario" }) }),
        /* @__PURE__ */ l.jsxs(hs, { children: [
          /* @__PURE__ */ l.jsx(p$, {}),
          /* @__PURE__ */ l.jsx(m$, { children: /* @__PURE__ */ l.jsxs(c$, { children: [
            /* @__PURE__ */ l.jsx(vs, { children: "New Scenario" }),
            /* @__PURE__ */ l.jsx(ks, { children: "Add happy path scenario for an operation" }),
            /* @__PURE__ */ l.jsx(d$, { children: /* @__PURE__ */ l.jsx(
              Om,
              {
                options: n,
                placeholder: "Select operation",
                onSelectedItemChange: (s) => {
                  a(s);
                }
              }
            ) }),
            /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
              /* @__PURE__ */ l.jsx(
                Oo,
                {
                  onClick: () => {
                    i != null && n.includes(i) && (t(i), r(!1));
                  },
                  children: "Add"
                }
              ),
              /* @__PURE__ */ l.jsx(bs, { asChild: !0, children: /* @__PURE__ */ l.jsx(xf, { children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
const c$ = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, d$ = v.div`
  border: 1px solid var(${h.border});
`, p$ = v(gs)`
  background-color: var(${h.computedTwo});
  position: fixed;
  inset: 0;
`, m$ = v(ys)`
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
function f$() {
  const t = me(), e = F((s) => s.operations.operationId), n = (s) => t(Sd(s)), o = (s) => t(dv(s)), {
    playbook: { operations: r }
  } = F((s) => s.scanconf), a = [
    {
      id: "operations",
      title: "Operations",
      items: Object.entries(r).filter(([s, u]) => u.customized).map(([s, u]) => ({ id: s, label: s }))
    }
  ];
  return /* @__PURE__ */ l.jsx(
    Pn,
    {
      title: "operations",
      noSectionTitles: !0,
      selected: e ? { sectionId: "operations", itemId: e } : void 0,
      sections: a,
      onSelected: (s) => n(s.itemId),
      render: (s) => /* @__PURE__ */ l.jsx(a$, { operationId: s.itemId }, s.itemId),
      renderEmpty: () => /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("h2", { children: "Scenarios" }),
        /* @__PURE__ */ l.jsx("p", { children: "Scan scenarios let you test operations that involve complex request flows" }),
        /* @__PURE__ */ l.jsx("p", { children: "Scenarios let you set up exact request and response sequences, ensuring resources are created or deleted as needed for testing specific API operations. Additionally, you can extract values from responses and pass them between subsequent operations." })
      ] }),
      renderButtons: () => /* @__PURE__ */ l.jsx(
        u$,
        {
          operations: r,
          onAddScenario: (s) => {
            n(s), o(s);
          }
        }
      )
    }
  );
}
function h$(t) {
  return t ? t.label : "";
}
function hc({
  name: t,
  options: e,
  placeholder: n,
  label: o
}) {
  const { field: r } = Q({
    name: t,
    rules: { required: !0 }
  }), i = y$(e, r.value), a = (s) => {
    r.onChange(s == null ? void 0 : s.value);
  };
  return /* @__PURE__ */ l.jsx(
    g$,
    {
      options: e,
      placeholder: n,
      label: o,
      selected: i == null ? void 0 : i.value,
      onSelectedItemChange: a
    }
  );
}
function g$({
  options: t,
  placeholder: e,
  label: n,
  selected: o,
  onSelectedItemChange: r
}) {
  var d;
  const i = (d = t.filter((p) => p.value === o)) == null ? void 0 : d[0], { isOpen: a, getToggleButtonProps: s, getMenuProps: u, getItemProps: c } = Dr({
    items: t,
    itemToString: h$,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      r(p);
    }
  });
  return /* @__PURE__ */ l.jsxs(v$, { children: [
    /* @__PURE__ */ l.jsxs(k$, { children: [
      n !== void 0 && /* @__PURE__ */ l.jsx("div", { children: n }),
      /* @__PURE__ */ l.jsxs(b$, { ...s(), children: [
        /* @__PURE__ */ l.jsx("span", { children: i ? i.label : e ?? "" }),
        /* @__PURE__ */ l.jsx(Ro, {})
      ] })
    ] }),
    /* @__PURE__ */ l.jsx(j$, { ...u(), isOpen: a, children: a && t.map((p, f) => /* @__PURE__ */ l.jsx("li", { ...c({ item: p, index: f }), children: /* @__PURE__ */ l.jsx("span", { children: p.label }) }, `${p.value}${f}`)) })
  ] });
}
function y$(t, e) {
  var n;
  return (n = t.filter((o) => o.value === e)) == null ? void 0 : n[0];
}
const v$ = v.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, k$ = v.div`
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
`, b$ = v.div`
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
`, j$ = v.ul`
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
  ${({ isOpen: t }) => t && `
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
function x$({
  onAddExternalRequest: t
}) {
  const e = Ac({
    defaultValues: {
      id: "",
      method: "post",
      url: "http://localhost:8080/",
      mode: "json"
    },
    mode: "onChange"
  }), n = oh.map((a) => ({ value: a, label: a.toUpperCase() })), [o, r] = x.useState(!1), i = (a) => {
    t(a.id, a.method, a.url, a.mode);
  };
  return /* @__PURE__ */ l.jsxs(
    ms,
    {
      open: o,
      onOpenChange: (a) => {
        r(a), a && e.reset();
      },
      children: [
        /* @__PURE__ */ l.jsx(fs, { asChild: !0, children: /* @__PURE__ */ l.jsx(C$, { children: /* @__PURE__ */ l.jsx(Fo, {}) }) }),
        /* @__PURE__ */ l.jsxs(hs, { children: [
          /* @__PURE__ */ l.jsx(_$, {}),
          /* @__PURE__ */ l.jsx(S$, { children: /* @__PURE__ */ l.jsx(Mc, { ...e, children: /* @__PURE__ */ l.jsxs(
            w$,
            {
              onSubmit: (a) => {
                e.handleSubmit(i)(a), a.preventDefault(), r(!1);
              },
              children: [
                /* @__PURE__ */ l.jsx(vs, { children: "New External Request" }),
                /* @__PURE__ */ l.jsx(ks, { children: "Add new external request" }),
                /* @__PURE__ */ l.jsx(Me, { label: "Request ID", name: "id" }),
                /* @__PURE__ */ l.jsx(Me, { label: "URL", name: "url" }),
                /* @__PURE__ */ l.jsx(hc, { label: "Method", name: "method", options: n }),
                /* @__PURE__ */ l.jsx(
                  hc,
                  {
                    label: "Content type",
                    name: "mode",
                    options: [
                      { value: "json", label: "application/json" },
                      { value: "urlencoded", label: "application/x-www-form-urlencoded" }
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
                  /* @__PURE__ */ l.jsx(Oo, { type: "submit", children: "Add" }),
                  /* @__PURE__ */ l.jsx(bs, { asChild: !0, children: /* @__PURE__ */ l.jsx(xf, { children: "Cancel" }) })
                ] })
              ]
            }
          ) }) })
        ] })
      ]
    }
  );
}
const w$ = v.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, _$ = v(gs)`
  background-color: var(${h.computedTwo});
  position: fixed;
  inset: 0;
`, S$ = v(ys)`
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
`, C$ = v.button`
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
function wf({ name: t, variables: e }) {
  const {
    field: { value: n }
  } = Q({
    name: t
  });
  function o(s) {
    console.error(s);
  }
  const r = {
    namespace: "editor",
    editorState: () => {
      const s = JSON.stringify(n, null, 2), u = H.$createParagraphNode(), c = s.split(`
`);
      for (let d = 0; d < c.length; d++)
        u.append(...Xs(c[d])), d < c.length - 1 && u.append(H.$createLineBreakNode());
      H.$getRoot().append(u);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: o,
    nodes: [$t]
  }, [i, a] = x.useState(!1);
  return /* @__PURE__ */ l.jsx(T$, { children: /* @__PURE__ */ l.jsxs(Fs.LexicalComposer, { initialConfig: r, children: [
    /* @__PURE__ */ l.jsx(
      Js.PlainTextPlugin,
      {
        contentEditable: /* @__PURE__ */ l.jsx(Ls.ContentEditable, {}),
        placeholder: /* @__PURE__ */ l.jsx("div", {}),
        ErrorBoundary: qs
      }
    ),
    /* @__PURE__ */ l.jsx(Us.HistoryPlugin, {}),
    i && /* @__PURE__ */ l.jsx(Tm, { variables: e }),
    /* @__PURE__ */ l.jsx($$, { name: t }),
    /* @__PURE__ */ l.jsx(Em, { onFocus: (s) => a(s) })
  ] }) });
}
function $$({ name: t }) {
  const [e] = De.useLexicalComposerContext(), [n, o] = x.useState(void 0), { field: r } = Q({
    name: t
  });
  return x.useEffect(() => {
    let i;
    return e.registerTextContentListener((a) => {
      i !== void 0 && clearTimeout(i);
      try {
        r.onChange(JSON.parse(a)), o(void 0);
      } catch (s) {
        i = setTimeout(() => {
          s instanceof SyntaxError ? o(s.message) : o(`${s}`);
        }, 500);
      }
    });
  }, [e, r]), n === void 0 ? /* @__PURE__ */ l.jsxs(gc, { children: [
    "Valid JSON",
    /* @__PURE__ */ l.jsx(
      qc,
      {
        style: {
          fill: `var(${h.foreground})`
        }
      }
    )
  ] }) : /* @__PURE__ */ l.jsxs(gc, { error: !0, children: [
    n,
    /* @__PURE__ */ l.jsx(
      Or,
      {
        style: {
          fill: `var(${h.errorForeground})`
        }
      }
    )
  ] });
}
const T$ = v.div`
  color: var(${h.foreground});
  background-color: var(${h.background});
  border: 1px solid var(${h.border});

  &:focus-within {
    //border: 1px solid var(${h.focusBorder});
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
`, gc = v.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding: 2px 4px;
  border-top: 1px solid var(${h.border});
  line-break: anywhere;
  color: ${({ error: t }) => t ? `var(${h.errorForeground})` : `var(${h.foreground})`};
  background-color: ${({ error: t }) => t ? `var(${h.errorBackground})` : `var(${h.background})`};
`;
function E$({
  name: t,
  password: e
}) {
  const { field: n } = Q({
    name: t
  });
  return /* @__PURE__ */ l.jsx("input", { ...n, type: e ? "password" : "text" });
}
function yc({
  name: t,
  variables: e
}) {
  const { fields: n, append: o, remove: r } = en({
    name: t
  });
  return /* @__PURE__ */ l.jsx(z$, { children: /* @__PURE__ */ l.jsxs(I$, { children: [
    /* @__PURE__ */ l.jsxs(R$, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Name" }),
      /* @__PURE__ */ l.jsx("div", { children: "Value" }),
      /* @__PURE__ */ l.jsx("div", {})
    ] }),
    /* @__PURE__ */ l.jsx(N$, { children: n.map((i, a) => /* @__PURE__ */ l.jsx(
      P$,
      {
        name: `${t}.${a}`,
        variables: e,
        remove: () => {
          r(a);
        }
      },
      i.id
    )) }),
    /* @__PURE__ */ l.jsx(O$, { append: o })
  ] }) });
}
function O$({ append: t }) {
  return /* @__PURE__ */ l.jsx(
    D$,
    {
      placeholder: "name",
      value: "",
      onChange: (e) => {
        t({ key: e.target.value, value: "" }, { shouldFocus: !0 });
      }
    }
  );
}
const D$ = v.input`
  grid-column: span 3;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  margin-right: 10px;
  padding: 4px 8px;
`, z$ = v.div`
  margin: 8px 4px;
`, I$ = v.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, N$ = v.div`
  display: contents;
`, R$ = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function P$({
  name: t,
  variables: e,
  remove: n
}) {
  return /* @__PURE__ */ l.jsxs(M$, { children: [
    /* @__PURE__ */ l.jsx(E$, { name: `${t}.key` }),
    /* @__PURE__ */ l.jsx(si, { name: `${t}.value`, variables: e }),
    /* @__PURE__ */ l.jsx(
      A$,
      {
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), n();
        },
        children: /* @__PURE__ */ l.jsx(He, {})
      }
    )
  ] });
}
const A$ = v.button`
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
    fill: var(${h.foreground});
  }
`, M$ = v.div`
  display: contents;
  > input,
  > div {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(${h.border});
    color: var(${h.foreground});
    padding: 4px 8px;
  }
  &:hover > :last-child {
    visibility: visible;
  }
`;
function F$({
  requestRef: t,
  stage: e,
  saveRequest: n,
  defaultCollapsed: o,
  variables: r
}) {
  const i = q$(e);
  return /* @__PURE__ */ l.jsx(_f, { children: /* @__PURE__ */ l.jsx(
    Ze,
    {
      data: e,
      saveData: n,
      wrapFormData: Tw,
      unwrapFormData: zw,
      children: /* @__PURE__ */ l.jsxs(Qt, { defaultCollapsed: o, children: [
        /* @__PURE__ */ l.jsxs(Pc, { children: [
          /* @__PURE__ */ l.jsx("span", { children: t.id }),
          /* @__PURE__ */ l.jsxs(V$, { children: [
            /* @__PURE__ */ l.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ l.jsx(nl, { name: "defaultResponse", options: i })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs(Mn, { children: [
          /* @__PURE__ */ l.jsx(U$, { children: e.request.method }),
          /* @__PURE__ */ l.jsx(H$, { onClick: (a) => a.stopPropagation(), children: /* @__PURE__ */ l.jsx(si, { variables: r, name: "url" }) })
        ] }),
        /* @__PURE__ */ l.jsx(L$, { stage: e, variables: r })
      ] })
    }
  ) });
}
function L$({
  stage: t,
  variables: e
}) {
  return /* @__PURE__ */ l.jsx(_f, { children: /* @__PURE__ */ l.jsx(
    Et,
    {
      tabs: [
        {
          id: "body",
          title: "Body",
          content: /* @__PURE__ */ l.jsx(wf, { variables: e, name: "body.value" }),
          disabled: t.request.body === void 0
        },
        {
          id: "query",
          title: "Query",
          content: /* @__PURE__ */ l.jsx(yc, { name: "parameters.query", variables: e })
        },
        {
          id: "header",
          title: "Headers",
          content: /* @__PURE__ */ l.jsx(yc, { name: "parameters.header", variables: e })
        },
        {
          id: "responses",
          title: "Response processing",
          content: /* @__PURE__ */ l.jsx(Wr, { editable: !0, responseCodes: B$ })
        }
      ]
    }
  ) });
}
function q$(t) {
  return Object.keys(t.responses || {}).map((e) => ({ label: e, value: e }));
}
const B$ = [
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
], _f = v.div`
  > div {
    background-color: var(${h.background});
  }
`, H$ = v.div`
  flex: 1;
  background-color: var(${h.background});
  border: 1px solid var(${h.border});
`, U$ = v.div`
  background-color: var(${h.badgeBackground});
  color: var(${h.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, V$ = v.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${h.border});
  }
`;
function W$({
  request: t,
  requestRef: e
}) {
  var g, k, b, _;
  const { oas: n } = F((j) => j.scanconf), o = F((j) => j.prefs.useGlobalBlocks), {
    tryResult: r,
    mockResult: i,
    mockMissingVariables: a
  } = F((j) => j.requests), s = me(), u = (j, C) => s(us({ server: j, inputs: C })), c = (j) => s(Lo({ ref: e, stage: j })), d = [
    ...Ya,
    ...nT(((_ = (b = (k = (g = i == null ? void 0 : i[0]) == null ? void 0 : g.results) == null ? void 0 : k[0]) == null ? void 0 : b.variablesReplaced) == null ? void 0 : _.stack) || [])
  ], [p, f] = x.useState({}), m = F((j) => j.prefs), y = tT(n, m.tryitServer);
  return x.useEffect(() => {
    const j = { ...p };
    for (const C of Object.keys(j))
      a.includes(C) || delete j[C];
    for (const C of a)
      j[C] === void 0 && (j[C] = "");
    f(j);
  }, [a]), /* @__PURE__ */ l.jsxs(K$, { children: [
    /* @__PURE__ */ l.jsx(G$, { children: /* @__PURE__ */ l.jsxs(
      J$,
      {
        onClick: (j) => {
          j.stopPropagation(), j.preventDefault(), u(y, p);
        },
        children: [
          /* @__PURE__ */ l.jsx(Hc, {}),
          "Try"
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsxs(xe, { title: "Request", children: [
      /* @__PURE__ */ l.jsx(
        F$,
        {
          defaultCollapsed: !1,
          variables: d,
          requestRef: e,
          stage: t,
          saveRequest: c
        }
      ),
      /* @__PURE__ */ l.jsx(eT, { children: "Test inputs, provide values for the unset variables" }),
      /* @__PURE__ */ l.jsx(Z$, { children: /* @__PURE__ */ l.jsx(
        Ze,
        {
          wrapFormData: Y$,
          unwrapFormData: X$,
          data: p,
          saveData: (j) => f(j),
          children: /* @__PURE__ */ l.jsx(Vo, { name: "env" })
        }
      ) })
    ] }),
    r.length > 0 && /* @__PURE__ */ l.jsx(xe, { title: "Result", children: /* @__PURE__ */ l.jsx($n, { result: r, collapsible: o }) })
  ] });
}
const K$ = v.div`
  padding: 8px;
`, G$ = v.div`
  border: 1px solid var(${h.border});
  display: flex;
  justify-content: flex-end;
`, J$ = v.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  color: var(${h.linkForeground});
  > svg {
    fill: var(${h.linkForeground});
  }
`;
function Y$(t) {
  return {
    env: Object.entries(t).map(([e, n]) => ({ key: e, value: n, type: typeof n }))
  };
}
function X$(t) {
  const e = {};
  for (const { key: n, value: o, type: r } of t.env)
    e[n] = Q$(o, r);
  return e;
}
function Q$(t, e) {
  if (e !== "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return `${t}`;
}
const Z$ = v.div`
  border: 1px solid var(${h.border});
  background-color: var(${h.background});
`, eT = v.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function tT(t, e) {
  const n = $c(t), o = n.some((r) => r === e);
  return e !== void 0 && e !== "" && o ? e : n[0];
}
function nT(t) {
  const e = [];
  for (const n of t)
    for (const o of Object.keys(n.env))
      e.includes(o) || e.push(o);
  return e.sort(), e;
}
const oT = { type: "string" };
function rT({
  name: t,
  schema: e,
  onDelete: n,
  variables: o,
  isDefinedInOpenAPI: r
}) {
  const {
    fieldState: { error: i }
  } = Q({ name: `${t}.value` }), { field: a } = Q({ name: `${t}.key` });
  return /* @__PURE__ */ l.jsxs(iT, { children: [
    /* @__PURE__ */ l.jsxs(sT, { children: [
      a.value,
      !r && /* @__PURE__ */ l.jsx(
        ds,
        {
          icon: "exclamation",
          description: "Parameter is not defined in the OpenAPI specification for this API"
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      si,
      {
        name: `${t}.value`,
        variables: o,
        encode: (s) => uT(e || oT, s),
        decode: (s) => cT(e, s)
      }
    ),
    /* @__PURE__ */ l.jsx(
      lT,
      {
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), n();
        },
        children: /* @__PURE__ */ l.jsx(He, {})
      }
    ),
    i && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsxs(aT, { children: [
        /* @__PURE__ */ l.jsx(lt, {}),
        /* @__PURE__ */ l.jsx("span", { children: i.message })
      ] }),
      /* @__PURE__ */ l.jsx("div", {})
    ] })
  ] });
}
const iT = v.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, aT = v.div`
  color: var(${h.errorForeground});
  background-color: var(${h.errorBackground});
  border: none !important;
  align-items: center;
  > svg {
    fill: var(${h.errorForeground});
  }
  display: flex;
  gap: 4px;
  grid-column: span 2;
`, sT = v.div`
  flex: 1;
  border-bottom: 1px solid var(${h.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, lT = v.button`
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
    fill: var(${h.foreground});
  }
`;
function uT(t, e) {
  if (e === void 0)
    return "";
  const n = t.type;
  return n === void 0 || n === "string" || n === "number" || n === "integer" || n === "boolean" ? `${e}` : JSON.stringify(e);
}
function cT(t, e) {
  const n = (t == null ? void 0 : t.type) || "string";
  if (e.match(Nh()) || n === "string")
    return e;
  if (n === "integer")
    return dT(e);
  if (n === "number")
    return pT(e);
  if (n === "boolean") {
    if (e === "true" || e === "false")
      return e === "true";
    throw new Error("failed to convert to 'boolean'");
  }
  if (n === "object" || n === "array")
    return mT(e);
  throw new Error(`failed to convert, unsupported type: ${n}`);
}
function dT(t) {
  const e = Number.parseInt(t, 10);
  if (isNaN(e))
    throw new Error("failed to convert to 'integer'");
  return e;
}
function pT(t) {
  const e = Number.parseFloat(t);
  if (isNaN(e))
    throw new Error("failed to convert to 'number'");
  return e;
}
function mT(t) {
  try {
    return JSON.parse(t);
  } catch (e) {
    throw new Error(`failed to convert: ${e}`);
  }
}
function fT({
  options: t,
  placeholder: e,
  selected: n,
  onSelectedItemChange: o
}) {
  const [r, i] = x.useState(""), [a, s] = x.useState(t);
  x.useEffect(() => {
    s(
      t.filter((m) => r === "" || m.toLowerCase().includes(r.toLowerCase()))
    );
  }, [r, t]);
  const { isOpen: u, getMenuProps: c, getInputProps: d, getItemProps: p, reset: f } = zr({
    initialInputValue: n,
    items: a,
    onSelectedItemChange: ({ selectedItem: m }) => {
      f(), o(m);
    },
    onInputValueChange: ({ inputValue: m }) => {
      i(m !== void 0 ? m : "");
    },
    itemToString: (m) => m || ""
  });
  return /* @__PURE__ */ l.jsxs(hT, { children: [
    /* @__PURE__ */ l.jsx(
      gT,
      {
        ...d({
          onKeyDown: (m) => {
            (m.key === "Enter" || m.key === "Tab") && (o(r), i(""), f());
          }
        }),
        placeholder: e
      }
    ),
    /* @__PURE__ */ l.jsx(yT, { visible: u && (a.length > 0 || r.length > 0), children: /* @__PURE__ */ l.jsxs(vT, { ...c(), children: [
      a.map((m, y) => /* @__PURE__ */ l.jsx(
        "li",
        {
          ...p({
            item: m,
            index: y
          }),
          children: m
        },
        `li-${y}`
      )),
      r.length > 0 && a.length === 0 && /* @__PURE__ */ l.jsx(
        "li",
        {
          onClick: (m) => {
            m.stopPropagation(), m.preventDefault(), o(r), i(""), f();
          },
          children: r
        }
      )
    ] }) })
  ] });
}
const hT = v.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${h.focusBorder});
  }
  border: 1px solid transparent;
`, gT = v.input`
  background: transparent;
  border: none;
  color: var(${h.foreground});
  &::placeholder {
    color: var(${h.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, yT = v.div`
  position: relative;
  z-index: 1;
  visibility: ${({ visible: t }) => t ? "visible" : "hidden"};
`, vT = v.ul`
  border: 1px solid var(${h.dropdownBorder});
  background-color: var(${h.dropdownBackground});
  color: var(${h.dropdownForeground});
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
    background-color: var(${h.listHoverBackground});
  }
`;
function kT({
  name: t,
  group: e,
  onSelection: n,
  placeholder: o,
  allowUnknown: r
}) {
  const i = Po({ name: t }), a = Object.keys(e), s = i.map(({ key: d }) => d), u = Object.entries(e).map(([d, p]) => ({
    name: d,
    isArray: bT(p)
  })).filter(({ isArray: d }) => d).map(({ name: d }) => d), c = a.filter(
    (d) => u.includes(d) || !s.includes(d)
  );
  return /* @__PURE__ */ l.jsx(jT, { children: /* @__PURE__ */ l.jsxs("div", { children: [
    r && /* @__PURE__ */ l.jsx(
      fT,
      {
        placeholder: o,
        options: a.filter((d) => c.includes(d)),
        onSelectedItemChange: (d) => {
          d && n(d, e[d]);
        }
      }
    ),
    !r && /* @__PURE__ */ l.jsx(
      Ln,
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
function bT(t) {
  var e;
  return "type" in t && t.type === "array" || "schema" in t && ((e = t.schema) == null ? void 0 : e.type) === "array";
}
const jT = v.div`
  display: flex;
  margin-right: 10px;
  > div {
    flex: 1;
  }
`;
function Ut({
  oas: t,
  name: e,
  group: n,
  placeholder: o,
  variables: r,
  allowUnknown: i
}) {
  const { fields: a, append: s, remove: u } = en({
    name: e
  }), c = async (d, p) => {
    s({ key: d, value: "" }, { shouldFocus: !0 });
  };
  return /* @__PURE__ */ l.jsxs($T, { children: [
    /* @__PURE__ */ l.jsxs(TT, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Name" }),
      /* @__PURE__ */ l.jsx("div", { children: "Value" }),
      /* @__PURE__ */ l.jsx("div", {})
    ] }),
    /* @__PURE__ */ l.jsxs(ET, { children: [
      a.map((d, p) => /* @__PURE__ */ l.jsx(
        rT,
        {
          name: `${e}.${p}`,
          schema: wT(t, n, d.key),
          onDelete: () => u(p),
          variables: r,
          isDefinedInOpenAPI: xT(n, d.key)
        },
        d.id
      )),
      /* @__PURE__ */ l.jsx(
        kT,
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
function xT(t, e) {
  return t[e] !== void 0;
}
function wT(t, e, n) {
  if (e[n]) {
    const o = e[n];
    return _T(o) ? CT(t, o) : ST(o);
  }
}
function _T(t) {
  var e;
  return "type" in t && t.type === "array" || "schema" in t && ((e = t.schema) == null ? void 0 : e.type) === "array";
}
function ST(t) {
  if ("schema" in t)
    return t.schema;
  if ("type" in t)
    return t;
}
function CT(t, e) {
  var n;
  if ("schema" in e && ((n = e.schema) == null ? void 0 : n.type) === "array")
    return Sn(t, e.schema.items);
  if ("type" in e && e.type === "array")
    return Sn(t, e.items);
}
const $T = v.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, TT = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ET = v.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${h.border});
  }
  & > div > div:last-child {
    padding: 2px 5px;
  }
  // for now keep with of a new entry selector to 1 column
  // & > div:last-child {
  //   grid-column: span 3;
  // }
`;
function OT(t, e, n) {
  const o = Tc(t, t.paths[e]), r = Tr(t, e, n), i = Ec(t, r);
  return Oc(t, o, i);
}
function DT(t, e, n) {
  const o = Tr(t, e, n);
  return ((o == null ? void 0 : o.security) ?? t.security ?? []).length > 0;
}
function zT(t, e, n) {
  var a, s;
  const o = Tr(t, e, n), r = (o == null ? void 0 : o.security) ?? t.security ?? [], i = [];
  for (const u of r) {
    const c = {};
    for (const d of Object.keys(u))
      (a = t == null ? void 0 : t.securityDefinitions) != null && a[d] && (c[d] = (s = t == null ? void 0 : t.securityDefinitions) == null ? void 0 : s[d]);
    i.push(c);
  }
  return i;
}
function IT({
  scheme: t,
  schemeName: e,
  credentials: n,
  value: o,
  onChange: r
}) {
  const i = me(), s = PT(n).filter(
    ({ credential: u }) => ol(u, t)
  ).map(({ name: u }) => ({ label: u, value: u }));
  return /* @__PURE__ */ l.jsx(NT, { children: /* @__PURE__ */ l.jsx(
    Ln,
    {
      placeholder: "",
      options: s,
      selected: o,
      onSelectedItemChange: (u) => u && r(u.value),
      bottomMenu: /* @__PURE__ */ l.jsxs(
        RT,
        {
          onClick: (u) => {
            u.stopPropagation(), u.preventDefault(), i(ae(["scanconf", "auth"]));
          },
          children: [
            "Manage authentication ",
            /* @__PURE__ */ l.jsx(Nc, {})
          ]
        }
      )
    }
  ) });
}
const NT = v.div``, RT = v.li`
  color: var(${h.linkForeground});
  &:hover {
    color: var(${h.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function PT(t) {
  return Object.entries(t).map(([e, n]) => Object.entries(n.methods || {}).map(([o, r]) => ({ name: n.default === o ? e : `${e}/${o}`, credential: n }))).flat();
}
function AT({
  requirement: t,
  credentials: e,
  values: n,
  setValues: o
}) {
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: Object.keys(t).sort().map((r) => {
    const i = t[r];
    return /* @__PURE__ */ l.jsxs(MT, { children: [
      /* @__PURE__ */ l.jsxs(FT, { children: [
        'Credential value for "',
        r,
        '"'
      ] }),
      /* @__PURE__ */ l.jsx(
        IT,
        {
          value: n[r],
          scheme: i,
          schemeName: r,
          credentials: e,
          onChange: (a) => {
            const s = { ...n };
            a !== void 0 ? s[r] = a : s[r] = "", o(s);
          }
        }
      )
    ] }, r);
  }) });
}
const MT = v.div`
  display: contents;
`, FT = v.div`
  display: flex;
  align-items: center;
`;
function LT({
  security: t,
  value: e,
  setValue: n
}) {
  const o = t.map((r, i) => ({
    value: i,
    label: Object.keys(r).sort().join(", ")
  }));
  return /* @__PURE__ */ l.jsxs(qT, { children: [
    /* @__PURE__ */ l.jsx(BT, { children: "Security scheme(s)" }),
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx(
      Ln,
      {
        options: o,
        selected: e,
        onSelectedItemChange: (r) => r && n(r.value)
      }
    ) })
  ] });
}
const qT = v.div`
  display: contents;
`, BT = v.div`
  display: flex;
  align-items: center;
`;
function Sf({
  oas: t,
  security: e,
  credentials: n
}) {
  const { field: o } = Q({
    name: "auth"
  }), r = WT(e, n, o.value), i = r.reduce(
    (u, c) => u.relevance > c.relevance ? u : c
  ), [a, s] = x.useState(
    i.requirementIndex
  );
  return /* @__PURE__ */ l.jsxs(HT, { children: [
    /* @__PURE__ */ l.jsxs(UT, { children: [
      /* @__PURE__ */ l.jsx("div", { children: "Name" }),
      /* @__PURE__ */ l.jsx("div", { children: "Value" })
    ] }),
    /* @__PURE__ */ l.jsxs(VT, { children: [
      /* @__PURE__ */ l.jsx(
        LT,
        {
          security: e,
          value: a,
          setValue: (u) => {
            s(u), o.onChange(Object.values(r[u].matches));
          }
        }
      ),
      /* @__PURE__ */ l.jsx(
        AT,
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
const HT = v.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`, UT = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, VT = v.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${h.border});
  }
`;
function WT(t, e, n) {
  const o = KT(e, n);
  return t.map((r, i) => {
    const a = JT(r, o), s = Object.keys(r).length, u = Object.keys(a).length;
    return {
      requirementIndex: i,
      matches: a,
      relevance: u / s
    };
  });
}
function KT(t, e) {
  const n = {};
  for (const o of e) {
    const r = GT(t, o);
    r !== void 0 && (n[o] = r);
  }
  return n;
}
function GT(t, e) {
  for (const [n, o] of Object.entries(t)) {
    if (n === e)
      return o;
    for (const [r, i] of Object.entries(o.methods))
      if (`${n}/${r}` === e)
        return o;
  }
}
function JT(t, e) {
  const n = { ...e }, o = {};
  for (const [r, i] of Object.entries(t))
    for (const [a, s] of Object.entries(n))
      if (ol(s, i)) {
        o[r] = a, delete n[a];
        break;
      }
  return o;
}
function YT({ name: t }) {
  const {
    field: { value: e }
  } = Q({ name: t });
  function n(r) {
    console.error(r);
  }
  const o = {
    namespace: "editor",
    editorState: () => {
      const r = H.$createParagraphNode(), i = e.split(`
`);
      for (let a = 0; a < i.length; a++)
        r.append(...Xs(i[a])), a < i.length - 1 && r.append(H.$createLineBreakNode());
      H.$getRoot().append(r);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: n,
    nodes: [$t]
  };
  return /* @__PURE__ */ l.jsx(QT, { children: /* @__PURE__ */ l.jsxs(Fs.LexicalComposer, { initialConfig: o, children: [
    /* @__PURE__ */ l.jsx(
      Js.PlainTextPlugin,
      {
        contentEditable: /* @__PURE__ */ l.jsx(Ls.ContentEditable, {}),
        placeholder: /* @__PURE__ */ l.jsx("div", {}),
        ErrorBoundary: qs
      }
    ),
    /* @__PURE__ */ l.jsx(Us.HistoryPlugin, {}),
    /* @__PURE__ */ l.jsx(XT, { name: t })
  ] }) });
}
function XT({ name: t }) {
  const [e] = De.useLexicalComposerContext(), { field: n } = Q({
    name: t
  });
  return x.useEffect(() => e.registerTextContentListener((o) => {
    n.onChange(o);
  }), [e, n]), null;
}
const QT = v.div`
  color: var(${h.foreground});
  background-color: var(${h.background});
  border: 1px solid var(${h.border});

  &:focus-within {
    //border: 1px solid var(${h.focusBorder});
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
function ZT({
  oas: t,
  requestBody: e,
  variables: n
}) {
  const {
    field: { value: o }
  } = Q({ name: "body.mediaType" });
  return e === void 0 ? null : /* @__PURE__ */ l.jsxs(eE, { children: [
    o === "raw" && /* @__PURE__ */ l.jsx(YT, { name: "body.value" }),
    o !== "raw" && /* @__PURE__ */ l.jsx(wf, { variables: n, name: "body.value" })
  ] });
}
const eE = v.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
function vc(t) {
  return JSON.stringify(t, null, 2);
}
function kc(t) {
  try {
    return JSON.parse(t);
  } catch (e) {
    return new Error(`failed to convert: ${e}`);
  }
}
function tE({
  oas: t,
  group: e,
  variables: n
}) {
  const { control: o } = Zt(), {
    field: r,
    fieldState: { error: i }
  } = Q({
    name: "body.value",
    control: o,
    rules: {
      validate: (u) => rE(u)
    }
  }), [a, s] = x.useState(vc(r.value));
  return x.useEffect(() => {
    r.value instanceof Error || JSON.stringify(kc(a)) !== JSON.stringify(r.value) && s(vc(r.value));
  }, [r.value, a]), /* @__PURE__ */ l.jsxs(nE, { children: [
    /* @__PURE__ */ l.jsx(
      "textarea",
      {
        rows: 10,
        onChange: (u) => {
          r.onChange(kc(u.target.value)), s(u.target.value);
        },
        onBlur: r.onBlur,
        value: a,
        ref: r.ref
      }
    ),
    i && /* @__PURE__ */ l.jsxs(oE, { children: [
      /* @__PURE__ */ l.jsx(lt, {}),
      " ",
      i.message
    ] })
  ] });
}
const nE = v.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${h.foreground});
    background-color: var(${h.background});
    border: 1px solid var(${h.border});
    padding: 4px;
  }
`, oE = v.div`
  display: flex;
  align-items: center;
  color: var(${h.errorForeground});
  > svg {
    fill: var(${h.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
function rE(t) {
  if (t instanceof Error)
    return t.message;
}
function iE({
  oas: t,
  path: e,
  method: n,
  credentials: o,
  settings: r,
  availableVariables: i
}) {
  const { getValues: a } = Zt(), s = a("body") !== void 0, u = Er(t) ? aE(t, o, e, n, i, s) : sE(t, o, e, n, i, s);
  return /* @__PURE__ */ l.jsx(Et, { tabs: u });
}
function aE(t, e, n, o, r, i) {
  const a = xw(t, n, o), s = $r(t, n, o), u = Sn(t, s == null ? void 0 : s.requestBody), c = Po({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ l.jsx(ZT, { oas: t, requestBody: u, variables: r }),
      disabled: u === void 0 || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ l.jsx(
        Sf,
        {
          oas: t,
          credentials: e,
          security: _w(t, n, o)
        }
      ),
      disabled: !ww(t, n, o)
    },
    {
      id: "path",
      title: "Path",
      content: /* @__PURE__ */ l.jsx(
        Ut,
        {
          oas: t,
          group: a.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: _n(a.path, c.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ l.jsx(
        Ut,
        {
          oas: t,
          group: a.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: _n(a.query, c.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ l.jsx(
        Ut,
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
      content: /* @__PURE__ */ l.jsx(
        Ut,
        {
          oas: t,
          group: a.cookie,
          name: "parameters.cookie",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: _n(a.cookie, c.cookie)
    },
    {
      id: "environment",
      title: "Environment",
      content: /* @__PURE__ */ l.jsx(Vo, { name: "environment", variables: r })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ l.jsx(Wr, {})
    }
  ];
}
function sE(t, e, n, o, r, i) {
  const a = OT(t, n, o), s = Po({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ l.jsx(tE, { oas: t, group: a.body, variables: r }),
      disabled: _n(a.body, s.body) || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ l.jsx(
        Sf,
        {
          oas: t,
          credentials: e,
          security: zT(t, n, o)
        }
      ),
      disabled: !DT(t, n, o)
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
      content: /* @__PURE__ */ l.jsx(
        Ut,
        {
          oas: t,
          group: a.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: _n(a.path, s.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ l.jsx(
        Ut,
        {
          oas: t,
          group: a.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: r
        }
      ),
      disabled: _n(a.query, s.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ l.jsx(
        Ut,
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
      content: /* @__PURE__ */ l.jsx(Vo, { name: "environment", variables: r })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ l.jsx(Wr, {})
    }
  ];
}
function _n(t, e) {
  return (t === void 0 || Object.keys(t).length === 0) && (e === void 0 || e.length === 0);
}
function lE({
  oas: t,
  requestRef: e,
  stage: n,
  credentials: o,
  saveRequest: r,
  defaultCollapsed: i,
  availableVariables: a
}) {
  const s = uE(n);
  return /* @__PURE__ */ l.jsx(cE, { children: /* @__PURE__ */ l.jsx(
    Ze,
    {
      data: n,
      saveData: r,
      wrapFormData: $w,
      unwrapFormData: Dw,
      children: /* @__PURE__ */ l.jsxs(Qt, { defaultCollapsed: i, children: [
        /* @__PURE__ */ l.jsxs(Pc, { children: [
          /* @__PURE__ */ l.jsx("span", { children: e.id }),
          /* @__PURE__ */ l.jsxs(mE, { children: [
            /* @__PURE__ */ l.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ l.jsx(nl, { name: "defaultResponse", options: s })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs(Mn, { children: [
          /* @__PURE__ */ l.jsx(dE, { children: n.request.method }),
          /* @__PURE__ */ l.jsx(pE, { children: n.request.path })
        ] }),
        /* @__PURE__ */ l.jsx(
          iE,
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
function uE(t) {
  return Object.keys(t.responses || {}).map((e) => ({ label: e, value: e }));
}
const cE = v.div`
  > div {
    background-color: var(${h.background});
  }
`, dE = v.div`
  background-color: var(${h.badgeBackground});
  color: var(${h.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, pE = v.div``, mE = v.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${h.border});
  }
`;
function fE({
  request: t,
  requestRef: e
}) {
  var C, L, N, te;
  const n = me(), { oas: o, playbook: r, servers: i } = F((T) => T.scanconf), a = F((T) => T.config.data), s = F((T) => T.env.data), u = F((T) => T.prefs.useGlobalBlocks), {
    tryResult: c,
    mockResult: d,
    mockMissingVariables: p
  } = F((T) => T.requests), f = (T, U) => n(us({ server: T, inputs: U })), m = (T) => n(Lo({ ref: e, stage: T })), y = r.authenticationDetails[0], g = [
    ...Ya,
    ...jE(((te = (N = (L = (C = d == null ? void 0 : d[0]) == null ? void 0 : C.results) == null ? void 0 : L[0]) == null ? void 0 : N.variablesReplaced) == null ? void 0 : te.stack) || [])
  ], [k, b] = x.useState({}), {
    simple: _,
    environment: {
      env: { host: j }
    }
  } = Gn(wl(r), s);
  return x.useEffect(() => {
    const T = { ...k };
    for (const U of Object.keys(T))
      p.includes(U) || delete T[U];
    for (const U of p)
      T[U] === void 0 && (T[U] = "");
    b(T);
  }, [p]), /* @__PURE__ */ l.jsxs(hE, { children: [
    /* @__PURE__ */ l.jsx(
      Eo,
      {
        menu: !0,
        servers: i,
        host: j,
        onTry: (T) => f(T, k),
        onScan: (T) => {
          const U = _l(
            T,
            a.scanRuntime,
            a.docker.replaceLocalhost,
            a.platform
          ), [q, A] = fi(o, r);
          if (A !== void 0) {
            console.log("failed to serialize", A);
            return;
          }
          n(
            is({
              path: t.request.path,
              method: t.request.method,
              operationId: t.operationId,
              env: {
                SCAN42C_HOST: U,
                ..._
              },
              scanconf: jf(q, t.operationId)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ l.jsxs(xe, { title: "Request", children: [
      /* @__PURE__ */ l.jsx(
        lE,
        {
          defaultCollapsed: !1,
          oas: o,
          credentials: y,
          availableVariables: g,
          requestRef: e,
          stage: t,
          saveRequest: m
        }
      ),
      /* @__PURE__ */ l.jsx(bE, { children: "Test inputs: provide values for the unset variables" }),
      /* @__PURE__ */ l.jsx(kE, { children: /* @__PURE__ */ l.jsx(
        Ze,
        {
          wrapFormData: gE,
          unwrapFormData: yE,
          data: k,
          saveData: (T) => b(T),
          children: /* @__PURE__ */ l.jsx(Vo, { name: "env" })
        }
      ) })
    ] }),
    c.length > 0 && /* @__PURE__ */ l.jsx(xe, { title: "Result", children: /* @__PURE__ */ l.jsx($n, { result: c, collapsible: u }) })
  ] });
}
const hE = v.div`
  padding: 8px;
`;
function gE(t) {
  return {
    env: Object.entries(t).map(([e, n]) => ({ key: e, value: n, type: typeof n }))
  };
}
function yE(t) {
  const e = {};
  for (const { key: n, value: o, type: r } of t.env)
    e[n] = vE(o, r);
  return e;
}
function vE(t, e) {
  if (e !== "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return `${t}`;
}
const kE = v.div`
  border: 1px solid var(${h.border});
  background-color: var(${h.background});
`, bE = v.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function jE(t) {
  const e = [];
  for (const n of t)
    for (const o of Object.keys(n.env))
      e.includes(o) || e.push(o);
  return e.sort(), e;
}
function xE({ requestRef: t }) {
  var o;
  const { playbook: e } = F((r) => r.scanconf), n = t.type === "operation" ? e.operations[t.id].request : (o = e.requests) == null ? void 0 : o[t.id];
  return n === void 0 ? /* @__PURE__ */ l.jsxs("div", { children: [
    "Unable to locate the request, failed to resolve: ",
    JSON.stringify(t)
  ] }) : n.operationId === void 0 ? /* @__PURE__ */ l.jsx(W$, { requestRef: t, request: n }) : /* @__PURE__ */ l.jsx(fE, { requestRef: t, request: n });
}
function wE() {
  var k;
  const t = me(), { oas: e, playbook: n, servers: o } = F((b) => b.scanconf), r = F((b) => b.requests.ref), i = F((b) => b.config.data), a = F((b) => b.env.data), s = F((b) => b.prefs.scanServer), u = ({ sectionId: b, itemId: _ }) => {
    t(Vt({ type: b === "operation" ? "operation" : "request", id: _ }));
  }, c = (b) => {
    var _;
    if ((r == null ? void 0 : r.type) === "request" && r.id === b) {
      const j = (_ = Object.keys(n.operations)) == null ? void 0 : _[0];
      j !== void 0 && t(Vt({ type: "operation", id: j }));
    }
    t(yd({ type: "request", id: b }));
  }, d = Object.keys(n.operations).map((b) => ({ id: b, label: b })), p = Object.entries(n.requests || {}).filter(([b, _]) => _.operationId !== void 0).map(([b, _]) => ({ id: b, label: b })), f = Object.entries(n.requests || {}).filter(([b, _]) => _.operationId === void 0).map(([b, _]) => ({
    id: b,
    label: b,
    menu: /* @__PURE__ */ l.jsx(Nt, { children: /* @__PURE__ */ l.jsx(tn, { onClick: (j) => j.stopPropagation(), onSelect: () => c(b), children: "Delete" }) })
  }));
  let m;
  (r == null ? void 0 : r.type) === "operation" && n.operations[r.id] !== void 0 ? m = { itemId: r.id, sectionId: "operation" } : (r == null ? void 0 : r.type) === "request" && ((k = n.requests) == null ? void 0 : k[r.id]) !== void 0 && (n.requests[r.id].operationId !== void 0 ? m = { itemId: r.id, sectionId: "requests" } : m = { itemId: r.id, sectionId: "external" });
  const y = [
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
      menu: /* @__PURE__ */ l.jsx(
        x$,
        {
          onAddExternalRequest: (b, _, j, C) => {
            t(
              Lo({
                ref: { id: b, type: "request" },
                stage: {
                  operationId: void 0,
                  defaultResponse: "200",
                  request: {
                    url: j,
                    method: _,
                    parameters: {
                      header: [],
                      path: [],
                      query: [],
                      cookie: []
                    },
                    body: _E(_) ? {
                      mediaType: C === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json",
                      value: {}
                    } : void 0
                  },
                  responses: {
                    200: {
                      expectations: {
                        httpStatus: 200
                      }
                    }
                  }
                }
              })
            ), t(Vt({ type: "request", id: b }));
          }
        }
      )
    }
  ], g = (b) => {
    const _ = _l(
      b,
      i.scanRuntime,
      i.docker.replaceLocalhost,
      i.platform
    ), [j, C] = fi(e, n);
    if (C !== void 0) {
      console.log("failed to serialize", C);
      return;
    }
    const { simple: L } = Gn(wl(n), a);
    t(
      ud({
        env: {
          SCAN42C_HOST: _,
          ...L
        },
        scanconf: JSON.stringify(j, null, 2)
      })
    );
  };
  return /* @__PURE__ */ l.jsx(
    Pn,
    {
      title: "operations",
      selected: m,
      sections: y,
      onSelected: u,
      renderButtons: () => /* @__PURE__ */ l.jsx(
        Ud,
        {
          style: { width: "100%" },
          onClick: (b) => {
            b.preventDefault(), b.stopPropagation(), g(s || o[0]);
          },
          children: "Scan all operations"
        }
      ),
      hideEmptySections: !0,
      render: (b) => /* @__PURE__ */ l.jsx(
        xE,
        {
          requestRef: { type: b.sectionId, id: b.itemId }
        },
        `${b.sectionId}-${b.itemId}`
      )
    }
  );
}
function _E(t) {
  return ["post", "put", "patch"].includes(t);
}
function SE({ append: t }) {
  return /* @__PURE__ */ l.jsx(CE, { children: /* @__PURE__ */ l.jsx(
    $E,
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
const CE = v.div`
  grid-column: span 5;
  display: flex;
`, $E = v.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${h.border});
  color: var(${h.foreground});
  padding: 4px 8px;
`;
function TE({ missing: t }) {
  const e = me(), { fields: n, append: o, remove: r } = en({
    name: "variables"
  });
  return /* @__PURE__ */ l.jsxs(EE, { children: [
    /* @__PURE__ */ l.jsxs(DE, { children: [
      /* @__PURE__ */ l.jsxs(IE, { children: [
        /* @__PURE__ */ l.jsx("div", { children: "Name" }),
        /* @__PURE__ */ l.jsx("div", {}),
        /* @__PURE__ */ l.jsx("div", { children: "Source environment variable" }),
        /* @__PURE__ */ l.jsx("div", { children: "Default value" }),
        /* @__PURE__ */ l.jsx("div", { children: "Required" }),
        /* @__PURE__ */ l.jsx("div", {})
      ] }),
      /* @__PURE__ */ l.jsx(zE, { children: n.map((i, a) => {
        const s = t !== void 0 && t.includes(i.value.name);
        return /* @__PURE__ */ l.jsx(
          NE,
          {
            missing: s,
            name: `variables.${a}`,
            remove: () => {
              r(a);
            }
          },
          i.id
        );
      }) }),
      /* @__PURE__ */ l.jsx(SE, { append: o })
    ] }),
    /* @__PURE__ */ l.jsx(OE, { children: /* @__PURE__ */ l.jsxs(
      FE,
      {
        onClick: (i) => {
          i.stopPropagation(), i.preventDefault(), e(zc());
        },
        children: [
          "Manage IDE Environment ",
          /* @__PURE__ */ l.jsx(Nc, {})
        ]
      }
    ) })
  ] });
}
const EE = v.div``, OE = v.div`
  padding-top: 8px;
  margin: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
`, DE = v.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 10em 1.5em 1fr 1fr 5em 1em;
`, zE = v.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${h.border});
  }
`, IE = v.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${h.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function NE({
  name: t,
  remove: e,
  missing: n
}) {
  const o = Po({ name: `${t}.value.required` });
  return /* @__PURE__ */ l.jsxs(ME, { children: [
    /* @__PURE__ */ l.jsx(kn, { name: `${t}.key`, label: "name" }),
    /* @__PURE__ */ l.jsx(RE, { children: n && /* @__PURE__ */ l.jsx(lt, {}) }),
    /* @__PURE__ */ l.jsx(kn, { name: `${t}.value.name`, label: "name" }),
    o ? /* @__PURE__ */ l.jsx("div", {}) : /* @__PURE__ */ l.jsx(kn, { name: `${t}.value.default`, label: "default", disabled: o }),
    /* @__PURE__ */ l.jsx(PE, { children: /* @__PURE__ */ l.jsx(Md, { name: `${t}.value.required` }) }),
    /* @__PURE__ */ l.jsx(
      AE,
      {
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), e();
        },
        children: /* @__PURE__ */ l.jsx(He, {})
      }
    )
  ] });
}
const RE = v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(${h.errorForeground});
    padding-right: 4px;
  }
`, PE = v.div`
  display: flex;
`, AE = v.button`
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
    fill: var(${h.foreground});
  }
`, ME = v.div`
  display: contents;
  &:hover > :last-child {
    visibility: visible;
  }
`, FE = v.div`
  color: var(${h.linkForeground});
  &:hover {
    color: var(${h.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function LE({ name: t }) {
  const e = me(), {
    playbook: { environments: n }
  } = F((a) => a.scanconf), o = F((a) => a.env.data), r = n[t], { missing: i } = Gn(r, o);
  return /* @__PURE__ */ l.jsxs(
    Ze,
    {
      wrapFormData: qE,
      unwrapFormData: BE,
      data: r,
      saveData: (a) => e(md({ name: t, environment: a })),
      children: [
        /* @__PURE__ */ l.jsx(TE, { missing: i }),
        i.length > 0 && /* @__PURE__ */ l.jsx(
          uo,
          {
            message: "Some of the required variables are not set, create these in the IDE Environment: " + i.join(", ")
          }
        )
      ]
    }
  );
}
function qE(t) {
  return {
    variables: Object.entries(t.variables).map(([e, n]) => ({ key: e, value: n }))
  };
}
function BE(t) {
  const e = {
    variables: {}
  };
  for (const { key: n, value: o } of t.variables)
    e.variables[n] = o;
  return e;
}
function HE() {
  const [t, e] = x.useState("default"), {
    playbook: { environments: n }
  } = F((i) => i.scanconf), r = [
    {
      id: "environment",
      title: "Environment",
      items: Object.keys(n).map((i) => ({ id: i, label: i }))
    }
  ];
  return /* @__PURE__ */ l.jsx(
    Pn,
    {
      title: "environments",
      noSectionTitles: !0,
      selected: t ? { sectionId: "environment", itemId: t } : void 0,
      sections: r,
      onSelected: (i) => e(i.itemId),
      render: (i) => /* @__PURE__ */ l.jsx(LE, { name: i.itemId }, i.itemId)
    }
  );
}
function UE() {
  const t = me(), { oas: e, playbook: n, servers: o } = F((g) => g.scanconf), { selected: r } = F((g) => g.global), { tryResult: i, mockResult: a } = F((g) => g.global), s = (g) => t(zt(g)), u = (g, k) => t(It({ location: g, reference: k })), c = (g, k) => t(Dt({ location: g, to: k })), d = (g, k) => {
    t(
      Ot({
        container: g,
        stage: {
          ref: k
        }
      })
    );
  }, p = (g) => {
    t(Vt(g)), t(ae(["scanconf", "requests"]));
  }, f = Object.keys(n.operations), m = Object.keys(n.requests || {}), y = [
    {
      id: "general",
      title: "General",
      items: [
        { id: "before", label: "Global Before" },
        { id: "after", label: "Global After" }
      ]
    }
  ];
  return /* @__PURE__ */ l.jsx(
    Pn,
    {
      title: "items",
      selected: { sectionId: "general", itemId: r },
      onSelected: (g) => t(wd(g.itemId)),
      noSectionTitles: !0,
      sections: y,
      render: (g) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        (g == null ? void 0 : g.itemId) === "before" && /* @__PURE__ */ l.jsxs(bc, { children: [
          /* @__PURE__ */ l.jsx(
            Eo,
            {
              servers: o,
              onTry: (k) => {
                t(oa(k));
              }
            }
          ),
          /* @__PURE__ */ l.jsx(
            En,
            {
              oas: e,
              stages: n.before,
              container: { container: "globalBefore" },
              executionResult: a == null ? void 0 : a[0],
              saveStage: u,
              moveStage: c,
              removeStage: s,
              operations: n.operations,
              requests: n.requests,
              goToRequest: p
            }
          ),
          /* @__PURE__ */ l.jsx(
            On,
            {
              operationIds: f,
              requestIds: m,
              onSelect: (k) => d({ container: "globalBefore" }, k)
            }
          ),
          i.length > 0 && /* @__PURE__ */ l.jsx(xe, { title: "Result", children: /* @__PURE__ */ l.jsx($n, { result: i }) })
        ] }, "before"),
        (g == null ? void 0 : g.itemId) === "after" && /* @__PURE__ */ l.jsxs(bc, { children: [
          /* @__PURE__ */ l.jsx(
            Eo,
            {
              servers: o,
              onTry: (k) => {
                t(oa(k));
              }
            }
          ),
          /* @__PURE__ */ l.jsx(
            En,
            {
              oas: e,
              stages: n.after,
              container: { container: "globalAfter" },
              executionResult: void 0,
              saveStage: u,
              removeStage: s,
              moveStage: c,
              operations: n.operations,
              requests: n.requests,
              goToRequest: p
            }
          ),
          /* @__PURE__ */ l.jsx(
            On,
            {
              operationIds: f,
              requestIds: m,
              onSelect: (k) => d({ container: "globalAfter" }, k)
            }
          ),
          i.length > 0 && /* @__PURE__ */ l.jsx(xe, { title: "Result", children: /* @__PURE__ */ l.jsx($n, { result: i }) })
        ] }, "after")
      ] })
    }
  );
}
const bc = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`, Cf = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  //max-width: 560px;
`, $f = v.div`
  font-weight: 700;
  margin-bottom: 16px;
`;
function VE() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx($f, { children: "Default environment" }),
    /* @__PURE__ */ l.jsx(Cf, { children: /* @__PURE__ */ l.jsx(Me, { name: "environment", label: "Default environment", disabled: !0 }) })
  ] });
}
const WE = An({
  environment: K(),
  logLevel: K(),
  logDestination: K()
}), Ba = {
  id: "environment",
  label: "Environment Settings",
  schema: WE,
  form: VE
};
function KE() {
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx($f, { children: "Logging settings" }),
    /* @__PURE__ */ l.jsxs(Cf, { children: [
      /* @__PURE__ */ l.jsx(
        Yi,
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
      /* @__PURE__ */ l.jsx(Me, { name: "logDestination", label: "Log destination" })
    ] })
  ] });
}
const GE = An({
  environment: K(),
  logLevel: K(),
  logDestination: K()
}), Ha = {
  id: "logging",
  label: "Logging configuration",
  schema: GE,
  form: KE
}, JE = [
  {
    id: "logging",
    title: "Logging",
    items: [Ha]
  },
  {
    id: "environment",
    title: "Environment",
    items: [Ba]
  }
], YE = {
  [Ha.id]: Ha,
  [Ba.id]: Ba
};
function XE() {
  const t = me(), e = F(
    (n) => n.scanconf.playbook.runtimeConfiguration
  );
  return /* @__PURE__ */ l.jsx(
    Gf,
    {
      noSectionTitles: !0,
      sections: JE,
      defaultSelection: { sectionId: "logging", itemId: "logging" },
      render: (n) => {
        const { id: o, form: r, schema: i } = YE[n.itemId];
        return /* @__PURE__ */ l.jsx(
          Ze,
          {
            schema: i,
            wrapFormData: QE,
            unwrapFormData: ZE,
            data: e || {},
            saveData: (a) => t(pd(a)),
            children: /* @__PURE__ */ l.jsx(r, {})
          }
        );
      }
    }
  );
}
function QE(t) {
  return {
    ...t,
    logLevel: t.logLevel !== void 0 ? t.logLevel : ""
  };
}
function ZE(t) {
  return { ...t, logLevel: t.logLevel !== "" ? t.logLevel : void 0 };
}
function e2() {
  const {
    playbook: { environments: t, runtimeConfiguration: e }
  } = F((r) => r.scanconf), n = F((r) => r.env.data);
  if (t == null || e == null)
    return /* @__PURE__ */ l.jsx(jc, { children: "Environment" });
  const { missing: o } = Gn(t[(e == null ? void 0 : e.environment) || "default"], n);
  return /* @__PURE__ */ l.jsxs(jc, { children: [
    "Environment",
    o.length > 0 && /* @__PURE__ */ l.jsx(lt, {})
  ] });
}
const jc = v.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > svg {
    fill: var(${h.errorForeground});
    padding-right: 4px;
  }
`;
function Tf({ credentials: t }) {
  const e = t2(t).map(({ name: n }) => ({ label: n, value: n }));
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      ir,
      {
        label: "Type",
        name: "key",
        options: [
          { value: "authentication-swapping-bola", label: "BOLA" },
          { value: "authentication-swapping-bfla", label: "BFLA" }
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(ir, { label: "Source", name: "source.0", options: e }),
    /* @__PURE__ */ l.jsx(ir, { label: "Target", name: "target.0", options: e })
  ] });
}
function t2(t) {
  return Object.entries(t).map(([e, n]) => Object.entries(n.methods || {}).map(([o, r]) => ({ name: `${e}/${o}`, credential: n }))).flat();
}
function n2({
  selected: t,
  credentials: e
}) {
  const n = me(), {
    playbook: { authorizationTests: o }
  } = F((a) => a.scanconf), r = (a, s) => n(hd({ id: a, test: s })), i = o[t.itemId];
  return /* @__PURE__ */ l.jsxs(o2, { children: [
    /* @__PURE__ */ l.jsx("h4", { children: t.itemId }),
    /* @__PURE__ */ l.jsx(
      Ze,
      {
        data: i,
        wrapFormData: (a) => a,
        unwrapFormData: (a) => a,
        saveData: (a) => r(t.itemId, a),
        children: /* @__PURE__ */ l.jsx(Tf, { credentials: e })
      }
    )
  ] });
}
const o2 = v.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function r2({
  onAddTest: t,
  existing: e,
  credentials: n
}) {
  const o = {
    id: "",
    key: "authentication-swapping-bola",
    source: [""],
    target: [""]
  }, r = An({
    id: K().regex(Ir(), {
      message: Nr
    }).refine((a) => !e.includes(a), {
      message: "Already exists"
    }),
    key: K(),
    source: zl(K().min(1)),
    target: zl(K().min(1))
  }), i = (a) => {
    t(a.id, { key: a.key, source: a.source, target: a.target });
  };
  return /* @__PURE__ */ l.jsx(
    Vr,
    {
      title: "New authorization test",
      defaultValues: o,
      schema: r,
      onSubmit: i,
      trigger: /* @__PURE__ */ l.jsx(Oo, { style: { width: "100%" }, children: "New authorization test" }),
      children: /* @__PURE__ */ l.jsxs(i2, { children: [
        /* @__PURE__ */ l.jsx(mn, { label: "Test ID", name: "id" }),
        /* @__PURE__ */ l.jsx(Tf, { credentials: n })
      ] })
    }
  );
}
const i2 = v.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function a2() {
  const t = me(), {
    playbook: { authorizationTests: e, authenticationDetails: n },
    selectedAuthorizationTest: o
  } = F((s) => s.scanconf), r = (s, u) => {
    t(fd({ id: s, test: u })), t(Wl({ id: s }));
  }, a = [
    {
      id: "authorizationTests",
      title: "Authorization Tests",
      items: Object.keys(e).map((s) => ({
        id: s,
        label: s,
        menu: /* @__PURE__ */ l.jsx(Nt, { children: /* @__PURE__ */ l.jsxs(
          tn,
          {
            onClick: (u) => u.stopPropagation(),
            onSelect: () => t(gd({ id: s })),
            children: [
              /* @__PURE__ */ l.jsx(He, {}),
              "Delete"
            ]
          }
        ) })
      }))
    }
  ];
  return /* @__PURE__ */ l.jsx(
    Pn,
    {
      title: "tests",
      sections: a,
      render: (s) => /* @__PURE__ */ l.jsx(n2, { selected: s, credentials: n[0] }),
      renderEmpty: () => /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("h2", { children: "Authorization Tests" }),
        /* @__PURE__ */ l.jsx("p", { children: "BOLA and BFLA tests" }),
        /* @__PURE__ */ l.jsx("p", { children: "Define advanced security tests, such as testing how your API implementation handles BOLA/IDOR (Broken Object Level Authorization, also known as Insecure Direct Object Reference) attack or BFLA (Broken Function Level Authorization)" })
      ] }),
      renderButtons: () => /* @__PURE__ */ l.jsx(
        r2,
        {
          credentials: n[0],
          existing: Object.keys(e),
          onAddTest: r
        }
      ),
      selected: o !== void 0 ? { sectionId: "authorizationTests", itemId: o } : void 0,
      onSelected: (s) => {
        t(Wl({ id: s.itemId }));
      }
    }
  );
}
function s2({ change: t }) {
  return /* @__PURE__ */ l.jsx(l2, { children: /* @__PURE__ */ l.jsx(hi, { path: t.path, method: t.method, operationId: t.operationId }) });
}
const l2 = v.div`
  border: 1px solid var(${h.border});
  padding: 8px;
  background-color: var(${h.computedOne});
`;
function u2({ change: t }) {
  return /* @__PURE__ */ l.jsx(c2, { children: /* @__PURE__ */ l.jsx(hi, { path: t.path, method: t.method, operationId: t.operationId, children: t.references.length > 0 && /* @__PURE__ */ l.jsxs(d2, { children: [
    "References in ",
    t.references.length,
    " locations will be removed"
  ] }) }) });
}
const c2 = v.div`
  border: 1px solid var(${h.border});
  padding: 8px;
  background-color: var(${h.computedOne});
`, d2 = v.div`
  padding: 8px;
  background-color: var(${h.background});
`;
function p2({ change: t }) {
  return /* @__PURE__ */ l.jsx(m2, { children: /* @__PURE__ */ l.jsx(hi, { path: t.path, method: t.method, operationId: t.oldOperationId, children: /* @__PURE__ */ l.jsxs(f2, { children: [
    '"',
    t.oldOperationId,
    '" renamed to "',
    t.newOperationId,
    '"'
  ] }) }) });
}
const m2 = v.div`
  border: 1px solid var(${h.border});
  padding: 8px;
  background-color: var(${h.computedOne});
`, f2 = v.div`
  padding: 8px;
  background-color: var(${h.background});
`;
function h2({ change: t }) {
  return /* @__PURE__ */ l.jsx(g2, { children: t.schema });
}
const g2 = v.div`
  border: 1px solid var(${h.border});
  padding: 8px;
  background-color: var(${h.computedOne});
`;
function y2() {
  const t = me(), { changes: e, updating: n } = F((s) => s.scanconfUpdate), o = e.filter((s) => s.type === "operation-added"), r = e.filter((s) => s.type === "operation-removed"), i = e.filter((s) => s.type === "operation-renamed"), a = e.filter((s) => s.type === "security-added");
  return /* @__PURE__ */ l.jsxs(v2, { children: [
    /* @__PURE__ */ l.jsx("div", { children: "Your OpenAPI file has deviated from your scan configuration." }),
    /* @__PURE__ */ l.jsx("div", { children: "Please update your scan configuration to reflect the changes in your OpenAPI file. If you decide to ignore the changes, the scan will be performed using the old configuration." }),
    /* @__PURE__ */ l.jsxs(b2, { children: [
      o.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { children: "Added:" }),
        o.map((s, u) => /* @__PURE__ */ l.jsx(s2, { change: s }, u))
      ] }),
      r.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { children: "Removed:" }),
        r.map((s, u) => /* @__PURE__ */ l.jsx(u2, { change: s }, u))
      ] }),
      i.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { children: "OperationId changed:" }),
        i.map((s, u) => /* @__PURE__ */ l.jsx(p2, { change: s }, u))
      ] }),
      a.length > 0 && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx("div", { children: "Security scheme added:" }),
        a.map((s, u) => /* @__PURE__ */ l.jsx(h2, { change: s }, u))
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs(k2, { children: [
      /* @__PURE__ */ l.jsx(
        Eh,
        {
          label: "Update",
          waiting: n,
          onClick: () => t(Od())
        }
      ),
      /* @__PURE__ */ l.jsx(Vd, { disabled: n, onClick: () => t(Dd()), children: "Skip" })
    ] })
  ] });
}
const v2 = v.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, k2 = v.div`
  display: flex;
  gap: 8px;
`, b2 = v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
function j2() {
  const t = hv((e) => e.generalError.error);
  return /* @__PURE__ */ l.jsx(w2, { children: /* @__PURE__ */ l.jsx(x2, { children: t == null ? void 0 : t.message }) });
}
const x2 = v.div`
  border: 1px solid var(${h.errorBorder});
  color: var(${h.errorForeground});
  background-color: var(${h.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, w2 = v.div`
  padding: 8px;
`, xc = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ l.jsx("div", {})
  },
  {
    id: "general-error",
    title: "An error has occurred",
    element: /* @__PURE__ */ l.jsx(j2, {}),
    navigation: !1,
    when: at
  },
  {
    id: "scanconf-update",
    title: "Scan configuration is outdated",
    element: /* @__PURE__ */ l.jsx(y2, {}),
    navigation: !1
  },
  {
    id: "scanconf",
    title: "Scanconf",
    element: /* @__PURE__ */ l.jsx("div", { children: "Main" }),
    children: [
      {
        id: "requests",
        title: "Operations",
        element: /* @__PURE__ */ l.jsx(wE, {})
      },
      {
        id: "operations",
        title: "Scenarios",
        element: /* @__PURE__ */ l.jsx(f$, {})
      },
      {
        id: "global",
        title: "Global blocks",
        element: /* @__PURE__ */ l.jsx(UE, {})
      },
      {
        id: "auth",
        title: "Authentication",
        element: /* @__PURE__ */ l.jsx(v1, {})
      },
      {
        id: "authorizationTests",
        title: "Tests",
        element: /* @__PURE__ */ l.jsx(a2, {})
      },
      {
        id: "environments",
        title: /* @__PURE__ */ l.jsx(e2, {}),
        element: /* @__PURE__ */ l.jsx(HE, {})
      },
      {
        id: "settings",
        title: "Settings",
        element: /* @__PURE__ */ l.jsx(XE, {})
      },
      {
        id: "help",
        title: "Help",
        link: "https://42crunch.com/tutorial-security-conformance-scan-openapi-swagger-extension-vs-code/"
      }
    ]
  }
];
function _2(t, e) {
  const n = qv(qC(t, xc), e);
  Hf(document.getElementById("root")).render(
    /* @__PURE__ */ l.jsx(Rn.StrictMode, { children: /* @__PURE__ */ l.jsx(Uf, { store: n, children: /* @__PURE__ */ l.jsx(Vf.Provider, { value: xc, children: /* @__PURE__ */ l.jsx(hy, { backend: av, children: /* @__PURE__ */ l.jsx(Wf, {}) }) }) }) })
  ), window.addEventListener("message", Kf(n, Lv));
}
window.renderWebView = _2;
