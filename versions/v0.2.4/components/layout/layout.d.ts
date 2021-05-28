import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import './layout.scss';
import { RouteConfig } from 'vue-router';
/**
 * 实际只用到以下属性
 *  path、hidden、meta.title、meta.icon
 */
export declare type SidebarItem = RouteConfig & {
    ignoreChildren?: boolean;
    hidden?: boolean;
    meta: {
        key?: string;
        title: string;
        icon?: string;
    };
};
export default class Layout extends Vue {
    readonly value: boolean;
    readonly sidebar: Array<SidebarItem>;
    readonly sidebarActive: string;
    readonly home: object;
    toogleCollapse(): void;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=layout.d.ts.map