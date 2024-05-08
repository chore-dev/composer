import { ListQuestionOptions } from 'inquirer';

import { Question, SimplifiedChoices, ValueOfChoices } from '../../../types';
import { createList, createListChoice, massageChoices } from '../../utilities/inquirer';

const KEY = 'styleSheet' as const;

const CHOICES = [
  ['CSS', 'css'],
  ['SCSS', 'scss', , true],
  ['No style sheet needed', 'none']
] as const satisfies SimplifiedChoices;

const STYLE_SHEET_QUESTION = {
  KEY,
  CHOICES,
  OPTIONS: createList(
    KEY,
    'Which style sheet system do you prefer?',
    massageChoices(CHOICES).map(createListChoice)
  )
} as const satisfies Question<ListQuestionOptions>;

export default STYLE_SHEET_QUESTION;

export type STYLE_SHEET_ANSWER = {
  [STYLE_SHEET_QUESTION.KEY]: ValueOfChoices<typeof STYLE_SHEET_QUESTION>;
};
