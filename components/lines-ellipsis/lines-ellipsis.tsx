import { Vue, Component } from 'vue-property-decorator';

function prevSibling(node: HTMLElement, count: number) {
  // eslint-disable-next-line no-param-reassign
  while (node && count--) {
    // eslint-disable-next-line no-param-reassign
    node = node.previousElementSibling as HTMLElement;
  }
  return node;
}

@Component({
  props: {
    ellipsis: { type: String, default: '...' },
    text: { type: String, required: true },
    lines: { type: Number, default: 3 },
  },
})
export default class LinesEllipsis extends Vue {
  handledText = '';
  basedOn = '';
  chars: any[] = [];
  helperWrapper = undefined;

  mounted() {
    this.calc();
  }

  calc() {
    this.initText();

    // 确保组件宽度固定
    (this.$el as any).style.width = window.getComputedStyle(this.$el.parentElement as any)['width'];

    if (!this.$el || typeof this.$el.appendChild !== 'function') return;
    this.$el.appendChild(this.helperWrapper as any);
    const partTextIdxs = this.calcText();
    const ellipsisIndex = this.putEllipsis(partTextIdxs);
    // const clamped = ellipsisIndex > -1;
    let text = ellipsisIndex > -1 ? this.chars.slice(0, ellipsisIndex).join('') : this.handledText;
    text = text.replace(/‖/gi, '<br/><br/>');
    this.$el.innerHTML = text;

    const extraSpan = (this.helperWrapper as any).lastElementChild;
    const innerSpan = document.createElement('span');
    innerSpan.innerHTML = `${(this as any).ellipsis}`;
    this.$el.appendChild(extraSpan);
  }

  destroyed() {
    this.helperWrapper = undefined;
  }

  /**
   * 根据传入的 text 来确定: handledText、basedOn
   */
  initText() {
    this.handledText = (this as any).text || '';
    this.handledText = this.handledText.replace(/[\r\n]+/gi, '‖');
    this.handledText = this.handledText.replace(/[\r]+/gi, '‖');
    this.handledText = this.handledText.replace(/[\n]+/gi, '‖');

    this.basedOn = /^[\x00-\x7F]+$/.test(this.handledText) ? 'words' : 'letters';
    this.basedOn = 'letters';
    switch (this.basedOn) {
      case 'words':
        (this as any).chars = this.handledText.split(/\b|(?=\W)/);
        break;
      case 'letters':
        (this as any).chars = Array.from(this.handledText);
        break;
    }
    (this as any).helperWrapper = document.createElement('div');
    (this as any).helperWrapper.setAttribute('class', 'lines-ellipsis-helper-wrapper');
    (this as any).helperWrapper.innerHTML = this.chars
      .map((char) => {
        if (char.indexOf('‖') !== -1) {
          return `<p class="lines-ellipsis-helper-char">${char}</p>`;
        } else {
          return `<span class="lines-ellipsis-helper-char">${char}</span>`;
        }
      })
      .join('');
  }

  calcText() {
    const indexes = [0];
    let charEle = (this as any).helperWrapper.firstElementChild;
    if (!charEle) return indexes;

    let idx = 0;
    let line = 1;
    let offsetTop = charEle.offsetTop;
    while ((charEle = charEle.nextElementSibling)) {
      if (charEle.offsetTop > offsetTop) {
        line++;
        indexes.push(idx);
        offsetTop = charEle.offsetTop;
      }
      idx++;
      if (line > (this as any).lines) {
        break;
      }
    }
    return indexes;
  }

  putEllipsis(partTextIdxs: number[]) {
    if (partTextIdxs.length <= (this as any).lines) return -1;
    const lastIndex = partTextIdxs[(this as any).lines];
    const chars = this.chars.slice(0, lastIndex);
    const maxOffsetTop = (this as any).helperWrapper.children[lastIndex].offsetTop;
    (this as any).helperWrapper.innerHTML =
      chars
        .map((c, i) => {
          if (c.indexOf('‖') !== -1) {
            return `<p class="LinesEllipsis-unit">${c}</p>`;
          } else {
            return `<span class='LinesEllipsis-unit'>${c}</span>`;
          }
        })
        .join('') + `<wbr><span class='lines-ellipsis-span'>${(this as any).ellipsis}</span>`;

    const ndEllipsis = (this as any).helperWrapper.lastElementChild;
    let prevChar = prevSibling(ndEllipsis, 2);
    while (
      prevChar &&
      (ndEllipsis.offsetTop > maxOffsetTop || // IE & Edge: doesn't support <wbr>
        ndEllipsis.offsetHeight > prevChar.offsetHeight ||
        ndEllipsis.offsetTop > prevChar.offsetTop)
    ) {
      (this as any).helperWrapper.removeChild(prevChar);
      prevChar = prevSibling(ndEllipsis, 2);
      chars.pop();
    }
    return chars.length;
  }

  render() {
    return <div class='xv-lines-ellipsis'></div>;
  }
}
