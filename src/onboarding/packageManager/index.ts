import { ListQuestionOptions } from 'inquirer';

import { Choice, Collection } from '../../../types';

import { CHOICES, QUESTION } from './question';

const KEY = 'packageManager' as const;

const PACKAGE_MANAGER = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY)
} as const satisfies Collection<ListQuestionOptions>;

export default PACKAGE_MANAGER;

export type PACKAGE_MANAGER_ANSWER = Record<
  typeof PACKAGE_MANAGER.KEY,
  Choice<typeof PACKAGE_MANAGER>
>;
