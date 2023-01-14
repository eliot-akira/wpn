const run = require('./run')

module.exports = function shell(props) {
  return run({
    ...props,
    container: 'cli',
    command: ['bash'],
  })
}
