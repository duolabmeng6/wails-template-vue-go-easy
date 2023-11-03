import {ElMessage, ElMessageBox} from "element-plus";
import * as systemFc from "../../wailsjs/runtime";
import * as goFc from "../../wailsjs/go/main/App";

export function BindWindowEvent(c, comps) {

    c.登录框1登录按钮被点击 = function () {
        console.log("登录框1登录按钮被点击")
        let u = comps.登录框1.data.username
        let p = comps.登录框1.data.password

        comps.登录框1.data.username_error_msg = '改改你的用户名太简单了'
        comps.登录框1.data.password_error_msg = '你的密码真简单'
        // u = data.username // 也可以这样子 取决于自定义comps返回的data
        // p = data.password
        console.log("u", u)
        console.log("p", p)
        ElMessageBox.alert(
            `登录成功 你输入的账号密码为${u} ${p}`,
            '提示',
            {
                confirmButtonText: '确定',
                callback: (action) => {
                    ElMessage({
                        type: 'info',
                        title: "提示",
                        message: `点击了确定: ${action}`,
                    });

                    ElMessage({
                        message: '登录成功',
                        type: 'success',
                    });
                }
            })
        
    }

    c.登录框1忘记密码按钮被点击 = function () {
        console.log("登录框1忘记密码按钮被点击")
    }

    c.Button1Click = function () {
        console.log("Button1Click",comps.TextEdit1.text,comps.TextEdit1)
        systemFc.BrowserOpenURL(comps.TextEdit1.text)
    }

    c.Button3Click = function () {
        console.log("Button3Click")
        comps.TextEdit2.text = goFc.E获取系统时间()
    }


    c.WinCreated = function () {
        console.log("WinCreated")
    }

    c.Button1被单击 = function () {
        console.log("Button1被单击")
    }
//Don't delete the event function flag
}