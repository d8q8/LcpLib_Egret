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
            this.vars.x = vars.x + vars.width / 2;
            this.vars.y = vars.y + vars.height / 2;
            this.vars.radius = vars.radius ? vars.radius : 5;
        }

        public drawShape():void{
            this.graphics.drawRect(0,0,this.vars.width,this.vars.height,this.vars.radius);
        }

    }
}