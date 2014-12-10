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
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop) && obj[prop] == member) {
                    return true;
                }
            }
            return false;
        }

        /**
         * 克隆一个深副本(官方暂时不支持对象写入和读取,先放着吧)
         * @param obj
         * @returns {any}
         */
        /*public static clone(obj:any):any {
         var byteArray = new egret.ByteArray();
         byteArray.writeObject(obj);
         byteArray.position = 0;
         return byteArray.readObject();
         }*/
        /**
         * 换一种方式对象克隆
         * @param obj
         * @param deep
         * @returns {any}
         */
        public static clone(obj:any, deep:boolean = false):any {
            if (obj instanceof Array) {
                return ObjectUtil.arrayClone(obj, deep);
            }
            else if (typeof obj == "function") {
                return ObjectUtil.functionClone(obj, deep);
            }
            else if (obj instanceof Date) {
                return ObjectUtil.dateClone(obj, deep);
            }
            else if (obj instanceof Object) {
                return ObjectUtil.objectClone(obj, deep);
            }
            else {
                return obj;
            }
        }

        /**
         * 属性克隆
         * @param obj
         * @returns {*}
         */
        public static propClone(obj:any):any{
            if (obj instanceof Array) {
                return ObjectUtil.arrayPrototypeClone(obj);
            }
            else if (typeof obj == "function") {
                return ObjectUtil.functionPrototypeClone(obj);
            }
            else if (obj instanceof Date) {
                return ObjectUtil.datePrototypeClone(obj);
            }
            else if (obj instanceof Object) {
                return ObjectUtil.objectPrototypeClone(obj);
            }
            else {
                return obj;
            }
        }

        /**
         * 对象克隆
         * @param obj
         * @param deep
         * @returns {any}
         */
        public static objectClone(obj:any, deep:boolean = false):any {
            var buf:any = {};
            for (var p in obj) {
                buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
            }
            return buf;
        }

        /**
         * 对象属性克隆
         * @param obj
         * @returns {any}
         */
        public static objectPrototypeClone(obj:any):any {
            var tmp = ()=> {
            };
            tmp.prototype = obj;
            var buf:any = new tmp();
            return buf;
        }

        /**
         * 数组克隆
         * @param obj
         * @param deep
         * @returns {Array<any>}
         */
        public static arrayClone(obj:Array<any>, deep:boolean = false):Array<any> {
            var buf:Array<any> = [];
            var i = obj.length;
            while (i--) {
                buf[i] = deep ? arguments.callee(obj[i]) : obj[i];
            }
            return buf;
        }

        /**
         * 数组属性克隆
         * @param obj
         * @returns {Array<any>}
         */
        public static arrayPrototypeClone(obj:any):Array<any> {
            var tmp:Array<any> = Array.prototype;
            Array.prototype = obj;
            var buf:Array<any> = [];
            Array.prototype = obj;
            return buf;
        }
        /**
         * 函数克隆
         * @param obj
         * @param deep
         * @returns {Function}
         */
        public static functionClone(obj:Function, deep:boolean = false):Function {
            var buf:Function = Function(<string>("return ") + obj)();
            for (var p in obj)
                buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
            return buf;
        }

        /**
         * 函数属性克隆
         * @param obj
         * @returns {Function}
         */
        public static functionPrototypeClone(obj:Function):Function {
            var tmp = Function.prototype;
            Function.prototype = obj;
            var buf:Function = (new Function(<string>("return ") + this))();
            Function.prototype = obj;
            return buf;
        }

        /**
         * 时间克隆
         * @param obj
         * @param deep
         * @returns {Date}
         */
        public static dateClone(obj:Date, deep:boolean = false):Date {
            var buf = new Date();
            buf.setTime(obj.getTime());
            for (var p in obj)
                buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
            return buf;
        }

        /**
         * 时间属性克隆
         * @param obj
         * @returns {Date}
         */
        public static datePrototypeClone(obj:Date):Date {
            var tmp:Date = Date.prototype;
            Date.prototype = obj;
            var buf = new Date();
            buf.setTime(obj.getTime());
            Date.prototype = tmp;
            return buf;
        }
        /**
         * 获取对象所有键存成数组
         * @param obj
         * @returns {Array<any>}
         */
        public static getKeys(obj:any):Array<any> {
            var keys:Array<any> = [];
            for (var i in obj)
                if (obj.hasOwnProperty(i))
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
                    if (obj.hasOwnProperty(prop))
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