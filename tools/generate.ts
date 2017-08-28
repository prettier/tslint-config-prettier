import * as fs from "fs";
import * as mkdir from "make-dir";
import * as path from "path";

const outputDirname = path.resolve(__dirname, "../lib");
const outputFilename = path.join(outputDirname, "index.json");

const ruleProvidersDirname = path.resolve(__dirname, "../src");
const ruleNames: string[] = [];

fs.readdirSync(ruleProvidersDirname).forEach((ruleProviderName) => {
  const ruleProviderDirname = path.join(
    ruleProvidersDirname,
    ruleProviderName,
  );

  if (!fs.statSync(ruleProviderDirname).isDirectory()) {
    return;
  }

  fs.readdirSync(ruleProviderDirname).forEach((ruleName) => {
    const ruleDirname = path.join(ruleProviderDirname, ruleName);

    if (!fs.statSync(ruleDirname).isDirectory()) {
      return;
    }

    if (ruleNames.indexOf(ruleName) !== -1) {
      throw new Error(
        `Duplicate rule '${ruleName}' in '${ruleProviderName}'`,
      );
    }
    ruleNames.push(ruleName);
  });
});

const rules = ruleNames
  .slice()
  .sort()
  .reduce<Record<string, boolean>>(
    (current, ruleName) => ({ ...current, [ruleName]: false }),
    {},
  );

mkdir.sync(outputDirname);
fs.writeFileSync(
  outputFilename,
  JSON.stringify({ rules, jsRules: rules }, null, 2),
);
