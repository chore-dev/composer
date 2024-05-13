import { CheckboxQuestionOptions } from 'inquirer';

import { CheckboxAnswers, Choice, Collection } from '../../../../types';

import { CHOICES, QUESTION } from './question';
import { TASK } from './task';

export const KEY = 'typescript' as const;

const TYPESCRIPT = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<CheckboxQuestionOptions>;

export default TYPESCRIPT;

export type TYPESCRIPT_ANSWER = CheckboxAnswers<Choice<typeof TYPESCRIPT>>;
