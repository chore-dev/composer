import { getAnswers } from '../../../store/answers.store';

import createConfig from './createConfig';
import install from './install';
import integrate from './integrate';

export const TASK = () => {
  const { commitLint } = getAnswers();

  if (commitLint) {
    if (commitLint.createConfig) createConfig();
    if (commitLint.install) install();
    if (commitLint.integrate) integrate();
  }
};
