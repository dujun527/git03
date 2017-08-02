/*
* 添加课程分类
* */

define(["jquery","text!tpls/sortAdd.html","template"],function ($,sortAdd,template) {
    return function () {

        $("#modalSortAdd").remove();
         // $.ajax({
         //     url:"/api/category/top",
         //     type:"get",
         //     success:function (rets) {
         //      var sortAdds = template.render(sortAdd,rets);
         //
         //         // alert("添加分类");
         //
         //     }
         // });

        $(sortAdd).appendTo("body").modal();

        var $modalSortAdd = $("#modalSortAdd")

        $modalSortAdd.on("submit","form",function () {
            var rostData = $(this).serialize();
            $.ajax({
                url:"/api/category/add",
                type:"post",
                data:rostData,
                success:function (ret) {
                   if (ret.code==200) console.log("添加数据成功");
                    $("#modalSortAdd  .close").trigger("click");  //关闭模态框
                    $(".left .list-group .link-course-category").trigger("click");
                        // fn("#modalSortAdd");
                }
            });

            //阻止默认事件
            return false;
        });
    };
});