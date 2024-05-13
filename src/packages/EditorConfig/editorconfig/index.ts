import { ListQuestionOptions } from 'inquirer';

import { Collection } from '../../../../types';
import { QUESTION } from './question';
import { TASK } from './task';

const KEY = 'createConfig' as const;

const EDITOR_CONFIG = {
  KEY,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<ListQuestionOptions>;

export default EDITOR_CONFIG;

export type EDITOR_CONFIG_ANSWER = { [EDITOR_CONFIG.KEY]: boolean };
