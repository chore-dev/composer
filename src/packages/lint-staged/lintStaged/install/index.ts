import { managerInstall } from '../../../../utilities/cli';

const install = () => {
  managerInstall('lint-staged @types/lint-staged', true);
};

export default install;
