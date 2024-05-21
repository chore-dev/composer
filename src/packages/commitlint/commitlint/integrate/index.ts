import { getAnswers } from '../../../../store/answers.store';
import { backupBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createCommitMsgHook from './template';

const integrate = () => {
  const { husky } = getAnswers();

  if (!husky) return;

  backupBeforeWrite(PWD('./.husky/commit-msg'), createCommitMsgHook());
};

export default integrate;
