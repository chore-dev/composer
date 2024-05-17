import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createPreCommitHook from './template';

const integrate = () => {
  writeBeforeWrite(PWD('./.husky/commit-msg'), createPreCommitHook());
};

export default integrate;
