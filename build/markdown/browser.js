function initPlugin() {
  window.hljs.configure({
    languages: ['html', 'javascript', 'html', 'css', 'scss'],
  });
}

// eslint-disable-next-line
function setupVueLiveDemoItem(element, id, vueComponent, liveDemoExtraStr) {
  if (element.dataset.setup === 'true') return;
  const liveDemoExtra = liveDemoExtraStr ? JSON.parse(window.decodeURIComponent(liveDemoExtraStr)) : {};

  element.onmouseover = () => classAdd(element, 'hover');
  element.onmouseenter = () => classAdd(element, 'hover');
  element.onmouseleave = () => classRemove(element, 'hover');
  element.onmouseout = () => classRemove(element, 'hover');

  const sourceBoxEle = element.querySelector('.source-box');
  if (!sourceBoxEle) throw new Error('.source-box 不存在');
  const controlBarEle = element.querySelector('.conrol-bar');
  if (!controlBarEle) throw new Error('.conrol-box 不存在');
  // @ts-ignore
  const svgWrapperList = controlBarEle.querySelectorAll('.svg-wrapper');
  const sourceBoxPre = sourceBoxEle.querySelector('pre');
  const sourceBoxCode = sourceBoxEle.querySelector('pre > code');

  controlBarEle.onmouseover = () => classAdd(controlBarEle, 'hover');
  controlBarEle.onmouseenter = () => classAdd(controlBarEle, 'hover');
  controlBarEle.onmouseleave = () => classRemove(controlBarEle, 'hover');
  controlBarEle.onmouseout = () => classRemove(controlBarEle, 'hover');
  controlBarEle.onclick = () => {
    if (element.dataset.openSource === 'true') {
      classRemove(element, 'open-source');
      element.dataset.openSource = 'false';
      sourceBoxEle.setAttribute('style', 'height: 0;');
    } else {
      classAdd(element, 'open-source');
      element.dataset.openSource = 'true';
      sourceBoxEle.setAttribute('style', `height: ${sourceBoxPre.clientHeight}px;`);
    }
    window.interval = setInterval(() => {
      scrollHandler(true);
    }, 20);
    setTimeout(() => {
      clearInterval(window.interval);
      window.interval = undefined;
    }, 300);
  };
  window.hljs.highlightBlock(sourceBoxCode);

  // eslint-disable-next-line
  for (let svgWrapperI = 0; svgWrapperI < svgWrapperList.length; svgWrapperI++) {
    // eslint-disable-next-line
    let svgWrapper = svgWrapperList[svgWrapperI];
    svgWrapper.onmouseover = () => classAdd(svgWrapper, 'hover');
    svgWrapper.onmouseenter = () => classAdd(svgWrapper, 'hover');
    svgWrapper.onmouseleave = () => classRemove(svgWrapper, 'hover');
    svgWrapper.onmouseout = () => classRemove(svgWrapper, 'hover');
    const tipToast = svgWrapper.querySelector('.tip-toast');
    const tipToastLeft = (tipToast.clientWidth - svgWrapper.clientWidth) / 2;
    tipToast.setAttribute('style', `left: -${tipToastLeft}px;`);
    svgWrapper.onclick = (e) => {
      e.stopPropagation();
      let action = svgWrapper.dataset.action;
      console.warn('TODO: action: ', action);
      if (action === 'codepen') actionCodepen(liveDemoExtra);
      if (action === 'copy') actionCopy(element);
      // data-action="codepen" codesandbox copy
    };
  }

  // eslint-disable-next-line no-new
  new window.Vue({
    el: element.querySelector('.live-box-app'),
    render: (h) => h(vueComponent),
  });

  // 使 controlBarEle 元素固定
  window.addEventListener('scroll', scrollHandler);

  function scrollHandler(notCheckOpenStatus) {
    if (notCheckOpenStatus !== true) {
      if (!classHas(element, 'open-source')) {
        return;
      }
    }
    const height = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;
    const offsetLeft = element.offsetLeft;
    let s = document.documentElement.scrollTop || document.body.scrollTop;
    const controlBarOffsetTop = sourceBoxEle.offsetTop + sourceBoxEle.clientHeight;

    if (controlBarOffsetTop - (height + s) >= controlBarEle.clientHeight) {
      if (!controlBarEle.getAttribute('style')) {
        // eslint-disable-next-line
        controlBarEle.setAttribute(
          'style',
          `
          position: fixed;
          bottom: 0;
          z-index: 1000;
          left: ${element.offsetLeft + 1}px;
          right: ${width - element.offsetLeft - element.clientWidth}px;
        `,
        );
      }
    } else {
      controlBarEle.setAttribute('style', '');
    }
  }

  element.dataset.setup = 'true';
}

function actionCopy(element) {
  const ele = element.querySelector('.copy-box');
  ele.select();
  if (typeof document.execCommand === 'function') {
    document.execCommand('copy');
  }
  // try {
  //   // 进行复制到剪切板
  //   if (document.execCommand('Copy', 'false', null)) {
  //     // 如果复制成功
  //     alert('复制成功！');
  //   } else {
  //     // 如果复制失败
  //     alert('复制失败！');
  //   }
  // } catch (err) {
  //   // 如果报错
  //   alert('复制错误: ', err.message);
  // }
}

function actionCodepen(liveDemoExtra) {
  const htmlContent = `
    <script src="//unpkg.com/vue/dist/vue.js"></script>
    <script src="//unpkg.com/element-ui/lib/index.js"></script>

    <div id="app">
      ${liveDemoExtra.template}
    </div>
  `;
  const styleContent = `
    @import url('//unpkg.com/element-ui/lib/theme-chalk/index.css');
    ${liveDemoExtra.style || ''}
  `;
  const jsContent = `
    ${(liveDemoExtra.script || '').replace('export default ', 'var Main = ')}
    var Ctor = Vue.extend(Main)
    new Ctor().$mount('#app')
  `;

  const inputValue = {
    js: jsContent,
    css: styleContent,
    html: htmlContent,
  };

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://codepen.io/pen/define/';
  form.target = '_blank';
  form.style.display = 'none';

  const input = document.createElement('input');
  input.setAttribute('name', 'data');
  input.setAttribute('type', 'hidden');
  input.setAttribute('value', JSON.stringify(inputValue));

  form.appendChild(input);
  document.body.appendChild(form);

  form.submit();
}

function classAdd(ele, cls) {
  let old = ele.getAttribute('class') || '';
  old = old.replace(new RegExp(`\\b${cls}\\b`, 'g'), '');
  ele.setAttribute('class', `${old.trim()} ${cls}`);
}
function classRemove(ele, cls) {
  let old = ele.getAttribute('class') || '';
  old = old.replace(new RegExp(`\\b${cls}\\b`, 'g'), '');
  ele.setAttribute('class', old);
}
function classHas(ele, cls) {
  return new RegExp(`\\b${cls}\\b`, 'g').test(ele.getAttribute('class') || '');
}

module.exports = {
  initPlugin,
  setupVueLiveDemoItem,
  classAdd,
  classRemove,
  classHas,
};
