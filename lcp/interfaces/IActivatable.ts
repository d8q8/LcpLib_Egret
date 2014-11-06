/**
 * Created by d8q8 on 2014/11/6.
 * @module Lcp
 * @class IActivatable
 * @constructor
 **/
module lcp {
    /**
     * 激活类
     */
    export class IActivatable {
        public CLASS_NAME:string = "IActivatable";
        public isActive: boolean;

        public constructor() {

        }

        public activate() {
            this.isActive = true;
        }
        public deactivate() {
            this.isActive = false;
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