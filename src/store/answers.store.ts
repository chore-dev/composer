import {Prettify} from "../../types";
import {EDITOR_CONFIG_ANSWERS} from "../sections/EditorConfig";
import {TECHNICAL_STACK_DIRECTION_ANSWERS} from "../sections/technicalStackDirection";
import {TYPESCRIPT_ANSWERS} from "../sections/TypeScript";

let ANSWERS = {} as Answers;

export const getAnswers = () => ANSWERS;

export const updateAnswers = (answers: Partial<Answers>): void => {
  ANSWERS = {...ANSWERS, ...answers};
}

export type Answers = Prettify<TECHNICAL_STACK_DIRECTION_ANSWERS & EDITOR_CONFIG_ANSWERS & TYPESCRIPT_ANSWERS>
