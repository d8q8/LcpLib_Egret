/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class Percent
 * @constructor
 **/
module lcp {

	/**
	 * 百分比类
	 */
	export class Percent {
		public _percent:number;

		/**
		 * 实例一个百分比类
		 * @param percentage 百分比格式化或浮点数
		 * @param isDecimalPercentage 是否为浮点数，默认为true
		 */
		public constructor(percentage:number = 0, isDecimalPercentage:boolean = true) {
			if (isDecimalPercentage) {
				this.decimalPercentage = percentage;
			} else {
				this.percentage = percentage;
			}
		}

		/**
		 * 百分比表示为一个百分比。37.5%的人会被表达 37.5
		 * @returns {number}
		 */
		public get percentage():number {
			return 100 * this._percent;
		}
		
		public set percentage(percent:number) {
			this._percent = percent * .01;
		}

		/**
		 * 表示为一个浮点数。37.5%将表示为0.375
		 * @returns {number}
		 */
		public get decimalPercentage():number {
			return this._percent;
		}
		
		public set decimalPercentage(percent:number) {
			this._percent = percent;
		}

		/**
		 * 确定是否百分比参数中指定的百分比等于这个百分比对象。
		 * @param percent 百分比对象
		 * @returns {boolean} 如果相同就为true,否则false
		 */
		public equals(percent:Percent):boolean {
			return this.decimalPercentage == percent.decimalPercentage;
		}

		/**
		 * 返回一个副本
		 * @returns {lcp.Percent}
		 */
		public clone():Percent {
			return new Percent(this.decimalPercentage);
		}
		
		public valueOf():number {
			return this.decimalPercentage;
		}
		
		public toString():string {
			return this.decimalPercentage.toString();
		}
	}
}