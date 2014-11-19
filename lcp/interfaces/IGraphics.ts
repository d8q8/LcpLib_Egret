/**
 * Created by d8q8 on 2014/8/18.
 * @module lcp
 * @class IGraphics
 * @constructor
 **/
module lcp {
    /**
     * 绘图基本属性接口
     */
    export interface IGraphics {
        //基本属性
        x?:number;//元件x坐标
        y?:number;//元件y坐标
        name?:string;//元件实例名,如sp
        width?:number;//元件宽度
        height?:number;//元件高度
        anchorX?:number;//元件x锚点,旋转时会用到
        anchorY?:number;//元件y锚点,旋转时会用到
        touchEnabled?:boolean;//是否有触点事件
        //样式属性
        thickness?:number;//一个整数，以点为单位表示线条的粗细，有效值为 0 到 255.
        linecolor?:number;//线条的十六进制颜色值（例如，红色为 0xFF0000，蓝色为 0x0000FF 等）。
        linealpha?:number;//表示线条颜色的 Alpha 值的数字；有效值为 0 到 1。
        pixelHinting?:boolean;//指定是否提示笔触采用完整像素
        scaleMode?:string;//用于指定要使用的比例模式
        caps?:string;//用于指定线条末端处端点类型的 CapsStyle 类的值
        joints?:string;//指定用于拐角的连接外观的类型
        miterLimit?:number;//用于表示剪切斜接的极限值的数字
        //填充属性
        fillcolor?:number;//填充颜色,如0xff0000 红色
        fillalpha?:number;//填充透明度,有效值为 0 到 1

        radius?:number;//半径及圆角半径
        ellipseWidth?:number;//圆角宽半径
        ellipseHeight?:number;//圆角高半径
        corner?:number;//多边形角
        ratio?:number;//多角星比率

        petal?:number;//花瓣数,偶数翻倍,奇数不变


    }

}