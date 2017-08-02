
define(["jquery","text!tpls/teacheredit.html","template"],function ($,teacherEdit,template) {
    return function (id) {
        $("#modalTeacherEdit").remove();
        //获取点击行的讲师id，并请求相关数据\
        $.ajax({
            url:"/api/teacher/edit",
            data:{tc_id:id},
            success:function (res) {
                console.log(res);
                // alert("我要开始编辑讲师列表了");
                var teacherEdits = template.render(teacherEdit,res.result);
                $(teacherEdits).appendTo("body").modal();
                var $modalTeacherEdit = $("#modalTeacherEdit");
                $modalTeacherEdit.on("submit","form",function () {
                    var formDate = $(this).serialize();
                    console.log(formDate);
                    return false;
                })

            }
        });

    };
});