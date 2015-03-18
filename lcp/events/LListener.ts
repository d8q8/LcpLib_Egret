/**
 * Created by d8q8 on 2014/8/12.
 * @module lcp
 * @class LListener
 * @constructor
 */
module lcp {
    /**
     * 全局侦听类及消息处理
     */
    export class LListener {
        public CLASS_NAME:string = "LListener";
        private static _instance:LListener;
        private _dispatcher:egret.EventDispatcher;

        public constructor() {
            lcp.LTrace.warning(10001,"不可以实例化" + this.CLASS_NAME + "类,请实例Lcp." + this.CLASS_NAME + ".getInstance()开始");
            if (this._dispatcher == null)
                this._dispatcher = new egret.EventDispatcher();
        }

        /**
         * 单例全局侦听类
         * @returns {lcp.LListener}
         */
        public static getInstance():LListener {
            if (this._instance == null)
                this._instance = new LListener();
            return this._instance;
        }

        /**
         * 注册全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        public addEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false, priority:number = 0):void {
            this._dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
        }

        /**
         * 移除全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        public removeEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false):void {
            this._dispatcher.removeEventListener(type, listener, thisObject, useCapture);
        }

        /**
         * 判断是否有全局侦听
         * @param type
         * @returns {boolean}
         */
        public hasEventListener(type:string):boolean {
            return this._dispatcher.hasEventListener(type);
        }

        /**
         * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了全局事件侦听器
         * @param type
         * @returns {boolean}
         */
        public willTrigger(type:string):boolean {
            return this._dispatcher.willTrigger(type);
        }

        /**
         * 派发全局事件
         * @param event
         * @returns {boolean}
         */
        public dispatchEvent(event:LEvent):boolean {
            return this._dispatcher.dispatchEvent(event);
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            return this._dispatcher.toString();
        }
    }
}