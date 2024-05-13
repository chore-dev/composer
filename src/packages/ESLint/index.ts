import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import ESLINT, { ESLINT_ANSWER, KEY } from './eslint';

const TITLE = 'ESLint';

export const esLintQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([ESLINT.QUESTION])) as ESLINT_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const esLintTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && ESLINT.TASK);
};

export type ESLINT_ANSWERS = Record<typeof KEY, Prettify<ESLINT_ANSWER> | false>;
