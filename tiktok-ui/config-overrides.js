const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  useBabelRc() // This will use the .babelrc file in your project root
);
