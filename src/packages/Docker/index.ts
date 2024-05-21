import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import DOCKER, { DOCKER_ANSWER, KEY } from './docker';

const TITLE = 'Docker';

export const dockerQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([DOCKER.QUESTION])) as DOCKER_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const dockerTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && DOCKER.TASK);
};

export type DOCKER_ANSWERS = Record<typeof KEY, Prettify<DOCKER_ANSWER> | false>;
