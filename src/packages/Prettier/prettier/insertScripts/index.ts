import { getAnswers } from '../../../../store/answers.store';
import { addScriptToPackageJson, managerRun } from '../../../../utilities/cli';

const insertScripts = () => {
  const { env, framework, prettier, styleSheet, typescript, withSyntaxExtension } = getAnswers();

  if (!prettier) return;

  const { addIgnores, createConfig } = prettier;

  const config = createConfig ? ' --config .prettier.config.js' : '';
  const ignore = addIgnores ? ' --ignore-path .prettierignore' : '';

  const extensions = [
    styleSheet !== 'none' && (styleSheet === 'scss' ? '?(s)css' : 'css'),
    env.isBrowser && ['html'],
    withSyntaxExtension ? 'js' : 'js?(x)',
    !!typescript && (withSyntaxExtension ? 'ts' : 'ts?(x)'),
    framework === 'vue' && 'vue',
    'json'
  ]
    .flat()
    .filter(Boolean)
    .join(',');

  const fixOptions = ' -w';

  addScriptToPackageJson([
    ['// Prettier', '---------- ---------- ---------- ---------- ----------'],
    ['prettier', managerRun('prettier:base -c')],
    ['prettier:base', managerRun(`prettier:base:no-glob './**/*.{${extensions}}'`)],
    ['prettier:base:no-glob', `prettier --cache${config}${ignore} --ignore-unknown`],
    ['prettier:fix', managerRun(`prettier:base${fixOptions}`)],
    ['prettier:fix:no-glob', managerRun(`prettier:base:no-glob${fixOptions}`)]
  ]);
};

export default insertScripts;
