import { addScriptToPackageJson, execInPwd, managerRun } from '../../../../utilities/cli';
import { backupBeforeCopy, isPathExist } from '../../../../utilities/fs';
import { PWD, templateDirectory } from '../../../../utilities/fs/constants';
import { error } from '../../../../utilities/logger';

const insertScripts = () => {
  addScriptToPackageJson([['prepare', 'husky']]);

  if (isPathExist(PWD('./.git'))) {
    execInPwd(managerRun('prepare'));
    backupBeforeCopy(templateDirectory('common.sh'), PWD('./.husky/common.sh'));
  } else {
    error(
      [true, true],
      'Failed to initialize husky. Git is not initialized in this directory, run `git init` first.'
    );
  }
};

export default insertScripts;
