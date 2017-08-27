const path = require('path');
const assert = require('assert');

module.exports = class extends think.Controller {
    /**
     * 构造函数
     * @param ctx
     */
    constructor(ctx) {
        super(ctx);
        this.resource = this.getResource();
        this.id = this.getId();
        assert(think.isFunction(this.model), 'this.model must be a function');
        this.modelInstance = this.model(this.resource);
    }

    __before() {
    }

    /**
     * 获得资源
     * @return {String} [resource name]
     */
    getResource() {
        const filename = this.__filename || __filename;
        const last = filename.lastIndexOf(path.sep);
        return filename.substr(last + 1, filename.length - last - 4);
    }

    /**
     * 获得主键
     * @returns {*}
     */
    getId() {
        const id = this.query('id');
        if (id && (think.isString(id) || think.isNumber(id))) {
            return id;
        }
        const last = this.ctx.path.split('/').slice(-1)[0];

        if (last !== this.resource) {
            return last;
        }
        return '';
    }

    /**
     * get 获得资源
     * @returns {Promise.<*>}
     */
    async getAction() {
        let data;
        if (this.id) {
            const pk = await this.modelInstance.pk;
            data = await this.modelInstance.where({[pk]: this.id}).find();
            return this.success(data);
        }
        data = await this.modelInstance.select();
        return this.success(data);
    }

    /**
     * put 提交资源
     * @return {Promise} []
     */
    async postAction() {
        const pk = await this.modelInstance.pk;
        const data = this.post();
        delete data[pk];
        if (think.isEmpty(data)) {
            return this.fail('data is empty');
        }
        const insertId = await this.modelInstance.add(data);
        return this.success({id: insertId});
    }

    /**
     * delete 删除资源
     * @return {Promise} []
     */
    async deleteAction() {
        if (!this.id) {
            return this.fail('params error');
        }
        const pk = await this.modelInstance.pk;
        const rows = await this.modelInstance.where({[pk]: this.id}).delete();
        return this.success({affectedRows: rows});
    }

    /**
     * update 更新资源
     * @return {Promise} []
     */
    async putAction() {
        if (!this.id) {
            return this.fail('params error');
        }
        const pk = await this.modelInstance.pk;
        const data = this.post();
        delete data[pk];
        if (think.isEmpty(data)) {
            return this.fail('data is empty');
        }
        const rows = await this.modelInstance.where({[pk]: this.id}).update(data);
        return this.success({affectedRows: rows});
    }

    __call() {

    }
};
