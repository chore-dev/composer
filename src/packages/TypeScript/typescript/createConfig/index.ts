import { backupBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createTsConfigJson from './template';

const createConfig = () => {
  backupBeforeWrite(PWD('./tsconfig.json'), createTsConfigJson());
};

export default createConfig;
