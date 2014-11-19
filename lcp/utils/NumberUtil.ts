/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class ArrayUtil
 * @constructor
 **/
module lcp {

    /**
     * 算术工具类
     */
    export class NumberUtil {
        public CLASS_NAME:string = "NumberUtil";
        /**
         * 如果两值相等,由精度定义决定
         * @param val1 值1
         * @param val2 值2
         * @param precision 精度
         * @returns {boolean}
         */
        public static isEqual(val1:number, val2:number, precision:number = 0):boolean {
            return Math.abs(val1 - val2) <= Math.abs(precision);
        }

        /**
         * 对比值1和值2返回最小值,跟Math.min方法不同,如果值为null或不是一个数字的话,返回默认值
         * @param val1 值1
         * @param val2 值2
         * @returns {*}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.min(5, null)); // 输出 5
         *        console.log(lcp.NumberUtil.min(5, "CASA")); // 输出 5
         *        console.log(lcp.NumberUtil.min(5, 13)); // 输出 5
         *    </code>
         *
         */
        public static min(val1:any, val2:any):number {
            if (isNaN(val1) && isNaN(val2) || val1 == null && val2 == null)
                return NaN;

            if (val1 == null || val2 == null)
                return (val2 == null) ? val1 : val2;

            if (isNaN(val1) || isNaN(val2))
                return isNaN(val2) ? val1 : val2;

            return Math.min(val1, val2);
        }

        /**
         * 对比值1和值2返回最小值,跟Math.max方法不同,如果值为null或不是一个数字的话,返回默认值
         * @param val1 值1
         * @param val2 值2
         * @returns {*}
         */
        public static max(val1:any, val2:any):number {
            if (isNaN(val1) && isNaN(val2) || val1 == null && val2 == null)
                return NaN;

            if (val1 == null || val2 == null)
                return (val2 == null) ? val1 : val2;

            if (isNaN(val1) || isNaN(val2))
                return (isNaN(val2)) ? val1 : val2;

            return Math.max(val1, val2);
        }

        /**
         * 在默认范围创建一个随机数
         * @param min 最小值
         * @param max 最大值
         * @returns {any}
         */
        public static randomWithinRange(min:number, max:number):number {
            return min + (Math.random() * (max - min));
        }

        /**
         * 在默认范围内创建一个随机整数
         * @param min 最小值
         * @param max 最大值
         * @returns {number}
         */
        public static randomIntegerWithinRange(min:number, max:number = 0):number {
            return Math.floor(Math.random() * (1 + max - min) + min);
        }

        /**
         * 判断一个数是否为偶数
         * @param value 数字
         * @returns {boolean}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.isEven(7)); // 输出 false
         *        console.log(lcp.NumberUtil.isEven(12)); // 输出 true
         *    </code>
         *
         */
        public static isEven(value:number):boolean {
            return (value & 1) == 0;
        }

        /**
         * 判断一个数是否为奇数
         * @param value 数字
         * @returns {boolean}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.isEven(7)); // 输出 true
         *        console.log(lcp.NumberUtil.isEven(12)); // 输出 false
         *    </code>
         */
        public static isOdd(value:number):boolean {
            return !NumberUtil.isEven(value);
        }

        /**
         * 判断一个数是否是整数
         * @param value
         * @returns {boolean}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.isInteger(13)); // 输出 true
         *        console.log(lcp.NumberUtil.isInteger(1.2345)); // 输出 false
         *    </code>
         */
        public static isInteger(value:number):boolean {
            return (value % 1) == 0;
        }

        /**
         * 判断一个数是否为质数
         * @param value
         * @returns {boolean}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.isPrime(13)); // 输出 true
         *        console.log(lcp.NumberUtil.isPrime(4)); // 输出 false
         *    </code>
         */
        public static isPrime(value:number):boolean {
            if (value == 1 || value == 2)
                return true;

            if (NumberUtil.isEven(value))
                return false;

            var s:number = Math.sqrt(value);
            for (var i:number = 3; i <= s; i++)
                if (value % i == 0)
                    return false;

            return true;
        }

        /**
         * 获取小数点后几位,四舍五入
         * @param value
         * @param place
         * @returns {number}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.roundToPlace(3.14159, 2)); // 输出 3.14
         *        console.log(lcp.NumberUtil.roundToPlace(3.14159, 3)); // 输出 3.142
         *    </code>
         *
         */
        public static roundDecimalToPlace(value:number, place:number = 0):number {
            var p:number = Math.pow(10, place);

            return Math.round(value * p) / p;
        }

        /**
         * 循环获取数值
         * @param index
         * @param length
         * @returns {number}
         *
         *    <code>
         *        var colors:Array = new Array("红", "绿", "蓝");
         *        console.log(colors[lcp.NumberUtil.loopIndex(2, colors.length)]); // 输出 蓝
         *        console.log(colors[lcp.NumberUtil.loopIndex(4, colors.length)]); // 输出 绿
         *        console.log(colors[lcp.NumberUtil.loopIndex(-6, colors.length)]); // 输出 红
         *    </code>
         *
         */
        public static loopIndex(index:number, length:number = 0):number {
            if (index < 0)
                index = length + index % length;

            if (index >= length)
                return index % length;

            return index;
        }

        /**
         * 在区间内是否包含一个值
         * @param value
         * @param firstValue
         * @param secondValue
         * @returns {boolean}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.isBetween(3, 0, 5)); // 输出 true
         *        console.log(lcp.NumberUtil.isBetween(7, 0, 5)); // 输出 false
         *    </code>
         *
         */
        public static isBetween(value:number, firstValue:number, secondValue:number):boolean {
            return !(value < Math.min(firstValue, secondValue) || value > Math.max(firstValue, secondValue));
        }

        /**
         * 在区间内就输出该值,不在就输入与之较近的值
         * @param value
         * @param firstValue
         * @param secondValue
         * @returns {number}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.constrain(3, 0, 5)); // 输出 3
         *        console.log(lcp.NumberUtil.constrain(7, 0, 5)); // 输出 5
         *    </code>
         *
         */
        public static constrain(value:number, firstValue:number, secondValue:number):number {
            return Math.min(Math.max(value, Math.min(firstValue, secondValue)), Math.max(firstValue, secondValue));
        }

        /**
         * 两数区间创建等间距数值数组
         * @param begin 开始数
         * @param end 结束数
         * @param steps 间距
         * @returns {Array<any>}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.createStepsBetween(0, 5, 4)); // 输出 1,2,3,4
         *        console.log(lcp.NumberUtil.createStepsBetween(1, 3, 3)); // 输出 1.5,2,2.5
         *    </code>
         *
         */
        public static createStepsBetween(begin:number, end:number, steps:number):Array<any> {
            steps++;

            var i:number = 0;
            var stepsBetween:Array<any> = [];
            var increment:number = (end - begin) / steps;

            while (++i < steps)
                stepsBetween.push((i * increment) + begin);

            return stepsBetween;
        }

        /**
         * 获取两值之间的占比值
         * @param amount
         * @param begin
         * @param end
         * @returns {number}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.interpolate(new Percent(0.5), 0, 10)); // 输出 5
         *    </code>
         *
         */
        public static interpolate(amount:Percent, begin:number, end:number):number {
            return begin + (end - begin) * amount.decimalPercentage;
        }

        /**
         * 值在区间内占比浮点值
         * @param value
         * @param minimum
         * @param maximum
         * @returns {lcp.Percent}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.normalize(8, 4, 20).decimalPercentage); // 输出 0.25
         *    </code>
         *
         */
        public static normalize(value:number, minimum:number, maximum:number):Percent {
            return new Percent((value - minimum) / (maximum - minimum));
        }

        /**
         * 一个值从一个坐标空间映射到另一个
         * @param value
         * @param min1
         * @param max1
         * @param min2
         * @param max2
         * @returns {number}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.map(0.75, 0, 1, 0, 100)); // 输出 75
         *    </code>
         *
         */
        public static map(value:number, min1:number, max1:number, min2:number, max2:number):number {
            return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
        }

        /**
         * 加权平均值
         * @param value
         * @param dest
         * @param n
         * @returns {number}
         */
        public static getWeightedAverage(value:number, dest:number, n:number):number {
            return value + (dest - value) / n;
        }

        /**
         * 格式化数字为字符串
         * @param value
         * @param kDelim
         * @param minLength
         * @param fillChar
         * @returns {string}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.format(1234567, ",", 8)); // 输出 01,234,567
         *    </code>
         *
         */
        public static format(value:number, kDelim:string = ",", minLength:number = 0, fillChar:string = "0"):string {
            var remainder:number = value % 1;
            var num:string = Math.floor(value).toString();
            var len:number = num.length;

            if (minLength != 0 && minLength > len) {
                minLength -= len;

                var addChar:string = fillChar || '0';

                while (minLength--)
                    num = addChar + num;
            }

            if (kDelim != null && num.length > 3) {
                var totalDelim:number = Math.floor(num.length / 3);
                var totalRemain:number = num.length % 3;
                var numSplit:Array<any> = num.split('');
                var i:number = -1;

                while (++i < totalDelim)
                    numSplit.splice(totalRemain + (4 * i), 0, kDelim);

                if (totalRemain == 0)
                    numSplit.shift();

                num = numSplit.join('');
            }

            if (remainder != 0)
                num += remainder.toString().substr(1);

            return num;
        }

        /**
         * 格式化数字为货币形式
         * @param value
         * @param forceDecimals
         * @param kDelim
         * @returns {string}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.formatCurrency(1234.5)); // 输出 "1,234.50"
         *    </code>
         *
         */
        public static formatCurrency(value:number, forceDecimals:boolean = true, kDelim:string = ","):string {
            var remainder:number = value % 1;
            var currency:string = NumberUtil.format(Math.floor(value), kDelim);

            if (remainder != 0 || forceDecimals)
                currency += remainder.toFixed(2).substr(1);

            return currency;
        }

        /**
         * 数字转英文序列后缀
         * @param value
         * @returns {string}
         *
         *    <code>
         *        console.log(32 + lcp.NumberUtil.getOrdinalSuffix(32)); // 输出 32nd
         *    </code>
         *
         */
        public static getOrdinalSuffix(value:number = 0):string {
            if (value >= 10 && value <= 20)
                return 'th';

            if (value == 0)
                return '';

            switch (value % 10) {
                case 3 :
                    return 'rd';
                case 2 :
                    return 'nd';
                case 1 :
                    return 'st';
                default :
                    return 'th';
            }
        }

        /**
         * 一位数字补0操作
         * @param value
         * @returns {string}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.addLeadingZero(7)); // 输出 07
         *        console.log(lcp.NumberUtil.addLeadingZero(11)); // 输出 11
         *    </code>
         *
         */
        public static addLeadingZero(value:number):string {
            return (value < 10) ? '0' + value : value.toString();
        }

        /**
         * 数字转英文数字
         * @param value
         * @returns {string}
         *
         *    <code>
         *        console.log(lcp.NumberUtil.spell(0)); // 输出 Zero
         *        console.log(lcp.NumberUtil.spell(23)); // 输出 Twenty-Three
         *        console.log(lcp.NumberUtil.spell(2005678)); // 输出 Two Million, Five Thousand, Six Hundred Seventy-Eight
         *    </code>
         *
         */
        public static spell(value:number = 0):string {
            if (value > 999999999)
                throw new Error('Value too large for this method.');

            var onesSpellings:Array<any> = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
            var tensSpellings:Array<any> = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
            var spelling:string = '';

            var millions:number = value / 1000000;
            value %= 1000000;

            var thousands:number = value / 1000;
            value %= 1000;

            var hundreds:number = value / 100;
            value %= 100;

            var tens:number = value / 10;
            value %= 10;

            var ones:number = value % 10;

            if (millions != 0) {
                spelling += (spelling.length == 0) ? '' : ', ';
                spelling += NumberUtil.spell(millions) + ' Million';
            }

            if (thousands != 0) {
                spelling += (spelling.length == 0) ? '' : ', ';
                spelling += NumberUtil.spell(thousands) + ' Thousand';
            }

            if (hundreds != 0) {
                spelling += (spelling.length == 0) ? '' : ', ';
                spelling += NumberUtil.spell(hundreds) + ' Hundred';
            }

            if (tens != 0 || ones != 0) {
                spelling += (spelling.length == 0) ? '' : ' ';

                if (tens < 2)
                    spelling += onesSpellings[tens * 10 + ones];
                else {
                    spelling += tensSpellings[tens];

                    if (ones != 0)
                        spelling += '-' + onesSpellings[ones];
                }
            }

            if (spelling.length == 0)
                return 'Zero';

            return spelling;
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