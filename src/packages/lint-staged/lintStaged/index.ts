import { CheckboxQuestionOptions } from 'inquirer';

import { CheckboxAnswers, Choice, Collection } from '../../../../types';

import { CHOICES, QUESTION } from './question';
import { TASK } from './task';

export const KEY = 'lintStaged' as const;

const LINT_STAGED = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<CheckboxQuestionOptions>;

export default LINT_STAGED;

export type LINT_STAGED_ANSWER = CheckboxAnswers<Choice<typeof LINT_STAGED>>;
