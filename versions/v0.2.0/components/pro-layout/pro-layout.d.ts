import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import { MenuTreeConfig } from '../helper/type';
export declare type ProLayoutStyle = 'head-left' | 'left';
/**
 * TODO:
 *  1、style && menuTree 等简单属性如何配置
 *      a. componentProps ?
 *      b. 全局配置, eg: Vue.use(xlucky, { layoutStyle: '' })
 *  2、slot 类型自定义需求如何满足？？eg, 右上角自定义
 *      a. 异步组件或动态组件
 *
 */
export default class ProLayout extends Vue {
    readonly layoutStyle: ProLayoutStyle;
    layoutMenuTree: MenuTreeConfig;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=pro-layout.d.ts.map