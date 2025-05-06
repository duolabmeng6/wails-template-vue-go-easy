import { ElMessage, ElMessageBox } from "element-plus";
import * as systemFc from "../../wailsjs/runtime";
import * as goFc from "../../wailsjs/go/main/App";
import { __load_data } from './__load_data'
import { 表格操作类 } from './table.class'

export function BindWindowEvent() {
    const c = __load_data()
    let comps = c.comps
    let 表格 = 表格操作类.初始化(comps.表格1)

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
        console.log("Button1Click", comps.TextEdit1.text, comps.TextEdit1)
        systemFc.BrowserOpenURL(comps.TextEdit1.text)
    }

    c.Button3Click = async function () {
        console.log("Button3Click")
        comps.TextEdit2.text = "abc"
        comps.TextEdit2.text = await goFc.E获取系统时间()
    }


    c.WinCreated = function () {
        console.log("WinCreated")

        表格.清空表格()
        表格.设置表头([
            { label: '姓名', prop: 'name', width: '100px' },
            { label: '年龄', prop: 'age', width: '100px' },
            { label: '地址', prop: 'address', width: '200px' },
            { label: '日期', prop: 'date', width: '150px' }
        ]);
    }

    c.Button1被单击 = function () {
        console.log("Button1被单击")

    }

    c.Button2Click = async function () {
        console.log("Button2Click")
        comps.TextEdit1.text = "abc"
    }

    c.按钮_增加数据被单击 = async function () {
        console.log("按钮_增加数据被单击")
        // comps.表格1.data.push({
        //     name: "张三",
        //     age: 18,
        //     address: "北京",
        //     date: "2016-05-02",
        // })




        表格.插入行({ name: "张三", age: 18, address: "北京", date: "2016-05-02" });
        表格.批量插入([
            { name: "李四", age: 22, address: "上海", date: "2016-05-03" },
            { name: "王五", age: 30, address: "广州", date: "2016-05-04" }
        ]);

        表格.设置列属性('name', { fixed: true });
        表格.设置单元格值(0, 'age', 19);
        console.log("总行数:", 表格.取行数());
        console.log("总列数:", 表格.取列数());
        console.log("第一行姓名:", 表格.取单元格值(0, 'name'));


    }

    c.按钮_清空数据被单击 = async function () {
        console.log("按钮_清空数据被单击")
        // comps.表格1.data = []
        表格.清空表格()

    }

    c.按钮_修改数据被单击 = async function () {
        console.log("按钮_修改数据被单击")
        // comps.表格1.data[0].name = "李四"
        表格.设置单元格值(0, 'name', "李四")

    }
    //Don't delete the event function flag
}