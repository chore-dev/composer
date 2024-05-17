import { SimplifiedChoices } from '../../../../types';
import { createCheckbox, createCheckboxChoice, massageChoices } from '../../../utilities/inquirer';

export const CHOICES = [
  ['Install dependencies', 'install', 'Install', true],
  ['Create commitlint.config.js', 'createConfig', 'Config', true],
  ['Integrate with Husky', 'integrate', 'Integrate', true]
] as const satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createCheckbox(
    key,
    'Please check the item(s) you need',
    massageChoices(CHOICES).map(createCheckboxChoice)
  );
};
