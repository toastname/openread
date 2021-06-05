$(function() {
    //点击注册账号链接
    $('#link_reg').on('click', function() {

        $('.login_box').hide();


        $('.reg_box').show();

    });
    //点击去登录链接
    $('#link_login').on('click', function() {

        $('.login_box').show();

        $('.reg_box').hide();
    });


    //从layui中获取form对象
    var form = layui.form
    var layer = layui.layer



    console.log(form);
    //自定义校验规则
    form.verify({
        //自定义pwd校验规则
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            var pwd = $('.reg_box [name=password]').val();

            if (pwd !== value) {
                return '两次密码不一致';
            }
        }
    })

    // 监听注册表单的提交事件,在js中，访问属性：对象.属性或者对象['属性']
    $('#form_reg').on('submit', function(e) {
            e.preventDefault();
            var data = {
                    username: $("#form_reg [name=username]").val(),
                    password: $("#form_reg [name=password]").val()
                }
                //$('#form_reg'[name=username]).val()获取表单属性值上的内容
            $.post('http://api-breakingnews-web.itheima.net/api/reguser', data, function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }

                layer.msg("注册成功");

                //回到登录界面
                $('#link_login').click();
            })
        })
        //监听登录表单的事件
    $('#form_login').submit(function(e) {
        //阻止默认提交的行为
        e.preventDefault()

        $.ajax({
            url: "/api/login",
            method: 'POST',
            //快速获取表单中的数据
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg("登录失败！")
                }
                layer.msg("登录成功");
                location.href = "index.html";
            }
        })
    })
})