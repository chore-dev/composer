import { backupBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createReleaseItConfig from './template';

const createConfig = () => {
  backupBeforeWrite(PWD('./.release-it.json'), createReleaseItConfig());
};

export default createConfig;
