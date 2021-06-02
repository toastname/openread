let imgImage = document.querySelector('img');
imgImage.onclick = function() {
    let mySrc = imgImage.getAttribute('src');
    if (mySrc === "images/icons.png") {
        imgImage.setAttribute("src", "images/logo.png");
    } else {
        imgImage.setAttribute("src", "images/icons.png");
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字");

    localStorage.setItem('name', myName);
    // localStorage可以长期保存，当页面被关闭时数据才会被清除
    //localStorage的键值对用字符串的形式村删除
    myHeading.textContent = "欢迎回来" + myName;


    if (!localStorage.getItem('name') || !myName || myName === null) {
        setUserName();
        // } else {
        //     let storedName = localStorage.getItem('name');
        //     myHeading.textContent = "欢迎回来" + storedName;
        // }
    }
}



myButton.onclick = function() {
    setUserName();
}