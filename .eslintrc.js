module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

  plugins: ["react"],

  settings: {
    react: {
      version: "detect"
    }
  },

  rules: {
    "react/prop-types": "warn",
    "react/no-unknown-property": "warn"
  }
};