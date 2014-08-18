/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LTrace
 * @constructor
 */
module Lcp{
    /**
     * 跟踪捕获类(待完善)
     */
    export class LTrace{
        constructor(){

        }

        /**
         * 跟踪捕获
         * @param message
         * @param optionalParams
         */
        static trace(message?: any, ...optionalParams: any[]):void{
            console.log(message, optionalParams);
        }
    }
}