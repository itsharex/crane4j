(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{300:function(e,v,_){"use strict";_.r(v);var s=_(14),o=Object(s.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"_5-5-1-实现原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-1-实现原理"}},[e._v("#")]),e._v(" 5.5.1.实现原理")]),e._v(" "),v("p",[e._v("目前 "),v("code",[e._v("crane4j")]),e._v(" 支持通过 "),v("code",[e._v("@Assemble")]),e._v(" 、"),v("code",[e._v("@Disassemble")]),e._v(" 与 "),v("code",[e._v("@AssembleMp")]),e._v(" 三种注解配置操作，虽然它们用起来有点像，不过实际上底层的实现是完全不同的。")]),e._v(" "),v("p",[e._v("根据前文，我们知道 "),v("code",[e._v("crane4j")]),e._v(" 通过 "),v("code",[e._v("BeanOperationParser")]),e._v(" 将 "),v("code",[e._v("AnnotatedElement")]),e._v(" 中的各项注解配置转为最终需要的配置对象 "),v("code",[e._v("BeanOperations")]),e._v("，实际上不同注解配置的解析过程是由注册到 "),v("code",[e._v("Parser")]),e._v(" 中的一批注解配置解析器 "),v("code",[e._v("OperationAssembleResolver")]),e._v(" 共同完成的。")]),e._v(" "),v("p",[e._v("参照下图，我们可以理解每一个 "),v("code",[e._v("OperationAssembleResolver")]),e._v(" 都对应一套注解解析规则，当我们向 "),v("code",[e._v("Parser")]),e._v(" 输入一个需要解析的 "),v("code",[e._v("AnnotatedElement")]),e._v(" 时，"),v("code",[e._v("Parser")]),e._v(" 会为其创建一个 "),v("code",[e._v("BeanOperations")]),e._v(" 配置对象，并像驱动流水线上的工件一样驱动它在解析器链上流转，每个解析器都根据自己的规则去解析 "),v("code",[e._v("AnnotatedElement")]),e._v(" 中的配置，根据配置元数据去生成/调整 "),v("code",[e._v("BeanOperations")]),e._v(" 中的操作对象，这是一套非常简单的责任链模式。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://img.xiajibagao.top/image-20230405210611341.png",alt:"image-20230405210611341"}})]),e._v(" "),v("h3",{attrs:{id:"_5-5-2-自定义解析器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-2-自定义解析器"}},[e._v("#")]),e._v(" 5.5.2.自定义解析器")]),e._v(" "),v("p",[e._v("基于上述原理，也不难猜到目前的三套注解规则都有对应解析器：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("AssembleAnnotationResolver")]),e._v(" ：用于解析 "),v("code",[e._v("@Assemble")]),e._v(" 注解生成装配操作；")]),e._v(" "),v("li",[v("code",[e._v("DisassembleAnnotationResolver")]),e._v("：用于解析 "),v("code",[e._v("@Disassemble")]),e._v(" 注解生成拆卸操作；")]),e._v(" "),v("li",[v("code",[e._v("AssembleMpAnnotationResolver")]),e._v(" ：用于解析 "),v("code",[e._v("@AssembleMp")]),e._v(" 注解，生成以 MP 查询方法作为数据源的装配操作；")])]),e._v(" "),v("p",[e._v("如果用户希望像支持可以支持自定义注解（或者我更喜欢叫它配置规则），则可以实现 "),v("code",[e._v("BeanOperationsResolver")]),e._v(" 接口创建一个自定义解析器。")]),e._v(" "),v("p",[e._v("在 spring 环境中，仅需将自定义解析器交给 spring 管理即可，项目启动后会自动注册到 "),v("code",[e._v("Parser")]),e._v(" 中，若在非 spring 环境中，也可以获取 "),v("code",[e._v("TypeHierarchyBeanOperationParser")]),e._v(" 后调用 "),v("code",[e._v("addBeanOperationsResolver")]),e._v(" 方法手动注册。")])])}),[],!1,null,null,null);v.default=o.exports}}]);