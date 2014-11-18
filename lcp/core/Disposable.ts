/**
 * Created by d8q8 on 2014/11/6.
 * @module Lcp
 * @class IDisposable
 * @constructor
 **/
module lcp {
    interface IDisposable{
        isDisposed:boolean;
        dispose():void;
    }
    /**
     * 销毁类
     */
    export class Disposable implements IDisposable {
        public CLASS_NAME:string = "Disposable";
        public isDisposed: boolean;

        public constructor() {
            super();
        }

        public dispose():void {
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