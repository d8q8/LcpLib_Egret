/**
 * Created by d8q8 on 2014/8/18.
 * @module Lcp
 * @class LString
 * @constructor
 **/
module Lcp {
    /**
     * 字符处理类(暂未完善)
     */
    export class LString {
        public CLASS_NAME:string = "LString";

        public constructor() {

        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            console.log("ClassName", this.CLASS_NAME);
            return this.CLASS_NAME;
        }
    }
}