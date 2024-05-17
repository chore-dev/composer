import { getAnswers } from '../../../../store/answers.store';
import { PACKAGE_MANAGERS } from '../../../../utilities/constants';

const createPreCommitHook = () => {
  return [
    '#!/usr/bin/env sh',
    '',
    '. "$(dirname -- "$0")/_/husky.sh"',
    '. "$(dirname -- "$0")/common.sh"',
    '',
    `${PACKAGE_MANAGERS[getAnswers().packageManager].scripts.commitLint} commitlint --edit $1`
  ].join('\n');
};

export default createPreCommitHook;
