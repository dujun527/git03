define(["jquery","text!tpls/adds.html"],function ($,addsTpl) {
    return function (fn) {
         $("#modalAdds").remove();
         $(addsTpl).appendTo("body").modal();
         var addsTpls = $("#modalAdds");
         addsTpls.on("submit","form",function () {
             var formData = $(this).serialize();
             // alert(formData);
             $.ajax({
                 url:"/api/course/create",
                 type:"post",
                 data:formData,
                 success:function (ret) {
                     addsTpls.find(".close").trigger("click");
                     fn();
                 }
             });

             return false;
         })

    };
});