import { getAnswers } from '../../../../store/answers.store';
import { writeBeforeWrite } from '../../../../utilities/fs';
import { PWD } from '../../../../utilities/fs/constants';

import createPreCommitHook from './template';

const integrate = () => {
  const { husky } = getAnswers();

  if (!husky) return;

  writeBeforeWrite(PWD('./.husky/pre-commit'), createPreCommitHook());
};

export default integrate;
