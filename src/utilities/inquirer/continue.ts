import inquirer from 'inquirer';

import { createYesNo } from './yesNo';

export const shouldContinue = async (
  question = 'Continue?',
  defaultNo = true
): Promise<boolean> => {
  return (await inquirer.prompt([createYesNo('continue', question, defaultNo)])).continue;
};
