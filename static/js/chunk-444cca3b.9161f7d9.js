(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-444cca3b"],{3488:function(t,e,a){},"3ecf":function(t,e,a){"use strict";a("3488")},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"915b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"searchForm",staticClass:"mb10",attrs:{inline:!0,model:t.searchForm,"label-suffix":"："}},[a("el-form-item",{attrs:{label:t.$t("common_status"),prop:"status"}},[a("el-select",{attrs:{clearable:""},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[a("el-option",{attrs:{label:t.$t("operation_online"),value:"1"}}),a("el-option",{attrs:{label:t.$t("operation_offline"),value:"0"}})],1)],1),a("el-form-item",{attrs:{label:t.$t("operation_istribution_object"),prop:"offerObject"}},[a("el-select",{attrs:{clearable:""},model:{value:t.searchForm.offerObject,callback:function(e){t.$set(t.searchForm,"offerObject",e)},expression:"searchForm.offerObject"}},[a("el-option",{attrs:{label:t.$t("operation_new_user"),value:"2"}}),a("el-option",{attrs:{label:t.$t("operation_old_user"),value:"3"}}),a("el-option",{attrs:{label:t.$t("operation_loan_success"),value:"4"}}),a("el-option",{attrs:{label:t.$t("operation_online_back"),value:"5"}}),a("el-option",{attrs:{label:t.$t("operation_card_credit"),value:"6"}}),a("el-option",{attrs:{label:t.$t("operation_particular_user"),value:"7"}})],1)],1),a("el-form-item",[a("icon-button",{attrs:{type:"search"},on:{click:t.onSearch}},[t._v(t._s(t.$t("common_search")))])],1)],1),a("div",{staticClass:"mb20"},[a("icon-button",{directives:[{name:"has",rawName:"v-has",value:t.$auth.TENANTCONFIG_ADD,expression:"$auth.TENANTCONFIG_ADD"}],attrs:{type:"add"},on:{click:t.handleAdd}},[t._v(t._s(t.$t("common_add")))])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"table",attrs:{data:t.list,border:"","header-row-class-name":"table-header"}},[a("el-table-column",{attrs:{prop:"tenantName",label:t.$t("common_app_name")}}),a("el-table-column",{attrs:{prop:"id",label:t.$t("operation_activity_id")}}),a("el-table-column",{attrs:{prop:"activityName",label:t.$t("operation_activity_name")}}),a("el-table-column",{attrs:{prop:"startTime",label:t.$t("operation_activity_time")},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[a("span",[t._v(t._s(o.startTime)+"-"+t._s(o.endTime))])]}}])}),a("el-table-column",{attrs:{prop:"offerObject",label:t.$t("operation_istribution_object"),formatter:t.objectFormatter}}),a("el-table-column",{attrs:{prop:"couponAmount",label:t.$t("operation_coupon_amount")}}),a("el-table-column",{attrs:{prop:"effectiveDays",label:t.$t("operation_coupon_time")}}),a("el-table-column",{attrs:{prop:"status",label:t.$t("common_status")},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[a("span",[t._v(t._s(1==o.status?t.$t("operation_online"):t.$t("operation_offline")))])]}}])}),a("el-table-column",{attrs:{prop:"accountName",label:t.$t("operation_creater")}}),a("el-table-column",{attrs:{prop:"createTime",label:t.$t("common_create_time")}}),a("el-table-column",{attrs:{label:t.$t("common_operation"),fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[a("el-row",[a("el-col",{staticClass:"mb10"},[a("el-button",{directives:[{name:"has",rawName:"v-has",value:t.$auth.TENANTCONFIG_EDIT,expression:"$auth.TENANTCONFIG_EDIT"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.handleEdit(o)}}},[t._v(t._s(t.$t("common_edit")))])],1),a("el-col",{staticClass:"mb10"},[a("el-button",{directives:[{name:"has",rawName:"v-has",value:t.$auth.TENANTCONFIG_DETAIL,expression:"$auth.TENANTCONFIG_DETAIL"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.handleDetail(o.id)}}},[t._v(t._s(t.$t("operation_activity_detail")))])],1),a("el-col",[a("el-button",{directives:[{name:"has",rawName:"v-has",value:t.$auth.TENANTCONFIG_USER_DETAIL,expression:"$auth.TENANTCONFIG_USER_DETAIL"}],attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.handleExport(o.id)}}},[t._v(t._s(t.$t("operation_user_export")))])],1)],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.page.pageNum,limit:t.page.pageSize},on:{"update:page":function(e){return t.$set(t.page,"pageNum",e)},"update:limit":function(e){return t.$set(t.page,"pageSize",e)},pagination:t.getList}}),a("el-dialog",{attrs:{visible:t.dialogVisible,width:"600px",title:"edit"==t.dialogType?t.$t("common_edit"):t.$t("common_add"),"before-close":t.handleCancel,"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"newForm",attrs:{model:t.newForm,rules:t.rules,"label-suffix":"：","label-width":"auto"}},[a("el-form-item",{attrs:{label:t.$t("operation_activity_name"),prop:"activityName"}},[a("el-input",{attrs:{maxlength:"20",disabled:"edit"==t.dialogType},model:{value:t.newForm.activityName,callback:function(e){t.$set(t.newForm,"activityName",e)},expression:"newForm.activityName"}})],1),a("el-form-item",{attrs:{label:t.$t("operation_activity_time"),prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd",disabled:"edit"==t.dialogType},model:{value:t.newForm.time,callback:function(e){t.$set(t.newForm,"time",e)},expression:"newForm.time"}})],1),a("el-form-item",{attrs:{label:t.$t("operation_istribution_object"),prop:"shape"}},[a("el-select",{attrs:{clearable:"",disabled:"edit"==t.dialogType},model:{value:t.newForm.shape,callback:function(e){t.$set(t.newForm,"shape",e)},expression:"newForm.shape"}},[a("el-option",{attrs:{label:t.$t("operation_user_property"),value:"1"}}),a("el-option",{attrs:{label:t.$t("operation_user_behavior"),value:"2"}}),a("el-option",{attrs:{label:t.$t("operation_particular_user"),value:"3"}})],1)],1),1==t.newForm.shape?a("el-form-item",{attrs:{label:t.$t("operation_user_property"),prop:"offerObject"}},[a("el-radio-group",{attrs:{disabled:"edit"==t.dialogType},model:{value:t.newForm.offerObject,callback:function(e){t.$set(t.newForm,"offerObject",e)},expression:"newForm.offerObject"}},[a("el-radio",{attrs:{label:2}},[t._v(t._s(t.$t("operation_new_user")))]),a("el-radio",{attrs:{label:3}},[t._v(t._s(t.$t("operation_old_user")))])],1)],1):t._e(),2==t.newForm.shape?a("el-form-item",{attrs:{label:t.$t("operation_user_behavior"),prop:"offerObject"}},[a("el-radio-group",{attrs:{disabled:"edit"==t.dialogType},model:{value:t.newForm.offerObject,callback:function(e){t.$set(t.newForm,"offerObject",e)},expression:"newForm.offerObject"}},[a("el-radio",{attrs:{label:4}},[t._v(t._s(t.$t("operation_loan_success")))]),a("el-radio",{attrs:{label:5}},[t._v(t._s(t.$t("operation_online_back")))]),a("el-radio",{attrs:{label:6}},[t._v(t._s(t.$t("operation_card_credit")))])],1)],1):t._e(),3==t.newForm.shape&&"add"==t.dialogType?a("el-form-item",{attrs:{label:t.$t("operation_user_behavior")}},[a("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:t.upLoading,expression:"upLoading"}],attrs:{action:"/","show-file-list":!0,limit:1,accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",disabled:"edit"==t.dialogType,multiple:!1,"http-request":t.uploadCommonFile}},[a("el-button",[t._v(t._s(t.$t("operation_upload_file")))]),a("div",{staticClass:"el-upload__tip",staticStyle:{color:"red"},attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.$t("operation_valid_upfile")))])],1),a("el-link",{staticClass:"downTemplate",attrs:{type:"primary",href:"http://doc.oceansmountain.com/demo/specialuserdemo.xlsx",target:"_blank"}},[t._v(t._s(t.$t("operation_down_template")))])],1):t._e(),a("el-form-item",{attrs:{label:t.$t("operation_notice_text"),prop:"content"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},maxlength:"100","show-word-limit":""},model:{value:t.newForm.content,callback:function(e){t.$set(t.newForm,"content",e)},expression:"newForm.content"}})],1),a("el-form-item",{attrs:{label:t.$t("operation_coupon_amount"),prop:"couponAmount"}},[a("el-input",{attrs:{maxlength:"4",disabled:"edit"==t.dialogType},model:{value:t.newForm.couponAmount,callback:function(e){t.$set(t.newForm,"couponAmount",t._n(e))},expression:"newForm.couponAmount"}})],1),a("el-form-item",{attrs:{label:t.$t("operation_coupon_time"),prop:"effectiveDays"}},[t._v(" "+t._s(t.$t("operation_receiving"))+" "),a("el-input",{staticStyle:{width:"80px"},attrs:{maxlength:"4",disabled:"edit"==t.dialogType},model:{value:t.newForm.effectiveDays,callback:function(e){t.$set(t.newForm,"effectiveDays",t._n(e))},expression:"newForm.effectiveDays"}}),t._v(" "+t._s(t.$t("operation_day"))+t._s(t.$t("operation_effective"))+" ")],1),a("el-form-item",{attrs:{label:t.$t("common_status"),prop:"status"}},[a("el-radio-group",{model:{value:t.newForm.status,callback:function(e){t.$set(t.newForm,"status",e)},expression:"newForm.status"}},[a("el-radio",{attrs:{label:1}},[t._v(t._s(t.$t("operation_online")))]),a("el-radio",{attrs:{label:2}},[t._v(t._s(t.$t("operation_offline")))])],1)],1)],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{on:{click:t.handleCancel}},[t._v(t._s(t.$t("common_cancel")))]),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.confirmForm}},[t._v(t._s(t.$t("common_submit")))])],1)],1),a("el-dialog",{attrs:{visible:t.detailVisible,width:"750px",title:t.$t("operation_activity_detail"),"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(e){t.detailVisible=e}}},[a("div",[a("el-row",{staticClass:"mb20"},[a("el-col",{attrs:{span:12}},[t._v(t._s(t.$t("operation_activity_id"))+"："+t._s(t.detailData.id))]),a("el-col",{attrs:{span:12}},[t._v(t._s(t.$t("operation_activity_name"))+"："+t._s(t.detailData.activityName))])],1),a("el-row",{staticClass:"mb20"},[a("el-col",{attrs:{span:12}},[t._v(t._s(t.$t("operation_activity_time"))+"："+t._s(t.detailData.startTime)+"-"+t._s(t.detailData.endTime))]),a("el-col",{attrs:{span:12}},[t._v(t._s(t.$t("common_create_time"))+"："+t._s(t.detailData.createTime))])],1),a("el-row",{staticClass:"mb20"},[a("el-col",{attrs:{span:12}},[t._v(t._s(t.$t("operation_istribution_object"))+"："+t._s(t.$t(t.detailData.offerObject)))]),a("el-col",{attrs:{span:12}},[t._v(t._s(t.$t("common_status"))+"："+t._s(1==t.detailData.status?t.$t("operation_online"):t.$t("operation_offline")))])],1),a("el-row",{staticClass:"tableHead"},[a("el-col",{attrs:{span:5}},[t._v(t._s(t.$t("operation_coupon_amount")))]),a("el-col",{attrs:{span:5}},[t._v(t._s(t.$t("operation_activity_sendNum")))]),a("el-col",{attrs:{span:5}},[t._v(t._s(t.$t("operation_activity_useNum")))]),a("el-col",{attrs:{span:5}},[t._v(t._s(t.$t("operation_activity_useRate"))+" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("operation_activity_tip1"),placement:"right"}},[a("i",{staticClass:"el-icon-question"})])],1),a("el-col",{attrs:{span:4}},[t._v(t._s(t.$t("operation_activity_totalCost"))+" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("operation_activity_tip2"),placement:"right"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),a("el-row",{staticClass:"tableBody"},[a("el-col",{attrs:{span:5}},[t._v(t._s(t.detailData.couponAmount))]),a("el-col",{attrs:{span:5}},[t._v(t._s(t.detailData.sendNum))]),a("el-col",{attrs:{span:5}},[t._v(t._s(t.detailData.useNum))]),a("el-col",{attrs:{span:5}},[t._v(t._s(t.detailData.useRate)+"% ")]),a("el-col",{attrs:{span:4}},[t._v(t._s(t.detailData.totalCost))])],1)],1)])],1)},r=[],n=(a("ac1f"),a("1276"),a("5530")),i=a("c356"),s=a("92c2"),l=a("5f87"),c=a("2ef0"),u=a("267e"),p=a("ed08"),m={name:"activity",data:function(){return{token:Object(l["a"])(),total:0,searchForm:{status:"",offerObject:""},page:{pageNum:1,pageSize:10},list:[],listLoading:!0,btnLoading:!1,upLoading:!1,dialogVisible:!1,dialogType:"add",detailVisible:!1,detailData:{},newForm:{activityName:"",couponAmount:"",effectiveDays:"",offerObject:"",status:1,startTime:"",endTime:"",time:[],content:"",specialUserFilePath:""},rules:{activityName:[{required:!0,message:this.$t("common_required"),trigger:"blur"}],time:[{required:!0,message:this.$t("common_required"),trigger:"change"}],shape:[{required:!0,message:this.$t("common_required"),trigger:"change"}],offerObject:[{required:!0,message:this.$t("common_required"),trigger:"change"}],content:[{required:!0,message:this.$t("common_required"),trigger:"change"}],couponAmount:[{required:!0,message:this.$t("common_required"),trigger:"blur"},{type:"number",message:this.$t("common_valid_number"),trigger:"blur"}],effectiveDays:[{required:!0,message:this.$t("common_required"),trigger:"blur"},{type:"number",message:this.$t("common_valid_number"),trigger:"blur"}],status:[{required:!0,message:this.$t("common_required"),trigger:"change"}]}}},created:function(){this.getList()},methods:{onSearch:function(){this.page.pageNum=1,this.getList()},refresh:function(t){this.$refs.searchForm.resetFields(),this.getList()},getList:function(){var t=this;this.listLoading=!0,Object(i["g"])(Object(n["a"])({param:Object(n["a"])({},this.searchForm)},this.page)).then((function(e){t.list=e.data.list,t.total=e.data.total,t.listLoading=!1}))},objectFormatter:function(t,e){var a=t.offerObject;switch(a){case 2:return this.$t("operation_new_user");case 3:return this.$t("operation_old_user");case 4:return this.$t("operation_loan_success");case 5:return this.$t("operation_online_back");case 6:return this.$t("operation_card_credit");case 7:return this.$t("operation_particular_user");default:return""}},uploadCommonFile:function(t){var e=this;this.upLoading=!0;var a=new FormData;a.append("file",t.file),a.append("type",5),Object(s["b"])(a).then((function(t){e.newForm.specialUserFilePath=t.data,e.upLoading=!1}))},handleAdd:function(){this.dialogType="add",this.dialogVisible=!0},handleEdit:function(t){this.dialogType="edit",this.dialogVisible=!0,this.newForm=Object(c["cloneDeep"])(t),this.newForm.shape=t.offerObject>6?"3":t.offerObject>3?"2":"1",this.newForm.time=[t.startTime,t.endTime]},handleCancel:function(){this.dialogVisible=!1,this.resetForm()},confirmForm:function(){var t=this;this.$refs.newForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;var a="edit"==t.dialogType;if(t.btnLoading=!0,a)Object(i["c"])(Object(n["a"])({},t.newForm)).then((function(e){t.$message({message:e.message,type:"success"}),t.getList(),t.dialogVisible=!1,t.resetForm(),t.btnLoading=!1}));else{if(3==t.newForm.shape&&!t.newForm.specialUserFilePath)return t.$message({message:t.$t("operation_upfile_require"),type:"error"}),!1;3==t.newForm.shape&&(t.newForm.offerObject=7),t.newForm.startTime=t.newForm.time[0],t.newForm.endTime=t.newForm.time[1],Object(i["b"])(Object(n["a"])({},t.newForm)).then((function(e){t.$message({message:e.message,type:"success"}),t.getList(),t.dialogVisible=!1,t.resetForm(),t.btnLoading=!1}))}}))},resetForm:function(){this.$refs.newForm.resetFields(),this.newForm={activityName:"",couponAmount:"",effectiveDays:"",offerObject:"",status:1,startTime:"",endTime:"",time:[],content:""}},handleDetail:function(t){var e=this;Object(i["f"])({id:t}).then((function(t){e.detailData=t.data,e.detailData.offerObject=u["F"][t.data.offerObject],e.detailVisible=!0}))},handleExport:function(t){Object(i["a"])({id:t}).then((function(t){var e=t.headers["content-disposition"];e=e.split("filename=")[1],Object(p["a"])(t.data,e)}))}}},d=m,b=(a("3ecf"),a("2877")),f=Object(b["a"])(d,o,r,!1,null,"79b0260c",null);e["default"]=f.exports},"92c2":function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"j",(function(){return i})),a.d(e,"g",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"i",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"k",(function(){return p})),a.d(e,"b",(function(){return m})),a.d(e,"m",(function(){return d})),a.d(e,"l",(function(){return b})),a.d(e,"o",(function(){return f})),a.d(e,"n",(function(){return _})),a.d(e,"e",(function(){return h})),a.d(e,"f",(function(){return v}));var o=a("0c6d");function r(t){return Object(o["a"])({url:"/boss/user/getregistusersinfo",method:"post",data:t})}function n(t){return Object(o["a"])({url:"/boss/user/getblacklist",method:"post",data:t})}function i(t){return Object(o["a"])({url:"/boss/user/addblacklist",method:"post",data:t})}function s(t){return Object(o["a"])({url:"/boss/user/registout",method:"post",data:t})}function l(t){return Object(o["a"])({url:"/boss/user/cancelregistout",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/user/list",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/boss/user/removeblacklist",method:"post",data:t})}function p(t){return Object(o["a"])({url:"/boss/user/uploadblacklist",method:"post",data:t})}function m(t){return Object(o["a"])({url:"boss/file/upload",method:"post",data:t})}function d(t){return Object(o["a"])({url:"/boss/userAuthInfo/query",method:"post",data:t})}function b(t){return Object(o["a"])({url:"/boss/userAuthInfo/export",method:"post",responseType:"blob",data:t})}function f(t){return Object(o["a"])({url:"/boss/userBankInfo/query",method:"post",data:t})}function _(t){return Object(o["a"])({url:"/boss/userBankInfo/export",method:"post",responseType:"blob",data:t})}function h(t){return Object(o["a"])({url:"/boss/userBankInfo/getRegistUsersInfoList/export",method:"post",responseType:"blob",data:t})}function v(t){return Object(o["a"])({url:"/boss/userBankInfo/resetBankInfo",method:"post",data:t})}},c356:function(t,e,a){"use strict";a.d(e,"h",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"i",(function(){return i})),a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"f",(function(){return p})),a.d(e,"a",(function(){return m}));var o=a("0c6d");function r(t){return Object(o["a"])({url:"/boss/banner/list",method:"post",data:t})}function n(t){return Object(o["a"])({url:"/boss/banner/update",method:"post",data:{param:t}})}function i(t){return Object(o["a"])({url:"/boss/tenantConfigCustomerService/list",method:"post",data:{param:{}}})}function s(t){return console.log(111,t),Object(o["a"])({url:"/boss/tenantConfigCustomerService/addOrUpdate",method:"post",data:{isEmptyString:!0,param:t}})}function l(t){return Object(o["a"])({url:"/boss/banner/getactives",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/boss/banner/addactives",method:"post",data:{param:t}})}function u(t){return Object(o["a"])({url:"/boss/banner/updateactives",method:"post",data:{param:t}})}function p(t){return Object(o["a"])({url:"/boss/banner/getActivesDetail",method:"post",data:{param:t}})}var m=function(t){return Object(o["a"])({url:"/boss/banner/activesDetailExport",responseType:"blob",method:"post",data:{param:t}})}}}]);