var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        var TextInput = (function (_super) {
            __extends(TextInput, _super);
            /**
             * 构造函数
             */
            function TextInput() {
                _super.call(this);
                this.hostComponentKey = "egret.gui.TextInput";
            }
            Object.defineProperty(TextInput.prototype, "widthInChars", {
                /**
                 * 控件的默认宽度（使用字号：size为单位测量）。 若同时设置了maxChars属性，将会根据两者测量结果的最小值作为测量宽度。
                 */
                get: function () {
                    return _super.prototype._getWidthInChars.call(this);
                },
                set: function (value) {
                    _super.prototype._setWidthInChars.call(this, value);
                },
                enumerable: true,
                configurable: true
            });
            TextInput.prototype._setText = function (value) {
                _super.prototype._setText.call(this, value);
                this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
            };
            /**
             * @inheritDoc
             */
            TextInput.prototype.partAdded = function (partName, instance) {
                _super.prototype.partAdded.call(this, partName, instance);
                if (instance == this.textDisplay) {
                    this.textDisplay.multiline = false;
                }
            };
            /**
             * @inheritDoc
             */
            TextInput.prototype.createSkinParts = function () {
                this.textDisplay = new gui.EditableText();
                this.textDisplay.widthInChars = 10;
                this.textDisplay.multiline = false;
                this.textDisplay.left = 1;
                this.textDisplay.right = 1;
                this.textDisplay.top = 1;
                this.textDisplay.bottom = 1;
                this._addToDisplayList((this.textDisplay));
                this.partAdded("textDisplay", this.textDisplay);
            };
            return TextInput;
        })(gui.SkinnableTextBase);
        gui.TextInput = TextInput;
        TextInput.prototype.__class__ = "gui.TextInput";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
