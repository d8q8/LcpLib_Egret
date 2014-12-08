/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class DisplayObjectUtil
 * @constructor
 **/
module lcp {
    /**
     * 显示对象工具类
     */
    export class DisplayObjectUtil {
        public CLASS_NAME:string = "DisplayObjectUtil";

        public constructor() {

        }

        /**
         * 移除所有子元件
         * @param parent 父元件
         * @param destroyChildren 是否销毁子元件
         * @param recursive 是否递归移除
         */
        public static removeAllChildren(parent:egret.DisplayObject, destroyChildren:boolean = false, recursive:boolean = false):void {
            var container = <egret.DisplayObjectContainer>parent;
            while (container.numChildren)
                DisplayObjectUtil._checkChild(container.removeChildAt(0), destroyChildren, recursive);
        }

        /**
         * 获取所有元件
         * @param parent
         * @returns {Array<any>}
         */
        public static getChildren(parent:egret.DisplayObjectContainer):Array<any> {
            var children:Array<any> = [];
            var i:number            = -1;

            while (++i < parent.numChildren)
                children.push(parent.getChildAt(i));

            return children;
        }

        /**
         * 返回x和y偏移到DisplayObject左上角。该偏移可以用来定位的DisplayObject的对齐点不在(0，0)和或者缩放。
         * @param displayObject
         * @returns {egret.Point}
         */
        public static getOffsetPosition(displayObject:egret.DisplayObject):egret.Point {
            var bounds:egret.Rectangle = displayObject.getBounds();
            var offset:egret.Point     = new egret.Point();

            offset.x = (displayObject.scaleX > 0) ? bounds.x * displayObject.scaleX * -1 : bounds.right * displayObject.scaleX * -1;
            offset.y = (displayObject.scaleY > 0) ? bounds.y * displayObject.scaleY * -1 : bounds.bottom * displayObject.scaleY * -1;

            return offset;
        }

        /**
         * 返回在指定的名称所提供的DisplayObjectContainer存在显示树的第一显示对象。
         * @param parent
         * @param name
         * @returns {*}
         */
        public static getChildByNameRecursive(parent:egret.DisplayObjectContainer, name:string):egret.DisplayObject {
            var child:egret.DisplayObject = parent.getChildByName(name);
            if (child != null)
                return child;

            var i:number = -1;
            while (++i < parent.numChildren) {
                child = parent.getChildAt(i);
                if (child instanceof egret.DisplayObjectContainer) {
                    child = DisplayObjectUtil.getChildByNameRecursive(<egret.DisplayObjectContainer>child, name);
                    if (child != null)
                        return child;
                }
            }
            return null;
        }


        public static _checkChild(child:egret.DisplayObject, destroy:boolean, recursive:boolean):void {
            if (destroy && child instanceof CSprite) {
                var dest = <CSprite>child;
                if (!dest.isDestroyed)
                    dest.destroy();
            }
            if (recursive)
                DisplayObjectUtil.removeAllChildren(child, destroy, recursive);
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