import { managerInstall } from '../../../../utilities/cli';

const install = () => {
  managerInstall('@commitlint/cli @commitlint/config-conventional');
};

export default install;
