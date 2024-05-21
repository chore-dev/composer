import { getAnswers } from '../../../store/answers.store';

import addIgnores from './addIgnores';

export const TASK = () => {
  const { docker } = getAnswers();

  if (docker) {
    if (docker.addIgnores) addIgnores();
  }
};
