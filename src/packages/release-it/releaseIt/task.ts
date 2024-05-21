import { getAnswers } from '../../../store/answers.store';

import createConfig from './createConfig';
import insertScripts from './insertScripts';
import install from './install';

export const TASK = () => {
  const { releaseIt } = getAnswers();

  if (releaseIt) {
    if (releaseIt.install) install();
    if (releaseIt.insertScripts) insertScripts();
    if (releaseIt.createConfig) createConfig();
  }
};
