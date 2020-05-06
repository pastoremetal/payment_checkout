module.exports = {
  plugins: [
    "syntax-dynamic-import",
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-flow",
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
          },
        ],
      ],
    },
  },
};
