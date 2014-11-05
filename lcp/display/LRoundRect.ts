/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LRoundRect
 * @constructor
 **/
module lcp {
    /**
     * 绘制圆角矩形
     */
    export class LRoundRect extends LGraphics{
        public CLASS_NAME:string = "LRoundRect";

        constructor(vars?:IGraphics){
            super(vars);

            this.x = this.vars.x;
            this.y = this.vars.y;
            this.width = this.vars.width;
            this.height = this.vars.height;
            this.touchEnabled = this.vars.touchEnabled;
            this.name = this.vars.name;

        }

        public drawShape():void{
            this.graphics.drawRoundRect(0,0,this.vars.width,this.vars.height,this.vars.ellipseWidth,this.vars.ellipseHeight);
        }

        public clone():LRoundRect{
            return arguments.callee(this.vars);
        }
    }
}