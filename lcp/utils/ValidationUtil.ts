/**
 * Created by d8q8 on 2015/2/5.
 * @module lcp
 * @class ValidationUtil
 * @constructor
 **/
module lcp {
    /**
     * 验证检测类
     */
    export class ValidationUtil {
        public CLASS_NAME:string = "ValidationUtil";

        /**
         * 通用检测方法
         * @param regexp
         * @param str
         * @returns {boolean}
         */
        public static isValid(regexp:string,str:any):boolean{
            var pattern:RegExp = new RegExp(regexp);
            return pattern.test(String(str));
        }
        /**
         * 检测短时间，形如 (13:04:06)
         * @param str
         * @returns {boolean}
         */
        public static isTime(str:string):boolean {
            var pattern:RegExp = new RegExp(regexEnum.shorttime);
            var a = str.match(pattern);
            if (a == null) return false;
            if (parseInt(a[1]) > 24 || parseInt(a[3]) > 60 || parseInt(a[4]) > 60) return false;
            return true;
        }

        /**
         * 检测短日期，形如 (2003-12-05)
         * @param str
         * @returns {boolean}
         */
        public static isDate(str:string):boolean {
            var pattern:RegExp = new RegExp(regexEnum.shortdate);
            var r = str.match(pattern);
            if (r == null) return false;
            var d = new Date(parseInt(r[1]), parseInt(r[3]) - 1, parseInt(r[4]));
            return (d.getFullYear() == parseInt(r[1]) && (d.getMonth() + 1) == parseInt(r[3]) && d.getDate() == parseInt(r[4]));
        }

        /**
         * 检测长时间，形如 (2003-12-05 13:04:06)
         * @param str
         * @returns {boolean}
         */
        public static isDateTime(str:string):boolean {
            var pattern:RegExp = new RegExp(regexEnum.datetime);
            var r = str.match(pattern);
            if (r == null) return false;
            var d = new Date(parseInt(r[1]), parseInt(r[3]) - 1, parseInt(r[4]), parseInt(r[5]), parseInt(r[6]), parseInt(r[7]));
            return (d.getFullYear() == parseInt(r[1]) && (d.getMonth() + 1) == parseInt(r[3]) && d.getDate() == parseInt(r[4]) && d.getHours() == parseInt(r[5]) && d.getMinutes() == parseInt(r[6]) && d.getSeconds() == parseInt(r[7]));
        }

        /**
         * 检测邮箱地址, 形如(d8q8@163.com)
         * @param email
         * @returns {boolean}
         */
        public static isEmail(email:string):boolean {
            var pattern:RegExp = new RegExp(regexEnum.email);
            return email.match(pattern) != null;
        }

        /**
         * 检测身份证是否合法
         * @param sId
         * @returns {boolean}
         */
        public static isCardID(sId:string):boolean {
            var aCity:Object = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外"
            };
            var iSum:number = 0;
            if (!/^\d{17}(\d|x)$/i.test(sId)) return false;
            sId = sId.replace(/x$/i, "a");
            if (aCity[parseInt(sId.substr(0, 2))] == null) return false;
            var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
            var d = new Date(sBirthday.replace(/-/g, "/"));
            if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return false;
            for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
            if (iSum % 11 != 1) return false;
            return true;
        }

        /**
         * 检测美国州地址缩写
         * @param state
         * @returns {boolean}
         */
        public static isUsaStateAbbreviation(state:string):boolean {
            var states:Array<any> = ['ak', 'al', 'ar', 'az', 'ca', 'co', 'ct', 'dc', 'de', 'fl', 'ga', 'hi', 'ia', 'id', 'il', 'in', 'ks', 'ky', 'la', 'ma', 'md', 'me', 'mi', 'mn', 'mo', 'ms', 'mt', 'nb', 'nc', 'nd', 'nh', 'nj', 'nm', 'nv', 'ny', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'vt', 'wa', 'wi', 'wv', 'wy'];
            return ArrayUtil.contains(states, state.toLowerCase()) == 1;
        }

        /**
         * 检测日期是大于或等于某个年龄
         * @param age
         * @param yearBorn
         * @param monthBorn
         * @param dateBorn
         * @returns {boolean}
         */
        public static isAge(age:number, yearBorn:number, monthBorn:number = 0, dateBorn:number = 1):boolean {
            var currentDate:Date = new Date();
            if (yearBorn > currentDate.getFullYear() - age)
                return false;
            if (yearBorn < currentDate.getFullYear() - age)
                return true;
            if (monthBorn > currentDate.getMonth())
                return false;
            if (monthBorn < currentDate.getMonth())
                return true;
            if (dateBorn <= currentDate.getDate())
                return true;
            return false;
        }

        /**
         * 检测信用卡是否有效
         * @param cardNumber
         * @returns {boolean}
         */
        public static isCreditCard(cardNumber:string):boolean {
            if (cardNumber.length < 7 || cardNumber.length > 19 || <number><any> cardNumber < 1000000)
                return false;

            var sum:number = 0;
            var alt:boolean = true;
            var i:number = cardNumber.length;
            var pre:number;

            while (--i > -1) {
                if (alt)
                    sum += <number><any> (cardNumber.substr(i, 1));
                else {
                    pre = <number><any> (cardNumber.substr(i, 1)) * 2;
                    sum += (pre > 8) ? pre -= 9 : pre;
                }

                alt = !alt;
            }

            return sum % 10 == 0;
        }

        /**
         * 检测信用卡卡种
         * @param cardNumber
         * @returns {string}
         */
        public static getCreditCardProvider(cardNumber:string):string {
            if (!ValidationUtil.isCreditCard(cardNumber))
                return 'invalid';

            if (cardNumber.length == 13 ||
                cardNumber.length == 16 &&
                cardNumber.indexOf('4') == 0) {
                return 'visa';
            }
            else if (cardNumber.indexOf('51') == 0 ||
                cardNumber.indexOf('52') == 0 ||
                cardNumber.indexOf('53') == 0 ||
                cardNumber.indexOf('54') == 0 ||
                cardNumber.indexOf('55') == 0 &&
                cardNumber.length == 16) {
                return 'mastercard';
            }
            else if (cardNumber.length == 16 &&
                cardNumber.indexOf('6011') == 0) {
                return 'discover';
            }
            else if (cardNumber.indexOf('34') == 0 ||
                cardNumber.indexOf('37') == 0 &&
                cardNumber.length == 15) {
                return 'amex';
            }
            else if (cardNumber.indexOf('300') == 0 ||
                cardNumber.indexOf('301') == 0 ||
                cardNumber.indexOf('302') == 0 ||
                cardNumber.indexOf('303') == 0 ||
                cardNumber.indexOf('304') == 0 ||
                cardNumber.indexOf('305') == 0 ||
                cardNumber.indexOf('36') == 0 ||
                cardNumber.indexOf('38') == 0 &&
                cardNumber.length == 14) {
                return 'diners';
            }
            else return 'other';
        }

        /**
         * 转字符
         * @returns {string}
         */
        public toString():string {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        }
    }

    /**
     * 正则初始化
     * @type {{intege: string, intege1: string, intege2: string, num: string, num1: string, num2: string, decmal: string, decmal1: string, decmal2: string, decmal3: string, decmal4: string, decmal5: string, email: string, color: string, url: string, chinese: string, ascii: string, zipcode: string, mobile: string, ip4: string, notempty: string, picture: string, rar: string, date: string, shortdate: string, shorttime: string, qq: string, tel: string, username: string, letter: string, letter_u: string, letter_l: string, idcard: string}}
     */
    export var regexEnum:IRegexEnum = {
        intege: "^-?[1-9]\\d*$",				//整数
        intege1: "^[1-9]\\d*$",					//正整数
        intege2: "^-[1-9]\\d*$",			    //负整数
        num: "^([+-]?)\\d*\\.?\\d+$",			//数字
        num1: "^[1-9]\\d*|0$",					//正数（正整数 + 0）
        num2: "^-[1-9]\\d*|0$",					//负数（负整数 + 0）
        decmal: "^([+-]?)\\d*\\.\\d+$",			                            //浮点数
        decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",                        //正浮点数
        decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",                     //负浮点数
        decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",            //正负浮点数
        decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",                //非负浮点数（正浮点数 + 0）
        decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",           //非正浮点数（负浮点数 + 0）
        email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",      //邮件
        color: "^[a-fA-F0-9]{6}$",				                            //颜色
        url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	    //url
        chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					    //仅中文
        ascii: "^[\\x00-\\xFF]+$",				                            //仅ACSII字符
        zipcode: "^\\d{6}$",						                        //邮编
        mobile: "^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$",			     //手机
        ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip地址
        notempty: "^\\S+$",						                            //非空
        picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",	    //图片
        rar: "(.*)\\.(rar|zip|7zip|tgz)$",								    //压缩文件
        date: "^\\d{4}(\\-|\\/|\\.)\\d{1,2}\\1\\d{1,2}$",					//日期
        datetime: "^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2}) (\\d{1,2}):(\\d{1,2}):(\\d{1,2})$",     //长日期时间
        shortdate: "^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2})$",            //短日期
        shorttime: "^(\\d{1,2})(:)?(\\d{1,2})\\2(\\d{1,2})$",               //短时间
        qq: "^[1-9]*[1-9][0-9]*$",				                            //QQ号码
        tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",	//电话号码的函数(包括验证国内区号,国际区号,分机号)
        username: "^\\w+$",						                            //用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
        letter: "^[A-Za-z]+$",					                            //字母
        letter_u: "^[A-Z]+$",					                            //大写字母
        letter_l: "^[a-z]+$",					                            //小写字母
        idcard: "^[1-9]([0-9]{14}|[0-9]{17})$"	                            //身份证
    };
}

