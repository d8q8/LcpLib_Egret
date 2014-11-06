/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LStar
 * @constructor
 **/
module lcp{
    /**
     * 绘制多角星
     */
    export class LStar extends LGraphics{
        public CLASS_NAME:string = "LStar";

        public constructor(vars?:IGraphics){
            super();
            if(vars){
                super.init(vars);
            }
        }

		public drawShape():void
		{
			this.graphics.moveTo(this.vars.width / 2, 0);
			for(var i:number = 0; i < this.vars.corner; i++)
			{
				var rad:number = Math.PI / this.vars.corner * (2 * i + 1);
				this.graphics.lineTo(this.vars.width  / 2 * (1 + Math.sin(rad) * this.vars.ratio), this.vars.height / 2 * (1 - Math.cos(rad) * this.vars.ratio));
				rad = Math.PI / this.vars.corner * (2 * i + 2);
				this.graphics.lineTo(this.vars.width  / 2 * (1 + Math.sin(rad)), this.vars.height / 2 * (1 - Math.cos(rad)));
			}
		}

        public clone(vars?:IGraphics):LStar{
            return new LStar(vars?vars:this.vars);
        }
    }
}