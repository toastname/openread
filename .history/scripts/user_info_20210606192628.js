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
            var ruler =  ' ^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$'
            if (value !== ruler) {
                return '请填入正确的邮箱地址';
            }
        }
    })
    initUserinfo()
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

    // 重置表单数据
    $('#btnReset').on('click', function(e) {
        e.preventDefault()
        initUserinfo()
    })

    //监听表单提交事件
    $('.layui-form').on('submit', function(e) {
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg("更新失败")
                }
                console.log(res);
            }
        })
    })



})