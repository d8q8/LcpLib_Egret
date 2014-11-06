/**
 * Created by d8q8 on 2014/11/6.
 * @module Lcp
 * @class IDisposable
 * @constructor
 **/
module lcp {
    /**
     * 销毁类
     */
    export class IDisposable {
        public CLASS_NAME:string = "IDisposable";
        public isDisposed: boolean;

        public constructor() {

        }

        public dispose() {
            this.isDisposed = true;
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