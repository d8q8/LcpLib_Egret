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
         * @class egret.gui.PopUpEvent
         * @classdesc
         * 弹出管理器事件
         * @extends egret.Event
         */
        var PopUpEvent = (function (_super) {
            __extends(PopUpEvent, _super);
            /**
             * 构造函数
             * @method egret.gui.PopUpEvent#constructor
             * @param type {string}
             * @param bubbles {boolean}
             * @param cancelable {boolean}
             * @param popUp {IVisualElement}
             * @param modal {boolean}
             */
            function PopUpEvent(type, bubbles, cancelable, popUp, modal) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                if (popUp === void 0) { popUp = null; }
                if (modal === void 0) { modal = false; }
                _super.call(this, type, bubbles, cancelable);
                this.popUp = popUp;
                this.modal = modal;
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.PopUpEvent.dispatchPopUpEvent
             */
            PopUpEvent.dispatchPopUpEvent = function (target, type, popUp, modal) {
                if (popUp === void 0) { popUp = null; }
                if (modal === void 0) { modal = false; }
                var eventClass = PopUpEvent;
                var props = egret.Event._getPropertyData(eventClass);
                props.popUp = popUp;
                props.modal = modal;
                egret.Event._dispatchByTarget(eventClass, target, type, props);
            };
            /**
             * 添加一个弹出框，在执行完添加之后抛出。
             * @constant egret.gui.PopUpEvent.ADD_POPUP
             */
            PopUpEvent.ADD_POPUP = "addPopUp";
            /**
             * 移除一个弹出框，在执行完移除之后抛出。
             * @constant egret.gui.PopUpEvent.REMOVE_POPUP
             */
            PopUpEvent.REMOVE_POPUP = "removePopUp";
            /**
             * 移动弹出框到最前，在执行完前置之后抛出。
             * @constant egret.gui.PopUpEvent.BRING_TO_FRONT
             */
            PopUpEvent.BRING_TO_FRONT = "bringToFront";
            return PopUpEvent;
        })(egret.Event);
        gui.PopUpEvent = PopUpEvent;
        PopUpEvent.prototype.__class__ = "gui.PopUpEvent";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
