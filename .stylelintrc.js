module.exports = {
  ignoreFiles: ['./**', '!./**/*.scss', '!./**/*.sass', '!./**/*.css'],
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard'],
  rules: {
    // 这里可以覆盖一些配置
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
