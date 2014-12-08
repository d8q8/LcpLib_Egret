/**
 * Created by d8q8 on 2014/8/12.
 * @module lcp
 * @class LEvent
 * @constructor
 */
module lcp {
    /**
     * 自定义事件类
     */
    export class LEvent extends egret.Event {
        public CLASS_NAME:string = "LEvent";

        public constructor(type:string, public obj?:Object, bubbles:boolean = false, cancelable:boolean = false) {
            super(type, bubbles, cancelable);
        }

        /**
         * 克隆副本
         * @param obj
         * @returns {lcp.LEvent}
         */
        public clone(obj?:Object):LEvent {
            return new LEvent(this.type, obj ? obj : this.obj, this.bubbles, this.cancelable);
        }

        /**
         * 类输出
         */
        public toString():void {
            console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
        }

        /**
         * 获取传参,
         * @returns {Object}
         */
        public get param():Object {
            return this.obj;
        }

    }
}