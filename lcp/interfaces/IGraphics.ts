/**
 * Created by d8q8 on 2014/8/18.
 * @module Lcp
 * @class IGraphics
 * @constructor
 **/
module Lcp {
    /**
     * 绘图基本属性接口
     */
    export interface IGraphics {
        //基本属性
        x:number;
        y:number;
        name?:string;
        width?:number;
        height?:number;
        anchorX?:number;
        anchorY?:number;
        //样式属性
        thickness?:number;
        linecolor?:number;
        linealpha?:number;
        pixelHinting?:boolean;
        scaleMode?:string;
        caps?:string;
        joints?:string;
        miterLimit?:number;
        //填充属性
        fillcolor?:number;
        fillalpha?:number;

        radius?:number;//半径及圆角半径
        corner?:number;//多边形角
        ratio?:number;//多角星比率
    }

}