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
        var TextArea = (function (_super) {
            __extends(TextArea, _super);
            /**
             * 构造函数
             */
            function TextArea() {
                _super.call(this);
                /**
                 * 水平滚动条策略改变标志
                 */
                this.horizontalScrollPolicyChanged = false;
                /**
                 * 垂直滚动条策略改变标志
                 */
                this.verticalScrollPolicyChanged = false;
                this.hostComponentKey = "egret.gui.TextArea";
            }
            Object.defineProperty(TextArea.prototype, "widthInChars", {
                /**
                 * 控件的默认宽度（使用字号：size为单位测量）。 若同时设置了maxChars属性，将会根据两者测量结果的最小值作为测量宽度。
                 */
                get: function () {
                    return this._getWidthInChars();
                },
                set: function (value) {
                    this._setWidthInChars(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextArea.prototype, "heightInLines", {
                /**
                 * 控件的默认高度（以行为单位测量）。
                 */
                get: function () {
                    return this._getHeightInLines();
                },
                /**
                 *  @private
                 */
                set: function (value) {
                    this._setHeightInLines(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextArea.prototype, "horizontalScrollPolicy", {
                /**
                 * 水平滚动条显示策略，参见ScrollPolicy类定义的常量。
                 */
                get: function () {
                    return this._horizontalScrollPolicy;
                },
                set: function (value) {
                    if (this._horizontalScrollPolicy == value)
                        return;
                    this._horizontalScrollPolicy = value;
                    this.horizontalScrollPolicyChanged = true;
                    this.invalidateProperties();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextArea.prototype, "verticalScrollPolicy", {
                /**
                 * 垂直滚动条显示策略，参见ScrollPolicy类定义的常量。
                 */
                get: function () {
                    return this._verticalScrollPolicy;
                },
                set: function (value) {
                    if (this._verticalScrollPolicy == value)
                        return;
                    this._verticalScrollPolicy = value;
                    this.verticalScrollPolicyChanged = true;
                    this.invalidateProperties();
                },
                enumerable: true,
                configurable: true
            });
            TextArea.prototype._setText = function (value) {
                _super.prototype._setText.call(this, value);
                this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
            };
            /**
             * @inheritDoc
             */
            TextArea.prototype.commitProperties = function () {
                _super.prototype.commitProperties.call(this);
                if (this.horizontalScrollPolicyChanged) {
                    if (this.scroller)
                        this.scroller.horizontalScrollPolicy = this.horizontalScrollPolicy;
                    this.horizontalScrollPolicyChanged = false;
                }
                if (this.verticalScrollPolicyChanged) {
                    if (this.scroller)
                        this.scroller.verticalScrollPolicy = this.verticalScrollPolicy;
                    this.verticalScrollPolicyChanged = false;
                }
            };
            /**
             * @inheritDoc
             */
            TextArea.prototype.partAdded = function (partName, instance) {
                _super.prototype.partAdded.call(this, partName, instance);
                if (instance == this.textDisplay) {
                    this.textDisplay.multiline = true;
                }
                else if (instance == this.scroller) {
                }
            };
            /**
             * @inheritDoc
             */
            TextArea.prototype.createSkinParts = function () {
                this.textDisplay = new gui.EditableText();
                this.textDisplay.widthInChars = 15;
                this.textDisplay.heightInLines = 10;
                this._addToDisplayList((this.textDisplay));
                this.partAdded("textDisplay", this.textDisplay);
            };
            return TextArea;
        })(gui.SkinnableTextBase);
        gui.TextArea = TextArea;
        TextArea.prototype.__class__ = "gui.TextArea";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
