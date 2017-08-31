import * as path from "path";
import { check } from "./checker";

expect.addSnapshotSerializer({
  print: (value: string, serializer) => serializer(value.replace(process.cwd(), "<cwd>")),
  test: (value) => typeof value === "string" && value.indexOf(process.cwd()) !== -1,
});

const mockedConsoleLog = jest.spyOn(console, "log");

beforeEach(() => {
  mockedConsoleLog.mockReset();
});

it("should throw conflict rules", () => {
  expect(() => checkFixture("all")).toThrowErrorMatchingSnapshot();
});

it("should throw parsing error for invalid config", () => {
  expect(() => checkFixture("error")).toThrowErrorMatchingSnapshot();
});

it("should show success message for non-conflict rules", () => {
  checkFixture("empty");
  expect(mockedConsoleLog.mock.calls[0][0]).toMatchSnapshot();
});

it("should show success message for conflict rules that is disabled", () => {
  checkFixture("false");
  expect(mockedConsoleLog.mock.calls[0][0]).toMatchSnapshot();
});

it("should throw error if input is not a string", () => {
  expect(() => check(undefined!)).toThrowErrorMatchingSnapshot();
});

function checkFixture(id: string) {
  const filePath = path.resolve(__dirname, `../fixtures/tslint.${id}.json`);
  return check(filePath);
}
