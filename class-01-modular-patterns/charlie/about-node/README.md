About Node
==========

# about node
[nodejs.org/en/about](https://nodejs.org/en/about/)
* asynchronous event driven framework
* node's concurrency models employs callback functions when an event occurs. If there is no work to be done node is sleeping.
* almost no function in node directly preforms I/O, so the process never blocks. free from blocks, we never have to worry about dead locking a process.
[about nodejs docs](https://nodejs.org/api/documentation.html)
* stability index
 * 0 - depricated
 * 1 - Expieramental
 * 2 - Stable
 * 3 - Locked

## composed of three main components
* V8 javascript engine
 * [Intro to V8](https://developers.google.com/v8/intro) 
 * [ES6 features in Node](https://nodejs.org/en/docs/es6/)
* libuv 
 * [libuv github docs](https://github.com/libuv/libuv)
* nodejs c++ and javascript source
