import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import './layout-head-left.scss';
import { MenuTreeConfig } from '../helper/type';
export default class LayoutHeadLeft extends Vue {
    readonly menuTree: MenuTreeConfig;
    collapse: boolean;
    sidebarTree: MenuTreeConfig;
    activePath: string;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=layout-head-left.d.ts.map