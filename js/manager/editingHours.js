define(["jquery","text!tpls/managerEdit.html","template"],function ($,managerEdit,template) {
    return function (id,text,imgs) {
        // alert("编辑课时");
        $.ajax({
            url:"/api/course/lesson",
            data:{cs_id:id},
            success:function (ret) {
                ret.result.src = imgs;
                console.log(ret);
                var managerEdits  = template.render(managerEdit,ret.result);
              $(text).html(managerEdits);
              //   console.log($(text));
              var $managerEdit = $("#managerEdit");
              $managerEdit.on("click",".btn-primary",function () {
                  var ct_id = $(this).attr("ct_id");
                  //编辑课时里面的编辑
                  $.ajax({
                      url:"/api/course/chapter/edit",
                      data:{ct_id:ct_id},
                      success:function (ret) {
                          console.log(ret);
                      }
                  })

              })

            }
        })
    };

});