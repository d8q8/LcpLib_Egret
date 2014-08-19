/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LRect
 * @constructor
 **/
module Lcp{
    /**
     * 绘制矩形
     */
    export class LRect extends LGraphics{
        public CLASS_NAME:string = "LRect";

        constructor(vars?:IGraphics){
            super(vars);
            this.x = vars.x + vars.width/2;
            this.y = vars.y + vars.height/2;
        }

        public drawShape():void{
            this.graphics.drawRect(0,0,this.vars.width,this.vars.height);
        }

        public clone():LRect{
            return new LRect(this.vars);
        }
    }
}