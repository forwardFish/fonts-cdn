## 苹方字体

1. 从苹果电脑中 ttc 文件切分成 ttf 文件
1. 使用 DfontSpliter 切分出 ttf 文件，这里会导出 00、01、02 这样的文件名
1. 使用 fontforge 读取到 ttc 列表中的名称，用此为这些 ttf 文件重命名
1. 使用 ttf2woff2 为文件做格式转换
