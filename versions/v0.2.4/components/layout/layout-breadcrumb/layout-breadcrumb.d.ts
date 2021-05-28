import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
import './layout-breadcrumb.scss';
export default class LayoutBreadcrumb extends Vue {
    readonly home: object;
    levelList: RouteConfig[];
    watch$route(): void;
    getBreadcrumb(): RouteConfig[];
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=layout-breadcrumb.d.ts.map