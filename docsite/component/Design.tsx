import { Vue, Component, Prop } from 'vue-property-decorator';
import LayoutHeader from './LayoutHeader';

@Component({})
export default class Design extends Vue {
  @Prop() readonly lang!: string;

  render() {
    const childs = [];

    const zhCN = (
      <div class='zh-ch'>
        <div class='tip'>基于 Vue 2.X 与 element-ui 2.X 的高阶组件库与工具库集合.</div>
        <div class='line'>
          <label>设计初衷:</label>
          <span>简化管理后台日常开发工作</span>
        </div>
        <div class='line desc'>内置一系列常用过滤器、组件、其他工具</div>
      </div>
    );
    const enUS = <div class='en-US'>英文</div>;

    return (
      <div id='docsite-layout'>
        <LayoutHeader current-lang={this.lang} />

        <div class='layout-main'>
          <div class='design-box'>{this.lang === 'zh-CN' ? zhCN : enUS}</div>
        </div>
      </div>
    );
  }
}
