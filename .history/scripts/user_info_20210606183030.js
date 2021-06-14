$(function() {
    var form = layui.form
    form.verify({
        nickname: (function(value) {
            if (value.length > 6) {
                return '字符长度必须在1 ~ 6个字符之间';
            }
        }),
        email: (function(value) {
            var ruler =  ' ^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$'
            if (value !== ruler) {
                return '请填入正确的邮箱地址';
            }
        })
    })

})