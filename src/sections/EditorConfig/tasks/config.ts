import {getAnswers} from "../../../store/answers.store";
import {backupBeforeCopy} from "../../../utilities/fs";
import {pwd, templateDirectory} from "../../../utilities/fs/constants";

const CREATE_CONFIG_TASK = () => {
  const {editorConfig} = getAnswers();

  if (editorConfig.createEditorConfig) {
    backupBeforeCopy(templateDirectory('EditorConfig', '.editorconfig'), pwd('./.editorconfig'));
  }
}

export default CREATE_CONFIG_TASK;
