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
     * @class egret.StageText
     * @classdesc
     * @extends egret.HashObject
     */
    var HTML5StageText = (function (_super) {
        __extends(HTML5StageText, _super);
        function HTML5StageText() {
            _super.call(this);
            this._isShow = true;
            this._canUse = false;
            this._inputType = "";
            this._isFirstClick = true;
            this._text = "";
            //默认文本内容，只有在创建输入文本的时候才可以使用
            this._defaultText = "";
            this._width = 0;
            this._height = 0;
            this._styleInfoes = {};
        }
        /**
         * @method egret.StageText#open
         * @param x {number}
         * @param y {number}
         * @param width {number}
         * @param height {number}
         */
        HTML5StageText.prototype._open = function (x, y, width, height) {
            if (width === void 0) { width = 160; }
            if (height === void 0) { height = 21; }
            var scaleX = egret.StageDelegate.getInstance().getScaleX();
            var scaleY = egret.StageDelegate.getInstance().getScaleY();
            var div = egret.Browser.getInstance().$new("div");
            div.position.x = x * scaleX;
            div.position.y = y * scaleY;
            div.scale.x = scaleX;
            div.scale.y = scaleY;
            div.transforms();
            div.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            this.div = div;
            this._createInput();
            div.style.display = "block";
            div.style.background = "none";
            div.style.pointerEvents = "none";
            this._call = this.onHandler.bind(this);
        };
        HTML5StageText.prototype._addListeners = function () {
            if (window.navigator.msPointerEnabled) {
                this.addListener("MSPointerDown");
                this.addListener("MSPointerUp");
            }
            else if (egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE) {
                this.addListener("touchstart");
                this.addListener("touchend");
                this.addListener("touchcancel");
            }
            else if (egret.MainContext.deviceType == egret.MainContext.DEVICE_PC) {
                this.addListener("mousedown");
                this.addListener("mouseup");
            }
            this.addListener("focus");
            this.addListener("blur");
            this._isShow = true;
            this._closeInput();
            this.closeKeyboard();
        };
        HTML5StageText.prototype._removeListeners = function () {
            if (window.navigator.msPointerEnabled) {
                this.removeListener("MSPointerDown");
                this.removeListener("MSPointerUp");
            }
            else if (egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE) {
                this.removeListener("touchstart");
                this.removeListener("touchend");
                this.removeListener("touchcancel");
            }
            else if (egret.MainContext.deviceType == egret.MainContext.DEVICE_PC) {
                this.removeListener("mousedown");
                this.removeListener("mouseup");
            }
            this.removeListener("blur");
            this.removeListener("focus");
        };
        HTML5StageText.prototype.addListener = function (type) {
            this.inputElement.addEventListener(type, this._call);
        };
        HTML5StageText.prototype.removeListener = function (type) {
            this.inputElement.removeEventListener(type, this._call);
        };
        HTML5StageText.prototype.onHandler = function (e) {
            e["isScroll"] = true;
            if (e.type == "blur") {
                this.dispatchEvent(new egret.Event("blur"));
                this._closeInput();
            }
            else if (e.type == "focus") {
                if (this._canUse) {
                    this._canUse = false;
                    this._openInput();
                    this.dispatchEvent(new egret.Event("focus"));
                }
                else {
                    e["isScroll"] = false;
                    this.inputElement.blur();
                }
            }
            else if (e.type == "touchstart" || e.type == "mousedown" || e.type == "MSPointerDown") {
                if (this._isShow) {
                    e.stopPropagation();
                }
            }
        };
        /**
         * @method egret.StageText#add
         */
        HTML5StageText.prototype._show = function () {
            this._canUse = true;
        };
        HTML5StageText.prototype._hide = function () {
            if (this._canUse) {
                this._canUse = false;
                this._closeInput();
                this.closeKeyboard();
            }
        };
        HTML5StageText.prototype._openInput = function () {
            if (!this._isShow) {
                this._isShow = true;
                if (this._isFirstClick) {
                    this._isFirstClick = false;
                    this._text = this._defaultText;
                    this.setElementValue(this._defaultText);
                }
                else {
                    this.setElementValue(this._text);
                }
            }
        };
        HTML5StageText.prototype._closeInput = function () {
            if (this._isShow) {
                this._text = this.inputElement.value;
                this._isShow = false;
                this.setElementValue("");
            }
        };
        HTML5StageText.prototype.closeKeyboard = function () {
            this.inputElement.focus();
            this.inputElement.blur();
        };
        HTML5StageText.prototype.getStageDelegateDiv = function () {
            var stageDelegateDiv = egret.Browser.getInstance().$("#StageDelegateDiv");
            if (!stageDelegateDiv) {
                stageDelegateDiv = egret.Browser.getInstance().$new("div");
                stageDelegateDiv.id = "StageDelegateDiv";
                //                stageDelegateDiv.style.position = "absolute";
                var container = document.getElementById(egret.StageDelegate.canvas_div_name);
                container.appendChild(stageDelegateDiv);
                stageDelegateDiv.transforms();
            }
            return stageDelegateDiv;
        };
        HTML5StageText.prototype._add = function () {
            var div = this.div;
            if (div && !div.parentNode) {
                var stageDelegateDiv = this.getStageDelegateDiv();
                stageDelegateDiv.appendChild(div);
            }
        };
        /**
         * @method egret.StageText#remove
         */
        HTML5StageText.prototype._remove = function () {
            var div = this.div;
            if (div && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        };
        HTML5StageText.prototype.changePosition = function (x, y) {
            var scaleX = egret.StageDelegate.getInstance().getScaleX();
            var scaleY = egret.StageDelegate.getInstance().getScaleY();
            this.div.position.x = x * scaleX;
            this.div.position.y = y * scaleY;
            this.div.transforms();
        };
        HTML5StageText.prototype._createInput = function () {
            var self = this;
            var isChanged = false;
            var inputElement;
            if (this._multiline && self._inputType != "textarea") {
                isChanged = true;
                this._inputType = "textarea";
                inputElement = document.createElement("textarea");
                inputElement.type = "text";
                inputElement.style.resize = "none";
            }
            else if (!this._multiline && self._inputType != "input") {
                isChanged = true;
                this._inputType = "input";
                inputElement = document.createElement("input");
                inputElement.type = "text";
            }
            if (isChanged) {
                this._styleInfoes = {};
                this._isFirstClick = true;
                if (self.inputElement && self.inputElement.parentNode) {
                    var parentNode = self.inputElement.parentNode;
                    parentNode.removeChild(self.inputElement);
                    this._removeListeners();
                    this.inputElement = inputElement;
                    parentNode.appendChild(self.inputElement);
                    this._addListeners();
                }
                else {
                    this.inputElement = inputElement;
                }
                this.setElementValue(self._defaultText);
                self.div.appendChild(inputElement);
            }
            //修改属性
            self.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
            self.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
            self.setElementStyle("textAlign", this._textAlign);
            self.setElementStyle("fontSize", self._size + "px");
            self.setElementStyle("lineHeight", self._size + "px");
            self.setElementStyle("fontFamily", self._fontFamily);
            self.setElementStyle("color", self._color);
            self.setElementStyle("width", self._width + "px");
            self.setElementStyle("height", self._height + "px");
            //默认值
            self.setElementStyle("border", "none");
            self.setElementStyle("background", "none");
            self.setElementStyle("margin", "0");
            self.setElementStyle("padding", "0");
            self.setElementStyle("outline", "medium");
            self.setElementStyle("verticalAlign", "top");
            self.div.style.pointerEvents = self._visible ? "auto" : "none";
        };
        HTML5StageText.prototype._resetStageText = function () {
            this._createInput();
        };
        HTML5StageText.prototype.setElementValue = function (value) {
            if (!this._isFirstClick) {
                this.inputElement.value = value;
            }
        };
        /**
         * @method egret.StageText#getText
         * @returns {string}
         */
        HTML5StageText.prototype._getText = function () {
            if (this._isShow) {
                if (this._isFirstClick) {
                    return this._defaultText;
                }
                return this.inputElement.value;
            }
            return this._text;
        };
        /**
         * @method egret.StageText#setText
         * @param value {string}
         */
        HTML5StageText.prototype._setText = function (value) {
            this._text = value;
            this._defaultText = value;
            if (this._isShow) {
                this.setElementValue(value);
            }
        };
        /**
         * @method egret.StageText#setTextType
         * @param type {string}
         */
        HTML5StageText.prototype._setTextType = function (type) {
            this.inputElement.type = type;
        };
        /**
         * @method egret.StageText#getTextType
         * @returns {string}
         */
        HTML5StageText.prototype._getTextType = function () {
            return this.inputElement.type;
        };
        HTML5StageText.prototype._setWidth = function (value) {
            this._width = value;
        };
        HTML5StageText.prototype._setHeight = function (value) {
            this._height = value;
        };
        HTML5StageText.prototype.setElementStyle = function (style, value) {
            if (this.inputElement) {
                if (this._styleInfoes[style] != value) {
                    this.inputElement.style[style] = value;
                    this._styleInfoes[style] = value;
                }
            }
        };
        return HTML5StageText;
    })(egret.StageText);
    egret.HTML5StageText = HTML5StageText;
    HTML5StageText.prototype.__class__ = "egret.HTML5StageText";
})(egret || (egret = {}));
egret.StageText.create = function () {
    return new egret.HTML5StageText();
};
