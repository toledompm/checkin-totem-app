module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            styles: "./src/styles",
            scenes: "./src/scenes",
            navigations: "./src/navigations",
            components: "./src/components",
            assets: "./src/assets",
          },
        },
      ],
    ],
  };
};
