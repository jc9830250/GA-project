/**
 * 適用網頁：http://vinson.rd.ssic.nccu.edu.tw/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1MtMtw9lKLDTUzfBd6Ld0fAe_FGe5u-Mlkh5WfZiH5qM/edit
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-140332633-1";

var _local_debug = false;

    LIB_URL = "https://jc9830250.github.io/ccstw-GA-project/ga_inject_lib.js";
    CSS_URL = "https://jc9830250.github.io/ccstw-GA-project/config/sino-college.css";
var exec = function () {
    //auto_set_user_id();   

    //偵測語法
    //ga_mouse_click_event("選擇要素","準則");
   
    ga_mouse_click_event(".fa-item-image mouse_clickClick","觀看影片",function (_ele) { //影片
        return _ele.attr("title");}); //影片
    ga_mouse_click_event(".mouse_clickClick", "點擊banner", function (_ele) { //首頁、最新消息、精選課程、影片總覽、關於
        return _ele.text();});
    ga_submit_event(".vlog-search-form", "站內搜尋", function (_input) { //搜尋
        return _input.serialize();});
    ga_mouse_click_event("a[rel='noopener']","關於"); //關於 
     ga_mouse_click_event(".vlog-logo","首頁"); //首頁 
    ga_mouse_click_event(".entry-header", "點擊最新公告", function (_ele) { //點擊公告
        return _ele.find(".mouse_clickClick").text();});
    ga_mouse_click_event(".entry-image", "點擊最新公告", function (_ele) { //點擊公告
        return _ele.find(".mouse_clickClick").attr("title");});
     ga_mouse_click_event(".vlog-cats > .entry-image > a", "精選課程影片", function (_ele) { //精選課程影片
        return _ele.attr("title");});
     ga_mouse_click_event(".entry-title > a", "精選課程影片", function (_ele) { //精選課程影片
        return _ele.text();});
     ga_mouse_click_event(".series-text", "播放清單影片", function (_ele) { //播放清單影片
        return _ele.text();});
     ga_mouse_click_event(".category-text", "類別", function (_ele) { //類別
        return _ele.text();});
   
};

// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});
