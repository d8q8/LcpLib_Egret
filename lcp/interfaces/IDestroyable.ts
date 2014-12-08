/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class IDestroyable
 * @constructor
 **/
module lcp {
    /**
     * 销毁类接口
     */
    export interface IDestroyable{
        isDestroyed:boolean;
        destroy():void;
    }
}