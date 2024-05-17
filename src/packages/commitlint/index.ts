import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import COMMIT_LINT, { COMMIT_LINT_ANSWER, KEY } from './commitlint';

const TITLE = 'commitlint';

export const commitLintQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([COMMIT_LINT.QUESTION])) as COMMIT_LINT_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const commitLintTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && COMMIT_LINT.TASK);
};

export type COMMIT_LINT_ANSWERS = Record<typeof KEY, Prettify<COMMIT_LINT_ANSWER> | false>;
