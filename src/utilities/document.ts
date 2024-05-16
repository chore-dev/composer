import { readPackageJson } from './fs';

export const condition = <Value = unknown>(condition: unknown, value: Value) => {
  return condition ? value : undefined;
};

export const exportByPackageType = (variable: string) => {
  return `${readPackageJson().type === 'module' ? 'export default' : 'module.exports ='} ${variable};`;
};

export const indent = (
  sentences: Array<string | undefined | Array<string | undefined>> | string | undefined,
  spaces = 1
) => {
  const content = Array.isArray(sentences) ? lines(sentences) : sentences;

  if (!content) return content;

  return content
    .split('\n')
    .map(line => `${' '.repeat(spaces * 2)}${line}`)
    .join('\n');
};

export const lines = (sentences: Array<string | undefined | Array<string | undefined>>) => {
  return sentences
    .flat()
    .filter(s => s || (!s && s === ''))
    .join('\n');
};
