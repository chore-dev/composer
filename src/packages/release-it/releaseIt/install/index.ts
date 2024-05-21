import { managerInstall } from '../../../../utilities/cli';

const install = () => {
  managerInstall('release-it @release-it/conventional-changelog', true);
};

export default install;
