/**
 * Challenge #4
 *
 * Create a custom stream, send (push) data to it and redirect it to
 * STDOUT.
 */
const stream = new require('stream').Readable({});
stream._read = () => {};
stream.push(process.argv[2]);
stream.pipe(process.stdout);
/**
 * Alternative solution
 *
 * class CustomStream extends require('stream').Readable {
 *   _read(size) {}
 * }
 *
 * const stream = new CustomStream();
 * stream.push(process.argv[2]);
 * stream.pipe(process.stdout);
 */
