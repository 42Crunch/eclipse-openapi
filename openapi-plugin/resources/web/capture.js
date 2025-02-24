import { c as P, d as F, s as k, a as $, l as D, u as T, b as O, t as L, q as n, T as d, j as r, B as I, f as B, R as M, P as A, h as R, m as q } from "./webapp.CeAUXIIl.js";
import { s as W } from "./rtk-query.modern.B5XzhM1_.js";
import { u as H } from "./index.esm.B6e3vWVZ.js";
import { o as E, s as f, F as J, I as g } from "./Input.24y_a8TM.js";
import { T as N, C as V } from "./CollapsibleCard.L8eOJDRh.js";
import { S as z } from "./TrashCan.CcZ5QY-i.js";
import { P as G } from "./ProgressButton.BnLJqsA7.js";
const U = {
  items: []
}, h = P({
  name: "capture",
  initialState: U,
  reducers: {
    showCaptureWindow: (s, i) => {
      s.items = i.payload;
    },
    browseFiles: (s, i) => {
    },
    setPrepareOptions: (s, i) => {
      const o = i.payload.id, e = s.items.filter((t) => t.id === o)[0];
      e.prepareOptions = i.payload;
    },
    convert: (s, i) => {
      const o = i.payload.id, e = s.items.filter((t) => t.id === o)[0];
      e.progressStatus = "In progress", e.log = [], e.downloadedFile = void 0;
    },
    saveCapture: (s, i) => {
      let o = !1;
      const e = i.payload.id;
      for (let t = 0; t < s.items.length; t++)
        if (s.items[t].id === e) {
          s.items[t] = i.payload, o = !0;
          break;
        }
      o || s.items.unshift(i.payload);
    },
    downloadFile: (s, i) => {
    },
    deleteJob: (s, i) => {
      let o = -1;
      const e = i.payload.id;
      for (let t = 0; t < s.items.length; t++)
        if (s.items[t].id === e) {
          o = t;
          break;
        }
      o > -1 && s.items.splice(o, 1);
    },
    openLink: (s, i) => {
    }
  }
}), {
  showCaptureWindow: _,
  browseFiles: v,
  setPrepareOptions: K,
  convert: m,
  saveCapture: Q,
  downloadFile: b,
  deleteJob: j,
  openLink: w
} = h.actions, X = h.reducer, y = F(), p = y.startListening;
function Y(s) {
  return k({
    browseFiles: () => p({
      actionCreator: v,
      effect: async (o, e) => {
        s.postMessage({
          command: "browseFiles",
          payload: o.payload
        });
      }
    }),
    convert: () => p({
      actionCreator: m,
      effect: async (o, e) => {
        s.postMessage({
          command: "convert",
          payload: o.payload
        });
      }
    }),
    downloadFile: () => p({
      actionCreator: b,
      effect: async (o, e) => {
        s.postMessage({
          command: "downloadFile",
          payload: o.payload
        });
      }
    }),
    deleteJob: () => p({
      actionCreator: j,
      effect: async (o, e) => {
        s.postMessage({
          command: "deleteJob",
          payload: o.payload
        });
      }
    }),
    openLink: () => p({
      actionCreator: w,
      effect: async (o, e) => {
        s.postMessage({
          command: "openLink",
          payload: o.payload
        });
      }
    })
  }), y;
}
const Z = {
  theme: L,
  capture: X
}, ee = {
  changeTheme: D,
  showCaptureWindow: _,
  saveCapture: Q
}, se = (s, i) => {
  const o = $({
    reducer: Z,
    middleware: (e) => e().prepend(s.middleware),
    preloadedState: {
      theme: i
    }
  });
  return W(o.dispatch), o;
}, C = () => T(), re = O;
function oe(s) {
  return { basePath: s.basePath, servers: s.servers.join(",") };
}
function te(s) {
  return { basePath: s.basePath, servers: s.servers.split(",") };
}
function ie() {
  const s = C(), { items: i } = re((e) => e.capture), o = E({
    basePath: f().min(1).trim(),
    servers: f().min(1).refine(
      (e) => e.split(",").map((t) => t.trim()).filter((t) => t.length > 0).every((t) => t.startsWith("http://") || t.startsWith("https://")),
      {
        message: "Invalid format. Examples: 'https://foo.com, http://bar.org'"
      }
    )
  });
  return /* @__PURE__ */ r.jsxs(de, { children: [
    /* @__PURE__ */ r.jsxs(le, { children: [
      /* @__PURE__ */ r.jsxs(pe, { children: [
        i.length,
        " files"
      ] }),
      /* @__PURE__ */ r.jsx(ce, { children: /* @__PURE__ */ r.jsx(
        I,
        {
          disabled: !1,
          onClick: (e) => {
            const t = i.filter((l) => l.progressStatus === "New"), c = t.length === 1 ? t[0].id : "", a = t.length === 1 ? t[0].prepareOptions : void 0;
            s(v({ id: c, options: a })), e.preventDefault(), e.stopPropagation();
          },
          children: "Upload"
        }
      ) })
    ] }),
    i.map((e, t) => {
      var c;
      return /* @__PURE__ */ r.jsxs(V, { defaultCollapsed: e.progressStatus !== "New", children: [
        /* @__PURE__ */ r.jsxs(xe, { children: [
          /* @__PURE__ */ r.jsxs(fe, { children: [
            /* @__PURE__ */ r.jsx(ue, { children: e.quickgenId }),
            /* @__PURE__ */ r.jsx(he, { failed: e.progressStatus === "Failed", children: e.progressStatus })
          ] }),
          /* @__PURE__ */ r.jsx(ge, { children: e.progressStatus !== "In progress" && /* @__PURE__ */ r.jsx(ve, { children: /* @__PURE__ */ r.jsx(
            me,
            {
              onClick: (a) => {
                s(j({ id: e.id, quickgenId: e.quickgenId })), a.preventDefault(), a.stopPropagation();
              },
              children: /* @__PURE__ */ r.jsx(z, {})
            }
          ) }) })
        ] }),
        /* @__PURE__ */ r.jsx(be, { children: /* @__PURE__ */ r.jsxs(
          J,
          {
            wrapFormData: oe,
            unwrapFormData: te,
            useFormMode: "onChange",
            data: e.prepareOptions,
            schema: o,
            saveData: (a) => {
              s(K({ id: e.id, ...a }));
            },
            children: [
              /* @__PURE__ */ r.jsxs(je, { children: [
                /* @__PURE__ */ r.jsxs(we, { children: [
                  /* @__PURE__ */ r.jsx("div", { children: "Selected Files" }),
                  /* @__PURE__ */ r.jsx("div", { children: "Options" }),
                  /* @__PURE__ */ r.jsx("div", { children: "Log" })
                ] }),
                /* @__PURE__ */ r.jsx(ye, { children: /* @__PURE__ */ r.jsxs(Ce, { children: [
                  /* @__PURE__ */ r.jsx(x, { children: e.files && /* @__PURE__ */ r.jsx(Se, { children: e.files.map((a, l) => /* @__PURE__ */ r.jsx("span", { children: a }, `item-${e.id}-file-${l}`)) }) }),
                  /* @__PURE__ */ r.jsxs(x, { children: [
                    e.progressStatus !== "New" && e.prepareOptions.basePath && /* @__PURE__ */ r.jsxs(u, { children: [
                      /* @__PURE__ */ r.jsxs("div", { children: [
                        "Base Path = ",
                        (c = e.prepareOptions) == null ? void 0 : c.basePath
                      ] }),
                      /* @__PURE__ */ r.jsxs("div", { children: [
                        "Servers = ",
                        e.prepareOptions.servers.join(", ")
                      ] })
                    ] }),
                    e.progressStatus === "New" && /* @__PURE__ */ r.jsxs(u, { children: [
                      /* @__PURE__ */ r.jsx(g, { label: "Base Path", name: "basePath" }),
                      /* @__PURE__ */ r.jsx(g, { label: "Servers", name: "servers" })
                    ] })
                  ] }),
                  /* @__PURE__ */ r.jsx(x, { children: e.log.length > 0 && /* @__PURE__ */ r.jsxs(Pe, { children: [
                    e.log.map((a, l) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("span", { children: a }) }, `item-${e.id}-log-${l}`)),
                    e.downloadedFile && /* @__PURE__ */ r.jsxs("div", { children: [
                      "Saved to",
                      " ",
                      /* @__PURE__ */ r.jsx(
                        ae,
                        {
                          href: "#",
                          disabled: !1,
                          onClick: (a) => {
                            a.preventDefault(), a.stopPropagation(), s(w(e.downloadedFile || ""));
                          },
                          children: e.downloadedFile
                        }
                      )
                    ] }, `item-${e.id}-log-${e.log.length}`)
                  ] }) })
                ] }) })
              ] }),
              e.progressStatus !== "Finished" && /* @__PURE__ */ r.jsx(ne, { item: e }),
              e.progressStatus === "Finished" && /* @__PURE__ */ r.jsx(Fe, { children: /* @__PURE__ */ r.jsx(
                S,
                {
                  label: "Download",
                  waiting: !1,
                  onClick: (a) => {
                    s(
                      b({ id: e.id, quickgenId: e.quickgenId })
                    ), a.preventDefault(), a.stopPropagation();
                  }
                }
              ) })
            ]
          }
        ) })
      ] }, `item-${e.id}`);
    })
  ] });
}
function ne({ item: s }) {
  const {
    trigger: i,
    formState: { isValid: o }
  } = H(), e = C();
  return /* @__PURE__ */ r.jsx(
    S,
    {
      label: "Convert",
      waiting: s.progressStatus === "In progress",
      onClick: (t) => {
        o ? e(m({ id: s.id, files: s.files, options: s.prepareOptions })) : i(), t.preventDefault(), t.stopPropagation();
      }
    }
  );
}
const ae = n.a`
  text-decoration: none;
  ${({ disabled: s }) => s && "opacity: 0.4;"}
  ${({ disabled: s }) => s && "cursor: default;"}
  ${({ disabled: s }) => s && "pointer-events: none;"}
`, de = n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`, le = n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(${d.computedOne});
  border-color: var(${d.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
`, pe = n.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  padding-left: 16px;
  font-weight: bold;
`, ce = n.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  padding-right: 16px;
  width: 120px;
`, xe = n(N)`
  justify-content: space-between;
`, fe = n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, ge = n.div`
  padding-right: 3px;
`, ue = n.div`
  width: 300px;
`, he = n.div`
  display: flex;
  width: 80px;
  padding: 3px;
  flex-direction: row;
  justify-content: center;
  border-color: var(${d.border});
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  ${({ failed: s }) => s ? `background-color: var(${d.errorBackground});` : `background-color: var(${d.computedOne});`}
  ${({ failed: s }) => s ? `border-color: var(${d.errorBorder});` : `border-color: var(${d.border});`}
`, ve = n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, me = n.span`
  font-weight: bold;
  cursor: pointer;
  // padding: 16px;
  > svg {
    fill: var(${d.foreground});
  }
`, be = n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`, je = n.div`
  display: grid;
  row-gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
`, we = n.div`
  display: contents;
  & > div {
    padding: 4px 8px;
    background-color: var(${d.computedOne});
    text-transform: uppercase;
    font-size: 90%;
    font-weight: 600;
  }
`, ye = n.div`
  display: contents;
  & > div > div {
    border-bottom: 1px solid var(${d.border});
  }
`, Ce = n.div`
  display: contents;
`, x = n.div`
  padding: 4px 8px;
`, Se = n.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`, u = n.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`, Pe = n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: 200px;
`, S = n(G)`
  height: 30px;
  width: 120px;
`, Fe = n.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
function ke(s, i) {
  const o = se(Y(s), i);
  B(document.getElementById("root")).render(
    /* @__PURE__ */ r.jsx(M.StrictMode, { children: /* @__PURE__ */ r.jsxs(A, { store: o, children: [
      /* @__PURE__ */ r.jsx(R, {}),
      /* @__PURE__ */ r.jsx(ie, {})
    ] }) })
  ), window.addEventListener("message", q(o, ee));
}
window.renderWebView = ke;
