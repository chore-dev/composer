import { getAnswers } from '../../../store/answers.store';

import insertScripts from './insertScripts';
import install from './install';

export const TASK = () => {
  const { husky } = getAnswers();

  if (husky) {
    if (husky.install) install();
    if (husky.insertScripts) insertScripts();
  }
};
