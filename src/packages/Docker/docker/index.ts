import { CheckboxQuestionOptions } from 'inquirer';

import { CheckboxAnswers, Choice, Collection } from '../../../../types';

import { CHOICES, QUESTION } from './question';
import { TASK } from './task';

export const KEY = 'docker' as const;

const DOCKER = {
  KEY,
  CHOICES,
  QUESTION: QUESTION(KEY),
  TASK
} as const satisfies Collection<CheckboxQuestionOptions>;

export default DOCKER;

export type DOCKER_ANSWER = CheckboxAnswers<Choice<typeof DOCKER>>;
