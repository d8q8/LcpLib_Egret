/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LEllipse
 * @constructor
 **/
module Lcp {
    /**
     * 绘制椭圆类
     */
    export class LEllipse extends LGraphics{
        public CLASS_NAME:string = "LEllipse";
        public constructor(vars?:IGraphics) {
            super(vars);

        }
        public drawShape():void{
            this.graphics.drawEllipse(this.vars.width/2,this.vars.height/2,this.vars.width/2,this.vars.height/2);
        }

        public clone():LEllipse{
            return new LEllipse(this.vars);
        }
    }
}