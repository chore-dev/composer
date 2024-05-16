import { SimplifiedChoices } from '../../../types';
import { createList, createListChoice, massageChoices } from '../../utilities/inquirer';

export const CHOICES = [
  ['React', 'react', undefined, true],
  ['Vue.js', 'vue'],
  ['Non of these', 'none']
] as const satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createList(
    key,
    'Which framework does your project use?',
    massageChoices(CHOICES).map(createListChoice)
  );
};
