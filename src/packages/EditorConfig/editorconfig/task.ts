import { getAnswers } from '../../../store/answers.store';
import { backupBeforeCopy } from '../../../utilities/fs';
import { PWD, templateDirectory } from '../../../utilities/fs/constants';

export const TASK = () => {
  const { editorConfig } = getAnswers();

  if (editorConfig.createConfig) {
    backupBeforeCopy(templateDirectory('.editorconfig'), PWD('./.editorconfig'));
  }
};
