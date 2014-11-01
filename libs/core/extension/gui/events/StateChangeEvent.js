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
         * @class egret.gui.StateChangeEvent
         * @classdesc
         * 视图状态改变事件
         * @extends egret.Event
         */
        var StateChangeEvent = (function (_super) {
            __extends(StateChangeEvent, _super);
            /**
             * @method egret.gui.StateChangeEvent#constructor
             * @param type {string}
             * @param bubbles {boolean}
             * @param cancelable {boolean}
             * @param oldState {string}
             * @param newState {string}
             */
            function StateChangeEvent(type, bubbles, cancelable, oldState, newState) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                if (oldState === void 0) { oldState = null; }
                if (newState === void 0) { newState = null; }
                _super.call(this, type, bubbles, cancelable);
                this.oldState = oldState;
                this.newState = newState;
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.StateChangeEvent.dispatchStateChangeEvent
             */
            StateChangeEvent.dispatchStateChangeEvent = function (target, type, oldState, newState) {
                if (oldState === void 0) { oldState = null; }
                if (newState === void 0) { newState = null; }
                var eventClass = StateChangeEvent;
                var props = egret.Event._getPropertyData(eventClass);
                props.oldState = oldState;
                props.newState = newState;
                egret.Event._dispatchByTarget(eventClass, target, type, props);
            };
            /**
             * 当前视图状态已经改变
             * @constant egret.gui.StateChangeEvent.CURRENT_STATE_CHANGE
             */
            StateChangeEvent.CURRENT_STATE_CHANGE = "currentStateChange";
            /**
             * 当前视图状态即将改变
             * @constant egret.gui.StateChangeEvent.CURRENT_STATE_CHANGING
             */
            StateChangeEvent.CURRENT_STATE_CHANGING = "currentStateChanging";
            return StateChangeEvent;
        })(egret.Event);
        gui.StateChangeEvent = StateChangeEvent;
        StateChangeEvent.prototype.__class__ = "gui.StateChangeEvent";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
