/**
 * Created by d8q8 on 2014/12/10.
 * @module lcp
 * @class RatioUtil
 * @constructor
 **/
module lcp {
    /**
     * 比例工具类
     */
    export class RatioUtil {
        public CLASS_NAME:string = "RatioUtil";

        public constructor() {

        }

        /**
         * 确定宽高比
         * @param size
         * @returns {number}
         */
        public static widthToHeight(size:egret.Rectangle):number {
            return size.width / size.height;
        }

        /**
         * 确定高宽比
         * @param size
         * @returns {number}
         */
        public static heightToWidth(size:egret.Rectangle):number {
            return size.height / size.width;
        }

        /**
         * 按区域宽度和高度缩放，同时保持纵横比。
         * @param size
         * @param amount
         * @param snapToPixel
         * @returns {Rectangle}
         */
        public static scale(size:egret.Rectangle, amount:Percent, snapToPixel:boolean = true):egret.Rectangle {
            return RatioUtil._defineRect(size, size.width * amount.decimalPercentage, size.height * amount.decimalPercentage, snapToPixel);
        }

        /**
         * 按区域宽缩放,同时保持纵横比
         * @param size
         * @param height
         * @param snapToPixel
         * @returns {Rectangle}
         */
        public static scaleWidth(size:egret.Rectangle, height:number, snapToPixel:boolean = true):egret.Rectangle {
            return RatioUtil._defineRect(size, height * RatioUtil.widthToHeight(size), height, snapToPixel);
        }

        /**
         * 按区域高缩放,同时保持纵横比
         * @param size
         * @param width
         * @param snapToPixel
         * @returns {Rectangle}
         */
        public static scaleHeight(size:egret.Rectangle, width:number, snapToPixel:boolean = true):egret.Rectangle {
            return RatioUtil._defineRect(size, width, width * RatioUtil.heightToWidth(size), snapToPixel);
        }

        /**
         * 调整区域填充边界,同时保持纵横比。
         * @param size
         * @param bounds
         * @param snapToPixel
         * @returns {Rectangle}
         */
        public static scaleToFill(size:egret.Rectangle, bounds:egret.Rectangle, snapToPixel:boolean = true):egret.Rectangle {
            var scaled:egret.Rectangle = RatioUtil.scaleHeight(size, bounds.width, snapToPixel);

            if (scaled.height < bounds.height)
                scaled = RatioUtil.scaleWidth(size, bounds.height, snapToPixel);

            return scaled;
        }

        /**
         * 调整区域的边界不超过最大尺寸,同时保持纵横比。
         * @param size
         * @param bounds
         * @param snapToPixel
         * @returns {Rectangle}
         */
        public static scaleToFit(size:egret.Rectangle, bounds:egret.Rectangle, snapToPixel:boolean = true):egret.Rectangle {
            var scaled:egret.Rectangle = RatioUtil.scaleHeight(size, bounds.width, snapToPixel);

            if (scaled.height > bounds.height)
                scaled = RatioUtil.scaleWidth(size, bounds.height, snapToPixel);

            return scaled;
        }

        public static _defineRect(size:egret.Rectangle, width:number, height:number, snapToPixel:boolean):egret.Rectangle {
            var scaled:egret.Rectangle = size.clone();
            scaled.width = snapToPixel ? Math.round(width) : width;
            scaled.height = snapToPixel ? Math.round(height) : height;

            return scaled;
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