import { getAnswers } from '../../../../store/answers.store';
import { managerInstall } from '../../../../utilities/cli';

const install = () => {
  const { framework, prettier, typescript } = getAnswers();

  const packages = [
    'eslint',
    'globals',
    '@eslint/js',
    framework === 'react' && 'eslint-plugin-react',
    framework === 'vue' && 'eslint-plugin-vue',
    prettier && 'eslint-config-prettier eslint-plugin-prettier',
    typescript && 'typescript-eslint @types/eslint__js'
  ];

  managerInstall(packages, true);
};

export default install;
