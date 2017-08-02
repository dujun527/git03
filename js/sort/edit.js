/*
* 编辑分类列表
* */
define(["jquery","text!tpls/sortEdit.html","template"],function ($,sortEdit,template) {
    return function (id) {
        $("#modalSortEdit").remove();

        $.ajax({
            url:"/api/category/edit",
            data:{cg_id:id},
            success:function (ret) {
                  console.log(ret);
             var sortEdits = template.render(sortEdit,ret.result);
             //固定化动态生成的元素
             var $sortEdits = $(sortEdits);

             $sortEdits.appendTo("body").modal();

             $sortEdits.on("submit","form",function () {
                   var formData = $(this).serialize();
                    // alert(formData);
                    $.ajax({
                        url:"/api/category/modify",
                        data:formData,
                        type:"post",
                        success:function (ret) {
                            $sortEdits.find(".close").trigger("click");
                            $(".left .list-group .link-course-category").trigger("click");
                        }
                    });

                 return false;
             });
            }
        })
    };
});