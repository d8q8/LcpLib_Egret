/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LEvent
 * @constructor
 */
module Lcp{
    /**
     * 自定义事件类
     */
    export class LEvent extends egret.Event{
        public CLASS_NAME:string = "LEvent";
        private _obj:Object;
        public constructor(type:string, obj:Object = null, bubbles:boolean = false, cancelable:boolean = false){
            super(type, bubbles, cancelable);
            if(obj){
                this._obj = obj;
            }
        }

        public clone():Lcp.LEvent{
            return new Lcp.LEvent(this.type, this._obj, this.bubbles, this.cancelable);
        }

        public toString():void{
			console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
		}

        /**
         * 传参获取
         * @returns {Object}
         */
        public get param():Object{
            return this._obj;
        }

        public static dispatchLEvent(target:egret.IEventDispatcher, type:string):void{
            var eventClass:any = Lcp.LEvent;
            egret.Event._dispatchByTarget(eventClass, target, type);
        }
    }
}