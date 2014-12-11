/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class QueryStringUtil
 * @constructor
 **/
module lcp {
    /**
     * 查询字符串类
     */
    export class QueryStringUtil {
        public CLASS_NAME:string = "QueryStringUtil";

        public static _query:string;
        public static _hasRequested:boolean;
        public static _pairMap:any;

        /**
         * 获取浏览器URL的键值对
         * @returns {string}
         */
        public static get queryString():string {
            if (!this._hasRequested) {
                this._hasRequested = true;

                if (egret.ExternalInterface) {
                    try {
                        //var query:string = egret.ExternalInterface.call('document.location.search.toString');
                        var query:string = "";//这里暂时先放着吧.
                        if (query != '' && query != null) {
                            this._query = query.substring(1);

                            var pairs:Array<string> = this._query.split('&');
                            var i:number         = -1;
                            var pair:Array<string> = [];

                            this._pairMap = {};

                            while (++i < pairs.length) {
                                pair = pairs[i].split('=');
                                this._pairMap[pair[0]] = pair[1];
                            }
                        }
                    } catch (e) {}
                }
            }

            return this._query;
        }

        /**
         * 从键中返回一个值
         * @param key
         * @returns {*}
         */
        public static getValue(key:string):string {
            if (this.queryString == null)
                return null;

            return this._pairMap[key];
        }

        /**
         * 检测键是否存在
         * @param key
         * @returns {boolean}
         */
        public static hasKey(key:string):boolean {
            return this.getValue(key) ? true : false;
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