/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class LOrder
 * @constructor
 **/
module lcp {
    export enum OrderByType{
        CASEINSENSITIVE = 1,        //指定 Array 类排序方法为不区分大小写的排序。
        DESCENDING = 2,             //指定 Array 类排序方法为降序排序。
        UNIQUESORT = 4,             //指定 Array 类排序方法的唯一排序要求。
        RETURNINDEXEDARRAY = 8,     //指定排序返回的数组包含数组索引。
        NUMERIC = 16                //指定 Array 类排序方法为数值（而不是字符串）排序。
    }

    export class LOrder {
        public CLASS_NAME:string = "LOrder";

        public constructor() {

        }

        /**
         * 降序
         * @param a
         * @param b
         * @returns {number}
         */
        private static desc(a:Object,b:Object):number{
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a > b ? -1 : 1;
            }
            return typeof a > typeof b ? -1 : 1;
        }

        /**
         * 升序
         * @param a
         * @param b
         * @returns {number}
         */
        private static asc(a:Object,b:Object):number{
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }

        /**
         * 对数组中的元素进行排序
         * @param arr 待排序数组
         * @param orderBy 升序或降序,升序默认
         * @returns {Array<any>}
         */
        public static sort(arr:Array<any>, orderBy?:any):Array<any>{
            if(!arr) return;
            var temp_arr:Array<any> = arr;
            if(orderBy) {
                if(typeof orderBy === 'function'){
                    temp_arr.sort(orderBy);
                }
                else {
                    if(orderBy == OrderByType.DESCENDING){
                        temp_arr.sort(LOrder.desc);
                    }
                    else{
                        temp_arr.sort(LOrder.asc);
                    }
                }
            }
            else{
                temp_arr.sort(LOrder.asc);
            }
            return temp_arr;
        }

        /**
         * 根据数组中的一个或多个字段对数组中的元素进行排序。
         * @param arr 待排序数组
         * @param fieldName 按字典中的key排序
         * @param orderBy 升序/降序,升序默认
         */
        public static sortOn(arr:Array<any>, fieldName:string, orderBy?:any):Array<any>{
            if(!arr) return;
            var temp_arr:Array<any> = arr;
            var order_by = (o,p)=>{
                var a:any, b:any;
                if (typeof o === "object" && typeof p === "object" && o && p) {
                    a = o[fieldName];
                    b = p[fieldName];
                    if(orderBy) {
                        if(typeof orderBy === 'function'){
                            return orderBy;
                        }
                        else {
                            if(orderBy == OrderByType.DESCENDING){
                                return LOrder.desc(a,b);
                            }
                            else{
                                return LOrder.asc(a,b);
                            }
                        }
                    }
                    else{
                        return LOrder.asc(a,b);
                    }
                }
                else {
                    LTrace.trace("sort error");
                }
            };
            temp_arr.sort(order_by);
            return temp_arr;
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        }
    }
}