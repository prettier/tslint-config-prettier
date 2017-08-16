const rules = Object.assign(
  {},
  require("./codelyzer/rules"),
  require("./tslint/rules"),
  require("./tslint-consistent-codestyle/rules"),
  require("./tslint-divid/rules"),
  require("./tslint-eslint-rules/rules"),
  require("./tslint-immutable/rules"),
  require("./tslint-microsoft-contrib/rules"),
  require("./tslint-misc-rules/rules"),
  require("./tslint-plugin-ikatyang/rules"),
  require("./tslint-react/rules"),
  require("./vrsource-tslint-rules/rules")
);

module.exports = {
  rules,
  jsRules: rules,
};
