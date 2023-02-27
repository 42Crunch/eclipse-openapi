import { c as Ne, a as ke, l as Re, u as $e, t as Le, r as u, j as s, T as b, d as x, F as O, R as S, p as L, e as Ie, P as _e, m as Me, f as Ae, g as je } from "./ThemeStyles.913963d7.js";
import "./bootstrap.min.4ed993c7.js";
import { s as v, _ as Fe } from "./styled-components.browser.esm.f0e51c1d.js";
import { S as Be, D as Q } from "./datetime.c159a92a.js";
import { S as Ue, _ as de, p as H } from "./index.17036a89.js";
function W(e, t) {
  return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, W(e, t);
}
function He(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, W(e, t);
}
const Ke = {
  dictionaries: [],
  formats: []
}, fe = Ne({
  name: "formats",
  initialState: Ke,
  reducers: {
    showDictionary: (e, t) => {
      const n = [], r = [];
      for (const o of t.payload) {
        n.push({
          id: o.id,
          name: o.name,
          description: o.description
        });
        for (const i of Object.values(o.formats))
          r.push({
            ...i,
            dictionaryId: o.id
          });
      }
      e.dictionaries = n, e.formats = r;
    }
  }
}), { showDictionary: We } = fe.actions, ze = fe.reducer, Ge = {
  theme: Le,
  formats: ze
}, Ve = (e) => ke({
  reducer: Ge,
  middleware: (t) => t().prepend().concat(Re),
  preloadedState: {
    theme: e
  }
}), ee = $e;
var z = {}, Xe = {
  get exports() {
    return z;
  },
  set exports(e) {
    z = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var l = n.apply(null, i);
              l && r.push(l);
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && r.push(c);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Xe);
const y = z, Ye = ["xxl", "xl", "lg", "md", "sm", "xs"], Ze = "xs", qe = /* @__PURE__ */ u.createContext({
  prefixes: {},
  breakpoints: Ye,
  minBreakpoint: Ze
});
function R(e, t) {
  const {
    prefixes: n
  } = u.useContext(qe);
  return e || n[t] || t;
}
var Je = /-(.)/g;
function Qe(e) {
  return e.replace(Je, function(t, n) {
    return n.toUpperCase();
  });
}
const et = (e) => e[0].toUpperCase() + Qe(e).slice(1);
function E(e, {
  displayName: t = et(e),
  Component: n,
  defaultProps: r
} = {}) {
  const o = /* @__PURE__ */ u.forwardRef(({
    className: i,
    bsPrefix: a,
    as: l = n || "div",
    ...c
  }, d) => {
    const f = R(a, e);
    return /* @__PURE__ */ s(l, {
      ref: d,
      className: y(i, f),
      ...c
    });
  });
  return o.defaultProps = r, o.displayName = t, o;
}
const Y = (e) => /* @__PURE__ */ u.forwardRef((t, n) => /* @__PURE__ */ s("div", {
  ...t,
  ref: n,
  className: y(t.className, e)
})), pe = /* @__PURE__ */ u.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    variant: n,
    as: r = "img",
    ...o
  }, i) => {
    const a = R(e, "card-img");
    return /* @__PURE__ */ s(r, {
      ref: i,
      className: y(n ? `${a}-${n}` : a, t),
      ...o
    });
  }
);
pe.displayName = "CardImg";
const me = /* @__PURE__ */ u.createContext(null);
me.displayName = "CardHeaderContext";
const ve = /* @__PURE__ */ u.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, o) => {
  const i = R(e, "card-header"), a = u.useMemo(() => ({
    cardHeaderBsPrefix: i
  }), [i]);
  return /* @__PURE__ */ s(me.Provider, {
    value: a,
    children: /* @__PURE__ */ s(n, {
      ref: o,
      ...r,
      className: y(t, i)
    })
  });
});
ve.displayName = "CardHeader";
const tt = Y("h5"), nt = Y("h6"), he = E("card-body"), rt = E("card-title", {
  Component: tt
}), it = E("card-subtitle", {
  Component: nt
}), ot = E("card-link", {
  Component: "a"
}), at = E("card-text", {
  Component: "p"
}), st = E("card-footer"), lt = E("card-img-overlay"), ct = {
  body: !1
}, Z = /* @__PURE__ */ u.forwardRef(({
  bsPrefix: e,
  className: t,
  bg: n,
  text: r,
  border: o,
  body: i,
  children: a,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "div",
  ...c
}, d) => {
  const f = R(e, "card");
  return /* @__PURE__ */ s(l, {
    ref: d,
    ...c,
    className: y(t, f, n && `bg-${n}`, r && `text-${r}`, o && `border-${o}`),
    children: i ? /* @__PURE__ */ s(he, {
      children: a
    }) : a
  });
});
Z.displayName = "Card";
Z.defaultProps = ct;
const A = Object.assign(Z, {
  Img: pe,
  Title: rt,
  Subtitle: it,
  Body: he,
  Link: ot,
  Text: at,
  Header: ve,
  Footer: st,
  ImgOverlay: lt
}), ut = {
  bg: "primary",
  pill: !1
}, q = /* @__PURE__ */ u.forwardRef(({
  bsPrefix: e,
  bg: t,
  pill: n,
  text: r,
  className: o,
  as: i = "span",
  ...a
}, l) => {
  const c = R(e, "badge");
  return /* @__PURE__ */ s(i, {
    ref: l,
    ...a,
    className: y(o, c, n && "rounded-pill", r && `text-${r}`, t && `bg-${t}`)
  });
});
q.displayName = "Badge";
q.defaultProps = ut;
function dt({ isOpen: e }) {
  return e ? /* @__PURE__ */ s(
    Be,
    {
      style: {
        width: 24,
        height: 24,
        marginRight: 8,
        fill: `var(${b.foreground})`
      }
    }
  ) : /* @__PURE__ */ s(
    Ue,
    {
      style: {
        width: 24,
        height: 24,
        marginRight: 8,
        fill: `var(${b.foreground})`
      }
    }
  );
}
function ft(e = !1) {
  const [t, n] = u.useState(e);
  return [t, () => n(!t)];
}
function pt({ format: e }) {
  const [t, n] = ft();
  return /* @__PURE__ */ s(gt, { style: { margin: "1em" }, children: /* @__PURE__ */ x(A.Body, { children: [
    /* @__PURE__ */ x(yt, { onClick: n, children: [
      /* @__PURE__ */ s(Ct, { children: e.name }),
      e.pii === "yes" && /* @__PURE__ */ s(wt, { bg: "secondary", children: "GDPR" }),
      /* @__PURE__ */ s(dt, { isOpen: t })
    ] }),
    /* @__PURE__ */ x(Et, { children: [
      "Last updated on",
      " ",
      Q.fromSeconds(parseInt(e.lastUpdate, 10)).toLocaleString(
        Q.DATETIME_MED
      )
    ] }),
    t && /* @__PURE__ */ x(O, { children: [
      /* @__PURE__ */ s(St, { children: e.description }),
      /* @__PURE__ */ x(Ot, { children: [
        mt(e),
        vt(e)
      ] })
    ] })
  ] }) }, `${e.dictionaryId}-${e.name}`);
}
function mt(e) {
  const n = {
    1: "Not Sensitive",
    2: "Low",
    3: "Medium",
    4: "High",
    5: "Critical"
  }[e.sensitivity] || "Unknown";
  return /* @__PURE__ */ x(O, { children: [
    /* @__PURE__ */ s(m, { label: "Name", value: e.name }),
    /* @__PURE__ */ s(m, { label: "Type", value: e.type }),
    e.format && /* @__PURE__ */ s(m, { label: "Format", value: e.format }),
    /* @__PURE__ */ s(m, { label: "Read only", value: `${e.readOnly}` }),
    /* @__PURE__ */ s(m, { label: "Write only", value: `${e.writeOnly}` }),
    /* @__PURE__ */ s(m, { label: "Nullable", value: `${e.writeOnly}` }),
    /* @__PURE__ */ s(m, { label: "GDPR-PII", value: e.pii }),
    /* @__PURE__ */ s(m, { label: "Object Identifier", value: e.objectIdentifier }),
    /* @__PURE__ */ s(m, { label: "Sensitivity", value: n }),
    /* @__PURE__ */ s(m, { label: "Example", value: `${e.example}` })
  ] });
}
function vt(e) {
  return e.type === "integer" ? /* @__PURE__ */ s(bt, { format: e }) : "enum" in e ? /* @__PURE__ */ s(xt, { format: e }) : /* @__PURE__ */ s(ht, { format: e });
}
function ht({ format: e }) {
  return /* @__PURE__ */ x(O, { children: [
    /* @__PURE__ */ s(m, { label: "Pattern", value: e.pattern }),
    /* @__PURE__ */ s(m, { label: "Min length", value: `${e.minLength}` }),
    /* @__PURE__ */ s(m, { label: "Max length", value: `${e.maxLength}` })
  ] });
}
function xt({ format: e }) {
  return /* @__PURE__ */ x(O, { children: [
    /* @__PURE__ */ s(m, { label: "Enum", value: e.enum.join(", ") }),
    /* @__PURE__ */ s(m, { label: "Default", value: e.default })
  ] });
}
function bt({ format: e }) {
  return /* @__PURE__ */ x(O, { children: [
    /* @__PURE__ */ s(m, { label: "Minimum", value: e.minimum }),
    /* @__PURE__ */ s(m, { label: "Maximum", value: e.maximum }),
    /* @__PURE__ */ s(m, { label: "Exclusive minimum", value: `${e.exclusiveMinimum}` }),
    /* @__PURE__ */ s(m, { label: "Exclusive maximum", value: `${e.exclusiveMaximum}` }),
    /* @__PURE__ */ s(m, { label: "Multiple Of", value: `${e.multipleOf}` })
  ] });
}
function m({ label: e, value: t }) {
  return /* @__PURE__ */ x(Pt, { children: [
    /* @__PURE__ */ s(Dt, { children: e }),
    /* @__PURE__ */ s(Tt, { children: t })
  ] });
}
const gt = v(A)`
  background-color: var(${b.background});
  border-color: var(${b.border});
`, yt = v(A.Title)`
  display: flex;
  cursor: pointer;
`, Et = v(A.Subtitle)`
  font-size: 0.75rem;
  padding-bottom: 1rem;
`, wt = v(q)`
  margin-right: 0.5rem;
`, Ct = v.div`
  flex: 1;
`, St = v.div`
  border-bottom: 1px solid var(${b.border});
  padding-bottom: 1rem;
`, Ot = v.ul`
  display: inline-block;
  padding-left: 0;
`, Pt = v.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 6px;
`, Dt = v.div`
  width: 120px;
  font-size: 0.85rem;
  flex-shrink: 0;
  margin-right: 1rem;
`, Tt = v.div`
  font-size: 0.85rem;
  overflow-wrap: break-word;
  max-width: 100%;
  text-overflow: ellipsis;
`;
function te(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Nt(e) {
  var t = kt(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function kt(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rt(e, t, n) {
  var r = u.useRef(e !== void 0), o = u.useState(t), i = o[0], a = o[1], l = e !== void 0, c = r.current;
  return r.current = l, !l && c && i !== t && a(t), [l ? e : i, u.useCallback(function(d) {
    for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
      h[p - 1] = arguments[p];
    n && n.apply(void 0, [d].concat(h)), a(d);
  }, [n])];
}
function $t(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var o, i = n, a = i[te(r)], l = i[r], c = de(i, [te(r), r].map(Nt)), d = t[r], f = Rt(l, a, e[d]), h = f[0], p = f[1];
    return Fe({}, c, (o = {}, o[r] = h, o[d] = p, o));
  }, e);
}
function Lt(e) {
  var t = u.useRef(e);
  return u.useEffect(function() {
    t.current = e;
  }, [e]), t;
}
function xe(e) {
  var t = Lt(e);
  return u.useCallback(function() {
    return t.current && t.current.apply(t, arguments);
  }, [t]);
}
const It = ["as", "disabled"];
function _t(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Mt(e) {
  return !e || e.trim() === "#";
}
function be({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: i,
  onClick: a,
  tabIndex: l = 0,
  type: c
}) {
  e || (n != null || r != null || o != null ? e = "a" : e = "button");
  const d = {
    tagName: e
  };
  if (e === "button")
    return [{
      type: c || "button",
      disabled: t
    }, d];
  const f = (p) => {
    if ((t || e === "a" && Mt(n)) && p.preventDefault(), t) {
      p.stopPropagation();
      return;
    }
    a == null || a(p);
  }, h = (p) => {
    p.key === " " && (p.preventDefault(), f(p));
  };
  return e === "a" && (n || (n = "#"), t && (n = void 0)), [{
    role: i ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: t ? void 0 : l,
    href: n,
    target: e === "a" ? r : void 0,
    "aria-disabled": t || void 0,
    rel: e === "a" ? o : void 0,
    onClick: f,
    onKeyDown: h
  }, d];
}
const At = /* @__PURE__ */ u.forwardRef((e, t) => {
  let {
    as: n,
    disabled: r
  } = e, o = _t(e, It);
  const [i, {
    tagName: a
  }] = be(Object.assign({
    tagName: n,
    disabled: r
  }, o));
  return /* @__PURE__ */ s(a, Object.assign({}, o, i, {
    ref: t
  }));
});
At.displayName = "Button";
const jt = ["onKeyDown"];
function Ft(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Bt(e) {
  return !e || e.trim() === "#";
}
const ge = /* @__PURE__ */ u.forwardRef((e, t) => {
  let {
    onKeyDown: n
  } = e, r = Ft(e, jt);
  const [o] = be(Object.assign({
    tagName: "a"
  }, r)), i = xe((a) => {
    o.onKeyDown(a), n == null || n(a);
  });
  return Bt(r.href) || r.role === "button" ? /* @__PURE__ */ s("a", Object.assign({
    ref: t
  }, r, o, {
    onKeyDown: i
  })) : /* @__PURE__ */ s("a", Object.assign({
    ref: t
  }, r, {
    onKeyDown: n
  }));
});
ge.displayName = "Anchor";
const Ut = ge, ne = {
  disabled: !1
}, ye = S.createContext(null);
var Ht = function(t) {
  return t.scrollTop;
}, I = "unmounted", P = "exited", C = "entering", D = "entered", G = "exiting", w = /* @__PURE__ */ function(e) {
  He(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, l = a && !a.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = P, i.appearStatus = C) : c = D : r.unmountOnExit || r.mountOnEnter ? c = I : c = P, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === I ? {
      status: P
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== C && a !== D && (i = C) : (a === C || a === D) && (i = G);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, a, l;
    return i = a = l = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === C) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : L.findDOMNode(this);
          a && Ht(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === P && this.setState({
        status: I
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [L.findDOMNode(this), l], d = c[0], f = c[1], h = this.getTimeouts(), p = l ? h.appear : h.enter;
    if (!o && !a || ne.disabled) {
      this.safeSetState({
        status: D
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, f), this.safeSetState({
      status: C
    }, function() {
      i.props.onEntering(d, f), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: D
        }, function() {
          i.props.onEntered(d, f);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : L.findDOMNode(this);
    if (!i || ne.disabled) {
      this.safeSetState({
        status: P
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: G
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: P
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : L.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], d = c[0], f = c[1];
      this.props.addEndListener(d, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === I)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = de(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ S.createElement(ye.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : S.cloneElement(S.Children.only(a), l))
    );
  }, t;
}(S.Component);
w.contextType = ye;
w.propTypes = {};
function k() {
}
w.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: k,
  onEntering: k,
  onEntered: k,
  onExit: k,
  onExiting: k,
  onExited: k
};
w.UNMOUNTED = I;
w.EXITED = P;
w.ENTERING = C;
w.ENTERED = D;
w.EXITING = G;
function Kt(e) {
  return e && e.ownerDocument || document;
}
function Wt(e) {
  var t = Kt(e);
  return t && t.defaultView || window;
}
function zt(e, t) {
  return Wt(e).getComputedStyle(e, t);
}
var Gt = /([A-Z])/g;
function Vt(e) {
  return e.replace(Gt, "-$1").toLowerCase();
}
var Xt = /^ms-/;
function M(e) {
  return Vt(e).replace(Xt, "-ms-");
}
var Yt = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Zt(e) {
  return !!(e && Yt.test(e));
}
function Ee(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(M(t)) || zt(e).getPropertyValue(M(t));
  Object.keys(t).forEach(function(o) {
    var i = t[o];
    !i && i !== 0 ? e.style.removeProperty(M(o)) : Zt(o) ? r += o + "(" + i + ") " : n += M(o) + ": " + i + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
const qt = !!(typeof window < "u" && window.document && window.document.createElement);
var V = !1, X = !1;
try {
  var K = {
    get passive() {
      return V = !0;
    },
    get once() {
      return X = V = !0;
    }
  };
  qt && (window.addEventListener("test", K, K), window.removeEventListener("test", K, !0));
} catch {
}
function Jt(e, t, n, r) {
  if (r && typeof r != "boolean" && !X) {
    var o = r.once, i = r.capture, a = n;
    !X && o && (a = n.__once || function l(c) {
      this.removeEventListener(t, l, i), n.call(this, c);
    }, n.__once = a), e.addEventListener(t, a, V ? r : i);
  }
  e.addEventListener(t, n, r);
}
function Qt(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o);
}
function we(e, t, n, r) {
  return Jt(e, t, n, r), function() {
    Qt(e, t, n, r);
  };
}
function en(e, t, n, r) {
  if (n === void 0 && (n = !1), r === void 0 && (r = !0), e) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function tn(e) {
  var t = Ee(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function nn(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, o = setTimeout(function() {
    r || en(e, "transitionend", !0);
  }, t + n), i = we(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(o), i();
  };
}
function rn(e, t, n, r) {
  n == null && (n = tn(e) || 0);
  var o = nn(e, n, r), i = we(e, "transitionend", t);
  return function() {
    o(), i();
  };
}
function re(e, t) {
  const n = Ee(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function on(e, t) {
  const n = re(e, "transitionDuration"), r = re(e, "transitionDelay"), o = rn(e, (i) => {
    i.target === e && (o(), t(i));
  }, n + r);
}
function an(e) {
  e.offsetHeight;
}
var ie = function(t) {
  return !t || typeof t == "function" ? t : function(n) {
    t.current = n;
  };
};
function sn(e, t) {
  var n = ie(e), r = ie(t);
  return function(o) {
    n && n(o), r && r(o);
  };
}
function ln(e, t) {
  return u.useMemo(function() {
    return sn(e, t);
  }, [e, t]);
}
function cn(e) {
  return e && "setState" in e ? L.findDOMNode(e) : e ?? null;
}
const un = /* @__PURE__ */ S.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: o,
  onExited: i,
  addEndListener: a,
  children: l,
  childRef: c,
  ...d
}, f) => {
  const h = u.useRef(null), p = ln(h, c), T = (N) => {
    p(cn(N));
  }, g = (N) => (U) => {
    N && h.current && N(h.current, U);
  }, $ = u.useCallback(g(e), [e]), _ = u.useCallback(g(t), [t]), B = u.useCallback(g(n), [n]), Oe = u.useCallback(g(r), [r]), Pe = u.useCallback(g(o), [o]), De = u.useCallback(g(i), [i]), Te = u.useCallback(g(a), [a]);
  return /* @__PURE__ */ s(w, {
    ref: f,
    ...d,
    onEnter: $,
    onEntered: B,
    onEntering: _,
    onExit: Oe,
    onExited: De,
    onExiting: Pe,
    addEndListener: Te,
    nodeRef: h,
    children: typeof l == "function" ? (N, U) => l(N, {
      ...U,
      ref: T
    }) : /* @__PURE__ */ S.cloneElement(l, {
      ref: T
    })
  });
}), dn = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, fn = {
  [C]: "show",
  [D]: "show"
}, j = /* @__PURE__ */ u.forwardRef(({
  className: e,
  children: t,
  transitionClasses: n = {},
  ...r
}, o) => {
  const i = u.useCallback((a, l) => {
    an(a), r.onEnter == null || r.onEnter(a, l);
  }, [r]);
  return /* @__PURE__ */ s(un, {
    ref: o,
    addEndListener: on,
    ...r,
    onEnter: i,
    childRef: t.ref,
    children: (a, l) => /* @__PURE__ */ u.cloneElement(t, {
      ...l,
      className: y("fade", e, t.props.className, fn[a], n[a])
    })
  });
});
j.defaultProps = dn;
j.displayName = "Fade";
const pn = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": H.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: H.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: H.oneOf(["white"])
}, mn = {
  "aria-label": "Close"
}, F = /* @__PURE__ */ u.forwardRef(({
  className: e,
  variant: t,
  ...n
}, r) => /* @__PURE__ */ s("button", {
  ref: r,
  type: "button",
  className: y("btn-close", t && `btn-close-${t}`, e),
  ...n
}));
F.displayName = "CloseButton";
F.propTypes = pn;
F.defaultProps = mn;
const Ce = Y("h4");
Ce.displayName = "DivStyledAsH4";
const vn = E("alert-heading", {
  Component: Ce
}), hn = E("alert-link", {
  Component: Ut
}), xn = {
  variant: "primary",
  show: !0,
  transition: j,
  closeLabel: "Close alert"
}, J = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    bsPrefix: n,
    show: r,
    closeLabel: o,
    closeVariant: i,
    className: a,
    children: l,
    variant: c,
    onClose: d,
    dismissible: f,
    transition: h,
    ...p
  } = $t(e, {
    show: "onClose"
  }), T = R(n, "alert"), g = xe((B) => {
    d && d(!1, B);
  }), $ = h === !0 ? j : h, _ = /* @__PURE__ */ x("div", {
    role: "alert",
    ...$ ? void 0 : p,
    ref: t,
    className: y(a, T, c && `${T}-${c}`, f && `${T}-dismissible`),
    children: [f && /* @__PURE__ */ s(F, {
      onClick: g,
      "aria-label": o,
      variant: i
    }), l]
  });
  return $ ? /* @__PURE__ */ s($, {
    unmountOnExit: !0,
    ...p,
    ref: void 0,
    in: r,
    children: _
  }) : r ? _ : null;
});
J.displayName = "Alert";
J.defaultProps = xn;
const bn = Object.assign(J, {
  Link: hn,
  Heading: vn
});
function oe({
  items: e,
  selected: t,
  setSelected: n
}) {
  return /* @__PURE__ */ s(gn, { children: e.map((r) => r.id === t ? /* @__PURE__ */ s(yn, { children: r.name }, r.id) : /* @__PURE__ */ s(Se, { onClick: () => n(r.id), children: r.name }, r.id)) });
}
const gn = v.ul`
  padding: 0;
  margin: 0;
`, Se = v.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 41px;
  border-bottom: 1px solid var(${b.border});
  cursor: pointer;
  padding-left: 0.25rem;
  overflow: hidden;
`, yn = v(Se)`
  background-color: var(${b.listActiveSelectionBackground});
  color: var(${b.listActiveSelectionForeground});
`;
function En() {
  var l;
  const e = ee((c) => c.formats.formats), t = ee((c) => c.formats.dictionaries), [n, r] = u.useState((l = t == null ? void 0 : t[0]) == null ? void 0 : l.id);
  if (u.useEffect(() => {
    var c;
    r((c = t == null ? void 0 : t[0]) == null ? void 0 : c.id);
  }, [t]), n === void 0)
    return /* @__PURE__ */ s(O, { children: /* @__PURE__ */ x(le, { children: [
      /* @__PURE__ */ s(ce, { children: /* @__PURE__ */ s(ae, { children: "Data Dictionaries" }) }),
      /* @__PURE__ */ s(ue, { children: /* @__PURE__ */ s(bn, { variant: "secondary", children: "No data dictionaries added yet" }) })
    ] }) });
  const o = e.filter((c) => c.dictionaryId === n).map((c) => /* @__PURE__ */ s(pt, { format: c }, `${c.dictionaryId}-${c.name}`)), i = t.filter((c) => c.id === "standard"), a = t.filter((c) => c.id !== "standard");
  return /* @__PURE__ */ s(O, { children: /* @__PURE__ */ x(le, { children: [
    /* @__PURE__ */ x(ce, { children: [
      /* @__PURE__ */ s(ae, { children: "Data Dictionaries" }),
      /* @__PURE__ */ s(se, { children: "Organization standard dictionary" }),
      /* @__PURE__ */ s(oe, { selected: n, setSelected: r, items: i }),
      /* @__PURE__ */ s(se, { children: "Organization named dictionaries" }),
      /* @__PURE__ */ s(oe, { selected: n, setSelected: r, items: a })
    ] }),
    /* @__PURE__ */ s(ue, { children: o })
  ] }) });
}
const ae = v.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, se = v.h5`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, le = v.div`
  display: flex;
  background-color: var(${b.background});
  height: 100vh;
`, ce = v.div`
  padding: 8px 16px 20px;
  width: 400px;
  background-color: var(${b.sidebarBackground});
`, ue = v.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
`, wn = {
  changeTheme: je,
  showDictionary: We
};
function Cn() {
  return /* @__PURE__ */ x(O, { children: [
    /* @__PURE__ */ s(Ae, {}),
    /* @__PURE__ */ s(En, {})
  ] });
}
function Sn(e, t) {
  const n = Ve(t);
  Ie(document.getElementById("root")).render(
    /* @__PURE__ */ s(S.StrictMode, { children: /* @__PURE__ */ s(_e, { store: n, children: /* @__PURE__ */ s(Cn, {}) }) })
  ), window.addEventListener("message", Me(n, wn));
}
window.renderWebView = Sn;
