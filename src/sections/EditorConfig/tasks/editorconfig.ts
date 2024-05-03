import {getAnswers} from "../../../store/answers.store";
import {backupBeforeCopy} from "../../../utilities/fs";
import {pwd, templateDirectory} from "../../../utilities/fs/constants";

const EDITOR_CONFIG_TASK = () => {
  const {editorConfig} = getAnswers();

  if (editorConfig.createEditorConfig) {
    backupBeforeCopy(templateDirectory('EditorConfig', '.editorconfig'), pwd('./.editorconfig'));
  }
}

export default EDITOR_CONFIG_TASK;
