import { getAnswers } from '../../../../store/answers.store';
import { PACKAGE_MANAGERS } from '../../../../utilities/constants';

const createPreCommitHook = () => {
  const { lintStaged } = getAnswers();
  const { createConfig } = lintStaged || {};

  const config = createConfig ? ' --config lint-staged.config.js' : '';

  return [
    '#!/usr/bin/env sh',
    '',
    '. "$(dirname -- "$0")/_/husky.sh"',
    '. "$(dirname -- "$0")/common.sh"',
    '',
    `${PACKAGE_MANAGERS[getAnswers().packageManager].scripts.execute} lint-staged${config}`
  ].join('\n');
};

export default createPreCommitHook;
