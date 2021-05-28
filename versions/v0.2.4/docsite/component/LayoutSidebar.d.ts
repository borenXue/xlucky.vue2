import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import { SidebarItem } from '../router';
export default class DocsiteLayoutSidebar extends Vue {
    readonly sidebarList: SidebarItem[];
    collapse: boolean;
    defaultOpeneds: string[];
    watchSidebarList(): void;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=LayoutSidebar.d.ts.map