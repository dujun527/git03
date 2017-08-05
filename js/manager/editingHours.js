define(["jquery","text!tpls/managerEdit.html","template","text!tpls/managerChapterEdit.html"],function ($,managerEdit,template,chapterEdit) {
    return function (id,text,imgs,fn) {

        // alert("编辑课时");
        $.ajax({
            url:"/api/course/lesson",
            data:{cs_id:id},
            success:function (ret) {
                ret.result.src = imgs;

                $("#managerEdit").remove();
                $("#managerList").remove();

                var managerEdits  = template.render(managerEdit,ret.result);
              $(text).html(managerEdits);

              var $managerEdit = $("#managerEdit");
              $managerEdit.on("click",".btn-primary",function () {
                  var ct_id = $(this).attr("ct_id");
                  //编辑课时里面的编辑
                  $.ajax({
                      url:"/api/course/chapter/edit",
                      data:{ct_id:ct_id},
                      success:function (ret) {
                          $("#modalChapterEdit").remove();
                        var chapterEdits = template.render(chapterEdit,ret.result);

                       var $chapterEdits = $(chapterEdits);

                          $chapterEdits.appendTo("body").modal();

                          $chapterEdits.on("submit","form",function () {

                              var forData = $(this).serialize();
                              $.ajax({
                                  url:"/api/course/chapter/modify",
                                  type:"post",
                                  data:forData,
                                  success:function (ret) {
                                      $chapterEdits.find(".close").trigger("click");
                                      fn();//通过回调来执行刷新页面
                                  }
                              });
                              return false;
                          })

                      }
                  })

              })

            }
        })
    };

});