import { Vue, Component } from 'vue-property-decorator';
import Segment from 'segment-js';
import { easeBounceOut, easeElasticOut, easeElasticIn } from 'd3-ease';
import './switch-controller.scss';

@Component({
  props: {
    value: { type: Boolean, default: true },
    duration: { type: Number, default: 800 },
    // 样式相关
    size: { type: Number, default: 50 },
    color: { type: String, default: '#304156' },
    lineWidth: { type: Number, default: 3 },
  },
  model: {
    prop: 'value',
    event: 'update',
  },
})
export default class SwitchController extends Vue {
  beginAc = 80;
  endAc = 320;
  beginB = 80;
  endB = 320;

  segmentA: any;
  segmentB: any;
  segmentC: any;

  // 仅用于动画结束事件的计算
  animationTimes = 0;
  animationType?: 'close' | 'open' = undefined;

  get styleComponent() {
    const size = (this as any).size;
    return {
      width: `${size}px`,
      height: `${size}px`,
      minWidth: `${size}px`,
    };
  }

  get styleSvg() {
    const scale = (this as any).size / 1000;
    return {
      transform: `scale(${scale})`,
    };
    // return `
    //   -webkit-transform: scale(${scale});
    //   -moz-transform: scale(${scale});
    //   -ms-transform: scale(${scale});
    //   -o-transform: scale(${scale});
    //   transform: scale(${scale});
    // `;
  }

  get styleSvgPath() {
    const strokeWidth = (this as any).lineWidth * (1000 / (this as any).size);
    return {
      stroke: (this as any).color,
      strokeWidth: `${strokeWidth}px`,
    };
  }

  mounted() {
    if ((this as any).value === true) {
      this.segmentA = new Segment(this.$refs.pathA, '100% - 545', '100% - 305');
      this.segmentB = new Segment(this.$refs.pathB, this.beginB + 120, this.endB - 120);
      this.segmentC = new Segment(this.$refs.pathC, '100% - 545', '100% - 305');
    } else {
      this.segmentA = new Segment(this.$refs.pathA, this.beginAc, this.endAc);
      this.segmentB = new Segment(this.$refs.pathB, this.beginB, this.endB);
      this.segmentC = new Segment(this.$refs.pathC, this.beginAc, this.endAc);
    }
  }

  toggle(opened?: boolean, duration?: number, emit = true) {
    let open = typeof opened === 'boolean' ? opened : !(this as any).value;
    if (open) {
      this.open(duration, emit);
    } else {
      this.close(duration, emit);
    }
  }

  open(duration?: number, emit = true) {
    this.tryEmitEnd(this.animationType, true, emit);
    this.animationTimes = 3;
    this.animationType = 'open';

    let currentDuration = typeof duration === 'number' ? duration / 1000 : (this as any).duration / 1000;
    this.openAc(this.segmentA, currentDuration, emit);
    this.openB(currentDuration, emit);
    this.openAc(this.segmentC, currentDuration, emit);
    if (emit) {
      this.$emit('update', true);
      this.$emit('animation-start', 'open');
    }
  }
  close(duration?: number, emit = true) {
    this.tryEmitEnd(this.animationType, true, emit);
    this.animationTimes = 3;
    this.animationType = 'close';

    let currentDuration = typeof duration === 'number' ? duration / 1000 : (this as any).duration / 1000;
    this.closeAc(this.segmentA, currentDuration, emit);
    this.closeB(currentDuration, emit);
    this.closeAc(this.segmentC, currentDuration, emit);
    if (emit) {
      this.$emit('update', false);
      this.$emit('animation-start', 'close');
    }
  }

  openAc(segment: any, duration: number, emit = true) {
    segment.draw('80% - 240', '80%', 0.3 * duration, {
      delay: 0.1 * duration,
      callback: () => {
        segment.draw('100% - 545', '100% - 305', 0.6 * duration, {
          easing: easeElasticOut,
          callback: () => this.tryEmitEnd('open', false, emit),
        });
      },
    });
  }

  openB(duration: number, emit = true) {
    this.segmentB.draw(this.beginB - 60, this.endB + 60, 0.15 * duration, {
      callback: () => {
        this.segmentB.draw(this.beginB + 120, this.endB - 120, 0.35 * duration, {
          easing: easeBounceOut,
          callback: () => this.tryEmitEnd('open', false, emit),
        });
      },
    });
  }

  closeAc(segment: any, duration: number, emit = true) {
    segment.draw('90% - 240', '90%', 0.06 * duration, {
      easing: easeElasticIn,
      callback: () => {
        segment.draw('20% - 240', '20%', 0.27 * duration, {
          callback: () => {
            segment.draw(this.beginAc, this.endAc, 0.67 * duration, {
              easing: easeElasticOut,
              callback: () => this.tryEmitEnd('close', false, emit),
            });
          },
        });
      },
    });
  }

  closeB(duration: number, emit = true) {
    this.segmentB.draw(this.beginB, this.endB, 0.85 * duration, {
      delay: 0.15 * duration,
      easing: easeElasticOut,
      callback: () => this.tryEmitEnd('close', false, emit),
    });
  }

  tryEmitEnd(type: 'open' | 'close' | undefined, forceEnd = false, emit = true) {
    if (forceEnd) {
      if (type && this.animationTimes > 0 && emit) {
        this.$emit('animation-end', type);
      }
      this.animationTimes = 0;
      this.animationType = undefined;
      return;
    }
    --this.animationTimes;
    if (this.animationTimes === 0) {
      this.animationType = undefined;
      if (emit) this.$emit('animation-end', type);
    }
  }

  render() {
    return (
      <div class='xv-switch-controller' style={this.styleComponent}>
        <div ref='btn' class='xv-switch-controller--btn' onClick={this.toggle} />

        <svg width='1000px' height='1000px' style={this.styleSvg}>
          <path
            ref='pathA'
            style={this.styleSvgPath}
            d='
              M 300 400
              L 700 400
              C 900 400 900 750 600 850
              A 400 400 0 0 1 200 200
              L 800 800
            '
          />

          <path ref='pathB' d='M 300 500 L 700 500' style={this.styleSvgPath} />

          <path
            ref='pathC'
            style={this.styleSvgPath}
            d='
              M 700 600
              L 300 600
              C 100 600 100 200 400 150
              A 400 380 0 1 1 200 800
              L 800 200
            '
          />
        </svg>
      </div>
    );
  }
}
