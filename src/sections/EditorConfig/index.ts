import inquirer from "inquirer";

import {Prettify} from "../../../types";
import {getAnswers, updateAnswers} from "../../store/answers.store";
import {section} from "../../utilities/section";

import EDITOR_CONFIG_QUESTION, {EDITOR_CONFIG_ANSWER} from "./questions/editorconfig";
import CREATE_CONFIG_TASK from "./tasks/config";

const TITLE = 'EditorConfig';

export const askEditorConfigQuestions = () => section(TITLE, async () => {
  updateAnswers({
    editorConfig: await inquirer.prompt([
      EDITOR_CONFIG_QUESTION.OPTIONS
    ]) as EDITOR_CONFIG_ANSWERS['editorConfig']
  });
});

export const doEditorConfigTasks = () => section(TITLE, () => {
  CREATE_CONFIG_TASK()
}, getAnswers().editorConfig);

export type EDITOR_CONFIG_ANSWERS = { editorConfig: Prettify<EDITOR_CONFIG_ANSWER> };
