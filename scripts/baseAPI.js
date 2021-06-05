//拼接API地址，jquery的方法
//注意：每次调用$.get()或$.post()或$.ajax()的时候会先调用ajaxPrefilter这个函数
//在这个函数中我们可以拿到我们给Ajax提供的配置u第项
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
    //统一为有权限的接口，设置headers请求头

    //如果返回的字符串包含my字符串
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorizations: localStorage.getItem('token') || ''
        }
    }
    console.log(options.url);
    //全局统一回调函数，必须有权限才能进入网页
    options.complete = function(res) {


        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            //强制清空token
            localStorage.removeItem('token');
            location.href = 'login.html';
        }

    }

})