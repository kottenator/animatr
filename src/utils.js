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
export function solveQuadraticEquation(a, b) {
  var roots = [],
    d = a * a / 4 - b,
    dr;

  if (d == 0) {
    roots.push(-a / 2);
  } else if (d > 0) {
    dr = Math.sqrt(d);
    roots.push(
      -a / 2 - dr,
      -a / 2 + dr
    );
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
 * https://trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {Array.<Number>} - Ordered list of roots
 */
export function solveCubicEquation(a, b, c) {
  var roots = [];

  var p = b - a * a / 3,
      q = c - a * b / 3 + 2 * a * a * a / 27,
      d, dr, r, rr, fi;

  if (p == 0) {
    roots.push(-cubicRoot(q) - a / 3);
  } else if (q == 0) {
    roots.push(-a / 3);
    if (p < 0) {
      roots.push(
        Math.sqrt(-p) - a / 3,
        -Math.sqrt(-p) - a / 3
      );
    }
  } else {
    d = p * p * p / 27 + q * q / 4;
    if (d === 0) {
      roots.push(
        -2 * cubicRoot(q / 2) - a / 3,
        Math.pow(q / 2, 1 / 3) - a / 3
      );
    } else if (d > 0) {
      dr = Math.sqrt(d);
      roots.push(cubicRoot(-q / 2 + dr) - cubicRoot(q / 2 + dr) - a / 3);
    } else {
      r = Math.sqrt(-p * p * p / 27);
      rr = Math.pow(r, 1 / 3);
      fi = Math.acos(-q / (2 * r));
      roots.push(
        2 * rr * Math.cos(fi / 3) - a / 3,
        2 * rr * Math.cos(fi / 3 + 2 * Math.PI / 3) - a / 3,
        2 * rr * Math.cos(fi / 3 + 4 * Math.PI / 3) - a / 3
      );
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
  return Math.cbrt ? Math.cbrt(x) : (x >= 0 ? Math.pow(x, 1 / 3) : -Math.pow(-x, 1 / 3));
}
