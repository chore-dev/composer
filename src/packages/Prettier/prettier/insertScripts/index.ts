import { getAnswers } from '../../../../store/answers.store';
import { addScriptToPackageJson, managerRun } from '../../../../utilities/cli';

const insertScripts = () => {
  const { env, prettier, styleSheet, typescript, withSyntaxExtension } = getAnswers();

  if (!prettier) return;

  const { addIgnores, createConfig } = prettier;

  const config = createConfig ? ' --config .prettier.config.js' : '';
  const ignore = addIgnores ? ' --ignore-path .prettierignore' : '';

  const extensions = [
    styleSheet !== 'none' && (styleSheet === 'scss' ? '?(s)css' : 'css'),
    env.isBrowser && ['html'],
    withSyntaxExtension ? 'js' : 'js?(x)',
    !!typescript && (withSyntaxExtension ? 'ts' : 'ts?(x)'),
    'json'
  ]
    .flat()
    .filter(Boolean)
    .join(',');

  addScriptToPackageJson([
    ['// Prettier', '---------- ---------- ---------- ---------- ----------'],
    ['prettier', managerRun('prettier:base -c')],
    ['prettier:base', `prettier './**/*.{${extensions}}' --cache${config}${ignore}`],
    ['prettier:fix', managerRun('prettier:base -w')]
  ]);

  // TODO: Add prettier & lint script
};

export default insertScripts;
