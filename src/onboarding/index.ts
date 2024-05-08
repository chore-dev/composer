import inquirer from 'inquirer';

import { Prettify } from '../../types';
import { updateAnswers } from '../store/answers.store';
import { section } from '../utilities/section';

import ENV_QUESTION, { ENV_ANSWER } from './questions/env';
import FRAMEWORK_QUESTION, { FRAMEWORK_ANSWER } from './questions/framework';
import PACKAGE_MANAGER_QUESTION, { PACKAGE_MANAGER_ANSWER } from './questions/packageManager';
import STYLE_SHEET_QUESTION, { STYLE_SHEET_ANSWER } from './questions/styleSheet';
import SYNTAX_EXTENSION_QUESTION, { SYNTAX_EXTENSION_ANSWER } from './questions/syntaxExtension';

export const askOnBoardingQuestions = () =>
  section('Onboarding Questions', async () => {
    updateAnswers(
      await inquirer.prompt([
        PACKAGE_MANAGER_QUESTION.OPTIONS,
        ENV_QUESTION.OPTIONS,
        FRAMEWORK_QUESTION.OPTIONS,
        SYNTAX_EXTENSION_QUESTION.OPTIONS,
        STYLE_SHEET_QUESTION.OPTIONS
      ])
    );
  });

export type ONBOARDING_ANSWERS = Prettify<
  ENV_ANSWER &
    FRAMEWORK_ANSWER &
    PACKAGE_MANAGER_ANSWER &
    STYLE_SHEET_ANSWER &
    SYNTAX_EXTENSION_ANSWER
>;
