import { CheckboxQuestionOptions } from 'inquirer';

import { CheckboxAnswers, Choice, Collection } from '../../../types';

import { CHOICES, QUESTION } from './question';

const KEY = 'env' as const;

const ENV = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY)
} as const satisfies Collection<CheckboxQuestionOptions>;

export default ENV;

export type ENV_ANSWER = Record<typeof ENV.KEY, CheckboxAnswers<Choice<typeof ENV>>>;
