import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import { SidebarItem } from '../layout';
import './layout-sidebar.scss';
export default class LayoutSidebar extends Vue {
    readonly collapse: boolean;
    readonly datas: Array<SidebarItem>;
    readonly sidebarActive: string;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=layout-sidebar.d.ts.map