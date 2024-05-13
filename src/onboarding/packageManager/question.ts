import { SimplifiedChoices } from '../../../types';
import { PACKAGE_MANAGERS } from '../../utilities/constants';
import { createList, createListChoice, massageChoices } from '../../utilities/inquirer';

export const CHOICES = Object.entries(PACKAGE_MANAGERS).map(([value, { label, isDefault }]) => {
  return [label, value as keyof typeof PACKAGE_MANAGERS, , isDefault] as const;
}) satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createList(
    key,
    'Which package manager do you prefer?',
    massageChoices(CHOICES).map(createListChoice)
  );
};
