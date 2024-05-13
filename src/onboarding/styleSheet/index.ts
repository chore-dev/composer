import { ListQuestionOptions } from 'inquirer';

import { Choice, Collection } from '../../../types';

import { CHOICES, QUESTION } from './question';

const KEY = 'styleSheet' as const;

const STYLE_SHEET = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY)
} as const satisfies Collection<ListQuestionOptions>;

export default STYLE_SHEET;

export type STYLE_SHEET_ANSWER = Record<typeof STYLE_SHEET.KEY, Choice<typeof STYLE_SHEET>>;
