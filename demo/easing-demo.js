import Easing from '../src/easing';
import RP from '../src/rp';

var EasingDemo = {
  width: 150,
  height: 268,
  threshold: 0.22,
  ignored: ['cubicBezier', 'step'],

  init() {
    this.container = document.getElementById('previews');
    this.render();
  },

  createPreviewBlock(className) {
    var containerEl = document.createElement('div');
    containerEl.className = 'preview';
    this.container.appendChild(containerEl);

    var canvasEl = document.createElement('canvas');
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    containerEl.appendChild(canvasEl);

    var titleEl = document.createElement('div');
    titleEl.appendChild(document.createTextNode(className));
    titleEl.className = 'title';
    containerEl.appendChild(titleEl);

    var ctx = canvasEl.getContext('2d');
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(0, this.height * this.threshold);
    ctx.lineTo(this.width, this.height * this.threshold);
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, this.height * (1 - this.threshold));
    ctx.lineTo(this.width, this.height * (1 - this.threshold));
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1;
    ctx.stroke();

    return ctx;
  },

  drawEasingCurve(ctx, easing, color, width) {
    ctx.beginPath();

    for (var i = 1, l = this.width; i <= l; i++) {
      var x0 = i - 1,
        y0 = this.y(easing((i - 1) / l)),
        x1 = i,
        y1 = this.y(easing(i / l));
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  },

  y(v) {
    return (1 - 2 * this.threshold) * this.height * (1 - v) + this.threshold * this.height;
  },

  render() {
    for (var easingName in Easing) {
      if (!Easing.hasOwnProperty(easingName))
        continue;

      if (this.ignored.indexOf(easingName) !== -1)
        continue;

      var ctx = this.createPreviewBlock(easingName);

      if (easingName in RP)
        this.drawEasingCurve(ctx, this.simplifyEasing(RP[easingName].bind(RP), 0, this.height, this.width), '#adf', 7);

      this.drawEasingCurve(ctx, Easing[easingName].bind(Easing), '#369', 3);
    }
  },

  /**
   * Transform easing function with 4 arguments
   * into a function with 1 argument & 3 pre-defined
   *
   * @param {Function} fn - easing function
   * @param {Number} b - beginning value
   * @param {Number} c - change value
   * @param {Number} d - duration value
   * @returns {Function}
   */
  simplifyEasing(fn, b, c, d) {
    return x => (fn(x * d, b, c, d) - b) / c;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  EasingDemo.init();
});
