/**
 * Created by d8q8 on 2014/12/10.
 * @module lcp
 * @class DrawUtil
 * @constructor
 **/
module lcp {
    /**
     * 绘制工具类
     */
    export class DrawUtil {
        public CLASS_NAME:string = "DrawUtil";

        public constructor() {

        }

        /**
         * 按坐标点位置绘制路径
         * @param graphics
         * @param points
         */
        public static drawPath(graphics:egret.Graphics, points:Array<any>):void {
            var i:number = points.length;
            while (i--)
                if (!(points[i] instanceof egret.Point))
                    LTrace.trace("传入的不是坐标点,请重新传入.");

            if (points.length < 2)
                throw new Error('At least two Points are needed to draw a path.');

            graphics.moveTo(points[0].x, points[0].y);

            i = 0;
            while (++i < points.length)
                graphics.lineTo(points[i].x, points[i].y);
        }

        /**
         * 按坐标点来绘制图形
         * @param graphics
         * @param points
         */
        public static drawShape(graphics:egret.Graphics, points:Array<any>):void {
            if (points.length < 3)
                throw new Error('At least three Points are needed to draw a shape.');

            DrawUtil.drawPath(graphics, points);

            graphics.lineTo(points[0].x, points[0].y);
        }

        /**
         * 画一个圆楔
         * @param graphics
         * @param ellipse
         * @param startAngle
         * @param arc
         */
        public static drawWedge(graphics:egret.Graphics, ellipse:Ellipse, startAngle:number, arc:number):void {
            if (Math.abs(arc) >= 360) {
                graphics.drawEllipse(ellipse.x, ellipse.y, ellipse.width, ellipse.height);
                return;
            }

            startAngle += 90;

            var radius:number   = ellipse.width * .5;
            var yRadius:number  = ellipse.height * .5;
            var x:number        = ellipse.x + radius;
            var y:number        = ellipse.y + yRadius;
            var segs:number     = Math.ceil(Math.abs(arc) / 45);
            var segAngle:number = -arc / segs;
            var theta:number    = -(segAngle / 180) * Math.PI;
            var angle:number    = -(startAngle / 180) * Math.PI;
            var ax:number       = x + Math.cos(startAngle / 180 * Math.PI) * radius;
            var ay:number       = y + Math.sin(-startAngle / 180 * Math.PI) * yRadius;
            var angleMid:number;

            graphics.moveTo(x, y);
            graphics.lineTo(ax, ay);

            var i:number = -1;
            while (++i < segs) {
                angle += theta;
                angleMid = angle - (theta * .5);

                graphics.curveTo(x + Math.cos(angleMid) * (radius / Math.cos(theta * .5)), y + Math.sin(angleMid) * (yRadius / Math.cos(theta * .5)), x + Math.cos(angle) * radius, y + Math.sin(angle) * yRadius);
            }

            graphics.lineTo(x, y);
        }


        /**
         * 绘制圆角矩形
         * @param graphics
         * @param x
         * @param y
         * @param width
         * @param height
         * @param ellipseWidth
         * @param ellipseHeight
         * @param topLeft
         * @param topRight
         * @param bottomRight
         * @param bottomLeft
         */
        public static drawRoundRect(graphics:egret.Graphics, x:number, y:number, width:number, height:number, ellipseWidth:number, ellipseHeight:number, topLeft:boolean = true, topRight:boolean = true, bottomRight:boolean = true, bottomLeft:boolean = true):void {
            var radiusWidth:number  = ellipseWidth * 0.5;
            var radiusHeight:number = ellipseHeight * 0.5;

            if (topLeft)
                graphics.moveTo(x + radiusWidth, y);
            else
                graphics.moveTo(x, y);

            if (topRight) {
                graphics.lineTo(x + width - radiusWidth, y);
                graphics.curveTo(x + width, y, x + width, y + radiusHeight);
            } else
                graphics.lineTo(x + width, y);

            if (bottomRight) {
                graphics.lineTo(x + width, y + height - radiusHeight);
                graphics.curveTo(x + width, y + height, x + width - radiusWidth, y + height);
            } else
                graphics.lineTo(x + width, y + height);

            if (bottomLeft) {
                graphics.lineTo(x + radiusWidth, y + height);
                graphics.curveTo(x, y + height, x, y + height - radiusHeight);
            } else
                graphics.lineTo(x, y + height);

            if (topLeft) {
                graphics.lineTo(x, y + radiusHeight);
                graphics.curveTo(x, y, x + radiusWidth, y);
            } else
                graphics.lineTo(x, y);
        }

        /**
         * 按区域绘制
         * @param graphics
         * @param rectangle
         */
        public static drawRectangle(graphics:egret.Graphics, rectangle:egret.Rectangle):void {
            graphics.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
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