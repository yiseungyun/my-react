export default {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'React.createElement',
      },
    ],
  ],
};
