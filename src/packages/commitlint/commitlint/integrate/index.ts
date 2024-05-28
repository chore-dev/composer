import { getAnswers } from '../../../../store/answers.store';
import { managerRun } from '../../../../utilities/cli';
import { backupBeforeWrite, isPathExist } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';
import { error } from '../../../../utilities/logger';

import createCommitMsgHook from './template';

const integrate = () => {
  const { husky } = getAnswers();

  if (!husky) return;

  if (isPathExist(PWD('./.husky'))) {
    backupBeforeWrite(PWD('./.husky/commit-msg'), createCommitMsgHook());
  } else {
    error(
      [true, true],
      `Failed to integrate with Husky. Husky is not initialized in this directory, run \`${managerRun('prepare')}\` first.`
    );
  }
};

export default integrate;
