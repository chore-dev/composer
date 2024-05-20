import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createLintStagedConfig from './template';

const createConfig = () => {
  writeBeforeWrite(PWD('./lint-staged.config.js'), createLintStagedConfig());
};

export default createConfig;
