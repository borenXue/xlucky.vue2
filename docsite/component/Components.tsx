import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ajax } from './helper';
// import Markdown from './Markdown';
import parseMarkdown from '../md/index';

@Component({})
export default class Components extends Vue {
  @Prop() readonly currentComponentName!: string;
  @Prop() readonly markdownFile!: string;
  @Prop() readonly lang!: string;
  markdownContent = '';

  @Watch('markdownFile', { immediate: true })
  reloadMarkdown() {
    ajax(this.markdownFile)
      .then((text) => {
        this.markdownContent = text as string;
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }

  render() {
    const htmlContent = parseMarkdown(this.markdownContent);

    return (
      <div class='view-component'>
        {/* <Markdown md-content={this.markdownContent} /> */}
        <div domPropsInnerHTML={htmlContent} />
      </div>
    );
  }
}
