import { getAnswers } from '../../../store/answers.store';

import addIgnores from './addIgnores';
import createConfig from './createConfig';
import insertScripts from './insertScripts';
import install from './install';

export const TASK = () => {
  const { eslint } = getAnswers();

  if (eslint) {
    if (eslint.install) install();
    if (eslint.insertScripts) insertScripts();
    if (eslint.createConfig) createConfig();
    if (eslint.addIgnores) addIgnores();
  }
};
