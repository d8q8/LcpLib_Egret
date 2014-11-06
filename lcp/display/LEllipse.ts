/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LEllipse
 * @constructor
 **/
module lcp {
    /**
     * 绘制椭圆类
     */
    export class LEllipse extends LGraphics{
        public CLASS_NAME:string = "LEllipse";

        public constructor(vars?:IGraphics) {
            super();
            if(vars){
                super.init(vars);
            }
        }
        public drawShape():void{
            this.graphics.drawEllipse(this.vars.width/2,this.vars.height/2,this.vars.width/2,this.vars.height/2);
        }

        public clone(vars?:IGraphics):LEllipse{
            return new LEllipse(vars?vars:this.vars);
        }
    }
}