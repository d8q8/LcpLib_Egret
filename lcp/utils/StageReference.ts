/**
 * Created by d8q8 on 2014/12/9.
 * @module lcp
 * @class StageReference
 * @constructor
 **/
module lcp {
    /**
     * 舞台引用类
     */
    export class StageReference {
        public CLASS_NAME:string = "StageReference";

        public static STAGE_DEFAULT:string = 'stageDefault';
        public static _stageMap:any;

        public constructor() {

        }

        /**
         * 返回一个舞台的引用
         * @param id
         * @returns {egret.Stage}
         */
        public static getStage(id:string = StageReference.STAGE_DEFAULT):egret.Stage {
            if (!(id in StageReference._getMap()))
                LTrace.trace('在没有设置之前是不能获取到舞台的 ("' + id + '") 的.');

            return StageReference._getMap()[id];
        }

        /**
         * 存储一个舞台的引用
         * @param stage
         * @param id
         */
        public static setStage(stage:egret.Stage, id:string = StageReference.STAGE_DEFAULT):void {
            StageReference._getMap()[id] = stage;
        }

        /**
         * 移除存储的舞台引用
         * @param id
         * @returns {boolean}
         */
        public static removeStage(id:string = StageReference.STAGE_DEFAULT):boolean {
            if (!(id in StageReference._getMap()))
                return false;

            StageReference.setStage(null, id);

            return true;
        }

        /**
         * 查找舞台所有的ID
         * @returns {Array<any>}
         */
        public static getIds():Array<any> {
            return ObjectUtil.getKeys(StageReference._getMap());
        }

        /**
         * 查找一个舞台ID的标识
         * @param stage
         * @returns {*}
         */
        public static getStageId(stage:egret.Stage):string {
            var map:any = StageReference._getMap();

            for (var i in map)
                if (map[i] == stage)
                    return i;

            return null;
        }

        public static _getMap():any {
            if (StageReference._stageMap == null)
                StageReference._stageMap = {};

            return StageReference._stageMap;
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