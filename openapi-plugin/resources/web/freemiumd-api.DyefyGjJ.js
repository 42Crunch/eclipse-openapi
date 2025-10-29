import { c as d } from "./rtk-query-react.modern.Do0gBnMl.js";
import { w as m, s as h } from "./listener.Cd9yvFW1.js";
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
const f = d({
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
async function b(e, { signal: r, dispatch: n, getState: i }, U) {
  const { freemiumdUrl: o } = g(i().config.data.internalUseDevEndpoints), c = `${o}/api/v1/anon/${e.path}`, p = m(
    { https: { rejectUnauthorized: !0 } },
    (a, u, l) => n(h({ id: a, request: u, config: l }))
  ), [t, s] = await p({
    url: c,
    method: "get",
    headers: {
      Accept: "application/json"
    }
  });
  return s !== void 0 ? { error: s } : t.statusCode !== 200 ? { error: { message: t.body, code: t.statusCode } } : { data: JSON.parse(t.body) };
}
const { useGetSubscriptionQuery: v } = f;
export {
  f,
  g,
  v as u
};
