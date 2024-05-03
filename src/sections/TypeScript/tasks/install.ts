import {getAnswers} from "../../../store/answers.store";
import {managerInstall} from "../../../utilities/cli";

const INSTALL_TASK = () => {
  const {typescript} = getAnswers();

  if (typeof typescript === 'object' && typescript.install) {
    managerInstall('typescript', true);
  }
}

export default INSTALL_TASK;
