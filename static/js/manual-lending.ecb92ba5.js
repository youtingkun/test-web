(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["manual-lending"],{2409:function(t,e,a){"use strict";a.d(e,"B",(function(){return o})),a.d(e,"y",(function(){return r})),a.d(e,"A",(function(){return s})),a.d(e,"z",(function(){return c})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return d})),a.d(e,"k",(function(){return m})),a.d(e,"h",(function(){return p})),a.d(e,"i",(function(){return b})),a.d(e,"g",(function(){return f})),a.d(e,"l",(function(){return h})),a.d(e,"m",(function(){return _})),a.d(e,"p",(function(){return g})),a.d(e,"q",(function(){return y})),a.d(e,"P",(function(){return v})),a.d(e,"j",(function(){return $})),a.d(e,"Q",(function(){return j})),a.d(e,"M",(function(){return O})),a.d(e,"O",(function(){return N})),a.d(e,"N",(function(){return w})),a.d(e,"C",(function(){return T})),a.d(e,"x",(function(){return k})),a.d(e,"o",(function(){return x})),a.d(e,"D",(function(){return A})),a.d(e,"w",(function(){return L})),a.d(e,"L",(function(){return R})),a.d(e,"n",(function(){return D})),a.d(e,"t",(function(){return C})),a.d(e,"s",(function(){return P})),a.d(e,"K",(function(){return S})),a.d(e,"G",(function(){return E})),a.d(e,"u",(function(){return M})),a.d(e,"e",(function(){return q})),a.d(e,"E",(function(){return F})),a.d(e,"F",(function(){return B})),a.d(e,"r",(function(){return U})),a.d(e,"H",(function(){return I})),a.d(e,"f",(function(){return Y})),a.d(e,"J",(function(){return z})),a.d(e,"I",(function(){return J})),a.d(e,"v",(function(){return H}));var n=a("0c6d"),o=function(t){return Object(n["a"])({url:"/boss/loan/manual/statistics",method:"post",data:t})},r=function(t){return Object(n["a"])({url:"/boss/loan/manual/page",method:"post",data:t})},s=function(t){return Object(n["a"])({url:"/boss/loan/manual/refuse",method:"post",data:t})},c=function(t){return Object(n["a"])({url:"/boss/loan/manual/pay",method:"post",data:t})},i=function(t){return Object(n["a"])({url:"/boss/loan/abnormal/page",method:"post",data:t})},u=function(t){return Object(n["a"])({url:"/boss/loan/abnormal/refuse",method:"post",data:t})},l=function(t){return Object(n["a"])({url:"/boss/loan/abnormal/update",method:"post",data:t})},d=function(t){return Object(n["a"])({url:"/boss/loan/abnormal/pay",method:"post",data:t})},m=function(t,e){var a=1==t?"/boss/bankFlow/page":"/boss/bankFlow/accesspage";return Object(n["a"])({url:a,method:"post",data:e})},p=function(t,e){var a=1==t?"/boss/bankFlow/deletion":"/boss/bankFlow/accessdeletion";return Object(n["a"])({url:a,method:"post",data:e})},b=function(t,e){var a=1==t?"/boss/bankFlow/exceptionHandler":"/boss/bankFlow/accessexceptionHandler";return Object(n["a"])({url:a,method:"post",data:e})},f=function(t,e){var a=1==t?"/boss/bankFlow/cancel":"/boss/bankFlow/accesscancel";return Object(n["a"])({url:a,method:"post",data:e})},h=function(t,e){var a=1==t?"/boss/bankFlow/record":"/boss/bankFlow/accessrecord";return Object(n["a"])({url:a,method:"post",data:e})},_=function(t,e){var a=1==t?"/boss/bankFlow/revoke":"/boss/bankFlow/accessrevoke";return Object(n["a"])({url:a,method:"post",data:e})},g=function(t){return Object(n["a"])({url:"/boss/bankFlow/claimFlow",method:"post",data:t})},y=function(t){return Object(n["a"])({url:"/boss/bankFlow/claimFlowList",method:"post",data:t})},v=function(t){return Object(n["a"])({url:"/boss/writeOff/offline/page",method:"post",data:t})},$=function(t){return Object(n["a"])({url:"/boss/bankFlow/getByFlowNo",method:"post",data:t})},j=function(t){return Object(n["a"])({url:"/boss/writeOff/offline/repay",method:"post",data:t})},O=function(t){return Object(n["a"])({url:"/boss/writeOff/abnormal/page",method:"post",data:t})},N=function(t){return Object(n["a"])({url:"/boss/writeOff/abnormal/repay",method:"post",data:t})},w=function(t){return Object(n["a"])({url:"/boss/writeOff/abnormal/refund",method:"post",data:t})};function T(t){return Object(n["a"])({url:"/boss/orderRepay/payAccountChecking/export",method:"post",responseType:"blob",data:t})}function k(t){return Object(n["a"])({url:"/boss/orderRepay/incomeAccountChecking/export",method:"post",responseType:"blob",data:t})}function x(t){return Object(n["a"])({url:"/boss/orderRepay/bindCardChecking/export",method:"post",responseType:"blob",data:t})}function A(t){return Object(n["a"])({url:"/boss/orderRepay/paymentChannel",method:"post",data:t})}function L(){return Object(n["a"])({url:"/boss/tenant/config/payment/auto/getPaymentAuto",method:"post",data:{param:{}}})}function R(t){return Object(n["a"])({url:"/boss/tenant/config/payment/auto/startPaymentAuto",method:"post",data:t})}function D(t){return Object(n["a"])({url:"/boss/tenant/config/payment/auto/bankNameList",method:"get",params:t})}var C=function(t){return Object(n["a"])({url:"/boss/bankFlow/exportExcel",responseType:"blob",method:"post",data:t})},P=function(t){return Object(n["a"])({url:"/boss/bankFlow/exportAccessExcel",responseType:"blob",method:"post",data:t})};function S(t){return Object(n["a"])({url:"/boss/bankFlow/examineFlow",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/boss/orderRefund/queryRefundRecord",method:"post",data:t})}function M(t){return Object(n["a"])({url:"/boss/orderRefund/exportRefundRecord",method:"post",responseType:"blob",data:t})}function q(t){return Object(n["a"])({url:"/boss/orderRefund/launchRefund",method:"post",data:t})}function F(t){return Object(n["a"])({url:"/boss/orderRefund/launchRefund",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/boss/orderRefund/queryRefundRecordException",method:"post",data:t})}function U(t){return Object(n["a"])({url:"/boss/orderRefund/saveRefund",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/boss/orderRefund/refuseRefund",method:"post",data:t})}function Y(t){return Object(n["a"])({url:"/boss/orderRefund/againRefund",method:"post",data:t})}function z(t){return Object(n["a"])({url:"/boss/writeOff/abnormal/selRepealList",method:"post",data:t})}function J(t){return Object(n["a"])({url:"/boss/writeOff/abnormal/repealExceptionRepay",method:"post",data:t})}function H(t){return Object(n["a"])({url:"/boss/writeOff/abnormal/finishOrderRepay",method:"post",data:t})}},"45eb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"mb20",attrs:{shadow:"hover"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"manual-item"},[a("div",{staticClass:"manual-item-meta"},[t._v(t._s(t.$t("payment_paystack_balance")))]),a("div",{staticClass:"manual-item-value"},[t._v(t._s(t.statisticsData.balance))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"manual-item"},[a("div",{staticClass:"manual-item-meta"},[t._v(t._s(t.$t("payment_last_update_time")))]),a("div",{staticClass:"manual-item-value"},[t._v(t._s(t.statisticsData.updateTime))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"manual-item"},[a("div",{staticClass:"manual-item-meta"},[t._v(t._s(t.$t("payment_un_loan_order_num")))]),a("div",{staticClass:"manual-item-value"},[t._v(t._s(t.statisticsData.count))])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"manual-item"},[a("div",{staticClass:"manual-item-meta"},[t._v(t._s(t.$t("payment_un_loan_order_amunt")))]),a("div",{staticClass:"manual-item-value"},[t._v(t._s(t.statisticsData.amount))])])])],1)],1),a("el-form",{ref:"query",staticClass:"mb10",attrs:{inline:!0,model:t.query,"label-suffix":"："}},[a("el-form-item",{attrs:{label:t.$t("order_order_id"),prop:"orderNo"}},[a("el-input",{staticClass:"search-order-input",attrs:{maxlength:t.CONSTANT.WORD_LIMIT.ORDER,placeholder:t.$t("common_search"),clearable:""},model:{value:t.query.orderNo,callback:function(e){t.$set(t.query,"orderNo","string"===typeof e?e.trim():e)},expression:"query.orderNo"}})],1),a("el-form-item",{attrs:{label:t.$t("order_phone_number"),prop:"userPhone"}},[a("el-input",{attrs:{maxlength:t.CONSTANT.WORD_LIMIT.PHONE,placeholder:t.$t("common_search"),clearable:""},model:{value:t.query.userPhone,callback:function(e){t.$set(t.query,"userPhone","string"===typeof e?e.trim():e)},expression:"query.userPhone"}})],1),a("el-form-item",{attrs:{label:t.$t("user_bvn"),prop:"bvnNo"}},[a("el-input",{attrs:{maxlength:t.CONSTANT.WORD_LIMIT.BVN,placeholder:t.$t("common_search"),clearable:""},model:{value:t.query.bvnNo,callback:function(e){t.$set(t.query,"bvnNo","string"===typeof e?e.trim():e)},expression:"query.bvnNo"}})],1),a("el-form-item",{attrs:{label:t.$t("order_order_create_time"),prop:"searchDate"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"","end-placeholder":"","value-format":"yyyy-MM-dd"},model:{value:t.searchDate,callback:function(e){t.searchDate=e},expression:"searchDate"}})],1),a("el-form-item",{attrs:{label:t.$t("order_new_or_old"),prop:"userType"}},[a("el-select",{attrs:{placeholder:t.$t("order_all"),clearable:""},model:{value:t.query.userType,callback:function(e){t.$set(t.query,"userType",e)},expression:"query.userType"}},t._l([1,2],(function(e){return a("el-option",{key:e,attrs:{label:t.$t("order_new_or_old_status"+e),value:e}})})),1)],1),a("el-form-item",{attrs:{label:t.$t("order_channel_label")}},[a("el-input",{attrs:{clearable:""},model:{value:t.query.afStatus,callback:function(e){t.$set(t.query,"afStatus",e)},expression:"query.afStatus"}})],1),a("el-form-item",{attrs:{label:t.$t("user_bank")}},[a("el-input",{attrs:{clearable:""},model:{value:t.query.bankName,callback:function(e){t.$set(t.query,"bankName",e)},expression:"query.bankName"}})],1),a("icon-button",{attrs:{type:"search"},on:{click:t.search}},[t._v(" "+t._s(t.$t("common_search"))+" ")])],1),a("div",{staticClass:"mb20"},[a("icon-button",{directives:[{name:"loading",rawName:"v-loading",value:t.batchlendingLoading,expression:"batchlendingLoading"},{name:"has",rawName:"v-has",value:t.$auth.MANUAL_PAYMENT_MUL_PAY,expression:"$auth.MANUAL_PAYMENT_MUL_PAY"}],attrs:{type:"batch"},on:{click:t.handleBatchLending}},[t._v(" "+t._s(t.$t("payment_batch_lending"))+" ")]),a("icon-button",{directives:[{name:"loading",rawName:"v-loading",value:t.batchRejectLoading,expression:"batchRejectLoading"},{name:"has",rawName:"v-has",value:t.$auth.MANUAL_PAYMENT_MUL_REJECT,expression:"$auth.MANUAL_PAYMENT_MUL_REJECT"}],attrs:{type:"batch"},on:{click:t.handleBatchReject}},[t._v(" "+t._s(t.$t("payment_batch_reject"))+" ")])],1),a("el-table",{attrs:{data:t.tableData,border:"","header-row-class-name":"table-header"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:t.$t("order_channel_label"),prop:"afStatus"}}),a("el-table-column",{attrs:{prop:"appName",label:t.$t("common_app_name")}}),a("el-table-column",{attrs:{prop:"userName",label:t.$t("user_name")}}),a("el-table-column",{attrs:{prop:"orderNo",label:t.$t("order_order_id")}}),a("el-table-column",{attrs:{prop:"userPhone",label:t.$t("order_phone_number")}}),a("el-table-column",{attrs:{prop:"bvnNo",label:t.$t("user_bvn")}}),a("el-table-column",{attrs:{prop:"createTime",label:t.$t("order_order_create_time")}}),a("el-table-column",{attrs:{prop:"loanAmount",label:t.$t("order_limit")}}),a("el-table-column",{attrs:{prop:"productPeriod",label:t.$t("order_cycle")}}),a("el-table-column",{attrs:{prop:"bankName",label:t.$t("user_bank")}}),a("el-table-column",{attrs:{prop:"productPeriod",label:t.$t("order_new_or_old")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.$t("order_new_or_old_status"+e.row.userType))+" ")]}}])}),a("el-table-column",{attrs:{prop:"historyRepayCount",label:t.$t("order_settlement_times")}}),a("el-table-column",{attrs:{label:t.$t("common_operation")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.lendingLoading,expression:"lendingLoading"},{name:"has",rawName:"v-has",value:t.$auth.MANUAL_PAYMENT_PAY,expression:"$auth.MANUAL_PAYMENT_PAY"}],key:e.row.orderNo,attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleLending(e.row)}}},[t._v(" "+t._s(t.$t("payment_lending"))+" ")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.rejectLoading,expression:"rejectLoading"},{name:"has",rawName:"v-has",value:t.$auth.MANUAL_PAYMENT_REJECT,expression:"$auth.MANUAL_PAYMENT_REJECT"}],key:e.row.orderNo,attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleReject(e.row)}}},[t._v(" "+t._s(t.$t("payment_reject"))+" ")]),a("el-button",{directives:[{name:"has",rawName:"v-has",value:t.$auth.MANUAL_PAYMENT_DETAIL,expression:"$auth.MANUAL_PAYMENT_DETAIL"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleDetail(e.row)}}},[t._v(" "+t._s(t.$t("common_detail"))+" ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.currentPage,limit:t.pageSize},on:{"update:page":function(e){t.currentPage=e},"update:limit":function(e){t.pageSize=e},pagination:t.pagination}})],1)},o=[],r=(a("caad"),a("d81d"),a("d3b7"),a("2532"),a("5530")),s=a("2409"),c=a("ed08"),i={name:"manualPayment",data:function(){return Object(r["a"])(Object(r["a"])({},Object(c["c"])()),{},{tableData:[],total:0,statisticsData:{},searchDate:[],query:{orderNo:"",userPhone:"",bvnNo:"",orderCreateStartDate:"",orderCreateEndDate:"",userType:"",afStatus:"",bankName:""},titleType:"add",ruleForm:{merchantId:"",type:"",channelId:"",price:"",remark:"",status:1},dialogVisible:!1,dialogImageUrl:"",customerVisible:!1,multipleSelection:[],batchlendingLoading:!1,batchRejectLoading:!1,lendingLoading:!1,rejectLoading:!1})},created:function(){this.getStatistics(),this.getTableData()},methods:{pagination:function(t){var e=t.page,a=t.limit;this.pageSize=a,this.currentPage=e,this.getTableData()},search:function(){this.currentPage=1,this.getTableData()},getTableData:function(){var t,e,a=this;Object(s["y"])({pageNum:this.currentPage,pageSize:this.pageSize,param:Object(r["a"])(Object(r["a"])({},this.query),{},{orderCreateStartDate:null===(t=this.searchDate)||void 0===t?void 0:t[0],orderCreateEndDate:null===(e=this.searchDate)||void 0===e?void 0:e[1]})}).then((function(t){var e;200==t.status&&(a.tableData=t.data.list,a.total=null!==(e=t.data.total)&&void 0!==e?e:0)}))},resetForm:function(){this.searchDate=[],Object(c["e"])(this,"query"),this.getTableData()},getStatistics:function(){var t=this;Object(s["B"])({param:{xxx:""}}).then((function(e){200==e.status&&(t.statisticsData=e.data)}))},handleBatchLending:function(){var t=this;if(0!==this.multipleSelection.length){var e=this.multipleSelection.map((function(t){return t.orderNo}));this.$confirm(this.$t("tips_comfirm_batch_lending"),this.$t("common_tips"),{confirmButtonText:this.$t("common_confirm"),cancelButtonText:this.$t("common_cancel"),type:"warning"}).then((function(){t.batchlendingLoading=!0,Object(s["z"])({param:{orderNos:e}}).then((function(e){t.$message({message:e.message,type:"success"})})).catch((function(e){t.$confirm(t.$t("payment_balance_below"),t.$t("common_tips"),{confirmButtonText:t.$t("common_confirm"),cancelButtonText:t.$t("common_cancel"),type:"error"}).then((function(){})).catch((function(){}))})).finally((function(){t.getTableData(),t.getStatistics(),t.batchlendingLoading=!1}))})).catch((function(){}))}else this.$message.error(this.$t("tips_comfirm_choose"))},handleBatchReject:function(t){var e=this;if(0!==this.multipleSelection.length){var a=this.multipleSelection.map((function(t){return t.orderNo}));this.$confirm(this.$t("tips_comfirm_batch_reject"),this.$t("common_tips"),{confirmButtonText:this.$t("common_confirm"),cancelButtonText:this.$t("common_cancel"),type:"warning"}).then((function(){e.batchRejectLoading=!0,Object(s["A"])({param:{orderNos:a}}).then((function(t){e.$message({message:t.message,type:"success"})}))})).catch((function(){})).finally((function(){e.getTableData(),e.getStatistics(),e.batchRejectLoading=!1}))}else this.$message.error(this.$t("tips_comfirm_choose"))},handleLending:function(t){var e=this;this.$confirm(this.$t("tips_comfirm_lending"),this.$t("common_tips"),{confirmButtonText:this.$t("common_confirm"),cancelButtonText:this.$t("common_cancel"),type:"warning"}).then((function(){e.lendingLoading=!0,Object(s["z"])({param:{orderNos:[t.orderNo]}}).then((function(t){e.$message({message:t.message,type:"success"})})).catch((function(t){e.$confirm(e.$t("payment_balance_below"),e.$t("common_tips"),{confirmButtonText:e.$t("common_confirm"),cancelButtonText:e.$t("common_cancel"),type:"error"}).then((function(){})).catch((function(){}))})).finally((function(){e.getTableData(),e.getStatistics(),e.lendingLoading=!1}))})).catch((function(){}))},handleReject:function(t){var e=this;this.$confirm(this.$t("tips_comfirm_reject"),this.$t("common_tips"),{confirmButtonText:this.$t("common_confirm"),cancelButtonText:this.$t("common_cancel"),type:"warning"}).then((function(){e.rejectLoading=!0,Object(s["A"])({param:{orderNos:[t.orderNo]}}).then((function(t){e.$message({message:t.message,type:"success"})}))})).catch((function(){})).finally((function(){e.rejectLoading=!1,e.getTableData(),e.getStatistics()}))},handleDetail:function(t){var e=this.$store.getters.btnPer.includes("orderapplyUserConstct")?1:0;this.$router.push({name:"detail",query:{type:8,contactFlag:e,orderNo:t.orderNo,userId:t.userId,orderId:t.id}})},handleSelectionChange:function(t){this.multipleSelection=t}}},u=i,l=(a("79c2"),a("2877")),d=Object(l["a"])(u,n,o,!1,null,"4be2b8ee",null);e["default"]=d.exports},"72fd":function(t,e,a){},"79c2":function(t,e,a){"use strict";a("72fd")}}]);