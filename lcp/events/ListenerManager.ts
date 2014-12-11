/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class ListenerManager
 * @constructor
 **/
module lcp {
    /**
     * 侦听管理器类
     */
    export class ListenerManager extends Destroyable implements IRemovableEventDispatcher {

        public CLASS_NAME:string = "ListenerManager";

        public hashCode:number;
        public static _proxyMap:any;
        public _eventDispatcher:egret.IEventDispatcher;
        public _events:Array<any>;
        public _blockRequest:boolean;

        public constructor(singletonEnforcer:EventInfo, dispatcher:egret.IEventDispatcher) {
            super();

            this._eventDispatcher = dispatcher;
            this._events = [];
        }

        /**
         * 注册一个IEventDispatcher到侦听管理器
         * @param dispatcher
         * @returns {ListenerManager}
         */
        public static getManager(dispatcher:egret.IEventDispatcher):ListenerManager {
            if (!ListenerManager._proxyMap)
                ListenerManager._proxyMap = {};
            if (!(<any>dispatcher in ListenerManager._proxyMap))
                ListenerManager._proxyMap[<any>dispatcher] = new ListenerManager(new EventInfo(null, null, dispatcher, false), dispatcher);
            return ListenerManager._proxyMap[<any>dispatcher];
        }

        /**
         * 通知管理器实例被追加一个IEventDispatcher侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        public addEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false, priority:number = 0):void {
            var info:EventInfo = new EventInfo(type, listener, thisObject ? thisObject : this._eventDispatcher, useCapture);
            var l:number = this._events.length;
            while (l--)
                if (this._events[l].equals(info))
                    return;
            this._events.push(info);
        }

        /**
         * 派发事件
         * @param event
         * @returns {boolean}
         */
        public dispatchEvent(event:egret.Event):boolean {
            return this._eventDispatcher.dispatchEvent(event);
        }

        /**
         * 检测是否存在监听器
         * @param type
         * @returns {boolean}
         */
        public hasEventListener(type:string):boolean {
            return this._eventDispatcher.hasEventListener(type);
        }

        /**
         * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了事件侦听器。
         * @param type
         * @returns {boolean}
         */
        public willTrigger(type:string):boolean {
            return this._eventDispatcher.willTrigger(type);
        }

        /**
         * 移除事件侦听器
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        public removeEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false):void {
            if (this._blockRequest)
                return;
            var info:EventInfo = new EventInfo(type, listener, thisObject ? thisObject : this._eventDispatcher, useCapture);
            var l:number = this._events.length;
            while (l--)
                if (this._events[l].equals(info))
                    this._events.splice(l, 1);
        }

        /**
         * 移除指定类型的事件
         * @param type
         */
        public removeEventsForType(type:string):void {
            this._blockRequest = true;
            var l:number = this._events.length;
            var eventInfo:EventInfo;
            while (l--) {
                eventInfo = this._events[l];
                if (eventInfo.type == type) {
                    this._events.splice(l, 1);
                    this._eventDispatcher.removeEventListener(eventInfo.type, eventInfo.listener, eventInfo.thisObject, eventInfo.useCapture);
                }
            }
            this._blockRequest = false;
        }

        /**
         * 移除指定侦听器报告的事件
         * @param listener
         */
        public removeEventsForListener(listener:Function):void {
            this._blockRequest = true;

            var l:number = this._events.length;
            var eventInfo:EventInfo;
            while (l--) {
                eventInfo = this._events[l];
                if (eventInfo.listener == listener) {
                    this._events.splice(l, 1);
                    this._eventDispatcher.removeEventListener(eventInfo.type, eventInfo.listener, eventInfo.thisObject, eventInfo.useCapture);
                }
            }
            this._blockRequest = false;
        }

        /**
         * 移除所有侦听
         */
        public removeEventListeners():void {
            this._blockRequest = true;
            var l:number = this._events.length;
            var eventInfo:EventInfo;
            while (l--) {
                eventInfo = this._events.splice(l, 1)[0];
                this._eventDispatcher.removeEventListener(eventInfo.type, eventInfo.listener, eventInfo.thisObject, eventInfo.useCapture);
            }
            this._blockRequest = false;
        }

        /**
         * 获取指定事件或所有事件的总侦听数
         * @param type
         * @returns {number}
         */
        public getTotalEventListeners(type?:string):number {
            return (type == null) ? this._events.length : ArrayUtil.getItemsByKey(this._events, 'type', type).length;
        }

        /**
         * 释放
         */
        public destroy():void {
            this.removeEventListeners();
            delete ListenerManager._proxyMap[<any>this._eventDispatcher];
            this._eventDispatcher = null;
            super.destroy();
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

    /**
     * 事件信息类
     */
    export class EventInfo {
        public type:string;
        public listener:Function;
        public thisObject:any;
        public useCapture:boolean;

        public constructor(type:string, listener:Function, thisObject:any, useCapture:boolean) {
            this.type = type;
            this.listener = listener;
            this.thisObject = thisObject;
            this.useCapture = useCapture;
        }

        public equals(eventInfo:EventInfo):boolean {
            return this.type == eventInfo.type && this.listener == eventInfo.listener && this.thisObject == eventInfo.thisObject && this.useCapture == eventInfo.useCapture;
        }
    }
}