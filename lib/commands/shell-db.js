const util = require('util')
const exec = util.promisify(require('child_process').exec)
const initConfig = require('../init-config')

module.exports = async function shellDB({ spinner, debug }) {
  spinner.stop()

  const { workDirectoryPath } = await initConfig({ spinner, debug })

  // Export database
  const result = await exec(
    `docker-compose -f ${workDirectoryPath}/docker-compose.yml exec mysql sh -c 'mysql --password="$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE"'`
  )

  if (result.stderr) {
    console.log('Error', result.stderr)
  }
}
