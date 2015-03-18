LcpLib_Egret
============

Egret引擎的封装库v1.0.8(目前完美支持最新版egret1.6.0)

(注:修正了根据官方**绘制与触点偏移**的问题)

**类库简称:白菜EGRET"内裤".**
<pre>
内裤会越穿越大的哟西,可以根据自己的功能拷贝一个或几个类来使用,
或者只拷贝几个方法来使用,来减小代码量,该内裤会跟随官方进行不定期更新的.
欢迎提问题或留QQ:17624522/Email:d8q8#163.com.
大家一起为Egret这只白鹭筑巢,共同成长.
</pre>
**感恩陪我一起成长的人(排名不分先后):**
<pre>
弯弯,斗母,七月,r2d2,A闪,少瑞兄,张同学,宋婶,娜娜,虾总,小苹果,小小游戏,台湾程序猿david,Kuma请给力,城市,张宇,
(卖卖家族)卖小米的,卖土豆的,卖茶叶蛋的,卖烟的落叶,卖豆芽的,卖烧烤的,卖内裤的,卖萌的,卖番茄的,卖馒头的,卖心血的,
arrow,聆听Q语,波姬小丝,小狐狸,N神,球球,子鱼,小小明,潜意识,枯叶,紫云,空,七步,飞翔,FlyEgret,果果,比8布偶,无尽SAGA
</pre>
目录结构如下

<pre>
lcp
├─collection
│   ├─IList             //列表接口类
│   └─List              //列表类
├─core
│   ├─Activatable       //激活类(暂未用到)
│   ├─Destroyable       //销毁类
│   ├─Resumable         //恢复类(暂未用到)
│   └─Runnable          //运行类(暂未用到)
├─data
│   └─LVars             //全局变参类(可扩展)
├─display
│   ├─LCircle           //绘制圆形类
│   ├─LEllipse          //绘制椭圆类
│   ├─LGraphics         //绘制图形基类
│   ├─LHeart            //绘制心形类
│   ├─LPolygon          //绘制多边形类
│   ├─LRect             //绘制矩形类
│   ├─LRose             //绘制玫瑰类
│   ├─LRoundRect        //绘制圆角矩形类
│   ├─CSprite           //精灵扩展类(增加移除元件/侦听/销毁等方法)
│   ├─LSprite           //精灵辅助类实现于CSprite(完善简单拖拽/碰撞检测功能)
│   └─LStar             //绘制多角星类
├─events
│   ├─LEvent                        //自定义事件类
│   ├─RemovableEventDispatcher      //移除事件派发器类
│   ├─ListenerManager               //侦听管理器类
│   └─LListener                     //全局侦听消息类
├─extensions
│   └─Array             //数组原生扩展类
├─geom
│   ├─Ellipse           //椭圆类
│   └─LPoint            //点扩展类
├─interfaces
│   ├─IActivatable                   //激活类接口
│   ├─IDestroyable                   //销毁类接口
│   ├─IRemovableEventDispatcher      //移除事件派发器类接口
│   ├─IResumable                     //恢复类接口
│   ├─IRunnable                      //运行类接口
│   ├─IRegexEnum                     //验证接口类
│   └─IGraphics                      //绘制图形接口类
├─layout
│   └─Distribution      //分布类
├─math
│   └─Percent           //百分比类
└─utils
    ├─AlignUtil              //对齐工具类
    ├─ArrayUtil              //数组工具类
    ├─ColorUtil              //颜色转换类
    ├─ConversionUtil         //转换工具类
    ├─DateUtil               //日期工具类
    ├─DisplayObjectUtil      //显示对象工具类
    ├─DrawUtil               //绘制工具类
    ├─LDictionary            //字典处理类
    ├─LGlobal                //全局静态类
    ├─LHelper                //辅助帮助类
    ├─LOrder                 //排序类(暂时处理升/降序/字段排序/自定义排序)
    ├─LString                //字符处理类(可扩展)
    ├─LTrace                 //跟踪捕获类(可扩展)
    ├─NumberUtil             //算术工具类
    ├─ObjectUtil             //对象工具类
    ├─QueryStringUtil        //查询字符串类(目前官方的针对HTML不可用,这个方法待完善)
    ├─RatioUtil              //比例工具类
    ├─StageReference         //舞台引用类
    ├─SingletonUtil          //单例工具类    
    └─ValidationUtil         //验证检测类
</pre>

1> 绘制参数

```typescript
//基本属性
x?:number;//元件x坐标
y?:number;//元件y坐标
name?:string;//元件实例名,如sp
width?:number;//元件宽度
height?:number;//元件高度
anchorX?:number;//元件x锚点,旋转时会用到
anchorY?:number;//元件y锚点,旋转时会用到

//样式属性
thickness?:number;//一个整数，以点为单位表示线条的粗细，有效值为 0 到 255.
linecolor?:number;//线条的十六进制颜色值（例如，红色为 0xFF0000，蓝色为 0x0000FF 等）。
linealpha?:number;//表示线条颜色的 Alpha 值的数字；有效值为 0 到 1。
pixelHinting?:boolean;//指定是否提示笔触采用完整像素
scaleMode?:string;//用于指定要使用的比例模式
caps?:string;//用于指定线条末端处端点类型的 CapsStyle 类的值
joints?:string;//指定用于拐角的连接外观的类型
miterLimit?:number;//用于表示剪切斜接的极限值的数字

//填充属性
fillcolor?:number;//填充颜色,如0xff0000 红色
fillalpha?:number;//填充透明度,有效值为 0 到 1

radius?:number;//半径及圆角半径
ellipseWidth?:number;//圆角宽半径
ellipseHeight?:number;//圆角高半径
corner?:number;//多边形角
ratio?:number;//多角星比率

petal?:number;//花瓣数,偶数翻倍,奇数不变
```

2> 圆,方,圆角矩形,椭圆,多边形,多角星实现

```typescript
//圆
var sp = new lcp.LCircle({name:"sp",x:100,y:200,radius:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
//方
//var sp= new lcp.LRect({name:"sp",x:100,y:200,width:200,height:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
//圆角矩形
//var sp = new lcp.LRoundRect({name:"sp",x:100,y:200,width:200,height:100,ellipseWidth:30,ellipseHeight:20,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
//椭圆
//var sp = new lcp.LEllipse({name:"sp",x:100,y:200,width:200,height:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
//多边形,如三角形
//var sp = new lcp.LPolygon({name:"sp",x:100,y:200,width:200,height:200,corner:3,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
//心形
//var sp = new lcp.LHeart({name:"sp",x:100,y:200,radius:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
//玫瑰形,花瓣偶数翻倍,奇数不变
//var sp = new lcp.LRose({name:"sp",x:100,y:200,radius:100,petal:4,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
//多角星,如五角星
//var sp = new lcp.LStar({name:"sp",x:100,y:200,width:200,height:200,corner:5,ratio:.4,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
this.addChild(sp);
```

3> 自定义事件类和全局侦听类使用如下

```typescript
sp.touchEnabled=true;//开启触点事件
//单击
sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
    console.log("我单击了圆",e.stageX,e.stageY);
    //全局侦听发送消息和自定义事件,这里的自定义事件,也可以自己封装成强类型即可,比如LEvent.MYCIRCLE
    lcp.LListener.getInstance().dispatchEvent(new lcp.LEvent("mycircle",.1,false));
    //元件自身发送消息和自定义事件,同上
    sp.dispatchEvent(new lcp.LEvent("mycircle1",.5));
},this);
//当前元件侦听自定义事件获取数据
sp.addEventListener("mycircle1",(e)=>{
   console.log(e.param);//自定义事件参数param,可以传入任意对象,然后自行解析即可.
   sp.y=1000*parseFloat(e.param);
},this);
//全局侦听自定义事件获取数据
lcp.LListener.getInstance().addEventListener("mycircle",(e)=>{
    console.log(e.param);//同上
    sp.alpha=parseFloat(e.param);
},this);
```

4> 数组排序处理
```typescript
//数字数组排序
var num_Arr = [1,22,14,2,54,21,6,8,3,9];
lcp.LOrder.sort(num_Arr);//默认升序
//lcp.LOrder.sort(num_Arr,lcp.OrderByType.DESCENDING);//降序
console.log(num_Arr);

//字符数组排序
var str_Arr:Array<string> = ["AAA","son","baby","123456","hellokitty"];
lcp.LOrder.sort(str_Arr);//默认升序
//lcp.LOrder.sort(str_Arr,lcp.OrderByType.DESCENDING);//降序
console.log(str_Arr);

//字典数组排序
var key_Arr:Array<any> = [
    {name:"George", age:32, retiredate:"March 12, 2014"},
    {name:"Edward", age:17, retiredate:"June 2, 2023"},
    {name:"Christine", age:58, retiredate:"December 20, 2036"},
    {name:"Sarah", age:62, retiredate:"April 30, 2020"}
];
lcp.LOrder.sortOn(key_Arr,"age");//默认升序
//lcp.LOrder.sortOn(key_Arr,"age",lcp.OrderByType.DESCENDING);//降序
console.log(key_Arr);
```

5> 字典类用法
```typescript
//字典类用法
var dic = new lcp.LDictionary({"d":4});
dic.set("a",1);
dic.set("b",2);
dic.set("c","3");
if(dic.has("c")){
    dic.remove("c");
}
console.log(dic,dic.get("d"));
```

6>数组/算术工具类使用(更多用法见源码,基本都有案例)

1.数组扩展处理工具类使用
```typescript
var people:Array<any> = [
    {name: "Aaron", sex: "Male", hair: "Brown"},
    {name: "Linda", sex: "Female", hair: "Blonde"},
    {name: "Katie", sex: "Female", hair: "Brown"},
    {name: "Nikki", sex: "Female", hair: "Blonde"}
];
var person = lcp.ArrayUtil.getItemsByAnyKey(people, {sex: "Female", hair: "Brown"});
//console.log(person.name);
//for(var p in person){
//    console.log(person[p].name);
//}
//指定位置插入
console.log(lcp.ArrayUtil.addItemsAt(people,[{name:"白菜",sex:"保密",hair:"黑色"}],1));
console.log(people);

//数组的处理方法
var numberArray:Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberArray);
console.log(lcp.ArrayUtil.getHighestValue(numberArray));
console.log("数组求和:",lcp.ArrayUtil.sum(numberArray),"数组求平均值:",lcp.ArrayUtil.average(numberArray));
console.log("数组随机:",lcp.ArrayUtil.randomize(numberArray));

var color:Array<any>     = ["Red", "Blue", "Green", "Indigo", "Violet"];
var colorsAlt:Array<any> = ["Red", "Blue", "Green", "Violet"];
console.log(lcp.ArrayUtil.getIndexOfDifference(color, colorsAlt));
```
2.算术工具扩展使用方法(更多使用看源码)

1)判断奇数
```typescript
console.log(lcp.NumberUtil.isOdd(7)); // 输出 false
console.log(lcp.NumberUtil.isOdd(12)); // 输出 true
```
2)判断偶数
```typescript
console.log(lcp.NumberUtil.isEven(7)); // 输出 false
console.log(lcp.NumberUtil.isEven(12)); // 输出 true
```
3)判断数字
```typescript
console.log(lcp.NumberUtil.isNumber(7));// 输出 true
console.log(lcp.NumberUtil.isNumber("a"));// 输出 false
```
4)取整
```typescript
console.log(lcp.NumberUtil.int(7.5));// 输出 7
```
5)数字转英文数字
```typescript
console.log(lcp.NumberUtil.convertNum("3.4556645445E7"));// 输出 34556645.445
console.log(lcp.NumberUtil.spell(0)); // 输出 Zero
console.log(lcp.NumberUtil.spell(23)); // 输出 Twenty-Three
console.log(lcp.NumberUtil.spell(2005678)); // 输出 Two Million, Five Thousand, Six Hundred Seventy-Eight
```
6)循环获取数值
```typescript
var colors:Array<any> = ["红", "绿", "蓝"];
console.log(colors[lcp.NumberUtil.loopIndex(2, colors.length)]); // 输出 蓝
console.log(colors[lcp.NumberUtil.loopIndex(4, colors.length)]); // 输出 绿
console.log(colors[lcp.NumberUtil.loopIndex(-6, colors.length)]); // 输出 红
```

7>扩展点方法与原官方点方法
```typescript
//扩展点方法与原官方点方法
console.log("官方提供任意两点间距离:",egret.Point.distance(new egret.Point(100,100),new egret.Point(50,50)));
console.log("自己扩展任意两点间距离:",lcp.LPoint.twodis(100,100,50,50));
```

8>扩展精灵类(简单拖拽和碰撞检测)

1.简单拖拽
```typescript
var sp2 = new lcp.LSprite();//继承lcp.CSprite
this.addChild(sp2);
sp2.graphics.beginFill(0xff0000);
sp2.graphics.drawRect(0,0,100,50);
sp2.graphics.endFill();
sp2.name="sp2";
sp2.x=300;
sp2.y=300;
sp2.width=100;
sp2.height=50;
sp2.touchEnabled=true;
sp2.isDrag=true;//给拖拽属性为true就可以拖拽了,是不是很简单
sp2.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
    console.log("我点击试试");
},this);
```
2.简单碰撞
```typescript
//定义两个显示对象sp1,sp2
if(lcp.LSprite.hitTestObject(sp1,sp2)){
    console.log("碰撞了哟西");
}
```

9>验证检测使用方法
```typescript
//验证类
console.log("整数", lcp.ValidationUtil.isValid(lcp.regexEnum.intege, 111));
console.log("正整数", lcp.ValidationUtil.isValid(lcp.regexEnum.intege1, 111));
console.log("负整数", lcp.ValidationUtil.isValid(lcp.regexEnum.intege2, -111));
console.log("数字", lcp.ValidationUtil.isValid(lcp.regexEnum.num, -111.546));
console.log("正数", lcp.ValidationUtil.isValid(lcp.regexEnum.num1, 111));
console.log("负数", lcp.ValidationUtil.isValid(lcp.regexEnum.num2, -111.546));
console.log("浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal, -111.546));
console.log("正浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal1, 111.546));
console.log("负浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal2, -111.546));
console.log("正负浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal3, -111.546));
console.log("非负浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal4, 111.546));
console.log("非正浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal5, -111.546));
console.log("邮箱", lcp.ValidationUtil.isEmail("d8q8@163.com"));
console.log("颜色", lcp.ValidationUtil.isValid(lcp.regexEnum.color, "ff0000"));
console.log("url地址", lcp.ValidationUtil.isValid(lcp.regexEnum.url, "http://www.qq.com"));
console.log("仅中文", lcp.ValidationUtil.isValid(lcp.regexEnum.chinese, "白鹭引擎"));
console.log("仅ACSII字符", lcp.ValidationUtil.isValid(lcp.regexEnum.ascii, "0D"));
console.log("邮编", lcp.ValidationUtil.isValid(lcp.regexEnum.zipcode, "430000"));
console.log("手机", lcp.ValidationUtil.isValid(lcp.regexEnum.mobile, "13000000000"));
console.log("ip地址", lcp.ValidationUtil.isValid(lcp.regexEnum.ip4, "192.168.1.1"));
console.log("非空", lcp.ValidationUtil.isValid(lcp.regexEnum.notempty, "0D"));
console.log("图片", lcp.ValidationUtil.isValid(lcp.regexEnum.picture, "d8q8.jpg"));
console.log("压缩文件", lcp.ValidationUtil.isValid(lcp.regexEnum.rar, "d8q8.rar"));
console.log("日期", lcp.ValidationUtil.isValid(lcp.regexEnum.date, "2015-02-05"));
console.log("短时间", lcp.ValidationUtil.isTime("15:27:50"));
console.log("短日期", lcp.ValidationUtil.isDate("2015-02-05"));
console.log("长日期", lcp.ValidationUtil.isDateTime("2015-02-05 15:27:50"));
console.log("QQ号码", lcp.ValidationUtil.isValid(lcp.regexEnum.ascii, "10000"));
console.log("电话号码", lcp.ValidationUtil.isValid(lcp.regexEnum.tel, "82751213"));
console.log("用户注册", lcp.ValidationUtil.isValid(lcp.regexEnum.username, "d8q8"));
console.log("字母", lcp.ValidationUtil.isValid(lcp.regexEnum.letter, "abcd"));
console.log("大写字母", lcp.ValidationUtil.isValid(lcp.regexEnum.letter_u, "ABCD"));
console.log("小写字母", lcp.ValidationUtil.isValid(lcp.regexEnum.letter_l, "abcd"));
console.log("身份证", lcp.ValidationUtil.isCardID("431381198109106573"));
```

使用说明也可以参照请看这里,欢迎测试使用,有问题及时反馈. <br/>
[http://bbs.egret-labs.org/thread-592-1-1.html](http://bbs.egret-labs.org/thread-592-1-1.html "白鹭论坛内裤帖子")