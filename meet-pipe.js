/**
 * Challenge #2
 *
 * Open a file as a stream and pipe (redirect) the contents of it to
 * STDOUT.
 */
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
