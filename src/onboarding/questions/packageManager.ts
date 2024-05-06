import {ListQuestionOptions} from "inquirer";

import {Question, SimplifiedChoices, ValueOfChoices} from "../../../types";
import {PACKAGE_MANAGERS} from "../../utilities/constants";
import {createList, createListChoice, massageChoices} from "../../utilities/inquirer";

const KEY = 'packageManager' as const;

const CHOICES = Object.entries(PACKAGE_MANAGERS).map(([value, {
  label,
  isDefault
}]) => [label, value as keyof typeof PACKAGE_MANAGERS, , isDefault] as const) satisfies SimplifiedChoices;

const PACKAGE_MANAGER_QUESTION = {
  KEY,
  CHOICES,
  OPTIONS: createList(KEY, 'Which package manager do you prefer?', massageChoices(CHOICES).map(createListChoice))
} as const satisfies Question<ListQuestionOptions>

export default PACKAGE_MANAGER_QUESTION;

export type PACKAGE_MANAGER_ANSWER = {
  [PACKAGE_MANAGER_QUESTION.KEY]: ValueOfChoices<typeof PACKAGE_MANAGER_QUESTION>;
};
