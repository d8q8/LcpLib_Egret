/**
 * Created by d8q8 on 2014/12/8.
 * @module lcp
 * @class CSprite
 * @constructor
 **/
module lcp {
    export class CSprite extends egret.Sprite implements IRemovableEventDispatcher,IDestroyable{
        public CLASS_NAME:string = "CSprite";

        public isDestroyed:boolean;
        public _listenerManager:ListenerManager;

        public constructor() {
            super();
            this._listenerManager = ListenerManager.getManager(this);
        }
        /**
         * 派发事件
         * @param event
         * @returns {boolean}
         */
        public dispatchEvent(event:egret.Event):boolean {
            if (this.willTrigger(event.type))
                return super.dispatchEvent(event);
            return true;
        }

        /**
         * 注册侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        public addEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false, priority:number = 0):void {
            super.addEventListener(type, listener, thisObject, useCapture, priority);
            this._listenerManager.addEventListener(type, listener, thisObject, useCapture, priority);
        }

        /**
         * 移除侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        public removeEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false):void {
            super.removeEventListener(type, listener, thisObject, useCapture);
            this._listenerManager.removeEventListener(type, listener, thisObject, useCapture);
        }

        /**
         * 移除指定类型的所有事件
         * @param type
         */
        public removeEventsForType(type:string):void {
            this._listenerManager.removeEventsForType(type);
        }

        /**
         * 移除指定侦听器报告的所有事件
         * @param listener
         */
        public removeEventsForListener(listener:Function):void {
            this._listenerManager.removeEventsForListener(listener);
        }

        /**
         * 移除所有侦听
         */
        public removeEventListeners():void {
            this._listenerManager.removeEventListeners();
        }

        /**
         * 获取指定事件或所有事件的总侦听数
         * @param type
         * @returns {number}
         */
        public getTotalEventListeners(type:string = null):number {
            return this._listenerManager.getTotalEventListeners(type);
        }

        /**
         * 获取当前子元件
         * @returns {Array<any>}
         */
        public children():Array<any> {
            return DisplayObjectUtil.getChildren(this);
        }

        /**
         * 移除所有子元件
         * @param destroyChildren
         * @param recursive
         */
        public removeAllChildren(destroyChildren:boolean = false, recursive:boolean = false):void {
            DisplayObjectUtil.removeAllChildren(this, destroyChildren, recursive);
        }

        /**
         * 移除所有子元件并销毁
         * @param destroyChildren
         * @param recursive
         */
        public removeAllChildrenAndDestroy(destroyChildren:boolean = false, recursive:boolean = false):void {
            this.removeAllChildren(destroyChildren, recursive);
            this.destroy();
        }

        /**
         * 释放
         */
        public destroy():void {
            this._listenerManager.destroy();
            this.isDestroyed = true;
            if (this.parent != null)
                this.parent.removeChild(this);
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