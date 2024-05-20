import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createCommitMsgHook from './template';

const integrate = () => {
  writeBeforeWrite(PWD('./.husky/commit-msg'), createCommitMsgHook());
};

export default integrate;
