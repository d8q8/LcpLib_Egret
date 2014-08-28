/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LGraphics
 * @constructor
 **/
module Lcp{
    /**
     * 绘图基类
     */
    export class LGraphics extends egret.Sprite{
        public CLASS_NAME:string = "LGraphics";

        private _vars:IGraphics;
        public get vars():IGraphics{return this._vars;}
        public set vars(value:IGraphics){
            this._vars = value;
        }

        constructor(vars?:IGraphics){
            super();
            if(vars!=null){
                this._vars = vars;
            }
            this.x = vars.x ? vars.x : 0;
            this.y = vars.y ? vars.y : 0;
            this.name = vars.name ? vars.name : this.CLASS_NAME;
            this.width = vars.width ? vars.width : 0;
            this.height = vars.height ? vars.height : 0;
            this.anchorX = vars.anchorX ? vars.anchorX : .5;
            this.anchorY = vars.anchorY ? vars.anchorY : .5;

            this._vars.thickness = vars.thickness ? vars.thickness : NaN;
            this._vars.linecolor = vars.linecolor ? vars.linecolor : 0;
            this._vars.linealpha = vars.linealpha ? vars.linealpha : 1.0;
            this._vars.pixelHinting = vars.pixelHinting ? vars.pixelHinting : false;
            this._vars.scaleMode = vars.scaleMode ? vars.scaleMode : "normal";
            this._vars.caps = vars.caps ? vars.caps : null;
            this._vars.joints = vars.joints ? vars.joints : null;
            this._vars.miterLimit = vars.miterLimit ? vars.miterLimit : 3;

            this._vars.fillcolor =  vars.fillcolor ? vars.fillcolor : 0xffffff;
            this._vars.fillalpha = vars.fillalpha ? vars.fillalpha : 1;

            this._vars.radius = vars.radius ? vars.radius : 5;
            this._vars.ellipseWidth = vars.ellipseWidth ? vars.ellipseWidth : 5;
            this._vars.ellipseHeight = vars.ellipseHeight ? vars.ellipseHeight : vars.ellipseWidth;
            this._vars.corner = vars.corner ? vars.corner : 3;
            this._vars.ratio = vars.ratio ? vars.ratio : .5;
            this._vars.petal = vars.petal ? vars.petal : 4;
            this.draw();
        }

        private draw():void{
            this.graphics.clear();
            this.graphics.lineStyle(this._vars.thickness,this._vars.linecolor,this._vars.linealpha,this._vars.pixelHinting,this._vars.scaleMode,this._vars.caps,this._vars.joints,this._vars.miterLimit);
            this.graphics.beginFill(this._vars.fillcolor,this._vars.fillalpha);
            this.drawShape();
            this.graphics.endFill();
        }

        public drawShape():void{

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