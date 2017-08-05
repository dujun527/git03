define(["jquery","text!tpls/managerFile.html","template","uploadify"],function ($,filesTpl,template) {
    return function (obj) {
        var filesTpls = template.render(filesTpl,obj);
        $(".menu-content").html(filesTpls);
        var $managerFils = $("#managerFils");
        $("#uploadify").uploadify({
            'swf'      : '../assets/uploadify/uploadify.swf',
            'uploader' : '/api/uploader/cover',
            'cancelImg': '../assets/uploadify/cancel.png',
            'folder': 'UploadFile',
            'queueID': 'fileQueue',
            'auto': true,
            'multi': true
        });
    };
});