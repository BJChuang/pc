(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cdedb40"],{"0ab8":function(e,t,n){"use strict";n("b600")},2017:function(e,t,n){"use strict";n("cafe")},"9ed6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("登录/注册")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"邮箱",name:"username",type:"text",tabindex:"1"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{staticClass:"password-item",attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:e.passwordType,ref:"password",staticStyle:{display:"flex",width:"80%"},attrs:{placeholder:"验证码",name:"password",tabindex:"2"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("el-button",{staticClass:"btncode",attrs:{slot:"append",type:"primary"},on:{click:e.send},slot:"append"},[e._v(e._s(e.btnText))])],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录/注册")])],1)],1)},s=[],r=n("365c"),a=!0,i={name:"Login",data:function(){var e=function(e,t,n){t?n():n(new Error("请输入邮箱"))},t=function(e,t,n){t?n():n(new Error("请输入验证码"))};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0,btnText:"获取验证码",token:""}},created:function(){console.log()},methods:{send:function(){var e=this;if(!this.loginForm.username)return this.$message({message:"请输入正确的邮箱",type:"error"}),!1;if(!a)return!1;a=!1;var t=60,n=setInterval((function(){t--,e.btnText="".concat(t,"秒后重试"),t<=0&&(clearInterval(n),t=60,e.btnText="获取验证码",a=!0)}),1e3);Object(r["f"])({Email:this.loginForm.username}).then((function(t){t.Token?(e.token=t.Token,e.$message({message:"发送成功",type:"success"})):e.$message({message:"发送失败",type:"error"})}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,Object(r["d"])({Email:e.loginForm.username,Code:e.loginForm.password,Token:e.token}).then((function(t){console.log("请求登录成功"),console.log(e.$route),localStorage.setItem("pc-token",t.Token),e.$router.push("/"),e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))}))}}},l=i,c=(n("2017"),n("0ab8"),n("2877")),u=Object(c["a"])(l,o,s,!1,null,"b8dc48ae",null);t["default"]=u.exports},b600:function(e,t,n){},cafe:function(e,t,n){}}]);