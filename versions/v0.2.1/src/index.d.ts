import { filterArray, filterArrayMulti, filterBoolean, filterMoney, filterTime } from './filters';
import HelloWorld from '../components/hello-world/hello-world';
import FileDownload from '../components/file-download/file-download';
import SwitchController from '../components/switch-controller/switch-controller';
import LayoutHeadLeft from '../components/layout-head-left/layout-head-left';
import LayoutLeft from '../components/layout-left/layout-left';
import LayoutEmpty from '../components/layout-empty/layout-empty';
import LinesEllipsis from '../components/lines-ellipsis/lines-ellipsis';
import { VueConstructor } from 'vue';
import { XluckyOpts } from './options';
declare function install(Vue: VueConstructor, opts?: XluckyOpts): void;
declare const _default: {
    version: string | undefined;
    install: typeof install;
    filterArray: typeof filterArray;
    filterArrayMulti: typeof filterArrayMulti;
    filterBoolean: typeof filterBoolean;
    filterMoney: typeof filterMoney;
    filterTime: typeof filterTime;
    HelloWorld: typeof HelloWorld;
    FileDownload: typeof FileDownload;
    SwitchController: typeof SwitchController;
    LayoutHeadLeft: typeof LayoutHeadLeft;
    LayoutLeft: typeof LayoutLeft;
    LayoutEmpty: typeof LayoutEmpty;
    LinesEllipsis: typeof LinesEllipsis;
};
export default _default;
//# sourceMappingURL=index.d.ts.map