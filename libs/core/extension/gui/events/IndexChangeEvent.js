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
         * @class egret.gui.IndexChangeEvent
         * @classdesc
         * 索引改变事件
         * @extends egret.Event
         */
        var IndexChangeEvent = (function (_super) {
            __extends(IndexChangeEvent, _super);
            /**
             * @method egret.gui.IndexChangeEvent#constructor
             * @param type {string}
             * @param bubbles {boolean}
             * @param cancelable {boolean}
             * @param oldIndex {number}
             * @param newIndex {number}
             */
            function IndexChangeEvent(type, bubbles, cancelable, oldIndex, newIndex) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                if (oldIndex === void 0) { oldIndex = -1; }
                if (newIndex === void 0) { newIndex = -1; }
                _super.call(this, type, bubbles, cancelable);
                this.oldIndex = oldIndex;
                this.newIndex = newIndex;
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.IndexChangeEvent.dispatchIndexChangeEvent
             */
            IndexChangeEvent.dispatchIndexChangeEvent = function (target, type, oldIndex, newIndex, cancelable) {
                if (oldIndex === void 0) { oldIndex = -1; }
                if (newIndex === void 0) { newIndex = -1; }
                if (cancelable === void 0) { cancelable = false; }
                var eventClass = IndexChangeEvent;
                var props = egret.Event._getPropertyData(eventClass);
                props.oldIndex = oldIndex;
                props.newIndex = newIndex;
                return egret.Event._dispatchByTarget(eventClass, target, type, props, false, cancelable);
            };
            /**
             * 指示索引已更改
             * @constant egret.gui.IndexChangeEvent.CHANGE
             */
            IndexChangeEvent.CHANGE = "change";
            /**
             * 指示索引即将更改,可以通过调用preventDefault()方法阻止索引发生更改
             * @constant egret.gui.IndexChangeEvent.CHANGING
             */
            IndexChangeEvent.CHANGING = "changing";
            return IndexChangeEvent;
        })(egret.Event);
        gui.IndexChangeEvent = IndexChangeEvent;
        IndexChangeEvent.prototype.__class__ = "gui.IndexChangeEvent";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
