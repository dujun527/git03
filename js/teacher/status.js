/*
*
* 修改教师的状态
*
* */

define(["jquery"],function ($) {
    return function (id,tc_status,fn) {

         $.ajax({
             url:"/api/teacher/handle",
             data:{tc_id:id,tc_status:tc_status},
             type:"post",
             success:function (ret) {
                 // console.log("返回的"+ret.result.tc_status);
                 fn(ret.result.tc_status);
             }
         })
    };
});