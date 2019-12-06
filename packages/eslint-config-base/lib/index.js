module.exports = {
  root: true,
  extends: [
    'airbnb',
    'prettier',
    ...[
      './rules/import',
      './rules/prettier',
      './rules/react',
      './rules/react-jsx',
    ].map(require.resolve),
  ],
  rules: {
    'no-unused-vars': 'off',
    'consistent-return': 'off',
  },
}
