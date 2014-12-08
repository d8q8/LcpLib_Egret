/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class IActivatable
 * @constructor
 **/
module lcp {
    /**
     * 激活类接口
     */
    export interface IActivatable{
        isActive: boolean;
        activate():void;
        deactivate():void;
    }
}