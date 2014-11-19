/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class Resumable
 * @constructor
 **/
module lcp {
    interface IResumable extends IRunnable{
        resume():void;
    }
    /**
     * 恢复类
     */
    export class Resumable implements IResumable{
        public CLASS_NAME:string = "Resumable";

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
         * 恢复进程
         */
        public resume():void{

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