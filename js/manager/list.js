/*
* 管理列表
*
* */
define(["jquery","text!tpls/managerList.html","template","manager/editingHours","manager/editBasic"],function ($,managerList,template,editingHours,editBasic) {
    return function () {
        $("#managerEdit").remove();//清除课程列表模版
        $("#managerList").remove();//清除编辑课程的模版
        $.ajax({
            url:"/api/course",
            success:function (ret) {

                var managerLists = template.render(managerList,ret);

               var $menuContent = $(".menu-content").html(managerLists);

                var $managerLists = $("#managerList");
                $managerLists.on("click",".editing-hours",function () {
                    //获取对应的cs_id
                    var cs_id = $(this).parent(".media-body").attr("cs_id");
                    //获取对应的图片路径
                    var imgSrc = $(this).parent().parent().find(".media-object").attr("src");

                    editingHours(cs_id,$menuContent,imgSrc);
                });
                $managerLists.on("click",".edit-basic",function () {
                    var cs_id = $(this).parent(".media-body").attr("cs_id");
                    editBasic(cs_id,$menuContent);
                })
            }
        });



    };
});