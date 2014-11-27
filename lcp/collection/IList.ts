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
        addItemAt(item:any, index:number):boolean;
        addItems(items:IList):boolean;
        addItemsAt(items:IList, index:number):boolean;
        clear():void;
        contains(item:any):boolean;
        containsAll(items:IList):boolean;
        equals(list:IList):boolean;
        getItemAt(index:number):any;
        subList(startIndex:number, endIndex:number):IList;
        indexOf(item:any, fromIndex:number):number;
        isEmpty():boolean;
        lastIndexOf(item:any, fromIndex:number):number;
        size:number;
        removeAllInstancesOfItem(item:any):boolean;
        removeItem(item:any):boolean;
        removeItemAt(index:number):any;
        removeItems(items:IList):boolean;
        retainItems(items:IList):boolean;
        setItem(item:any, index:number):any;
        toArray():Array<any>;
        clone():IList;
        toString():string;
    }
}