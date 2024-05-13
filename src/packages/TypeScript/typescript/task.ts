import { getAnswers } from '../../../store/answers.store';

import createConfig from './createConfig';
import install from './install';

export const TASK = () => {
  const { typescript } = getAnswers();

  if (typescript) {
    if (typescript.install) install();
    if (typescript.createConfig) createConfig();
  }
};
