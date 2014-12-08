/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class ObjectUtil
 * @constructor
 **/
module lcp {
    export class ObjectUtil {
        public CLASS_NAME:string = "ObjectUtil";

        /**
         * 搜索对象中是否包含一个属性
         * @param obj
         * @param member
         * @returns {boolean}
         */
        public static contains(obj:any, member:any):boolean {
            for (var prop in obj){
                if (obj.hasOwnProperty(prop) && obj[prop] == member){
                    return true;
                }
            }
            return false;
        }

        /**
         * 克隆一个副本
         * @param obj
         * @returns {any}
         */
        /*public static clone(obj:any):any {
            var byteArray = new egret.ByteArray();
            byteArray.writeByte(obj);
            byteArray.position = 0;
            return byteArray.readByte();
        }*/

        /**
         * 获取对象所有键存成数组
         * @param obj
         * @returns {Array<any>}
         */
        public static getKeys(obj:any):Array<any> {
            var keys:Array<any> = [];
            for (var i in obj)
                if(obj.hasOwnProperty(i))
                    keys.push(i);
            return keys;
        }

        /**
         * 判断一个对象是否包含一个特定的方法
         * @param obj
         * @param methodName
         * @returns {boolean}
         */
        public static isMethod(obj:any, methodName:string):boolean {
            if (obj.hasOwnProperty(methodName))
                return obj[methodName] instanceof Function;
            return false;
        }

        /**
         * 对象是否未定义
         * @param obj
         * @returns {boolean}
         */
        public static isUndefined(obj:any):boolean {
            return this.isNull(obj) || obj === undefined || typeof obj === 'undefined';
        }

        /**
         * 对象是否为null
         * @param obj
         * @returns {boolean}
         */
        public static isNull(obj:any):boolean {
            return obj === null || typeof obj === 'null' || obj == 0;
        }

        /**
         * 判断对象是否为空
         * @param obj
         * @returns {boolean}
         *
         *  <code>
         *      var testNumber:number = 0;
         *      var testArray:Array<any>   = [];
         *      var testString:string = "";
         *      var testObject:Object = {};
         *      console.log(lcp.ObjectUtil.isEmpty(testNumber)); // 输出 "true"
         *      console.log(lcp.ObjectUtil.isEmpty(testArray));  // 输出 "true"
         *      console.log(lcp.ObjectUtil.isEmpty(testString)); // 输出 "true"
         *      console.log(lcp.ObjectUtil.isEmpty(testObject)); // 输出 "true"
         *  </code>
         *
         */
        public static isEmpty(obj:any):boolean {
            if (obj == undefined)
                return true;

            if (typeof(obj) == "number")
                return isNaN(obj) || obj == 0;

            if (obj instanceof Array || typeof(obj) == "string")
                return obj.length == 0;

            if (obj instanceof Object) {
                for (var prop in obj)
                    if(obj.hasOwnProperty(prop))
                        return false;
                return true;
            }

            return false;
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