import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import PRETTIER, { KEY, PRETTIER_ANSWER } from './prettier';

const TITLE = 'Prettier';

export const prettierQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([PRETTIER.QUESTION])) as PRETTIER_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const prettierTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && PRETTIER.TASK);
};

export type PRETTIER_ANSWERS = Record<typeof KEY, Prettify<PRETTIER_ANSWER> | false>;
