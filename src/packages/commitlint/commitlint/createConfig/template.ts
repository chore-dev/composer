import { exportByPackageType, indent, lines } from '../../../../utilities/document';

// Read https://commitlint.js.org/reference/configuration.html for more information about commitlint.config.js
const createCommitLintConfig = () => {
  return lines([
    'const config = {',
    indent(`extends: ['@commitlint/config-conventional']`),
    '};',
    '',
    exportByPackageType('config')
  ]);
};

export default createCommitLintConfig;
