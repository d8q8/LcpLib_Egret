LcpLib_Egret
============

Egret引擎的封装库v1.0.b(目前完美支持最新版egret1.0.4)

<span style="color:#ff0000">(注:修正椭圆圆角实现,跟AS3保持一致)</span>

目录结构如下

<pre class="brush:ts;toolbar:false">
Lcp
├─data
│   └─LVars         //全局变参类(待完善)
├─display
│   ├─LCircle       //绘制圆形类
│   ├─LEllipse      //绘制椭圆类
│   ├─LGraphics     //绘制图形基类
│   ├─LPolygon      //绘制多边形类
│   ├─LRect         //绘制矩形类
│   ├─LRoundRect    //绘制圆角矩形类
│   ├─LHeart        //绘制心形类
│   ├─LRose         //绘制玫瑰类
│   └─LStar         //绘制多角星类
├─events
│   ├─LEvent        //自定义事件类
│   └─LListener     //全局侦听消息类
├─interfaces
│   └─IGraphics     //绘制图形接口类
└─utils
    ├─LGlobal       //全局静态类
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
var sp:Lcp.LCircle = new Lcp.LCircle({name:"sp",x:300,y:600,radius:50,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
//方
//var sp:Lcp.LRect = new Lcp.LRect({name:"sp",x:300,y:600,width:400,height:300,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
//圆角矩形
//var sp:Lcp.LRoundRect = new Lcp.LRoundRect({name:"sp",x:300,y:600,width:400,height:300,ellipseWidth:100,ellipseHeight:50,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
//椭圆
//var sp:Lcp.LEllipse = new Lcp.LEllipse({name:"sp",x:300,y:600,width:200,height:100,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
//多边形,如三角形
//var sp:Lcp.LPolygon = new Lcp.LPolygon({name:"sp",x:300,y:600,width:300,height:300,corner:3,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
//心形
//var sp:Lcp.LHeart = new Lcp.LHeart({name:"sp",x:200,y:400,radius:50,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
//玫瑰形,花瓣偶数翻倍,奇数不变
//var sp:Lcp.LRose = new Lcp.LRose({name:"sp",x:200,y:350,radius:100,petal:4,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
//多角星,如五角星
//var sp:Lcp.LStar = new Lcp.LStar({name:"sp",x:300,y:600,width:300,height:300,corner:5,ratio:.4,fillcolor:0xff0000,thickness:10,linecolor:0x00ff00});
this.addChild(sp);
</pre>

3> 自定义事件类和全局侦听类使用如下

<pre class="brush:ts;toolbar:false">
sp.touchEnabled=true;//开启触点事件
//单击
sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
    console.log("我单击了圆",e.stageX,e.stageY);
    //全局侦听发送消息和自定义事件,这里的自定义事件,也可以自己封装成强类型即可,比如LEvent.MYCIRCLE
    Lcp.LListener.getInstance().dispatchEvent(new Lcp.LEvent("mycircle",.1,false));
    //元件自身发送消息和自定义事件,同上
    sp.dispatchEvent(new Lcp.LEvent("mycircle1",.5));
},this);
//当前元件侦听自定义事件获取数据
sp.addEventListener("mycircle1",(e)=>{
   console.log(e.param);//自定义事件参数param,可以传入任意对象,然后自行解析即可.
   sp.y=1000*parseFloat(e.param);
},this);
//全局侦听自定义事件获取数据
Lcp.LListener.getInstance().addEventListener("mycircle",(e)=>{
    console.log(e.param);//同上
    sp.alpha=parseFloat(e.param);
},this);
</pre>

使用说明也可以参照请看这里,欢迎测试使用,有问题即时反馈. <br />
<a href="http://bbs.egret-labs.org/thread-592-1-1.html" target="_blank">
http://bbs.egret-labs.org/thread-592-1-1.html
</a>