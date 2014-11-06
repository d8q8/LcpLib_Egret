/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LCircle
 * @constructor
 **/
module lcp {
    /**
     * 绘制圆形类
     */
    export class LCircle extends LGraphics{
        public CLASS_NAME:string = "LCircle";

        public constructor(vars?:IGraphics){
            super();
            if(vars){
                vars.width = vars.radius * 2;
                vars.height = vars.radius * 2;
                super.init(vars);
            }
        }

        public drawShape():void{
            this.graphics.drawCircle(this.vars.radius, this.vars.radius, this.vars.radius);
        }

        public clone(vars?:IGraphics):LCircle{
            return new LCircle(vars?vars:this.vars);
        }
    }
}