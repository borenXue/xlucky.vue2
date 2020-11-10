import { CreateElement } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';

@Component({})
export default class DocsiteLayout extends Vue {
  @Prop() readonly lang!: string;
  @Prop() readonly sidebarList!: [];

  render(h: CreateElement) {
    return (
      <div id='docsite-layout'>
        <LayoutHeader current-lang={this.lang} />

        <div class='layout-main'>
          <LayoutSidebar sidebar-list={this.sidebarList} />

          <div class='layout-content'>
            <router-view />
          </div>
        </div>
      </div>
    );
  }
}
