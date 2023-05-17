import { c as E, a as O, l as k, u as D, t as Z, b as Q, i as G, s as U, r as I, j as M, T as a, d as f, R as v, P as W, m as R, e as B, f as P } from "./ThemeStyles.c0d84d2f.js";
import { u as J } from "./useDispatch.43a2a81a.js";
const l = {
  display: "loading",
  summary: {
    documentUri: "",
    subdocumentUris: [],
    errors: !1,
    invalid: !1,
    all: 0,
    datavalidation: { max: 0, value: 0 },
    security: { max: 0, value: 0 },
    oasconformance: { max: 0, value: 0 }
  },
  all: [],
  selected: [],
  kdb: {}
}, T = E({
  name: "audit",
  initialState: l,
  reducers: {
    showFullReport: (i, o) => {
      i.display = "full", i.summary = o.payload.summary, i.all = i.selected = x(o.payload);
    },
    showPartialReport: (i, o) => {
      const e = x(o.payload.report), c = o.payload.ids.map((t) => `${o.payload.uri}-${t}`);
      i.display = "partial", i.summary = o.payload.report.summary, i.all = e, i.selected = e.filter((t) => c.includes(t.key));
    },
    goToFullReport: (i) => {
      i.display = "full", i.selected = i.all;
    },
    showNoReport: (i) => {
      i.display = "no-report", i.summary = l.summary, i.all = [], i.selected = [];
    },
    loadKdb: (i, o) => {
      i.kdb = o.payload;
    },
    goToLine: (i, o) => {
    },
    copyIssueId: (i, o) => {
    },
    openLink: (i, o) => {
    }
  }
});
function x(i) {
  return Object.entries(i.issues).map(([e, c]) => c.map((t, N) => ({
    ...t,
    key: `${e}-${N}`,
    filename: i.files[t.documentUri].relative
  }))).reduce((e, c) => e.concat(c), []);
}
const {
  showFullReport: C,
  showPartialReport: w,
  goToFullReport: y,
  showNoReport: z,
  loadKdb: X,
  goToLine: p,
  copyIssueId: A,
  openLink: S
} = T.actions, H = T.reducer, F = {
  audit: H,
  theme: Z
}, V = (i, o) => O({
  reducer: F,
  middleware: (e) => e().prepend(i.middleware).concat(k),
  preloadedState: {
    theme: o
  }
}), K = () => J(), u = D, m = Q(), r = m.startListening;
function _(i) {
  const o = {
    goToLine: () => r({
      actionCreator: p,
      effect: async (e, c) => {
        i.postMessage({
          command: "goToLine",
          payload: e.payload
        });
      }
    }),
    copyIssueId: () => r({
      actionCreator: A,
      effect: async (e, c) => {
        i.postMessage({
          command: "copyIssueId",
          payload: e.payload
        });
      }
    }),
    openLink: () => r({
      actionCreator: S,
      effect: async (e, c) => {
        i.postMessage({
          command: "openLink",
          payload: e.payload
        });
      }
    })
  };
  return r({
    matcher: G(C, w, z, y),
    effect: async (e, c) => {
      window.scrollTo(0, 0);
    }
  }), U(o), m;
}
const h = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1NjYuOTMgMTkyLjIyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NjYuOTMgMTkyLjIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMkQyRDJEO30NCgkuc3Qxe2ZpbGw6IzdGNDg4RTt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjMuMjIsOTYuMTRjMC0xMi44Nyw0LjA3LTIyLjcsMTIuMi0yOS40OWM4LjEzLTYuOCwxNy43MS0xMC4xOSwyOC43Mi0xMC4xOWM4Ljg1LDAsMTYuNDcsMS45MSwyMi44NSw1LjcxDQoJVjc3LjNjLTUuNzctNC4xMi0xMi42MS02LjE4LTIwLjU0LTYuMThjLTcuMzEsMC0xMy41NCwyLjAzLTE4LjY4LDYuMWMtNS4xNSw0LjA3LTcuNzIsMTAuMTctNy43MiwxOC4zDQoJYzAsNy45MywyLjU1LDEzLjk4LDcuNjQsMTguMTRjNS4xLDQuMTcsMTEuMjUsNi4yNSwxOC40NSw2LjI1YzcuODIsMCwxNS4wMy0xLjksMjEuNjItNS43MXYxNS4yOWMtNy4xLDMuNC0xNS4yOSw1LjEtMjQuNTUsNS4xDQoJYy0xMC44MSwwLTIwLjE4LTMuMzItMjguMS05Ljk2QzE2Ny4xOCwxMTcuOTksMTYzLjIyLDEwOC40OSwxNjMuMjIsOTYuMTR6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQ2LjE0LDcwLjY2YzIuODgtNC42Myw3LjE1LTguMjMsMTIuODItMTAuODFjNS42Ni0yLjU3LDExLjc5LTMuNTUsMTguMzgtMi45M3YxNi4yMQ0KCWMtNi41OS0wLjkzLTEyLjU2LTAuMDUtMTcuOTEsMi42MmMtNS4zNSwyLjY4LTkuMTYsNi42NC0xMS40MywxMS44OXY0NC45NGgtMTYuNTJWNTguNDZoMTQuNjdWNzAuNjZ6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE2LjgxLDU3Ljg4aDE2LjUydjc0LjEyaC0xNC42N3YtMTAuMTljLTYuNzksOC4xMy0xNS4zOSwxMi4yLTI1Ljc5LDEyLjJjLTkuNTcsMC0xNy4wNi0yLjc4LTIyLjQ3LTguMzQNCgljLTUuNC01LjU2LTguMTEtMTIuODctOC4xMS0yMS45M1Y1Ny44OGgxNi41MnY0My43YzAsMTEuODQsNS43NiwxNy43NiwxNy4yOSwxNy43NmM4LjEzLDAsMTUuMDMtNC4xMiwyMC42OS0xMi4zNVY1Ny44OHoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTIuMjMsNjguMDhjNi44LTguMTMsMTUuMzktMTIuMiwyNS43OS0xMi4yYzkuMjcsMCwxNi42OCwyLjgxLDIyLjI0LDguNDJjNS41Niw1LjYxLDguMzQsMTIuODksOC4zNCwyMS44NQ0KCXY0NS44NmgtMTYuNTJ2LTQzLjdjMC01Ljc2LTEuNi0xMC4xNy00Ljc5LTEzLjJjLTMuMTktMy4wNC03LjM2LTQuNTYtMTIuNTEtNC41NmMtOC4xMywwLTE1LjAzLDQuMTItMjAuNjksMTIuMzV2NDkuMTFoLTE2LjUyDQoJVjU3Ljg4aDE0LjY3VjY4LjA4eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxMS4zNyw5NS41NmMwLTEyLjg3LDQuMDctMjIuNywxMi4yLTI5LjQ5YzguMTMtNi44LDE3LjcxLTEwLjE5LDI4LjcyLTEwLjE5YzguODUsMCwxNi40NywxLjkxLDIyLjg1LDUuNzENCgl2MTUuMTNjLTUuNzctNC4xMi0xMi42MS02LjE4LTIwLjU0LTYuMThjLTcuMzEsMC0xMy41NCwyLjAzLTE4LjY4LDYuMWMtNS4xNSw0LjA3LTcuNzIsMTAuMTctNy43MiwxOC4zDQoJYzAsNy45MywyLjU1LDEzLjk4LDcuNjQsMTguMTRzMTEuMjUsNi4yNSwxOC40NSw2LjI1YzcuODIsMCwxNS4wMy0xLjksMjEuNjItNS43MXYxNS4yOWMtNy4xLDMuNC0xNS4yOSw1LjEtMjQuNTUsNS4xDQoJYy0xMC44MSwwLTIwLjE4LTMuMzItMjguMTEtOS45NkM0MTUuMzMsMTE3LjQxLDQxMS4zNywxMDcuOTIsNDExLjM3LDk1LjU2eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ3OS42MiwyMy45MWgxNi41MnY0Mi4xNmM2LjU5LTYuOCwxNC41Ny0xMC4xOSwyMy45NC0xMC4xOWM5LjI3LDAsMTYuNjgsMi44MSwyMi4yNCw4LjQyDQoJYzUuNTYsNS42MSw4LjM0LDEyLjg5LDguMzQsMjEuODV2NDUuODZoLTE2LjUydi00My43YzAtNS43Ni0xLjYtMTAuMTctNC43OS0xMy4yYy0zLjE5LTMuMDQtNy4zNi00LjU2LTEyLjUxLTQuNTYNCgljLTguMTMsMC0xNS4wMyw0LjEyLTIwLjY5LDEyLjM1djQ5LjExaC0xNi41MlYyMy45MXoiLz4NCjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTU0Ljk0LDEzNi43MSAxNTQuOTQsNTMuMjYgODIuNjcsMTEuNTQgMTAuNCw1My4yNiAxMC40LDEzNi43MSA4Mi42NywxNzguNDQgIi8+DQo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzEuMDIsNzcuMDRoMTEuNjF2NDMuODhoMC4xNHY5LjgzaC0wLjE0djEzLjhINzEuNzJ2LTEzLjhIMzUuMDl2LTkuNjNMNzEuMDIsNzcuMDR6IE03MS43MiwxMjAuOTFWOTEuNDINCglsLTI0LjA0LDI5LjQ5SDcxLjcyeiIvPg0KPHBhdGggY2xhc3M9InN0MiIgZD0iTTgyLjA2LDU3LjFjNi42OC00LjU3LDE0LjE2LTYuODUsMjIuNDQtNi44NWM3LjA4LDAsMTIuODEsMS42NCwxNy4xNyw0LjkxYzQuMzcsMy4yOCw2LjU1LDcuOTYsNi41NSwxNC4wNQ0KCWMwLDUuMDUtMS42OCw5LjM2LTUuMDUsMTIuOTNjLTMuMzcsMy41Ny03Ljk1LDcuMDctMTMuNzUsMTAuNDdjLTAuNDUsMC4yOC0xLjI5LDAuNzktMi41LDEuNTRjLTEuMjIsMC43NS0yLjA4LDEuMjgtMi41OSwxLjU5DQoJYy0wLjUxLDAuMzEtMS4yOSwwLjc5LTIuMzMsMS40M2MtMS4wNSwwLjY0LTEuODIsMS4xMi0yLjMzLDEuNDNjLTAuNTEsMC4zMS0xLjE3LDAuNzktMiwxLjQzYy0wLjgyLDAuNjQtMS40MywxLjE4LTEuODIsMS42Mg0KCWMtMC4zOSwwLjQ0LTAuODUsMC45OC0xLjM4LDEuNjJjLTAuNTMsMC42NC0wLjksMS4yMy0xLjEzLDEuNzdjLTAuMjMsMC41NC0wLjQ0LDEuMTUtMC42NCwxLjgzYy0wLjIsMC42OC0wLjMsMS4zNS0wLjMsMi4wMw0KCWwzNi4xOS0wLjF2MTAuMjNoLTQ4Ljh2LTUuMTZjMC04LjYsMy42NC0xNS43NSwxMC45Mi0yMS40NGMyLjAzLTEuNTMsNS44NC0zLjk5LDExLjQxLTcuMzljNS42MS0zLjIyLDkuMjItNS41NiwxMC44My03LjAxDQoJYzIuNjUtMi41OCwzLjk3LTUuNDYsMy45Ny04LjY0YzAtMi45MS0xLjE4LTUuMTMtMy41Mi02LjY1Yy0yLjM1LTEuNTItNS42NC0yLjI4LTkuODgtMi4yOGMtNy4zNSwwLTE0LjQ5LDIuNTItMjEuNDQsNy41NFY1Ny4xeiIvPg0KPC9zdmc+DQo=", b = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iDQogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIg0KICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgdmVyc2lvbj0iMS4xIg0KICAgaWQ9IkxheWVyXzEiDQogICB4PSIwcHgiDQogICB5PSIwcHgiDQogICB2aWV3Qm94PSIwIDAgNTY2LjkzIDE5Mi4yMiINCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ni45MyAxOTIuMjI7Ig0KICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSINCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ28uc3ZnIg0KICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSIvVXNlcnMvYW50b24vRG93bmxvYWRzLzQyY19zdGFuZGFyZC5wbmciDQogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMjQuODc5OTk5Ig0KICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjI0Ljg3OTk5OSINCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yIChlODZjODcwOCwgMjAyMS0wMS0xNSkiPjxtZXRhZGF0YQ0KICAgaWQ9Im1ldGFkYXRhMTQzIj48cmRmOlJERj48Y2M6V29yaw0KICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQ0KICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMNCiAgIGlkPSJkZWZzMTQxIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgYm9yZGVyb3BhY2l0eT0iMSINCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiDQogICBncmlkdG9sZXJhbmNlPSIxMCINCiAgIGd1aWRldG9sZXJhbmNlPSIxMCINCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIg0KICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiINCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTQ0MCINCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg1NSINCiAgIGlkPSJuYW1lZHZpZXcxMzkiDQogICBzaG93Z3JpZD0iZmFsc2UiDQogICBpbmtzY2FwZTp6b29tPSIwLjk2NzQ5MTU4Ig0KICAgaW5rc2NhcGU6Y3g9IjExNy41NzIwOCINCiAgIGlua3NjYXBlOmN5PSI5My4wMDkxOTgiDQogICBpbmtzY2FwZTp3aW5kb3cteD0iMCINCiAgIGlua3NjYXBlOndpbmRvdy15PSIyMyINCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiDQogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPg0KPHN0eWxlDQogICB0eXBlPSJ0ZXh0L2NzcyINCiAgIGlkPSJzdHlsZTExOCI+DQoJLnN0MHtmaWxsOiMyRDJEMkQ7fQ0KCS5zdDF7ZmlsbDojN0Y0ODhFO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGgNCiAgIGNsYXNzPSJzdDAiDQogICBkPSJNMTYzLjIyLDk2LjE0YzAtMTIuODcsNC4wNy0yMi43LDEyLjItMjkuNDljOC4xMy02LjgsMTcuNzEtMTAuMTksMjguNzItMTAuMTljOC44NSwwLDE2LjQ3LDEuOTEsMjIuODUsNS43MSAgVjc3LjNjLTUuNzctNC4xMi0xMi42MS02LjE4LTIwLjU0LTYuMThjLTcuMzEsMC0xMy41NCwyLjAzLTE4LjY4LDYuMWMtNS4xNSw0LjA3LTcuNzIsMTAuMTctNy43MiwxOC4zICBjMCw3LjkzLDIuNTUsMTMuOTgsNy42NCwxOC4xNGM1LjEsNC4xNywxMS4yNSw2LjI1LDE4LjQ1LDYuMjVjNy44MiwwLDE1LjAzLTEuOSwyMS42Mi01LjcxdjE1LjI5Yy03LjEsMy40LTE1LjI5LDUuMS0yNC41NSw1LjEgIGMtMTAuODEsMC0yMC4xOC0zLjMyLTI4LjEtOS45NkMxNjcuMTgsMTE3Ljk5LDE2My4yMiwxMDguNDksMTYzLjIyLDk2LjE0eiINCiAgIGlkPSJwYXRoMTIwIg0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTI0Ni4xNCw3MC42NmMyLjg4LTQuNjMsNy4xNS04LjIzLDEyLjgyLTEwLjgxYzUuNjYtMi41NywxMS43OS0zLjU1LDE4LjM4LTIuOTN2MTYuMjEgIGMtNi41OS0wLjkzLTEyLjU2LTAuMDUtMTcuOTEsMi42MmMtNS4zNSwyLjY4LTkuMTYsNi42NC0xMS40MywxMS44OXY0NC45NGgtMTYuNTJWNTguNDZoMTQuNjdWNzAuNjZ6Ig0KICAgaWQ9InBhdGgxMjIiDQogICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPg0KPHBhdGgNCiAgIGNsYXNzPSJzdDAiDQogICBkPSJNMzE2LjgxLDU3Ljg4aDE2LjUydjc0LjEyaC0xNC42N3YtMTAuMTljLTYuNzksOC4xMy0xNS4zOSwxMi4yLTI1Ljc5LDEyLjJjLTkuNTcsMC0xNy4wNi0yLjc4LTIyLjQ3LTguMzQgIGMtNS40LTUuNTYtOC4xMS0xMi44Ny04LjExLTIxLjkzVjU3Ljg4aDE2LjUydjQzLjdjMCwxMS44NCw1Ljc2LDE3Ljc2LDE3LjI5LDE3Ljc2YzguMTMsMCwxNS4wMy00LjEyLDIwLjY5LTEyLjM1VjU3Ljg4eiINCiAgIGlkPSJwYXRoMTI0Ig0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTM1Mi4yMyw2OC4wOGM2LjgtOC4xMywxNS4zOS0xMi4yLDI1Ljc5LTEyLjJjOS4yNywwLDE2LjY4LDIuODEsMjIuMjQsOC40MmM1LjU2LDUuNjEsOC4zNCwxMi44OSw4LjM0LDIxLjg1ICB2NDUuODZoLTE2LjUydi00My43YzAtNS43Ni0xLjYtMTAuMTctNC43OS0xMy4yYy0zLjE5LTMuMDQtNy4zNi00LjU2LTEyLjUxLTQuNTZjLTguMTMsMC0xNS4wMyw0LjEyLTIwLjY5LDEyLjM1djQ5LjExaC0xNi41MiAgVjU3Ljg4aDE0LjY3VjY4LjA4eiINCiAgIGlkPSJwYXRoMTI2Ig0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTQxMS4zNyw5NS41NmMwLTEyLjg3LDQuMDctMjIuNywxMi4yLTI5LjQ5YzguMTMtNi44LDE3LjcxLTEwLjE5LDI4LjcyLTEwLjE5YzguODUsMCwxNi40NywxLjkxLDIyLjg1LDUuNzEgIHYxNS4xM2MtNS43Ny00LjEyLTEyLjYxLTYuMTgtMjAuNTQtNi4xOGMtNy4zMSwwLTEzLjU0LDIuMDMtMTguNjgsNi4xYy01LjE1LDQuMDctNy43MiwxMC4xNy03LjcyLDE4LjMgIGMwLDcuOTMsMi41NSwxMy45OCw3LjY0LDE4LjE0czExLjI1LDYuMjUsMTguNDUsNi4yNWM3LjgyLDAsMTUuMDMtMS45LDIxLjYyLTUuNzF2MTUuMjljLTcuMSwzLjQtMTUuMjksNS4xLTI0LjU1LDUuMSAgYy0xMC44MSwwLTIwLjE4LTMuMzItMjguMTEtOS45NkM0MTUuMzMsMTE3LjQxLDQxMS4zNywxMDcuOTIsNDExLjM3LDk1LjU2eiINCiAgIGlkPSJwYXRoMTI4Ig0KICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4NCjxwYXRoDQogICBjbGFzcz0ic3QwIg0KICAgZD0iTTQ3OS42MiwyMy45MWgxNi41MnY0Mi4xNmM2LjU5LTYuOCwxNC41Ny0xMC4xOSwyMy45NC0xMC4xOWM5LjI3LDAsMTYuNjgsMi44MSwyMi4yNCw4LjQyICBjNS41Niw1LjYxLDguMzQsMTIuODksOC4zNCwyMS44NXY0NS44NmgtMTYuNTJ2LTQzLjdjMC01Ljc2LTEuNi0xMC4xNy00Ljc5LTEzLjJjLTMuMTktMy4wNC03LjM2LTQuNTYtMTIuNTEtNC41NiAgYy04LjEzLDAtMTUuMDMsNC4xMi0yMC42OSwxMi4zNXY0OS4xMWgtMTYuNTJWMjMuOTF6Ig0KICAgaWQ9InBhdGgxMzAiDQogICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPg0KPHBvbHlnb24NCiAgIGNsYXNzPSJzdDEiDQogICBwb2ludHM9IjE1NC45NCwxMzYuNzEgMTU0Ljk0LDUzLjI2IDgyLjY3LDExLjU0IDEwLjQsNTMuMjYgMTAuNCwxMzYuNzEgODIuNjcsMTc4LjQ0ICINCiAgIGlkPSJwb2x5Z29uMTMyIiAvPg0KPHBhdGgNCiAgIGNsYXNzPSJzdDIiDQogICBkPSJNNzEuMDIsNzcuMDRoMTEuNjF2NDMuODhoMC4xNHY5LjgzaC0wLjE0djEzLjhINzEuNzJ2LTEzLjhIMzUuMDl2LTkuNjNMNzEuMDIsNzcuMDR6IE03MS43MiwxMjAuOTFWOTEuNDIgIGwtMjQuMDQsMjkuNDlINzEuNzJ6Ig0KICAgaWQ9InBhdGgxMzQiIC8+DQo8cGF0aA0KICAgY2xhc3M9InN0MiINCiAgIGQ9Ik04Mi4wNiw1Ny4xYzYuNjgtNC41NywxNC4xNi02Ljg1LDIyLjQ0LTYuODVjNy4wOCwwLDEyLjgxLDEuNjQsMTcuMTcsNC45MWM0LjM3LDMuMjgsNi41NSw3Ljk2LDYuNTUsMTQuMDUgIGMwLDUuMDUtMS42OCw5LjM2LTUuMDUsMTIuOTNjLTMuMzcsMy41Ny03Ljk1LDcuMDctMTMuNzUsMTAuNDdjLTAuNDUsMC4yOC0xLjI5LDAuNzktMi41LDEuNTRjLTEuMjIsMC43NS0yLjA4LDEuMjgtMi41OSwxLjU5ICBjLTAuNTEsMC4zMS0xLjI5LDAuNzktMi4zMywxLjQzYy0xLjA1LDAuNjQtMS44MiwxLjEyLTIuMzMsMS40M2MtMC41MSwwLjMxLTEuMTcsMC43OS0yLDEuNDNjLTAuODIsMC42NC0xLjQzLDEuMTgtMS44MiwxLjYyICBjLTAuMzksMC40NC0wLjg1LDAuOTgtMS4zOCwxLjYyYy0wLjUzLDAuNjQtMC45LDEuMjMtMS4xMywxLjc3Yy0wLjIzLDAuNTQtMC40NCwxLjE1LTAuNjQsMS44M2MtMC4yLDAuNjgtMC4zLDEuMzUtMC4zLDIuMDMgIGwzNi4xOS0wLjF2MTAuMjNoLTQ4Ljh2LTUuMTZjMC04LjYsMy42NC0xNS43NSwxMC45Mi0yMS40NGMyLjAzLTEuNTMsNS44NC0zLjk5LDExLjQxLTcuMzljNS42MS0zLjIyLDkuMjItNS41NiwxMC44My03LjAxICBjMi42NS0yLjU4LDMuOTctNS40NiwzLjk3LTguNjRjMC0yLjkxLTEuMTgtNS4xMy0zLjUyLTYuNjVjLTIuMzUtMS41Mi01LjY0LTIuMjgtOS44OC0yLjI4Yy03LjM1LDAtMTQuNDksMi41Mi0yMS40NCw3LjU0VjU3LjF6Ig0KICAgaWQ9InBhdGgxMzYiIC8+DQo8L3N2Zz4NCg==";
function $({
  openLink: i,
  themeKind: o
}) {
  const [e, c] = I.useState(!1), t = () => {
    c(!e);
  }, N = (j) => {
    i(j.currentTarget.href), j.preventDefault(), j.stopPropagation();
  };
  return /* @__PURE__ */ M.jsx("div", { className: "c_header", children: /* @__PURE__ */ M.jsxs("div", { className: "d-flex justify-content-between", children: [
    /* @__PURE__ */ M.jsxs("div", { children: [
      /* @__PURE__ */ M.jsx("span", { className: "font-weight-bold", style: { display: "inline-block", height: "100%" }, children: "Powered by" }),
      /* @__PURE__ */ M.jsx("span", { children: /* @__PURE__ */ M.jsx("a", { href: "https://www.42crunch.com", onClick: N, children: /* @__PURE__ */ M.jsx("img", { src: o === "light" ? h : b }) }) })
    ] }),
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsxs("div", { className: "dropdown", children: [
      /* @__PURE__ */ M.jsx("button", { className: "dropbtn", onClick: t, children: "Learn More" }),
      /* @__PURE__ */ M.jsxs("div", { className: e ? "dropdown-content show" : "dropdown-content", children: [
        /* @__PURE__ */ M.jsx("a", { href: "https://42crunch.com/api-security-audit/", onClick: N, children: "API Contract Security Audit" }),
        /* @__PURE__ */ M.jsx("a", { href: "https://42crunch.com/api-conformance-scan/", onClick: N, children: "API Contract Conformance Scan" }),
        /* @__PURE__ */ M.jsx("a", { href: "https://42crunch.com/micro-api-firewall-protection/", onClick: N, children: "API Protection" })
      ] })
    ] }) })
  ] }) });
}
function q({ openLink: i }) {
  const o = (c) => {
    i(c.currentTarget.href), c.preventDefault(), c.stopPropagation();
  }, e = D((c) => c.audit.summary);
  return e.all === 0 && e.invalid ? /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx("h1", { children: "Failed to perform security audit, the OpenAPI file is invalid or too large." }),
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsxs("small", { children: [
      "Please submit your feedback for the security audit",
      " ",
      /* @__PURE__ */ M.jsx("a", { onClick: o, href: "https://github.com/42Crunch/vscode-openapi/issues", children: "here" })
    ] }) })
  ] }) : /* @__PURE__ */ M.jsxs("div", { className: "c_roundedbox", children: [
    /* @__PURE__ */ M.jsxs("h1", { children: [
      "Security audit score: ",
      /* @__PURE__ */ M.jsxs("span", { children: [
        e.all,
        " / 100"
      ] })
    ] }),
    /* @__PURE__ */ M.jsx("div", { className: "progress-bar-holder", children: /* @__PURE__ */ M.jsx("div", { className: "progress-bar bar-red", style: { width: `${e.all}%` } }) }),
    /* @__PURE__ */ M.jsxs("h3", { children: [
      "Security:",
      " ",
      /* @__PURE__ */ M.jsxs("span", { children: [
        e.security.value,
        " / ",
        e.security.max
      ] })
    ] }),
    /* @__PURE__ */ M.jsxs("h3", { children: [
      "Data validation:",
      " ",
      /* @__PURE__ */ M.jsxs("span", { children: [
        e.datavalidation.value,
        " / ",
        e.datavalidation.max
      ] })
    ] }),
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsxs("small", { children: [
      "Please submit your feedback for the security audit",
      " ",
      /* @__PURE__ */ M.jsx("a", { onClick: o, href: "https://github.com/42Crunch/vscode-openapi/issues", children: "here" })
    ] }) })
  ] });
}
function MM({
  openLink: i,
  themeKind: o
}) {
  const [e, c] = I.useState(!1), t = (j) => {
    i(j.currentTarget.href), j.preventDefault(), j.stopPropagation();
  }, N = () => {
    c(!e);
  };
  return /* @__PURE__ */ M.jsx("div", { className: "c_footer", children: /* @__PURE__ */ M.jsxs("div", { className: "d-flex justify-content-between", children: [
    /* @__PURE__ */ M.jsxs("div", { children: [
      /* @__PURE__ */ M.jsx("span", { className: "font-weight-bold", style: { display: "inline-block", height: "100%" }, children: "Powered by" }),
      /* @__PURE__ */ M.jsx("span", { children: /* @__PURE__ */ M.jsx("a", { href: "https://www.42crunch.com", onClick: t, children: /* @__PURE__ */ M.jsx("img", { src: o === "light" ? h : b }) }) })
    ] }),
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsxs("div", { className: "dropdown", children: [
      /* @__PURE__ */ M.jsx("button", { className: "dropbtn", onClick: N, children: "Learn More" }),
      /* @__PURE__ */ M.jsxs("div", { className: e ? "dropdown-content show" : "dropdown-content", children: [
        /* @__PURE__ */ M.jsx("a", { href: "https://42crunch.com/api-security-audit/", onClick: t, children: "API Contract Security Audit" }),
        /* @__PURE__ */ M.jsx("a", { href: "https://42crunch.com/api-conformance-scan/", onClick: t, children: "API Contract Conformance Scan" }),
        /* @__PURE__ */ M.jsx("a", { href: "https://42crunch.com/micro-api-firewall-protection/", onClick: t, children: "API Protection" })
      ] })
    ] }) })
  ] }) });
}
function iM({
  articleId: i,
  kdb: o,
  lang: e,
  openLink: c
}) {
  const t = (s) => {
    s.stopPropagation(), s.preventDefault(), c(s.target.href);
  }, N = I.useRef(null);
  I.useEffect(() => {
    const s = N.current.querySelectorAll("a");
    return s.forEach((L) => {
      L.addEventListener("click", t);
    }), () => {
      s.forEach((L) => {
        L.removeEventListener("click", t);
      });
    };
  });
  const j = o[i] || oM, g = [
    j ? j.description.text : "",
    d(j.example, e),
    d(j.exploit, e),
    d(j.remediation, e)
  ].join("");
  return /* @__PURE__ */ M.jsx("div", { ref: N, dangerouslySetInnerHTML: { __html: g } });
}
function d(i, o) {
  return !i || !i.sections ? "" : i.sections.map((e) => {
    if (e.text)
      return e.text;
    if (e.code)
      return `<pre>${e.code[o]}</pre>`;
  }).join("");
}
const oM = {
  description: {
    text: `<p>Whoops! Looks like there has been an oversight and we are missing a page for this issue.</p>
           <p><a href="https://apisecurity.io/contact-us/">Let us know</a> the title of the issue, and we make sure to add it to the encyclopedia.</p>`
  }
}, eM = (i) => /* @__PURE__ */ I.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...i }, /* @__PURE__ */ I.createElement("path", { d: "M6.101 359.293L25.9 379.092c4.686 4.686 12.284 4.686 16.971 0L224 198.393l181.13 180.698c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 132.908c-4.686-4.686-12.284-4.686-16.971 0L6.101 342.322c-4.687 4.687-4.687 12.285 0 16.971z" })), cM = (i) => /* @__PURE__ */ I.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em", ...i }, /* @__PURE__ */ I.createElement("path", { d: "M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" }));
function tM({
  kdb: i,
  issue: o,
  goToLine: e,
  copyIssueId: c,
  openLink: t
}) {
  const [N, j] = I.useState(!1), g = () => j(!N), s = o.displayScore !== "0" ? `Score impact: ${o.displayScore}` : "", L = o.filename.toLowerCase().endsWith(".yaml") || o.filename.toLowerCase().endsWith("yml") ? "yaml" : "json";
  return /* @__PURE__ */ M.jsxs("div", { className: "c_roundedbox_section", children: [
    /* @__PURE__ */ M.jsxs("h2", { onClick: g, style: { cursor: "pointer" }, children: [
      N ? /* @__PURE__ */ M.jsx(
        eM,
        {
          style: {
            width: 16,
            height: 16,
            marginRight: 6,
            fill: `var(${a.foreground})`
          }
        }
      ) : /* @__PURE__ */ M.jsx(
        cM,
        {
          style: {
            width: 16,
            height: 16,
            marginRight: 6,
            fill: `var(${a.foreground})`
          }
        }
      ),
      o.description
    ] }),
    /* @__PURE__ */ M.jsx("p", { children: /* @__PURE__ */ M.jsxs("small", { children: [
      "Issue ID:",
      " ",
      /* @__PURE__ */ M.jsx(
        "span",
        {
          className: "issue-id",
          onClick: (n) => {
            c(o.id);
          },
          children: o.id
        }
      )
    ] }) }),
    /* @__PURE__ */ M.jsx("p", { children: /* @__PURE__ */ M.jsxs("small", { children: [
      /* @__PURE__ */ M.jsxs(
        "a",
        {
          className: "focus-line",
          href: "#",
          onClick: (n) => {
            e(o.documentUri, o.lineNo, o.pointer), n.preventDefault(), n.stopPropagation();
          },
          children: [
            o.filename,
            ":",
            o.lineNo + 1
          ]
        }
      ),
      ". Severity: ",
      LM[o.criticality],
      ". ",
      s
    ] }) }),
    N && /* @__PURE__ */ M.jsx(iM, { kdb: i, articleId: o.id, lang: L, openLink: t })
  ] });
}
const LM = {
  5: "Critical",
  4: "High",
  3: "Medium",
  2: "Low",
  1: "Info"
};
function NM({ goToFullReport: i }) {
  return /* @__PURE__ */ M.jsx("h6", { children: /* @__PURE__ */ M.jsx(
    "a",
    {
      className: "go-full-report",
      href: "#",
      onClick: (o) => {
        i(), o.preventDefault(), o.stopPropagation();
      },
      children: "Go back to full report"
    }
  ) });
}
const jM = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnDQogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iDQogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIg0KICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIg0KICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCINCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIg0KICAgaWQ9IkxheWVyXzEiDQogICBkYXRhLW5hbWU9IkxheWVyIDEiDQogICB2aWV3Qm94PSIwIDAgMTYgMTYiDQogICB2ZXJzaW9uPSIxLjEiDQogICBzb2RpcG9kaTpkb2NuYW1lPSI0MmNydW5jaF9pY29uLnN2ZyINCiAgIHdpZHRoPSIxNiINCiAgIGhlaWdodD0iMTYiDQogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjByYzEgKDA5OTYwZDYsIDIwMjAtMDQtMDkpIj4NCiAgPG1ldGFkYXRhDQogICAgIGlkPSJtZXRhZGF0YTI1Ij4NCiAgICA8cmRmOlJERj4NCiAgICAgIDxjYzpXb3JrDQogICAgICAgICByZGY6YWJvdXQ9IiI+DQogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0Pg0KICAgICAgICA8ZGM6dHlwZQ0KICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPg0KICAgICAgICA8ZGM6dGl0bGU+bG9nb19pY29uPC9kYzp0aXRsZT4NCiAgICAgIDwvY2M6V29yaz4NCiAgICA8L3JkZjpSREY+DQogIDwvbWV0YWRhdGE+DQogIDxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiDQogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiINCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiDQogICAgIGJvcmRlcm9wYWNpdHk9IjEiDQogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiDQogICAgIGdyaWR0b2xlcmFuY2U9IjEwIg0KICAgICBndWlkZXRvbGVyYW5jZT0iMTAiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIg0KICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE0NDAiDQogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg1NSINCiAgICAgaWQ9Im5hbWVkdmlldzIzIg0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGlua3NjYXBlOnpvb209IjE2Ig0KICAgICBpbmtzY2FwZTpjeD0iMi43Mjc1OTMyIg0KICAgICBpbmtzY2FwZTpjeT0iMTMuNDAzNzQyIg0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjIzIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPg0KICA8ZGVmcw0KICAgICBpZD0iZGVmczEyIj4NCiAgICA8c3R5bGUNCiAgICAgICBpZD0ic3R5bGUxMCI+LmNscy0xe2ZpbGw6IzdlNDg4Zjt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT4NCiAgPC9kZWZzPg0KICA8dGl0bGUNCiAgICAgaWQ9InRpdGxlMTQiPmxvZ29faWNvbjwvdGl0bGU+DQogIDxwb2x5Z29uDQogICAgIGNsYXNzPSJjbHMtMSINCiAgICAgcG9pbnRzPSIwLDIwNC44OSA3MC4yLDI0NS40MiAxNDAuNCwyMDQuODkgMTQwLjQsMTIzLjgzIDcwLjIsODMuMyAwLDEyMy44MyAiDQogICAgIGlkPSJwb2x5Z29uMTYiDQogICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMDk3OTgyMDgsMCwwLDAuMDk3OTgyMDgsMS4xMjE2NTgsLTguMTA0MzM0NykiIC8+DQogIDx0ZXh0DQogICAgIHg9Ii0yMjYuMTg5OTkiDQogICAgIHk9Ii0yOTcuOTI0MDEiDQogICAgIGlkPSJ0ZXh0MTgiIC8+DQogIDxwYXRoDQogICAgIHN0eWxlPSJzdHJva2Utd2lkdGg6MC4wOTQ1Ig0KICAgICBjbGFzcz0iY2xzLTIiDQogICAgIGQ9Ik0gMTAuODc2NTgsMTEuNDQzMTMgQSAxLjc4MzIxNSwxLjc4MzIxNSAwIDAgMSAxMC4zNDQ1NDUsMTEuMzYzNzUgMS41NjMwMywxLjU2MzAzIDAgMCAxIDkuODgwNTUsMTEuMTMxMjggMS4wNzI1NzUsMS4wNzI1NzUgMCAwIDEgOS41NDg4NTUsMTAuNzIzMDQgMS4zMjg2NywxLjMyODY3IDAgMCAxIDkuNDI1MDYsMTAuMTM4MDg1IHEgMCwtMC42OTM2MzEgMC40MjYxOTUsLTEuMDQ4OTUxIGEgMS41NDc5MSwxLjU0NzkxIDAgMCAxIDEuMDI1MzI1LC0wLjM1NTMyIDEuNjI4MjM1LDEuNjI4MjM1IDAgMCAxIDEuMDI5MTA1LDAuMzI0MTM1IFYgOC4yMTc4NDQgYSAyLjU4NDU3NSwyLjU4NDU3NSAwIDAgMCAtMS4xNTg1NywtMC4yNjM2NTUgdiAwIGwgLTIuNTg3NDEsMC4wMDc1NiBhIDAuNTEzMTM1LDAuNTEzMTM1IDAgMCAxIDAuMDIwNzksLTAuMTQ1NTMgMS4xODU5NzUsMS4xODU5NzUgMCAwIDEgMC4wNDUzNiwtMC4xMzA0MSAwLjU0MjQzLDAuNTQyNDMgMCAwIDEgMC4wODEyNywtMC4xMjY2MyBxIDAuMDU2NywtMC4wNjg5ODUgMC4wOTQ1LC0wLjExNjIzNSBBIDEuMDM5NSwxLjAzOTUgMCAwIDEgOC41MzIwMzUsNy4zMjY3MDkgMS42NzczNzUsMS42NzczNzUgMCAwIDEgOC42NzQ3Myw3LjIyNDY0OSBsIDAuMTY3MjY1LC0wLjEwMjA2IDAuMTY2MzIsLTAuMTAyMDYgMC4xODksLTAuMTEzNCAwLjE3ODYwNSwtMC4xMDk2MiBhIDQuNDMxMTA1LDQuNDMxMTA1IDAgMCAwIDAuOTgzNzQ1LC0wLjc0OTM4NSAxLjMwMDMyLDEuMzAwMzIgMCAwIDAgMC4zNjA5OSwtMC45MjUxNTUgcSAwLC0wLjY1Mjk5NSAtMC40NzI1LC0xLjAwNDUzNSAtMC40NzI1LC0wLjM1MTU0IC0xLjIyODUsLTAuMzUxNTQgYSAyLjc3OTI0NSwyLjc3OTI0NSAwIDAgMCAtMS42MDY1LDAuNDg5NTEgdiAwLjc3Njc5IFEgOC4xNTg3Niw0LjQ5MzU5OSA4Ljk0NTk0NSw0LjQ5MzU5OSBhIDEuMjk0NjUsMS4yOTQ2NSAwIDAgMSAwLjcwNTkxNSwwLjE2MzQ4NSAwLjUzMjAzNSwwLjUzMjAzNSAwIDAgMSAwLjI1MjMxNSwwLjQ3MjUgMC44NTA1LDAuODUwNSAwIDAgMSAtMC4yODM1LDAuNjE3MDg1IDUuMzk5NzMsNS4zOTk3MyAwIDAgMSAtMC43NzM5NTUsMC41MDA4NSBRIDguMjQ4NTM1LDYuNjExMzQ0IDguMDMxMTg1LDYuNzc1Nzc0IEEgMi4wNzksMi4wNzkgMCAwIDAgNy40NTQ3MzUsNy40NDc2NjkgViA1LjY3OTU3NCBIIDYuNjI0MDggTCA0LjA2MjE4NSw4LjgzMTE0OSB2IDAuNjg4OTA1IGggMi42MTc2NSB2IDAuOTg2NTgxIGggMC43ODQzNSBWIDkuNTE5MTA5IEggNy40NzQ1OCBWIDguODEzMTk0IEggNy40NjQxODUgViA4LjY3OTk0OSBoIDEuNTQ3OTEgYSAxLjk5MjA2LDEuOTkyMDYgMCAwIDAgLTAuMjk2NzMsMC40ODM4NCAyLjM3OTUxLDIuMzc5NTEgMCAwIDAgLTAuMTg5LDAuOTcyNDA2IDIuMTczNSwyLjE3MzUgMCAwIDAgMC4xODksMC45Mjc5OSAxLjczMTI0LDEuNzMxMjQgMCAwIDAgMC41MTEyNDUsMC42NjE1IDIuMzg0MjM1LDIuMzg0MjM1IDAgMCAwIDAuNzA3ODA1LDAuMzc4IDIuNTUxNSwyLjU1MTUgMCAwIDAgMC44MTA4MSwwLjEyOTQ2NSAyLjcwMDgxLDIuNzAwODEgMCAwIDAgMS4xOTI1OSwtMC4yNjQ2IHYgLTAuODYzNzMgcSAtMC4zNzk4OSwwLjMzODMxIC0xLjA2MTIzNSwwLjMzODMxIHogTSA2LjY3OTgzNSw4LjgxMzE5NCBIIDQuOTYwODggTCA2LjY3OTgzNSw2LjcwNDg5OSBaIg0KICAgICBpZD0icGF0aDIwIg0KICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPg0KPC9zdmc+DQo=";
function sM() {
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx("h1", { children: "No security audit report available for this file" }),
    /* @__PURE__ */ M.jsxs("p", { children: [
      "Please click the ",
      /* @__PURE__ */ M.jsx("img", { src: jM, style: { width: 16, height: 16 } }),
      " button to run OpenAPI Security Audit"
    ] })
  ] });
}
function IM() {
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: /* @__PURE__ */ M.jsx("h1", { children: "Loading security audit report..." }) });
}
function gM() {
  const i = u((L) => L.audit.kdb), o = u((L) => L.audit.display), e = u((L) => L.audit.selected), c = u((L) => L.theme), t = K(), N = (L, n, Y) => t(p({ uri: L, line: n, pointer: Y })), j = (L) => t(A(L)), g = (L) => t(S(L)), s = (c == null ? void 0 : c.kind) === "dark" ? "dark" : "light";
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx("style", { type: "text/css", children: nM }),
    /* @__PURE__ */ M.jsxs("div", { className: s === "dark" ? "vscode-dark" : "", children: [
      o !== "no-report" && /* @__PURE__ */ M.jsx($, { openLink: g, themeKind: s }),
      o === "full" && /* @__PURE__ */ M.jsx(q, { openLink: g }),
      o === "no-report" && /* @__PURE__ */ M.jsx(sM, {}),
      o === "loading" && /* @__PURE__ */ M.jsx(IM, {}),
      e.map((L) => /* @__PURE__ */ M.jsx(
        tM,
        {
          kdb: i,
          issue: L,
          goToLine: N,
          copyIssueId: j,
          openLink: g
        },
        L.key
      )),
      o === "full" && e.length === 0 && /* @__PURE__ */ M.jsx("h3", { children: "No issues found in this file" }),
      o === "partial" && /* @__PURE__ */ M.jsx(NM, { goToFullReport: () => t(y()) }),
      o !== "no-report" && /* @__PURE__ */ M.jsx(MM, { openLink: g, themeKind: s })
    ] })
  ] });
}
const nM = `body {
  background-color: var(--xliic-background);
  color: var(--xliic-foreground);
  margin: 0 10px !important;
}

#root small {
 font-size: 0.8em;
}

#root {
  font-size: 0.8em;
}

#root h1 {
  font-size: 1.5em;
  font-weight: 600;
}

#root h2 {
  font-size: 1.2em;
  font-weight: 600;
}

#root h3 {
  font-size: 1em;
  font-weight: 600;
}

pre {
  white-space: pre-wrap;
}

.c_header {
  background-color: #f1f1f1;
  margin-bottom: 20px;
  margin-left: -20px;
  margin-right: -20px;
  padding: 10px 20px 10px 20px;
  top: 0px;
  border-bottom: 1px solid #bbb;
  color: black;
  font-size: 14px;
  z-index: 10;
}

.c_footer {
  background-color: #f1f1f1;

  padding: 20px 20px 20px 20px;
  margin-left: -20px;
  margin-right: -20px;
  bottom: 0px;
  border-top: 1px solid #bbb;
  color: black;
  font-size: 14px;
}
.bottom-menu ul {
  margin: 0px;
  padding: 0px;
}
.bottom-menu li {
  float: left;
  list-style: none;
  font-weight: bold;
  margin-right: 10px;
}
.bottom-menu li a {
  text-decoration: none;
}
.c_header span img,
.c_footer span img {
  width: 100px;
  margin-left: 10px;
}

.font-weight-bold {
  font-weight: bold;
}

.c_roundedbox {
  padding: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-bottom: 20px;
}

.c_roundedbox_section {
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-bottom: 10px;
}

.c_roundedbox_section > h2:first-child {
  margin-block-start: 0;
}

.c_roundedbox_section > p:last-child {
  margin-block-end: 0;
}

.c_roundedbox_section h1 {
  margin-top: 0px;
}
.c_roundedbox h1 {
  margin-top: 0px;
}
.c_roundedbox h1 span, .c_roundedbox h3 span {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 2px 5px 2px 5px;
}

.progress-bar-holder {
  height: 10px;
  width: 100%;
  background-color: #c4c4c4;
  position: relative;
  border-radius: 10px;
  margin-top: 1em;
  margin-bottom: 1em;
}

.progress-bar {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  background-color: #000;
  border-radius: 10px;
}
.bar-red {
  background-color: #ff1d5a;
}
.bar-yellow {
  background-color: #ffb01d;
}
.bar-green {
  background-color: #7bd21e;
}
.issue-id {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 2px 8px 3px 8px;
  background-color: #b1b0b0;
  color: #fff;
  cursor: pointer;
}

.dropbtn {
  background-color: #ffffff;
  color: #313131;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #bbb;
  border-radius: 5px;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #9d73aa;
  color: #ffffff;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0px;
  background-color: #f1f1f1;
  min-width: 260px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 0px 0px 10px 10px;
}
.dropdown-content-f {
  display: none;
  position: absolute;
  right: 0px;
  top: -120px;
  background-color: #f1f1f1;
  min-width: 260px;
  box-shadow: -2px -5px 16px 0px rgb(0 0 0 / 20%);
  z-index: 1;
  border-radius: 10px 10px 0px 0px;
}
.dropdown-content-f a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

.vscode-dark .c_header,
.vscode-high-contrast .c_header {
  background-color: #1e1e1e;
  color: #f3f3f3;
  border-bottom: 1px solid #bbb;
}

.vscode-dark .c_footer,
.vscode-high-contrast .c_footer {
  background-color: #1e1e1e;
  color: #f3f3f3;
}

.vscode-dark .dropbtn {
  background-color: #835194;
  color: #ffffff;
  border: 1px solid #835194;
}

.vscode-high-contrast .dropbtn {
  background-color: #1e1e1e;
  color: #ffffff;
  border: 1px solid #1e1e1e;
}

.vscode-dark .dropdown-content,
.vscode-high-contrast .dropdown-content {
  background-color: #1e1e1e;
}

.vscode-dark .dropdown-content a,
.vscode-high-contrast .dropdown-content a {
  color: white;
}

.vscode-dark .dropdown-content a:hover,
.vscode-high-contrast .dropdown-content a:hover {
  background-color: #3c3b3b;
}

.vscode-dark .issue-id {
  border: 1px solid #834e93;
  background-color: #834c8f;
  color: #fff;
}

.vscode-high-contrast .issue-id {
  background-color: #1e1e1e;
}`;
const uM = {
  showFullReport: C,
  showPartialReport: w,
  showNoReport: z,
  loadKdb: X,
  changeTheme: P
};
function rM() {
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx(B, {}),
    /* @__PURE__ */ M.jsx(gM, {})
  ] });
}
function dM(i, o) {
  const e = V(_(i), o);
  f(document.getElementById("root")).render(
    /* @__PURE__ */ M.jsx(v.StrictMode, { children: /* @__PURE__ */ M.jsx(W, { store: e, children: /* @__PURE__ */ M.jsx(rM, {}) }) })
  ), window.addEventListener("message", R(e, uM));
}
window.renderWebView = dM;
