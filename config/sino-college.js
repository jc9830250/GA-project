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
    auto_set_user_id();   

    //偵測語法
    //ga_mouse_click_event("選擇要素","準則");
    ga_mouse_click_event(".btn","Click");
    ga_mouse_click_event(".btn gsc-search-button gsc-search-button-v2","Click"); //GOOGLE站內搜尋
    ga_mouse_click_event(".btn scholar_href","Click");
    ga_mouse_click_event(".btn mouse_clickClick","Click"); //首頁「統計資訊-更多...>>」、「學術動態-更多...>>」…首頁的眾多滑鼠事件
    ga_mouse_click_event(".btn scholar_href mouse_clickClick","Click");
    ga_mouse_click_event(".btn scholar_href","Click");
    ga_mouse_click_event(".btn btn-info btn-lg mouse_clickClick","Click"); //首頁「研究/學術產出」搜尋按鈕
    ga_mouse_click_event("[href]", "Click", function (_ele) {
        return _ele.text();});
    ga_submit_event("form", "Form", function (_ele) {
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
