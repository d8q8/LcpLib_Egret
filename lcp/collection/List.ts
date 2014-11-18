/**
 * Created by d8q8 on 2014/11/18.
 * @module Lcp
 * @class List
 * @constructor
 **/
module lcp {
	/**
	 * 列表类
	 */
	export class List implements IList {
		public _collection:Array<any>;

		/**
		 * 创建一个新的List表
		 * @param collection
		 */
		public constructor(collection:Array<any> = null) {
			this._collection = (collection == null) ? new Array<any>() : collection.concat();
		}

		/**
		 * 新增单项到列表中
		 * @param item
		 * @returns {boolean}
		 */
		public addItem(item:any):boolean {
			this._collection.push(item);
			
			return true;
		}

		/**
		 * 新增单项到指定列表索引处
		 * @param item
		 * @param index
		 * @returns {boolean}
		 */
		public addItemAt(item:any, index:number = 0):boolean {
			this._collection.splice(index, 0, item);
			
			return true;
		}

		/**
		 * 新增多项到list中
		 * @param items
		 * @returns {boolean}
		 */
		public addItems(items:IList):boolean {
			this._collection = this._collection.concat(items.toArray());
			
			return true;
		}

		/**
		 * 新增多顶到指定列表索引处
		 * @param items
		 * @param index
		 * @returns {boolean}
		 */
		public addItemsAt(items:IList, index:number = 0x7fffffff):boolean {
			return ArrayUtil.addItemsAt(this._collection, items.toArray(), index);
		}

		/**
		 * 清空列表
		 */
		public clear():void {
			this._collection.splice(0);
		}

		/**
		 * 判断单项是否在列表中
		 * @param item
		 * @returns {boolean}
		 */
		public contains(item:any):boolean {
			return (this.indexOf(item) == -1) ? false : true;
		}

		/**
		 * 是否包含多项是否在列表中
		 * @param items
		 * @returns {boolean}
		 */
		public containsAll(items:IList):boolean {
			return ArrayUtil.containsAll(this._collection, items.toArray());
		}

		/**
		 * 判断指定列表是否相等
		 * @param list
		 * @returns {boolean}
		 */
		public equals(list:IList):boolean {
			return ArrayUtil.equals(this._collection, list.toArray());
		}

		/**
		 * 获取索引位置的列表元素
		 * @param index
		 * @returns {any}
		 */
		public getItemAt(index:number = 0):any {
			return this._collection[index];
		}

		/**
		 * 返回列表的一部分
		 * @param startIndex
		 * @param endIndex
		 * @returns {lcp.List}
		 */
		public subList(startIndex:number = 0, endIndex:number = 16777215):IList {
			return new List(this._collection.slice(startIndex, endIndex));
		}

		/**
		 * 搜索指定项第一次出现在列表中的位置
		 * @param item
		 * @param fromIndex
		 * @returns {number}
		 */
		public indexOf(item:any, fromIndex:number = 0):number {
			return this._collection.indexOf(item, fromIndex);
		}

		/**
		 * 判断列表是否有元素
		 * @returns {boolean}
		 */
		public isEmpty():boolean {
			return this.size == 0;
		}

		/**
		 * 搜索指定值在列表最后出现位置
		 * @param item
		 * @param fromIndex
		 * @returns {number}
		 */
		public lastIndexOf(item:any, fromIndex:number = 0x7fffffff):number {
			return this._collection.lastIndexOf(item, fromIndex);
		}

		/**
		 * 列表元素个数
		 * @returns {number}
		 */
		public get size():number {
			return this._collection.length;
		}

		/**
		 * 删除所有指定的项
		 * @param item
		 * @returns {boolean}
		 */
		public removeAllInstancesOfItem(item:any):boolean {
			return ArrayUtil.removeItem(this._collection, item) != 0;
		}

		/**
		 * 删除指定项
		 * @param item
		 * @returns {boolean}
		 */
		public removeItem(item:any):boolean {
			var i:number = this._collection.indexOf(item);
			
			if (i == -1)
				return false;
			
			this._collection.splice(i, 1);
			
			return true;
		}

		/**
		 * 从索引处删除指定项
		 * @param index
		 * @returns {any}
		 */
		public removeItemAt(index:number = 0):any {
			return this._collection.splice(index, 1)[0];
		}

		/**
		 * 删除多个指定项
		 * @param items
		 * @returns {boolean}
		 */
		public removeItems(items:IList):boolean {
			return ArrayUtil.removeItems(this._collection, items.toArray());
		}

		/**
		 * 保留多个指定项
		 * @param items
		 * @returns {boolean}
		 */
		public retainItems(items:IList):boolean {
			return ArrayUtil.retainItems(this._collection, items.toArray());
		}

		/**
		 * 替换指定项
		 * @param item
		 * @param index
		 * @returns {any}
		 */
		public setItem(item:any, index:number = 0):any {
			return this._collection.splice(index, 1, item)[0];
		}

		/**
		 * 列表转数组
		 * @returns {any[]}
		 */
		public toArray():Array<any> {
			return this._collection.concat();
		}

		/**
		 * 创建一个副本
		 * @returns {lcp.List}
		 */
		public clone():IList {
			return new List(this.toArray());
		}

		/**
		 * 返回字符
		 * @returns {string}
		 */
		public toString():string {
			return this._collection.toString();
		}
	}
}