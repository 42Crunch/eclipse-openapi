class G extends Error {
}
class _n extends G {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class Bn extends G {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class jn extends G {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Q extends G {
}
class Rt extends G {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class M extends G {
}
class U extends G {
  constructor() {
    super("Zone is an abstract class");
  }
}
const c = "numeric", L = "short", E = "long", Ie = {
  year: c,
  month: c,
  day: c
}, qt = {
  year: c,
  month: L,
  day: c
}, Qn = {
  year: c,
  month: L,
  day: c,
  weekday: L
}, Ht = {
  year: c,
  month: E,
  day: c
}, Yt = {
  year: c,
  month: E,
  day: c,
  weekday: E
}, Pt = {
  hour: c,
  minute: c
}, Gt = {
  hour: c,
  minute: c,
  second: c
}, Jt = {
  hour: c,
  minute: c,
  second: c,
  timeZoneName: L
}, _t = {
  hour: c,
  minute: c,
  second: c,
  timeZoneName: E
}, Bt = {
  hour: c,
  minute: c,
  hourCycle: "h23"
}, jt = {
  hour: c,
  minute: c,
  second: c,
  hourCycle: "h23"
}, Qt = {
  hour: c,
  minute: c,
  second: c,
  hourCycle: "h23",
  timeZoneName: L
}, Kt = {
  hour: c,
  minute: c,
  second: c,
  hourCycle: "h23",
  timeZoneName: E
}, Xt = {
  year: c,
  month: c,
  day: c,
  hour: c,
  minute: c
}, en = {
  year: c,
  month: c,
  day: c,
  hour: c,
  minute: c,
  second: c
}, tn = {
  year: c,
  month: L,
  day: c,
  hour: c,
  minute: c
}, nn = {
  year: c,
  month: L,
  day: c,
  hour: c,
  minute: c,
  second: c
}, Kn = {
  year: c,
  month: L,
  day: c,
  weekday: L,
  hour: c,
  minute: c
}, rn = {
  year: c,
  month: E,
  day: c,
  hour: c,
  minute: c,
  timeZoneName: L
}, sn = {
  year: c,
  month: E,
  day: c,
  hour: c,
  minute: c,
  second: c,
  timeZoneName: L
}, an = {
  year: c,
  month: E,
  day: c,
  weekday: E,
  hour: c,
  minute: c,
  timeZoneName: E
}, on = {
  year: c,
  month: E,
  day: c,
  weekday: E,
  hour: c,
  minute: c,
  second: c,
  timeZoneName: E
};
class me {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new U();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new U();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new U();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, t) {
    throw new U();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    throw new U();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new U();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new U();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new U();
  }
}
let Le = null;
class be extends me {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Le === null && (Le = new be()), Le;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: r }) {
    return kn(e, t, r);
  }
  /** @override **/
  formatOffset(e, t) {
    return de(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
const Ye = /* @__PURE__ */ new Map();
function Xn(n) {
  let e = Ye.get(n);
  return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: n,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  }), Ye.set(n, e)), e;
}
const er = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function tr(n, e) {
  const t = n.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, s, i, a, o, u, l, f] = r;
  return [a, s, i, o, u, l, f];
}
function nr(n, e) {
  const t = n.formatToParts(e), r = [];
  for (let s = 0; s < t.length; s++) {
    const { type: i, value: a } = t[s], o = er[i];
    i === "era" ? r[o] = a : h(o) || (r[o] = parseInt(a, 10));
  }
  return r;
}
const $e = /* @__PURE__ */ new Map();
class A extends me {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let t = $e.get(e);
    return t === void 0 && $e.set(e, t = new A(e)), t;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    $e.clear(), Ye.clear();
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = A.isValidZone(e);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !1;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, { format: t, locale: r }) {
    return kn(e, t, r, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return de(this.offset(e), t);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    if (!this.valid) return NaN;
    const t = new Date(e);
    if (isNaN(t)) return NaN;
    const r = Xn(this.name);
    let [s, i, a, o, u, l, f] = r.formatToParts ? nr(r, t) : tr(r, t);
    o === "BC" && (s = -Math.abs(s) + 1);
    const T = Ve({
      year: s,
      month: i,
      day: a,
      hour: u === 24 ? 0 : u,
      minute: l,
      second: f,
      millisecond: 0
    });
    let d = +t;
    const O = d % 1e3;
    return d -= O >= 0 ? O : 1e3 + O, (T - d) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
}
let ft = {};
function rr(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = ft[t];
  return r || (r = new Intl.ListFormat(n, e), ft[t] = r), r;
}
const Pe = /* @__PURE__ */ new Map();
function Ge(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = Pe.get(t);
  return r === void 0 && (r = new Intl.DateTimeFormat(n, e), Pe.set(t, r)), r;
}
const Je = /* @__PURE__ */ new Map();
function sr(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = Je.get(t);
  return r === void 0 && (r = new Intl.NumberFormat(n, e), Je.set(t, r)), r;
}
const _e = /* @__PURE__ */ new Map();
function ir(n, e = {}) {
  const { base: t, ...r } = e, s = JSON.stringify([n, r]);
  let i = _e.get(s);
  return i === void 0 && (i = new Intl.RelativeTimeFormat(n, e), _e.set(s, i)), i;
}
let le = null;
function ar() {
  return le || (le = new Intl.DateTimeFormat().resolvedOptions().locale, le);
}
const Be = /* @__PURE__ */ new Map();
function un(n) {
  let e = Be.get(n);
  return e === void 0 && (e = new Intl.DateTimeFormat(n).resolvedOptions(), Be.set(n, e)), e;
}
const je = /* @__PURE__ */ new Map();
function or(n) {
  let e = je.get(n);
  if (!e) {
    const t = new Intl.Locale(n);
    e = "getWeekInfo" in t ? t.getWeekInfo() : t.weekInfo, "minimalDays" in e || (e = { ...ln, ...e }), je.set(n, e);
  }
  return e;
}
function ur(n) {
  const e = n.indexOf("-x-");
  e !== -1 && (n = n.substring(0, e));
  const t = n.indexOf("-u-");
  if (t === -1)
    return [n];
  {
    let r, s;
    try {
      r = Ge(n).resolvedOptions(), s = n;
    } catch {
      const u = n.substring(0, t);
      r = Ge(u).resolvedOptions(), s = u;
    }
    const { numberingSystem: i, calendar: a } = r;
    return [s, i, a];
  }
}
function lr(n, e, t) {
  return (t || e) && (n.includes("-u-") || (n += "-u"), t && (n += `-ca-${t}`), e && (n += `-nu-${e}`)), n;
}
function cr(n) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const r = m.utc(2009, t, 1);
    e.push(n(r));
  }
  return e;
}
function fr(n) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const r = m.utc(2016, 11, 13 + t);
    e.push(n(r));
  }
  return e;
}
function ke(n, e, t, r) {
  const s = n.listingMode();
  return s === "error" ? null : s === "en" ? t(e) : r(e);
}
function dr(n) {
  return n.numberingSystem && n.numberingSystem !== "latn" ? !1 : n.numberingSystem === "latn" || !n.locale || n.locale.startsWith("en") || un(n.locale).numberingSystem === "latn";
}
class hr {
  constructor(e, t, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: s, floor: i, ...a } = r;
    if (!t || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...r };
      r.padTo > 0 && (o.minimumIntegerDigits = r.padTo), this.inf = sr(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(e) : it(e, 3);
      return v(t, this.padTo);
    }
  }
}
class mr {
  constructor(e, t, r) {
    this.opts = r, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && A.create(o).valid ? (s = o, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const i = { ...this.opts };
    i.timeZone = i.timeZone || s, this.dtf = Ge(t, i);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((t) => {
      if (t.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...t,
          value: r
        };
      } else
        return t;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class yr {
  constructor(e, t, r) {
    this.opts = { style: "long", ...r }, !t && gn() && (this.rtf = ir(e, r));
  }
  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : Zr(t, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
const ln = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class k {
  static fromOpts(e) {
    return k.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, t, r, s, i = !1) {
    const a = e || p.defaultLocale, o = a || (i ? "en-US" : ar()), u = t || p.defaultNumberingSystem, l = r || p.defaultOutputCalendar, f = Ke(s) || p.defaultWeekSettings;
    return new k(o, u, l, f, a);
  }
  static resetCache() {
    le = null, Pe.clear(), Je.clear(), _e.clear(), Be.clear(), je.clear();
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r, weekSettings: s } = {}) {
    return k.create(e, t, r, s);
  }
  constructor(e, t, r, s, i) {
    const [a, o, u] = ur(e);
    this.locale = a, this.numberingSystem = t || o || null, this.outputCalendar = r || u || null, this.weekSettings = s, this.intl = lr(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = dr(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : k.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Ke(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, t = !1) {
    return ke(this, e, pn, () => {
      const r = this.intl === "ja" || this.intl.startsWith("ja-");
      t &= !r;
      const s = t ? { month: e, day: "numeric" } : { month: e }, i = t ? "format" : "standalone";
      if (!this.monthsCache[i][e]) {
        const a = r ? (o) => this.dtFormatter(o, s).format() : (o) => this.extract(o, s, "month");
        this.monthsCache[i][e] = cr(a);
      }
      return this.monthsCache[i][e];
    });
  }
  weekdays(e, t = !1) {
    return ke(this, e, Mn, () => {
      const r = t ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, s = t ? "format" : "standalone";
      return this.weekdaysCache[s][e] || (this.weekdaysCache[s][e] = fr(
        (i) => this.extract(i, r, "weekday")
      )), this.weekdaysCache[s][e];
    });
  }
  meridiems() {
    return ke(
      this,
      void 0,
      () => Nn,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [m.utc(2016, 11, 13, 9), m.utc(2016, 11, 13, 19)].map(
            (t) => this.extract(t, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return ke(this, e, In, () => {
      const t = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [m.utc(-40, 1, 1), m.utc(2017, 1, 1)].map(
        (r) => this.extract(r, t, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, t, r) {
    const s = this.dtFormatter(e, t), i = s.formatToParts(), a = i.find((o) => o.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new hr(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new mr(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new yr(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return rr(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || un(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : wn() ? or(this.locale) : ln;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let Ze = null;
class I extends me {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ze === null && (Ze = new I(0)), Ze;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? I.utcInstance : new I(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new I(Ce(t[1], t[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${de(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${de(-this.fixed, "narrow")}`;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return de(this.fixed, t);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
}
class gr extends me {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function R(n, e) {
  if (h(n) || n === null)
    return e;
  if (n instanceof me)
    return n;
  if (Or(n)) {
    const t = n.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? be.instance : t === "utc" || t === "gmt" ? I.utcInstance : I.parseSpecifier(t) || A.create(n);
  } else return q(n) ? I.instance(n) : typeof n == "object" && "offset" in n && typeof n.offset == "function" ? n : new gr(n);
}
const tt = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, dt = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, wr = tt.hanidec.replace(/[\[|\]]/g, "").split("");
function kr(n) {
  let e = parseInt(n, 10);
  if (isNaN(e)) {
    e = "";
    for (let t = 0; t < n.length; t++) {
      const r = n.charCodeAt(t);
      if (n[t].search(tt.hanidec) !== -1)
        e += wr.indexOf(n[t]);
      else
        for (const s in dt) {
          const [i, a] = dt[s];
          r >= i && r <= a && (e += r - i);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const Qe = /* @__PURE__ */ new Map();
function Tr() {
  Qe.clear();
}
function V({ numberingSystem: n }, e = "") {
  const t = n || "latn";
  let r = Qe.get(t);
  r === void 0 && (r = /* @__PURE__ */ new Map(), Qe.set(t, r));
  let s = r.get(e);
  return s === void 0 && (s = new RegExp(`${tt[t]}${e}`), r.set(e, s)), s;
}
let ht = () => Date.now(), mt = "system", yt = null, gt = null, wt = null, kt = 60, Tt, St = null;
class p {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return ht;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    ht = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    mt = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return R(mt, be.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return yt;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    yt = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return gt;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    gt = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return wt;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    wt = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return St;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    St = Ke(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return kt;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    kt = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Tt;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Tt = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    k.resetCache(), A.resetCache(), m.resetCache(), Tr();
  }
}
class W {
  constructor(e, t) {
    this.reason = e, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const cn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], fn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function x(n, e) {
  return new W(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${n}, which is invalid`
  );
}
function nt(n, e, t) {
  const r = new Date(Date.UTC(n, e - 1, t));
  n < 100 && n >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const s = r.getUTCDay();
  return s === 0 ? 7 : s;
}
function dn(n, e, t) {
  return t + (ye(n) ? fn : cn)[e - 1];
}
function hn(n, e) {
  const t = ye(n) ? fn : cn, r = t.findIndex((i) => i < e), s = e - t[r];
  return { month: r + 1, day: s };
}
function rt(n, e) {
  return (n - e + 7) % 7 + 1;
}
function Ee(n, e = 4, t = 1) {
  const { year: r, month: s, day: i } = n, a = dn(r, s, i), o = rt(nt(r, s, i), t);
  let u = Math.floor((a - o + 14 - e) / 7), l;
  return u < 1 ? (l = r - 1, u = he(l, e, t)) : u > he(r, e, t) ? (l = r + 1, u = 1) : l = r, { weekYear: l, weekNumber: u, weekday: o, ...We(n) };
}
function pt(n, e = 4, t = 1) {
  const { weekYear: r, weekNumber: s, weekday: i } = n, a = rt(nt(r, 1, e), t), o = K(r);
  let u = s * 7 + i - a - 7 + e, l;
  u < 1 ? (l = r - 1, u += K(l)) : u > o ? (l = r + 1, u -= K(r)) : l = r;
  const { month: f, day: y } = hn(l, u);
  return { year: l, month: f, day: y, ...We(n) };
}
function Ae(n) {
  const { year: e, month: t, day: r } = n, s = dn(e, t, r);
  return { year: e, ordinal: s, ...We(n) };
}
function Ot(n) {
  const { year: e, ordinal: t } = n, { month: r, day: s } = hn(e, t);
  return { year: e, month: r, day: s, ...We(n) };
}
function vt(n, e) {
  if (!h(n.localWeekday) || !h(n.localWeekNumber) || !h(n.localWeekYear)) {
    if (!h(n.weekday) || !h(n.weekNumber) || !h(n.weekYear))
      throw new Q(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return h(n.localWeekday) || (n.weekday = n.localWeekday), h(n.localWeekNumber) || (n.weekNumber = n.localWeekNumber), h(n.localWeekYear) || (n.weekYear = n.localWeekYear), delete n.localWeekday, delete n.localWeekNumber, delete n.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Sr(n, e = 4, t = 1) {
  const r = Fe(n.weekYear), s = b(
    n.weekNumber,
    1,
    he(n.weekYear, e, t)
  ), i = b(n.weekday, 1, 7);
  return r ? s ? i ? !1 : x("weekday", n.weekday) : x("week", n.weekNumber) : x("weekYear", n.weekYear);
}
function pr(n) {
  const e = Fe(n.year), t = b(n.ordinal, 1, K(n.year));
  return e ? t ? !1 : x("ordinal", n.ordinal) : x("year", n.year);
}
function mn(n) {
  const e = Fe(n.year), t = b(n.month, 1, 12), r = b(n.day, 1, De(n.year, n.month));
  return e ? t ? r ? !1 : x("day", n.day) : x("month", n.month) : x("year", n.year);
}
function yn(n) {
  const { hour: e, minute: t, second: r, millisecond: s } = n, i = b(e, 0, 23) || e === 24 && t === 0 && r === 0 && s === 0, a = b(t, 0, 59), o = b(r, 0, 59), u = b(s, 0, 999);
  return i ? a ? o ? u ? !1 : x("millisecond", s) : x("second", r) : x("minute", t) : x("hour", e);
}
function h(n) {
  return typeof n > "u";
}
function q(n) {
  return typeof n == "number";
}
function Fe(n) {
  return typeof n == "number" && n % 1 === 0;
}
function Or(n) {
  return typeof n == "string";
}
function vr(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function gn() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function wn() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function Mr(n) {
  return Array.isArray(n) ? n : [n];
}
function Mt(n, e, t) {
  if (n.length !== 0)
    return n.reduce((r, s) => {
      const i = [e(s), s];
      return r && t(r[0], i[0]) === r[0] ? r : i;
    }, null)[1];
}
function Nr(n, e) {
  return e.reduce((t, r) => (t[r] = n[r], t), {});
}
function ee(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Ke(n) {
  if (n == null)
    return null;
  if (typeof n != "object")
    throw new M("Week settings must be an object");
  if (!b(n.firstDay, 1, 7) || !b(n.minimalDays, 1, 7) || !Array.isArray(n.weekend) || n.weekend.some((e) => !b(e, 1, 7)))
    throw new M("Invalid week settings");
  return {
    firstDay: n.firstDay,
    minimalDays: n.minimalDays,
    weekend: Array.from(n.weekend)
  };
}
function b(n, e, t) {
  return Fe(n) && n >= e && n <= t;
}
function Ir(n, e) {
  return n - e * Math.floor(n / e);
}
function v(n, e = 2) {
  const t = n < 0;
  let r;
  return t ? r = "-" + ("" + -n).padStart(e, "0") : r = ("" + n).padStart(e, "0"), r;
}
function z(n) {
  if (!(h(n) || n === null || n === ""))
    return parseInt(n, 10);
}
function H(n) {
  if (!(h(n) || n === null || n === ""))
    return parseFloat(n);
}
function st(n) {
  if (!(h(n) || n === null || n === "")) {
    const e = parseFloat("0." + n) * 1e3;
    return Math.floor(e);
  }
}
function it(n, e, t = "round") {
  const r = 10 ** e;
  switch (t) {
    case "expand":
      return n > 0 ? Math.ceil(n * r) / r : Math.floor(n * r) / r;
    case "trunc":
      return Math.trunc(n * r) / r;
    case "round":
      return Math.round(n * r) / r;
    case "floor":
      return Math.floor(n * r) / r;
    case "ceil":
      return Math.ceil(n * r) / r;
    default:
      throw new RangeError(`Value rounding ${t} is out of range`);
  }
}
function ye(n) {
  return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
}
function K(n) {
  return ye(n) ? 366 : 365;
}
function De(n, e) {
  const t = Ir(e - 1, 12) + 1, r = n + (e - t) / 12;
  return t === 2 ? ye(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function Ve(n) {
  let e = Date.UTC(
    n.year,
    n.month - 1,
    n.day,
    n.hour,
    n.minute,
    n.second,
    n.millisecond
  );
  return n.year < 100 && n.year >= 0 && (e = new Date(e), e.setUTCFullYear(n.year, n.month - 1, n.day)), +e;
}
function Nt(n, e, t) {
  return -rt(nt(n, 1, e), t) + e - 1;
}
function he(n, e = 4, t = 1) {
  const r = Nt(n, e, t), s = Nt(n + 1, e, t);
  return (K(n) - r + s) / 7;
}
function Xe(n) {
  return n > 99 ? n : n > p.twoDigitCutoffYear ? 1900 + n : 2e3 + n;
}
function kn(n, e, t, r = null) {
  const s = new Date(n), i = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (i.timeZone = r);
  const a = { timeZoneName: e, ...i }, o = new Intl.DateTimeFormat(t, a).formatToParts(s).find((u) => u.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Ce(n, e) {
  let t = parseInt(n, 10);
  Number.isNaN(t) && (t = 0);
  const r = parseInt(e, 10) || 0, s = t < 0 || Object.is(t, -0) ? -r : r;
  return t * 60 + s;
}
function Tn(n) {
  const e = Number(n);
  if (typeof n == "boolean" || n === "" || !Number.isFinite(e))
    throw new M(`Invalid unit value ${n}`);
  return e;
}
function xe(n, e) {
  const t = {};
  for (const r in n)
    if (ee(n, r)) {
      const s = n[r];
      if (s == null) continue;
      t[e(r)] = Tn(s);
    }
  return t;
}
function de(n, e) {
  const t = Math.trunc(Math.abs(n / 60)), r = Math.trunc(Math.abs(n % 60)), s = n >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${v(t, 2)}:${v(r, 2)}`;
    case "narrow":
      return `${s}${t}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${s}${v(t, 2)}${v(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function We(n) {
  return Nr(n, ["hour", "minute", "second", "millisecond"]);
}
const Er = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Sn = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Dr = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function pn(n) {
  switch (n) {
    case "narrow":
      return [...Dr];
    case "short":
      return [...Sn];
    case "long":
      return [...Er];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const On = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], vn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], xr = ["M", "T", "W", "T", "F", "S", "S"];
function Mn(n) {
  switch (n) {
    case "narrow":
      return [...xr];
    case "short":
      return [...vn];
    case "long":
      return [...On];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Nn = ["AM", "PM"], br = ["Before Christ", "Anno Domini"], Fr = ["BC", "AD"], Vr = ["B", "A"];
function In(n) {
  switch (n) {
    case "narrow":
      return [...Vr];
    case "short":
      return [...Fr];
    case "long":
      return [...br];
    default:
      return null;
  }
}
function Cr(n) {
  return Nn[n.hour < 12 ? 0 : 1];
}
function Wr(n, e) {
  return Mn(e)[n.weekday - 1];
}
function Lr(n, e) {
  return pn(e)[n.month - 1];
}
function $r(n, e) {
  return In(e)[n.year < 0 ? 0 : 1];
}
function Zr(n, e, t = "always", r = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, i = ["hours", "minutes", "seconds"].indexOf(n) === -1;
  if (t === "auto" && i) {
    const y = n === "days";
    switch (e) {
      case 1:
        return y ? "tomorrow" : `next ${s[n][0]}`;
      case -1:
        return y ? "yesterday" : `last ${s[n][0]}`;
      case 0:
        return y ? "today" : `this ${s[n][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), u = o === 1, l = s[n], f = r ? u ? l[1] : l[2] || l[1] : u ? s[n][0] : n;
  return a ? `${o} ${f} ago` : `in ${o} ${f}`;
}
function It(n, e) {
  let t = "";
  for (const r of n)
    r.literal ? t += r.val : t += e(r.val);
  return t;
}
const Ar = {
  D: Ie,
  DD: qt,
  DDD: Ht,
  DDDD: Yt,
  t: Pt,
  tt: Gt,
  ttt: Jt,
  tttt: _t,
  T: Bt,
  TT: jt,
  TTT: Qt,
  TTTT: Kt,
  f: Xt,
  ff: tn,
  fff: rn,
  ffff: an,
  F: en,
  FF: nn,
  FFF: sn,
  FFFF: on
};
class N {
  static create(e, t = {}) {
    return new N(e, t);
  }
  static parseFormat(e) {
    let t = null, r = "", s = !1;
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? ((r.length > 0 || s) && i.push({
        literal: s || /^\s+$/.test(r),
        val: r === "" ? "'" : r
      }), t = null, r = "", s = !s) : s || o === t ? r += o : (r.length > 0 && i.push({ literal: /^\s+$/.test(r), val: r }), r = o, t = o);
    }
    return r.length > 0 && i.push({ literal: s || /^\s+$/.test(r), val: r }), i;
  }
  static macroTokenToFormatOpts(e) {
    return Ar[e];
  }
  constructor(e, t) {
    this.opts = t, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, t) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format();
  }
  dtFormatter(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t });
  }
  formatDateTime(e, t) {
    return this.dtFormatter(e, t).format();
  }
  formatDateTimeParts(e, t) {
    return this.dtFormatter(e, t).formatToParts();
  }
  formatInterval(e, t) {
    return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, t) {
    return this.dtFormatter(e, t).resolvedOptions();
  }
  num(e, t = 0, r = void 0) {
    if (this.opts.forceSimple)
      return v(e, t);
    const s = { ...this.opts };
    return t > 0 && (s.padTo = t), r && (s.signDisplay = r), this.loc.numberFormatter(s).format(e);
  }
  formatDateTimeFromString(e, t) {
    const r = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", i = (d, O) => this.loc.extract(e, d, O), a = (d) => e.isOffsetFixed && e.offset === 0 && d.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, d.format) : "", o = () => r ? Cr(e) : i({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (d, O) => r ? Lr(e, d) : i(O ? { month: d } : { month: d, day: "numeric" }, "month"), l = (d, O) => r ? Wr(e, d) : i(
      O ? { weekday: d } : { weekday: d, month: "long", day: "numeric" },
      "weekday"
    ), f = (d) => {
      const O = N.macroTokenToFormatOpts(d);
      return O ? this.formatWithSystemDefault(e, O) : d;
    }, y = (d) => r ? $r(e, d) : i({ era: d }, "era"), T = (d) => {
      switch (d) {
        // ms
        case "S":
          return this.num(e.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(e.millisecond, 3);
        // seconds
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        // minutes
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        // hours
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        // offset
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return e.zoneName;
        // meridiems
        case "a":
          return o();
        // dates
        case "d":
          return s ? i({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return s ? i({ day: "2-digit" }, "day") : this.num(e.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return l("short", !0);
        case "cccc":
          return l("long", !0);
        case "ccccc":
          return l("narrow", !0);
        // weekdays - format
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return l("short", !1);
        case "EEEE":
          return l("long", !1);
        case "EEEEE":
          return l("narrow", !1);
        // months - standalone
        case "L":
          return s ? i({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return s ? i({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return u("short", !0);
        case "LLLL":
          return u("long", !0);
        case "LLLLL":
          return u("narrow", !0);
        // months - format
        case "M":
          return s ? i({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return s ? i({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return u("short", !1);
        case "MMMM":
          return u("long", !1);
        case "MMMMM":
          return u("narrow", !1);
        // years
        case "y":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return s ? i({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return s ? i({ year: "numeric" }, "year") : this.num(e.year, 6);
        // eras
        case "G":
          return y("short");
        case "GG":
          return y("long");
        case "GGGGG":
          return y("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return f(d);
      }
    };
    return It(N.parseFormat(t), T);
  }
  formatDurationFromString(e, t) {
    const r = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, s = (f) => {
      switch (f[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "w":
          return "weeks";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return null;
      }
    }, i = (f, y) => (T) => {
      const d = s(T);
      if (d) {
        const O = y.isNegativeDuration && d !== y.largestUnit ? r : 1;
        let F;
        return this.opts.signMode === "negativeLargestOnly" && d !== y.largestUnit ? F = "never" : this.opts.signMode === "all" ? F = "always" : F = "auto", this.num(f.get(d) * O, T.length, F);
      } else
        return T;
    }, a = N.parseFormat(t), o = a.reduce(
      (f, { literal: y, val: T }) => y ? f : f.concat(T),
      []
    ), u = e.shiftTo(...o.map(s).filter((f) => f)), l = {
      isNegativeDuration: u < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(u.values)[0]
    };
    return It(a, i(u, l));
  }
}
const En = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function te(...n) {
  const e = n.reduce((t, r) => t + r.source, "");
  return RegExp(`^${e}$`);
}
function ne(...n) {
  return (e) => n.reduce(
    ([t, r, s], i) => {
      const [a, o, u] = i(e, s);
      return [{ ...t, ...a }, o || r, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function re(n, ...e) {
  if (n == null)
    return [null, null];
  for (const [t, r] of e) {
    const s = t.exec(n);
    if (s)
      return r(s);
  }
  return [null, null];
}
function Dn(...n) {
  return (e, t) => {
    const r = {};
    let s;
    for (s = 0; s < n.length; s++)
      r[n[s]] = z(e[t + s]);
    return [r, null, t + s];
  };
}
const xn = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, Ur = `(?:${xn.source}?(?:\\[(${En.source})\\])?)?`, at = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, bn = RegExp(`${at.source}${Ur}`), ot = RegExp(`(?:[Tt]${bn.source})?`), zr = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Rr = /(\d{4})-?W(\d\d)(?:-?(\d))?/, qr = /(\d{4})-?(\d{3})/, Hr = Dn("weekYear", "weekNumber", "weekDay"), Yr = Dn("year", "ordinal"), Pr = /(\d{4})-(\d\d)-(\d\d)/, Fn = RegExp(
  `${at.source} ?(?:${xn.source}|(${En.source}))?`
), Gr = RegExp(`(?: ${Fn.source})?`);
function X(n, e, t) {
  const r = n[e];
  return h(r) ? t : z(r);
}
function Jr(n, e) {
  return [{
    year: X(n, e),
    month: X(n, e + 1, 1),
    day: X(n, e + 2, 1)
  }, null, e + 3];
}
function se(n, e) {
  return [{
    hours: X(n, e, 0),
    minutes: X(n, e + 1, 0),
    seconds: X(n, e + 2, 0),
    milliseconds: st(n[e + 3])
  }, null, e + 4];
}
function ge(n, e) {
  const t = !n[e] && !n[e + 1], r = Ce(n[e + 1], n[e + 2]), s = t ? null : I.instance(r);
  return [{}, s, e + 3];
}
function we(n, e) {
  const t = n[e] ? A.create(n[e]) : null;
  return [{}, t, e + 1];
}
const _r = RegExp(`^T?${at.source}$`), Br = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function jr(n) {
  const [e, t, r, s, i, a, o, u, l] = n, f = e[0] === "-", y = u && u[0] === "-", T = (d, O = !1) => d !== void 0 && (O || d && f) ? -d : d;
  return [
    {
      years: T(H(t)),
      months: T(H(r)),
      weeks: T(H(s)),
      days: T(H(i)),
      hours: T(H(a)),
      minutes: T(H(o)),
      seconds: T(H(u), u === "-0"),
      milliseconds: T(st(l), y)
    }
  ];
}
const Qr = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function ut(n, e, t, r, s, i, a) {
  const o = {
    year: e.length === 2 ? Xe(z(e)) : z(e),
    month: Sn.indexOf(t) + 1,
    day: z(r),
    hour: z(s),
    minute: z(i)
  };
  return a && (o.second = z(a)), n && (o.weekday = n.length > 3 ? On.indexOf(n) + 1 : vn.indexOf(n) + 1), o;
}
const Kr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Xr(n) {
  const [
    ,
    e,
    t,
    r,
    s,
    i,
    a,
    o,
    u,
    l,
    f,
    y
  ] = n, T = ut(e, s, r, t, i, a, o);
  let d;
  return u ? d = Qr[u] : l ? d = 0 : d = Ce(f, y), [T, new I(d)];
}
function es(n) {
  return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const ts = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, ns = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, rs = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Et(n) {
  const [, e, t, r, s, i, a, o] = n;
  return [ut(e, s, r, t, i, a, o), I.utcInstance];
}
function ss(n) {
  const [, e, t, r, s, i, a, o] = n;
  return [ut(e, o, t, r, s, i, a), I.utcInstance];
}
const is = te(zr, ot), as = te(Rr, ot), os = te(qr, ot), us = te(bn), Vn = ne(
  Jr,
  se,
  ge,
  we
), ls = ne(
  Hr,
  se,
  ge,
  we
), cs = ne(
  Yr,
  se,
  ge,
  we
), fs = ne(
  se,
  ge,
  we
);
function ds(n) {
  return re(
    n,
    [is, Vn],
    [as, ls],
    [os, cs],
    [us, fs]
  );
}
function hs(n) {
  return re(es(n), [Kr, Xr]);
}
function ms(n) {
  return re(
    n,
    [ts, Et],
    [ns, Et],
    [rs, ss]
  );
}
function ys(n) {
  return re(n, [Br, jr]);
}
const gs = ne(se);
function ws(n) {
  return re(n, [_r, gs]);
}
const ks = te(Pr, Gr), Ts = te(Fn), Ss = ne(
  se,
  ge,
  we
);
function ps(n) {
  return re(
    n,
    [ks, Vn],
    [Ts, Ss]
  );
}
const Dt = "Invalid Duration", Cn = {
  weeks: {
    days: 7,
    hours: 168,
    minutes: 10080,
    seconds: 10080 * 60,
    milliseconds: 10080 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 1440,
    seconds: 1440 * 60,
    milliseconds: 1440 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 3600, milliseconds: 3600 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Os = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 2184,
    minutes: 2184 * 60,
    seconds: 2184 * 60 * 60,
    milliseconds: 2184 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 720,
    minutes: 720 * 60,
    seconds: 720 * 60 * 60,
    milliseconds: 720 * 60 * 60 * 1e3
  },
  ...Cn
}, D = 146097 / 400, _ = 146097 / 4800, vs = {
  years: {
    quarters: 4,
    months: 12,
    weeks: D / 7,
    days: D,
    hours: D * 24,
    minutes: D * 24 * 60,
    seconds: D * 24 * 60 * 60,
    milliseconds: D * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: D / 28,
    days: D / 4,
    hours: D * 24 / 4,
    minutes: D * 24 * 60 / 4,
    seconds: D * 24 * 60 * 60 / 4,
    milliseconds: D * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: _ / 7,
    days: _,
    hours: _ * 24,
    minutes: _ * 24 * 60,
    seconds: _ * 24 * 60 * 60,
    milliseconds: _ * 24 * 60 * 60 * 1e3
  },
  ...Cn
}, P = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Ms = P.slice(0).reverse();
function Z(n, e, t = !1) {
  const r = {
    values: t ? e.values : { ...n.values, ...e.values || {} },
    loc: n.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || n.conversionAccuracy,
    matrix: e.matrix || n.matrix
  };
  return new g(r);
}
function Wn(n, e) {
  let t = e.milliseconds ?? 0;
  for (const r of Ms.slice(1))
    e[r] && (t += e[r] * n[r].milliseconds);
  return t;
}
function xt(n, e) {
  const t = Wn(n, e) < 0 ? -1 : 1;
  P.reduceRight((r, s) => {
    if (h(e[s]))
      return r;
    if (r) {
      const i = e[r] * t, a = n[s][r], o = Math.floor(i / a);
      e[s] += o * t, e[r] -= o * a * t;
    }
    return s;
  }, null), P.reduce((r, s) => {
    if (h(e[s]))
      return r;
    if (r) {
      const i = e[r] % 1;
      e[r] -= i, e[s] += i * n[r][s];
    }
    return s;
  }, null);
}
function bt(n) {
  const e = {};
  for (const [t, r] of Object.entries(n))
    r !== 0 && (e[t] = r);
  return e;
}
class g {
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let r = t ? vs : Os;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || k.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, t) {
    return g.fromObject({ milliseconds: e }, t);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, t = {}) {
    if (e == null || typeof e != "object")
      throw new M(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new g({
      values: xe(e, g.normalizeUnit),
      loc: k.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (q(e))
      return g.fromMillis(e);
    if (g.isDuration(e))
      return e;
    if (typeof e == "object")
      return g.fromObject(e);
    throw new M(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, t) {
    const [r] = ys(e);
    return r ? g.fromObject(r, t) : g.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, t) {
    const [r] = ws(e);
    return r ? g.fromObject(r, t) : g.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new M("need to specify a reason the Duration is invalid");
    const r = e instanceof W ? e : new W(e, t);
    if (p.throwOnInvalid)
      throw new jn(r);
    return new g({ invalid: r });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!t) throw new Rt(e);
    return t;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
   * @return {string}
   */
  toFormat(e, t = {}) {
    const r = {
      ...t,
      floor: t.round !== !1 && t.floor !== !1
    };
    return this.isValid ? N.create(this.loc, r).formatDurationFromString(this, e) : Dt;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
   * @example
   * ```js
   * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
   * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid) return Dt;
    const t = e.showZeros !== !1, r = P.map((s) => {
      const i = this.values[s];
      return h(i) || i === 0 && !t ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: s.slice(0, -1) }).format(i);
    }).filter((s) => s);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(r);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += it(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    const t = this.toMillis();
    return t < 0 || t >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, m.fromMillis(t, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? Wn(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid) return this;
    const t = g.fromDurationLike(e), r = {};
    for (const s of P)
      (ee(t.values, s) || ee(this.values, s)) && (r[s] = t.get(s) + this.get(s));
    return Z(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = g.fromDurationLike(e);
    return this.plus(t.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid) return this;
    const t = {};
    for (const r of Object.keys(this.values))
      t[r] = Tn(e(this.values[r], r));
    return Z(this, { values: t }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[g.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid) return this;
    const t = { ...this.values, ...xe(e, g.normalizeUnit) };
    return Z(this, { values: t });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r, matrix: s } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: t }), matrix: s, conversionAccuracy: r };
    return Z(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const e = this.toObject();
    return xt(this.matrix, e), Z(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = bt(this.normalize().shiftToAll().toObject());
    return Z(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => g.normalizeUnit(a));
    const t = {}, r = {}, s = this.toObject();
    let i;
    for (const a of P)
      if (e.indexOf(a) >= 0) {
        i = a;
        let o = 0;
        for (const l in r)
          o += this.matrix[l][a] * r[l], r[l] = 0;
        q(s[a]) && (o += s[a]);
        const u = Math.trunc(o);
        t[a] = u, r[a] = (o * 1e3 - u * 1e3) / 1e3;
      } else q(s[a]) && (r[a] = s[a]);
    for (const a in r)
      r[a] !== 0 && (t[i] += a === i ? r[a] : r[a] / this.matrix[i][a]);
    return xt(this.matrix, t), Z(this, { values: t }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const t of Object.keys(this.values))
      e[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return Z(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = bt(this.values);
    return Z(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function t(r, s) {
      return r === void 0 || r === 0 ? s === void 0 || s === 0 : r === s;
    }
    for (const r of P)
      if (!t(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const B = "Invalid Interval";
function Ns(n, e) {
  return !n || !n.isValid ? S.invalid("missing or invalid start") : !e || !e.isValid ? S.invalid("missing or invalid end") : e < n ? S.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${n.toISO()} and end=${e.toISO()}`
  ) : null;
}
class S {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new M("need to specify a reason the Interval is invalid");
    const r = e instanceof W ? e : new W(e, t);
    if (p.throwOnInvalid)
      throw new Bn(r);
    return new S({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, t) {
    const r = ue(e), s = ue(t), i = Ns(r, s);
    return i ?? new S({
      start: r,
      end: s
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, t) {
    const r = g.fromDurationLike(t), s = ue(e);
    return S.fromDateTimes(s, s.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, t) {
    const r = g.fromDurationLike(t), s = ue(e);
    return S.fromDateTimes(s.minus(r), s);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, t) {
    const [r, s] = (e || "").split("/", 2);
    if (r && s) {
      let i, a;
      try {
        i = m.fromISO(r, t), a = i.isValid;
      } catch {
        a = !1;
      }
      let o, u;
      try {
        o = m.fromISO(s, t), u = o.isValid;
      } catch {
        u = !1;
      }
      if (a && u)
        return S.fromDateTimes(i, o);
      if (a) {
        const l = g.fromISO(s, t);
        if (l.isValid)
          return S.after(i, l);
      } else if (u) {
        const l = g.fromISO(r, t);
        if (l.isValid)
          return S.before(o, l);
      }
    }
    return S.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval. This is the first instant which is not part of the interval
   * (Interval is half-open).
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns the last DateTime included in the interval (since end is not part of the interval)
   * @type {DateTime}
   */
  get lastDateTime() {
    return this.isValid && this.e ? this.e.minus(1) : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", t) {
    if (!this.isValid) return NaN;
    const r = this.start.startOf(e, t);
    let s;
    return t != null && t.useLocaleWeeks ? s = this.end.reconfigure({ locale: r.locale }) : s = this.end, s = s.startOf(e, t), Math.floor(s.diff(r, e).get(e)) + (s.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: t } = {}) {
    return this.isValid ? S.fromDateTimes(e || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const t = e.map(ue).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), r = [];
    let { s } = this, i = 0;
    for (; s < this.e; ) {
      const a = t[i] || this.e, o = +a > +this.e ? this.e : a;
      r.push(S.fromDateTimes(s, o)), s = o, i += 1;
    }
    return r;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const t = g.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let { s: r } = this, s = 1, i;
    const a = [];
    for (; r < this.e; ) {
      const o = this.start.plus(t.mapUnits((u) => u * s));
      i = +o > +this.e ? this.e : o, a.push(S.fromDateTimes(r, i)), r = i, s += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid) return this;
    const t = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return t >= r ? null : S.fromDateTimes(t, r);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid) return this;
    const t = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return S.fromDateTimes(t, r);
  }
  /**
   * Merge an array of Intervals into an equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
   * and ending with the latest.
   *
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [t, r] = e.sort((s, i) => s.s - i.s).reduce(
      ([s, i], a) => i ? i.overlaps(a) || i.abutsStart(a) ? [s, i.union(a)] : [s.concat([i]), a] : [s, a],
      [[], null]
    );
    return r && t.push(r), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let t = null, r = 0;
    const s = [], i = e.map((u) => [
      { time: u.s, type: "s" },
      { time: u.e, type: "e" }
    ]), a = Array.prototype.concat(...i), o = a.sort((u, l) => u.time - l.time);
    for (const u of o)
      r += u.type === "s" ? 1 : -1, r === 1 ? t = u.time : (t && +t != +u.time && s.push(S.fromDateTimes(t, u.time)), t = null);
    return S.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return S.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : B;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = Ie, t = {}) {
    return this.isValid ? N.create(this.s.loc.clone(t), e).formatInterval(this) : B;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : B;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : B;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : B;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: t = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : B;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, t) {
    return this.isValid ? this.e.diff(this.s, e, t) : g.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return S.fromDateTimes(e(this.s), e(this.e));
  }
}
class Te {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = p.defaultZone) {
    const t = m.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return A.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return R(e, p.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: t = null } = {}) {
    return (t || k.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: t = null } = {}) {
    return (t || k.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: t = null } = {}) {
    return (t || k.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || k.create(t, r, i)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null, outputCalendar: i = "gregory" } = {}) {
    return (s || k.create(t, r, i)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || k.create(t, r, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || k.create(t, r, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return k.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: t = null } = {}) {
    return k.create(t, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: gn(), localeWeek: wn() };
  }
}
function Ft(n, e) {
  const t = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = t(e) - t(n);
  return Math.floor(g.fromMillis(r).as("days"));
}
function Is(n, e, t) {
  const r = [
    ["years", (u, l) => l.year - u.year],
    ["quarters", (u, l) => l.quarter - u.quarter + (l.year - u.year) * 4],
    ["months", (u, l) => l.month - u.month + (l.year - u.year) * 12],
    [
      "weeks",
      (u, l) => {
        const f = Ft(u, l);
        return (f - f % 7) / 7;
      }
    ],
    ["days", Ft]
  ], s = {}, i = n;
  let a, o;
  for (const [u, l] of r)
    t.indexOf(u) >= 0 && (a = u, s[u] = l(n, e), o = i.plus(s), o > e ? (s[u]--, n = i.plus(s), n > e && (o = n, s[u]--, n = i.plus(s))) : n = o);
  return [n, s, o, a];
}
function Es(n, e, t, r) {
  let [s, i, a, o] = Is(n, e, t);
  const u = e - s, l = t.filter(
    (y) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(y) >= 0
  );
  l.length === 0 && (a < e && (a = s.plus({ [o]: 1 })), a !== s && (i[o] = (i[o] || 0) + u / (a - s)));
  const f = g.fromObject(i, r);
  return l.length > 0 ? g.fromMillis(u, r).shiftTo(...l).plus(f) : f;
}
const Ds = "missing Intl.DateTimeFormat.formatToParts support";
function w(n, e = (t) => t) {
  return { regex: n, deser: ([t]) => e(kr(t)) };
}
const xs = " ", Ln = `[ ${xs}]`, $n = new RegExp(Ln, "g");
function bs(n) {
  return n.replace(/\./g, "\\.?").replace($n, Ln);
}
function Vt(n) {
  return n.replace(/\./g, "").replace($n, " ").toLowerCase();
}
function C(n, e) {
  return n === null ? null : {
    regex: RegExp(n.map(bs).join("|")),
    deser: ([t]) => n.findIndex((r) => Vt(t) === Vt(r)) + e
  };
}
function Ct(n, e) {
  return { regex: n, deser: ([, t, r]) => Ce(t, r), groups: e };
}
function Se(n) {
  return { regex: n, deser: ([e]) => e };
}
function Fs(n) {
  return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Vs(n, e) {
  const t = V(e), r = V(e, "{2}"), s = V(e, "{3}"), i = V(e, "{4}"), a = V(e, "{6}"), o = V(e, "{1,2}"), u = V(e, "{1,3}"), l = V(e, "{1,6}"), f = V(e, "{1,9}"), y = V(e, "{2,4}"), T = V(e, "{4,6}"), d = ($) => ({ regex: RegExp(Fs($.val)), deser: ([J]) => J, literal: !0 }), F = (($) => {
    if (n.literal)
      return d($);
    switch ($.val) {
      // era
      case "G":
        return C(e.eras("short"), 0);
      case "GG":
        return C(e.eras("long"), 0);
      // years
      case "y":
        return w(l);
      case "yy":
        return w(y, Xe);
      case "yyyy":
        return w(i);
      case "yyyyy":
        return w(T);
      case "yyyyyy":
        return w(a);
      // months
      case "M":
        return w(o);
      case "MM":
        return w(r);
      case "MMM":
        return C(e.months("short", !0), 1);
      case "MMMM":
        return C(e.months("long", !0), 1);
      case "L":
        return w(o);
      case "LL":
        return w(r);
      case "LLL":
        return C(e.months("short", !1), 1);
      case "LLLL":
        return C(e.months("long", !1), 1);
      // dates
      case "d":
        return w(o);
      case "dd":
        return w(r);
      // ordinals
      case "o":
        return w(u);
      case "ooo":
        return w(s);
      // time
      case "HH":
        return w(r);
      case "H":
        return w(o);
      case "hh":
        return w(r);
      case "h":
        return w(o);
      case "mm":
        return w(r);
      case "m":
        return w(o);
      case "q":
        return w(o);
      case "qq":
        return w(r);
      case "s":
        return w(o);
      case "ss":
        return w(r);
      case "S":
        return w(u);
      case "SSS":
        return w(s);
      case "u":
        return Se(f);
      case "uu":
        return Se(o);
      case "uuu":
        return w(t);
      // meridiem
      case "a":
        return C(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return w(i);
      case "kk":
        return w(y, Xe);
      // weekNumber (W)
      case "W":
        return w(o);
      case "WW":
        return w(r);
      // weekdays
      case "E":
      case "c":
        return w(t);
      case "EEE":
        return C(e.weekdays("short", !1), 1);
      case "EEEE":
        return C(e.weekdays("long", !1), 1);
      case "ccc":
        return C(e.weekdays("short", !0), 1);
      case "cccc":
        return C(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return Ct(new RegExp(`([+-]${o.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Ct(new RegExp(`([+-]${o.source})(${r.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return Se(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return Se(/[^\S\n\r]/);
      default:
        return d($);
    }
  })(n) || {
    invalidReason: Ds
  };
  return F.token = n, F;
}
const Cs = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function Ws(n, e, t) {
  const { type: r, value: s } = n;
  if (r === "literal") {
    const u = /^\s+$/.test(s);
    return {
      literal: !u,
      val: u ? " " : s
    };
  }
  const i = e[r];
  let a = r;
  r === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = t.hour12 ? "hour12" : "hour24");
  let o = Cs[a];
  if (typeof o == "object" && (o = o[i]), o)
    return {
      literal: !1,
      val: o
    };
}
function Ls(n) {
  return [`^${n.map((t) => t.regex).reduce((t, r) => `${t}(${r.source})`, "")}$`, n];
}
function $s(n, e, t) {
  const r = n.match(e);
  if (r) {
    const s = {};
    let i = 1;
    for (const a in t)
      if (ee(t, a)) {
        const o = t[a], u = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (s[o.token.val[0]] = o.deser(r.slice(i, i + u))), i += u;
      }
    return [r, s];
  } else
    return [r, {}];
}
function Zs(n) {
  const e = (i) => {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let t = null, r;
  return h(n.z) || (t = A.create(n.z)), h(n.Z) || (t || (t = new I(n.Z)), r = n.Z), h(n.q) || (n.M = (n.q - 1) * 3 + 1), h(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), h(n.u) || (n.S = st(n.u)), [Object.keys(n).reduce((i, a) => {
    const o = e(a);
    return o && (i[o] = n[a]), i;
  }, {}), t, r];
}
let Ue = null;
function As() {
  return Ue || (Ue = m.fromMillis(1555555555555)), Ue;
}
function Us(n, e) {
  if (n.literal)
    return n;
  const t = N.macroTokenToFormatOpts(n.val), r = zn(t, e);
  return r == null || r.includes(void 0) ? n : r;
}
function Zn(n, e) {
  return Array.prototype.concat(...n.map((t) => Us(t, e)));
}
class An {
  constructor(e, t) {
    if (this.locale = e, this.format = t, this.tokens = Zn(N.parseFormat(t), e), this.units = this.tokens.map((r) => Vs(r, e)), this.disqualifyingUnit = this.units.find((r) => r.invalidReason), !this.disqualifyingUnit) {
      const [r, s] = Ls(this.units);
      this.regex = RegExp(r, "i"), this.handlers = s;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [t, r] = $s(e, this.regex, this.handlers), [s, i, a] = r ? Zs(r) : [null, null, void 0];
      if (ee(r, "a") && ee(r, "H"))
        throw new Q(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: t,
        matches: r,
        result: s,
        zone: i,
        specificOffset: a
      };
    } else
      return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function Un(n, e, t) {
  return new An(n, t).explainFromTokens(e);
}
function zs(n, e, t) {
  const { result: r, zone: s, specificOffset: i, invalidReason: a } = Un(n, e, t);
  return [r, s, i, a];
}
function zn(n, e) {
  if (!n)
    return null;
  const r = N.create(e, n).dtFormatter(As()), s = r.formatToParts(), i = r.resolvedOptions();
  return s.map((a) => Ws(a, n, i));
}
const ze = "Invalid DateTime", Wt = 864e13;
function ce(n) {
  return new W("unsupported zone", `the zone "${n.name}" is not supported`);
}
function Re(n) {
  return n.weekData === null && (n.weekData = Ee(n.c)), n.weekData;
}
function qe(n) {
  return n.localWeekData === null && (n.localWeekData = Ee(
    n.c,
    n.loc.getMinDaysInFirstWeek(),
    n.loc.getStartOfWeek()
  )), n.localWeekData;
}
function Y(n, e) {
  const t = {
    ts: n.ts,
    zone: n.zone,
    c: n.c,
    o: n.o,
    loc: n.loc,
    invalid: n.invalid
  };
  return new m({ ...t, ...e, old: t });
}
function Rn(n, e, t) {
  let r = n - e * 60 * 1e3;
  const s = t.offset(r);
  if (e === s)
    return [r, e];
  r -= (s - e) * 60 * 1e3;
  const i = t.offset(r);
  return s === i ? [r, s] : [n - Math.min(s, i) * 60 * 1e3, Math.max(s, i)];
}
function pe(n, e) {
  n += e * 60 * 1e3;
  const t = new Date(n);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function ve(n, e, t) {
  return Rn(Ve(n), e, t);
}
function Lt(n, e) {
  const t = n.o, r = n.c.year + Math.trunc(e.years), s = n.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, i = {
    ...n.c,
    year: r,
    month: s,
    day: Math.min(n.c.day, De(r, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = g.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Ve(i);
  let [u, l] = Rn(o, t, n.zone);
  return a !== 0 && (u += a, l = n.zone.offset(u)), { ts: u, o: l };
}
function j(n, e, t, r, s, i) {
  const { setZone: a, zone: o } = t;
  if (n && Object.keys(n).length !== 0 || e) {
    const u = e || o, l = m.fromObject(n, {
      ...t,
      zone: u,
      specificOffset: i
    });
    return a ? l : l.setZone(o);
  } else
    return m.invalid(
      new W("unparsable", `the input "${s}" can't be parsed as ${r}`)
    );
}
function Oe(n, e, t = !0) {
  return n.isValid ? N.create(k.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(n, e) : null;
}
function He(n, e, t) {
  const r = n.c.year > 9999 || n.c.year < 0;
  let s = "";
  if (r && n.c.year >= 0 && (s += "+"), s += v(n.c.year, r ? 6 : 4), t === "year") return s;
  if (e) {
    if (s += "-", s += v(n.c.month), t === "month") return s;
    s += "-";
  } else if (s += v(n.c.month), t === "month") return s;
  return s += v(n.c.day), s;
}
function $t(n, e, t, r, s, i, a) {
  let o = !t || n.c.millisecond !== 0 || n.c.second !== 0, u = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (u += v(n.c.hour), a === "hour") break;
      if (e) {
        if (u += ":", u += v(n.c.minute), a === "minute") break;
        o && (u += ":", u += v(n.c.second));
      } else {
        if (u += v(n.c.minute), a === "minute") break;
        o && (u += v(n.c.second));
      }
      if (a === "second") break;
      o && (!r || n.c.millisecond !== 0) && (u += ".", u += v(n.c.millisecond, 3));
  }
  return s && (n.isOffsetFixed && n.offset === 0 && !i ? u += "Z" : n.o < 0 ? (u += "-", u += v(Math.trunc(-n.o / 60)), u += ":", u += v(Math.trunc(-n.o % 60))) : (u += "+", u += v(Math.trunc(n.o / 60)), u += ":", u += v(Math.trunc(n.o % 60)))), i && (u += "[" + n.zone.ianaName + "]"), u;
}
const qn = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Rs = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, qs = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Me = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Hs = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Ys = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ne(n) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[n.toLowerCase()];
  if (!e) throw new Rt(n);
  return e;
}
function Zt(n) {
  switch (n.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return Ne(n);
  }
}
function Ps(n) {
  if (fe === void 0 && (fe = p.now()), n.type !== "iana")
    return n.offset(fe);
  const e = n.name;
  let t = et.get(e);
  return t === void 0 && (t = n.offset(fe), et.set(e, t)), t;
}
function At(n, e) {
  const t = R(e.zone, p.defaultZone);
  if (!t.isValid)
    return m.invalid(ce(t));
  const r = k.fromObject(e);
  let s, i;
  if (h(n.year))
    s = p.now();
  else {
    for (const u of Me)
      h(n[u]) && (n[u] = qn[u]);
    const a = mn(n) || yn(n);
    if (a)
      return m.invalid(a);
    const o = Ps(t);
    [s, i] = ve(n, o, t);
  }
  return new m({ ts: s, zone: t, loc: r, o: i });
}
function Ut(n, e, t) {
  const r = h(t.round) ? !0 : t.round, s = h(t.rounding) ? "trunc" : t.rounding, i = (o, u) => (o = it(o, r || t.calendary ? 0 : 2, t.calendary ? "round" : s), e.loc.clone(t).relFormatter(t).format(o, u)), a = (o) => t.calendary ? e.hasSame(n, o) ? 0 : e.startOf(o).diff(n.startOf(o), o).get(o) : e.diff(n, o).get(o);
  if (t.unit)
    return i(a(t.unit), t.unit);
  for (const o of t.units) {
    const u = a(o);
    if (Math.abs(u) >= 1)
      return i(u, o);
  }
  return i(n > e ? -0 : 0, t.units[t.units.length - 1]);
}
function zt(n) {
  let e = {}, t;
  return n.length > 0 && typeof n[n.length - 1] == "object" ? (e = n[n.length - 1], t = Array.from(n).slice(0, n.length - 1)) : t = Array.from(n), [e, t];
}
let fe;
const et = /* @__PURE__ */ new Map();
class m {
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || p.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new W("invalid input") : null) || (t.isValid ? null : ce(t));
    this.ts = h(e.ts) ? p.now() : e.ts;
    let s = null, i = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
        [s, i] = [e.old.c, e.old.o];
      else {
        const o = q(e.o) && !e.old ? e.o : t.offset(this.ts);
        s = pe(this.ts, o), r = Number.isNaN(s.year) ? new W("invalid input") : null, s = r ? null : s, i = r ? null : o;
      }
    this._zone = t, this.loc = e.loc || k.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = s, this.o = i, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new m({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, t] = zt(arguments), [r, s, i, a, o, u, l] = t;
    return At({ year: r, month: s, day: i, hour: a, minute: o, second: u, millisecond: l }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, t] = zt(arguments), [r, s, i, a, o, u, l] = t;
    return e.zone = I.utcInstance, At({ year: r, month: s, day: i, hour: a, minute: o, second: u, millisecond: l }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const r = vr(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return m.invalid("invalid input");
    const s = R(t.zone, p.defaultZone);
    return s.isValid ? new m({
      ts: r,
      zone: s,
      loc: k.fromObject(t)
    }) : m.invalid(ce(s));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, t = {}) {
    if (q(e))
      return e < -Wt || e > Wt ? m.invalid("Timestamp out of range") : new m({
        ts: e,
        zone: R(t.zone, p.defaultZone),
        loc: k.fromObject(t)
      });
    throw new M(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, t = {}) {
    if (q(e))
      return new m({
        ts: e * 1e3,
        zone: R(t.zone, p.defaultZone),
        loc: k.fromObject(t)
      });
    throw new M("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, t = {}) {
    e = e || {};
    const r = R(t.zone, p.defaultZone);
    if (!r.isValid)
      return m.invalid(ce(r));
    const s = k.fromObject(t), i = xe(e, Zt), { minDaysInFirstWeek: a, startOfWeek: o } = vt(i, s), u = p.now(), l = h(t.specificOffset) ? r.offset(u) : t.specificOffset, f = !h(i.ordinal), y = !h(i.year), T = !h(i.month) || !h(i.day), d = y || T, O = i.weekYear || i.weekNumber;
    if ((d || f) && O)
      throw new Q(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (T && f)
      throw new Q("Can't mix ordinal dates with month/day");
    const F = O || i.weekday && !d;
    let $, J, ie = pe(u, l);
    F ? ($ = Hs, J = Rs, ie = Ee(ie, a, o)) : f ? ($ = Ys, J = qs, ie = Ae(ie)) : ($ = Me, J = qn);
    let lt = !1;
    for (const oe of $) {
      const Jn = i[oe];
      h(Jn) ? lt ? i[oe] = J[oe] : i[oe] = ie[oe] : lt = !0;
    }
    const Hn = F ? Sr(i, a, o) : f ? pr(i) : mn(i), ct = Hn || yn(i);
    if (ct)
      return m.invalid(ct);
    const Yn = F ? pt(i, a, o) : f ? Ot(i) : i, [Pn, Gn] = ve(Yn, l, r), ae = new m({
      ts: Pn,
      zone: r,
      o: Gn,
      loc: s
    });
    return i.weekday && d && e.weekday !== ae.weekday ? m.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${i.weekday} and a date of ${ae.toISO()}`
    ) : ae.isValid ? ae : m.invalid(ae.invalid);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, t = {}) {
    const [r, s] = ds(e);
    return j(r, s, t, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, t = {}) {
    const [r, s] = hs(e);
    return j(r, s, t, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, t = {}) {
    const [r, s] = ms(e);
    return j(r, s, t, "HTTP", t);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, t, r = {}) {
    if (h(e) || h(t))
      throw new M("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: i = null } = r, a = k.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    }), [o, u, l, f] = zs(a, e, t);
    return f ? m.invalid(f) : j(o, u, r, `format ${t}`, e, l);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, r = {}) {
    return m.fromFormat(e, t, r);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, t = {}) {
    const [r, s] = ps(e);
    return j(r, s, t, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new M("need to specify a reason the DateTime is invalid");
    const r = e instanceof W ? e : new W(e, t);
    if (p.throwOnInvalid)
      throw new _n(r);
    return new m({ invalid: r });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, t = {}) {
    const r = zn(e, k.fromObject(t));
    return r ? r.map((s) => s ? s.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, t = {}) {
    return Zn(N.parseFormat(e), k.fromObject(t)).map((s) => s.val).join("");
  }
  static resetCache() {
    fe = void 0, et.clear();
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Re(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Re(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Re(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? qe(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? qe(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? qe(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Ae(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Te.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Te.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Te.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Te.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, t = 6e4, r = Ve(this.c), s = this.zone.offset(r - e), i = this.zone.offset(r + e), a = this.zone.offset(r - s * t), o = this.zone.offset(r - i * t);
    if (a === o)
      return [this];
    const u = r - a * t, l = r - o * t, f = pe(u, a), y = pe(l, o);
    return f.hour === y.hour && f.minute === y.minute && f.second === y.second && f.millisecond === y.millisecond ? [Y(this, { ts: u }), Y(this, { ts: l })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return ye(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return De(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? K(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? he(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? he(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: t, numberingSystem: r, calendar: s } = N.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: t, numberingSystem: r, outputCalendar: s };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, t = {}) {
    return this.setZone(I.instance(e), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(p.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: t = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = R(e, p.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (t || r) {
        const i = e.offset(this.ts), a = this.toObject();
        [s] = ve(a, i, e);
      }
      return Y(this, { ts: s, zone: e });
    } else
      return m.invalid(ce(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return Y(this, { loc: s });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid) return this;
    const t = xe(e, Zt), { minDaysInFirstWeek: r, startOfWeek: s } = vt(t, this.loc), i = !h(t.weekYear) || !h(t.weekNumber) || !h(t.weekday), a = !h(t.ordinal), o = !h(t.year), u = !h(t.month) || !h(t.day), l = o || u, f = t.weekYear || t.weekNumber;
    if ((l || a) && f)
      throw new Q(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && a)
      throw new Q("Can't mix ordinal dates with month/day");
    let y;
    i ? y = pt(
      { ...Ee(this.c, r, s), ...t },
      r,
      s
    ) : h(t.ordinal) ? (y = { ...this.toObject(), ...t }, h(t.day) && (y.day = Math.min(De(y.year, y.month), y.day))) : y = Ot({ ...Ae(this.c), ...t });
    const [T, d] = ve(y, this.o, this.zone);
    return Y(this, { ts: T, o: d });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid) return this;
    const t = g.fromDurationLike(e);
    return Y(this, Lt(this, t));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = g.fromDurationLike(e).negate();
    return Y(this, Lt(this, t));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: t = !1 } = {}) {
    if (!this.isValid) return this;
    const r = {}, s = g.normalizeUnit(e);
    switch (s) {
      case "years":
        r.month = 1;
      // falls through
      case "quarters":
      case "months":
        r.day = 1;
      // falls through
      case "weeks":
      case "days":
        r.hour = 0;
      // falls through
      case "hours":
        r.minute = 0;
      // falls through
      case "minutes":
        r.second = 0;
      // falls through
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (s === "weeks")
      if (t) {
        const i = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < i && (r.weekNumber = this.weekNumber - 1), r.weekday = i;
      } else
        r.weekday = 1;
    if (s === "quarters") {
      const i = Math.ceil(this.month / 3);
      r.month = (i - 1) * 3 + 1;
    }
    return this.set(r);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, t) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, t).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, t = {}) {
    return this.isValid ? N.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : ze;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = Ie, t = {}) {
    return this.isValid ? N.create(this.loc.clone(t), e).formatDateTime(this) : ze;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? N.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
   * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
   * @return {string|null}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: s = !0,
    extendedZone: i = !1,
    precision: a = "milliseconds"
  } = {}) {
    if (!this.isValid)
      return null;
    a = Ne(a);
    const o = e === "extended";
    let u = He(this, o, a);
    return Me.indexOf(a) >= 3 && (u += "T"), u += $t(
      this,
      o,
      t,
      r,
      s,
      i,
      a
    ), u;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
   * @return {string|null}
   */
  toISODate({ format: e = "extended", precision: t = "day" } = {}) {
    return this.isValid ? He(this, e === "extended", Ne(t)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Oe(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: s = !1,
    extendedZone: i = !1,
    format: a = "extended",
    precision: o = "milliseconds"
  } = {}) {
    return this.isValid ? (o = Ne(o), (s && Me.indexOf(o) >= 3 ? "T" : "") + $t(
      this,
      a === "extended",
      t,
      e,
      r,
      i,
      o
    )) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Oe(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return Oe(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? He(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: r = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (t || e) && (r && (s += " "), t ? s += "z" : e && (s += "ZZ")), Oe(this, s, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : ze;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid) return {};
    const t = { ...this.c };
    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, t = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return g.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, i = Mr(t).map(g.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, u = a ? e : this, l = Es(o, u, i, s);
    return a ? l.negate() : l;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(m.now(), e, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? S.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, t, r) {
    if (!this.isValid) return !1;
    const s = e.valueOf(), i = this.setZone(e.zone, { keepLocalTime: !0 });
    return i.startOf(t, r) <= s && s <= i.endOf(t, r);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid) return null;
    const t = e.base || m.fromObject({}, { zone: this.zone }), r = e.padding ? this < t ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], i = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, i = void 0), Ut(t, this.plus(r), {
      ...e,
      numeric: "always",
      units: s,
      unit: i
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? Ut(e.base || m.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(m.isDateTime))
      throw new M("min requires all arguments be DateTimes");
    return Mt(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(m.isDateTime))
      throw new M("max requires all arguments be DateTimes");
    return Mt(e, (t) => t.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, t, r = {}) {
    const { locale: s = null, numberingSystem: i = null } = r, a = k.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return Un(a, e, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, r = {}) {
    return m.fromFormatExplain(e, t, r);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(e, t = {}) {
    const { locale: r = null, numberingSystem: s = null } = t, i = k.fromOpts({
      locale: r,
      numberingSystem: s,
      defaultToEN: !0
    });
    return new An(i, e);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(e, t, r = {}) {
    if (h(e) || h(t))
      throw new M(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: s = null, numberingSystem: i = null } = r, a = k.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    if (!a.equals(t.locale))
      throw new M(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`
      );
    const { result: o, zone: u, specificOffset: l, invalidReason: f } = t.explainFromTokens(e);
    return f ? m.invalid(f) : j(
      o,
      u,
      r,
      `format ${t.format}`,
      e,
      l
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Ie;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return qt;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Qn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Ht;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Yt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Pt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Gt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Jt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return _t;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Bt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return jt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Qt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Kt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Xt;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return en;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return tn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return nn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Kn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return rn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return sn;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return an;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return on;
  }
}
function ue(n) {
  if (m.isDateTime(n))
    return n;
  if (n && n.valueOf && q(n.valueOf()))
    return m.fromJSDate(n);
  if (n && typeof n == "object")
    return m.fromObject(n);
  throw new M(
    `Unknown datetime argument: ${n}, of type ${typeof n}`
  );
}
export {
  m as D
};
