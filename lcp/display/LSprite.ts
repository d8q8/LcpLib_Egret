/**
 * Created by d8q8 on 2014/8/20.
 * @module lcp
 * @class LSprite
 * @constructor
 **/
module lcp {
    /**
     * 精灵辅助类(主要完善精灵拖拽方法)
     */
    export class LSprite extends egret.Sprite {
        public CLASS_NAME:string = 'LSprite';

        private clickOffset:egret.Point;//拖拽起始坐标
        private _mouseX:number;//舞台x坐标
        private _mouseY:number;//舞台y坐标
        private _target:any;//当前元件
        private _moveFunc:Function;

        constructor() {
            super();
        }

        /**
         * 开始拖拽
         * @param lockCenter
         * @param bounds
         */
        public startDrag(e:egret.TouchEvent):void {
            this._target = e.currentTarget;
            this.clickOffset = new egret.Point(e.localX, e.localY);
            this._mouseX = e.stageX;
            this._mouseY = e.stageY;
            this._moveFunc = (e)=> {
                this._mouseX = e.stageX;
                this._mouseY = e.stageY;
            };
            this._target.addEventListener(egret.Event.ENTER_FRAME, this.enter_frame, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
        }

        /**
         * 拖拽结束
         */
        public stopDrag(e:egret.TouchEvent):void {
            this.clickOffset = null;
            this._target.removeEventListener(egret.Event.ENTER_FRAME, this.enter_frame, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
        }

        /**
         * 实时获取坐标
         * @param e
         */
        private enter_frame(e:egret.Event):void {
            if (this.clickOffset != null) {
                this._target.x = this._mouseX - this.clickOffset.x;
                this._target.y = this._mouseY - this.clickOffset.y;
            }
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