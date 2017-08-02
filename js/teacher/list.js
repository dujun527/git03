/**
 * 讲师列表模块
 * Author:Wilbert
 *   Date:2017/7/30
 */
define(["jquery","text!tpls/teacherList.html","template","teacher/show","teacher/add","teacher/edit"],function($,teacherListTpl,template,teacherShow,teacherAdds,teacherEdit){
    //1、获取讲师列表模板的内容
    // console.log(teacherListTpl)
    return function(){
        $.ajax({
            url:"/api/teacher",
            type:"get",
            success:function(res){
                //优化后：
                console.log(res);
                if(res.code!=200){
                    console.log(res.msg);
                    return;
                }
                $("#teacherList").remove();
                //数据成功接收：
                // --->把数据渲染到模板中
                var teacherList=template.render(teacherListTpl,res);  //参数1：模版   参数2：数据对象

                var $teacherList = $(teacherList);
                //    -->模板放到页面中
                $(".menu-content").html($teacherList);


               //点击查看功能
                $teacherList.on("click",".btn-btns .btn-look",function () {
                    var  tc_id = $(this).parent(".btn-btns").attr("tc_id");
                         teacherShow(tc_id);
                });
                $teacherList.on("click","#addTeacher",function () {
                    teacherAdds();
                });
                $teacherList.on("click",".btn-redact",function () {
                    var  tc_id = $(this).parent(".btn-btns").attr("tc_id");
                    teacherEdit(tc_id);
                });

            }
        })
    }
});