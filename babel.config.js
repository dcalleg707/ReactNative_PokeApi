module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv", {
        envName: "development",
        path: ".env.development",
        ModuleName: "@env",
        safe: false,
        allowUndefined: true,
      }
      ],
    ]
  };
};
