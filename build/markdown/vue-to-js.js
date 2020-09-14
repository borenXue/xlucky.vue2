const vueCompilerUtil = require('@vue/component-compiler');

module.exports = function (str, componentUuid) {
  const vueCompiler = vueCompilerUtil.createDefaultCompiler({
    style: {
      postcssPlugins: [require('autoprefixer')],
    },
  });
  const descriptorCompileResult = vueCompiler.compileToDescriptor('abc.vue', str);
  (descriptorCompileResult.styles || []).forEach((item) => delete item.map);
  const assembleResults = vueCompilerUtil.assemble(vueCompiler, 'abc.vue', descriptorCompileResult);

  const jsStr = assembleResults.code.replace('export default __vue_component__', 'window[componentUuid] = __vue_component__');
  return `
    (function (componentUuid) {
      ${jsStr}
    })('${componentUuid}');
  `;
};
