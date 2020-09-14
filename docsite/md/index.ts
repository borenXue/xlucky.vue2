import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import Renderer from 'markdown-it/lib/renderer';
// import VueLiveDemoPlugin from './plugin';

const md: MarkdownIt = MarkdownIt();
// md.use(VueLiveDemoPlugin);

// // eslint-disable-next-line max-params
// const codeRender = (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) => {
//   debugger; // eslint-disable-line
//   console.log(tokens);
//   return '';
// };
// md.renderer.rules.code_inline = codeRender;
// md.renderer.rules.code_block = codeRender;

(window as any).md = md;
// // eslint-disable-next-line max-params
// md.renderer.rules.fence = (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) => {
//   let token = tokens[idx];
//   let info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
//   let langName = '';
//   let highlighted;
//   let i;
//   let tmpAttrs;
//   let tmpToken;

//   if (info) {
//     langName = info.split(/\s+/g)[0];
//   }

//   if (options.highlight) {
//     highlighted = options.highlight(token.content, langName) || md.utils.escapeHtml(token.content);
//   } else {
//     highlighted = md.utils.escapeHtml(token.content);
//   }

//   if (highlighted.indexOf('<pre') === 0) {
//     return highlighted + '\n';
//   }

//   // If language exists, inject class gently, without modifying original token.
//   // May be, one day we will add .clone() for token and simplify this part, but
//   // now we prefer to keep things local.
//   if (info === 'a') {
//     i = token.attrIndex('class');
//     tmpAttrs = token.attrs ? token.attrs.slice() : [];

//     if (i < 0) {
//       tmpAttrs.push(['class', options.langPrefix + langName]);
//     } else {
//       tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
//     }

//     // Fake token just to render attributes
//     tmpToken = {
//       attrs: tmpAttrs,
//     };

//     return '<pre><code' + self.renderAttrs(tmpToken as any) + '>' + highlighted + '</code></pre>\n';
//   }

//   // return '<pre><code' + self.renderAttrs(token) + '>' + highlighted + '</code></pre>\n';

//   const demoId = `abcdefg-${Date.now()}-${Math.random().toString(32).substring(2)}`;
//   // const template = `
//   //   <div class="live-demo-box">
//   //     <div class="demo-box"></div>
//   //     <div class="source-tip-box"></div>
//   //     <div class="conrol-bar">
//   //       <i class="el-icon-caret-bottom"></i>
//   //       <span>显示代码</span>
//   //       <div class="right-btns">
//   //         <span>CodeSandbox</span>
//   //         <span>CodePen</span>
//   //         <span>复制</span>
//   //       </div>
//   //     </div>
//   //   </div>
//   // `;
//   // Vue.component('${demoId}', { template: \`${template}\` });
//   return `
//     <div id="${demoId}"></div>
//     <script class="script-live-demo-vue">
//       new Vue({
//         render: (h) => h(Vue.component('LiveDemoBox'), {
//           props: {
//             liveDemoId: '${demoId}',
//             liveDemoCode: \`${highlighted}\`,
//           }
//         }),
//       }).$mount('#${demoId}');
//     </script>
//   `;
// };

export default function parseMarkdown(content: string) {
  const result = md.render(content);
  return `
    ${result}
  `;
}

// {
//   html: true,
//   highlight: function (str: string, lang: string) {
//     const { content, extra } = extractCode(str || '');

//     // if (lang && hljs.getLanguage(lang)) {
//     //   try {
//     //     const val = hljs.highlight(lang, content).value;
//     //     return val;
//     //   } catch (__) {}
//     // }

//     // return ''; // use external default escaping
//     // return `<pre class="language-vue hljs-unknown">
//     //   <code>${md.utils.escapeHtml(content)}</code>
//     // </pre>`;
//     return `
//       <script class="need-eval">
//         console.log('aaa-=-=-=');
//       </script>
//       ${md.utils.escapeHtml(content)}
//     `;
//   },
// }

function extractCode(str: string) {
  const defaultRes = { content: str, extra: undefined };

  const regexp = /<!--extraInfo:((.|\n)*?)-->/;
  if (!regexp.test(str)) return defaultRes;

  try {
    const res = regexp.exec(str);
    // eslint-disable-next-line  @typescript-eslint/prefer-optional-chain
    if (res && res[1] && res[1].trim && res[1].trim()) {
      const extra = JSON.parse(res[1].trim());
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
