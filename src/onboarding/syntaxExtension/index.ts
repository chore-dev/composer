import { ListQuestionOptions } from 'inquirer';

import { Collection } from '../../../types';

import { QUESTION } from './question';

const KEY = 'withSyntaxExtension' as const;

const SYNTAX_EXTENSION = {
  KEY,
  QUESTION: QUESTION(KEY)
} as const satisfies Collection<ListQuestionOptions>;

export default SYNTAX_EXTENSION;

export type SYNTAX_EXTENSION_ANSWER = Record<typeof SYNTAX_EXTENSION.KEY, boolean>;
