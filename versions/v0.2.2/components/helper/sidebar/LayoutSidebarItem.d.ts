import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import { MenuItemConfig } from '../type';
export default class LayoutSidebarItem extends Vue {
    readonly item: MenuItemConfig;
    readonly level: number;
    readonly popperClass: string;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=LayoutSidebarItem.d.ts.map