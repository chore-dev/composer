import { CheckboxQuestionOptions } from 'inquirer';
import { CheckboxAnswers, Choice, Collection } from '../../../../types';

import { CHOICES, QUESTION } from './question';
import { TASK } from './task';

export const KEY = 'husky' as const;

const HUSKY = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<CheckboxQuestionOptions>;

export default HUSKY;

export type HUSKY_ANSWER = CheckboxAnswers<Choice<typeof HUSKY>>;
