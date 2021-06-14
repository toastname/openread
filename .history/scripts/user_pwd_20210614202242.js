$(function() {
    console.log("one");
    var form = layui.form
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        samePwd: function(val) {
            if (val === $('[name=oldPwd]').val()) {
                return '新旧密码不能相同！'
            }
        },
        rePwd: function(val) {
            if (val !== $('[name=newPwd]').val()) {
                return '两次密码不一致'
            }
        }
    })

    //https://www.showdoc.com.cn/escook?page_id=3708037396052717 接口地址
    $('.layui-form').on('submit', function(e) {
        e.preventDefault();
        console.log($(this).serialize())
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function(res) {

                if (res.status !== 0) {
                    return layui.layer.msg('更新密码失败！')
                }
                layui.layer.msg('更新密码成功！')
                    //更新成功后进行重置表单
                $('.layui-form')[0].reset()
            }
        })
    })
})