import { managerInstall } from '../../../../utilities/cli';

const install = () => {
  managerInstall('@commitlint/cli @commitlint/config-conventional', true);
};

export default install;
