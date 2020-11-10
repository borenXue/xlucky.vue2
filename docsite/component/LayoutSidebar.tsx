import { CreateElement } from 'vue';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { SidebarItem } from '../router';

function findTreeItemPath(item: SidebarItem) {
  const keys = [item.path];
  (item.children || []).forEach((it) => {
    keys.push(...findTreeItemPath(it));
  });
  return keys;
}

@Component({})
export default class DocsiteLayoutSidebar extends Vue {
  @Prop() readonly sidebarList!: SidebarItem[];
  collapse = false;
  defaultOpeneds: string[] = [];

  @Watch('sidebarList', { immediate: true })
  watchSidebarList() {
    const list = [];
    for (const item of this.sidebarList) {
      list.push(...findTreeItemPath(item));
    }
    this.defaultOpeneds = list;
  }

  render(h: CreateElement) {
    return (
      <div id='layout-sidebar'>
        <el-menu collapse={this.collapse} class='my-el-menu-vertical' default-openeds={this.defaultOpeneds}>
          {this.sidebarList.map((item) => generateSidebarItemEle(item))}
        </el-menu>
      </div>
    );

    function generateSidebarItemEle(item: SidebarItem, time = 1) {
      if (!item.children || item.children.length === 0) {
        return (
          <router-link tag='li' key={`li-${item.path}`} to={item.path}>
            <el-menu-item index={item.path}>
              <span slot='title'>{item.title}</span>
            </el-menu-item>
          </router-link>
        );
      }
      if (time === 1) {
        return (
          <el-submenu index={item.path}>
            <span slot='title'>{item.title}</span>
            {item.children.map((it) => generateSidebarItemEle(it, time + 1))}
          </el-submenu>
        );
      } else {
        return <el-menu-item-group title={item.title}>{item.children.map((it) => generateSidebarItemEle(it, time + 1))}</el-menu-item-group>;
      }
    }
  }
}
