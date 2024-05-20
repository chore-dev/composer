import { getAnswers } from '../../../../store/answers.store';
import { addScriptToPackageJson, managerRun } from '../../../../utilities/cli';

const insertScripts = () => {
  const { eslint, prettier } = getAnswers();

  if (!eslint) return;

  const { createConfig } = eslint;
  const { insertScripts } = prettier || {};

  const config = createConfig ? ' --config eslint.config.js' : '';
  const runPrettier = insertScripts ? `${managerRun('prettier:fix')}; ` : '';

  const fixOptions = ' --fix --quiet';

  addScriptToPackageJson([
    ['// ESLint', '---------- ---------- ---------- ---------- ----------'],
    ['eslint', `${runPrettier}${managerRun(`eslint:no-glob .`)}`],
    ['eslint:no-glob', `eslint --cache --color${config}`],
    ['eslint:fix', managerRun(`eslint${fixOptions}`)],
    ['eslint:fix:no-glob', managerRun(`eslint:no-glob${fixOptions}`)]
  ]);
};

export default insertScripts;
