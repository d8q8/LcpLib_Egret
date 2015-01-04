/**
 * Created by d8q8 on 2014/11/6.
 * @module lcp
 * @class LHelper
 * @constructor
 **/
module lcp {
    enum LayerType{
        TOP_LAYER = Number.MAX_VALUE,
        BOTTOM_LAYER = Number.MIN_VALUE,
        UP_LAYER = Number.POSITIVE_INFINITY,
        DOWN_LAYER = Number.NEGATIVE_INFINITY
    }

    /**
     * 辅助帮助类
     */
    export class LHelper {
        public CLASS_NAME:string = "LHelper";

        public constructor() {
            egret.Logger.warning("不可以实例化"+this.CLASS_NAME+"类,这是静态帮助类");
        }

        /**
         * 子元件初始化
         * @param $container 父容器
         * @param $target 子元件
         * @param $proper 子属性
         * @param $depth 深度
         * @returns {DisplayObject} 返回子元件
         *
         * 使用方法示例如下:
         * lcp.LHelper.addChildAndInit(this, new LogoMC,{x:100,y:100},20);
         *
         */
        public static addChildAndInit($container:egret.DisplayObjectContainer, $target:egret.DisplayObject, $proper?:Object, $depth:number = -1 ):any{
            $container.addChild($target);
            LVars.some($target, $proper);

            if ($depth != -1)
                LHelper.toLayer($target, $depth);

            return $target;
        }

        /**
         * 清除DisplayObjectContainer的所有孩子
         * @param $target * 要处理的对象/可以传入数组[mc1,mc2,...]
         * @returns {boolean} 成功返回true,否则false
         */
        public static clear($target?:any):boolean {
            if (!$target) { return false }

            var target_array:Array<any> = [];
            var bool:boolean = false;
            if ($target instanceof Array)
                target_array = $target.concat();
            else
                target_array = [$target];

            for (var i:number = 0; i < target_array.length; i++ ) {
                var target_object:any = target_array[i];
                if (!(target_object instanceof egret.DisplayObjectContainer))
                    continue;

                if (target_object.numChildren == 0)
                    continue;
                for (var j:number = target_object.numChildren - 1; j >= 0; j-- ){
                    target_object.removeChildAt(j);
                }
                bool = true;
            }

            if(bool)
                return true;
            else
                return false;
        }

        /**
         * 将diaplayObject移至所在容器的最顶层
         *
         * @param $target Object * 要处理的对象
         * @return Boolean 成功返回true,否则false
         */
        public static toTop($target?:any):boolean {
            if (!$target) { return false };
            if (!$target.parent) { return false };

            var target_container:egret.DisplayObjectContainer = <egret.DisplayObjectContainer> ($target.parent);
            target_container.setChildIndex(<egret.DisplayObject> $target, target_container.numChildren - 1);
            return true;
        }

        /**
         * 将diaplayObject移至所在容器的最底层
         *
         * @param $target Object * 要处理的对象
         * @return Boolean 成功返回true,否则false
         */
        public static toBottom($target?:any):boolean {
            if (!$target) { return false };
            if ($target.parent == null) { return false };

            var target_container:egret.DisplayObjectContainer = <egret.DisplayObjectContainer> ($target.parent);
            target_container.setChildIndex(<egret.DisplayObject> $target, 0);
            return true;
        }

        /**
         * 将diaplayObject移至所在容器的指定层级
         * 注：当层级超过容器时，为顶层；负数是为底层。
         *
         * @param $target Object * 要处理的对象
         * @param $layer Number	* 指定要移动到的层级
         * @return Boolean 成功返回true,否则false
         */
        public static toLayer($target?:any,$layer:number = Number.MAX_VALUE):boolean {
            if (!$target) { return false };
            if (!$target.parent) { return false };

            var target_container:egret.DisplayObjectContainer = <egret.DisplayObjectContainer><any> ($target.parent);
            var index:number;
            switch ($layer){
                case Number.MAX_VALUE:
                    index = target_container.numChildren - 1;
                    break;
                case LayerType.TOP_LAYER:
                    index = target_container.numChildren - 1;
                    break;
                case LayerType.BOTTOM_LAYER:
                    index = 0;
                    break;
                case LayerType.UP_LAYER:
                    index = target_container.getChildIndex(<egret.DisplayObject> $target) + 1;
                    break;
                case LayerType.DOWN_LAYER:
                    index = target_container.getChildIndex(<egret.DisplayObject> $target) - 1;
                    break;
                default:
                    index = $layer;
                    break;
            }

            index = index > (target_container.numChildren - 1)?(target_container.numChildren - 1):index;
            index = index < 0?0:index;
            target_container.setChildIndex(<egret.DisplayObject> $target, index);
            return true;
        }

        /**
         * 显示对象所有孩子对齐到整数点
         * @param $target * 要处理的对象
         */
        public static autoAlgin($target?:egret.DisplayObjectContainer):void{
            var depth:number = $target.numChildren;
            if ($target == null) return;
            var algin = ($target) => {
                $target.x=Math.floor($target.x);
                $target.y=Math.floor($target.y);
            };

            algin($target);
            if (depth == 0) return  ;
            for (var i:number = 0; i < depth; i++ ){
                var sub:egret.DisplayObject = $target.getChildAt(i);
                algin(sub);
                if(sub instanceof egret.DisplayObjectContainer)
                    LHelper.autoAlgin(<egret.DisplayObjectContainer> sub);
            }
        }

        /**
         * 应用混入类
         * @param derivedCtor 初始类
         * @param baseCtors 混入类数组
         */
        public static applyMixins(derivedCtor: any, baseCtors: any[]) {
            baseCtors.forEach(baseCtor => {
                Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                })
            });
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            return this.CLASS_NAME;
        }
    }
}

