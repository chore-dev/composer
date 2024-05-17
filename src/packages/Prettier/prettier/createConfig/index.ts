import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createPrettierConfig from './template';

const createConfig = () => {
  writeBeforeWrite(PWD('./.prettier.config.js'), createPrettierConfig());
};

export default createConfig;
