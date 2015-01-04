/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class ArrayUtil
 * @constructor
 **/
module lcp {

    export class ArrayUtil {
        public CLASS_NAME:string = "ArrayUtil";

        /**
         * 返回所有匹配属性的第一项
         * @param inArray
         * @param keyValues
         * @returns {*}
         *
         *    <code>
         *        var people:Array<any>  = [
         *            {name: "Aaron", sex: "Male", hair: "Brown"},
         *            {name: "Linda", sex: "Female", hair: "Blonde"},
         *            {name: "Katie", sex: "Female", hair: "Brown"},
         *            {name: "Nikki", sex: "Female", hair: "Blonde"}
         *        ];
         *        var person = ArrayUtil.getItemByKeys(people, {sex: "Female", hair: "Brown"});
         *        console.log(person.name); // 输出 "Katie"
         *    </code>
         *
         */
        public static getItemByKeys(inArray:Array<any>, keyValues:any):any {
            var i:number = -1;
            var item:any;
            var hasKeys:boolean;

            while (++i < inArray.length) {
                item = inArray[i];
                hasKeys = true;

                for (var j in keyValues)
                    if (!item.hasOwnProperty(j) || item[j] != keyValues[j])
                        hasKeys = false;

                if (hasKeys)
                    return item;
            }

            return null;
        }

        /**
         * 获取匹配属性的所有项
         * @param inArray
         * @param keyValues
         * @returns {Array<any>}
         *
         *    <code>
         *        var people:Array<any>  = [
         *            {name: "Aaron", sex: "Male", hair: "Brown"},
         *            {name: "Linda", sex: "Female", hair: "Blonde"},
         *            {name: "Katie", sex: "Female", hair: "Brown"},
         *            {name: "Nikki", sex: "Female", hair: "Blonde"}
         *        ];
         *        var blondeFemales = ArrayUtil.getItemsByKeys(people, {sex: "Female", hair: "Brown"});
         *        for (var p in blondeFemales) {
		 *			console.log(blondeFemales[p].name);
		 *		}
         *    </code>
         *
         */
        public static getItemsByKeys(inArray:Array<any>, keyValues:any):Array<any> {
            var t:Array<any> = new Array<any>();
            var i:number = -1;
            var item:any;
            var hasKeys:boolean;

            while (++i < inArray.length) {
                item = inArray[i];
                hasKeys = true;

                for (var j in keyValues)
                    if (!item.hasOwnProperty(j) || item[j] != keyValues[j])
                        hasKeys = false;

                if (hasKeys)
                    t.push(item);
            }

            return t;
        }

        /**
         * 获取匹配任何一个属性的第一项
         * @param inArray
         * @param keyValues
         * @returns {*}
         *
         *    <code>
         *        var people:Array<any>  = [
         *            {name: "Aaron", sex: "Male", hair: "Brown"},
         *            {name: "Linda", sex: "Female", hair: "Blonde"},
         *            {name: "Katie", sex: "Female", hair: "Brown"},
         *            {name: "Nikki", sex: "Female", hair: "Blonde"}
         *        ];
         *        var person = ArrayUtil.getItemByAnyKey(people, {sex: "Female", hair: "Brown"});
         *        console.log(person.name); // 输出 "Aaron"
         *    </code>
         *
         */
        public static getItemByAnyKey(inArray:Array<any>, keyValues:any):any {
            var i:number = -1;
            var item:any;

            while (++i < inArray.length) {
                item = inArray[i];

                for (var j in keyValues)
                    if (item.hasOwnProperty(j) && item[j] == keyValues[j])
                        return item;
            }

            return null;
        }

        /**
         * 匹配所有任何一个属性的所有项
         * @param inArray
         * @param keyValues
         * @returns {Array<any>}
         *
         *    <code>
         *        var people:Array<any>  = [
         *            {name: "Aaron", sex: "Male", hair: "Brown"},
         *            {name: "Linda", sex: "Female", hair: "Blonde"},
         *            {name: "Katie", sex: "Female", hair: "Brown"},
         *            {name: "Nikki", sex: "Female", hair: "Blonde"}
         *        ];
         *        var brownOrFemales = lcp.ArrayUtil.getItemsByAnyKey(people, {sex: "Female", hair: "Brown"});
         *
         *        for (var p in brownOrFemales) {
		 *			console.log(brownOrFemales[p].name);
		 *		}
         *    </code>
         *
         */
        public static getItemsByAnyKey(inArray:Array<any>, keyValues:any):Array<any> {
            var t:Array<any> = [];
            var i:number = -1;
            var item:any;
            var hasKeys:boolean;

            while (++i < inArray.length) {
                item = inArray[i];
                hasKeys = true;

                for (var j in keyValues) {
                    if (item.hasOwnProperty(j) && item[j] == keyValues[j]) {
                        t.push(item);
                        break;
                    }
                }
            }

            return t;
        }

        /**
         * 获取匹配属性key的第一项
         * @param inArray
         * @param key
         * @param match
         * @returns {*}
         */
        public static getItemByKey(inArray:Array<any>, key:string, match:any):any {
            var length:number = inArray.length;
            for (var i:number = 0; i < length; i++) {
                var item:any = inArray[i];
                if (item.hasOwnProperty(key)) {
                    if (item[key] == match)
                        return item;
                }
            }
            return null;
        }

        /**
         * 获取匹配属性key的所有项
         * @param inArray
         * @param key
         * @param match
         * @returns {Array<any>}
         */
        public static getItemsByKey(inArray:Array<any>, key:string, match:any):Array<any> {
            var t:Array<any> = [];

            var length:number = inArray.length;
            for (var i:number = 0; i < length; i++) {
                var item:any = inArray[i];
                if (item.hasOwnProperty(key)) {
                    if (item[key] == match)
                        t.push(item);
                }
            }
            return t;
        }

        /**
         * 返回与一个特定的数据类型兼容,类或接口的第一个元素
         * @param inArray
         * @param type
         * @returns {*}
         */
        public static getItemByType(inArray:Array<any>, type:any):any {
            var length:number = inArray.length;
            for (var i:number = 0; i < length; i++) {
                var item:any = inArray[i];
                if (item instanceof type) {
                    return item;
                }
            }
            return null;
        }

        /**
         * 返回与一个特定的数据类型兼容,类或接口的每个元素
         * @param inArray
         * @param type
         * @returns {Array<any>}
         */
        public static getItemsByType(inArray:Array<any>, type:any):Array<any> {
            var t:Array<any> = [];

            var length:number = inArray.length;
            for (var i:number = 0; i < length; i++) {
                var item:any = inArray[i];
                if (item instanceof type) {
                    t.push(item);
                }
            }
            return t;
        }

        /**
         * 按key值返回指定每个元素的属性值
         * @param inArray
         * @param key
         * @returns {Array<any>}
         */
        public static getValuesByKey(inArray:Array<any>, key:string):Array<any> {
            var k:Array<any> = [];

            var length:number = inArray.length;
            for (var i:number = 0; i < length; i++) {
                var item:any = inArray[i];
                if (item.hasOwnProperty(key)) {
                    k.push(item[key]);
                }
            }
            return k;
        }

        /**
         * 确定两个数组是否相等
         * @param first
         * @param second
         * @returns {boolean}
         */
        public static equals(first:Array<any>, second:Array<any>):boolean {
            var i:number = first.length;
            if (i != second.length)
                return false;

            while (i--)
                if (first[i] != second[i])
                    return false;

            return true;
        }

        /**
         * 在指定索引位置插入项
         * @param tarArray
         * @param items
         * @param index
         * @returns {boolean}
         *
         *    <code>
         *        var alphabet:Array<any> = ["a", "d", "e"];
         *        var parts:Array<any>    = ["b", "c"];
         *
         *        lcp.ArrayUtil.addItemsAt(alphabet, parts, 1);
         *        console.log(alphabet); // 输出 a,b,c,d,e
         *    </code>
         *
         */
        public static addItemsAt(tarArray:Array<any>, items:Array<any>, index:number = 0x7FFFFFFF):boolean {
            if (items.length == 0)
                return false;

            var args:Array<any> = items.concat();
            args.splice(0, 0, index, 0);

            tarArray.splice.apply(tarArray, args);

            return true;
        }

        /**
         * 删除数组中重复项
         * @param inArray
         * @returns {any[]}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 4, 4, 4, 4, 5];
         *        console.log(lcp.ArrayUtil.removeDuplicates(numberArray)); // 输出 1,2,3,4,5
         *    </code>
         */
        public static removeDuplicates(inArray:Array<any>):Array<any> {
            return inArray.filter(ArrayUtil._removeDuplicatesFilter);
        }

        public static _removeDuplicatesFilter(e:any, i:number, inArray:Array<any>):boolean {
            return (i == 0) ? true : inArray.lastIndexOf(e, i - 1) == -1;
        }

        /**
         * 去重数组(换一种方式实现)
         * @param inArray
         * @returns {Array<any>}
         */
        public static reDupliction(inArray:Array<any>):Array<any> {
            var t:Array<any> = inArray.sort();
            var re:Array<any> = [t[0]];
            for (var i = 1; i < t.length; i++) {
                if (t[i] != re[re.length - 1])
                    re.push(t[i]);
            }
            return re;
        }

        /**
         * 删除数组中某一项
         * @param tarArray
         * @param item
         * @returns {number} 返回删除项个数
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 7, 7, 7, 4, 5];
         *        console.log("删除 " + lcp.ArrayUtil.removeItem(numberArray, 7) + " 项."); // 输出 3
         *        console.log(numberArray);//输出 1,2,3,4,5
         *    </code>
         *
         */
        public static removeItem(tarArray:Array<any>, item:any):number {
            var i:number = tarArray.indexOf(item);
            var f:number = 0;

            while (i != -1) {
                tarArray.splice(i, 1);

                i = tarArray.indexOf(item, i);

                f++;
            }

            return f;
        }

        /**
         * 删除数组中的多项
         * @param tarArray
         * @param items
         * @returns {boolean}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 7, 7, 7, 4, 5];
         *        lcp.ArrayUtil.removeItems(numberArray, [1, 3, 7, 5]);
         *        console.log(numberArray);//输出 2,4
         *    </code>
         *
         */
        public static removeItems(tarArray:Array<any>, items:Array<any>):boolean {
            var removed:boolean = false;
            var l:number = tarArray.length;

            while (l--) {
                if (items.indexOf(tarArray[l]) > -1) {
                    tarArray.splice(l, 1);
                    removed = true;
                }
            }

            return removed;
        }

        /**
         * 只保留数组中指定的项目
         * @param tarArray
         * @param items
         * @returns {boolean}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 7, 7, 7, 4, 5];
         *        lcp.ArrayUtil.removeItems(numberArray, [2, 4]);
         *        console.log(numberArray);//输出 2,4
         *    </code>
         *
         */
        public static retainItems(tarArray:Array<any>, items:Array<any>):boolean {
            var removed:boolean = false;
            var l:number = tarArray.length;

            while (l--) {
                if (items.indexOf(tarArray[l]) == -1) {
                    tarArray.splice(l, 1);
                    removed = true;
                }
            }

            return removed;
        }

        /**
         * 查找数组中包含项的个数
         * @param inArray
         * @param item
         * @returns {number}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 7, 7, 7, 4, 5];
         *        console.log("数组包含 " + lcp.ArrayUtil.contains(numberArray, 7) + " 个7.");//输出 3
         *    </code>
         *
         */
        public static contains(inArray:Array<any>, item:any):number {
            var i:number = inArray.indexOf(item, 0);
            var t:number = 0;

            while (i != -1) {
                i = inArray.indexOf(item, i + 1);
                t++;
            }

            return t;
        }

        /**
         * 数组是否包含所有指定项
         * @param inArray
         * @param items
         * @returns {boolean}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 4, 5];
         *        console.log(lcp.ArrayUtil.containsAll(numberArray, [1, 3, 5]));//输出 true
         *    </code>
         *
         */
        public static containsAll(inArray:Array<any>, items:Array<any>):boolean {
            var l:number = items.length;

            while (l--)
                if (inArray.indexOf(items[l]) == -1)
                    return false;

            return true;
        }

        /**
         * 数组中是否包含指定项中任何一个元素
         * @param inArray
         * @param items
         * @returns {boolean}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 4, 5];
         *        console.log(lcp.ArrayUtil.containsAny(numberArray, [9, 3, 6]));//输出 true
         *    </code>
         *
         */
        public static containsAny(inArray:Array<any>, items:Array<any>):boolean {
            var l:number = items.length;

            while (l--)
                if (inArray.indexOf(items[l]) > -1)
                    return true;

            return false;
        }

        /**
         * 比较两数组不同项的第一个索引值
         * @param first
         * @param second
         * @param fromIndex
         * @returns {number}
         *
         *    <code>
         *        var color:Array<any>     = ["Red", "Blue", "Green", "Indigo", "Violet"];
         *        var colorsAlt:Array<any> = ["Red", "Blue", "Green", "Violet"];
         *        console.log(lcp.ArrayUtil.getIndexOfDifference(color, colorsAlt));//输出 3
         *    </code>
         *
         */
        public static getIndexOfDifference(first:Array<any>, second:Array<any>, fromIndex:number = 0):number {
            var i:number = fromIndex - 1;

            while (++i < first.length)
                if (first[i] != second[i])
                    return i;

            return -1;
        }

        /**
         * 从数组中返回一个随机元素
         * @param inArray
         * @returns {any}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         *        console.log(lcp.ArrayUtil.random(numberArray));
         *    </code>
         *
         */
        public static random(inArray:Array<any>):any {
            return ArrayUtil.randomize(inArray)[0];
        }

        /**
         * 数组随机
         * @param inArray
         * @returns {Array<any>}
         *
         *    <code>
         *        var numberArray:Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         *        console.log(lcp.ArrayUtil.randomize(numberArray));
         *    </code>
         *
         */
        public static randomize(inArray:Array<any>):Array<any> {
            var t:Array<any> = [];
            var r:Array<any> = inArray.sort(ArrayUtil._sortRandom);
            var i:number = -1;
            var l:number = inArray.length;
            while (++i < l){
                t.push(r[i]);
            }
            return t;
        }

        public static _sortRandom(a:any, b:any):number {
            return NumberUtil.randomIntegerWithinRange(0, 1) ? 1 : -1;
        }

        /**
         * 数组求和
         * @param inArray
         * @returns {number}
         *
         *    <code>
         *        var numberArray:Array<any> = [2, 3];
         *        console.log(lcp.ArrayUtil.sum(numberArray));//输出 5
         *    </code>
         *
         */
        public static sum(inArray:Array<any>):number {
            var t:number = 0;
            var l:number = inArray.length;

            while (l--)
                t += inArray[l];

            return t;
        }

        /**
         * 求数组中数的平均值
         * @param inArray
         * @returns {number}
         *
         *    <code>
         *        var numberArray:Array<any> = [2, 3, 8 ,3];
         *        console.log("平均值为: " + lcp.ArrayUtil.average(numberArray));//输出 4
         *    </code>
         *
         */
        public static average(inArray:Array<any>):number {
            if (inArray.length == 0)
                return 0;

            return ArrayUtil.sum(inArray) / inArray.length;
        }

        /**
         * 获取数组中的最小值
         * @param inArray
         * @returns {any}
         *
         *    <code>
         *        var numberArray:Array<any> = [2, 1, 5, 4, 3];
         *        console.log("最小值为: " + lcp.ArrayUtil.getLowestValue(numberArray));//输出 1
         *    </code>
         *
         */
        public static getLowestValue(inArray:Array<any>):number {
            return inArray[LOrder.index(inArray).sort()[0]];
        }

        /**
         * 获取数组中的最大值
         * @param inArray
         * @returns {any}
         *
         *    <code>
         *        var numberArray:Array<any> = [2, 1, 5, 4, 3];
         *        console.log("最大值为: " + lcp.ArrayUtil.getHighestValue(numberArray));//输出 5
         *    </code>
         *
         */
        public static getHighestValue(inArray:Array<any>):number {
            return inArray[LOrder.index(inArray).sort(LOrder.desc)[0]];
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


//Array.sum = lcp.ArrayUtil.sum;
//Array.average = lcp.ArrayUtil.average;
//Array.random = lcp.ArrayUtil.random;
//Array.randomize = lcp.ArrayUtil.randomize;