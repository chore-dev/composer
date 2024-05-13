import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { updateAnswers } from '../store/answers.store';
import { section } from '../utilities/section';

import ENV, { ENV_ANSWER } from './env';
import FRAMEWORK, { FRAMEWORK_ANSWER } from './framework';
import PACKAGE_MANAGER, { PACKAGE_MANAGER_ANSWER } from './packageManager';
import STYLE_SHEET, { STYLE_SHEET_ANSWER } from './styleSheet';
import SYNTAX_EXTENSION, { SYNTAX_EXTENSION_ANSWER } from './syntaxExtension';

export const onBoardingQuestions = () => {
  return section('Onboarding Questions', async () => {
    updateAnswers(
      await inquirer.prompt([
        PACKAGE_MANAGER.QUESTION,
        ENV.QUESTION,
        FRAMEWORK.QUESTION,
        SYNTAX_EXTENSION.QUESTION,
        STYLE_SHEET.QUESTION
      ])
    );
  });
};

export type ONBOARDING_ANSWERS = Prettify<
  ENV_ANSWER &
    FRAMEWORK_ANSWER &
    PACKAGE_MANAGER_ANSWER &
    STYLE_SHEET_ANSWER &
    SYNTAX_EXTENSION_ANSWER
>;
