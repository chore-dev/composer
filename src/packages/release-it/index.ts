import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import RELEASE_IT, { KEY, RELEASE_IT_ANSWER } from './releaseIt';

const TITLE = 'release-it';

export const releaseItQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([RELEASE_IT.QUESTION])) as RELEASE_IT_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const releaseItTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && RELEASE_IT.TASK);
};

export type RELEASE_IT_ANSWERS = Record<typeof KEY, Prettify<RELEASE_IT_ANSWER> | false>;
