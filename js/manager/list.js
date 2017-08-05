/*
* 管理列表
*
* */
define(["jquery","text!tpls/managerList.html","template","manager/editingHours","manager/editBasic","manager/files"],function ($,managerList,template,editingHours,editBasic,files) {
    return function (fns) {

        $.ajax({
            url:"/api/course",
            success:function (ret) {
                $("#managerEdit").remove();//清除课程列表模版
                $("#managerList").remove();//清除编辑课程的模版
                console.log(ret);

                var managerLists = template.render(managerList,ret);

               var $menuContent = $(".menu-content").html(managerLists);

                var $managerLists = $("#managerList");
                //编辑课时
                $managerLists.on("click",".editing-hours",function () {
                    //获取对应的cs_id
                    var cs_id = $(this).parent(".media-body").attr("cs_id");
                    //获取对应的图片路径
                    var imgSrc = $(this).parent().parent().find(".media-object").attr("src");
                    var that = $(this);

                    editingHours(cs_id,$menuContent,imgSrc,info);

                    var info = function () {
                        fns();
                        var cs_ids = that.parent(".media-body").attr("cs_id");
                        var imgSrcs = that.parent().parent().find(".media-object").attr("src");
                        editingHours(cs_ids,$menuContent,imgSrcs,info);
                    };

                });
                //编辑基本信息
                $managerLists.on("click",".edit-basic",function () {
                    var cs_id = $(this).parent(".media-body").attr("cs_id");
                    editBasic(cs_id,$menuContent);
                });
                //点击图片上传照片
                $managerLists.on("click","#files",function () {
                    // alert("我要上传图片了");
                    var obj1 = {
                        cs_id:$(this).attr("cs_id"),
                        cs_name:$(this).attr("cs_name"),
                        tc_name:$(this).attr("tc_name"),
                        cs_cover:$(this).find(".media-object").attr("src")
                    };
                    files(obj1);
                })
            }
        });



    };
});