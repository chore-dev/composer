import {ListQuestionOptions} from "inquirer";

import {Question} from "../../../../types";
import {createYesNo} from "../../../utilities/inquirer";

const KEY = 'createEditorConfig' as const;

const EDITOR_CONFIG_QUESTION = {
  KEY,
  OPTIONS: createYesNo(KEY, 'Do you want to create .editorconfig?')
} as const satisfies Question<ListQuestionOptions>

export default EDITOR_CONFIG_QUESTION;

export type EDITOR_CONFIG_ANSWER = { [EDITOR_CONFIG_QUESTION.KEY]: boolean };
