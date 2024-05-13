import { SimplifiedChoices } from '../../../types';
import { createList, createListChoice, massageChoices } from '../../utilities/inquirer';

export const CHOICES = [
  ['React', 'react', , true],
  ['Vue', 'vue'],
  ['Non of the above', 'none']
] as const satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createList(
    key,
    'Which framework do your prefer?',
    massageChoices(CHOICES).map(createListChoice)
  );
};
