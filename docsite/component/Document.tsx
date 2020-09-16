import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ajax } from './helper';

@Component({})
export default class Document extends Vue {
  @Prop() readonly markdownFile!: string;
  @Prop() readonly lang!: string;
  html = '';

  @Watch('markdownFile', { immediate: true })
  reloadHtml() {
    ajax(`autogen/${this.markdownFile.replace('.md', '.html')}`)
      .then((text) => {
        this.html = text as any;
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }

  updated() {
    const scripts = this.$el.querySelectorAll('script');
    scripts.forEach((item) => {
      // eslint-disable-next-line no-eval
      window.eval((item.innerHTML || '').trim());
    });
  }

  render() {
    return <div class='view-document' domPropsInnerHTML={this.html}></div>;
  }
}
