import { Vue } from 'vue-property-decorator';
import './switch-controller.scss';
import { CreateElement } from 'vue';
export default class SwitchController extends Vue {
    beginAc: number;
    endAc: number;
    beginB: number;
    endB: number;
    segmentA: any;
    segmentB: any;
    segmentC: any;
    animationTimes: number;
    animationType?: 'close' | 'open';
    get styleComponent(): {
        width: string;
        height: string;
        minWidth: string;
    };
    get styleSvg(): {
        transform: string;
    };
    get styleSvgPath(): {
        stroke: any;
        strokeWidth: string;
    };
    mounted(): void;
    toggle(opened?: boolean, duration?: number, emit?: boolean): void;
    open(duration?: number, emit?: boolean): void;
    close(duration?: number, emit?: boolean): void;
    openAc(segment: any, duration: number, emit?: boolean): void;
    openB(duration: number, emit?: boolean): void;
    closeAc(segment: any, duration: number, emit?: boolean): void;
    closeB(duration: number, emit?: boolean): void;
    tryEmitEnd(type: 'open' | 'close' | undefined, forceEnd?: boolean, emit?: boolean): void;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=switch-controller.d.ts.map