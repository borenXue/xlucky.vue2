import { Vue } from 'vue-property-decorator';
import { MenuTreeConfig } from '../type';
import './sidebar.scss';
import { CreateElement } from 'vue';
export default class Sidebar extends Vue {
    readonly sidebarTree: MenuTreeConfig;
    readonly collapse: boolean;
    readonly activePath: '';
    readonly popperClass: string;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=Sidebar.d.ts.map