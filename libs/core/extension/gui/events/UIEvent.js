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
         * @class egret.gui.UIEvent
         * @classdesc
         * UI事件
         * @extends egret.Event
         */
        var UIEvent = (function (_super) {
            __extends(UIEvent, _super);
            /**
             * @method egret.gui.UIEvent#constructor
             * @param type {string}
             * @param bubbles {boolean}
             * @param cancelable {boolean}
             */
            function UIEvent(type, bubbles, cancelable) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                _super.call(this, type, bubbles, cancelable);
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.UIEvent.dispatchUIEvent
             */
            UIEvent.dispatchUIEvent = function (target, type) {
                var eventClass = UIEvent;
                egret.Event._dispatchByTarget(eventClass, target, type);
            };
            /**
             * 组件初始化开始
             * @constant egret.gui.UIEvent.INITIALIZE
             */
            UIEvent.INITIALIZE = "initialize";
            /**
             * 组件创建完成
             * @constant egret.gui.UIEvent.CREATION_COMPLETE
             */
            UIEvent.CREATION_COMPLETE = "creationComplete";
            /**
             * 组件的一次三个延迟验证渲染阶段全部完成
             * @constant egret.gui.UIEvent.UPDATE_COMPLETE
             */
            UIEvent.UPDATE_COMPLETE = "updateComplete";
            /**
             * 当用户按下ButtonBase控件时分派。如果 autoRepeat属性为 true，则只要按钮处于按下状态，就将重复分派此事件。
             * @constant egret.gui.UIEvent.BUTTON_DOWN
             */
            UIEvent.BUTTON_DOWN = "buttonDown";
            /**
             * 改变结束
             * @constant egret.gui.UIEvent.CHANGE_END
             */
            UIEvent.CHANGE_END = "changeEnd";
            /**
             * 改变开始
             * @constant egret.gui.UIEvent.CHANGE_START
             */
            UIEvent.CHANGE_START = "changeStart";
            /**
             * 正在改变中
             * @constant egret.gui.UIEvent.CHANGING
             */
            UIEvent.CHANGING = "changing";
            /**
             * 值发生改变
             * @constant egret.gui.UIEvent.VALUE_COMMIT
             */
            UIEvent.VALUE_COMMIT = "valueCommit";
            /**
             * SkinnableComponent皮肤发生改变
             * @constant egret.gui.UIEvent.SKIN_CHANGED
             */
            UIEvent.SKIN_CHANGED = "skinChanged";
            /**
             * UIAsset的content属性解析完成
             * @constant egret.gui.UIEvent.CONTENT_CHANGED
             */
            UIEvent.CONTENT_CHANGED = "contentChanged";
            /**
             * 下拉框弹出事件
             * @constant egret.gui.UIEvent.OPEN
             */
            UIEvent.OPEN = "open";
            /**
             * 下拉框关闭事件
             * @constant egret.gui.UIEvent.CLOSE
             */
            UIEvent.CLOSE = "close";
            /**
             * UIMoveClip一次播放完成事件。仅当UIMovieClip.totalFrames>1时会抛出此事件。
             * @constant egret.gui.UIEvent.PLAY_COMPLETE
             */
            UIEvent.PLAY_COMPLETE = "playComplete";
            return UIEvent;
        })(egret.Event);
        gui.UIEvent = UIEvent;
        UIEvent.prototype.__class__ = "gui.UIEvent";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
