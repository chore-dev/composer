import {ListQuestionOptions} from "inquirer";

import {Question, SimplifiedChoices, ValueOfChoices} from "../../../../types";
import {createList, createListChoice, massageChoices} from "../../../utilities/inquirer";

const KEY = 'framework' as const;

const CHOICES = [
  ['React', 'react', , true],
  ['Vue', 'vue'],
  ['Non of the above', 'none']
] as const satisfies SimplifiedChoices;

const FRAMEWORK_QUESTION = {
  KEY,
  CHOICES,
  OPTIONS: createList(KEY, 'Which framework do your prefer?', massageChoices(CHOICES).map(createListChoice))
} as const satisfies Question<ListQuestionOptions>

export default FRAMEWORK_QUESTION;

export type FRAMEWORK_ANSWER = {
  [FRAMEWORK_QUESTION.KEY]: ValueOfChoices<typeof FRAMEWORK_QUESTION>;
};
