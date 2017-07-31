

define(["jquery","text!tpls/teacherInfos.html","bootstrap"],function ($,teacherInfos) {
      return function (tc_id) {
          // alert("我是弹出框"+tc_id);
          $.ajax({
              url:"/api/teacher/view",
              data:{tc_id:tc_id},
              success:function (data) {
                  console.log(data);
                  // console.log(teacherInfos);
               $("body").append(teacherInfos);

              }
          })
      }
});