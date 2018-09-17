module.exports = function(api) {
  return {
    presets: [
      '@babel/preset-flow',
      ['@babel/preset-react', {development: api.env(['development', 'test'])}]
    ],
    ignore: ['third_party'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      ['@babel/plugin-proposal-object-rest-spread', {useBuiltIns: true}],
      '@babel/plugin-transform-template-literals',
      '@babel/plugin-transform-literals',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-block-scoped-functions',
      ['@babel/plugin-transform-classes', {loose: true}],
      '@babel/plugin-transform-object-super',
      '@babel/plugin-transform-shorthand-properties',
      '@babel/plugin-transform-computed-properties',
      '@babel/plugin-transform-for-of',
      // '@babel/plugin-check-es2015-constants',
      ['@babel/plugin-transform-spread', {loose: true}],
      '@babel/plugin-transform-parameters',
      ['@babel/plugin-transform-destructuring', {loose: true}],
      ['@babel/plugin-transform-block-scoping', {throwIfClosureRequired: true}],
    ],
  };
};
