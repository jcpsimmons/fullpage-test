window.fp_easings = {
  def: "easeOutQuad",
  linear: function(n, t, e, u) {
    return (e * n) / u + t;
  },
  swing: function(n, t, e, u) {
    return window.fp_easings[window.fp_easings.def](n, t, e, u);
  },
  easeInQuad: function(n, t, e, u) {
    return e * (n /= u) * n + t;
  },
  easeOutQuad: function(n, t, e, u) {
    return -e * (n /= u) * (n - 2) + t;
  },
  easeInOutQuad: function(n, t, e, u) {
    return (n /= u / 2) < 1
      ? (e / 2) * n * n + t
      : (-e / 2) * (--n * (n - 2) - 1) + t;
  },
  easeInCubic: function(n, t, e, u) {
    return e * (n /= u) * n * n + t;
  },
  easeOutCubic: function(n, t, e, u) {
    return e * ((n = n / u - 1) * n * n + 1) + t;
  },
  easeInOutCubic: function(n, t, e, u) {
    return (n /= u / 2) < 1
      ? (e / 2) * n * n * n + t
      : (e / 2) * ((n -= 2) * n * n + 2) + t;
  },
  easeInQuart: function(n, t, e, u) {
    return e * (n /= u) * n * n * n + t;
  },
  easeOutQuart: function(n, t, e, u) {
    return -e * ((n = n / u - 1) * n * n * n - 1) + t;
  },
  easeInOutQuart: function(n, t, e, u) {
    return (n /= u / 2) < 1
      ? (e / 2) * n * n * n * n + t
      : (-e / 2) * ((n -= 2) * n * n * n - 2) + t;
  },
  easeInQuint: function(n, t, e, u) {
    return e * (n /= u) * n * n * n * n + t;
  },
  easeOutQuint: function(n, t, e, u) {
    return e * ((n = n / u - 1) * n * n * n * n + 1) + t;
  },
  easeInOutQuint: function(n, t, e, u) {
    return (n /= u / 2) < 1
      ? (e / 2) * n * n * n * n * n + t
      : (e / 2) * ((n -= 2) * n * n * n * n + 2) + t;
  },
  easeInSine: function(n, t, e, u) {
    return -e * Math.cos((n / u) * (Math.PI / 2)) + e + t;
  },
  easeOutSine: function(n, t, e, u) {
    return e * Math.sin((n / u) * (Math.PI / 2)) + t;
  },
  easeInOutSine: function(n, t, e, u) {
    return (-e / 2) * (Math.cos((Math.PI * n) / u) - 1) + t;
  },
  easeInExpo: function(n, t, e, u) {
    return 0 == n ? t : e * Math.pow(2, 10 * (n / u - 1)) + t;
  },
  easeOutExpo: function(n, t, e, u) {
    return n == u ? t + e : e * (1 - Math.pow(2, (-10 * n) / u)) + t;
  },
  easeInOutExpo: function(n, t, e, u) {
    return 0 == n
      ? t
      : n == u
      ? t + e
      : (n /= u / 2) < 1
      ? (e / 2) * Math.pow(2, 10 * (n - 1)) + t
      : (e / 2) * (2 - Math.pow(2, -10 * --n)) + t;
  },
  easeInCirc: function(n, t, e, u) {
    return -e * (Math.sqrt(1 - (n /= u) * n) - 1) + t;
  },
  easeOutCirc: function(n, t, e, u) {
    return e * Math.sqrt(1 - (n = n / u - 1) * n) + t;
  },
  easeInOutCirc: function(n, t, e, u) {
    return (n /= u / 2) < 1
      ? (-e / 2) * (Math.sqrt(1 - n * n) - 1) + t
      : (e / 2) * (Math.sqrt(1 - (n -= 2) * n) + 1) + t;
  },
  easeInElastic: function(n, t, e, u) {
    var a = 1.70158,
      r = 0,
      i = e;
    if (0 == n) return t;
    if (1 == (n /= u)) return t + e;
    if ((r || (r = 0.3 * u), i < Math.abs(e))) {
      i = e;
      a = r / 4;
    } else a = (r / (2 * Math.PI)) * Math.asin(e / i);
    return (
      -i *
        Math.pow(2, 10 * (n -= 1)) *
        Math.sin(((n * u - a) * (2 * Math.PI)) / r) +
      t
    );
  },
  easeOutElastic: function(n, t, e, u) {
    var a = 1.70158,
      r = 0,
      i = e;
    if (0 == n) return t;
    if (1 == (n /= u)) return t + e;
    if ((r || (r = 0.3 * u), i < Math.abs(e))) {
      i = e;
      a = r / 4;
    } else a = (r / (2 * Math.PI)) * Math.asin(e / i);
    return (
      i * Math.pow(2, -10 * n) * Math.sin(((n * u - a) * (2 * Math.PI)) / r) +
      e +
      t
    );
  },
  easeInOutElastic: function(n, t, e, u) {
    var a = 1.70158,
      r = 0,
      i = e;
    if (0 == n) return t;
    if (2 == (n /= u / 2)) return t + e;
    if ((r || (r = u * (0.3 * 1.5)), i < Math.abs(e))) {
      i = e;
      a = r / 4;
    } else a = (r / (2 * Math.PI)) * Math.asin(e / i);
    return n < 1
      ? i *
          Math.pow(2, 10 * (n -= 1)) *
          Math.sin(((n * u - a) * (2 * Math.PI)) / r) *
          -0.5 +
          t
      : i *
          Math.pow(2, -10 * (n -= 1)) *
          Math.sin(((n * u - a) * (2 * Math.PI)) / r) *
          0.5 +
          e +
          t;
  },
  easeInBack: function(n, t, e, u, a) {
    return null == a && (a = 1.70158), e * (n /= u) * n * ((a + 1) * n - a) + t;
  },
  easeOutBack: function(n, t, e, u, a) {
    return (
      null == a && (a = 1.70158),
      e * ((n = n / u - 1) * n * ((a + 1) * n + a) + 1) + t
    );
  },
  easeInOutBack: function(n, t, e, u, a) {
    return (
      null == a && (a = 1.70158),
      (n /= u / 2) < 1
        ? (e / 2) * (n * n * ((1 + (a *= 1.525)) * n - a)) + t
        : (e / 2) * ((n -= 2) * n * ((1 + (a *= 1.525)) * n + a) + 2) + t
    );
  },
  easeInBounce: function(n, t, e, u) {
    return e - window.fp_easings.easeOutBounce(u - n, 0, e, u) + t;
  },
  easeOutBounce: function(n, t, e, u) {
    return (n /= u) < 1 / 2.75
      ? e * (7.5625 * n * n) + t
      : n < 2 / 2.75
      ? e * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + t
      : n < 2.5 / 2.75
      ? e * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + t
      : e * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + t;
  },
  easeInOutBounce: function(n, t, e, u) {
    return n < u / 2
      ? 0.5 * window.fp_easings.easeInBounce(2 * n, 0, e, u) + t
      : 0.5 * window.fp_easings.easeOutBounce(2 * n - u, 0, e, u) + 0.5 * e + t;
  }
};
//# sourceMappingURL=easings.min.js.map
