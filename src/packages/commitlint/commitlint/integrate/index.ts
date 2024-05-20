import { getAnswers } from '../../../../store/answers.store';
import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createCommitMsgHook from './template';

const integrate = () => {
  const { husky } = getAnswers();

  if (!husky) return;

  writeBeforeWrite(PWD('./.husky/commit-msg'), createCommitMsgHook());
};

export default integrate;
