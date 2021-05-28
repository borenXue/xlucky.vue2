import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class LinesEllipsis extends Vue {
    handledText: string;
    basedOn: string;
    chars: any[];
    helperWrapper: undefined;
    mounted(): void;
    calc(): void;
    destroyed(): void;
    /**
     * 根据传入的 text 来确定: handledText、basedOn
     */
    initText(): void;
    calcText(): number[];
    putEllipsis(partTextIdxs: number[]): number;
    clickHandler(env: any): void;
    isMoreSpan(ele: HTMLElement | null): boolean;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=lines-ellipsis.d.ts.map