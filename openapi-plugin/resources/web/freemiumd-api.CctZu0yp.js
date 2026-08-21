import { c as m } from "./rtk-query-react.modern.DVdYp0Is.js";
import { w as h } from "./webapp-client.CEJRS8eu.js";
import { s as f } from "./listener.BNWHQqef.js";
function g(t) {
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
const b = m({
  reducerPath: "freemiumdApi",
  baseQuery: U,
  endpoints: (t) => ({
    getSubscription: t.query({
      query: (r) => ({
        path: `subscription?token=${encodeURIComponent(r)}`
      })
    })
  })
});
async function U(t, { signal: r, dispatch: i, getState: n }, y) {
  const { freemiumdUrl: o } = g(n().config.data.internalUseDevEndpoints), c = `${o}/api/v1/anon/${t.path}`, p = h(
    { https: { rejectUnauthorized: !0 } },
    (a, u, d, l) => i(f({ id: a, request: u, config: d, mtlsConfig: l }))
  ), [e, s] = await p(
    {
      url: c,
      method: "get",
      headers: {
        Accept: "application/json"
      }
    },
    void 0
  );
  return s !== void 0 ? { error: s } : e.statusCode !== 200 ? { error: { message: e.body, code: e.statusCode } } : { data: JSON.parse(e.body) };
}
const { useGetSubscriptionQuery: j } = b;
export {
  b as f,
  g,
  j as u
};
