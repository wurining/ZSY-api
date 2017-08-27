# 新增系统功能

+ 获取项目路径
    + 在`common/config/config.js`中添加了配置`PATHS`，通过key-value存储助手路径。
    + 获取方法：
        ```
        const val = think.config('PATHS').STATIC_PATH;
        ```