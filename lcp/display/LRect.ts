/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LRect
 * @constructor
 **/
module lcp{
    /**
     * 绘制矩形
     */
    export class LRect extends LGraphics{
        public CLASS_NAME:string = "LRect";

        public constructor(vars?:IGraphics){
            super();

            if(vars){
                super.init(vars);
            }
        }

        public drawShape():void{
            this.graphics.drawRect(0,0,this.vars.width,this.vars.height);
        }

        public clone(vars?:IGraphics):LRect{
            return new LRect(vars?vars:this.vars);
        }
    }
}