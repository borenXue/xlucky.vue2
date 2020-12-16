import { Vue } from 'vue-property-decorator';
import { MenuTreeConfig } from '../helper/type';
import './layout-left.scss';
import { CreateElement } from 'vue';
export default class LayoutLeft extends Vue {
    readonly menuTree: MenuTreeConfig;
    collapse: boolean;
    get sidebarTree(): import("../helper/type").MenuItemConfig[];
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=layout-left.d.ts.map