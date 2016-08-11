var expect = weknowhow.expect;

function cubicFunction(x, a, b, c) {
  return x * x * x + a * x * x + b * x + c;
}

function p(a, b) {
  return b - a * a / 3;
}

function q(a, b, c) {
  return c - a * b / 3 + 2 * a * a * a / 27;
}

function delta(a, b, c) {
  return Math.pow(p(a, b) / 3, 3) + Math.pow(q(a, b, c) / 2, 2);
}

function equationTestCase(a, b, c, roots, extraConditions) {
  it('should find roots: [' + roots.join(', ') + '] for params: {a: ' + a + ', b: ' + b + ', c: ' + c + '}', function () {
    if (typeof extraConditions == 'function')
      extraConditions(a, b, c, roots);
    roots.forEach(function (root) {
      expect(cubicFunction(root, a, b, c), 'to be close to', 0);
    });
    expect(solveCubicEquation(a, b, c), 'to have items satisfying', function (item, index) {
      expect(item, 'to be close to', roots[index]);
    });
  });
}

describe('Cubic equation root finder', function () {
  describe('p = 0', function () {
    equationTestCase(3, 3, 1, [-1], function (a, b, c) {
      expect(p(a, b), 'to be', 0);
    });

    equationTestCase(3, 3, 2, [-2], function (a, b, c) {
      expect(p(a, b), 'to be', 0);
    });
  });

  describe('q = 0', function () {
    describe('p > 0', function () {
      equationTestCase(3, 5, 3, [-1], function (a, b, c) {
        expect(p(a, b), 'to be positive');
        expect(q(a, b, c), 'to be', 0);
      });
    });

    describe('p < 0', function () {
      equationTestCase(3, 1, -1, [-2.4142135623, -1, 0.4142135623], function (a, b, c) {
        expect(p(a, b), 'to be negative');
        expect(q(a, b, c), 'to be', 0);
      });
    });
  });

  describe('p ≠ 0, q ≠ 0', function () {
    describe('Δ = 0', function () {
      equationTestCase(6, 9, 4, [-4, -1], function (a, b, c) {
        expect(p(a, b), 'not to be', 0);
        expect(q(a, b, c), 'not to be', 0);
        expect(delta(a, b, c), 'to be', 0);
      });
    });

    describe('Δ > 0', function () {
      equationTestCase(3, 6, 6, [-1.5960716379], function (a, b, c) {
        expect(p(a, b), 'not to be', 0);
        expect(q(a, b, c), 'not to be', 0);
        expect(delta(a, b, c), 'to be positive');
      });
    });

    describe('Δ < 0', function () {
      equationTestCase(6, 6, -2, [-4.6016791319, -1.6601231134, 0.2618022453], function (a, b, c) {
        expect(p(a, b), 'not to be', 0);
        expect(q(a, b, c), 'not to be', 0);
        expect(delta(a, b, c), 'to be negative');
      });
    });
  })
});
