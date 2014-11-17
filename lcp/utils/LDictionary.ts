/**
 * Created by d8q8 on 2014/11/18.
 * @module Lcp
 * @class LDictionary
 * @constructor
 **/
module lcp{
    /**
     * 字典类
     */
    export class LDictionary{
        public CLASS_NAME:string = "LDictionary";
        private hasSpecialProto = false; // 是否有 "__proto__" key值?
        private specialProto = undefined; // "__proto__" key是否存在

        constructor(public elements = {}) {
            // 初始化
        }

        /**
         * 判断是否有key
         * @param key
         * @returns {boolean}
         */
        public has(key):boolean {
            if (key === "__proto__") {
                return this.hasSpecialProto;
            }
            // 自己的属性
            return {}.hasOwnProperty.call(this.elements, key);
        }

        /**
         * 获取值key的值
         * @param key
         * @returns {*}
         */
        public get(key):any {
            if (key === "__proto__") {
                return this.specialProto;
            }
            // 仅仅自己的属性
            return this.has(key) ? this.elements[key] : undefined;
        }

        /**
         * 设置初始值
         * @param key
         * @param val
         */
        public set(key, val):void {
            if (key === "__proto__") {
                this.hasSpecialProto = true;
                this.specialProto = val;
            } else {
                this.elements[key] = val;
            }
        }

        /**
         * 删除key
         * @param key
         */
        public remove(key):void {
            if (key === "__proto__") {
                this.hasSpecialProto = false;
                this.specialProto = undefined;
            } else {
                delete this.elements[key];
            }
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        }
    }
}