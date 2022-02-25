"use strict"

var hrs = 0;
var min = 0;
var seg = 0;

var timer = 1000; 
var cron;

function start () {
    cron = setInterval(() => {stopwatch();}, timer);
}

function pause () {
    clearInterval(cron);
}

function stop () {
    clearInterval(cron);
    hrs = 0;
    min = 0;
    seg = 0;
    document.getElementById('counter').innerHTML = '00:00:00';
}

function stopwatch () {

    seg++;

    if(seg == 60){
        seg = 0;
        min++;

        if(min == 60){
            min = 0;
            hrs++
        }
    }

    var format = (hrs < 10 ? '0' + hrs : hrs) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('counter').innerHTML = format;
}