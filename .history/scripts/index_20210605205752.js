$(function() {
    //获取userInfo信息
    getUserInfo();


    //退出登录
    $('.btnlogout').on('click', function() {
        //eg1
        layer.confirm('确定是否退出', { icon: 3, title: '提示' }, function(index) {
            //do something
            //清除本地存储的token
            localStorage.removeItem('token')
                //重新跳转到登录界面
            location.href = 'login.html'
                //关闭询问框
            layer.close(index);
        });

    })


})

function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // 请求配置头对象
        headers: {
            Authorization: localStorage.getItem('token') || ''

        },
        success: function(res) {
                console.log(res);

            }
            //不论成功还是失败，最终都会调用complete回调函数,在这个函数中使用res.responseJSON
            //返回来的数据


    })
}