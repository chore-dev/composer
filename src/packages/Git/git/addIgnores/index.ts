import { backupBeforeCopy } from '../../../../utilities/fs';
import { PWD, templateDirectory } from '../../../../utilities/fs/constants';

const addIgnores = () => {
  backupBeforeCopy(templateDirectory('.gitignore'), PWD('./.gitignore'));
};

export default addIgnores;
