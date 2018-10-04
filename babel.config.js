module.exports = function(api) {
  api.cache(false); // change this later

  return {
    presets: [require('@babel/preset-react')],
    ignore: ['third_party'],
    plugins: [
      [require('@babel/plugin-proposal-class-properties'), {loose: true}],
      [
        require('@babel/plugin-proposal-object-rest-spread'),
        {useBuiltIns: true},
      ],
      require('@babel/plugin-transform-template-literals'),
      require('@babel/plugin-transform-literals'),
      require('@babel/plugin-transform-arrow-functions'),
      require('@babel/plugin-transform-block-scoped-functions'),
      [require('@babel/plugin-transform-classes'), {loose: true}],
      require('@babel/plugin-transform-object-super'),
      require('@babel/plugin-transform-shorthand-properties'),
      require('@babel/plugin-transform-computed-properties'),
      require('@babel/plugin-transform-for-of'),
      [require('@babel/plugin-transform-spread'), {loose: true}],
      require('@babel/plugin-transform-parameters'),
      [require('@babel/plugin-transform-destructuring'), {loose: true}],
      [
        require('@babel/plugin-transform-block-scoping'),
        {throwIfClosureRequired: true},
      ],
    ],
  };
};
