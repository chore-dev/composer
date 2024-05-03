import {ListQuestionOptions} from "inquirer";

import {Question, SimplifiedChoices, ValueOfChoices} from "../../../../types";
import {createList, createListChoice, massageChoices} from "../../../utilities/inquirer";

const KEY = 'packageManager' as const;

const CHOICES = [
  ['npm', 'npm'],
  ['PNPm', 'pnpm'],
  ['Yarn', 'yarn', , true]
] as const satisfies SimplifiedChoices;

const PACKAGE_MANAGER_QUESTION = {
  KEY,
  CHOICES,
  OPTIONS: createList(KEY, 'Which package manager do you prefer?', massageChoices(CHOICES).map(createListChoice))
} as const satisfies Question<ListQuestionOptions>

export default PACKAGE_MANAGER_QUESTION;

export type PACKAGE_MANAGER_ANSWER = {
  [PACKAGE_MANAGER_QUESTION.KEY]: ValueOfChoices<typeof PACKAGE_MANAGER_QUESTION>;
};
