import { Vue, Component, Prop } from 'vue-property-decorator';

function getRelativeUri(str: string) {
  let history_versions_js_uri = window.location.pathname.replace(/index\.html$/, '') + '/' + str;
  return history_versions_js_uri.replace(/\/{2,}/g, '/');
}

@Component({})
export default class DocsiteLayoutHeader extends Vue {
  @Prop() readonly currentLang!: string;
  currentVersion = `v${process.env.PKG_VERSION}`;
  versionList: { version: string; url: string }[] = [];
  pkgName = (window as any).pkgInfos ? (window as any).pkgInfos.name || '' : '';
  pkgVersion = (window as any).pkgInfos ? (window as any).pkgInfos.version || '' : '';

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

  mounted() {
    if ('historyVersion' in window) {
      this.historyVersionReady();
      return;
    }
    const ele = document.createElement('script');
    ele.onload = () => {
      this.historyVersionReady();
    };
    ele.src = getRelativeUri('/history_versions.js');
    document.head.appendChild(ele);
  }
  historyVersionReady() {
    this.versionList = ((window as any).historyVersions || [])
      .reverse()
      .filter((item: string) => item !== this.currentVersion)
      .map((v: any) => ({ version: v, url: getRelativeUri(`/versions/${v}/docsite/index.html`) }));
  }

  switchLang(lang: string) {
    if (lang === this.currentLang) return;
    const newPath = this.$route.path.replace(this.currentLang, lang);
    this.$router.push(newPath);
  }
  switchVersion(version: string, url: string) {
    window.location.href = url;
  }

  render() {
    // 版本选择器
    let versionSelect: any = '';
    if (this.versionList && this.versionList.length > 0) {
      versionSelect = (
        <el-dropdown trigger='hover' class='nav-dropdown nav-version'>
          <span>
            {this.currentVersion}
            <i class='el-icon-arrow-down el-icon--right'></i>
          </span>
          <el-dropdown-menu slot='dropdown'>
            {this.versionList.map((item) => (
              <el-dropdown-item key={item.version} nativeOnClick={() => this.switchVersion(item.version, item.url)}>
                {item.version}
              </el-dropdown-item>
            ))}
          </el-dropdown-menu>
        </el-dropdown>
      );
    }

    return (
      <header class='top-header'>
        <div class='left-logo'>
          {this.pkgName}
          <span>@{this.pkgVersion}</span>
        </div>
        <div class='button-box'>
          <router-link tag='div' class='button-item' key='document' to={`/${this.currentLang}/synopsis`}>
            {this.currentLang === 'zh-CN' ? '设计' : 'Design'}
          </router-link>
          <router-link tag='div' key='user-guide' class={this.itemClass} to={`/${this.currentLang}/user-guide/quickstart`}>
            {this.currentLang === 'zh-CN' ? '组件' : 'Component'}
          </router-link>

          {versionSelect}

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
