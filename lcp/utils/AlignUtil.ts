/**
 * Created by d8q8 on 2014/12/10.
 * @module lcp
 * @class AlignUtil
 * @constructor
 **/
module lcp {
    /**
     * 对齐工具类
     */
    export class AlignUtil {
        public CLASS_NAME:string = "AlignUtil";

        public static BOTTOM:string        = 'bottom';
        public static BOTTOM_CENTER:string = 'bottomCenter';
        public static BOTTOM_LEFT:string   = 'bottomLeft';
        public static BOTTOM_RIGHT:string  = 'bottomRight';
        public static CENTER:string        = 'center';
        public static LEFT:string          = 'left';
        public static MIDDLE:string        = 'middle';
        public static MIDDLE_CENTER:string = 'middleCenter';
        public static MIDDLE_LEFT:string   = 'middleLeft';
        public static MIDDLE_RIGHT:string  = 'middleRight';
        public static RIGHT:string         = 'right';
        public static TOP:string           = 'top';
        public static TOP_CENTER:string    = 'topCenter';
        public static TOP_LEFT:string      = 'topLeft';
        public static TOP_RIGHT:string     = 'topRight';

        public constructor() {

        }

        /**
         * 将一个DisplayObject根据定义的边界矩形排列。
         * @param alignment
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static align(alignment:string, displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            var offsetPosition:egret.Point = DisplayObjectUtil.getOffsetPosition(displayObject);

            switch (alignment) {
                case AlignUtil.TOP :
                case AlignUtil.MIDDLE :
                case AlignUtil.BOTTOM :
                    break;
                default :
                    displayObject.x = offsetPosition.x;
            }

            switch (alignment) {
                case AlignUtil.LEFT :
                case AlignUtil.CENTER :
                case AlignUtil.RIGHT :
                    break;
                default :
                    displayObject.y = offsetPosition.y;
            }

            var alignPosition:egret.Point   = AlignUtil._getPosition(alignment, displayObject.width, displayObject.height, bounds, outside);
            var relPosition:egret.Rectangle = targetCoordinateSpace == null ? displayObject.getBounds() : targetCoordinateSpace.getBounds();

            switch (alignment) {
                case AlignUtil.TOP :
                case AlignUtil.MIDDLE :
                case AlignUtil.BOTTOM :
                    break;
                default :
                    displayObject.x += alignPosition.x - relPosition.x;

                    if (snapToPixel)
                        displayObject.x = Math.round(displayObject.x);
            }

            switch (alignment) {
                case AlignUtil.LEFT :
                case AlignUtil.CENTER :
                case AlignUtil.RIGHT :
                    break;
                default :
                    displayObject.y += alignPosition.y - relPosition.y;

                    if (snapToPixel)
                        displayObject.y = Math.round(displayObject.y);
            }
        }

        /**
         * 对齐DisplayObject最近的像素。
         * @param displayObject
         */
        public static alignToPixel(displayObject:egret.DisplayObject):void {
            displayObject.x = Math.round(displayObject.x);
            displayObject.y = Math.round(displayObject.y);
        }

        /**
         * 底部对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignBottom(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.BOTTOM, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 左下对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignBottomLeft(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.BOTTOM_LEFT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 底部水平居中对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignBottomCenter(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.BOTTOM_CENTER, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 右下对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignBottomRight(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.BOTTOM_RIGHT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 水平居中对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param targetCoordinateSpace
         */
        public static alignCenter(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.CENTER, displayObject, bounds, snapToPixel, false, targetCoordinateSpace);
        }

        /**
         * 左对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignLeft(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.LEFT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 垂直居中对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param targetCoordinateSpace
         */
        public static alignMiddle(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.MIDDLE, displayObject, bounds, snapToPixel, false, targetCoordinateSpace);
        }

        /**
         * 左侧垂直居中对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignMiddleLeft(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.MIDDLE_LEFT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 水平垂直居中对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param targetCoordinateSpace
         */
        public static alignMiddleCenter(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.MIDDLE_CENTER, displayObject, bounds, snapToPixel, false, targetCoordinateSpace);
        }

        /**
         * 右侧垂直居中对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignMiddleRight(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.MIDDLE_RIGHT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 右对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignRight(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.RIGHT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 顶部对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignTop(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.TOP, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 左上对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignTopLeft(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.TOP_LEFT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 顶部水平居中对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignTopCenter(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.TOP_CENTER, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        /**
         * 右上对齐
         * @param displayObject
         * @param bounds
         * @param snapToPixel
         * @param outside
         * @param targetCoordinateSpace
         */
        public static alignTopRight(displayObject:egret.DisplayObject, bounds:egret.Rectangle, snapToPixel:boolean = true, outside:boolean = false, targetCoordinateSpace:egret.DisplayObject = null):void {
            AlignUtil.align(AlignUtil.TOP_RIGHT, displayObject, bounds, snapToPixel, outside, targetCoordinateSpace);
        }

        public static _getPosition(alignment:string, targetWidth:number, targetHeight:number, bounds:egret.Rectangle, outside:boolean):egret.Point {
            var position:egret.Point = new egret.Point();

            switch (alignment) {
                case AlignUtil.BOTTOM_LEFT :
                case AlignUtil.LEFT :
                case AlignUtil.MIDDLE_LEFT :
                case AlignUtil.TOP_LEFT :
                    position.x = outside ? bounds.x - targetWidth : bounds.x;
                    break;
                case AlignUtil.BOTTOM_CENTER :
                case AlignUtil.CENTER :
                case AlignUtil.MIDDLE_CENTER :
                case AlignUtil.TOP_CENTER :
                    position.x = (bounds.width - targetWidth) * 0.5 + bounds.x;
                    break;
                case AlignUtil.BOTTOM_RIGHT:
                case AlignUtil.MIDDLE_RIGHT:
                case AlignUtil.RIGHT:
                case AlignUtil.TOP_RIGHT:
                    position.x = outside ? bounds.right : bounds.right - targetWidth;
                    break;
            }

            switch (alignment) {
                case AlignUtil.TOP:
                case AlignUtil.TOP_CENTER:
                case AlignUtil.TOP_LEFT:
                case AlignUtil.TOP_RIGHT:
                    position.y = outside ? bounds.y - targetHeight : bounds.y;
                    break;
                case AlignUtil.MIDDLE :
                case AlignUtil.MIDDLE_CENTER :
                case AlignUtil.MIDDLE_LEFT :
                case AlignUtil.MIDDLE_RIGHT :
                    position.y = (bounds.height - targetHeight) * 0.5 + bounds.y;
                    break;
                case AlignUtil.BOTTOM:
                case AlignUtil.BOTTOM_CENTER:
                case AlignUtil.BOTTOM_LEFT:
                case AlignUtil.BOTTOM_RIGHT:
                    position.y = outside ? bounds.bottom : bounds.bottom - targetHeight;
                    break;
            }

            return position;
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