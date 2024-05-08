import inquirer from 'inquirer';

import { Prettify } from '../../../types';
import { getAnswers, updateAnswers } from '../../store/answers.store';
import { shouldContinue } from '../../utilities/inquirer/continue';
import { section } from '../../utilities/section';

import TYPESCRIPT_QUESTION, { TYPESCRIPT_ANSWER } from './questions/typescript';
import CREATE_CONFIG from './tasks/config';
import INSTALL_TASK from './tasks/install';

const TITLE = 'TypeScript';

export const askTypesScriptQuestions = () =>
  section(TITLE, async () => {
    const withTypescript = await shouldContinue(`Do you want to include ${TITLE}?`, false);

    if (withTypescript) {
      updateAnswers((await inquirer.prompt([TYPESCRIPT_QUESTION.OPTIONS])) as TYPESCRIPT_ANSWERS);
    } else {
      updateAnswers({ typescript: false });
    }
  });

export const doTypesScriptTasks = () =>
  section(
    TITLE,
    () => {
      INSTALL_TASK();
      CREATE_CONFIG();
    },
    getAnswers().typescript
  );

export type TYPESCRIPT_ANSWERS = {
  typescript: Prettify<TYPESCRIPT_ANSWER> | false;
};
