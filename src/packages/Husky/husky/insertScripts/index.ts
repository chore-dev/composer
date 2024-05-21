import { addScriptToPackageJson, execInPwd, managerRun } from '../../../../utilities/cli';
import { backupBeforeCopy } from '../../../../utilities/fs';
import { PWD, templateDirectory } from '../../../../utilities/fs/constants';

const insertScripts = () => {
  addScriptToPackageJson([['prepare', 'husky']]);
  execInPwd(managerRun('prepare'));
  backupBeforeCopy(templateDirectory('common.sh'), PWD('./.husky/common.sh'));
};

export default insertScripts;
