/**
 * Created by d8q8 on 2014/11/6.
 * @module lcp
 * @class Activatable
 * @constructor
 **/
module lcp {
    /**
     * 激活类
     */
    export class Activatable implements IActivatable{
        public CLASS_NAME:string = "Activatable";
        public isActive: boolean;

        public constructor() {

        }

        public activate():void {
            this.isActive = true;
        }
        public deactivate():void {
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