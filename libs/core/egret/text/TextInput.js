/** Created with JetBrains WebStorm.
 * User: yjtx
 * Date: 14-10-8
 * Time: 下午3:44
 * Class: FieldInput
 * Summary:
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    /**
     * @class egret.TextInput
     * @classdesc
     * TextInput 已废弃，请使用TextField代替，并设置type为TextFieldType.INPUT
     * @extends egret.TextField
     * @deprecated
     */
    var TextInput = (function (_super) {
        __extends(TextInput, _super);
        function TextInput() {
            _super.call(this);
            egret.Logger.warning("TextInput 已废弃，请使用TextField代替，并设置type为TextFieldType.INPUT");
            this.type = egret.TextFieldType.INPUT;
        }
        /**
         * 请使用TextField.text设置
         * @deprecated
         * @param value
         */
        TextInput.prototype.setText = function (value) {
            egret.Logger.warning("TextField.setText()已废弃，请使用TextInput.text设置");
            this.text = value;
        };
        /**
         * 请使用TextInput.text获取
         * @deprecated
         * @returns {string}
         */
        TextInput.prototype.getText = function () {
            egret.Logger.warning("TextField.getText()已废弃，请使用TextInput.text获取");
            return this.text;
        };
        /**
         * 请使用TextInput.displayAsPassword设置
         * @deprecated
         * @param value
         */
        TextInput.prototype.setTextType = function (type) {
            egret.Logger.warning("TextField.setTextType()已废弃，请使用TextInput.displayAsPassword设置");
            this.displayAsPassword = type == "password";
        };
        /**
         * 请使用TextInput.displayAsPassword获取
         * @deprecated
         * @returns {string}
         */
        TextInput.prototype.getTextType = function () {
            egret.Logger.warning("TextField.getTextType()已废弃，请使用TextInput.displayAsPassword获取");
            return this.displayAsPassword ? "password" : "text";
        };
        return TextInput;
    })(egret.TextField);
    egret.TextInput = TextInput;
    TextInput.prototype.__class__ = "egret.TextInput";
})(egret || (egret = {}));
