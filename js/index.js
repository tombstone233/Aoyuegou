/**
 * Created by ASUS on 2017/9/1.
 */
function switch1() {
    document.getElementById("show1").style.display="block";
    document.getElementById("show2").style.display="none";
    document.getElementById("show3").style.display="none";
    document.getElementById("show4").style.display="none";
    document.getElementById("show5").style.display="none";
}
function switch2() {
    document.getElementById("show1").style.display="none";
    document.getElementById("show2").style.display="block";
    document.getElementById("show3").style.display="none";
    document.getElementById("show4").style.display="none";
    document.getElementById("show5").style.display="none";
}
function switch3() {
    document.getElementById("show1").style.display="none";
    document.getElementById("show2").style.display="none";
    document.getElementById("show3").style.display="block";
    document.getElementById("show4").style.display="none";
    document.getElementById("show5").style.display="none";
}
function switch4() {
    document.getElementById("show1").style.display="none";
    document.getElementById("show2").style.display="none";
    document.getElementById("show3").style.display="none";
    document.getElementById("show4").style.display="block";
    document.getElementById("show5").style.display="none";
}
function switch5() {
    document.getElementById("show1").style.display="none";
    document.getElementById("show2").style.display="none";
    document.getElementById("show3").style.display="none";
    document.getElementById("show4").style.display="none";
    document.getElementById("show5").style.display="block";
}
$(function () {
    $("#right1").mousemove(function () {
        $("#left1").attr("src","images/jt.2.jpg");
        $("#right1").attr("src","images/jt.R2.jpg");
        $("#brand1").fadeOut();
        $("#brand2").fadeIn();
    });
    $("#left1").mousemove(function () {
        $("#left1").attr("src","images/jt.1.jpg");
        $("#right1").attr("src","images/jt.R1.jpg");
        $("#brand2").fadeOut();
        $("#brand1").fadeIn();
    });
});
