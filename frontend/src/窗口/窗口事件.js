export function BindWindowEvent(c, comps) {

    c.Button1Click = function () {
        console.log("Button1Click")
    }

    c.Button2Click = function () {
        console.log("Button2Click")
    }

    c.TextEdit1Click = function () {
        console.log("TextEdit1Click")
    }

    c.登录框1登录按钮被点击 = function () {
        console.log("登录框1登录按钮被点击")
    }

    c.登录框1忘记密码按钮被点击 = function () {
        console.log("登录框1忘记密码按钮被点击")
    }
//Don't delete the event function flag
}