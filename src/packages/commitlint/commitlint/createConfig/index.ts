import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createCommitLintConfig from './template';

const createConfig = () => {
  writeBeforeWrite(PWD('./commitlint.config.js'), createCommitLintConfig());
};

export default createConfig;
