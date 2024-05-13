import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import TYPESCRIPT, { KEY, TYPESCRIPT_ANSWER } from './typescript';

const TITLE = 'TypeScript';

export const typeScriptQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([TYPESCRIPT.QUESTION])) as TYPESCRIPT_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const typeScriptTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && TYPESCRIPT.TASK);
};

export type TYPESCRIPT_ANSWERS = Record<typeof KEY, Prettify<TYPESCRIPT_ANSWER> | false>;
