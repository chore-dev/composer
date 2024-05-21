import { backupBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createLintStagedConfig from './template';

const createConfig = () => {
  backupBeforeWrite(PWD('./lint-staged.config.js'), createLintStagedConfig());
};

export default createConfig;
