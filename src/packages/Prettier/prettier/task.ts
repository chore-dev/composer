import { getAnswers } from '../../../store/answers.store';

import addIgnores from './addIgnores';
import createConfig from './createConfig';
import insertScripts from './insertScripts';
import install from './install';

export const TASK = () => {
  const { prettier } = getAnswers();

  if (prettier) {
    if (prettier.install) install();
    if (prettier.insertScripts) insertScripts();
    if (prettier.createConfig) createConfig();
    if (prettier.addIgnores) addIgnores();
  }
};
