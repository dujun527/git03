/*
* 基本课程的编辑
*
* */

define(["jquery","text!tpls/managerEditBasic.html","template"],function ($,managerEditB,template) {
    return function (id,text) {
        // alert("我要编辑基本信息了");
        $.ajax({
            url:"/api/course/basic",
            data:{cs_id:id},
            success:function (ret) {
                console.log(ret);
             var managerEditBs = template.render(managerEditB,ret.result);
               text.html(managerEditBs);
            }
        })
    }
});