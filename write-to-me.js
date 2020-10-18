/**
 * Challenge #5
 *
 * Implement a Writable stream and test it by echoing the STDIN.
 */

/**
 * Below is the ES6 (ECMAScript 2015) syntax for "method definitions".
 * That is, functions that are associated with an object. What's going
 * on below is that we are passing an "anonymous object" to the Writable
 * function that's defined in the 'stream' module in NodeJS. This
 * anonymous object has a "method definition" inside it which is using
 * the ES6 syntax. Essentially, the code is equivalent to:
 *
 * const stream = new require('stream').Writable({
 *   write: function(chunk, encoding, callback) {}
 * });
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
 */
const stream = new require('stream').Writable({
  write(chunk, _encoding, callback) {
    console.log(`writing: ${chunk}`);
    callback();
  },
});

/**
 * process.stdin.pipe(stream) is equivalent to:
 *
 * process.stdin.on('data', chunk => {
 *   stream.write(chunk);
 * });
 */
process.stdin.pipe(stream);
