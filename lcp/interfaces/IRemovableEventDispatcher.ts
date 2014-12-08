/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class IRemovableEventDispatcher
 * @constructor
 **/
module lcp {
    /**
     * 移除事件派发器类接口
     */
    export interface IRemovableEventDispatcher extends egret.IEventDispatcher {

        /**
         * 移除指定类型的所有事件
         * @param type
         */
        removeEventsForType(type:string):void;

        /**
         * 移除指定侦听器报告的所有事件
         * @param listener
         */
        removeEventsForListener(listener:Function):void;

        /**
         * 移除所有侦听
         */
        removeEventListeners():void;

        /**
         * 获取指定事件或所有事件的总侦听数
         * @param type
         */
        getTotalEventListeners(type?:string):number;
    }
}