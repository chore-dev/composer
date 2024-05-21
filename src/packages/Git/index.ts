import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import GIT, { GIT_ANSWER, KEY } from './git';

const TITLE = 'Git';

export const gitQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([GIT.QUESTION])) as GIT_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const gitTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && GIT.TASK);
};

export type GIT_ANSWERS = Record<typeof KEY, Prettify<GIT_ANSWER> | false>;
