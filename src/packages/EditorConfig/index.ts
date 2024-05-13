import { Prettify } from '@chore-dev/utility-types';
import inquirer from 'inquirer';

import { getAnswers, updateAnswers } from '../../store/answers.store';
import { isValidCheckboxAnswer } from '../../utilities/is';
import { section } from '../../utilities/section';

import EDITOR_CONFIG, { EDITOR_CONFIG_ANSWER } from './editorconfig';

const TITLE = 'EditorConfig';

export const editorConfigQuestions = () => {
  const task = async () => {
    updateAnswers({
      editorConfig: await inquirer.prompt([EDITOR_CONFIG.QUESTION])
    } as EDITOR_CONFIG_ANSWERS);
  };

  return section(TITLE, task);
};

export const editorConfigTasks = () => {
  const task = () => {
    EDITOR_CONFIG.TASK();
  };

  return section(TITLE, isValidCheckboxAnswer(getAnswers().editorConfig) && task);
};

export type EDITOR_CONFIG_ANSWERS = Record<'editorConfig', Prettify<EDITOR_CONFIG_ANSWER>>;
