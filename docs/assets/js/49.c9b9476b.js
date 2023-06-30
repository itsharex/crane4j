(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{330:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://img.xiajibagao.top/image-20230221133602215.png",alt:"image-20230221133602215"}}),t._v(" "),s("p",[t._v("操作执行器 "),s("code",[t._v("BeanOperationExecutor")]),t._v(" 是完成填充操作的核心组件，它决定了以何种方式使用对应处理器完成填充和装配操作。当我们调用 "),s("code",[t._v("execute")]),t._v(" 方法后，它将完成四个步骤：")]),t._v(" "),s("ol",[s("li",[t._v("接受待处理对象和对应的操作配置 "),s("code",[t._v("BeanOperations")]),t._v("；")]),t._v(" "),s("li",[t._v("执行拆卸操作，将所有需要处理的对象平铺；")]),t._v(" "),s("li",[t._v("按对象中各个 "),s("code",[t._v("key")]),t._v(" 字段对应的操作，将对象和对应装配操作封装为执行对象 "),s("code",[t._v("Execution")]),t._v("；")]),t._v(" "),s("li",[t._v("最终按特定的顺序将执行对象 "),s("code",[t._v("Execution")]),t._v(" 分发给操作处理器 "),s("code",[t._v("OperationHandler")]),t._v(" 完成操作；")])]),t._v(" "),s("p",[t._v("操作执行器决定的各项操作的"),s("strong",[t._v("执行顺序")]),t._v("，与对"),s("strong",[t._v("数据源的访问次数")]),t._v("，是影响"),s("strong",[t._v("执行效率")]),t._v("的关键组件之一。")]),t._v(" "),s("h2",{attrs:{id:"_4-3-1-可选实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-可选实现"}},[t._v("#")]),t._v(" 4.3.1.可选实现")]),t._v(" "),s("p",[t._v("操作执行器有三种实现，用户可以根据需求自己选择：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("DisorderedBeanOperationExecutor")]),t._v("：同步无序操作执行器，默认使用的操作执行器；")]),t._v(" "),s("li",[s("code",[t._v("OrderedBeanOperationExecutor")]),t._v("：同步有序操作执行器，支持按顺序完成装配操作，但是相对无序执行器在特定情况性能有所影响；")]),t._v(" "),s("li",[s("code",[t._v("AsyncBeanOperationExecutor")]),t._v("：异步操作执行器，默认不注册到 Spring 容器，需要用户自己注册；")])]),t._v(" "),s("p",[t._v("以下是它们的异同点：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("执行器")]),t._v(" "),s("th",[t._v("是否按顺序执行")]),t._v(" "),s("th",[t._v("一次填充相同容器访问次数")]),t._v(" "),s("th",[t._v("是否异步")]),t._v(" "),s("th",[t._v("是否默认启用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("AsyncBeanOperationExecutor")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("n")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("×")])]),t._v(" "),s("tr",[s("td",[t._v("DisorderedBeanOperationExecutor")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("√")])]),t._v(" "),s("tr",[s("td",[t._v("OrderedBeanOperationExecutor")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("n")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("√")])])])]),t._v(" "),s("p",[t._v("其中，一次填充相同容器访问次数，是指当执行填充时，如果在一组填充中同时有 n 个操作都指定了相同的数据源容器，那么在本次填充中该数据源容器会被访问几次。")]),t._v(" "),s("p",[t._v("由于执行器按容器分组批量执行操作会打乱操作间原有顺序，因此目前批量提交与执行顺序不可兼得。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("在 spring 环境中，异步执行器 "),s("code",[t._v("AsyncBeanOperationExecutor")]),t._v(" 默认是不注册的，要使用的话用户需要自己在 spring 上下文中配置。")])]),t._v(" "),s("h2",{attrs:{id:"_4-3-2-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-使用"}},[t._v("#")]),t._v(" 4.3.2.使用")]),t._v(" "),s("p",[s("strong",[t._v("在手动填充时使用")])]),t._v(" "),s("p",[t._v("当手动填充时，可通过 "),s("code",[t._v("OperateTemplate")]),t._v(" 的指定重载方法设置本次填充操作使用的操作执行器：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 spring 上下文中获取 OperateTemplate 和 DisorderedBeanOperationExecutor")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OperateTemplate")]),t._v(" operateTemplate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OperateTemplate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanOperationExecutor")]),t._v(" executor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DisorderedBeanOperationExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noperateTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fooList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" op "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("在自动填充时使用")])]),t._v(" "),s("p",[t._v("当自动填充时，可以在 "),s("code",[t._v("@AutoOperate")]),t._v(" 注解指操作执行器：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填充返回值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoOperate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" executor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DisorderedBeanOperationExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFooList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do nothing")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填充参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ArgAutoOperate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoOperate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foos"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" executor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DisorderedBeanOperationExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFooList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" foos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do nothing")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);