import * as path from "path";
import * as prettier from "prettier";
import * as tslint from "tslint";

export function format(filename: string, source: string) {
  return prettier.format(source, { filepath: filename });
}

export function lint(filename: string, source: string) {
  const dirname = path.dirname(filename);

  const tslintPath = path.join(dirname, "tslint.json");
  const tslintConfig = tslint.Linter.findConfiguration(tslintPath, "")
    .results;
  const linter = new tslint.Linter({ fix: false, formatter: "verbose" });

  linter.lint(filename, source, tslintConfig);
  const results = linter.getResult();

  if (results.failures.length > 0) {
    const output = results.output.replace(new RegExp(process.cwd(), "g"), "");
    throw new Error(output);
  }
}
