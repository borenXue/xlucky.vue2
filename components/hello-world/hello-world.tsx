import { CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import './hello-world.scss';

@Component({})
export default class HelloWorld extends Vue {
  render(h: CreateElement) {
    return <div className='xl-hello-world'>Hello Wrold ...</div>;
  }
}
