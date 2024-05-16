import { SimplifiedChoices } from '../../../types';
import { createCheckbox, createCheckboxChoice, massageChoices } from '../../utilities/inquirer';

export const CHOICES = [
  ['Browser', 'isBrowser', undefined, true],
  ['Node', 'isNode']
] as const satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createCheckbox(
    key,
    'Where does your code run?',
    massageChoices(CHOICES).map(createCheckboxChoice)
  );
};
