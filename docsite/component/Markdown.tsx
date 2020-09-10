import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Components extends Vue {
  @Prop() readonly mdContent!: string;

  render() {
    return (
      <div class='view-component'>
        <vue-simple-markdown source={this.mdContent} />
      </div>
    );
  }
}
