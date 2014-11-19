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
declare module egret.gui {
    /**
     * @class egret.gui.ICollection
     * @interface
     * @classdesc
     * 列表的集合类数据源对象接口
     * @extends egret.IEventDispatcher
     */
    interface ICollection extends IEventDispatcher {
        /**
         * 此集合中的项目数。0 表示不包含项目，而 -1 表示长度未知。
         * @member egret.gui.ICollection#length
         */
        length: number;
        /**
         * 获取指定索引处的项目。
         * @method egret.gui.ICollection#getItemAt
         * @throws RangeError 如果索引小于 0 或大于长度。
         * @param index {number}
         * @returns {any}
         */
        getItemAt(index: number): any;
        /**
         * 如果项目位于列表中,返回该项目的索引。否则返回-1。
         * @method egret.gui.ICollection#getItemIndex
         * @param item {any}
         * @returns {number}
         */
        getItemIndex(item: any): number;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ArrayCollection
     * @classdesc
     * 数组的集合类数据结构包装器
     * 通常作为列表组件的数据源，使用这种数据结构包装普通数组，
     * 能在数据源发生改变的时候主动通知视图刷新变更的数据项
     * @extends egret.EventDispatcher
     * @implements egret.gui.ICollection
     */
    class ArrayCollection extends EventDispatcher implements ICollection {
        /**
         * 构造函数
         * @method egret.gui.ArrayCollection#constructor
         * @param source {Array<any>} 数据源
         */
        constructor(source?: any[]);
        private _source;
        /**
         * 数据源
         * 通常情况下请不要直接调用Array的方法操作数据源，否则对应的视图无法收到数据改变的通知。
         * 若对数据源进行了排序或过滤等操作，请手动调用refresh()方法刷新数据。<br/>
         * @member egret.gui.ArrayCollection#source
         */
        source: any[];
        /**
         * 在对数据源进行排序或过滤操作后可以手动调用此方法刷新所有数据,以更新视图。
         * @method egret.gui.ArrayCollection#refresh
         */
        refresh(): void;
        /**
         * 是否包含某项数据
         * @method egret.gui.ArrayCollection#contains
         * @param item {any}
         * @returns {boolean}
         */
        contains(item: any): boolean;
        /**
         * 检测索引是否超出范围
         */
        private checkIndex(index);
        /**
         * @member egret.gui.ArrayCollection#length
         */
        length: number;
        /**
         * 向列表末尾添加指定项目。等效于 addItemAt(item, length)。
         * @method egret.gui.ArrayCollection#addItem
         * @param item {any}
         */
        addItem(item: any): void;
        /**
         * 在指定的索引处添加项目。
         * 任何大于已添加项目的索引的项目索引都会增加 1。
         * @method egret.gui.ArrayCollection#addItemAt
         * @throws RangeError 如果索引小于 0 或大于长度。
         * @param item {any}
         * @param index {number}
         */
        addItemAt(item: any, index: number): void;
        /**
         * @method egret.gui.ArrayCollection#getItemAt
         * @param index {number}
         * @returns {any}
         */
        getItemAt(index: number): any;
        /**
         * @method egret.gui.ArrayCollection#getItemIndex
         * @param item {any}
         * @returns {number}
         */
        getItemIndex(item: any): number;
        /**
         * 通知视图，某个项目的属性已更新。
         * @method egret.gui.ArrayCollection#itemUpdated
         * @param item {any}
         */
        itemUpdated(item: any): void;
        /**
         * 删除列表中的所有项目。
         * @method egret.gui.ArrayCollection#removeAll
         */
        removeAll(): void;
        /**
         * 删除指定索引处的项目并返回该项目。原先位于此索引之后的所有项目的索引现在都向前移动一个位置。
         * @method egret.gui.ArrayCollection#removeItemAt
         * @throws RangeError 如果索引小于 0 或大于长度。
         * @param index {number}
         * @returns {any}
         */
        removeItemAt(index: number): any;
        /**
         * 替换在指定索引处的项目，并返回该项目。
         * @method egret.gui.ArrayCollection#replaceItemAt
         * @throws RangeError 如果索引小于 0 或大于长度。
         * @param item {any}
         * @param index {number}
         * @returns {any}
         */
        replaceItemAt(item: any, index: number): any;
        /**
         * 用新数据源替换原始数据源，此方法与直接设置source不同，它不会导致目标视图重置滚动位置。
         * @method egret.gui.ArrayCollection#replaceAll
         * @param newSource {Array<any>} 新的数据源
         */
        replaceAll(newSource: any[]): void;
        /**
         * 移动一个项目
         * 在oldIndex和newIndex之间的项目，
         * 若oldIndex小于newIndex,索引会减1
         * 若oldIndex大于newIndex,索引会加1
         * @method egret.gui.ArrayCollection#moveItemAt
         * @param oldIndex {number}
         * @param newIndex {number}
         * @returns {any}
         * @throws RangeError 如果索引小于 0 或大于长度。
         */
        moveItemAt(oldIndex: number, newIndex: number): any;
        /**
         * 抛出事件
         */
        private dispatchCoEvent(kind?, location?, oldLocation?, items?, oldItems?);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ITreeCollection
     * @interface
     * @classdesc
     * Tree组件的集合类数据源对象接口
     * @extends egret.gui.ICollection
     */
    interface ITreeCollection extends ICollection {
        /**
         * 检查指定的节点是否含有子节点
         * @method egret.gui.ITreeCollection#hasChildren
         * @param item {any} 要检查的节点
         * @returns {boolean}
         */
        hasChildren(item: any): boolean;
        /**
         * 指定的节点是否打开
         * @method egret.gui.ITreeCollection#isItemOpen
         * @param item {any}
         * @returns {boolean}
         */
        isItemOpen(item: any): boolean;
        /**
         * 打开或关闭一个节点
         * @method egret.gui.ITreeCollection#expandItem
         * @param item {any} 要打开或关闭的节点
         * @param open? {boolean} true表示打开节点，反之关闭。
         */
        expandItem(item: any, open?: boolean): void;
        /**
         * 获取节点的深度
         * @method egret.gui.ITreeCollection#getDepth
         * @param item {any}
         * @returns {number}
         */
        getDepth(item: any): number;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ObjectCollection
     * @classdesc
     * Object的集合类数据结构包装器,通常作为Tree组件的数据源。
     * @extends egret.EventDispatcher
     * @implements egret.gui.ICollection
     * @implements egret.gui.ITreeCollection
     */
    class ObjectCollection extends EventDispatcher implements ICollection, ITreeCollection {
        /**
         * 构造函数
         * @method egret.gui.ObjectCollection#constructor
         * @param childrenKey {string} 要从item中获取子项列表的属性名,属性值为一个数组或Vector。
         * @param parentKey {string} 要从item中获取父级项的属性名
         */
        constructor(childrenKey?: string, parentKey?: string);
        /**
         * 要从item中获取子项列表的属性名
         */
        private childrenKey;
        /**
         * 要从item中获取父级项的属性名
         */
        private parentKey;
        private _source;
        /**
         * 数据源。注意：设置source会同时清空openNodes。
         * @member egret.gui.ObjectCollection#source
         */
        source: any;
        /**
         * 要显示的节点列表
         */
        private nodeList;
        private _openNodes;
        /**
         * 处于展开状态的节点列表
         * @member egret.gui.ObjectCollection#openNodes
         */
        openNodes: any[];
        /**
         * @member egret.gui.ObjectCollection#length
         */
        length: number;
        /**
         * @method egret.gui.ObjectCollection#getItemAt
         * @param index {number}
         * @returns {any}
         */
        getItemAt(index: number): any;
        /**
         * @method egret.gui.ObjectCollection#getItemIndex
         * @param item {any}
         * @returns {number}
         */
        getItemIndex(item: any): number;
        /**
         * 通知视图，某个项目的属性已更新。
         * @method egret.gui.ObjectCollection#itemUpdated
         * @param item {any}
         */
        itemUpdated(item: any): void;
        /**
         * 删除指定节点
         * @method egret.gui.ObjectCollection#removeItem
         * @param item {any}
         */
        removeItem(item: any): void;
        private _showRoot;
        /**
         * 是否显示根节点,默认false。
         * @member egret.gui.ObjectCollection#showRoot
         */
        showRoot: boolean;
        /**
         * 添加打开的节点到列表
         */
        private addChildren(parent, list);
        /**
         * @method egret.gui.ObjectCollection#hasChildren
         * @param item {any}
         * @returns {boolean}
         */
        hasChildren(item: any): boolean;
        /**
         * @method egret.gui.ObjectCollection#isItemOpen
         * @param item {any}
         * @returns {boolean}
         */
        isItemOpen(item: any): boolean;
        /**
         * @method egret.gui.ObjectCollection#expandItem
         * @param item {any}
         * @param open {boolean}
         */
        expandItem(item: any, open?: boolean): void;
        /**
         * 打开一个节点
         */
        private openNode(item);
        /**
         * 关闭一个节点
         */
        private closeNode(item);
        /**
         * @method egret.gui.ObjectCollection#getDepth
         * @param item {any}
         * @returns {number}
         */
        getDepth(item: any): number;
        /**
         * 刷新数据源。
         * @method egret.gui.ObjectCollection#refresh
         */
        refresh(): void;
        /**
         * 抛出事件
         */
        private dispatchCoEvent(kind?, location?, oldLocation?, items?, oldItems?);
        /**
         * 一个工具方法，给parent的子项以及子孙项赋值父级引用。
         * @method egret.gui.ObjectCollection.assignParent
         * @param parent {any} 要遍历子项的parent对象。
         * @param childrenKey {string} 要从parent中获取子项列表的属性名,属性值为一个数组或Vector。
         * @param parentKey {string} 要给子项赋值父级引用的属性名。
         */
        static assignParent(parent: any, childrenKey?: string, parentKey?: string): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.LayoutManager
     * @classdesc
     * 布局管理器
     * @extends egret.EventDispatcher
     */
    class LayoutManager extends EventDispatcher {
        /**
         * @method egret.gui.LayoutManager#constructor
         */
        constructor();
        private targetLevel;
        /**
         * 需要抛出组件初始化完成事件的对象
         */
        private updateCompleteQueue;
        private invalidatePropertiesFlag;
        private invalidateClientPropertiesFlag;
        private invalidatePropertiesQueue;
        /**
         * 标记组件提交过属性
         * @method egret.gui.LayoutManager#invalidateProperties
         * @param client {ILayoutManagerClient}
         */
        invalidateProperties(client: ILayoutManagerClient): void;
        /**
         * 使提交的属性生效
         */
        private validateProperties();
        private invalidateSizeFlag;
        private invalidateClientSizeFlag;
        private invalidateSizeQueue;
        /**
         * 标记需要重新测量尺寸
         * @method egret.gui.LayoutManager#invalidateSize
         * @param client {ILayoutManagerClient}
         */
        invalidateSize(client: ILayoutManagerClient): void;
        /**
         * 测量属性
         */
        private validateSize();
        private invalidateDisplayListFlag;
        private invalidateDisplayListQueue;
        /**
         * 标记需要重新测量尺寸
         * @method egret.gui.LayoutManager#invalidateDisplayList
         * @param client {ILayoutManagerClient}
         */
        invalidateDisplayList(client: ILayoutManagerClient): void;
        /**
         * 测量属性
         */
        private validateDisplayList();
        /**
         * 是否已经添加了事件监听
         */
        private listenersAttached;
        /**
         * 添加事件监听
         */
        private attachListeners();
        /**
         * 执行属性应用
         */
        private doPhasedInstantiationCallBack(event?);
        private doPhasedInstantiation();
        /**
         * 立即应用所有延迟的属性
         * @method egret.gui.LayoutManager#validateNow
         */
        validateNow(): void;
        /**
         * 使大于等于指定组件层级的元素立即应用属性
         * @method egret.gui.LayoutManager#validateClient
         * @param target {ILayoutManagerClient} 要立即应用属性的组件
         * @param skipDisplayList {boolean} 是否跳过更新显示列表阶段
         */
        validateClient(target: ILayoutManagerClient, skipDisplayList?: boolean): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.DepthQueue
     * @classdesc
     * 显示列表嵌套深度排序队列
     */
    class DepthQueue {
        /**
         * @method egret.gui.DepthQueue#constructor
         */
        constructor();
        /**
         * 深度队列
         */
        private depthBins;
        /**
         * 最小深度
         */
        private minDepth;
        /**
         * 最大深度
         */
        private maxDepth;
        /**
         * 插入一个元素
         * @method egret.gui.DepthQueue#insert
         * @param client {ILayoutManagerClient}
         */
        insert(client: ILayoutManagerClient): void;
        /**
         * 从队列尾弹出深度最大的一个对象
         * @method egret.gui.DepthQueue#pop
         * @returns {ILayoutManagerClient}
         */
        pop(): ILayoutManagerClient;
        /**
         * 从队列首弹出深度最小的一个对象
         * @method egret.gui.DepthQueue#shift
         * @returns {ILayoutManagerClient}
         */
        shift(): ILayoutManagerClient;
        /**
         * 移除大于等于指定组件层级的元素中最大的元素
         * @method egret.gui.DepthQueue#removeLargestChild
         * @param client {ILayoutManagerClient}
         * @returns {any}
         */
        removeLargestChild(client: ILayoutManagerClient): any;
        /**
         * 移除大于等于指定组件层级的元素中最小的元素
         * @method egret.gui.DepthQueue#removeSmallestChild
         * @param client {ILayoutManagerClient}
         * @returns {any}
         */
        removeSmallestChild(client: ILayoutManagerClient): any;
        /**
         * 移除一个元素
         * @method egret.gui.DepthQueue#remove
         * @param client {ILayoutManagerClient}
         * @param level {number}
         * @returns {ILayoutManagerClient}
         */
        remove(client: ILayoutManagerClient, level?: number): ILayoutManagerClient;
        /**
         * 清空队列
         * @method egret.gui.DepthQueue#removeAll
         */
        removeAll(): void;
        /**
         * 队列是否为空
         * @method egret.gui.DepthQueue#isEmpty
         * @returns {boolean}
         */
        isEmpty(): boolean;
    }
    /**
     * @class egret.gui.DepthBin
     * @classdesc
     * 列表项
     */
    class DepthBin {
        /**
         * @member egret.DepthBin#length
         */
        length: number;
        /**
         * @member egret.DepthBin#items
         */
        items: any;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IAssetAdapter
     * @interface
     * @classdesc
     * 素材适配器接口。
     * 若项目需要自定义UIAsset.source的解析规则，需要实现这个接口，
     * 然后调用Injector.mapClass("egret.gui.IAssetAdapter",YourAssetAdapter)注入到框架即可。
     */
    interface IAssetAdapter {
        /**
         * 解析素材
         * @method egret.gui.IAssetAdapter#getAsset
         * @param source {any} 待解析的新素材标识符
         * @param compFunc {Function} 解析完成回调函数，示例：compFunc(content:any,source:any):void;
         * 回调参数content接受两种类型：DisplayObject或Texture。
         * @param thisObject {any} compFunc的this引用
         * @param oldContent any 旧的内容对象,传入值有可能为null。
         * 对于某些类型素材，例如MovieClip，可以重用传入的显示对象,只修改其数据再返回。
         */
        getAsset(source: any, compFunc: Function, thisObject: any, oldContent: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IContainer
     * @interface
     * @classdesc
     * 容器接口
     */
    interface IContainer {
        /**
         * 此容器中的可视元素的数量。
         * 可视元素包括实现 IVisualElement 接口的类，
         * @member egret.gui.IContainer#numElements
         */
        numElements: number;
        /**
         * 返回指定索引处的可视元素。
         * @method egret.gui.IContainer#getElementAt
         * @param index {number} 要检索的元素的索引。
         * @throws RangeError 如果在子列表中不存在该索引位置。
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        /**
         * 将可视元素添加到此容器中。
         * 如果添加的可视元素已有一个不同的容器作为父项，则该元素将会从其他容器中删除。
         * @method egret.gui.IContainer#addElement
         * @param element {IVisualElement} 要添加为此容器的子项的可视元素。
         * @returns {IVisualElement}
         */
        addElement(element: IVisualElement): IVisualElement;
        /**
         * 将可视元素添加到此容器中。该元素将被添加到指定的索引位置。索引 0 代表显示列表中的第一个元素。
         * 如果添加的可视元素已有一个不同的容器作为父项，则该元素将会从其他容器中删除。
         * @method egret.gui.IContainer#addElementAt
         * @param element {IVisualElement} 要添加为此可视容器的子项的元素。
         * @param index {number} 将该元素添加到的索引位置。如果指定当前占用的索引位置，则该位置以及所有更高位置上的子对象会在子级列表中上移一个位置。
         * @throws RangeError 如果在子列表中不存在该索引位置。
         * @returns {IVisualElement}
         */
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
         * 从此容器的子列表中删除指定的可视元素。
         * 在该可视容器中，位于该元素之上的所有元素的索引位置都减少 1。
         * @method egret.gui.IContainer#removeElement
         * @param element {IVisualElement} 要从容器中删除的元素。
         * @returns {IVisualElement}
         */
        removeElement(element: IVisualElement): IVisualElement;
        /**
         * 从容器中的指定索引位置删除可视元素。
         * 在该可视容器中，位于该元素之上的所有元素的索引位置都减少 1。
         * @method egret.gui.IContainer#removeElementAt
         * @param index {number} 要删除的元素的索引。
         * @throws RangeError 如果在子列表中不存在该索引位置。
         * @returns {IVisualElement}
         */
        removeElementAt(index: number): IVisualElement;
        /**
         * 返回可视元素的索引位置。若不存在，则返回-1。
         * @method egret.gui.IContainer#getElementIndex
         * @param element {IVisualElement} 可视元素。
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * 在可视容器中更改现有可视元素的位置。
         * @method egret.gui.IContainer#setElementIndex
         * @param element {IVisualElement} 要为其更改索引编号的元素。
         * @param index {number} 元素的最终索引编号。
         * @throws RangeError 如果在子列表中不存在该索引位置。
         */
        setElementIndex(element: IVisualElement, index: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IDisplayText
     * @interface
     * @classdesc
     * 简单文本显示控件接口。
     * @extends egret.gui.IUIComponent
     */
    interface IDisplayText extends IUIComponent {
        /**
         * 此文本组件所显示的文本。
         * @member egret.gui.IDisplayText#text
         */
        text: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IEditableText
     * @interface
     * @classdesc
     * 可编辑文本控件接口
     * @extends egret.gui.IDisplayText
     */
    interface IEditableText extends IDisplayText {
        /**
         * 文本颜色。
         * @member egret.gui.IEditableText#textColor
         */
        textColor: number;
        /**
         * 指定文本字段是否是密码文本字段。如果此属性的值为 true，则文本字段被视为密码文本字段，
         * 并使用星号而不是实际字符来隐藏输入的字符。如果为 false，则不会将文本字段视为密码文本字段。
         * 启用密码模式时，“剪切”和“复制”命令及其对应的键盘快捷键将不起作用。
         * 此安全机制可防止不良用户使用快捷键在无人看管的计算机上破译密码。
         * @member egret.gui.IEditableText#displayAsPassword
         */
        displayAsPassword: boolean;
        /**
         * 文本是否可编辑的标志。
         * @member egret.gui.IEditableText#editable
         */
        editable: boolean;
        /**
         * 文本字段中最多可包含的字符数（即用户输入的字符数）。
         * 脚本可以插入比 maxChars 允许的字符数更多的文本；maxChars 属性仅表示用户可以输入多少文本。
         * 如果此属性的值为 0，则用户可以输入无限数量的文本。
         * @member egret.gui.IEditableText#maxChars
         */
        maxChars: number;
        /**
         * 表示字段是否为多行文本字段。如果值为 true，则文本字段为多行文本字段；
         * 如果值为 false，则文本字段为单行文本字段。在类型为 TextFieldType.INPUT 的字段中，
         * multiline 值将确定 Enter 键是否创建新行（如果值为 false，则将忽略 Enter 键）。
         * 如果将文本粘贴到其 multiline 值为 false 的 TextField 中，则文本中将除去新行。
         * @member egret.gui.IEditableText#multiline
         */
        multiline: boolean;
        /**
         * 表示用户可输入到文本字段中的字符集。如果 restrict 属性的值为 null，则可以输入任何字符。
         * 如果 restrict 属性的值为空字符串，则不能输入任何字符。如果 restrict 属性的值为一串字符，
         * 则只能在文本字段中输入该字符串中的字符。从左向右扫描该字符串。可以使用连字符 (-) 指定一个范围。
         * 只限制用户交互；脚本可将任何文本放入文本字段中。此属性不与属性检查器中的“嵌入字体”选项同步。 <p/>
         * 如果字符串以尖号 (ˆ) 开头，则先接受所有字符，然后从接受字符集中排除字符串中 ˆ 之后的字符。
         * 如果字符串不以尖号 (ˆ) 开头，则最初不接受任何字符，然后将字符串中的字符包括在接受字符集中。
         * @member egret.gui.IEditableText#restrict
         */
        restrict: string;
        /**
         * 一个布尔值，表示文本字段是否可选。值 true 表示文本可选。selectable 属性控制文本字段是否可选，
         * 而不控制文本字段是否可编辑。动态文本字段即使不可编辑，它也可能是可选的。
         * 如果动态文本字段是不可选的，则用户不能选择其中的文本。 <p/>
         * 如果 selectable 设置为 false，则文本字段中的文本不响应来自鼠标或键盘的选择命令，
         * 并且不能使用“复制”命令复制文本。如果 selectable 设置为 true，则可以使用鼠标或键盘选择文本字段中的文本，
         * 并且可以使用“复制”命令复制文本。即使文本字段是动态文本字段而不是输入文本字段，您也可以用这种方式选择文本。
         * @member egret.gui.IEditableText#selectable
         */
        selectable: boolean;
        /**
         * 当前所选内容中第一个字符从零开始的字符索引值。例如，第一个字符的索引值是 0，第二个字符的索引值是 1，
         * 依此类推。如果未选定任何文本，此属性为 caretIndex 的值。
         * @member egret.gui.IEditableText#selectionBeginIndex
         */
        selectionBeginIndex: number;
        /**
         * 当前所选内容中最后一个字符从零开始的字符索引值。例如，第一个字符的索引值是 0，第二个字符的索引值是 1，
         * 依此类推。如果未选定任何文本，此属性为 caretIndex 的值。
         * @member egret.gui.IEditableText#selectionEndIndex
         */
        selectionEndIndex: number;
        /**
         * 插入点（尖号）位置的索引。如果没有显示任何插入点，则在将焦点恢复到字段时，
         * 值将为插入点所在的位置（通常为插入点上次所在的位置，如果字段不曾具有焦点，则为 0）。<p/>
         * 选择范围索引是从零开始的（例如，第一个位置为 0、第二个位置为 1，依此类推）。
         * @member egret.gui.IEditableText#caretIndex
         */
        caretIndex: number;
        /**
         * 将第一个字符和最后一个字符的索引值（使用 beginIndex 和 endIndex 参数指定）指定的文本设置为所选内容。
         * 如果两个参数值相同，则此方法会设置插入点，就如同设置 caretIndex 属性一样。
         * @method egret.gui.IEditableText#setSelection
         * @param beginIndex {number} 所选内容中第一个字符从零开始的索引值（例如，第一个字符的索引值是 0，第二个字符的索引值是 1，依此类推）。
         * @param endIndex {number} 所选内容中最后一个字符从零开始的索引值。
         */
        setSelection(beginIndex: number, endIndex: number): void;
        /**
         * 选中所有文本。
         * @method egret.gui.IEditableText#selectAll
         */
        selectAll(): void;
        /**
         * 控件的默认宽度（使用字号：size为单位测量）。 若同时设置了maxChars属性，将会根据两者测量结果的最小值作为测量宽度。
         * @member egret.gui.IEditableText#widthInChars
         */
        widthInChars: number;
        /**
         * 控件的默认高度（以行为单位测量）。 若设置了multiline属性为false，则忽略此属性。
         * @member egret.gui.IEditableText#heightInLines
         */
        heightInLines: number;
        setFocus(): void;
    }
}
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
declare module egret.gui {
    /**
     * @classdesc
     * IFactory 接口定义工厂类（如 ClassFactory）必须实现的接口。
     * IFactory 类型的对象是“工厂对象”，Egret使用它来生成另一类的多个实例（每个实例具有相同的属性）。
     * @interface
     * @class egret.gui.IFactory
     * @extends egret.IHashObject
     */
    interface IFactory extends IHashObject {
        /**
         * 创建某一类（由实现 IFactory 的类确定）的实例。
         * @method egret.gui.IFactory#newInstance
         * @returns {any}
         */
        newInstance(): any;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IInvalidateDisplay
     * @interface
     * @classdesc
     * 具有延迟应用属性功能的显示对象接口
     */
    interface IInvalidateDisplay {
        /**
         * 立即应用所有标记为延迟验证的属性
         * @method egret.gui.IInvalidateDisplay#validateNow
         */
        validateNow(): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IInvalidating
     * @interface
     * @classdesc
     * 拥有失效验证机制组件接口
     */
    interface IInvalidating {
        /**
         * 标记提交过需要延迟应用的属性
         * @method egret.gui.IInvalidating#invalidateProperties
         */
        invalidateProperties(): void;
        /**
         * 标记提交过需要验证组件尺寸
         * @method egret.gui.IInvalidating#invalidateSize
         */
        invalidateSize(): void;
        /**
         * 标记需要验证显示列表
         * @method egret.gui.IInvalidating#invalidateDisplayList
         */
        invalidateDisplayList(): void;
        /**
         * 立即应用组件及其子项的所有属性
         * @method egret.gui.IInvalidating#validateNow
         * @param skipDisplayList? {boolean} 是否跳过显示列表验证阶段,默认false
         */
        validateNow(skipDisplayList?: boolean): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ILayoutElement
     * @interface
     * @classdesc
     * 可布局元素接口
     * @extends egret.IEventDispatcher
     */
    interface ILayoutElement extends IEventDispatcher {
        /**
         * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
         * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
         * @member egret.gui.ILayoutElement#includeInLayout
         */
        includeInLayout: boolean;
        /**
         * 距父级容器离左边距离
         * @member egret.gui.ILayoutElement#left
         */
        left: number;
        /**
         * 距父级容器右边距离
         * @member egret.gui.ILayoutElement#right
         */
        right: number;
        /**
         * 距父级容器顶部距离
         * @member egret.gui.ILayoutElement#top
         */
        top: number;
        /**
         * 距父级容器底部距离
         * @member egret.gui.ILayoutElement#bottom
         */
        bottom: number;
        /**
         * 在父级容器中距水平中心位置的距离
         * @member egret.gui.ILayoutElement#horizontalCenter
         */
        horizontalCenter: number;
        /**
         * 在父级容器中距竖直中心位置的距离
         * @member egret.gui.ILayoutElement#verticalCenter
         */
        verticalCenter: number;
        /**
         * 相对父级容器宽度的百分比
         * @member egret.gui.ILayoutElement#percentWidth
         */
        percentWidth: number;
        /**
         * 相对父级容器高度的百分比
         * @member egret.gui.ILayoutElement#percentHeight
         */
        percentHeight: number;
        /**
         * 组件的首选x坐标,常用于父级的measure()方法中
         * @member egret.gui.ILayoutElement#preferredX
         */
        preferredX: number;
        /**
         * 组件的首选y坐标,常用于父级的measure()方法中
         * @member egret.gui.ILayoutElement#preferredY
         */
        preferredY: number;
        /**
         * 组件水平方向起始坐标
         * @member egret.gui.ILayoutElement#layoutBoundsX
         */
        layoutBoundsX: number;
        /**
         * 组件竖直方向起始坐标
         * @member egret.gui.ILayoutElement#layoutBoundsY
         */
        layoutBoundsY: number;
        /**
         * 组件的首选宽度,常用于父级的measure()方法中
         * 按照：外部显式设置宽度>测量宽度 的优先级顺序返回宽度
         * 注意:此数值已经包含了scaleX的值
         * @member egret.gui.ILayoutElement#preferredWidth
         */
        preferredWidth: number;
        /**
         * 组件的首选高度,常用于父级的measure()方法中
         * 按照：外部显式设置高度>测量高度 的优先级顺序返回高度
         * 注意:此数值已经包含了scaleY的值
         * @member egret.gui.ILayoutElement#preferredHeight
         */
        preferredHeight: number;
        /**
         * 组件的布局宽度,常用于父级的updateDisplayList()方法中
         * 按照：布局宽度>外部显式设置宽度>测量宽度 的优先级顺序返回宽度
         * 注意:此数值已经包含了scaleX的值
         * @member egret.gui.ILayoutElement#layoutBoundsWidth
         */
        layoutBoundsWidth: number;
        /**
         * 组件的布局高度,常用于父级的updateDisplayList()方法中
         * 按照：布局高度>外部显式设置高度>测量高度 的优先级顺序返回高度
         * 注意:此数值已经包含了scaleY的值
         * @member egret.gui.ILayoutElement#layoutBoundsHeight
         */
        layoutBoundsHeight: number;
        /**
         * 表示从注册点开始应用的对象的水平缩放比例（百分比）。默认注册点为 (0,0)。1.0 等于 100% 缩放。
         * @member egret.gui.ILayoutElement#scaleX
         */
        scaleX: number;
        /**
         * 表示从对象注册点开始应用的对象的垂直缩放比例（百分比）。默认注册点为 (0,0)。1.0 是 100% 缩放。
         * @member egret.gui.ILayoutElement#scaleY
         */
        scaleY: number;
        /**
         * 组件的最大测量宽度,仅影响measuredWidth属性的取值范围。
         * @member egret.gui.ILayoutElement#maxWidth
         */
        maxWidth: number;
        /**
         * 组件的最小测量宽度,此属性设置为大于maxWidth的值时无效。仅影响measuredWidth属性的取值范围。
         * @member egret.gui.ILayoutElement#minWidth
         */
        minWidth: number;
        /**
         * 组件的最大测量高度,仅影响measuredHeight属性的取值范围。
         * @member egret.gui.ILayoutElement#maxHeight
         */
        maxHeight: number;
        /**
         * 组件的最小测量高度,此属性设置为大于maxHeight的值时无效。仅影响measuredHeight属性的取值范围。
         * @member egret.gui.ILayoutElement#minHeight
         */
        minHeight: number;
        /**
         * 设置组件的布局宽高,此值应已包含scaleX,scaleY的值
         * @method egret.gui.ILayoutElement#setLayoutBoundsSize
         * @param width {number}
         * @param height {number}
         */
        setLayoutBoundsSize(width: number, height: number): void;
        /**
         * 设置组件的布局位置
         * @method egret.gui.ILayoutElement#setLayoutBoundsPosition
         * @param x {number}
         * @param y {number}
         */
        setLayoutBoundsPosition(x: number, y: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ISkin
     * @interface
     * @classdesc
     * 皮肤对象接口。只有实现此接口的皮肤会被匹配公开同名变量,并注入到主机组件上。
     */
    interface ISkin {
        /**
         * 主机组件引用,仅当皮肤被应用后才会对此属性赋值
         * @member egret.gui.ISkin#hostComponent
         */
        hostComponent: SkinnableComponent;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ISkinAdapter
     * @interface
     * @classdesc
     * 皮肤适配器接口。
     * 若项目需要自定义可设置外观组件的skinName属性的解析规则，需要实现这个接口，
     * 然后调用Injector.mapClass("egret.gui.ISkinAdapter",YourSkinAdapter)注入到框架即可。
     */
    interface ISkinAdapter {
        /**
         * 获取皮肤显示对象
         * @method egret.gui.ISkinAdapter#getSkin
         * @param skinName {any} 待解析的皮肤标识符
         * @param hostComponentKey {string} 主机组件标识符
         * @returns {any} 皮肤对象实例
         */
        getSkin(skinName: any, hostComponentKey: string): any;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ISkinnableClient
     * @interface
     * @classdesc
     * 可设置外观的组件接口
     * @extends egret.gui.IVisualElement
     */
    interface ISkinnableClient extends IVisualElement {
        /**
         * 皮肤标识符。可以为Class,String,或DisplayObject实例等任意类型。
         * 具体规则由项目注入的ISkinAdapter决定，皮肤适配器将在运行时解析此标识符，然后返回皮肤对象给组件。
         * @member egret.gui.ISkinnableClient#skinName
         */
        skinName: any;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IStateClient
     * @interface
     * @classdesc
     * 具有视图状态的组件接口
     * @extends egret.IEventDispatcher
     */
    interface IStateClient extends IEventDispatcher {
        /**
         * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
         * @member egret.gui.IStateClient#currentState
         */
        currentState: string;
        /**
         * 为此组件定义的视图状态。
         * @member egret.gui.IStateClient#states
         */
        states: any[];
        /**
         * 返回是否含有指定名称的视图状态
         * @method egret.gui.IStateClient#hasState
         * @param stateName {string} 要检测的视图状态名称
         * @returns {boolean}
         */
        hasState(stateName: string): boolean;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IUIComponent
     * @interface
     * @classdesc
     * UI组件接口
     * @extends egret.gui.IVisualElement
     */
    interface IUIComponent extends IVisualElement {
        /**
         * 组件是否可以接受用户交互。
         * @member egret.gui.IUIComponent#enabled
         */
        enabled: boolean;
        /**
         * PopUpManager将其设置为true,以指示已弹出该组件。
         * @member egret.gui.IUIComponent#isPopUp
         */
        isPopUp: boolean;
        /**
         * 外部显式指定的高度
         * @member egret.gui.IUIComponent#explicitHeight
         */
        explicitHeight: number;
        /**
         * 外部显式指定的宽度
         * @member egret.gui.IUIComponent#explicitWidth
         */
        explicitWidth: number;
        /**
         * 设置组件的宽高，w,h均不包含scale值。此方法不同于直接设置width,height属性，
         * 不会影响显式标记尺寸属性widthExplicitlySet,_heightExplicitlySet
         * @method egret.gui.IUIComponent#setActualSize
         * @param newWidth {number}
         * @param newHeight {number}
         */
        setActualSize(newWidth: number, newHeight: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IUIStage
     * @interface
     * @classdesc
     * @extends egret.IEventDispatcher
     */
    interface IUIStage extends IEventDispatcher {
        /**
         * 弹出窗口层容器。
         * @member egret.gui.IUIStage#popUpContainer
         */
        popUpContainer: IContainer;
        /**
         * 工具提示层容器。
         * @member egret.gui.IUIStage#toolTipContainer
         */
        toolTipContainer: IContainer;
        /**
         * 鼠标样式层容器。
         * @member egret.gui.IUIStage#cursorContainer
         */
        cursorContainer: IContainer;
        /**
         * 舞台引用
         * @member egret.gui.IUIStage#stage
         */
        stage: Stage;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IViewport
     * @interface
     * @classdesc
     * 支持视区的组件接口
     * @extends egret.gui.IVisualElement
     */
    interface IViewport extends IVisualElement {
        /**
         * 视域的内容的宽度。
         * 如果 clipAndEnabledScrolling 为 true， 则视域的 contentWidth 为水平滚动定义限制，
         * 且视域的实际宽度定义可见的内容量。要在内容中水平滚动， 请在 0 和 contentWidth - width
         * 之间更改 horizontalScrollPosition。
         * @member egret.gui.IViewport#contentWidth
         */
        contentWidth: number;
        /**
         * 视域的内容的高度。
         * 如果 clipAndEnabledScrolling 为 true，则视域的 contentHeight 为垂直滚动定义限制，
         * 且视域的实际高度定义可见的内容量。要在内容中垂直滚动，请在 0 和 contentHeight - height
         * 之间更改 verticalScrollPosition。
         * @member egret.gui.IViewport#contentHeight
         */
        contentHeight: number;
        /**
         * 可视区域水平方向起始点
         * @member egret.gui.IViewport#horizontalScrollPosition
         */
        horizontalScrollPosition: number;
        /**
         * 可视区域竖直方向起始点
         * @member egret.gui.IViewport#verticalScrollPosition
         */
        verticalScrollPosition: number;
        /**
         * 如果为 true，指定将子代剪切到视区的边界。如果为 false，则容器子代会从容器边界扩展过去，而不管组件的大小规范。默认false
         * @member egret.gui.IViewport#clipAndEnableScrolling
         */
        clipAndEnableScrolling: boolean;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IViewStack
     * @interface
     * @classdesc
     * 层级堆叠容器接口
     */
    interface IViewStack {
        /**
         * 当前可见子元素的索引。索引从0开始。
         * @member egret.gui.IViewStack#selectedIndex
         */
        selectedIndex: number;
        /**
         * 当前可见的子元素。
         * @member egret.gui.IViewStack#selectedChild
         */
        selectedChild: IVisualElement;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IVisualElement
     * @interface
     * @classdesc
     * 可视元素接口
     * @extends egret.gui.ILayoutElement
     */
    interface IVisualElement extends ILayoutElement {
        /**
         * 此IVisualElement对象的所有者。<br/>
         * 0.默认情况下，owner指向parent属性的值。<br/>
         * 1.当此对象被PopUpAnchor组件弹出时，owner指向PopUpAnchor<br/>
         * 2.当此对象作为皮肤内contentGroup的子项时，owner指向主机组件SkinnableContainer<br/>
         * 3.当此对象作为ItemRenderer时，owner指向DataGroup或者主机组件SkinnableDataContainer<br/>
         * 4.当此对象作为非显示对象容器IContainer的子项时,owner指向IContainer。
         * @member egret.gui.IVisualElement#owner
         */
        owner: any;
        /**
         * owner属性由框架内部管理，请不要自行改变它的值，否则可能引发未知的问题。
         * @method egret.gui.IVisualElement#ownerChanged
         * @param value {Object}
         */
        ownerChanged(value: Object): void;
        /**
         * 元素名称。此属性在TabNavigator里作为选项卡显示的字符串。
         * @member egret.gui.IVisualElement#name
         */
        name: string;
        /**
         * 此组件的父容器或组件。
         * 只有可视元素应该具有 parent 属性。
         * 非可视项目应该使用其他属性引用其所属对象。
         * 一般而言，非可视对象使用 owner 属性引用其所属对象。
         * @member egret.gui.IVisualElement#parent
         */
        parent: DisplayObjectContainer;
        /**
         * 控制此可视元素的可见性。如果为 true，则对象可见。
         * @member egret.gui.IVisualElement#visible
         */
        visible: boolean;
        /**
         * 表示指定对象的 Alpha 透明度值。有效值为 0（完全透明）到 1（完全不透明）。默认值为 1。alpha 设置为 0 的显示对象是活动的，即使它们不可见。
         * @member egret.gui.IVisualElement#alpha
         */
        alpha: number;
        /**
         * 组件宽度
         * @member egret.gui.IVisualElement#width
         */
        width: number;
        /**
         * 组件高度
         * @member egret.gui.IVisualElement#height
         */
        height: number;
        /**
         * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 x 坐标。
         * 如果该对象位于具有变形的 DisplayObjectContainer 内，则它也位于包含 DisplayObjectContainer
         * 的本地坐标系中。因此，对于逆时针旋转 90 度的 DisplayObjectContainer，该 DisplayObjectContainer
         * 的子级将继承逆时针旋转 90 度的坐标系。对象的坐标指的是注册点的位置。
         * @constant egret.gui.IVisualElement#x
         */
        x: number;
        /**
         * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 y 坐标。
         * 如果该对象位于具有变形的 DisplayObjectContainer 内，则它也位于包含 DisplayObjectContainer
         * 的本地坐标系中。因此，对于逆时针旋转 90 度的 DisplayObjectContainer，该 DisplayObjectContainer
         * 的子级将继承逆时针旋转 90 度的坐标系。对象的坐标指的是注册点的位置。
         * @constant egret.gui.IVisualElement#y
         */
        y: number;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IVisualElementContainer
     * @interface
     * @classdesc
     * 具有管理IVisualElement子显示对象的容器接口
     * @extends egret.gui.IVisualElement
     * @extends egret.gui.IContainer
     */
    interface IVisualElementContainer extends IVisualElement, IContainer {
        /**
         * 从容器中删除所有可视元素。
         * @method egret.gui.IVisualElementContainer#removeAllElements
         */
        removeAllElements(): void;
        /**
         * 交换两个指定可视元素的索引。所有其他元素仍位于相同的索引位置。
         * @method egret.gui.IVisualElementContainer#swapElements
         * @param element1 {IVisualElement} 第一个可视元素。
         * @param element2 {IVisualElement} 第二个可视元素。
         */
        swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
         * 交换容器中位于两个指定索引位置的可视元素。所有其他可视元素仍位于相同的索引位置。
         * @method egret.gui.IVisualElementContainer#swapElementsAt
         * @param index1 {number} 第一个元素的索引。
         * @param index2 {number} 第二个元素的索引。
         * @throws RangeError 如果在子列表中不存在该索引位置。
         */
        swapElementsAt(index1: number, index2: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ILayoutManagerClient
     * @interface
     * @classdesc
     * 使用布局管理器的组件接口
     * @extends egret.IEventDispatcher
     */
    interface ILayoutManagerClient extends IEventDispatcher {
        /**
         * 验证组件的属性
         * @method egret.gui.ILayoutManagerClient#validateProperties
         */
        validateProperties(): void;
        /**
         * 验证组件的尺寸
         * @method egret.gui.ILayoutManagerClient#validateSize
         * @param recursive? {boolean}
         */
        validateSize(recursive?: boolean): void;
        /**
         * 验证子项的位置和大小，并绘制其他可视内容
         * @method egret.gui.ILayoutManagerClient#validateDisplayList
         */
        validateDisplayList(): void;
        /**
         * 在显示列表的嵌套深度
         * @member egret.gui.ILayoutManagerClient#nestLevel
         */
        nestLevel: number;
        /**
         * 是否完成初始化。此标志只能由 LayoutManager 修改。
         * @member egret.gui.ILayoutManagerClient#initialized
         */
        initialized: boolean;
        /**
         * 一个标志，用于确定某个对象是否正在等待分派其updateComplete事件。此标志只能由 LayoutManager 修改。
         * @member egret.gui.ILayoutManagerClient#updateCompletePendingFlag
         */
        updateCompletePendingFlag: boolean;
        /**
         * 父级显示对象
         * @member egret.gui.ILayoutManagerClient#parent
         */
        parent: DisplayObjectContainer;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IPopUpManager
     * @interface
     * @classdesc
     * 窗口弹出管理器接口。若项目需要自定义弹出框管理器，请实现此接口，
     * 并在项目初始化前调用Injector.mapClass("egret.gui.IPopUpManager",YourPopUpManager)，
     * 注入自定义的弹出框管理器类。
     * @extends egret.IEventDispatcher
     */
    interface IPopUpManager extends IEventDispatcher {
        /**
         * 模态遮罩的填充颜色
         * @member egret.gui.IPopUpManager#modalColor
         */
        modalColor: number;
        /**
         * 模态遮罩的透明度
         * @member egret.gui.IPopUpManager#modalAlpha
         */
        modalAlpha: number;
        /**
         * 弹出一个窗口。<br/>
         * @method egret.gui.IPopUpManager#addPopUp
         * @param popUp {IVisualElement} 要弹出的窗口
         * @param modal? {boolean} 是否启用模态。即禁用弹出窗口所在层以下的鼠标事件。默认false。
         * @param center? {boolean} 是否居中窗口。等效于在外部调用centerPopUp()来居中。默认true。
         */
        addPopUp(popUp: IVisualElement, modal?: boolean, center?: boolean): void;
        /**
         * 移除由addPopUp()方法弹出的窗口。
         * @method egret.gui.IPopUpManager#removePopUp
         * @param popUp {IVisualElement} 要移除的窗口
         */
        removePopUp(popUp: IVisualElement): void;
        /**
         * 将指定窗口居中显示
         * @method egret.gui.IPopUpManager#centerPopUp
         * @param popUp {IVisualElement} 要居中显示的窗口
         */
        centerPopUp(popUp: IVisualElement): void;
        /**
         * 将指定窗口的层级调至最前
         * @method egret.gui.IPopUpManager#bringToFront
         * @param popUp {IVisualElement} 要最前显示的窗口
         */
        bringToFront(popUp: IVisualElement): void;
        /**
         * 已经弹出的窗口列表
         * @member egret.gui.IPopUpManager#popUpList
         */
        popUpList: any[];
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.UIGlobals
     * @classdesc
     */
    class UIGlobals {
        private static _stage;
        /**
         * 舞台引用，当第一个UIComponent添加到舞台时此属性被自动赋值
         * @member egret.gui.UIGlobals.stage
         */
        static stage: Stage;
        /**
         * 已经初始化完成标志
         */
        private static initlized;
        /**
         * 初始化管理器
         * @method egret.gui.UIGlobals._initlize
         * @param stage {Stage}
         */
        static _initlize(stage: Stage): void;
        /**
         * 延迟渲染布局管理器
         * @member egret.gui.UIGlobals._layoutManager
         */
        static _layoutManager: LayoutManager;
        /**
         * 系统管理器列表
         */
        static _uiStage: IUIStage;
        /**
         * 顶级应用容器
         * @member egret.gui.UIGlobals.uiStage
         */
        static uiStage: IUIStage;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.UIComponent
     * @classdesc
     * 显示对象基类
     * @extends egret.DisplayObjectContainer
     * @implements egret.gui.IUIComponent
     * @implements egret.gui.ILayoutManagerClient
     * @implements egret.gui.ILayoutElement
     * @implements egret.gui.IInvalidating
     * @implements egret.gui.IVisualElement
     */
    class UIComponent extends DisplayObjectContainer implements IUIComponent, ILayoutManagerClient, ILayoutElement, IInvalidating, IVisualElement {
        /**
         * 构造函数
         * @method egret.gui.UIComponent#constructor
         */
        constructor();
        /**
         * 添加到舞台
         */
        private onAddedToStage(e);
        private _id;
        /**
         * 组件 ID。此值将作为对象的实例名称，因此不应包含任何空格或特殊字符。应用程序中的每个组件都应具有唯一的 ID。
         * @constant egret.gui.UIComponent#id
         */
        id: string;
        private _isPopUp;
        /**
         * @member egret.gui.UIComponent#isPopUp
         */
        isPopUp: boolean;
        private _owner;
        /**
         * @member egret.gui.UIComponent#owner
         */
        owner: any;
        /**
         * @method egret.gui.UIComponent#ownerChanged
         * @param value {any}
         */
        ownerChanged(value: any): void;
        private _updateCompletePendingFlag;
        /**
         * @member egret.gui.UIComponent#updateCompletePendingFlag
         */
        updateCompletePendingFlag: boolean;
        private _initialized;
        /**
         * @member egret.gui.UIComponent#initialized
         */
        initialized: boolean;
        /**
         * _initialize()方法被调用过的标志。
         */
        private initializeCalled;
        /**
         * 初始化组件
         * @method egret.gui.UIComponent#_initialize
         */
        _initialize(): void;
        /**
         * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
         * 请务必调用super.createChildren()以完成父类组件的初始化
         * @method egret.gui.UIComponent#createChildren
         */
        createChildren(): void;
        /**
         * 子项创建完成
         * @method egret.gui.UIComponent#childrenCreated
         */
        private childrenCreated();
        private _nestLevel;
        /**
         * @member egret.gui.UIComponent#nestLevel
         */
        nestLevel: number;
        /**
         * 添加对象到显示列表,此接口仅预留给框架内部使用
         * 如果需要管理子项，若有，请使用容器的addElement()方法，非法使用有可能造成无法自动布局。
         */
        _addToDisplayList(child: DisplayObject, notifyListeners?: boolean): DisplayObject;
        /**
         * 添加对象到显示列表,此接口仅预留给框架内部使用
         * 如果需要管理子项，若有，请使用容器的addElementAt()方法，非法使用有可能造成无法自动布局。
         */
        _addToDisplayListAt(child: DisplayObject, index: number, notifyListeners?: boolean): DisplayObject;
        /**
         * 添加对象到显示列表,此接口仅预留给框架内部使用
         * 如果需要管理子项，若有，请使用容器的removeElement()方法,非法使用有可能造成无法自动布局。
         */
        _removeFromDisplayList(child: DisplayObject, notifyListeners?: boolean): DisplayObject;
        /**
         * 从显示列表移除指定索引的子项,此接口仅预留给框架内部使用
         * 如果需要管理子项，若有，请使用容器的removeElementAt()方法,非法使用有可能造成无法自动布局。
         */
        _removeFromDisplayListAt(index: number, notifyListeners?: boolean): DisplayObject;
        /**
         * GUI范围内，请不要调用任何addChild方法，若是容器，请用addElement,若需要包装普通显示对象，请把显示对象赋值给UIAsset.source。
         * @deprecated
         * @method egret.gui.UIComponent#addChild
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        addChild(child: DisplayObject): DisplayObject;
        /**
         * GUI范围内，请不要调用任何addChildAt方法，若是容器，请用addElementAt,若需要包装普通显示对象，请把显示对象赋值给UIAsset.source。
         * @deprecated
         * @method egret.gui.UIComponent#addChildAt
         * @param child {DisplayObject}
         * @param index {number}
         * @returns {DisplayObject}
         */
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
         * 即将添加一个子项
         * @method egret.gui.UIComponent#_addingChild
         * @param child {DisplayObject}
         */
        _addingChild(child: DisplayObject): void;
        /**
         * 已经添加一个子项
         */
        _childAdded(child: DisplayObject): void;
        /**
         * GUI范围内，请不要调用任何removeChild方法，若是容器，请用removeElement
         * @deprecated
         * @method egret.gui.UIComponent#removeChild
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        removeChild(child: DisplayObject): DisplayObject;
        /**
         * GUI范围内，请不要调用任何removeChildAt方法，若是容器，请用removeElementAt
         * @deprecated
         * @method egret.gui.UIComponent#removeChildAt
         * @param index {number}
         * @returns {DisplayObject}
         */
        removeChildAt(index: number): DisplayObject;
        /**
         * 已经移除一个子项
         */
        _childRemoved(child: DisplayObject): void;
        /**
         * 检查属性失效标记并应用
         */
        private checkInvalidateFlag(event?);
        _enabled: boolean;
        /**
         * @member egret.gui.UIComponent#enabled
         */
        enabled: boolean;
        /**
         * 属性提交前组件旧的宽度
         */
        private oldWidth;
        _width: number;
        /**
         * @member egret.gui.UIComponent#width
         */
        /**
         * 组件宽度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         */
        width: number;
        _setWidth(value: number): void;
        /**
         * 属性提交前组件旧的高度
         */
        private oldHeight;
        _height: number;
        /**
         * @member egret.gui.UIComponent#height
         */
        /**
         * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         */
        height: number;
        _setHeight(value: number): void;
        /**
         * @member egret.gui.UIComponent#scaleX
         */
        /**
         * @inheritDoc
         */
        scaleX: number;
        _setScaleX(value: number): void;
        /**
         * @member egret.gui.UIComponent#scaleY
         */
        /**
         * @inheritDoc
         */
        scaleY: number;
        _setScaleY(value: number): void;
        private _minWidth;
        /**
         * @member egret.gui.UIComponent#minWidth
         */
        minWidth: number;
        private _maxWidth;
        /**
         * @member egret.gui.UIComponent#maxWidth
         */
        maxWidth: number;
        _getMaxWidth(): number;
        private _minHeight;
        /**
         * @member egret.gui.UIComponent#minHeight
         */
        minHeight: number;
        private _maxHeight;
        /**
         * @member egret.gui.UIComponent#maxHeight
         */
        maxHeight: number;
        private _measuredWidth;
        /**
         * 组件的默认宽度（以像素为单位）。此值由 measure() 方法设置。
         * @member egret.gui.UIComponent#measuredWidth
         */
        measuredWidth: number;
        private _measuredHeight;
        /**
         * 组件的默认高度（以像素为单位）。此值由 measure() 方法设置。
         * @member egret.gui.UIComponent#measuredHeight
         */
        measuredHeight: number;
        /**
         * @method egret.gui.UIComponent#setActualSize
         * @param w {number}
         * @param h {number}
         */
        setActualSize(w: number, h: number): void;
        /**
         * 属性提交前组件旧的X
         * @member egret.gui.UIComponent#oldX
         */
        private oldX;
        /**
         * @constant egret.gui.UIComponent#x
         */
        /**
         * @inheritDoc
         */
        x: number;
        /**
         * 属性提交前组件旧的Y
         * @member egret.gui.UIComponent#oldY
         */
        private oldY;
        /**
         * @constant egret.gui.UIComponent#y
         */
        /**
         * @inheritDoc
         */
        y: number;
        /**
         * @member egret.gui.UIComponent#_invalidatePropertiesFlag
         */
        _invalidatePropertiesFlag: boolean;
        /**
         * @method egret.gui.UIComponent#invalidateProperties
         */
        invalidateProperties(): void;
        /**
         * @method egret.gui.UIComponent#validateProperties
         */
        validateProperties(): void;
        /**
         * @member egret.gui.UIComponent#_invalidateSizeFlag
         */
        _invalidateSizeFlag: boolean;
        /**
         * @method egret.gui.UIComponent#invalidateSize
         */
        invalidateSize(): void;
        /**
         * @method egret.gui.UIComponent#validateSize
         * @param recursive {boolean}
         */
        validateSize(recursive?: boolean): void;
        /**
         * 上一次测量的首选宽度
         * @member egret.gui.UIComponent#_oldPreferWidth
         */
        _oldPreferWidth: number;
        /**
         * 上一次测量的首选高度
         * @member egret.gui.UIComponent#_oldPreferHeight
         */
        _oldPreferHeight: number;
        /**
         * 测量组件尺寸，返回尺寸是否发生变化
         */
        private measureSizes();
        /**
         * @member egret.gui.UIComponent#_invalidateDisplayListFlag
         */
        _invalidateDisplayListFlag: boolean;
        /**
         * @method egret.gui.UIComponent#invalidateDisplayList
         */
        invalidateDisplayList(): void;
        /**
         * @method egret.gui.UIComponent#validateDisplayList
         */
        validateDisplayList(): void;
        /**
         * @member egret.gui.UIComponent#_validateNowFlag
         */
        _validateNowFlag: boolean;
        /**
         * @method egret.gui.UIComponent#validateNow
         * @param skipDisplayList {boolean}
         */
        validateNow(skipDisplayList?: boolean): void;
        /**
         * 标记父级容器的尺寸和显示列表为失效
         * @method egret.gui.UIComponent#invalidateParentSizeAndDisplayList
         */
        invalidateParentSizeAndDisplayList(): void;
        /**
         * 更新显示列表
         * @method egret.gui.UIComponent#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 是否可以跳过测量尺寸阶段,返回true则不执行measure()方法
         * @method egret.gui.UIComponent#canSkipMeasurement
         * @returns {boolean}
         */
        canSkipMeasurement(): boolean;
        /**
         * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
         * @method egret.gui.UIComponent#commitProperties
         */
        commitProperties(): void;
        /**
         * 测量组件尺寸
         * @method egret.gui.UIComponent#measure
         */
        measure(): void;
        /**
         *  抛出移动事件
         */
        private dispatchMoveEvent();
        /**
         * 子项的xy位置发生改变
         */
        _childXYChanged(): void;
        /**
         *  抛出尺寸改变事件
         */
        private dispatchResizeEvent();
        _includeInLayout: boolean;
        /**
         * @member egret.gui.UIComponent#includeInLayout
         */
        includeInLayout: boolean;
        private _left;
        /**
         * @member egret.gui.UIComponent#left
         */
        left: number;
        private _right;
        /**
         * @member egret.gui.UIComponent#right
         */
        right: number;
        private _top;
        /**
         * @member egret.gui.UIComponent#top
         */
        top: number;
        private _bottom;
        /**
         * @member egret.gui.UIComponent#bottom
         */
        bottom: number;
        private _horizontalCenter;
        /**
         * @member egret.gui.UIComponent#horizontalCenter
         */
        horizontalCenter: number;
        private _verticalCenter;
        /**
         * @member egret.gui.UIComponent#verticalCenter
         */
        verticalCenter: number;
        private _percentWidth;
        /**
         * @member egret.gui.UIComponent#percentWidth
         */
        percentWidth: number;
        private _percentHeight;
        /**
         * @member egret.gui.UIComponent#percentHeight
         */
        percentHeight: number;
        /**
         * 父级布局管理器设置了组件的宽度标志，尺寸设置优先级：自动布局>显式设置>自动测量
         * @member egret.gui.UIComponent#_layoutWidthExplicitlySet
         */
        _layoutWidthExplicitlySet: boolean;
        /**
         * 父级布局管理器设置了组件的高度标志，尺寸设置优先级：自动布局>显式设置>自动测量
         * @member egret.gui.UIComponent#_layoutHeightExplicitlySet
         */
        _layoutHeightExplicitlySet: boolean;
        /**
         * @method egret.gui.UIComponent#setLayoutBoundsSize
         * @param layoutWidth {number}
         * @param layoutHeight {number}
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * @method egret.gui.UIComponent#setLayoutBoundsPosition
         * @param x {number}
         * @param y {number}
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @member egret.gui.UIComponent#preferredWidth
         */
        preferredWidth: number;
        /**
         * @member egret.gui.UIComponent#preferredHeight
         */
        preferredHeight: number;
        /**
         * @member egret.gui.UIComponent#preferredX
         */
        preferredX: number;
        /**
         * @member egret.gui.UIComponent#preferredY
         */
        preferredY: number;
        /**
         * @member egret.gui.UIComponent#layoutBoundsX
         */
        layoutBoundsX: number;
        /**
         * @member egret.gui.UIComponent#layoutBoundsY
         */
        layoutBoundsY: number;
        /**
         * @member egret.gui.UIComponent#layoutBoundsWidth
         */
        layoutBoundsWidth: number;
        /**
         * 组件的布局高度,常用于父级的updateDisplayList()方法中
         * 按照：布局高度>外部显式设置高度>测量高度 的优先级顺序返回高度
         * @member egret.gui.UIComponent#layoutBoundsHeight
         */
        layoutBoundsHeight: number;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.PopUpPosition
     * @classdesc
     * 定义弹出位置的常量值。
     * 该常量决定目标对象相对于父级组件的弹出位置。
     */
    class PopUpPosition {
        /**
         * 在组件上方弹出
         * @constant egret.gui.PopUpPosition.ABOVE
         */
        static ABOVE: string;
        /**
         * 在组件下方弹出
         * @constant egret.gui.PopUpPosition.BELOW
         */
        static BELOW: string;
        /**
         * 在组件中心弹出
         * @constant egret.gui.PopUpPosition.CENTER
         */
        static CENTER: string;
        /**
         * 在组件左上角弹出
         * @constant egret.gui.PopUpPosition.TOP_LEFT
         */
        static TOP_LEFT: string;
        /**
         * 在组件左边弹出
         * @constant egret.gui.PopUpPosition.LEFT
         */
        static LEFT: string;
        /**
         * 在组件右边弹出
         * @constant egret.gui.PopUpPosition.RIGHT
         */
        static RIGHT: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ScrollPolicy
     * @classdesc
     * 滚动条显示策略常量
     */
    class ScrollPolicy {
        /**
         * 如果子项超出父级的尺寸，则允许滚动，反之不允许滚动。
         * @constant egret.gui.ScrollPolicy.AUTO
         */
        static AUTO: string;
        /**
         * 从不允许滚动。
         * @constant egret.gui.ScrollPolicy.OFF
         */
        static OFF: string;
        /**
         * 总是允许滚动。
         * @constant egret.gui.ScrollPolicy.ON
         */
        static ON: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ClassFactory
     * @classdesc
     * @extends egret.HashObject
     */
    class ClassFactory extends HashObject {
        /**
         * @method egret.gui.ClassFactory#constructor
         * @class egret.gui.ClassFactory
         * @classdesc
         * ClassFactory 实例是一个“工厂对象”，Egret 可用其生成其他类的实例，每个实例拥有相同的属性。
         * @param generator {any} newInstance() 方法根据工厂对象生成对象时使用的 Class。
         */
        constructor(generator?: any);
        /**
         * newInstance() 方法根据工厂对象生成对象时使用的 Class。
         * @member egret.egret#generator
         */
        generator: any;
        /**
         * 生产一个新的实例
         * @method egret.egret#newInstance
         * @returns {any}
         */
        newInstance(): any;
    }
}
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
declare module egret.gui {
    class NavigationUnit {
        static DOWN: number;
        static END: number;
        static HOME: number;
        static LEFT: number;
        static PAGE_DOWN: number;
        static PAGE_LEFT: number;
        static PAGE_RIGHT: number;
        static PAGE_UP: number;
        static RIGHT: number;
        static UP: number;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IOverride
     * @interface
     * @classdesc
     * IOverride 接口用于视图状态覆盖。State 类 overrides 属性数组中的所有条目均必须实现此接口。
     */
    interface IOverride {
        /**
         * 初始化覆盖。在第一次调用 apply() 方法之前调用此方法，因此将覆盖的一次性初始化代码放在此方法中。
         * @method egret.gui.IOverride#initialize
         * @param parent {IStateClient}
         */
        initialize(parent: IStateClient): void;
        /**
         * 应用覆盖。将保留原始值，以便以后可以在 remove() 方法中恢复该值。
         * @method egret.gui.IOverride#apply
         * @param parent {IContainer}
         */
        apply(parent: IContainer): void;
        /**
         * 删除覆盖。在 apply() 方法中记住的值将被恢复。
         * @method egret.gui.IOverride#remove
         * @param parent {IContainer}
         */
        remove(parent: IContainer): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.OverrideBase
     * @classdesc
     * OverrideBase 类是视图状态所用的 override 类的基类。
     * @extends egret.HashObject
     * @implements egret.gui.IOverride
     */
    class OverrideBase extends HashObject implements IOverride {
        /**
         * @method egret.gui.OverrideBase#constructor
         */
        constructor();
        /**
         * @method egret.gui.OverrideBase#initialize
         * @param parent {IStateClient}
         */
        initialize(parent: IStateClient): void;
        /**
         * @method egret.gui.OverrideBase#apply
         * @param parent {IContainer}
         */
        apply(parent: IContainer): void;
        /**
         * @method egret.gui.OverrideBase#remove
         * @param parent {IContainer}
         */
        remove(parent: IContainer): void;
        /**
         * 从对象初始化，这是一个便利方法
         * @method egret.gui.OverrideBase#initializeFromObject
         * @param properties {any}
         * @returns {any}
         */
        initializeFromObject(properties: any): any;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.AddItems
     * @classdesc
     * 添加显示元素
     * @extends egret.gui.OverrideBase
     */
    class AddItems extends OverrideBase {
        /**
         * 添加父级容器的底层
         * @constant egret.gui.AddItems.FIRST
         */
        static FIRST: string;
        /**
         * 添加在父级容器的顶层
         * @constant egret.gui.AddItems.LAST
         */
        static LAST: string;
        /**
         * 添加在相对对象之前
         * @constant egret.gui.AddItems.BEFORE
         */
        static BEFORE: string;
        /**
         * 添加在相对对象之后
         * @constant egret.gui.AddItems.AFTER
         */
        static AFTER: string;
        /**
         * 构造函数
         * @method egret.gui.AddItems#constructor
         */
        constructor(target: string, propertyName: string, position: string, relativeTo: string);
        /**
         * 要添加到的属性
         * @member egret.gui.AddItems#propertyName
         */
        propertyName: string;
        /**
         * 添加的位置
         * @member egret.gui.AddItems#position
         */
        position: string;
        /**
         * 相对的显示元素的实例名
         * @member egret.gui.AddItems#relativeTo
         */
        relativeTo: string;
        /**
         * 目标实例名
         * @member egret.gui.AddItems#target
         */
        target: string;
        /**
         * @method egret.gui.AddItems#initialize
         * @param parent {IStateClient}
         */
        initialize(parent: IStateClient): void;
        /**
         * @method egret.gui.AddItems#apply
         * @param parent {IContainer}
         */
        apply(parent: IContainer): void;
        /**
         * @method egret.gui.AddItems#remove
         * @param parent {IContainer}
         */
        remove(parent: IContainer): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.SetProperty
     * @classdesc
     * 设置属性
     * @extends egret.gui.OverrideBase
     */
    class SetProperty extends OverrideBase {
        /**
         * 构造函数
         * @method egret.gui.SetProperty#constructor
         */
        constructor(target: string, name: string, value: any);
        /**
         * 要修改的属性名
         * @member egret.gui.SetProperty#name
         */
        name: string;
        /**
         * 目标实例名
         * @member egret.gui.SetProperty#target
         */
        target: string;
        /**
         * 属性值
         * @member egret.gui.SetProperty#value
         */
        value: any;
        /**
         * 旧的属性值
         */
        private oldValue;
        /**
         * @method egret.gui.SetProperty#apply
         * @param parent {IContainer}
         */
        apply(parent: IContainer): void;
        /**
         * @method egret.gui.SetProperty#remove
         * @param parent {IContainer}
         */
        remove(parent: IContainer): void;
        /**
         * 设置属性值
         */
        private setPropertyValue(obj, name, value, valueForType);
        /**
         * 转成Boolean值
         */
        private toBoolean(value);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.State
     * @classdesc
     * State 类定义视图状态，即组件的特定视图。
     * @extends egret.HashObject
     */
    class State extends HashObject {
        /**
         * @method egret.gui.State#constructor
         * @param properties {any}
         */
        constructor(name: string, overrides: IOverride[]);
        /**
         * 已经初始化标志
         */
        private initialized;
        /**
         * 视图状态的名称。给定组件的状态名称必须唯一。必须设置此属性。
         * @member egret.gui.State#name
         */
        name: string;
        /**
         * 该视图状态的覆盖，表现为实现 IOverride 接口的对象的数组。
         * 这些覆盖在进入状态时按顺序应用，在退出状态时按相反的顺序删除。
         * @member egret.gui.State#overrides
         */
        overrides: IOverride[];
        /**
         * 此视图状态作为 String 数组所属的状态组。
         * @member egret.gui.State#stateGroups
         */
        stateGroups: any[];
        /**
         * 初始化视图
         * @method egret.gui.State#initialize
         * @param parent {IStateClient}
         */
        initialize(parent: IStateClient): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.LayoutUtil
     * @classdesc
     * 布局工具类
     */
    class LayoutUtil {
        /**
         * 根据对象当前的xy坐标调整其相对位置属性，使其在下一次的父级布局中过程中保持当前位置不变。
         * @method egret.gui.LayoutUtil.adjustRelativeByXY
         * @param element {IVisualElement} 要调整相对位置属性的对象
         * @param parent {DisplayObjectContainer} element的父级容器。若不设置，则取element.parent的值。若两者的值都为空，则放弃调整。
         */
        static adjustRelativeByXY(element: IVisualElement, parent?: DisplayObjectContainer): void;
    }
}
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
declare module egret.gui {
    /**
     * 返回字符串所对应的全局唯一Rectangle对象。此方法主要为了减少scale9Grid属性的实例个数。
     * 参数的相同的九宫格数据使用此方法可以全局共享同一个Rectangle对象。
     * @param value {string} 以字符串形式表示Rectangle构造函数的四个参数:x，y，width，height。例如："7,7,46,46"。
     * @returns {string} 字符串对应的Rectangle实例。
     */
    function getScale9Grid(value: string): Rectangle;
}
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
declare module egret.gui {
    /**
     * 设置键值对的简便方法。此方法仅供exmlc编译器内部使用。
     */
    function setProperties(target: any, keys: string[], values: string[]): any;
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IItemRenderer
     * @interface
     * @classdesc
     * 列表类组件的项呈示器接口
     * @extends egret.gui.ILayoutElement
     */
    interface IItemRenderer extends ILayoutElement {
        /**
         * 要呈示或编辑的数据。
         * @member egret.gui.IItemRenderer#data
         */
        data: any;
        /**
         * 如果项呈示器可以将其自身显示为已选中，则包含 true。
         * @member egret.gui.IItemRenderer#selected
         */
        selected: boolean;
        /**
         * 项呈示器的主机组件的数据提供程序中的项目索引。
         * @member egret.gui.IItemRenderer#itemIndex
         */
        itemIndex: number;
        /**
         * 要在项呈示器中显示的 String。
         * @member egret.gui.IItemRenderer#label
         */
        label: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IItemRendererOwner
     * @interface
     * @classdesc
     * 项呈示器的主机组件接口
     */
    interface IItemRendererOwner {
        /**
         * 更新项呈示器数据
         * @method egret.gui.IItemRendererOwner#updateRenderer
         * @param renderer {IItemRenderer}
         * @param itemIndex {number}
         * @param data {any}
         * @returns {IItemRenderer}
         */
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ITreeItemRenderer
     * @interface
     * @classdesc
     * 树状列表组件的项呈示器接口
     * @extends egret.gui.IItemRenderer
     */
    interface ITreeItemRenderer extends IItemRenderer {
        /**
         * 图标的皮肤名
         * @member egret.gui.ITreeItemRenderer#iconSkinName
         */
        iconSkinName: any;
        /**
         * 缩进深度。0表示顶级节点，1表示第一层子节点，以此类推。
         * @member egret.gui.ITreeItemRenderer#depth
         */
        depth: number;
        /**
         * 是否含有子节点。
         * @member egret.gui.ITreeItemRenderer#hasChildren
         */
        hasChildren: boolean;
        /**
         * 节点是否处于开启状态。
         * @member egret.gui.ITreeItemRenderer#opened
         */
        opened: boolean;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.UIAsset
     * @classdesc
     * 素材包装器。<p/>
     * 注意：UIAsset仅在添content时测量一次初始尺寸， 请不要在外部直接修改content尺寸，
     * 若做了引起content尺寸发生变化的操作, 需手动调用UIAsset的invalidateSize()进行重新测量。
     * @extends egret.gui.UIComponent
     * @implements egret.gui.ISkinnableClient
     */
    class UIAsset extends UIComponent {
        /**
         * @method egret.gui.UIAsset#constructor
         * @param source {any} 素材标识符
         */
        constructor(source?: any, autoScale?: boolean);
        /**
         * 矩形区域，它定义素材对象的九个缩放区域。
         * 注意:此属性仅在source的解析结果为Texture并且fileMode为BitmapFillMode.SCALE时有效。
         * @member {egret.Texture} egret.gui.UIAsset#scale9Grid
         */
        scale9Grid: Rectangle;
        /**
         * 确定位图填充尺寸的方式。默认值：BitmapFillMode.SCALE。
         * 设置为 BitmapFillMode.REPEAT时，位图将重复以填充区域。
         * 设置为 BitmapFillMode.SCALE时，位图将拉伸以填充区域。
         * 注意:此属性仅在source的解析结果为Texture时有效
         * @member {egret.Texture} egret.gui.UIAsset#fillMode
         */
        fillMode: string;
        private sourceChanged;
        _source: any;
        /**
         * 素材标识符。可以为Class,String,或DisplayObject实例等任意类型，具体规则由项目注入的素材适配器决定，
         * 适配器根据此属性值解析获取对应的显示对象，并赋值给content属性。
         * @member egret.gui.UIAsset#source
         */
        source: any;
        _content: any;
        /**
         * 解析source得到的对象，通常为显示对象或Texture。
         * @member egret.gui.UIAsset#content
         */
        content: any;
        private createChildrenCalled;
        /**
         * @method egret.gui.UIAsset#createChildren
         */
        createChildren(): void;
        /**
         * 皮肤解析适配器
         */
        private static assetAdapter;
        private contentReused;
        /**
         * 解析source
         */
        private parseSource();
        /**
         * 获取资源适配器
         */
        private getAdapter();
        /**
         * 皮肤发生改变
         */
        private contentChanged(content, source);
        measure(): void;
        /**
         * 是自动否缩放content对象，以符合UIAsset的尺寸。默认值true。
         */
        autoScale: boolean;
        /**
         * @method egret.gui.UIAsset#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        _render(renderContext: RendererContext): void;
        /**
         * @see egret.DisplayObject.measureBounds
         * @returns {Rectangle}
         * @private
         */
        _measureBounds(): Rectangle;
        private static errorStr;
        /**
         * @method egret.gui.UIAsset#addChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        addChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.UIAsset#addChildAt
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         * @returns {DisplayObject}
         */
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
         * @method egret.gui.UIAsset#removeChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        removeChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.UIAsset#removeChildAt
         * @deprecated
         * @param index {number}
         * @returns {DisplayObject}
         */
        removeChildAt(index: number): DisplayObject;
        /**
         * @method egret.gui.UIAsset#setChildIndex
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         */
        setChildIndex(child: DisplayObject, index: number): void;
        /**
         * @method egret.gui.UIAsset#swapChildren
         * @deprecated
         * @param child1 {DisplayObject}
         * @param child2 {DisplayObject}
         */
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
         * @method egret.gui.UIAsset#swapChildrenAt
         * @deprecated
         * @param index1 {number}
         * @param index2 {number}
         */
        swapChildrenAt(index1: number, index2: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.SkinnableComponent
     * @classdesc
     * 复杂可设置外观组件的基类，接受ISkin类或任何显示对象作为皮肤。
     * 当皮肤为ISkin时，将自动匹配两个实例内同名的公开属性(显示对象)，
     * 并将皮肤的属性引用赋值到此类定义的同名属性(必须没有默认值)上,
     * 如果要对公共属性添加事件监听或其他操作，
     * 请覆盖partAdded()和partRemoved()方法
     * @extends egret.gui.SkinnableComponent
     */
    class SkinnableComponent extends UIComponent implements ISkinnableClient {
        /**
         * 构造函数
         * @method egret.gui.SkinnableComponent#constructor
         */
        constructor();
        /**
         * 主机组件标识符。用于唯一确定一个组件的名称。
         * 用户自定义的组件若不对此属性赋值，将会继承父级的标识符定义。
         * @member {string} egret.gui.SkinnableComponent#hostComponentKey
         */
        hostComponentKey: string;
        /**
         * 外部显式设置了皮肤名
         */
        _skinNameExplicitlySet: any;
        _skinName: any;
        /**
         * 皮肤标识符。可以为Class,String,或DisplayObject实例等任意类型，具体规则由项目注入的素材适配器决定，
         * 适配器根据此属性值解析获取对应的显示对象，并赋值给skin属性。
         * @member {string} egret.gui.SkinnableComponent#skinName
         */
        skinName: any;
        private createChildrenCalled;
        /**
         * @method egret.gui.SkinnableComponent#createChildren
         */
        createChildren(): void;
        /**
         * 皮肤解析适配器
         */
        private static skinAdapter;
        /**
         * 默认皮肤主题解析器
         */
        static _defaultTheme: Theme;
        /**
         * 解析skinName
         */
        private parseSkinName();
        /**
         * 获取皮肤适配器
         */
        private getSkinAdapter();
        _skin: any;
        /**
         * 皮肤对象实例。
         * @member egret.gui.SkinnableComponent#skin
         */
        skin: any;
        /**
         * 设置皮肤
         */
        _setSkin(skin: any): void;
        private skinLayoutEnabled;
        /**
         * 附加皮肤
         * @method egret.gui.SkinnableComponent#attachSkin
         * @param skin {any}
         */
        attachSkin(skin: any): void;
        /**
         * 匹配皮肤和主机组件的公共变量，并完成实例的注入。此方法在附加皮肤时会自动执行一次。
         * 若皮肤中含有延迟实例化的子部件，在子部件实例化完成时需要从外部再次调用此方法,完成注入。
         * @method egret.gui.SkinnableComponent#findSkinParts
         */
        findSkinParts(): void;
        /**
         * 卸载皮肤
         * @method egret.gui.SkinnableComponent#detachSkin
         * @param skin {any}
         */
        detachSkin(skin: any): void;
        /**
         * 若皮肤是ISkin,则调用此方法附加皮肤中的公共部件
         * @method egret.gui.SkinnableComponent#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * 若皮肤是ISkin，则调用此方法卸载皮肤之前注入的公共部件
         * @method egret.gui.SkinnableComponent#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        private stateIsDirty;
        /**
         * 标记当前需要重新验证皮肤状态
         * @method egret.gui.SkinnableComponent#invalidateSkinState
         */
        invalidateSkinState(): void;
        /**
         * 子类覆盖此方法,应用当前的皮肤状态
         * @method egret.gui.SkinnableComponent#validateSkinState
         */
        validateSkinState(): void;
        private _autoMouseEnabled;
        /**
         * 在enabled属性发生改变时是否自动开启或禁用鼠标事件的响应。默认值为true。
         * @member egret.gui.SkinnableComponent#autoTouchEnabled
         */
        autoTouchEnabled: boolean;
        /**
         * 外部显式设置的mouseChildren属性值
         */
        private explicitMouseChildren;
        /**
         * @member egret.gui.SkinnableComponent#touchChildren
         */
        /**
         * @inheritDoc
         */
        touchChildren: boolean;
        /**
         * 外部显式设置的mouseEnabled属性值
         */
        private explicitMouseEnabled;
        /**
         * @member egret.gui.SkinnableComponent#touchEnabled
         */
        /**
         * @inheritDoc
         */
        touchEnabled: boolean;
        /**
         * @member egret.gui.SkinnableComponent#enabled
         */
        /**
         * @inheritDoc
         */
        enabled: boolean;
        _setEnabled(value: boolean): void;
        /**
         * 返回组件当前的皮肤状态名称,子类覆盖此方法定义各种状态名
         * @method egret.gui.SkinnableComponent#getCurrentSkinState
         * @returns {string}
         */
        getCurrentSkinState(): string;
        /**
         * @method egret.gui.SkinnableComponent#commitProperties
         */
        commitProperties(): void;
        _childXYChanged(): void;
        measure(): void;
        /**
         * @method egret.gui.SkinnableComponent#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        private static errorStr;
        /**
         * @method egret.gui.SkinnableComponent#addChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        addChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.SkinnableComponent#addChildAt
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         * @returns {DisplayObject}
         */
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
         * @method egret.gui.SkinnableComponent#removeChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        removeChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.SkinnableComponent#removeChildAt
         * @deprecated
         * @param index {number}
         * @returns {DisplayObject}
         */
        removeChildAt(index: number): DisplayObject;
        /**
         * @method egret.gui.SkinnableComponent#setChildIndex
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         */
        setChildIndex(child: DisplayObject, index: number): void;
        /**
         * @method egret.gui.SkinnableComponent#swapChildren
         * @deprecated
         * @param child1 {DisplayObject}
         * @param child2 {DisplayObject}
         */
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
         * @method egret.gui.SkinnableComponent#swapChildrenAt
         * @deprecated
         * @param index1 {number}
         * @param index2 {number}
         */
        swapChildrenAt(index1: number, index2: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.DefaultSkinAdapter
     * @classdesc
     * 默认的ISkinAdapter接口实现
     * @implements egret.gui.ISkinAdapter
     */
    class DefaultSkinAdapter implements ISkinAdapter {
        /**
         * 构造函数
         * @method egret.gui.DefaultSkinAdapter#constructor
         */
        constructor();
        /**
         * 获取皮肤显示对象
         * @method egret.gui.ISkinAdapter#getSkin
         * @param skinName {any} 待解析的皮肤标识符
         * @param hostComponentKey {string} 主机组件标识符
         * @returns {any} 皮肤对象实例
         */
        getSkin(skinName: any, hostComponentKey: string): any;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.DefaultAssetAdapter
     * @classdesc
     * 默认的IAssetAdapter接口实现
     * @implements egret.gui.IAssetAdapter
     */
    class DefaultAssetAdapter implements IAssetAdapter {
        /**
         * 构造函数
         * @method egret.gui.DefaultSkinAdapter#constructor
         */
        constructor();
        /**
         * 解析素材
         * @method egret.gui.DefaultAssetAdapter#getAsset
         * @param source {any} 待解析的新素材标识符
         * @param compFunc {Function} 解析完成回调函数，示例：compFunc(content:any,source:any):void;
         * 回调参数content接受两种类型：DisplayObject或Texture。
         * @param thisObject {any} compFunc的this引用
         * @param oldContent any 旧的内容对象,传入值有可能为null。
         * 对于某些类型素材，例如MovieClip，可以重用传入的显示对象,只修改其数据再返回。
         */
        getAsset(source: any, compFunc: Function, thisObject: any, oldContent: any): void;
    }
}
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
declare module egret.gui {
    class Theme {
        /**
         * 构造函数
         * @method egret.gui.PopUpManager#constructor
         */
        constructor(configURL: string);
        private static initialized;
        static load(configURL: string): void;
        private loadConfig(configURL);
        private onLoadComplete(event);
        private onLoadError(event);
        private skinMap;
        private delyList;
        private handleDelyList();
        getDefaultSkin(client: SkinnableComponent): any;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.SkinBasicLayout
     * @classdesc
     * 皮肤简单布局类。
     * @extends egret.HashObject
     */
    class SkinBasicLayout extends HashObject {
        /**
         * @method egret.gui.SkinBasicLayout#constructor
         */
        constructor();
        private _target;
        /**
         * 目标布局对象
         * @member egret.gui.SkinBasicLayout#target
         */
        target: Skin;
        /**
         * 测量组件尺寸大小
         * @method egret.gui.SkinBasicLayout#measure
         */
        measure(): void;
        /**
         * 更新显示列表
         * @method egret.gui.SkinBasicLayout#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ButtonBase
     * @classdesc
     * 按钮组件基类
     * @extends egret.gui.SkinnableComponent
     */
    class ButtonBase extends SkinnableComponent {
        /**
         * 构造函数
         * @method egret.gui.ButtonBase#constructor
         */
        constructor();
        /**
         * 已经开始过不断抛出buttonDown事件的标志
         */
        private _downEventFired;
        /**
         * 重发buttonDown事件计时器
         */
        private autoRepeatTimer;
        /**
         * [SkinPart]按钮上的文本标签
         * @member egret.gui.ButtonBase#labelDisplay
         */
        labelDisplay: IDisplayText;
        private _autoRepeat;
        /**
         * 指定在用户按住鼠标按键时是否重复分派 buttonDown 事件。
         * @member egret.gui.ButtonBase#autoRepeat
         */
        autoRepeat: boolean;
        private _repeatDelay;
        /**
         * 在第一个 buttonDown 事件之后，以及相隔每个 repeatInterval 重复一次 buttonDown 事件之前，需要等待的毫秒数。
         * @member egret.gui.ButtonBase#repeatDelay
         */
        repeatDelay: number;
        private _repeatInterval;
        /**
         * 用户在按钮上按住鼠标时，buttonDown 事件之间相隔的毫秒数。
         * @member egret.gui.ButtonBase#repeatInterval
         */
        repeatInterval: number;
        private _hovered;
        /**
         * 指示鼠标指针是否位于按钮上。
         * @member egret.gui.ButtonBase#hovered
         */
        hovered: boolean;
        private _keepDown;
        /**
         * 强制让按钮停在鼠标按下状态,此方法不会导致重复抛出buttonDown事件,仅影响皮肤State。
         * @method egret.gui.ButtonBase#_keepDown
         * @param down {boolean} 是否按下
         */
        _setKeepDown(down: boolean): void;
        private _label;
        /**
         * 要在按钮上显示的文本
         * @member egret.gui.ButtonBase#label
         */
        label: string;
        _getLabel(): string;
        _setLabel(value: string): void;
        private _mouseCaptured;
        /**
         * 指示第一次分派 MouseEvent.MOUSE_DOWN 时，是否按下鼠标以及鼠标指针是否在按钮上。
         * @member egret.gui.ButtonBase#mouseCaptured
         */
        mouseCaptured: boolean;
        private _stickyHighlighting;
        /**
         * 如果为 false，则按钮会在用户按下它时显示其鼠标按下时的外观，但在用户将鼠标拖离它时将改为显示鼠标经过的外观。
         * 如果为 true，则按钮会在用户按下它时显示其鼠标按下时的外观，并在用户将鼠标拖离时继续显示此外观。
         * @member egret.gui.ButtonBase#stickyHighlighting
         */
        stickyHighlighting: boolean;
        /**
         * 开始抛出buttonDown事件
         */
        private checkButtonDownConditions();
        /**
         * 添加鼠标事件监听
         * @method egret.gui.ButtonBase#addHandlers
         */
        addHandlers(): void;
        /**
         * 添加舞台鼠标弹起事件监听
         */
        private addStageMouseHandlers();
        /**
         * 移除舞台鼠标弹起事件监听
         */
        private removeStageMouseHandlers();
        /**
         * 按钮是否是按下的状态
         */
        private isDown();
        /**
         * 检查需要启用还是关闭重发计时器
         */
        private checkAutoRepeatTimerConditions(buttonDown);
        /**
         * 启动重发计时器
         */
        private startTimer();
        /**
         * 停止重发计时器
         */
        private stopTimer();
        /**
         * 鼠标事件处理
         * @method egret.gui.ButtonBase#mouseEventHandler
         * @param event {Event}
         */
        mouseEventHandler(event: Event): void;
        /**
         * 按钮弹起事件
         * @method egret.gui.ButtonBase#buttonReleased
         */
        buttonReleased(): void;
        /**
         * 按钮点击事件
         * @method egret.gui.ButtonBase#clickHandler
         * @param event {TouchEvent}
         */
        clickHandler(event: TouchEvent): void;
        /**
         * 舞台上鼠标弹起事件
         */
        private stage_mouseUpHandler(event);
        /**
         * 自动重发计时器首次延迟结束事件
         */
        private autoRepeat_timerDelayHandler(event);
        /**
         * 自动重发buttonDown事件
         */
        private autoRepeat_timerHandler(event);
        /**
         * @method egret.gui.ButtonBase#getCurrentSkinState
         * @returns {string}
         */
        getCurrentSkinState(): string;
        /**
         * @method egret.gui.ButtonBase#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ToggleButtonBase
     * @classdesc
     * 切换按钮组件基类
     * @extends egret.gui.ButtonBase
     */
    class ToggleButtonBase extends ButtonBase {
        /**
         * @method egret.gui.ToggleButtonBase#constructor
         */
        constructor();
        _selected: boolean;
        /**
         * 按钮处于按下状态时为 true，而按钮处于弹起状态时为 false。
         * @member egret.gui.ToggleButtonBase#selected
         */
        selected: boolean;
        _setSelected(value: boolean): void;
        /**
         * @method egret.gui.ToggleButtonBase#getCurrentSkinState
         * @returns {string}
         */
        getCurrentSkinState(): string;
        /**
         * 是否根据鼠标事件自动变换选中状态,默认true。仅框架内使用。
         */
        _autoSelected: boolean;
        /**
         * @method egret.gui.ToggleButtonBase#buttonReleased
         */
        buttonReleased(): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TextBase
     * @classdesc
     * 文本基类,实现对文本的自动布局，样式属性设置。
     * @extends egret.gui.UIComponent
     * @implements egret.gui.IDisplayText
     */
    class TextBase extends UIComponent implements IDisplayText {
        /**
         * @method egret.gui.TextBase#constructor
         */
        constructor();
        /**
         * 默认的文本测量宽度
         * @constant egret.gui.TextBase.DEFAULT_MEASURED_WIDTH
         */
        static DEFAULT_MEASURED_WIDTH: number;
        /**
         * 默认的文本测量高度
         * @constant egret.gui.TextBase.DEFAULT_MEASURED_HEIGHT
         */
        static DEFAULT_MEASURED_HEIGHT: number;
        /**
         * 呈示此文本的内部 TextField
         */
        _textField: TextField;
        private fontFamilyChanged;
        private _fontFamily;
        /**
         * 字体名称 。默认值：SimSun
         * @member egret.gui.TextBase#fontFamily
         */
        fontFamily: string;
        _sizeChanged: boolean;
        _size: number;
        /**
         * 字号大小,默认值30 。
         * @member egret.gui.TextBase#size
         */
        size: number;
        _getFontSize(): number;
        _setFontSize(value: number): void;
        _focusEnabled: boolean;
        focusEnabled: boolean;
        /**
         * @inheritDoc
         */
        setFocus(): void;
        private boldChanged;
        private _bold;
        /**
         * 是否显示为粗体，默认false。
         * @member egret.gui.TextBase#bold
         */
        bold: boolean;
        private italicChanged;
        private _italic;
        /**
         * 是否显示为粗体，默认false。
         * @member egret.gui.TextBase#italic
         */
        italic: boolean;
        private textAlignChanged;
        private _textAlign;
        /**
         * 文字的水平对齐方式 ,请使用HorizontalAlign中定义的常量。
         * 默认值：HorizontalAlign.LEFT。
         * @member egret.gui.TextBase#textAlign
         */
        textAlign: string;
        private verticalAlignChanged;
        private _verticalAlign;
        /**
         * 文字的垂直对齐方式 ,请使用VerticalAlign中定义的常量。
         * 默认值：VerticalAlign.TOP。
         * @member egret.gui.TextBase#verticalAlign
         */
        verticalAlign: string;
        private lineSpacingChanged;
        _lineSpacing: number;
        /**
         * 行间距
         * @member egret.gui.TextBase#lineSpacing
         */
        lineSpacing: number;
        _getLineSpacing(): number;
        _setLineSpacing(value: number): void;
        private textColorChanged;
        private _textColor;
        /**
         * @member egret.gui.TextBase#textColor
         */
        textColor: number;
        /**
         * @member egret.gui.TextBase#_textChanged
         */
        _textChanged: boolean;
        _text: string;
        /**
         * @member egret.gui.TextBase#text
         */
        text: string;
        /**
         * @method egret.gui.TextBase#createChildren
         */
        createChildren(): void;
        /**
         * @method egret.gui.TextBase#commitProperties
         */
        commitProperties(): void;
        /**
         * 检查是否创建了textField对象，没有就创建一个。
         */
        private checkTextField();
        _createTextField(): void;
        /**
         * @method egret.gui.TextBase#measure
         */
        measure(): void;
        /**
         * 更新显示列表
         * @method egret.gui.TextBase#$updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        $updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @method egret.gui.TextBase#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        dispatchPropertyChangeEvent(propertyName: string, oldValue: any, value: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.GroupBase
     * @classdesc
     * 自动布局容器基类
     * @extends egret.gui.UIComponent
     * @implements egret.gui.IViewport
     */
    class GroupBase extends UIComponent implements IViewport {
        /**
         * @method egret.gui.GroupBase#constructor
         */
        constructor();
        /**
         * @method egret.gui.GroupBase#createChildren
         */
        createChildren(): void;
        private _contentWidth;
        /**
         * @member egret.gui.GroupBase#contentWidth
         */
        contentWidth: number;
        private setContentWidth(value);
        private _contentHeight;
        /**
         * @member egret.gui.GroupBase#contentHeight
         */
        contentHeight: number;
        private setContentHeight(value);
        /**
         * 设置 contentWidth 和 contentHeight 属性，此方法由Layout类调用
         * @method egret.gui.GroupBase#setContentSize
         * @private
         *
         * @param width {number}
         * @param height {number}
         */
        setContentSize(width: number, height: number): void;
        _layout: LayoutBase;
        /**
         * 此容器的布局对象
         * @member egret.gui.GroupBase#layout
         */
        layout: LayoutBase;
        _setLayout(value: LayoutBase): void;
        private _clipAndEnableScrolling;
        /**
         * 如果为 true，指定将子代剪切到视区的边界。如果为 false，则容器子代会从容器边界扩展过去，而不管组件的大小规范。默认false
         * @member egret.gui.GroupBase#clipAndEnableScrolling
         */
        clipAndEnableScrolling: boolean;
        private _horizontalScrollPosition;
        /**
         * 可视区域水平方向起始点
         * @member egret.gui.GroupBase#horizontalScrollPosition
         */
        horizontalScrollPosition: number;
        private _verticalScrollPosition;
        /**
         * 可视区域竖直方向起始点
         * @member egret.gui.GroupBase#verticalScrollPosition
         */
        verticalScrollPosition: number;
        /**
         * 滚动条位置改变
         */
        private scrollPositionChanged();
        /**
         * 更新可视区域
         * @param w {number}
         * @param h {number}
         */
        private updateScrollRect(w, h);
        /**
         * @method egret.gui.GroupBase#measure
         */
        measure(): void;
        /**
         * 在更新显示列表时是否需要更新布局标志
         * @member egret.gui.GroupBase#_layoutInvalidateDisplayListFlag
         */
        _layoutInvalidateDisplayListFlag: boolean;
        /**
         * 标记需要更新显示列表但不需要更新布局
         * @method egret.gui.GroupBase#_invalidateDisplayListExceptLayout
         */
        _invalidateDisplayListExceptLayout(): void;
        /**
         * @method egret.gui.GroupBase#invalidateDisplayList
         */
        invalidateDisplayList(): void;
        /**
         * @method egret.gui.GroupBase#_childXYChanged
         */
        _childXYChanged(): void;
        /**
         * 在测量尺寸时是否需要测量布局的标志
         * @member egret.gui.GroupBase#_layoutInvalidateSizeFlag
         */
        _layoutInvalidateSizeFlag: boolean;
        /**
         * 标记需要更新显示列表但不需要更新布局
         * @method egret.gui.GroupBase#_invalidateSizeExceptLayout
         */
        _invalidateSizeExceptLayout(): void;
        /**
         * @method egret.gui.GroupBase#invalidateSize
         */
        invalidateSize(): void;
        /**
         * @method egret.gui.GroupBase#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 此容器中的可视元素的数量。
         * @member egret.gui.GroupBase#numElements
         */
        numElements: number;
        /**
         * 返回指定索引处的可视元素。
         * @method egret.gui.GroupBase#getElementAt
         * @param index {number} 要检索的元素的索引。
         * @throws RangeError 如果在子列表中不存在该索引位置。
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        /**
         * 返回可视元素的索引位置。若不存在，则返回-1。
         * @method egret.gui.GroupBase#getElementIndex
         * @param element {IVisualElement} 可视元素。
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * 返回在容器可视区域内的布局元素索引列表,此方法忽略不是布局元素的普通的显示对象
         * @method egret.gui.GroupBase#getElementIndicesInView
         * @returns {number}
         */
        getElementIndicesInView(): number[];
        /**
         * 在支持虚拟布局的容器中，设置容器内可见的子元素索引范围。此方法在不支持虚拟布局的容器中无效。
         * 通常在即将连续调用getVirtualElementAt()之前需要显式设置一次，以便容器提前释放已经不可见的子元素。
         * @method egret.gui.GroupBase#setVirtualElementIndicesInView
         * @param startIndex {number} 可视元素起始索引
         * @param endIndex {number} 可视元素结束索引
         */
        setVirtualElementIndicesInView(startIndex: number, endIndex: number): void;
        /**
         * 支持useVirtualLayout属性的布局类在updateDisplayList()中使用此方法来获取“处于视图中”的布局元素
         * @method egret.gui.GroupBase#getVirtualElementAt
         * @param index {number} 要检索的元素的索引。
         * @returns {IVisualElement}
         */
        getVirtualElementAt(index: number): IVisualElement;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ItemRenderer
     * @classdesc
     * 项呈示器基类
     * @extends egret.gui.ButtonBase
     * @implements egret.gui.IItemRenderer
     */
    class ItemRenderer extends ButtonBase implements IItemRenderer {
        /**
         * @method egret.gui.ItemRenderer#constructor
         */
        constructor();
        private dataChangedFlag;
        private _data;
        /**
         * @member egret.gui.ItemRenderer#data
         */
        data: any;
        /**
         * 子类复写此方法以在data数据源发生改变时跟新显示列表。
         * 与直接复写_data的setter方法不同，它会确保在皮肤已经附加完成后再被调用。
         * @method egret.gui.ItemRenderer#dataChanged
         */
        dataChanged(): void;
        private _selected;
        /**
         * @member egret.gui.ItemRenderer#selected
         */
        selected: boolean;
        private _itemIndex;
        /**
         * @member egret.gui.ItemRenderer#itemIndex
         */
        itemIndex: number;
        /**
         * @method egret.gui.ItemRenderer#commitProperties
         */
        commitProperties(): void;
        /**
         * @method egret.gui.ItemRenderer#getCurrentSkinState
         * @returns {string}
         */
        getCurrentSkinState(): string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TreeItemRenderer
     * @classdesc
     * Tree组件的项呈示器基类
     * @extends egret.gui.ItemRenderer
     * @implements egret.gui.ITreeItemRenderer
     */
    class TreeItemRenderer extends ItemRenderer implements ITreeItemRenderer {
        /**
         * 构造函数
         * @method egret.gui.TreeItemRenderer#constructor
         */
        constructor();
        private onItemMouseDown(event);
        /**
         * [SkinPart]图标显示对象
         * @member egret.gui.TreeItemRenderer#iconDisplay
         */
        iconDisplay: UIAsset;
        /**
         * [SkinPart]子节点开启按钮
         * @member egret.gui.TreeItemRenderer#disclosureButton
         */
        disclosureButton: ToggleButtonBase;
        /**
         * [SkinPart]用于调整缩进值的容器对象。
         * @member egret.gui.TreeItemRenderer#contentGroup
         */
        contentGroup: DisplayObject;
        private _indentation;
        /**
         * 子节点相对父节点的缩进值，以像素为单位。默认17。
         * @member egret.gui.TreeItemRenderer#indentation
         */
        indentation: number;
        private _iconSkinName;
        /**
         * @member egret.gui.TreeItemRenderer#iconSkinName
         */
        iconSkinName: any;
        private _depth;
        /**
         * @member egret.gui.TreeItemRenderer#depth
         */
        depth: number;
        private _hasChildren;
        /**
         * @member egret.gui.TreeItemRenderer#hasChildren
         */
        hasChildren: boolean;
        private _isOpen;
        /**
         * @member egret.gui.TreeItemRenderer#opened
         */
        opened: boolean;
        /**
         * @method egret.gui.TreeItemRenderer#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.TreeItemRenderer#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * 鼠标在disclosureButton上按下
         * @method egret.gui.TreeItemRenderer#disclosureButton_mouseDownHandler
         * @param event {TouchEvent}
         */
        disclosureButton_mouseDownHandler(event: TouchEvent): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Animation
     * @classdesc
     * 数值缓动工具类
     */
    class Animation {
        /**
         * 构造函数
         * @method egret.gui.Animation#constructor
         * @param updateFunction {Function} 动画更新时的回调函数,updateFunction(animation:Animation):void
         * @param thisObject {an}
         */
        constructor(updateFunction: (animation: Animation) => void, thisObject: any);
        /**
         * 此动画的缓动行为。设置为null意味着不使用缓动，默认值为Ease.sineInOut()
         * @member egret.gui.Animation#easerFunction
         */
        easerFunction: Function;
        private thisObject;
        private _isPlaying;
        /**
         * 是否正在播放动画，不包括延迟等待和暂停的阶段
         * @member egret.gui.Animation#isPlaying
         */
        isPlaying: boolean;
        private _duration;
        /**
         * 动画持续时间,单位毫秒，默认值500
         * @member egret.gui.Animation#duration
         */
        duration: number;
        private _startDelay;
        /**
         * 动画开始播放前的延时时间,单位毫秒,默认0。
         * @member egret.gui.Animation#startDelay
         */
        startDelay: number;
        private _repeatCount;
        /**
         * 动画重复的次数，0代表无限制重复。默认值为1。
         * @member egret.gui.Animation#repeatCount
         */
        repeatCount: number;
        private _repeatDelay;
        /**
         * 每次重复播放之间的间隔。第二次及以后的播放开始之前的延迟毫秒数。若要设置第一次之前的延迟时间，请使用startDelay属性。
         * @member egret.gui.Animation#repeatDelay
         */
        repeatDelay: number;
        /**
         * 随着时间的推移Animation将设置动画的属性和值的列表。对象示例:{p:"x",f:10,t:100}表示，属性名"x"从10改变到100。
         * @member egret.gui.Animation#motionPaths
         */
        motionPaths: any[];
        private _currentValue;
        /**
         * 动画到当前时间对应的值。以MotionPath.property为键存储各个MotionPath的当前值。
         * @member egret.gui.Animation#currentValue
         */
        currentValue: any;
        /**
         * 动画开始播放时的回调函数,只会在首次延迟等待结束时触发一次,若有重复播放，之后将触发repeatFunction。startFunction(animation:Animation):void
         * @member egret.gui.Animation#startFunction
         */
        startFunction: Function;
        /**
         * 动画播放结束时的回调函数,可以是正常播放结束，也可以是被调用了end()方法导致结束。注意：stop()方法被调用不会触发这个函数。endFunction(animation:Animation):void
         * @member egret.gui.Animation#endFunction
         */
        endFunction: (animation: Animation) => void;
        /**
         * 动画更新时的回调函数,updateFunction(animation:Animation):void
         * @member egret.gui.Animation#updateFunction
         */
        updateFunction: Function;
        /**
         * 动画被停止的回调函数，即stop()方法被调用。stopFunction(animation:Animation):void
         * @member egret.gui.Animation#stopFunction
         */
        stopFunction: Function;
        /**
         * 开始正向播放动画,无论何时调用都重新从零时刻开始，若设置了延迟会首先进行等待。
         * @method egret.gui.Animation#play
         */
        play(): void;
        /**
         * 立即跳到指定百分比的动画位置
         */
        private seek(runningTime);
        /**
         * 开始播放动画
         */
        private start();
        /**
         * 直接跳到动画结尾
         * @method egret.gui.Animation#end
         */
        end(): void;
        /**
         * 停止播放动画
         * @method egret.gui.Animation#stop
         */
        stop(): void;
        /**
         * 仅停止播放动画，而不调用stopFunction。
         */
        private stopAnimation();
        private pauseTime;
        private _isPaused;
        /**
         * 正在暂停中
         * @member egret.gui.Animation#isPaused
         */
        isPaused: boolean;
        /**
         * 暂停播放
         * @method egret.gui.Animation#pause
         */
        pause(): void;
        /**
         * 继续播放
         * @method egret.gui.Animation#resume
         */
        resume(): void;
        /**
         * 动画启动时刻
         */
        private startTime;
        private _started;
        /**
         * 动画已经开始的标志，包括延迟等待和暂停的阶段。
         * @member egret.gui.Animation#started
         */
        started: boolean;
        /**
         * 已经播放的次数。
         */
        private playedTimes;
        /**
         * 计算当前值并返回动画是否结束
         */
        private doInterval();
        /**
         * 计算当前值
         */
        private caculateCurrentValue(fraction);
        /**
         * 总时间轴的当前时间
         */
        private static currentTime;
        private static TIMER_RESOLUTION;
        private static registered;
        /**
         * 正在活动的动画
         */
        private static activeAnimations;
        /**
         * 添加动画到队列
         */
        private static addAnimation(animation);
        /**
         * 从队列移除动画,返回移除前的索引
         */
        private static removeAnimation(animation);
        /**
         * 当前正在执行动画的索引
         */
        private static currentIntervalIndex;
        /**
         * 计时器触发函数
         */
        private static onEnterFrame(frameTime, currentTime);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Range
     * @classdesc
     * 范围选取组件,该组件包含一个值和这个值所允许的最大最小约束范围。
     * @extends egret.gui.SkinnableComponent
     */
    class Range extends SkinnableComponent {
        /**
         * 构造函数
         * @method egret.gui.Range#constructor
         */
        constructor();
        _maximum: number;
        /**
         * 最大有效值改变标志
         */
        private maxChanged;
        /**
         * 最大有效值
         * @member egret.gui.Range#maximum
         */
        maximum: number;
        _setMaximun(value: number): void;
        _minimum: number;
        /**
         * 最小有效值改变标志
         */
        private minChanged;
        /**
         * 最小有效值
         * @member egret.gui.Range#minimum
         */
        minimum: number;
        _setMinimun(value: number): void;
        private _stepSize;
        /**
         * 单步大小改变的标志
         */
        private stepSizeChanged;
        /**
         * 调用 changeValueByStep() 方法时 value 属性更改的单步大小。默认值为 1。<br/>
         * 除非 snapInterval 为 0，否则它必须是 snapInterval 的倍数。<br/>
         * 如果 stepSize 不是倍数，则会将它近似到大于或等于 snapInterval 的最近的倍数。<br/>
         * @member egret.gui.Range#stepSize
         */
        stepSize: number;
        private _value;
        private _changedValue;
        /**
         * 此范围的当前值改变标志
         */
        private valueChanged;
        /**
         * 此范围的当前值。
         * @member egret.gui.Range#value
         */
        value: number;
        _setValue(newValue: number): void;
        _getValue(): number;
        private _snapInterval;
        private snapIntervalChanged;
        private _explicitSnapInterval;
        /**
         * snapInterval 属性定义 value 属性的有效值。如果为非零，则有效值为 minimum 与此属性的整数倍数之和，且小于或等于 maximum。 <br/>
         * 例如，如果 minimum 为 10，maximum 为 20，而此属性为 3，则可能的有效值为 10、13、16、19 和 20。<br/>
         * 如果此属性的值为零，则仅会将有效值约束到介于 minimum 和 maximum 之间（包括两者）。<br/>
         * 此属性还约束 stepSize 属性（如果设置）的有效值。如果未显式设置此属性，但设置了 stepSize，则 snapInterval 将默认为 stepSize。<br/>
         * @member egret.gui.Range#snapInterval
         */
        snapInterval: number;
        /**
         * @method egret.gui.Range#commitProperties
         */
        commitProperties(): void;
        /**
         * 修正stepSize到最接近snapInterval的整数倍
         */
        private nearestValidSize(size);
        /**
         * 修正输入的值为有效值
         * @method egret.gui.Range#nearestValidValue
         * @param value {number} 输入值。
         * @param interval {number} snapInterval 的值，或 snapInterval 的整数倍数。
         * @returns {number}
         */
        nearestValidValue(value: number, interval: number): number;
        /**
         * 设置当前值。此方法假定调用者已经使用了 nearestValidValue() 方法来约束 value 参数
         * @method egret.gui.Range#setValue
         * @param value {number} value属性的新值
         */
        setValue(value: number): void;
        /**
         * 按 stepSize增大或减小当前值
         * @method egret.gui.Range#changeValueByStep
         * @param increase {boolean} 若为 true，则向value增加stepSize，否则减去它。
         */
        changeValueByStep(increase?: boolean): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TrackBase
     * @classdesc
     * TrackBase类是具有一个轨道和一个或多个滑块按钮的组件的一个基类，如 Slider 和 ScrollBar。
     * @extends egret.gui.Range
     */
    class TrackBase extends Range {
        /**
         * @method egret.gui.TrackBase#constructor
         */
        constructor();
        private _slideDuration;
        /**
         * 在轨道上单击以移动滑块时，滑动动画持续的时间（以毫秒为单位）。<br/>
         * 此属性用于 Slider 和 ScrollBar。对于 Slider，在轨道上的任何单击将导致生成使用此样式的一个动画，同时滑块将移到单击的位置。<br/>
         * 对于 ScrollBar，仅当按住 Shift 键并单击轨道时才使用此样式，这会导致滑块移到单击的位置。<br/>
         * 未按下 Shift 键时单击 ScrollBar 轨道将导致出现分页行为。<br/>
         * 按住 Shift 键并单击时，必须也对 ScrollBar 设置 smoothScrolling 属性才可以实现动画行为。<br/>
         * 此持续时间是整个滑过轨道的总时间，实际滚动会根据距离相应缩短。
         * @member egret.gui.TrackBase#slideDuration
         */
        slideDuration: number;
        /**
         * [SkinPart]实体滑块组件
         * @member egret.gui.TrackBase#thumb
         */
        thumb: Button;
        /**
         * [SkinPart]实体轨道组件
         * @member egret.gui.TrackBase#track
         */
        track: Button;
        /**
         * 最大有效值
         * @member egret.gui.TrackBase#maximum
         */
        /**
         * @inheritDoc
         */
        maximum: number;
        /**
         * 最小有效值
         * @member egret.gui.TrackBase#minimum
         */
        /**
         * @inheritDoc
         */
        minimum: number;
        /**
         * 此范围的当前值。
         * @member egret.gui.TrackBase#value
         */
        /**
         * @inheritDoc
         */
        value: number;
        /**
         * @method egret.gui.TrackBase#setValue
         * @param value {number}
         */
        setValue(value: number): void;
        /**
         * 将相对于轨道的 x,y 像素位置转换为介于最小值和最大值（包括两者）之间的一个值。
         * @method egret.gui.TrackBase#pointToValue
         * @param x {number} 相对于轨道原点的位置的x坐标。
         * @param y {number} 相对于轨道原点的位置的y坐标。
         * @returns {number}
         */
        pointToValue(x: number, y: number): number;
        /**
         * @method egret.gui.TrackBase#changeValueByStep
         * @param increase {boolean}
         */
        changeValueByStep(increase?: boolean): void;
        /**
         * @method egret.gui.TrackBase#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.TrackBase#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * @method egret.gui.TrackBase#updateDisplayList
         * @param w {number}
         * @param h {number}
         */
        updateDisplayList(w: number, h: number): void;
        /**
         * 记录鼠标在thumb上按下的位置
         */
        _clickOffsetX: number;
        _clickOffsetY: number;
        /**
         * 更新皮肤部件（通常为滑块）的大小和可见性。<br/>
         * 子类覆盖此方法以基于 minimum、maximum 和 value 属性更新滑块的大小、位置和可见性。
         * @method egret.gui.TrackBase#updateSkinDisplayList
         */
        updateSkinDisplayList(): void;
        /**
         * 添加到舞台时
         */
        private addedToStageHandler(event);
        /**
         * 轨道尺寸改变事件
         */
        private track_resizeHandler(event);
        /**
         * 滑块尺寸改变事件
         */
        private thumb_resizeHandler(event);
        /**
         * 滑块三个阶段的延迟布局更新完毕事件
         */
        private thumb_updateCompleteHandler(event);
        /**
         * 滑块按下事件
         * @method egret.gui.TrackBase#thumb_mouseDownHandler
         * @param event {TouchEvent}
         */
        thumb_mouseDownHandler(event: TouchEvent): void;
        /**
         * 当鼠标拖动thumb时，需要更新value的标记。
         */
        private needUpdateValue;
        /**
         * 拖动thumb过程中触发的EnterFrame事件
         */
        private onEnterFrame(event);
        /**
         * 当thumb被拖动时更新值，此方法每帧只被调用一次，比直接在鼠标移动事件里更新性能更高。
         * @method egret.gui.TrackBase#updateWhenMouseMove
         */
        updateWhenMouseMove(): void;
        _moveStageX: number;
        _moveStageY: number;
        /**
         * 鼠标移动事件
         * @method egret.gui.TrackBase#stage_mouseMoveHandler
         * @param event {TouchEvent}
         */
        stage_mouseMoveHandler(event: TouchEvent): void;
        /**
         * 鼠标弹起事件
         * @method egret.gui.TrackBase#stage_mouseUpHandler
         * @param event {Event}
         */
        stage_mouseUpHandler(event: Event): void;
        /**
         * 轨道被按下事件
         * @method egret.gui.TrackBase#track_mouseDownHandler
         * @param event {TouchEvent}
         */
        track_mouseDownHandler(event: TouchEvent): void;
        private mouseDownTarget;
        /**
         * 当在组件上按下鼠标时记录被按下的子显示对象
         */
        private mouseDownHandler(event);
        /**
         * 当鼠标弹起时，若不是在mouseDownTarget上弹起，而是另外的子显示对象上弹起时，额外抛出一个鼠标单击事件。
         */
        private stage_mouseUpSomewhereHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.SliderBase
     * @classdesc
     * 滑块控件基类
     * @extends egret.gui.TrackBase
     */
    class SliderBase extends TrackBase {
        /**
         * 构造函数
         * @method egret.gui.SliderBase#constructor
         */
        constructor();
        /**
         * [SkinPart]轨道高亮显示对象
         * @member egret.gui.SliderBase#trackHighlight
         */
        trackHighlight: DisplayObject;
        private _showTrackHighlight;
        /**
         * 是否启用轨道高亮效果。默认值为true。
         * 注意，皮肤里的子部件trackHighlight要同时为非空才能显示高亮效果。
         * @member egret.gui.SliderBase#showTrackHighlight
         */
        showTrackHighlight: boolean;
        /**
         * 动画实例
         */
        private animator;
        private _pendingValue;
        /**
         * 释放鼠标按键时滑块将具有的值。无论liveDragging是否为true，在滑块拖动期间始终更新此属性。
         * 而value属性在当liveDragging为false时，只在鼠标释放时更新一次。
         * @member egret.gui.SliderBase#pendingValue
         */
        pendingValue: number;
        /**
         * @method egret.gui.SliderBase#setValue
         * @param value {number}
         */
        setValue(value: number): void;
        /**
         * 动画播放更新数值
         */
        _animationUpdateHandler(animation: Animation): void;
        /**
         * 动画播放结束时要到达的value。
         */
        private slideToValue;
        /**
         * 动画播放完毕
         */
        private animationEndHandler(animation);
        /**
         * 停止播放动画
         */
        private stopAnimation();
        /**
         * @method egret.gui.SliderBase#thumb_mouseDownHandler
         * @param event {TouchEvent}
         */
        thumb_mouseDownHandler(event: TouchEvent): void;
        private _liveDragging;
        /**
         * 如果为 true，则将在沿着轨道拖动滑块时，而不是在释放滑块按钮时，提交此滑块的值。
         * @member egret.gui.SliderBase#liveDragging
         */
        liveDragging: boolean;
        /**
         * @method egret.gui.SliderBase#updateWhenMouseMove
         */
        updateWhenMouseMove(): void;
        /**
         * @method egret.gui.SliderBase#stage_mouseUpHandler
         * @param event {Event}
         */
        stage_mouseUpHandler(event: Event): void;
        /**
         * @method egret.gui.SliderBase#track_mouseDownHandler
         * @param event {TouchEvent}
         */
        track_mouseDownHandler(event: TouchEvent): void;
        /**
         * @method egret.gui.SliderBase#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
    }
}
declare module egret.gui {
    class SkinnableTextBase extends SkinnableComponent {
        constructor();
        _focusEnabled: boolean;
        focusEnabled: boolean;
        /**
         * 焦点移入
         */
        private focusInHandler(event);
        /**
         * 焦点移出
         */
        private focusOutHandler(event);
        /**
         * [SkinPart]实体文本输入组件
         */
        textDisplay: IEditableText;
        /**
         * textDisplay改变时传递的参数
         */
        private textDisplayProperties;
        /**
         * [SkinPart]当text属性为空字符串时要显示的文本。
         */
        promptDisplay: IDisplayText;
        private _prompt;
        /**
         * 当text属性为空字符串时要显示的文本内容。 <p/>
         * 先创建文本控件时将显示提示文本。控件获得焦点时或控件的 text 属性为非空字符串时，提示文本将消失。
         * 控件失去焦点时提示文本将重新显示，但仅当未输入文本时（如果文本字段的值为空字符串）。<p/>
         * 对于文本控件，如果用户输入文本，但随后又将其删除，则控件失去焦点后，提示文本将重新显示。
         * 您还可以通过编程方式将文本控件的 text 属性设置为空字符串使提示文本重新显示。
         */
        prompt: string;
        /**
         * @inheritDoc
         */
        /**
         * @inheritDoc
         */
        maxWidth: number;
        /**
         * 文本颜色。
         */
        textColor: number;
        /**
         * 指定文本字段是否是密码文本字段。如果此属性的值为 true，则文本字段被视为密码文本字段，并使用星号而不是实际字符来隐藏输入的字符。
         * 如果为 false，则不会将文本字段视为密码文本字段。启用密码模式时，“剪切”和“复制”命令及其对应的键盘快捷键将不起作用。
         * 此安全机制可防止不良用户使用快捷键在无人看管的计算机上破译密码。
         */
        displayAsPassword: boolean;
        /**
         * 文本是否可编辑的标志。
         */
        editable: boolean;
        /**
         * 文本字段中最多可包含的字符数（即用户输入的字符数）。脚本可以插入比 maxChars 允许的字符数更多的文本；
         * maxChars 属性仅表示用户可以输入多少文本。如果此属性的值为 0，则用户可以输入无限数量的文本。
         */
        maxChars: number;
        /**
         * 表示用户可输入到文本字段中的字符集。如果 restrict 属性的值为 null，则可以输入任何字符。
         * 如果 restrict 属性的值为空字符串，则不能输入任何字符。如果 restrict 属性的值为一串字符，
         * 则只能在文本字段中输入该字符串中的字符。从左向右扫描该字符串。可以使用连字符 (-) 指定一个范围。
         * 只限制用户交互；脚本可将任何文本放入文本字段中。此属性不与属性检查器中的“嵌入字体”选项同步。<p/>
         * 如果字符串以尖号 (ˆ) 开头，则先接受所有字符，然后从接受字符集中排除字符串中 ˆ 之后的字符。
         * 如果字符串不以尖号 (ˆ) 开头，则最初不接受任何字符，然后将字符串中的字符包括在接受字符集中。
         */
        restrict: string;
        /**
         * 一个布尔值，表示文本字段是否可选。值 true 表示文本可选。selectable 属性控制文本字段是否可选，
         * 而不控制文本字段是否可编辑。动态文本字段即使不可编辑，它也可能是可选的。如果动态文本字段是不可选的，
         * 则用户不能选择其中的文本。 <p/>
         * 如果 selectable 设置为 false，则文本字段中的文本不响应来自鼠标或键盘的选择命令，
         * 并且不能使用“复制”命令复制文本。如果 selectable 设置为 true，则可以使用鼠标或键盘选择文本字段中的文本，
         * 并且可以使用“复制”命令复制文本。即使文本字段是动态文本字段而不是输入文本字段，您也可以用这种方式选择文本。
         */
        selectable: boolean;
        /**
         * 当前所选内容中第一个字符从零开始的字符索引值。例如，第一个字符的索引值是 0，
         * 第二个字符的索引值是 1，依此类推。如果未选定任何文本，此属性为 caretIndex 的值
         */
        selectionBeginIndex: number;
        /**
         * 当前所选内容中最后一个字符从零开始的字符索引值。例如，第一个字符的索引值是 0，第二个字符的索引值是 1，
         * 依此类推。如果未选定任何文本，此属性为 caretIndex 的值。
         */
        selectionEndIndex: number;
        /**
         * 插入点（尖号）位置的索引。如果没有显示任何插入点，则在将焦点恢复到字段时，
         * 值将为插入点所在的位置（通常为插入点上次所在的位置，如果字段不曾具有焦点，则为 0）。
         */
        caretIndex: number;
        /**
         * 将第一个字符和最后一个字符的索引值（使用 beginIndex 和 endIndex 参数指定）指定的文本设置为所选内容。
         * 如果两个参数值相同，则此方法会设置插入点，就如同设置 caretIndex 属性一样。
         */
        setSelection(beginIndex: number, endIndex?: number): void;
        /**
         * 选中所有文本。
         */
        selectAll(): void;
        /**
         * 此文本组件所显示的文本。
         */
        text: string;
        _getText(): any;
        _setText(value: string): void;
        _getWidthInChars(): number;
        _setWidthInChars(value: number): void;
        _getHeightInLines(): number;
        _setHeightInLines(value: number): void;
        /**
         * @inheritDoc
         */
        getCurrentSkinState(): string;
        /**
         * @inheritDoc
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @inheritDoc
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * @inheritDoc
         */
        setFocus(): void;
        /**
         * 当皮肤不为ISkinPartHost时，创建TextDisplay显示对象
         */
        _createTextDisplay(): void;
        /**
         * @inheritDoc
         */
        _removeSkinParts(): void;
        /**
         * textDisplay附加
         */
        private textDisplayAdded();
        /**
         * textDisplay移除
         */
        private textDisplayRemoved();
        /**
         * textDisplay文字改变事件
         */
        private textDisplay_changeHandler(event);
        /**
         * textDisplay文字即将改变事件
         */
        private textDisplay_changingHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Spacer
     * @classdesc
     * 占位组件,一个布局辅助类。
     * 自身完全不可见，但可以在父级容器的布局中分配空间，通常用于垂直和水平布局中，推挤其他组件。
     * @extends egret.gui.UIComponent
     */
    class Spacer extends UIComponent {
        /**
         * 构造函数
         * @method egret.gui.Spacer#constructor
         */
        constructor();
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Label
     * @classdesc
     * 一行或多行不可编辑的文本控件
     * @extends egret.gui.TextBase
     */
    class Label extends TextBase {
        /**
         * @method egret.gui.Label#constructor
         */
        constructor();
        /**
         * 一个验证阶段完成
         */
        private updateCompleteHandler(event);
        private _maxDisplayedLines;
        /**
         * 最大显示行数,0或负值代表不限制。
         * @member egret.gui.Label#maxDisplayedLines
         */
        maxDisplayedLines: number;
        /**
         * 上一次测量的宽度
         */
        private lastUnscaledWidth;
        private strokeColorChanged;
        private _strokeColor;
        /**
         * 表示文本的描边颜色。
         * 包含三个 8 位 RGB 颜色成分的数字；例如，0xFF0000 为红色，0x00FF00 为绿色。
         * 默认值为 0x000000。
         * @member {number} egret.TextField#strokeColor
         */
        strokeColor: number;
        _setStrokeColor(value: number): void;
        /**
         * 表示描边宽度。
         * 0为没有描边。
         * 默认值为 0。
         * @member {number} egret.TextField#stroke
         */
        private _stroke;
        private strokeChanged;
        stroke: number;
        private _padding;
        /**
         * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
         * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
         * @member egret.gui.Label#padding
         */
        padding: number;
        private _paddingLeft;
        /**
         * 文字距离左边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.Label#paddingLeft
         */
        paddingLeft: number;
        private _paddingRight;
        /**
         * 文字距离右边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.Label#paddingRight
         */
        paddingRight: number;
        private _paddingTop;
        /**
         * 文字距离顶部边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.Label#paddingTop
         */
        paddingTop: number;
        private _paddingBottom;
        /**
         * 文字距离底部边缘的空白像素,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.Label#paddingBottom
         */
        paddingBottom: number;
        /**
         * @method egret.gui.TextBase#commitProperties
         */
        commitProperties(): void;
        /**
         * @method egret.gui.Label#measure
         */
        measure(): void;
        /**
         * 特殊情况，组件尺寸由父级决定，要等到父级UpdateDisplayList的阶段才能测量
         */
        private isSpecialCase();
        /**
         * 使用指定的宽度进行测量
         */
        private measureUsingWidth(w);
        /**
         * @method egret.gui.Label#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Rect
     * @classdesc
     * 矩形绘图元素。此组件可响应鼠标事件。
     * @extends egret.gui.UIComponent
     */
    class Rect extends UIComponent {
        /**
         * 构造函数
         * @method egret.gui.Rect#constructor
         */
        constructor();
        private _graphics;
        graphics: Graphics;
        _render(renderContext: RendererContext): void;
        private _fillColor;
        /**
         * 填充颜色
         * @member egret.gui.Rect#fillColor
         */
        fillColor: number;
        private _fillAlpha;
        /**
         * 填充透明度,默认值为0。
         * @member egret.gui.Rect#fillAlpha
         */
        fillAlpha: number;
        private _strokeColor;
        /**
         * 边框颜色,注意：当strokeAlpha为0时，不显示边框。
         * @member egret.gui.Rect#strokeColor
         */
        strokeColor: number;
        private _strokeAlpha;
        /**
         * 边框透明度，默认值为0。
         * @member egret.gui.Rect#strokeAlpha
         */
        strokeAlpha: number;
        private _strokeWeight;
        /**
         * 边框粗细(像素),注意：当strokeAlpha为0时，不显示边框。
         * @member egret.gui.Rect#strokeWeight
         */
        strokeWeight: number;
        /**
         * @see egret.DisplayObject.measureBounds
         * @returns {Rectangle}
         * @private
         */
        _measureBounds(): Rectangle;
        /**
         * @method egret.gui.Rect#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Button
     * @classdesc
     * 按钮控件
     * @extends egret.gui.ButtonBase
     */
    class Button extends ButtonBase {
        /**
         * @method egret.gui.Button#constructor
         */
        constructor();
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ToggleSwitch
     * @classdesc
     * 开关按钮
     * @extends egret.gui.ToggleButtonBase
     */
    class ToggleSwitch extends ToggleButtonBase {
        /**
         * 构造函数
         * @method egret.gui.ToggleSwitch#constructor
         */
        constructor();
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ToggleButton
     * @classdesc
     * 切换按钮
     * @extends egret.gui.ToggleButtonBase
     */
    class ToggleButton extends ToggleButtonBase {
        /**
         * 构造函数
         * @method egret.gui.ToggleButton#constructor
         */
        constructor();
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.CheckBox
     * @classdesc
     * 复选框
     * @extends egret.gui.ToggleButtonBase
     */
    class CheckBox extends ToggleButtonBase {
        /**
         * 构造函数
         * @method egret.gui.CheckBox#constructor
         */
        constructor();
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.RadioButtonGroup
     * @classdesc
     * 单选按钮组
     * @extends egret.EventDispatcher
     */
    class RadioButtonGroup extends EventDispatcher {
        /**
         * 构造函数
         * @method egret.gui.RadioButtonGroup#constructor
         */
        constructor();
        private static groupCount;
        /**
         * 组名
         * @member egret.gui.RadioButtonGroup#_name
         */
        _name: string;
        /**
         * 单选按钮列表
         */
        private radioButtons;
        private _enabled;
        /**
         * 组件是否可以接受用户交互。默认值为true。设置此属性将影响组内所有单选按钮。
         * @member egret.gui.RadioButtonGroup#enabled
         */
        enabled: boolean;
        /**
         * 组内单选按钮数量
         * @member egret.gui.RadioButtonGroup#numRadioButtons
         */
        numRadioButtons: number;
        private _selectedValue;
        /**
         * 当前被选中的单选按钮的value属性值。注意，此属性仅当目标RadioButton在显示列表时有效。
         * @member egret.gui.RadioButtonGroup#selectedValue
         */
        selectedValue: any;
        private _selection;
        /**
         * 当前被选中的单选按钮引用,注意，此属性仅当目标RadioButton在显示列表时有效。
         * @member egret.gui.RadioButtonGroup#selection
         */
        selection: RadioButton;
        /**
         * 获取指定索引的单选按钮
         * @method egret.gui.RadioButtonGroup#getRadioButtonAt
         * @param index {number} 单选按钮的索引
         * @returns {RadioButton}
         */
        getRadioButtonAt(index: number): RadioButton;
        /**
         * 添加单选按钮到组内
         * @method egret.gui.RadioButtonGroup#_addInstance
         * @param instance {RadioButton}
         */
        _addInstance(instance: RadioButton): void;
        /**
         * 从组里移除单选按钮
         * @method egret.gui.RadioButtonGroup#_removeInstance
         * @param instance {RadioButton}
         */
        _removeInstance(instance: RadioButton): void;
        /**
         * 执行从组里移除单选按钮
         */
        private doRemoveInstance(instance, addListener?);
        /**
         * 设置选中的单选按钮
         * @method egret.gui.RadioButtonGroup#_setSelection
         * @param value {RadioButton}
         * @param fireChange {boolean}
         */
        _setSelection(value: RadioButton, fireChange?: boolean): void;
        /**
         * 改变选中项
         */
        private changeSelection(index, fireChange?);
        /**
         * 单选按钮添加到显示列表
         */
        private radioButton_addedHandler(event);
        /**
         * 单选按钮从显示列表移除
         */
        private radioButton_removedHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.RadioButton
     * @classdesc
     * 单选按钮
     * @extends egret.gui.ToggleButtonBase
     */
    class RadioButton extends ToggleButtonBase {
        /**
         * 构造函数
         * @method egret.gui.RadioButton#constructor
         */
        constructor();
        /**
         * 在RadioButtonGroup中的索引
         * @member egret.gui.RadioButton#_indexNumber
         */
        _indexNumber: number;
        /**
         * 所属的RadioButtonGroup
         * @member egret.gui.RadioButton#_radioButtonGroup
         */
        _radioButtonGroup: RadioButtonGroup;
        /**
         * @member egret.gui.RadioButton#enabled
         */
        /**
         * @inheritDoc
         */
        enabled: boolean;
        /**
         * 存储根据groupName自动创建的RadioButtonGroup列表
         */
        private static automaticRadioButtonGroups;
        private _group;
        /**
         * 此单选按钮所属的组。同一个组的多个单选按钮之间互斥。
         * 若不设置此属性，则根据groupName属性自动创建一个唯一的RadioButtonGroup。
         * @member egret.gui.RadioButton#group
         */
        group: RadioButtonGroup;
        private groupChanged;
        private _groupName;
        /**
         * 所属组的名称,具有相同组名的多个单选按钮之间互斥。默认值:"radioGroup"。
         * 可以把此属性当做设置组的一个简便方式，作用与设置group属性相同,。
         * @member egret.gui.RadioButton#groupName
         */
        groupName: string;
        /**
         * @inheritDoc
         */
        _setSelected(value: boolean): void;
        private _value;
        /**
         * 与此单选按钮关联的自定义数据。
         * 当被点击时，所属的RadioButtonGroup对象会把此属性赋值给ItemClickEvent.item属性并抛出事件。
         * @member egret.gui.RadioButton#value
         */
        value: any;
        /**
         * @method egret.gui.RadioButton#commitProperties
         */
        commitProperties(): void;
        /**
         * @method egret.gui.RadioButton#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @method egret.gui.RadioButton#buttonReleased
         */
        buttonReleased(): void;
        /**
         * 添此单选按钮加到组
         */
        private addToGroup();
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Group
     * @classdesc
     * 自动布局容器
     * @extends egret.gui.GroupBase
     * @implements egret.gui.IVisualElementContainer
     */
    class Group extends GroupBase implements IVisualElementContainer {
        /**
         * @method egret.gui.Group#constructor
         */
        constructor();
        /**
         * createChildren()方法已经执行过的标志
         */
        private createChildrenCalled;
        /**
         * @method egret.gui.Group#createChildren
         */
        createChildren(): void;
        /**
         * elementsContent改变标志
         */
        private elementsContentChanged;
        private _elementsContent;
        /**
         * 返回子元素列表
         */
        _getElementsContent(): any[];
        /**
         * 设置容器子对象数组 。数组包含要添加到容器的子项列表，之前的已存在于容器中的子项列表被全部移除后添加列表里的每一项到容器。
         * 设置该属性时会对您输入的数组进行一次浅复制操作，所以您之后对该数组的操作不会影响到添加到容器的子项列表数量。
         */
        elementsContent: any[];
        /**
         * 设置容器子对象列表
         */
        private setElementsContent(value);
        /**
         * @member egret.gui.Group#numElements
         */
        numElements: number;
        /**
         * @method egret.gui.Group#getElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        private checkForRangeError(index, addingElement?);
        /**
         * @method egret.gui.Group#addElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        addElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.Group#addElementAt
         * @param element {IVisualElement}
         * @param index {number}
         * @returns {IVisualElement}
         */
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
         * @method egret.gui.Group#removeElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        removeElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.Group#removeElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        removeElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.Group#removeAllElements
         */
        removeAllElements(): void;
        /**
         * @method egret.gui.Group#getElementIndex
         * @param element {IVisualElement}
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * @method egret.gui.Group#setElementIndex
         * @param element {IVisualElement}
         * @param index {number}
         */
        setElementIndex(element: IVisualElement, index: number): void;
        /**
         * @method egret.gui.Group#swapElements
         * @param element1 {IVisualElement}
         * @param element2 {IVisualElement}
         */
        swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
         * @method egret.gui.Group#swapElementsAt
         * @param index1 {number}
         * @param index2 {number}
         */
        swapElementsAt(index1: number, index2: number): void;
        /**
         * 添加一个显示元素到容器
         * @method egret.gui.Group#_elementAdded
         * @param element {IVisualElement}
         * @param index {number}
         * @param notifyListeners {boolean}
         */
        _elementAdded(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
         * 从容器移除一个显示元素
         * @method egret.gui.Group#_elementRemoved
         * @param element {IVisualElement}
         * @param index {number}
         * @param notifyListeners {boolean}
         */
        _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        private static errorStr;
        /**
         * @method egret.gui.Group#addChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        addChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.Group#addChildAt
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         * @returns {DisplayObject}
         */
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
         * @method egret.gui.Group#removeChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        removeChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.Group#removeChildAt
         * @deprecated
         * @param index {number}
         * @returns {DisplayObject}
         */
        removeChildAt(index: number): DisplayObject;
        /**
         * @method egret.gui.Group#setChildIndex
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         */
        setChildIndex(child: DisplayObject, index: number): void;
        /**
         * @method egret.gui.Group#swapChildren
         * @deprecated
         * @param child1 {DisplayObject}
         * @param child2 {DisplayObject}
         */
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
         * @method egret.gui.Group#swapChildrenAt
         * @deprecated
         * @param index1 {number}
         * @param index2 {number}
         */
        swapChildrenAt(index1: number, index2: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ViewStack
     * @classdesc
     * 层级堆叠容器,一次只显示一个子对象。
     * @extends egret.gui.Group
     * @implements egret.gui.IViewStack
     * @implements egret.gui.ICollection
     */
    class ViewStack extends Group implements IViewStack, ICollection {
        /**
         * 构造函数
         * @method egret.gui.ViewStack#constructor
         */
        constructor();
        /**
         * 此容器的布局对象为只读,默认限制为BasicLayout。
         * @member egret.gui.ViewStack#layout
         */
        layout: LayoutBase;
        private _createAllChildren;
        /**
         * 是否立即初始化化所有子项。false表示当子项第一次被显示时再初始化它。默认值false。
         * @member egret.gui.ViewStack#createAllChildren
         */
        createAllChildren: boolean;
        private _selectedChild;
        /**
         * @member egret.gui.ViewStack#selectedChild
         */
        selectedChild: IVisualElement;
        /**
         * 未设置缓存选中项的值
         */
        private static NO_PROPOSED_SELECTION;
        /**
         * 在属性提交前缓存选中项索引
         */
        private proposedSelectedIndex;
        _selectedIndex: number;
        /**
         * @member egret.gui.ViewStack#selectedIndex
         */
        selectedIndex: number;
        private notifyTabBar;
        /**
         * 设置选中项索引
         * @method egret.gui.ViewStack#_setSelectedIndex
         * @param value {number}
         * @param notifyListeners {boolean}
         */
        _setSelectedIndex(value: number, notifyListeners?: boolean): void;
        /**
         * 添加一个显示元素到容器
         * @method egret.gui.ViewStack#_elementAdded
         * @param element {IVisualElement}
         * @param index {number}
         * @param notifyListeners {boolean}
         */
        _elementAdded(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
         * 从容器移除一个显示元素
         * @method egret.gui.ViewStack#_elementRemoved
         * @param element {IVisualElement}
         * @param index {number}
         * @param notifyListeners {boolean}
         */
        _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
         * 子项显示列表顺序发生改变。
         */
        private childOrderingChanged;
        /**
         * @method egret.gui.ViewStack#commitProperties
         */
        commitProperties(): void;
        private commitSelection(newIndex);
        /**
         * @member egret.gui.ViewStack#length
         */
        length: number;
        /**
         * @method egret.gui.ViewStack#getItemAt
         * @param index {number}
         * @returns {any}
         */
        getItemAt(index: number): any;
        /**
         * @method egret.gui.ViewStack#getItemIndex
         * @param item {any}
         * @returns {number}
         */
        getItemIndex(item: any): number;
        /**
         * 抛出事件
         */
        private dispatchCoEvent(kind?, location?, oldLocation?, items?, oldItems?);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Skin
     * @classdesc
     * 含有视图状态功能的皮肤基类。注意：为了减少嵌套层级，此皮肤没有继承显示对象，若需要显示对象版本皮肤，请使用Skin。
     * @see org.flexlite.domUI.components.supportClasses.Skin
     * @extends egret.EventDispatcher
     * @implements egret.gui.IStateClient
     * @implements egret.gui.ISkin
     * @implements egret.gui.IContainer
     */
    class Skin extends EventDispatcher implements IStateClient, ISkin, IContainer {
        /**
         * 构造函数
         * @method egret.gui.Skin#constructor
         */
        constructor();
        /**
         * 组件的最大测量宽度,仅影响measuredWidth属性的取值范围。
         * @member egret.gui.Skin#maxWidth
         */
        maxWidth: number;
        /**
         * 组件的最小测量宽度,此属性设置为大于maxWidth的值时无效。仅影响measuredWidth属性的取值范围。
         * @member egret.gui.Skin#minWidth
         */
        minWidth: number;
        /**
         * 组件的最大测量高度,仅影响measuredHeight属性的取值范围。
         * @member egret.gui.Skin#maxHeight
         */
        maxHeight: number;
        /**
         * 组件的最小测量高度,此属性设置为大于maxHeight的值时无效。仅影响measuredHeight属性的取值范围。
         * @member egret.gui.Skin#minHeight
         */
        minHeight: number;
        _hasWidthSet: Boolean;
        _width: number;
        /**
         * 组件宽度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         * @member egret.gui.Skin#width
         */
        width: number;
        _hasHeightSet: Boolean;
        _height: number;
        /**
         * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
         * @member egret.gui.Skin#height
         */
        height: number;
        /**
         * 组件的默认宽度（以像素为单位）。此值由 measure() 方法设置。
         * @member egret.gui.Skin#measuredWidth
         */
        measuredWidth: number;
        /**
         * 组件的默认高度（以像素为单位）。此值由 measure() 方法设置。
         * @member egret.gui.Skin#measuredHeight
         */
        measuredHeight: number;
        /**
         * @member egret.gui.Skin#preferredWidth
         */
        preferredWidth: number;
        /**
         * @member egret.gui.Skin#preferredHeight
         */
        preferredHeight: number;
        private _initialized;
        /**
         * 创建子项,子类覆盖此方法以完成组件子项的初始化操作，
         * 请务必调用super.createChildren()以完成父类组件的初始化
         * @method egret.gui.Skin#createChildren
         */
        createChildren(): void;
        private _hostComponent;
        /**
         * @member egret.gui.Skin#hostComponent
         */
        /**
         * @inheritDoc
         */
        hostComponent: SkinnableComponent;
        _setHostComponent(value: SkinnableComponent): void;
        private _elementsContent;
        /**
         * 返回子元素列表
         */
        _getElementsContent(): any[];
        /**
         * 设置容器子对象数组 。数组包含要添加到容器的子项列表，之前的已存在于容器中的子项列表被全部移除后添加列表里的每一项到容器。
         * 设置该属性时会对您输入的数组进行一次浅复制操作，所以您之后对该数组的操作不会影响到添加到容器的子项列表数量。
         */
        elementsContent: any[];
        /**
         * @member egret.gui.Skin#numElements
         */
        numElements: number;
        /**
         * @method egret.gui.Skin#getElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        private checkForRangeError(index, addingElement?);
        /**
         * @method egret.gui.Skin#addElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        addElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.Skin#addElementAt
         * @param element {IVisualElement}
         * @param index {number}
         * @returns {IVisualElement}
         */
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
         * @method egret.gui.Skin#removeElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        removeElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.Skin#removeElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        removeElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.Skin#getElementIndex
         * @param element {IVisualElement}
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * @method egret.gui.Skin#setElementIndex
         * @param element {IVisualElement}
         * @param index {number}
         */
        setElementIndex(element: IVisualElement, index: number): void;
        /**
         * 添加一个显示元素到容器
         * @method egret.gui.Skin#_elementAdded
         * @param element {IVisualElement}
         * @param index {number}
         * @param notifyListeners {boolean}
         */
        _elementAdded(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        /**
         * 从容器移除一个显示元素
         * @method egret.gui.Skin#_elementRemoved
         * @param element {IVisualElement}
         * @param index {number}
         * @param notifyListeners {boolean}
         */
        _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        private skinLayout;
        /**
         * 测量组件尺寸
         * @method egret.gui.Skin#measure
         */
        measure(): void;
        /**
         * 更新显示列表
         * @method egret.gui.Skin#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        private _states;
        /**
         * 为此组件定义的视图状态。
         * @member egret.StateClientHelper#states
         */
        states: any[];
        _setStates(value: any[]): void;
        /**
         * 当前视图状态发生改变的标志
         */
        private currentStateChanged;
        private _currentState;
        /**
         * 存储还未验证的视图状态
         */
        private requestedCurrentState;
        /**
         * 组件的当前视图状态。将其设置为 "" 或 null 可将组件重置回其基本状态。
         * @member egret.StateClientHelper#currentState
         */
        currentState: string;
        /**
         * 返回是否含有指定名称的视图状态
         * @method egret.gui.Skin#hasState
         * @param stateName {string}
         * @returns {boolean}
         */
        hasState(stateName: string): boolean;
        /**
         * 返回默认状态
         */
        private getDefaultState();
        /**
         * 应用当前的视图状态。子类覆盖此方法在视图状态发生改变时执行相应更新操作。
         * @method egret.gui.Skin#commitCurrentState
         */
        commitCurrentState(): void;
        /**
         * 通过名称返回视图状态
         */
        private getState(stateName);
        /**
         * 移除指定的视图状态以及所依赖的所有父级状态，除了与新状态的共同状态外
         */
        private removeState(stateName);
        /**
         * 应用新状态
         */
        private applyState(stateName);
        private initialized;
        /**
         * 初始化所有视图状态
         * @method egret.StateClientHelper#initializeStates
         */
        initializeStates(): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.DataGroup
     * @classdesc
     * 数据项目的容器基类
     * 将数据项目转换为可视元素以进行显示。
     * @extends egret.gui.GroupBase
     */
    class DataGroup extends GroupBase {
        /**
         * 构造函数
         * @method egret.gui.DataGroup#constructor
         */
        constructor();
        /**
         * @method egret.gui.DataGroup.defaultRendererFactory
         * @param ClassFactory {any}
         */
        static defaultRendererFactory: ClassFactory;
        /**
         * 项呈示器的主机组件
         */
        _rendererOwner: IItemRendererOwner;
        private useVirtualLayoutChanged;
        /**
         * @member egret.gui.DataGroup#layout
         */
        /**
         * @inheritDoc
         */
        layout: LayoutBase;
        /**
         * 是否使用虚拟布局标记改变
         */
        private layout_useVirtualLayoutChangedHandler(event);
        /**
         * 存储当前可见的项呈示器索引列表
         */
        private virtualRendererIndices;
        /**
         * @method egret.gui.DataGroup#setVirtualElementIndicesInView
         * @param startIndex {number}
         * @param endIndex {number}
         */
        setVirtualElementIndicesInView(startIndex: number, endIndex: number): void;
        /**
         * @method egret.gui.DataGroup#getVirtualElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        getVirtualElementAt(index: number): IVisualElement;
        private rendererToClassMap;
        private freeRenderers;
        /**
         * 释放指定索引处的项呈示器
         */
        private freeRendererByIndex(index);
        /**
         * 释放指定的项呈示器
         */
        private doFreeRenderer(renderer);
        /**
         * 是否创建了新的项呈示器标志
         */
        private createNewRendererFlag;
        /**
         * @method egret.gui.DataGroup#invalidateSize
         */
        invalidateSize(): void;
        /**
         * 为指定索引创建虚拟的项呈示器
         */
        private createVirtualRenderer(index);
        /**
         * 根据rendererClass创建一个Renderer,并添加到显示列表
         */
        private createOneRenderer(rendererFactory);
        /**
         * 设置项呈示器的默认皮肤
         */
        private setItemRenderSkinName(renderer);
        private cleanTimer;
        /**
         * 虚拟布局结束清理不可见的项呈示器
         */
        private finishVirtualLayout();
        /**
         * 延迟清理多余的在显示列表中的ItemRenderer。
         */
        private cleanAllFreeRenderer(event?);
        /**
         * @method egret.gui.DataGroup#getElementIndicesInView
         * @returns {number}
         */
        getElementIndicesInView(): number[];
        /**
         * 更改是否使用虚拟布局
         */
        private changeUseVirtualLayout();
        private dataProviderChanged;
        private _dataProvider;
        /**
         * 列表数据源，请使用实现了ICollection接口的数据类型，例如ArrayCollection
         * @member egret.gui.DataGroup#dataProvider
         */
        dataProvider: ICollection;
        /**
         * 移除数据源监听
         */
        private removeDataProviderListener();
        /**
         * 数据源改变事件处理
         */
        private onCollectionChange(event);
        /**
         * 数据源添加项目事件处理
         */
        private itemAddedHandler(items, index);
        /**
         * 数据源移动项目事件处理
         */
        private itemMovedHandler(item, location, oldLocation);
        /**
         * 数据源移除项目事件处理
         */
        private itemRemovedHandler(items, location);
        /**
         * 添加一项
         */
        private itemAdded(item, index);
        /**
         * 移除一项
         */
        private itemRemoved(item, index);
        /**
         * 对象池字典
         */
        private recyclerDic;
        /**
         * 回收一个ItemRenderer实例
         */
        private recycle(renderer);
        /**
         * 更新当前所有项的索引
         */
        private resetRenderersIndices();
        /**
         * 数据源更新或替换项目事件处理
         */
        private itemUpdatedHandler(item, location);
        /**
         * 调整指定项呈示器的索引值
         */
        private resetRendererItemIndex(index);
        /**
         * 项呈示器改变
         */
        private itemRendererChanged;
        /**
         * 这里不直接使用Class类型是因为JS里不能用对象作为键，所以需要hashCode。而只有实例对象才有hashCode，Class无法作为键。
         */
        private _itemRenderer;
        /**
         * 用于数据项目的项呈示器。该类必须实现 IItemRenderer 接口。<br/>
         * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。
         * @member egret.gui.DataGroup#itemRenderer
         */
        itemRenderer: IFactory;
        private itemRendererSkinNameChange;
        private _itemRendererSkinName;
        /**
         * 条目渲染器的可选皮肤标识符。在实例化itemRenderer时，若其内部没有设置过skinName,则将此属性的值赋值给它的skinName。
         * 注意:若itemRenderer不是ISkinnableClient，则此属性无效。
         * @member egret.gui.DataGroup#itemRendererSkinName
         */
        itemRendererSkinName: any;
        private _itemRendererFunction;
        /**
         * 为某个特定项目返回一个项呈示器Class的函数。<br/>
         * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。<br/>
         * 应该定义一个与此示例函数类似的呈示器函数： <br/>
         * function myItemRendererFunction(item:Object):IFactory
         * @member egret.gui.DataGroup#itemRendererFunction
         */
        itemRendererFunction: Function;
        /**
         * 为特定的数据项返回项呈示器的工厂实例
         */
        private itemToRendererClass(item);
        /**
         * @method egret.gui.DataGroup#createChildren
         * 设置默认的ItemRenderer
         * @private
         *
         */
        createChildren(): void;
        /**
         * @method egret.gui.DataGroup#commitProperties
         */
        commitProperties(): void;
        /**
         * @method egret.gui.DataGroup#measure
         */
        measure(): void;
        /**
         * 正在进行虚拟布局阶段
         */
        private virtualLayoutUnderway;
        /**
         * @method egret.gui.DataGroup#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 用于测试默认大小的数据
         */
        private typicalItem;
        private typicalItemChanged;
        /**
         * 确保测量过默认条目大小。
         */
        private ensureTypicalLayoutElement();
        /**
         * 测量项呈示器默认尺寸
         */
        private measureRendererSize();
        /**
         * 项呈示器的默认尺寸
         */
        private typicalLayoutRect;
        /**
         * 设置项目默认大小
         */
        private setTypicalLayoutRect(rect);
        /**
         * 索引到项呈示器的转换数组
         */
        private indexToRenderer;
        /**
         * 清理freeRenderer标志
         */
        private cleanFreeRenderer;
        /**
         * 移除所有项呈示器
         */
        private removeAllRenderers();
        /**
         * 为数据项创建项呈示器
         */
        private createRenderers();
        /**
         * 正在更新数据项的标志
         */
        private renderersBeingUpdated;
        /**
         * 更新项呈示器
         * @method egret.gui.DataGroup#updateRenderer
         * @param renderer {IItemRenderer}
         * @param itemIndex {number}
         * @param data {any}
         * @returns {IItemRenderer}
         */
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
         * 返回可在项呈示器中显示的 String。
         * 若DataGroup被作为SkinnableDataContainer的皮肤组件,此方法将不会执行，被SkinnableDataContainer.itemToLabel()所替代。
         * @method egret.gui.DataGroup#itemToLabel
         * @param item {any}
         * @returns {string}
         */
        itemToLabel(item: any): string;
        /**
         * @method egret.gui.DataGroup#getElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.DataGroup#getElementIndex
         * @param element {IVisualElement}
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * @member egret.gui.DataGroup#numElements
         */
        numElements: number;
        private static errorStr;
        /**
         * @method egret.gui.DataGroup#addChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        addChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.DataGroup#addChildAt
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         * @returns {DisplayObject}
         */
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
         * @method egret.gui.DataGroup#removeChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        removeChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.DataGroup#removeChildAt
         * @deprecated
         * @param index {number}
         * @returns {DisplayObject}
         */
        removeChildAt(index: number): DisplayObject;
        /**
         * @method egret.gui.DataGroup#setChildIndex
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         */
        setChildIndex(child: DisplayObject, index: number): void;
        /**
         * @method egret.gui.DataGroup#swapChildren
         * @deprecated
         * @param child1 {DisplayObject}
         * @param child2 {DisplayObject}
         */
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
         * @method egret.gui.DataGroup#swapChildrenAt
         * @deprecated
         * @param index1 {number}
         * @param index2 {number}
         */
        swapChildrenAt(index1: number, index2: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.SkinnableContainer
     * @classdesc
     * 可设置外观的容器的基类
     * @extends egret.gui.SkinnableComponent
     * @implements egret.gui.IVisualElementContainer
     */
    class SkinnableContainer extends SkinnableComponent implements IVisualElementContainer {
        /**
         * @method egret.gui.SkinnableContainer#constructor
         */
        constructor();
        /**
         * [SkinPart]实体容器
         * @member egret.gui.SkinnableContainer#contentGroup
         */
        contentGroup: Group;
        /**
         * 实体容器实例化之前缓存子对象的容器
         */
        _placeHolderGroup: Group;
        /**
         * 获取当前的实体容器
         */
        _getCurrentContentGroup(): Group;
        /**
         * 设置容器子对象数组 。数组包含要添加到容器的子项列表，之前的已存在于容器中的子项列表被全部移除后添加列表里的每一项到容器。
         * 设置该属性时会对您输入的数组进行一次浅复制操作，所以您之后对该数组的操作不会影响到添加到容器的子项列表数量。
         */
        elementsContent: any[];
        /**
         * @member egret.gui.SkinnableContainer#numElements
         */
        numElements: number;
        /**
         * @method egret.gui.SkinnableContainer#getElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.SkinnableContainer#addElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        addElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.SkinnableContainer#addElementAt
         * @param element {IVisualElement}
         * @param index {number}
         * @returns {IVisualElement}
         */
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
         * @method egret.gui.SkinnableContainer#removeElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        removeElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.SkinnableContainer#removeElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        removeElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.SkinnableContainer#removeAllElements
         */
        removeAllElements(): void;
        /**
         * @method egret.gui.SkinnableContainer#getElementIndex
         * @param element {IVisualElement}
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * @method egret.gui.SkinnableContainer#setElementIndex
         * @param element {IVisualElement}
         * @param index {number}
         */
        setElementIndex(element: IVisualElement, index: number): void;
        /**
         * @method egret.gui.SkinnableContainer#swapElements
         * @param element1 {IVisualElement}
         * @param element2 {IVisualElement}
         */
        swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
         * @method egret.gui.SkinnableContainer#swapElementsAt
         * @param index1 {number}
         * @param index2 {number}
         */
        swapElementsAt(index1: number, index2: number): void;
        /**
         * contentGroup发生改变时传递的参数
         */
        private contentGroupProperties;
        /**
         * 此容器的布局对象
         * @member egret.gui.SkinnableContainer#layout
         */
        layout: LayoutBase;
        /**
         * @method egret.gui.SkinnableContainer#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.SkinnableContainer#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * 容器添加元素事件
         * @method egret.gui.SkinnableContainer#_contentGroup_elementAddedHandler
         * @param event {ElementExistenceEvent}
         */
        _contentGroup_elementAddedHandler(event: ElementExistenceEvent): void;
        /**
         * 容器移除元素事件
         * @method egret.gui.SkinnableContainer#_contentGroup_elementRemovedHandler
         * @param event {ElementExistenceEvent}
         */
        _contentGroup_elementRemovedHandler(event: ElementExistenceEvent): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.SkinnableDataContainer
     * @classdesc
     * 可设置外观的数据项目容器基类
     * @extends egret.gui.SkinnableComponent
     * @implements egret.gui.IItemRendererOwner
     */
    class SkinnableDataContainer extends SkinnableComponent implements IItemRendererOwner {
        /**
         * 构造函数
         * @method egret.gui.SkinnableDataContainer#constructor
         */
        constructor();
        /**
         * @method egret.gui.SkinnableDataContainer#updateRenderer
         * @param renderer {IItemRenderer}
         * @param itemIndex {number}
         * @param data {any}
         * @returns {IItemRenderer}
         */
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
         * 返回可在项呈示器中显示的 String
         * @method egret.gui.SkinnableDataContainer#itemToLabel
         * @param item {any}
         * @returns {string}
         */
        itemToLabel(item: any): string;
        /**
         * [SkinPart]数据项目容器实体
         * @member egret.gui.SkinnableDataContainer#dataGroup
         */
        dataGroup: DataGroup;
        /**
         * dataGroup发生改变时传递的参数
         */
        _dataGroupProperties: any;
        /**
         * 列表数据源，请使用实现了ICollection接口的数据类型，例如ArrayCollection
         * @member egret.gui.SkinnableDataContainer#dataProvider
         */
        dataProvider: ICollection;
        _getDataProvider(): ICollection;
        _setDataProvider(value: ICollection): void;
        /**
         * 用于数据项目的项呈示器。该类必须实现 IItemRenderer 接口。 <br/>
         * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。
         * @member egret.gui.SkinnableDataContainer#itemRenderer
         */
        itemRenderer: IFactory;
        /**
         * 条目渲染器的可选皮肤标识符。在实例化itemRenderer时，若其内部没有设置过skinName,则将此属性的值赋值给它的skinName。
         * 注意:若itemRenderer不是ISkinnableClient，则此属性无效。
         * @member egret.gui.SkinnableDataContainer#itemRendererSkinName
         */
        itemRendererSkinName: any;
        /**
         * 为某个特定项目返回一个项呈示器Class的函数。 <br/>
         * rendererClass获取顺序：itemRendererFunction > itemRenderer > 默认ItemRenerer。 <br/>
         * 应该定义一个与此示例函数类似的呈示器函数： <br/>
         * function myItemRendererFunction(item:Object):IFactory
         * @member egret.gui.SkinnableDataContainer#itemRendererFunction
         */
        itemRendererFunction: Function;
        /**
         * 布局对象
         * @member egret.gui.SkinnableDataContainer#layout
         */
        layout: LayoutBase;
        _setLayout(value: LayoutBase): void;
        /**
         * @method egret.gui.SkinnableDataContainer#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.SkinnableDataContainer#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * @method egret.gui.SkinnableDataContainer#addEventListener
         * @param type {string}
         * @param listener {Function}
         * @param thisObject {any}
         * @param useCapture {boolean}
         * @param priority {number}
         */
        addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
         * @method egret.gui.SkinnableDataContainer#removeEventListener
         * @param type {string}
         * @param listener {Function}
         * @param thisObject {any}
         * @param useCapture {boolean}
         */
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ListBase
     * @classdesc
     * 支持选择内容的所有组件的基类。
     * @extends egret.gui.SkinnableDataContainer
     */
    class ListBase extends SkinnableDataContainer {
        /**
         * 未选中任何项时的索引值
         * @constant egret.gui.ListBase.NO_SELECTION
         */
        static NO_SELECTION: number;
        /**
         * 未设置缓存选中项的值
         * @constant egret.gui.ListBase.NO_PROPOSED_SELECTION
         */
        static NO_PROPOSED_SELECTION: number;
        /**
         * 自定义的选中项
         * @constant egret.gui.ListBase.CUSTOM_SELECTED_ITEM
         */
        static CUSTOM_SELECTED_ITEM: number;
        /**
         * @method egret.gui.ListBase#constructor
         */
        constructor();
        /**
         * 正在进行所有数据源的刷新操作
         * @member egret.gui.ListBase#_doingWholesaleChanges
         */
        _doingWholesaleChanges: boolean;
        private dataProviderChanged;
        _setDataProvider(value: any): void;
        /**
         * 布局对象
         * @member egret.gui.ListBase#layout
         */
        /**
         * @inheritDoc
         */
        layout: LayoutBase;
        private _labelField;
        private labelFieldOrFunctionChanged;
        /**
         * 数据项如果是一个对象，此属性为数据项中用来显示标签文字的字段名称。
         * 若设置了labelFunction，则设置此属性无效。
         * @member egret.gui.ListBase#labelField
         */
        labelField: string;
        _setLabelField(value: string): void;
        private _labelFunction;
        /**
         * 用户提供的函数，在每个项目上运行以确定其标签。
         * 示例：function labelFunc(item:Object):String 。
         * @member egret.gui.ListBase#labelFunction
         */
        labelFunction: Function;
        _setLabelFunction(value: Function): void;
        _requireSelection: boolean;
        private requireSelectionChanged;
        /**
         * 如果为 true，则必须始终在控件中选中数据项目。<br/>
         * 如果该值为 true，则始终将 selectedIndex 属性设置为 0 和 (dataProvider.length - 1) 之间的一个值。
         * @member egret.gui.ListBase#requireSelection
         */
        requireSelection: boolean;
        _setRequireSelection(value: boolean): void;
        /**
         * 在属性提交前缓存真实的选中项的值
         */
        _proposedSelectedIndex: number;
        _selectedIndex: number;
        /**
         * 选中项目的基于 0 的索引。<br/>
         * 或者如果未选中项目，则为-1。设置 selectedIndex 属性会取消选择当前选定的项目并选择指定索引位置的数据项目。 <br/>
         * 当用户通过与控件交互来更改 selectedIndex 属性时，此控件将分派 change 和 changing 事件。<br/>
         * 当以编程方式更改 selectedIndex 属性的值时，此控件不分派 change 和 changing 事件。
         * @member egret.gui.ListBase#selectedIndex
         */
        selectedIndex: number;
        _getSelectedIndex(): number;
        /**
         * 是否允许自定义的选中项
         * @member egret.gui.ListBase#_allowCustomSelectedItem
         */
        _allowCustomSelectedItem: boolean;
        /**
         * 索引改变后是否需要抛出事件
         * @member egret.gui.ListBase#_dispatchChangeAfterSelection
         */
        _dispatchChangeAfterSelection: boolean;
        /**
         * 设置选中项
         */
        _setSelectedIndex(value: number, dispatchChangeEvent?: boolean): void;
        /**
         *  在属性提交前缓存真实选中项的数据源
         */
        _pendingSelectedItem: any;
        private _selectedItem;
        /**
         * 当前已选中的项目。设置此属性会取消选中当前选定的项目并选择新指定的项目。<br/>
         * 当用户通过与控件交互来更改 selectedItem 属性时，此控件将分派 change 和 changing 事件。<br/>
         * 当以编程方式更改 selectedItem 属性的值时，此控件不分派 change 和 changing 事件。
         * @member egret.gui.ListBase#selectedItem
         */
        selectedItem: any;
        /**
         * 设置选中项数据源
         * @method egret.gui.ListBase#_setSelectedItem
         * @param value {any}
         * @param dispatchChangeEvent {boolean}
         */
        _setSelectedItem(value: any, dispatchChangeEvent?: boolean): void;
        private _useVirtualLayout;
        /**
         * 是否使用虚拟布局,默认flase
         * @member egret.gui.ListBase#useVirtualLayout
         */
        useVirtualLayout: boolean;
        _getUseVirtualLayout(): boolean;
        _setUseVirtualLayout(value: boolean): void;
        /**
         * @method egret.gui.ListBase#commitProperties
         */
        commitProperties(): void;
        /**
         *  更新项呈示器文字标签
         */
        private updateRendererLabelProperty(itemIndex);
        /**
         * @method egret.gui.ListBase#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.ListBase#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * @method egret.gui.ListBase#updateRenderer
         * @param renderer {IItemRenderer}
         * @param itemIndex {number}
         * @param data {any}
         * @returns {IItemRenderer}
         */
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
         * @method egret.gui.ListBase#itemToLabel
         * @param item {any}
         * @returns {string}
         */
        itemToLabel(item: any): string;
        /**
         * 选中或取消选中项目时调用。子类必须覆盖此方法才可设置选中项。
         * @method egret.gui.ListBase#itemSelected
         * @param index {number} 已选中的项目索引。
         * @param selected {boolean} true为选中，false取消选中
         */
        itemSelected(index: number, selected: boolean): void;
        /**
         * 返回指定索引是否等于当前选中索引
         */
        _isItemIndexSelected(index: number): boolean;
        /**
         * 提交选中项属性，返回是否成功提交，false表示被取消
         * @method egret.gui.ListBase#commitSelection
         * @param dispatchChangedEvents {boolean}
         * @returns {boolean}
         */
        commitSelection(dispatchChangedEvents?: boolean): boolean;
        private selectedIndexAdjusted;
        /**
         * 仅调整选中索引值而不更新选中项,即在提交属性阶段itemSelected方法不会被调用，也不会触发changing和change事件。
         * @method egret.gui.ListBase#adjustSelection
         * @param newIndex {number} 新索引。
         * @param add {boolean} 如果已将项目添加到组件，则为 true；如果已删除项目，则为 false。
         */
        adjustSelection(newIndex: number, add?: boolean): void;
        /**
         * 数据项添加
         * @method egret.gui.ListBase#itemAdded
         * @param index {number}
         */
        itemAdded(index: number): void;
        /**
         * 数据项移除
         * @method egret.gui.ListBase#itemRemoved
         * @param index {number}
         */
        itemRemoved(index: number): void;
        /**
         * 项呈示器被添加
         * @method egret.gui.ListBase#dataGroup_rendererAddHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
         * 项呈示器被移除
         * @method egret.gui.ListBase#dataGroup_rendererRemoveHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        private static TYPE_MAP;
        /**
         * 项呈示器鼠标事件
         */
        private item_mouseEventHandler(event);
        /**
         * 抛出列表事件
         * @method egret.gui.ListBase#_dispatchListEvent
         * @param touchEvent {TouchEvent} 相关联的鼠标事件
         * @param type {string} 事件名称
         * @param itemRenderer {IItemRenderer} 关联的条目渲染器实例
         */
        _dispatchListEvent(touchEvent: TouchEvent, type: string, itemRenderer: IItemRenderer): void;
        /**
         * 数据源发生改变
         * @method egret.gui.ListBase#dataProvider_collectionChangeHandler
         * @param event {CollectionEvent}
         */
        dataProvider_collectionChangeHandler(event: CollectionEvent): void;
        /**
         * 数据源刷新
         */
        dataProviderRefreshed(): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Panel
     * @classdesc
     * 带有标题，内容区域的面板组件
     * @extends egret.gui.SkinnableContainer
     */
    class Panel extends SkinnableContainer {
        /**
         * 构造函数
         * @method egret.gui.Panel#constructor
         */
        constructor();
        /**
         * [SkinPart]标题显示对象
         * @member egret.gui.Panel#titleDisplay
         */
        titleDisplay: IDisplayText;
        private _title;
        /**
         * 标题内容改变
         */
        private titleChanged;
        /**
         * 标题文本内容
         * @member egret.gui.Panel#title
         */
        title: string;
        /**
         * @method egret.gui.Panel#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TitleWindow
     * @classdesc
     * 可移动窗口组件。注意，此窗口必须使用PopUpManager.addPopUp()弹出之后才能移动。
     * @extends egret.gui.Panel
     */
    class TitleWindow extends Panel {
        /**
         * @method egret.gui.TitleWindow#constructor
         */
        constructor();
        /**
         * 在窗体上按下时前置窗口
         */
        private onWindowMouseDown(event);
        /**
         * [SkinPart]关闭按钮
         * @member egret.gui.TitleWindow#closeButton
         */
        closeButton: Button;
        /**
         * [SkinPart]可移动区域
         * @member egret.gui.TitleWindow#moveArea
         */
        moveArea: DisplayObject;
        private _showCloseButton;
        /**
         * 是否显示关闭按钮,默认true。
         * @member egret.gui.TitleWindow#showCloseButton
         */
        showCloseButton: boolean;
        private _autoBackToStage;
        /**
         * 在拖拽窗口时，有可能把窗口完全拖出屏幕外，导致无法点中moveArea而不能拖回屏幕。
         * 此属性为true时，将会在拖拽结束时，自动调整窗口位置，使moveArea可以被再次点中。
         * 反之不调整。默认值为true。
         * @member egret.gui.TitleWindow#autoBackToStage
         */
        autoBackToStage: boolean;
        /**
         * @method egret.gui.TitleWindow#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.TitleWindow#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * @method egret.gui.TitleWindow#closeButton_clickHandler
         * @param event {TouchEvent}
         */
        closeButton_clickHandler(event: TouchEvent): void;
        /**
         * 鼠标按下时的偏移量
         */
        private _offsetPointX;
        private _offsetPointY;
        /**
         * 鼠标在可移动区域按下
         * @method egret.gui.TitleWindow#moveArea_mouseDownHandler
         * @param event {TouchEvent}
         */
        moveArea_mouseDownHandler(event: TouchEvent): void;
        /**
         * 鼠标拖拽时的移动事件
         * @method egret.gui.TitleWindow#moveArea_mouseMoveHandler
         * @param event {TouchEvent}
         */
        moveArea_mouseMoveHandler(event: TouchEvent): void;
        /**
         * 鼠标在舞台上弹起事件
         * @method egret.gui.TitleWindow#moveArea_mouseUpHandler
         * @param event {Event}
         */
        moveArea_mouseUpHandler(event: Event): void;
        /**
         * 调整窗口位置，使其可以在舞台中被点中
         */
        private adjustPosForStage();
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Alert
     * @classdesc
     * 弹出对话框，可能包含消息、标题、按钮（“确定”、“取消”、“是”和“否”的任意组合)。
     * @extends egret.gui.TitleWindow
     */
    class Alert extends TitleWindow {
        /**
         * 当对话框关闭时，closeEvent.detail的值若等于此属性,表示被点击的按钮为firstButton。
         * @constant egret.gui.Alert.FIRST_BUTTON
         */
        static FIRST_BUTTON: string;
        /**
         * 当对话框关闭时，closeEvent.detail的值若等于此属性,表示被点击的按钮为secondButton。
         * @constant egret.gui.Alert.SECOND_BUTTON
         */
        static SECOND_BUTTON: string;
        /**
         * 当对话框关闭时，closeEvent.detail的值若等于此属性,表示被点击的按钮为closeButton。
         * @constant egret.gui.Alert.CLOSE_BUTTON
         */
        static CLOSE_BUTTON: string;
        /**
         * 弹出Alert控件的静态方法。在Alert控件中选择一个按钮，将关闭该控件。
         * @method egret.gui.Alert.show
         * @param text {string} 要显示的文本内容字符串。
         * @param title {string} 对话框标题
         * @param closeHandler {Function} 按下Alert控件上的任意按钮时的回调函数。示例:closeHandler(event:CloseEvent);
         * event的detail属性包含 Alert.FIRST_BUTTON、Alert.SECOND_BUTTON和Alert.CLOSE_BUTTON。
         * @param firstButtonLabel {string} 第一个按钮上显示的文本。
         * @param secondButtonLabel {string} 第二个按钮上显示的文本，若为null，则不显示第二个按钮。
         * @param modal {boolean} 是否启用模态。即禁用弹出框以下的鼠标事件。默认true。
         * @param center {boolean} 是否居中。默认true。
         * @returns {Alert}
         */
        static show(text?: string, title?: string, closeHandler?: Function, firstButtonLabel?: string, secondButtonLabel?: string, modal?: boolean, center?: boolean): Alert;
        /**
         * 构造函数，请通过静态方法Alert.show()来创建对象实例。
         * @method egret.gui.Alert#constructor
         */
        constructor();
        private _firstButtonLabel;
        /**
         * 第一个按钮上显示的文本
         * @member egret.gui.Alert#firstButtonLabel
         */
        firstButtonLabel: string;
        private _secondButtonLabel;
        /**
         * 第二个按钮上显示的文本
         * @member egret.gui.Alert#secondButtonLabel
         */
        secondButtonLabel: string;
        private _contentText;
        /**
         * 文本内容
         * @member egret.gui.Alert#contentText
         */
        contentText: string;
        /**
         * 对话框关闭回调函数
         */
        private closeHandler;
        /**
         * 关闭事件
         */
        private onClose(event);
        /**
         * @method egret.gui.Alert#closeButton_clickHandler
         * @param event {TouchEvent}
         */
        closeButton_clickHandler(event: TouchEvent): void;
        /**
         * [SkinPart]文本内容显示对象
         * @member egret.gui.Alert#contentDisplay
         */
        contentDisplay: IDisplayText;
        /**
         * [SkinPart]第一个按钮，通常是"确定"。
         * @member egret.gui.Alert#firstButton
         */
        firstButton: Button;
        /**
         * [SkinPart]第二个按钮，通常是"取消"。
         * @member egret.gui.Alert#secondButton
         */
        secondButton: Button;
        /**
         * @method egret.gui.Alert#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.Alert#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ProgressBar
     * @classdesc
     * 进度条控件。
     * @extends egret.gui.Range
     */
    class ProgressBar extends Range {
        /**
         * @method egret.gui.ProgressBar#constructor
         */
        constructor();
        /**
         * [SkinPart]进度高亮显示对象。
         * @member egret.gui.ProgressBar#thumb
         */
        thumb: DisplayObject;
        /**
         * [SkinPart]轨道显示对象，用于确定thumb要覆盖的区域。
         * @member egret.gui.ProgressBar#track
         */
        track: DisplayObject;
        /**
         * [SkinPart]进度条文本
         * @member egret.gui.ProgressBar#labelDisplay
         */
        labelDisplay: Label;
        private _labelFunction;
        /**
         * 进度条文本格式化回调函数。示例：labelFunction(value:Number,maximum:Number):String;
         * @member egret.gui.ProgressBar#labelFunction
         */
        labelFunction: Function;
        /**
         * 将当前value转换成文本
         * @method egret.gui.ProgressBar#valueToLabel
         * @param value {number}
         * @param maximum {number}
         * @returns {string}
         */
        valueToLabel(value: number, maximum: number): string;
        private _slideDuration;
        /**
         * value改变时调整thumb长度的缓动动画时间，单位毫秒。设置为0则不执行缓动。默认值500。
         * @member egret.gui.ProgressBar#slideDuration
         */
        slideDuration: number;
        private _direction;
        /**
         * 进度条增长方向。请使用ProgressBarDirection定义的常量。默认值：ProgressBarDirection.LEFT_TO_RIGHT。
         * @member egret.gui.ProgressBar#direction
         */
        direction: string;
        /**
         * 动画实例
         */
        private animator;
        /**
         * 动画播放结束时要到达的value。
         */
        private slideToValue;
        /**
         * 进度条的当前值。
         * 注意：当组件添加到显示列表后，若slideDuration不为0。设置此属性，并不会立即应用。而是作为目标值，开启缓动动画缓慢接近。
         * 若需要立即重置属性，请先设置slideDuration为0，或者把组件从显示列表移除。
         * @member egret.gui.ProgressBar#value
         */
        value: number;
        private animationValue;
        /**
         * 动画播放更新数值
         */
        private animationUpdateHandler(animation);
        /**
         * @method egret.gui.ProgressBar#setValue
         * @param value {number}
         */
        setValue(value: number): void;
        /**
         * @method egret.gui.ProgressBar#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * @method egret.gui.ProgressBar#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.ProgressBar#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        private trackResizedOrMoved;
        /**
         * track的位置或尺寸发生改变
         */
        private onTrackResizeOrMove(event);
        /**
         * @method egret.gui.ProgressBar#commitProperties
         */
        commitProperties(): void;
        /**
         * 更新皮肤部件大小和可见性。
         * @method egret.gui.ProgressBar#updateSkinDisplayList
         */
        updateSkinDisplayList(): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ProgressBarDirection
     * @classdesc
     * 定义进度条控件增长方向的常量
     */
    class ProgressBarDirection {
        /**
         * 水平从左到右增长
         * @constant egret.gui.ProgressBarDirection.LEFT_TO_RIGHT
         */
        static LEFT_TO_RIGHT: string;
        /**
         * 水平从右到左增长
         * @constant egret.gui.ProgressBarDirection.RIGHT_TO_LEFT
         */
        static RIGHT_TO_LEFT: string;
        /**
         * 竖直从上到下增长
         * @constant egret.gui.ProgressBarDirection.TOP_TO_BOTTOM
         */
        static TOP_TO_BOTTOM: string;
        /**
         * 竖直从下到上增长
         * @constant egret.gui.ProgressBarDirection.BOTTOM_TO_TOP
         */
        static BOTTOM_TO_TOP: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.HSlider
     * @classdesc
     * 水平滑块控件
     * @extends egret.gui.SliderBase
     */
    class HSlider extends SliderBase {
        /**
         * 构造函数
         * @method egret.gui.HSlider#constructor
         */
        constructor();
        /**
         * @method egret.gui.HSlider#pointToValue
         * @param x {number}
         * @param y {number}
         * @returns {number}
         */
        pointToValue(x: number, y: number): number;
        /**
         * @method egret.gui.HSlider#updateSkinDisplayList
         */
        updateSkinDisplayList(): void;
    }
}
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
declare module egret.gui {
    class HScrollBar extends HSlider {
        constructor();
        _setViewportMetric(width: number, contentWidth: number): void;
        private _autoHideTimer;
        private _autoHideDelay;
        trackAlpha: number;
        thumbAlpha: number;
        _setValue(value: number): void;
        setValue(value: number): void;
        private autoHide();
        private _autoHideShowAnimat;
        private _animatTargetIsShow;
        private hideOrShow(show);
        _animationUpdateHandler(animation: Animation): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.VSlider
     * @classdesc
     * 垂直滑块控件
     * @extends egret.gui.SliderBase
     */
    class VSlider extends SliderBase {
        /**
         * 构造函数
         * @method egret.gui.VSlider#constructor
         */
        constructor();
        /**
         * @method egret.gui.VSlider#pointToValue
         * @param x {number}
         * @param y {number}
         * @returns {number}
         */
        pointToValue(x: number, y: number): number;
        /**
         * @method egret.gui.VSlider#updateSkinDisplayList
         */
        updateSkinDisplayList(): void;
    }
}
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
declare module egret.gui {
    class VScrollBar extends VSlider {
        constructor();
        _setViewportMetric(height: number, contentHeight: number): void;
        private _autoHideTimer;
        private _autoHideDelay;
        trackAlpha: number;
        thumbAlpha: number;
        setPosition(value: number): void;
        getPosition(): number;
        _setValue(value: number): void;
        setValue(value: number): void;
        private autoHide();
        private _autoHideShowAnimat;
        private _animatTargetIsShow;
        private hideOrShow(show);
        _animationUpdateHandler(animation: Animation): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.List
     * @classdesc
     * 列表组件
     * @extends egret.gui.ListBase
     */
    class List extends ListBase {
        /**
         * @method egret.gui.List#constructor
         */
        constructor();
        /**
         * @method egret.gui.List#createChildren
         */
        createChildren(): void;
        /**
         * 是否使用虚拟布局,默认true
         * @member egret.gui.List#useVirtualLayout
         */
        /**
         * @inheritDoc
         */
        useVirtualLayout: boolean;
        private _allowMultipleSelection;
        /**
         * 是否允许同时选中多项
         * @member egret.gui.List#allowMultipleSelection
         */
        allowMultipleSelection: boolean;
        private _selectedIndices;
        private _proposedSelectedIndices;
        /**
         * 当前选中的一个或多个项目的索引列表
         * @member egret.gui.List#selectedIndices
         */
        selectedIndices: number[];
        /**
         * @member egret.gui.List#selectedIndex
         */
        selectedIndex: number;
        /**
         * 当前选中的一个或多个项目的数据源列表
         * @member egret.gui.List#selectedItems
         */
        selectedItems: Object[];
        /**
         * 设置多个选中项
         */
        _setSelectedIndices(value: number[], dispatchChangeEvent?: boolean): void;
        /**
         * @method egret.gui.List#commitProperties
         */
        commitProperties(): void;
        /**
         * @method egret.gui.List#commitSelection
         * @param dispatchChangedEvents {boolean}
         * @returns {boolean}
         */
        commitSelection(dispatchChangedEvents?: boolean): boolean;
        /**
         * 是否是有效的索引
         */
        private isValidIndex(item, index, v);
        /**
         * 提交多项选中项属性
         * @method egret.gui.List#commitMultipleSelection
         */
        commitMultipleSelection(): void;
        _isItemIndexSelected(index: number): boolean;
        /**
         * @method egret.gui.List#dataGroup_rendererAddHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
         * 数据源发生刷新
         */
        dataProviderRefreshed(): void;
        /**
         * @method egret.gui.List#dataGroup_rendererRemoveHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        /**
         * 是否捕获ItemRenderer以便在MouseUp时抛出ItemClick事件
         */
        _captureItemRenderer: boolean;
        private mouseDownItemRenderer;
        /**
         * 鼠标在项呈示器上按下
         * @method egret.gui.List#item_mouseDownHandler
         * @param event {TouchEvent}
         */
        item_mouseDownHandler(event: TouchEvent): void;
        /**
         * 计算当前的选中项列表
         */
        private calculateSelectedIndices(index, shiftKey, ctrlKey);
        /**
         * 鼠标在项呈示器上弹起，抛出ItemClick事件。
         */
        private item_mouseUpHandler(event);
        /**
         * 鼠标在舞台上弹起
         */
        private stage_mouseUpHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.PopUpAnchor
     * @classdesc
     * PopUpAnchor组件用于定位布局中的弹出控件或下拉控件
     * @extends egret.gui.UIComponent
     */
    class PopUpAnchor extends UIComponent {
        /**
         * 构造函数
         * @method egret.gui.PopUpAnchor#constructor
         */
        constructor();
        /**
         * popUp已经弹出的标志
         */
        private popUpIsDisplayed;
        /**
         * 自身已经添加到舞台标志
         */
        private addedToStage;
        private _popUpHeightMatchesAnchorHeight;
        /**
         * 如果为 true，则将popUp控件的高度设置为 PopUpAnchor的高度值。
         * @member egret.gui.PopUpAnchor#popUpHeightMatchesAnchorHeight
         */
        popUpHeightMatchesAnchorHeight: boolean;
        private _popUpWidthMatchesAnchorWidth;
        /**
         * 如果为true，则将popUp控件的宽度设置为PopUpAnchor的宽度值。
         * @member egret.gui.PopUpAnchor#popUpWidthMatchesAnchorWidth
         */
        popUpWidthMatchesAnchorWidth: boolean;
        private _displayPopUp;
        /**
         * 如果为 true，则将popUp对象弹出。若为false，关闭弹出的popUp。
         * @member egret.gui.PopUpAnchor#displayPopUp
         */
        displayPopUp: boolean;
        private _popUp;
        /**
         * 要弹出或移除的目标显示对象。
         * @member egret.gui.PopUpAnchor#popUp
         */
        popUp: IVisualElement;
        private _popUpPosition;
        /**
         * popUp相对于PopUpAnchor的弹出位置。请使用PopUpPosition里定义的常量。默认值TOP_LEFT。
         * @see org.flexlite.domUI.core.PopUpPosition
         * @member egret.gui.PopUpAnchor#popUpPosition
         */
        popUpPosition: string;
        /**
         * @method egret.gui.PopUpAnchor#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 手动刷新popUp的弹出位置和尺寸。
         * @method egret.gui.PopUpAnchor#updatePopUpTransform
         */
        updatePopUpTransform(): void;
        /**
         * 计算popUp的弹出位置
         */
        private calculatePopUpPosition();
        /**
         * 正在播放动画的标志
         */
        private inAnimation;
        /**
         * 动画类实例
         */
        private animator;
        private _openDuration;
        /**
         * 窗口弹出的动画时间(以毫秒为单位)，设置为0则直接弹出窗口而不播放动画效果。默认值250。
         * @member egret.gui.PopUpAnchor#openDuration
         */
        openDuration: number;
        private _closeDuration;
        /**
         * 窗口关闭的动画时间(以毫秒为单位)，设置为0则直接关闭窗口而不播放动画效果。默认值150。
         * @member egret.gui.PopUpAnchor#closeDuration
         */
        closeDuration: number;
        /**
         * 动画开始播放触发的函数
         */
        private animationStartHandler(animation);
        /**
         * 动画播放过程中触发的更新数值函数
         */
        private animationUpdateHandler(animation);
        /**
         * 动画播放完成触发的函数
         */
        private animationEndHandler(animation);
        /**
         * 添加或移除popUp
         */
        private addOrRemovePopUp();
        /**
         * 移除并重置popUp
         */
        private removeAndResetPopUp();
        /**
         * 对popUp应用尺寸和位置调整
         */
        private applyPopUpTransform(unscaledWidth, unscaledHeight);
        /**
         * 开始播放动画
         */
        private startAnimation();
        private valueRange;
        /**
         * 创建动画轨迹
         */
        private createMotionPath();
        /**
         * 添加到舞台事件
         */
        private addedToStageHandler(event);
        /**
         * 延迟检查弹出状态，防止堆栈溢出。
         */
        private checkPopUpState();
        /**
         * 从舞台移除事件
         */
        private removedFromStageHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.DropDownController
     * @classdesc
     * 用于处理因用户交互而打开和关闭下拉列表的操作的控制器
     * @extends egret.EventDispatcher
     */
    class DropDownController extends EventDispatcher {
        /**
         * 构造函数
         * @method egret.gui.DropDownController#constructor
         */
        constructor();
        /**
         * 鼠标按下标志
         */
        private mouseIsDown;
        private _openButton;
        /**
         * 下拉按钮实例
         * @member egret.gui.DropDownController#openButton
         */
        openButton: ButtonBase;
        /**
         * 要考虑作为下拉列表的点击区域的一部分的显示对象列表。
         * 在包含项列出的任何组件内进行鼠标单击不会自动关闭下拉列表。
         * @member egret.gui.DropDownController#hitAreaAdditions
         */
        hitAreaAdditions: DisplayObject[];
        private _dropDown;
        /**
         * 下拉区域显示对象
         * @member egret.gui.DropDownController#dropDown
         */
        dropDown: DisplayObject;
        private _isOpen;
        /**
         * 下拉列表已经打开的标志
         * @member egret.gui.DropDownController#isOpen
         */
        isOpen: boolean;
        private _closeOnResize;
        /**
         * 如果为 true，则在调整舞台大小时会关闭下拉列表。
         * @member egret.gui.DropDownController#closeOnResize
         */
        closeOnResize: boolean;
        private _rollOverOpenDelay;
        private rollOverOpenDelayTimer;
        /**
         * 指定滑过锚点按钮时打开下拉列表要等待的延迟（以毫秒为单位）。
         * 如果设置为 NaN，则下拉列表会在单击时打开，而不是在滑过时打开。默认值NaN
         * @member egret.gui.DropDownController#rollOverOpenDelay
         */
        rollOverOpenDelay: number;
        /**
         * 添加触发下拉列表打开的事件监听
         */
        private addOpenTriggers();
        /**
         * 移除触发下拉列表打开的事件监听
         */
        private removeOpenTriggers();
        /**
         * 添加触发下拉列表关闭的事件监听
         */
        private addCloseTriggers();
        /**
         * 移除触发下拉列表关闭的事件监听
         */
        private removeCloseTriggers();
        /**
         * 添加舞台尺寸改变的事件监听
         */
        private addCloseOnResizeTrigger();
        /**
         * 移除舞台尺寸改变的事件监听
         */
        private removeCloseOnResizeTrigger();
        /**
         * 检查鼠标是否在DropDown或者openButton区域内。
         */
        private isTargetOverDropDownOrOpenButton(target);
        /**
         * 打开下拉列表
         * @method egret.gui.DropDownController#openDropDown
         */
        openDropDown(): void;
        /**
         * 执行打开下拉列表
         */
        private openDropDownHelper();
        /**
         * 关闭下拉列表
         * @method egret.gui.DropDownController#closeDropDown
         * @param commit {boolean}
         */
        closeDropDown(commit: boolean): void;
        /**
         * openButton上按下鼠标事件
         * @method egret.gui.DropDownController#_openButton_buttonDownHandler
         * @param event {Event}
         */
        _openButton_buttonDownHandler(event: Event): void;
        /**
         * openButton上鼠标经过事件
         * @method egret.gui.DropDownController#_openButton_rollOverHandler
         * @param event {TouchEvent}
         */
        _openButton_rollOverHandler(event: TouchEvent): void;
        /**
         * openButton上鼠标移出事件
         */
        private openButton_rollOutHandler(event);
        /**
         * 到达鼠标移入等待延迟打开的时间。
         */
        private rollOverDelay_timerCompleteHandler(event);
        /**
         * 舞台上鼠标按下事件
         * @method egret.gui.DropDownController#stage_mouseDownHandler
         * @param event {Event}
         */
        stage_mouseDownHandler(event: Event): void;
        /**
         * 舞台上鼠标移动事件
         * @method egret.gui.DropDownController#stage_mouseMoveHandler
         * @param event {Event}
         */
        stage_mouseMoveHandler(event: Event): void;
        /**
         * 舞台上鼠标弹起事件
         * @method egret.gui.DropDownController#stage_mouseUpHandler_noRollOverOpenDelay
         * @param event {Event}
         */
        stage_mouseUpHandler_noRollOverOpenDelay(event: Event): void;
        /**
         * 舞台上鼠标弹起事件
         * @method egret.gui.DropDownController#stage_mouseUpHandler
         * @param event {Event}
         */
        stage_mouseUpHandler(event: Event): void;
        /**
         * 舞台尺寸改变事件
         * @method egret.gui.DropDownController#stage_resizeHandler
         * @param event {Event}
         */
        stage_resizeHandler(event: Event): void;
        /**
         * 舞台上鼠标滚轮事件
         */
        private stage_mouseWheelHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.DropDownListBase
     * @classdesc
     * 下拉列表控件基类
     * @extends egret.gui.List
     */
    class DropDownListBase extends List {
        /**
         * 构造函数
         * @method egret.gui.DropDownListBase#constructor
         */
        constructor();
        /**
         * [SkinPart]下拉区域显示对象
         * @member egret.gui.DropDownListBase#dropDown
         */
        dropDown: DisplayObject;
        /**
         * [SkinPart]下拉触发按钮
         * @member egret.gui.DropDownListBase#openButton
         */
        openButton: ButtonBase;
        /**
         * @constant egret.gui.DropDownListBase.PAGE_SIZE
         */
        static PAGE_SIZE: number;
        /**
         * 文本改变标志
         */
        _labelChanged: boolean;
        /**
         * @inheritDoc
         */
        _setDataProvider(value: ICollection): void;
        /**
         * @inheritDoc
         */
        _setLabelField(value: string): void;
        /**
         * @inheritDoc
         */
        _setLabelFunction(value: Function): void;
        private _dropDownController;
        /**
         * 下拉控制器
         * @member egret.gui.DropDownListBase#dropDownController
         */
        dropDownController: DropDownController;
        /**
         * 下拉列表是否已经已打开
         * @member egret.gui.DropDownListBase#isDropDownOpen
         */
        isDropDownOpen: boolean;
        private _userProposedSelectedIndex;
        /**
         * @method egret.gui.DropDownListBase#commitProperties
         */
        commitProperties(): void;
        /**
         * @method egret.gui.DropDownListBase#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.DropDownListBase#partRemoved
         * @param partName {string}
         * @param instance {any}
         */
        partRemoved(partName: string, instance: any): void;
        /**
         * @method egret.gui.DropDownListBase#getCurrentSkinState
         * @returns {string}
         */
        getCurrentSkinState(): string;
        /**
         * @method egret.gui.DropDownListBase#commitSelection
         * @param dispatchChangedEvents {boolean}
         * @returns {boolean}
         */
        commitSelection(dispatchChangedEvents?: boolean): boolean;
        /**
         * @method egret.gui.DropDownListBase#_isItemIndexSelected
         * @param index {number}
         * @returns {boolean}
         */
        _isItemIndexSelected(index: number): boolean;
        /**
         * 打开下拉列表并抛出UIEvent.OPEN事件。
         * @method egret.gui.DropDownListBase#openDropDown
         */
        openDropDown(): void;
        /**
         * 关闭下拉列表并抛出UIEvent.CLOSE事件。
         * @method egret.gui.DropDownListBase#closeDropDown
         * @param commit {boolean}
         */
        closeDropDown(commit: boolean): void;
        /**
         * 更新选中项的提示文本
         * @method egret.gui.DropDownListBase#updateLabelDisplay
         * @param displayItem {any}
         */
        updateLabelDisplay(displayItem?: any): void;
        /**
         * 改变高亮的选中项
         * @method egret.gui.DropDownListBase#_changeHighlightedSelection
         * @param newIndex {number}
         * @param scrollToTop {boolean}
         */
        _changeHighlightedSelection(newIndex: number, scrollToTop?: boolean): void;
        /**
         * @method egret.gui.DropDownListBase#dataProvider_collectionChangeHandler
         * @param event {CollectionEvent}
         */
        dataProvider_collectionChangeHandler(event: CollectionEvent): void;
        /**
         * @method egret.gui.DropDownListBase#item_mouseDownHandler
         * @param event {TouchEvent}
         */
        item_mouseDownHandler(event: TouchEvent): void;
        /**
         * 控制器抛出打开列表事件
         * @method egret.gui.DropDownListBase#_dropDownController_openHandler
         * @param event {UIEvent}
         */
        _dropDownController_openHandler(event: UIEvent): void;
        /**
         * 打开列表后组件一次失效验证全部完成
         * @method egret.gui.DropDownListBase#_open_updateCompleteHandler
         * @param event {UIEvent}
         */
        _open_updateCompleteHandler(event: UIEvent): void;
        /**
         * 控制器抛出关闭列表事件
         * @method egret.gui.DropDownListBase#dropDownController_closeHandler
         * @param event {UIEvent}
         */
        dropDownController_closeHandler(event: UIEvent): void;
        /**
         * 关闭列表后组件一次失效验证全部完成
         */
        private close_updateCompleteHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Tree
     * @classdesc
     * 树状列表组件
     * @extends egret.gui.List
     */
    class Tree extends List {
        /**
         * 构造函数
         * @method egret.gui.Tree#constructor
         */
        constructor();
        static defaultTreeRendererFactory: ClassFactory;
        /**
         * @method egret.gui.Tree#createChildren
         */
        createChildren(): void;
        /**
         * @method egret.gui.Tree#updateRenderer
         * @param renderer {IItemRenderer}
         * @param itemIndex {number}
         * @param data {any}
         * @returns {IItemRenderer}
         */
        updateRenderer(renderer: IItemRenderer, itemIndex: number, data: any): IItemRenderer;
        /**
         * 根据数据项返回项呈示器中图标的skinName属性值
         * @method egret.gui.Tree#itemToIcon
         * @param data {any}
         * @returns {any}
         */
        itemToIcon(data: any): any;
        /**
         * @method egret.gui.Tree#dataGroup_rendererAddHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
         * 节点即将打开
         */
        private onItemOpening(event);
        /**
         * @method egret.gui.Tree#dataGroup_rendererRemoveHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        /**
         * 图标字段或函数改变标志
         */
        private iconFieldOrFunctionChanged;
        private _iconField;
        /**
         * 数据项中用来确定图标skinName属性值的字段名称。另请参考UIAsset.skinName。
         * 若设置了iconFunction，则设置此属性无效。
         * @member egret.gui.Tree#iconField
         */
        iconField: string;
        private _iconFunction;
        /**
         * 用户提供的函数，在每个数据项目上运行以确定其图标的skinName值。另请参考UIAsset.skinName。
         * 示例：iconFunction(item:Object):Object
         * @member egret.gui.Tree#iconFunction
         */
        iconFunction: Function;
        /**
         * 打开或关闭一个节点,注意，此操作不会抛出open或close事件。
         * @method egret.gui.Tree#expandItem
         * @param item {any} 要打开或关闭的节点
         * @param open {boolean} true表示打开节点，反之关闭。
         */
        expandItem(item: any, open?: boolean): void;
        /**
         * 指定的节点是否打开
         * @method egret.gui.Tree#isItemOpen
         * @param item {any}
         * @returns {boolean}
         */
        isItemOpen(item: any): boolean;
        /**
         * @method egret.gui.Tree#dataProvider_collectionChangeHandler
         * @param event {CollectionEvent}
         */
        dataProvider_collectionChangeHandler(event: CollectionEvent): void;
        /**
         * @method egret.gui.Tree#commitProperties
         */
        commitProperties(): void;
        /**
         * 更新指定索引项的图标
         */
        private updateRendererIconProperty(itemIndex);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.DropDownList
     * @classdesc
     * 不可输入的下拉列表控件。带输入功能的下拉列表控件，请使用ComboBox。
     * @see org.flexlite.domUI.components.ComboBox
     * @extends egret.gui.DropDownListBase
     */
    class DropDownList extends DropDownListBase {
        /**
         * 构造函数
         * @method egret.gui.DropDownList#constructor
         */
        constructor();
        /**
         * [SkinPart]选中项文本
         * @member egret.gui.DropDownList#labelDisplay
         */
        labelDisplay: IDisplayText;
        private _prompt;
        /**
         * 当没有选中项时在DropDownList上要显示的字符串。<p/>
         * 它通常是一个类似于“请选择一项...”的文本。当下拉列表中的某个项目被选中后，会被替换为该选定项目中的文本。
         * @member egret.gui.DropDownList#prompt
         */
        prompt: string;
        /**
         * @method egret.gui.DropDownList#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @method egret.gui.DropDownList#updateLabelDisplay
         * @param displayItem {any}
         */
        updateLabelDisplay(displayItem?: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TabBarButton
     * @classdesc
     * 选项卡组件的按钮条目
     * @extends egret.gui.ToggleButtonBase
     * @implements egret.gui.IItemRenderer
     */
    class TabBarButton extends ToggleButtonBase implements IItemRenderer {
        /**
         * @method egret.gui.TabBarButton#constructor
         */
        constructor();
        private _allowDeselection;
        /**
         * 如果为 true，用户单击当前选定的按钮时即会将其取消选择。
         * 如果为 false，用户必须选择不同的按钮才可取消选择当前选定的按钮。
         * @member egret.gui.TabBarButton#allowDeselection
         */
        allowDeselection: boolean;
        private _data;
        /**
         * @member egret.gui.TabBarButton#data
         */
        data: any;
        private _itemIndex;
        /**
         * @member egret.gui.TabBarButton#itemIndex
         */
        itemIndex: number;
        /**
         * @inheritDoc
         */
        _setLabel(value: string): void;
        /**
         * @method egret.gui.TabBarButton#buttonReleased
         */
        buttonReleased(): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TabBar
     * @classdesc
     * 选项卡组件
     * @extends egret.gui.ListBase
     */
    class TabBar extends ListBase {
        /**
         * 构造函数
         * @method egret.gui.TabBar#constructor
         */
        constructor();
        /**
         * requireSelection改变标志
         */
        private requireSelectionChanged_tabBar;
        /**
         * @method egret.gui.TabBar#c
         * @param value {boolea}
         */
        c(value: boolean): void;
        /**
         * @inheritDoc
         */
        _setDataProvider(value: ICollection): void;
        /**
         * 鼠标点击的选中项改变
         */
        private onIndexChanged(event);
        /**
         * ViewStack选中项发生改变
         */
        private onViewStackIndexChange(event);
        /**
         * @method egret.gui.TabBar#commitProperties
         */
        commitProperties(): void;
        /**
         * @method egret.gui.TabBar#dataGroup_rendererAddHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererAddHandler(event: RendererExistenceEvent): void;
        /**
         * @method egret.gui.TabBar#dataGroup_rendererRemoveHandler
         * @param event {RendererExistenceEvent}
         */
        dataGroup_rendererRemoveHandler(event: RendererExistenceEvent): void;
        /**
         * 鼠标在条目上按下
         */
        private item_clickHandler(event);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.Scroller
     * @classdesc
     * 滚动条组件
     * @extends egret.gui.UIComponent
     * @implements egret.gui.IVisualElementContainer
     */
    class Scroller extends SkinnableComponent implements IVisualElementContainer {
        /**
         * 构造函数
         * @method egret.gui.Scroller#constructor
         */
        constructor();
        /**
         * [SkinPart]水平滚动条
         */
        horizontalScrollBar: HScrollBar;
        /**
         * [SkinPart]垂直滚动条
         */
        verticalScrollBar: VScrollBar;
        hBar: HScrollBar;
        vBar: VScrollBar;
        _scroller: ScrollView;
        /**
         * @method egret.gui.Scroller#measure
         */
        measure(): void;
        /**
         * @method egret.gui.Scroller#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        private _verticalScrollPolicy;
        /**
         * 垂直滚动条显示策略，参见ScrollPolicy类定义的常量。
         * @member egret.gui.Scroller#verticalScrollPolicy
         */
        verticalScrollPolicy: string;
        private _horizontalScrollPolicy;
        /**
         * 水平滚动条显示策略，参见ScrollPolicy类定义的常量。
         * @member egret.gui.Scroller#horizontalScrollPolicy
         */
        horizontalScrollPolicy: string;
        private _viewport;
        /**
         * 要滚动的视域组件。
         * @member egret.gui.Scroller#viewport
         */
        viewport: IViewport;
        /**
         * 安装并初始化视域组件
         */
        private installViewport();
        _onAddToStage(): void;
        /**
         * 卸载视域组件
         */
        private uninstallViewport();
        private _scrollerChangedHandler(e);
        private setViewportVScrollPosition(pos);
        private setViewportHScrollPosition(pos);
        /**
         * 缓动到水平滚动位置
         * @method egret.gui.Scroller#throwHorizontally
         * @param hspTo {number}
         * @param duration {number}
         */
        throwHorizontally(hspTo: number, duration?: number): void;
        /**
         * 缓动到垂直滚动位置
         * @method egret.gui.Scroller#throwVertically
         * @param vspTo {number}
         * @param duration {number}
         */
        throwVertically(vspTo: number, duration?: number): void;
        /**
         * @member egret.gui.Scroller#numElements
         */
        numElements: number;
        /**
         * 抛出索引越界异常
         */
        private throwRangeError(index);
        /**
         * @method egret.gui.Scroller#getElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.Scroller#getElementIndex
         * @param element {IVisualElement}
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * @method egret.gui.Scroller#containsElement
         * @param element {IVisualElement}
         * @returns {boolean}
         */
        containsElement(element: IVisualElement): boolean;
        private throwNotSupportedError();
        /**
         * @method egret.gui.Scroller#addElement
         * @deprecated
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        addElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.Scroller#addElementAt
         * @deprecated
         * @param element {IVisualElement}
         * @param index {number}
         * @returns {IVisualElement}
         */
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
         * @method egret.gui.Scroller#removeElement
         * @deprecated
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        removeElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.Scroller#removeElementAt
         * @deprecated
         * @param index {number}
         * @returns {IVisualElement}
         */
        removeElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.Scroller#removeAllElements
         * @deprecated
         */
        removeAllElements(): void;
        /**
         * @method egret.gui.Scroller#setElementIndex
         * @deprecated
         * @param element {IVisualElement}
         * @param index {number}
         */
        setElementIndex(element: IVisualElement, index: number): void;
        /**
         * @method egret.gui.Scroller#swapElements
         * @deprecated
         * @param element1 {IVisualElement}
         * @param element2 {IVisualElement}
         */
        swapElements(element1: IVisualElement, element2: IVisualElement): void;
        /**
         * @method egret.gui.Scroller#swapElementsAt
         * @deprecated
         * @param index1 {number}
         * @param index2 {number}
         */
        swapElementsAt(index1: number, index2: number): void;
        /**
         * @method egret.gui.Scroller#addChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        addChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.Scroller#addChildAt
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         * @returns {DisplayObject}
         */
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
         * @method egret.gui.Scroller#removeChild
         * @deprecated
         * @param child {DisplayObject}
         * @returns {DisplayObject}
         */
        removeChild(child: DisplayObject): DisplayObject;
        /**
         * @method egret.gui.Scroller#removeChildAt
         * @deprecated
         * @param index {number}
         * @returns {DisplayObject}
         */
        removeChildAt(index: number): DisplayObject;
        /**
         * @method egret.gui.Scroller#setChildIndex
         * @deprecated
         * @param child {DisplayObject}
         * @param index {number}
         */
        setChildIndex(child: DisplayObject, index: number): void;
        /**
         * @method egret.gui.Scroller#swapChildren
         * @deprecated
         * @param child1 {DisplayObject}
         * @param child2 {DisplayObject}
         */
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
         * @method egret.gui.Scroller#swapChildrenAt
         * @deprecated
         * @param index1 {number}
         * @param index2 {number}
         */
        swapChildrenAt(index1: number, index2: number): void;
        _checkHbar(): void;
        _checkVbar(): void;
        /**
         * 若皮肤是ISkin,则调用此方法附加皮肤中的公共部件
         * @method egret.gui.Scroller#partAdded
         * @param partName {string}
         * @param instance {any}
         */
        partAdded(partName: string, instance: any): void;
        _removeScrollBars(): void;
        private hBarChanged(e);
        private vBarChanged(e);
    }
}
declare module egret.gui {
    class EditableText extends TextBase implements IEditableText, IDisplayText, IViewport {
        constructor();
        private _selectable;
        selectable: boolean;
        private _displayAsPassword;
        private displayAsPasswordChanged;
        /**
         * @inheritDoc
         */
        displayAsPassword: boolean;
        private pendingEditable;
        private _editable;
        private editableChanged;
        /**
         * @inheritDoc
         */
        editable: boolean;
        /**
         * @inheritDoc
         */
        enabled: boolean;
        private _maxChars;
        private maxCharsChanged;
        /**
         * @inheritDoc
         */
        maxChars: number;
        private _multiline;
        private multilineChanged;
        /**
         * @inheritDoc
         */
        multiline: boolean;
        private _restrict;
        private restrictChanged;
        /**
         * @inheritDoc
         */
        restrict: string;
        /**
         * @inheritDoc
         */
        _setFontSize(value: number): void;
        _setLineSpacing(value: number): void;
        private _heightInLines;
        private heightInLinesChanged;
        /**
         * 控件的默认高度（以行为单位测量）。 若设置了multiline属性为false，则忽略此属性。
         */
        heightInLines: number;
        private _widthInChars;
        private widthInCharsChanged;
        /**
         * 控件的默认宽度（使用字号：size为单位测量）。 若同时设置了maxChars属性，将会根据两者测量结果的最小值作为测量宽度。
         */
        widthInChars: number;
        private _contentWidth;
        contentWidth: number;
        private setContentWidth(value);
        private _contentHeight;
        contentHeight: number;
        private setContentHeight(value);
        private _horizontalScrollPosition;
        /**
         * @inheritDoc
         */
        horizontalScrollPosition: number;
        private _verticalScrollPosition;
        /**
         * @inheritDoc
         */
        verticalScrollPosition: number;
        /**
         * 根据垂直像素位置获取对应的垂直滚动位置
         */
        private getScrollVByVertitcalPos(value);
        /**
         * 根据垂直滚动位置获取对应的垂直像位置
         */
        private getVerticalPosByScrollV(scrollV?);
        /**
         * @inheritDoc
         */
        getHorizontalScrollPositionDelta(navigationUnit?: number): number;
        /**
         * @inheritDoc
         */
        getVerticalScrollPositionDelta(navigationUnit?: number): number;
        /**
         * 返回指定偏移行数的滚动条偏移量
         */
        private getVScrollDelta(offsetLine?);
        private _clipAndEnableScrolling;
        /**
         * @inheritDoc
         */
        clipAndEnableScrolling: boolean;
        /**
         * @inheritDoc
         */
        commitProperties(): void;
        /**
         * @inheritDoc
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
        /**
         * 更新内容尺寸大小
         */
        private updateContentSize();
        /**
         * @inheritDoc
         */
        selectionBeginIndex: number;
        /**
         * @inheritDoc
         */
        selectionEndIndex: number;
        /**
         * @inheritDoc
         */
        caretIndex: number;
        /**
         * @inheritDoc
         */
        setSelection(beginIndex: number, endIndex?: number): void;
        /**
         * @inheritDoc
         */
        selectAll(): void;
        /**
         * heightInLines计算出来的默认高度。
         */
        private defaultHeight;
        /**
         * widthInChars计算出来的默认宽度。
         */
        private defaultWidth;
        /**
         * @inheritDoc
         */
        measure(): void;
        /**
         * 创建文本显示对象
         */
        _createTextField(): void;
        private textField_changeHandler(event);
        private isValidating;
        /**
         *  @private
         */
        private textField_scrollHandler(event);
        /**
         * 即将输入文字
         */
        private textField_textInputHandler(event);
    }
}
declare module egret.gui {
    class TextArea extends SkinnableTextBase {
        /**
         * 构造函数
         */
        constructor();
        /**
         * 控件的默认宽度（使用字号：size为单位测量）。 若同时设置了maxChars属性，将会根据两者测量结果的最小值作为测量宽度。
         */
        widthInChars: number;
        /**
         * 控件的默认高度（以行为单位测量）。
         */
        /**
         *  @private
         */
        heightInLines: number;
        /**
         * 水平滚动条策略改变标志
         */
        private horizontalScrollPolicyChanged;
        private _horizontalScrollPolicy;
        /**
         * 水平滚动条显示策略，参见ScrollPolicy类定义的常量。
         */
        horizontalScrollPolicy: string;
        /**
         * 垂直滚动条策略改变标志
         */
        private verticalScrollPolicyChanged;
        private _verticalScrollPolicy;
        /**
         * 垂直滚动条显示策略，参见ScrollPolicy类定义的常量。
         */
        verticalScrollPolicy: string;
        /**
         * [SkinPart]实体滚动条组件
         */
        scroller: Scroller;
        _setText(value: string): void;
        /**
         * @inheritDoc
         */
        commitProperties(): void;
        /**
         * @inheritDoc
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @inheritDoc
         */
        createSkinParts(): void;
    }
}
declare module egret.gui {
    class TextInput extends SkinnableTextBase {
        /**
         * 构造函数
         */
        constructor();
        /**
         * 控件的默认宽度（使用字号：size为单位测量）。 若同时设置了maxChars属性，将会根据两者测量结果的最小值作为测量宽度。
         */
        widthInChars: number;
        _setText(value: string): void;
        /**
         * @inheritDoc
         */
        partAdded(partName: string, instance: any): void;
        /**
         * @inheritDoc
         */
        createSkinParts(): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.UIEvent
     * @classdesc
     * UI事件
     * @extends egret.Event
     */
    class UIEvent extends Event {
        /**
         * @method egret.gui.UIEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
         * 组件初始化开始
         * @constant egret.gui.UIEvent.INITIALIZE
         */
        static INITIALIZE: string;
        /**
         * 组件创建完成
         * @constant egret.gui.UIEvent.CREATION_COMPLETE
         */
        static CREATION_COMPLETE: string;
        /**
         * 组件的一次三个延迟验证渲染阶段全部完成
         * @constant egret.gui.UIEvent.UPDATE_COMPLETE
         */
        static UPDATE_COMPLETE: string;
        /**
         * 当用户按下ButtonBase控件时分派。如果 autoRepeat属性为 true，则只要按钮处于按下状态，就将重复分派此事件。
         * @constant egret.gui.UIEvent.BUTTON_DOWN
         */
        static BUTTON_DOWN: string;
        /**
         * 改变结束
         * @constant egret.gui.UIEvent.CHANGE_END
         */
        static CHANGE_END: string;
        /**
         * 改变开始
         * @constant egret.gui.UIEvent.CHANGE_START
         */
        static CHANGE_START: string;
        /**
         * 正在改变中
         * @constant egret.gui.UIEvent.CHANGING
         */
        static CHANGING: string;
        /**
         * 值发生改变
         * @constant egret.gui.UIEvent.VALUE_COMMIT
         */
        static VALUE_COMMIT: string;
        /**
         * SkinnableComponent皮肤发生改变
         * @constant egret.gui.UIEvent.SKIN_CHANGED
         */
        static SKIN_CHANGED: string;
        /**
         * UIAsset的content属性解析完成
         * @constant egret.gui.UIEvent.CONTENT_CHANGED
         */
        static CONTENT_CHANGED: string;
        /**
         * 下拉框弹出事件
         * @constant egret.gui.UIEvent.OPEN
         */
        static OPEN: string;
        /**
         * 下拉框关闭事件
         * @constant egret.gui.UIEvent.CLOSE
         */
        static CLOSE: string;
        /**
         * UIMoveClip一次播放完成事件。仅当UIMovieClip.totalFrames>1时会抛出此事件。
         * @constant egret.gui.UIEvent.PLAY_COMPLETE
         */
        static PLAY_COMPLETE: string;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.UIEvent.dispatchUIEvent
         */
        static dispatchUIEvent(target: IEventDispatcher, type: string): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.PropertyChangeEvent
     * @classdesc
     * 对象的一个属性发生更改时传递到事件侦听器的事件
     * @extends egret.Event
     */
    class PropertyChangeEvent extends Event {
        /**
         * 属性改变
         * @constant egret.gui.PropertyChangeEvent.PROPERTY_CHANGE
         */
        static PROPERTY_CHANGE: string;
        /**
         * 构造函数
         * @method egret.gui.PropertyChangeEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param kind {string}
         * @param property {any}
         * @param oldValue {any}
         * @param newValue {any}
         * @param source {any}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, kind?: string, property?: any, oldValue?: any, newValue?: any, source?: any);
        /**
         * 指定更改的类型。可能的值为 PropertyChangeEventKind.UPDATE、PropertyChangeEventKind.DELETE 和 null。
         * @member egret.gui.PropertyChangeEvent#kind
         */
        kind: string;
        /**
         * 更改后的属性的值。
         * @member egret.gui.PropertyChangeEvent#newValue
         */
        newValue: any;
        /**
         * 更改后的属性的值。
         * @member egret.gui.PropertyChangeEvent#oldValue
         */
        oldValue: any;
        /**
         * 指定已更改属性的 String、QName 或 int。
         * @member egret.gui.PropertyChangeEvent#property
         */
        property: any;
        /**
         * 发生更改的对象。
         * @member egret.gui.PropertyChangeEvent#source
         */
        source: any;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.PropertyChangeEvent.dispatchPropertyChangeEvent
         */
        static dispatchPropertyChangeEvent(target: IEventDispatcher, kind?: string, property?: any, oldValue?: any, newValue?: any, source?: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.PropertyChangeEventKind
     * @classdesc
     * PropertyChangeEventKind 类定义 PropertyChangeEvent 类的 kind 属性的常量值。
     */
    class PropertyChangeEventKind {
        /**
         * 指示该属性的值已更改。
         * @constant egret.gui.PropertyChangeEventKind.UPDATE
         */
        static UPDATE: string;
        /**
         * 指示该属性已从此对象中删除。
         * @constant egret.gui.PropertyChangeEventKind.DELETE
         */
        static DELETE: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.MoveEvent
     * @classdesc
     * 移动事件
     * @extends egret.Event
     */
    class MoveEvent extends Event {
        /**
         * @constant egret.gui.MoveEvent.MOVE
         */
        static MOVE: string;
        /**
         * @method egret.gui.MoveEvent#constructor
         * @param type {string}
         * @param oldX {number}
         * @param oldY {number}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         */
        constructor(type: string, oldX?: number, oldY?: number, bubbles?: boolean, cancelable?: boolean);
        /**
         * 旧的组件X
         * @member egret.gui.MoveEvent#oldX
         */
        oldX: number;
        /**
         * 旧的组件Y
         * @member egret.gui.MoveEvent#oldY
         */
        oldY: number;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.MoveEvent.dispatchMoveEvent
         */
        static dispatchMoveEvent(target: IEventDispatcher, oldX?: number, oldY?: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ResizeEvent
     * @classdesc
     * 尺寸改变事件
     * @extends egret.Event
     */
    class ResizeEvent extends Event {
        /**
         * @constant egret.gui.ResizeEvent.RESIZE
         */
        static RESIZE: string;
        /**
         * @method egret.gui.ResizeEvent#constructor
         * @param type {string}
         * @param oldWidth {number}
         * @param oldHeight {number}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         */
        constructor(type: string, oldWidth?: number, oldHeight?: number, bubbles?: boolean, cancelable?: boolean);
        /**
         * 旧的高度
         * @member egret.gui.ResizeEvent#oldHeight
         */
        oldHeight: number;
        /**
         * 旧的宽度
         * @member egret.gui.ResizeEvent#oldWidth
         */
        oldWidth: number;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.ResizeEvent.dispatchResizeEvent
         */
        static dispatchResizeEvent(target: IEventDispatcher, oldWidth?: number, oldHeight?: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.SkinPartEvent
     * @classdesc
     * 皮肤组件附加移除事件
     * @extends egret.Event
     */
    class SkinPartEvent extends Event {
        /**
         * 附加皮肤公共子部件
         * @constant egret.gui.SkinPartEvent.PART_ADDED
         */
        static PART_ADDED: string;
        /**
         * 移除皮肤公共子部件
         * @constant egret.gui.SkinPartEvent.PART_REMOVED
         */
        static PART_REMOVED: string;
        /**
         * @method egret.gui.SkinPartEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param partName {string}
         * @param instance {any}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, partName?: string, instance?: any);
        /**
         * 被添加或移除的皮肤组件实例
         * @member egret.gui.SkinPartEvent#instance
         */
        instance: any;
        /**
         * 被添加或移除的皮肤组件的实例名
         * @member egret.gui.SkinPartEvent#partName
         */
        partName: string;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.SkinPartEvent.dispatchSkinPartEvent
         */
        static dispatchSkinPartEvent(target: IEventDispatcher, type: string, partName?: string, instance?: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.CloseEvent
     * @classdesc
     * 窗口关闭事件
     * @extends egret.Event
     */
    class CloseEvent extends Event {
        /**
         * @constant egret.gui.CloseEvent.CLOSE
         */
        static CLOSE: string;
        /**
         * 构造函数
         * @method egret.gui.CloseEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param detail {any}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, detail?: any);
        /**
         * 触发关闭事件的细节。某些窗口组件用此属性来区分窗口中被点击的按钮。
         * @member egret.gui.CloseEvent#detail
         */
        detail: any;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.CloseEvent.dispatchCloseEvent
         */
        static dispatchCloseEvent(target: IEventDispatcher, type: string, detail?: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.CollectionEvent
     * @classdesc
     * 集合类型数据改变事件
     * @extends egret.Event
     */
    class CollectionEvent extends Event {
        /**
         * 集合类数据发生改变
         * @constant egret.gui.CollectionEvent.COLLECTION_CHANGE
         */
        static COLLECTION_CHANGE: string;
        /**
         * @method egret.gui.CollectionEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param kind {string}
         * @param location {number}
         * @param oldLocation {number}
         * @param items {Array<any>}
         * @param oldItems {Array<any>}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, kind?: string, location?: number, oldLocation?: number, items?: any[], oldItems?: any[]);
        /**
         * 指示发生的事件类型。此属性值可以是 CollectionEventKind 类中的一个值，也可以是 null，用于指示类型未知。
         * @member egret.gui.CollectionEvent#kind
         */
        kind: string;
        /**
         * 受事件影响的项目的列表
         * @member egret.gui.CollectionEvent#items
         */
        items: any[];
        /**
         * 仅当kind的值为CollectionEventKind.REPLACE时，表示替换前的项目列表
         * @member egret.gui.CollectionEvent#oldItems
         */
        oldItems: any[];
        /**
         * 如果 kind 值为 CollectionEventKind.ADD、 CollectionEventKind.MOVE、
         * CollectionEventKind.REMOVE 或 CollectionEventKind.REPLACE，
         * CollectionEventKind.UPDATE
         * 则此属性为 items 属性中指定的项目集合中零号元素的的索引。
         * @member egret.gui.CollectionEvent#location
         */
        location: number;
        /**
         * 如果 kind 的值为 CollectionEventKind.MOVE，
         * 则此属性为 items 属性中指定的项目在目标集合中原来位置的从零开始的索引。
         * @member egret.gui.CollectionEvent#oldLocation
         */
        oldLocation: number;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.CollectionEvent.dispatchCollectionEvent
         */
        static dispatchCollectionEvent(target: IEventDispatcher, type: string, kind?: string, location?: number, oldLocation?: number, items?: any[], oldItems?: any[]): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.CollectionEventKind
     * @classdesc
     * 定义  CollectionEvent 类 kind 属性的有效值的常量。
     * 这些常量指示对集合进行的更改类型。
     */
    class CollectionEventKind {
        /**
         * 指示集合添加了一个或多个项目。
         * @constant egret.gui.CollectionEventKind.ADD
         */
        static ADD: string;
        /**
         * 指示项目已从 CollectionEvent.oldLocation确定的位置移动到 location确定的位置。
         * @constant egret.gui.CollectionEventKind.MOVE
         */
        static MOVE: string;
        /**
         * 指示集合应用了排序或/和筛选。
         * @constant egret.gui.CollectionEventKind.REFRESH
         */
        static REFRESH: string;
        /**
         * 指示集合删除了一个或多个项目。
         * @constant egret.gui.CollectionEventKind.REMOVE
         */
        static REMOVE: string;
        /**
         * 指示已替换由 CollectionEvent.location 属性确定的位置处的项目。
         * @constant egret.gui.CollectionEventKind.REPLACE
         */
        static REPLACE: string;
        /**
         * 指示集合已彻底更改，需要进行重置。
         * @constant egret.gui.CollectionEventKind.RESET
         */
        static RESET: string;
        /**
         * 指示集合中一个或多个项目进行了更新。受影响的项目将存储在  CollectionEvent.items 属性中。
         * @constant egret.gui.CollectionEventKind.UPDATE
         */
        static UPDATE: string;
        /**
         * 指示集合中某个节点的子项列表已打开，通常应用于Tree的数据源XMLCollection。
         * @constant egret.gui.CollectionEventKind.OPEN
         */
        static OPEN: string;
        /**
         * 指示集合中某个节点的子项列表已关闭，通常应用于Tree的数据源XMLCollection。
         * @constant egret.gui.CollectionEventKind.CLOSE
         */
        static CLOSE: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ElementExistenceEvent
     * @classdesc
     * Group添加或移除元素时分派的事件。
     * @extends egret.Event
     */
    class ElementExistenceEvent extends Event {
        /**
         * 元素添加
         * @constant egret.gui.ElementExistenceEvent.ELEMENT_ADD
         */
        static ELEMENT_ADD: string;
        /**
         * 元素移除
         * @constant egret.gui.ElementExistenceEvent.ELEMENT_REMOVE
         */
        static ELEMENT_REMOVE: string;
        /**
         * @member egret.gui.ElementExistenceEvent#constructor
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, element?: IVisualElement, index?: number);
        /**
         * 指向已添加或删除元素的位置的索引。
         * @member egret.gui.ElementExistenceEvent#index
         */
        index: number;
        /**
         * 对已添加或删除的视觉元素的引用。
         * @member egret.gui.ElementExistenceEvent#element
         */
        element: IVisualElement;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.ElementExistenceEvent.dispatchElementExistenceEvent
         */
        static dispatchElementExistenceEvent(target: IEventDispatcher, type: string, element?: IVisualElement, index?: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.IndexChangeEvent
     * @classdesc
     * 索引改变事件
     * @extends egret.Event
     */
    class IndexChangeEvent extends Event {
        /**
         * 指示索引已更改
         * @constant egret.gui.IndexChangeEvent.CHANGE
         */
        static CHANGE: string;
        /**
         * 指示索引即将更改,可以通过调用preventDefault()方法阻止索引发生更改
         * @constant egret.gui.IndexChangeEvent.CHANGING
         */
        static CHANGING: string;
        /**
         * @method egret.gui.IndexChangeEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param oldIndex {number}
         * @param newIndex {number}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, oldIndex?: number, newIndex?: number);
        /**
         * 进行更改之后的从零开始的索引。
         * @member egret.gui.IndexChangeEvent#newIndex
         */
        newIndex: number;
        /**
         * 进行更改之前的从零开始的索引。
         * @member egret.gui.IndexChangeEvent#oldIndex
         */
        oldIndex: number;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.IndexChangeEvent.dispatchIndexChangeEvent
         */
        static dispatchIndexChangeEvent(target: IEventDispatcher, type: string, oldIndex?: number, newIndex?: number, cancelable?: boolean): boolean;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ListEvent
     * @classdesc
     * 列表事件
     * @extends egret.TouchEvent
     */
    class ListEvent extends TouchEvent {
        /**
         * 指示用户执行了将鼠标指针从控件中某个项呈示器上移开的操作
         * @constant egret.gui.ListEvent.ITEM_ROLL_OUT
         */
        static ITEM_ROLL_OUT: string;
        /**
         * 指示用户执行了将鼠标指针滑过控件中某个项呈示器的操作。
         * @constant egret.gui.ListEvent.ITEM_ROLL_OVER
         */
        static ITEM_ROLL_OVER: string;
        /**
         * 指示用户执行了将鼠标在某个项呈示器上单击的操作。
         * @constant egret.gui.ListEvent.ITEM_CLICK
         */
        static ITEM_CLICK: string;
        /**
         * @method egret.gui.ListEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param touchPointID {number}
         * @param stageX {number}
         * @param stageY {number}
         * @param ctrlKey {boolean}
         * @param altKey {boolean}
         * @param shiftKey {boolean}
         * @param buttonDown {boolean}
         * @param itemIndex {number}
         * @param item {any}
         * @param itemRenderer {IItemRenderer}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, touchPointID?: number, stageX?: number, stageY?: number, ctrlKey?: boolean, altKey?: boolean, shiftKey?: boolean, buttonDown?: boolean, itemIndex?: number, item?: any, itemRenderer?: IItemRenderer);
        /**
         * 触发鼠标事件的项呈示器数据源项。
         * @member egret.gui.ListEvent#item
         */
        item: any;
        /**
         * 触发鼠标事件的项呈示器。
         * @member egret.gui.ListEvent#itemRenderer
         */
        itemRenderer: IItemRenderer;
        /**
         * 触发鼠标事件的项索引
         * @member egret.gui.ListEvent#itemIndex
         */
        itemIndex: number;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.ListEvent.dispatchListEvent
         */
        static dispatchListEvent(target: IEventDispatcher, type: string, touchEvent?: TouchEvent, itemIndex?: number, item?: any, itemRenderer?: IItemRenderer): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.PopUpEvent
     * @classdesc
     * 弹出管理器事件
     * @extends egret.Event
     */
    class PopUpEvent extends Event {
        /**
         * 添加一个弹出框，在执行完添加之后抛出。
         * @constant egret.gui.PopUpEvent.ADD_POPUP
         */
        static ADD_POPUP: string;
        /**
         * 移除一个弹出框，在执行完移除之后抛出。
         * @constant egret.gui.PopUpEvent.REMOVE_POPUP
         */
        static REMOVE_POPUP: string;
        /**
         * 移动弹出框到最前，在执行完前置之后抛出。
         * @constant egret.gui.PopUpEvent.BRING_TO_FRONT
         */
        static BRING_TO_FRONT: string;
        /**
         * 构造函数
         * @method egret.gui.PopUpEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param popUp {IVisualElement}
         * @param modal {boolean}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, popUp?: IVisualElement, modal?: boolean);
        /**
         * 弹出框对象
         * @member egret.gui.PopUpEvent#popUp
         */
        popUp: IVisualElement;
        /**
         * 弹出窗口是否为模态，此属性仅在事件类型为ADD_POPUP时有效。
         * @member egret.gui.PopUpEvent#modal
         */
        modal: boolean;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.PopUpEvent.dispatchPopUpEvent
         */
        static dispatchPopUpEvent(target: IEventDispatcher, type: string, popUp?: IVisualElement, modal?: boolean): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.RendererExistenceEvent
     * @classdesc
     * 在DataGroup添加或删除项呈示器时分派的事件。
     * @extends egret.Event
     */
    class RendererExistenceEvent extends Event {
        /**
         * 添加了项呈示器
         * @constant egret.gui.RendererExistenceEvent.RENDERER_ADD
         */
        static RENDERER_ADD: string;
        /**
         * 移除了项呈示器
         * @constant egret.gui.RendererExistenceEvent.RENDERER_REMOVE
         */
        static RENDERER_REMOVE: string;
        /**
         * @method egret.gui.RendererExistenceEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param renderer {IItemRenderer}
         * @param index {number}
         * @param data {any}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, renderer?: IItemRenderer, index?: number, data?: any);
        /**
         * 呈示器的数据项目。
         * @member egret.gui.RendererExistenceEvent#data
         */
        data: any;
        /**
         * 指向已添加或删除项呈示器的位置的索引。
         * @member egret.gui.RendererExistenceEvent#index
         */
        index: number;
        /**
         * 对已添加或删除的项呈示器的引用。
         * @member egret.gui.RendererExistenceEvent#renderer
         */
        renderer: IItemRenderer;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.RendererExistenceEvent.dispatchRendererExistenceEvent
         */
        static dispatchRendererExistenceEvent(target: IEventDispatcher, type: string, renderer?: IItemRenderer, index?: number, data?: any): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.StateChangeEvent
     * @classdesc
     * 视图状态改变事件
     * @extends egret.Event
     */
    class StateChangeEvent extends Event {
        /**
         * 当前视图状态已经改变
         * @constant egret.gui.StateChangeEvent.CURRENT_STATE_CHANGE
         */
        static CURRENT_STATE_CHANGE: string;
        /**
         * 当前视图状态即将改变
         * @constant egret.gui.StateChangeEvent.CURRENT_STATE_CHANGING
         */
        static CURRENT_STATE_CHANGING: string;
        /**
         * @method egret.gui.StateChangeEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param oldState {string}
         * @param newState {string}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, oldState?: string, newState?: string);
        /**
         * 组件正在进入的视图状态的名称。
         * @member egret.gui.StateChangeEvent#newState
         */
        newState: string;
        /**
         * 组件正在退出的视图状态的名称。
         * @member egret.gui.StateChangeEvent#oldState
         */
        oldState: string;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.StateChangeEvent.dispatchStateChangeEvent
         */
        static dispatchStateChangeEvent(target: IEventDispatcher, type: string, oldState?: string, newState?: string): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TrackBaseEvent
     * @classdesc
     * 从TrackBase组件分派的事件。
     * @extends egret.Event
     */
    class TrackBaseEvent extends Event {
        /**
         * 正在拖拽滑块
         * @constant egret.gui.TrackBaseEvent.THUMB_DRAG
         */
        static THUMB_DRAG: string;
        /**
         * 滑块被按下
         * @constant egret.gui.TrackBaseEvent.THUMB_PRESS
         */
        static THUMB_PRESS: string;
        /**
         * 滑块被放开
         * @constant egret.gui.TrackBaseEvent.THUMB_RELEASE
         */
        static THUMB_RELEASE: string;
        /**
         * 构造函数
         * @method egret.gui.TrackBaseEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.TrackBaseEvent.dispatchTrackBaseEvent
         */
        static dispatchTrackBaseEvent(target: IEventDispatcher, type: string): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TreeEvent
     * @classdesc
     * Tree事件
     * @extends egret.Event
     */
    class TreeEvent extends Event {
        /**
         * 节点关闭,注意：只有通过交互操作引起的节点关闭才会抛出此事件。
         * @constant egret.gui.TreeEvent.ITEM_CLOSE
         */
        static ITEM_CLOSE: string;
        /**
         * 节点打开,注意：只有通过交互操作引起的节点打开才会抛出此事件。
         * @constant egret.gui.TreeEvent.ITEM_OPEN
         */
        static ITEM_OPEN: string;
        /**
         * 子节点打开或关闭前一刻分派。可以调用preventDefault()方法阻止节点的状态改变。
         * @constant egret.gui.TreeEvent.ITEM_OPENING
         */
        static ITEM_OPENING: string;
        /**
         * @method egret.gui.TreeEvent#constructor
         * @param type {string}
         * @param bubbles {boolean}
         * @param cancelable {boolean}
         * @param itemIndex {number}
         * @param item {any}
         * @param itemRenderer {ITreeItemRenderer}
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, itemIndex?: number, item?: any, itemRenderer?: ITreeItemRenderer);
        /**
         * 触发鼠标事件的项呈示器数据源项。
         * @member egret.gui.TreeEvent#item
         */
        item: any;
        /**
         * 触发鼠标事件的项呈示器。
         * @member egret.gui.TreeEvent#itemRenderer
         */
        itemRenderer: ITreeItemRenderer;
        /**
         * 触发鼠标事件的项索引
         * @member egret.gui.TreeEvent#itemIndex
         */
        itemIndex: number;
        /**
         * 当事件类型为ITEM_OPENING时，true表示即将打开节点，反之关闭。
         * @member egret.gui.TreeEvent#opening
         */
        opening: boolean;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method egret.gui.TreeEvent.dispatchTreeEvent
         */
        static dispatchTreeEvent(target: IEventDispatcher, type: string, itemIndex?: number, item?: any, itemRenderer?: ITreeItemRenderer, opening?: boolean): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.LayoutBase
     * @classdesc
     * 容器布局基类
     * @extends egret.EventDispatcher
     */
    class LayoutBase extends EventDispatcher {
        /**
         * @method egret.gui.LayoutBase#constructor
         */
        constructor();
        private _target;
        /**
         * 目标容器
         * @member egret.gui.LayoutBase#target
         */
        target: GroupBase;
        private _useVirtualLayout;
        /**
         * 若要配置容器使用虚拟布局，请为与容器关联的布局的 useVirtualLayout 属性设置为 true。
         * 只有布局设置为 VerticalLayout、HorizontalLayout
         * 或 TileLayout 的 DataGroup 或 SkinnableDataContainer
         * 才支持虚拟布局。不支持虚拟化的布局子类必须禁止更改此属性。
         * @member egret.gui.LayoutBase#useVirtualLayout
         */
        useVirtualLayout: boolean;
        private _typicalLayoutRect;
        /**
         * 由虚拟布局所使用，以估计尚未滚动到视图中的布局元素的大小。
         * @member egret.gui.LayoutBase#typicalLayoutRect
         */
        typicalLayoutRect: Rectangle;
        /**
         * 滚动条位置改变
         * @method egret.gui.LayoutBase#scrollPositionChanged
         */
        scrollPositionChanged(): void;
        /**
         * 清理虚拟布局缓存的数据
         * @method egret.gui.LayoutBase#clearVirtualLayoutCache
         */
        clearVirtualLayoutCache(): void;
        /**
         * 在已添加布局元素之后且在验证目标的大小和显示列表之前，由目标调用。
         * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
         * @method egret.gui.LayoutBase#elementAdded
         * @param index {number}
         */
        elementAdded(index: number): void;
        /**
         * 必须在已删除布局元素之后且在验证目标的大小和显示列表之前，由目标调用此方法。
         * 按元素状态缓存的布局（比如虚拟布局）可以覆盖此方法以更新其缓存。
         * @method egret.gui.LayoutBase#elementRemoved
         * @param index {number}
         */
        elementRemoved(index: number): void;
        /**
         * 测量组件尺寸大小
         * @method egret.gui.LayoutBase#measure
         */
        measure(): void;
        /**
         * 更新显示列表
         * @method egret.gui.LayoutBase#updateDisplayList
         * @param width {number}
         * @param height {number}
         */
        updateDisplayList(width: number, height: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.BasicLayout
     * @classdesc
     * 基本布局
     * @extends egret.gui.LayoutBase
     */
    class BasicLayout extends LayoutBase {
        /**
         * @method egret.gui.BasicLayout#constructor
         */
        constructor();
        /**
         * 此布局不支持虚拟布局，设置这个属性无效
         */
        useVirtualLayout: boolean;
        private _mouseWheelSpeed;
        /**
         * 鼠标滚轮每次滚动时目标容器的verticalScrollPosition
         * 或horizontalScrollPosition改变的像素距离。必须大于0， 默认值20。
         * @member egret.gui.BasicLayout#mouseWheelSpeed
         */
        mouseWheelSpeed: number;
        /**
         * @method egret.gui.BasicLayout#getElementBoundsLeftOfScrollRect
         * @param scrollRect {Rectangle}
         * @returns {Rectangle}
         */
        getElementBoundsLeftOfScrollRect(scrollRect: Rectangle): Rectangle;
        /**
         * @method egret.gui.BasicLayout#getElementBoundsRightOfScrollRect
         * @param scrollRect {Rectangle}
         * @returns {Rectangle}
         */
        getElementBoundsRightOfScrollRect(scrollRect: Rectangle): Rectangle;
        /**
         * @method egret.gui.BasicLayout#getElementBoundsAboveScrollRect
         * @param scrollRect {Rectangle}
         * @returns {Rectangle}
         */
        getElementBoundsAboveScrollRect(scrollRect: Rectangle): Rectangle;
        /**
         * @method egret.gui.BasicLayout#getElementBoundsBelowScrollRect
         * @param scrollRect {Rectangle}
         * @returns {Rectangle}
         */
        getElementBoundsBelowScrollRect(scrollRect: Rectangle): Rectangle;
        /**
         * @method egret.gui.BasicLayout#measure
         */
        measure(): void;
        /**
         * @method egret.gui.BasicLayout#updateDisplayList
         * @param unscaledWidth {number}
         * @param unscaledHeight {number}
         */
        updateDisplayList(unscaledWidth: number, unscaledHeight: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.ColumnAlign
     * @classdesc
     * ColumnAlign 类为 TileLayout 类的 columnAlign 属性定义可能的值。
     */
    class ColumnAlign {
        /**
         * 不将行两端对齐。
         * @constant egret.gui.ColumnAlign.LEFT
         */
        static LEFT: string;
        /**
         * 通过增大水平间隙将行两端对齐。
         * @constant egret.gui.ColumnAlign.JUSTIFY_USING_GAP
         */
        static JUSTIFY_USING_GAP: string;
        /**
         * 通过增大行高度将行两端对齐。
         * @constant egret.gui.ColumnAlign.JUSTIFY_USING_WIDTH
         */
        static JUSTIFY_USING_WIDTH: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.RowAlign
     * @classdesc
     * RowAlign 类为 TileLayout 类的 rowAlign 属性定义可能的值。
     */
    class RowAlign {
        /**
         * 不进行两端对齐。
         * @constant egret.gui.RowAlign.TOP
         */
        static TOP: string;
        /**
         * 通过增大垂直间隙将行两端对齐。
         * @constant egret.gui.RowAlign.JUSTIFY_USING_GAP
         */
        static JUSTIFY_USING_GAP: string;
        /**
         * 通过增大行高度将行两端对齐。
         * @constant egret.gui.RowAlign.JUSTIFY_USING_HEIGHT
         */
        static JUSTIFY_USING_HEIGHT: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TileOrientation
     * @classdesc
     * TileOrientation 类为 TileLayout 类的 orientation 属性定义可能的值。
     */
    class TileOrientation {
        /**
         * 逐行排列元素。
         * @constant egret.gui.TileOrientation.ROWS
         */
        static ROWS: string;
        /**
         * 逐列排列元素。
         * @constant egret.gui.TileOrientation.COLUMNS
         */
        static COLUMNS: string;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.VerticalLayout
     * @classdesc
     * 垂直布局
     * @extends egret.gui.LayoutBase
     */
    class VerticalLayout extends LayoutBase {
        /**
         * @method egret.gui.VerticalLayout#constructor
         */
        constructor();
        private _horizontalAlign;
        /**
         * 布局元素的水平对齐策略。参考HorizontalAlign定义的常量。
         * @member egret.gui.VerticalLayout#horizontalAlign
         */
        horizontalAlign: string;
        private _verticalAlign;
        /**
         * 布局元素的竖直对齐策略。参考VerticalAlign定义的常量。
         * 注意：此属性设置为CONTENT_JUSTIFY始终无效。当useVirtualLayout为true时，设置JUSTIFY也无效。
         * @member egret.gui.VerticalLayout#verticalAlign
         */
        verticalAlign: string;
        private _gap;
        /**
         * 布局元素之间的垂直空间（以像素为单位）
         * @member egret.gui.VerticalLayout#gap
         */
        gap: number;
        private _padding;
        /**
         * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
         * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
         * @member egret.gui.VerticalLayout#padding
         */
        padding: number;
        private _paddingLeft;
        /**
         * 容器的左边缘与布局元素的左边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.VerticalLayout#paddingLeft
         */
        paddingLeft: number;
        private _paddingRight;
        /**
         * 容器的右边缘与布局元素的右边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.VerticalLayout#paddingRight
         */
        paddingRight: number;
        private _paddingTop;
        /**
         * 容器的顶边缘与第一个布局元素的顶边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.VerticalLayout#paddingTop
         */
        paddingTop: number;
        private _paddingBottom;
        /**
         * 容器的底边缘与最后一个布局元素的底边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.VerticalLayout#paddingBottom
         */
        paddingBottom: number;
        /**
         * 标记目标容器的尺寸和显示列表失效
         */
        private invalidateTargetSizeAndDisplayList();
        /**
         * @method egret.gui.VerticalLayout#measure
         */
        measure(): void;
        /**
         * 测量使用虚拟布局的尺寸
         */
        private measureVirtual();
        /**
         * 测量使用真实布局的尺寸
         */
        private measureReal();
        /**
         * @method egret.gui.VerticalLayout#updateDisplayList
         * @param width {number}
         * @param height {number}
         */
        updateDisplayList(width: number, height: number): void;
        /**
         * 虚拟布局使用的子对象尺寸缓存
         */
        private elementSizeTable;
        /**
         * 获取指定索引的起始位置
         */
        private getStartPosition(index);
        /**
         * 获取指定索引的元素尺寸
         */
        private getElementSize(index);
        /**
         * 获取缓存的子对象尺寸总和
         */
        private getElementTotalSize();
        /**
         * @method egret.gui.VerticalLayout#elementAdded
         * @param index {number}
         */
        elementAdded(index: number): void;
        /**
         * @method egret.gui.VerticalLayout#elementRemoved
         * @param index {number}
         */
        elementRemoved(index: number): void;
        /**
         * @method egret.gui.VerticalLayout#clearVirtualLayoutCache
         */
        clearVirtualLayoutCache(): void;
        /**
         * 折半查找法寻找指定位置的显示对象索引
         */
        private findIndexAt(y, i0, i1);
        /**
         * 虚拟布局使用的当前视图中的第一个元素索引
         */
        private startIndex;
        /**
         * 虚拟布局使用的当前视图中的最后一个元素的索引
         */
        private endIndex;
        /**
         * 视图的第一个和最后一个元素的索引值已经计算好的标志
         */
        private indexInViewCalculated;
        /**
         * @method egret.gui.VerticalLayout#scrollPositionChanged
         */
        scrollPositionChanged(): void;
        /**
         * 获取视图中第一个和最后一个元素的索引,返回是否发生改变
         */
        private getIndexInView();
        /**
         * 子对象最大宽度
         */
        private maxElementWidth;
        /**
         * 更新使用虚拟布局的显示列表
         */
        private updateDisplayListVirtual(width, height);
        /**
         * 更新使用真实布局的显示列表
         */
        private updateDisplayListReal(width, height);
        /**
         * 为每个可变尺寸的子项分配空白区域
         * @method egret.gui.VerticalLayout.flexChildrenProportionally
         * @param spaceForChildren {number}
         * @param spaceToDistribute {number}
         * @param totalPercent {number}
         * @param childInfoArray {Array<any>}
         */
        static flexChildrenProportionally(spaceForChildren: number, spaceToDistribute: number, totalPercent: number, childInfoArray: any[]): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.HorizontalLayout
     * @classdesc
     * 水平布局
     * @extends egret.gui.LayoutBase
     */
    class HorizontalLayout extends LayoutBase {
        /**
         * @method egret.gui.HorizontalLayout#constructor
         */
        constructor();
        private _horizontalAlign;
        /**
         * 布局元素的水平对齐策略。参考HorizontalAlign定义的常量。
         * 注意：此属性设置为CONTENT_JUSTIFY始终无效。当useVirtualLayout为true时，设置JUSTIFY也无效。
         * @member egret.gui.HorizontalLayout#horizontalAlign
         */
        horizontalAlign: string;
        private _verticalAlign;
        /**
         * 布局元素的竖直对齐策略。参考VerticalAlign定义的常量。
         * @member egret.gui.HorizontalLayout#verticalAlign
         */
        verticalAlign: string;
        private _gap;
        /**
         * 布局元素之间的水平空间（以像素为单位）
         * @member egret.gui.HorizontalLayout#gap
         */
        gap: number;
        private _padding;
        /**
         * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
         * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
         * @member egret.gui.HorizontalLayout#padding
         */
        padding: number;
        private _paddingLeft;
        /**
         * 容器的左边缘与布局元素的左边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.HorizontalLayout#paddingLeft
         */
        paddingLeft: number;
        private _paddingRight;
        /**
         * 容器的右边缘与布局元素的右边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.HorizontalLayout#paddingRight
         */
        paddingRight: number;
        private _paddingTop;
        /**
         * 容器的顶边缘与第一个布局元素的顶边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.HorizontalLayout#paddingTop
         */
        paddingTop: number;
        private _paddingBottom;
        /**
         * 容器的底边缘与最后一个布局元素的底边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.HorizontalLayout#paddingBottom
         */
        paddingBottom: number;
        /**
         * 标记目标容器的尺寸和显示列表失效
         */
        private invalidateTargetSizeAndDisplayList();
        /**
         * @method egret.gui.HorizontalLayout#measure
         */
        measure(): void;
        /**
         * 测量使用虚拟布局的尺寸
         */
        private measureVirtual();
        /**
         * 测量使用真实布局的尺寸
         */
        private measureReal();
        /**
         * @method egret.gui.HorizontalLayout#updateDisplayList
         * @param width {number}
         * @param height {number}
         */
        updateDisplayList(width: number, height: number): void;
        /**
         * 虚拟布局使用的子对象尺寸缓存
         */
        private elementSizeTable;
        /**
         * 获取指定索引的起始位置
         */
        private getStartPosition(index);
        /**
         * 获取指定索引的元素尺寸
         */
        private getElementSize(index);
        /**
         * 获取缓存的子对象尺寸总和
         */
        private getElementTotalSize();
        /**
         * @method egret.gui.HorizontalLayout#elementAdded
         * @param index {number}
         */
        elementAdded(index: number): void;
        /**
         * @method egret.gui.HorizontalLayout#elementRemoved
         * @param index {number}
         */
        elementRemoved(index: number): void;
        /**
         * @method egret.gui.HorizontalLayout#clearVirtualLayoutCache
         */
        clearVirtualLayoutCache(): void;
        /**
         * 折半查找法寻找指定位置的显示对象索引
         */
        private findIndexAt(x, i0, i1);
        /**
         * 虚拟布局使用的当前视图中的第一个元素索引
         */
        private startIndex;
        /**
         * 虚拟布局使用的当前视图中的最后一个元素的索引
         */
        private endIndex;
        /**
         * 视图的第一个和最后一个元素的索引值已经计算好的标志
         */
        private indexInViewCalculated;
        /**
         * @method egret.gui.HorizontalLayout#scrollPositionChanged
         */
        scrollPositionChanged(): void;
        /**
         * 获取视图中第一个和最后一个元素的索引,返回是否发生改变
         */
        private getIndexInView();
        /**
         * 子对象最大宽度
         */
        private maxElementHeight;
        /**
         * 更新使用虚拟布局的显示列表
         */
        private updateDisplayListVirtual(width, height);
        /**
         * 更新使用真实布局的显示列表
         */
        private updateDisplayListReal(width, height);
        /**
         * 为每个可变尺寸的子项分配空白区域
         * @method egret.gui.HorizontalLayout.flexChildrenProportionally
         * @param spaceForChildren {number}
         * @param spaceToDistribute {number}
         * @param totalPercent {number}
         * @param childInfoArray {Array<any>}
         */
        static flexChildrenProportionally(spaceForChildren: number, spaceToDistribute: number, totalPercent: number, childInfoArray: any[]): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.TileLayout
     * @classdesc
     * 格子布局
     * @extends egret.gui.LayoutBase
     */
    class TileLayout extends LayoutBase {
        /**
         * 构造函数
         * @method egret.gui.TileLayout#constructor
         */
        constructor();
        /**
         * 标记horizontalGap被显式指定过
         */
        private explicitHorizontalGap;
        private _horizontalGap;
        /**
         * 列之间的水平空间（以像素为单位）。
         * @member egret.gui.TileLayout#horizontalGap
         */
        horizontalGap: number;
        /**
         * 标记verticalGap被显式指定过
         */
        private explicitVerticalGap;
        private _verticalGap;
        /**
         * 行之间的垂直空间（以像素为单位）。
         * @member egret.gui.TileLayout#verticalGap
         */
        verticalGap: number;
        private _columnCount;
        /**
         * 实际列计数。
         * @member egret.gui.TileLayout#columnCount
         */
        columnCount: number;
        private _requestedColumnCount;
        /**
         * 要显示的列数。设置为0表示自动确定列计数,默认值0。<br/>
         * 注意:当orientation为TileOrientation.COLUMNS(逐列排列元素)且taget被显式设置宽度时，此属性无效。
         * @member egret.gui.TileLayout#requestedColumnCount
         */
        requestedColumnCount: number;
        private _rowCount;
        /**
         * 实际行计数。
         * @member egret.gui.TileLayout#rowCount
         */
        rowCount: number;
        private _requestedRowCount;
        /**
         * 要显示的行数。设置为0表示自动确定行计数,默认值0。<br/>
         * 注意:当orientation为TileOrientation.ROWS(即逐行排列元素,此为默认值)且target被显式设置高度时，此属性无效。
         * @member egret.gui.TileLayout#requestedRowCount
         */
        requestedRowCount: number;
        /**
         * 外部显式指定的列宽
         */
        private explicitColumnWidth;
        private _columnWidth;
        /**
         * 实际列宽（以像素为单位）。 若未显式设置，则从根据最宽的元素的宽度确定列宽度。
         * @member egret.gui.TileLayout#columnWidth
         */
        /**
         *  @private
         */
        columnWidth: number;
        /**
         * 外部显式指定的行高
         */
        private explicitRowHeight;
        private _rowHeight;
        /**
         * 行高（以像素为单位）。 如果未显式设置，则从元素的高度的最大值确定行高度。
         * @member egret.gui.TileLayout#rowHeight
         */
        /**
         *  @private
         */
        rowHeight: number;
        private _padding;
        /**
         * 四个边缘的共同内边距。若单独设置了任一边缘的内边距，则该边缘的内边距以单独设置的值为准。
         * 此属性主要用于快速设置多个边缘的相同内边距。默认值：0。
         * @member egret.gui.TileLayout#padding
         */
        padding: number;
        private _paddingLeft;
        /**
         * 容器的左边缘与布局元素的左边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.TileLayout#paddingLeft
         */
        paddingLeft: number;
        private _paddingRight;
        /**
         * 容器的右边缘与布局元素的右边缘之间的最少像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.TileLayout#paddingRight
         */
        paddingRight: number;
        private _paddingTop;
        /**
         * 容器的顶边缘与第一个布局元素的顶边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.TileLayout#paddingTop
         */
        paddingTop: number;
        private _paddingBottom;
        /**
         * 容器的底边缘与最后一个布局元素的底边缘之间的像素数,若为NaN将使用padding的值，默认值：NaN。
         * @member egret.gui.TileLayout#paddingBottom
         */
        paddingBottom: number;
        private _horizontalAlign;
        /**
         * 指定如何在水平方向上对齐单元格内的元素。
         * 支持的值有 HorizontalAlign.LEFT、HorizontalAlign.CENTER、
         * HorizontalAlign.RIGHT、HorizontalAlign.JUSTIFY。
         * 默认值：HorizontalAlign.JUSTIFY
         * @member egret.gui.TileLayout#horizontalAlign
         */
        horizontalAlign: string;
        private _verticalAlign;
        /**
         * 指定如何在垂直方向上对齐单元格内的元素。
         * 支持的值有 VerticalAlign.TOP、VerticalAlign.MIDDLE、
         * VerticalAlign.BOTTOM、VerticalAlign.JUSTIFY。
         * 默认值：VerticalAlign.JUSTIFY。
         * @member egret.gui.TileLayout#verticalAlign
         */
        verticalAlign: string;
        private _columnAlign;
        /**
         * 指定如何将完全可见列与容器宽度对齐。
         * 设置为 ColumnAlign.LEFT 时，它会关闭列两端对齐。在容器的最后一列和右边缘之间可能存在部分可见的列或空白。这是默认值。
         * 设置为 ColumnAlign.JUSTIFY_USING_GAP 时，horizontalGap 的实际值将增大，
         * 这样最后一个完全可见列右边缘会与容器的右边缘对齐。仅存在一个完全可见列时，
         * horizontalGap 的实际值将增大，这样它会将任何部分可见列推到容器的右边缘之外。
         * 请注意显式设置 horizontalGap 属性不会关闭两端对齐。它仅确定初始间隙值。两端对齐可能会增大它。
         * 设置为 ColumnAlign.JUSTIFY_USING_WIDTH 时，columnWidth 的实际值将增大，
         * 这样最后一个完全可见列右边缘会与容器的右边缘对齐。请注意显式设置 columnWidth 属性不会关闭两端对齐。
         * 它仅确定初始列宽度值。两端对齐可能会增大它。
         * @member egret.gui.TileLayout#columnAlign
         */
        columnAlign: string;
        private _rowAlign;
        /**
         * @member egret.gui.TileLayout#rowAlign
         */
        /**
         * 指定如何将完全可见行与容器高度对齐。
         * 设置为 RowAlign.TOP 时，它会关闭列两端对齐。在容器的最后一行和底边缘之间可能存在部分可见的行或空白。这是默认值。
         *
         * 设置为 RowAlign.JUSTIFY_USING_GAP 时，verticalGap 的实际值会增大，
         * 这样最后一个完全可见行底边缘会与容器的底边缘对齐。仅存在一个完全可见行时，verticalGap 的值会增大，
         * 这样它会将任何部分可见行推到容器的底边缘之外。请注意，显式设置 verticalGap
         * 不会关闭两端对齐，而只是确定初始间隙值。两端对齐接着可以增大它。
         *
         * 设置为 RowAlign.JUSTIFY_USING_HEIGHT 时，rowHeight 的实际值会增大，
         * 这样最后一个完全可见行底边缘会与容器的底边缘对齐。请注意，显式设置 rowHeight
         * 不会关闭两端对齐，而只是确定初始行高度值。两端对齐接着可以增大它。
         */
        rowAlign: string;
        private _orientation;
        /**
         * 指定是逐行还是逐列排列元素。
         * @member egret.gui.TileLayout#orientation
         */
        orientation: string;
        /**
         * 标记目标容器的尺寸和显示列表失效
         */
        private invalidateTargetSizeAndDisplayList();
        /**
         * @method egret.gui.TileLayout#measure
         */
        measure(): void;
        /**
         * 计算行和列的尺寸及数量
         */
        private calculateRowAndColumn(explicitWidth, explicitHeight);
        /**
         * 缓存的最大子对象宽度
         */
        private maxElementWidth;
        /**
         * 缓存的最大子对象高度
         */
        private maxElementHeight;
        /**
         * 更新最大子对象尺寸
         */
        private updateMaxElementSize();
        /**
         * 更新虚拟布局的最大子对象尺寸
         */
        private updateMaxElementSizeVirtual();
        /**
         * 更新真实布局的最大子对象尺寸
         */
        private updateMaxElementSizeReal();
        /**
         * @method egret.gui.TileLayout#clearVirtualLayoutCache
         */
        clearVirtualLayoutCache(): void;
        /**
         * 当前视图中的第一个元素索引
         */
        private startIndex;
        /**
         * 当前视图中的最后一个元素的索引
         */
        private endIndex;
        /**
         * 视图的第一个和最后一个元素的索引值已经计算好的标志
         */
        private indexInViewCalculated;
        /**
         * @method egret.gui.TileLayout#scrollPositionChanged
         */
        scrollPositionChanged(): void;
        /**
         * 获取视图中第一个和最后一个元素的索引,返回是否发生改变
         */
        private getIndexInView();
        /**
         * @method egret.gui.TileLayout#updateDisplayList
         * @param width {number}
         * @param height {number}
         */
        updateDisplayList(width: number, height: number): void;
        /**
         * 为单个元素布局
         */
        private sizeAndPositionElement(element, cellX, cellY, cellWidth, cellHeight);
        /**
         * 为两端对齐调整间隔或格子尺寸
         */
        private adjustForJustify(width, height);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.UILayer
     * @classdesc
     * UIStage的虚拟子容器
     * @implements egret.gui.IContainer
     */
    class UILayer implements IContainer {
        /**
         * 构造函数
         * @method egret.gui.UILayer#constructor
         * @param owner {IUIStage}
         * @param lowerBoundReference {string}
         * @param upperBoundReference {strin}
         */
        constructor(owner: IUIStage, lowerBoundReference: string, upperBoundReference: string);
        /**
         * 实体容器
         */
        private owner;
        /**
         * 容器下边界属性
         */
        private lowerBoundReference;
        /**
         * 容器上边界属性
         */
        private upperBoundReference;
        /**
         * @member egret.gui.UILayer#numElements
         */
        numElements: number;
        private raw_getElementAt;
        private raw_addElementAt;
        private raw_getElementIndex;
        private raw_removeElement;
        private raw_removeElementAt;
        private raw_setElementIndex;
        /**
         * @method egret.gui.UILayer#getElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        getElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.UILayer#addElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        addElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.UILayer#addElementAt
         * @param element {IVisualElement}
         * @param index {number}
         * @returns {IVisualElement}
         */
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
         * @method egret.gui.UILayer#removeElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        removeElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.UILayer#removeElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        removeElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.UILayer#getElementIndex
         * @param element {IVisualElement}
         * @returns {number}
         */
        getElementIndex(element: IVisualElement): number;
        /**
         * @method egret.gui.UILayer#setElementIndex
         * @param element {IVisualElement}
         * @param index {number}
         */
        setElementIndex(element: IVisualElement, index: number): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.UIStage
     * @classdesc
     * 系统管理器，应用程序顶级容器。
     * 通常情况下，一个程序应该只含有唯一的系统管理器,并且所有的组件都包含在它内部。
     * 它负责管理弹窗，鼠标样式，工具提示的显示层级，以及过滤鼠标和键盘事件为可以取消的。
     * @extends egret.gui.Group
     * @implements egret.gui.IUIStage
     */
    class UIStage extends Group implements IUIStage {
        /**
         * 构造函数
         * @method egret.gui.UIStage#constructor
         */
        constructor();
        /**
         * 添加到舞台
         */
        private onAddToStage(event?);
        /**
         * 从舞台移除
         */
        private onRemoveFromStage(event);
        /**
         * 舞台尺寸改变
         */
        private onResize(event?);
        private _autoResize;
        /**
         * 是否自动跟随舞台缩放。当此属性为true时，将强制让UIState始终与舞台保持相同大小。
         * 反之需要外部手动同步大小。默认值为true。
         * @member egret.gui.UIStage#autoResize
         */
        autoResize: boolean;
        /**
         * @constant egret.gui.UIStage#x
         */
        /**
         * @inheritDoc
         */
        x: number;
        /**
         * @constant egret.gui.UIStage#y
         */
        /**
         * @inheritDoc
         */
        y: number;
        /**
         * @member egret.gui.UIStage#width
         */
        /**
         * @inheritDoc
         */
        width: number;
        /**
         * @member egret.gui.UIStage#height
         */
        /**
         * @inheritDoc
         */
        height: number;
        /**
         * @member egret.gui.UIStage#scaleX
         */
        /**
         * @inheritDoc
         */
        scaleX: number;
        /**
         * @member egret.gui.UIStage#scaleY
         */
        /**
         * @inheritDoc
         */
        scaleY: number;
        /**
         * @method egret.gui.UIStage#setActualSize
         * @param w {number}
         * @param h {number}
         */
        setActualSize(w: number, h: number): void;
        /**
         * @method egret.gui.UIStage#setLayoutBoundsPosition
         * @param x {number}
         * @param y {number}
         */
        setLayoutBoundsPosition(x: number, y: number): void;
        /**
         * @method egret.gui.UIStage#setLayoutBoundsSize
         * @param layoutWidth {number}
         * @param layoutHeight {number}
         */
        setLayoutBoundsSize(layoutWidth: number, layoutHeight: number): void;
        /**
         * 布局对象,UIStage只接受BasicLayout
         * @member egret.gui.UIStage#layout
         */
        layout: LayoutBase;
        private _popUpContainer;
        /**
         * 弹出窗口层容器。
         * @member egret.gui.UIStage#popUpContainer
         */
        popUpContainer: IContainer;
        private _toolTipContainer;
        /**
         * 工具提示层容器。
         * @member egret.gui.UIStage#toolTipContainer
         */
        toolTipContainer: IContainer;
        private _cursorContainer;
        /**
         * 鼠标样式层容器。
         * @member egret.gui.UIStage#cursorContainer
         */
        cursorContainer: IContainer;
        private _noTopMostIndex;
        /**
         * 弹出窗口层的起始索引(包括)
         */
        private noTopMostIndex;
        private _topMostIndex;
        /**
         * 弹出窗口层结束索引(不包括)
         */
        private topMostIndex;
        private _toolTipIndex;
        /**
         * 工具提示层结束索引(不包括)
         */
        private toolTipIndex;
        private _cursorIndex;
        /**
         * 鼠标样式层结束索引(不包括)
         */
        private cursorIndex;
        /**
         * @method egret.gui.UIStage#addElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        addElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.UIStage#addElementAt
         * @param element {IVisualElement}
         * @param index {number}
         * @returns {IVisualElement}
         */
        addElementAt(element: IVisualElement, index: number): IVisualElement;
        /**
         * @method egret.gui.UIStage#removeElement
         * @param element {IVisualElement}
         * @returns {IVisualElement}
         */
        removeElement(element: IVisualElement): IVisualElement;
        /**
         * @method egret.gui.UIStage#removeElementAt
         * @param index {number}
         * @returns {IVisualElement}
         */
        removeElementAt(index: number): IVisualElement;
        /**
         * @method egret.gui.UIStage#removeAllElements
         */
        removeAllElements(): void;
        /**
         * @method egret.gui.UIStage#_elementRemoved
         * @param element {IVisualElement}
         * @param index {number}
         * @param notifyListeners {boolean}
         */
        _elementRemoved(element: IVisualElement, index: number, notifyListeners?: boolean): void;
        private raw_getElementAt(index);
        private raw_addElement(element);
        private raw_addElementAt(element, index);
        private raw_removeElement(element);
        private raw_removeElementAt(index);
        private raw_removeAllElements();
        private raw_getElementIndex(element);
        private raw_setElementIndex(element, index);
        private raw_swapElements(element1, element2);
        private raw_swapElementsAt(index1, index2);
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.PopUpManagerImpl
     * @classdesc
     * 窗口弹出管理器实现类
     * @extends egret.EventDispatcher
     * @implements egret.gui.IPopUpManager
     */
    class PopUpManagerImpl extends EventDispatcher implements IPopUpManager {
        /**
         * 构造函数
         * @method egret.gui.PopUpManagerImpl#constructor
         */
        constructor();
        private _popUpList;
        /**
         * 已经弹出的窗口列表
         * @member egret.gui.PopUpManagerImpl#popUpList
         */
        popUpList: any[];
        /**
         * 模态窗口列表
         */
        private popUpDataList;
        /**
         * 根据popUp获取对应的popUpData
         */
        private findPopUpData(popUp);
        private static REMOVE_FROM_UISTAGE;
        /**
         * 弹出一个窗口。<br/>
         * @method egret.gui.PopUpManagerImpl#addPopUp
         * @param popUp {IVisualElement} 要弹出的窗口
         * @param modal {boolean} 是否启用模态。即禁用弹出窗口所在层以下的鼠标事件。默认false。
         * @param center {boolean} 是否居中窗口。等效于在外部调用centerPopUp()来居中。默认true。
         */
        addPopUp(popUp: IVisualElement, modal?: boolean, center?: boolean): void;
        /**
         * 从舞台移除
         */
        private onRemoved(event);
        private _modalColor;
        /**
         * 模态遮罩的填充颜色
         * @member egret.gui.PopUpManagerImpl#modalColor
         */
        modalColor: number;
        private _modalAlpha;
        /**
         * 模态遮罩的透明度
         * @member egret.gui.PopUpManagerImpl#modalAlpha
         */
        modalAlpha: number;
        private invalidateModalFlag;
        /**
         * 标记一个UIStage的模态层失效
         */
        private invalidateModal();
        private validateModal(event);
        private modalMask;
        /**
         * 更新窗口模态效果
         */
        private updateModal(uiStage);
        /**
         * 移除由addPopUp()方法弹出的窗口。
         * @method egret.gui.PopUpManagerImpl#removePopUp
         * @param popUp {IVisualElement} 要移除的窗口
         */
        removePopUp(popUp: IVisualElement): void;
        /**
         * 将指定窗口居中显示
         * @method egret.gui.PopUpManagerImpl#centerPopUp
         * @param popUp {IVisualElement} 要居中显示的窗口
         */
        centerPopUp(popUp: IVisualElement): void;
        /**
         * 将指定窗口的层级调至最前
         * @method egret.gui.PopUpManagerImpl#bringToFront
         * @param popUp {IVisualElement} 要最前显示的窗口
         */
        bringToFront(popUp: IVisualElement): void;
    }
}
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
declare module egret.gui {
    /**
     * @class egret.gui.PopUpManager
     * @classdesc
     * 窗口弹出管理器<p/>
     * 若项目需要自定义弹出框管理器，请实现IPopUpManager接口，
     * 并在项目初始化前调用Injector.mapClass("egret.gui.IPopUpManager",YourPopUpManager)，
     * 注入自定义的弹出框管理器类。
     */
    class PopUpManager {
        /**
         * 构造函数
         * @method egret.gui.PopUpManager#constructor
         */
        constructor();
        private static _impl;
        /**
         * 获取单例
         */
        private static getImpl();
        /**
         * 模态遮罩的填充颜色
         * @member egret.gui.PopUpManager#modalColor
         */
        modalColor: number;
        /**
         * 模态遮罩的透明度
         * @member egret.gui.PopUpManager#modalAlpha
         */
        modalAlpha: number;
        /**
         * 弹出一个窗口。<br/>
         * @method egret.gui.PopUpManager.addPopUp
         * @param popUp {IVisualElement} 要弹出的窗口
         * @param modal {boolean} 是否启用模态。即禁用弹出窗口所在层以下的鼠标事件。默认false。
         * @param center {boolean} 是否居中窗口。等效于在外部调用centerPopUp()来居中。默认true。
         */
        static addPopUp(popUp: IVisualElement, modal?: boolean, center?: boolean): void;
        /**
         * 移除由addPopUp()方法弹出的窗口。
         * @method egret.gui.PopUpManager.removePopUp
         * @param popUp {IVisualElement} 要移除的窗口
         */
        static removePopUp(popUp: IVisualElement): void;
        /**
         * 将指定窗口居中显示
         * @method egret.gui.PopUpManager.centerPopUp
         * @param popUp {IVisualElement} 要居中显示的窗口
         */
        static centerPopUp(popUp: IVisualElement): void;
        /**
         * 将指定窗口的层级调至最前
         * @method egret.gui.PopUpManager.bringToFront
         * @param popUp {IVisualElement} 要最前显示的窗口
         */
        static bringToFront(popUp: IVisualElement): void;
        /**
         * 已经弹出的窗口列表
         * @member egret.gui.PopUpManager.popUpList
         */
        static popUpList: any[];
        /**
         * 添加事件监听,参考PopUpEvent定义的常量。
         * @method egret.gui.PopUpManager.addEventListener
         * @see org.flexlite.domUI.events.PopUpEvent
         * @param type {string}
         * @param listener {Function}
         * @param thisObject {any}
         * @param useCapture {boolean}
         * @param priority {number}
         */
        static addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
         * 移除事件监听,参考PopUpEvent定义的常量。
         * @method egret.gui.PopUpManager.removeEventListener
         * @see org.flexlite.domUI.events.PopUpEvent
         * @param type {string}
         * @param listener {Function}
         * @param thisObject {any}
         * @param useCapture {boolean}
         */
        static removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
    }
}
