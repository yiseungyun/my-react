export default {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'createElement',
      },
    ],
  ],
};
