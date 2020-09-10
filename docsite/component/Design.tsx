import { Vue, Component, Prop } from 'vue-property-decorator';
import LayoutHeader from './LayoutHeader';

@Component({})
export default class Design extends Vue {
  @Prop() readonly lang!: string;

  render() {
    return <div id="docsite-layout">

      <LayoutHeader current-lang={this.lang} />

      <div class="layout-main">
        { this.lang === 'zh-CN' ? '设计理念' : 'Design Concept' }
      </div>

    </div>
  }

}

