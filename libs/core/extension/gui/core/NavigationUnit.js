var egret;
(function (egret) {
    var gui;
    (function (gui) {
        var NavigationUnit = (function () {
            function NavigationUnit() {
            }
            NavigationUnit.DOWN = 40;
            NavigationUnit.END = 35;
            NavigationUnit.HOME = 36;
            NavigationUnit.LEFT = 37;
            NavigationUnit.PAGE_DOWN = 34;
            NavigationUnit.PAGE_LEFT = 0x2397;
            NavigationUnit.PAGE_RIGHT = 0x2398;
            NavigationUnit.PAGE_UP = 33;
            NavigationUnit.RIGHT = 39;
            NavigationUnit.UP = 38;
            return NavigationUnit;
        })();
        gui.NavigationUnit = NavigationUnit;
        NavigationUnit.prototype.__class__ = "gui.NavigationUnit";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
