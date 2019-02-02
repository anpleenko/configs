module.exports = {
  extends: ["airbnb-base", "plugin:import/errors", "prettier"],
  plugins: ["prettier", "import"],
  env: {
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    "no-console": 1,
    "prettier/prettier": "error"
  }
};
