import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
export default class Document extends Vue {
    readonly markdownFile: string;
    readonly lang: string;
    html: string;
    reloadHtml(): void;
    updated(): void;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=Markdown.d.ts.map