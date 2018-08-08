/**
 * Created by yangjie on 2018/8/7.
 */
var $,tab,skyconsWeather;
layui.config({
    base : "js/"
}).use(['bodyTab','form','element','layer','jquery'],function(){
    var form = layui.form,
        layer = layui.layer,
        element = layui.element;
    $ = layui.jquery;
    tab = layui.bodyTab;
});