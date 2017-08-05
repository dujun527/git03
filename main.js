/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/7/29
 */

//requireJS主要实现单页应用(ajax请求实现数据交互-->大量的应用于企业级项目)

require.config({
    baseUrl:"js", //全局默认的路径口

    paths:{  //配置单独的变量代指后面的路径
        jquery:"lib/jquery-2.1.4",
        bootstrap:"../assets/bootstrap/js/bootstrap",
        uploadify:"../assets/uploadify/jquery.uploadify",
        text:"lib/text",
        tpls:"../tpls",
        template:"lib/template-web",
        dateTime:"../assets/js/bootstrap-datetimepicker",
        echarts:"lib/echarts.min",
        config:"../assets/ueditor-utf8-php/utf8-php/ueditor.config",
        all:"../assets/ueditor-utf8-php/utf8-php/ueditor.all"
    },
    shim:{  //这里对于不支持AMD规则的引用，倚赖于jquery，这样先加载jquery.
        bootstrap:{
            deps:["jquery"]
        },
        uploadify:{
            deps:["jquery"]
        },
        all:{
            deps:["config"]
        }
    }

});

require(["jquery","teacher/list","sort/list","manager/list","adds/adds","pie/pieList","personal/personalCenter","bootstrap","common/checkLogin"],function($,teacherList,sortList,managerList,addsA,pieList,personalCenter){
    var userInfoStr=sessionStorage.getItem("userInfo");
    var userInfo=JSON.parse(userInfoStr);
    //1、设置用户的头像和用户名
    $(".profile img").attr("src",userInfo.tc_avatar);
    $(".profile h4").text(userInfo.tc_name);
    //2、点击不同菜单，切换不同菜单的功能？
    $(".left .list-group").on("click",".list-group-item",function(){
        var $that = $(this);
        //根据不同的菜单-->不同的菜单有不同的类名？-->去拿每一个类名去给标签做一一的对比，对比成功就可以
        if($(this).hasClass("link-teacher")){
            teacherList();
        }else if($(this).hasClass("link-course-manager")){
            managerList(
                function () {
                    managerList();
                }
            );
        }else if ($(this).hasClass("link-course-adds")){
            addsA(function () {
                managerList();//通过调用来刷新
                $that.prev().addClass("active").siblings().removeClass("active");
            });
        }else if($(this).hasClass("link-course-category")){
            sortList();
        }else if($(this).hasClass("link-chart")){
            pieList();
        }
        //让自己变为蓝色，让别人变为白色
        $(this).addClass("active").siblings().removeClass("active");
    });
    //需求：希望页面加载成功之后，立刻加载讲师管理的功能-->通过模拟点击讲师管理按钮来实现
    $(".left .list-group .link-teacher").trigger("click");  //相当于：点击了讲师管理按钮

    //个人中心的信息
    $(".personal-Center").on("click",function () {

        personalCenter();
    })

});