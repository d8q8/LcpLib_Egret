/**
 * Created by d8q8 on 2014/11/24.
 * @module lcp
 * @class LPoint
 * @constructor
 **/

module lcp {
    /**
     * 点扩展类
     */
    export class LPoint extends egret.HashObject{
        /**
         * 计算两点间距离
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         * @returns {number}
         */
        public static twodis(x1:number,y1:number, x2:number,y2:number):number{
            return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
        }

        /**
         * 返回 pt1 和 pt2 之间的距离。
         * @method egret.Point#distance
         * @param p1 {egret.Point} 第一个点
         * @param p2 {egret.Point} 第二个点
         * @returns {number} 第一个点和第二个点之间的距离。
         */
        public static distance(p1:egret.Point, p2:egret.Point):number{
            return egret.Point.distance(p1,p2);//官方方法
        }


    }
}

//扩展点类方法
//egret.Point.twodis = lcp.LPoint.twodis;