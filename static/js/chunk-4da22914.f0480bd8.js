(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4da22914"],{"1df7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0,model:e.searchForm,"label-suffix":"："}},[a("el-form-item",{attrs:{label:e.$t("merConfig_merchant_name"),prop:"tenantName"}},[a("el-input",{attrs:{maxlength:"20"},model:{value:e.searchForm.tenantName,callback:function(t){e.$set(e.searchForm,"tenantName",t)},expression:"searchForm.tenantName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_app_name"),prop:"appName"}},[a("el-input",{attrs:{maxlength:"20"},model:{value:e.searchForm.appName,callback:function(t){e.$set(e.searchForm,"appName",t)},expression:"searchForm.appName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_status"),prop:"status"}},[a("el-select",{attrs:{clearable:""},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},[a("el-option",{attrs:{label:e.$t("common_enable_status"),value:1}}),a("el-option",{attrs:{label:e.$t("common_disable_status"),value:0}})],1)],1),a("el-form-item",[a("icon-button",{attrs:{type:"search"},on:{click:e.search}},[e._v(e._s(e.$t("common_search_button")))])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.data.listLoading,expression:"data.listLoading"}],ref:"table",attrs:{data:e.data.list,border:"","header-row-class-name":"table-header"}},[a("el-table-column",{attrs:{type:"index",label:e.$t("common_order"),width:"50"}}),a("el-table-column",{attrs:{prop:"accountName",label:e.$t("merConfig_login_name")}}),a("el-table-column",{attrs:{prop:"tenantName",label:e.$t("merConfig_merchant_name")}}),a("el-table-column",{attrs:{prop:"appName",label:e.$t("merConfig_app_name")}}),a("el-table-column",{attrs:{prop:"channelName",label:e.$t("merConfig_channel_name")}}),a("el-table-column",{attrs:{prop:"isWithholding",label:"是否自动放款"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(1==n.isWithholding?e.$t("common_is"):e.$t("common_no")))])]}}])}),a("el-table-column",{attrs:{prop:"status",label:e.$t("merConfig_status")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(1==n.status?e.$t("common_enable_status"):e.$t("common_disable_status")))])]}}])}),a("el-table-column",{attrs:{prop:"operatorName",label:e.$t("common_operator")}}),a("el-table-column",{attrs:{prop:"updateTime",label:e.$t("common_operation_time")}}),a("el-table-column",{attrs:{prop:"remark",label:e.$t("common_remark")}}),a("el-table-column",{attrs:{label:e.$t("common_operation"),fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:e.$auth.PAYMENT_EDIT,expression:"$auth.PAYMENT_EDIT"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleEdit(n.tenantId)}}},[e._v(e._s(e.$t("common_edit_button"))+" ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.data.total>0,expression:"data.total > 0"}],attrs:{total:e.data.total,page:e.data.page.pageNum,limit:e.data.page.pageSize},on:{"update:page":function(t){return e.$set(e.data.page,"pageNum",t)},"update:limit":function(t){return e.$set(e.data.page,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{visible:e.data.dialogVisible,width:"600px",title:e.$t("common_edit_button"),"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(t){return e.$set(e.data,"dialogVisible",t)}}},[a("el-form",{ref:"editForm",attrs:{model:e.newForm,rules:e.rules,"label-suffix":"：","label-width":"auto"}},[a("el-form-item",{attrs:{label:e.$t("merConfig_merchant_name"),prop:"tenantName"}},[a("el-input",{attrs:{maxlength:"20",disabled:""},model:{value:e.newForm.tenantName,callback:function(t){e.$set(e.newForm,"tenantName",t)},expression:"newForm.tenantName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_app_name"),prop:"appName"}},[a("el-input",{attrs:{maxlength:"20",disabled:""},model:{value:e.newForm.appName,callback:function(t){e.$set(e.newForm,"appName",t)},expression:"newForm.appName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_channel_name"),prop:"channelName"}},[a("el-select",{model:{value:e.newForm.channelName,callback:function(t){e.$set(e.newForm,"channelName",t)},expression:"newForm.channelName"}},[a("el-option",{attrs:{value:"dosspay",label:"dosspay"}})],1)],1),a("el-form-item",{attrs:{label:"Private Key",prop:"apiSecret"}},[a("el-input",{model:{value:e.newForm.apiSecret,callback:function(t){e.$set(e.newForm,"apiSecret",t)},expression:"newForm.apiSecret"}})],1),a("el-form-item",{attrs:{label:"ApiKey",prop:"apiKey"}},[a("el-input",{model:{value:e.newForm.apiKey,callback:function(t){e.$set(e.newForm,"apiKey",t)},expression:"newForm.apiKey"}})],1),a("el-form-item",{attrs:{label:"UserID",prop:"dosspayUserId"}},[a("el-input",{model:{value:e.newForm.dosspayUserId,callback:function(t){e.$set(e.newForm,"dosspayUserId",t)},expression:"newForm.dosspayUserId"}})],1),a("el-form-item",{attrs:{label:"是否自动放款",prop:"tenantDossPayConfig.autoLoa"}},[a("el-radio-group",{model:{value:e.newForm.tenantDossPayConfig.autoLoa,callback:function(t){e.$set(e.newForm.tenantDossPayConfig,"autoLoa",t)},expression:"newForm.tenantDossPayConfig.autoLoa"}},[a("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("common_is")))]),a("el-radio",{attrs:{label:0}},[e._v(e._s(e.$t("common_no")))])],1)],1),a("el-form-item",{attrs:{label:"余额预警阈值",prop:"tenantDossPayConfig.balanceWaring"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.newForm.tenantDossPayConfig.balanceWaring,callback:function(t){e.$set(e.newForm.tenantDossPayConfig,"balanceWaring",t)},expression:"newForm.tenantDossPayConfig.balanceWaring"}},[a("template",{slot:"prepend"},[e._v("GHC")])],2)],1),a("el-form-item",{attrs:{label:"还款回调预警阈值",prop:"tenantDossPayConfig.refundCallbackWaring"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:e.newForm.tenantDossPayConfig.refundCallbackWaring,callback:function(t){e.$set(e.newForm.tenantDossPayConfig,"refundCallbackWaring",t)},expression:"newForm.tenantDossPayConfig.refundCallbackWaring"}},[a("template",{slot:"append"},[e._v("次")])],2)],1),a("el-form-item",{attrs:{label:e.$t("merConfig_status"),prop:"status"}},[a("el-radio-group",{model:{value:e.newForm.status,callback:function(t){e.$set(e.newForm,"status",t)},expression:"newForm.status"}},[a("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("common_enable_status")))]),a("el-radio",{attrs:{label:0}},[e._v(e._s(e.$t("common_disable_status")))])],1)],1),a("el-form-item",{attrs:{label:e.$t("common_remark"),prop:"remark"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},maxlength:"100","show-word-limit":""},model:{value:e.newForm.remark,callback:function(t){e.$set(e.newForm,"remark",t)},expression:"newForm.remark"}})],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{on:{click:function(t){e.data.dialogVisible=!1}}},[e._v(e._s(e.$t("common_cancel_button")))]),a("el-button",{attrs:{type:"primary",loading:e.data.btnLoading},on:{click:e.confirmForm}},[e._v(e._s(e.$t("common_submit_button")))])],1)],1)],1)},o=[],r=a("5530"),l=a("3ec7"),s=a("a6f4"),i=a("c24f"),m=a("5c96"),c={name:"PaymentChannel",setup:function(e,t){var a=Object(s["e"])({tenantName:"",appName:"",status:""}),n=Object(s["e"])({id:0,tenantId:"",tenantName:"",appName:"",channelName:"",apiKey:"",dosspayUserId:"",apiSecret:"",url:"",status:1,remark:"",isWithholding:1,paystackPublicKey:"",tenantLogo:"",tenantDossPayConfig:{autoLoa:"",balanceWaring:"",refundCallbackWaring:""}}),o=Object(s["e"])({total:0,page:{pageNum:1,pageSize:10},list:[],listLoading:!0,btnLoading:!1,upLoading:!1,dialogVisible:!1}),c=Object(s["e"])({tenantName:[{required:!0,message:t.root.$t("common_required"),trigger:"blur"}],appName:[{required:!0,message:t.root.$t("common_required"),trigger:"blur"}],channelName:[{required:!0,message:t.root.$t("common_required"),trigger:"blur"}],apiSecret:[{required:!0,message:t.root.$t("common_required"),trigger:"blur"}],url:[{required:!0,message:t.root.$t("common_required"),trigger:"blur"}],paystackPublicKey:[{required:!0,message:t.root.$t("common_required"),trigger:"blur"}],status:[{required:!0,message:t.root.$t("common_required"),trigger:"change"}],tenantLogo:[{required:!0,message:t.root.$t("common_required"),trigger:"blur"}]}),u=function(){o.page.pageNum=1,b()},p=Object(s["f"])(null),d=function(){a.tenantName="",a.appName="",a.status="",u()},b=function(){o.listLoading=!0,Object(l["d"])(Object(r["a"])({param:Object(r["a"])({},a)},o.page)).then((function(e){o.list=e.data.list,o.total=e.data.total,o.listLoading=!1}))};b();var g=function(e,t){console.log("success"),n.tenantLogo=e.data},f=function(e){o.upLoading=!0,o.btnLoading=!0;var t=new FormData;t.append("file",e.file),t.append("type",3),Object(i["a"])(t).then((function(e){n.tenantLogo=e.data,o.upLoading=!1,o.btnLoading=!1}))},_=function(e){Object(l["a"])({tenantId:e}).then((function(e){var t=e.data;n.id=t.id,n.tenantId=t.tenantId,n.tenantName=t.tenantName,n.appName=t.appName,n.channelName=t.channelName,n.apiSecret=t.apiSecret,n.url=t.url,n.isWithholding=t.isWithholding,n.status=t.status,n.remark=t.remark,n.paystackPublicKey=t.paystackPublicKey,n.tenantLogo=t.tenantLogo,n.tenantDossPayConfig=t.tenantDossPayConfig||{autoLoa:"",balanceWaring:"",refundCallbackWaring:""},n.apiKey=t.apiKey,n.dosspayUserId=t.dosspayUserId}))},h=function(e){_(e),o.dialogVisible=!0},$=function(){p.value.validate((function(e){if(!e)return!1;o.btnLoading=!0,Object(l["c"])(Object(r["a"])({},n)).then((function(e){m["Message"].success(e.message),b(),o.dialogVisible=!1,p.value.resetFields(),o.btnLoading=!1}))}))};return{searchForm:a,newForm:n,data:o,rules:c,search:u,editForm:p,refresh:d,getList:b,getEditData:_,handleEdit:h,confirmForm:$,handleImgSuccess:g,uploadCommonFile:f}}},u=c,p=(a("d64d"),a("2877")),d=Object(p["a"])(u,n,o,!1,null,null,null);t["default"]=d.exports},"3ec7":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return m}));var n=a("0c6d");function o(e){return Object(n["a"])({url:"/boss/tenant/configuration/payment/list",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/boss/tenant/configuration/payment/modification",method:"post",data:{param:e}})}function l(e){return Object(n["a"])({url:"/boss/tenant/configuration/sms/list",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/boss/tenant/configuration/sms/modification",method:"post",data:{param:e}})}function i(e){return Object(n["a"])({url:"/boss/tenant/configuration/payment",method:"post",data:{param:e}})}function m(e){return Object(n["a"])({url:"/boss/tenant/configuration/sms",method:"post",data:{param:e}})}},"4d1c":function(e,t,a){},d64d:function(e,t,a){"use strict";a("4d1c")}}]);