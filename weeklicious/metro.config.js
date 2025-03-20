const { getDefaultConfig } = require("@expo/metro-config");
const path = require("node:path");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "svg"
  );
  config.resolver.sourceExts.push("svg", "cjs");

  config.resolver.extraNodeModules = new Proxy(
    {
      "@": path.resolve(__dirname, ".."),
      "@packages": path.resolve(__dirname, "..", "packages"),
      "@components": path.resolve(__dirname, "..", "components"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-native": path.resolve(__dirname, "node_modules/react-native"),
    },
    {
      get: (target, name) =>
        target[name] || path.join(__dirname, "node_modules", name),
    }
  );

  config.watchFolders = [path.resolve(__dirname, "..", "packages")];

  return config;
})();
