/**
 * Created by IQBAL-MEBELKART on 12/20/2015.
 */
var gui = require("nw.gui");
var win = gui.Window.get();
var self = this;
var appStatus = "front";
win.isFullscreen = false;

/*module.exports=function winShow(){
    win.show();
}
module.exports=function hideShow(){
    win.show();
}*/
//================Handle Frame Ops Close/Max/Min==============//
win.on('minimize', function () {
    win.hide();
    appStatus = "front";
    //win.setShowInTaskbar(true);
    console.log("Hide Window");
});
win.on('maximize', function () {
    win.show();
    appStatus = "restore"
    console.log("Show Window");
});
win.on('close', function () {
    win.hide();
    appStatus = "front";
    //win.setShowInTaskbar(true);
    console.log("Hide Window");
});
win.on('closed', function () {
    win = null;
});
//================Handle Frame Ops Close/Max/Min==============//
//================Shortcut===============//
var shortcut = new gui.Shortcut({
    key: "Ctrl+Alt+R",
    active: function () {
        win.show();
        appStatus = "restore"
        console.log("Open Eyes Relaxer");
    }
});
gui.App.registerGlobalHotKey(shortcut);
//================Shortcut===============//

//================Tray ICON================//
var tray = new gui.Tray({"title": "Relax", icon: "res/logo.png", tooltip: "Eyes Relaxer for Dastan"});
var menu = new gui.Menu();
var openMenu = new gui.MenuItem({label: "Open"});
var exitMenu = new gui.MenuItem({label: "Exit"});
menu.append(openMenu);
menu.append(exitMenu);
tray.menu = menu;

tray.on("click", function () {
    if (appStatus == "front") {
        win.hide();
        //win.setShowInTaskbar(false);
        appStatus = "restore"
    } else {
        win.show();
        //win.setShowInTaskbar(true);
        appStatus = "front";
    }
});
exitMenu.click = function () {
    tray.remove();
    tray = null;
    gui.App.quit();
    console.log("Exit from tray menu");
}

//================Tray ICON================//












var nativeMenuBar = new gui.Menu({type: "menubar"});
//nativeMenuBar.createMacBuiltin("My app");         for mac
var firstMenuItem = new gui.MenuItem({label: 'File', submenu: new gui.Menu()});
nativeMenuBar.append(firstMenuItem);

//Add submenu Items
var fopen = new gui.MenuItem({label: 'Open'});
var fsave = new gui.MenuItem({label: 'Save'});
var fexit = new gui.MenuItem({label: 'Exit'});
firstMenuItem.submenu.append(fopen);
firstMenuItem.submenu.append(fsave);
firstMenuItem.submenu.append(new gui.MenuItem({type: 'separator'}));
firstMenuItem.submenu.append(fexit);

firstMenuItem.click = function () {
    console.log("File Clicked");
};
fopen.click = function () {
    console.log("Open Clicked");
};
fsave.click = function () {
    console.log("Save Clicked");
};
fexit.click = function () {
    gui.App.quit();
    console.log("Exit Clicked");
};
//win.menu=nativeMenuBar;