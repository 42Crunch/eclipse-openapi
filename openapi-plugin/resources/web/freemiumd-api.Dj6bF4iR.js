import { c as d } from "./rtk-query-react.modern.kJqw8Vn6.js";
import { w as m } from "./webapp-client.BVdSwEPq.js";
import { s as h } from "./listener.Dm65kE--.js";
function f(t) {
  return t ? {
    freemiumdUrl: "https://stateless.dev.42crunch.com",
    cliFreemiumdHost: "stateless.dev.42crunch.com:443",
    kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
    upgradeUrl: "https://42crunch.com/developer-pricing",
    stripeBillingUrl: "https://billing.stripe.com/p/login/test_cN28zp7RgbGp3qobII"
  } : {
    freemiumdUrl: "https://stateless.42crunch.com",
    cliFreemiumdHost: "stateless.42crunch.com:443",
    kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
    upgradeUrl: "https://42crunch.com/upgrade_subscription",
    stripeBillingUrl: "https://billing.stripe.com/p/login/3csaGd9xzf5k7n2aEE"
  };
}
const g = d({
  reducerPath: "freemiumdApi",
  baseQuery: b,
  endpoints: (t) => ({
    getSubscription: t.query({
      query: (r) => ({
        path: `subscription?token=${encodeURIComponent(r)}`
      })
    })
  })
});
async function b(t, { signal: r, dispatch: i, getState: n }, U) {
  const { freemiumdUrl: o } = f(n().config.data.internalUseDevEndpoints), c = `${o}/api/v1/anon/${t.path}`, p = m(
    { https: { rejectUnauthorized: !0 } },
    (a, u, l) => i(h({ id: a, request: u, config: l }))
  ), [e, s] = await p({
    url: c,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return s !== void 0 ? { error: s } : e.statusCode !== 200 ? { error: { message: e.body, code: e.statusCode } } : { data: JSON.parse(e.body) };
}
const { useGetSubscriptionQuery: w } = g;
export {
  g as f,
  f as g,
  w as u
};
