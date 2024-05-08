import { getAnswers } from '../../../store/answers.store';
import { backupBeforeCopy } from '../../../utilities/fs';
import { PWD, templateDirectory } from '../../../utilities/fs/constants';

const CREATE_CONFIG_TASK = () => {
  const { editorConfig } = getAnswers();

  if (editorConfig.createConfig) {
    backupBeforeCopy(templateDirectory('EditorConfig', '.editorconfig'), PWD('./.editorconfig'));
  }
};

export default CREATE_CONFIG_TASK;
