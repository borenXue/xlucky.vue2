import MarkdownIt from 'markdown-it';
import StateBlock from 'markdown-it/lib/rules_block/state_block';
import Renderer from 'markdown-it/lib/renderer';
import Token from 'markdown-it/lib/token';
import Vue from 'vue';

export default function vuelivedemo_plugin(md: MarkdownIt, options: MarkdownIt.Options) {
  /**
   * Parse 阶段:
   *
   * 基于 fence 解析器, 分析 token.content 的内容
   * 1、不是 livedemo 则不作处理
   * 2、是 livedemo, 则填充 token.meta 内容 (render 阶段利用 meta 内容进行渲染)
   * 3、token.children 用于内部 inline 类型元素
   */
  // eslint-disable-next-line max-params
  md.block.ruler.after('fence', 'fence_livedemo_vue', (state: StateBlock, startLine: number, endLine: number, silent: boolean) => {
    console.log('startLine: ', startLine);
    if (!state.tokens || state.tokens.length <= 0) return false;
    const token = state.tokens[state.tokens.length - 1];
    if (token.type !== 'fence') return false;
    if (!token.map || token.map.length !== 2 || typeof token.map[1] !== 'number') return false;
    if (token.map[1] !== startLine - 1) return false;
    if (token.info !== 'vue') return false;
    const src = token.content;
    if (!src || !src.trim || !src.trim()) return false;

    if (!/<!--( )*livedemo/.test(src)) return false;

    const { content, extra } = extractMeta(src);
    const { template, style, script } = splitContent(content);

    const meta = {
      isVueLiveDemo: true,
      vueLiveDemo: {
        vueContent: content,
        template,
        style,
        script,
        extra,
      },
    };

    token.type = 'fence_livedemo_vue';
    token.meta = Object.assign(token.meta || {}, meta);

    // state.line = state.line + 1;

    return true;
  });

  // 1、输出 live-demo-box 的 script、style、html，并自动执行
  // 2、输出 live-demo 的, Vue 组件、并将该 Vue 组件实例绑定到指定元素
  md.renderer.rules.fence_livedemo_vue = function (...rest) {
    // 如果是运行在浏览器中, 则动态插入 style、script 元素, 只返回需要展示的部分
    //    script: 定时器, 去遍历所有的 script.livedemo 的标签, 并执行
    if (isBrowser()) {
      // 动态插入 style 元素, 并保证不重复 且 即时生效
      const li = document.querySelectorAll('style.fence-livedemo-vue');
      if (!li || li.length === 0) {
        const styleEle = document.createElement('style');
        styleEle.setAttribute('class', 'fence-livedemo-vue');
        styleEle.innerHTML = liveDemoBoxStyle;
        document.body.appendChild(styleEle);
      }
      // 动态插入 script
      const scriptEleList = document.querySelectorAll('script.fence-livedemo-vue-auto-setup');
      if (!scriptEleList || scriptEleList.length === 0) {
        const scriptEle = document.createElement('script');
        scriptEle.setAttribute('class', 'fence-livedemo-vue-auto-setup');
        scriptEle.innerHTML = `
          ${setupVueLiveDemoItem.toString()}
          ${classAdd.toString()}
          ${classRemove.toString()}
          function autoSetupVueLiveDemoAll() {
            var list = document.querySelectorAll('section.fence-livedemo-vue') || [];
            for (var liveDemoI = 0; liveDemoI < list.length; liveDemoI++) {
              setupVueLiveDemoItem(list[liveDemoI])
            }
          }
          autoSetupVueLiveDemoAll();
          window.setInterval(autoSetupVueLiveDemoAll, 1000);
        `;
        document.body.appendChild(scriptEle);
      }
    }

    return generateHtml.apply(md, rest);
  };
}

/**
 * 1、启动 liveDemoBox 容器: 事件监听处理、按钮初始化、样式生效 等
 * 2、渲染 liveDemo 的 vue 组件实例:
 *    a. 基于 Vue.component(), 使用 md 中的内容, 创建特定的 Vue 组件实例
 *    b. 创建该组件的实例, 并绑定到 liveDemoBox 容器内的 .live-box-app 元素上
 */
function setupVueLiveDemoItem(element: HTMLElement, id: string) {
  if (element.dataset.setup === 'true') return;

  element.onmouseover = () => classAdd(element, 'hover');
  element.onmouseenter = () => classAdd(element, 'hover');
  element.onmouseleave = () => classRemove(element, 'hover');
  element.onmouseout = () => classRemove(element, 'hover');

  const sourceBoxEle = element.querySelector('.source-box') as HTMLElement;
  if (!sourceBoxEle) throw new Error('.source-box 不存在');
  const controlBarEle = element.querySelector('.conrol-bar') as HTMLElement;
  if (!controlBarEle) throw new Error('.conrol-box 不存在');
  // @ts-ignore
  const svgWrapperList = controlBarEle.querySelectorAll('.svg-wrapper') as HTMLElement[];

  controlBarEle.onmouseover = () => classAdd(controlBarEle, 'hover');
  controlBarEle.onmouseenter = () => classAdd(controlBarEle, 'hover');
  controlBarEle.onmouseleave = () => classRemove(controlBarEle, 'hover');
  controlBarEle.onmouseout = () => classRemove(controlBarEle, 'hover');
  controlBarEle.onclick = () => {
    if (element.dataset.openSource === 'true') {
      classRemove(element, 'open-source');
      element.dataset.openSource = 'false';
    } else {
      classAdd(element, 'open-source');
      element.dataset.openSource = 'true';
    }
  };

  // eslint-disable-next-line
  for (let svgWrapperI = 0; svgWrapperI < svgWrapperList.length; svgWrapperI++) {
    // eslint-disable-next-line
    let svgWrapper = svgWrapperList[svgWrapperI];
    svgWrapper.onmouseover = () => classAdd(svgWrapper, 'hover');
    svgWrapper.onmouseenter = () => classAdd(svgWrapper, 'hover');
    svgWrapper.onmouseleave = () => classRemove(svgWrapper, 'hover');
    svgWrapper.onmouseout = () => classRemove(svgWrapper, 'hover');
    const tipToast = svgWrapper.querySelector('.tip-toast') as Element;
    const tipToastLeft = (tipToast.clientWidth - svgWrapper.clientWidth) / 2;
    tipToast.setAttribute('style', `left: -${tipToastLeft}px;`);
    svgWrapper.onclick = (e: Event) => {
      let action = svgWrapper.dataset.action;
      console.warn('TODO: action: ', action);
      // data-action="codepen" codesandbox copy
      e.stopPropagation();
    };
  }

  // // livedemo 组件执行
  // const thisLiveDemoAppElement = element.querySelector('live-box-app') as HTMLElement;
  // // eslint-disable-next-line no-new
  // new Vue({
  //   render: (h) =>
  //     h(Vue.component('LiveDemoBox'), {
  //       props: {
  //         liveDemoId: `${demoId}`,
  //       },
  //     }),
  // }).$mount(thisLiveDemoAppElement);

  element.dataset.setup = 'true';
}

function classAdd(ele: HTMLElement | SVGSVGElement, cls: string) {
  let old = ele.getAttribute('class') || '';
  old = old.replace(new RegExp(`\\b${cls}\\b`, 'g'), '');
  ele.setAttribute('class', `${old.trim()} ${cls}`);
}
function classRemove(ele: HTMLElement | SVGSVGElement, cls: string) {
  let old = ele.getAttribute('class') || '';
  old = old.replace(new RegExp(`\\b${cls}\\b`, 'g'), '');
  ele.setAttribute('class', old);
}

// eslint-disable-next-line max-params
function generateHtml(tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) {
  const token = tokens[idx];
  console.log('generateHtml: ', token);
  let vueContent = token.meta.vueLiveDemo.vueContent;
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-invalid-this
  vueContent = this.utils.escapeHtml(vueContent);
  debugger;
  const liveDemoId = `livedemo-${Date.now()}-${Math.random().toString(32).substring(2)}`;
  // TODO: node 环境, styleHtml 只输出一次即可
  return `
    ${isBrowser() ? '' : liveDemoBoxStyleHtml}
    <section class="fence-livedemo-vue ${liveDemoId}">
      <script>
        var elementLiveDemo = document.querySelector('section.${liveDemoId}');
        if (elementLiveDemo) {
          setupVueLiveDemoItem(elementLiveDemo);
        }
      </script>
      <div class="live-box">
        <div class="live-box-app"></div>
      </div>

      <div class="source-box">
        <pre>
          <code>${vueContent.toString()}</code>
        </pre>
      </div>

      <div class="conrol-bar">
        <i class='el-icon-caret-bottom'></i>
        <span class="toggle-code show">显示代码</span>
        <span class="toggle-code hide">隐藏代码</span>
        <div class="right-btns flex-v-center">
          <!-- CodeSandBox -->
          <div class="svg-wrapper flex-v-center" data-action="codesandbox">
            <svg viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"></path>
            </svg>
            <div class="tip-toast">
              在 CodeSandBox 中打开
              <span></span>
            </div>
          </div>
          <!-- CodePen -->
          <div class="svg-wrapper flex-v-center" data-action="codepen">
            <svg viewBox="0 0 15 15" fill="currentColor">
              <path d="M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"></path>
            </svg>
            <div class="tip-toast">
              在 CodePen 中打开
              <span></span>
            </div>
          </div>
          <!-- Copy -->
          <div class="svg-wrapper flex-v-center" data-action="copy">
            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="snippets" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z"></path>
            </svg>
            <div class="tip-toast">
              复制代码
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>abcdefg</div>
    <script>
      alert('a');
    </script>
  `;
}

function isBrowser() {
  return typeof window === 'object' && typeof window.navigator === 'object' && typeof document === 'object';
}

const liveDemoBoxStyle = `
.flex-v-center {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
}
.fence-livedemo-vue {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-bottom: 24px;
}
.fence-livedemo-vue .live-box {
  padding: 24px;
}
.fence-livedemo-vue .source-box {
  height: 0;
  overflow: hidden;
}
.fence-livedemo-vue.open-source .source-box {
  height: auto;
}

.fence-livedemo-vue .conrol-bar {
  border-top: 1px solid #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}
.fence-livedemo-vue .conrol-bar i {
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}

.fence-livedemo-vue .conrol-bar .toggle-code {
  opacity: 0;
  position: absolute;
  font-size: 14px;
  line-height: 44px;
  transition: 0.3s;
  color: #d3dce6;
}
.fence-livedemo-vue .conrol-bar .toggle-code.hide,
.fence-livedemo-vue.open-source .conrol-bar .toggle-code.show {
  visibility: hidden;
}
.fence-livedemo-vue .conrol-bar .toggle-code.show,
.fence-livedemo-vue.open-source .conrol-bar .toggle-code.hide {
  visibility: visible;
}
.fence-livedemo-vue.hover .conrol-bar .toggle-code {
  opacity: 1;
  transform: translateX(-30px);
}
.fence-livedemo-vue .conrol-bar.hover i,
.fence-livedemo-vue .conrol-bar.hover .toggle-code {
  color: #4094ff;
}

.fence-livedemo-vue .conrol-bar .right-btns {
  opacity: 0;
  line-height: 44px;
  position: absolute;
  top: 0;
  right: -18px;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 25px;
  transition: 0.3s;
  color: #4094ff;
  height: 100%;
}

.fence-livedemo-vue .conrol-bar .right-btns .svg-wrapper {
  height: 100%;
  padding: 0 12px;
  position: relative;
}
.fence-livedemo-vue .conrol-bar .right-btns .svg-wrapper svg {
  transition: 0.3s;
}
.fence-livedemo-vue .conrol-bar .right-btns .svg-wrapper .tip-toast {
  position: absolute;
  top: -44px;
  line-height: 14px;
  text-align: center;
  width: 170px;
  width: max-content;
  padding: 10px;
  background: #060606;
  left: 0;
  border-radius: 4px;
  color: white;
  visibility: hidden;
  box-shadow: 0 0px 5px #060606;
}

.fence-livedemo-vue .conrol-bar .right-btns .svg-wrapper .tip-toast span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #060606;
  position: absolute;
  left: calc(50% - 5px);
  bottom: -5px;
  transform: rotate(45deg);
  box-shadow: 0 0px 5px #060606;
}

.fence-livedemo-vue .conrol-bar .right-btns .svg-wrapper.hover svg {
  transform: scale(1.4);
}
.fence-livedemo-vue .conrol-bar .right-btns .svg-wrapper.hover .tip-toast {
  visibility: visible;
}

.fence-livedemo-vue .conrol-bar .right-btns svg {
  height: 18px;
  width: 18px;  
}
.fence-livedemo-vue.hover .conrol-bar .right-btns {
  opacity: 1;
  right: 0;
}

.fence-livedemo-vue.hover .conrol-bar i {
  transform: translateX(-40px);
}
`;
const liveDemoBoxStyleHtml = `<style>${liveDemoBoxStyle}</style>`;

function splitContent(str: string) {
  const regexpTemplate = /<template>((.|\n)*?)<\/template>/;
  const regexpStyle = /<style>((.|\n)*?)<\/style>/;
  const regexpScript = /<script>((.|\n)*?)<\/script>/;
  const res: {
    template?: string;
    style?: string;
    script?: string;
  } = { template: undefined, style: undefined, script: undefined };

  if (regexpTemplate.test(str)) {
    const temp = regexpTemplate.exec(str);
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (temp && temp[1]) res.template = temp[1];
  }

  if (regexpStyle.test(str)) {
    const temp = regexpStyle.exec(str);
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (temp && temp[1]) res.style = temp[1];
  }

  if (regexpScript.test(str)) {
    const temp = regexpScript.exec(str);
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (temp && temp[1]) res.script = temp[1];
  }

  return res;
}

function extractMeta(str: string) {
  const defaultRes = { content: str, extra: undefined };

  const regexp = /<!--( )*livedemo:((.|\n)*?)-->/;
  if (!regexp.test(str)) return defaultRes;

  try {
    const res = regexp.exec(str);
    // eslint-disable-next-line  @typescript-eslint/prefer-optional-chain
    if (res && res[2] && res[1].trim && res[2].trim()) {
      const extra = JSON.parse(res[2].trim());
      const content = str.replace(regexp, '');
      // console.log('content: ', content);
      return { content, extra };
    }
    return defaultRes;
  } catch (err) {
    console.warn(err); // eslint-disable-line no-console
    return defaultRes;
  }
}
