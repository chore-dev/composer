import chalk, { ChalkInstance } from 'chalk';

const CONSOLE = console;

let avoidDuplicateLinebreak = false;

export const underline = chalk.underline;

const loggerBuilder = (prefix = '', chalk?: ChalkInstance) => {
  return (linebreak: [boolean, boolean?], ...args: unknown[]) => {
    const [before, after = false] = linebreak;

    if (!avoidDuplicateLinebreak && before) CONSOLE.log('');
    if (chalk) {
      CONSOLE.log(chalk(...[...(prefix ? [`[${prefix}]`] : []), ...args]));
    } else {
      CONSOLE.log(...[...(prefix ? [`[${prefix}]`] : []), ...args]);
    }
    if (after) CONSOLE.log('');

    avoidDuplicateLinebreak = after;
  };
};

export const box = (
  logger: ReturnType<typeof loggerBuilder>,
  linebreak: [boolean, boolean?],
  lines: Array<string>
) => {
  const [before, after = false] = linebreak;

  const maxLength = Math.max(...lines.map(line => line.length));
  const horizontalLine = `+${'-'.repeat(maxLength + 2)}+`;

  logger([before], horizontalLine);
  lines.forEach(line => {
    logger([false], `| ${line}${' '.repeat(maxLength - line.length)} |`);
  });
  logger([false, after], horizontalLine);
};

export const error = loggerBuilder('ERROR', chalk.red.bold);
export const log = loggerBuilder();
export const task = loggerBuilder('TASK', chalk.cyan.bold);
export const warn = loggerBuilder('WARNING', chalk.yellow.bold);
