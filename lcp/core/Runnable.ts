/**
 * Created by d8q8 on 2014/11/18.
 * @module Lcp
 * @class Runnable
 * @constructor
 **/
module lcp {
    export interface IRunnable{
        start():void;
        stop():void;
    }
    /**
     * 运行类
     */
    export class Runnable implements IRunnable {
        public CLASS_NAME:string = "Runnable";

        public constructor() {

        }

        /**
         * 开始进程
         */
        public start():void{

        }

        /**
         * 结束进程
         */
        public stop():void{

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