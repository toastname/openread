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
            if (val !== $('[name=repwd]').val()) {
                return '请重新确认密码'
            }
        }
    })
})