import { backupBeforeCopy } from '../../../../utilities/fs';
import { PWD, templateDirectory } from '../../../../utilities/fs/constants';

const addIgnores = () => {
  backupBeforeCopy(templateDirectory('.prettierignore'), PWD('./.prettierignore'));
};

export default addIgnores;
