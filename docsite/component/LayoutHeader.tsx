import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class DocsiteLayoutHeader extends Vue {
  @Prop() readonly currentLang!: string;

  langList = [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ];

  get itemClass() {
    return this.$route.path.indexOf(`/${this.currentLang}/user-guide/`) >= 0 || this.$route.path.indexOf(`/${this.currentLang}/components/`) >= 0
      ? 'button-item is-active'
      : 'button-item';
  }
  get currentLangDesc() {
    for (const item of this.langList) {
      if (this.currentLang === item.id) return item.name;
    }
    return this.currentLang;
  }
  get leftLangList() {
    return this.langList.filter((item) => item.id !== this.currentLang);
  }

  switchLang(lang: string) {
    if (lang === this.currentLang) return;
    const newPath = this.$route.path.replace(this.currentLang, lang);
    this.$router.push(newPath);
  }

  render() {
    return (
      <header class='top-header'>
        <div class='left-logo'>xluck.vue</div>
        <div class='button-box'>
          <router-link tag='div' class='button-item' key='document' to={`/${this.currentLang}/synopsis`}>
            {this.currentLang === 'zh-CN' ? '设计' : 'Design'}
          </router-link>
          <router-link tag='div' key='user-guide' class={this.itemClass} to={`/${this.currentLang}/user-guide/quickstart`}>
            {this.currentLang === 'zh-CN' ? '组件' : 'Component'}
          </router-link>

          {/* 语言选择器 */}
          <el-dropdown trigger='hover' class='nav-dropdown nav-lang'>
            <span>
              {this.currentLangDesc}
              <i class='el-icon-arrow-down el-icon--right'></i>
            </span>
            <el-dropdown-menu slot='dropdown' class='nav-dropdown-list nav-lang-list'>
              {this.leftLangList.map((item) => (
                <el-dropdown-item key={item.id} nativeOnClick={() => this.switchLang(item.id)}>
                  {item.name}
                </el-dropdown-item>
              ))}
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
    );
  }
}
