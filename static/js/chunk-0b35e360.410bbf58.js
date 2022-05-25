(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b35e360"],{"3e6c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"searchForm",attrs:{inline:!0,model:e.searchForm,"label-suffix":"："}},[a("el-form-item",{attrs:{label:e.$t("merConfig_merchant_name"),prop:"tenantName"}},[a("el-input",{attrs:{maxlength:"20"},model:{value:e.searchForm.tenantName,callback:function(t){e.$set(e.searchForm,"tenantName",t)},expression:"searchForm.tenantName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_app_name"),prop:"appName"}},[a("el-input",{attrs:{maxlength:"20"},model:{value:e.searchForm.appName,callback:function(t){e.$set(e.searchForm,"appName",t)},expression:"searchForm.appName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_status"),prop:"status"}},[a("el-select",{attrs:{clearable:""},model:{value:e.searchForm.status,callback:function(t){e.$set(e.searchForm,"status",t)},expression:"searchForm.status"}},[a("el-option",{attrs:{label:e.$t("common_enable_status"),value:1}}),a("el-option",{attrs:{label:e.$t("common_disable_status"),value:0}})],1)],1),a("el-form-item",[a("icon-button",{attrs:{type:"search"},on:{click:e.search}},[e._v(e._s(e.$t("common_search_button")))])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"table",attrs:{data:e.list,border:"","header-row-class-name":"table-header"}},[a("el-table-column",{attrs:{type:"index",label:e.$t("common_order")}}),a("el-table-column",{attrs:{prop:"accountName",label:e.$t("merConfig_login_name")}}),a("el-table-column",{attrs:{prop:"tenantName",label:e.$t("merConfig_merchant_name")}}),a("el-table-column",{attrs:{prop:"appName",label:e.$t("merConfig_app_name")}}),a("el-table-column",{attrs:{prop:"channelName",label:e.$t("merConfig_channel_name")}}),a("el-table-column",{attrs:{prop:"apiKey",label:e.$t("merConfig_api_account")}}),a("el-table-column",{attrs:{prop:"apiSecret",label:e.$t("merConfig_key")}}),a("el-table-column",{attrs:{prop:"url",label:e.$t("merConfig_url")}}),a("el-table-column",{attrs:{prop:"status",label:e.$t("merConfig_status")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(1==n.status?e.$t("common_enable_status"):e.$t("common_disable_status")))])]}}])}),a("el-table-column",{attrs:{prop:"updateTime",label:e.$t("common_operation_time")}}),a("el-table-column",{attrs:{prop:"operatorName",label:e.$t("common_operator")}}),a("el-table-column",{attrs:{prop:"remark",label:e.$t("common_remark")}}),a("el-table-column",{attrs:{label:e.$t("common_operation"),fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:e.$auth.SMS_EDIT,expression:"$auth.SMS_EDIT"}],attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.handleEdit(n.tenantId)}}},[e._v(e._s(e.$t("common_edit_button"))+" ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.page.pageNum,limit:e.page.pageSize},on:{"update:page":function(t){return e.$set(e.page,"pageNum",t)},"update:limit":function(t){return e.$set(e.page,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"600px",title:e.$t("common_edit_button"),"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"newForm",attrs:{model:e.newForm,rules:e.rules,"label-suffix":"：","label-width":"110px"}},[a("el-form-item",{attrs:{label:e.$t("merConfig_merchant_name"),prop:"tenantName"}},[a("el-input",{attrs:{maxlength:"20",disabled:""},model:{value:e.newForm.tenantName,callback:function(t){e.$set(e.newForm,"tenantName",t)},expression:"newForm.tenantName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_app_name"),prop:"appName"}},[a("el-input",{attrs:{maxlength:"20",disabled:""},model:{value:e.newForm.appName,callback:function(t){e.$set(e.newForm,"appName",t)},expression:"newForm.appName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_channel_name"),prop:"channelName"}},[a("el-input",{attrs:{maxlength:"20"},model:{value:e.newForm.channelName,callback:function(t){e.$set(e.newForm,"channelName",t)},expression:"newForm.channelName"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_api_account"),prop:"apiKey"}},[a("el-input",{model:{value:e.newForm.apiKey,callback:function(t){e.$set(e.newForm,"apiKey",t)},expression:"newForm.apiKey"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_key"),prop:"apiSecret"}},[a("el-input",{model:{value:e.newForm.apiSecret,callback:function(t){e.$set(e.newForm,"apiSecret",t)},expression:"newForm.apiSecret"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_url"),prop:"url"}},[a("el-input",{model:{value:e.newForm.url,callback:function(t){e.$set(e.newForm,"url",t)},expression:"newForm.url"}})],1),a("el-form-item",{attrs:{label:e.$t("merConfig_status"),prop:"status"}},[a("el-radio-group",{model:{value:e.newForm.status,callback:function(t){e.$set(e.newForm,"status",t)},expression:"newForm.status"}},[a("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("common_enable_status")))]),a("el-radio",{attrs:{label:0}},[e._v(e._s(e.$t("common_disable_status")))])],1)],1),a("el-form-item",{attrs:{label:e.$t("common_remark"),prop:"remark"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},maxlength:"100","show-word-limit":""},model:{value:e.newForm.remark,callback:function(t){e.$set(e.newForm,"remark",t)},expression:"newForm.remark"}})],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(e._s(e.$t("common_cancel_button")))]),a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirmForm}},[e._v(e._s(e.$t("common_submit_button")))])],1)],1)],1)},r=[],o=a("5530"),l=a("3ec7"),i=a("2ef0"),s={name:"PaymentChannel",data:function(){return{total:0,searchForm:{merchantName:"",appName:"",status:""},page:{pageNum:1,pageSize:10},list:[],listLoading:!0,btnLoading:!1,dialogVisible:!1,newForm:{id:0,tenantId:"",tenantName:"",appName:"",channelName:"",apiSecret:"",apiKey:"",url:"",status:1,remark:""},rules:{tenantName:[{required:!0,message:this.$t("common_required"),trigger:"blur"}],appName:[{required:!0,message:this.$t("common_required"),trigger:"blur"}],channelName:[{required:!0,message:this.$t("common_required"),trigger:"blur"}],apiKey:[{required:!0,message:this.$t("common_required"),trigger:"blur"}],apiSecret:[{required:!0,message:this.$t("common_required"),trigger:"blur"}],url:[{required:!0,message:this.$t("common_required"),trigger:"blur"}],status:[{required:!0,message:this.$t("common_required"),trigger:"change"}]}}},created:function(){this.getList()},methods:{search:function(){this.page.pageNum=1,this.getList()},refresh:function(){this.$refs.searchForm.resetFields(),this.getList()},getList:function(){var e=this;this.listLoading=!0,Object(l["f"])(Object(o["a"])({param:Object(o["a"])({},this.searchForm)},this.page)).then((function(t){e.list=t.data.list,e.total=t.data.total,e.listLoading=!1}))},getEditData:function(e){var t=this;Object(l["b"])({tenantId:e}).then((function(e){var a=e.data;t.newForm=Object(i["cloneDeep"])(a)}))},handleEdit:function(e){this.dialogVisible=!0,this.getEditData(e)},confirmForm:function(){var e=this;this.$refs.newForm.validate((function(t){if(!t)return!1;e.btnLoading=!0;var a={id:e.newForm.id,tenantId:e.newForm.tenantId,channelName:e.newForm.channelName,apiSecret:e.newForm.apiSecret,url:e.newForm.url,remark:e.newForm.remark,status:e.newForm.status,apiKey:e.newForm.apiKey};Object(l["e"])(a).then((function(t){e.dialogVisible=!1,e.$message({message:t.message,type:"success"}),e.$refs.newForm.resetFields(),e.getList(),e.btnLoading=!1}))}))}}},m=s,c=a("2877"),u=Object(c["a"])(m,n,r,!1,null,null,null);t["default"]=u.exports},"3ec7":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a("0c6d");function r(e){return Object(n["a"])({url:"/boss/tenant/configuration/payment/list",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/boss/tenant/configuration/payment/modification",method:"post",data:{param:e}})}function l(e){return Object(n["a"])({url:"/boss/tenant/configuration/sms/list",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/boss/tenant/configuration/sms/modification",method:"post",data:{param:e}})}function s(e){return Object(n["a"])({url:"/boss/tenant/configuration/payment",method:"post",data:{param:e}})}function m(e){return Object(n["a"])({url:"/boss/tenant/configuration/sms",method:"post",data:{param:e}})}}}]);