import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ajax } from './helper';
import Markdown from './Markdown';

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
      }).catch(err => console.error(err))
  }

  render() {
    return <div class="view-component">  
      <Markdown md-content={this.markdownContent} />
    </div>;
  }

}
