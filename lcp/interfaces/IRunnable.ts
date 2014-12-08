/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class IRunnable
 * @constructor
 **/
module lcp {
    /**
     * 运行类接口
     */
    export interface IRunnable{
        start():void;
        stop():void;
    }
}