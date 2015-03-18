/**
 * Created by d8q8 on 2014/8/12.
 * @module lcp
 * @class LTrace
 * @constructor
 */
module lcp{
    /**
     * 跟踪捕获类(待完善)
     */
    export class LTrace{
        public CLASS_NAME:string = "LTrace";
        public constructor(){
            lcp.LTrace.warning(10001,"不可以实例化"+this.CLASS_NAME+"类，这是跟踪捕获类");
        }

        /**
         * 跟踪捕获
         * @param message
         * @param optionalParams
         */
        public static trace(message?: any, ...optionalParams: any[]):void{
            console.log(message, optionalParams);
        }

        /**
         * 警告类
         * @param errorId
         * @param args
         */
        public static warning(errorId:number,...args):void{
            egret.egret_string_code[errorId] = "{0}";
            egret.Logger.warningWithErrorId(errorId,args);
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