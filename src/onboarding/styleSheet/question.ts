import { SimplifiedChoices } from '../../../types';
import { createList, createListChoice, massageChoices } from '../../utilities/inquirer';

export const CHOICES = [
  ['CSS', 'css'],
  ['SCSS', 'scss', undefined, true],
  ['No style sheet needed', 'none']
] as const satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createList(
    key,
    'Which style sheet system do you prefer?',
    massageChoices(CHOICES).map(createListChoice)
  );
};
