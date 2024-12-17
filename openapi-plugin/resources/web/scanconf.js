var Ih = Object.defineProperty;
var Dh = (e, t, n) => t in e ? Ih(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Oi = (e, t, n) => Dh(e, typeof t != "symbol" ? t + "" : t, n);
import { j as a, e as _, o as Ph, p as $t, c as sn, b as ku, i as Fn, a as zh, n as Ah, u as Rh, l as Nh, t as Mh, r as qh, v as Fh, q as k, T as v, S as Qe, w as Lh, x as Bh, y as nr, z as Hh, O as Rs, C as Ns, A as Ms, D as qs, E as Fs, F as Ls, G as Bs, B as wu, H as Hs, I as ju, W as Su, R as St, J as Yi, K as se, L as Uh, M as Cu, N as ze, d as Vh, s as Wh, Q as Gh, U as Kh, f as Xh, P as Yh, g as Qh, V as Jh, m as Zh } from "./TriangleExclamation.Bx9Cjic4.js";
import { a as Ln, S as ep } from "./SearchSidebar.BqSlxpwA.js";
import { f as tp, k as fo, g as Us, m as _u, l as np, e as rp, c as ue, n as op, a as Po, o as ip, p as sp, d as En, q as Eu, r as zo, t as Tu, v as Ou, i as Ao, w as $u, x as ap, y as lp, s as Iu, H as cp } from "./slice.O08lSnJw.js";
import { l as up, c as dp } from "./index.DDL_J8y6.js";
import { l as fp, p as hp, c as Du, A as pp, d as gp, G as mp, L as yp, e as vp, f as xp, g as bp, h as kp, i as wp, j as jp, k as Sp, m as Cp, n as _p, o as Ep, q as Tp, C as Op, I as $p, r as Ip, t as Dp, u as Pp, v as zp, R as Ap, T as Rp, P as Np, w as Mp, x as qp, a as Pu, y as Fp, z as Lp, S as zu } from "./index.VoTi6eqY.js";
import { c as Bp, w as Ro, s as No, o as Hp } from "./listener.6kHeWaYC.js";
import { t as Up, o as Bn, s as Y, T as Vp, a as al, l as ll, d as Wp, F as Je, I as Xe, c as Ge, f as cl, b as ul } from "./Textarea.CN3byLZt.js";
import { S as Er } from "./AngleDown.BXHrY2zc.js";
import { S as Gp } from "./AngleUp.BT-LmYBc.js";
import { D as Hn, S as Kp } from "./DescriptionTooltip.C5xxvOjw.js";
import { S as Au, P as Xp } from "./ProgressButton.DtD1VE2H.js";
import { T as ct, $ as Yp } from "./Tabs.CYtaWkhP.js";
import { C as an, B as Un, a as ho, T as Ru } from "./CollapsibleCard.Dhy-4_vZ.js";
import { l as Tn, m as On, D as Vs, r as dl, n as Qp, o as Jp, q as Zp, E as eg } from "./variables.DOtlLp1y.js";
import { d as Nu, F as Mu, a as J, u as ln, b as cn, c as Tr } from "./index.esm.BkhFKhi4.js";
import { S as Mo } from "./ExclamationCircle.DZfV_vy9.js";
import { a as qo, u as Fo } from "./downshift.esm.Bjpfpcc2.js";
import { S as tg } from "./Check.BYlFq-hF.js";
import { C as ng, P as rg, R as og, T as ig, a as sg } from "./index.wUGuWQIC.js";
import { a as ag, S as qu } from "./Switch.agb1XpZb.js";
import { S as Ue } from "./TrashCan.B_9oEMnF.js";
import { S as fl } from "./Select.AYETaB4E.js";
import { o as lg, s as cg } from "./listener.BD7iG2ss.js";
import { S as Or } from "./index.DaTfd4rN.js";
import { E as Xt } from "./Banner.DHdNW9_j.js";
const Fu = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M192 456c0 13.3-10.7 24-24 24H96c-53.02 0-96-42.98-96-96V128c0-53.02 42.98-96 96-96h72c13.3 0 24 10.74 24 24 0 13.25-10.7 24-24 24H96c-26.4 0-48 21.6-48 48v256c0 26.4 21.6 48 48 48h72c13.3 0 24 10.7 24 24zm313.5-216.4-127.1-136c-9.094-9.688-24.28-10.12-33.91-1.031-9.656 9.062-10.12 24.25-1.031 33.91L432.4 232H183.1c-12.4 0-23.1 10.8-23.1 24s10.75 24 23.1 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C348.2 413.8 354.1 416 359.1 416c6.375 0 12.75-2.531 17.47-7.562l127.1-136C514.2 263.2 514.2 248.8 505.5 239.6z" }) }), Lu = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M200 32h-80c-30.93 0-56 25.07-56 56v77.5a39.84 39.84 0 0 1-11.67 28.17L7 239c-4.5 4.5-7 10.6-7 17 0 6.375 2.5 12.5 7 17l45.33 45.33A39.783 39.783 0 0 1 64 346.5V424c0 30.9 25.07 56 56 56h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-4.4 0-8-3.6-8-8v-77.5c0-23.44-9.337-45.91-25.95-62.45L57.88 256l28.18-28.05C102.7 211.4 112 188.9 112 165.5V88c0-4.4 3.6-8 8-8h80c13.3 0 24-10.75 24-24s-10.7-24-24-24zm369 207-45.33-45.33A39.783 39.783 0 0 1 512 165.5V88c0-30.93-25.1-56-56-56h-80c-13.3 0-24 10.75-24 23.1S362.7 80 375.1 80H456c4.4 0 8 3.6 8 8v77.5c0 23.37 9.284 45.78 25.81 62.31L517.1 256l-28.19 28.19C473.3 300.7 464 323.1 464 346.5V424c0 4.4-3.6 8-8 8h-80c-13.3 0-24 10.7-24 23.1s10.7 24.9 23.1 24.9H456c30.93 0 56-25.07 56-56v-77.5a39.84 39.84 0 0 1 11.67-28.17L569 273c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17z" }) }), ug = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M235.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" }) }), Bu = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" }) }), dg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h140.1l67.9 67.9V320c0 8.8-7.2 16-16 16zm-192 48h192c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9l-67.8-67.9c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-32h-48v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h32v-48H64z" }) }), fg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M64 368c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48zm0-160c26.51 0 48 21.5 48 48s-21.49 48-48 48-48-21.5-48-48 21.49-48 48-48zm0-64c-26.51 0-48-21.5-48-48 0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.5-21.49 48-48 48z" }) }), hg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "m568.1 303-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 296H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 387.7 448 393.8 448 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97zM360 384c-13.25 0-24 10.74-24 24v40c0 8.836-7.164 16-16 16H64.02c-8.836 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v72c0 13.25 10.74 24 23.1 24s25.8-10.7 25.8-24v-93.4c0-16.98-6.742-33.26-18.75-45.26L290.62 18.7C278.6 6.742 262.3 0 245.4 0H63.1C28.65 0-.002 28.66 0 64l.006 384c.002 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64v-40c0-13.3-10.7-24-24-24z" }) }), pg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M40 480c-22.09 0-40-17.9-40-40v-48c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40zm48-40v-48H40v48h48zm144 40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 232c0-22.1 17.91-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40v-48zm40 0v48h48v-48H40zm192 88c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40v-48h-48v48h48zM0 72c0-22.09 17.91-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40V72zm40 0v48h48V72H40zm192 88c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48zm48-40V72h-48v48h48z" }) }), gg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M336 144c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm0 208c-9.5 0-18.8-.7-27.9-2.2l-28 26.3c-3.6 5.4-9.7 7.9-16.1 7.9h-40v40c0 13.3-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24V376c0-6.4 2.529-12.5 7.029-17L162.2 203.9c-1.4-9.1-2.2-18.4-2.2-27.9C160 78.8 238.8 0 336 0s176 78.8 176 176-78.8 176-176 176zm0-48c70.7 0 128-57.3 128-128S406.7 48 336 48s-128 57.3-128 128c0 6.9.5 13.7 1.6 20.3l3.8 24.2L47.1 385.9V464h64v-64h64v-64h79l37.4-37.4 24.2 3.8c6.6 1.1 13.4 1.6 20.3 1.6z" }) }), mg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M24.52 38.13a48.019 48.019 0 0 1 48.51.91L361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87zM48 432l288-176L48 80v352z" }) }), $r = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M432 256c0 13.3-10.7 24-24 24H248v160c0 13.25-10.75 24.01-24 24.01S200 453.3 200 440V280H40c-13.25 0-24-10.74-24-23.99C16 242.8 26.75 232 40 232h160V72c0-13.25 10.75-23.99 24-23.99S248 58.75 248 72v160h160c13.3 0 24 10.8 24 24z" }) }), yg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M0 416c0 13.3 10.7 24 24 24h59.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H236.3c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm192-160a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm32-80c-35.8 0-66.1 23.5-76.3 56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h251.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-59.7c-10.2-32.5-40.5-56-76.3-56zm-160-48a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56H24C10.7 72 0 82.7 0 96s10.7 24 24 24h91.7c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H268.3z" }) }), vg = (e) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm200 248v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" }) }), Hu = _.createContext({
  dragDropManager: void 0
});
function $e(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var hl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), $i = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, pl = {
  INIT: "@@redux/INIT" + $i(),
  REPLACE: "@@redux/REPLACE" + $i(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + $i();
  }
};
function xg(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Uu(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error($e(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error($e(1));
    return n(Uu)(e, t);
  }
  if (typeof e != "function")
    throw new Error($e(2));
  var o = e, i = t, s = [], l = s, c = !1;
  function u() {
    l === s && (l = s.slice());
  }
  function d() {
    if (c)
      throw new Error($e(3));
    return i;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error($e(4));
    if (c)
      throw new Error($e(5));
    var y = !0;
    return u(), l.push(m), function() {
      if (y) {
        if (c)
          throw new Error($e(6));
        y = !1, u();
        var b = l.indexOf(m);
        l.splice(b, 1), s = null;
      }
    };
  }
  function h(m) {
    if (!xg(m))
      throw new Error($e(7));
    if (typeof m.type > "u")
      throw new Error($e(8));
    if (c)
      throw new Error($e(9));
    try {
      c = !0, i = o(i, m);
    } finally {
      c = !1;
    }
    for (var y = s = l, x = 0; x < y.length; x++) {
      var b = y[x];
      b();
    }
    return m;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error($e(10));
    o = m, h({
      type: pl.REPLACE
    });
  }
  function g() {
    var m, y = p;
    return m = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(b) {
        if (typeof b != "object" || b === null)
          throw new Error($e(11));
        function w() {
          b.next && b.next(d());
        }
        w();
        var C = y(w);
        return {
          unsubscribe: C
        };
      }
    }, m[hl] = function() {
      return this;
    }, m;
  }
  return h({
    type: pl.INIT
  }), r = {
    dispatch: h,
    subscribe: p,
    getState: d,
    replaceReducer: f
  }, r[hl] = g, r;
}
function B(e, t, ...n) {
  if (bg() && t === void 0)
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
function bg() {
  return typeof process < "u" && process.env.NODE_ENV === "production";
}
function kg(e, t, n) {
  return t.split(".").reduce(
    (r, o) => r && r[o] ? r[o] : n || null,
    e
  );
}
function wg(e, t) {
  return e.filter(
    (n) => n !== t
  );
}
function Vu(e) {
  return typeof e == "object";
}
function jg(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (i) => {
    n.set(i, n.has(i) ? n.get(i) + 1 : 1);
  };
  e.forEach(r), t.forEach(r);
  const o = [];
  return n.forEach((i, s) => {
    i === 1 && o.push(s);
  }), o;
}
function Sg(e, t) {
  return e.filter(
    (n) => t.indexOf(n) > -1
  );
}
const Ws = "dnd-core/INIT_COORDS", Lo = "dnd-core/BEGIN_DRAG", Gs = "dnd-core/PUBLISH_DRAG_SOURCE", Bo = "dnd-core/HOVER", Ho = "dnd-core/DROP", Uo = "dnd-core/END_DRAG";
function gl(e, t) {
  return {
    type: Ws,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
const Cg = {
  type: Ws,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function _g(e) {
  return function(n = [], r = {
    publishSource: !0
  }) {
    const { publishSource: o = !0, clientOffset: i, getSourceClientOffset: s } = r, l = e.getMonitor(), c = e.getRegistry();
    e.dispatch(gl(i)), Eg(n, l, c);
    const u = $g(n, l);
    if (u == null) {
      e.dispatch(Cg);
      return;
    }
    let d = null;
    if (i) {
      if (!s)
        throw new Error("getSourceClientOffset must be defined");
      Tg(s), d = s(u);
    }
    e.dispatch(gl(i, d));
    const h = c.getSource(u).beginDrag(l, u);
    if (h == null)
      return;
    Og(h), c.pinSource(u);
    const f = c.getSourceType(u);
    return {
      type: Lo,
      payload: {
        itemType: f,
        item: h,
        sourceId: u,
        clientOffset: i || null,
        sourceClientOffset: d || null,
        isSourcePublic: !!o
      }
    };
  };
}
function Eg(e, t, n) {
  B(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(r) {
    B(n.getSource(r), "Expected sourceIds to be registered.");
  });
}
function Tg(e) {
  B(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Og(e) {
  B(Vu(e), "Item must be an object.");
}
function $g(e, t) {
  let n = null;
  for (let r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break;
    }
  return n;
}
function Ig(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Dg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ig(e, o, n[o]);
    });
  }
  return e;
}
function Pg(e) {
  return function(n = {}) {
    const r = e.getMonitor(), o = e.getRegistry();
    zg(r), Ng(r).forEach((s, l) => {
      const c = Ag(s, l, o, r), u = {
        type: Ho,
        payload: {
          dropResult: Dg({}, n, c)
        }
      };
      e.dispatch(u);
    });
  };
}
function zg(e) {
  B(e.isDragging(), "Cannot call drop while not dragging."), B(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Ag(e, t, n, r) {
  const o = n.getTarget(e);
  let i = o ? o.drop(r, e) : void 0;
  return Rg(i), typeof i > "u" && (i = t === 0 ? {} : r.getDropResult()), i;
}
function Rg(e) {
  B(typeof e > "u" || Vu(e), "Drop result must either be an object or undefined.");
}
function Ng(e) {
  const t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Mg(e) {
  return function() {
    const n = e.getMonitor(), r = e.getRegistry();
    qg(n);
    const o = n.getSourceId();
    return o != null && (r.getSource(o, !0).endDrag(n, o), r.unpinSource()), {
      type: Uo
    };
  };
}
function qg(e) {
  B(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Qi(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(
    (n) => n === t
  ) : e === t;
}
function Fg(e) {
  return function(n, { clientOffset: r } = {}) {
    Lg(n);
    const o = n.slice(0), i = e.getMonitor(), s = e.getRegistry(), l = i.getItemType();
    return Hg(o, s, l), Bg(o, i, s), Ug(o, i, s), {
      type: Bo,
      payload: {
        targetIds: o,
        clientOffset: r || null
      }
    };
  };
}
function Lg(e) {
  B(Array.isArray(e), "Expected targetIds to be an array.");
}
function Bg(e, t, n) {
  B(t.isDragging(), "Cannot call hover while not dragging."), B(!t.didDrop(), "Cannot call hover after drop.");
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    B(e.lastIndexOf(o) === r, "Expected targetIds to be unique in the passed array.");
    const i = n.getTarget(o);
    B(i, "Expected targetIds to be registered.");
  }
}
function Hg(e, t, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r], i = t.getTargetType(o);
    Qi(i, n) || e.splice(r, 1);
  }
}
function Ug(e, t, n) {
  e.forEach(function(r) {
    n.getTarget(r).hover(t, r);
  });
}
function Vg(e) {
  return function() {
    if (e.getMonitor().isDragging())
      return {
        type: Gs
      };
  };
}
function Wg(e) {
  return {
    beginDrag: _g(e),
    publishDragSource: Vg(e),
    hover: Fg(e),
    drop: Pg(e),
    endDrag: Mg(e)
  };
}
class Gg {
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
    const o = Wg(this);
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
function Kg(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Wu(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Xg(e) {
  const { clientOffset: t, initialClientOffset: n, initialSourceClientOffset: r } = e;
  return !t || !n || !r ? null : Wu(Kg(t, r), n);
}
function Yg(e) {
  const { clientOffset: t, initialClientOffset: n } = e;
  return !t || !n ? null : Wu(t, n);
}
const dr = [], Ks = [];
dr.__IS_NONE__ = !0;
Ks.__IS_ALL__ = !0;
function Qg(e, t) {
  return e === dr ? !1 : e === Ks || typeof t > "u" ? !0 : Sg(t, e).length > 0;
}
class Jg {
  subscribeToStateChange(t, n = {}) {
    const { handlerIds: r } = n;
    B(typeof t == "function", "listener must be a function."), B(typeof r > "u" || Array.isArray(r), "handlerIds, when specified, must be an array of strings.");
    let o = this.store.getState().stateId;
    const i = () => {
      const s = this.store.getState(), l = s.stateId;
      try {
        l === o || l === o + 1 && !Qg(s.dirtyHandlerIds, r) || t();
      } finally {
        o = l;
      }
    };
    return this.store.subscribe(i);
  }
  subscribeToOffsetChange(t) {
    B(typeof t == "function", "listener must be a function.");
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
    return B(n, `Expected to find a valid source. sourceId=${t}`), this.isDragging() ? !1 : n.canDrag(this, t);
  }
  canDropOnTarget(t) {
    if (!t)
      return !1;
    const n = this.registry.getTarget(t);
    if (B(n, `Expected to find a valid target. targetId=${t}`), !this.isDragging() || this.didDrop())
      return !1;
    const r = this.registry.getTargetType(t), o = this.getItemType();
    return Qi(r, o) && n.canDrop(this, t);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(t) {
    if (!t)
      return !1;
    const n = this.registry.getSource(t, !0);
    if (B(n, `Expected to find a valid source. sourceId=${t}`), !this.isDragging() || !this.isSourcePublic())
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
    if (i && !Qi(o, i))
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
    return Xg(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return Yg(this.store.getState().dragOffset);
  }
  constructor(t, n) {
    this.store = t, this.registry = n;
  }
}
const ml = typeof global < "u" ? global : self, Gu = ml.MutationObserver || ml.WebKitMutationObserver;
function Ku(e) {
  return function() {
    const n = setTimeout(o, 0), r = setInterval(o, 50);
    function o() {
      clearTimeout(n), clearInterval(r), e();
    }
  };
}
function Zg(e) {
  let t = 1;
  const n = new Gu(e), r = document.createTextNode("");
  return n.observe(r, {
    characterData: !0
  }), function() {
    t = -t, r.data = t;
  };
}
const em = typeof Gu == "function" ? (
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
  Zg
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
  Ku
);
class tm {
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
    }, this.requestFlush = em(this.flush), this.requestErrorThrow = Ku(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class nm {
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
class rm {
  create(t) {
    const n = this.freeTasks, r = n.length ? n.pop() : new nm(
      this.onError,
      (o) => n[n.length] = o
    );
    return r.task = t, r;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const Xu = new tm(), om = new rm(Xu.registerPendingError);
function im(e) {
  Xu.enqueueTask(om.create(e));
}
const Xs = "dnd-core/ADD_SOURCE", Ys = "dnd-core/ADD_TARGET", Qs = "dnd-core/REMOVE_SOURCE", Vo = "dnd-core/REMOVE_TARGET";
function sm(e) {
  return {
    type: Xs,
    payload: {
      sourceId: e
    }
  };
}
function am(e) {
  return {
    type: Ys,
    payload: {
      targetId: e
    }
  };
}
function lm(e) {
  return {
    type: Qs,
    payload: {
      sourceId: e
    }
  };
}
function cm(e) {
  return {
    type: Vo,
    payload: {
      targetId: e
    }
  };
}
function um(e) {
  B(typeof e.canDrag == "function", "Expected canDrag to be a function."), B(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), B(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function dm(e) {
  B(typeof e.canDrop == "function", "Expected canDrop to be a function."), B(typeof e.hover == "function", "Expected hover to be a function."), B(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function Ji(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(
      (n) => Ji(n, !1)
    );
    return;
  }
  B(typeof e == "string" || typeof e == "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var De;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(De || (De = {}));
let fm = 0;
function hm() {
  return fm++;
}
function pm(e) {
  const t = hm().toString();
  switch (e) {
    case De.SOURCE:
      return `S${t}`;
    case De.TARGET:
      return `T${t}`;
    default:
      throw new Error(`Unknown Handler Role: ${e}`);
  }
}
function yl(e) {
  switch (e[0]) {
    case "S":
      return De.SOURCE;
    case "T":
      return De.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${e}`);
  }
}
function vl(e, t) {
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
class gm {
  addSource(t, n) {
    Ji(t), um(n);
    const r = this.addHandler(De.SOURCE, t, n);
    return this.store.dispatch(sm(r)), r;
  }
  addTarget(t, n) {
    Ji(t, !0), dm(n);
    const r = this.addHandler(De.TARGET, t, n);
    return this.store.dispatch(am(r)), r;
  }
  containsHandler(t) {
    return vl(this.dragSources, t) || vl(this.dropTargets, t);
  }
  getSource(t, n = !1) {
    return B(this.isSourceId(t), "Expected a valid source ID."), n && t === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(t);
  }
  getTarget(t) {
    return B(this.isTargetId(t), "Expected a valid target ID."), this.dropTargets.get(t);
  }
  getSourceType(t) {
    return B(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t);
  }
  getTargetType(t) {
    return B(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t);
  }
  isSourceId(t) {
    return yl(t) === De.SOURCE;
  }
  isTargetId(t) {
    return yl(t) === De.TARGET;
  }
  removeSource(t) {
    B(this.getSource(t), "Expected an existing source."), this.store.dispatch(lm(t)), im(() => {
      this.dragSources.delete(t), this.types.delete(t);
    });
  }
  removeTarget(t) {
    B(this.getTarget(t), "Expected an existing target."), this.store.dispatch(cm(t)), this.dropTargets.delete(t), this.types.delete(t);
  }
  pinSource(t) {
    const n = this.getSource(t);
    B(n, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = n;
  }
  unpinSource() {
    B(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
  }
  addHandler(t, n, r) {
    const o = pm(t);
    return this.types.set(o, n), t === De.SOURCE ? this.dragSources.set(o, r) : t === De.TARGET && this.dropTargets.set(o, r), o;
  }
  constructor(t) {
    this.types = /* @__PURE__ */ new Map(), this.dragSources = /* @__PURE__ */ new Map(), this.dropTargets = /* @__PURE__ */ new Map(), this.pinnedSourceId = null, this.pinnedSource = null, this.store = t;
  }
}
const mm = (e, t) => e === t;
function ym(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function vm(e, t, n = mm) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; ++r)
    if (!n(e[r], t[r]))
      return !1;
  return !0;
}
function xm(e = dr, t) {
  switch (t.type) {
    case Bo:
      break;
    case Xs:
    case Ys:
    case Vo:
    case Qs:
      return dr;
    case Lo:
    case Gs:
    case Uo:
    case Ho:
    default:
      return Ks;
  }
  const { targetIds: n = [], prevTargetIds: r = [] } = t.payload, o = jg(n, r);
  if (!(o.length > 0 || !vm(n, r)))
    return dr;
  const s = r[r.length - 1], l = n[n.length - 1];
  return s !== l && (s && o.push(s), l && o.push(l)), o;
}
function bm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function km(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      bm(e, o, n[o]);
    });
  }
  return e;
}
const xl = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function wm(e = xl, t) {
  const { payload: n } = t;
  switch (t.type) {
    case Ws:
    case Lo:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Bo:
      return ym(e.clientOffset, n.clientOffset) ? e : km({}, e, {
        clientOffset: n.clientOffset
      });
    case Uo:
    case Ho:
      return xl;
    default:
      return e;
  }
}
function jm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      jm(e, o, n[o]);
    });
  }
  return e;
}
const Sm = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function Cm(e = Sm, t) {
  const { payload: n } = t;
  switch (t.type) {
    case Lo:
      return gn({}, e, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Gs:
      return gn({}, e, {
        isSourcePublic: !0
      });
    case Bo:
      return gn({}, e, {
        targetIds: n.targetIds
      });
    case Vo:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : gn({}, e, {
        targetIds: wg(e.targetIds, n.targetId)
      });
    case Ho:
      return gn({}, e, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Uo:
      return gn({}, e, {
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
function _m(e = 0, t) {
  switch (t.type) {
    case Xs:
    case Ys:
      return e + 1;
    case Qs:
    case Vo:
      return e - 1;
    default:
      return e;
  }
}
function Em(e = 0) {
  return e + 1;
}
function Tm(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Om(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Tm(e, o, n[o]);
    });
  }
  return e;
}
function $m(e = {}, t) {
  return {
    dirtyHandlerIds: xm(e.dirtyHandlerIds, {
      type: t.type,
      payload: Om({}, t.payload, {
        prevTargetIds: kg(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: wm(e.dragOffset, t),
    refCount: _m(e.refCount, t),
    dragOperation: Cm(e.dragOperation, t),
    stateId: Em(e.stateId)
  };
}
function Im(e, t = void 0, n = {}, r = !1) {
  const o = Dm(r), i = new Jg(o, new gm(o)), s = new Gg(o, i), l = e(s, t, n);
  return s.receiveBackend(l), s;
}
function Dm(e) {
  const t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Uu($m, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function Pm(e, t) {
  if (e == null) return {};
  var n = zm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function zm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
let bl = 0;
const ao = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var Am = /* @__PURE__ */ _.memo(function(t) {
  var { children: n } = t, r = Pm(t, [
    "children"
  ]);
  const [o, i] = Rm(r);
  return _.useEffect(() => {
    if (i) {
      const s = Yu();
      return ++bl, () => {
        --bl === 0 && (s[ao] = null);
      };
    }
  }, []), /* @__PURE__ */ a.jsx(Hu.Provider, {
    value: o,
    children: n
  });
});
function Rm(e) {
  if ("manager" in e)
    return [
      {
        dragDropManager: e.manager
      },
      !1
    ];
  const t = Nm(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [
    t,
    n
  ];
}
function Nm(e, t = Yu(), n, r) {
  const o = t;
  return o[ao] || (o[ao] = {
    dragDropManager: Im(e, t, n, r)
  }), o[ao];
}
function Yu() {
  return typeof global < "u" ? global : window;
}
var Mm = function e(t, n) {
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
};
const qm = /* @__PURE__ */ Ph(Mm), tn = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function Fm(e, t, n) {
  const [r, o] = _.useState(
    () => t(e)
  ), i = _.useCallback(() => {
    const s = t(e);
    qm(r, s) || (o(s), n && n());
  }, [
    r,
    e,
    n
  ]);
  return tn(i), [
    r,
    i
  ];
}
function Lm(e, t, n) {
  const [r, o] = Fm(e, t, n);
  return tn(function() {
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
function Qu(e, t, n) {
  return Lm(
    t,
    e || (() => ({})),
    () => n.reconnect()
  );
}
function Ju(e, t) {
  const n = [];
  return typeof e != "function" && n.push(e), _.useMemo(() => typeof e == "function" ? e() : e, n);
}
function Bm(e) {
  return _.useMemo(
    () => e.hooks.dragSource(),
    [
      e
    ]
  );
}
function Hm(e) {
  return _.useMemo(
    () => e.hooks.dragPreview(),
    [
      e
    ]
  );
}
let Ii = !1, Di = !1;
class Um {
  receiveHandlerId(t) {
    this.sourceId = t;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    B(!Ii, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Ii = !0, this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      Ii = !1;
    }
  }
  isDragging() {
    if (!this.sourceId)
      return !1;
    B(!Di, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      return Di = !0, this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      Di = !1;
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
let Pi = !1;
class Vm {
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
    B(!Pi, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      return Pi = !0, this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Pi = !1;
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
function Wm(e, t, n) {
  const r = n.getRegistry(), o = r.addTarget(e, t);
  return [
    o,
    () => r.removeTarget(o)
  ];
}
function Gm(e, t, n) {
  const r = n.getRegistry(), o = r.addSource(e, t);
  return [
    o,
    () => r.removeSource(o)
  ];
}
function Zi(e, t, n, r) {
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
function es(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Km(e) {
  if (typeof e.type == "string")
    return;
  const t = e.type.displayName || e.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function Xm(e) {
  return (t = null, n = null) => {
    if (!_.isValidElement(t)) {
      const i = t;
      return e(i, n), i;
    }
    const r = t;
    return Km(r), Ym(r, n ? (i) => e(i, n) : e);
  };
}
function Zu(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    if (n.endsWith("Ref"))
      t[n] = e[n];
    else {
      const o = Xm(r);
      t[n] = () => o;
    }
  }), t;
}
function kl(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function Ym(e, t) {
  const n = e.ref;
  return B(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? _.cloneElement(e, {
    ref: (r) => {
      kl(n, r), kl(t, r);
    }
  }) : _.cloneElement(e, {
    ref: t
  });
}
class Qm {
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
  constructor(t) {
    this.hooks = Zu({
      dragSource: (n, r) => {
        this.clearDragSource(), this.dragSourceOptions = r || null, es(n) ? this.dragSourceRef = n : this.dragSourceNode = n, this.reconnectDragSource();
      },
      dragPreview: (n, r) => {
        this.clearDragPreview(), this.dragPreviewOptions = r || null, es(n) ? this.dragPreviewRef = n : this.dragPreviewNode = n, this.reconnectDragPreview();
      }
    }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = t;
  }
}
class Jm {
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
  constructor(t) {
    this.hooks = Zu({
      dropTarget: (n, r) => {
        this.clearDropTarget(), this.dropTargetOptions = r, es(n) ? this.dropTargetRef = n : this.dropTargetNode = n, this.reconnect();
      }
    }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = t;
  }
}
function Vn() {
  const { dragDropManager: e } = _.useContext(Hu);
  return B(e != null, "Expected drag drop context"), e;
}
function Zm(e, t) {
  const n = Vn(), r = _.useMemo(
    () => new Qm(n.getBackend()),
    [
      n
    ]
  );
  return tn(() => (r.dragSourceOptions = e || null, r.reconnect(), () => r.disconnectDragSource()), [
    r,
    e
  ]), tn(() => (r.dragPreviewOptions = t || null, r.reconnect(), () => r.disconnectDragPreview()), [
    r,
    t
  ]), r;
}
function ey() {
  const e = Vn();
  return _.useMemo(
    () => new Um(e),
    [
      e
    ]
  );
}
class ty {
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
function ny(e, t, n) {
  const r = _.useMemo(
    () => new ty(e, t, n),
    [
      t,
      n
    ]
  );
  return _.useEffect(() => {
    r.spec = e;
  }, [
    e
  ]), r;
}
function ry(e) {
  return _.useMemo(() => {
    const t = e.type;
    return B(t != null, "spec.type must be defined"), t;
  }, [
    e
  ]);
}
function oy(e, t, n) {
  const r = Vn(), o = ny(e, t, n), i = ry(e);
  tn(function() {
    if (i != null) {
      const [l, c] = Gm(i, o, r);
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
function iy(e, t) {
  const n = Ju(e);
  B(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  const r = ey(), o = Zm(n.options, n.previewOptions);
  return oy(n, r, o), [
    Qu(n.collect, r, o),
    Bm(o),
    Hm(o)
  ];
}
function sy(e) {
  return _.useMemo(
    () => e.hooks.dropTarget(),
    [
      e
    ]
  );
}
function ay(e) {
  const t = Vn(), n = _.useMemo(
    () => new Jm(t.getBackend()),
    [
      t
    ]
  );
  return tn(() => (n.dropTargetOptions = e || null, n.reconnect(), () => n.disconnectDropTarget()), [
    e
  ]), n;
}
function ly() {
  const e = Vn();
  return _.useMemo(
    () => new Vm(e),
    [
      e
    ]
  );
}
function cy(e) {
  const { accept: t } = e;
  return _.useMemo(() => (B(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [
    t
  ]), [
    t
  ]);
}
class uy {
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
function dy(e, t) {
  const n = _.useMemo(
    () => new uy(e, t),
    [
      t
    ]
  );
  return _.useEffect(() => {
    n.spec = e;
  }, [
    e
  ]), n;
}
function fy(e, t, n) {
  const r = Vn(), o = dy(e, t), i = cy(e);
  tn(function() {
    const [l, c] = Wm(i, o, r);
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
function ed(e, t) {
  const n = Ju(e), r = ly(), o = ay(n.options);
  return fy(n, r, o), [
    Qu(n.collect, r, o),
    sy(o)
  ];
}
function td(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
function hy(e, t) {
  return e.filter(
    (n) => n !== t
  );
}
function py(e, t) {
  const n = /* @__PURE__ */ new Set(), r = (i) => n.add(i);
  e.forEach(r), t.forEach(r);
  const o = [];
  return n.forEach(
    (i) => o.push(i)
  ), o;
}
class gy {
  enter(t) {
    const n = this.entered.length, r = (o) => this.isNodeInDocument(o) && (!o.contains || o.contains(t));
    return this.entered = py(this.entered.filter(r), [
      t
    ]), n === 0 && this.entered.length > 0;
  }
  leave(t) {
    const n = this.entered.length;
    return this.entered = hy(this.entered.filter(this.isNodeInDocument), t), n > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(t) {
    this.entered = [], this.isNodeInDocument = t;
  }
}
class my {
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
const nd = "__NATIVE_FILE__", rd = "__NATIVE_URL__", od = "__NATIVE_TEXT__", id = "__NATIVE_HTML__", wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: nd,
  HTML: id,
  TEXT: od,
  URL: rd
}, Symbol.toStringTag, { value: "Module" }));
function zi(e, t, n) {
  const r = t.reduce(
    (o, i) => o || e.getData(i),
    ""
  );
  return r ?? n;
}
const ts = {
  [nd]: {
    exposeProperties: {
      files: (e) => Array.prototype.slice.call(e.files),
      items: (e) => e.items,
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Files"
    ]
  },
  [id]: {
    exposeProperties: {
      html: (e, t) => zi(e, t, ""),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [rd]: {
    exposeProperties: {
      urls: (e, t) => zi(e, t, "").split(`
`),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [od]: {
    exposeProperties: {
      text: (e, t) => zi(e, t, ""),
      dataTransfer: (e) => e
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function yy(e, t) {
  const n = ts[e];
  if (!n)
    throw new Error(`native type ${e} has no configuration`);
  const r = new my(n);
  return r.loadDataTransfer(t), r;
}
function Ai(e) {
  if (!e)
    return null;
  const t = Array.prototype.slice.call(e.types || []);
  return Object.keys(ts).filter((n) => {
    const r = ts[n];
    return r != null && r.matchesTypes ? r.matchesTypes.some(
      (o) => t.indexOf(o) > -1
    ) : !1;
  })[0] || null;
}
const vy = td(
  () => /firefox/i.test(navigator.userAgent)
), sd = td(
  () => !!window.safari
);
class jl {
  interpolate(t) {
    const { xs: n, ys: r, c1s: o, c2s: i, c3s: s } = this;
    let l = n.length - 1;
    if (t === n[l])
      return r[l];
    let c = 0, u = s.length - 1, d;
    for (; c <= u; ) {
      d = Math.floor(0.5 * (c + u));
      const f = n[d];
      if (f < t)
        c = d + 1;
      else if (f > t)
        u = d - 1;
      else
        return r[d];
    }
    l = Math.max(0, u);
    const p = t - n[l], h = p * p;
    return r[l] + o[l] * p + i[l] * h + s[l] * p * h;
  }
  constructor(t, n) {
    const { length: r } = t, o = [];
    for (let f = 0; f < r; f++)
      o.push(f);
    o.sort(
      (f, g) => t[f] < t[g] ? -1 : 1
    );
    const i = [], s = [];
    let l, c;
    for (let f = 0; f < r - 1; f++)
      l = t[f + 1] - t[f], c = n[f + 1] - n[f], i.push(l), s.push(c / l);
    const u = [
      s[0]
    ];
    for (let f = 0; f < i.length - 1; f++) {
      const g = s[f], m = s[f + 1];
      if (g * m <= 0)
        u.push(0);
      else {
        l = i[f];
        const y = i[f + 1], x = l + y;
        u.push(3 * x / ((x + y) / g + (x + l) / m));
      }
    }
    u.push(s[s.length - 1]);
    const d = [], p = [];
    let h;
    for (let f = 0; f < u.length - 1; f++) {
      h = s[f];
      const g = u[f], m = 1 / i[f], y = g + u[f + 1] - h - h;
      d.push((h - g - y) * m), p.push(y * m * m);
    }
    this.xs = t, this.ys = n, this.c1s = u, this.c2s = d, this.c3s = p;
  }
}
const xy = 1;
function ad(e) {
  const t = e.nodeType === xy ? e : e.parentElement;
  if (!t)
    return null;
  const { top: n, left: r } = t.getBoundingClientRect();
  return {
    x: r,
    y: n
  };
}
function Yr(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function by(e) {
  var t;
  return e.nodeName === "IMG" && (vy() || !(!((t = document.documentElement) === null || t === void 0) && t.contains(e)));
}
function ky(e, t, n, r) {
  let o = e ? t.width : n, i = e ? t.height : r;
  return sd() && e && (i /= window.devicePixelRatio, o /= window.devicePixelRatio), {
    dragPreviewWidth: o,
    dragPreviewHeight: i
  };
}
function wy(e, t, n, r, o) {
  const i = by(t), l = ad(i ? e : t), c = {
    x: n.x - l.x,
    y: n.y - l.y
  }, { offsetWidth: u, offsetHeight: d } = e, { anchorX: p, anchorY: h } = r, { dragPreviewWidth: f, dragPreviewHeight: g } = ky(i, t, u, d), m = () => {
    let j = new jl([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      c.y,
      // Align at the center
      c.y / d * g,
      // Dock to the bottom
      c.y + g - d
    ]).interpolate(h);
    return sd() && i && (j += (window.devicePixelRatio - 1) * g), j;
  }, y = () => new jl([
    0,
    0.5,
    1
  ], [
    // Dock to the left
    c.x,
    // Align at the center
    c.x / u * f,
    // Dock to the right
    c.x + f - u
  ]).interpolate(p), { offsetX: x, offsetY: b } = o, w = x === 0 || x, C = b === 0 || b;
  return {
    x: w ? x : y(),
    y: C ? b : m()
  };
}
class jy {
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
function Sy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Sl(e) {
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
class Cy {
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
    return Sl({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, n || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const t = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(t);
    return Sl({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: !1
    }, n || {});
  }
  isDraggingNativeItem() {
    const t = this.monitor.getItemType();
    return Object.keys(wl).some(
      (n) => wl[n] === t
    );
  }
  beginDragNativeItem(t, n) {
    this.clearCurrentDragSourceNode(), this.currentNativeSource = yy(t, n), this.currentNativeHandle = this.registry.addSource(t, this.currentNativeSource), this.actions.beginDrag([
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
      return i && ad(i) || null;
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
      const s = Yr(o);
      this.monitor.isDragging() && (this.actions.endDrag(), this.cancelHover()), this.actions.beginDrag(i || [], {
        publishSource: !1,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: s
      });
      const { dataTransfer: l } = o, c = Ai(l);
      if (this.monitor.isDragging()) {
        if (l && typeof l.setDragImage == "function") {
          const d = this.monitor.getSourceId(), p = this.sourceNodes.get(d), h = this.sourcePreviewNodes.get(d) || p;
          if (h) {
            const { anchorX: f, anchorY: g, offsetX: m, offsetY: y } = this.getCurrentSourcePreviewNodeOptions(), w = wy(p, h, s, {
              anchorX: f,
              anchorY: g
            }, {
              offsetX: m,
              offsetY: y
            });
            l.setDragImage(h, w.x, w.y);
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
      const { dataTransfer: l } = o, c = Ai(l);
      c && this.beginDragNativeItem(c, l);
    }, this.handleTopDragEnter = (o) => {
      const { dragEnterTargetIds: i } = this;
      if (this.dragEnterTargetIds = [], !this.monitor.isDragging())
        return;
      this.altKeyPressed = o.altKey, i.length > 0 && this.actions.hover(i, {
        clientOffset: Yr(o)
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
      this.altKeyPressed = o.altKey, this.lastClientOffset = Yr(o), this.scheduleHover(i), (i || []).some(
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
      } else Ai(o.dataTransfer) && o.preventDefault();
      this.enterLeaveCounter.reset();
    }, this.handleTopDrop = (o) => {
      const { dropTargetIds: i } = this;
      this.dropTargetIds = [], this.actions.hover(i, {
        clientOffset: Yr(o)
      }), this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      }), this.isDraggingNativeItem() ? this.endDragNativeItem() : this.monitor.isDragging() && this.actions.endDrag(), this.cancelHover();
    }, this.handleSelectStart = (o) => {
      const i = o.target;
      typeof i.dragDrop == "function" && (i.tagName === "INPUT" || i.tagName === "SELECT" || i.tagName === "TEXTAREA" || i.isContentEditable || (o.preventDefault(), i.dragDrop()));
    }, this.options = new jy(n, r), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new gy(this.isNodeInDocument);
  }
}
const _y = function(t, n, r) {
  return new Cy(t, n, r);
}, Js = $t("scanconf/runScan"), ld = $t("scanconf/runFullScan"), Wo = $t(
  "scanconf/showScanconfOperation"
), cd = $t("scanconf/loadUpdatedScanconf"), Go = $t("scanconf/loadPlaybook"), Ey = $t("http/sendHttpRequest"), Ty = $t("http/showHttpResponse"), Oy = $t("http/showHttpError"), $y = {
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
}, ud = sn({
  name: "scanconf",
  initialState: $y,
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
      Qr(e.playbook, t)[t.stageIndex] = n;
    },
    addStage: (e, {
      payload: { container: t, stage: n }
    }) => {
      Qr(e.playbook, t).push(n);
    },
    moveStage: (e, {
      payload: { location: t, to: n }
    }) => {
      Py(Qr(e.playbook, t), t.stageIndex, n);
    },
    removeStage: (e, { payload: t }) => {
      Qr(e.playbook, t).splice(t.stageIndex, 1);
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
      const s = o.type === "operation" ? e.playbook.operations[o.id].request : e.playbook.requests[o.id], l = fo(i), c = s.responses[i] ? i : l !== void 0 && s.responses[l] ? l : "default";
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
    e.addCase(Go, (t, { payload: { oas: n, playbook: r } }) => {
      var o, i, s, l, c;
      t.oas = n, t.playbook = r, t.servers = tp(n), t.selectedCredentialGroup = 0, t.selectedCredential = (i = Object.keys(((o = r == null ? void 0 : r.authenticationDetails) == null ? void 0 : o[0]) || {})) == null ? void 0 : i[0], t.selectedCredential !== void 0 && (t.selectedSubcredential = (l = Object.keys(
        (s = r == null ? void 0 : r.authenticationDetails[0][t.selectedCredential]) == null ? void 0 : s.methods
      )) == null ? void 0 : l[0]), t.selectedAuthorizationTest = (c = Object.keys((r == null ? void 0 : r.authorizationTests) || {})) == null ? void 0 : c[0];
    });
  }
});
function Qr(e, t) {
  return t.container === "operationScenarios" ? e.operations[t.operationId].scenarios[t.scenarioIndex].requests : t.container === "operationBefore" ? e.operations[t.operationId].before : t.container === "operationAfter" ? e.operations[t.operationId].after : t.container === "globalBefore" ? e.before : t.container === "globalAfter" ? e.after : t.container === "credential" ? e.authenticationDetails[t.group][t.credentialId].methods[t.subCredentialId].requests : null;
}
const {
  saveSettings: dd,
  saveEnvironment: fd,
  saveScanconf: KO,
  addCredential: Zs,
  removeCredential: ea,
  addStage: It,
  moveStage: Dt,
  removeStage: Pt,
  saveOperationReference: zt,
  saveCredential: ta,
  selectCredential: po,
  selectSubcredential: go,
  addAuthorizationTest: hd,
  saveAuthorizationTest: pd,
  removeAuthorizationTest: gd,
  selectAuthorizationTest: Cl,
  saveRequest: Ir,
  removeRequest: md,
  updateOperationAuthorizationTests: ns,
  customizeOperation: Iy,
  removeCustomizationForOperation: yd,
  createVariable: na
} = ud.actions, Dy = ud.reducer;
function Py(e, t, n) {
  const r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    const o = n < 0 ? e.length + n : n, [i] = e.splice(t, 1);
    e.splice(o, 0, i);
  }
}
const zy = {}, vd = sn({
  name: "generalError",
  initialState: zy,
  reducers: {
    showGeneralError: (e, t) => {
      e.error = t.payload;
    }
  }
}), Ay = ku, { showGeneralError: ot } = vd.actions, Ry = vd.reducer;
function Ko(e, t) {
  if (e.auth.length === 0)
    return t;
  const [n, ...r] = e.auth, o = $n(t), i = $n(o.results);
  return Ko({ auth: r }, i.auth[n].execution);
}
function Ut(e, t) {
  return $n(Ko(e, t));
}
function et(e, t) {
  return $n(Ut(e, t).results);
}
function _l(e, t) {
  const n = e.auth.slice(0, -1);
  return $n($n(Ko({ auth: n }, t)).results);
}
const xd = {
  "playbook-started": function(e, t, n) {
    Ko(e, t).push({
      name: n.name,
      status: "pending",
      results: []
    });
  },
  "request-started": function(e, t, n) {
    Ut(e, t).results.push({
      ref: n.ref,
      auth: {},
      variablesAssigned: [],
      status: "pending"
    });
  },
  "auth-started": function(e, t, n) {
    et(e, t).auth[n.name] = {
      execution: []
    }, e.auth.push(n.name);
  },
  "auth-finished": function(e, t, n) {
    e.auth.pop();
  },
  "auth-aborted": function(e, t, n) {
    const r = e.auth.pop();
    et(e, t).auth[r].error = n.error;
  },
  "playbook-finished": function(e, t, n) {
    Ut(e, t).status = "success";
  },
  "playbook-aborted": function(e, t, n) {
    const r = Ut(e, t);
    r.status = "failure", r.error = n.error;
  },
  "payload-variables-substituted": function(e, t, n) {
    et(e, t).variablesReplaced = {
      stack: n.stack,
      found: n.found,
      missing: n.missing
    };
  },
  "credential-variables-substituted": function(e, t, n) {
    const r = _l(e, t);
    r.auth[n.name].result = n.result, r.auth[n.name].variables = {
      missing: n.missing,
      found: n.found,
      stack: n.stack
    };
  },
  "credential-retrieved-from-cache": function(e, t, n) {
    const r = _l(e, t);
    r.auth[n.name].result = n.result;
  },
  "http-request-prepared": function(e, t, n) {
    const r = et(e, t);
    r.httpRequest = n.request, r.operationId = n.operationId;
  },
  "http-request-prepare-error": function(e, t, n) {
    const r = et(e, t);
    r.httpRequestPrepareError = n.error, r.status = "failure", Ut(e, t).status = "failure";
  },
  "http-response-received": function(e, t, n) {
    const r = et(e, t);
    r.httpResponse = n.response, r.status = "success";
  },
  "http-error-received": function(e, t, n) {
    const r = et(e, t);
    r.httpError = n.error, r.status = "failure", Ut(e, t).status = "failure";
  },
  "variables-assigned": function(e, t, n) {
    et(e, t).variablesAssigned.push(...n.assignments);
  },
  "response-processing-error": function(e, t, n) {
    const r = et(e, t);
    r.responseProcessingError = n.error, r.status = "failure", Ut(e, t).status = "failure";
  }
};
function Xo({
  tryCurrent: e,
  tryResult: t
}, n) {
  xd[n.event](e, t, n);
}
function Yo({
  mockCurrent: e,
  mockResult: t
}, n) {
  xd[n.event](e, t, n);
}
function $n(e) {
  return e[e.length - 1];
}
function Fe(e, t) {
  return e.filter((n) => n.name === t).pop();
}
const Ny = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: []
}, bd = sn({
  name: "auth",
  initialState: Ny,
  reducers: {
    startTryAuthentication: (e, { payload: t }) => {
    },
    resetTryAuthentication: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addTryAuthenticationStep: (e, { payload: t }) => {
      Xo(e, t);
    },
    resetMockAuthRequestsExecution: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [];
    },
    addMockAuthRequestsExecutionStep: (e, { payload: t }) => {
      Yo(e, t);
    }
  },
  extraReducers: (e) => {
    e.addMatcher(
      Fn(
        po,
        go,
        ta,
        Zs,
        ea
      ),
      (t, n) => {
        t.tryCurrent = { auth: [] }, t.tryResult = [];
      }
    );
  }
}), {
  startTryAuthentication: kd,
  resetTryAuthentication: My,
  addTryAuthenticationStep: Ri,
  resetMockAuthRequestsExecution: qy,
  addMockAuthRequestsExecutionStep: Fy
} = bd.actions, Ly = bd.reducer, By = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  selected: "before"
}, wd = sn({
  name: "global",
  initialState: By,
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
      Xo(e, t);
    },
    resetMockGlobal: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [];
    },
    addMockGlobalStep: (e, { payload: t }) => {
      Yo(e, t);
    }
  }
}), {
  selectGlobal: jd,
  startTryGlobal: rs,
  resetTryGlobal: Hy,
  addTryGlobalStep: Uy,
  resetMockGlobal: Vy,
  addMockGlobalStep: Wy
} = wd.actions, Gy = wd.reducer, Ky = {
  mockCurrent: { auth: [] },
  mockResult: [],
  tryCurrent: { auth: [] },
  tryResult: [],
  scenarioId: 0
}, Sd = sn({
  name: "operations",
  initialState: Ky,
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
      Yo(e, t);
    },
    startTryExecution: (e, { payload: t }) => {
    },
    resetTryExecution: (e) => {
      e.tryCurrent = { auth: [] }, e.tryResult = [];
    },
    addTryExecutionStep: (e, { payload: t }) => {
      Xo(e, t);
    }
  },
  extraReducers: (e) => {
    e.addCase(Wo, (t, { payload: { oas: n, path: r, method: o } }) => {
      t.operationId = void 0;
    });
  }
}), {
  setOperationId: os,
  setScenarioId: Cd,
  resetMockOperationExecution: Xy,
  startTryExecution: _d,
  addMockOperationExecutionStep: Yy,
  resetTryExecution: Qy,
  addTryExecutionStep: Jy
} = Sd.actions, Zy = Sd.reducer, ev = {
  tryCurrent: { auth: [] },
  tryResult: [],
  mockCurrent: { auth: [] },
  mockResult: [],
  mockMissingVariables: []
}, Ed = sn({
  name: "requests",
  initialState: ev,
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
      Xo(e, t);
    },
    resetMockRequestExecution: (e) => {
      e.mockCurrent = { auth: [] }, e.mockResult = [], e.mockMissingVariables = [];
    },
    addMockRequestExecutionStep: (e, { payload: t }) => {
      Yo(e, t), (t.event === "payload-variables-substituted" || t.event === "credential-variables-substituted") && e.mockMissingVariables.push(...t.missing.map((n) => n.name));
    }
  },
  extraReducers: (e) => {
    e.addCase(Wo, (t, { payload: { oas: n, path: r, method: o } }) => {
      const i = Us(n, r, o), s = _u(i == null ? void 0 : i.operationId, r, o);
      t.ref = { id: s, type: "operation" };
    });
  }
}), {
  setRequestId: Yt,
  resetExecuteRequest: tv,
  addExecutionStep: nv,
  executeRequest: ra,
  resetMockRequestExecution: rv,
  addMockRequestExecutionStep: ov
} = Ed.actions, iv = Ed.reducer, sv = {
  changes: [],
  scanconf: "",
  oas: {
    openapi: "3.0.0",
    info: { title: "", version: "0.0" },
    paths: { "/": { get: { responses: {} } } }
  },
  updating: !1
}, Td = sn({
  name: "scanconfUpdate",
  initialState: sv,
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
}), { updateScanconf: Od, showChanges: av, skipScanconfUpdate: $d } = Td.actions, lv = Td.reducer, cv = {
  theme: Mh,
  client: Bp,
  scanconf: Dy,
  scanconfUpdate: lv,
  operations: Zy,
  requests: iv,
  auth: Ly,
  router: qh,
  env: rp,
  prefs: hp,
  config: dp,
  global: Gy,
  generalError: Ry,
  confirmationDialog: Fh
}, uv = {
  changeTheme: Ah,
  showHttpError: Oy,
  showHttpResponse: Ty,
  showScanconfOperation: Wo,
  loadUpdatedScanconf: cd,
  loadEnv: np,
  loadConfig: up,
  loadPrefs: fp,
  showGeneralError: ot
}, dv = (e, t) => zh({
  reducer: cv,
  middleware: (n) => n().prepend(e.middleware).concat(Nh),
  preloadedState: {
    theme: t
  }
}), re = () => Rh(), U = ku;
function xe({ isOpen: e, setOpen: t, ...n }) {
  return t !== void 0 && e !== void 0 ? Id({ ...n, isOpen: e, setOpen: t }) : fv({ ...n });
}
function fv({
  defaultOpen: e,
  ...t
}) {
  const [n, r] = _.useState(e !== void 0 ? e : !0);
  return Id({ ...t, isOpen: n, setOpen: r });
}
function Id({
  isOpen: e,
  setOpen: t,
  title: n,
  count: r,
  menu: o,
  children: i
}) {
  return /* @__PURE__ */ a.jsxs(hv, { children: [
    /* @__PURE__ */ a.jsxs(
      pv,
      {
        onClick: (s) => {
          s.preventDefault(), s.stopPropagation(), t(!e);
        },
        children: [
          e ? /* @__PURE__ */ a.jsx(Gp, {}) : /* @__PURE__ */ a.jsx(Er, {}),
          /* @__PURE__ */ a.jsxs(gv, { children: [
            typeof n == "string" ? /* @__PURE__ */ a.jsx(mv, { children: n }) : n,
            !!r && /* @__PURE__ */ a.jsx(bv, { children: r }),
            o && /* @__PURE__ */ a.jsx(yv, { children: o })
          ] })
        ]
      }
    ),
    e && /* @__PURE__ */ a.jsxs(vv, { children: [
      /* @__PURE__ */ a.jsx(xv, {}),
      /* @__PURE__ */ a.jsx("div", { children: i })
    ] })
  ] });
}
const hv = k.div`
  margin-top: 8px;
  margin-bottom: 8px;
`, pv = k.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  margin-bottom: 8px;
  & > svg {
    fill: var(${v.foreground});
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
`, gv = k.div`
  flex: 1;
  display: flex;
  gap: 8px;
`, mv = k.div`
  font-size: 14px;
  font-weight: 600;
`, yv = k.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`, vv = k.div`
  display: flex;
  flex-direction: row;
  > div:last-child {
    flex: 1;
    margin-left: 8px;
  }
`, xv = k.div`
  width: 2px;
  background-color: var(${v.border});
  margin: 0px 6px;
`, bv = k.span`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 2px 4px;
`;
function kv({ title: e, icon: t }) {
  return /* @__PURE__ */ a.jsxs(wv, { children: [
    t,
    /* @__PURE__ */ a.jsx("div", { children: e }),
    /* @__PURE__ */ a.jsx("hr", {})
  ] });
}
const wv = k.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  opacity: 0.8;
  font-size: 90%;

  & > svg {
    fill: var(${v.foreground});
  }

  & > hr {
    flex: 1;
    border: none;
    border-top: 1px solid var(${v.border});
  }
`;
function fr({
  message: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a.jsxs(Sv, { ...n, children: [
    /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(Qe, {}) }),
      /* @__PURE__ */ a.jsx("span", { children: e })
    ] }),
    t && /* @__PURE__ */ a.jsx("div", { children: t })
  ] });
}
const jv = k.div`
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
      fill: var(${v.foreground});
    }
  }
  border: 1px solid var(${v.border});
  border-radius: 2px;
  color: var(${v.foreground});
  padding: 8px;
  gap: 8px;
`, Sv = k(jv)`
  border: 1px solid var(${v.errorBorder});
  background-color: var(${v.errorBackground});
  color: var(${v.errorForeground});
  > div:first-child {
    > div {
      display: flex;
      align-items: center;
    }
    > div > svg {
      fill: var(${v.errorForeground});
    }
  }
`;
var oa = "ContextMenu", [Cv, XO] = Lh(oa, [
  Du
]), we = Du(), [_v, Dd] = Cv(oa), Pd = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: i = !0 } = e, [s, l] = _.useState(!1), c = we(t), u = Hh(r), d = _.useCallback(
    (p) => {
      l(p), u(p);
    },
    [u]
  );
  return /* @__PURE__ */ a.jsx(
    _v,
    {
      scope: t,
      open: s,
      onOpenChange: d,
      modal: i,
      children: /* @__PURE__ */ a.jsx(
        Ep,
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
Pd.displayName = oa;
var zd = "ContextMenuTrigger", Ad = _.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, i = Dd(zd, n), s = we(n), l = _.useRef({ x: 0, y: 0 }), c = _.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...l.current })
    }), u = _.useRef(0), d = _.useCallback(
      () => window.clearTimeout(u.current),
      []
    ), p = (h) => {
      l.current = { x: h.clientX, y: h.clientY }, i.onOpenChange(!0);
    };
    return _.useEffect(() => d, [d]), _.useEffect(() => void (r && d()), [r, d]), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(pp, { ...s, virtualRef: c }),
      /* @__PURE__ */ a.jsx(
        Bh.span,
        {
          "data-state": i.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : nr(e.onContextMenu, (h) => {
            d(), p(h), h.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : nr(
            e.onPointerDown,
            Jr((h) => {
              d(), u.current = window.setTimeout(() => p(h), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : nr(e.onPointerMove, Jr(d)),
          onPointerCancel: r ? e.onPointerCancel : nr(e.onPointerCancel, Jr(d)),
          onPointerUp: r ? e.onPointerUp : nr(e.onPointerUp, Jr(d))
        }
      )
    ] });
  }
);
Ad.displayName = zd;
var Ev = "ContextMenuPortal", Rd = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = we(t);
  return /* @__PURE__ */ a.jsx(Tp, { ...r, ...n });
};
Rd.displayName = Ev;
var Nd = "ContextMenuContent", Md = _.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Dd(Nd, n), i = we(n), s = _.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      gp,
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
Md.displayName = Nd;
var Tv = "ContextMenuGroup", Ov = _.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ a.jsx(mp, { ...o, ...r, ref: t });
  }
);
Ov.displayName = Tv;
var $v = "ContextMenuLabel", Iv = _.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ a.jsx(yp, { ...o, ...r, ref: t });
  }
);
Iv.displayName = $v;
var Dv = "ContextMenuItem", qd = _.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ a.jsx(vp, { ...o, ...r, ref: t });
  }
);
qd.displayName = Dv;
var Pv = "ContextMenuCheckboxItem", zv = _.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ a.jsx(xp, { ...o, ...r, ref: t });
});
zv.displayName = Pv;
var Av = "ContextMenuRadioGroup", Rv = _.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ a.jsx(bp, { ...o, ...r, ref: t });
});
Rv.displayName = Av;
var Nv = "ContextMenuRadioItem", Mv = _.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ a.jsx(kp, { ...o, ...r, ref: t });
});
Mv.displayName = Nv;
var qv = "ContextMenuItemIndicator", Fv = _.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ a.jsx(wp, { ...o, ...r, ref: t });
});
Fv.displayName = qv;
var Lv = "ContextMenuSeparator", Bv = _.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ a.jsx(jp, { ...o, ...r, ref: t });
});
Bv.displayName = Lv;
var Hv = "ContextMenuArrow", Uv = _.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = we(n);
    return /* @__PURE__ */ a.jsx(Sp, { ...o, ...r, ref: t });
  }
);
Uv.displayName = Hv;
var Vv = "ContextMenuSubTrigger", Wv = _.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ a.jsx(Cp, { ...o, ...r, ref: t });
});
Wv.displayName = Vv;
var Gv = "ContextMenuSubContent", Kv = _.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = we(n);
  return /* @__PURE__ */ a.jsx(
    _p,
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
Kv.displayName = Gv;
function Jr(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var Xv = Pd, Yv = Ad, Qv = Rd, Jv = Md, Zv = qd;
function ex({
  children: e,
  menu: t
}) {
  return /* @__PURE__ */ a.jsxs(Xv, { children: [
    /* @__PURE__ */ a.jsx(Yv, { asChild: !0, className: "menu", children: e }),
    /* @__PURE__ */ a.jsx(Qv, { children: /* @__PURE__ */ a.jsx(tx, { children: t }) })
  ] });
}
const tx = k(Jv)`
  margin: 4px;
  background-color: var(${v.dropdownBackground});
  border: 1px solid var(${v.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${v.computedTwo});
`, El = k(Zv)`
  margin: 2px;
  color: var(${v.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${v.listActiveSelectionBackground});
    color: var(${v.listActiveSelectionForeground});
  }
  > svg {
    fill: var(${v.foreground});
  }
`;
function Dr({
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
  const d = Nu({
    values: t,
    resolver: i !== void 0 ? Up(i) : void 0
  }), [p, h] = _.useState(!1), f = c ?? p, g = u ?? h;
  return _.useEffect(() => {
    f && d.reset();
  }, [f]), /* @__PURE__ */ a.jsxs(Ms, { open: f, onOpenChange: g, children: [
    n && /* @__PURE__ */ a.jsx(qs, { asChild: !0, children: n }),
    /* @__PURE__ */ a.jsxs(Fs, { children: [
      /* @__PURE__ */ a.jsx(rx, {}),
      /* @__PURE__ */ a.jsx(ox, { $noOverflow: l, children: /* @__PURE__ */ a.jsx(Mu, { ...d, children: /* @__PURE__ */ a.jsxs(
        nx,
        {
          onSubmit: d.handleSubmit((m) => {
            e(m), g(!1);
          }),
          children: [
            r && /* @__PURE__ */ a.jsx(Ls, { children: r }),
            o && /* @__PURE__ */ a.jsx(Bs, { children: o }),
            /* @__PURE__ */ a.jsx(ix, { children: s }),
            /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", marginTop: 25, justifyContent: "flex-end", gap: 4 }, children: [
              /* @__PURE__ */ a.jsx(wu, { type: "submit", children: "Ok" }),
              /* @__PURE__ */ a.jsx(Hs, { asChild: !0, children: /* @__PURE__ */ a.jsx(ju, { children: "Cancel" }) })
            ] })
          ]
        }
      ) }) })
    ] })
  ] });
}
const nx = k.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, rx = k(Rs)`
  background-color: var(${v.computedTwo});
  position: fixed;
  inset: 0;
`, ox = k(Ns)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  ${({ $noOverflow: e }) => !e && "overflow-y: auto;"}
  background-color: var(${v.background});
  color: var(${v.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, ix = k.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
`;
function oe({
  label: e,
  name: t,
  disabled: n,
  password: r,
  description: o
}) {
  const {
    field: i,
    fieldState: { error: s, invalid: l }
  } = J({
    name: t
  });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(sx, { children: /* @__PURE__ */ a.jsxs(ax, { invalid: l, children: [
      /* @__PURE__ */ a.jsxs(cx, { children: [
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("span", { children: e }),
          " ",
          n && /* @__PURE__ */ a.jsx("span", { children: "(read only)" })
        ] }),
        o && /* @__PURE__ */ a.jsx(Hn, { children: o })
      ] }),
      /* @__PURE__ */ a.jsx(lx, { ...i, disabled: n, type: r ? "password" : "text" })
    ] }) }),
    s && /* @__PURE__ */ a.jsx(ux, { children: s == null ? void 0 : s.message })
  ] });
}
const sx = k.div`
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
`, ax = k.div`
  height: 40px;
  background-color: var(${v.inputBackground});
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  ${({ invalid: e }) => e ? `border: 1px solid var(${v.errorBorder});` : `border: 1px solid var(${v.border});
         &:focus-within {
           border: 1px solid var(${v.focusBorder});
         }
      `}
`, lx = k.input`
  background: transparent;
  line-height: 20px;
  border: none;
  padding: 0;
  color: var(${v.foreground});
  &::placeholder {
    color: var(${v.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, cx = k.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${v.inputPlaceholderForeground});
`, ux = k.div`
  color: var(${v.errorForeground});
`;
function dx({
  open: e,
  onOpenChange: t,
  onCreateVariable: n,
  jsonPointer: r
}) {
  const o = {
    varname: "",
    jsonPointer: r
  }, i = [], s = Bn({
    varname: Y().min(1).regex(Tn(), {
      message: On
    }).refine((c) => !i.includes(c), {
      message: "Already exists"
    }),
    jsonPointer: Y().min(1)
  }), l = (c) => {
    n(c.varname, c.jsonPointer);
  };
  return /* @__PURE__ */ a.jsx(
    Dr,
    {
      title: "Create variable",
      defaultValues: o,
      schema: s,
      onSubmit: l,
      open: e,
      onOpenChange: t,
      children: /* @__PURE__ */ a.jsxs(fx, { children: [
        /* @__PURE__ */ a.jsx(oe, { label: "Name", name: "varname" }),
        /* @__PURE__ */ a.jsx(Vp, { label: "JSON Pointer", name: "jsonPointer" })
      ] })
    }
  );
}
const fx = k.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function Fd({
  value: e,
  menuHandlers: t
}) {
  return /* @__PURE__ */ a.jsx(ia, { path: [], value: e, trailingComma: !1, menuHandlers: t });
}
function ia({
  value: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  return typeof e == "object" ? Array.isArray(e) ? /* @__PURE__ */ a.jsx(
    px,
    {
      array: e,
      path: r,
      menuHandlers: n,
      trailingComma: t
    }
  ) : /* @__PURE__ */ a.jsx(
    hx,
    {
      object: e,
      path: r,
      menuHandlers: n,
      trailingComma: t
    }
  ) : /* @__PURE__ */ a.jsx(
    gx,
    {
      value: e,
      path: r,
      menuHandlers: n,
      trailingComma: t
    }
  );
}
function hx({
  object: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  if (e === null)
    return /* @__PURE__ */ a.jsx("code", { children: "null" });
  const o = Object.entries(e);
  return o.length === 0 ? /* @__PURE__ */ a.jsx("code", { children: t ? "{}," : "{}" }) : /* @__PURE__ */ a.jsxs(Ld, { children: [
    /* @__PURE__ */ a.jsx("code", { children: "{" }),
    /* @__PURE__ */ a.jsx("div", { style: { marginLeft: "20px" }, children: o.map(([i, s], l, c) => /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("code", { children: `"${i}": ` }),
      /* @__PURE__ */ a.jsx(
        ia,
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
function px({
  array: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  return /* @__PURE__ */ a.jsxs(Ld, { children: [
    /* @__PURE__ */ a.jsx("code", { children: "[" }),
    /* @__PURE__ */ a.jsx("div", { style: { marginLeft: "20px" }, children: e.map((o, i) => /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
      ia,
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
function gx({
  value: e,
  trailingComma: t,
  menuHandlers: n,
  path: r
}) {
  const o = JSON.stringify(e), [i, s] = _.useState(!1), l = /* @__PURE__ */ a.jsxs(mx, { children: [
    /* @__PURE__ */ a.jsx("span", { children: o }),
    t && /* @__PURE__ */ a.jsx("span", { children: "," })
  ] });
  if (n) {
    const c = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(El, { onSelect: () => n.onCopy(o), children: [
        /* @__PURE__ */ a.jsx(dg, {}),
        "Copy"
      ] }),
      /* @__PURE__ */ a.jsxs(El, { onSelect: () => s(!0), children: [
        /* @__PURE__ */ a.jsx(Lu, {}),
        "Create variable"
      ] })
    ] }), u = ue.joinJsonPointer(r);
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        dx,
        {
          open: i,
          onOpenChange: s,
          jsonPointer: u,
          onCreateVariable: n.onCreateVariable
        }
      ),
      /* @__PURE__ */ a.jsx(ex, { menu: c, children: l })
    ] });
  } else
    return l;
}
const Ld = k.div`
  code {
    color: var(${v.foreground});
    background-color: var(${v.background});
    border: none;
    padding: none;
  }
`, mx = k.span`
  & > span:first-child {
    &:hover {
      background-color: var(${v.computedOne});
    }
  }
`;
function yx({
  request: e,
  requestRef: t,
  statusCode: n
}) {
  return /* @__PURE__ */ a.jsx(kx, { children: xx(e) ? /* @__PURE__ */ a.jsx(vx, { body: e.body, requestRef: t, statusCode: n }) : /* @__PURE__ */ a.jsx(bx, { children: (e == null ? void 0 : e.body) !== void 0 && `${e.body}` }) });
}
function vx({
  body: e,
  requestRef: t,
  statusCode: n
}) {
  const r = re();
  try {
    return /* @__PURE__ */ a.jsx(
      Fd,
      {
        value: JSON.parse(e),
        menuHandlers: {
          onCopy: (o) => {
            navigator.clipboard.writeText(o);
          },
          onCreateVariable: (o, i) => {
            t !== void 0 && n !== void 0 && r(
              na({
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
function xx(e) {
  for (const [t, n] of Object.entries(e.headers))
    if (t.toLowerCase() === "content-type" && n.includes("json"))
      return !0;
  return !1;
}
const bx = k.div``, kx = k.div`
  padding: 4px 8px;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  max-height: 400px;
  overflow-y: auto;
`;
function wx({ headers: e }) {
  return /* @__PURE__ */ a.jsxs(jx, { children: [
    /* @__PURE__ */ a.jsxs(Sx, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" })
    ] }),
    Object.entries(e).map(([t, n], r) => /* @__PURE__ */ a.jsxs(Cx, { children: [
      /* @__PURE__ */ a.jsx("div", { children: t }),
      /* @__PURE__ */ a.jsx("div", { children: n })
    ] }, r))
  ] });
}
const jx = k.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`, Sx = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Cx = k.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function _x({
  operationId: e,
  request: t,
  defaultCollapsed: n,
  requestRef: r,
  statusCode: o
}) {
  return /* @__PURE__ */ a.jsx(Ex, { children: /* @__PURE__ */ a.jsxs(an, { defaultCollapsed: n, children: [
    /* @__PURE__ */ a.jsxs(Un, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ a.jsx(
        Fu,
        {
          style: {
            width: 14,
            minWidth: 14,
            height: 14,
            minHeight: 14,
            fill: `var(${v.foreground})`
          }
        }
      ),
      /* @__PURE__ */ a.jsx(Tx, { children: t.method }),
      /* @__PURE__ */ a.jsx(Ox, { children: t.url })
    ] }),
    /* @__PURE__ */ a.jsx(
      ct,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ a.jsx(Tl, { children: /* @__PURE__ */ a.jsx(yx, { request: t, requestRef: r, statusCode: o }) }),
            disabled: t.body === void 0
          },
          {
            id: "headers",
            title: "Headers",
            content: /* @__PURE__ */ a.jsx(Tl, { children: /* @__PURE__ */ a.jsx(wx, { headers: t.headers }) })
          }
        ]
      }
    )
  ] }) });
}
const Ex = k.div`
  > div {
    background-color: var(${v.background});
  }
`, Tx = k.div`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
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
`, Ox = k.div`
  line-break: anywhere;
`, Tl = k.div`
  padding: 8px;
`;
function $x({
  name: e,
  value: t,
  variables: n,
  hasMissing: r
}) {
  var o, i;
  return /* @__PURE__ */ a.jsxs(an, { children: [
    /* @__PURE__ */ a.jsx(Un, { style: { gap: "8px" }, children: /* @__PURE__ */ a.jsxs(ho, { children: [
      /* @__PURE__ */ a.jsx(Lu, {}),
      "Credential value",
      r && /* @__PURE__ */ a.jsx(Mo, { style: { fill: `var(${v.errorForeground})` } }),
      r && /* @__PURE__ */ a.jsxs(Ix, { children: [
        "Missing ",
        (i = (o = n == null ? void 0 : n.missing) == null ? void 0 : o.map((s) => `{{${s.name}}}`)) == null ? void 0 : i.join(", ")
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(Dx, { children: t })
  ] });
}
const Ix = k.div`
  color: var(${v.errorForeground});
  border-radius: 4px;
`, Dx = k.div`
  font-family: monospace;
  padding: 8px;
  line-break: anywhere;
`;
function Px({
  results: e
}) {
  const t = Rx(e);
  return /* @__PURE__ */ a.jsx(zx, { children: /* @__PURE__ */ a.jsxs(an, { children: [
    /* @__PURE__ */ a.jsxs(Un, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ a.jsx(ho, { children: /* @__PURE__ */ a.jsx(gg, {}) }),
      t.map((n, r) => /* @__PURE__ */ a.jsxs(ho, { children: [
        n.name,
        Mx(n)
      ] }, r))
    ] }),
    /* @__PURE__ */ a.jsx(Ax, { children: t.map((n, r) => /* @__PURE__ */ a.jsxs(St.Fragment, { children: [
      n.execution[0] && /* @__PURE__ */ a.jsx(Bd, { playbook: n.execution[0] }),
      n.value && /* @__PURE__ */ a.jsx(
        $x,
        {
          name: n.name,
          value: n.value,
          variables: n.variables,
          hasMissing: n.hasMissingVariables
        }
      ),
      n.error && /* @__PURE__ */ a.jsx(fr, { message: n.error })
    ] }, r)) })
  ] }) });
}
const zx = k.div`
  > div {
    background-color: var(${v.background});
  }
`, Ax = k.div`
  padding: 8px;
  display: flex;
  flex-flow column;
  gap: 8px;
`;
function Rx(e) {
  return Object.entries(e).map(([t, n]) => {
    var o, i;
    const r = (i = (o = n == null ? void 0 : n.variables) == null ? void 0 : o.missing) == null ? void 0 : i.length;
    return {
      name: t,
      value: n.result,
      error: n.error,
      execution: n.execution,
      status: Nx(n),
      hasMissingVariables: r !== void 0 && r > 0,
      variables: n.variables
    };
  });
}
function Nx(e) {
  var n;
  return e.error !== void 0 ? "failure" : ((n = e.execution) == null ? void 0 : n.some((r) => r.status === "pending")) ? "pending" : e.result !== void 0 ? "success" : "failure";
}
function Mx({
  status: e,
  hasMissingVariables: t
}) {
  return e === "failure" || t ? /* @__PURE__ */ a.jsx(Mo, { style: { fill: `var(${v.errorForeground})` } }) : e === "pending" ? /* @__PURE__ */ a.jsx(Fx, {}) : /* @__PURE__ */ a.jsx(Bu, {});
}
const qx = Su`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, Fx = k(Au)`
  animation: ${qx} 2s infinite linear;
  transition: width 0.2s linear;
`;
function Lx({
  response: e,
  requestRef: t,
  statusCode: n
}) {
  return /* @__PURE__ */ a.jsx(Hx, { children: Vx(e) ? /* @__PURE__ */ a.jsx(Bx, { body: e.body, requestRef: t, statusCode: n }) : /* @__PURE__ */ a.jsx(Ux, { children: e == null ? void 0 : e.body }) });
}
function Bx({
  body: e,
  requestRef: t,
  statusCode: n
}) {
  const r = re();
  try {
    return /* @__PURE__ */ a.jsx(
      Fd,
      {
        value: JSON.parse(e),
        menuHandlers: {
          onCopy: (o) => {
            navigator.clipboard.writeText(o);
          },
          onCreateVariable: (o, i) => {
            t !== void 0 && n !== void 0 && r(
              na({
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
const Hx = k.div`
  white-space: pre-wrap;
  word-break: break-all;
  font-family: monospace;
  padding: 8px;
  max-height: 400px;
  overflow-y: auto;
`, Ux = k.div``;
function Vx(e) {
  for (const [t, n] of e.headers)
    if (t.toLowerCase() === "content-type" && n.includes("json"))
      return !0;
  return !1;
}
function Wx({ headers: e }) {
  return /* @__PURE__ */ a.jsxs(Gx, { children: [
    /* @__PURE__ */ a.jsxs(Kx, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" })
    ] }),
    e.map(([t, n], r) => /* @__PURE__ */ a.jsxs(Xx, { children: [
      /* @__PURE__ */ a.jsx("div", { children: t }),
      /* @__PURE__ */ a.jsx("div", { children: n })
    ] }, r))
  ] });
}
const Gx = k.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 2fr 5fr;
`, Kx = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, Xx = k.div`
  display: contents;
  > div {
    padding: 4px 8px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: monospace;
  }
`;
function Yx({ assignment: e }) {
  return /* @__PURE__ */ a.jsxs(tb, { children: [
    /* @__PURE__ */ a.jsxs(nb, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsx(rb, { children: e.flatMap((t, n) => Qx(t.id, t.assignments, n)) })
  ] });
}
function Qx(e, t, n) {
  return t.map((r, o) => /* @__PURE__ */ a.jsx(St.Fragment, { children: r.error !== void 0 ? Zx(e, r) : Jx(e, r) }, `${n}-${o}`));
}
function Jx(e, t) {
  return /* @__PURE__ */ a.jsxs(St.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { children: t.name }),
    /* @__PURE__ */ a.jsx("div", { children: `${t.value}` }),
    /* @__PURE__ */ a.jsx("div", {})
  ] });
}
function Zx(e, t) {
  return /* @__PURE__ */ a.jsxs(St.Fragment, { children: [
    /* @__PURE__ */ a.jsx("div", { children: t.name }),
    /* @__PURE__ */ a.jsx("div", { children: eb(t.assignment, t.error) }),
    /* @__PURE__ */ a.jsx(ob, { children: /* @__PURE__ */ a.jsx(Qe, {}) })
  ] });
}
function eb(e, t) {
  return e.in == "body" ? `${e.path.type === "jsonPath" ? "JsonPath" : "JsonPointer"} "${e.path.value}" is ${t} in the ${e.from} ${e.in}` : `Name "${e.name}" is ${t} in the ${e.from} ${e.in}`;
}
const tb = k.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 10em 1fr 2em;
  row-gap: 4px;
`, nb = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, rb = k.div`
  display: contents;
  > div {
    padding-left: 8px;
    padding-right: 8px;
    line-break: anywhere;
  }
`, ob = k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  & > svg {
    fill: var(${v.errorForeground});
    padding-right: 4px;
  }
`;
function ib({
  response: e,
  variables: t,
  requestRef: n
}) {
  const r = ab(t);
  return /* @__PURE__ */ a.jsx(sb, { children: /* @__PURE__ */ a.jsxs(an, { children: [
    /* @__PURE__ */ a.jsxs(Un, { style: { gap: "8px" }, children: [
      /* @__PURE__ */ a.jsx(
        Fu,
        {
          style: {
            width: 14,
            minWidth: 14,
            height: 14,
            minHeight: 14,
            fill: `var(${v.foreground})`,
            transform: "rotate(180deg)"
          }
        }
      ),
      /* @__PURE__ */ a.jsxs(ho, { children: [
        `${e == null ? void 0 : e.statusCode} ${e == null ? void 0 : e.statusMessage}`,
        r && /* @__PURE__ */ a.jsx(
          Qe,
          {
            style: { fill: `var(${v.errorForeground})` }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      ct,
      {
        tabs: [
          {
            id: "body",
            title: "Body",
            content: /* @__PURE__ */ a.jsx(
              Lx,
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
            content: /* @__PURE__ */ a.jsx(Wx, { headers: e == null ? void 0 : e.headers })
          },
          {
            id: "variables-assigned",
            title: "Variables",
            content: /* @__PURE__ */ a.jsx(Yx, { assignment: t || [] }),
            counter: Ol(t),
            counterKind: r ? "error" : "normal",
            disabled: t === void 0 || Ol(t) === 0
          }
        ]
      }
    )
  ] }) });
}
const sb = k.div`
  > div {
    background-color: var(${v.background});
  }
`;
function Ol(e) {
  return e !== void 0 ? e.map((t) => t.assignments.length).reduce((t, n) => t = t + n, 0) : 0;
}
function ab(e) {
  return !!(e != null && e.map((t) => t.assignments.some((n) => n.error !== void 0)).some((t) => t));
}
function lb({ operation: e }) {
  var t;
  return /* @__PURE__ */ a.jsxs(cb, { children: [
    e.ref && /* @__PURE__ */ a.jsx(
      kv,
      {
        icon: ub(e.status),
        title: `${e.ref.type}/${e.ref.id}`
      }
    ),
    Object.keys(e.auth).length > 0 && /* @__PURE__ */ a.jsx(Px, { results: e.auth }),
    e.httpRequestPrepareError !== void 0 && /* @__PURE__ */ a.jsx(fr, { message: "Failed to prepare HTTP request for sending", children: e.httpRequestPrepareError }),
    e.httpRequest !== void 0 && /* @__PURE__ */ a.jsx(
      _x,
      {
        operationId: e.operationId,
        request: e.httpRequest,
        statusCode: (t = e == null ? void 0 : e.httpResponse) == null ? void 0 : t.statusCode,
        requestRef: e.ref
      }
    ),
    e.httpError !== void 0 && /* @__PURE__ */ a.jsxs(fr, { message: "HTTP Error", children: [
      e.httpError.code,
      " ",
      e.httpError.message
    ] }),
    e.httpResponse !== void 0 && e.httpResponse !== null && /* @__PURE__ */ a.jsx(
      ib,
      {
        response: e.httpResponse,
        variables: e.variablesAssigned,
        requestRef: e.ref
      }
    ),
    e.responseProcessingError !== void 0 && /* @__PURE__ */ a.jsx(fr, { message: e.responseProcessingError })
  ] });
}
const cb = k.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;
function ub(e) {
  return e === "success" ? /* @__PURE__ */ a.jsx(ug, {}) : e === "failure" ? /* @__PURE__ */ a.jsx(Kp, { style: { fill: `var(${v.errorForeground})` } }) : /* @__PURE__ */ a.jsx(fb, {});
}
const db = Su`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, fb = k(Au)`
  animation: ${db} 2s infinite linear;
  transition: width 0.2s linear;
`;
function Bd({
  playbook: e,
  collapsible: t
}) {
  const [n, r] = _.useState(!1);
  _.useEffect(() => {
    r(
      e.status === "failure" || e.status === "pending" || e.name === "Scenario" || e.name === "Request"
    );
  }, [e.status]);
  const o = e.results.map((i, s) => /* @__PURE__ */ a.jsx(lb, { operation: i }, s));
  return t ? /* @__PURE__ */ a.jsx(
    xe,
    {
      isOpen: n,
      setOpen: r,
      title: /* @__PURE__ */ a.jsx(hb, { children: e.name || "" }),
      children: /* @__PURE__ */ a.jsx($l, { children: o })
    }
  ) : /* @__PURE__ */ a.jsx($l, { children: o });
}
const $l = k.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`, hb = k.div`
  opacity: 0.8;
`;
function In({
  result: e,
  collapsible: t
}) {
  return /* @__PURE__ */ a.jsx(pb, { children: e.map((n, r) => /* @__PURE__ */ a.jsx(Bd, { playbook: n, collapsible: t }, r)) });
}
const pb = k.div``;
function Hd(e) {
  const t = ue.simpleClone(e), n = Object.keys(e.methods).map((r) => ({ key: r, value: e.methods[r] }));
  return {
    ...t,
    ttl: Il(t.ttl),
    tti: Il(t.tti),
    methods: n
  };
}
function Ud(e) {
  const t = {};
  for (const { key: n, value: r } of e.methods)
    t[n] = r;
  return {
    ...e,
    ttl: Dl(e.ttl),
    tti: Dl(e.tti),
    methods: t
  };
}
function Il(e) {
  return e === void 0 ? "" : e;
}
function Dl(e) {
  return e === "" ? void 0 : e;
}
function gb(e) {
  return e ? e.label : "";
}
function mo({
  name: e,
  options: t,
  placeholder: n,
  label: r,
  description: o
}) {
  const { field: i } = J({
    name: e,
    rules: { required: !0 }
  }), s = yb(t, i.value), l = (c) => {
    i.onChange(c == null ? void 0 : c.value);
  };
  return /* @__PURE__ */ a.jsx(
    mb,
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
function mb({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o,
  description: i
}) {
  var p;
  const s = (p = e.filter((h) => h.value === r)) == null ? void 0 : p[0], { isOpen: l, getToggleButtonProps: c, getMenuProps: u, getItemProps: d } = qo({
    items: e,
    itemToString: gb,
    selectedItem: s || null,
    onSelectedItemChange: ({ selectedItem: h }) => {
      o(h);
    }
  });
  return /* @__PURE__ */ a.jsxs(vb, { children: [
    /* @__PURE__ */ a.jsxs(xb, { children: [
      /* @__PURE__ */ a.jsxs(bb, { children: [
        /* @__PURE__ */ a.jsx("div", { children: n !== void 0 && /* @__PURE__ */ a.jsx("span", { children: n }) }),
        i && /* @__PURE__ */ a.jsx(Hn, { children: i })
      ] }),
      /* @__PURE__ */ a.jsxs(kb, { ...c(), children: [
        /* @__PURE__ */ a.jsx("span", { children: s ? s.label : t ?? "" }),
        /* @__PURE__ */ a.jsx(Er, {})
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(wb, { ...u(), isOpen: l, children: l && e.map((h, f) => /* @__PURE__ */ a.jsx("li", { ...d({ item: h, index: f }), children: /* @__PURE__ */ a.jsx("span", { children: h.label }) }, `${h.value}${f}`)) })
  ] });
}
function yb(e, t) {
  var n;
  return (n = e.filter((r) => r.value === t)) == null ? void 0 : n[0];
}
const vb = k.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, xb = k.div`
  height: 40px;
  background-color: var(${v.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${v.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${v.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${v.inputPlaceholderForeground});
  }
`, bb = k.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(${v.inputPlaceholderForeground});
`, kb = k.div`
  display: flex;
  color: var(${v.foreground});
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
    fill: var(${v.foreground});
  }
`, wb = k.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
  ${({ isOpen: e }) => e && `
    border: 1px solid var(${v.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${v.listHoverBackground});
  }
`, jb = [
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
  "microseconds",
  "nanoseconds"
], mn = (e, t) => `((?<${e}>\\d*[\\.]?\\d+)${t})?`, Sb = new RegExp(
  [
    "^",
    "(?<signed>[-+])?",
    mn("hours", "h"),
    mn("minutes", "m"),
    mn("seconds", "s"),
    mn("milliseconds", "ms"),
    mn("microseconds", "us|µs|μs"),
    mn("nanoseconds", "ns"),
    "$"
  ].join("")
), Cb = {
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
function is(e) {
  const t = Sb.exec(e);
  if (!t || !t.groups)
    return;
  let n;
  for (const r of jb)
    if (t.groups[r]) {
      const o = Cb[r](_b(t.groups[r]));
      n === void 0 ? n = o === void 0 ? void 0 : o : n = o === void 0 ? n : n + o;
    }
  return n;
}
function _b(e) {
  if (e !== void 0)
    return parseFloat(e);
}
function Eb({
  credential: e,
  saveCredential: t
}) {
  const n = Bn({
    type: Y(),
    in: Y(),
    name: Y(),
    ttl: al([
      ll(""),
      Y().refine((r) => is(r) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    tti: al([
      ll(""),
      Y().refine((r) => is(r) !== void 0, {
        message: "Invalid duration format. Examples: '500ms', '15s', '2h30m'"
      })
    ]),
    default: Y(),
    methods: Wp()
  });
  return /* @__PURE__ */ a.jsx(
    Je,
    {
      data: e,
      saveData: t,
      wrapFormData: Hd,
      unwrapFormData: Ud,
      schema: n,
      children: /* @__PURE__ */ a.jsx(Tb, {})
    }
  );
}
function Tb() {
  const { getValues: e } = ln(), t = e("methods") || [], n = e("type");
  return /* @__PURE__ */ a.jsxs(Ob, { children: [
    /* @__PURE__ */ a.jsx(oe, { label: "Type", name: "type", disabled: !0 }),
    n !== "basic" && n !== "bearer" && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(oe, { label: "Location", name: "in", disabled: !0 }),
      /* @__PURE__ */ a.jsx(oe, { label: "Name", name: "name", disabled: !0 })
    ] }),
    /* @__PURE__ */ a.jsx(
      oe,
      {
        label: "TTL",
        name: "ttl"
      }
    ),
    /* @__PURE__ */ a.jsx(
      oe,
      {
        label: "TTI",
        name: "tti"
      }
    ),
    /* @__PURE__ */ a.jsx(
      mo,
      {
        label: "Default credential name",
        name: "default",
        options: t.map((r) => ({ label: r.key, value: r.key }))
      }
    )
  ] });
}
const Ob = k.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function ut({
  children: e,
  icon: t
}) {
  return /* @__PURE__ */ a.jsxs(Ap, { children: [
    /* @__PURE__ */ a.jsx(Rp, { asChild: !0, className: "menu", children: /* @__PURE__ */ a.jsx($b, { children: t === "sliders" ? /* @__PURE__ */ a.jsx(yg, {}) : /* @__PURE__ */ a.jsx(fg, {}) }) }),
    /* @__PURE__ */ a.jsx(Np, { children: /* @__PURE__ */ a.jsx(Ib, { side: "bottom", align: "end", children: e }) })
  ] });
}
function Pl() {
  return /* @__PURE__ */ a.jsx(zb, { children: /* @__PURE__ */ a.jsx(tg, {}) });
}
const $b = k.span`
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
    fill: var(${v.foreground});
  }
`, Ib = k(Op)`
  margin: 4px;
  background-color: var(${v.dropdownBackground});
  border: 1px solid var(${v.dropdownBorder});
  border-radius: 2px;
  min-width: 220px;
  padding: 5px;
  box-shadow: 0 10px 38px var(${v.computedTwo});
`, At = k($p)`
  margin: 2px;
  color: var(${v.dropdownForeground});
  display: flex;
  gap: 8px;
  padding: 2px 5px;
  padding-left: 10px;
  border-radius: 2px;
  align-items: center;
  outline: none;
  user-select: none;
  &[data-highlighted] {
    background-color: var(${v.listActiveSelectionBackground});
    color: var(${v.listActiveSelectionForeground});
  }
  > svg {
    fill: var(${v.foreground});
  }
`, zl = k(Ip)`
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
    background-color: var(${v.listActiveSelectionBackground});
    color: var(${v.listActiveSelectionForeground});
  }
`, Db = k(Dp)`
  height: 1px;
  background-color: var(${v.border});
  margin: 5px;
`, Pb = k(Pp)`
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  opacity: 0.8;
`, zb = k(zp)`
  position: absolute;
  left: 15px;
  width: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > svg {
    fill: var(${v.foreground});
  }
`;
function Vd({ name: e }) {
  const { field: t } = J({
    name: e
  });
  return /* @__PURE__ */ a.jsx(ag, { value: t.value, onChange: (n) => t.onChange(n) });
}
function Wn({
  options: e,
  placeholder: t,
  selected: n,
  onSelectedItemChange: r,
  bottomMenu: o
}) {
  var h;
  const i = (h = e.filter((f) => f.value === n)) == null ? void 0 : h[0];
  function s(f) {
    return f ? f.label : "";
  }
  function l(f) {
    return (f == null ? void 0 : f.disabled) === !0;
  }
  const { isOpen: c, getToggleButtonProps: u, getMenuProps: d, getItemProps: p } = qo({
    items: e,
    isItemDisabled: l,
    itemToString: s,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: f }) => {
      r(f);
    }
  });
  return /* @__PURE__ */ a.jsxs(Ab, { onClick: (f) => f.stopPropagation(), children: [
    /* @__PURE__ */ a.jsx(Rb, { children: /* @__PURE__ */ a.jsxs(Nb, { ...u(), children: [
      i === void 0 && t !== void 0 && /* @__PURE__ */ a.jsx(Mb, { children: t }),
      i !== void 0 && /* @__PURE__ */ a.jsx(qb, { children: i.label }),
      /* @__PURE__ */ a.jsx(Er, {})
    ] }) }),
    /* @__PURE__ */ a.jsxs(Fb, { ...d(), isOpen: c, children: [
      c && e.map((f, g) => /* @__PURE__ */ a.jsx("li", { ...p({ item: f, index: g }), children: /* @__PURE__ */ a.jsx("span", { children: f.label }) }, `${f.value}${g}`)),
      c && o
    ] })
  ] });
}
const Ab = k.div`
  position: relative;
`, Rb = k.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${v.focusBorder});
  }
  border: 1px solid transparent;
`, Nb = k.div`
  display: flex;
  color: var(${v.foreground});
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
    fill: var(${v.foreground});
  }
`, Mb = k.span`
  color: var(${v.inputPlaceholderForeground});
`, qb = k.span``, Fb = k.ul`
  max-height: 250px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
  ${({ isOpen: e }) => e && `
    border: 1px solid var(${v.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }

  & > li:hover {
    background-color: var(${v.listHoverBackground});
  }

  & > li[aria-disabled="true"] {
    color: var(${v.disabledForeground});
  }

  & > li[aria-disabled="true"]:hover {
    background-color: transparent;
  }
`;
function lo({
  name: e,
  options: t,
  label: n,
  description: r,
  placeholder: o
}) {
  const { field: i } = J({
    name: e
  });
  return /* @__PURE__ */ a.jsxs(Lb, { children: [
    /* @__PURE__ */ a.jsx("div", { className: "label", children: n }),
    /* @__PURE__ */ a.jsx(
      Wn,
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
const Lb = k.div`
  background-color: var(${v.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${v.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${v.focusBorder});
  }
  > div.label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${v.inputPlaceholderForeground});
  }
`;
function Bb({
  add: e,
  responseCodes: t,
  existingCodes: n
}) {
  const r = { code: "200" }, o = (i) => {
    e({
      key: i.code,
      value: {
        expectations: {
          httpStatus: Wb(i.code)
        },
        variableAssignments: []
      }
    });
  };
  return /* @__PURE__ */ a.jsx(
    Dr,
    {
      title: "Add response processing",
      defaultValues: r,
      onSubmit: o,
      noOverflow: !0,
      trigger: /* @__PURE__ */ a.jsx(Kb, { children: /* @__PURE__ */ a.jsx($r, {}) }),
      children: /* @__PURE__ */ a.jsx(Hb, { responseCodes: t, existingCodes: n })
    }
  );
}
function Hb({
  responseCodes: e,
  existingCodes: t
}) {
  return /* @__PURE__ */ a.jsx(Gb, { children: /* @__PURE__ */ a.jsx(
    lo,
    {
      label: "HTTP response code",
      placeholder: "",
      name: "code",
      options: Ub(e, t)
    }
  ) });
}
function Ub(e, t) {
  return e.filter((n) => !t.includes(n)).map((n) => ({ label: Vb(n), value: n }));
}
function Vb(e) {
  return e in Al ? Al[e] : e;
}
function Wb(e) {
  return /^\d+$/.test(e) ? parseInt(e, 10) : e;
}
const Al = {
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
}, Gb = k.div`
  > div > div {
    padding: 4px;
  }
`, Kb = k.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${v.linkForeground});
    &:hover {
      fill: var(${v.linkActiveForeground});
    }
  }
`;
function Xb(e) {
  return e ? e.label : "";
}
function Qt({
  name: e,
  options: t,
  placeholder: n
}) {
  const { field: r } = J({
    name: e,
    rules: { required: !0 }
  }), o = Qb(t, r.value), i = (s) => {
    r.onChange(s == null ? void 0 : s.value);
  };
  return /* @__PURE__ */ a.jsx(
    Yb,
    {
      options: t,
      placeholder: n,
      selected: o == null ? void 0 : o.value,
      onSelectedItemChange: i
    }
  );
}
function Yb({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o
}) {
  var d;
  const i = (d = e.filter((p) => p.value === r)) == null ? void 0 : d[0], { isOpen: s, getToggleButtonProps: l, getMenuProps: c, getItemProps: u } = qo({
    items: e,
    itemToString: Xb,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      o(p);
    }
  });
  return /* @__PURE__ */ a.jsxs(Jb, { children: [
    /* @__PURE__ */ a.jsx(Zb, { children: /* @__PURE__ */ a.jsxs(ek, { ...l(), children: [
      /* @__PURE__ */ a.jsx("span", { children: i ? i.label : t ?? "" }),
      /* @__PURE__ */ a.jsx(Er, {})
    ] }) }),
    /* @__PURE__ */ a.jsx(tk, { ...c(), isOpen: s, children: s && e.map((p, h) => /* @__PURE__ */ a.jsx("li", { ...u({ item: p, index: h }), children: /* @__PURE__ */ a.jsx("span", { children: p.label }) }, `${p.value}${h}`)) })
  ] });
}
function Qb(e, t) {
  var n;
  return (n = e.filter((r) => r.value === t)) == null ? void 0 : n[0];
}
const Jb = k.div`
  position: relative;
`, Zb = k.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${v.focusBorder});
  }
  border: 1px solid transparent;
`, ek = k.div`
  display: flex;
  color: var(${v.foreground});
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
    fill: var(${v.foreground});
  }
`, tk = k.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
  ${({ isOpen: e }) => e && `
    border: 1px solid var(${v.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${v.listHoverBackground});
  }
`;
function Jt({
  label: e,
  name: t,
  disabled: n,
  password: r,
  style: o
}) {
  const {
    field: i,
    fieldState: { error: s, invalid: l }
  } = J({
    name: t
  });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(nk, { style: o, children: /* @__PURE__ */ a.jsx(
      "input",
      {
        ...i,
        disabled: n,
        type: r ? "password" : "text",
        style: { width: "100%" }
      }
    ) }),
    s && /* @__PURE__ */ a.jsx(rk, { children: s == null ? void 0 : s.message })
  ] });
}
const nk = k.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;

  > input {
    background: transparent;
    line-height: 20px;
    border: none;
    padding: 0;
    color: var(${v.foreground});
    &::placeholder {
      color: var(${v.inputPlaceholderForeground});
    }
    &:focus {
      outline: none;
    }
  }
`, rk = k.div`
  color: var(${v.errorForeground});
`;
function ok({
  name: e,
  index: t
}) {
  const { fields: n, append: r, remove: o } = cn({
    name: `responses.${t}.value.variableAssignments`
  });
  return /* @__PURE__ */ a.jsx(ik, { children: /* @__PURE__ */ a.jsxs(sk, { children: [
    /* @__PURE__ */ a.jsxs(lk, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ a.jsx("div", { children: "From" }),
      /* @__PURE__ */ a.jsx("div", { children: "Location" }),
      /* @__PURE__ */ a.jsx("div", { children: "Type" }),
      /* @__PURE__ */ a.jsx("div", { children: "Name or Path" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsxs(ak, { children: [
      n.map((i, s) => /* @__PURE__ */ a.jsx(
        ck,
        {
          name: `responses.${t}.value.variableAssignments.${s}`,
          remove: () => {
            o(s);
          }
        },
        i.id
      )),
      /* @__PURE__ */ a.jsx(gk, { append: r })
    ] })
  ] }) });
}
const ik = k.div`
  margin: 8px 4px;
`, sk = k.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: repeat(5, 1fr) 1em;
`, ak = k.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${v.border});
  }
`, lk = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function ck({ name: e, remove: t }) {
  const { getValues: n } = ln(), r = n(`${e}.value.in`), o = n(`${e}.value.from`);
  return /* @__PURE__ */ a.jsxs(dk, { children: [
    /* @__PURE__ */ a.jsx(Jt, { name: `${e}.key`, label: "name" }),
    r === "body" && /* @__PURE__ */ a.jsx(fk, { name: e }, `${e}-value`),
    r !== "body" && o === "request" && /* @__PURE__ */ a.jsx(hk, { name: e }, `${e}-value`),
    r !== "body" && o === "response" && /* @__PURE__ */ a.jsx(pk, { name: e }, `${e}-value`),
    /* @__PURE__ */ a.jsx(
      uk,
      {
        onClick: (i) => {
          i.preventDefault(), i.stopPropagation(), t();
        },
        children: /* @__PURE__ */ a.jsx(Ue, {})
      }
    )
  ] });
}
const uk = k.button`
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
    fill: var(${v.foreground});
  }
`, dk = k.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`;
function fk({ name: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Qt,
      {
        name: `${e}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(Qt, { name: `${e}.value.in`, options: [{ value: "body", label: "body" }] }),
    /* @__PURE__ */ a.jsx(
      Qt,
      {
        name: `${e}.value.path.type`,
        options: [
          { value: "jsonPointer", label: "jsonPointer" },
          { value: "jsonPath", label: "jsonPath" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(Jt, { name: `${e}.value.path.value`, label: "path" })
  ] });
}
function hk({ name: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Qt,
      {
        name: `${e}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      Qt,
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
    /* @__PURE__ */ a.jsx(Jt, { name: `${e}.value.name`, label: "name" })
  ] });
}
function pk({ name: e }) {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Qt,
      {
        name: `${e}.value.from`,
        options: [
          { value: "request", label: "request" },
          { value: "response", label: "response" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(
      Qt,
      {
        name: `${e}.value.in`,
        options: [
          { value: "header", label: "header" },
          { value: "cookie", label: "cookie" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx("div", {}),
    /* @__PURE__ */ a.jsx(Jt, { name: `${e}.value.name`, label: "name" })
  ] });
}
function gk({ append: e }) {
  return /* @__PURE__ */ a.jsx("div", { style: { gridColumn: "span 2" }, children: /* @__PURE__ */ a.jsx("div", { style: { padding: "4px 8px" }, children: /* @__PURE__ */ a.jsx(
    Wn,
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
function Qo({
  responseCodes: e,
  editable: t
}) {
  var u;
  const { fields: n, prepend: r, remove: o } = cn({
    name: "responses"
  }), [i, s] = _.useState((u = n == null ? void 0 : n[0]) == null ? void 0 : u.id);
  _.useEffect(() => {
    var d;
    s((d = n == null ? void 0 : n[0]) == null ? void 0 : d.id);
  }, [n]);
  const l = n.map((d) => d.key), c = n.map((d, p) => ({
    id: d.id,
    title: d.key,
    menu: t ? /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsxs(At, { onClick: (h) => h.stopPropagation(), onSelect: () => o(p), children: [
      /* @__PURE__ */ a.jsx(Ue, {}),
      "Delete"
    ] }) }) : void 0,
    content: /* @__PURE__ */ a.jsx(ok, { name: d.key, index: p })
  }));
  return /* @__PURE__ */ a.jsx(mk, { children: /* @__PURE__ */ a.jsx(
    ct,
    {
      round: !0,
      activeTab: i,
      setActiveTab: s,
      tabs: c,
      menu: t ? /* @__PURE__ */ a.jsx(
        Bb,
        {
          add: r,
          responseCodes: e,
          existingCodes: l
        }
      ) : void 0
    }
  ) });
}
const mk = k.div`
  margin-top: 4px;
`;
function yk({ append: e }) {
  return /* @__PURE__ */ a.jsxs(vk, { children: [
    /* @__PURE__ */ a.jsx(
      xk,
      {
        placeholder: "Add new entry",
        value: "",
        onChange: (t) => {
          e({ key: t.target.value, value: "", type: "string" }, { shouldFocus: !0 });
        }
      }
    ),
    /* @__PURE__ */ a.jsx(bk, {})
  ] });
}
const vk = k.div`
  display: contents;
`, xk = k.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${v.border});
  color: var(${v.foreground});
  margin-right: 10px;
  padding: 4px 8px;
  &::placeholder {
    color: var(${v.inputPlaceholderForeground});
  }
`, bk = k.div`
  grid-column: span 3;
`;
function kk(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wk = kk(function(e) {
  const t = new URLSearchParams();
  t.append("code", e);
  for (let n = 1; n < arguments.length; n++) t.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const Wd = _.createContext(null);
function jk(e, t) {
  let n = null;
  return { getTheme: function() {
    return t ?? (n != null ? n.getTheme() : null);
  } };
}
function _e() {
  const e = _.useContext(Wd);
  return e == null && wk(8), e;
}
function Sk(e) {
  return {};
}
const sa = {}, Ck = {}, Zt = {}, jn = {}, ss = {}, Sn = {}, aa = {}, as = {}, br = {}, kr = {}, Wt = {}, la = {}, ca = {}, _k = {}, Gd = {}, Ek = {}, Kd = {}, Tk = {}, Xd = {}, Yd = {}, wr = {}, Ok = {}, Qd = {}, Jd = {}, Zd = {}, ef = {}, tf = {}, nf = {}, $k = {}, Ik = {}, ua = {}, da = {}, ls = {}, Dk = {}, Pk = {}, Zr = {}, eo = {}, zk = {}, rf = {}, Ak = {}, Ve = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Rk = Ve && "documentMode" in document ? document.documentMode : null, Ne = Ve && /Mac|iPod|iPhone|iPad/.test(navigator.platform), wt = Ve && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), yo = !(!Ve || !("InputEvent" in window) || Rk) && "getTargetRanges" in new window.InputEvent("input"), Jo = Ve && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Pr = Ve && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Nk = Ve && /Android/.test(navigator.userAgent), of = Ve && /^(?=.*Chrome).*/i.test(navigator.userAgent), Mk = Ve && Nk && of, fa = Ve && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !of, zr = 1, Rt = 3, nn = 0, sf = 1, Dn = 2, qk = 0, Fk = 1, Lk = 2, vo = 4, xo = 8, ha = 128, Bk = 112 | (3 | vo | xo) | ha, pa = 1, ga = 2, ma = 3, ya = 4, va = 5, xa = 6, Zo = Jo || Pr || fa ? " " : "​", st = `

`, Hk = wt ? " " : Zo, af = "֑-߿יִ-﷽ﹰ-ﻼ", lf = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Uk = new RegExp("^[^" + lf + "]*[" + af + "]"), Vk = new RegExp("^[^" + af + "]*[" + lf + "]"), it = { bold: 1, code: 16, highlight: ha, italic: 2, strikethrough: vo, subscript: 32, superscript: 64, underline: xo }, Wk = { directionless: 1, unmergeable: 2 }, Rl = { center: ga, end: xa, justify: ya, left: pa, right: ma, start: va }, Gk = { [ga]: "center", [xa]: "end", [ya]: "justify", [pa]: "left", [ma]: "right", [va]: "start" }, Kk = { normal: 0, segmented: 2, token: 1 }, Xk = { [qk]: "normal", [Lk]: "segmented", [Fk]: "token" };
function Yk(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var P = Yk(function(e) {
  const t = new URLSearchParams();
  t.append("code", e);
  for (let n = 1; n < arguments.length; n++) t.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function bo(...e) {
  const t = [];
  for (const n of e) if (n && typeof n == "string") for (const [r] of n.matchAll(/\S+/g)) t.push(r);
  return t;
}
const Qk = 100;
let cs = !1, ba = 0;
function Jk(e) {
  ba = e.timeStamp;
}
function Ni(e, t, n) {
  const r = e.nodeName === "BR", o = t.__lexicalLineBreak;
  return o && (e === o || r && e.previousSibling === o) || r && ni(e, n) !== void 0;
}
function Zk(e, t, n) {
  const r = He(n._window);
  let o = null, i = null;
  r !== null && r.anchorNode === e && (o = r.anchorOffset, i = r.focusOffset);
  const s = e.nodeValue;
  s !== null && Ca(t, s, o, i, !1);
}
function e0(e, t, n) {
  if (A(e)) {
    const r = e.anchor.getNode();
    if (r.is(n) && e.format !== r.getFormat()) return !1;
  }
  return t.nodeType === Rt && n.isAttached();
}
function t0(e, t, n, r) {
  for (let o = e; o && !g0(o); o = Ar(o)) {
    const i = ni(o, t);
    if (i !== void 0) {
      const s = pe(i, n);
      if (s) return Q(s) ? void 0 : [o, s];
    } else if (o === r) return [r, mf(n)];
  }
}
function cf(e, t, n) {
  cs = !0;
  const r = performance.now() - ba > Qk;
  try {
    Oe(e, () => {
      const o = q() || function(h) {
        return h.getEditorState().read(() => {
          const f = q();
          return f !== null ? f.clone() : null;
        });
      }(e), i = /* @__PURE__ */ new Map(), s = e.getRootElement(), l = e._editorState, c = e._blockCursorElement;
      let u = !1, d = "";
      for (let h = 0; h < t.length; h++) {
        const f = t[h], g = f.type, m = f.target, y = t0(m, e, l, s);
        if (!y) continue;
        const [x, b] = y;
        if (g === "characterData") r && z(b) && e0(o, m, b) && Zk(m, b, e);
        else if (g === "childList") {
          u = !0;
          const w = f.addedNodes;
          for (let j = 0; j < w.length; j++) {
            const O = w[j], S = pf(O), I = O.parentNode;
            if (I != null && O !== c && S === null && !Ni(O, I, e)) {
              if (wt) {
                const $ = O.innerText || O.nodeValue;
                $ && (d += $);
              }
              I.removeChild(O);
            }
          }
          const C = f.removedNodes, E = C.length;
          if (E > 0) {
            let j = 0;
            for (let O = 0; O < E; O++) {
              const S = C[O];
              (Ni(S, m, e) || c === S) && (m.appendChild(S), j++);
            }
            E !== j && i.set(x, b);
          }
        }
      }
      if (i.size > 0) for (const [h, f] of i) f.reconcileObservedMutation(h, e);
      const p = n.takeRecords();
      if (p.length > 0) {
        for (let h = 0; h < p.length; h++) {
          const f = p[h], g = f.addedNodes, m = f.target;
          for (let y = 0; y < g.length; y++) {
            const x = g[y], b = x.parentNode;
            b == null || x.nodeName !== "BR" || Ni(x, m, e) || b.removeChild(x);
          }
        }
        n.takeRecords();
      }
      o !== null && (u && (o.dirty = !0, at(o)), wt && bf(e) && o.insertRawText(d));
    });
  } finally {
    cs = !1;
  }
}
function uf(e) {
  const t = e._observer;
  t !== null && cf(e, t.takeRecords(), t);
}
function df(e) {
  (function(t) {
    ba === 0 && oi(t).addEventListener("textInput", Jk, !0);
  })(e), e._observer = new MutationObserver((t, n) => {
    cf(e, t, n);
  });
}
function Nl(e, t) {
  const n = e.__mode, r = e.__format, o = e.__style, i = t.__mode, s = t.__format, l = t.__style;
  return !(n !== null && n !== i || r !== null && r !== s || o !== null && o !== l);
}
function Ml(e, t) {
  const n = e.mergeWithSibling(t), r = ne()._normalizedNodes;
  return r.add(e.__key), r.add(t.__key), n;
}
function ql(e) {
  let t, n, r = e;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (t = r.getPreviousSibling()) !== null && z(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (Nl(t, r)) {
          r = Ml(t, r);
          break;
        }
        break;
      }
      t.remove();
    }
    for (; (n = r.getNextSibling()) !== null && z(n) && n.isSimpleText() && !n.isUnmergeable(); ) {
      if (n.__text !== "") {
        if (Nl(r, n)) {
          r = Ml(r, n);
          break;
        }
        break;
      }
      n.remove();
    }
  } else r.remove();
}
function n0(e) {
  return Fl(e.anchor), Fl(e.focus), e;
}
function Fl(e) {
  for (; e.type === "element"; ) {
    const t = e.getNode(), n = e.offset;
    let r, o;
    if (n === t.getChildrenSize() ? (r = t.getChildAtIndex(n - 1), o = !0) : (r = t.getChildAtIndex(n), o = !1), z(r)) {
      e.set(r.__key, o ? r.getTextContentSize() : 0, "text");
      break;
    }
    if (!D(r)) break;
    e.set(r.__key, o ? r.getChildrenSize() : 0, "element");
  }
}
let r0 = 1;
const o0 = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
};
function ff(e) {
  const t = document.activeElement;
  if (t === null) return !1;
  const n = t.nodeName;
  return Q(wa(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && ti(t) == null);
}
function ei(e, t, n) {
  const r = e.getRootElement();
  try {
    return r !== null && r.contains(t) && r.contains(n) && t !== null && !ff(t) && hf(t) === e;
  } catch {
    return !1;
  }
}
function ka(e) {
  return e instanceof hi;
}
function hf(e) {
  let t = e;
  for (; t != null; ) {
    const n = ti(t);
    if (ka(n)) return n;
    t = Ar(t);
  }
  return null;
}
function ti(e) {
  return e ? e.__lexicalEditor : null;
}
function Vt(e) {
  return e.isToken() || e.isSegmented();
}
function i0(e) {
  return e.nodeType === Rt;
}
function ko(e) {
  let t = e;
  for (; t != null; ) {
    if (i0(t)) return t;
    t = t.firstChild;
  }
  return null;
}
function wo(e, t, n) {
  const r = it[t];
  if (n !== null && (e & r) == (n & r)) return e;
  let o = e ^ r;
  return t === "subscript" ? o &= ~it.superscript : t === "superscript" && (o &= ~it.subscript), o;
}
function s0(e, t) {
  if (t != null) return void (e.__key = t);
  je(), Lf();
  const n = ne(), r = dt(), o = "" + r0++;
  r._nodeMap.set(o, e), D(e) ? n._dirtyElements.set(o, !0) : n._dirtyLeaves.add(o), n._cloneNotNeeded.add(o), n._dirtyType = sf, e.__key = o;
}
function en(e) {
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
function jo(e) {
  Lf();
  const t = e.getLatest(), n = t.__parent, r = dt(), o = ne(), i = r._nodeMap, s = o._dirtyElements;
  n !== null && function(c, u, d) {
    let p = c;
    for (; p !== null; ) {
      if (d.has(p)) return;
      const h = u.get(p);
      if (h === void 0) break;
      d.set(p, !1), p = h.__parent;
    }
  }(n, i, s);
  const l = t.__key;
  o._dirtyType = sf, D(e) ? s.set(l, !0) : o._dirtyLeaves.add(l);
}
function he(e) {
  je();
  const t = ne(), n = t._compositionKey;
  if (e !== n) {
    if (t._compositionKey = e, n !== null) {
      const r = pe(n);
      r !== null && r.getWritable();
    }
    if (e !== null) {
      const r = pe(e);
      r !== null && r.getWritable();
    }
  }
}
function xt() {
  return Mr() ? null : ne()._compositionKey;
}
function pe(e, t) {
  const n = (t || dt())._nodeMap.get(e);
  return n === void 0 ? null : n;
}
function pf(e, t) {
  const n = ni(e, ne());
  return n !== void 0 ? pe(n, t) : null;
}
function ni(e, t) {
  return e[`__lexicalKey_${t._key}`];
}
function wa(e, t) {
  let n = e;
  for (; n != null; ) {
    const r = pf(n, t);
    if (r !== null) return r;
    n = Ar(n);
  }
  return null;
}
function gf(e) {
  const t = e._decorators, n = Object.assign({}, t);
  return e._pendingDecorators = n, n;
}
function Ll(e) {
  return e.read(() => ae().getTextContent());
}
function ae() {
  return mf(dt());
}
function mf(e) {
  return e._nodeMap.get("root");
}
function at(e) {
  je();
  const t = dt();
  e !== null && (e.dirty = !0, e.setCachedNodes(null)), t._selection = e;
}
function kn(e) {
  const t = ne(), n = function(r, o) {
    let i = r;
    for (; i != null; ) {
      const s = ni(i, o);
      if (s !== void 0) return s;
      i = Ar(i);
    }
    return null;
  }(e, t);
  return n === null ? e === t.getRootElement() ? pe("root") : null : pe(n);
}
function Bl(e, t) {
  return t ? e.getTextContentSize() : 0;
}
function yf(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function ja(e) {
  const t = [];
  let n = e;
  for (; n !== null; ) t.push(n), n = n._parentEditor;
  return t;
}
function vf() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function xf(e) {
  return e.nodeType === Rt ? e.nodeValue : null;
}
function Sa(e, t, n) {
  const r = He(t._window);
  if (r === null) return;
  const o = r.anchorNode;
  let { anchorOffset: i, focusOffset: s } = r;
  if (o !== null) {
    let l = xf(o);
    const c = wa(o);
    if (l !== null && z(c)) {
      if (l === Zo && n) {
        const u = n.length;
        l = n, i = u, s = u;
      }
      l !== null && Ca(c, l, i, s, e);
    }
  }
}
function Ca(e, t, n, r, o) {
  let i = e;
  if (i.isAttached() && (o || !i.isDirty())) {
    const s = i.isComposing();
    let l = t;
    (s || o) && t[t.length - 1] === Zo && (l = t.slice(0, -1));
    const c = i.getTextContent();
    if (o || l !== c) {
      if (l === "") {
        if (he(null), Jo || Pr || fa) i.remove();
        else {
          const m = ne();
          setTimeout(() => {
            m.update(() => {
              i.isAttached() && i.remove();
            });
          }, 20);
        }
        return;
      }
      const u = i.getParent(), d = ui(), p = i.getTextContentSize(), h = xt(), f = i.getKey();
      if (i.isToken() || h !== null && f === h && !s || A(d) && (u !== null && !u.canInsertTextBefore() && d.anchor.offset === 0 || d.anchor.key === e.__key && d.anchor.offset === 0 && !i.canInsertTextBefore() && !s || d.focus.key === e.__key && d.focus.offset === p && !i.canInsertTextAfter() && !s)) return void i.markDirty();
      const g = q();
      if (!A(g) || n === null || r === null) return void i.setTextContent(l);
      if (g.setTextNodeRange(i, n, i, r), i.isSegmented()) {
        const m = te(i.getTextContent());
        i.replace(m), i = m;
      }
      i.setTextContent(l);
    }
  }
}
function a0(e, t) {
  if (t.isSegmented()) return !0;
  if (!e.isCollapsed()) return !1;
  const n = e.anchor.offset, r = t.getParentOrThrow(), o = t.isToken();
  return n === 0 ? !t.canInsertTextBefore() || !r.canInsertTextBefore() && !t.isComposing() || o || function(i) {
    const s = i.getPreviousSibling();
    return (z(s) || D(s) && s.isInline()) && !s.canInsertTextAfter();
  }(t) : n === t.getTextContentSize() && (!t.canInsertTextAfter() || !r.canInsertTextAfter() && !t.isComposing() || o);
}
function Hl(e) {
  return e === "ArrowLeft";
}
function Ul(e) {
  return e === "ArrowRight";
}
function lr(e, t) {
  return Ne ? e : t;
}
function Vl(e) {
  return e === "Enter";
}
function rr(e) {
  return e === "Backspace";
}
function or(e) {
  return e === "Delete";
}
function Wl(e, t, n) {
  return e.toLowerCase() === "a" && lr(t, n);
}
function l0() {
  const e = ae();
  at(n0(e.select(0, e.getChildrenSize())));
}
function hr(e, t) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  const n = e.__lexicalClassNameCache, r = n[t];
  if (r !== void 0) return r;
  const o = e[t];
  if (typeof o == "string") {
    const i = bo(o);
    return n[t] = i, i;
  }
  return o;
}
function _a(e, t, n, r, o) {
  if (n.size === 0) return;
  const i = r.__type, s = r.__key, l = t.get(i);
  l === void 0 && P(33, i);
  const c = l.klass;
  let u = e.get(c);
  u === void 0 && (u = /* @__PURE__ */ new Map(), e.set(c, u));
  const d = u.get(s), p = d === "destroyed" && o === "created";
  (d === void 0 || p) && u.set(s, p ? "updated" : o);
}
function Gl(e, t, n) {
  const r = e.getParent();
  let o = n, i = e;
  return r !== null && (t && n === 0 ? (o = i.getIndexWithinParent(), i = r) : t || n !== i.getChildrenSize() || (o = i.getIndexWithinParent() + 1, i = r)), i.getChildAtIndex(t ? o - 1 : o);
}
function us(e, t) {
  const n = e.offset;
  if (e.type === "element")
    return Gl(e.getNode(), t, n);
  {
    const r = e.getNode();
    if (t && n === 0 || !t && n === r.getTextContentSize()) {
      const o = t ? r.getPreviousSibling() : r.getNextSibling();
      return o === null ? Gl(r.getParentOrThrow(), t, r.getIndexWithinParent() + (t ? 0 : 1)) : o;
    }
  }
  return null;
}
function bf(e) {
  const t = oi(e).event, n = t && t.inputType;
  return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
}
function N(e, t, n) {
  return Vf(e, t, n);
}
function ri(e) {
  return !Se(e) && !e.isLastChild() && !e.isInline();
}
function So(e, t) {
  const n = e._keyToDOMMap.get(t);
  return n === void 0 && P(75, t), n;
}
function Ar(e) {
  const t = e.assignedSlot || e.parentElement;
  return t !== null && t.nodeType === 11 ? t.host : t;
}
function pr(e, t) {
  let n = e.getParent();
  for (; n !== null; ) {
    if (n.is(t)) return !0;
    n = n.getParent();
  }
  return !1;
}
function oi(e) {
  const t = e._window;
  return t === null && P(78), t;
}
function c0(e) {
  let t = e.getParentOrThrow();
  for (; t !== null; ) {
    if (Rr(t)) return t;
    t = t.getParentOrThrow();
  }
  return t;
}
function Rr(e) {
  return Se(e) || D(e) && e.isShadowRoot();
}
function ii(e) {
  const t = ne(), n = e.constructor.getType(), r = t._nodes.get(n);
  r === void 0 && P(200, e.constructor.name, n);
  const { replace: o, replaceWithKlass: i } = r;
  if (o !== null) {
    const s = o(e), l = s.constructor;
    return i !== null ? s instanceof i || P(201, i.name, i.getType(), l.name, l.getType(), e.constructor.name, n) : s instanceof e.constructor && l !== e.constructor || P(202, l.name, l.getType(), e.constructor.name, n), s.__key === e.__key && P(203, e.constructor.name, n, l.name, l.getType()), s;
  }
  return e;
}
function Mi(e, t) {
  !Se(e.getParent()) || D(t) || Q(t) || P(99);
}
function qi(e) {
  return (Q(e) || D(e) && !e.canBeEmpty()) && !e.isInline();
}
function Ea(e, t, n) {
  n.style.removeProperty("caret-color"), t._blockCursorElement = null;
  const r = e.parentElement;
  r !== null && r.removeChild(e);
}
function u0(e, t, n) {
  let r = e._blockCursorElement;
  if (A(n) && n.isCollapsed() && n.anchor.type === "element" && t.contains(document.activeElement)) {
    const o = n.anchor, i = o.getNode(), s = o.offset;
    let l = !1, c = null;
    if (s === i.getChildrenSize())
      qi(i.getChildAtIndex(s - 1)) && (l = !0);
    else {
      const u = i.getChildAtIndex(s);
      if (u !== null && qi(u)) {
        const d = u.getPreviousSibling();
        (d === null || qi(d)) && (l = !0, c = e.getElementByKey(u.__key));
      }
    }
    if (l) {
      const u = e.getElementByKey(i.__key);
      return r === null && (e._blockCursorElement = r = function(d) {
        const p = d.theme, h = document.createElement("div");
        h.contentEditable = "false", h.setAttribute("data-lexical-cursor", "true");
        let f = p.blockCursor;
        if (f !== void 0) {
          if (typeof f == "string") {
            const g = bo(f);
            f = p.blockCursor = g;
          }
          f !== void 0 && h.classList.add(...f);
        }
        return h;
      }(e._config)), t.style.caretColor = "transparent", void (c === null ? u.appendChild(r) : u.insertBefore(r, c));
    }
  }
  r !== null && Ea(r, e, t);
}
function He(e) {
  return Ve ? (e || window).getSelection() : null;
}
function si(e) {
  return e.nodeType === 1;
}
function Kl(e) {
  return e.nodeType === 11;
}
function d0(e) {
  const t = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return e.nodeName.match(t) !== null;
}
function Xl(e) {
  const t = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return e.nodeName.match(t) !== null;
}
function yt(e) {
  if (Q(e) && !e.isInline()) return !0;
  if (!D(e) || Rr(e)) return !1;
  const t = e.getFirstChild(), n = t === null || yr(t) || z(t) || t.isInline();
  return !e.isInline() && e.canBeEmpty() !== !1 && n;
}
function ir(e, t) {
  let n = e;
  for (; n !== null && n.getParent() !== null && !t(n); ) n = n.getParentOrThrow();
  return t(n) ? n : null;
}
const Yl = /* @__PURE__ */ new WeakMap(), f0 = /* @__PURE__ */ new Map();
function h0(e) {
  if (!e._readOnly && e.isEmpty()) return f0;
  e._readOnly || P(192);
  let t = Yl.get(e);
  if (!t) {
    t = /* @__PURE__ */ new Map(), Yl.set(e, t);
    for (const [n, r] of e._nodeMap) {
      const o = r.__type;
      let i = t.get(o);
      i || (i = /* @__PURE__ */ new Map(), t.set(o, i)), i.set(n, r);
    }
  }
  return t;
}
function kf(e) {
  const t = e.constructor.clone(e);
  return t.afterCloneFrom(e), t;
}
function p0(e, t) {
  const n = (parseInt(e.style.paddingInlineStart, 10) || 0) / 40;
  t.setIndent(n);
}
function g0(e) {
  return e.__lexicalUnmanaged === !0;
}
function wf(e, t, n, r, o, i) {
  let s = e.getFirstChild();
  for (; s !== null; ) {
    const l = s.__key;
    s.__parent === t && (D(s) && wf(s, l, n, r, o, i), n.has(l) || i.delete(l), o.push(l)), s = s.getNextSibling();
  }
}
let Ct, ke, jr, ai, ds, fs, rn, Be, hs, Sr, ie = "", be = "", Ke = null, Me = "", rt = "", jf = !1, Cr = !1, co = null;
function Co(e, t) {
  const n = rn.get(e);
  if (t !== null) {
    const r = ms(e);
    r.parentNode === t && t.removeChild(r);
  }
  if (Be.has(e) || ke._keyToDOMMap.delete(e), D(n)) {
    const r = Eo(n, rn);
    ps(r, 0, r.length - 1, null);
  }
  n !== void 0 && _a(Sr, jr, ai, n, "destroyed");
}
function ps(e, t, n, r) {
  let o = t;
  for (; o <= n; ++o) {
    const i = e[o];
    i !== void 0 && Co(i, r);
  }
}
function Bt(e, t) {
  e.setProperty("text-align", t);
}
const m0 = "40px";
function Sf(e, t) {
  const n = Ct.theme.indent;
  if (typeof n == "string") {
    const o = e.classList.contains(n);
    t > 0 && !o ? e.classList.add(n) : t < 1 && o && e.classList.remove(n);
  }
  const r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || m0;
  e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * ${r})`);
}
function Cf(e, t) {
  const n = e.style;
  t === 0 ? Bt(n, "") : t === pa ? Bt(n, "left") : t === ga ? Bt(n, "center") : t === ma ? Bt(n, "right") : t === ya ? Bt(n, "justify") : t === va ? Bt(n, "start") : t === xa && Bt(n, "end");
}
function _o(e, t) {
  const n = Be.get(e);
  n === void 0 && P(60);
  const r = n.createDOM(Ct, ke);
  if (function(o, i, s) {
    const l = s._keyToDOMMap;
    (function(c, u, d) {
      c[`__lexicalKey_${u._key}`] = d;
    })(i, s, o), l.set(o, i);
  }(e, r, ke), z(n) ? r.setAttribute("data-lexical-text", "true") : Q(n) && r.setAttribute("data-lexical-decorator", "true"), D(n)) {
    const o = n.__indent, i = n.__size;
    if (o !== 0 && Sf(r, o), i !== 0) {
      const l = i - 1;
      (function(c, u, d, p) {
        const h = be;
        be = "", gs(c, d, 0, u, d.getDOMSlot(p)), Ef(d, p), be = h;
      })(Eo(n, Be), l, n, r);
    }
    const s = n.__format;
    s !== 0 && Cf(r, s), n.isInline() || _f(null, n, r), ri(n) && (ie += st, rt += st);
  } else {
    const o = n.getTextContent();
    if (Q(n)) {
      const i = n.decorate(ke, Ct);
      i !== null && Tf(e, i), r.contentEditable = "false";
    } else z(n) && (n.isDirectionless() || (be += o));
    ie += o, rt += o;
  }
  return t !== null && t.insertChild(r), _a(Sr, jr, ai, n, "created"), r;
}
function gs(e, t, n, r, o) {
  const i = ie;
  ie = "";
  let s = n;
  for (; s <= r; ++s) {
    _o(e[s], o);
    const l = Be.get(e[s]);
    l !== null && z(l) && (Ke === null && (Ke = l.getFormat()), Me === "" && (Me = l.getStyle()));
  }
  ri(t) && (ie += st), o.element.__lexicalTextContent = ie, ie = i + ie;
}
function Ql(e, t) {
  if (e) {
    const n = e.__last;
    if (n) {
      const r = t.get(n);
      if (r) return yr(r) ? "line-break" : Q(r) && r.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function _f(e, t, n) {
  const r = Ql(e, rn), o = Ql(t, Be);
  r !== o && t.getDOMSlot(n).setManagedLineBreak(o);
}
function Ef(e, t) {
  const n = t.__lexicalDirTextContent || "", r = t.__lexicalDir || "";
  if (n !== be || r !== co) {
    const i = be === "", s = i ? co : (o = be, Uk.test(o) ? "rtl" : Vk.test(o) ? "ltr" : null);
    if (s !== r) {
      const l = t.classList, c = Ct.theme;
      let u = r !== null ? c[r] : void 0, d = s !== null ? c[s] : void 0;
      if (u !== void 0) {
        if (typeof u == "string") {
          const p = bo(u);
          u = c[r] = p;
        }
        l.remove(...u);
      }
      if (s === null || i && s === "ltr") t.removeAttribute("dir");
      else {
        if (d !== void 0) {
          if (typeof d == "string") {
            const p = bo(d);
            d = c[s] = p;
          }
          d !== void 0 && l.add(...d);
        }
        t.dir = s;
      }
      Cr || (e.getWritable().__dir = s);
    }
    co = s, t.__lexicalDirTextContent = be, t.__lexicalDir = s;
  }
  var o;
}
function y0(e, t, n) {
  const r = be;
  var o;
  be = "", Ke = null, Me = "", function(i, s, l) {
    const c = ie, u = i.__size, d = s.__size;
    ie = "";
    const p = l.element;
    if (u === 1 && d === 1) {
      const h = i.__first, f = s.__first;
      if (h === f) cr(h, p);
      else {
        const m = ms(h), y = _o(f, null);
        try {
          p.replaceChild(y, m);
        } catch (x) {
          if (typeof x == "object" && x != null) {
            const b = `${x.toString()} Parent: ${p.tagName}, new child: {tag: ${y.tagName} key: ${f}}, old child: {tag: ${m.tagName}, key: ${h}}.`;
            throw new Error(b);
          }
          throw x;
        }
        Co(h, null);
      }
      const g = Be.get(f);
      z(g) && (Ke === null && (Ke = g.getFormat()), Me === "" && (Me = g.getStyle()));
    } else {
      const h = Eo(i, rn), f = Eo(s, Be);
      if (h.length !== u && P(227), f.length !== d && P(228), u === 0) d !== 0 && gs(f, s, 0, d - 1, l);
      else if (d === 0) {
        if (u !== 0) {
          const g = l.after == null && l.before == null && l.element.__lexicalLineBreak == null;
          ps(h, 0, u - 1, g ? null : p), g && (p.textContent = "");
        }
      } else (function(g, m, y, x, b, w) {
        const C = x - 1, E = b - 1;
        let j, O, S = w.getFirstChild(), I = 0, $ = 0;
        for (; I <= C && $ <= E; ) {
          const M = m[I], K = y[$];
          if (M === K) S = Fi(cr(K, w.element)), I++, $++;
          else {
            j === void 0 && (j = new Set(m)), O === void 0 && (O = new Set(y));
            const V = O.has(M), de = j.has(K);
            if (V) if (de) {
              const ge = So(ke, K);
              ge === S ? S = Fi(cr(K, w.element)) : (w.withBefore(S).insertChild(ge), cr(K, w.element)), I++, $++;
            } else _o(K, w.withBefore(S)), $++;
            else S = Fi(ms(M)), Co(M, w.element), I++;
          }
          const G = Be.get(K);
          G !== null && z(G) && (Ke === null && (Ke = G.getFormat()), Me === "" && (Me = G.getStyle()));
        }
        const R = I > C, L = $ > E;
        if (R && !L) {
          const M = y[E + 1], K = M === void 0 ? null : ke.getElementByKey(M);
          gs(y, g, $, E, w.withBefore(K));
        } else L && !R && ps(m, I, C, w.element);
      })(s, h, f, u, d, l);
    }
    ri(s) && (ie += st), p.__lexicalTextContent = ie, ie = c + ie;
  }(e, t, t.getDOMSlot(n)), Ef(t, n), Io(o = t) && Ke != null && Ke !== o.__textFormat && !Cr && (o.setTextFormat(Ke), o.setTextStyle(Me)), function(i) {
    Io(i) && Me !== "" && Me !== i.__textStyle && !Cr && i.setTextStyle(Me);
  }(t), be = r;
}
function Eo(e, t) {
  const n = [];
  let r = e.__first;
  for (; r !== null; ) {
    const o = t.get(r);
    o === void 0 && P(101), n.push(r), r = o.__next;
  }
  return n;
}
function cr(e, t) {
  const n = rn.get(e);
  let r = Be.get(e);
  n !== void 0 && r !== void 0 || P(61);
  const o = jf || fs.has(e) || ds.has(e), i = So(ke, e);
  if (n === r && !o) {
    if (D(n)) {
      const s = i.__lexicalTextContent;
      s !== void 0 && (ie += s, rt += s);
      const l = i.__lexicalDirTextContent;
      l !== void 0 && (be += l);
    } else {
      const s = n.getTextContent();
      z(n) && !n.isDirectionless() && (be += s), rt += s, ie += s;
    }
    return i;
  }
  if (n !== r && o && _a(Sr, jr, ai, r, "updated"), r.updateDOM(n, i, Ct)) {
    const s = _o(e, null);
    return t === null && P(62), t.replaceChild(s, i), Co(e, null), s;
  }
  if (D(n) && D(r)) {
    const s = r.__indent;
    s !== n.__indent && Sf(i, s);
    const l = r.__format;
    l !== n.__format && Cf(i, l), o && (y0(n, r, i), Se(r) || r.isInline() || _f(n, r, i)), ri(r) && (ie += st, rt += st);
  } else {
    const s = r.getTextContent();
    if (Q(r)) {
      const l = r.decorate(ke, Ct);
      l !== null && Tf(e, l);
    } else z(r) && !r.isDirectionless() && (be += s);
    ie += s, rt += s;
  }
  if (!Cr && Se(r) && r.__cachedText !== rt) {
    const s = r.getWritable();
    s.__cachedText = rt, r = s;
  }
  return i;
}
function Tf(e, t) {
  let n = ke._pendingDecorators;
  const r = ke._decorators;
  if (n === null) {
    if (r[e] === t) return;
    n = gf(ke);
  }
  n[e] = t;
}
function Fi(e) {
  let t = e.nextSibling;
  return t !== null && t === ke._blockCursorElement && (t = t.nextSibling), t;
}
function v0(e, t, n, r, o, i) {
  ie = "", rt = "", be = "", jf = r === Dn, co = null, ke = n, Ct = n._config, jr = n._nodes, ai = ke._listeners.mutation, ds = o, fs = i, rn = e._nodeMap, Be = t._nodeMap, Cr = t._readOnly, hs = new Map(n._keyToDOMMap);
  const s = /* @__PURE__ */ new Map();
  return Sr = s, cr("root", null), ke = void 0, jr = void 0, ds = void 0, fs = void 0, rn = void 0, Be = void 0, Ct = void 0, hs = void 0, Sr = void 0, s;
}
function ms(e) {
  const t = hs.get(e);
  return t === void 0 && P(75, e), t;
}
const tt = Object.freeze({}), ys = 30, vs = [["keydown", function(e, t) {
  if (gr = e.timeStamp, Of = e.key, t.isComposing()) return;
  const { key: n, shiftKey: r, ctrlKey: o, metaKey: i, altKey: s } = e;
  if (!N(t, _k, e) && n != null) {
    if (function(l, c, u, d) {
      return Ul(l) && !c && !d && !u;
    }(n, o, s, i)) N(t, Gd, e);
    else if (function(l, c, u, d, p) {
      return Ul(l) && !d && !u && (c || p);
    }(n, o, r, s, i)) N(t, Ek, e);
    else if (function(l, c, u, d) {
      return Hl(l) && !c && !d && !u;
    }(n, o, s, i)) N(t, Kd, e);
    else if (function(l, c, u, d, p) {
      return Hl(l) && !d && !u && (c || p);
    }(n, o, r, s, i)) N(t, Tk, e);
    else if (/* @__PURE__ */ function(l, c, u) {
      return /* @__PURE__ */ function(d) {
        return d === "ArrowUp";
      }(l) && !c && !u;
    }(n, o, i)) N(t, Xd, e);
    else if (/* @__PURE__ */ function(l, c, u) {
      return /* @__PURE__ */ function(d) {
        return d === "ArrowDown";
      }(l) && !c && !u;
    }(n, o, i)) N(t, Yd, e);
    else if (function(l, c) {
      return Vl(l) && c;
    }(n, r)) mr = !0, N(t, wr, e);
    else if (/* @__PURE__ */ function(l) {
      return l === " ";
    }(n)) N(t, Ok, e);
    else if (function(l, c) {
      return Ne && c && l.toLowerCase() === "o";
    }(n, o)) e.preventDefault(), mr = !0, N(t, jn, !0);
    else if (function(l, c) {
      return Vl(l) && !c;
    }(n, r)) mr = !1, N(t, wr, e);
    else if (function(l, c, u, d) {
      return Ne ? !c && !u && (rr(l) || l.toLowerCase() === "h" && d) : !(d || c || u) && rr(l);
    }(n, s, i, o)) rr(n) ? N(t, Qd, e) : (e.preventDefault(), N(t, Zt, !0));
    else if (/* @__PURE__ */ function(l) {
      return l === "Escape";
    }(n)) N(t, Jd, e);
    else if (function(l, c, u, d, p) {
      return Ne ? !(u || d || p) && (or(l) || l.toLowerCase() === "d" && c) : !(c || d || p) && or(l);
    }(n, o, r, s, i)) or(n) ? N(t, Zd, e) : (e.preventDefault(), N(t, Zt, !1));
    else if (function(l, c, u) {
      return rr(l) && (Ne ? c : u);
    }(n, s, o)) e.preventDefault(), N(t, br, !0);
    else if (function(l, c, u) {
      return or(l) && (Ne ? c : u);
    }(n, s, o)) e.preventDefault(), N(t, br, !1);
    else if (function(l, c) {
      return Ne && c && rr(l);
    }(n, i)) e.preventDefault(), N(t, kr, !0);
    else if (function(l, c) {
      return Ne && c && or(l);
    }(n, i)) e.preventDefault(), N(t, kr, !1);
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "b" && !c && lr(u, d);
    }(n, s, i, o)) e.preventDefault(), N(t, Wt, "bold");
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "u" && !c && lr(u, d);
    }(n, s, i, o)) e.preventDefault(), N(t, Wt, "underline");
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "i" && !c && lr(u, d);
    }(n, s, i, o)) e.preventDefault(), N(t, Wt, "italic");
    else if (/* @__PURE__ */ function(l, c, u, d) {
      return l === "Tab" && !c && !u && !d;
    }(n, s, o, i)) N(t, ef, e);
    else if (function(l, c, u, d) {
      return l.toLowerCase() === "z" && !c && lr(u, d);
    }(n, r, i, o)) e.preventDefault(), N(t, la, void 0);
    else if (function(l, c, u, d) {
      return Ne ? l.toLowerCase() === "z" && u && c : l.toLowerCase() === "y" && d || l.toLowerCase() === "z" && d && c;
    }(n, r, i, o)) e.preventDefault(), N(t, ca, void 0);
    else {
      const l = t._editorState._selection;
      l === null || A(l) ? !wt && Wl(n, i, o) && (e.preventDefault(), N(t, ls, e)) : function(c, u, d, p) {
        return !u && c.toLowerCase() === "c" && (Ne ? d : p);
      }(n, r, i, o) ? (e.preventDefault(), N(t, ua, e)) : function(c, u, d, p) {
        return !u && c.toLowerCase() === "x" && (Ne ? d : p);
      }(n, r, i, o) ? (e.preventDefault(), N(t, da, e)) : Wl(n, i, o) && (e.preventDefault(), N(t, ls, e));
    }
    /* @__PURE__ */ (function(l, c, u, d) {
      return l || c || u || d;
    })(o, r, s, i) && N(t, Ak, e);
  }
}], ["pointerdown", function(e, t) {
  const n = e.target, r = e.pointerType;
  n instanceof Node && r !== "touch" && Oe(t, () => {
    Q(wa(n)) || (bs = !0);
  });
}], ["compositionstart", function(e, t) {
  Oe(t, () => {
    const n = q();
    if (A(n) && !t.isComposing()) {
      const r = n.anchor, o = n.anchor.getNode();
      he(r.key), (e.timeStamp < gr + ys || r.type === "element" || !n.isCollapsed() || o.getFormat() !== n.format || z(o) && o.getStyle() !== n.style) && N(t, Sn, Hk);
    }
  });
}], ["compositionend", function(e, t) {
  wt ? sr = !0 : Oe(t, () => {
    Li(t, e.data);
  });
}], ["input", function(e, t) {
  e.stopPropagation(), Oe(t, () => {
    const n = q(), r = e.data, o = Pf(e);
    if (r != null && A(n) && Df(n, o, r, e.timeStamp, !1)) {
      sr && (Li(t, r), sr = !1);
      const i = n.anchor.getNode(), s = He(t._window);
      if (s === null) return;
      const l = n.isBackward(), c = l ? n.anchor.offset : n.focus.offset, u = l ? n.focus.offset : n.anchor.offset;
      yo && !n.isCollapsed() && z(i) && s.anchorNode !== null && i.getTextContent().slice(0, c) + r + i.getTextContent().slice(c + u) === xf(s.anchorNode) || N(t, Sn, r);
      const d = r.length;
      wt && d > 1 && e.inputType === "insertCompositionText" && !t.isComposing() && (n.anchor.offset -= d), Jo || Pr || fa || !t.isComposing() || (gr = 0, he(null));
    } else
      Sa(!1, t, r !== null ? r : void 0), sr && (Li(t, r || void 0), sr = !1);
    je(), uf(ne());
  }), xn = null;
}], ["click", function(e, t) {
  Oe(t, () => {
    const n = q(), r = He(t._window), o = ui();
    if (r) {
      if (A(n)) {
        const i = n.anchor, s = i.getNode();
        i.type === "element" && i.offset === 0 && n.isCollapsed() && !Se(s) && ae().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && n.is(o) ? (r.removeAllRanges(), n.dirty = !0) : e.detail === 3 && !n.isCollapsed() && s !== n.focus.getNode() && (D(s) ? s.select(0) : s.getParentOrThrow().select(0));
      } else if (e.pointerType === "touch") {
        const i = r.anchorNode;
        if (i !== null) {
          const s = i.nodeType;
          (s === zr || s === Rt) && at(Ia(o, r, t, e));
        }
      }
    }
    N(t, Ck, e);
  });
}], ["cut", tt], ["copy", tt], ["dragstart", tt], ["dragover", tt], ["dragend", tt], ["paste", tt], ["focus", tt], ["blur", tt], ["drop", tt]];
yo && vs.push(["beforeinput", (e, t) => function(n, r) {
  const o = n.inputType, i = Pf(n);
  o === "deleteCompositionText" || wt && bf(r) || o !== "insertCompositionText" && Oe(r, () => {
    const s = q();
    if (o === "deleteContentBackward") {
      if (s === null) {
        const f = ui();
        if (!A(f)) return;
        at(f.clone());
      }
      if (A(s)) {
        const f = s.anchor.key === s.focus.key;
        if (l = n.timeStamp, Of === "MediaLast" && l < gr + ys && r.isComposing() && f) {
          if (he(null), gr = 0, setTimeout(() => {
            Oe(r, () => {
              he(null);
            });
          }, ys), A(s)) {
            const g = s.anchor.getNode();
            g.markDirty(), s.format = g.getFormat(), z(g) || P(142), s.style = g.getStyle();
          }
        } else {
          he(null), n.preventDefault();
          const g = s.anchor.getNode(), m = g.getTextContent(), y = g.canInsertTextAfter(), x = s.anchor.offset === 0 && s.focus.offset === m.length;
          Mk && f && !x && y || N(r, Zt, !0);
        }
        return;
      }
    }
    var l;
    if (!A(s)) return;
    const c = n.data;
    xn !== null && Sa(!1, r, xn), s.dirty && xn === null || !s.isCollapsed() || Se(s.anchor.getNode()) || i === null || s.applyDOMRange(i), xn = null;
    const u = s.anchor, d = s.focus, p = u.getNode(), h = d.getNode();
    if (o !== "insertText" && o !== "insertTranspose") switch (n.preventDefault(), o) {
      case "insertFromYank":
      case "insertFromDrop":
      case "insertReplacementText":
        N(r, Sn, n);
        break;
      case "insertFromComposition":
        he(null), N(r, Sn, n);
        break;
      case "insertLineBreak":
        he(null), N(r, jn, !1);
        break;
      case "insertParagraph":
        he(null), mr && !Pr ? (mr = !1, N(r, jn, !1)) : N(r, ss, void 0);
        break;
      case "insertFromPaste":
      case "insertFromPasteAsQuotation":
        N(r, aa, n);
        break;
      case "deleteByComposition":
        (function(f, g) {
          return f !== g || D(f) || D(g) || !f.isToken() || !g.isToken();
        })(p, h) && N(r, as, n);
        break;
      case "deleteByDrag":
      case "deleteByCut":
        N(r, as, n);
        break;
      case "deleteContent":
        N(r, Zt, !1);
        break;
      case "deleteWordBackward":
        N(r, br, !0);
        break;
      case "deleteWordForward":
        N(r, br, !1);
        break;
      case "deleteHardLineBackward":
      case "deleteSoftLineBackward":
        N(r, kr, !0);
        break;
      case "deleteContentForward":
      case "deleteHardLineForward":
      case "deleteSoftLineForward":
        N(r, kr, !1);
        break;
      case "formatStrikeThrough":
        N(r, Wt, "strikethrough");
        break;
      case "formatBold":
        N(r, Wt, "bold");
        break;
      case "formatItalic":
        N(r, Wt, "italic");
        break;
      case "formatUnderline":
        N(r, Wt, "underline");
        break;
      case "historyUndo":
        N(r, la, void 0);
        break;
      case "historyRedo":
        N(r, ca, void 0);
    }
    else {
      if (c === `
`) n.preventDefault(), N(r, jn, !1);
      else if (c === st) n.preventDefault(), N(r, ss, void 0);
      else if (c == null && n.dataTransfer) {
        const f = n.dataTransfer.getData("text/plain");
        n.preventDefault(), s.insertRawText(f);
      } else c != null && Df(s, i, c, n.timeStamp, !0) ? (n.preventDefault(), N(r, Sn, c)) : xn = c;
      $f = n.timeStamp;
    }
  });
}(e, t)]);
let gr = 0, Of = null, $f = 0, xn = null;
const To = /* @__PURE__ */ new WeakMap();
let xs = !1, bs = !1, mr = !1, sr = !1, If = [0, "", 0, "root", 0];
function Df(e, t, n, r, o) {
  const i = e.anchor, s = e.focus, l = i.getNode(), c = ne(), u = He(c._window), d = u !== null ? u.anchorNode : null, p = i.key, h = c.getElementByKey(p), f = n.length;
  return p !== s.key || !z(l) || (!o && (!yo || $f < r + 50) || l.isDirty() && f < 2 || yf(n)) && i.offset !== s.offset && !l.isComposing() || Vt(l) || l.isDirty() && f > 1 || (o || !yo) && h !== null && !l.isComposing() && d !== ko(h) || u !== null && t !== null && (!t.collapsed || t.startContainer !== u.anchorNode || t.startOffset !== u.anchorOffset) || l.getFormat() !== e.format || l.getStyle() !== e.style || a0(e, l);
}
function Jl(e, t) {
  return e !== null && e.nodeValue !== null && e.nodeType === Rt && t !== 0 && t !== e.nodeValue.length;
}
function Zl(e, t, n) {
  const { anchorNode: r, anchorOffset: o, focusNode: i, focusOffset: s } = e;
  xs && (xs = !1, Jl(r, o) && Jl(i, s)) || Oe(t, () => {
    if (!n) return void at(null);
    if (!ei(t, r, i)) return;
    const l = q();
    if (A(l)) {
      const c = l.anchor, u = c.getNode();
      if (l.isCollapsed()) {
        e.type === "Range" && e.anchorNode === e.focusNode && (l.dirty = !0);
        const d = oi(t).event, p = d ? d.timeStamp : performance.now(), [h, f, g, m, y] = If, x = ae(), b = t.isComposing() === !1 && x.getTextContent() === "";
        if (p < y + 200 && c.offset === g && c.key === m) l.format = h, l.style = f;
        else if (c.type === "text") z(u) || P(141), l.format = u.getFormat(), l.style = u.getStyle();
        else if (c.type === "element" && !b) {
          const w = c.getNode();
          l.style = "", w instanceof Kn && w.getChildrenSize() === 0 ? (l.format = w.getTextFormat(), l.style = w.getTextStyle()) : l.format = 0;
        }
      } else {
        const d = c.key, p = l.focus.key, h = l.getNodes(), f = h.length, g = l.isBackward(), m = g ? s : o, y = g ? o : s, x = g ? p : d, b = g ? d : p;
        let w = Bk, C = !1;
        for (let E = 0; E < f; E++) {
          const j = h[E], O = j.getTextContentSize();
          if (z(j) && O !== 0 && !(E === 0 && j.__key === x && m === O || E === f - 1 && j.__key === b && y === 0) && (C = !0, w &= j.getFormat(), w === 0)) break;
        }
        l.format = C ? w : 0;
      }
    }
    N(t, sa, void 0);
  });
}
function Pf(e) {
  if (!e.getTargetRanges) return null;
  const t = e.getTargetRanges();
  return t.length === 0 ? null : t[0];
}
function Li(e, t) {
  const n = e._compositionKey;
  if (he(null), n !== null && t != null) {
    if (t === "") {
      const r = pe(n), o = ko(e.getElementByKey(n));
      return void (o !== null && o.nodeValue !== null && z(r) && Ca(r, o.nodeValue, null, null, !0));
    }
    if (t[t.length - 1] === `
`) {
      const r = q();
      if (A(r)) {
        const o = r.focus;
        return r.anchor.set(o.key, o.offset, o.type), void N(e, wr, null);
      }
    }
  }
  Sa(!0, e, t);
}
function zf(e) {
  let t = e.__lexicalEventHandles;
  return t === void 0 && (t = [], e.__lexicalEventHandles = t), t;
}
const Cn = /* @__PURE__ */ new Map();
function Af(e) {
  const t = e.target, n = He(t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView);
  if (n === null) return;
  const r = hf(n.anchorNode);
  if (r === null) return;
  bs && (bs = !1, Oe(r, () => {
    const u = ui(), d = n.anchorNode;
    if (d === null) return;
    const p = d.nodeType;
    p !== zr && p !== Rt || at(Ia(u, n, r, e));
  }));
  const o = ja(r), i = o[o.length - 1], s = i._key, l = Cn.get(s), c = l || i;
  c !== r && Zl(n, c, !1), Zl(n, r, !0), r !== i ? Cn.set(s, r) : l && Cn.delete(s);
}
function ec(e) {
  e._lexicalHandled = !0;
}
function tc(e) {
  return e._lexicalHandled === !0;
}
function x0(e) {
  const t = e.ownerDocument, n = To.get(t);
  n === void 0 && P(162);
  const r = n - 1;
  r >= 0 || P(164), To.set(t, r), r === 0 && t.removeEventListener("selectionchange", Af);
  const o = ti(e);
  ka(o) ? (function(s) {
    if (s._parentEditor !== null) {
      const l = ja(s), c = l[l.length - 1]._key;
      Cn.get(c) === s && Cn.delete(c);
    } else Cn.delete(s._key);
  }(o), e.__lexicalEditor = null) : o && P(198);
  const i = zf(e);
  for (let s = 0; s < i.length; s++) i[s]();
  e.__lexicalEventHandles = [];
}
function ks(e, t, n) {
  je();
  const r = e.__key, o = e.getParent();
  if (o === null) return;
  const i = function(l) {
    const c = q();
    if (!A(c) || !D(l)) return c;
    const { anchor: u, focus: d } = c, p = u.getNode(), h = d.getNode();
    return pr(p, l) && u.set(l.__key, 0, "element"), pr(h, l) && d.set(l.__key, 0, "element"), c;
  }(e);
  let s = !1;
  if (A(i) && t) {
    const l = i.anchor, c = i.focus;
    l.key === r && ($o(l, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0), c.key === r && ($o(c, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0);
  } else $a(i) && t && e.isSelected() && e.selectPrevious();
  if (A(i) && t && !s) {
    const l = e.getIndexWithinParent();
    en(e), Oo(i, o, l, -1);
  } else en(e);
  n || Rr(o) || o.canBeEmpty() || !o.isEmpty() || ks(o, t), t && Se(o) && o.isEmpty() && o.selectEnd();
}
class li {
  static getType() {
    P(64, this.name);
  }
  static clone(t) {
    P(65, this.name);
  }
  afterCloneFrom(t) {
    this.__parent = t.__parent, this.__next = t.__next, this.__prev = t.__prev;
  }
  constructor(t) {
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, s0(this, t);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    P(137, this.constructor.name);
  }
  isAttached() {
    let t = this.__key;
    for (; t !== null; ) {
      if (t === "root") return !0;
      const n = pe(t);
      if (n === null) break;
      t = n.__parent;
    }
    return !1;
  }
  isSelected(t) {
    const n = t || q();
    if (n == null) return !1;
    const r = n.getNodes().some((o) => o.__key === this.__key);
    if (z(this)) return r;
    if (A(n) && n.anchor.type === "element" && n.focus.type === "element") {
      if (n.isCollapsed()) return !1;
      const o = this.getParent();
      if (Q(this) && this.isInline() && o) {
        const i = n.isBackward() ? n.focus : n.anchor, s = i.getNode();
        if (i.offset === s.getChildrenSize() && s.is(o) && s.getLastChildOrThrow().is(this)) return !1;
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
    return t === null ? null : pe(t);
  }
  getParentOrThrow() {
    const t = this.getParent();
    return t === null && P(66, this.__key), t;
  }
  getTopLevelElement() {
    let t = this;
    for (; t !== null; ) {
      const n = t.getParent();
      if (Rr(n)) return D(t) || t === this && Q(t) || P(194), t;
      t = n;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const t = this.getTopLevelElement();
    return t === null && P(67, this.__key), t;
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
    return t === null ? null : pe(t);
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
    return t === null ? null : pe(t);
  }
  getNextSiblings() {
    const t = [];
    let n = this.getNextSibling();
    for (; n !== null; ) t.push(n), n = n.getNextSibling();
    return t;
  }
  getCommonAncestor(t) {
    const n = this.getParents(), r = t.getParents();
    D(this) && n.unshift(this), D(t) && r.unshift(t);
    const o = n.length, i = r.length;
    if (o === 0 || i === 0 || n[o - 1] !== r[i - 1]) return null;
    const s = new Set(r);
    for (let l = 0; l < o; l++) {
      const c = n[l];
      if (s.has(c)) return c;
    }
    return null;
  }
  is(t) {
    return t != null && this.__key === t.__key;
  }
  isBefore(t) {
    if (this === t) return !1;
    if (t.isParentOf(this)) return !0;
    if (this.isParentOf(t)) return !1;
    const n = this.getCommonAncestor(t);
    let r = 0, o = 0, i = this;
    for (; ; ) {
      const s = i.getParentOrThrow();
      if (s === n) {
        r = i.getIndexWithinParent();
        break;
      }
      i = s;
    }
    for (i = t; ; ) {
      const s = i.getParentOrThrow();
      if (s === n) {
        o = i.getIndexWithinParent();
        break;
      }
      i = s;
    }
    return r < o;
  }
  isParentOf(t) {
    const n = this.__key;
    if (n === t.__key) return !1;
    let r = t;
    for (; r !== null; ) {
      if (r.__key === n) return !0;
      r = r.getParent();
    }
    return !1;
  }
  getNodesBetween(t) {
    const n = this.isBefore(t), r = [], o = /* @__PURE__ */ new Set();
    let i = this;
    for (; i !== null; ) {
      const s = i.__key;
      if (o.has(s) || (o.add(s), r.push(i)), i === t) break;
      const l = D(i) ? n ? i.getFirstChild() : i.getLastChild() : null;
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
        if (p === null && P(68), d = n ? p.getNextSibling() : p.getPreviousSibling(), p = p.getParent(), p === null) break;
        d !== null || o.has(p.__key) || r.push(p);
      } while (d === null);
      i = d;
    }
    return n || r.reverse(), r;
  }
  isDirty() {
    const t = ne()._dirtyLeaves;
    return t !== null && t.has(this.__key);
  }
  getLatest() {
    const t = pe(this.__key);
    return t === null && P(113), t;
  }
  getWritable() {
    je();
    const t = dt(), n = ne(), r = t._nodeMap, o = this.__key, i = this.getLatest(), s = n._cloneNotNeeded, l = q();
    if (l !== null && l.setCachedNodes(null), s.has(o)) return jo(i), i;
    const c = kf(i);
    return s.add(o), jo(c), r.set(o, c), c;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(t, n) {
    P(70);
  }
  updateDOM(t, n, r) {
    P(71);
  }
  exportDOM(t) {
    return { element: this.createDOM(t._config, t) };
  }
  exportJSON() {
    P(72);
  }
  static importJSON(t) {
    P(18, this.name);
  }
  static transform() {
    return null;
  }
  remove(t) {
    ks(this, !0, t);
  }
  replace(t, n) {
    je();
    let r = q();
    r !== null && (r = r.clone()), Mi(this, t);
    const o = this.getLatest(), i = this.__key, s = t.__key, l = t.getWritable(), c = this.getParentOrThrow().getWritable(), u = c.__size;
    en(l);
    const d = o.getPreviousSibling(), p = o.getNextSibling(), h = o.__prev, f = o.__next, g = o.__parent;
    if (ks(o, !1, !0), d === null ? c.__first = s : d.getWritable().__next = s, l.__prev = h, p === null ? c.__last = s : p.getWritable().__prev = s, l.__next = f, l.__parent = g, c.__size = u, n && (D(this) && D(l) || P(139), this.getChildren().forEach((m) => {
      l.append(m);
    })), A(r)) {
      at(r);
      const m = r.anchor, y = r.focus;
      m.key === i && ic(m, l), y.key === i && ic(y, l);
    }
    return xt() === i && he(s), l;
  }
  insertAfter(t, n = !0) {
    je(), Mi(this, t);
    const r = this.getWritable(), o = t.getWritable(), i = o.getParent(), s = q();
    let l = !1, c = !1;
    if (i !== null) {
      const f = t.getIndexWithinParent();
      if (en(o), A(s)) {
        const g = i.__key, m = s.anchor, y = s.focus;
        l = m.type === "element" && m.key === g && m.offset === f + 1, c = y.type === "element" && y.key === g && y.offset === f + 1;
      }
    }
    const u = this.getNextSibling(), d = this.getParentOrThrow().getWritable(), p = o.__key, h = r.__next;
    if (u === null ? d.__last = p : u.getWritable().__prev = p, d.__size++, r.__next = p, o.__next = h, o.__prev = r.__key, o.__parent = r.__parent, n && A(s)) {
      const f = this.getIndexWithinParent();
      Oo(s, d, f + 1);
      const g = d.__key;
      l && s.anchor.set(g, f + 2, "element"), c && s.focus.set(g, f + 2, "element");
    }
    return t;
  }
  insertBefore(t, n = !0) {
    je(), Mi(this, t);
    const r = this.getWritable(), o = t.getWritable(), i = o.__key;
    en(o);
    const s = this.getPreviousSibling(), l = this.getParentOrThrow().getWritable(), c = r.__prev, u = this.getIndexWithinParent();
    s === null ? l.__first = i : s.getWritable().__next = i, l.__size++, r.__prev = i, o.__prev = c, o.__next = r.__key, o.__parent = r.__parent;
    const d = q();
    return n && A(d) && Oo(d, this.getParentOrThrow(), u), t;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return Pe();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(t, n) {
    je();
    const r = this.getPreviousSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select(0, 0);
    if (D(r)) return r.select();
    if (!z(r)) {
      const i = r.getIndexWithinParent() + 1;
      return o.select(i, i);
    }
    return r.select(t, n);
  }
  selectNext(t, n) {
    je();
    const r = this.getNextSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select();
    if (D(r)) return r.select(0, 0);
    if (!z(r)) {
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
class Gn extends li {
  static getType() {
    return "linebreak";
  }
  static clone(t) {
    return new Gn(t.__key);
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
  static importDOM() {
    return { br: (t) => function(n) {
      const r = n.parentElement;
      if (r !== null && Xl(r)) {
        const o = r.firstChild;
        if (o === n || o.nextSibling === n && to(o)) {
          const i = r.lastChild;
          if (i === n || i.previousSibling === n && to(i)) return !0;
        }
      }
      return !1;
    }(t) || function(n) {
      const r = n.parentElement;
      if (r !== null && Xl(r)) {
        const o = r.firstChild;
        if (o === n || o.nextSibling === n && to(o)) return !1;
        const i = r.lastChild;
        if (i === n || i.previousSibling === n && to(i)) return !0;
      }
      return !1;
    }(t) ? null : { conversion: b0, priority: 0 } };
  }
  static importJSON(t) {
    return on();
  }
  exportJSON() {
    return { type: "linebreak", version: 1 };
  }
}
function b0(e) {
  return { node: on() };
}
function on() {
  return ii(new Gn());
}
function yr(e) {
  return e instanceof Gn;
}
function to(e) {
  return e.nodeType === Rt && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function Bi(e, t) {
  return 16 & t ? "code" : t & ha ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function Hi(e, t) {
  return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function Rf(e, t, n, r, o) {
  const i = r.classList;
  let s = hr(o, "base");
  s !== void 0 && i.add(...s), s = hr(o, "underlineStrikethrough");
  let l = !1;
  const c = t & xo && t & vo;
  s !== void 0 && (n & xo && n & vo ? (l = !0, c || i.add(...s)) : c && i.remove(...s));
  for (const u in it) {
    const d = it[u];
    if (s = hr(o, u), s !== void 0) if (n & d) {
      if (l && (u === "underline" || u === "strikethrough")) {
        t & d && i.remove(...s);
        continue;
      }
      t & d && (!c || u !== "underline") && u !== "strikethrough" || i.add(...s);
    } else t & d && i.remove(...s);
  }
}
function Nf(e, t, n) {
  const r = t.firstChild, o = n.isComposing(), i = e + (o ? Zo : "");
  if (r == null) t.textContent = i;
  else {
    const s = r.nodeValue;
    if (s !== i) if (o || wt) {
      const [l, c, u] = function(d, p) {
        const h = d.length, f = p.length;
        let g = 0, m = 0;
        for (; g < h && g < f && d[g] === p[g]; ) g++;
        for (; m + g < h && m + g < f && d[h - m - 1] === p[f - m - 1]; ) m++;
        return [g, h - g - m, p.slice(g, f - m)];
      }(s, i);
      c !== 0 && r.deleteData(l, c), r.insertData(l, u);
    } else r.nodeValue = i;
  }
}
function nc(e, t, n, r, o, i) {
  Nf(o, e, t);
  const s = i.theme.text;
  s !== void 0 && Rf(0, 0, r, e, s);
}
function no(e, t) {
  const n = document.createElement(t);
  return n.appendChild(e), n;
}
class Nt extends li {
  static getType() {
    return "text";
  }
  static clone(t) {
    return new Nt(t.__text, t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__format = t.__format, this.__style = t.__style, this.__mode = t.__mode, this.__detail = t.__detail;
  }
  constructor(t, n) {
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
    return Xk[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === xt();
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
    const n = it[t];
    return !!(this.getFormat() & n);
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, n) {
    return wo(this.getLatest().__format, t, n);
  }
  canHaveFormat() {
    return !0;
  }
  createDOM(t, n) {
    const r = this.__format, o = Bi(0, r), i = Hi(0, r), s = o === null ? i : o, l = document.createElement(s);
    let c = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), o !== null && (c = document.createElement(i), l.appendChild(c)), nc(c, this, 0, r, this.__text, t);
    const u = this.__style;
    return u !== "" && (l.style.cssText = u), l;
  }
  updateDOM(t, n, r) {
    const o = this.__text, i = t.__format, s = this.__format, l = Bi(0, i), c = Bi(0, s), u = Hi(0, i), d = Hi(0, s);
    if ((l === null ? u : l) !== (c === null ? d : c)) return !0;
    if (l === c && u !== d) {
      const m = n.firstChild;
      m == null && P(48);
      const y = document.createElement(d);
      return nc(y, this, 0, s, o, r), n.replaceChild(y, m), !1;
    }
    let p = n;
    c !== null && l !== null && (p = n.firstChild, p == null && P(49)), Nf(o, p, this);
    const h = r.theme.text;
    h !== void 0 && i !== s && Rf(0, i, s, p, h);
    const f = t.__style, g = this.__style;
    return f !== g && (n.style.cssText = g), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: S0, priority: 0 }), b: () => ({ conversion: w0, priority: 0 }), code: () => ({ conversion: gt, priority: 0 }), em: () => ({ conversion: gt, priority: 0 }), i: () => ({ conversion: gt, priority: 0 }), s: () => ({ conversion: gt, priority: 0 }), span: () => ({ conversion: k0, priority: 0 }), strong: () => ({ conversion: gt, priority: 0 }), sub: () => ({ conversion: gt, priority: 0 }), sup: () => ({ conversion: gt, priority: 0 }), u: () => ({ conversion: gt, priority: 0 }) };
  }
  static importJSON(t) {
    const n = te(t.text);
    return n.setFormat(t.format), n.setDetail(t.detail), n.setMode(t.mode), n.setStyle(t.style), n;
  }
  exportDOM(t) {
    let { element: n } = super.exportDOM(t);
    return n !== null && si(n) || P(132), n.style.whiteSpace = "pre-wrap", this.hasFormat("bold") && (n = no(n, "b")), this.hasFormat("italic") && (n = no(n, "i")), this.hasFormat("strikethrough") && (n = no(n, "s")), this.hasFormat("underline") && (n = no(n, "u")), { element: n };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), type: "text", version: 1 };
  }
  selectionTransform(t, n) {
  }
  setFormat(t) {
    const n = this.getWritable();
    return n.__format = typeof t == "string" ? it[t] : t, n;
  }
  setDetail(t) {
    const n = this.getWritable();
    return n.__detail = typeof t == "string" ? Wk[t] : t, n;
  }
  setStyle(t) {
    const n = this.getWritable();
    return n.__style = t, n;
  }
  toggleFormat(t) {
    const n = wo(this.getFormat(), t, null);
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
    const n = Kk[t];
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
    je();
    let r = t, o = n;
    const i = q(), s = this.getTextContent(), l = this.__key;
    if (typeof s == "string") {
      const c = s.length;
      r === void 0 && (r = c), o === void 0 && (o = c);
    } else r = 0, o = 0;
    if (!A(i)) return Ff(l, r, l, o, "text", "text");
    {
      const c = xt();
      c !== i.anchor.key && c !== i.focus.key || he(l), i.setTextNodeRange(this, r, this, o);
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
    const u = q();
    if (o && A(u)) {
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
    je();
    const n = this.getLatest(), r = n.getTextContent(), o = n.__key, i = xt(), s = new Set(t), l = [], c = r.length;
    let u = "";
    for (let E = 0; E < c; E++) u !== "" && s.has(E) && (l.push(u), u = ""), u += r[E];
    u !== "" && l.push(u);
    const d = l.length;
    if (d === 0) return [];
    if (l[0] === r) return [n];
    const p = l[0], h = n.getParent();
    let f;
    const g = n.getFormat(), m = n.getStyle(), y = n.__detail;
    let x = !1;
    n.isSegmented() ? (f = te(p), f.__format = g, f.__style = m, f.__detail = y, x = !0) : (f = n.getWritable(), f.__text = p);
    const b = q(), w = [f];
    let C = p.length;
    for (let E = 1; E < d; E++) {
      const j = l[E], O = j.length, S = te(j).getWritable();
      S.__format = g, S.__style = m, S.__detail = y;
      const I = S.__key, $ = C + O;
      if (A(b)) {
        const R = b.anchor, L = b.focus;
        R.key === o && R.type === "text" && R.offset > C && R.offset <= $ && (R.key = I, R.offset -= C, b.dirty = !0), L.key === o && L.type === "text" && L.offset > C && L.offset <= $ && (L.key = I, L.offset -= C, b.dirty = !0);
      }
      i === o && he(I), C = $, w.push(S);
    }
    if (h !== null) {
      (function(O) {
        const S = O.getPreviousSibling(), I = O.getNextSibling();
        S !== null && jo(S), I !== null && jo(I);
      })(this);
      const E = h.getWritable(), j = this.getIndexWithinParent();
      x ? (E.splice(j, 0, w), this.remove()) : E.splice(j, 1, w), A(b) && Oo(b, h, j, d - 1);
    }
    return w;
  }
  mergeWithSibling(t) {
    const n = t === this.getPreviousSibling();
    n || t === this.getNextSibling() || P(50);
    const r = this.__key, o = t.__key, i = this.__text, s = i.length;
    xt() === o && he(r);
    const l = q();
    if (A(l)) {
      const p = l.anchor, h = l.focus;
      p !== null && p.key === o && (fc(p, n, r, t, s), l.dirty = !0), h !== null && h.key === o && (fc(h, n, r, t, s), l.dirty = !0);
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
function k0(e) {
  return { forChild: Ta(e.style), node: null };
}
function w0(e) {
  const t = e, n = t.style.fontWeight === "normal";
  return { forChild: Ta(t.style, n ? void 0 : "bold"), node: null };
}
const rc = /* @__PURE__ */ new WeakMap();
function j0(e) {
  return e.nodeName === "PRE" || e.nodeType === zr && e.style !== void 0 && e.style.whiteSpace !== void 0 && e.style.whiteSpace.startsWith("pre");
}
function S0(e) {
  const t = e;
  e.parentElement === null && P(129);
  let n = t.textContent || "";
  if (function(r) {
    let o, i = r.parentNode;
    const s = [r];
    for (; i !== null && (o = rc.get(i)) === void 0 && !j0(i); ) s.push(i), i = i.parentNode;
    const l = o === void 0 ? i : o;
    for (let c = 0; c < s.length; c++) rc.set(s[c], l);
    return l;
  }(t) !== null) {
    const r = n.split(/(\r?\n|\t)/), o = [], i = r.length;
    for (let s = 0; s < i; s++) {
      const l = r[s];
      l === `
` || l === `\r
` ? o.push(on()) : l === "	" ? o.push(Oa()) : l !== "" && o.push(te(l));
    }
    return { node: o };
  }
  if (n = n.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), n === "") return { node: null };
  if (n[0] === " ") {
    let r = t, o = !0;
    for (; r !== null && (r = oc(r, !1)) !== null; ) {
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
    for (; r !== null && (r = oc(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        o = !1;
        break;
      }
    o && (n = n.slice(0, n.length - 1));
  }
  return n === "" ? { node: null } : { node: te(n) };
}
function oc(e, t) {
  let n = e;
  for (; ; ) {
    let r;
    for (; (r = t ? n.nextSibling : n.previousSibling) === null; ) {
      const i = n.parentElement;
      if (i === null) return null;
      n = i;
    }
    if (n = r, n.nodeType === zr) {
      const i = n.style.display;
      if (i === "" && !d0(n) || i !== "" && !i.startsWith("inline")) return null;
    }
    let o = n;
    for (; (o = t ? n.firstChild : n.lastChild) !== null; ) n = o;
    if (n.nodeType === Rt) return n;
    if (n.nodeName === "BR") return null;
  }
}
const C0 = { code: "code", em: "italic", i: "italic", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function gt(e) {
  const t = C0[e.nodeName.toLowerCase()];
  return t === void 0 ? { node: null } : { forChild: Ta(e.style, t), node: null };
}
function te(e = "") {
  return ii(new Nt(e));
}
function z(e) {
  return e instanceof Nt;
}
function Ta(e, t) {
  const n = e.fontWeight, r = e.textDecoration.split(" "), o = n === "700" || n === "bold", i = r.includes("line-through"), s = e.fontStyle === "italic", l = r.includes("underline"), c = e.verticalAlign;
  return (u) => (z(u) && (o && !u.hasFormat("bold") && u.toggleFormat("bold"), i && !u.hasFormat("strikethrough") && u.toggleFormat("strikethrough"), s && !u.hasFormat("italic") && u.toggleFormat("italic"), l && !u.hasFormat("underline") && u.toggleFormat("underline"), c !== "sub" || u.hasFormat("subscript") || u.toggleFormat("subscript"), c !== "super" || u.hasFormat("superscript") || u.toggleFormat("superscript"), t && !u.hasFormat(t) && u.toggleFormat(t)), u);
}
class Nr extends Nt {
  static getType() {
    return "tab";
  }
  static clone(t) {
    return new Nr(t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__text = t.__text;
  }
  constructor(t) {
    super("	", t), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    const n = Oa();
    return n.setFormat(t.format), n.setStyle(t.style), n;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "tab", version: 1 };
  }
  setTextContent(t) {
    P(126);
  }
  setDetail(t) {
    P(127);
  }
  setMode(t) {
    P(128);
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Oa() {
  return ii(new Nr());
}
function _0(e) {
  return e instanceof Nr;
}
class E0 {
  constructor(t, n, r) {
    this._selection = null, this.key = t, this.offset = n, this.type = r;
  }
  is(t) {
    return this.key === t.key && this.offset === t.offset && this.type === t.type;
  }
  isBefore(t) {
    let n = this.getNode(), r = t.getNode();
    const o = this.offset, i = t.offset;
    if (D(n)) {
      const s = n.getDescendantByIndex(o);
      n = s ?? n;
    }
    if (D(r)) {
      const s = r.getDescendantByIndex(i);
      r = s ?? r;
    }
    return n === r ? o < i : n.isBefore(r);
  }
  getNode() {
    const t = pe(this.key);
    return t === null && P(20), t;
  }
  set(t, n, r) {
    const o = this._selection, i = this.key;
    this.key = t, this.offset = n, this.type = r, Mr() || (xt() === i && he(t), o !== null && (o.setCachedNodes(null), o.dirty = !0));
  }
}
function _t(e, t, n) {
  return new E0(e, t, n);
}
function Ui(e, t) {
  let n = t.__key, r = e.offset, o = "element";
  if (z(t)) {
    o = "text";
    const i = t.getTextContentSize();
    r > i && (r = i);
  } else if (!D(t)) {
    const i = t.getNextSibling();
    if (z(i)) n = i.__key, r = 0, o = "text";
    else {
      const s = t.getParent();
      s && (n = s.__key, r = t.getIndexWithinParent() + 1);
    }
  }
  e.set(n, r, o);
}
function ic(e, t) {
  if (D(t)) {
    const n = t.getLastDescendant();
    D(n) || z(n) ? Ui(e, n) : Ui(e, t);
  } else Ui(e, t);
}
function vt(e, t, n, r) {
  e.key = t, e.offset = n, e.type = r;
}
class ci {
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
    if (!$a(t)) return !1;
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
    return new ci(new Set(this._nodes));
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
    if (z(o)) i = o.select();
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
      const i = pe(o);
      i !== null && r.push(i);
    }
    return Mr() || (this._cachedNodes = r), r;
  }
  getTextContent() {
    const t = this.getNodes();
    let n = "";
    for (let r = 0; r < t.length; r++) n += t[r].getTextContent();
    return n;
  }
}
function A(e) {
  return e instanceof un;
}
class un {
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
    return !!A(t) && this.anchor.is(t.anchor) && this.focus.is(t.focus) && this.format === t.format && this.style === t.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    const t = this._cachedNodes;
    if (t !== null) return t;
    const n = this.anchor, r = this.focus, o = n.isBefore(r), i = o ? n : r, s = o ? r : n;
    let l = i.getNode(), c = s.getNode();
    const u = i.offset, d = s.offset;
    if (D(l)) {
      const h = l.getDescendantByIndex(u);
      l = h ?? l;
    }
    if (D(c)) {
      let h = c.getDescendantByIndex(d);
      h !== null && h !== l && c.getChildAtIndex(d) === h && (h = h.getPreviousSibling()), c = h ?? c;
    }
    let p;
    return p = l.is(c) ? D(l) && l.getChildrenSize() > 0 ? [] : [l] : l.getNodesBetween(c), Mr() || (this._cachedNodes = p), p;
  }
  setTextNodeRange(t, n, r, o) {
    vt(this.anchor, t.__key, n, "text"), vt(this.focus, r.__key, o, "text"), this._cachedNodes = null, this.dirty = !0;
  }
  getTextContent() {
    const t = this.getNodes();
    if (t.length === 0) return "";
    const n = t[0], r = t[t.length - 1], o = this.anchor, i = this.focus, s = o.isBefore(i), [l, c] = ws(this);
    let u = "", d = !0;
    for (let p = 0; p < t.length; p++) {
      const h = t[p];
      if (D(h) && !h.isInline()) d || (u += `
`), d = !h.isEmpty();
      else if (d = !1, z(h)) {
        let f = h.getTextContent();
        h === n ? h === r ? o.type === "element" && i.type === "element" && i.offset !== o.offset || (f = l < c ? f.slice(l, c) : f.slice(c, l)) : f = s ? f.slice(l) : f.slice(c) : h === r && (f = s ? f.slice(0, c) : f.slice(0, l)), u += f;
      } else !Q(h) && !yr(h) || h === r && this.isCollapsed() || (u += h.getTextContent());
    }
    return u;
  }
  applyDOMRange(t) {
    const n = ne(), r = n.getEditorState()._selection, o = qf(t.startContainer, t.startOffset, t.endContainer, t.endOffset, n, r);
    if (o === null) return;
    const [i, s] = o;
    vt(this.anchor, i.key, i.offset, i.type), vt(this.focus, s.key, s.offset, s.type), this._cachedNodes = null;
  }
  clone() {
    const t = this.anchor, n = this.focus;
    return new un(_t(t.key, t.offset, t.type), _t(n.key, n.offset, n.type), this.format, this.style);
  }
  toggleFormat(t) {
    this.format = wo(this.format, t, null), this.dirty = !0;
  }
  setStyle(t) {
    this.style = t, this.dirty = !0;
  }
  hasFormat(t) {
    const n = it[t];
    return !!(this.format & n);
  }
  insertRawText(t) {
    const n = t.split(/(\r?\n|\t)/), r = [], o = n.length;
    for (let i = 0; i < o; i++) {
      const s = n[i];
      s === `
` || s === `\r
` ? r.push(on()) : s === "	" ? r.push(Oa()) : r.push(te(s));
    }
    this.insertNodes(r);
  }
  insertText(t) {
    const n = this.anchor, r = this.focus, o = this.format, i = this.style;
    let s = n, l = r;
    !this.isCollapsed() && r.isBefore(n) && (s = r, l = n), s.type === "element" && function(y, x, b, w) {
      const C = y.getNode(), E = C.getChildAtIndex(y.offset), j = te(), O = Se(C) ? Pe().append(j) : j;
      j.setFormat(b), j.setStyle(w), E === null ? C.append(O) : E.insertBefore(O), y.is(x) && x.set(j.__key, 0, "text"), y.set(j.__key, 0, "text");
    }(s, l, o, i);
    const c = s.offset;
    let u = l.offset;
    const d = this.getNodes(), p = d.length;
    let h = d[0];
    z(h) || P(26);
    const f = h.getTextContent().length, g = h.getParentOrThrow();
    let m = d[p - 1];
    if (p === 1 && l.type === "element" && (u = f, l.set(s.key, u, "text")), this.isCollapsed() && c === f && (h.isSegmented() || h.isToken() || !h.canInsertTextAfter() || !g.canInsertTextAfter() && h.getNextSibling() === null)) {
      let y = h.getNextSibling();
      if (z(y) && y.canInsertTextBefore() && !Vt(y) || (y = te(), y.setFormat(o), y.setStyle(i), g.canInsertTextAfter() ? h.insertAfter(y) : g.insertAfter(y)), y.select(0, 0), h = y, t !== "") return void this.insertText(t);
    } else if (this.isCollapsed() && c === 0 && (h.isSegmented() || h.isToken() || !h.canInsertTextBefore() || !g.canInsertTextBefore() && h.getPreviousSibling() === null)) {
      let y = h.getPreviousSibling();
      if (z(y) && !Vt(y) || (y = te(), y.setFormat(o), g.canInsertTextBefore() ? h.insertBefore(y) : g.insertBefore(y)), y.select(), h = y, t !== "") return void this.insertText(t);
    } else if (h.isSegmented() && c !== f) {
      const y = te(h.getTextContent());
      y.setFormat(o), h.replace(y), h = y;
    } else if (!this.isCollapsed() && t !== "") {
      const y = m.getParent();
      if (!g.canInsertTextBefore() || !g.canInsertTextAfter() || D(y) && (!y.canInsertTextBefore() || !y.canInsertTextAfter())) return this.insertText(""), Mf(this.anchor, this.focus, null), void this.insertText(t);
    }
    if (p === 1) {
      if (h.isToken()) {
        const w = te(t);
        return w.select(), void h.replace(w);
      }
      const y = h.getFormat(), x = h.getStyle();
      if (c !== u || y === o && x === i) {
        if (_0(h)) {
          const w = te(t);
          return w.setFormat(o), w.setStyle(i), w.select(), void h.replace(w);
        }
      } else {
        if (h.getTextContent() !== "") {
          const w = te(t);
          if (w.setFormat(o), w.setStyle(i), w.select(), c === 0) h.insertBefore(w, !1);
          else {
            const [C] = h.splitText(c);
            C.insertAfter(w, !1);
          }
          return void (w.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= t.length));
        }
        h.setFormat(o), h.setStyle(i);
      }
      const b = u - c;
      h = h.spliceText(c, b, t, !0), h.getTextContent() === "" ? h.remove() : this.anchor.type === "text" && (h.isComposing() ? this.anchor.offset -= t.length : (this.format = y, this.style = x));
    } else {
      const y = /* @__PURE__ */ new Set([...h.getParentKeys(), ...m.getParentKeys()]), x = D(h) ? h : h.getParentOrThrow();
      let b = D(m) ? m : m.getParentOrThrow(), w = m;
      if (!x.is(b) && b.isInline()) do
        w = b, b = b.getParentOrThrow();
      while (b.isInline());
      if (l.type === "text" && (u !== 0 || m.getTextContent() === "") || l.type === "element" && m.getIndexWithinParent() < u) if (z(m) && !m.isToken() && u !== m.getTextContentSize()) {
        if (m.isSegmented()) {
          const S = te(m.getTextContent());
          m.replace(S), m = S;
        }
        Se(l.getNode()) || l.type !== "text" || (m = m.spliceText(0, u, "")), y.add(m.__key);
      } else {
        const S = m.getParentOrThrow();
        S.canBeEmpty() || S.getChildrenSize() !== 1 ? m.remove() : S.remove();
      }
      else y.add(m.__key);
      const C = b.getChildren(), E = new Set(d), j = x.is(b), O = x.isInline() && h.getNextSibling() === null ? x : h;
      for (let S = C.length - 1; S >= 0; S--) {
        const I = C[S];
        if (I.is(h) || D(I) && I.isParentOf(h)) break;
        I.isAttached() && (!E.has(I) || I.is(w) ? j || O.insertAfter(I, !1) : I.remove());
      }
      if (!j) {
        let S = b, I = null;
        for (; S !== null; ) {
          const $ = S.getChildren(), R = $.length;
          (R === 0 || $[R - 1].is(I)) && (y.delete(S.__key), I = S), S = S.getParent();
        }
      }
      if (h.isToken()) if (c === f) h.select();
      else {
        const S = te(t);
        S.select(), h.replace(S);
      }
      else h = h.spliceText(c, f - c, t, !0), h.getTextContent() === "" ? h.remove() : h.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= t.length);
      for (let S = 1; S < p; S++) {
        const I = d[S], $ = I.__key;
        y.has($) || I.remove();
      }
    }
  }
  removeText() {
    if (this.isCollapsed()) return;
    const { anchor: t, focus: n } = this, r = this.getNodes(), o = this.isBackward() ? n : t, i = this.isBackward() ? t : n;
    let s = o.getNode(), l = i.getNode();
    const c = ir(s, yt), u = ir(l, yt);
    z(s) && s.isToken() && o.offset < s.getTextContentSize() && (o.offset = 0), i.offset > 0 && z(l) && l.isToken() && (i.offset = l.getTextContentSize()), r.forEach((p) => {
      pr(s, p) || pr(l, p) || p.getKey() === s.getKey() || p.getKey() === l.getKey() || p.remove();
    });
    const d = (p, h) => {
      if (p.getTextContent() === "") p.remove();
      else if (h !== 0 && Vt(p)) {
        const f = te(p.getTextContent());
        return f.setFormat(p.getFormat()), f.setStyle(p.getStyle()), p.replace(f);
      }
    };
    if (s === l && z(s)) {
      const p = Math.abs(n.offset - t.offset);
      return s.spliceText(o.offset, p, "", !0), void d(s, p);
    }
    if (z(s)) {
      const p = s.getTextContentSize() - o.offset;
      s.spliceText(o.offset, p, ""), s = d(s, p) || s;
    }
    z(l) && (l.spliceText(0, i.offset, ""), l = d(l, i.offset) || l), s.isAttached() && z(s) ? s.selectEnd() : l.isAttached() && z(l) && l.selectStart(), D(c) && D(u) && c !== u && (c.append(...u.getChildren()), u.remove(), i.set(o.key, o.offset, o.type));
  }
  formatText(t, n = null) {
    if (this.isCollapsed()) return this.toggleFormat(t), void he(null);
    const r = this.getNodes(), o = [];
    for (const C of r) z(C) && o.push(C);
    const i = (C) => {
      r.forEach((E) => {
        if (Io(E)) {
          const j = E.getFormatFlags(t, C);
          E.setTextFormat(j);
        }
      });
    }, s = o.length;
    if (s === 0) return this.toggleFormat(t), he(null), void i(n);
    const l = this.anchor, c = this.focus, u = this.isBackward(), d = u ? c : l, p = u ? l : c;
    let h = 0, f = o[0], g = d.type === "element" ? 0 : d.offset;
    if (d.type === "text" && g === f.getTextContentSize() && (h = 1, f = o[1], g = 0), f == null) return;
    const m = f.getFormatFlags(t, n);
    i(m);
    const y = s - 1;
    let x = o[y];
    const b = p.type === "text" ? p.offset : x.getTextContentSize();
    if (f.is(x)) {
      if (g === b) return;
      if (Vt(f) || g === 0 && b === f.getTextContentSize()) f.setFormat(m);
      else {
        const C = f.splitText(g, b), E = g === 0 ? C[0] : C[1];
        E.setFormat(m), d.type === "text" && d.set(E.__key, 0, "text"), p.type === "text" && p.set(E.__key, b - g, "text");
      }
      return void (this.format = m);
    }
    g === 0 || Vt(f) || ([, f] = f.splitText(g), g = 0), f.setFormat(m);
    const w = x.getFormatFlags(t, m);
    b > 0 && (b === x.getTextContentSize() || Vt(x) || ([x] = x.splitText(b)), x.setFormat(w));
    for (let C = h + 1; C < y; C++) {
      const E = o[C], j = E.getFormatFlags(t, w);
      E.setFormat(j);
    }
    d.type === "text" && d.set(f.__key, g, "text"), p.type === "text" && p.set(x.__key, b, "text"), this.format = m | w;
  }
  insertNodes(t) {
    if (t.length === 0) return;
    if (this.anchor.key === "root") {
      this.insertParagraph();
      const g = q();
      return A(g) || P(134), g.insertNodes(t);
    }
    const n = (this.isBackward() ? this.focus : this.anchor).getNode(), r = ir(n, yt), o = t[t.length - 1];
    if (D(r) && "__language" in r) {
      if ("__language" in t[0]) this.insertText(t[0].getTextContent());
      else {
        const g = Vi(this);
        r.splice(g, 0, t), o.selectEnd();
      }
      return;
    }
    if (!t.some((g) => (D(g) || Q(g)) && !g.isInline())) {
      D(r) || P(211, n.constructor.name, n.getType());
      const g = Vi(this);
      return r.splice(g, 0, t), void o.selectEnd();
    }
    const i = function(g) {
      const m = Pe();
      let y = null;
      for (let x = 0; x < g.length; x++) {
        const b = g[x], w = yr(b);
        if (w || Q(b) && b.isInline() || D(b) && b.isInline() || z(b) || b.isParentRequired()) {
          if (y === null && (y = b.createParentElementNode(), m.append(y), w)) continue;
          y !== null && y.append(b);
        } else m.append(b), y = null;
      }
      return m;
    }(t), s = i.getLastDescendant(), l = i.getChildren(), c = !D(r) || !r.isEmpty() ? this.insertParagraph() : null, u = l[l.length - 1];
    let d = l[0];
    var p;
    D(p = d) && yt(p) && !p.isEmpty() && D(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (D(r) || P(211, n.constructor.name, n.getType()), r.append(...d.getChildren()), d = l[1]), d && (r === null && P(212, n.constructor.name, n.getType()), function(g, m, y) {
      const x = m.getParentOrThrow().getLastChild();
      let b = m;
      const w = [m];
      for (; b !== x; ) b.getNextSibling() || P(140), b = b.getNextSibling(), w.push(b);
      let C = g;
      for (const E of w) C = C.insertAfter(E);
    }(r, d));
    const h = ir(s, yt);
    c && D(h) && (c.canMergeWhenEmpty() || yt(u)) && (h.append(...c.getChildren()), c.remove()), D(r) && r.isEmpty() && r.remove(), s.selectEnd();
    const f = D(r) ? r.getLastChild() : null;
    yr(f) && h !== r && f.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const s = Pe();
      return ae().splice(this.anchor.offset, 0, [s]), s.select(), s;
    }
    const t = Vi(this), n = ir(this.anchor.getNode(), yt);
    D(n) || P(213);
    const r = n.getChildAtIndex(t), o = r ? [r, ...r.getNextSiblings()] : [], i = n.insertNewAfter(this, !1);
    return i ? (i.append(...o), i.selectStart(), i) : null;
  }
  insertLineBreak(t) {
    const n = on();
    if (this.insertNodes([n]), t) {
      const r = n.getParentOrThrow(), o = n.getIndexWithinParent();
      r.select(o, o);
    }
  }
  extract() {
    const t = this.getNodes(), n = t.length, r = n - 1, o = this.anchor, i = this.focus;
    let s = t[0], l = t[r];
    const [c, u] = ws(this);
    if (n === 0) return [];
    if (n === 1) {
      if (z(s) && !this.isCollapsed()) {
        const p = c > u ? u : c, h = c > u ? c : u, f = s.splitText(p, h), g = p === 0 ? f[0] : f[1];
        return g != null ? [g] : [];
      }
      return [s];
    }
    const d = o.isBefore(i);
    if (z(s)) {
      const p = d ? c : u;
      p === s.getTextContentSize() ? t.shift() : p !== 0 && ([, s] = s.splitText(p), t[0] = s);
    }
    if (z(l)) {
      const p = l.getTextContent().length, h = d ? u : c;
      h === 0 ? t.pop() : h !== p && ([l] = l.splitText(h), t[r] = l);
    }
    return t;
  }
  modify(t, n, r) {
    const o = this.focus, i = this.anchor, s = t === "move", l = us(o, n);
    if (Q(l) && !l.isIsolated()) {
      if (s && l.isKeyboardSelectable()) {
        const f = uc();
        return f.add(l.__key), void at(f);
      }
      const h = n ? l.getPreviousSibling() : l.getNextSibling();
      if (z(h)) {
        const f = h.__key, g = n ? h.getTextContent().length : 0;
        return o.set(f, g, "text"), void (s && i.set(f, g, "text"));
      }
      {
        const f = l.getParentOrThrow();
        let g, m;
        return D(h) ? (m = h.__key, g = n ? h.getChildrenSize() : 0) : (g = l.getIndexWithinParent(), m = f.__key, n || g++), o.set(m, g, "element"), void (s && i.set(m, g, "element"));
      }
    }
    const c = ne(), u = He(c._window);
    if (!u) return;
    const d = c._blockCursorElement, p = c._rootElement;
    if (p === null || d === null || !D(l) || l.isInline() || l.canBeEmpty() || Ea(d, c, p), function(h, f, g, m) {
      h.modify(f, g, m);
    }(u, t, n ? "backward" : "forward", r), u.rangeCount > 0) {
      const h = u.getRangeAt(0), f = this.anchor.getNode(), g = Se(f) ? f : c0(f);
      if (this.applyDOMRange(h), this.dirty = !0, !s) {
        const m = this.getNodes(), y = [];
        let x = !1;
        for (let b = 0; b < m.length; b++) {
          const w = m[b];
          pr(w, g) ? y.push(w) : x = !0;
        }
        if (x && y.length > 0) if (n) {
          const b = y[0];
          D(b) ? b.selectStart() : b.getParentOrThrow().selectStart();
        } else {
          const b = y[y.length - 1];
          D(b) ? b.selectEnd() : b.getParentOrThrow().selectEnd();
        }
        u.anchorNode === h.startContainer && u.anchorOffset === h.startOffset || function(b) {
          const w = b.focus, C = b.anchor, E = C.key, j = C.offset, O = C.type;
          vt(C, w.key, w.offset, w.type), vt(w, E, j, O), b._cachedNodes = null;
        }(this);
      }
    }
  }
  forwardDeletion(t, n, r) {
    if (!r && (t.type === "element" && D(n) && t.offset === n.getChildrenSize() || t.type === "text" && t.offset === n.getTextContentSize())) {
      const o = n.getParent(), i = n.getNextSibling() || (o === null ? null : o.getNextSibling());
      if (D(i) && i.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(t) {
    const n = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let o = r.getNode();
      if (this.forwardDeletion(r, o, t)) return;
      const i = this.focus, s = us(i, t);
      if (Q(s) && !s.isIsolated()) {
        if (s.isKeyboardSelectable() && D(o) && o.getChildrenSize() === 0) {
          o.remove();
          const l = uc();
          l.add(s.__key), at(l);
        } else
          s.remove(), ne().dispatchCommand(sa, void 0);
        return;
      }
      if (!t && D(s) && D(o) && o.isEmpty()) return o.remove(), void s.selectStart();
      if (this.modify("extend", t, "character"), this.isCollapsed()) {
        if (t && r.offset === 0 && (r.type === "element" ? r.getNode() : r.getNode().getParentOrThrow()).collapseAtStart(this))
          return;
      } else {
        const l = i.type === "text" ? i.getNode() : null;
        if (o = r.type === "text" ? r.getNode() : null, l !== null && l.isSegmented()) {
          const c = i.offset, u = l.getTextContentSize();
          if (l.is(o) || t && c !== u || !t && c !== 0) return void ac(l, t, c);
        } else if (o !== null && o.isSegmented()) {
          const c = r.offset, u = o.getTextContentSize();
          if (o.is(l) || t && c !== 0 || !t && c !== u) return void ac(o, t, c);
        }
        (function(c, u) {
          const d = c.anchor, p = c.focus, h = d.getNode(), f = p.getNode();
          if (h === f && d.type === "text" && p.type === "text") {
            const g = d.offset, m = p.offset, y = g < m, x = y ? g : m, b = y ? m : g, w = b - 1;
            x !== w && (yf(h.getTextContent().slice(x, b)) || (u ? p.offset = w : d.offset = w));
          }
        })(this, t);
      }
    }
    if (this.removeText(), t && !n && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && Se(r.getParent()) && r.getIndexWithinParent() === 0 && r.collapseAtStart(this);
    }
  }
  deleteLine(t) {
    if (this.isCollapsed()) {
      const n = this.anchor.type === "element";
      if (n && this.insertText(" "), this.modify("extend", t, "lineboundary"), this.isCollapsed() && this.anchor.offset === 0 && this.modify("extend", t, "character"), n) {
        const r = t ? this.anchor : this.focus;
        r.set(r.key, r.offset + 1, r.type);
      }
    }
    this.removeText();
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
function $a(e) {
  return e instanceof ci;
}
function sc(e) {
  const t = e.offset;
  if (e.type === "text") return t;
  const n = e.getNode();
  return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function ws(e) {
  const t = e.getStartEndPoints();
  if (t === null) return [0, 0];
  const [n, r] = t;
  return n.type === "element" && r.type === "element" && n.key === r.key && n.offset === r.offset ? [0, 0] : [sc(n), sc(r)];
}
function ac(e, t, n) {
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
function lc(e, t, n, r) {
  let o, i = t;
  if (e.nodeType === zr) {
    let s = !1;
    const l = e.childNodes, c = l.length, u = r._blockCursorElement;
    i === c && (s = !0, i = c - 1);
    let d = l[i], p = !1;
    if (d === u) d = l[i + 1], p = !0;
    else if (u !== null) {
      const h = u.parentNode;
      e === h && t > Array.prototype.indexOf.call(h.children, u) && i--;
    }
    if (o = kn(d), z(o)) i = Bl(o, s);
    else {
      let h = kn(e);
      if (h === null) return null;
      if (D(h)) {
        const f = r.getElementByKey(h.getKey());
        f === null && P(214), [h, i] = h.getDOMSlot(f).resolveChildIndex(h, f, e, t), D(h) || P(215), s && i >= h.getChildrenSize() && (i = Math.max(0, h.getChildrenSize() - 1));
        let m = h.getChildAtIndex(i);
        if (D(m) && function(y, x, b) {
          const w = y.getParent();
          return b === null || w === null || !w.canBeEmpty() || w !== b.getNode();
        }(m, 0, n)) {
          const y = s ? m.getLastDescendant() : m.getFirstDescendant();
          y === null ? h = m : (m = y, h = D(m) ? m : m.getParentOrThrow()), i = 0;
        }
        z(m) ? (o = m, h = null, i = Bl(m, s)) : m !== h && s && !p && (D(h) || P(216), i = Math.min(h.getChildrenSize(), i + 1));
      } else {
        const f = h.getIndexWithinParent();
        i = t === 0 && Q(h) && kn(e) === h ? f : f + 1, h = h.getParentOrThrow();
      }
      if (D(h)) return _t(h.__key, i, "element");
    }
  } else o = kn(e);
  return z(o) ? _t(o.__key, i, "text") : null;
}
function cc(e, t, n) {
  const r = e.offset, o = e.getNode();
  if (r === 0) {
    const i = o.getPreviousSibling(), s = o.getParent();
    if (t) {
      if ((n || !t) && i === null && D(s) && s.isInline()) {
        const l = s.getPreviousSibling();
        z(l) && (e.key = l.__key, e.offset = l.getTextContent().length);
      }
    } else D(i) && !n && i.isInline() ? (e.key = i.__key, e.offset = i.getChildrenSize(), e.type = "element") : z(i) && (e.key = i.__key, e.offset = i.getTextContent().length);
  } else if (r === o.getTextContent().length) {
    const i = o.getNextSibling(), s = o.getParent();
    if (t && D(i) && i.isInline()) e.key = i.__key, e.offset = 0, e.type = "element";
    else if ((n || t) && i === null && D(s) && s.isInline() && !s.canInsertTextAfter()) {
      const l = s.getNextSibling();
      z(l) && (e.key = l.__key, e.offset = 0);
    }
  }
}
function Mf(e, t, n) {
  if (e.type === "text" && t.type === "text") {
    const r = e.isBefore(t), o = e.is(t);
    cc(e, r, o), cc(t, !r, o), o && (t.key = e.key, t.offset = e.offset, t.type = e.type);
    const i = ne();
    if (i.isComposing() && i._compositionKey !== e.key && A(n)) {
      const s = n.anchor, l = n.focus;
      vt(e, s.key, s.offset, s.type), vt(t, l.key, l.offset, l.type);
    }
  }
}
function qf(e, t, n, r, o, i) {
  if (e === null || n === null || !ei(o, e, n)) return null;
  const s = lc(e, t, A(i) ? i.anchor : null, o);
  if (s === null) return null;
  const l = lc(n, r, A(i) ? i.focus : null, o);
  if (l === null) return null;
  if (s.type === "element" && l.type === "element") {
    const c = kn(e), u = kn(n);
    if (Q(c) && Q(u)) return null;
  }
  return Mf(s, l, i), [s, l];
}
function Ff(e, t, n, r, o, i) {
  const s = dt(), l = new un(_t(e, t, o), _t(n, r, i), 0, "");
  return l.dirty = !0, s._selection = l, l;
}
function uc() {
  return new ci(/* @__PURE__ */ new Set());
}
function Ia(e, t, n, r) {
  const o = n._window;
  if (o === null) return null;
  const i = r || o.event, s = i ? i.type : void 0, l = s === "selectionchange", c = !cs && (l || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && i && i.detail === 3 || s === "drop" || s === void 0);
  let u, d, p, h;
  if (A(e) && !c) return e.clone();
  if (t === null) return null;
  if (u = t.anchorNode, d = t.focusNode, p = t.anchorOffset, h = t.focusOffset, l && A(e) && !ei(n, u, d)) return e.clone();
  const f = qf(u, p, d, h, n, e);
  if (f === null) return null;
  const [g, m] = f;
  return new un(g, m, A(e) ? e.format : 0, A(e) ? e.style : "");
}
function q() {
  return dt()._selection;
}
function ui() {
  return ne()._editorState._selection;
}
function Oo(e, t, n, r = 1) {
  const o = e.anchor, i = e.focus, s = o.getNode(), l = i.getNode();
  if (!t.is(s) && !t.is(l)) return;
  const c = t.__key;
  if (e.isCollapsed()) {
    const u = o.offset;
    if (n <= u && r > 0 || n < u && r < 0) {
      const d = Math.max(0, u + r);
      o.set(c, d, "element"), i.set(c, d, "element"), dc(e);
    }
  } else {
    const u = e.isBackward(), d = u ? i : o, p = d.getNode(), h = u ? o : i, f = h.getNode();
    if (t.is(p)) {
      const g = d.offset;
      (n <= g && r > 0 || n < g && r < 0) && d.set(c, Math.max(0, g + r), "element");
    }
    if (t.is(f)) {
      const g = h.offset;
      (n <= g && r > 0 || n < g && r < 0) && h.set(c, Math.max(0, g + r), "element");
    }
  }
  dc(e);
}
function dc(e) {
  const t = e.anchor, n = t.offset, r = e.focus, o = r.offset, i = t.getNode(), s = r.getNode();
  if (e.isCollapsed()) {
    if (!D(i)) return;
    const l = i.getChildrenSize(), c = n >= l, u = c ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(n);
    if (z(u)) {
      let d = 0;
      c && (d = u.getTextContentSize()), t.set(u.__key, d, "text"), r.set(u.__key, d, "text");
    }
  } else {
    if (D(i)) {
      const l = i.getChildrenSize(), c = n >= l, u = c ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(n);
      if (z(u)) {
        let d = 0;
        c && (d = u.getTextContentSize()), t.set(u.__key, d, "text");
      }
    }
    if (D(s)) {
      const l = s.getChildrenSize(), c = o >= l, u = c ? s.getChildAtIndex(l - 1) : s.getChildAtIndex(o);
      if (z(u)) {
        let d = 0;
        c && (d = u.getTextContentSize()), r.set(u.__key, d, "text");
      }
    }
  }
}
function $o(e, t, n, r, o) {
  let i = null, s = 0, l = null;
  r !== null ? (i = r.__key, z(r) ? (s = r.getTextContentSize(), l = "text") : D(r) && (s = r.getChildrenSize(), l = "element")) : o !== null && (i = o.__key, z(o) ? l = "text" : D(o) && (l = "element")), i !== null && l !== null ? e.set(i, s, l) : (s = t.getIndexWithinParent(), s === -1 && (s = n.getChildrenSize()), e.set(n.__key, s, "element"));
}
function fc(e, t, n, r, o) {
  e.type === "text" ? (e.key = n, t || (e.offset += o)) : e.offset > r.getIndexWithinParent() && (e.offset -= 1);
}
function T0(e, t, n, r, o, i, s) {
  const l = r.anchorNode, c = r.focusNode, u = r.anchorOffset, d = r.focusOffset, p = document.activeElement;
  if (o.has("collaboration") && p !== i || p !== null && ff(p)) return;
  if (!A(t)) return void (e !== null && ei(n, l, c) && r.removeAllRanges());
  const h = t.anchor, f = t.focus, g = h.key, m = f.key, y = So(n, g), x = So(n, m), b = h.offset, w = f.offset, C = t.format, E = t.style, j = t.isCollapsed();
  let O = y, S = x, I = !1;
  if (h.type === "text") {
    O = ko(y);
    const G = h.getNode();
    I = G.getFormat() !== C || G.getStyle() !== E;
  } else A(e) && e.anchor.type === "text" && (I = !0);
  var $, R, L, M, K;
  if (f.type === "text" && (S = ko(x)), O !== null && S !== null && (j && (e === null || I || A(e) && (e.format !== C || e.style !== E)) && ($ = C, R = E, L = b, M = g, K = performance.now(), If = [$, R, L, M, K]), u !== b || d !== w || l !== O || c !== S || r.type === "Range" && j || (p !== null && i.contains(p) || i.focus({ preventScroll: !0 }), h.type === "element"))) {
    try {
      r.setBaseAndExtent(O, b, S, w);
    } catch {
    }
    if (!o.has("skip-scroll-into-view") && t.isCollapsed() && i !== null && i === document.activeElement) {
      const G = t instanceof un && t.anchor.type === "element" ? O.childNodes[b] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
      if (G !== null) {
        let V;
        if (G instanceof Text) {
          const de = document.createRange();
          de.selectNode(G), V = de.getBoundingClientRect();
        } else V = G.getBoundingClientRect();
        (function(de, ge, Ze) {
          const We = Ze.ownerDocument, hn = We.defaultView;
          if (hn === null) return;
          let { top: qt, bottom: Ft } = ge, ft = 0, Lt = 0, Ae = Ze;
          for (; Ae !== null; ) {
            const pn = Ae === We.body;
            if (pn) ft = 0, Lt = oi(de).innerHeight;
            else {
              const pt = Ae.getBoundingClientRect();
              ft = pt.top, Lt = pt.bottom;
            }
            let ht = 0;
            if (qt < ft ? ht = -(ft - qt) : Ft > Lt && (ht = Ft - Lt), ht !== 0) if (pn) hn.scrollBy(0, ht);
            else {
              const pt = Ae.scrollTop;
              Ae.scrollTop += ht;
              const tr = Ae.scrollTop - pt;
              qt -= tr, Ft -= tr;
            }
            if (pn) break;
            Ae = Ar(Ae);
          }
        })(n, V, i);
      }
    }
    xs = !0;
  }
}
function Vi(e) {
  let t = e;
  e.isCollapsed() || t.removeText();
  const n = q();
  A(n) && (t = n), A(t) || P(161);
  const r = t.anchor;
  let o = r.getNode(), i = r.offset;
  for (; !yt(o); ) [o, i] = O0(o, i);
  return i;
}
function O0(e, t) {
  const n = e.getParent();
  if (!n) {
    const o = Pe();
    return ae().append(o), o.select(), [ae(), 0];
  }
  if (z(e)) {
    const o = e.splitText(t);
    if (o.length === 0) return [n, e.getIndexWithinParent()];
    const i = t === 0 ? 0 : 1;
    return [n, o[0].getIndexWithinParent() + i];
  }
  if (!D(e) || t === 0) return [n, e.getIndexWithinParent()];
  const r = e.getChildAtIndex(t);
  if (r) {
    const o = new un(_t(e.__key, t, "element"), _t(e.__key, t, "element"), 0, ""), i = e.insertNewAfter(o);
    i && i.append(r, ...r.getNextSiblings());
  }
  return [n, e.getIndexWithinParent() + 1];
}
let le = null, ce = null, Ce = !1, Wi = !1, uo = 0;
const hc = { characterData: !0, childList: !0, subtree: !0 };
function Mr() {
  return Ce || le !== null && le._readOnly;
}
function je() {
  Ce && P(13);
}
function Lf() {
  uo > 99 && P(14);
}
function dt() {
  return le === null && P(195, Bf()), le;
}
function ne() {
  return ce === null && P(196, Bf()), ce;
}
function Bf() {
  let e = 0;
  const t = /* @__PURE__ */ new Set(), n = hi.version;
  if (typeof window < "u") for (const o of document.querySelectorAll("[contenteditable]")) {
    const i = ti(o);
    if (ka(i)) e++;
    else if (i) {
      let s = String(i.constructor.version || "<0.17.1");
      s === n && (s += " (separately built, likely a bundler configuration issue)"), t.add(s);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
  return t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`), r;
}
function $0() {
  return ce;
}
function pc(e, t, n) {
  const r = t.__type, o = function(l, c) {
    const u = l._nodes.get(c);
    return u === void 0 && P(30, c), u;
  }(e, r);
  let i = n.get(r);
  i === void 0 && (i = Array.from(o.transforms), n.set(r, i));
  const s = i.length;
  for (let l = 0; l < s && (i[l](t), t.isAttached()); l++) ;
}
function gc(e, t) {
  return e !== void 0 && e.__key !== t && e.isAttached();
}
function Hf(e, t) {
  if (!t) return;
  const n = e._updateTags;
  let r = t;
  Array.isArray(t) || (r = [t]);
  for (const o of r) n.add(o);
}
function Uf(e, t) {
  const n = e.type, r = t.get(n);
  r === void 0 && P(17, n);
  const o = r.klass;
  e.type !== o.getType() && P(18, o.name);
  const i = o.importJSON(e), s = e.children;
  if (D(i) && Array.isArray(s)) for (let l = 0; l < s.length; l++) {
    const c = Uf(s[l], t);
    i.append(c);
  }
  return i;
}
function mc(e, t, n) {
  const r = le, o = Ce, i = ce;
  le = t, Ce = !0, ce = e;
  try {
    return n();
  } finally {
    le = r, Ce = o, ce = i;
  }
}
function bt(e, t) {
  const n = e._pendingEditorState, r = e._rootElement, o = e._headless || r === null;
  if (n === null) return;
  const i = e._editorState, s = i._selection, l = n._selection, c = e._dirtyType !== nn, u = le, d = Ce, p = ce, h = e._updating, f = e._observer;
  let g = null;
  if (e._pendingEditorState = null, e._editorState = n, !o && c && f !== null) {
    ce = e, le = n, Ce = !1, e._updating = !0;
    try {
      const j = e._dirtyType, O = e._dirtyElements, S = e._dirtyLeaves;
      f.disconnect(), g = v0(i, n, e, j, O, S);
    } catch (j) {
      if (j instanceof Error && e._onError(j), Wi) throw j;
      return Xf(e, null, r, n), df(e), e._dirtyType = Dn, Wi = !0, bt(e, i), void (Wi = !1);
    } finally {
      f.observe(r, hc), e._updating = h, le = u, Ce = d, ce = p;
    }
  }
  n._readOnly || (n._readOnly = !0);
  const m = e._dirtyLeaves, y = e._dirtyElements, x = e._normalizedNodes, b = e._updateTags, w = e._deferred;
  c && (e._dirtyType = nn, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), function(j, O) {
    const S = j._decorators;
    let I = j._pendingDecorators || S;
    const $ = O._nodeMap;
    let R;
    for (R in I) $.has(R) || (I === S && (I = gf(j)), delete I[R]);
  }(e, n);
  const C = o ? null : He(e._window);
  if (e._editable && C !== null && (c || l === null || l.dirty)) {
    ce = e, le = n;
    try {
      if (f !== null && f.disconnect(), c || l === null || l.dirty) {
        const j = e._blockCursorElement;
        j !== null && Ea(j, e, r), T0(s, l, e, C, b, r);
      }
      u0(e, r, l), f !== null && f.observe(r, hc);
    } finally {
      ce = p, le = u;
    }
  }
  g !== null && function(j, O, S, I, $) {
    const R = Array.from(j._listeners.mutation), L = R.length;
    for (let M = 0; M < L; M++) {
      const [K, G] = R[M], V = O.get(G);
      V !== void 0 && K(V, { dirtyLeaves: I, prevEditorState: $, updateTags: S });
    }
  }(e, g, b, m, i), A(l) || l === null || s !== null && s.is(l) || e.dispatchCommand(sa, void 0);
  const E = e._pendingDecorators;
  E !== null && (e._decorators = E, e._pendingDecorators = null, vr("decorator", e, !0, E)), function(j, O, S) {
    const I = Ll(O), $ = Ll(S);
    I !== $ && vr("textcontent", j, !0, $);
  }(e, t || i, n), vr("update", e, !0, { dirtyElements: y, dirtyLeaves: m, editorState: n, normalizedNodes: x, prevEditorState: t || i, tags: b }), function(j, O) {
    if (j._deferred = [], O.length !== 0) {
      const S = j._updating;
      j._updating = !0;
      try {
        for (let I = 0; I < O.length; I++) O[I]();
      } finally {
        j._updating = S;
      }
    }
  }(e, w), function(j) {
    const O = j._updates;
    if (O.length !== 0) {
      const S = O.shift();
      if (S) {
        const [I, $] = S;
        Wf(j, I, $);
      }
    }
  }(e);
}
function vr(e, t, n, ...r) {
  const o = t._updating;
  t._updating = n;
  try {
    const i = Array.from(t._listeners[e]);
    for (let s = 0; s < i.length; s++) i[s].apply(null, r);
  } finally {
    t._updating = o;
  }
}
function Vf(e, t, n) {
  if (e._updating === !1 || ce !== e) {
    let o = !1;
    return e.update(() => {
      o = Vf(e, t, n);
    }), o;
  }
  const r = ja(e);
  for (let o = 4; o >= 0; o--) for (let i = 0; i < r.length; i++) {
    const s = r[i]._commands.get(t);
    if (s !== void 0) {
      const l = s[o];
      if (l !== void 0) {
        const c = Array.from(l), u = c.length;
        for (let d = 0; d < u; d++) if (c[d](n, e) === !0) return !0;
      }
    }
  }
  return !1;
}
function yc(e, t) {
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
          c === null && P(191), c._flushSync = !0;
        }
        l && e._deferred.push(l), Hf(e, s.tag);
      }
      i();
    }
  }
  return r;
}
function Wf(e, t, n) {
  const r = e._updateTags;
  let o, i = !1, s = !1;
  n !== void 0 && (o = n.onUpdate, Hf(e, n.tag), i = n.skipTransforms || !1, s = n.discrete || !1), o && e._deferred.push(o);
  const l = e._editorState;
  let c = e._pendingEditorState, u = !1;
  (c === null || c._readOnly) && (c = e._pendingEditorState = Gf(c || l), u = !0), c._flushSync = s;
  const d = le, p = Ce, h = ce, f = e._updating;
  le = c, Ce = !1, e._updating = !0, ce = e;
  try {
    u && (e._headless ? l._selection !== null && (c._selection = l._selection.clone()) : c._selection = function(x) {
      const b = x.getEditorState()._selection, w = He(x._window);
      return A(b) || b == null ? Ia(b, w, x, null) : b.clone();
    }(e));
    const m = e._compositionKey;
    t(), i = yc(e, i), function(x, b) {
      const w = b.getEditorState()._selection, C = x._selection;
      if (A(C)) {
        const E = C.anchor, j = C.focus;
        let O;
        if (E.type === "text" && (O = E.getNode(), O.selectionTransform(w, C)), j.type === "text") {
          const S = j.getNode();
          O !== S && S.selectionTransform(w, C);
        }
      }
    }(c, e), e._dirtyType !== nn && (i ? function(x, b) {
      const w = b._dirtyLeaves, C = x._nodeMap;
      for (const E of w) {
        const j = C.get(E);
        z(j) && j.isAttached() && j.isSimpleText() && !j.isUnmergeable() && ql(j);
      }
    }(c, e) : function(x, b) {
      const w = b._dirtyLeaves, C = b._dirtyElements, E = x._nodeMap, j = xt(), O = /* @__PURE__ */ new Map();
      let S = w, I = S.size, $ = C, R = $.size;
      for (; I > 0 || R > 0; ) {
        if (I > 0) {
          b._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const L of S) {
            const M = E.get(L);
            z(M) && M.isAttached() && M.isSimpleText() && !M.isUnmergeable() && ql(M), M !== void 0 && gc(M, j) && pc(b, M, O), w.add(L);
          }
          if (S = b._dirtyLeaves, I = S.size, I > 0) {
            uo++;
            continue;
          }
        }
        b._dirtyLeaves = /* @__PURE__ */ new Set(), b._dirtyElements = /* @__PURE__ */ new Map();
        for (const L of $) {
          const M = L[0], K = L[1];
          if (M !== "root" && !K) continue;
          const G = E.get(M);
          G !== void 0 && gc(G, j) && pc(b, G, O), C.set(M, K);
        }
        S = b._dirtyLeaves, I = S.size, $ = b._dirtyElements, R = $.size, uo++;
      }
      b._dirtyLeaves = w, b._dirtyElements = C;
    }(c, e), yc(e), function(x, b, w, C) {
      const E = x._nodeMap, j = b._nodeMap, O = [];
      for (const [S] of C) {
        const I = j.get(S);
        I !== void 0 && (I.isAttached() || (D(I) && wf(I, S, E, j, O, C), E.has(S) || C.delete(S), O.push(S)));
      }
      for (const S of O) j.delete(S);
      for (const S of w) {
        const I = j.get(S);
        I === void 0 || I.isAttached() || (E.has(S) || w.delete(S), j.delete(S));
      }
    }(l, c, e._dirtyLeaves, e._dirtyElements)), m !== e._compositionKey && (c._flushSync = !0);
    const y = c._selection;
    if (A(y)) {
      const x = c._nodeMap, b = y.anchor.key, w = y.focus.key;
      x.get(b) !== void 0 && x.get(w) !== void 0 || P(19);
    } else $a(y) && y._nodes.size === 0 && (c._selection = null);
  } catch (m) {
    return m instanceof Error && e._onError(m), e._pendingEditorState = l, e._dirtyType = Dn, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), void bt(e);
  } finally {
    le = d, Ce = p, ce = h, e._updating = f, uo = 0;
  }
  e._dirtyType !== nn || function(m, y) {
    const x = y.getEditorState()._selection, b = m._selection;
    if (b !== null) {
      if (b.dirty || !b.is(x)) return !0;
    } else if (x !== null) return !0;
    return !1;
  }(c, e) ? c._flushSync ? (c._flushSync = !1, bt(e)) : u && o0(() => {
    bt(e);
  }) : (c._flushSync = !1, u && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function Oe(e, t, n) {
  e._updating ? e._updates.push([t, n]) : Wf(e, t, n);
}
class xr {
  constructor(t, n, r) {
    this.element = t, this.before = n || null, this.after = r || null;
  }
  withBefore(t) {
    return new xr(this.element, t, this.after);
  }
  withAfter(t) {
    return new xr(this.element, this.before, t);
  }
  withElement(t) {
    return new xr(t, this.before, this.after);
  }
  insertChild(t) {
    const n = this.before || this.getManagedLineBreak();
    return n !== null && n.parentElement !== this.element && P(222), this.element.insertBefore(t, n), this;
  }
  removeChild(t) {
    return t.parentElement !== this.element && P(223), this.element.removeChild(t), this;
  }
  replaceChild(t, n) {
    return n.parentElement !== this.element && P(224), this.element.replaceChild(t, n), this;
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
      const n = t === "decorator" && (Pr || Jo);
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
    const i = vc(n, r);
    i.push(o);
    const s = vc(n, this.element);
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
function vc(e, t) {
  const n = [];
  let r = t;
  for (; r !== e && r !== null; r = t.parentNode) {
    let o = 0;
    for (let i = r.previousSibling; i !== null; i = r.previousSibling) o++;
    n.push(o);
  }
  return r !== e && P(225), n.reverse();
}
class di extends li {
  constructor(t) {
    super(t), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null;
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__first = t.__first, this.__last = t.__last, this.__size = t.__size, this.__indent = t.__indent, this.__format = t.__format, this.__style = t.__style, this.__dir = t.__dir;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const t = this.getFormat();
    return Gk[t] || "";
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
    const t = ne()._dirtyElements;
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
      if (z(n) && t.push(n), D(n)) {
        const r = n.getAllTextNodes();
        t.push(...r);
      }
      n = n.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; D(t); ) {
      const n = t.getFirstChild();
      if (n === null) break;
      t = n;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; D(t); ) {
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
      return D(i) && i.getLastDescendant() || i || null;
    }
    const o = n[t];
    return D(o) && o.getFirstDescendant() || o || null;
  }
  getFirstChild() {
    const t = this.getLatest().__first;
    return t === null ? null : pe(t);
  }
  getFirstChildOrThrow() {
    const t = this.getFirstChild();
    return t === null && P(45, this.__key), t;
  }
  getLastChild() {
    const t = this.getLatest().__last;
    return t === null ? null : pe(t);
  }
  getLastChildOrThrow() {
    const t = this.getLastChild();
    return t === null && P(96, this.__key), t;
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
      t += i.getTextContent(), D(i) && o !== r - 1 && !i.isInline() && (t += st);
    }
    return t;
  }
  getTextContentSize() {
    let t = 0;
    const n = this.getChildren(), r = n.length;
    for (let o = 0; o < r; o++) {
      const i = n[o];
      t += i.getTextContentSize(), D(i) && o !== r - 1 && !i.isInline() && (t += st.length);
    }
    return t;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  hasFormat(t) {
    if (t !== "") {
      const n = Rl[t];
      return !!(this.getFormat() & n);
    }
    return !1;
  }
  select(t, n) {
    je();
    const r = q();
    let o = t, i = n;
    const s = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && n === 0) {
        const c = this.getFirstChild();
        if (z(c) || D(c)) return c.select(0, 0);
      } else if (!(t !== void 0 && t !== s || n !== void 0 && n !== s)) {
        const c = this.getLastChild();
        if (z(c) || D(c)) return c.select();
      }
    }
    o === void 0 && (o = s), i === void 0 && (i = s);
    const l = this.__key;
    return A(r) ? (r.anchor.set(l, o, "element"), r.focus.set(l, i, "element"), r.dirty = !0, r) : Ff(l, o, l, i, "element", "element");
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
    return this.getWritable().__format = t !== "" ? Rl[t] : 0, this;
  }
  setStyle(t) {
    return this.getWritable().__style = t || "", this;
  }
  setIndent(t) {
    return this.getWritable().__indent = t, this;
  }
  splice(t, n, r) {
    const o = r.length, i = this.getChildrenSize(), s = this.getWritable();
    t + n <= i || P(226, String(t), String(n), String(i));
    const l = s.__key, c = [], u = [], d = this.getChildAtIndex(t + n);
    let p = null, h = i - n + o;
    if (t !== 0) if (t === i) p = this.getLastChild();
    else {
      const g = this.getChildAtIndex(t);
      g !== null && (p = g.getPreviousSibling());
    }
    if (n > 0) {
      let g = p === null ? this.getFirstChild() : p.getNextSibling();
      for (let m = 0; m < n; m++) {
        g === null && P(100);
        const y = g.getNextSibling(), x = g.__key;
        en(g.getWritable()), u.push(x), g = y;
      }
    }
    let f = p;
    for (let g = 0; g < o; g++) {
      const m = r[g];
      f !== null && m.is(f) && (p = f = f.getPreviousSibling());
      const y = m.getWritable();
      y.__parent === l && h--, en(y);
      const x = m.__key;
      if (f === null) s.__first = x, y.__prev = null;
      else {
        const b = f.getWritable();
        b.__next = x, y.__prev = b.__key;
      }
      m.__key === l && P(76), y.__parent = l, c.push(x), f = m;
    }
    if (t + n === i)
      f !== null && (f.getWritable().__next = null, s.__last = f.__key);
    else if (d !== null) {
      const g = d.getWritable();
      if (f !== null) {
        const m = f.getWritable();
        g.__prev = f.__key, m.__next = d.__key;
      } else g.__prev = null;
    }
    if (s.__size = h, u.length) {
      const g = q();
      if (A(g)) {
        const m = new Set(u), y = new Set(c), { anchor: x, focus: b } = g;
        xc(x, m, y) && $o(x, x.getNode(), this, p, d), xc(b, m, y) && $o(b, b.getNode(), this, p, d), h !== 0 || this.canBeEmpty() || Rr(this) || this.remove();
      }
    }
    return s;
  }
  getDOMSlot(t) {
    return new xr(t);
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    if (n && si(n)) {
      const r = this.getIndent();
      r > 0 && (n.style.paddingInlineStart = 40 * r + "px");
    }
    return { element: n };
  }
  exportJSON() {
    return { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), type: "element", version: 1 };
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
function D(e) {
  return e instanceof di;
}
function xc(e, t, n) {
  let r = e.getNode();
  for (; r; ) {
    const o = r.__key;
    if (t.has(o) && !n.has(o)) return !0;
    r = r.getParent();
  }
  return !1;
}
class I0 extends li {
  constructor(t) {
    super(t);
  }
  decorate(t, n) {
    P(47);
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
function Q(e) {
  return e instanceof I0;
}
class qr extends di {
  static getType() {
    return "root";
  }
  static clone() {
    return new qr();
  }
  constructor() {
    super("root"), this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    P(51);
  }
  getTextContent() {
    const t = this.__cachedText;
    return !Mr() && ne()._dirtyType !== nn || t === null ? super.getTextContent() : t;
  }
  remove() {
    P(52);
  }
  replace(t) {
    P(53);
  }
  insertBefore(t) {
    P(54);
  }
  insertAfter(t) {
    P(55);
  }
  updateDOM(t, n) {
    return !1;
  }
  append(...t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      D(r) || Q(r) || P(56);
    }
    return super.append(...t);
  }
  static importJSON(t) {
    const n = ae();
    return n.setFormat(t.format), n.setIndent(t.indent), n.setDirection(t.direction), n;
  }
  exportJSON() {
    return { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), type: "root", version: 1 };
  }
  collapseAtStart() {
    return !0;
  }
}
function Se(e) {
  return e instanceof qr;
}
function Gf(e) {
  return new fi(new Map(e._nodeMap));
}
function Da() {
  return new fi(/* @__PURE__ */ new Map([["root", new qr()]]));
}
function Kf(e) {
  const t = e.exportJSON(), n = e.constructor;
  if (t.type !== n.getType() && P(130, n.name), D(e)) {
    const r = t.children;
    Array.isArray(r) || P(59, n.name);
    const o = e.getChildren();
    for (let i = 0; i < o.length; i++) {
      const s = Kf(o[i]);
      r.push(s);
    }
  }
  return t;
}
class fi {
  constructor(t, n) {
    this._nodeMap = t, this._selection = n || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(t, n) {
    return mc(n && n.editor || null, this, t);
  }
  clone(t) {
    const n = new fi(this._nodeMap, t === void 0 ? this._selection : t);
    return n._readOnly = !0, n;
  }
  toJSON() {
    return mc(null, this, () => ({ root: Kf(ae()) }));
  }
}
class D0 extends di {
  static getType() {
    return "artificial";
  }
  createDOM(t) {
    return document.createElement("div");
  }
}
class Kn extends di {
  constructor(t) {
    super(t), this.__textFormat = 0, this.__textStyle = "";
  }
  static getType() {
    return "paragraph";
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  setTextFormat(t) {
    const n = this.getWritable();
    return n.__textFormat = t, n;
  }
  hasTextFormat(t) {
    const n = it[t];
    return !!(this.getTextFormat() & n);
  }
  getFormatFlags(t, n) {
    return wo(this.getLatest().__textFormat, t, n);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  setTextStyle(t) {
    const n = this.getWritable();
    return n.__textStyle = t, n;
  }
  static clone(t) {
    return new Kn(t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__textFormat = t.__textFormat, this.__textStyle = t.__textStyle;
  }
  createDOM(t) {
    const n = document.createElement("p"), r = hr(t.theme, "paragraph");
    return r !== void 0 && n.classList.add(...r), n;
  }
  updateDOM(t, n, r) {
    return !1;
  }
  static importDOM() {
    return { p: (t) => ({ conversion: P0, priority: 0 }) };
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    if (n && si(n)) {
      this.isEmpty() && n.append(document.createElement("br"));
      const r = this.getFormatType();
      n.style.textAlign = r;
      const o = this.getDirection();
      o && (n.dir = o);
    }
    return { element: n };
  }
  static importJSON(t) {
    const n = Pe();
    return n.setFormat(t.format), n.setIndent(t.indent), n.setDirection(t.direction), n.setTextFormat(t.textFormat), n;
  }
  exportJSON() {
    return { ...super.exportJSON(), textFormat: this.getTextFormat(), textStyle: this.getTextStyle(), type: "paragraph", version: 1 };
  }
  insertNewAfter(t, n) {
    const r = Pe();
    r.setTextFormat(t.format), r.setTextStyle(t.style);
    const o = this.getDirection();
    return r.setDirection(o), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
  collapseAtStart() {
    const t = this.getChildren();
    if (t.length === 0 || z(t[0]) && t[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function P0(e) {
  const t = Pe();
  return e.style && (t.setFormat(e.style.textAlign), p0(e, t)), { node: t };
}
function Pe() {
  return ii(new Kn());
}
function Io(e) {
  return e instanceof Kn;
}
const Z = 0, Pa = 1;
function Xf(e, t, n, r) {
  const o = e._keyToDOMMap;
  o.clear(), e._editorState = Da(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = nn, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
  const i = e._observer;
  i !== null && (i.disconnect(), e._observer = null), t !== null && (t.textContent = ""), n !== null && (n.textContent = "", o.set("root", n));
}
function z0(e) {
  const t = e || {}, n = $0(), r = t.theme || {}, o = e === void 0 ? n : t.parentEditor || null, i = t.disableEvents || !1, s = Da(), l = t.namespace || (o !== null ? o._config.namespace : vf()), c = t.editorState, u = [qr, Nt, Gn, Nr, Kn, D0, ...t.nodes || []], { onError: d, html: p } = t, h = t.editable === void 0 || t.editable;
  let f;
  if (e === void 0 && n !== null) f = n._nodes;
  else {
    f = /* @__PURE__ */ new Map();
    for (let m = 0; m < u.length; m++) {
      let y = u[m], x = null, b = null;
      if (typeof y != "function") {
        const j = y;
        y = j.replace, x = j.with, b = j.withKlass || null;
      }
      const w = y.getType(), C = y.transform(), E = /* @__PURE__ */ new Set();
      C !== null && E.add(C), f.set(w, { exportDOM: p && p.export ? p.export.get(y) : void 0, klass: y, replace: x, replaceWithKlass: b, transforms: E });
    }
  }
  const g = new hi(s, o, f, { disableEvents: i, namespace: l, theme: r }, d || console.error, function(m, y) {
    const x = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), w = (C) => {
      Object.keys(C).forEach((E) => {
        let j = x.get(E);
        j === void 0 && (j = [], x.set(E, j)), j.push(C[E]);
      });
    };
    return m.forEach((C) => {
      const E = C.klass.importDOM;
      if (E == null || b.has(E)) return;
      b.add(E);
      const j = E.call(C.klass);
      j !== null && w(j);
    }), y && w(y), x;
  }(f, p ? p.import : void 0), h);
  return c !== void 0 && (g._pendingEditorState = c, g._dirtyType = Dn), g;
}
class hi {
  constructor(t, n, r, o, i, s, l) {
    this._parentEditor = n, this._rootElement = null, this._editorState = t, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = o, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = nn, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = vf(), this._onError = i, this._htmlConversions = s, this._editable = l, this._headless = n !== null && n._headless, this._window = null, this._blockCursorElement = null;
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
    r === void 0 && P(35);
    const o = this._commands;
    o.has(t) || o.set(t, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const i = o.get(t);
    i === void 0 && P(36, String(t));
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
    return n === void 0 && P(37, t.name), n;
  }
  resolveRegisteredNodeAfterReplacements(t) {
    for (; t.replaceWithKlass; ) t = this.getRegisteredNode(t.replaceWithKlass);
    return t;
  }
  initializeMutationListener(t, n) {
    const r = this._editorState, o = h0(r).get(n.getType());
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
      const c = this.registerNodeTransformToKlass(i, n);
      o.push(c);
    }
    var s, l;
    return s = this, l = t.getType(), Oe(s, () => {
      const c = dt();
      if (c.isEmpty()) return;
      if (l === "root") return void ae().markDirty();
      const u = c._nodeMap;
      for (const [, d] of u) d.markDirty();
    }, s._pendingEditorState === null ? { tag: "history-merge" } : void 0), () => {
      o.forEach((c) => c.transforms.delete(n));
    };
  }
  hasNode(t) {
    return this._nodes.has(t.getType());
  }
  hasNodes(t) {
    return t.every(this.hasNode.bind(this));
  }
  dispatchCommand(t, n) {
    return N(this, t, n);
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
      const r = hr(this._config.theme, "root"), o = this._pendingEditorState || this._editorState;
      if (this._rootElement = t, Xf(this, n, t, o), n !== null && (this._config.disableEvents || x0(n), r != null && n.classList.remove(...r)), t !== null) {
        const i = function(l) {
          const c = l.ownerDocument;
          return c && c.defaultView || null;
        }(t), s = t.style;
        s.userSelect = "text", s.whiteSpace = "pre-wrap", s.wordBreak = "break-word", t.setAttribute("data-lexical-editor", "true"), this._window = i, this._dirtyType = Dn, df(this), this._updateTags.add("history-merge"), bt(this), this._config.disableEvents || function(l, c) {
          const u = l.ownerDocument, d = To.get(u);
          (d === void 0 || d < 1) && u.addEventListener("selectionchange", Af), To.set(u, (d || 0) + 1), l.__lexicalEditor = c;
          const p = zf(l);
          for (let h = 0; h < vs.length; h++) {
            const [f, g] = vs[h], m = typeof g == "function" ? (y) => {
              tc(y) || (ec(y), (c.isEditable() || f === "click") && g(y, c));
            } : (y) => {
              if (tc(y)) return;
              ec(y);
              const x = c.isEditable();
              switch (f) {
                case "cut":
                  return x && N(c, da, y);
                case "copy":
                  return N(c, ua, y);
                case "paste":
                  return x && N(c, aa, y);
                case "dragstart":
                  return x && N(c, nf, y);
                case "dragover":
                  return x && N(c, $k, y);
                case "dragend":
                  return x && N(c, Ik, y);
                case "focus":
                  return x && N(c, zk, y);
                case "blur":
                  return x && N(c, rf, y);
                case "drop":
                  return x && N(c, tf, y);
              }
            };
            l.addEventListener(f, m), p.push(() => {
              l.removeEventListener(f, m);
            });
          }
        }(t, this), r != null && t.classList.add(...r);
      } else this._editorState = o, this._pendingEditorState = null, this._window = null;
      vr("root", this, !1, t, n);
    }
  }
  getElementByKey(t) {
    return this._keyToDOMMap.get(t) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(t, n) {
    t.isEmpty() && P(38);
    let r = t;
    r._readOnly && (r = Gf(t), r._selection = t._selection ? t._selection.clone() : null), uf(this);
    const o = this._pendingEditorState, i = this._updateTags, s = n !== void 0 ? n.tag : null;
    o === null || o.isEmpty() || (s != null && i.add(s), bt(this)), this._pendingEditorState = r, this._dirtyType = Dn, this._dirtyElements.set("root", !1), this._compositionKey = null, s != null && i.add(s), this._updating || bt(this);
  }
  parseEditorState(t, n) {
    return function(r, o, i) {
      const s = Da(), l = le, c = Ce, u = ce, d = o._dirtyElements, p = o._dirtyLeaves, h = o._cloneNotNeeded, f = o._dirtyType;
      o._dirtyElements = /* @__PURE__ */ new Map(), o._dirtyLeaves = /* @__PURE__ */ new Set(), o._cloneNotNeeded = /* @__PURE__ */ new Set(), o._dirtyType = 0, le = s, Ce = !1, ce = o;
      try {
        const g = o._nodes;
        Uf(r.root, g), i && i(), s._readOnly = !0;
      } catch (g) {
        g instanceof Error && o._onError(g);
      } finally {
        o._dirtyElements = d, o._dirtyLeaves = p, o._cloneNotNeeded = h, o._dirtyType = f, le = l, Ce = c, ce = u;
      }
      return s;
    }(typeof t == "string" ? JSON.parse(t) : t, this, n);
  }
  read(t) {
    return bt(this), this.getEditorState().read(t, { editor: this });
  }
  update(t, n) {
    Oe(this, t, n);
  }
  focus(t, n = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), Oe(this, () => {
      const o = q(), i = ae();
      o !== null ? o.dirty = !0 : i.getChildrenSize() !== 0 && (n.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd());
    }, { onUpdate: () => {
      r.removeAttribute("autocapitalize"), t && t();
    }, tag: "focus" }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const t = this._rootElement;
    t !== null && t.blur();
    const n = He(this._window);
    n !== null && n.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(t) {
    this._editable !== t && (this._editable = t, vr("editable", this, !0, t));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
hi.version = "0.21.0+prod.esm";
const Yf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, A0 = Yf ? _.useLayoutEffect : _.useEffect, ro = { tag: "history-merge" };
function za({ initialConfig: e, children: t }) {
  const n = _.useMemo(() => {
    const { theme: r, namespace: o, nodes: i, onError: s, editorState: l, html: c } = e, u = jk(null, r), d = z0({ editable: e.editable, html: c, namespace: o, nodes: i, onError: (p) => s(p, d), theme: r });
    return function(p, h) {
      if (h !== null) {
        if (h === void 0) p.update(() => {
          const f = ae();
          if (f.isEmpty()) {
            const g = Pe();
            f.append(g);
            const m = Yf ? document.activeElement : null;
            (q() !== null || m !== null && m === p.getRootElement()) && g.select();
          }
        }, ro);
        else if (h !== null) switch (typeof h) {
          case "string": {
            const f = p.parseEditorState(h);
            p.setEditorState(f, ro);
            break;
          }
          case "object":
            p.setEditorState(h, ro);
            break;
          case "function":
            p.update(() => {
              ae().isEmpty() && h(p);
            }, ro);
        }
      }
    }(d, l), [d, u];
  }, []);
  return A0(() => {
    const r = e.editable, [o] = n;
    o.setEditable(r === void 0 || r);
  }, []), a.jsx(Wd.Provider, { value: n, children: t });
}
function R0() {
  return ae().getTextContent();
}
function N0(e, t = !0) {
  if (e) return !1;
  let n = R0();
  return t && (n = n.trim()), n === "";
}
function M0(e) {
  if (!N0(e, !1)) return !1;
  const t = ae().getChildren(), n = t.length;
  if (n > 1) return !1;
  for (let r = 0; r < n; r++) {
    const o = t[r];
    if (Q(o)) return !1;
    if (D(o)) {
      if (!Io(o) || o.__indent !== 0) return !1;
      const i = o.getChildren(), s = i.length;
      for (let l = 0; l < s; l++) {
        const c = i[r];
        if (!z(c)) return !1;
      }
    }
  }
  return !0;
}
function Qf(e) {
  return () => M0(e);
}
function q0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var F0 = q0(function(e) {
  const t = new URLSearchParams();
  t.append("code", e);
  for (let n = 1; n < arguments.length; n++) t.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function L0(e, t, n, r) {
  const o = (s) => s instanceof n, i = (s) => {
    const l = te(s.getTextContent());
    l.setFormat(s.getFormat()), s.replace(l);
  };
  return [e.registerNodeTransform(Nt, (s) => {
    if (!s.isSimpleText()) return;
    let l, c = s.getPreviousSibling(), u = s.getTextContent(), d = s;
    if (z(c)) {
      const h = c.getTextContent(), f = t(h + u);
      if (o(c)) {
        if (f === null || ((g) => g.getLatest().__mode)(c) !== 0) return void i(c);
        {
          const g = f.end - h.length;
          if (g > 0) {
            const m = h + u.slice(0, g);
            if (c.select(), c.setTextContent(m), g === u.length) s.remove();
            else {
              const y = u.slice(g);
              s.setTextContent(y);
            }
            return;
          }
        }
      } else if (f === null || f.start < h.length) return;
    }
    let p = 0;
    for (; ; ) {
      l = t(u);
      let h, f = l === null ? "" : u.slice(l.end);
      if (u = f, f === "") {
        const m = d.getNextSibling();
        if (z(m)) {
          f = d.getTextContent() + m.getTextContent();
          const y = t(f);
          if (y === null) return void (o(m) ? i(m) : m.markDirty());
          if (y.start !== 0) return;
        }
      }
      if (l === null) return;
      if (l.start === 0 && z(c) && c.isTextEntity()) {
        p += l.end;
        continue;
      }
      l.start === 0 ? [h, d] = d.splitText(l.end) : [, h, d] = d.splitText(l.start + p, l.end + p), h === void 0 && F0(165, "nodeToReplace");
      const g = r(h);
      if (g.setFormat(h.getFormat()), h.replace(g), d == null) return;
      p = 0, c = g;
    }
  }), e.registerNodeTransform(n, (s) => {
    const l = s.getTextContent(), c = t(l);
    if (c === null || c.start !== 0) return void i(s);
    if (l.length > c.end) return void s.splitText(c.end);
    const u = s.getPreviousSibling();
    z(u) && u.isTextEntity() && (i(u), i(s));
    const d = s.getNextSibling();
    z(d) && d.isTextEntity() && (i(d), o(s) && i(s));
  })];
}
function B0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
B0(function(e) {
  const t = new URLSearchParams();
  t.append("code", e);
  for (let n = 1; n < arguments.length; n++) t.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function H0(e, t) {
  const n = e.getStartEndPoints();
  if (t.isSelected(e) && !t.isSegmented() && !t.isToken() && n !== null) {
    const [r, o] = n, i = e.isBackward(), s = r.getNode(), l = o.getNode(), c = t.is(s), u = t.is(l);
    if (c || u) {
      const [d, p] = ws(e), h = s.is(l), f = t.is(i ? l : s), g = t.is(i ? s : l);
      let m, y = 0;
      return h ? (y = d > p ? p : d, m = d > p ? d : p) : f ? (y = i ? p : d, m = void 0) : g && (y = 0, m = i ? d : p), t.__text = t.__text.slice(y, m), t;
    }
  }
  return t;
}
function bc(e, t) {
  const n = us(e.focus, t);
  return Q(n) && !n.isIsolated() || D(n) && !n.isInline() && !n.canBeEmpty();
}
function U0(e, t, n, r) {
  e.modify(t ? "extend" : "move", n, r);
}
function V0(e) {
  const t = e.anchor.getNode();
  return (Se(t) ? t : t.getParentOrThrow()).getDirection() === "rtl";
}
function kc(e, t, n) {
  const r = V0(e);
  U0(e, t, n ? !r : r, "character");
}
function W0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
W0(function(e) {
  const t = new URLSearchParams();
  t.append("code", e);
  for (let n = 1; n < arguments.length; n++) t.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const Jf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, G0 = Jf && "documentMode" in document ? document.documentMode : null;
!(!Jf || !("InputEvent" in window) || G0) && "getTargetRanges" in new window.InputEvent("input");
function Et(...e) {
  return () => {
    for (let t = e.length - 1; t >= 0; t--) e[t]();
    e.length = 0;
  };
}
function K0(e, t) {
  return e !== null && Object.getPrototypeOf(e).constructor.name === t.name;
}
const Zf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? _.useLayoutEffect : _.useEffect;
function X0({ editor: e, ariaActiveDescendant: t, ariaAutoComplete: n, ariaControls: r, ariaDescribedBy: o, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: l, ariaLabel: c, ariaLabelledBy: u, ariaMultiline: d, ariaOwns: p, ariaRequired: h, autoCapitalize: f, className: g, id: m, role: y = "textbox", spellCheck: x = !0, style: b, tabIndex: w, "data-testid": C, ...E }, j) {
  const [O, S] = _.useState(e.isEditable()), I = _.useCallback((R) => {
    R && R.ownerDocument && R.ownerDocument.defaultView ? e.setRootElement(R) : e.setRootElement(null);
  }, [e]), $ = _.useMemo(() => /* @__PURE__ */ function(...R) {
    return (L) => {
      R.forEach((M) => {
        typeof M == "function" ? M(L) : M != null && (M.current = L);
      });
    };
  }(j, I), [I, j]);
  return Zf(() => (S(e.isEditable()), e.registerEditableListener((R) => {
    S(R);
  })), [e]), a.jsx("div", { "aria-activedescendant": O ? t : void 0, "aria-autocomplete": O ? n : "none", "aria-controls": O ? r : void 0, "aria-describedby": o, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": O && y === "combobox" ? !!s : void 0, ...l != null ? { "aria-invalid": l } : {}, "aria-label": c, "aria-labelledby": u, "aria-multiline": d, "aria-owns": O ? p : void 0, "aria-readonly": !O || void 0, "aria-required": h, autoCapitalize: f, className: g, contentEditable: O, "data-testid": C, id: m, ref: $, role: O ? y : void 0, spellCheck: x, style: b, tabIndex: w, ...E });
}
const Y0 = _.forwardRef(X0);
function wc(e) {
  return e.getEditorState().read(Qf(e.isComposing()));
}
const Aa = _.forwardRef(Q0);
function Q0(e, t) {
  const { placeholder: n, ...r } = e, [o] = _e();
  return a.jsxs(a.Fragment, { children: [a.jsx(Y0, { editor: o, ...r, ref: t }), n != null && a.jsx(J0, { editor: o, content: n })] });
}
function J0({ content: e, editor: t }) {
  const n = function(s) {
    const [l, c] = _.useState(() => wc(s));
    return Zf(() => {
      function u() {
        const d = wc(s);
        c(d);
      }
      return u(), Et(s.registerUpdateListener(() => {
        u();
      }), s.registerEditableListener(() => {
        u();
      }));
    }, [s]), l;
  }(t), [r, o] = _.useState(t.isEditable());
  if (_.useLayoutEffect(() => (o(t.isEditable()), t.registerEditableListener((s) => {
    o(s);
  })), [t]), !n) return null;
  let i = null;
  return typeof e == "function" ? i = e(r) : e !== null && (i = e), i === null ? null : a.jsx("div", { "aria-hidden": !0, children: i });
}
function js(e, t) {
  return js = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, js(e, t);
}
var jc = { error: null }, Z0 = function(e) {
  var t, n;
  function r() {
    for (var i, s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
    return (i = e.call.apply(e, [this].concat(l)) || this).state = jc, i.resetErrorBoundary = function() {
      for (var u, d = arguments.length, p = new Array(d), h = 0; h < d; h++) p[h] = arguments[h];
      i.props.onReset == null || (u = i.props).onReset.apply(u, p), i.reset();
    }, i;
  }
  n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, js(t, n), r.getDerivedStateFromError = function(i) {
    return { error: i };
  };
  var o = r.prototype;
  return o.reset = function() {
    this.setState(jc);
  }, o.componentDidCatch = function(i, s) {
    var l, c;
    (l = (c = this.props).onError) == null || l.call(c, i, s);
  }, o.componentDidUpdate = function(i, s) {
    var l, c, u, d, p = this.state.error, h = this.props.resetKeys;
    p !== null && s.error !== null && ((u = i.resetKeys) === void 0 && (u = []), (d = h) === void 0 && (d = []), u.length !== d.length || u.some(function(f, g) {
      return !Object.is(f, d[g]);
    })) && ((l = (c = this.props).onResetKeysChange) == null || l.call(c, i.resetKeys, h), this.reset());
  }, o.render = function() {
    var i = this.state.error, s = this.props, l = s.fallbackRender, c = s.FallbackComponent, u = s.fallback;
    if (i !== null) {
      var d = { error: i, resetErrorBoundary: this.resetErrorBoundary };
      if (_.isValidElement(u)) return u;
      if (typeof l == "function") return l(d);
      if (c) return _.createElement(c, d);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, r;
}(_.Component);
function Ra({ children: e, onError: t }) {
  return a.jsx(Z0, { fallback: a.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: t, children: e });
}
const oo = 0, Ss = 1, Cs = 2, qe = 0, e1 = 1, Sc = 2, t1 = 3, n1 = 4;
function r1(e, t, n, r, o) {
  if (e === null || n.size === 0 && r.size === 0 && !o) return qe;
  const i = t._selection, s = e._selection;
  if (o) return e1;
  if (!(A(i) && A(s) && s.isCollapsed() && i.isCollapsed())) return qe;
  const l = function(x, b, w) {
    const C = x._nodeMap, E = [];
    for (const j of b) {
      const O = C.get(j);
      O !== void 0 && E.push(O);
    }
    for (const [j, O] of w) {
      if (!O) continue;
      const S = C.get(j);
      S === void 0 || Se(S) || E.push(S);
    }
    return E;
  }(t, n, r);
  if (l.length === 0) return qe;
  if (l.length > 1) {
    const x = t._nodeMap, b = x.get(i.anchor.key), w = x.get(s.anchor.key);
    return b && w && !e._nodeMap.has(b.__key) && z(b) && b.__text.length === 1 && i.anchor.offset === 1 ? Sc : qe;
  }
  const c = l[0], u = e._nodeMap.get(c.__key);
  if (!z(u) || !z(c) || u.__mode !== c.__mode) return qe;
  const d = u.__text, p = c.__text;
  if (d === p) return qe;
  const h = i.anchor, f = s.anchor;
  if (h.key !== f.key || h.type !== "text") return qe;
  const g = h.offset, m = f.offset, y = p.length - d.length;
  return y === 1 && m === g - 1 ? Sc : y === -1 && m === g + 1 ? t1 : y === -1 && m === g ? n1 : qe;
}
function o1(e, t) {
  let n = Date.now(), r = qe;
  return (o, i, s, l, c, u) => {
    const d = Date.now();
    if (u.has("historic")) return r = qe, n = d, Cs;
    const p = r1(o, i, l, c, e.isComposing()), h = (() => {
      const f = s === null || s.editor === e, g = u.has("history-push");
      if (!g && f && u.has("history-merge")) return oo;
      if (o === null) return Ss;
      const m = i._selection;
      return l.size > 0 || c.size > 0 ? g === !1 && p !== qe && p === r && d < n + t && f || l.size === 1 && function(y, x, b) {
        const w = x._nodeMap.get(y), C = b._nodeMap.get(y), E = x._selection, j = b._selection;
        return !(A(E) && A(j) && E.anchor.type === "element" && E.focus.type === "element" && j.anchor.type === "text" && j.focus.type === "text" || !z(w) || !z(C) || w.__parent !== C.__parent) && JSON.stringify(x.read(() => w.exportJSON())) === JSON.stringify(b.read(() => C.exportJSON()));
      }(Array.from(l)[0], o, i) ? oo : Ss : m !== null ? oo : Cs;
    })();
    return n = d, r = p, h;
  };
}
function Cc(e) {
  e.undoStack = [], e.redoStack = [], e.current = null;
}
function i1(e, t, n) {
  const r = o1(e, n);
  return Et(e.registerCommand(la, () => (function(i, s) {
    const l = s.redoStack, c = s.undoStack;
    if (c.length !== 0) {
      const u = s.current, d = c.pop();
      u !== null && (l.push(u), i.dispatchCommand(Zr, !0)), c.length === 0 && i.dispatchCommand(eo, !1), s.current = d || null, d && d.editor.setEditorState(d.editorState, { tag: "historic" });
    }
  }(e, t), !0), Z), e.registerCommand(ca, () => (function(i, s) {
    const l = s.redoStack, c = s.undoStack;
    if (l.length !== 0) {
      const u = s.current;
      u !== null && (c.push(u), i.dispatchCommand(eo, !0));
      const d = l.pop();
      l.length === 0 && i.dispatchCommand(Zr, !1), s.current = d || null, d && d.editor.setEditorState(d.editorState, { tag: "historic" });
    }
  }(e, t), !0), Z), e.registerCommand(Dk, () => (Cc(t), !1), Z), e.registerCommand(Pk, () => (Cc(t), e.dispatchCommand(Zr, !1), e.dispatchCommand(eo, !1), !0), Z), e.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: l, dirtyElements: c, tags: u }) => {
    const d = t.current, p = t.redoStack, h = t.undoStack, f = d === null ? null : d.editorState;
    if (d !== null && i === f) return;
    const g = r(s, i, d, l, c, u);
    if (g === Ss) p.length !== 0 && (t.redoStack = [], e.dispatchCommand(Zr, !1)), d !== null && (h.push({ ...d }), e.dispatchCommand(eo, !0));
    else if (g === Cs) return;
    t.current = { editor: e, editorState: i };
  }));
}
function s1() {
  return { current: null, redoStack: [], undoStack: [] };
}
function Na({ delay: e, externalHistoryState: t }) {
  const [n] = _e();
  return function(r, o, i = 1e3) {
    const s = _.useMemo(() => o || s1(), [o]);
    _.useEffect(() => i1(r, s, i), [i, r, s]);
  }(n, t, e), null;
}
const a1 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? _.useLayoutEffect : _.useEffect;
function l1(e) {
  return { initialValueFn: () => e.isEditable(), subscribe: (t) => e.registerEditableListener(t) };
}
function c1() {
  return function(e) {
    const [t] = _e(), n = _.useMemo(() => e(t), [t, e]), [r, o] = _.useState(() => n.initialValueFn()), i = _.useRef(r);
    return a1(() => {
      const { initialValueFn: s, subscribe: l } = n, c = s();
      return i.current !== c && (i.current = c, o(c)), l((u) => {
        i.current = u, o(u);
      });
    }, [n, e]), r;
  }(l1);
}
function u1(e) {
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
            const [u, d, p, h, f, g] = c;
            e.update(() => {
              const m = q();
              if (A(m)) {
                const y = m.anchor;
                let x = y.getNode(), b = 0, w = 0;
                if (z(x) && u >= 0 && d >= 0 && (b = u, w = u + d, m.setTextNodeRange(x, b, x, w)), b === w && p === "" || (m.insertRawText(p), x = y.getNode()), z(x)) {
                  b = h, w = h + f;
                  const C = x.getTextContentSize();
                  b = b > C ? C : b, w = w > C ? C : w, m.setTextNodeRange(x, b, x, w);
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
function d1(e, t) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const n = document.createElement("div"), r = ae().getChildren();
  for (let o = 0; o < r.length; o++)
    eh(e, r[o], n, t);
  return n.innerHTML;
}
function eh(e, t, n, r = null) {
  let o = r === null || t.isSelected(r);
  const i = D(t) && t.excludeFromCopy("html");
  let s = t;
  if (r !== null) {
    let f = kf(t);
    f = z(f) && r !== null ? H0(r, f) : f, s = f;
  }
  const l = D(s) ? s.getChildren() : [], c = e._nodes.get(s.getType());
  let u;
  u = c && c.exportDOM !== void 0 ? c.exportDOM(e, s) : s.exportDOM(e);
  const { element: d, after: p } = u;
  if (!d) return !1;
  const h = document.createDocumentFragment();
  for (let f = 0; f < l.length; f++) {
    const g = l[f], m = eh(e, g, h, r);
    !o && D(t) && m && t.extractWithChild(g, r, "html") && (o = !0);
  }
  if (o && !i) {
    if ((si(d) || Kl(d)) && d.append(h), n.append(d), p) {
      const f = p.call(s, d);
      f && (Kl(d) ? d.replaceChildren(f) : d.replaceWith(f));
    }
  } else n.append(h);
  return o;
}
function f1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var h1 = f1(function(e) {
  const t = new URLSearchParams();
  t.append("code", e);
  for (let n = 1; n < arguments.length; n++) t.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function p1(e, t = q()) {
  return t == null && h1(166), A(t) && t.isCollapsed() || t.getNodes().length === 0 ? "" : d1(e, t);
}
function _c(e, t) {
  const n = e.getData("text/plain") || e.getData("text/uri-list");
  n != null && t.insertRawText(n);
}
const Xn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, g1 = Xn && "documentMode" in document ? document.documentMode : null, m1 = !(!Xn || !("InputEvent" in window) || g1) && "getTargetRanges" in new window.InputEvent("input"), y1 = Xn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Ec = Xn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, v1 = Xn && /^(?=.*Chrome).*/i.test(navigator.userAgent), x1 = Xn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !v1;
function Tc(e, t) {
  t.update(() => {
    if (e !== null) {
      const n = K0(e, KeyboardEvent) ? null : e.clipboardData, r = q();
      if (r !== null && n != null) {
        e.preventDefault();
        const o = p1(t);
        o !== null && n.setData("text/html", o), n.setData("text/plain", r.getTextContent());
      }
    }
  });
}
function b1(e) {
  return Et(e.registerCommand(Zt, (t) => {
    const n = q();
    return !!A(n) && (n.deleteCharacter(t), !0);
  }, Z), e.registerCommand(br, (t) => {
    const n = q();
    return !!A(n) && (n.deleteWord(t), !0);
  }, Z), e.registerCommand(kr, (t) => {
    const n = q();
    return !!A(n) && (n.deleteLine(t), !0);
  }, Z), e.registerCommand(Sn, (t) => {
    const n = q();
    if (!A(n)) return !1;
    if (typeof t == "string") n.insertText(t);
    else {
      const r = t.dataTransfer;
      if (r != null) _c(r, n);
      else {
        const o = t.data;
        o && n.insertText(o);
      }
    }
    return !0;
  }, Z), e.registerCommand(as, () => {
    const t = q();
    return !!A(t) && (t.removeText(), !0);
  }, Z), e.registerCommand(jn, (t) => {
    const n = q();
    return !!A(n) && (n.insertLineBreak(t), !0);
  }, Z), e.registerCommand(ss, () => {
    const t = q();
    return !!A(t) && (t.insertLineBreak(), !0);
  }, Z), e.registerCommand(Kd, (t) => {
    const n = q();
    if (!A(n)) return !1;
    const r = t, o = r.shiftKey;
    return !!bc(n, !0) && (r.preventDefault(), kc(n, o, !0), !0);
  }, Z), e.registerCommand(Gd, (t) => {
    const n = q();
    if (!A(n)) return !1;
    const r = t, o = r.shiftKey;
    return !!bc(n, !1) && (r.preventDefault(), kc(n, o, !1), !0);
  }, Z), e.registerCommand(Qd, (t) => {
    const n = q();
    return !!A(n) && (!Ec || navigator.language !== "ko-KR") && (t.preventDefault(), e.dispatchCommand(Zt, !0));
  }, Z), e.registerCommand(Zd, (t) => {
    const n = q();
    return !!A(n) && (t.preventDefault(), e.dispatchCommand(Zt, !1));
  }, Z), e.registerCommand(wr, (t) => {
    const n = q();
    if (!A(n)) return !1;
    if (t !== null) {
      if ((Ec || y1 || x1) && m1) return !1;
      t.preventDefault();
    }
    return e.dispatchCommand(jn, !1);
  }, Z), e.registerCommand(ls, () => (l0(), !0), Z), e.registerCommand(ua, (t) => {
    const n = q();
    return !!A(n) && (Tc(t, e), !0);
  }, Z), e.registerCommand(da, (t) => {
    const n = q();
    return !!A(n) && (function(r, o) {
      Tc(r, o), o.update(() => {
        const i = q();
        A(i) && i.removeText();
      });
    }(t, e), !0);
  }, Z), e.registerCommand(aa, (t) => {
    const n = q();
    return !!A(n) && (function(r, o) {
      r.preventDefault(), o.update(() => {
        const i = q(), { clipboardData: s } = r;
        s != null && A(i) && _c(s, i);
      }, { tag: "paste" });
    }(t, e), !0);
  }, Z), e.registerCommand(tf, (t) => {
    const n = q();
    return !!A(n) && (t.preventDefault(), !0);
  }, Z), e.registerCommand(nf, (t) => {
    const n = q();
    return !!A(n) && (t.preventDefault(), !0);
  }, Z));
}
const _s = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? _.useLayoutEffect : _.useEffect;
function Oc(e) {
  return e.getEditorState().read(Qf(e.isComposing()));
}
function Ma({ contentEditable: e, placeholder: t = null, ErrorBoundary: n }) {
  const [r] = _e(), o = function(i, s) {
    const [l, c] = _.useState(() => i.getDecorators());
    return _s(() => i.registerDecoratorListener((u) => {
      Yi.flushSync(() => {
        c(u);
      });
    }), [i]), _.useEffect(() => {
      c(i.getDecorators());
    }, [i]), _.useMemo(() => {
      const u = [], d = Object.keys(l);
      for (let p = 0; p < d.length; p++) {
        const h = d[p], f = a.jsx(s, { onError: (m) => i._onError(m), children: a.jsx(_.Suspense, { fallback: null, children: l[h] }) }), g = i.getElementByKey(h);
        g !== null && u.push(Yi.createPortal(f, g, h));
      }
      return u;
    }, [s, l, i]);
  }(r, n);
  return function(i) {
    _s(() => Et(b1(i), u1(i)), [i]);
  }(r), a.jsxs(a.Fragment, { children: [e, a.jsx(k1, { content: t }), o] });
}
function k1({ content: e }) {
  const [t] = _e(), n = function(o) {
    const [i, s] = _.useState(() => Oc(o));
    return _s(() => {
      function l() {
        const c = Oc(o);
        s(c);
      }
      return l(), Et(o.registerUpdateListener(() => {
        l();
      }), o.registerEditableListener(() => {
        l();
      }));
    }, [o]), i;
  }(t), r = c1();
  return n ? typeof e == "function" ? e(r) : e : null;
}
function w1() {
  const [e] = _e();
  return _.useEffect(() => e.registerNodeTransform(Gn, (t) => {
    t.remove();
  }), [e]), null;
}
const j1 = `background-color: var(${v.badgeBackground}); color: var(${v.badgeForeground}); border-radius: 4px;`, S1 = `background-color: var(${v.badgeBackground}); color: var(${v.badgeForeground}); border-radius: 4px;`;
class Tt extends Nt {
  constructor(n, r, o) {
    super(n, o);
    Oi(this, "__exists");
    this.__exists = r;
  }
  static getType() {
    return "variable";
  }
  static clone(n) {
    return new Tt(n.__text, n.__exists, n.__key);
  }
  static importJSON(n) {
    const r = Es(n.text, n.exists);
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
    return this.__exists ? r.style.cssText = j1 : r.style.cssText = S1, r.className = "variable", r;
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
function Es(e, t) {
  return new Tt(e, t);
}
function C1(e, t, n) {
  const [r] = _e();
  _.useEffect(() => Et(...L0(r, e, t, n)), [n, r, e, t]);
}
const $c = "startTransition", Ts = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, _1 = Ts ? _.useLayoutEffect : _.useEffect;
class E1 {
  constructor(t) {
    this.key = t, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(t) {
    this.ref = { current: t };
  }
}
const Ic = (e) => {
  const t = document.getElementById("typeahead-menu");
  if (!t) return;
  const n = t.getBoundingClientRect();
  n.top + n.height > window.innerHeight && t.scrollIntoView({ block: "center" }), n.top < 0 && t.scrollIntoView({ block: "center" }), e.scrollIntoView({ block: "nearest" });
};
function Dc(e, t) {
  const n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
  return n.top > r.top && n.top < r.bottom;
}
function T1(e, t, n, r) {
  const [o] = _e();
  _.useEffect(() => {
    if (t != null && e != null) {
      const i = o.getRootElement(), s = i != null ? function(p, h) {
        let f = getComputedStyle(p);
        const g = f.position === "absolute", m = /(auto|scroll)/;
        if (f.position === "fixed") return document.body;
        for (let y = p; y = y.parentElement; ) if (f = getComputedStyle(y), (!g || f.position !== "static") && m.test(f.overflow + f.overflowY + f.overflowX)) return y;
        return document.body;
      }(i) : document.body;
      let l = !1, c = Dc(t, s);
      const u = function() {
        l || (window.requestAnimationFrame(function() {
          n(), l = !1;
        }), l = !0);
        const p = Dc(t, s);
        p !== c && (c = p, r != null && r(p));
      }, d = new ResizeObserver(n);
      return window.addEventListener("resize", n), document.addEventListener("scroll", u, { capture: !0, passive: !0 }), d.observe(t), () => {
        d.unobserve(t), window.removeEventListener("resize", n), document.removeEventListener("scroll", u, !0);
      };
    }
  }, [t, o, r, n, e]);
}
const Pc = Sk();
function O1({ close: e, editor: t, anchorElementRef: n, resolution: r, options: o, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: l = !1, commandPriority: c = Pa }) {
  const [u, d] = _.useState(null), p = r.match && r.match.matchingString;
  _.useEffect(() => {
    d(0);
  }, [p]);
  const h = _.useCallback((g) => {
    t.update(() => {
      const m = r.match != null && l ? function(y) {
        const x = q();
        if (!A(x) || !x.isCollapsed()) return null;
        const b = x.anchor;
        if (b.type !== "text") return null;
        const w = b.getNode();
        if (!w.isSimpleText()) return null;
        const C = b.offset, E = w.getTextContent().slice(0, C), j = y.replaceableString.length, O = C - function(I, $, R) {
          let L = R;
          for (let M = L; M <= $.length; M++) I.substr(-M) === $.substr(0, M) && (L = M);
          return L;
        }(E, y.matchingString, j);
        if (O < 0) return null;
        let S;
        return O === 0 ? [S] = w.splitText(C) : [, S] = w.splitText(O, C), S;
      }(r.match) : null;
      s(g, m, e, r.match ? r.match.matchingString : "");
    });
  }, [t, l, r.match, s, e]), f = _.useCallback((g) => {
    const m = t.getRootElement();
    m !== null && (m.setAttribute("aria-activedescendant", "typeahead-item-" + g), d(g));
  }, [t]);
  return _.useEffect(() => () => {
    const g = t.getRootElement();
    g !== null && g.removeAttribute("aria-activedescendant");
  }, [t]), _1(() => {
    o === null ? d(null) : u === null && f(0);
  }, [o, u, f]), _.useEffect(() => Et(t.registerCommand(Pc, ({ option: g }) => !(!g.ref || g.ref.current == null) && (Ic(g.ref.current), !0), c)), [t, f, c]), _.useEffect(() => Et(t.registerCommand(Yd, (g) => {
    const m = g;
    if (o !== null && o.length && u !== null) {
      const y = u !== o.length - 1 ? u + 1 : 0;
      f(y);
      const x = o[y];
      x.ref != null && x.ref.current && t.dispatchCommand(Pc, { index: y, option: x }), m.preventDefault(), m.stopImmediatePropagation();
    }
    return !0;
  }, c), t.registerCommand(Xd, (g) => {
    const m = g;
    if (o !== null && o.length && u !== null) {
      const y = u !== 0 ? u - 1 : o.length - 1;
      f(y);
      const x = o[y];
      x.ref != null && x.ref.current && Ic(x.ref.current), m.preventDefault(), m.stopImmediatePropagation();
    }
    return !0;
  }, c), t.registerCommand(Jd, (g) => {
    const m = g;
    return m.preventDefault(), m.stopImmediatePropagation(), e(), !0;
  }, c), t.registerCommand(ef, (g) => {
    const m = g;
    return o !== null && u !== null && o[u] != null && (m.preventDefault(), m.stopImmediatePropagation(), h(o[u]), !0);
  }, c), t.registerCommand(wr, (g) => o !== null && u !== null && o[u] != null && (g !== null && (g.preventDefault(), g.stopImmediatePropagation()), h(o[u]), !0), c)), [h, e, t, o, u, f, c]), i(n, _.useMemo(() => ({ options: o, selectOptionAndCleanUp: h, selectedIndex: u, setHighlightedIndex: d }), [h, u, o]), r.match ? r.match.matchingString : "");
}
function $1({ options: e, onQueryChange: t, onSelectOption: n, onOpen: r, onClose: o, menuRenderFn: i, triggerFn: s, anchorClassName: l, commandPriority: c = Pa, parent: u }) {
  const [d] = _e(), [p, h] = _.useState(null), f = function(y, x, b, w = Ts ? document.body : void 0, C = !0) {
    const [E] = _e(), j = _.useRef(Ts ? document.createElement("div") : null), O = _.useCallback(() => {
      if (j.current === null || w === void 0) return;
      j.current.style.top = j.current.style.bottom;
      const I = E.getRootElement(), $ = j.current, R = $.firstChild;
      if (I !== null && y !== null) {
        const { left: L, top: M, width: K, height: G } = y.getRect(), V = j.current.offsetHeight;
        if ($.style.top = `${M + V + 3 + (C ? window.pageYOffset : 0)}px`, $.style.left = `${L + window.pageXOffset}px`, $.style.height = `${G}px`, $.style.width = `${K}px`, R !== null) {
          R.style.top = `${M}`;
          const de = R.getBoundingClientRect(), ge = de.height, Ze = de.width, We = I.getBoundingClientRect();
          L + Ze > We.right && ($.style.left = `${We.right - Ze + window.pageXOffset}px`), (M + ge > window.innerHeight || M + ge > We.bottom) && M - We.top > ge + G && ($.style.top = `${M - ge - G + (C ? window.pageYOffset : 0)}px`);
        }
        $.isConnected || (b != null && ($.className = b), $.setAttribute("aria-label", "Typeahead menu"), $.setAttribute("id", "typeahead-menu"), $.setAttribute("role", "listbox"), $.style.display = "block", $.style.position = "absolute", w.append($)), j.current = $, I.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [E, y, C, b, w]);
    _.useEffect(() => {
      const I = E.getRootElement();
      if (y !== null) return O(), () => {
        I !== null && I.removeAttribute("aria-controls");
        const $ = j.current;
        $ !== null && $.isConnected && $.remove();
      };
    }, [E, O, y]);
    const S = _.useCallback((I) => {
      y !== null && (I || x(null));
    }, [y, x]);
    return T1(y, j.current, O, S), j;
  }(p, h, l, u), g = _.useCallback(() => {
    h(null), o != null && p !== null && o();
  }, [o, p]), m = _.useCallback((y) => {
    h(y), r != null && p === null && r(y);
  }, [r, p]);
  return _.useEffect(() => {
    const y = d.registerUpdateListener(() => {
      d.getEditorState().read(() => {
        const x = d._window || window, b = x.document.createRange(), w = q(), C = function(O) {
          let S = null;
          return O.getEditorState().read(() => {
            const I = q();
            A(I) && (S = function($) {
              const R = $.anchor;
              if (R.type !== "text") return null;
              const L = R.getNode();
              if (!L.isSimpleText()) return null;
              const M = R.offset;
              return L.getTextContent().slice(0, M);
            }(I));
          }), S;
        }(d);
        if (!A(w) || !w.isCollapsed() || C === null || b === null) return void g();
        const E = s(C, d);
        if (t(E ? E.matchingString : null), E !== null && !function(O, S) {
          return S === 0 && O.getEditorState().read(() => {
            const I = q();
            if (A(I)) {
              const $ = I.anchor.getNode().getPreviousSibling();
              return z($) && $.isTextEntity();
            }
            return !1;
          });
        }(d, E.leadOffset) && function(S, I, $) {
          const R = He($);
          if (R === null || !R.isCollapsed) return !1;
          const L = R.anchorNode, M = S, K = R.anchorOffset;
          if (L == null || K == null) return !1;
          try {
            I.setStart(L, M), I.setEnd(L, K);
          } catch {
            return !1;
          }
          return !0;
        }(E.leadOffset, b, x) !== null)
          return j = () => m({ getRect: () => b.getBoundingClientRect(), match: E }), void ($c in St ? St[$c](j) : j());
        var j;
        g();
      });
    });
    return () => {
      y();
    };
  }, [d, s, t, p, g, m]), p === null || d === null || f.current === null ? null : a.jsx(O1, { close: g, resolution: p, editor: d, anchorElementRef: f, options: e, menuRenderFn: i, shouldSplitNodeWithQuery: !0, onSelectOption: n, commandPriority: c });
}
const I1 = 100;
function D1(e, t) {
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
function P1(e) {
  return D1(e, 0);
}
class z1 extends E1 {
  constructor(n) {
    super(n);
    Oi(this, "name");
    this.name = n;
  }
}
function A1({
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
function th({
  variables: e
}) {
  const [t] = _e(), n = _.useCallback((p) => {
    const h = p.getTextContent().slice(2, -2);
    return Es(p.getTextContent(), e.includes(h));
  }, []), r = _.useCallback((p) => {
    const h = /({{[\w-$]+}})/.exec(p);
    if (h === null)
      return null;
    const f = h[1].length, g = h.index, m = g + f;
    return {
      start: g,
      end: m
    };
  }, []);
  C1(r, Tt, n), _.useEffect(() => {
    t.registerMutationListener(
      Tt,
      (p) => {
        t.update(() => {
          for (let [h, f] of p)
            if (f === "created" || f === "updated") {
              const g = pe(h);
              if (g) {
                const m = g.getTextContent().slice(2, -2), y = e.includes(m);
                y !== g.getExists() && g.setExists(y);
              }
            }
        });
      },
      { skipInitialization: !1 }
    );
  }, [t]);
  const [o, i] = _.useState(null), [s, l] = _.useState([]);
  _.useEffect(() => {
    l(
      o !== null ? e.filter((p) => p.toLowerCase().includes(o.toLowerCase())) : e
    );
  }, [e, o]);
  const c = _.useMemo(
    () => s.map((p) => new z1(p)).slice(0, I1),
    [s]
  ), u = _.useCallback(
    (p, h, f) => {
      t.update(() => {
        const g = Es("{{" + p.name + "}}", !0);
        h && h.replace(g), g.select(), f();
      });
    },
    [t]
  ), d = _.useCallback(
    (p) => P1(p),
    [t]
  );
  return /* @__PURE__ */ a.jsx(
    $1,
    {
      onQueryChange: i,
      onSelectOption: u,
      triggerFn: d,
      options: c,
      menuRenderFn: (p, { selectedIndex: h, selectOptionAndCleanUp: f, setHighlightedIndex: g }) => p.current && s.length ? Yi.createPortal(
        /* @__PURE__ */ a.jsx(R1, { children: /* @__PURE__ */ a.jsx("ul", { children: c.map((m, y) => /* @__PURE__ */ a.jsx(
          A1,
          {
            index: y,
            isSelected: h === y,
            onClick: () => {
              g(y), f(m);
            },
            onMouseEnter: () => {
              g(y);
            },
            option: m
          },
          m.key
        )) }) }),
        p.current
      ) : null
    }
  );
}
const R1 = k.div`
  margin-top: 20px;
  background-color: var(${v.dropdownBackground});
  border: 1px solid var(${v.dropdownBorder});
  min-width: 150px;
  padding: 4px;

  > ul {
    padding: 0;
    list-style: none;
    margin: 0;
    max-height: 200px;
    overflow-y: auto;

    > li.selected {
      background-color: var(${v.listActiveSelectionBackground});
      color: var(${v.listActiveSelectionForeground});
    }

    > li:hover {
      //background-color: var(${v.listHoverBackground});
    }

    > li {
      margin: 2px;
      color: var(${v.dropdownForeground});
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
function pi({
  name: e,
  variables: t,
  encode: n,
  decode: r,
  ...o
}) {
  const { field: i } = J({
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
      const c = Pe();
      c.append(te(n ? n(i.value) : i.value)), ae().append(c);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: s,
    nodes: [Tt]
  };
  return /* @__PURE__ */ a.jsx(N1, { ...o, onBlur: i.onBlur, children: /* @__PURE__ */ a.jsx(za, { initialConfig: l, children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      Ma,
      {
        contentEditable: /* @__PURE__ */ a.jsx(Aa, {}),
        placeholder: /* @__PURE__ */ a.jsx("div", {}),
        ErrorBoundary: Ra
      }
    ),
    /* @__PURE__ */ a.jsx(Na, {}),
    t !== void 0 && /* @__PURE__ */ a.jsx(th, { variables: t }),
    /* @__PURE__ */ a.jsx(M1, { name: e, decode: r }),
    /* @__PURE__ */ a.jsx(w1, {})
  ] }) }) });
}
const N1 = k.div`
  background: transparent;
  padding: 2px;
  color: var(${v.foreground});
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
function M1({ name: e, decode: t }) {
  const [n] = _e(), { field: r } = J({
    name: e
  });
  return _.useEffect(() => {
    r.ref({ focus: () => n.focus() });
    const o = n.registerTextContentListener((s) => {
      try {
        r.onChange(t ? t(s) : s);
      } catch (l) {
        r.onChange(l);
      }
    }), i = n.registerCommand(
      rf,
      (s, l) => (r.onBlur(), !1),
      Pa
    );
    return () => {
      o(), i();
    };
  }, [n, r]), null;
}
function q1({
  name: e,
  remove: t,
  variables: n
}) {
  const { control: r } = ln(), {
    field: o,
    fieldState: { error: i }
  } = J({
    name: `${e}.key`,
    control: r,
    rules: {
      pattern: {
        value: Tn(),
        message: On
      }
    }
  }), { field: s } = J({
    name: `${e}.value`,
    control: r
  }), { field: l } = J({
    name: `${e}.type`,
    control: r
  }), c = F1(s.value);
  return /* @__PURE__ */ a.jsxs(L1, { children: [
    /* @__PURE__ */ a.jsxs(B1, { children: [
      /* @__PURE__ */ a.jsx(H1, { type: "text", ...o }),
      /* @__PURE__ */ a.jsx(U1, { variables: n, name: `${e}.value` }),
      /* @__PURE__ */ a.jsxs(V1, { ...l, children: [
        /* @__PURE__ */ a.jsx("option", { value: "string", children: "string" }),
        /* @__PURE__ */ a.jsx("option", { value: "number", disabled: !c.has("number"), children: "number" }),
        /* @__PURE__ */ a.jsx("option", { value: "boolean", disabled: !c.has("boolean"), children: "boolean" }),
        /* @__PURE__ */ a.jsx("option", { value: "null", disabled: !c.has("null"), children: "null" })
      ] }),
      /* @__PURE__ */ a.jsx(
        W1,
        {
          onClick: (u) => {
            u.preventDefault(), u.stopPropagation(), t();
          },
          children: /* @__PURE__ */ a.jsx(Ue, {})
        }
      )
    ] }),
    i && /* @__PURE__ */ a.jsxs(G1, { children: [
      /* @__PURE__ */ a.jsx(Mo, {}),
      "  ",
      i.message
    ] })
  ] });
}
function F1(e) {
  const t = /* @__PURE__ */ new Set(["string"]);
  try {
    const r = typeof JSON.parse(e);
    r === "number" || r === "boolean" ? t.add(r) : e === "null" && t.add("null");
  } catch {
  }
  return t;
}
const L1 = k.div`
  display: contents;
`, B1 = k.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, H1 = k.input`
  flex: 1;
  border: none;
  background: transparent;
  border-bottom: 1px solid var(${v.border});
  color: var(${v.foreground});
  padding: 4px 8px;
`, U1 = k(pi)`
  flex: 2;
  border-bottom: 1px solid var(${v.border});
  padding: 4px 8px;
`, V1 = k.select`
  border: none;
  background: transparent;
  color: var(${v.foreground});
  border-bottom: 1px solid var(${v.border});
  padding: 4px 8px;
`, W1 = k.button`
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
    fill: var(${v.foreground});
  }
`, G1 = k.div`
  padding: 4px;
  display: flex;
`;
function K1({ name: e, append: t }) {
  return /* @__PURE__ */ a.jsxs(
    X1,
    {
      onClick: (n) => {
        n.preventDefault(), n.stopPropagation(), t({ key: e, value: "", type: "string" }, { shouldFocus: !0 });
      },
      children: [
        /* @__PURE__ */ a.jsx("span", { children: e }),
        /* @__PURE__ */ a.jsx(vg, {})
      ]
    }
  );
}
const X1 = k.span`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(${v.linkForeground});
  cursor: pointer;
  > svg {
    fill: var(${v.linkForeground});
  }
`;
function Fr({
  name: e,
  variables: t,
  missing: n
}) {
  const { control: r } = ln(), { fields: o, append: i, remove: s } = cn({
    control: r,
    name: e
  });
  return /* @__PURE__ */ a.jsxs(Y1, { children: [
    /* @__PURE__ */ a.jsxs(Q1, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", { children: "Type" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    o.map((l, c) => /* @__PURE__ */ a.jsx(
      q1,
      {
        name: `${e}.${c}`,
        variables: t,
        remove: () => {
          s(c);
        }
      },
      l.id
    )),
    /* @__PURE__ */ a.jsx(yk, { append: i }),
    n && (n == null ? void 0 : n.length) > 0 && /* @__PURE__ */ a.jsxs(J1, { children: [
      /* @__PURE__ */ a.jsx(Qe, {}),
      " ",
      /* @__PURE__ */ a.jsx("span", { className: "message", children: "Unset variables" }),
      n.map((l) => /* @__PURE__ */ a.jsx(K1, { name: l, append: i }, l))
    ] })
  ] });
}
const Y1 = k.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 7em 2em;
`, Q1 = k.div`
  display: contents;
  > div {
    background-color: var(${v.computedOne});
    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, J1 = k.div`
  margin-top: 8px;
  padding: 8px;
  border: 1px solid var(${v.border});
  grid-column: span 3;
  display: flex;
  align-items: center;
  gap: 6px;
  > svg {
    fill: var(${v.errorForeground});
  }
  > span.message {
    color: var(${v.errorForeground});
  }
`;
function Z1(e, t, n) {
  const r = op(e, e.paths[t]), o = Po(e, t, n), i = ip(e, o);
  return sp(e, r, i);
}
function ew(e, t, n) {
  const r = Po(e, t, n);
  return ((r == null ? void 0 : r.security) ?? e.security ?? []).length > 0;
}
function tw(e, t, n) {
  var s, l, c, u;
  const r = Po(e, t, n), o = (r == null ? void 0 : r.security) ?? e.security ?? [], i = [];
  for (const d of o) {
    const p = {};
    for (const h of Object.keys(d))
      if ((l = (s = e == null ? void 0 : e.components) == null ? void 0 : s.securitySchemes) != null && l[h]) {
        const f = En(e, (u = (c = e == null ? void 0 : e.components) == null ? void 0 : c.securitySchemes) == null ? void 0 : u[h]);
        f !== void 0 && (p[h] = f);
      }
    i.push(p);
  }
  return i;
}
function nw(e) {
  return e = ue.simpleClone(e), {
    ...e,
    fuzzing: e.fuzzing === !0,
    expectedResponse: e.expectedResponse !== void 0 ? e.expectedResponse : "",
    environment: qa(e.environment),
    responses: Fa(e.responses)
  };
}
function rw(e) {
  return {
    ...e,
    fuzzing: e.fuzzing === !0 ? !0 : void 0,
    expectedResponse: e.expectedResponse !== "" ? e.expectedResponse : void 0,
    environment: Ba(e.environment),
    responses: La(e.responses)
  };
}
function ow(e) {
  return e = ue.simpleClone(e), {
    path: e.request.path,
    method: e.request.method,
    parameters: e.request.parameters,
    body: e.request.body,
    environment: qa(e.environment),
    defaultResponse: e.defaultResponse,
    injectionKey: e.injectionKey,
    fuzzing: e.fuzzing,
    operationId: e.operationId,
    requestOperationId: e.request.operationId,
    responses: Fa(e.responses),
    auth: e.auth
  };
}
function iw(e) {
  return e = ue.simpleClone(e), {
    url: e.request.url,
    method: e.request.method,
    parameters: e.request.parameters,
    body: e.request.body,
    environment: qa(e.environment),
    defaultResponse: e.defaultResponse,
    responses: Fa(e.responses)
  };
}
function qa(e) {
  return Object.entries(e || {}).map(([n, r]) => ({
    key: n,
    value: r,
    type: typeof r
  }));
}
function Fa(e) {
  return Object.entries(e || {}).map(([t, n]) => ({
    key: t,
    value: {
      ...n,
      variableAssignments: sw(n.variableAssignments)
    }
  }));
}
function La(e) {
  const t = {};
  for (const { key: n, value: r } of e)
    t[n] = {
      ...r,
      variableAssignments: aw(r.variableAssignments)
    };
  return t;
}
function sw(e) {
  return Object.entries(e || {}).map(([t, n]) => ({
    key: t,
    value: n
  }));
}
function aw(e) {
  const t = {};
  for (const { key: n, value: r } of e)
    t[n] = r;
  return t;
}
function lw(e) {
  return e = ue.simpleClone(e), {
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
    environment: Ba(e.environment),
    defaultResponse: e.defaultResponse,
    responses: La(e.responses),
    auth: e.auth,
    operationId: e.operationId
  };
}
function cw(e) {
  return e = ue.simpleClone(e), {
    request: {
      url: e.url,
      method: e.method,
      parameters: e.parameters,
      body: e.body
    },
    environment: Ba(e.environment),
    defaultResponse: e.defaultResponse,
    responses: La(e.responses),
    operationId: void 0
  };
}
function Ba(e) {
  const t = {};
  for (const n of e)
    t[n.key] = uw(n.value, n.type);
  return t;
}
function uw(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
function Ha({
  name: e,
  options: t,
  placeholder: n
}) {
  const { field: r } = J({
    name: e
  });
  return /* @__PURE__ */ a.jsx(
    Wn,
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
function dw({
  found: e,
  missing: t,
  currentStep: n
}) {
  const r = e !== void 0 ? [...new Map(e.map((i) => [i.name, i])).values()] : void 0, o = t !== void 0 ? [...new Map(t.map((i) => [i.name, i])).values()] : void 0;
  return r == null || r.sort((i, s) => i.name.localeCompare(s.name)), o == null || o.sort((i, s) => i.name.localeCompare(s.name)), /* @__PURE__ */ a.jsxs(gw, { children: [
    /* @__PURE__ */ a.jsxs(mw, { children: [
      /* @__PURE__ */ a.jsx("div", {}),
      /* @__PURE__ */ a.jsx("div", { children: "Variable name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Location where the variable is defined" })
    ] }),
    r == null ? void 0 : r.map((i, s) => hw(i, s, n)),
    o == null ? void 0 : o.map(fw)
  ] });
}
function fw(e, t) {
  return /* @__PURE__ */ a.jsxs(nh, { children: [
    /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
      Qe,
      {
        style: {
          fill: `var(${v.errorForeground})`
        }
      }
    ) }),
    /* @__PURE__ */ a.jsx("div", { children: e.name }),
    /* @__PURE__ */ a.jsx("div", { children: "Variable is not found" })
  ] }, t);
}
function hw(e, t, n) {
  return /* @__PURE__ */ a.jsxs(nh, { children: [
    /* @__PURE__ */ a.jsx("div", {}),
    /* @__PURE__ */ a.jsx("div", { children: e.name }),
    /* @__PURE__ */ a.jsx("div", { children: pw(e.context, n) })
  ] }, t);
}
function pw(e, t) {
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
    return `${zc(e.name)} / Step ${e.step + 1} / Operation / Response processing`;
  if (e.type === "playbook-stage")
    return `${zc(e.name)} / Step ${e.step + 1} / Response processing`;
}
function zc(e) {
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
const gw = k.div`
  display: grid;
  grid-template-columns: 2em 16em 1fr;
  padding: 8px;
  > div > div {
    padding: 4px;
    line-break: anywhere;
  }
`, mw = k.div`
  display: contents;
  > div {
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, nh = k.div`
  display: contents;
`;
function yw({
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
  var w, C, E, j;
  const [{ isDragging: p }, h] = iy(() => ({
    type: "stage",
    item: { location: i },
    collect: (O) => ({
      isDragging: !!O.isDragging()
    })
  })), f = e.ref.type === "operation" ? l[e.ref.id] : c[e.ref.id], g = bw(f), m = xw(f), y = [
    ...m.filter((O) => O !== "default").map((O) => ({ label: O, value: O }))
  ], x = [
    ...Vs,
    ...vw(((w = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : w.stack) || [])
  ], b = Array.from(new Set(((C = n == null ? void 0 : n.variablesReplaced) == null ? void 0 : C.missing) || [])).map(
    (O) => O.name
  );
  return /* @__PURE__ */ a.jsx(
    Je,
    {
      data: e,
      saveData: r,
      wrapFormData: nw,
      unwrapFormData: rw,
      children: /* @__PURE__ */ a.jsxs(kw, { children: [
        /* @__PURE__ */ a.jsx(ww, { children: d + 1 }),
        /* @__PURE__ */ a.jsx(
          jw,
          {
            ref: h,
            style: {
              opacity: p ? 0.5 : 1,
              cursor: p ? "move" : "auto"
            },
            children: /* @__PURE__ */ a.jsxs(an, { children: [
              /* @__PURE__ */ a.jsxs(Sw, { children: [
                /* @__PURE__ */ a.jsxs("span", { children: [
                  e.ref.id,
                  /* @__PURE__ */ a.jsx(
                    qu,
                    {
                      onClick: (O) => {
                        O.preventDefault(), O.stopPropagation(), u(e.ref);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ a.jsxs(Cw, { onClick: (O) => O.stopPropagation(), children: [
                  b.length > 0 && /* @__PURE__ */ a.jsx(
                    Ac,
                    {
                      message: "Unset variables",
                      description: "There are unset variables in this step of the scenario. You can set their values in the 'Environment' section of the step, or in the 'Response processing' section of the previous steps."
                    }
                  ),
                  f === void 0 && /* @__PURE__ */ a.jsx(
                    Ac,
                    {
                      message: `${e.ref.type}/${e.ref.id} is missing`,
                      description: "Target of a reference is missing"
                    }
                  ),
                  /* @__PURE__ */ a.jsxs(_w, { children: [
                    /* @__PURE__ */ a.jsx("span", { children: "Expected Response" }),
                    /* @__PURE__ */ a.jsx(
                      Ha,
                      {
                        name: "expectedResponse",
                        options: y,
                        placeholder: g
                      }
                    )
                  ] }),
                  s && /* @__PURE__ */ a.jsxs(Ew, { children: [
                    /* @__PURE__ */ a.jsx("span", { children: "Fuzzing" }),
                    /* @__PURE__ */ a.jsx(Vd, { name: "fuzzing" })
                  ] }),
                  /* @__PURE__ */ a.jsx(Tw, { className: "grab", children: /* @__PURE__ */ a.jsx(pg, {}) }),
                  /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsxs(At, { onClick: (O) => O.stopPropagation(), onSelect: o, children: [
                    /* @__PURE__ */ a.jsx(Ue, {}),
                    "Delete"
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ a.jsx(
                ct,
                {
                  tabs: [
                    {
                      id: "environment",
                      title: "Environment",
                      content: /* @__PURE__ */ a.jsx(
                        Fr,
                        {
                          name: "environment",
                          variables: x,
                          missing: b
                        }
                      ),
                      counter: b.length,
                      counterKind: "error"
                    },
                    {
                      id: "responses",
                      title: "Response processing",
                      content: /* @__PURE__ */ a.jsx(Qo, { editable: !0, responseCodes: m })
                    },
                    {
                      id: "variables",
                      title: "Context",
                      content: /* @__PURE__ */ a.jsx(
                        dw,
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
function vw(e) {
  const t = [];
  for (const n of e)
    for (const r of Object.keys(n.env))
      t.includes(r) || t.push(r);
  return t.sort(), t;
}
function xw(e) {
  if (e !== void 0) {
    const t = "scenarios" in e ? e.request.responses : e.responses;
    return Object.keys(t || {}).map((r) => r);
  }
  return [];
}
function bw(e) {
  if (e !== void 0)
    return ("scenarios" in e ? e.request : e).defaultResponse;
}
const kw = k.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, ww = k.div`
  font-weight: 400;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  width: 18px;
`, jw = k.div`
  background-color: var(${v.background});
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
`, Sw = k.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > span {
    > svg {
      fill: var(${v.linkForeground});
    }
    flex: 1;
    font-weight: 600;
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
`, Cw = k.div`
  cursor: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`, _w = k.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  > div {
    width: 60px;
    border: 1px solid var(${v.border});
  }
`, Ew = k.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`, Tw = k.div`
  cursor: grab;
  > svg {
    fill: var(${v.foreground});
  }
`;
function Ac({ message: e, description: t }) {
  return /* @__PURE__ */ a.jsx(rg, { children: /* @__PURE__ */ a.jsxs(og, { children: [
    /* @__PURE__ */ a.jsx(ig, { asChild: !0, children: /* @__PURE__ */ a.jsxs(Ow, { children: [
      /* @__PURE__ */ a.jsx(Qe, {}),
      " ",
      /* @__PURE__ */ a.jsx("span", { children: e })
    ] }) }),
    /* @__PURE__ */ a.jsx(sg, { children: /* @__PURE__ */ a.jsx($w, { children: t }) })
  ] }) });
}
const Ow = k.div`
  cursor: help;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  color: var(${v.foreground});
  > svg {
    fill: var(${v.foreground});
  }
`, $w = k(ng)`
  max-width: 400px;
  color: var(${v.notificationsForeground});
  background-color: var(${v.notificationsBackground});
  border: 1px solid var(${v.notificationsBorder});
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 16px;
`;
function Pn({
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
  const p = (m) => (y) => o(m, y), h = (m) => () => i(m), [{ isOver: f }, g] = ed(() => ({
    accept: "stage",
    collect: (m) => ({
      isOver: !!m.isOver()
    })
  }));
  return t.length === 0 ? null : /* @__PURE__ */ a.jsx(Dw, { ref: g, children: t.map((m, y) => {
    var b;
    const x = { ...n, stageIndex: y };
    return /* @__PURE__ */ a.jsxs(St.Fragment, { children: [
      f && /* @__PURE__ */ a.jsx(Iw, { moveStage: s, destinationIndex: y }),
      /* @__PURE__ */ a.jsx(
        yw,
        {
          oas: e,
          stage: m,
          result: (b = r == null ? void 0 : r.results) == null ? void 0 : b[y],
          saveStage: p(x),
          removeStage: h(x),
          goToRequest: d,
          location: x,
          fuzzing: l,
          operations: c,
          requests: u,
          stageIndex: y
        }
      )
    ] }, `stage-${y}-${m.ref.type}-${m.ref.id}`);
  }) });
}
function Iw({
  destinationIndex: e,
  moveStage: t
}) {
  const [{ isOver: n }, r] = ed(() => ({
    accept: "stage",
    drop: (o) => t(o.location, e),
    collect: (o) => ({
      isOver: !!o.isOver()
    })
  }));
  return /* @__PURE__ */ a.jsx(Pw, { ref: r, isOver: n });
}
const Dw = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Pw = k.div`
  display: flex;
  border: 16px solid var(${v.border});
  opacity: 0.5;
  cursor: pointer;
  ${({ isOver: e }) => e && "opacity: 1;"}
`;
function zw({
  operationIds: e,
  requestIds: t,
  onSelect: n
}) {
  const r = "", o = "", i = [];
  i.push(
    ...e.map(
      (f) => ({
        type: "operation",
        id: f
      })
    )
  ), i.push(
    ...t.map(
      (f) => ({
        type: "request",
        id: f
      })
    )
  );
  const [s, l] = _.useState(i), { isOpen: c, getMenuProps: u, getInputProps: d, getItemProps: p, openMenu: h } = Fo({
    initialInputValue: r,
    items: s,
    onSelectedItemChange: ({ selectedItem: f }) => {
      f && n(f);
    },
    onInputValueChange: ({ inputValue: f }) => {
      l(
        i.filter((g) => !f || g.id.toLowerCase().includes(f))
      );
    },
    itemToString: (f) => f ? f.id : ""
  });
  return /* @__PURE__ */ a.jsxs(Aw, { children: [
    /* @__PURE__ */ a.jsx(
      Rw,
      {
        autoFocus: !0,
        ...d({
          onFocus() {
            h();
          }
        }),
        placeholder: o,
        onBlur: (f) => {
          n(void 0);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(Nw, { children: /* @__PURE__ */ a.jsx(Mw, { ...u(), isOpen: c, children: c && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(Rc, { children: "Operations" }),
      s.map((f, g) => f.type === "operation" ? /* @__PURE__ */ a.jsx(
        "li",
        {
          ...p({
            item: f,
            index: g
          }),
          children: f.id
        },
        `li-${f.type}-${f.id}-${g}`
      ) : null),
      /* @__PURE__ */ a.jsx(Rc, { children: "Requests" }),
      s.map((f, g) => f.type === "request" ? /* @__PURE__ */ a.jsx(
        "li",
        {
          ...p({
            item: f,
            index: g
          }),
          children: f.id
        },
        `li-${f.type}-${f.id}-${g}`
      ) : null)
    ] }) }) })
  ] });
}
const Aw = k.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${v.border});
`, Rw = k.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${v.border});
  color: var(${v.foreground});
  &::placeholder {
    color: var(${v.inputPlaceholderForeground});
  }
`, Nw = k.div`
  position: relative;
  z-index: 1;
`, Mw = k.ul`
  ${({ isOpen: e }) => e && `border: 1px solid var(${v.dropdownBorder});`}
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
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
    background-color: var(${v.listHoverBackground});
  }
`, Rc = k.div`
  font-weight: 600;
  margin: 4px;
`;
function zn({
  operationIds: e,
  requestIds: t,
  onSelect: n
}) {
  const [r, o] = _.useState(!1);
  return r ? /* @__PURE__ */ a.jsx(
    zw,
    {
      onSelect: (i) => {
        i !== void 0 && n(i), o(!1);
      },
      requestIds: t,
      operationIds: e
    }
  ) : /* @__PURE__ */ a.jsxs(
    qw,
    {
      onClick: (i) => {
        i.stopPropagation(), i.preventDefault(), o(!0);
      },
      children: [
        /* @__PURE__ */ a.jsx($r, {}),
        " Pick the operation"
      ]
    }
  );
}
const qw = k.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${v.border});
  color: var(${v.linkForeground});
  > svg {
    fill: var(${v.linkForeground});
  }
`;
function Fw({
  onAddCredentialValue: e,
  existing: t
}) {
  const n = { name: "", value: "" }, r = (i) => {
    e(i.name, { credential: i.value, requests: [] });
  }, o = Bn({
    name: Y().regex(Tn(), {
      message: On
    }).refine((i) => !t.includes(i), {
      message: "Already exists"
    }),
    value: Y().min(1)
  });
  return /* @__PURE__ */ a.jsx(
    Dr,
    {
      defaultValues: n,
      onSubmit: r,
      schema: o,
      trigger: /* @__PURE__ */ a.jsx(Bw, { children: /* @__PURE__ */ a.jsx($r, {}) }),
      children: /* @__PURE__ */ a.jsx(Lw, {})
    }
  );
}
function Lw() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Xe, { label: "Credential name", name: "name" }),
    /* @__PURE__ */ a.jsx(Xe, { label: "Credential value", name: "value" })
  ] });
}
const Bw = k.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${v.linkForeground});
    &:hover {
      fill: var(${v.linkActiveForeground});
    }
  }
`;
function Hw({
  group: e,
  credentialId: t
}) {
  const n = re(), { playbook: r, oas: o, selectedSubcredential: i } = U((w) => w.scanconf), { mockResult: s } = U((w) => w.auth), l = Object.keys(r.operations), c = Object.keys(r.requests || {}), u = (w) => n(Pt(w)), d = (w, C) => n(zt({ location: w, reference: C })), p = (w, C) => n(Dt({ location: w, to: C })), h = (w, C) => {
    n(
      It({
        container: w,
        stage: {
          ref: C
        }
      })
    );
  }, f = (w) => {
    n(Yt(w)), n(se(["scanconf", "requests"]));
  }, { fields: g, append: m, remove: y } = cn({
    name: "methods"
  }), { getValues: x } = ln(), b = g.map((w, C) => ({
    id: w.key,
    title: w.key,
    menu: /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsxs(At, { onClick: (E) => E.stopPropagation(), onSelect: () => y(C), children: [
      /* @__PURE__ */ a.jsx(Ue, {}),
      "Delete"
    ] }) }),
    content: /* @__PURE__ */ a.jsxs(Uw, { value: w.key, children: [
      /* @__PURE__ */ a.jsx(Xe, { label: "Credential value", name: `methods.${C}.value.credential` }),
      /* @__PURE__ */ a.jsxs(Vw, { children: [
        /* @__PURE__ */ a.jsx(
          Pn,
          {
            oas: o,
            stages: w.value.requests,
            container: {
              container: "credential",
              group: e,
              credentialId: t,
              subCredentialId: w.key
            },
            executionResult: s == null ? void 0 : s[0],
            saveStage: d,
            moveStage: p,
            removeStage: u,
            operations: r.operations,
            requests: r.requests,
            goToRequest: f
          }
        ),
        /* @__PURE__ */ a.jsx(
          zn,
          {
            operationIds: l,
            requestIds: c,
            onSelect: (E) => h(
              { container: "credential", group: e, credentialId: t, subCredentialId: w.key },
              E
            )
          }
        )
      ] })
    ] })
  }));
  return /* @__PURE__ */ a.jsx(
    ct,
    {
      activeTab: i,
      setActiveTab: (w) => n(go(w)),
      tabs: b,
      menu: /* @__PURE__ */ a.jsx(
        Fw,
        {
          existing: x("methods").map((w) => w.key),
          onAddCredentialValue: (w, C) => {
            m({ key: w, value: C }), n(go(w));
          }
        }
      )
    }
  );
}
const Uw = k(Yp)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
`, Vw = k.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function rh({
  options: e,
  placeholder: t,
  selected: n,
  onSelectedItemChange: r
}) {
  const [o, i] = _.useState(""), [s, l] = _.useState(e);
  _.useEffect(() => {
    l(
      e.filter((h) => o === "" || h.toLowerCase().includes(o.toLowerCase()))
    );
  }, [o, e]);
  const { isOpen: c, getMenuProps: u, getInputProps: d, getItemProps: p } = Fo({
    initialInputValue: n,
    items: s,
    onInputValueChange: ({ inputValue: h }) => {
      r(h), i(h !== void 0 ? h : "");
    },
    itemToString: (h) => h || ""
  });
  return /* @__PURE__ */ a.jsxs(Ww, { children: [
    /* @__PURE__ */ a.jsx(Gw, { ...d(), placeholder: t }),
    /* @__PURE__ */ a.jsx(Kw, { visible: c && s.length > 0, children: /* @__PURE__ */ a.jsx(Xw, { ...u(), children: s.map((h, f) => /* @__PURE__ */ a.jsx(
      "li",
      {
        ...p({
          item: h,
          index: f
        }),
        children: h
      },
      `li-${f}`
    )) }) })
  ] });
}
const Ww = k.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${v.focusBorder});
  }
  border: 1px solid transparent;
`, Gw = k.input`
  background: transparent;
  border: none;
  color: var(${v.foreground});
  padding: 4px;
  &::placeholder {
    color: var(${v.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, Kw = k.div`
  position: relative;
  z-index: 1;
  visibility: ${({ visible: e }) => e ? "visible" : "hidden"};
`, Xw = k.ul`
  border: 1px solid var(${v.dropdownBorder});
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
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
    background-color: var(${v.listHoverBackground});
  }
`;
function An({
  onTry: e,
  onScan: t,
  servers: n,
  host: r,
  menu: o
}) {
  const { scanServer: i, useGlobalBlocks: s, rejectUnauthorized: l } = Mp(
    (m) => m.prefs
  ), c = qp(), u = (m) => c(Pu(m)), d = (m) => c(Fp(m)), p = (m) => c(Lp(m)), h = [...n];
  r && !h.includes(r) && h.unshift(r);
  const [f, g] = _.useState(
    i !== "" ? i : h[0]
  );
  return !h.includes(i) && i !== "" && h.push(i), /* @__PURE__ */ a.jsx(Qw, { children: /* @__PURE__ */ a.jsxs(Yw, { children: [
    /* @__PURE__ */ a.jsx(
      rh,
      {
        options: h,
        selected: f,
        onSelectedItemChange: (m) => {
          m && (g(m), u(m));
        }
      }
    ),
    /* @__PURE__ */ a.jsxs(
      Nc,
      {
        onClick: (m) => {
          m.stopPropagation(), m.preventDefault(), e(f);
        },
        children: [
          /* @__PURE__ */ a.jsx(hg, {}),
          "Try"
        ]
      }
    ),
    t && /* @__PURE__ */ a.jsxs(
      Nc,
      {
        onClick: (m) => {
          m.stopPropagation(), m.preventDefault(), t(f);
        },
        children: [
          /* @__PURE__ */ a.jsx(mg, {}),
          "Scan"
        ]
      }
    ),
    o && /* @__PURE__ */ a.jsx(Jw, { children: /* @__PURE__ */ a.jsxs(ut, { icon: "sliders", children: [
      /* @__PURE__ */ a.jsx(Pb, { children: "Try settings" }),
      /* @__PURE__ */ a.jsx(Db, {}),
      /* @__PURE__ */ a.jsxs(
        zl,
        {
          checked: s,
          onCheckedChange: (m) => d(m),
          children: [
            /* @__PURE__ */ a.jsx(Pl, {}),
            "Execute global blocks"
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        zl,
        {
          checked: l,
          onCheckedChange: (m) => p(m),
          children: [
            /* @__PURE__ */ a.jsx(Pl, {}),
            "Reject untrusted SSL certificates"
          ]
        }
      )
    ] }) })
  ] }) });
}
const Yw = k.div`
  border: 1px solid var(${v.border});
  display: flex;
  align-items: center;
  flex: 1;
  height: 2.1rem;
  padding-left: 4px;
  & > div:first-child {
    flex: 1;
  }
`, Qw = k.div`
  background-color: var(${v.background});
  color: var(${v.foreground});
`, Nc = k.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  color: var(${v.linkForeground});
  > svg {
    fill: var(${v.linkForeground});
  }
`, Jw = k.div`
  display: flex;
  padding: 8px 12px;
`;
function Zw({ selected: e }) {
  const t = re(), {
    playbook: { authenticationDetails: n },
    servers: r
  } = U((u) => u.scanconf), { tryResult: o } = U((u) => u.auth), i = (u, d, p) => t(ta({ group: parseInt(u), id: d, credential: p })), s = parseInt(e.sectionId), l = e.itemId, c = n[s][l];
  return /* @__PURE__ */ a.jsxs(ej, { children: [
    /* @__PURE__ */ a.jsx(
      An,
      {
        servers: r,
        onTry: (u) => {
          t(kd(u));
        }
      }
    ),
    /* @__PURE__ */ a.jsx(xe, { title: "Security Scheme", children: /* @__PURE__ */ a.jsx(
      Eb,
      {
        credential: c,
        saveCredential: (u) => i(e.sectionId, e.itemId, u)
      },
      e.itemId
    ) }),
    /* @__PURE__ */ a.jsx(
      xe,
      {
        defaultOpen: !1,
        title: "Credentials",
        count: Object.keys(c.methods).length,
        children: /* @__PURE__ */ a.jsx(
          Je,
          {
            data: c,
            saveData: (u) => i(e.sectionId, e.itemId, u),
            wrapFormData: Hd,
            unwrapFormData: Ud,
            children: /* @__PURE__ */ a.jsx(Hw, { group: s, credentialId: l })
          }
        )
      }
    ),
    o.length > 0 && /* @__PURE__ */ a.jsx(xe, { title: "Result", children: /* @__PURE__ */ a.jsx(In, { result: o }) })
  ] });
}
const ej = k.div`
  padding: 8px;
`, _r = k.button`
  cursor: pointer;
  background-color: var(${v.buttonBackground});
  color: var(${v.buttonForeground});
  border: 1px solid var(${v.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    outline: 1px solid var(${v.focusBorder});
  }
`;
function tj() {
  const e = Tr({ name: "type" });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Xe, { label: "ID", name: "id" }),
    /* @__PURE__ */ a.jsx(
      fl,
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
        fl,
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
      /* @__PURE__ */ a.jsx(Xe, { label: "Name", name: "name" })
    ] }),
    /* @__PURE__ */ a.jsx(Xe, { label: "Description", name: "description" }),
    /* @__PURE__ */ a.jsx(Xe, { label: "Credential name", name: "credentialName" }),
    /* @__PURE__ */ a.jsx(Xe, { label: "Credential value", name: "credentialValue" })
  ] });
}
function nj({
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
  }, r = Bn({
    id: Y().regex(Tn(), {
      message: On
    }).refine((i) => !t.includes(i), {
      message: "Already exists"
    }),
    type: Y(),
    in: Y(),
    name: Y(),
    description: Y(),
    credentialName: Y().regex(Tn(), {
      message: On
    }),
    credentialValue: Y().min(1)
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
    Dr,
    {
      title: "New security scheme",
      defaultValues: n,
      schema: r,
      onSubmit: o,
      trigger: /* @__PURE__ */ a.jsx(_r, { style: { width: "100%" }, children: "New security scheme" }),
      children: /* @__PURE__ */ a.jsx(tj, {})
    }
  );
}
function rj() {
  const e = re(), {
    playbook: { authenticationDetails: t },
    selectedCredentialGroup: n,
    selectedCredential: r
  } = U((s) => s.scanconf), o = (s, l) => {
    e(Zs({ credentialGroup: 0, id: s, credential: l })), e(po({ group: 0, credential: s }));
  }, i = t.map((s, l) => {
    const c = l === 0 ? "Default group" : `Group ${l}`, u = Object.entries(s).map(([d, p]) => ({
      id: d,
      label: d,
      menu: /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsxs(
        At,
        {
          onClick: (h) => h.stopPropagation(),
          onSelect: () => e(ea({ credentialGroup: l, id: d })),
          children: [
            /* @__PURE__ */ a.jsx(Ue, {}),
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
    Ln,
    {
      title: "security schemes",
      sections: i,
      render: (s) => /* @__PURE__ */ a.jsx(Zw, { selected: s }),
      renderButtons: () => /* @__PURE__ */ a.jsx(
        nj,
        {
          existing: Object.keys((t == null ? void 0 : t[0]) || []),
          onAddCredential: o
        }
      ),
      selected: r !== void 0 ? { sectionId: `${n}`, itemId: r } : void 0,
      onSelected: (s) => {
        e(
          po({ group: parseInt(s.sectionId), credential: s.itemId })
        );
      }
    }
  );
}
function oj(e) {
  return () => e({
    actionCreator: Uh,
    effect: async (t, n) => {
      const r = n.getOriginalState().confirmationDialog.actions;
      for (const o of r)
        n.dispatch(o);
    }
  });
}
function oh() {
  return /* @__PURE__ */ new Map();
}
function ij(e, t, n, r) {
  const o = t.ttl !== void 0 ? is(t.ttl) : void 0;
  if (o !== void 0) {
    const i = `${t.name}/${n}`, s = Date.now() + o;
    e.set(i, { value: r, expiryTime: s });
  }
}
function sj(e, t, n) {
  const r = `${t.name}/${n}`, o = e.get(r);
  if (o && Date.now() < o.expiryTime)
    return o.value;
  e.delete(r);
}
function Ua(e, t) {
  return t.type === e.type && t.in === e.in || t.type === "http" && e.type == "basic" && t.in === e.in || t.type === "basic" && e.type == "basic" && t.in === e.in ? !0 : t.type === "http" && t.scheme == "bearer" && e.type === "bearer";
}
function aj(e, t, n) {
  const r = Eu(e, e.paths[t]), o = zo(e, t, n), i = Tu(e, o);
  return Ou(e, r, i);
}
async function lj(e, t, n, r, o) {
  try {
    const i = Ao(e) ? await cj(e, t, n, r, o) : await uj(e, t, n, r, o);
    for (const { key: s, value: l } of r.parameters.header)
      i.headers[s.toLowerCase()] === void 0 && (i.headers[s] = String(l));
    return [
      {
        method: r.method,
        url: i.url,
        headers: i.headers,
        body: ih(i.body)
      },
      void 0
    ];
  } catch (i) {
    return [void 0, `failed to build http request: ${i}`];
  }
}
async function cj(e, t, n, r, o) {
  var u;
  const i = Us(e, r.path, r.method);
  if (i === void 0)
    throw new Error(`operation not found for ${r.method} ${r.path}`);
  const s = lh(
    r.method,
    r.path,
    i
  ), l = bj(r);
  return Or.buildRequest({
    spec: await fj(e, t),
    operationId: s,
    parameters: pj(r.parameters, o),
    securities: mj(e, o),
    requestContentType: l,
    requestBody: (u = r.body) == null ? void 0 : u.value
  });
}
async function uj(e, t, n, r, o) {
  const i = Us(e, r.path, r.method);
  if (i === void 0)
    throw new Error(`operation not found for ${r.method} ${r.path}`);
  const s = lh(
    r.method,
    r.path,
    i
  );
  return Or.buildRequest({
    spec: await hj(e, t),
    operationId: s,
    parameters: gj(e, r, o),
    securities: vj((e == null ? void 0 : e.securityDefinitions) || {}, o)
  });
}
async function dj(e) {
  var n, r, o, i;
  const t = new URLSearchParams(
    Mc(e.parameters.query)
  ).toString();
  try {
    const s = Mc(e.parameters.header);
    ((n = e.body) == null ? void 0 : n.mediaType) !== void 0 && (s["Content-Type"] = (r = e.body) == null ? void 0 : r.mediaType);
    const l = ((o = e.body) == null ? void 0 : o.mediaType) === "application/x-www-form-urlencoded" ? xj(e.body.value) : (i = e.body) == null ? void 0 : i.value;
    return [
      {
        method: e.method,
        url: t === "" ? e.url : `${e.url}?${t}`,
        headers: s,
        body: ih(l)
      },
      void 0
    ];
  } catch (s) {
    return [void 0, `failed to build http request: ${s}`];
  }
}
async function fj(e, t, n) {
  const r = [{ url: t }], { spec: o, errors: i } = await Or.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, servers: r }))
  });
  return o;
}
async function hj(e, t, n) {
  const r = new URL(t), o = r.protocol === "https:" ? ["https"] : ["http"], { spec: i, errors: s } = await Or.resolve({
    spec: JSON.parse(JSON.stringify({ ...e, host: r.host, schemes: o }))
  });
  return i;
}
function ih(e) {
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
function pj(e, t) {
  const n = ["path", "query", "header", "cookie"], r = sh(e, n);
  for (const { credential: o, value: i } of Object.values(t))
    n.includes(o.in) && o.name !== void 0 && (r[`${o.in}.${o.name}`] = i);
  return r;
}
function gj(e, t, n) {
  var l;
  const r = ["path", "query", "header"], o = sh(t.parameters, r);
  for (const { credential: c, value: u } of Object.values(n))
    r.includes(c.in) && c.name !== void 0 && (o[`${c.in}.${c.name}`] = u);
  const i = aj(e, t.path, t.method), s = Object.keys(i.body);
  if (s.length > 0) {
    const c = s[0];
    o[`body.${c}`] = (l = t.body) == null ? void 0 : l.value;
  }
  return o;
}
function sh(e, t) {
  const n = {};
  for (const r of t)
    for (const { key: o, value: i } of e[r]) {
      const s = `${r}.${o}`;
      n[s] === void 0 ? n[s] = i : Array.isArray(n[s]) ? n[s].push(i) : n[s] = [n[s], i];
    }
  return n;
}
function mj(e, t) {
  const n = yj(e), r = ah(n, t), o = {};
  for (const i of Object.keys(r)) {
    const s = En(e, n[i]), l = r[i];
    (s == null ? void 0 : s.type) === "oauth2" || (s == null ? void 0 : s.type) === "openIdConnect" ? o[i] = { token: { access_token: l } } : o[i] = l;
  }
  return { authorized: o };
}
function yj(e) {
  var n;
  const t = {};
  for (const [r, o] of Object.entries(((n = e.components) == null ? void 0 : n.securitySchemes) || {})) {
    const i = En(e, o);
    i !== void 0 && (t[r] = i);
  }
  return t;
}
function vj(e, t) {
  const n = {}, r = ah(e, t);
  for (const o of Object.keys(r)) {
    const i = e[o], s = r[o];
    (i == null ? void 0 : i.type) === "oauth" ? n[o] = { token: { access_token: s } } : n[o] = s;
  }
  return { authorized: n };
}
function ah(e, t) {
  const n = { ...t }, r = {};
  for (const [o, i] of Object.entries(e))
    for (const [s, { credential: l, value: c }] of Object.entries(n))
      if (Ua(l, i)) {
        r[o] = c, delete n[s];
        break;
      }
  return r;
}
function Mc(e) {
  const t = {};
  for (const { key: n, value: r } of e)
    t[n] = String(r);
  return t;
}
function xj(e) {
  const t = new URLSearchParams();
  for (const [n, r] of Object.entries(e))
    t.append(n, `${r}`);
  return t.toString();
}
function lh(e, t, n) {
  return Or.helpers.opId(n, t, e);
}
function bj(e) {
  var t, n;
  if (((t = e.body) == null ? void 0 : t.mediaType) === "raw") {
    for (const { key: r, value: o } of e.parameters.header)
      if (r.toLowerCase() === "content-type")
        return String(o);
    return "text/plain";
  }
  return (n = e.body) == null ? void 0 : n.mediaType;
}
const gi = null;
function mi() {
  return async () => [gi, void 0];
}
class kj {
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
class wj {
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
class T {
  /**
   * @returns {string}
   */
  static get version() {
    return "1.3.9";
  }
  /**
   * @returns {string}
   */
  static toString() {
    return "JavaScript Expression Parser (JSEP) v" + T.version;
  }
  // ==================== CONFIG ================================
  /**
   * @method addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @returns {Jsep}
   */
  static addUnaryOp(t) {
    return T.max_unop_len = Math.max(t.length, T.max_unop_len), T.unary_ops[t] = 1, T;
  }
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
   * @param {boolean} [isRightAssociative=false] whether operator is right-associative
   * @returns {Jsep}
   */
  static addBinaryOp(t, n, r) {
    return T.max_binop_len = Math.max(t.length, T.max_binop_len), T.binary_ops[t] = n, r ? T.right_associative.add(t) : T.right_associative.delete(t), T;
  }
  /**
   * @method addIdentifierChar
   * @param {string} char The additional character to treat as a valid part of an identifier
   * @returns {Jsep}
   */
  static addIdentifierChar(t) {
    return T.additional_identifier_chars.add(t), T;
  }
  /**
   * @method addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @returns {Jsep}
   */
  static addLiteral(t, n) {
    return T.literals[t] = n, T;
  }
  /**
   * @method removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @returns {Jsep}
   */
  static removeUnaryOp(t) {
    return delete T.unary_ops[t], t.length === T.max_unop_len && (T.max_unop_len = T.getMaxKeyLen(T.unary_ops)), T;
  }
  /**
   * @method removeAllUnaryOps
   * @returns {Jsep}
   */
  static removeAllUnaryOps() {
    return T.unary_ops = {}, T.max_unop_len = 0, T;
  }
  /**
   * @method removeIdentifierChar
   * @param {string} char The additional character to stop treating as a valid part of an identifier
   * @returns {Jsep}
   */
  static removeIdentifierChar(t) {
    return T.additional_identifier_chars.delete(t), T;
  }
  /**
   * @method removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @returns {Jsep}
   */
  static removeBinaryOp(t) {
    return delete T.binary_ops[t], t.length === T.max_binop_len && (T.max_binop_len = T.getMaxKeyLen(T.binary_ops)), T.right_associative.delete(t), T;
  }
  /**
   * @method removeAllBinaryOps
   * @returns {Jsep}
   */
  static removeAllBinaryOps() {
    return T.binary_ops = {}, T.max_binop_len = 0, T;
  }
  /**
   * @method removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @returns {Jsep}
   */
  static removeLiteral(t) {
    return delete T.literals[t], T;
  }
  /**
   * @method removeAllLiterals
   * @returns {Jsep}
   */
  static removeAllLiterals() {
    return T.literals = {}, T;
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
    return new T(t).parse();
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
    return T.binary_ops[t] || 0;
  }
  /**
   * Looks for start of identifier
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierStart(t) {
    return t >= 65 && t <= 90 || // A...Z
    t >= 97 && t <= 122 || // a...z
    t >= 128 && !T.binary_ops[String.fromCharCode(t)] || // any non-ASCII that is not an operator
    T.additional_identifier_chars.has(String.fromCharCode(t));
  }
  /**
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierPart(t) {
    return T.isIdentifierStart(t) || T.isDecimalDigit(t);
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
    if (T.hooks[t]) {
      const r = {
        context: this,
        node: n
      };
      return T.hooks.run(t, r), r.node;
    }
    return n;
  }
  /**
   * Runs a given hook until one returns a node
   * @param {string} name
   * @returns {?jsep.Expression}
   */
  searchHook(t) {
    if (T.hooks[t]) {
      const n = {
        context: this
      };
      return T.hooks[t].find(function(r) {
        return r.call(n.context, n), n.node;
      }), n.node;
    }
  }
  /**
   * Push `index` up to the next non-space character
   */
  gobbleSpaces() {
    let t = this.code;
    for (; t === T.SPACE_CODE || t === T.TAB_CODE || t === T.LF_CODE || t === T.CR_CODE; )
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
      type: T.COMPOUND,
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
      if (r = this.code, r === T.SEMCOL_CODE || r === T.COMMA_CODE)
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
    let t = this.expr.substr(this.index, T.max_binop_len), n = t.length;
    for (; n > 0; ) {
      if (T.binary_ops.hasOwnProperty(t) && (!T.isIdentifierStart(this.code) || this.index + t.length < this.expr.length && !T.isIdentifierPart(this.expr.charCodeAt(this.index + t.length))))
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
      prec: T.binaryPrecedence(n),
      right_a: T.right_associative.has(n)
    }, l = this.gobbleToken(), l || this.throwError("Expected expression after " + n), o = [s, i, l]; n = this.gobbleBinaryOp(); ) {
      if (r = T.binaryPrecedence(n), r === 0) {
        this.index -= n.length;
        break;
      }
      i = {
        value: n,
        prec: r,
        right_a: T.right_associative.has(n)
      }, u = n;
      const d = (p) => i.right_a && p.right_a ? r > p.prec : r <= p.prec;
      for (; o.length > 2 && d(o[o.length - 2]); )
        l = o.pop(), n = o.pop().value, s = o.pop(), t = {
          type: T.BINARY_EXP,
          operator: n,
          left: s,
          right: l
        }, o.push(t);
      t = this.gobbleToken(), t || this.throwError("Expected expression after " + u), o.push(i, t);
    }
    for (c = o.length - 1, t = o[c]; c > 1; )
      t = {
        type: T.BINARY_EXP,
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
    if (t = this.code, T.isDecimalDigit(t) || t === T.PERIOD_CODE)
      return this.gobbleNumericLiteral();
    if (t === T.SQUOTE_CODE || t === T.DQUOTE_CODE)
      o = this.gobbleStringLiteral();
    else if (t === T.OBRACK_CODE)
      o = this.gobbleArray();
    else {
      for (n = this.expr.substr(this.index, T.max_unop_len), r = n.length; r > 0; ) {
        if (T.unary_ops.hasOwnProperty(n) && (!T.isIdentifierStart(this.code) || this.index + n.length < this.expr.length && !T.isIdentifierPart(this.expr.charCodeAt(this.index + n.length)))) {
          this.index += r;
          const i = this.gobbleToken();
          return i || this.throwError("missing unaryOp argument"), this.runHook("after-token", {
            type: T.UNARY_EXP,
            operator: n,
            argument: i,
            prefix: !0
          });
        }
        n = n.substr(0, --r);
      }
      T.isIdentifierStart(t) ? (o = this.gobbleIdentifier(), T.literals.hasOwnProperty(o.name) ? o = {
        type: T.LITERAL,
        value: T.literals[o.name],
        raw: o.name
      } : o.name === T.this_str && (o = {
        type: T.THIS_EXP
      })) : t === T.OPAREN_CODE && (o = this.gobbleGroup());
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
    for (; n === T.PERIOD_CODE || n === T.OBRACK_CODE || n === T.OPAREN_CODE || n === T.QUMARK_CODE; ) {
      let r;
      if (n === T.QUMARK_CODE) {
        if (this.expr.charCodeAt(this.index + 1) !== T.PERIOD_CODE)
          break;
        r = !0, this.index += 2, this.gobbleSpaces(), n = this.code;
      }
      this.index++, n === T.OBRACK_CODE ? (t = {
        type: T.MEMBER_EXP,
        computed: !0,
        object: t,
        property: this.gobbleExpression()
      }, t.property || this.throwError('Unexpected "' + this.char + '"'), this.gobbleSpaces(), n = this.code, n !== T.CBRACK_CODE && this.throwError("Unclosed ["), this.index++) : n === T.OPAREN_CODE ? t = {
        type: T.CALL_EXP,
        arguments: this.gobbleArguments(T.CPAREN_CODE),
        callee: t
      } : (n === T.PERIOD_CODE || r) && (r && this.index--, this.gobbleSpaces(), t = {
        type: T.MEMBER_EXP,
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
    for (; T.isDecimalDigit(this.code); )
      t += this.expr.charAt(this.index++);
    if (this.code === T.PERIOD_CODE)
      for (t += this.expr.charAt(this.index++); T.isDecimalDigit(this.code); )
        t += this.expr.charAt(this.index++);
    if (n = this.char, n === "e" || n === "E") {
      for (t += this.expr.charAt(this.index++), n = this.char, (n === "+" || n === "-") && (t += this.expr.charAt(this.index++)); T.isDecimalDigit(this.code); )
        t += this.expr.charAt(this.index++);
      T.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + t + this.char + ")");
    }
    return r = this.code, T.isIdentifierStart(r) ? this.throwError("Variable names cannot start with a number (" + t + this.char + ")") : (r === T.PERIOD_CODE || t.length === 1 && t.charCodeAt(0) === T.PERIOD_CODE) && this.throwError("Unexpected period"), {
      type: T.LITERAL,
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
      type: T.LITERAL,
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
    for (T.isIdentifierStart(t) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (t = this.code, T.isIdentifierPart(t)); )
      this.index++;
    return {
      type: T.IDENTIFIER,
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
        r = !0, this.index++, t === T.CPAREN_CODE && o && o >= n.length && this.throwError("Unexpected token " + String.fromCharCode(t));
        break;
      } else if (i === T.COMMA_CODE) {
        if (this.index++, o++, o !== n.length) {
          if (t === T.CPAREN_CODE)
            this.throwError("Unexpected token ,");
          else if (t === T.CBRACK_CODE)
            for (let s = n.length; s < o; s++)
              n.push(null);
        }
      } else if (n.length !== o && o !== 0)
        this.throwError("Expected comma");
      else {
        const s = this.gobbleExpression();
        (!s || s.type === T.COMPOUND) && this.throwError("Expected comma"), n.push(s);
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
    let t = this.gobbleExpressions(T.CPAREN_CODE);
    if (this.code === T.CPAREN_CODE)
      return this.index++, t.length === 1 ? t[0] : t.length ? {
        type: T.SEQUENCE_EXP,
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
      type: T.ARRAY_EXP,
      elements: this.gobbleArguments(T.CBRACK_CODE)
    };
  }
}
const jj = new kj();
Object.assign(T, {
  hooks: jj,
  plugins: new wj(T),
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
    "%": 10
  },
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(),
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
T.max_unop_len = T.getMaxKeyLen(T.unary_ops);
T.max_binop_len = T.getMaxKeyLen(T.binary_ops);
const lt = (e) => new T(e).parse(), Sj = Object.getOwnPropertyNames(class {
});
Object.getOwnPropertyNames(T).filter((e) => !Sj.includes(e) && lt[e] === void 0).forEach((e) => {
  lt[e] = T[e];
});
lt.Jsep = T;
const Cj = "ConditionalExpression";
var _j = {
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
            type: Cj,
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
lt.plugins.register(_j);
const qc = 47, Ej = 92;
var Tj = {
  name: "regex",
  init(e) {
    e.hooks.add("gobble-token", function(n) {
      if (this.code === qc) {
        const r = ++this.index;
        let o = !1;
        for (; this.index < this.expr.length; ) {
          if (this.code === qc && !o) {
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
          this.code === e.OBRACK_CODE ? o = !0 : o && this.code === e.CBRACK_CODE && (o = !1), this.index += this.code === Ej ? 2 : 1;
        }
        this.throwError("Unclosed Regex");
      }
    });
  }
};
const Gi = 43, Oj = 45, bn = {
  name: "assignment",
  assignmentOperators: /* @__PURE__ */ new Set(["=", "*=", "**=", "/=", "%=", "+=", "-=", "<<=", ">>=", ">>>=", "&=", "^=", "|="]),
  updateOperators: [Gi, Oj],
  assignmentPrecedence: 0.9,
  init(e) {
    const t = [e.IDENTIFIER, e.MEMBER_EXP];
    bn.assignmentOperators.forEach((r) => e.addBinaryOp(r, bn.assignmentPrecedence, !0)), e.hooks.add("gobble-token", function(o) {
      const i = this.code;
      bn.updateOperators.some((s) => s === i && s === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, o.node = {
        type: "UpdateExpression",
        operator: i === Gi ? "++" : "--",
        argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
        prefix: !0
      }, (!o.node.argument || !t.includes(o.node.argument.type)) && this.throwError(`Unexpected ${o.node.operator}`));
    }), e.hooks.add("after-token", function(o) {
      if (o.node) {
        const i = this.code;
        bn.updateOperators.some((s) => s === i && s === this.expr.charCodeAt(this.index + 1)) && (t.includes(o.node.type) || this.throwError(`Unexpected ${o.node.operator}`), this.index += 2, o.node = {
          type: "UpdateExpression",
          operator: i === Gi ? "++" : "--",
          argument: o.node,
          prefix: !1
        });
      }
    }), e.hooks.add("after-expression", function(o) {
      o.node && n(o.node);
    });
    function n(r) {
      bn.assignmentOperators.has(r.operator) ? (r.type = "AssignmentExpression", n(r.left), n(r.right)) : r.operator || Object.values(r).forEach((o) => {
        o && typeof o == "object" && n(o);
      });
    }
  }
};
lt.plugins.register(Tj, bn);
lt.addUnaryOp("typeof");
lt.addLiteral("null", null);
lt.addLiteral("undefined", void 0);
const X = {
  /**
   * @param {jsep.Expression} ast
   * @param {Record<string, any>} subs
   */
  evalAst(e, t) {
    switch (e.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        return X.evalBinaryExpression(e, t);
      case "Compound":
        return X.evalCompound(e, t);
      case "ConditionalExpression":
        return X.evalConditionalExpression(e, t);
      case "Identifier":
        return X.evalIdentifier(e, t);
      case "Literal":
        return X.evalLiteral(e, t);
      case "MemberExpression":
        return X.evalMemberExpression(e, t);
      case "UnaryExpression":
        return X.evalUnaryExpression(e, t);
      case "ArrayExpression":
        return X.evalArrayExpression(e, t);
      case "CallExpression":
        return X.evalCallExpression(e, t);
      case "AssignmentExpression":
        return X.evalAssignmentExpression(e, t);
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
    }[e.operator](X.evalAst(e.left, t), () => X.evalAst(e.right, t));
  },
  evalCompound(e, t) {
    let n;
    for (let r = 0; r < e.body.length; r++) {
      e.body[r].type === "Identifier" && ["var", "let", "const"].includes(e.body[r].name) && e.body[r + 1] && e.body[r + 1].type === "AssignmentExpression" && (r += 1);
      const o = e.body[r];
      n = X.evalAst(o, t);
    }
    return n;
  },
  evalConditionalExpression(e, t) {
    return X.evalAst(e.test, t) ? X.evalAst(e.consequent, t) : X.evalAst(e.alternate, t);
  },
  evalIdentifier(e, t) {
    if (e.name in t)
      return t[e.name];
    throw ReferenceError(`${e.name} is not defined`);
  },
  evalLiteral(e) {
    return e.value;
  },
  evalMemberExpression(e, t) {
    if (e.property.type === "Identifier" && e.property.name === "constructor" || e.object.type === "Identifier" && e.object.name === "constructor")
      throw new Error("'constructor' property is disabled");
    const n = e.computed ? X.evalAst(e.property) : e.property.name, r = X.evalAst(e.object, t), o = r[n];
    if (typeof o == "function") {
      if (r === Function && n === "bind")
        throw new Error("Function.prototype.bind is disabled");
      if (r === Function && (n === "call" || n === "apply"))
        throw new Error("Function.prototype.call and Function.prototype.apply are disabled");
      return o === Function ? o : o.bind(r);
    }
    return o;
  },
  evalUnaryExpression(e, t) {
    return {
      "-": (r) => -X.evalAst(r, t),
      "!": (r) => !X.evalAst(r, t),
      "~": (r) => ~X.evalAst(r, t),
      // eslint-disable-next-line no-implicit-coercion -- API
      "+": (r) => +X.evalAst(r, t),
      typeof: (r) => typeof X.evalAst(r, t)
    }[e.operator](e.argument);
  },
  evalArrayExpression(e, t) {
    return e.elements.map((n) => X.evalAst(n, t));
  },
  evalCallExpression(e, t) {
    const n = e.arguments.map((o) => X.evalAst(o, t)), r = X.evalAst(e.callee, t);
    if (r === Function)
      throw new Error("Function constructor is disabled");
    return r(...n);
  },
  evalAssignmentExpression(e, t) {
    if (e.left.type !== "Identifier")
      throw SyntaxError("Invalid left-hand side in assignment");
    const n = e.left.name;
    if (n === "__proto__")
      throw new Error("Assignment to __proto__ is disabled");
    const r = X.evalAst(e.right, t);
    return t[n] = r, t[n];
  }
};
class $j {
  /**
   * @param {string} expr Expression to evaluate
   */
  constructor(t) {
    this.code = t, this.ast = lt(this.code);
  }
  /**
   * @param {object} context Object whose items will be added
   *   to evaluation
   * @returns {EvaluatedResult} Result of evaluated code
   */
  runInNewContext(t) {
    const n = {
      ...t
    };
    return X.evalAst(this.ast, n);
  }
}
function mt(e, t) {
  return e = e.slice(), e.push(t), e;
}
function Os(e, t) {
  return t = t.slice(), t.unshift(e), t;
}
class Ij extends Error {
  /**
   * @param {AnyResult} value The evaluated scalar value
   */
  constructor(t) {
    super('JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), this.avoidNew = !0, this.value = t, this.name = "NewError";
  }
}
function W(e, t, n, r, o) {
  if (!(this instanceof W))
    try {
      return new W(e, t, n, r, o);
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
      throw new Ij(l);
    return l;
  }
}
W.prototype.evaluate = function(e, t, n, r) {
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
  if (o = o || null, i = i || null, Array.isArray(e) && (e = W.toPathString(e)), !e && e !== "" || !t)
    return;
  const c = W.toPathArray(e);
  c[0] === "$" && c.length > 1 && c.shift(), this._hasParentSelector = null;
  const u = this._trace(c, t, ["$"], o, i, n).filter(function(d) {
    return d && !d.isParentSelector;
  });
  return u.length ? !l && u.length === 1 && !u[0].hasArrExpr ? this._getPreferredOutput(u[0]) : u.reduce((d, p) => {
    const h = this._getPreferredOutput(p);
    return s && Array.isArray(h) ? d = d.concat(h) : d.push(h), d;
  }, []) : l ? [] : void 0;
};
W.prototype._getPreferredOutput = function(e) {
  const t = this.currResultType;
  switch (t) {
    case "all": {
      const n = Array.isArray(e.path) ? e.path : W.toPathArray(e.path);
      return e.pointer = W.toPointer(n), e.path = typeof e.path == "string" ? e.path : W.toPathString(e.path), e;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return e[t];
    case "path":
      return W.toPathString(e[t]);
    case "pointer":
      return W.toPointer(e.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
W.prototype._handleCallback = function(e, t, n) {
  if (t) {
    const r = this._getPreferredOutput(e);
    e.path = typeof e.path == "string" ? e.path : W.toPathString(e.path), t(r, n, e);
  }
};
W.prototype._trace = function(e, t, n, r, o, i, s, l) {
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
  function h(f) {
    Array.isArray(f) ? f.forEach((g) => {
      p.push(g);
    }) : p.push(f);
  }
  if ((typeof u != "string" || l) && t && Object.hasOwn(t, u))
    h(this._trace(d, t[u], mt(n, u), t, u, i, s));
  else if (u === "*")
    this._walk(t, (f) => {
      h(this._trace(d, t[f], mt(n, f), t, f, i, !0, !0));
    });
  else if (u === "..")
    h(this._trace(d, t, n, r, o, i, s)), this._walk(t, (f) => {
      typeof t[f] == "object" && h(this._trace(e.slice(), t[f], mt(n, f), t, f, i, !0));
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
        path: mt(n, u),
        value: o,
        parent: r,
        parentProperty: null
      }, this._handleCallback(c, i, "property"), c;
    if (u === "$")
      h(this._trace(d, t, n, null, null, i, s));
    else if (/^(-?\d*):(-?\d*):?(\d*)$/u.test(u))
      h(this._slice(u, d, t, n, r, o, i));
    else if (u.indexOf("?(") === 0) {
      if (this.currEval === !1)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      const f = u.replace(/^\?\((.*?)\)$/u, "$1"), g = /@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(f);
      g ? this._walk(t, (m) => {
        const y = [g[2]], x = g[1] ? t[m][g[1]] : t[m];
        this._trace(y, x, n, r, o, i, !0).length > 0 && h(this._trace(d, t[m], mt(n, m), t, m, i, !0));
      }) : this._walk(t, (m) => {
        this._eval(f, t[m], m, n, r, o) && h(this._trace(d, t[m], mt(n, m), t, m, i, !0));
      });
    } else if (u[0] === "(") {
      if (this.currEval === !1)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      h(this._trace(Os(this._eval(u, t, n.at(-1), n.slice(0, -1), r, o), d), t, n, r, o, i, s));
    } else if (u[0] === "@") {
      let f = !1;
      const g = u.slice(1, -2);
      switch (g) {
        case "scalar":
          (!t || !["object", "function"].includes(typeof t)) && (f = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          typeof t === g && (f = !0);
          break;
        case "integer":
          Number.isFinite(t) && !(t % 1) && (f = !0);
          break;
        case "number":
          Number.isFinite(t) && (f = !0);
          break;
        case "nonFinite":
          typeof t == "number" && !Number.isFinite(t) && (f = !0);
          break;
        case "object":
          t && typeof t === g && (f = !0);
          break;
        case "array":
          Array.isArray(t) && (f = !0);
          break;
        case "other":
          f = this.currOtherTypeCallback(t, n, r, o);
          break;
        case "null":
          t === null && (f = !0);
          break;
        default:
          throw new TypeError("Unknown value type " + g);
      }
      if (f)
        return c = {
          path: n,
          value: t,
          parent: r,
          parentProperty: o
        }, this._handleCallback(c, i, "value"), c;
    } else if (u[0] === "`" && t && Object.hasOwn(t, u.slice(1))) {
      const f = u.slice(1);
      h(this._trace(d, t[f], mt(n, f), t, f, i, s, !0));
    } else if (u.includes(",")) {
      const f = u.split(",");
      for (const g of f)
        h(this._trace(Os(g, d), t, n, r, o, i, !0));
    } else !l && t && Object.hasOwn(t, u) && h(this._trace(d, t[u], mt(n, u), t, u, i, s, !0));
  }
  if (this._hasParentSelector)
    for (let f = 0; f < p.length; f++) {
      const g = p[f];
      if (g && g.isParentSelector) {
        const m = this._trace(g.expr, t, g.path, r, o, i, s);
        if (Array.isArray(m)) {
          p[f] = m[0];
          const y = m.length;
          for (let x = 1; x < y; x++)
            f++, p.splice(f, 0, m[x]);
        } else
          p[f] = m;
      }
    }
  return p;
};
W.prototype._walk = function(e, t) {
  if (Array.isArray(e)) {
    const n = e.length;
    for (let r = 0; r < n; r++)
      t(r);
  } else e && typeof e == "object" && Object.keys(e).forEach((n) => {
    t(n);
  });
};
W.prototype._slice = function(e, t, n, r, o, i, s) {
  if (!Array.isArray(n))
    return;
  const l = n.length, c = e.split(":"), u = c[2] && Number.parseInt(c[2]) || 1;
  let d = c[0] && Number.parseInt(c[0]) || 0, p = c[1] && Number.parseInt(c[1]) || l;
  d = d < 0 ? Math.max(0, d + l) : Math.min(l, d), p = p < 0 ? Math.max(0, p + l) : Math.min(l, p);
  const h = [];
  for (let f = d; f < p; f += u)
    this._trace(Os(f, t), n, r, o, i, s, !0).forEach((m) => {
      h.push(m);
    });
  return h;
};
W.prototype._eval = function(e, t, n, r, o, i) {
  this.currSandbox._$_parentProperty = i, this.currSandbox._$_parent = o, this.currSandbox._$_property = n, this.currSandbox._$_root = this.json, this.currSandbox._$_v = t;
  const s = e.includes("@path");
  s && (this.currSandbox._$_path = W.toPathString(r.concat([n])));
  const l = this.currEval + "Script:" + e;
  if (!W.cache[l]) {
    let c = e.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(/@([.\s)[])/gu, "_$_v$1");
    if (s && (c = c.replaceAll("@path", "_$_path")), this.currEval === "safe" || this.currEval === !0 || this.currEval === void 0)
      W.cache[l] = new this.safeVm.Script(c);
    else if (this.currEval === "native")
      W.cache[l] = new this.vm.Script(c);
    else if (typeof this.currEval == "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
      const u = this.currEval;
      W.cache[l] = new u(c);
    } else if (typeof this.currEval == "function")
      W.cache[l] = {
        runInNewContext: (u) => this.currEval(c, u)
      };
    else
      throw new TypeError(`Unknown "eval" property "${this.currEval}"`);
  }
  try {
    return W.cache[l].runInNewContext(this.currSandbox);
  } catch (c) {
    if (this.ignoreEvalErrors)
      return !1;
    throw new Error("jsonPath: " + c.message + ": " + e);
  }
};
W.cache = {};
W.toPathString = function(e) {
  const t = e, n = t.length;
  let r = "$";
  for (let o = 1; o < n; o++)
    /^(~|\^|@.*?\(\))$/u.test(t[o]) || (r += /^[0-9*]+$/u.test(t[o]) ? "[" + t[o] + "]" : "['" + t[o] + "']");
  return r;
};
W.toPointer = function(e) {
  const t = e, n = t.length;
  let r = "";
  for (let o = 1; o < n; o++)
    /^(~|\^|@.*?\(\))$/u.test(t[o]) || (r += "/" + t[o].toString().replaceAll("~", "~0").replaceAll("/", "~1"));
  return r;
};
W.toPathArray = function(e) {
  const {
    cache: t
  } = W;
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
W.prototype.safeVm = {
  Script: $j
};
const Dj = function(e, t, n) {
  const r = e.length;
  for (let o = 0; o < r; o++) {
    const i = e[o];
    n(i) && t.push(e.splice(o--, 1)[0]);
  }
};
class Pj {
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
    Dj(r, o, (u) => typeof t[u] == "function");
    const i = r.map((u) => t[u]);
    n = o.reduce((u, d) => {
      let p = t[d].toString();
      return /function/u.test(p) || (p = "function " + p), "var " + d + "=" + p + ";" + u;
    }, "") + n, !/(['"])use strict\1/u.test(n) && !r.includes("arguments") && (n = "var arguments = undefined;" + n), n = n.replace(/;\s*$/u, "");
    const l = n.lastIndexOf(";"), c = l > -1 ? n.slice(0, l + 1) + " return " + n.slice(l + 1) : " return " + n;
    return new Function(...r, c)(...i);
  }
}
W.prototype.vm = {
  Script: Pj
};
var Va = {}, Lr = {}, Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.pathMatch = zj;
function zj(e, t) {
  return !!(t === e || e.indexOf(t) === 0 && (t[t.length - 1] === "/" || new RegExp(`^${t}`).test(e) && e[t.length] === "/"));
}
var yi = {}, Yn = {};
function Aj(e, t) {
  return e.endsWith(t) ? e.length === t.length || e[e.length - t.length - 1] === "." : !1;
}
function Rj(e, t) {
  const n = e.length - t.length - 2, r = e.lastIndexOf(".", n);
  return r === -1 ? e : e.slice(r + 1);
}
function Nj(e, t, n) {
  if (n.validHosts !== null) {
    const o = n.validHosts;
    for (const i of o)
      if (
        /*@__INLINE__*/
        Aj(t, i)
      )
        return i;
  }
  let r = 0;
  if (t.startsWith("."))
    for (; r < t.length && t[r] === "."; )
      r += 1;
  return e.length === t.length - r ? null : (
    /*@__INLINE__*/
    Rj(t, e)
  );
}
function Mj(e, t) {
  return e.slice(0, -t.length - 1);
}
function Fc(e, t) {
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
        const d = u - n, p = e.charCodeAt(n), h = e.charCodeAt(n + 1), f = e.charCodeAt(n + 2), g = e.charCodeAt(n + 3), m = e.charCodeAt(n + 4);
        if (!(d === 5 && p === 104 && h === 116 && f === 116 && g === 112 && m === 115)) {
          if (!(d === 4 && p === 104 && h === 116 && f === 116 && g === 112)) {
            if (!(d === 3 && p === 119 && h === 115 && f === 115)) {
              if (!(d === 2 && p === 119 && h === 115)) for (let y = n; y < u; y += 1) {
                const x = e.charCodeAt(y) | 32;
                if (!(x >= 97 && x <= 122 || // [a, z]
                x >= 48 && x <= 57 || // [0, 9]
                x === 46 || // '.'
                x === 45 || // '-'
                x === 43))
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
function qj(e) {
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
function Fj(e) {
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
function Lj(e) {
  return Fj(e) || qj(e);
}
function Lc(e) {
  return e >= 97 && e <= 122 || e >= 48 && e <= 57 || e > 127;
}
function Bc(e) {
  if (e.length > 255 || e.length === 0 || /*@__INLINE__*/
  !Lc(e.charCodeAt(0)) && e.charCodeAt(0) !== 46 && // '.' (dot)
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
    (Lc(i) || i === 45 || i === 95))
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
function ch({ allowIcannDomains: e = !0, allowPrivateDomains: t = !1, detectIp: n = !0, extractHostname: r = !0, mixedInputs: o = !0, validHosts: i = null, validateHostname: s = !0 }) {
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
const Bj = (
  /*@__INLINE__*/
  ch({})
);
function Hj(e) {
  return e === void 0 ? Bj : (
    /*@__INLINE__*/
    ch(e)
  );
}
function Uj(e, t) {
  return t.length === e.length ? "" : e.slice(0, -t.length - 1);
}
function uh() {
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
function Hr(e) {
  e.domain = null, e.domainWithoutSuffix = null, e.hostname = null, e.isIcann = null, e.isIp = null, e.isPrivate = null, e.publicSuffix = null, e.subdomain = null;
}
function Qn(e, t, n, r, o) {
  const i = (
    /*@__INLINE__*/
    Hj(r)
  );
  return typeof e != "string" || (i.extractHostname ? i.mixedInputs ? o.hostname = Fc(e, Bc(e)) : o.hostname = Fc(e, !1) : o.hostname = e, t === 0 || o.hostname === null) || i.detectIp && (o.isIp = Lj(o.hostname), o.isIp) ? o : i.validateHostname && i.extractHostname && !Bc(o.hostname) ? (o.hostname = null, o) : (n(o.hostname, i, o), t === 2 || o.publicSuffix === null || (o.domain = Nj(o.publicSuffix, o.hostname, i), t === 3 || o.domain === null) || (o.subdomain = Uj(o.hostname, o.domain), t === 4) || (o.domainWithoutSuffix = Mj(o.domain, o.publicSuffix)), o);
}
function Vj(e, t, n) {
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
const Wj = /* @__PURE__ */ function() {
  const e = [1, {}], t = [0, { city: e }];
  return [0, { ck: [0, { www: e }], jp: [0, { kawasaki: t, kitakyushu: t, kobe: t, nagoya: t, sapporo: t, sendai: t, yokohama: t }] }];
}(), Gj = /* @__PURE__ */ function() {
  const e = [1, {}], t = [2, {}], n = [1, { com: e, edu: e, gov: e, net: e, org: e }], r = [0, { "*": t }], o = [0, { relay: t }], i = [2, { id: t }], s = [1, { blogspot: t }], l = [1, { gov: e }], c = [0, { notebook: t, studio: t }], u = [0, { labeling: t, notebook: t, studio: t }], d = [0, { notebook: t }], p = [0, { labeling: t, notebook: t, "notebook-fips": t, studio: t }], h = [0, { notebook: t, "notebook-fips": t, studio: t, "studio-fips": t }], f = [0, { "*": e }], g = [1, { co: t }], m = [0, { objects: t }], y = [2, { nodes: t }], x = [0, { my: r }], b = [0, { s3: t, "s3-accesspoint": t, "s3-website": t }], w = [0, { s3: t, "s3-accesspoint": t }], C = [0, { direct: t }], E = [0, { "webview-assets": t }], j = [0, { vfs: t, "webview-assets": t }], O = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: b, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": E, cloud9: j }], S = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: w, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": E, cloud9: j }], I = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: b, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": E, cloud9: j }], $ = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: b, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t }], R = [0, { s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-website": t }], L = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: R, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": E, cloud9: j }], M = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: R, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-deprecated": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": E, cloud9: j }], K = [0, { s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t }], G = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: K, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t }], V = [0, { auth: t }], de = [0, { auth: t, "auth-fips": t }], ge = [0, { apps: t }], Ze = [0, { paas: t }], We = [2, { eu: t }], hn = [0, { app: t }], qt = [0, { site: t }], Ft = [1, { com: e, edu: e, net: e, org: e }], ft = [0, { j: t }], Lt = [1, { co: e, com: e, edu: e, gov: e, net: e, org: e }], Ae = [0, { p: t }], pn = [0, { user: t }], ht = [0, { shop: t }], pt = [0, { cust: t, reservd: t }], tr = [0, { cust: t }], Ei = [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e }], Ti = [0, { s3: t }], ol = [1, { biz: e, com: e, edu: e, gov: e, info: e, net: e, org: e }], Gr = [1, { framer: t }], il = [0, { forgot: t }], Kr = [0, { cdn: t }], ee = [1, { gs: e }], sl = [0, { nes: e }], F = [1, { k12: e, cc: e, lib: e }], Xr = [1, { cc: e, lib: e }];
  return [0, { ac: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, drr: t, feedback: t, forms: t }], ad: e, ae: [1, { ac: e, co: e, gov: e, mil: e, net: e, org: e, sch: e, blogspot: t }], aero: [1, { airline: e, airport: e, "accident-investigation": e, "accident-prevention": e, aerobatic: e, aeroclub: e, aerodrome: e, agents: e, "air-surveillance": e, "air-traffic-control": e, aircraft: e, airtraffic: e, ambulance: e, association: e, author: e, ballooning: e, broker: e, caa: e, cargo: e, catering: e, certification: e, championship: e, charter: e, civilaviation: e, club: e, conference: e, consultant: e, consulting: e, control: e, council: e, crew: e, design: e, dgca: e, educator: e, emergency: e, engine: e, engineer: e, entertainment: e, equipment: e, exchange: e, express: e, federation: e, flight: e, freight: e, fuel: e, gliding: e, government: e, groundhandling: e, group: e, hanggliding: e, homebuilt: e, insurance: e, journal: e, journalist: e, leasing: e, logistics: e, magazine: e, maintenance: e, marketplace: e, media: e, microlight: e, modelling: e, navigation: e, parachuting: e, paragliding: e, "passenger-association": e, pilot: e, press: e, production: e, recreation: e, repbody: e, res: e, research: e, rotorcraft: e, safety: e, scientist: e, services: e, show: e, skydiving: e, software: e, student: e, taxi: e, trader: e, trading: e, trainer: e, union: e, workinggroup: e, works: e }], af: n, ag: [1, { co: e, com: e, net: e, nom: e, org: e }], ai: [1, { com: e, net: e, off: e, org: e, uwu: t, framer: t }], al: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, blogspot: t }], am: [1, { co: e, com: e, commune: e, net: e, org: e, radio: t, blogspot: t }], ao: [1, { co: e, ed: e, edu: e, gov: e, gv: e, it: e, og: e, org: e, pb: e }], aq: e, ar: [1, { bet: e, com: s, coop: e, edu: e, gob: e, gov: e, int: e, mil: e, musica: e, mutual: e, net: e, org: e, senasa: e, tur: e }], arpa: [1, { e164: e, home: e, "in-addr": e, ip6: e, iris: e, uri: e, urn: e }], as: l, asia: [1, { cloudns: t, daemon: t, dix: t }], at: [1, { ac: [1, { sth: e }], co: s, gv: e, or: e, funkfeuer: [0, { wien: t }], futurecms: [0, { "*": t, ex: r, in: r }], futurehosting: t, futuremailing: t, ortsinfo: [0, { ex: r, kunden: r }], biz: t, info: t, "123webseite": t, priv: t, myspreadshop: t, "12hp": t, "2ix": t, "4lima": t, "lima-city": t }], au: [1, { asn: e, com: [1, { blogspot: t, cloudlets: [0, { mel: t }], myspreadshop: t }], edu: [1, { act: e, catholic: e, nsw: [1, { schools: e }], nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }], gov: [1, { qld: e, sa: e, tas: e, vic: e, wa: e }], id: e, net: e, org: e, conf: e, oz: e, act: e, nsw: e, nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }], aw: [1, { com: e }], ax: e, az: [1, { biz: e, com: e, edu: e, gov: e, info: e, int: e, mil: e, name: e, net: e, org: e, pp: e, pro: e }], ba: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, blogspot: t, rs: t }], bb: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, net: e, org: e, store: e, tv: e }], bd: f, be: [1, { ac: e, cloudns: t, webhosting: t, blogspot: t, interhostsolutions: [0, { cloud: t }], kuleuven: [0, { ezproxy: t }], "123website": t, myspreadshop: t, transurl: r }], bf: l, bg: [1, { 0: e, 1: e, 2: e, 3: e, 4: e, 5: e, 6: e, 7: e, 8: e, 9: e, a: e, b: e, c: e, d: e, e, f: e, g: e, h: e, i: e, j: e, k: e, l: e, m: e, n: e, o: e, p: e, q: e, r: e, s: e, t: e, u: e, v: e, w: e, x: e, y: e, z: e, blogspot: t, barsy: t }], bh: n, bi: [1, { co: e, com: e, edu: e, or: e, org: e }], biz: [1, { activetrail: t, "cloud-ip": t, cloudns: t, jozi: t, dyndns: t, "for-better": t, "for-more": t, "for-some": t, "for-the": t, selfip: t, webhop: t, orx: t, mmafan: t, myftp: t, "no-ip": t, dscloud: t }], bj: [1, { africa: e, agro: e, architectes: e, assur: e, avocats: e, co: e, com: e, eco: e, econo: e, edu: e, info: e, loisirs: e, money: e, net: e, org: e, ote: e, restaurant: e, resto: e, tourism: e, univ: e, blogspot: t }], bm: n, bn: [1, { com: e, edu: e, gov: e, net: e, org: e, co: t }], bo: [1, { com: e, edu: e, gob: e, int: e, mil: e, net: e, org: e, tv: e, web: e, academia: e, agro: e, arte: e, blog: e, bolivia: e, ciencia: e, cooperativa: e, democracia: e, deporte: e, ecologia: e, economia: e, empresa: e, indigena: e, industria: e, info: e, medicina: e, movimiento: e, musica: e, natural: e, nombre: e, noticias: e, patria: e, plurinacional: e, politica: e, profesional: e, pueblo: e, revista: e, salud: e, tecnologia: e, tksat: e, transporte: e, wiki: e }], br: [1, { "9guacu": e, abc: e, adm: e, adv: e, agr: e, aju: e, am: e, anani: e, aparecida: e, app: e, arq: e, art: e, ato: e, b: e, barueri: e, belem: e, bet: e, bhz: e, bib: e, bio: e, blog: e, bmd: e, boavista: e, bsb: e, campinagrande: e, campinas: e, caxias: e, cim: e, cng: e, cnt: e, com: [1, { blogspot: t, simplesite: t }], contagem: e, coop: e, coz: e, cri: e, cuiaba: e, curitiba: e, def: e, des: e, det: e, dev: e, ecn: e, eco: e, edu: e, emp: e, enf: e, eng: e, esp: e, etc: e, eti: e, far: e, feira: e, flog: e, floripa: e, fm: e, fnd: e, fortal: e, fot: e, foz: e, fst: e, g12: e, geo: e, ggf: e, goiania: e, gov: [1, { ac: e, al: e, am: e, ap: e, ba: e, ce: e, df: e, es: e, go: e, ma: e, mg: e, ms: e, mt: e, pa: e, pb: e, pe: e, pi: e, pr: e, rj: e, rn: e, ro: e, rr: e, rs: e, sc: e, se: e, sp: e, to: e }], gru: e, imb: e, ind: e, inf: e, jab: e, jampa: e, jdf: e, joinville: e, jor: e, jus: e, leg: [1, { ac: t, al: t, am: t, ap: t, ba: t, ce: t, df: t, es: t, go: t, ma: t, mg: t, ms: t, mt: t, pa: t, pb: t, pe: t, pi: t, pr: t, rj: t, rn: t, ro: t, rr: t, rs: t, sc: t, se: t, sp: t, to: t }], leilao: e, lel: e, log: e, londrina: e, macapa: e, maceio: e, manaus: e, maringa: e, mat: e, med: e, mil: e, morena: e, mp: e, mus: e, natal: e, net: e, niteroi: e, nom: f, not: e, ntr: e, odo: e, ong: e, org: e, osasco: e, palmas: e, poa: e, ppg: e, pro: e, psc: e, psi: e, pvh: e, qsl: e, radio: e, rec: e, recife: e, rep: e, ribeirao: e, rio: e, riobranco: e, riopreto: e, salvador: e, sampa: e, santamaria: e, santoandre: e, saobernardo: e, saogonca: e, seg: e, sjc: e, slg: e, slz: e, sorocaba: e, srv: e, taxi: e, tc: e, tec: e, teo: e, the: e, tmp: e, trd: e, tur: e, tv: e, udi: e, vet: e, vix: e, vlog: e, wiki: e, zlg: e }], bs: [1, { com: e, edu: e, gov: e, net: e, org: e, we: t }], bt: n, bv: e, bw: [1, { co: e, org: e }], by: [1, { gov: e, mil: e, com: s, of: e, mediatech: t }], bz: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, za: t, mydns: t, gsj: t }], ca: [1, { ab: e, bc: e, mb: e, nb: e, nf: e, nl: e, ns: e, nt: e, nu: e, on: e, pe: e, qc: e, sk: e, yk: e, gc: e, barsy: t, awdev: r, co: t, blogspot: t, "no-ip": t, myspreadshop: t, box: t }], cat: e, cc: [1, { cleverapps: t, cloudns: t, ftpaccess: t, "game-server": t, myphotos: t, scrapping: t, twmail: t, csx: t, fantasyleague: t, spawn: [0, { instances: t }] }], cd: l, cf: s, cg: e, ch: [1, { square7: t, cloudns: t, cloudscale: [0, { cust: t, lpg: m, rma: m }], blogspot: t, flow: [0, { ae: [0, { alp1: t }], appengine: t }], "linkyard-cloud": t, gotdns: t, dnsking: t, "123website": t, myspreadshop: t, firenet: [0, { "*": t, svc: r }], "12hp": t, "2ix": t, "4lima": t, "lima-city": t }], ci: [1, { ac: e, "xn--aroport-bya": e, aéroport: e, asso: e, co: e, com: e, ed: e, edu: e, go: e, gouv: e, int: e, net: e, or: e, org: e, fin: t }], ck: f, cl: [1, { co: e, gob: e, gov: e, mil: e, cloudns: t, blogspot: t }], cm: [1, { co: e, com: e, gov: e, net: e }], cn: [1, { ac: e, com: [1, { amazonaws: [0, { "cn-north-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: b, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t }], "cn-northwest-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: w, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t }], compute: r, airflow: [0, { "cn-north-1": r, "cn-northwest-1": r }], eb: [0, { "cn-north-1": t, "cn-northwest-1": t }], elb: r }], sagemaker: [0, { "cn-north-1": c, "cn-northwest-1": c }] }], edu: e, gov: e, mil: e, net: e, org: e, "xn--55qx5d": e, 公司: e, "xn--od0alg": e, 網絡: e, "xn--io0a7i": e, 网络: e, ah: e, bj: e, cq: e, fj: e, gd: e, gs: e, gx: e, gz: e, ha: e, hb: e, he: e, hi: e, hk: e, hl: e, hn: e, jl: e, js: e, jx: e, ln: e, mo: e, nm: e, nx: e, qh: e, sc: e, sd: e, sh: [1, { as: t }], sn: e, sx: e, tj: e, tw: e, xj: e, xz: e, yn: e, zj: e, "canva-apps": t, canvasite: x, myqnapcloud: t, quickconnect: C }], co: [1, { com: s, edu: e, gov: e, mil: e, net: e, nom: e, org: e, carrd: t, crd: t, otap: r, leadpages: t, lpages: t, mypi: t, n4t: t, xmit: r, firewalledreplit: i, repl: i, supabase: t }], com: [1, { a2hosted: t, cpserver: t, adobeaemcloud: [2, { dev: r }], africa: t, airkitapps: t, "airkitapps-au": t, aivencloud: t, kasserver: t, amazonaws: [0, { "af-south-1": O, "ap-east-1": S, "ap-northeast-1": I, "ap-northeast-2": I, "ap-northeast-3": O, "ap-south-1": I, "ap-south-2": $, "ap-southeast-1": I, "ap-southeast-2": I, "ap-southeast-3": $, "ap-southeast-4": $, "ap-southeast-5": [0, { "execute-api": t, dualstack: b, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t }], "ca-central-1": L, "ca-west-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: R, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t }], "eu-central-1": I, "eu-central-2": $, "eu-north-1": S, "eu-south-1": O, "eu-south-2": $, "eu-west-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: b, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": E, cloud9: j }], "eu-west-2": S, "eu-west-3": O, "il-central-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: b, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": E, cloud9: [0, { vfs: t }] }], "me-central-1": $, "me-south-1": S, "sa-east-1": O, "us-east-1": [2, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: R, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-deprecated": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": E, cloud9: j }], "us-east-2": M, "us-gov-east-1": G, "us-gov-west-1": G, "us-west-1": L, "us-west-2": M, compute: r, "compute-1": r, airflow: [0, { "af-south-1": r, "ap-east-1": r, "ap-northeast-1": r, "ap-northeast-2": r, "ap-northeast-3": r, "ap-south-1": r, "ap-south-2": r, "ap-southeast-1": r, "ap-southeast-2": r, "ap-southeast-3": r, "ap-southeast-4": r, "ca-central-1": r, "ca-west-1": r, "eu-central-1": r, "eu-central-2": r, "eu-north-1": r, "eu-south-1": r, "eu-south-2": r, "eu-west-1": r, "eu-west-2": r, "eu-west-3": r, "il-central-1": r, "me-central-1": r, "me-south-1": r, "sa-east-1": r, "us-east-1": r, "us-east-2": r, "us-west-1": r, "us-west-2": r }], s3: t, "s3-1": t, "s3-ap-east-1": t, "s3-ap-northeast-1": t, "s3-ap-northeast-2": t, "s3-ap-northeast-3": t, "s3-ap-south-1": t, "s3-ap-southeast-1": t, "s3-ap-southeast-2": t, "s3-ca-central-1": t, "s3-eu-central-1": t, "s3-eu-north-1": t, "s3-eu-west-1": t, "s3-eu-west-2": t, "s3-eu-west-3": t, "s3-external-1": t, "s3-fips-us-gov-east-1": t, "s3-fips-us-gov-west-1": t, "s3-global": [0, { accesspoint: [0, { mrap: t }] }], "s3-me-south-1": t, "s3-sa-east-1": t, "s3-us-east-2": t, "s3-us-gov-east-1": t, "s3-us-gov-west-1": t, "s3-us-west-1": t, "s3-us-west-2": t, "s3-website-ap-northeast-1": t, "s3-website-ap-southeast-1": t, "s3-website-ap-southeast-2": t, "s3-website-eu-west-1": t, "s3-website-sa-east-1": t, "s3-website-us-east-1": t, "s3-website-us-gov-west-1": t, "s3-website-us-west-1": t, "s3-website-us-west-2": t, elb: r }], amazoncognito: [0, { "af-south-1": V, "ap-east-1": V, "ap-northeast-1": V, "ap-northeast-2": V, "ap-northeast-3": V, "ap-south-1": V, "ap-south-2": V, "ap-southeast-1": V, "ap-southeast-2": V, "ap-southeast-3": V, "ap-southeast-4": V, "ca-central-1": V, "ca-west-1": V, "eu-central-1": V, "eu-central-2": V, "eu-north-1": V, "eu-south-1": V, "eu-south-2": V, "eu-west-1": V, "eu-west-2": V, "eu-west-3": V, "il-central-1": V, "me-central-1": V, "me-south-1": V, "sa-east-1": V, "us-east-1": de, "us-east-2": de, "us-gov-west-1": [0, { "auth-fips": t }], "us-west-1": de, "us-west-2": de }], amplifyapp: t, awsapprunner: r, awsapps: t, elasticbeanstalk: [2, { "af-south-1": t, "ap-east-1": t, "ap-northeast-1": t, "ap-northeast-2": t, "ap-northeast-3": t, "ap-south-1": t, "ap-southeast-1": t, "ap-southeast-2": t, "ap-southeast-3": t, "ca-central-1": t, "eu-central-1": t, "eu-north-1": t, "eu-south-1": t, "eu-west-1": t, "eu-west-2": t, "eu-west-3": t, "il-central-1": t, "me-south-1": t, "sa-east-1": t, "us-east-1": t, "us-east-2": t, "us-gov-east-1": t, "us-gov-west-1": t, "us-west-1": t, "us-west-2": t }], awsglobalaccelerator: t, siiites: t, appspacehosted: t, appspaceusercontent: t, "on-aptible": t, myasustor: t, "balena-devices": t, boutir: t, bplaced: t, cafjs: t, "canva-apps": t, "cdn77-storage": t, br: t, cn: t, de: t, eu: t, jpn: t, mex: t, ru: t, sa: t, uk: t, us: t, za: t, "clever-cloud": [0, { services: r }], dnsabr: t, "ip-ddns": t, jdevcloud: t, wpdevcloud: t, "cf-ipfs": t, "cloudflare-ipfs": t, trycloudflare: t, co: t, builtwithdark: t, datadetect: [0, { demo: t, instance: t }], dattolocal: t, dattorelay: t, dattoweb: t, mydatto: t, digitaloceanspaces: r, discordsays: t, discordsez: t, drayddns: t, dreamhosters: t, durumis: t, mydrobo: t, blogdns: t, cechire: t, dnsalias: t, dnsdojo: t, doesntexist: t, dontexist: t, doomdns: t, "dyn-o-saur": t, dynalias: t, "dyndns-at-home": t, "dyndns-at-work": t, "dyndns-blog": t, "dyndns-free": t, "dyndns-home": t, "dyndns-ip": t, "dyndns-mail": t, "dyndns-office": t, "dyndns-pics": t, "dyndns-remote": t, "dyndns-server": t, "dyndns-web": t, "dyndns-wiki": t, "dyndns-work": t, "est-a-la-maison": t, "est-a-la-masion": t, "est-le-patron": t, "est-mon-blogueur": t, "from-ak": t, "from-al": t, "from-ar": t, "from-ca": t, "from-ct": t, "from-dc": t, "from-de": t, "from-fl": t, "from-ga": t, "from-hi": t, "from-ia": t, "from-id": t, "from-il": t, "from-in": t, "from-ks": t, "from-ky": t, "from-ma": t, "from-md": t, "from-mi": t, "from-mn": t, "from-mo": t, "from-ms": t, "from-mt": t, "from-nc": t, "from-nd": t, "from-ne": t, "from-nh": t, "from-nj": t, "from-nm": t, "from-nv": t, "from-oh": t, "from-ok": t, "from-or": t, "from-pa": t, "from-pr": t, "from-ri": t, "from-sc": t, "from-sd": t, "from-tn": t, "from-tx": t, "from-ut": t, "from-va": t, "from-vt": t, "from-wa": t, "from-wi": t, "from-wv": t, "from-wy": t, getmyip: t, gotdns: t, "hobby-site": t, homelinux: t, homeunix: t, iamallama: t, "is-a-anarchist": t, "is-a-blogger": t, "is-a-bookkeeper": t, "is-a-bulls-fan": t, "is-a-caterer": t, "is-a-chef": t, "is-a-conservative": t, "is-a-cpa": t, "is-a-cubicle-slave": t, "is-a-democrat": t, "is-a-designer": t, "is-a-doctor": t, "is-a-financialadvisor": t, "is-a-geek": t, "is-a-green": t, "is-a-guru": t, "is-a-hard-worker": t, "is-a-hunter": t, "is-a-landscaper": t, "is-a-lawyer": t, "is-a-liberal": t, "is-a-libertarian": t, "is-a-llama": t, "is-a-musician": t, "is-a-nascarfan": t, "is-a-nurse": t, "is-a-painter": t, "is-a-personaltrainer": t, "is-a-photographer": t, "is-a-player": t, "is-a-republican": t, "is-a-rockstar": t, "is-a-socialist": t, "is-a-student": t, "is-a-teacher": t, "is-a-techie": t, "is-a-therapist": t, "is-an-accountant": t, "is-an-actor": t, "is-an-actress": t, "is-an-anarchist": t, "is-an-artist": t, "is-an-engineer": t, "is-an-entertainer": t, "is-certified": t, "is-gone": t, "is-into-anime": t, "is-into-cars": t, "is-into-cartoons": t, "is-into-games": t, "is-leet": t, "is-not-certified": t, "is-slick": t, "is-uberleet": t, "is-with-theband": t, "isa-geek": t, "isa-hockeynut": t, issmarterthanyou: t, "likes-pie": t, likescandy: t, "neat-url": t, "saves-the-whales": t, selfip: t, "sells-for-less": t, "sells-for-u": t, servebbs: t, "simple-url": t, "space-to-rent": t, "teaches-yoga": t, writesthisblog: t, ddnsfree: t, ddnsgeek: t, giize: t, gleeze: t, kozow: t, loseyourip: t, ooguy: t, theworkpc: t, mytuleap: t, "tuleap-partners": t, encoreapi: t, evennode: [0, { "eu-1": t, "eu-2": t, "eu-3": t, "eu-4": t, "us-1": t, "us-2": t, "us-3": t, "us-4": t }], onfabrica: t, "fastly-edge": t, "fastly-terrarium": t, "fastvps-server": t, mydobiss: t, firebaseapp: t, fldrv: t, forgeblocks: t, framercanvas: t, "freebox-os": t, freeboxos: t, freemyip: t, aliases121: t, gentapps: t, gentlentapis: t, githubusercontent: t, "0emm": r, appspot: [2, { r }], blogspot: t, codespot: t, googleapis: t, googlecode: t, pagespeedmobilizer: t, withgoogle: t, withyoutube: t, grayjayleagues: t, hatenablog: t, hatenadiary: t, herokuapp: t, herokussl: t, gr: t, smushcdn: t, wphostedmail: t, wpmucdn: t, pixolino: t, "apps-1and1": t, "live-website": t, dopaas: t, "hosted-by-previder": Ze, hosteur: [0, { "rag-cloud": t, "rag-cloud-ch": t }], "ik-server": [0, { jcloud: t, "jcloud-ver-jpc": t }], jelastic: [0, { demo: t }], massivegrid: Ze, wafaicloud: [0, { jed: t, ryd: t }], webadorsite: t, joyent: [0, { cns: r }], lpusercontent: t, linode: [0, { members: t, nodebalancer: r }], linodeobjects: r, linodeusercontent: [0, { ip: t }], barsycenter: t, barsyonline: t, modelscape: t, mwcloudnonprod: t, polyspace: t, mazeplay: t, miniserver: t, atmeta: t, fbsbx: ge, meteorapp: We, routingthecloud: t, mydbserver: t, hostedpi: t, "mythic-beasts": [0, { caracal: t, customer: t, fentiger: t, lynx: t, ocelot: t, oncilla: t, onza: t, sphinx: t, vs: t, x: t, yali: t }], nospamproxy: [0, { cloud: [2, { o365: t }] }], "4u": t, nfshost: t, "3utilities": t, blogsyte: t, ciscofreak: t, damnserver: t, ddnsking: t, ditchyourip: t, dnsiskinky: t, dynns: t, geekgalaxy: t, "health-carereform": t, homesecuritymac: t, homesecuritypc: t, myactivedirectory: t, mysecuritycamera: t, myvnc: t, "net-freaks": t, onthewifi: t, point2this: t, quicksytes: t, securitytactics: t, servebeer: t, servecounterstrike: t, serveexchange: t, serveftp: t, servegame: t, servehalflife: t, servehttp: t, servehumour: t, serveirc: t, servemp3: t, servep2p: t, servepics: t, servequake: t, servesarcasm: t, stufftoread: t, unusualperson: t, workisboring: t, "001www": t, myiphost: t, observableusercontent: [0, { static: t }], simplesite: t, orsites: t, operaunite: t, "customer-oci": [0, { "*": t, oci: r, ocp: r, ocs: r }], oraclecloudapps: r, oraclegovcloudapps: r, "authgear-staging": t, authgearapps: t, skygearapp: t, outsystemscloud: t, ownprovider: t, pgfog: t, pagexl: t, gotpantheon: t, paywhirl: r, upsunapp: t, "platter-app": t, "postman-echo": t, prgmr: [0, { xen: t }], pythonanywhere: We, qa2: t, "alpha-myqnapcloud": t, "dev-myqnapcloud": t, mycloudnas: t, mynascloud: t, myqnapcloud: t, qualifioapp: t, ladesk: t, qbuser: t, quipelements: r, rackmaze: t, "readthedocs-hosted": t, rhcloud: t, onrender: t, render: hn, "180r": t, dojin: t, sakuratan: t, sakuraweb: t, x0: t, code: [0, { builder: r, "dev-builder": r, "stg-builder": r }], salesforce: [0, { platform: [0, { "code-builder-stg": [0, { test: [0, { "001": r }] }] }] }], logoip: t, scrysec: t, "firewall-gateway": t, myshopblocks: t, myshopify: t, shopitsite: t, "1kapp": t, appchizi: t, applinzi: t, sinaapp: t, vipsinaapp: t, streamlitapp: t, "try-snowplow": t, "playstation-cloud": t, myspreadshop: t, "w-corp-staticblitz": t, "w-credentialless-staticblitz": t, "w-staticblitz": t, "stackhero-network": t, stdlib: [0, { api: t }], strapiapp: [2, { media: t }], "streak-link": t, streaklinks: t, streakusercontent: t, "temp-dns": t, dsmynas: t, familyds: t, mytabit: t, taveusercontent: t, "tb-hosting": qt, reservd: t, thingdustdata: t, "townnews-staging": t, typeform: [0, { pro: t }], hk: t, it: t, vultrobjects: r, wafflecell: t, hotelwithflight: t, "reserve-online": t, cprapid: t, pleskns: t, remotewd: t, wiardweb: [0, { pages: t }], wixsite: t, wixstudio: t, messwithdns: t, "woltlab-demo": t, wpenginepowered: [2, { js: t }], xnbay: [2, { u2: t, "u2-local": t }], yolasite: t }], coop: e, cr: [1, { ac: e, co: e, ed: e, fi: e, go: e, or: e, sa: e }], cu: [1, { com: e, edu: e, gob: e, inf: e, nat: e, net: e, org: e }], cv: [1, { com: e, edu: e, id: e, int: e, net: e, nome: e, org: e, publ: e, blogspot: t }], cw: Ft, cx: [1, { gov: e, cloudns: t, ath: t, info: t, assessments: t, calculators: t, funnels: t, paynow: t, quizzes: t, researched: t, tests: t }], cy: [1, { ac: e, biz: e, com: [1, { blogspot: t, scaleforce: ft }], ekloges: e, gov: e, ltd: e, mil: e, net: e, org: e, press: e, pro: e, tm: e }], cz: [1, { contentproxy9: [0, { rsc: t }], realm: t, e4: t, blogspot: t, co: t, metacentrum: [0, { cloud: r, custom: t }], muni: [0, { cloud: [0, { flt: t, usr: t }] }] }], de: [1, { bplaced: t, square7: t, com: t, cosidns: [0, { dyn: t }], dnsupdater: t, "dynamisches-dns": t, "internet-dns": t, "l-o-g-i-n": t, ddnss: [2, { dyn: t, dyndns: t }], "dyn-ip24": t, dyndns1: t, "home-webserver": [2, { dyn: t }], "myhome-server": t, dnshome: t, fuettertdasnetz: t, isteingeek: t, istmein: t, lebtimnetz: t, leitungsen: t, traeumtgerade: t, frusky: r, goip: t, blogspot: t, "xn--gnstigbestellen-zvb": t, günstigbestellen: t, "xn--gnstigliefern-wob": t, günstigliefern: t, "hs-heilbronn": [0, { it: [0, { pages: t, "pages-research": t }] }], "dyn-berlin": t, "in-berlin": t, "in-brb": t, "in-butter": t, "in-dsl": t, "in-vpn": t, iservschule: t, "mein-iserv": t, schulplattform: t, schulserver: t, "test-iserv": t, keymachine: t, "git-repos": t, "lcube-server": t, "svn-repos": t, barsy: t, webspaceconfig: t, "123webseite": t, rub: t, "ruhr-uni-bochum": [2, { noc: [0, { io: t }] }], logoip: t, "firewall-gateway": t, "my-gateway": t, "my-router": t, spdns: t, speedpartner: [0, { customer: t }], myspreadshop: t, "taifun-dns": t, "12hp": t, "2ix": t, "4lima": t, "lima-city": t, "dd-dns": t, "dray-dns": t, draydns: t, "dyn-vpn": t, dynvpn: t, "mein-vigor": t, "my-vigor": t, "my-wan": t, "syno-ds": t, "synology-diskstation": t, "synology-ds": t, uberspace: r, "virtual-user": t, virtualuser: t, "community-pro": t, diskussionsbereich: t }], dj: e, dk: [1, { biz: t, co: t, firm: t, reg: t, store: t, blogspot: t, "123hjemmeside": t, myspreadshop: t }], dm: Lt, do: [1, { art: e, com: e, edu: e, gob: e, gov: e, mil: e, net: e, org: e, sld: e, web: e }], dz: [1, { art: e, asso: e, com: e, edu: e, gov: e, net: e, org: e, pol: e, soc: e, tm: e }], ec: [1, { com: e, edu: e, fin: e, gob: e, gov: e, info: e, k12: e, med: e, mil: e, net: e, org: e, pro: e, base: t, official: t }], edu: [1, { rit: [0, { "git-pages": t }] }], ee: [1, { aip: e, com: s, edu: e, fie: e, gov: e, lib: e, med: e, org: e, pri: e, riik: e }], eg: [1, { ac: e, com: s, edu: e, eun: e, gov: e, info: e, me: e, mil: e, name: e, net: e, org: e, sci: e, sport: e, tv: e }], er: f, es: [1, { com: s, edu: e, gob: e, nom: e, org: e, "123miweb": t, myspreadshop: t }], et: [1, { biz: e, com: e, edu: e, gov: e, info: e, name: e, net: e, org: e }], eu: [1, { airkitapps: t, cloudns: t, dogado: [0, { jelastic: t }], barsy: t, spdns: t, transurl: r, diskstation: t }], fi: [1, { aland: e, dy: t, blogspot: t, "xn--hkkinen-5wa": t, häkkinen: t, iki: t, cloudplatform: [0, { fi: t }], datacenter: [0, { demo: t, paas: t }], kapsi: t, "123kotisivu": t, myspreadshop: t }], fj: [1, { ac: e, biz: e, com: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }], fk: f, fm: [1, { com: e, edu: e, net: e, org: e, radio: t, user: r }], fo: e, fr: [1, { asso: e, com: e, gouv: e, nom: e, prd: e, tm: e, avoues: e, cci: e, greta: e, "huissier-justice": e, "en-root": t, "fbx-os": t, fbxos: t, "freebox-os": t, freeboxos: t, blogspot: t, goupile: t, "123siteweb": t, "on-web": t, "chirurgiens-dentistes-en-france": t, dedibox: t, aeroport: t, avocat: t, chambagri: t, "chirurgiens-dentistes": t, "experts-comptables": t, medecin: t, notaires: t, pharmacien: t, port: t, veterinaire: t, myspreadshop: t, ynh: t }], ga: e, gb: e, gd: [1, { edu: e, gov: e }], ge: [1, { com: e, edu: e, gov: e, net: e, org: e, pvt: e, school: e }], gf: e, gg: [1, { co: e, net: e, org: e, kaas: t, stackit: t, panel: [2, { daemon: t }] }], gh: [1, { com: e, edu: e, gov: e, mil: e, org: e }], gi: [1, { com: e, edu: e, gov: e, ltd: e, mod: e, org: e }], gl: [1, { co: e, com: e, edu: e, net: e, org: e, biz: t }], gm: e, gn: [1, { ac: e, com: e, edu: e, gov: e, net: e, org: e }], gov: e, gp: [1, { asso: e, com: e, edu: e, mobi: e, net: e, org: e }], gq: e, gr: [1, { com: e, edu: e, gov: e, net: e, org: e, blogspot: t, barsy: t, simplesite: t }], gs: e, gt: [1, { com: e, edu: e, gob: e, ind: e, mil: e, net: e, org: e }], gu: [1, { com: e, edu: e, gov: e, guam: e, info: e, net: e, org: e, web: e }], gw: e, gy: Lt, hk: [1, { com: e, edu: e, gov: e, idv: e, net: e, org: e, "xn--ciqpn": e, 个人: e, "xn--gmqw5a": e, 個人: e, "xn--55qx5d": e, 公司: e, "xn--mxtq1m": e, 政府: e, "xn--lcvr32d": e, 敎育: e, "xn--wcvs22d": e, 教育: e, "xn--gmq050i": e, 箇人: e, "xn--uc0atv": e, 組織: e, "xn--uc0ay4a": e, 組织: e, "xn--od0alg": e, 網絡: e, "xn--zf0avx": e, 網络: e, "xn--mk0axi": e, 组織: e, "xn--tn0ag": e, 组织: e, "xn--od0aq3b": e, 网絡: e, "xn--io0a7i": e, 网络: e, blogspot: t, secaas: t, inc: t, ltd: t }], hm: e, hn: [1, { com: e, edu: e, gob: e, mil: e, net: e, org: e }], hr: [1, { com: e, from: e, iz: e, name: e, brendly: ht, blogspot: t, free: t }], ht: [1, { adult: e, art: e, asso: e, com: e, coop: e, edu: e, firm: e, gouv: e, info: e, med: e, net: e, org: e, perso: e, pol: e, pro: e, rel: e, shop: e, rt: t }], hu: [1, { 2e3: e, agrar: e, bolt: e, casino: e, city: e, co: e, erotica: e, erotika: e, film: e, forum: e, games: e, hotel: e, info: e, ingatlan: e, jogasz: e, konyvelo: e, lakas: e, media: e, news: e, org: e, priv: e, reklam: e, sex: e, shop: e, sport: e, suli: e, szex: e, tm: e, tozsde: e, utazas: e, video: e, blogspot: t }], id: [1, { ac: e, biz: e, co: s, desa: e, go: e, mil: e, my: [1, { rss: t }], net: e, or: e, ponpes: e, sch: e, web: e }], ie: [1, { gov: e, blogspot: t, myspreadshop: t }], il: [1, { ac: e, co: [1, { blogspot: t, ravpage: t, mytabit: t, tabitorder: t }], gov: e, idf: e, k12: e, muni: e, net: e, org: e }], "xn--4dbrk0ce": [1, { "xn--4dbgdty6c": e, "xn--5dbhl8d": e, "xn--8dbq2a": e, "xn--hebda8b": e }], ישראל: [1, { אקדמיה: e, ישוב: e, צהל: e, ממשל: e }], im: [1, { ac: e, co: [1, { ltd: e, plc: e }], com: e, net: e, org: e, tt: e, tv: e }], in: [1, { "5g": e, "6g": e, ac: e, ai: e, am: e, bihar: e, biz: e, business: e, ca: e, cn: e, co: e, com: e, coop: e, cs: e, delhi: e, dr: e, edu: e, er: e, firm: e, gen: e, gov: e, gujarat: e, ind: e, info: e, int: e, internet: e, io: e, me: e, mil: e, net: e, nic: e, org: e, pg: e, post: e, pro: e, res: e, travel: e, tv: e, uk: e, up: e, us: e, cloudns: t, blogspot: t, barsy: t, web: t, supabase: t }], info: [1, { cloudns: t, "dynamic-dns": t, "barrel-of-knowledge": t, "barrell-of-knowledge": t, dyndns: t, "for-our": t, "groks-the": t, "groks-this": t, "here-for-more": t, knowsitall: t, selfip: t, webhop: t, barsy: t, mayfirst: t, mittwald: t, mittwaldserver: t, typo3server: t, dvrcam: t, ilovecollege: t, "no-ip": t, forumz: t, nsupdate: t, dnsupdate: t, "v-info": t }], int: [1, { eu: e }], io: [1, { 2038: t, co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e, "on-acorn": r, apigee: t, "b-data": t, beagleboard: t, bitbucket: t, bluebite: t, boxfuse: t, brave: [0, { s: r }], browsersafetymark: t, bigv: [0, { uk0: t }], cleverapps: t, dappnode: [0, { dyndns: t }], darklang: t, definima: t, dedyn: t, drud: t, "fh-muenster": t, shw: t, forgerock: [0, { id: t }], github: t, gitlab: t, lolipop: t, "hasura-app": t, hostyhosting: t, hypernode: t, moonscale: r, beebyte: Ze, beebyteapp: [0, { sekd1: t }], jele: t, webthings: t, loginline: t, barsy: t, azurecontainer: r, ngrok: [2, { ap: t, au: t, eu: t, in: t, jp: t, sa: t, us: t }], nodeart: [0, { stage: t }], pantheonsite: t, pstmn: [2, { mock: t }], protonet: t, qcx: [2, { sys: r }], qoto: t, vaporcloud: t, myrdbx: t, "rb-hosting": qt, "on-k3s": r, "on-rio": r, readthedocs: t, resindevice: t, resinstaging: [0, { devices: t }], hzc: t, sandcats: t, scrypted: [0, { client: t }], shiftedit: t, "mo-siemens": t, lair: ge, stolos: r, spacekit: t, musician: t, utwente: t, edugit: t, telebit: t, thingdust: [0, { dev: pt, disrec: pt, prod: tr, testing: pt }], tickets: t, webflow: t, webflowtest: t, editorx: t, wixstudio: t, basicserver: t, virtualserver: t }], iq: Ei, ir: [1, { ac: e, co: e, gov: e, id: e, net: e, org: e, sch: e, "xn--mgba3a4f16a": e, ایران: e, "xn--mgba3a4fra": e, ايران: e, arvanedge: t }], is: s, it: [1, { edu: e, gov: e, abr: e, abruzzo: e, "aosta-valley": e, aostavalley: e, bas: e, basilicata: e, cal: e, calabria: e, cam: e, campania: e, "emilia-romagna": e, emiliaromagna: e, emr: e, "friuli-v-giulia": e, "friuli-ve-giulia": e, "friuli-vegiulia": e, "friuli-venezia-giulia": e, "friuli-veneziagiulia": e, "friuli-vgiulia": e, "friuliv-giulia": e, "friulive-giulia": e, friulivegiulia: e, "friulivenezia-giulia": e, friuliveneziagiulia: e, friulivgiulia: e, fvg: e, laz: e, lazio: e, lig: e, liguria: e, lom: e, lombardia: e, lombardy: e, lucania: e, mar: e, marche: e, mol: e, molise: e, piedmont: e, piemonte: e, pmn: e, pug: e, puglia: e, sar: e, sardegna: e, sardinia: e, sic: e, sicilia: e, sicily: e, taa: e, tos: e, toscana: e, "trentin-sud-tirol": e, "xn--trentin-sd-tirol-rzb": e, "trentin-süd-tirol": e, "trentin-sudtirol": e, "xn--trentin-sdtirol-7vb": e, "trentin-südtirol": e, "trentin-sued-tirol": e, "trentin-suedtirol": e, trentino: e, "trentino-a-adige": e, "trentino-aadige": e, "trentino-alto-adige": e, "trentino-altoadige": e, "trentino-s-tirol": e, "trentino-stirol": e, "trentino-sud-tirol": e, "xn--trentino-sd-tirol-c3b": e, "trentino-süd-tirol": e, "trentino-sudtirol": e, "xn--trentino-sdtirol-szb": e, "trentino-südtirol": e, "trentino-sued-tirol": e, "trentino-suedtirol": e, "trentinoa-adige": e, trentinoaadige: e, "trentinoalto-adige": e, trentinoaltoadige: e, "trentinos-tirol": e, trentinostirol: e, "trentinosud-tirol": e, "xn--trentinosd-tirol-rzb": e, "trentinosüd-tirol": e, trentinosudtirol: e, "xn--trentinosdtirol-7vb": e, trentinosüdtirol: e, "trentinosued-tirol": e, trentinosuedtirol: e, "trentinsud-tirol": e, "xn--trentinsd-tirol-6vb": e, "trentinsüd-tirol": e, trentinsudtirol: e, "xn--trentinsdtirol-nsb": e, trentinsüdtirol: e, "trentinsued-tirol": e, trentinsuedtirol: e, tuscany: e, umb: e, umbria: e, "val-d-aosta": e, "val-daosta": e, "vald-aosta": e, valdaosta: e, "valle-aosta": e, "valle-d-aosta": e, "valle-daosta": e, valleaosta: e, "valled-aosta": e, valledaosta: e, "vallee-aoste": e, "xn--valle-aoste-ebb": e, "vallée-aoste": e, "vallee-d-aoste": e, "xn--valle-d-aoste-ehb": e, "vallée-d-aoste": e, valleeaoste: e, "xn--valleaoste-e7a": e, valléeaoste: e, valleedaoste: e, "xn--valledaoste-ebb": e, valléedaoste: e, vao: e, vda: e, ven: e, veneto: e, ag: e, agrigento: e, al: e, alessandria: e, "alto-adige": e, altoadige: e, an: e, ancona: e, "andria-barletta-trani": e, "andria-trani-barletta": e, andriabarlettatrani: e, andriatranibarletta: e, ao: e, aosta: e, aoste: e, ap: e, aq: e, aquila: e, ar: e, arezzo: e, "ascoli-piceno": e, ascolipiceno: e, asti: e, at: e, av: e, avellino: e, ba: e, balsan: e, "balsan-sudtirol": e, "xn--balsan-sdtirol-nsb": e, "balsan-südtirol": e, "balsan-suedtirol": e, bari: e, "barletta-trani-andria": e, barlettatraniandria: e, belluno: e, benevento: e, bergamo: e, bg: e, bi: e, biella: e, bl: e, bn: e, bo: e, bologna: e, bolzano: e, "bolzano-altoadige": e, bozen: e, "bozen-sudtirol": e, "xn--bozen-sdtirol-2ob": e, "bozen-südtirol": e, "bozen-suedtirol": e, br: e, brescia: e, brindisi: e, bs: e, bt: e, bulsan: e, "bulsan-sudtirol": e, "xn--bulsan-sdtirol-nsb": e, "bulsan-südtirol": e, "bulsan-suedtirol": e, bz: e, ca: e, cagliari: e, caltanissetta: e, "campidano-medio": e, campidanomedio: e, campobasso: e, "carbonia-iglesias": e, carboniaiglesias: e, "carrara-massa": e, carraramassa: e, caserta: e, catania: e, catanzaro: e, cb: e, ce: e, "cesena-forli": e, "xn--cesena-forl-mcb": e, "cesena-forlì": e, cesenaforli: e, "xn--cesenaforl-i8a": e, cesenaforlì: e, ch: e, chieti: e, ci: e, cl: e, cn: e, co: e, como: e, cosenza: e, cr: e, cremona: e, crotone: e, cs: e, ct: e, cuneo: e, cz: e, "dell-ogliastra": e, dellogliastra: e, en: e, enna: e, fc: e, fe: e, fermo: e, ferrara: e, fg: e, fi: e, firenze: e, florence: e, fm: e, foggia: e, "forli-cesena": e, "xn--forl-cesena-fcb": e, "forlì-cesena": e, forlicesena: e, "xn--forlcesena-c8a": e, forlìcesena: e, fr: e, frosinone: e, ge: e, genoa: e, genova: e, go: e, gorizia: e, gr: e, grosseto: e, "iglesias-carbonia": e, iglesiascarbonia: e, im: e, imperia: e, is: e, isernia: e, kr: e, "la-spezia": e, laquila: e, laspezia: e, latina: e, lc: e, le: e, lecce: e, lecco: e, li: e, livorno: e, lo: e, lodi: e, lt: e, lu: e, lucca: e, macerata: e, mantova: e, "massa-carrara": e, massacarrara: e, matera: e, mb: e, mc: e, me: e, "medio-campidano": e, mediocampidano: e, messina: e, mi: e, milan: e, milano: e, mn: e, mo: e, modena: e, monza: e, "monza-brianza": e, "monza-e-della-brianza": e, monzabrianza: e, monzaebrianza: e, monzaedellabrianza: e, ms: e, mt: e, na: e, naples: e, napoli: e, no: e, novara: e, nu: e, nuoro: e, og: e, ogliastra: e, "olbia-tempio": e, olbiatempio: e, or: e, oristano: e, ot: e, pa: e, padova: e, padua: e, palermo: e, parma: e, pavia: e, pc: e, pd: e, pe: e, perugia: e, "pesaro-urbino": e, pesarourbino: e, pescara: e, pg: e, pi: e, piacenza: e, pisa: e, pistoia: e, pn: e, po: e, pordenone: e, potenza: e, pr: e, prato: e, pt: e, pu: e, pv: e, pz: e, ra: e, ragusa: e, ravenna: e, rc: e, re: e, "reggio-calabria": e, "reggio-emilia": e, reggiocalabria: e, reggioemilia: e, rg: e, ri: e, rieti: e, rimini: e, rm: e, rn: e, ro: e, roma: e, rome: e, rovigo: e, sa: e, salerno: e, sassari: e, savona: e, si: e, siena: e, siracusa: e, so: e, sondrio: e, sp: e, sr: e, ss: e, "xn--sdtirol-n2a": e, südtirol: e, suedtirol: e, sv: e, ta: e, taranto: e, te: e, "tempio-olbia": e, tempioolbia: e, teramo: e, terni: e, tn: e, to: e, torino: e, tp: e, tr: e, "trani-andria-barletta": e, "trani-barletta-andria": e, traniandriabarletta: e, tranibarlettaandria: e, trapani: e, trento: e, treviso: e, trieste: e, ts: e, turin: e, tv: e, ud: e, udine: e, "urbino-pesaro": e, urbinopesaro: e, va: e, varese: e, vb: e, vc: e, ve: e, venezia: e, venice: e, verbania: e, vercelli: e, verona: e, vi: e, "vibo-valentia": e, vibovalentia: e, vicenza: e, viterbo: e, vr: e, vs: e, vt: e, vv: e, "12chars": t, blogspot: t, ibxos: t, iliadboxos: t, neen: [0, { jc: t }], "123homepage": t, "16-b": t, "32-b": t, "64-b": t, myspreadshop: t, syncloud: t }], je: [1, { co: e, net: e, org: e, of: t }], jm: f, jo: [1, { agri: e, ai: e, com: e, edu: e, eng: e, fm: e, gov: e, mil: e, net: e, org: e, per: e, phd: e, sch: e, tv: e }], jobs: e, jp: [1, { ac: e, ad: e, co: e, ed: e, go: e, gr: e, lg: e, ne: [1, { aseinet: pn, gehirn: t, ivory: t, "mail-box": t, mints: t, mokuren: t, opal: t, sakura: t, sumomo: t, topaz: t }], or: e, aichi: [1, { aisai: e, ama: e, anjo: e, asuke: e, chiryu: e, chita: e, fuso: e, gamagori: e, handa: e, hazu: e, hekinan: e, higashiura: e, ichinomiya: e, inazawa: e, inuyama: e, isshiki: e, iwakura: e, kanie: e, kariya: e, kasugai: e, kira: e, kiyosu: e, komaki: e, konan: e, kota: e, mihama: e, miyoshi: e, nishio: e, nisshin: e, obu: e, oguchi: e, oharu: e, okazaki: e, owariasahi: e, seto: e, shikatsu: e, shinshiro: e, shitara: e, tahara: e, takahama: e, tobishima: e, toei: e, togo: e, tokai: e, tokoname: e, toyoake: e, toyohashi: e, toyokawa: e, toyone: e, toyota: e, tsushima: e, yatomi: e }], akita: [1, { akita: e, daisen: e, fujisato: e, gojome: e, hachirogata: e, happou: e, higashinaruse: e, honjo: e, honjyo: e, ikawa: e, kamikoani: e, kamioka: e, katagami: e, kazuno: e, kitaakita: e, kosaka: e, kyowa: e, misato: e, mitane: e, moriyoshi: e, nikaho: e, noshiro: e, odate: e, oga: e, ogata: e, semboku: e, yokote: e, yurihonjo: e }], aomori: [1, { aomori: e, gonohe: e, hachinohe: e, hashikami: e, hiranai: e, hirosaki: e, itayanagi: e, kuroishi: e, misawa: e, mutsu: e, nakadomari: e, noheji: e, oirase: e, owani: e, rokunohe: e, sannohe: e, shichinohe: e, shingo: e, takko: e, towada: e, tsugaru: e, tsuruta: e }], chiba: [1, { abiko: e, asahi: e, chonan: e, chosei: e, choshi: e, chuo: e, funabashi: e, futtsu: e, hanamigawa: e, ichihara: e, ichikawa: e, ichinomiya: e, inzai: e, isumi: e, kamagaya: e, kamogawa: e, kashiwa: e, katori: e, katsuura: e, kimitsu: e, kisarazu: e, kozaki: e, kujukuri: e, kyonan: e, matsudo: e, midori: e, mihama: e, minamiboso: e, mobara: e, mutsuzawa: e, nagara: e, nagareyama: e, narashino: e, narita: e, noda: e, oamishirasato: e, omigawa: e, onjuku: e, otaki: e, sakae: e, sakura: e, shimofusa: e, shirako: e, shiroi: e, shisui: e, sodegaura: e, sosa: e, tako: e, tateyama: e, togane: e, tohnosho: e, tomisato: e, urayasu: e, yachimata: e, yachiyo: e, yokaichiba: e, yokoshibahikari: e, yotsukaido: e }], ehime: [1, { ainan: e, honai: e, ikata: e, imabari: e, iyo: e, kamijima: e, kihoku: e, kumakogen: e, masaki: e, matsuno: e, matsuyama: e, namikata: e, niihama: e, ozu: e, saijo: e, seiyo: e, shikokuchuo: e, tobe: e, toon: e, uchiko: e, uwajima: e, yawatahama: e }], fukui: [1, { echizen: e, eiheiji: e, fukui: e, ikeda: e, katsuyama: e, mihama: e, minamiechizen: e, obama: e, ohi: e, ono: e, sabae: e, sakai: e, takahama: e, tsuruga: e, wakasa: e }], fukuoka: [1, { ashiya: e, buzen: e, chikugo: e, chikuho: e, chikujo: e, chikushino: e, chikuzen: e, chuo: e, dazaifu: e, fukuchi: e, hakata: e, higashi: e, hirokawa: e, hisayama: e, iizuka: e, inatsuki: e, kaho: e, kasuga: e, kasuya: e, kawara: e, keisen: e, koga: e, kurate: e, kurogi: e, kurume: e, minami: e, miyako: e, miyama: e, miyawaka: e, mizumaki: e, munakata: e, nakagawa: e, nakama: e, nishi: e, nogata: e, ogori: e, okagaki: e, okawa: e, oki: e, omuta: e, onga: e, onojo: e, oto: e, saigawa: e, sasaguri: e, shingu: e, shinyoshitomi: e, shonai: e, soeda: e, sue: e, tachiarai: e, tagawa: e, takata: e, toho: e, toyotsu: e, tsuiki: e, ukiha: e, umi: e, usui: e, yamada: e, yame: e, yanagawa: e, yukuhashi: e }], fukushima: [1, { aizubange: e, aizumisato: e, aizuwakamatsu: e, asakawa: e, bandai: e, date: e, fukushima: e, furudono: e, futaba: e, hanawa: e, higashi: e, hirata: e, hirono: e, iitate: e, inawashiro: e, ishikawa: e, iwaki: e, izumizaki: e, kagamiishi: e, kaneyama: e, kawamata: e, kitakata: e, kitashiobara: e, koori: e, koriyama: e, kunimi: e, miharu: e, mishima: e, namie: e, nango: e, nishiaizu: e, nishigo: e, okuma: e, omotego: e, ono: e, otama: e, samegawa: e, shimogo: e, shirakawa: e, showa: e, soma: e, sukagawa: e, taishin: e, tamakawa: e, tanagura: e, tenei: e, yabuki: e, yamato: e, yamatsuri: e, yanaizu: e, yugawa: e }], gifu: [1, { anpachi: e, ena: e, gifu: e, ginan: e, godo: e, gujo: e, hashima: e, hichiso: e, hida: e, higashishirakawa: e, ibigawa: e, ikeda: e, kakamigahara: e, kani: e, kasahara: e, kasamatsu: e, kawaue: e, kitagata: e, mino: e, minokamo: e, mitake: e, mizunami: e, motosu: e, nakatsugawa: e, ogaki: e, sakahogi: e, seki: e, sekigahara: e, shirakawa: e, tajimi: e, takayama: e, tarui: e, toki: e, tomika: e, wanouchi: e, yamagata: e, yaotsu: e, yoro: e }], gunma: [1, { annaka: e, chiyoda: e, fujioka: e, higashiagatsuma: e, isesaki: e, itakura: e, kanna: e, kanra: e, katashina: e, kawaba: e, kiryu: e, kusatsu: e, maebashi: e, meiwa: e, midori: e, minakami: e, naganohara: e, nakanojo: e, nanmoku: e, numata: e, oizumi: e, ora: e, ota: e, shibukawa: e, shimonita: e, shinto: e, showa: e, takasaki: e, takayama: e, tamamura: e, tatebayashi: e, tomioka: e, tsukiyono: e, tsumagoi: e, ueno: e, yoshioka: e }], hiroshima: [1, { asaminami: e, daiwa: e, etajima: e, fuchu: e, fukuyama: e, hatsukaichi: e, higashihiroshima: e, hongo: e, jinsekikogen: e, kaita: e, kui: e, kumano: e, kure: e, mihara: e, miyoshi: e, naka: e, onomichi: e, osakikamijima: e, otake: e, saka: e, sera: e, seranishi: e, shinichi: e, shobara: e, takehara: e }], hokkaido: [1, { abashiri: e, abira: e, aibetsu: e, akabira: e, akkeshi: e, asahikawa: e, ashibetsu: e, ashoro: e, assabu: e, atsuma: e, bibai: e, biei: e, bifuka: e, bihoro: e, biratori: e, chippubetsu: e, chitose: e, date: e, ebetsu: e, embetsu: e, eniwa: e, erimo: e, esan: e, esashi: e, fukagawa: e, fukushima: e, furano: e, furubira: e, haboro: e, hakodate: e, hamatonbetsu: e, hidaka: e, higashikagura: e, higashikawa: e, hiroo: e, hokuryu: e, hokuto: e, honbetsu: e, horokanai: e, horonobe: e, ikeda: e, imakane: e, ishikari: e, iwamizawa: e, iwanai: e, kamifurano: e, kamikawa: e, kamishihoro: e, kamisunagawa: e, kamoenai: e, kayabe: e, kembuchi: e, kikonai: e, kimobetsu: e, kitahiroshima: e, kitami: e, kiyosato: e, koshimizu: e, kunneppu: e, kuriyama: e, kuromatsunai: e, kushiro: e, kutchan: e, kyowa: e, mashike: e, matsumae: e, mikasa: e, minamifurano: e, mombetsu: e, moseushi: e, mukawa: e, muroran: e, naie: e, nakagawa: e, nakasatsunai: e, nakatombetsu: e, nanae: e, nanporo: e, nayoro: e, nemuro: e, niikappu: e, niki: e, nishiokoppe: e, noboribetsu: e, numata: e, obihiro: e, obira: e, oketo: e, okoppe: e, otaru: e, otobe: e, otofuke: e, otoineppu: e, oumu: e, ozora: e, pippu: e, rankoshi: e, rebun: e, rikubetsu: e, rishiri: e, rishirifuji: e, saroma: e, sarufutsu: e, shakotan: e, shari: e, shibecha: e, shibetsu: e, shikabe: e, shikaoi: e, shimamaki: e, shimizu: e, shimokawa: e, shinshinotsu: e, shintoku: e, shiranuka: e, shiraoi: e, shiriuchi: e, sobetsu: e, sunagawa: e, taiki: e, takasu: e, takikawa: e, takinoue: e, teshikaga: e, tobetsu: e, tohma: e, tomakomai: e, tomari: e, toya: e, toyako: e, toyotomi: e, toyoura: e, tsubetsu: e, tsukigata: e, urakawa: e, urausu: e, uryu: e, utashinai: e, wakkanai: e, wassamu: e, yakumo: e, yoichi: e }], hyogo: [1, { aioi: e, akashi: e, ako: e, amagasaki: e, aogaki: e, asago: e, ashiya: e, awaji: e, fukusaki: e, goshiki: e, harima: e, himeji: e, ichikawa: e, inagawa: e, itami: e, kakogawa: e, kamigori: e, kamikawa: e, kasai: e, kasuga: e, kawanishi: e, miki: e, minamiawaji: e, nishinomiya: e, nishiwaki: e, ono: e, sanda: e, sannan: e, sasayama: e, sayo: e, shingu: e, shinonsen: e, shiso: e, sumoto: e, taishi: e, taka: e, takarazuka: e, takasago: e, takino: e, tamba: e, tatsuno: e, toyooka: e, yabu: e, yashiro: e, yoka: e, yokawa: e }], ibaraki: [1, { ami: e, asahi: e, bando: e, chikusei: e, daigo: e, fujishiro: e, hitachi: e, hitachinaka: e, hitachiomiya: e, hitachiota: e, ibaraki: e, ina: e, inashiki: e, itako: e, iwama: e, joso: e, kamisu: e, kasama: e, kashima: e, kasumigaura: e, koga: e, miho: e, mito: e, moriya: e, naka: e, namegata: e, oarai: e, ogawa: e, omitama: e, ryugasaki: e, sakai: e, sakuragawa: e, shimodate: e, shimotsuma: e, shirosato: e, sowa: e, suifu: e, takahagi: e, tamatsukuri: e, tokai: e, tomobe: e, tone: e, toride: e, tsuchiura: e, tsukuba: e, uchihara: e, ushiku: e, yachiyo: e, yamagata: e, yawara: e, yuki: e }], ishikawa: [1, { anamizu: e, hakui: e, hakusan: e, kaga: e, kahoku: e, kanazawa: e, kawakita: e, komatsu: e, nakanoto: e, nanao: e, nomi: e, nonoichi: e, noto: e, shika: e, suzu: e, tsubata: e, tsurugi: e, uchinada: e, wajima: e }], iwate: [1, { fudai: e, fujisawa: e, hanamaki: e, hiraizumi: e, hirono: e, ichinohe: e, ichinoseki: e, iwaizumi: e, iwate: e, joboji: e, kamaishi: e, kanegasaki: e, karumai: e, kawai: e, kitakami: e, kuji: e, kunohe: e, kuzumaki: e, miyako: e, mizusawa: e, morioka: e, ninohe: e, noda: e, ofunato: e, oshu: e, otsuchi: e, rikuzentakata: e, shiwa: e, shizukuishi: e, sumita: e, tanohata: e, tono: e, yahaba: e, yamada: e }], kagawa: [1, { ayagawa: e, higashikagawa: e, kanonji: e, kotohira: e, manno: e, marugame: e, mitoyo: e, naoshima: e, sanuki: e, tadotsu: e, takamatsu: e, tonosho: e, uchinomi: e, utazu: e, zentsuji: e }], kagoshima: [1, { akune: e, amami: e, hioki: e, isa: e, isen: e, izumi: e, kagoshima: e, kanoya: e, kawanabe: e, kinko: e, kouyama: e, makurazaki: e, matsumoto: e, minamitane: e, nakatane: e, nishinoomote: e, satsumasendai: e, soo: e, tarumizu: e, yusui: e }], kanagawa: [1, { aikawa: e, atsugi: e, ayase: e, chigasaki: e, ebina: e, fujisawa: e, hadano: e, hakone: e, hiratsuka: e, isehara: e, kaisei: e, kamakura: e, kiyokawa: e, matsuda: e, minamiashigara: e, miura: e, nakai: e, ninomiya: e, odawara: e, oi: e, oiso: e, sagamihara: e, samukawa: e, tsukui: e, yamakita: e, yamato: e, yokosuka: e, yugawara: e, zama: e, zushi: e }], kochi: [1, { aki: e, geisei: e, hidaka: e, higashitsuno: e, ino: e, kagami: e, kami: e, kitagawa: e, kochi: e, mihara: e, motoyama: e, muroto: e, nahari: e, nakamura: e, nankoku: e, nishitosa: e, niyodogawa: e, ochi: e, okawa: e, otoyo: e, otsuki: e, sakawa: e, sukumo: e, susaki: e, tosa: e, tosashimizu: e, toyo: e, tsuno: e, umaji: e, yasuda: e, yusuhara: e }], kumamoto: [1, { amakusa: e, arao: e, aso: e, choyo: e, gyokuto: e, kamiamakusa: e, kikuchi: e, kumamoto: e, mashiki: e, mifune: e, minamata: e, minamioguni: e, nagasu: e, nishihara: e, oguni: e, ozu: e, sumoto: e, takamori: e, uki: e, uto: e, yamaga: e, yamato: e, yatsushiro: e }], kyoto: [1, { ayabe: e, fukuchiyama: e, higashiyama: e, ide: e, ine: e, joyo: e, kameoka: e, kamo: e, kita: e, kizu: e, kumiyama: e, kyotamba: e, kyotanabe: e, kyotango: e, maizuru: e, minami: e, minamiyamashiro: e, miyazu: e, muko: e, nagaokakyo: e, nakagyo: e, nantan: e, oyamazaki: e, sakyo: e, seika: e, tanabe: e, uji: e, ujitawara: e, wazuka: e, yamashina: e, yawata: e }], mie: [1, { asahi: e, inabe: e, ise: e, kameyama: e, kawagoe: e, kiho: e, kisosaki: e, kiwa: e, komono: e, kumano: e, kuwana: e, matsusaka: e, meiwa: e, mihama: e, minamiise: e, misugi: e, miyama: e, nabari: e, shima: e, suzuka: e, tado: e, taiki: e, taki: e, tamaki: e, toba: e, tsu: e, udono: e, ureshino: e, watarai: e, yokkaichi: e }], miyagi: [1, { furukawa: e, higashimatsushima: e, ishinomaki: e, iwanuma: e, kakuda: e, kami: e, kawasaki: e, marumori: e, matsushima: e, minamisanriku: e, misato: e, murata: e, natori: e, ogawara: e, ohira: e, onagawa: e, osaki: e, rifu: e, semine: e, shibata: e, shichikashuku: e, shikama: e, shiogama: e, shiroishi: e, tagajo: e, taiwa: e, tome: e, tomiya: e, wakuya: e, watari: e, yamamoto: e, zao: e }], miyazaki: [1, { aya: e, ebino: e, gokase: e, hyuga: e, kadogawa: e, kawaminami: e, kijo: e, kitagawa: e, kitakata: e, kitaura: e, kobayashi: e, kunitomi: e, kushima: e, mimata: e, miyakonojo: e, miyazaki: e, morotsuka: e, nichinan: e, nishimera: e, nobeoka: e, saito: e, shiiba: e, shintomi: e, takaharu: e, takanabe: e, takazaki: e, tsuno: e }], nagano: [1, { achi: e, agematsu: e, anan: e, aoki: e, asahi: e, azumino: e, chikuhoku: e, chikuma: e, chino: e, fujimi: e, hakuba: e, hara: e, hiraya: e, iida: e, iijima: e, iiyama: e, iizuna: e, ikeda: e, ikusaka: e, ina: e, karuizawa: e, kawakami: e, kiso: e, kisofukushima: e, kitaaiki: e, komagane: e, komoro: e, matsukawa: e, matsumoto: e, miasa: e, minamiaiki: e, minamimaki: e, minamiminowa: e, minowa: e, miyada: e, miyota: e, mochizuki: e, nagano: e, nagawa: e, nagiso: e, nakagawa: e, nakano: e, nozawaonsen: e, obuse: e, ogawa: e, okaya: e, omachi: e, omi: e, ookuwa: e, ooshika: e, otaki: e, otari: e, sakae: e, sakaki: e, saku: e, sakuho: e, shimosuwa: e, shinanomachi: e, shiojiri: e, suwa: e, suzaka: e, takagi: e, takamori: e, takayama: e, tateshina: e, tatsuno: e, togakushi: e, togura: e, tomi: e, ueda: e, wada: e, yamagata: e, yamanouchi: e, yasaka: e, yasuoka: e }], nagasaki: [1, { chijiwa: e, futsu: e, goto: e, hasami: e, hirado: e, iki: e, isahaya: e, kawatana: e, kuchinotsu: e, matsuura: e, nagasaki: e, obama: e, omura: e, oseto: e, saikai: e, sasebo: e, seihi: e, shimabara: e, shinkamigoto: e, togitsu: e, tsushima: e, unzen: e }], nara: [1, { ando: e, gose: e, heguri: e, higashiyoshino: e, ikaruga: e, ikoma: e, kamikitayama: e, kanmaki: e, kashiba: e, kashihara: e, katsuragi: e, kawai: e, kawakami: e, kawanishi: e, koryo: e, kurotaki: e, mitsue: e, miyake: e, nara: e, nosegawa: e, oji: e, ouda: e, oyodo: e, sakurai: e, sango: e, shimoichi: e, shimokitayama: e, shinjo: e, soni: e, takatori: e, tawaramoto: e, tenkawa: e, tenri: e, uda: e, yamatokoriyama: e, yamatotakada: e, yamazoe: e, yoshino: e }], niigata: [1, { aga: e, agano: e, gosen: e, itoigawa: e, izumozaki: e, joetsu: e, kamo: e, kariwa: e, kashiwazaki: e, minamiuonuma: e, mitsuke: e, muika: e, murakami: e, myoko: e, nagaoka: e, niigata: e, ojiya: e, omi: e, sado: e, sanjo: e, seiro: e, seirou: e, sekikawa: e, shibata: e, tagami: e, tainai: e, tochio: e, tokamachi: e, tsubame: e, tsunan: e, uonuma: e, yahiko: e, yoita: e, yuzawa: e }], oita: [1, { beppu: e, bungoono: e, bungotakada: e, hasama: e, hiji: e, himeshima: e, hita: e, kamitsue: e, kokonoe: e, kuju: e, kunisaki: e, kusu: e, oita: e, saiki: e, taketa: e, tsukumi: e, usa: e, usuki: e, yufu: e }], okayama: [1, { akaiwa: e, asakuchi: e, bizen: e, hayashima: e, ibara: e, kagamino: e, kasaoka: e, kibichuo: e, kumenan: e, kurashiki: e, maniwa: e, misaki: e, nagi: e, niimi: e, nishiawakura: e, okayama: e, satosho: e, setouchi: e, shinjo: e, shoo: e, soja: e, takahashi: e, tamano: e, tsuyama: e, wake: e, yakage: e }], okinawa: [1, { aguni: e, ginowan: e, ginoza: e, gushikami: e, haebaru: e, higashi: e, hirara: e, iheya: e, ishigaki: e, ishikawa: e, itoman: e, izena: e, kadena: e, kin: e, kitadaito: e, kitanakagusuku: e, kumejima: e, kunigami: e, minamidaito: e, motobu: e, nago: e, naha: e, nakagusuku: e, nakijin: e, nanjo: e, nishihara: e, ogimi: e, okinawa: e, onna: e, shimoji: e, taketomi: e, tarama: e, tokashiki: e, tomigusuku: e, tonaki: e, urasoe: e, uruma: e, yaese: e, yomitan: e, yonabaru: e, yonaguni: e, zamami: e }], osaka: [1, { abeno: e, chihayaakasaka: e, chuo: e, daito: e, fujiidera: e, habikino: e, hannan: e, higashiosaka: e, higashisumiyoshi: e, higashiyodogawa: e, hirakata: e, ibaraki: e, ikeda: e, izumi: e, izumiotsu: e, izumisano: e, kadoma: e, kaizuka: e, kanan: e, kashiwara: e, katano: e, kawachinagano: e, kishiwada: e, kita: e, kumatori: e, matsubara: e, minato: e, minoh: e, misaki: e, moriguchi: e, neyagawa: e, nishi: e, nose: e, osakasayama: e, sakai: e, sayama: e, sennan: e, settsu: e, shijonawate: e, shimamoto: e, suita: e, tadaoka: e, taishi: e, tajiri: e, takaishi: e, takatsuki: e, tondabayashi: e, toyonaka: e, toyono: e, yao: e }], saga: [1, { ariake: e, arita: e, fukudomi: e, genkai: e, hamatama: e, hizen: e, imari: e, kamimine: e, kanzaki: e, karatsu: e, kashima: e, kitagata: e, kitahata: e, kiyama: e, kouhoku: e, kyuragi: e, nishiarita: e, ogi: e, omachi: e, ouchi: e, saga: e, shiroishi: e, taku: e, tara: e, tosu: e, yoshinogari: e }], saitama: [1, { arakawa: e, asaka: e, chichibu: e, fujimi: e, fujimino: e, fukaya: e, hanno: e, hanyu: e, hasuda: e, hatogaya: e, hatoyama: e, hidaka: e, higashichichibu: e, higashimatsuyama: e, honjo: e, ina: e, iruma: e, iwatsuki: e, kamiizumi: e, kamikawa: e, kamisato: e, kasukabe: e, kawagoe: e, kawaguchi: e, kawajima: e, kazo: e, kitamoto: e, koshigaya: e, kounosu: e, kuki: e, kumagaya: e, matsubushi: e, minano: e, misato: e, miyashiro: e, miyoshi: e, moroyama: e, nagatoro: e, namegawa: e, niiza: e, ogano: e, ogawa: e, ogose: e, okegawa: e, omiya: e, otaki: e, ranzan: e, ryokami: e, saitama: e, sakado: e, satte: e, sayama: e, shiki: e, shiraoka: e, soka: e, sugito: e, toda: e, tokigawa: e, tokorozawa: e, tsurugashima: e, urawa: e, warabi: e, yashio: e, yokoze: e, yono: e, yorii: e, yoshida: e, yoshikawa: e, yoshimi: e }], shiga: [1, { aisho: e, gamo: e, higashiomi: e, hikone: e, koka: e, konan: e, kosei: e, koto: e, kusatsu: e, maibara: e, moriyama: e, nagahama: e, nishiazai: e, notogawa: e, omihachiman: e, otsu: e, ritto: e, ryuoh: e, takashima: e, takatsuki: e, torahime: e, toyosato: e, yasu: e }], shimane: [1, { akagi: e, ama: e, gotsu: e, hamada: e, higashiizumo: e, hikawa: e, hikimi: e, izumo: e, kakinoki: e, masuda: e, matsue: e, misato: e, nishinoshima: e, ohda: e, okinoshima: e, okuizumo: e, shimane: e, tamayu: e, tsuwano: e, unnan: e, yakumo: e, yasugi: e, yatsuka: e }], shizuoka: [1, { arai: e, atami: e, fuji: e, fujieda: e, fujikawa: e, fujinomiya: e, fukuroi: e, gotemba: e, haibara: e, hamamatsu: e, higashiizu: e, ito: e, iwata: e, izu: e, izunokuni: e, kakegawa: e, kannami: e, kawanehon: e, kawazu: e, kikugawa: e, kosai: e, makinohara: e, matsuzaki: e, minamiizu: e, mishima: e, morimachi: e, nishiizu: e, numazu: e, omaezaki: e, shimada: e, shimizu: e, shimoda: e, shizuoka: e, susono: e, yaizu: e, yoshida: e }], tochigi: [1, { ashikaga: e, bato: e, haga: e, ichikai: e, iwafune: e, kaminokawa: e, kanuma: e, karasuyama: e, kuroiso: e, mashiko: e, mibu: e, moka: e, motegi: e, nasu: e, nasushiobara: e, nikko: e, nishikata: e, nogi: e, ohira: e, ohtawara: e, oyama: e, sakura: e, sano: e, shimotsuke: e, shioya: e, takanezawa: e, tochigi: e, tsuga: e, ujiie: e, utsunomiya: e, yaita: e }], tokushima: [1, { aizumi: e, anan: e, ichiba: e, itano: e, kainan: e, komatsushima: e, matsushige: e, mima: e, minami: e, miyoshi: e, mugi: e, nakagawa: e, naruto: e, sanagochi: e, shishikui: e, tokushima: e, wajiki: e }], tokyo: [1, { adachi: e, akiruno: e, akishima: e, aogashima: e, arakawa: e, bunkyo: e, chiyoda: e, chofu: e, chuo: e, edogawa: e, fuchu: e, fussa: e, hachijo: e, hachioji: e, hamura: e, higashikurume: e, higashimurayama: e, higashiyamato: e, hino: e, hinode: e, hinohara: e, inagi: e, itabashi: e, katsushika: e, kita: e, kiyose: e, kodaira: e, koganei: e, kokubunji: e, komae: e, koto: e, kouzushima: e, kunitachi: e, machida: e, meguro: e, minato: e, mitaka: e, mizuho: e, musashimurayama: e, musashino: e, nakano: e, nerima: e, ogasawara: e, okutama: e, ome: e, oshima: e, ota: e, setagaya: e, shibuya: e, shinagawa: e, shinjuku: e, suginami: e, sumida: e, tachikawa: e, taito: e, tama: e, toshima: e }], tottori: [1, { chizu: e, hino: e, kawahara: e, koge: e, kotoura: e, misasa: e, nanbu: e, nichinan: e, sakaiminato: e, tottori: e, wakasa: e, yazu: e, yonago: e }], toyama: [1, { asahi: e, fuchu: e, fukumitsu: e, funahashi: e, himi: e, imizu: e, inami: e, johana: e, kamiichi: e, kurobe: e, nakaniikawa: e, namerikawa: e, nanto: e, nyuzen: e, oyabe: e, taira: e, takaoka: e, tateyama: e, toga: e, tonami: e, toyama: e, unazuki: e, uozu: e, yamada: e }], wakayama: [1, { arida: e, aridagawa: e, gobo: e, hashimoto: e, hidaka: e, hirogawa: e, inami: e, iwade: e, kainan: e, kamitonda: e, katsuragi: e, kimino: e, kinokawa: e, kitayama: e, koya: e, koza: e, kozagawa: e, kudoyama: e, kushimoto: e, mihama: e, misato: e, nachikatsuura: e, shingu: e, shirahama: e, taiji: e, tanabe: e, wakayama: e, yuasa: e, yura: e }], yamagata: [1, { asahi: e, funagata: e, higashine: e, iide: e, kahoku: e, kaminoyama: e, kaneyama: e, kawanishi: e, mamurogawa: e, mikawa: e, murayama: e, nagai: e, nakayama: e, nanyo: e, nishikawa: e, obanazawa: e, oe: e, oguni: e, ohkura: e, oishida: e, sagae: e, sakata: e, sakegawa: e, shinjo: e, shirataka: e, shonai: e, takahata: e, tendo: e, tozawa: e, tsuruoka: e, yamagata: e, yamanobe: e, yonezawa: e, yuza: e }], yamaguchi: [1, { abu: e, hagi: e, hikari: e, hofu: e, iwakuni: e, kudamatsu: e, mitou: e, nagato: e, oshima: e, shimonoseki: e, shunan: e, tabuse: e, tokuyama: e, toyota: e, ube: e, yuu: e }], yamanashi: [1, { chuo: e, doshi: e, fuefuki: e, fujikawa: e, fujikawaguchiko: e, fujiyoshida: e, hayakawa: e, hokuto: e, ichikawamisato: e, kai: e, kofu: e, koshu: e, kosuge: e, "minami-alps": e, minobu: e, nakamichi: e, nanbu: e, narusawa: e, nirasaki: e, nishikatsura: e, oshino: e, otsuki: e, showa: e, tabayama: e, tsuru: e, uenohara: e, yamanakako: e, yamanashi: e }], "xn--ehqz56n": e, 三重: e, "xn--1lqs03n": e, 京都: e, "xn--qqqt11m": e, 佐賀: e, "xn--f6qx53a": e, 兵庫: e, "xn--djrs72d6uy": e, 北海道: e, "xn--mkru45i": e, 千葉: e, "xn--0trq7p7nn": e, 和歌山: e, "xn--5js045d": e, 埼玉: e, "xn--kbrq7o": e, 大分: e, "xn--pssu33l": e, 大阪: e, "xn--ntsq17g": e, 奈良: e, "xn--uisz3g": e, 宮城: e, "xn--6btw5a": e, 宮崎: e, "xn--1ctwo": e, 富山: e, "xn--6orx2r": e, 山口: e, "xn--rht61e": e, 山形: e, "xn--rht27z": e, 山梨: e, "xn--nit225k": e, 岐阜: e, "xn--rht3d": e, 岡山: e, "xn--djty4k": e, 岩手: e, "xn--klty5x": e, 島根: e, "xn--kltx9a": e, 広島: e, "xn--kltp7d": e, 徳島: e, "xn--c3s14m": e, 愛媛: e, "xn--vgu402c": e, 愛知: e, "xn--efvn9s": e, 新潟: e, "xn--1lqs71d": e, 東京: e, "xn--4pvxs": e, 栃木: e, "xn--uuwu58a": e, 沖縄: e, "xn--zbx025d": e, 滋賀: e, "xn--8pvr4u": e, 熊本: e, "xn--5rtp49c": e, 石川: e, "xn--ntso0iqx3a": e, 神奈川: e, "xn--elqq16h": e, 福井: e, "xn--4it168d": e, 福岡: e, "xn--klt787d": e, 福島: e, "xn--rny31h": e, 秋田: e, "xn--7t0a264c": e, 群馬: e, "xn--uist22h": e, 茨城: e, "xn--8ltr62k": e, 長崎: e, "xn--2m4a15e": e, 長野: e, "xn--32vp30h": e, 青森: e, "xn--4it797k": e, 静岡: e, "xn--5rtq34k": e, 香川: e, "xn--k7yn95e": e, 高知: e, "xn--tor131o": e, 鳥取: e, "xn--d5qv7z876c": e, 鹿児島: e, kawasaki: f, kitakyushu: f, kobe: f, nagoya: f, sapporo: f, sendai: f, yokohama: f, buyshop: t, fashionstore: t, handcrafted: t, kawaiishop: t, supersale: t, theshop: t, "0am": t, "0g0": t, "0j0": t, "0t0": t, mydns: t, pgw: t, wjg: t, usercontent: t, angry: t, babyblue: t, babymilk: t, backdrop: t, bambina: t, bitter: t, blush: t, boo: t, boy: t, boyfriend: t, but: t, candypop: t, capoo: t, catfood: t, cheap: t, chicappa: t, chillout: t, chips: t, chowder: t, chu: t, ciao: t, cocotte: t, coolblog: t, cranky: t, cutegirl: t, daa: t, deca: t, deci: t, digick: t, egoism: t, fakefur: t, fem: t, flier: t, floppy: t, fool: t, frenchkiss: t, girlfriend: t, girly: t, gloomy: t, gonna: t, greater: t, hacca: t, heavy: t, her: t, hiho: t, hippy: t, holy: t, hungry: t, icurus: t, itigo: t, jellybean: t, kikirara: t, kill: t, kilo: t, kuron: t, littlestar: t, lolipopmc: t, lolitapunk: t, lomo: t, lovepop: t, lovesick: t, main: t, mods: t, mond: t, mongolian: t, moo: t, namaste: t, nikita: t, nobushi: t, noor: t, oops: t, parallel: t, parasite: t, pecori: t, peewee: t, penne: t, pepper: t, perma: t, pigboat: t, pinoko: t, punyu: t, pupu: t, pussycat: t, pya: t, raindrop: t, readymade: t, sadist: t, schoolbus: t, secret: t, staba: t, stripper: t, sub: t, sunnyday: t, thick: t, tonkotsu: t, under: t, upper: t, velvet: t, verse: t, versus: t, vivian: t, watson: t, weblike: t, whitesnow: t, zombie: t, blogspot: t, hateblo: t, hatenablog: t, hatenadiary: t, "2-d": t, bona: t, crap: t, daynight: t, eek: t, flop: t, halfmoon: t, jeez: t, matrix: t, mimoza: t, netgamers: t, nyanta: t, o0o0: t, rdy: t, rgr: t, rulez: t, sakurastorage: [0, { isk01: Ti, isk02: Ti }], saloon: t, sblo: t, skr: t, tank: t, "uh-oh": t, undo: t, webaccel: [0, { rs: t, user: t }], websozai: t, xii: t }], ke: [1, { ac: e, co: s, go: e, info: e, me: e, mobi: e, ne: e, or: e, sc: e }], kg: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, us: t }], kh: f, ki: ol, km: [1, { ass: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e, tm: e, asso: e, coop: e, gouv: e, medecin: e, notaires: e, pharmaciens: e, presse: e, veterinaire: e }], kn: [1, { edu: e, gov: e, net: e, org: e }], kp: [1, { com: e, edu: e, gov: e, org: e, rep: e, tra: e }], kr: [1, { ac: e, co: e, es: e, go: e, hs: e, kg: e, mil: e, ms: e, ne: e, or: e, pe: e, re: e, sc: e, busan: e, chungbuk: e, chungnam: e, daegu: e, daejeon: e, gangwon: e, gwangju: e, gyeongbuk: e, gyeonggi: e, gyeongnam: e, incheon: e, jeju: e, jeonbuk: e, jeonnam: e, seoul: e, ulsan: e, blogspot: t }], kw: [1, { com: e, edu: e, emb: e, gov: e, ind: e, net: e, org: e }], ky: Ft, kz: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, jcloud: t }], la: [1, { com: e, edu: e, gov: e, info: e, int: e, net: e, org: e, per: e, bnr: t }], lb: n, lc: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, oy: t }], li: [1, { blogspot: t, caa: t }], lk: [1, { ac: e, assn: e, com: e, edu: e, gov: e, grp: e, hotel: e, int: e, ltd: e, net: e, ngo: e, org: e, sch: e, soc: e, web: e }], lr: n, ls: [1, { ac: e, biz: e, co: e, edu: e, gov: e, info: e, net: e, org: e, sc: e }], lt: [1, { gov: e, blogspot: t }], lu: [1, { blogspot: t, "123website": t }], lv: [1, { asn: e, com: e, conf: e, edu: e, gov: e, id: e, mil: e, net: e, org: e }], ly: [1, { com: e, edu: e, gov: e, id: e, med: e, net: e, org: e, plc: e, sch: e }], ma: [1, { ac: e, co: e, gov: e, net: e, org: e, press: e }], mc: [1, { asso: e, tm: e }], md: [1, { blogspot: t, ir: t }], me: [1, { ac: e, co: e, edu: e, gov: e, its: e, net: e, org: e, priv: e, c66: t, craft: t, edgestack: t, filegear: t, glitch: t, "filegear-sg": t, lohmus: t, barsy: t, mcdir: t, brasilia: t, ddns: t, dnsfor: t, hopto: t, loginto: t, noip: t, webhop: t, soundcast: t, tcp4: t, vp4: t, diskstation: t, dscloud: t, i234: t, myds: t, synology: t, transip: qt, yombo: t, nohost: t }], mg: [1, { co: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e }], mh: e, mil: e, mk: [1, { com: e, edu: e, gov: e, inf: e, name: e, net: e, org: e, blogspot: t }], ml: [1, { com: e, edu: e, gouv: e, gov: e, net: e, org: e, presse: e }], mm: f, mn: [1, { edu: e, gov: e, org: e, nyc: t }], mo: n, mobi: [1, { barsy: t, dscloud: t }], mp: [1, { ju: t }], mq: e, mr: l, ms: [1, { com: e, edu: e, gov: e, net: e, org: e, lab: t, minisite: t }], mt: [1, { com: s, edu: e, net: e, org: e }], mu: [1, { ac: e, co: e, com: e, gov: e, net: e, or: e, org: e }], museum: e, mv: [1, { aero: e, biz: e, com: e, coop: e, edu: e, gov: e, info: e, int: e, mil: e, museum: e, name: e, net: e, org: e, pro: e }], mw: [1, { ac: e, biz: e, co: e, com: e, coop: e, edu: e, gov: e, int: e, net: e, org: e }], mx: [1, { com: e, edu: e, gob: e, net: e, org: e, blogspot: t }], my: [1, { biz: e, com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e, blogspot: t }], mz: [1, { ac: e, adv: e, co: e, edu: e, gov: e, mil: e, net: e, org: e }], na: [1, { alt: e, co: e, com: e, gov: e, net: e, org: e }], name: [1, { her: il, his: il }], nc: [1, { asso: e, nom: e }], ne: e, net: [1, { adobeaemcloud: t, "adobeio-static": t, adobeioruntime: t, akadns: t, akamai: t, "akamai-staging": t, akamaiedge: t, "akamaiedge-staging": t, akamaihd: t, "akamaihd-staging": t, akamaiorigin: t, "akamaiorigin-staging": t, akamaized: t, "akamaized-staging": t, edgekey: t, "edgekey-staging": t, edgesuite: t, "edgesuite-staging": t, alwaysdata: t, myamaze: t, cloudfront: t, appudo: t, "atlassian-dev": [0, { prod: Kr }], myfritz: t, onavstack: t, shopselect: t, blackbaudcdn: t, boomla: t, bplaced: t, square7: t, cdn77: [0, { r: t }], "cdn77-ssl": t, gb: t, hu: t, jp: t, se: t, uk: t, clickrising: t, "ddns-ip": t, "dns-cloud": t, "dns-dynamic": t, cloudaccess: t, cloudflare: [2, { cdn: t }], cloudflareanycast: Kr, cloudflarecn: Kr, cloudflareglobal: Kr, ctfcloud: t, "feste-ip": t, "knx-server": t, "static-access": t, cryptonomic: r, dattolocal: t, mydatto: t, debian: t, definima: t, "at-band-camp": t, blogdns: t, "broke-it": t, buyshouses: t, dnsalias: t, dnsdojo: t, "does-it": t, dontexist: t, dynalias: t, dynathome: t, endofinternet: t, "from-az": t, "from-co": t, "from-la": t, "from-ny": t, "gets-it": t, "ham-radio-op": t, homeftp: t, homeip: t, homelinux: t, homeunix: t, "in-the-band": t, "is-a-chef": t, "is-a-geek": t, "isa-geek": t, "kicks-ass": t, "office-on-the": t, podzone: t, "scrapper-site": t, selfip: t, "sells-it": t, servebbs: t, serveftp: t, thruhere: t, webhop: t, casacam: t, dynu: t, dynv6: t, twmail: t, ru: t, channelsdvr: [2, { u: t }], fastly: [0, { freetls: t, map: t, prod: [0, { a: t, global: t }], ssl: [0, { a: t, b: t, global: t }] }], fastlylb: [2, { map: t }], edgeapp: t, "keyword-on": t, "live-on": t, "server-on": t, "cdn-edges": t, localcert: t, localhostcert: t, heteml: t, cloudfunctions: t, "grafana-dev": t, iobb: t, moonscale: t, "in-dsl": t, "in-vpn": t, "apps-1and1": t, ipifony: t, cloudjiffy: [2, { "fra1-de": t, "west1-us": t }], elastx: [0, { "jls-sto1": t, "jls-sto2": t, "jls-sto3": t }], massivegrid: [0, { paas: [0, { "fr-1": t, "lon-1": t, "lon-2": t, "ny-1": t, "ny-2": t, "sg-1": t }] }], saveincloud: [0, { jelastic: t, "nordeste-idc": t }], scaleforce: ft, kinghost: t, uni5: t, krellian: t, ggff: t, barsy: t, memset: t, "azure-api": t, "azure-mobile": t, azureedge: t, azurefd: t, azurestaticapps: [2, { 1: t, 2: t, 3: t, 4: t, 5: t, 6: t, 7: t, centralus: t, eastasia: t, eastus2: t, westeurope: t, westus2: t }], azurewebsites: t, cloudapp: t, trafficmanager: t, windows: [0, { core: [0, { blob: t }], servicebus: t }], mynetname: [0, { sn: t }], routingthecloud: t, bounceme: t, ddns: t, "eating-organic": t, mydissent: t, myeffect: t, mymediapc: t, mypsx: t, mysecuritycamera: t, nhlfan: t, "no-ip": t, pgafan: t, privatizehealthinsurance: t, redirectme: t, serveblog: t, serveminecraft: t, sytes: t, dnsup: t, hicam: t, "now-dns": t, ownip: t, vpndns: t, cloudycluster: t, ovh: [0, { hosting: r, webpaas: r }], rackmaze: t, myradweb: t, in: t, squares: t, schokokeks: t, "firewall-gateway": t, seidat: t, senseering: t, siteleaf: t, mafelo: t, myspreadshop: t, "vps-host": [2, { jelastic: [0, { atl: t, njs: t, ric: t }] }], srcf: [0, { soc: t, user: t }], supabase: t, dsmynas: t, familyds: t, ts: [2, { c: r }], torproject: [2, { pages: t }], vusercontent: t, "reserve-online": t, "community-pro": t, meinforum: t, yandexcloud: [2, { storage: t, website: t }], za: t }], nf: [1, { arts: e, com: e, firm: e, info: e, net: e, other: e, per: e, rec: e, store: e, web: e }], ng: [1, { com: s, edu: e, gov: e, i: e, mil: e, mobi: e, name: e, net: e, org: e, sch: e, biz: [2, { co: t, dl: t, go: t, lg: t, on: t }], col: t, firm: t, gen: t, ltd: t, ngo: t, plc: t }], ni: [1, { ac: e, biz: e, co: e, com: e, edu: e, gob: e, in: e, info: e, int: e, mil: e, net: e, nom: e, org: e, web: e }], nl: [1, { co: t, "hosting-cluster": t, blogspot: t, gov: t, khplay: t, "123website": t, myspreadshop: t, transurl: r, cistron: t, demon: t }], no: [1, { fhs: e, folkebibl: e, fylkesbibl: e, idrett: e, museum: e, priv: e, vgs: e, dep: e, herad: e, kommune: e, mil: e, stat: e, aa: ee, ah: ee, bu: ee, fm: ee, hl: ee, hm: ee, "jan-mayen": ee, mr: ee, nl: ee, nt: ee, of: ee, ol: ee, oslo: ee, rl: ee, sf: ee, st: ee, svalbard: ee, tm: ee, tr: ee, va: ee, vf: ee, akrehamn: e, "xn--krehamn-dxa": e, åkrehamn: e, algard: e, "xn--lgrd-poac": e, ålgård: e, arna: e, bronnoysund: e, "xn--brnnysund-m8ac": e, brønnøysund: e, brumunddal: e, bryne: e, drobak: e, "xn--drbak-wua": e, drøbak: e, egersund: e, fetsund: e, floro: e, "xn--flor-jra": e, florø: e, fredrikstad: e, hokksund: e, honefoss: e, "xn--hnefoss-q1a": e, hønefoss: e, jessheim: e, jorpeland: e, "xn--jrpeland-54a": e, jørpeland: e, kirkenes: e, kopervik: e, krokstadelva: e, langevag: e, "xn--langevg-jxa": e, langevåg: e, leirvik: e, mjondalen: e, "xn--mjndalen-64a": e, mjøndalen: e, "mo-i-rana": e, mosjoen: e, "xn--mosjen-eya": e, mosjøen: e, nesoddtangen: e, orkanger: e, osoyro: e, "xn--osyro-wua": e, osøyro: e, raholt: e, "xn--rholt-mra": e, råholt: e, sandnessjoen: e, "xn--sandnessjen-ogb": e, sandnessjøen: e, skedsmokorset: e, slattum: e, spjelkavik: e, stathelle: e, stavern: e, stjordalshalsen: e, "xn--stjrdalshalsen-sqb": e, stjørdalshalsen: e, tananger: e, tranby: e, vossevangen: e, aarborte: e, aejrie: e, afjord: e, "xn--fjord-lra": e, åfjord: e, agdenes: e, akershus: sl, aknoluokta: e, "xn--koluokta-7ya57h": e, ákŋoluokta: e, al: e, "xn--l-1fa": e, ål: e, alaheadju: e, "xn--laheadju-7ya": e, álaheadju: e, alesund: e, "xn--lesund-hua": e, ålesund: e, alstahaug: e, alta: e, "xn--lt-liac": e, áltá: e, alvdal: e, amli: e, "xn--mli-tla": e, åmli: e, amot: e, "xn--mot-tla": e, åmot: e, andasuolo: e, andebu: e, andoy: e, "xn--andy-ira": e, andøy: e, ardal: e, "xn--rdal-poa": e, årdal: e, aremark: e, arendal: e, "xn--s-1fa": e, ås: e, aseral: e, "xn--seral-lra": e, åseral: e, asker: e, askim: e, askoy: e, "xn--asky-ira": e, askøy: e, askvoll: e, asnes: e, "xn--snes-poa": e, åsnes: e, audnedaln: e, aukra: e, aure: e, aurland: e, "aurskog-holand": e, "xn--aurskog-hland-jnb": e, "aurskog-høland": e, austevoll: e, austrheim: e, averoy: e, "xn--avery-yua": e, averøy: e, badaddja: e, "xn--bdddj-mrabd": e, bådåddjå: e, "xn--brum-voa": e, bærum: e, bahcavuotna: e, "xn--bhcavuotna-s4a": e, báhcavuotna: e, bahccavuotna: e, "xn--bhccavuotna-k7a": e, báhccavuotna: e, baidar: e, "xn--bidr-5nac": e, báidár: e, bajddar: e, "xn--bjddar-pta": e, bájddar: e, balat: e, "xn--blt-elab": e, bálát: e, balestrand: e, ballangen: e, balsfjord: e, bamble: e, bardu: e, barum: e, batsfjord: e, "xn--btsfjord-9za": e, båtsfjord: e, bearalvahki: e, "xn--bearalvhki-y4a": e, bearalváhki: e, beardu: e, beiarn: e, berg: e, bergen: e, berlevag: e, "xn--berlevg-jxa": e, berlevåg: e, bievat: e, "xn--bievt-0qa": e, bievát: e, bindal: e, birkenes: e, bjarkoy: e, "xn--bjarky-fya": e, bjarkøy: e, bjerkreim: e, bjugn: e, bodo: e, "xn--bod-2na": e, bodø: e, bokn: e, bomlo: e, "xn--bmlo-gra": e, bømlo: e, bremanger: e, bronnoy: e, "xn--brnny-wuac": e, brønnøy: e, budejju: e, buskerud: sl, bygland: e, bykle: e, cahcesuolo: e, "xn--hcesuolo-7ya35b": e, čáhcesuolo: e, davvenjarga: e, "xn--davvenjrga-y4a": e, davvenjárga: e, davvesiida: e, deatnu: e, dielddanuorri: e, divtasvuodna: e, divttasvuotna: e, donna: e, "xn--dnna-gra": e, dønna: e, dovre: e, drammen: e, drangedal: e, dyroy: e, "xn--dyry-ira": e, dyrøy: e, eid: e, eidfjord: e, eidsberg: e, eidskog: e, eidsvoll: e, eigersund: e, elverum: e, enebakk: e, engerdal: e, etne: e, etnedal: e, evenassi: e, "xn--eveni-0qa01ga": e, evenášši: e, evenes: e, "evje-og-hornnes": e, farsund: e, fauske: e, fedje: e, fet: e, finnoy: e, "xn--finny-yua": e, finnøy: e, fitjar: e, fjaler: e, fjell: e, fla: e, "xn--fl-zia": e, flå: e, flakstad: e, flatanger: e, flekkefjord: e, flesberg: e, flora: e, folldal: e, forde: e, "xn--frde-gra": e, førde: e, forsand: e, fosnes: e, "xn--frna-woa": e, fræna: e, frana: e, frei: e, frogn: e, froland: e, frosta: e, froya: e, "xn--frya-hra": e, frøya: e, fuoisku: e, fuossko: e, fusa: e, fyresdal: e, gaivuotna: e, "xn--givuotna-8ya": e, gáivuotna: e, galsa: e, "xn--gls-elac": e, gálsá: e, gamvik: e, gangaviika: e, "xn--ggaviika-8ya47h": e, gáŋgaviika: e, gaular: e, gausdal: e, giehtavuoatna: e, gildeskal: e, "xn--gildeskl-g0a": e, gildeskål: e, giske: e, gjemnes: e, gjerdrum: e, gjerstad: e, gjesdal: e, gjovik: e, "xn--gjvik-wua": e, gjøvik: e, gloppen: e, gol: e, gran: e, grane: e, granvin: e, gratangen: e, grimstad: e, grong: e, grue: e, gulen: e, guovdageaidnu: e, ha: e, "xn--h-2fa": e, hå: e, habmer: e, "xn--hbmer-xqa": e, hábmer: e, hadsel: e, "xn--hgebostad-g3a": e, hægebostad: e, hagebostad: e, halden: e, halsa: e, hamar: e, hamaroy: e, hammarfeasta: e, "xn--hmmrfeasta-s4ac": e, hámmárfeasta: e, hammerfest: e, hapmir: e, "xn--hpmir-xqa": e, hápmir: e, haram: e, hareid: e, harstad: e, hasvik: e, hattfjelldal: e, haugesund: e, hedmark: [0, { os: e, valer: e, "xn--vler-qoa": e, våler: e }], hemne: e, hemnes: e, hemsedal: e, hitra: e, hjartdal: e, hjelmeland: e, hobol: e, "xn--hobl-ira": e, hobøl: e, hof: e, hol: e, hole: e, holmestrand: e, holtalen: e, "xn--holtlen-hxa": e, holtålen: e, hordaland: [0, { os: e }], hornindal: e, horten: e, hoyanger: e, "xn--hyanger-q1a": e, høyanger: e, hoylandet: e, "xn--hylandet-54a": e, høylandet: e, hurdal: e, hurum: e, hvaler: e, hyllestad: e, ibestad: e, inderoy: e, "xn--indery-fya": e, inderøy: e, iveland: e, ivgu: e, jevnaker: e, jolster: e, "xn--jlster-bya": e, jølster: e, jondal: e, kafjord: e, "xn--kfjord-iua": e, kåfjord: e, karasjohka: e, "xn--krjohka-hwab49j": e, kárášjohka: e, karasjok: e, karlsoy: e, karmoy: e, "xn--karmy-yua": e, karmøy: e, kautokeino: e, klabu: e, "xn--klbu-woa": e, klæbu: e, klepp: e, kongsberg: e, kongsvinger: e, kraanghke: e, "xn--kranghke-b0a": e, kråanghke: e, kragero: e, "xn--krager-gya": e, kragerø: e, kristiansand: e, kristiansund: e, krodsherad: e, "xn--krdsherad-m8a": e, krødsherad: e, "xn--kvfjord-nxa": e, kvæfjord: e, "xn--kvnangen-k0a": e, kvænangen: e, kvafjord: e, kvalsund: e, kvam: e, kvanangen: e, kvinesdal: e, kvinnherad: e, kviteseid: e, kvitsoy: e, "xn--kvitsy-fya": e, kvitsøy: e, laakesvuemie: e, "xn--lrdal-sra": e, lærdal: e, lahppi: e, "xn--lhppi-xqa": e, láhppi: e, lardal: e, larvik: e, lavagis: e, lavangen: e, leangaviika: e, "xn--leagaviika-52b": e, leaŋgaviika: e, lebesby: e, leikanger: e, leirfjord: e, leka: e, leksvik: e, lenvik: e, lerdal: e, lesja: e, levanger: e, lier: e, lierne: e, lillehammer: e, lillesand: e, lindas: e, "xn--linds-pra": e, lindås: e, lindesnes: e, loabat: e, "xn--loabt-0qa": e, loabát: e, lodingen: e, "xn--ldingen-q1a": e, lødingen: e, lom: e, loppa: e, lorenskog: e, "xn--lrenskog-54a": e, lørenskog: e, loten: e, "xn--lten-gra": e, løten: e, lund: e, lunner: e, luroy: e, "xn--lury-ira": e, lurøy: e, luster: e, lyngdal: e, lyngen: e, malatvuopmi: e, "xn--mlatvuopmi-s4a": e, málatvuopmi: e, malselv: e, "xn--mlselv-iua": e, målselv: e, malvik: e, mandal: e, marker: e, marnardal: e, masfjorden: e, masoy: e, "xn--msy-ula0h": e, måsøy: e, "matta-varjjat": e, "xn--mtta-vrjjat-k7af": e, "mátta-várjjat": e, meland: e, meldal: e, melhus: e, meloy: e, "xn--mely-ira": e, meløy: e, meraker: e, "xn--merker-kua": e, meråker: e, midsund: e, "midtre-gauldal": e, moareke: e, "xn--moreke-jua": e, moåreke: e, modalen: e, modum: e, molde: e, "more-og-romsdal": [0, { heroy: e, sande: e }], "xn--mre-og-romsdal-qqb": [0, { "xn--hery-ira": e, sande: e }], "møre-og-romsdal": [0, { herøy: e, sande: e }], moskenes: e, moss: e, mosvik: e, muosat: e, "xn--muost-0qa": e, muosát: e, naamesjevuemie: e, "xn--nmesjevuemie-tcba": e, nååmesjevuemie: e, "xn--nry-yla5g": e, nærøy: e, namdalseid: e, namsos: e, namsskogan: e, nannestad: e, naroy: e, narviika: e, narvik: e, naustdal: e, navuotna: e, "xn--nvuotna-hwa": e, návuotna: e, "nedre-eiker": e, nesna: e, nesodden: e, nesseby: e, nesset: e, nissedal: e, nittedal: e, "nord-aurdal": e, "nord-fron": e, "nord-odal": e, norddal: e, nordkapp: e, nordland: [0, { bo: e, "xn--b-5ga": e, bø: e, heroy: e, "xn--hery-ira": e, herøy: e }], "nordre-land": e, nordreisa: e, "nore-og-uvdal": e, notodden: e, notteroy: e, "xn--nttery-byae": e, nøtterøy: e, odda: e, oksnes: e, "xn--ksnes-uua": e, øksnes: e, omasvuotna: e, oppdal: e, oppegard: e, "xn--oppegrd-ixa": e, oppegård: e, orkdal: e, orland: e, "xn--rland-uua": e, ørland: e, orskog: e, "xn--rskog-uua": e, ørskog: e, orsta: e, "xn--rsta-fra": e, ørsta: e, osen: e, osteroy: e, "xn--ostery-fya": e, osterøy: e, ostfold: [0, { valer: e }], "xn--stfold-9xa": [0, { "xn--vler-qoa": e }], østfold: [0, { våler: e }], "ostre-toten": e, "xn--stre-toten-zcb": e, "østre-toten": e, overhalla: e, "ovre-eiker": e, "xn--vre-eiker-k8a": e, "øvre-eiker": e, oyer: e, "xn--yer-zna": e, øyer: e, oygarden: e, "xn--ygarden-p1a": e, øygarden: e, "oystre-slidre": e, "xn--ystre-slidre-ujb": e, "øystre-slidre": e, porsanger: e, porsangu: e, "xn--porsgu-sta26f": e, porsáŋgu: e, porsgrunn: e, rade: e, "xn--rde-ula": e, råde: e, radoy: e, "xn--rady-ira": e, radøy: e, "xn--rlingen-mxa": e, rælingen: e, rahkkeravju: e, "xn--rhkkervju-01af": e, ráhkkerávju: e, raisa: e, "xn--risa-5na": e, ráisa: e, rakkestad: e, ralingen: e, rana: e, randaberg: e, rauma: e, rendalen: e, rennebu: e, rennesoy: e, "xn--rennesy-v1a": e, rennesøy: e, rindal: e, ringebu: e, ringerike: e, ringsaker: e, risor: e, "xn--risr-ira": e, risør: e, rissa: e, roan: e, rodoy: e, "xn--rdy-0nab": e, rødøy: e, rollag: e, romsa: e, romskog: e, "xn--rmskog-bya": e, rømskog: e, roros: e, "xn--rros-gra": e, røros: e, rost: e, "xn--rst-0na": e, røst: e, royken: e, "xn--ryken-vua": e, røyken: e, royrvik: e, "xn--ryrvik-bya": e, røyrvik: e, ruovat: e, rygge: e, salangen: e, salat: e, "xn--slat-5na": e, sálat: e, "xn--slt-elab": e, sálát: e, saltdal: e, samnanger: e, sandefjord: e, sandnes: e, sandoy: e, "xn--sandy-yua": e, sandøy: e, sarpsborg: e, sauda: e, sauherad: e, sel: e, selbu: e, selje: e, seljord: e, siellak: e, sigdal: e, siljan: e, sirdal: e, skanit: e, "xn--sknit-yqa": e, skánit: e, skanland: e, "xn--sknland-fxa": e, skånland: e, skaun: e, skedsmo: e, ski: e, skien: e, skierva: e, "xn--skierv-uta": e, skiervá: e, skiptvet: e, skjak: e, "xn--skjk-soa": e, skjåk: e, skjervoy: e, "xn--skjervy-v1a": e, skjervøy: e, skodje: e, smola: e, "xn--smla-hra": e, smøla: e, snaase: e, "xn--snase-nra": e, snåase: e, snasa: e, "xn--snsa-roa": e, snåsa: e, snillfjord: e, snoasa: e, sogndal: e, sogne: e, "xn--sgne-gra": e, søgne: e, sokndal: e, sola: e, solund: e, somna: e, "xn--smna-gra": e, sømna: e, "sondre-land": e, "xn--sndre-land-0cb": e, "søndre-land": e, songdalen: e, "sor-aurdal": e, "xn--sr-aurdal-l8a": e, "sør-aurdal": e, "sor-fron": e, "xn--sr-fron-q1a": e, "sør-fron": e, "sor-odal": e, "xn--sr-odal-q1a": e, "sør-odal": e, "sor-varanger": e, "xn--sr-varanger-ggb": e, "sør-varanger": e, sorfold: e, "xn--srfold-bya": e, sørfold: e, sorreisa: e, "xn--srreisa-q1a": e, sørreisa: e, sortland: e, sorum: e, "xn--srum-gra": e, sørum: e, spydeberg: e, stange: e, stavanger: e, steigen: e, steinkjer: e, stjordal: e, "xn--stjrdal-s1a": e, stjørdal: e, stokke: e, "stor-elvdal": e, stord: e, stordal: e, storfjord: e, strand: e, stranda: e, stryn: e, sula: e, suldal: e, sund: e, sunndal: e, surnadal: e, sveio: e, svelvik: e, sykkylven: e, tana: e, telemark: [0, { bo: e, "xn--b-5ga": e, bø: e }], time: e, tingvoll: e, tinn: e, tjeldsund: e, tjome: e, "xn--tjme-hra": e, tjøme: e, tokke: e, tolga: e, tonsberg: e, "xn--tnsberg-q1a": e, tønsberg: e, torsken: e, "xn--trna-woa": e, træna: e, trana: e, tranoy: e, "xn--trany-yua": e, tranøy: e, troandin: e, trogstad: e, "xn--trgstad-r1a": e, trøgstad: e, tromsa: e, tromso: e, "xn--troms-zua": e, tromsø: e, trondheim: e, trysil: e, tvedestrand: e, tydal: e, tynset: e, tysfjord: e, tysnes: e, "xn--tysvr-vra": e, tysvær: e, tysvar: e, ullensaker: e, ullensvang: e, ulvik: e, unjarga: e, "xn--unjrga-rta": e, unjárga: e, utsira: e, vaapste: e, vadso: e, "xn--vads-jra": e, vadsø: e, "xn--vry-yla5g": e, værøy: e, vaga: e, "xn--vg-yiab": e, vågå: e, vagan: e, "xn--vgan-qoa": e, vågan: e, vagsoy: e, "xn--vgsy-qoa0j": e, vågsøy: e, vaksdal: e, valle: e, vang: e, vanylven: e, vardo: e, "xn--vard-jra": e, vardø: e, varggat: e, "xn--vrggt-xqad": e, várggát: e, varoy: e, vefsn: e, vega: e, vegarshei: e, "xn--vegrshei-c0a": e, vegårshei: e, vennesla: e, verdal: e, verran: e, vestby: e, vestfold: [0, { sande: e }], vestnes: e, "vestre-slidre": e, "vestre-toten": e, vestvagoy: e, "xn--vestvgy-ixa6o": e, vestvågøy: e, vevelstad: e, vik: e, vikna: e, vindafjord: e, voagat: e, volda: e, voss: e, co: t, blogspot: t, "123hjemmeside": t, myspreadshop: t }], np: f, nr: ol, nu: [1, { merseine: t, mine: t, shacknet: t, enterprisecloud: t }], nz: [1, { ac: e, co: s, cri: e, geek: e, gen: e, govt: e, health: e, iwi: e, kiwi: e, maori: e, "xn--mori-qsa": e, māori: e, mil: e, net: e, org: e, parliament: e, school: e, cloudns: t }], om: [1, { co: e, com: e, edu: e, gov: e, med: e, museum: e, net: e, org: e, pro: e }], onion: e, org: [1, { altervista: t, pimienta: t, poivron: t, potager: t, sweetpepper: t, cdn77: [0, { c: t, rsc: t }], "cdn77-secure": [0, { origin: [0, { ssl: t }] }], ae: t, cloudns: t, "ip-dynamic": t, ddnss: t, duckdns: t, tunk: t, blogdns: t, blogsite: t, boldlygoingnowhere: t, dnsalias: t, dnsdojo: t, doesntexist: t, dontexist: t, doomdns: t, dvrdns: t, dynalias: t, dyndns: [2, { go: t, home: t }], endofinternet: t, endoftheinternet: t, "from-me": t, "game-host": t, gotdns: t, "hobby-site": t, homedns: t, homeftp: t, homelinux: t, homeunix: t, "is-a-bruinsfan": t, "is-a-candidate": t, "is-a-celticsfan": t, "is-a-chef": t, "is-a-geek": t, "is-a-knight": t, "is-a-linux-user": t, "is-a-patsfan": t, "is-a-soxfan": t, "is-found": t, "is-lost": t, "is-saved": t, "is-very-bad": t, "is-very-evil": t, "is-very-good": t, "is-very-nice": t, "is-very-sweet": t, "isa-geek": t, "kicks-ass": t, misconfused: t, podzone: t, readmyblog: t, selfip: t, sellsyourhome: t, servebbs: t, serveftp: t, servegame: t, "stuff-4-sale": t, webhop: t, accesscam: t, camdvr: t, freeddns: t, mywire: t, webredirect: t, twmail: t, eu: [2, { al: t, asso: t, at: t, au: t, be: t, bg: t, ca: t, cd: t, ch: t, cn: t, cy: t, cz: t, de: t, dk: t, edu: t, ee: t, es: t, fi: t, fr: t, gr: t, hr: t, hu: t, ie: t, il: t, in: t, int: t, is: t, it: t, jp: t, kr: t, lt: t, lu: t, lv: t, me: t, mk: t, mt: t, my: t, net: t, ng: t, nl: t, no: t, nz: t, pl: t, pt: t, ro: t, ru: t, se: t, si: t, sk: t, tr: t, uk: t, us: t }], fedorainfracloud: t, fedorapeople: t, fedoraproject: [0, { cloud: t, os: hn, stg: [0, { os: hn }] }], freedesktop: t, hatenadiary: t, hepforge: t, "in-dsl": t, "in-vpn": t, js: t, barsy: t, mayfirst: t, routingthecloud: t, bmoattachments: t, "cable-modem": t, collegefan: t, couchpotatofries: t, hopto: t, mlbfan: t, myftp: t, mysecuritycamera: t, nflfan: t, "no-ip": t, "read-books": t, ufcfan: t, zapto: t, dynserv: t, "now-dns": t, "is-local": t, httpbin: t, pubtls: t, jpn: t, "my-firewall": t, myfirewall: t, spdns: t, "small-web": t, dsmynas: t, familyds: t, teckids: Ti, tuxfamily: t, diskstation: t, hk: t, us: t, toolforge: t, wmcloud: t, wmflabs: t, za: t }], pa: [1, { abo: e, ac: e, com: e, edu: e, gob: e, ing: e, med: e, net: e, nom: e, org: e, sld: e }], pe: [1, { com: e, edu: e, gob: e, mil: e, net: e, nom: e, org: e, blogspot: t }], pf: [1, { com: e, edu: e, org: e }], pg: f, ph: [1, { com: e, edu: e, gov: e, i: e, mil: e, net: e, ngo: e, org: e, cloudns: t }], pk: [1, { ac: e, biz: e, com: e, edu: e, fam: e, gkp: e, gob: e, gog: e, gok: e, gon: e, gop: e, gos: e, gov: e, net: e, org: e, web: e }], pl: [1, { com: e, net: e, org: e, agro: e, aid: e, atm: e, auto: e, biz: e, edu: e, gmina: e, gsm: e, info: e, mail: e, media: e, miasta: e, mil: e, nieruchomosci: e, nom: e, pc: e, powiat: e, priv: e, realestate: e, rel: e, sex: e, shop: e, sklep: e, sos: e, szkola: e, targi: e, tm: e, tourism: e, travel: e, turystyka: e, gov: [1, { ap: e, griw: e, ic: e, is: e, kmpsp: e, konsulat: e, kppsp: e, kwp: e, kwpsp: e, mup: e, mw: e, oia: e, oirm: e, oke: e, oow: e, oschr: e, oum: e, pa: e, pinb: e, piw: e, po: e, pr: e, psp: e, psse: e, pup: e, rzgw: e, sa: e, sdn: e, sko: e, so: e, sr: e, starostwo: e, ug: e, ugim: e, um: e, umig: e, upow: e, uppo: e, us: e, uw: e, uzs: e, wif: e, wiih: e, winb: e, wios: e, witd: e, wiw: e, wkz: e, wsa: e, wskr: e, wsse: e, wuoz: e, wzmiuw: e, zp: e, zpisdn: e }], augustow: e, "babia-gora": e, bedzin: e, beskidy: e, bialowieza: e, bialystok: e, bielawa: e, bieszczady: e, boleslawiec: e, bydgoszcz: e, bytom: e, cieszyn: e, czeladz: e, czest: e, dlugoleka: e, elblag: e, elk: e, glogow: e, gniezno: e, gorlice: e, grajewo: e, ilawa: e, jaworzno: e, "jelenia-gora": e, jgora: e, kalisz: e, karpacz: e, kartuzy: e, kaszuby: e, katowice: e, "kazimierz-dolny": e, kepno: e, ketrzyn: e, klodzko: e, kobierzyce: e, kolobrzeg: e, konin: e, konskowola: e, kutno: e, lapy: e, lebork: e, legnica: e, lezajsk: e, limanowa: e, lomza: e, lowicz: e, lubin: e, lukow: e, malbork: e, malopolska: e, mazowsze: e, mazury: e, mielec: e, mielno: e, mragowo: e, naklo: e, nowaruda: e, nysa: e, olawa: e, olecko: e, olkusz: e, olsztyn: e, opoczno: e, opole: e, ostroda: e, ostroleka: e, ostrowiec: e, ostrowwlkp: e, pila: e, pisz: e, podhale: e, podlasie: e, polkowice: e, pomorskie: e, pomorze: e, prochowice: e, pruszkow: e, przeworsk: e, pulawy: e, radom: e, "rawa-maz": e, rybnik: e, rzeszow: e, sanok: e, sejny: e, skoczow: e, slask: e, slupsk: e, sosnowiec: e, "stalowa-wola": e, starachowice: e, stargard: e, suwalki: e, swidnica: e, swiebodzin: e, swinoujscie: e, szczecin: e, szczytno: e, tarnobrzeg: e, tgory: e, turek: e, tychy: e, ustka: e, walbrzych: e, warmia: e, warszawa: e, waw: e, wegrow: e, wielun: e, wlocl: e, wloclawek: e, wodzislaw: e, wolomin: e, wroclaw: e, zachpomor: e, zagan: e, zarow: e, zgora: e, zgorzelec: e, art: t, gliwice: t, krakow: t, poznan: t, wroc: t, zakopane: t, beep: t, "ecommerce-shop": t, cfolks: t, dfirma: t, dkonto: t, you2: t, shoparena: t, homesklep: t, sdscloud: t, unicloud: t, lodz: t, pabianice: t, plock: t, sieradz: t, skierniewice: t, zgierz: t, krasnik: t, leczna: t, lubartow: t, lublin: t, poniatowa: t, swidnik: t, co: t, torun: t, simplesite: t, myspreadshop: t, gda: t, gdansk: t, gdynia: t, med: t, sopot: t, bielsko: t }], pm: [1, { own: t, name: t }], pn: [1, { co: e, edu: e, gov: e, net: e, org: e }], post: e, pr: [1, { biz: e, com: e, edu: e, gov: e, info: e, isla: e, name: e, net: e, org: e, pro: e, ac: e, est: e, prof: e }], pro: [1, { aaa: e, aca: e, acct: e, avocat: e, bar: e, cpa: e, eng: e, jur: e, law: e, med: e, recht: e, "12chars": t, cloudns: t, barsy: t, ngrok: t }], ps: [1, { com: e, edu: e, gov: e, net: e, org: e, plo: e, sec: e }], pt: [1, { com: e, edu: e, gov: e, int: e, net: e, nome: e, org: e, publ: e, blogspot: t, "123paginaweb": t }], pw: [1, { belau: e, co: e, ed: e, go: e, or: e, cloudns: t, x443: t }], py: [1, { com: e, coop: e, edu: e, gov: e, mil: e, net: e, org: e }], qa: [1, { com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e, sch: e, blogspot: t }], re: [1, { asso: e, com: e, blogspot: t, can: t }], ro: [1, { arts: e, com: e, firm: e, info: e, nom: e, nt: e, org: e, rec: e, store: e, tm: e, www: e, co: t, shop: t, blogspot: t, barsy: t }], rs: [1, { ac: e, co: e, edu: e, gov: e, in: e, org: e, brendly: ht, blogspot: t, ua: t, barsy: t, ox: t }], ru: [1, { ac: t, edu: t, gov: t, int: t, mil: t, test: t, eurodir: t, adygeya: t, bashkiria: t, bir: t, cbg: t, com: t, dagestan: t, grozny: t, kalmykia: t, kustanai: t, marine: t, mordovia: t, msk: t, mytis: t, nalchik: t, nov: t, pyatigorsk: t, spb: t, vladikavkaz: t, vladimir: t, blogspot: t, na4u: t, mircloud: t, myjino: [2, { hosting: r, landing: r, spectrum: r, vps: r }], cldmail: [0, { hb: t }], mcdir: [2, { vps: t }], mcpre: t, net: t, org: t, pp: t, lk3: t, ras: t }], rw: [1, { ac: e, co: e, coop: e, gov: e, mil: e, net: e, org: e }], sa: [1, { com: e, edu: e, gov: e, med: e, net: e, org: e, pub: e, sch: e }], sb: n, sc: n, sd: [1, { com: e, edu: e, gov: e, info: e, med: e, net: e, org: e, tv: e }], se: [1, { a: e, ac: e, b: e, bd: e, brand: e, c: e, d: e, e, f: e, fh: e, fhsk: e, fhv: e, g: e, h: e, i: e, k: e, komforb: e, kommunalforbund: e, komvux: e, l: e, lanbib: e, m: e, n: e, naturbruksgymn: e, o: e, org: e, p: e, parti: e, pp: e, press: e, r: e, s: e, t: e, tm: e, u: e, w: e, x: e, y: e, z: e, com: t, blogspot: t, conf: t, iopsys: t, "123minsida": t, itcouldbewor: t, myspreadshop: t }], sg: [1, { com: e, edu: e, gov: e, net: e, org: e, blogspot: t, enscaled: t }], sh: [1, { com: e, gov: e, mil: e, net: e, org: e, hashbang: t, platform: [0, { ent: t, eu: t, us: t }], now: t }], si: [1, { f5: t, gitapp: t, gitpage: t, blogspot: t }], sj: e, sk: s, sl: n, sm: e, sn: [1, { art: e, com: e, edu: e, gouv: e, org: e, perso: e, univ: e, blogspot: t }], so: [1, { com: e, edu: e, gov: e, me: e, net: e, org: e, surveys: t }], sr: e, ss: [1, { biz: e, co: e, com: e, edu: e, gov: e, me: e, net: e, org: e, sch: e }], st: [1, { co: e, com: e, consulado: e, edu: e, embaixada: e, mil: e, net: e, org: e, principe: e, saotome: e, store: e, helioho: t, kirara: t, noho: t }], su: [1, { abkhazia: t, adygeya: t, aktyubinsk: t, arkhangelsk: t, armenia: t, ashgabad: t, azerbaijan: t, balashov: t, bashkiria: t, bryansk: t, bukhara: t, chimkent: t, dagestan: t, "east-kazakhstan": t, exnet: t, georgia: t, grozny: t, ivanovo: t, jambyl: t, kalmykia: t, kaluga: t, karacol: t, karaganda: t, karelia: t, khakassia: t, krasnodar: t, kurgan: t, kustanai: t, lenug: t, mangyshlak: t, mordovia: t, msk: t, murmansk: t, nalchik: t, navoi: t, "north-kazakhstan": t, nov: t, obninsk: t, penza: t, pokrovsk: t, sochi: t, spb: t, tashkent: t, termez: t, togliatti: t, troitsk: t, tselinograd: t, tula: t, tuva: t, vladikavkaz: t, vladimir: t, vologda: t }], sv: [1, { com: e, edu: e, gob: e, org: e, red: e }], sx: l, sy: Ei, sz: [1, { ac: e, co: e, org: e }], tc: e, td: s, tel: e, tf: [1, { sch: t }], tg: e, th: [1, { ac: e, co: e, go: e, in: e, mi: e, net: e, or: e, online: t, shop: t }], tj: [1, { ac: e, biz: e, co: e, com: e, edu: e, go: e, gov: e, int: e, mil: e, name: e, net: e, nic: e, org: e, test: e, web: e }], tk: e, tl: l, tm: [1, { co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e }], tn: [1, { com: e, ens: e, fin: e, gov: e, ind: e, info: e, intl: e, mincom: e, nat: e, net: e, org: e, perso: e, tourism: e, orangecloud: t }], to: [1, { 611: t, com: e, edu: e, gov: e, mil: e, net: e, org: e, oya: t, x0: t, quickconnect: C, vpnplus: t }], tr: [1, { av: e, bbs: e, bel: e, biz: e, com: s, dr: e, edu: e, gen: e, gov: e, info: e, k12: e, kep: e, mil: e, name: e, net: e, org: e, pol: e, tel: e, tsk: e, tv: e, web: e, nc: l }], tt: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }], tv: [1, { "better-than": t, dyndns: t, "on-the-web": t, "worse-than": t, from: t, sakura: t }], tw: [1, { club: e, com: [1, { mymailer: t }], ebiz: e, edu: e, game: e, gov: e, idv: e, mil: e, net: e, org: e, url: t, mydns: t, blogspot: t }], tz: [1, { ac: e, co: e, go: e, hotel: e, info: e, me: e, mil: e, mobi: e, ne: e, or: e, sc: e, tv: e }], ua: [1, { com: e, edu: e, gov: e, in: e, net: e, org: e, cherkassy: e, cherkasy: e, chernigov: e, chernihiv: e, chernivtsi: e, chernovtsy: e, ck: e, cn: e, cr: e, crimea: e, cv: e, dn: e, dnepropetrovsk: e, dnipropetrovsk: e, donetsk: e, dp: e, if: e, "ivano-frankivsk": e, kh: e, kharkiv: e, kharkov: e, kherson: e, khmelnitskiy: e, khmelnytskyi: e, kiev: e, kirovograd: e, km: e, kr: e, kropyvnytskyi: e, krym: e, ks: e, kv: e, kyiv: e, lg: e, lt: e, lugansk: e, luhansk: e, lutsk: e, lv: e, lviv: e, mk: e, mykolaiv: e, nikolaev: e, od: e, odesa: e, odessa: e, pl: e, poltava: e, rivne: e, rovno: e, rv: e, sb: e, sebastopol: e, sevastopol: e, sm: e, sumy: e, te: e, ternopil: e, uz: e, uzhgorod: e, uzhhorod: e, vinnica: e, vinnytsia: e, vn: e, volyn: e, yalta: e, zakarpattia: e, zaporizhzhe: e, zaporizhzhia: e, zhitomir: e, zhytomyr: e, zp: e, zt: e, cc: t, inf: t, ltd: t, cx: t, ie: t, biz: t, co: t, pp: t, v: t }], ug: [1, { ac: e, co: e, com: e, go: e, ne: e, or: e, org: e, sc: e, blogspot: t }], uk: [1, { ac: e, co: [1, { bytemark: [0, { dh: t, vm: t }], blogspot: t, layershift: ft, barsy: t, barsyonline: t, retrosnub: tr, "nh-serv": t, "no-ip": t, adimo: t, myspreadshop: t }], gov: [1, { api: t, campaign: t, service: t }], ltd: e, me: e, net: e, nhs: e, org: [1, { glug: t, lug: t, lugs: t, affinitylottery: t, raffleentry: t, weeklylottery: t }], plc: e, police: e, sch: f, conn: t, copro: t, hosp: t, "independent-commission": t, "independent-inquest": t, "independent-inquiry": t, "independent-panel": t, "independent-review": t, "public-inquiry": t, "royal-commission": t, pymnt: t, barsy: t, nimsite: t, oraclegovcloudapps: r }], us: [1, { dni: e, fed: e, isa: e, kids: e, nsn: e, ak: F, al: F, ar: F, as: F, az: F, ca: F, co: F, ct: F, dc: F, de: [1, { cc: e, lib: t }], fl: F, ga: F, gu: F, hi: Xr, ia: F, id: F, il: F, in: F, ks: F, ky: F, la: F, ma: [1, { k12: [1, { chtr: e, paroch: e, pvt: e }], cc: e, lib: e }], md: F, me: F, mi: [1, { k12: e, cc: e, lib: e, "ann-arbor": e, cog: e, dst: e, eaton: e, gen: e, mus: e, tec: e, washtenaw: e }], mn: F, mo: F, ms: F, mt: F, nc: F, nd: Xr, ne: F, nh: F, nj: F, nm: F, nv: F, ny: F, oh: F, ok: F, or: F, pa: F, pr: F, ri: Xr, sc: F, sd: Xr, tn: F, tx: F, ut: F, va: F, vi: F, vt: F, wa: F, wi: F, wv: [1, { cc: e }], wy: F, cloudns: t, drud: t, "is-by": t, "land-4-sale": t, "stuff-4-sale": t, heliohost: t, enscaled: [0, { phx: t }], mircloud: t, ngo: t, golffan: t, noip: t, pointto: t, freeddns: t, srv: [2, { gh: t, gl: t }], platterp: t, servername: t }], uy: [1, { com: s, edu: e, gub: e, mil: e, net: e, org: e }], uz: [1, { co: e, com: e, net: e, org: e }], va: e, vc: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, gv: [2, { d: t }], "0e": r, mydns: t }], ve: [1, { arts: e, bib: e, co: e, com: e, e12: e, edu: e, firm: e, gob: e, gov: e, info: e, int: e, mil: e, net: e, nom: e, org: e, rar: e, rec: e, store: e, tec: e, web: e }], vg: e, vi: [1, { co: e, com: e, k12: e, net: e, org: e }], vn: [1, { ac: e, ai: e, biz: e, com: e, edu: e, gov: e, health: e, id: e, info: e, int: e, io: e, name: e, net: e, org: e, pro: e, angiang: e, bacgiang: e, backan: e, baclieu: e, bacninh: e, "baria-vungtau": e, bentre: e, binhdinh: e, binhduong: e, binhphuoc: e, binhthuan: e, camau: e, cantho: e, caobang: e, daklak: e, daknong: e, danang: e, dienbien: e, dongnai: e, dongthap: e, gialai: e, hagiang: e, haiduong: e, haiphong: e, hanam: e, hanoi: e, hatinh: e, haugiang: e, hoabinh: e, hungyen: e, khanhhoa: e, kiengiang: e, kontum: e, laichau: e, lamdong: e, langson: e, laocai: e, longan: e, namdinh: e, nghean: e, ninhbinh: e, ninhthuan: e, phutho: e, phuyen: e, quangbinh: e, quangnam: e, quangngai: e, quangninh: e, quangtri: e, soctrang: e, sonla: e, tayninh: e, thaibinh: e, thainguyen: e, thanhhoa: e, thanhphohochiminh: e, thuathienhue: e, tiengiang: e, travinh: e, tuyenquang: e, vinhlong: e, vinhphuc: e, yenbai: e, blogspot: t }], vu: Ft, wf: [1, { biz: t, sch: t }], ws: [1, { com: e, edu: e, gov: e, net: e, org: e, advisor: r, cloud66: t, dyndns: t, mypets: t }], yt: [1, { org: t }], "xn--mgbaam7a8h": e, امارات: e, "xn--y9a3aq": e, հայ: e, "xn--54b7fta0cc": e, বাংলা: e, "xn--90ae": e, бг: e, "xn--mgbcpq6gpa1a": e, البحرين: e, "xn--90ais": e, бел: e, "xn--fiqs8s": e, 中国: e, "xn--fiqz9s": e, 中國: e, "xn--lgbbat1ad8j": e, الجزائر: e, "xn--wgbh1c": e, مصر: e, "xn--e1a4c": e, ею: e, "xn--qxa6a": e, ευ: e, "xn--mgbah1a3hjkrd": e, موريتانيا: e, "xn--node": e, გე: e, "xn--qxam": e, ελ: e, "xn--j6w193g": [1, { "xn--gmqw5a": e, "xn--55qx5d": e, "xn--mxtq1m": e, "xn--wcvs22d": e, "xn--uc0atv": e, "xn--od0alg": e }], 香港: [1, { 個人: e, 公司: e, 政府: e, 教育: e, 組織: e, 網絡: e }], "xn--2scrj9c": e, ಭಾರತ: e, "xn--3hcrj9c": e, ଭାରତ: e, "xn--45br5cyl": e, ভাৰত: e, "xn--h2breg3eve": e, भारतम्: e, "xn--h2brj9c8c": e, भारोत: e, "xn--mgbgu82a": e, ڀارت: e, "xn--rvc1e0am3e": e, ഭാരതം: e, "xn--h2brj9c": e, भारत: e, "xn--mgbbh1a": e, بارت: e, "xn--mgbbh1a71e": e, بھارت: e, "xn--fpcrj9c3d": e, భారత్: e, "xn--gecrj9c": e, ભારત: e, "xn--s9brj9c": e, ਭਾਰਤ: e, "xn--45brj9c": e, ভারত: e, "xn--xkc2dl3a5ee0h": e, இந்தியா: e, "xn--mgba3a4f16a": e, ایران: e, "xn--mgba3a4fra": e, ايران: e, "xn--mgbtx2b": e, عراق: e, "xn--mgbayh7gpa": e, الاردن: e, "xn--3e0b707e": e, 한국: e, "xn--80ao21a": e, қаз: e, "xn--q7ce6a": e, ລາວ: e, "xn--fzc2c9e2c": e, ලංකා: e, "xn--xkc2al3hye2a": e, இலங்கை: e, "xn--mgbc0a9azcg": e, المغرب: e, "xn--d1alf": e, мкд: e, "xn--l1acc": e, мон: e, "xn--mix891f": e, 澳門: e, "xn--mix082f": e, 澳门: e, "xn--mgbx4cd0ab": e, مليسيا: e, "xn--mgb9awbf": e, عمان: e, "xn--mgbai9azgqp6j": e, پاکستان: e, "xn--mgbai9a5eva00b": e, پاكستان: e, "xn--ygbi2ammx": e, فلسطين: e, "xn--90a3ac": [1, { "xn--80au": e, "xn--90azh": e, "xn--d1at": e, "xn--c1avg": e, "xn--o1ac": e, "xn--o1ach": e }], срб: [1, { ак: e, обр: e, од: e, орг: e, пр: e, упр: e }], "xn--p1ai": e, рф: e, "xn--wgbl6a": e, قطر: e, "xn--mgberp4a5d4ar": e, السعودية: e, "xn--mgberp4a5d4a87g": e, السعودیة: e, "xn--mgbqly7c0a67fbc": e, السعودیۃ: e, "xn--mgbqly7cvafr": e, السعوديه: e, "xn--mgbpl2fh": e, سودان: e, "xn--yfro4i67o": e, 新加坡: e, "xn--clchc0ea0b2g2a9gcd": e, சிங்கப்பூர்: e, "xn--ogbpf8fl": e, سورية: e, "xn--mgbtf8fl": e, سوريا: e, "xn--o3cw4h": [1, { "xn--o3cyx2a": e, "xn--12co0c3b4eva": e, "xn--m3ch0j3a": e, "xn--h3cuzk1di": e, "xn--12c1fe0br": e, "xn--12cfi8ixb8l": e }], ไทย: [1, { ทหาร: e, ธุรกิจ: e, เน็ต: e, รัฐบาล: e, ศึกษา: e, องค์กร: e }], "xn--pgbs0dh": e, تونس: e, "xn--kpry57d": e, 台灣: e, "xn--kprw13d": e, 台湾: e, "xn--nnx388a": e, 臺灣: e, "xn--j1amh": e, укр: e, "xn--mgb2ddes": e, اليمن: e, xxx: e, ye: Ei, za: [0, { ac: e, agric: e, alt: e, co: s, edu: e, gov: e, grondar: e, law: e, mil: e, net: e, ngo: e, nic: e, nis: e, nom: e, org: e, school: e, tm: e, web: e }], zm: [1, { ac: e, biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, net: e, org: e, sch: e }], zw: [1, { ac: e, co: e, gov: e, mil: e, org: e }], aaa: e, aarp: e, abb: e, abbott: e, abbvie: e, abc: e, able: e, abogado: e, abudhabi: e, academy: [1, { official: t }], accenture: e, accountant: e, accountants: e, aco: e, actor: e, ads: e, adult: e, aeg: e, aetna: e, afl: e, africa: e, agakhan: e, agency: e, aig: e, airbus: e, airforce: e, airtel: e, akdn: e, alibaba: e, alipay: e, allfinanz: e, allstate: e, ally: e, alsace: e, alstom: e, amazon: e, americanexpress: e, americanfamily: e, amex: e, amfam: e, amica: e, amsterdam: e, analytics: e, android: e, anquan: e, anz: e, aol: e, apartments: e, app: [1, { adaptable: t, beget: r, clerk: t, clerkstage: t, wnext: t, csb: [2, { preview: t }], platform0: t, deta: t, ondigitalocean: t, easypanel: t, encr: t, evervault: o, expo: [2, { staging: t }], edgecompute: t, flutterflow: t, framer: t, hosted: r, run: r, web: t, hasura: t, loginline: t, medusajs: t, messerli: t, netfy: t, netlify: t, ngrok: t, "ngrok-free": t, developer: r, noop: t, northflank: r, upsun: r, replit: i, nyat: t, snowflake: [0, { "*": t, privatelink: r }], streamlit: t, storipress: t, telebit: t, typedream: t, vercel: t, bookonline: t, wdh: t, zeabur: t }], apple: e, aquarelle: e, arab: e, aramco: e, archi: e, army: e, art: e, arte: e, asda: e, associates: e, athleta: e, attorney: e, auction: e, audi: e, audible: e, audio: e, auspost: e, author: e, auto: e, autos: e, aws: [1, { sagemaker: [0, { "ap-northeast-1": u, "ap-northeast-2": u, "ap-south-1": u, "ap-southeast-1": u, "ap-southeast-2": u, "ca-central-1": p, "eu-central-1": u, "eu-west-1": u, "eu-west-2": u, "us-east-1": p, "us-east-2": p, "us-west-2": p, "af-south-1": c, "ap-east-1": c, "ap-northeast-3": c, "ap-south-2": d, "ap-southeast-3": c, "ap-southeast-4": d, "ca-west-1": [0, { notebook: t, "notebook-fips": t }], "eu-central-2": d, "eu-north-1": c, "eu-south-1": c, "eu-south-2": c, "eu-west-3": c, "il-central-1": c, "me-central-1": c, "me-south-1": c, "sa-east-1": c, "us-gov-east-1": h, "us-gov-west-1": h, "us-west-1": [0, { notebook: t, "notebook-fips": t, studio: t }], experiments: r }], repost: [0, { private: r }] }], axa: e, azure: e, baby: e, baidu: e, banamex: e, band: e, bank: e, bar: e, barcelona: e, barclaycard: e, barclays: e, barefoot: e, bargains: e, baseball: e, basketball: [1, { aus: t, nz: t }], bauhaus: e, bayern: e, bbc: e, bbt: e, bbva: e, bcg: e, bcn: e, beats: e, beauty: e, beer: e, bentley: e, berlin: e, best: e, bestbuy: e, bet: e, bharti: e, bible: e, bid: e, bike: e, bing: e, bingo: e, bio: e, black: e, blackfriday: e, blockbuster: e, blog: e, bloomberg: e, blue: e, bms: e, bmw: e, bnpparibas: e, boats: e, boehringer: e, bofa: e, bom: e, bond: e, boo: e, book: e, booking: e, bosch: e, bostik: e, boston: e, bot: e, boutique: e, box: e, bradesco: e, bridgestone: e, broadway: e, broker: e, brother: e, brussels: e, build: [1, { v0: t }], builders: [1, { cloudsite: t }], business: g, buy: e, buzz: e, bzh: e, cab: e, cafe: e, cal: e, call: e, calvinklein: e, cam: e, camera: e, camp: [1, { emf: [0, { at: t }] }], canon: e, capetown: e, capital: e, capitalone: e, car: e, caravan: e, cards: e, care: e, career: e, careers: e, cars: e, casa: [1, { nabu: [0, { ui: t }] }], case: e, cash: e, casino: e, catering: e, catholic: e, cba: e, cbn: e, cbre: e, center: e, ceo: e, cern: e, cfa: e, cfd: e, chanel: e, channel: e, charity: e, chase: e, chat: e, cheap: e, chintai: e, christmas: e, chrome: e, church: e, cipriani: e, circle: e, cisco: e, citadel: e, citi: e, citic: e, city: e, claims: e, cleaning: e, click: e, clinic: e, clinique: e, clothing: e, cloud: [1, { elementor: t, encoway: [0, { eu: t }], statics: r, ravendb: t, axarnet: [0, { "es-1": t }], diadem: t, jelastic: [0, { vip: t }], jele: t, "jenv-aruba": [0, { aruba: [0, { eur: [0, { it1: t }] }], it1: t }], keliweb: [2, { cs: t }], oxa: [2, { tn: t, uk: t }], primetel: [2, { uk: t }], reclaim: [0, { ca: t, uk: t, us: t }], trendhosting: [0, { ch: t, de: t }], jotelulu: t, kuleuven: t, linkyard: t, magentosite: r, matlab: t, observablehq: t, perspecta: t, vapor: t, "on-rancher": r, scw: [0, { baremetal: [0, { "fr-par-1": t, "fr-par-2": t, "nl-ams-1": t }], "fr-par": [0, { cockpit: t, fnc: [2, { functions: t }], k8s: y, s3: t, "s3-website": t, whm: t }], instances: [0, { priv: t, pub: t }], k8s: t, "nl-ams": [0, { cockpit: t, k8s: y, s3: t, "s3-website": t, whm: t }], "pl-waw": [0, { cockpit: t, k8s: y, s3: t, "s3-website": t }], scalebook: t, smartlabeling: t }], servebolt: t, onstackit: [0, { runs: t }], trafficplex: t, "unison-services": t, urown: t, voorloper: t, zap: t }], club: [1, { cloudns: t, jele: t, barsy: t }], clubmed: e, coach: e, codes: [1, { owo: r }], coffee: e, college: e, cologne: e, commbank: e, community: [1, { nog: t, ravendb: t, myforum: t }], company: e, compare: e, computer: e, comsec: e, condos: e, construction: e, consulting: e, contact: e, contractors: e, cooking: e, cool: [1, { elementor: t, de: t }], corsica: e, country: e, coupon: e, coupons: e, courses: e, cpa: e, credit: e, creditcard: e, creditunion: e, cricket: e, crown: e, crs: e, cruise: e, cruises: e, cuisinella: e, cymru: e, cyou: e, dad: e, dance: e, data: e, date: e, dating: e, datsun: e, day: e, dclk: e, dds: e, deal: e, dealer: e, deals: e, degree: e, delivery: e, dell: e, deloitte: e, delta: e, democrat: e, dental: e, dentist: e, desi: e, design: [1, { graphic: t, bss: t }], dev: [1, { "12chars": t, panel: t, lcl: r, lclstage: r, stg: r, stgstage: r, pages: t, r2: t, workers: t, curv: t, deno: t, "deno-staging": t, deta: t, evervault: o, fly: t, githubpreview: t, gateway: r, hrsn: t, "is-a-good": t, "is-a": t, iserv: t, runcontainers: t, localcert: [0, { user: r }], loginline: t, barsy: t, mediatech: t, modx: t, ngrok: t, "ngrok-free": t, "is-a-fullstack": t, "is-cool": t, "is-not-a": t, localplayer: t, xmit: t, "platter-app": t, replit: [2, { archer: t, bones: t, canary: t, global: t, hacker: t, id: t, janeway: t, kim: t, kira: t, kirk: t, odo: t, paris: t, picard: t, pike: t, prerelease: t, reed: t, riker: t, sisko: t, spock: t, staging: t, sulu: t, tarpit: t, teams: t, tucker: t, wesley: t, worf: t }], crm: [0, { d: r, w: r, wa: r, wb: r, wc: r, wd: r, we: r, wf: r }], vercel: t, webhare: r }], dhl: e, diamonds: e, diet: e, digital: [1, { cloudapps: [2, { london: t }] }], direct: [1, { libp2p: t }], directory: e, discount: e, discover: e, dish: e, diy: e, dnp: e, docs: e, doctor: e, dog: e, domains: e, dot: e, download: e, drive: e, dtv: e, dubai: e, dunlop: e, dupont: e, durban: e, dvag: e, dvr: e, earth: e, eat: e, eco: e, edeka: e, education: g, email: [1, { crisp: [0, { on: t }], tawk: Ae, tawkto: Ae }], emerck: e, energy: e, engineer: e, engineering: e, enterprises: e, epson: e, equipment: e, ericsson: e, erni: e, esq: e, estate: [1, { compute: r }], eurovision: e, eus: [1, { party: pn }], events: [1, { koobin: t, co: t }], exchange: e, expert: e, exposed: e, express: e, extraspace: e, fage: e, fail: e, fairwinds: e, faith: e, family: e, fan: e, fans: e, farm: [1, { storj: t }], farmers: e, fashion: e, fast: e, fedex: e, feedback: e, ferrari: e, ferrero: e, fidelity: e, fido: e, film: e, final: e, finance: e, financial: g, fire: e, firestone: e, firmdale: e, fish: e, fishing: e, fit: e, fitness: e, flickr: e, flights: e, flir: e, florist: e, flowers: e, fly: e, foo: e, food: e, football: e, ford: e, forex: e, forsale: e, forum: e, foundation: e, fox: e, free: e, fresenius: e, frl: e, frogans: e, frontier: e, ftr: e, fujitsu: e, fun: e, fund: e, furniture: e, futbol: e, fyi: e, gal: e, gallery: e, gallo: e, gallup: e, game: e, games: [1, { pley: t, sheezy: t }], gap: e, garden: e, gay: [1, { pages: t }], gbiz: e, gdn: [1, { cnpy: t }], gea: e, gent: e, genting: e, george: e, ggee: e, gift: e, gifts: e, gives: e, giving: e, glass: e, gle: e, global: e, globo: e, gmail: e, gmbh: e, gmo: e, gmx: e, godaddy: e, gold: e, goldpoint: e, golf: e, goo: e, goodyear: e, goog: [1, { cloud: t, translate: t, usercontent: r }], google: e, gop: e, got: e, grainger: e, graphics: e, gratis: e, green: e, gripe: e, grocery: e, group: [1, { discourse: t }], gucci: e, guge: e, guide: e, guitars: e, guru: e, hair: e, hamburg: e, hangout: e, haus: e, hbo: e, hdfc: e, hdfcbank: e, health: [1, { hra: t }], healthcare: e, help: e, helsinki: e, here: e, hermes: e, hiphop: e, hisamitsu: e, hitachi: e, hiv: e, hkt: e, hockey: e, holdings: e, holiday: e, homedepot: e, homegoods: e, homes: e, homesense: e, honda: e, horse: e, hospital: e, host: [1, { cloudaccess: t, freesite: t, easypanel: t, fastvps: t, myfast: t, tempurl: t, wpmudev: t, jele: t, mircloud: t, wp2: t, half: t }], hosting: [1, { opencraft: t }], hot: e, hotels: e, hotmail: e, house: e, how: e, hsbc: e, hughes: e, hyatt: e, hyundai: e, ibm: e, icbc: e, ice: e, icu: e, ieee: e, ifm: e, ikano: e, imamat: e, imdb: e, immo: e, immobilien: e, inc: e, industries: e, infiniti: e, ing: e, ink: e, institute: e, insurance: e, insure: e, international: e, intuit: e, investments: e, ipiranga: e, irish: e, ismaili: e, ist: e, istanbul: e, itau: e, itv: e, jaguar: e, java: e, jcb: e, jeep: e, jetzt: e, jewelry: e, jio: e, jll: e, jmp: e, jnj: e, joburg: e, jot: e, joy: e, jpmorgan: e, jprs: e, juegos: e, juniper: e, kaufen: e, kddi: e, kerryhotels: e, kerrylogistics: e, kerryproperties: e, kfh: e, kia: e, kids: e, kim: e, kindle: e, kitchen: e, kiwi: e, koeln: e, komatsu: e, kosher: e, kpmg: e, kpn: e, krd: [1, { co: t, edu: t }], kred: e, kuokgroup: e, kyoto: e, lacaixa: e, lamborghini: e, lamer: e, lancaster: e, land: e, landrover: e, lanxess: e, lasalle: e, lat: e, latino: e, latrobe: e, law: e, lawyer: e, lds: e, lease: e, leclerc: e, lefrak: e, legal: e, lego: e, lexus: e, lgbt: e, lidl: e, life: e, lifeinsurance: e, lifestyle: e, lighting: e, like: e, lilly: e, limited: e, limo: e, lincoln: e, link: [1, { myfritz: t, cyon: t, dweb: r, nftstorage: [0, { ipfs: t }], mypep: t }], lipsy: e, live: [1, { aem: t, hlx: t, ewp: r }], living: e, llc: e, llp: e, loan: e, loans: e, locker: e, locus: e, lol: [1, { omg: t }], london: e, lotte: e, lotto: e, love: e, lpl: e, lplfinancial: e, ltd: e, ltda: e, lundbeck: e, luxe: e, luxury: e, madrid: e, maif: e, maison: e, makeup: e, man: e, management: [1, { router: t }], mango: e, map: e, market: e, marketing: e, markets: e, marriott: e, marshalls: e, mattel: e, mba: e, mckinsey: e, med: e, media: Gr, meet: e, melbourne: e, meme: e, memorial: e, men: e, menu: [1, { barsy: t, barsyonline: t }], merck: e, merckmsd: e, miami: e, microsoft: e, mini: e, mint: e, mit: e, mitsubishi: e, mlb: e, mls: e, mma: e, mobile: e, moda: e, moe: e, moi: e, mom: [1, { ind: t }], monash: e, money: e, monster: e, mormon: e, mortgage: e, moscow: e, moto: e, motorcycles: e, mov: e, movie: e, msd: e, mtn: e, mtr: e, music: e, nab: e, nagoya: e, navy: e, nba: e, nec: e, netbank: e, netflix: e, network: [1, { alces: r, co: t, arvo: t, azimuth: t, tlon: t }], neustar: e, new: e, news: [1, { noticeable: t }], next: e, nextdirect: e, nexus: e, nfl: e, ngo: e, nhk: e, nico: e, nike: e, nikon: e, ninja: e, nissan: e, nissay: e, nokia: e, norton: e, now: e, nowruz: e, nowtv: e, nra: e, nrw: e, ntt: e, nyc: e, obi: e, observer: e, office: e, okinawa: e, olayan: e, olayangroup: e, ollo: e, omega: e, one: [1, { kin: r, service: t }], ong: [1, { obl: t }], onl: e, online: [1, { eero: t, "eero-stage": t, websitebuilder: t, barsy: t }], ooo: e, open: e, oracle: e, orange: [1, { tech: t }], organic: e, origins: e, osaka: e, otsuka: e, ott: e, ovh: [1, { nerdpol: t }], page: [1, { aem: t, hlx: t, hlx3: t, translated: t, codeberg: t, heyflow: t, prvcy: t, rocky: t, pdns: t, plesk: t }], panasonic: e, paris: e, pars: e, partners: e, parts: e, party: e, pay: e, pccw: e, pet: e, pfizer: e, pharmacy: e, phd: e, philips: e, phone: e, photo: e, photography: e, photos: Gr, physio: e, pics: e, pictet: e, pictures: [1, { 1337: t }], pid: e, pin: e, ping: e, pink: e, pioneer: e, pizza: [1, { ngrok: t }], place: g, play: e, playstation: e, plumbing: e, plus: e, pnc: e, pohl: e, poker: e, politie: e, porn: e, pramerica: e, praxi: e, press: e, prime: e, prod: e, productions: e, prof: e, progressive: e, promo: e, properties: e, property: e, protection: e, pru: e, prudential: e, pub: [1, { id: r, kin: r, barsy: t }], pwc: e, qpon: e, quebec: e, quest: e, racing: e, radio: e, read: e, realestate: e, realtor: e, realty: e, recipes: e, red: e, redstone: e, redumbrella: e, rehab: e, reise: e, reisen: e, reit: e, reliance: e, ren: e, rent: e, rentals: e, repair: e, report: e, republican: e, rest: e, restaurant: e, review: e, reviews: e, rexroth: e, rich: e, richardli: e, ricoh: e, ril: e, rio: e, rip: [1, { clan: t }], rocks: [1, { myddns: t, stackit: t, "lima-city": t, webspace: t }], rodeo: e, rogers: e, room: e, rsvp: e, rugby: e, ruhr: e, run: [1, { development: t, ravendb: t, servers: t, build: r, code: r, database: r, migration: r, onporter: t, repl: t, stackit: t, val: [0, { express: t, web: t }], wix: t }], rwe: e, ryukyu: e, saarland: e, safe: e, safety: e, sakura: e, sale: e, salon: e, samsclub: e, samsung: e, sandvik: e, sandvikcoromant: e, sanofi: e, sap: e, sarl: e, sas: e, save: e, saxo: e, sbi: e, sbs: e, scb: e, schaeffler: e, schmidt: e, scholarships: e, school: e, schule: e, schwarz: e, science: e, scot: [1, { gov: [2, { service: t }] }], search: e, seat: e, secure: e, security: e, seek: e, select: e, sener: e, services: [1, { loginline: t }], seven: e, sew: e, sex: e, sexy: e, sfr: e, shangrila: e, sharp: e, shell: e, shia: e, shiksha: e, shoes: e, shop: [1, { base: t, hoplix: t, barsy: t, barsyonline: t, shopware: t }], shopping: e, shouji: e, show: e, silk: e, sina: e, singles: e, site: [1, { canva: x, cloudera: r, convex: t, cyon: t, fnwk: t, folionetwork: t, fastvps: t, heyflow: t, jele: t, jouwweb: t, lelux: t, loginline: t, barsy: t, notion: t, omniwe: t, opensocial: t, madethis: t, platformsh: r, tst: r, byen: t, srht: t, novecore: t, wpsquared: t }], ski: e, skin: e, sky: e, skype: e, sling: e, smart: e, smile: e, sncf: e, soccer: e, social: e, softbank: e, software: e, sohu: e, solar: e, solutions: [1, { diher: t }], song: e, sony: e, soy: e, spa: e, space: [1, { myfast: t, heiyu: t, hf: [2, { static: t }], "app-ionos": t, project: t, uber: t, xs4all: t }], sport: e, spot: e, srl: e, stada: e, staples: e, star: e, statebank: e, statefarm: e, stc: e, stcgroup: e, stockholm: e, storage: e, store: [1, { barsy: t, sellfy: t, shopware: t, storebase: t }], stream: e, studio: e, study: e, style: e, sucks: e, supplies: e, supply: e, support: [1, { barsy: t }], surf: e, surgery: e, suzuki: e, swatch: e, swiss: e, sydney: e, systems: [1, { knightpoint: t }], tab: e, taipei: e, talk: e, taobao: e, target: e, tatamotors: e, tatar: e, tattoo: e, tax: e, taxi: e, tci: e, tdk: e, team: [1, { discourse: t, jelastic: t }], tech: [1, { cleverapps: t }], technology: g, temasek: e, tennis: e, teva: e, thd: e, theater: e, theatre: e, tiaa: e, tickets: e, tienda: e, tips: e, tires: e, tirol: e, tjmaxx: e, tjx: e, tkmaxx: e, tmall: e, today: [1, { prequalifyme: t }], tokyo: e, tools: e, top: [1, { "now-dns": t, ntdll: t, wadl: r }], toray: e, toshiba: e, total: e, tours: e, town: e, toyota: e, toys: e, trade: e, trading: e, training: e, travel: e, travelers: e, travelersinsurance: e, trust: e, trv: e, tube: e, tui: e, tunes: e, tushu: e, tvs: e, ubank: e, ubs: e, unicom: e, university: e, uno: e, uol: e, ups: e, vacations: e, vana: e, vanguard: e, vegas: e, ventures: e, verisign: e, versicherung: e, vet: e, viajes: e, video: e, vig: e, viking: e, villas: e, vin: e, vip: e, virgin: e, visa: e, vision: e, viva: e, vivo: e, vlaanderen: e, vodka: [1, { aaa: t }], volvo: e, vote: e, voting: e, voto: e, voyage: e, wales: e, walmart: e, walter: e, wang: e, wanggou: e, watch: e, watches: e, weather: e, weatherchannel: e, webcam: e, weber: e, website: Gr, wed: e, wedding: e, weibo: e, weir: e, whoswho: e, wien: e, wiki: Gr, williamhill: e, win: e, windows: e, wine: e, winners: e, wme: e, wolterskluwer: e, woodside: e, work: e, works: e, world: e, wow: e, wtc: e, wtf: e, xbox: e, xerox: e, xihuan: e, xin: e, "xn--11b4c3d": e, कॉम: e, "xn--1ck2e1b": e, セール: e, "xn--1qqw23a": e, 佛山: e, "xn--30rr7y": e, 慈善: e, "xn--3bst00m": e, 集团: e, "xn--3ds443g": e, 在线: e, "xn--3pxu8k": e, 点看: e, "xn--42c2d9a": e, คอม: e, "xn--45q11c": e, 八卦: e, "xn--4gbrim": e, موقع: e, "xn--55qw42g": e, 公益: e, "xn--55qx5d": e, 公司: e, "xn--5su34j936bgsg": e, 香格里拉: e, "xn--5tzm5g": e, 网站: e, "xn--6frz82g": e, 移动: e, "xn--6qq986b3xl": e, 我爱你: e, "xn--80adxhks": e, москва: e, "xn--80aqecdr1a": e, католик: e, "xn--80asehdb": e, онлайн: e, "xn--80aswg": e, сайт: e, "xn--8y0a063a": e, 联通: e, "xn--9dbq2a": e, קום: e, "xn--9et52u": e, 时尚: e, "xn--9krt00a": e, 微博: e, "xn--b4w605ferd": e, 淡马锡: e, "xn--bck1b9a5dre4c": e, ファッション: e, "xn--c1avg": e, орг: e, "xn--c2br7g": e, नेट: e, "xn--cck2b3b": e, ストア: e, "xn--cckwcxetd": e, アマゾン: e, "xn--cg4bki": e, 삼성: e, "xn--czr694b": e, 商标: e, "xn--czrs0t": e, 商店: e, "xn--czru2d": e, 商城: e, "xn--d1acj3b": e, дети: e, "xn--eckvdtc9d": e, ポイント: e, "xn--efvy88h": e, 新闻: e, "xn--fct429k": e, 家電: e, "xn--fhbei": e, كوم: e, "xn--fiq228c5hs": e, 中文网: e, "xn--fiq64b": e, 中信: e, "xn--fjq720a": e, 娱乐: e, "xn--flw351e": e, 谷歌: e, "xn--fzys8d69uvgm": e, 電訊盈科: e, "xn--g2xx48c": e, 购物: e, "xn--gckr3f0f": e, クラウド: e, "xn--gk3at1e": e, 通販: e, "xn--hxt814e": e, 网店: e, "xn--i1b6b1a6a2e": e, संगठन: e, "xn--imr513n": e, 餐厅: e, "xn--io0a7i": e, 网络: e, "xn--j1aef": e, ком: e, "xn--jlq480n2rg": e, 亚马逊: e, "xn--jvr189m": e, 食品: e, "xn--kcrx77d1x4a": e, 飞利浦: e, "xn--kput3i": e, 手机: e, "xn--mgba3a3ejt": e, ارامكو: e, "xn--mgba7c0bbn0a": e, العليان: e, "xn--mgbab2bd": e, بازار: e, "xn--mgbca7dzdo": e, ابوظبي: e, "xn--mgbi4ecexp": e, كاثوليك: e, "xn--mgbt3dhd": e, همراه: e, "xn--mk1bu44c": e, 닷컴: e, "xn--mxtq1m": e, 政府: e, "xn--ngbc5azd": e, شبكة: e, "xn--ngbe9e0a": e, بيتك: e, "xn--ngbrx": e, عرب: e, "xn--nqv7f": e, 机构: e, "xn--nqv7fs00ema": e, 组织机构: e, "xn--nyqy26a": e, 健康: e, "xn--otu796d": e, 招聘: e, "xn--p1acf": [1, { "xn--90amc": t, "xn--j1aef": t, "xn--j1ael8b": t, "xn--h1ahn": t, "xn--j1adp": t, "xn--c1avg": t, "xn--80aaa0cvac": t, "xn--h1aliz": t, "xn--90a1af": t, "xn--41a": t }], рус: [1, { биз: t, ком: t, крым: t, мир: t, мск: t, орг: t, самара: t, сочи: t, спб: t, я: t }], "xn--pssy2u": e, 大拿: e, "xn--q9jyb4c": e, みんな: e, "xn--qcka1pmc": e, グーグル: e, "xn--rhqv96g": e, 世界: e, "xn--rovu88b": e, 書籍: e, "xn--ses554g": e, 网址: e, "xn--t60b56a": e, 닷넷: e, "xn--tckwe": e, コム: e, "xn--tiq49xqyj": e, 天主教: e, "xn--unup4y": e, 游戏: e, "xn--vermgensberater-ctb": e, vermögensberater: e, "xn--vermgensberatung-pwb": e, vermögensberatung: e, "xn--vhquv": e, 企业: e, "xn--vuq861b": e, 信息: e, "xn--w4r85el8fhu5dnra": e, 嘉里大酒店: e, "xn--w4rs40l": e, 嘉里: e, "xn--xhq521b": e, 广东: e, "xn--zfr164b": e, 政务: e, xyz: [1, { telebit: r }], yachts: e, yahoo: e, yamaxun: e, yandex: e, yodobashi: e, yoga: e, yokohama: e, you: e, youtube: e, yun: e, zappos: e, zara: e, zero: e, zip: e, zone: [1, { cloud66: t, triton: r, stackit: t, lima: t }], zuerich: e }];
}();
function Hc(e, t, n, r) {
  let o = null, i = t;
  for (; i !== void 0 && (i[0] & r && (o = {
    index: n + 1,
    isIcann: i[0] === 1,
    isPrivate: i[0] === 2
  }), n !== -1); ) {
    const s = i[1];
    i = Object.prototype.hasOwnProperty.call(s, e[n]) ? s[e[n]] : s["*"], n -= 1;
  }
  return o;
}
function Jn(e, t, n) {
  var r;
  if (Vj(e, t, n))
    return;
  const o = e.split("."), i = (t.allowPrivateDomains ? 2 : 0) | (t.allowIcannDomains ? 1 : 0), s = Hc(o, Wj, o.length - 1, i);
  if (s !== null) {
    n.isIcann = s.isIcann, n.isPrivate = s.isPrivate, n.publicSuffix = o.slice(s.index + 1).join(".");
    return;
  }
  const l = Hc(o, Gj, o.length - 1, i);
  if (l !== null) {
    n.isIcann = l.isIcann, n.isPrivate = l.isPrivate, n.publicSuffix = o.slice(l.index).join(".");
    return;
  }
  n.isIcann = !1, n.isPrivate = !1, n.publicSuffix = (r = o[o.length - 1]) !== null && r !== void 0 ? r : null;
}
const Ye = uh();
function Kj(e, t = {}) {
  return Qn(e, 5, Jn, t, uh());
}
function Xj(e, t = {}) {
  return Hr(Ye), Qn(e, 0, Jn, t, Ye).hostname;
}
function Yj(e, t = {}) {
  return Hr(Ye), Qn(e, 2, Jn, t, Ye).publicSuffix;
}
function Qj(e, t = {}) {
  return Hr(Ye), Qn(e, 3, Jn, t, Ye).domain;
}
function Jj(e, t = {}) {
  return Hr(Ye), Qn(e, 4, Jn, t, Ye).subdomain;
}
function Zj(e, t = {}) {
  return Hr(Ye), Qn(e, 5, Jn, t, Ye).domainWithoutSuffix;
}
const eS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDomain: Qj,
  getDomainWithoutSuffix: Zj,
  getHostname: Xj,
  getPublicSuffix: Yj,
  getSubdomain: Jj,
  parse: Kj
}, Symbol.toStringTag, { value: "Module" })), tS = /* @__PURE__ */ Cu(eS);
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.getPublicSuffix = iS;
const nS = tS, Uc = ["local", "example", "invalid", "localhost", "test"], rS = ["localhost", "invalid"], oS = {
  allowSpecialUseDomain: !1,
  ignoreError: !1
};
function iS(e, t = {}) {
  t = { ...oS, ...t };
  const n = e.split("."), r = n[n.length - 1], o = !!t.allowSpecialUseDomain, i = !!t.ignoreError;
  if (o && r !== void 0 && Uc.includes(r)) {
    if (n.length > 1)
      return `${n[n.length - 2]}.${r}`;
    if (rS.includes(r))
      return r;
  }
  if (!i && r !== void 0 && Uc.includes(r))
    throw new Error(`Cookie has domain set to the public suffix "${r}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
  const s = (0, nS.getDomain)(e, {
    allowIcannDomains: !0,
    allowPrivateDomains: !0
  });
  if (s)
    return s;
}
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.permuteDomain = aS;
const sS = Yn;
function aS(e, t) {
  const n = (0, sS.getPublicSuffix)(e, {
    allowSpecialUseDomain: t
  });
  if (!n)
    return;
  if (n == e)
    return [e];
  e.slice(-1) == "." && (e = e.slice(0, -1));
  const o = e.slice(0, -(n.length + 1)).split(".").reverse();
  let i = n;
  const s = [i];
  for (; o.length; )
    i = `${o.shift()}.${i}`, s.push(i);
  return s;
}
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.Store = void 0;
class lS {
  constructor() {
    this.synchronous = !1;
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookie(t, n, r, o) {
    throw new Error("findCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookies(t, n, r = !1, o) {
    throw new Error("findCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  putCookie(t, n) {
    throw new Error("putCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  updateCookie(t, n, r) {
    throw new Error("updateCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookie(t, n, r, o) {
    throw new Error("removeCookie is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookies(t, n, r) {
    throw new Error("removeCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeAllCookies(t) {
    throw new Error("removeAllCookies is not implemented");
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  getAllCookies(t) {
    throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
  }
}
Zn.Store = lS;
var Ur = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.safeToString = e.objectToString = void 0, e.createPromiseCallback = i, e.inOperator = s;
  const t = (l) => Object.prototype.toString.call(l);
  e.objectToString = t;
  const n = (l, c) => typeof l.join != "function" ? (0, e.objectToString)(l) : (c.add(l), l.map((d) => d == null || c.has(d) ? "" : r(d, c)).join()), r = (l, c = /* @__PURE__ */ new WeakSet()) => typeof l != "object" || l === null ? String(l) : typeof l.toString == "function" ? Array.isArray(l) ? (
    // Arrays have a weird custom toString that we need to replicate
    n(l, c)
  ) : String(l) : (0, e.objectToString)(l), o = (l) => r(l);
  e.safeToString = o;
  function i(l) {
    let c, u, d;
    const p = new Promise((h, f) => {
      u = h, d = f;
    });
    return typeof l == "function" ? c = (h, f) => {
      try {
        h ? l(h) : l(null, f);
      } catch (g) {
        d(g instanceof Error ? g : new Error());
      }
    } : c = (h, f) => {
      try {
        h ? d(h) : u(f);
      } catch (g) {
        d(g instanceof Error ? g : new Error());
      }
    }, {
      promise: p,
      callback: c,
      resolve: (h) => (c(null, h), p),
      reject: (h) => (c(h), p)
    };
  }
  function s(l, c) {
    return l in c;
  }
})(Ur);
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.MemoryCookieStore = void 0;
const cS = Br, uS = yi, dS = Zn, Ht = Ur;
class fS extends dS.Store {
  /**
   * Create a new {@link MemoryCookieStore}.
   */
  constructor() {
    super(), this.synchronous = !0, this.idx = /* @__PURE__ */ Object.create(null);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookie(t, n, r, o) {
    var l, c;
    const i = (0, Ht.createPromiseCallback)(o);
    if (t == null || n == null || r == null)
      return i.resolve(void 0);
    const s = (c = (l = this.idx[t]) == null ? void 0 : l[n]) == null ? void 0 : c[r];
    return i.resolve(s);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  findCookies(t, n, r = !1, o) {
    typeof r == "function" && (o = r, r = !0);
    const i = [], s = (0, Ht.createPromiseCallback)(o);
    if (!t)
      return s.resolve([]);
    let l;
    n ? l = function(p) {
      for (const h in p)
        if ((0, cS.pathMatch)(n, h)) {
          const f = p[h];
          for (const g in f) {
            const m = f[g];
            m && i.push(m);
          }
        }
    } : l = function(p) {
      for (const h in p) {
        const f = p[h];
        for (const g in f) {
          const m = f[g];
          m && i.push(m);
        }
      }
    };
    const c = (0, uS.permuteDomain)(t, r) || [t], u = this.idx;
    return c.forEach((d) => {
      const p = u[d];
      p && l(p);
    }), s.resolve(i);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  putCookie(t, n) {
    const r = (0, Ht.createPromiseCallback)(n), { domain: o, path: i, key: s } = t;
    if (o == null || i == null || s == null)
      return r.resolve(void 0);
    const l = this.idx[o] ?? /* @__PURE__ */ Object.create(null);
    this.idx[o] = l;
    const c = l[i] ?? /* @__PURE__ */ Object.create(null);
    return l[i] = c, c[s] = t, r.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  updateCookie(t, n, r) {
    if (r)
      this.putCookie(n, r);
    else
      return this.putCookie(n);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookie(t, n, r, o) {
    var s, l;
    const i = (0, Ht.createPromiseCallback)(o);
    return (l = (s = this.idx[t]) == null ? void 0 : s[n]) == null || delete l[r], i.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeCookies(t, n, r) {
    const o = (0, Ht.createPromiseCallback)(r), i = this.idx[t];
    return i && (n ? delete i[n] : delete this.idx[t]), o.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  removeAllCookies(t) {
    const n = (0, Ht.createPromiseCallback)(t);
    return this.idx = /* @__PURE__ */ Object.create(null), n.resolve(void 0);
  }
  /**
   * @internal No doc because this is an overload that supports the implementation
   */
  getAllCookies(t) {
    const n = (0, Ht.createPromiseCallback)(t), r = [], o = this.idx;
    return Object.keys(o).forEach((s) => {
      const l = o[s] ?? {};
      Object.keys(l).forEach((u) => {
        const d = l[u] ?? {};
        Object.keys(d).forEach((h) => {
          const f = d[h];
          f != null && r.push(f);
        });
      });
    }), r.sort((s, l) => (s.creationIndex || 0) - (l.creationIndex || 0)), n.resolve(r);
  }
}
Lr.MemoryCookieStore = fS;
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.ParameterError = void 0;
Ee.isNonEmptyString = hS;
Ee.isDate = pS;
Ee.isEmptyString = gS;
Ee.isString = fh;
Ee.isObject = hh;
Ee.isInteger = ph;
Ee.validate = mS;
const dh = Ur;
function hS(e) {
  return fh(e) && e !== "";
}
function pS(e) {
  return e instanceof Date && ph(e.getTime());
}
function gS(e) {
  return e === "" || e instanceof String && e.toString() === "";
}
function fh(e) {
  return typeof e == "string" || e instanceof String;
}
function hh(e) {
  return (0, dh.objectToString)(e) === "[object Object]";
}
function ph(e) {
  return typeof e == "number" && e % 1 === 0;
}
function mS(e, t, n) {
  if (e)
    return;
  const r = typeof t == "function" ? t : void 0;
  let o = typeof t == "function" ? n : t;
  hh(o) || (o = "[object Object]");
  const i = new gh((0, dh.safeToString)(o));
  if (r)
    r(i);
  else
    throw i;
}
class gh extends Error {
}
Ee.ParameterError = gh;
var Vr = {};
Object.defineProperty(Vr, "__esModule", { value: !0 });
Vr.version = void 0;
Vr.version = "5.0.0";
var er = {}, Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.IP_V6_REGEX_OBJECT = Ot.PrefixSecurityEnum = void 0;
Ot.PrefixSecurityEnum = Object.freeze({
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
});
const yS = `
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
Ot.IP_V6_REGEX_OBJECT = new RegExp(`^${yS}$`);
const vS = {}, xS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vS
}, Symbol.toStringTag, { value: "Module" })), bS = /* @__PURE__ */ Cu(xS);
Object.defineProperty(er, "__esModule", { value: !0 });
er.canonicalDomain = wS;
const kS = Ot, Vc = bS;
function wS(e) {
  if (e == null)
    return;
  let t = e.trim().replace(/^\./, "");
  return kS.IP_V6_REGEX_OBJECT.test(t) ? (t.startsWith("[") || (t = "[" + t), t.endsWith("]") || (t = t + "]"), (0, Vc.domainToASCII)(t).slice(1, -1)) : /[^\u0001-\u007f]/.test(t) ? (0, Vc.domainToASCII)(t) : t.toLowerCase();
}
var Rn = {}, vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.formatDate = jS;
function jS(e) {
  return e.toUTCString();
}
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.parseDate = ES;
const SS = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, Ie = {
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
function $s(e, t, n, r) {
  let o = 0;
  for (; o < e.length; ) {
    const i = e.charCodeAt(o);
    if (i <= 47 || i >= 58)
      break;
    o++;
  }
  if (!(o < t || o > n) && !(!r && o != e.length))
    return parseInt(e.slice(0, o), 10);
}
function CS(e) {
  const t = e.split(":"), n = [0, 0, 0];
  if (t.length === 3) {
    for (let r = 0; r < 3; r++) {
      const o = r == 2, i = t[r];
      if (i === void 0)
        return;
      const s = $s(i, 1, 2, o);
      if (s === void 0)
        return;
      n[r] = s;
    }
    return n;
  }
}
function _S(e) {
  switch (e = String(e).slice(0, 3).toLowerCase(), e) {
    case "jan":
      return Ie.jan;
    case "feb":
      return Ie.feb;
    case "mar":
      return Ie.mar;
    case "apr":
      return Ie.apr;
    case "may":
      return Ie.may;
    case "jun":
      return Ie.jun;
    case "jul":
      return Ie.jul;
    case "aug":
      return Ie.aug;
    case "sep":
      return Ie.sep;
    case "oct":
      return Ie.oct;
    case "nov":
      return Ie.nov;
    case "dec":
      return Ie.dec;
    default:
      return;
  }
}
function ES(e) {
  if (!e)
    return;
  const t = e.split(SS);
  let n, r, o, i, s, l;
  for (let c = 0; c < t.length; c++) {
    const u = (t[c] ?? "").trim();
    if (u.length) {
      if (o === void 0) {
        const d = CS(u);
        if (d) {
          n = d[0], r = d[1], o = d[2];
          continue;
        }
      }
      if (i === void 0) {
        const d = $s(u, 1, 2, !0);
        if (d !== void 0) {
          i = d;
          continue;
        }
      }
      if (s === void 0) {
        const d = _S(u);
        if (d !== void 0) {
          s = d;
          continue;
        }
      }
      if (l === void 0) {
        const d = $s(u, 2, 4, !0);
        d !== void 0 && (l = d, l >= 70 && l <= 99 ? l += 1900 : l >= 0 && l <= 69 && (l += 2e3));
      }
    }
  }
  if (!(i === void 0 || s === void 0 || l === void 0 || n === void 0 || r === void 0 || o === void 0 || i < 1 || i > 31 || l < 1601 || n > 23 || r > 59 || o > 59))
    return new Date(Date.UTC(l, s, i, n, r, o));
}
var TS = ze && ze.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), OS = ze && ze.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), $S = ze && ze.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && TS(t, e, n);
  return OS(t, e), t;
};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.Cookie = void 0;
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
const IS = Yn, Do = $S(Ee), Wc = Ur, DS = vi, Is = xi, Gc = er, PS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, zS = /[\x20-\x3A\x3C-\x7E]+/, Kc = /[\x00-\x1F]/, Xc = [`
`, "\r", "\0"];
function AS(e) {
  if (Do.isEmptyString(e))
    return e;
  for (let t = 0; t < Xc.length; t++) {
    const n = Xc[t], r = n ? e.indexOf(n) : -1;
    r !== -1 && (e = e.slice(0, r));
  }
  return e;
}
function RS(e, t) {
  e = AS(e);
  let n = e.indexOf("=");
  if (t)
    n === 0 && (e = e.substring(1), n = e.indexOf("="));
  else if (n <= 0)
    return;
  let r, o;
  if (n <= 0 ? (r = "", o = e.trim()) : (r = e.slice(0, n).trim(), o = e.slice(n + 1).trim()), Kc.test(r) || Kc.test(o))
    return;
  const i = new me();
  return i.key = r, i.value = o, i;
}
function NS(e, t) {
  if (Do.isEmptyString(e) || !Do.isString(e))
    return;
  e = e.trim();
  const n = e.indexOf(";"), r = n === -1 ? e : e.slice(0, n), o = RS(r, (t == null ? void 0 : t.loose) ?? !1);
  if (!o)
    return;
  if (n === -1)
    return o;
  const i = e.slice(n + 1).trim();
  if (i.length === 0)
    return o;
  const s = i.split(";");
  for (; s.length; ) {
    const l = (s.shift() ?? "").trim();
    if (l.length === 0)
      continue;
    const c = l.indexOf("=");
    let u, d;
    switch (c === -1 ? (u = l, d = null) : (u = l.slice(0, c), d = l.slice(c + 1)), u = u.trim().toLowerCase(), d && (d = d.trim()), u) {
      case "expires":
        if (d) {
          const p = (0, Is.parseDate)(d);
          p && (o.expires = p);
        }
        break;
      case "max-age":
        if (d && /^-?[0-9]+$/.test(d)) {
          const p = parseInt(d, 10);
          o.setMaxAge(p);
        }
        break;
      case "domain":
        if (d) {
          const p = d.trim().replace(/^\./, "");
          p && (o.domain = p.toLowerCase());
        }
        break;
      case "path":
        o.path = d && d[0] === "/" ? d : null;
        break;
      case "secure":
        o.secure = !0;
        break;
      case "httponly":
        o.httpOnly = !0;
        break;
      case "samesite":
        switch (d ? d.toLowerCase() : "") {
          case "strict":
            o.sameSite = "strict";
            break;
          case "lax":
            o.sameSite = "lax";
            break;
          case "none":
            o.sameSite = "none";
            break;
          default:
            o.sameSite = void 0;
            break;
        }
        break;
      default:
        o.extensions = o.extensions || [], o.extensions.push(l);
        break;
    }
  }
  return o;
}
function Yc(e) {
  if (!e || Do.isEmptyString(e))
    return;
  let t;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      return;
    }
  else
    t = e;
  const n = new me();
  return me.serializableProperties.forEach((r) => {
    if (t && typeof t == "object" && (0, Wc.inOperator)(r, t)) {
      const o = t[r];
      if (o === void 0 || (0, Wc.inOperator)(r, fe) && o === fe[r])
        return;
      switch (r) {
        case "key":
        case "value":
        case "sameSite":
          typeof o == "string" && (n[r] = o);
          break;
        case "expires":
        case "creation":
        case "lastAccessed":
          typeof o == "number" || typeof o == "string" || o instanceof Date ? n[r] = t[r] == "Infinity" ? "Infinity" : new Date(o) : o === null && (n[r] = null);
          break;
        case "maxAge":
          (typeof o == "number" || o === "Infinity" || o === "-Infinity") && (n[r] = o);
          break;
        case "domain":
        case "path":
          (typeof o == "string" || o === null) && (n[r] = o);
          break;
        case "secure":
        case "httpOnly":
          typeof o == "boolean" && (n[r] = o);
          break;
        case "extensions":
          Array.isArray(o) && o.every((i) => typeof i == "string") && (n[r] = o);
          break;
        case "hostOnly":
        case "pathIsDefault":
          (typeof o == "boolean" || o === null) && (n[r] = o);
          break;
      }
    }
  }), n;
}
const fe = {
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
class me {
  /**
   * Create a new Cookie instance.
   * @public
   * @param options - The attributes to set on the cookie
   */
  constructor(t = {}) {
    this.key = t.key ?? fe.key, this.value = t.value ?? fe.value, this.expires = t.expires ?? fe.expires, this.maxAge = t.maxAge ?? fe.maxAge, this.domain = t.domain ?? fe.domain, this.path = t.path ?? fe.path, this.secure = t.secure ?? fe.secure, this.httpOnly = t.httpOnly ?? fe.httpOnly, this.extensions = t.extensions ?? fe.extensions, this.creation = t.creation ?? fe.creation, this.hostOnly = t.hostOnly ?? fe.hostOnly, this.pathIsDefault = t.pathIsDefault ?? fe.pathIsDefault, this.lastAccessed = t.lastAccessed ?? fe.lastAccessed, this.sameSite = t.sameSite ?? fe.sameSite, this.creation = t.creation ?? /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
      configurable: !1,
      enumerable: !1,
      // important for assert.deepEqual checks
      writable: !0,
      value: ++me.cookiesCreated
    }), this.creationIndex = me.cookiesCreated;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    const t = Date.now(), n = this.hostOnly != null ? this.hostOnly.toString() : "?", r = this.creation && this.creation !== "Infinity" ? `${String(t - this.creation.getTime())}ms` : "?", o = this.lastAccessed && this.lastAccessed !== "Infinity" ? `${String(t - this.lastAccessed.getTime())}ms` : "?";
    return `Cookie="${this.toString()}; hostOnly=${n}; aAge=${o}; cAge=${r}"`;
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
    const t = {};
    for (const n of me.serializableProperties) {
      const r = this[n];
      if (r !== fe[n])
        switch (n) {
          case "key":
          case "value":
          case "sameSite":
            typeof r == "string" && (t[n] = r);
            break;
          case "expires":
          case "creation":
          case "lastAccessed":
            typeof r == "number" || typeof r == "string" || r instanceof Date ? t[n] = r == "Infinity" ? "Infinity" : new Date(r).toISOString() : r === null && (t[n] = null);
            break;
          case "maxAge":
            (typeof r == "number" || r === "Infinity" || r === "-Infinity") && (t[n] = r);
            break;
          case "domain":
          case "path":
            (typeof r == "string" || r === null) && (t[n] = r);
            break;
          case "secure":
          case "httpOnly":
            typeof r == "boolean" && (t[n] = r);
            break;
          case "extensions":
            Array.isArray(r) && (t[n] = r);
            break;
          case "hostOnly":
          case "pathIsDefault":
            (typeof r == "boolean" || r === null) && (t[n] = r);
            break;
        }
    }
    return t;
  }
  /**
   * Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.
   * @public
   */
  clone() {
    return Yc(this.toJSON());
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
    if (!this.value || !PS.test(this.value) || this.expires != "Infinity" && !(this.expires instanceof Date) && !(0, Is.parseDate)(this.expires) || this.maxAge != null && this.maxAge !== "Infinity" && (this.maxAge === "-Infinity" || this.maxAge <= 0) || this.path != null && !zS.test(this.path))
      return !1;
    const t = this.cdomain();
    return !(t && (t.match(/\.$/) || (0, IS.getPublicSuffix)(t) == null));
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
  setExpires(t) {
    t instanceof Date ? this.expires = t : this.expires = (0, Is.parseDate)(t) || "Infinity";
  }
  /**
   * Sets the 'Max-Age' attribute (in seconds) on a cookie.
   *
   * @remarks
   * Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it can be serialized to JSON.
   *
   * @param age - the new value for the 'Max-Age' attribute (in seconds).
   */
  setMaxAge(t) {
    t === 1 / 0 ? this.maxAge = "Infinity" : t === -1 / 0 ? this.maxAge = "-Infinity" : this.maxAge = t;
  }
  /**
   * Encodes to a `Cookie` header value (specifically, the {@link Cookie.key} and {@link Cookie.value} properties joined with "=").
   * @public
   */
  cookieString() {
    const t = this.value || "";
    return this.key ? `${this.key}=${t}` : t;
  }
  /**
   * Encodes to a `Set-Cookie header` value.
   * @public
   */
  toString() {
    let t = this.cookieString();
    return this.expires != "Infinity" && this.expires instanceof Date && (t += `; Expires=${(0, DS.formatDate)(this.expires)}`), this.maxAge != null && this.maxAge != 1 / 0 && (t += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (t += `; Domain=${this.domain}`), this.path && (t += `; Path=${this.path}`), this.secure && (t += "; Secure"), this.httpOnly && (t += "; HttpOnly"), this.sameSite && this.sameSite !== "none" && (this.sameSite.toLowerCase() === me.sameSiteCanonical.lax.toLowerCase() ? t += `; SameSite=${me.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === me.sameSiteCanonical.strict.toLowerCase() ? t += `; SameSite=${me.sameSiteCanonical.strict}` : t += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((n) => {
      t += `; ${n}`;
    }), t;
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
  TTL(t = Date.now()) {
    if (this.maxAge != null && typeof this.maxAge == "number")
      return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
    const n = this.expires;
    return n === "Infinity" ? 1 / 0 : ((n == null ? void 0 : n.getTime()) ?? t) - (t || Date.now());
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
  expiryTime(t) {
    if (this.maxAge != null) {
      const n = t || this.lastAccessed || /* @__PURE__ */ new Date(), r = typeof this.maxAge == "number" ? this.maxAge : -1 / 0, o = r <= 0 ? -1 / 0 : r * 1e3;
      return n === "Infinity" ? 1 / 0 : n.getTime() + o;
    }
    return this.expires == "Infinity" ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
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
    return (0, Gc.canonicalDomain)(this.domain);
  }
  /**
   * Alias for {@link Cookie.canonicalizedDomain}
   * @public
   */
  cdomain() {
    return (0, Gc.canonicalDomain)(this.domain);
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
  static parse(t, n) {
    return NS(t, n);
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
  static fromJSON(t) {
    return Yc(t);
  }
}
Rn.Cookie = me;
me.cookiesCreated = 0;
me.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
me.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};
me.serializableProperties = [
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
];
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.cookieCompare = MS;
const Qc = 2147483647e3;
function MS(e, t) {
  let n;
  const r = e.path ? e.path.length : 0;
  if (n = (t.path ? t.path.length : 0) - r, n !== 0)
    return n;
  const i = e.creation && e.creation instanceof Date ? e.creation.getTime() : Qc, s = t.creation && t.creation instanceof Date ? t.creation.getTime() : Qc;
  return n = i - s, n !== 0 || (n = (e.creationIndex || 0) - (t.creationIndex || 0)), n;
}
var ki = {}, wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.defaultPath = qS;
function qS(e) {
  if (!e || e.slice(0, 1) !== "/")
    return "/";
  if (e === "/")
    return e;
  const t = e.lastIndexOf("/");
  return t === 0 ? "/" : e.slice(0, t);
}
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.domainMatch = LS;
const Jc = er, FS = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
function LS(e, t, n) {
  if (e == null || t == null)
    return;
  let r, o;
  if (n !== !1 ? (r = (0, Jc.canonicalDomain)(e), o = (0, Jc.canonicalDomain)(t)) : (r = e, o = t), r == null || o == null)
    return;
  if (r == o)
    return !0;
  const i = r.lastIndexOf(t);
  return i <= 0 || r.length !== o.length + i || r.substring(i - 1, i) !== "." ? !1 : !FS.test(r);
}
var BS = ze && ze.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), HS = ze && ze.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), US = ze && ze.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && BS(t, e, n);
  return HS(t, e), t;
};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.CookieJar = void 0;
const VS = Yn, Re = US(Ee), WS = Ee, GS = Zn, KS = Lr, XS = Br, nt = Rn, Te = Ur, Zc = er, Gt = Ot, YS = wi, eu = ji, tu = bi, QS = Vr, JS = {
  loose: !1,
  sameSiteContext: void 0,
  ignoreError: !1,
  http: !0
}, nu = {
  http: !0,
  expire: !0,
  allPaths: !1,
  sameSiteContext: void 0,
  sort: void 0
}, Ki = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function ru(e) {
  if (e && typeof e == "object" && "hostname" in e && typeof e.hostname == "string" && "pathname" in e && typeof e.pathname == "string" && "protocol" in e && typeof e.protocol == "string")
    return {
      hostname: e.hostname,
      pathname: e.pathname,
      protocol: e.protocol
    };
  if (typeof e == "string")
    try {
      return new URL(decodeURI(e));
    } catch {
      return new URL(e);
    }
  else
    throw new WS.ParameterError("`url` argument is not a string or URL.");
}
function ou(e) {
  const t = String(e).toLowerCase();
  if (t === "none" || t === "lax" || t === "strict")
    return t;
}
function ZS(e) {
  return !(typeof e.key == "string" && e.key.startsWith("__Secure-")) || e.secure;
}
function eC(e) {
  return !(typeof e.key == "string" && e.key.startsWith("__Host-")) || !!(e.secure && e.hostOnly && e.path != null && e.path === "/");
}
function io(e) {
  const t = e.toLowerCase();
  switch (t) {
    case Gt.PrefixSecurityEnum.STRICT:
    case Gt.PrefixSecurityEnum.SILENT:
    case Gt.PrefixSecurityEnum.DISABLED:
      return t;
    default:
      return Gt.PrefixSecurityEnum.SILENT;
  }
}
class wn {
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
  constructor(t, n) {
    typeof n == "boolean" && (n = { rejectPublicSuffixes: n }), this.rejectPublicSuffixes = (n == null ? void 0 : n.rejectPublicSuffixes) ?? !0, this.enableLooseMode = (n == null ? void 0 : n.looseMode) ?? !1, this.allowSpecialUseDomain = (n == null ? void 0 : n.allowSpecialUseDomain) ?? !0, this.prefixSecurity = io((n == null ? void 0 : n.prefixSecurity) ?? "silent"), this.store = t ?? new KS.MemoryCookieStore();
  }
  callSync(t) {
    if (!this.store.synchronous)
      throw new Error("CookieJar store is not synchronous; use async API instead.");
    let n = null, r;
    try {
      t.call(this, (o, i) => {
        n = o, r = i;
      });
    } catch (o) {
      n = o;
    }
    if (n)
      throw n;
    return r;
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  setCookie(t, n, r, o) {
    typeof r == "function" && (o = r, r = void 0);
    const i = (0, Te.createPromiseCallback)(o), s = i.callback;
    let l;
    try {
      if (typeof n == "string" && Re.validate(Re.isNonEmptyString(n), o, (0, Te.safeToString)(r)), l = ru(n), typeof n == "function")
        return i.reject(new Error("No URL was specified"));
      if (typeof r == "function" && (r = JS), Re.validate(typeof s == "function", s), !Re.isNonEmptyString(t) && !Re.isObject(t) && t instanceof String && t.length == 0)
        return i.resolve(void 0);
    } catch (y) {
      return i.reject(y);
    }
    const c = (0, Zc.canonicalDomain)(l.hostname) ?? null, u = (r == null ? void 0 : r.loose) || this.enableLooseMode;
    let d = null;
    if (r != null && r.sameSiteContext && (d = ou(r.sameSiteContext), !d))
      return i.reject(new Error(Ki));
    if (typeof t == "string" || t instanceof String) {
      const y = nt.Cookie.parse(t.toString(), { loose: u });
      if (!y) {
        const x = new Error("Cookie failed to parse");
        return r != null && r.ignoreError ? i.resolve(void 0) : i.reject(x);
      }
      t = y;
    } else if (!(t instanceof nt.Cookie)) {
      const y = new Error("First argument to setCookie must be a Cookie object or string");
      return r != null && r.ignoreError ? i.resolve(void 0) : i.reject(y);
    }
    const p = (r == null ? void 0 : r.now) || /* @__PURE__ */ new Date();
    if (this.rejectPublicSuffixes && t.domain)
      try {
        const y = t.cdomain();
        if ((typeof y == "string" ? (0, VS.getPublicSuffix)(y, {
          allowSpecialUseDomain: this.allowSpecialUseDomain,
          ignoreError: r == null ? void 0 : r.ignoreError
        }) : null) == null && !Gt.IP_V6_REGEX_OBJECT.test(t.domain)) {
          const b = new Error("Cookie has domain set to a public suffix");
          return r != null && r.ignoreError ? i.resolve(void 0) : i.reject(b);
        }
      } catch (y) {
        return r != null && r.ignoreError ? i.resolve(void 0) : (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          i.reject(y)
        );
      }
    if (t.domain) {
      if (!(0, eu.domainMatch)(c ?? void 0, t.cdomain() ?? void 0, !1)) {
        const y = new Error(`Cookie not in this host's domain. Cookie:${t.cdomain() ?? "null"} Request:${c ?? "null"}`);
        return r != null && r.ignoreError ? i.resolve(void 0) : i.reject(y);
      }
      t.hostOnly == null && (t.hostOnly = !1);
    } else
      t.hostOnly = !0, t.domain = c;
    if ((!t.path || t.path[0] !== "/") && (t.path = (0, YS.defaultPath)(l.pathname), t.pathIsDefault = !0), (r == null ? void 0 : r.http) === !1 && t.httpOnly) {
      const y = new Error("Cookie is HttpOnly and this isn't an HTTP API");
      return r.ignoreError ? i.resolve(void 0) : i.reject(y);
    }
    if (t.sameSite !== "none" && t.sameSite !== void 0 && d && d === "none") {
      const y = new Error("Cookie is SameSite but this is a cross-origin request");
      return r != null && r.ignoreError ? i.resolve(void 0) : i.reject(y);
    }
    const h = this.prefixSecurity === Gt.PrefixSecurityEnum.SILENT;
    if (!(this.prefixSecurity === Gt.PrefixSecurityEnum.DISABLED)) {
      let y = !1, x;
      if (ZS(t) ? eC(t) || (y = !0, x = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (y = !0, x = "Cookie has __Secure prefix but Secure attribute is not set"), y)
        return r != null && r.ignoreError || h ? i.resolve(void 0) : i.reject(new Error(x));
    }
    const g = this.store;
    g.updateCookie || (g.updateCookie = async function(y, x, b) {
      return this.putCookie(x).then(() => b == null ? void 0 : b(null), (w) => b == null ? void 0 : b(w));
    });
    const m = function(x, b) {
      if (x) {
        s(x);
        return;
      }
      const w = function(C) {
        C ? s(C) : typeof t == "string" ? s(null, void 0) : s(null, t);
      };
      if (b) {
        if (r && "http" in r && r.http === !1 && b.httpOnly) {
          x = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), r.ignoreError ? s(null, void 0) : s(x);
          return;
        }
        t instanceof nt.Cookie && (t.creation = b.creation, t.creationIndex = b.creationIndex, t.lastAccessed = p, g.updateCookie(b, t, w));
      } else
        t instanceof nt.Cookie && (t.creation = t.lastAccessed = p, g.putCookie(t, w));
    };
    return g.findCookie(t.domain, t.path, t.key, m), i.promise;
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
  setCookieSync(t, n, r) {
    const o = r ? this.setCookie.bind(this, t, n, r) : this.setCookie.bind(this, t, n);
    return this.callSync(o);
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getCookies(t, n, r) {
    typeof n == "function" ? (r = n, n = nu) : n === void 0 && (n = nu);
    const o = (0, Te.createPromiseCallback)(r), i = o.callback;
    let s;
    try {
      typeof t == "string" && Re.validate(Re.isNonEmptyString(t), i, t), s = ru(t), Re.validate(Re.isObject(n), i, (0, Te.safeToString)(n)), Re.validate(typeof i == "function", i);
    } catch (x) {
      return o.reject(x);
    }
    const l = (0, Zc.canonicalDomain)(s.hostname), c = s.pathname || "/", u = s.protocol && (s.protocol == "https:" || s.protocol == "wss:");
    let d = 0;
    if (n.sameSiteContext) {
      const x = ou(n.sameSiteContext);
      if (x == null)
        return o.reject(new Error(Ki));
      if (d = nt.Cookie.sameSiteLevel[x], !d)
        return o.reject(new Error(Ki));
    }
    const p = n.http ?? !0, h = Date.now(), f = n.expire ?? !0, g = n.allPaths ?? !1, m = this.store;
    function y(x) {
      if (x.hostOnly) {
        if (x.domain != l)
          return !1;
      } else if (!(0, eu.domainMatch)(l ?? void 0, x.domain ?? void 0, !1))
        return !1;
      if (!g && typeof x.path == "string" && !(0, XS.pathMatch)(c, x.path) || x.secure && !u || x.httpOnly && !p)
        return !1;
      if (d) {
        let w;
        if (x.sameSite === "lax" ? w = nt.Cookie.sameSiteLevel.lax : x.sameSite === "strict" ? w = nt.Cookie.sameSiteLevel.strict : w = nt.Cookie.sameSiteLevel.none, w > d)
          return !1;
      }
      const b = x.expiryTime();
      return f && b && b <= h ? (m.removeCookie(x.domain, x.path, x.key, () => {
      }), !1) : !0;
    }
    return m.findCookies(l, g ? null : c, this.allowSpecialUseDomain, (x, b) => {
      if (x) {
        i(x);
        return;
      }
      if (b == null) {
        i(null, []);
        return;
      }
      b = b.filter(y), "sort" in n && n.sort !== !1 && (b = b.sort(tu.cookieCompare));
      const w = /* @__PURE__ */ new Date();
      for (const C of b)
        C.lastAccessed = w;
      i(null, b);
    }), o.promise;
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
  getCookiesSync(t, n) {
    return this.callSync(this.getCookies.bind(this, t, n)) ?? [];
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getCookieString(t, n, r) {
    typeof n == "function" && (r = n, n = void 0);
    const o = (0, Te.createPromiseCallback)(r), i = function(s, l) {
      s ? o.callback(s) : o.callback(null, l == null ? void 0 : l.sort(tu.cookieCompare).map((c) => c.cookieString()).join("; "));
    };
    return this.getCookies(t, n, i), o.promise;
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
  getCookieStringSync(t, n) {
    return this.callSync(n ? this.getCookieString.bind(this, t, n) : this.getCookieString.bind(this, t)) ?? "";
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  getSetCookieStrings(t, n, r) {
    typeof n == "function" && (r = n, n = void 0);
    const o = (0, Te.createPromiseCallback)(r), i = function(s, l) {
      s ? o.callback(s) : o.callback(null, l == null ? void 0 : l.map((c) => c.toString()));
    };
    return this.getCookies(t, n, i), o.promise;
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
  getSetCookieStringsSync(t, n = {}) {
    return this.callSync(this.getSetCookieStrings.bind(this, t, n)) ?? [];
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  serialize(t) {
    const n = (0, Te.createPromiseCallback)(t);
    let r = this.store.constructor.name;
    Re.isObject(r) && (r = null);
    const o = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${QS.version}`,
      // add the store type, to make humans happy:
      storeType: r,
      // CookieJar configuration:
      rejectPublicSuffixes: this.rejectPublicSuffixes,
      enableLooseMode: this.enableLooseMode,
      allowSpecialUseDomain: this.allowSpecialUseDomain,
      prefixSecurity: io(this.prefixSecurity),
      // this gets filled from getAllCookies:
      cookies: []
    };
    return typeof this.store.getAllCookies != "function" ? n.reject(new Error("store does not support getAllCookies and cannot be serialized")) : (this.store.getAllCookies((i, s) => {
      if (i) {
        n.callback(i);
        return;
      }
      if (s == null) {
        n.callback(null, o);
        return;
      }
      o.cookies = s.map((l) => {
        const c = l.toJSON();
        return delete c.creationIndex, c;
      }), n.callback(null, o);
    }), n.promise);
  }
  /**
   * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
   *
   * <strong>Note</strong>: Only works if the configured Store is also synchronous.
   */
  serializeSync() {
    return this.callSync((t) => {
      this.serialize(t);
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
  _importCookies(t, n) {
    let r;
    if (t && typeof t == "object" && (0, Te.inOperator)("cookies", t) && Array.isArray(t.cookies) && (r = t.cookies), !r) {
      n(new Error("serialized jar has no cookies array"), void 0);
      return;
    }
    r = r.slice();
    const o = (i) => {
      if (i) {
        n(i, void 0);
        return;
      }
      if (Array.isArray(r)) {
        if (!r.length) {
          n(i, this);
          return;
        }
        let s;
        try {
          s = nt.Cookie.fromJSON(r.shift());
        } catch (l) {
          n(l instanceof Error ? l : new Error(), void 0);
          return;
        }
        if (s === void 0) {
          o(null);
          return;
        }
        this.store.putCookie(s, o);
      }
    };
    o(null);
  }
  /**
   * @internal
   */
  _importCookiesSync(t) {
    this.callSync(this._importCookies.bind(this, t));
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  clone(t, n) {
    typeof t == "function" && (n = t, t = void 0);
    const r = (0, Te.createPromiseCallback)(n), o = r.callback;
    return this.serialize((i, s) => i ? r.reject(i) : wn.deserialize(s ?? "", t, o)), r.promise;
  }
  /**
   * @internal
   */
  _cloneSync(t) {
    const n = t && typeof t != "function" ? this.clone.bind(this, t) : this.clone.bind(this);
    return this.callSync((r) => {
      n(r);
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
  cloneSync(t) {
    if (!t)
      return this._cloneSync();
    if (!t.synchronous)
      throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
    return this._cloneSync(t);
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  removeAllCookies(t) {
    const n = (0, Te.createPromiseCallback)(t), r = n.callback, o = this.store;
    return typeof o.removeAllCookies == "function" && o.removeAllCookies !== GS.Store.prototype.removeAllCookies ? (o.removeAllCookies(r), n.promise) : (o.getAllCookies((i, s) => {
      if (i) {
        r(i);
        return;
      }
      if (s || (s = []), s.length === 0) {
        r(null, void 0);
        return;
      }
      let l = 0;
      const c = [], u = function(p) {
        if (p && c.push(p), l++, l === s.length) {
          c[0] ? r(c[0]) : r(null, void 0);
          return;
        }
      };
      s.forEach((d) => {
        o.removeCookie(d.domain, d.path, d.key, u);
      });
    }), n.promise);
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
    this.callSync((t) => {
      this.removeAllCookies(t);
    });
  }
  /**
   * @internal No doc because this is the overload implementation
   */
  static deserialize(t, n, r) {
    typeof n == "function" && (r = n, n = void 0);
    const o = (0, Te.createPromiseCallback)(r);
    let i;
    if (typeof t == "string")
      try {
        i = JSON.parse(t);
      } catch (d) {
        return o.reject(d instanceof Error ? d : new Error());
      }
    else
      i = t;
    const s = (d) => i && typeof i == "object" && (0, Te.inOperator)(d, i) ? i[d] : void 0, l = (d) => {
      const p = s(d);
      return typeof p == "boolean" ? p : void 0;
    }, c = (d) => {
      const p = s(d);
      return typeof p == "string" ? p : void 0;
    }, u = new wn(n, {
      rejectPublicSuffixes: l("rejectPublicSuffixes"),
      looseMode: l("enableLooseMode"),
      allowSpecialUseDomain: l("allowSpecialUseDomain"),
      prefixSecurity: io(c("prefixSecurity") ?? "silent")
    });
    return u._importCookies(i, (d) => {
      if (d) {
        o.callback(d);
        return;
      }
      o.callback(null, u);
    }), o.promise;
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
  static deserializeSync(t, n) {
    const r = typeof t == "string" ? JSON.parse(t) : t, o = (c) => r && typeof r == "object" && (0, Te.inOperator)(c, r) ? r[c] : void 0, i = (c) => {
      const u = o(c);
      return typeof u == "boolean" ? u : void 0;
    }, s = (c) => {
      const u = o(c);
      return typeof u == "string" ? u : void 0;
    }, l = new wn(n, {
      rejectPublicSuffixes: i("rejectPublicSuffixes"),
      looseMode: i("enableLooseMode"),
      allowSpecialUseDomain: i("allowSpecialUseDomain"),
      prefixSecurity: io(s("prefixSecurity") ?? "silent")
    });
    if (!l.store.synchronous)
      throw new Error("CookieJar store is not synchronous; use async API instead.");
    return l._importCookiesSync(r), l;
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
  static fromJSON(t, n) {
    return wn.deserializeSync(t, n);
  }
}
ki.CookieJar = wn;
var Wa = {};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.permutePath = tC;
function tC(e) {
  if (e === "/")
    return ["/"];
  const t = [e];
  for (; e.length > 1; ) {
    const n = e.lastIndexOf("/");
    if (n === 0)
      break;
    e = e.slice(0, n), t.push(e);
  }
  return t.push("/"), t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.permutePath = e.parseDate = e.formatDate = e.domainMatch = e.defaultPath = e.CookieJar = e.cookieCompare = e.Cookie = e.PrefixSecurityEnum = e.canonicalDomain = e.version = e.ParameterError = e.Store = e.getPublicSuffix = e.permuteDomain = e.pathMatch = e.MemoryCookieStore = void 0, e.parse = w, e.fromJSON = C;
  var t = Lr;
  Object.defineProperty(e, "MemoryCookieStore", { enumerable: !0, get: function() {
    return t.MemoryCookieStore;
  } });
  var n = Br;
  Object.defineProperty(e, "pathMatch", { enumerable: !0, get: function() {
    return n.pathMatch;
  } });
  var r = yi;
  Object.defineProperty(e, "permuteDomain", { enumerable: !0, get: function() {
    return r.permuteDomain;
  } });
  var o = Yn;
  Object.defineProperty(e, "getPublicSuffix", { enumerable: !0, get: function() {
    return o.getPublicSuffix;
  } });
  var i = Zn;
  Object.defineProperty(e, "Store", { enumerable: !0, get: function() {
    return i.Store;
  } });
  var s = Ee;
  Object.defineProperty(e, "ParameterError", { enumerable: !0, get: function() {
    return s.ParameterError;
  } });
  var l = Vr;
  Object.defineProperty(e, "version", { enumerable: !0, get: function() {
    return l.version;
  } });
  var c = er;
  Object.defineProperty(e, "canonicalDomain", { enumerable: !0, get: function() {
    return c.canonicalDomain;
  } });
  var u = Ot;
  Object.defineProperty(e, "PrefixSecurityEnum", { enumerable: !0, get: function() {
    return u.PrefixSecurityEnum;
  } });
  var d = Rn;
  Object.defineProperty(e, "Cookie", { enumerable: !0, get: function() {
    return d.Cookie;
  } });
  var p = bi;
  Object.defineProperty(e, "cookieCompare", { enumerable: !0, get: function() {
    return p.cookieCompare;
  } });
  var h = ki;
  Object.defineProperty(e, "CookieJar", { enumerable: !0, get: function() {
    return h.CookieJar;
  } });
  var f = wi;
  Object.defineProperty(e, "defaultPath", { enumerable: !0, get: function() {
    return f.defaultPath;
  } });
  var g = ji;
  Object.defineProperty(e, "domainMatch", { enumerable: !0, get: function() {
    return g.domainMatch;
  } });
  var m = vi;
  Object.defineProperty(e, "formatDate", { enumerable: !0, get: function() {
    return m.formatDate;
  } });
  var y = xi;
  Object.defineProperty(e, "parseDate", { enumerable: !0, get: function() {
    return y.parseDate;
  } });
  var x = Wa;
  Object.defineProperty(e, "permutePath", { enumerable: !0, get: function() {
    return x.permutePath;
  } });
  const b = Rn;
  function w(E, j) {
    return b.Cookie.parse(E, j);
  }
  function C(E) {
    return b.Cookie.fromJSON(E);
  }
})(Va);
function iu(e, t, n, r, o) {
  const i = [];
  if (t === void 0)
    return [[], void 0];
  const s = nC(t, r);
  for (const [l, c] of s) {
    const [u, d] = oC(
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
function nC(e, t) {
  const n = [], r = Object.keys(e).sort(uC);
  for (const o of r)
    rC(o, t) && n.push([o, e[o]]);
  return n;
}
function rC(e, t) {
  return t === gi || t.statusCode.toString() === e || fo(t.statusCode) === e || e === "default";
}
function oC(e, t, n, r, o) {
  const i = {}, s = [];
  for (const [l, c] of Object.entries(t.variableAssignments || {})) {
    const [u, d] = iC(c, n, r, o);
    d !== void 0 ? s.push({ name: l, error: d, value: void 0, assignment: c }) : u === void 0 ? s.push({ name: l, error: "not found", value: void 0, assignment: c }) : (i[l] = u, s.push({ name: l, value: u, error: void 0 }));
  }
  return [{ id: e, env: i, assignments: s }, void 0];
}
function iC(e, t, n, r) {
  var o, i;
  if (n === gi)
    return ["foo", void 0];
  if (e.in === "body" && ((o = e == null ? void 0 : e.path) == null ? void 0 : o.type) == "jsonPointer")
    return e.from === "request" ? su(t.body, e.path.value) : su(n.body, e.path.value);
  if (e.in === "body" && ((i = e == null ? void 0 : e.path) == null ? void 0 : i.type) == "jsonPath")
    return e.from === "request" ? au(t.body, e.path.value) : au(n.body, e.path.value);
  if (e.in === "header")
    return e.from === "request" ? sC(t.headers, e.name) : aC(n.headers, e.name);
  if (e.in === "cookie")
    return e.from === "request" ? cC(t.headers, e.name) : lC(n.headers, e.name);
  if (e.in === "query") {
    if (e.from === "request")
      return lu(r.query, e.name);
  } else if (e.in === "path" && e.from === "request")
    return lu(r.path, e.name);
  return [void 0, `unsupported assignment: from ${e.from} in ${e.in}`];
}
function su(e, t) {
  try {
    const n = JSON.parse(e), r = ue.find(n, t);
    return typeof r == "object" ? [void 0, "must be a primitive value"] : [r, void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Pointer "${t}": ${n}`];
  }
}
function au(e, t) {
  try {
    const n = JSON.parse(e), r = W({ json: n, path: t });
    return typeof (r == null ? void 0 : r[0]) == "object" ? [void 0, "must be a primitive value"] : [r == null ? void 0 : r[0], void 0];
  } catch (n) {
    return [void 0, `Failed to extract value using JSON Path "${t}": ${n}`];
  }
}
function sC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (n.toLowerCase() === t.toLowerCase())
      return [r, void 0];
  return [void 0, "not found"];
}
function aC(e, t) {
  for (const [n, r] of e)
    if (n.toLowerCase() === t.toLowerCase())
      return [r, void 0];
  return [void 0, "not found"];
}
function lC(e, t) {
  for (const [n, r] of e)
    if (n.toLowerCase() === "set-cookie") {
      const o = Va.Cookie.parse(r);
      if (o !== void 0 && o.key === t)
        return [o.value, void 0];
    }
  return [void 0, "not found"];
}
function cC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (n.toLowerCase() === "cookie") {
      const o = r.split("; ");
      for (const i of o) {
        const s = Va.Cookie.parse(i);
        if (s !== void 0 && s.key === t)
          return [s.value, void 0];
      }
    }
  return [void 0, "not found"];
}
function lu(e, t) {
  for (const { key: n, value: r } of e)
    if (n === t)
      return [r, void 0];
  return [void 0, "not found"];
}
function uC(e, t) {
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
function cu(e) {
  const t = [];
  for (const { assignments: n } of e)
    for (const r of n)
      r.error !== void 0 && t.push(r);
  return t;
}
async function* dC(e, t, n, r, o, i, s = []) {
  const l = oh(), c = [vh(r, i)], u = [];
  for (const { name: d, requests: p } of o) {
    const h = yield* mh(
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
    if (h === void 0)
      break;
    u.push(...h);
  }
  return u;
}
async function* mh(e, t, n, r, o, i, s, l, c) {
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
    const h = s[p];
    if (h.ref === void 0) {
      yield {
        event: "playbook-aborted",
        error: "non-reference requests are not supported"
      };
      return;
    }
    const f = hC(i, h.ref);
    if (f === void 0) {
      yield {
        event: "playbook-aborted",
        error: `request not found: ${h.ref.type}/${h.ref.id}`
      };
      return;
    }
    yield { event: "request-started", ref: h.ref };
    const g = f.operationId === void 0 ? void 0 : f.auth, m = yield* yh(
      t,
      n,
      r,
      o,
      i,
      g,
      [...l, ...u],
      c
    );
    if (m === void 0) {
      yield {
        event: "http-request-prepare-error",
        error: "Failed to retrieve credentials"
      };
      return;
    }
    const y = dl(
      "stage-environment",
      h.environment || {},
      [...l, ...u]
    ), x = {
      id: { type: "stage-environment" },
      env: y.value,
      // FIXME can we make replaceEnvVariables return assignments?
      assignments: []
    }, b = [...l, ...u, x], w = dl(
      "request-environment",
      f.environment || {},
      b
    ), C = {
      id: { type: "request-environment" },
      env: w.value,
      assignments: []
    }, E = f.operationId !== void 0 ? (d = $u(r, f.operationId)) == null ? void 0 : d.operation : void 0, j = Qp(r, f.request, E, [
      ...l,
      ...u,
      C,
      x
    ]), O = [
      ...w.missing,
      ...y.missing,
      ...j.missing
    ];
    if (yield {
      event: "payload-variables-substituted",
      stack: [...b, C],
      found: [...w.found, ...y.found, ...j.found],
      missing: O
    }, O.length > 0) {
      yield {
        event: "http-request-prepare-error",
        error: `failed to replace request variables: ${Jp(O)}`
      };
      return;
    }
    const [S, I] = "operationId" in j.value ? await lj(r, o, f.operationId, j.value, m) : await dj(j.value);
    if (I !== void 0) {
      yield { event: "http-request-prepare-error", error: I };
      return;
    }
    yield {
      event: "http-request-prepared",
      request: S,
      operationId: f.operationId
    };
    const [$, R] = await n(S);
    if (R !== void 0) {
      yield { event: "http-error-received", error: R };
      return;
    }
    if (yield { event: "http-response-received", response: $ }, $ !== gi) {
      if (h.expectedResponse !== void 0) {
        if (String($ == null ? void 0 : $.statusCode) !== h.expectedResponse && fo($.statusCode) !== h.expectedResponse && f.defaultResponse !== "default") {
          yield {
            event: "response-processing-error",
            error: `HTTP response code "${$ == null ? void 0 : $.statusCode}" does not match expected stage response code "${h.expectedResponse}"`
          };
          return;
        }
      } else if (String($ == null ? void 0 : $.statusCode) !== f.defaultResponse && fo($.statusCode) !== f.defaultResponse && f.defaultResponse !== "default") {
        yield {
          event: "response-processing-error",
          error: `HTTP response code "${$ == null ? void 0 : $.statusCode}" does not match default response code "${f.defaultResponse}"`
        };
        return;
      }
    }
    const [L, M] = iu(
      { type: "playbook-request", name: e, step: p, responseCode: "default" },
      f.responses,
      S,
      $,
      j.value.parameters
    );
    if (M !== void 0) {
      yield {
        event: "response-processing-error",
        error: M
      };
      return;
    }
    u.push(...L), yield { event: "variables-assigned", assignments: L };
    const K = cu(L);
    if (K.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${K.map((ge) => ge.name).join(", ")}`
      };
      return;
    }
    const [G, V] = iu(
      { type: "playbook-stage", name: e, step: p, responseCode: "default" },
      h.responses,
      S,
      $,
      j.value.parameters
    );
    if (V !== void 0) {
      yield {
        event: "response-processing-error",
        error: V
      };
      return;
    }
    yield { event: "variables-assigned", assignments: G };
    const de = cu(G);
    if (de.length > 0) {
      yield {
        event: "response-processing-error",
        error: `Response processing failed, can't assign variables: ${de.map((ge) => ge.name).join(", ")}`
      };
      return;
    }
    u.push(...G);
  }
  return yield { event: "playbook-finished" }, u;
}
async function* yh(e, t, n, r, o, i, s, l) {
  const c = {};
  if (i === void 0)
    return c;
  for (const u of i) {
    yield { event: "auth-started", name: u };
    const [d, p] = u.split("/"), h = o.authenticationDetails[0][d];
    if (h === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const f = p === void 0 ? h.default : p, g = h.methods[f];
    if (g === void 0) {
      yield {
        event: "auth-aborted",
        error: `credential: "${d}/${f}" is not found`
      };
      return;
    }
    if (h === void 0) {
      yield { event: "auth-aborted", error: `credential: "${d}" is not found` };
      return;
    }
    const m = sj(e, h, f);
    if (m !== void 0)
      yield {
        event: "credential-retrieved-from-cache",
        name: u,
        result: m
      }, c[u] = { credential: h, value: m };
    else {
      const y = yield* fC(
        e,
        t,
        n,
        r,
        o,
        u,
        g,
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
      ij(e, h, f, y), c[u] = { credential: h, value: y };
    }
    yield { event: "auth-finished" };
  }
  return c;
}
async function* fC(e, t, n, r, o, i, s, l, c) {
  const u = [...l];
  if (s.requests !== void 0) {
    const p = yield* mh(
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
  const d = Zp(s.credential, u);
  return d.missing.length, yield {
    event: "credential-variables-substituted",
    name: i,
    result: d.value,
    stack: u,
    found: d.found,
    missing: d.missing
  }, d.value;
}
function dn(e, t) {
  const n = {}, r = {}, o = [];
  for (const [i, s] of Object.entries(e.variables))
    s.from === "hardcoded" ? n[i] = s.value : s.from === "environment" && (t.secrets.hasOwnProperty(s.name) ? (n[i] = t.secrets[s.name], r[s.name] = t.secrets[s.name]) : t.default.hasOwnProperty(s.name) ? (n[i] = t.default[s.name], r[s.name] = t.default[s.name]) : !s.required && s.default !== void 0 ? n[i] = s.default : s.required && o.push(s.name));
  return {
    environment: { id: { type: "global-environment" }, assignments: [], env: n },
    simple: r,
    missing: o
  };
}
function vh(e, t) {
  var o, i;
  const n = ((o = e.runtimeConfiguration) == null ? void 0 : o.environment) || "default", { environment: r } = dn(
    ((i = e == null ? void 0 : e.environments) == null ? void 0 : i[n]) || { variables: {} },
    t
  );
  return r;
}
function hC(e, t) {
  var n, r;
  return t.type === "operation" ? (n = e.operations[t.id]) == null ? void 0 : n.request : (r = e.requests) == null ? void 0 : r[t.id];
}
function pC(e, t) {
  return () => e({
    matcher: Fn(
      se,
      os,
      Cd,
      zt,
      It,
      Dt,
      Pt
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
      const p = s[c], h = [
        { name: "before", requests: o },
        { name: "operationBefore", requests: p.before },
        { name: "operationScenarios", requests: p.scenarios[l].requests },
        { name: "operationAfter", requests: p.after },
        { name: "after", requests: i }
      ].filter((f) => f.requests.length > 0);
      await fn(
        r.getState(),
        mi(),
        r.dispatch,
        Xy,
        Yy,
        h,
        "http://localhost"
      );
    }
  });
}
function gC(e, t) {
  return () => e({
    matcher: Fn(se, Yt, Ir),
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
      l !== "scanconf" || c !== "requests" || (r.cancelActiveListeners(), await r.delay(1e3), await fn(
        r.getState(),
        mi(),
        r.dispatch,
        rv,
        ov,
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
function mC(e, t) {
  return () => e({
    matcher: Fn(
      se,
      zt,
      po,
      go,
      It,
      Dt,
      Pt
    ),
    effect: async (n, r) => {
      var p, h, f, g;
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
      const d = (g = (f = (h = (p = o == null ? void 0 : o.authenticationDetails) == null ? void 0 : p[i]) == null ? void 0 : h[s]) == null ? void 0 : f.methods) == null ? void 0 : g[l];
      d === void 0 || d.requests === void 0 || d.requests.length === 0 || await fn(
        r.getState(),
        mi(),
        r.dispatch,
        qy,
        Fy,
        [{ name: "auth", requests: d.requests }],
        "http://localhost"
      );
    }
  });
}
function yC(e, t) {
  return () => e({
    matcher: Fn(
      se,
      jd,
      It,
      Dt,
      Pt,
      zt
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
      await fn(
        r.getState(),
        mi(),
        r.dispatch,
        Vy,
        Wy,
        u,
        "http://localhost"
      );
    }
  });
}
function vC(e, t) {
  return () => e({
    actionCreator: _d,
    effect: async ({ payload: n }, r) => {
      const {
        scanconf: {
          playbook: { before: o, after: i, operations: s }
        },
        operations: { scenarioId: l, operationId: c },
        prefs: { useGlobalBlocks: u, rejectUnauthorized: d }
      } = r.getState(), p = s[c], h = [
        { name: "Global Before", requests: u ? o : [] },
        { name: "Before", requests: p.before },
        { name: "Scenario", requests: p.scenarios[l].requests },
        { name: "After", requests: p.after },
        { name: "Global After", requests: u ? i : [] }
      ].filter((f) => f.requests.length > 0);
      await fn(
        r.getState(),
        Ro(
          { https: { rejectUnauthorized: d } },
          (f, g, m) => r.dispatch(No({ id: f, request: g, config: m }))
        ),
        r.dispatch,
        Qy,
        Jy,
        h,
        n
      );
    }
  });
}
function xC(e, t) {
  return () => e({
    actionCreator: kd,
    effect: async ({ payload: n }, r) => {
      const {
        scanconf: { oas: o, playbook: i, selectedCredential: s, selectedSubcredential: l },
        env: { data: c },
        prefs: { rejectUnauthorized: u }
      } = r.getState();
      if (s === void 0 || l === void 0)
        return;
      const d = [vh(i, c)];
      r.dispatch(My()), r.dispatch(Ri({ event: "playbook-started", name: "" })), r.dispatch(Ri({ event: "request-started" }));
      for await (const p of yh(
        oh(),
        Ro(
          { https: { rejectUnauthorized: u } },
          (h, f, g) => r.dispatch(No({ id: h, request: f, config: g }))
        ),
        o,
        n,
        i,
        [`${s}/${l}`],
        d,
        0
      ))
        r.dispatch(Ri(p));
    }
  });
}
function bC(e, t) {
  return () => e({
    actionCreator: ra,
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
      await fn(
        o.getState(),
        Ro(
          { https: { rejectUnauthorized: u } },
          (p, h, f) => o.dispatch(No({ id: p, request: h, config: f }))
        ),
        o.dispatch,
        tv,
        nv,
        d,
        r,
        [{ id: { type: "try-inputs" }, env: n, assignments: [] }]
      );
    }
  });
}
function kC(e, t) {
  return () => e({
    actionCreator: rs,
    effect: async ({ payload: n }, r) => {
      const {
        scanconf: {
          playbook: { before: o, after: i }
        },
        global: { selected: s },
        prefs: { rejectUnauthorized: l }
      } = r.getState(), c = s === "before" ? [{ name: "Global Before", requests: o }] : [{ name: "Global After", requests: i }];
      await fn(
        r.getState(),
        Ro(
          { https: { rejectUnauthorized: l } },
          (u, d, p) => r.dispatch(No({ id: u, request: d, config: p }))
        ),
        r.dispatch,
        Hy,
        Uy,
        c,
        n
      );
    }
  });
}
async function fn(e, t, n, r, o, i, s, l = []) {
  n(r());
  for await (const c of dC(
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
function Ga(e, t) {
  const [n, r] = wC(e, t);
  return r == null ? [n, void 0] : [
    void 0,
    r.map((o) => ({
      message: o.message.slice(-1).join(": "),
      pointer: ue.joinJsonPointer(o.path)
    }))
  ];
}
function wC(e, t) {
  return ye({
    before: jt(e, t, t.before || [], Nn),
    after: jt(e, t, t.after || [], Nn),
    operations: Le(e, t, t.operations || {}, _C),
    authenticationDetails: jt(e, t, t.authenticationDetails === void 0 || t.authenticationDetails.length === 0 ? [{}] : t.authenticationDetails, qC),
    runtimeConfiguration: jC(e, t, t.runtimeConfiguration || {}),
    customizations: H(t.customizations),
    environments: Le(e, t, t.environments || {}, SC),
    authorizationTests: Le(e, t, t.authorizationTests || {}, HC),
    requests: Le(e, t, t.requests || {}, IC)
  });
}
function jC(e, t, n) {
  return [{ ...n }, void 0];
}
function SC(e, t, n) {
  return ye({
    variables: Le(e, t, n.variables || {}, CC)
  });
}
function CC(e, t, n) {
  return n.from === "environment" ? ye({
    name: H(n.name),
    from: H(n.from),
    required: H(n.required),
    default: H(n.default)
  }) : n.from === "hardcoded" ? ye({
    from: H(n.from),
    value: H(n.value)
  }) : Mt("unknown env from");
}
function _C(e, t, n) {
  return ye({
    request: Ka(e, t, n.request, n.operationId),
    operationId: H(n.operationId),
    before: jt(e, t, n.before || [], Nn),
    after: jt(e, t, n.after || [], Nn),
    authorizationTests: H(n.authorizationTests || []),
    scenarios: jt(e, t, n.scenarios || [], BC),
    customTests: H(n.customTests),
    customized: H(EC(n))
  });
}
function EC(e) {
  var d, p;
  const t = (p = (d = e.scenarios) == null ? void 0 : d[0]) == null ? void 0 : p.requests, n = t == null ? void 0 : t[0], r = e.customTests && e.customTests.length > 0, o = e.authorizationTests && e.authorizationTests.length > 0, i = e.before && e.before.length > 0, s = e.after && e.after.length > 0, l = e.scenarios && e.scenarios.length > 1, c = t && t.length > 1, u = n !== void 0 && TC(n);
  return r || o || i || s || l || c || u;
}
function TC(e) {
  const t = e.environment && Object.keys(e.environment).length > 0, n = e.auth && e.auth.length > 0, r = e.responses && Object.keys(e.responses).length > 0, o = "expectedResponse" in e;
  return t || n || r || o;
}
function Nn(e, t, n) {
  return n.$ref !== void 0 ? OC(e, t, n) : Ka(e, t, n);
}
function OC(e, t, n) {
  return ye({
    responses: Le(e, t, n.responses || {}, Xa),
    auth: H(n.auth || []),
    ref: MC(e, t, n.$ref),
    fuzzing: H(n.fuzzing),
    environment: Ya(e, t, n.environment || {}),
    injectionKey: H(n.injectionKey),
    expectedResponse: H(n.expectedResponse)
  });
}
function Ka(e, t, n, r) {
  return ye({
    responses: Le(e, t, n.responses || {}, Xa),
    fuzzing: H(n.fuzzing),
    auth: H(n.auth || []),
    environment: Ya(e, t, n.environment || {}),
    injectionKey: H(n.injectionKey),
    ref: H(void 0),
    defaultResponse: H(n.defaultResponse),
    request: DC(e, t, n.request, r),
    operationId: H(r)
  });
}
function $C(e, t, n) {
  return ye({
    operationId: [void 0, void 0],
    responses: Le(e, t, n.responses || {}, Xa),
    environment: Ya(e, t, n.environment || {}),
    defaultResponse: H(n.defaultResponse),
    request: PC(e, t, n.request)
  });
}
function IC(e, t, n) {
  return n.operationId === void 0 ? $C(e, t, n) : Ka(e, t, n, n.operationId);
}
function DC(e, t, n, r) {
  return n.type === "42c" ? zC(e, t, n, r) : Mt(`unknown request type: ${n.type}`);
}
function PC(e, t, n) {
  return n.type === "42c" ? AC(e, t, n) : Mt(`unknown request type: ${n.type}`);
}
function zC(e, t, n, r) {
  var s, l;
  const o = ((s = n == null ? void 0 : n.details) == null ? void 0 : s.operationId) || r;
  if (o === void 0)
    return [
      void 0,
      Wr("Unable to parse request that has no operationId set", void 0, ["details"])
    ];
  const i = $u(e, o);
  return i === void 0 ? Mt(`Unable to find in the OpenAPI file an operation with operationId: "${o}"`) : ye({
    operationId: H(o),
    path: H(i.path),
    method: H(i.method.toLowerCase()),
    parameters: bh(e, t, (n == null ? void 0 : n.details) || {}),
    body: xh(e, t, (l = n == null ? void 0 : n.details) == null ? void 0 : l.requestBody)
  });
}
function AC(e, t, n) {
  var r;
  return ye({
    url: H(n.details.url),
    method: H(n.details.method.toLowerCase()),
    parameters: bh(e, t, (n == null ? void 0 : n.details) || {}),
    body: xh(e, t, (r = n == null ? void 0 : n.details) == null ? void 0 : r.requestBody)
  });
}
function xh(e, t, n) {
  return n == null ? [void 0, void 0] : n.mode === "json" ? [{ mediaType: "application/json", value: n.json }, void 0] : n.mode === "urlencoded" ? [
    { mediaType: "application/x-www-form-urlencoded", value: RC(n.urlencoded) },
    void 0
  ] : n.mode === "raw" ? [{ mediaType: "raw", value: n.raw }, void 0] : [void 0, void 0];
}
function RC(e) {
  return Object.entries(e).reduce((t, [n, r]) => (t[n] = r.value, t), {});
}
function bh(e, t, n) {
  return ye({
    cookie: so(e, t, n.cookies || []),
    path: so(e, t, n.paths || []),
    query: so(e, t, n.queries || []),
    header: so(e, t, n.headers || [])
  });
}
function so(e, t, n) {
  return [
    n.map(({ key: r, value: o }) => ({ key: r, value: o })),
    void 0
  ];
}
function Xa(e, t, n) {
  return ye({
    expectations: H(n.expectations),
    variableAssignments: Le(e, t, n.variableAssignments || {}, NC)
  });
}
function NC(e, t, n) {
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
  ] : Mt("unexpected assignment");
}
function Ya(e, t, n) {
  return [n, void 0];
}
function MC(e, t, n) {
  if (n === void 0)
    return [void 0, void 0];
  const r = ue.parseJsonPointer(n);
  return r.length === 2 && r[0] === "requests" ? [{ type: "request", id: String(r[1]) }, void 0] : r.length === 3 && r[0] === "operations" && r[2] === "request" ? [{ type: "operation", id: String(r[1]) }, void 0] : Mt(`unexpected stage $ref, must point to operations or requests: ${n}`);
}
function qC(e, t, n) {
  return n.$ref !== void 0 ? Mt(`external credential refs are not supported: ${n.$ref}`) : Le(e, t, n, FC);
}
function FC(e, t, n) {
  return ye({
    in: H(n.in),
    type: H(n.type),
    name: H(n.name),
    default: H(n.default),
    ttl: H(n.ttl),
    tti: H(n.tti),
    methods: Le(e, t, n.credentials || {}, LC),
    description: H(n.description)
  });
}
function LC(e, t, n) {
  return ye({
    description: H(n.description),
    requests: jt(e, t, n.requests || [], Nn),
    credential: H(n.credential)
  });
}
function BC(e, t, n) {
  return ye({
    requests: jt(e, t, n.requests || [], Nn),
    key: H(n.key),
    fuzzing: H(n.fuzzing)
  });
}
function HC(e, t, n) {
  const r = n.source === null ? [] : n.source, o = n.target === null ? [] : n.target;
  return r.some((i) => typeof i != "string") || o.some((i) => typeof i != "string") ? Mt("only strings are allowed, embedding Credential objects is not supported yet") : ye({
    key: H(n.key),
    source: H(r),
    target: H(o)
  });
}
function Wr(e, t, n) {
  let r = [];
  return n !== void 0 && (typeof n == "string" || typeof n == "number") ? r = [`${n}`] : n !== void 0 && Array.isArray(n) && (r = [...n]), t === void 0 ? [{ message: [e], path: r }] : t.map((o) => ({
    message: [e, ...o.message],
    path: [...r, ...o.path]
  }));
}
function Mt(e, t, n) {
  return [void 0, Wr(e, t, n)];
}
function ye(e) {
  const t = [], n = {};
  for (const [r, o] of Object.entries(e)) {
    const [i, s] = o;
    s !== void 0 ? t.push(...Wr("failed to parse", s, [r])) : n[r] = i;
  }
  return t.length > 0 ? [void 0, t] : [n, void 0];
}
function H(e) {
  return [e, void 0];
}
function Le(e, t, n, r) {
  const o = [], i = {}, s = Object.entries(n).map(([l, c]) => [l, r(e, t, c)]);
  for (const [l, c] of s) {
    const [u, d] = c;
    d !== void 0 ? o.push(...Wr("failed to parse", d, [l])) : i[l] = u;
  }
  return o.length > 0 ? [void 0, o] : [i, void 0];
}
function jt(e, t, n, r) {
  const o = [], i = [], s = (n || []).map((l) => r(e, t, l));
  for (const [l, c] of s.entries()) {
    const [u, d] = c;
    d !== void 0 ? o.push(...Wr("failed to parse", d, [l])) : i.push(u);
  }
  return o.length > 0 ? [void 0, o] : [i, void 0];
}
function Si(e, t) {
  const n = t.runtimeConfiguration, r = t.customizations, o = t.environments, [i, s] = UC(e, t, t.authenticationDetails);
  if (s !== void 0)
    return [void 0, `failed to serialize authentication details: ${s}`];
  const [l, c] = GC(e, t);
  if (c !== void 0)
    return [void 0, `failed to serialize operations: ${c}`];
  const [u, d] = ZC(e, t, t.requests);
  if (d !== void 0)
    return [void 0, `unable to serialize requests: ${d}`];
  const [p, h] = Mn(e, t, t.before);
  if (h !== void 0)
    return [void 0, `unable to serialize before: ${h}`];
  const [f, g] = Mn(e, t, t.after);
  return g !== void 0 ? [void 0, `unable to serialize after: ${g}`] : [
    {
      version: "2.0.0",
      runtimeConfiguration: n,
      customizations: r,
      environments: o,
      operations: l,
      before: ur(p),
      after: ur(f),
      authenticationDetails: i,
      authorizationTests: ur(t.authorizationTests),
      requests: ur(u)
    },
    void 0
  ];
}
function ur(e) {
  return e instanceof Array ? e.length > 0 ? e : void 0 : Object.keys(e).length > 0 ? e : void 0;
}
function UC(e, t, n) {
  const r = [];
  for (const o of n) {
    const [i, s] = VC(e, t, o);
    if (s !== void 0)
      return [void 0, "xxx"];
    r.push(i);
  }
  return [r.length === 1 && Object.keys(r[0]).length === 0 ? [] : r, void 0];
}
function VC(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(n)) {
    const [s, l] = WC(e, t, i.methods);
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
function WC(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(n)) {
    const [s, l] = Mn(e, t, i.requests || []);
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
function GC(e, t) {
  const n = {};
  for (const [r, o] of Object.entries(t.operations)) {
    const [i, s] = KC(e, t, o);
    if (s !== void 0)
      return [void 0, `unable to serialize operation '${r}: ${s}'`];
    n[r] = i;
  }
  return [n, void 0];
}
function KC(e, t, n) {
  const [r, o] = Qa(e, t, n.request, n.operationId);
  if (o !== void 0)
    return [void 0, `failed to serialize request: ${o}`];
  const [i, s] = QC(e, t, n);
  if (s !== void 0)
    return [void 0, `failed to serialize scenarios: ${s}`];
  const [l, c] = Mn(e, t, n.before);
  if (c !== void 0)
    return [void 0, `failed to serialize before: ${c}`];
  const [u, d] = Mn(e, t, n.after);
  return d !== void 0 ? [void 0, `failed to serialize after: ${d}`] : [
    {
      operationId: n.operationId,
      request: r,
      before: l.length > 0 ? l : void 0,
      after: u.length > 0 ? u : void 0,
      ...i,
      customTests: n.customTests,
      authorizationTests: ur(n.authorizationTests)
    },
    void 0
  ];
}
function XC(e, t, n) {
  const [r, o] = Za(e, t, n.responses);
  if (o !== void 0)
    return [void 0, `failed to serialize responses: ${o}`];
  const [i, s] = e_(n.ref);
  return s !== void 0 ? [void 0, `failed to serialize responses: ${s}`] : [{
    fuzzing: n.fuzzing,
    $ref: i,
    auth: kh(n.auth),
    expectedResponse: n.expectedResponse,
    environment: Ja(n.environment),
    responses: r
  }, void 0];
}
function Qa(e, t, n, r) {
  const [o, i] = t_(e, t, n.request, r);
  if (i !== void 0)
    return [void 0, `failed to serialize request: ${i}`];
  const [s, l] = Za(e, t, n.responses);
  return l !== void 0 ? [void 0, `failed to serialize responses: ${l}`] : [{
    operationId: r || n.request.operationId,
    fuzzing: n.fuzzing,
    auth: kh(n.auth),
    request: o,
    defaultResponse: n.defaultResponse,
    environment: Ja(n.environment),
    responses: s
  }, void 0];
}
function YC(e, t, n) {
  const [r, o] = n_(e, t, n.request);
  if (o !== void 0)
    return [void 0, `failed to serialize request: ${o}`];
  const [i, s] = Za(e, t, n.responses);
  return s !== void 0 ? [void 0, `failed to serialize responses: ${s}`] : [{
    request: r,
    defaultResponse: n.defaultResponse,
    environment: Ja(n.environment),
    responses: i
  }, void 0];
}
function kh(e) {
  if (!(e === void 0 || e.length === 0))
    return e;
}
function QC(e, t, n) {
  const r = [];
  for (const o of n.scenarios) {
    const [i, s] = JC(e, t, o);
    if (s !== void 0)
      return [void 0, `unable to serialize scenario: ${s}`];
    r.push(i);
  }
  return [{ scenarios: r }, void 0];
}
function JC(e, t, n) {
  const [r, o] = Mn(e, t, n.requests);
  return o !== void 0 ? [void 0, `unable to serialize requests: ${o}`] : [
    {
      key: "happy.path",
      requests: r,
      fuzzing: n.fuzzing
    },
    void 0
  ];
}
function Mn(e, t, n) {
  const r = [];
  for (const o of n)
    if (o.ref === void 0) {
      const [i, s] = Qa(e, t, o, o.operationId);
      if (s !== void 0)
        return [void 0, `unable to serialize stage: ${s}`];
      r.push(i);
    } else {
      const [i, s] = XC(e, t, o);
      if (s !== void 0)
        return [void 0, `unable to serialize stage reference: ${s}`];
      r.push(i);
    }
  return [r, void 0];
}
function ZC(e, t, n) {
  const r = {};
  for (const [o, i] of Object.entries(n || {}))
    if (i.operationId === void 0) {
      const [s, l] = YC(e, t, i);
      if (l !== void 0)
        return [void 0, `unable to serialize request: ${l}`];
      r[o] = s;
    } else {
      const [s, l] = Qa(e, t, i, i.operationId);
      if (l !== void 0)
        return [void 0, `unable to serialize request: ${l}`];
      r[o] = s;
    }
  return [r, void 0];
}
function e_(e) {
  return e.type === "operation" ? ["#" + ue.joinJsonPointer(["operations", e.id, "request"]), void 0] : e.type === "request" ? ["#" + ue.joinJsonPointer(["requests", e.id]), void 0] : [void 0, `Unable to serialize unknown $ref type: ${e}`];
}
function Ja(e) {
  if (!(e === void 0 || Object.keys(e).length === 0))
    return e;
}
function t_(e, t, n, r) {
  const o = {
    operationId: r,
    method: n.method.toUpperCase(),
    url: `{{host}}${n.path}`,
    headers: kt(e, t, n.parameters.header),
    queries: kt(e, t, n.parameters.query),
    paths: kt(e, t, n.parameters.path),
    cookies: kt(e, t, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? o.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? o.requestBody = {
    mode: "urlencoded",
    urlencoded: wh(n.body.value)
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
function n_(e, t, n) {
  const r = {
    //operationId: operation.operationId,
    method: n.method.toUpperCase(),
    url: n.url,
    headers: kt(e, t, n.parameters.header),
    queries: kt(e, t, n.parameters.query),
    paths: kt(e, t, n.parameters.path),
    cookies: kt(e, t, n.parameters.cookie)
  };
  return n.body !== void 0 && (n.body.mediaType === "application/json" ? r.requestBody = {
    mode: "json",
    json: n.body.value
  } : n.body.mediaType === "application/x-www-form-urlencoded" ? r.requestBody = {
    mode: "urlencoded",
    urlencoded: wh(n.body.value)
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
function Za(e, t, n) {
  const r = {}, o = Object.entries(n || {});
  if (o.length === 0)
    return [void 0, void 0];
  for (const [i, s] of o)
    r[i] = {
      expectations: s.expectations,
      variableAssignments: r_(s.variableAssignments)
    };
  return [r, void 0];
}
function kt(e, t, n) {
  if (n.length !== 0)
    return n;
}
function r_(e) {
  if (Object.keys(e || {}).length !== 0)
    return e;
}
function wh(e) {
  return Object.entries(e).reduce((t, [n, r]) => (t[n] = { value: r }, t), {});
}
function Ci(e) {
  var n;
  const t = ((n = e.runtimeConfiguration) == null ? void 0 : n.environment) || "default";
  return e.environments[t];
}
function o_(e, t) {
  const n = qn(e.before || [], t).map((s) => ({ container: "globalBefore", stageIndex: s })), r = qn(e.after || [], t).map((s) => ({ container: "globalAfter", stageIndex: s })), o = Object.entries(e.operations || {}).flatMap(([s, l]) => s !== t ? i_(l, s, t) : []), i = (e.authenticationDetails || []).flatMap(
    // TODO: handle credentials that contain just a $ref
    (s, l) => Object.entries(s).flatMap(([c, u]) => a_(u, c, l, t))
  );
  return [...n, ...r, ...i, ...o];
}
function i_(e, t, n) {
  const r = qn(e.before || [], n).map((s) => ({ container: "operationBefore", operationId: t, stageIndex: s })), o = qn(e.after || [], n).map((s) => ({ container: "operationAfter", operationId: t, stageIndex: s })), i = e.scenarios.flatMap((s, l) => s_(s, t, l, n));
  return [...r, ...i, ...o];
}
function s_(e, t, n, r) {
  return qn(e.requests || [], r).map((o) => ({
    container: "operationScenarios",
    operationId: t,
    scenarioIndex: n,
    stageIndex: o
  }));
}
function a_(e, t, n, r) {
  return Object.entries(e.credentials).flatMap(([o, i]) => qn(i.requests || [], r).map((s) => ({
    container: "credential",
    group: n,
    credentialId: t,
    subCredentialId: o,
    stageIndex: s
  })));
}
function qn(e, t) {
  const n = "#" + ue.joinJsonPointer(["operations", t, "request"]);
  return e.map((r, o) => {
    if (l_(r) && r.$ref === n)
      return o;
  }).filter((r) => r !== void 0);
}
function l_(e) {
  return "$ref" in e;
}
function c_(e, t) {
  const n = [];
  for (const r of e)
    for (const o of t)
      u_(r, o) && n.push({
        type: "operation-renamed",
        path: r.path,
        method: r.method,
        oldOperationId: o.operationId,
        newOperationId: r.operationId
      });
  return n;
}
function u_(e, t) {
  return e.path === t.path && e.method === t.method;
}
function d_(e, t) {
  const n = f_(e, t), r = h_(e, t), o = c_(n, r), i = n.filter((c) => !o.some((u) => u.newOperationId === c.operationId)), s = r.filter((c) => !o.some((u) => u.oldOperationId === c.operationId)), l = g_(e, t);
  return [...i, ...s, ...o, ...l];
}
function f_(e, t) {
  const n = t.operations || {};
  return jh(e).filter((r) => !n[r.operationId]).map((r) => ({
    type: "operation-added",
    ...r
  }));
}
function h_(e, t) {
  var l, c;
  const n = t.operations || {}, r = jh(e).map((u) => u.operationId), i = Object.keys(n).filter((u) => !r.includes(u)), s = [];
  for (const u of i) {
    const d = (c = (l = p_(u, t)) == null ? void 0 : l.request) == null ? void 0 : c.request;
    if ((d == null ? void 0 : d.type) === "42c" && d.details.url.startsWith("{{host}}")) {
      const p = d.details.method.toLowerCase(), h = d.details.url.substring(8);
      s.push({
        type: "operation-removed",
        operationId: u,
        method: p,
        path: h,
        references: o_(t, u)
      });
    } else
      throw new Error(`Unsupported operation: operationId: ${u}, request ${JSON.stringify(d)}`);
  }
  return s;
}
function jh(e) {
  return (Ao(e) ? ap(e) : lp(e)).map(([n, r, o]) => ({
    path: n,
    method: r,
    operationId: _u(o.operationId, n, r)
  }));
}
function p_(e, t) {
  var n;
  return (n = t.operations) == null ? void 0 : n[e];
}
function g_(e, t) {
  const n = t.authenticationDetails || [{}];
  return n.length === 0 ? [] : m_(e).filter((r) => !n[0][r]).map((r) => ({
    type: "security-added",
    schema: r
  }));
}
function m_(e) {
  var t;
  if (Ao(e)) {
    const n = (t = e.components) == null ? void 0 : t.securitySchemes;
    return n ? Object.keys(n) : [];
  } else {
    const n = e.securityDefinitions;
    return n ? Object.keys(n) : [];
  }
}
function y_(e, t) {
  const n = ue.simpleClone(e);
  for (const r of t)
    r.container === "globalBefore" ? ar(n.before, r.stageIndex) : r.container === "globalAfter" ? ar(n.after, r.stageIndex) : r.container === "operationBefore" ? ar(n.operations[r.operationId].before, r.stageIndex) : r.container === "operationAfter" ? ar(n.operations[r.operationId].after, r.stageIndex) : r.container === "operationScenarios" && ar(n.operations[r.operationId].scenarios[r.scenarioIndex].requests, r.stageIndex);
  return v_(n), n;
}
function ar(e, t) {
  e && (e[t] = void 0);
}
function v_(e) {
  yn(e.before), yn(e.after);
  for (const t of Object.values(e.operations || {})) {
    yn(t.before), yn(t.after);
    for (const n of t.scenarios)
      yn(n.requests);
  }
  for (const t of e.authenticationDetails || [])
    for (const n of Object.values(t))
      for (const r of Object.values(n.credentials))
        yn(r.requests);
}
function yn(e) {
  if (e !== void 0)
    for (let t = e.length - 1; t >= 0; t--)
      e[t] === void 0 && e.splice(t, 1);
}
function x_(e, t, n) {
  const r = ue.simpleClone(e);
  vn(r.before, t, n), vn(r.after, t, n);
  for (const o of Object.values(r.operations || {})) {
    vn(o.before, t, n), vn(o.after, t, n);
    for (const i of o.scenarios)
      vn(i.requests, t, n);
  }
  for (const o of r.authenticationDetails || [])
    for (const i of Object.values(o))
      for (const s of Object.values(i.credentials))
        vn(s.requests, t, n);
  return r;
}
function vn(e, t, n) {
  for (const r of e || [])
    r.$ref === t && (r.$ref = n);
}
function b_(e, t, n, r) {
  let o = ue.simpleClone(t);
  for (const i of r)
    i.type === "operation-added" ? o = k_(e, o, n, i) : i.type === "operation-removed" ? o = w_(e, o, n, i) : i.type === "operation-renamed" ? o = j_(o, i) : i.type === "security-added" && (o = S_(e, o, n, i));
  return o;
}
function k_(e, t, n, r) {
  const o = n.operations[r.operationId];
  return t.operations[r.operationId] = o, t;
}
function w_(e, t, n, r) {
  return delete t.operations[r.operationId], y_(t, r.references);
}
function j_(e, t) {
  var i, s;
  const n = e.operations[t.oldOperationId];
  n.operationId = t.newOperationId, n.request.operationId = t.newOperationId, ((s = (i = n.request) == null ? void 0 : i.request) == null ? void 0 : s.type) === "42c" && (n.request.request.details.operationId = t.newOperationId), delete e.operations[t.oldOperationId], e.operations[t.newOperationId] = n;
  const r = "#" + ue.joinJsonPointer(["operations", t.oldOperationId, "request"]), o = "#" + ue.joinJsonPointer(["operations", t.newOperationId, "request"]);
  return x_(e, r, o);
}
function S_(e, t, n, r) {
  t.authenticationDetails || (t.authenticationDetails = [], t.authenticationDetails.push({}));
  const o = r.schema;
  return t.authenticationDetails[0][o] = n.authenticationDetails[0][o], t;
}
function C_(e) {
  return () => e({
    actionCreator: Wo,
    effect: async ({ payload: { oas: t, scanconf: n } }, r) => {
      const [o, i] = Ds(n);
      if (i !== void 0) {
        r.dispatch(
          ot({ message: `Failed to parse scan configuration: ${i}` })
        ), r.dispatch(se(["general-error"]));
        return;
      }
      const s = d_(t, o);
      if (s.length > 0) {
        r.dispatch(av({ scanconf: n, oas: t, changes: s })), r.dispatch(se(["scanconf-update"]));
        return;
      }
      const [l, c] = Ga(t, o);
      if (c !== void 0) {
        const u = c.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        r.dispatch(ot({ message: u })), r.dispatch(se(["general-error"]));
        return;
      }
      r.dispatch(Go({ playbook: l, oas: t })), r.dispatch(se(["scanconf", "requests"]));
    }
  });
}
function __(e, t) {
  return () => e({
    actionCreator: cd,
    effect: async ({ payload: { oas: n, scanconf: r } }, o) => {
      const { changes: i, scanconf: s } = o.getState().scanconfUpdate, [l, c] = Ds(s);
      if (c !== void 0) {
        o.dispatch(
          ot({
            message: `Failed to parse original scan configuration: ${c}`
          })
        ), o.dispatch(se(["general-error"]));
        return;
      }
      const [u, d] = Ds(r);
      if (d !== void 0) {
        o.dispatch(
          ot({
            message: `Failed to parse updated scan configuration: ${d}`
          })
        ), o.dispatch(se(["general-error"]));
        return;
      }
      const p = b_(n, l, u, i), [h, f] = Ga(n, p);
      if (f !== void 0) {
        const g = f.map((m) => `${m.message}: ${m.pointer}`).join(" ");
        o.dispatch(ot({ message: g })), o.dispatch(se(["general-error"]));
        return;
      }
      t.postMessage({
        command: "saveScanconf",
        payload: JSON.stringify(p, null, 2)
      }), o.dispatch(Go({ playbook: h, oas: n })), o.dispatch(se(["scanconf", "requests"]));
    }
  });
}
function Ds(e) {
  try {
    return [JSON.parse(e), void 0];
  } catch (t) {
    return [void 0, `${t}`];
  }
}
const E_ = (e, t) => ({
  runScan: () => e({
    actionCreator: Js,
    effect: async (n, r) => {
      t.postMessage({
        command: "runScan",
        payload: n.payload
      });
    }
  }),
  runFullScan: () => e({
    actionCreator: ld,
    effect: async (n, r) => {
      t.postMessage({
        command: "runFullScan",
        payload: n.payload
      });
    }
  }),
  saveScanconf: () => e({
    matcher: Fn(
      Ir,
      dd,
      ta,
      Zs,
      ea,
      It,
      Dt,
      Pt,
      zt,
      fd,
      md,
      pd,
      gd,
      hd,
      ns,
      na,
      yd
    ),
    effect: async (n, r) => {
      const { scanconf: o } = r.getState(), [i, s] = Si(o.oas, o.playbook);
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
    actionCreator: Ey,
    effect: async (n, r) => {
      const { id: o, request: i, config: s } = n.payload;
      t.postMessage({ command: "sendHttpRequest", payload: { id: o, request: i, config: s } });
    }
  }),
  showEnvWindow: () => e({
    actionCreator: Iu,
    effect: async (n, r) => {
      t.postMessage({ command: "showEnvWindow", payload: void 0 });
    }
  }),
  savePrefs: () => e({
    actionCreator: Pu,
    effect: async (n, r) => {
      const { prefs: o } = r.getState();
      t.postMessage({
        command: "savePrefs",
        payload: o
      });
    }
  }),
  openLink: lg(e, t),
  updateScanconf: () => e({
    actionCreator: Od,
    effect: async (n, r) => {
      t.postMessage({
        command: "updateScanconf",
        payload: void 0
      });
    }
  })
});
function T_(e) {
  return () => e({
    actionCreator: $d,
    effect: async (t, n) => {
      const { oas: r, scanconf: o } = n.getState().scanconfUpdate, [i, s] = O_(o);
      if (s !== void 0) {
        n.dispatch(
          ot({ message: `Failed to parse scan configuration: ${s}` })
        ), n.dispatch(se(["general-error"]));
        return;
      }
      const [l, c] = Ga(r, i);
      if (c !== void 0) {
        const u = c.map((d) => `${d.message}: ${d.pointer}`).join(" ");
        n.dispatch(ot({ message: u })), n.dispatch(se(["general-error"]));
        return;
      }
      n.dispatch(Go({ playbook: l, oas: r })), n.dispatch(se(["scanconf", "operations"]));
    }
  });
}
function O_(e) {
  try {
    return [JSON.parse(e), void 0];
  } catch (t) {
    return [void 0, `${t}`];
  }
}
const Sh = Vh(), ve = Sh.startListening;
function $_(e, t) {
  const n = vC(ve), r = pC(ve), o = gC(ve), i = bC(ve), s = mC(ve), l = xC(ve), c = kC(ve), u = yC(ve), d = E_(ve, e);
  return cg(ve, t), Wh({
    ...d,
    executeTryScenarioListener: n,
    executeMockScenarioListener: r,
    executeRequestListener: i,
    executeMockRequestListener: o,
    executeMockAuthRequestsListener: s,
    executeTryAuthenticationListener: l,
    executeTryGlobalListener: c,
    executeMockGlobalListener: u,
    executeSendHttpRequestListener: Hp(ve, e),
    executeConfirmationAccept: oj(ve),
    executeShowScanconfOperationListener: C_(ve),
    executeLoadUpdatedScanconfListener: __(ve, e),
    executeSkipScanconfUpdate: T_(ve)
  }), Sh;
}
function I_({
  operationId: e,
  goToRequest: t
}) {
  const n = re(), { playbook: r, oas: o } = U((y) => y.scanconf), { scenarioId: i, mockResult: s } = U((y) => y.operations), l = r.operations[e].scenarios, c = Object.keys(r.operations), u = Object.keys(r.requests || {}), d = (y) => n(Cd(y)), p = (y, x) => n(zt({ location: y, reference: x })), h = (y) => n(Pt(y)), f = (y, x) => n(Dt({ location: y, to: x })), g = (y, x) => {
    n(
      It({
        container: y,
        stage: {
          ref: x
        }
      })
    );
  }, m = l.map((y, x) => ({
    id: `${x}`,
    title: y.key,
    /* not implemented
    menu: (
      <Menu>
        <MenuItem onSelect={() => undefined}>Delete</MenuItem>
      </Menu>
    ),
    */
    content: /* @__PURE__ */ a.jsxs(D_, { children: [
      /* @__PURE__ */ a.jsx(
        Pn,
        {
          oas: o,
          stages: y.requests,
          container: { container: "operationScenarios", operationId: e, scenarioIndex: x },
          executionResult: Fe(s, "operationScenarios"),
          saveStage: p,
          moveStage: f,
          removeStage: h,
          operations: r.operations,
          requests: r.requests,
          goToRequest: t,
          fuzzing: !0
        }
      ),
      /* @__PURE__ */ a.jsx(P_, { children: /* @__PURE__ */ a.jsx(
        zn,
        {
          operationIds: c,
          requestIds: u,
          onSelect: (b) => g({ container: "operationScenarios", operationId: e, scenarioIndex: x }, b)
        }
      ) })
    ] })
  }));
  return /* @__PURE__ */ a.jsx(
    ct,
    {
      activeTab: `${i}`,
      setActiveTab: (y) => d(parseInt(y)),
      tabs: m
    }
  );
}
const D_ = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`, P_ = k.div`
  margin-left: 18px;
`;
function z_({
  authorizationTests: e,
  onSelect: t
}) {
  const n = "", r = "", o = e, [i, s] = _.useState(o), { isOpen: l, getMenuProps: c, getInputProps: u, getItemProps: d, openMenu: p } = Fo({
    initialInputValue: n,
    items: i,
    onSelectedItemChange: ({ selectedItem: h }) => {
      h && t(h);
    },
    onInputValueChange: ({ inputValue: h }) => {
      s(
        o.filter((f) => !h || f.toLowerCase().includes(h))
      );
    },
    itemToString: (h) => h || ""
  });
  return /* @__PURE__ */ a.jsxs(A_, { children: [
    /* @__PURE__ */ a.jsx(
      R_,
      {
        autoFocus: !0,
        ...u({
          onFocus() {
            p();
          }
        }),
        placeholder: r,
        onBlur: (h) => {
          t(void 0);
        }
      }
    ),
    /* @__PURE__ */ a.jsx(N_, { children: /* @__PURE__ */ a.jsx(M_, { ...c(), isOpen: l, children: l && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      i.map((h, f) => /* @__PURE__ */ a.jsx(
        "li",
        {
          ...d({
            item: h,
            index: f
          }),
          children: h
        },
        `li-${f}`
      )),
      i.length === 0 && /* @__PURE__ */ a.jsx("li", { children: "No more tests available" })
    ] }) }) })
  ] });
}
const A_ = k.div`
  padding: 10px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  border: 1px solid var(${v.border});
`, R_ = k.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(${v.border});
  color: var(${v.foreground});
  &::placeholder {
    color: var(${v.inputPlaceholderForeground});
  }
`, N_ = k.div`
  position: relative;
  z-index: 1;
`, M_ = k.ul`
  ${({ isOpen: e }) => e && `border: 1px solid var(${v.dropdownBorder});`}
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
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
    background-color: var(${v.listHoverBackground});
  }
`;
function q_({
  authorizationTests: e,
  auth: t,
  existing: n,
  credentials: r,
  onSelect: o
}) {
  const [i, s] = _.useState(!1), c = Object.entries(e).filter(([u, d]) => L_(r, t, d.source[0])).map(([u]) => u).filter((u) => !n.includes(u));
  return i ? /* @__PURE__ */ a.jsx(
    z_,
    {
      onSelect: (u) => {
        u !== void 0 && o(u), s(!1);
      },
      authorizationTests: c
    }
  ) : /* @__PURE__ */ a.jsxs(
    F_,
    {
      onClick: (u) => {
        u.stopPropagation(), u.preventDefault(), s(!0);
      },
      children: [
        /* @__PURE__ */ a.jsx($r, {}),
        " Add authorization test"
      ]
    }
  );
}
const F_ = k.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  cursor: pointer;
  align-items: center;
  cusror: pointer;
  border: 1px dashed var(${v.border});
  color: var(${v.linkForeground});
  > svg {
    fill: var(${v.linkForeground});
  }
`;
function L_(e, t, n) {
  return t !== void 0 && t.some((r) => {
    var i;
    const o = (i = e[r]) == null ? void 0 : i.default;
    return n === r || n === `${r}/${o}`;
  });
}
function B_({
  authorizationTests: e,
  removeTest: t
}) {
  return /* @__PURE__ */ a.jsx(H_, { children: e.map((n, r) => /* @__PURE__ */ a.jsxs(U_, { children: [
    /* @__PURE__ */ a.jsx("div", { children: n }),
    /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsxs(At, { onClick: (o) => o.stopPropagation(), onSelect: () => t(n), children: [
      /* @__PURE__ */ a.jsx(Ue, {}),
      "Delete"
    ] }) })
  ] }, r)) });
}
const H_ = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, U_ = k.div`
  border: 1px solid var(${v.border});
  background-color: var(${v.background});
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
function Ch(e, t) {
  if (e.operations !== void 0)
    for (const n of Object.keys(e == null ? void 0 : e.operations))
      n !== t && (e.operations[n].scenarios = [], e.operations[n].before = [], e.operations[n].after = [], e.operations[n].customTests = [], e.operations[n].authorizationTests = []);
  return JSON.stringify(e, null, 2);
}
function el(e, t, n, r, o) {
  return t === "api-token" && n == "docker" && r && (o === "darwin" || o === "win32") && (e.toLowerCase().startsWith("https://localhost") || e.toLowerCase().startsWith("http://localhost")) ? e.replace(/localhost/i, "host.docker.internal") : e;
}
function _i({
  path: e,
  method: t,
  operationId: n,
  children: r
}) {
  return /* @__PURE__ */ a.jsxs(V_, { children: [
    n && /* @__PURE__ */ a.jsxs(W_, { children: [
      n,
      /* @__PURE__ */ a.jsx(qu, {})
    ] }),
    /* @__PURE__ */ a.jsxs(G_, { children: [
      /* @__PURE__ */ a.jsx(K_, { children: t }),
      /* @__PURE__ */ a.jsx(X_, { children: e })
    ] }),
    r
  ] });
}
const V_ = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-break: anywhere;
`, W_ = k.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  > svg {
    fill: var(${v.linkForeground});
  }
`, G_ = k.div`
  display: flex;
  gap: 4px;
`, K_ = k.div`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, X_ = k.div``;
function Y_({ operationId: e }) {
  var E, j, O;
  const t = re(), { oas: n, playbook: r, servers: o } = U((S) => S.scanconf), i = U((S) => S.config.data), { mockResult: s, tryResult: l } = U((S) => S.operations), c = U((S) => S.env.data), u = (S) => t(Pt(S)), d = (S, I) => t(zt({ location: S, reference: I })), p = (S, I) => t(Dt({ location: S, to: I })), h = (S, I) => {
    t(
      It({
        container: S,
        stage: {
          ref: I
        }
      })
    );
  }, f = (S) => {
    t(Yt(S)), t(se(["scanconf", "requests"]));
  }, g = Object.keys(r.operations), m = Object.keys(r.requests || {}), y = r.operations[e], x = Fe(s, "before"), b = Fe(s, "after"), {
    simple: w,
    environment: {
      env: { host: C }
    }
  } = dn(Ci(r), c);
  return y === void 0 ? /* @__PURE__ */ a.jsx(
    Xt,
    {
      message: `Unable to find operation with operationId "${e}" in scan configuration`,
      children: /* @__PURE__ */ a.jsx("p", { children: "Verify if the OpenAPI file contains operations that were added after the scan configuration was created. If needed, consider deleting and recreating the scan configuration." })
    }
  ) : /* @__PURE__ */ a.jsxs(Q_, { children: [
    /* @__PURE__ */ a.jsx(
      An,
      {
        menu: !0,
        servers: o,
        host: C,
        onTry: (S) => {
          t(_d(S));
        },
        onScan: (S) => {
          const I = el(
            S,
            i.platformAuthType,
            i.scanRuntime,
            i.docker.replaceLocalhost,
            i.platform
          ), [$, R] = Si(n, r);
          if (R !== void 0) {
            console.log("failed to serialize", R);
            return;
          }
          t(
            Js({
              path: y.request.request.path,
              method: y.request.request.method,
              operationId: e,
              env: {
                SCAN42C_HOST: I,
                ...w
              },
              scanconf: Ch($, e)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ a.jsx(
      J_,
      {
        onClick: (S) => {
          S.stopPropagation(), S.preventDefault(), f({ type: "operation", id: e });
        },
        children: /* @__PURE__ */ a.jsx(
          _i,
          {
            operationId: e,
            path: y.request.request.path,
            method: y.request.request.method
          }
        )
      }
    ),
    /* @__PURE__ */ a.jsx(
      xe,
      {
        defaultOpen: !1,
        title: "Authorization Tests",
        count: y.authorizationTests.length,
        children: /* @__PURE__ */ a.jsxs(Xi, { children: [
          /* @__PURE__ */ a.jsx(
            B_,
            {
              authorizationTests: y.authorizationTests,
              removeTest: (S) => {
                const I = y.authorizationTests.filter(($) => $ !== S);
                t(
                  ns({
                    operationId: e,
                    authorizationTests: I
                  })
                );
              }
            }
          ),
          /* @__PURE__ */ a.jsx(
            q_,
            {
              authorizationTests: r.authorizationTests,
              existing: y.authorizationTests,
              auth: y.request.auth,
              credentials: r.authenticationDetails[0],
              onSelect: (S) => {
                t(
                  ns({
                    operationId: e,
                    authorizationTests: [...y.authorizationTests, S]
                  })
                );
              }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ a.jsx(xe, { defaultOpen: !1, title: "Before", count: (E = y.before) == null ? void 0 : E.length, children: /* @__PURE__ */ a.jsxs(Xi, { children: [
      /* @__PURE__ */ a.jsx(
        Pn,
        {
          oas: n,
          stages: y.before,
          container: { container: "operationBefore", operationId: e },
          executionResult: Fe(s, "operationBefore"),
          saveStage: d,
          moveStage: p,
          removeStage: u,
          operations: r.operations,
          requests: r.requests,
          goToRequest: f
        }
      ),
      /* @__PURE__ */ a.jsx(
        zn,
        {
          operationIds: g,
          requestIds: m,
          onSelect: (S) => h({ container: "operationBefore", operationId: e }, S)
        }
      )
    ] }) }),
    /* @__PURE__ */ a.jsx(xe, { title: "Scenarios", count: (j = y.scenarios) == null ? void 0 : j.length, children: /* @__PURE__ */ a.jsx(I_, { operationId: e, goToRequest: f }) }),
    /* @__PURE__ */ a.jsx(xe, { defaultOpen: !1, title: "After", count: (O = y.after) == null ? void 0 : O.length, children: /* @__PURE__ */ a.jsxs(Xi, { children: [
      /* @__PURE__ */ a.jsx(
        Pn,
        {
          oas: n,
          stages: y.after,
          container: { container: "operationAfter", operationId: e },
          executionResult: Fe(s, "operationAfter"),
          saveStage: d,
          removeStage: u,
          moveStage: p,
          operations: r.operations,
          requests: r.requests,
          goToRequest: f
        }
      ),
      /* @__PURE__ */ a.jsx(
        zn,
        {
          operationIds: g,
          requestIds: m,
          onSelect: (S) => h({ container: "operationAfter", operationId: e }, S)
        }
      )
    ] }) }),
    (x == null ? void 0 : x.status) === "failure" && /* @__PURE__ */ a.jsx(Xt, { message: "Check Global Before block" }),
    (b == null ? void 0 : b.status) === "failure" && /* @__PURE__ */ a.jsx(Xt, { message: "Check Global After block" }),
    l.length > 0 && /* @__PURE__ */ a.jsx(xe, { title: "Result", children: /* @__PURE__ */ a.jsx(In, { result: l, collapsible: !0 }) })
  ] });
}
const Q_ = k.div`
  padding: 8px;
`, Xi = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, J_ = k.div`
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 8px;
  border: 1px solid var(${v.border});
  border-radius: 2px;
  cursor: pointer;
`, _h = k.button`
  cursor: pointer;
  background-color: var(${v.buttonSecondaryBackground});
  color: var(${v.buttonSecondaryForeground});
  border: 1px solid var(${v.buttonBorder});
  padding: 6px 16px;
  border-radius: 2px;
  &:focus {
    background-color: var(${v.buttonSecondaryHoverBackground});
  }
`;
function Z_({
  onAddScenario: e,
  operations: t
}) {
  const n = Object.entries(t).filter(([l, c]) => !c.customized).map(([l, c]) => l), [r, o] = _.useState(!1), [i, s] = _.useState(
    void 0
  );
  return /* @__PURE__ */ a.jsxs(
    Ms,
    {
      open: r,
      onOpenChange: (l) => {
        o(l);
      },
      children: [
        /* @__PURE__ */ a.jsx(qs, { asChild: !0, children: /* @__PURE__ */ a.jsx(_r, { style: { width: "100%" }, children: "New scenario" }) }),
        /* @__PURE__ */ a.jsxs(Fs, { children: [
          /* @__PURE__ */ a.jsx(n2, {}),
          /* @__PURE__ */ a.jsx(r2, { children: /* @__PURE__ */ a.jsxs(e2, { children: [
            /* @__PURE__ */ a.jsx(Ls, { children: "New Scenario" }),
            /* @__PURE__ */ a.jsx(Bs, { children: "Add happy path scenario for an operation" }),
            /* @__PURE__ */ a.jsx(t2, { children: /* @__PURE__ */ a.jsx(
              rh,
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
                _r,
                {
                  onClick: () => {
                    i != null && n.includes(i) && (e(i), o(!1));
                  },
                  children: "Add"
                }
              ),
              /* @__PURE__ */ a.jsx(Hs, { asChild: !0, children: /* @__PURE__ */ a.jsx(_h, { children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
const e2 = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, t2 = k.div`
  border: 1px solid var(${v.border});
`, n2 = k(Rs)`
  background-color: var(${v.computedTwo});
  position: fixed;
  inset: 0;
`, r2 = k(Ns)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${v.background});
  color: var(${v.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
function o2() {
  const e = re(), t = U((l) => l.operations.operationId), n = (l) => e(os(l)), r = (l) => e(Iy(l)), {
    playbook: { operations: o }
  } = U((l) => l.scanconf), s = [
    {
      id: "operations",
      title: "Operations",
      items: Object.entries(o).filter(([l, c]) => c.customized).map(([l, c]) => ({
        id: l,
        label: l,
        menu: /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsx(
          At,
          {
            onClick: (u) => u.stopPropagation(),
            onSelect: () => e(
              Gh({
                title: "Delete scenario",
                message: `Are you sure you want to delete scenario for operation "${l}"?`,
                actions: [
                  yd(l),
                  // if removing the current operation, clear the operationId
                  os(t === l ? void 0 : t)
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
    Ln,
    {
      title: "operations",
      noSectionTitles: !0,
      selected: t ? { sectionId: "operations", itemId: t } : void 0,
      sections: s,
      onSelected: (l) => n(l.itemId),
      render: (l) => /* @__PURE__ */ a.jsx(Y_, { operationId: l.itemId }, l.itemId),
      renderEmpty: () => /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h2", { children: "Scenarios" }),
        /* @__PURE__ */ a.jsx("p", { children: "Scan scenarios let you test operations that involve complex request flows" }),
        /* @__PURE__ */ a.jsx("p", { children: "Scenarios let you set up exact request and response sequences, ensuring resources are created or deleted as needed for testing specific API operations. Additionally, you can extract values from responses and pass them between subsequent operations." })
      ] }),
      renderButtons: () => /* @__PURE__ */ a.jsx(
        Z_,
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
function i2(e) {
  return e ? e.label : "";
}
function uu({
  name: e,
  options: t,
  placeholder: n,
  label: r
}) {
  const { field: o } = J({
    name: e,
    rules: { required: !0 }
  }), i = a2(t, o.value), s = (l) => {
    o.onChange(l == null ? void 0 : l.value);
  };
  return /* @__PURE__ */ a.jsx(
    s2,
    {
      options: t,
      placeholder: n,
      label: r,
      selected: i == null ? void 0 : i.value,
      onSelectedItemChange: s
    }
  );
}
function s2({
  options: e,
  placeholder: t,
  label: n,
  selected: r,
  onSelectedItemChange: o
}) {
  var d;
  const i = (d = e.filter((p) => p.value === r)) == null ? void 0 : d[0], { isOpen: s, getToggleButtonProps: l, getMenuProps: c, getItemProps: u } = qo({
    items: e,
    itemToString: i2,
    selectedItem: i || null,
    onSelectedItemChange: ({ selectedItem: p }) => {
      o(p);
    }
  });
  return /* @__PURE__ */ a.jsxs(l2, { children: [
    /* @__PURE__ */ a.jsxs(c2, { children: [
      n !== void 0 && /* @__PURE__ */ a.jsx("div", { children: n }),
      /* @__PURE__ */ a.jsxs(u2, { ...l(), children: [
        /* @__PURE__ */ a.jsx("span", { children: i ? i.label : t ?? "" }),
        /* @__PURE__ */ a.jsx(Er, {})
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(d2, { ...c(), isOpen: s, children: s && e.map((p, h) => /* @__PURE__ */ a.jsx("li", { ...u({ item: p, index: h }), children: /* @__PURE__ */ a.jsx("span", { children: p.label }) }, `${p.value}${h}`)) })
  ] });
}
function a2(e, t) {
  var n;
  return (n = e.filter((r) => r.value === t)) == null ? void 0 : n[0];
}
const l2 = k.div`
  display: flex;
  flex-direction: column;
  position: relative;
`, c2 = k.div`
  height: 40px;
  background-color: var(${v.inputBackground});
  border-radius: 2px;
  border: 1px solid var(${v.border});
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  gap: 4px;
  &:focus-within {
    border: 1px solid var(${v.focusBorder});
  }
  > div:first-child {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(${v.inputPlaceholderForeground});
  }
`, u2 = k.div`
  display: flex;
  color: var(${v.foreground});
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
    fill: var(${v.foreground});
  }
`, d2 = k.ul`
  max-height: 350px;
  overflow-y: auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0;
  list-style: none;
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
  ${({ isOpen: e }) => e && `
    border: 1px solid var(${v.dropdownBorder});
    padding: 4px;
  `}

  & > li {
    padding: 4px;
    cursor: pointer;
  }
  & > li:hover {
    background-color: var(${v.listHoverBackground});
  }
`;
function f2({
  onAddExternalRequest: e
}) {
  const t = Nu({
    defaultValues: {
      id: "",
      method: "post",
      url: "http://localhost:8080/",
      mode: "json"
    },
    mode: "onChange"
  }), n = cp.map((s) => ({ value: s, label: s.toUpperCase() })), [r, o] = _.useState(!1), i = (s) => {
    e(s.id, s.method, s.url, s.mode);
  };
  return /* @__PURE__ */ a.jsxs(
    Ms,
    {
      open: r,
      onOpenChange: (s) => {
        o(s), s && t.reset();
      },
      children: [
        /* @__PURE__ */ a.jsx(qs, { asChild: !0, children: /* @__PURE__ */ a.jsx(m2, { children: /* @__PURE__ */ a.jsx($r, {}) }) }),
        /* @__PURE__ */ a.jsxs(Fs, { children: [
          /* @__PURE__ */ a.jsx(p2, {}),
          /* @__PURE__ */ a.jsx(g2, { children: /* @__PURE__ */ a.jsx(Mu, { ...t, children: /* @__PURE__ */ a.jsxs(
            h2,
            {
              onSubmit: (s) => {
                t.handleSubmit(i)(s), s.preventDefault(), o(!1);
              },
              children: [
                /* @__PURE__ */ a.jsx(Ls, { children: "New External Request" }),
                /* @__PURE__ */ a.jsx(Bs, { children: "Add new external request" }),
                /* @__PURE__ */ a.jsx(Xe, { label: "Request ID", name: "id" }),
                /* @__PURE__ */ a.jsx(Xe, { label: "URL", name: "url" }),
                /* @__PURE__ */ a.jsx(uu, { label: "Method", name: "method", options: n }),
                /* @__PURE__ */ a.jsx(
                  uu,
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
                  /* @__PURE__ */ a.jsx(_r, { type: "submit", children: "Add" }),
                  /* @__PURE__ */ a.jsx(Hs, { asChild: !0, children: /* @__PURE__ */ a.jsx(_h, { children: "Cancel" }) })
                ] })
              ]
            }
          ) }) })
        ] })
      ]
    }
  );
}
const h2 = k.form`
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, p2 = k(Rs)`
  background-color: var(${v.computedTwo});
  position: fixed;
  inset: 0;
`, g2 = k(Ns)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;

  background-color: var(${v.background});
  color: var(${v.foreground});
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`, m2 = k.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  > svg {
    fill: var(${v.linkForeground});
    &:hover {
      fill: var(${v.linkActiveForeground});
    }
  }
`;
function Eh({ name: e, variables: t }) {
  const {
    field: { value: n }
  } = J({
    name: e
  });
  function r(i) {
    console.error(i);
  }
  const o = {
    namespace: "editor",
    editorState: () => {
      const i = JSON.stringify(n, null, 2), s = Pe(), l = i.split(`
`);
      for (let c = 0; c < l.length; c++)
        s.append(te(l[c])), c < l.length - 1 && s.append(on());
      ae().append(s);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: r,
    nodes: [Tt]
  };
  return /* @__PURE__ */ a.jsx(v2, { children: /* @__PURE__ */ a.jsxs(za, { initialConfig: o, children: [
    /* @__PURE__ */ a.jsx(
      Ma,
      {
        contentEditable: /* @__PURE__ */ a.jsx(Aa, {}),
        placeholder: /* @__PURE__ */ a.jsx("div", {}),
        ErrorBoundary: Ra
      }
    ),
    /* @__PURE__ */ a.jsx(Na, {}),
    /* @__PURE__ */ a.jsx(th, { variables: t }),
    /* @__PURE__ */ a.jsx(y2, { name: e })
  ] }) });
}
function y2({ name: e }) {
  const [t] = _e(), [n, r] = _.useState(void 0), { field: o } = J({
    name: e
  });
  return _.useEffect(() => {
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
  }, [t, o]), n === void 0 ? /* @__PURE__ */ a.jsxs(du, { children: [
    "Valid JSON",
    /* @__PURE__ */ a.jsx(
      Bu,
      {
        style: {
          fill: `var(${v.foreground})`
        }
      }
    )
  ] }) : /* @__PURE__ */ a.jsxs(du, { error: !0, children: [
    n,
    /* @__PURE__ */ a.jsx(
      Mo,
      {
        style: {
          fill: `var(${v.errorForeground})`
        }
      }
    )
  ] });
}
const v2 = k.div`
  color: var(${v.foreground});
  background-color: var(${v.background});
  border: 1px solid var(${v.border});

  &:focus-within {
    //border: 1px solid var(${v.focusBorder});
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
`, du = k.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding: 2px 4px;
  border-top: 1px solid var(${v.border});
  line-break: anywhere;
  color: ${({ error: e }) => e ? `var(${v.errorForeground})` : `var(${v.foreground})`};
  background-color: ${({ error: e }) => e ? `var(${v.errorBackground})` : `var(${v.background})`};
`;
function x2({
  name: e,
  password: t
}) {
  const { field: n } = J({
    name: e
  });
  return /* @__PURE__ */ a.jsx("input", { ...n, type: t ? "password" : "text" });
}
function fu({
  name: e,
  variables: t
}) {
  const { fields: n, append: r, remove: o } = cn({
    name: e
  });
  return /* @__PURE__ */ a.jsx(w2, { children: /* @__PURE__ */ a.jsxs(j2, { children: [
    /* @__PURE__ */ a.jsxs(C2, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsx(S2, { children: n.map((i, s) => /* @__PURE__ */ a.jsx(
      _2,
      {
        name: `${e}.${s}`,
        variables: t,
        remove: () => {
          o(s);
        }
      },
      i.id
    )) }),
    /* @__PURE__ */ a.jsx(b2, { append: r })
  ] }) });
}
function b2({ append: e }) {
  return /* @__PURE__ */ a.jsx(
    k2,
    {
      placeholder: "name",
      value: "",
      onChange: (t) => {
        e({ key: t.target.value, value: "" }, { shouldFocus: !0 });
      }
    }
  );
}
const k2 = k.input`
  grid-column: span 3;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${v.border});
  color: var(${v.foreground});
  margin-right: 10px;
  padding: 4px 8px;
`, w2 = k.div`
  margin: 8px 4px;
`, j2 = k.div`
  margin: 4px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, S2 = k.div`
  display: contents;
`, C2 = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function _2({
  name: e,
  variables: t,
  remove: n
}) {
  return /* @__PURE__ */ a.jsxs(T2, { children: [
    /* @__PURE__ */ a.jsx(x2, { name: `${e}.key` }),
    /* @__PURE__ */ a.jsx(pi, { name: `${e}.value`, variables: t }),
    /* @__PURE__ */ a.jsx(
      E2,
      {
        onClick: (r) => {
          r.preventDefault(), r.stopPropagation(), n();
        },
        children: /* @__PURE__ */ a.jsx(Ue, {})
      }
    )
  ] });
}
const E2 = k.button`
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
    fill: var(${v.foreground});
  }
`, T2 = k.div`
  display: contents;
  > input,
  > div {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(${v.border});
    color: var(${v.foreground});
    padding: 4px 8px;
  }
  &:hover > :last-child {
    visibility: visible;
  }
`;
function O2({
  requestRef: e,
  stage: t,
  saveRequest: n,
  defaultCollapsed: r,
  variables: o
}) {
  const i = I2(t);
  return /* @__PURE__ */ a.jsx(Th, { children: /* @__PURE__ */ a.jsx(
    Je,
    {
      data: t,
      saveData: n,
      wrapFormData: iw,
      unwrapFormData: cw,
      children: /* @__PURE__ */ a.jsxs(an, { defaultCollapsed: r, children: [
        /* @__PURE__ */ a.jsxs(Ru, { children: [
          /* @__PURE__ */ a.jsx("span", { children: e.id }),
          /* @__PURE__ */ a.jsxs(A2, { children: [
            /* @__PURE__ */ a.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ a.jsx(Ha, { name: "defaultResponse", options: i })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs(Un, { children: [
          /* @__PURE__ */ a.jsx(z2, { children: t.request.method }),
          /* @__PURE__ */ a.jsx(P2, { onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ a.jsx(pi, { variables: o, name: "url" }) })
        ] }),
        /* @__PURE__ */ a.jsx($2, { stage: t, variables: o })
      ] })
    }
  ) });
}
function $2({
  stage: e,
  variables: t
}) {
  return /* @__PURE__ */ a.jsx(Th, { children: /* @__PURE__ */ a.jsx(
    ct,
    {
      tabs: [
        {
          id: "body",
          title: "Body",
          content: /* @__PURE__ */ a.jsx(Eh, { variables: t, name: "body.value" }),
          disabled: e.request.body === void 0
        },
        {
          id: "query",
          title: "Query",
          content: /* @__PURE__ */ a.jsx(fu, { name: "parameters.query", variables: t })
        },
        {
          id: "header",
          title: "Headers",
          content: /* @__PURE__ */ a.jsx(fu, { name: "parameters.header", variables: t })
        },
        {
          id: "responses",
          title: "Response processing",
          content: /* @__PURE__ */ a.jsx(Qo, { editable: !0, responseCodes: D2 })
        }
      ]
    }
  ) });
}
function I2(e) {
  return Object.keys(e.responses || {}).map((t) => ({ label: t, value: t }));
}
const D2 = [
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
], Th = k.div`
  > div {
    background-color: var(${v.background});
  }
`, P2 = k.div`
  flex: 1;
  background-color: var(${v.background});
  border: 1px solid var(${v.border});
`, z2 = k.div`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, A2 = k.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${v.border});
  }
`;
function R2({
  request: e,
  requestRef: t
}) {
  var w, C, E;
  const n = U((j) => j.prefs.useGlobalBlocks), {
    tryResult: r,
    mockResult: o,
    mockMissingVariables: i
  } = U((j) => j.requests), s = re(), { playbook: l, servers: c } = U((j) => j.scanconf), u = U((j) => j.env.data), d = (j, O) => s(ra({ server: j, inputs: O })), p = (j) => s(Ir({ ref: t, stage: j })), h = Fe(o, "Global Before"), f = Fe(o, "Global After"), g = Fe(o, "Request"), m = [
    ...Vs,
    ...H2(((E = (C = (w = g == null ? void 0 : g.results) == null ? void 0 : w[0]) == null ? void 0 : C.variablesReplaced) == null ? void 0 : E.stack) || [])
  ], [y, x] = _.useState({}), {
    environment: {
      env: { host: b }
    }
  } = dn(Ci(l), u);
  return _.useEffect(() => {
    const j = { ...y };
    for (const O of Object.keys(j))
      i.includes(O) || delete j[O];
    for (const O of i)
      j[O] === void 0 && (j[O] = "");
    x(j);
  }, [i]), /* @__PURE__ */ a.jsxs(N2, { children: [
    /* @__PURE__ */ a.jsx(
      An,
      {
        servers: c,
        host: b,
        onTry: (j) => d(j, y),
        menu: !0
      }
    ),
    /* @__PURE__ */ a.jsxs(xe, { title: "Request", children: [
      /* @__PURE__ */ a.jsx(
        O2,
        {
          defaultCollapsed: !1,
          variables: m,
          requestRef: t,
          stage: e,
          saveRequest: p
        }
      ),
      /* @__PURE__ */ a.jsxs(B2, { children: [
        "Unset variables",
        /* @__PURE__ */ a.jsx(Hn, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ a.jsx(L2, { children: /* @__PURE__ */ a.jsx(
        Je,
        {
          wrapFormData: M2,
          unwrapFormData: q2,
          data: y,
          saveData: (j) => x(j),
          children: /* @__PURE__ */ a.jsx(Fr, { name: "env" })
        }
      ) })
    ] }),
    n && (h == null ? void 0 : h.status) === "failure" && /* @__PURE__ */ a.jsx(hu, { children: /* @__PURE__ */ a.jsx(Xt, { message: "Check Global Before block" }) }),
    n && (f == null ? void 0 : f.status) === "failure" && /* @__PURE__ */ a.jsx(hu, { children: /* @__PURE__ */ a.jsx(Xt, { message: "Check Global After block" }) }),
    r.length > 0 && /* @__PURE__ */ a.jsx(xe, { title: "Result", children: /* @__PURE__ */ a.jsx(In, { result: r, collapsible: n }) })
  ] });
}
const N2 = k.div`
  padding: 8px;
`, hu = k.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function M2(e) {
  return {
    env: Object.entries(e).map(([t, n]) => ({ key: t, value: n, type: typeof n }))
  };
}
function q2(e) {
  const t = {};
  for (const { key: n, value: r, type: o } of e.env)
    t[n] = F2(r, o);
  return t;
}
function F2(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
const L2 = k.div`
  border: 1px solid var(${v.border});
  background-color: var(${v.background});
`, B2 = k.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`;
function H2(e) {
  const t = [];
  for (const n of e)
    for (const r of Object.keys(n.env))
      t.includes(r) || t.push(r);
  return t.sort(), t;
}
const U2 = { type: "string" };
function V2({
  name: e,
  schema: t,
  onDelete: n,
  variables: r,
  isDefinedInOpenAPI: o
}) {
  const {
    fieldState: { error: i }
  } = J({ name: `${e}.value` }), { field: s } = J({ name: `${e}.key` });
  return /* @__PURE__ */ a.jsxs(W2, { children: [
    /* @__PURE__ */ a.jsxs(K2, { children: [
      s.value,
      !o && /* @__PURE__ */ a.jsx(Hn, { icon: "exclamation", children: "Parameter is not defined in the OpenAPI specification for this API" })
    ] }),
    /* @__PURE__ */ a.jsx(
      pi,
      {
        name: `${e}.value`,
        variables: r,
        encode: (l) => Y2(t || U2, l),
        decode: (l) => Q2(t, l)
      }
    ),
    /* @__PURE__ */ a.jsx(
      X2,
      {
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), n();
        },
        children: /* @__PURE__ */ a.jsx(Ue, {})
      }
    ),
    i && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsxs(G2, { children: [
        /* @__PURE__ */ a.jsx(Qe, {}),
        /* @__PURE__ */ a.jsx("span", { children: i.message })
      ] }),
      /* @__PURE__ */ a.jsx("div", {})
    ] })
  ] });
}
const W2 = k.div`
  display: contents;
  &:hover > :last-child {
    opacity: 1;
  }
`, G2 = k.div`
  color: var(${v.errorForeground});
  background-color: var(${v.errorBackground});
  border: none !important;
  align-items: center;
  > svg {
    fill: var(${v.errorForeground});
  }
  display: flex;
  gap: 4px;
  grid-column: span 2;
`, K2 = k.div`
  flex: 1;
  border-bottom: 1px solid var(${v.border});
  margin-right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
`, X2 = k.button`
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
    fill: var(${v.foreground});
  }
`;
function Y2(e, t) {
  if (t === void 0)
    return "";
  const n = e.type;
  return n === void 0 || n === "string" || n === "number" || n === "integer" || n === "boolean" ? `${t}` : JSON.stringify(t);
}
function Q2(e, t) {
  const n = (e == null ? void 0 : e.type) || "string";
  if (t.match(eg()) || n === "string")
    return t;
  if (n === "integer")
    return J2(t);
  if (n === "number")
    return Z2(t);
  if (n === "boolean") {
    if (t === "true" || t === "false")
      return t === "true";
    throw new Error("failed to convert to 'boolean'");
  }
  if (n === "object" || n === "array")
    return eE(t);
  throw new Error(`failed to convert, unsupported type: ${n}`);
}
function J2(e) {
  const t = Number.parseInt(e, 10);
  if (isNaN(t))
    throw new Error("failed to convert to 'integer'");
  return t;
}
function Z2(e) {
  const t = Number.parseFloat(e);
  if (isNaN(t))
    throw new Error("failed to convert to 'number'");
  return t;
}
function eE(e) {
  try {
    return JSON.parse(e);
  } catch (t) {
    throw new Error(`failed to convert: ${t}`);
  }
}
function tE({
  options: e,
  placeholder: t,
  selected: n,
  onSelectedItemChange: r
}) {
  const [o, i] = _.useState(""), [s, l] = _.useState(e);
  _.useEffect(() => {
    l(
      e.filter((f) => o === "" || f.toLowerCase().includes(o.toLowerCase()))
    );
  }, [o, e]);
  const { isOpen: c, getMenuProps: u, getInputProps: d, getItemProps: p, reset: h } = Fo({
    initialInputValue: n,
    items: s,
    onSelectedItemChange: ({ selectedItem: f }) => {
      h(), r(f);
    },
    onInputValueChange: ({ inputValue: f }) => {
      i(f !== void 0 ? f : "");
    },
    itemToString: (f) => f || ""
  });
  return /* @__PURE__ */ a.jsxs(nE, { children: [
    /* @__PURE__ */ a.jsx(
      rE,
      {
        ...d({
          onKeyDown: (f) => {
            (f.key === "Enter" || f.key === "Tab") && (r(o), i(""), h());
          }
        }),
        placeholder: t
      }
    ),
    /* @__PURE__ */ a.jsx(oE, { visible: c && (s.length > 0 || o.length > 0), children: /* @__PURE__ */ a.jsxs(iE, { ...u(), children: [
      s.map((f, g) => /* @__PURE__ */ a.jsx(
        "li",
        {
          ...p({
            item: f,
            index: g
          }),
          children: f
        },
        `li-${g}`
      )),
      o.length > 0 && s.length === 0 && /* @__PURE__ */ a.jsx(
        "li",
        {
          onClick: (f) => {
            f.stopPropagation(), f.preventDefault(), r(o), i(""), h();
          },
          children: o
        }
      )
    ] }) })
  ] });
}
const nE = k.div`
  display: flex;
  flex-direction: column;
  &:focus-within {
    border: 1px solid var(${v.focusBorder});
  }
  border: 1px solid transparent;
`, rE = k.input`
  background: transparent;
  border: none;
  color: var(${v.foreground});
  &::placeholder {
    color: var(${v.inputPlaceholderForeground});
  }
  &:focus {
    outline: none;
  }
`, oE = k.div`
  position: relative;
  z-index: 1;
  visibility: ${({ visible: e }) => e ? "visible" : "hidden"};
`, iE = k.ul`
  border: 1px solid var(${v.dropdownBorder});
  background-color: var(${v.dropdownBackground});
  color: var(${v.dropdownForeground});
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
    background-color: var(${v.listHoverBackground});
  }
`;
function sE({
  name: e,
  group: t,
  onSelection: n,
  placeholder: r,
  allowUnknown: o
}) {
  const i = Tr({ name: e }), s = Object.keys(t), l = i.map(({ key: d }) => d), c = Object.entries(t).map(([d, p]) => ({
    name: d,
    isArray: aE(p)
  })).filter(({ isArray: d }) => d).map(({ name: d }) => d), u = s.filter(
    (d) => c.includes(d) || !l.includes(d)
  );
  return /* @__PURE__ */ a.jsx(lE, { children: /* @__PURE__ */ a.jsxs("div", { children: [
    o && /* @__PURE__ */ a.jsx(
      tE,
      {
        placeholder: r,
        options: s.filter((d) => u.includes(d)),
        onSelectedItemChange: (d) => {
          d && n(d, t[d]);
        }
      }
    ),
    !o && /* @__PURE__ */ a.jsx(
      Wn,
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
function aE(e) {
  var t;
  return "type" in e && e.type === "array" || "schema" in e && ((t = e.schema) == null ? void 0 : t.type) === "array";
}
const lE = k.div`
  display: flex;
  margin-right: 10px;
  > div {
    flex: 1;
  }
`;
function Kt({
  oas: e,
  name: t,
  group: n,
  placeholder: r,
  variables: o,
  allowUnknown: i
}) {
  const { fields: s, append: l, remove: c } = cn({
    name: t
  }), u = async (d, p) => {
    l({ key: d, value: "" }, { shouldFocus: !0 });
  };
  return /* @__PURE__ */ a.jsxs(pE, { children: [
    /* @__PURE__ */ a.jsxs(gE, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" }),
      /* @__PURE__ */ a.jsx("div", {})
    ] }),
    /* @__PURE__ */ a.jsxs(mE, { children: [
      s.map((d, p) => /* @__PURE__ */ a.jsx(
        V2,
        {
          name: `${t}.${p}`,
          schema: uE(e, n, d.key),
          onDelete: () => c(p),
          variables: o,
          isDefinedInOpenAPI: cE(n, d.key)
        },
        d.id
      )),
      /* @__PURE__ */ a.jsx(
        sE,
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
function cE(e, t) {
  return e[t] !== void 0;
}
function uE(e, t, n) {
  if (t[n]) {
    const r = t[n];
    return dE(r) ? hE(e, r) : fE(r);
  }
}
function dE(e) {
  var t;
  return "type" in e && e.type === "array" || "schema" in e && ((t = e.schema) == null ? void 0 : t.type) === "array";
}
function fE(e) {
  if ("schema" in e)
    return e.schema;
  if ("type" in e)
    return e;
}
function hE(e, t) {
  var n;
  if ("schema" in t && ((n = t.schema) == null ? void 0 : n.type) === "array")
    return En(e, t.schema.items);
  if ("type" in t && t.type === "array")
    return En(e, t.items);
}
const pE = k.div`
  padding: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 2fr 1em;
`, gE = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, mE = k.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${v.border});
  }
  & > div > div:last-child {
    padding: 2px 5px;
  }
  // for now keep with of a new entry selector to 1 column
  // & > div:last-child {
  //   grid-column: span 3;
  // }
`;
function yE(e, t, n) {
  const r = Eu(e, e.paths[t]), o = zo(e, t, n), i = Tu(e, o);
  return Ou(e, r, i);
}
function vE(e, t, n) {
  const r = zo(e, t, n);
  return ((r == null ? void 0 : r.security) ?? e.security ?? []).length > 0;
}
function xE(e, t, n) {
  var s, l;
  const r = zo(e, t, n), o = (r == null ? void 0 : r.security) ?? e.security ?? [], i = [];
  for (const c of o) {
    const u = {};
    for (const d of Object.keys(c))
      (s = e == null ? void 0 : e.securityDefinitions) != null && s[d] && (u[d] = (l = e == null ? void 0 : e.securityDefinitions) == null ? void 0 : l[d]);
    i.push(u);
  }
  return i;
}
function bE({
  scheme: e,
  schemeName: t,
  credentials: n,
  value: r,
  onChange: o
}) {
  const i = re(), l = jE(n).filter(
    ({ credential: c }) => Ua(c, e)
  ).map(({ name: c }) => ({ label: c, value: c }));
  return /* @__PURE__ */ a.jsx(kE, { children: /* @__PURE__ */ a.jsx(
    Wn,
    {
      placeholder: "",
      options: l,
      selected: r,
      onSelectedItemChange: (c) => c && o(c.value),
      bottomMenu: /* @__PURE__ */ a.jsxs(
        wE,
        {
          onClick: (c) => {
            c.stopPropagation(), c.preventDefault(), i(se(["scanconf", "auth"]));
          },
          children: [
            "Manage authentication ",
            /* @__PURE__ */ a.jsx(zu, {})
          ]
        }
      )
    }
  ) });
}
const kE = k.div``, wE = k.li`
  color: var(${v.linkForeground});
  &:hover {
    color: var(${v.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function jE(e) {
  return Object.entries(e).map(([t, n]) => Object.entries(n.methods || {}).map(([r, o]) => ({ name: n.default === r ? t : `${t}/${r}`, credential: n }))).flat();
}
function SE({
  requirement: e,
  credentials: t,
  values: n,
  setValues: r
}) {
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: Object.keys(e).sort().map((o) => {
    const i = e[o];
    return /* @__PURE__ */ a.jsxs(CE, { children: [
      /* @__PURE__ */ a.jsxs(_E, { children: [
        'Credential for "',
        o,
        '"'
      ] }),
      /* @__PURE__ */ a.jsx(
        bE,
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
const CE = k.div`
  display: contents;
`, _E = k.div`
  display: flex;
  align-items: center;
`;
function EE({
  security: e,
  value: t,
  setValue: n
}) {
  const r = e.map((o, i) => ({
    value: i,
    label: Object.keys(o).sort().join(", ")
  }));
  return /* @__PURE__ */ a.jsxs(TE, { children: [
    /* @__PURE__ */ a.jsx(OE, { children: "Security scheme(s)" }),
    /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(
      Wn,
      {
        options: r,
        selected: t,
        onSelectedItemChange: (o) => o && n(o.value)
      }
    ) })
  ] });
}
const TE = k.div`
  display: contents;
`, OE = k.div`
  display: flex;
  align-items: center;
`;
function Oh({
  oas: e,
  security: t,
  credentials: n
}) {
  const { field: r } = J({
    name: "auth"
  }), o = PE(t, n, r.value), i = o.reduce(
    (c, u) => c.relevance > u.relevance ? c : u
  ), [s, l] = _.useState(
    i.requirementIndex
  );
  return /* @__PURE__ */ a.jsxs($E, { children: [
    /* @__PURE__ */ a.jsxs(IE, { children: [
      /* @__PURE__ */ a.jsx("div", { children: "Name" }),
      /* @__PURE__ */ a.jsx("div", { children: "Value" })
    ] }),
    /* @__PURE__ */ a.jsxs(DE, { children: [
      /* @__PURE__ */ a.jsx(
        EE,
        {
          security: t,
          value: s,
          setValue: (c) => {
            l(c), r.onChange(Object.values(o[c].matches));
          }
        }
      ),
      /* @__PURE__ */ a.jsx(
        SE,
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
const $E = k.div`
  margin: 8px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`, IE = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, DE = k.div`
  display: contents;
  & > div > div {
    padding: 4px 8px;
    border-bottom: 1px solid var(${v.border});
  }
`;
function PE(e, t, n) {
  const r = zE(t, n);
  return e.map((o, i) => {
    const s = RE(o, r), l = Object.keys(o).length, c = Object.keys(s).length;
    return {
      requirementIndex: i,
      matches: s,
      relevance: c / l
    };
  });
}
function zE(e, t) {
  const n = {};
  for (const r of t) {
    const o = AE(e, r);
    o !== void 0 && (n[r] = o);
  }
  return n;
}
function AE(e, t) {
  for (const [n, r] of Object.entries(e)) {
    if (n === t)
      return r;
    for (const [o, i] of Object.entries(r.methods))
      if (`${n}/${o}` === t)
        return r;
  }
}
function RE(e, t) {
  const n = { ...t }, r = {};
  for (const [o, i] of Object.entries(e))
    for (const [s, l] of Object.entries(n))
      if (Ua(l, i)) {
        r[o] = s, delete n[s];
        break;
      }
  return r;
}
function NE({ name: e }) {
  const {
    field: { value: t }
  } = J({ name: e });
  function n(o) {
    console.error(o);
  }
  const r = {
    namespace: "editor",
    editorState: () => {
      const o = Pe(), i = t.split(`
`);
      for (let s = 0; s < i.length; s++)
        o.append(te(i[s])), s < i.length - 1 && o.append(on());
      ae().append(o);
    },
    theme: {
      root: "editor",
      paragraph: "editor-paragraph"
    },
    onError: n,
    nodes: [Tt]
  };
  return /* @__PURE__ */ a.jsx(qE, { children: /* @__PURE__ */ a.jsxs(za, { initialConfig: r, children: [
    /* @__PURE__ */ a.jsx(
      Ma,
      {
        contentEditable: /* @__PURE__ */ a.jsx(Aa, {}),
        placeholder: /* @__PURE__ */ a.jsx("div", {}),
        ErrorBoundary: Ra
      }
    ),
    /* @__PURE__ */ a.jsx(Na, {}),
    /* @__PURE__ */ a.jsx(ME, { name: e })
  ] }) });
}
function ME({ name: e }) {
  const [t] = _e(), { field: n } = J({
    name: e
  });
  return _.useEffect(() => t.registerTextContentListener((r) => {
    n.onChange(r);
  }), [t, n]), null;
}
const qE = k.div`
  color: var(${v.foreground});
  background-color: var(${v.background});
  border: 1px solid var(${v.border});

  &:focus-within {
    //border: 1px solid var(${v.focusBorder});
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
function FE({
  oas: e,
  requestBody: t,
  variables: n
}) {
  const {
    field: { value: r }
  } = J({ name: "body.mediaType" });
  return t === void 0 ? null : /* @__PURE__ */ a.jsxs(LE, { children: [
    r === "raw" && /* @__PURE__ */ a.jsx(NE, { name: "body.value" }),
    r !== "raw" && /* @__PURE__ */ a.jsx(Eh, { variables: n, name: "body.value" })
  ] });
}
const LE = k.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;
`;
function pu(e) {
  return JSON.stringify(e, null, 2);
}
function gu(e) {
  try {
    return JSON.parse(e);
  } catch (t) {
    return new Error(`failed to convert: ${t}`);
  }
}
function BE({
  oas: e,
  group: t,
  variables: n
}) {
  const { control: r } = ln(), {
    field: o,
    fieldState: { error: i }
  } = J({
    name: "body.value",
    control: r,
    rules: {
      validate: (c) => VE(c)
    }
  }), [s, l] = _.useState(pu(o.value));
  return _.useEffect(() => {
    o.value instanceof Error || JSON.stringify(gu(s)) !== JSON.stringify(o.value) && l(pu(o.value));
  }, [o.value, s]), /* @__PURE__ */ a.jsxs(HE, { children: [
    /* @__PURE__ */ a.jsx(
      "textarea",
      {
        rows: 10,
        onChange: (c) => {
          o.onChange(gu(c.target.value)), l(c.target.value);
        },
        onBlur: o.onBlur,
        value: s,
        ref: o.ref
      }
    ),
    i && /* @__PURE__ */ a.jsxs(UE, { children: [
      /* @__PURE__ */ a.jsx(Qe, {}),
      " ",
      i.message
    ] })
  ] });
}
const HE = k.div`
  margin: 8px;
  gap: 8px;
  display: flex;
  flex-flow: column;

  & > textarea {
    color: var(${v.foreground});
    background-color: var(${v.background});
    border: 1px solid var(${v.border});
    padding: 4px;
  }
`, UE = k.div`
  display: flex;
  align-items: center;
  color: var(${v.errorForeground});
  > svg {
    fill: var(${v.errorForeground});
    padding-right: 4px;
  }
  display: flex;
  margin: 4px 0;
`;
function VE(e) {
  if (e instanceof Error)
    return e.message;
}
function WE({
  oas: e,
  path: t,
  method: n,
  credentials: r,
  settings: o,
  availableVariables: i
}) {
  const { getValues: s } = ln(), l = s("body") !== void 0, c = Ao(e) ? GE(e, r, t, n, i, l) : KE(e, r, t, n, i, l);
  return /* @__PURE__ */ a.jsx(ct, { tabs: c });
}
function GE(e, t, n, r, o, i) {
  const s = Z1(e, n, r), l = Po(e, n, r), c = En(e, l == null ? void 0 : l.requestBody), u = Tr({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ a.jsx(FE, { oas: e, requestBody: c, variables: o }),
      disabled: c === void 0 || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ a.jsx(
        Oh,
        {
          oas: e,
          credentials: t,
          security: tw(e, n, r)
        }
      ),
      disabled: !ew(e, n, r)
    },
    {
      id: "path",
      title: "Path",
      content: /* @__PURE__ */ a.jsx(
        Kt,
        {
          oas: e,
          group: s.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: _n(s.path, u.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ a.jsx(
        Kt,
        {
          oas: e,
          group: s.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: _n(s.query, u.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ a.jsx(
        Kt,
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
        Kt,
        {
          oas: e,
          group: s.cookie,
          name: "parameters.cookie",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: _n(s.cookie, u.cookie)
    },
    {
      id: "environment",
      title: "Environment",
      content: /* @__PURE__ */ a.jsx(Fr, { name: "environment", variables: o })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ a.jsx(Qo, {})
    }
  ];
}
function KE(e, t, n, r, o, i) {
  const s = yE(e, n, r), l = Tr({ name: "parameters" });
  return [
    {
      id: "body",
      title: "Body",
      content: /* @__PURE__ */ a.jsx(BE, { oas: e, group: s.body, variables: o }),
      disabled: _n(s.body, l.body) || !i
    },
    {
      id: "security",
      title: "Auth",
      content: /* @__PURE__ */ a.jsx(
        Oh,
        {
          oas: e,
          credentials: t,
          security: xE(e, n, r)
        }
      ),
      disabled: !vE(e, n, r)
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
        Kt,
        {
          oas: e,
          group: s.path,
          name: "parameters.path",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: _n(s.path, l.path)
    },
    {
      id: "query",
      title: "Query",
      content: /* @__PURE__ */ a.jsx(
        Kt,
        {
          oas: e,
          group: s.query,
          name: "parameters.query",
          placeholder: "Add new parameter",
          variables: o
        }
      ),
      disabled: _n(s.query, l.query)
    },
    {
      id: "header",
      title: "Header",
      content: /* @__PURE__ */ a.jsx(
        Kt,
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
      content: /* @__PURE__ */ a.jsx(Fr, { name: "environment", variables: o })
    },
    {
      id: "responses",
      title: "Response processing",
      content: /* @__PURE__ */ a.jsx(Qo, {})
    }
  ];
}
function _n(e, t) {
  return (e === void 0 || Object.keys(e).length === 0) && (t === void 0 || t.length === 0);
}
function XE({
  oas: e,
  requestRef: t,
  stage: n,
  credentials: r,
  saveRequest: o,
  defaultCollapsed: i,
  availableVariables: s
}) {
  const l = YE(n);
  return /* @__PURE__ */ a.jsx(QE, { children: /* @__PURE__ */ a.jsx(
    Je,
    {
      data: n,
      saveData: o,
      wrapFormData: ow,
      unwrapFormData: lw,
      children: /* @__PURE__ */ a.jsxs(an, { defaultCollapsed: i, children: [
        /* @__PURE__ */ a.jsxs(Ru, { children: [
          /* @__PURE__ */ a.jsx("span", { children: t.id }),
          /* @__PURE__ */ a.jsxs(eT, { children: [
            /* @__PURE__ */ a.jsx("span", { children: "Default Response" }),
            /* @__PURE__ */ a.jsx(Ha, { name: "defaultResponse", options: l })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs(Un, { children: [
          /* @__PURE__ */ a.jsx(JE, { children: n.request.method }),
          /* @__PURE__ */ a.jsx(ZE, { children: n.request.path })
        ] }),
        /* @__PURE__ */ a.jsx(
          WE,
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
function YE(e) {
  return Object.keys(e.responses || {}).map((t) => ({ label: t, value: t }));
}
const QE = k.div`
  > div {
    background-color: var(${v.background});
  }
`, JE = k.div`
  background-color: var(${v.badgeBackground});
  color: var(${v.badgeForeground});
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 16px;
  text-transform: uppercase;
  font-size: 11px;
`, ZE = k.div``, eT = k.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-weight: 400;
  flex: 1;
  justify-content: end;
  > div {
    width: 80px;
    border: 1px solid var(${v.border});
  }
`;
function tT({
  request: e,
  requestRef: t
}) {
  var O, S, I;
  const n = re(), { oas: r, playbook: o, servers: i } = U(($) => $.scanconf), s = U(($) => $.config.data), l = U(($) => $.env.data), c = U(($) => $.prefs.useGlobalBlocks), {
    tryResult: u,
    mockResult: d,
    mockMissingVariables: p
  } = U(($) => $.requests), h = ($, R) => n(ra({ server: $, inputs: R })), f = ($) => n(Ir({ ref: t, stage: $ })), g = o.authenticationDetails[0], m = Fe(d, "Global Before"), y = Fe(d, "Global After"), x = Fe(d, "Request"), b = [
    ...Vs,
    ...lT(((I = (S = (O = x == null ? void 0 : x.results) == null ? void 0 : O[0]) == null ? void 0 : S.variablesReplaced) == null ? void 0 : I.stack) || [])
  ], [w, C] = _.useState({}), {
    simple: E,
    environment: {
      env: { host: j }
    }
  } = dn(Ci(o), l);
  return _.useEffect(() => {
    const $ = { ...w };
    for (const R of Object.keys($))
      p.includes(R) || delete $[R];
    for (const R of p)
      $[R] === void 0 && ($[R] = "");
    C($);
  }, [p]), /* @__PURE__ */ a.jsxs(nT, { children: [
    /* @__PURE__ */ a.jsx(
      An,
      {
        menu: !0,
        servers: i,
        host: j,
        onTry: ($) => h($, w),
        onScan: ($) => {
          const R = el(
            $,
            s.platformAuthType,
            s.scanRuntime,
            s.docker.replaceLocalhost,
            s.platform
          ), [L, M] = Si(r, o);
          if (M !== void 0) {
            console.log("failed to serialize", M);
            return;
          }
          n(
            Js({
              path: e.request.path,
              method: e.request.method,
              operationId: e.operationId,
              env: {
                SCAN42C_HOST: R,
                ...E
              },
              scanconf: Ch(L, e.operationId)
            })
          );
        }
      }
    ),
    /* @__PURE__ */ a.jsxs(xe, { title: "Request", children: [
      /* @__PURE__ */ a.jsx(
        XE,
        {
          defaultCollapsed: !1,
          oas: r,
          credentials: g,
          availableVariables: b,
          requestRef: t,
          stage: e,
          saveRequest: f
        }
      ),
      /* @__PURE__ */ a.jsxs(aT, { children: [
        "Unset variables",
        /* @__PURE__ */ a.jsx(Hn, { children: "Enter values for these unset variables to 'Try' the Operation. Note that these values will not be persisted in the Scan configuration." })
      ] }),
      /* @__PURE__ */ a.jsx(sT, { children: /* @__PURE__ */ a.jsx(
        Je,
        {
          wrapFormData: rT,
          unwrapFormData: oT,
          data: w,
          saveData: ($) => C($),
          children: /* @__PURE__ */ a.jsx(Fr, { name: "env" })
        }
      ) })
    ] }),
    c && (m == null ? void 0 : m.status) === "failure" && /* @__PURE__ */ a.jsx(mu, { children: /* @__PURE__ */ a.jsx(Xt, { message: "Check Global Before block" }) }),
    c && (y == null ? void 0 : y.status) === "failure" && /* @__PURE__ */ a.jsx(mu, { children: /* @__PURE__ */ a.jsx(Xt, { message: "Check Global After block" }) }),
    u.length > 0 && /* @__PURE__ */ a.jsx(xe, { title: "Result", children: /* @__PURE__ */ a.jsx(In, { result: u, collapsible: c }) })
  ] });
}
const nT = k.div`
  padding: 8px;
`;
function rT(e) {
  return {
    env: Object.entries(e).map(([t, n]) => ({ key: t, value: n, type: typeof n }))
  };
}
function oT(e) {
  const t = {};
  for (const { key: n, value: r, type: o } of e.env)
    t[n] = iT(r, o);
  return t;
}
function iT(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
const sT = k.div`
  border: 1px solid var(${v.border});
  background-color: var(${v.background});
`, aT = k.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  align-items: center;
`, mu = k.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;
function lT(e) {
  const t = [];
  for (const n of e)
    for (const r of Object.keys(n.env))
      t.includes(r) || t.push(r);
  return t.sort(), t;
}
function cT({ requestRef: e }) {
  var r;
  const { playbook: t } = U((o) => o.scanconf), n = e.type === "operation" ? t.operations[e.id].request : (r = t.requests) == null ? void 0 : r[e.id];
  return n === void 0 ? /* @__PURE__ */ a.jsxs("div", { children: [
    "Unable to locate the request, failed to resolve: ",
    JSON.stringify(e)
  ] }) : n.operationId === void 0 ? /* @__PURE__ */ a.jsx(R2, { requestRef: e, request: n }) : /* @__PURE__ */ a.jsx(tT, { requestRef: e, request: n });
}
function uT() {
  var y;
  const e = re(), { oas: t, playbook: n, servers: r } = U((x) => x.scanconf), o = U((x) => x.requests.ref), i = U((x) => x.config.data), s = U((x) => x.env.data), l = U((x) => x.prefs.scanServer), c = ({ sectionId: x, itemId: b }) => {
    e(Yt({ type: x === "operation" ? "operation" : "request", id: b }));
  }, u = (x) => {
    var b;
    if ((o == null ? void 0 : o.type) === "request" && o.id === x) {
      const w = (b = Object.keys(n.operations)) == null ? void 0 : b[0];
      w !== void 0 && e(Yt({ type: "operation", id: w }));
    }
    e(md({ type: "request", id: x }));
  }, d = Object.keys(n.operations).map((x) => ({ id: x, label: x })), p = Object.entries(n.requests || {}).filter(([x, b]) => b.operationId !== void 0).map(([x, b]) => ({ id: x, label: x })), h = Object.entries(n.requests || {}).filter(([x, b]) => b.operationId === void 0).map(([x, b]) => ({
    id: x,
    label: x,
    menu: /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsx(At, { onClick: (w) => w.stopPropagation(), onSelect: () => u(x), children: "Delete" }) })
  }));
  let f;
  (o == null ? void 0 : o.type) === "operation" && n.operations[o.id] !== void 0 ? f = { itemId: o.id, sectionId: "operation" } : (o == null ? void 0 : o.type) === "request" && ((y = n.requests) == null ? void 0 : y[o.id]) !== void 0 && (n.requests[o.id].operationId !== void 0 ? f = { itemId: o.id, sectionId: "requests" } : f = { itemId: o.id, sectionId: "external" });
  const g = [
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
      menu: /* @__PURE__ */ a.jsx(
        f2,
        {
          onAddExternalRequest: (x, b, w, C) => {
            e(
              Ir({
                ref: { id: x, type: "request" },
                stage: {
                  operationId: void 0,
                  defaultResponse: "200",
                  request: {
                    url: w,
                    method: b,
                    parameters: {
                      header: [],
                      path: [],
                      query: [],
                      cookie: []
                    },
                    body: dT(b) ? {
                      mediaType: C === "urlencoded" ? "application/x-www-form-urlencoded" : "application/json",
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
            ), e(Yt({ type: "request", id: x }));
          }
        }
      )
    }
  ], m = (x) => {
    const b = el(
      x,
      i.platformAuthType,
      i.scanRuntime,
      i.docker.replaceLocalhost,
      i.platform
    ), [w, C] = Si(t, n);
    if (C !== void 0) {
      console.log("failed to serialize", C);
      return;
    }
    const { simple: E } = dn(Ci(n), s);
    e(
      ld({
        env: {
          SCAN42C_HOST: b,
          ...E
        },
        scanconf: JSON.stringify(w, null, 2)
      })
    );
  };
  return /* @__PURE__ */ a.jsx(
    Ln,
    {
      title: "operations",
      selected: f,
      sections: g,
      onSelected: c,
      renderButtons: () => /* @__PURE__ */ a.jsx(
        wu,
        {
          style: { width: "100%" },
          onClick: (x) => {
            x.preventDefault(), x.stopPropagation(), m(l || r[0]);
          },
          children: "Scan all operations"
        }
      ),
      hideEmptySections: !0,
      render: (x) => /* @__PURE__ */ a.jsx(
        cT,
        {
          requestRef: { type: x.sectionId, id: x.itemId }
        },
        `${x.sectionId}-${x.itemId}`
      )
    }
  );
}
function dT(e) {
  return ["post", "put", "patch"].includes(e);
}
function fT({ append: e }) {
  return /* @__PURE__ */ a.jsx(hT, { children: /* @__PURE__ */ a.jsx(
    pT,
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
const hT = k.div`
  grid-column: span 5;
  display: flex;
`, pT = k.input`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(${v.border});
  color: var(${v.foreground});
  padding: 4px 8px;
`;
function gT({ missing: e }) {
  const t = re(), { fields: n, append: r, remove: o } = cn({
    name: "variables"
  });
  return /* @__PURE__ */ a.jsxs(mT, { children: [
    /* @__PURE__ */ a.jsxs(vT, { children: [
      /* @__PURE__ */ a.jsxs(bT, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Name" }),
        /* @__PURE__ */ a.jsx("div", {}),
        /* @__PURE__ */ a.jsx("div", { children: "Source environment variable" }),
        /* @__PURE__ */ a.jsx("div", { children: "Default value" }),
        /* @__PURE__ */ a.jsx("div", { children: "Required" }),
        /* @__PURE__ */ a.jsx("div", {})
      ] }),
      /* @__PURE__ */ a.jsx(xT, { children: n.map((i, s) => {
        const l = e !== void 0 && e.includes(i.value.name);
        return /* @__PURE__ */ a.jsx(
          kT,
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
      /* @__PURE__ */ a.jsx(fT, { append: r })
    ] }),
    /* @__PURE__ */ a.jsx(yT, { children: /* @__PURE__ */ a.jsxs(
      _T,
      {
        onClick: (i) => {
          i.stopPropagation(), i.preventDefault(), t(Iu());
        },
        children: [
          "Manage IDE Environment ",
          /* @__PURE__ */ a.jsx(zu, {})
        ]
      }
    ) })
  ] });
}
const mT = k.div``, yT = k.div`
  padding-top: 8px;
  margin: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
`, vT = k.div`
  margin: 8px;
  display: grid;
  row-gap: 4px;
  grid-template-columns: 10em 1.5em 1fr 1fr 5em 1em;
`, xT = k.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${v.border});
  }
`, bT = k.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${v.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`;
function kT({
  name: e,
  remove: t,
  missing: n
}) {
  const r = Tr({ name: `${e}.value.required` });
  return /* @__PURE__ */ a.jsxs(CT, { children: [
    /* @__PURE__ */ a.jsx(Jt, { name: `${e}.key`, label: "name" }),
    /* @__PURE__ */ a.jsx(wT, { children: n && /* @__PURE__ */ a.jsx(Qe, {}) }),
    /* @__PURE__ */ a.jsx(Jt, { name: `${e}.value.name`, label: "name" }),
    r ? /* @__PURE__ */ a.jsx("div", {}) : /* @__PURE__ */ a.jsx(Jt, { name: `${e}.value.default`, label: "default", disabled: r }),
    /* @__PURE__ */ a.jsx(jT, { children: /* @__PURE__ */ a.jsx(Vd, { name: `${e}.value.required` }) }),
    /* @__PURE__ */ a.jsx(
      ST,
      {
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), t();
        },
        children: /* @__PURE__ */ a.jsx(Ue, {})
      }
    )
  ] });
}
const wT = k.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(${v.errorForeground});
    padding-right: 4px;
  }
`, jT = k.div`
  display: flex;
`, ST = k.button`
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
    fill: var(${v.foreground});
  }
`, CT = k.div`
  display: contents;
  &:hover > :last-child {
    visibility: visible;
  }
`, _T = k.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(${v.linkForeground});
  &:hover {
    color: var(${v.linkActiveForeground});
  }
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
  }
`;
function ET({ name: e }) {
  const t = re(), {
    playbook: { environments: n }
  } = U((c) => c.scanconf), r = U((c) => c.env.data), [o, i] = _.useState("environment"), s = n[e], { missing: l } = dn(s, r);
  return /* @__PURE__ */ a.jsx(
    Je,
    {
      wrapFormData: TT,
      unwrapFormData: OT,
      data: s,
      saveData: (c) => t(fd({ name: e, environment: c })),
      children: /* @__PURE__ */ a.jsx(
        ct,
        {
          round: !0,
          activeTab: o,
          setActiveTab: i,
          menu: /* @__PURE__ */ a.jsx(Hn, { children: "Use data from the external sources (such as secrets) to set Scan variables" }),
          tabs: [
            {
              id: "environment",
              title: "External inputs",
              content: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                /* @__PURE__ */ a.jsx(gT, { missing: l }),
                l.length > 0 && /* @__PURE__ */ a.jsx(
                  fr,
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
function TT(e) {
  return {
    variables: Object.entries(e.variables).filter(([t, n]) => n.from === "environment").map(([t, n]) => ({ key: t, value: n })),
    constants: Object.entries(e.variables).filter(([t, n]) => n.from === "hardcoded").map(([t, n]) => ({
      key: t,
      value: n.value,
      type: typeof n.value
    }))
  };
}
function OT(e) {
  const t = {
    variables: {}
  };
  for (const { key: n, value: r } of e.variables)
    t.variables[n] = r;
  for (const { key: n, value: r, type: o } of e.constants)
    t.variables[n] = {
      from: "hardcoded",
      value: $T(r, o)
    };
  return t;
}
function $T(e, t) {
  if (t !== "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return `${e}`;
}
function IT() {
  const [e, t] = _.useState("default"), {
    playbook: { environments: n }
  } = U((i) => i.scanconf), o = [
    {
      id: "environment",
      title: "Environment",
      items: Object.keys(n).map((i) => ({ id: i, label: i }))
    }
  ];
  return /* @__PURE__ */ a.jsx(
    Ln,
    {
      title: "environments",
      noSectionTitles: !0,
      selected: e ? { sectionId: "environment", itemId: e } : void 0,
      sections: o,
      onSelected: (i) => t(i.itemId),
      render: (i) => /* @__PURE__ */ a.jsx(ET, { name: i.itemId }, i.itemId)
    }
  );
}
function DT() {
  const e = re(), { oas: t, playbook: n, servers: r } = U((m) => m.scanconf), { selected: o } = U((m) => m.global), { tryResult: i, mockResult: s } = U((m) => m.global), l = (m) => e(Pt(m)), c = (m, y) => e(zt({ location: m, reference: y })), u = (m, y) => e(Dt({ location: m, to: y })), d = (m, y) => {
    e(
      It({
        container: m,
        stage: {
          ref: y
        }
      })
    );
  }, p = (m) => {
    e(Yt(m)), e(se(["scanconf", "requests"]));
  }, h = Object.keys(n.operations), f = Object.keys(n.requests || {}), g = [
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
    Ln,
    {
      title: "items",
      selected: { sectionId: "general", itemId: o },
      onSelected: (m) => e(jd(m.itemId)),
      noSectionTitles: !0,
      sections: g,
      render: (m) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        (m == null ? void 0 : m.itemId) === "before" && /* @__PURE__ */ a.jsxs(yu, { children: [
          /* @__PURE__ */ a.jsx(
            An,
            {
              servers: r,
              onTry: (y) => {
                e(rs(y));
              }
            }
          ),
          /* @__PURE__ */ a.jsx(
            Pn,
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
            zn,
            {
              operationIds: h,
              requestIds: f,
              onSelect: (y) => d({ container: "globalBefore" }, y)
            }
          ),
          i.length > 0 && /* @__PURE__ */ a.jsx(xe, { title: "Result", children: /* @__PURE__ */ a.jsx(In, { result: i }) })
        ] }, "before"),
        (m == null ? void 0 : m.itemId) === "after" && /* @__PURE__ */ a.jsxs(yu, { children: [
          /* @__PURE__ */ a.jsx(
            An,
            {
              servers: r,
              onTry: (y) => {
                e(rs(y));
              }
            }
          ),
          /* @__PURE__ */ a.jsx(
            Pn,
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
            zn,
            {
              operationIds: h,
              requestIds: f,
              onSelect: (y) => d({ container: "globalAfter" }, y)
            }
          ),
          i.length > 0 && /* @__PURE__ */ a.jsx(xe, { title: "Result", children: /* @__PURE__ */ a.jsx(In, { result: i }) })
        ] }, "after")
      ] })
    }
  );
}
const yu = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`, tl = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  //max-width: 560px;
`, nl = k.div`
  font-weight: 700;
  margin-bottom: 16px;
`, rl = Bn({
  environment: Y(),
  logLevel: Y(),
  logDestination: Y(),
  requestFlowrate: Ge.number(),
  requestTimeout: Ge.number(),
  requestTlsInsecureSkipVerify: cl(),
  responseFollowRedirection: cl(),
  maxScanDuration: Ge.number(),
  reportMaxIssues: Ge.number(),
  reportMaxSize: Ge.number(),
  responseMaxBodySizeScan: Ge.number(),
  reportMaxHttpResponseSizeHappyPath: Ge.number(),
  reportMaxBodySizeHappyPath: Ge.number(),
  reportMaxBodySizeTest: Ge.number(),
  reportMaxHttpResponseSizeTest: Ge.number()
});
function PT(e) {
  return {
    ...e,
    logLevel: e.logLevel !== void 0 ? e.logLevel : ""
  };
}
function zT(e) {
  return { ...e, logLevel: e.logLevel !== "" ? e.logLevel : void 0 };
}
function AT() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(nl, { children: "Default environment" }),
    /* @__PURE__ */ a.jsx(tl, { children: /* @__PURE__ */ a.jsx(oe, { name: "environment", label: "Default environment", disabled: !0 }) })
  ] });
}
const Ps = {
  id: "environment",
  label: "Environment settings",
  schema: rl,
  form: AT
};
function RT() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(nl, { children: "Logging settings" }),
    /* @__PURE__ */ a.jsxs(tl, { children: [
      /* @__PURE__ */ a.jsx(
        mo,
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
        oe,
        {
          name: "logDestination",
          label: "Log destination",
          description: "The destination where Conformance Scan pushes all logs that it produces during a scan. The possible values are 'stdout', 'files', and 'platform'. You can select multiple outputs by adding the character + between the values."
        }
      )
    ] })
  ] });
}
const zs = {
  id: "logging",
  label: "Logging settings",
  schema: rl,
  form: RT
};
function NT() {
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(nl, { children: "General settings" }),
    /* @__PURE__ */ a.jsxs(tl, { children: [
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "requestFlowrate",
          label: "Flow rate",
          description: "How long the scan waits (in milliseconds) before it sends the next request to the API. This setting defines the constant flow rate that the scan uses."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "requestTimeout",
          label: "Timeout",
          description: "The maximum time (in seconds) that the scan waits for a response from the API. We do not recommend setting the timeout value to 0, because this switches the timeout off completely. This means that if something goes wrong, the scan might run indefinitely."
        }
      ),
      /* @__PURE__ */ a.jsx(
        mo,
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
        mo,
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
        oe,
        {
          name: "maxScanDuration",
          label: "Maximum scan duration",
          description: "How long the scan runs in total (in seconds) before it stops, even if the whole API was not yet scanned. This limit ensures that the scan process will not run indefinitely even if there was an unexpected error causing a loop in the process."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "reportMaxSize",
          label: "Max scan report size",
          description: "The maximum scan report size (in bytes). The scan stops when the size limit is reached."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "reportMaxIssues",
          label: "Max reported issues",
          description: "The maximum number of problems that Conformance Scan can uncover and include in the scan report before it must stop. This setting helps to control the report size: you can iterate on scanning your API, and as you fix the problems found in previous scans, the scan keeps including subsequently discovered problems."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "responseMaxBodySizeScan",
          label: "Max size for a response body",
          description: "The maximum body size (in bytes) that Conformance Scan consumes from an API response, to avoid massive memory consumption."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "reportMaxHttpResponseSizeHappyPath",
          label: "Max stored happy path response size",
          description: "The maximum size (in bytes) of the HTTP responses received for a happy path request that is included in the scan report."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "reportMaxBodySizeHappyPath",
          label: "Max stored response body size for happy path requests",
          description: "The maximum response body size (in bytes) that the scan includes in the scan report for a happy path request."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "reportMaxBodySizeTest",
          label: "Max stored response body size for test requests",
          description: "The maximum response body size (in bytes) that the scan includes in the scan report for a test request."
        }
      ),
      /* @__PURE__ */ a.jsx(
        oe,
        {
          name: "reportMaxHttpResponseSizeTest",
          label: "Max stored response size for test requests",
          description: "The maximum size (in bytes) of the HTTP responses received for a test request that is included in the scan report."
        }
      )
    ] })
  ] });
}
const As = {
  id: "general",
  label: "General settings",
  schema: rl,
  form: NT
}, MT = [
  {
    id: "logging",
    title: "Logging",
    items: [zs]
  },
  {
    id: "environment",
    title: "Environment",
    items: [Ps]
  },
  {
    id: "general",
    title: "General",
    items: [As]
  }
], qT = {
  [As.id]: As,
  [zs.id]: zs,
  [Ps.id]: Ps
};
function FT() {
  const e = re(), t = U(
    (n) => n.scanconf.playbook.runtimeConfiguration
  );
  return /* @__PURE__ */ a.jsx(
    ep,
    {
      noSectionTitles: !0,
      sections: MT,
      defaultSelection: { sectionId: "logging", itemId: "logging" },
      render: (n) => {
        const { id: r, form: o, schema: i } = qT[n.itemId];
        return /* @__PURE__ */ a.jsx(
          Je,
          {
            schema: i,
            wrapFormData: PT,
            unwrapFormData: zT,
            data: t || {},
            saveData: (s) => e(dd(s)),
            children: /* @__PURE__ */ a.jsx(o, {})
          }
        );
      }
    }
  );
}
function LT() {
  const {
    playbook: { environments: e, runtimeConfiguration: t }
  } = U((o) => o.scanconf), n = U((o) => o.env.data);
  if (e == null || t == null)
    return /* @__PURE__ */ a.jsx(vu, { children: "Environment" });
  const { missing: r } = dn(e[(t == null ? void 0 : t.environment) || "default"], n);
  return /* @__PURE__ */ a.jsxs(vu, { children: [
    "Environment",
    r.length > 0 && /* @__PURE__ */ a.jsx(Qe, {})
  ] });
}
const vu = k.div`
  display: flex;
  gap: 4px;
  align-items: center;
  > svg {
    fill: var(${v.errorForeground});
    padding-right: 4px;
  }
`;
function $h({ credentials: e }) {
  const t = BT(e).map(({ name: n }) => ({ label: n, value: n }));
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      lo,
      {
        label: "Type",
        name: "key",
        options: [
          { value: "authentication-swapping-bola", label: "BOLA" },
          { value: "authentication-swapping-bfla", label: "BFLA" }
        ]
      }
    ),
    /* @__PURE__ */ a.jsx(lo, { label: "Source", name: "source.0", options: t }),
    /* @__PURE__ */ a.jsx(lo, { label: "Target", name: "target.0", options: t })
  ] });
}
function BT(e) {
  return Object.entries(e).map(([t, n]) => Object.entries(n.methods || {}).map(([r, o]) => ({ name: `${t}/${r}`, credential: n }))).flat();
}
function HT({
  selected: e,
  credentials: t
}) {
  const n = re(), {
    playbook: { authorizationTests: r }
  } = U((s) => s.scanconf), o = (s, l) => n(pd({ id: s, test: l })), i = r[e.itemId];
  return /* @__PURE__ */ a.jsxs(UT, { children: [
    /* @__PURE__ */ a.jsx("h4", { children: e.itemId }),
    /* @__PURE__ */ a.jsx(
      Je,
      {
        data: i,
        wrapFormData: (s) => s,
        unwrapFormData: (s) => s,
        saveData: (s) => o(e.itemId, s),
        children: /* @__PURE__ */ a.jsx($h, { credentials: t })
      }
    )
  ] });
}
const UT = k.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function VT({
  onAddTest: e,
  existing: t,
  credentials: n
}) {
  const r = {
    id: "",
    key: "authentication-swapping-bola",
    source: [""],
    target: [""]
  }, o = Bn({
    id: Y().regex(Tn(), {
      message: On
    }).refine((s) => !t.includes(s), {
      message: "Already exists"
    }),
    key: Y(),
    source: ul(Y().min(1)),
    target: ul(Y().min(1))
  }), i = (s) => {
    e(s.id, { key: s.key, source: s.source, target: s.target });
  };
  return /* @__PURE__ */ a.jsx(
    Dr,
    {
      title: "New authorization test",
      defaultValues: r,
      schema: o,
      onSubmit: i,
      trigger: /* @__PURE__ */ a.jsx(_r, { style: { width: "100%" }, children: "New authorization test" }),
      children: /* @__PURE__ */ a.jsxs(WT, { children: [
        /* @__PURE__ */ a.jsx(oe, { label: "Test ID", name: "id" }),
        /* @__PURE__ */ a.jsx($h, { credentials: n })
      ] })
    }
  );
}
const WT = k.div`
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
function GT() {
  const e = re(), {
    playbook: { authorizationTests: t, authenticationDetails: n },
    selectedAuthorizationTest: r
  } = U((l) => l.scanconf), o = (l, c) => {
    e(hd({ id: l, test: c })), e(Cl({ id: l }));
  }, s = [
    {
      id: "authorizationTests",
      title: "Authorization Tests",
      items: Object.keys(t).map((l) => ({
        id: l,
        label: l,
        menu: /* @__PURE__ */ a.jsx(ut, { children: /* @__PURE__ */ a.jsxs(
          At,
          {
            onClick: (c) => c.stopPropagation(),
            onSelect: () => e(gd({ id: l })),
            children: [
              /* @__PURE__ */ a.jsx(Ue, {}),
              "Delete"
            ]
          }
        ) })
      }))
    }
  ];
  return /* @__PURE__ */ a.jsx(
    Ln,
    {
      title: "tests",
      sections: s,
      render: (l) => /* @__PURE__ */ a.jsx(HT, { selected: l, credentials: n[0] }),
      renderEmpty: () => /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h2", { children: "Authorization Tests" }),
        /* @__PURE__ */ a.jsx("p", { children: "BOLA and BFLA tests" }),
        /* @__PURE__ */ a.jsx("p", { children: "Define advanced security tests, such as testing how your API implementation handles BOLA/IDOR (Broken Object Level Authorization, also known as Insecure Direct Object Reference) attack or BFLA (Broken Function Level Authorization)" })
      ] }),
      renderButtons: () => /* @__PURE__ */ a.jsx(
        VT,
        {
          credentials: n[0],
          existing: Object.keys(t),
          onAddTest: o
        }
      ),
      selected: r !== void 0 ? { sectionId: "authorizationTests", itemId: r } : void 0,
      onSelected: (l) => {
        e(Cl({ id: l.itemId }));
      }
    }
  );
}
function KT({ change: e }) {
  return /* @__PURE__ */ a.jsx(XT, { children: /* @__PURE__ */ a.jsx(_i, { path: e.path, method: e.method, operationId: e.operationId }) });
}
const XT = k.div`
  border: 1px solid var(${v.border});
  padding: 8px;
  background-color: var(${v.computedOne});
`;
function YT({ change: e }) {
  return /* @__PURE__ */ a.jsx(QT, { children: /* @__PURE__ */ a.jsx(_i, { path: e.path, method: e.method, operationId: e.operationId, children: e.references.length > 0 && /* @__PURE__ */ a.jsxs(JT, { children: [
    "References in ",
    e.references.length,
    " locations will be removed"
  ] }) }) });
}
const QT = k.div`
  border: 1px solid var(${v.border});
  padding: 8px;
  background-color: var(${v.computedOne});
`, JT = k.div`
  padding: 8px;
  background-color: var(${v.background});
`;
function ZT({ change: e }) {
  return /* @__PURE__ */ a.jsx(eO, { children: /* @__PURE__ */ a.jsx(_i, { path: e.path, method: e.method, operationId: e.oldOperationId, children: /* @__PURE__ */ a.jsxs(tO, { children: [
    '"',
    e.oldOperationId,
    '" renamed to "',
    e.newOperationId,
    '"'
  ] }) }) });
}
const eO = k.div`
  border: 1px solid var(${v.border});
  padding: 8px;
  background-color: var(${v.computedOne});
`, tO = k.div`
  padding: 8px;
  background-color: var(${v.background});
`;
function nO({ change: e }) {
  return /* @__PURE__ */ a.jsx(rO, { children: e.schema });
}
const rO = k.div`
  border: 1px solid var(${v.border});
  padding: 8px;
  background-color: var(${v.computedOne});
`;
function oO() {
  const e = re(), { changes: t, updating: n } = U((l) => l.scanconfUpdate), r = t.filter((l) => l.type === "operation-added"), o = t.filter((l) => l.type === "operation-removed"), i = t.filter((l) => l.type === "operation-renamed"), s = t.filter((l) => l.type === "security-added");
  return /* @__PURE__ */ a.jsxs(iO, { children: [
    /* @__PURE__ */ a.jsx("div", { children: "Your OpenAPI file has deviated from your scan configuration." }),
    /* @__PURE__ */ a.jsx("div", { children: "Please update your scan configuration to reflect the changes in your OpenAPI file. If you decide to ignore the changes, the scan will be performed using the old configuration." }),
    /* @__PURE__ */ a.jsxs(aO, { children: [
      r.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Added:" }),
        r.map((l, c) => /* @__PURE__ */ a.jsx(KT, { change: l }, c))
      ] }),
      o.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Removed:" }),
        o.map((l, c) => /* @__PURE__ */ a.jsx(YT, { change: l }, c))
      ] }),
      i.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "OperationId changed:" }),
        i.map((l, c) => /* @__PURE__ */ a.jsx(ZT, { change: l }, c))
      ] }),
      s.length > 0 && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("div", { children: "Security scheme added:" }),
        s.map((l, c) => /* @__PURE__ */ a.jsx(nO, { change: l }, c))
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs(sO, { children: [
      /* @__PURE__ */ a.jsx(
        Xp,
        {
          label: "Update",
          waiting: n,
          onClick: () => e(Od())
        }
      ),
      /* @__PURE__ */ a.jsx(ju, { disabled: n, onClick: () => e($d()), children: "Skip" })
    ] })
  ] });
}
const iO = k.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, sO = k.div`
  display: flex;
  gap: 8px;
`, aO = k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
function lO() {
  const e = Ay((t) => t.generalError.error);
  return /* @__PURE__ */ a.jsx(uO, { children: /* @__PURE__ */ a.jsx(cO, { children: e == null ? void 0 : e.message }) });
}
const cO = k.div`
  border: 1px solid var(${v.errorBorder});
  color: var(${v.errorForeground});
  background-color: var(${v.errorBackground});
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  line-break: anywhere;
`, uO = k.div`
  padding: 8px;
`;
function xu(e) {
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
  return n || fO("Link"), a.jsxs(a.Fragment, {
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
function dO(e = {}) {
  const { wrapper: t } = e.components || {};
  return t ? a.jsx(t, {
    ...e,
    children: a.jsx(xu, {
      ...e
    })
  }) : xu(e);
}
function fO(e, t) {
  throw new Error("Expected component `" + e + "` to be defined: you likely forgot to import, pass, or provide it.");
}
function hO() {
  const e = _.useRef(null), t = mO(e);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(yO, { children: t.map((n, r) => /* @__PURE__ */ a.jsx(
      vO,
      {
        level: n.level,
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), n.element.scrollIntoView({ behavior: "smooth" });
        },
        children: n.title
      },
      r
    )) }),
    /* @__PURE__ */ a.jsx(xO, { ref: e, expanded: !0, children: /* @__PURE__ */ a.jsx(dO, { components: { Link: pO } }) })
  ] });
}
function pO({ href: e, children: t }) {
  const n = re();
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      onClick: (r) => {
        r.preventDefault(), r.stopPropagation(), n(Kh(e));
      },
      href: e,
      children: t
    }
  );
}
function gO(e) {
  switch (e) {
    case "H1":
      return 1;
    case "H2":
      return 2;
    case "H3":
      return 3;
  }
}
const mO = (e) => {
  const [t, n] = _.useState([]);
  return _.useEffect(() => {
    const r = [];
    if (e.current !== null) {
      for (const o of e.current.querySelectorAll("h1, h2, h3"))
        if (o.textContent) {
          const i = o.textContent, s = gO(o.tagName);
          r.push({ title: i, element: o, level: s });
        }
    }
    n(r);
  }, [e]), t;
}, yO = k.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 288px;
  overflow-y: scroll;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: var(${v.background});
`, vO = k.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(${v.listHoverBackground});
  }

  ${({ level: e }) => e === 1 && `
    font-weight: 600;
    font-size: 16px;
    padding: 8px 8px;
  `}

  ${({ level: e }) => e === 2 && `
    font-weight: 500;
    font-size: 14px;
    padding: 4px 16px;
  `}

  ${({ level: e }) => e === 3 && `
    font-weight: 400;
    font-size: 12px;
    padding: 4px 32px;
  `}
`, xO = k.div`
  position: absolute;
  ${({ expanded: e }) => e ? "left: 320px;" : "left: 40px;"}
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(${v.computedOne});
  padding: 16px;
  overflow-y: auto;
  code {
    background-color: unset;
    padding: 0;
    border-radius: 0;
  }
`, bu = [
  {
    id: "starting",
    title: "",
    navigation: !1,
    element: /* @__PURE__ */ a.jsx("div", {})
  },
  {
    id: "general-error",
    title: "An error has occurred",
    element: /* @__PURE__ */ a.jsx(lO, {}),
    navigation: !1,
    when: ot
  },
  {
    id: "scanconf-update",
    title: "Scan configuration is outdated",
    element: /* @__PURE__ */ a.jsx(oO, {}),
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
        element: /* @__PURE__ */ a.jsx(uT, {})
      },
      {
        id: "operations",
        title: "Scenarios",
        element: /* @__PURE__ */ a.jsx(o2, {})
      },
      {
        id: "global",
        title: "Global blocks",
        element: /* @__PURE__ */ a.jsx(DT, {})
      },
      {
        id: "auth",
        title: "Authentication",
        element: /* @__PURE__ */ a.jsx(rj, {})
      },
      {
        id: "authorizationTests",
        title: "Tests",
        element: /* @__PURE__ */ a.jsx(GT, {})
      },
      {
        id: "environments",
        title: /* @__PURE__ */ a.jsx(LT, {}),
        element: /* @__PURE__ */ a.jsx(IT, {})
      },
      {
        id: "settings",
        title: "Settings",
        element: /* @__PURE__ */ a.jsx(FT, {})
      },
      {
        id: "help",
        title: "Help",
        element: /* @__PURE__ */ a.jsx(hO, {})
      }
    ]
  }
];
function bO(e, t) {
  const n = dv($_(e, bu), t);
  Xh(document.getElementById("root")).render(
    /* @__PURE__ */ a.jsx(St.StrictMode, { children: /* @__PURE__ */ a.jsx(Yh, { store: n, children: /* @__PURE__ */ a.jsx(Qh.Provider, { value: bu, children: /* @__PURE__ */ a.jsx(Am, { backend: _y, children: /* @__PURE__ */ a.jsx(Jh, {}) }) }) }) })
  ), window.addEventListener("message", Zh(n, uv));
}
window.renderWebView = bO;
