import { SimplifiedChoices } from '../../../../types';
import { createCheckbox, createCheckboxChoice, massageChoices } from '../../../utilities/inquirer';

export const CHOICES = [
  ['Create .dockerignore', 'addIgnores', 'Ignores', true]
] as const satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createCheckbox(
    key,
    'Please check the item(s) you need',
    massageChoices(CHOICES).map(createCheckboxChoice)
  );
};
