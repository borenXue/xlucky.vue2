import { Vue, Component, Prop } from 'vue-property-decorator';
import { fileDownload } from 'xtools_js';
import { FileDownloadParamsData, FileDownloadParamsHeaders, UrlQueryParams } from 'xtools_js/lib/other/file-download';
import './file-download.scss';

@Component({})
export default class FileDownload extends Vue {
  downloading = false;

  @Prop({ default: '下载' }) readonly text!: string;
  @Prop({ default: 'primary' }) readonly type!: string;

  @Prop() readonly url!: string;
  @Prop({ default: false }) readonly formData!: boolean;
  @Prop({ default: 'GET' }) readonly method!: 'GET' | 'POST';
  @Prop() readonly name?: string;
  @Prop() readonly params?: UrlQueryParams;
  @Prop() readonly data?: FileDownloadParamsData;
  @Prop({ default: true }) readonly credentials!: boolean;
  @Prop() readonly headers?: FileDownloadParamsHeaders;

  fileDownload() {
    this.downloading = true;
    fileDownload({
      url: this.url,
      params: this.params,
      fileName: this.name,
      withCredentials: this.credentials,
      headers: this.headers,
      successCb: () => {
        this.$emit('success');
      },
      errorCb: (err: Error) => {
        this.$emit('error', err);
      },
      finalCb: (err?: Error) => {
        this.downloading = false;
        this.$emit('end', err);
      },
      method: this.method,
      data: this.data,
      isFormData: this.formData,
    });
  }

  render() {
    return (
      <el-button
        class='xv-file-download'
        loading={this.downloading}
        type={this.type}
        onClick={this.fileDownload}
        {...{
          attrs: this.$attrs,
        }}
      >
        {this.text}
      </el-button>
    );
  }
}
