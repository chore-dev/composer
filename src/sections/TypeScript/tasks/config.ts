import { getAnswers } from '../../../store/answers.store';
import { writeBeforeWrite } from '../../../utilities/fs';
import { PWD } from '../../../utilities/fs/constants';
import createTsConfigJson from '../templates/tsconfig.json';

const CREATE_CONFIG = () => {
  const { typescript } = getAnswers();

  if (typeof typescript === 'object' && typescript.createConfig) {
    writeBeforeWrite(PWD('./tsconfig.json'), createTsConfigJson());
  }
};

export default CREATE_CONFIG;
