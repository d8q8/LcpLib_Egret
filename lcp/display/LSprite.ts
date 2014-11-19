/**
 * Created by d8q8 on 2014/8/20.
 * @module lcp
 * @class LSprite
 * @constructor
 **/
module lcp {
    export class LSprite extends egret.Sprite{
        public CLASS_NAME:string = 'LSprite';

        private __dragOffsetX:number;
        private __dragOffsetY:number;
        private __dragTarget:any;
        private __dragBounds:egret.Rectangle;

        private _moveFunc:Function;
        private _outFunc:Function;
        private _mouseX:number;
        private _mouseY:number;

        private isDragging:boolean;
        private dragX:number;
        private dragY:number;

        constructor() {
            super();
            this.__dragOffsetX = 0;
            this.__dragOffsetY = 0;
            this.__dragTarget = null;
            this.__dragBounds = null;

            this._moveFunc = null;
            this._outFunc = null;
            this._mouseX = 0;
            this._mouseY = 0;

            this.isDragging = false;//是否正在拖放
            this.dragX = 0;//拖放时需要临时使用的坐标变量
            this.dragY = 0;
        }

        /**
         * 开始拖拽
         * @param lockCenter
         * @param bounds
         */
        public startDrag(lockCenter:boolean=false, bounds:egret.Rectangle=null):void{
            this._startDrag(this, lockCenter, bounds);
        }

        private _startDrag(target:any, lockCenter:boolean=false, bounds:egret.Rectangle=null):void
        {
            this.__dragTarget = target;
            this.__dragBounds = bounds;


            this._moveFunc = (e) => {

                if (lockCenter)
                {
                    /*var localPoint:egret.Point = target.globalToLocal(e.stageX, e.stageY);
                    target.x += localPoint.x;
                    target.y += localPoint.y;*/
                    this._mouseX = e.stageX;
                    this._mouseY = e.stageY;
                    target.x = this._mouseX;
                    target.y = this._mouseY;
                }
                else{
                    var localPoint:egret.Point = target.globalToLocal(e.stageX, e.stageY);
                    this._mouseX = localPoint.x;
                    this._mouseY = localPoint.y;
                    this.dragX = this._mouseX + target.x;
                    this.dragY = this._mouseX + target.y;
                    this.__dragOffsetX = target.x - this.dragX;
                    this.__dragOffsetY = target.y - this.dragY;
                    target.x += this.__dragOffsetX;
                    target.y += this.__dragOffsetY;
                    this.dragX = target.x;
                    this.dragY = target.y;
                }

                //handle startDrag
                var _target = this.__dragTarget;
                if (_target)
                {
                    var newX = _target.x - this.__dragOffsetX;
                    var newY = _target.y - this.__dragOffsetY;
                    var _bounds = this.__dragBounds;

                    if (_bounds)
                    {
                        if (newX < _bounds.x)
                        {
                            newX = _bounds.x;
                        }
                        if (newY < _bounds.y)
                        {
                            newY = _bounds.y;
                        }
                        if (newX > _bounds.x + _bounds.width)
                        {
                            newX = _bounds.x + _bounds.width;
                        }
                        if (newY > _bounds.y + _bounds.height)
                        {
                            newY = _bounds.y + _bounds.height;
                        }
                    }

                    _target.x = newX;
                    _target.y = newY;
                }
            };

            this._outFunc = (e) => {
                this._stopDrag();
            };
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this._outFunc,this);
        }

        /**
         * 拖拽结束
         */
        public stopDrag():void{
            this._stopDrag();
        }

        private _stopDrag():void{
            this.__dragOffsetX = 0;
            this.__dragOffsetY = 0;
            this.__dragTarget = null;
            this.__dragBounds = null;

            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this._outFunc,this);
        }
    }
}