export class 表格操作类 {
    constructor(表格实例) {
        this.表格 = 表格实例;
    }

    static 初始化(表格实例) {
        return new 表格操作类(表格实例);
    }

    /**
     * 设置表格的表头
     * @param {Array<{label: string, prop: string, width?: string, fixed?: boolean}>} 表头配置 - 表头配置数组
     */
    设置表头(表头配置) {
        this.表格.header = 表头配置.map(列配置 => ({
            label: 列配置.label,
            prop: 列配置.prop,
            width: 列配置.width,
            fixed: 列配置.fixed
        }));
    }

    /**
     * 设置指定列的属性
     * @param {string} 属性名 - 列的属性名
     * @param {Object} 列配置 - 列的配置对象
     */
    设置列属性(属性名, 列配置) {
        const 列索引 = this.表格.header.findIndex(col => col.prop === 属性名);
        if (列索引 !== -1) {
            this.表格.header[列索引] = { ...this.表格.header[列索引], ...列配置 };
        }
    }

    /**
     * 插入新的一行数据
     * @param {Object} 行数据 - 要插入的行数据对象
     */
    插入行(行数据) {
        this.表格.data.push(行数据);
    }

    /**
     * 批量插入数据
     * @param {Array<Object>} 数据数组 - 要插入的数据数组
     */
    批量插入(数据数组) {
        this.表格.data.push(...数据数组);
    }

    /**
     * 设置指定单元格的值
     * @param {number} 行索引 - 行索引（从0开始）
     * @param {string} 属性名 - 列的属性名
     * @param {any} 值 - 要设置的值
     */
    设置单元格值(行索引, 属性名, 值) {
        if (this.表格.data[行索引]) {
            this.表格.data[行索引][属性名] = 值;
        }
    }

    /**
     * 获取表格的总行数
     * @returns {number} 行数
     */
    取行数() {
        return this.表格.data.length;
    }

    /**
     * 获取表格的总列数
     * @returns {number} 列数
     */
    取列数() {
        return this.表格.header ? this.表格.header.length : 0;
    }

    /**
     * 获取指定单元格的值
     * @param {number} 行索引 - 行索引（从0开始）
     * @param {string} 属性名 - 列的属性名
     * @returns {any} 单元格值
     */
    取单元格值(行索引, 属性名) {
        if (this.表格.data[行索引]) {
            return this.表格.data[行索引][属性名];
        }
        return undefined;
    }

    /**
     * 清空表格数据
     */
    清空表格() {
        this.表格.data = [];
    }

    /**
     * 删除指定行
     * @param {number} 行索引 - 要删除的行索引（从0开始）
     */
    删除行(行索引) {
        if (行索引 >= 0 && 行索引 < this.表格.data.length) {
            this.表格.data.splice(行索引, 1);
        }
    }

    /**
     * 更新整行数据
     * @param {number} 行索引 - 行索引（从0开始）
     * @param {Object} 新数据 - 新的行数据对象
     */
    更新行(行索引, 新数据) {
        if (this.表格.data[行索引]) {
            this.表格.data[行索引] = { ...this.表格.data[行索引], ...新数据 };
        }
    }

    /**
     * 获取指定列的配置
     * @param {string} 属性名 - 列的属性名
     * @returns {Object|undefined} 列配置对象
     */
    取列配置(属性名) {
        return this.表格.header.find(col => col.prop === 属性名);
    }

    /**
     * 获取所有数据
     * @returns {Array<Object>} 表格数据数组
     */
    取所有数据() {
        return this.表格.data;
    }
}
