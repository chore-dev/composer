import { getAnswers } from '../../../store/answers.store';

import addIgnores from './addIgnores';

export const TASK = () => {
  const { git } = getAnswers();

  if (git) {
    if (git.addIgnores) addIgnores();
  }
};
