/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class SingletonUtil
 * @constructor
 **/
module lcp {
    export class SingletonUtil {
        public CLASS_NAME:string = "SingletonUtil";

        public static _singletonMap:any;
        public static _multitonMap:any;

        /**
         * 创建单例类,无需调整或扩展本身
         * @param type
         * @returns {any}
         */
        public static singleton(type:any):any {
            if (this._singletonMap == null)
                this._singletonMap = {};

            return type in this._singletonMap ? this._singletonMap[type] : this._singletonMap[type] = new type();
        }

        /**
         * 创建多例类,无需调整或扩展本身
         * @param type
         * @param id
         * @returns {any}
         */
        public static multiton(type:any, id:string):any {
            if (this._multitonMap == null)
                this._multitonMap = new {};

            if ( ! (type in this._multitonMap))
                this._multitonMap[type] = {};

            if ( ! (id in this._multitonMap[type]))
                this._multitonMap[type][id] = new type();

            return this._multitonMap[type][id];
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