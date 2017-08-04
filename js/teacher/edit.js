
define(["jquery","text!tpls/teacheredit.html","template"],function ($,teacherEdit,template) {
    return function (id) {
        $("#modalTeacherEdit").remove();
        //获取点击行的讲师id，并请求相关数据\
        $.ajax({
            url:"/api/teacher/edit",
            data:{tc_id:id},
            success:function (res) {
                // console.log(res);
                var teacherEdits = template.render(teacherEdit,res.result);
                $(teacherEdits).appendTo("body").modal();
                var $modalTeacherEdit = $("#modalTeacherEdit");
                $modalTeacherEdit.on("submit","form",function () {
                    var formDate = $(this).serialize();
                    console.log(formDate);
                    $.ajax({
                      url:"/api/teacher/update",
                      data:formDate,
                      type:"post",
                      success:function (ret) {
                          // console.log(ret);
                          $modalTeacherEdit.find(".close").trigger("click");
                          $(".left .list-group .link-teacher").trigger("click");
                      }
                    });
                    return false;
                })

            }
        });

    };
});