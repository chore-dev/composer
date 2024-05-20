import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section, sectionWithConfirmation } from '../../utilities/section';

import LINT_STAGED, { KEY, LINT_STAGED_ANSWER } from './lintStaged';

const TITLE = 'lint-staged';

export const lintStagedQuestions = () => {
  return sectionWithConfirmation(
    TITLE,
    async () => (await inquirer.prompt([LINT_STAGED.QUESTION])) as LINT_STAGED_ANSWERS,
    () => ({ [KEY]: false })
  );
};

export const lintStagedTasks = () => {
  return section(TITLE, isValidCheckboxAnswer(getAnswers()[KEY]) && LINT_STAGED.TASK);
};

export type LINT_STAGED_ANSWERS = Record<typeof KEY, Prettify<LINT_STAGED_ANSWER> | false>;
