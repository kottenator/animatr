(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.animatr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Easing = undefined;

var _utils = _dereq_('./utils');

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
var Easing = exports.Easing = {
  /**
   * Linear easing: y = x
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */

  linear: function linear(x) {
    return x;
  },


  /**
   * Quadratic ease-in: y = x²
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quadIn: function quadIn(x) {
    return x * x;
  },


  /**
   * Quadratic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quadOut: function quadOut(x) {
    return 1 - this.quadIn(1 - x);
  },


  /**
   * Quadratic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quadInOut: function quadInOut(x) {
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
  cubicIn: function cubicIn(x) {
    return x * x * x;
  },


  /**
   * Cubic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  cubicOut: function cubicOut(x) {
    return 1 - this.cubicIn(1 - x);
  },


  /**
   * Cubic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  cubicInOut: function cubicInOut(x) {
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
  quartIn: function quartIn(x) {
    return x * x * x * x;
  },


  /**
   * Quartic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quartOut: function quartOut(x) {
    return 1 - this.quartIn(1 - x);
  },


  /**
   * Quartic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quartInOut: function quartInOut(x) {
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
  quintIn: function quintIn(x) {
    return x * x * x * x * x;
  },


  /**
   * Quintic ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quintOut: function quintOut(x) {
    return 1 - this.quintIn(1 - x);
  },


  /**
   * Quintic ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  quintInOut: function quintInOut(x) {
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
  expoIn: function expoIn(x) {
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
  expoOut: function expoOut(x) {
    return 1 - this.expoIn(1 - x);
  },


  /**
   * Exponential ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  expoInOut: function expoInOut(x) {
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
  sineIn: function sineIn(x) {
    return 1 + Math.sin(Math.PI / 2 * x - Math.PI / 2);
  },


  /**
   * Sinusoidal ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  sineOut: function sineOut(x) {
    return 1 - this.sineIn(1 - x);
  },


  /**
   * Sinusoidal ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  sineInOut: function sineInOut(x) {
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
  circIn: function circIn(x) {
    return 1 - Math.sqrt(1 - x * x);
  },


  /**
   * Circular ease-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  circOut: function circOut(x) {
    return 1 - this.circIn(1 - x);
  },


  /**
   * Circular ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  circInOut: function circInOut(x) {
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
  backIn: function backIn(x, overshoot) {
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
  backOut: function backOut(x, overshoot) {
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
  backInOut: function backInOut(x, overshoot) {
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
  bounceIn: function bounceIn(x) {
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
  bounceOut: function bounceOut(x) {
    return 1 - this.bounceIn(1 - x);
  },


  /**
   * Bounce ease-in-out
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  bounceInOut: function bounceInOut(x) {
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
  elasticIn: function elasticIn(x, amplitude, period) {
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
  elasticOut: function elasticOut(x, amplitude, period) {
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
  elasticInOut: function elasticInOut(x, amplitude, period) {
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
  swing: function swing(x) {
    return 0.5 - Math.cos(x * Math.PI) / 2;
  },


  /**
   * Ease easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  ease: function ease(x) {
    return this.cubicBezier(x, 0.25, 0.1, 0.25, 1);
  },


  /**
   * Ease-in easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  easeIn: function easeIn(x) {
    return this.cubicBezier(x, 0.42, 0, 1, 1);
  },


  /**
   * Ease-out easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  easeOut: function easeOut(x) {
    return this.cubicBezier(x, 0, 0, 0.58, 1);
  },


  /**
   * Ease-in-out easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  easeInOut: function easeInOut(x) {
    return this.cubicBezier(x, 0.42, 0, 0.58, 1);
  },


  /**
   * Step-start easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  stepStart: function stepStart(x) {
    return this.step(x, 1, 'start');
  },


  /**
   * Step-end easing: CSS timing function
   *
   * @param {Number} x - from 0 to 1
   * @returns {Number} - 0 for 0, 1 for 1
   */
  stepEnd: function stepEnd(x) {
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
  cubicBezier: function cubicBezier(x, x1, y1, x2, y2) {
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
        t = (0, _utils.solveQuadraticEquation)(mx / lx, -x / lx);
        t = t[0] > 0 ? t[0] : t[1];
      }
    } else {
      t = (0, _utils.solveCubicEquation)(lx / kx, mx / kx, -x / kx);
      t = t[0] > 0 ? t[0] : t[1] > 0 ? t[1] : t[2];
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
  step: function step(x, n, dir) {
    if (x === 0) return 0;

    switch (dir) {
      case 'start':
        return Math.ceil(x * n) / n;
      case 'end':
        return Math.floor(x * n) / n;
    }
  }
};

},{"./utils":2}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solveQuadraticEquation = solveQuadraticEquation;
exports.solveCubicEquation = solveCubicEquation;
/**
 * Solve any quadratic equation in the following form:
 *
 *    x² + a x + b = 0
 *
 * Finds only real roots, not complex.
 *
 * @param {Number} a
 * @param {Number} b
 * @returns {Array.<Number>} - Ordered list of roots
 */
function solveQuadraticEquation(a, b) {
  var roots = [],
      d = a * a / 4 - b,
      dr;

  if (d == 0) {
    roots.push(-a / 2);
  } else if (d > 0) {
    dr = Math.sqrt(d);
    roots.push(-a / 2 - dr, -a / 2 + dr);
  }

  return roots;
}

/**
 * Solve any cubic equation in the following form:
 *
 *    x³ + a x² + b x + c = 0
 *
 * Finds only real roots, not complex.
 *
 * Based on Cardano method. This source used in particular:
 * http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {Array.<Number>} - Ordered list of roots
 */
function solveCubicEquation(a, b, c) {
  var roots = [];

  var p = b - a * a / 3,
      q = c - a * b / 3 + 2 * a * a * a / 27,
      d,
      dr,
      r,
      rr,
      fi;

  if (p == 0) {
    roots.push(-cubicRoot(q) - a / 3);
  } else if (q == 0) {
    roots.push(-a / 3);
    if (p < 0) {
      roots.push(Math.sqrt(-p) - a / 3, -Math.sqrt(-p) - a / 3);
    }
  } else {
    d = p * p * p / 27 + q * q / 4;
    if (d === 0) {
      roots.push(-2 * cubicRoot(q / 2) - a / 3, Math.pow(q / 2, 1 / 3) - a / 3);
    } else if (d > 0) {
      dr = Math.sqrt(d);
      roots.push(cubicRoot(-q / 2 + dr) - cubicRoot(q / 2 + dr) - a / 3);
    } else {
      r = Math.sqrt(-p * p * p / 27);
      rr = Math.pow(r, 1 / 3);
      fi = Math.acos(-q / (2 * r));
      roots.push(2 * rr * Math.cos(fi / 3) - a / 3, 2 * rr * Math.cos(fi / 3 + 2 * Math.PI / 3) - a / 3, 2 * rr * Math.cos(fi / 3 + 4 * Math.PI / 3) - a / 3);
    }
  }

  return roots.sort(function (a, b) {
    return a - b;
  });
}

/**
 * Return ∛x
 *
 * @param x
 * @returns {Number}
 */
function cubicRoot(x) {
  return Math.cbrt ? Math.cbrt(x) : x >= 0 ? Math.pow(x, 1 / 3) : -Math.pow(-x, 1 / 3);
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=easing.js.map
