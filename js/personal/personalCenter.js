define(["jquery","text!tpls/personalCenter.html","template","all"],function ($,personalCenter,template) {
    return function () {
        $.ajax({
            url:"/api/teacher/profile",
            success:function (res) {
                var personalCenters = template.render(personalCenter,res.result);
                var $personalCenters = $(personalCenters);
                $personalCenters.appendTo("body").modal();
                var ue = UE.getEditor('container');
                ue.ready(function() {
                    //设置编辑器的内容
                    ue.setContent(res.result.tc_introduce);
                    //获取html内容，返回: <p>hello</p>
                    var html = ue.getContent();
                    //获取纯文本内容，返回: hello
                    var txt = ue.getContentTxt();
                    ue.setContent(txt);
                });
                $personalCenters.on("submit","form",function () {
                    var forData = $(this).serialize();
                    console.log(forData);
                    $.ajax({
                       url:"/api/teacher/modify",
                       type:"post", 
                       data:forData,
                       success:function (ret) {
                           if(ret.code==200) console.log("数据更新成功");
                           $personalCenters.find(".close").trigger("click");
                           location.reload();
                       } 
                    });
                    return false;
                })
            }
        });
    };
});