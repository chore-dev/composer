import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createPreCommitHook from './template';

const integrate = () => {
  writeBeforeWrite(PWD('./.husky/pre-commit'), createPreCommitHook());
};

export default integrate;
