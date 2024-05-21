import { backupBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createCommitLintConfig from './template';

const createConfig = () => {
  backupBeforeWrite(PWD('./commitlint.config.js'), createCommitLintConfig());
};

export default createConfig;
