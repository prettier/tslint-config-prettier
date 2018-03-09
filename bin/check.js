#!/usr/bin/env node

try {
  require("../lib/checker").check(process.argv[2]);
} catch (e) {
  if (e.name === "ConflictRules") {
    console.log(e.message);
    process.exitCode = 1;
  } else {
    throw e;
  }
}
