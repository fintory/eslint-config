module.exports = {
  root: true,
  extends: [
    '@quesk/eslint-config-base',
    ...['./rules/import', './rules/typescript'].map(require.resolve),
  ],
}
