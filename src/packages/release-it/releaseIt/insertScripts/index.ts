import { getAnswers } from '../../../../store/answers.store';
import { addScriptToPackageJson } from '../../../../utilities/cli';

const insertScripts = () => {
  const { releaseIt } = getAnswers();

  if (!releaseIt) return;

  const { createConfig } = releaseIt;

  const config = createConfig ? ' --config .release-it.json' : '';

  addScriptToPackageJson([['release', `release-it${config}`]]);
};

export default insertScripts;
