import { j as O, c as W, u as Y, b as q, R as p, e as r, _ } from "./TriangleExclamation.DXu4kS4a.js";
import { $ as N, c as y, h as k, a as z, k as J, b as L, d as R, i as Q } from "./index.C8L7jEdi.js";
const ge = (e) => /* @__PURE__ */ O.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ O.jsx("path", { d: "M435.848 83.466 172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" }) }), X = {
  ready: !1,
  data: {
    insecureSslHostnames: [],
    platformUrl: "https://platform.42crunch.com",
    platformAuthType: "anond-token",
    platformApiToken: "",
    anondToken: "",
    platformServices: {
      source: "auto",
      manual: void 0,
      auto: "services.42crunch.com:8001"
    },
    scandManager: {
      url: "",
      auth: "none",
      timeout: 300,
      header: {
        name: "",
        value: ""
      }
    },
    scanRuntime: "docker",
    scanImage: "",
    docker: {
      replaceLocalhost: !0,
      useHostNetwork: !0
    },
    platform: "",
    cli: { found: !1, location: "" },
    repository: "",
    platformTemporaryCollectionName: "",
    platformMandatoryTags: "",
    approvedHosts: []
  },
  platformConnectionTestResult: void 0,
  waitingForPlatformConnectionTest: !1,
  overlordConnectionTestResult: void 0,
  waitingForOverlordConnectionTest: !1,
  scandManagerConnectionTestResult: void 0,
  waitingForScandManagerConnectionTest: !1,
  cliTestResult: void 0,
  waitingForCliTest: !1,
  waitingForCliDownload: !1,
  cliDownloadPercent: 0,
  errors: {
    "platform-connection": void 0,
    "platform-services": void 0,
    "temporary-collection": void 0,
    "mandatory-tags": void 0,
    "scan-image": void 0,
    "scan-runtime": void 0,
    "openapi-external-refs": void 0
  },
  hasErrors: !1
}, G = W({
  name: "config",
  initialState: X,
  reducers: {
    loadConfig: (e, o) => {
      e.data = o.payload, e.ready = !0;
    },
    saveConfig: (e, o) => {
      e.data = { ...e.data, ...o.payload }, e.data.platformServices.auto = Z(e.data.platformUrl), e.platformConnectionTestResult = void 0, e.overlordConnectionTestResult = void 0, e.scandManagerConnectionTestResult = void 0;
    },
    setError: (e, o) => {
      const { screen: t, error: a } = o.payload;
      e.errors[t] = a, e.hasErrors = Object.values(e.errors).some((v) => v !== void 0);
    },
    clearError: (e, o) => {
      e.errors[o.payload] = void 0, e.hasErrors = Object.values(e.errors).some((t) => t !== void 0);
    },
    addInsecureSslHostname: (e, o) => {
      e.data.insecureSslHostnames.push(o.payload);
    },
    removeInsecureSslHostname: (e, o) => {
      e.data.insecureSslHostnames = e.data.insecureSslHostnames.filter(
        (t) => t !== o.payload
      );
    },
    testPlatformConnection: (e, o) => {
      e.waitingForPlatformConnectionTest = !0, e.platformConnectionTestResult = void 0;
    },
    showPlatformConnectionTest: (e, o) => {
      e.platformConnectionTestResult = o.payload, e.waitingForPlatformConnectionTest = !1;
    },
    testOverlordConnection: (e, o) => {
      e.waitingForOverlordConnectionTest = !0, e.overlordConnectionTestResult = void 0;
    },
    showOverlordConnectionTest: (e, o) => {
      e.overlordConnectionTestResult = o.payload, e.waitingForOverlordConnectionTest = !1;
    },
    testScandManagerConnection: (e, o) => {
      e.waitingForScandManagerConnectionTest = !0, e.scandManagerConnectionTestResult = void 0;
    },
    showScandManagerConnectionTest: (e, o) => {
      e.scandManagerConnectionTestResult = o.payload, e.waitingForScandManagerConnectionTest = !1;
    },
    showConfigWindow: (e, o) => {
    },
    testCli: (e, o) => {
      e.waitingForCliTest = !0, e.cliTestResult = void 0;
    },
    showCliTest: (e, o) => {
      e.cliTestResult = o.payload, e.waitingForCliTest = !1;
    },
    downloadCli: (e, o) => {
      e.waitingForCliDownload = !0, e.cliTestResult = void 0, e.cliDownloadError = void 0;
    },
    showCliDownload: (e, o) => {
      e.cliTestResult = void 0, o.payload.completed ? (e.waitingForCliDownload = !1, e.cliDownloadPercent = 0, o.payload.success ? (e.data.cli.location = o.payload.location, e.data.cli.found = !0) : (e.data.cli.found = !1, e.cliDownloadError = o.payload.error)) : (e.waitingForCliDownload = !0, e.cliDownloadPercent = o.payload.progress.percent);
    },
    openLink: (e, o) => {
    }
  }
});
function Z(e) {
  try {
    const t = new URL(e).hostname;
    return t.toLowerCase().startsWith("platform") ? t.replace(/^platform/i, "services") + ":8001" : "services." + t + ":8001";
  } catch {
    return "";
  }
}
const {
  loadConfig: we,
  saveConfig: Te,
  showConfigWindow: Re,
  setError: Ie,
  clearError: Se,
  testPlatformConnection: he,
  showPlatformConnectionTest: Fe,
  testOverlordConnection: Ee,
  showOverlordConnectionTest: xe,
  testScandManagerConnection: ye,
  showScandManagerConnectionTest: Me,
  addInsecureSslHostname: _e,
  removeInsecureSslHostname: Ae,
  testCli: De,
  showCliTest: Pe,
  downloadCli: Oe,
  showCliDownload: ke,
  openLink: Ne
} = G.actions, Le = Y, Ge = q, He = G.reducer;
function ee(e) {
  const o = e + "CollectionProvider", [t, a] = N(o), [v, C] = t(o, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), I = (f) => {
    const { scope: n, children: i } = f, u = p.useRef(null), c = p.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.createElement(v, {
      scope: n,
      itemMap: c,
      collectionRef: u
    }, i);
  }, S = e + "CollectionSlot", b = /* @__PURE__ */ p.forwardRef((f, n) => {
    const { scope: i, children: u } = f, c = C(S, i), s = y(n, c.collectionRef);
    return /* @__PURE__ */ p.createElement(k, {
      ref: s
    }, u);
  }), l = e + "CollectionItemSlot", g = "data-radix-collection-item", w = /* @__PURE__ */ p.forwardRef((f, n) => {
    const { scope: i, children: u, ...c } = f, s = p.useRef(null), h = y(n, s), m = C(l, i);
    return p.useEffect(() => (m.itemMap.set(s, {
      ref: s,
      ...c
    }), () => void m.itemMap.delete(s))), /* @__PURE__ */ p.createElement(k, {
      [g]: "",
      ref: h
    }, u);
  });
  function T(f) {
    const n = C(e + "CollectionConsumer", f);
    return p.useCallback(() => {
      const u = n.collectionRef.current;
      if (!u)
        return [];
      const c = Array.from(u.querySelectorAll(`[${g}]`));
      return Array.from(n.itemMap.values()).sort(
        (m, F) => c.indexOf(m.ref.current) - c.indexOf(F.ref.current)
      );
    }, [
      n.collectionRef,
      n.itemMap
    ]);
  }
  return [
    {
      Provider: I,
      Slot: b,
      ItemSlot: w
    },
    T,
    a
  ];
}
const oe = /* @__PURE__ */ r.createContext(void 0);
function te(e) {
  const o = r.useContext(oe);
  return e || o || "ltr";
}
const x = "rovingFocusGroup.onEntryFocus", ne = {
  bubbles: !1,
  cancelable: !0
}, A = "RovingFocusGroup", [M, H, re] = ee(A), [ce, Ue] = N(A, [
  re
]), [se, ae] = ce(A), ie = /* @__PURE__ */ r.forwardRef((e, o) => /* @__PURE__ */ r.createElement(M.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ r.createElement(M.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ r.createElement(le, _({}, e, {
  ref: o
}))))), le = /* @__PURE__ */ r.forwardRef((e, o) => {
  const { __scopeRovingFocusGroup: t, orientation: a, loop: v = !1, dir: C, currentTabStopId: I, defaultCurrentTabStopId: S, onCurrentTabStopIdChange: b, onEntryFocus: l, ...g } = e, w = r.useRef(null), T = y(o, w), f = te(C), [n = null, i] = z({
    prop: I,
    defaultProp: S,
    onChange: b
  }), [u, c] = r.useState(!1), s = J(l), h = H(t), m = r.useRef(!1), [F, D] = r.useState(0);
  return r.useEffect(() => {
    const d = w.current;
    if (d)
      return d.addEventListener(x, s), () => d.removeEventListener(x, s);
  }, [
    s
  ]), /* @__PURE__ */ r.createElement(se, {
    scope: t,
    orientation: a,
    dir: f,
    loop: v,
    currentTabStopId: n,
    onItemFocus: r.useCallback(
      (d) => i(d),
      [
        i
      ]
    ),
    onItemShiftTab: r.useCallback(
      () => c(!0),
      []
    ),
    onFocusableItemAdd: r.useCallback(
      () => D(
        (d) => d + 1
      ),
      []
    ),
    onFocusableItemRemove: r.useCallback(
      () => D(
        (d) => d - 1
      ),
      []
    )
  }, /* @__PURE__ */ r.createElement(L.div, _({
    tabIndex: u || F === 0 ? -1 : 0,
    "data-orientation": a
  }, g, {
    ref: T,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: R(e.onMouseDown, () => {
      m.current = !0;
    }),
    onFocus: R(e.onFocus, (d) => {
      const j = !m.current;
      if (d.target === d.currentTarget && j && !u) {
        const P = new CustomEvent(x, ne);
        if (d.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
          const E = h().filter(
            ($) => $.focusable
          ), B = E.find(
            ($) => $.active
          ), K = E.find(
            ($) => $.id === n
          ), V = [
            B,
            K,
            ...E
          ].filter(Boolean).map(
            ($) => $.ref.current
          );
          U(V);
        }
      }
      m.current = !1;
    }),
    onBlur: R(
      e.onBlur,
      () => c(!1)
    )
  })));
}), de = "RovingFocusGroupItem", fe = /* @__PURE__ */ r.forwardRef((e, o) => {
  const { __scopeRovingFocusGroup: t, focusable: a = !0, active: v = !1, tabStopId: C, ...I } = e, S = Q(), b = C || S, l = ae(de, t), g = l.currentTabStopId === b, w = H(t), { onFocusableItemAdd: T, onFocusableItemRemove: f } = l;
  return r.useEffect(() => {
    if (a)
      return T(), () => f();
  }, [
    a,
    T,
    f
  ]), /* @__PURE__ */ r.createElement(M.ItemSlot, {
    scope: t,
    id: b,
    focusable: a,
    active: v
  }, /* @__PURE__ */ r.createElement(L.span, _({
    tabIndex: g ? 0 : -1,
    "data-orientation": l.orientation
  }, I, {
    ref: o,
    onMouseDown: R(e.onMouseDown, (n) => {
      a ? l.onItemFocus(b) : n.preventDefault();
    }),
    onFocus: R(
      e.onFocus,
      () => l.onItemFocus(b)
    ),
    onKeyDown: R(e.onKeyDown, (n) => {
      if (n.key === "Tab" && n.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (n.target !== n.currentTarget)
        return;
      const i = be(n, l.orientation, l.dir);
      if (i !== void 0) {
        n.preventDefault();
        let c = w().filter(
          (s) => s.focusable
        ).map(
          (s) => s.ref.current
        );
        if (i === "last")
          c.reverse();
        else if (i === "prev" || i === "next") {
          i === "prev" && c.reverse();
          const s = c.indexOf(n.currentTarget);
          c = l.loop ? me(c, s + 1) : c.slice(s + 1);
        }
        setTimeout(
          () => U(c)
        );
      }
    })
  })));
}), ue = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function pe(e, o) {
  return o !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function be(e, o, t) {
  const a = pe(e.key, t);
  if (!(o === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(a)) && !(o === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(a)))
    return ue[a];
}
function U(e) {
  const o = document.activeElement;
  for (const t of e)
    if (t === o || (t.focus(), document.activeElement !== o))
      return;
}
function me(e, o) {
  return e.map(
    (t, a) => e[(o + a) % e.length]
  );
}
const je = ie, Be = fe;
export {
  Ue as $,
  ge as S,
  _e as a,
  te as b,
  He as c,
  je as d,
  Be as e,
  Ge as f,
  Ee as g,
  ye as h,
  De as i,
  Oe as j,
  Se as k,
  we as l,
  Te as m,
  Fe as n,
  Ne as o,
  xe as p,
  Me as q,
  Ae as r,
  Ie as s,
  he as t,
  Le as u,
  Pe as v,
  ke as w,
  ee as x
};
