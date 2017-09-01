import * as path from "path";
import { Configuration, Linter } from "tslint";

// tslint:disable-next-line:no-var-requires
const tslintConfigPrettier = require("..") as Configuration.RawConfigFile;

export const check = (configFilePath: string) => {
  if (typeof configFilePath !== "string") {
    throw new Error("Usage: tslint-config-prettier-check <pathToConfigFile>");
  }

  const { rules, jsRules } = Linter.loadConfigurationFromPath(configFilePath);

  const conflictRules: string[] = [];

  Object.keys(tslintConfigPrettier.rules!).forEach((conflictRuleName) => {
    if (isConflict(conflictRuleName, rules) || isConflict(conflictRuleName, jsRules)) {
      conflictRules.push(conflictRuleName);
    }
  });

  if (conflictRules.length !== 0) {
    throw new Error(`Conflict rule(s) detected in ${configFilePath}:\n${conflictRules.join("\n")}`);
  }

  // tslint:disable-next-line:no-console
  console.log(`No conflict rule detected in ${configFilePath}`);
};

function isConflict(conflictRuleName: string, rules: Configuration.IConfigurationFile["rules"]) {
  return (
    rules.has(conflictRuleName) &&
    rules.get(conflictRuleName)!.ruleSeverity !== "off"
  );
}
