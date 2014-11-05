/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LGraphics
 * @constructor
 **/
module lcp {
    /**
     * 绘图基类
     */
    export class LGraphics extends egret.Sprite {
        public CLASS_NAME:string = "LGraphics";

        constructor(public vars?:IGraphics) {
            super();
            this.initValue();
            if(vars){
                this.init(vars);
            }
            this.draw();
        }

        public initValue():void{
            this.vars = {};
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
            this.vars.ellipseWidth = 5;
            this.vars.ellipseHeight = this.vars.ellipseWidth;
            this.vars.corner = 3;
            this.vars.ratio = .5;
            this.vars.petal = 4;
        }

        public init(vars:IGraphics):void{
            LVars.some(this.vars,vars);
        }

        public draw():void {
            this.graphics.clear();
            this.graphics.lineStyle(this.vars.thickness, this.vars.linecolor, this.vars.linealpha, this.vars.pixelHinting, this.vars.scaleMode, this.vars.caps, this.vars.joints, this.vars.miterLimit);
            this.graphics.beginFill(this.vars.fillcolor, this.vars.fillalpha);
            this.drawShape();
            this.graphics.endFill();
        }

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