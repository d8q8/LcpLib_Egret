/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class IResumable
 * @constructor
 **/
module lcp {
    /**
     * 恢复类接口
     */
    export interface IResumable extends IRunnable{
        resume():void;
    }
}