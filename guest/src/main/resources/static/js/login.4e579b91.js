(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0290":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"ms-login"},[s("div",{staticClass:"ms-title"},[e._v("酒店信息管理系统")]),s("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.param,rules:e.rules,"label-width":"0px"}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:"username"},model:{value:e.param.username,callback:function(t){e.$set(e.param,"username",t)},expression:"param.username"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitForm()}},model:{value:e.param.password,callback:function(t){e.$set(e.param,"password",t)},expression:"param.password"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("登录")])],1),s("p",{staticClass:"login-tips"},[e._v("Tips : 请勿多次重复登录。")])],1)],1)])},r=[],o={data:function(){return{param:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this,t=this.param.username;"admin"===t?this.$http.post("http://localhost/backgroundLogin?backId="+this.param.username+"&password="+this.param.password).then((function(t){if(console.log(t),200!==t.data.code)return e.$message.error("请输入正确的账号和密码"),console.log("error submit!!"),!1;console.log(t.data.data),e.$message.success("登录成功"),localStorage.setItem("token",t.data.data),localStorage.setItem("ms_username",e.param.username),e.$router.push("/")})):this.$http.post("http://localhost/frontLogin?frontId="+this.param.username+"&password="+this.param.password).then((function(t){if(200!==t.data.code)return e.$message.error("请输入正确的账号和密码"),console.log("error submit!!"),!1;console.log(t.data.data),e.$message.success("登录成功"),localStorage.setItem("token",t.data.data),localStorage.setItem("ms_username",e.param.username),e.$router.push("/")}))}}},n=o,l=(s("7e2d"),s("2877")),i=Object(l["a"])(n,a,r,!1,null,"56995ec4",null);t["default"]=i.exports},"5caf":function(e,t,s){},"7e2d":function(e,t,s){"use strict";s("5caf")}}]);
//# sourceMappingURL=login.4e579b91.js.map