import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import { SidebarItem } from '../layout';
export default class LayoutSidebarMenuItem extends Vue {
    readonly menu: SidebarItem;
    readonly pathFather: string;
    readonly clickInterceptor: Function;
    readonly level: number;
    getPath(): string;
    handlerClick(): void;
    render(h: CreateElement): JSX.Element | undefined;
}
//# sourceMappingURL=MenuItem.d.ts.map