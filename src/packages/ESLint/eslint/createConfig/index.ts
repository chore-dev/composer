import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createESLintConfig from './template';

const createConfig = () => {
  writeBeforeWrite(PWD('./eslint.config.js'), createESLintConfig());
};

export default createConfig;
