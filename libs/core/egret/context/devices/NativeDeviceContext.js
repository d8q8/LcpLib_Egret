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
    /**
     * @class egret.NativeDeviceContext
     * @classdesc
     * @extends egret.HashObject
     */
    var NativeDeviceContext = (function (_super) {
        __extends(NativeDeviceContext, _super);
        /**
         * @method egret.NativeDeviceContext#constructor
         */
        function NativeDeviceContext() {
            _super.call(this);
            egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
        }
        /**
         * @method egret.NativeDeviceContext#executeMainLoop
         * @param callback {Function}
         * @param thisObject {any}
         */
        NativeDeviceContext.prototype.executeMainLoop = function (callback, thisObject) {
            this.callback = callback;
            this.thisObject = thisObject;
            egret_native.executeMainLoop(this.onEnterFrame, this);
        };
        NativeDeviceContext.prototype.onEnterFrame = function (advancedTime) {
            this.callback.call(this.thisObject, advancedTime);
        };
        return NativeDeviceContext;
    })(egret.HashObject);
    egret.NativeDeviceContext = NativeDeviceContext;
    NativeDeviceContext.prototype.__class__ = "egret.NativeDeviceContext";
})(egret || (egret = {}));
var egret_native_external_interface;
(function (egret_native_external_interface) {
    egret_native_external_interface.callBackDic = {};
    function call(functionName, value) {
        var data = {};
        data.functionName = functionName;
        data.value = value;
        egret_native.sendInfoToPlugin(JSON.stringify(data));
    }
    egret_native_external_interface.call = call;
    function addCallback(functionName, listener) {
        egret_native_external_interface.callBackDic[functionName] = listener;
    }
    egret_native_external_interface.addCallback = addCallback;
    function onReceivedPluginInfo(info) {
        var data = JSON.parse(info);
        var functionName = data.functionName;
        var listener = egret_native_external_interface.callBackDic[functionName];
        if (listener) {
            var value = data.value;
            listener.call(null, value);
        }
        else {
            egret.Logger.warning("ExternalInterface调用了js没有注册的方法:" + functionName);
        }
    }
    egret_native_external_interface.onReceivedPluginInfo = onReceivedPluginInfo;
    function init() {
        for (var key in egret_native_external_interface) {
            egret.ExternalInterface[key] = egret_native_external_interface[key];
        }
        egret_native.receivedPluginInfo = egret_native_external_interface.onReceivedPluginInfo;
    }
    egret_native_external_interface.init = init;
})(egret_native_external_interface || (egret_native_external_interface = {}));
egret_native_external_interface.init();
var egret_native_sound;
(function (egret_native_sound) {
    function play(loop) {
        if (typeof loop == "undefined") {
            loop = false;
        }
        if (this.type == egret.Sound.MUSIC) {
            egret_native.Audio.playBackgroundMusic(this.path, loop);
        }
        else if (this.type == egret.Sound.EFFECT) {
            this.effect_id = egret_native.Audio.playEffect(this.path, loop);
        }
    }
    egret_native_sound.play = play;
    function pause() {
        if (this.type == egret.Sound.MUSIC) {
            egret_native.Audio.stopBackgroundMusic(false);
        }
        else if (this.type == egret.Sound.EFFECT) {
            if (this.effect_id) {
                egret_native.Audio.stopEffect(this.effect_id);
                this.effect_id = null;
            }
        }
    }
    egret_native_sound.pause = pause;
    function load() {
    }
    egret_native_sound.load = load;
    function preload(type) {
        this.type = type;
        if (this.type == egret.Sound.MUSIC) {
            egret_native.Audio.preloadBackgroundMusic(this.path);
        }
        else if (this.type == egret.Sound.EFFECT) {
            egret_native.Audio.preloadEffect(this.path);
        }
    }
    egret_native_sound.preload = preload;
    function setVolume(value) {
        this.volume = value;
    }
    egret_native_sound.setVolume = setVolume;
    function getVolume() {
        return this.volume;
    }
    egret_native_sound.getVolume = getVolume;
    function init() {
        for (var key in egret_native_sound) {
            egret.Sound.prototype[key] = egret_native_sound[key];
        }
    }
    egret_native_sound.init = init;
})(egret_native_sound || (egret_native_sound = {}));
egret_native_sound.init();
var egret_native_localStorage;
(function (egret_native_localStorage) {
    egret_native_localStorage.filePath = "LocalStorage.local";
    function getItem(key) {
        return this.data[key];
    }
    egret_native_localStorage.getItem = getItem;
    function setItem(key, value) {
        this.data[key] = value;
        this.save();
    }
    egret_native_localStorage.setItem = setItem;
    function removeItem(key) {
        delete this.data[key];
        this.save();
    }
    egret_native_localStorage.removeItem = removeItem;
    function clear() {
        for (var key in this.data) {
            delete this.data[key];
        }
        this.save();
    }
    egret_native_localStorage.clear = clear;
    function save() {
        //        console.log("egret_native_localStorage::" + "WriteFile");
        egret_native.saveRecord(egret_native_localStorage.filePath, JSON.stringify(this.data));
    }
    egret_native_localStorage.save = save;
    function init() {
        if (egret_native.isRecordExists(egret_native_localStorage.filePath)) {
            //            console.log("egret_native_localStorage::" + "文件存在");
            var str = egret_native.loadRecord(egret_native_localStorage.filePath);
            //            console.log("egret_native_localStorage::" + str);
            this.data = JSON.parse(str);
        }
        else {
            //            console.log("egret_native_localStorage::" + "文件不存在");
            this.data = {};
        }
        for (var key in egret_native_localStorage) {
            egret.localStorage[key] = egret_native_localStorage[key];
        }
    }
    egret_native_localStorage.init = init;
})(egret_native_localStorage || (egret_native_localStorage = {}));
egret_native_localStorage.init();
