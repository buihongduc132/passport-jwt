var jwt = require('jsonwebtoken');

module.exports  = function(token, secretOrKey, options, callback) {
    const { logger } = options;
    try {
        const result = jwt.verify(token, secretOrKey, options, (...params) => {
            if (logger) logger.error(',,,params', ...params);
            return callback(...params);
        });
        if (logger) logger.error(',,,result', result);
        return result;
    } catch(err) {
        if (logger) logger.error(',,,Veirfy Error', token, secretOrKey, options, callback);
        throw err;
    }
};
