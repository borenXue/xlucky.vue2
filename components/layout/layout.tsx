import { Vue, Component, Prop } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import './layout.scss';
import LayoutSidebar from './layout-sidebar/layout-sidebar';
import LayoutBreadcrumb from './layout-breadcrumb/layout-breadcrumb';
import { RouteConfig } from 'vue-router';

/**
 * 实际只用到以下属性
 *  path、hidden、meta.title、meta.icon
 */
export type SidebarItem = RouteConfig & {
  ignoreChildren?: boolean; // 是否忽略 children, eg: 当该项为某个页面,而children为页面内元素时使用
  // path: 外部http链接、vue-router path
  hidden?: boolean; // 是否隐藏, 即忽略该条数据
  meta: {
    key?: string; // 唯一标识, 如无则自动取 path
    title: string;
    icon?: string;
  };
};

@Component({
  components: { LayoutSidebar, LayoutBreadcrumb },
  name: 'XvLayout',
  model: {
    prop: 'value',
    event: 'input',
  },
})
export default class Layout extends Vue {
  @Prop({ default: false }) readonly value!: boolean;
  @Prop() readonly sidebar!: Array<SidebarItem>;
  @Prop() readonly sidebarActive!: string;
  @Prop() readonly home!: object;

  toogleCollapse() {
    this.$emit('input', !this.value);
  }

  render(h: CreateElement) {
    return (
      <div class='xv-layout'>
        <layout-sidebar collapse={this.value} datas={this.sidebar} sidebarActive={this.sidebarActive} />

        <div class='xv-layout__right'>
          <header class='xv-layout__header'>
            <span class='left'>
              <span>{this.value ? <i class='el-icon-s-unfold' onClick={this.toogleCollapse} /> : <i class='el-icon-s-fold' onClick={this.toogleCollapse} />}</span>
              {this.$slots['header-left'] ? this.$slots['header-left'] : <layout-breadcrumb home={this.home} />}
            </span>
            <span class='right'>{this.$slots['header-right']}</span>
          </header>
          <div class='xv-layout__view_wrapper'>{this.$slots.default}</div>
        </div>
      </div>
    );
  }
}
