const MarkdownIt = require('markdown-it');
const { setupVueLiveDemoItem, classAdd, classRemove, initPlugin } = require('./browser');
const vueToJs = require('./vue-to-js');

module.exports = function vuelivedemo_plugin(md, options) {
  // eslint-disable-next-line max-params
  md.block.ruler.after('fence', 'fence_livedemo_vue', (state, startLine, endLine, silent) => {
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

    return true;
  });

  md.renderer.rules.fence_livedemo_vue = function (...rest) {
    return generateHtml.apply(md, rest);
  };
};

// eslint-disable-next-line max-params
function generateHtml(tokens, idx, options, env, self) {
  const token = tokens[idx];
  let vueContent = token.meta.vueLiveDemo.vueContent;
  // eslint-disable-next-line
  vueContent = this.utils.escapeHtml(vueContent);
  const liveDemoId = `livedemo-${Date.now()}-${Math.random().toString(32).substring(2)}`;
  // eslint-disable-next-line
  const thisComponentJsStr = vueToJs(this.utils.unescapeAll(vueContent), liveDemoId);
  // console.log(vueContent.toString());
  return `
    <section class="fence-livedemo-vue ${liveDemoId}">
      <div style="display: none;" class="copy-box">${vueContent.toString()}</div>
      <script>
        ${thisComponentJsStr};
        ${initPlugin.toString()};
        var elementLiveDemo = document.querySelector('section.${liveDemoId}');
        if (elementLiveDemo) {
          setupVueLiveDemoItem(
            elementLiveDemo,
            '${liveDemoId}',
            window['${liveDemoId}'],
            \`${encodeURIComponent(JSON.stringify(token.meta.vueLiveDemo))}\`
          );
        }
      </script>
      <div class="live-box">
        <div class="live-box-app"></div>
      </div>

      <div class="source-box">
        <pre>
          <code>
            ${vueContent.toString()}
          </code>
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
  `;
}

function splitContent(str) {
  const regexpTemplate = /<template>((.|\n)*?)<\/template>/;
  const regexpStyle = /<style>((.|\n)*?)<\/style>/;
  const regexpScript = /<script>((.|\n)*?)<\/script>/;
  const res = { template: undefined, style: undefined, script: undefined };

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

function extractMeta(str) {
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
