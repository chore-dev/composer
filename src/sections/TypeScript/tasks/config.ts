import {getAnswers} from "../../../store/answers.store";
import {writeBeforeWrite} from "../../../utilities/fs";
import {pwd} from "../../../utilities/fs/constants";
import createTsConfigJson from "../templates/tsconfig.json";

const CREATE_CONFIG_TASK = () => {
  const {typescript} = getAnswers();

  if (typeof typescript === 'object' && typescript.createConfig) {
    writeBeforeWrite(pwd('./tsconfig.json'), createTsConfigJson());
  }
}

export default CREATE_CONFIG_TASK;
