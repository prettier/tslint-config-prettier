import * as path from "path";
import { check } from "./checker";

expect.addSnapshotSerializer({
  print: (value: string, serializer) =>
    serializer(value.replace(process.cwd(), "<cwd>")),
  test: (value) =>
    typeof value === "string" && value.indexOf(process.cwd()) !== -1,
});

const messages: string[] = [];

mockConsole("log");
mockConsole("error");

beforeEach(() => {
  messages.splice(0, messages.length);
  process.exitCode = 0;
});

afterAll(() => {
  process.exitCode = 0;
});

it("should throw conflict rules", () => {
  checkFixture("all");
  expect(getMessage()).toMatchSnapshot();
  expect(process.exitCode).toBe(1);
});

it("should throw parsing error for invalid config", () => {
  checkFixture("error");
  expect(getMessage()).toMatchSnapshot();
  expect(process.exitCode).toBe(1);
});

it("should show success message for non-conflict rules", () => {
  checkFixture("empty");
  expect(getMessage()).toMatchSnapshot();
  expect(process.exitCode).toBe(0);
});

it("should show success message for conflict rules that is disabled", () => {
  checkFixture("false");
  expect(getMessage()).toMatchSnapshot();
  expect(process.exitCode).toBe(0);
});

it("should show usage if there is no filePath", () => {
  checkFixture();
  expect(getMessage()).toMatchSnapshot();
  expect(process.exitCode).toBe(0);
});

it("should be able to check multiple config files", () => {
  checkFixture("all", "empty", "error");
  expect(getMessage()).toMatchSnapshot();
  expect(process.exitCode).toBe(1);
});

function mockConsole(id: keyof typeof console) {
  const mockedConsoleLog = jest
  .spyOn(console, id)
  .mockImplementation((message: string) =>
    messages.push(
      message
        .split("\n")
        .map((x) => `[${id}] ${x}`)
        .join("\n"),
    ),
  );
}

function getMessage() {
  return messages.join("\n");
}

function checkFixture(...ids: string[]) {
  const filePaths = ids.map((id) =>
    path.resolve(__dirname, `../fixtures/tslint.${id}.json`),
  );
  return check(filePaths);
}
