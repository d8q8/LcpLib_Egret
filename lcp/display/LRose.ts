/**
 * Created by d8q8 on 2014/8/28.
 *
 * @class LRose
 * @constructor
 **/
module Lcp {
    /**
     * 绘制玫瑰
     * 玫瑰曲线 r = a*cos(Kθ)
     */
    export class LRose extends LGraphics{
        public CLASS_NAME:string = 'LRose';

        constructor(vars?:IGraphics) {
            super(vars);
            this.width = vars.radius * 2;
            this.height = vars.radius * 2;
            this.vars.petal = vars.petal ? vars.petal : 4;
        }

        public drawShape():void{
            var angle:number; //储存极角
            var dist:number; //储存极径
            var sin:number;
            var cos:number;
            this.graphics.moveTo(0, this.vars.radius);

            for (var i:number = 1; i < 360; i++)
            {
                //计算极角和极径
                angle = Math.PI * i / 180;
                sin = Math.sin(angle);
                cos = Math.cos(angle);
                dist = this.vars.radius * Math.cos(angle * this.vars.petal);
                //将极坐标转化为直角坐标并画线
                this.graphics.lineTo(this.vars.radius - dist * cos, this.vars.radius - dist * sin);
            }
        }

        public clone():LRose{
            return new LRose(this.vars);
        }


    }
}