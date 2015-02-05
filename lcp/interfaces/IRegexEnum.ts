/**
 * Created by d8q8 on 2015/2/5.
 * @module lcp
 * @class IRegexEnum
 * @constructor
 **/
module lcp {
    /**
     * 正则检验接口类
     */
    export interface IRegexEnum {
        intege?: string;
        intege1?: string;
        intege2?: string;
        num?: string;
        num1?: string;
        num2?: string;
        decmal?: string;
        decmal1?: string;
        decmal2?: string;
        decmal3?: string;
        decmal4?: string;
        decmal5?: string;
        email?: string;
        color?: string;
        url?: string;
        chinese?: string;
        ascii?: string;
        zipcode?: string;
        mobile?: string;
        ip4?: string;
        notempty?: string;
        picture?: string;
        rar?: string;
        date?: string;
        datetime?:string;
        shortdate?: string;
        shorttime?: string;
        qq?: string;
        tel?: string;
        username?: string;
        letter?: string;
        letter_u?: string;
        letter_l?: string;
        idcard?: string;
    }
}