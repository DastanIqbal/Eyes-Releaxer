/**
 * Created by IQBAL-MEBELKART on 12/20/2015.
 */
"use strict";
var gui=require("nw.gui");
var win=gui.Window.get();
gui.Screen.Init();
var screen=gui.Screen.screens;
var relaxInterval=30*60*1000;
var interval=15;
var msgHideTime=3000;

$(document).ready(function () {

    win.moveTo(screen.width-win.width,screen.height-win.height-50);
    startEyesRelax();
    var longRun=setInterval(function(){
        startEyesRelax();
    },relaxInterval);

    function startEyesRelax(){
        win.setAlwaysOnTop(true);
        win.show();
        win.focus();
        var i = 0;
        $('#timer').text(i);
        $('#relaxmsg').html("Dastan, please relax your eyes just for "+interval+" seconds");
        var timer = setInterval(function () {
            i = i + 1;
            $('#timer').text(i);
            if (i === interval) {
                clearInterval(timer);
                $('#timer').html("Dastan");
                $('#relaxmsg').html("Thanks to take a break :) <br/>  Now, How are you feeling?");
                setTimeout(function(){
                    win.hide();
                },msgHideTime);
            }
        }, 1000)
    }
});