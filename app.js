/**
 * Created by IQBAL-MEBELKART on 12/20/2015.
 */
var gui=require("nw.gui");
var win=gui.Window.get();
var nativeMenuBar=new gui.Menu({type:"menubar"});
//nativeMenuBar.createMacBuiltin("My app");         for mac
var firstMenuItem=new gui.MenuItem({label:'File',submenu:new gui.Menu()});
nativeMenuBar.append(firstMenuItem);

//Add submenu Items
var fopen=new gui.MenuItem({label:'Open'});
var fsave=new gui.MenuItem({label:'Save'});
var fexit=new gui.MenuItem({label:'Exit'});
firstMenuItem.submenu.append(fopen);
firstMenuItem.submenu.append(fsave);
firstMenuItem.submenu.append(new gui.MenuItem({type:'separator'}));
firstMenuItem.submenu.append(fexit);

firstMenuItem.click=function(){
    console.log("File Clicked");
};
fopen.click=function(){
    console.log("Open Clicked");
};
fsave.click=function(){
    console.log("Save Clicked");
};
fexit.click=function(){
    gui.App.quit();
    console.log("Exit Clicked");
};
//win.menu=nativeMenuBar;