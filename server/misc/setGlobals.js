
/* Assigns the variable set in the path: `configs/build/{BUILD_ENV}/build_env.js`  to `process.env` */
function getBuildEnvContent(path) {
  require('dotenv').config({ path });
}

function setGlobals() {
  const {BUILD_ENV} = process.env;
  if (!BUILD_ENV) {
    throw new Error('process.env.BUILD_ENV is missing');
    return;
  }
  const BUILD_CONFIG_PATH = `configs/build/${BUILD_ENV}/build_env.js`;
  getBuildEnvContent(BUILD_CONFIG_PATH);
}

export default setGlobals;