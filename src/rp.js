/**
 * Original Robert Penner's easing functions.
 * Copied from ActionScript 2 implementation:
 * http://robertpenner.com/easing/
 */
export default {
  quadIn(t, b, c, d) {
    return c * (t /= d) * t + b;
  },

  quadOut(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },

  quadInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  },

  cubicIn(t, b, c, d) {
    return c * Math.pow(t / d, 3) + b;
  },

  cubicOut(t, b, c, d) {
    return c * (Math.pow(t / d - 1, 3) + 1) + b;
  },

  cubicInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
      return c / 2 * Math.pow(t, 3) + b;
    return c / 2 * (Math.pow(t - 2, 3) + 2) + b;
  },

  quartIn(t, b, c, d) {
    return c * Math.pow(t / d, 4) + b;
  },

  quartOut(t, b, c, d) {
    return -c * (Math.pow(t / d - 1, 4) - 1) + b;
  },

  quartInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
      return c / 2 * Math.pow(t, 4) + b;
    return -c / 2 * (Math.pow(t - 2, 4) - 2) + b;
  },

  quintIn(t, b, c, d) {
    return c * Math.pow(t / d, 5) + b;
  },

  quintOut(t, b, c, d) {
    return c * (Math.pow(t / d - 1, 5) + 1) + b;
  },

  quintInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
      return c / 2 * Math.pow(t, 5) + b;
    return c / 2 * (Math.pow(t - 2, 5) + 2) + b;
  },

  sineIn(t, b, c, d) {
    return c * (1 - Math.cos(t / d * (Math.PI / 2))) + b;
  },

  sineOut(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },

  sineInOut(t, b, c, d) {
    return c / 2 * (1 - Math.cos(Math.PI * t / d)) + b;
  },

  expoIn(t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
  },

  expoOut(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },

  expoInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },

  circIn(t, b, c, d) {
    return c * (1 - Math.sqrt(1 - (t /= d) * t)) + b;
  },

  circOut(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },

  circInOut(t, b, c, d) {
    if ((t /= d / 2) < 1)
      return c / 2 * (1 - Math.sqrt(1 - t * t)) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },

  backIn(t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },

  backOut(t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },

  backInOut(t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  },

  bounceOut(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  },

  bounceIn(t, b, c, d) {
    return c - this.bounceOut(d - t, 0, c, d) + b;
  },

  bounceInOut(t, b, c, d) {
    if (t < d / 2) return this.bounceIn(t * 2, 0, c, d) * .5 + b;
    else return this.bounceOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  },

  elasticIn(t, b, c, d, a, p) {
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    var s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },

  elasticOut(t, b, c, d, a, p) {
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    var s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
  },

  elasticInOut(t, b, c, d, a, p) {
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    var s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  }
};
