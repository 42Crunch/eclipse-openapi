import { c as V, u as W, b as Y, R as b, e as r, _ } from "./TriangleExclamation.C9TIeFdu.js";
import { $ as k, c as y, h as O, a as q, k as z, b as N, d as R, i as J } from "./index.DA5DQXjg.js";
const Q = {
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
    platformMandatoryTags: ""
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
    "scan-runtime": void 0
  },
  hasErrors: !1
}, L = V({
  name: "config",
  initialState: Q,
  reducers: {
    loadConfig: (e, o) => {
      e.data = o.payload, e.ready = !0;
    },
    saveConfig: (e, o) => {
      e.data = { ...e.data, ...o.payload }, e.data.platformServices.auto = X(e.data.platformUrl), e.platformConnectionTestResult = void 0, e.overlordConnectionTestResult = void 0, e.scandManagerConnectionTestResult = void 0;
    },
    setError: (e, o) => {
      const { screen: t, error: s } = o.payload;
      e.errors[t] = s, e.hasErrors = Object.values(e.errors).some((v) => v !== void 0);
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
function X(e) {
  try {
    const t = new URL(e).hostname;
    return t.toLowerCase().startsWith("platform") ? t.replace(/^platform/i, "services") + ":8001" : "services." + t + ":8001";
  } catch {
    return "";
  }
}
const {
  loadConfig: $e,
  saveConfig: ge,
  showConfigWindow: Te,
  setError: we,
  clearError: Re,
  testPlatformConnection: Ie,
  showPlatformConnectionTest: Fe,
  testOverlordConnection: Se,
  showOverlordConnectionTest: Ee,
  testScandManagerConnection: he,
  showScandManagerConnectionTest: xe,
  addInsecureSslHostname: ye,
  removeInsecureSslHostname: Me,
  testCli: _e,
  showCliTest: Ae,
  downloadCli: De,
  showCliDownload: Pe,
  openLink: Oe
} = L.actions, ke = W, Ne = Y, Le = L.reducer;
function Z(e) {
  const o = e + "CollectionProvider", [t, s] = k(o), [v, C] = t(o, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), I = (f) => {
    const { scope: n, children: i } = f, u = b.useRef(null), c = b.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ b.createElement(v, {
      scope: n,
      itemMap: c,
      collectionRef: u
    }, i);
  }, F = e + "CollectionSlot", p = /* @__PURE__ */ b.forwardRef((f, n) => {
    const { scope: i, children: u } = f, c = C(F, i), a = y(n, c.collectionRef);
    return /* @__PURE__ */ b.createElement(O, {
      ref: a
    }, u);
  }), l = e + "CollectionItemSlot", g = "data-radix-collection-item", T = /* @__PURE__ */ b.forwardRef((f, n) => {
    const { scope: i, children: u, ...c } = f, a = b.useRef(null), S = y(n, a), m = C(l, i);
    return b.useEffect(() => (m.itemMap.set(a, {
      ref: a,
      ...c
    }), () => void m.itemMap.delete(a))), /* @__PURE__ */ b.createElement(O, {
      [g]: "",
      ref: S
    }, u);
  });
  function w(f) {
    const n = C(e + "CollectionConsumer", f);
    return b.useCallback(() => {
      const u = n.collectionRef.current;
      if (!u)
        return [];
      const c = Array.from(u.querySelectorAll(`[${g}]`));
      return Array.from(n.itemMap.values()).sort(
        (m, E) => c.indexOf(m.ref.current) - c.indexOf(E.ref.current)
      );
    }, [
      n.collectionRef,
      n.itemMap
    ]);
  }
  return [
    {
      Provider: I,
      Slot: p,
      ItemSlot: T
    },
    w,
    s
  ];
}
const ee = /* @__PURE__ */ r.createContext(void 0);
function oe(e) {
  const o = r.useContext(ee);
  return e || o || "ltr";
}
const x = "rovingFocusGroup.onEntryFocus", te = {
  bubbles: !1,
  cancelable: !0
}, A = "RovingFocusGroup", [M, G, ne] = Z(A), [re, Ge] = k(A, [
  ne
]), [ce, ae] = re(A), se = /* @__PURE__ */ r.forwardRef((e, o) => /* @__PURE__ */ r.createElement(M.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ r.createElement(M.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ r.createElement(ie, _({}, e, {
  ref: o
}))))), ie = /* @__PURE__ */ r.forwardRef((e, o) => {
  const { __scopeRovingFocusGroup: t, orientation: s, loop: v = !1, dir: C, currentTabStopId: I, defaultCurrentTabStopId: F, onCurrentTabStopIdChange: p, onEntryFocus: l, ...g } = e, T = r.useRef(null), w = y(o, T), f = oe(C), [n = null, i] = q({
    prop: I,
    defaultProp: F,
    onChange: p
  }), [u, c] = r.useState(!1), a = z(l), S = G(t), m = r.useRef(!1), [E, D] = r.useState(0);
  return r.useEffect(() => {
    const d = T.current;
    if (d)
      return d.addEventListener(x, a), () => d.removeEventListener(x, a);
  }, [
    a
  ]), /* @__PURE__ */ r.createElement(ce, {
    scope: t,
    orientation: s,
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
  }, /* @__PURE__ */ r.createElement(N.div, _({
    tabIndex: u || E === 0 ? -1 : 0,
    "data-orientation": s
  }, g, {
    ref: w,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: R(e.onMouseDown, () => {
      m.current = !0;
    }),
    onFocus: R(e.onFocus, (d) => {
      const U = !m.current;
      if (d.target === d.currentTarget && U && !u) {
        const P = new CustomEvent(x, te);
        if (d.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
          const h = S().filter(
            ($) => $.focusable
          ), K = h.find(
            ($) => $.active
          ), B = h.find(
            ($) => $.id === n
          ), j = [
            K,
            B,
            ...h
          ].filter(Boolean).map(
            ($) => $.ref.current
          );
          H(j);
        }
      }
      m.current = !1;
    }),
    onBlur: R(
      e.onBlur,
      () => c(!1)
    )
  })));
}), le = "RovingFocusGroupItem", de = /* @__PURE__ */ r.forwardRef((e, o) => {
  const { __scopeRovingFocusGroup: t, focusable: s = !0, active: v = !1, tabStopId: C, ...I } = e, F = J(), p = C || F, l = ae(le, t), g = l.currentTabStopId === p, T = G(t), { onFocusableItemAdd: w, onFocusableItemRemove: f } = l;
  return r.useEffect(() => {
    if (s)
      return w(), () => f();
  }, [
    s,
    w,
    f
  ]), /* @__PURE__ */ r.createElement(M.ItemSlot, {
    scope: t,
    id: p,
    focusable: s,
    active: v
  }, /* @__PURE__ */ r.createElement(N.span, _({
    tabIndex: g ? 0 : -1,
    "data-orientation": l.orientation
  }, I, {
    ref: o,
    onMouseDown: R(e.onMouseDown, (n) => {
      s ? l.onItemFocus(p) : n.preventDefault();
    }),
    onFocus: R(
      e.onFocus,
      () => l.onItemFocus(p)
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
        let c = T().filter(
          (a) => a.focusable
        ).map(
          (a) => a.ref.current
        );
        if (i === "last")
          c.reverse();
        else if (i === "prev" || i === "next") {
          i === "prev" && c.reverse();
          const a = c.indexOf(n.currentTarget);
          c = l.loop ? pe(c, a + 1) : c.slice(a + 1);
        }
        setTimeout(
          () => H(c)
        );
      }
    })
  })));
}), fe = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ue(e, o) {
  return o !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function be(e, o, t) {
  const s = ue(e.key, t);
  if (!(o === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(s)) && !(o === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(s)))
    return fe[s];
}
function H(e) {
  const o = document.activeElement;
  for (const t of e)
    if (t === o || (t.focus(), document.activeElement !== o))
      return;
}
function pe(e, o) {
  return e.map(
    (t, s) => e[(o + s) % e.length]
  );
}
const He = se, Ue = de;
export {
  Ge as $,
  ye as a,
  oe as b,
  Le as c,
  He as d,
  Ue as e,
  Ne as f,
  Se as g,
  he as h,
  _e as i,
  De as j,
  Re as k,
  $e as l,
  ge as m,
  Fe as n,
  Oe as o,
  Ee as p,
  xe as q,
  Me as r,
  we as s,
  Ie as t,
  ke as u,
  Ae as v,
  Pe as w,
  Z as x
};
