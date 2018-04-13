#!/usr/bin/env node

process.argv.slice(2).forEach(file => {
  try {
    require("../lib/checker").check(file);
  } catch (e) {
    if (e.name === "ConflictRules") {
      console.log(e.message);
      process.exitCode = 1;
    } else {
      throw e;
    }
  }
});
