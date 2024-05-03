import {CheckboxQuestionOptions} from "inquirer";

import {AnswerOfCheckbox, Question, SimplifiedChoices, ValueOfChoices} from "../../../../types";
import {createCheckbox, createCheckboxChoice, massageChoices} from "../../../utilities/inquirer";

const KEY = 'typescript' as const;

const CHOICES = [
  ['Install dependencies', 'install', 'Install', true],
  ['Create tsconfig.json', 'createConfig', 'Config', true]
] as const satisfies SimplifiedChoices;

const TYPESCRIPT_QUESTION = {
  KEY,
  CHOICES,
  OPTIONS: createCheckbox(KEY, 'Please check the item(s) you need', massageChoices(CHOICES).map(createCheckboxChoice))
} as const satisfies Question<CheckboxQuestionOptions>

export default TYPESCRIPT_QUESTION;

export type TYPESCRIPT_ANSWER = AnswerOfCheckbox<ValueOfChoices<typeof TYPESCRIPT_QUESTION>>;
