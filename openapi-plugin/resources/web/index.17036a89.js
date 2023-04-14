import { j as s } from "./ThemeStyles.913963d7.js";
function O(e, r) {
  if (e == null)
    return {};
  var t = {}, p = Object.keys(e), o, n;
  for (n = 0; n < p.length; n++)
    o = p[n], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
const P = (e) => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ s("path", { d: "M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" }) });
var i = {}, l = {
  get exports() {
    return i;
  },
  set exports(e) {
    i = e;
  }
}, m = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", u = m, f = u;
function c() {
}
function y() {
}
y.resetWarningCache = c;
var g = function() {
  function e(p, o, n, v, T, h) {
    if (h !== f) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw a.name = "Invariant Violation", a;
    }
  }
  e.isRequired = e;
  function r() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: r,
    element: e,
    elementType: e,
    instanceOf: r,
    node: e,
    objectOf: r,
    oneOf: r,
    oneOfType: r,
    shape: r,
    exact: r,
    checkPropTypes: y,
    resetWarningCache: c
  };
  return t.PropTypes = t, t;
};
l.exports = g();
export {
  P as S,
  O as _,
  i as p
};
