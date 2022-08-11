(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{657:function(s,e,a){"use strict";a.r(e);var t=a(14),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"表操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表操作"}},[s._v("#")]),s._v(" 表操作")]),s._v(" "),a("h2",{attrs:{id:"创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[s._v("#")]),s._v(" 创建表")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("CREATE TABLE productnotes\n(\n\tnote_id int NOT NULL AUTO_INCREMENT,\n    note_text text NULL,\n    quanlity int NOT NULL DEFAULT 1, # 默认值，只支持常量\n    PRIMARY KEY(note_id),\n    FULLTEXT(note_text)\n) ENGINE=MyISAM;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("主键中只能使用NOT NULL值的列。")]),s._v(" "),a("h2",{attrs:{id:"更新表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新表"}},[s._v("#")]),s._v(" 更新表")]),s._v(" "),a("p",[s._v("数据库表的更改不能撤销，应先做好备份。")]),s._v(" "),a("p",[s._v("添加列：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER TABLE vendors\nADD vend_phone CHAR(20);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除列：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER TABLE vendors\nDROP COLUMN vend_phone;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("更改列属性：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER TABLE vendors\nMODIFY vend_phone CHAR(16);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("复杂的表结构更改一般需要手动删除过程：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("用新的列布局创建一个新表；")])]),s._v(" "),a("li",[a("p",[s._v("使用INSERT SELECT语句，从旧表复制数据到新表；")])]),s._v(" "),a("li",[a("p",[s._v("检验包含所需数据的新表；")])]),s._v(" "),a("li",[a("p",[s._v("重命名旧表（如果确定，可以删除它）；")])]),s._v(" "),a("li",[a("p",[s._v("用旧表原来的名字重命名新表；")])]),s._v(" "),a("li",[a("p",[s._v("重新创建触发器、存储过程、索引和外键。")])])]),s._v(" "),a("h2",{attrs:{id:"约束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约束"}},[s._v("#")]),s._v(" 约束")]),s._v(" "),a("p",[s._v("添加主键约束：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER TABLE vendors\nADD CONSTRAINT pk_vendors PRIMARY KEY(vend_id);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除主键约束：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER TABLE vendors\nDROP PRIMARY KEY;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("添加外键约束：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER TABLE products\nADD FOREIGN KEY(vendor_id) REFERENCES vendors(vendor_id);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除外键约束：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER TABLE products DROP FOREIGN KEY vendor_id;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"删除表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[s._v("#")]),s._v(" 删除表")]),s._v(" "),a("p",[a("code",[s._v("DROP TABLE cumstomers")])]),s._v(" "),a("h2",{attrs:{id:"truncate、delete与drop区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truncate、delete与drop区别"}},[s._v("#")]),s._v(" truncate、delete与drop区别")]),s._v(" "),a("p",[a("strong",[s._v("相同点：")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("truncate和不带where子句的delete、以及drop都会删除表内的数据。")])]),s._v(" "),a("li",[a("p",[s._v("drop、truncate都是DDL语句(数据定义语言)，执行后会自动提交。")])])]),s._v(" "),a("p",[a("strong",[s._v("不同点：")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("truncate 和 delete 只删除数据不删除表的结构；drop 语句将删除表的结构被依赖的约束、触发器、索引；")])]),s._v(" "),a("li",[a("p",[s._v("速度，一般来说: drop> truncate > delete。")])])]),s._v(" "),a("h2",{attrs:{id:"重命名表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重命名表"}},[s._v("#")]),s._v(" 重命名表")]),s._v(" "),a("p",[a("code",[s._v("RENAME TABLE cusmtomers TO cust")])])])}),[],!1,null,null,null);e.default=n.exports}}]);