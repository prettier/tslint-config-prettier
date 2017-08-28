
const transformer: jest.Transformer = { process };

export = transformer;

function process(sourceText: string, sourcePath: string) {
  return `
    const path = require('path');
    const runtime = require('../../../build/runtime');

    const filename = ${JSON.stringify(sourcePath)};
    const source = ${JSON.stringify(sourceText)};
    const formatted = runtime.format(filename, source);

    const messageNoError = 'no error\\n';
    const ruleName = path.basename(__dirname);
    const errorRegex = new RegExp('^ERROR: \\\\(' + ruleName + '\\\\)', 'gm');

    const getMatchCount = (str, regex) => {
      const result = str.match(regex);
      return result === null
        ? 0
        : result.length;
    };
    const printBeforeDfter = (before, after) => (
      '\\n<<<<<< before\\n' +
      before +
      '\\n======\\n' +
      after +
      '\\n>>>>>> after\\n'
    );

    let messageBefore = messageNoError;
    let messageAfter = messageNoError;

    try {
      runtime.lint(filename, source);
    } catch (error) {
      messageBefore = error.message;
    }

    try {
      runtime.lint(filename, formatted);
    } catch (error) {
      messageAfter = error.message;
    }

    it('should affect error message after formatting', () => {
      const errorCountBefore = getMatchCount(messageBefore, errorRegex);
      const errorCountAfter = getMatchCount(messageAfter, errorRegex);
      expect(errorCountAfter).not.toBe(errorCountBefore);
      expect(printBeforeDfter(messageBefore, messageAfter)).toMatchSnapshot();
    });

    it('should be pretty after formatting', () => {
      expect(printBeforeDfter(source, formatted)).toMatchSnapshot();
    });
  `;
}
