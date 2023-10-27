# 窗口设计师 GoEasyDesigner 的演示项目 

用于运行窗口设计师设计好界面和程序

![](https://user-images.githubusercontent.com/59047063/270091148-a89d2ab9-9ba3-4efc-b0fa-0a7dcc3bcfc1.gif
)

[下载 GoEasyDesigner 窗口设计师](https://github.com/duolabmeng6/GoEasyDesigner/releases)

[ GoEasyDesigner 项目地址](https://github.com/duolabmeng6/GoEasyDesigner)

# 在线体验窗口设计师

感谢朋友提供的服务器,可以愉快的在线体验了

国内地址: https://go.kenhong.com/

国外地址: https://g.yx24.me

画好界面点保存,会下载2个文件 `设计文件.json`,`辅助代码.js` 注意你的浏览器允许下载多个文件的权限

下载本项目的代码 复制 `go-easy-demo` 文件夹作为开发项目

`go-easy-demo/frontend/src/窗口/设计文件.json`

`go-easy-demo/frontend/src/窗口/辅助代码.js`

运行项目 就可以看到你设计好的界面了.

```
cd go-easy-demo
wails dev
```

想要更好的无缝使用体验需要下载客户端程序.


## 实时调试

要在实时开发模式下运行，请运行项目目录中的 `wails dev`。这将运行一个Vite开发

服务器将为您的前端更改提供非常快速的热重新加载。如果你想在浏览器中开发

并可以访问您的Go方法，还有一个在http://localhost:34115上运行的开发服务器。连接

在浏览器中，您可以从devtools调用您的Go代码。

## 编译

要构建可再分发的生产模式软件包，请使用  `wails build`。