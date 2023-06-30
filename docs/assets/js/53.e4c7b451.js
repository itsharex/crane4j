(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{336:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("表达式中的 "),s("code",[a._v("container()")]),a._v(" 函数本质上即 "),s("code",[a._v("MpMethodContainerProvider")]),a._v(" 中的 "),s("code",[a._v("container()")]),a._v(" 重载方法。")]),a._v(" "),s("p",[a._v("该方法存着四种重载，因此在表达式中可以通过四种不同的写法，分别指定查询的外键字段与查询的字段。")]),a._v(" "),s("p",[a._v("假设我们现在有数据库表映射对象如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableId")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_age"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" userAge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("并在 Spring 上下文中已有继承 "),s("code",[a._v("BaseMapper")]),a._v(" 接口的 "),s("code",[a._v("FooMapper")]),a._v(" 这个 "),s("code",[a._v("bean")]),a._v("，其 "),s("code",[a._v("beanName")]),a._v(" 默认为 "),s("code",[a._v("fooMapper")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"_6-4-1-根据主键查询全部字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-1-根据主键查询全部字段"}},[a._v("#")]),a._v(" 6.4.1.根据主键查询全部字段")]),a._v(" "),s("p",[a._v("格式为 "),s("code",[a._v("container('{mapperName}')")]),a._v("，比如：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    container "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"container('fooMapper')\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    containerProvider "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MpMethodContainerProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上述配置等同于借助 "),s("code",[a._v("QueryWrapper")]),a._v(" 构建并执行了 "),s("code",[a._v("select * from foo where id in ?")]),a._v(" 这条 SQL，查询出的数据将会按 "),s("code",[a._v("Foo")]),a._v(" 中配置主键 "),s("code",[a._v("id")]),a._v(" 分组。")]),a._v(" "),s("h2",{attrs:{id:"_6-4-2-根据主键查询指定字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-2-根据主键查询指定字段"}},[a._v("#")]),a._v(" 6.4.2.根据主键查询指定字段")]),a._v(" "),s("p",[a._v("格式为 "),s("code",[a._v("container('{mapperName}', {{column1}, {column2}...})")]),a._v("，比如：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    container "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"container('fooMapper', {'userName', 'userAge'})\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    containerProvider "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MpMethodContainerProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上述配置等同于借助 "),s("code",[a._v("QueryWrapper")]),a._v(" 构建并执行了 "),s("code",[a._v("select user_name AS userName, user_age AS userAge, id from foo where id in ?")]),a._v(" 这条 SQL，查询出的数据将会按 "),s("code",[a._v("Foo")]),a._v(" 中配置的主键 "),s("code",[a._v("id")]),a._v(" 分组。")]),a._v(" "),s("p",[s("strong",[a._v("查询的字段名为对应实体类中的属性名，构建 SQL 时会自动转换成查询 SQL")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[s("code",[a._v("crane4j")]),a._v(" 默认将被 "),s("code",[a._v("@TableId")]),a._v(" 注解的属性作为主键。")])]),a._v(" "),s("h2",{attrs:{id:"_6-4-3-根据指定外键查询全部字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-3-根据指定外键查询全部字段"}},[a._v("#")]),a._v(" 6.4.3.根据指定外键查询全部字段")]),a._v(" "),s("p",[a._v("格式为 "),s("code",[a._v("container('{mapperName}', {query_column}, {{column1}, {column2}...})")]),a._v("，比如：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    container "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"container('fooMapper', 'userName')\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    containerProvider "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MpMethodContainerProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上述配置等同于借助 "),s("code",[a._v("QueryWrapper")]),a._v(" 构建并执行了 "),s("code",[a._v("select * from foo where user_name in ?")]),a._v(" 这条 SQL，查询出的数据将会按用户指定的 "),s("code",[a._v("userName")]),a._v(" 属性分组。")]),a._v(" "),s("h2",{attrs:{id:"_6-4-4-根据指定外键查询指定字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-4-根据指定外键查询指定字段"}},[a._v("#")]),a._v(" 6.4.4.根据指定外键查询指定字段")]),a._v(" "),s("p",[a._v("格式为 "),s("code",[a._v("container('{mapperName}', {query_column}, {{column1}, {column2}...})")]),a._v("，比如：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Assemble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    container "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"container('fooMapper', 'userName', {'userAge', 'userSex'})\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    containerProvider "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MpMethodContainerProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("上述配置等同于借助 "),s("code",[a._v("QueryWrapper")]),a._v(" 构建并执行了 "),s("code",[a._v("select user_age AS userAge, user_name AS userName from foo where user_name in ?")]),a._v(" 这条 SQL，查询出的数据将会按用户指定的 "),s("code",[a._v("name")]),a._v(" 属性分组。")]),a._v(" "),s("p",[s("strong",[a._v("查询的字段名（包括key字段）为对应实体类中的属性名，构建 SQL 时会自动转换成查询 SQL")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("由于查出的数据需要依靠用户指定的外键字段进行分组，然后与 key 值对应，因此当用户指定了查询字段，但是又未包含该外键字段时，将会自动在查询字段后追加该外键字段。")])]),a._v(" "),s("h2",{attrs:{id:"_6-4-5-指定查询字段-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-5-指定查询字段-sql"}},[a._v("#")]),a._v(" 6.4.5.指定查询字段 SQL")]),a._v(" "),s("p",[a._v("一般情况下，推荐用户总是以"),s("strong",[a._v("实体类中的属性名作为查询字段/查询外键")]),a._v("，"),s("code",[a._v("crane4j")]),a._v(" 会借助 MP 将其转成对应的表字段 SQL。")]),a._v(" "),s("p",[a._v("不过，考虑到有时候确实有自定义查询字段的需求，因此"),s("strong",[a._v("查询字段")]),a._v("可以直接写自定义 SQL。")]),a._v(" "),s("p",[a._v("比如，现有 "),s("code",[a._v("Bean")]),a._v(" 如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FooDO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableId")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@TableField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user_age"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("然后装配配置如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FooVO")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@AssembleByMP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        container "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"container('fooMapper', ['user_name AS name', 'userAge AS age'])\"")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("最终执行的 SQL 为："),s("code",[a._v("select user_age AS age, user_name AS name foo where user_name in ?")]),a._v("。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("需要注意的是，该查询基于 "),s("code",[a._v("QueryWrapper")]),a._v(" 完成，因此在这种情况可能会查询的表字段与用户的对象不一致，但是又未能自动设置别名的情况。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);