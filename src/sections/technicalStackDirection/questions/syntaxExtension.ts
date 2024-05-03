import {ListQuestionOptions} from "inquirer";

import {Question} from "../../../../types";
import {createYesNo} from "../../../utilities/inquirer";

const KEY = 'withSyntaxExtension' as const;

const SYNTAX_EXTENSION_QUESTION = {
  KEY,
  OPTIONS: createYesNo(KEY, 'Do you use JS/TS syntax extension(JSX/TSX)?')
} as const satisfies Question<ListQuestionOptions>

export default SYNTAX_EXTENSION_QUESTION;

export type SYNTAX_EXTENSION_ANSWER = { [SYNTAX_EXTENSION_QUESTION.KEY]: boolean };
