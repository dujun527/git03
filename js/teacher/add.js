define(["jquery","text!tpls/teacheradd.html","dateTime"],function ($,teacherAdd) {
    return function () {
        $("#modalTeacherAdd").remove();

        $(teacherAdd).appendTo("body").modal();
   //  时间控件
        $(".form_datetime").datetimepicker({
            format: 'yyyy-mm-dd',
            autoclose:true,
            todayBtn: true,
            minView:'month',
            language: 'zh-CN',
            startDate:new Date()
        });
        $("body").on("submit","#modalTeacherAdd form",function () {

            var formData = $(this).serialize();
            var that = $(this);

             $.ajax({
                url:"/api/teacher/add",
                data:formData,
                type:"post",
                success:function (ret) {
                    console.log("请求成功");
                    if(ret.code==200){
                        console.log("请求成功2");
                        $("#modalTeacherAdd  .close").trigger("click");
                        $(".left .list-group .link-teacher").trigger("click");
                    }
                }
             });

            return false;
        });

    };
});