import { getAnswers } from '../../../../store/answers.store';
import { PACKAGE_MANAGERS } from '../../../../utilities/constants';

const createCommitMsgHook = () => {
  return [
    '. "$(dirname -- "$0")/common.sh"',
    '',
    `${PACKAGE_MANAGERS[getAnswers().packageManager].scripts.execute} commitlint --edit $1`
  ].join('\n');
};

export default createCommitMsgHook;
