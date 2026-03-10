import { c as m } from "./rtk-query-react.modern.kJqw8Vn6.js";
import { w as d } from "./webapp-client.BVdSwEPq.js";
import { s as h } from "./listener.Dm65kE--.js";
function g(e) {
  return e ? {
    freemiumdUrl: "https://stateless.dev.42crunch.com",
    cliFreemiumdHost: "stateless.dev.42crunch.com:443",
    kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
    upgradeUrl: "https://42crunch.com/developer-pricing",
    stripeBillingUrl: "https://billing.stripe.com/p/login/test_cN28zp7RgbGp3qobII"
  } : {
    freemiumdUrl: "https://stateless.42crunch.com",
    cliFreemiumdHost: "stateless.42crunch.com:443",
    kdbUrl: "https://platform.42crunch.com/kdb/audit-with-yaml.json",
    upgradeUrl: "https://42crunch.com/single-user-pricing",
    stripeBillingUrl: "https://billing.stripe.com/p/login/3csaGd9xzf5k7n2aEE"
  };
}
const f = m({
  reducerPath: "freemiumdApi",
  baseQuery: b,
  endpoints: (e) => ({
    getSubscription: e.query({
      query: (r) => ({
        path: `subscription?token=${encodeURIComponent(r)}`
      })
    })
  })
});
async function b(e, { signal: r, dispatch: i, getState: n }, U) {
  const { freemiumdUrl: o } = g(n().config.data.internalUseDevEndpoints), c = `${o}/api/v1/anon/${e.path}`, p = d(
    { https: { rejectUnauthorized: !0 } },
    (a, u, l) => i(h({ id: a, request: u, config: l }))
  ), [t, s] = await p({
    url: c,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return s !== void 0 ? { error: s } : t.statusCode !== 200 ? { error: { message: t.body, code: t.statusCode } } : { data: JSON.parse(t.body) };
}
const { useGetSubscriptionQuery: w } = f;
export {
  f,
  g,
  w as u
};
