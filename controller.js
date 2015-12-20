/**
 * Created by IQBAL-MEBELKART on 12/20/2015.
 */
$(document).ready(function () {
    var i = 0;
    $('#timer').text(i);
    var timer = setInterval(function () {
        i = i + 1;
        $('#timer').text(i);
        if (i === 30) {
            clearInterval(timer);
            $('#timer').html("Dastan");
            $('#relaxmsg').html("Thanks to take a break :) <br/>  Now, How are you feeling?");
        }
    }, 1000)
});