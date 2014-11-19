/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class IList
 * @constructor
 **/
module lcp {
    /**
     * 列表接口类
     */
    export interface IList {
        addItem(item:any):boolean;
        addItemAt(item:any, index:number = 0):boolean;
        addItems(items:IList):boolean;
        addItemsAt(items:IList, index:number = 0x7fffffff):boolean;
        clear():void;
        contains(item:any):boolean;
        containsAll(items:IList):boolean;
        equals(list:IList):boolean;
        getItemAt(index:number = 0):any;
        subList(startIndex:number = 0, endIndex:number = 16777215):IList;
        indexOf(item:any, fromIndex:number = 0):number;
        isEmpty():boolean;
        lastIndexOf(item:any, fromIndex:number = 0x7fffffff):number;
        size:number;
        removeAllInstancesOfItem(item:any):boolean;
        removeItem(item:any):boolean;
        removeItemAt(index:number = 0):any;
        removeItems(items:IList):boolean;
        retainItems(items:IList):boolean;
        setItem(item:any, index:number = 0):any;
        toArray():Array<any>;
        clone():IList;
        toString():string
    }
}