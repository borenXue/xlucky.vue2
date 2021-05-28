import { Vue, Component, Prop } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import { SidebarItem } from '../layout';

function childExist(item: SidebarItem): boolean {
  if (!item.children) return false;

  if (item.ignoreChildren) return false;

  if (item.children.length === 0) return false;

  return true;
}

@Component({
  name: 'LayoutSidebarMenuItem',
})
export default class LayoutSidebarMenuItem extends Vue {
  @Prop() readonly menu!: SidebarItem;
  @Prop() readonly pathFather!: string;
  @Prop() readonly clickInterceptor!: Function;
  @Prop({ default: 1 }) readonly level!: number;

  getPath() {
    if (/^http/.test(this.menu.path)) return this.menu.path;

    if (this.menu.path.indexOf('/') === 0) return this.menu.path;

    const path = (this.pathFather || '') + '/' + this.menu.path;
    return path.replace(/\/{2,}/g, '/');
  }

  handlerClick() {
    const allPath = this.getPath();

    if (typeof this.clickInterceptor === 'function') {
      if (this.clickInterceptor(this.menu, allPath) === true) {
        return;
      }
    }

    // 租户=appid --> 商户 + 团队长
    if (/^http/.test(allPath)) {
      window.open(allPath);
      return;
    }

    if (this.$router && typeof this.$router.push === 'function') {
      this.$router.push(this.getPath());
    }
  }

  render(h: CreateElement) {
    // 补充 path
    if (this.menu.hidden) return undefined;

    this.menu.meta = this.menu.meta || {};

    const hasChild = childExist(this.menu);
    const isHttpLink = /^http/.test(this.menu.path);

    const index = this.menu.meta.key || this.getPath();

    // path 为外部链接
    if (isHttpLink) {
      return (
        <el-menu-item class='http-link-item' index={index} onClick={this.handlerClick}>
          <template slot='title'>
            {this.menu.meta.icon ? <i class={this.menu.meta.icon} /> : undefined}
            <span>{this.menu.meta.title}</span>
          </template>
          <i class='el-icon-link' />
        </el-menu-item>
      );
    }

    // 页面类型处理
    if (!hasChild) {
      return (
        <el-menu-item index={index} onClick={this.handlerClick}>
          <template slot='title'>
            {this.menu.meta.icon ? <i class={this.menu.meta.icon} /> : undefined}
            <span>{this.menu.meta.title}</span>
          </template>
        </el-menu-item>
      );
    }

    // 分组类型处理
    return (
      <div>
        <el-submenu index={index} popper-class='xv-layout-sidebar-popper'>
          <template slot='title'>
            {this.menu.meta.icon ? <i class={this.menu.meta.icon} /> : undefined}
            <span>{this.menu.meta.title}</span>
          </template>
          {this.menu.children?.map((childItem) => (
            <layout-sidebar-menu-item menu={childItem} path-father={this.getPath()} level={this.level + 1} />
          ))}
        </el-submenu>
      </div>
    );
  }
}
