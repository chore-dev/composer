import { Prettify } from '@chore-dev/utility-types';

import { ONBOARDING_ANSWERS } from '../onboarding';
import { COMMIT_LINT_ANSWERS } from '../packages/commitlint';
import { DOCKER_ANSWERS } from '../packages/Docker';
import { EDITOR_CONFIG_ANSWERS } from '../packages/EditorConfig';
import { ESLINT_ANSWERS } from '../packages/ESLint';
import { GIT_ANSWERS } from '../packages/Git';
import { HUSKY_ANSWERS } from '../packages/Husky';
import { LINT_STAGED_ANSWERS } from '../packages/lint-staged';
import { PRETTIER_ANSWERS } from '../packages/Prettier';
import { RELEASE_IT_ANSWERS } from '../packages/release-it';
import { TYPESCRIPT_ANSWERS } from '../packages/TypeScript';

let ANSWERS = {} as Answers;

export const getAnswers = () => ANSWERS;

export const updateAnswers = (answers: Partial<Answers>): void => {
  ANSWERS = { ...ANSWERS, ...answers };
};

export type Answers = Prettify<
  COMMIT_LINT_ANSWERS &
    DOCKER_ANSWERS &
    EDITOR_CONFIG_ANSWERS &
    ESLINT_ANSWERS &
    GIT_ANSWERS &
    HUSKY_ANSWERS &
    LINT_STAGED_ANSWERS &
    ONBOARDING_ANSWERS &
    PRETTIER_ANSWERS &
    RELEASE_IT_ANSWERS &
    TYPESCRIPT_ANSWERS
>;
