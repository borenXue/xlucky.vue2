import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import { MenuTreeConfig } from '../type';
import './nav-bar.scss';
export default class NavBar extends Vue {
    readonly menuTree: MenuTreeConfig;
    readonly collapse: boolean;
    currentActive: string;
    sidebarTree: MenuTreeConfig;
    get innerCollapse(): boolean;
    hideScrollLeftBtn: boolean;
    hideScrollRightBtn: boolean;
    constructor(...rest: any);
    setDefaultActive(): void;
    mounted(): void;
    onSelect(index: string, indexPath: string[], ...rest: any): void;
    render(h: CreateElement): JSX.Element;
    scrollActionLeft(): void;
    scrollActionRight(): void;
    scrollAction(type?: 'left' | 'right'): void;
    calcShowHide(): void;
}
//# sourceMappingURL=NavBar.d.ts.map