import { getAnswers } from '../../../store/answers.store';

import createConfig from './createConfig';
import install from './install';
import integrate from './integrate';

export const TASK = () => {
  const { lintStaged } = getAnswers();

  if (lintStaged) {
    if (lintStaged.createConfig) createConfig();
    if (lintStaged.install) install();
    if (lintStaged.integrate) integrate();
  }
};
