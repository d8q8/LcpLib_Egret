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
         * @class egret.gui.ObjectCollection
         * @classdesc
         * Object的集合类数据结构包装器,通常作为Tree组件的数据源。
         * @extends egret.EventDispatcher
         * @implements egret.gui.ICollection
         * @implements egret.gui.ITreeCollection
         */
        var ObjectCollection = (function (_super) {
            __extends(ObjectCollection, _super);
            /**
             * 构造函数
             * @method egret.gui.ObjectCollection#constructor
             * @param childrenKey {string} 要从item中获取子项列表的属性名,属性值为一个数组或Vector。
             * @param parentKey {string} 要从item中获取父级项的属性名
             */
            function ObjectCollection(childrenKey, parentKey) {
                if (childrenKey === void 0) { childrenKey = "children"; }
                if (parentKey === void 0) { parentKey = "parent"; }
                _super.call(this);
                /**
                 * 要显示的节点列表
                 */
                this.nodeList = [];
                this._openNodes = [];
                this._showRoot = false;
                this.childrenKey = childrenKey;
                this.parentKey = parentKey;
            }
            Object.defineProperty(ObjectCollection.prototype, "source", {
                /**
                 * 数据源。注意：设置source会同时清空openNodes。
                 * @member egret.gui.ObjectCollection#source
                 */
                get: function () {
                    return this._source;
                },
                set: function (value) {
                    this._source = value;
                    this._openNodes = [];
                    this.nodeList = [];
                    if (this._source) {
                        if (this._showRoot) {
                            this.nodeList.push(this._source);
                        }
                        else {
                            this._openNodes = [this._source];
                            this.addChildren(this._source, this.nodeList);
                        }
                    }
                    this.dispatchCoEvent(gui.CollectionEventKind.RESET);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ObjectCollection.prototype, "openNodes", {
                /**
                 * 处于展开状态的节点列表
                 * @member egret.gui.ObjectCollection#openNodes
                 */
                get: function () {
                    return this._openNodes.concat();
                },
                set: function (value) {
                    this._openNodes = value ? value.concat() : [];
                    this.refresh();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ObjectCollection.prototype, "length", {
                /**
                 * @member egret.gui.ObjectCollection#length
                 */
                get: function () {
                    return this.nodeList.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @method egret.gui.ObjectCollection#getItemAt
             * @param index {number}
             * @returns {any}
             */
            ObjectCollection.prototype.getItemAt = function (index) {
                return this.nodeList[index];
            };
            /**
             * @method egret.gui.ObjectCollection#getItemIndex
             * @param item {any}
             * @returns {number}
             */
            ObjectCollection.prototype.getItemIndex = function (item) {
                var length = this.nodeList.length;
                for (var i = 0; i < length; i++) {
                    if (this.nodeList[i] === item) {
                        return i;
                    }
                }
                return -1;
            };
            /**
             * 通知视图，某个项目的属性已更新。
             * @method egret.gui.ObjectCollection#itemUpdated
             * @param item {any}
             */
            ObjectCollection.prototype.itemUpdated = function (item) {
                var index = this.getItemIndex(item);
                if (index != -1) {
                    this.dispatchCoEvent(gui.CollectionEventKind.UPDATE, index, -1, [item]);
                }
            };
            /**
             * 删除指定节点
             * @method egret.gui.ObjectCollection#removeItem
             * @param item {any}
             */
            ObjectCollection.prototype.removeItem = function (item) {
                if (this.isItemOpen(item))
                    this.closeNode(item);
                if (!item)
                    return;
                var parent = item[this.parentKey];
                if (!parent)
                    return;
                var list = parent[this.childrenKey];
                if (!list)
                    return;
                var index = list.indexOf(item);
                if (index != -1)
                    list.splice(index, 1);
                item[this.parentKey] = null;
                index = this.nodeList.indexOf(item);
                if (index != -1) {
                    this.nodeList.splice(index, 1);
                    this.dispatchCoEvent(gui.CollectionEventKind.REMOVE, index, -1, [item]);
                }
            };
            Object.defineProperty(ObjectCollection.prototype, "showRoot", {
                /**
                 * 是否显示根节点,默认false。
                 * @member egret.gui.ObjectCollection#showRoot
                 */
                get: function () {
                    return this._showRoot;
                },
                set: function (value) {
                    if (this._showRoot == value)
                        return;
                    this._showRoot = value;
                    if (this._source) {
                        if (this._showRoot) {
                            this.nodeList.splice(0, 0, this._source);
                        }
                        else {
                            this.nodeList.shift();
                            if (this.openNodes.indexOf(this._source) == -1)
                                this.openNodes.push(this._source);
                        }
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 添加打开的节点到列表
             */
            ObjectCollection.prototype.addChildren = function (parent, list) {
                if (!parent.hasOwnProperty(this.childrenKey) || this._openNodes.indexOf(parent) == -1)
                    return;
                var children = parent[this.childrenKey];
                var length = children.length;
                for (var i = 0; i < length; i++) {
                    var child = children[i];
                    list.push(child);
                    this.addChildren(child, list);
                }
            };
            /**
             * @method egret.gui.ObjectCollection#hasChildren
             * @param item {any}
             * @returns {boolean}
             */
            ObjectCollection.prototype.hasChildren = function (item) {
                if (item.hasOwnProperty(this.childrenKey))
                    return item[this.childrenKey].length > 0;
                return false;
            };
            /**
             * @method egret.gui.ObjectCollection#isItemOpen
             * @param item {any}
             * @returns {boolean}
             */
            ObjectCollection.prototype.isItemOpen = function (item) {
                return this._openNodes.indexOf(item) != -1;
            };
            /**
             * @method egret.gui.ObjectCollection#expandItem
             * @param item {any}
             * @param open {boolean}
             */
            ObjectCollection.prototype.expandItem = function (item, open) {
                if (open === void 0) { open = true; }
                if (open)
                    this.openNode(item);
                else
                    this.closeNode(item);
            };
            /**
             * 打开一个节点
             */
            ObjectCollection.prototype.openNode = function (item) {
                if (this._openNodes.indexOf(item) == -1) {
                    this._openNodes.push(item);
                    var index = this.nodeList.indexOf(item);
                    if (index != -1) {
                        var list = [];
                        this.addChildren(item, list);
                        var i = index;
                        while (list.length) {
                            i++;
                            var node = list.shift();
                            this.nodeList.splice(i, 0, node);
                            this.dispatchCoEvent(gui.CollectionEventKind.ADD, i, -1, [node]);
                        }
                        this.dispatchCoEvent("open", index, index, [item]);
                    }
                }
            };
            /**
             * 关闭一个节点
             */
            ObjectCollection.prototype.closeNode = function (item) {
                var index = this._openNodes.indexOf(item);
                if (index == -1)
                    return;
                var list = [];
                this.addChildren(item, list);
                this._openNodes.splice(index, 1);
                index = this.nodeList.indexOf(item);
                if (index != -1) {
                    index++;
                    while (list.length) {
                        var node = this.nodeList.splice(index, 1)[0];
                        this.dispatchCoEvent(gui.CollectionEventKind.REMOVE, index, -1, [node]);
                        list.shift();
                    }
                    index--;
                    this.dispatchCoEvent(gui.CollectionEventKind.CLOSE, index, index, [item]);
                }
            };
            /**
             * @method egret.gui.ObjectCollection#getDepth
             * @param item {any}
             * @returns {number}
             */
            ObjectCollection.prototype.getDepth = function (item) {
                var depth = 0;
                var parent = item[this.parentKey];
                while (parent) {
                    depth++;
                    parent = parent[this.parentKey];
                }
                if (depth > 0 && !this._showRoot)
                    depth--;
                return depth;
            };
            /**
             * 刷新数据源。
             * @method egret.gui.ObjectCollection#refresh
             */
            ObjectCollection.prototype.refresh = function () {
                this.nodeList = [];
                if (this._source) {
                    if (this._showRoot) {
                        this.nodeList.push(this._source);
                    }
                    this.addChildren(this._source, this.nodeList);
                }
                this.dispatchCoEvent(gui.CollectionEventKind.REFRESH);
            };
            /**
             * 抛出事件
             */
            ObjectCollection.prototype.dispatchCoEvent = function (kind, location, oldLocation, items, oldItems) {
                if (kind === void 0) { kind = null; }
                if (location === void 0) { location = -1; }
                if (oldLocation === void 0) { oldLocation = -1; }
                if (items === void 0) { items = null; }
                if (oldItems === void 0) { oldItems = null; }
                gui.CollectionEvent.dispatchCollectionEvent(this, gui.CollectionEvent.COLLECTION_CHANGE, kind, location, oldLocation, items, oldItems);
            };
            /**
             * 一个工具方法，给parent的子项以及子孙项赋值父级引用。
             * @method egret.gui.ObjectCollection.assignParent
             * @param parent {any} 要遍历子项的parent对象。
             * @param childrenKey {string} 要从parent中获取子项列表的属性名,属性值为一个数组或Vector。
             * @param parentKey {string} 要给子项赋值父级引用的属性名。
             */
            ObjectCollection.assignParent = function (parent, childrenKey, parentKey) {
                if (childrenKey === void 0) { childrenKey = "children"; }
                if (parentKey === void 0) { parentKey = "parent"; }
                if (!parent.hasOwnProperty(childrenKey))
                    return;
                var children = parent[childrenKey];
                var length = children.length;
                for (var i = 0; i < length; i++) {
                    var child = children[i];
                    try {
                        child[parentKey] = parent;
                    }
                    catch (e) {
                    }
                    ObjectCollection.assignParent(child, childrenKey, parentKey);
                }
            };
            return ObjectCollection;
        })(egret.EventDispatcher);
        gui.ObjectCollection = ObjectCollection;
        ObjectCollection.prototype.__class__ = "gui.ObjectCollection";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
