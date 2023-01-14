const util = require('util')
const exec = util.promisify(require('child_process').exec)
const initConfig = require('../init-config')

module.exports = async function exportDB({ spinner, debug }) {
  spinner.stop()

  const { workDirectoryPath } = await initConfig({ spinner, debug })

  // Export database
  const result = await exec(
    `docker-compose -f ${workDirectoryPath}/docker-compose.yml exec -T mysql sh -c 'mysqldump --skip-comments --skip-extended-insert --password="$MYSQL_ROOT_PASSWORD" $MYSQL_DATABASE' > db.sql`
  )

  if (result.stderr) {
    console.log('Error', result.stderr)
  } else {
    spinner.text = `Exported database file db.sql`
  }
}
