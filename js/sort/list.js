/*
* 课程管理列表
* */

define(["jquery","text!tpls/sortList.html","template","sort/add","sort/edit"],function ($,sortList,template,sortAdd,sortEdit) {
    return function () {
        // $(".menu-content").html("修改的课程分类");
        $.ajax({
            url:"/api/category",
            success:function (res) {
                console.log(res);

             var sortLists = template.render(sortList,res);

             var $sortLists=$(sortLists);

             $(".menu-content").html($sortLists);

             //添加分类
                $sortLists.on("click","#addSort",function () {
                   sortAdd();
               });
             //点击编辑按钮
                $sortLists.on("click",".btn-btns",function () {
                    var cg_id = $(this).attr("cg_id");
                   sortEdit(cg_id);
            })

            }
        })
    };
});