/**
 * Created by d8q8 on 2014/8/28.
 *
 * @class LHeart
 * @constructor
 **/
module lcp {
    /**
     * 绘制心形
     * 笛卡尔心形 r = a(1 - sinθ)
     */
    export class LHeart extends LGraphics {
        public CLASS_NAME:string = 'LHeart';

        public constructor(vars?:IGraphics) {
            super();
            if(vars){
                vars.width = vars.radius * 2;
                vars.height = vars.radius * 2;
                super.init(vars);
            }
        }

        public drawShape():void{
            var angle:number; //储存极角
            var dist:number; //储存极径
            var sin:number;
            var cos:number;
            this.graphics.moveTo(0, 0);

            for (var i:number = 1; i < 360; i++)
            {
                //计算极角和极径
                angle = Math.PI * i / 180;
                sin = Math.sin(angle);
                cos = Math.cos(angle);
                dist = this.vars.radius * (1 - sin);
                //将极坐标转化为直角坐标并画线
                this.graphics.lineTo(this.vars.radius - dist * cos, -dist * sin);
            }
        }

        public clone(vars?:LHeart):LHeart{
            return new LHeart(vars?vars:this.vars);
        }
    }
}