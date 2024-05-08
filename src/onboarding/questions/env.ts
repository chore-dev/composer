import { CheckboxQuestionOptions } from 'inquirer';

import { AnswerOfCheckbox, Question, SimplifiedChoices, ValueOfChoices } from '../../../types';
import { createCheckbox, createCheckboxChoice, massageChoices } from '../../utilities/inquirer';

const KEY = 'env' as const;

const CHOICES = [
  ['Browser', 'isBrowser', , true],
  ['Node', 'isNode']
] as const satisfies SimplifiedChoices;

const ENV_QUESTION = {
  KEY,
  CHOICES,
  OPTIONS: createCheckbox(
    KEY,
    'Where does your code run?',
    massageChoices(CHOICES).map(createCheckboxChoice)
  )
} as const satisfies Question<CheckboxQuestionOptions>;

export default ENV_QUESTION;

export type ENV_ANSWER = {
  [ENV_QUESTION.KEY]: AnswerOfCheckbox<ValueOfChoices<typeof ENV_QUESTION>>;
};
