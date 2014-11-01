var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/** Created with JetBrains WebStorm.
 * User: yjtx
 * Date: 14-10-9
 * Time: 下午1:58
 * Class: InputUtils
 * Summary:
 */
var egret;
(function (egret) {
    var InputController = (function (_super) {
        __extends(InputController, _super);
        function InputController() {
            _super.call(this);
            this._isFocus = false;
        }
        InputController.prototype.init = function (text) {
            this._text = text;
            this.stageText = egret.StageText.create();
            var point = this._text.localToGlobal();
            this.stageText._open(point.x, point.y, this._text._explicitWidth, this._text._explicitHeight);
        };
        InputController.prototype._addStageText = function () {
            if (!this._text._inputEnabled) {
                this._text._touchEnabled = true;
            }
            this.stageText._add();
            this.stageText._addListeners();
            this.stageText.addEventListener("blur", this.onBlurHandler, this);
            this.stageText.addEventListener("focus", this.onFocusHandler, this);
            this.stageText.addEventListener("updateText", this.updateTextHandler, this);
            this._text.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
        };
        InputController.prototype._removeStageText = function () {
            this.stageText._remove();
            this.stageText._removeListeners();
            if (!this._text._inputEnabled) {
                this._text._touchEnabled = false;
            }
            this.stageText.removeEventListener("blur", this.onBlurHandler, this);
            this.stageText.removeEventListener("focus", this.onFocusHandler, this);
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
            this._text.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
            egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
        };
        InputController.prototype._setText = function (value) {
            this.stageText._setText(value);
        };
        InputController.prototype.onFocusHandler = function (event) {
            this.hideText();
        };
        //显示文本
        InputController.prototype.onBlurHandler = function (event) {
            this.showText();
        };
        //点中文本
        InputController.prototype.onMouseDownHandler = function (event) {
            event.stopPropagation();
            if (!this._text._visible) {
                return;
            }
            this.stageText._show();
        };
        //未点中文本
        InputController.prototype.onStageDownHandler = function (event) {
            this.stageText._hide();
            this.showText();
        };
        InputController.prototype.showText = function () {
            if (this._isFocus) {
                this._isFocus = false;
                this.resetText();
            }
        };
        InputController.prototype.hideText = function () {
            if (!this._isFocus) {
                this._text.visible = false;
                this._isFocus = true;
            }
        };
        InputController.prototype.updateTextHandler = function (event) {
            this.resetText();
        };
        InputController.prototype.resetText = function () {
            this._text.visible = true;
            this._text._setBaseText(this.stageText._getText());
        };
        InputController.prototype._updateTransform = function () {
            //todo 等待worldTransform的性能优化完成，合并这块代码
            var oldTransFormA = this._text._worldTransform.a;
            var oldTransFormB = this._text._worldTransform.b;
            var oldTransFormC = this._text._worldTransform.c;
            var oldTransFormD = this._text._worldTransform.d;
            var oldTransFormTx = this._text._worldTransform.tx;
            var oldTransFormTy = this._text._worldTransform.ty;
            this._text._updateBaseTransform();
            var newTransForm = this._text._worldTransform;
            if (oldTransFormA != newTransForm.a || oldTransFormB != newTransForm.b || oldTransFormC != newTransForm.c || oldTransFormD != newTransForm.d || oldTransFormTx != newTransForm.tx || oldTransFormTy != newTransForm.ty) {
                var point = this._text.localToGlobal();
                this.stageText.changePosition(point.x, point.y);
            }
        };
        InputController.prototype._updateProperties = function () {
            var stage = this._text._stage;
            if (stage == null) {
                this.stageText._setVisible(false);
            }
            else {
                var item = this._text;
                var visible = item._visible;
                while (true) {
                    if (!visible) {
                        break;
                    }
                    item = item.parent;
                    if (item == stage) {
                        break;
                    }
                    visible = item._visible;
                }
                this.stageText._setVisible(visible);
            }
            this.stageText._setMultiline(this._text._multiline);
            this.stageText._setSize(this._text._size);
            this.stageText._setTextColor(this._text._textColorString);
            this.stageText._setTextFontFamily(this._text._fontFamily);
            this.stageText._setBold(this._text._bold);
            this.stageText._setItalic(this._text._italic);
            this.stageText._setTextAlign(this._text._textAlign);
            this.stageText._setWidth(this._text._getSize(egret.Rectangle.identity).width);
            this.stageText._setHeight(this._text._getSize(egret.Rectangle.identity).height);
            this.stageText._setTextType(this._text._displayAsPassword ? "password" : "text");
            this.stageText._setText(this._text._text);
            //整体修改
            this.stageText._resetStageText();
            this._updateTransform();
        };
        return InputController;
    })(egret.HashObject);
    egret.InputController = InputController;
    InputController.prototype.__class__ = "egret.InputController";
})(egret || (egret = {}));
