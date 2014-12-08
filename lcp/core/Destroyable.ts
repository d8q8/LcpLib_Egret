/**
 * Created by d8q8 on 2014/11/6.
 * @module lcp
 * @class Disposable
 * @constructor
 **/
module lcp {
    /**
     * 销毁类
     */
    export class Destroyable implements IDestroyable {
        public CLASS_NAME:string = "Destroyable";
        public isDestroyed: boolean;

        public constructor() {

        }

        public destroy():void {
            this.isDestroyed = true;
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