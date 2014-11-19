/**
 * Created by d8q8 on 2014/8/12.
 * @module lcp
 * @class LListener
 * @constructor
 */
module lcp{
    /**
     * 全局侦听类及消息处理
     */
    export class LListener{
        public CLASS_NAME:string = "LListener";
        private static _instance:LListener;
        private _dispatcher:egret.EventDispatcher;
        public constructor(){
            egret.Logger.warning("不可以实例化"+this.CLASS_NAME+"类,请实例Lcp."+this.CLASS_NAME+".getInstance()开始");
            if(this._dispatcher == null){
                this._dispatcher = new egret.EventDispatcher();
            }
        }

        public static getInstance():LListener{
            if(this._instance==null)
                this._instance = new LListener();
            return this._instance;
        }

        public addEventListener(type:string,listener:Function,thisObject:any,useCapture:boolean=false,priority:number=0):void{
            this._dispatcher.addEventListener(type,listener,thisObject,useCapture,priority);
        }

        public removeEventListener(type:string,listener:Function,thisObject:any,useCapture:boolean=false):void{
            this._dispatcher.removeEventListener(type,listener,thisObject,useCapture);
        }

        public hasEventListener(type:string):boolean
		{
			return this._dispatcher.hasEventListener(type);
		}

        public willTrigger(type:string):boolean
		{
			return this._dispatcher.willTrigger(type);
		}

        public dispatchEvent(event:LEvent):boolean {
			return this._dispatcher.dispatchEvent(event);
		}

        public toString():string
		{
			return this._dispatcher.toString();
		}
    }
}