/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LVars
 * @constructor
 **/
module Lcp{
    /**
     * 本想做个全局变参处理的,暂时还没考虑清楚,先放着,以后跟进(未完善)
     */
    export class LVars{
        public CLASS_NAME:string = "LVars";

        private _vars:Object;
        public constructor(vars:Object=null) {
            this._vars = {};
            if(vars != null){
                for(var p in vars){
                    this._vars[p] = vars[p];
                }
            }
        }

        private _set(property:string, value:any):LVars {
            if(value == null){
                delete this._vars[property];
            }
            else{
                this._vars[property] = value;
            }
            return this;
        }

        public get vars():Object{
            return this._vars;
        }

    }
}
