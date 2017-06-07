const spawnSync = require('child_process').spawnSync
const rules = require('../src').rules

describe("tslint-config-prettier", () => {
  it("All rules equal false", () => {
    Object.keys(rules).forEach(name => expect(rules[name]).toBe(false))
  })

  it("Throws no linting issues", () => {
    const result = spawnSync(
      "npm",
      ["run", "test:lint", "--silent"],
      { encoding: "utf8" }
    )

    expect(result.stdout.trim()).toBeFalsy()
  })
})
