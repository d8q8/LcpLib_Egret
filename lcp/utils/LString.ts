/**
 * Created by d8q8 on 2014/8/18.
 * @module lcp
 * @class LString
 * @constructor
 **/
module lcp {
    /**
     * 字符处理类(暂未完善)
     */
    export class LString {
        public CLASS_NAME:string = "LString";

        public constructor() {
            egret.Logger.warning("不可以实例化"+this.CLASS_NAME+"类,这是字符串处理类");
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            return this.CLASS_NAME;
        }
    }
}