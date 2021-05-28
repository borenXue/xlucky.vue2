import { Vue, Component, Prop } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import { SidebarItem } from '../layout';
import './layout-sidebar.scss';
import LayoutSidebarMenuItem from './MenuItem';

@Component({
  components: { LayoutSidebarMenuItem },
  name: 'XvLayoutSidebar',
})
export default class LayoutSidebar extends Vue {
  @Prop({ default: true }) readonly collapse!: boolean;
  @Prop() readonly datas!: Array<SidebarItem>;
  @Prop() readonly sidebarActive!: string;

  render(h: CreateElement) {
    return (
      <aside class={this.collapse ? 'xv-layout-sidebar xv-layout-sidebar--collapse' : 'xv-layout-sidebar'}>
        <slot name='logo'>
          <div class='logo-default' />
        </slot>
        <el-menu
          mode='vertical'
          class='xv-layout-sidebar-menu'
          background-color='#001529'
          text-color='hsla(0, 0%, 100%, .65)'
          active-text-color='#409eff'
          default-active={this.sidebarActive}
          collapse={this.collapse}
        >
          {this.datas.map((item) => (
            <layout-sidebar-menu-item menu={item} path-father='/' />
          ))}
        </el-menu>
      </aside>
    );
  }
}
