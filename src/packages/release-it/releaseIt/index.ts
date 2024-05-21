import { CheckboxQuestionOptions } from 'inquirer';

import { CheckboxAnswers, Choice, Collection } from '../../../../types';

import { CHOICES, QUESTION } from './question';
import { TASK } from './task';

export const KEY = 'releaseIt' as const;

const RELEASE_IT = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<CheckboxQuestionOptions>;

export default RELEASE_IT;

export type RELEASE_IT_ANSWER = CheckboxAnswers<Choice<typeof RELEASE_IT>>;
