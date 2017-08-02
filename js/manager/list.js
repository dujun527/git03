/*
* 管理列表
*
* */
define(["jquery","text!tpls/managerList.html","template"],function ($,managerList,template) {
    return function () {
        $.ajax({
            url:"/api/course",
            success:function (ret) {
                console.log(ret);
                var managerLists = template.render(managerList,ret);

                $(".menu-content").html(managerLists);
            }
        });



    };
});