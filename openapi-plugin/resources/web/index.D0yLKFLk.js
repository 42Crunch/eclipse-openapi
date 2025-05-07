import { c as $, u as J, b as Q, x as k, R as T, Y as A, j as m, a3 as N, f as i, a6 as X, A as Z, y as L, z as E, a7 as ee } from "./TriangleExclamation.pAuQxBo5.js";
const oe = {
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
    auditRuntime: "platform",
    scanRuntime: "docker",
    scanImage: "",
    docker: {
      replaceLocalhost: !0,
      useHostNetwork: !0
    },
    platform: "",
    cli: { found: !1, location: "" },
    cliDirectoryOverride: "",
    repository: "",
    platformTemporaryCollectionName: "",
    platformMandatoryTags: "",
    approvedHosts: [],
    internalUseDevEndpoints: !1,
    internalFeatures: !1
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
    "runtime-binary": void 0,
    "runtime-docker": void 0,
    "runtime-scand-manager": void 0,
    "audit-runtime": void 0,
    "scan-runtime": void 0,
    "openapi-external-refs": void 0,
    "dev-endpoints": void 0
  },
  hasErrors: !1
}, j = $({
  name: "config",
  initialState: oe,
  reducers: {
    loadConfig: (e, o) => {
      e.ready ? e.data.cli = o.payload.cli : (e.ready = !0, e.data = o.payload);
    },
    saveConfig: (e, o) => {
      e.data = { ...e.data, ...o.payload }, e.data.platformServices.auto = te(e.data.platformUrl), e.platformConnectionTestResult = void 0, e.overlordConnectionTestResult = void 0, e.scandManagerConnectionTestResult = void 0, e.cliDownloadError = void 0, e.cliTestResult = void 0;
    },
    setError: (e, o) => {
      const { screen: n, error: r } = o.payload;
      e.errors[n] = r, e.hasErrors = Object.values(e.errors).some((v) => v !== void 0);
    },
    clearError: (e, o) => {
      e.errors[o.payload] = void 0, e.hasErrors = Object.values(e.errors).some((n) => n !== void 0);
    },
    addInsecureSslHostname: (e, o) => {
      e.data.insecureSslHostnames.push(o.payload);
    },
    removeInsecureSslHostname: (e, o) => {
      e.data.insecureSslHostnames = e.data.insecureSslHostnames.filter(
        (n) => n !== o.payload
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
function te(e) {
  try {
    const n = new URL(e).hostname;
    return n.toLowerCase().startsWith("platform") ? n.replace(/^platform/i, "services") + ":8001" : "services." + n + ":8001";
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
  testPlatformConnection: Fe,
  showPlatformConnectionTest: ye,
  testOverlordConnection: he,
  showOverlordConnectionTest: Ee,
  testScandManagerConnection: be,
  showScandManagerConnectionTest: xe,
  addInsecureSslHostname: De,
  removeInsecureSslHostname: Me,
  testCli: Ae,
  showCliTest: Oe,
  downloadCli: Pe,
  showCliDownload: _e,
  openLink: Ne
} = j.actions, ke = J, Le = Q, je = j.reducer;
function ne(e) {
  const o = e + "CollectionProvider", [n, r] = k(o), [v, C] = n(
    o,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), R = (d) => {
    const { scope: t, children: c } = d, f = T.useRef(null), s = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m.jsx(v, { scope: t, itemMap: s, collectionRef: f, children: c });
  };
  R.displayName = o;
  const I = e + "CollectionSlot", p = T.forwardRef(
    (d, t) => {
      const { scope: c, children: f } = d, s = C(I, c), a = A(t, s.collectionRef);
      return /* @__PURE__ */ m.jsx(N, { ref: a, children: f });
    }
  );
  p.displayName = I;
  const l = e + "CollectionItemSlot", S = "data-radix-collection-item", F = T.forwardRef(
    (d, t) => {
      const { scope: c, children: f, ...s } = d, a = T.useRef(null), y = A(t, a), h = C(l, c);
      return T.useEffect(() => (h.itemMap.set(a, { ref: a, ...s }), () => void h.itemMap.delete(a))), /* @__PURE__ */ m.jsx(N, { [S]: "", ref: y, children: f });
    }
  );
  F.displayName = l;
  function g(d) {
    const t = C(e + "CollectionConsumer", d);
    return T.useCallback(() => {
      const f = t.collectionRef.current;
      if (!f) return [];
      const s = Array.from(f.querySelectorAll(`[${S}]`));
      return Array.from(t.itemMap.values()).sort(
        (h, b) => s.indexOf(h.ref.current) - s.indexOf(b.ref.current)
      );
    }, [t.collectionRef, t.itemMap]);
  }
  return [
    { Provider: R, Slot: p, ItemSlot: F },
    g,
    r
  ];
}
var re = i.createContext(void 0);
function se(e) {
  const o = i.useContext(re);
  return e || o || "ltr";
}
var M = "rovingFocusGroup.onEntryFocus", ae = { bubbles: !1, cancelable: !0 }, x = "RovingFocusGroup", [O, G, ce] = ne(x), [ie, Ge] = k(
  x,
  [ce]
), [le, ue] = ie(x), H = i.forwardRef(
  (e, o) => /* @__PURE__ */ m.jsx(O.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(O.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m.jsx(de, { ...e, ref: o }) }) })
);
H.displayName = x;
var de = i.forwardRef((e, o) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: v = !1,
    dir: C,
    currentTabStopId: R,
    defaultCurrentTabStopId: I,
    onCurrentTabStopIdChange: p,
    onEntryFocus: l,
    preventScrollOnEntryFocus: S = !1,
    ...F
  } = e, g = i.useRef(null), d = A(o, g), t = se(C), [c = null, f] = X({
    prop: R,
    defaultProp: I,
    onChange: p
  }), [s, a] = i.useState(!1), y = Z(l), h = G(n), b = i.useRef(!1), [Y, P] = i.useState(0);
  return i.useEffect(() => {
    const u = g.current;
    if (u)
      return u.addEventListener(M, y), () => u.removeEventListener(M, y);
  }, [y]), /* @__PURE__ */ m.jsx(
    le,
    {
      scope: n,
      orientation: r,
      dir: t,
      loop: v,
      currentTabStopId: c,
      onItemFocus: i.useCallback(
        (u) => f(u),
        [f]
      ),
      onItemShiftTab: i.useCallback(() => a(!0), []),
      onFocusableItemAdd: i.useCallback(
        () => P((u) => u + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => P((u) => u - 1),
        []
      ),
      children: /* @__PURE__ */ m.jsx(
        L.div,
        {
          tabIndex: s || Y === 0 ? -1 : 0,
          "data-orientation": r,
          ...F,
          ref: d,
          style: { outline: "none", ...e.style },
          onMouseDown: E(e.onMouseDown, () => {
            b.current = !0;
          }),
          onFocus: E(e.onFocus, (u) => {
            const V = !b.current;
            if (u.target === u.currentTarget && V && !s) {
              const _ = new CustomEvent(M, ae);
              if (u.currentTarget.dispatchEvent(_), !_.defaultPrevented) {
                const D = h().filter((w) => w.focusable), W = D.find((w) => w.active), q = D.find((w) => w.id === c), z = [W, q, ...D].filter(
                  Boolean
                ).map((w) => w.ref.current);
                B(z, S);
              }
            }
            b.current = !1;
          }),
          onBlur: E(e.onBlur, () => a(!1))
        }
      )
    }
  );
}), U = "RovingFocusGroupItem", K = i.forwardRef(
  (e, o) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: v = !1,
      tabStopId: C,
      ...R
    } = e, I = ee(), p = C || I, l = ue(U, n), S = l.currentTabStopId === p, F = G(n), { onFocusableItemAdd: g, onFocusableItemRemove: d } = l;
    return i.useEffect(() => {
      if (r)
        return g(), () => d();
    }, [r, g, d]), /* @__PURE__ */ m.jsx(
      O.ItemSlot,
      {
        scope: n,
        id: p,
        focusable: r,
        active: v,
        children: /* @__PURE__ */ m.jsx(
          L.span,
          {
            tabIndex: S ? 0 : -1,
            "data-orientation": l.orientation,
            ...R,
            ref: o,
            onMouseDown: E(e.onMouseDown, (t) => {
              r ? l.onItemFocus(p) : t.preventDefault();
            }),
            onFocus: E(e.onFocus, () => l.onItemFocus(p)),
            onKeyDown: E(e.onKeyDown, (t) => {
              if (t.key === "Tab" && t.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (t.target !== t.currentTarget) return;
              const c = pe(t, l.orientation, l.dir);
              if (c !== void 0) {
                if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
                t.preventDefault();
                let s = F().filter((a) => a.focusable).map((a) => a.ref.current);
                if (c === "last") s.reverse();
                else if (c === "prev" || c === "next") {
                  c === "prev" && s.reverse();
                  const a = s.indexOf(t.currentTarget);
                  s = l.loop ? ve(s, a + 1) : s.slice(a + 1);
                }
                setTimeout(() => B(s));
              }
            })
          }
        )
      }
    );
  }
);
K.displayName = U;
var fe = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function me(e, o) {
  return o !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function pe(e, o, n) {
  const r = me(e.key, n);
  if (!(o === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(o === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return fe[r];
}
function B(e, o = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: o }), document.activeElement !== n)) return;
}
function ve(e, o) {
  return e.map((n, r) => e[(o + r) % e.length]);
}
var He = H, Ue = K;
export {
  Ue as I,
  He as R,
  De as a,
  Ee as b,
  je as c,
  xe as d,
  Oe as e,
  _e as f,
  Le as g,
  he as h,
  Pe as i,
  Ae as j,
  be as k,
  we as l,
  Se as m,
  Ie as n,
  Ne as o,
  Te as p,
  ne as q,
  Me as r,
  ye as s,
  Fe as t,
  ke as u,
  Ge as v,
  se as w
};
