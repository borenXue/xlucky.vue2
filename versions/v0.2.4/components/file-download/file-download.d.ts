import { CreateElement } from 'vue';
import { Vue } from 'vue-property-decorator';
import { FileDownloadParamsData, FileDownloadParamsHeaders, UrlQueryParams, WithCredentialsFunction } from 'xtools_js/lib/other/file-download';
import './file-download.scss';
export default class FileDownload extends Vue {
    downloading: boolean;
    readonly text: string;
    readonly type: string;
    readonly url: string;
    readonly formData: boolean;
    readonly method: 'GET' | 'POST';
    readonly name?: string;
    readonly params?: UrlQueryParams;
    readonly data?: FileDownloadParamsData;
    readonly credentials: boolean | WithCredentialsFunction;
    readonly headers?: FileDownloadParamsHeaders;
    readonly errorCb?: (err: Error) => void;
    fileDownload(): void;
    render(h: CreateElement): JSX.Element;
}
//# sourceMappingURL=file-download.d.ts.map