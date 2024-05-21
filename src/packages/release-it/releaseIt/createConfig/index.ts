import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createReleaseItConfig from './template';

const createConfig = () => {
  writeBeforeWrite(PWD('./.release-it.js'), createReleaseItConfig());
};

export default createConfig;
