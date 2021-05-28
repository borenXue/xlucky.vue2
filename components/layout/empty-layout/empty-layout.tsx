import { Vue, Component } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';

@Component({
  name: 'XvEmptyLayout',
})
export default class Layout extends Vue {
  render(h: CreateElement) {
    return <router-view></router-view>;
  }
}
