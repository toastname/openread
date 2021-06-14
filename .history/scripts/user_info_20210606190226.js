$(function() {
        var form = layui.form
        var layer = layui.layer
        form.verify({
            nickname: function(value) {
                if (value.length > 6) {
                    return '字符长度必须在1 ~ 6个字符之间';
                }
            },
            email: function(value) {
                var ruler =  ' ^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$'
                if (value !== ruler) {
                    return '请填入正确的邮箱地址';
                }
            }
        })
        initUserinfo()



    })
    //初始用户信息
function initUserinfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) {
                return layer.msg('获取用户信息失败！');
            }
            console.log(res);
            //表单取值form.val（‘filter',object)
            // 调用form.val()快速为表单赋值
            form.val('formUserInfo', res.data);
        }
    })
}