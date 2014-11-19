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
    var gui;
    (function (gui) {
        /**
            * @class egret.gui.ViewportScroller
            * @classdesc
            * 适用Viewport的滑动类
            * @extends egret.Scroller
            */
        var ViewportScroller = (function (_super) {
            __extends(ViewportScroller, _super);
            /**
                * @method egret.gui.GroupBase#constructor
                */
            function ViewportScroller(content) {
                _super.call(this, content);
                this.content = content;
                this._content = content;
            }
            ViewportScroller.prototype._updateContentPosition = function () {
                var content = this.content;
                content.horizontalScrollPosition = this._scrollLeft;
                content.verticalScrollPosition = this._scrollTop;
                content.width = this.width;
                content.height = this.height;
                this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
            };
            ViewportScroller.prototype.getMaxScrollLeft = function () {
                var content = this.content;
                return content.contentWidth - content.width;
            };
            ViewportScroller.prototype.getMaxScrollTop = function () {
                var content = this.content;
                return content.contentHeight - content.height;
            };
            ViewportScroller.prototype._getContentWidth = function () {
                return this._content.contentWidth;
            };
            ViewportScroller.prototype._getContentHeight = function () {
                return this._content.contentHeight;
            };
            return ViewportScroller;
        })(egret.ScrollView);
        /**
         * @class egret.gui.Scroller
         * @classdesc
         * 滚动条组件
         * @extends egret.gui.UIComponent
         * @implements egret.gui.IVisualElementContainer
         */
        var Scroller = (function (_super) {
            __extends(Scroller, _super);
            /**
             * 构造函数
             * @method egret.gui.Scroller#constructor
             */
            function Scroller() {
                _super.call(this);
                this._verticalScrollPolicy = "auto";
                this._horizontalScrollPolicy = "auto";
                this.hostComponentKey = "egret.gui.Scroller";
            }
            Object.defineProperty(Scroller.prototype, "hBar", {
                get: function () {
                    egret.Logger.warning("Scroller.hBar已废弃，请使用Scroller.horizontalScrollBar");
                    return this.horizontalScrollBar;
                },
                set: function (value) {
                    egret.Logger.warning("Scroller.hBar已废弃，请使用Scroller.horizontalScrollBar设置");
                    this.horizontalScrollBar = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Scroller.prototype, "vBar", {
                get: function () {
                    egret.Logger.warning("Scroller.vBar已废弃，请使用Scroller.verticalScrollBar");
                    return this.verticalScrollBar;
                },
                set: function (value) {
                    egret.Logger.warning("Scroller.vBar已废弃，请使用Scroller.verticalScrollBar设置");
                    this.verticalScrollBar = value;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @method egret.gui.Scroller#measure
             */
            Scroller.prototype.measure = function () {
                if (!this._viewport)
                    return;
                this.measuredWidth = this._viewport.preferredWidth;
                this.measuredHeight = this._viewport.preferredHeight;
            };
            /**
             * @method egret.gui.Scroller#updateDisplayList
             * @param unscaledWidth {number}
             * @param unscaledHeight {number}
             */
            Scroller.prototype.updateDisplayList = function (unscaledWidth, unscaledHeight) {
                this._scroller._setWidth(unscaledWidth);
                this._scroller._setHeight(unscaledHeight);
                if (this.horizontalScrollBar) {
                    if (this._horizontalScrollPolicy != "off") {
                        this.horizontalScrollBar._setViewportMetric(unscaledWidth, this._viewport.contentWidth);
                        this.horizontalScrollBar._setWidth(unscaledWidth - 2);
                        this.horizontalScrollBar.x = 1;
                        this.horizontalScrollBar.y = unscaledHeight - this.horizontalScrollBar._height - 1;
                    }
                }
                if (this.verticalScrollBar) {
                    if (this._verticalScrollPolicy != "off") {
                        this.verticalScrollBar._setViewportMetric(unscaledHeight, this._viewport.contentHeight);
                        this.verticalScrollBar._setHeight(unscaledHeight - 2);
                        this.verticalScrollBar.y = 1;
                        this.verticalScrollBar.x = unscaledWidth - this.verticalScrollBar.width - 1;
                    }
                }
            };
            Object.defineProperty(Scroller.prototype, "verticalScrollPolicy", {
                /**
                 * 垂直滚动条显示策略，参见ScrollPolicy类定义的常量。
                 * @member egret.gui.Scroller#verticalScrollPolicy
                 */
                get: function () {
                    return this._verticalScrollPolicy;
                },
                set: function (value) {
                    if (value == this._verticalScrollPolicy)
                        return;
                    this._verticalScrollPolicy = value;
                    this._checkVbar();
                    if (this._scroller)
                        this._scroller.verticalScrollPolicy = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Scroller.prototype, "horizontalScrollPolicy", {
                /**
                 * 水平滚动条显示策略，参见ScrollPolicy类定义的常量。
                 * @member egret.gui.Scroller#horizontalScrollPolicy
                 */
                get: function () {
                    return this._horizontalScrollPolicy;
                },
                set: function (value) {
                    if (value == this._horizontalScrollPolicy)
                        return;
                    this._horizontalScrollPolicy = value;
                    this._checkHbar();
                    if (this._scroller)
                        this._scroller.horizontalScrollPolicy = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Scroller.prototype, "viewport", {
                /**
                 * 要滚动的视域组件。
                 * @member egret.gui.Scroller#viewport
                 */
                get: function () {
                    return this._viewport;
                },
                set: function (value) {
                    if (value == this._viewport)
                        return;
                    this.uninstallViewport();
                    this._viewport = value;
                    this.installViewport();
                    this.dispatchEventWith("viewportChanged");
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 安装并初始化视域组件
             */
            Scroller.prototype.installViewport = function () {
                if (this.viewport) {
                    this.viewport.clipAndEnableScrolling = true;
                    this._scroller = new ViewportScroller(this.viewport);
                    this._scroller.addEventListener(egret.Event.CHANGE, this._scrollerChangedHandler, this);
                    this._scroller.horizontalScrollPolicy = this._horizontalScrollPolicy;
                    this._scroller.verticalScrollPolicy = this._verticalScrollPolicy;
                    this._addToDisplayListAt(this._scroller, 0);
                }
                //this._addScrollBars();
            };
            Scroller.prototype._onAddToStage = function () {
                _super.prototype._onAddToStage.call(this);
                this._scroller._stage = this.stage;
            };
            /**
             * 卸载视域组件
             */
            Scroller.prototype.uninstallViewport = function () {
                if (this.viewport) {
                    this.viewport.clipAndEnableScrolling = false;
                    this._removeFromDisplayList(this.viewport);
                }
                this._removeScrollBars();
            };
            Scroller.prototype._scrollerChangedHandler = function (e) {
                this.setViewportHScrollPosition(this._scroller.scrollLeft);
                this.setViewportVScrollPosition(this._scroller.scrollTop);
            };
            Scroller.prototype.setViewportVScrollPosition = function (pos) {
                if (this._scroller.scrollTop != pos)
                    this._scroller.scrollTop = pos;
                if (this.verticalScrollBar && this.verticalScrollBar.value != pos)
                    this.verticalScrollBar.setPosition(pos);
            };
            Scroller.prototype.setViewportHScrollPosition = function (pos) {
                if (this._scroller.scrollLeft != pos)
                    this._scroller.scrollLeft = pos;
                if (this.horizontalScrollBar && this.horizontalScrollBar.value != pos)
                    this.horizontalScrollBar._setValue(pos);
            };
            /**
             * 缓动到水平滚动位置
             * @method egret.gui.Scroller#throwHorizontally
             * @param hspTo {number}
             * @param duration {number}
             */
            Scroller.prototype.throwHorizontally = function (hspTo, duration) {
                if (duration === void 0) { duration = 500; }
                if (!this._scroller)
                    return;
                this._scroller.setScrollLeft(hspTo, duration);
            };
            /**
             * 缓动到垂直滚动位置
             * @method egret.gui.Scroller#throwVertically
             * @param vspTo {number}
             * @param duration {number}
             */
            Scroller.prototype.throwVertically = function (vspTo, duration) {
                if (duration === void 0) { duration = 500; }
                if (!this._scroller)
                    return;
                this._scroller.setScrollTop(vspTo, duration);
            };
            Object.defineProperty(Scroller.prototype, "numElements", {
                /**
                 * @member egret.gui.Scroller#numElements
                 */
                get: function () {
                    return this.viewport ? 1 : 0;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 抛出索引越界异常
             */
            Scroller.prototype.throwRangeError = function (index) {
                throw new RangeError("索引:\"" + index + "\"超出可视元素索引范围");
            };
            /**
             * @method egret.gui.Scroller#getElementAt
             * @param index {number}
             * @returns {IVisualElement}
             */
            Scroller.prototype.getElementAt = function (index) {
                if (this.viewport && index == 0)
                    return this.viewport;
                else
                    this.throwRangeError(index);
                return null;
            };
            /**
             * @method egret.gui.Scroller#getElementIndex
             * @param element {IVisualElement}
             * @returns {number}
             */
            Scroller.prototype.getElementIndex = function (element) {
                if (element != null && element == this.viewport)
                    return 0;
                else
                    return -1;
            };
            /**
             * @method egret.gui.Scroller#containsElement
             * @param element {IVisualElement}
             * @returns {boolean}
             */
            Scroller.prototype.containsElement = function (element) {
                if (element != null && element == this.viewport)
                    return true;
                return false;
            };
            Scroller.prototype.throwNotSupportedError = function () {
                throw new Error("此方法在Scroller组件内不可用!");
            };
            /**
             * @method egret.gui.Scroller#addElement
             * @deprecated
             * @param element {IVisualElement}
             * @returns {IVisualElement}
             */
            Scroller.prototype.addElement = function (element) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#addElementAt
             * @deprecated
             * @param element {IVisualElement}
             * @param index {number}
             * @returns {IVisualElement}
             */
            Scroller.prototype.addElementAt = function (element, index) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#removeElement
             * @deprecated
             * @param element {IVisualElement}
             * @returns {IVisualElement}
             */
            Scroller.prototype.removeElement = function (element) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#removeElementAt
             * @deprecated
             * @param index {number}
             * @returns {IVisualElement}
             */
            Scroller.prototype.removeElementAt = function (index) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#removeAllElements
             * @deprecated
             */
            Scroller.prototype.removeAllElements = function () {
                this.throwNotSupportedError();
            };
            /**
             * @method egret.gui.Scroller#setElementIndex
             * @deprecated
             * @param element {IVisualElement}
             * @param index {number}
             */
            Scroller.prototype.setElementIndex = function (element, index) {
                this.throwNotSupportedError();
            };
            /**
             * @method egret.gui.Scroller#swapElements
             * @deprecated
             * @param element1 {IVisualElement}
             * @param element2 {IVisualElement}
             */
            Scroller.prototype.swapElements = function (element1, element2) {
                this.throwNotSupportedError();
            };
            /**
             * @method egret.gui.Scroller#swapElementsAt
             * @deprecated
             * @param index1 {number}
             * @param index2 {number}
             */
            Scroller.prototype.swapElementsAt = function (index1, index2) {
                this.throwNotSupportedError();
            };
            /**
             * @method egret.gui.Scroller#addChild
             * @deprecated
             * @param child {DisplayObject}
             * @returns {DisplayObject}
             */
            Scroller.prototype.addChild = function (child) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#addChildAt
             * @deprecated
             * @param child {DisplayObject}
             * @param index {number}
             * @returns {DisplayObject}
             */
            Scroller.prototype.addChildAt = function (child, index) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#removeChild
             * @deprecated
             * @param child {DisplayObject}
             * @returns {DisplayObject}
             */
            Scroller.prototype.removeChild = function (child) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#removeChildAt
             * @deprecated
             * @param index {number}
             * @returns {DisplayObject}
             */
            Scroller.prototype.removeChildAt = function (index) {
                this.throwNotSupportedError();
                return null;
            };
            /**
             * @method egret.gui.Scroller#setChildIndex
             * @deprecated
             * @param child {DisplayObject}
             * @param index {number}
             */
            Scroller.prototype.setChildIndex = function (child, index) {
                this.throwNotSupportedError();
            };
            /**
             * @method egret.gui.Scroller#swapChildren
             * @deprecated
             * @param child1 {DisplayObject}
             * @param child2 {DisplayObject}
             */
            Scroller.prototype.swapChildren = function (child1, child2) {
                this.throwNotSupportedError();
            };
            /**
             * @method egret.gui.Scroller#swapChildrenAt
             * @deprecated
             * @param index1 {number}
             * @param index2 {number}
             */
            Scroller.prototype.swapChildrenAt = function (index1, index2) {
                this.throwNotSupportedError();
            };
            Scroller.prototype._checkHbar = function () {
                if (this._horizontalScrollPolicy == "off") {
                    if (this.horizontalScrollBar) {
                        this._removeFromDisplayList(this.horizontalScrollBar);
                    }
                    return;
                }
                var bar = this.horizontalScrollBar;
                bar.addEventListener(egret.Event.CHANGE, this.hBarChanged, this, false);
                bar._setViewportMetric(this._viewport.width, this._viewport.contentWidth);
                this.horizontalScrollBar = bar;
                this._addToDisplayList(this.horizontalScrollBar);
            };
            Scroller.prototype._checkVbar = function () {
                if (this._verticalScrollPolicy == "off") {
                    if (this.verticalScrollBar) {
                        this._removeFromDisplayList(this.verticalScrollBar);
                    }
                    return;
                }
                var vbar = this.verticalScrollBar;
                vbar.addEventListener(egret.Event.CHANGE, this.vBarChanged, this, false);
                vbar._setViewportMetric(this._viewport.height, this._viewport.contentHeight);
                this.verticalScrollBar = vbar;
                this._addToDisplayList(this.verticalScrollBar);
            };
            /**
             * 若皮肤是ISkin,则调用此方法附加皮肤中的公共部件
             * @method egret.gui.Scroller#partAdded
             * @param partName {string}
             * @param instance {any}
             */
            Scroller.prototype.partAdded = function (partName, instance) {
                _super.prototype.partAdded.call(this, partName, instance);
                if (instance == this.horizontalScrollBar) {
                    this._checkHbar();
                }
                if (instance == this.verticalScrollBar) {
                    this._checkVbar();
                }
            };
            Scroller.prototype._removeScrollBars = function () {
                if (this.horizontalScrollBar) {
                    this._removeFromDisplayList(this.horizontalScrollBar);
                    this.horizontalScrollBar.removeEventListener(egret.Event.CHANGE, this.hBarChanged, this, false);
                    this.horizontalScrollBar = null;
                }
                if (this.verticalScrollBar) {
                    this._removeFromDisplayList(this.verticalScrollBar);
                    this.verticalScrollBar.removeEventListener(egret.Event.CHANGE, this.vBarChanged, this, false);
                    this.verticalScrollBar = null;
                }
            };
            Scroller.prototype.hBarChanged = function (e) {
                this.setViewportHScrollPosition(this.horizontalScrollBar._getValue());
            };
            Scroller.prototype.vBarChanged = function (e) {
                this.setViewportVScrollPosition(this.verticalScrollBar.getPosition());
            };
            return Scroller;
        })(gui.SkinnableComponent);
        gui.Scroller = Scroller;
        Scroller.prototype.__class__ = "gui.Scroller";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
