

define(["jquery","text!tpls/teacherInfos.html","template"],function ($,teacherInfos,template) {
      return function (tc_id) {
          // alert("我是弹出框"+tc_id);
          $.ajax({
              url:"/api/teacher/view",
              data:{tc_id:tc_id},
              success:function (data) {
                  console.log(data);

               $("#modalShow").remove();
                var teacherShow = template.render(teacherInfos,data.result);
                  $(teacherShow).appendTo("body").modal();
              }
          })
      }
});