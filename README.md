LcpLib_Egret
============

Egret引擎的封装库v1.0.4(目前完美支持最新版egret1.1.3)

<span style="color:#ff0000">(注:修正了根据官方偏移的问题)</span>

目录结构如下

<pre class="brush:ts;toolbar:false">
lcp
├─collection
│   ├─IList         //列表接口类
│   └─List          //列表类
├─core
│   ├─Activatable   //激活类(暂未用到)
│   ├─Disposable    //销毁类(暂未用到)
│   ├─Resumable     //恢复类(暂未用到)
│   └─Runnable      //运行类(暂未用到)
├─data
│   └─LVars         //全局变参类(待完善)
├─display
│   ├─LCircle       //绘制圆形类
│   ├─LEllipse      //绘制椭圆类
│   ├─LGraphics     //绘制图形基类
│   ├─LHeart        //绘制心形类
│   ├─LPolygon      //绘制多边形类
│   ├─LRect         //绘制矩形类
│   ├─LRose         //绘制玫瑰类
│   ├─LRoundRect    //绘制圆角矩形类
│   ├─LSprite       //精灵辅助类(完善简单拖拽/碰撞检测功能)
│   └─LStar         //绘制多角星类
├─events
│   ├─LEvent        //自定义事件类
│   └─LListener     //全局侦听消息类
├─interfaces
│   ├─GraphicsType  //绘制枚举类(暂未用到)
│   └─IGraphics     //绘制图形接口类
├─math
│   └─Percent       //百分比类
└─utils
    ├─ArrayUtil     //数组工具类
    ├─NumberUtil    //算术工具类
    ├─LOrder        //排序类(暂时处理升/降序/字段排序/自定义排序)
    ├─LDictionary   //字典类
    ├─LGlobal       //全局静态类
    ├─LHelper       //辅助帮助类
    ├─LString       //字符处理类(待完善)
    └─LTrace        //跟踪捕获类(待完善)
</pre>

1> 绘制参数

<pre class="brush:ts;toolbar:false">
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
</pre>

2> 圆,方,圆角矩形,椭圆,多边形,多角星实现

<pre class="brush:ts;toolbar:false">
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
</pre>

3> 自定义事件类和全局侦听类使用如下

<pre class="brush:ts;toolbar:false">
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
</pre>

4> 数组排序处理
<pre class="brush:ts;toolbar:false">
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
</pre>

5> 字典类用法
<pre class="brush:ts;toolbar:false">
//字典类用法
var dic = new lcp.LDictionary({"d":4});
dic.set("a",1);
dic.set("b",2);
dic.set("c","3");
if(dic.has("c")){
    dic.remove("c");
}
console.log(dic,dic.get("d"));
</pre>

6>数组/算术工具类使用(更多用法见源码,基本都有案例)
<pre class="brush:ts;toolbar:false">
1.数组扩展处理工具类使用
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

2.算术工具扩展使用方法(更多使用看源码)
    1)判断奇数
    console.log(lcp.NumberUtil.isOdd(7)); // 输出 false
    console.log(lcp.NumberUtil.isOdd(12)); // 输出 true
    2)判断偶数
    console.log(lcp.NumberUtil.isEven(7)); // 输出 false
    console.log(lcp.NumberUtil.isEven(12)); // 输出 true
    3)判断数字
    console.log(lcp.NumberUtil.isNumber(7));// 输出 true
    console.log(lcp.NumberUtil.isNumber("a"));// 输出 false
    4)取整
    console.log(lcp.NumberUtil.int(7.5));// 输出 7
    5)数字转英文数字
    console.log(lcp.NumberUtil.convertNum("3.4556645445E7"));// 输出 34556645.445
    console.log(lcp.NumberUtil.spell(0)); // 输出 Zero
    console.log(lcp.NumberUtil.spell(23)); // 输出 Twenty-Three
    console.log(lcp.NumberUtil.spell(2005678)); // 输出 Two Million, Five Thousand, Six Hundred Seventy-Eight
    6)循环获取数值
    var colors:Array<any> = ["红", "绿", "蓝"];
    console.log(colors[lcp.NumberUtil.loopIndex(2, colors.length)]); // 输出 蓝
    console.log(colors[lcp.NumberUtil.loopIndex(4, colors.length)]); // 输出 绿
    console.log(colors[lcp.NumberUtil.loopIndex(-6, colors.length)]); // 输出 红
</pre>

7>扩展点方法与原官方点方法
<pre class="brush:ts;toolbar:false">
//扩展点方法与原官方点方法
console.log("官方提供任意两点间距离:",egret.Point.distance(new egret.Point(100,100),new egret.Point(50,50)));
console.log("自己扩展任意两点间距离:",lcp.LPoint.twodis(100,100,50,50));
</pre>

8>扩展精灵类(简单拖拽和碰撞检测)
<pre class="brush:ts;toolbar:false">
1.简单拖拽
    var sp2 = new lcp.LSprite();//继承lcp.LSprite
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
2.简单碰撞
    //定义两个显示对象sp1,sp2
    if(lcp.LSprite.hitTestObject(sp1,sp2)){
        console.log("碰撞了哟西");
    }

</pre>

使用说明也可以参照请看这里,欢迎测试使用,有问题即时反馈. <br />
<a href="http://bbs.egret-labs.org/thread-592-1-1.html" target="_blank">
http://bbs.egret-labs.org/thread-592-1-1.html
</a>