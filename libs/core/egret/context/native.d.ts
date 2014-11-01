/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare module egret {
    /**
     * @class egret.NativeDeviceContext
     * @classdesc
     * @extends egret.HashObject
     */
    class NativeDeviceContext extends HashObject {
        private callback;
        private thisObject;
        /**
         * @method egret.NativeDeviceContext#constructor
         */
        constructor();
        /**
         * @method egret.NativeDeviceContext#executeMainLoop
         * @param callback {Function}
         * @param thisObject {any}
         */
        executeMainLoop(callback: Function, thisObject: any): void;
        private onEnterFrame(advancedTime);
    }
}
declare module egret_native_external_interface {
    var callBackDic: {};
    function call(functionName: string, value: string): void;
    function addCallback(functionName: string, listener: Function): void;
    function onReceivedPluginInfo(info: string): void;
    function init(): void;
}
declare module egret_native_sound {
    function play(loop: boolean): void;
    function pause(): void;
    function load(): void;
    function preload(type: any): void;
    function setVolume(value: any): void;
    function getVolume(): any;
    function init(): void;
}
declare module egret_native_localStorage {
    var filePath: string;
    function getItem(key: string): string;
    function setItem(key: string, value: string): void;
    function removeItem(key: string): void;
    function clear(): void;
    function save(): void;
    function init(): void;
}
/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare module egret {
    /**
     * @class egret.NativeRendererContext
     * @classdesc
     * NativeRendererContext 是引擎在Native上的渲染上下文。
     * @extends egret.HashObject
     */
    class NativeRendererContext extends RendererContext {
        /**
         * 渲染全部纹理的时间开销
         * @readonly
         * @member egret.NativeRendererContext#renderCost
         */
        renderCost: number;
        /**
         * 绘制纹理的缩放比率，默认值为1
         * @member egret.NativeRendererContext#texture_scale_factor
         */
        texture_scale_factor: number;
        /**
         * @method egret.NativeRendererContext#constructor
         */
        constructor();
        /**
         * @method egret.NativeRendererContext#clearScreen
         * @private
         */
        clearScreen(): void;
        /**
         * 清除Context的渲染区域
         * @method egret.NativeRendererContext#clearRect
         * @param x {number}
         * @param y {number}
         * @param w {number}
         * @param h {numbe}
         */
        clearRect(x: number, y: number, w: number, h: number): void;
        /**
         * 绘制图片
         * @method egret.NativeRendererContext#drawImage
         * @param texture {Texture}
         * @param sourceX {any}
         * @param sourceY {any}
         * @param sourceWidth {any}
         * @param sourceHeight {any}
         * @param destX {any}
         * @param destY {any}
         * @param destWidth {any}
         * @param destHeigh {any}
         */
        drawImage(texture: Texture, sourceX: any, sourceY: any, sourceWidth: any, sourceHeight: any, destX: any, destY: any, destWidth: any, destHeight: any): void;
        /**
         * 变换Context的当前渲染矩阵
         * @method egret.NativeRendererContext#setTransform
         * @param matrix {egret.Matrix}
         * @stable A
         */
        setTransform(matrix: Matrix): void;
        private currentAlpha;
        /**
         * 设置渲染alpha
         * @method egret.NativeRendererContext#setAlpha
         * @param value {number}
         * @stable A
         * @param blendMode {egret.BlendMode}
         */
        setAlpha(value: number, blendMode: string): void;
        private currentBlendMode;
        private setBlendMode(blendMode);
        /**
         * 设置渲染文本参数
         * @method egret.NativeRendererContext#setupFont
         * @param textField {TextField}
         */
        setupFont(textField: TextField): void;
        /**
         * 测量文本
         * @method egret.NativeRendererContext#measureText
         * @param text {string}
         * @returns {number}
         */
        measureText(text: string): number;
        /**
         * 绘制文本
         * @method egret.NativeRendererContext#drawText
         * @param textField {egret.TextField}
         * @param text {string}
         * @param x {number}
         * @param y {number}
         * @param maxWidth {numbe}
         */
        drawText(textField: TextField, text: string, x: number, y: number, maxWidth: number): void;
        pushMask(mask: Rectangle): void;
        popMask(): void;
        private blendModes;
        private initBlendMode();
    }
}
declare var egret_native_graphics: any;
/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare module egret {
    class NativeTouchContext extends TouchContext {
        constructor();
        run(): void;
    }
}
declare module egret_native {
    function onTouchesBegin(num: number, ids: any[], xs_array: any[], ys_array: any[]): void;
    function onTouchesMove(num: number, ids: any[], xs_array: any[], ys_array: any[]): void;
    function onTouchesEnd(num: number, ids: any[], xs_array: any[], ys_array: any[]): void;
    function onTouchesCancel(num: number, ids: any[], xs_array: any[], ys_array: any[]): void;
    function executeTouchCallback(num: number, ids: any[], xs_array: any[], ys_array: any[], callback: Function): void;
}
/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare module egret {
    class PromiseObject {
        private static promiseObjectList;
        onSuccessFunc: Function;
        onSuccessThisObject: any;
        onErrorFunc: Function;
        onErrorThisObject: any;
        downloadingSizeFunc: Function;
        downloadingSizeThisObject: any;
        constructor();
        static create(): any;
        private onSuccess(...args);
        private onError(...args);
        private downloadingSize(...args);
        private destroy();
    }
}
/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare module egret {
    class NativeNetContext extends NetContext {
        constructor();
        private urlData;
        /**
         * @method egret.HTML5NetContext#proceed
         * @param loader {URLLoader}
         */
        proceed(loader: URLLoader): void;
        private loadSound(loader);
        private loadTexture(loader);
        /**
         * 本地版本信息文件存储路径
         */
        private localVersionDataPath;
        /**
         * 本地版本信息文件，记录了本地文件版本信息
         */
        private localVersionData;
        /**
         * 当前版本信息文件，记录了当前版本中相对于基础版本变化的文件
         */
        private currentVersionData;
        /**
         * 基础版本信息文件
         */
        private baseVersionData;
        /**
         * 检查文件是否是最新版本
         */
        private checkIsNewVersion(url);
        /**
         * 保存本地版本信息文件
         */
        private saveVersion(url);
    }
}
/**
 * Created by wander on 14-9-15.
 */
/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare module egret {
    /**
     * @class egret.StageText
     * @classdesc
     * @extends egret.HashObject
     */
    class NativeStageText extends StageText {
        private textValue;
        private tf;
        private container;
        private textBg;
        private textBorder;
        private textType;
        constructor();
        private createText();
        /**
         * @method egret.StageText#getText
         * @returns {string}
         */
        _getText(): string;
        /**
         * @method egret.StageText#setText
         * @param value {string}
         */
        _setText(value: string): void;
        /**
         * @method egret.StageText#setTextType
         * @param type {string}
         */
        _setTextType(type: string): void;
        /**
         * @method egret.StageText#getTextType
         * @returns {string}
         */
        _getTextType(): string;
        /**
         * @method egret.StageText#open
         * @param x {number}
         * @param y {number}
         * @param width {number}
         * @param height {number}
         */
        _open(x: number, y: number, width?: number, height?: number): void;
        private resetText();
        private isFinishDown;
        private showScreenKeyboard();
        private showPartKeyboard();
        /**
         * @method egret.StageText#add
         */
        _show(): void;
        /**
         * @method egret.StageText#remove
         */
        _remove(): void;
        _hide(): void;
    }
}
