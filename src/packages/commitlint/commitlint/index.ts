import { CheckboxQuestionOptions } from 'inquirer';

import { CheckboxAnswers, Choice, Collection } from '../../../../types';

import { CHOICES, QUESTION } from './question';
import { TASK } from './task';

export const KEY = 'commitLint' as const;

const COMMIT_LINT = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<CheckboxQuestionOptions>;

export default COMMIT_LINT;

export type COMMIT_LINT_ANSWER = CheckboxAnswers<Choice<typeof COMMIT_LINT>>;
