import { SimplifiedChoices } from '../../../../types';
import { createCheckbox, createCheckboxChoice, massageChoices } from '../../../utilities/inquirer';

export const CHOICES = [
  ['Install dependencies', 'install', 'Install', true],
  ['Insert scripts', 'insertScripts', 'Scripts', true],
  ['Create .prettier.config.js', 'createConfig', 'Config', true],
  ['Create .prettierignore', 'addIgnores', 'Ignores', true]
] as const satisfies SimplifiedChoices;

export const QUESTION = (key: string) => {
  return createCheckbox(
    key,
    'Please check the item(s) you need',
    massageChoices(CHOICES).map(createCheckboxChoice)
  );
};
