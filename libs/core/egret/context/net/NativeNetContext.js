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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    var NativeNetContext = (function (_super) {
        __extends(NativeNetContext, _super);
        function NativeNetContext() {
            _super.call(this);
            this.urlData = {};
            /**
             * 本地版本信息文件存储路径
             */
            this.localVersionDataPath = "localVersion.manifest";
        }
        /**
         * @method egret.HTML5NetContext#proceed
         * @param loader {URLLoader}
         */
        NativeNetContext.prototype.proceed = function (loader) {
            if (loader.dataFormat == egret.URLLoaderDataFormat.TEXTURE) {
                this.loadTexture(loader);
                return;
            }
            if (loader.dataFormat == egret.URLLoaderDataFormat.SOUND) {
                this.loadSound(loader);
                return;
            }
            var request = loader._request;
            var url = egret.NetContext._getUrl(request);
            if (url.indexOf("http://") == 0) {
                this.urlData.type = request.method;
                if (request.method == egret.URLRequestMethod.POST && request.data && request.data instanceof egret.URLVariables) {
                    var urlVars = request.data;
                    this.urlData.data = urlVars.toString();
                }
                else {
                    delete this.urlData["data"];
                }
                var promise = egret.PromiseObject.create();
                promise.onSuccessFunc = function (getted_str) {
                    loader.data = getted_str;
                    egret.callLater(egret.Event.dispatchEvent, egret.Event, loader, egret.Event.COMPLETE);
                };
                promise.onErrorFunc = function (error_code) {
                    console.log("net error:" + error_code);
                    egret.IOErrorEvent.dispatchIOErrorEvent(loader);
                };
                egret_native.requireHttp(url, this.urlData, promise);
            }
            else if (!egret_native.isFileExists(url)) {
                download();
            }
            else if (this.currentVersionData && !this.checkIsNewVersion(url)) {
                download();
            }
            else {
                egret.__callAsync(onLoadComplete, this);
            }
            function download() {
                var promise = egret.PromiseObject.create();
                promise.onSuccessFunc = onLoadComplete;
                promise.onErrorFunc = function () {
                    egret.IOErrorEvent.dispatchIOErrorEvent(loader);
                };
                egret_native.download(url, url, promise);
            }
            function onLoadComplete() {
                var content = egret_native.readFileSync(url);
                loader.data = content;
                egret.Event.dispatchEvent(loader, egret.Event.COMPLETE);
            }
        };
        NativeNetContext.prototype.loadSound = function (loader) {
            var request = loader._request;
            var url = request.url;
            if (url.indexOf("http://") != -1) {
                download();
            }
            else if (!egret_native.isFileExists(url)) {
                download();
            }
            else if (this.currentVersionData && !this.checkIsNewVersion(url)) {
                download();
            }
            else {
                egret.__callAsync(onLoadComplete, this);
            }
            function download() {
                //                console.log("download:" + url);
                var promise = egret.PromiseObject.create();
                promise.onSuccessFunc = onLoadComplete;
                promise.onErrorFunc = function () {
                    egret.IOErrorEvent.dispatchIOErrorEvent(loader);
                };
                egret_native.download(url, url, promise);
            }
            function onLoadComplete() {
                var sound = new egret.Sound();
                sound.path = url;
                loader.data = sound;
                egret.Event.dispatchEvent(loader, egret.Event.COMPLETE);
            }
        };
        NativeNetContext.prototype.loadTexture = function (loader) {
            var self = this;
            var request = loader._request;
            var url = request.url;
            if (url.indexOf("http://") != -1) {
                download();
            }
            else if (!egret_native.isFileExists(url)) {
                download();
            }
            else if (this.currentVersionData && !this.checkIsNewVersion(url)) {
                download();
            }
            else {
                egret.__callAsync(onLoadComplete, this);
            }
            function download() {
                var promise = egret.PromiseObject.create();
                promise.onSuccessFunc = onLoadComplete;
                promise.onErrorFunc = function () {
                    egret.IOErrorEvent.dispatchIOErrorEvent(loader);
                };
                egret_native.download(url, url, promise);
            }
            function onLoadComplete() {
                self.saveVersion(url);
                var bitmapData = egret_native.Texture.addTexture(url);
                var texture = new egret.Texture();
                texture._setBitmapData(bitmapData);
                loader.data = texture;
                egret.Event.dispatchEvent(loader, egret.Event.COMPLETE);
            }
        };
        /**
         * 检查文件是否是最新版本
         */
        NativeNetContext.prototype.checkIsNewVersion = function (url) {
            //            console.log("check:" + url);
            //            console.log(this.currentVersionData[url]);
            //            console.log(this.baseVersionData[url]);
            //            console.log(this.localVersionData[url]);
            if (typeof this.currentVersionData[url] != "undefined") {
                if (this.currentVersionData[url] == this.localVersionData[url]) {
                    return true;
                }
            }
            else if ((typeof this.baseVersionData[url] != "undefined") && this.baseVersionData[url] == this.localVersionData[url]) {
                return true;
            }
            return false;
        };
        /**
         * 保存本地版本信息文件
         */
        NativeNetContext.prototype.saveVersion = function (url) {
            var change = false;
            if (this.currentVersionData && this.currentVersionData[url]) {
                this.localVersionData[url] = this.currentVersionData[url];
                change = true;
            }
            else if (this.baseVersionData && this.baseVersionData) {
                this.localVersionData[url] = this.baseVersionData[url];
                change = true;
            }
            if (change) {
                //                console.log("save:" + url);
                egret_native.saveRecord(this.localVersionDataPath, JSON.stringify(this.localVersionData));
            }
        };
        return NativeNetContext;
    })(egret.NetContext);
    egret.NativeNetContext = NativeNetContext;
    NativeNetContext.prototype.__class__ = "egret.NativeNetContext";
})(egret || (egret = {}));
