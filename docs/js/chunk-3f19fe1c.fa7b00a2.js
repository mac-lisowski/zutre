(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f19fe1c"],{1041:function(e,t,A){"use strict";A.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("z-container",[a("z-breadcrumbs",{attrs:{items:[{name:"Home",link:{name:"home"}},{name:"Components"},{name:"Chips",link:{name:"docsChip"}}]}}),a("h4",[e._v("Chips")]),a("p",[e._v("Chips are complex entities in small blocks.")]),a("p",[e._v("\n        Components: "),a("code",[e._v("<z-chip>")])]),a("z-divider",{attrs:{content:"EXAMPLE"}}),a("br"),a("z-columns",[a("z-column",[a("z-chip",[e._v("Romance")]),a("z-chip",[e._v("Action")]),a("z-chip",[e._v("Fantasy "),a("z-button",{attrs:{clear:""}})],1),a("z-chip",{staticClass:"clickable",on:{click:function(t){e.chipClick("love")}}},[e._v("Love")])],1)],1),a("br"),a("z-columns",[a("z-column",[a("z-chip",[a("z-avatar",{attrs:{data:"ML",size:"sm",presence:"online"}}),e._v("Maciej Lisowski")],1),a("z-chip",[a("z-avatar",{attrs:{presence:"offline",src:A("180e"),size:"sm"}}),e._v("Brian Doe")],1),a("z-chip",[a("z-avatar",{attrs:{size:"sm",src:A("e072")}}),e._v(" Steve Rogers "),a("z-button",{attrs:{clear:""}})],1)],1)],1),a("z-code",{attrs:{lang:"Vue"}},[e._v('\n<z-chip>Romance</z-chip>\n<z-chip>Action</z-chip>\n<z-chip>Fantasy <z-button clear/></z-chip>\n\n<z-chip data="ML" size="sm" presence="online" >Maciej Lisowski</z-chip>\n<z-chip presence="offline" :src="require(\'./avatar.png\')" size="sm">Brian Doe</z-chip>\n<z-chip size="sm" :src="require(\'./avatar2.png\')">Steve Rogers <z-button clear/></z-chip>\n')]),a("z-divider",{attrs:{content:"API"}}),a("h4",[e._v("API")]),a("h5",[e._v("Chip "),a("code",[e._v("<z-chip>")])]),a("z-table",{attrs:{scrollable:"",shrink:""}},[a("z-thead",[a("z-th",[e._v("Name")]),a("z-th",[e._v("Description")]),a("z-th",[e._v("Type")]),a("z-th",[e._v("Values")]),a("z-th",[e._v("Default")])],1),a("z-tbody",[a("z-tr",[a("z-td",[a("code",[e._v("name")])]),a("z-td",[e._v("\n              name of icon - supported are "),a("a",{attrs:{href:"https://material.io/tools/icons/",target:"_blank"}},[e._v("material icons")]),e._v(" from google\n            ")]),a("z-td",[e._v("String")]),a("z-td",[e._v("---")]),a("z-td",[e._v("---")])],1),a("z-tr",[a("z-td",{attrs:{colspan:"5"}},[a("strong",[e._v("Events")])])],1),a("z-tr",[a("z-td",[a("code",[e._v("click")])]),a("z-td",[e._v("\n              emited on click\n            ")]),a("z-td",[e._v("---")]),a("z-td",[e._v("---")]),a("z-td",[e._v("---")])],1)],1)],1)],1)},n=[],i={name:"DocsHero",methods:{chipClick:function(e){console.log(e)}}},o=i,c=A("2877"),s=Object(c["a"])(o,a,n,!1,null,null,null);s.options.__file="DocsChip.vue";t["default"]=s.exports},"180e":function(e,t,A){e.exports=A.p+"img/avatar.1549be29.png"},e072:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-3f19fe1c.fa7b00a2.js.map