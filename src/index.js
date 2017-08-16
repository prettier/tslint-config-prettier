const rules = Object.assign(
  {},
  require("./tslint/rules"),
  require("./tslint-eslint-rules/rules"),
  require("./tslint-react/rules")
);

module.exports = {
  rules,
  jsRules: rules,
};
