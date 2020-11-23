import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import './bread-crumb.scss';
export default class BreadCrumb extends Vue {
    readonly homePath?: string;
    readonly homeLabel?: string;
    get breadcrumbList(): any[];
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=BreadCrumb.d.ts.map