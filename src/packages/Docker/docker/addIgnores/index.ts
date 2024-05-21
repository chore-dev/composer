import { backupBeforeCopy } from '../../../../utilities/fs';
import { PWD, templateDirectory } from '../../../../utilities/fs/constants';

const addIgnores = () => {
  backupBeforeCopy(templateDirectory('.dockerignore'), PWD('./.dockerignore'));
};

export default addIgnores;
