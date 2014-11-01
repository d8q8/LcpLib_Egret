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
declare module dragonBones {
    module geom {
        class Point {
            x: number;
            y: number;
            constructor(x?: number, y?: number);
            toString(): string;
        }
        class Rectangle {
            x: number;
            y: number;
            width: number;
            height: number;
            constructor(x?: number, y?: number, width?: number, height?: number);
        }
        class Matrix {
            a: number;
            b: number;
            c: number;
            d: number;
            tx: number;
            ty: number;
            constructor();
            invert(): void;
        }
        class ColorTransform {
            alphaMultiplier: number;
            alphaOffset: number;
            blueMultiplier: number;
            blueOffset: number;
            greenMultiplier: number;
            greenOffset: number;
            redMultiplier: number;
            redOffset: number;
            constructor();
        }
    }
    module events {
        class Event {
            type: string;
            target: EventDispatcher;
            constructor(type: string);
        }
        class AnimationEvent extends Event {
            static FADE_IN: string;
            static FADE_OUT: string;
            static START: string;
            static COMPLETE: string;
            static LOOP_COMPLETE: string;
            static FADE_IN_COMPLETE: string;
            static FADE_OUT_COMPLETE: string;
            animationState: animation.AnimationState;
            armature: Armature;
            constructor(type: string);
        }
        class ArmatureEvent extends Event {
            static Z_ORDER_UPDATED: string;
            constructor(type: string);
        }
        class FrameEvent extends Event {
            static ANIMATION_FRAME_EVENT: string;
            static BONE_FRAME_EVENT: string;
            animationState: animation.AnimationState;
            armature: Armature;
            bone: Bone;
            frameLabel: string;
            constructor(type: string);
        }
        class SoundEvent extends Event {
            static SOUND: string;
            static BONE_FRAME_EVENT: string;
            animationState: animation.AnimationState;
            armature: Armature;
            sound: string;
            constructor(type: string);
        }
        class EventDispatcher {
            private _listenersMap;
            constructor();
            hasEventListener(type: string): boolean;
            addEventListener(type: string, listener: Function): void;
            removeEventListener(type: string, listener: Function): void;
            removeAllEventListeners(type: string): void;
            dispatchEvent(event: Event): void;
        }
        class SoundEventManager extends EventDispatcher {
            private static _instance;
            static getInstance(): SoundEventManager;
            constructor();
        }
    }
    module animation {
        interface IAnimatable {
            advanceTime(passedTime: number): void;
        }
        class WorldClock implements IAnimatable {
            static clock: WorldClock;
            time: number;
            timeScale: number;
            private _animatableList;
            constructor();
            contains(animatable: IAnimatable): boolean;
            add(animatable: IAnimatable): void;
            remove(animatable: IAnimatable): void;
            clear(): void;
            advanceTime(passedTime: number): void;
        }
        class TimelineState {
            private static HALF_PI;
            private static _pool;
            static _borrowObject(): TimelineState;
            /** @private */
            static _returnObject(timeline: TimelineState): void;
            /** @private */
            static _clear(): void;
            static getEaseValue(value: number, easing: number): number;
            transform: objects.DBTransform;
            pivot: geom.Point;
            tweenActive: boolean;
            private _updateState;
            private _animationState;
            private _bone;
            private _timeline;
            private _currentFrame;
            private _currentFramePosition;
            private _currentFrameDuration;
            private _durationTransform;
            private _durationPivot;
            private _durationColor;
            private _originTransform;
            private _originPivot;
            private _tweenEasing;
            private _tweenTransform;
            private _tweenColor;
            private _totalTime;
            constructor();
            fadeIn(bone: Bone, animationState: AnimationState, timeline: objects.TransformTimeline): void;
            fadeOut(): void;
            update(progress: number): void;
            private clear();
        }
        class AnimationState {
            private static _pool;
            /** @private */
            static _borrowObject(): AnimationState;
            /** @private */
            static _returnObject(animationState: AnimationState): void;
            /** @private */
            static _clear(): void;
            enabled: boolean;
            tweenEnabled: boolean;
            blend: boolean;
            group: string;
            weight: number;
            name: string;
            clip: objects.AnimationData;
            loopCount: number;
            loop: number;
            layer: number;
            isPlaying: boolean;
            isComplete: boolean;
            totalTime: number;
            currentTime: number;
            timeScale: number;
            displayControl: boolean;
            /** @private */
            _timelineStates: any;
            /** @private */
            _fadeWeight: number;
            private _armature;
            private _currentFrame;
            private _mixingTransforms;
            private _fadeState;
            private _fadeInTime;
            private _fadeOutTime;
            private _fadeOutBeginTime;
            private _fadeOutWeight;
            private _fadeIn;
            private _fadeOut;
            private _pauseBeforeFadeInComplete;
            constructor();
            fadeIn(armature: Armature, clip: objects.AnimationData, fadeInTime: number, timeScale: number, loop: number, layer: number, displayControl: boolean, pauseBeforeFadeInComplete: boolean): void;
            fadeOut(fadeOutTime: number, pause?: boolean): void;
            play(): void;
            stop(): void;
            getMixingTransform(timelineName: string): number;
            addMixingTransform(timelineName: string, type?: number, recursive?: boolean): void;
            removeMixingTransform(timelineName?: string, recursive?: boolean): void;
            advanceTime(passedTime: number): boolean;
            private updateTimelineStates();
            private addTimelineState(timelineName);
            private removeTimelineState(timelineName);
            private clear();
        }
        class Animation {
            static NONE: string;
            static SAME_LAYER: string;
            static SAME_GROUP: string;
            static SAME_LAYER_AND_GROUP: string;
            static ALL: string;
            tweenEnabled: boolean;
            timeScale: number;
            animationNameList: string[];
            /** @private */
            _animationLayer: AnimationState[][];
            /** @private */
            _lastAnimationState: AnimationState;
            private _armature;
            private _isPlaying;
            getLastAnimationName(): string;
            getLastAnimationState(): AnimationState;
            private _animationDataList;
            getAnimationDataList(): objects.AnimationData[];
            setAnimationDataList(value: objects.AnimationData[]): void;
            getIsPlaying(): boolean;
            getIsComplete(): boolean;
            constructor(armature: Armature);
            dispose(): void;
            gotoAndPlay(animationName: string, fadeInTime?: number, duration?: number, loop?: number, layer?: number, group?: string, fadeOutMode?: string, displayControl?: boolean, pauseFadeOut?: boolean, pauseFadeIn?: boolean): AnimationState;
            play(): void;
            stop(): void;
            getState(name: string, layer?: number): AnimationState;
            hasAnimation(animationName: string): boolean;
            advanceTime(passedTime: number): void;
            private addLayer(layer);
            private addState(animationState);
            private removeState(animationState);
        }
    }
    module objects {
        class DBTransform {
            x: number;
            y: number;
            skewX: number;
            skewY: number;
            scaleX: number;
            scaleY: number;
            constructor();
            getRotation(): number;
            setRotation(value: number): void;
            copy(transform: DBTransform): void;
            toString(): string;
        }
        class Frame {
            position: number;
            duration: number;
            action: string;
            event: string;
            sound: string;
            constructor();
            dispose(): void;
        }
        class TransformFrame extends Frame {
            tweenEasing: number;
            tweenRotate: number;
            displayIndex: number;
            zOrder: number;
            visible: boolean;
            global: DBTransform;
            transform: DBTransform;
            pivot: geom.Point;
            color: geom.ColorTransform;
            constructor();
            dispose(): void;
        }
        class Timeline {
            duration: number;
            scale: number;
            private _frameList;
            getFrameList(): Frame[];
            constructor();
            dispose(): void;
            addFrame(frame: Frame): void;
        }
        class TransformTimeline extends Timeline {
            static HIDE_TIMELINE: TransformTimeline;
            transformed: boolean;
            offset: number;
            originTransform: DBTransform;
            originPivot: geom.Point;
            constructor();
            dispose(): void;
        }
        class AnimationData extends Timeline {
            frameRate: number;
            name: string;
            loop: number;
            tweenEasing: number;
            fadeInTime: number;
            private _timelines;
            getTimelines(): any;
            constructor();
            dispose(): void;
            getTimeline(timelineName: string): TransformTimeline;
            addTimeline(timeline: TransformTimeline, timelineName: string): void;
        }
        class DisplayData {
            static ARMATURE: string;
            static IMAGE: string;
            name: string;
            type: string;
            transform: DBTransform;
            pivot: geom.Point;
            constructor();
            dispose(): void;
        }
        class SlotData {
            name: string;
            parent: string;
            zOrder: number;
            blendMode: string;
            private _displayDataList;
            getDisplayDataList(): DisplayData[];
            constructor();
            dispose(): void;
            addDisplayData(displayData: DisplayData): void;
            getDisplayData(displayName: string): DisplayData;
        }
        class BoneData {
            name: string;
            parent: string;
            length: number;
            global: DBTransform;
            transform: DBTransform;
            scaleMode: number;
            fixedRotation: boolean;
            constructor();
            dispose(): void;
        }
        class SkinData {
            name: string;
            private _slotDataList;
            getSlotDataList(): SlotData[];
            constructor();
            dispose(): void;
            getSlotData(slotName: string): SlotData;
            addSlotData(slotData: SlotData): void;
        }
        class ArmatureData {
            name: string;
            private _boneDataList;
            getBoneDataList(): BoneData[];
            private _skinDataList;
            getSkinDataList(): SkinData[];
            private _animationDataList;
            getAnimationDataList(): AnimationData[];
            constructor();
            dispose(): void;
            getBoneData(boneName: string): BoneData;
            getSkinData(skinName: string): SkinData;
            getAnimationData(animationName: string): AnimationData;
            addBoneData(boneData: BoneData): void;
            addSkinData(skinData: SkinData): void;
            addAnimationData(animationData: AnimationData): void;
            sortBoneDataList(): void;
            private sortBoneData(object1, object2);
        }
        class SkeletonData {
            name: string;
            private _subTexturePivots;
            getArmatureNames(): string[];
            private _armatureDataList;
            getArmatureDataList(): ArmatureData[];
            constructor();
            dispose(): void;
            getArmatureData(armatureName: string): ArmatureData;
            addArmatureData(armatureData: ArmatureData): void;
            removeArmatureData(armatureData: ArmatureData): void;
            removeArmatureDataByName(armatureName: string): void;
            getSubTexturePivot(subTextureName: string): geom.Point;
            addSubTexturePivot(x: number, y: number, subTextureName: string): geom.Point;
            removeSubTexturePivot(subTextureName: string): void;
        }
        class DataParser {
            static parseTextureAtlasData(rawData: any, scale?: number): any;
            static parseSkeletonData(rawData: any): SkeletonData;
            private static parseArmatureData(armatureObject, data, frameRate);
            private static parseBoneData(boneObject);
            private static parseSkinData(skinObject, data);
            private static parseSlotData(slotObject, data);
            private static parseDisplayData(displayObject, data);
            private static parseAnimationData(animationObject, armatureData, frameRate);
            private static parseTimeline(timelineObject, timeline, frameParser, frameRate);
            private static parseTransformTimeline(timelineObject, duration, frameRate);
            private static parseFrame(frameObject, frame, frameRate);
            private static parseMainFrame(frameObject, frameRate);
            private static parseTransformFrame(frameObject, frameRate);
            private static parseTransform(transformObject, transform, pivot?);
        }
    }
    module display {
        interface IDisplayBridge {
            getVisible(): boolean;
            setVisible(value: boolean): void;
            getDisplay(): any;
            setDisplay(value: any): void;
            dispose(): void;
            updateTransform(matrix: geom.Matrix, transform: objects.DBTransform): void;
            updateColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number): void;
            addDisplay(container: any, index: number): void;
            removeDisplay(): void;
            updateBlendMode(blendMode: string): void;
        }
    }
    module textures {
        interface ITextureAtlas {
            name: string;
            dispose(): void;
            getRegion(subTextureName: string): geom.Rectangle;
        }
    }
    module factorys {
        class BaseFactory extends events.EventDispatcher {
            /** @private */
            _dataDic: any;
            /** @private */
            _textureAtlasDic: any;
            /** @private */
            _textureAtlasLoadingDic: any;
            /** @private */
            _currentDataName: string;
            /** @private */
            _currentTextureAtlasName: string;
            constructor();
            getSkeletonData(name: string): objects.SkeletonData;
            addSkeletonData(data: objects.SkeletonData, name?: string): void;
            removeSkeletonData(name: string): void;
            getTextureAtlas(name: string): any;
            addTextureAtlas(textureAtlas: textures.ITextureAtlas, name?: string): void;
            removeTextureAtlas(name: string): void;
            dispose(disposeData?: boolean): void;
            buildArmature(armatureName: string, animationName?: string, skeletonName?: string, textureAtlasName?: string, skinName?: string): Armature;
            getTextureDisplay(textureName: string, textureAtlasName: string, pivotX: number, pivotY: number): Object;
            /** @private */
            _generateArmature(): Armature;
            /** @private */
            _generateSlot(): Slot;
            /** @private */
            _generateDisplay(textureAtlas: textures.ITextureAtlas, fullName: string, pivotX: number, pivotY: number): any;
        }
    }
    module utils {
        class ConstValues {
            static ANGLE_TO_RADIAN: number;
            static DRAGON_BONES: string;
            static ARMATURE: string;
            static SKIN: string;
            static BONE: string;
            static SLOT: string;
            static DISPLAY: string;
            static ANIMATION: string;
            static TIMELINE: string;
            static FRAME: string;
            static TRANSFORM: string;
            static COLOR_TRANSFORM: string;
            static TEXTURE_ATLAS: string;
            static SUB_TEXTURE: string;
            static A_VERSION: string;
            static A_IMAGE_PATH: string;
            static A_FRAME_RATE: string;
            static A_NAME: string;
            static A_PARENT: string;
            static A_LENGTH: string;
            static A_TYPE: string;
            static A_FADE_IN_TIME: string;
            static A_DURATION: string;
            static A_SCALE: string;
            static A_OFFSET: string;
            static A_LOOP: string;
            static A_EVENT: string;
            static A_SOUND: string;
            static A_ACTION: string;
            static A_HIDE: string;
            static A_TWEEN_EASING: string;
            static A_TWEEN_ROTATE: string;
            static A_DISPLAY_INDEX: string;
            static A_Z_ORDER: string;
            static A_BLENDMODE: string;
            static A_WIDTH: string;
            static A_HEIGHT: string;
            static A_SCALE_MODE: string;
            static A_FIXED_ROTATION: string;
            static A_X: string;
            static A_Y: string;
            static A_SKEW_X: string;
            static A_SKEW_Y: string;
            static A_SCALE_X: string;
            static A_SCALE_Y: string;
            static A_PIVOT_X: string;
            static A_PIVOT_Y: string;
            static A_ALPHA_OFFSET: string;
            static A_RED_OFFSET: string;
            static A_GREEN_OFFSET: string;
            static A_BLUE_OFFSET: string;
            static A_ALPHA_MULTIPLIER: string;
            static A_RED_MULTIPLIER: string;
            static A_GREEN_MULTIPLIER: string;
            static A_BLUE_MULTIPLIER: string;
        }
        class TransformUtil {
            private static DOUBLE_PI;
            private static _helpMatrix;
            static transformPointWithParent(transform: objects.DBTransform, parent: objects.DBTransform): void;
            static transformToMatrix(transform: objects.DBTransform, matrix: geom.Matrix): void;
            static formatRadian(radian: number): number;
        }
        class DBDataUtil {
            private static _helpTransform1;
            private static _helpTransform2;
            static transformArmatureData(armatureData: objects.ArmatureData): void;
            static transformArmatureDataAnimations(armatureData: objects.ArmatureData): void;
            static transformAnimationData(animationData: objects.AnimationData, armatureData: objects.ArmatureData): void;
            static getTimelineTransform(timeline: objects.TransformTimeline, position: number, retult: objects.DBTransform): void;
            static addHideTimeline(animationData: objects.AnimationData, armatureData: objects.ArmatureData): void;
        }
    }
    /** @private */
    class DBObject {
        name: string;
        fixedRotation: boolean;
        global: objects.DBTransform;
        origin: objects.DBTransform;
        offset: objects.DBTransform;
        tween: objects.DBTransform;
        parent: Bone;
        armature: Armature;
        /** @private */
        _globalTransformMatrix: geom.Matrix;
        /** @private */
        _isDisplayOnStage: boolean;
        /** @private */
        _scaleType: number;
        /** @private */
        _isColorChanged: boolean;
        /** @private */
        _visible: boolean;
        getVisible(): boolean;
        setVisible(value: boolean): void;
        /** @private */
        _setParent(value: Bone): void;
        /** @private */
        _setArmature(value: Armature): void;
        constructor();
        dispose(): void;
        /** @private */
        _update(): void;
    }
    class Slot extends DBObject {
        /** @private */
        _dislayDataList: objects.DisplayData[];
        /** @private */
        _displayBridge: display.IDisplayBridge;
        /** @private */
        _isDisplayOnStage: boolean;
        /** @private */
        _originZOrder: number;
        /** @private */
        _tweenZorder: number;
        private _isHideDisplay;
        private _offsetZOrder;
        private _displayIndex;
        _blendMode: string;
        getZOrder(): number;
        setZOrder(value: number): void;
        getDisplay(): any;
        setDisplay(value: any): void;
        getBlendMode(): string;
        setBlendMode(value: string): void;
        getChildArmature(): Armature;
        setChildArmature(value: Armature): void;
        /** @private */
        _displayList: any[];
        getDisplayList(): any[];
        setDisplayList(value: any[]): void;
        private _setDisplay(display);
        /** @private */
        _changeDisplay(displayIndex: number): void;
        setVisible(value: boolean): void;
        /** @private */
        _setArmature(value: Armature): void;
        constructor(displayBrideg: display.IDisplayBridge);
        dispose(): void;
        /** @private */
        _update(): void;
        /** @private */
        _updateVisible(value: boolean): void;
        private updateChildArmatureAnimation();
    }
    class Bone extends DBObject {
        private static _soundManager;
        scaleMode: number;
        displayController: string;
        slot: Slot;
        /** @private */
        _tweenPivot: geom.Point;
        private _children;
        setVisible(value: boolean): void;
        /** @private */
        _setArmature(value: Armature): void;
        constructor();
        dispose(): void;
        contains(child: DBObject): boolean;
        addChild(child: DBObject): void;
        removeChild(child: DBObject): void;
        getSlots(): Slot[];
        /** @private */
        _arriveAtFrame(frame: objects.Frame, timelineState: animation.TimelineState, animationState: animation.AnimationState, isCross: boolean): void;
        /** @private */
        _updateColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number, isColorChanged: boolean): void;
    }
    class Armature extends events.EventDispatcher implements animation.IAnimatable {
        private static _soundManager;
        name: string;
        animation: animation.Animation;
        /** @private */
        _slotsZOrderChanged: boolean;
        /** @private */
        _slotList: Slot[];
        /** @private */
        _boneList: Bone[];
        /** @private */
        _eventList: events.Event[];
        private _display;
        getDisplay(): any;
        constructor(display: any);
        dispose(): void;
        advanceTime(passedTime: number): void;
        getSlots(returnCopy?: boolean): Slot[];
        getBones(returnCopy?: boolean): Bone[];
        getSlot(slotName: string): Slot;
        getSlotByDisplay(display: Object): Slot;
        removeSlot(slot: Slot): void;
        removeSlotByName(slotName: string): void;
        getBone(boneName: string): Bone;
        getBoneByDisplay(display: Object): Bone;
        removeBone(bone: Bone): void;
        removeBoneByName(boneName: string): void;
        addChild(object: DBObject, parentName: string): void;
        updateSlotsZOrder(): void;
        /** @private */
        _addDBObject(object: DBObject): void;
        /** @private */
        _removeDBObject(object: DBObject): void;
        /** @private */
        _sortBoneList(): void;
        /** @private */
        _arriveAtFrame(frame: objects.Frame, timelineState: animation.TimelineState, animationState: animation.AnimationState, isCross: boolean): void;
        private sortSlot(slot1, slot2);
        private sortBone(object1, object2);
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
declare module dragonBones {
    module display {
        class DragonBonesEgretBridge implements IDisplayBridge {
            private static RADIAN_TO_ANGLE;
            private _display;
            getVisible(): boolean;
            setVisible(value: boolean): void;
            getDisplay(): any;
            setDisplay(value: any): void;
            constructor();
            dispose(): void;
            updateTransform(matrix: geom.Matrix, transform: objects.DBTransform): void;
            updateColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number): void;
            updateBlendMode(blendMode: string): void;
            addDisplay(container: any, index: number): void;
            removeDisplay(): void;
        }
    }
    module textures {
        class EgretTextureAtlas implements ITextureAtlas {
            texture: egret.Texture;
            private textureAtlasRawData;
            name: string;
            scale: number;
            spriteSheet: egret.SpriteSheet;
            private _textureData;
            constructor(texture: egret.Texture, textureAtlasRawData: any, scale?: number);
            getTexture(fullName: string): egret.Texture;
            dispose(): void;
            getRegion(subTextureName: string): geom.Rectangle;
            private parseData(textureAtlasRawData);
        }
    }
    module factorys {
        class EgretFactory extends BaseFactory {
            constructor();
            /** @private */
            _generateArmature(): Armature;
            /** @private */
            _generateSlot(): Slot;
            /** @private */
            _generateDisplay(textureAtlas: textures.EgretTextureAtlas, fullName: string, pivotX: number, pivotY: number): any;
        }
    }
}
