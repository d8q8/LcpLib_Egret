/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LRect
 * @constructor
 **/
module lcp{
    /**
     * 绘制矩形
     */
    export class LRect extends LGraphics{
        public CLASS_NAME:string = "LRect";

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
            this.graphics.drawRect(0,0,this.vars.width,this.vars.height);
        }

        public clone():LRect{
            return arguments.callee(this.vars);
        }
    }
}