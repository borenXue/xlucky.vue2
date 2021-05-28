import { CreateElement } from 'vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { RouteConfig, RouteRecord } from 'vue-router';
import './layout-breadcrumb.scss';

const homeDefault = () => ({
  path: '/',
  meta: { title: 'Home' },
});

@Component({
  name: 'XvLayoutBreadcrumb',
})
export default class LayoutBreadcrumb extends Vue {
  @Prop({ default: homeDefault }) readonly home!: object;

  levelList: RouteConfig[] = [];

  @Watch('$route', { immediate: true, deep: true })
  watch$route() {
    this.levelList = this.getBreadcrumb();
  }

  getBreadcrumb(): RouteConfig[] {
    const matched = this.$route.matched.filter((item) => item.meta && typeof item.meta.title === 'string');

    if (this.home && matched.length > 0 && ['', '/'].indexOf(matched[0].path) < 0) {
      matched.unshift(this.home as RouteRecord);
    }

    return matched as RouteConfig[];
  }

  render(h: CreateElement) {
    const levelList = this.levelList || [];
    return (
      <el-breadcrumb class='xv-layout-breadcrumb' separator='/'>
        <transition-group name='breadcrumb'>
          {levelList.map((item, index) => {
            if (!item.meta || !item.meta.title) return undefined;
            return (
              <el-breadcrumb-item key={item.path}>
                {item.redirect === 'noredirect' || index === levelList.length - 1 ? (
                  <span class='no-redirect'>{item.meta.title}</span>
                ) : (
                  <router-link to={item.redirect || item.path}>{item.meta.title}</router-link>
                )}
              </el-breadcrumb-item>
            );
          })}
        </transition-group>
      </el-breadcrumb>
    );
  }
}
