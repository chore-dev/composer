import { ListQuestionOptions } from 'inquirer';

import { Choice, Collection } from '../../../types';

import { CHOICES, QUESTION } from './question';

const KEY = 'framework' as const;

const FRAMEWORK = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY)
} as const satisfies Collection<ListQuestionOptions>;

export default FRAMEWORK;

export type FRAMEWORK_ANSWER = Record<typeof FRAMEWORK.KEY, Choice<typeof FRAMEWORK>>;
