const path = require('path');

module.exports = {
    port                : 8360,
    host                : '127.0.0.1',
    workers             : 0,
    createServer        : undefined,
    startServerTimeout  : 3000,
    reloadSignal        : 'SIGUSR2',
    onUnhandledRejection: err => think.logger.error(err),
    onUncaughtException : err => think.logger.error(err),
    processKillTimeout  : 10 * 1000,
    enableAgent         : false,
    jsonpCallbackField  : 'callback',
    jsonContentType     : 'application/json',
    errnoField          : 'errno',
    errmsgField         : 'errmsg',
    defaultErrno        : 1000,
    validateDefaultErrno: 1001,
    PATHS               : {
        'STATIC_PATH': path.join(think.ROOT_PATH, 'www/static')
    }
};
