export function BindWindowEvent(c, comps) {

    c.Button1Click = function () {
        console.log("Button1Click")
        comps.TextEdit1.内容 = 'abc'
    }
//Don't delete the event function flag
}