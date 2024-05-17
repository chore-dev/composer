import { Prettify } from '@chore-dev/utility-types';

import { ONBOARDING_ANSWERS } from '../onboarding';
import { EDITOR_CONFIG_ANSWERS } from '../packages/EditorConfig';
import { ESLINT_ANSWERS } from '../packages/ESLint';
import { HUSKY_ANSWERS } from '../packages/Husky';
import { PRETTIER_ANSWERS } from '../packages/Prettier';
import { TYPESCRIPT_ANSWERS } from '../packages/TypeScript';

let ANSWERS = {} as Answers;

export const getAnswers = () => ANSWERS;

export const updateAnswers = (answers: Partial<Answers>): void => {
  ANSWERS = { ...ANSWERS, ...answers };
};

export type Answers = Prettify<
  EDITOR_CONFIG_ANSWERS &
    ESLINT_ANSWERS &
    HUSKY_ANSWERS &
    ONBOARDING_ANSWERS &
    PRETTIER_ANSWERS &
    TYPESCRIPT_ANSWERS
>;
