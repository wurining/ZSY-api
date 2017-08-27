const Base = require('./baseControler/base.js');

module.exports = class extends Base {
    indexAction() {
        return this.success('{\'doc\':\'https://thinkjs.org\'}', '请求成功');
    }
};
