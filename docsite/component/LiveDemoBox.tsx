import { Vue, Component, Prop } from 'vue-property-decorator';
import hljs from 'highlight.js';

@Component({})
export default class LiveDemoBox extends Vue {
  @Prop() readonly liveDemoId!: string;
  @Prop() readonly liveDemoCode!: string;
  isHover = false;
  showCode = false;

  get finalCode() {
    const res = (window as any).md.utils.unescapeAll(this.liveDemoCode || '');
    // console.log(hljs.highlightBlock(res || '<div>abc</div>'));
    const str = `
      <pre><code>
        ${this.liveDemoCode}
      </code></pre>
    `;
    return str;
    // return hljs.highlightBlock(str as any);
  }

  mounted() {
    this.$el.addEventListener('mouseover', () => {
      this.isHover = true;
    });
    this.$el.addEventListener('mouseleave', () => {
      this.isHover = false;
    });
  }
  toogleCode() {
    this.showCode = !this.showCode;
  }

  render() {
    return (
      <div class={this.isHover ? 'live-demo-box hover' : 'live-demo-box'}>
        <div class='demo-box'>liveDemoId-=-: {this.liveDemoId}</div>

        <div class={this.showCode ? 'source-tip-box open' : 'source-tip-box'}>
          <div domPropsInnerHTML={this.finalCode}></div>
          {/* <span>{this.finalCode}</span> */}
        </div>

        <div class='conrol-bar' onClick={this.toogleCode}>
          <i class='el-icon-caret-bottom'></i>
          <span class='toggle-code'>显示代码</span>
          <div class='right-btns'>
            <span>CodeSandbox</span>
            <span>CodePen</span>
            <span>复制</span>
          </div>
        </div>
      </div>
    );
  }
}
