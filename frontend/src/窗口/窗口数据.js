import {ref} from 'vue'
import {defineStore} from 'pinia'
import {WindowSetSize, WindowSetTitle} from "../../wailsjs/runtime"; // 根据实际文件路径进行修改
import {BindWindowEvent} from '@/窗口/窗口事件'

export const 引入窗口数据 = defineStore('窗口数据', {
    state: () => {
        let data = {}
        data.list = ref([])
        data.组件 = {}
        return data
    },
    actions: {
        初始化() {
            BindWindowEvent(this, this.组件)
            try {
                if (this.组件.窗口.hasOwnProperty("事件创建完毕")) {
                    this.窗口创建完毕()
                }
            } catch (e) {
                console.log("窗口创建完毕事件未定义")
            }

            const dthis = this

            try {
                //使用一种自适应方法兼容window和macos的窗口大小
                if (dthis.组件.窗口.width.value.includes('v') || dthis.组件.窗口.width.value.includes('%')) {
                    return;
                }
                if (dthis.组件.窗口.height.value.includes('v') || dthis.组件.窗口.height.value.includes('%')) {
                    return;
                }
                WindowSetSize(parseInt(dthis.组件.窗口.width), parseInt(dthis.组件.窗口.height))
                //重新计算客户区宽度高度
                setTimeout(function () {
                    var WidthFix = parseInt(dthis.组件.窗口.width) - window.innerWidth
                    var HeightFix = parseInt(dthis.组件.窗口.height) - window.innerHeight
                    // console.log("WidthFix", WidthFix)
                    // console.log("HeightFix", HeightFix)
                    // console.log("window.innerHeight", window.innerHeight)
                    // console.log("window.innerWidth", window.innerWidth)
                    WindowSetSize(parseInt(dthis.组件.窗口.width) + WidthFix, parseInt(dthis.组件.窗口.height) + HeightFix)
                    document.body.style.overflow = 'auto'
                }, 1)
                WindowSetTitle(dthis.组件.窗口.标题)
            } catch (e) {

            }
        },
        handleAllEvents(el, e, item, callFuncName) {
            try {
                var dynamicFunction = undefined
                eval(`dynamicFunction = this.${callFuncName}`)
                dynamicFunction(e, item)
            } catch (e) {
                console.log("函数调用出错", callFuncName, "dynamicFunction", dynamicFunction, "e", e)
            }
        },

    },
})