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
            this.x = vars.x + vars.width / 2;
            this.y = vars.y + vars.width / 2;
        }
        public drawShape():void{
            this.graphics.drawEllipse(0,0,this.vars.width,this.vars.height);
        }

    }
}