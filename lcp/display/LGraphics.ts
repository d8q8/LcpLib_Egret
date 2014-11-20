/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LGraphics
 * @constructor
 **/
module lcp {
    /**
     * 绘图基类
     */
    export class LGraphics extends LSprite {
        public CLASS_NAME:string = "LGraphics";

        public constructor(public vars?:IGraphics) {
            super();
            this.vars = {};
            this.initValue();//初始化属性值
        }

        /**
         * 初始化图形子类处理方法
         * @param vars
         */
        public init(vars?:IGraphics){
            if(vars){
                LVars.some(this.vars,vars);
                this.x = this.vars.x;
                this.y = this.vars.y;
                this.name = this.vars.name;
                this.width = this.vars.width;
                this.height = this.vars.height;
                this.touchEnabled = this.vars.touchEnabled;
            }
            this.draw();
        }

        /**
         * 初始化默认值
         */
        public initValue():void{
            this.vars.x = 0;
            this.vars.y = 0;
            this.vars.name = this.CLASS_NAME;
            this.vars.width = 0;
            this.vars.height = 0;
            this.vars.anchorX = .5;
            this.vars.anchorY = .5;
            this.vars.touchEnabled = true;

            this.vars.thickness = NaN;
            this.vars.linecolor = 0;
            this.vars.linealpha = 1.0;
            this.vars.pixelHinting = false;
            this.vars.scaleMode = "normal";
            this.vars.caps = null;
            this.vars.joints = null;
            this.vars.miterLimit = 3;

            this.vars.fillcolor = 0xffffff;
            this.vars.fillalpha = 1;

            this.vars.radius = 5;
            this.vars.ellipseWidth = 20;
            this.vars.ellipseHeight = this.vars.ellipseWidth;
            this.vars.corner = 3;
            this.vars.ratio = .5;
            this.vars.petal = 4;
        }

        /**
         * 绘制图形
         */
        public draw():void {
            this.graphics.clear();
            this.graphics.lineStyle(this.vars.thickness, this.vars.linecolor, this.vars.linealpha, this.vars.pixelHinting, this.vars.scaleMode, this.vars.caps, this.vars.joints, this.vars.miterLimit);
            this.graphics.beginFill(this.vars.fillcolor, this.vars.fillalpha);
            this.drawShape();
            this.graphics.endFill();
        }

        /**
         * 重写图形方法
         */
        public drawShape():void {

        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            return this.CLASS_NAME;
        }

    }

}