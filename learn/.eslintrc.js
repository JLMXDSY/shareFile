module.exports = {
    root: true,
    parserOptions: { // 设置解析器选项能帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 false。
      parser: "babel-eslint",
      sourceType: "module",
    },
    env: { // 使用 env 关键字指定你想启用的环境。如上：更多环境设置请参考：https://cn.eslint.org/docs/user-guide/configuring#specifying-environments
        es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
        node: true, // Node.js 全局变量和 Node.js 作用域
        browser: true, // 浏览器全局变量
        jquery: true // jQuery 全局变量
    },
    globals: { // 定义文件中的全局变量名，false代表这些变量名不能重复
        template: false, 
        _util: false
    },
    // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
    // 如：npm i -D eslint-plugin-html。
    plugins: [
        html // 此插件用来识别.html 和 .vue文件中的js代码
    ],
    // 一个配置文件可以从基础配置中继承已启用的规则。
    // 如果值为字符串数组则每个配置继承它前面的配置。值为 “eslint:recommended” 的 extends 属性启用了eslint默认的规则，请参考：https://cn.eslint.org/docs/rules/
    extends: ["plugin:vue/recommended", "eslint:recommended"],
    
// ESLint 附带有大量的规则。你可以在rules选项中设置，设置的规则将覆盖上面继承的默认规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
// “off” 或 0 - 关闭规则
// “warn” 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
// “error” 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    rules: {
      
    },
  };
  