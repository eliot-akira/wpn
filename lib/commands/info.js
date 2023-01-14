const util = require( 'util' );
const exec = util.promisify( require( 'child_process' ).exec );
const initConfig = require( '../init-config' );

module.exports = async function shell({ spinner, debug }) {
	spinner.stop();
	// initConfig will fail if wp-env start has not yet been called, so that
	// edge case is handled.
	const { workDirectoryPath } = await initConfig( { spinner, debug } );
  console.log('Working directory')
  console.log( workDirectoryPath );
  console.log()

  const result = await exec(
    `docker ps`
	);

  console.log(result.stderr || result.stdout)
}
