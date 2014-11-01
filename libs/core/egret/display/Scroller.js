/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    /**
     * @class egret.Scroller
     * @classdesc
     * Scroller 是用于滑动的辅助类，将一个显示对象传入构造函数即可
     * @extends egret.DisplayObject
     */
    var Scroller = (function (_super) {
        __extends(Scroller, _super);
        /**
         * 创建一个 egret.Scroller 对象
         * @method egret.Scroller#constructor
         * @param content {egret.DisplayObject} 需要滚动的对象
         * @param width {number} Scroller的宽度，默认值为content的宽度
         * @param height {number} Scroller的高度，默认值为content的高度
         */
        function Scroller(content, width, height) {
            if (width === void 0) { width = NaN; }
            if (height === void 0) { height = NaN; }
            _super.call(this);
            this.content = content;
            this._lastTouchPosition = new egret.Point(0, 0);
            this._lastTouchTime = 0;
            this._lastTouchEvent = null;
            this._velocitys = [];
            this._scrollXEnabled = true;
            this._scrollYEnabled = true;
            this._scrollLeft = 0;
            this._scrollTop = 0;
            content.touchEnabled = true;
            this.touchEnabled = true;
            width = width === NaN ? content.explicitWidth || content.width : width;
            height = height === NaN ? content.explicitHeight || content.height : height;
            content.scrollRect = new egret.Rectangle(0, 0, width, height);
            this.width = width;
            this.height = height;
            this._addEvents();
        }
        Scroller.prototype._onAddToStage = function () {
            _super.prototype._onAddToStage.call(this);
            if (!this.content._parent) {
                this._parent.addChildAt(this.content, this._parent.getChildIndex(this));
            }
        };
        Object.defineProperty(Scroller.prototype, "scrollXEnabled", {
            /**
             * 是否启用水平滚动
             * @member {boolean} egret.Scroller#scrollXEnabled
             * @returns {boolean}
             */
            get: function () {
                return this._scrollXEnabled;
            },
            set: function (value) {
                this._setScrollXEnabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Scroller.prototype._setScrollXEnabled = function (value) {
            if (this._scrollXEnabled == value)
                return;
            this._scrollXEnabled = value;
        };
        Object.defineProperty(Scroller.prototype, "scrollYEnabled", {
            /**
             * 是否启用垂直滚动
             * @member {boolean} egret.Scroller#scrollYEnabled
             * @returns {boolean}
             */
            get: function () {
                return this._scrollYEnabled;
            },
            set: function (value) {
                this._setScrollYEnabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Scroller.prototype._setScrollYEnabled = function (value) {
            if (this._scrollYEnabled == value)
                return;
            this._scrollYEnabled = value;
        };
        Object.defineProperty(Scroller.prototype, "scrollLeft", {
            /**
             * 获取或设置水平滚动位置,
             * @member {number} egret.Scroller#scrollLeft
             * @returns {number}
             */
            get: function () {
                return this._scrollLeft;
            },
            set: function (value) {
                if (value == this._scrollLeft)
                    return;
                this._scrollLeft = value;
                this._updateContentPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scroller.prototype, "scrollTop", {
            /**
             * 获取或设置垂直滚动位置,
             * @member {number} egret.Scroller#scrollTop
             * @returns {number}
             */
            get: function () {
                return this._scrollTop;
            },
            set: function (value) {
                if (value == this._scrollTop)
                    return;
                this._scrollTop = value;
                this._updateContentPosition();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 设置滚动位置
         * @method egret.Scroller#setScrollPosition
         * @param top {number} 垂直滚动位置
         * @param left {number} 水平滚动位置
         * @param isOffset {boolean} 可选参数，默认是false，是否是滚动增加量，如 top=1 代表往上滚动1像素
         */
        Scroller.prototype.setScrollPosition = function (top, left, isOffset) {
            if (isOffset === void 0) { isOffset = false; }
            if (isOffset && top == 0 && left == 0)
                return;
            if (!isOffset && this._scrollTop == top && this._scrollLeft == left)
                return;
            if (isOffset) {
                this._scrollTop += top;
                this._scrollLeft += left;
            }
            else {
                this._scrollTop = top;
                this._scrollLeft = left;
            }
            this._updateContentPosition();
        };
        /**
         * @inheritDoc
         */
        Scroller.prototype._setWidth = function (value) {
            if (this._explicitWidth == value)
                return;
            _super.prototype._setWidth.call(this, value);
            this._updateContentPosition();
        };
        /**
         * @inheritDoc
         */
        Scroller.prototype._setHeight = function (value) {
            if (this._explicitHeight == value)
                return;
            _super.prototype._setHeight.call(this, value);
            this._updateContentPosition();
        };
        Scroller.prototype._updateContentPosition = function () {
            this.content.scrollRect = new egret.Rectangle(this._scrollLeft, this._scrollTop, this.width, this.height);
            this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
        };
        Scroller.prototype._addEvents = function () {
            this.content.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
        };
        Scroller.prototype._removeEvents = function () {
            this.content.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            ;
        };
        Scroller.prototype._onTouchBegin = function (e) {
            if (e._isDefaultPrevented)
                return;
            egret.Tween.removeTweens(this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this._onTouchEnd, this);
            this.stage.addEventListener(egret.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
            this._logTouchEvent(e);
        };
        Scroller.prototype._onTouchMove = function (event) {
            var offset = this._getPointChange(event);
            this.setScrollPosition(offset.y, offset.x, true);
            this._calcVelocitys(event);
            this._logTouchEvent(event);
        };
        Scroller.prototype._onTouchEnd = function (event) {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this._onTouchEnd, this);
            this.stage.removeEventListener(egret.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
            this._moveAfterTouchEnd();
        };
        Scroller.prototype._onEnterFrame = function (event) {
            var time = egret.getTimer();
            if (time - this._lastTouchTime > 100 && time - this._lastTouchTime < 300) {
                this._calcVelocitys(this._lastTouchEvent);
            }
        };
        Scroller.prototype._logTouchEvent = function (e) {
            this._lastTouchPosition.x = e.stageX;
            this._lastTouchPosition.y = e.stageY;
            this._lastTouchEvent = this.cloneTouchEvent(e);
            this._lastTouchTime = egret.getTimer();
        };
        Scroller.prototype._getPointChange = function (e) {
            return {
                x: this._scrollXEnabled == false ? 0 : (this._lastTouchPosition.x - e.stageX),
                y: this._scrollYEnabled == false ? 0 : (this._lastTouchPosition.y - e.stageY)
            };
        };
        Scroller.prototype._calcVelocitys = function (e) {
            var time = egret.getTimer();
            if (this._lastTouchTime == 0) {
                this._lastTouchTime = time;
                return;
            }
            var change = this._getPointChange(e);
            var timeoffset = time - this._lastTouchTime;
            change.x /= timeoffset;
            change.y /= timeoffset;
            this._velocitys.push(change);
            if (this._velocitys.length > 5)
                this._velocitys.shift();
            this._lastTouchPosition.x = e.stageX;
            this._lastTouchPosition.y = e.stageY;
        };
        Scroller.prototype._moveAfterTouchEnd = function () {
            if (this._velocitys.length == 0)
                return;
            var sum = { x: 0, y: 0 }, totalW = 0;
            for (var i = 0; i < this._velocitys.length; i++) {
                var v = this._velocitys[i];
                var w = Scroller.weight[i];
                sum.x += v.x * w;
                sum.y += v.y * w;
                totalW += w;
            }
            this._velocitys.length = 0;
            var x = sum.x / totalW, y = sum.y / totalW;
            var pixelsPerMSX = Math.abs(x), pixelsPerMSY = Math.abs(y);
            var maxLeft = (this.content.explicitWidth || this.content.width) - this.width;
            var maxTop = (this.content.explicitHeight || this.content.height) - this.height;
            var datax = pixelsPerMSX > 0.02 ? this.getAnimationDatas(x, this._scrollLeft, maxLeft) : { position: this._scrollLeft, duration: 0 };
            var datay = pixelsPerMSY > 0.02 ? this.getAnimationDatas(y, this._scrollTop, maxTop) : { position: this._scrollTop, duration: 0 };
            var twx = egret.Tween.get(this).to({ scrollLeft: datax.position }, datax.duration, egret.Ease.quartOut);
            var twy = egret.Tween.get(this).to({ scrollTop: datay.position }, datay.duration, egret.Ease.quartOut);
            //恢复由于滚动超出界限的部分
            var scrollLeft = Math.min(maxLeft, Math.max(datax.position, 0)), scrollTop = Math.min(maxTop, Math.max(datay.position, 0));
            if (scrollLeft != datax.position) {
                twx.to({ scrollLeft: scrollLeft }, 300, egret.Ease.quintOut);
            }
            if (scrollTop != datay.position) {
                twy.to({ scrollTop: scrollTop }, 300, egret.Ease.quintOut);
            }
        };
        Scroller.prototype.getAnimationDatas = function (pixelsPerMS, curPos, maxPos) {
            var absPixelsPerMS = Math.abs(pixelsPerMS);
            var extraFricition = 0.95;
            var duration = 0;
            var friction = 0.998;
            var minVelocity = 0.02;
            var posTo = curPos + pixelsPerMS * 500;
            if (posTo < 0 || posTo > maxPos) {
                posTo = curPos;
                while (Math.abs(pixelsPerMS) > minVelocity) {
                    posTo += pixelsPerMS;
                    if (posTo < 0 || posTo > maxPos) {
                        pixelsPerMS *= friction * extraFricition;
                    }
                    else {
                        pixelsPerMS *= friction;
                    }
                    duration++;
                }
            }
            else {
                duration = -Math.log(minVelocity / absPixelsPerMS) * 500;
            }
            var result = {
                position: Math.min(maxPos + 50, Math.max(posTo, -50)),
                duration: duration
            };
            return result;
        };
        Scroller.prototype.cloneTouchEvent = function (event) {
            var evt = new egret.TouchEvent(event._type, event._bubbles, event.cancelable);
            evt.touchPointID = event.touchPointID;
            evt._stageX = event._stageX;
            evt._stageY = event._stageY;
            evt.ctrlKey = event.ctrlKey;
            evt.altKey = event.altKey;
            evt.shiftKey = event.shiftKey;
            evt.touchDown = event.touchDown;
            evt._isDefaultPrevented = false;
            evt._target = event._target;
            return evt;
        };
        Scroller.weight = [1, 1.33, 1.66, 2, 2.33];
        return Scroller;
    })(egret.DisplayObject);
    egret.Scroller = Scroller;
    Scroller.prototype.__class__ = "egret.Scroller";
})(egret || (egret = {}));
