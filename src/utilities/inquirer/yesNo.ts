import { ListQuestionOptions } from 'inquirer';

import { createListChoice } from './list';
import { basic, massageChoices } from './shared';

export const createYesNo = (
  key: string,
  question: string,
  defaultNo: boolean = false
): ListQuestionOptions => ({
  ...basic('list', key, question),
  choices: massageChoices([
    ['Yes', 'yes'],
    ['No', 'no']
  ]).map(createListChoice),
  default: defaultNo ? 1 : 0,
  filter: value => value.toLowerCase() === 'yes',
  loop: true
});
