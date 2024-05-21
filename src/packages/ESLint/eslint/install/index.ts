import { getAnswers } from '../../../../store/answers.store';
import { managerInstall } from '../../../../utilities/cli';

// NOTE: Fixing the version to 8 because of the following reasons:
//       1. ESLint v9 contains breaking API changes
//       2. The eslint-plugin-react plugin is not compatible with ESLint v9
//
// Monitor https://github.com/jsx-eslint/eslint-plugin-react/issues/3699 and
//         https://github.com/jsx-eslint/eslint-plugin-react/pull/3727 for updates
const FIXED_VERSION = '@8';

const install = () => {
  const { framework, prettier } = getAnswers();

  const packages = [
    // NOTE: You may ask why are you installing "typescript-eslint" and "@types/eslint__js" without checking if the user is using TypeScript?
    //       It's because ESLint is missing a well typed configuration for JavaScript,
    //       So we use "typescript-eslint" to provide autocomplete and documentation for all config properties to prevent invalid configurations.
    //       In the simplest terms, this improves the developer experience.
    `eslint${FIXED_VERSION} globals typescript-eslint @eslint/js${FIXED_VERSION} @types/eslint__js${FIXED_VERSION}`,
    framework === 'react' && 'eslint-plugin-react @types/eslint-plugin-react',
    framework === 'vue' && 'eslint-plugin-vue',
    prettier && 'eslint-config-prettier eslint-plugin-prettier'
  ];

  managerInstall(packages, true);
};

export default install;
