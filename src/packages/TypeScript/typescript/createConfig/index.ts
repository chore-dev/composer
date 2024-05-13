import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createTsConfigJson from './template';

const createConfig = () => {
  writeBeforeWrite(PWD('./tsconfig.json'), createTsConfigJson());
};

export default createConfig;
