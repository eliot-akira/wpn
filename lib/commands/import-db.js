const util = require('util')
const exec = util.promisify(require('child_process').exec)
const initConfig = require('../init-config')

module.exports = async function exportDB({ spinner, debug }) {
  spinner.stop()

  const { workDirectoryPath } = await initConfig({ spinner, debug })

  // Import database
  const result = await exec(
    `cat db.sql | docker-compose -f ${workDirectoryPath}/docker-compose.yml exec -T mysql sh -c 'mysql --password="$MYSQL_ROOT_PASSWORD" $MYSQL_DATABASE'`
  )

  if (result.stderr) {
    console.log('Error', result.stderr)
  } else {
    spinner.text = `Imported database file db.sql`
  }
}
