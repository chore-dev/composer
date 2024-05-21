import { backupBeforeCopy } from '../../../../utilities/fs';
import { PWD, templateDirectory } from '../../../../utilities/fs/constants';

const addIgnores = () => {
  backupBeforeCopy(templateDirectory('.gitignore-template'), PWD('./.gitignore'));
};

export default addIgnores;
