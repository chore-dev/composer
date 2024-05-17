import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import HUSKY, { HUSKY_ANSWER, KEY } from './husky';

const TITLE = 'Husky';

export const huskyQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([HUSKY.QUESTION])) as HUSKY_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const huskyTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && HUSKY.TASK);
};

export type HUSKY_ANSWERS = Record<typeof KEY, Prettify<HUSKY_ANSWER> | false>;
