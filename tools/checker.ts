import * as path from "path";
import { Configuration, Linter } from "tslint";

// tslint:disable-next-line:no-var-requires
const tslintConfigPrettier = require("..") as Configuration.RawConfigFile;

export const check = (configFilePaths: string[]) => {
  if (configFilePaths.length === 0) {
    // tslint:disable-next-line:no-console
    console.log("Usage: tslint-config-prettier-check <pathToConfigFile> ...");
    return;
  }

  configFilePaths.forEach((configFilePath) => {
    try {
      const conflictRules = getConflictRules(configFilePath);
      if (conflictRules.length === 0) {
        // tslint:disable-next-line:no-console
        console.log(`No conflict rule detected in ${configFilePath}`);
      } else {
        // tslint:disable-next-line:no-console
        console.error(
          `Conflict rule(s) detected in ${configFilePath}:\n${conflictRules
            .map((conflictRule) => `  ${conflictRule}`)
            .join("\n")}`,
        );
        process.exitCode = 1;
      }
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error(error.message);
      process.exitCode = 1;
    }
  });
};

function getConflictRules(configFilePath: string) {
  const { rules, jsRules } = Linter.loadConfigurationFromPath(configFilePath);
  return Object.keys(tslintConfigPrettier.rules!).filter(
    (conflictRuleName) =>
      isConflict(conflictRuleName, rules) ||
      isConflict(conflictRuleName, jsRules),
  );
}

function isConflict(
  conflictRuleName: string,
  rules: Configuration.IConfigurationFile["rules"],
) {
  return (
    rules.has(conflictRuleName) &&
    rules.get(conflictRuleName)!.ruleSeverity !== "off"
  );
}
