/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class ConversionUtil
 * @constructor
 **/
module lcp {

	export class ConversionUtil {
		public CLASS_NAME:string = "ConversionUtil";

		/**
		 * 比特转字节
		 * @param bits
		 * @returns {number}
		 */
		public static bitsToBytes(bits:number):number {
			return bits / 8;
		}

		/**
		 * 比特转千比特
		 * @param bits
		 * @returns {number}
		 */
		public static bitsToKilobits(bits:number):number {
			return bits / 1024;
		}

		/**
		 * 比特转千字节
		 * @param bits
		 * @returns {number}
		 */
		public static bitsToKilobytes(bits:number):number {
			return bits / 8192;
		}

		/**
		 * 字节转比特
		 * @param bytes
		 * @returns {number}
		 */
		public static bytesToBits(bytes:number):number {
			return bytes * 8;
		}

		/**
		 * 字节转千比特
		 * @param bytes
		 * @returns {number}
		 */
		public static bytesToKilobits(bytes:number):number {
			return bytes / 128;
		}

		/**
		 * 字节转千字节
		 * @param bytes
		 * @returns {number}
		 */
		public static bytesToKilobytes(bytes:number):number {
			return bytes / 1024;
		}

		/**
		 * 千比特转比特
		 * @param kilobits
		 * @returns {number}
		 */
		public static kilobitsToBits(kilobits:number):number {
			return kilobits * 1024;
		}

		/**
		 * 千比特转字节
		 * @param kilobits
		 * @returns {number}
		 */
		public static kilobitsToBytes(kilobits:number):number {
			return kilobits * 128;
		}

		/**
		 * 千比特转千字节
		 * @param kilobits
		 * @returns {number}
		 */
		public static kilobitsToKilobytes(kilobits:number):number {
			return kilobits / 8;
		}

		/**
		 * 千字节转比特
		 * @param kilobytes
		 * @returns {number}
		 */
		public static kilobytesToBits(kilobytes:number):number {
			return kilobytes * 8192;
		}

		/**
		 * 千字节转字节
		 * @param kilobytes
		 * @returns {number}
		 */
		public static kilobytesToBytes(kilobytes:number):number {
			return kilobytes * 1024;
		}

		/**
		 * 千字节转千比特
		 * @param kilobytes
		 * @returns {number}
		 */
		public static kilobytesToKilobits(kilobytes:number):number {
			return kilobytes * 8;
		}

		/**
		 * 转毫秒到秒
		 * @param milliseconds
		 * @returns {number}
		 */
		public static millisecondsToSeconds(milliseconds:number):number {
			return milliseconds / 1000;
		}

		/**
		 * 转毫秒到分
		 * @param milliseconds
		 * @returns {number}
		 */
		public static millisecondsToMinutes(milliseconds:number):number {
			return this.secondsToMinutes(this.millisecondsToSeconds(milliseconds));
		}

		/**
		 * 转毫秒到小时
		 * @param milliseconds
		 * @returns {number}
		 */
		public static millisecondsToHours(milliseconds:number):number {
			return this.minutesToHours(this.millisecondsToMinutes(milliseconds));
		}

		/**
		 * 转毫秒到天
		 * @param milliseconds
		 * @returns {number}
		 */
		public static millisecondsToDays(milliseconds:number):number {
			return this.hoursToDays(this.millisecondsToHours(milliseconds));
		}

		/**
		 * 转秒到毫秒
		 * @param seconds
		 * @returns {number}
		 */
		public static secondsToMilliseconds(seconds:number):number {
			return seconds * 1000;
		}

		/**
		 * 转秒到分
		 * @param seconds
		 * @returns {number}
		 */
		public static secondsToMinutes(seconds:number):number {
			return seconds / 60;
		}

		/**
		 * 转秒到小时
		 * @param seconds
		 * @returns {number}
		 */
		public static secondsToHours(seconds:number):number {
			return this.minutesToHours(this.secondsToMinutes(seconds));
		}

		/**
		 * 转秒到天
		 * @param seconds
		 * @returns {number}
		 */
		public static secondsToDays(seconds:number):number {
			return this.hoursToDays(this.secondsToHours(seconds));
		}

		/**
		 * 转分到毫秒
		 * @param minutes
		 * @returns {number}
		 */
		public static minutesToMilliseconds(minutes:number):number {
			return this.secondsToMilliseconds(this.minutesToSeconds(minutes));
		}

		/**
		 * 转分到秒
		 * @param minutes
		 * @returns {number}
		 */
		public static minutesToSeconds(minutes:number):number {
			return minutes * 60;
		}

		/**
		 * 转分到小时
		 * @param minutes
		 * @returns {number}
		 */
		public static minutesToHours(minutes:number):number {
			return minutes / 60;
		}

		/**
		 * 转分到天
		 * @param minutes
		 * @returns {number}
		 */
		public static minutesToDays(minutes:number):number {
			return this.hoursToDays(this.minutesToHours(minutes));
		}

		/**
		 * 转小时到毫秒
		 * @param hours
		 * @returns {number}
		 */
		public static hoursToMilliseconds(hours:number):number {
			return this.secondsToMilliseconds(this.hoursToSeconds(hours));
		}

		/**
		 * 转小时到秒
		 * @param hours
		 * @returns {number}
		 */
		public static hoursToSeconds(hours:number):number {
			return this.minutesToSeconds(this.hoursToMinutes(hours));
		}

		/**
		 * 转小时到分
		 * @param hours
		 * @returns {number}
		 */
		public static hoursToMinutes(hours:number):number {
			return hours * 60;
		}

		/**
		 * 转小时到天
		 * @param hours
		 * @returns {number}
		 */
		public static hoursToDays(hours:number):number {
			return hours / 24;
		}

		/**
		 * 转天到毫秒
		 * @param days
		 * @returns {number}
		 */
		public static daysToMilliseconds(days:number):number {
			return this.secondsToMilliseconds(this.daysToSeconds(days));
		}

		/**
		 * 转天到秒
		 * @param days
		 * @returns {number}
		 */
		public static daysToSeconds(days:number):number {
			return this.minutesToSeconds(this.daysToMinutes(days));
		}

		/**
		 * 转天到分
		 * @param days
		 * @returns {number}
		 */
		public static daysToMinutes(days:number):number {
			return this.hoursToMinutes(this.daysToHours(days));
		}

		/**
		 * 转天到小时
		 * @param days
		 * @returns {number}
		 */
		public static daysToHours(days:number):number {
			return days * 24;
		}

		/**
		 * 转角度到弧度
		 * @param degrees
		 * @returns {number}
		 */
		public static degreesToRadians(degrees:number):number {
			return degrees * (Math.PI / 180);
		}

		/**
		 * 转弧度到角度
		 * @param radians
		 * @returns {number}
		 */
		public static radiansToDegrees(radians:number):number {
			return radians * (180 / Math.PI);
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