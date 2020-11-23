import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class DocsiteLayoutHeader extends Vue {
    readonly currentLang: string;
    currentVersion: string;
    versionList: {
        version: string;
        url: string;
    }[];
    pkgName: any;
    pkgVersion: any;
    langList: {
        id: string;
        name: string;
    }[];
    get itemClass(): "button-item is-active" | "button-item";
    get currentLangDesc(): string;
    get leftLangList(): {
        id: string;
        name: string;
    }[];
    mounted(): void;
    historyVersionReady(): void;
    switchLang(lang: string): void;
    switchVersion(version: string, url: string): void;
    goLatestVersion(): void;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=LayoutHeader.d.ts.map