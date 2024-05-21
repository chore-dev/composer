import { CheckboxQuestionOptions } from 'inquirer';

import { CheckboxAnswers, Choice, Collection } from '../../../../types';

import { CHOICES, QUESTION } from './question';
import { TASK } from './task';

export const KEY = 'git' as const;

const GIT = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<CheckboxQuestionOptions>;

export default GIT;

export type GIT_ANSWER = CheckboxAnswers<Choice<typeof GIT>>;
