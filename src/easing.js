import { solveCubicEquation, solveQuadraticEquation } from './utils';

/**
 * Easing functions collection
 *
 * Combination of:
 *
 * - Robert Penner's easing equations
 * - jQuery easing functions
 * - CSS timing functions
 *
 * Definitions:
 *
 * - [Specific ease-out](x) = 1 - [Specific ease-in](1 - x)
 * - [Specific ease-in-out](x) = x < 0.5 ? 0.5 × [Specific ease-in](2x) : 0.5 + 0.5 * [Specific ease-out](2x - 1)
 */
export let Easing = {
  /**
   * Linear easing: y = x
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  linear(x) {
    return x;
  },

  /**
   * Quadratic ease-in: y = x²
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quadIn(x) {
    return x * x;
  },

  /**
   * Quadratic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quadOut(x) {
    return 1 - this.quadIn(1 - x);
  },

  /**
   * Quadratic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quadInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.quadIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.quadOut(x * 2 - 1);
    }
  },

  /**
   * Cubic ease-in: y = x³
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  cubicIn(x) {
    return x * x * x;
  },

  /**
   * Cubic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  cubicOut(x) {
    return 1 - this.cubicIn(1 - x);
  },

  /**
   * Cubic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  cubicInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.cubicIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.cubicOut(x * 2 - 1);
    }
  },

  /**
   Quartic ease-in: y = x⁴
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quartIn(x) {
    return x * x * x * x;
  },

  /**
   * Quartic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quartOut(x) {
    return 1 - this.quartIn(1 - x);
  },

  /**
   * Quartic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quartInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.quartIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.quartOut(x * 2 - 1);
    }
  },

  /**
   * Quintic ease-in: y = x⁵
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quintIn(x) {
    return x * x * x * x * x;
  },

  /**
   * Quintic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quintOut(x) {
    return 1 - this.quintIn(1 - x);
  },

  /**
   * Quintic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quintInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.quintIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.quintOut(x * 2 - 1);
    }
  },

  /**
   * Exponential ease-in: x == 0 ? 0 : 2 ^ (10 × (x - 1))
   *
   * Not eˣ but similar.
   * Robert Penner's expo-in easing formula.
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  expoIn(x) {
    if (x === 0) {
      return 0;
    }
    return Math.pow(2, 10 * (x - 1));
  },

  /**
   * Exponential ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  expoOut(x) {
    return 1 - this.expoIn(1 - x);
  },

  /**
   * Exponential ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  expoInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.expoIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.expoOut(x * 2 - 1);
    }
  },

  /**
   * Sinusoidal ease-in: y = 1 - cos(πx / 2)
   *
   * Where is sinus? Function may be rewritten as y = 1 + sin(πx / 2 - π / 2)
   * Robert Penner's sine-in easing formula.
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  sineIn(x) {
    return 1 + Math.sin(Math.PI / 2 * x - Math.PI / 2);
  },

  /**
   * Sinusoidal ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  sineOut(x) {
    return 1 - this.sineIn(1 - x);
  },

  /**
   * Sinusoidal ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  sineInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.sineIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.sineOut(x * 2 - 1);
    }
  },

  /**
   * Circular ease-in: y = 1 - √(1 - x²)
   *
   * Quarter of the circle (arc) with radius = 1
   * Robert Penner's circ-in easing formula.
   *
   * @param x
   * @returns {Number}
   */
  circIn(x) {
    return 1 - Math.sqrt(1 - x * x);
  },

  /**
   * Circular ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  circOut(x) {
    return 1 - this.circIn(1 - x);
  },

  /**
   * Circular ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  circInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.circIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.circOut(x * 2 - 1);
    }
  },

  /**
   * Back ease-in (formula by Robert Penner)
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} overshoot - default: 1.70158
   * @returns {Number} - 0 for 0, 1 for 1
   */
  backIn(x, overshoot) {
    if (typeof overshoot === 'undefined') {
      overshoot = 1.70158;
    }
    return x * x * (x - overshoot * (1 - x));
  },

  /**
   * Back ease-out
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} overshoot
   * @returns {Number} - 0 for 0, 1 for 1
   */
  backOut(x, overshoot) {
    return 1 - this.backIn(1 - x, overshoot);
  },

  /**
   * Back ease-in-out
   *
   * Default overshoot value overridden to make ease-in-out transition more smooth.
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} overshoot
   * @returns {Number} - 0 for 0, 1 for 1
   */
  backInOut(x, overshoot) {
    if (typeof overshoot === 'undefined') {
      overshoot = 1.70158 * 1.525;
    }
    if (x < 0.5) {
      return 0.5 * this.backIn(x * 2, overshoot);
    } else {
      return 0.5 + 0.5 * this.backOut(x * 2 - 1, overshoot);
    }
  },

  /**
   * Bounce ease-in (formula by Robert Penner)
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  bounceIn(x) {
    x = 1 - x;
    if (x < 1 / 2.75) {
      return 1 - 7.5625 * x * x;
    } else if (x < 2 / 2.75) {
      x -= 1.5 / 2.75;
      return 0.25 - 7.5625 * x * x;
    } else if (x < 2.5 / 2.75) {
      x -= 2.25 / 2.75;
      return 0.0625 - 7.5625 * x * x;
    } else {
      x -= 2.625 / 2.75;
      return 0.015625 - 7.5625 * x * x;
    }
  },

  /**
   * Bounce ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  bounceOut(x) {
    return 1 - this.bounceIn(1 - x);
  },

  /**
   * Bounce ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  bounceInOut(x) {
    if (x < 0.5) {
      return 0.5 * this.bounceIn(x * 2);
    } else {
      return 0.5 + 0.5 * this.bounceOut(x * 2 - 1);
    }
  },

  /**
   * Elastic ease-in (formula by Robert Penner)
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} amplitude
   * @param {Number} period
   * @returns {Number} - 0 for 0, 1 for 1
   */
  elasticIn(x, amplitude, period) {
    var overshoot;
    if (x === 0) {
      return 0;
    } else if (x === 1) {
      return 1;
    } else {
      if (typeof period === 'undefined') {
        period = 0.3;
      }
      if (typeof amplitude === 'undefined' || amplitude < 1) {
        amplitude = 1;
        overshoot = period / 4;
      } else {
        overshoot = period / (2 * Math.PI) * Math.asin(1 / amplitude);
      }
      x -= 1;
      return -(amplitude * Math.pow(2, 10 * x)) * Math.sin((x - overshoot) * (2 * Math.PI) / period);
    }
  },

  /**
   * Elastic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} amplitude
   * @param {Number} period
   * @returns {Number} - 0 for 0, 1 for 1
   */
  elasticOut(x, amplitude, period) {
    return 1 - this.elasticIn(1 - x, amplitude, period);
  },

  /**
   * Elastic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} amplitude
   * @param {Number} period
   * @returns {Number} - 0 for 0, 1 for 1
   */
  elasticInOut(x, amplitude, period) {
    if (typeof period === 'undefined') {
      period = 0.3 * 1.5;
    }
    if (x < 0.5) {
      return 0.5 * this.elasticIn(x * 2, amplitude, period);
    } else {
      return 0.5 + 0.5 * this.elasticOut(x * 2 - 1, amplitude, period);
    }
  },

  /**
   * Swing easing: y = 0.5 × (1 - cos(πx))
   *
   * jQuery default easing:
   * https://github.com/jquery/jquery/blob/master/src/effects/Tween.js
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  swing(x) {
    return 0.5 - Math.cos(x * Math.PI) / 2;
  },

  /**
   * Ease easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  ease(x) {
    return this.cubicBezier(x, 0.25, 0.1, 0.25, 1);
  },

  /**
   * Ease-in easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  easeIn(x) {
    return this.cubicBezier(x, 0.42, 0, 1, 1);
  },

  /**
   * Ease-out easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  easeOut(x) {
    return this.cubicBezier(x, 0, 0, 0.58, 1);
  },

  /**
   * Ease-in-out easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  easeInOut(x) {
    return this.cubicBezier(x, 0.42, 0, 0.58, 1);
  },

  /**
   * Step-start easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  stepStart(x) {
    return this.step(x, 1, 'start');
  },

  /**
   * Step-end easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  stepEnd(x) {
    return this.step(x, 1, 'end');
  },

  /**
   * Cubic Bezier easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} x1 - from 0 to 1
   * @param {Number} y1 - any number, but usually from 0 to 1
   * @param {Number} x2 - from 0 to 1
   * @param {Number} y2 - any number, but usually from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  cubicBezier(x, x1, y1, x2, y2) {
    var kx = 1 + 3 * x1 - 3 * x2,
        ky = 1 + 3 * y1 - 3 * y2,
        lx = -6 * x1 + 3 * x2,
        ly = -6 * y1 + 3 * y2,
        mx = 3 * x1,
        my = 3 * y1,
        t;

    if (x === 0) {
      return 0;
    } else if (kx === 0) {
      if (lx === 0) {
        t = x;
      } else {
        t = solveQuadraticEquation(mx / lx, -x / lx);
        t = t[0] > 0 ? t[0] : t[1];
      }
    } else {
      t = solveCubicEquation(lx / kx, mx / kx, -x / kx);
      t = t[0] > 0 ? t[0] : (t[1] > 0 ? t[1] : t[2]);
    }

    return ky * t * t * t + ly * t * t + my * t;
  },

  /**
   * Step easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @param {Number} n - amount of steps, integer > 0
   * @param {string} dir - 'start' or 'end'
   * @returns {Number} - 0 for 0, 1 for 1
   */
  step(x, n, dir) {
    if (x === 0)
      return 0;

    switch (dir) {
      case 'start': return Math.ceil(x * n) / n;
      case 'end': return Math.floor(x * n) / n;
    }
  }
};
