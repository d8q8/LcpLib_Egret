/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LRoundRect
 * @constructor
 **/
module Lcp {
    /**
     * 绘制圆角矩形
     */
    export class LRoundRect extends LGraphics{
        public CLASS_NAME:string = "LRoundRect";

        constructor(vars?:IGraphics){
            super(vars);
            this.x = vars.x + vars.width / 2;
            this.y = vars.y + vars.height / 2;
            this.vars.ellipseWidth = vars.ellipseWidth ? vars.ellipseWidth : 5;
            this.vars.ellipseHeight = vars.ellipseHeight ? vars.ellipseHeight : vars.ellipseWidth;
        }

        public drawShape():void{
            this.graphics.drawRoundRect(0,0,this.vars.width,this.vars.height,this.vars.ellipseWidth,this.vars.ellipseHeight);
        }

        public clone():LRoundRect{
            return new LRoundRect(this.vars);
        }
    }
}