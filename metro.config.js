const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// ❌ REMOVE THIS LINE: config.resolver.sourceExts.push('wasm');

//  ADD THIS LINE ALONG WITH SQLITE SECURITY HEADERS:
config.resolver.assetExts.push("wasm");

// Add COEP and COOP headers required for expo-sqlite's web worker
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    middleware(req, res, next);
  };
};

module.exports = config;
