(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["machineOrder"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"6e05":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"g",(function(){return l})),r.d(t,"b",(function(){return n})),r.d(t,"h",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"i",(function(){return u})),r.d(t,"f",(function(){return c})),r.d(t,"e",(function(){return d})),r.d(t,"d",(function(){return p}));var a=r("0c6d");function o(e){return Object(a["a"])({url:"/boss/orderApply/orderList",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/boss/orderApply/orderListExport",method:"post",responseType:"blob",data:e})}function n(e){return Object(a["a"])({url:"/boss/orderRepay/listOrderPayDetails",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/boss/orderRepay/orderPayDetails/export",method:"post",responseType:"blob",data:e})}function s(e){return Object(a["a"])({url:"/boss/orderApply/waitBindCardOrderList",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/boss/orderApply/waitBindCardOrderList/export",method:"post",responseType:"blob",data:e})}function c(e){var t=e.param,r=e.pageSize,o=e.pageNum,l=t.orderNo,n=t.userPhone,i=t.bvnNo,s=t.startTime,u=t.endTime,c=t.isUserNew;return Object(a["a"])({url:"/boss/orderApply/machineOrderList",method:"post",data:{pageNum:o,pageSize:r,param:{orderNo:l,userPhone:n,bvnNo:i,startTime:s,endTime:u,isUserNew:c}}})}function d(e){var t=e.param,r=t.orderIds;return Object(a["a"])({url:"/boss/orderApprove/machineMultipleReject",method:"post",data:{param:{orderIds:r}}})}function p(e){var t=e.param,r=t.orderIds;return Object(a["a"])({url:"/boss/orderApprove/machineMultipleManualApprove",method:"post",data:{param:{orderIds:r}}})}},"841c":function(e,t,r){"use strict";var a=r("d784"),o=r("825a"),l=r("1d80"),n=r("129f"),i=r("14c3");a("search",1,(function(e,t,r){return[function(t){var r=l(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var l=o(e),s=String(this),u=l.lastIndex;n(u,0)||(l.lastIndex=0);var c=i(l,s);return n(l.lastIndex,u)||(l.lastIndex=u),null===c?-1:c.index}]}))},"8bd5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"query",staticClass:"mb10",attrs:{inline:!0,model:e.query,"label-suffix":"："}},[r("el-form-item",{attrs:{label:e.$t("order_order_id"),prop:"orderNo"}},[r("el-input",{staticClass:"search-order-input",attrs:{clearable:"",maxlength:e.CONSTANT.WORD_LIMIT.ORDER},model:{value:e.query.orderNo,callback:function(t){e.$set(e.query,"orderNo","string"===typeof t?t.trim():t)},expression:"query.orderNo"}})],1),r("el-form-item",{attrs:{label:e.$t("order_phone_number"),prop:"userPhone"}},[r("el-input",{attrs:{clearable:"",maxlength:e.CONSTANT.WORD_LIMIT.PHONE},model:{value:e.query.userPhone,callback:function(t){e.$set(e.query,"userPhone","string"===typeof t?t.trim():t)},expression:"query.userPhone"}})],1),r("el-form-item",{attrs:{label:e.$t("user_bvn"),prop:"bvnNo"}},[r("el-input",{attrs:{clearable:"",maxlength:e.CONSTANT.WORD_LIMIT.BVN},model:{value:e.query.bvnNo,callback:function(t){e.$set(e.query,"bvnNo","string"===typeof t?t.trim():t)},expression:"query.bvnNo"}})],1),r("el-form-item",{attrs:{label:e.$t("order_new_or_old"),prop:"isUserNew"}},[r("el-select",{attrs:{placeholder:e.$t("common_search")},model:{value:e.query.isUserNew,callback:function(t){e.$set(e.query,"isUserNew",t)},expression:"query.isUserNew"}},e._l([0,1,2],(function(t){return r("el-option",{key:t,attrs:{label:e.$t("order_user_type"+t),value:t}})})),1)],1),r("el-form-item",{attrs:{label:e.$t("order_order_create_time"),prop:"time"}},[r("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"","end-placeholder":"","value-format":"yyyy-MM-dd"},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}})],1),r("icon-button",{attrs:{type:"search"},on:{click:e.search}},[e._v(" "+e._s(e.$t("common_search"))+" ")])],1),r("div",{staticClass:"mb20"},[r("icon-button",{directives:[{name:"has",rawName:"v-has",value:e.$auth.MACHINE_ORDER_MULTIPLE_OPERATE,expression:"$auth.MACHINE_ORDER_MULTIPLE_OPERATE"}],attrs:{type:"batch"},on:{click:e.handleAllot}},[e._v(" "+e._s(e.$t("order_batch_allot"))+" ")])],1),r("el-table",{attrs:{data:e.tableData,border:"","header-row-class-name":"table-header"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{prop:"appName",label:e.$t("common_app_name")}}),r("el-table-column",{attrs:{prop:"userName",label:e.$t("user_guke_name")}}),r("el-table-column",{attrs:{prop:"orderNo",label:e.$t("order_order_id")}}),r("el-table-column",{attrs:{prop:"userPhone",label:e.$t("order_phone_number")}}),r("el-table-column",{attrs:{prop:"bvnNo",label:e.$t("user_bvn")}}),r("el-table-column",{attrs:{prop:"createTime",label:e.$t("order_order_create_time")}}),r("el-table-column",{attrs:{prop:"loanAmount",label:e.$t("order_limit")}}),r("el-table-column",{attrs:{prop:"productPeriod",label:e.$t("order_cycle")}}),r("el-table-column",{attrs:{prop:"isUserNew",label:e.$t("order_new_or_old")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.$t("order_new_or_old_status"+t.row.isUserNew))+" ")]}}])}),r("el-table-column",{attrs:{prop:"historyRepayCount",label:e.$t("order_settlement_times")}}),r("el-table-column",{attrs:{label:e.$t("common_operation"),fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"has",rawName:"v-has",value:e.$auth.MACHINE_ORDER_DETAIL,expression:"$auth.MACHINE_ORDER_DETAIL"}],attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.handleDetail(t.row)}}},[e._v(" "+e._s(e.$t("common_detail"))+" ")])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.currentPage,limit:e.pageSize},on:{"update:page":function(t){e.currentPage=t},"update:limit":function(t){e.pageSize=t},pagination:e.pagination}}),r("el-dialog",{attrs:{title:"批量处理",visible:e.allotVisible,"close-on-click-modal":!1,width:"360px"},on:{"update:visible":function(t){e.allotVisible=t},close:e.handleClose}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-suffix":"："}},[r("el-form-item",{attrs:{label:e.$t("order_handle_way"),prop:"way"}},[r("el-select",{model:{value:e.ruleForm.way,callback:function(t){e.$set(e.ruleForm,"way",t)},expression:"ruleForm.way"}},e._l([{type:e.$t("order_handle_1"),id:1},{type:e.$t("order_handle_2"),id:0}],(function(e,t){return r("el-option",{key:t,attrs:{value:e.id,label:e.type}})})),1)],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.allotVisible=!1}}},[e._v(" "+e._s(e.$t("common_cancel"))+" ")]),r("el-button",{attrs:{type:"primary",loading:e.dialogAllotLoading},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(" "+e._s(e.$t("common_confirm"))+" ")])],1)],1)],1)},o=[],l=(r("d81d"),r("ac1f"),r("841c"),r("5530")),n=r("6e05"),i=r("ed08"),s={name:"machineOrder",data:function(){return Object(l["a"])(Object(l["a"])({},Object(i["c"])()),{},{tableData:[],total:0,collectList:[],collectionStage:"",input:"",query:{orderNo:"",userPhone:"",bvnNo:"",startTime:"",endTime:"",isUserNew:"",time:null},ruleForm:{way:1},rules:{},allotVisible:!1,dialogAllotLoading:!1,multipleSelection:[]})},created:function(){this.search()},methods:{pagination:function(e){var t=e.page,r=e.limit;this.pageSize=r,this.currentPage=t,this.getTableData()},search:function(){this.currentPage=1,this.getTableData()},getTableData:function(){var e=this;console.log(this.query),Object(n["f"])({pageNum:this.currentPage,pageSize:this.pageSize,param:Object(l["a"])(Object(l["a"])({},this.query),{},{startTime:this.query.time?this.query.time[0]:"",endTime:this.query.time?this.query.time[1]:""})}).then((function(t){var r;200==t.status&&(e.tableData=t.data.list,e.total=null!==(r=t.data.total)&&void 0!==r?r:0)}))},resetForm:function(){this.$refs.query.resetFields(),this.getTableData()},handleDetail:function(e){this.$router.push({name:"detail",query:{type:12,orderNo:e.orderNo,userId:e.userId,orderId:e.id}})},handleSelectionChange:function(e){this.multipleSelection=e},handleClose:function(){void 0!==this.$refs["ruleForm"]&&this.$refs["ruleForm"].resetFields(),this.allotVisible=!1},handleAllot:function(){0!==this.multipleSelection.length?this.allotVisible=!0:this.$message.error(this.$t("tips_comfirm_choose"))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var r=t.multipleSelection.map((function(e){return e.id}));t.dialogAllotLoading=!0;var a=n["d"];t.ruleForm.way||(a=n["e"]),a({param:{orderIds:r}}).then((function(e){t.allotVisible=!1,t.dialogAllotLoading=!1,200==e.status&&(t.$message.success(e.message),t.search())})).catch((function(e){t.allotVisible=!1,t.dialogAllotLoading=!1}))}}))}}},u=s,c=r("2877"),d=Object(c["a"])(u,a,o,!1,null,null,null);t["default"]=d.exports}}]);