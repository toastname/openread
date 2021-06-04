//拼接API地址，jquery的方法
//注意：每次调用$.get()或$.post()或$.ajax()的时候会先调用ajaxPrefilter这个函数
//在这个函数中我们可以拿到我们给Ajax提供的配置u第项
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
    console.log(options.url);
})