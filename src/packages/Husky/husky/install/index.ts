import { managerInstall } from '../../../../utilities/cli';

const install = () => {
  managerInstall([`husky`], true);
};

export default install;
