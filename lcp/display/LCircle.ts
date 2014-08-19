/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LCircle
 * @constructor
 **/
module Lcp{
    /**
     * 绘制圆形类
     */
    export class LCircle extends LGraphics{
        public CLASS_NAME:string = "LCircle";

        constructor(vars?:IGraphics){
            super(vars);
            this.width = vars.radius * 2;
            this.height = vars.radius * 2;
            this.vars.radius = vars.radius;
        }

        public drawShape():void{
            this.graphics.drawCircle(this.vars.radius,this.vars.radius,this.vars.radius);
        }

        public clone():LCircle{
            return new LCircle(this.vars);
        }
    }
}