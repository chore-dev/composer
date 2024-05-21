import { backupBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createESLintConfig from './template';

const createConfig = () => {
  backupBeforeWrite(PWD('./eslint.config.js'), createESLintConfig());
};

export default createConfig;
