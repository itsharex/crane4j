(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{305:function(a,t,e){"use strict";e.r(t);var s=e(14),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("code",[a._v("crane4j")]),a._v(" 结合 SpringBoot 的配置系统，提供了一些可选的配置项。")]),a._v(" "),t("h2",{attrs:{id:"_1-3-1-是否启用字节码反射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-是否启用字节码反射"}},[a._v("#")]),a._v(" 1.3.1.是否启用字节码反射")]),a._v(" "),t("p",[t("code",[a._v("crane4j")]),a._v(" 通过默认引入了基于字节码的反射增强库 "),t("a",{attrs:{href:"https://github.com/EsotericSoftware/reflectasm",target:"_blank",rel:"noopener noreferrer"}},[a._v("ReflectAsm"),t("OutboundLink")],1),a._v(" ，用户可以通过  "),t("code",[a._v("enable-asm-reflect")]),a._v(" 开启反射增强功能：")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用字节码增强")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enable-asm-reflect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])]),t("p",[a._v("默认不开启，开启后可以一定程度上提升字段映射的性能，不过对应的可能会带来额外的内存消耗。")]),a._v(" "),t("h2",{attrs:{id:"_1-3-2-操作配置预解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-操作配置预解析"}},[a._v("#")]),a._v(" 1.3.2.操作配置预解析")]),a._v(" "),t("p",[a._v("由于操作配置对象 "),t("code",[a._v("BeanOperation")]),a._v(" 皆由对应的 "),t("code",[a._v("Class")]),a._v(" 解析而来，因此若解析器具备缓存功能，可以通过 "),t("code",[a._v("operate-entity-packages")]),a._v(" 配置实体类包路径，在执行器进行预解析，从而在后续调用时略过配置解析步骤，加快执行速度：")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 操作配置预解析")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("operate-entity-packages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cn.crane4j.springboot.config.*\n")])])]),t("h2",{attrs:{id:"_1-3-3-扫描枚举并注册为容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-扫描枚举并注册为容器"}},[a._v("#")]),a._v(" 1.3.3.扫描枚举并注册为容器")]),a._v(" "),t("p",[t("code",[a._v("crane4j")]),a._v(" 支持将枚举也作为数据源适配为容器，因此提供了 "),t("code",[a._v("container-enum-packages")]),a._v(" 配置，用于扫描一个或多个包路径下的枚举，在应用启动后自动注册为容器：")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 扫描枚举包路径")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container-enum-packages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cn.demo.constant.enums.*\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否只加载被@ContainerEnum注解的枚举")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("only-load-annotated-enum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])]),t("p",[a._v("关于容器部分，参见"),t("RouterLink",{attrs:{to:"/datasource/2.2.枚举容器.html"}},[a._v("枚举数据源容器")]),a._v("一节。")],1),a._v(" "),t("h2",{attrs:{id:"_1-3-4-扫描常量类并注册为容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-扫描常量类并注册为容器"}},[a._v("#")]),a._v(" 1.3.4.扫描常量类并注册为容器")]),a._v(" "),t("p",[t("code",[a._v("crane4j")]),a._v(" 支持将常量类也作为数据源适配为容器，因此提供了 "),t("code",[a._v("container-enum-packages")]),a._v(" 配置，用于扫描一个或多个包路径下的枚举，在应用启动后自动注册为容器：")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 扫描常量包路径")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container-constant-packages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cn.demo.constant."),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Constant")]),a._v("\n")])])]),t("p",[a._v("关于容器部分，参见"),t("RouterLink",{attrs:{to:"/datasource/2.3.常量容器.html"}},[a._v("常量数据源容器")]),a._v("一节。")],1),a._v(" "),t("h2",{attrs:{id:"_1-3-5-是否启用自动填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-是否启用自动填充"}},[a._v("#")]),a._v(" 1.3.5.是否启用自动填充")]),a._v(" "),t("p",[t("code",[a._v("crane4j")]),a._v(" 默认支持自动方法返回值与方法入参，用户也可以通过配置自定义是否关闭该功能：")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("  \n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否启用参数自动填充")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enable-method-argument-auto-operate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 是否启用返回值自动填充")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enable-method-result-auto-operate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n")])])]),t("p",[a._v("关于自动填充，参见 "),t("RouterLink",{attrs:{to:"/execute/4.2.自动填充.html"}},[a._v("自动填充")]),a._v(" 一节。")],1),a._v(" "),t("h2",{attrs:{id:"_1-3-6-配置容器缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-6-配置容器缓存"}},[a._v("#")]),a._v(" 1.3.6.配置容器缓存")]),a._v(" "),t("p",[a._v("用户可以通过 "),t("code",[a._v("cache-containers")]),a._v(" 配置为指定的数据源容器添加缓存功能：")]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 声明哪些数据源需要包装为缓存")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cache-containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("shared-cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" testContainer\n")])])]),t("p",[a._v("上述示例表示，在项目启动后，通过 "),t("code",[a._v("CacheManager")]),a._v(" 为命名空间为 "),t("code",[a._v("testContainer")]),a._v(" 的容器挂载缓存空间 "),t("code",[a._v("shared-cache")]),a._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);