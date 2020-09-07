import { Vue, Component } from 'vue-property-decorator';
import './hello-world.scss';

@Component({})
export default class HelloWorld extends Vue {

  render() {
    return <div className="xl-hello-world">
      HelloWrold 组件内容...
    </div>
  }

}
